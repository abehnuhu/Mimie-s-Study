"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { GameShell, type GameResult } from "./game-shell";
import { bubbleConcepts } from "./game-images";
import { Button } from "@/components/ui/button";
import { Heart, Play, RotateCcw, Sparkles, Star, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Bubble {
  uid: number;
  slug: string;
  x: number; // percent from left
  size: number;
  dur: number; // seconds to float up
}

interface Floater {
  uid: number;
  x: number; // px inside arena
  y: number;
  text: string;
  sub?: string;
  kind: "correct" | "wrong" | "miss";
}

const MAX_LIVES = 5;
const MAX_BUBBLES = 7;
const CORRECT_PER_LEVEL = 10;

let uidSeq = 1;

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function BubblePopGame() {
  const reduceMotion = useReducedMotion();
  const arenaControls = useAnimationControls();

  const [phase, setPhase] = useState<"ready" | "playing" | "over">("ready");
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [floaters, setFloaters] = useState<Floater[]>([]);
  const [targetSlug, setTargetSlug] = useState(() => pick(bubbleConcepts).slug);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [correct, setCorrect] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [wrongUid, setWrongUid] = useState<number | null>(null);
  const [levelFlash, setLevelFlash] = useState(0);
  const [comboFlash, setComboFlash] = useState(0);
  const [missNote, setMissNote] = useState<string | null>(null);

  const bubblesRef = useRef<Bubble[]>([]);
  const targetRef = useRef(targetSlug);
  const phaseRef = useRef(phase);
  const escapedRef = useRef(0);
  const arenaRef = useRef<HTMLDivElement>(null);
  bubblesRef.current = bubbles;
  targetRef.current = targetSlug;
  phaseRef.current = phase;

  const level = 1 + Math.floor(correct / CORRECT_PER_LEVEL);
  const multiplier = Math.min(5, 1 + Math.floor(combo / 3));
  const levelProgress = (correct % CORRECT_PER_LEVEL) / CORRECT_PER_LEVEL;
  const target = bubbleConcepts.find((c) => c.slug === targetSlug) ?? bubbleConcepts[0];

  const score100 = Math.max(0, Math.min(100, Math.round(score / 6)));
  const stars = phase === "over" ? (score100 >= 80 ? 3 : score100 >= 50 ? 2 : 1) : 0;
  const result: GameResult | null = phase === "over" ? { score: score100, timeSec: elapsed } : null;

  // ── lifecycle ─────────────────────────────────────────────
  const restart = useCallback(() => {
    setPhase("ready");
    setBubbles([]);
    setFloaters([]);
    setTargetSlug(pick(bubbleConcepts).slug);
    setScore(0);
    setCombo(0);
    setBestCombo(0);
    setLives(MAX_LIVES);
    setCorrect(0);
    escapedRef.current = 0;
    setElapsed(0);
    setWrongUid(null);
    setLevelFlash(0);
    setComboFlash(0);
    setMissNote(null);
  }, []);

  const loseLife = useCallback((reason: "wrong" | "missed", label?: string) => {
    setCombo(0);
    setLives((l) => {
      const next = l - 1;
      if (next <= 0) setPhase("over");
      return Math.max(0, next);
    });
    if (reason === "missed" && label) {
      setMissNote(`The ${label} bubble floated away 💗`);
      setTimeout(() => setMissNote(null), 2200);
    }
    if (!reduceMotion) {
      arenaControls.start({ x: [0, -6, 6, -4, 4, 0] }, { duration: 0.4 });
    }
  }, [arenaControls, reduceMotion]);

  const chooseNewTarget = useCallback((activeSlugs: string[]) => {
    const options = bubbleConcepts.filter((c) => c.slug !== targetRef.current);
    const onScreen = options.filter((c) => activeSlugs.includes(c.slug));
    const next = onScreen.length > 0 ? pick(onScreen) : pick(options.length > 0 ? options : bubbleConcepts);
    setTargetSlug(next.slug);
  }, []);

  // elapsed timer
  useEffect(() => {
    if (phase !== "playing") return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // level-up flash
  useEffect(() => {
    if (phase !== "playing" || level === 1) return;
    setLevelFlash((f) => f + 1);
    if (!reduceMotion) {
      arenaControls.start({ x: [0, -10, 10, -6, 6, -3, 3, 0] }, { duration: 0.55 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // ── bubble spawner ────────────────────────────────────────
  useEffect(() => {
    if (phase !== "playing") return;
    const spawnMs = Math.max(900, 2300 - (level - 1) * 220);
    const travel = Math.max(4.2, 9.5 - (level - 1) * 0.85);
    const spawn = () => {
      if (document.hidden) return;
      const active = bubblesRef.current;
      if (active.length >= MAX_BUBBLES) return;
      const hasTarget = active.some((b) => b.slug === targetRef.current);
      let slug: string;
      if (!hasTarget) slug = targetRef.current;
      else if (Math.random() < 0.32) slug = targetRef.current;
      else slug = pick(bubbleConcepts.filter((c) => c.slug !== targetRef.current)).slug;
      const small = typeof window !== "undefined" && window.innerWidth < 480;
      const size = Math.round((small ? 68 : 80) + Math.random() * 24);
      setBubbles((bs) => [
        ...bs,
        { uid: uidSeq++, slug, x: 4 + Math.random() * 80, size, dur: reduceMotion ? travel * 1.3 : travel },
      ]);
    };
    spawn(); // one straight away
    const t = setInterval(spawn, spawnMs);
    return () => clearInterval(t);
  }, [phase, level, reduceMotion]);

  // ── interactions ──────────────────────────────────────────
  function tapBubble(b: Bubble, e: React.PointerEvent | React.MouseEvent) {
    if (phaseRef.current !== "playing") return;
    const rect = arenaRef.current?.getBoundingClientRect();
    const fx = rect ? e.clientX - rect.left : 0;
    const fy = rect ? e.clientY - rect.top : 0;
    const concept = bubbleConcepts.find((c) => c.slug === b.slug);
    if (b.slug === targetRef.current) {
      const gain = 10 * multiplier;
      setScore((s) => s + gain);
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setBestCombo((bc) => Math.max(bc, nextCombo));
      setCorrect((c) => c + 1);
      setBubbles((bs) => bs.filter((x) => x.uid !== b.uid));
      setFloaters((fs) => [
        ...fs,
        { uid: b.uid, x: fx, y: fy, text: `+${gain}`, sub: nextCombo >= 3 ? `combo ×${multiplier}` : concept?.term, kind: "correct" },
      ]);
      if (nextCombo > 0 && nextCombo % 5 === 0) {
        setComboFlash((f) => f + 1);
        if (!reduceMotion) arenaControls.start({ x: [0, -8, 8, -5, 5, 0] }, { duration: 0.45 });
      }
      chooseNewTarget(bubblesRef.current.filter((x) => x.uid !== b.uid).map((x) => x.slug));
    } else {
      loseLife("wrong");
      setWrongUid(b.uid);
      setTimeout(() => setWrongUid(null), 550);
      setFloaters((fs) => [...fs, { uid: b.uid, x: fx, y: fy, text: "not this one", kind: "wrong" }]);
    }
  }

  function escapeBubble(b: Bubble) {
    const wasTarget = b.slug === targetRef.current;
    setBubbles((bs) => bs.filter((x) => x.uid !== b.uid));
    if (phaseRef.current !== "playing" || document.hidden) return;
    if (wasTarget) {
      const concept = bubbleConcepts.find((c) => c.slug === b.slug);
      escapedRef.current += 1;
      if (escapedRef.current % 3 === 0) {
        loseLife("missed", concept?.term);
      } else {
        setMissNote(`${3 - (escapedRef.current % 3)} more float-aways and a heart is lost 💗`);
        setTimeout(() => setMissNote(null), 2200);
      }
      chooseNewTarget(bubblesRef.current.filter((x) => x.uid !== b.uid).map((x) => x.slug));
    }
  }

  return (
    <GameShell
      slug="bubble-pop"
      title="Bubble Pop"
      description="Pop the photo bubble the prompt asks for — combos and levels await."
      icon="Sparkles"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
        {/* HUD */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 rounded-full bg-blossom-soft px-3 py-1.5 font-display font-bold text-primary dark:bg-plum/40 dark:text-lav">
            <Zap className="h-3.5 w-3.5" aria-hidden /> {score}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 rounded-full px-3 py-1.5 font-semibold transition-colors",
              combo >= 3 ? "bg-gold/25 text-foreground" : "bg-muted text-muted-foreground"
            )}
            aria-live="polite"
          >
            ×{multiplier} combo {combo > 0 && `· ${combo} in a row`}
          </span>
          <span className="ml-auto flex items-center gap-1" aria-label={`${lives} of ${MAX_LIVES} lives left`}>
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <Heart
                key={i}
                className={cn("h-4 w-4", i < lives ? "fill-primary text-primary" : "text-muted-foreground/30")}
                aria-hidden
              />
            ))}
          </span>
        </div>

        {/* prompt */}
        <div className="relative mb-3 overflow-hidden rounded-2xl border-2 border-primary/25 bg-gradient-to-r from-blossom-soft to-lav p-3 text-center dark:from-plum/45 dark:to-plum/25">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-primary/80 dark:text-lav/80">
            {phase === "playing" ? "Tap the photo showing" : "Bubble Pop"}
          </p>
          <p className="font-display text-lg font-bold text-primary dark:text-lav" aria-live="assertive">
            {phase === "playing" ? target.prompt : "Real photos · real speed"}
          </p>
          {phase === "playing" && (
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary/15" aria-hidden>
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-all duration-300"
                style={{ width: `${levelProgress * 100}%` }}
              />
            </div>
          )}
          <AnimatePresence>
            {missNote && phase === "playing" && (
              <motion.p
                key={missNote}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1.5 text-[11px] text-foreground/80"
              >
                {missNote}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* arena */}
        <motion.div
          ref={arenaRef}
          animate={arenaControls}
          className="relative h-[58vh] max-h-[600px] min-h-[420px] overflow-hidden rounded-3xl border border-primary/15 bg-[radial-gradient(circle_at_50%_120%,var(--color-blossom-soft),transparent_70%),radial-gradient(circle_at_20%_-10%,var(--color-lav),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_120%,var(--color-plum)/0.5,transparent_70%)]"
          role={phase === "playing" ? "application" : undefined}
          aria-label="Bubble popping arena"
        >
          {/* floating photo bubbles */}
          {bubbles.map((b) => {
            const concept = bubbleConcepts.find((c) => c.slug === b.slug);
            return (
              <motion.div
                key={b.uid}
                className="absolute"
                style={{ left: `${b.x}%` }}
                initial={{ bottom: "-28%" }}
                animate={{ bottom: "118%" }}
                transition={{ duration: b.dur, ease: "linear" }}
                onAnimationComplete={() => escapeBubble(b)}
              >
                <motion.button
                  onPointerDown={(e) => tapBubble(b, e)}
                  animate={wrongUid === b.uid && !reduceMotion ? { x: [0, -7, 7, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.45 }}
                  className="relative block cursor-pointer rounded-full border-4 border-blossom-soft shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] outline-none transition-transform hover:scale-105 focus-visible:scale-105 dark:border-plum/70"
                  style={{ width: b.size, height: b.size, pointerEvents: "auto", touchAction: "manipulation" }}
                  aria-label={concept ? `bubble: ${concept.term}` : "photo bubble"}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={concept?.photo}
                    alt={concept ? `photo hint: ${concept.term}` : ""}
                    draggable={false}
                    className="h-full w-full rounded-full object-cover"
                  />
                </motion.button>
              </motion.div>
            );
          })}

          {/* pop score floaters */}
          {floaters.map((f) => (
            <motion.div
              key={f.uid}
              initial={{ opacity: 0.95, y: 0, scale: 0.85 }}
              animate={{ opacity: 0, y: reduceMotion ? -30 : -80, scale: 1.05 }}
              transition={{ duration: reduceMotion ? 0.6 : 0.9, ease: "easeOut" }}
              onAnimationComplete={() => setFloaters((fs) => fs.filter((x) => x.uid !== f.uid))}
              className="pointer-events-none absolute z-20 -translate-x-1/2 text-center"
              style={{ left: f.x, top: f.y }}
            >
              {f.kind === "correct" && (
                <motion.span
                  initial={{ scale: 0.3, opacity: 0.9 }}
                  animate={{ scale: 1.9, opacity: 0 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0 -m-4 block rounded-full border-4 border-gold"
                  aria-hidden
                />
              )}
              <p
                className={cn(
                  "font-display text-lg font-bold drop-shadow-sm",
                  f.kind === "correct" ? "text-primary dark:text-lav" : f.kind === "wrong" ? "text-destructive" : "text-foreground"
                )}
              >
                {f.text}
              </p>
              {f.sub && <p className="text-[11px] font-semibold text-foreground/80">{f.sub}</p>}
            </motion.div>
          ))}

          {/* level flash banner */}
          <AnimatePresence>
            {levelFlash > 0 && phase === "playing" && (
              <motion.div
                key={levelFlash}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onAnimationComplete={() => setTimeout(() => setLevelFlash(0), 900)}
                className="absolute left-1/2 top-1/3 z-30 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary/90 px-6 py-3 text-center shadow-xl"
                role="status"
              >
                <p className="font-display text-xl font-bold text-primary-foreground">Level {level}</p>
                <p className="text-xs text-primary-foreground/90">floating a little faster 🌸</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* combo flash */}
          <AnimatePresence>
            {comboFlash > 0 && phase === "playing" && (
              <motion.p
                key={comboFlash}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18 }}
                onAnimationComplete={() => setTimeout(() => setComboFlash(0), 800)}
                className="absolute left-1/2 top-16 z-30 -translate-x-1/2 font-display text-2xl font-bold text-gold drop-shadow"
              >
                {combo} combo 🔥
              </motion.p>
            )}
          </AnimatePresence>

          {/* ready overlay */}
          {phase === "ready" && (
            <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-card/60 p-6 text-center backdrop-blur-[2px]">
              <Sparkles className="h-10 w-10 text-primary" aria-hidden />
              <p className="max-w-xs text-sm text-muted-foreground">
                Photo bubbles float up — pop the one matching the prompt at the top. Wrong taps and float-aways cost
                hearts. Every 10 correct pops, the stream speeds up 💗
              </p>
              <Button onClick={() => setPhase("playing")} className="min-h-[48px] rounded-full px-8 text-base">
                <Play className="h-4 w-4" aria-hidden /> Start popping
              </Button>
            </div>
          )}

          {/* game over overlay */}
          {phase === "over" && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 18, stiffness: 220 }}
              className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-blossom-soft/95 via-card to-lav/90 p-6 text-center dark:from-plum/80 dark:via-card dark:to-plum/60"
            >
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary/80 dark:text-lav/80">
                {correct >= 20 ? "Bubble queen 💗" : correct >= 10 ? "Sweet round 🌸" : "Round over"}
              </p>
              <p className="font-display text-5xl font-bold text-primary dark:text-lav">{score}</p>
              <div className="flex items-center gap-1.5" aria-label={`${stars} of 3 stars`}>
                {[1, 2, 3].map((s) => (
                  <Star key={s} className={cn("h-6 w-6", s <= stars ? "fill-gold text-gold" : "text-muted-foreground/40")} aria-hidden />
                ))}
              </div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/80">
                <span className="flex items-center gap-1 rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden /> best combo ×{Math.min(5, 1 + Math.floor(bestCombo / 3))} · {bestCombo} in a row
                </span>
                <span className="flex items-center gap-1 rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">
                  <Zap className="h-3.5 w-3.5" aria-hidden /> level {level} reached
                </span>
                <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">
                  {correct} correct pops · {elapsed}s
                </span>
              </div>
              <Button onClick={restart} className="mt-2 min-h-[48px] rounded-full px-8">
                <RotateCcw className="h-4 w-4" aria-hidden /> Play again
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </GameShell>
  );
}
