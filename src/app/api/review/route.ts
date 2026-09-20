import { db } from "@/lib/db";
import { withUser, sanitizeQuestion } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges, XP_AWARDS } from "@/lib/gamify";

const SRS_DAYS = [0, 1, 3, 7, 14, 30];

/** Review queue: due items with one question each. */
export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const items = await db.reviewItem.findMany({
      where: { userId: user.id, stage: { lt: 6 } },
      orderBy: { dueAt: "asc" },
      take: 20,
    });
    const now = new Date();
    const due = items.filter((i) => i.dueAt <= now);
    const upcoming = items.filter((i) => i.dueAt > now);
    const mastered = await db.reviewItem.count({ where: { userId: user.id, stage: { gte: 6 } } });

    // fetch a question for each due item (review is an instant-reveal study mode,
    // so the answer + explanation are intentionally included)
    const withQuestion = await Promise.all(
      due.slice(0, 8).map(async (item) => {
        const question = item.questionId
          ? await db.question.findUnique({ where: { id: item.questionId } })
          : await db.question.findFirst({ where: { topic: item.topic } });
        if (!question) return null;
        return {
          itemId: item.id,
          topic: item.topic,
          stage: item.stage,
          timesSeen: item.timesSeen,
          question: {
            ...sanitizeQuestion(question),
            correctIndex: question.correctIndex,
            correctIndexes: question.correctIndexes ? (JSON.parse(question.correctIndexes) as number[]) : null,
            explanation: question.explanation,
          },
        };
      })
    );

    return Response.json({
      dueCount: due.length,
      items: withQuestion.filter(Boolean),
      upcomingCount: upcoming.length,
      nextDueAt: upcoming[0]?.dueAt ?? null,
      masteredCount: mastered,
    });
  });
}

/** Grade a review answer: advances or resets the SRS stage. */
export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const topic = String(body.topic ?? "");
    const correct = Boolean(body.correct);
    const questionId = body.questionId ? String(body.questionId) : null;
    if (!topic) return Response.json({ error: "Missing topic 💗" }, { status: 400 });

    const item = await db.reviewItem.findUnique({
      where: { userId_topic: { userId: user.id, topic } },
    });
    if (!item) return Response.json({ error: "No review item for that topic 💗" }, { status: 404 });

    const nextStage = correct ? Math.min(item.stage + 1, 6) : 0;
    const dueAt = new Date(Date.now() + (SRS_DAYS[Math.min(nextStage, 5)] ?? 30) * 86400000);

    await db.reviewItem.update({
      where: { id: item.id },
      data: { stage: nextStage, dueAt, lastResult: correct, timesSeen: { increment: 1 }, questionId: questionId ?? item.questionId },
    });

    const activity = await recordActivity(user.id, {
      xpGained: correct ? XP_AWARDS.REVIEW_CORRECT : 0,
      topics: [topic],
    });
    const newBadges = await checkAndAwardBadges(user.id);

    return Response.json({
      ok: true,
      correct,
      stage: nextStage,
      mastered: nextStage >= 6,
      nextDueAt: dueAt,
      xpGained: activity.xpGained,
      newBadges,
    });
  });
}
