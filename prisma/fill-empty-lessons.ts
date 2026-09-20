/* eslint-disable no-console */
// ─────────────────────────────────────────────────────────────
// FILL EMPTY LESSONS — in-place content + picture attachment.
// Idempotent: run as many times as you like; it only touches
// lessons that still need content or pictures. Never wipes
// existing data (user progress is preserved).
// Run: bun prisma/fill-empty-lessons.ts   (or: npx tsx prisma/fill-empty-lessons.ts)
// ─────────────────────────────────────────────────────────────
import { PrismaClient } from "@prisma/client";
import { loadBulkLessons, loadImageLibrary, type LibraryImage } from "./seed-data/lessons-bulk/load";
import { games } from "./seed-data/gamification";
import type { SeedFullLesson, SeedQuestion } from "./seed-data/types";

const db = new PrismaClient({ log: [] });

function tokens(s: string): string[] {
  return s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3);
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function imageBody(img: LibraryImage): string {
  return JSON.stringify({ src: img.file, alt: img.alt, caption: img.caption });
}

/** Global usage counter so no photo is over-repeated across lessons.
 * (plain object — a Bun Map optimization bug ate increments in this pattern) */
const usage: Record<string, number> = {};

function usageOf(img: LibraryImage): number {
  return usage[img.file] ?? 0;
}

/**
 * Pick the best-matching images for a lesson, deterministically, while
 * SPREADING usage across the whole library (least-used photos first within
 * the same relevance tier) so lessons never repeat the same photos.
 */
function pickImages(lessonTokens: string[], key: string, count: number, library: LibraryImage[]): LibraryImage[] {
  if (library.length === 0) return [];
  const scored = library.map((img) => {
    let raw = 0;
    for (const t of img.tags) {
      const tt = t.toLowerCase();
      if (lessonTokens.includes(tt)) raw += 3;
      else if (lessonTokens.some((lt) => lt.startsWith(tt) || tt.startsWith(lt))) raw += 1;
    }
    // usage decay baked into the score: a heavily-used photo loses ranking
    // power no matter how well it tags-match, so no photo dominates the app.
    // (exact tag = +3; each reuse costs 1.2 — uncapped so even a 24-tag
    // photo steps aside once its usage exceeds its relevance)
    const adjusted = raw - usageOf(img) * 1.2;
    return { img, raw, adjusted };
  });
  // adjusted score first, then least-used, then deterministic tiebreak
  scored.sort(
    (a, b) =>
      b.adjusted - a.adjusted ||
      usageOf(a.img) - usageOf(b.img) ||
      a.img.file.localeCompare(b.img.file)
  );
  const chosen: LibraryImage[] = [];
  for (const s of scored) {
    if (chosen.length >= count) break;
    if (s.adjusted > 0) chosen.push(s.img);
  }
  if (chosen.length < count) {
    // fallback pool: least-used overall (keeps variety even with no tag match)
    const rest = scored
      .filter((s) => !chosen.includes(s.img))
      .sort((a, b) => usageOf(a.img) - usageOf(b.img) || a.img.file.localeCompare(b.img.file));
    const start = hashStr(key) % Math.max(1, rest.length);
    for (let i = 0; chosen.length < count && i < rest.length; i++) {
      chosen.push(rest[(start + i) % rest.length].img);
    }
  }
  for (const img of chosen) usage[img.file] = (usage[img.file] ?? 0) + 1;
  return chosen;
}

/** n evenly-spread insertion indices for a lesson of `len` sections (after intro). */
function spreadPositions(n: number, len: number): number[] {
  if (n <= 0 || len <= 1) return [];
  const maxPos = len - 1;
  const pos: number[] = [];
  for (let i = 0; i < n; i++) {
    const p = Math.round(1 + (i * (maxPos - 1)) / Math.max(1, n - 1));
    if (p >= 1 && p <= maxPos && !pos.includes(p)) pos.push(p);
  }
  return pos.sort((a, b) => b - a);
}

async function createQuestion(q: SeedQuestion, lessonId: string | null, courseIdBySlug: Map<string, string>) {
  await db.question.create({
    data: {
      lessonId,
      courseId: q.courseSlug ? (courseIdBySlug.get(q.courseSlug) ?? null) : null,
      topic: q.topic,
      type: q.type,
      difficulty: q.difficulty,
      stem: q.stem,
      options: JSON.stringify(q.options),
      correctIndex: q.correctIndex ?? null,
      correctIndexes: q.correctIndexes ? JSON.stringify(q.correctIndexes) : null,
      explanation: q.explanation,
      whyOthers: q.whyOthers ? JSON.stringify(q.whyOthers) : null,
    },
  });
}

async function main() {
  const resetImages = process.argv.includes("--reset-images");
  const bulk = await loadBulkLessons();
  const library = await loadImageLibrary();
  console.log(`📦 bulk lesson files: ${bulk.length} lessons · 🖼️ image library: ${library.length} photos${resetImages ? " · RESET image sections" : ""}`);

  if (resetImages) {
    const del = await db.lessonSection.deleteMany({ where: { type: "image" } });
    console.log(`🧹 deleted ${del.count} existing image sections (re-attaching from current library)`);
  }

  // more photos in the library → more photos per lesson (user wants "a lot")
  const perLesson = library.length >= 150 ? 4 : library.length >= 60 ? 3 : library.length >= 25 ? 2 : 1;

  // ── build maps from the live DB ──────────────────────────
  const courses = await db.course.findMany({ select: { id: true, slug: true, title: true } });
  const courseIdBySlug = new Map(courses.map((c) => [c.slug, c.id]));
  const courseById = new Map(courses.map((c) => [c.id, c]));
  const modules = await db.module.findMany({ select: { id: true, title: true, courseId: true } });
  const modById = new Map(modules.map((m) => [m.id, m]));
  const lessons = await db.lesson.findMany({ select: { id: true, title: true, moduleId: true, tags: true } });
  const sections = await db.lessonSection.findMany({ select: { lessonId: true, type: true } });
  const secCount = new Map<string, number>();
  const imgCount = new Map<string, number>();
  for (const s of sections) {
    secCount.set(s.lessonId, (secCount.get(s.lessonId) ?? 0) + 1);
    if (s.type === "image") imgCount.set(s.lessonId, (imgCount.get(s.lessonId) ?? 0) + 1);
  }

  interface Anchor {
    id: string;
    tags: string | null;
    hasSections: boolean;
    hasImages: boolean;
    lessonTokens: string[];
  }
  const anchor = new Map<string, Anchor>();
  for (const l of lessons) {
    const mod = modById.get(l.moduleId);
    if (!mod) continue;
    const course = courseById.get(mod.courseId);
    if (!course) continue;
    anchor.set(`${course.slug}::${mod.title}::${l.title}`, {
      id: l.id,
      tags: l.tags,
      hasSections: (secCount.get(l.id) ?? 0) > 0,
      hasImages: (imgCount.get(l.id) ?? 0) > 0,
      lessonTokens: tokens(`${l.title} ${l.tags ?? ""} ${mod.title} ${course.title}`),
    });
  }

  // ── 1) fill lessons that have NO sections from bulk content ──
  let filled = 0;
  let questions = 0;
  let flashcards = 0;
  let sources = 0;
  let missing = 0;
  for (const fl of bulk as (SeedFullLesson & { sources?: { organization: string; title: string; year?: string; url?: string; note?: string }[] })[]) {
    const key = `${fl.courseSlug}::${fl.moduleTitle}::${fl.lessonTitle}`;
    const a = anchor.get(key);
    if (!a) {
      missing++;
      console.warn(`  ⚠️ anchor not found: ${fl.lessonTitle}`);
      continue;
    }
    if (a.hasSections) continue;

    const imgs = pickImages(a.lessonTokens, key, perLesson, library);
    const secs: { type: string; title: string | null; body: string }[] = fl.sections.map((s) => ({
      type: s.type,
      title: s.title ?? null,
      body: s.body,
    }));
    // insert images spread through the lesson (after intro, middle, before the final section)
    const positions = spreadPositions(imgs.length, secs.length);
    positions.forEach((p, i) => {
      const img = imgs[positions.length - 1 - i];
      if (img) secs.splice(p, 0, { type: "image", title: null, body: imageBody(img) });
    });

    await db.lesson.update({
      where: { id: a.id },
      data: {
        description: fl.description,
        difficulty: fl.difficulty,
        durationMin: fl.durationMin,
        objectives: JSON.stringify(fl.objectives ?? []),
        tags: JSON.stringify(fl.tags ?? []),
        sourceStatus: fl.sourceStatus ?? "GCU_ALIGNED",
        status: "PUBLISHED",
      },
    });
    for (const [i, sec] of secs.entries()) {
      await db.lessonSection.create({
        data: { lessonId: a.id, type: sec.type, title: sec.title, body: sec.body, order: i },
      });
    }
    for (const q of fl.questions) {
      await createQuestion(q, a.id, courseIdBySlug);
      questions++;
    }
    for (const fc of fl.flashcards) {
      await db.flashcard.create({ data: { lessonId: a.id, topic: fc.topic, front: fc.front, back: fc.back } });
      flashcards++;
    }
    for (const src of fl.sources ?? []) {
      await db.sourceRef.create({
        data: {
          lessonId: a.id,
          organization: src.organization,
          title: src.title,
          year: src.year ?? null,
          url: src.url ?? null,
          note: src.note ?? null,
        },
      });
      sources++;
    }
    a.hasSections = true;
    a.hasImages = imgs.length > 0;
    filled++;
  }
  console.log(`✍️  filled ${filled} empty lessons (+${questions} questions, +${flashcards} flashcards, +${sources} source refs)${missing ? ` · ${missing} anchors NOT found` : ""}`);

  // ── 2) add pictures to lessons that have sections but none yet ──
  let pictured = 0;
  for (const [key, a] of anchor) {
    if (!a.hasSections || a.hasImages) continue;
    const imgs = pickImages(a.lessonTokens, key, perLesson, library);
    if (imgs.length === 0) continue;
    const existing = await db.lessonSection.findMany({
      where: { lessonId: a.id },
      orderBy: { order: "asc" },
      select: { id: true },
    });
    if (existing.length === 0) continue;
    const positions = spreadPositions(imgs.length, existing.length);
    positions.forEach((p, i) => {
      const img = imgs[positions.length - 1 - i];
      if (img) {
        existing.splice(p, 0, { id: `new:${i}` });
        (existing as (typeof existing[number] & { image?: LibraryImage })[])[p].image = img;
      }
    });
    for (const [i, row] of (existing as (typeof existing[number] & { image?: LibraryImage })[]).entries()) {
      if ((row as { image?: LibraryImage }).image) {
        await db.lessonSection.create({
          data: {
            lessonId: a.id,
            type: "image",
            title: null,
            body: imageBody((row as { image: LibraryImage }).image),
            order: i,
          },
        });
      } else {
        await db.lessonSection.update({ where: { id: row.id }, data: { order: i } });
      }
    }
    a.hasImages = true;
    pictured++;
  }
  console.log(`🖼️  added pictures to ${pictured} lessons that had none · ${library.length}-photo library · ${perLesson}/lesson · max reuse ${Math.max(0, ...Object.values(usage))}x`);

  // ── 3) upsert games (new visual games get rows) ──────────
  let gamesAdded = 0;
  for (const g of games) {
    const existing = await db.game.findUnique({ where: { slug: g.slug } });
    if (!existing) {
      await db.game.create({
        data: {
          slug: g.slug,
          title: g.title,
          description: g.description,
          icon: g.icon,
          xpReward: g.xpReward,
          unlockLevel: g.unlockLevel,
        },
      });
      gamesAdded++;
    } else {
      await db.game.update({
        where: { slug: g.slug },
        data: { title: g.title, description: g.description, icon: g.icon, xpReward: g.xpReward, unlockLevel: g.unlockLevel },
      });
    }
  }
  console.log(`🎮 games upserted (+${gamesAdded} new)`);

  const totalLessons = await db.lesson.count();
  const stillEmpty = await db.lesson.count({ where: { sections: { none: {} } } });
  const withImages = await db.lessonSection.count({ where: { type: "image" } });
  console.log(`📊 total lessons: ${totalLessons} · still without sections: ${stillEmpty} · image sections in db: ${withImages}`);
}

main()
  .catch((e) => {
    console.error("FILL FAILED:", e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
