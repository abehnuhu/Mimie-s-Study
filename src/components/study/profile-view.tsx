"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { XpBar } from "./progress-widgets";
import { DynIcon } from "./dyn-icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Flame, CalendarDays, CalendarHeart, NotebookPen, Trophy, Save, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const AVATARS = ["🌸", "💗", "🌷", "🩺", "👶", "☀️", "🌙", "🦋", "🍓", "🫧", "crc", "✨"].filter((a) => a.length <= 4);

interface ProfileData {
  profile: {
    name: string; nickname: string | null; avatar: string; email: string;
    currentYear: number; currentSemester: number; dailyTargetMin: number;
    lessonLengthPref: string; xp: number; level: number; streak: number; longestStreak: number;
    notifyBadges: boolean; notifyReviews: boolean; createdAt: string;
  };
  badges: { slug: string; title: string; description: string; icon: string; criteria: string | null; xp: number; earned: boolean; earnedAt: string | null }[];
  notes: { id: string; lessonId: string; lessonTitle: string; body: string; updatedAt: string }[];
  bookmarkCount: number;
  examDate: string | null;
}

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function prettyDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.toLocaleDateString("en-GB", { weekday: "long" })}, ${d.getDate()} ${d.toLocaleDateString("en-GB", { month: "long" })}`;
}

export function ProfileView() {
  const { go, refreshBootstrap } = useAppStore();
  const [data, setData] = useState<ProfileData | null>(null);
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState("🌸");
  const [target, setTarget] = useState(25);
  const [year, setYear] = useState("1");
  const [semester, setSemester] = useState("1");
  const [length, setLength] = useState("short");
  const [notifyBadges, setNotifyBadges] = useState(true);
  const [notifyReviews, setNotifyReviews] = useState(true);
  const [examDate, setExamDate] = useState("");
  const [savedExamDate, setSavedExamDate] = useState<string | null>(null);
  const [savingExam, setSavingExam] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/profile", { cache: "no-store" });
        const json = await res.json();
        if (res.ok) {
          setData(json);
          setNickname(json.profile.nickname ?? "");
          setAvatar(json.profile.avatar);
          setTarget(json.profile.dailyTargetMin);
          setYear(String(json.profile.currentYear));
          setSemester(String(json.profile.currentSemester));
          setLength(json.profile.lessonLengthPref);
          setNotifyBadges(json.profile.notifyBadges);
          setNotifyReviews(json.profile.notifyReviews);
          setExamDate(json.examDate ?? "");
          setSavedExamDate(json.examDate ?? null);
        }
      } catch {
        toast("Couldn't load your profile 💗");
      }
    })();
  }, []);

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname,
          avatar,
          dailyTargetMin: target,
          currentYear: Number(year),
          currentSemester: Number(semester),
          lessonLengthPref: length,
          notifyBadges,
          notifyReviews,
        }),
      });
      if (res.ok) toast("Saved 💗 your study world, your way");
      else toast("Couldn't save settings 💗");
    } catch {
      toast("Couldn't save settings 💗");
    } finally {
      setSaving(false);
    }
  }

  async function saveExamDate() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(examDate)) {
      toast("Pick a valid exam date first 💗");
      return;
    }
    setSavingExam(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examDate }),
      });
      if (res.ok) {
        setSavedExamDate(examDate);
        refreshBootstrap();
        const days = daysUntil(examDate);
        toast(
          days > 0
            ? `Exam date saved — ${days} day${days === 1 ? "" : "s"} to go 💗`
            : days === 0
              ? "Exam date saved — it's today! Good luck 💗"
              : "Exam date saved 💗"
        );
      } else {
        toast("Couldn't save your exam date 💗");
      }
    } catch {
      toast("Couldn't save your exam date 💗");
    } finally {
      setSavingExam(false);
    }
  }

  async function clearExamDate() {
    setSavingExam(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examDate: null }),
      });
      if (res.ok) {
        setSavedExamDate(null);
        setExamDate("");
        refreshBootstrap();
        toast("Exam date cleared");
      } else {
        toast("Couldn't clear your exam date 💗");
      }
    } catch {
      toast("Couldn't clear your exam date 💗");
    } finally {
      setSavingExam(false);
    }
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl space-y-4" aria-busy="true">
        <Skeleton className="h-40 rounded-3xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  const p = data.profile;
  const earned = data.badges.filter((b) => b.earned);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* identity card */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-hero relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8"
      >
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden />
        <div className="relative flex flex-wrap items-center gap-5">
          <Avatar className="h-20 w-20 border-2 border-primary/30 shadow-lg">
            <AvatarFallback className="bg-card text-4xl">{avatar}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-3xl font-semibold text-foreground">{p.name}</h1>
            <p className="text-sm text-muted-foreground">
              {p.email} · joined {new Date(p.createdAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1 rounded-full bg-card/70 px-2.5 py-1 text-muted-foreground backdrop-blur">
                <CalendarDays className="h-3 w-3" aria-hidden /> Year {p.currentYear} · Semester {p.currentSemester}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-card/70 px-2.5 py-1 text-muted-foreground backdrop-blur">
                <Flame className="h-3 w-3" aria-hidden /> {p.streak}-day streak (best {p.longestStreak})
              </span>
              <span className="flex items-center gap-1 rounded-full bg-card/70 px-2.5 py-1 text-muted-foreground backdrop-blur">
                <NotebookPen className="h-3 w-3" aria-hidden /> {data.notes.length} notes · {data.bookmarkCount} saved
              </span>
            </div>
          </div>
          <div className="w-full sm:w-56">
            <XpBar xp={p.xp} level={p.level} />
          </div>
        </div>
      </motion.section>

      {/* exam countdown */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-display text-xl">
            <CalendarHeart className="h-5 w-5 text-primary" aria-hidden /> Exam countdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            {savedExamDate ? (
              daysUntil(savedExamDate) >= 0 ? (
                <>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-4xl font-semibold leading-none tabular-nums text-foreground">
                      {daysUntil(savedExamDate)}
                    </span>
                    <span className="pb-1 text-xs text-muted-foreground">days to go</span>
                  </div>
                  <p className="ml-auto text-xs text-muted-foreground">{prettyDate(savedExamDate)}</p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">That date has passed — pick a new one below.</p>
              )
            ) : (
              <p className="text-sm text-muted-foreground">Not set — pick a date and we&apos;ll count down with you 💗</p>
            )}
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <div className="min-w-[170px] flex-1 space-y-1.5">
              <Label htmlFor="exam-date">Exam date</Label>
              <input
                id="exam-date"
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="h-10 w-full rounded-xl border border-input bg-card/60 px-3 py-1 text-sm shadow-xs transition-[border-color,box-shadow] duration-200 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              />
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="rounded-full" onClick={saveExamDate} disabled={savingExam || !examDate}>
                <Save className="h-3.5 w-3.5" aria-hidden /> {savingExam ? "Saving…" : "Save"}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
                onClick={clearExamDate}
                disabled={savingExam || !savedExamDate}
              >
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* badges */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-display text-xl">
            <Trophy className="h-5 w-5 text-gold" aria-hidden /> Badges
            <span className="ml-auto text-sm font-normal text-muted-foreground">{earned.length}/{data.badges.length}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {data.badges.map((b) => (
              <div
                key={b.slug}
                className={cn(
                  "group rounded-2xl border p-4 text-center transition-all duration-300",
                  b.earned
                    ? "badge-earned border-gold/40 bg-gold/10 shadow-sm shadow-gold/10 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md hover:shadow-gold/20 motion-reduce:transform-none"
                    : "border-dashed border-border/70 bg-muted/30 opacity-75 hover:opacity-100"
                )}
                title={b.criteria ?? b.description}
              >
                <div className={cn(
                  "mx-auto flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none",
                  b.earned ? "bg-gold/25 text-plum group-hover:rotate-6 dark:text-gold" : "bg-muted text-muted-foreground"
                )}>
                  <DynIcon name={b.icon} className="h-5 w-5" />
                </div>
                <p className="mt-2 text-sm font-semibold text-foreground">{b.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{b.description}</p>
                {b.earned && b.earnedAt ? (
                  <p className="mt-1 text-[10px] font-medium text-plum/70 dark:text-gold/70">
                    ✓ {new Date(b.earnedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </p>
                ) : (
                  <p className="mt-1 text-[10px] text-muted-foreground/60">keep going 💗</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* preferences */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-xl">Your preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Avatar</Label>
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAvatar(a)}
                  aria-pressed={avatar === a}
                  aria-label={`Avatar ${a}`}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl border-2 text-xl transition-all duration-200 active:scale-95 motion-reduce:transform-none",
                    avatar === a
                      ? "scale-105 border-primary bg-blossom-soft shadow-md shadow-primary/20 dark:bg-plum/40"
                      : "border-border/60 hover:-translate-y-0.5 hover:scale-105 hover:border-primary/40"
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="nickname">Nickname</Label>
              <input
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="What should we call you?"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Daily study target</Label>
              <Select value={String(target)} onValueChange={(v) => setTarget(Number(v))}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[15, 20, 25, 30, 40, 60].map((m) => (
                    <SelectItem key={m} value={String(m)}>{m} minutes a day</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Current year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["1", "2", "3", "4"].map((y) => <SelectItem key={y} value={y}>Year {y}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Current semester</Label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>Preferred lesson length</Label>
              <div className="flex gap-2">
                {[
                  { v: "short", label: "Short · 10–15 min" },
                  { v: "medium", label: "Medium · 15–20 min" },
                  { v: "long", label: "Long · 20–25 min" },
                ].map((o) => (
                  <button
                    key={o.v}
                    onClick={() => setLength(o.v)}
                    aria-pressed={length === o.v}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm transition",
                      length === o.v ? "border-primary bg-primary text-primary-foreground" : "border-border/70 text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2.5">
              <Switch id="notify-badges" checked={notifyBadges} onCheckedChange={setNotifyBadges} />
              <Label htmlFor="notify-badges" className="flex items-center gap-1.5 text-sm">
                <Bell className="h-3.5 w-3.5 text-muted-foreground" aria-hidden /> Badge celebrations
              </Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Switch id="notify-reviews" checked={notifyReviews} onCheckedChange={setNotifyReviews} />
              <Label htmlFor="notify-reviews" className="text-sm">Review reminders</Label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="rounded-full" onClick={save} disabled={saving}>
              <Save className="h-4 w-4" aria-hidden /> {saving ? "Saving…" : "Save preferences"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* notes */}
      {data.notes.length > 0 && (
        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-display text-xl">
              <NotebookPen className="h-5 w-5 text-primary" aria-hidden /> Your notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.notes.map((n) => (
              <button
                key={n.id}
                onClick={() => go({ name: "lesson", id: n.lessonId })}
                className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-left transition hover:border-primary/40"
              >
                <p className="text-xs font-semibold text-primary">{n.lessonTitle}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.body}</p>
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
