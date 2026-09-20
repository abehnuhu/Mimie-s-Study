"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { anatomyLabels } from "@/lib/game-content";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Simplified schematic of the female reproductive tract.
 * Marker positions are approximate & educational only.
 * 1 Fundus · 2 Fallopian tube · 3 Ovary · 4 Myometrium · 5 Endometrium · 6 Cervix · 7 Vagina · 8 Uterine cavity
 */
const MARKERS: Record<string, { x: number; y: number }> = {
  Fundus: { x: 300, y: 100 },
  "Fallopian tube": { x: 398, y: 94 },
  Ovary: { x: 452, y: 132 },
  Myometrium: { x: 261, y: 172 },
  Endometrium: { x: 312, y: 222 },
  "Uterine cavity": { x: 300, y: 155 },
  Cervix: { x: 300, y: 278 },
  Vagina: { x: 300, y: 338 },
};

export function AnatomyLabelGame() {
  const [order, setOrder] = useState(() => shuffle(anatomyLabels));
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const item = order[idx];
  const result: GameResult | null = finished ? { score: Math.round((score / order.length) * 100) } : null;

  function pick(name: string) {
    if (picked || !item) return;
    const correct = name === item.label;
    if (correct) setScore((s) => s + 1);
    setPicked(name);
    setTimeout(() => {
      setPicked(null);
      if (idx + 1 >= order.length) setFinished(true);
      else setIdx((i) => i + 1);
    }, 1600);
  }

  function restart() {
    setOrder(shuffle(anatomyLabels));
    setIdx(0);
    setScore(0);
    setPicked(null);
    setFinished(false);
  }

  return (
    <GameShell
      slug="anatomy-label"
      title="Anatomy Label Challenge"
      description="Tap the structure that matches the label."
      icon="Tag"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Label {Math.min(idx + 1, order.length)} of {order.length} · {score} correct
          </p>
          {item && (
            <span className="rounded-full bg-blossom-soft px-3 py-1 text-xs font-semibold text-primary dark:bg-plum/40">
              {item.label}
            </span>
          )}
        </div>

        <svg viewBox="0 0 600 420" className="mx-auto w-full max-w-md select-none" role="img" aria-label="Simplified diagram of the female reproductive system">
          {/* soft background */}
          <rect x="0" y="0" width="600" height="420" rx="18" fill="var(--muted)" opacity="0.4" />

          {/* fallopian tubes */}
          <path d="M300 100 C 340 84, 380 84, 412 108" fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
          <path d="M300 100 C 260 84, 220 84, 188 108" fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" opacity="0.85" />

          {/* ovaries */}
          <ellipse cx="452" cy="132" rx="20" ry="14" fill="var(--chart-4)" opacity="0.9" />
          <ellipse cx="148" cy="132" rx="20" ry="14" fill="var(--chart-4)" opacity="0.9" />

          {/* uterus body: myometrium */}
          <path
            d="M300 95 C 345 108, 352 160, 344 210 C 336 252, 320 268, 300 272 C 280 268, 264 252, 256 210 C 248 160, 255 108, 300 95 Z"
            fill="var(--primary)"
            opacity="0.55"
          />
          {/* endometrium (inner lining) */}
          <path
            d="M300 115 C 325 126, 330 165, 326 205 C 322 238, 312 252, 300 256 C 288 252, 278 238, 274 205 C 270 165, 275 126, 300 115 Z"
            fill="var(--chart-5)"
            opacity="0.95"
          />
          {/* uterine cavity slit */}
          <path d="M300 130 L 300 246" stroke="var(--card)" strokeWidth="6" strokeLinecap="round" />

          {/* cervix */}
          <path d="M282 268 C 282 292, 318 292, 318 268 C 318 286, 282 286, 282 268 Z" fill="var(--primary)" opacity="0.75" />
          <rect x="284" y="262" width="32" height="30" rx="10" fill="none" stroke="var(--primary)" strokeWidth="5" opacity="0.7" />

          {/* vagina */}
          <path d="M288 296 L 288 370 Q 300 384 312 370 L 312 296 Z" fill="var(--chart-1)" opacity="0.4" />

          {/* markers */}
          {anatomyLabels.map((label) => {
            const pos = MARKERS[label.label];
            if (!pos) return null;
            const isTarget = item?.label === label.label;
            const isPicked = picked === label.label;
            return (
              <g key={label.label} onClick={() => pick(label.label)} className="cursor-pointer">
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={picked ? 17 : 13}
                  fill={picked ? (isPicked ? (isTarget ? "var(--chart-3)" : "var(--destructive)") : "var(--card)") : "var(--card)"}
                  stroke={picked && isPicked ? "var(--foreground)" : "var(--primary)"}
                  strokeWidth="2.5"
                  style={{ transition: "r .2s" }}
                />
                <text
                  x={pos.x}
                  y={pos.y + 5}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--foreground)"
                  className="pointer-events-none"
                >
                  {anatomyLabels.findIndex((l) => l.label === label.label) + 1}
                </text>
                {picked && isPicked && (
                  <text x={pos.x} y={pos.y - 22} textAnchor="middle" fontSize="12" fontWeight="700" fill={isTarget ? "var(--chart-3)" : "var(--destructive)"} className="pointer-events-none">
                    {isTarget ? "✓" : "✗"}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {picked && item && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-4 rounded-xl px-4 py-3 text-sm",
              picked === item.label ? "bg-sage/40 text-foreground dark:bg-sage/20" : "bg-destructive/10 text-foreground"
            )}
          >
            <span className="flex items-start gap-2">
              {picked === item.label ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />}
              <span>
                <strong>{item.label}:</strong> {item.description}
              </span>
            </span>
          </motion.div>
        )}

        <p className="mt-3 text-center text-[11px] italic text-muted-foreground">
          Educational schematic — simplified for learning, not a clinical atlas.
        </p>
      </div>
    </GameShell>
  );
}
