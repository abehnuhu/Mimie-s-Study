import { db } from "@/lib/db";
import { withUser, sanitizeQuestion, getTopicAccuracy } from "@/lib/api-helpers";
import type { Prisma } from "@prisma/client";

const MODES = ["QUICK", "TIMED", "WEAK", "MIXED", "EXAM"] as const;
const DEFAULT_COUNTS: Record<string, number> = {
  QUICK: 10,
  TIMED: 20,
  WEAK: 10,
  MIXED: 20,
  EXAM: 60,
};

interface QuestionRow {
  id: string;
  topic: string;
  type: string;
  difficulty: string;
  stem: string;
  options: string;
  lessonId: string | null;
}

export async function POST(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const body = await _req.json().catch(() => ({}));
    const mode = (MODES as readonly string[]).includes(String(body.mode)) ? String(body.mode) : "MIXED";
    let count = Number(body.count ?? DEFAULT_COUNTS[mode]) || DEFAULT_COUNTS[mode];
    count = Math.min(Math.max(count, 3), 100);
    const secondsPerQuestion =
      mode === "EXAM" ? Math.min(Math.max(Number(body.secondsPerQuestion) || 60, 40), 90) : null;
    const difficulty = ["Easy", "Moderate", "Hard", "Clinical Reasoning"].includes(String(body.difficulty))
      ? String(body.difficulty)
      : null;
    const year = Number(body.year) || null;
    const semester = Number(body.semester) || null;
    const courseSlug = body.courseSlug ? String(body.courseSlug) : null;
    const topic = body.topic ? String(body.topic) : null;

    // build question filter
    const qWhere: Prisma.QuestionWhereInput = {};
    if (difficulty) qWhere.difficulty = difficulty;
    if (topic) qWhere.topic = { contains: topic };
    const courseFilter: Prisma.CourseWhereInput = {};
    if (courseSlug) courseFilter.slug = courseSlug;
    if (year) {
      const semFilter: Prisma.SemesterWhereInput = { year: { number: year } };
      if (semester) semFilter.number = semester;
      courseFilter.semester = semFilter;
    } else if (semester) {
      courseFilter.semester = { number: semester };
    }
    if (Object.keys(courseFilter).length > 0) qWhere.course = courseFilter;

    let picked: QuestionRow[] = [];

    if (mode === "WEAK") {
      const accuracy = await getTopicAccuracy(user.id);
      const weak = accuracy.filter((t) => t.total >= 2 && t.accuracy < 75).slice(0, 6).map((t) => t.topic);
      if (weak.length) {
        picked = await db.question.findMany({
          where: { topic: { in: weak } },
        });
      }
    }

    if (picked.length < count) {
      const excludeIds = picked.map((p) => p.id);
      const base = await db.question.findMany({
        where: { ...qWhere, ...(excludeIds.length ? { id: { notIn: excludeIds } } : {}) },
      });
      const shuffled = [...base].sort(() => Math.random() - 0.5);
      picked = [...picked, ...shuffled].slice(0, count);
    }
    picked = [...picked].sort(() => Math.random() - 0.5);

    if (picked.length === 0) {
      return Response.json(
        { error: "No questions match that selection yet — try a wider filter 💗" },
        { status: 404 }
      );
    }

    return Response.json({
      mode,
      count: picked.length,
      label: buildLabel({ mode, year, semester, courseSlug, topic, difficulty }),
      timed: mode === "TIMED" || mode === "EXAM",
      secondsAllowed:
        mode === "EXAM"
          ? picked.length * (secondsPerQuestion ?? 60)
          : mode === "TIMED"
          ? picked.length * 45
          : null,
      secondsPerQuestion: mode === "EXAM" ? (secondsPerQuestion ?? 60) : null,
      questions: picked.map(sanitizeQuestion),
    });
  });
}

function buildLabel(opts: {
  mode: string;
  year: number | null;
  semester: number | null;
  courseSlug: string | null;
  topic: string | null;
  difficulty: string | null;
}): string {
  const parts: string[] = [];
  const modeNames: Record<string, string> = {
    QUICK: "Quick Test",
    TIMED: "Timed Test",
    WEAK: "Weak Topics",
    MIXED: "Mixed Revision",
    EXAM: "Exam Simulation",
  };
  parts.push(modeNames[opts.mode] ?? opts.mode);
  if (opts.year) parts.push(`Year ${opts.year}${opts.semester ? ` Sem ${opts.semester}` : ""}`);
  if (opts.courseSlug) parts.push(opts.courseSlug.replace(/-/g, " "));
  if (opts.topic) parts.push(`“${opts.topic}”`);
  if (opts.difficulty) parts.push(opts.difficulty);
  return parts.join(" · ");
}

/** Setup data for the exam config screen */
export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const [rows, courses] = await Promise.all([
      db.question.findMany({ select: { topic: true, difficulty: true } }),
      db.course.findMany({
        orderBy: [{ semester: { year: { number: "asc" } } }, { semester: { number: "asc" } }, { order: "asc" }],
        select: { slug: true, title: true, semester: { select: { number: true, year: { select: { number: true } } } } },
      }),
    ]);
    const topics = Array.from(new Set(rows.map((q) => q.topic))).sort();
    const accuracy = await getTopicAccuracy(user.id);
    const weak = accuracy.filter((t) => t.total >= 2 && t.accuracy < 75).map((t) => t.topic);
    return Response.json({
      topics: topics.map((t) => ({ topic: t, count: rows.filter((q) => q.topic === t).length })),
      courses: courses.map((c) => ({
        slug: c.slug,
        title: c.title,
        year: c.semester.year.number,
        semester: c.semester.number,
      })),
      weakTopics: weak,
      questionCount: rows.length,
      modes: MODES,
    });
  });
}
