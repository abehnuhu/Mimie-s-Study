"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProgressRing, XpBar, MiniProgress } from "./progress-widgets";
import { StatCard, SectionHeading, EmptyState, ErrorCard } from "./shared-cards";
import { HeartbeatLine } from "./decor";
import { DynIcon, difficultyStyle } from "./dyn-icon";
import { StreakCelebration, STREAK_CELEBRATION_KEY, STREAK_MILESTONES } from "./streak-celebration";
import { SmartPlanCard } from "./smart-plan-card";
import {
  Flame, Clock, Brain, Play, Zap, Layers, RefreshCcw, Sparkles, Trophy, GraduationCap, BookOpen, CalendarHeart,
} from "lucide-react";
import { toast } from "sonner";
import type { BootstrapData, View } from "@/lib/types";

export function useBootstrap() {
  const { bootstrap, refreshBootstrap, authChecked } = useAppStore();
  useEffect(() => {
    if (authChecked && !bootstrap) refreshBootstrap();
  }, [authChecked, bootstrap, refreshBootstrap]);
  return bootstrap;
}

export function DashboardView() {
  const { go, user, refreshBootstrap, triggerConfetti } = useAppStore();
  const bootstrap = useBootstrap();
  const [celebratingStreak, setCelebratingStreak] = useState<number | null>(null);

  useEffect(() => {
    refreshBootstrap();
  }, [refreshBootstrap]);

  // streak milestone celebration — each milestone fires once per browser
  useEffect(() => {
    if (!bootstrap) return;
    const streak = bootstrap.streak.current;
    if (!STREAK_MILESTONES.includes(streak)) return;
    let alreadyCelebrated = false;
    try {
      alreadyCelebrated = window.localStorage.getItem(STREAK_CELEBRATION_KEY) === String(streak);
    } catch {
      return; // storage unavailable — skip rather than celebrate on every load
    }
    if (alreadyCelebrated) return;
    // let the dashboard settle before the party starts
    const t = window.setTimeout(() => {
      setCelebratingStreak(streak);
      triggerConfetti(120);
    }, 700);
    return () => window.clearTimeout(t);
  }, [bootstrap, triggerConfetti]);

  if (!user) return null;

  if (!bootstrap) {
    return (
      <div className="space-y-4" aria-busy="true" aria-label="Loading your dashboard">
        <div className="gradient-hero relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="mt-3 h-4 w-96 max-w-full" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-20 rounded-xl" />)}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <Skeleton className="h-72 rounded-2xl lg:col-span-2" />
          <Skeleton className="h-72 rounded-2xl" />
        </div>
      </div>
    );
  }

  const b: BootstrapData = bootstrap;
  const firstName = (user.nickname || user.name).split(" ")[0];

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* ── hero ── */}
      <section className="gradient-hero relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <HeartbeatLine className="absolute -bottom-1 right-4 h-16 w-2/3 text-primary/15" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Year {user.currentYear} · Semester {user.currentSemester}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {b.greeting.greeting}
          </h1>
          <p className="mt-2 max-w-lg text-pretty text-muted-foreground">{b.greeting.sub}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {b.nextLesson && (
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-95"
                onClick={() => go({ name: "lesson", id: b.nextLesson!.id })}
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                Continue learning
              </Button>
            )}
            {b.review.dueCount > 0 && (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/40 bg-card/70 backdrop-blur hover:bg-card"
                onClick={() => go({ name: "review" })}
              >
                <RefreshCcw className="h-4 w-4" aria-hidden />
                {b.review.dueCount} to review
              </Button>
            )}
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onClick={() => go({ name: "flashcards" })}
            >
              <Layers className="h-4 w-4" aria-hidden />
              Flashcards
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full text-muted-foreground"
              onClick={async () => {
                try {
                  const res = await fetch("/api/exam/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mode: "QUICK", count: 5 }),
                  });
                  const data = await res.json();
                  if (!res.ok) {
                    toast(data.error ?? "Couldn't start the quiz 💗");
                    return;
                  }
                  go({
                    name: "quiz",
                    config: {
                      questions: data.questions,
                      mode: "QUICK",
                      label: data.label,
                      source: "quick",
                      timed: false,
                    },
                  });
                } catch {
                  toast("We lost the connection for a moment 💗");
                }
              }}
            >
              <Zap className="h-4 w-4" aria-hidden />
              Quick quiz
            </Button>
          </div>

          <div className="mt-6 max-w-md">
            <XpBar xp={b.xp.total} level={b.xp.level} />
          </div>
        </motion.div>
      </section>

      {/* ── stat row ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Today at a glance">
        <StatCard icon={Flame} value={`${b.streak.current} days`} label="Current streak" accent="blossom" pulse={b.streak.current > 0} />
        <StatCard icon={Clock} value={`${b.today.minutes} min`} label="Studied today" accent="lav" />
        <StatCard icon={Brain} value={b.mastered} label="Topics mastered" accent="sage" />
        <StatCard icon={Sparkles} value={`+${b.today.xp} XP`} label="Earned today" accent="gold" />
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* ── left column: next lesson + plan ── */}
        <div className="min-w-0 space-y-5 lg:col-span-2">
          {/* next lesson card */}
          {b.nextLesson ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <Card className="card-hover overflow-hidden border-border/70">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between border-b border-border/60 bg-lav/40 px-5 py-3 dark:bg-plum/20">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden /> Next lesson
                    </p>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${difficultyStyle[b.nextLesson.difficulty] ?? ""}`}>
                      {b.nextLesson.difficulty}
                    </span>
                  </div>
                  <button
                    className="w-full px-5 py-5 text-left transition hover:bg-muted/40"
                    onClick={() => go({ name: "lesson", id: b.nextLesson!.id })}
                  >
                    <p className="font-display text-xl font-semibold text-foreground">{b.nextLesson.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{b.nextLesson.description}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2.5 py-1">{b.nextLesson.course}</span>
                      <span>· {b.nextLesson.durationMin} min</span>
                    </div>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <EmptyState
              icon={GraduationCap}
              title="Your journey starts with one."
              hint="Open the curriculum and pick the first lesson of your semester."
              action={<Button onClick={() => go({ name: "curriculum" })} className="rounded-full">Explore curriculum</Button>}
            />
          )}

          {/* today's smart plan (adaptive — built by /api/plan) */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <SmartPlanCard />
          </motion.div>
        </div>

        {/* ── right column ── */}
        <div className="min-w-0 space-y-5">
          {/* exam countdown */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
            <ExamCountdownCard exam={b.exam} go={go} firstName={firstName} />
          </motion.div>

          {/* today's progress ring */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            <Card className="border-border/70">
              <CardContent className="flex flex-col items-center gap-3 p-5">
                <ProgressRing
                  value={b.today.progressPct}
                  size={110}
                  label={`${b.today.progressPct}%`}
                  sub="today's goal"
                />
                <div className="w-full space-y-1.5 text-center text-xs text-muted-foreground">
                  <p>
                    {b.today.minutes} of {b.today.target} minutes
                  </p>
                  <p>
                    {b.today.lessons} lesson{b.today.lessons === 1 ? "" : "s"} · {b.today.quizzes} quiz{b.today.quizzes === 1 ? "z" : "zes"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* review queue */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between font-display text-lg">
                  <span className="flex items-center gap-2">
                    <RefreshCcw className="h-4 w-4 text-primary" aria-hidden /> Review queue
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {b.review.dueCount === 0 ? (
                  <p className="py-2 text-center text-sm text-muted-foreground">
                    All caught up 💗
                    <br />
                    <span className="text-xs">Nothing needs revisiting today.</span>
                  </p>
                ) : (
                  <>
                    <p className="mb-2 text-sm text-foreground">
                      {b.review.dueCount} concept{b.review.dueCount === 1 ? "" : "s"} to revisit today
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {b.review.items.map((r) => (
                        <span key={r.id} className="rounded-full bg-lav px-2.5 py-1 text-[11px] text-secondary-foreground dark:bg-plum/30">
                          {r.topic}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" className="mt-3 w-full rounded-full" onClick={() => go({ name: "review" })}>
                      Review now
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* weakest topic */}
          {b.weakTopics.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
              <Card className="border-border/70">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming back to</p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-foreground">{b.weakTopics[0]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Your weakest topic this week — let&apos;s revisit it.</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-3 w-full rounded-full"
                    onClick={async () => {
                      try {
                        const res = await fetch("/api/exam/generate", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ mode: "WEAK", count: 5 }),
                        });
                        const data = await res.json();
                        if (!res.ok) {
                          toast(data.error ?? "No weak-topic questions yet 💗");
                          return;
                        }
                        go({
                          name: "quiz",
                          config: { questions: data.questions, mode: "EXAM", label: data.label, source: "exam", timed: false },
                        });
                      } catch {
                        toast("We lost the connection for a moment 💗");
                      }
                    }}
                  >
                    Practice these
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* personal message */}
          {b.personalMessage && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-primary/25 bg-gradient-to-br from-blossom-soft/70 to-lav/50 dark:from-plum/30 dark:to-plum/10">
                <CardContent className="flex items-start gap-3 p-5">
                  <span className="text-2xl" aria-hidden>{b.personalMessage.tone === "playful" ? "😉" : b.personalMessage.tone === "proud" ? "💗" : "🌸"}</span>
                  <p className="font-display text-[15px] italic leading-relaxed text-foreground">
                    “{b.personalMessage.text}”
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* latest badge */}
          {b.badges.earned[0] && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <Card className="border-gold/30 bg-gold/10">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/30 text-plum dark:text-gold">
                    <Trophy className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Latest badge</p>
                    <p className="truncate font-display font-semibold text-foreground">{b.badges.earned[0].title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      {celebratingStreak !== null && (
        <StreakCelebration streak={celebratingStreak} onDismiss={() => setCelebratingStreak(null)} />
      )}
    </div>
  );
}

/** Exam countdown widget — big days-left number, 90-day runway bar, practice-exam quick action. */
function ExamCountdownCard({
  exam,
  go,
  firstName,
}: {
  exam: { date: string | null; daysLeft: number | null } | null | undefined;
  go: (view: View) => void;
  firstName: string;
}) {
  // no date set (or unset legacy payload) → gentle nudge to pick one
  if (!exam?.date || exam.daysLeft === null) {
    const passed = !!exam?.date;
    return (
      <Card className={passed ? "border-border/70" : "border-dashed border-primary/40 bg-blossom-soft/40 dark:bg-plum/15"}>
        <CardContent className="p-5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <CalendarHeart className="h-3.5 w-3.5 text-primary" aria-hidden /> Exam countdown
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-foreground">
            {passed ? "That date has come and gone" : "Set your exam date"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {passed
              ? "Pick your next milestone and we'll count down again."
              : "A gentle deadline makes the study plan real."}
          </p>
          <Button
            size="sm"
            variant="outline"
            className="mt-3 w-full rounded-full"
            onClick={() => go({ name: "profile" })}
          >
            <CalendarHeart className="h-3.5 w-3.5" aria-hidden /> {passed ? "Set a new date" : "Set exam date"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const daysLeft = exam.daysLeft;
  const dateObj = new Date(exam.date + "T00:00:00");
  const pretty = `${dateObj.toLocaleDateString("en-GB", { weekday: "long" })}, ${dateObj.getDate()} ${dateObj.toLocaleDateString("en-GB", { month: "long" })}`;

  // exam day — extra love
  if (daysLeft === 0) {
    return (
      <Card className="border-primary/40 bg-gradient-to-br from-blossom-soft/70 to-lav/60 dark:from-plum/40 dark:to-plum/15">
        <CardContent className="p-5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-gold" aria-hidden /> Exam day
          </p>
          <p className="mt-2 font-display text-xl font-semibold leading-snug text-foreground">
            Your exam is TODAY — you&apos;ve got this, {firstName}! 💗
          </p>
          <Button
            size="sm"
            className="mt-3 w-full rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground hover:opacity-95"
            onClick={() => go({ name: "exam-setup" })}
          >
            <Zap className="h-3.5 w-3.5" aria-hidden /> Warm up now
          </Button>
        </CardContent>
      </Card>
    );
  }

  // classic countdown — fills up as the exam approaches (90-day runway)
  const runwayPct = Math.round(((90 - Math.min(daysLeft, 90)) / 90) * 100);
  return (
    <Card className="overflow-hidden border-gold/40 bg-gradient-to-br from-gold/15 via-blossom-soft/60 to-lav/50 dark:from-gold/10 dark:via-plum/30 dark:to-plum/15">
      <CardContent className="p-5">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <CalendarHeart className="h-3.5 w-3.5 text-primary" aria-hidden /> Exam countdown
        </p>
        <div className="mt-3 flex items-end gap-3">
          <span
            className="font-display text-4xl font-semibold leading-none tabular-nums text-foreground"
            aria-label={`${daysLeft} days until your exam on ${pretty}`}
          >
            {daysLeft}
          </span>
          <span className="pb-1 text-sm text-muted-foreground">days until your exam</span>
        </div>
        <p className="mt-2 text-sm font-medium text-foreground/80">{pretty}</p>
        <MiniProgress value={runwayPct} className="mt-3" />
        <p className="mt-1.5 text-[11px] text-muted-foreground">
          {daysLeft > 90 ? "A long runway — steady pace wins" : `${runwayPct}% of your 90-day runway travelled`}
        </p>
        <Button size="sm" className="mt-3 w-full rounded-full" onClick={() => go({ name: "exam-setup" })}>
          <GraduationCap className="h-3.5 w-3.5" aria-hidden /> Practice exam
        </Button>
      </CardContent>
    </Card>
  );
}
