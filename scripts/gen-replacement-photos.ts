/* eslint-disable no-console */
// GEN REPLACEMENT GAME PHOTOS — AI-generates clean, single-subject photos
// for game/library entries whose current photo doesn't match its label
// (found by scripts/vlm-audit-games.ts). Resumable: skips existing outputs.
// Run: bun scripts/gen-replacement-photos.ts
import { existsSync, renameSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "images", "games");

interface Replacement {
  out: string;      // final file name (e.g. "cord-clamp")
  backupOld: boolean; // rename old photo to <name>-old.jpg before writing
  prompt: string;
}

const REPLACEMENTS: Replacement[] = [
  {
    out: "cord-clamp",
    backupOld: true, // current photo actually shows surgical scissors
    prompt:
      "Close-up product photograph of a sterile disposable umbilical cord clamp, a small white and blue plastic medical clip used to clamp a newborn's umbilical cord, lying on a clean blue sterile surgical drape, soft clinical lighting, shallow depth of field, photorealistic, high quality medical equipment photography, detailed",
  },
  {
    out: "pinard",
    backupOld: true, // current photo shows probes, not a Pinard
    prompt:
      "Close-up photograph of a Pinard fetal stethoscope (also called a trumpet stethoscope), a simple cone-shaped hollow aluminum or wooden listening device shaped like a small trumpet or funnel held against a pregnant abdomen to hear the fetal heartbeat, resting on a clean white clinic towel next to a stethoscope, soft natural clinic light, photorealistic, high quality medical equipment photography",
  },
  {
    out: "hand-sanitizer",
    backupOld: true, // current photo shows a light switch and outlet
    prompt:
      "Photorealistic close-up of a nurse's hands applying alcohol-based hand sanitizer gel from a wall dispenser in a hospital corridor, glistening gel on rubbed hands, clean modern healthcare setting softly blurred in background, warm professional lighting, high quality, detailed",
  },
  {
    out: "gloves-wearing",
    backupOld: true, // current photo is an infographic poster
    prompt:
      "Photorealistic photo of a nurse's hands donning sterile surgical gloves from an open glove packet in an operating theatre, powder-free blue nitrile gloves, sterile field with green surgical drape beneath, clinical lighting, close-up on the hands, high quality, detailed",
  },
  {
    out: "nurse-ghana",
    backupOld: true, // current photo shows a mother holding newborn
    prompt:
      "Photorealistic portrait of a warm smiling Ghanaian nurse in pink scrubs with a stethoscope around her neck standing in a modest bright district hospital maternity ward in Ghana, beds with clean sheets softly blurred behind her, natural daylight, respectful, dignified, high quality photography",
  },
  {
    out: "sharps-full",
    backupOld: true, // current photo shows an EMPTY bin
    prompt:
      "Photorealistic photo of a yellow clinical sharps disposal container mounted on a hospital wall, filled about three-quarters full with used syringes and needles visible through the opening, red biohazard symbol on the front, a gloved hand about to place a needle inside, clean clinic lighting, high quality, detailed",
  },
];

const RETRY_DELAYS_MS = [0, 20000, 45000, 90000, 150000];

async function generateOne(zai: Awaited<ReturnType<typeof ZAI.create>>, r: Replacement): Promise<boolean> {
  const out = join(OUT_DIR, `${r.out}.jpg`);
  const staging = join(OUT_DIR, `${r.out}-new.jpg`);
  if (existsSync(out) && !existsSync(staging) && !r.backupOld) return true; // already replaced & no old backup pending
  if (existsSync(out) && existsSync(join(OUT_DIR, `${r.out}-old.jpg`))) {
    console.log(`↷ ${r.out}.jpg already regenerated (old backed up) — skipping`);
    return true;
  }
  for (const delay of RETRY_DELAYS_MS) {
    if (delay > 0) {
      console.log(`  ${r.out}: waiting ${delay / 1000}s (backoff)…`);
      await new Promise((res) => setTimeout(res, delay));
    }
    try {
      const res = await zai.images.generations.create({ prompt: r.prompt, size: "1024x1024" });
      const b64 = res.data?.[0]?.base64;
      if (!b64) throw new Error("no image in response");
      const buf = Buffer.from(b64, "base64");
      await sharp(buf).resize({ width: 1024, withoutEnlargement: true }).jpeg({ quality: 82 }).toFile(staging);
      if (r.backupOld) {
        const backup = join(OUT_DIR, `${r.out}-old.jpg`);
        if (existsSync(out) && !existsSync(backup)) renameSync(out, backup);
      }
      renameSync(staging, out);
      console.log(`✓ ${r.out}.jpg regenerated${r.backupOld ? " (old → -old.jpg)" : ""}`);
      return true;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`  ${r.out} attempt failed: ${msg.slice(0, 110)}`);
    }
  }
  console.log(`✗ ${r.out} left for a later round (rate-limited)`);
  return false;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();
  let ok = 0;
  for (const r of REPLACEMENTS) {
    if (await generateOne(zai, r)) ok++;
  }
  console.log(`Done: ${ok}/${REPLACEMENTS.length} replacements present.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
