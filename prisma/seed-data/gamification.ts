import type { SeedBadge, SeedGame, SeedPersonalMessage } from "./types";

// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — GAMIFICATION SEED
// Badges, games catalogue and personal messages for Mimie.
// Elegant, feminine, motivating — never childish.
// ─────────────────────────────────────────────────────────────

export const badges: SeedBadge[] = [
  {
    slug: "first-step",
    title: "First Step",
    description: "The journey of a thousand nursing hours begins with one quiet evening of study. You started — and starting is the hardest part.",
    icon: "Footprints",
    criteria: "Complete your first lesson or quiz attempt.",
    xp: 50
  },
  {
    slug: "7-day-bloom",
    title: "7-Day Bloom",
    description: "Seven days of showing up for your dream. Like a rose in the harmattan, you kept blooming anyway.",
    icon: "Flame",
    criteria: "Study for 7 consecutive days (maintain a 7-day streak).",
    xp: 100
  },
  {
    slug: "anatomy-queen",
    title: "Anatomy Queen",
    description: "Cranium to calcaneus, mitral valve to medulla — you wear the crown of the body's map. Own it, Your Majesty.",
    icon: "Scan",
    criteria: "Score 80% or higher on 5 anatomy & physiology quizzes.",
    xp: 100
  },
  {
    slug: "labour-pro",
    title: "Ward Round Pro",
    description: "Systematic to the last bed — observations, patterns, priorities. You walk the ward the way it should be walked, every single shift.",
    icon: "HeartPulse",
    criteria: "Complete the clinical nursing skills lessons and score 80% or higher on the course quiz.",
    xp: 120
  },
  {
    slug: "baby-whisperer",
    title: "Baby Whisperer",
    description: "You know what newborns and children are saying before they say it — grunts, recessions and all. The little ones of Ghana are in good hands.",
    icon: "Baby",
    criteria: "Complete the maternal & child health lessons and win the Newborn Challenge game.",
    xp: 100
  },
  {
    slug: "clinical-thinker",
    title: "Clinical Thinker",
    description: "While others memorise, you reason. You spot the one finding that matters first — that instinct is what nursing is made of.",
    icon: "Brain",
    criteria: "Correctly answer 10 clinical reasoning or clinical scenario questions.",
    xp: 120
  },
  {
    slug: "exam-warrior",
    title: "Exam Warrior",
    description: "Attempt after attempt, you face the questions like a warrior with a highlighter. The exam hall will fear you.",
    icon: "Target",
    criteria: "Complete 20 quiz attempts.",
    xp: 100
  },
  {
    slug: "perfect-quiz",
    title: "Perfect Quiz",
    description: "One hundred percent. Not one distractor survived you. Frame this feeling and revisit it before finals.",
    icon: "Trophy",
    criteria: "Score 100% on a quiz of at least 5 questions.",
    xp: 100
  },
  {
    slug: "research-girl",
    title: "Research Girl",
    description: "Qualitative, quantitative, ethical — you now speak the language of evidence, and evidence will carry your career.",
    icon: "FlaskConical",
    criteria: "Complete the research methods lessons and pass the course quiz.",
    xp: 80
  },
  {
    slug: "future-nurse",
    title: "Future Nurse",
    description: "Anatomy, med-surg, community, ethics, research — you have walked the whole road and it has grown you. The profession is almost yours.",
    icon: "GraduationCap",
    criteria: "Reach Level 10 and complete at least one lesson in every year of the curriculum.",
    xp: 150
  }
];

// ─────────────────────────────────────────────────────────────
// GAMES CATALOGUE
// ─────────────────────────────────────────────────────────────
export const games: SeedGame[] = [
  {
    slug: "anatomy-label",
    title: "Anatomy Label Challenge",
    description: "Drag each label onto the right part of the female reproductive system and lock the anatomy into memory.",
    icon: "Tag",
    xpReward: 20,
    unlockLevel: 1
  },
  {
    slug: "gcs-challenge",
    title: "GCS Challenge",
    description: "Read the eye, verbal and motor findings and score the Glasgow Coma Scale like a confident senior student.",
    icon: "Compass",
    xpReward: 25,
    unlockLevel: 1
  },
  {
    slug: "nursing-process-timeline",
    title: "Nursing Process Timeline",
    description: "Reorder the ADPIE journey from first assessment to revised plan until the whole process makes perfect sense.",
    icon: "ListOrdered",
    xpReward: 25,
    unlockLevel: 1
  },
  {
    slug: "clinical-priority",
    title: "Clinical Priority",
    description: "Four findings, one urgent — practise spotting which patient needs you first, every single time.",
    icon: "AlertTriangle",
    xpReward: 30,
    unlockLevel: 2
  },
  {
    slug: "infection-sort",
    title: "Infection Control Sort",
    description: "Sort real ward moments into safe, unsafe and needs-action until safe practice becomes muscle memory.",
    icon: "Shield",
    xpReward: 20,
    unlockLevel: 1
  },
  {
    slug: "medication-match",
    title: "Medication Match",
    description: "Match each drug class to its safety principle — no doses needed here, just safe thinking.",
    icon: "Pill",
    xpReward: 25,
    unlockLevel: 2
  },
  {
    slug: "newborn-challenge",
    title: "Newborn Challenge",
    description: "Sort newborn findings into normal, concerning and danger until your day-one assessment is razor sharp.",
    icon: "Baby",
    xpReward: 25,
    unlockLevel: 2
  },
  {
    slug: "sixty-second",
    title: "60-Second Nurse",
    description: "Rapid-fire questions against the clock — how much nursing can you trust under pressure?",
    icon: "Zap",
    xpReward: 35,
    unlockLevel: 3
  },
  {
    slug: "case-detective",
    title: "Case Detective",
    description: "Follow the clues through real emergencies and rehearse recognising and escalating in time.",
    icon: "Search",
    xpReward: 40,
    unlockLevel: 3
  },
  {
    slug: "memory-match",
    title: "Memory Match",
    description: "Flip cards to pair conditions with their hallmark signs and burn them into long-term memory.",
    icon: "Grid2x2",
    xpReward: 15,
    unlockLevel: 1
  },
  {
    slug: "picture-memory",
    title: "Picture Memory Match",
    description: "Flip real ward photos and match each picture to its nursing term — see it, name it, know it.",
    icon: "Heart",
    xpReward: 20,
    unlockLevel: 1
  },
  {
    slug: "diagram-dash",
    title: "Diagram Dash",
    description: "Drop the labels onto real ward photos — the assessment trolley, the infection control corner, the treatment room.",
    icon: "Target",
    xpReward: 25,
    unlockLevel: 1
  },
  {
    slug: "bubble-pop",
    title: "Bubble Pop",
    description: "Arcade bubbles float by with real photos — pop only the one the prompt asks for. Combos, levels, joy.",
    icon: "Sparkles",
    xpReward: 30,
    unlockLevel: 2
  },
  {
    slug: "ward-watch",
    title: "Ward Watch",
    description: "Live ward monitors tick before your eyes — spot the deteriorating patient and choose the next action before the clock beats you.",
    icon: "Activity",
    xpReward: 35,
    unlockLevel: 2
  },
  {
    slug: "word-bloom",
    title: "Word Bloom",
    description: "Guess the nursing term letter by letter and keep the rose in bloom — every wrong petal falls gently away.",
    icon: "Flower2",
    xpReward: 25,
    unlockLevel: 1
  }
];

// ─────────────────────────────────────────────────────────────
// PERSONAL MESSAGES — from the people who believe in her
// ─────────────────────────────────────────────────────────────
export const personalMessages: SeedPersonalMessage[] = [
  { text: "I'm proud of you. — your biggest fan", tone: "proud" },
  { text: "Tiny progress still counts.", tone: "warm" },
  { text: "Okay Mimie… that question was trying to humble you 😂", tone: "playful" },
  { text: "Look how far you've come.", tone: "proud" },
  { text: "You show up even on the hard days. That's the whole secret.", tone: "warm" },
  { text: "Future Nurse Mimie has entered the chat 💗", tone: "playful" },
  { text: "One lesson at a time — soon you'll be running the ward like it's nothing.", tone: "warm" },
  { text: "That streak is glowing. Keep it blooming 🌸", tone: "proud" },
  { text: "Your future patients are so lucky they haven't met you yet.", tone: "warm" },
  { text: "Rest is productive too. Water break, superstar.", tone: "playful" }
];
