/* eslint-disable no-console */
// VLM AUDIT GAME PHOTOS — checks each public/images/games photo against
// what it is supposed to show; flags mismatches + blur. Run: bun scripts/vlm-audit-games.ts
import ZAI from "z-ai-web-dev-sdk";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

const CLAIMS: { file: string; claim: string }[] = [
  { file: "autoclave", claim: "an autoclave steam sterilizer machine" },
  { file: "baby-scale", claim: "a baby weighing scale" },
  { file: "bp-cuff", claim: "a blood pressure cuff (sphygmomanometer)" },
  { file: "breastfeeding", claim: "a mother breastfeeding a baby" },
  { file: "cord-clamp", claim: "an umbilical cord clamp" },
  { file: "cord-stump", claim: "a newborn's dried umbilical cord stump" },
  { file: "cup-feeding", claim: "cup feeding a newborn" },
  { file: "delivery-bed", claim: "a hospital delivery bed" },
  { file: "delivery-kit", claim: "a sterile delivery instrument kit/tray" },
  { file: "doppler", claim: "a fetal Doppler probe/device" },
  { file: "forceps", claim: "obstetric or surgical forceps" },
  { file: "gloves-wearing", claim: "a health worker putting on gloves" },
  { file: "goggles", claim: "protective goggles/eye protection" },
  { file: "hand-rash", claim: "irritated skin / rash on hands" },
  { file: "hand-sanitizer", claim: "alcohol hand sanitizer/rub being used" },
  { file: "handwashing", claim: "handwashing with soap and water" },
  { file: "kangaroo-care", claim: "a mother holding a baby skin-to-skin (kangaroo care)" },
  { file: "nurse-ghana", claim: "a nurse or nurse caring for a mother" },
  { file: "needle-syringe", claim: "a needle and syringe" },
  { file: "neonatal-resus", claim: "newborn resuscitation equipment (bag-mask/ambu bag)" },
  { file: "newborn-exam", claim: "a newborn baby being examined" },
  { file: "newborn-face", claim: "a newborn baby's face close-up" },
  { file: "newborn-feet", claim: "a newborn baby's feet" },
  { file: "newborn-head", claim: "a newborn baby's head" },
  { file: "newborn-sleeping", claim: "a sleeping newborn baby" },
  { file: "nicu-baby", claim: "a premature/sick newborn receiving special care" },
  { file: "nicu-wires", claim: "medical monitoring equipment beside a newborn" },
  { file: "palpation", claim: "a nurse palpating a pregnant abdomen" },
  { file: "partograph", claim: "a partograph labour monitoring chart/paper" },
  { file: "phototherapy", claim: "a newborn under phototherapy blue lights" },
  { file: "pinard", claim: "a Pinard fetal stethoscope (trumpet-shaped)" },
  { file: "sharps-bin", claim: "a yellow sharps disposal container" },
  { file: "sharps-full", claim: "a sharps bin filled near the top" },
  { file: "sterile-gloves", claim: "sterile gloves (packaged or donned)" },
  { file: "stethoscope", claim: "a stethoscope" },
  { file: "suture-kit", claim: "a suture/episiotomy repair instrument set" },
  { file: "thermometer", claim: "a clinical thermometer" },
  { file: "waste-bag", claim: "a clinical waste bag" },
  { file: "waste-bins", claim: "segregated hospital waste bins" },
];

const RETRY_DELAYS = [0, 15000, 40000, 90000];

async function ask(zai: Awaited<ReturnType<typeof ZAI.create>>, file: string, claim: string): Promise<string> {
  const buf = readFileSync(join(ROOT, "public", "images", "games", `${file}.jpg`));
  const b64 = buf.toString("base64");
  const prompt = `This photo is SUPPOSED to show: ${claim}. Answer with EXACTLY one of:
OK — if the photo clearly shows that thing
MISMATCH: <what it actually shows> — if it shows something else
BLURRY — if the photo is too blurry/low-quality to identify
State your answer on the first line only.`;
  for (const delay of RETRY_DELAYS) {
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
      return res.choices[0]?.message?.content?.split("\n")[0]?.slice(0, 160) ?? "NO-ANSWER";
    } catch (e) {
      const msg = String(e);
      if (delay === RETRY_DELAYS[RETRY_DELAYS.length - 1]) return `ERROR: ${msg.slice(0, 80)}`;
      console.log(`  ${file} retrying after ${delay / 1000}s (${msg.slice(0, 50)})`);
    }
  }
  return "NO-ANSWER";
}

async function main() {
  const zai = await ZAI.create();
  const results: Record<string, string> = {};
  try {
    results["__prior"] = "";
    delete results["__prior"];
    const prior = readFileSync(join(ROOT, "scripts", "vlm-game-audit.json"), "utf8");
    Object.assign(results, JSON.parse(prior));
  } catch { /* fresh */ }
  for (const { file, claim } of CLAIMS) {
    if (results[file]) {
      console.log(`${file}: ${results[file]} (cached)`);
      continue;
    }
    const ans = await ask(zai, file, claim);
    results[file] = ans;
    console.log(`${file}: ${ans}`);
    writeFileSync(join(ROOT, "scripts", "vlm-game-audit.json"), JSON.stringify(results, null, 1));
    await new Promise((r) => setTimeout(r, 2500));
  }
  const bad = Object.entries(results).filter(([, v]) => !v.startsWith("OK"));
  console.log(`\n=== ${bad.length} photos need attention ===`);
  for (const [f, v] of bad) console.log(`${f}: ${v}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
