import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/**
 * Step 3 of a chunked upload: verify chunks arrived in order,
 * stitch them into the track's audio bytes and clean up.
 *
 * The assembled song is ALSO written to public/music/<id><ext> so it ships
 * as a static asset (CDN-served, immutable caching) — the DB row remains
 * the durable source of truth and the API stream stays as fallback for
 * environments where the filesystem is read-only (e.g. Vercel functions).
 */
export async function POST(req: Request) {
  return withAdmin(req, async () => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") ?? "";
    if (!id) return Response.json({ error: "Missing track id 💗" }, { status: 400 });

    const track = await db.musicTrack.findUnique({
      where: { id },
      select: { id: true, fileName: true, mimeType: true, sortOrder: true },
    });
    if (!track) {
      return Response.json({ error: "Upload session not found — start again 💗" }, { status: 404 });
    }

    const chunks = await db.musicChunk.findMany({
      where: { trackId: id },
      orderBy: { idx: "asc" },
      select: { idx: true, data: true },
    });
    if (chunks.length === 0) {
      return Response.json({ error: "No audio data arrived — try uploading again 💗" }, { status: 400 });
    }
    for (let i = 0; i < chunks.length; i++) {
      if (chunks[i].idx !== i) {
        return Response.json(
          { error: `A chunk went missing (${i}) — try uploading again 💗` },
          { status: 400 }
        );
      }
    }

    const data = Buffer.concat(chunks.map((c) => Buffer.from(c.data)));
    const updated = await db.musicTrack.update({
      where: { id },
      data: { data, sizeBytes: data.length }, // actual bytes are the source of truth
      select: { id: true, title: true, sizeBytes: true, enabled: true, plays: true, sortOrder: true },
    });
    await db.musicChunk.deleteMany({ where: { trackId: id } });

    // best-effort static export (skipped silently where the FS is read-only)
    let src: string | null = null;
    try {
      const i = track.fileName.lastIndexOf(".");
      const ext = i >= 0 ? track.fileName.slice(i).toLowerCase() : ".m4a";
      const dir = path.join(process.cwd(), "public", "music");
      mkdirSync(dir, { recursive: true });
      writeFileSync(path.join(dir, `${id}${ext}`), data);
      src = `/music/${id}${ext}`;
    } catch (e) {
      console.warn("[music-finish] static export skipped (read-only fs?):", e);
    }

    return Response.json({ ok: true, track: { ...updated, fileName: track.fileName, mimeType: track.mimeType, src, uploadedAt: new Date().toISOString() } });
  });
}
