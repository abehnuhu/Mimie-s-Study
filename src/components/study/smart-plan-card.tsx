"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppStore } from "@/store/app-store";
import { MiniProgress } from "./progress-widgets";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { SmartPlanData, SmartPlanRow, View, SessionStep } from "@/lib/types";
import {
  RefreshCcw, Target, BookOpen, Zap, Gamepad2, FileText, CheckCircle2,
  ArrowRight, Sparkles, Heart, Gauge, TrendingUp, Play,
} from "lucide-react";

const ROW_ICONS: Record<SmartPlanRow["kind"], typeof Target> = {
  review: RefreshCcw,
  lesson: BookOpen,
  drill: Target,
  mock: FileText,
  activity: Gamepad2,
  quiz: Zap,
};

/** Where each plan row navigates when tapped. */
function rowView(row: SmartPlanRow, plan: SmartPlanData): View | null {
  if (row.done) return null;
  switch (row.action) {
    case "review":
      return { name: "review" };
    case "lesson":
      return plan.nextLessonId ? { name: "lesson", id: plan.nextLessonId } : { name: "curriculum" };
    case "drill":
      return row.topic ? { name: "exam-setup", topic: row.topic } : { name: "exam-setup" };
    case "mock":
      return { name: "exam-setup", preset: { mode: "EXAM", count: 20, secondsPerQuestion: 45 } };
    case "games":
      return { name: "games" };
    case "quiz":
      return { name: "exam-setup" };
    default:
      return null;
  }
}

const MODE_STYLE: Record<SmartPlanData["mode"], { chip: string; icon: typeof Gauge; label: string }> = {
  sprint: {
    chip: "border-rose/40 bg-rose/15 text-rose dark:text-blossom",
    icon: Gauge,
    label: "Exam sprint",
  },
  build: {
    chip: "border-gold/40 bg-gold/15 text-plum dark:text-gold",
    icon: TrendingUp,
    label: "Steady build",
  },
  cruise: {
    chip: "border-sage/40 bg-sage/20 text-accent-foreground",
    icon: Heart,
    label: "Gentle cruise",
  },
};

/** Accuracy chip colour — rose when struggling, gold when close, sage when solid. */
function accuracyTone(acc: number): string {
  if (acc < 60) return "bg-rose/15 text-rose border-rose/30 dark:text-blossom";
  if (acc < 70) return "bg-gold/20 text-plum border-gold/30 dark:text-gold";
  return "bg-sage/25 text-accent-foreground border-sage/30";
}

export function SmartPlanCard() {
  const { go, user, startSession } = useAppStore();
  const [plan, setPlan] = useState<SmartPlanData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    try {
      const res = await fetch("/api/plan", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as SmartPlanData;
      setPlan(json);
      setFailed(false);
    } catch {
      setFailed(true);
      if (isRefresh) toast("Couldn't refresh the plan 💗");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const pct = plan && plan.rows.length > 0 ? Math.round((plan.doneCount / plan.rows.length) * 100) : 0;
  const allDone = plan !== null && plan.rows.length > 0 && plan.doneCount === plan.rows.length;
  const modeStyle = plan ? MODE_STYLE[plan.mode] : null;

  // steps for the guided session — only what's still open, in plan order
  const sessionSteps: SessionStep[] =
    plan && user
      ? plan.rows
          .filter((r) => !r.done)
          .map((r) => ({ row: r, view: rowView(r, plan) }))
      : [];
  const sessionMinutes = sessionSteps.reduce((s, st) => s + st.row.minutes, 0);

  function beginSession() {
    if (sessionSteps.length === 0) return;
    startSession(sessionSteps, user?.xp ?? 0);
    toast("Let's go 💗 — I'll walk you through it step by step", {
      description: `${sessionSteps.length} steps · ~${sessionMinutes} min — done button when you're ready for the next one.`,
    });
  }

  return (
    <Card className="card-hover relative overflow-hidden border-border/70">
      {/* soft brand wash in the header — ties the plan to the hero gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-blossom-soft/60 to-transparent dark:from-plum/25"
        aria-hidden
      />
      <CardHeader className="relative pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2 font-display text-lg">
            <Target className="h-4 w-4 text-primary" aria-hidden /> Today&apos;s smart plan
          </CardTitle>
          {modeStyle && plan && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                modeStyle.chip
              )}
              title={plan.headline}
            >
              <modeStyle.icon className="h-3 w-3" aria-hidden />
              {plan.focusLabel}
            </span>
          )}
        </div>
        {plan && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {plan.headline}
          </p>
        )}
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-xs tabular-nums text-muted-foreground">
            {plan ? `${plan.doneCount}/${plan.rows.length} done · ~${plan.totalMin} min` : "…"}
          </span>
          <span className="text-xs tabular-nums text-muted-foreground">
            {plan && (plan.remainingMin > 0
              ? `${plan.remainingMin} min left of ${plan.targetMin} today`
              : `daily goal met · ${plan.minutesDone} min`)}
          </span>
        </div>
        <MiniProgress value={pct} className="mt-2" tone={allDone ? "gold" : "brand"} />

        {/* one-tap guided session — the workout CTA */}
        {sessionSteps.length > 0 ? (
          <Button
            size="lg"
            className="cta-sheen mt-3 w-full justify-between rounded-2xl bg-gradient-to-r from-primary to-plum px-5 text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-95 active:scale-[0.99]"
            onClick={beginSession}
          >
            <span className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Play className="h-4 w-4 fill-current" aria-hidden />
              </span>
              <span className="text-left">
                <span className="block font-display text-base font-semibold leading-tight">Start my session</span>
                <span className="block text-[11px] font-normal opacity-90">
                  {sessionSteps.length} steps · ~{sessionMinutes} min · guided, one tap at a time
                </span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
          </Button>
        ) : (
          plan && (
            <p className="mt-3 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-2.5 text-center text-sm font-medium text-foreground">
              Everything on today&apos;s plan is done 💗 — rest is part of learning too.
            </p>
          )
        )}
      </CardHeader>
      <CardContent className="relative space-y-2.5">
        {loading && (
          <div className="space-y-2.5" aria-busy="true">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-1.5">
                  <Skeleton className="h-4 w-2/3 rounded-md" />
                  <Skeleton className="h-3 w-1/2 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        )}

        {failed && !loading && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-4 text-center text-sm">
            <p className="font-medium text-foreground">The plan couldn&apos;t load just now.</p>
            <Button size="sm" variant="outline" className="mt-2 rounded-full" onClick={() => load()}>
              Try again
            </Button>
          </div>
        )}

        {plan && !loading && (
          <>
            <AnimatePresence initial={false}>
              {plan.rows.map((row, i) => {
                const Icon = ROW_ICONS[row.kind] ?? Target;
                const view = rowView(row, plan);
                return (
                  <motion.button
                    key={`${row.kind}-${row.label}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.3 }}
                    onClick={view ? () => go(view) : undefined}
                    disabled={row.done}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all",
                      row.done
                        ? "border-sage/40 bg-sage/20 dark:bg-sage/10"
                        : view
                          ? "border-border/60 bg-muted/30 hover:border-primary/50 hover:bg-blossom-soft/40 hover:shadow-sm hover:shadow-primary/10 active:scale-[0.99]"
                          : "border-border/60 bg-muted/30"
                    )}
                    aria-label={
                      row.done
                        ? `${row.label} — done`
                        : `${row.label} — ${row.minutes} minutes, tap to start`
                    }
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition",
                        row.done
                          ? "bg-sage text-accent-foreground"
                          : "bg-blossom-soft text-primary dark:bg-plum/40"
                      )}
                    >
                      {row.done ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <Icon className="h-4 w-4" aria-hidden />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={cn(
                            "truncate text-sm font-medium",
                            row.done ? "text-muted-foreground line-through" : "text-foreground"
                          )}
                        >
                          {row.label}
                        </span>
                        {typeof row.accuracy === "number" && !row.done && (
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
                              accuracyTone(row.accuracy)
                            )}
                            title={`Accuracy over your past answers: ${row.accuracy}%`}
                          >
                            {row.accuracy}%
                          </span>
                        )}
                        {row.questionCount && !row.done && (
                          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
                            {row.questionCount} Qs
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                        {row.why}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-medium tabular-nums text-primary/80">
                        {row.minutes} min
                      </span>
                    </span>
                    {!row.done && view && (
                      <ArrowRight
                        className="mt-1.5 h-4 w-4 shrink-0 text-muted-foreground/60 transition group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden
                      />
                    )}
                  </motion.button>
                );
              })}
            </AnimatePresence>

            {allDone && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-br from-gold/15 via-blossom-soft/50 to-lav/40 px-4 py-4 text-center dark:from-gold/10 dark:via-plum/20 dark:to-plum/10"
              >
                <Heart className="mx-auto h-5 w-5 fill-current text-primary" aria-hidden />
                <p className="mt-1 font-display text-sm font-semibold text-foreground">
                  Plan complete — beautifully done 💗
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Everything on today&apos;s list is ticked. Rest is part of learning too.
                </p>
              </motion.div>
            )}

            {!allDone && (
              <p className="pt-1 text-center text-xs text-muted-foreground">
                Built from your weak topics, review queue and exam calendar.
              </p>
            )}

            {/* weak-topic digest */}
            {plan.weakTopics.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-3">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                <span className="text-[11px] font-medium text-muted-foreground">Needs love:</span>
                {plan.weakTopics.map((w) => (
                  <span
                    key={w.topic}
                    className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    title={`${w.accuracy}% over ${w.total} answers`}
                  >
                    {w.topic}
                    <span className={cn("rounded-full px-1 tabular-nums font-semibold", accuracyTone(w.accuracy))}>
                      {w.accuracy}%
                    </span>
                  </span>
                ))}
              </div>
            )}

            <div className="flex justify-end">
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full text-muted-foreground hover:text-primary"
                onClick={() => load(true)}
                disabled={refreshing}
                aria-label="Refresh today's plan"
              >
                <RefreshCcw className={cn("h-3.5 w-3.5", refreshing && "animate-spin")} aria-hidden />
                Refresh plan
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
