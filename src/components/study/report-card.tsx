"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useAppStore } from "@/store/app-store";
import { Printer, FileText, RefreshCw, Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReportCardData } from "@/lib/types";

/** Range presets — from is computed back from today. */
const PRESETS = [
  { key: "30", label: "Last 30 days", days: 30 },
  { key: "90", label: "Last 90 days", days: 90 },
  { key: "all", label: "All time", days: 730 },
] as const;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDay(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function fmtDayShort(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function fmtMinutes(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

const TYPE_LABEL: Record<ReportCardData["tests"][number]["type"], string> = {
  EXAM: "Paper",
  TIMED: "Timed",
  QUICK: "Quick",
  WEAK: "Weak topics",
  MIXED: "Mixed",
  PRACTICE: "Practice",
};

/* ──────────────────────────────────────────────────────────── */

/**
 * "Report card" entry point — button + dialog with range picker,
 * preview stats and a print portal (A4 report card for tutors).
 */
type PresetKey = (typeof PRESETS)[number]["key"] | "custom";

export function ReportCardButton() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<PresetKey>("30");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [data, setData] = useState<ReportCardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [printJob, setPrintJob] = useState<ReportCardData | null>(null);
  const [copied, setCopied] = useState(false);

  // consume a shared deep link (?report=…) — opens the dialog straight onto that range
  const openReportRange = useAppStore((s) => s.openReportRange);
  const setReportRange = useAppStore((s) => s.setReportRange);
  useEffect(() => {
    if (!openReportRange) return;
    setReportRange(null);
    if (openReportRange.all) {
      setPreset("all");
    } else if (openReportRange.from && openReportRange.to) {
      setPreset("custom");
      setCustomFrom(openReportRange.from);
      setCustomTo(openReportRange.to);
    }
    setOpen(true);
  }, [openReportRange, setReportRange]);

  // resolve the query params for the fetch
  const range = preset === "all"
    ? { all: "1" }
    : preset === "30" || preset === "90"
      ? (() => {
          const days = preset === "30" ? 30 : 90;
          const to = new Date();
          const from = new Date(to.getTime() - (days - 1) * 86400000);
          return { from: from.toISOString().slice(0, 10), to: to.toISOString().slice(0, 10) };
        })()
      : { from: customFrom, to: customTo };

  const ready = preset !== "custom" || Boolean(customFrom && customTo);

  useEffect(() => {
    if (!open || !ready) return;
    const controller = new AbortController();
    (async () => {
      setLoading(true);
      setFailed(false);
      try {
        const params = new URLSearchParams();
        const r = range as { from?: string; to?: string; all?: string };
        if (r.from) params.set("from", r.from);
        if (r.to) params.set("to", r.to);
        if (r.all) params.set("all", r.all);
        const res = await fetch(`/api/progress/report?${params}`, { cache: "no-store", signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as ReportCardData;
        setData(json);
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
        setFailed(true);
        setData(null);
        toast("Couldn't build the report card 💗");
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [open, preset, customFrom, customTo]);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={() => setOpen(true)}
      >
        <FileText className="h-4 w-4" aria-hidden />
        Report card
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-2xl sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" aria-hidden />
              Report card
            </DialogTitle>
            <DialogDescription>
              A printable summary of study time, test scores and topics — lovely for tutors 💗
            </DialogDescription>
          </DialogHeader>

          {/* range picker */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Report date range">
              {PRESETS.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  role="radio"
                  aria-checked={preset === p.key}
                  onClick={() => setPreset(p.key)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.97] motion-reduce:transform-none",
                    preset === p.key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  {p.label}
                </button>
              ))}
              <button
                type="button"
                role="radio"
                aria-checked={preset === "custom"}
                onClick={() => setPreset("custom")}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.97] motion-reduce:transform-none",
                  preset === "custom"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                Custom
              </button>
            </div>

            {preset === "custom" && (
              <div className="grid grid-cols-2 gap-3">
                <label className="block space-y-1.5">
                  <span className="text-xs font-medium text-muted-foreground">From</span>
                  <Input
                    type="date"
                    value={customFrom}
                    max={customTo || undefined}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    className="rounded-xl"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-xs font-medium text-muted-foreground">To</span>
                  <Input
                    type="date"
                    value={customTo}
                    min={customFrom || undefined}
                    onChange={(e) => setCustomTo(e.target.value)}
                    className="rounded-xl"
                  />
                </label>
              </div>
            )}
          </div>

          {/* preview */}
          <div aria-live="polite">
            {loading && (
              <div className="space-y-2.5" aria-busy="true">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-14 rounded-xl" />)}
                </div>
                <Skeleton className="h-6 w-40 rounded-full" />
              </div>
            )}
            {!loading && failed && (
              <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                We couldn&apos;t build the report just now — try a different range 💗
              </p>
            )}
            {!loading && !failed && data && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">
                  {fmtDay(data.range.from)} → {fmtDay(data.range.to)} · {data.range.days} days
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { v: fmtMinutes(data.study.minutes), l: "Studied" },
                    { v: `${data.study.activeDays}`, l: "Active days" },
                    { v: `${data.study.lessons}`, l: "Lessons" },
                    { v: `${data.tests.length}`, l: "Tests sat" },
                    { v: data.avgScore !== null ? `${data.avgScore}%` : "—", l: "Avg score" },
                    { v: `+${data.study.xp}`, l: "XP earned" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-border/70 bg-muted/40 px-2.5 py-2 text-center">
                      <p className="font-display text-base font-semibold tabular-nums text-foreground">{s.v}</p>
                      <p className="text-[10px] text-muted-foreground">{s.l}</p>
                    </div>
                  ))}
                </div>
                {data.study.bestDay && data.study.bestDay.minutes > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Best day: <span className="font-medium text-foreground">{fmtDayShort(data.study.bestDay.date)}</span> · {fmtMinutes(data.study.bestDay.minutes)}
                  </p>
                )}
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
                  onClick={() => {
                    setPrintJob(data);
                    toast("Opening print preview… 🖨️");
                  }}
                >
                  <Printer className="h-4 w-4" aria-hidden />
                  Print report card
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  onClick={async () => {
                    // shareable deep link — reopens this exact range on anyone's Progress tab
                    const r = range as { from?: string; to?: string; all?: string };
                    const param =
                      preset === "all"
                        ? "all"
                        : preset === "custom"
                          ? `${customFrom}|${customTo}`
                          : r.from && r.to
                            ? `${r.from}|${r.to}`
                            : null;
                    if (!param) {
                      toast("Pick a full range first 💗");
                      return;
                    }
                    const url = `${window.location.origin}${window.location.pathname}?report=${encodeURIComponent(param)}`;
                    try {
                      await navigator.clipboard.writeText(url);
                    } catch {
                      // clipboard blocked — fall back to the legacy path
                      const ta = document.createElement("textarea");
                      ta.value = url;
                      document.body.appendChild(ta);
                      ta.select();
                      document.execCommand("copy");
                      document.body.removeChild(ta);
                    }
                    setCopied(true);
                    window.setTimeout(() => setCopied(false), 1800);
                    toast("Share link copied 💗", {
                      description: "Opens straight onto this report for whoever signs in on that device.",
                    });
                  }}
                >
                  {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
                  {copied ? "Copied!" : "Copy share link"}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {printJob && <ReportCardPrint job={printJob} onDone={() => setPrintJob(null)} />}
    </>
  );
}

/* ──────────────────────────────────────────────────────────── */

/** Print-only report card, rendered into <body> via a portal (like the exam paper). */
function ReportCardPrint({ job, onDone }: { job: ReportCardData; onDone: () => void }) {
  const [host] = useState<HTMLDivElement | null>(() => {
    if (typeof document === "undefined") return null;
    const el = document.createElement("div");
    el.id = "report-print-portal";
    return el;
  });
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!host) return;
    document.body.appendChild(host);
    document.body.dataset.reportPrint = "on";

    // let the portal paint before opening the print dialog
    const t = window.setTimeout(() => window.print(), 200);

    const finish = () => {
      window.setTimeout(() => onDoneRef.current(), 50);
    };
    window.addEventListener("afterprint", finish);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("afterprint", finish);
      delete document.body.dataset.reportPrint;
      if (host.parentNode) host.parentNode.removeChild(host);
    };
  }, [host]);

  if (!host) return null;

  const d = job;
  const student = d.student.nickname || d.student.name;
  const passMark = (t: ReportCardData["tests"][number]) => t.percentage >= (t.type === "EXAM" ? 50 : 70);

  // group the activity strip into weeks when the range is long
  const byWeek = d.range.days > 45;
  const bars: { label: string; minutes: number }[] = (() => {
    if (!byWeek) {
      return d.activity.map((a) => ({ label: "", minutes: a.minutes }));
    }
    const weeks = new Map<number, { sum: number; count: number; start: number }>();
    for (const a of d.activity) {
      const t = Date.parse(a.date + "T00:00:00Z");
      const week = Math.floor(t / (7 * 86400000));
      const cur = weeks.get(week) ?? { sum: 0, count: 0, start: t };
      cur.sum += a.minutes;
      cur.count += 1;
      weeks.set(week, cur);
    }
    return Array.from(weeks.values()).sort((x, y) => x.start - y.start).map((w) => ({
      label: fmtDayShort(new Date(w.start).toISOString()),
      minutes: Math.round(w.sum / Math.max(1, w.count)), // average per day keeps weeks comparable
    }));
  })();
  const maxBar = Math.max(1, ...bars.map((b) => b.minutes));

  return createPortal(
    <div className="print-sheet" style={{ background: "#ffffff", color: "#241d20" }}>
      {/* ── header ── */}
      <div className="flex items-baseline justify-between">
        <p style={{ fontSize: "8.5pt", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8d4f6b", fontWeight: 700 }}>
          Mimie&apos;s Study · Midwifery Academy
        </p>
        <p style={{ fontSize: "8.5pt", color: "#4a3f45", fontVariantNumeric: "tabular-nums" }}>
          RC/{d.range.from.replace(/-/g, "")}–{d.range.to.replace(/-/g, "")}
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "0.9rem" }}>
        <h1 className="font-display" style={{ fontSize: "17pt", fontWeight: 800, margin: 0 }}>
          Progress Report Card
        </h1>
        <p style={{ fontSize: "10.5pt", color: "#4a3f45", margin: "0.25rem 0 0" }}>
          {student} · Year {d.student.year}, Semester {d.student.semester}
        </p>
        <p style={{ fontSize: "9pt", color: "#6b5e64", margin: "0.15rem 0 0", fontVariantNumeric: "tabular-nums" }}>
          {fmtDay(d.range.from)} → {fmtDay(d.range.to)} · {d.range.days} days
        </p>
      </div>
      <hr className="paper-brand-rule" />

      {/* ── summary boxes ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.35rem", marginTop: "0.6rem" }}>
        {[
          { v: fmtMinutes(d.study.minutes), l: "Time studied" },
          { v: `${d.study.activeDays} / ${d.range.days}`, l: "Active days" },
          { v: `${d.study.avgPerActiveDay} min`, l: "Avg per active day" },
          { v: `+${d.study.xp} XP`, l: "XP earned" },
          { v: `${d.study.lessons}`, l: "Lessons completed" },
          { v: `${d.study.quizzes}`, l: "Quizzes attempted" },
          { v: `${d.study.games}`, l: "Games played" },
          { v: d.avgScore !== null ? `${d.avgScore}%` : "—", l: "Average test score" },
        ].map((s) => (
          <div key={s.l} className="print-rose" style={{ borderRadius: "4pt", padding: "0.4rem 0.45rem", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "11.5pt", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{s.v}</p>
            <p style={{ margin: 0, fontSize: "7.5pt", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.l}</p>
          </div>
        ))}
      </div>

      {/* ── study rhythm ── */}
      {bars.length > 0 && (
        <div className="print-break" style={{ marginTop: "0.75rem" }}>
          <p style={{ margin: "0 0 0.3rem", fontSize: "10pt", fontWeight: 800 }}>
            Study rhythm {byWeek ? "(avg minutes per day, by week)" : "(minutes per day)"}
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2pt", height: "52pt", borderBottom: "1pt solid #c9b6c0", paddingBottom: "2pt" }}>
            {bars.map((b, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    height: `${Math.max(b.minutes > 0 ? 6 : 2, Math.round((b.minutes / maxBar) * 100))}%`,
                    background: b.minutes > 0 ? "#d4738c" : "#eee5ea",
                    borderRadius: "1.5pt 1.5pt 0 0",
                  }}
                  title={`${b.minutes} min`}
                />
              </div>
            ))}
          </div>
          {byWeek && (
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2pt" }}>
              <p style={{ margin: 0, fontSize: "7pt", color: "#6b5e64" }}>{bars[0]?.label}</p>
              <p style={{ margin: 0, fontSize: "7pt", color: "#6b5e64" }}>{bars[bars.length - 1]?.label}</p>
            </div>
          )}
          {d.study.bestDay && d.study.bestDay.minutes > 0 && (
            <p style={{ margin: "0.3rem 0 0", fontSize: "8.5pt", color: "#4a3f45" }}>
              Best day: {fmtDay(d.study.bestDay.date)} · {fmtMinutes(d.study.bestDay.minutes)} — consistency over intensity, always.
            </p>
          )}
        </div>
      )}

      {/* ── test results ── */}
      {d.tests.length > 0 && (
        <div className="print-break" style={{ marginTop: "0.75rem" }}>
          <p style={{ margin: "0 0 0.3rem", fontSize: "10pt", fontWeight: 800 }}>
            Tests &amp; papers sat ({d.tests.length})
            {d.papersSat > 0 && <span style={{ fontWeight: 400, color: "#4a3f45" }}> · {d.papersSat} full paper{d.papersSat === 1 ? "" : "s"}</span>}
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9pt" }}>
            <thead>
              <tr style={{ borderBottom: "1.2pt solid #8d4f6b" }}>
                <th style={{ textAlign: "left", padding: "2pt 3pt", fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.06em" }}>Date</th>
                <th style={{ textAlign: "left", padding: "2pt 3pt", fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.06em" }}>Type</th>
                <th style={{ textAlign: "left", padding: "2pt 3pt", fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.06em" }}>Test</th>
                <th style={{ textAlign: "right", padding: "2pt 3pt", fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.06em" }}>Score</th>
                <th style={{ textAlign: "right", padding: "2pt 3pt", fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.06em" }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {[...d.tests].reverse().map((t, i) => (
                <tr key={i} style={{ borderBottom: "0.5pt solid #e4dcdb" }}>
                  <td style={{ padding: "2.2pt 3pt", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{fmtDayShort(t.date)}</td>
                  <td style={{ padding: "2.2pt 3pt" }}>{TYPE_LABEL[t.type]}</td>
                  <td style={{ padding: "2.2pt 3pt", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "200pt" }}>{t.label}</td>
                  <td style={{ padding: "2.2pt 3pt", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{t.score}/{t.total} · {t.percentage}%</td>
                  <td style={{ padding: "2.2pt 3pt", textAlign: "right", fontWeight: 700, color: passMark(t) ? "#3e6b4f" : "#a35434" }}>
                    {passMark(t) ? "Pass" : "Below"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── topics ── */}
      <div style={{ display: "grid", gridTemplateColumns: d.topics.weak.length > 0 ? "1fr 1fr" : "1fr", gap: "0.45rem", marginTop: "0.75rem" }} className="print-break">
        {d.topics.strong.length > 0 && (
          <div className="print-lav" style={{ borderRadius: "4pt", padding: "0.45rem 0.55rem" }}>
            <p style={{ margin: "0 0 0.25rem", fontSize: "8.5pt", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Confident topics
            </p>
            {d.topics.strong.map((t) => (
              <p key={t.topic} style={{ margin: "0.1rem 0", fontSize: "9pt", display: "flex", justifyContent: "space-between", gap: "0.4rem" }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.topic}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>{t.accuracy}%</span>
              </p>
            ))}
          </div>
        )}
        {d.topics.weak.length > 0 && (
          <div className="print-rose" style={{ borderRadius: "4pt", padding: "0.45rem 0.55rem" }}>
            <p style={{ margin: "0 0 0.25rem", fontSize: "8.5pt", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Needs a little love
            </p>
            {d.topics.weak.map((t) => (
              <p key={t.topic} style={{ margin: "0.1rem 0", fontSize: "9pt", display: "flex", justifyContent: "space-between", gap: "0.4rem" }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.topic}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>{t.accuracy}%</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* ── badges + streak + exam ── */}
      <div style={{ marginTop: "0.75rem" }} className="print-break">
        <p style={{ margin: "0 0 0.25rem", fontSize: "10pt", fontWeight: 800 }}>Recognition</p>
        <p style={{ margin: 0, fontSize: "9pt" }}>
          Streak: <strong>{d.streak.current} days</strong> (longest {d.streak.longest})
          {d.badges.length > 0 && (
            <>
              {" "}· Badges earned in this period:{" "}
              <strong>{d.badges.map((b) => b.title).join(", ")}</strong>
            </>
          )}
        </p>
        {d.exam && (
          <p style={{ margin: "0.25rem 0 0", fontSize: "9pt" }}>
            Final exam: <strong>{fmtDay(d.exam.date)}</strong> — {d.exam.daysLeft >= 0 ? `${d.exam.daysLeft} days away` : "passed"}.
          </p>
        )}
      </div>

      {/* ── signature block ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", marginTop: "1.4rem" }} className="print-break">
        {["Student", "Tutor"].map((role) => (
          <div key={role}>
            <div style={{ borderBottom: "1pt solid #4a3f45", height: "1.6rem" }} />
            <p style={{ margin: "0.15rem 0 0", fontSize: "8pt", color: "#6b5e64", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {role} signature · date
            </p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "0.9rem", textAlign: "center", fontSize: "8.5pt", color: "#6b5e64", fontStyle: "italic" }}>
        “Consistency over intensity — gentle counts.” · Generated {fmtDay(d.generatedAt)} by Mimie&apos;s Study
      </p>
    </div>,
    host
  );
}
