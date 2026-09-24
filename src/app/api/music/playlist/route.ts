import { existsSync } from "node:fs";
import path from "node:path";
import { db } from "@/lib/db";
import { MUSIC_ALLOWED_EXT } from "@/lib/music";

export const dynamic = "force-dynamic";

/**
 * Public playlist — metadata only (no audio bytes).
 * Returns { enabled, tracks } — tracks is empty when music is off site-wide.
 *
 * Each track carries a `src` URL: the static /music/<id>.<ext> file when it
 * exists on disk (Vercel CDN-served, cached immutable — the fast path now
 * that songs ship as static assets), falling back to the DB-streaming API
 * route for anything not yet exported.
 */
export async function GET() {
  try {
    const [setting, tracks] = await Promise.all([
      db.musicSetting.findUnique({ where: { id: "global" }, select: { enabled: true } }),
      db.musicTrack.findMany({
        where: { enabled: true, sizeBytes: { gt: 0 }, chunks: { none: {} } }, // finished tracks only
        orderBy: [{ sortOrder: "asc" }, { uploadedAt: "asc" }],
        select: { id: true, title: true, mimeType: true, sizeBytes: true, fileName: true },
      }),
    ]);
    const enabled = setting?.enabled ?? true;

    const musicDir = path.join(process.cwd(), "public", "music");
    const payload = tracks.map(({ fileName, ...meta }) => {
      const ext = MUSIC_ALLOWED_EXT.find((e) => fileName.toLowerCase().endsWith(e));
      const staticOk =
        !!ext &&
        existsSync(path.join(musicDir, `${meta.id}${ext}`));
      return { ...meta, src: staticOk ? `/music/${meta.id}${ext}` : `/api/music/stream/${meta.id}` };
    });

    return Response.json(
      { enabled, tracks: enabled ? payload : [] },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("[music-playlist]", e);
    return Response.json({ enabled: false, tracks: [] }, { status: 500 });
  }
}
