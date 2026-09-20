"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { DynIcon } from "../dyn-icon";
import { ChevronLeft, RotateCcw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GameResult {
  score: number; // 0–100
  timeSec?: number;
}

/** Shared shell for every game: header, restart, XP submission. */
export function GameShell({
  slug,
  title,
  description,
  icon,
  children,
  onRestart,
  result,
}: {
  slug: string;
  title: string;
  description: string;
  icon?: string | null;
  children: React.ReactNode;
  onRestart: () => void;
  result: GameResult | null;
}) {
  const { back, refreshBootstrap, triggerConfetti, go } = useAppStore();
  const submittedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!result || submittedRef.current === slug + result.score) return;
    submittedRef.current = slug + result.score;
    (async () => {
      try {
        const res = await fetch(`/api/games/${slug}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score: result.score, timeSec: result.timeSec ?? 0 }),
        });
        const json = await res.json();
        if (res.ok) {
          toast(`+${json.xpEarned} XP · scored ${result.score}%`, {
            description: json.newBest ? "A new personal best! 🌸" : undefined,
          });
          if (json.leveledUp) {
            toast(`Level ${json.newLevel} — look at you growing 🌸`);
          }
          for (const badge of json.newBadges ?? []) {
            toast(`🏅 Badge unlocked: ${badge.title}`, { description: badge.description });
          }
          if (result.score >= 100) triggerConfetti();
          refreshBootstrap();
        }
      } catch {
        // silent — the score still shows
      }
    })();
  }, [result, slug, refreshBootstrap, triggerConfetti]);

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={back} aria-label="Back to games">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blossom-soft text-primary dark:bg-plum/40">
          <DynIcon name={icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-xl font-semibold text-foreground">{title}</h1>
          <p className="truncate text-xs text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" size="sm" className="rounded-full" onClick={onRestart}>
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Restart
        </Button>
      </div>

      {children}

      {result && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="border-primary/25 bg-gradient-to-br from-blossom-soft/70 to-lav/50 dark:from-plum/30 dark:to-plum/10">
            <CardContent className="flex flex-wrap items-center gap-4 p-6">
              <div className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold",
                result.score >= 80 ? "bg-sage text-accent-foreground" : result.score >= 50 ? "bg-gold/30" : "bg-muted"
              )}>
                <Trophy className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-semibold text-foreground">
                  Score: {result.score}%
                  {result.score >= 100 && " — flawless 💗"}
                </p>
                <p className="text-xs text-muted-foreground">
                  XP earned for this round — replay any time to top it up.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => go({ name: "games" })}
              >
                More games
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
