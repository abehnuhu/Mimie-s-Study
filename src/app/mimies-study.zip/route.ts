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
 * In-memory archive cache — zipping the whole project takes ~5s, which is
 * far too slow to repeat for every visitor once traffic picks up. The zip
 * is keyed by "admin or not" and reused for 5 minutes; ?fresh=1 busts it.
 */
const ZIP_TTL_MS = 5 * 60 * 1000;
const zipCache = new Map<string, { at: number; data: Buffer }>();

function cachedZip(key: string): Buffer | null {
  const hit = zipCache.get(key);
  if (!hit || Date.now() - hit.at > ZIP_TTL_MS) return null;
  return hit.data;
}

function storeZip(key: string, data: Buffer) {
  zipCache.set(key, { at: Date.now(), data });
  // hard cap of 4 entries (admin + public × history) — a zip is ~30 MB
  if (zipCache.size > 4) {
    const oldest = [...zipCache.entries()].sort((a, b) => a[1].at - b[1].at)[0];
    if (oldest) zipCache.delete(oldest[0]);
  }
}

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
 * Never included: .env (secrets), node_modules, .git, logs and sandbox
 * internals. public/music (the exported songs) DOES ship — that is how
 * the music migrates to Vercel as static, CDN-served assets.
 */
export async function GET(req: Request) {
  const root = process.cwd();
  const user = await getSessionUser();
  const isAdmin = user?.role === "ADMIN";
  const cacheKey = isAdmin ? "admin" : "public";
  const fresh = new URL(req.url).searchParams.get("fresh") === "1";

  const hit = fresh ? null : cachedZip(cacheKey);
  if (hit) {
    return new Response(new Uint8Array(hit), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="mimies-study.zip"',
        "Content-Length": String(hit.length),
        // browsers/proxies may reuse it for a short window; the server cache
        // is the real guard (5 min + ?fresh=1 bust for the owner)
        "Cache-Control": "private, max-age=300",
        "X-Includes-Database": isAdmin ? "1" : "0",
        "X-Archive-Cached": "1",
      },
    });
  }

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
    storeZip(cacheKey, data);

    return new Response(new Uint8Array(data), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="mimies-study.zip"',
        "Content-Length": String(data.length),
        "Cache-Control": "private, max-age=300",
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
