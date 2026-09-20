"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line,
  CartesianGrid, RadialBarChart, RadialBar, PolarAngleAxis,
} from "recharts";
import { StatCard, EmptyState } from "./shared-cards";
import { MiniProgress } from "./progress-widgets";
import { ReportCardButton } from "./report-card";
import { Clock, Flame, Brain, LineChart as LineIcon, CalendarDays, Award, BookOpen, Zap, Download, Target, Headphones } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { CourseSummary } from "@/lib/types";

interface ProgressData {
  user: { name: string; nickname: string | null; xp: number; level: number; streak: number; longestStreak: number };
  weekly: { date: string; label: string; minutes: number; xp: number; lessons: number }[];
  accuracyTrend: { date: string; label: string; dateLabel?: string; percentage: number }[];
  heatmap: { date: string; minutes: number; lessons: number; xp: number }[];
  weakTopics: { topic: string; total: number; correct: number; accuracy: number }[];
  strongTopics: { topic: string; total: number; correct: number; accuracy: number }[];
  currentSemesterCourses: CourseSummary[];
  totals: {
    lessonsCompleted: number; minutes: number; sessions: number; quizzes: number;
    avgScore: number | null; highestScore: number; masteredTopics: number;
  };
  recentLessons: { id: string; title: string; course: string; courseSlug: string; completedAt: string | null }[];
}

interface ListeningStats {
  total: number;
  week: number;
}

function readListeningStats(): ListeningStats {
  try {
    const raw = window.localStorage.getItem("mimie:listening");
    if (!raw) return { total: 0, week: 0 };
    const parsed = JSON.parse(raw);
    if (typeof parsed?.total !== "number" || typeof parsed?.days !== "object" || parsed.days === null) {
      return { total: 0, week: 0 };
    }
    // sum the last 7 days (including today)
    const cutoff = new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10);
    let week = 0;
    for (const [day, sec] of Object.entries(parsed.days as Record<string, unknown>)) {
      if (day >= cutoff && typeof sec === "number") week += sec;
    }
    return { total: parsed.total, week };
  } catch {
    return { total: 0, week: 0 };
  }
}

export function ProgressView() {
  const { user, go } = useAppStore();
  const [data, setData] = useState<ProgressData | null>(null);
  const [exporting, setExporting] = useState(false);
  const [listening, setListening] = useState<ListeningStats>({ total: 0, week: 0 });

  useEffect(() => {
    setListening(readListeningStats());
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/progress", { cache: "no-store" });
        const json = await res.json();
        if (res.ok) setData(json);
      } catch {
        toast("Couldn't load your progress 💗");
      }
    })();
  }, []);

  async function exportCsv() {
    if (exporting) return;
    setExporting(true);
    try {
      const res = await fetch("/api/progress/export", { cache: "no-store" });
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mimies-quiz-history.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast("Quiz history exported 💗", { description: "Open it in Excel or Google Sheets to track your trend." });
    } catch {
      toast("Couldn't build the export — try again 💗");
    } finally {
      setExporting(false);
    }
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-4xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-56 rounded-xl" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-20 rounded-xl" />)}</div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  const t = data.totals;
  const hasActivity = data.weekly.some((d) => d.minutes > 0) || t.lessonsCompleted > 0;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-foreground">Your Progress</h1>
          <p className="mt-1 text-sm text-muted-foreground">Look how far you&apos;ve come, {user?.nickname || user?.name}.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ReportCardButton />
          {t.quizzes > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={exportCsv}
              disabled={exporting}
            >
              {exporting ? <Zap className="h-4 w-4 animate-pulse" aria-hidden /> : <Download className="h-4 w-4" aria-hidden />}
              {exporting ? "Building…" : "Export quiz history"}
            </Button>
          )}
        </div>
      </div>

      {/* totals */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={BookOpen} value={t.lessonsCompleted} label="Lessons completed" accent="blossom" />
        <StatCard icon={Clock} value={`${Math.round(t.minutes / 60)}h ${t.minutes % 60}m`} label="Time studied" accent="lav" />
        <StatCard icon={Flame} value={`${data.user.streak} days`} label="Current streak" accent="gold" />
        <StatCard icon={Brain} value={t.masteredTopics} label="Topics mastered" accent="sage" />
      </div>

      {/* listening strip — device-local narration minutes */}
      {(() => {
        const ls = listening.total;
        const lh = Math.floor(ls / 3600);
        const lm = Math.floor((ls % 3600) / 60);
        const listeningLabel = lh > 0 ? `${lh}h ${lm}m` : lm > 0 ? `${lm}m ${ls % 60}s` : `${ls}s`;
        return (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-2xl border border-primary/20 bg-gradient-to-r from-blossom-soft/50 to-lav/40 px-4 py-3 dark:from-plum/20 dark:to-plum/10">
            <p className="flex items-center gap-2 text-sm text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-primary shadow-sm" aria-hidden>
                <Headphones className="h-4 w-4" />
              </span>
              <span className="font-semibold tabular-nums">{listeningLabel}</span>
              <span className="text-muted-foreground">of lessons listened on this device</span>
            </p>
            <p className="ml-auto text-xs tabular-nums text-muted-foreground">
              {listening.week > 0
                ? `${Math.max(1, Math.round(listening.week / 60))} min listened this week 🎧`
                : "Press “Listen” on any lesson to study with your ears 🎧"}
            </p>
          </div>
        );
      })()}

      {!hasActivity ? (
        <EmptyState
          icon={LineIcon}
          title="Your journey starts with one."
          hint="Complete your first lesson and this page will bloom with charts."
          action={
            <button
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => go({ name: "curriculum" })}
            >
              Start learning
            </button>
          }
        />
      ) : (
        <>
          <div className="grid gap-5 lg:grid-cols-2">
            {/* weekly study activity */}
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <Zap className="h-4 w-4 text-primary" aria-hidden /> Weekly study activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.weekly} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                      <XAxis dataKey="label" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                      <Tooltip
                        cursor={{ fill: "var(--muted)" }}
                        contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }}
                        formatter={(value: number) => [`${value} min`, "Studied"]}
                      />
                      <Bar dataKey="minutes" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={36} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* quiz accuracy */}
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <LineIcon className="h-4 w-4 text-primary" aria-hidden /> Quiz accuracy
                  {t.avgScore !== null && <span className="ml-auto text-xs font-normal text-muted-foreground">avg {t.avgScore}%</span>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  {data.accuracyTrend.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data.accuracyTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }}
                          formatter={(value: number, _name: string, item: { payload?: { dateLabel?: string } }) => [
                            `${value}%`,
                            item?.payload?.dateLabel ? `Score · ${item.payload.dateLabel}` : "Score",
                          ]}
                        />
                        <Line type="monotone" dataKey="percentage" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--primary)" }} activeDot={{ r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      Take your first quiz to start this chart 💗
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* streak calendar heatmap */}
          <Card className="border-border/70">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-display text-lg">
                <CalendarDays className="h-4 w-4 text-primary" aria-hidden /> Study streak calendar
                <span className="ml-auto text-xs font-normal text-muted-foreground">
                  best {data.user.longestStreak} days
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Heatmap days={data.heatmap} />
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
                <span>less</span>
                {[0, 10, 25, 45].map((m) => (
                  <span key={m} className={`h-3 w-3 rounded-[4px] ${heatClass(m)}`} aria-hidden />
                ))}
                <span>more</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* course mastery (current semester) */}
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <Award className="h-4 w-4 text-primary" aria-hidden /> Course mastery · current semester
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3.5">
                {data.currentSemesterCourses.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No courses in this semester yet.</p>
                ) : (
                  data.currentSemesterCourses.map((c) => {
                    const pct = c.lessonCount ? Math.round((c.completedCount / c.lessonCount) * 100) : 0;
                    return (
                      <div key={c.id}>
                        <div className="mb-1 flex items-baseline justify-between">
                          <p className="truncate text-sm font-medium text-foreground">{c.title}</p>
                          <span className="text-xs text-muted-foreground">{pct}%</span>
                        </div>
                        <MiniProgress value={pct} />
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>

            {/* weak topics radar-ish */}
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <Brain className="h-4 w-4 text-primary" aria-hidden /> Weak topic radar
                </CardTitle>
              </CardHeader>
              <CardContent>
                {data.weakTopics.length === 0 ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No weak topics yet — keep quizzing so the radar can find them 💗
                  </p>
                ) : (
                  <div className="flex h-56 items-center gap-4">
                    <div className="h-full flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          data={data.weakTopics.map((t) => ({ name: t.topic, value: t.accuracy, fill: "var(--primary)" }))}
                          innerRadius="30%"
                          outerRadius="100%"
                          startAngle={180}
                          endAngle={-180}
                        >
                          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                          <RadialBar dataKey="value" cornerRadius={8} background={{ fill: "var(--muted)" }} />
                          <Tooltip
                            contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }}
                            formatter={(value: number, name: string) => [`${value}% accuracy`, name]}
                          />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                    <ul className="w-44 shrink-0 space-y-1.5">
                      {data.weakTopics.slice(0, 5).map((t) => (
                        <li key={t.topic}>
                          <button
                            onClick={() => go({ name: "exam-setup", topic: t.topic })}
                            className="group flex w-full items-center justify-between gap-2 rounded-lg px-1.5 py-0.5 text-left text-xs transition hover:bg-blossom-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            aria-label={`Practice questions on ${t.topic} (${t.accuracy}% accuracy)`}
                          >
                            <span className="truncate text-foreground/80 group-hover:text-primary">{t.topic}</span>
                            <span className="flex shrink-0 items-center gap-1 text-muted-foreground">
                              {t.accuracy}%
                              <Target className="h-3 w-3 opacity-0 transition group-hover:opacity-70" aria-hidden />
                            </span>
                          </button>
                        </li>
                      ))}
                      <li className="px-1.5 pt-0.5 text-[10px] italic text-muted-foreground/70">tap a topic to drill it</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* recent lessons */}
          {data.recentLessons.length > 0 && (
            <Card className="border-border/70">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg">Recently completed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5">
                {data.recentLessons.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go({ name: "lesson", id: l.id })}
                    className="flex w-full items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-2.5 text-left transition hover:border-primary/40"
                  >
                    <BookOpen className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{l.title}</p>
                      <p className="text-[11px] text-muted-foreground">{l.course}</p>
                    </div>
                    {l.completedAt && (
                      <span className="shrink-0 text-[11px] text-muted-foreground">
                        {new Date(l.completedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                      </span>
                    )}
                  </button>
                ))}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

function heatClass(minutes: number): string {
  if (minutes === 0) return "bg-muted";
  if (minutes < 10) return "bg-primary/25";
  if (minutes < 20) return "bg-primary/45";
  if (minutes < 40) return "bg-primary/70";
  return "bg-primary";
}

function Heatmap({ days }: { days: { date: string; minutes: number }[] }) {
  // build 12 weeks grid (weeks as columns, 7 rows)
  const byDate = new Map(days.map((d) => [d.date, d.minutes]));
  const today = new Date();
  const cells: { date: string; minutes: number; future: boolean }[][] = [];
  const start = new Date(today.getTime() - 11 * 7 * 86400000);
  // align start to Sunday
  start.setDate(start.getDate() - start.getDay());
  for (let w = 0; w < 12; w++) {
    const col: { date: string; minutes: number; future: boolean }[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start.getTime() + (w * 7 + d) * 86400000);
      const key = date.toISOString().slice(0, 10);
      col.push({ date: key, minutes: byDate.get(key) ?? 0, future: date > today });
    }
    cells.push(col);
  }
  const monthLabel = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  return (
    <div className="space-y-1.5" role="img" aria-label={`Study activity heatmap, ${monthLabel}`}>
      <p className="text-xs text-muted-foreground">{monthLabel}</p>
      <div className="flex gap-1.5">
        <div className="mr-1 flex flex-col justify-between py-px text-[9px] text-muted-foreground">
          {["Mon", "", "Wed", "", "Fri", "", "Sun"].map((d, i) => <span key={i} className="h-3 leading-3">{d}</span>)}
        </div>
        <div className="flex flex-1 gap-1.5 overflow-x-auto pb-1">
          {cells.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1.5">
              {week.map((cell) => (
                <span
                  key={cell.date}
                  title={`${cell.date}: ${cell.minutes} min`}
                  className={`h-3 w-3 rounded-[4px] transition-transform duration-150 hover:scale-125 ${cell.future ? "bg-muted/40" : heatClass(cell.minutes)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
