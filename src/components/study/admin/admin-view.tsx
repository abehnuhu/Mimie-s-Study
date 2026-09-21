"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { StatCard } from "../shared-cards";
import { MiniProgress } from "../progress-widgets";
import { MusicTab } from "./music-tab";
import {
  Activity, Flame, Clock, BookOpen, Trophy, CalendarDays, Plus, Pencil, Trash2, Eye, EyeOff,
  Heart, Sparkles, Save, BarChart3, HelpCircle, Settings, X, Upload, TrendingUp, TrendingDown, Lightbulb, Search,
  Download, FolderDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── types ─────────────────────────────────────────────────────

interface OverviewData {
  student: { id: string; name: string; nickname: string | null; avatar: string; currentYear: number; currentSemester: number; dailyTargetMin: number; streak: number; longestStreak: number; xp: number; level: number };
  today: { loggedIn: boolean; loginAt: string | null; minutes: number; lessons: number; quiz: number | null; games: number; xp: number };
  week: { daysActive: number; minutes: number; lessons: number; quizzes: number; avgScore: number | null; strongest: string | null; weakest: string | null; mostPlayedGame: string | null; longestSessionMinutes: number };
  allTime: { progressPct: number; lessonsCompleted: number; publishedTotal: number; sessions: number; minutes: number; streak: number; highestQuiz: number; gamesPlayed: number };
  heatmap: { date: string; minutes: number; lessons: number; quizzes: number; games: number; topics: string[]; xp: number }[];
  recentActivity: { lesson: string; course: string; completedAt: string | null }[];
}

interface AdminLesson {
  id: string; title: string; description: string | null; difficulty: string; durationMin: number;
  status: string; version: number; sourceStatus: string; course: string; courseSlug: string;
  moduleTitle: string; questionCount: number; sectionCount: number; updatedAt: string;
}

interface AdminQuestion {
  id: string; topic: string; type: string; difficulty: string; stem: string;
  options: string[]; correctIndex: number | null; correctIndexes: number[] | null;
  explanation: string; lesson: string | null; course: string | null;
}

// ── main view ─────────────────────────────────────────────────

export function AdminView() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-plum text-primary-foreground">
          <Heart className="h-5 w-5 fill-current" aria-hidden />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">Admin Studio</h1>
          <p className="text-xs text-muted-foreground">Mimie&apos;s world, behind the curtain</p>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="max-w-full justify-start overflow-x-auto rounded-full p-1 no-scrollbar sm:justify-center">
          <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
          <TabsTrigger value="lessons" className="rounded-full">Lessons</TabsTrigger>
          <TabsTrigger value="questions" className="rounded-full">Questions</TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-full">Analytics</TabsTrigger>
          <TabsTrigger value="music" className="rounded-full">Music</TabsTrigger>
          <TabsTrigger value="settings" className="rounded-full">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview"><OverviewTab /></TabsContent>
        <TabsContent value="lessons"><LessonsTab /></TabsContent>
        <TabsContent value="questions"><QuestionsTab /></TabsContent>
        <TabsContent value="analytics"><AnalyticsTab /></TabsContent>
        <TabsContent value="music"><MusicTab /></TabsContent>
        <TabsContent value="settings"><SettingsTab /></TabsContent>
      </Tabs>
    </div>
  );
}

// ── overview tab ──────────────────────────────────────────────

function OverviewTab() {
  const [data, setData] = useState<OverviewData | null>(null);
  const [noStudent, setNoStudent] = useState(false);
  const [selectedDay, setSelectedDay] = useState<OverviewData["heatmap"][number] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/overview", { cache: "no-store" });
        const json = await res.json();
        if (res.ok) setData(json);
        else if (res.status === 404) setNoStudent(true);
        else toast(json.error ?? "Couldn't load the overview 💗");
      } catch {
        toast("We lost the connection for a moment 💗");
      }
    })();
  }, []);

  if (noStudent) {
    return (
      <Card className="border-dashed border-border/70">
        <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-plum/15 text-2xl" aria-hidden>
            🌱
          </div>
          <div className="space-y-1">
            <h3 className="font-display text-lg font-semibold text-foreground">No student account yet</h3>
            <p className="mx-auto max-w-sm text-sm text-muted-foreground">
              Once your learner creates her account on the login page (the <span className="font-medium text-foreground">Create account</span> tab),
              her streaks, progress and little wins will light up this dashboard.
            </p>
          </div>
          <Button variant="outline" className="rounded-full" onClick={() => { setNoStudent(false); window.location.reload(); }}>
            <Flame className="h-4 w-4" aria-hidden /> Check again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <div className="space-y-4" aria-busy="true">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-20 rounded-xl" />)}</div>
        <Skeleton className="h-48 rounded-2xl" />
      </div>
    );
  }

  const w = data.week;

  return (
    <div className="space-y-5">
      {/* today */}
      <section>
        <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <Activity className="h-4 w-4 text-primary" aria-hidden /> Today · {data.student.name}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard icon={Activity} value={data.today.loggedIn ? "Yes" : "Not yet"} label="Logged in" accent={data.today.loggedIn ? "sage" : "lav"} />
          <StatCard icon={Clock} value={`${data.today.minutes} min`} label="Studied" accent="blossom" />
          <StatCard icon={BookOpen} value={data.today.lessons} label="Lessons done" accent="lav" />
          <StatCard icon={Trophy} value={data.today.quiz !== null ? `${data.today.quiz}%` : "—"} label="Quiz score" accent="gold" />
        </div>
      </section>

      {/* week */}
      <section>
        <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <CalendarDays className="h-4 w-4 text-primary" aria-hidden /> This week
        </h2>
        <Card className="border-border/70">
          <CardContent className="grid grid-cols-2 gap-x-6 gap-y-3 p-5 text-sm sm:grid-cols-3">
            {[
              ["Days active", `${w.daysActive} / 7`],
              ["Total minutes", `${w.minutes}`],
              ["Lessons completed", `${w.lessons}`],
              ["Quizzes", `${w.quizzes}`],
              ["Average score", w.avgScore !== null ? `${w.avgScore}%` : "—"],
              ["Longest session", `${w.longestSessionMinutes} min`],
              ["Strongest topic", w.strongest ?? "—"],
              ["Needs attention", w.weakest ?? "—"],
              ["Most played game", w.mostPlayedGame ?? "—"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-0.5 font-medium text-foreground">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* all time */}
      <section>
        <h2 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <BarChart3 className="h-4 w-4 text-primary" aria-hidden /> All-time
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard icon={BookOpen} value={`${data.allTime.progressPct}%`} label="Programme progress" accent="blossom" />
          <StatCard icon={Sparkles} value={`${data.allTime.lessonsCompleted}/${data.allTime.publishedTotal}`} label="Lessons completed" accent="lav" />
          <StatCard icon={Clock} value={`${Math.round(data.allTime.minutes / 60)}h`} label="Total study time" accent="gold" />
          <StatCard icon={Flame} value={`${data.allTime.streak} days`} label="Current streak" accent="sage" />
        </div>
      </section>

      {/* heatmap */}
      <section>
        <h2 className="mb-2 font-display text-lg font-semibold text-foreground">Study calendar</h2>
        <Card className="border-border/70">
          <CardContent className="p-5">
            <div className="flex flex-wrap gap-1.5">
              {data.heatmap.map((d) => {
                const intensity =
                  d.minutes === 0 ? "bg-muted" : d.minutes < 10 ? "bg-primary/25" : d.minutes < 20 ? "bg-primary/45" : d.minutes < 40 ? "bg-primary/70" : "bg-primary";
                return (
                  <button
                    key={d.date}
                    onClick={() => setSelectedDay(d)}
                    title={`${d.date}: ${d.minutes} min`}
                    className={cn("h-7 w-7 rounded-lg transition hover:scale-110 hover:ring-2 hover:ring-primary/40", intensity)}
                    aria-label={`${d.date}, ${d.minutes} minutes`}
                  />
                );
              })}
              {data.heatmap.length === 0 && (
                <p className="py-4 text-sm text-muted-foreground">No study activity recorded yet.</p>
              )}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Tap a day for details.</p>
          </CardContent>
        </Card>
      </section>

      {/* recent */}
      {data.recentActivity.length > 0 && (
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-foreground">Recently completed</h2>
          <Card className="border-border/70">
            <CardContent className="space-y-1.5 p-4">
              {data.recentActivity.map((r, i) => (
                <div key={i} className="flex items-center justify-between gap-3 rounded-lg border border-border/50 px-3 py-2 text-sm">
                  <span className="min-w-0 truncate">
                    <span className="font-medium text-foreground">{r.lesson}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{r.course}</span>
                  </span>
                  {r.completedAt && (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {new Date(r.completedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {/* day detail dialog */}
      <Dialog open={!!selectedDay} onOpenChange={(v) => !v && setSelectedDay(null)}>
        <DialogContent className="rounded-2xl">
          {selectedDay && (
            <div>
              <DialogHeader>
                <DialogTitle className="font-display">
                  {new Date(selectedDay.date + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Study time", `${selectedDay.minutes} minutes`],
                  ["Lessons completed", `${selectedDay.lessons}`],
                  ["Quizzes", `${selectedDay.quizzes}`],
                  ["Games", `${selectedDay.games}`],
                  ["XP earned", `+${selectedDay.xp}`],
                  ["Topics", selectedDay.topics.length ? selectedDay.topics.join(", ") : "—"],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{l}</span>
                    <span className="font-medium text-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── shared course options ─────────────────────────────────────

function CourseOptions() {
  const [courses, setCourses] = useState<{ slug: string; title: string; year: number; semester: number }[]>([]);
  useEffect(() => {
    fetch("/api/exam/generate", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setCourses(d.courses ?? []))
      .catch(() => {});
  }, []);
  return (
    <>
      {courses.map((c) => (
        <SelectItem key={c.slug} value={c.slug}>Y{c.year}S{c.semester} · {c.title}</SelectItem>
      ))}
    </>
  );
}

// ── lessons tab ───────────────────────────────────────────────

function LessonsTab() {
  const [lessons, setLessons] = useState<AdminLesson[] | null>(null);
  const [courseFilter, setCourseFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<AdminLesson | null>(null);
  const [creating, setCreating] = useState(false);

  async function load() {
    try {
      const params = new URLSearchParams();
      if (courseFilter !== "all") params.set("course", courseFilter);
      if (search.trim()) params.set("q", search.trim());
      const res = await fetch(`/api/admin/lessons${params.size ? `?${params}` : ""}`, { cache: "no-store" });
      const json = await res.json();
      if (res.ok) setLessons(json.lessons);
    } catch {
      toast("Couldn't load lessons 💗");
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load() sets state after awaits; filter-driven reload
    load();
  }, [courseFilter, search]);

  async function toggleStatus(lesson: AdminLesson) {
    const next = lesson.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    await fetch(`/api/admin/lessons/${lesson.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    toast(next === "PUBLISHED" ? `Published “${lesson.title}” 💗` : "Unpublished");
    load();
  }

  async function remove(lesson: AdminLesson) {
    if (!window.confirm(`Delete “${lesson.title}” permanently?`)) return;
    await fetch(`/api/admin/lessons/${lesson.id}`, { method: "DELETE" });
    toast("Lesson deleted");
    load();
  }

  if (!lessons) {
    return <div className="space-y-3" aria-busy="true">{[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 rounded-xl" />)}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lessons…"
          className="w-48 rounded-full"
        />
        <Select value={courseFilter} onValueChange={setCourseFilter}>
          <SelectTrigger className="w-56 rounded-full"><SelectValue /></SelectTrigger>
          <SelectContent className="max-h-64">
            <SelectItem value="all">All courses</SelectItem>
            <CourseOptions />
          </SelectContent>
        </Select>
        <Button className="ml-auto rounded-full" onClick={() => setCreating(true)}>
          <Plus className="h-4 w-4" aria-hidden /> New lesson
        </Button>
      </div>

      <div className="max-h-[480px] space-y-2 overflow-y-auto pr-1">
        {lessons.length === 0 && <p className="py-6 text-center text-sm text-muted-foreground">No lessons match 💗</p>}
        {lessons.map((l) => (
          <motion.div key={l.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{l.title}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {l.course} · {l.moduleTitle} · {l.durationMin}m · {l.questionCount}Q · v{l.version}
              </p>
            </div>
            <span className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold",
              l.status === "PUBLISHED" ? "bg-sage text-accent-foreground" : l.status === "DRAFT" ? "bg-lav text-secondary-foreground dark:bg-plum/30" : "bg-muted text-muted-foreground"
            )}>
              {l.status}
            </span>
            <div className="flex shrink-0 gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setEditing(l)} aria-label="Edit lesson">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => toggleStatus(l)} aria-label={l.status === "PUBLISHED" ? "Unpublish" : "Publish"}>
                {l.status === "PUBLISHED" ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => remove(l)} aria-label="Delete lesson">
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {(editing || creating) && (
        <LessonEditorDialog
          lesson={editing}
          onClose={() => { setEditing(null); setCreating(false); load(); }}
        />
      )}
    </div>
  );
}

// ── lesson editor dialog ──────────────────────────────────────

interface EditableSection {
  type: string;
  title: string;
  body: string;
}

const SECTION_TYPES = [
  { v: "text", label: "Text" },
  { v: "callout", label: "Callout — Why this matters" },
  { v: "clinical_pearl", label: "Clinical pearl" },
  { v: "memory_trick", label: "Memory trick" },
  { v: "case", label: "Mini case" },
  { v: "table", label: "Table (markdown pipes)" },
  { v: "quiz_prompt", label: "Quiz prompt (Answer: line)" },
  { v: "summary", label: "Summary (- bullets)" },
];

function LessonEditorDialog({ lesson, onClose }: { lesson: AdminLesson | null; onClose: () => void }) {
  const isEdit = !!lesson;
  const [title, setTitle] = useState(lesson?.title ?? "");
  const [description, setDescription] = useState(lesson?.description ?? "");
  const [difficulty, setDifficulty] = useState(lesson?.difficulty ?? "Easy");
  const [duration, setDuration] = useState(String(lesson?.durationMin ?? 12));
  const [status, setStatus] = useState(lesson?.status ?? "DRAFT");
  const [objectives, setObjectives] = useState("");
  const [sections, setSections] = useState<EditableSection[]>([]);
  const [courseSlug, setCourseSlug] = useState(lesson?.courseSlug ?? "");
  const [modules, setModules] = useState<{ id: string; title: string }[]>([]);
  const [moduleId, setModuleId] = useState("");
  const [saving, setSaving] = useState(false);

  // load lesson detail for editing
  useEffect(() => {
    if (!lesson) return;
    (async () => {
      try {
        const res = await fetch(`/api/admin/lessons/${lesson.id}`, { cache: "no-store" });
        const json = await res.json();
        if (res.ok) {
          setObjectives(json.lesson.objectives.join("\n"));
          setSections(json.lesson.sections.map((s: { type: string; title: string | null; body: string }) => ({
            type: s.type, title: s.title ?? "", body: s.body,
          })));
        }
      } catch {
        toast("Couldn't load the lesson 💗");
      }
    })();
  }, [lesson]);

  // load modules when course selected (create mode)
  useEffect(() => {
    if (!courseSlug || isEdit) return;
    (async () => {
      try {
        const res = await fetch(`/api/courses/${courseSlug}`, { cache: "no-store" });
        const json = await res.json();
        if (res.ok) setModules(json.modules ?? []);
      } catch {
        /* noop */
      }
    })();
  }, [courseSlug, isEdit]);

  async function save() {
    if (!title.trim()) {
      toast("Give the lesson a title 💗");
      return;
    }
    if (!isEdit && !moduleId) {
      toast("Pick a course and module 💗");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title,
        description,
        difficulty,
        durationMin: Number(duration) || 12,
        status,
        objectives: objectives.split("\n").map((o) => o.trim()).filter(Boolean),
        sections,
        moduleId: isEdit ? undefined : moduleId,
      };
      const res = await fetch(isEdit ? `/api/admin/lessons/${lesson!.id}` : "/api/admin/lessons", {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok) {
        toast(isEdit ? "Lesson updated 💗 version bumped" : "Lesson created 💗");
        onClose();
      } else {
        toast(json.error ?? "Couldn't save 💗");
      }
    } catch {
      toast("Couldn't save 💗");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display">{isEdit ? "Edit lesson" : "New lesson"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {!isEdit && (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Course</Label>
                <Select value={courseSlug} onValueChange={setCourseSlug}>
                  <SelectTrigger className="rounded-xl"><SelectValue placeholder="Choose course" /></SelectTrigger>
                  <SelectContent className="max-h-56">
                    <CourseOptions />
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Module</Label>
                <Select value={moduleId} onValueChange={setModuleId} disabled={!courseSlug}>
                  <SelectTrigger className="rounded-xl"><SelectValue placeholder="Choose module" /></SelectTrigger>
                  <SelectContent>
                    {modules.map((m) => <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="lesson-title">Title</Label>
            <Input id="lesson-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What Actually Starts Labour?" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lesson-desc">Description</Label>
            <Textarea id="lesson-desc" value={description} onChange={(e) => setDescription(e.target.value)} className="min-h-[60px]" placeholder="One warm sentence about why this matters." />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Easy", "Moderate", "Hard", "Clinical Reasoning"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lesson-duration">Minutes</Label>
              <Input id="lesson-duration" type="number" min={5} max={60} value={duration} onChange={(e) => setDuration(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["DRAFT", "PUBLISHED"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lesson-objectives">Objectives (one per line)</Label>
            <Textarea id="lesson-objectives" value={objectives} onChange={(e) => setObjectives(e.target.value)} className="min-h-[70px]" placeholder={"Explain what labour is\nList the signs of true labour"} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Content sections</Label>
              <Button size="sm" variant="outline" className="rounded-full"
                onClick={() => setSections((s) => [...s, { type: "text", title: "", body: "" }])}>
                <Plus className="h-3.5 w-3.5" aria-hidden /> Add section
              </Button>
            </div>
            <div className="space-y-3">
              {sections.map((s, i) => (
                <div key={i} className="rounded-xl border border-border/60 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <Select value={s.type} onValueChange={(v) => setSections((arr) => arr.map((x, xi) => xi === i ? { ...x, type: v } : x))}>
                      <SelectTrigger className="h-8 w-56 rounded-lg text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {SECTION_TYPES.map((t) => <SelectItem key={t.v} value={t.v}>{t.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button size="icon" variant="ghost" className="ml-auto h-8 w-8 rounded-full" onClick={() => setSections((arr) => arr.filter((_, xi) => xi !== i))} aria-label="Remove section">
                      <X className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <Input
                    value={s.title}
                    onChange={(e) => setSections((arr) => arr.map((x, xi) => xi === i ? { ...x, title: e.target.value } : x))}
                    placeholder="Section title (optional)"
                    className="mb-2 h-8 text-xs"
                  />
                  <Textarea
                    value={s.body}
                    onChange={(e) => setSections((arr) => arr.map((x, xi) => xi === i ? { ...x, body: e.target.value } : x))}
                    placeholder="Section body — short paragraphs, blank line between. For quiz prompts put the answer after “Answer:”."
                    className="min-h-[90px] text-xs"
                  />
                </div>
              ))}
              {sections.length === 0 && (
                <p className="rounded-xl border border-dashed border-border/70 p-4 text-center text-xs text-muted-foreground">
                  No sections yet — add a “Why this matters” callout, a few text sections, a pearl and a summary 💗
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" className="rounded-full" onClick={onClose}>Cancel</Button>
            <Button className="rounded-full" onClick={save} disabled={saving}>
              <Save className="h-4 w-4" aria-hidden /> {saving ? "Saving…" : status === "PUBLISHED" ? "Save & publish" : "Save draft"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── questions tab ─────────────────────────────────────────────

function QuestionsTab() {
  const [questions, setQuestions] = useState<AdminQuestion[] | null>(null);
  const [creating, setCreating] = useState(false);
  const [importing, setImporting] = useState(false);
  const [editing, setEditing] = useState<AdminQuestion | null>(null);
  const [filter, setFilter] = useState("");

  async function load() {
    try {
      const res = await fetch("/api/admin/questions", { cache: "no-store" });
      const json = await res.json();
      if (res.ok) setQuestions(json.questions);
    } catch {
      toast("Couldn't load questions 💗");
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/questions", { cache: "no-store" });
        const json = await res.json();
        if (res.ok) setQuestions(json.questions);
      } catch {
        toast("Couldn't load questions 💗");
      }
    })();
  }, []);

  async function remove(q: AdminQuestion) {
    if (!window.confirm("Delete this question?")) return;
    await fetch(`/api/admin/questions/${q.id}`, { method: "DELETE" });
    setQuestions((list) => (list ?? []).filter((x) => x.id !== q.id));
    toast("Question deleted");
  }

  if (!questions) {
    return <div className="space-y-3" aria-busy="true">{[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 rounded-xl" />)}</div>;
  }

  const shown = filter.trim()
    ? questions.filter((q) =>
        q.stem.toLowerCase().includes(filter.toLowerCase()) ||
        q.topic.toLowerCase().includes(filter.toLowerCase()))
    : questions;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          {questions.length} questions in the bank
          {filter.trim() && ` · ${shown.length} matching`}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full" onClick={() => setImporting(true)}>
            <Upload className="h-4 w-4" aria-hidden /> Import
          </Button>
          <Button className="rounded-full" onClick={() => setCreating(true)}>
            <Plus className="h-4 w-4" aria-hidden /> New question
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search the bank — stem or topic…"
          className="rounded-full border-border/70 bg-card pl-10 pr-4"
          aria-label="Search questions"
        />
      </div>

      <div className="max-h-[480px] space-y-2 overflow-y-auto pr-1">
        {shown.length === 0 && (
          <p className="rounded-xl border border-dashed border-border/70 px-4 py-8 text-center text-sm text-muted-foreground">
            Nothing matches “{filter}” — try another word 💗
          </p>
        )}
        {shown.map((q) => (
          <div key={q.id} className="group rounded-xl border border-border/60 bg-card px-4 py-3 transition-colors hover:border-primary/40">
            <div className="flex items-start gap-3">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-relaxed text-foreground">{q.stem}</p>
                <p className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span>{q.topic} · {q.type.replace("_", " ").toLowerCase()} · {q.difficulty}</span>
                  {q.course && <span>· {q.course}</span>}
                  <span className="rounded-full border border-sage/40 bg-sage/15 px-1.5 py-0.5 font-semibold text-accent-foreground" title="Correct answer">
                    answer {q.correctIndex !== null ? String.fromCharCode(65 + q.correctIndex) : "—"}
                  </span>
                  <span className="rounded-full bg-muted px-1.5 py-0.5" title="Number of options">
                    {q.options.length} options
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full opacity-60 transition group-hover:opacity-100 hover:text-primary"
                onClick={() => setEditing(q)}
                aria-label={`Edit question: ${q.stem.slice(0, 40)}`}
                title="Edit this question"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => remove(q)} aria-label="Delete question">
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {creating && <QuestionBuilderDialog onClose={() => { setCreating(false); load(); }} />}
      {importing && <ImportQuestionsDialog onClose={() => { setImporting(false); load(); }} />}
      {editing && <QuestionEditDialog question={editing} onClose={() => { setEditing(null); load(); }} />}
    </div>
  );
}

// ── quick edit dialog — tweak a question without leaving the bank ──

function QuestionEditDialog({ question, onClose }: { question: AdminQuestion; onClose: () => void }) {
  const [topic, setTopic] = useState(question.topic);
  const [type] = useState(question.type);
  const [difficulty, setDifficulty] = useState(question.difficulty);
  const [stem, setStem] = useState(question.stem);
  const [options, setOptions] = useState<string[]>(
    question.options.length >= 2 ? question.options : [...question.options, "", ""].slice(0, 2)
  );
  const [correctIndex, setCorrectIndex] = useState(question.correctIndex ?? 0);
  const [explanation, setExplanation] = useState(question.explanation ?? "");
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!stem.trim() || options.filter((o) => o.trim()).length < 2) {
      toast("A question needs a stem and at least two options 💗");
      return;
    }
    if (correctIndex >= options.length) {
      toast("The correct answer points at an option that doesn&apos;t exist 💗");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/questions/${question.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          difficulty,
          stem,
          options: options.map((o) => o.trim()),
          correctIndex,
          explanation,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        toast("Question updated 💗", { description: "Live everywhere it appears — quizzes, drills and games." });
        onClose();
      } else {
        toast(json.error ?? "Couldn&apos;t save 💗");
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-xl overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Pencil className="h-4 w-4 text-primary" aria-hidden /> Edit question
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Topic</Label>
              <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Stages of Labour" />
            </div>
            <div className="space-y-1.5">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Easy", "Moderate", "Hard", "Clinical Reasoning"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Type (locked)</Label>
              <Input value={type.replace("_", " ")} disabled className="rounded-xl bg-muted/50" />
            </div>
            <div className="space-y-1.5">
              <Label>Correct answer</Label>
              <Select value={String(correctIndex)} onValueChange={(v) => setCorrectIndex(Number(v))}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {options.map((_, i) => <SelectItem key={i} value={String(i)}>{String.fromCharCode(65 + i)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Question stem</Label>
            <Textarea value={stem} onChange={(e) => setStem(e.target.value)} className="min-h-[70px]" />
          </div>
          <div className="space-y-2">
            <Label>Options</Label>
            {options.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    i === correctIndex
                      ? "bg-sage text-accent-foreground ring-2 ring-sage/50"
                      : "bg-lav text-secondary-foreground dark:bg-plum/30"
                  )}
                  title={i === correctIndex ? "Correct answer" : undefined}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <Input
                  value={opt}
                  onChange={(e) => setOptions((arr) => arr.map((o, oi) => oi === i ? e.target.value : o))}
                  placeholder={`Option ${String.fromCharCode(65 + i)}`}
                />
                {options.length > 2 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => {
                      setOptions((arr) => arr.filter((_, oi) => oi !== i));
                      setCorrectIndex((ci) => (ci === i ? 0 : ci > i ? ci - 1 : ci));
                    }}
                    aria-label={`Remove option ${String.fromCharCode(65 + i)}`}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-muted-foreground" />
                  </Button>
                )}
              </div>
            ))}
            {options.length < 6 && (
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => setOptions((arr) => [...arr, ""])}
              >
                <Plus className="h-3.5 w-3.5" aria-hidden /> Add option
              </Button>
            )}
          </div>
          <div className="space-y-1.5">
            <Label>Explanation (shown after submission)</Label>
            <Textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} className="min-h-[80px]" />
          </div>
          <div className="flex justify-end gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" className="rounded-full" onClick={onClose}>Cancel</Button>
            <Button className="rounded-full" onClick={save} disabled={saving}>
              <Save className="h-4 w-4" aria-hidden /> {saving ? "Saving…" : "Save changes"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function QuestionBuilderDialog({ onClose }: { onClose: () => void }) {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("MCQ");
  const [difficulty, setDifficulty] = useState("Moderate");
  const [stem, setStem] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!stem.trim() || options.filter((o) => o.trim()).length < 2) {
      toast("A question needs a stem and at least two options 💗");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic || "General",
          type,
          difficulty,
          stem,
          options: options.filter((o) => o.trim()),
          correctIndex,
          explanation,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        toast("Question added 💗");
        onClose();
      } else {
        toast(json.error ?? "Couldn't save 💗");
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-xl overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display">New question</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Topic</Label>
              <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Stages of Labour" />
            </div>
            <div className="space-y-1.5">
              <Label>Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["MCQ", "TRUE_FALSE", "MULTI_SELECT", "ORDERING", "CLINICAL_SCENARIO"].map((t) => <SelectItem key={t} value={t}>{t.replace("_", " ")}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Easy", "Moderate", "Hard", "Clinical Reasoning"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Correct answer</Label>
              <Select value={String(correctIndex)} onValueChange={(v) => setCorrectIndex(Number(v))}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {options.map((_, i) => <SelectItem key={i} value={String(i)}>{String.fromCharCode(65 + i)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Question stem</Label>
            <Textarea value={stem} onChange={(e) => setStem(e.target.value)} className="min-h-[70px]" placeholder="A 29-year-old at 38 weeks reports… Which finding should you report first?" />
          </div>
          <div className="space-y-2">
            <Label>Options</Label>
            {options.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lav text-xs font-bold text-secondary-foreground dark:bg-plum/30">
                  {String.fromCharCode(65 + i)}
                </span>
                <Input value={opt} onChange={(e) => setOptions((arr) => arr.map((o, oi) => oi === i ? e.target.value : o))} placeholder={`Option ${String.fromCharCode(65 + i)}`} />
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            <Label>Explanation (shown after submission)</Label>
            <Textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} className="min-h-[80px]" placeholder="Why this is right — and turn the mistake into a lesson." />
          </div>
          <div className="flex justify-end gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" className="rounded-full" onClick={onClose}>Cancel</Button>
            <Button className="rounded-full" onClick={save} disabled={saving}>
              <Save className="h-4 w-4" aria-hidden /> {saving ? "Saving…" : "Add question"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── bulk import dialog ────────────────────────────────────────

interface ImportPreview {
  ok: boolean;
  total: number;
  validCount?: number;
  created?: number;
  errors: { index: number; error: string }[];
  errorCount: number;
  course?: string | null;
}

const IMPORT_EXAMPLE = `[
  {
    "topic": "Anatomy — Female Pelvis",
    "type": "MCQ",
    "difficulty": "Easy",
    "stem": "Which pelvic type is most favourable for vaginal delivery?",
    "options": ["Gynecoid", "Android", "Anthropoid", "Platypelloid"],
    "correctIndex": 0,
    "explanation": "The gynecoid pelvis is the classic female pelvis — round inlet, wide outlet.",
    "whyOthers": { "B": "Android pelvises are heart-shaped and narrow." }
  }
]`;

function ImportQuestionsDialog({ onClose }: { onClose: () => void }) {
  const [raw, setRaw] = useState("");
  const [courseSlug, setCourseSlug] = useState("none");
  const [checking, setChecking] = useState(false);
  const [importing, setImporting] = useState(false);
  const [preview, setPreview] = useState<ImportPreview | null>(null);
  const [done, setDone] = useState<ImportPreview | null>(null);
  const [syntaxError, setSyntaxError] = useState<string | null>(null);

  function parsePayload(): { questions: unknown[] } | { error: string } {
    const text = raw.trim();
    if (!text) return { error: "Paste your questions as a JSON array first 💗" };
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      return { error: `JSON syntax error: ${(e as Error).message}` };
    }
    if (!Array.isArray(parsed)) return { error: "The top level must be an array of questions." };
    return { questions: parsed };
  }

  async function send(dryRun: boolean): Promise<ImportPreview | null> {
    const payload = parsePayload();
    if ("error" in payload) {
      setSyntaxError(payload.error);
      setPreview(null);
      return null;
    }
    setSyntaxError(null);
    try {
      const res = await fetch("/api/admin/questions/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questions: payload.questions,
          courseSlug: courseSlug === "none" ? null : courseSlug,
          dryRun,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setSyntaxError(json.error ?? "Couldn't validate 💗");
        return null;
      }
      return json as ImportPreview;
    } catch {
      setSyntaxError("We lost the connection for a moment 💗");
      return null;
    }
  }

  async function validate() {
    setChecking(true);
    setDone(null);
    const result = await send(true);
    if (result) setPreview(result);
    setChecking(false);
  }

  async function runImport() {
    setImporting(true);
    const result = await send(false);
    if (result) {
      setDone(result);
      setPreview(null);
      if (result.created && result.created > 0) {
        toast(`Imported ${result.created} question${result.created === 1 ? "" : "s"} 💗`);
      }
    }
    setImporting(false);
  }

  return (
    <Dialog open onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Upload className="h-4 w-4 text-primary" aria-hidden /> Bulk import questions
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Paste a JSON array of exam questions — validate first, then import. Every question needs a stem,
            2–6 options, the correct answer and an explanation (that&apos;s how Mimie learns the why 💗).
          </p>

          <div className="space-y-1.5">
            <Label>Attach to course (optional)</Label>
            <Select value={courseSlug} onValueChange={setCourseSlug}>
              <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent className="max-h-56">
                <SelectItem value="none">No course — general bank</SelectItem>
                <CourseOptions />
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="import-json">Questions (JSON array)</Label>
            <Textarea
              id="import-json"
              value={raw}
              onChange={(e) => { setRaw(e.target.value); setPreview(null); setDone(null); setSyntaxError(null); }}
              className="min-h-[200px] font-mono text-xs leading-relaxed"
              placeholder={IMPORT_EXAMPLE}
              aria-describedby="import-format-help"
            />
            <p id="import-format-help" className="text-[11px] text-muted-foreground">
              Types: MCQ, TRUE_FALSE, MULTI_SELECT, ORDERING, CLINICAL_SCENARIO · MULTI_SELECT &amp; ORDERING use{" "}
              <code className="rounded bg-muted px-1">correctIndexes</code> (0-based, correct order) · whyOthers is optional (keys A–F).
            </p>
          </div>

          {syntaxError && (
            <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
              <p className="font-medium">Couldn&apos;t read that JSON</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{syntaxError}</p>
            </div>
          )}

          {preview && (
            <div className={cn(
              "rounded-xl border px-4 py-3 text-sm",
              preview.errorCount === 0
                ? "border-sage/50 bg-sage/15 text-foreground"
                : "border-gold/50 bg-gold/10 text-foreground"
            )} role="status">
              <p className="font-medium">
                {preview.errorCount === 0
                  ? `All ${preview.total} questions look perfect 💗`
                  : `${preview.validCount} of ${preview.total} questions are valid`}
                {preview.course ? ` · will attach to ${preview.course}` : ""}
              </p>
              {preview.errorCount > 0 && (
                <ul className="mt-2 max-h-40 space-y-1 overflow-y-auto text-xs text-muted-foreground">
                  {preview.errors.map((e) => (
                    <li key={`${e.index}-${e.error}`} className="rounded bg-card/60 px-2 py-1">{e.error}</li>
                  ))}
                  {preview.errorCount > preview.errors.length && (
                    <li>…and {preview.errorCount - preview.errors.length} more</li>
                  )}
                </ul>
              )}
            </div>
          )}

          {done && (
            <div className="rounded-xl border border-sage/50 bg-sage/15 px-4 py-3 text-sm text-foreground" role="status">
              <p className="font-medium">Imported {done.created} of {done.total} questions 💗</p>
              {done.errorCount > 0 && (
                <ul className="mt-2 max-h-40 space-y-1 overflow-y-auto text-xs text-muted-foreground">
                  {done.errors.map((e) => (
                    <li key={`${e.index}-${e.error}`} className="rounded bg-card/60 px-2 py-1">{e.error}</li>
                  ))}
                  {done.errorCount > done.errors.length && (
                    <li>…and {done.errorCount - done.errors.length} more</li>
                  )}
                </ul>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2 border-t border-border/60 pt-4">
            <Button variant="ghost" className="rounded-full" onClick={onClose}>
              {done ? "Done" : "Cancel"}
            </Button>
            {!done && (
              <>
                <Button variant="outline" className="rounded-full" onClick={validate} disabled={checking || importing}>
                  <HelpCircle className="h-4 w-4" aria-hidden /> {checking ? "Checking…" : "Validate"}
                </Button>
                <Button
                  className="rounded-full"
                  onClick={runImport}
                  disabled={importing || checking || !preview || preview.validCount === 0}
                >
                  <Upload className="h-4 w-4" aria-hidden /> {importing ? "Importing…" : `Import ${preview?.validCount ?? 0}`}
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── analytics tab ─────────────────────────────────────────────

interface CourseAnalytics {
  course: { title: string; slug: string; year: number; semester: number };
  stats: {
    lessonCount: number; completed: number; progressPct: number;
    questionCount: number; quizAnswers: number; quizAccuracy: number | null;
    minutes: number; lastStudied: string | null;
  };
  strongTopics: { topic: string; accuracy: number; total: number }[];
  weakTopics: { topic: string; accuracy: number; total: number }[];
}

function AnalyticsTab() {
  const [courses, setCourses] = useState<{ slug: string; title: string; year: number; semester: number }[]>([]);
  const [slug, setSlug] = useState<string>("");
  const [data, setData] = useState<CourseAnalytics | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/exam/generate", { cache: "no-store" });
        const json = await res.json();
        const list: { slug: string; title: string; year: number; semester: number }[] = json.courses ?? [];
        setCourses(list);
        if (list.length > 0) setSlug(list[0].slug);
      } catch {
        toast("Couldn't load the course list 💗");
      }
    })();
  }, []);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setData(null);
      try {
        const res = await fetch(`/api/admin/course/${slug}`, { cache: "no-store" });
        const json = await res.json();
        if (!cancelled && res.ok) setData(json);
      } catch {
        if (!cancelled) toast("Couldn't load course analytics 💗");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  const current = courses.find((c) => c.slug === slug);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Select value={slug} onValueChange={setSlug}>
          <SelectTrigger className="w-64 rounded-full"><SelectValue placeholder="Choose course" /></SelectTrigger>
          <SelectContent className="max-h-64">
            {courses.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>Y{c.year}S{c.semester} · {c.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {current && (
          <span className="rounded-full bg-lav px-2.5 py-0.5 text-[11px] text-secondary-foreground dark:bg-plum/30">
            Year {current.year} · Semester {current.semester}
          </span>
        )}
      </div>

      {loading && (
        <div className="space-y-3" aria-busy="true">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-20 rounded-xl" />)}</div>
          <Skeleton className="h-40 rounded-2xl" />
        </div>
      )}

      {!loading && !data && !slug && (
        <p className="py-8 text-center text-sm text-muted-foreground">Choose a course to see how Mimie is doing 💗</p>
      )}

      {!loading && data && (
        <div className="space-y-4">
          {/* course header + stats */}
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">{data.course.title}</h2>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard icon={BookOpen} value={`${data.stats.progressPct}%`} label={`Lessons · ${data.stats.completed}/${data.stats.lessonCount}`} accent="blossom" />
              <StatCard icon={Trophy} value={data.stats.quizAccuracy !== null ? `${data.stats.quizAccuracy}%` : "—"} label={`Quiz accuracy · ${data.stats.quizAnswers} answers`} accent="gold" />
              <StatCard icon={Clock} value={`${data.stats.minutes} min`} label="Time invested" accent="lav" />
              <StatCard icon={HelpCircle} value={data.stats.questionCount} label="Bank questions" accent="sage" />
            </div>
          </div>

          {/* lesson progress */}
          <Card className="border-border/70">
            <CardContent className="space-y-2 p-5">
              <div className="flex items-baseline justify-between text-sm">
                <p className="font-medium text-foreground">Lesson completion</p>
                <span className="text-xs text-muted-foreground">{data.stats.completed} of {data.stats.lessonCount} published lessons</span>
              </div>
              <MiniProgress value={data.stats.progressPct} />
              <p className="pt-1 text-xs text-muted-foreground">
                {data.stats.lastStudied
                  ? `Last studied ${new Date(data.stats.lastStudied).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}`
                  : "Not studied yet — everything starts with one lesson 💗"}
              </p>
            </CardContent>
          </Card>

          {/* topics */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border-sage/40">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <TrendingUp className="h-4 w-4 text-primary" aria-hidden /> Mimie&apos;s strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.strongTopics.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">No strong topics yet — accuracy above 70% lands here 💗</p>
                ) : (
                  data.strongTopics.map((t) => (
                    <div key={t.topic}>
                      <div className="mb-1 flex items-baseline justify-between text-sm">
                        <span className="truncate font-medium text-foreground">{t.topic}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">{t.accuracy}% · {t.total} answers</span>
                      </div>
                      <MiniProgress value={t.accuracy} />
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <TrendingDown className="h-4 w-4 text-primary" aria-hidden /> Needs attention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.weakTopics.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">Nothing below 70% — beautifully consistent 💗</p>
                ) : (
                  data.weakTopics.map((t) => (
                    <div key={t.topic}>
                      <div className="mb-1 flex items-baseline justify-between text-sm">
                        <span className="truncate font-medium text-foreground">{t.topic}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">{t.accuracy}% · {t.total} answers</span>
                      </div>
                      <MiniProgress value={t.accuracy} />
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* insight */}
          <Card className="border-border/70 bg-gradient-to-br from-blossom-soft/60 to-transparent dark:from-plum/20">
            <CardContent className="flex gap-3 p-5">
              <Lightbulb className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-display font-semibold text-foreground">Tutor&apos;s note</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{buildInsight(data)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

function buildInsight(d: CourseAnalytics): string {
  const parts: string[] = [];
  if (d.stats.quizAnswers === 0) {
    parts.push("No quiz answers for this course yet — a short quiz would reveal where Mimie stands.");
  } else {
    if (d.weakTopics.length > 0) {
      const names = d.weakTopics.map((t) => t.topic.toLowerCase()).join(", ");
      parts.push(`Gentle revision on ${names} would lift her accuracy — the review queue is the perfect tool for that.`);
    } else {
      parts.push(`Accuracy is holding at ${d.stats.quizAccuracy}% across ${d.stats.quizAnswers} answers — exam-ready confidence.`);
    }
  }
  if (d.stats.completed === 0 && d.stats.lessonCount > 0) {
    parts.push("She hasn't started this course yet — the dashboard's next-lesson card is the gentlest nudge.");
  } else if (d.stats.progressPct < 50 && d.stats.lessonCount > 0) {
    parts.push(`Progress sits at ${d.stats.progressPct}% — one lesson a day keeps the streak alive.`);
  } else if (d.stats.progressPct >= 50) {
    parts.push(`More than halfway (${d.stats.progressPct}%) — the finish line is in sight.`);
  }
  return parts.join(" ");
}

// ── settings tab ──────────────────────────────────────────────

function SettingsTab() {
  const [settings, setSettings] = useState<{ tagline?: string; showSources?: boolean; maintenance?: boolean }>({});
  const [messages, setMessages] = useState<{ id: string; text: string; tone: string; active: boolean }[]>([]);
  const [student, setStudent] = useState<{ name: string; nickname: string | null; avatar: string; currentYear: number; currentSemester: number; dailyTargetMin: number } | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [newTone, setNewTone] = useState("warm");
  const [saving, setSaving] = useState(false);

  async function load() {
    try {
      const res = await fetch("/api/admin/settings", { cache: "no-store" });
      const json = await res.json();
      if (res.ok) {
        setSettings(json.settings ?? {});
        setMessages(json.messages ?? []);
        setStudent(json.students?.[0] ?? null);
      }
    } catch {
      toast("Couldn't load settings 💗");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function saveAll() {
    setSaving(true);
    try {
      await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      if (student) {
        await fetch("/api/admin/student", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(student),
        });
      }
      toast("Settings saved 💗");
    } catch {
      toast("Couldn't save settings 💗");
    } finally {
      setSaving(false);
    }
  }

  async function addMessage() {
    if (!newMessage.trim()) return;
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "create", text: newMessage.trim(), tone: newTone }),
    });
    setNewMessage("");
    load();
  }

  async function toggleMessage(m: { id: string; active: boolean }) {
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "toggle", id: m.id }),
    });
    load();
  }

  async function deleteMessage(id: string) {
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });
    load();
  }

  return (
    <div className="space-y-5">
      {/* student profile */}
      {student && (
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">Student profile · {student.name}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Display name</Label>
              <Input value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Nickname</Label>
              <Input value={student.nickname ?? ""} onChange={(e) => setStudent({ ...student, nickname: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Avatar emoji</Label>
              <Input value={student.avatar} onChange={(e) => setStudent({ ...student, avatar: e.target.value.slice(0, 4) })} maxLength={4} />
            </div>
            <div className="space-y-1.5">
              <Label>Daily target (minutes)</Label>
              <Input type="number" min={10} max={120} value={student.dailyTargetMin} onChange={(e) => setStudent({ ...student, dailyTargetMin: Number(e.target.value) })} />
            </div>
            <div className="space-y-1.5">
              <Label>Current year</Label>
              <Select value={String(student.currentYear)} onValueChange={(v) => setStudent({ ...student, currentYear: Number(v) })}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["1", "2", "3", "4"].map((y) => <SelectItem key={y} value={y}>Year {y}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Current semester</Label>
              <Select value={String(student.currentSemester)} onValueChange={(v) => setStudent({ ...student, currentSemester: Number(v) })}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {/* app settings */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg flex items-center gap-2"><Settings className="h-4 w-4 text-primary" aria-hidden /> App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Tagline</Label>
            <Input
              value={settings.tagline ?? ""}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
              placeholder="Her little corner to become an amazing midwife."
            />
          </div>
          <div className="flex items-center gap-2.5">
            <Switch
              id="show-sources"
              checked={settings.showSources ?? true}
              onCheckedChange={(v) => setSettings({ ...settings, showSources: v })}
            />
            <Label htmlFor="show-sources">Show source footers on lessons</Label>
          </div>
          <div className="flex items-center gap-2.5">
            <Switch
              id="maintenance"
              checked={settings.maintenance ?? false}
              onCheckedChange={(v) => setSettings({ ...settings, maintenance: v })}
            />
            <Label htmlFor="maintenance">Maintenance mode (message only — content stays safe)</Label>
          </div>
        </CardContent>
      </Card>

      {/* personal messages */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden /> Personal messages
          </CardTitle>
          <p className="text-xs text-muted-foreground">Occasionally shown on her dashboard — write like you 💗</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="I'm proud of you. — your biggest fan" />
            <Select value={newTone} onValueChange={setNewTone}>
              <SelectTrigger className="w-28 rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                {["warm", "playful", "proud"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button className="shrink-0 rounded-full" onClick={addMessage}>
              <Plus className="h-4 w-4" aria-hidden /> Add
            </Button>
          </div>
          <div className="space-y-2">
            {messages.map((m) => (
              <div key={m.id} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-2.5">
                <span aria-hidden>{m.tone === "playful" ? "😉" : m.tone === "proud" ? "💗" : "🌸"}</span>
                <p className={cn("flex-1 text-sm italic", !m.active && "line-through opacity-50")}>“{m.text}”</p>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => toggleMessage(m)} aria-label="Toggle message">
                  {m.active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => deleteMessage(m.id)} aria-label="Delete message">
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="rounded-full" onClick={saveAll} disabled={saving}>
          <Save className="h-4 w-4" aria-hidden /> {saving ? "Saving…" : "Save all settings"}
        </Button>
      </div>

      {/* project tools */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <FolderDown className="h-4 w-4 text-primary" aria-hidden /> Project
          </CardTitle>
          <p className="text-xs text-muted-foreground">Take the whole academy with you — code, content and the seeded database</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-gradient-to-br from-primary/5 to-plum/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Download source code (.zip)</p>
              <p className="text-xs text-muted-foreground">
                A fresh snapshot of everything — src, prisma seed data, public images,
                docs and the seeded <code className="rounded bg-muted px-1 py-0.5">db/custom.db</code>.
                Perfect for GitHub or a local backup.
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                Direct link, works anywhere:
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-primary">/mimies-study.zip</code>
              </p>
            </div>
            <Button asChild className="shrink-0 rounded-full">
              <a
                href="/mimies-study.zip"
                download
                target="_blank"
                rel="noopener"
                aria-label="Download the project source as a zip archive"
              >
                <Download className="h-4 w-4" aria-hidden /> Download .zip
              </a>
            </Button>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Tip: if the download doesn&apos;t start inside the preview panel, use{" "}
            <span className="font-medium text-foreground">Open in new tab</span> first, then open{" "}
            <code className="rounded bg-muted px-1 py-0.5">/mimies-study.zip</code> from the
            address bar. The archive skips node_modules, .git and secrets — after unzipping
            run <code className="rounded bg-muted px-1 py-0.5">bun install</code>, copy{" "}
            <code className="rounded bg-muted px-1 py-0.5">.env.example</code> to{" "}
            <code className="rounded bg-muted px-1 py-0.5">.env</code>, then{" "}
            <code className="rounded bg-muted px-1 py-0.5">bun run dev</code>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
