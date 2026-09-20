import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

/**
 * Per-game data. For sixty-second (an instant-feedback rapid game),
 * questions come WITH answers — unlike exams, feedback here is immediate.
 */
export async function GET(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  return withUser(req, async () => {
    if (slug === "sixty-second") {
      const questions = await db.question.findMany({
        where: { type: { in: ["MCQ", "TRUE_FALSE", "CLINICAL_SCENARIO"] } },
        take: 60,
      });
      const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 12);
      return Response.json({
        questions: shuffled.map((q) => ({
          id: q.id,
          topic: q.topic,
          stem: q.stem,
          options: JSON.parse(q.options),
          correctIndex: q.correctIndex,
          explanation: q.explanation,
        })),
      });
    }
    return Response.json({ error: "No data for this game 💗" }, { status: 404 });
  });
}
