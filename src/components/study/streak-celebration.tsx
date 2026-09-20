"use client";

import { useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Streak counts that earn a one-time celebration (per browser). */
export const STREAK_MILESTONES = [3, 7, 14, 30, 50, 100];

/** localStorage key remembering the last celebrated milestone. */
export const STREAK_CELEBRATION_KEY = "mimie-streak-celebrated";

const MILESTONE_MESSAGES: Record<number, string> = {
  3: "Three days of showing up — that's how midwives are made.",
  7: "A full week! Your future patients are lucky to have you.",
  14: "Two weeks of steady fire — you're building real momentum.",
  30: "One whole month! This is dedication most people only dream of.",
  50: "Fifty days strong — your consistency is becoming clinical instinct.",
  100: "One hundred days! This is the making of a truly dedicated midwife.",
};

/**
 * Full-screen celebration overlay for streak milestones.
 * On dismiss it records the milestone in localStorage so it only ever shows once per browser.
 */
export function StreakCelebration({ streak, onDismiss }: { streak: number; onDismiss: () => void }) {
  const reduceMotion = useReducedMotion();

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STREAK_CELEBRATION_KEY, String(streak));
    } catch {
      // storage unavailable — the celebration just won't be remembered
    }
    onDismiss();
  }, [streak, onDismiss]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dismiss]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Streak celebration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={dismiss}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={reduceMotion ? { opacity: 0 } : { scale: 0.8, opacity: 0 }}
        animate={reduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={reduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-primary/25 bg-card p-8 text-center shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 to-plum/10" aria-hidden />
        <div className="relative">
          <motion.div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/15"
            animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], rotate: [-4, 4, -4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flame className="h-10 w-10 text-amber-600 dark:text-amber-400" aria-hidden />
          </motion.div>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground">
            {streak}-Day Streak!
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
            {MILESTONE_MESSAGES[streak] ?? "Keep showing up — consistency is your superpower."}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Keep the flame alive — study today to make it {streak + 1}.
          </p>
          <Button onClick={dismiss} className="mt-6 rounded-full bg-primary px-6 text-primary-foreground hover:opacity-95">
            Keep going 💗
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
