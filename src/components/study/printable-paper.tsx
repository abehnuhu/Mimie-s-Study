"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { GradedResult, SafeQuestion } from "@/lib/types";

/**
 * A print-only mock exam paper, rendered into <body> via a portal.
 * Never visible on screen (CSS keeps #exam-print-portal display:none);
 * when active, `body[data-exam-print="on"]` makes it the ONLY thing that prints.
 */

export type PaperPrintJob =
  | { kind: "blank"; label: string; minutes: number | null; questions: SafeQuestion[] }
  | {
      kind: "marked";
      label: string;
      minutes: number | null;
      results: GradedResult[];
      attempt: { score: number; total: number; percentage: number; timeSec: number };
    };

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const EXAM_PASS_MARK = 50;

function fmtClock(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function PrintablePaper({ job, onDone }: { job: PaperPrintJob; onDone: () => void }) {
  // portal host element — created once, never shown on screen (CSS keeps it display:none)
  const [host] = useState<HTMLDivElement | null>(() => {
    if (typeof document === "undefined") return null;
    const el = document.createElement("div");
    el.id = "exam-print-portal";
    return el;
  });
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!host) return;
    document.body.appendChild(host);
    document.body.dataset.examPrint = "on";

    // let the portal paint before opening the print dialog
    const t = window.setTimeout(() => window.print(), 200);

    const finish = () => {
      window.setTimeout(() => onDoneRef.current(), 50);
    };
    window.addEventListener("afterprint", finish);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("afterprint", finish);
      delete document.body.dataset.examPrint;
      if (host.parentNode) host.parentNode.removeChild(host);
    };
  }, [host]);

  const marked = job.kind === "marked";
  const questions = marked ? job.results : job.questions;
  const n = questions.length;
  const date = new Date();
  const dateStr = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  const paperCode = `MS/${String(date.getFullYear()).slice(2)}/${date.getMonth() + 1}/${n}Q`;

  const stats = useMemo(() => {
    if (!marked) return null;
    const j = job as Extract<PaperPrintJob, { kind: "marked" }>;
    const passed = j.attempt.percentage >= EXAM_PASS_MARK;
    const wrong = j.results.filter((r) => !r.correct).length;
    return { passed, wrong };
  }, [marked, job]);

  return host ? createPortal(
        <div className="print-sheet" style={{ background: "#ffffff", color: "#241d20" }}>
          {/* ── paper header ── */}
          <div className="flex items-baseline justify-between">
            <p style={{ fontSize: "8.5pt", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8d4f6b", fontWeight: 700 }}>
              Mimie&apos;s Study · Nursing Academy
            </p>
            <p style={{ fontSize: "8.5pt", color: "#4a3f45", fontVariantNumeric: "tabular-nums" }}>{paperCode}</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "0.9rem" }}>
            <h1 className="font-display" style={{ fontSize: "17pt", fontWeight: 800, margin: 0 }}>
              {marked ? "Marked Mock Paper" : "Mock Examination Paper"}
            </h1>
            <p style={{ fontSize: "10pt", color: "#4a3f45", margin: "0.2rem 0 0" }}>{job.label}</p>
          </div>
          <hr className="paper-brand-rule" />

          {marked && stats ? (
            /* ── marked-paper score box ── */
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #c9b6c0",
                borderRadius: "4pt",
                padding: "0.45rem 0.7rem",
                marginBottom: "0.55rem",
                background: stats.passed ? "#fdf1f4" : "#faf3ea",
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: "11pt", fontWeight: 800 }}>
                  Score: {(job as Extract<PaperPrintJob, { kind: "marked" }>).attempt.score}/
                  {(job as Extract<PaperPrintJob, { kind: "marked" }>).attempt.total} ·{" "}
                  {(job as Extract<PaperPrintJob, { kind: "marked" }>).attempt.percentage}%
                </p>
                <p style={{ margin: 0, fontSize: "8.5pt", color: "#4a3f45" }}>
                  Time used {fmtClock((job as Extract<PaperPrintJob, { kind: "marked" }>).attempt.timeSec)}
                  {job.minutes ? ` of ${job.minutes} min` : ""} · {stats.wrong} missed · sat {dateStr}
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  border: "2pt double " + (stats.passed ? "#6d3b52" : "#b3562f"),
                  borderRadius: "3pt",
                  padding: "0.14rem 0.5rem",
                  fontSize: "9pt",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: stats.passed ? "#6d3b52" : "#b3562f",
                  transform: "rotate(-3deg)",
                }}
              >
                {stats.passed ? "Pass" : "Below pass"}
              </p>
            </div>
          ) : (
            /* ── candidate + time line ── */
            <p className="paper-meta" style={{ textAlign: "center", margin: "0 0 0.4rem" }}>
              Time allowed: {job.minutes ? `${job.minutes} minute${job.minutes === 1 ? "" : "s"}` : "untimed"} · {n} question
              {n === 1 ? "" : "s"} · {n} mark{n === 1 ? "" : "s"} · Answer ALL questions
            </p>
          )}

          {!marked && (
            <p className="paper-meta" style={{ margin: "0.3rem 0 0.2rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              <span>
                Name: <span className="candidate-line" />
              </span>
              <span>
                Date: <span className="candidate-line" style={{ minWidth: "70pt" }} />
              </span>
            </p>
          )}

          {/* ── instructions ── */}
          <div
            style={{
              border: "1px solid #d9d1cc",
              borderRadius: "4pt",
              padding: "0.5rem 0.75rem",
              margin: "0.5rem 0 0.2rem",
              background: "#fdfbfa",
            }}
          >
            <p style={{ margin: "0 0 0.15rem", fontSize: "8.5pt", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8d4f6b" }}>
              Instructions to candidates
            </p>
            <ul className="paper-instructions" style={{ margin: 0, paddingLeft: "1rem", listStyle: "disc" }}>
              <li>Answer ALL questions — each carries one mark.</li>
              <li>Choose the single best answer, unless a question says otherwise.</li>
              <li>Mark your answers clearly in the circle beside each option.</li>
              {marked ? <li>This copy is marked: correct answers are ringed in rose, your answers in rust.</li> : <li>Do not turn over until told to begin. Good luck, Mims 💗</li>}
            </ul>
          </div>

          {/* ── questions ── */}
          <p
            className="font-display"
            style={{ fontSize: "11pt", fontWeight: 800, margin: "0.8rem 0 0.15rem", breakAfter: "avoid" }}
          >
            Section A · Multiple Choice
          </p>

          {questions.map((q, qi) => {
            const opts = q.options;
            const isMulti = q.type === "MULTI_SELECT";
            const isOrdering = q.type === "ORDERING";
            const mark = marked ? (job as Extract<PaperPrintJob, { kind: "marked" }>).results[qi] : null;
            const correctIdx = mark?.correctIndex ?? -1;
            const correctIdxs = mark?.correctIndexes ?? null;
            const selectedIdx = mark?.selectedIndex ?? -1;
            const selectedIdxs = mark?.selectedIndexes ?? null;
            return (
              <div key={q.id} className="paper-q">
                <p style={{ margin: 0, fontWeight: 700 }}>
                  {qi + 1}. {q.stem}
                  {isMulti && <span className="q-type-chip">Select all correct</span>}
                  {isOrdering && <span className="q-type-chip">Number 1–{opts.length} in the correct order</span>}
                  {mark && (
                    <span className={mark.correct ? "your-mark" : "your-mark wrong"} style={{ marginLeft: "6pt" }}>
                      {mark.correct ? "✓ 1/1" : "✗ 0/1"}
                    </span>
                  )}
                </p>
                <div style={{ marginTop: "0.22rem", display: "grid", gap: "0.12rem" }}>
                  {opts.map((opt, oi) => {
                    const isCorrect = mark ? (correctIdxs ? correctIdxs.includes(oi) : correctIdx === oi) : false;
                    const isSelected = mark ? (selectedIdxs ? selectedIdxs.includes(oi) : selectedIdx === oi) : false;
                    const classes = ["paper-opt"];
                    if (isCorrect) classes.push("opt-correct");
                    if (isSelected) classes.push("opt-selected");
                    if (isSelected && !isCorrect) classes.push("wrong");
                    return (
                      <p key={oi} className={classes.join(" ")} style={{ margin: 0, paddingLeft: "14pt" }}>
                        <span className="opt-letter">{LETTERS[oi]}</span>
                        <span className="opt-text">{opt}</span>
                        {isCorrect && mark && <span className="key-mark">correct</span>}
                        {isSelected && !isCorrect && mark && <span className="your-mark wrong">your answer</span>}
                        {isSelected && isCorrect && mark && <span className="your-mark">yours ✓</span>}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── rough work box (blank papers only) ── */}
          {!marked && (
            <>
              <p className="font-display" style={{ fontSize: "11pt", fontWeight: 800, margin: "0.9rem 0 0.15rem", breakAfter: "avoid" }}>
                Rough work
              </p>
              <p style={{ fontSize: "8.5pt", color: "#4a3f45", margin: "0 0 0.2rem" }}>
                Jot, scribble, cross things out — nobody marks this page.
              </p>
              <div className="paper-rough" />
              <p style={{ fontSize: "9pt", color: "#4a3f45", margin: "0.7rem 0 0", fontStyle: "italic" }}>
                End of paper · The answer key unlocks when you hand in on screen — print again from the results screen for a marked copy.
              </p>
            </>
          )}

          {/* ── answer key page (marked papers) ── */}
          {marked && (
            <div className="paper-page-break">
              <p style={{ fontSize: "8.5pt", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8d4f6b", fontWeight: 700, margin: "0 0 0.2rem" }}>
                Answer key
              </p>
              <h2 className="font-display" style={{ fontSize: "14pt", fontWeight: 800, margin: 0 }}>
                {job.label} — key
              </h2>
              <hr className="paper-brand-rule" />
              <p style={{ fontSize: "9pt", color: "#4a3f45", margin: "0 0 0.45rem" }}>
                Correct letters ringed below · <span style={{ color: "#b3562f" }}>rust = the one you chose when wrong</span>
              </p>
              <div className="key-grid">
                {(job as Extract<PaperPrintJob, { kind: "marked" }>).results.map((r, qi) => {
                  const letters = r.correctIndexes
                    ? r.correctIndexes.map((i) => LETTERS[i]).join("")
                    : r.correctIndex !== null && r.correctIndex >= 0
                    ? LETTERS[r.correctIndex]
                    : "—";
                  const yours =
                    r.selectedIndexes && r.selectedIndexes.length
                      ? r.selectedIndexes.map((i) => LETTERS[i]).join("")
                      : r.selectedIndex !== null && r.selectedIndex >= 0
                      ? LETTERS[r.selectedIndex]
                      : null;
                  const wrong = !r.correct && yours;
                  return (
                    <p key={r.questionId} className="key-cell" style={{ margin: 0, fontVariantNumeric: "tabular-nums" }}>
                      <span style={{ fontWeight: 700 }}>{qi + 1}.</span>{" "}
                      <span style={{ border: wrong ? "none" : "1pt solid #8d4f6b", borderRadius: "2pt", padding: "0 2pt", background: wrong ? "none" : "#f5e3ec", fontWeight: 700, color: "#6d3b52" }}>
                        {letters}
                      </span>
                      {wrong && <span style={{ marginLeft: "4pt", color: "#b3562f", fontWeight: 700 }}>(you: {yours})</span>}
                      <span className="key-topic">{r.topic}</span>
                    </p>
                  );
                })}
              </div>
              <p style={{ fontSize: "8.5pt", color: "#7a6d74", margin: "0.8rem 0 0" }}>
                Printed from Mimie&apos;s Study · {dateStr} · Keep marked papers in your revision folder — spaced repetition will revisit the topics you missed.
              </p>
            </div>
          )}
        </div>,
        host
      )
    : null;
}
