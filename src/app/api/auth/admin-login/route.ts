import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";
import { SESSION_COOKIE, createSession } from "@/lib/session";

/**
 * The ONLY way an ADMIN session is created.
 * Requires valid admin credentials + the owner's ADMIN_ACCESS_KEY.
 * (The normal login route rejects admin-role users with 403.)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const adminKey = String(body.adminKey ?? "");

    if (!email || !password || !adminKey) {
      return Response.json(
        { error: "Please fill in your email, password and admin key 💗" },
        { status: 400 }
      );
    }

    const expectedKey = process.env.ADMIN_ACCESS_KEY ?? "mimie-admin-2026";
    const user = await db.user.findUnique({ where: { email } });

    // one shared message — never reveal which check failed
    if (
      adminKey !== expectedKey ||
      !user ||
      !verifyPassword(password, user.passwordHash) ||
      user.role !== "ADMIN"
    ) {
      return Response.json(
        { error: "That email and password don't match an admin account 💗" },
        { status: 401 }
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
    console.error("[admin-login]", e);
    return Response.json(
      { error: "We lost the connection for a moment. Your progress is safe 💗" },
      { status: 500 }
    );
  }
}
