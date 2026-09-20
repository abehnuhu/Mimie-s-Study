"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { DynIcon } from "./dyn-icon";
import { ExamHistory } from "./exam-history";
import { Zap, Timer, Brain, Layers, GraduationCap, Play, History, PenLine, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AttemptSetupConfig, QuizConfig } from "@/lib/types";

interface ExamSetupData {
  topics: { topic: string; count: number }[];
  courses: { slug: string; title: string; year: number; semester: number }[];
  weakTopics: string[];
  questionCount: number;
  modes: string[];
}

const MODE_META: Record<string, { label: string; icon: typeof Zap; desc: string; defaultCount: number }> = {
  QUICK: { label: "Quick Test", icon: Zap, desc: "A fast 10-question warm-up", defaultCount: 10 },
  TIMED: { label: "Timed Test", icon: Timer, desc: "Beat the clock — 45s per question", defaultCount: 20 },
  WEAK: { label: "Weak Topics", icon: Brain, desc: "Questions from topics you miss most", defaultCount: 10 },
  MIXED: { label: "Mixed Revision", icon: Layers, desc: "Everything, shuffled across years", defaultCount: 20 },
  EXAM: { label: "Exam Simulation", icon: GraduationCap, desc: "Sit a full mock paper — flag, pause, review", defaultCount: 60 },
};

const COUNTS = [10, 20, 40, 60, 100];
const DIFFS = ["Any", "Easy", "Moderate", "Hard", "Clinical Reasoning"];

/** Exam pacing options — seconds allowed per question on the mock paper. */
const PACINGS: { label: string; desc: string; sec: number }[] = [
  { label: "Gentle", desc: "75s per question", sec: 75 },
  { label: "Standard", desc: "60s per question", sec: 60 },
  { label: "Real paper", desc: "45s per question", sec: 45 },
];

export function ExamSetupView({
  initialTopic,
  initialTab,
  initialRetry,
  initialPreset,
}: {
  initialTopic?: string;
  initialTab?: "test" | "history";
  initialRetry?: AttemptSetupConfig;
  /** Lightweight nudge (e.g. from the smart plan's mock-paper row) — preselects mode/size without the replay banner. */
  initialPreset?: { mode?: string; count?: number; secondsPerQuestion?: number };
}) {
  const { go } = useAppStore();
  const [data, setData] = useState<ExamSetupData | null>(null);
  const [tab, setTab] = useState<"test" | "history">(initialTab ?? "test");
  const [mode, setMode] = useState(initialRetry?.mode ?? initialPreset?.mode ?? "QUICK");
  const [year, setYear] = useState(String(initialRetry?.year ?? "all"));
  const [semester, setSemester] = useState(String(initialRetry?.semester ?? "all"));
  const [courseSlug, setCourseSlug] = useState(initialRetry?.courseSlug ?? "all");
  const [topic, setTopic] = useState(initialTopic ?? initialRetry?.topic ?? "all");
  const [difficulty, setDifficulty] = useState(initialRetry?.difficulty ?? "Any");
  const [count, setCount] = useState(initialRetry?.count ?? initialPreset?.count ?? 10);
  const [pacing, setPacing] = useState(
    initialRetry?.secondsPerQuestion ?? initialPreset?.secondsPerQuestion ?? 60
  );
  const [loading, setLoading] = useState(false);
  const [retry, setRetry] = useState<AttemptSetupConfig | null>(initialRetry ?? null);

  const presetTopic = Boolean(initialTopic) && initialTopic !== "all";

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/exam/generate", { cache: "no-store" });
        const json = await res.json();
        setData(json);
      } catch {
        toast("Couldn't load exam options 💗");
      }
    })();
  }, []);

  // swap in the mode's default size when the mode changes — but never on the
  // first run, so a replayed attempt keeps its original question count.
  const firstModeRun = useRef(true);
  useEffect(() => {
    if (firstModeRun.current) {
      firstModeRun.current = false;
      return;
    }
    setCount(MODE_META[mode]?.defaultCount ?? 10);
  }, [mode]);

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
      </div>
    );
  }

  async function start() {
    setLoading(true);
    try {
      const res = await fetch("/api/exam/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          count,
          difficulty: difficulty === "Any" ? undefined : difficulty,
          year: year === "all" ? undefined : Number(year),
          semester: semester === "all" ? undefined : Number(semester),
          courseSlug: courseSlug === "all" ? undefined : courseSlug,
          topic: topic === "all" ? undefined : topic,
          secondsPerQuestion: mode === "EXAM" ? pacing : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        toast(json.error ?? "Couldn't build that test 💗");
        return;
      }
      const config: QuizConfig = {
        questions: json.questions,
        mode: "EXAM",
        label: json.label,
        source: "exam",
        timed: json.timed,
        secondsAllowed: json.secondsAllowed,
        exam: mode === "EXAM",
        setupMode: mode as QuizConfig["setupMode"],
        setup: {
          mode,
          count,
          difficulty,
          year: year === "all" ? "all" : Number(year),
          semester: semester === "all" ? "all" : Number(semester),
          courseSlug,
          topic,
          secondsPerQuestion: mode === "EXAM" ? pacing : null,
        },
      };
      go({ name: "quiz", config });
    } catch {
      toast("We lost the connection for a moment 💗");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Exam Mode</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {presetTopic
            ? `Drilling “${initialTopic}” — pick a size and go 💗`
            : <>Build a test that fits this week — {data.questionCount} questions in the bank and growing.</>}
        </p>
      </div>

      {retry && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-blossom-soft/50 px-4 py-3 dark:bg-plum/25"
          role="status"
        >
          <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <div className="min-w-0 flex-1 text-sm">
            <p className="font-medium text-foreground">
              Replaying{retry.createdAt ? ` your ${new Date(retry.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}` : ""} test
              {retry.label ? <span className="text-muted-foreground"> — {retry.label}</span> : null}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Same settings, fresh questions from the bank. Tweak anything before you start.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRetry(null)}
            className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Dismiss and build a fresh test"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </motion.div>
      )}

      <Tabs value={tab} onValueChange={(v) => setTab(v as "test" | "history")}>
        <TabsList className="grid h-auto w-full max-w-xs grid-cols-2 rounded-2xl p-1">
          <TabsTrigger value="test" className="gap-1.5 rounded-xl py-1.5 text-sm">
            <PenLine className="h-4 w-4" aria-hidden /> Sit a test
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-1.5 rounded-xl py-1.5 text-sm">
            <History className="h-4 w-4" aria-hidden /> History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="test" className="mt-5 space-y-6 focus-visible:outline-none">
      {/* mode picker */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5" role="radiogroup" aria-label="Test mode">
        {Object.entries(MODE_META).map(([key, meta]) => (
          <button
            key={key}
            role="radio"
            aria-checked={mode === key}
            onClick={() => setMode(key)}
            className={cn(
              "card-hover group flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition",
              mode === key ? "border-primary bg-blossom-soft/60 dark:bg-plum/30" : "border-border/60 bg-card hover:border-primary/40"
            )}
          >
            <meta.icon
              className={cn(
                "h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none",
                mode === key ? "text-primary" : "text-muted-foreground"
              )}
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-foreground">{meta.label}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{meta.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* filters */}
      <Card className="border-border/70">
        <CardContent className="space-y-4 p-5">
          <p className="font-display text-base font-semibold text-foreground">Focus the questions</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1.5 block">
              <span className="text-xs font-medium text-muted-foreground">Year</span>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All years</SelectItem>
                  {[1, 2, 3, 4].map((y) => <SelectItem key={y} value={String(y)}>Year {y}</SelectItem>)}
                </SelectContent>
              </Select>
            </label>
            <label className="space-y-1.5 block">
              <span className="text-xs font-medium text-muted-foreground">Semester</span>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Both semesters</SelectItem>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                </SelectContent>
              </Select>
            </label>
            <label className="space-y-1.5 block">
              <span className="text-xs font-medium text-muted-foreground">Course</span>
              <Select value={courseSlug} onValueChange={setCourseSlug}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-64">
                  <SelectItem value="all">All courses</SelectItem>
                  {data.courses.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      Y{c.year}S{c.semester} · {c.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="space-y-1.5 block">
              <span className="text-xs font-medium text-muted-foreground">Topic</span>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-64">
                  <SelectItem value="all">All topics</SelectItem>
                  {data.topics.map((t) => (
                    <SelectItem key={t.topic} value={t.topic}>{t.topic} ({t.count})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground">Number of questions</span>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Question count">
              {COUNTS.map((c) => (
                <button
                  key={c}
                  role="radio"
                  aria-checked={count === c}
                  onClick={() => setCount(c)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                    count === c ? "border-primary bg-primary text-primary-foreground" : "border-border/70 text-muted-foreground hover:border-primary/50"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            {topic !== "all" && (() => {
              const t = data.topics.find((x) => x.topic === topic);
              if (!t) return null;
              return (
                <p className="text-[11px] text-muted-foreground">
                  “{topic}” has {t.count} question{t.count === 1 ? "" : "s"} — you&apos;ll get up to {Math.min(count, t.count)}.
                </p>
              );
            })()}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground">Difficulty</span>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Difficulty">
              {DIFFS.map((d) => (
                <button
                  key={d}
                  role="radio"
                  aria-checked={difficulty === d}
                  onClick={() => setDifficulty(d)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                    difficulty === d ? "border-primary bg-primary text-primary-foreground" : "border-border/70 text-muted-foreground hover:border-primary/50"
                  )}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {mode === "EXAM" && (
            <div className="space-y-2.5 rounded-xl border border-primary/25 bg-blossom-soft/40 p-4 dark:bg-plum/20">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Paper pacing</span>
                <span className="text-[11px] text-muted-foreground">
                  {Math.round((count * pacing) / 60)} min paper · NMC-style pass mark 50%
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Pacing">
                {PACINGS.map((p) => (
                  <button
                    key={p.sec}
                    role="radio"
                    aria-checked={pacing === p.sec}
                    onClick={() => setPacing(p.sec)}
                    className={cn(
                      "rounded-xl border-2 px-3 py-2 text-center transition",
                      pacing === p.sec
                        ? "border-primary bg-card shadow-sm shadow-primary/10"
                        : "border-border/60 bg-card/60 hover:border-primary/40"
                    )}
                  >
                    <p className="text-sm font-semibold text-foreground">{p.label}</p>
                    <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                  </button>
                ))}
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                You&apos;ll get an answer sheet to move around the paper, a flag for questions to revisit,
                and one pause for a breather — just like a real past paper, but kinder.
              </p>
            </div>
          )}

          {data.weakTopics.length > 0 && mode !== "WEAK" && (
            <button
              onClick={() => setMode("WEAK")}
              className="w-full rounded-xl border border-gold/40 bg-gold/10 px-4 py-2.5 text-left text-xs text-foreground/80 transition hover:bg-gold/20"
            >
              <span className="font-semibold">💡 Tip:</span> your review queue suggests{" "}
              <span className="font-semibold">{data.weakTopics.slice(0, 3).join(", ")}</span> — tap to switch to Weak Topics mode.
            </button>
          )}
        </CardContent>
      </Card>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
        <Button
          size="lg"
          disabled={loading}
          onClick={start}
          className="rounded-full bg-gradient-to-r from-primary to-plum px-10 text-primary-foreground shadow-xl shadow-primary/25"
        >
          <Play className="h-5 w-5 fill-current" aria-hidden />
          {loading ? "Building your test…" : `Start ${MODE_META[mode]?.label ?? "Test"} · ${count} questions`}
        </Button>
      </motion.div>
        </TabsContent>

        <TabsContent value="history" className="mt-5 focus-visible:outline-none">
          <motion.div
            key="history-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ExamHistory />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
