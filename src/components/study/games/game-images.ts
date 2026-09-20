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
  c("kangaroo-care", "Kangaroo mother care", "kangaroo mother care"),
  c("phototherapy", "Phototherapy", "a baby under phototherapy lights"),
  c("bp-cuff", "Blood pressure cuff", "a blood pressure cuff"),
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("forceps", "Obstetric forceps", "obstetric forceps"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("baby-scale", "Baby weighing scale", "a baby weighing scale"),
  c("pinard", "Pinard stethoscope", "a Pinard stethoscope"),
  c("doppler", "Fetal Doppler", "a fetal Doppler probe"),
  c("partograph", "Partograph", "a partograph"),
  c("breastfeeding", "Breastfeeding", "a mother breastfeeding"),
  c("delivery-bed", "Delivery bed", "a delivery bed with stirrups"),
  c("palpation", "Fundal palpation", "a midwife palpating an abdomen"),
  c("suture-kit", "Suture kit", "an episiotomy suture kit"),
  c("cord-clamp", "Cord clamp", "an umbilical cord clamp"),
  c("midwife-ghana", "A midwife at work", "a midwife caring for a mother"),
  c("newborn-sleeping", "A sleeping newborn", "a sleeping newborn"),
];

// ── PICTURE MEMORY · photo ↔ term pairs (8 dealt at random) ──
export const pictureMemoryPool: PhotoConcept[] = [
  c("phototherapy", "Neonatal jaundice", "phototherapy for jaundice"),
  c("bp-cuff", "Blood pressure", "a blood pressure cuff"),
  c("forceps", "Surgical instruments", "obstetric forceps"),
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("kangaroo-care", "Kangaroo mother care", "kangaroo mother care"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("baby-scale", "Baby weighing scale", "a baby weighing scale"),
  c("pinard", "Pinard stethoscope", "a Pinard stethoscope"),
  c("doppler", "Fetal heart Doppler", "a fetal Doppler"),
  c("partograph", "Partograph", "a partograph"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("breastfeeding", "Breastfeeding", "a mother breastfeeding"),
  c("delivery-bed", "Delivery bed", "a delivery bed"),
  c("cord-clamp", "Cord clamp", "a cord clamp"),
];

// ── BUBBLE POP · concepts used as floating bubbles ───────────
export const bubbleConcepts: PhotoConcept[] = [
  c("kangaroo-care", "Kangaroo mother care", "kangaroo mother care"),
  c("phototherapy", "Phototherapy", "a baby under phototherapy lights"),
  c("bp-cuff", "Blood pressure cuff", "a blood pressure cuff"),
  c("stethoscope", "Stethoscope", "a stethoscope"),
  c("sterile-gloves", "Sterile gloves", "sterile gloves"),
  c("forceps", "Obstetric forceps", "obstetric forceps"),
  c("pinard", "Pinard stethoscope", "a Pinard stethoscope"),
  c("doppler", "Fetal Doppler", "a fetal Doppler probe"),
  c("thermometer", "Thermometer", "a thermometer"),
  c("baby-scale", "Baby weighing scale", "a baby weighing scale"),
  c("partograph", "Partograph", "a partograph"),
  c("breastfeeding", "Breastfeeding", "a mother breastfeeding"),
  c("delivery-bed", "Delivery bed", "a delivery bed"),
  c("palpation", "Fundal palpation", "a midwife palpating an abdomen"),
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
    caption: "Round 1 · The delivery tray",
    tiles: [
      { id: "d1", label: "Cord clamp", photo: "/images/games/cord-clamp.jpg", alt: "An umbilical cord clamp", hint: "The little clip that closes the cut cord." },
      { id: "d2", label: "Forceps", photo: "/images/games/forceps.jpg", alt: "Obstetric forceps on a tray", hint: "A paired surgical instrument — recognised, never borrowed." },
      { id: "d3", label: "Sterile gloves", photo: "/images/games/sterile-gloves.jpg", alt: "A pair of sterile gloves", hint: "The first thing you put on, the last you take off." },
      { id: "d4", label: "Needle & syringe", photo: "/images/games/needle-syringe.jpg", alt: "A needle and syringe prepared for injection", hint: "Sharps go straight to the bin after one use." },
      { id: "d5", label: "Sharps bin", photo: "/images/games/sharps-bin.jpg", alt: "A yellow sharps disposal bin", hint: "Needles live here, point-first, never recapped." },
      { id: "d6", label: "Autoclave", photo: "/images/games/autoclave.jpg", alt: "An autoclave sterilizer machine", hint: "Steam under pressure — the surest kill." },
    ],
  },
  {
    caption: "Round 2 · The assessment station",
    tiles: [
      { id: "a1", label: "Blood pressure cuff", photo: "/images/games/bp-cuff.jpg", alt: "A blood pressure cuff", hint: "Wraps the arm — the number that guards against pre-eclampsia." },
      { id: "a2", label: "Stethoscope", photo: "/images/games/stethoscope.jpg", alt: "A stethoscope", hint: "Your daily listener — chest, heart and sometimes a murmur." },
      { id: "a3", label: "Thermometer", photo: "/images/games/thermometer.jpg", alt: "A clinical thermometer", hint: "The vital sign that announces infection." },
      { id: "a4", label: "Fetal Doppler", photo: "/images/games/doppler.jpg", alt: "A fetal Doppler probe", hint: "The fetal heart rate in seconds — count for a full minute." },
      { id: "a5", label: "Pinard stethoscope", photo: "/images/games/pinard.jpg", alt: "A Pinard fetal stethoscope", hint: "Low-tech listening — ear to abdomen, zero batteries." },
      { id: "a6", label: "Partograph", photo: "/images/games/partograph.jpg", alt: "A partograph labour monitoring chart", hint: "One page that flags trouble before it shouts." },
    ],
  },
  {
    caption: "Round 3 · The newborn corner",
    tiles: [
      { id: "n1", label: "Baby weighing scale", photo: "/images/games/baby-scale.jpg", alt: "A baby weighing scale", hint: "The first point on the growth chart." },
      { id: "n2", label: "Phototherapy", photo: "/images/games/phototherapy.jpg", alt: "A newborn under phototherapy lights", hint: "Blue light that clears bilirubin safely." },
      { id: "n3", label: "Kangaroo mother care", photo: "/images/games/kangaroo-care.jpg", alt: "A mother holding her baby skin-to-skin", hint: "Her chest is the best warmer for a small baby." },
      { id: "n4", label: "Cup feeding", photo: "/images/games/cup-feeding.jpg", alt: "Cup feeding a newborn expressed milk", hint: "Milk without confusing a young suck." },
      { id: "n5", label: "Cord stump", photo: "/images/games/cord-stump.jpg", alt: "A dried umbilical cord stump", hint: "Clean and dry — nothing applied." },
      { id: "n6", label: "Newborn examination", photo: "/images/games/newborn-exam.jpg", alt: "A newborn baby being examined", hint: "Head to toe in the first hour of life." },
    ],
  },
];
