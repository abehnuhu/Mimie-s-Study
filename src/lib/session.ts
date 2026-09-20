import { cookies } from "next/headers";
import { randomBytes } from "crypto";
import { db } from "@/lib/db";

export const SESSION_COOKIE = "ms_session";
const SESSION_DAYS = 30;

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: string;
  nickname: string | null;
  avatar: string;
  currentYear: number;
  currentSemester: number;
  dailyTargetMin: number;
  lessonLengthPref: string;
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  notifyBadges: boolean;
  notifyReviews: boolean;
}

export async function createSession(userId: string): Promise<string> {
  const token = randomToken();
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await db.session.create({ data: { token, userId, expiresAt } });
  return token;
}

export async function destroySession(token: string) {
  await db.session.deleteMany({ where: { token } });
}

function randomToken(): string {
  const bytes = randomBytes(32);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Returns the logged-in user or null. Safe to call in any API route. */
export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const store = await cookies();
    const token = store.get(SESSION_COOKIE)?.value;
    if (!token) return null;
    const session = await db.session.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!session) return null;
    if (session.expiresAt < new Date()) {
      await db.session.delete({ where: { id: session.id } }).catch(() => {});
      return null;
    }
    const u = session.user;
    return {
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role,
      nickname: u.nickname,
      avatar: u.avatar,
      currentYear: u.currentYear,
      currentSemester: u.currentSemester,
      dailyTargetMin: u.dailyTargetMin,
      lessonLengthPref: u.lessonLengthPref,
      xp: u.xp,
      level: u.level,
      streak: u.streak,
      longestStreak: u.longestStreak,
      notifyBadges: u.notifyBadges,
      notifyReviews: u.notifyReviews,
    };
  } catch {
    return null;
  }
}

export function jsonError(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export function unauthorized() {
  return jsonError("Please sign in to continue 💗", 401);
}

export function forbidden() {
  return jsonError("This area is reserved for the admin 💗", 403);
}
