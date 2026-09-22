"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GameShell, type GameResult } from "./game-shell";
import { gcsScenarios } from "@/lib/game-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function GcsChallengeGame() {
  const [idx, setIdx] = useState(0);
  const [eye, setEye] = useState("");
  const [verbal, setVerbal] = useState("");
  const [motor, setMotor] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const scenario = gcsScenarios[idx];
  const result: GameResult | null = finished ? { score: Math.round((score / gcsScenarios.length) * 100) } : null;

  function check() {
    if (!scenario || checked) return;
    const correct =
      eye === scenario.eye && verbal === scenario.verbal && motor === scenario.motor;
    if (correct) setScore((s) => s + 1);
    setChecked(true);
  }

  function next() {
    setChecked(false);
    setEye(""); setVerbal(""); setMotor("");
    if (idx + 1 >= gcsScenarios.length) setFinished(true);
    else setIdx((i) => i + 1);
  }

  function restart() {
    setIdx(0); setScore(0); setChecked(false); setFinished(false);
    setEye(""); setVerbal(""); setMotor("");
  }

  const allCorrect = scenario && eye === scenario.eye && verbal === scenario.verbal && motor === scenario.motor;

  return (
    <GameShell
      slug="gcs-challenge"
      title="GCS Challenge"
      description="Read the findings — name the eye, verbal and motor responses."
      icon="Compass"
      onRestart={restart}
      result={result}
    >
      {scenario && !finished && (
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/70 bg-card p-6">
          <p className="text-xs text-muted-foreground">Scenario {idx + 1} of {gcsScenarios.length}</p>
          <p className="mt-2 font-display text-lg font-semibold leading-relaxed text-foreground">{scenario.scenario}</p>

          <div className="mt-5 space-y-4">
            {[
              { label: "What is the eye opening response?", value: eye, set: setEye, options: scenario.options.eye, correct: scenario.eye },
              { label: "What is the verbal response?", value: verbal, set: setVerbal, options: scenario.options.verbal, correct: scenario.verbal },
              { label: "What is the motor response?", value: motor, set: setMotor, options: scenario.options.motor, correct: scenario.motor },
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
            <Button className="mt-5 w-full rounded-full" size="lg" onClick={check} disabled={!eye || !verbal || !motor}>
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
                {idx + 1 >= gcsScenarios.length ? "Finish" : "Next scenario"}
              </Button>
            </div>
          )}
        </motion.div>
      )}

      {finished && (
        <p className="text-center text-sm text-muted-foreground">
          {score === gcsScenarios.length ? "Eye · verbal · motor — all yours 💗" : `${score}/${gcsScenarios.length} scenarios correct.`}
        </p>
      )}
    </GameShell>
  );
}
