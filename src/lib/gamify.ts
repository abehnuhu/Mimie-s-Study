import { db } from "@/lib/db";

/** XP awards for meaningful actions */
export const XP_AWARDS = {
  LESSON_COMPLETE: 30,
  QUIZ_CORRECT: 5,
  QUIZ_PERFECT: 25,
  QUIZ_PASS: 10,
  GAME_BASE: 10,
  STREAK_DAY: 5,
  REVIEW_CORRECT: 5,
  BOOKMARK: 1,
} as const;

/** level n is reached at (n-1)² × 100 XP */
export function levelForXp(xp: number): number {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 100)) + 1);
}

export function xpForNextLevel(level: number): number {
  return level * level * 100;
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / 86400000);
}

export interface ActivityPatch {
  minutes?: number;
  lessonsCompleted?: number;
  quizzesAttempted?: number;
  quizzesPassed?: number;
  gamesPlayed?: number;
  xpGained?: number;
  topics?: string[];
}

/**
 * Records study activity for today: upserts DailyActivity, updates the streak
 * (gently — never resets below 0, no guilt), applies XP, recompute level,
 * extends the open StudySession.
 */
export async function recordActivity(
  userId: string,
  patch: ActivityPatch
): Promise<{ xpGained: number; leveledUp: boolean; newLevel: number; streak: number }> {
  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) return { xpGained: 0, leveledUp: false, newLevel: 1, streak: 0 };

  const today = todayKey();
  const now = new Date();

  // streak handling
  let streak = user.streak;
  if (user.lastStudyDate) {
    const gap = daysBetween(new Date(user.lastStudyDate.toISOString().slice(0, 10) + "T00:00:00Z"), new Date(today + "T00:00:00Z"));
    if (gap === 1) streak = streak + 1;
    else if (gap > 1) streak = 1;
    else if (gap === 0) streak = Math.max(1, streak);
  } else {
    streak = 1;
  }

  const xpGained = patch.xpGained ?? 0;
  const newXp = user.xp + xpGained;
  const newLevel = levelForXp(newXp);
  const leveledUp = newLevel > user.level;

  await db.user.update({
    where: { id: userId },
    data: {
      xp: newXp,
      level: newLevel,
      streak,
      longestStreak: Math.max(user.longestStreak, streak),
      lastStudyDate: now,
    },
  });

  // daily activity upsert (merge topics)
  const existing = await db.dailyActivity.findUnique({
    where: { userId_date: { userId, date: today } },
  });
  let topics: string[] = [];
  if (existing?.topics) {
    try {
      topics = JSON.parse(existing.topics);
    } catch {
      topics = [];
    }
  }
  if (patch.topics?.length) {
    topics = Array.from(new Set([...topics, ...patch.topics])).slice(0, 20);
  }

  await db.dailyActivity.upsert({
    where: { userId_date: { userId, date: today } },
    create: {
      userId,
      date: today,
      loginAt: existing?.loginAt ?? now,
      minutes: patch.minutes ?? 0,
      lessonsCompleted: patch.lessonsCompleted ?? 0,
      quizzesAttempted: patch.quizzesAttempted ?? 0,
      quizzesPassed: patch.quizzesPassed ?? 0,
      gamesPlayed: patch.gamesPlayed ?? 0,
      xpGained,
      topics: JSON.stringify(topics),
    },
    update: {
      minutes: (existing?.minutes ?? 0) + (patch.minutes ?? 0),
      lessonsCompleted: (existing?.lessonsCompleted ?? 0) + (patch.lessonsCompleted ?? 0),
      quizzesAttempted: (existing?.quizzesAttempted ?? 0) + (patch.quizzesAttempted ?? 0),
      quizzesPassed: (existing?.quizzesPassed ?? 0) + (patch.quizzesPassed ?? 0),
      gamesPlayed: (existing?.gamesPlayed ?? 0) + (patch.gamesPlayed ?? 0),
      xpGained: (existing?.xpGained ?? 0) + xpGained,
      topics: JSON.stringify(topics),
    },
  });

  // extend open study session stats
  const open = await db.studySession.findFirst({
    where: { userId, endedAt: null },
    orderBy: { startedAt: "desc" },
  });
  if (open) {
    await db.studySession.update({
      where: { id: open.id },
      data: {
        lessonsCompleted: open.lessonsCompleted + (patch.lessonsCompleted ?? 0),
        quizzesAttempted: open.quizzesAttempted + (patch.quizzesAttempted ?? 0),
        gamesPlayed: open.gamesPlayed + (patch.gamesPlayed ?? 0),
        xpGained: open.xpGained + xpGained,
      },
    });
  }

  return { xpGained, leveledUp, newLevel, streak };
}

/** Newly earned badges for a user, based on simple automatic criteria. */
export async function checkAndAwardBadges(userId: string): Promise<
  { slug: string; title: string; description: string; icon: string; xp: number }[]
> {
  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) return [];

  const [completedLessons, perfectQuiz, quizCount, gameCount, reviewDone] =
    await Promise.all([
      db.lessonProgress.count({ where: { userId, status: "COMPLETED" } }),
      db.quizAttempt.count({ where: { userId, percentage: 100 } }),
      db.quizAttempt.count({ where: { userId } }),
      db.gameAttempt.count({ where: { userId } }),
      db.reviewItem.count({ where: { userId, stage: { gte: 6 } } }),
    ]);

  const earned: Record<string, boolean> = {
    "first-step": completedLessons >= 1,
    "7-day-bloom": user.streak >= 7,
    "labour-pro": await topicMastered(userId, "Stages of Labour"),
    "exam-warrior": quizCount >= 10,
    "perfect-quiz": perfectQuiz >= 1,
    "clinical-thinker": reviewDone >= 5,
    "baby-whisperer": await topicMastered(userId, "Newborn Assessment"),
    "future-midwife": completedLessons >= 50,
    "research-girl": false,
    "anatomy-queen": await courseCompleted(userId, "anatomy-physiology-1"),
  };

  const results: { slug: string; title: string; description: string; icon: string; xp: number }[] = [];
  for (const [slug, ok] of Object.entries(earned)) {
    if (!ok) continue;
    const existing = await db.userBadge.findUnique({
      where: { userId_badgeId: { userId, badgeId: await badgeId(slug) } },
      include: { badge: true },
    }).catch(() => null);
    if (existing) continue;
    const badge = await db.badge.findUnique({ where: { slug } });
    if (!badge) continue;
    await db.userBadge.create({ data: { userId, badgeId: badge.id } });
    await db.user.update({ where: { id: userId }, data: { xp: { increment: badge.xp } } });
    results.push({ slug: badge.slug, title: badge.title, description: badge.description, icon: badge.icon, xp: badge.xp });
  }
  return results;
}

async function badgeId(slug: string): Promise<string> {
  const badge = await db.badge.findUnique({ where: { slug } });
  return badge?.id ?? "missing";
}

async function topicMastered(userId: string, topic: string): Promise<boolean> {
  const answers = await db.quizAnswer.count({
    where: { correct: true, attempt: { userId }, question: { topic } },
  });
  const total = await db.quizAnswer.count({
    where: { attempt: { userId }, question: { topic } },
  });
  return total >= 4 && answers / total >= 0.8;
}

async function courseCompleted(userId: string, courseSlug: string): Promise<boolean> {
  const total = await db.lesson.count({
    where: { module: { course: { slug: courseSlug } }, status: "PUBLISHED" },
  });
  const done = await db.lessonProgress.count({
    where: {
      userId,
      status: "COMPLETED",
      lesson: { module: { course: { slug: courseSlug } }, status: "PUBLISHED" },
    },
  });
  return total > 0 && done === total;
}
