"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GameShell, type GameResult } from "./game-shell";
import { wardWatchRounds, type PatientVitals } from "./ward-watch-data";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Activity, ChevronRight, Heart, Play, RotateCcw, Siren, Star, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_HEARTS = 3;
const MAX_ROUNDS = wardWatchRounds.length;
const MAX_RAW = TOTAL_HEARTS * MAX_ROUNDS;

// fixed screen colours (constant dark like real monitors)
const SCREEN_BG = "#1d1527";
const TRACE_OK = "#8fe3b4";
const TRACE_DANGER = "#ff8f9c";

// ── ECG trace generation (seeded, deterministic per patient) ──
function seededRand(seed: number) {
  let s = seed % 233280;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const TRACE_W = 240;
const BEAT = 48;
const BASE_Y = 26;

function ecgPath(tone: PatientVitals["tone"], seed: number): string {
  const rand = seededRand(seed);
  let d = `M 0 ${BASE_Y}`;
  for (let b = 0; b < TRACE_W / BEAT; b++) {
    const x0 = b * BEAT;
    if (tone === "danger") {
      const pause = 9 + rand() * 15;
      const spike = BASE_Y - (17 + rand() * 11);
      const dip = BASE_Y + 3 + rand() * 7;
      const wide = 6 + rand() * 7;
      const tInv = BASE_Y - 1 + rand() * 8; // sometimes inverted T
      d += ` L ${x0 + pause} ${BASE_Y} L ${(x0 + pause + wide * 0.35).toFixed(1)} ${spike.toFixed(1)} L ${(x0 + pause + wide).toFixed(1)} ${dip.toFixed(1)} L ${x0 + BEAT - 6} ${tInv.toFixed(1)} L ${x0 + BEAT} ${BASE_Y}`;
    } else {
      d += ` L ${x0 + 7} ${BASE_Y} L ${x0 + 10} ${BASE_Y - 3} L ${x0 + 13} ${BASE_Y} L ${x0 + 17} ${BASE_Y} L ${x0 + 19} ${BASE_Y - 13} L ${x0 + 21} ${BASE_Y + 4} L ${x0 + 23} ${BASE_Y} L ${x0 + 29} ${BASE_Y - 5} L ${x0 + 35} ${BASE_Y} L ${x0 + BEAT} ${BASE_Y}`;
    }
  }
  return d;
}

// ── one animated monitor ──────────────────────────────────────
type MonitorState = "live" | "chosen" | "dimmed" | "revealed";

function PatientMonitor({
  patient,
  index,
  seed,
  alarm,
  state,
  showNote,
  onTap,
}: {
  patient: PatientVitals;
  index: number;
  seed: number;
  alarm: boolean;
  state: MonitorState;
  showNote: boolean;
  onTap: (i: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [sys, dia] = patient.bp.split("/").map((n) => parseInt(n, 10));

  // live ticking vitals — numbers wobble gently, danger wobbles more
  const [jit, setJit] = useState({ hr: 0, sys: 0, dia: 0, spo2: 0, rr: 0, temp: 0 });
  useEffect(() => {
    const amp = patient.tone === "danger" ? 3 : 2;
    const t = setInterval(() => {
      const r = () => Math.round((Math.random() * 2 - 1) * amp);
      const r1 = () => Math.round((Math.random() * 2 - 1) * (amp > 2 ? 3 : 1));
      setJit({ hr: r(), sys: r(), dia: r(), spo2: Math.min(1, r1()), rr: r(), temp: (Math.random() * 2 - 1) * 0.1 });
    }, 1500 + Math.random() * 500);
    return () => clearInterval(t);
  }, [patient]);

  const hr = Math.max(30, patient.hr + jit.hr);
  const spo2 = Math.min(100, Math.max(80, patient.spo2 + jit.spo2));
  const bp = `${sys + jit.sys}/${dia + jit.dia}`;

  const danger = patient.tone === "danger" && alarm;
  const traceColor = danger ? TRACE_DANGER : TRACE_OK;
  const traceDur = TRACE_W / BEAT / Math.max(30, patient.hr) * 60; // 5 beats on screen

  const interactive = state === "live";
  const label = `Monitor ${patient.name}, ${patient.context}. Pulse ${hr} beats per minute, blood pressure ${bp}, oxygen saturation ${spo2} percent, breathing rate ${patient.rr} per minute, temperature ${(patient.temp + jit.temp).toFixed(1)} degrees. ${patient.note ? `Nursing note: ${patient.note}.` : ""}${interactive ? " Tap if you think this patient is deteriorating." : ""}`;

  return (
    <motion.button
      type="button"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: state === "chosen" || state === "revealed" ? 1.02 : 1,
      }}
      transition={{ delay: index * 0.07, duration: 0.35, type: "spring", stiffness: 260, damping: 24 }}
      onClick={() => interactive && onTap(index)}
      disabled={!interactive}
      aria-label={label}
      className={cn(
        "group relative overflow-hidden rounded-xl border p-1.5 text-left transition-all min-h-[44px]",
        "border-border/70 bg-card",
        interactive && "cursor-pointer hover:border-primary/60 focus-visible:border-primary focus-visible:outline-none",
        state === "dimmed" && "opacity-45 saturate-[0.6]",
        (state === "chosen" || state === "revealed") && "border-destructive/70"
      )}
      style={{ touchAction: "manipulation" }}
    >
      {/* alarm glow */}
      {danger && (state === "live" || state === "chosen" || state === "revealed") && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          animate={reduceMotion ? { opacity: 0.6 } : { opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "inset 0 0 0 2px rgba(248, 113, 113, 0.85), 0 0 22px -4px rgba(248, 113, 113, 0.5)" }}
        />
      )}

      {/* monitor screen */}
      <div className="relative overflow-hidden rounded-lg p-2" style={{ background: SCREEN_BG }}>
        {/* header row */}
        <div className="mb-1 flex items-center justify-between gap-1">
          <p className="truncate text-[10px] font-semibold tracking-wide text-white/85">{patient.name}</p>
          {danger ? (
            <motion.span
              className="flex shrink-0 items-center gap-0.5 rounded-full bg-[#f87171]/25 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-[#fca5a5]"
              animate={reduceMotion ? undefined : { opacity: [1, 0.45, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              <Siren className="h-2.5 w-2.5" aria-hidden /> ALARM
            </motion.span>
          ) : (
            <motion.span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: TRACE_OK }}
              animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          )}
        </div>
        <p className="mb-1.5 truncate text-[9px] text-white/45">{patient.context}</p>

        {/* ECG trace */}
        <div className="relative h-9 overflow-hidden rounded-sm bg-black/25" aria-hidden>
          <svg viewBox={`0 0 ${TRACE_W} 40`} preserveAspectRatio="none" className="h-full w-full">
            <motion.g
              animate={reduceMotion ? { x: 0 } : { x: [0, -TRACE_W] }}
              transition={{ duration: Math.max(1.4, traceDur), ease: "linear", repeat: Infinity }}
            >
              <path d={ecgPath(patient.tone, seed)} fill="none" stroke={traceColor} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
              <path
                d={ecgPath(patient.tone, seed)}
                fill="none"
                stroke={traceColor}
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
                transform={`translate(${TRACE_W} 0)`}
              />
            </motion.g>
          </svg>
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-6"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55), transparent)" }}
          />
        </div>

        {/* vitals grid */}
        <div className="mt-1.5 grid grid-cols-3 gap-x-1 gap-y-1">
          <div className="flex items-center gap-1">
            <motion.span
              aria-hidden
              animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }}
              transition={{ duration: Math.max(0.36, 60 / Math.max(30, hr)), repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart
                className={cn("h-3.5 w-3.5", danger ? "fill-[#f87171] text-[#f87171]" : "fill-[#8fe3b4] text-[#8fe3b4]")}
              />
            </motion.span>
            <div className="min-w-0">
              <p className="text-[8px] font-semibold uppercase tracking-wider text-white/40">Pulse</p>
              <p className={cn("font-mono text-[13px] font-bold leading-none", danger ? "text-[#fca5a5]" : "text-white/95")}>{hr}</p>
            </div>
          </div>
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-wider text-white/40">BP</p>
            <p className="font-mono text-[13px] font-bold leading-none text-white/95">{bp}</p>
          </div>
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-wider text-white/40">SpO₂</p>
            <motion.p
              className="font-mono text-[13px] font-bold leading-none text-white/95"
              animate={reduceMotion ? undefined : { opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              {spo2}
            </motion.p>
          </div>
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-wider text-white/40">RR</p>
            <p className="font-mono text-[13px] font-bold leading-none text-white/95">{patient.rr + jit.rr}</p>
          </div>
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-wider text-white/40">Temp</p>
            <p className="font-mono text-[13px] font-bold leading-none text-white/95">{(patient.temp + jit.temp).toFixed(1)}</p>
          </div>
        </div>

        {/* nursing note / clinical clue */}
        {showNote && patient.note && (
          <p
            className={cn(
              "mt-1.5 truncate rounded-sm bg-black/25 px-1.5 py-1 text-[9px] font-medium leading-tight",
              danger ? "text-[#fca5a5]" : "text-[#ffd59e]"
            )}
          >
            {danger ? "⚠ " : "· "}
            {patient.note}
          </p>
        )}
      </div>
    </motion.button>
  );
}

// ── the game ──────────────────────────────────────────────────
type Phase = "brief" | "watch" | "act" | "feedback" | "over";
type FeedbackKind = "good" | "bad-patient" | "bad-action" | "timeout";

interface Feedback {
  kind: FeedbackKind;
  title: string;
  body: string;
}

export function WardWatchGame() {
  const reduceMotion = useReducedMotion();
  const triggerConfetti = useAppStore((s) => s.triggerConfetti);

  const [phase, setPhase] = useState<Phase>("brief");
  const [roundIdx, setRoundIdx] = useState(0);
  const [hearts, setHearts] = useState(TOTAL_HEARTS);
  const [correct, setCorrect] = useState(0);
  const [alarm, setAlarm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const round = wardWatchRounds[roundIdx];
  const totalRounds = wardWatchRounds.length;
  const rawScore = hearts * correct;
  const scorePct = Math.round(Math.min(100, (rawScore / MAX_RAW) * 100));
  const result: GameResult | null = phase === "over" ? { score: scorePct, timeSec: elapsed } : null;

  const resolveRef = useRef<(kind: FeedbackKind, choice: number) => void>(() => {});

  const restart = useCallback(() => {
    setPhase("brief");
    setRoundIdx(0);
    setHearts(TOTAL_HEARTS);
    setCorrect(0);
    setAlarm(false);
    setTimeLeft(wardWatchRounds[0].seconds);
    setDeadline(0);
    setElapsed(0);
    setFeedback(null);
  }, []);

  // shift clock
  useEffect(() => {
    if (phase === "brief" || phase === "over") return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // round countdown — the deadline is set by event handlers (start of
  // round / entering the action step), so each phase gets its own fair clock
  useEffect(() => {
    if (phase !== "watch" && phase !== "act") return;
    if (!deadline) return;
    const t = setInterval(() => {
      const remain = (deadline - Date.now()) / 1000;
      if (remain <= 0) {
        clearInterval(t);
        setTimeLeft(0);
        resolveRef.current("timeout", -1);
        return;
      }
      setTimeLeft(remain);
    }, 120);
    return () => clearInterval(t);
  }, [phase, roundIdx, deadline]);

  // monitor alarm rings part-way through the round
  useEffect(() => {
    if (phase !== "watch") return;
    const delay = Math.round(round.seconds * 1000 * 0.45);
    const t = setTimeout(() => setAlarm(true), delay);
    return () => clearTimeout(t);
  }, [roundIdx, phase, round.seconds]);

  // round resolution
  function resolveRound(kind: FeedbackKind, choice: number) {
    if (phase === "feedback" || phase === "over") return;
    const danger = round.patients[round.dangerIndex];
    const best = round.actions[round.correctActionIndex];
    let fb: Feedback;
    if (kind === "good") {
      fb = {
        kind,
        title: "Spot on 💗",
        body: best.feedback,
      };
      setCorrect((c) => c + 1);
      triggerConfetti();
    } else if (kind === "bad-patient") {
      const picked = round.patients[choice];
      fb = {
        kind,
        title: `Not ${picked.name.split("·").pop()?.trim() ?? "this bed"} 🌸`,
        body: `${picked.context} is actually reassuring — every one of her observations sits in the safe range. The patient in danger was ${danger.context} (${danger.name}): ${danger.note ?? "her observations are deteriorating"}. The safe next step: ${best.text}.`,
      };
    } else if (kind === "bad-action") {
      fb = {
        kind,
        title: "Right bed — wrong move",
        body: `${round.actions[choice].feedback} The safe next step: ${best.text}.`,
      };
    } else {
      fb = {
        kind: "timeout",
        title: "The clock beat us this time",
        body: `It was ${danger.context} (${danger.name}) — ${danger.note ?? "deteriorating observations"}. The safe next step: ${best.text}.`,
      };
    }
    if (kind !== "good") setHearts((h) => Math.max(0, h - 1));
    setFeedback(fb);
    setPhase("feedback");
  }
  // keep a stable handle for the countdown interval (latest closure)
  useEffect(() => {
    resolveRef.current = resolveRound;
  });

  function tapPatient(i: number) {
    if (phase !== "watch") return;
    if (i === round.dangerIndex) {
      setDeadline(Date.now() + round.seconds * 1000);
      setTimeLeft(round.seconds);
      setPhase("act");
    } else {
      resolveRound("bad-patient", i);
    }
  }

  function pickAction(i: number) {
    if (phase !== "act") return;
    resolveRound(i === round.correctActionIndex ? "good" : "bad-action", i);
  }

  function nextRound() {
    const outOfHearts = hearts <= 0;
    const lastRound = roundIdx + 1 >= totalRounds;
    if (outOfHearts || lastRound) {
      setPhase("over");
      return;
    }
    setRoundIdx((r) => r + 1);
    setFeedback(null);
    setAlarm(false);
    const next = wardWatchRounds[roundIdx + 1];
    setTimeLeft(next.seconds);
    setDeadline(Date.now() + next.seconds * 1000);
    setPhase("watch");
  }

  function beginShift() {
    setTimeLeft(round.seconds);
    setDeadline(Date.now() + round.seconds * 1000);
    setPhase("watch");
  }

  const timeFrac = round ? Math.max(0, timeLeft / round.seconds) : 0;
  const ringC = 2 * Math.PI * 17;
  const stars = phase === "over" ? (scorePct >= 80 ? 3 : scorePct >= 45 ? 2 : 1) : 0;

  return (
    <GameShell
      slug="ward-watch"
      title="Ward Watch"
      description="Watch the monitors, spot who is deteriorating, choose the next action."
      icon="Activity"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
        {/* HUD */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 rounded-full bg-blossom-soft px-3 py-1.5 font-display font-bold text-primary dark:bg-plum/40 dark:text-lav">
            <Activity className="h-3.5 w-3.5" aria-hidden /> Round {round ? round.level : 1}/{totalRounds}
          </span>
          <span
            className="flex items-center gap-1"
            aria-label={`${hearts} of ${TOTAL_HEARTS} hearts remaining`}
          >
            {Array.from({ length: TOTAL_HEARTS }).map((_, i) => (
              <motion.span
                key={i}
                animate={hearts > i || reduceMotion ? { scale: 1 } : { scale: [1.3, 1] }}
                transition={{ duration: 0.4 }}
                className="inline-flex"
              >
                <Heart
                  className={cn("h-4 w-4", i < hearts ? "fill-primary text-primary" : "text-muted-foreground/30")}
                  aria-hidden
                />
              </motion.span>
            ))}
          </span>
          <span className="ml-auto font-semibold text-muted-foreground">{correct} correct</span>
          {(phase === "watch" || phase === "act") && (
            <div className="relative h-11 w-11 shrink-0" role="timer" aria-label={`${Math.ceil(timeLeft)} seconds left this round`}>
              <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90" aria-hidden>
                <circle cx="22" cy="22" r="17" fill="none" strokeWidth="4" className="stroke-muted" />
                <circle
                  cx="22"
                  cy="22"
                  r="17"
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className={timeFrac < 0.28 ? "stroke-destructive" : "stroke-primary"}
                  strokeDasharray={ringC}
                  strokeDashoffset={ringC * (1 - timeFrac)}
                />
              </svg>
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center font-mono text-xs font-bold",
                  timeFrac < 0.28 ? "text-destructive" : "text-foreground"
                )}
              >
                {Math.ceil(timeLeft)}
              </span>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* ── briefing ── */}
          {phase === "brief" && (
            <motion.div
              key="brief"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-blossom-soft/70 to-lav/60 p-6 text-center dark:from-plum/35 dark:to-plum/15"
            >
              <Stethoscope className="h-10 w-10 text-primary" aria-hidden />
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                You are watching the ward monitors on night shift. Each round, <strong className="text-foreground">one patient is
                deteriorating</strong> — read the numbers and the nursing note, tap that patient, then choose the safest next
                action. Wrong picks cost a heart, and the rounds get faster 💗
              </p>
              <Button onClick={beginShift} className="min-h-[48px] rounded-full px-8 text-base">
                <Play className="h-4 w-4" aria-hidden /> Start the shift
              </Button>
            </motion.div>
          )}

          {/* ── monitors + actions ── */}
          {(phase === "watch" || phase === "act" || phase === "feedback") && round && (
            <motion.div
              key={`round-${roundIdx}`}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-3"
            >
              <p className="text-center text-xs text-muted-foreground" aria-live="polite">
                {phase === "watch"
                  ? "One of these patients is deteriorating — tap their monitor."
                  : phase === "act"
                  ? "You found them. Now choose the safest next action:"
                  : "Shift note — read, learn, move on."}
              </p>

              <div
                className={cn(
                  "grid gap-2.5",
                  round.patients.length === 1 ? "grid-cols-1" : "grid-cols-2"
                )}
                role="group"
                aria-label="Patient monitor bank"
              >
                {round.patients.map((p, i) => {
                  let state: MonitorState = "live";
                  if (phase === "act" || phase === "feedback") {
                    state = i === round.dangerIndex ? "revealed" : "dimmed";
                  }
                  return (
                    <PatientMonitor
                      key={`${roundIdx}-${i}`}
                      patient={p}
                      index={i}
                      seed={roundIdx * 10 + i + 3}
                      alarm={alarm}
                      state={state}
                      showNote={phase === "watch" || phase === "act" || phase === "feedback"}
                      onTap={tapPatient}
                    />
                  );
                })}
              </div>

              {/* action chips */}
              {phase === "act" && (
                <div className="space-y-2.5">
                  {round.actions.map((a, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i, type: "spring", stiffness: 300, damping: 24 }}
                      onClick={() => pickAction(i)}
                      className="w-full min-h-[48px] rounded-xl border-2 border-border/60 bg-background px-4 py-3 text-left text-sm leading-snug transition-all hover:border-primary/60 hover:bg-blossom-soft/40 focus-visible:border-primary focus-visible:outline-none dark:hover:bg-plum/25"
                      style={{ touchAction: "manipulation" }}
                      aria-label={`Action: ${a.text}`}
                    >
                      {a.text}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* feedback card */}
              {phase === "feedback" && feedback && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className={cn(
                    "rounded-2xl border p-4",
                    feedback.kind === "good"
                      ? "border-primary/30 bg-sage/25 dark:bg-sage/15"
                      : "border-destructive/25 bg-destructive/5"
                  )}
                  role="status"
                >
                  <p
                    className={cn(
                      "font-display text-base font-semibold",
                      feedback.kind === "good" ? "text-foreground" : "text-foreground"
                    )}
                  >
                    {feedback.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{feedback.body}</p>
                  <div className="mt-3 rounded-xl bg-muted/60 p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Shift note · what this teaches</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{round.debrief}</p>
                  </div>
                  <Button className="mt-4 w-full rounded-full" size="lg" onClick={nextRound}>
                    {hearts <= 0 || roundIdx + 1 >= totalRounds ? "See shift report" : "Next round"}
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── shift report ── */}
          {phase === "over" && (
            <motion.div
              key="over"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-blossom-soft/80 via-card to-lav/70 p-6 text-center dark:from-plum/40 dark:via-card dark:to-plum/20"
            >
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary/80 dark:text-lav/80">
                {hearts === TOTAL_HEARTS && correct === MAX_ROUNDS
                  ? "Flawless night shift 💗"
                  : correct >= 7
                  ? "Sharp eyes, nurse 🌸"
                  : hearts <= 0
                  ? "The ward won this time"
                  : "Every round teaches 💗"}
              </p>
              <p className="font-display text-5xl font-bold text-primary dark:text-lav">{scorePct}%</p>
              <div className="flex items-center gap-1.5" aria-label={`${stars} of 3 stars`}>
                {[1, 2, 3].map((s) => (
                  <Star key={s} className={cn("h-6 w-6", s <= stars ? "fill-gold text-gold" : "text-muted-foreground/40")} aria-hidden />
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/80">
                <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">{correct}/{MAX_ROUNDS} correct calls</span>
                <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">
                  {hearts} of {TOTAL_HEARTS} hearts kept
                </span>
                <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">{elapsed}s on the ward</span>
              </div>
              <Button onClick={restart} className="mt-2 min-h-[48px] rounded-full px-8">
                <RotateCcw className="h-4 w-4" aria-hidden /> Work another shift
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GameShell>
  );
}
