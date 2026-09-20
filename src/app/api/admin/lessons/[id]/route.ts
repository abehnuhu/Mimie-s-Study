import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

interface SectionInput {
  id?: string;
  type?: string;
  title?: string | null;
  body?: string;
}

/** Get one lesson for editing (full detail incl. questions) */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const lesson = await db.lesson.findUnique({
      where: { id },
      include: {
        module: { select: { id: true, title: true, course: { select: { slug: true, title: true } } } },
        sections: { orderBy: { order: "asc" } },
        questions: { orderBy: { createdAt: "asc" } },
        flashcards: true,
        sources: true,
      },
    });
    if (!lesson) return Response.json({ error: "Lesson not found 💗" }, { status: 404 });
    return Response.json({
      lesson: {
        id: lesson.id,
        moduleId: lesson.moduleId,
        moduleTitle: lesson.module.title,
        courseSlug: lesson.module.course.slug,
        course: lesson.module.course.title,
        title: lesson.title,
        description: lesson.description,
        difficulty: lesson.difficulty,
        durationMin: lesson.durationMin,
        status: lesson.status,
        version: lesson.version,
        sourceStatus: lesson.sourceStatus,
        objectives: JSON.parse(lesson.objectives ?? "[]"),
        tags: JSON.parse(lesson.tags ?? "[]"),
        sections: lesson.sections.map((s) => ({ id: s.id, type: s.type, title: s.title, body: s.body })),
        flashcards: lesson.flashcards.map((f) => ({ id: f.id, front: f.front, back: f.back, topic: f.topic })),
        sources: lesson.sources.map((s) => ({ id: s.id, organization: s.organization, title: s.title, year: s.year, url: s.url, note: s.note })),
      },
    });
  });
}

/** Full update: replaces sections, bumps version */
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const existing = await db.lesson.findUnique({ where: { id } });
    if (!existing) return Response.json({ error: "Lesson not found 💗" }, { status: 404 });

    const data: Record<string, unknown> = { version: { increment: 1 } };
    if (typeof body.title === "string" && body.title.trim()) data.title = body.title.trim().slice(0, 200);
    if (typeof body.description === "string") data.description = body.description.slice(0, 500);
    if (typeof body.difficulty === "string" && ["Easy", "Moderate", "Hard", "Clinical Reasoning"].includes(body.difficulty)) data.difficulty = body.difficulty;
    if (typeof body.durationMin === "number") data.durationMin = Math.min(Math.max(body.durationMin, 5), 60);
    if (typeof body.status === "string" && ["DRAFT", "PUBLISHED", "ARCHIVED"].includes(body.status)) data.status = body.status;
    if (typeof body.sourceStatus === "string" && ["CONFIRMED_GCU", "GCU_ALIGNED", "PROPOSED"].includes(body.sourceStatus)) data.sourceStatus = body.sourceStatus;
    if (Array.isArray(body.objectives)) data.objectives = JSON.stringify(body.objectives.slice(0, 10));
    if (Array.isArray(body.tags)) data.tags = JSON.stringify(body.tags.slice(0, 6));
    if (body.status === "PUBLISHED" && existing.status !== "PUBLISHED") data.reviewDate = new Date();

    await db.lesson.update({ where: { id }, data });

    if (Array.isArray(body.sections)) {
      const sections = (body.sections as SectionInput[]).filter((s) => (s.body ?? "").trim());
      await db.lessonSection.deleteMany({ where: { lessonId: id } });
      for (const [i, s] of sections.entries()) {
        await db.lessonSection.create({
          data: {
            lessonId: id,
            type: ["text", "callout", "clinical_pearl", "memory_trick", "case", "table", "quiz_prompt", "summary"].includes(String(s.type))
              ? String(s.type)
              : "text",
            title: s.title ? String(s.title).slice(0, 200) : null,
            body: String(s.body).slice(0, 20000),
            order: i,
          },
        });
      }
    }
    return Response.json({ ok: true });
  });
}

/** Quick status change (publish / unpublish / archive) */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const status = String(body.status ?? "");
    if (!["DRAFT", "PUBLISHED", "ARCHIVED"].includes(status)) {
      return Response.json({ error: "Unknown status 💗" }, { status: 400 });
    }
    await db.lesson.update({
      where: { id },
      data: { status, version: { increment: 1 }, ...(status === "PUBLISHED" ? { reviewDate: new Date() } : {}) },
    });
    return Response.json({ ok: true });
  });
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await db.lesson.delete({ where: { id } }).catch(() => null);
    return Response.json({ ok: true });
  });
}
