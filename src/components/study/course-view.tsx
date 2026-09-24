"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MiniProgress } from "./progress-widgets";
import { DynIcon, difficultyStyle, sourceStatusMeta } from "./dyn-icon";
import { EmptyState, ErrorCard } from "./shared-cards";
import { ChevronDown, Clock, HelpCircle, CircleCheck, Circle, Play, Layers, ListChecks, Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseDetail {
  course: {
    id: string; title: string; slug: string; description: string | null; icon: string | null;
    year: number; semester: number; phase: string | null; sourceStatus: string;
  };
  modules: {
    id: string; title: string;
    lessons: {
      id: string; title: string; description: string | null; difficulty: string; durationMin: number;
      sourceStatus: string; questionCount: number; flashcardCount: number; status: string;
    }[];
  }[];
  stats: { lessonCount: number; completed: number; progressPct: number; minutes: number };
}

export function CourseView({ slug }: { slug: string }) {
  const { go, setAssistantHint } = useAppStore();
  const [data, setData] = useState<CourseDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openModule, setOpenModule] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/courses/${slug}`, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Couldn't open this course 💗");
          return;
        }
        setData(json);
        // auto-open the first module with an uncompleted lesson
        for (const m of json.modules as CourseDetail["modules"]) {
          if (m.lessons.some((l) => l.status !== "COMPLETED")) {
            setOpenModule(m.id);
            break;
        }
        }
      } catch {
        setError("We lost the connection for a moment 💗");
      }
    })();
  }, [slug]);

  // tell Ask-Mimie where she is
  useEffect(() => {
    setAssistantHint(
      data ? `Course “${data.course.title}” · ${data.stats.lessonCount} lessons` : null
    );
    return () => setAssistantHint(null);
  }, [data, setAssistantHint]);

  if (error) return <div className="mx-auto max-w-3xl"><ErrorCard message={error} onRetry={() => window.location.reload()} /></div>;

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl space-y-4" aria-busy="true">
        <Skeleton className="h-36 rounded-3xl" />
        {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
      </div>
    );
  }

  const { course, modules, stats } = data;
  const firstIncomplete = modules.flatMap((m) => m.lessons).find((l) => l.status !== "COMPLETED");

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      {/* hero */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-hero relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8"
      >
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Year {course.year} · Semester {course.semester}</span>
            {course.phase && <span className="rounded-full bg-card/70 px-2 py-0.5 backdrop-blur">{course.phase}</span>}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card/80 text-primary backdrop-blur sm:flex">
              <DynIcon name={course.icon} className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground sm:text-3xl">
                {course.title}
              </h1>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">{course.description}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="min-w-[200px] flex-1">
              <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                <span>{stats.completed}/{stats.lessonCount} lessons</span>
                <span>{stats.progressPct}%</span>
              </div>
              <MiniProgress value={stats.progressPct} />
            </div>
            {firstIncomplete && (
              <Button
                className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
                onClick={() => go({ name: "lesson", id: firstIncomplete.id })}
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                {stats.completed === 0 ? "Begin course" : "Continue"}
              </Button>
            )}
            <Button
              variant="outline"
              className="rounded-full border-border bg-card/70 backdrop-blur"
              onClick={() => go({ name: "revision", slug })}
            >
              <Printer className="h-4 w-4" aria-hidden />
              Revision sheet
            </Button>
          </div>
          <span className={cn("mt-3 inline-block rounded-full px-2.5 py-0.5 text-[11px]", sourceStatusMeta.GCU_ALIGNED.className)}>
            GCU-Aligned sequence
          </span>
        </div>
      </motion.section>

      {/* modules */}
      {modules.length === 0 ? (
        <EmptyState
          icon={ListChecks}
          title="Lessons are being prepared."
          hint="This course's lessons haven't been published yet — check back soon 💗"
        />
      ) : (
        <div className="space-y-3">
          {modules.map((m, mi) => {
            const done = m.lessons.filter((l) => l.status === "COMPLETED").length;
            const pct = m.lessons.length ? Math.round((done / m.lessons.length) * 100) : 0;
            const open = openModule === m.id;
            return (
              <Collapsible key={m.id} open={open} onOpenChange={(v) => setOpenModule(v ? m.id : null)}>
                <Card className="overflow-hidden border-border/70">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center gap-3.5 px-5 py-4 text-left transition hover:bg-muted/40">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lav font-display text-sm font-bold text-secondary-foreground dark:bg-plum/30">
                        {String(mi + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-base font-semibold text-foreground">{m.title}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <MiniProgress value={pct} className="max-w-[140px]" />
                          <span className="text-[11px] text-muted-foreground">{done}/{m.lessons.length}</span>
                        </div>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} aria-hidden />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-1.5 border-t border-border/50 px-4 py-3.5">
                      {m.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => go({ name: "lesson", id: lesson.id })}
                          className="card-hover group flex w-full items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-3 text-left"
                        >
                          {lesson.status === "COMPLETED" ? (
                            <CircleCheck className="h-5 w-5 shrink-0 text-primary" aria-label="Completed" />
                          ) : (
                            <Circle className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary/50" aria-hidden />
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">{lesson.title}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                              <span className={cn("rounded-full border px-1.5 py-px", difficultyStyle[lesson.difficulty] ?? "")}>
                                {lesson.difficulty}
                              </span>
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden /> {lesson.durationMin}m</span>
                              {lesson.questionCount > 0 && (
                                <span className="flex items-center gap-1"><HelpCircle className="h-3 w-3" aria-hidden /> {lesson.questionCount} questions</span>
                              )}
                              {lesson.flashcardCount > 0 && (
                                <span className="flex items-center gap-1"><Layers className="h-3 w-3" aria-hidden /> {lesson.flashcardCount}</span>
                              )}
                            </div>
                          </div>
                          <Play className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                        </button>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      )}
    </div>
  );
}
