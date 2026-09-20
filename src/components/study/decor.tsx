"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";

export function HeartbeatLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M0 30 H70 L82 30 L88 12 L96 48 L104 30 H150 L160 30 L166 18 L172 44 L178 30 H230 L240 30 L246 14 L252 46 L258 30 H300"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-line"
        opacity="0.85"
      />
    </svg>
  );
}

export function ConfettiLayer() {
  const confetti = useAppStore((s) => s.confetti);
  if (confetti.length === 0) return null;
  return (
    <div aria-hidden="true">
      {confetti.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            borderRadius: p.id % 3 === 0 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-10 top-16 h-24 w-24 rounded-full bg-blossom/20 blur-2xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-8 bottom-24 h-16 w-16 rounded-full bg-lav/50 blur-xl"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 h-10 w-10 rounded-full bg-sage/40 blur-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  );
}
