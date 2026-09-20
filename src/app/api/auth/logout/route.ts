import { db } from "@/lib/db";
import { SESSION_COOKIE } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const token = cookieHeader
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith(`${SESSION_COOKIE}=`))
      ?.split("=")[1];
    if (token) {
      // close any open study session
      const session = await db.session.findUnique({ where: { token } });
      if (session) {
        const open = await db.studySession.findFirst({
          where: { userId: session.userId, endedAt: null },
          orderBy: { startedAt: "desc" },
        });
        if (open && Date.now() - open.startedAt.getTime() > 60000) {
          await db.studySession.update({
            where: { id: open.id },
            data: { endedAt: new Date() },
          });
        }
        await db.session.deleteMany({ where: { token } });
      }
    }
  } catch (e) {
    console.error("[logout]", e);
  }
  const res = Response.json({ ok: true });
  res.headers.append("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  return res;
}
