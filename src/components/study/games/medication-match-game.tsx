"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { medicationMatchPairs } from "@/lib/game-content";
import { Pill, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Row {
  id: number;
  left: string;
  right: string;
}

export function MedicationMatchGame() {
  const [lefts, setLefts] = useState<string[]>(() => shuffle(medicationMatchPairs.map((p) => p.left)));
  const [rights, setRights] = useState<string[]>(() => shuffle(medicationMatchPairs.map((p) => p.right)));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]); // left values matched
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const done = matched.length === medicationMatchPairs.length;
  const result: GameResult | null = done
    ? { score: Math.max(30, 100 - mistakes * 8) }
    : null;

  function tryMatch(right: string) {
    if (!selectedLeft) return;
    const pair = medicationMatchPairs.find((p) => p.left === selectedLeft);
    if (pair && pair.right === right) {
      setMatched((m) => [...m, selectedLeft]);
      setSelectedLeft(null);
    } else {
      setMistakes((m) => m + 1);
      setWrongFlash(right);
      setTimeout(() => setWrongFlash(null), 600);
    }
  }

  function restart() {
    setLefts(shuffle(medicationMatchPairs.map((p) => p.left)));
    setRights(shuffle(medicationMatchPairs.map((p) => p.right)));
    setSelectedLeft(null);
    setMatched([]);
    setMistakes(0);
  }

  return (
    <GameShell
      slug="medication-match"
      title="Medication Match"
      description="Match each medication concept to its safety principle."
      icon="Pill"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-5">
        <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{matched.length}/{medicationMatchPairs.length} matched</span>
          <span>{mistakes} mismatches</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Pill className="h-3 w-3" aria-hidden /> Concepts
            </p>
            {lefts.map((left) => {
              const isMatched = matched.includes(left);
              const isSel = selectedLeft === left;
              return (
                <button
                  key={left}
                  onClick={() => !isMatched && setSelectedLeft(isSel ? null : left)}
                  disabled={isMatched}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2.5 text-left text-xs font-medium transition-all",
                    isMatched
                      ? "border-primary/40 bg-sage/25 text-muted-foreground line-through dark:bg-sage/15"
                      : isSel
                      ? "border-primary bg-blossom-soft/60 text-foreground dark:bg-plum/30"
                      : "border-border/60 text-foreground hover:border-primary/50"
                  )}
                  aria-pressed={isSel}
                >
                  {left}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Link2 className="h-3 w-3" aria-hidden /> Safety principles
            </p>
            {rights.map((right) => {
              const pair = medicationMatchPairs.find((p) => p.right === right);
              const isMatched = pair ? matched.includes(pair.left) : false;
              const isWrong = wrongFlash === right;
              return (
                <button
                  key={right}
                  onClick={() => tryMatch(right)}
                  disabled={isMatched}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2.5 text-left text-xs transition-all",
                    isMatched
                      ? "border-primary/40 bg-sage/25 text-muted-foreground dark:bg-sage/15"
                      : isWrong
                      ? "animate-pulse border-destructive bg-destructive/10"
                      : "border-border/60 text-foreground hover:border-primary/50"
                  )}
                >
                  {right}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] italic text-muted-foreground">
          Principles, not prescriptions — doses live in your protocols and supervisors 💗
        </p>
      </div>
    </GameShell>
  );
}
