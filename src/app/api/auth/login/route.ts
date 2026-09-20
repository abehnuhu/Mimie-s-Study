import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";
import { SESSION_COOKIE, createSession, destroySession } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    if (!email || !password) {
      return Response.json({ error: "Please enter your email and password 💗" }, { status: 400 });
    }
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return Response.json({ error: "That email and password don't match. Try again 💗" }, { status: 401 });
    }
    // admin accounts are only reachable through the staff entrance
    if (user.role === "ADMIN") {
      return Response.json(
        { error: "Admin accounts sign in through the staff entrance 💗" },
        { status: 403 }
      );
    }
    // fresh session
    const token = await createSession(user.id);
    // record login on today's activity
    const today = new Date().toISOString().slice(0, 10);
    const existing = await db.dailyActivity.findUnique({
      where: { userId_date: { userId: user.id, date: today } },
    });
    if (existing) {
      await db.dailyActivity.update({
        where: { id: existing.id },
        data: { loginAt: new Date() },
      });
    } else {
      await db.dailyActivity.create({
        data: { userId: user.id, date: today, loginAt: new Date() },
      });
    }
    // open a study session for this login
    await db.studySession.create({ data: { userId: user.id } });

    const res = Response.json({
      ok: true,
      user: { id: user.id, name: user.name, role: user.role, avatar: user.avatar },
    });
    res.headers.append(
      "Set-Cookie",
      `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`
    );
    return res;
  } catch (e) {
    console.error("[login]", e);
    return Response.json({ error: "We lost the connection for a moment. Your progress is safe 💗" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const cookieHeader = req.headers.get("cookie") ?? "";
  const token = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${SESSION_COOKIE}=`))
    ?.split("=")[1];
  if (token) await destroySession(token).catch(() => {});
  const res = Response.json({ ok: true });
  res.headers.append("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  return res;
}
