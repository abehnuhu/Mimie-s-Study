import { db } from "@/lib/db";
import { withAdmin, getTopicAccuracy } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withAdmin(req, async (_req, { user }) => {
    const students = await db.user.findMany({ where: { role: "STUDENT" } });
    const mimie = students[0];
    if (!mimie) {
      return Response.json({ error: "No student account yet 💗" }, { status: 404 });
    }
    const today = new Date().toISOString().slice(0, 10);
    const weekAgo = new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10);

    const [todayAct, weekActs, allActs, attempts, topicAccuracy, completedCount, publishedTotal, sessions, minutesAgg, gamesPlayed, gameTitles] =
      await Promise.all([
        db.dailyActivity.findUnique({ where: { userId_date: { userId: mimie.id, date: today } } }),
        db.dailyActivity.findMany({
          where: { userId: mimie.id, date: { gte: weekAgo } },
          orderBy: { date: "asc" },
        }),
        db.dailyActivity.findMany({
          where: { userId: mimie.id, date: { gte: new Date(Date.now() - 83 * 86400000).toISOString().slice(0, 10) } },
          orderBy: { date: "asc" },
        }),
        db.quizAttempt.findMany({ where: { userId: mimie.id }, orderBy: { createdAt: "desc" }, take: 10 }),
        getTopicAccuracy(mimie.id),
        db.lessonProgress.count({ where: { userId: mimie.id, status: "COMPLETED" } }),
        db.lesson.count({ where: { status: "PUBLISHED" } }),
        db.studySession.count({ where: { userId: mimie.id, durationSec: { gt: 60 } } }),
        db.dailyActivity.aggregate({ where: { userId: mimie.id }, _sum: { minutes: true } }),
        db.gameAttempt.count({ where: { userId: mimie.id } }),
        db.gameAttempt.groupBy({
          by: ["gameId"],
          where: { userId: mimie.id },
          _count: { _all: true },
        }),
      ]);

    const gameIds = await db.game.findMany({ select: { id: true, title: true } });
    const gameMap = new Map(gameIds.map((g) => [g.id, g.title]));
    const mostPlayedGame =
      gameTitles.length > 0
        ? gameTitles.sort((a, b) => b._count._all - a._count._all)[0]
        : null;

    const weekMinutes = weekActs.reduce((s, a) => s + a.minutes, 0);
    const weekLessons = weekActs.reduce((s, a) => s + a.lessonsCompleted, 0);
    const weekQuizzes = weekActs.reduce((s, a) => s + a.quizzesAttempted, 0);
    const weekQuizScores = attempts.filter((a) => a.createdAt >= new Date(weekAgo));
    const avgWeekScore = weekQuizScores.length
      ? Math.round(weekQuizScores.reduce((s, a) => s + a.percentage, 0) / weekQuizScores.length)
      : null;

    const withAnswers = topicAccuracy.filter((t) => t.total >= 2);
    const strongest = withAnswers[withAnswers.length - 1]?.topic ?? null;
    const weakest = withAnswers[0]?.topic ?? null;

    const recentLessons = await db.lessonProgress.findMany({
      where: { userId: mimie.id, status: "COMPLETED" },
      include: { lesson: { select: { title: true, module: { select: { course: { select: { title: true } } } } } } },
      orderBy: { completedAt: "desc" },
      take: 5,
    });

    return Response.json({
      student: {
        id: mimie.id,
        name: mimie.name,
        nickname: mimie.nickname,
        avatar: mimie.avatar,
        currentYear: mimie.currentYear,
        currentSemester: mimie.currentSemester,
        dailyTargetMin: mimie.dailyTargetMin,
        streak: mimie.streak,
        longestStreak: mimie.longestStreak,
        xp: mimie.xp,
        level: mimie.level,
      },
      today: {
        loggedIn: !!todayAct?.loginAt,
        loginAt: todayAct?.loginAt ?? null,
        minutes: todayAct?.minutes ?? 0,
        lessons: todayAct?.lessonsCompleted ?? 0,
        quiz: attempts[0] && attempts[0].createdAt.toISOString().slice(0, 10) === today ? attempts[0].percentage : null,
        games: todayAct?.gamesPlayed ?? 0,
        xp: todayAct?.xpGained ?? 0,
      },
      week: {
        daysActive: weekActs.filter((a) => a.minutes > 0 || a.lessonsCompleted > 0).length,
        minutes: weekMinutes,
        lessons: weekLessons,
        quizzes: weekQuizzes,
        avgScore: avgWeekScore,
        strongest,
        weakest,
        mostPlayedGame: mostPlayedGame ? gameMap.get(mostPlayedGame.gameId) : null,
        longestSessionMinutes: Math.max(
          0,
          ...(await db.studySession.findMany({
            where: { userId: mimie.id, startedAt: { gte: new Date(weekAgo) } },
            select: { durationSec: true },
          })).map((s) => Math.round(s.durationSec / 60))
        ),
      },
      allTime: {
        progressPct: publishedTotal ? Math.round((completedCount / publishedTotal) * 100) : 0,
        lessonsCompleted: completedCount,
        publishedTotal,
        sessions,
        minutes: minutesAgg._sum.minutes ?? 0,
        streak: mimie.streak,
        highestQuiz: attempts.reduce((m, a) => Math.max(m, a.percentage), 0),
        gamesPlayed,
      },
      heatmap: allActs.map((a) => ({
        date: a.date,
        minutes: a.minutes,
        lessons: a.lessonsCompleted,
        quizzes: a.quizzesAttempted,
        games: a.gamesPlayed,
        topics: (() => {
          try {
            return JSON.parse(a.topics ?? "[]");
          } catch {
            return [];
          }
        })(),
        xp: a.xpGained,
      })),
      recentActivity: recentLessons.map((r) => ({
        lesson: r.lesson.title,
        course: r.lesson.module.course.title,
        completedAt: r.completedAt,
      })),
    });
  });
}
