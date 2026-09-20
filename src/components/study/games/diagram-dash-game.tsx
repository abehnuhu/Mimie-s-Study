"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { GameShell, shuffle, type GameResult } from "./game-shell";
import { diagramRounds, type DiagramTile } from "./game-images";
import { CheckCircle2, Lightbulb, Timer, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";

interface LabelChipProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

function LabelChip({ label, selected, onSelect }: LabelChipProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: label });
  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={onSelect}
      style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined, touchAction: "none" }}
      aria-pressed={selected}
      className={cn(
        "min-h-[44px] rounded-full border-2 px-4 py-2 font-display text-sm font-semibold shadow-sm transition-all",
        selected
          ? "border-primary bg-blossom-soft text-primary ring-2 ring-primary/40 dark:bg-plum/40 dark:text-lav"
          : "border-border/70 bg-card text-foreground hover:border-primary/50 hover:shadow-md"
      )}
    >
      {label}
    </button>
  );
}

function PhotoTile({
  tile,
  state,
  wobble,
  onSelect,
}: {
  tile: DiagramTile;
  state: "empty" | "placed" | "wrong";
  wobble: boolean;
  onSelect: () => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: tile.id });
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={setNodeRef}
      animate={
        wobble && !reduceMotion
          ? { x: [0, -6, 6, -4, 4, 0] }
          : { x: 0, scale: isOver ? 1.04 : 1 }
      }
      transition={{ duration: 0.45 }}
      className="relative"
    >
      <button
        onClick={onSelect}
        aria-label={state === "placed" ? `${tile.label} — correctly labelled` : `Photo awaiting a label: drop or tap a label for this photo`}
        className={cn(
          "group relative block aspect-square w-full overflow-hidden rounded-2xl border-2 shadow-sm transition-colors",
          state === "placed"
            ? "border-primary"
            : state === "wrong"
            ? "border-destructive"
            : isOver
            ? "border-primary bg-blossom-soft dark:bg-plum/40"
            : "border-border/70 hover:border-primary/50"
        )}
        style={{ touchAction: "none" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tile.photo}
          alt={tile.alt}
          draggable={false}
          loading="lazy"
          className={cn(
            "pointer-events-none h-full w-full select-none object-cover transition-transform duration-300",
            state === "placed" ? "scale-100" : "scale-105 group-hover:scale-110"
          )}
        />
        {/* subtle gradient for badge legibility */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" aria-hidden />

        {/* status badge */}
        {state === "placed" ? (
          <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
          </span>
        ) : (
          <span
            className={cn(
              "absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full font-display text-sm font-bold shadow-md",
              state === "wrong" ? "bg-destructive text-white" : "bg-card/90 text-primary dark:text-lav"
            )}
            aria-hidden
          >
            ?
          </span>
        )}

        {/* revealed label */}
        <AnimatePresence>
          {state === "placed" && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-2 bottom-2 rounded-full bg-primary/95 px-3 py-1.5 text-center text-[11px] font-semibold leading-tight text-primary-foreground shadow-md"
            >
              {tile.label}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export function DiagramDashGame() {
  const reduceMotion = useReducedMotion();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const [roundIdx, setRoundIdx] = useState(0);
  const [roundOrder, setRoundOrder] = useState<string[][]>(() =>
    diagramRounds.map((r) => shuffle(r.tiles.map((t) => t.label)))
  );
  const [placed, setPlaced] = useState<Record<string, string>>({}); // tileId → label
  const [misses, setMisses] = useState<Record<string, number>>({});
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [wobble, setWobble] = useState<string | null>(null);
  const [roundFlash, setRoundFlash] = useState(0);
  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const totalTiles = useMemo(() => diagramRounds.reduce((n, r) => n + r.tiles.length, 0), []);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitioningRef = useRef(false);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [finished]);

  const round = diagramRounds[roundIdx];
  const roundPlacedCount = round ? round.tiles.filter((t) => placed[t.id]).length : 0;
  const result: GameResult | null = finished
    ? { score: Math.max(40, Math.round(100 * (points / totalTiles))), timeSec: seconds }
    : null;

  const restart = useCallback(() => {
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = null;
    transitioningRef.current = false;
    setRoundIdx(0);
    setRoundOrder(diagramRounds.map((r) => shuffle(r.tiles.map((t) => t.label))));
    setPlaced({});
    setMisses({});
    setFirstTry({});
    setSelected(null);
    setWobble(null);
    setPoints(0);
    setFinished(false);
    setSeconds(0);
    setRoundFlash(0);
  }, []);

  function attempt(tile: DiagramTile, label: string | null) {
    if (!label || placed[tile.id] || transitioningRef.current) return;
    if (label === tile.label) {
      const clean = (misses[tile.id] ?? 0) === 0;
      setPlaced((p) => ({ ...p, [tile.id]: label }));
      setFirstTry((f) => ({ ...f, [tile.id]: clean }));
      setPoints((pt) => pt + (clean ? 1 : 0.5));
      setSelected(null);
      // round complete? (one transition per round — never stack timers)
      const nowPlaced = round.tiles.filter((t) => placed[t.id] || t.id === tile.id).length;
      if (nowPlaced === round.tiles.length && !transitionTimerRef.current) {
        transitioningRef.current = true;
        transitionTimerRef.current = setTimeout(() => {
          transitionTimerRef.current = null;
          transitioningRef.current = false;
          if (roundIdx + 1 >= diagramRounds.length) {
            setFinished(true);
          } else {
            setRoundIdx((r) => r + 1);
            setRoundFlash((f) => f + 1);
          }
        }, reduceMotion ? 500 : 1100);
      }
    } else {
      setMisses((m) => ({ ...m, [tile.id]: (m[tile.id] ?? 0) + 1 }));
      setWobble(tile.id);
      setSelected(null);
      setTimeout(() => setWobble(null), 600);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    const tileId = event.over?.id as string | undefined;
    const label = event.active.id as string;
    const tile = round?.tiles.find((t) => t.id === tileId);
    if (tile) attempt(tile, label);
  }

  const trayLabels = round ? roundOrder[roundIdx].filter((l) => !Object.values(placed).includes(l)) : [];

  return (
    <GameShell
      slug="diagram-dash"
      title="Diagram Dash"
      description="Drop each label onto the photo it names — three boards of real ward equipment."
      icon="Target"
      onRestart={restart}
      result={result}
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Timer className="h-3.5 w-3.5" aria-hidden /> {seconds}s
          </span>
          <span>
            Board {Math.min(roundIdx + 1, diagramRounds.length)} of {diagramRounds.length} ·{" "}
            {roundPlacedCount}/{round?.tiles.length ?? 0} labelled
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <MousePointerClick className="h-3.5 w-3.5" aria-hidden /> tap a label, then tap a photo — or drag
          </span>
        </div>

        <AnimatePresence mode="wait">
          {round && !finished && (
            <motion.div
              key={roundIdx}
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -30 }}
            >
              <p className="mb-2 font-display text-sm font-semibold text-foreground">{round.caption}</p>
              <DndContext sensors={sensors} onDragEnd={onDragEnd}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3" aria-label="Photo board">
                    {round.tiles.map((t) => (
                      <PhotoTile
                        key={t.id}
                        tile={t}
                        state={placed[t.id] ? "placed" : wobble === t.id ? "wrong" : "empty"}
                        wobble={wobble === t.id}
                        onSelect={() => attempt(t, selected)}
                      />
                    ))}
                  </div>
                  <AnimatePresence>
                    {roundFlash > 0 && (
                      <motion.div
                        key={roundFlash}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-blossom-soft/70 dark:bg-plum/60"
                      >
                        <p className="font-display text-lg font-semibold text-primary dark:text-lav">
                          Next board 💗
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex flex-wrap gap-2" aria-label="Label tray">
                  {trayLabels.map((label) => (
                    <LabelChip
                      key={label}
                      label={label}
                      selected={selected === label}
                      onSelect={() => setSelected((s) => (s === label ? null : label))}
                    />
                  ))}
                  {trayLabels.length === 0 && (
                    <p className="w-full text-center text-sm text-muted-foreground">
                      All labelled — lovely work 🌸
                    </p>
                  )}
                </div>
              </DndContext>

              {round.tiles.some((t) => !placed[t.id] && (misses[t.id] ?? 0) >= 2) && (
                <div className="mt-3 rounded-xl bg-gold/15 p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Lightbulb className="h-3.5 w-3.5 text-gold" aria-hidden /> A little help:
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {round.tiles
                      .filter((t) => !placed[t.id] && (misses[t.id] ?? 0) >= 2)
                      .map((t) => (
                        <li key={t.id} className="text-[11px] leading-snug text-muted-foreground">
                          <strong className="text-foreground">{t.label}:</strong> {t.hint}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {finished && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-xl bg-blossom-soft/60 p-4 text-center dark:bg-plum/25"
          >
            <p className="text-sm text-foreground">
              All three boards labelled in <strong>{seconds}s</strong> — you know your ward equipment by sight 💗
            </p>
          </motion.div>
        )}
      </div>
    </GameShell>
  );
}
