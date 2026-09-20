"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Pause, Play, X, Loader2, Gauge, SkipForward, Repeat, Timer } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { getAudioUrl, chunkForTts } from "./tts-client";
import type { LessonSection } from "@/lib/types";

/** Section types worth reading aloud (tables are unreadable pipe syntax; quiz prompts are interactive). */
const NARRATABLE = new Set(["text", "callout", "clinical_pearl", "memory_trick", "case", "summary"]);

/** Narration speeds the player cycles through. */
const SPEEDS = [0.75, 1, 1.25] as const;
type NarrationSpeed = (typeof SPEEDS)[number];
const SPEED_STORAGE_KEY = "mimie:narration-speed";
const LISTENING_STORAGE_KEY = "mimie:listening";
const CONTINUOUS_STORAGE_KEY = "mimie:narration-continuous";

/** Sleep-timer presets (minutes) — 0 means off. */
const SLEEP_OPTIONS = [0, 10, 20, 30] as const;
type SleepMinutes = (typeof SLEEP_OPTIONS)[number];

/** Read the continuous-play preference (device-local, default off). */
function readContinuous(): boolean {
  try {
    return window.localStorage.getItem(CONTINUOUS_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

interface ListeningData {
  total: number;
  days: Record<string, number>;
}

function readListening(): ListeningData {
  try {
    const raw = window.localStorage.getItem(LISTENING_STORAGE_KEY);
    if (!raw) return { total: 0, days: {} };
    const parsed = JSON.parse(raw);
    if (typeof parsed?.total !== "number" || typeof parsed?.days !== "object" || parsed.days === null) {
      return { total: 0, days: {} };
    }
    return { total: parsed.total, days: parsed.days };
  } catch {
    return { total: 0, days: {} };
  }
}

/** Persist listening-seconds (device-local). Writes are best-effort. */
function addListeningSeconds(sec: number) {
  if (sec <= 0) return;
  try {
    const data = readListening();
    const today = new Date().toISOString().slice(0, 10);
    data.total += sec;
    data.days[today] = (data.days[today] ?? 0) + sec;
    // keep the map bounded — drop days older than 60
    const keys = Object.keys(data.days).sort();
    while (keys.length > 60) {
      delete data.days[keys.shift()!];
    }
    window.localStorage.setItem(LISTENING_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage unavailable — listening stats are a nice-to-have
  }
}

const SECTION_VOICE_LABEL: Record<string, string> = {
  clinical_pearl: "Clinical pearl",
  memory_trick: "Memory trick",
  case: "Case study",
  callout: "Why this matters",
  summary: "Summary",
  text: "Section",
};

interface NarrationBlock {
  /** index into the rendered sections (for scroll + highlight); null = intro */
  sectionIndex: number | null;
  label: string;
  chunks: string[];
}

interface LessonNarratorProps {
  lesson: { title: string; description: string | null };
  sections: LessonSection[];
  /** Start reading automatically once the script is ready (arriving from continuous play). */
  autoStart?: boolean;
  /** The lesson that follows this one — enables the cross-lesson queue. */
  next?: { id: string; title: string } | null;
  /** Navigate to another lesson (used for continuous play / "up next"). */
  onGoNext?: (id: string) => void;
}

/**
 * "Listen to this lesson" — reads the lesson aloud section by section
 * with a floating player, auto-scroll and active-section highlight.
 */
export function LessonNarrator({ lesson, sections, autoStart, next, onGoNext }: LessonNarratorProps) {
  const [phase, setPhase] = useState<"idle" | "loading" | "playing" | "paused" | "done">("idle");
  const [blockIdx, setBlockIdx] = useState(0);
  const [chunkIdx, setChunkIdx] = useState(0);
  // continuous play — keep reading into the next lesson when this one ends
  const [continuous, setContinuous] = useState(() => {
    if (typeof window === "undefined") return false;
    return readContinuous();
  });
  // ref mirror — the final onended closure must read the *latest* preference,
  // even when continuous was toggled mid-playback
  const continuousRef = useRef(continuous);
  // ── sleep timer: pause narration after N minutes of playing ──
  const [sleepMin, setSleepMin] = useState<SleepMinutes>(0);
  const [sleepLeftSec, setSleepLeftSec] = useState(0);
  const sleepDeadlineRef = useRef(0);
  /** when the current pause started — lets the sleep timer truly freeze while paused. */
  const sleepPausedAtRef = useRef(0);
  // lazy-init from localStorage — the speed control only renders after user interaction,
  // so there is no SSR markup to mismatch
  const [speed, setSpeed] = useState<NarrationSpeed>(() => {
    if (typeof window === "undefined") return 1;
    try {
      const v = Number(window.localStorage.getItem(SPEED_STORAGE_KEY));
      return SPEEDS.includes(v as NarrationSpeed) ? (v as NarrationSpeed) : 1;
    } catch {
      return 1;
    }
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const advancingRef = useRef(false);
  const speedRef = useRef<NarrationSpeed>(speed);
  const listeningTickRef = useRef(0);
  const autoStartRef = useRef(autoStart ?? false);

  // ── build the narration script ──
  const blocks: NarrationBlock[] = useMemo(() => {
    const list: NarrationBlock[] = [];
    const intro = lesson.description?.trim();
    if (intro) {
      list.push({ sectionIndex: null, label: "Introduction", chunks: chunkForTts(intro) });
    }
    sections.forEach((s, i) => {
      if (!NARRATABLE.has(s.type)) return;
      // summary bodies are "- bullet" lines → read as sentences
      const raw =
        s.type === "summary"
          ? s.body
              .split("\n")
              .map((l) => l.trim().replace(/^-\s*/, ""))
              .filter(Boolean)
              .join(". ")
          : s.body;
      const spoken = `${s.title ? `${s.title}. ` : ""}${raw}`;
      const chunks = chunkForTts(spoken);
      if (chunks.length > 0) {
        list.push({ sectionIndex: i, label: s.title ?? SECTION_VOICE_LABEL[s.type] ?? "Section", chunks });
      }
    });
    return list;
  }, [lesson.description, sections]);

  const totalChunks = useMemo(() => blocks.reduce((s, b) => s + b.chunks.length, 0), [blocks]);
  const doneChunks = useMemo(() => {
    let n = 0;
    for (let i = 0; i < blockIdx && i < blocks.length; i++) n += blocks[i].chunks.length;
    return n + Math.min(chunkIdx, blocks[blockIdx]?.chunks.length ?? 0);
  }, [blocks, blockIdx, chunkIdx]);

  const clearHighlight = useCallback(() => {
    document.querySelectorAll(".narrator-active").forEach((el) => el.classList.remove("narrator-active"));
  }, []);

  const highlightBlock = useCallback((sectionIndex: number | null) => {
    clearHighlight();
    if (sectionIndex === null) return;
    const el = document.querySelector(`[data-narrator-section="${sectionIndex}"]`);
    if (el) {
      el.classList.add("narrator-active");
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [clearHighlight]);

  // ── stop everything on unmount / lesson change ──
  useEffect(() => {
    return () => {
      advancingRef.current = false;
      audioRef.current?.pause();
      audioRef.current = null;
      document.querySelectorAll(".narrator-active").forEach((el) => el.classList.remove("narrator-active"));
    };
  }, [blocks]);

  // self-reference for sequential advancement (ref breaks the recursion lint)
  const playChunkRef = useRef<(bi: number, ci: number) => void>(() => {});

  /** Narration reached the end — either stop, or roll into the next lesson (continuous queue). */
  const finishAll = useCallback(() => {
    setPhase("done");
    clearHighlight();
    if (continuousRef.current && next && onGoNext) {
      toast(`Next up: ${next.title}`, { description: "Continuous listening — rolling into the next lesson 💗" });
      onGoNext(next.id);
    }
  }, [next, onGoNext, clearHighlight]);

  const playChunk = useCallback(
    async (bi: number, ci: number) => {
      const block = blocks[bi];
      if (!block) {
        // finished everything
        finishAll();
        return;
      }
      const text = block.chunks[ci];
      if (text === undefined) {
        // safety — shouldn't happen
        finishAll();
        return;
      }
      setBlockIdx(bi);
      setChunkIdx(ci);
      setPhase("loading");
      highlightBlock(block.sectionIndex);
      try {
        const url = await getAudioUrl(text);
        if (!advancingRef.current) return; // stopped while loading
        audioRef.current?.pause();
        const audio = new Audio(url);
        audio.playbackRate = speedRef.current;
        audioRef.current = audio;
        audio.onended = () => {
          if (!advancingRef.current) return;
          const nextCi = ci + 1;
          if (nextCi < block.chunks.length) {
            playChunkRef.current(bi, nextCi);
          } else if (bi + 1 < blocks.length) {
            playChunkRef.current(bi + 1, 0);
          } else {
            finishAll();
          }
        };
        audio.onerror = () => {
          if (!advancingRef.current) return;
          toast("The audio stumbled — stopping here 💗");
          setPhase("idle");
          clearHighlight();
        };
        setPhase("playing");
        await audio.play();
        // prefetch the next chunk while this one plays
        const nextText =
          ci + 1 < block.chunks.length
            ? block.chunks[ci + 1]
            : blocks[bi + 1]?.chunks[0];
        if (nextText) getAudioUrl(nextText).catch(() => {});
      } catch (err) {
        if (!advancingRef.current) return;
        setPhase("idle");
        clearHighlight();
        toast(err instanceof Error ? err.message : "Voice is resting right now 💗");
      }
    },
    [blocks, highlightBlock, clearHighlight, finishAll]
  );

  // keep the ref in sync inside an effect (never during render)
  useEffect(() => {
    playChunkRef.current = playChunk;
  }, [playChunk]);

  const start = useCallback(() => {
    if (blocks.length === 0) {
      toast("Nothing to read aloud in this lesson yet 💗");
      return;
    }
    advancingRef.current = true;
    audioRef.current?.pause();
    playChunk(0, 0);
  }, [blocks, playChunk]);

  // auto-start once the script is ready (arriving via continuous play from the previous lesson).
  // The timer is mount-scoped: dep churn (scroll re-renders create new playChunk identities)
  // must never cancel it — playChunkRef guarantees the freshest function at fire time.
  useEffect(() => {
    if (!autoStartRef.current || blocks.length === 0) return;
    autoStartRef.current = false; // once per mount — a manual stop sticks
    const t = window.setTimeout(() => {
      if (advancingRef.current) return; // user already interacted — let them win
      advancingRef.current = true;
      playChunkRef.current(0, 0);
    }, 350);
    return () => window.clearTimeout(t);
  }, [blocks]);

  // ── listening-time tracking helpers ──
  function flushListening() {
    if (listeningTickRef.current > 0) {
      addListeningSeconds(listeningTickRef.current);
      listeningTickRef.current = 0;
    }
  }

  const pause = useCallback(() => {
    audioRef.current?.pause();
    if (sleepDeadlineRef.current > 0) sleepPausedAtRef.current = Date.now(); // freeze the sleep timer
    flushListening();
    setPhase("paused");
  }, []);
  // the interval closure needs a stable pause — ref keeps it fresh without re-subscribing
  const pauseRef = useRef(pause);
  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  const resume = useCallback(() => {
    // resume the sleep timer where it froze (shift the deadline by the paused span)
    if (sleepDeadlineRef.current > 0 && sleepPausedAtRef.current > 0) {
      sleepDeadlineRef.current += Date.now() - sleepPausedAtRef.current;
      sleepPausedAtRef.current = 0;
    }
    const audio = audioRef.current;
    if (audio) {
      setPhase("playing");
      audio.play().catch(() => {
        // lost the element → restart current chunk
        playChunk(blockIdx, chunkIdx);
      });
    } else {
      playChunk(blockIdx, chunkIdx);
    }
  }, [blockIdx, chunkIdx, playChunk]);

  const stop = useCallback(() => {
    advancingRef.current = false;
    audioRef.current?.pause();
    audioRef.current = null;
    flushListening();
    setPhase("idle");
    setBlockIdx(0);
    setChunkIdx(0);
    sleepDeadlineRef.current = 0;
    sleepPausedAtRef.current = 0;
    setSleepMin(0);
    setSleepLeftSec(0);
    clearHighlight();
  }, [clearHighlight]);

  useEffect(() => {
    if (phase !== "playing") {
      flushListening();
      return;
    }
    // arm a pending sleep timer the moment playback actually starts (set from the idle pill).
    // the ref write is sync; the countdown display picks it up on the interval's first tick.
    if (sleepMin > 0 && sleepDeadlineRef.current === 0) {
      sleepDeadlineRef.current = Date.now() + sleepMin * 60000;
    }
    const t = setInterval(() => {
      listeningTickRef.current += 1;
      if (listeningTickRef.current >= 15) flushListening(); // periodic flush
      // sleep-timer countdown (only ticks while actually playing)
      if (sleepDeadlineRef.current > 0) {
        const left = Math.max(0, Math.round((sleepDeadlineRef.current - Date.now()) / 1000));
        setSleepLeftSec(left);
        if (left === 0) {
          sleepDeadlineRef.current = 0;
          setSleepMin(0);
          pauseRef.current();
          toast("Sleep timer finished — narration paused 💤");
        }
      }
    }, 1000);
    return () => {
      clearInterval(t);
      flushListening();
    };
  }, [phase]);

  // flush whatever is left when the narrator unmounts
  useEffect(() => () => flushListening(), []);

  // ── speed control (works from the idle pill too — no need to start playback first) ──
  function cycleSpeed() {
    const next = SPEEDS[(SPEEDS.indexOf(speedRef.current) + 1) % SPEEDS.length];
    speedRef.current = next;
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
    try {
      window.localStorage.setItem(SPEED_STORAGE_KEY, String(next));
    } catch {
      // best-effort persistence
    }
  }

  // ── continuous play: roll into the next lesson automatically ──
  function toggleContinuous() {
    const nextVal = !continuous;
    setContinuous(nextVal);
    continuousRef.current = nextVal; // keep the mirror in sync immediately
    try {
      window.localStorage.setItem(CONTINUOUS_STORAGE_KEY, nextVal ? "1" : "0");
    } catch {
      // best-effort persistence
    }
    toast(
      nextVal
        ? "Continuous listening on — I'll roll into the next lesson 💗"
        : "Continuous listening off",
      { description: nextVal && next ? `Next: ${next.title}` : undefined }
    );
  }

  // ── sleep timer: cycle off → 10 → 20 → 30 minutes (works from the idle pill too — arms on play) ──
  function cycleSleep() {
    const nextVal = SLEEP_OPTIONS[(SLEEP_OPTIONS.indexOf(sleepMin) + 1) % SLEEP_OPTIONS.length];
    setSleepMin(nextVal);
    if (nextVal === 0) {
      sleepDeadlineRef.current = 0;
      sleepPausedAtRef.current = 0;
      setSleepLeftSec(0);
      toast("Sleep timer off");
    } else if (phase === "playing") {
      sleepDeadlineRef.current = Date.now() + nextVal * 60000;
      setSleepLeftSec(nextVal * 60);
      toast(`Sleep timer set — narration pauses in ${nextVal} minutes 💤`);
    } else {
      // armed before playback — the countdown starts when Listen is pressed
      sleepDeadlineRef.current = 0;
      sleepPausedAtRef.current = 0;
      setSleepLeftSec(0);
      toast(`Sleep timer set for ${nextVal} minutes 💤`, {
        description: "The countdown starts when you press play.",
      });
    }
  }

  const toggle = useCallback(() => {
    if (phase === "idle" || phase === "done") start();
    else if (phase === "playing") pause();
    else if (phase === "paused") resume();
    else if (phase === "loading") stop();
  }, [phase, start, pause, resume, stop]);

  // ── keyboard shortcut: Alt+L toggles narration; hero "Listen" button dispatches the same event ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        toggle();
      }
    };
    const onToggleEvent = () => toggle();
    window.addEventListener("keydown", onKey);
    window.addEventListener("mimie:narration-toggle", onToggleEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mimie:narration-toggle", onToggleEvent);
    };
  }, [toggle]);

  const currentBlock = blocks[blockIdx];
  const pct = totalChunks > 0 ? Math.round((doneChunks / totalChunks) * 100) : 0;

  // ── idle trigger pill (only when there's something to read) ──
  if (phase === "idle" || phase === "done") {
    if (blocks.length === 0) return null;
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8 print:hidden"
        >
          {/* up next — the cross-lesson queue hand-off */}
          {phase === "done" && next && onGoNext && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onGoNext(next.id)}
              className="group flex max-w-[280px] items-center gap-2.5 rounded-full border border-primary/25 bg-card/90 py-2 pl-3.5 pr-4 text-left shadow-lg shadow-primary/10 backdrop-blur transition-all hover:border-primary/50 hover:shadow-primary/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={`Listen to the next lesson: ${next.title}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lav text-secondary-foreground dark:bg-plum/40">
                <SkipForward className="h-3 w-3" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-primary/80">Up next</span>
                <span className="block truncate text-xs font-medium text-foreground">{next.title}</span>
              </span>
            </motion.button>
          )}
          <div className="flex items-center gap-1.5">
            {/* speed is reachable before playback starts — set it and forget it */}
            <button
              onClick={cycleSpeed}
              className="flex h-10 items-center gap-1 rounded-full border border-border/70 bg-card/90 px-3 text-[11px] font-semibold tabular-nums text-muted-foreground shadow-md backdrop-blur transition hover:border-primary/50 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={`Narration speed ${speed}× — tap to change`}
              title="Narration speed"
            >
              <Gauge className="h-3.5 w-3.5" aria-hidden />
              {speed}×
            </button>
            {/* continuous queue toggle */}
            {next && (
              <button
                onClick={toggleContinuous}
                aria-pressed={continuous}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border shadow-md backdrop-blur transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  continuous
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border/70 bg-card/90 text-muted-foreground hover:border-primary/50 hover:text-primary"
                )}
                aria-label={continuous ? "Continuous listening on — turns off automatically playing the next lesson" : "Turn on continuous listening — keep playing into the next lesson"}
                title="Continuous listening"
              >
                <Repeat className="h-4 w-4" aria-hidden />
              </button>
            )}
            {/* sleep timer — reachable before playback too; countdown starts on play */}
            <button
              onClick={cycleSleep}
              aria-pressed={sleepMin !== 0}
              className={cn(
                "flex h-10 items-center justify-center rounded-full border text-[11px] font-semibold tabular-nums shadow-md backdrop-blur transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                sleepMin !== 0
                  ? "border-primary/50 bg-primary/15 px-2.5 text-primary"
                  : "w-10 border-border/70 bg-card/90 text-muted-foreground hover:border-primary/50 hover:text-primary"
              )}
              aria-label={
                sleepMin === 0
                  ? "Set a sleep timer — pauses narration after 10, 20 or 30 minutes"
                  : `Sleep timer ${sleepMin} minutes set — tap to change or turn off`
              }
              title="Sleep timer"
            >
              <Timer className="h-4 w-4" aria-hidden />
              {sleepMin !== 0 && `${sleepMin}m`}
            </button>
            <button
              onClick={phase === "done" ? start : toggle}
              className="group flex items-center gap-2.5 rounded-full border border-primary/30 bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-xl shadow-primary/15 backdrop-blur transition-all hover:border-primary/60 hover:shadow-primary/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Listen to this lesson"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground">
                <Headphones className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="hidden sm:inline">
                {phase === "done" ? "Listen again" : "Listen to this lesson"}
              </span>
              <span className="sm:hidden">{phase === "done" ? "Replay" : "Listen"}</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // ── active player bar ──
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        role="region"
        aria-label="Lesson narration player"
        className="fixed inset-x-3 bottom-24 z-40 sm:inset-x-auto sm:bottom-8 sm:left-1/2 sm:w-[420px] sm:-translate-x-1/2 print:hidden"
      >
        <div className="glass rounded-2xl border border-primary/30 p-3.5 shadow-xl shadow-primary/15">
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-md shadow-primary/25 transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={phase === "playing" ? "Pause narration" : "Resume narration"}
            >
              {phase === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : phase === "playing" ? (
                <Pause className="h-4 w-4 fill-current" aria-hidden />
              ) : (
                <Play className="h-4 w-4 fill-current" aria-hidden />
              )}
            </button>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-semibold text-foreground">
                {phase === "loading" ? "Preparing voice…" : currentBlock?.label ?? "Listening"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                Part {doneChunks + (phase === "playing" || phase === "paused" ? 1 : 0)} of {totalChunks}
                {phase === "paused" && " · paused"}
              </p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-primary">
              <Headphones className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden font-mono sm:inline">Alt+L</span>
            </span>
            <button
              onClick={cycleSpeed}
              className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-border/70 bg-card/70 px-2.5 text-[11px] font-semibold tabular-nums text-foreground transition hover:border-primary/50 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={`Narration speed ${speed}× — tap to change`}
              title="Narration speed"
            >
              <Gauge className="h-3.5 w-3.5" aria-hidden />
              {speed}×
            </button>
            {/* sleep timer — off → 10 → 20 → 30 min; pauses narration when it elapses */}
            <button
              onClick={cycleSleep}
              aria-pressed={sleepMin !== 0}
              className={cn(
                "flex h-8 shrink-0 items-center gap-1 rounded-full border px-2.5 text-[11px] font-semibold tabular-nums transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                sleepMin !== 0
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-border/70 bg-card/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
              )}
              aria-label={
                sleepMin === 0
                  ? "Set a sleep timer — pauses narration after 10, 20 or 30 minutes"
                  : `Sleep timer ${sleepMin} minutes — ${Math.ceil(sleepLeftSec / 60)} minutes left, tap to change`
              }
              title="Sleep timer"
            >
              <Timer className="h-3.5 w-3.5" aria-hidden />
              {sleepMin === 0 ? "" : `${Math.ceil(sleepLeftSec / 60)}m`}
            </button>
            {next && (
              <button
                onClick={toggleContinuous}
                aria-pressed={continuous}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  continuous
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border/70 bg-card/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
                )}
                aria-label={continuous ? "Continuous listening on — playing continues into the next lesson" : "Turn on continuous listening"}
                title={`Continuous listening${next ? ` — next: ${next.title}` : ""}`}
              >
                <Repeat className="h-3.5 w-3.5" aria-hidden />
              </button>
            )}
            <button
              onClick={stop}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Stop narration"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted" aria-hidden>
            <div
              className={cn("h-full rounded-full bg-gradient-to-r from-primary to-plum transition-[width] duration-500")}
              style={{ width: `${Math.max(3, pct)}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
