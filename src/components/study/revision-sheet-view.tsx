"use client";

import { useCallback, useEffect, useState } from "react";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DynIcon, difficultyStyle } from "./dyn-icon";
import { ErrorCard } from "./shared-cards";
import {
  ArrowLeft, CircleCheck, Clock, Heart, HelpCircle, Layers, Lightbulb, Printer,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetFlashcard {
  topic: string;
  front: string;
  back: string;
}

interface SheetLesson {
  id: string;
  title: string;
  difficulty: string;
  durationMin: number;
  sourceStatus: string;
  completed: boolean;
  objectives: string[];
  tags: string[];
  pearls: string[];
  memoryTricks: string[];
  summary: string | null;
  flashcards: SheetFlashcard[];
}

interface RevisionSheetData {
  course: {
    title: string;
    slug: string;
    description: string | null;
    icon: string | null;
    year: number;
    semester: number;
  };
  stats: {
    lessonCount: number;
    completed: number;
    minutes: number;
    questionCount: number;
    flashcardCount: number;
  };
  generatedAt: string;
  modules: { title: string; lessons: SheetLesson[] }[];
}

/** split a section body into paragraphs on blank lines */
function paras(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

/** split a summary body into single lines, stripping leading bullet markers */
function summaryLines(body: string): string[] {
  return body
    .split("\n")
    .map((l) => l.trim().replace(/^[-•*]\s+/, ""))
    .filter(Boolean);
}

export function RevisionSheetView({ slug }: { slug: string }) {
  const { go } = useAppStore();
  const [data, setData] = useState<RevisionSheetData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/courses/${slug}/revision-sheet`, { cache: "no-store" });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Couldn't build the revision sheet 💗");
        return;
      }
      setData(json as RevisionSheetData);
    } catch {
      setError("We lost the connection for a moment 💗");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void load();
  }, [load]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl">
        <ErrorCard message={error} onRetry={() => void load()} />
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="mx-auto max-w-3xl space-y-4" aria-busy="true">
        <Skeleton className="h-40 rounded-3xl" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-40 rounded-full" />
          <Skeleton className="h-9 w-36 rounded-full" />
        </div>
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-44 rounded-2xl" />
        ))}
      </div>
    );
  }

  const { course, stats, modules } = data;
  const generated = new Date(data.generatedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="print-sheet mx-auto max-w-3xl space-y-6 print:max-w-none print:space-y-4">
      {/* ── document header (print-visible) ── */}
      <section className="gradient-hero relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 sm:p-8 print:rounded-none print:border-0 print:bg-white print:p-0">
        <div className="dot-grid absolute inset-0 opacity-30 print:hidden" aria-hidden />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary print:text-black">
            Revision sheet
          </p>
          <div className="mt-2 flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground sm:text-3xl print:text-black">
                {course.title}
              </h1>
              {course.description && (
                <p className="mt-1.5 max-w-xl text-sm text-muted-foreground print:text-black">
                  {course.description}
                </p>
              )}
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-primary backdrop-blur sm:flex print:border print:bg-white">
              <DynIcon name={course.icon} className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground print:text-black">
            <span className="rounded-full bg-lav px-2.5 py-0.5 font-medium text-secondary-foreground print:bg-white print:border">
              Year {course.year}
            </span>
            <span className="rounded-full bg-lav px-2.5 py-0.5 font-medium text-secondary-foreground print:bg-white print:border">
              Semester {course.semester}
            </span>
            <span aria-hidden>·</span>
            <span>Generated {generated}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground print:text-black">
            <span className="flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-primary" aria-hidden />
              {stats.completed}/{stats.lessonCount} lessons completed
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {stats.minutes} min of lesson time
            </span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
              {stats.questionCount} questions
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" aria-hidden />
              {stats.flashcardCount} flashcards
            </span>
          </div>
        </div>
      </section>

      {/* ── action row (screen only) ── */}
      <div className="flex flex-wrap items-center gap-3 print:hidden">
        <Button
          onClick={() => window.print()}
          className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
        >
          <Printer className="h-4 w-4" aria-hidden />
          Print / Save PDF
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-border bg-card/70 backdrop-blur"
          onClick={() => go({ name: "course", slug })}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to course
        </Button>
        <p className="hidden text-xs text-muted-foreground sm:block">
          Tip: choose “Save as PDF” in the print dialog 💗
        </p>
      </div>

      {/* ── modules & lessons ── */}
      {modules.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border bg-card/60 px-6 py-10 text-center text-sm text-muted-foreground">
          No published lessons in this course yet — nothing to revise 💗
        </p>
      ) : (
        modules.map((m, mi) => (
          <section key={`${mi}-${m.title}`} className="space-y-3 print:space-y-2">
            <div className="module-header flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border pb-2">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary print:text-black">
                Module {String(mi + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-lg font-semibold text-foreground print:text-black">
                {m.title}
              </h2>
              <span className="ml-auto text-[11px] text-muted-foreground print:text-black">
                {m.lessons.length} lesson{m.lessons.length === 1 ? "" : "s"}
              </span>
            </div>

            {m.lessons.map((lesson) => (
              <LessonBlock key={lesson.id} lesson={lesson} />
            ))}
          </section>
        ))
      )}

      {/* ── footer note (print-visible) ── */}
      <p className="border-t border-border pt-3 pb-2 text-center text-[11px] text-muted-foreground print:text-black">
        Mimie&apos;s Study · Revision sheet · Educational use only — always follow current protocols
      </p>
    </div>
  );
}

function LessonBlock({ lesson }: { lesson: SheetLesson }) {
  const hasContent =
    lesson.pearls.length > 0 ||
    lesson.memoryTricks.length > 0 ||
    !!lesson.summary ||
    lesson.flashcards.length > 0;

  return (
    <article className="print-break card-hover rounded-2xl border border-border/70 bg-card p-5 print:rounded-none print:border-t print:border-b-0 print:border-l-0 print:border-r-0 print:bg-white print:p-0 print:pt-3">
      {/* lesson header */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <h3 className="font-display text-base font-semibold text-foreground print:text-black">
          {lesson.title}
        </h3>
        {lesson.completed && (
          <span className="flex items-center gap-1 text-[11px] font-medium text-primary print:text-black">
            <CircleCheck className="h-3.5 w-3.5" aria-hidden />
            Completed
          </span>
        )}
        <span
          className={cn(
            "rounded-full border px-1.5 py-px text-[11px]",
            difficultyStyle[lesson.difficulty] ?? ""
          )}
        >
          {lesson.difficulty}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-muted-foreground print:text-black">
          <Clock className="h-3 w-3" aria-hidden />
          {lesson.durationMin} min
        </span>
      </div>

      {lesson.tags.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {lesson.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground print:bg-white print:border"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 space-y-3 print:mt-2 print:space-y-2">
        {/* objectives */}
        {lesson.objectives.length > 0 && (
          <div>
            <SectionLabel>Objectives</SectionLabel>
            <ul className="mt-1 space-y-0.5">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90 print:text-black">
                  <span className="shrink-0 text-primary print:text-black" aria-hidden>
                    •
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* clinical pearls — rose tint */}
        {lesson.pearls.length > 0 && (
          <div className="print-rose rounded-xl border border-blossom/40 bg-blossom-soft/70 p-3.5 dark:bg-plum/20 print:bg-white">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary print:text-black">
              <Heart className="h-3.5 w-3.5" aria-hidden />
              Clinical pearls
            </p>
            {lesson.pearls.flatMap((p, pi) =>
              paras(p).map((para, i) => (
                <p key={`${pi}-${i}`} className="mt-1.5 text-sm leading-relaxed text-foreground/90 print:text-black">
                  {para}
                </p>
              ))
            )}
          </div>
        )}

        {/* memory tricks — lavender tint */}
        {lesson.memoryTricks.length > 0 && (
          <div className="print-lav rounded-xl border border-lav p-3.5 dark:border-plum/40 dark:bg-plum/20 print:bg-white">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground print:text-black">
              <Lightbulb className="h-3.5 w-3.5" aria-hidden />
              Memory tricks
            </p>
            {lesson.memoryTricks.flatMap((t, ti) =>
              paras(t).map((para, i) => (
                <p key={`${ti}-${i}`} className="mt-1.5 text-sm leading-relaxed text-foreground/90 print:text-black">
                  {para}
                </p>
              ))
            )}
          </div>
        )}

        {/* summary — plain paragraphs */}
        {lesson.summary && (
          <div>
            <SectionLabel>Summary</SectionLabel>
            <div className="mt-1 space-y-1">
              {summaryLines(lesson.summary).map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/90 print:text-black">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* flashcards — Q → A table */}
        {lesson.flashcards.length > 0 && (
          <div>
            <SectionLabel>Flashcards</SectionLabel>
            <table className="mt-1.5 w-full table-fixed border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-1/2 pb-1 pr-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
                    Question
                  </th>
                  <th className="w-1/2 pb-1 pl-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
                    Answer
                  </th>
                </tr>
              </thead>
              <tbody>
                {lesson.flashcards.map((f, i) => (
                  <tr key={i} className="print-break border-b border-border/50 align-top">
                    <td className="py-1.5 pr-3 align-top">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground print:text-black">
                        {f.topic}
                      </p>
                      <p className="mt-0.5 leading-relaxed text-foreground/90 print:text-black">{f.front}</p>
                    </td>
                    <td className="py-1.5 pl-3 align-top font-semibold leading-relaxed text-foreground print:text-black">
                      {f.back}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* nothing prepared yet */}
        {!hasContent && (
          <p className="text-sm italic text-muted-foreground print:text-black">
            Full lesson notes coming soon 💗
          </p>
        )}
      </div>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
      {children}
    </p>
  );
}
