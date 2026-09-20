// ── Shared frontend types for Mimie's Study ──────────────────

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "STUDENT" | "ADMIN";
  nickname: string | null;
  avatar: string;
  currentYear: number;
  currentSemester: number;
  dailyTargetMin: number;
  lessonLengthPref: string;
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  notifyBadges: boolean;
  notifyReviews: boolean;
}

export interface CourseSummary {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  icon: string | null;
  lessonCount: number;
  completedCount: number;
  questionCount: number;
  minutes: number;
  year: number;
  semester: number;
}

export interface SemesterNode {
  number: number;
  phase: string | null;
  courses: CourseSummary[];
  lessonCount: number;
  completedCount: number;
  minutes: number;
  progressPct: number;
}

export interface YearNode {
  number: number;
  title: string | null;
  semesters: SemesterNode[];
}

export interface SafeQuestion {
  id: string;
  topic: string;
  type: "MCQ" | "TRUE_FALSE" | "MULTI_SELECT" | "ORDERING" | "CLINICAL_SCENARIO" | string;
  difficulty: string;
  stem: string;
  options: string[];
  lessonId: string | null;
}

export interface GradedResult {
  questionId: string;
  correct: boolean;
  topic: string;
  stem: string;
  options: string[];
  selectedIndex: number;
  selectedIndexes: number[] | null;
  correctIndex: number | null;
  correctIndexes: number[] | null;
  explanation: string;
  whyOthers: Record<string, string>;
}

export interface BadgeEarned {
  slug: string;
  title: string;
  description: string;
  icon: string;
  xp?: number;
}

export interface QuizSubmitOutcome {
  attempt: { id: string; score: number; total: number; percentage: number; timeSec: number; xpEarned: number };
  results: GradedResult[];
  strongAreas: { topic: string; accuracy: number }[];
  weakAreas: { topic: string; accuracy: number }[];
  xpGained: number;
  leveledUp: boolean;
  newLevel: number;
  streak: number;
  newBadges: BadgeEarned[];
}

export interface LessonSection {
  id: string;
  type: string;
  title: string | null;
  body: string;
}

export interface LessonDetail {
  lesson: {
    id: string;
    title: string;
    description: string | null;
    difficulty: string;
    durationMin: number;
    objectives: string[];
    tags: string[];
    sourceStatus: string;
    version: number;
    course: { slug: string; title: string; icon: string | null; year: number; semester: number };
    moduleTitle: string;
  };
  sections: LessonSection[];
  sources: { id: string; organization: string; title: string; year: string | null; url: string | null; note: string | null }[];
  flashcards: { id: string; topic: string; front: string; back: string }[];
  questions: SafeQuestion[];
  progress: { status: string; timeSpentSec: number };
  note: { id: string; body: string } | null;
  bookmarked: boolean;
  neighbours: { prev: { id: string; title: string } | null; next: { id: string; title: string } | null };
}

/** The exam-setup parameters that produced an attempt — persisted so the same test can be retried. */
export interface AttemptSetupConfig {
  mode: string; // QUICK | TIMED | WEAK | MIXED | EXAM
  count: number;
  difficulty?: string; // "Any" | "Easy" | "Moderate" | "Hard" | "Clinical Reasoning"
  year?: number | "all";
  semester?: number | "all";
  courseSlug?: string | "all";
  topic?: string | "all";
  secondsPerQuestion?: number | null; // EXAM pacing
  label?: string;
  createdAt?: string; // when the original attempt was sat (retry banner)
  attemptId?: string; // set by history rows — used as a remount key
}

export interface QuizConfig {
  questions: SafeQuestion[];
  mode: "LESSON" | "EXAM" | "REVIEW" | "QUICK";
  label: string;
  lessonId?: string | null;
  timed?: boolean;
  secondsAllowed?: number | null;
  /** True only for full "Exam Simulation" papers (exam bar, pause, flag, answer sheet, section scoring). */
  exam?: boolean;
  /** Which exam-setup mode created this test — persisted on the attempt for history. */
  setupMode?: "QUICK" | "TIMED" | "WEAK" | "MIXED" | "EXAM";
  /** Original setup parameters — round-tripped to the attempt for retry-from-history. */
  setup?: AttemptSetupConfig | null;
  reviewTopics?: string[];
  source?: "lesson" | "exam" | "review" | "quick";
}

/** One row of exam/test history (from /api/exam/history). */
export interface ExamHistoryEntry {
  id: string;
  setupMode: "QUICK" | "TIMED" | "WEAK" | "MIXED" | "EXAM" | "PRACTICE";
  label: string;
  score: number;
  total: number;
  percentage: number;
  timeSec: number;
  paceSec: number;
  createdAt: string;
  /** Original setup parameters — present when the attempt can be retried. */
  setup?: AttemptSetupConfig | null;
}

export interface ExamHistoryStats {
  testsSat: number;
  papersSat: number;
  bestPct: number;
  avgPct: number;
  passRate: number;
  lastFiveAvg: number;
}

/** Report-card payload from /api/progress/report?from&to. */
export interface ReportCardData {
  student: { name: string; nickname: string | null; year: number; semester: number };
  range: { from: string; to: string; days: number };
  study: {
    minutes: number;
    activeDays: number;
    avgPerActiveDay: number;
    bestDay: { date: string; minutes: number } | null;
    lessons: number;
    quizzes: number;
    quizzesPassed: number;
    games: number;
    xp: number;
  };
  tests: {
    date: string;
    type: "QUICK" | "TIMED" | "WEAK" | "MIXED" | "EXAM" | "PRACTICE";
    label: string;
    score: number;
    total: number;
    percentage: number;
  }[];
  papersSat: number;
  avgScore: number | null;
  topics: {
    strong: { topic: string; total: number; correct: number; accuracy: number }[];
    weak: { topic: string; total: number; correct: number; accuracy: number }[];
  };
  badges: { title: string; icon: string | null; earnedAt: string }[];
  activity: { date: string; minutes: number }[];
  streak: { current: number; longest: number };
  exam: { date: string; daysLeft: number } | null;
  generatedAt: string;
}

export interface GameInfo {
  slug: string;
  title: string;
  description: string | null;
  icon: string | null;
  xpReward: number;
  unlockLevel: number;
  locked: boolean;
  best?: number;
  plays?: number;
}

export interface SmartPlanRow {
  kind: "review" | "lesson" | "drill" | "mock" | "activity" | "quiz";
  minutes: number;
  label: string;
  why: string;
  done: boolean;
  topic?: string;
  accuracy?: number;
  questionCount?: number;
  action: "review" | "lesson" | "drill" | "mock" | "games" | "quiz";
}

/** Adaptive plan payload from /api/plan — built from real signals (weak topics, exam countdown, remaining target minutes). */
export interface SmartPlanData {
  mode: "sprint" | "build" | "cruise";
  focusLabel: string;
  headline: string;
  rows: SmartPlanRow[];
  weakTopics: { topic: string; accuracy: number; total: number }[];
  remainingMin: number;
  targetMin: number;
  minutesDone: number;
  totalMin: number;
  doneCount: number;
  exam: { date: string | null; daysLeft: number | null };
  generatedAt: string;
  nextLessonId: string | null;
}

/** One guided-session step — a plan row plus where it should navigate. */
export interface SessionStep {
  row: SmartPlanRow;
  view: View | null;
}

export interface BootstrapData {
  greeting: { greeting: string; sub: string };
  today: {
    minutes: number;
    target: number;
    progressPct: number;
    lessons: number;
    quizzes: number;
    games: number;
    xp: number;
  };
  streak: { current: number; longest: number; studiedYesterday: boolean };
  xp: { total: number; level: number };
  mastered: number;
  completedLessons: number;
  publishedTotal: number;
  nextLesson: {
    id: string;
    title: string;
    description: string | null;
    durationMin: number;
    difficulty: string;
    course: string;
    courseSlug: string;
  } | null;
  review: { dueCount: number; items: { id: string; topic: string }[] };
  weakTopics: string[];
  dailyPlan: { kind: string; minutes: number; label: string; done: boolean; topic?: string }[];
  personalMessage: { text: string; tone: string } | null;
  coursesSummary: CourseSummary[];
  quickQuizCount: number;
  games: GameInfo[];
  badges: {
    earned: { slug: string; title: string; description: string; icon: string; earnedAt: string }[];
    all: { slug: string; title: string; description: string; icon: string; criteria: string | null; xp: number }[];
  };
  settings: Record<string, unknown> | null;
  exam: { date: string | null; daysLeft: number | null } | null;
}

export type View =
  | { name: "dashboard" }
  | { name: "curriculum"; year?: number }
  | { name: "course"; slug: string }
  | { name: "revision"; slug: string }
  | { name: "lesson"; id: string; autoplay?: boolean }
  | { name: "quiz"; config: QuizConfig }
  | { name: "exam-setup"; topic?: string; tab?: "test" | "history"; retry?: AttemptSetupConfig; preset?: { mode?: string; count?: number; secondsPerQuestion?: number } }
  | { name: "review" }
  | { name: "flashcards"; courseSlug?: string }
  | { name: "games" }
  | { name: "game"; slug: string }
  | { name: "progress" }
  | { name: "profile" }
  | { name: "saved" }
  | { name: "admin" };

export function levelForXpClient(xp: number): number {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 100)) + 1);
}

export function xpForNextLevelClient(level: number): number {
  return level * level * 100;
}
