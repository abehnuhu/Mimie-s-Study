import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";
import { MUSIC_CHUNK_BYTES, MUSIC_MAX_CHUNKS } from "@/lib/music";

export const dynamic = "force-dynamic";

/**
 * Step 2 of a chunked upload: append one binary chunk (?id=trackId&seq=n).
 * Chunks are stored as rows so a failed request can simply be retried
 * without re-sending the whole song.
 */
export async function POST(req: Request) {
  return withAdmin(req, async () => {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") ?? "";
    const seq = Number.parseInt(url.searchParams.get("seq") ?? "", 10);

    if (!id || !Number.isInteger(seq) || seq < 0 || seq >= MUSIC_MAX_CHUNKS) {
      return Response.json({ error: "Bad chunk request 💗" }, { status: 400 });
    }

    const track = await db.musicTrack.findUnique({ where: { id }, select: { id: true } });
    if (!track) {
      return Response.json({ error: "Upload session not found — start again 💗" }, { status: 404 });
    }

    const buf = Buffer.from(await req.arrayBuffer());
    if (buf.length === 0) {
      return Response.json({ error: "Empty chunk 💗" }, { status: 400 });
    }
    if (buf.length > MUSIC_CHUNK_BYTES + 64 * 1024) {
      return Response.json({ error: "Chunk too large 💗" }, { status: 413 });
    }

    await db.musicChunk.upsert({
      where: { trackId_idx: { trackId: id, idx: seq } },
      create: { trackId: id, idx: seq, data: buf },
      update: { data: buf },
    });
    return Response.json({ ok: true, received: buf.length });
  });
}
