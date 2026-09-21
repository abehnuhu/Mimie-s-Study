import { readFileSync, readdirSync } from "fs";

const anchors = JSON.parse(readFileSync("prisma/seed-data/anchors/y3s2-a.json", "utf8"));
const mod = await import("./lessons-bulk/y3s2-a.ts");
const lessons = mod.lessons;

const errors: string[] = [];
const warn: string[] = [];

// 1. count + ordered key equality with anchors
if (lessons.length !== anchors.length) errors.push(`count ${lessons.length} != anchors ${anchors.length}`);
anchors.forEach((a: any, i: number) => {
  const l = lessons[i];
  const key = `${l.courseSlug}::${l.moduleTitle}::${l.lessonTitle}`;
  const akey = `${a.courseSlug}::${a.moduleTitle}::${a.lessonTitle}`;
  if (key !== akey) errors.push(`L${i + 1} key mismatch: "${key}" vs "${akey}"`);
});

// 2. duplicate match keys across ALL bulk files
const files = readdirSync(__dirname + "/lessons-bulk").filter(f => f.endsWith(".ts") && f !== "load.ts");
const seen = new Map<string, string>();
for (const f of files) {
  const m = await import(`./lessons-bulk/${f}`);
  for (const l of (m as any).lessons) {
    const k = `${l.courseSlug}::${l.moduleTitle}::${l.lessonTitle}`;
    if (seen.has(k)) errors.push(`DUP match key "${k}" in ${f} AND ${seen.get(k)}`);
    seen.set(k, f);
  }
}
console.log("Bulk files scanned:", files.length, "| total bulk lessons:", seen.size);

const emojiRe = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const secOrder = ["text", "text", "clinical_pearl", "case", "memory_trick", "summary"];
const idxCount = [0, 0, 0, 0];
const wc: number[] = [];

lessons.forEach((l: any, i: number) => {
  const n = i + 1;
  // sections
  if (l.sections.length !== 6) errors.push(`L${n}: ${l.sections.length} sections`);
  l.sections.forEach((s: any, j: number) => {
    if (s.type !== secOrder[j]) errors.push(`L${n} sec${j + 1}: type ${s.type} != ${secOrder[j]}`);
  });
  if (l.sections[0].title !== "What this lesson is about") errors.push(`L${n} sec1 title`);
  if (l.sections[1].title !== "The core ideas") errors.push(`L${n} sec2 title`);
  if (l.sections[3].title !== "On the ward") errors.push(`L${n} case title`);
  // 2-para text sections
  [0, 1].forEach(j => {
    const paras = l.sections[j].body.split("\n\n").filter((p: string) => p.trim().length > 0);
    if (paras.length !== 2) errors.push(`L${n} text sec ${j + 1}: ${paras.length} paras`);
  });
  // clinical_pearl 1-3 sentences
  const pearl = l.sections[2].body;
  if (pearl.length < 60) warn.push(`L${n}: short pearl`);
  // case: question line before Answer paragraph, Answer: starts final para
  const caseParas = l.sections[3].body.split("\n\n").filter((p: string) => p.trim().length > 0);
  if (caseParas.length !== 3) errors.push(`L${n} case: ${caseParas.length} paras (need scenario + question + Answer)`);
  const last = caseParas[caseParas.length - 1];
  if (!last.startsWith("Answer:")) errors.push(`L${n} case: final para does not start with 'Answer:'`);
  const q = caseParas[caseParas.length - 2];
  if (!q.trim().endsWith("?")) errors.push(`L${n} case: question line does not end with '?'`);
  const scenSent = caseParas[0].split(/(?<=[.!?])\s+/).length;
  if (scenSent < 3 || scenSent > 6) warn.push(`L${n} case scenario: ${scenSent} sentences`);
  // summary dash lines
  const sumLines = l.sections[5].body.split("\n").filter((x: string) => x.trim().length > 0);
  if (sumLines.length < 4 || sumLines.length > 6) errors.push(`L${n} summary: ${sumLines.length} lines`);
  if (!sumLines.every((x: string) => x.trim().startsWith("- "))) errors.push(`L${n} summary: non-dash line`);
  // questions
  if (l.questions.length !== 3) errors.push(`L${n}: ${l.questions.length} questions`);
  const diffs = l.questions.map((q2: any) => q2.difficulty);
  if (!diffs.includes("Easy") || !diffs.includes("Moderate")) errors.push(`L${n} difficulty mix: ${diffs}`);
  l.questions.forEach((q2: any, qi: number) => {
    if (q2.type !== "MCQ") errors.push(`L${n} Q${qi + 1} type ${q2.type}`);
    if (q2.options.length !== 4) errors.push(`L${n} Q${qi + 1}: ${q2.options.length} options`);
    if (new Set(q2.options).size !== 4) errors.push(`L${n} Q${qi + 1}: duplicate options`);
    if (q2.correctIndex === undefined || q2.correctIndex < 0 || q2.correctIndex > 3) errors.push(`L${n} Q${qi + 1} correctIndex ${q2.correctIndex}`);
    idxCount[q2.correctIndex]++;
    if (!q2.explanation || q2.explanation.trim().length < 40) errors.push(`L${n} Q${qi + 1}: weak explanation`);
    if (q2.courseSlug !== l.courseSlug) errors.push(`L${n} Q${qi + 1}: courseSlug mismatch`);
    if (q2.stem.trim().length < 30) warn.push(`L${n} Q${qi + 1}: short stem`);
  });
  // flashcards
  if (l.flashcards.length !== 3) errors.push(`L${n}: ${l.flashcards.length} flashcards`);
  l.flashcards.forEach((f: any, fi: number) => {
    if (!f.front || f.front.trim().length < 15) errors.push(`L${n} FC${fi + 1}: weak front`);
    if (!f.back || f.back.trim().length < 20) errors.push(`L${n} FC${fi + 1}: weak back`);
  });
  // sources
  if (l.sources.length < 2 || l.sources.length > 3) errors.push(`L${n}: ${l.sources.length} sources`);
  l.sources.forEach((s: any) => { if (!s.organization || !s.title) errors.push(`L${n}: incomplete source`); });
  // tags
  if (l.tags.length < 3 || l.tags.length > 6) errors.push(`L${n}: ${l.tags.length} tags`);
  if (!l.tags.every((t: string) => t === t.toLowerCase())) errors.push(`L${n}: non-lowercase tag`);
  // objectives
  if (l.objectives.length !== 3) errors.push(`L${n}: ${l.objectives.length} objectives`);
  const wants = ["Describe", "Explain", "Apply"];
  l.objectives.forEach((o: string, oi: number) => { if (!o.startsWith(wants[oi])) warn.push(`L${n} obj${oi + 1} does not start with ${wants[oi]}`); });
  // duration, status, difficulty
  if (l.durationMin !== 12) errors.push(`L${n}: durationMin ${l.durationMin}`);
  if (l.sourceStatus !== "GCU_ALIGNED") errors.push(`L${n}: sourceStatus`);
  if (!["Easy", "Moderate"].includes(l.difficulty)) errors.push(`L${n}: lesson difficulty ${l.difficulty}`);
  // description warm 1-2 sentences
  const dSen = l.description.split(/(?<=[.!?])\s+/).length;
  if (dSen > 2) warn.push(`L${n}: description ${dSen} sentences`);
  // emoji / console.log / image / bold balance
  for (const s of l.sections) {
    if (emojiRe.test(s.body)) errors.push(`L${n}: emoji in section ${s.type}`);
    if (s.type === "image") errors.push(`L${n}: image section`);
    const stars = (s.body.match(/\*\*/g) || []).length;
    if (stars % 2 !== 0) errors.push(`L${n}: unbalanced ** in ${s.type}`);
    if (/console\.log/.test(s.body)) errors.push(`L${n}: console.log`);
  }
  // word count of all section bodies
  const words = l.sections.reduce((a: number, s: any) => a + s.body.split(/\s+/).filter(Boolean).length, 0);
  wc.push(words);
});

console.log("correctIndex distribution (0/1/2/3):", idxCount.join("/"));
console.log("word counts min/max/avg:", Math.min(...wc), Math.max(...wc), Math.round(wc.reduce((a: number, b: number) => a + b, 0) / wc.length));
console.log("word counts:", wc.join(", "));
if (warn.length) console.log("WARNINGS:\n" + warn.join("\n"));
if (errors.length) { console.error("ERRORS:\n" + errors.join("\n")); process.exit(1); }
console.log("ALL CHECKS PASSED");
