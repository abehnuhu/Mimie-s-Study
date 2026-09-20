import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/session";

export async function GET(req: Request) {
  const user = await getSessionUser();
  if (!user) return Response.json({ results: { lessons: [], questions: [], flashcards: [], games: [] } });
  try {
    const q = new URL(req.url).searchParams.get("q")?.trim() ?? "";
    if (q.length < 2) {
      return Response.json({ results: { lessons: [], questions: [], flashcards: [], games: [] } });
    }

    const [lessons, questions, flashcards, games] = await Promise.all([
      db.lesson.findMany({
        where: {
          status: "PUBLISHED",
          OR: [
            { title: { contains: q } },
            { description: { contains: q } },
            { tags: { contains: q } },
          ],
        },
        take: 8,
        select: {
          id: true, title: true, description: true, durationMin: true, difficulty: true,
          module: { select: { course: { select: { title: true, slug: true } } } },
          progress: { where: { userId: user.id }, select: { status: true } },
        },
      }),
      db.question.findMany({
        where: { OR: [{ stem: { contains: q } }, { topic: { contains: q } }] },
        take: 6,
        select: { id: true, stem: true, topic: true, lessonId: true },
      }),
      db.flashcard.findMany({
        where: { OR: [{ front: { contains: q } }, { back: { contains: q } }, { topic: { contains: q } }] },
        take: 6,
        select: { id: true, front: true, back: true, topic: true, lessonId: true },
      }),
      db.game.findMany({
        where: { OR: [{ title: { contains: q } }, { description: { contains: q } }] },
        take: 4,
        select: { slug: true, title: true, description: true },
      }),
    ]);

    return Response.json({
      results: {
        lessons: lessons.map((l) => ({
          id: l.id,
          title: l.title,
          description: l.description,
          durationMin: l.durationMin,
          difficulty: l.difficulty,
          course: l.module.course.title,
          courseSlug: l.module.course.slug,
          status: l.progress[0]?.status ?? "NOT_STARTED",
        })),
        questions: questions.map((x) => ({ id: x.id, stem: x.stem, topic: x.topic, lessonId: x.lessonId })),
        flashcards: flashcards.map((f) => ({ id: f.id, front: f.front, back: f.back, topic: f.topic, lessonId: f.lessonId })),
        games: games.map((g) => ({ slug: g.slug, title: g.title, description: g.description })),
      },
    });
  } catch (e) {
    console.error("[search]", e);
    return Response.json({ results: { lessons: [], questions: [], flashcards: [], games: [] } });
  }
}
