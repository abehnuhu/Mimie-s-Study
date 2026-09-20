import { db } from "@/lib/db";
import { withUser, getCourseSummaries, getTopicAccuracy } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const since = new Date(Date.now() - 13 * 86400000); // 14-day heatmap window
    const heatmapSince = new Date(Date.now() - 83 * 86400000); // 12 weeks

    const [activity, attempts, courses, topicAccuracy, completed, sessions, minutesAll] =
      await Promise.all([
        db.dailyActivity.findMany({
          where: { userId: user.id, date: { gte: heatmapSince.toISOString().slice(0, 10) } },
          orderBy: { date: "asc" },
        }),
        db.quizAttempt.findMany({
          where: { userId: user.id },
          orderBy: { createdAt: "desc" },
          take: 30,
        }),
        getCourseSummaries(user.id),
        getTopicAccuracy(user.id),
        db.lessonProgress.findMany({
          where: { userId: user.id, status: "COMPLETED" },
          include: { lesson: { select: { title: true, durationMin: true, tags: true, module: { select: { course: { select: { slug: true, title: true } } } } } } },
          orderBy: { completedAt: "desc" },
        }),
        db.studySession.count({ where: { userId: user.id, durationSec: { gt: 60 } } }),
        db.dailyActivity.aggregate({ where: { userId: user.id }, _sum: { minutes: true } }),
      ]);

    // weekly minutes (last 7 days)
    const days: { date: string; label: string; minutes: number; xp: number; lessons: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const key = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      const act = activity.find((a) => a.date === key);
      days.push({
        date: key,
        label: new Date(key + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "short" }),
        minutes: act?.minutes ?? 0,
        xp: act?.xpGained ?? 0,
        lessons: act?.lessonsCompleted ?? 0,
      });
    }

    // label by attempt sequence so same-day quizzes stay distinguishable
    const recentAttempts = [...attempts].reverse().slice(-12);
    const accuracyTrend = recentAttempts.map((a, i) => ({
      date: a.createdAt.toISOString().slice(0, 10),
      label: `Q${i + 1}`,
      dateLabel: a.createdAt.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }),
      percentage: a.percentage,
    }));

    const heatmap = activity.map((a) => ({
      date: a.date,
      minutes: a.minutes,
      lessons: a.lessonsCompleted,
      xp: a.xpGained,
    }));

    const weakTopics = topicAccuracy.filter((t) => t.total >= 2 && t.accuracy < 70).slice(0, 6);
    const strongTopics = [...topicAccuracy].reverse().filter((t) => t.total >= 2 && t.accuracy >= 80).slice(0, 6);

    const currentSemesterCourses = courses.filter(
      (c) => c.year === user.currentYear && c.semester === user.currentSemester
    );

    const avgScore = attempts.length
      ? Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / attempts.length)
      : null;

    return Response.json({
      user: { name: user.name, nickname: user.nickname, xp: user.xp, level: user.level, streak: user.streak, longestStreak: user.longestStreak },
      weekly: days,
      accuracyTrend,
      heatmap,
      weakTopics,
      strongTopics,
      currentSemesterCourses,
      totals: {
        lessonsCompleted: completed.length,
        minutes: minutesAll._sum.minutes ?? 0,
        sessions,
        quizzes: attempts.length,
        avgScore,
        highestScore: attempts.reduce((m, a) => Math.max(m, a.percentage), 0),
        masteredTopics: topicAccuracy.filter((t) => t.accuracy >= 80 && t.total >= 3).length,
      },
      recentLessons: completed.slice(0, 8).map((c) => ({
        id: c.lessonId,
        title: c.lesson.title,
        course: c.lesson.module.course.title,
        courseSlug: c.lesson.module.course.slug,
        completedAt: c.completedAt,
      })),
    });
  });
}
