"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GameShell, type GameResult } from "./game-shell";
import { Progress } from "@/components/ui/progress";
import { Timer, Zap, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface RapidQuestion {
  id: string;
  topic: string;
  stem: string;
  options: string[];
  correctIndex: number | null;
  explanation: string;
}

const GAME_SECONDS = 60;

export function SixtySecondGame() {
  const [questions, setQuestions] = useState<RapidQuestion[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [finished, setFinished] = useState(false);
  const startRef = useRef<number>(0);

  async function load() {
    setQuestions(null);
    setIdx(0);
    setScore(0);
    setAnswered(null);
    setTimeLeft(GAME_SECONDS);
    setFinished(false);
    try {
      const res = await fetch("/api/games/sixty-second", { cache: "no-store" });
      const json = await res.json();
      setQuestions(json.questions ?? []);
      startRef.current = Date.now();
    } catch {
      toast("Couldn't load questions 💗");
      setQuestions([]);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/games/sixty-second", { cache: "no-store" });
        const json = await res.json();
        setQuestions(json.questions ?? []);
        startRef.current = Date.now();
      } catch {
        toast("Couldn't load questions 💗");
        setQuestions([]);
      }
    })();
  }, []);

  useEffect(() => {
    if (finished || !questions || questions.length === 0) return;
    const t = setInterval(() => {
      setTimeLeft((tl) => {
        if (tl <= 1) {
          setFinished(true);
          return 0;
        }
        return tl - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [finished, questions]);

  const q = questions?.[idx];
  const result: GameResult | null = finished
    ? {
        score: questions && questions.length > 0 ? Math.round((score / questions.length) * 100) : 0,
        timeSec: GAME_SECONDS,
      }
    : null;

  function answer(i: number) {
    if (answered !== null || !q) return;
    setAnswered(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
    setTimeout(() => {
      setAnswered(null);
      if (idx + 1 >= (questions?.length ?? 0)) setFinished(true);
      else setIdx((v) => v + 1);
    }, 1100);
  }

  return (
    <GameShell
      slug="sixty-second"
      title="60-Second Midwife"
      description="Rapid fire. Trust yourself. Go."
      icon="Zap"
      onRestart={load}
      result={result}
    >
      {!questions && <p className="py-10 text-center text-sm text-muted-foreground">Shuffling questions…</p>}

      {questions && questions.length === 0 && !finished && (
        <p className="py-10 text-center text-sm text-muted-foreground">No questions available yet 💗</p>
      )}

      {q && !finished && (
        <div className="rounded-2xl border border-border/70 bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold tabular-nums",
              timeLeft <= 10 ? "bg-destructive/15 text-destructive" : "bg-lav text-secondary-foreground dark:bg-plum/30"
            )} aria-live="polite">
              <Timer className="h-4 w-4" aria-hidden /> {timeLeft}s
            </span>
            <span className="text-xs text-muted-foreground">
              <Zap className="mr-1 inline h-3 w-3" aria-hidden />
              {score} correct · Q{idx + 1}
            </span>
          </div>
          <Progress value={(timeLeft / GAME_SECONDS) * 100} className="mb-5 h-1.5" aria-hidden />

          <AnimatePresence mode="wait">
            <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <p className="font-display text-base font-semibold leading-relaxed text-foreground">{q.stem}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, i) => {
                  const isChoice = answered === i;
                  const isCorrect = i === q.correctIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => answer(i)}
                      disabled={answered !== null}
                      className={cn(
                        "rounded-xl border-2 px-3.5 py-3 text-left text-sm transition-all",
                        answered !== null
                          ? isCorrect
                            ? "border-primary bg-sage/30 dark:bg-sage/15"
                            : isChoice
                            ? "border-destructive bg-destructive/5"
                            : "border-border/50 opacity-60"
                          : "border-border/60 hover:border-primary/50"
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answered !== null && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    "mt-3 flex items-start gap-2 text-xs leading-relaxed",
                    answered === q.correctIndex ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {answered === q.correctIndex ? (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  ) : (
                    <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" aria-hidden />
                  )}
                  {q.explanation}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {finished && (
        <p className="text-center text-sm text-muted-foreground">
          {score} correct in 60 seconds — {score >= 8 ? "lightning instincts ⚡" : score >= 5 ? "quick and steady 💗" : "speed comes with familiarity, keep playing."}
        </p>
      )}
    </GameShell>
  );
}
