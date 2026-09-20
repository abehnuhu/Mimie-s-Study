import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges, XP_AWARDS } from "@/lib/gamify";

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return withUser(req, async (_req, { user }) => {
    const { id } = await ctx.params;
    const body = await _req.json().catch(() => ({}));
    const timeSpentSec = Math.min(Math.max(Number(body.timeSpentSec ?? 0) || 0, 0), 3600);

    const lesson = await db.lesson.findUnique({ where: { id }, select: { id: true, title: true, tags: true } });
    if (!lesson) return Response.json({ error: "Lesson not found 💗" }, { status: 404 });

    const existing = await db.lessonProgress.findUnique({
      where: { userId_lessonId: { userId: user.id, lessonId: id } },
    });
    const alreadyCompleted = existing?.status === "COMPLETED";

    if (!alreadyCompleted) {
      await db.lessonProgress.upsert({
        where: { userId_lessonId: { userId: user.id, lessonId: id } },
        create: {
          userId: user.id,
          lessonId: id,
          status: "COMPLETED",
          completedAt: new Date(),
          timeSpentSec,
        },
        update: { status: "COMPLETED", completedAt: new Date(), timeSpentSec: { increment: timeSpentSec } },
      });
    } else {
      await db.lessonProgress.update({
        where: { userId_lessonId: { userId: user.id, lessonId: id } },
        data: { timeSpentSec: { increment: timeSpentSec } },
      });
    }

    let tags: string[] = [];
    try {
      tags = JSON.parse(lesson.tags ?? "[]");
    } catch {
      tags = [];
    }

    const activity = await recordActivity(user.id, {
      minutes: Math.max(1, Math.round(timeSpentSec / 60)),
      lessonsCompleted: alreadyCompleted ? 0 : 1,
      xpGained: alreadyCompleted ? 0 : XP_AWARDS.LESSON_COMPLETE,
      topics: tags.slice(0, 3),
    });
    const newBadges = alreadyCompleted ? [] : await checkAndAwardBadges(user.id);

    return Response.json({
      ok: true,
      alreadyCompleted,
      xpGained: activity.xpGained,
      leveledUp: activity.leveledUp,
      newLevel: activity.newLevel,
      streak: activity.streak,
      newBadges,
    });
  });
}
