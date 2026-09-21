import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/**
 * Admin track list — full metadata (including disabled tracks), never the bytes.
 */
export async function GET(req: Request) {
  return withAdmin(req, async () => {
    // sweep: uploads abandoned mid-way (unfinished tracks older than 1 hour) get removed
    const stale = new Date(Date.now() - 60 * 60 * 1000);
    await db.musicTrack.deleteMany({
      where: { OR: [{ chunks: { some: {} } }, { sizeBytes: 0 }], uploadedAt: { lt: stale } },
    });

    const [setting, tracks] = await Promise.all([
      db.musicSetting.findUnique({ where: { id: "global" }, select: { enabled: true } }),
      db.musicTrack.findMany({
        where: { sizeBytes: { gt: 0 }, chunks: { none: {} } }, // hide tracks still uploading
        orderBy: [{ sortOrder: "asc" }, { uploadedAt: "asc" }],
        select: {
          id: true,
          title: true,
          fileName: true,
          mimeType: true,
          sizeBytes: true,
          enabled: true,
          sortOrder: true,
          plays: true,
          uploadedAt: true,
        },
      }),
    ]);
    return Response.json({ enabled: setting?.enabled ?? true, tracks });
  });
}
