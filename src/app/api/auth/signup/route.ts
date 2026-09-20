import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { SESSION_COOKIE, createSession } from "@/lib/session";

const CUTE_AVATARS = ["🌸", "🌷", "🌺", "🪷", "🍓", "🦋", "☁️", "🧸"];

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const year = Number(body.year ?? 1);
    const semester = Number(body.semester ?? 1);

    // ── gentle validation ──
    if (name.length < 2) {
      return Response.json(
        { error: "Please share your name (at least 2 letters) so we can cheer you on 💗" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "That email doesn't look quite right — check it and try again 💗" },
        { status: 400 }
      );
    }
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      return Response.json(
        { error: "Your password needs at least 8 characters, with a letter and a number 💗" },
        { status: 400 }
      );
    }
    if (!Number.isInteger(year) || year < 1 || year > 4) {
      return Response.json(
        { error: "Pick a starting year from Year 1 to Year 4 💗" },
        { status: 400 }
      );
    }
    if (semester !== 1 && semester !== 2) {
      return Response.json(
        { error: "Pick semester 1 or 2 💗" },
        { status: 400 }
      );
    }

    // ── uniqueness (case-insensitive, stored lowercase) ──
    const existing = await db.user.findUnique({ where: { email } });
    if (existing) {
      return Response.json(
        { error: "That email already has an account — try signing in instead 💗" },
        { status: 409 }
      );
    }

    // ── create the student ──
    const user = await db.user.create({
      data: {
        email,
        passwordHash: hashPassword(password),
        name,
        role: "STUDENT",
        avatar: CUTE_AVATARS[Math.floor(Math.random() * CUTE_AVATARS.length)],
        currentYear: year,
        currentSemester: semester,
        dailyTargetMin: 25,
        xp: 0,
        level: 1,
      },
    });

    // fresh session
    const token = await createSession(user.id);
    // record login on today's activity
    const today = new Date().toISOString().slice(0, 10);
    await db.dailyActivity
      .upsert({
        where: { userId_date: { userId: user.id, date: today } },
        update: { loginAt: new Date() },
        create: { userId: user.id, date: today, loginAt: new Date() },
      })
      .catch(() => {});
    // open a study session for this login
    await db.studySession.create({ data: { userId: user.id } }).catch(() => {});

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
    console.error("[signup]", e);
    return Response.json(
      { error: "We lost the connection for a moment. Your progress is safe 💗" },
      { status: 500 }
    );
  }
}
