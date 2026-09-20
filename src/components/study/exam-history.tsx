"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppStore } from "@/store/app-store";
import { EmptyState, ErrorCard } from "./shared-cards";
import { MiniProgress } from "./progress-widgets";
import { toast } from "sonner";
import {
  ClipboardCheck, GraduationCap, Trophy, BadgeCheck, History, RotateCcw, Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExamHistoryEntry, ExamHistoryStats } from "@/lib/types";

/** Pass marks: full papers 50% (NMC-style), every other test 70% — mirrors quiz-view. */
const PAPER_PASS_MARK = 50;
const TEST_PASS_MARK = 70;

type SetupMode = ExamHistoryEntry["setupMode"];

const MODE_CHIP: Record<SetupMode, { label: string; className: string }> = {
  EXAM: { label: "Paper", className: "border-primary/30 bg-primary/10 text-primary" },
  TIMED: { label: "Timed", className: "border-transparent bg-lav text-secondary-foreground dark:bg-plum/30" },
  QUICK: { label: "Quick", className: "border-transparent bg-sage/25 text-accent-foreground dark:bg-sage/40" },
  WEAK: { label: "Weak topics", className: "border-transparent bg-gold/15 text-foreground/80 dark:bg-gold/20" },
  MIXED: { label: "Mixed", className: "border-transparent bg-gold/15 text-foreground/80 dark:bg-gold/20" },
  PRACTICE: { label: "Practice", className: "border-transparent bg-muted text-muted-foreground" },
};

const CHIP_BASE =
  "inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold leading-none";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "papers", label: "Full papers" },
  { key: "quick", label: "Quick tests" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

interface HistoryData {
  entries: ExamHistoryEntry[];
  stats: ExamHistoryStats;
}

interface TrendDatum {
  idx: number;
  label: string;
  percentage: number;
  score: number;
  total: number;
  dateLabel: string;
  short: string;
}

function passMarkFor(mode: SetupMode): number {
  return mode === "EXAM" ? PAPER_PASS_MARK : TEST_PASS_MARK;
}

/** Download every loaded entry as a CSV (oldest → newest, like the trend chart). */
function exportCsv(entries: ExamHistoryEntry[]) {
  const header = ["Date", "Type", "Label", "Score", "Total", "Percentage", "Seconds per question", "Time taken", "Result"];
  const rows = [...entries].reverse().map((e) => [
    new Date(e.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    MODE_CHIP[e.setupMode].label,
    e.label,
    String(e.score),
    String(e.total),
    `${e.percentage}%`,
    `${e.paceSec}s`,
    fmtDuration(e.timeSec),
    e.percentage >= passMarkFor(e.setupMode) ? "Pass" : "Below pass",
  ]);
  const csv = [header, ...rows]
    .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\r\n");
  // UTF-8 BOM so Excel renders the 💗-free content correctly
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mimies-test-history-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** m:ss (or h:mm:ss for marathon papers) — same shape as quiz-view's fmt(). */
function fmtDuration(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${m}:${String(s).padStart(2, "0")}`;
}

function TrendTooltip({ active, payload }: { active?: boolean; payload?: { payload: TrendDatum }[] }) {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;
  if (!d) return null;
  return (
    <div className="max-w-[190px] rounded-xl border border-border bg-card px-3 py-2 text-xs shadow-sm">
      <p className="truncate font-medium text-foreground">{d.label}</p>
      <p className="mt-0.5 tabular-nums text-muted-foreground">
        {d.score}/{d.total} · <span className="font-semibold text-primary">{d.percentage}%</span>
      </p>
      <p className="mt-0.5 text-[10px] text-muted-foreground">{d.dateLabel}</p>
    </div>
  );
}

function StatChip({
  icon: Icon,
  value,
  label,
  accent,
  delay,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  accent: "blossom" | "lav" | "gold" | "sage";
  delay: number;
}) {
  const reduced = useReducedMotion();
  const accents: Record<string, string> = {
    blossom: "bg-blossom-soft text-primary dark:bg-plum/40 dark:text-lav",
    lav: "bg-lav text-secondary-foreground dark:bg-plum/30",
    gold: "bg-gold/30 text-foreground dark:bg-gold/20",
    sage: "bg-sage text-accent-foreground dark:bg-sage/50",
  };
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduced ? { duration: 0.15 } : { duration: 0.4, delay, ease: "easeOut" }}
      className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-3.5 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transform-none ${accents[accent]}`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold leading-tight tabular-nums text-foreground">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}

/**
 * Test & paper history for the Exam Mode screen.
 * Self-contained: fetches /api/exam/history on mount and owns its filters.
 */
export function ExamHistory() {
  const go = useAppStore((s) => s.go);
  const [data, setData] = useState<HistoryData | null>(null);
  const [failed, setFailed] = useState(false);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [reloadTick, setReloadTick] = useState(0);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch("/api/exam/history", { cache: "no-store", signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as HistoryData;
        setData(json);
      } catch (err) {
        // StrictMode cleanup / unmount — not a real failure
        if ((err as Error)?.name === "AbortError") return;
        setFailed(true);
        toast("Couldn't load your history 💗");
      }
    })();
    return () => controller.abort();
  }, [reloadTick]);

  if (failed) {
    return (
      <ErrorCard
        message="We couldn't load your history just now."
        onRetry={() => {
          setFailed(false);
          setReloadTick((t) => t + 1);
        }}
      />
    );
  }

  if (!data) {
    return (
      <div className="space-y-4" aria-busy="true">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[72px] rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-[264px] rounded-2xl" />
        <div className="flex gap-2">
          <Skeleton className="h-7 w-14 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>
        <Skeleton className="h-20 rounded-2xl" />
        <Skeleton className="h-20 rounded-2xl" />
      </div>
    );
  }

  const { entries, stats } = data;

  if (entries.length === 0) {
    return (
      <EmptyState
        icon={History}
        title="No papers yet"
        hint="Sit your first test from the Sit a test tab — every score lands here 💗"
        action={
          <Button size="sm" className="rounded-full" onClick={() => go({ name: "exam-setup", tab: "test" })}>
            Sit a test
          </Button>
        }
      />
    );
  }

  // oldest → newest for the trend line
  const chartData: TrendDatum[] = [...entries].reverse().map((e, i) => {
    const d = new Date(e.createdAt);
    return {
      idx: i + 1,
      label: e.label,
      percentage: e.percentage,
      score: e.score,
      total: e.total,
      dateLabel: d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }),
      short: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
    };
  });

  const filtered = entries.filter((e) =>
    filter === "papers" ? e.setupMode === "EXAM" : filter === "quick" ? e.setupMode !== "EXAM" : true
  );

  return (
    <div className="space-y-4">
      {/* ── stat chips ── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip icon={ClipboardCheck} value={`${stats.testsSat}`} label="Tests sat" accent="blossom" delay={0} />
        <StatChip icon={GraduationCap} value={`${stats.papersSat}`} label="Full papers" accent="lav" delay={0.05} />
        <StatChip icon={Trophy} value={`${stats.bestPct}%`} label="Best paper" accent="gold" delay={0.1} />
        <StatChip icon={BadgeCheck} value={`${stats.passRate}%`} label="Paper pass rate" accent="sage" delay={0.15} />
      </div>

      {/* ── score trend (needs ≥2 points) ── */}
      {entries.length >= 2 && (
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0.2 } : { duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          <Card className="rounded-2xl border-border/70">
            <CardContent className="p-4 sm:p-5">
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="idx"
                      type="category"
                      interval="preserveStartEnd"
                      tickFormatter={(_v: unknown, i: number) => chartData[i]?.short ?? ""}
                      tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 50, 100]}
                      width={26}
                      tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <ReferenceLine
                      y={PAPER_PASS_MARK}
                      stroke="var(--gold)"
                      strokeDasharray="6 4"
                      label={{ value: "Pass 50%", position: "insideTopRight", fill: "var(--gold)", fontSize: 10 }}
                    />
                    <Tooltip
                      content={<TrendTooltip />}
                      cursor={{ stroke: "var(--muted-foreground)", strokeDasharray: "4 4" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="percentage"
                      stroke="var(--primary)"
                      strokeWidth={2.5}
                      dot={{ r: chartData.length > 20 ? 2 : 3, fill: "var(--primary)", strokeWidth: 0 }}
                      activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
                <p className="text-xs text-muted-foreground">Score trend · last {entries.length} tests</p>
                <span className="inline-flex items-center rounded-full bg-blossom-soft px-2.5 py-0.5 text-[11px] font-medium tabular-nums text-primary dark:bg-plum/40 dark:text-lav">
                  Last 5 average: {stats.lastFiveAvg}%
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* ── filter pills + CSV export ── */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter tests by type">
        {FILTERS.map((f) => {
          const selected = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={selected}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.97] motion-reduce:transform-none",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/70 bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => {
            exportCsv(entries);
            toast("History exported — check your downloads 📁");
          }}
          title="Download all tests as a CSV spreadsheet"
          aria-label="Export test history as CSV"
          className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.97] motion-reduce:transform-none"
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">Export CSV</span>
        </button>
      </div>

      {/* ── history list ── */}
      <div className="max-h-[26rem] space-y-2.5 overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">No tests of that type yet 💗</p>
        ) : (
          filtered.map((e, i) => {
            const d = new Date(e.createdAt);
            const day = String(d.getDate());
            const month = d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
            const passed = e.percentage >= passMarkFor(e.setupMode);
            return (
              <motion.div
                key={e.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduced
                    ? { duration: 0.15 }
                    : { duration: 0.35, delay: Math.min(i * 0.04, 0.48), ease: "easeOut" }
                }
              >
                <Card className="rounded-2xl border-border/70 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10">
                  <CardContent className="flex items-center gap-3 p-3.5 sm:p-4">
                    {/* date tile */}
                    <div
                      className="flex w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-muted/60 px-1 py-1.5"
                      aria-hidden
                    >
                      <span className="font-display text-lg font-semibold leading-none text-foreground">{day}</span>
                      <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {month}
                      </span>
                    </div>

                    {/* type chip + label + meta */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className={cn(CHIP_BASE, MODE_CHIP[e.setupMode].className)}>
                          {MODE_CHIP[e.setupMode].label}
                        </span>
                        <p className="min-w-0 flex-1 truncate text-sm font-medium text-foreground" title={e.label}>
                          {e.label}
                        </p>
                      </div>
                      <p className="mt-1 text-xs tabular-nums text-muted-foreground">
                        <span className="sr-only">
                          {d.toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                          {" · "}
                        </span>
                        {e.score}/{e.total} · {e.paceSec}s per question · {fmtDuration(e.timeSec)}
                      </p>
                    </div>

                    {/* score readout + retry */}
                    <div className="flex shrink-0 items-center gap-2">
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-display text-lg font-semibold leading-none tabular-nums text-foreground">
                          {e.percentage}%
                        </span>
                        <div className="w-24">
                          <MiniProgress value={e.percentage} tone={passed ? "brand" : "gold"} />
                        </div>
                        {e.setupMode === "EXAM" && (
                          <div
                            className={cn(
                              "stamp w-24 origin-right scale-[0.55] select-none text-center",
                              passed ? "text-accent-foreground" : "text-destructive"
                            )}
                            role="img"
                            aria-label={
                              passed
                                ? `Pass — ${e.percentage}% against the 50% pass mark`
                                : `Below pass — ${e.percentage}% against the 50% pass mark`
                            }
                          >
                            {passed ? "Pass" : "Below pass"}
                          </div>
                        )}
                      </div>
                      {e.setup && (
                        <button
                          type="button"
                          onClick={() =>
                            go({
                              name: "exam-setup",
                              tab: "test",
                              retry: { ...e.setup!, attemptId: e.id, createdAt: e.createdAt, label: e.label },
                            })
                          }
                          title={`Retry this ${e.setupMode === "EXAM" ? "paper" : "test"} — same settings, fresh questions`}
                          aria-label={`Retry this ${e.setupMode === "EXAM" ? "paper" : "test"} — ${e.label}, ${e.percentage}%`}
                          className="group/retry flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-all duration-300 hover:rotate-[-24deg] hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 motion-reduce:transition-none motion-reduce:hover:rotate-0"
                        >
                          <RotateCcw className="h-4 w-4 transition-transform duration-300 group-hover/retry:-scale-x-100 motion-reduce:transform-none" aria-hidden />
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
