import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { SeedFullLesson } from "../types";

/** Dynamically load every lessons-bulk batch file (runs under bun or tsx). */
export async function loadBulkLessons(): Promise<SeedFullLesson[]> {
  const dir = join(process.cwd(), "prisma", "seed-data", "lessons-bulk");
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".ts") && !f.startsWith("load"));
  } catch {
    return [];
  }
  const all: SeedFullLesson[] = [];
  for (const f of files.sort()) {
    const mod = (await import(pathToFileURL(join(dir, f)).href)) as { lessons?: SeedFullLesson[] };
    if (Array.isArray(mod.lessons)) all.push(...mod.lessons);
  }
  return all;
}

/** Dynamically load the lesson image library (.ts preferred, .json fallback). */
export interface LibraryImage {
  file: string;
  alt: string;
  caption: string;
  tags: string[];
}

export async function loadImageLibrary(): Promise<LibraryImage[]> {
  try {
    const m = (await import(pathToFileURL(join(process.cwd(), "prisma", "seed-data", "image-library.ts")).href)) as {
      imageLibrary?: LibraryImage[];
    };
    if (Array.isArray(m.imageLibrary)) return m.imageLibrary;
  } catch {
    /* fall through to json */
  }
  try {
    const raw = readFileSync(join(process.cwd(), "prisma", "seed-data", "image-library.json"), "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as LibraryImage[]) : [];
  } catch {
    return [];
  }
}
