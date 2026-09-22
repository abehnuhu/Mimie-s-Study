// ─────────────────────────────────────────────────────────────
// GEN CASE DETECTIVE IMAGES — AI-generates one evocative hero
// illustration per detective case (z-ai image gen API), resizes
// with sharp to 1024px JPEG q80. Resumable: rerun skips files
// that already exist. Retries 429 rate-limits with backoff.
// Run: bun scripts/gen-case-images.ts
// ─────────────────────────────────────────────────────────────
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "images", "games");

interface CasePrompt {
  n: number;
  prompt: string;
}

const CASES: CasePrompt[] = [
  {
    n: 1,
    prompt:
      "A Ghanaian nurse in soft pink scrubs gently checking on a young mother resting in a modest district hospital postnatal ward in Ghana, warm golden evening light through a window, simple hospital bed with clean pale sheets, the nurse leaning in with a concerned caring expression, the mother calm but tired with her newborn sleeping beside her, cinematic photorealistic, respectful, dignified, soft depth of field, warm colour palette, medical education illustration, high quality, detailed",
  },
  {
    n: 2,
    prompt:
      "A Ghanaian nurse measuring the blood pressure of a young pregnant woman with a cuff at a bright antenatal clinic in Ghana, the woman seated and quietly worried, nurse focused and reassuring, warm afternoon light, simple clinic room with wooden bench and health poster on wall, cinematic photorealistic, respectful, dignified, soft depth of field, warm colour palette, medical education illustration, high quality, detailed",
  },
];

const RETRY_DELAYS_MS = [0, 20000, 45000, 90000, 150000];
const SIZE = "1344x768"; // landscape 16:9 — hero aspect-video cards

async function generateOne(zai: Awaited<ReturnType<typeof ZAI.create>>, c: CasePrompt): Promise<boolean> {
  const out = join(OUT_DIR, `case-${c.n}.jpg`);
  if (existsSync(out)) {
    console.log(`↷ case-${c.n}.jpg already exists — skipping (resume-safe)`);
    return true;
  }
  for (let attempt = 0; attempt < RETRY_DELAYS_MS.length; attempt++) {
    const delay = RETRY_DELAYS_MS[attempt];
    if (delay > 0) {
      console.log(`  attempt ${attempt + 1}: waiting ${delay / 1000}s (backoff)…`);
      await new Promise((r) => setTimeout(r, delay));
    }
    try {
      const res = await zai.images.generations.create({ prompt: c.prompt, size: SIZE });
      const b64 = res.data?.[0]?.base64;
      if (!b64) throw new Error("no image in response");
      const buf = Buffer.from(b64, "base64");
      // resize + jpg via sharp: 1024 wide, quality 80
      await sharp(buf).resize({ width: 1024, withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(out);
      console.log(`✓ case-${c.n}.jpg written (${SIZE} → 1024w q80)`);
      return true;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`  case-${c.n} attempt ${attempt + 1} failed: ${msg.slice(0, 140)}`);
    }
  }
  console.log(`✗ case-${c.n} left for a later cron round (rate-limited)`);
  return false;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();
  let ok = 0;
  for (const c of CASES) {
    if (await generateOne(zai, c)) ok++;
  }
  console.log(`Done: ${ok}/${CASES.length} case images present.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
