"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { labourTimeline } from "@/lib/game-content";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, CheckCircle2, XCircle, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

export function TimelineGame() {
  const [order, setOrder] = useState<number[]>(() => shuffle([...Array(labourTimeline.length).keys()]));
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  function move(from: number, to: number) {
    if (submitted) return;
    setOrder((o) => {
      const next = [...o];
      if (to < 0 || to >= next.length) return o;
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  }

  function check() {
    const correct = order.filter((orig, pos) => orig === pos).length;
    setScore(Math.round((correct / labourTimeline.length) * 100));
    setSubmitted(true);
    setTimeout(() => setFinished(true), 100);
  }

  function restart() {
    setOrder(shuffle([...Array(labourTimeline.length).keys()]));
    setSubmitted(false);
    setFinished(false);
    setScore(0);
  }

  const result: GameResult | null = finished ? { score } : null;

  return (
    <GameShell
      slug="labour-timeline"
      title="Labour Timeline"
      description="Arrange the events of labour in the correct order."
      icon="ListOrdered"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-5">
        <p className="mb-4 text-center text-xs text-muted-foreground">
          Use the arrows — from the first sign to immediate postpartum care.
        </p>
        <ol className="space-y-2">
          {order.map((origIdx, pos) => {
            const event = labourTimeline[origIdx];
            const isRight = submitted && origIdx === pos;
            const isWrong = submitted && origIdx !== pos;
            return (
              <li
                key={origIdx}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-2 px-4 py-3",
                  isRight ? "border-primary bg-sage/30 dark:bg-sage/15" : isWrong ? "border-gold/60 bg-gold/10" : "border-border/60"
                )}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lav text-xs font-bold text-secondary-foreground dark:bg-plum/30">
                  {pos + 1}
                </span>
                <p className="flex-1 text-sm text-foreground">{event.text}</p>
                {isRight && <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-label="Correct position" />}
                {isWrong && <XCircle className="h-4 w-4 shrink-0 text-gold" aria-label="Wrong position" />}
                {!submitted && (
                  <div className="flex flex-col gap-0.5">
                    <button onClick={() => move(pos, pos - 1)} disabled={pos === 0} className="rounded p-1 text-muted-foreground hover:bg-muted disabled:opacity-25" aria-label="Move up">
                      <ArrowUp className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    <button onClick={() => move(pos, pos + 1)} disabled={pos === order.length - 1} className="rounded p-1 text-muted-foreground hover:bg-muted disabled:opacity-25" aria-label="Move down">
                      <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {submitted && (
          <div className="mt-4 space-y-2">
            <p className="text-center text-sm font-medium text-foreground">
              {score}% in the right place {score === 100 ? "— perfect sequence 💗" : ""}
            </p>
            <div className="space-y-1.5">
              {order.map((origIdx, pos) => {
                if (origIdx === pos) return null;
                return (
                  <p key={origIdx} className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{labourTimeline[origIdx].text}</span> — {labourTimeline[origIdx].feedback}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {!submitted && (
          <Button className="mt-5 w-full rounded-full" size="lg" onClick={check}>
            <Flag className="h-4 w-4" aria-hidden /> Check my timeline
          </Button>
        )}
      </div>
    </GameShell>
  );
}
