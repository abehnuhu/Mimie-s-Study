import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/**
 * Move a track up/down in the playlist (swaps sortOrder with its neighbour).
 */
export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const id = typeof body.id === "string" ? body.id : "";
    const direction = body.direction === "up" ? "up" : body.direction === "down" ? "down" : "";
    if (!id || !direction) {
      return Response.json({ error: "Which track, and which way? 💗" }, { status: 400 });
    }

    const track = await db.musicTrack.findUnique({ where: { id }, select: { id: true, sortOrder: true } });
    if (!track) return Response.json({ error: "Track not found 💗" }, { status: 404 });

    const neighbour = await db.musicTrack.findFirst({
      where: direction === "up" ? { sortOrder: { lt: track.sortOrder } } : { sortOrder: { gt: track.sortOrder } },
      orderBy: { sortOrder: direction === "up" ? "desc" : "asc" },
      select: { id: true, sortOrder: true },
    });
    if (!neighbour) {
      return Response.json({ ok: true, moved: false }); // already at the top/bottom
    }

    await db.$transaction([
      db.musicTrack.update({ where: { id: track.id }, data: { sortOrder: neighbour.sortOrder } }),
      db.musicTrack.update({ where: { id: neighbour.id }, data: { sortOrder: track.sortOrder } }),
    ]);
    return Response.json({ ok: true, moved: true });
  });
}
