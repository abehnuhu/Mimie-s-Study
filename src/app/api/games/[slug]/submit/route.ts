import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges } from "@/lib/gamify";

/** Submit a game result. score is a normalized 0–100 performance score. */
export async function POST(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  return withUser(req, async (_req, { user }) => {
    const { slug } = await ctx.params;
    const body = await _req.json().catch(() => ({}));
    const score = Math.min(Math.max(Number(body.score ?? 0) || 0, 0), 100);
    const timeSec = Math.min(Math.max(Number(body.timeSec ?? 0) || 0, 0), 1800);

    const game = await db.game.findUnique({ where: { slug } });
    if (!game) return Response.json({ error: "Game not found 💗" }, { status: 404 });
    if (user.level < game.unlockLevel) {
      return Response.json({ error: `Unlocks at level ${game.unlockLevel} — keep learning 💗` }, { status: 403 });
    }

    // XP scales with performance, floor of 2
    const xpEarned = Math.max(2, Math.round((game.xpReward * score) / 100) + (score >= 100 ? 5 : 0));

    const attempt = await db.gameAttempt.create({
      data: { userId: user.id, gameId: game.id, score, xpEarned, createdAt: new Date() },
    });

    const activity = await recordActivity(user.id, {
      minutes: Math.max(1, Math.round(timeSec / 60)),
      gamesPlayed: 1,
      xpGained: xpEarned,
    });
    const newBadges = await checkAndAwardBadges(user.id);

    const previousBest = await db.gameAttempt.findFirst({
      where: { userId: user.id, gameId: game.id, id: { not: attempt.id } },
      orderBy: { score: "desc" },
      select: { score: true },
    });

    return Response.json({
      ok: true,
      score,
      xpEarned,
      leveledUp: activity.leveledUp,
      newLevel: activity.newLevel,
      streak: activity.streak,
      newBest: !previousBest || score > previousBest.score,
      previousBest: previousBest?.score ?? null,
      newBadges,
    });
  });
}
