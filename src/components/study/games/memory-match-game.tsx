"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { memoryMatchPairs } from "@/lib/game-content";
import { cn } from "@/lib/utils";

interface Card {
  key: string;
  pairId: number;
  text: string;
  matched: boolean;
}

function buildDeck(): Card[] {
  return shuffle([
    ...memoryMatchPairs.map((p, i) => ({ key: `c${i}a`, pairId: i, text: p.left, matched: false })),
    ...memoryMatchPairs.map((p, i) => ({ key: `c${i}b`, pairId: i, text: p.right, matched: false })),
  ]);
}

export function MemoryMatchGame() {
  const [cards, setCards] = useState<Card[]>(buildDeck);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  function deal() {
    setCards(buildDeck());
    setFlipped([]);
    setMoves(0);
    setLock(false);
  }

  const done = cards.length > 0 && cards.every((c) => c.matched);
  const pairs = memoryMatchPairs.length;
  const result: GameResult | null = done
    ? { score: Math.max(40, Math.min(100, 100 - Math.max(0, moves - pairs) * 3)) }
    : null;

  function flip(card: Card) {
    if (lock || card.matched || flipped.includes(card.key)) return;
    const nextFlipped = [...flipped, card.key];
    setFlipped(nextFlipped);
    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLock(true);
      const [a, b] = nextFlipped.map((k) => cards.find((c) => c.key === k)!);
      if (a.pairId === b.pairId) {
        setTimeout(() => {
          setCards((cs) => cs.map((c) => (c.pairId === a.pairId ? { ...c, matched: true } : c)));
          setFlipped([]);
          setLock(false);
        }, 650);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 1000);
      }
    }
  }

  return (
    <GameShell
      slug="memory-match"
      title="Memory Match"
      description="Condition → hallmark. Flip, remember, connect."
      icon="Grid2x2"
      onRestart={deal}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-5">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>{moves} moves · {pairs} pairs</span>
          <span>matching: condition ↔ hallmark</span>
        </div>
        <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-5">
          {cards.map((card) => {
            const faceUp = card.matched || flipped.includes(card.key);
            return (
              <button
                key={card.key}
                onClick={() => flip(card)}
                className="relative aspect-[3/4] [perspective:800px]"
                aria-label={faceUp ? card.text : "Hidden card"}
              >
                <motion.div
                  className="relative h-full w-full rounded-xl [transform-style:preserve-3d]"
                  animate={{ rotateY: faceUp ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-primary/30 bg-gradient-to-br from-blossom-soft to-lav text-primary dark:from-plum/50 dark:to-plum/25 [backface-visibility:hidden]">
                    <span className="font-display text-xl">💗</span>
                  </div>
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center rounded-xl border-2 p-1.5 text-center text-[10px] leading-tight [backface-visibility:hidden] [transform:rotateY(180deg)]",
                      card.matched ? "border-primary bg-sage/30 dark:bg-sage/15 text-muted-foreground" : "border-border bg-card text-foreground"
                    )}
                  >
                    {card.text}
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>
        {done && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Cleared in {moves} moves {moves <= pairs + 3 ? "— a memory to be proud of 💗" : ""} 
          </p>
        )}
      </div>
    </GameShell>
  );
}
