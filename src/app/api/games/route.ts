import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges } from "@/lib/gamify";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const games = await db.game.findMany({
      orderBy: [{ unlockLevel: "asc" }, { title: "asc" }],
      include: {
        attempts: {
          where: { userId: user.id },
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    });
    return Response.json({
      games: games.map((g) => {
        const best = g.attempts.reduce((m, a) => Math.max(m, a.score), 0);
        const plays = g.attempts.length;
        return {
          slug: g.slug,
          title: g.title,
          description: g.description,
          icon: g.icon,
          xpReward: g.xpReward,
          unlockLevel: g.unlockLevel,
          locked: user.level < g.unlockLevel,
          best,
          plays,
          lastPlayedAt: g.attempts[0]?.createdAt ?? null,
        };
      }),
    });
  });
}
