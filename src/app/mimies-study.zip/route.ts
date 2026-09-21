import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { getSessionUser } from "@/lib/session";

const run = promisify(execFile);

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * GET /mimies-study.zip — the whole academy in one archive.
 *
 * A plain, typeable URL (no login ceremony): the project packages itself
 * on demand, so the archive is always a fresh snapshot of the live code.
 *
 * Everyone gets: src/, prisma/ (schema + full seed data), public/ (all
 * images), scripts/, docs (README, DEPLOY, .env.example) and configs.
 * Signed-in admins additionally get db/custom.db — the seeded database
 * with accounts and progress. Anonymous visitors never receive the
 * database file.
 *
 * Never included: .env (secrets), node_modules, .git, logs, uploaded
 * music and sandbox internals.
 */
export async function GET() {
  const root = process.cwd();
  const tmp = path.join(os.tmpdir(), `mimie-zip-${Date.now()}.zip`);

  const exclude = [
    // deps & build output
    "node_modules", "node_modules/*",
    ".next", ".next/*",
    // repo internals
    ".git", ".git/*",
    // secrets — keep .env.example, drop the real env files
    ".env", ".env.local", ".env.development", ".env.production",
    // logs & caches
    "*.log", "*.tsbuildinfo", "*.pid", "*.zip",
    // sandbox-only directories (mirrors .gitignore)
    "skills", "skills/*",
    "download", "download/*",
    "mini-services", "mini-services/*",
    ".zscripts", ".zscripts/*",
    "examples", "examples/*",
    "agent-ctx", "agent-ctx/*",
    "tool-results", "tool-results/*",
    ".claude", ".claude/*",
    ".z-ai-config", ".z-ai-config/*",
    // user uploads (music) — re-upload from Admin Studio after deploying
    "upload", "upload/*",
    // misc local artifacts
    "worklog.md",
    "Caddyfile",
    "tmp-validate-*",
    "local-*",
  ];

  try {
    const user = await getSessionUser();
    const isAdmin = user?.role === "ADMIN";
    if (!isAdmin) {
      // the database (accounts, password hashes, student progress)
      // travels only with the owner
      exclude.push("db", "db/*");
    }

    await run(
      "zip",
      ["-r", "-q", "-X", tmp, ".", ...exclude.flatMap((p) => ["-x", p])],
      { cwd: root, maxBuffer: 1024 * 1024 }
    );

    const data = await fs.readFile(tmp);
    await fs.unlink(tmp).catch(() => {});

    return new Response(new Uint8Array(data), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="mimies-study.zip"',
        "Content-Length": String(data.length),
        "Cache-Control": "no-store",
        "X-Includes-Database": isAdmin ? "1" : "0",
      },
    });
  } catch (e) {
    console.error("[mimies-study.zip]", e);
    await fs.unlink(tmp).catch(() => {});
    return Response.json(
      { error: "Couldn't package the archive — please try again 💗" },
      { status: 500 }
    );
  }
}
