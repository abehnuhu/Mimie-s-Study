import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";

function csvCell(value: string | number | null | undefined): string {
  const s = value === null || value === undefined ? "" : String(value);
  // quote if it contains comma, quote or newline
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

/** GET /api/progress/export — the student's full quiz history as CSV */
export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const attempts = await db.quizAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
    });

    const header = ["Date", "Mode", "Quiz", "Score", "Total", "Percentage", "Time (s)", "XP earned"];
    const rows = attempts.map((a) => [
      a.createdAt.toISOString().slice(0, 16).replace("T", " "),
      a.mode,
      a.label ?? "",
      a.score,
      a.total,
      a.percentage,
      a.timeSec,
      a.xpEarned,
    ]);

    const csv = [header, ...rows].map((r) => r.map(csvCell).join(",")).join("\r\n");

    return new Response("\uFEFF" + csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="mimies-quiz-history.csv"`,
        "Cache-Control": "no-store",
      },
    });
  });
}
