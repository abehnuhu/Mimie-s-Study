"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  hint,
  action,
}: {
  icon: LucideIcon;
  title: string;
  hint: string;
  action?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-card/60 px-6 py-12 text-center"
    >
      {/* soft brand wash + corner dots */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blossom-soft/40 via-transparent to-lav/30 dark:from-plum/20 dark:via-transparent dark:to-plum/10"
        aria-hidden
      />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-soft text-primary shadow-sm motion-safe:animate-icon-float dark:bg-plum/40">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <p className="relative font-display text-lg font-semibold text-foreground">{title}</p>
      <p className="relative mt-1 max-w-sm text-sm text-muted-foreground">{hint}</p>
      {action && <div className="relative mt-5">{action}</div>}
    </motion.div>
  );
}

export function StatCard({
  icon: Icon,
  value,
  label,
  accent,
  pulse,
}: {
  icon: LucideIcon;
  value: string | number;
  label: string;
  accent?: "blossom" | "lav" | "sage" | "gold" | "plum";
  pulse?: boolean;
}) {
  const accents: Record<string, string> = {
    blossom: "bg-blossom-soft text-primary dark:bg-plum/40 dark:text-lav",
    lav: "bg-lav text-secondary-foreground dark:bg-plum/30",
    sage: "bg-sage text-accent-foreground dark:bg-sage/50",
    gold: "bg-gold/30 text-foreground dark:bg-gold/20",
    plum: "bg-plum/15 text-plum dark:text-lav",
  };
  // hairline top-bar tint per accent — a small detail that ties the row together
  const hairlines: Record<string, string> = {
    blossom: "from-primary/50 to-transparent",
    lav: "from-chart-2/50 to-transparent",
    sage: "from-sage/70 to-transparent",
    gold: "from-gold/70 to-transparent",
    plum: "from-plum/60 to-transparent",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card p-3.5 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${hairlines[accent ?? "blossom"]}`}
        aria-hidden
      />
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transform-none ${accents[accent ?? "blossom"]}`}
      >
        <Icon className={`h-5 w-5 ${pulse ? "motion-safe:animate-pulse" : ""}`} aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-lg font-semibold leading-tight text-foreground">{value}</p>
        <p className="text-[11px] leading-snug text-muted-foreground [overflow-wrap:anywhere]">{label}</p>
      </div>
    </motion.div>
  );
}

export function SectionHeading({
  title,
  sub,
  icon: Icon,
}: {
  title: string;
  sub?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-3 flex items-baseline gap-2">
      {Icon && <Icon className="h-4 w-4 self-center text-primary" aria-hidden />}
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      {sub && <span className="text-sm text-muted-foreground">· {sub}</span>}
    </div>
  );
}

export function ErrorCard({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center">
      <p className="font-medium text-foreground">{message}</p>
      <p className="mt-1 text-sm text-muted-foreground">Your progress is safe. Nothing was lost 💗</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Try again
        </button>
      )}
    </div>
  );
}
