/* eslint-disable no-console */
// VLM QUALITY AUDIT LESSON IMAGES — samples Wikimedia lesson photos and
// flags blurry / irrelevant / old-book-scan images for removal.
// Resumable. Run: bun scripts/vlm-audit-lessons.ts
import ZAI from "z-ai-web-dev-sdk";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const LIB = JSON.parse(readFileSync(join(ROOT, "prisma", "seed-data", "image-library.json"), "utf8")) as {
  file: string;
  alt: string;
  caption: string;
  tags: string[];
}[];
const LESSONS = LIB.filter((e) => e.file.startsWith("/images/lessons/"));
const CACHE = join(ROOT, "scripts", "vlm-lesson-audit.json");

const cache: Record<string, string> = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, "utf8")) : {};
const RETRY = [0, 15000, 40000, 90000];

async function ask(zai: Awaited<ReturnType<typeof ZAI.create>>, file: string, topic: string, caption: string): Promise<string> {
  const p = join(ROOT, "public", file);
  const buf = await sharp(p).resize({ width: 512 }).jpeg({ quality: 70 }).toBuffer();
  const b64 = buf.toString("base64");
  const prompt = `This image is used in a nursing study app to illustrate the topic "${topic}" (teaching point: "${caption}"). Judge it. Answer with EXACTLY one of:
GOOD — relevant to the topic AND clear/usable quality
OFFTOPIC: <what it shows instead> — clearly irrelevant
LOWQ: <reason> — too blurry, dark, low resolution, a scan of an old book page, or mostly text/watermark
First line only.`;
  for (const delay of RETRY) {
    if (delay > 0) await new Promise((r) => setTimeout(r, delay));
    try {
      const res = await zai.chat.completions.createVision({
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: `data:image/jpeg;base64,${b64}` } },
            ],
          },
        ],
        thinking: { type: "disabled" },
      });
      return res.choices[0]?.message?.content?.split("\n")[0]?.slice(0, 140) ?? "NO-ANSWER";
    } catch (e) {
      if (delay === RETRY[RETRY.length - 1]) return `ERROR: ${String(e).slice(0, 60)}`;
    }
  }
  return "NO-ANSWER";
}

async function main() {
  const zai = await ZAI.create();
  // sample: every image with a category of interest — audit up to all of them over runs
  const todo = LESSONS.filter((e) => !cache[e.file]);
  console.log(`auditing ${todo.length} of ${LESSONS.length} lesson images (${Object.keys(cache).length} cached)`);
  for (const e of todo) {
    const ans = await ask(zai, e.file, e.tags[0] ?? "nursing", e.caption);
    cache[e.file] = ans;
    if (!ans.startsWith("GOOD")) console.log(`${e.file}: ${ans}`);
    writeFileSync(CACHE, JSON.stringify(cache, null, 1));
    await new Promise((r) => setTimeout(r, 1500));
  }
  const bad = Object.entries(cache).filter(([, v]) => !v.startsWith("GOOD"));
  console.log(`\n=== ${bad.length} flagged / ${Object.keys(cache).length} audited ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
