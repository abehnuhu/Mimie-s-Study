"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { clinicalPrioritySets } from "@/lib/game-content";
import { CheckCircle2, Siren } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriorityGame() {
  const [order, setOrder] = useState(() => shuffle(clinicalPrioritySets));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const set = order[idx];
  const result: GameResult | null = finished ? { score: Math.round((score / order.length) * 100) } : null;

  function pick(i: number) {
    if (picked !== null || !set) return;
    const correct = set.findings[i].urgent;
    if (correct) setScore((s) => s + 1);
    setPicked(i);
    setTimeout(() => {
      setPicked(null);
      if (idx + 1 >= order.length) setFinished(true);
      else setIdx((v) => v + 1);
    }, 2600);
  }

  function restart() {
    setOrder(shuffle(clinicalPrioritySets));
    setIdx(0); setScore(0); setPicked(null); setFinished(false);
  }

  return (
    <GameShell
      slug="clinical-priority"
      title="Clinical Priority"
      description="Four findings. One needs you first. Choose fast."
      icon="AlertTriangle"
      onRestart={restart}
      result={result}
    >
      {set && !finished && (
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/70 bg-card p-6">
          <p className="text-xs text-muted-foreground">Round {idx + 1} of {order.length} · {score} correct</p>
          <p className="mt-2 flex items-start gap-2 font-display text-lg font-semibold leading-relaxed text-foreground">
            <Siren className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
            {set.scenario}
          </p>

          <div className="mt-5 space-y-2.5">
            {set.findings.map((f, i) => {
              const isChoice = picked === i;
              const isUrgent = f.urgent;
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  className={cn(
                    "w-full rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all",
                    picked !== null
                      ? isUrgent
                        ? "border-primary bg-sage/30 dark:bg-sage/15"
                        : "border-border/50 opacity-80"
                      : "border-border/60 hover:border-primary/50 hover:shadow-sm"
                  )}
                >
                  <p className="text-foreground">{f.text}</p>
                  {picked !== null && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1.5 text-xs text-muted-foreground">
                      {isUrgent ? "⚡ Most urgent: " : "· "}{f.feedback}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {finished && (
        <p className="text-center text-sm text-muted-foreground">
          {score === order.length ? "Unshakeable triage instincts 💗" : `${score}/${order.length} correct — prioritization is a skill, keep sharpening it.`}
        </p>
      )}
    </GameShell>
  );
}
