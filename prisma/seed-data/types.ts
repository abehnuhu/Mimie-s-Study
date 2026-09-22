// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — SEED DATA TYPE CONTRACT
// All seed content files in prisma/seed-data/ must conform to
// these interfaces. Plain data only — no runtime logic.
// ─────────────────────────────────────────────────────────────

export type Difficulty = "Easy" | "Moderate" | "Hard" | "Clinical Reasoning";
export type LessonStatus = "PUBLISHED" | "DRAFT" | "ARCHIVED";
/** CONFIRMED_GCU = verified on GCU official materials; GCU_ALIGNED = GCU-aligned sequence, verify against departmental outline; PROPOSED = organized/proposed content */
export type SourceStatus = "CONFIRMED_GCU" | "GCU_ALIGNED" | "PROPOSED";
export type QuestionType =
  | "MCQ"
  | "TRUE_FALSE"
  | "MULTI_SELECT"
  | "ORDERING"
  | "CLINICAL_SCENARIO";

/** Section types rendered by the lesson engine */
export type SectionType =
  | "text" // markdown-ish short paragraphs (blank line = new paragraph)
  | "callout" // highlighted note card
  | "clinical_pearl" // 💗 pearl card
  | "memory_trick" // mnemonic card
  | "case" // mini clinical scenario with questions in body
  | "table" // markdown pipe table in body
  | "quiz_prompt" // inline active-recall prompt (answer revealed on tap)
  | "image" // real-life photo; body = JSON string {src, alt, caption}
  | "summary"; // end-of-lesson recap

export interface SeedSection {
  type: SectionType;
  title?: string;
  body: string;
}

export interface SeedQuestion {
  topic: string; // e.g. "Stages of Labour"
  type: QuestionType;
  difficulty: Difficulty;
  stem: string;
  /** for MCQ/TRUE_FALSE/CLINICAL_SCENARIO: 4 options; for ORDERING: options in CORRECT order; for MULTI_SELECT: options */
  options: string[];
  /** MCQ/TF/CS: index of correct answer */
  correctIndex?: number;
  /** MULTI_SELECT: indexes of all correct answers */
  correctIndexes?: number[];
  explanation: string;
  /** why each wrong option is wrong, keyed by option letter "A" | "B" | "C" | "D" */
  whyOthers?: Record<string, string>;
  /** which course this belongs to (course slug) */
  courseSlug?: string;
}

export interface SeedFlashcard {
  topic: string;
  front: string;
  back: string;
}

export interface SeedSourceRef {
  organization: string;
  title: string;
  year?: string;
  url?: string;
  note?: string;
}

// ── Curriculum structure ─────────────────────────────────────

export interface SeedLesson {
  title: string;
  description: string;
  difficulty: Difficulty;
  durationMin: number;
  status: LessonStatus;
  sourceStatus: SourceStatus;
  tags: string[];
}

export interface SeedModule {
  title: string;
  lessons: SeedLesson[];
}

export interface SeedCourse {
  title: string;
  slug: string; // kebab-case, unique, stable
  description: string;
  icon: string; // lucide icon name, e.g. "HeartPulse"
  modules: SeedModule[];
}

export interface SeedSemester {
  number: 1 | 2;
  phase: string; // e.g. "Foundation Phase"
  courses: SeedCourse[];
}

export interface SeedYear {
  number: 1 | 2 | 3 | 4;
  title: string; // e.g. "Your Nursing Era 💗"
  semesters: SeedSemester[];
}

// ── Fully authored lesson (the 8 flagship lessons) ───────────

export interface SeedFullLesson {
  courseSlug: string;
  moduleTitle: string;
  lessonTitle: string; // must match a lesson in curriculum.ts
  description: string;
  difficulty: Difficulty;
  durationMin: number;
  objectives: string[];
  tags: string[];
  sourceStatus: SourceStatus;
  sections: SeedSection[];
  questions: SeedQuestion[]; // 5–8 questions incl. explanations
  flashcards: SeedFlashcard[]; // 4–6
  sources: SeedSourceRef[]; // 2–4 authoritative sources
}

// ── Games content ────────────────────────────────────────────

export interface SortGameItem {
  text: string;
  bin: string; // bin key, e.g. "safe" | "unsafe" | "action" / "normal" | "concern" | "danger"
  feedback: string; // one-line teaching explanation
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface TimelineEvent {
  text: string;
  feedback: string;
}

export interface GcsScenario {
  scenario: string;
  eye: string; // correct answer text, e.g. "Opens eyes to pain — E2"
  verbal: string;
  motor: string;
  options: { eye: string[]; verbal: string[]; motor: string[] };
  explanation: string;
}

export interface PrioritySet {
  scenario: string;
  findings: { text: string; urgent: boolean; feedback: string }[]; // exactly 1 urgent
}

export interface DetectiveCase {
  title: string;
  intro: string;
  steps: {
    vignette: string; // revealed information
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  debrief: string;
}

export interface LabelItem {
  label: string;
  description: string;
}

// ── Gamification ─────────────────────────────────────────────

export interface SeedBadge {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  criteria: string;
  xp: number;
}

export interface SeedGame {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  xpReward: number;
  unlockLevel: number;
}

export interface SeedPersonalMessage {
  text: string;
  tone: "warm" | "playful" | "proud";
}
