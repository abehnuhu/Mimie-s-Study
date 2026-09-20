"use client";

import { motion } from "framer-motion";

export function ProgressRing({
  value,
  size = 84,
  strokeWidth = 8,
  label,
  sub,
}: {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sub?: string;
}) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value));
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" role="img" aria-label={`${label ?? "Progress"}: ${pct}%`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-muted"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="stroke-primary"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-lg font-semibold leading-none text-foreground">
          {label ?? `${pct}%`}
        </span>
        {sub && <span className="mt-0.5 text-[10px] text-muted-foreground">{sub}</span>}
      </div>
    </div>
  );
}

export function XpBar({ xp, level }: { xp: number; level: number }) {
  const nextAt = level * level * 100;
  const prevAt = (level - 1) * (level - 1) * 100;
  const pct = Math.min(100, Math.round(((xp - prevAt) / Math.max(1, nextAt - prevAt)) * 100));
  return (
    <div className="w-full" aria-label={`Level ${level}, ${xp} XP`}>
      <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Level {level}</span>
        <span>
          {xp} / {nextAt} XP
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <motion.div
          className="shimmer h-full rounded-full bg-gradient-to-r from-primary to-plum"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function MiniProgress({
  value,
  className,
  tone = "brand",
}: {
  value: number;
  className?: string;
  tone?: "brand" | "gold";
}) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-muted ${className ?? ""}`}>
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${
          tone === "gold" ? "from-gold to-chart-4" : "from-primary to-chart-2"
        }`}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
}
