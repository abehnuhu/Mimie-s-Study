import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { recordActivity, checkAndAwardBadges } from "@/lib/gamify";

/** Flashcard deck: all cards, optionally filtered by course. */
export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const courseSlug = new URL(_req.url).searchParams.get("course");
    const flashcards = await db.flashcard.findMany({
      where: {
        ...(courseSlug ? { lesson: { module: { course: { slug: courseSlug } } } } : {}),
        lesson: { status: "PUBLISHED" },
      },
      orderBy: [{ lessonId: "asc" }, { topic: "asc" }],
      include: {
        lesson: {
          where: { status: "PUBLISHED" },
          select: {
            id: true, title: true,
            module: { select: { course: { select: { slug: true, title: true } } } },
          },
        },
      },
    });

    // group counts per course for the hub chips
    const byCourse = new Map<string, { title: string; count: number }>();
    for (const f of flashcards) {
      if (!f.lesson) continue;
      const slug = f.lesson.module.course.slug;
      const entry = byCourse.get(slug) ?? { title: f.lesson.module.course.title, count: 0 };
      entry.count += 1;
      byCourse.set(slug, entry);
    }

    return Response.json({
      total: flashcards.length,
      courses: Array.from(byCourse.entries())
        .map(([slug, v]) => ({ slug, title: v.title, count: v.count }))
        .sort((a, b) => b.count - a.count),
      cards: flashcards
        .filter((f) => f.lesson)
        .map((f) => ({
          id: f.id,
          topic: f.topic,
          front: f.front,
          back: f.back,
          lessonId: f.lesson!.id,
          lessonTitle: f.lesson!.title,
          course: f.lesson!.module.course.title,
          courseSlug: f.lesson!.module.course.slug,
        })),
    });
  });
}

/** Record a cram session: XP for effort + mastery of cards marked "known". */
export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const seen = Math.min(Math.max(Number(body.seen ?? 0) || 0, 0), 200);
    const known = Math.min(Math.max(Number(body.known ?? 0) || 0, 0), seen);
    const timeSec = Math.min(Math.max(Number(body.timeSec ?? 0) || 0, 0), 3600);
    if (seen === 0) return Response.json({ error: "Nothing to record 💗" }, { status: 400 });

    // 3 XP per card seen + 2 bonus per known card — gentle, effort-based
    const xpGained = seen * 3 + known * 2;
    const activity = await recordActivity(user.id, {
      minutes: Math.max(1, Math.round(timeSec / 60)),
      xpGained,
      topics: Array.isArray(body.topics) ? body.topics.slice(0, 6).map(String) : [],
    });
    const newBadges = await checkAndAwardBadges(user.id);

    return Response.json({
      ok: true,
      seen,
      known,
      xpGained,
      leveledUp: activity.leveledUp,
      newLevel: activity.newLevel,
      streak: activity.streak,
      newBadges,
    });
  });
}
