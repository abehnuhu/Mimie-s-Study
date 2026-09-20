import { db } from "@/lib/db";
import { withUser, getCourseSummaries, getTopicAccuracy, timeGreeting } from "@/lib/api-helpers";
import { todayKey } from "@/lib/gamify";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const today = todayKey();
    const [
      todayAct,
      yesterdayAct,
      courses,
      topicAccuracy,
      dueReviews,
      games,
      allBadges,
      earnedBadges,
      personalMessages,
      settings,
      examSetting,
      completedCount,
      publishedTotal,
    ] = await Promise.all([
      db.dailyActivity.findUnique({ where: { userId_date: { userId: user.id, date: today } } }),
      db.dailyActivity.findUnique({
        where: { userId_date: { userId: user.id, date: new Date(Date.now() - 86400000).toISOString().slice(0, 10) } },
      }),
      getCourseSummaries(user.id),
      getTopicAccuracy(user.id),
      db.reviewItem.findMany({
        where: { userId: user.id, dueAt: { lte: new Date() }, stage: { lt: 6 } },
        orderBy: { dueAt: "asc" },
        take: 10,
      }),
      db.game.findMany({ orderBy: [{ unlockLevel: "asc" }, { title: "asc" }] }),
      db.badge.findMany(),
      db.userBadge.findMany({ where: { userId: user.id }, include: { badge: true }, orderBy: { earnedAt: "desc" } }),
      db.personalMessage.findMany({ where: { active: true } }),
      db.setting.findUnique({ where: { key: "app" } }),
      db.setting.findUnique({ where: { key: "exam_date" } }),
      db.lessonProgress.count({ where: { userId: user.id, status: "COMPLETED" } }),
      db.lesson.count({ where: { status: "PUBLISHED" } }),
    ]);
    const inProgress = await db.lessonProgress.findFirst({
      where: { userId: user.id, status: "IN_PROGRESS" },
      include: { lesson: { include: { module: { select: { course: { select: { slug: true, title: true } } } } } } },
      orderBy: { updatedAt: "desc" },
    });
    let nextLesson = inProgress?.lesson ?? null;
    if (!nextLesson) {
      const currentCourse = courses.find(
        (c) => c.year === user.currentYear && c.semester === user.currentSemester && c.completedCount < c.lessonCount
      );
      if (currentCourse) {
        const lesson = await db.lesson.findFirst({
          where: {
            status: "PUBLISHED",
            module: { course: { slug: currentCourse.slug } },
            progress: { none: { userId: user.id, status: "COMPLETED" } },
          },
          include: { module: { select: { course: { select: { slug: true, title: true } } } } },
          orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
        });
        nextLesson = lesson;
      }
    }

    // quick quiz pool size
    const quickQuizCount = await db.question.count();

    const weakTopics = topicAccuracy
      .filter((t) => t.total >= 3 && t.accuracy < 70)
      .slice(0, 3)
      .map((t) => t.topic);

    const mastered = topicAccuracy.filter((t) => t.accuracy >= 80 && t.total >= 3).length;

    const minutesToday = todayAct?.minutes ?? 0;
    const message = personalMessages.length
      ? personalMessages[Math.floor(Math.random() * personalMessages.length)]
      : null;

    // exam countdown — Setting key "exam_date" stores an ISO "YYYY-MM-DD" string
    const examDate =
      examSetting?.value && /^\d{4}-\d{2}-\d{2}$/.test(examSetting.value) ? examSetting.value : null;
    let examDaysLeft: number | null = null;
    if (examDate) {
      const diff = Math.ceil(
        (Date.parse(examDate + "T00:00:00Z") - Date.parse(today + "T00:00:00Z")) / 86400000
      );
      examDaysLeft = diff >= 0 ? diff : null; // past dates → daysLeft null (date still returned)
    }

    return Response.json({
      greeting: timeGreeting(user.nickname || user.name),
      today: {
        minutes: minutesToday,
        target: user.dailyTargetMin,
        progressPct: Math.min(100, Math.round((minutesToday / Math.max(1, user.dailyTargetMin)) * 100)),
        lessons: todayAct?.lessonsCompleted ?? 0,
        quizzes: todayAct?.quizzesAttempted ?? 0,
        games: todayAct?.gamesPlayed ?? 0,
        xp: todayAct?.xpGained ?? 0,
      },
      streak: { current: user.streak, longest: user.longestStreak, studiedYesterday: !!yesterdayAct },
      xp: { total: user.xp, level: user.level },
      mastered,
      completedLessons: completedCount,
      publishedTotal,
      nextLesson: nextLesson
        ? {
            id: nextLesson.id,
            title: nextLesson.title,
            description: nextLesson.description,
            durationMin: nextLesson.durationMin,
            difficulty: nextLesson.difficulty,
            course: nextLesson.module.course.title,
            courseSlug: nextLesson.module.course.slug,
          }
        : null,
      review: {
        dueCount: dueReviews.length,
        items: dueReviews.slice(0, 5).map((r) => ({ id: r.id, topic: r.topic })),
      },
      weakTopics,
      dailyPlan: [
        {
          kind: "review",
          minutes: 5,
          label: dueReviews.length > 0 ? `Warm-up review · ${dueReviews.length} due` : "Warm-up review",
          done: minutesToday >= 5,
        },
        {
          kind: "lesson",
          minutes: nextLesson?.durationMin ?? 10,
          label: nextLesson ? `Lesson: ${nextLesson.title}` : "Explore the curriculum",
          done: (todayAct?.lessonsCompleted ?? 0) > 0,
        },
        ...(weakTopics.length > 0
          ? [{ kind: "drill" as const, minutes: 5, label: `Drill: ${weakTopics[0]}`, topic: weakTopics[0], done: false }]
          : []),
        { kind: "activity", minutes: 5, label: "A little game", done: (todayAct?.gamesPlayed ?? 0) > 0 },
        { kind: "quiz", minutes: 5, label: "Quick quiz", done: (todayAct?.quizzesAttempted ?? 0) > 0 },
      ],
      personalMessage: message ? { text: message.text, tone: message.tone } : null,
      yesterdayScore: null,
      coursesSummary: courses,
      quickQuizCount,
      games: games.map((g) => ({
        slug: g.slug,
        title: g.title,
        description: g.description,
        icon: g.icon,
        xpReward: g.xpReward,
        unlockLevel: g.unlockLevel,
        locked: user.level < g.unlockLevel,
      })),
      badges: {
        earned: earnedBadges.map((ub) => ({
          slug: ub.badge.slug,
          title: ub.badge.title,
          description: ub.badge.description,
          icon: ub.badge.icon,
          earnedAt: ub.earnedAt,
        })),
        all: allBadges.map((b) => ({
          slug: b.slug,
          title: b.title,
          description: b.description,
          icon: b.icon,
          criteria: b.criteria,
          xp: b.xp,
        })),
      },
      settings: settings ? safeParseJson(settings.value) : null,
      exam: { date: examDate, daysLeft: examDaysLeft },
    });
  });
}

function safeParseJson(value: string): Record<string, unknown> | null {
  try {
    const v = JSON.parse(value);
    return typeof v === "object" && v !== null ? (v as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
