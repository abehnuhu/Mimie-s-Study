"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { detectiveCases } from "@/lib/game-content";
import { caseImages } from "./case-images";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Hero image for a case — hides itself gracefully if the file is missing. */
function CaseHero({ caseIdx }: { caseIdx: number }) {
  const [broken, setBroken] = useState(false);
  const img = caseImages[caseIdx];
  if (!img || broken) return null;
  return (
    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl border border-border/70">
      <motion.img
        src={img.src}
        alt={img.alt}
        initial={false}
        animate={{ scale: [1, 1.08] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        onError={() => setBroken(true)}
        className="h-full w-full object-cover"
      />
      {/* soft gradient overlay so text stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
      />
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
        <Search className="h-3 w-3" aria-hidden /> Case {caseIdx + 1}
      </span>
    </div>
  );
}

export function DetectiveGame() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showDebrief, setShowDebrief] = useState(false);

  const activeCase = detectiveCases[caseIdx];
  const step = activeCase?.steps[stepIdx];
  const totalSteps = detectiveCases.reduce((s, c) => s + c.steps.length, 0);

  const result: GameResult | null = finished ? { score: Math.round((score / totalSteps) * 100) } : null;

  function check() {
    if (!step || checked) return;
    if (selected === step.correctIndex) setScore((s) => s + 1);
    setChecked(true);
  }

  function next() {
    setChecked(false);
    setSelected(null);
    const nextStep = stepIdx + 1;
    const nextCase = caseIdx + 1;
    if (nextStep < activeCase.steps.length) {
      setStepIdx(nextStep);
    } else if (nextCase < detectiveCases.length) {
      setCaseIdx(nextCase);
      setStepIdx(0);
      setShowDebrief(true); // show previous debrief between cases? No — debrief at end
      setShowDebrief(false);
    } else {
      setFinished(true);
      setShowDebrief(true);
    }
  }

  function restart() {
    setCaseIdx(0); setStepIdx(0); setSelected(null); setChecked(false);
    setScore(0); setFinished(false); setShowDebrief(false);
  }

  return (
    <GameShell
      slug="case-detective"
      title="Case Detective"
      description="Follow the story. Collect the clues. Think it through."
      icon="Search"
      onRestart={restart}
      result={result}
    >
      {activeCase && !finished && (
        <motion.div key={`${caseIdx}-${stepIdx}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/70 bg-card p-4 sm:p-6">
          <CaseHero caseIdx={caseIdx} />
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-lav px-3 py-1 text-[11px] font-semibold text-secondary-foreground dark:bg-plum/30">
              <Search className="h-3 w-3" aria-hidden /> {activeCase.title}
            </span>
            <span className="text-xs text-muted-foreground">Clue {stepIdx + 1}/{activeCase.steps.length} · {score} solved</span>
          </div>

          <p className="text-sm italic text-muted-foreground">{activeCase.intro}</p>

          <div className="mt-4 rounded-xl border border-sage/50 bg-sage/20 p-4 dark:bg-sage/10">
            <p className="font-display text-[15px] leading-relaxed text-foreground">{step.vignette}</p>
          </div>

          <p className="mt-4 font-display text-base font-semibold text-foreground">{step.question}</p>

          <div className="mt-4 space-y-2.5">
            {step.options.map((opt, i) => {
              const isChoice = selected === i;
              const isCorrect = checked && i === step.correctIndex;
              const isWrong = checked && isChoice && i !== step.correctIndex;
              return (
                <button
                  key={i}
                  onClick={() => !checked && setSelected(i)}
                  disabled={checked}
                  className={cn(
                    "w-full rounded-xl border-2 px-4 py-3 text-left text-sm transition-all",
                    isCorrect
                      ? "border-primary bg-sage/30 dark:bg-sage/15"
                      : isWrong
                      ? "border-destructive bg-destructive/5"
                      : isChoice
                      ? "border-primary bg-blossom-soft/60 dark:bg-plum/30"
                      : "border-border/60 hover:border-primary/50"
                  )}
                  aria-pressed={isChoice}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!checked ? (
            <Button className="mt-5 w-full rounded-full" size="lg" disabled={selected === null} onClick={check}>
              Submit my reasoning
            </Button>
          ) : (
            <div className="mt-5 space-y-3">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-xl bg-muted/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clinical reasoning</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{step.explanation}</p>
              </motion.div>
              <Button className="w-full rounded-full" size="lg" onClick={next}>
                {stepIdx + 1 < activeCase.steps.length ? "Next clue" : caseIdx + 1 < detectiveCases.length ? "Next case" : "Case debrief"}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          )}
        </motion.div>
      )}

      {finished && (
        <div className="space-y-3">
          <p className="text-center text-sm text-muted-foreground">
            {score}/{totalSteps} clues solved — {score === totalSteps ? "sharp detective work 💗" : "every case teaches something new."}
          </p>
          <div className="space-y-3">
            {detectiveCases.map((c, i) => (
              <div key={i} className="rounded-2xl border border-border/70 bg-card p-5">
                <p className="font-display text-base font-semibold text-foreground">Case {i + 1} debrief · {c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.debrief}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </GameShell>
  );
}
