// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — GAME PHOTO LIBRARY
// Real-photo concepts shared by Picture Memory, Diagram Dash,
// Bubble Pop and the photo-upgraded sort games. All images live
// in /public/images/games/. Pure data — no client/server deps.
// ─────────────────────────────────────────────────────────────

export interface PhotoConcept {
  slug: string;
  photo: string;
  term: string; // short name shown on cards
  prompt: string; // "Tap the photo showing …"
}

function c(slug: string, term: string, prompt: string): PhotoConcept {
  return { slug, photo: `/images/games/${slug}.jpg`, term, prompt };
}

export const photoLibrary: PhotoConcept[] = [
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("bp-cuff", "Blood pressure cuff", "a blood pressure cuff"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("handwashing", "Handwashing", "hands being washed under running water"),
  c("hand-sanitizer", "Alcohol hand rub", "an alcohol-based hand rub"),
  c("sharps-bin", "Sharps bin", "a sharps disposal bin"),
  c("autoclave", "Autoclave", "an autoclave sterilizer"),
  c("waste-bins", "Colour-coded waste bins", "colour-coded waste bins"),
  c("waste-bag", "Infectious waste bag", "an infectious waste bag"),
  c("needle-syringe", "Needle and syringe", "a needle and syringe"),
  c("goggles", "Protective goggles", "protective goggles"),
  c("suture-kit", "Suture kit", "a suture kit"),
  c("scissors", "Bandage scissors", "bandage scissors"),
  c("palpation", "Abdominal palpation", "a nurse palpating an abdomen"),
  c("forceps", "Forceps", "sterile forceps on a tray"),
  c("midwife-ghana", "A nurse at work", "a nurse caring for a patient"),
];

// ── PICTURE MEMORY · photo ↔ term pairs (8 dealt at random) ──
export const pictureMemoryPool: PhotoConcept[] = [
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("bp-cuff", "Blood pressure cuff", "a blood pressure cuff"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("handwashing", "Handwashing", "hands being washed"),
  c("hand-sanitizer", "Alcohol hand rub", "an alcohol hand rub"),
  c("sharps-bin", "Sharps bin", "a sharps bin"),
  c("autoclave", "Autoclave", "an autoclave"),
  c("waste-bins", "Waste segregation", "colour-coded waste bins"),
  c("needle-syringe", "Needle and syringe", "a needle and syringe"),
  c("goggles", "Protective goggles", "protective goggles"),
  c("suture-kit", "Suture kit", "a suture kit"),
  c("scissors", "Bandage scissors", "bandage scissors"),
  c("palpation", "Abdominal palpation", "a nurse palpating an abdomen"),
];

// ── BUBBLE POP · concepts used as floating bubbles ───────────
export const bubbleConcepts: PhotoConcept[] = [
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("bp-cuff", "Blood pressure cuff", "a blood pressure cuff"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("handwashing", "Handwashing", "hands being washed"),
  c("hand-sanitizer", "Alcohol hand rub", "an alcohol hand rub"),
  c("sharps-bin", "Sharps bin", "a sharps bin"),
  c("autoclave", "Autoclave", "an autoclave"),
  c("waste-bins", "Waste bins", "colour-coded waste bins"),
  c("waste-bag", "Waste bag", "an infectious waste bag"),
  c("needle-syringe", "Needle and syringe", "a needle and syringe"),
  c("goggles", "Protective goggles", "protective goggles"),
  c("scissors", "Bandage scissors", "bandage scissors"),
  c("palpation", "Abdominal palpation", "a nurse palpating an abdomen"),
];

// ── SORT GAME PHOTO UPGRADE ──────────────────────────────────
// Match by distinctive keywords in the item text so the mapping
// survives small copy edits. Falls back to no photo.
const sortPhotoRules: { match: string; photo: string }[] = [
  { match: "40 seconds", photo: "/images/games/handwashing.jpg" },
  { match: "before and after every client contact", photo: "/images/games/hand-sanitizer.jpg" },
  { match: "clean gloves", photo: "/images/games/sterile-gloves.jpg" },
  { match: "at the point of use", photo: "/images/games/sharps-bin.jpg" },
  { match: "reusing single-use", photo: "/images/games/gloves-wearing.jpg" },
  { match: "Recapping a needle", photo: "/images/games/needle-syringe.jpg" },
  { match: "soiled dressings", photo: "/images/games/waste-bag.jpg" },
  { match: "same black bin bag", photo: "/images/games/waste-bins.jpg" },
  { match: "three-quarters full", photo: "/images/games/sharps-full.jpg" },
  { match: "uncovered eye", photo: "/images/games/goggles.jpg" },
  { match: "indicator strip", photo: "/images/games/autoclave.jpg" },
  { match: "rash developing on her hands", photo: "/images/games/hand-rash.jpg" },
];

export function sortPhotoFor(text: string): string | undefined {
  const rule = sortPhotoRules.find((r) => text.includes(r.match));
  return rule?.photo;
}

const newbornPhotoRules: { match: string; photo: string }[] = [
  { match: "Moulding of the skull", photo: "/images/games/newborn-head.jpg" },
  { match: "Milia", photo: "/images/games/newborn-face.jpg" },
  { match: "Peeling skin", photo: "/images/games/newborn-feet.jpg" },
  { match: "stork bite", photo: "/images/games/newborn-sleeping.jpg" },
  { match: "2.3 kg", photo: "/images/games/baby-scale.jpg" },
  { match: "cord stump", photo: "/images/games/cord-stump.jpg" },
  { match: "yellow tinge", photo: "/images/games/phototherapy.jpg" },
  { match: "heart murmur", photo: "/images/games/stethoscope.jpg" },
  { match: "Grunting", photo: "/images/games/nicu-baby.jpg" },
  { match: "cyanosis", photo: "/images/games/neonatal-resus.jpg" },
  { match: "Convulsions", photo: "/images/games/nicu-wires.jpg" },
  { match: "fed nothing", photo: "/images/games/cup-feeding.jpg" },
];

export function newbornPhotoFor(text: string): string | undefined {
  const rule = newbornPhotoRules.find((r) => text.includes(r.match));
  return rule?.photo;
}

// ── DIAGRAM DASH · rounds (label real photos on an equipment board) ──
// Each round is a board of SINGLE-ITEM real photos laid out in a grid.
// Every photo shows exactly one instrument/scene, so a correct label is
// always judged against the whole photo — no guessed coordinates, no
// "right answer in the wrong spot" moments.
export interface DiagramTile {
  id: string;
  label: string;
  photo: string;
  alt: string;
  hint: string;
}

export interface DiagramRound {
  caption: string;
  tiles: DiagramTile[];
}

export const diagramRounds: DiagramRound[] = [
  {
    caption: "Round 1 · The assessment trolley",
    tiles: [
      { id: "d1", label: "Blood pressure cuff", photo: "/images/games/bp-cuff.jpg", alt: "A blood pressure cuff", hint: "Wraps the arm — hypertension's first witness." },
      { id: "d2", label: "Stethoscope", photo: "/images/games/stethoscope.jpg", alt: "A stethoscope", hint: "Your daily listener — chest, heart and blood pressure sounds." },
      { id: "d3", label: "Thermometer", photo: "/images/games/thermometer.jpg", alt: "A clinical thermometer", hint: "The vital sign that announces infection." },
      { id: "d4", label: "Needle and syringe", photo: "/images/games/needle-syringe.jpg", alt: "A needle and syringe prepared for injection", hint: "One use only — then point-first into the bin." },
      { id: "d5", label: "Sterile gloves", photo: "/images/games/sterile-gloves.jpg", alt: "A pair of sterile gloves", hint: "The first thing you put on for a clean procedure." },
      { id: "d6", label: "Abdominal palpation", photo: "/images/games/palpation.jpg", alt: "A nurse palpating a patient's abdomen", hint: "Fingers that assess — tenderness, organs, guarding." },
    ],
  },
  {
    caption: "Round 2 · The infection control corner",
    tiles: [
      { id: "a1", label: "Handwashing", photo: "/images/games/handwashing.jpg", alt: "Hands being washed with soap under running water", hint: "Soap and running water — the forty seconds that break the chain." },
      { id: "a2", label: "Alcohol hand rub", photo: "/images/games/hand-sanitizer.jpg", alt: "An alcohol-based hand rub dispenser", hint: "Fast hygiene for clean hands — never for visibly soiled ones." },
      { id: "a3", label: "Sharps bin", photo: "/images/games/sharps-bin.jpg", alt: "A yellow sharps disposal bin", hint: "Needles live here, point-first, never recapped." },
      { id: "a4", label: "Autoclave", photo: "/images/games/autoclave.jpg", alt: "An autoclave sterilizer machine", hint: "Steam under pressure — the surest kill." },
      { id: "a5", label: "Colour-coded waste bins", photo: "/images/games/waste-bins.jpg", alt: "Colour-coded hospital waste bins", hint: "Every waste stream has its own colour." },
      { id: "a6", label: "Protective goggles", photo: "/images/games/goggles.jpg", alt: "A pair of protective goggles", hint: "The eyes are a doorway — splash protection is a duty." },
    ],
  },
  {
    caption: "Round 3 · The treatment room",
    tiles: [
      { id: "n1", label: "Suture kit", photo: "/images/games/suture-kit.jpg", alt: "A sterile suture kit laid out on a tray", hint: "Sterile repair for an open wound." },
      { id: "n2", label: "Bandage scissors", photo: "/images/games/scissors.jpg", alt: "Bandage scissors", hint: "Cuts dressings without nicking skin." },
      { id: "n3", label: "Forceps", photo: "/images/games/forceps.jpg", alt: "Sterile forceps on a tray", hint: "Sterile grip for dressings and procedures." },
      { id: "n4", label: "Donning gloves", photo: "/images/games/gloves-wearing.jpg", alt: "A nurse putting on gloves", hint: "Clean hands first, then gloves — never the other way." },
      { id: "n5", label: "Infectious waste bag", photo: "/images/games/waste-bag.jpg", alt: "An infectious waste bag", hint: "Soiled dressings belong here, sealed — never on the bedside for families." },
      { id: "n6", label: "A nurse at work", photo: "/images/games/midwife-ghana.jpg", alt: "A Ghanaian nurse caring for a patient", hint: "Assessment is a whole-body skill — eyes, hands, ears." },
    ],
  },
];
