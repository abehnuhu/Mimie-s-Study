/* eslint-disable no-console */
// ─────────────────────────────────────────────────────────────
// FETCH WIKIMEDIA LESSON IMAGES — searches Wikimedia Commons
// (freely licensed real photos/diagrams), downloads 880px
// thumbs, merges with the existing library manifest, and
// writes prisma/seed-data/image-library.{ts,json}.
// Resumable. Run: bun scripts/fetch-wikimedia.ts
// ─────────────────────────────────────────────────────────────
import { mkdirSync, writeFileSync, readFileSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { QUERIES as QUERIES_WAVE1 } from "./image-queries";
import { QUERIES as QUERIES_WAVE2 } from "./image-queries-wave2";

const WAVE = process.argv[2] ?? "";
const QUERIES = WAVE === "wave2" ? QUERIES_WAVE2 : QUERIES_WAVE1;
const WAVE_SUFFIX = WAVE === "wave2" ? "-wave2" : "";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "images", "lessons");
const PROG_FILE = join(ROOT, "scripts", `wikimedia-progress${WAVE_SUFFIX}.json`);
const MANIFEST_FILE = join(ROOT, "scripts", "wikimedia-manifest.json");
const STATS_FILE = join(ROOT, "scripts", `wikimedia-query-stats${WAVE_SUFFIX}.json`);
const CONCURRENCY = 1; // be gentle — the sandbox IP gets 429-rate-limited easily
const PER_QUERY_TAKE = 4;
const THUMB_WIDTH = 1400; // high-quality lesson photos (zoom dialog shows full-screen)
const JPEG_QUALITY = 82;
const UA = "Mozilla/5.0 (X11; Linux x86_64) study-app/1.0 (educational)";

interface ManifestEntry { file: string; alt: string; caption: string; tags: string[]; }

function loadJson<T>(p: string, fallback: T): T {
  try { return JSON.parse(readFileSync(p, "utf8")) as T; } catch { return fallback; }
}

// start from the existing library (image-library.ts via json) so the merged manifest keeps it
const interim: ManifestEntry[] = loadJson<ManifestEntry[]>(join(ROOT, "prisma", "seed-data", "image-library.json"), []);
const progress: number[] = loadJson<number[]>(PROG_FILE, []);
const queryStats: Record<string, number> = loadJson<Record<string, number>>(STATS_FILE, {}); // idx → images taken
const manifest: ManifestEntry[] = loadJson<ManifestEntry[]>(MANIFEST_FILE, interim);
if (manifest.length === 0 && interim.length > 0) manifest.push(...interim);

const catCounters = new Map<string, number>();
for (const e of manifest) {
  const m = e.file.match(/\/lessons\/([^/]+)\/[^/]+-(\d+)\.jpg$/);
  if (m) {
    const cur = catCounters.get(m[1]) ?? 0;
    catCounters.set(m[1], Math.max(cur, parseInt(m[2], 10)));
  }
}

function saveState() {
  writeFileSync(PROG_FILE, JSON.stringify(progress));
  writeFileSync(STATS_FILE, JSON.stringify(queryStats));
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 1));
}

async function api(url: string): Promise<unknown> {
  // Wikimedia blocks bun's fetch TLS fingerprint — shell out to curl instead
  const proc = Bun.spawn(["curl", "-s", "-m", "20", "-A", UA, "-H", "Accept: application/json", url], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const text = await new Response(proc.stdout).text();
  await proc.exited;
  if (!text.trim().startsWith("{")) throw new Error("HTTP non-JSON");
  return JSON.parse(text);
}

interface CommonsHit { title: string; }

async function searchCommons(query: string): Promise<string[]> {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search" +
    `&srsearch=${encodeURIComponent(query + " filetype:bitmap")}&srnamespace=6&srlimit=12`;
  const data = (await api(url)) as { query?: { search?: CommonsHit[] } };
  return (data.query?.search ?? []).map((h) => h.title);
}

interface ImageInfo { url: string; thumburl?: string; thumbwidth?: number; width: number; mime: string; }

async function fileInfo(title: string): Promise<ImageInfo | null> {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size|mime" +
    `&iiurlwidth=${THUMB_WIDTH}&titles=${encodeURIComponent(title)}`;
  const data = (await api(url)) as { query?: { pages?: Record<string, { imageinfo?: ImageInfo[] }> } };
  const pages = data.query?.pages ?? {};
  for (const page of Object.values(pages)) {
    const info = page.imageinfo?.[0];
    if (info) return info;
  }
  return null;
}

async function download(url: string, filePath: string): Promise<boolean> {
  try {
    const proc = Bun.spawn(["curl", "-s", "-m", "45", "-A", UA, "-o", filePath, url], {
      stdout: "pipe",
      stderr: "pipe",
    });
    await proc.exited;
    if (proc.exitCode !== 0) return false;
    const buf = readFileSync(filePath);
    if (buf.length < 12000) return false;
    const meta = await sharp(buf).metadata();
    if (!["jpeg", "png", "webp"].includes(meta.format ?? "")) return false;
    const out = await sharp(buf).resize({ width: THUMB_WIDTH, withoutEnlargement: true }).jpeg({ quality: JPEG_QUALITY }).toBuffer();
    if (out.length < 8000) return false;
    await Bun.write(filePath, out);
    return true;
  } catch {
    return false;
  }
}

async function processQuery(idx: number) {
  if ((queryStats[String(idx)] ?? 0) > 0) {
    progress.push(idx);
    console.log(`[${idx + 1}/${QUERIES.length}] (cached ✓)`);
    return;
  }
  const { c, q, t, cap } = QUERIES[idx];
  const dir = join(OUT_DIR, c);
  mkdirSync(dir, { recursive: true });
  let taken = 0;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const titles = await searchCommons(q);
      for (const title of titles) {
        if (taken >= PER_QUERY_TAKE) break;
        if (/\.(gif|ogg|webm|mp3|pdf|djvu|tif|tiff)$/i.test(title)) continue;
        // skip vintage book scans / engravings that pollute modern-photo searches
        if (/\b(book|plate|atlas|engraving|lithograph|woodcut|etching|manuscript)\b|\b1[0-9]\d{2}\b/i.test(title)) continue;
        const info = await fileInfo(title);
        if (!info) continue;
        if (!["image/jpeg", "image/png"].includes(info.mime)) continue;
        if ((info.width ?? 0) < 640) continue;
        const dl = info.thumburl && (info.thumbwidth ?? 0) >= 640 ? info.thumburl : info.url;
        const n = (catCounters.get(c) ?? 0) + 1;
        const filePath = join(dir, `${c}-${String(n).padStart(2, "0")}.jpg`);
        const ok = await download(dl, filePath);
        if (ok) {
          catCounters.set(c, n);
          const srcNote = title.startsWith("File:") ? title.slice(5) : title;
          manifest.push({
            file: `/images/lessons/${c}/${c}-${String(n).padStart(2, "0")}.jpg`,
            alt: `Wikimedia Commons: ${srcNote}`,
            caption: cap,
            tags: t,
          });
          taken++;
        } else {
          try { unlinkSync(filePath); } catch { /* not created */ }
        }
      }
      break; // success — stop retrying
    } catch (e) {
      const msg = String(e);
      if (attempt < 2) {
        console.log(`  query ${idx} attempt ${attempt + 1} failed (${msg.slice(0, 40)}) — cooling down 25s`);
        await new Promise((r) => setTimeout(r, 25000));
      }
    }
  }
  progress.push(idx);
  queryStats[String(idx)] = taken;
  saveState();
  console.log(`[${idx + 1}/${QUERIES.length}] ${c}: +${taken} (${manifest.length} total)`);
  await new Promise((r) => setTimeout(r, 3500));
}

async function main() {
  console.log(`🌍 Wikimedia pipeline: ${QUERIES.length} queries · merging ${interim.length} interim photos`);
  const todo = QUERIES.map((_, i) => i).filter((i) => !progress.includes(i));
  console.log(`already done: ${QUERIES.length - todo.length} queries`);
  let cursor = 0;
  async function worker() {
    while (cursor < todo.length) {
      const idx = todo[cursor++];
      await processQuery(idx);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  saveState();
  if (manifest.length <= interim.length) {
    console.log(`⚠️ no new images (still ${manifest.length}) — leaving image-library.ts untouched`);
    return;
  }
  const tsSource = `// AUTO-GENERATED by scripts/fetch-wikimedia.ts — real-life lesson photo library.
// ${manifest.length} photos (interim game photos + Wikimedia Commons, freely licensed).
// Re-run the script to extend.

export interface LibraryImage { file: string; alt: string; caption: string; tags: string[]; }

export const imageLibrary: LibraryImage[] = ${JSON.stringify(manifest, null, 1)};
`;
  writeFileSync(join(ROOT, "prisma", "seed-data", "image-library.ts"), tsSource);
  writeFileSync(join(ROOT, "prisma", "seed-data", "image-library.json"), JSON.stringify(manifest, null, 1));
  const cats = new Set(manifest.map((m) => m.file.split("/")[3] ?? "games"));
  console.log(`✅ DONE: ${manifest.length} images across ${cats.size} categories → image-library.ts + .json`);
}

main().catch((e) => { console.error("PIPELINE FAILED:", e); process.exit(1); });
