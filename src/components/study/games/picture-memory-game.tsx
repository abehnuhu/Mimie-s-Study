"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { pictureMemoryPool } from "./game-images";
import { Flower2, Sparkles, Star, Timer, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

const PAIRS_PER_GAME = 8;

interface PhotoCard {
  key: string;
  pairId: number;
  kind: "photo" | "term";
  photo?: string;
  label: string;
  matched: boolean;
}

function buildDeck(): PhotoCard[] {
  const picked = shuffle(pictureMemoryPool).slice(0, PAIRS_PER_GAME);
  return shuffle([
    ...picked.map((p, i) => ({ key: `c${i}a`, pairId: i, kind: "photo" as const, photo: p.photo, label: p.term, matched: false })),
    ...picked.map((p, i) => ({ key: `c${i}b`, pairId: i, kind: "term" as const, label: p.term, matched: false })),
  ]);
}

function starRating(moves: number, pairs: number): number {
  if (moves <= pairs + 3) return 3;
  if (moves <= pairs + 7) return 2;
  return 1;
}

export function PictureMemoryGame() {
  const reduceMotion = useReducedMotion();
  const [cards, setCards] = useState<PhotoCard[]>(buildDeck);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const startRef = useRef<number | null>(null);

  const pairs = PAIRS_PER_GAME;
  const done = cards.length > 0 && cards.every((c) => c.matched);
  const stars = done ? starRating(moves, pairs) : 0;
  const result: GameResult | null = done
    ? { score: Math.max(35, Math.min(100, 100 - Math.max(0, moves - pairs) * 4)), timeSec: seconds }
    : null;

  // timer runs from the first flip until the board is cleared
  useEffect(() => {
    if (!started || done) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [started, done]);

  const deal = useCallback(() => {
    setCards(buildDeck());
    setFlipped([]);
    setWrongPair([]);
    setMoves(0);
    setLock(false);
    setSeconds(0);
    setStarted(false);
    startRef.current = null;
  }, []);

  function flip(card: PhotoCard) {
    if (lock || card.matched || flipped.includes(card.key)) return;
    if (!started) {
      setStarted(true);
      startRef.current = Date.now();
    }
    const nextFlipped = [...flipped, card.key];
    setFlipped(nextFlipped);
    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLock(true);
      const [a, b] = nextFlipped.map((k) => cards.find((c) => c.key === k)!);
      if (a.pairId === b.pairId) {
        setTimeout(() => {
          setCards((cs) => cs.map((c) => (c.pairId === a.pairId ? { ...c, matched: true } : c)));
          setFlipped([]);
          setLock(false);
        }, reduceMotion ? 350 : 650);
      } else {
        setWrongPair(nextFlipped);
        setTimeout(() => setWrongPair([]), reduceMotion ? 400 : 700);
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, reduceMotion ? 600 : 1000);
      }
    }
  }

  return (
    <GameShell
      slug="picture-memory"
      title="Picture Memory Match"
      description="Flip the cards and pair each real photo with its term."
      icon="Heart"
      onRestart={deal}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Footprints className="h-3.5 w-3.5" aria-hidden /> {moves} moves
          </span>
          <span className="flex items-center gap-1.5">
            <Timer className="h-3.5 w-3.5" aria-hidden /> {seconds}s
          </span>
          <span className="ml-auto">{pairs} photo ↔ term pairs</span>
          <span aria-live="polite" className="sr-only">
            {done ? `Board cleared in ${moves} moves and ${seconds} seconds` : `${cards.filter((c) => c.matched).length / 2} of ${pairs} pairs matched`}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {cards.map((card) => {
            const faceUp = card.matched || flipped.includes(card.key);
            const shaking = wrongPair.includes(card.key);
            return (
              <button
                key={card.key}
                onClick={() => flip(card)}
                className="relative aspect-square min-h-[64px] [perspective:800px]"
                aria-label={faceUp ? (card.kind === "photo" ? `photo: ${card.label}` : card.label) : "Hidden card"}
              >
                <motion.div
                  className="relative h-full w-full rounded-xl sm:rounded-2xl [transform-style:preserve-3d]"
                  animate={{
                    rotateY: faceUp ? 180 : 0,
                    x: shaking && !reduceMotion ? [0, -5, 5, -3, 3, 0] : 0,
                  }}
                  transition={{ duration: reduceMotion ? 0.15 : 0.4 }}
                >
                  {/* card back — brand gradient with a flower */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-primary/30 bg-gradient-to-br from-blossom-soft via-lav to-blossom-soft text-primary shadow-sm transition-shadow hover:shadow-md dark:from-plum/50 dark:via-plum/25 dark:to-plum/50 dark:text-lav [backface-visibility:hidden]">
                    <Flower2 className="h-6 w-6 opacity-80 sm:h-7 sm:w-7" aria-hidden />
                  </div>

                  {/* card face */}
                  <div
                    className={cn(
                      "absolute inset-0 overflow-hidden rounded-xl border-2 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:rounded-2xl",
                      card.matched
                        ? "border-primary bg-sage/30 dark:border-lav/60 dark:bg-sage/15"
                        : "border-border bg-card"
                    )}
                  >
                    {card.kind === "photo" ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={card.photo}
                          alt={card.label}
                          loading="lazy"
                          className={cn("h-full w-full object-cover", card.matched && "opacity-90")}
                          draggable={false}
                        />
                        {card.matched && (
                          <motion.span
                            initial={reduceMotion ? false : { scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
                            aria-hidden
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                          </motion.span>
                        )}
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-1.5 text-center">
                        <span
                          className={cn(
                            "font-display text-[10px] font-semibold leading-tight sm:text-xs",
                            card.matched ? "text-foreground" : "text-foreground"
                          )}
                        >
                          {card.label}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>

        {done && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl bg-blossom-soft/60 p-4 text-center dark:bg-plum/25"
          >
            <div className="flex items-center justify-center gap-1.5" aria-label={`${stars} of 3 stars`}>
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  className={cn("h-6 w-6", s <= stars ? "fill-gold text-gold" : "text-muted-foreground/40")}
                  aria-hidden
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-foreground">
              Cleared in <strong>{moves} moves</strong> and <strong>{seconds}s</strong>{" "}
              {stars === 3 ? "— picture perfect 💗" : stars === 2 ? "— lovely work 🌸" : "— the photos know you now 💗"}
            </p>
          </motion.div>
        )}
      </div>
    </GameShell>
  );
}
