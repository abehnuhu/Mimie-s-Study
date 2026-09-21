import { db } from "@/lib/db";

/**
 * Public playlist — metadata only (no audio bytes).
 * Returns { enabled, tracks } — tracks is empty when music is off site-wide.
 */
export async function GET() {
  try {
    const [setting, tracks] = await Promise.all([
      db.musicSetting.findUnique({ where: { id: "global" }, select: { enabled: true } }),
      db.musicTrack.findMany({
        where: { enabled: true, sizeBytes: { gt: 0 }, chunks: { none: {} } }, // finished tracks only
        orderBy: [{ sortOrder: "asc" }, { uploadedAt: "asc" }],
        select: { id: true, title: true, mimeType: true, sizeBytes: true },
      }),
    ]);
    const enabled = setting?.enabled ?? true;
    return Response.json(
      { enabled, tracks: enabled ? tracks : [] },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("[music-playlist]", e);
    return Response.json({ enabled: false, tracks: [] }, { status: 500 });
  }
}
