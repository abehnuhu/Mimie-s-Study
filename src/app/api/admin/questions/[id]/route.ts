import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const existing = await db.question.findUnique({ where: { id } });
    if (!existing) return Response.json({ error: "Question not found 💗" }, { status: 404 });
    const data: Record<string, unknown> = {};
    if (typeof body.stem === "string" && body.stem.trim()) data.stem = body.stem.slice(0, 1000);
    if (typeof body.topic === "string" && body.topic.trim()) data.topic = body.topic.slice(0, 80);
    if (typeof body.difficulty === "string" && ["Easy", "Moderate", "Hard", "Clinical Reasoning"].includes(body.difficulty)) data.difficulty = body.difficulty;
    if (Array.isArray(body.options) && body.options.length >= 2) data.options = JSON.stringify(body.options.map((o: unknown) => String(o)));
    if (Number.isInteger(body.correctIndex)) data.correctIndex = Number(body.correctIndex);
    if (Array.isArray(body.correctIndexes)) data.correctIndexes = JSON.stringify(body.correctIndexes);
    if (typeof body.explanation === "string") data.explanation = body.explanation.slice(0, 4000);
    if (body.whyOthers && typeof body.whyOthers === "object") data.whyOthers = JSON.stringify(body.whyOthers);
    if (Object.keys(data).length === 0) return Response.json({ error: "Nothing to update 💗" }, { status: 400 });
    await db.question.update({ where: { id }, data });
    return Response.json({ ok: true });
  });
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await db.question.delete({ where: { id } }).catch(() => null);
    return Response.json({ ok: true });
  });
}
