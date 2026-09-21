import { db } from "@/lib/db";

/**
 * Play counter — called once by the player when a track starts.
 * Open to signed-out visitors (the login screen plays music too); it only
 * increments a counter, so the abuse surface is negligible.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const trackId = typeof body.trackId === "string" ? body.trackId : "";
    if (!trackId) return Response.json({ ok: false }, { status: 400 });
    const track = await db.musicTrack.findUnique({ where: { id: trackId }, select: { id: true } });
    if (!track) return Response.json({ ok: false }, { status: 404 });
    await db.musicTrack.update({ where: { id: trackId }, data: { plays: { increment: 1 } } });
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[music-played]", e);
    return Response.json({ ok: false }, { status: 500 });
  }
}
