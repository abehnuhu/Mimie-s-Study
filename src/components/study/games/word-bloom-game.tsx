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
  { word: "partograph", emoji: "📈", category: "Labour", clue: "the one-page labour record whose alert and action lines keep you honest", definition: "The graphic record of labour — cervical dilation plotted against time, with alert and action lines that reveal prolonged or obstructed labour before it becomes disaster." },
  { word: "fundus", emoji: "🤰", category: "Anatomy", clue: "the top of the uterus, felt through the abdomen to track growth and tone", definition: "The rounded upper part of the uterus. Its height in pregnancy tracks the baby's growth; after birth it must feel firm and shrink steadily — a soft fundus after birth signals haemorrhage risk." },
  { word: "meconium", emoji: "🌊", category: "Newborn", clue: "the baby's first dark stool, sometimes drawn into the waters when baby is distressed", definition: "The newborn's first stool — thick, dark green-black. Meconium-stained liquor can mean fetal distress, and a baby who meconiums before birth may need help clearing their breathing." },
  { word: "oxytocin", emoji: "💗", category: "Pharmacology", clue: "the love hormone that contracts the uterus, releases milk and bonds mother to baby", definition: "The hormone of contraction, let-down and love. Synthetic oxytocin treats PPH and augments labour — always with a watchful eye, because it can over-contract the uterus." },
  { word: "bilirubin", emoji: "💛", category: "Newborn", clue: "the yellow pigment a newborn's immature liver must clear — light helps", definition: "The yellow pigment from broken-down red cells. A newborn's slow liver lets it build up — jaundice — and when it climbs too high, phototherapy and review are needed to protect the brain." },
  { word: "cervix", emoji: "🚪", category: "Anatomy", clue: "the neck of the uterus that thins and opens to let the baby pass", definition: "The lower, narrow part of the uterus. In labour it effaces (thins) and dilates from 1 to 10 centimetres — the cervix is the door the whole first stage is measured by." },
  { word: "perineum", emoji: "🌸", category: "Anatomy", clue: "the stretch of tissue between vagina and anus that birth presses upon", definition: "The area between the vaginal opening and the anus. Warm compresses, slow crowning and perineal massage protect it; tears here are graded first to fourth degree." },
  { word: "lochia", emoji: "🩸", category: "Postnatal", clue: "the after-birth flow: rubra, then serosa, then alba", definition: "The vaginal flow after birth: lochia rubra (red, days 1–3), serosa (pinkish-brown, about a week), then alba (pale). Offensive smell or sudden return to red flow signals infection or retained tissue." },
  { word: "colostrum", emoji: "🥛", category: "Breastfeeding", clue: "the first golden, antibody-rich milk of the first days", definition: "The first milk — thick, golden, rich in antibodies and protein. A few teaspoons are exactly what a newborn's stomach needs: it is the baby's first vaccine." },
  { word: "eclampsia", emoji: "⚡", category: "Emergencies", clue: "the convulsion that severe pre-eclampsia becomes if you miss the warnings", definition: "Convulsions in a woman with hypertensive disease of pregnancy. Prevention is the cure: recognise rising BP, headache, flashing lights and epigastric pain, and act before the seizure. Magnesium sulphate and referral save lives." },
  { word: "vernix", emoji: "🤍", category: "Newborn", clue: "the creamy white coating that protects a baby's skin in the womb", definition: "The cheese-like white coating on a newborn's skin — nature's moisturiser and antimicrobial shield. Do not scrub it away; it absorbs on its own." },
  { word: "lanugo", emoji: "🪶", category: "Newborn", clue: "the fine downy hair on a preterm baby's shoulders and back", definition: "The soft, fine fetal hair that covers a preterm baby's back, shoulders and ears. Its presence helps you estimate gestational age at the first look." },
  { word: "fontanelle", emoji: "👶", category: "Newborn", clue: "the soft meeting place of a newborn's skull bones", definition: "The soft spot where skull bones meet. It should feel flat and soft — a sunken fontanelle suggests dehydration, a bulging one raises concern, and it lets the moulding head squeeze through birth." },
  { word: "episiotomy", emoji: "✂️", category: "Labour", clue: "a controlled cut of the perineum — only when truly indicated", definition: "A deliberate cut of the perineum to enlarge the outlet in an assisted or distressed birth. It is not routine: restrictive use is WHO guidance, and every cut must be repaired with care." },
  { word: "placenta", emoji: "🌳", category: "Labour", clue: "the baby's life-support organ, born in the third stage", definition: "The organ that fed and breathed for the baby. It must be checked for completeness after birth — retained fragments are a cause of haemorrhage and infection." },
  { word: "dilation", emoji: "🌕", category: "Labour", clue: "the opening of the cervix, measured finger to centimetre, 1 to 10", definition: "The widening of the cervix in labour, from 1 cm to the full 10 cm of the second stage. Plotting it on the partograph shows progress — or its absence — at a glance." },
  { word: "effacement", emoji: "📉", category: "Labour", clue: "the thinning of the cervix before it can open wide", definition: "The shortening and thinning of the cervix from its full length to paper-thin. In a first labour the cervix usually effaces before it dilates — the door folding back on itself." },
  { word: "gravida", emoji: "🔢", category: "Pregnancy", clue: "how many times a woman has been pregnant — the G in G3P2", definition: "The number of pregnancies a woman has had, including the current one. G3P2 — third pregnancy, two births — it is shorthand you will say every single day of your working life." },
  { word: "quickening", emoji: "🦋", category: "Pregnancy", clue: "the first butterfly-flutter of fetal movement, felt around 18–20 weeks", definition: "The first fetal movements a mother feels — like butterflies or bubbles — usually at 18–20 weeks (earlier if she has been pregnant before). Movement is life's daily report card." },
  { word: "mastitis", emoji: "🔥", category: "Breastfeeding", clue: "a painful red wedge of the breast with fever", definition: "Inflammation or infection of the breast: a tender red wedge, fever and flu-like aching. Continue breastfeeding or expressing — stopping makes it worse — empty the breast well, and treat per protocol." },
  { word: "involution", emoji: "🔄", category: "Postnatal", clue: "the uterus shrinking back toward the pelvis after birth", definition: "The return of the uterus toward its pre-pregnant size — about a fingerbreadth a day, from the umbilicus to the pelvis in two weeks. The steady drop of the fundus tells you all is well." },
  { word: "kangaroo", emoji: "🦘", category: "Newborn", clue: "skin-to-skin mother care, named for the pouch animal", definition: "Kangaroo mother care: a stable preterm baby held skin-to-skin on the mother's chest, warm, feeding and growing. The most powerful incubator in the world is the mother herself." },
  { word: "phototherapy", emoji: "💡", category: "Newborn", clue: "light treatment that helps a jaundiced baby clear the yellow", definition: "Treatment with special light that transforms bilirubin so the baby can pass it out. Eyes are shielded, feeding continues, and the baby is checked for dehydration and bilirubin trend." },
  { word: "engorgement", emoji: "🎈", category: "Breastfeeding", clue: "the painful over-fullness when the milk comes in on day three to five", definition: "Painfully full, tight, shiny breasts as milk volume rises. Relief: warm compress before a feed, cold after, frequent effective feeding and support — the latch is everything." },
  { word: "primigravida", emoji: "1️⃣", category: "Pregnancy", clue: "a woman pregnant for the very first time", definition: "A woman in her first pregnancy — the one who needs the most teaching, the closest blood-pressure watch (pre-eclampsia favours first pregnancies) and the gentlest encouragement." },
  { word: "puerperium", emoji: "🌙", category: "Postnatal", clue: "the six quiet weeks in which the body returns to its pre-pregnant state", definition: "The puerperium: roughly six weeks after birth of genital and general recovery — involution, lochia, the milk journey, and the emotional weather in which your watching saves lives." },
  { word: "sepsis", emoji: "🌡️", category: "Emergencies", clue: "the fever-and-offensive-lochia infection after birth that kills quietly", definition: "Puerperal sepsis is infection of the genital tract after birth — fever of 38.5°C or more, offensive lochia, a tender uterus. It is a leading killer of new mothers, and it is treatable when you catch it." },
  { word: "caesarean", emoji: "🏥", category: "Labour", clue: "the operation that delivers a baby through the abdomen when birth must be now", definition: "Surgical birth through the abdominal wall and uterus — a decision weighed for obstructed labour, fetal distress, severe pre-eclampsia and more. Skin-to-skin and breastfeeding begin even in theatre." },
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
      description="Guess the midwifery term letter by letter and keep the rose in bloom."
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
