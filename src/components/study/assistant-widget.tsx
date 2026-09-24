"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, MessageCircleHeart, RotateCcw, Send, X } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

/**
 * "Ask Mimie" — the floating AI study companion.
 *
 * A soft launcher bottom-left (mirroring the music player bottom-right)
 * opens a warm chat panel. The conversation is context-aware: whatever
 * view she is in (lesson / course / quiz / flashcards) announces itself
 * in the store, and that line travels to the backend with each message
 * so the tutor knows what she is studying right now. History persists
 * in localStorage — closing the panel never loses the thread.
 */

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "ms-assistant-chat-v1";
const SEEN_KEY = "ms-assistant-seen-v1";
const MAX_STORED = 40;

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey! I'm **Mimie** 💗 — your study companion.\nAsk me anything from the syllabus, or tap a shortcut below. I can explain, quiz you, make memory tricks, or plan your study day.",
};

const QUICK_PROMPTS = [
  "Quiz me on this",
  "Summarise this topic simply",
  "Make a memory trick for it",
  "Plan my study day",
];

export function AssistantWidget() {
  const hasUser = useAppStore((s) => !!s.user);
  const hint = useAppStore((s) => s.assistantHint);

  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [restored, setRestored] = useState(false);
  const [streaming, setStreaming] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  /* restore chat + seen flag */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setMsgs(
            parsed
              .filter((m): m is Msg => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
              .slice(-MAX_STORED)
          );
        }
      }
      setSeen(localStorage.getItem(SEEN_KEY) === "1");
    } catch {
      /* fresh start */
    }
    setRestored(true);
  }, []);

  /* persist */
  useEffect(() => {
    if (!restored) return;
    try {
      if (msgs.length === 0) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-MAX_STORED)));
    } catch {
      /* storage full — chat stays in memory */
    }
  }, [msgs, restored]);

  /* keep the newest message in view */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [msgs, busy, streaming, open]);

  /* keyboard: Escape closes */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function markSeen() {
    if (!seen) {
      setSeen(true);
      try {
        localStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }
  }

  async function send(text?: string) {
    const question = (text ?? input).trim();
    if (!question || busy) return;
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    const history = [...msgs, { role: "user", content: question } as Msg];
    setMsgs(history);
    setBusy(true);
    setStreaming("");
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-20), context: hint ?? undefined }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        const error =
          typeof data.error === "string" ? data.error : "Mimie couldn't answer just now — try again 💗";
        setMsgs((m) => [...m, { role: "assistant", content: `_${error}_` }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setStreaming(acc);
      }
      const final = acc.trim() || "Mimie couldn't answer just now — try again 💗";
      setMsgs((m) => [...m, { role: "assistant", content: final }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: "_You look offline — I'll be right here when the network returns 💗_" },
      ]);
    } finally {
      setStreaming(null);
      setBusy(false);
    }
  }

  function clearChat() {
    setMsgs([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }

  if (!hasUser) return null;

  const empty = msgs.length === 0;

  return (
    <div
      className={cn(
        "fixed left-4 z-40 flex flex-col items-start gap-2",
        // clear the mobile bottom nav + iOS safe area (mirrors the music player)
        "bottom-[calc(4.75rem+env(safe-area-inset-bottom))] lg:bottom-6"
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {open ? (
          <motion.div
            key="panel"
            data-assistant-panel
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="flex max-h-[min(64vh,32rem)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl shadow-plum/20 backdrop-blur"
            role="dialog"
            aria-label="Ask Mimie — AI study companion"
          >
            {/* header */}
            <div className="flex items-center gap-2.5 border-b border-border/60 bg-gradient-to-r from-primary/15 via-blossom-soft/60 to-transparent px-3.5 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-sm">
                <Heart className="h-3.5 w-3.5 fill-current" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold leading-none text-foreground">Ask Mimie</p>
                <p className="mt-1 truncate text-[11px] text-muted-foreground">
                  {busy ? "thinking…" : "Your AI study companion"}
                </p>
              </div>
              <button
                onClick={clearChat}
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Start a new chat"
                title="New chat"
                disabled={empty}
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              <Bubble msg={GREETING} />
              {empty && (
                <div className="flex flex-wrap gap-1.5 pt-1 pl-8">
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => send(p)}
                      className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary transition-all hover:bg-primary/15 active:scale-95 motion-reduce:transform-none"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
              {msgs.map((m, i) => (
                <Bubble key={i} msg={m} />
              ))}
              {streaming !== null && streaming.length === 0 && (
                <div className="flex items-center gap-1.5 pl-8" aria-label="Mimie is typing">
                  <span className="flex gap-1 rounded-2xl rounded-bl-md bg-muted px-3 py-2.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/70"
                        style={{ animationDelay: `${d * 150}ms` }}
                      />
                    ))}
                  </span>
                </div>
              )}
              {streaming !== null && streaming.length > 0 && (
                <Bubble msg={{ role: "assistant", content: streaming }} />
              )}
            </div>

            {/* context + input */}
            <div className="border-t border-border/60 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
              {hint && (
                <p className="mb-1.5 truncate text-[11px] text-muted-foreground" title={hint}>
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-sage align-middle" aria-hidden />
                  Studying: {hint}
                </p>
              )}
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    const el = e.target as HTMLTextAreaElement;
                    el.style.height = "auto";
                    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  rows={1}
                  placeholder="Ask about any topic…"
                  aria-label="Message Mimie"
                  className="max-h-24 min-h-[2.4rem] flex-1 resize-none rounded-2xl border border-border/70 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                />
                <button
                  onClick={() => send()}
                  disabled={busy || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95 motion-reduce:transform-none disabled:opacity-40 disabled:active:scale-100"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onClick={() => {
              setOpen(true);
              markSeen();
            }}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95 motion-reduce:transform-none"
            aria-label="Ask Mimie — open the AI study companion"
          >
            <MessageCircleHeart className="h-5.5 w-5.5 h-[22px] w-[22px] transition-transform group-hover:-rotate-6" aria-hidden />
            {!seen && (
              <span
                className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white shadow"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/** One chat bubble — user right / assistant left, with tiny markdown (bold, bullets, _soft italics_). */
function Bubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[86%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md bg-muted text-foreground"
        )}
      >
        {msg.content.split("\n").map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <span key={i} className="block h-1" />;
          const bullet = /^[-•*]\s+/.test(trimmed);
          const text = bullet ? trimmed.replace(/^[-•*]\s+/, "") : trimmed;
          return (
            <p
              key={i}
              className={cn(
                "my-0.5",
                bullet && "relative my-0.5 ml-1 pl-3 before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-primary/70 before:content-['']",
                !isUser && "text-pretty"
              )}
            >
              {renderInline(text)}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/** **bold** and _soft italics_ → <strong>/<em>; everything else stays plain (React escapes it). */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
      return <em key={i} className="italic opacity-80">{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}