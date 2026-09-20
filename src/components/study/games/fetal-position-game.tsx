"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { fetalPositionScenarios } from "@/lib/game-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FetalPositionGame() {
  const [idx, setIdx] = useState(0);
  const [lie, setLie] = useState("");
  const [pres, setPres] = useState("");
  const [pos, setPos] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const scenario = fetalPositionScenarios[idx];
  const result: GameResult | null = finished ? { score: Math.round((score / fetalPositionScenarios.length) * 100) } : null;

  function check() {
    if (!scenario || checked) return;
    const correct =
      lie === scenario.lie && pres === scenario.presentation && pos === scenario.position;
    if (correct) setScore((s) => s + 1);
    setChecked(true);
  }

  function next() {
    setChecked(false);
    setLie(""); setPres(""); setPos("");
    if (idx + 1 >= fetalPositionScenarios.length) setFinished(true);
    else setIdx((i) => i + 1);
  }

  function restart() {
    setIdx(0); setScore(0); setChecked(false); setFinished(false);
    setLie(""); setPres(""); setPos("");
  }

  const allCorrect = scenario && lie === scenario.lie && pres === scenario.presentation && pos === scenario.position;

  return (
    <GameShell
      slug="fetal-position"
      title="Fetal Position Challenge"
      description="Read the scenario — name the lie, presentation and position."
      icon="Compass"
      onRestart={restart}
      result={result}
    >
      {scenario && !finished && (
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/70 bg-card p-6">
          <p className="text-xs text-muted-foreground">Scenario {idx + 1} of {fetalPositionScenarios.length}</p>
          <p className="mt-2 font-display text-lg font-semibold leading-relaxed text-foreground">{scenario.scenario}</p>

          <div className="mt-5 space-y-4">
            {[
              { label: "What is the lie?", value: lie, set: setLie, options: scenario.options.lie, correct: scenario.lie },
              { label: "What is the presentation?", value: pres, set: setPres, options: scenario.options.presentation, correct: scenario.presentation },
              { label: "What is the position?", value: pos, set: setPos, options: scenario.options.position, correct: scenario.position },
            ].map((row) => (
              <div key={row.label} className="space-y-1.5">
                <span className="text-xs font-medium text-muted-foreground">{row.label}</span>
                <Select value={row.value} onValueChange={(v) => !checked && row.set(v)} disabled={checked}>
                  <SelectTrigger className={cn(
                    "rounded-xl",
                    checked && row.value === row.correct && "border-primary bg-sage/30 dark:bg-sage/15",
                    checked && row.value !== row.correct && row.value && "border-destructive"
                  )}>
                    <SelectValue placeholder="Choose…" />
                  </SelectTrigger>
                  <SelectContent>
                    {row.options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
                {checked && row.value !== row.correct && (
                  <p className="text-xs text-muted-foreground">Correct: <span className="font-semibold text-foreground">{row.correct}</span></p>
                )}
              </div>
            ))}
          </div>

          {!checked ? (
            <Button className="mt-5 w-full rounded-full" size="lg" onClick={check} disabled={!lie || !pres || !pos}>
              Check answers
            </Button>
          ) : (
            <div className="mt-5 space-y-3">
              <div className={cn(
                "flex items-start gap-2 rounded-xl px-4 py-3 text-sm",
                allCorrect ? "bg-sage/40 text-foreground dark:bg-sage/20" : "bg-gold/15 text-foreground"
              )}>
                {allCorrect ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
                <span>{scenario.explanation}</span>
              </div>
              <Button className="w-full rounded-full" size="lg" onClick={next}>
                {idx + 1 >= fetalPositionScenarios.length ? "Finish" : "Next scenario"}
              </Button>
            </div>
          )}
        </motion.div>
      )}

      {finished && (
        <p className="text-center text-sm text-muted-foreground">
          {score === fetalPositionScenarios.length ? "Lie · presentation · position — all yours 💗" : `${score}/${fetalPositionScenarios.length} scenarios correct.`}
        </p>
      )}
    </GameShell>
  );
}
