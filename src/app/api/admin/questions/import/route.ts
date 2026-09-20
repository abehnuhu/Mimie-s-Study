import { db } from "@/lib/db";
import { withAdmin } from "@/lib/api-helpers";

const TYPES = ["MCQ", "TRUE_FALSE", "MULTI_SELECT", "ORDERING", "CLINICAL_SCENARIO"];
const DIFFS = ["Easy", "Moderate", "Hard", "Clinical Reasoning"];

interface ParsedQuestion {
  topic: string;
  type: string;
  difficulty: string;
  stem: string;
  options: string[];
  correctIndex: number | null;
  correctIndexes: number[] | null;
  explanation: string;
  whyOthers: Record<string, string> | null;
  lessonId: string | null;
}

/** Bulk question import — validate + create many questions from a JSON array. */
export async function POST(req: Request) {
  return withAdmin(req, async (_req) => {
    const body = await _req.json().catch(() => ({}));
    const dryRun = body.dryRun === true;
    const courseSlug = body.courseSlug ? String(body.courseSlug) : null;
    const items = Array.isArray(body.questions) ? body.questions : null;

    if (!items) {
      return Response.json({ error: "Paste an array of questions 💗" }, { status: 400 });
    }
    if (items.length === 0) {
      return Response.json({ error: "The array is empty — nothing to import 💗" }, { status: 400 });
    }
    if (items.length > 200) {
      return Response.json({ error: "Import up to 200 questions at a time 💗" }, { status: 400 });
    }

    // resolve optional course anchor
    let courseId: string | null = null;
    let courseTitle: string | null = null;
    if (courseSlug) {
      const course = await db.course.findUnique({ where: { slug: courseSlug }, select: { id: true, title: true } });
      if (!course) return Response.json({ error: "Course not found 💗" }, { status: 404 });
      courseId = course.id;
      courseTitle = course.title;
    }

    const errors: { index: number; error: string }[] = [];
    const valid: ParsedQuestion[] = [];

    items.forEach((raw: unknown, i: number) => {
      const q = raw as Record<string, unknown>;
      const label = `Question ${i + 1}`;

      if (!q || typeof q !== "object") {
        errors.push({ index: i, error: `${label}: not an object` });
        return;
      }
      const stem = String(q.stem ?? "").trim();
      if (!stem) {
        errors.push({ index: i, error: `${label}: missing stem` });
        return;
      }
      if (stem.length > 1000) {
        errors.push({ index: i, error: `${label}: stem longer than 1000 characters` });
        return;
      }

      const rawOptions = q.options;
      if (!Array.isArray(rawOptions) || rawOptions.length < 2) {
        errors.push({ index: i, error: `${label}: needs at least 2 options` });
        return;
      }
      const options = rawOptions.map((o: unknown) => String(o ?? "").trim());
      if (options.some((o: string) => !o)) {
        errors.push({ index: i, error: `${label}: an option is empty` });
        return;
      }
      if (options.length > 6) {
        errors.push({ index: i, error: `${label}: max 6 options` });
        return;
      }

      const type = String(q.type ?? "MCQ").toUpperCase();
      if (!TYPES.includes(type)) {
        errors.push({ index: i, error: `${label}: unknown type "${type}" (use ${TYPES.join(", ")})` });
        return;
      }

      const difficulty = String(q.difficulty ?? "Moderate");
      if (!DIFFS.includes(difficulty)) {
        errors.push({ index: i, error: `${label}: difficulty must be one of ${DIFFS.join(", ")}` });
        return;
      }

      let correctIndex: number | null = null;
      let correctIndexes: number[] | null = null;
      if (type === "MULTI_SELECT" || type === "ORDERING") {
        const arr = q.correctIndexes;
        if (!Array.isArray(arr) || arr.length < 2 || !arr.every((n: unknown) => Number.isInteger(n))) {
          errors.push({ index: i, error: `${label}: ${type.toLowerCase().replace("_", " ")} needs correctIndexes — an array of option numbers (0-based), in the correct order` });
          return;
        }
        const idxs = (arr as unknown[]).map((n) => Number(n));
        if (idxs.some((n) => n < 0 || n >= options.length)) {
          errors.push({ index: i, error: `${label}: a correctIndex is out of range (0–${options.length - 1})` });
          return;
        }
        correctIndexes = idxs;
      } else {
        const ci = q.correctIndex;
        if (!Number.isInteger(ci) || (ci as number) < 0 || (ci as number) >= options.length) {
          errors.push({ index: i, error: `${label}: correctIndex must be 0–${options.length - 1}` });
          return;
        }
        correctIndex = Number(ci);
      }

      const explanation = String(q.explanation ?? "").trim();
      if (!explanation) {
        errors.push({ index: i, error: `${label}: missing explanation (Mimie learns from the why 💗)` });
        return;
      }

      const whyOthers =
        q.whyOthers && typeof q.whyOthers === "object" && !Array.isArray(q.whyOthers)
          ? (Object.fromEntries(
              Object.entries(q.whyOthers as Record<string, unknown>)
                .filter(([k]) => /^[A-F]$/.test(k))
                .map(([k, v]) => [k, String(v ?? "").slice(0, 1000)])
            ) as Record<string, string>)
          : null;

      valid.push({
        topic: String(q.topic ?? "General").trim().slice(0, 80) || "General",
        type,
        difficulty,
        stem,
        options,
        correctIndex,
        correctIndexes,
        explanation: explanation.slice(0, 4000),
        whyOthers,
        lessonId: q.lessonId ? String(q.lessonId) : null,
      });
    });

    if (dryRun) {
      return Response.json({
        ok: errors.length === 0,
        total: items.length,
        validCount: valid.length,
        errors: errors.slice(0, 50),
        errorCount: errors.length,
        course: courseTitle,
      });
    }

    let created = 0;
    for (const v of valid) {
      await db.question.create({
        data: {
          topic: v.topic,
          type: v.type,
          difficulty: v.difficulty,
          stem: v.stem,
          options: JSON.stringify(v.options),
          correctIndex: v.correctIndex,
          correctIndexes: v.correctIndexes ? JSON.stringify(v.correctIndexes) : null,
          explanation: v.explanation,
          whyOthers: v.whyOthers ? JSON.stringify(v.whyOthers) : null,
          lessonId: v.lessonId,
          courseId: v.lessonId ? null : courseId,
        },
      });
      created += 1;
    }

    return Response.json({
      ok: errors.length === 0,
      total: items.length,
      created,
      errors: errors.slice(0, 50),
      errorCount: errors.length,
      course: courseTitle,
    });
  });
}
