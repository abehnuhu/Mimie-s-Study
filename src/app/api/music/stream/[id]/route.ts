import { db } from "@/lib/db";
import { resolveMimeType } from "@/lib/music";

export const dynamic = "force-dynamic";

/**
 * Stream a music track from the database with HTTP Range support
 * (Safari refuses to seek — and sometimes play — without it).
 */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await ctx.params;
    const track = await db.musicTrack.findUnique({
      where: { id },
      select: { data: true, mimeType: true, fileName: true, enabled: true },
    });
    if (!track || !track.enabled) {
      return new Response("Track not found 💗", { status: 404 });
    }

    const buf = Buffer.from(track.data);
    const total = buf.length;
    const contentType = resolveMimeType(track.fileName, track.mimeType);
    const baseHeaders: Record<string, string> = {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": "inline",
    };

    const range = req.headers.get("range");
    const m = range ? /^bytes=(\d*)-(\d*)$/.exec(range.trim()) : null;
    if (m) {
      // suffix range: "bytes=-N" → last N bytes
      let start = m[1] === "" ? undefined : Number.parseInt(m[1], 10);
      let end = m[2] === "" ? undefined : Number.parseInt(m[2], 10);
      if (start === undefined && end !== undefined) {
        start = Math.max(0, total - end);
        end = total - 1;
      } else {
        start = start ?? 0;
        end = end !== undefined ? Math.min(end, total - 1) : total - 1;
      }
      if (Number.isNaN(start) || start < 0 || start >= total || end < start) {
        return new Response(null, {
          status: 416,
          headers: { "Content-Range": `bytes */${total}`, "Accept-Ranges": "bytes" },
        });
      }
      const slice = buf.subarray(start, end + 1);
      return new Response(new Uint8Array(slice), {
        status: 206,
        headers: {
          ...baseHeaders,
          "Content-Range": `bytes ${start}-${end}/${total}`,
          "Content-Length": String(slice.length),
        },
      });
    }

    return new Response(new Uint8Array(buf), {
      status: 200,
      headers: { ...baseHeaders, "Content-Length": String(total) },
    });
  } catch (e) {
    console.error("[music-stream]", e);
    return new Response("Stream failed 💗", { status: 500 });
  }
}

/** HEAD — same headers, no body (some players probe the file first). */
export async function HEAD(req: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await ctx.params;
    const track = await db.musicTrack.findUnique({
      where: { id },
      select: { data: true, mimeType: true, fileName: true, enabled: true },
    });
    if (!track || !track.enabled) return new Response(null, { status: 404 });
    const total = Buffer.from(track.data).length;
    return new Response(null, {
      status: 200,
      headers: {
        "Content-Type": resolveMimeType(track.fileName, track.mimeType),
        "Accept-Ranges": "bytes",
        "Content-Length": String(total),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response(null, { status: 500 });
  }
}
