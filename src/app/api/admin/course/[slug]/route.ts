import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/** Course analytics for admin. */
export async function GET(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  return withAdmin(req, async () => {
    const students = await db.user.findMany({ where: { role: "STUDENT" } });
    const mimie = students[0];
    const course = await db.course.findUnique({
      where: { slug },
      include: {
        semester: { include: { year: true } },
        modules: {
          include: {
            lessons: {
              where: { status: "PUBLISHED" },
              include: {
                progress: mimie ? { where: { userId: mimie.id } } : undefined,
                questions: { select: { topic: true, answers: mimie ? { where: { attempt: { userId: mimie.id } } } : undefined } },
              },
            },
          },
        },
      },
    });
    if (!course) return Response.json({ error: "Course not found 💗" }, { status: 404 });

    const lessons = course.modules.flatMap((m) => m.lessons);
    const completed = lessons.filter((l) => l.progress?.some((p) => p.status === "COMPLETED")).length;

    // quiz accuracy by topic within this course
    const topicMap = new Map<string, { total: number; correct: number }>();
    for (const lesson of lessons) {
      for (const q of lesson.questions) {
        for (const a of q.answers) {
          const cur = topicMap.get(q.topic) ?? { total: 0, correct: 0 };
          cur.total += 1;
          if (a.correct) cur.correct += 1;
          topicMap.set(q.topic, cur);
        }
      }
    }
    const topics = Array.from(topicMap.entries())
      .map(([topic, v]) => ({ topic, accuracy: v.total ? Math.round((v.correct / v.total) * 100) : 0, total: v.total }))
      .sort((a, b) => a.accuracy - b.accuracy);

    const questionCount = lessons.reduce((s, l) => s + l.questions.length, 0);
    const totalAnswers = Array.from(topicMap.values()).reduce((s, v) => s + v.total, 0);
    const totalCorrect = Array.from(topicMap.values()).reduce((s, v) => s + v.correct, 0);

    const timeSpent = lessons.reduce((s, l) => s + (l.progress?.[0]?.timeSpentSec ?? 0), 0);
    const lastStudied = lessons.reduce<Date | null>((m, l) => {
      const c = l.progress?.[0]?.completedAt ?? null;
      return c && (!m || c > m) ? c : m;
    }, null);

    return Response.json({
      course: { title: course.title, slug: course.slug, year: course.semester.year.number, semester: course.semester.number },
      stats: {
        lessonCount: lessons.length,
        completed,
        progressPct: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
        questionCount,
        quizAnswers: totalAnswers,
        quizAccuracy: totalAnswers ? Math.round((totalCorrect / totalAnswers) * 100) : null,
        minutes: Math.round(timeSpent / 60),
        lastStudied,
      },
      strongTopics: topics.filter((t) => t.accuracy >= 70).slice(-3).reverse(),
      weakTopics: topics.filter((t) => t.accuracy < 70).slice(0, 3),
    });
  });
}
