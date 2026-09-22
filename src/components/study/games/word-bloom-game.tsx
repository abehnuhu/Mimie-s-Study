"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { ChevronRight, Flower2, Lightbulb, RotateCcw, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ── vocabulary (drawn from the Mimie's Study curriculum) ──────
interface BloomTerm {
  word: string;
  emoji: string;
  category: string;
  clue: string;
  definition: string;
}

const TERMS: BloomTerm[] = [
  { word: "triage", emoji: "⚖️", category: "Emergency", clue: "the sorting of many patients by urgency so the most critical is seen first", definition: "Triage means rating who cannot wait — at the gate, on the ward, in a mass casualty. In a busy Ghanaian facility the person who sorts well saves more lives than the person who runs fastest." },
  { word: "sepsis", emoji: "🌡️", category: "Emergencies", clue: "the body's overwhelming answer to infection — fever, fast breathing, new confusion", definition: "Sepsis is the body's life-threatening response to infection: fever or a chilling low temperature, a racing pulse, breathing above 22, falling blood pressure and new confusion. It whispers before it shouts — a rising breathing rate is often the first voice it uses." },
  { word: "anaphylaxis", emoji: "🚨", category: "Emergencies", clue: "the violent allergic reaction — swelling throat, wheeze, rash, collapse", definition: "A severe, rapid allergic reaction: swelling of lips and throat, difficulty breathing, a widespread itchy rash and dizziness or collapse after a medicine, food or sting. Adrenaline is the emergency treatment, it lives on the emergency trolley — and speed is everything." },
  { word: "hypoglycaemia", emoji: "🍬", category: "Emergencies", clue: "the sweaty, trembling, suddenly confused emergency the glucose meter confirms", definition: "A blood glucose too low for the brain to work — sweating, trembling, hunger, confusion, and if untreated, seizures and coma. The rule of 15: about 15 g of fast sugar, recheck in 15 minutes. On insulin or sulfonylureas, suspect it first and confirm it fast." },
  { word: "auscultation", emoji: "👂", category: "Assessment", clue: "listening to the body through the stethoscope's bell and diaphragm", definition: "The skilled art of listening to heart, lung and bowel sounds with a stethoscope. Position, breath, patience and a quiet room turn a tube and two eardrums into one of nursing's most powerful diagnostic tools." },
  { word: "cyanosis", emoji: "💙", category: "Assessment", clue: "the blue tinge of lips and tongue that says oxygen is missing", definition: "A bluish discolouration of the lips, tongue and mucous membranes that appears when blood oxygen falls. Central cyanosis is an emergency sign — check the tongue, not only the fingers, and act on what you see." },
  { word: "dyspnoea", emoji: "😮‍💨", category: "Assessment", clue: "the patient's own report: 'I cannot breathe well'", definition: "The subjective sensation of difficult or uncomfortable breathing. Ask what it stops them doing — the patient who can no longer finish a sentence or lie flat is telling you the severity in plain words." },
  { word: "oedema", emoji: "💧", category: "Assessment", clue: "fluid in the tissues — the thumb leaves a dent that stays", definition: "Fluid collecting in the tissues. Pitting oedema is graded by how long your thumb's dent remains: press over a bone, note the depth, chart the trend. Sudden facial swelling or a fast weight gain is never 'just swelling'." },
  { word: "jaundice", emoji: "💛", category: "Assessment", clue: "yellow eyes and skin when bilirubin climbs", definition: "The yellow discolouration of sclera and skin that appears when bilirubin builds in the blood — from broken red cells, a struggling liver or blocked bile ducts. In Ghana, always think of sickle cell and of hepatitis alongside the newborn causes." },
  { word: "syncope", emoji: "😵", category: "Assessment", clue: "the brief faint with a quick return", definition: "A short loss of consciousness caused by a drop in blood flow to the brain, with a quick recovery once lying flat. Brief and benign in many — but in the older patient, or after a fall, it deserves a full assessment before it is waved away." },
  { word: "tachycardia", emoji: "💓", category: "Assessment", clue: "a pulse running above 100 — pain, fear, blood loss or fever", definition: "A heart rate above 100 beats per minute in an adult. It is a sign, not a diagnosis: fever, pain, anxiety, dehydration, haemorrhage and sepsis all speak through it — so a racing pulse always asks you 'why am I running?'" },
  { word: "dysphagia", emoji: "🍽️", category: "Neurological", clue: "swallowing that has stopped being safe — a stroke and feeding signal", definition: "Difficulty swallowing. After a stroke it raises the silent risk of aspiration — food and drink sliding into the lungs. Watch for coughing, wet voices and pocketed food; a swallowing assessment comes before the first tray." },
  { word: "homeostasis", emoji: "⚖️", category: "Physiology", clue: "the body's quiet balancing act — temperature, glucose, fluids, salts", definition: "The body's active maintenance of a stable internal environment. Every observation you chart — temperature, pulse, glucose, fluid balance — is a report on how well the balancing act is holding. Nursing protects homeostasis; disease attacks it." },
  { word: "hypoxia", emoji: "🫁", category: "Respiratory", clue: "tissues starving for oxygen, even when the patient looks calm", definition: "Insufficient oxygen reaching the tissues — the deeper danger behind a low saturation reading. Restlessness and confusion are often the first signs in the patient who cannot yet tell you they are drowning quietly." },
  { word: "sputum", emoji: "🔬", category: "Respiratory", clue: "what a cough brings up — and what the TB laboratory needs at dawn", definition: "The material coughed out of the lower airways. Its colour, thickness and blood matter — and in Ghana's TB programme, an early-morning sample in the right container travels fast to the laboratory, where it can change a whole family's story." },
  { word: "haemoptysis", emoji: "🩸", category: "Respiratory", clue: "coughing up blood — a red-flag sign in Ghana's TB belt", definition: "The coughing up of blood from the respiratory tract — distinct from vomited blood. In Ghana it demands a TB assessment and also raises pneumonia and cancer. Whatever the cause, it is never a finding to watch calmly from a distance." },
  { word: "insulin", emoji: "💉", category: "Pharmacology", clue: "the high-alert glucose-lowering hormone — timing, dose and food must agree", definition: "The hormone that moves glucose into the cells. As a ward medicine it is high-alert: the dose, the timing and the meal must agree, the glucose must be checked, and hypoglycaemia watched for — never give insulin and leave the bedside." },
  { word: "paracetamol", emoji: "💊", category: "Pharmacology", clue: "the everyday fever and pain medicine with a ceiling you must respect", definition: "The most-used fever and pain medicine in Ghana — and the most under-respected, because it hides in combinations on the open market. Confirm the last dose before repeating, know the daily ceiling, and re-check the temperature afterwards." },
  { word: "metformin", emoji: "🧪", category: "Pharmacology", clue: "the first-line diabetes tablet, given with meals", definition: "The first-line tablet for type 2 diabetes. Give with meals to protect the stomach, and remember the sick days: when a patient stops eating and drinking, the prescriber must be told — that is a nurse's flag, not a small thing." },
  { word: "antibiotics", emoji: "🦠", category: "Pharmacology", clue: "the medicines that only work when the course is completed", definition: "Medicines that kill or slow bacteria. The five rights apply, the full course must be completed — never saved or shared — and stewardship matters: every unnecessary course trains the bacteria of the whole community." },
  { word: "adrenaline", emoji: "⚡", category: "Pharmacology", clue: "the anaphylaxis emergency medicine that lives on top of the trolley", definition: "Epinephrine — the emergency medicine for anaphylaxis and cardiac arrest. Know where your ward's emergency tray keeps it, check its expiry on the monthly round, and in anaphylaxis, speed beats paperwork." },
  { word: "oliguria", emoji: "🚽", category: "Renal", clue: "urine output falling below expected — the kidney's early distress call", definition: "Urine output below the expected amount for the body's size — roughly under 0.5 mL per kg per hour in adults. It is the kidney raising its hand in shock, sepsis or obstruction; chart the hourly output before the kidney stops whispering." },
  { word: "dysuria", emoji: "🔥", category: "Renal", clue: "burning pain when passing urine — the classic urinary infection complaint", definition: "Pain or burning on passing urine, classically with frequency and urgency in a urinary tract infection. Common in women, catheterised patients and older men — and the nurse's clean-catch specimen technique decides whether the laboratory finds the truth." },
  { word: "granulation", emoji: "🌱", category: "Wound Care", clue: "the beefy-red new tissue that fills a healing wound", definition: "The bright red, bumpy new tissue that grows into a healing wound during proliferation — a sign the wound is healing from the bottom up. Protect it: it bleeds easily, it is fragile, and its colour tells you whether the healing is on track." },
  { word: "exudate", emoji: "💧", category: "Wound Care", clue: "the fluid a wound weeps — its colour and smell tell the story", definition: "The fluid produced by a wound. Serous (straw-coloured) is normal; sanguineous is bloody; purulent — thick, yellow or green, often smelly — means infection. Assess and document it at every dressing change: it is the wound's daily report." },
  { word: "dehiscence", emoji: "⚠️", category: "Wound Care", clue: "a surgical wound bursting open — the thing your eyes must catch early", definition: "The partial or total separation of a wound's layers, most feared after abdominal surgery. Early clues: a new pink discharge, the patient reporting 'something gave way', coughing or straining at the wound. Sit the patient, protect the site, and call for help — never push anything back." },
  { word: "contracture", emoji: "🦵", category: "Mobility", clue: "a joint frozen in one position when a bedridden patient is not moved", definition: "The permanent shortening of muscle and tissue around a joint, freezing it in one position. It is the price of stillness: prevented by scheduled position changes, passive movement and physiotherapy — hours of prevention versus a lifetime of limitation." },
  { word: "ischaemia", emoji: "🛑", category: "Cardiovascular", clue: "blood supply cut off — the heart muscle cries, the brain dies", definition: "Restriction of blood supply to a tissue, starving it of oxygen. 'Time is muscle' for the heart, 'time is brain' for the stroke — which is why recognition speed is the nurse's superpower in both." },
];

const ROUNDS = 8;
const PETALS = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// ── the rose (hand-drawn-style SVG) ───────────────────────────
const PETAL_D = "M 0 0 C 14 -6 16 -27 0 -36 C -16 -27 -14 -6 0 0";
const PETAL_TINTS = ["#e8a2b8", "#dd8ba6", "#e8a2b8", "#d3768f", "#eeb3c6", "#d98fae"];

function Rose({
  petals,
  bloom,
  celebrate,
  failed,
}: {
  petals: number; // 0–6 still attached
  bloom: boolean; // word solved → full bloom animation
  celebrate: number; // correct letter → happy pulse
  failed: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    if (celebrate > 0 && !reduceMotion) {
      controls.start({ scale: [1, 1.07, 1] }, { duration: 0.5, ease: "easeOut" });
    }
  }, [celebrate, controls, reduceMotion]);

  return (
    <motion.svg
      viewBox="0 0 160 210"
      className="h-44 w-32 select-none"
      role="img"
      aria-label={`A rose with ${petals} of ${PETALS} petals still attached${bloom ? ", in full bloom" : ""}`}
      animate={controls}
    >
      {/* stem */}
      <path d="M 80 96 C 84 130 76 160 82 202" fill="none" stroke="#7fa575" strokeWidth="5" strokeLinecap="round" opacity={failed ? 0.5 : 0.9} />
      {/* leaves */}
      <path d="M 80 150 C 60 148 50 138 46 126 C 60 126 74 134 80 150 Z" fill="#8db184" opacity={failed ? 0.45 : 0.9} />
      <path d="M 80 172 C 100 170 110 160 114 148 C 100 148 86 156 80 172 Z" fill="#7fa575" opacity={failed ? 0.45 : 0.9} />

      {/* petals */}
      <g transform="translate(80 78)">
        <AnimatePresence>
          {Array.from({ length: PETALS }).map((_, i) => {
            if (i >= petals) return null;
            const angle = i * 60 - 90;
            const scale = i % 2 === 0 ? 1 : 0.82;
            return (
              <g key={bloom ? `bloom-${i}` : `grow-${i}`} transform={`rotate(${angle})`}>
                <motion.path
                  d={PETAL_D}
                  fill={PETAL_TINTS[i % PETAL_TINTS.length]}
                  stroke="#b4536e"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
                  initial={bloom && !reduceMotion ? { scale: 0.2, opacity: 0 } : bloom ? { scale: 0.2 } : false}
                  animate={{ scale, opacity: failed ? 0.55 : 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          y: 135,
                          x: i % 2 === 0 ? 34 : -30,
                          rotate: i % 2 === 0 ? 150 : -170,
                          opacity: 0,
                        }
                  }
                  transition={{
                    scale: { type: "spring", stiffness: 260, damping: 18, delay: bloom && !reduceMotion ? i * 0.09 : 0 },
                    opacity: { duration: 0.35 },
                    default: { type: "spring", stiffness: 55, damping: 11 },
                  }}
                />
              </g>
            );
          })}
        </AnimatePresence>
        {/* heart of the rose */}
        <motion.circle
          r="9"
          fill="#a13d59"
          stroke="#8a2f47"
          strokeWidth="1.5"
          animate={bloom && !reduceMotion ? { scale: [1, 1.35, 1] } : { scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <circle cx="0" cy="-3" r="1.6" fill="#f6c177" />
        <circle cx="-3" cy="2" r="1.4" fill="#f6c177" />
        <circle cx="3" cy="2" r="1.4" fill="#f6c177" />
      </g>
    </motion.svg>
  );
}

// mini bloom-meter flower
function MiniFlower({ petals, active }: { petals: number; active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", active && "drop-shadow-sm")} aria-hidden>
      {Array.from({ length: PETALS }).map((_, i) => {
        const angle = i * 60 - 90;
        return (
          <ellipse
            key={i}
            cx="0"
            cy="-6.5"
            rx="2.6"
            ry="5"
            transform={`rotate(${angle})`}
            fill={i < petals ? PETAL_TINTS[i % PETAL_TINTS.length] : "none"}
            stroke={active ? "#b4536e" : "#c9b4bd"}
            strokeWidth="1"
          />
        );
      })}
      <circle r="2.6" fill={petals > 0 ? "#a13d59" : "none"} stroke={active ? "#b4536e" : "#c9b4bd"} strokeWidth="1" />
    </svg>
  );
}

// ── the game ──────────────────────────────────────────────────
type Phase = "playing" | "solved" | "failed" | "over";

export function WordBloomGame() {
  const reduceMotion = useReducedMotion();
  const triggerConfetti = useAppStore((s) => s.triggerConfetti);

  const [deck, setDeck] = useState<BloomTerm[]>(() => shuffle(TERMS).slice(0, ROUNDS));
  const [roundIdx, setRoundIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");
  const [guessed, setGuessed] = useState<string[]>([]);
  const [petals, setPetals] = useState(PETALS);
  const [petalsByRound, setPetalsByRound] = useState<number[]>([]);
  const [announce, setAnnounce] = useState("");
  const [celebrate, setCelebrate] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const term = deck[roundIdx];
  const letters = useMemo(() => term?.word.toUpperCase().split("") ?? [], [term]);
  const uniqueLetters = useMemo(() => Array.from(new Set(letters)), [letters]);

  const blooms = petalsByRound.filter((p) => p > 0).length;
  const banked = petalsByRound.reduce((s, p) => s + p, 0);
  const scorePct = Math.round((banked / (ROUNDS * PETALS)) * 100);
  const result: GameResult | null = phase === "over" ? { score: scorePct, timeSec: elapsed } : null;
  const stars = phase === "over" ? (scorePct >= 80 ? 3 : scorePct >= 45 ? 2 : 1) : 0;

  // gentle clock
  useEffect(() => {
    if (phase === "over") return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  const restart = useCallback(() => {
    setDeck(shuffle(TERMS).slice(0, ROUNDS));
    setRoundIdx(0);
    setPhase("playing");
    setGuessed([]);
    setPetals(PETALS);
    setPetalsByRound([]);
    setAnnounce("");
    setCelebrate(0);
    setElapsed(0);
  }, []);

  function guess(letter: string) {
    if (phase !== "playing" || guessed.includes(letter) || !term) return;
    const up = letter.toUpperCase();
    const next = [...guessed, up];
    setGuessed(next);
    if (uniqueLetters.includes(up)) {
      const count = letters.filter((l) => l === up).length;
      setAnnounce(`${up} appears ${count === 1 ? "once" : `${count} times`} 💗`);
      setCelebrate((c) => c + 1);
      bloomIfComplete(next);
    } else {
      const remain = petals - 1;
      setPetals(remain);
      if (remain <= 0) {
        setPetalsByRound((r) => [...r, 0]);
        setPhase("failed");
      }
      setAnnounce(`No ${up} — a petal drifts away`);
    }
  }

  function revealHint() {
    if (phase !== "playing" || petals <= 1) return;
    const hidden = uniqueLetters.filter((l) => !guessed.includes(l));
    if (hidden.length === 0) return;
    const reveal = hidden[Math.floor(Math.random() * hidden.length)];
    const next = [...guessed, reveal];
    setGuessed(next);
    setPetals((p) => p - 1);
    setAnnounce(`A petal spent to reveal ${reveal}`);
    setCelebrate((c) => c + 1);
    bloomIfComplete(next);
  }

  /** word completed → full bloom, confetti, bank the petals */
  function bloomIfComplete(nextGuessed: string[]) {
    if (phase !== "playing" || !term) return;
    if (uniqueLetters.every((l) => nextGuessed.includes(l))) {
      setPetalsByRound((r) => [...r, petals]);
      setPhase("solved");
      triggerConfetti();
      setAnnounce(`Bloomed! The word is ${term.word}.`);
    }
  }

  function nextWord() {
    if (roundIdx + 1 >= ROUNDS) {
      setPhase("over");
      return;
    }
    setRoundIdx((r) => r + 1);
    setGuessed([]);
    setPetals(PETALS);
    setPhase("playing");
    setAnnounce("");
  }

  // physical keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      guess(e.key);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <GameShell
      slug="word-bloom"
      title="Word Bloom"
      description="Guess the nursing term letter by letter and keep the rose in bloom."
      icon="Flower2"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
        {/* HUD + bloom meter */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 rounded-full bg-blossom-soft px-3 py-1.5 font-display font-bold text-primary dark:bg-plum/40 dark:text-lav">
            <Flower2 className="h-3.5 w-3.5" aria-hidden /> Word {Math.min(roundIdx + 1, ROUNDS)}/{ROUNDS}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-semibold text-muted-foreground" aria-label={`${petals} petals left this word`}>
            🌹 {petals} petals
          </span>
          <span className="ml-auto flex items-center gap-1.5" role="group" aria-label="Bloom meter — one flower per word, petals kept from each">
            {Array.from({ length: ROUNDS }).map((_, i) => (
              <MiniFlower
                key={i}
                petals={i < petalsByRound.length ? petalsByRound[i] : i === roundIdx && phase !== "over" ? petals : 0}
                active={i === roundIdx && phase !== "over"}
              />
            ))}
          </span>
        </div>

        {term && phase !== "over" && (
          <div className="space-y-3">
            {/* clue */}
            <motion.div
              key={`clue-${roundIdx}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-primary/25 bg-gradient-to-r from-blossom-soft/70 to-lav/60 p-3 dark:from-plum/40 dark:to-plum/20"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary dark:text-lav">
                  {term.category}
                </span>
                <span className="text-lg leading-none" aria-hidden>
                  {term.emoji}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                <span className="font-semibold">“{term.clue}”</span> — which term is this?
              </p>
            </motion.div>

            {/* rose + slots */}
            <div className="relative flex flex-col items-center">
              <div className="relative flex h-44 items-start justify-center overflow-visible">
                <Rose
                  petals={phase === "solved" || phase === "failed" ? phase === "solved" ? petals : 0 : petals}
                  bloom={phase === "solved"}
                  celebrate={celebrate}
                  failed={phase === "failed"}
                />
                {phase === "solved" && (
                  <motion.div
                    initial={reduceMotion ? false : { scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.4 }}
                    className="absolute right-2 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                    aria-hidden
                  >
                    <Sparkles className="h-4.5 w-4.5" />
                  </motion.div>
                )}
              </div>

              {/* letter slots */}
              <div className="-mt-1 flex flex-wrap justify-center gap-1.5">
                {letters.map((l, i) => {
                  const shown = guessed.includes(l) || phase === "failed";
                  return (
                    <span
                      key={`${roundIdx}-${i}`}
                      className={cn(
                        "flex h-10 w-7 items-end justify-center rounded-lg border-b-[3px] pb-1 font-display text-lg font-bold sm:w-8",
                        shown
                          ? phase === "failed" && !guessed.includes(l)
                            ? "border-destructive/50 text-destructive"
                            : "border-primary/60 text-primary dark:text-lav"
                          : "border-border/80 text-transparent"
                      )}
                    >
                      {shown ? (
                        <motion.span
                          key={`l-${roundIdx}-${i}-${shown}`}
                          initial={reduceMotion ? false : { scale: 0.3, y: -6 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 420, damping: 20 }}
                        >
                          {l}
                        </motion.span>
                      ) : (
                        <span aria-hidden>_</span>
                      )}
                    </span>
                  );
                })}
              </div>
              <p className="sr-only" aria-live="polite">
                {announce}
                {phase === "playing" &&
                  ` The word has ${letters.length} letters. Already guessed: ${guessed.join(", ") || "none"}.`}
              </p>
            </div>

            {/* definition card (solved / failed) */}
            <AnimatePresence>
              {(phase === "solved" || phase === "failed") && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className={cn(
                    "rounded-2xl border p-4",
                    phase === "solved" ? "border-primary/30 bg-sage/25 dark:bg-sage/15" : "border-border/70 bg-muted/40"
                  )}
                  role="status"
                >
                  <p className="font-display text-base font-semibold text-foreground">
                    {phase === "solved" ? (
                      <>
                        {term.word.toUpperCase()} <span aria-hidden>{term.emoji}</span> — bloomed with {petals} petal{petals === 1 ? "" : "s"} to spare 💗
                      </>
                    ) : (
                      <>
                        The word was {term.word.toUpperCase()} <span aria-hidden>{term.emoji}</span>
                      </>
                    )}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{term.definition}</p>
                  <Button className="mt-4 w-full rounded-full" size="lg" onClick={nextWord}>
                    {roundIdx + 1 >= ROUNDS ? "See the garden" : "Next word"}
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* hint + keyboard */}
            {phase === "playing" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={revealHint}
                    disabled={petals <= 1}
                    className="min-h-[44px] rounded-full"
                    aria-label="Reveal one letter — costs one petal"
                  >
                    <Lightbulb className="h-3.5 w-3.5" aria-hidden /> Reveal a letter · costs 1 petal
                  </Button>
                </div>
                <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-9" role="group" aria-label="Letter keyboard">
                  {ALPHABET.map((l) => {
                    const used = guessed.includes(l);
                    const inWord = uniqueLetters.includes(l);
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => guess(l)}
                        disabled={used}
                        aria-label={`letter ${l}${used ? (inWord ? " — in the word" : " — already tried") : ""}`}
                        className={cn(
                          "min-h-[44px] rounded-xl border-2 font-display text-sm font-bold transition-all",
                          used
                            ? inWord
                              ? "border-sage bg-sage/50 text-accent-foreground"
                              : "border-border/50 bg-muted text-muted-foreground/40"
                            : "border-border/70 bg-background text-foreground hover:border-primary/60 hover:bg-blossom-soft/50 active:scale-95 focus-visible:border-primary focus-visible:outline-none dark:hover:bg-plum/30"
                        )}
                        style={{ touchAction: "manipulation" }}
                      >
                        {l}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* garden summary */}
        {phase === "over" && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-blossom-soft/80 via-card to-lav/70 p-6 text-center dark:from-plum/40 dark:via-card dark:to-plum/20"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary/80 dark:text-lav/80">
              {blooms === ROUNDS ? "A whole garden in bloom 🌸" : blooms >= 5 ? "The garden is glowing 💗" : "Every word plants a seed 💗"}
            </p>
            <p className="font-display text-5xl font-bold text-primary dark:text-lav">{scorePct}%</p>
            <div className="flex items-center gap-1" aria-label={`${stars} of 3 stars`}>
              {[1, 2, 3].map((s) => (
                <Star key={s} className={cn("h-6 w-6", s <= stars ? "fill-gold text-gold" : "text-muted-foreground/40")} aria-hidden />
              ))}
            </div>
            <div className="flex items-center gap-1.5" aria-hidden>
              {petalsByRound.map((p, i) => (
                <motion.span
                  key={i}
                  initial={reduceMotion ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 18 }}
                >
                  <MiniFlower petals={p} active={false} />
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/80">
              <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">{blooms}/{ROUNDS} words bloomed</span>
              <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">{banked} petals banked</span>
              <span className="rounded-full bg-card/80 px-3 py-1.5 font-semibold shadow-sm">{elapsed}s</span>
            </div>
            <Button onClick={restart} className="mt-2 min-h-[48px] rounded-full px-8">
              <RotateCcw className="h-4 w-4" aria-hidden /> Plant a new garden
            </Button>
          </motion.div>
        )}
      </div>
    </GameShell>
  );
}
