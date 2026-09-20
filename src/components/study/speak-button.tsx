"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, Loader2, AudioLines } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { getAudioUrl } from "./tts-client";

interface SpeakButtonProps {
  text: string;
  className?: string;
  /** compact = small icon-only pill; default = icon + "Hear it" label */
  variant?: "compact" | "labeled";
  label?: string;
}

export function SpeakButton({ text, className, variant = "compact", label = "Hear it" }: SpeakButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (state === "loading") return;

      // already playing → stop
      if (state === "playing") {
        audioRef.current?.pause();
        setState("idle");
        return;
      }

      setState("loading");
      try {
        const url = await getAudioUrl(text);
        audioRef.current?.pause();
        const audio = new Audio(url);
        audioRef.current = audio;
        setState("playing");
        audio.onended = () => setState("idle");
        audio.onerror = () => {
          setState("idle");
          toast("Couldn't play the audio 💗");
        };
        await audio.play();
      } catch (err) {
        setState("idle");
        toast(err instanceof Error ? err.message : "Voice is resting right now 💗");
      }
    },
    [text, state]
  );

  return (
    <button
      type="button"
      onClick={play}
      aria-label={`${label}: ${text.slice(0, 60)}`}
      className={cn(
        "inline-flex touch-manipulation items-center gap-1.5 rounded-full border border-border/60 bg-card/70 backdrop-blur transition-all",
        "hover:border-primary/50 hover:bg-blossom-soft/60 hover:text-primary active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        variant === "compact" ? "p-1.5 min-h-[36px] min-w-[36px] sm:min-h-[28px] sm:min-w-[28px] sm:p-1.5" : "px-3 py-2 min-h-[36px] text-xs font-medium",
        state === "playing" && "border-primary/60 bg-blossom-soft/70 text-primary",
        className
      )}
    >
      {state === "loading" ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
      ) : state === "playing" ? (
        <AudioLines className="h-3.5 w-3.5 animate-pulse" aria-hidden />
      ) : (
        <Volume2 className="h-3.5 w-3.5" aria-hidden />
      )}
      {variant === "labeled" && <span>{state === "playing" ? "Playing…" : label}</span>}
    </button>
  );
}
