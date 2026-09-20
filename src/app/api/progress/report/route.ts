import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import type { ReportCardData } from "@/lib/types";

/** Clamp helper — keeps the range sane (1–730 days). */
function clampDate(value: string | null, fallback: Date): Date {
  if (!value) return fallback;
  const d = new Date(value + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return fallback;
  return d;
}

function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * GET /api/progress/report?from=YYYY-MM-DD&to=YYYY-MM-DD&all=1
 * Aggregated report-card data for a date range (defaults: last 30 days;
 * all=1 spans from the student's account creation).
 */
export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const url = new URL(req.url);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const wantAll = url.searchParams.get("all") === "1";
    const to0 = clampDate(url.searchParams.get("to"), today);
    // all=1 → span from the earliest recorded activity (seeded history can predate the account)
    let allFrom = new Date(0);
    if (wantAll) {
      const [u, firstActivity] = await Promise.all([
        db.user.findUnique({ where: { id: user.id }, select: { createdAt: true } }),
        db.dailyActivity.findFirst({ where: { userId: user.id }, orderBy: { date: "asc" }, select: { date: true } }),
      ]);
      const candidates = [u?.createdAt ?? new Date(0)];
      if (firstActivity) candidates.push(new Date(firstActivity.date + "T00:00:00Z"));
      allFrom = new Date(Math.min(...candidates.map((d) => d.getTime())));
    }
    const defaultFrom = wantAll
      ? new Date(Math.min(today.getTime(), allFrom.getTime()))
      : new Date(today.getTime() - 29 * 86400000); // 30-day window including today
    let from = wantAll && !url.searchParams.get("from") ? defaultFrom : clampDate(url.searchParams.get("from"), defaultFrom);
    // enforce order + a max span of two years
    let to = to0;
    if (from > to) [from, to] = [to, from];
    if (!wantAll && to.getTime() - from.getTime() > 730 * 86400000) {
      from = new Date(to.getTime() - 730 * 86400000);
    }
    const fromDt = new Date(from.getTime() - 12 * 3600000); // include the whole "from" day regardless of TZ quirks
    const toDt = new Date(to.getTime() + 36 * 36000000); // include the whole "to" day

    const [activities, lessonsDone, attempts, userBadges, examSetting] = await Promise.all([
      db.dailyActivity.findMany({
        where: { userId: user.id, date: { gte: isoDay(from), lte: isoDay(to) } },
        orderBy: { date: "asc" },
      }),
      db.lessonProgress.count({
        where: { userId: user.id, status: "COMPLETED", completedAt: { gte: fromDt, lte: toDt } },
      }),
      db.quizAttempt.findMany({
        where: { userId: user.id, createdAt: { gte: fromDt, lte: toDt } },
        orderBy: { createdAt: "asc" },
        select: {
          id: true, setupMode: true, mode: true, label: true, score: true, total: true,
          percentage: true, createdAt: true,
          answers: { select: { correct: true, question: { select: { topic: true } } } },
        },
      }),
      db.userBadge.findMany({
        where: { userId: user.id, earnedAt: { gte: fromDt, lte: toDt } },
        orderBy: { earnedAt: "desc" },
        select: { earnedAt: true, badge: { select: { title: true, icon: true } } },
      }),
      db.setting.findUnique({ where: { key: "exam_date" } }),
    ]);

    const minutes = activities.reduce((s, a) => s + a.minutes, 0);
    const activeDays = activities.filter((a) => a.minutes > 0 || a.lessonsCompleted > 0 || a.quizzesAttempted > 0).length;
    const dayCount = Math.max(1, Math.round((to.getTime() - from.getTime()) / 86400000) + 1);
    const bestDay = activities.reduce<{ date: string; minutes: number } | null>(
      (best, a) => (!best || a.minutes > best.minutes ? { date: a.date, minutes: a.minutes } : best),
      null
    );

    const tests: ReportCardData["tests"] = attempts
      .filter((a) => a.setupMode || a.mode === "EXAM")
      .map((a) => ({
        date: a.createdAt.toISOString(),
        type: (a.setupMode ?? "PRACTICE") as ReportCardData["tests"][number]["type"],
        label: a.label ?? "Practice test",
        score: a.score,
        total: a.total,
        percentage: a.percentage,
      }));

    const papers = tests.filter((t) => t.type === "EXAM");
    const avgScore = tests.length
      ? Math.round(tests.reduce((s, t) => s + t.percentage, 0) / tests.length)
      : null;

    // topic accuracy from every answer in the window (any quiz mode)
    const topicMap = new Map<string, { total: number; correct: number }>();
    for (const a of attempts) {
      for (const ans of a.answers) {
        const cur = topicMap.get(ans.question.topic) ?? { total: 0, correct: 0 };
        cur.total += 1;
        if (ans.correct) cur.correct += 1;
        topicMap.set(ans.question.topic, cur);
      }
    }
    const allTopics = Array.from(topicMap.entries())
      .map(([topic, v]) => ({ topic, total: v.total, correct: v.correct, accuracy: Math.round((v.correct / v.total) * 100) }))
      .sort((a, b) => b.total - a.total);
    const strong = allTopics.filter((t) => t.accuracy >= 70 && t.total >= 2).slice(0, 6);
    const weak = allTopics.filter((t) => t.accuracy < 70 && t.total >= 2).sort((a, b) => a.accuracy - b.accuracy).slice(0, 6);

    const examDate = examSetting?.value && /^\d{4}-\d{2}-\d{2}$/.test(examSetting.value) ? examSetting.value : null;
    const daysLeft = examDate
      ? Math.round((Date.parse(examDate + "T00:00:00Z") - today.getTime()) / 86400000)
      : null;
    const report: ReportCardData = {
      student: {
        name: user.name,
        nickname: user.nickname,
        year: user.currentYear,
        semester: user.currentSemester,
      },
      range: { from: isoDay(from), to: isoDay(to), days: dayCount },
      study: {
        minutes,
        activeDays,
        avgPerActiveDay: activeDays ? Math.round(minutes / activeDays) : 0,
        bestDay,
        lessons: lessonsDone,
        quizzes: activities.reduce((s, a) => s + a.quizzesAttempted, 0),
        quizzesPassed: activities.reduce((s, a) => s + a.quizzesPassed, 0),
        games: activities.reduce((s, a) => s + a.gamesPlayed, 0),
        xp: activities.reduce((s, a) => s + a.xpGained, 0),
      },
      tests,
      papersSat: papers.length,
      avgScore,
      topics: { strong, weak },
      badges: userBadges.map((b) => ({ title: b.badge.title, icon: b.badge.icon, earnedAt: b.earnedAt.toISOString() })),
      activity: activities.map((a) => ({ date: a.date, minutes: a.minutes })),
      streak: { current: user.streak, longest: user.longestStreak },
      exam: examDate && daysLeft !== null ? { date: examDate, daysLeft } : null,
      generatedAt: new Date().toISOString(),
    };

    return Response.json(report);
  });
}
