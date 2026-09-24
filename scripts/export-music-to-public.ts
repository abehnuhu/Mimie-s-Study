/**
 * One-off migration: every finalised MusicTrack's audio bytes →
 * public/music/<id><ext> so the songs ship as static assets
 * (Vercel CDN-served) instead of streaming through the API/DB.
 *
 * Run: bun scripts/export-music-to-public.ts
 */
import { PrismaClient } from "@prisma/client";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const db = new PrismaClient();

async function main() {
  const dir = path.join(process.cwd(), "public", "music");
  mkdirSync(dir, { recursive: true });

  const tracks = await db.musicTrack.findMany({
    where: { sizeBytes: { gt: 0 } },
    select: { id: true, fileName: true, data: true, title: true },
  });

  let written = 0;
  for (const t of tracks) {
    if (!t.data) continue;
    const i = t.fileName.lastIndexOf(".");
    const ext = i >= 0 ? t.fileName.slice(i).toLowerCase() : ".m4a";
    const file = path.join(dir, `${t.id}${ext}`);
    if (!existsSync(file)) {
      writeFileSync(file, Buffer.from(t.data));
      written++;
    }
    console.log(
      `✓ public/music/${t.id}${ext} — "${t.title}" (${(t.data.length / 1024 / 1024).toFixed(2)} MB)`
    );
  }
  console.log(`\nDone: ${written} new file(s) written, ${tracks.length} track(s) exported.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
