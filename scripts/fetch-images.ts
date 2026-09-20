/* eslint-disable no-console */
// ─────────────────────────────────────────────────────────────
// FETCH LESSON IMAGES — searches real photos via z-ai CLI,
// downloads, resizes (sharp, 880px q72), and builds the
// image-library manifest. Resumable: rerun skips done queries.
// Run: bun scripts/fetch-images.ts   (background-friendly)
// ─────────────────────────────────────────────────────────────
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { QUERIES } from "./image-queries";
import type { Query as _Q } from "./image-queries";

export type { _Q as Query };

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "images", "lessons");
const PROG_FILE = join(ROOT, "scripts", "image-progress.json");
const MANIFEST_FILE = join(ROOT, "scripts", "image-manifest.json");
const CONCURRENCY = 1; // image-search API rate-limits aggressively — keep it gentle
const PER_QUERY_TAKE = 3;
const RETRY_DELAYS_MS = [0, 30000, 60000, 120000]; // wait before each attempt

interface Query {
  c: string; // category / folder
  q: string; // search sentence
  t: string[]; // match tags
  cap: string; // teaching caption
}


// ── helpers ──────────────────────────────────────────────
interface ManifestEntry { file: string; alt: string; caption: string; tags: string[]; }

function loadJson<T>(p: string, fallback: T): T {
  try { return JSON.parse(readFileSync(p, "utf8")) as T; } catch { return fallback; }
}

const progress: number[] = loadJson<number[]>(PROG_FILE, []);
const manifest: ManifestEntry[] = loadJson<ManifestEntry[]>(MANIFEST_FILE, []);
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
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 1));
}

function altify(q: string): string {
  return q.charAt(0).toUpperCase() + q.slice(1) + ".";
}

async function searchImages(query: string, out: string): Promise<string[]> {
  const proc = Bun.spawn(["z-ai", "image-search", "-q", query, "--count", "6", "--gl", "us", "--no-rank", "-o", out], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const killer = setTimeout(() => proc.kill(), 150000);
  await proc.exited;
  clearTimeout(killer);
  try {
    const parsed = JSON.parse(readFileSync(out, "utf8"));
    if (parsed?.success && Array.isArray(parsed.results)) {
      return parsed.results
        .filter((r: { original_url?: string; original_width?: string }) => r.original_url && parseInt((r.original_width ?? "0").replace("px", ""), 10) >= 320)
        .map((r: { original_url: string }) => r.original_url);
    }
  } catch { /* no/invalid output */ }
  return [];
}

async function downloadAndResize(url: string, filePath: string): Promise<boolean> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(45000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 12000) return false;
    const meta = await sharp(buf).metadata();
    if (!["jpeg", "png", "webp"].includes(meta.format ?? "")) return false;
    const out = await sharp(buf)
      .resize({ width: 880, withoutEnlargement: true })
      .jpeg({ quality: 72 })
      .toBuffer();
    await Bun.write(filePath, out);
    return out.length > 8000;
  } catch {
    return false;
  }
}

async function processQuery(idx: number) {
  const { c, q, t, cap } = QUERIES[idx];
  const dir = join(OUT_DIR, c);
  mkdirSync(dir, { recursive: true });
  let urls: string[] = [];
  for (let attempt = 0; attempt < RETRY_DELAYS_MS.length; attempt++) {
    const delay = RETRY_DELAYS_MS[attempt];
    if (delay > 0) await new Promise((r) => setTimeout(r, delay));
    urls = await searchImages(q, `/tmp/imgsearch-${idx}.json`);
    if (urls.length > 0) break;
    console.log(`  [retry ${attempt + 1}] empty result for "${q}", waiting…`);
  }
  let taken = 0;
  for (const url of urls) {
    if (taken >= PER_QUERY_TAKE) break;
    const n = (catCounters.get(c) ?? 0) + 1;
    const filePath = join(dir, `${c}-${String(n).padStart(2, "0")}.jpg`);
    const ok = await downloadAndResize(url, filePath);
    if (ok) {
      catCounters.set(c, n);
      manifest.push({ file: `/images/lessons/${c}/${c}-${String(n).padStart(2, "0")}.jpg`, alt: altify(q), caption: cap, tags: t });
      taken++;
    } else {
      try { unlinkSync(filePath); } catch { /* not created */ }
    }
  }
  progress.push(idx);
  saveState();
  console.log(`[${idx + 1}/${QUERIES.length}] ${c}: +${taken} images (${manifest.length} total)`);
  await new Promise((r) => setTimeout(r, 8000)); // pacing between queries
}

async function main() {
  console.log(`🖼️  image pipeline: ${QUERIES.length} queries · concurrency ${CONCURRENCY}`);
  const todo = QUERIES.map((_, i) => i).filter((i) => !progress.includes(i));
  console.log(`already done: ${QUERIES.length - todo.length} queries, manifest has ${manifest.length} images`);

  let cursor = 0;
  async function worker() {
    while (cursor < todo.length) {
      const idx = todo[cursor++];
      try { await processQuery(idx); } catch (e) { console.error(`query ${idx} failed:`, String(e).slice(0, 120)); }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  saveState();
  const tsSource = `// AUTO-GENERATED by scripts/fetch-images.ts — real-life lesson photo library.
// ${manifest.length} photos. Do not edit by hand; re-run the script to extend.

export interface LibraryImage { file: string; alt: string; caption: string; tags: string[]; }

export const imageLibrary: LibraryImage[] = ${JSON.stringify(manifest, null, 1)};
`;
  writeFileSync(join(ROOT, "prisma", "seed-data", "image-library.ts"), tsSource);
  writeFileSync(join(ROOT, "prisma", "seed-data", "image-library.json"), JSON.stringify(manifest, null, 1));
  const cats = new Set(manifest.map((m) => m.file.split("/")[3]));
  console.log(`✅ DONE: ${manifest.length} images across ${cats.size} categories → image-library.ts + .json`);
}

main().catch((e) => { console.error("PIPELINE FAILED:", e); process.exit(1); });
