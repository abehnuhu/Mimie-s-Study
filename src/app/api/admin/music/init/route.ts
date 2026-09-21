import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";
import { MUSIC_CHUNK_BYTES, MUSIC_MAX_BYTES, defaultTitle, isAllowedAudio, resolveMimeType } from "@/lib/music";

/**
 * Step 1 of a chunked upload: create a placeholder track
 * (empty data). The client then POSTs 2 MB chunks and finally /finish.
 */
export async function POST(req: Request) {
  return withAdmin(req, async () => {
    const body = await req.json().catch(() => ({}));
    const title = String(body.title ?? "").trim().slice(0, 80);
    const fileName = String(body.fileName ?? "").trim().slice(0, 120);
    const mimeType = String(body.mimeType ?? "").trim().toLowerCase().slice(0, 60);
    const sizeBytes = Number(body.sizeBytes);

    if (!fileName) {
      return Response.json({ error: "Pick an audio file first 💗" }, { status: 400 });
    }
    if (!isAllowedAudio(fileName, mimeType)) {
      return Response.json(
        { error: "That doesn't look like an audio file — try mp3, m4a, ogg, wav or flac 💗" },
        { status: 400 }
      );
    }
    if (!Number.isFinite(sizeBytes) || sizeBytes <= 0) {
      return Response.json({ error: "That file seems empty 💗" }, { status: 400 });
    }
    if (sizeBytes > MUSIC_MAX_BYTES) {
      return Response.json({ error: "Keep tracks under 30 MB so the site stays light 💗" }, { status: 400 });
    }

    const last = await db.musicTrack.findFirst({ orderBy: { sortOrder: "desc" }, select: { sortOrder: true } });
    const track = await db.musicTrack.create({
      data: {
        title: title || defaultTitle(fileName),
        fileName,
        mimeType: resolveMimeType(fileName, mimeType),
        sizeBytes: 0, // 0 = "still uploading" — invisible until /finish sets the real size
        data: Buffer.alloc(0),
        sortOrder: (last?.sortOrder ?? -1) + 1,
        enabled: true,
      },
      select: { id: true },
    });
    return Response.json({ ok: true, id: track.id, chunkBytes: MUSIC_CHUNK_BYTES });
  });
}
