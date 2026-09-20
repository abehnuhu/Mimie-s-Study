import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withAdmin(req, async (_req) => {
    const url = new URL(_req.url);
    const courseSlug = url.searchParams.get("course") ?? null;
    const topic = url.searchParams.get("topic") ?? null;
    const questions = await db.question.findMany({
      where: {
        ...(courseSlug ? { course: { slug: courseSlug } } : {}),
        ...(topic ? { topic: { contains: topic } } : {}),
      },
      orderBy: { createdAt: "desc" },
      take: 300,
      include: { lesson: { select: { title: true } }, course: { select: { title: true } } },
    });
    return Response.json({
      questions: questions.map((q) => ({
        id: q.id,
        topic: q.topic,
        type: q.type,
        difficulty: q.difficulty,
        stem: q.stem,
        options: JSON.parse(q.options),
        correctIndex: q.correctIndex,
        correctIndexes: q.correctIndexes ? JSON.parse(q.correctIndexes) : null,
        explanation: q.explanation,
        lesson: q.lesson?.title ?? null,
        course: q.course?.title ?? null,
      })),
    });
  });
}

export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const stem = String(body.stem ?? "").trim();
    const options = Array.isArray(body.options) ? body.options.map((o: unknown) => String(o)) : [];
    const type = String(body.type ?? "MCQ");
    if (!stem || options.length < 2) {
      return Response.json({ error: "A question needs a stem and at least two options 💗" }, { status: 400 });
    }
    const correctIndex = Number.isInteger(body.correctIndex) ? Number(body.correctIndex) : null;
    if ((type === "MCQ" || type === "TRUE_FALSE" || type === "CLINICAL_SCENARIO") && (correctIndex === null || correctIndex < 0 || correctIndex >= options.length)) {
      return Response.json({ error: "Pick the correct answer 💗" }, { status: 400 });
    }
    const question = await db.question.create({
      data: {
        topic: String(body.topic ?? "General").slice(0, 80),
        type,
        difficulty: ["Easy", "Moderate", "Hard", "Clinical Reasoning"].includes(String(body.difficulty))
          ? String(body.difficulty)
          : "Moderate",
        stem: stem.slice(0, 1000),
        options: JSON.stringify(options),
        correctIndex,
        correctIndexes: Array.isArray(body.correctIndexes) ? JSON.stringify(body.correctIndexes) : null,
        explanation: String(body.explanation ?? "").slice(0, 4000),
        whyOthers: body.whyOthers && typeof body.whyOthers === "object" ? JSON.stringify(body.whyOthers) : null,
        lessonId: body.lessonId ? String(body.lessonId) : null,
        courseId: body.courseId ? String(body.courseId) : null,
      },
    });
    return Response.json({ ok: true, id: question.id });
  });
}
