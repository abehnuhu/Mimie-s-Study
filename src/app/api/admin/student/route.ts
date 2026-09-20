import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/** Admin edits the student profile (name, nickname, year, semester, target). */
export async function PATCH(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const students = await db.user.findMany({ where: { role: "STUDENT" } });
    const mimie = students[0];
    if (!mimie) return Response.json({ error: "No student account 💗" }, { status: 404 });
    const data: Record<string, unknown> = {};
    if (typeof body.name === "string" && body.name.trim()) data.name = body.name.trim().slice(0, 60);
    if (typeof body.nickname === "string") data.nickname = body.nickname.slice(0, 40);
    if (typeof body.avatar === "string") data.avatar = body.avatar.slice(0, 8);
    if (typeof body.currentYear === "number") data.currentYear = Math.min(Math.max(body.currentYear, 1), 4);
    if (typeof body.currentSemester === "number") data.currentSemester = Math.min(Math.max(body.currentSemester, 1), 2);
    if (typeof body.dailyTargetMin === "number") data.dailyTargetMin = Math.min(Math.max(body.dailyTargetMin, 10), 120);
    if (Object.keys(data).length === 0) return Response.json({ error: "Nothing to update 💗" }, { status: 400 });
    await db.user.update({ where: { id: mimie.id }, data });
    return Response.json({ ok: true });
  });
}
