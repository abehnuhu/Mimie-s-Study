import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { todayKey } from "@/lib/gamify";

/** Client heartbeats every ~30s while a lesson/quiz/game is open and focused. */
export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const seconds = Math.min(Math.max(Number(body.seconds ?? 0) || 0, 0), 120);
    const lessonId = body.lessonId ? String(body.lessonId) : null;
    if (seconds < 5) return Response.json({ ok: true });

    // mark lesson in progress
    if (lessonId) {
      const existing = await db.lessonProgress.findUnique({
        where: { userId_lessonId: { userId: user.id, lessonId } },
      });
      if (existing?.status !== "COMPLETED") {
        await db.lessonProgress.upsert({
          where: { userId_lessonId: { userId: user.id, lessonId } },
          create: { userId: user.id, lessonId, status: "IN_PROGRESS", timeSpentSec: seconds },
          update: { status: "IN_PROGRESS", timeSpentSec: { increment: seconds } },
        });
      }
    }

    // extend open study session
    const open = await db.studySession.findFirst({
      where: { userId: user.id, endedAt: null },
      orderBy: { startedAt: "desc" },
    });
    const session = open ?? (await db.studySession.create({ data: { userId: user.id } }));
    const newSec = session.durationSec + seconds;
    const newMinutes = Math.floor(newSec / 60);

    await db.studySession.update({ where: { id: session.id }, data: { durationSec: newSec } });

    const today = todayKey();
    const existing = await db.dailyActivity.findUnique({
      where: { userId_date: { userId: user.id, date: today } },
    });
    const extraMinutes = Math.max(0, newMinutes - (existing?.minutes ?? 0));
    if (extraMinutes > 0) {
      await db.dailyActivity.upsert({
        where: { userId_date: { userId: user.id, date: today } },
        create: { userId: user.id, date: today, loginAt: new Date(), minutes: extraMinutes },
        update: { minutes: { increment: extraMinutes } },
      });
      await db.user.update({
        where: { id: user.id },
        data: { lastStudyDate: new Date(), streak: Math.max(1, user.streak || 1) },
      });
    }

    return Response.json({ ok: true });
  });
}
