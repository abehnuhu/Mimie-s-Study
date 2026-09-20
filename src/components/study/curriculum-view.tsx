"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { MiniProgress } from "./progress-widgets";
import { DynIcon, sourceStatusMeta } from "./dyn-icon";
import { SectionHeading } from "./shared-cards";
import { ChevronDown, ChevronRight, Clock, BookOpen, CircleCheck, Lock, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import type { YearNode } from "@/lib/types";

const YEAR_TITLES: Record<number, string> = {
  1: "The Foundation Era",
  2: "The Medical-Surgical Era",
  3: "Your Midwifery Era 💗",
  4: "The Final Stretch 🎓",
};

export function CurriculumView() {
  const { go, user, refreshBootstrap } = useAppStore();
  const [years, setYears] = useState<YearNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openYear, setOpenYear] = useState<number>(user?.currentYear ?? 1);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/curriculum", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Couldn't load the curriculum 💗");
          return;
        }
        setYears(data.years);
      } catch {
        setError("We lost the connection for a moment 💗");
      }
    })();
  }, [refreshBootstrap]);

  if (error) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-foreground">
          {error} <Button variant="outline" size="sm" className="ml-2" onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!years) {
    return (
      <div className="mx-auto max-w-4xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-72 rounded-xl" />
        {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-40 rounded-2xl" />)}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">The Curriculum</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your whole four-year journey — from first cells to final-year clinical reasoning.
        </p>
      </div>

      {years.map((year) => {
        const isOpen = openYear === year.number;
        const yearLessons = year.semesters.reduce((s, sem) => s + sem.lessonCount, 0);
        const yearDone = year.semesters.reduce((s, sem) => s + sem.completedCount, 0);
        const isCurrent = user?.currentYear === year.number;
        return (
          <motion.div key={year.number} layout>
            <Card className={cn("overflow-hidden border-border/70", isCurrent && "ring-1 ring-primary/30")}>
              <button
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-muted/40"
                onClick={() => setOpenYear(isOpen ? -1 : year.number)}
                aria-expanded={isOpen}
              >
                <div className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold",
                  isCurrent ? "bg-gradient-to-br from-primary to-plum text-primary-foreground" : "bg-blossom-soft text-primary dark:bg-plum/40"
                )}>
                  {year.number}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-lg font-semibold text-foreground">Year {year.number}</p>
                    <span className="text-sm text-muted-foreground">· {YEAR_TITLES[year.number]}</span>
                    {isCurrent && (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">You are here</span>
                    )}
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <MiniProgress value={yearLessons ? Math.round((yearDone / yearLessons) * 100) : 0} className="max-w-[180px]" />
                    <span className="shrink-0 text-xs text-muted-foreground">{yearDone}/{yearLessons} lessons</span>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                ) : (
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 border-t border-border/60 bg-muted/20 px-5 py-5">
                      {year.semesters.map((sem) => (
                        <div key={sem.number}>
                          <div className="mb-2.5 flex flex-wrap items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lav/70 text-secondary-foreground dark:bg-plum/40" aria-hidden>
                              <CalendarDays className="h-3.5 w-3.5" />
                            </span>
                            <p className="font-display text-base font-semibold text-foreground">
                              Semester {sem.number}
                            </p>
                            {sem.phase && (
                              <span className="rounded-full bg-lav px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground dark:bg-plum/30">
                                {sem.phase}
                              </span>
                            )}
                            <span className="ml-auto text-xs text-muted-foreground">
                              {sem.completedCount}/{sem.lessonCount} · {Math.round(sem.minutes / 60)}h content
                            </span>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {sem.courses.map((course) => {
                              const pct = course.lessonCount ? Math.round((course.completedCount / course.lessonCount) * 100) : 0;
                              return (
                                <button
                                  key={course.id}
                                  onClick={() => go({ name: "course", slug: course.slug })}
                                  className="card-hover group rounded-xl border border-border/60 bg-card p-4 text-left transition-[border-color] duration-300 hover:border-primary/40"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blossom-soft text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none dark:bg-plum/40">
                                      <DynIcon name={course.icon} className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <p className="truncate font-display text-[15px] font-semibold text-foreground group-hover:text-primary">
                                        {course.title}
                                      </p>
                                      <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{course.description}</p>
                                    </div>
                                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transform-none" aria-hidden />
                                  </div>
                                  <div className="mt-3 flex items-center gap-2">
                                    <MiniProgress value={pct} className="flex-1" />
                                    <span className="text-[11px] text-muted-foreground">{pct}%</span>
                                  </div>
                                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" aria-hidden /> {course.lessonCount} lessons</span>
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden /> {Math.round(course.minutes / 60)}h</span>
                                    {course.completedCount > 0 && (
                                      <span className="flex items-center gap-1 text-primary"><CircleCheck className="h-3 w-3" aria-hidden /> {course.completedCount}</span>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      <p className="text-center text-[11px] text-muted-foreground">
                        <span className={cn("rounded-full px-2 py-0.5", sourceStatusMeta.GCU_ALIGNED.className)}>GCU-Aligned</span>{" "}
                        sequence — verify against your current departmental course outline.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
