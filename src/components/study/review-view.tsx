"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { ProgressRing } from "./progress-widgets";
import { EmptyState } from "./shared-cards";
import { SpeakButton } from "./speak-button";
import { CheckCircle2, XCircle, Sparkles, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewQuestion {
  id: string;
  topic: string;
  type: string;
  difficulty: string;
  stem: string;
  options: string[];
  lessonId: string | null;
  correctIndex: number | null;
  correctIndexes: number[] | null;
  explanation: string;
}

interface ReviewData {
  dueCount: number;
  items: { itemId: string; topic: string; stage: number; timesSeen: number; question: ReviewQuestion }[];
  upcomingCount: number;
  nextDueAt: string | null;
  masteredCount: number;
}

const STAGE_LABELS = ["Same day", "1 day", "3 days", "7 days", "2 weeks", "1 month", "Mastered"];

export function ReviewView() {
  const { refreshBootstrap, triggerConfetti } = useAppStore();
  const [data, setData] = useState<ReviewData | null>(null);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/review", { cache: "no-store" });
        const json = await res.json();
        setData(json);
      } catch {
        toast("Couldn't load your review queue 💗");
      }
    })();
  }, []);

  if (!data) {
    return (
      <div className="mx-auto max-w-2xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-56 rounded-xl" />
        <Skeleton className="h-48 rounded-2xl" />
      </div>
    );
  }

  const items = data.items ?? [];
  const item = items[idx];

  function isCorrectChoice(q: ReviewQuestion, choice: number[]): boolean {
    if (q.type === "MULTI_SELECT" && q.correctIndexes) {
      const want = [...q.correctIndexes].sort();
      const got = [...choice].sort();
      return want.length === got.length && want.every((v, i) => v === got[i]);
    }
    if (q.type === "ORDERING") return true; // self-assessed sequence
    return choice.length === 1 && choice[0] === q.correctIndex;
  }

  async function grade(correct: boolean) {
    if (!item) return;
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: item.topic, correct, questionId: item.question.id }),
      });
      const json = await res.json();
      if (res.ok) {
        setSessionStats((s) => ({ correct: s.correct + (correct ? 1 : 0), wrong: s.wrong + (correct ? 0 : 1) }));
        if (json.mastered) {
          toast(`${item.topic} mastered 💗`, { description: "It graduated from your review queue." });
          triggerConfetti(40);
        } else if (correct) {
          toast(`+${json.xpGained} XP · returns ${STAGE_LABELS[json.stage] ?? "soon"}`);
        }
        refreshBootstrap();
      }
    } catch {
      toast("We lost the connection — your progress is safe 💗");
    }
    setSelected([]);
    setRevealed(false);
    setIdx((i) => i + 1);
  }

  if (!item) {
    if (idx === 0 && data.dueCount === 0) {
      return (
        <div className="mx-auto max-w-2xl space-y-6">
          <div>
            <h1 className="font-display text-3xl font-semibold text-foreground">Your Review Queue</h1>
            <p className="mt-1 text-sm text-muted-foreground">Spaced repetition, done gently.</p>
          </div>
          <EmptyState
            icon={CheckCircle2}
            title="All caught up 💗"
            hint={
              data.upcomingCount > 0
                ? `Nothing due today. ${data.upcomingCount} concept${data.upcomingCount === 1 ? "" : "s"} will return over the coming days.`
                : "Your queue is empty — miss a quiz question and it will appear here for spaced review."
            }
          />
          <div className="grid grid-cols-3 gap-3">
            <Card className="border-border/70"><CardContent className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-primary">{data.dueCount}</p>
              <p className="text-xs text-muted-foreground">due today</p>
            </CardContent></Card>
            <Card className="border-border/70"><CardContent className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-plum dark:text-lav">{data.upcomingCount}</p>
              <p className="text-xs text-muted-foreground">upcoming</p>
            </CardContent></Card>
            <Card className="border-border/70"><CardContent className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-chart-4">{data.masteredCount}</p>
              <p className="text-xs text-muted-foreground">mastered</p>
            </CardContent></Card>
          </div>
        </div>
      );
    }
    const total = sessionStats.correct + sessionStats.wrong;
    return (
      <div className="mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="border-primary/25 bg-gradient-to-br from-blossom-soft/70 to-lav/50 dark:from-plum/30 dark:to-plum/10">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <ProgressRing value={total ? Math.round((sessionStats.correct / total) * 100) : 0} size={110} label={`${sessionStats.correct}/${total}`} sub="this session" />
              <div>
                <p className="font-display text-xl font-semibold text-foreground">Review session complete 💗</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {sessionStats.wrong === 0
                    ? "Flawless review — these concepts are getting comfortable."
                    : "Missed ones will come back sooner. That's the system working."}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  const q = item.question;
  const isOrdering = q.type === "ORDERING";
  const isMulti = q.type === "MULTI_SELECT";

  function toggleChoice(i: number) {
    if (revealed) return;
    if (isMulti) {
      setSelected((s) => (s.includes(i) ? s.filter((v) => v !== i) : [...s, i].sort((a, b) => a - b)));
    } else {
      setSelected([i]);
    }
  }

  const correctSet = isMulti ? (q.correctIndexes ?? []) : q.correctIndex !== null ? [q.correctIndex] : [];

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">Review Queue</h1>
          <p className="text-xs text-muted-foreground">
            Item {idx + 1} of {items.length} · stage: {STAGE_LABELS[item.stage] ?? "—"} · seen {item.timesSeen}×
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-lav px-3 py-1.5 text-xs font-medium text-secondary-foreground dark:bg-plum/30">
          <CalendarClock className="h-3.5 w-3.5" aria-hidden />
          spaced repetition
        </div>
      </div>

      <motion.div key={item.itemId} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="border-border/70">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-blossom-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary dark:bg-plum/40">
                {item.topic}
              </span>
              <SpeakButton text={q.stem} />
            </div>
            <h2 className="mt-3 font-display text-lg font-semibold leading-relaxed text-foreground sm:text-xl">{q.stem}</h2>

            <div className="mt-5 space-y-3">
              {q.options.map((opt, i) => {
                const chosen = selected.includes(i);
                const isRight = correctSet.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => toggleChoice(i)}
                    disabled={revealed || isOrdering}
                    className={cn(
                      "group flex w-full items-center gap-3.5 rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all active:scale-[0.99]",
                      revealed
                        ? isRight
                          ? "border-primary bg-sage/30 dark:bg-sage/15"
                          : "border-border/50 opacity-70"
                        : chosen
                        ? "border-primary bg-blossom-soft/60 dark:bg-plum/30"
                        : "border-border/60 bg-card hover:border-primary/40 hover:shadow-sm hover:shadow-primary/5"
                    )}
                    aria-pressed={chosen}
                  >
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-200",
                        revealed && isRight
                          ? "border-primary bg-primary text-primary-foreground"
                          : chosen
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground group-hover:scale-110 group-hover:border-primary/50 motion-reduce:transform-none"
                      )}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                    {revealed && isRight && (
                      <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-primary" aria-label="Correct answer" />
                    )}
                  </button>
                );
              })}
            </div>

            {isOrdering && (
              <p className="mt-3 text-center text-xs italic text-muted-foreground">
                Ordering item — reveal to study the correct sequence, then grade yourself honestly.
              </p>
            )}

            {!revealed ? (
              <Button
                className="mt-6 w-full rounded-full"
                size="lg"
                disabled={selected.length === 0 && !isOrdering}
                onClick={() => setRevealed(true)}
              >
                <Sparkles className="h-4 w-4" aria-hidden /> Check answer
              </Button>
            ) : (
              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Remember</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                    {isOrdering ? (
                      <>Correct sequence: <span className="font-semibold">{q.options.join(" → ")}</span></>
                    ) : (
                      q.explanation
                    )}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="flex-1 rounded-full"
                    size="lg"
                    onClick={() => grade(isCorrectChoice(q, selected))}
                  >
                    {isCorrectChoice(q, selected) ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <XCircle className="h-4 w-4" aria-hidden />}
                    {isCorrectChoice(q, selected) ? "I got it right · +5 XP" : "I missed it"}
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Be honest — the schedule only works if you are 💗
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {sessionStats.correct + sessionStats.wrong > 0 && (
        <p className="text-center text-xs text-muted-foreground">
          Session: {sessionStats.correct} right · {sessionStats.wrong} missed
        </p>
      )}
    </div>
  );
}
