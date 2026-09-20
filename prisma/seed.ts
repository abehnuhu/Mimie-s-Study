import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/auth";
import { curriculum } from "./seed-data/curriculum";
import { questionBank } from "./seed-data/question-bank";
import { badges, games, personalMessages } from "./seed-data/gamification";
import { lessonAnatomicalPosition } from "./seed-data/lessons-full/lesson-anatomical-position";
import { lessonHomeostasis } from "./seed-data/lessons-full/lesson-homeostasis";
import { lessonVitalSigns } from "./seed-data/lessons-full/lesson-vital-signs";
import { lessonChainOfInfection } from "./seed-data/lessons-full/lesson-chain-of-infection";
import { lessonPrevention } from "./seed-data/lessons-full/lesson-prevention";
import { lessonFetalPositions } from "./seed-data/lessons-full/lesson-fetal-positions";
import { lessonFourStages } from "./seed-data/lessons-full/lesson-four-stages";
import { lessonNewbornAssessment } from "./seed-data/lessons-full/lesson-newborn-assessment";
import type { SeedFullLesson, SeedQuestion } from "./seed-data/types";
import { loadBulkLessons } from "./seed-data/lessons-bulk/load";

const db = new PrismaClient();

const fullLessons: SeedFullLesson[] = [
  lessonAnatomicalPosition,
  lessonHomeostasis,
  lessonVitalSigns,
  lessonChainOfInfection,
  lessonPrevention,
  lessonFetalPositions,
  lessonFourStages,
  lessonNewbornAssessment,
];

async function main() {
  console.log("🌱 Seeding Mimie's Study…");

  // wipe (order matters for FK)
  await db.$transaction([
    db.personalMessage.deleteMany(),
    db.setting.deleteMany(),
    db.userBadge.deleteMany(),
    db.badge.deleteMany(),
    db.gameAttempt.deleteMany(),
    db.game.deleteMany(),
    db.reviewItem.deleteMany(),
    db.quizAnswer.deleteMany(),
    db.quizAttempt.deleteMany(),
    db.lessonProgress.deleteMany(),
    db.studySession.deleteMany(),
    db.dailyActivity.deleteMany(),
    db.bookmark.deleteMany(),
    db.note.deleteMany(),
    db.session.deleteMany(),
    db.sourceRef.deleteMany(),
    db.flashcard.deleteMany(),
    db.question.deleteMany(),
    db.lessonSection.deleteMany(),
    db.lesson.deleteMany(),
    db.module.deleteMany(),
    db.course.deleteMany(),
    db.semester.deleteMany(),
    db.year.deleteMany(),
    db.user.deleteMany(),
  ]);

  // ── users ─────────────────────────────────────────────────
  // No demo student account: Mimie signs up herself on the login page.
  await db.user.create({
    data: {
      email: "admin@mimies.study",
      passwordHash: hashPassword("admin2026"),
      name: "Admin",
      avatar: "🩺",
      role: "ADMIN",
    },
  });
  console.log("  👤 users: Admin (owner only — students sign up themselves)");

  // ── curriculum ────────────────────────────────────────────
  const courseIdBySlug = new Map<string, string>();
  const lessonIdByKey = new Map<string, string>(); // courseSlug::moduleTitle::lessonTitle

  for (const year of curriculum) {
    const y = await db.year.create({
      data: { number: year.number, title: year.title },
    });
    for (const sem of year.semesters) {
      const s = await db.semester.create({
        data: { yearId: y.id, number: sem.number, phase: sem.phase },
      });
      for (const [ci, course] of sem.courses.entries()) {
        const c = await db.course.create({
          data: {
            semesterId: s.id,
            title: course.title,
            slug: course.slug,
            description: course.description,
            icon: course.icon,
            order: ci,
          },
        });
        courseIdBySlug.set(course.slug, c.id);
        for (const [mi, mod] of course.modules.entries()) {
          const m = await db.module.create({
            data: { courseId: c.id, title: mod.title, order: mi },
          });
          for (const [li, lesson] of mod.lessons.entries()) {
            const l = await db.lesson.create({
              data: {
                moduleId: m.id,
                title: lesson.title,
                description: lesson.description,
                difficulty: lesson.difficulty,
                durationMin: lesson.durationMin,
                status: lesson.status,
                objectives: JSON.stringify([]),
                tags: JSON.stringify(lesson.tags),
                sourceStatus: lesson.sourceStatus,
                order: li,
              },
            });
            lessonIdByKey.set(`${course.slug}::${mod.title}::${lesson.title}`, l.id);
          }
        }
      }
    }
  }
  console.log(
    `  📚 curriculum: ${curriculum.length} years, ${courseIdBySlug.size} courses, ${lessonIdByKey.size} lessons`
  );

  // ── flagship + bulk lesson content ─────────────────────────
  const bulkLessons = await loadBulkLessons();
  console.log(`  📦 bulk lesson batches loaded: ${bulkLessons.length} lessons`);
  let questionCount = 0;
  for (const fl of [...fullLessons, ...bulkLessons]) {
    const lessonId = lessonIdByKey.get(`${fl.courseSlug}::${fl.moduleTitle}::${fl.lessonTitle}`);
    if (!lessonId) {
      console.warn(`  ⚠️ anchor not found: ${fl.lessonTitle}`);
      continue;
    }
    await db.lesson.update({
      where: { id: lessonId },
      data: {
        description: fl.description,
        difficulty: fl.difficulty,
        durationMin: fl.durationMin,
        objectives: JSON.stringify(fl.objectives),
        tags: JSON.stringify(fl.tags),
        sourceStatus: fl.sourceStatus,
      },
    });
    for (const [i, sec] of fl.sections.entries()) {
      await db.lessonSection.create({
        data: {
          lessonId,
          type: sec.type,
          title: sec.title ?? null,
          body: sec.body,
          order: i,
        },
      });
    }
    for (const q of fl.questions) {
      await createQuestion(q, lessonId, courseIdBySlug);
      questionCount++;
    }
    for (const fc of fl.flashcards) {
      await db.flashcard.create({
        data: { lessonId, topic: fc.topic, front: fc.front, back: fc.back },
      });
    }
    for (const src of fl.sources) {
      await db.sourceRef.create({
        data: {
          lessonId,
          organization: src.organization,
          title: src.title,
          year: src.year ?? null,
          url: src.url ?? null,
          note: src.note ?? null,
        },
      });
    }
  }
  console.log(`  💗 authored lessons: ${fullLessons.length + bulkLessons.length} (${bulkLessons.length} bulk), ${questionCount} questions attached`);

  // ── standalone question bank ──────────────────────────────
  for (const q of questionBank) {
    await createQuestion(q, null, courseIdBySlug);
    questionCount++;
  }
  console.log(`  ❓ total questions in bank: ${questionCount}`);

  // ── games, badges, messages, settings ─────────────────────
  for (const g of games) {
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
  }
  for (const b of badges) {
    await db.badge.create({
      data: {
        slug: b.slug,
        title: b.title,
        description: b.description,
        icon: b.icon,
        criteria: b.criteria,
        xp: b.xp,
      },
    });
  }
  for (const m of personalMessages) {
    await db.personalMessage.create({ data: { text: m.text, tone: m.tone } });
  }
  await db.setting.create({
    data: {
      key: "app",
      value: JSON.stringify({
        tagline: "Her little corner to become an amazing midwife.",
        showSources: true,
        maintenance: false,
        version: "1.0",
      }),
    },
  });
  console.log("  🎮 games · 🏅 badges · 💌 personal messages seeded");

  console.log("🌟 Seed complete! Students create their own accounts via the sign-up page.");
}

async function createQuestion(
  q: SeedQuestion,
  lessonId: string | null,
  courseIdBySlug: Map<string, string>
) {
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
