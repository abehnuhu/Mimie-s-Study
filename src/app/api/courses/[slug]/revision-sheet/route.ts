import { db } from "@/lib/db";
import { withUser, parseJsonArray } from "@/lib/api-helpers";

const SHEET_SECTION_TYPES = ["clinical_pearl", "memory_trick", "summary"] as const;

export async function GET(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  return withUser(req, async (_req, { user }) => {
    const { slug } = await ctx.params;
    const course = await db.course.findUnique({
      where: { slug },
      include: {
        semester: { include: { year: true } },
        modules: {
          orderBy: { order: "asc" },
          include: {
            lessons: {
              where: { status: "PUBLISHED" },
              orderBy: { order: "asc" },
              include: {
                progress: { where: { userId: user.id }, select: { status: true } },
                sections: {
                  where: { type: { in: [...SHEET_SECTION_TYPES] } },
                  orderBy: { order: "asc" },
                  select: { type: true, body: true },
                },
                flashcards: { select: { topic: true, front: true, back: true } },
                _count: { select: { questions: true } },
              },
            },
          },
        },
      },
    });
    if (!course) return Response.json({ error: "Course not found 💗" }, { status: 404 });

    const modules = course.modules
      .filter((m) => m.lessons.length > 0)
      .map((m) => ({
        title: m.title,
        lessons: m.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          difficulty: l.difficulty,
          durationMin: l.durationMin,
          sourceStatus: l.sourceStatus,
          completed: l.progress.some((p) => p.status === "COMPLETED"),
          objectives: parseJsonArray(l.objectives),
          tags: parseJsonArray(l.tags),
          pearls: l.sections
            .filter((s) => s.type === "clinical_pearl")
            .map((s) => s.body.trim())
            .filter(Boolean),
          memoryTricks: l.sections
            .filter((s) => s.type === "memory_trick")
            .map((s) => s.body.trim())
            .filter(Boolean),
          summary: l.sections.find((s) => s.type === "summary")?.body.trim() || null,
          flashcards: l.flashcards.map((f) => ({ topic: f.topic, front: f.front, back: f.back })),
        })),
      }));

    const lessons = course.modules.flatMap((m) => m.lessons);

    return Response.json({
      course: {
        title: course.title,
        slug: course.slug,
        description: course.description,
        icon: course.icon,
        year: course.semester.year.number,
        semester: course.semester.number,
      },
      stats: {
        lessonCount: lessons.length,
        completed: lessons.filter((l) => l.progress.some((p) => p.status === "COMPLETED")).length,
        minutes: lessons.reduce((sum, l) => sum + l.durationMin, 0),
        questionCount: lessons.reduce((sum, l) => sum + l._count.questions, 0),
        flashcardCount: lessons.reduce((sum, l) => sum + l.flashcards.length, 0),
      },
      generatedAt: new Date().toISOString(),
      modules,
    });
  });
}
