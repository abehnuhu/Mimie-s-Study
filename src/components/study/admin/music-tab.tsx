"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Loader2,
  Music2,
  Music4,
  Pause,
  Play,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { MUSIC_MAX_BYTES, isAllowedAudio, prettyBytes } from "@/lib/music";
import { cn } from "@/lib/utils";

interface AdminTrack {
  id: string;
  title: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  enabled: boolean;
  sortOrder: number;
  plays: number;
  uploadedAt: string;
}

const CHUNK = 2 * 1024 * 1024; // mirrors the server's chunk size

async function withRetry(fn: () => Promise<Response>, attempts = 3): Promise<Response> {
  let lastErr: unknown = null;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fn();
      if (res.ok) return res;
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error ?? `Chunk ${i + 1} failed`);
    } catch (e) {
      lastErr = e;
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 600 * (i + 1)));
    }
  }
  throw lastErr;
}

export function MusicTab() {
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [tracks, setTracks] = useState<AdminTrack[]>([]);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [progressLabel, setProgressLabel] = useState("");

  const [previewId, setPreviewId] = useState<string | null>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const previewRef = useRef<HTMLAudioElement | null>(null);

  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [armedId, setArmedId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/admin/music/tracks", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setEnabled(Boolean(data.enabled));
      setTracks(Array.isArray(data.tracks) ? data.tracks : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    return () => {
      previewRef.current?.pause();
      previewRef.current = null;
    };
  }, []);

  /* ── master switch ── */
  async function toggleMaster(next: boolean) {
    const prev = enabled;
    setEnabled(next);
    try {
      const res = await fetch("/api/admin/music/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: next }),
      });
      if (!res.ok) throw new Error();
      toast(next ? "Background music on 💗" : "Background music off", {
        description: next ? "Your tracks will play on the site." : "The site stays quiet until you flip it back.",
      });
    } catch {
      setEnabled(prev);
      toast.error("Couldn't save the switch — try again 💗");
    }
  }

  /* ── upload ── */
  function pickFile(f: File | null) {
    if (!f) return;
    if (!isAllowedAudio(f.name, f.type)) {
      toast.error("That doesn't look like audio 💗", { description: "Try mp3, m4a, ogg, wav or flac." });
      return;
    }
    if (f.size > MUSIC_MAX_BYTES) {
      toast.error("Keep tracks under 30 MB 💗", { description: `This one is ${prettyBytes(f.size)}.` });
      return;
    }
    setFile(f);
    if (!title) setTitle(f.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").slice(0, 80));
  }

  async function startUpload() {
    if (!file || progress !== null) return;
    const t = title.trim() || file.name.replace(/\.[^.]+$/, "").slice(0, 80);
    setProgress(0);
    setProgressLabel("Preparing…");

    let id = "";
    try {
      const init = await fetch("/api/admin/music/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: t, fileName: file.name, mimeType: file.type, sizeBytes: file.size }),
      }).then((r) => {
        if (!r.ok) return r.json().then((d) => Promise.reject(new Error(d.error ?? "Upload failed"))).catch(() => Promise.reject(new Error("Upload failed")));
        return r.json();
      });
      id = init.id;

      const total = Math.ceil(file.size / CHUNK);
      for (let i = 0; i < total; i++) {
        const blob = file.slice(i * CHUNK, Math.min((i + 1) * CHUNK, file.size));
        await withRetry(() =>
          fetch(`/api/admin/music/chunk?id=${id}&seq=${i}`, {
            method: "POST",
            headers: { "Content-Type": "application/octet-stream" },
            body: blob,
          })
        );
        setProgress(Math.round(((i + 1) / total) * 100));
        setProgressLabel(`Sending… ${i + 1} of ${total}`);
      }

      setProgressLabel("Finishing…");
      const fin = await fetch(`/api/admin/music/finish?id=${id}`, { method: "POST" });
      if (!fin.ok) {
        const d = await fin.json().catch(() => ({}));
        throw new Error(d.error ?? "Couldn't finish the upload");
      }

      toast(`"${t}" is live 💗`, {
        description: "It joins the site playlist — refresh the site to hear it.",
      });
      setTitle("");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      await load();
    } catch (e) {
      if (id) {
        fetch(`/api/admin/music/track/${id}`, { method: "DELETE" }).catch(() => {}); // clean the half-upload
      }
      toast.error(e instanceof Error ? e.message : "Upload failed 💗", {
        description: "Nothing was saved — you can try again.",
      });
    } finally {
      setProgress(null);
      setProgressLabel("");
    }
  }

  /* ── preview ── */
  function togglePreview(track: AdminTrack) {
    if (previewId === track.id && previewPlaying) {
      previewRef.current?.pause();
      return;
    }
    if (!previewRef.current) {
      previewRef.current = new Audio();
      previewRef.current.onended = () => setPreviewPlaying(false);
      previewRef.current.onpause = () => setPreviewPlaying(false);
      previewRef.current.onplay = () => setPreviewPlaying(true);
    }
    if (previewId !== track.id) {
      previewRef.current.src = `/api/music/stream/${track.id}`;
      setPreviewId(track.id);
    }
    previewRef.current.play().catch(() => toast.error("Couldn't play that preview 💗"));
  }

  /* ── row actions ── */
  async function patchTrack(id: string, data: Record<string, unknown>) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/music/track/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      await load();
    } catch {
      toast.error("Couldn't save that 💗");
    } finally {
      setBusyId(null);
    }
  }

  async function move(id: string, direction: "up" | "down") {
    setBusyId(id);
    try {
      await fetch("/api/admin/music/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, direction }),
      });
      await load();
    } finally {
      setBusyId(null);
    }
  }

  async function remove(id: string, t: string) {
    if (armedId !== id) {
      setArmedId(id);
      window.setTimeout(() => setArmedId((cur) => (cur === id ? null : cur)), 4000);
      return;
    }
    setArmedId(null);
    if (previewId === id) {
      previewRef.current?.pause();
      setPreviewId(null);
    }
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/music/track/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast(`Removed "${t}" 💗`);
      await load();
    } catch {
      toast.error("Couldn't delete that track 💗");
    } finally {
      setBusyId(null);
    }
  }

  const totalMb = tracks.reduce((n, t) => n + t.sizeBytes, 0);

  return (
    <div className="space-y-6">
      {/* master switch */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between gap-3 text-base">
            <span className="flex items-center gap-2">
              <Music4 className="h-4 w-4 text-primary" aria-hidden />
              Background music
            </span>
            <Switch
              checked={enabled}
              onCheckedChange={toggleMaster}
              aria-label="Turn background music on or off for the whole site"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-muted-foreground">
          {enabled
            ? `On — ${tracks.filter((t) => t.enabled).length} of ${tracks.length} track${tracks.length === 1 ? "" : "s"} in the playlist, in this order.`
            : "Off — the site stays silent, but your tracks are kept safe below."}
        </CardContent>
      </Card>

      {/* upload */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Upload className="h-4 w-4 text-primary" aria-hidden />
            Add a track
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <div
            role="button"
            tabIndex={0}
            aria-label="Choose an audio file to upload"
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              pickFile(e.dataTransfer.files?.[0] ?? null);
            }}
            className={cn(
              "flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-primary/[0.03]"
            )}
          >
            <Music2 className="h-6 w-6 text-primary/70" aria-hidden />
            <p className="text-sm font-medium text-foreground">
              {file ? file.name : "Drop an audio file here, or tap to browse"}
            </p>
            <p className="text-xs text-muted-foreground">
              {file ? prettyBytes(file.size) : "mp3 · m4a · ogg · wav · flac — up to 30 MB"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*,.mp3,.m4a,.aac,.ogg,.oga,.wav,.flac"
              className="hidden"
              onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
            />
          </div>

          {file && (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="music-title">Track name</Label>
                <Input
                  id="music-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={80}
                  placeholder="A little name for this song"
                  className="h-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={startUpload}
                  disabled={progress !== null}
                  className="rounded-full bg-gradient-to-r from-primary to-plum text-primary-foreground shadow-md shadow-primary/25 hover:opacity-95"
                >
                  {progress !== null ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Upload className="h-4 w-4" aria-hidden />}
                  Upload
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setFile(null);
                    setTitle("");
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  disabled={progress !== null}
                  className="rounded-full"
                  aria-label="Clear the chosen file"
                >
                  <X className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          )}

          {progress !== null && (
            <div className="space-y-1.5" aria-live="polite">
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-plum"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {progressLabel} · {progress}%
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* track list */}
      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-base">
            <span>Your tracks</span>
            <span className="text-xs font-normal text-muted-foreground">
              {tracks.length > 0 ? `${prettyBytes(totalMb)} stored` : ""}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5 pt-0">
          {loading ? (
            <div className="space-y-2.5">
              {[0, 1].map((i) => (
                <Skeleton key={i} className="h-16 rounded-2xl" />
              ))}
            </div>
          ) : tracks.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border p-8 text-center">
              <Music2 className="h-6 w-6 text-primary/60" aria-hidden />
              <p className="text-sm font-medium text-foreground">No music yet</p>
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                Upload a favourite song above and it will greet Mimie the moment she opens her study 💗
              </p>
            </div>
          ) : (
            <ul className="space-y-2.5">
              {tracks.map((t, i) => (
                <li
                  key={t.id}
                  className={cn(
                    "flex flex-wrap items-center gap-2 rounded-2xl border p-3 transition-colors sm:flex-nowrap",
                    t.enabled ? "border-border/70 bg-card" : "border-border/50 bg-muted/40 opacity-75"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => togglePreview(t)}
                    aria-label={previewId === t.id && previewPlaying ? `Pause ${t.title}` : `Play ${t.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-plum text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    {previewId === t.id && previewPlaying ? (
                      <Pause className="h-4 w-4" aria-hidden />
                    ) : (
                      <Play className="h-4 w-4 translate-x-0.5" aria-hidden />
                    )}
                  </button>

                  <div className="order-3 w-full min-w-0 flex-1 sm:order-none sm:w-auto">
                    {editId === t.id ? (
                      <div className="flex items-center gap-1.5">
                        <Input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              const v = editTitle.trim();
                              setEditId(null);
                              if (v && v !== t.title) patchTrack(t.id, { title: v });
                            } else if (e.key === "Escape") {
                              setEditId(null);
                            }
                          }}
                          onBlur={() => {
                            const v = editTitle.trim();
                            setEditId(null);
                            if (v && v !== t.title) patchTrack(t.id, { title: v });
                          }}
                          maxLength={80}
                          autoFocus
                          className="h-9"
                          aria-label="Track name"
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setEditId(t.id);
                          setEditTitle(t.title);
                        }}
                        className="max-w-full truncate text-left text-sm font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded px-0.5"
                        title="Click to rename"
                      >
                        {t.title}
                      </button>
                    )}
                    <p className="truncate text-[11px] text-muted-foreground">
                      {t.plays} play{t.plays === 1 ? "" : "s"} · {prettyBytes(t.sizeBytes)} ·{" "}
                      {new Date(t.uploadedAt).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>

                  <div className="ml-auto flex shrink-0 items-center gap-1">
                    <div className="mr-1 flex items-center gap-1.5 pr-1">
                      <Switch
                        checked={t.enabled}
                        onCheckedChange={(v) => patchTrack(t.id, { enabled: v })}
                        aria-label={`${t.enabled ? "Pause" : "Play"} ${t.title} on the site`}
                      />
                      <span className="hidden text-[11px] text-muted-foreground sm:inline">
                        {t.enabled ? "live" : "hidden"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => move(t.id, "up")}
                      disabled={i === 0 || busyId === t.id}
                      aria-label={`Move ${t.title} up`}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <ChevronUp className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => move(t.id, "down")}
                      disabled={i === tracks.length - 1 || busyId === t.id}
                      aria-label={`Move ${t.title} down`}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(t.id, t.title)}
                      disabled={busyId === t.id}
                      aria-label={armedId === t.id ? `Confirm deleting ${t.title}` : `Delete ${t.title}`}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                        armedId === t.id
                          ? "bg-destructive/10 text-destructive hover:bg-destructive/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {busyId === t.id ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Trash2 className="h-4 w-4" aria-hidden />}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Tracks are stored in the database and stream with seeking support on every device. Uploads go in
        2 MB pieces, so even long songs upload reliably. The little player appears bottom-right on the
        site — visitors can mute it, and their choice is remembered.
      </p>
    </div>
  );
}
