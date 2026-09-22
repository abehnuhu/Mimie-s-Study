"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

interface PlaylistTrack {
  id: string;
  title: string;
  mimeType: string;
  sizeBytes: number;
}

const MUTE_KEY = "ms-music-muted";
const VOL_KEY = "ms-music-volume";
const DEFAULT_VOL = 0.35; // background music should sit under everything

/**
 * Floating background-music player.
 *
 * - Starts playing the moment the site opens (browsers that block unmuted
 *   autoplay start it silently and offer a one-tap "sound on").
 * - If even silent autoplay is refused, the very first sign of life from the
 *   visitor — a tap, a click, a key, a scroll, even a mouse move — starts the
 *   music automatically. No play button hunting required.
 * - Mute + volume preferences persist across visits.
 * - Plays every enabled track in order, looping forever.
 */
export function BackgroundMusic() {
  const hasUser = useAppStore((s) => !!s.user);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reportedRef = useRef<Set<string>>(new Set());
  const fadeRef = useRef<number | null>(null);
  const prefMutedRef = useRef(false);
  const volRef = useRef(DEFAULT_VOL);
  const failStreakRef = useRef(0);

  const [tracks, setTracks] = useState<PlaylistTrack[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOL);
  const [expanded, setExpanded] = useState(false);
  const [blocked, setBlocked] = useState(false); // unmuted autoplay was refused
  const [needsKick, setNeedsKick] = useState(false); // autoplay refused outright — first interaction starts it
  const needsKickRef = useRef(false);
  const [hint, setHint] = useState(false);

  const current = tracks[idx] ?? null;
  const streamUrl = (id: string) => `/api/music/stream/${id}`;

  /* viewport + motion preferences, the React-way */
  const isDesktop = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => true
  );
  const reducedMotion = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  const reportPlay = useCallback((id: string) => {
    if (reportedRef.current.has(id)) return;
    reportedRef.current.add(id);
    fetch("/api/music/played", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trackId: id }),
    }).catch(() => {});
  }, []);

  const startTrack = useCallback(
    (i: number, autoplay: boolean) => {
      const audio = audioRef.current;
      const t = tracks[i];
      if (!audio || !t) return;
      setIdx(i);
      audio.src = streamUrl(t.id);
      audio.loop = tracks.length === 1;
      if (autoplay) {
        audio
          .play()
          .then(() => {
            failStreakRef.current = 0;
            reportPlay(t.id);
          })
          .catch(() => setPlaying(false));
      }
    },
    [tracks, reportPlay]
  );

  /* ── load playlist + preferences (data only — the audio element mounts after this) ── */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/music/playlist", { cache: "no-store" });
        const data = await res.json();
        if (cancelled) return;
        const list: PlaylistTrack[] = Array.isArray(data.tracks) ? data.tracks : [];
        setLoaded(true);
        if (!data.enabled || list.length === 0) return;

        const prefMuted = localStorage.getItem(MUTE_KEY) === "1";
        const prefVol = Number(localStorage.getItem(VOL_KEY));
        const vol = Number.isFinite(prefVol) && prefVol > 0 && prefVol <= 1 ? prefVol : DEFAULT_VOL;
        prefMutedRef.current = prefMuted;
        volRef.current = vol;
        setMuted(prefMuted);
        setVolume(vol);
        setTracks(list); // → renders <audio>, then the start effect below fires
      } catch {
        setLoaded(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ── start: runs whenever a fresh, src-less <audio> element exists ── */
  useEffect(() => {
    const audio = audioRef.current;
    const t = tracks[0];
    if (!audio || !t || audio.src) return; // src already set → already initialised

    audio.volume = volRef.current;
    audio.muted = prefMutedRef.current;
    audio.src = streamUrl(t.id);
    audio.loop = tracks.length === 1;

    (async () => {
      try {
        await audio.play();
        reportPlay(t.id);
      } catch {
        // browser refused unmuted autoplay (the usual case on a fresh visit)
        if (!prefMutedRef.current) {
          audio.muted = true;
          setMuted(true);
          try {
            await audio.play();
            reportPlay(t.id);
            setBlocked(true);
            setHint(true);
          } catch {
            // even silent autoplay was refused — the first interaction will start it
            setPlaying(false);
            needsKickRef.current = true;
            setNeedsKick(true);
            setHint(true);
            // don't leave it muted, or the Play button would be silent too
            audio.muted = prefMutedRef.current;
            setMuted(prefMutedRef.current);
          }
        }
      }
    })();
  }, [tracks, reportPlay]);

  /* keep loop in sync when the playlist length changes */
  useEffect(() => {
    if (audioRef.current) audioRef.current.loop = tracks.length === 1;
  }, [tracks]);

  /* ── refresh playlist when the tab becomes visible (admin changes appear) ── */
  useEffect(() => {
    const onVisible = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch("/api/music/playlist", { cache: "no-store" });
        const data = await res.json();
        const list: PlaylistTrack[] = Array.isArray(data.tracks) ? data.tracks : [];
        if (!data.enabled || list.length === 0) {
          setTracks([]);
          audioRef.current?.pause();
          return;
        }
        const audio = audioRef.current;
        // keep the current track playing if it survived; otherwise restart from the top
        const nextIdx = current ? list.findIndex((t) => t.id === current.id) : 0;
        setTracks(list);
        setIdx(nextIdx >= 0 ? nextIdx : 0);
        if (audio && nextIdx < 0) {
          audio.src = streamUrl(list[0].id);
          audio.loop = list.length === 1;
          audio.play().then(() => reportPlay(list[0].id)).catch(() => setPlaying(false));
        }
      } catch {
        /* offline — keep the current track playing */
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [current, reportPlay]);

  function smoothUnmute() {
    const audio = audioRef.current;
    if (!audio) return;
    const target = volRef.current || DEFAULT_VOL;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    audio.muted = false;
    setMuted(false);
    prefMutedRef.current = false;
    localStorage.setItem(MUTE_KEY, "0");
    audio.volume = 0;
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / 450);
      audio.volume = target * k;
      if (k < 1) fadeRef.current = requestAnimationFrame(step);
    };
    fadeRef.current = requestAnimationFrame(step);
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.muted) {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audio.muted = true;
      setMuted(true);
      setBlocked(false);
      setHint(false);
      prefMutedRef.current = true;
      localStorage.setItem(MUTE_KEY, "1");
    } else {
      smoothUnmute();
    }
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || !current) return;
    // a deliberate touch of the controls cancels any pending auto-start —
    // after this, only she decides when the music runs
    needsKickRef.current = false;
    setNeedsKick(false);
    if (audio.paused) {
      audio.play().then(() => reportPlay(current.id)).catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }

  function changeVolume(v: number) {
    const audio = audioRef.current;
    const clamped = Math.min(1, Math.max(0, v));
    setVolume(clamped);
    volRef.current = clamped || DEFAULT_VOL;
    localStorage.setItem(VOL_KEY, String(clamped));
    if (audio) {
      audio.volume = clamped;
      if (clamped > 0 && audio.muted && !prefMutedRef.current) {
        audio.muted = false;
        setMuted(false);
      }
    }
  }

  function next(dir: 1 | -1) {
    if (tracks.length < 2) return;
    const wasPlaying = !audioRef.current?.paused;
    startTrack((idx + dir + tracks.length) % tracks.length, wasPlaying);
  }

  /* ── the moment she interacts at all, the music starts ──
 *
 * Two situations bring us here:
 *  - `blocked`: the browser let muted autoplay through, so the song is already
 *    playing silently — the first real gesture (tap / click / key) unmutes it.
 *  - `needsKick`: autoplay was refused outright, so the song is paused — the
 *    first sign of life (a tap, a key, a scroll, even a mouse move) starts it.
 *
 * Only activation-bearing gestures (pointer/key/touch/click) unmute, because
 * browsers refuse silent→sound switches without a proper gesture. Soft events
 * (scroll, wheel, mouse move) still start a paused song the moment the browser
 * has already met the visitor — harmless everywhere else.
 */
  useEffect(() => {
    if (!loaded || tracks.length === 0) return;
    if (!blocked && !needsKick) return;

    let kicked = false;
    let lastMove = 0;

    const kick = (e: Event, withActivation: boolean) => {
      const audio = audioRef.current;
      if (!audio || kicked) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("[data-music-player]")) return; // her own controls handle themselves

      if (audio.paused) {
        if (!needsKickRef.current) return;
        kicked = true; // optimistic — retracted if the browser still refuses
        audio.muted = prefMutedRef.current;
        audio.volume = volRef.current;
        const t = tracks[idx] ?? tracks[0];
        audio
          .play()
          .then(() => {
            needsKickRef.current = false;
            setNeedsKick(false);
            setHint(false);
            reportPlay(t.id);
          })
          .catch(() => {
            kicked = false;
          });
        return;
      }

      // playing silently because the browser muted autoplay — unmute on a real gesture
      if (withActivation && blocked && audio.muted && !prefMutedRef.current) {
        kicked = true;
        smoothUnmute();
        setBlocked(false);
        setHint(false);
      }
    };

    const onGesture = (e: Event) => kick(e, true);
    const onSoft = (e: Event) => kick(e, false);
    const onMove = (e: Event) => {
      const now = performance.now();
      if (now - lastMove < 400) return; // a mouse trail fires dozens per second
      lastMove = now;
      kick(e, false);
    };

    window.addEventListener("pointerdown", onGesture, { capture: true });
    window.addEventListener("keydown", onGesture, { capture: true });
    window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
    window.addEventListener("touchend", onGesture, { capture: true, passive: true });
    window.addEventListener("click", onGesture, { capture: true });
    window.addEventListener("scroll", onSoft, { capture: true, passive: true });
    window.addEventListener("wheel", onSoft, { capture: true, passive: true });
    window.addEventListener("mousemove", onMove, { capture: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", onGesture, { capture: true });
      window.removeEventListener("keydown", onGesture, { capture: true });
      window.removeEventListener("touchstart", onGesture, { capture: true });
      window.removeEventListener("touchend", onGesture, { capture: true });
      window.removeEventListener("click", onGesture, { capture: true });
      window.removeEventListener("scroll", onSoft, { capture: true });
      window.removeEventListener("wheel", onSoft, { capture: true });
      window.removeEventListener("mousemove", onMove, { capture: true });
    };
  }, [blocked, needsKick, loaded, tracks, idx, reportPlay]);

  /* auto-hide the "tap for sound" hint */
  useEffect(() => {
    if (!hint) return;
    const t = window.setTimeout(() => setHint(false), 12000);
    return () => window.clearTimeout(t);
  }, [hint]);


  /* hidden while the playlist loads or is empty */
  if (!loaded || tracks.length === 0 || !current) return null;

  const multi = tracks.length > 1;

  return (
    <div
      data-music-player
      className={cn(
        "fixed right-4 z-50 flex flex-col items-end gap-2",
        // on mobile with the bottom nav present, clear it + the iOS safe-area
        hasUser && !isDesktop ? "bottom-[calc(4.75rem+env(safe-area-inset-bottom))]" : "bottom-6"
      )}
    >
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          if (multi) next(1);
        }}
        onError={() => {
          // skip a broken track, but give up if everything fails
          if (multi && failStreakRef.current < tracks.length) {
            failStreakRef.current += 1;
            next(1);
          } else {
            setPlaying(false);
          }
        }}
      />

      {/* one-tap sound hint (autoplay was muted by the browser) */}
      <AnimatePresence>
        {hint && (
          <motion.div
            key="hint"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="max-w-[15rem] rounded-2xl border border-border/70 bg-card/95 px-3.5 py-2.5 text-xs text-card-foreground shadow-lg shadow-primary/10 backdrop-blur"
            role="status"
          >
            <p className="leading-snug">
              {needsKick
                ? "One tiny tap anywhere and the music starts playing 💗"
                : "The music is playing softly — tap anywhere to turn the sound on 💗"}
            </p>
            <button
              type="button"
              data-music-quiet
              onClick={() => {
                setHint(false);
                setBlocked(false);
                prefMutedRef.current = true;
                localStorage.setItem(MUTE_KEY, "1");
                setMuted(true);
                const audio = audioRef.current;
                if (audio) audio.muted = true;
              }}
              className="mt-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Keep it quiet
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* collapsed: a small round button with dancing bars */}
      {!expanded && (
        <motion.button
          key="collapsed"
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => setExpanded(true)}
          aria-label={`Background music: ${playing ? "playing" : "paused"} — ${current.title}. Open music controls`}
          className="glass flex h-11 w-11 items-center justify-center rounded-full border border-border/70 shadow-lg shadow-primary/10 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {playing ? (
            <span className={cn("eq-bars", playing && !reducedMotion && "playing")} aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </span>
          ) : (
            <Music2 className="h-4 w-4 text-primary" aria-hidden />
          )}
        </motion.button>
      )}

      {/* expanded: full controls */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-[17.5rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-border/70 p-3 shadow-xl shadow-primary/10"
            role="group"
            aria-label="Background music controls"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause music" : "Play music"}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-md shadow-primary/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4 translate-x-0.5" aria-hidden />}
              </button>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium leading-tight text-foreground" title={current.title}>
                  {current.title}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {playing ? "Now playing" : muted ? "Muted" : "Paused"}
                  {multi && ` · ${idx + 1} of ${tracks.length}`}
                </p>
              </div>

              {multi && (
                <div className="flex items-center gap-0.5">
                  <button
                    type="button"
                    onClick={() => next(-1)}
                    aria-label="Previous track"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <SkipBack className="h-4 w-4" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => next(1)}
                    aria-label="Next track"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <SkipForward className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              )}
            </div>

            <div className="mt-2.5 flex items-center gap-2 border-t border-border/60 pt-2.5">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute music" : "Mute music"}
                aria-pressed={muted}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => changeVolume(Number(e.target.value))}
                aria-label="Music volume"
                style={{ "--music-vol-fill": `${Math.round(volume * 100)}%` } as React.CSSProperties}
                className="music-vol h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full"
              />
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Close music controls"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
