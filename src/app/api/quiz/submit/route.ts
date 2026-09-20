import { db } from "@/lib/db";
import { withUser, parseJsonMap } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges, XP_AWARDS } from "@/lib/gamify";

/** Spaced repetition intervals in days per stage */
const SRS_DAYS = [0, 1, 3, 7, 14, 30];

const SETUP_MODES = ["QUICK", "TIMED", "WEAK", "MIXED", "EXAM"];
const DIFFICULTIES = ["Any", "Easy", "Moderate", "Hard", "Clinical Reasoning"];

interface SubmitAnswer {
  questionId: string;
  selectedIndex?: number;
  selectedIndexes?: number[];
}

export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const mode = ["LESSON", "EXAM", "REVIEW", "QUICK"].includes(String(body.mode)) ? String(body.mode) : "LESSON";
    const setupMode = SETUP_MODES.includes(String(body.setupMode)) ? String(body.setupMode) : null;
    const lessonId = body.lessonId ? String(body.lessonId) : null;
    const label = body.label ? String(body.label).slice(0, 120) : null;
    const timeSec = Math.min(Math.max(Number(body.timeSec ?? 0) || 0, 0), 7200);
    const answersIn: SubmitAnswer[] = Array.isArray(body.answers) ? body.answers : [];

    // sanitize the exam-setup parameters so the same test can be retried from history
    const setupConfig = sanitizeSetupConfig(body.config, setupMode);
    if (answersIn.length === 0) {
      return Response.json({ error: "No answers submitted 💗" }, { status: 400 });
    }

    const questions = await db.question.findMany({
      where: { id: { in: answersIn.map((a) => String(a.questionId)) } },
    });
    const qMap = new Map(questions.map((q) => [q.id, q]));

    const graded = answersIn.map((a) => {
      const q = qMap.get(String(a.questionId));
      if (!q) return null;
      let correct = false;
      if (q.type === "MULTI_SELECT" && q.correctIndexes) {
        const expected = (JSON.parse(q.correctIndexes) as number[]).slice().sort();
        const given = (a.selectedIndexes ?? []).slice().sort();
        correct = expected.length === given.length && expected.every((v, i) => v === given[i]);
      } else if (q.type === "ORDERING") {
        // student's arrangement of original option indexes must be [0,1,2,...]
        const given = a.selectedIndexes ?? [];
        const n = (JSON.parse(q.options) as string[]).length;
        correct = given.length === n && given.every((v, i) => v === i);
      } else {
        correct = a.selectedIndex === q.correctIndex;
      }
      return {
        question: q,
        answer: a,
        correct,
      };
    }).filter((g): g is { question: typeof questions[number]; answer: SubmitAnswer; correct: boolean } => g !== null);

    const score = graded.filter((g) => g.correct).length;
    const total = graded.length;
    const percentage = total ? Math.round((score / total) * 100) : 0;
    const isPerfect = total > 0 && score === total;
    const passed = percentage >= 70;

    // XP: per correct + pass/perfect bonuses
    let xpGained = score * XP_AWARDS.QUIZ_CORRECT;
    if (isPerfect) xpGained += XP_AWARDS.QUIZ_PERFECT;
    else if (passed) xpGained += XP_AWARDS.QUIZ_PASS;

    const attempt = await db.quizAttempt.create({
      data: {
        userId: user.id,
        mode,
        setupMode,
        label,
        config: setupConfig,
        score,
        total,
        percentage,
        timeSec,
        xpEarned: xpGained,
      },
    });

    for (const g of graded) {
      await db.quizAnswer.create({
        data: {
          attemptId: attempt.id,
          questionId: g.question.id,
          selectedIndex: g.answer.selectedIndex ?? -1,
          selectedIndexes: g.answer.selectedIndexes ? JSON.stringify(g.answer.selectedIndexes) : null,
          correct: g.correct,
        },
      });
    }

    // spaced repetition: wrong → (re)insert at stage 0 due same-day; right on a review item advances later
    const wrongTopics = new Set<string>();
    for (const g of graded.filter((x) => !x.correct)) {
      wrongTopics.add(g.question.topic);
      await db.reviewItem.upsert({
        where: { userId_topic: { userId: user.id, topic: g.question.topic } },
        create: {
          userId: user.id,
          topic: g.question.topic,
          questionId: g.question.id,
          lessonId: g.question.lessonId,
          stage: 0,
          dueAt: new Date(),
          lastResult: false,
          timesSeen: 1,
        },
        update: { stage: 0, dueAt: new Date(), lastResult: false, timesSeen: { increment: 1 }, questionId: g.question.id },
      });
    }

    const topics = Array.from(new Set(graded.map((g) => g.question.topic))).slice(0, 8);
    const activity = await recordActivity(user.id, {
      minutes: Math.max(1, Math.round(timeSec / 60)),
      quizzesAttempted: 1,
      quizzesPassed: passed ? 1 : 0,
      xpGained,
      topics,
    });
    const newBadges = await checkAndAwardBadges(user.id);

    return Response.json({
      attempt: { id: attempt.id, score, total, percentage, timeSec, xpEarned: xpGained },
      results: graded.map((g) => ({
        questionId: g.question.id,
        correct: g.correct,
        topic: g.question.topic,
        stem: g.question.stem,
        options: JSON.parse(g.question.options) as string[],
        selectedIndex: g.answer.selectedIndex ?? -1,
        selectedIndexes: g.answer.selectedIndexes ?? null,
        correctIndex: g.question.correctIndex,
        correctIndexes: g.question.correctIndexes ? (JSON.parse(g.question.correctIndexes) as number[]) : null,
        explanation: g.question.explanation,
        whyOthers: parseJsonMap(g.question.whyOthers),
      })),
      strongAreas: topicsWithAccuracy(graded, true),
      weakAreas: topicsWithAccuracy(graded, false),
      xpGained,
      leveledUp: activity.leveledUp,
      newLevel: activity.newLevel,
      streak: activity.streak,
      newBadges,
    });
  });
}

function topicsWithAccuracy(
  graded: { question: { topic: string }; correct: boolean }[],
  strong: boolean
): { topic: string; accuracy: number }[] {
  const map = new Map<string, { total: number; correct: number }>();
  for (const g of graded) {
    const cur = map.get(g.question.topic) ?? { total: 0, correct: 0 };
    cur.total += 1;
    if (g.correct) cur.correct += 1;
    map.set(g.question.topic, cur);
  }
  return Array.from(map.entries())
    .map(([topic, v]) => ({ topic, accuracy: Math.round((v.correct / v.total) * 100) }))
    .filter((t) => (strong ? t.accuracy >= 70 : t.accuracy < 70))
    .sort((a, b) => (strong ? b.accuracy - a.accuracy : a.accuracy - b.accuracy))
    .slice(0, 4);
}

/**
 * Whitelist + clamp the client-supplied exam-setup parameters.
 * Returns a JSON string for QuizAttempt.config, or null when not applicable
 * (lesson/review quizzes and malformed payloads get no retry).
 */
function sanitizeSetupConfig(raw: unknown, setupMode: string | null): string | null {
  if (!setupMode || !raw || typeof raw !== "object") return null;
  const c = raw as Record<string, unknown>;
  const mode = SETUP_MODES.includes(String(c.mode)) ? String(c.mode) : null;
  if (!mode || mode !== setupMode) return null;
  const count = Math.min(Math.max(Number(c.count) || 0, 0), 100);
  if (!count) return null;

  const difficulty = DIFFICULTIES.includes(String(c.difficulty)) ? String(c.difficulty) : "Any";
  const yearRaw = c.year;
  const year = yearRaw === "all" || yearRaw === undefined ? "all" : Math.min(Math.max(Number(yearRaw) || 1, 1), 4);
  const semRaw = c.semester;
  const semester = semRaw === "all" || semRaw === undefined ? "all" : Math.min(Math.max(Number(semRaw) || 1, 1), 2);
  const courseSlug = typeof c.courseSlug === "string" && c.courseSlug !== "all" ? c.courseSlug.slice(0, 80) : "all";
  const topic = typeof c.topic === "string" && c.topic !== "all" ? c.topic.slice(0, 80) : "all";
  const spqRaw = Number(c.secondsPerQuestion);
  const secondsPerQuestion = Number.isFinite(spqRaw) && spqRaw >= 40 && spqRaw <= 90 ? Math.round(spqRaw) : null;

  return JSON.stringify({ mode, count, difficulty, year, semester, courseSlug, topic, secondsPerQuestion });
}
