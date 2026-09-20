// One-off: remove the demo student account (Mimie signs up herself now).
// Cascades (per prisma/schema.prisma onDelete: Cascade) wipe her progress,
// sessions, activity, badges, notes, bookmarks and review items.
// All curriculum content (lessons/questions/games/badges) is untouched.
// Usage: bun prisma/remove-demo-student.ts
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const demo = await db.user.findUnique({
    where: { email: "mimie@mimies.study" },
    include: {
      _count: {
        select: {
          lessonProgress: true,
          quizAttempts: true,
          gameAttempts: true,
          studySessions: true,
          dailyActivity: true,
          userBadges: true,
          bookmarks: true,
          notes: true,
          reviewItems: true,
          sessions: true,
        },
      },
    },
  });

  if (!demo) {
    console.log("ℹ️ no demo student found — nothing to do");
  } else {
    console.log(
      `🗑 removing demo student ${demo.email} (${demo._count.lessonProgress} progress rows, ${demo._count.quizAttempts} quiz attempts, ${demo._count.dailyActivity} activity days, ${demo._count.userBadges} badges…)`
    );
    await db.user.delete({ where: { id: demo.id } });
    console.log("✅ demo student removed (relations cascaded)");
  }

  const admin = await db.user.findUnique({ where: { email: "admin@mimies.study" } });
  const remaining = await db.user.count();
  console.log(`👤 remaining users: ${remaining} (admin present: ${admin ? "yes" : "NO — check seed!"})`);
  const lessons = await db.lesson.count();
  const questions = await db.question.count();
  console.log(`📚 curriculum intact: ${lessons} lessons, ${questions} questions`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
