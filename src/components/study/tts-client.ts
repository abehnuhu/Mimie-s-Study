"use client";

/**
 * Shared client-side TTS audio fetcher.
 * Fetches WAV blobs from /api/tts, caches them as object URLs,
 * and dedupes in-flight requests for the same text.
 */

const blobCache = new Map<string, string>();
const inflight = new Map<string, Promise<string>>();
const BLOB_MAX = 120;

export function getCachedAudioUrl(text: string): string | undefined {
  return blobCache.get(text);
}

export function getAudioUrl(text: string): Promise<string> {
  const cached = blobCache.get(text);
  if (cached) return Promise.resolve(cached);

  const pending = inflight.get(text);
  if (pending) return pending;

  const p = (async () => {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({ error: "Voice unavailable" }));
      throw new Error(json.error ?? "Voice unavailable");
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    if (blobCache.size >= BLOB_MAX) {
      const oldest = blobCache.keys().next().value;
      if (oldest !== undefined) {
        const oldUrl = blobCache.get(oldest);
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        blobCache.delete(oldest);
      }
    }
    blobCache.set(text, url);
    return url;
  })();

  inflight.set(text, p);
  p.finally(() => inflight.delete(text)).catch(() => {});
  return p;
}

/** Split text into TTS-sized chunks at sentence boundaries. */
export function chunkForTts(text: string, max = 850): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  const sentences = clean.match(/[^.!?]+[.!?]+["')\]]*|\S+$/g) ?? [clean];
  const chunks: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if (s.length > max) {
      if (cur.trim()) chunks.push(cur.trim());
      // single overlong sentence → hard split at word boundaries
      for (let i = 0; i < s.length; i += max) {
        const piece = s.slice(i, i + max).trim();
        if (piece) chunks.push(piece);
      }
      cur = "";
    } else if ((cur + s).length > max) {
      if (cur.trim()) chunks.push(cur.trim());
      cur = s;
    } else {
      cur += s;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}
