// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch C (Comprehensive Exam Review +
// Clinical Case Simulation — final semester)
// 19 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Licensing Exam Strategy",
    description:
      "The last gate between you and the pin on your chest. Study the exam itself before you study another fact — its shape, its marks and the way its minutes should be spent.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the typical structure and marking logic of a nursing licensing examination.",
      "Explain why every question deserves an answer and how flag-and-return protects your score.",
      "Apply a personal pacing plan to a full-length paper.",
    ],
    tags: ["licensing exam", "strategy", "exam technique", "pacing"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The licensing examination of the Nursing and Midwifery Council of Ghana is the last gate between you and the pin. Before you memorise anything more, study the exam itself: how it is shaped, how marks are awarded, and how minutes are spent. Candidates fail this paper more often through poor strategy than through ignorance.\n\nThis lesson gives you the pass logic and a pacing plan, so that on the day your knowledge is spent where it earns the most marks.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the shape. The licensing examination typically combines written multiple-choice papers with a practical or oral assessment, and the written paper is weighted towards core nursing — medical-surgical nursing, maternal and child health, community health and mental health — with supporting questions from your foundation years. Every question normally carries the same mark, so an easy vital-signs question pays exactly what a hard management one does. Where there is no negative marking, a blank is the only unforgivable answer: eliminate what is clearly wrong, then choose.\n\nProtect the clock. Divide total minutes by the number of questions and keep a buffer for review. Work the paper twice: on the first pass answer everything you know and flag the doubtful; on the second pass spend the buffer on the flags. If a stem is long, read the final line — the actual question — before the story, then hunt the relevant findings. Length hides the question; the last line reveals it.",
      },
      {
        type: "clinical_pearl",
        body: "Nine minutes on one stubborn question buys five easier ones elsewhere. Flag, move, return — the mark is the same size wherever you earn it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During the paper, a candidate meets a complicated fluid-balance calculation and spends nine of her 100 minutes deciding between two options before guessing and moving on. Later she finds four easy questions in the final section that she never reached at all. What happened, and what should the next candidate do instead?\n\nAnswer: She paid nine minutes for one guess and lost four near-certain marks — a bad trade in a paper where every question is equal. The next candidate should flag the calculation immediately, collect the sure marks across the whole paper, and return to the flag with whatever review time remains, committing from elimination rather than leaving a blank.",
      },
      {
        type: "memory_trick",
        body: "PACE the paper: Preview the whole thing, Answer the sure ones, Come back to the flags, End with a sweep so no question stays blank.",
      },
      {
        type: "summary",
        body: "- Every question is worth the same mark — bank the easy ones first.\n- With no negative marking, a blank scores nothing: eliminate, then commit.\n- Work twice: pass one for the sure answers, pass two for the flags.\n- Read the last line of a long stem first — the question lives there.\n- Weight revision towards core nursing — medical-surgical, maternal and child health, community and mental health — the paper's centre of gravity.",
      },
    ],
    questions: [
      {
        topic: "Licensing Exam Strategy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A written paper has 100 questions and 120 minutes. What is the sound pacing plan?",
        options: [
          "Spend up to ten minutes on any question you find difficult",
          "Do the hardest questions first while your mind is fresh",
          "Allow about one minute per question and keep roughly 20 minutes to review flags",
          "Answer only the questions you are sure of and leave the rest blank",
        ],
        correctIndex: 2,
        explanation:
          "With equal marks, roughly a minute a question plus a review buffer collects the most certain marks. Dwelling on hard items, reversing the order, or leaving blanks all surrender marks.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Licensing Exam Strategy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Midway through the paper you are torn between two options on a long clinical stem. What is the best course of action before time runs out?",
        options: [
          "Leave it blank, because a wrong answer loses more than no answer",
          "Mark your best answer, flag the question, and return with the review buffer",
          "Re-read the stem again slowly until you feel certain",
          "Skip it permanently, since one question cannot change the result",
        ],
        correctIndex: 1,
        explanation:
          "Where wrong answers are not penalised, a blank scores nothing. Choose from elimination, flag, and return — certainty rarely arrives from re-reading, and one question can be the margin between pass and fail.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Licensing Exam Strategy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which topic area carries the heaviest weight in a nursing licensing written paper?",
        options: [
          "Pure anatomy of the skull and vertebrae",
          "Laboratory physics and instrument mechanics",
          "Core nursing — medical-surgical, maternal and child health, community and mental health",
          "Hospital accounts and storekeeping",
        ],
        correctIndex: 2,
        explanation:
          "Licensing papers centre on the core of safe practice — the adult ward, the mother and child, the community and the mind — with earlier years as support. The other options are side subjects, not the centre of gravity.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Licensing Exam Strategy",
        front: "Why does every question deserve an answer when there is no negative marking?",
        back: "A blank scores zero and a wrong answer costs nothing — eliminate the impossible options and commit before time ends.",
      },
      {
        topic: "Licensing Exam Strategy",
        front: "What does PACE stand for on exam day?",
        back: "Preview the paper, Answer the sure ones, Come back to the flags, End with a sweep so nothing is blank.",
      },
      {
        topic: "Licensing Exam Strategy",
        front: "Where do you look first in a long clinical stem?",
        back: "The last line — the actual question — then hunt the stem for the findings that answer it.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Licensing Examination Information for Candidates",
        note: "Verify current exam format, regulations and marking policy directly with the Council.",
      },
      {
        organization: "Association for Psychological Science",
        title: "Improving Students' Learning With Effective Learning Techniques (Dunlosky et al.)",
        year: "2013",
        url: "https://journals.sagepub.com/doi/10.1177/1529100612453266",
        note: "Peer-reviewed review of study techniques.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th edition)",
        note: "Standard nursing textbook — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Spaced Repetition: Study Smarter",
    description:
      "A lecture understood on Monday is a stranger by Friday — unless you fight the forgetting curve on schedule. Meet the memory science that quietly beats cramming.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe the forgetting curve and the spacing effect.",
      "Explain why testing yourself outperforms rereading notes.",
      "Apply an expanding review schedule to your own revision plan.",
    ],
    tags: ["revision", "memory", "spaced repetition", "active recall"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You know the feeling: a lecture understood on Monday is a stranger by Friday. That is not weakness — it is the forgetting curve, the natural decay every human memory follows. The students who beat licensing exams are not the ones who fight the curve hardest on one long night; they are the ones who time their reviews against it.\n\nThis lesson turns memory science into a simple system you can start tonight: spacing between reviews, and testing instead of rereading.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In the 1880s Hermann Ebbinghaus measured how fast learned material fades: steeply in the first days, then levelling off. Each well-timed review flattens the curve, so material survives longer with less effort — the spacing effect. The practical schedule is an expanding ladder: review new material after one day, then three days, a week, two weeks, and roughly monthly until the exam. The day-after review is the highest-yield minute in your whole plan, because that is when the curve falls steepest.\n\nThe second half of the system is the testing effect. Reading notes again feels fluent, but fluency is recognition, not recall — and the exam will ask you to retrieve, not recognise. Closing the book and asking yourself the question, using flashcards, or answering practice items strengthens the exact pathway the exam demands. The evidence is consistent: practice testing and distributed practice rate as the most effective study techniques, while rereading and highlighting sit near the bottom.",
      },
      {
        type: "clinical_pearl",
        body: "Study until you can produce the answer with the page shut, not nod at it with the page open. Recognition lies to you; retrieval never does.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two students revise the Glasgow Coma Scale. Ama rereads her notes five times through the week and feels confident; Efua reads once, then quizzes herself from a blank page on days one, three and seven. In the mock, both meet a scoring question about a drowsy patient, but only one can rebuild the answer. Whose memory holds, and why did the rereading feel so good while working so poorly?\n\nAnswer: Efua's holds. Rereading builds a comforting sense of familiarity that fades fast, while self-testing on days one, three and seven rebuilt the memory just as the forgetting curve would have taken it. The discomfort of retrieval is the feeling of learning itself.",
      },
      {
        type: "memory_trick",
        body: "Space it or waste it: review at 1, 3, 7 and 14 days, then monthly. And remember the golden rule of the curve — the day-after review saves the most memory for the least effort.",
      },
      {
        type: "summary",
        body: "- Memory decays steeply in the first days unless reviewed — the forgetting curve.\n- Reviews spaced at 1, 3, 7 and 14 days flatten the curve with less total effort.\n- Testing yourself, not rereading, trains what the exam actually demands.\n- The day-after review is the single highest-yield session in your plan.\n- Flashcards, blank-page recall and question banks are spacing made easy.",
      },
    ],
    questions: [
      {
        topic: "Spaced Repetition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the forgetting curve describe?",
        options: [
          "Recall of learned material drops steeply in the first days and then levels off",
          "Memory for motor skills lasts longer than memory for facts",
          "Forgetting is caused mainly by sleep deprivation",
          "Once material is understood, it cannot be forgotten",
        ],
        correctIndex: 0,
        explanation:
          "Ebbinghaus showed that memory decays fast early and slowly later. Understanding does not prevent forgetting — only well-timed review does.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Spaced Repetition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "According to learning research, which study techniques have the strongest evidence behind them?",
        options: [
          "Highlighting and rereading the night before",
          "Summarising chapters and colour-coding notes",
          "Practice testing and distributed practice over time",
          "Listening to recorded lectures while doing chores",
        ],
        correctIndex: 2,
        explanation:
          "Dunlosky and colleagues rated practice testing and distributed practice highest; highlighting, rereading and passive listening rank among the weakest techniques.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Spaced Repetition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You learn the emergency triage signs of a sick child today. Following a spacing schedule, when should your first review fall?",
        options: [
          "Immediately after the lesson, three times in a row",
          "Tomorrow, roughly one day later",
          "On the weekend, during a five-hour block",
          "Only when the topic appears in a mock exam",
        ],
        correctIndex: 1,
        explanation:
          "The expanding ladder starts at about one day, while the curve is steepest. Repeating the same evening is massed rereading, and leaving the topic until a mock lets the curve win.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Spaced Repetition",
        front: "What is the spacing effect?",
        back: "Reviews spread over days flatten the forgetting curve, so material survives longer with less study time than massed rereading.",
      },
      {
        topic: "Spaced Repetition",
        front: "Give the expanding review ladder.",
        back: "Review new material at 1 day, 3 days, 1 week, 2 weeks, then about monthly until the exam.",
      },
      {
        topic: "Spaced Repetition",
        front: "Why does rereading feel effective but fail in exams?",
        back: "It builds recognition and familiarity, but exams demand recall — retrieval practice, not nodding along, strengthens recall.",
      },
    ],
    sources: [
      {
        organization: "Association for Psychological Science",
        title: "Improving Students' Learning With Effective Learning Techniques (Dunlosky et al.)",
        year: "2013",
        url: "https://journals.sagepub.com/doi/10.1177/1529100612453266",
        note: "Peer-reviewed review of study techniques.",
      },
      {
        organization: "American Psychological Association",
        title: "Distributed Practice in Verbal Recall Tasks (Cepeda et al., Psychological Bulletin)",
        year: "2006",
        note: "Meta-analysis of the spacing effect — verify current literature.",
      },
      {
        organization: "Harvard University Press",
        title: "Make It Stick: The Science of Successful Learning (Brown, Roediger and McDaniel)",
        year: "2014",
        note: "Accessible summary of retrieval practice research.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Question Practice That Actually Works",
    description:
      "Two hundred questions answered and abandoned teach less than forty properly dissected. The learning hides in the review — this is deliberate practice, not screen-time.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe deliberate practice as it applies to multiple-choice drills.",
      "Explain the purpose and structure of an error log.",
      "Apply a review routine to every practice question block.",
    ],
    tags: ["practice questions", "technique", "deliberate practice", "error log"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Question banks feel productive: numbers climb, screens flash green. But volume is not skill. Two hundred questions answered and abandoned teach less than forty questions properly dissected — the learning hides in the review, and the review is a skill of its own.\n\nThis lesson turns a casual drill into deliberate practice: the targeted, feedback-rich kind that builds the reflexes both the exam and the ward will test.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Deliberate practice has three marks: it targets your weak spots, gives immediate feedback, and repeats with adjustment. After every block, hold a post-mortem on all the items — the ones you missed and the ones you got right. For each, ask: What was the topic? Why is the keyed answer right? Why was my wrong choice tempting? Then sort your misses into knowledge gaps, misread stems, distractor traps and time pressure — each has a different fix. Write every miss into an error log with topic and reason, and within a week the patterns surface as a short, honest list of true weaknesses.\n\nLet the log steer the plan: a weakness in drug-dose calculations deserves targeted drilling, not another mixed test. Review the questions you answered correctly too — if you cannot explain why the key is right, you guessed, and a lucky guess quietly files itself as knowledge. Finally, learn the examiner's fingerprints: options with absolutes like always and never are usually wrong, while the carefully qualified option is often the true one.",
      },
      {
        type: "clinical_pearl",
        body: "The candidates who pass are rarely the ones who did the most questions. They are the ones who could explain the most questions — right ones included.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two students each finish 1000 questions before the mock. One answers quickly, checks only her score of 68 percent, and moves on; the other does 40 a day and reviews every one, keeping an error log that names drug-dose calculations and misread stems as her two weaknesses. Whose score climbs, and what exactly makes the difference?\n\nAnswer: The second student climbs. Her review converts each question into feedback, and the error log turns 40 questions a day into targeted repair of two specific weaknesses. Checking a score measures the student; reviewing the questions changes her.",
      },
      {
        type: "memory_trick",
        body: "Every block ends with an autopsy: Answer, Autopsy, Log. If you only do the first step, you are practising the test, not learning from it.",
      },
      {
        type: "summary",
        body: "- The review, not the answering, is where question practice earns its marks.\n- Post-mortem every item: topic, why the key is right, why your choice tempted you.\n- Sort errors into knowledge gaps, misreads, traps and time — each has a different fix.\n- An error log turns scattered misses into a short list of true weaknesses.\n- Beware lucky guesses: if you cannot explain the key, you have not earned it.",
      },
    ],
    questions: [
      {
        topic: "Question Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where does most of the learning in question practice happen?",
        options: [
          "In the moment of answering, under mild time pressure",
          "In counting the day's total questions answered",
          "In comparing your score with classmates' scores",
          "In the careful review of explanations afterwards",
        ],
        correctIndex: 3,
        explanation:
          "Answering samples what you know; reviewing is what changes it. Scores and counts measure without teaching.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Question Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your error log shows that 14 of your last 22 misses involved drug-dose calculation items. What is the best response?",
        options: [
          "Keep doing mixed question blocks at the same pace",
          "Do fewer questions altogether so you make fewer errors",
          "Pause mixed drills for targeted revision and drilling of calculations",
          "Re-read the whole pharmacology textbook from chapter one",
        ],
        correctIndex: 2,
        explanation:
          "The log has found the weak circuit, and targeted practice repairs it. Continuing mixed blocks repeats the error, quitting avoids it, and rereading an entire text replaces focused repair with blanket effort.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Question Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature of an option usually signals a distractor rather than the keyed answer?",
        options: [
          "It uses qualified words such as usually and commonly",
          "It states a clear mechanism with a clinical example",
          "It uses absolute words such as always, never or only",
          "It is the shortest option on the list",
        ],
        correctIndex: 2,
        explanation:
          "Real clinical practice is qualified, so absolutist options are rarely defensible — examiners know it. Qualified, mechanism-based options are more often the carefully written keys.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Question Practice",
        front: "What are the four error categories to sort misses into?",
        back: "Knowledge gap, misread stem, distractor trap and time pressure — each points to a different fix.",
      },
      {
        topic: "Question Practice",
        front: "What belongs in an error log entry?",
        back: "Topic, question reference, your answer, the keyed answer, and the honest reason you missed it.",
      },
      {
        topic: "Question Practice",
        front: "Why review questions you answered correctly?",
        back: "To confirm your reasoning matches the key — a lucky guess unexamined becomes a false belief.",
      },
    ],
    sources: [
      {
        organization: "Association for Psychological Science",
        title: "Improving Students' Learning With Effective Learning Techniques (Dunlosky et al.)",
        year: "2013",
        url: "https://journals.sagepub.com/doi/10.1177/1529100612453266",
        note: "Peer-reviewed review of study techniques.",
      },
      {
        organization: "American Psychological Association",
        title: "The Role of Deliberate Practice in the Acquisition of Expert Performance (Ericsson et al.)",
        year: "1993",
        note: "Classic paper on deliberate practice — verify current literature.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Licensing Examination Information for Candidates",
        note: "Verify current exam regulations directly with the Council.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: The Foundation Era",
    description:
      "Anatomy, physiology and microbiology never left the syllabus — they just put on clinical clothes. Revisit Year 1 the way the examiner uses it: as the machinery behind every ward decision.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the highest-yield foundation topics: homeostasis, fluid balance, the cardiorespiratory machinery and the chain of infection.",
      "Explain how each foundation fact links to a clinical decision on a nursing ward.",
      "Apply spaced review to the core numbers and rules of Year 1.",
    ],
    tags: ["review", "year 1", "anatomy", "physiology", "microbiology"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 1 gave you the language of the body, and the licensing paper never forgot it. Foundation questions rarely stand alone now; they hide inside clinical stems. A question about a diabetic foot ulcer is really a question about peripheral nerves and small vessels, and one about a patient going quiet and drowsy is really a question about oxygen and glucose delivery to the brain.\n\nSo revise Year 1 the way the examiner uses it: as the machinery behind every complication you have since studied — anatomy, physiology, microbiology and the foundations of nursing itself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Revise the machines behind the medicines. **Homeostasis** is negative feedback — a sensor, a controller, an effector — and almost every disease you know is one of those three failing. **Fluid balance**: about two-thirds of body water lives inside cells; the outside third splits into interstitial fluid and the plasma you can bleed, transfuse and chart. **Blood pressure** is pump times pipes — cardiac output multiplied by vessel resistance — which is why a failing pump and dilated pipes both produce the same pale, clammy, fainting patient. **Gas exchange** happens only across the alveolar membrane: everything above the alveoli is plumbing, everything below is blood. The **nephron** filters, reabsorbs and concentrates — urine output is kidney perfusion made visible. **Insulin** lowers glucose; glucagon raises it; the brain cannot store either fuel's currency.\n\nMicrobiology and foundations live on in every handwash and every observation chart. The **chain of infection** has six links — agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host — and gloves, clean technique and safe sharps all attack the transmission link. The WHO **five moments** of hand hygiene carry easy marks and save bloodstreams. The **nursing process** still runs assess, diagnose, plan, implement, evaluate — and the vital-sign ranges you learned in first year are the flags on every chart you will ever read.",
      },
      {
        type: "table",
        title: "The numbers that anchor every ward shift",
        body: "| Observation | Adult normal | The red-flag side |\n|---|---|---|\n| Temperature | 36.5 to 37.5 °C | 38 or more, or under 36 |\n| Pulse | 60 to 100 per minute | Over 100, or under 50, or a new irregularity |\n| Respiratory rate | 12 to 20 per minute | 24 or more, or 8 or fewer — never charted as noise |\n| Blood pressure (systolic) | roughly 90 to 140 mmHg | Under 90, or a fall of 30 or more from the patient's baseline |\n| Oxygen saturation | 94 to 98 percent | Under 90 — but 88 to 92 is the deliberate target where COPD risks carbon dioxide retention |\n| Urine output | at least 0.5 mL/kg/hour | Scanty urine for hours — the kidneys are speaking |\n\nNumbers are read against the patient's own baseline, not just the printed range — a pressure of 98 in someone who ran 130 all week is a falling pressure wearing a normal costume.",
      },
      {
        type: "clinical_pearl",
        body: "Revise physiology as ward arithmetic: blood pressure is pump times pipes, urine output is kidney perfusion, and new confusion is oxygen, glucose or infection until excluded. Every abnormal observation points back to a Year 1 machine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A licensing stem describes a patient three days after surgery who has become confused, breathes at 24 per minute and records an oxygen saturation of 90 percent; it asks which foundation mechanism explains the confusion. Another asks why a patient with severe diarrhoea has a weak, fast pulse. Both are Year 1 questions wearing Year 4 clothes — can you answer both?\n\nAnswer: The confused patient is hypoxaemic — insufficient oxygen crossing the alveolar membrane leaves the brain, which cannot store oxygen, starving; confusion is a respiratory emergency until excluded. The diarrhoea patient has lost fluid from the extracellular compartment, shrinking plasma volume; the heart compensates by beating fast and faintly, and the weak pulse is the volume, not the pump.",
      },
      {
        type: "memory_trick",
        body: "The brain runs on two deliveries — oxygen and glucose; when a patient goes quiet, check both. And keep the water map on one hand: two-thirds inside the cells, most of the rest bathing them, and only the smallest third in the pipes you can chart.",
      },
      {
        type: "quiz_prompt",
        title: "The five moments",
        body: "Cover the list and recite the WHO five moments of hand hygiene — the ritual that protects every patient you touch.\n\nAnswer: Before touching a patient, before a clean or aseptic procedure, after body-fluid exposure, after touching a patient, and after touching the patient's surroundings.",
      },
      {
        type: "summary",
        body: "- Homeostasis is negative feedback; disease is one of its three parts failing.\n- Two-thirds of body water is intracellular; plasma is the smallest, chartable third.\n- Blood pressure = cardiac output × resistance; gas exchange happens only at the alveoli; urine output is kidney perfusion.\n- The chain of infection's transmission link is where gloves, clean technique and safe sharps act.\n- Adult respiratory rate 12 to 20 — 24 or more is always a flag; 88 to 92 is the deliberate target in CO₂-retaining COPD.\n- The nursing process runs assess, diagnose, plan, implement, evaluate — the frame of every care question.",
      },
    ],
    questions: [
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the respiratory system, where does the actual exchange of oxygen and carbon dioxide with blood occur?",
        options: [
          "The trachea and main bronchi",
          "The alveolar membrane",
          "The pleural space",
          "The nasal passages",
        ],
        correctIndex: 1,
        explanation:
          "Everything above the alveoli is plumbing; the thin alveolar membrane is the only true border between air and blood. This is why alveolar disease — pneumonia, oedema — drops saturation while airway narrowing mostly adds work.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with severe watery diarrhoea has a fast, weak, thready pulse. Which foundation mechanism explains it?",
        options: [
          "Fluid lost from the intracellular compartment has thickened the blood",
          "Loss of extracellular fluid has reduced plasma volume, so the heart compensates with rate",
          "Diarrhoea toxins directly stimulate the sinoatrial node",
          "Red cell destruction in the gut has reduced oxygen carriage",
        ],
        correctIndex: 1,
        explanation:
          "Watery stool is extracellular fluid leaving the body; plasma volume shrinks, stroke volume falls, and the heart compensates with tachycardia — a weak, fast pulse is the volume speaking, not the pump failing first.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Gloves, clean technique and safe sharps disposal interrupt which link of the chain of infection?",
        options: [
          "The infectious agent",
          "The reservoir",
          "The mode of transmission",
          "The susceptible host",
        ],
        correctIndex: 2,
        explanation:
          "These barriers stand between the reservoir and the next host — the transmission link. You rarely destroy the agent or the reservoir at the bedside; you block the journey between them.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient with long-standing COPD records an oxygen saturation of 89 percent on the ward. How should this read?",
        options: [
          "A dangerous value — oxygen must be increased until it reaches 98 percent",
          "Within the deliberate 88 to 92 percent target range for patients at risk of carbon dioxide retention",
          "Normal for every adult and requiring no action",
          "Proof that the patient needs immediate intubation",
        ],
        correctIndex: 1,
        explanation:
          "In COPD with hypercapnia risk, 88 to 92 percent is the intentional target — chasing higher saturations can worsen carbon dioxide retention. The decision belongs to the treating team; your job is to know the target exists and to titrate oxygen as prescribed.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Foundation Review",
        front: "Give the fluid compartments and their rough proportions.",
        back: "About two-thirds intracellular; the extracellular third divides into interstitial fluid (most of it) and plasma — the smallest, chartable portion that you can bleed, transfuse and record.",
      },
      {
        topic: "Foundation Review",
        front: "Blood pressure as one formula?",
        back: "BP = cardiac output × peripheral resistance — a failing pump and widely dilated vessels can produce the same shocked patient by different roads.",
      },
      {
        topic: "Foundation Review",
        front: "The WHO five moments of hand hygiene?",
        back: "Before touching a patient; before a clean or aseptic procedure; after body-fluid exposure; after touching a patient; after touching the patient's surroundings.",
      },
      {
        topic: "Foundation Review",
        front: "Why is new confusion a vital sign?",
        back: "The brain cannot store oxygen or glucose — confusion usually means delivery of one of them, or infection, is failing until excluded; it is scored as a red flag in early-warning systems.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — educational source.",
      },
      {
        organization: "WHO",
        title: "WHO Guidelines on Hand Hygiene in Health Care",
        year: "2009",
        url: "https://www.who.int/publications/i/item/9789241597906",
        note: "Source of the five moments — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Foundation structure of the programme — verify with the Council.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: The Medical-Surgical Era",
    description:
      "Disease and the drugs that treat it — Year 2 returns as exam stems about a drug in your hand and a monitor rule at the bedside. Revise it as condition, drug, danger, first action.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the pathology concepts and drug classes a nurse must know cold for licensing.",
      "Explain the monitoring rules that make high-risk medicines safe on a ward.",
      "Apply ABC priority logic to mixed medical-surgical questions.",
    ],
    tags: ["review", "year 2", "pharmacology", "medical surgical", "priority setting"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 2 gave you disease and the drugs that treat it — pathology, pharmacology, and the first two years of medical-surgical nursing. The licensing paper visits that era constantly, because every complication you manage has a medicine in your hand and a monitoring rule at the bedside.\n\nRevise the era the way the exam builds it: a condition, its drug, its danger and your first action.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Pathology in three ideas. **Inflammation** shows its five cardinal signs — heat, redness, swelling, pain and loss of function — which is why a mild fever on the first post-operative night is often the body repairing itself, while a fever climbing on day three with a rising pulse is infection until excluded. **Ischaemia** starves tissue and turns to **infarction** when tissue dies — the brain tolerates about four minutes, the heart muscle minutes more, which is why response time is treatment. **Necrosis and repair** explain debridement, granulating wounds and why some wounds close and others need packing.\n\nPharmacology as the nurse uses it. The body handles every drug in four movements — **absorb, distribute, metabolise, excrete** — and the last two belong to the liver and kidneys, which is why failing organs change doses. Carry the classes with their dangers: **insulin** trades high glucose for hypoglycaemia; **opioids** trade pain for respiratory depression; **anticoagulants** trade clots for bleeding; **corticosteroids** trade inflammation for infection risk and rising glucose; **antihypertensives** trade pressure for faints and falls. Antibiotics demand the full course to prevent resistance — and a positive malaria test before treatment, per national guideline, separates treatment from guessing. Tetracyclines stay out of pregnancy and young children because they stain developing teeth and bone.\n\nCarry ABC logic into every mixed question: whatever the diagnosis, the option that protects breathing or circulation outranks comfort, education and paperwork. Sepsis stems run on the same ladder — fever with fast pulse, fast breathing or new confusion means screen, escalate and antibiotics within the first hour, not observation.",
      },
      {
        type: "table",
        title: "Drugs the paper loves — class, job, danger, your watch",
        body: "| Class | What it does | The danger you watch | Your bedside check |\n|---|---|---|---|\n| Insulin | Lowers blood glucose | Hypoglycaemia — sweat, tremor, confusion, then drowsiness | Meals eaten, peak timing, glucose checks, fast sugar at hand |\n| Opioids | Relieve severe pain | Respiratory depression and sedation | Respiratory rate and sedation level before and after every dose |\n| Anticoagulants | Prevent and treat clots | Bleeding — visible and hidden | Bleeding gums, urine, stool, bruising, pressure areas, soft-bristle honesty |\n| Corticosteroids | Dampen inflammation | Infection risk, glucose rise, gastric irritation | Temperature, glucose, mouth and skin, never stop suddenly |\n| Antihypertensives | Lower blood pressure | Falls, faints, reflex fast pulse | Rise slowly, first dose caution, lying and standing readings |\n\nLearn one danger and two observations for every drug you revise — the examiner asks for the observation as often as for the drug.",
      },
      {
        type: "clinical_pearl",
        body: "For every drug you revise, learn one antidote and two observations. The nurse's job is not to recite the dose — it is to be the person in the room who notices the danger first.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old on morning insulin is found sweating, trembling and answering slowly two hours after her injection; her breakfast tray is barely touched. What is happening, and what happens in the next ten minutes?\n\nAnswer: Insulin is peaking into a meal that never arrived — hypoglycaemia. If she is alert and swallowing, a fast-acting sugar source now, recheck after about 15 minutes, then a proper snack to hold the recovery; if she is drowsy, nothing by mouth — protect the airway and call for urgent help. Report the event, document the times, and flag the insulin-to-breakfast mismatch for review. The first action is sugar, not another set of vitals.",
      },
      {
        type: "memory_trick",
        body: "Every Year 2 stem runs C-D-D-F: Condition, Drug, Danger, First action. If you can fill those four slots for a stem, you have the answer before you read the options.",
      },
      {
        type: "quiz_prompt",
        title: "The pain-versus-breathing trap",
        body: "A patient rates his pain 8 out of 10, but his respiratory rate is 10 per minute and he is drowsy. The next opioid is due. What wins, and why?\n\nAnswer: Safety wins. A rate under 12 with drowsiness signals respiratory depression — the dose is held and the prescriber informed, with sedation and breathing watched closely. Pain is real and will be re-treated by a safer route once breathing is secure; a dead patient has no pain score.",
      },
      {
        type: "summary",
        body: "- Five cardinal signs of inflammation; day-one post-op fever is often repair, day-three fever with tachycardia is infection until excluded.\n- Absorb, distribute, metabolise, excrete — the liver and kidneys are the exit, so failing organs change doses.\n- Insulin, opioids, anticoagulants, corticosteroids, antihypertensives: know the danger and the observation for each.\n- Antibiotics need the full course; malaria treatment follows a positive test per national guideline; tetracyclines stain young teeth and bone.\n- ABC wins every mixed question: breathing and circulation before comfort, education and paperwork.",
      },
    ],
    questions: [
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set lists the cardinal signs of inflammation?",
        options: [
          "Heat, redness, swelling, pain and loss of function",
          "Fever, rash, jaundice and weight loss",
          "Cough, sputum, crackles and dullness",
          "Pallor, coldness, numbness and absent pulses",
        ],
        correctIndex: 0,
        explanation:
          "The classic five — heat, redness, swelling, pain and loss of function — follow the vascular and cellular events of acute inflammation; the other sets describe infection patterns or ischaemia.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on insulin becomes sweaty, trembly and confused two hours after her morning dose, with an untouched breakfast tray. What is the immediate response?",
        options: [
          "Reposition her and take a full set of observations first",
          "Give a fast-acting sugar source if she is alert and swallowing, and recheck",
          "Withhold all food until the doctor reviews her",
          "Document the episode and continue the ward round",
        ],
        correctIndex: 1,
        explanation:
          "Peak insulin with no food is hypoglycaemia; fast sugar reverses it if she can swallow safely, with a recheck after about 15 minutes and a snack to hold it. If she were drowsy, nothing by mouth and urgent help — but the first instinct is sugar, not surveys.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving a scheduled opioid to a drowsy patient, which check decides whether the dose is safe?",
        options: [
          "The pain score alone",
          "The respiratory rate and level of sedation",
          "The blood pressure and temperature",
          "The time since the last dose only",
        ],
        correctIndex: 1,
        explanation:
          "Opioids kill by depressing respiration; rate and sedation are the safety gates before every dose. Pain score and timing matter, but a drowsy patient breathing slowly is not a candidate for more opioid.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Medical-Surgical Review",
        front: "The four movements of every drug through the body?",
        back: "Absorb, distribute, metabolise, excrete — the last two belong to the liver and kidneys, so organ failure changes dosing.",
      },
      {
        topic: "Medical-Surgical Review",
        front: "Insulin's danger and your two observations?",
        back: "Hypoglycaemia — watch that meals are actually eaten and know the peak timing; sweat, tremor and confusion are the early alarms, drowsiness the late one.",
      },
      {
        topic: "Medical-Surgical Review",
        front: "Opioid safety check before and after every dose?",
        back: "Respiratory rate and sedation level — depression of breathing is the lethal danger, so the rate under 12 or a drowsy patient holds the dose.",
      },
      {
        topic: "Medical-Surgical Review",
        front: "Why must antibiotics be completed and malaria tested before treatment?",
        back: "Short courses breed resistance in the surviving organisms; and fever in Ghana has many causes — a positive test before antimalarial treatment separates therapy from guessing.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National guidelines — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th edition)",
        note: "Standard nursing textbook — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },
  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: Core Nursing",
    description:
      "The heart of the paper and the heart of your profession — medical-surgical nursing, maternal and child health, community and mental health, compressed for fast revision.",
    difficulty: "Hard",
    durationMin: 14,
    objectives: [
      "Describe the Year 3 high-yield core: deterioration and sepsis, maternal and child health, community nursing and mental health.",
      "Explain the recognition-and-referral instinct that links all four domains.",
      "Apply core ranges, schedules and danger signs accurately to mixed stems.",
    ],
    tags: ["review", "year 3", "medical surgical", "maternal child health", "mental health"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "This is the centre of gravity. Year 3 is where you became a clinical nurse — medical-surgical nursing III and IV, maternal and child health, community health and mental health — and the licensing examiner spends the most marks here because this is what you will do most of.\n\nThe good news: Year 3 rewards exactly the knowledge you already carry on your fingers. This lesson compresses the four domains into the facts the paper loves, so your revision can be fast and targeted rather than endless.",
      },
      {
        type: "text",
        title: "The core ideas — the adult ward",
        body: "Medical-surgical nursing at exam level runs on one instinct: **how sick, and who must see this now?** Trends beat snapshots — a respiratory rate climbing from 18 to 22 to 26 is the body confessing before the blood pressure falls. **Sepsis** is the paper's favourite deterioration: fever with tachycardia, fast breathing or new confusion means screen for sepsis, escalate, cultures before antibiotics where possible, and antibiotics within the first hour of recognition. The fluid balance chart and the daily weight catch creeping overload in heart failure — two kilograms in three days is a reportable warning. Chronic care carries easy marks too: the diabetic foot checked every visit, the hypertensive who must not stop medicines because he feels well, and the tuberculosis patient supported to complete treatment.",
      },
      {
        type: "text",
        title: "The core ideas — mother, child and community",
        body: "Maternal and child health questions test the nurse's role as much as the facts. Antenatal care follows the WHO model — the first contact before 12 weeks, at least eight contacts across pregnancy — with danger signs that send a woman to a facility now: bleeding, severe headache with blurred vision, swelling of face and hands, reduced fetal movement, fever, and labour before 37 weeks. The maternity team leads births; you support, monitor, educate and escalate — recognition and referral are your surgery. Essential newborn care is warmth, drying, feeding in the first hour and clean cord care; the immunization timetable is a favourite stem. Community health runs the referral chain — CHPS compound to health centre to district hospital to region — with surveillance reporting and health education through community leaders. Mental health stems reward therapeutic communication: open questions, reflection, silence — never arguing with a hallucination, and addressing the fear it brings. Remember that families may attribute illness to spiritual causes; acknowledge the belief, explain the treatability, and keep the door to care open.",
      },
      {
        type: "table",
        title: "Ghana's routine immunization timetable at a glance",
        body: "| Age | Vaccines |\n|---|---|\n| Birth | BCG and OPV-0 |\n| 6 weeks | Pentavalent-1, OPV-1, PCV-1, rotavirus-1 |\n| 10 weeks | Pentavalent-2, OPV-2, PCV-2, rotavirus-2 |\n| 14 weeks | Pentavalent-3, OPV-3, PCV-3, IPV |\n| 9 months | Measles-rubella-1 and yellow fever |\n| 18 months | Measles-rubella-2 |\n\nDefaulter tracing belongs to the community nurse — the register is a clinical tool, not stationery. Verify the current schedule with the Ghana Health Service, and teach every caregiver the return date before they leave.",
      },
      {
        type: "clinical_pearl",
        body: "If a child cannot drink or breastfeed, vomits everything, has convulsed in this illness, or is abnormally drowsy, that child is not sent home — general danger signs mean assessment today, and your exam answer is always urgent action, never reassurance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is a busy OPD screening queue and three situations arrive within one hour: a diabetic with a warm, swollen, painful foot; a woman at 34 weeks with headache and swelling of her face; and a nine-month-old who has stopped feeding and is drowsy. Rank them by urgency and name each first move.\n\nAnswer: The child is first — drowsy and not feeding are general danger signs, so this is an emergency assessment now. The pregnant woman is next — headache with facial swelling at 34 weeks is severe pre-eclampsia until excluded: blood pressure and protein check, and call the maternity team immediately. The diabetic foot is a same-day urgent review — infection in a diabetic foot can escalate fast — but it waits behind the other two. All three answers are the same Year 3 instinct: recognise, act, escalate.",
      },
      {
        type: "memory_trick",
        body: "The Year 3 core runs on two questions: 'How sick is this?' and 'Who must see this now?' Every domain — ward, maternity, community, mental health — answers with the same instinct: recognise, respond, refer.",
      },
      {
        type: "quiz_prompt",
        title: "The four danger signs",
        body: "A mother brings her child to your CHPS compound. Name, from memory, the four IMCI general danger signs that make any sick child an urgent case.\n\nAnswer: Unable to drink or breastfeed, vomiting everything, convulsions during this illness, and lethargy or unconsciousness. Any one of them sends the child for urgent assessment — none of them goes home with reassurance.",
      },
      {
        type: "summary",
        body: "- Trends beat snapshots; sepsis means screen, escalate, cultures then antibiotics within the first hour.\n- Antenatal care: first contact before 12 weeks, at least eight contacts; bleeding, headache with visual change, facial swelling, reduced movements, fever or preterm labour mean facility now.\n- The maternity team leads births — the nurse supports, monitors, educates and escalates, and never abandons the woman.\n- Immunization anchors: BCG and OPV-0 at birth, pentavalent-PCV-rotavirus-polio at 6, 10 and 14 weeks, measles-rubella and yellow fever at 9 months, MR-2 at 18 months.\n- Child danger signs: cannot drink, vomits everything, convulsions, abnormally drowsy — urgent, never home.\n- Mental health: therapeutic communication; never argue with the hallucination — address the fear and keep care possible.",
      },
    ],
    questions: [
      {
        topic: "Core Nursing Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to the WHO antenatal care model, when should the first antenatal contact take place, and how many contacts are recommended overall?",
        options: [
          "At 20 weeks, with four contacts in total",
          "Before 12 weeks, with at least eight contacts across the pregnancy",
          "Only when the woman feels the baby move, then monthly",
          "At booking after 28 weeks, then weekly until birth",
        ],
        correctIndex: 1,
        explanation:
          "The current WHO model recommends the first contact within the first trimester — before 12 weeks — and at least eight contacts in total, replacing the old minimal-visit schedules. Early booking catches anaemia, hypertension, malaria prevention and HIV screening in time to matter.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Core Nursing Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks attends your OPD complaining of frontal headache and swelling of her face and hands. What is the correct first response?",
        options: [
          "Give paracetamol for the headache and review at the next antenatal visit",
          "Check her blood pressure and test her urine for protein, and call the maternity team now",
          "Reassure her that ankle swelling is normal in pregnancy",
          "Refer her for physiotherapy and salt reduction advice",
        ],
        correctIndex: 1,
        explanation:
          "Headache with facial and hand swelling in the third trimester is severe pre-eclampsia until excluded — blood pressure and urine protein now, and the maternity team informed immediately. Analgesia and reassurance risk the seizure that follows untreated disease.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Core Nursing Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which child must be assessed as an emergency rather than sent home with advice?",
        options: [
          "A playful two-year-old with a runny nose and mild cough",
          "A breastfed five-month-old who has fed poorly for one feed but is alert",
          "A ten-month-old who vomits everything and is abnormally drowsy",
          "A four-year-old with a scraped knee and normal behaviour",
        ],
        correctIndex: 2,
        explanation:
          "Vomiting everything and abnormal drowsiness are IMCI general danger signs — urgent assessment regardless of what else the examination finds. The other children describe alert, behaving children whose complaints can follow routine pathways.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Core Nursing Review",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient on your psychiatric admission ward tells you the voices say he is evil and must be punished. Which response is therapeutically correct?",
        options: [
          "Tell him firmly that the voices are not real and he must ignore them",
          "Agree that the voices sound frightening so he feels accepted",
          "Say you do not hear the voices, but you can see they frighten him, and invite him to talk about it",
          "Change the subject to distract him from the voices",
        ],
        correctIndex: 2,
        explanation:
          "The therapeutic rule is honest presence without validating the content: state your reality, name his feeling, and open the conversation. Arguing invites defensiveness, agreeing reinforces the delusion, and distraction abandons the fear he was trusting you with.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Core Nursing Review",
        front: "The four IMCI general danger signs?",
        back: "Unable to drink or breastfeed, vomits everything, convulsions in this illness, lethargic or unconscious — any one means urgent assessment today.",
      },
      {
        topic: "Core Nursing Review",
        front: "The sepsis recognition quartet in an adult?",
        back: "Fever (or low temperature) with fast pulse, fast breathing, or new confusion — screen, escalate, cultures before antibiotics where possible, antibiotics within the first hour.",
      },
      {
        topic: "Core Nursing Review",
        front: "Immunization anchor points in Ghana's EPI?",
        back: "BCG and OPV-0 at birth; pentavalent, PCV, rotavirus and polio at 6, 10 and 14 weeks; measles-rubella and yellow fever at 9 months; MR-2 at 18 months.",
      },
      {
        topic: "Core Nursing Review",
        front: "Antenatal danger signs that mean facility now?",
        back: "Bleeding, severe headache with blurred vision, swelling of face and hands, reduced fetal movement, fever, and labour before 37 weeks.",
      },
      {
        topic: "Core Nursing Review",
        front: "The nurse's role in maternal care?",
        back: "Support, monitor, educate and escalate — the maternity team leads births; the nurse prepares, recognises, refers and never abandons the woman.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Model IMCI Handbook: Integrated Management of Childhood Illness",
        year: "2005",
        note: "Danger signs and fast-breathing thresholds — check for latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization (EPI) Schedule",
        note: "Ghana's routine immunization timetable — verify current schedule with GHS.",
      },
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        note: "Eight-contact model — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: Advanced Practice and Leadership",
    description:
      "The layer that turns a technician into a professional — emergencies handled calmly, ethics reasoned honestly, research judged fairly, a ward run with sense. The paper tests all four, often in one stem.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Describe the ABCDE approach, the safe-surgery checklist and the early-warning logic of critical care.",
      "Explain the four ethical principles and the consent conversation, with ward examples.",
      "Apply leadership habits — SBAR, delegation with names, escalation before collapse — to ward scenarios.",
    ],
    tags: ["review", "year 4", "critical care", "ethics", "leadership"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 4 added the layer that turns a technician into a professional: critical care and perioperative practice handled calmly, ethics reasoned honestly, research judged fairly, and a ward run with sense. The paper tests all four, usually inside the same stem — a crisis, a decision, a duty.\n\nThis lesson refreshes the final layer in the order exams love it: the emergency, the principle, the paperwork.",
      },
      {
        type: "text",
        title: "The core ideas — the emergency layer",
        body: "**ABCDE** is the alphabet of every emergency: Airway (a patient talking has, by definition, a working one), Breathing (rate, effort, oxygen saturation, listen), Circulation (pulse, pressure, capillary refill, urine, bleeding), Disability (AVPU responsiveness, pupils, and — the step everyone forgets — glucose), Exposure (undress once, inspect everywhere, then cover and warm). Treat as you find: fix each problem before moving to the next letter. Early-warning scores formalise the same instinct — a rising total, or any single parameter scoring as extreme (like new confusion or a very abnormal respiratory rate), triggers urgent review. Oxygen is titrated to a target range — commonly 94 to 98 percent, and 88 to 92 where COPD risks carbon dioxide retention.\n\nThe perioperative layer runs on the **WHO Surgical Safety Checklist**: sign in before anaesthesia, time out before incision, sign out before leaving theatre — the pause that catches wrong site, wrong patient and missing antibiotics. Pre-operative fasting keeps the stomach empty — typically no solids for six hours and no clear fluids for two, per your facility's policy. Recovery-room nursing watches airway, bleeding, pain, temperature and urine — in that priority order, because airway outranks warmth and comfort.",
      },
      {
        type: "text",
        title: "The core ideas — principle and paperwork",
        body: "Ethics at exam level is four principles and one conversation. **Autonomy** — the patient's right to decide; consent means capacity, information and freedom from pressure, and refusal is documented with risks explained and the door left open. **Beneficence and non-maleficence** — the do-good and no-harm pair that makes you question an intervention even when it is available. **Justice** — fairness: the same quality of care for the market woman and the minister's wife, and transparent decisions when resources run short. Research ethics rides the same rails: ethics-committee approval before data collection, informed consent, confidentiality, and the right to withdraw.\n\nLeadership answers reward the same three habits every time: **SBAR** for escalation — Situation, Background, Assessment, Recommendation, with the recommendation spoken aloud; **delegation with names** — right task, right person, right supervision, and feedback heard; and **documentation at the bedside**, written at the time rather than reconstructed at the desk. A near-miss is reported, not buried — honest systems are the ones that stop killing patients.",
      },
      {
        type: "table",
        title: "The ABCDE sweep in one glance",
        body: "| Step | What you check | Fix as you find |\n|---|---|---|\n| A — Airway | Talking? Choking sounds? Secretions? | Position, suction, chin lift, call for airway help |\n| B — Breathing | Rate, effort, depth, saturation, breath sounds | Sit up, oxygen to the prescribed target, treat the cause found |\n| C — Circulation | Pulse, pressure, refill, urine, obvious bleeding | Pressure on bleeding, IV access, fluids as prescribed, monitor |\n| D — Disability | AVPU, pupils, and glucose | Treat low glucose, protect a drowsy airway, reassess |\n| E — Exposure | The whole body, once | Inspect, then cover and warm — exposure without warmth harms |\n\nThe sweep is repeated, not single-use — reassess after every intervention, because the letters move.",
      },
      {
        type: "clinical_pearl",
        body: "In ethics stems, the option that respects the patient's own decision — while documenting and continuing care — is almost always the key. Coercion never is. And the D in ABCDE hides glucose: a drowsy patient is a glucose check, not just a pupil check.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A patient collapses on your ward; you run the ABCDE sweep and he stabilises enough to talk — and then refuses the blood transfusion arranged for his severe anaemia, saying his faith forbids it. The doctor is annoyed and the family is divided. What three duties hold simultaneously in the next hour?\n\nAnswer: The duty of care continues — every non-blood measure, oxygen, close monitoring and treatment of the underlying cause carries on. The duty to respect autonomy holds — counsel clearly and without threats, document his informed refusal in his own words with a witness, and inform the senior team. And the duty of record holds — SBAR the whole event with times, including the ABCDE findings and the conversation, so the next shift inherits facts, not rumours. Care does not stop when a choice is not yours.",
      },
      {
        type: "memory_trick",
        body: "ABCDE plus one: Glucose on the way through Disability. SBAR — and say the Recommendation, because it is the part juniors forget. Ethics: All Brave Nurses Justly — Autonomy, Beneficence, Non-maleficence, Justice.",
      },
      {
        type: "quiz_prompt",
        title: "The theatre pause",
        body: "The theatre team stops before the skin incision and confirms patient, procedure, site and antibiotics. Which phase of the WHO Surgical Safety Checklist is this, and what are the other two?\n\nAnswer: The time out — the pause before incision. The other two are sign in, before anaesthesia, and sign out, before the patient leaves theatre. Three pauses, three chances to catch the irreversible error.",
      },
      {
        type: "summary",
        body: "- ABCDE, treat-as-you-find, repeat after every intervention — and glucose lives in D.\n- Early-warning: a rising total or any extreme single parameter triggers urgent review.\n- Oxygen to target: 94–98 typically, 88–92 in CO₂-retaining COPD.\n- Surgical safety: sign in, time out, sign out; fasting per policy — commonly 6 hours solids, 2 clear fluids.\n- Four principles; consent is capacity, information and freedom; refusal is documented, not overridden.\n- SBAR with the recommendation spoken; delegate with names; document at the bedside; report near-misses.",
      },
    ],
    questions: [
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During the D of an ABCDE assessment on a drowsy post-operative patient, which check is most often forgotten yet changes management immediately?",
        options: [
          "Pupil size and equality",
          "Blood glucose",
          "Limb power",
          "Calf tenderness",
        ],
        correctIndex: 1,
        explanation:
          "Disability covers AVPU responsiveness and pupils — but the glucose check is the forgotten step that can end the emergency instantly. A drowsy patient is a glucose reading, not only a neurological observation.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the WHO Surgical Safety Checklist, the team pauses immediately before skin incision to confirm patient, procedure, site and antibiotic given. This pause is called …",
        options: [
          "Sign in",
          "Time out",
          "Sign out",
          "Handover",
        ],
        correctIndex: 1,
        explanation:
          "Sign in happens before anaesthesia, the time out before incision, and sign out before the patient leaves theatre. The time out is the last barrier against wrong patient, wrong site and wrong procedure.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You phone the on-call doctor about a deteriorating patient at 0300. Using SBAR, what closes the call?",
        options: [
          "The full nursing history since admission",
          "The room number and bed chart details",
          "Your assessment of urgency and your specific recommendation",
          "The names of the night staff on duty",
        ],
        correctIndex: 2,
        explanation:
          "SBAR ends with the Recommendation — what you need and when: 'I think this is sepsis and I need you to review him now.' Histories and administrative details belong to Background at most; the recommendation is what converts escalation into action.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A competent adult refuses a life-saving transfusion after clear counselling. The doctor orders you to transfuse 'once she sleeps'. What is the professionally correct response?",
        options: [
          "Transfuse overnight, since her life outweighs her preference",
          "Refuse quietly and say nothing further to either party",
          "Decline to act without valid consent, document the refusal and the order, and escalate to senior management",
          "Ask her family to sign the consent form on her behalf",
        ],
        correctIndex: 2,
        explanation:
          "Forced treatment of a competent adult is assault; a covert transfusion is both unlawful and a betrayal of nursing's contract with patients. The correct path is refusing to act without valid consent, documenting honestly — including the order — and escalating. Family consent cannot replace her own for a competent adult.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Advanced Practice Review",
        front: "What does each letter of ABCDE check, and what hides in D?",
        back: "Airway, Breathing, Circulation, Disability, Exposure — and Disability hides the glucose check, the step most often forgotten.",
      },
      {
        topic: "Advanced Practice Review",
        front: "The three phases of the WHO Surgical Safety Checklist?",
        back: "Sign in (before anaesthesia), time out (before incision), sign out (before leaving theatre).",
      },
      {
        topic: "Advanced Practice Review",
        front: "What makes consent valid, in three words?",
        back: "Capacity, information, voluntariness — the patient can understand, has been told, and chooses freely. Refusal is documented, never overridden.",
      },
      {
        topic: "Advanced Practice Review",
        front: "SBAR — and which part is under-used?",
        back: "Situation, Background, Assessment, Recommendation. Say the recommendation aloud: name what you need and how urgently.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Guidelines for Safe Surgery: Safe Surgery Saves Lives",
        year: "2009",
        note: "Source of the surgical safety checklist — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Professional standards — verify current edition with the Council.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th edition)",
        note: "ABCDE and critical care chapters — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Exam Readiness",
    lessonTitle: "Mock Exams Under Real Conditions",
    description:
      "A mock in your pyjamas with your phone beside you is a quiz. A mock at the exam hour, timed and full-length, rehearses the whole day — stamina, pacing and nerves included.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe how to stage a mock that mirrors the real examination day.",
      "Explain the four error categories and the fix each one points to.",
      "Apply mock results to a focused next-week revision plan.",
    ],
    tags: ["mock exam", "practice", "stamina", "revision planning"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A mock exam done comfortably is a quiz. A mock done under real conditions is a rehearsal of the whole day: your stamina, your pacing, your nerves, even your bladder. The real paper will last hours, and it tests the second half of your brain as much as the first.\n\nStage your mocks like performances, then mine them for a diagnosis — that is where the marks hide.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Make it real. Print or load a full-length paper, set the clock for the exam's actual starting time, sit at a desk, and keep the phone out of the room. Run the full length without breaks the real day will not give you. Stamina is trainable only at full distance — a half-paper teaches pacing for a race that does not exist.\n\nThen perform the autopsy. Beyond the score, file every error into one of four bins: a knowledge gap (you did not know it), a slip (you misread the stem), a trap (you took the distractor), or time (you never reached it). Each bin has its own medicine — gaps get targeted revision, slips get slower stem-reading, traps get distractor study, and time gets a pacing drill. Two or three full mocks, spaced weeks apart, each followed by a repair week, beat ten half-hearted quizzes.",
      },
      {
        type: "clinical_pearl",
        body: "A mock that feels comfortable is not doing its job. If you finish fresh and unbothered, add questions or take away time — the real paper owes you nothing gentle.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A candidate's first mock scores 58 percent, with twelve questions lost to time at the end and eight misread stems. After a week of pacing drills and stem-reading practice, her second mock scores 67 percent — but nine of her eleven misses are now drug-dose calculation questions. What should her next two weeks hold?\n\nAnswer: The mocks have done their diagnostic work — pacing and misreading are repaired, and the remaining weakness is isolated. Her next two weeks should target drug and calculation revision with drilled practice, then a third full mock to confirm both gains hold before exam day.",
      },
      {
        type: "memory_trick",
        body: "Every mock hands you four bins: Gaps, Slips, Traps, Time. Sort every error into one, then give each bin its own medicine.",
      },
      {
        type: "summary",
        body: "- Stage mocks at full length, at the exam hour, phone-free, at a desk.\n- Stamina only builds at full distance — no shortened rehearsals.\n- Autopsy every error into Gaps, Slips, Traps and Time.\n- Each bin has its medicine: revise, slow down, study distractors, drill pacing.\n- Follow every mock with a repair week, not another mock.",
      },
    ],
    questions: [
      {
        topic: "Mock Exams",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which arrangement makes a mock exam a genuinely useful rehearsal?",
        options: [
          "Full-length paper, timed, at the exam's usual starting hour, phone away",
          "Half the questions, open-book, late at night when the house is quiet",
          "A few questions between ward duties on your phone",
          "Group discussion of the paper before writing it individually",
        ],
        correctIndex: 0,
        explanation:
          "Full length at the real hour trains stamina and readiness; open-book, shortened or phone-based practice rehearses a different, easier event.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Mock Exams",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A candidate's mock shows most lost marks in questions she never reached. What is the right medicine?",
        options: [
          "More content revision of those unread topics",
          "A pacing drill: strict time per question, flag-and-return, full sweep",
          "Reading the answers first, then attempting the questions",
          "Choosing longer revision sessions each night",
        ],
        correctIndex: 1,
        explanation:
          "Unreached questions are a time problem, not a knowledge problem; pacing drills with flag-and-return put those marks back within reach.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Mock Exams",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does a comfortable mock give a false picture?",
        options: [
          "Comfortable conditions make questions easier to misread",
          "Shortened or gentle mocks never sample the syllabus fairly",
          "Real exam fatigue and pressure are part of what is being tested",
          "Marks from easy papers transfer directly to the real exam",
        ],
        correctIndex: 2,
        explanation:
          "Stamina and stress handling are examinable skills; a mock without them measures only recall. Comfort does not transfer to exam day — fatigue does.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Mock Exams",
        front: "What makes mock conditions 'real'?",
        back: "Full-length paper, timed, at the exam's actual starting hour, at a desk, phone out of the room.",
      },
      {
        topic: "Mock Exams",
        front: "The four error bins from a mock autopsy?",
        back: "Gaps (knowledge), Slips (misread stems), Traps (distractors), Time (never reached) — each with its own fix.",
      },
      {
        topic: "Mock Exams",
        front: "What follows every mock?",
        back: "A repair week targeting the bins the autopsy exposed — not another mock.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Licensing Examination Information for Candidates",
        note: "Verify current exam format and regulations directly with the Council.",
      },
      {
        organization: "Harvard University Press",
        title: "Make It Stick: The Science of Successful Learning (Brown, Roediger and McDaniel)",
        year: "2014",
        note: "Evidence on practice testing, feedback and exam performance.",
      },
      {
        organization: "Association for Psychological Science",
        title: "Improving Students' Learning With Effective Learning Techniques (Dunlosky et al.)",
        year: "2013",
        url: "https://journals.sagepub.com/doi/10.1177/1529100612453266",
        note: "Peer-reviewed review of study techniques.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Exam Readiness",
    lessonTitle: "Exam Day and the Night Before",
    description:
      "You cannot learn four years of nursing in one night, but you can lose four years of preparation in one. The final 24 hours are about delivering what you already own.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe a calm final-24-hour routine from packing to lights-out.",
      "Explain why sleep consolidates memory better than late cramming.",
      "Apply breathing, pacing and between-paper habits on the day itself.",
    ],
    tags: ["exam day", "wellbeing", "sleep", "pacing"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The final 24 hours are not about knowledge — they are about delivering the knowledge you already own, rested, fed and on time. Managed well, they are a quiet routine; managed badly, they undo months of revision.\n\nThink of them the way a professional thinks of a night duty: plan ahead, protect sleep, expect nerves, and pace the shift.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The night before, stop structured studying by early evening; a light flick through your own summaries is allowed, panic is not. Pack the docket and ID, permitted pens and calculator, water, and the morning's breakfast. Confirm the route or transport and fix your leaving time with fat in it. Then sleep a full seven to eight hours: memory consolidates during sleep, so late cramming trades the filing of what you learned for a handful of fragile facts. An all-nighter is the one decision that reliably lowers your score.\n\nOn the day, eat a normal breakfast, arrive early, and stay away from the corridor crowds quizzing each other — last-minute noise raises heart rates, not marks. Nerves are normal arousal, not danger: slow your breathing and tell yourself the truth, that you are here to show what you know. In the paper, PACE — preview, answer the sure ones, come back to the flags, end with a sweep. Between papers, eat, rest and walk; do not post-mortem paper one with the crowd — it fixes nothing and shakes everything.",
      },
      {
        type: "clinical_pearl",
        body: "The most dangerous minutes of exam day are the corridor arguments after paper one. Whatever the crowd says you got wrong, it is written, sealed and unchangeable — walk away and guard your energy for the next paper.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A candidate stays up till three in the morning cramming pharmacology, sleeps four hours, arrives late and flustered, and finds in the first hour that facts she knew all semester will not surface. What happened to her preparation, and what should a better night have looked like?\n\nAnswer: Sleep deprivation blocked the consolidation of her revision and starved recall — the facts were studied but never filed for delivery. A better night: light summary review, early lights-out for seven to eight hours of sleep, a packed bag, a known route, early arrival and a calm breakfast.",
      },
      {
        type: "memory_trick",
        body: "Pack, sleep, eat, arrive, breathe, pace — the final 24 hours in six words, in that order. The night packs and sleeps; the morning does the rest.",
      },
      {
        type: "summary",
        body: "- Stop structured studying by early evening; sleep seven to eight hours to consolidate memory.\n- Pack ID, docket, pens and water the night before; confirm route and leaving time.\n- Arrive early; avoid corridor quizzing and post-mortems between papers.\n- Nerves are normal arousal — slow breathing and honest self-talk steady them.\n- In the paper, PACE, answer everything, and guard your energy to the end.",
      },
    ],
    questions: [
      {
        topic: "Exam Day",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the best use of the final evening before the exam?",
        options: [
          "A light look through your own summaries, then a full night's sleep",
          "A new topic you have been avoiding, studied till dawn",
          "A full mock exam, written at midnight",
          "A group cram session with classmates until three in the morning",
        ],
        correctIndex: 0,
        explanation:
          "Summaries and sleep consolidate what you know; new material, midnight mocks and group cramming mostly buy fatigue — the reliably score-lowering choices.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Exam Day",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does an all-night study session before the exam usually lower the score?",
        options: [
          "It fills short-term memory so completely that recall jams",
          "Crammed material cannot be stored at all without prior study",
          "Caffeine taken overnight impairs reading speed on the day",
          "Sleep is when memory is consolidated, so lost sleep forfeits what was learned",
        ],
        correctIndex: 3,
        explanation:
          "Memory consolidates during sleep; skipping sleep trades permanent filing for a few fragile facts plus fatigue — a net loss even when the material was already studied.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Exam Day",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Paper one ends and a crowd gathers outside arguing over the answers. What is the wisest move?",
        options: [
          "Join in, to correct the record about the questions you answered",
          "Find the invigilator and ask which answers were keyed",
          "Walk away, eat and rest so the next paper gets your full energy",
          "Immediately study the topics the crowd says were tested",
        ],
        correctIndex: 2,
        explanation:
          "Paper one is sealed; arguments can only raise anxiety about what cannot change. Rest and food protect the marks still available in paper two.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Exam Day",
        front: "Why does the night before matter more for sleep than for study?",
        back: "Memory consolidation happens during sleep; a full night files what you revised, while an all-nighter forfeits it and adds fatigue.",
      },
      {
        topic: "Exam Day",
        front: "What goes in the exam bag the night before?",
        back: "ID and admission docket, permitted pens, pencil and calculator, water — plus a confirmed route and a leaving time with slack.",
      },
      {
        topic: "Exam Day",
        front: "What do you do between two papers on exam day?",
        back: "Eat, rest, walk — and walk away from corridor post-mortems; the sealed paper cannot change, but your energy can.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Doing What Matters in Times of Stress: An Illustrated Guide",
        year: "2020",
        note: "WHO stress-management guide — verify current edition.",
      },
      {
        organization: "Harvard University Press",
        title: "Make It Stick: The Science of Successful Learning (Brown, Roediger and McDaniel)",
        year: "2014",
        note: "Evidence-based study habits, including the role of sleep and retrieval.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Licensing Examination Information for Candidates",
        note: "Verify current exam regulations directly with the Council.",
      },
    ],
  },
  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "How Simulation Works",
    lessonTitle: "Why We Simulate",
    description:
      "When a patient collapses at 2 a.m. in a district hospital with one doctor on call, nobody wants that to be the first time your hands have started compressions. Simulation moves the emergency into your hands before the emergency does.",
    difficulty: "Easy",
    durationMin: 8,
    objectives: [
      "Describe simulation-based education and its safety rationale.",
      "Explain why rare emergencies must be rehearsed to be met calmly.",
      "Apply the brief-scenario-debrief habit to your own practice sessions.",
    ],
    tags: ["simulation", "learning", "patient safety", "deliberate practice"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a patient collapses at 2 a.m. in a district hospital with one doctor on call, nobody wants that to be the first time your hands have started compressions. Real emergencies are rare, and rare events do not wait politely for you to have met them first. Simulation is nursing education's answer: rehearse the emergency on a manikin until the response is a reflex.\n\nThis lesson covers why simulation works, what it demands, and why the debrief — not the manikin — is where learning happens.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Simulation is structured practice on manikins and role-players under realistic pressure, followed by honest feedback. Its logic is the safety triad: emergencies are high-acuity but low-frequency — you may meet one cardiac arrest a year on a quiet ward, or none — while your response must be immediate and correct. Rehearsal converts knowledge you could recite into a sequence your hands perform, freeing working memory for the decisions that matter. Errors on a manikin cost nothing but a red face; the same error on a ward costs a life. WHO's emergency-care courses are built on exactly this principle.\n\nTwo habits make a simulation work. First, the shape: brief, scenario, debrief — skip the first or the last and it is no longer simulation. Second, psychological safety: the sim room is judgement-free, mistakes are data, and everyone from student to senior is allowed to be wrong on purpose. Fidelity is often overrated: a manikin, a stopwatch and a colleague playing the doctor run an excellent arrest drill, because the learning target is the decision sequence and the teamwork, not the silicone.",
      },
      {
        type: "clinical_pearl",
        body: "You fight like you train. The nurse who has drilled twenty arrests meets her first real one calm — for her, it is the twenty-first, not the first.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student's first real cardiac arrest happens at a district hospital at 3 a.m. Her seniors notice she moves through the sequence — checking response, shouting for help, starting compressions — without hesitation, and afterwards they ask where she learned such calm. Why does rehearsal produce it?\n\nAnswer: Repeated simulation made the response automatic, so the collapse triggers trained hands rather than panic. With the sequence running by itself, her working memory stayed free for the decisions that matter — rhythm checks, timing, the call for the defibrillator. Calm is not her temperament; it is her repetitions.",
      },
      {
        type: "memory_trick",
        body: "One simulation meal has three courses, in order: Brief, Scenario, Debrief. Skip the brief and you guess the rules; skip the debrief and you repeat your errors on a real patient.",
      },
      {
        type: "summary",
        body: "- Simulation: realistic pressure, model patients, zero risk, honest feedback.\n- Emergencies are rare but must be met instantly — rehearsal makes them familiar.\n- Drilled reflexes free working memory for the decisions that matter.\n- Brief, scenario, debrief — every simulation, every time.\n- Low-fidelity equipment works when the target is sequence and teamwork.",
      },
    ],
    questions: [
      {
        topic: "Simulation Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the primary safety rationale for practising emergencies on simulators?",
        options: [
          "Errors on a manikin harm no patient while building correct reflexes",
          "Simulators are cheaper than textbooks",
          "Simulated emergencies are always more severe than real ones",
          "Licensing requires a minimum number of simulator hours",
        ],
        correctIndex: 0,
        explanation:
          "The core value is risk-free rehearsal of high-stakes, rare events — hands learn the sequence without a patient ever paying for the learning.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Simulation Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a simulation session, where does most of the skill acquisition occur?",
        options: [
          "During the scenario itself, under pressure",
          "During the equipment set-up before the scenario",
          "While watching the recording back at double speed",
          "During the debrief, where actions are examined and re-planned",
        ],
        correctIndex: 3,
        explanation:
          "The scenario samples performance; the debrief changes it. Without structured debriefing, simulation is theatre — effortful, realistic and nearly useless.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Simulation Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a low-fidelity drill — a manikin, a stopwatch and a colleague playing the doctor — still be effective?",
        options: [
          "Because examiners cannot tell the difference in equipment",
          "Because the learning target is the decision sequence and teamwork, not tissue realism",
          "Because low-fidelity equipment matches CHPS compound conditions",
          "Because students relax more with simple equipment",
        ],
        correctIndex: 1,
        explanation:
          "For most nursing drills the trainable skills are the order of actions and the communication around them; realism of tissue adds little to sequence learning.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Simulation Practice",
        front: "What does 'high-acuity, low-frequency' mean in simulation?",
        back: "Emergencies that are severe when they occur but rare enough that clinical exposure alone never builds competence — the reason drills exist.",
      },
      {
        topic: "Simulation Practice",
        front: "Name the three-part shape of every simulation session.",
        back: "Brief — rules and roles; scenario — the drill itself; debrief — the structured reflection where learning is fixed.",
      },
      {
        topic: "Simulation Practice",
        front: "What is psychological safety in a sim room?",
        back: "A judgement-free climate where mistakes are treated as data, so participants act honestly and errors surface for teaching instead of hiding.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "WHO emergency-care course built on simulation drills — verify current edition.",
      },
      {
        organization: "International Nursing Association for Clinical Simulation and Learning (INACSL)",
        title: "Standards of Best Practice: Simulation",
        year: "2016",
        note: "Professional simulation standards — verify current version.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "How Simulation Works",
    lessonTitle: "Debriefing: Where the Learning Happens",
    description:
      "The scenario ends, the manikin is wiped, and the real lesson begins. Research is blunt: the debrief — not the drill — produces the learning, and you can learn to run it.",
    difficulty: "Moderate",
    durationMin: 9,
    objectives: [
      "Describe the three-phase structure of a good debrief.",
      "Explain psychological safety and advocacy-inquiry in plain terms.",
      "Apply questions that open reflection instead of closing it.",
    ],
    tags: ["debrief", "reflection", "simulation", "feedback"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The scenario ends, the manikin is wiped clean, and the real lesson begins. Research on simulation is blunt: the debrief, not the drill, produces the learning. A bad scenario with a good debrief teaches more than a flawless scenario wrapped in silence or shame.\n\nDebriefing is a skill you can practise now and use for life — in simulations, on ward rounds, and after every real emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A good debrief runs three phases. Reactions first: let people vent the emotion — 'my heart was pounding' — because feeling must settle before thinking can start. Then analysis: explore what happened and why, using questions more than statements. Finally, summary: each participant names what they will do differently — commitments, not compliments. Tools help: plus/delta (what worked, what to change), or the ladder of what, so what, now what.\n\nThe questioning style that works is advocacy-inquiry: pair an observation with genuine curiosity. 'I noticed you waited two minutes before calling for help — what was your reasoning?' says what you saw, shares the concern honestly, and asks rather than accuses. The ground rule underneath is psychological safety: assume good intent, treat errors as information, and keep blame out of the room — a student who hides a mistake in the next simulation is a nurse who will hide it on a real ward. And if the facilitator talks more than the learners, the debrief has failed; the learners' own words are the instrument.",
      },
      {
        type: "clinical_pearl",
        body: "Open every debrief with the same question: 'How did that feel?' It costs one minute and buys the honesty that everything else depends on.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a deteriorating-patient drill, a student forgot to call the doctor until the fourth minute. The facilitator only says 'next time, call earlier,' and moves on; the student nods and says nothing else for the whole debrief. What was lost, and which question would have rescued it?\n\nAnswer: The reasoning was lost — without asking why she delayed, no one learns whether she froze, judged the patient stable, or feared looking weak, so the behaviour will return. An advocacy-inquiry question — 'I noticed the call came at minute four; walk me through your thinking then' — surfaces the real cause and lets the group fix the cause, not just the symptom.",
      },
      {
        type: "memory_trick",
        body: "Debrief like a pond: React, Rebuild, Resolve. Ripples first (reactions), then the water clears (analysis), then the path out (commitments).",
      },
      {
        type: "summary",
        body: "- The debrief, not the scenario, is where simulation learning happens.\n- Three phases: reactions, analysis, summary of commitments.\n- Advocacy-inquiry: an honest observation plus a genuinely curious question.\n- Psychological safety keeps errors visible — hidden errors repeat on real wards.\n- The facilitator should ask more than tell; learners should talk more than the teacher.",
      },
    ],
    questions: [
      {
        topic: "Debriefing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which activity contributes most to learning after a simulation scenario?",
        options: [
          "The structured debrief with honest questions and feedback",
          "Returning the equipment to the store quickly",
          "Immediately running the next scenario without pause",
          "Writing down only the scenario's medical facts",
        ],
        correctIndex: 0,
        explanation:
          "Evidence consistently locates simulation learning in the debrief; racing to the next drill or tidying equipment skips the step where performance is examined and improved.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Debriefing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement to a student is a proper advocacy-inquiry question?",
        options: [
          "Why did you make that mistake with the oxygen flow?",
          "You clearly panicked when the patient collapsed.",
          "I noticed you hesitated before starting compressions — what was going through your mind?",
          "Next time, just give the drug faster.",
        ],
        correctIndex: 2,
        explanation:
          "Advocacy-inquiry pairs a specific, non-judgemental observation with a genuine question, inviting reasoning instead of defensiveness. Blunt why-questions, labels and orders close reflection.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Debriefing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does a debrief begin with a reactions phase rather than with case analysis?",
        options: [
          "To collect marks for the scenario while memories are fresh",
          "Because emotion must settle before analysis can be honest and clear-headed",
          "To let the facilitator prepare the correct answers",
          "Because examination rules require it in that order",
        ],
        correctIndex: 1,
        explanation:
          "Strong emotion narrows thinking; letting it settle first allows participants to discuss their own errors honestly instead of defending them.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Debriefing",
        front: "The three phases of a debrief?",
        back: "Reactions — vent the feeling; analysis — explore what happened and why; summary — each person states what they will do differently.",
      },
      {
        topic: "Debriefing",
        front: "What is advocacy-inquiry?",
        back: "A feedback style pairing an honest observation with a curious question — 'I noticed X; what was your thinking?' — to surface reasoning without blame.",
      },
      {
        topic: "Debriefing",
        front: "Why should the facilitator speak least?",
        back: "Learners' own analysis creates the change; a facilitator who lectures replaces their thinking with his, and the errors stay hidden.",
      },
    ],
    sources: [
      {
        organization: "International Nursing Association for Clinical Simulation and Learning (INACSL)",
        title: "Standards of Best Practice: Simulation — Debriefing",
        year: "2016",
        note: "Published in Clinical Simulation in Nursing — verify current version.",
      },
      {
        organization: "Simulation in Healthcare (journal)",
        title: "Promoting Excellence and Reflective Learning in Simulation (Eppich and Cheng)",
        year: "2015",
        note: "PEARLS debriefing framework — verify current literature.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Professional standards for reflective practice — verify current edition with the Council.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Medical & Surgical Simulations",
    lessonTitle: "Sim Cases: The Deteriorating Ward Patient",
    description:
      "The commonest and quietest sim in nursing — a stable-looking patient drifting towards sepsis while the ward stays busy. Train your trending eye, your trigger and your SBAR voice.",
    difficulty: "Clinical Reasoning",
    durationMin: 13,
    objectives: [
      "Describe how a deteriorating-patient simulation runs, from brief to debrief.",
      "Explain track-and-trigger logic and why trends beat single readings.",
      "Apply the first fifteen minutes of response — escalation, sepsis screen and SBAR — to a ward scenario.",
    ],
    tags: ["simulation", "deterioration", "sepsis", "early warning", "escalation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The commonest simulation in nursing education is also the quietest: a patient who looks stable, on a busy ward, while the observations drift. No alarm sounds. The monitor is often not even attached. The only instrument that catches the change is the nurse's trending eye — and the drill trains exactly that, plus the voice that turns the trend into action.\n\nThis is the sim where the score is won or lost in the fifteen minutes after you notice. Walk it as the drill walks it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Track and trigger is the skeleton. Observations are taken, scored and charted; the rising total — or any single parameter in the extreme zone — is the trigger for urgent review. Most early-warning systems lean hardest on the humble observations: **respiratory rate** is the earliest mover in almost every deterioration, and **new confusion** is scored as seriously as a crashing blood pressure. A systolic pressure of 98 in a patient who ran 130 all week is a fall wearing a normal costume — which is why early-warning logic compares against baseline, not just against the printed range.\n\nThe response ladder is rehearsed until it is boring: increase observation frequency, inform the nurse in charge, screen for sepsis — temperature, pulse, respiratory rate, blood pressure, consciousness, and a search for the source — call the doctor with SBAR, act on the orders that follow (oxygen to the prescribed target, cultures before antibiotics where possible, IV access and fluids as prescribed, hourly urine), and document times as you go, at the bedside, never reconstructed at the desk. Antibiotics within the first hour of recognising sepsis is the target international guidance keeps repeating — the hour starts when you notice, not when the doctor arrives.",
      },
      {
        type: "table",
        title: "Mr. Okai's observation trend — read it like the machine does",
        body: "| Time | Temp (°C) | Pulse | Resp rate | BP | SpO2 | State |\n|---|---|---|---|---|---|---|\n| 0700 | 36.9 | 92 | 18 | 124/76 | 96 | Alert, chatty, passing urine well |\n| 1400 | 37.8 | 100 | 22 | 112/70 | 94 | 'Not himself', urine smallish |\n| 1800 | 38.6 | 108 | 26 | 98/60 | 91 | Mildly confused, no urine since 1500 |\n\nThe direction matters more than any single number: every column is moving the same way, and the mental state is moving with them.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "Mr. Okai, 62, day two after hernia repair. The brief: you are the afternoon nurse, four patients, one doctor covering two wards. The manikin gives you the 1400 set and a nurse saying 'he is just not himself.' Two hours later it gives you the 1800 set and a drowsy man. At which hour did the warning start, what is your differential, and what happens in the next fifteen minutes?\n\nAnswer: The warning started at 1400 — a rising temperature, pulse and respiratory rate with a softening pressure and new 'not himself' is a possible sepsis trajectory; post-operative chest infection, urine infection or wound source must be hunted. By 1800 it is urgent: call the doctor now with SBAR and the trend (not just the last set), screen for sepsis, give oxygen to the prescribed target, cultures before antibiotics where possible, IV access and fluids as prescribed, hourly observations, strict fluid balance, and prepare for possible transfer to a high-dependency bed — with times documented from the moment you noticed. The commonest drill failure is waiting for the 2000 round because 'he is not the sickest patient' — in the debrief, the manikin arrests at 1930.",
      },
      {
        type: "clinical_pearl",
        body: "Trends beat snapshots. Respiratory rate is the earliest mover — 18 to 22 to 26 is the body confessing before the blood pressure falls — and new confusion is a vital sign in shoes.",
      },
      {
        type: "callout",
        title: "Say it in one breath",
        body: "'S: Mr. Okai, 62, day two post-op hernia repair. B: Stable this morning, has drifted all afternoon. A: Temp 38.6, pulse 108, resp 26, BP 98/60, SpO2 91 percent on air, new confusion, no urine for three hours — I think this is sepsis. R: I need you to review him now; I have started the sepsis screen, oxygen is on and I am charting hourly.' The recommendation is the sentence — say it, do not hint it.",
      },
      {
        type: "quiz_prompt",
        title: "Which single change is loudest?",
        body: "Look again at the 1400 set. One value had already left the adult normal range and was pointing at the chest. Which one, and why does it matter most?\n\nAnswer: The respiratory rate of 22 — above the 12 to 20 range, and the earliest and most sensitive marker of deterioration in early-warning scoring. Nurses chart it as an afterthought; assessors score it as the alarm that was ignored.",
      },
      {
        type: "memory_trick",
        body: "Track, Trigger, Tell: chart the trend, let the score trigger, and SBAR the story with your recommendation spoken aloud. Then write the time — the note is part of the treatment.",
      },
      {
        type: "summary",
        body: "- Track and trigger: score the observations, watch the total, treat any extreme single parameter as a trigger.\n- Respiratory rate is the earliest mover; new confusion counts as a red flag.\n- Compare readings against the patient's baseline — a 'normal' number can be a falling one.\n- Sepsis response: screen, escalate by SBAR, cultures before antibiotics where possible, antibiotics within the first hour of recognition, oxygen to target, fluids as prescribed.\n- Document times at the bedside; increase observation frequency the moment the trend turns.",
      },
    ],
    questions: [
      {
        topic: "Deterioration Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the 1400 observation set above, which value was already outside the adult normal range and the earliest warning of the deterioration to come?",
        options: [
          "Temperature 37.8 °C",
          "Pulse 100 per minute",
          "Respiratory rate 22 per minute",
          "Blood pressure 112/70 mmHg",
        ],
        correctIndex: 2,
        explanation:
          "A rate of 22 has already left the 12 to 20 range, and respiratory rate is the earliest and most sensitive mover in deterioration — scored heavily by every early-warning system and charted carelessly by every busy ward.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Deterioration Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A post-operative patient's systolic pressure reads 98 mmHg. He has run around 130 all week, is pale and clammy, and the ward round is in two hours. Why does early-warning logic treat this as urgent?",
        options: [
          "98 is below the printed normal range for all adults, so it is automatically critical",
          "The reading is being compared against his baseline — a fall of 30 or more is the alarm, whatever the absolute number",
          "Pale, clammy skin means the machine needs recalibrating",
          "Only the heart rate decides urgency in post-operative patients",
        ],
        correctIndex: 1,
        explanation:
          "Early-warning systems score deviation from normal ranges but clinicians judge change against baseline — a 30-point fall with clammy skin is shock compensating, and waiting two hours is how it becomes an arrest drill.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Deterioration Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You call the doctor about a patient you believe is developing sepsis. Which closing sentence makes the call an SBAR call rather than a chat?",
        options: [
          "'He does not look right, please have a look when you can'",
          "'Bed 4, medical ward, male, 62 years, day two post-op'",
          "'I think this is sepsis and I need you to review him now — I have started the screen and oxygen is on'",
          "'His full admission history is in the folder at the desk'",
        ],
        correctIndex: 2,
        explanation:
          "SBAR ends in the Recommendation — your assessment of urgency plus the specific action you need and when. Identity and history are background; 'have a look when you can' is a hope, not a recommendation.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Deterioration Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "At 1800 Mr. Okai is mildly confused with temp 38.6, pulse 108, resp 26, BP 98/60 and SpO2 91 percent on air. Which set of actions belongs to the first fifteen minutes?",
        options: [
          "Complete the 1800 round first, then inform the nurse in charge at handover",
          "Chart the set, recheck in two hours and compare, then decide whether to call",
          "Call the doctor with SBAR now, start the sepsis screen, give oxygen to the prescribed target and prepare cultures before antibiotics where possible",
          "Give his scheduled antihypertensive and let him sleep — confusion is common post-op",
        ],
        correctIndex: 2,
        explanation:
          "This cluster is sepsis with organ dysfunction until excluded: escalate now with the trend, screen and act in parallel, oxygen to target, cultures before antibiotics where possible, and hourly monitoring. Waiting rounds away the hour that sepsis does not give, and sedating a confused undiagnosed patient hides the alarm.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Deterioration Sim",
        front: "Which observation is the earliest mover in most deteriorations?",
        back: "Respiratory rate — rising before blood pressure falls, and the most under-charted value on the ward. New confusion runs it a close second.",
      },
      {
        topic: "Deterioration Sim",
        front: "The sepsis screen cluster at the bedside?",
        back: "Temperature, pulse, respiratory rate, blood pressure, consciousness — plus a hunt for the source: chest, urine, wound, line. Cultures before antibiotics where possible; antibiotics within the first hour of recognition.",
      },
      {
        topic: "Deterioration Sim",
        front: "What turns a phone call into an SBAR call?",
        back: "The spoken Recommendation — your assessment of urgency and the specific action you need now: 'I think this is sepsis and I need you to review him immediately.'",
      },
      {
        topic: "Deterioration Sim",
        front: "Why document times at the bedside during deterioration?",
        back: "The sepsis clock starts when you notice, not when the doctor arrives — and the record of who-knew-what-when is what the debrief, the audit and the next shift all depend on.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "ABCDE and deterioration recognition — verify current edition.",
      },
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Sepsis recognition and response — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Medical & Surgical Simulations",
    lessonTitle: "Sim Cases: Cardiac & Respiratory Arrest",
    description:
      "The loudest sim in the building — the crash call from first shout to handover. Compressions that count, a defibrillator that arrives fast, roles said out loud, and the scribe who makes the debrief real.",
    difficulty: "Clinical Reasoning",
    durationMin: 14,
    objectives: [
      "Describe the adult basic life support sequence and the quality marks of effective compressions.",
      "Explain team roles at a cardiac arrest and why early defibrillation governs survival in shockable rhythms.",
      "Apply the post-shock, post-ROSC and handover habits that drills most often miss.",
    ],
    tags: ["simulation", "arrest", "cpr", "defibrillation", "teamwork"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The crash call is the loudest simulation your course runs — and the one where two minutes decide most of it. The drill rehearsed here is the whole arc: finding the patient, starting basic life support, the team assembling with roles spoken aloud, the rhythm check, the shock, the return of circulation, and the handover that ends it.\n\nThe skills are learnable to reflex: the sequence, the compression quality, and the talking. The commonest failures are slow starts, long pauses and silence about who is doing what.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Basic life support runs one order: check **danger** and **response**, **shout** for help, open the **airway**, check **breathing** for no more than ten seconds, and in a patient who is unresponsive and not breathing normally, **call the arrest team and fetch the defibrillator** — then start **compressions immediately**. For the adult: push in the centre of the chest at **100 to 120 per minute**, **5 to 6 centimetres deep**, allowing **full chest recoil**, in cycles of **30 compressions to 2 breaths**. Minimise every interruption — hands-on-chest time is the currency of survival, and pauses for rhythm checks should be seconds, not conversations.\n\nWhen the defibrillator arrives, attach it without stopping compressions, follow its analysis, and **shock immediately if the rhythm is shockable** — ventricular fibrillation and pulseless ventricular tachycardia are electrical problems, and electricity, not more time, is their treatment. After a shock, resume compressions at once without pausing to feel for a pulse. Think reversible causes throughout — the **four Hs** (hypoxia, hypovolaemia, hyper- or hypokalaemia, hypothermia) and **four Ts** (tension pneumothorax, tamponade, thrombosis of heart or lung, toxins): find one and the arrest may end itself. After return of spontaneous circulation, the job becomes airway, breathing, circulation, monitoring — and an honest, timed handover.",
      },
      {
        type: "table",
        title: "Who does what when the call goes out",
        body: "| Role | The job |\n|---|---|\n| First nurse at the bedside | Response, breathing check, call for help, start compressions |\n| Team leader | Stands back, runs the sequence, calls the rhythm checks and shocks, watches the clock |\n| Compressor | Hard, fast, full-recoil compressions; switches fresh every two minutes |\n| Airway | Head tilt-chin lift or adjunct, breaths of about one second, watches the chest |\n| Defibrillator operator | Pads on early, analyses, shocks on the leader's word, keeps hands-off time in seconds |\n| Drugs and IV | Access, times and gives only on the leader's spoken order, repeats it back |\n| Scribe | Times everything — collapse, compressions, shocks, drugs, ROSC — the record the debrief and the notes are built on |\n\nIn small hospitals roles double up — which is exactly why they are said out loud at the start. Assumed roles are the dropped ones.",
      },
      {
        type: "case",
        title: "The drill as it runs",
        body: "0200, bay 4. A 54-year-old man, day three after surgery, is found unresponsive; a colleague confirms he is not breathing normally. You are the night nurse. You shout for help and press the emergency call, start compressions — your colleague takes over airway and breaths — and the ward assistant brings the defibrillator. The team arrives; the monitor shows ventricular fibrillation; the leader calls the shock, everyone clears, the shock fires — and compressions resume the instant it is delivered. After the second cycle, organised rhythm returns, a pulse is felt, and the patient begins irregular breathing. Name the three errors drills most often expose, and what the next ten minutes hold.\n\nAnswer: The three classic errors: compressions started late while waiting for the team, long hands-off pauses during rhythm checks and shocks, and compressions too slow or too shallow. The next ten minutes: airway and breathing support with oxygen, circulation monitoring with blood pressure and rhythm, preparation for transfer to critical care, and a timed handover in SBAR — collapse at 0200, compressions by 0202, first shock at 0205, ROSC at 0209 — plus full documentation from the scribe's sheet and honest disclosure to the patient when he wakes.",
      },
      {
        type: "clinical_pearl",
        body: "Survival in shockable rhythms walks beside the defibrillator — every minute without a shock costs survival. Compressions are the bridge to electricity; electricity is the treatment.",
      },
      {
        type: "callout",
        title: "The four Hs and four Ts",
        body: "Hypoxia · Hypovolaemia · Hyper- or hypokalaemia · Hypothermia · Tension pneumothorax · Tamponade · Thrombosis (coronary or pulmonary) · Toxins. Run the list during every rest pause of a stubborn arrest — each one is a reason the heart will not restart, and each one has a fix that restarts it.",
      },
      {
        type: "quiz_prompt",
        title: "Alone at 0300",
        body: "You find an unresponsive patient who is not breathing. You are the only nurse on the ward. In exact order, what do you do before anyone reaches you?\n\nAnswer: Shout for help and activate the emergency call without leaving the bedside if possible, check breathing in under ten seconds, send whoever comes for the arrest team and defibrillator, and start compressions immediately — 100 to 120 per minute, 5 to 6 centimetres, full recoil, 30:2 when a second pair of hands arrives. Do not run down the corridor yourself; a call for help that leaves the patient is a call the patient cannot survive.",
      },
      {
        type: "memory_trick",
        body: "Hard, fast, deep, no pause — and shock the moment the machine says shock. After the shock, hands straight back on the chest: the pulse check can wait, the compressions cannot.",
      },
      {
        type: "summary",
        body: "- Check danger and response, shout, open airway, check breathing within ten seconds, call the team, compress.\n- Adult compressions: centre of chest, 100–120 per minute, 5–6 cm, full recoil, 30:2.\n- Attach the defibrillator early without stopping compressions; shock shockable rhythms immediately.\n- After each shock, resume compressions at once — no pulse check first.\n- Say the roles out loud; a scribe with times is what makes the debrief and the notes real.\n- Hunt the four Hs and four Ts; after ROSC: airway, breathing, circulation, monitoring, SBAR handover.",
      },
    ],
    questions: [
      {
        topic: "Arrest Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the correct rate and depth for adult chest compressions?",
        options: [
          "60 to 80 per minute, about 2 centimetres deep",
          "100 to 120 per minute, 5 to 6 centimetres deep",
          "140 to 160 per minute, as deep as the arm allows",
          "Exactly 80 per minute, depth does not matter if the rate is right",
        ],
        correctIndex: 1,
        explanation:
          "Adult basic life support compressions run at 100 to 120 per minute and 5 to 6 centimetres deep, with full chest recoil between compressions — the combination that produces meaningful blood flow.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Arrest Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are alone when you find an unresponsive patient who is not breathing. What is the correct sequence?",
        options: [
          "Run to the doctors' room to fetch help first, then return to start CPR",
          "Give two minutes of rescue breaths before any compressions",
          "Shout for help, activate the emergency call, and start compressions immediately without leaving the bedside",
          "Take a full set of vital signs first to confirm the arrest",
        ],
        correctIndex: 2,
        explanation:
          "Help is summoned, not fetched — leaving the patient abandons the only circulation he has. Compressions start immediately; vital signs and breathing-only manoeuvres delay the intervention that works.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Arrest Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The defibrillator analyses the rhythm during a monitored arrest and advises a shock. After the shock is delivered, what is the immediate next action?",
        options: [
          "Feel for a pulse before doing anything else",
          "Resume chest compressions immediately, then reassess after two minutes",
          "Wait for the monitor to settle for one minute",
          "Give two minutes of rescue breaths alone",
        ],
        correctIndex: 1,
        explanation:
          "Post-shock, hands return to the chest at once — the rhythm is least likely to be immediately palpable and hands-off time is the enemy. The organised rhythm check comes after the next two-minute cycle, not before it.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Arrest Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "During a drill, the monitor shows ventricular fibrillation in a patient five minutes after collapse, with the defibrillator already attached. Which factor most determines survival from this point?",
        options: [
          "The depth of sedation given during the arrest",
          "The speed of defibrillation — every minute of delay in a shockable rhythm reduces survival meaningfully",
          "The volume of IV fluid given during compressions",
          "The seniority of the doctor who eventually arrives",
        ],
        correctIndex: 1,
        explanation:
          "Ventricular fibrillation is an electrical problem with an electrical cure: survival falls steeply with every minute the shock is delayed, which is why pads go on early, compressions bridge the gap, and the shock is the priority the moment it is advised.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Arrest Sim",
        front: "Adult compression targets?",
        back: "Centre of the chest, 100 to 120 per minute, 5 to 6 centimetres deep, full recoil, 30 compressions to 2 breaths — and minimise every pause.",
      },
      {
        topic: "Arrest Sim",
        front: "The four Hs and four Ts?",
        back: "Hypoxia, Hypovolaemia, Hyper/hypokalaemia, Hypothermia; Tension pneumothorax, Tamponade, Thrombosis, Toxins — the reversible causes worth hunting in every stubborn arrest.",
      },
      {
        topic: "Arrest Sim",
        front: "What does the scribe do, and why does the team need one?",
        back: "Times everything — collapse, compressions, shocks, drugs, ROSC. The debrief, the notes and the handover are built on that sheet; untimed arrests are unlearnable ones.",
      },
      {
        topic: "Arrest Sim",
        front: "Post-ROSC priorities in one line?",
        back: "Airway and breathing with oxygen, circulation with pressure and rhythm monitoring, prepare for transfer — then SBAR handover with the times, and honest care of the family in the room.",
      },
    ],
    sources: [
      {
        organization: "American Heart Association",
        title: "Basic and Advanced Cardiovascular Life Support Guidelines",
        year: "2020",
        note: "Compression targets, defibrillation and team dynamics — verify current guidelines.",
      },
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "Emergency approach under resource limits — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Medical & Surgical Simulations",
    lessonTitle: "Sim Cases: The Emergency Admission",
    description:
      "A road-traffic crash at midnight, the casualties arriving by taxi with no names and no warning. Triage by sound, the primary survey in order, and the quiet patient who is the real emergency.",
    difficulty: "Clinical Reasoning",
    durationMin: 13,
    objectives: [
      "Describe triage logic when multiple casualties arrive unannounced and undifferentiated.",
      "Explain the primary survey — catastrophic bleeding, airway, breathing, circulation, disability, exposure — as fix-as-you-find.",
      "Apply the AMPLE history, warming and documentation habits of the trauma bay.",
    ],
    tags: ["simulation", "emergency", "trauma", "triage", "primary survey"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In Ghana the emergency often arrives by taxi: a road-traffic crash at midnight, two or three casualties carried in shouting or silent, no ambulance, no pre-hospital care, no names. The nurse at the receiving end is the triage brain and the trauma hands until the team assembles.\n\nThis drill trains the two instincts that decide those first minutes: who you see first, and what you check in what order.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Triage by sound. The screaming casualty with a bent arm is frightening, but he is talking — his airway works, his brain is perfused, and he has announced himself. The quiet one on the bench, pale and clammy with a distending abdomen, is the emergency: shock compensates silently until it does not. Loud means alive; silent means dying.\n\nThe primary survey runs in one order, treating as you find: catastrophic **bleeding** first — direct pressure, now — then **airway** with cervical-spine care in a road-traffic casualty, **breathing**, **circulation** (pulse, pressure, two large-bore IV accesses, fluids as prescribed, warmth), **disability** (AVPU, pupils, glucose — the head-injured patient who has also been drinking hides two problems in one drowsiness), and **exposure** — undress once, inspect everywhere including the back, then cover and warm; in harmattan a shocked patient cools fast and cold blood does not clot. The history is AMPLE: allergies, medications, past illnesses, last meal, events of the injury. The unknown patient gets a temporary identity and a chart started immediately — 'unknown male one' with times is a record; a nameless crowd is chaos.",
      },
      {
        type: "table",
        title: "Three casualties, one midnight — who is seen first?",
        body: "| Casualty | What you see | Category | First move |\n|---|---|---|---|\n| The driver | Screaming about his bent forearm; talking, alert, obvious deformity | Urgent — not first | Splint, analgesia as prescribed, reassessment after the quiet ones are seen |\n| The front passenger | Pale, clammy, monosyllabic; abdomen distending and tender; pulse 118 weak, BP 92/58, resp 26 | Immediate — red | Pressure on any bleeding, call the doctor now, oxygen, IV access, prepare for theatre or transfer |\n| The back passenger | Walking wounded, bleeding scalp, talking and irritated | Delayed — green | Direct pressure, sit him where you can see him, full survey when the reds are stable |\n\nScalp blood looks theatrical; walking and talking are reassuring signs. The category is behaviour, not blood.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "0040, two men carried in from a crash on the main road. The quiet one was 'fine when they lifted him' — pale, sweating, breathing at 26, pulse 118 and weak, pressure 92/58, abdomen swelling and tender, answering in single words. The other will not stop shouting about his arm. Which do you see first, what are your first five actions, and what is the diagnosis you must say out loud?\n\nAnswer: The quiet one — this is haemorrhagic shock from probable intra-abdominal bleeding until excluded (a ruptured spleen or liver from the impact). The five: call the doctor and nurse-in-charge now, direct pressure on any external bleeding, oxygen as prescribed, two large-bore IV lines with fluids as prescribed, and keep him warm while monitoring continuously — with the referral or theatre call being prepared simultaneously. Say the diagnosis aloud so the team chases the abdomen, not the noise. The shouting man has a closed forearm fracture: splint, analgesia as prescribed, and review — loudly alive, and it is not his night to die.",
      },
      {
        type: "clinical_pearl",
        body: "Noise is reassuring; silence is a symptom. The casualty who stops shouting to become quiet and still is getting worse, and the one who never shouted is the one you see first.",
      },
      {
        type: "quiz_prompt",
        title: "The E in ABCDE",
        body: "What does the E of the primary survey remind you never to forget — and what is the harmattan lesson attached to it?\n\nAnswer: Exposure — undress and inspect the whole body once, front and back, because belts and boots hide the wound that is bleeding. Then cover and warm: a shocked patient in a cold season loses heat fast, and hypothermia worsens coagulation — the trauma triad's quietest member.",
      },
      {
        type: "memory_trick",
        body: "AMPLE: Allergies, Medications, Past illnesses, Last meal, Events. And triage by sound: shouters wait, silent ones now, walkers stay visible.",
      },
      {
        type: "summary",
        body: "- Triage by behaviour, not noise: the pale, quiet, clammy casualty is the emergency; the shouter has announced a working airway.\n- Primary survey in order, treat-as-you-find: catastrophic bleeding, airway with neck care, breathing, circulation, disability, exposure.\n- Head-injured casualty plus alcohol: check glucose and pupils — two problems can wear one drowsiness.\n- AMPLE history; unknown casualties get temporary identities and timed charts immediately.\n- Undress once, inspect everywhere, then warm — cold shocked blood does not clot.",
      },
    ],
    questions: [
      {
        topic: "Emergency Admission Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct order of the trauma primary survey?",
        options: [
          "Airway, exposure, breathing, disability, circulation, bleeding",
          "Catastrophic bleeding, airway, breathing, circulation, disability, exposure",
          "Circulation first in every trauma, always before the airway",
          "Exposure, disability, breathing, bleeding, airway, circulation",
        ],
        correctIndex: 1,
        explanation:
          "Massive external bleeding is compressed first because it kills fastest, then the airway — the survey runs airway, breathing, circulation, disability, exposure, treating each problem as it is found.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Emergency Admission Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two casualties arrive from a midnight crash. One is screaming about a deformed forearm; the other is pale, clammy, monosyllabic with a tender, distending abdomen and a weak pulse of 118. Who is seen first?",
        options: [
          "The shouter, because pain signals the most injury",
          "The quiet, pale one with the distending abdomen",
          "Whoever arrived in the vehicle first",
          "Both equally — wait for the doctor to triage",
        ],
        correctIndex: 1,
        explanation:
          "The quiet casualty shows decompensating haemorrhagic shock — likely intra-abdominal bleeding — while the shouter's noise proves a working airway and a perfused brain. Behaviour, not volume, sets the order; the nurse triages until the team arrives.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Emergency Admission Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the AMPLE trauma history stand for?",
        options: [
          "Airway, breathing, circulation, disability, exposure",
          "Allergies, medications, past illnesses, last meal, events of the injury",
          "Assess, monitor, plan, limit, evaluate",
          "Age, mechanism, pulse, location, injuries",
        ],
        correctIndex: 1,
        explanation:
          "AMPLE gathers what changes treatment in minutes: what he reacts to, what he takes, what he carries, when he last ate before surgery, and what actually happened. The other letters belong to other tools.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Emergency Admission Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "A head-injured passenger from a road-traffic crash arrives drowsy and smelling of alcohol. What must the disability step of your primary survey include before his drowsiness is blamed on the drink?",
        options: [
          "Nothing — the smell of alcohol explains the drowsiness, so chart it and observe",
          "AVPU responsiveness, pupil checks and a glucose reading",
          "A full psychiatric assessment",
          "Waiting for the alcohol to metabolise, then reassessing in four hours",
        ],
        correctIndex: 1,
        explanation:
          "Alcohol plus head injury is the classic masked combination: AVPU trend, pupil inequality and glucose separate a drunk man from a bleeding or hypoglycaemic one — and the trend is reassessed repeatedly, because the intracranial bleed declares itself by changing, not by being constant.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Emergency Admission Sim",
        front: "The primary survey in order?",
        back: "Catastrophic bleeding, airway (with neck care in trauma), breathing, circulation, disability, exposure — treat as you find, then repeat.",
      },
      {
        topic: "Emergency Admission Sim",
        front: "The triage-by-sound rule?",
        back: "Shouters have working airways and perfused brains; the pale, quiet, clammy casualty is the emergency. Silence is a symptom.",
      },
      {
        topic: "Emergency Admission Sim",
        front: "AMPLE?",
        back: "Allergies, Medications, Past illnesses, Last meal, Events of the injury — the five-minute trauma history that changes treatment.",
      },
      {
        topic: "Emergency Admission Sim",
        front: "What do you do for the unnamed casualty?",
        back: "Assign a temporary identity ('unknown male one'), start a timed chart immediately, and keep the records with the patient — nameless chaos is how treatments and specimens go astray.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "Primary survey and trauma approach — verify current edition.",
      },
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Trauma and referral pathway — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Verify with the Council.",
      },
    ],
  },
  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Paediatric & Maternal Simulations",
    lessonTitle: "Sim Cases: The Sick Child",
    description:
      "Children are not small adults — they compensate, then crash. ETAT triage, the fast-breathing thresholds and the febrile convulsion drill, until the moves are yours.",
    difficulty: "Clinical Reasoning",
    durationMin: 13,
    objectives: [
      "Describe the ETAT emergency signs and IMCI general danger signs that open every sick-child case.",
      "Explain the fast-breathing thresholds and why children collapse after compensating.",
      "Apply the febrile-convulsion and severe-malaria response sequences to ward scenarios.",
    ],
    tags: ["simulation", "paediatrics", "etat", "imci", "sick child"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Children are not small adults. They run, they compensate, and then they fall off a cliff — a child can look merely tired an hour before respiratory failure. That is why sick-child simulations drill a triage alphabet (ETAT), a set of danger signs, and a handful of number thresholds until they are reflexes.\n\nThis lesson walks the drills faculty love most: the dehydrated child, the fast-breathing child, the convulsing child and the child with severe malaria.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "ETAT — Emergency Triage Assessment and Treatment — checks emergency signs in a fixed order, treating as you find: **airway**, **breathing** (severe distress, central cyanosis), **circulation** (weak fast pulse, cold hands), **coma**, **convulsing now**, and **severe dehydration**, with severe bleeding hunted alongside. Below the emergencies sit the IMCI **general danger signs** — the child who cannot drink or breastfeed, vomits everything, has convulsed in this illness, or is abnormally drowsy. Any one of them, in any cheerful-looking child, means urgent assessment today.\n\nThe number thresholds are exam gold because they are ward gold: fast breathing means **60 or more per minute under two months, 50 or more from two to twelve months, and 40 or more from one to five years** — the respiratory count that flags pneumonia. Severe dehydration shows sunken eyes, a very slow skin pinch, restlessness or lethargy, and a child who cannot drink. A febrile convulsion is managed with the hands, not the medicine cupboard: side-lying, away from harm, nothing forced into the mouth, timing the fit, removing excess clothing — and afterwards the cause hunt, because in Ghana that means malaria test, glucose, and a search for meningitis signs (neck stiffness, bulging fontanelle). A drowsy child who has convulsed is severe illness until excluded, not a tired child.",
      },
      {
        type: "table",
        title: "The sick-child quick reference",
        body: "| What you find | What it likely means | Category | First move |\n|---|---|---|---|\n| Fast breathing for age, chest indrawing | Severe pneumonia | Emergency — red | Oxygen per protocol, urgent treatment and review |\n| Sunken eyes, slow skin pinch, drowsy, cannot drink | Severe dehydration | Emergency — red | Rehydration per protocol now, monitor response |\n| Convulsing now | Presenting emergency | Emergency — red | Side-lying, protect, time it, nothing in the mouth, treat per protocol |\n| Cannot drink or vomits everything | General danger sign | Emergency — red | Full emergency assessment, not home |\n| Fever, alert, drinking, no danger signs | Malaria check needed | Priority — yellow | Test per protocol, treat or follow national guideline |\n\nThe colours are decisions, not decorations: red means treatment starts while you continue the assessment.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "An 18-month-old is carried into your district hospital at 1830. Fever for two days; two convulsions at home, each about two minutes; she will not breastfeed now and is drowsy, answering her mother's voice slowly. She carried her four kilometres to reach you. What are your first three actions, and what does the drowsiness mean?\n\nAnswer: This child has ETAT emergency signs — convulsion in the illness, abnormal drowsiness, and inability to drink. The first actions: assess airway and breathing with the child positioned safely on her side, check glucose if available and treat what you find, then malaria test and look hard for meningitis signs — all while calling for senior review and preparing urgent treatment per protocol. Drowsiness after convulsion in a non-drinking child in a malaria zone is severe malaria or meningitis until excluded — it is never 'just tired from the journey'. Keep the mother informed, and let the notes travel with the child.",
      },
      {
        type: "clinical_pearl",
        body: "A child who cannot drink is a child in danger — full stop. No cheerful appearance cancels that one sign, and no fever number substitutes for checking drinking, breathing and behaviour.",
      },
      {
        type: "quiz_prompt",
        title: "How fast is fast?",
        body: "You count a nine-month-old's breathing. What number is 'fast breathing' for her — and for a three-year-old in the next bed?\n\nAnswer: 50 breaths per minute or more at two to twelve months; 40 or more from one to five years; 60 or more below two months. Count a full minute — children's breathing is irregular, and half-minutes lie.",
      },
      {
        type: "memory_trick",
        body: "Children fall off a cliff: watch the drinking, the breathing and the behaviour. A child who stops playing, feeding or drinking has already told you — believe the behaviour before you believe the thermometer.",
      },
      {
        type: "summary",
        body: "- ETAT order: airway, breathing, circulation, coma, convulsion, severe dehydration — treat as you find.\n- IMCI general danger signs: cannot drink or breastfeed, vomits everything, convulsions, abnormally drowsy — urgent today.\n- Fast breathing: 60+ under 2 months; 50+ at 2–12 months; 40+ at 1–5 years — count the full minute.\n- Febrile convulsion: side-lying, protect, nothing in the mouth, time it, cool by undressing — then hunt malaria, glucose and meningitis.\n- Children compensate then crash: tachycardia is early, a falling blood pressure is late and serious.",
      },
    ],
    questions: [
      {
        topic: "Sick Child Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in a sick child is a general danger sign that must never be sent home with advice?",
        options: [
          "A runny nose with playful behaviour",
          "Unable to drink or breastfeed",
          "A temperature of 38.2 °C with a good appetite",
          "Mild diarrhoea for one day, still drinking",
        ],
        correctIndex: 1,
        explanation:
          "Inability to drink is one of the four IMCI general danger signs — with vomiting everything, convulsions and abnormal drowsiness — and it overrides every reassuring feature. The other options describe children who can follow routine pathways.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Sick Child Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At what respiratory rate is a nine-month-old breathing 'fast' by IMCI criteria?",
        options: [
          "30 breaths per minute or more",
          "40 breaths per minute or more",
          "50 breaths per minute or more",
          "60 breaths per minute or more",
        ],
        correctIndex: 2,
        explanation:
          "Fast breathing is 50 or more at two to twelve months. The 60 threshold belongs to infants under two months, and 40 to children from one to five years — the classic three-number exam triplet.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Sick Child Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A child is having a febrile convulsion in the OPD queue. What is the correct first response?",
        options: [
          "Restrain her limbs, force a spoon between her teeth and carry her to the emergency room",
          "Place her on her side on a safe surface, protect her from injury, time the fit and remove excess clothing",
          "Pour water on her face until the fit stops",
          "Give an antipyretic suppository during the convulsion",
        ],
        correctIndex: 1,
        explanation:
          "Management is positional and protective: side-lying keeps the airway drainable, restraint and mouth-gagging injure, timing informs the treatment decision, and undressing begins fever care. Medicines wait for the fit to end — except prolonged fits, which are emergencies for treatment per protocol.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Sick Child Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "An 18-month-old with two days of fever has convulsed at home, will not breastfeed, and is drowsy on arrival. What does the drowsiness with these signs demand?",
        options: [
          "Observation at home with antipyretics — she is tired from the journey",
          "Oral rehydration at the OPD and review in the morning",
          "Emergency assessment now — malaria test, glucose, meningitis signs and urgent treatment per protocol",
          "Immediate feeding by nasogastric tube, then observation",
        ],
        correctIndex: 2,
        explanation:
          "Convulsion plus drowsiness plus inability to drink in a febrile child in a malaria zone is severe malaria or meningitis until excluded — emergency assessment and treatment per protocol, with referral preparation. Feeding a drowsy child by tube risks aspiration before the diagnosis is even begun.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Sick Child Sim",
        front: "The fast-breathing thresholds by age?",
        back: "Under 2 months: 60 or more per minute; 2–12 months: 50 or more; 1–5 years: 40 or more — count a full minute, each time.",
      },
      {
        topic: "Sick Child Sim",
        front: "The ETAT emergency-sign order?",
        back: "Airway, breathing, circulation, coma, convulsing now, severe dehydration — with severe bleeding hunted alongside; treat as you find.",
      },
      {
        topic: "Sick Child Sim",
        front: "Why do children 'fall off a cliff'?",
        back: "They compensate strongly — tachycardia early, blood pressure held until late — so a child who looks merely tired can be minutes from respiratory or circulatory failure. Behaviour and drinking are the early monitors.",
      },
      {
        topic: "Sick Child Sim",
        front: "After a febrile convulsion ends, what must you hunt?",
        back: "The cause: malaria test, glucose, and meningitis signs — neck stiffness, bulging fontanelle. A convulsion with drowsiness that persists is severe illness until excluded.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Emergency Triage Assessment and Treatment (ETAT) Course",
        note: "Paediatric triage signs and order — verify current version.",
      },
      {
        organization: "WHO",
        title: "Model IMCI Handbook: Integrated Management of Childhood Illness",
        year: "2005",
        note: "Danger signs and fast-breathing thresholds — check for latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National paediatric and malaria guidance — verify current edition.",
      },
      {
        organization: "UNICEF",
        title: "Facts for Life",
        note: "Community-level danger-sign messaging — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Paediatric & Maternal Simulations",
    lessonTitle: "Sim Cases: Obstetric Emergencies on a General Ward",
    description:
      "The pregnant patient who arrives in the wrong department — a seizure, a bleed, a labour starting at 0300. Recognition and first response while the maternity team comes, and never leaving her side.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the general nurse's first-response role when an obstetric emergency happens outside the maternity unit.",
      "Explain the first five minutes for the four classic arrivals: collapse, seizure, bleeding and labour.",
      "Apply the call-protect-stay-handover sequence with correct positioning and documentation.",
    ],
    tags: ["simulation", "obstetric", "emergency", "referral", "general ward"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Obstetric emergencies belong in the maternity unit — but they do not always start there. A woman admitted to your medical ward for malaria turns out to be 34 weeks pregnant; a visitor collapses in the corridor; labour starts on the surgical side at 0300 before anyone can move her. In those first minutes, the most senior maternity hand may be minutes away — and you are standing there.\n\nThis drill trains the general nurse's role: recognise, call, protect, and never leave — while the maternity team comes to you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The scope is clear and worth saying aloud: births and obstetric emergencies are led by the maternity team — but the first ten minutes belong to whoever is standing there, and that is usually a nurse. Your instruments are position, airway, the emergency call and observation — recognition and referral are your surgery.\n\nThe four classic arrivals. A **collapse in early pregnancy** — pale, faint, with a missed period or known early pregnancy — is a ruptured ectopic until excluded: call for the doctor and maternity team, airway and breathing, keep her warm, IV access if you are trained and protocol allows, and prepare for urgent review; do not send her home. A **seizure at 34 weeks or beyond** is eclampsia until excluded: left lateral, airway protected, nothing forced into the mouth, dim the lights and minimise handling, time the fit, and call loudly — treatment per protocol follows with the team. **Bleeding after 20 weeks** is an antepartum haemorrhage: left lateral, observations, no vaginal or speculum examination by anyone on your ward — a low-lying placenta can be disturbed into a torrent — and the maternity team called now, with shock watched for. **Labour starting** means the call goes out immediately: do not perform vaginal examinations, stay with her, keep her breathing steadily — and if the baby arrives before help does, you receive and dry it, keep it warm skin-to-skin, and call again loudly; receiving a birth that is already happening is not the same as conducting one.",
      },
      {
        type: "table",
        title: "Four arrivals, four first responses",
        body: "| What arrives | Think first | The first five minutes |\n|---|---|---|\n| Collapse, pale, faint, early pregnancy | Ruptured ectopic — haemorrhagic shock | Call doctor and maternity team now; airway and breathing; warm; IV access per training and protocol; urgent review, never home |\n| Seizure at 34 weeks or beyond | Eclampsia | Left lateral; protect airway; nothing in the mouth; time the fit; dim and quiet the room; call loudly; treatment per protocol with the team |\n| Bright bleeding, pregnancy beyond 20 weeks | Antepartum haemorrhage | Left lateral; observations and shock watch; no vaginal examination on the ward; call maternity team now; prepare for transfer |\n| Contractions beginning on your ward | Imminent labour | Call maternity team immediately; no vaginal examinations; stay with her, calm breathing; if the baby arrives first: dry, warm, skin-to-skin, keep calling |\n\nIn every row: position, call, protect, stay — and the notes carry the times.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "0300 on your medical ward. A 26-year-old admitted two days ago for malaria treatment — and now 34 weeks pregnant — wakes with a blinding headache and then convulses. You are the night nurse; the maternity unit is a corridor and a lift away. What do you do in the first five minutes, and what must you never do?\n\nAnswer: Stay and shout — the emergency call and a colleague sent for the doctor and the maternity team; left lateral position with her airway protected; nothing forced into her mouth and no restraint of her limbs; time the fit from your watch, not your memory. After the fit: dim the lights, keep handling minimal, take pulse, respiratory rate and blood pressure, secure IV access per protocol, and prepare for urgent transfer to the maternity unit with your timed notes going with her — the maternity team will lead the definitive treatment. Never: leave her alone, force a gag, or chart the fit from memory at the desk at 0600.",
      },
      {
        type: "clinical_pearl",
        body: "The pregnant woman's airway and the loudness of your call come before every question about her pregnancy. Position left, protect the airway, call for the maternity team, and stay — recognition and referral are your surgery, and never abandoning her is your signature.",
      },
      {
        type: "quiz_prompt",
        title: "The bleeding rule",
        body: "A woman at 32 weeks reports painless bright bleeding on your ward. What must NOT happen where you stand — and what happens instead?\n\nAnswer: No vaginal or speculum examination by ward staff — a low-lying placenta can be disturbed into life-threatening haemorrhage; that examination belongs to the maternity team in a place equipped for what it may find. Instead: left lateral, observations with a shock watch, IV access per protocol, the maternity team called now, and preparation for transfer.",
      },
      {
        type: "memory_trick",
        body: "LABOR on a general ward: Leave nothing — stay with her; Airway and left-lateral position; Bring the maternity team fast; Observations and oxygen per prescription; Record the times as they happen.",
      },
      {
        type: "summary",
        body: "- Births are led by the maternity team — the nurse recognises, calls, protects and never abandons the woman.\n- Collapse in early pregnancy is a ruptured ectopic until excluded: call, airway, warmth, urgent review.\n- Seizure at term-ish is eclampsia: left lateral, airway protected, nothing in the mouth, time it, call loudly.\n- Bleeding beyond 20 weeks: left lateral, no vaginal examination on the ward, maternity team now.\n- Labour starting: call immediately, no vaginal examinations, stay — and receive the arriving baby warmly if it beats the team.\n- Document times at the bedside; the notes travel with the woman.",
      },
    ],
    questions: [
      {
        topic: "Obstetric on General Ward Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A pregnant woman on your general ward starts convulsing. What is the correct first response?",
        options: [
          "Hold her down and force a wrapped spoon between her teeth",
          "Turn her to the left lateral position, protect her airway, call for help, and time the fit",
          "Run to the maternity unit immediately to fetch help yourself",
          "Insert an IV line first, before anything else",
        ],
        correctIndex: 1,
        explanation:
          "Left lateral protects both airway and placental blood flow, nothing goes in the mouth, the call for help is made loudly or by a named colleague — never by leaving her — and the fit is timed. Restraint injures; an abandoned fitting woman is worse than an unattended line.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Obstetric on General Ward Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 32 weeks reports bright painless vaginal bleeding while admitted on your surgical ward. Why must no one on the ward perform a vaginal examination?",
        options: [
          "Because it is painful and she is already frightened",
          "Because a low-lying placenta can be disturbed and cause massive haemorrhage",
          "Because the examination belongs to the police in bleeding cases",
          "Because it will definitely start labour",
        ],
        correctIndex: 1,
        explanation:
          "Painless bright bleeding beyond 20 weeks suggests placenta praevia; a vaginal or speculum examination can disrupt it into torrential bleeding. The examination belongs to the maternity team where blood and theatre are ready — your ward's job is position, monitoring, the call and the transfer.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Obstetric on General Ward Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Labour is starting on your general ward and the maternity team has been called but has not arrived. What is the nurse's correct stance?",
        options: [
          "Perform a vaginal examination to see how far along she is",
          "Send her walking to the maternity unit to speed the transfer",
          "Stay with her, keep her calm and breathing, perform no vaginal examinations, and receive the baby warmly if it arrives first",
          "Give her a sedative as prescribed for other patients to slow things down",
        ],
        correctIndex: 2,
        explanation:
          "The call is made, then the nurse stays: calm support, steady breathing, no examinations by ward staff, and if the baby arrives before the team, it is received, dried and warmed skin-to-skin — receiving a birth already happening is care, while conducting one is not the ward nurse's role.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Obstetric on General Ward Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "A pale, sweating woman who is about 32 weeks pregnant collapses in your OPD corridor. Why is the left lateral position part of the first response, whoever she turns out to be?",
        options: [
          "It is simply the most comfortable position for a collapsed patient",
          "The heavy uterus, lying on the spine, compresses the great vessels and reduces the blood returning to the heart — tilting left lifts it off",
          "It makes it easier to insert an IV line in the right arm",
          "It prevents convulsions in all pregnant women",
        ],
        correctIndex: 1,
        explanation:
          "Beyond about 20 weeks the uterus compresses the inferior vena cava and aorta against the spine when she lies flat — aortocaval compression cuts venous return and placental flow. Left lateral tilt is the free intervention that restores both while you assess and call.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Obstetric on General Ward Sim",
        front: "The first five minutes of an eclamptic seizure on a general ward?",
        back: "Stay and shout for help, left lateral, protect the airway, nothing forced into the mouth, time the fit; afterwards: dim, quiet, observations, and urgent transfer to the maternity team with timed notes.",
      },
      {
        topic: "Obstetric on General Ward Sim",
        front: "Why no vaginal examination when a pregnant woman bleeds on your ward?",
        back: "Painless bright bleeding beyond 20 weeks suggests a low-lying placenta — an examination can disturb it into massive haemorrhage. Position, monitor, call, transfer.",
      },
      {
        topic: "Obstetric on General Ward Sim",
        front: "The LABOR mnemonic for a general ward?",
        back: "Leave nothing (stay), Airway and left-lateral, Bring the maternity team, Observations and oxygen per prescription, Record the times.",
      },
      {
        topic: "Obstetric on General Ward Sim",
        front: "Why left lateral beyond 20 weeks?",
        back: "The uterus compresses the aorta and vena cava against the spine when flat — the tilt restores venous return and placental blood flow, free of charge.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Emergency responses for eclampsia and haemorrhage — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Scope of the general nurse in maternal care — verify with the Council.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National referral and emergency guidance — verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Paediatric & Maternal Simulations",
    lessonTitle: "Sim Cases: The Newborn Who Will Not Breathe",
    description:
      "The Golden Minute — warmth, position and air for the baby who arrives limp and silent. Most flat newborns need no drugs at all; they need effective ventilation, and a rising chest proves it.",
    difficulty: "Clinical Reasoning",
    durationMin: 13,
    objectives: [
      "Describe the initial steps of newborn resuscitation and the Golden Minute rule.",
      "Explain when positive pressure ventilation begins and what makes it effective.",
      "Apply the air-first principle, heart-rate checks and the escalation to compressions in team drills.",
    ],
    tags: ["simulation", "newborn", "resuscitation", "ventilation", "golden minute"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most babies cry and pink up without your help. The small minority who do not are the reason every birth area keeps a warm corner, a bag-mask and a team that has drilled this until it is boring. Newborn resuscitation is mostly warmth, position and air — plus the courage to start fast.\n\nAnd sometimes the baby arrives where no maternity team stands — on a general ward, in a corridor — and the drill is the same: your dry hands and a warm cloth are the first incubator.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **Golden Minute**: within 60 seconds of birth, every baby should be either breathing on its own or receiving help to breathe. The steps: dry the baby thoroughly on a warm surface, cover, position the head **neutrally** — the sniffing position, neither flexed nor over-extended — clear the airway only if it is visibly blocked, and stimulate by rubbing the back or soles. Then assess: breathing, heart rate and tone. The heart rate is counted at the base of the cord or by listening — count six seconds and multiply by ten.\n\nA baby who is **apnoeic or gasping, or whose heart rate is under 100**, gets positive pressure ventilation with a bag-mask — starting with **room air**, because most newborns recover with air alone. Effective ventilation is the whole game: a proper seal, a neutral head, gentle breaths at roughly 40 to 60 a minute, and the chest visibly rising. The rising chest is your feedback — if it does not rise, reseal the mask, reposition the head and try again before reaching for anything else. Chest **compressions** are rare: only if the heart rate stays **below 60 despite effective ventilation**, at a ratio of three compressions to one breath. Most babies who are slow to start need better ventilation, not drugs, not oxygen, and not another minute of rubbing.",
      },
      {
        type: "table",
        title: "Read the baby in the first minute",
        body: "| What you find | What it means | What you do |\n|---|---|---|\n| Crying, moving, heart rate over 100 | A transitioning newborn | Dry, warm, skin-to-skin with the mother, observe |\n| Not breathing, limp, heart rate slow | Needs help to breathe now | Ventilate with bag-mask and air within the Golden Minute |\n| Gasping | Same as not breathing — gasping is failing | Ventilate now |\n| Chest not rising during ventilation | The seal or position is wrong | Reseat the mask, reposition the head, re-check — before oxygen or compressions |\n| Heart rate still under 60 despite effective ventilation | Circulation needs support | Compressions with ventilation at 3:1, coordinated as a team |\n\nThe middle three rows are where almost every mark — and almost every life — sits.",
      },
      {
        type: "case",
        title: "The drill as it runs",
        body: "A baby is born on your general ward at 0140, before the maternity team arrives — limp and not breathing. At 30 seconds the team is still rubbing; at 75 seconds someone begins bag-mask ventilation, but the chest does not move, and another colleague is already fetching the oxygen cylinder. Name the two errors the debrief will highlight, and describe what success actually looks like.\n\nAnswer: First, ventilation should have started by 60 seconds — the Golden Minute — not after extended stimulation; rubbing longer was buying nothing. Second, with the chest not rising, the priority is fixing the mask seal and head position until it does — connecting oxygen does nothing for a baby receiving no air at all. Success looks like the chest rising with each gentle breath and the heart rate climbing after it, with the maternity team met at the door.",
      },
      {
        type: "clinical_pearl",
        body: "The cure for nearly every flat newborn is the same thing: effective ventilation with air, proven by a rising chest and a climbing heart rate. The stopwatch — not the oxygen cylinder — is the most important machine in the room.",
      },
      {
        type: "quiz_prompt",
        title: "Counting the heart rate",
        body: "In the middle of a newborn drill, how do you get a usable heart rate in six seconds — and at what two numbers does it change your management?\n\nAnswer: Palpate the base of the umbilical cord or listen to the chest, count six seconds and multiply by ten. Under 100 with apnoea or gasping means ventilate now; still under 60 despite effective ventilation means compressions at 3:1 begin.",
      },
      {
        type: "memory_trick",
        body: "WARM: dry and Warm the baby, Airway neutral, Rub the back — and Move to ventilation by one minute if there is no breathing. Air first, chest rise always, oxygen almost never.",
      },
      {
        type: "summary",
        body: "- Golden Minute: breathing or help to breathe within 60 seconds of birth.\n- Dry, warm, neutral head position, stimulate — and clear the airway only if visibly blocked.\n- Apnoea, gasping or heart rate under 100: positive pressure ventilation with room air.\n- The chest must rise with each breath; reseal and reposition until it does, before anything else.\n- Compressions only for a heart rate under 60 despite effective ventilation, at 3:1.\n- Heart rate by cord palpation: six seconds counted, multiplied by ten.",
      },
    ],
    questions: [
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A term newborn is limp and apnoeic at 30 seconds despite thorough drying and stimulation. What should be happening by 60 seconds?",
        options: [
          "Continued stimulation for five more minutes",
          "Waiting for the one-minute Apgar before acting",
          "Positive pressure ventilation with a bag-mask begins",
          "Intravenous adrenaline is prepared",
        ],
        correctIndex: 2,
        explanation:
          "The Golden Minute rule: breathing or help to breathe within 60 seconds. Waiting for Apgar, prolonged stimulation or reaching for drugs all delay the one intervention that works — effective ventilation.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During bag-mask ventilation, the newborn's chest is not moving with your squeezes. What is the correct response?",
        options: [
          "Squeeze harder and faster until the chest moves",
          "Connect oxygen while continuing to squeeze",
          "Move immediately to chest compressions",
          "Reseal the mask and reposition the head until the chest rises",
        ],
        correctIndex: 3,
        explanation:
          "No chest rise means no ventilation, and the fixes are seal and position. Harder squeezing risks injury, and neither oxygen nor compressions help a baby receiving no air.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "With which oxygen concentration does newborn resuscitation normally begin?",
        options: [
          "100 percent oxygen by mask",
          "Room air — 21 percent oxygen",
          "60 percent oxygen",
          "A carbon dioxide and oxygen mixture",
        ],
        correctIndex: 1,
        explanation:
          "Evidence supports starting with room air: most newborns recover with air alone, and higher oxygen is reserved for guided situations. The air-first rule is examinable precisely because the reflex is to reach for the cylinder.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Newborn Resuscitation Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "A newborn has been ventilated effectively for 30 seconds with a rising chest, but the heart rate counted at the cord remains about 50 per minute. What happens next?",
        options: [
          "Stop ventilation and observe — the chest is rising, so all is well",
          "Increase the ventilation pressure substantially",
          "Begin chest compressions, three compressions to one breath, with the team coordinated",
          "Give oral feeds to stimulate breathing",
        ],
        correctIndex: 2,
        explanation:
          "Compressions begin when the heart rate stays under 60 despite effective ventilation — and only then, in a 3:1 ratio coordinated with continued ventilation. A rising chest with a heart rate still under 60 is a circulation problem, not a ventilation one.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Resuscitation Sim",
        front: "What must be achieved within 60 seconds of birth?",
        back: "The Golden Minute: the baby is either breathing on its own or receiving positive pressure ventilation.",
      },
      {
        topic: "Newborn Resuscitation Sim",
        front: "The signs that ventilation is working?",
        back: "The chest rises with each gentle breath and the heart rate climbs — reseal and reposition until it does; no chest rise means no ventilation.",
      },
      {
        topic: "Newborn Resuscitation Sim",
        front: "When do chest compressions start in newborn resuscitation?",
        back: "Only when the heart rate stays below 60 despite effective ventilation — compressions at 3:1 with ventilation, rare in practice.",
      },
      {
        topic: "Newborn Resuscitation Sim",
        front: "How do you count a newborn's heart rate quickly?",
        back: "Feel the base of the umbilical cord (or listen to the chest), count six seconds, multiply by ten — under 100 with apnoea means ventilate; under 60 despite ventilation means compressions.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Basic Newborn Resuscitation",
        year: "2012",
        url: "https://www.who.int/publications/i/item/9789241503693",
        note: "Air-first and ventilation guidance — check for latest update.",
      },
      {
        organization: "American Academy of Pediatrics",
        title: "Helping Babies Breathe (2nd edition)",
        year: "2017",
        note: "Golden Minute training programme — verify current materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Newborn care and referral guidance — verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Community & Complex Simulations",
    lessonTitle: "Sim Cases: The Home Visit That Goes Wrong",
    description:
      "The routine follow-up that becomes a collapsed elder on the floor — no colleagues, no crash trolley, maybe no phone signal. Delegation by name, the glucometer in your bag, and the referral from a distance.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the community emergency sequence: scene safety, response check, help by named person, focused assessment.",
      "Explain the hypoglycaemia response in the home — sugar if swallowing, nothing by mouth if drowsy.",
      "Apply safe transport decisions, SBAR handover and follow-up to a home-visit emergency.",
    ],
    tags: ["simulation", "community", "home visit", "hypoglycaemia", "referral"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the community you carry the hospital in a bag. A visit scheduled for a blood-pressure check can become a collapsed elder on the floor, with no colleagues in the next room, no crash trolley down the corridor, and maybe no phone signal in the valley. The first ten minutes of that emergency are yours alone.\n\nThis drill trains what the home visit asks of you: scene safety, delegation by name, the few tools your bag actually holds, and a decision about transport that respects both the clock and the terrain.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The sequence is the ward's, translated for a kitchen floor. **Scene first**: danger to you helps no one — an aggressive confused patient, a cooking fire, a dog. Then **response and breathing**; then the call for help, made by a **named person**: 'Yaw, run to the compound and phone the emergency line for an ambulance; come back and tell me what they said.' A message given to the crowd is a message that was never sent; a named runner with a reply is a real referral system.\n\nWhat your bag can do is small and decisive: a glucometer names hypoglycaemia in 30 seconds, a blood-pressure set and thermometer map the collapse, and your eyes — skin pinch, breathing, capillary refill — map the dehydration and shock. If a known diabetic is sweating, trembling and drowsy with a low glucose reading and can still swallow safely: fast sugar now — a sweet drink, glucose if you carry it — recheck in about fifteen minutes, then a real meal, and urgent transport if he does not recover. If he is **drowsy**: nothing by mouth, airway watched, and the fastest safe transport arranged. Never leave a breathing-compromised patient to fetch help; never force fluids on a drowsy man — aspiration kills quieter than delay. Document what you found with times, hand over in SBAR at the receiving facility, and follow up the next day: the visit that went wrong is also a chance to fix what caused it.",
      },
      {
        type: "table",
        title: "What the visit-bag can and cannot do",
        body: "| You carry | It answers | It cannot |\n|---|---|---|\n| Glucometer | Is this hypoglycaemia? | Give IV glucose |\n| BP set and thermometer | How unstable is this collapse? | Transfuse or infuse ward-level fluids |\n| Malaria rapid test | Is fever malaria? | Diagnose a stroke or a bleed |\n| Dressings, gloves, ORS | Wounds, protection, mild dehydration | Replace an ambulance, a theatre or a laboratory |\n\nThe bag buys you a diagnosis and ten minutes; the rest of the emergency is delegation, positioning and transport.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "Mr. Boadi, 74, is a known diabetic on daily tablets, on your follow-up list for a blood-pressure check. His wife meets you at the door worried: he has eaten little for two days because of nausea, and he took his morning tablets as usual. You find him slumped in his chair, sweating, trembling, answering you slowly. The glucometer reads low. What do you do, in order — and what must you not do?\n\nAnswer: Check the scene, then his response and breathing. Send a named neighbour for help and call the CHPS line. Because he is drowsy-but-rousable, test the swallow: if he swallows safely, a fast sugar source now, seated and supported, recheck in about fifteen minutes, then a proper meal; if his swallow is unsafe, nothing by mouth — airway watch and urgent transport. Either way: inform the prescriber that a sulphonylurea-taker has had a hypoglycaemic episode during two days of poor eating — that medication review is the follow-up that stops the next visit going wrong. Not to do: leave him to fetch help, force a drink into a drowsy man, or file 'weakness of old age' as the diagnosis.",
      },
      {
        type: "clinical_pearl",
        body: "In the community, the first tool is not in the bag — it is delegation by name. 'Someone call for help' is nobody calling; 'Yaw, run and phone, then come and tell me what they said' is a referral system.",
      },
      {
        type: "quiz_prompt",
        title: "The one question before you touch",
        body: "You open the door and see a collapsed patient. What comes before even checking his response?\n\nAnswer: Scene safety — danger to you or around you helps nobody: an aggressive confused patient, a fire, a fall hazard, a dog. Then response, airway, breathing — and the named-person call for help.",
      },
      {
        type: "memory_trick",
        body: "The community emergency ladder: Scene, Shout (name a runner), Sugar if you can measure it, Safest transport, SBAR and write it down.",
      },
      {
        type: "summary",
        body: "- Scene safety first; then response, airway and breathing — the ward sequence on a kitchen floor.\n- Delegate help by name, with a reply required: the message must come back to you.\n- The glucometer is the bag's fastest diagnosis in any collapsed known diabetic.\n- Swallowing hypoglycaemic: fast sugar, recheck in fifteen minutes, then food. Drowsy: nothing by mouth, airway watch, transport.\n- Arrange the fastest safe transport, keep the airway protected en route, and hand over in SBAR with your timed notes.\n- Follow up the next day: the episode is also the medication review the prescriber needs.",
      },
    ],
    questions: [
      {
        topic: "Home Visit Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You find a neighbour's visitor collapsed and unresponsive on the floor of a compound house, breathing. What is the correct first sequence?",
        options: [
          "Check the scene for danger, then his response and breathing, and send a named person to call for help",
          "Run immediately to the CHPS compound for help, then return",
          "Lift him onto the bed before checking anything",
          "Start chest compressions straight away",
        ],
        correctIndex: 0,
        explanation:
          "Scene safety, then response and breathing, then the call for help made by a named person while you stay. Running away abandons a breathing patient, moving him before assessment risks a spinal injury, and compressions belong only to a patient who is not breathing normally.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Home Visit Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A known diabetic on tablets is drowsy, sweating and trembling at home; your glucometer reads low. He is rousable but swallows poorly. What do you do about the low sugar?",
        options: [
          "Give a cup of sweet porridge quickly, small sips at a time",
          "Nothing by mouth — protect the airway and arrange urgent transport",
          "Give his next scheduled dose of tablets early",
          "Recheck the sugar in one hour and decide then",
        ],
        correctIndex: 1,
        explanation:
          "A drowsy patient with an unsafe swallow must receive nothing by mouth — aspiration is the quieter killer. Fast sugar is the right treatment only for a patient who can swallow safely; waiting an hour to recheck a symptomatic hypoglycaemia wastes the treatment window.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Home Visit Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the call for help made by naming one person with a required reply?",
        options: [
          "Because it is friendlier for the community",
          "Because messages given to a crowd are never reliably delivered — a named runner who reports back confirms the referral actually happened",
          "Because Ghana Health Service policy requires written consent to call",
          "Because only adults over 40 may use phones",
        ],
        correctIndex: 1,
        explanation:
          "'Someone call for help' diffuses responsibility until nobody does it; one named person, given the task and required to return with the answer, is a working referral chain on a kitchen-floor budget.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Home Visit Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "Mr. Boadi recovers fully after fast sugar, but the visit's real work is not finished. Which option names the follow-up that stops the next episode?",
        options: [
          "Close the visit — the episode is over and he is fine",
          "Inform the prescriber that a sulphonylurea-taker had hypoglycaemia during days of poor eating, so the regimen can be reviewed, and re-check him next day",
          "Advise him to stop all diabetic medicines permanently",
          "Teach the family that sugar is always harmful in diabetes",
        ],
        correctIndex: 1,
        explanation:
          "The episode is the message: glucose-lowering tablets plus two days of poor intake is a recurring recipe for collapse. The prescriber needs the report, the family needs sick-day education — keep eating or alert the clinic — and the next-day visit closes the loop.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Home Visit Sim",
        front: "The community emergency sequence in five words?",
        back: "Scene, Shout (name a runner), Sugar if measurable, Safest transport, SBAR — and write the times down.",
      },
      {
        topic: "Home Visit Sim",
        front: "Why nothing by mouth for the drowsy hypoglycaemic?",
        back: "An unsafe swallow turns treatment into aspiration — fast sugar only for patients who can swallow; for the drowsy one, airway protection and urgent transport.",
      },
      {
        topic: "Home Visit Sim",
        front: "What does the visit-bag buy you in a collapse?",
        back: "A diagnosis — glucometer, blood pressure, temperature, malaria test — and about ten minutes; the rest of the emergency is delegation, positioning and transport.",
      },
      {
        topic: "Home Visit Sim",
        front: "What closes the loop after a home emergency?",
        back: "SBAR handover with timed notes at the receiving facility, a next-day follow-up visit, and the report to the prescriber that turns the episode into a regimen review.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Community Health Nursing Services and CHPS Guidance",
        note: "Community nurse roles and referral pathways — verify current guidance with GHS.",
      },
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "Assessment sequence applicable to community settings — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Documentation and referral duties — verify current edition with the Council.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Community & Complex Simulations",
    lessonTitle: "Sim Cases: Ethical Dilemmas",
    description:
      "The sims with no shockable rhythm — a refusal, a family secret, a resource that is not there. Rehearse the method: facts, conflict, principles, consult, decide, document.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe a six-step method for working through any clinical ethical dilemma.",
      "Explain consent, confidentiality and their limits, with Ghanaian ward examples.",
      "Apply fair, transparent reasoning to refusal, disclosure and resource-allocation scenarios.",
    ],
    tags: ["simulation", "ethics", "consent", "confidentiality", "decision making"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some simulations have no shockable rhythm. A patient refuses the treatment that would save her; a family begs you to hide a diagnosis; two patients need the one machine that exists. There is no algorithm that hands you the answer — but there is a method for reaching one honestly, and that method is what the drill rehearses.\n\nThe stakes are real: these are the cases that follow nurses home at night. Practised well, they are also where the profession's spine shows.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The method runs six steps, in order: **gather the facts** — clinical, personal, and the patient's own words; **name the conflict** — autonomy against beneficence, confidentiality against safety, fairness against scarcity; **weigh the principles** — autonomy, beneficence, non-maleficence, justice — against your professional code; **consult** — senior nurse, doctor, ethics committee, the family where the patient consents; **decide and act**; **document** the reasoning and the times, not just the outcome.\n\nAround the method sit three rules that answer most stems. Consent is valid when it has capacity, information and voluntariness — and a competent adult's refusal is a decision to be respected and documented, never a problem to be engineered around. Confidentiality is the default with defined limits: risk to an identifiable other, legal requirement, safeguarding — and where a patient's partner is at risk, the road is counselling the patient toward disclosure with support, not unilateral breach. Scarcity is decided by clinical need and reversibility, transparently, by the senior team, revisited and documented — never by who paid, who shouted, or whose relation the patient is. And under all of it sits candour: a near-miss is reported and honestly acknowledged, because hidden errors are the ones that repeat.",
      },
      {
        type: "table",
        title: "Three dilemmas, one method",
        body: "| The situation | The conflict | The move the examiner keys |\n|---|---|---|\n| Transfusion refused on faith grounds, severe anaemia | Autonomy vs beneficence | Counsel without threats, document her informed refusal in her words, continue every alternative — and keep the door open |\n| Family asks you not to tell their mother she has cancer | Veracity and autonomy vs family loyalty | Explore the family's fears, then ask the patient how much she wants to know, and support a paced, truthful disclosure |\n| One oxygen concentrator, two patients, power cut | Justice under scarcity | Senior clinical decision on need and reversibility, transparent, documented, revisited — never relationship or payment |\n\nIn every row the method is the same six steps — the answer changes, the spine does not.",
      },
      {
        type: "case",
        title: "The case that runs this sim",
        body: "0330. Your patient's severe anaemia has turned dangerous, and the crossmatched blood is finally available — and he refuses it, on faith grounds, with his family standing firmly behind him. The doctor is angry and asks you to 'just get it done while he sleeps'. What are your obligations in the next hour?\n\nAnswer: Run the method. Facts: his severity, his words, his capacity, his family's position. Conflict: autonomy against beneficence. Principles and code: forced treatment of a competent adult is assault; coercion and concealment breach the code. Consult: senior nurse and senior doctor, now, with the chaplain or elder if he wishes. Act: continue every non-blood measure — oxygen, positioning, close monitoring, treatment of the underlying cause — while explaining consequences plainly and without threats. Document: his refusal in his own words, with a witness, the counselling given, the escalation made, and the times of all of it. Care does not stop when the choice is not yours, and neither does the record.",
      },
      {
        type: "clinical_pearl",
        body: "Ethics stems reward the answer that keeps both duties alive — the patient's right to decide and your duty to keep caring. Coercion, abandonment and secrecy are always the wrong options, however kindly they are dressed.",
      },
      {
        type: "quiz_prompt",
        title: "The hidden diagnosis",
        body: "A family begs you not to tell their mother, 68, that her biopsy showed cancer — 'the shock will kill her'. What question does the method put to the patient herself?\n\nAnswer: How much do you want to know, and who should hear it with you? Many patients already suspect; the ethical path explores her wishes and supports a paced, truthful disclosure with the family involved — not a permanent secret decided over her head. Concealing forever is deciding for her.",
      },
      {
        type: "memory_trick",
        body: "Facts, Fight (name the conflict), Principles, Phone a senior, Act, Add it to the notes — the six steps of every dilemma, in order, every time.",
      },
      {
        type: "summary",
        body: "- Six steps: facts, conflict, principles and code, consult, act, document reasoning and times.\n- Consent = capacity + information + voluntariness; refusal is respected, documented, and never engineered around.\n- Confidentiality is the default with defined limits; partner-risk runs through counselling toward disclosure, not unilateral breach.\n- Scarce resources: clinical need and reversibility, decided transparently by the senior team, documented and revisited.\n- Candour: report and acknowledge near-misses — hidden errors repeat; honest ones are fixed.",
      },
    ],
    questions: [
      {
        topic: "Ethical Dilemma Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which sequence describes the six-step method for working through a clinical ethical dilemma?",
        options: [
          "Decide quickly, act, and write the justification afterwards",
          "Gather facts, name the conflict, weigh principles and the code, consult, decide and act, document the reasoning",
          "Ask the most senior doctor and record whatever is decided",
          "Follow the family's wishes, since they pay the bills",
        ],
        correctIndex: 1,
        explanation:
          "The method orders the work: facts before conflict, conflict before principles, principles before consultation — and the documentation records the reasoning, not just the outcome. Speed and deference are not ethics; the family's purse is not either.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Ethical Dilemma Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A competent adult with dangerous anaemia refuses blood transfusion after clear, calm counselling. What is the professionally correct course?",
        options: [
          "Transfuse anyway — saving her life outranks her preference",
          "Respect the refusal after counselling, document it with the risks explained, and continue every alternative treatment",
          "Discharge her immediately for non-compliance",
          "Ask the family to sign consent on her behalf",
        ],
        correctIndex: 1,
        explanation:
          "Autonomy governs competent adults: refusal is documented with the counselling given and the door left open, while the duty of care continues through every alternative measure. Forced treatment is assault; family consent cannot replace her own.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Ethical Dilemma Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family asks the team not to tell a patient her diagnosis of cancer. What is the ethically strongest next move?",
        options: [
          "Agree — the family knows her best and the news may harm her",
          "Tell her everything immediately, whatever the family says",
          "Explore the family's fears and ask the patient how much she wants to know, supporting a paced, truthful disclosure",
          "Write the diagnosis in notes only, and never speak of it again",
        ],
        correctIndex: 2,
        explanation:
          "The patient's right to know belongs to her, not her relatives — but the therapeutic path respects both: explore the family's fears, ask her directly how much information she wants, and pace the truth with support. Permanent concealment and brutal immediacy both decide for her.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Ethical Dilemma Sim",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "During a power cut, one working oxygen concentrator must serve two breathless patients. What is the fair, professionally defensible process?",
        options: [
          "Give it to whoever arrived first, as queue order is neutral",
          "Give it to the patient related to a staff member, since the family will help maintain it",
          "The senior team allocates by clinical need and reversibility, transparently, documenting the decision and revisiting it as conditions change",
          "Draw lots in front of the families to keep everyone satisfied",
        ],
        correctIndex: 2,
        explanation:
          "Justice under scarcity means a clinical decision — need, reversibility, and response to the therapy — made openly by the responsible senior team, documented and revisited. Queues, connections and theatre all smuggle unfairness in under neutral names.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Ethical Dilemma Sim",
        front: "The three-part test of valid consent?",
        back: "Capacity, information, voluntariness — the patient can understand, has been told in plain language, and chooses freely, without pressure from anyone.",
      },
      {
        topic: "Ethical Dilemma Sim",
        front: "When may confidentiality be limited?",
        back: "Defined exceptions only: serious risk to an identifiable other, legal requirements, and safeguarding duties — worked through with seniors, never by unilateral gossip or breach.",
      },
      {
        topic: "Ethical Dilemma Sim",
        front: "How is a scarce resource allocated ethically?",
        back: "By clinical need and reversibility, decided transparently by the senior team, documented and revisited — never by payment, relationship or noise.",
      },
      {
        topic: "Ethical Dilemma Sim",
        front: "Why report near-misses honestly?",
        back: "Hidden errors repeat and kill again; reported ones are system repairs. Candour to patients and honesty in records are the professional spine of safe care.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Professional standards for consent, confidentiality and candour — verify current edition with the Council.",
      },
      {
        organization: "International Council of Nurses",
        title: "The ICN Code of Ethics for Nurses",
        year: "2021",
        note: "International ethics framework — verify current revision.",
      },
      {
        organization: "WHO",
        title: "Patient Safety: Global Patient Safety Action Plan",
        note: "Near-miss reporting and candour culture — verify current guidance.",
      },
    ],
  },
];
