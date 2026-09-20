import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

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
                progress: { where: { userId: user.id }, select: { status: true, completedAt: true } },
                _count: { select: { questions: true, flashcards: true } },
              },
            },
          },
        },
      },
    });
    if (!course) return Response.json({ error: "Course not found 💗" }, { status: 404 });

    const lessons = course.modules.flatMap((m) => m.lessons);
    const completed = lessons.filter((l) => l.progress.some((p) => p.status === "COMPLETED")).length;

    return Response.json({
      course: {
        id: course.id,
        title: course.title,
        slug: course.slug,
        description: course.description,
        icon: course.icon,
        year: course.semester.year.number,
        semester: course.semester.number,
        phase: course.semester.phase,
        sourceStatus: "GCU_ALIGNED",
      },
      modules: course.modules.map((m) => ({
        id: m.id,
        title: m.title,
        lessons: m.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          description: l.description,
          difficulty: l.difficulty,
          durationMin: l.durationMin,
          sourceStatus: l.sourceStatus,
          questionCount: l._count.questions,
          flashcardCount: l._count.flashcards,
          status: l.progress[0]?.status ?? "NOT_STARTED",
        })),
      })),
      stats: {
        lessonCount: lessons.length,
        completed,
        progressPct: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
        minutes: lessons.reduce((s, l) => s + l.durationMin, 0),
      },
    });
  });
}
