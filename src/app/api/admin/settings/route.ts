import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withAdmin(req, async () => {
    const [settings, messages, students] = await Promise.all([
      db.setting.findMany(),
      db.personalMessage.findMany({ orderBy: { id: "asc" } }),
      db.user.findMany({ where: { role: "STUDENT" }, select: { id: true, name: true, nickname: true, avatar: true, currentYear: true, currentSemester: true, dailyTargetMin: true } }),
    ]);
    const app = settings.find((s) => s.key === "app");
    return Response.json({
      settings: app ? JSON.parse(app.value) : {},
      messages,
      students,
    });
  });
}

export async function PUT(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    if (typeof body.settings === "object" && body.settings !== null) {
      const clean: Record<string, unknown> = {};
      if (typeof body.settings.tagline === "string") clean.tagline = body.settings.tagline.slice(0, 200);
      if (typeof body.settings.showSources === "boolean") clean.showSources = body.settings.showSources;
      if (typeof body.settings.maintenance === "boolean") clean.maintenance = body.settings.maintenance;
      const existing = await db.setting.findUnique({ where: { key: "app" } });
      const merged = existing ? { ...JSON.parse(existing.value), ...clean } : clean;
      await db.setting.upsert({
        where: { key: "app" },
        create: { key: "app", value: JSON.stringify(merged) },
        update: { value: JSON.stringify(merged) },
      });
    }
    return Response.json({ ok: true });
  });
}

/** Manage personal messages */
export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const action = String(body.action ?? "create");
    if (action === "create") {
      const text = String(body.text ?? "").trim();
      if (!text) return Response.json({ error: "Write the message first 💗" }, { status: 400 });
      await db.personalMessage.create({
        data: { text: text.slice(0, 200), tone: ["warm", "playful", "proud"].includes(String(body.tone)) ? String(body.tone) : "warm" },
      });
    } else if (action === "toggle" && body.id) {
      const msg = await db.personalMessage.findUnique({ where: { id: String(body.id) } });
      if (msg) await db.personalMessage.update({ where: { id: msg.id }, data: { active: !msg.active } });
    } else if (action === "delete" && body.id) {
      await db.personalMessage.delete({ where: { id: String(body.id) } }).catch(() => null);
    }
    return Response.json({ ok: true });
  });
}
