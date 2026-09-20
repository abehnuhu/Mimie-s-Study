import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const lessonId = new URL(_req.url).searchParams.get("lessonId");
    const notes = await db.note.findMany({
      where: { userId: user.id, ...(lessonId ? { lessonId } : {}) },
      include: { lesson: { select: { title: true } } },
      orderBy: { updatedAt: "desc" },
    });
    return Response.json({
      notes: notes.map((n) => ({
        id: n.id,
        lessonId: n.lessonId,
        lessonTitle: n.lesson.title,
        body: n.body,
        updatedAt: n.updatedAt,
      })),
    });
  });
}

export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const lessonId = String(body.lessonId ?? "");
    const text = String(body.body ?? "").slice(0, 4000);
    if (!lessonId || !text.trim()) {
      return Response.json({ error: "Write something first 💗" }, { status: 400 });
    }
    const lesson = await db.lesson.findUnique({ where: { id: lessonId }, select: { id: true } });
    if (!lesson) return Response.json({ error: "Lesson not found 💗" }, { status: 404 });
    const existing = await db.note.findFirst({ where: { userId: user.id, lessonId } });
    if (existing) {
      await db.note.update({ where: { id: existing.id }, data: { body: text } });
    } else {
      await db.note.create({ data: { userId: user.id, lessonId, body: text } });
    }
    return Response.json({ ok: true });
  });
}

export async function DELETE(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const id = new URL(_req.url).searchParams.get("id") ?? "";
    if (!id) return Response.json({ error: "Missing note 💗" }, { status: 400 });
    await db.note.deleteMany({ where: { id, userId: user.id } });
    return Response.json({ ok: true });
  });
}
