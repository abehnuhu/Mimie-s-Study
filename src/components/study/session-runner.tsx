"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { SmartPlanRow } from "@/lib/types";
import {
  CheckCircle2, SkipForward, X, RefreshCcw, BookOpen, Target,
  FileText, Gamepad2, Zap, Heart, ArrowRight, Sparkles,
} from "lucide-react";

const STEP_ICONS: Record<SmartPlanRow["kind"], typeof Target> = {
  review: RefreshCcw,
  lesson: BookOpen,
  drill: Target,
  mock: FileText,
  activity: Gamepad2,
  quiz: Zap,
};

/** Identity of a plan row for auto-done matching (drills are per-topic). */
function stepKey(r: SmartPlanRow): string {
  return r.kind === "drill" ? `drill:${r.topic}` : r.kind;
}

/**
 * "Start my session" runner — a floating workout bar that walks the smart
 * plan step by step: navigate in, do the thing, tap "Done", roll on.
 * Ends with a confetti summary (steps, minutes, XP earned during it).
 */
export function SessionRunner() {
  const { session, sessionAdvance, sessionExit, go, refreshBootstrap, triggerConfetti } = useAppStore();
  const [xpEarned, setXpEarned] = useState<number | null>(null);
  const celebratedRef = useRef(false);
  /** which step index was auto-checked — auto-checks self-clear when the index moves on. */
  const [autoCheckedFor, setAutoCheckedFor] = useState(-1);
  /** index we already auto-advanced — never fire twice for the same step. */
  const lastAutoRef = useRef(-1);

  const current = session && session.index < session.steps.length ? session.steps[session.index] : null;
  const finished = session !== null && session.index >= session.steps.length;
  /** true while the current step has been auto-checked (sage glow, rolling on). */
  const autoChecked = session !== null && autoCheckedFor === session.index;

  // mark the body while a session is live — shifts top-center toasts below the bar
  // (the runner itself stays mounted, so tie the attribute to session presence)
  const sessionLive = session !== null;
  useEffect(() => {
    if (!sessionLive) return;
    document.body.dataset.session = "on";
    return () => {
      delete document.body.dataset.session;
    };
  }, [sessionLive]);

  // navigate to the current step's view whenever the step changes
  const index = session?.index ?? -1;
  useEffect(() => {
    if (!session || !current) return;
    if (current.view) go(current.view);
    toast(`Step ${session.index + 1} of ${session.steps.length} — ${current.row.label}`, {
      description: current.row.why,
    });
  }, [index]);

  // ── auto-detect: watch the live plan and roll on when the step is done server-side ──
  // Checks shortly after each step starts (catches actions finished just before),
  // then every 15s while the tab is visible. Matching: drills per-topic, others per-kind.
  useEffect(() => {
    if (!session || !current || finished) return;
    const myIndex = session.index;
    if (lastAutoRef.current === myIndex) return; // already auto-advanced this step
    let cancelled = false;

    const check = async () => {
      if (cancelled || document.visibilityState !== "visible") return;
      try {
        const res = await fetch("/api/plan", { cache: "no-store" });
        if (!res.ok) return;
        const plan = (await res.json()) as { rows?: SmartPlanRow[] };
        const key = stepKey(current.row);
        const match = plan.rows?.find((r) => stepKey(r) === key);
        if (!match?.done) return;
        if (cancelled || lastAutoRef.current === myIndex) return;
        lastAutoRef.current = myIndex;
        setAutoCheckedFor(myIndex);
        toast("Checked off for you 💗", {
          description: `${current.row.label} — done. Rolling on…`,
        });
        window.setTimeout(() => {
          if (cancelled) return;
          refreshBootstrap();
          sessionAdvance();
        }, 1900);
      } catch {
        // plan check is best-effort — the manual Done button always works
      }
    };

    const early = window.setTimeout(check, 3200);
    const iv = window.setInterval(check, 15000);
    return () => {
      cancelled = true;
      window.clearTimeout(early);
      window.clearInterval(iv);
    };
  }, [index, sessionLive]);

  // on completion: refresh stats once, confetti, compute the XP delta
  useEffect(() => {
    if (!finished || !session) return;
    if (celebratedRef.current) return;
    celebratedRef.current = true;
    triggerConfetti(140);
    (async () => {
      await refreshBootstrap();
      const s = useAppStore.getState().session;
      const total = useAppStore.getState().bootstrap?.xp.total ?? session.startedXp;
      if (s) setXpEarned(Math.max(0, total - s.startedXp));
    })();
  }, [finished]);

  const minutesDone = useMemo(() => {
    if (!session) return 0;
    return session.steps.slice(0, session.index).reduce((s, st) => s + st.row.minutes, 0);
  }, [session]);

  if (!session) return null;

  // ── completion celebration ──
  if (finished) {
    const stepsDone = session.steps.length - session.skipped;
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm print:hidden"
          role="dialog"
          aria-label="Session complete"
        >
          <motion.div
            initial={{ scale: 0.92, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-primary/30 bg-card p-6 text-center shadow-2xl shadow-primary/20"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blossom-soft/70 to-transparent dark:from-plum/25" aria-hidden />
            <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-lg shadow-primary/30">
              <Heart className="h-6 w-6 fill-current" aria-hidden />
            </div>
            <h2 className="relative mt-4 font-display text-2xl font-semibold text-foreground">
              Session complete 💗
            </h2>
            <p className="relative mt-1 text-sm text-muted-foreground">
              You walked the whole plan — gently, step by step.
            </p>

            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {[
                { v: `${stepsDone}`, l: "steps done" },
                { v: `~${minutesDone}`, l: "minutes" },
                { v: xpEarned === null ? "…" : `+${xpEarned}`, l: "XP earned" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border/70 bg-muted/40 px-2 py-2.5">
                  <p className="font-display text-lg font-semibold tabular-nums text-foreground">{s.v}</p>
                  <p className="text-[10px] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex gap-2">
              <Button
                className="flex-1 rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-lg shadow-primary/25"
                onClick={() => {
                  sessionExit();
                  go({ name: "dashboard" });
                }}
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
                Back to dashboard
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  sessionExit();
                  refreshBootstrap();
                }}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!current) return null;

  // ── active step bar ──
  const Icon = STEP_ICONS[current.row.kind] ?? Target;
  const total = session.steps.length;
  const isLast = session.index === total - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        role="region"
        aria-label={`Guided session — step ${session.index + 1} of ${total}: ${current.row.label}`}
        className="fixed left-1/2 top-[74px] z-40 w-[min(600px,calc(100vw-20px))] -translate-x-1/2 lg:top-4 print:hidden"
      >
        <div
          className={cn(
            "glass rounded-2xl border p-3 shadow-xl transition-colors duration-500",
            autoChecked
              ? "border-sage/70 shadow-sage/20"
              : "border-primary/35 shadow-primary/15"
          )}
        >
          {/* step segments */}
          <div className="mb-2 flex items-center gap-1" aria-hidden>
            {session.steps.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-300",
                  i < session.index || (autoChecked && i === session.index)
                    ? "bg-sage"
                    : i === session.index
                      ? "bg-gradient-to-r from-primary to-plum"
                      : "bg-muted"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-md transition-colors duration-500",
                autoChecked
                  ? "auto-check-pulse bg-sage text-accent-foreground shadow-sage/30"
                  : "bg-gradient-to-br from-primary to-plum shadow-primary/25"
              )}
            >
              {autoChecked ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <Icon className="h-4 w-4" aria-hidden />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-semibold text-foreground">
                <span className="text-primary">{session.index + 1}/{total}</span>
                {" · "}
                {current.row.label}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">
                {autoChecked ? (
                  <span className="inline-flex items-center gap-1 font-semibold text-accent-foreground">
                    <Sparkles className="h-3 w-3" aria-hidden /> Auto-checked — nice work 💗
                  </span>
                ) : isLast ? (
                  "Last one — finish strong 💗"
                ) : (
                  <>
                    <span className="hidden sm:inline">Up next: {session.steps[session.index + 1]?.row.label ?? ""} · </span>
                    ~{current.row.minutes} min
                  </>
                )}
              </p>
            </div>
            {autoChecked ? (
              <span
                className="shrink-0 animate-pulse rounded-full border border-sage/50 bg-sage/20 px-3.5 py-1.5 text-xs font-semibold text-accent-foreground"
                aria-live="polite"
              >
                Rolling on…
              </span>
            ) : (
              <Button
                size="sm"
                className="shrink-0 rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-md shadow-primary/25 hover:opacity-95"
                onClick={() => sessionAdvance()}
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Done{isLast ? " · finish" : " · next"}</span>
                <span className="sm:hidden">Next</span>
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="shrink-0 rounded-full px-2 text-muted-foreground"
              onClick={() => sessionAdvance(true)}
              aria-label="Skip this step"
              title="Skip this step"
            >
              <SkipForward className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="shrink-0 rounded-full px-2 text-muted-foreground"
              onClick={() => {
                sessionExit();
                toast("Session saved for later 💗", { description: "Pick it up again from your plan whenever you like." });
              }}
              aria-label="Exit session"
              title="Exit session"
            >
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
