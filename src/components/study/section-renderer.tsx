"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Gem, Lightbulb, Stethoscope, Info, Table2, ClipboardList, ArrowUpDown, Sparkles, ChevronDown, Camera, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { SpeakButton } from "./speak-button";

/** Render a markdown pipe table */
export function PipeTable({ body }: { body: string }) {
  const lines = body.split("\n").map((l) => l.trim()).filter(Boolean);
  const rows = lines
    .filter((l) => !/^\|?[\s:-]+\|[\s|:-]*$/.test(l))
    .map((l) =>
      l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim())
    );
  if (rows.length === 0) return null;
  const [header, ...rest] = rows;
  return (
    <div className="overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full min-w-[420px] text-sm">
        <thead>
          <tr className="bg-lav/50 dark:bg-plum/25">
            {header.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-display text-[13px] font-semibold text-secondary-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rest.map((r, ri) => (
            <tr key={ri} className={cn("transition-colors hover:bg-blossom-soft/40 dark:hover:bg-plum/20", ri % 2 === 0 ? "bg-card" : "bg-muted/40")}>
              {r.map((c, ci) => (
                <td key={ci} className="px-4 py-2.5 align-top text-muted-foreground">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Render paragraphs (blank-line separated) */
export function Paragraphs({ body, className }: { body: string; className?: string }) {
  const paras = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className={cn("prose-mimie text-[15px] text-foreground/90", className)}>
      {paras.map((p, i) => (
        <p key={i}>{renderInline(p)}</p>
      ))}
    </div>
  );
}

function renderInline(text: string): React.ReactNode {
  // simple **bold** and *italic* support
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++} className="font-semibold text-foreground">{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={key++} className="italic">{token.slice(1, -1)}</em>);
    }
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

const SECTION_META: Record<string, { icon: LucideIcon; title: string; wrapClass: string; iconClass: string }> = {
  clinical_pearl: {
    icon: Gem,
    title: "Clinical Pearl",
    wrapClass: "border-primary/30 bg-gradient-to-br from-blossom-soft/80 to-lav/50 dark:from-plum/30 dark:to-plum/10",
    iconClass: "bg-primary/15 text-primary",
  },
  memory_trick: {
    icon: Lightbulb,
    title: "Memory Trick",
    wrapClass: "border-gold/40 bg-gold/10",
    iconClass: "bg-gold/25 text-amber-700 dark:text-gold",
  },
  case: {
    icon: Stethoscope,
    title: "Mini Case",
    wrapClass: "border-sage/60 bg-sage/30 dark:bg-sage/20",
    iconClass: "bg-sage text-accent-foreground",
  },
  callout: {
    icon: Info,
    title: "Note",
    wrapClass: "border-lav bg-lav/50 dark:bg-plum/25",
    iconClass: "bg-lav text-secondary-foreground dark:bg-plum/40 dark:text-lav",
  },
  table: { icon: Table2, title: "Compare", wrapClass: "", iconClass: "" },
  quiz_prompt: {
    icon: Sparkles,
    title: "Quick Check",
    wrapClass: "border-border/70 bg-card",
    iconClass: "bg-blossom-soft text-primary dark:bg-plum/40",
  },
  summary: {
    icon: ClipboardList,
    title: "Summary",
    wrapClass: "border-plum/30 bg-plum/5 dark:bg-lav/10",
    iconClass: "bg-plum/15 text-plum dark:text-lav",
  },
};

/** Real-life photo section — body is JSON {src, alt, caption}. Tap to zoom. */
export function LessonImage({ body }: { body: string }) {
  const [zoom, setZoom] = useState(false);
  let img: { src?: string; alt?: string; caption?: string } = {};
  try {
    img = JSON.parse(body);
  } catch {
    return null;
  }
  if (!img.src) return null;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card"
    >
      <button
        type="button"
        onClick={() => setZoom(true)}
        className="block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label={`${img.alt ?? "Lesson photo"} — tap to enlarge`}
      >
        <img
          src={img.src}
          alt={img.alt ?? ""}
          loading="lazy"
          decoding="async"
          className="h-auto max-h-[420px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground/80 shadow-sm backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover:opacity-100" aria-hidden>
          <ZoomIn className="h-4 w-4" />
        </span>
        <span className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
          <Camera className="h-3 w-3" aria-hidden /> real life
        </span>
      </button>
      {img.caption && (
        <figcaption className="flex items-start gap-2 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
          {img.caption}
        </figcaption>
      )}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-3xl border-border/70 bg-background p-0 sm:rounded-2xl [&>button]:z-10">
          <DialogTitle className="sr-only">{img.alt ?? "Lesson photo"}</DialogTitle>
          <DialogDescription className="sr-only">{img.caption ?? img.alt ?? ""}</DialogDescription>
          <div className="max-h-[80vh] overflow-auto">
            <img src={img.src} alt={img.alt ?? ""} className="h-auto w-full rounded-t-2xl object-contain" />
          </div>
          {img.caption && (
            <p className="px-5 py-4 text-sm text-muted-foreground">{img.caption}</p>
          )}
        </DialogContent>
      </Dialog>
    </motion.figure>
  );
}

export function QuizPrompt({ body, title }: { body: string; title?: string | null }) {
  const [open, setOpen] = useState(false);
  const splitIdx = body.indexOf("Answer:");
  const promptPart = splitIdx >= 0 ? body.slice(0, splitIdx).trim() : body;
  const answerPart = splitIdx >= 0 ? body.slice(splitIdx + 7).trim() : null;
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
        <Sparkles className="h-3.5 w-3.5" aria-hidden /> Quick check
      </div>
      <p className="mt-2 text-[15px] font-medium text-foreground">{title ?? promptPart}</p>
      {title && <Paragraphs body={promptPart} className="mt-1 text-sm" />}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/20"
        aria-expanded={open}
      >
        {open ? "Hide answer" : "Think first, then tap"}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <AnimatePresence>
        {open && answerPart && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-3 rounded-xl bg-sage/40 px-4 py-3 text-sm leading-relaxed text-foreground dark:bg-sage/20">
              <span className="font-semibold">Answer: </span>
              {answerPart}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LessonSectionRenderer({
  type,
  title,
  body,
}: {
  type: string;
  title: string | null;
  body: string;
}) {
  if (type === "quiz_prompt") {
    return <QuizPrompt body={body} title={title} />;
  }

  if (type === "image") {
    return <LessonImage body={body} />;
  }

  if (type === "text") {
    return (
      <div>
        {title && <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>}
        <Paragraphs body={body} />
      </div>
    );
  }

  if (type === "table") {
    return (
      <div>
        {title && <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>}
        <PipeTable body={body} />
      </div>
    );
  }

  const meta = SECTION_META[type] ?? SECTION_META.callout;
  const Icon = meta.icon;
  const heading = title ?? meta.title;

  if (type === "summary") {
    const bullets = body.split("\n").map((l) => l.trim()).filter((l) => l.startsWith("-")).map((l) => l.slice(1).trim());
    return (
      <div className={cn("rounded-2xl border p-5", meta.wrapClass)}>
        <div className="flex items-center gap-2.5">
          <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg", meta.iconClass)}>
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <p className="font-display text-base font-semibold text-foreground">{heading}</p>
        </div>
        <ul className="mt-3 space-y-1.5">
          {bullets.map((bl, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              {bl}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cn("rounded-2xl border p-5", meta.wrapClass)}>
      <div className="flex items-center gap-2.5">
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg", meta.iconClass)}>
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <p className="font-display text-base font-semibold text-foreground">{heading}</p>
      </div>
      <div className="mt-3">
        {type === "table" ? <PipeTable body={body} /> : <Paragraphs body={body} />}
      </div>
    </div>
  );
}

/** Flashcard with flip animation */
export function Flashcard({ front, back, topic }: { front: string; back: string; topic: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.code === "Space") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
      className="relative block h-44 w-full cursor-pointer text-left [perspective:1000px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      aria-label={`Flashcard: ${front}. Activate to flip.`}
    >
      <motion.div
        className="relative h-full w-full rounded-2xl transition-transform [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{topic}</span>
            <SpeakButton text={front} />
          </div>
          <p className="font-display text-lg font-semibold leading-snug text-foreground">{front}</p>
          <span className="text-[11px] text-muted-foreground">tap to flip</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-primary/30 bg-gradient-to-br from-blossom-soft/80 to-lav/60 p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:from-plum/40 dark:to-plum/20">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">answer</span>
            <SpeakButton text={back} />
          </div>
          <p className="text-sm font-medium leading-relaxed text-foreground">{back}</p>
          <span className="text-[11px] text-muted-foreground">tap to flip back</span>
        </div>
      </motion.div>
    </div>
  );
}

export { ArrowUpDown };
