"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LessonSectionRenderer, Flashcard } from "./section-renderer";
import { LessonNarrator } from "./lesson-narrator";
import { EmptyState, ErrorCard } from "./shared-cards";
import { difficultyStyle, sourceStatusMeta } from "./dyn-icon";
import {
  Clock, Sparkles, CheckCircle2, Bookmark, BookmarkCheck, NotebookPen, ChevronLeft, ChevronRight,
  BookOpen, ExternalLink, ListChecks, Save, Target, Award, Headphones, ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { LessonDetail, QuizConfig } from "@/lib/types";

export function useStudyHeartbeat(active: boolean, lessonId?: string | null) {
  useEffect(() => {
    if (!active) return;
    let accumulated = 0;
    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        accumulated += 30;
      }
    };
    const send = () => {
      if (accumulated >= 25) {
        fetch("/api/study/heartbeat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ seconds: accumulated, lessonId }),
        }).catch(() => {});
        accumulated = 0;
      }
    };
    const tickTimer = setInterval(tick, 30000);
    const sendTimer = setInterval(send, 35000);
    return () => {
      send();
      clearInterval(tickTimer);
      clearInterval(sendTimer);
    };
  }, [active, lessonId]);
}

export function LessonView({ id, autoplay }: { id: string; autoplay?: boolean }) {
  const { go, triggerConfetti, refreshBootstrap, user, setAssistantHint } = useAppStore();
  const [data, setData] = useState<LessonDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [noteDirty, setNoteDirty] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useStudyHeartbeat(!!data, id);

  // tell Ask-Mimie what she's studying right now
  useEffect(() => {
    setAssistantHint(
      data ? `Lesson “${data.lesson.title}” · ${data.lesson.course.title}` : null
    );
    return () => setAssistantHint(null);
  }, [data, setAssistantHint]);

  // reading progress (scroll-through)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  useEffect(() => {
    setData(null);
    setError(null);
    setCompleted(false);
    (async () => {
      try {
        const res = await fetch(`/api/lessons/${id}`, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Couldn't open this lesson 💗");
          return;
        }
        setData(json);
        setNote(json.note?.body ?? "");
        setBookmarked(json.bookmarked);
        setCompleted(json.progress?.status === "COMPLETED");
      } catch {
        setError("We lost the connection for a moment 💗");
      }
    })();
  }, [id]);

  if (error) return <div className="mx-auto max-w-3xl"><ErrorCard message={error} onRetry={() => window.location.reload()} /></div>;

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl space-y-4" aria-busy="true">
        <Skeleton className="h-40 rounded-3xl" />
        <Skeleton className="h-6 w-2/3 rounded-lg" />
        {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
      </div>
    );
  }

  const { lesson, sections, sources, flashcards, questions, neighbours } = data;

  async function completeLesson() {
    if (completing) return;
    setCompleting(true);
    try {
      const res = await fetch(`/api/lessons/${id}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timeSpentSec: 0 }),
      });
      const json = await res.json();
      if (!res.ok) {
        toast(json.error ?? "Couldn't save completion 💗");
        return;
      }
      if (!json.alreadyCompleted) {
        setCompleted(true);
        triggerConfetti();
        toast(`Lesson complete · +${json.xpGained} XP 💗`, {
          description: json.leveledUp ? `Level ${json.newLevel}! Look at you growing 🌸` : "Another concept understood.",
        });
        for (const badge of json.newBadges ?? []) {
          toast(`🏅 Badge unlocked: ${badge.title}`, { description: badge.description });
        }
        refreshBootstrap();
      } else {
        setCompleted(true);
        toast("Already completed — nice refresher 💗");
      }
    } catch {
      toast("We lost the connection — your progress is safe 💗");
    } finally {
      setCompleting(false);
    }
  }

  async function saveNote() {
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId: id, body: note }),
      });
      if (res.ok) {
        setNoteDirty(false);
        toast("Note saved to your corner 💗");
      }
    } catch {
      toast("Couldn't save the note just now 💗");
    }
  }

  async function toggleBookmark() {
    try {
      if (!bookmarked) {
        await fetch("/api/bookmarks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ itemType: "lesson", itemId: id, label: lesson.title, snippet: lesson.description }),
        });
        setBookmarked(true);
        toast("Saved to My Saved Things 💗");
      } else {
        await fetch(`/api/bookmarks?itemType=lesson&itemId=${id}`, { method: "DELETE" });
        setBookmarked(false);
      }
    } catch {
      toast("Couldn't update bookmarks 💗");
    }
  }

  function startQuiz() {
    const config: QuizConfig = {
      questions,
      mode: "LESSON",
      label: lesson.title,
      lessonId: id,
      source: "lesson",
      timed: false,
    };
    go({ name: "quiz", config });
  }

  return (
    <article className="mx-auto max-w-3xl">
      {/* reading progress */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent lg:left-60"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-primary via-plum to-chart-4 transition-[width] duration-150"
          style={{ width: `${scrollPct}%` }}
        />
      </div>
      {/* ── hero ── */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-hero relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8"
      >
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden />
        <div className="relative">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <button className="hover:text-primary" onClick={() => go({ name: "course", slug: lesson.course.slug })}>
              {lesson.course.title}
            </button>
            <span aria-hidden>›</span>
            <span>{lesson.moduleTitle}</span>
            <span aria-hidden>›</span>
            <span className={cn("rounded-full px-2 py-0.5", sourceStatusMeta[lesson.sourceStatus]?.className ?? sourceStatusMeta.PROPOSED.className)}>
              {sourceStatusMeta[lesson.sourceStatus]?.label ?? "Proposed"}
            </span>
          </nav>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {lesson.title}
          </h1>
          {lesson.description && (
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">{lesson.description}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs">
            <span className={cn("rounded-full border px-2.5 py-1 font-medium", difficultyStyle[lesson.difficulty] ?? "")}>
              {lesson.difficulty}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-card/70 px-2.5 py-1 text-muted-foreground backdrop-blur">
              <Clock className="h-3.5 w-3.5" aria-hidden /> {lesson.durationMin} min
            </span>
            {completed && (
              <span className="flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 font-medium text-accent-foreground">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Completed
              </span>
            )}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("mimie:narration-toggle"))}
              className="flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-muted-foreground backdrop-blur transition hover:text-primary"
              aria-label="Listen to this lesson (audio narration)"
            >
              <Headphones className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">Listen</span>
            </button>
            <button
              onClick={toggleBookmark}
              className="ml-auto flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-muted-foreground backdrop-blur transition hover:text-primary"
              aria-pressed={bookmarked}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this lesson"}
            >
              {bookmarked ? <BookmarkCheck className="h-4 w-4 text-primary" aria-hidden /> : <Bookmark className="h-4 w-4" aria-hidden />}
              <span className="hidden sm:inline">{bookmarked ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── objectives ── */}
      {lesson.objectives.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-5 rounded-2xl border border-border/70 bg-card p-5"
          aria-label="Learning objectives"
        >
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
            <Target className="h-4 w-4 text-primary" aria-hidden /> By the end of this lesson…
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {lesson.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* ── content sections ── */}
      <div ref={sectionsRef} className="mt-6 space-y-6">
        {sections.length === 0 ? (
          <EmptyState
            icon={BookOpen}
            title="This lesson is still being written."
            hint="The admin is preparing the full content. Meanwhile, try the quiz or explore another lesson 💗"
          />
        ) : (
          sections.map((s, i) => (
            <motion.div
              key={s.id}
              data-narrator-section={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.2) }}
              className="narratable rounded-2xl transition-shadow"
            >
              <LessonSectionRenderer type={s.type} title={s.title} body={s.body} />
            </motion.div>
          ))
        )}
      </div>

      {/* ── flashcards ── */}
      {flashcards.length > 0 && (
        <section className="mt-8" aria-label="Flashcards">
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
            <Award className="h-4 w-4 text-primary" aria-hidden /> Flashcards
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {flashcards.map((f) => (
              <Flashcard key={f.id} front={f.front} back={f.back} topic={f.topic} />
            ))}
          </div>
        </section>
      )}

      {/* ── note ── */}
      <section className="mt-8" aria-label="Your private note">
        <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
          <NotebookPen className="h-4 w-4 text-primary" aria-hidden /> Your private note
        </h2>
        <Card className="border-border/70">
          <CardContent className="p-4">
            <Textarea
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
                setNoteDirty(true);
              }}
              placeholder="Remember: this is different from mechanism…"
              className="min-h-[90px] resize-y border-none bg-transparent p-1 text-sm focus-visible:ring-0"
              aria-label="Private note for this lesson"
            />
            <div className="mt-2 flex justify-end">
              <Button size="sm" variant="outline" className="rounded-full" onClick={saveNote} disabled={!noteDirty}>
                <Save className="h-3.5 w-3.5" aria-hidden /> Save note
              </Button>
            </div>
          </CardContent>
        </Card>
        <p className="mt-1.5 text-[11px] text-muted-foreground">Private to you — the admin can&apos;t see this unless you ask.</p>
      </section>

      {/* ── sources ── */}
      {sources.length > 0 && (
        <section className="mt-8" aria-label="Sources and further reading">
          <h2 className="mb-3 font-display text-base font-semibold text-muted-foreground">Sources &amp; Further Reading</h2>
          <div className="space-y-2">
            {sources.map((s) => (
              <div key={s.id} className="rounded-xl border border-border/50 bg-muted/30 px-4 py-2.5 text-xs text-muted-foreground">
                <p className="font-medium text-foreground/80">{s.organization}</p>
                <p className="mt-0.5">
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                      {s.title} <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  ) : (
                    s.title
                  )}
                  {s.year && <span> · {s.year}</span>}
                </p>
                {s.note && <p className="mt-0.5 italic opacity-80">{s.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── quiz + complete ── */}
      <section className="mt-10 rounded-3xl border border-primary/25 bg-gradient-to-br from-blossom-soft/70 to-lav/50 p-6 dark:from-plum/30 dark:to-plum/10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-xl font-semibold text-foreground">
            {completed ? "Reinforce what you learned" : "Ready to lock this in?"}
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            {questions.length > 0
              ? "Take the lesson quiz — five minutes that turn reading into remembering."
              : "Finish here, or continue to the next lesson."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {questions.length > 0 && (
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25" onClick={startQuiz}>
                <ListChecks className="h-4 w-4" aria-hidden /> Take the quiz ({questions.length})
              </Button>
            )}
            <Button
              size="lg"
              variant={questions.length > 0 ? "outline" : "default"}
              className="rounded-full border-primary/40"
              onClick={completeLesson}
              disabled={completing}
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              {completed ? "Refresh completion" : "Mark complete · +30 XP"}
            </Button>
          </div>
        </div>
      </section>

      {/* ── prev / next ── */}
      <nav className="mt-6 flex items-center justify-between gap-3" aria-label="Lesson navigation">
        {neighbours.prev ? (
          <Button variant="ghost" className="max-w-[45%] gap-2 rounded-xl text-muted-foreground" onClick={() => go({ name: "lesson", id: neighbours.prev!.id })}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate text-xs">{neighbours.prev.title}</span>
          </Button>
        ) : <span />}
        {neighbours.next ? (
          <Button variant="outline" className="max-w-[45%] gap-2 rounded-xl" onClick={() => go({ name: "lesson", id: neighbours.next!.id })}>
            <span className="truncate text-xs">{neighbours.next.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </Button>
        ) : (
          <Button variant="outline" className="rounded-xl" onClick={() => go({ name: "course", slug: lesson.course.slug })}>
            <span className="text-xs">Back to course</span>
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
        )}
      </nav>

      {/* ── audio narration ── */}
      {/* key: a fresh lesson means a fresh narrator — clean state + autoStart honoured */}
      <LessonNarrator
        key={id}
        lesson={{ title: lesson.title, description: lesson.description }}
        sections={sections}
        autoStart={autoplay}
        next={neighbours.next}
        onGoNext={(nextId) => go({ name: "lesson", id: nextId, autoplay: true })}
      />

      {/* ── back to top (appears after deep scroll) ── */}
      {scrollPct > 45 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/90 text-muted-foreground shadow-lg backdrop-blur transition-all hover:border-primary/50 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:bottom-8 sm:left-8 print:hidden"
          aria-label="Back to top of lesson"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </motion.button>
      )}
    </article>
  );
}
