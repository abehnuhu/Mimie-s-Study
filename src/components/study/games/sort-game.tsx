"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import type { SortGameItem } from "@/lib/game-content";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export interface PhotoSortItem extends SortGameItem {
  image?: string;
}

interface Bin {
  key: string;
  label: string;
  hint: string;
  className: string;
}

/** Generic sort game used by Infection Control Sort + Newborn Challenge.
 * Items may carry an illustrative real photo shown on the card. */
export function SortGame({
  slug,
  title,
  description,
  icon,
  items,
  bins,
}: {
  slug: string;
  title: string;
  description: string;
  icon: string;
  items: PhotoSortItem[];
  bins: Bin[];
}) {
  const reduceMotion = useReducedMotion();
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [itemsOrder, setItemsOrder] = useState(() => shuffle(items));

  const item = itemsOrder[round];
  const result: GameResult | null = finished ? { score: Math.round((score / items.length) * 100) } : null;

  function choose(binKey: string) {
    if (answered || !item) return;
    const correct = item.bin === binKey;
    if (correct) setScore((s) => s + 1);
    setAnswered(binKey);
    setTimeout(() => {
      setAnswered(null);
      if (round + 1 >= items.length) setFinished(true);
      else setRound((r) => r + 1);
    }, 1500);
  }

  function restart() {
    setRound(0);
    setScore(0);
    setAnswered(null);
    setFinished(false);
    setItemsOrder(shuffle(items));
  }

  const correctBin = item ? bins.find((b) => b.key === item.bin) : null;

  return (
    <GameShell slug={slug} title={title} description={description} icon={icon} onRestart={restart} result={result}>
      <Progress value={(round / items.length) * 100} className="h-2" aria-hidden />
      <p className="text-center text-xs text-muted-foreground">
        Item {Math.min(round + 1, items.length)} of {items.length} · {score} correct
      </p>

      <AnimatePresence mode="wait">
        {item && !finished && (
          <motion.div
            key={round}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
            className="overflow-hidden rounded-2xl border border-border/70 bg-card text-center"
          >
            {item.image && (
              <div className="relative h-36 w-full overflow-hidden sm:h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" aria-hidden />
              </div>
            )}
            <div className="p-6">
            <p className="font-display text-lg font-semibold leading-relaxed text-foreground">{item.text}</p>
            <p className="mt-1 text-xs text-muted-foreground">Where does this belong?</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {bins.map((bin) => {
                const isChoice = answered === bin.key;
                const isCorrectBin = correctBin?.key === bin.key;
                return (
                  <button
                    key={bin.key}
                    onClick={() => choose(bin.key)}
                    disabled={!!answered}
                    className={cn(
                      "rounded-xl border-2 p-4 text-center transition-all",
                      answered
                        ? isCorrectBin
                          ? "border-primary bg-sage/30 dark:bg-sage/15"
                          : isChoice
                          ? "border-destructive bg-destructive/5"
                          : "border-border/50 opacity-60"
                        : "border-border/60 hover:border-primary/50 hover:shadow-md"
                    )}
                  >
                    <p className="font-display text-base font-semibold text-foreground">{bin.label}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{bin.hint}</p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <p className={cn(
                    "mt-4 flex items-center justify-center gap-2 text-sm",
                    answered === item.bin ? "text-primary" : "text-destructive"
                  )}>
                    {answered === item.bin ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : <XCircle className="h-4 w-4" aria-hidden />}
                    {item.feedback}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {finished && (
        <p className="text-center text-sm text-muted-foreground">
          {score === items.length ? "Perfect sort 💗" : `You sorted ${score} of ${items.length} correctly.`}
        </p>
      )}
    </GameShell>
  );
}
