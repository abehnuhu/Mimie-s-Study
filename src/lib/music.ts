/**
 * Background music — shared constants & helpers.
 * Audio files are uploaded by the owner through Admin Studio in chunks
 * (so big songs survive serverless body-size limits), stored as BLOBs in
 * the database (portable across SQLite ↔ Neon Postgres), and streamed
 * with HTTP Range support so seeking works in every browser.
 */

/** Hard cap per track — keeps the DB and memory sane. */
export const MUSIC_MAX_BYTES = 30 * 1024 * 1024; // 30 MB

/** Upload chunk size — safely under serverless function body limits (Vercel ≈ 4.5 MB). */
export const MUSIC_CHUNK_BYTES = 2 * 1024 * 1024; // 2 MB

/** How many 2 MB chunks max before we refuse (a little over the 30 MB cap). */
export const MUSIC_MAX_CHUNKS = Math.ceil(MUSIC_MAX_BYTES / MUSIC_CHUNK_BYTES) + 1;

export const MUSIC_ALLOWED_MIME = [
  "audio/mpeg",
  "audio/mp3",
  "audio/mp4",
  "audio/m4a",
  "audio/aac",
  "audio/ogg",
  "audio/oga",
  "audio/webm",
  "audio/wav",
  "audio/x-wav",
  "audio/wave",
  "audio/flac",
  "audio/x-flac",
] as const;

export const MUSIC_ALLOWED_EXT = [
  ".mp3",
  ".m4a",
  ".aac",
  ".ogg",
  ".oga",
  ".webm",
  ".wav",
  ".flac",
] as const;

export function extOf(fileName: string): string {
  const i = fileName.lastIndexOf(".");
  return i >= 0 ? fileName.slice(i).toLowerCase() : "";
}

export function isAllowedAudio(fileName: string, mimeType: string): boolean {
  const ext = extOf(fileName);
  const mime = (mimeType || "").toLowerCase();
  return (
    (MUSIC_ALLOWED_EXT as readonly string[]).includes(ext) ||
    (MUSIC_ALLOWED_MIME as readonly string[]).includes(mime)
  );
}

/** Best-effort content type for streaming (falls back from metadata to extension). */
export function resolveMimeType(fileName: string, mimeType: string): string {
  const m = (mimeType || "").toLowerCase();
  if (m && (MUSIC_ALLOWED_MIME as readonly string[]).includes(m)) return m;
  switch (extOf(fileName)) {
    case ".mp3":
      return "audio/mpeg";
    case ".m4a":
      return "audio/mp4";
    case ".aac":
      return "audio/aac";
    case ".ogg":
    case ".oga":
      return "audio/ogg";
    case ".webm":
      return "audio/webm";
    case ".wav":
      return "audio/wav";
    case ".flac":
      return "audio/flac";
    default:
      return "application/octet-stream";
  }
}

/** "My Song (final).mp3" → "My Song (final)" */
export function defaultTitle(fileName: string): string {
  const base = fileName.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
  return base.slice(0, 80) || "Untitled track";
}

export function prettyBytes(n: number): string {
  if (!Number.isFinite(n) || n < 0) return "0 MB";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

/** Track metadata safe to send to the browser (never the audio bytes). */
export interface TrackMeta {
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
