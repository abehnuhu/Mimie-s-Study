import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const [fresh] = await db.user.findMany({ where: { id: user.id }, take: 1 });
    if (!fresh) return Response.json({ error: "Profile not found 💗" }, { status: 404 });
    const [badges, earned, notes, bookmarks, examSetting] = await Promise.all([
      db.badge.findMany(),
      db.userBadge.findMany({ where: { userId: user.id }, include: { badge: true }, orderBy: { earnedAt: "desc" } }),
      db.note.findMany({
        where: { userId: user.id },
        include: { lesson: { select: { title: true } } },
        orderBy: { updatedAt: "desc" },
      }),
      db.bookmark.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
      db.setting.findUnique({ where: { key: "exam_date" } }),
    ]);
    const examDate =
      examSetting?.value && /^\d{4}-\d{2}-\d{2}$/.test(examSetting.value) ? examSetting.value : null;
    return Response.json({
      profile: {
        name: fresh.name,
        nickname: fresh.nickname,
        avatar: fresh.avatar,
        email: fresh.email,
        currentYear: fresh.currentYear,
        currentSemester: fresh.currentSemester,
        dailyTargetMin: fresh.dailyTargetMin,
        lessonLengthPref: fresh.lessonLengthPref,
        xp: fresh.xp,
        level: fresh.level,
        streak: fresh.streak,
        longestStreak: fresh.longestStreak,
        notifyBadges: fresh.notifyBadges,
        notifyReviews: fresh.notifyReviews,
        createdAt: fresh.createdAt,
      },
      badges: badges.map((b) => ({
        slug: b.slug,
        title: b.title,
        description: b.description,
        icon: b.icon,
        criteria: b.criteria,
        xp: b.xp,
        earned: earned.some((e) => e.badgeId === b.id),
        earnedAt: earned.find((e) => e.badgeId === b.id)?.earnedAt ?? null,
      })),
      notes: notes.map((n) => ({ id: n.id, lessonId: n.lessonId, lessonTitle: n.lesson.title, body: n.body, updatedAt: n.updatedAt })),
      bookmarkCount: bookmarks.length,
      examDate,
    });
  });
}

export async function PATCH(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const data: Record<string, unknown> = {};
    if (typeof body.nickname === "string") data.nickname = body.nickname.slice(0, 40);
    if (typeof body.avatar === "string") data.avatar = body.avatar.slice(0, 8);
    if (typeof body.dailyTargetMin === "number") data.dailyTargetMin = Math.min(Math.max(body.dailyTargetMin, 10), 120);
    if (typeof body.currentYear === "number") data.currentYear = Math.min(Math.max(body.currentYear, 1), 4);
    if (typeof body.currentSemester === "number") data.currentSemester = Math.min(Math.max(body.currentSemester, 1), 2);
    if (["short", "medium", "long"].includes(String(body.lessonLengthPref))) data.lessonLengthPref = String(body.lessonLengthPref);
    if (typeof body.notifyBadges === "boolean") data.notifyBadges = body.notifyBadges;
    if (typeof body.notifyReviews === "boolean") data.notifyReviews = body.notifyReviews;

    // exam date — stored as a Setting row (key "exam_date", ISO "YYYY-MM-DD"); null/"" clears it
    let examValue: string | null | undefined = undefined; // undefined = not touched by this request
    if (body.examDate !== undefined) {
      const v = body.examDate;
      if (v === null || v === "") {
        await db.setting.deleteMany({ where: { key: "exam_date" } });
        examValue = null;
      } else if (typeof v === "string" && isValidIsoDate(v)) {
        await db.setting.upsert({
          where: { key: "exam_date" },
          update: { value: v },
          create: { key: "exam_date", value: v },
        });
        examValue = v;
      } else {
        return Response.json({ error: "Exam date must be a valid YYYY-MM-DD date 💗" }, { status: 400 });
      }
    }

    if (Object.keys(data).length === 0 && examValue === undefined) {
      return Response.json({ error: "Nothing to update 💗" }, { status: 400 });
    }
    if (Object.keys(data).length > 0) {
      await db.user.update({ where: { id: user.id }, data });
    }
    return Response.json({ ok: true, ...(examValue !== undefined ? { examDate: examValue } : {}) });
  });
}

/** strict YYYY-MM-DD check — rejects rollover dates like 2026-02-30 */
function isValidIsoDate(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}
