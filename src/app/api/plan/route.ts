import { db } from "@/lib/db";
import { withUser, getTopicAccuracy } from "@/lib/api-helpers";
import { todayKey } from "@/lib/gamify";

/**
 * GET /api/plan — the adaptive "smart plan".
 *
 * Builds today's plan from real signals: due reviews, weak topics (with
 * accuracy), the next unfinished lesson, the exam countdown and the
 * minutes still needed to hit the daily target. Rows carry a human
 * "why" line so the student understands the reason behind each item.
 */

type PlanRow = {
  kind: "review" | "lesson" | "drill" | "mock" | "activity" | "quiz";
  minutes: number;
  label: string;
  why: string;
  done: boolean;
  topic?: string;
  accuracy?: number;
  questionCount?: number;
  action: "review" | "lesson" | "drill" | "mock" | "games" | "quiz";
};

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const today = todayKey();
    const dayStart = new Date(`${today}T00:00:00.000Z`);

    const [
      todayAct,
      topicAccuracy,
      dueReviews,
      examSetting,
      drilledToday,
      examAttemptToday,
    ] = await Promise.all([
      db.dailyActivity.findUnique({ where: { userId_date: { userId: user.id, date: today } } }),
      getTopicAccuracy(user.id),
      db.reviewItem.count({ where: { userId: user.id, dueAt: { lte: new Date() }, stage: { lt: 6 } } }),
      db.setting.findUnique({ where: { key: "exam_date" } }),
      // topics the student has actually answered questions on today
      db.quizAnswer.findMany({
        where: { attempt: { userId: user.id, createdAt: { gte: dayStart } } },
        select: { question: { select: { topic: true } } },
      }),
      db.quizAttempt.count({
        where: { userId: user.id, setupMode: "EXAM", createdAt: { gte: dayStart } },
      }),
    ]);

    // next lesson (in-progress first, else first unfinished in current course)
    const inProgress = await db.lessonProgress.findFirst({
      where: { userId: user.id, status: "IN_PROGRESS" },
      include: { lesson: { select: { id: true, title: true, durationMin: true } } },
      orderBy: { updatedAt: "desc" },
    });
    let nextLesson = inProgress?.lesson ?? null;
    if (!nextLesson) {
      nextLesson = await db.lesson.findFirst({
        where: {
          status: "PUBLISHED",
          module: { course: { semester: { number: user.currentSemester, year: { number: user.currentYear } } } },
          progress: { none: { userId: user.id, status: "COMPLETED" } },
        },
        orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
        select: { id: true, title: true, durationMin: true },
      });
    }

    // weak topics (answered ≥3 times, below 70%) with drillable question counts
    const weakTopics = topicAccuracy
      .filter((t) => t.total >= 3 && t.accuracy < 70)
      .slice(0, 4)
      .map((t) => ({ topic: t.topic, accuracy: t.accuracy, total: t.total }));
    const questionCounts = weakTopics.length
      ? await db.question.groupBy({
          by: ["topic"],
          where: { topic: { in: weakTopics.map((w) => w.topic) } },
          _count: { _all: true },
        })
      : [];

    const drilledTopics = new Set(drilledToday.map((a) => a.question.topic));

    // exam countdown
    const examDate =
      examSetting?.value && /^\d{4}-\d{2}-\d{2}$/.test(examSetting.value) ? examSetting.value : null;
    let examDaysLeft: number | null = null;
    if (examDate) {
      const diff = Math.ceil(
        (Date.parse(examDate + "T00:00:00Z") - Date.parse(today + "T00:00:00Z")) / 86400000
      );
      examDaysLeft = diff >= 0 ? diff : null;
    }

    // ── focus mode from the exam calendar ──
    const mode: "sprint" | "build" | "cruise" =
      examDaysLeft !== null && examDaysLeft <= 21
        ? "sprint"
        : examDaysLeft !== null && examDaysLeft <= 60
          ? "build"
          : "cruise";

    const minutesDone = todayAct?.minutes ?? 0;
    const target = user.dailyTargetMin;
    const remainingMin = Math.max(0, target - minutesDone);

    const rows: PlanRow[] = [];

    // 1 · warm-up review — always first (spaced repetition is the backbone)
    rows.push({
      kind: "review",
      minutes: 5,
      label: dueReviews > 0 ? `Warm-up review · ${dueReviews} due` : "Warm-up review",
      why:
        dueReviews > 0
          ? `${dueReviews} concept${dueReviews === 1 ? "" : "s"} resurfaced — spaced repetition keeps them alive 💗`
          : "Nothing due — a 5-minute flip of recent flashcards keeps the streak warm.",
      done: dueReviews === 0 && minutesDone >= 5,
      action: "review",
    });

    // 2 · drills for each weak topic — the heart of the smart plan
    for (const w of weakTopics.slice(0, mode === "cruise" ? 2 : 3)) {
      const qCount = questionCounts.find((q) => q.topic === w.topic)?._count._all ?? 0;
      if (qCount === 0) continue;
      rows.push({
        kind: "drill",
        minutes: 5,
        label: `Drill: ${w.topic}`,
        why: `${w.accuracy}% accuracy over ${w.total} answers — this one needs love.`,
        topic: w.topic,
        accuracy: w.accuracy,
        questionCount: qCount,
        done: drilledTopics.has(w.topic),
        action: "drill",
      });
    }

    // 3 · the next lesson — grows understanding, not just scores
    if (nextLesson) {
      rows.push({
        kind: "lesson",
        minutes: nextLesson.durationMin,
        label: `Lesson: ${nextLesson.title}`,
        why: "Your next unfinished lesson — steady progress through the curriculum.",
        done: (todayAct?.lessonsCompleted ?? 0) > 0,
        action: "lesson",
      });
    }

    // 4 · sprint mode: a full mock paper every plan
    if (mode === "sprint") {
      rows.push({
        kind: "mock",
        minutes: 15,
        label: "Mock paper",
        why:
          examDaysLeft !== null
            ? `${examDaysLeft} day${examDaysLeft === 1 ? "" : "s"} to the exam — real papers build real nerves of steel.`
            : "Real papers build real nerves of steel.",
        done: examAttemptToday > 0,
        action: "mock",
      });
    }

    // 5 · cooldown blocks — only while there's budget left in the day
    const plannedSoFar = rows.reduce((s, r) => s + r.minutes, 0);
    if (remainingMin === 0 || plannedSoFar < remainingMin + 20) {
      rows.push({
        kind: "activity",
        minutes: 5,
        label: "A little game",
        why: "Games sneak learning in through the side door — fun counts too.",
        done: (todayAct?.gamesPlayed ?? 0) > 0,
        action: "games",
      });
      rows.push({
        kind: "quiz",
        minutes: 5,
        label: "Quick quiz",
        why: "A fast mixed quiz — active recall beats rereading, every time.",
        done: (todayAct?.quizzesAttempted ?? 0) > 0,
        action: "quiz",
      });
    }

    // sprint re-orders: drills & mock before the (longer) lesson
    if (mode === "sprint") {
      rows.sort((a, b) => {
        const rank = (r: PlanRow) => (r.kind === "review" ? 0 : r.kind === "drill" ? 1 : r.kind === "mock" ? 2 : 3);
        return rank(a) - rank(b);
      });
    }

    const focusLabel =
      mode === "sprint"
        ? `Exam sprint · ${examDaysLeft} ${examDaysLeft === 1 ? "day" : "days"} to go`
        : mode === "build"
          ? `Steady build · ${examDaysLeft} days to go`
          : "Gentle cruise";

    const headline =
      mode === "sprint"
        ? "Exams close in — drills and papers first, lessons after."
        : mode === "build"
          ? "Balance drills with new lessons while the exam is still far."
          : "Easy does it — new lessons, warm reviews, gentle games.";

    const totalMin = rows.reduce((s, r) => s + r.minutes, 0);
    const doneCount = rows.filter((r) => r.done).length;

    return Response.json({
      mode,
      focusLabel,
      headline,
      rows,
      weakTopics: weakTopics.slice(0, 4),
      remainingMin,
      targetMin: target,
      minutesDone,
      totalMin,
      doneCount,
      exam: { date: examDate, daysLeft: examDaysLeft },
      generatedAt: new Date().toISOString(),
      nextLessonId: nextLesson?.id ?? null,
    });
  });
}
