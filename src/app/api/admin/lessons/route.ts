import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/** List lessons with filters for the admin table */
export async function GET(req: Request) {
  return withAdmin(req, async (_req) => {
    const url = new URL(_req.url);
    const courseSlug = url.searchParams.get("course") ?? null;
    const search = url.searchParams.get("q") ?? null;
    const lessons = await db.lesson.findMany({
      where: {
        ...(courseSlug ? { module: { course: { slug: courseSlug } } } : {}),
        ...(search ? { title: { contains: search } } : {}),
      },
      orderBy: [{ module: { course: { semester: { year: { number: "asc" } } } } }, { module: { course: { order: "asc" } } }, { module: { order: "asc" } }, { order: "asc" }],
      take: 400,
      include: {
        module: { select: { title: true, course: { select: { title: true, slug: true } } } },
        _count: { select: { questions: true, sections: true, flashcards: true } },
      },
    });
    return Response.json({
      lessons: lessons.map((l) => ({
        id: l.id,
        title: l.title,
        description: l.description,
        difficulty: l.difficulty,
        durationMin: l.durationMin,
        status: l.status,
        version: l.version,
        sourceStatus: l.sourceStatus,
        course: l.module.course.title,
        courseSlug: l.module.course.slug,
        moduleTitle: l.module.title,
        questionCount: l._count.questions,
        sectionCount: l._count.sections,
        updatedAt: l.updatedAt,
      })),
    });
  });
}

interface SectionInput {
  type?: string;
  title?: string | null;
  body?: string;
}

/** Create a lesson (draft or published) with sections */
export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const moduleId = String(body.moduleId ?? "");
    const title = String(body.title ?? "").trim();
    if (!moduleId || !title) {
      return Response.json({ error: "A lesson needs a module and a title 💗" }, { status: 400 });
    }
    const mod = await db.module.findUnique({ where: { id: moduleId }, select: { id: true } });
    if (!mod) return Response.json({ error: "Module not found 💗" }, { status: 404 });

    const sections = Array.isArray(body.sections) ? (body.sections as SectionInput[]) : [];
    const order = await db.lesson.count({ where: { moduleId } });

    const lesson = await db.lesson.create({
      data: {
        moduleId,
        title,
        description: body.description ? String(body.description).slice(0, 500) : null,
        difficulty: ["Easy", "Moderate", "Hard", "Clinical Reasoning"].includes(String(body.difficulty))
          ? String(body.difficulty)
          : "Easy",
        durationMin: Math.min(Math.max(Number(body.durationMin ?? 12) || 12, 5), 60),
        status: ["DRAFT", "PUBLISHED", "ARCHIVED"].includes(String(body.status)) ? String(body.status) : "DRAFT",
        objectives: JSON.stringify(Array.isArray(body.objectives) ? body.objectives.slice(0, 10) : []),
        tags: JSON.stringify(Array.isArray(body.tags) ? body.tags.slice(0, 6) : []),
        sourceStatus: ["CONFIRMED_GCU", "GCU_ALIGNED", "PROPOSED"].includes(String(body.sourceStatus))
          ? String(body.sourceStatus)
          : "PROPOSED",
        order,
        sections: {
          create: sections
            .filter((s) => (s.body ?? "").trim())
            .map((s, i) => ({
              type: ["text", "callout", "clinical_pearl", "memory_trick", "case", "table", "quiz_prompt", "summary"].includes(String(s.type))
                ? String(s.type)
                : "text",
              title: s.title ? String(s.title).slice(0, 200) : null,
              body: String(s.body).slice(0, 20000),
              order: i,
            })),
        },
      },
    });
    return Response.json({ ok: true, id: lesson.id });
  });
}
