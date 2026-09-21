import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

/**
 * Master switch — background music on/off for the whole site
 * (without deleting the tracks).
 */
export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    if (typeof body.enabled !== "boolean") {
      return Response.json({ error: "Tell me on or off 💗" }, { status: 400 });
    }
    await db.musicSetting.upsert({
      where: { id: "global" },
      create: { id: "global", enabled: body.enabled },
      update: { enabled: body.enabled },
    });
    return Response.json({ ok: true, enabled: body.enabled });
  });
}
