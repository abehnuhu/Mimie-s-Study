"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DynIcon } from "./dyn-icon";
import { EmptyState, ErrorCard } from "./shared-cards";
import { Lock, Trophy, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GameInfo } from "@/lib/types";

export function GamesView() {
  const { go, refreshBootstrap } = useAppStore();
  const [games, setGames] = useState<GameInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/games", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Couldn't load games 💗");
          return;
        }
        setGames(json.games);
      } catch {
        setError("We lost the connection for a moment 💗");
      }
    })();
    refreshBootstrap();
  }, [refreshBootstrap]);

  if (error) return <div className="mx-auto max-w-4xl"><ErrorCard message={error} onRetry={() => window.location.reload()} /></div>;

  if (!games) {
    return (
      <div className="mx-auto max-w-4xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-48 rounded-xl" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-36 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  const anyPlayed = games.some((g) => (g.plays ?? 0) > 0);

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Games</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Playful practice that actually teaches — every game earns XP 💗
        </p>
      </div>

      {!anyPlayed && (
        <EmptyState
          icon={Trophy}
          title="Your first challenge is waiting."
          hint="Start with Anatomy Label or Nursing Process Timeline — two minutes each."
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => (
          <motion.button
            key={game.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => {
              if (game.locked) {
                toast(`Unlocks at level ${game.unlockLevel} — keep learning 💗`);
                return;
              }
              go({ name: "game", slug: game.slug });
            }}
            className={cn(
              "card-hover group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 text-left",
              game.locked && "opacity-75"
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-plum/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative flex items-start justify-between">
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110",
                game.locked ? "bg-muted text-muted-foreground" : "bg-blossom-soft text-primary dark:bg-plum/40"
              )}>
                <DynIcon name={game.icon} className="h-6 w-6" />
              </div>
              {game.locked && (
                <span className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  <Lock className="h-3 w-3" aria-hidden /> Level {game.unlockLevel}
                </span>
              )}
              {!game.locked && (game.plays ?? 0) > 0 && (
                <span className="flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-1 text-[11px] font-semibold text-foreground/70">
                  <Trophy className="h-3 w-3" aria-hidden /> best {game.best}
                </span>
              )}
            </div>
            <h2 className="mt-3 font-display text-lg font-semibold text-foreground group-hover:text-primary">
              {game.title}
            </h2>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{game.description}</p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">+{game.xpReward} XP max</span>
              {(game.plays ?? 0) > 0 && (
                <span className="flex items-center gap-1">
                  <RotateCcw className="h-3 w-3" aria-hidden /> {game.plays}× played
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
