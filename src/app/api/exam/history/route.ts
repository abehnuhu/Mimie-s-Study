import { db } from "@/lib/db";
import { withUser } from "@/lib/api-helpers";
import type { AttemptSetupConfig, ExamHistoryEntry, ExamHistoryStats } from "@/lib/types";

/** exam-setup origin modes persisted on attempts (legacy rows only have mode="EXAM"). */
const SETUP_MODES = ["QUICK", "TIMED", "WEAK", "MIXED", "EXAM"] as const;

/** NMC-style pass mark for full papers. */
const PAPER_PASS_MARK = 50;

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const rows = await db.quizAttempt.findMany({
      where: {
        userId: user.id,
        OR: [{ setupMode: { not: null } }, { mode: "EXAM" }],
      },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        setupMode: true,
        mode: true,
        label: true,
        config: true,
        score: true,
        total: true,
        percentage: true,
        timeSec: true,
        createdAt: true,
      },
    });

    const entries: ExamHistoryEntry[] = rows.map((r) => ({
      id: r.id,
      setupMode:
        r.setupMode && (SETUP_MODES as readonly string[]).includes(r.setupMode)
          ? (r.setupMode as ExamHistoryEntry["setupMode"])
          : "PRACTICE",
      label: r.label ?? "Practice test",
      score: r.score,
      total: r.total,
      percentage: r.percentage,
      timeSec: r.timeSec,
      paceSec: Math.round(r.timeSec / Math.max(1, r.total)),
      createdAt: r.createdAt.toISOString(),
      setup: parseSetupConfig(r.config, r.createdAt.toISOString()),
    }));

    const papers = entries.filter((e) => e.setupMode === "EXAM");
    const lastFive = entries.slice(0, 5);

    const stats: ExamHistoryStats = {
      testsSat: entries.length,
      papersSat: papers.length,
      bestPct: papers.reduce((m, p) => Math.max(m, p.percentage), 0),
      avgPct: papers.length
        ? Math.round(papers.reduce((s, p) => s + p.percentage, 0) / papers.length)
        : 0,
      passRate: papers.length
        ? Math.round(
            (papers.filter((p) => p.percentage >= PAPER_PASS_MARK).length / papers.length) * 100
          )
        : 0,
      lastFiveAvg: lastFive.length
        ? Math.round(lastFive.reduce((s, e) => s + e.percentage, 0) / lastFive.length)
        : 0,
    };

    return Response.json({ entries, stats });
  });
}

/** Best-effort parse of the persisted retry config — null on any mismatch. */
function parseSetupConfig(raw: string | null, createdAt: string): AttemptSetupConfig | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Partial<AttemptSetupConfig>;
    if (typeof c.mode !== "string" || !(SETUP_MODES as readonly string[]).includes(c.mode)) return null;
    const count = Number(c.count);
    if (!Number.isFinite(count) || count < 1 || count > 100) return null;
    return {
      mode: c.mode,
      count: Math.round(count),
      difficulty: typeof c.difficulty === "string" ? c.difficulty : "Any",
      year: c.year === "all" || typeof c.year === "number" ? c.year : "all",
      semester: c.semester === "all" || typeof c.semester === "number" ? c.semester : "all",
      courseSlug: typeof c.courseSlug === "string" ? c.courseSlug : "all",
      topic: typeof c.topic === "string" ? c.topic : "all",
      secondsPerQuestion: typeof c.secondsPerQuestion === "number" ? c.secondsPerQuestion : null,
      createdAt,
    };
  } catch {
    return null;
  }
}
