"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { ProgressRing, MiniProgress } from "./progress-widgets";
import { useStudyHeartbeat } from "./lesson-view";
import { difficultyStyle } from "./dyn-icon";
import { PrintablePaper, type PaperPrintJob } from "./printable-paper";
import {
  ChevronRight, ChevronLeft, CheckCircle2, XCircle, Timer, Flag, Trophy, RefreshCcw,
  ArrowUp, ArrowDown, Brain, Sparkles, Home, Keyboard, Target, Pause, Play,
  ClipboardCheck, Hourglass, ListChecks, Printer, History,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizConfig, QuizSubmitOutcome, SafeQuestion } from "@/lib/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ["A", "B", "C", "D", "E", "F"];

/** NMC-style pass mark used for full exam simulations. */
const EXAM_PASS_MARK = 50;

export function QuizView({ config }: { config: QuizConfig }) {
  const { go, triggerConfetti, refreshBootstrap, back, setAssistantHint } = useAppStore();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selectedIndex?: number; selectedIndexes?: number[]; order?: number[] }>>({});
  const [orderState, setOrderState] = useState<Record<string, number[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [outcome, setOutcome] = useState<QuizSubmitOutcome | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(config.secondsAllowed ?? null);
  const [showReview, setShowReview] = useState(false);

  // ── exam simulator state ──
  const isExam = config.exam === true;
  const allowed = config.secondsAllowed ?? null;
  const [paused, setPaused] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [printJob, setPrintJob] = useState<PaperPrintJob | null>(null);
  const pausedRef = useRef(false);
  pausedRef.current = paused;
  const timeUpFiredRef = useRef(false);
  const warnedRef = useRef(false);

  useStudyHeartbeat(true, config.lessonId ?? null);

  // tell Ask-Mimie what she's testing
  useEffect(() => {
    const kind = config.exam
      ? "Exam paper"
      : config.mode === "REVIEW"
        ? "Review quiz"
        : config.mode === "EXAM"
          ? "Timed test"
          : "Quiz";
    setAssistantHint(`${kind} “${config.label}” · ${config.questions.length} questions`);
    return () => setAssistantHint(null);
  }, [config, setAssistantHint]);

  const questions = config.questions;
  const q = questions[idx];

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;
  const flaggedCount = useMemo(() => Object.values(flagged).filter(Boolean).length, [flagged]);

  // ── printable paper ──
  const paperMinutes = allowed !== null ? Math.round(allowed / 60) : null;
  function printBlankPaper() {
    setPrintJob({
      kind: "blank",
      label: config.label || "Mock paper",
      minutes: paperMinutes,
      questions,
    });
    toast("Opening print preview — the paper prints without the answers 💗", {
      description: "Hand in on screen first, then print a marked copy from the results.",
    });
  }

  // shuffle ORDERING options once per question
  useEffect(() => {
    if (q && q.type === "ORDERING" && !orderState[q.id] && !answers[q.id]) {
      const n = q.options.length;
      let order = shuffle([...Array(n).keys()]);
      // avoid starting already-solved
      if (order.every((v, i) => v === i)) order = shuffle(order);
      setOrderState((s) => ({ ...s, [q.id]: order }));
    }
  }, [q, orderState, answers]);

  // timers — one tick per second; both elapsed + countdown freeze while paused
  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      setElapsed((e) => e + 1);
      if (allowed !== null) {
        setTimeLeft((tl) => (tl === null ? null : Math.max(0, tl - 1)));
      }
    }, 1000);
    return () => clearInterval(t);
  }, [submitted, allowed]);

  // countdown hit zero → collect the paper automatically
  useEffect(() => {
    if (submitted || submitting || allowed === null || timeLeft === null || timeLeft > 0) return;
    if (timeUpFiredRef.current) return;
    timeUpFiredRef.current = true;
    setTimeUp(true);
    toast("⏰ Time's up — pencils down. Handing in your paper…");
    submitRef.current?.();
  }, [submitted, submitting, allowed, timeLeft]);

  // gentle 5-minute warning on long papers
  useEffect(() => {
    if (warnedRef.current || submitted || timeLeft === null || allowed === null) return;
    if (allowed > 420 && timeLeft === 300) {
      warnedRef.current = true;
      toast("5 minutes left on the paper — start closing 💗");
    }
  }, [timeLeft, submitted, allowed]);

  const submitRef = useRef<(() => void) | null>(null);
  submitRef.current = submit;

  function togglePause() {
    if (!isExam || submitted) return;
    setPaused((p) => !p);
  }

  function toggleFlag(qid: string) {
    if (!isExam || submitted) return;
    setFlagged((f) => ({ ...f, [qid]: !f[qid] }));
  }

  // keyboard shortcuts: A–E select, Enter = next/submit,
  // F = flag (exam), P = print paper (exam), Alt+P = pause (exam)
  useEffect(() => {
    if (submitted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "p" && isExam) {
        e.preventDefault();
        togglePause();
        return;
      }
      if (paused || confirmOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key.toUpperCase();
      const letterIdx = ["A", "B", "C", "D", "E"].indexOf(key);
      if (letterIdx >= 0 && q && letterIdx < q.options.length) {
        e.preventDefault();
        if (q.type === "MULTI_SELECT") toggleMulti(q.id, letterIdx);
        else if (q.type !== "ORDERING") select(q.id, letterIdx);
      } else if (key === "F" && isExam && q) {
        e.preventDefault();
        toggleFlag(q.id);
      } else if (key === "P" && isExam && !e.altKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        printBlankPaper();
      } else if (e.key === "Enter") {
        e.preventDefault();
        const nextBtn = !submitted && idx < questions.length - 1;
        if (nextBtn) setIdx((i) => i + 1);
        else if (!submitting && answeredCount > 0) {
          if (isExam) setConfirmOpen(true);
          else submitRef.current?.();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, idx, submitted, submitting, answeredCount, questions.length, paused, confirmOpen, isExam]);

  function select(qid: string, index: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qid]: { selectedIndex: index } }));
  }

  function toggleMulti(qid: string, index: number) {
    if (submitted) return;
    setAnswers((a) => {
      const cur = a[qid]?.selectedIndexes ?? [];
      const next = cur.includes(index) ? cur.filter((v) => v !== index) : [...cur, index];
      return { ...a, [qid]: { selectedIndexes: next.sort((x, y) => x - y) } };
    });
  }

  function moveOrder(qid: string, from: number, to: number) {
    if (submitted) return;
    setOrderState((s) => {
      const order = [...(s[qid] ?? [])];
      if (to < 0 || to >= order.length) return s;
      const [item] = order.splice(from, 1);
      order.splice(to, 0, item);
      return { ...s, [qid]: order };
    });
    setAnswers((a) => ({ ...a, [qid]: { selectedIndexes: orderState[qid] } }));
  }

  async function submit() {
    if (submitting || submitted) return;
    setConfirmOpen(false);
    setSubmitting(true);
    const timeSec = elapsed; // pause-aware clock
    try {
      const payload = {
        mode: config.mode,
        setupMode: config.setupMode ?? null,
        lessonId: config.lessonId ?? null,
        label: config.label,
        timeSec,
        config: config.setup ?? null,
        answers: questions.map((question) => {
          const a = answers[question.id];
          if (question.type === "ORDERING") {
            return { questionId: question.id, selectedIndexes: orderState[question.id] ?? [] };
          }
          return {
            questionId: question.id,
            selectedIndex: a?.selectedIndex ?? -1,
            selectedIndexes: a?.selectedIndexes ?? undefined,
          };
        }),
      };
      const res = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        toast(json.error ?? "Couldn't submit the quiz 💗");
        return;
      }
      setOutcome(json);
      setSubmitted(true);
      setPaused(false);
      refreshBootstrap();
      const passMark = isExam ? EXAM_PASS_MARK : 70;
      if (json.percentage !== undefined && json.attempt.percentage >= passMark) triggerConfetti();
      toast(
        `Score: ${json.attempt.score}/${json.attempt.total} · +${json.xpGained} XP`,
        { description: json.leveledUp ? `Level ${json.newLevel} — look at you growing 🌸` : undefined }
      );
      for (const badge of json.newBadges ?? []) {
        toast(`🏅 Badge unlocked: ${badge.title}`, { description: badge.description });
      }
    } catch {
      toast("We lost the connection — your progress is safe 💗");
    } finally {
      setSubmitting(false);
    }
  }

  function fmt(sec: number) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  }

  // ── results screen ──
  if (submitted && outcome) {
    return (
      <QuizResults
        outcome={outcome}
        config={config}
        elapsed={elapsed}
        showReview={showReview}
        setShowReview={setShowReview}
        timeUp={timeUp}
      />
    );
  }

  // ── question screen ──
  return (
    <div className="mx-auto max-w-2xl">
      {printJob && <PrintablePaper job={printJob} onDone={() => setPrintJob(null)} />}
      {isExam ? (
        /* ── exam bar: sticky paper header with big countdown ── */
        <div className="sticky top-[61px] z-30 mb-5 rounded-2xl border border-primary/25 bg-background/95 px-3 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-md sm:px-4 lg:top-2 print:hidden">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full px-2 text-muted-foreground"
              onClick={back}
              aria-label="Exit exam"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden /> <span className="hidden sm:inline">Exit</span>
            </Button>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-semibold text-foreground">{config.label || "Mock paper"}</p>
              <p className="text-xs tabular-nums text-muted-foreground">
                Question {idx + 1} of {questions.length} · {answeredCount} answered
                {flaggedCount > 0 && ` · ${flaggedCount} flagged`}
              </p>
            </div>
            {timeLeft !== null && (
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-display text-base font-bold tabular-nums sm:text-lg",
                  timeLeft <= 60
                    ? "animate-pulse bg-destructive/15 text-destructive"
                    : timeLeft <= 300
                    ? "bg-gold/20 text-amber-700 dark:text-gold"
                    : "bg-lav text-secondary-foreground dark:bg-plum/30"
                )}
                aria-live="polite"
                aria-label={`${fmt(timeLeft)} remaining`}
              >
                <Timer className="h-4 w-4" aria-hidden /> {fmt(timeLeft)}
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full px-2 text-muted-foreground hover:text-primary"
              onClick={printBlankPaper}
              aria-label="Print this paper"
              title="Print this paper (P)"
            >
              <Printer className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={togglePause}
              disabled={submitted}
              aria-label={paused ? "Resume exam" : "Pause exam"}
            >
              {paused ? (
                <Play className="h-4 w-4 fill-current" aria-hidden />
              ) : (
                <Pause className="h-4 w-4" aria-hidden />
              )}
              <span className="hidden sm:inline">{paused ? "Resume" : "Pause"}</span>
            </Button>
          </div>
          <Progress value={((idx + 1) / questions.length) * 100} className="mt-2.5 h-1.5" aria-hidden />
        </div>
      ) : (
        /* ── regular quiz header ── */
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground" onClick={back}>
            <ChevronLeft className="h-4 w-4" aria-hidden /> Exit
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-semibold text-foreground">{config.label || "Quiz"}</p>
            <p className="text-xs text-muted-foreground">Question {idx + 1} of {questions.length}</p>
          </div>
          {config.timed && timeLeft !== null && (
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold tabular-nums",
                timeLeft < 30 ? "bg-destructive/15 text-destructive" : "bg-lav text-secondary-foreground dark:bg-plum/30"
              )}
              aria-live="polite"
            >
              <Timer className="h-4 w-4" aria-hidden /> {fmt(timeLeft)}
            </span>
          )}
          {!config.timed && (
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground tabular-nums">
              <Timer className="h-3.5 w-3.5" aria-hidden /> {fmt(elapsed)}
            </span>
          )}
        </div>
      )}

      {!isExam && <Progress value={((idx + 1) / questions.length) * 100} className="mb-6 h-2" aria-hidden />}

      {isExam ? (
        /* ── answer sheet: numbered grid, flag dots ── */
        <div className="mb-6 rounded-2xl border border-border/70 bg-card p-3.5">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Answer sheet</p>
            <p className="text-[11px] tabular-nums text-muted-foreground">
              {answeredCount} answered · {flaggedCount} flagged
            </p>
          </div>
          <div className="flex max-h-44 flex-wrap gap-1.5 overflow-y-auto">
            {questions.map((question, i) => {
              const ans = Boolean(answers[question.id]);
              const fl = Boolean(flagged[question.id]);
              return (
                <button
                  key={question.id}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to question ${i + 1}${ans ? ", answered" : ", blank"}${fl ? ", flagged" : ""}`}
                  aria-current={i === idx ? "true" : undefined}
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-semibold tabular-nums transition-all active:scale-95",
                    ans
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border/70 bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
                    i === idx && "scale-110 ring-2 ring-primary ring-offset-2 ring-offset-card"
                  )}
                >
                  {i + 1}
                  {fl && (
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-card bg-gold" aria-hidden />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-primary" aria-hidden /> answered</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm border border-border/70 bg-card" aria-hidden /> blank</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden /> flagged</span>
            <span className="ml-auto hidden sm:inline">F flags · P prints · Alt+P pauses</span>
          </div>
        </div>
      ) : (
        /* ── progress dots (regular quizzes) ── */
        <div className="mb-6 flex flex-wrap gap-1.5" aria-label="Question progress">
          {questions.map((question, i) => (
            <button
              key={question.id}
              onClick={() => setIdx(i)}
              aria-label={`Go to question ${i + 1}${answers[question.id] ? " (answered)" : ""}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all",
                i === idx ? "w-6 bg-primary" : answers[question.id] ? "bg-primary/60" : "bg-muted"
              )}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {q && (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className={cn("border-border/70 shadow-sm", isExam && "exam-paper border-primary/20")}>
              <CardContent className={cn("p-6", isExam && "sm:p-7")}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className={cn("rounded-full border px-2.5 py-0.5 text-[11px] font-medium", difficultyStyle[q.difficulty] ?? "")}>
                    {q.difficulty}
                  </span>
                  <span className="rounded-full bg-lav px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground dark:bg-plum/30">{q.topic}</span>
                  {q.type === "MULTI_SELECT" && <span className="text-[11px] italic text-muted-foreground">select all that apply</span>}
                  {q.type === "ORDERING" && <span className="text-[11px] italic text-muted-foreground">arrange in the correct order</span>}
                  {isExam && (
                    <button
                      onClick={() => toggleFlag(q.id)}
                      aria-pressed={Boolean(flagged[q.id])}
                      className={cn(
                        "ml-auto flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                        flagged[q.id]
                          ? "border-gold/60 bg-gold/15 text-amber-700 dark:text-gold"
                          : "border-border/70 text-muted-foreground hover:border-gold/50 hover:text-foreground"
                      )}
                    >
                      <Flag className={cn("h-3 w-3", flagged[q.id] && "fill-current")} aria-hidden />
                      {flagged[q.id] ? "Flagged" : "Flag for review"}
                    </button>
                  )}
                </div>
                <h2 className="font-display text-lg font-semibold leading-relaxed text-foreground sm:text-xl">{q.stem}</h2>

                {/* answer area */}
                <div className="mt-6 space-y-3">
                  {q.type === "MULTI_SELECT" ? (
                    q.options.map((opt, i) => {
                      const sel = answers[q.id]?.selectedIndexes?.includes(i);
                      return (
                        <button
                          key={i}
                          onClick={() => toggleMulti(q.id, i)}
                          className={cn(
                            "group flex w-full items-center gap-3.5 rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all active:scale-[0.99]",
                            sel ? "border-primary bg-blossom-soft/60 text-foreground dark:bg-plum/30" : "border-border/60 bg-card hover:border-primary/40 hover:shadow-sm hover:shadow-primary/5"
                          )}
                          aria-pressed={sel}
                        >
                          <span className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 text-xs font-bold transition-all duration-200 group-hover:scale-110 motion-reduce:transform-none",
                            sel ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground group-hover:border-primary/50"
                          )}>
                            {sel ? "✓" : LETTERS[i]}
                          </span>
                          {opt}
                        </button>
                      );
                    })
                  ) : q.type === "ORDERING" ? (
                    <div className="space-y-2.5">
                      {(orderState[q.id] ?? []).map((origIdx, pos) => (
                        <div
                          key={origIdx}
                          className="flex items-center gap-3 rounded-xl border-2 border-border/60 bg-card px-4 py-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lav text-xs font-bold text-secondary-foreground dark:bg-plum/30">
                            {pos + 1}
                          </span>
                          <p className="flex-1 text-sm text-foreground">{q.options[origIdx]}</p>
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => moveOrder(q.id, pos, pos - 1)}
                              disabled={pos === 0}
                              className="rounded-md p-1 text-muted-foreground hover:bg-muted disabled:opacity-30"
                              aria-label="Move up"
                            >
                              <ArrowUp className="h-3.5 w-3.5" aria-hidden />
                            </button>
                            <button
                              onClick={() => moveOrder(q.id, pos, pos + 1)}
                              disabled={pos === (orderState[q.id] ?? []).length - 1}
                              className="rounded-md p-1 text-muted-foreground hover:bg-muted disabled:opacity-30"
                              aria-label="Move down"
                            >
                              <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                            </button>
                          </div>
                        </div>
                      ))}
                      <p className="text-center text-xs text-muted-foreground">Use the arrows to put events in the correct sequence.</p>
                    </div>
                  ) : (
                    q.options.map((opt, i) => {
                      const sel = answers[q.id]?.selectedIndex === i;
                      return (
                        <button
                          key={i}
                          onClick={() => select(q.id, i)}
                          className={cn(
                            "group flex w-full items-center gap-3.5 rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all active:scale-[0.99]",
                            sel ? "border-primary bg-blossom-soft/60 text-foreground dark:bg-plum/30" : "border-border/60 bg-card hover:border-primary/40 hover:shadow-sm hover:shadow-primary/5"
                          )}
                          aria-pressed={sel}
                        >
                          <span className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-200 group-hover:scale-110 motion-reduce:transform-none",
                            sel ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground group-hover:border-primary/50"
                          )}>
                            {LETTERS[i]}
                          </span>
                          {opt}
                        </button>
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* footer controls */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="outline" className="rounded-full" disabled={idx === 0} onClick={() => setIdx((i) => i - 1)}>
          <ChevronLeft className="h-4 w-4" aria-hidden /> Previous
        </Button>
        <p className="hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex">
          <Keyboard className="h-3 w-3" aria-hidden />
          <span>
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">A–D</kbd> pick ·
            <kbd className="ml-1 rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">Enter</kbd>
            {idx < questions.length - 1 ? " next" : isExam ? " hand in" : " submit"}
            {isExam && (
              <>
                {" · "}
                <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">F</kbd> flag
              </>
            )}
          </span>
        </p>
        {idx < questions.length - 1 ? (
          <Button className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground" onClick={() => setIdx((i) => i + 1)}>
            Next <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
        ) : isExam ? (
          <Button
            className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
            onClick={() => setConfirmOpen(true)}
            disabled={submitting}
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden />
            {submitting ? "Scoring…" : `Submit paper (${answeredCount}/${questions.length})`}
          </Button>
        ) : (
          <Button
            className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
            onClick={submit}
            disabled={submitting || answeredCount === 0}
          >
            <Flag className="h-4 w-4" aria-hidden />
            {submitting ? "Scoring…" : `Submit (${answeredCount}/${questions.length})`}
          </Button>
        )}
      </div>
      {!allAnswered && idx === questions.length - 1 && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          {questions.length - answeredCount} unanswered — you can still submit, blanks count as missed.
        </p>
      )}

      {/* ── exam submit confirmation ── */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display">Hand in your paper?</AlertDialogTitle>
            <AlertDialogDescription>
              {allAnswered
                ? "Every question is answered — nice and tidy."
                : `${questions.length - answeredCount} question${questions.length - answeredCount === 1 ? "" : "s"} still blank — blanks count as missed.`}{" "}
              {timeLeft !== null && `${fmt(timeLeft)} left on the clock.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">Keep working</AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground"
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden /> Submit paper
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ── pause overlay ── */}
      <AnimatePresence>
        {paused && !submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Exam paused"
          >
            <motion.div
              initial={{ scale: 0.94, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <Card className="w-full max-w-sm border-primary/30 shadow-2xl">
                <CardContent className="space-y-4 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25">
                    <Pause className="h-6 w-6 fill-current" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">Paper paused</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      The clock is frozen{timeLeft !== null ? ` at ${fmt(timeLeft)}` : ""} — stretch, breathe, come back sharp.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 rounded-xl bg-muted/60 px-4 py-2.5 text-xs tabular-nums text-muted-foreground">
                    <span>{answeredCount}/{questions.length} answered</span>
                    <span aria-hidden>·</span>
                    <span>{flaggedCount} flagged</span>
                  </div>
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground"
                    onClick={togglePause}
                    autoFocus
                  >
                    <Play className="h-4 w-4 fill-current" aria-hidden /> Resume paper
                  </Button>
                  <p className="text-[11px] text-muted-foreground/70">Tip: Alt+P toggles pause anytime</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuizResults({
  outcome,
  config,
  elapsed,
  showReview,
  setShowReview,
  timeUp,
}: {
  outcome: QuizSubmitOutcome;
  config: QuizConfig;
  elapsed: number;
  showReview: boolean;
  setShowReview: (v: boolean) => void;
  timeUp: boolean;
}) {
  const { go, triggerConfetti } = useAppStore();
  const [printJob, setPrintJob] = useState<PaperPrintJob | null>(null);
  const a = outcome.attempt;
  const pct = a.percentage;
  const isExam = config.exam === true;
  const passMark = isExam ? EXAM_PASS_MARK : 70;
  const passed = pct >= passMark;
  const missed = outcome.results.filter((r) => !r.correct);
  const allowed = config.secondsAllowed ?? null;
  const timeUsed = a.timeSec;
  const avgPace = Math.round(timeUsed / Math.max(1, a.total));
  const remaining = allowed !== null ? Math.max(0, allowed - timeUsed) : null;

  // section scoring — group graded questions by topic (exam papers)
  const sections = useMemo(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const r of outcome.results) {
      const cur = map.get(r.topic) ?? { correct: 0, total: 0 };
      cur.total += 1;
      if (r.correct) cur.correct += 1;
      map.set(r.topic, cur);
    }
    return [...map.entries()]
      .map(([topic, v]) => ({ topic, ...v, pct: Math.round((v.correct / v.total) * 100) }))
      .sort((x, y) => x.pct - y.pct);
  }, [outcome.results]);

  const encouragement = isExam
    ? pct === 100
      ? "A perfect paper. Frame it 😌"
      : passed
      ? "Above the pass mark — steady and safe 💗"
      : "Below the 50% pass mark — the section scores show exactly where to revise."
    : pct === 100
    ? "Perfect. Take the points and smile 😌"
    : passed
    ? "Look at you improving 💗"
    : "Every miss just told you exactly what to revisit. That's learning too.";

  function fmt(sec: number) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl space-y-6">
      <Card className="overflow-hidden border-border/70">
        <div className={cn(
          "relative px-6 py-8 text-center",
          passed ? "bg-gradient-to-br from-blossom-soft/80 to-lav/60 dark:from-plum/30 dark:to-plum/10" : "bg-gradient-to-br from-gold/20 to-lav/40 dark:from-plum/20 dark:to-plum/5"
        )}>
          <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
          {/* exam pass/fail stamp */}
          {isExam && (
            <div
              className={cn(
                "stamp absolute right-4 top-4 select-none sm:right-6 sm:top-6",
                passed ? "text-accent-foreground" : "text-destructive"
              )}
              role="status"
              aria-label={passed ? `Pass — ${pct}% against the 50% pass mark` : `Below pass mark — ${pct}% against the 50% pass mark`}
            >
              {passed ? "Pass" : "Below pass"}
            </div>
          )}
          <div className="relative flex flex-col items-center gap-4">
            <ProgressRing value={pct} size={120} label={`${pct}%`} sub={`${a.score}/${a.total}`} />
            <div>
              <p className="font-display text-xl font-semibold text-foreground">{config.label || "Quiz"}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {Math.floor(elapsed / 60)} min {elapsed % 60}s · +{outcome.xpGained} XP earned
                {isExam && ` · pass mark ${EXAM_PASS_MARK}%`}
              </p>
              <p className="mt-2 text-sm text-foreground/90">{encouragement}</p>
            </div>
          </div>
        </div>

        <CardContent className="space-y-4 p-5">
          {/* time ran out notice */}
          {isExam && timeUp && (
            <div className="flex items-center gap-2.5 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm text-foreground/85">
              <Hourglass className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              Time ran out — the paper was collected automatically. Unanswered questions count as missed.
            </div>
          )}

          {isExam ? (
            /* ── section scores: per-topic breakdown of the paper ── */
            <div className="rounded-xl border border-border/70 bg-card p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <ListChecks className="h-3.5 w-3.5 text-primary" aria-hidden /> Section scores
              </p>
              <ul className="mt-3 space-y-2.5">
                {sections.map((s) => (
                  <li key={s.topic}>
                    <div className="mb-1 flex items-baseline justify-between gap-2">
                      <p className="truncate text-sm font-medium text-foreground">{s.topic}</p>
                      <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                        {s.correct}/{s.total} · {s.pct}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MiniProgress
                        value={s.pct}
                        className="flex-1"
                        tone={s.pct >= EXAM_PASS_MARK ? "brand" : "gold"}
                      />
                      <button
                        onClick={() => go({ name: "exam-setup", topic: s.topic })}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/50 bg-card/70 px-2 py-0.5 text-[10px] font-medium text-foreground/80 transition hover:border-primary/60 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        aria-label={`Practice questions on ${s.topic}`}
                      >
                        <Target className="h-3 w-3" aria-hidden /> drill
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            /* ── strong/weak areas (regular quizzes) ── */
            <div className="grid gap-3 sm:grid-cols-2">
              {outcome.strongAreas.length > 0 && (
                <div className="rounded-xl border border-sage/50 bg-sage/25 p-3.5 dark:bg-sage/15">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-accent-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Strong areas
                  </p>
                  <ul className="mt-1.5 space-y-0.5 text-xs text-foreground/80">
                    {outcome.strongAreas.map((t) => (
                      <li key={t.topic}>· {t.topic} ({t.accuracy}%)</li>
                    ))}
                  </ul>
                </div>
              )}
              {outcome.weakAreas.length > 0 && (
                <div className="rounded-xl border border-gold/50 bg-gold/15 p-3.5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                    <Brain className="h-3.5 w-3.5" aria-hidden /> Needs a little love
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
                    {outcome.weakAreas.map((t) => (
                      <li key={t.topic} className="flex items-center justify-between gap-2">
                        <span>· {t.topic} ({t.accuracy}%)</span>
                        <button
                          onClick={() => go({ name: "exam-setup", topic: t.topic })}
                          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/50 bg-card/70 px-2 py-0.5 text-[10px] font-medium text-foreground/80 transition hover:border-primary/60 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                          aria-label={`Practice questions on ${t.topic}`}
                        >
                          <Target className="h-3 w-3" aria-hidden /> drill
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[11px] italic text-muted-foreground">
                    Added to your review queue — spaced repetition will bring them back gently.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* pace analysis (exam papers) */}
          {isExam && allowed !== null && (
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-muted/60 px-2 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Time used</p>
                <p className="mt-0.5 font-display text-sm font-semibold tabular-nums text-foreground">
                  {fmt(timeUsed)}
                  <span className="text-[10px] font-normal text-muted-foreground"> / {fmt(allowed)}</span>
                </p>
              </div>
              <div className="rounded-xl bg-muted/60 px-2 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Pace</p>
                <p className="mt-0.5 font-display text-sm font-semibold tabular-nums text-foreground">{avgPace}s / question</p>
              </div>
              <div className="rounded-xl bg-muted/60 px-2 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Clock</p>
                <p className="mt-0.5 font-display text-sm font-semibold tabular-nums text-foreground">
                  {timeUp ? "ran out" : remaining !== null && remaining > 0 ? `${fmt(remaining)} to spare` : "used fully"}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {missed.length > 0 && (
              <Button variant="outline" className="rounded-full" onClick={() => setShowReview(!showReview)}>
                <RefreshCcw className="h-4 w-4" aria-hidden />
                {showReview ? "Hide" : "Review"} mistakes ({missed.length})
              </Button>
            )}
            <Button
              variant="outline"
              className="rounded-full"
              title={isExam ? "Print a marked copy with the answer key" : "Print this marked quiz"}
              onClick={() => {
                setPrintJob({
                  kind: "marked",
                  label: config.label || (isExam ? "Mock paper" : "Quiz"),
                  minutes: config.secondsAllowed ? Math.round(config.secondsAllowed / 60) : null,
                  results: outcome.results,
                  attempt: { score: a.score, total: a.total, percentage: a.percentage, timeSec: a.timeSec },
                });
                toast("Opening print preview — marked copy with the answer key 💗");
              }}
            >
              <Printer className="h-4 w-4" aria-hidden />
              {isExam ? "Print paper" : "Print quiz"}
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground" onClick={() => go({ name: "dashboard" })}>
              <Home className="h-4 w-4" aria-hidden /> Back home
            </Button>
            <Button variant="ghost" className="rounded-full" onClick={() => go({ name: "exam-setup" })}>
              <Sparkles className="h-4 w-4" aria-hidden /> New quiz
            </Button>
            <Button variant="ghost" className="rounded-full" onClick={() => go({ name: "exam-setup", tab: "history" })}>
              <History className="h-4 w-4" aria-hidden /> History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* mistake review */}
      {showReview && missed.length > 0 && (
        <div className="space-y-4">
          {missed.map((r, i) => (
            <motion.div key={r.questionId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="border-destructive/25">
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-destructive" aria-hidden />
                    <span className="rounded-full bg-lav px-2 py-0.5 text-[11px] text-secondary-foreground dark:bg-plum/30">{r.topic}</span>
                  </div>
                  <p className="font-display text-base font-semibold leading-relaxed text-foreground">{r.stem}</p>
                  <div className="mt-3 space-y-1.5 text-sm">
                    {r.options.map((opt, oi) => {
                      const isCorrect = r.correctIndex === oi || (r.correctIndexes?.includes(oi) ?? false);
                      const isSelected = r.selectedIndex === oi || (r.selectedIndexes?.includes(oi) ?? false);
                      return (
                        <div
                          key={oi}
                          className={cn(
                            "flex items-start gap-2.5 rounded-lg border px-3 py-2",
                            isCorrect ? "border-primary/40 bg-sage/30 dark:bg-sage/15" : isSelected ? "border-destructive/40 bg-destructive/5" : "border-border/50"
                          )}
                        >
                          <span className="mt-0.5 text-xs font-bold text-muted-foreground">{LETTERS[oi]}</span>
                          <span className="text-foreground/90">{opt}</span>
                          {isCorrect && <CheckCircle2 className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-primary" aria-label="Correct answer" />}
                          {isSelected && !isCorrect && <XCircle className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-label="Your answer" />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-xl bg-muted/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{r.explanation}</p>
                    {Object.keys(r.whyOthers).length > 0 && (
                      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                        {Object.entries(r.whyOthers).map(([letter, why]) => (
                          <p key={letter}><span className="font-semibold text-foreground/70">{letter}:</span> {why}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {missed.length === 0 && (
        <Card className="border-primary/25 bg-blossom-soft/50 dark:bg-plum/20">
          <CardContent className="flex items-center gap-3 p-5">
            <Trophy className="h-8 w-8 text-primary" aria-hidden />
            <div>
              <p className="font-display font-semibold text-foreground">A perfect score 💗</p>
              <p className="text-sm text-muted-foreground">Every question, every time. Future patients are lucky.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {printJob && <PrintablePaper job={printJob} onDone={() => setPrintJob(null)} />}
    </motion.div>
  );
}
