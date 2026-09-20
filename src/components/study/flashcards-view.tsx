"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/app-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { EmptyState } from "./shared-cards";
import { MiniProgress } from "./progress-widgets";
import { SpeakButton } from "./speak-button";
import {
  Layers, RefreshCcw, ChevronRight, CheckCircle2, RotateCw, Sparkles, Keyboard, RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashCard {
  id: string;
  topic: string;
  front: string;
  back: string;
  lessonId: string;
  lessonTitle: string;
  course: string;
  courseSlug: string;
}

interface DeckData {
  total: number;
  courses: { slug: string; title: string; count: number }[];
  cards: FlashCard[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardsView({ courseSlug }: { courseSlug?: string }) {
  const { go, triggerConfetti, refreshBootstrap } = useAppStore();
  const [data, setData] = useState<DeckData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>(courseSlug ?? "all");
  const [deck, setDeck] = useState<FlashCard[]>([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<string[]>([]);
  const [learning, setLearning] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);
  const startedAt = useRef(Date.now());

  // load deck
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/flashcards", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Couldn't load your flashcards 💗");
          return;
        }
        setData(json);
      } catch {
        setError("We lost the connection for a moment 💗");
      }
    })();
  }, []);

  // rebuild deck when filter changes
  useEffect(() => {
    if (!data) return;
    const cards = filter === "all" ? data.cards : data.cards.filter((c) => c.courseSlug === filter);
    setDeck(shuffle(cards));
    setIdx(0);
    setFlipped(false);
    setKnown([]);
    setLearning([]);
    setFinished(false);
    setSaved(false);
    startedAt.current = Date.now();
  }, [data, filter]);

  const card = deck[idx];

  function grade(isKnown: boolean) {
    if (!card) return;
    if (isKnown) setKnown((k) => [...k, card.id]);
    else setLearning((l) => [...l, card.id]);
    setFlipped(false);
    if (idx + 1 >= deck.length) setFinished(true);
    else setIdx((i) => i + 1);
  }

  // keyboard shortcuts: space/enter flip, arrows grade
  useEffect(() => {
    if (finished || deck.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === "Space" || e.key === "Enter") {
        e.preventDefault();
        setFlipped((v) => !v);
      } else if (flipped && (e.key === "ArrowRight" || e.key.toLowerCase() === "l")) {
        grade(true);
      } else if (flipped && (e.key === "ArrowLeft" || e.key.toLowerCase() === "k")) {
        grade(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, idx, finished, deck]);

  async function saveSession() {
    if (saved || deck.length === 0) return;
    setSaved(true);
    const topics = Array.from(new Set(deck.map((c) => c.topic))).slice(0, 6);
    try {
      const res = await fetch("/api/flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          seen: known.length + learning.length,
          known: known.length,
          timeSec: Math.floor((Date.now() - startedAt.current) / 1000),
          topics,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        toast(`Cram session saved · +${json.xpGained} XP 💗`, {
          description: json.leveledUp ? `Level ${json.newLevel} — look at you growing 🌸` : "Little by little.",
        });
        for (const badge of json.newBadges ?? []) {
          toast(`🏅 Badge unlocked: ${badge.title}`, { description: badge.description });
        }
        refreshBootstrap();
        if (known.length === deck.length && deck.length >= 5) triggerConfetti();
      }
    } catch {
      toast("We lost the connection — your XP is safe 💗");
      setSaved(false);
    }
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState icon={Layers} title="Couldn't open the deck." hint={error} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-2xl space-y-4" aria-busy="true">
        <Skeleton className="h-10 w-56 rounded-xl" />
        <Skeleton className="h-72 rounded-3xl" />
      </div>
    );
  }

  // ── results screen ──
  if (finished) {
    const pct = deck.length ? Math.round((known.length / deck.length) * 100) : 0;
    return (
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl space-y-5">
        <Card className="overflow-hidden border-primary/25">
          <div className="bg-gradient-to-br from-blossom-soft/80 to-lav/60 px-6 py-8 text-center dark:from-plum/30 dark:to-plum/10">
            <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
            <p className="relative font-display text-4xl font-semibold text-foreground">{pct}%</p>
            <p className="relative mt-1 text-sm text-muted-foreground">
              {known.length} known · {learning.length} still learning · {deck.length} cards
            </p>
          </div>
          <CardContent className="space-y-4 p-5">
            <p className="text-center text-sm text-foreground/90">
              {pct === 100
                ? "The whole deck, cold. Take the points and smile 😌"
                : pct >= 70
                ? "Solid run — the learning pile is small enough to finish now."
                : "Every 'still learning' card just told you exactly what to revisit 💗"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {!saved ? (
                <Button className="rounded-full" onClick={saveSession}>
                  <Sparkles className="h-4 w-4" aria-hidden /> Save session · earn XP
                </Button>
              ) : (
                <span className="rounded-full bg-sage px-4 py-2 text-sm font-medium text-accent-foreground">
                  Session saved ✓
                </span>
              )}
              <Button variant="outline" className="rounded-full" onClick={() => setFilter(filter)}>
                <RotateCcw className="h-4 w-4" aria-hidden /> Reshuffle & repeat
              </Button>
              <Button variant="ghost" className="rounded-full" onClick={() => go({ name: "dashboard" })}>
                Back home
              </Button>
            </div>
          </CardContent>
        </Card>

        {learning.length > 0 && (
          <Card className="border-border/70">
            <CardContent className="p-5">
              <p className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-foreground">
                <RotateCw className="h-4 w-4 text-primary" aria-hidden /> Still learning
              </p>
              <div className="space-y-2">
                {deck
                  .filter((c) => learning.includes(c.id))
                  .map((c) => (
                    <div key={c.id} className="flex items-start gap-2 rounded-xl border border-border/50 bg-muted/30 px-4 py-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">{c.front}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{c.back}</p>
                      </div>
                      <SpeakButton text={c.front} className="mt-0.5 shrink-0" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    );
  }

  // ── deck hub (no cards picked yet / choosing) ──
  if (deck.length === 0) {
    return (
      <div className="mx-auto max-w-3xl space-y-5">
        <div>
          <h1 className="font-display text-3xl font-semibold text-foreground">Flashcard Cram</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Flip, recall, repeat — every card earns a little XP 💗
          </p>
        </div>
        {data.cards.length === 0 ? (
          <EmptyState
            icon={Layers}
            title="No flashcards yet."
            hint="Flashcards live inside published lessons — open a flagship lesson to find them."
            action={
              <Button className="rounded-full" onClick={() => go({ name: "curriculum" })}>
                Explore lessons
              </Button>
            }
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            <FilterChip active={filter === "all"} label={`All courses · ${data.total}`} onClick={() => setFilter("all")} />
            {data.courses.map((c) => (
              <FilterChip
                key={c.slug}
                active={filter === c.slug}
                label={`${c.title} · ${c.count}`}
                onClick={() => setFilter(c.slug)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── card runner ──
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground" onClick={() => setFilter("all")}>
          <RefreshCcw className="h-3.5 w-3.5" aria-hidden /> Change deck
        </Button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-semibold text-foreground">Flashcard Cram</p>
          <p className="text-xs text-muted-foreground">
            Card {idx + 1} of {deck.length} · {known.length} known · {learning.length} learning
          </p>
        </div>
        <span className="rounded-full bg-lav px-3 py-1 text-[11px] font-medium text-secondary-foreground dark:bg-plum/30">
          {filter === "all" ? "All courses" : data.courses.find((c) => c.slug === filter)?.title}
        </span>
      </div>

      <MiniProgress value={(idx / deck.length) * 100} />

      <AnimatePresence mode="wait">
        {card && (
          <motion.div
            key={card.id + idx}
            initial={{ opacity: 0, x: 32, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -32, rotate: -1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              role="button"
              tabIndex={0}
              className="block w-full cursor-pointer text-left [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-3xl"
              onClick={() => setFlipped((v) => !v)}
              aria-label={`Flashcard: ${card.front}. Tap to flip.`}
            >
              <motion.div
                className="relative min-h-[300px] w-full [transform-style:preserve-3d]"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* front */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-border/70 bg-card p-7 shadow-lg shadow-primary/5 [backface-visibility:hidden]">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blossom-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary dark:bg-plum/40">
                      {card.topic}
                    </span>
                    <SpeakButton text={card.front} />
                  </div>
                  <p className="font-display text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                    {card.front}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">{card.course}</span>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-primary">
                      <Keyboard className="h-3.5 w-3.5" aria-hidden /> space to flip
                    </span>
                  </div>
                </div>
                {/* back */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-primary/30 bg-gradient-to-br from-blossom-soft/80 to-lav/60 p-7 shadow-lg shadow-primary/10 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:from-plum/40 dark:to-plum/20">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-card/80 px-2.5 py-0.5 text-[11px] font-semibold text-primary backdrop-blur">
                      answer
                    </span>
                    <SpeakButton text={card.back} />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">{card.back}</p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => { e.stopPropagation(); go({ name: "lesson", id: card.lessonId }); }}
                      className="rounded-full bg-card/80 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur transition hover:bg-card"
                    >
                      From: {card.lessonTitle}
                    </button>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-primary">
                      <Keyboard className="h-3.5 w-3.5" aria-hidden /> ← learning · known →
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!flipped ? (
        <Button size="lg" className="w-full rounded-full" onClick={() => setFlipped(true)}>
          Flip the card
        </Button>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" className="rounded-full border-gold/50 text-foreground" onClick={() => grade(false)}>
            <RotateCw className="h-4 w-4" aria-hidden /> Still learning
          </Button>
          <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground" onClick={() => grade(true)}>
            <CheckCircle2 className="h-4 w-4" aria-hidden /> Got it <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
