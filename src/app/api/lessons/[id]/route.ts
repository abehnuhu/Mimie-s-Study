import { db } from "@/lib/db";
import { withUser, sanitizeQuestion, parseJsonArray } from "@/lib/api-helpers";

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return withUser(req, async (_req, { user }) => {
    const { id } = await ctx.params;
    const lesson = await db.lesson.findUnique({
      where: { id },
      include: {
        module: { select: { id: true, title: true, course: { select: { slug: true, title: true, icon: true, semester: { select: { year: { select: { number: true } }, number: true } } } } } },
        sections: { orderBy: { order: "asc" } },
        sources: true,
        flashcards: true,
        questions: { orderBy: { createdAt: "asc" } },
        progress: { where: { userId: user.id } },
        notes: { where: { userId: user.id } },
        _count: { select: { notes: true } },
      },
    });
    if (!lesson || lesson.status !== "PUBLISHED") {
      return Response.json({ error: "This lesson isn't available yet 💗" }, { status: 404 });
    }

    // neighbours in the same module
    const siblings = await db.lesson.findMany({
      where: { moduleId: lesson.moduleId, status: "PUBLISHED" },
      orderBy: { order: "asc" },
      select: { id: true, title: true },
    });
    const idx = siblings.findIndex((s) => s.id === lesson.id);

    const note = lesson.notes[0];

    return Response.json({
      lesson: {
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        difficulty: lesson.difficulty,
        durationMin: lesson.durationMin,
        objectives: parseJsonArray(lesson.objectives),
        tags: parseJsonArray(lesson.tags),
        sourceStatus: lesson.sourceStatus,
        version: lesson.version,
        course: {
          slug: lesson.module.course.slug,
          title: lesson.module.course.title,
          icon: lesson.module.course.icon,
          year: lesson.module.course.semester.year.number,
          semester: lesson.module.course.semester.number,
        },
        moduleTitle: lesson.module.title,
      },
      sections: lesson.sections.map((s) => ({ id: s.id, type: s.type, title: s.title, body: s.body })),
      sources: lesson.sources.map((s) => ({
        id: s.id,
        organization: s.organization,
        title: s.title,
        year: s.year,
        url: s.url,
        note: s.note,
      })),
      flashcards: lesson.flashcards.map((f) => ({ id: f.id, topic: f.topic, front: f.front, back: f.back })),
      questions: lesson.questions.map(sanitizeQuestion),
      progress: lesson.progress[0]
        ? { status: lesson.progress[0].status, timeSpentSec: lesson.progress[0].timeSpentSec }
        : { status: "NOT_STARTED", timeSpentSec: 0 },
      note: note ? { id: note.id, body: note.body } : null,
      bookmarked: !!(await db.bookmark.findUnique({
        where: { userId_itemType_itemId: { userId: user.id, itemType: "lesson", itemId: lesson.id } },
      })),
      neighbours: {
        prev: idx > 0 ? siblings[idx - 1] : null,
        next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
      },
    });
  });
}
