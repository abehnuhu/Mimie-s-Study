import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/**
 * Rename a track or include/exclude it from the site playlist.
 */
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const existing = await db.musicTrack.findUnique({ where: { id }, select: { id: true } });
    if (!existing) return Response.json({ error: "Track not found 💗" }, { status: 404 });

    const data: Record<string, unknown> = {};
    if (typeof body.title === "string") {
      const t = body.title.trim().slice(0, 80);
      if (!t) return Response.json({ error: "Give the track a little name 💗" }, { status: 400 });
      data.title = t;
    }
    if (typeof body.enabled === "boolean") data.enabled = body.enabled;
    if (Object.keys(data).length === 0) {
      return Response.json({ error: "Nothing to change 💗" }, { status: 400 });
    }

    const track = await db.musicTrack.update({
      where: { id },
      data,
      select: { id: true, title: true, enabled: true, fileName: true, mimeType: true, sizeBytes: true, sortOrder: true, plays: true, uploadedAt: true },
    });
    return Response.json({ ok: true, track });
  });
}

/**
 * Delete a track (its leftover upload chunks cascade away too).
 */
export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const existing = await db.musicTrack.findUnique({ where: { id }, select: { id: true, title: true } });
    if (!existing) return Response.json({ error: "Track not found 💗" }, { status: 404 });
    await db.musicTrack.delete({ where: { id } });
    return Response.json({ ok: true, deleted: existing.title });
  });
}
