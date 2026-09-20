import { db } from "@/lib/db";
import { getSessionUser, type SessionUser } from "@/lib/session";

export type ApiHandler = (
  req: Request,
  ctx: { user: SessionUser }
) => Promise<Response>;

/** Wrap an API route so it only runs for a signed-in user. */
export async function withUser(
  req: Request,
  handler: ApiHandler
): Promise<Response> {
  const user = await getSessionUser();
  if (!user) {
    return Response.json({ error: "Please sign in to continue 💗" }, { status: 401 });
  }
  try {
    return await handler(req, { user });
  } catch (e) {
    console.error("[api]", e);
    return Response.json(
      { error: "Something went soft in the background — your progress is safe. Try again 💗" },
      { status: 500 }
    );
  }
}

/** Wrap an API route so it only runs for the admin. */
export async function withAdmin(
  req: Request,
  handler: ApiHandler
): Promise<Response> {
  const user = await getSessionUser();
  if (!user) {
    return Response.json({ error: "Please sign in 💗" }, { status: 401 });
  }
  if (user.role !== "ADMIN") {
    return Response.json(
      { error: "This area is reserved for the admin 💗" },
      { status: 403 }
    );
  }
  try {
    return await handler(req, { user });
  } catch (e) {
    console.error("[api-admin]", e);
    return Response.json({ error: "Admin action failed" }, { status: 500 });
  }
}

/** Question without answers — safe to send to the student. */
export interface SafeQuestion {
  id: string;
  topic: string;
  type: string;
  difficulty: string;
  stem: string;
  options: string[];
  lessonId: string | null;
}

export function sanitizeQuestion(q: {
  id: string;
  topic: string;
  type: string;
  difficulty: string;
  stem: string;
  options: string;
  lessonId: string | null;
}): SafeQuestion {
  let options: string[] = [];
  try {
    options = JSON.parse(q.options);
  } catch {
    options = [];
  }
  return {
    id: q.id,
    topic: q.topic,
    type: q.type,
    difficulty: q.difficulty,
    stem: q.stem,
    options,
    lessonId: q.lessonId,
  };
}

export function parseJsonArray(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const v = JSON.parse(value);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function parseJsonMap(value: string | null | undefined): Record<string, string> {
  if (!value) return {};
  try {
    const v = JSON.parse(value);
    return typeof v === "object" && v !== null ? (v as Record<string, string>) : {};
  } catch {
    return {};
  }
}

// ── shared query builders ────────────────────────────────────

export interface CourseSummary {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  icon: string | null;
  lessonCount: number;
  completedCount: number;
  questionCount: number;
  minutes: number;
  year: number;
  semester: number;
}

export async function getCourseSummaries(userId: string): Promise<CourseSummary[]> {
  const courses = await db.course.findMany({
    orderBy: [{ semester: { year: { number: "asc" } } }, { semester: { number: "asc" } }, { order: "asc" }],
    include: {
      semester: { include: { year: true } },
      modules: {
        include: {
          lessons: {
            where: { status: "PUBLISHED" },
            include: { progress: { where: { userId }, select: { status: true } },
              _count: { select: { questions: true } } },
          },
        },
      },
    },
  });
  return courses.map((c) => {
    const lessons = c.modules.flatMap((m) => m.lessons);
    return {
      id: c.id,
      title: c.title,
      slug: c.slug,
      description: c.description,
      icon: c.icon,
      lessonCount: lessons.length,
      completedCount: lessons.filter((l) =>
        l.progress.some((p) => p.status === "COMPLETED")
      ).length,
      questionCount: lessons.reduce((sum, l) => sum + l._count.questions, 0),
      minutes: lessons.reduce((sum, l) => sum + l.durationMin, 0),
      year: c.semester.year.number,
      semester: c.semester.number,
    };
  });
}

/** accuracy per topic across the student's quiz answers */
export async function getTopicAccuracy(userId: string): Promise<
  { topic: string; total: number; correct: number; accuracy: number }[]
> {
  const rows = await db.quizAnswer.groupBy({
    by: ["questionId"],
    where: { attempt: { userId } },
    _count: { _all: true },
  }).catch(() => [] as { questionId: string; _count: { _all: number } }[]);
  if (rows.length === 0) return [];
  const answers = await db.quizAnswer.findMany({
    where: { attempt: { userId } },
    select: { correct: true, question: { select: { topic: true } } },
  });
  const map = new Map<string, { total: number; correct: number }>();
  for (const a of answers) {
    const t = a.question.topic;
    const cur = map.get(t) ?? { total: 0, correct: 0 };
    cur.total += 1;
    if (a.correct) cur.correct += 1;
    map.set(t, cur);
  }
  return Array.from(map.entries())
    .map(([topic, v]) => ({
      topic,
      total: v.total,
      correct: v.correct,
      accuracy: v.total ? Math.round((v.correct / v.total) * 100) : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export function timeGreeting(name: string): { greeting: string; sub: string } {
  const h = new Date().getHours();
  if (h < 5) return { greeting: `Still awake, ${name}?`, sub: "A gentle session before sleep 💗" };
  if (h < 12) return { greeting: `Good morning, ${name} 💗`, sub: "A fresh brain is a learning brain." };
  if (h < 17) return { greeting: `Good afternoon, ${name} 💗`, sub: "Ready for today's little win?" };
  if (h < 21) return { greeting: `Good evening, ${name} 💗`, sub: "Let's make today count, gently." };
  return { greeting: `Good evening, ${name} 💗`, sub: "Wind down with a calm review." };
}
