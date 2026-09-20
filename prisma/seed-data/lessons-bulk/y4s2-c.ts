// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch C (Final Semester)
// 20 lessons anchored to prisma/seed-data/anchors/y4s2-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-domiciliary-midwifery",
    moduleTitle: "Improving Community Care",
    lessonTitle: "Leading Health Education in the Community",
    description:
      "You already teach one mother at a time. This lesson lifts your eyes to the whole village — durbars, radio, registers — where one well-led message can reach the mothers you will never meet.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four steps of planning a community health education campaign.",
      "Explain why community leaders and local data must shape every health message.",
      "Apply teaching methods suited to large groups and mixed literacy levels.",
    ],
    tags: ["health education", "leadership", "community engagement", "health promotion"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You have taught mothers one at a time at the CHPS compound, in queues and under trees. This lesson lifts your eyes to the whole community: the village where three women still deliver at home, the market where family planning rumours travel faster than facts. Community education multiplies you — one well-led session can reach the mothers you will never meet.\n\nLeading education at this level is a midwifery skill, not a lucky gift. It follows a planning cycle you can learn and repeat, and it leans on people who hold far more influence in the village than any poster ever will.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Run the planning cycle. **Assess** the need with data and listening: clinic registers, district figures, and the concerns women themselves raise. **Plan** one clear objective — not ten messages, one, such as 'every pregnant woman in this zone books before 12 weeks'. **Implement** through channels people already trust: durbars, radio talk in the local language, mothers' clubs, community health volunteers and home visits. **Evaluate** honestly — count attendance, ask what people remember, and watch the numbers that matter, like ANC bookings or skilled-delivery rates.\n\nThen work through power, not around it. The chief, the queen mother, assembly members and religious leaders open doors that stay locked to outsiders; seek their blessing and their voices first. For large, mixed-literacy crowds, demonstration and story beat lecture and leaflet: show the bednet being tucked, tell the story of the woman who reached the facility in time. Repeat the one message until the market repeats it for you.",
      },
      {
        type: "clinical_pearl",
        body: "Never plan a durbar alone, and never hold one without the leaders' blessing first. A health message carried by a respected local voice outlives any poster you print.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The district health team notices that teenage pregnancies in your CHPS zone have doubled in a year, and the DHMT asks you to lead the community response. You have a health talk booked at the market square next month, a chief and a queen mother who know every household, a youth group, and a year of register data. Where do you start, and what will make the talk actually change anything?\n\nAnswer: Start with the leaders — brief the chief and queen mother, win their endorsement, and invite the youth group to co-plan so the audience trusts the messengers. Let the registers name the target group and fix one clear message, then deliver it in the local language through stories rather than a lecture. Evaluate by re-checking the registers and pregnancy test numbers in six months, not by counting the crowd.",
      },
      {
        type: "memory_trick",
        body: "LEAD it: Listen for the real need, Enlist the leaders, Act on one clear message, then Determine whether it worked. A campaign that skips the first two steps is just a poster.",
      },
      {
        type: "summary",
        body: "- Assess needs with registers and listening before choosing any message.\n- Plan one objective and repeat one message through trusted channels.\n- Enlist chiefs, queen mothers and religious leaders before the first drumbeat.\n- Demonstration, story and local language beat lectures and leaflets.\n- Evaluate with outcome numbers — bookings, deliveries — not attendance alone.",
      },
    ],
    questions: [
      {
        topic: "Community Health Education",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The DHMT asks you to lead a campaign on teenage pregnancy in your zone. What is your first step?",
        options: [
          "Meet the chief, queen mother and other leaders to share the data and win their endorsement",
          "Print posters in English and paste them at the CHPS compound and market",
          "Book a prime-time radio slot and prepare your talk",
          "Visit the schools immediately and begin teaching without informing anyone",
        ],
        correctIndex: 0,
        explanation:
          "Leaders open doors and carry the community's trust, so data plus endorsement comes before materials, airtime or teaching. Posters, radio and school visits all follow once the gatekeepers are on board.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Community Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Six months after your campaign on early ANC booking, which result best shows it is working?",
        options: [
          "Two hundred people attended the durbar",
          "More women book before 12 weeks in the registers",
          "The talk was praised on the community radio phone-in show",
          "More posters were distributed this quarter than last",
        ],
        correctIndex: 1,
        explanation:
          "Behaviour change shows in the registers — earlier bookings. Attendance, praise and poster counts measure activity, not outcomes.",
        courseSlug: "community-domiciliary-midwifery",
      },
      {
        topic: "Community Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You must deliver one key message to a large market crowd of mixed reading levels. Which method is most effective?",
        options: [
          "Read a detailed English handout aloud, line by line",
          "Display the clinic's statistics table on a flip chart",
          "Tell the story of one woman who reached the facility in time, with a short demonstration",
          "Ask everyone to come to the CHPS compound for a lecture next week",
        ],
        correctIndex: 2,
        explanation:
          "Stories and demonstrations stick with mixed-literacy audiences, translate easily into local language, and model the action you want. Handouts, tables and deferred lectures lose the crowd.",
        courseSlug: "community-domiciliary-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Community Education",
        front: "What are the four steps of the community education planning cycle?",
        back: "Assess the need, Plan one clear objective, Implement through trusted channels, Evaluate with real outcome numbers such as ANC bookings.",
      },
      {
        topic: "Community Education",
        front: "Why enlist chiefs and queen mothers before a campaign?",
        back: "Their endorsement opens doors, gives the message trusted local voices, and outlasts any poster or one-off talk.",
      },
      {
        topic: "Community Education",
        front: "What does a real evaluation of a campaign measure?",
        back: "Behaviour change in the registers — earlier bookings, more skilled deliveries — not attendance counts or praise.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "The Ottawa Charter for Health Promotion",
        year: "1986",
        note: "Foundational WHO health promotion framework — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy — verify current edition with GHS.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Standard midwifery textbook — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Licensing Exam Strategy",
    description:
      "The last gate between you and the pin on your chest. Study the exam itself before you study another fact — its shape, its marks and the way its minutes should be spent.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the typical structure and marking logic of a licensing examination.",
      "Explain why every question deserves an answer and how flag-and-return protects your score.",
      "Apply a personal pacing plan to a full-length paper.",
    ],
    tags: ["licensing exam", "strategy", "exam technique", "pacing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The licensing examination is the last gate between you and the pin. Before you memorise anything more, study the exam itself: how it is shaped, how marks are awarded, and how minutes are spent. Candidates fail this paper more often through poor strategy than through ignorance.\n\nThis lesson gives you the pass logic and a pacing plan, so that on the day your knowledge is spent where it earns the most marks.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the shape. The licensing examination typically combines written multiple-choice papers with a practical assessment, and the written paper is weighted towards core midwifery — antenatal care, labour, obstetric emergencies, the newborn and community care — with supporting questions from your earlier years. Every question normally carries the same mark, so an easy normal-range question pays exactly what a hard management one does. Where there is no negative marking, a blank is the only unforgivable answer: eliminate what is clearly wrong, then choose.\n\nProtect the clock. Divide total minutes by the number of questions and keep a buffer for review. Work the paper twice: on the first pass answer everything you know and flag the doubtful; on the second pass spend the buffer on the flags. If a stem is long, read the final line — the actual question — before the story, then hunt the relevant findings. Length hides the question; the last line reveals it.",
      },
      {
        type: "clinical_pearl",
        body: "Nine minutes on one stubborn question buys five easier ones elsewhere. Flag, move, return — the mark is the same size wherever you earn it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During the paper, a candidate meets a complicated obstetric calculation and spends nine of her 100 minutes deciding between two options before guessing and moving on. Later she finds four easy questions in the final section that she never reached at all. What happened, and what should the next candidate do instead?\n\nAnswer: She paid nine minutes for one guess and lost four near-certain marks — a bad trade in a paper where every question is equal. The next candidate should flag the calculation immediately, collect the sure marks across the whole paper, and return to the flag with whatever review time remains, committing from elimination rather than leaving a blank.",
      },
      {
        type: "memory_trick",
        body: "PACE the paper: Preview the whole thing, Answer the sure ones, Come back to the flags, End with a sweep so no question stays blank.",
      },
      {
        type: "summary",
        body: "- Every question is worth the same mark — bank the easy ones first.\n- With no negative marking, a blank scores nothing: eliminate, then commit.\n- Work twice: pass one for the sure answers, pass two for the flags.\n- Read the last line of a long stem first — the question lives there.\n- Weight revision towards core midwifery, the paper's centre of gravity.",
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
        stem: "Which topic area is most heavily weighted in a midwifery licensing written paper?",
        options: [
          "Pure anatomy of the skull and vertebrae",
          "Laboratory physics and instrument mechanics",
          "Antenatal care, labour, obstetric emergencies and newborn care",
          "Hospital accounts and storekeeping",
        ],
        correctIndex: 2,
        explanation:
          "Licensing papers centre on the core of safe practice — pregnancy, labour, emergencies and the newborn — with earlier years as support. The other options are side subjects, not the centre of gravity.",
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
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Spaced Repetition: Study Smarter",
    description:
      "A lecture understood on Monday is a stranger by Friday — unless you fight the forgetting curve on schedule. Meet the memory science that quietly beats cramming.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the forgetting curve and the spacing effect.",
      "Explain why testing yourself outperforms rereading notes.",
      "Apply an expanding review schedule to your own revision plan.",
    ],
    tags: ["revision", "memory", "spaced repetition", "active recall"],
    sourceStatus: "GCU_ALIGNED",
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
        body: "Two students revise the stages of labour. Ama rereads her notes five times through the week and feels confident; Efua reads once, then quizzes herself from a blank page on days one, three and seven. In the mock, both meet a partograph question, but only one can rebuild the answer. Whose memory holds, and why did the rereading feel so good while working so poorly?\n\nAnswer: Efua's holds. Rereading builds a comforting sense of familiarity that fades fast, while self-testing on days one, three and seven rebuilt the memory just as the forgetting curve would have taken it. The discomfort of retrieval is the feeling of learning itself.",
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
        stem: "You learn cord prolapse management today. Following a spacing schedule, when should your first review fall?",
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

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Revising Like a Pro",
    lessonTitle: "Question Practice That Actually Works",
    description:
      "Two hundred questions answered and abandoned teach less than forty properly dissected. The learning hides in the review — this is deliberate practice, not screen-time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe deliberate practice as it applies to multiple-choice drills.",
      "Explain the purpose and structure of an error log.",
      "Apply a review routine to every practice question block.",
    ],
    tags: ["practice questions", "technique", "deliberate practice", "error log"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Question banks feel productive: numbers climb, screens flash green. But volume is not skill. Two hundred questions answered and abandoned teach less than forty questions properly dissected — the learning hides in the review, and the review is a skill of its own.\n\nThis lesson turns a casual drill into deliberate practice: the targeted, feedback-rich kind that builds the reflexes both the exam and the ward will test.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Deliberate practice has three marks: it targets your weak spots, gives immediate feedback, and repeats with adjustment. After every block, hold a post-mortem on all the items — the ones you missed and the ones you got right. For each, ask: What was the topic? Why is the keyed answer right? Why was my wrong choice tempting? Then sort your misses into knowledge gaps, misread stems, distractor traps and time pressure — each has a different fix. Write every miss into an error log with topic and reason, and within a week the patterns surface as a short, honest list of true weaknesses.\n\nLet the log steer the plan: a weakness in dose calculations deserves targeted drilling, not another mixed test. Review the questions you answered correctly too — if you cannot explain why the key is right, you guessed, and a lucky guess quietly files itself as knowledge. Finally, learn the examiner's fingerprints: options with absolutes like always and never are usually wrong, while the carefully qualified option is often the true one.",
      },
      {
        type: "clinical_pearl",
        body: "The candidates who pass are rarely the ones who did the most questions. They are the ones who could explain the most questions — right ones included.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two students each finish 1000 questions before the mock. One answers quickly, checks only her score of 68 percent, and moves on; the other does 40 a day and reviews every one, keeping an error log that names dose calculations and misread stems as her two weaknesses. Whose score climbs, and what exactly makes the difference?\n\nAnswer: The second student climbs. Her review converts each question into feedback, and the error log turns 40 questions a day into targeted repair of two specific weaknesses. Checking a score measures the student; reviewing the questions changes her.",
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
        stem: "Your error log shows that 14 of your last 22 misses involved dose and calculation items. What is the best response?",
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
          "Real medicine is qualified, so absolutist options are rarely defensible — examiners know it. Qualified, mechanism-based options are more often the carefully written keys.",
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

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: The Foundation Era",
    description:
      "Anatomy, physiology and microbiology never left the syllabus — they just put on clinical clothes. Revisit Year 1 the way the examiner uses it: as the machinery behind every complication.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the highest-yield foundation topics: reproductive anatomy, the menstrual cycle, the pelvis and asepsis.",
      "Explain how each foundation fact links to a clinical decision in midwifery.",
      "Apply spaced review to the core numbers and cycles of Year 1.",
    ],
    tags: ["review", "year 1", "anatomy", "physiology", "microbiology"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 1 gave you the language of the body, and the licensing paper never forgot it. Foundation questions rarely stand alone now; they hide inside clinical stems. A question about ectopic pregnancy is really a question about the fallopian tube, and one about controlling severe bleeding is really a question about the uterine artery.\n\nSo revise Year 1 the way the examiner uses it: as the machinery behind every complication you have since studied.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Reproductive anatomy first: fertilisation normally happens in the **ampulla** of the tube, which is why ectopic pregnancies cluster there. The uterine artery rises from the internal iliac; the ovarian artery comes from the aorta — a favourite exam pair. The gynaecoid pelvis is the roomiest for birth, and the ischial spines are the station landmarks you still plot on every partograph. In physiology, hold the cycle in one line: FSH grows the follicle, oestrogen builds the endometrium and triggers the LH surge, ovulation follows within 24 to 36 hours, and the corpus luteum's progesterone holds the lining for a fixed 14-day luteal phase.\n\nMicrobiology and foundations live on in every handwash and every observation chart. The chain of infection explains why gloves, clean cord care and sterile delivery kits work. The WHO five moments of hand hygiene — before touching the woman, before a clean procedure, after body-fluid exposure, after touching her, and after her surroundings — carries easy marks and saves bloodstreams. Adult ranges anchor everything: pulse 60 to 100, respiratory rate 12 to 20 — and 24 or more is never noise on a chart.",
      },
      {
        type: "clinical_pearl",
        body: "Revise anatomy as complication. For each structure, ask what goes wrong here clinically: the tube becomes ectopic pregnancy, the cervix becomes prematurity, the ischial spines become station.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A licensing stem describes a woman at six weeks with one-sided pain and a positive pregnancy test, and asks where the pregnancy most likely lodged. Another asks which artery is key to controlling severe uterine bleeding. Both are Year 1 questions wearing Year 4 clothes. Can you answer both — and what does that tell you about how to revise foundations?\n\nAnswer: The pregnancy most likely lodged in the ampulla of the fallopian tube, and severe uterine bleeding is controlled at the uterine artery, a branch of the internal iliac. It tells you foundations are tested as the mechanism inside complications, so revise each structure through its clinical failure, not in isolation.",
      },
      {
        type: "memory_trick",
        body: "The cycle in one breath: FSH Finds the follicle, LH Lets the egg go, and Progesterone Protects the lining for two weeks. Say it until it is faster than reading the options.",
      },
      {
        type: "summary",
        body: "- Fertilisation is ampulla business — and so is ectopic pregnancy.\n- Uterine artery from the internal iliac; ovarian artery from the aorta.\n- FSH grows the follicle, the LH surge releases, progesterone sustains a fixed 14 days.\n- Five hand-hygiene moments and the chain of infection still carry easy marks.\n- Adult respiratory rate sits 12 to 20; 24 or more is always a red flag.",
      },
    ],
    questions: [
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How soon after the LH surge does ovulation typically occur?",
        options: [
          "24 to 36 hours",
          "Immediately at the surge peak",
          "About 7 days",
          "Only after progesterone peaks",
        ],
        correctIndex: 0,
        explanation:
          "The LH surge triggers ovulation roughly 24 to 36 hours later; the luteal phase that follows is fixed at about 14 days.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The uterine artery, key to controlling severe uterine bleeding, arises from which vessel?",
        options: [
          "The abdominal aorta",
          "The external iliac artery",
          "The femoral artery",
          "The internal iliac artery",
        ],
        correctIndex: 3,
        explanation:
          "The uterine artery branches from the internal iliac; the ovarian artery is the aortic one — examiners love swapping that pair.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Foundation Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which respiratory rate counted on a postnatal ward is always abnormal and demands escalation?",
        options: [
          "16 breaths per minute",
          "20 breaths per minute",
          "24 breaths per minute",
          "12 breaths per minute",
        ],
        correctIndex: 2,
        explanation:
          "The normal adult range is 12 to 20, so 24 already exceeds it — with tachycardia or fever it signals sepsis or shock until excluded. Twelve and 16 sit within range; 20 is at the ceiling.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Foundation Review",
        front: "Where does fertilisation normally occur, and what implants abnormally in the same spot?",
        back: "The ampulla of the fallopian tube — also the commonest site of ectopic pregnancy.",
      },
      {
        topic: "Foundation Review",
        front: "Uterine artery versus ovarian artery origins?",
        back: "Uterine artery: internal iliac. Ovarian artery: abdominal aorta.",
      },
      {
        topic: "Foundation Review",
        front: "LH surge timing and luteal phase length?",
        back: "Ovulation follows the LH surge by about 24 to 36 hours; the luteal phase then lasts a fixed 14 days.",
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
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: The Medical-Surgical Era",
    description:
      "Disease and the drugs that treat it — Year 2 returns as exam stems about a drug in your hand and a monitor rule at the bedside. Revise it as condition, drug, danger, first action.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the drug classes a midwife must know cold: oxytocin, magnesium sulphate, antihypertensives and antibiotics.",
      "Explain the monitoring and antidote rules for magnesium toxicity.",
      "Apply ABC priority logic to mixed medical-surgical questions.",
    ],
    tags: ["review", "year 2", "pharmacology", "medical surgical", "priority setting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 2 gave you disease and the drugs that treat it, and the licensing paper visits that era constantly — because every complication you manage has a medicine in your hand and a monitoring rule at the bedside.\n\nRevise the era the way the exam builds it: a condition, its drug, its danger and its first action.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the midwife's drug shelf. Oxytocin contracts the uterus — the backbone of PPH prevention and active management. Magnesium sulphate prevents and treats eclamptic fits but demands respect: monitor reflexes, respiratory rate and urine output, keep calcium gluconate at the bedside as the antidote, and stop the drug if reflexes vanish or breathing slows. Methyldopa, labetalol and nifedipine lower blood pressure in pregnancy; ferrous sulphate plus folate rebuilds anaemic blood; SP protects against malaria as IPTp but never treats confirmed disease — that needs a treatment course per national guideline. Tetracyclines stay out of pregnancy because they discolour fetal teeth and affect bone.\n\nAnaemia in pregnancy means Hb below 11 g/dL, with below 7 severe — that woman needs blood arranged and referral, not tablets and a cheerful goodbye. Carry ABC logic into every mixed question: whatever the diagnosis, the option that protects breathing or circulation outranks comfort, education and paperwork. Sepsis questions hinge on the same ladder — fever with tachycardia and fast breathing means antibiotics and escalation, not observation.",
      },
      {
        type: "clinical_pearl",
        body: "For every drug you revise, learn one antidote and two observations. MgSO4: calcium gluconate — and watch reflexes, respiration and urine output.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on magnesium sulphate for severe pre-eclampsia has passed only 15 mL of urine in the last hour, her respiratory rate has fallen to 10, and you cannot elicit her knee reflexes. What has happened, and what are your next two moves?\n\nAnswer: This is magnesium toxicity — the drug is accumulating in an oliguric woman and her breathing is depressed. Stop the infusion immediately and prepare to give calcium gluconate per protocol while protecting her airway and calling for help; keep checking reflexes, respiration and urine output continuously until she is stable.",
      },
      {
        type: "memory_trick",
        body: "Magnesium's three guards: Reflexes, Respiration, Renal output. If any guard falls — reflexes gone, breathing slowed, urine scanty — stop the drug and reach for calcium.",
      },
      {
        type: "summary",
        body: "- Oxytocin: contraction — the backbone of PPH prevention and active management.\n- MgSO4: watch reflexes, respiration and urine; calcium gluconate is the antidote.\n- SP is malaria prevention (IPTp), never treatment; tetracyclines stain fetal teeth and bone.\n- Anaemia: Hb below 11 in pregnancy, below 7 severe — arrange blood and refer.\n- ABC wins every mixed question: breathing and circulation before comfort.",
      },
    ],
    questions: [
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are tetracyclines avoided in pregnancy?",
        options: [
          "They cause maternal hair loss",
          "They discolour fetal teeth and affect bone growth",
          "They reliably cause miscarriage in the third trimester",
          "They neutralise the effect of iron tablets",
        ],
        correctIndex: 1,
        explanation:
          "Tetracyclines bind calcium in developing teeth and bone, causing discoloration and skeletal effects — safer classes such as the penicillins are preferred in pregnancy.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On magnesium sulphate, a woman's knee reflexes disappear and her respiratory rate falls to 10. What is the immediate response?",
        options: [
          "Give the next maintenance dose early to prevent a fit",
          "Increase the IV fluid to speed excretion",
          "Continue and re-examine in one hour",
          "Stop the infusion and give calcium gluconate per protocol while supporting her breathing",
        ],
        correctIndex: 3,
        explanation:
          "Vanishing reflexes with respiratory depression is magnesium toxicity: stop the drug, give the antidote and protect the airway. Continuing in any form deepens the depression.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Medical-Surgical Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Four patients call at once on your ward. Whose need comes first by ABC priority?",
        options: [
          "The one complaining of wound pain after caesarean section",
          "The one whose breathing is laboured and noisy",
          "The one asking about discharge paperwork",
          "The one due for a routine blood pressure check",
        ],
        correctIndex: 1,
        explanation:
          "Breathing outranks comfort, education and routine monitoring in the ABC ladder — compromised breathing is the immediate threat to life.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Medical-Surgical Review",
        front: "Magnesium sulphate: monitoring trio and antidote?",
        back: "Watch reflexes, respiratory rate and urine output; calcium gluconate reverses toxicity.",
      },
      {
        topic: "Medical-Surgical Review",
        front: "Hb thresholds for anaemia in pregnancy?",
        back: "Below 11 g/dL is anaemia; below 7 g/dL is severe — plan blood and referral, not tablets alone.",
      },
      {
        topic: "Medical-Surgical Review",
        front: "Which antibiotic family is avoided in pregnancy, and why?",
        back: "Tetracyclines — they discolour developing fetal teeth and affect bone.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National guidelines — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "WHO emergency care guide — check for latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: Core Midwifery",
    description:
      "The heart of the paper and the heart of your profession. Pregnancy, labour, birth and the puerperium — the facts the examiner loves most, compressed for fast revision.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the partograph's alert and action lines and what crossing each demands.",
      "Explain active management of the third stage and the definition of PPH.",
      "Apply core ranges and timelines — fetal heart, lochia, involution — accurately.",
    ],
    tags: ["review", "year 3", "labour", "partograph", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "This is the centre of gravity. Antenatal care, labour, birth and the puerperium — the examiner spends most marks here, because this is what you will do most of. The good news: Year 3 rewards exactly the knowledge you already carry on your fingers.\n\nThis lesson compresses the core into the facts the paper loves, so your revision can be fast and targeted rather than endless.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Labour runs in four stages and the partograph governs the first. The alert line marks expected progress at about 1 cm per hour in active labour; crossing it means progress is slow — reassess the four Ps (powers, passage, passenger, psyche) and inform a senior. The action line sits four hours to the right; crossing it means the referral decision is already due. Listen to the fetal heart for a full minute every 15 to 30 minutes in the first stage and after every contraction in the second — 110 to 160 beats per minute is home. In the third stage, active management is oxytocin within one minute of birth, controlled cord traction and uterine massage, and PPH is 500 mL or more after a vaginal birth, 1000 after caesarean.\n\nAfter birth, the puerperium follows its own arithmetic: the fundus sits at the umbilicus on day one and descends about a centimetre a day until it is impalpable around days 10 to 12, while lochia moves rubra to serosa to alba over roughly four to six weeks. The first feed belongs in the first hour, skin to skin. And any offensive-smelling lochia is sepsis until excluded — a rule worth several marks and many lives.",
      },
      {
        type: "clinical_pearl",
        body: "When a management question feels tangled, come back to two clocks: the partograph's lines and the fundus's daily descent. Most postnatal exam answers are one of those two clocks.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A primigravida at term reaches 7 cm, but her cervical plot has crossed the action line; she has caput and moulding ++, and the fetal heart has climbed to 170. What does each finding mean, and what is the decision?\n\nAnswer: Crossing the action line means four hours past expected progress — prolonged or obstructed labour; moulding ++ fits cephalopelvic disproportion, and a fetal heart of 170 is fetal distress. The decision is urgent obstetric referral with the woman positioned left lateral, monitoring continued and the receiving team called ahead — not more hours of observation.",
      },
      {
        type: "memory_trick",
        body: "AMTSL is OTM — Oxytocin at one minute, Traction on the cord (controlled), Massage of the uterus. 'On The Money' is a third stage that goes right.",
      },
      {
        type: "summary",
        body: "- Alert line crossed: reassess the four Ps and inform a senior; action line crossed: decide and refer.\n- Fetal heart 110 to 160, counted a full minute — every 15 to 30 minutes in the first stage.\n- AMTSL: oxytocin within one minute, controlled cord traction, uterine massage.\n- PPH: 500 mL or more after vaginal birth, 1000 after caesarean.\n- Fundus at the umbilicus day one, about 1 cm a day down, gone by days 10 to 12; offensive lochia means sepsis.",
      },
    ],
    questions: [
      {
        topic: "Core Midwifery Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal fetal heart rate range in labour?",
        options: [
          "110 to 160 beats per minute",
          "100 to 140 beats per minute",
          "120 to 180 beats per minute",
          "90 to 150 beats per minute",
        ],
        correctIndex: 0,
        explanation:
          "The normal band is 110 to 160; values outside it require left lateral positioning, review of causes and escalation.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Core Midwifery Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A labouring woman's cervical plot crosses the action line. What does this demand?",
        options: [
          "Nothing — the alert line is the significant line",
          "Four more hours of observation before deciding",
          "A decision now: inform senior staff and prepare referral or intervention",
          "Immediate forceps delivery at the CHPS compound",
        ],
        correctIndex: 2,
        explanation:
          "Crossing the action line means progress is already four hours slower than expected; the response is escalation and decision, while waiting longer or attempting instrumental birth at that level invites disaster.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Core Midwifery Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Postpartum haemorrhage after a vaginal birth is defined as blood loss of at least …",
        options: [
          "250 mL within 24 hours",
          "300 mL within 24 hours",
          "500 mL within 24 hours",
          "1000 mL within 24 hours",
        ],
        correctIndex: 2,
        explanation:
          "500 mL within 24 hours of a vaginal birth defines PPH, and 1000 mL after caesarean. Clinically, any loss causing shock signs is PPH whatever the measured volume.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Core Midwifery Review",
        front: "Alert line versus action line on the partograph?",
        back: "Alert line = expected 1 cm per hour progress; crossing it calls for reassessment. Action line = 4 hours to the right; crossing it calls for a decision — escalate or refer.",
      },
      {
        topic: "Core Midwifery Review",
        front: "The three components of AMTSL?",
        back: "Oxytocin within one minute of birth, controlled cord traction, uterine massage after the placenta delivers.",
      },
      {
        topic: "Core Midwifery Review",
        front: "Day 1 fundal height and involution speed?",
        back: "At the umbilicus on day one, descending about 1 cm a day, impalpable by days 10 to 12; a fundus above the umbilicus later suggests subinvolution or a full bladder.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
        note: "WHO intrapartum guidance — check for latest update.",
      },
      {
        organization: "WHO",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240065499",
        note: "Check for latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "The Four-Year Review",
    lessonTitle: "Review: Advanced Practice and Leadership",
    description:
      "The layer that turns a technician into a professional — emergencies handled calmly, ethics reasoned honestly, a ward run with sense. The paper tests all three, often in one stem.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe first-line responses to eclampsia, PPH and obstructed labour.",
      "Explain the four ethical principles with maternity examples.",
      "Apply leadership habits — escalation, delegation and documentation — to ward scenarios.",
    ],
    tags: ["review", "year 4", "emergencies", "ethics", "leadership"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Year 4 added the layer that turns a technician into a professional: emergencies handled calmly, ethics reasoned honestly, and a ward run with sense. The paper tests all three, usually inside the same stem — a crisis, a decision, a duty.\n\nThis lesson refreshes the final layer in the order exams love it: the emergency, the principle, the paperwork.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Emergencies. An eclamptic fit: protect the airway, left lateral position, nothing forced into her mouth, magnesium sulphate per protocol, then referral — build that instinct in that order. PPH follows its ladder: call for help, rub up a contraction, give the uterotonic, empty the bladder, then hunt the four Ts — tone, trauma, tissue, thrombin — with tone, uterine atony, the cause in most cases. Obstructed labour is a referral diagnosis once the action line is crossed with mounting moulding; waiting is how uteri rupture. Severe pre-eclampsia at any facility begins with magnesium sulphate and a plan to reach comprehensive care.\n\nEthics. Autonomy is her right to decide — consent is a conversation, and refusal is documented with risks explained and the door left open. Beneficence and non-maleficence are the do-good and no-harm pair; justice is fairness — the same quality of care for the market woman and the minister's wife. Leadership answers reward delegation with names, escalation before collapse, and records written at the bedside rather than reconstructed at the desk. Research ethics rides the same principles: informed consent, confidentiality, and the right to withdraw.",
      },
      {
        type: "clinical_pearl",
        body: "In ethics stems, the option that respects the woman's own decision — while documenting and continuing care — is almost always the key. Coercion never is.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After a birth, a woman bleeds heavily; you begin PPH care, and once she is stable she refuses the blood transfusion that has been arranged, saying her church forbids it. What does your profession require of you now?\n\nAnswer: Continue every non-blood measure — fluids, uterotonics, monitoring and definitive treatment of the bleeding cause — while explaining clearly and without threats what refusal may mean. Document her informed refusal, inform the senior clinician, respect her decision and leave the door open: autonomy governs, and care does not stop when a choice is not yours.",
      },
      {
        type: "memory_trick",
        body: "Ethics: All Babies Need Justice — Autonomy, Beneficence, Non-maleficence, Justice. And the four Ts of PPH ride four wheels — Tone, Trauma, Tissue, Thrombin — and the flat tyre is usually Tone.",
      },
      {
        type: "summary",
        body: "- Eclamptic fit: airway, left lateral, nothing in the mouth, MgSO4 per protocol, refer.\n- PPH: help, rub, uterotonic, bladder — then the four Ts, with tone first.\n- Autonomy, beneficence, non-maleficence, justice — consent is a conversation.\n- Delegating with names and documenting at the bedside are leadership answers.\n- Refusal of care: explain, document, continue alternatives, keep the door open.",
      },
    ],
    questions: [
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with severe pre-eclampsia starts convulsing in your facility. Which response sequence is correct?",
        options: [
          "Hold her down, insert a mouth gag, and wait for the fit to pass",
          "Give diazepam IV push immediately as the first drug",
          "Restrain her and insert a nasogastric tube",
          "Left lateral position, airway protection, magnesium sulphate per protocol, arrange referral",
        ],
        correctIndex: 3,
        explanation:
          "Left lateral with airway protection and magnesium sulphate is the evidence-based response; forcing objects into the mouth injures, and diazepam is not the first-line anticonvulsant for eclampsia.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman refuses a recommended blood transfusion for her severe anaemia. What is the professionally correct course?",
        options: [
          "Give the transfusion anyway, since her life is in danger",
          "Discharge her immediately for non-compliance",
          "Respect the refusal after clear counselling, document it, and continue alternative treatment",
          "Hand her case to the pastor of her church for a decision",
        ],
        correctIndex: 2,
        explanation:
          "Competent adults hold autonomy, and forced treatment is assault. Counselling, documentation, alternatives and escalation respect both her rights and her safety.",
        courseSlug: "comprehensive-exam-review",
      },
      {
        topic: "Advanced Practice Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the four Ts accounts for most cases of primary PPH?",
        options: [
          "Tissue — retained products of conception",
          "Thrombin — coagulation failure",
          "Trauma — genital tract injury",
          "Tone — uterine atony",
        ],
        correctIndex: 3,
        explanation:
          "Atony causes roughly three-quarters of primary PPH, which is why the first response is uterine massage and uterotonics before hunting tears, tissue or clotting problems.",
        courseSlug: "comprehensive-exam-review",
      },
    ],
    flashcards: [
      {
        topic: "Advanced Practice Review",
        front: "First-line response to an eclamptic fit?",
        back: "Left lateral, protect the airway, nothing forced into the mouth, magnesium sulphate per protocol, urgent referral.",
      },
      {
        topic: "Advanced Practice Review",
        front: "The four Ts of PPH, and the commonest?",
        back: "Tone (atony — most common), Trauma, Tissue, Thrombin.",
      },
      {
        topic: "Advanced Practice Review",
        front: "The four ethical principles in plain words?",
        back: "Autonomy — her decision; Beneficence — do good; Non-maleficence — do no harm; Justice — fairness for all.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "WHO emergency care guide — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Professional standards — verify current edition with the Council.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Exam Readiness",
    lessonTitle: "Mock Exams Under Real Conditions",
    description:
      "A mock in your pyjamas with your phone beside you is a quiz. A mock at the exam hour, timed and full-length, rehearses the whole day — stamina, pacing and nerves included.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how to stage a mock that mirrors the real examination day.",
      "Explain the four error categories and the fix each one points to.",
      "Apply mock results to a focused next-week revision plan.",
    ],
    tags: ["mock exam", "practice", "stamina", "revision planning"],
    sourceStatus: "GCU_ALIGNED",
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
        body: "A candidate's first mock scores 58 percent, with twelve questions lost to time at the end and eight misread stems. After a week of pacing drills and stem-reading practice, her second mock scores 67 percent — but nine of her eleven misses are now dose-calculation questions. What should her next two weeks hold?\n\nAnswer: The mocks have done their diagnostic work — pacing and misreading are repaired, and the remaining weakness is isolated. Her next two weeks should target dose and calculation revision with drilled practice, then a third full mock to confirm both gains hold before exam day.",
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

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "comprehensive-exam-review",
    moduleTitle: "Exam Readiness",
    lessonTitle: "Exam Day and the Night Before",
    description:
      "You cannot learn a year of midwifery in one night, but you can lose a year of preparation in one. The final 24 hours are about delivering what you already own.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe a calm final-24-hour routine from packing to lights-out.",
      "Explain why sleep consolidates memory better than late cramming.",
      "Apply breathing, pacing and between-paper habits on the day itself.",
    ],
    tags: ["exam day", "wellbeing", "sleep", "pacing"],
    sourceStatus: "GCU_ALIGNED",
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

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "How Simulation Works",
    lessonTitle: "Why We Simulate",
    description:
      "When a cord prolapses at 2 a.m., nobody wants that to be the first time your hands reach for the knee-chest position. Simulation moves the emergency into your hands before the emergency does.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe simulation-based education and its safety rationale.",
      "Explain why rare emergencies must be rehearsed to be met calmly.",
      "Apply the brief-scenario-debrief habit to your own practice sessions.",
    ],
    tags: ["simulation", "learning", "patient safety", "deliberate practice"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a cord prolapses at 2 a.m., nobody wants that to be the first time your hands reach for the knee-chest position. Real emergencies are rare, and rare events do not wait politely for you to have met them before. Simulation is midwifery education's answer: rehearse the emergency on a model until the response is a reflex.\n\nThis lesson covers why simulation works, what it demands, and why the debrief — not the manikin — is where learning happens.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Simulation is structured practice on models and role-players under realistic pressure, followed by honest feedback. Its logic is the safety triad: emergencies are high-acuity but low-frequency — you may meet one cord prolapse a year, or none — while your response must be immediate and correct. Rehearsal converts knowledge you could recite into a sequence your hands perform, freeing working memory for the decisions that matter. Errors on a manikin cost nothing but a red face; the same error on a ward costs a life. WHO's emergency-care courses are built on exactly this principle.\n\nTwo habits make a simulation work. First, the shape: brief, scenario, debrief — skip the first or the last and it is no longer simulation. Second, psychological safety: the sim room is judgement-free, mistakes are data, and everyone from student to senior is allowed to be wrong on purpose. Fidelity is often overrated: a plastic pelvis, a doll and a stopwatch run an excellent shoulder dystocia drill, because the learning target is the decision sequence and the teamwork, not the silicone.",
      },
      {
        type: "clinical_pearl",
        body: "You fight like you train. The midwife who has drilled ten prolapsed cords reaches for the knee-chest position as one movement — the first real cord she meets is her eleventh, not her first.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student's first real eclamptic fit happens at a district hospital at 3 a.m. Her seniors notice she moves through the sequence — airway, position, calling for the magnesium — without hesitation, and afterwards they ask where she learned such calm. Why does rehearsal produce it?\n\nAnswer: Repeated simulation made the response automatic, so the fit triggers trained hands rather than panic. With the sequence running by itself, her working memory stayed free for the decisions that matter — dosing, monitoring and referral timing. Calm is not her temperament; it is her repetitions.",
      },
      {
        type: "memory_trick",
        body: "One simulation meal has three courses, in order: Brief, Scenario, Debrief. Skip the brief and you guess the rules; skip the debrief and you repeat your errors on a real woman.",
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
        stem: "What is the primary safety rationale for practising obstetric emergencies on simulators?",
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
        stem: "Why can a low-fidelity drill — plastic pelvis, doll and stopwatch — still be effective?",
        options: [
          "Because examiners cannot tell the difference in equipment",
          "Because the learning target is the decision sequence and teamwork, not tissue realism",
          "Because low-fidelity equipment matches CHPS compound conditions",
          "Because students relax more with simple equipment",
        ],
        correctIndex: 1,
        explanation:
          "For most obstetric drills the trainable skills are the order of actions and the communication around them; realism of tissue adds little to sequence learning.",
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
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Emergency-care training built on simulation drills — check for latest update.",
      },
      {
        organization: "International Nursing Association for Clinical Simulation and Learning (INACSL)",
        title: "Standards of Best Practice: Simulation",
        year: "2016",
        note: "Professional simulation standards — verify current version.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "How Simulation Works",
    lessonTitle: "Debriefing: Where the Learning Happens",
    description:
      "The scenario ends, the manikin is wiped, and the real lesson begins. Research is blunt: the debrief — not the drill — produces the learning, and you can learn to run it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three-phase structure of a good debrief.",
      "Explain psychological safety and advocacy-inquiry in plain terms.",
      "Apply questions that open reflection instead of closing it.",
    ],
    tags: ["debrief", "reflection", "simulation", "feedback"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The scenario ends, the manikin is wiped clean, and the real lesson begins. Research on simulation is blunt: the debrief, not the drill, produces the learning. A bad scenario with a good debrief teaches more than a flawless scenario wrapped in silence or shame.\n\nDebriefing is a skill you can practise now and use for life — in simulations, on ward rounds, and after every real emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A good debrief runs three phases. Reactions first: let people vent the emotion — 'my heart was pounding' — because feeling must settle before thinking can start. Then analysis: explore what happened and why, using questions more than statements. Finally, summary: each participant names what they will do differently — commitments, not compliments. Tools help: plus/delta (what worked, what to change), or the ladder of what, so what, now what.\n\nThe questioning style that works is advocacy-inquiry: pair an observation with genuine curiosity. 'I noticed you waited two minutes before calling for help — what was your reasoning?' says what you saw, shares the concern honestly, and asks rather than accuses. The ground rule underneath is psychological safety: assume good intent, treat errors as information, and keep blame out of the room — a student who hides a mistake in the next simulation is a midwife who will hide it on a real ward. And if the facilitator talks more than the learners, the debrief has failed; the learners' own words are the instrument.",
      },
      {
        type: "clinical_pearl",
        body: "Open every debrief with the same question: 'How did that feel?' It costs one minute and buys the honesty that everything else depends on.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a PPH drill, a student forgot to call for help until the fourth minute. The facilitator only says 'next time, call earlier,' and moves on; the student nods and says nothing else for the whole debrief. What was lost, and which question would have rescued it?\n\nAnswer: The reasoning was lost — without asking why she delayed, no one learns whether she froze, judged the bleeding minor, or feared looking weak, so the behaviour will return. An advocacy-inquiry question — 'I noticed help came at minute four; walk me through your thinking then' — surfaces the real cause and lets the group fix the cause, not just the symptom.",
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
          "Why did you make that mistake with the oxytocin?",
          "You clearly panicked when the mother fitted.",
          "I noticed you hesitated before the MgSO4 — what was going through your mind?",
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
        organization: "Prentice Hall (David A. Kolb)",
        title: "Experiential Learning: Experience as the Source of Learning and Development",
        year: "1984",
        note: "Foundational work on learning from experience.",
      },
      {
        organization: "Simulation in Healthcare (journal)",
        title: "Promoting Excellence and Reflective Learning in Simulation (Eppich and Cheng)",
        year: "2015",
        note: "Debriefing framework — verify current literature.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Antenatal and Labour Simulations",
    lessonTitle: "Sim Cases: Antenatal Complications",
    description:
      "The sim clinic door opens and a woman walks in talking. Your job is to end the visit with one of three verdicts — treat and review, treat and refer, or refer now.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how an antenatal sim case unfolds from history to referral.",
      "Explain the referral triggers for severe anaemia, severe pre-eclampsia and malaria.",
      "Apply the assess-act-refer sequence to clinic scenarios.",
    ],
    tags: ["simulation", "antenatal", "anaemia", "pre-eclampsia", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In clinic simulations the door opens and a woman walks in talking. Your job is to hear the history, target the examination, read the numbers and end with one of three verdicts: treat and review, treat and refer, or refer now. Every antenatal sim is scored on that last sentence.\n\nThis lesson drills the three complications sim faculty love most: anaemia, hypertension and malaria.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Severe pre-eclampsia is the sim with the sharpest teeth. The numbers: 140/90 with protein is pre-eclampsia; 160/110 or more, or any headache, visual disturbance or epigastric pain, makes it severe. Severe means magnesium sulphate per protocol and urgent referral to comprehensive care — not 'review in the morning'. Say findings aloud as you elicit them: 'BP 168 over 112, protein two plus, she has a headache.' The team can only act on what it hears.\n\nAnaemia cases turn on the Hb and the breathing. Below 11 g/dL is anaemia: iron, education, review. Below 7, or breathlessness at rest, is severe: arrange blood and refer — never tablets and a cheerful goodbye. Malaria cases punish a classic error: SP is prevention (IPTp), never treatment; a febrile woman with a positive test gets a treatment course per national guideline, today. In every case run the same loop: history, targeted examination, assessment said out loud, action, referral decision, and a written note with times.",
      },
      {
        type: "clinical_pearl",
        body: "In simulations and in clinics, narrate your findings as you elicit them. Assessors — and real teams — can only help with what they hear, and a spoken finding is half a decision.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 32 weeks walks into the sim clinic complaining of headache and pain under her ribs. Your reading is 168/112 with 2+ protein, and she says the baby has not moved since morning. What are your findings called, and what must happen in the next 15 minutes?\n\nAnswer: This is severe pre-eclampsia with possible fetal compromise. In the next 15 minutes: tell the team aloud, keep her on her left side, give magnesium sulphate per protocol, secure IV access and arrange urgent referral to comprehensive care, calling ahead in SBAR — and record everything with times, including the reduced fetal movements for the receiving team.",
      },
      {
        type: "memory_trick",
        body: "The antenatal case runs HEAR: History, Examine, Act aloud, Refer. If you cannot say the verdict in one sentence — 'severe pre-eclampsia, MgSO4, referring now' — you are not finished.",
      },
      {
        type: "summary",
        body: "- Every antenatal sim ends in one of three verdicts: treat and review, treat and refer, refer now.\n- Severe pre-eclampsia (160/110, headache, vision, epigastric pain): MgSO4 and urgent referral.\n- Severe anaemia (Hb below 7 or breathless at rest): blood and referral, never tablets alone.\n- SP is IPTp prevention, never treatment — confirmed malaria gets treated per national guideline.\n- Narrate findings aloud and write the times; the verdict is not done until it is documented.",
      },
    ],
    questions: [
      {
        topic: "Antenatal Sim Cases",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which combination makes pre-eclampsia 'severe' in an antenatal simulation?",
        options: [
          "BP 168/112 with protein and epigastric pain",
          "BP 150/95 with trace protein and a mild cough",
          "BP 138/88 with a normal dipstick",
          "BP 125/80 with ankle oedema in the evening",
        ],
        correctIndex: 0,
        explanation:
          "Severity is a BP of 160/110 or above, or pre-eclampsia with danger signs — headache, visual disturbance, epigastric pain — either of which changes management to MgSO4 and urgent referral.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Antenatal Sim Cases",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 30-week woman has an Hb of 6.4 g/dL and is breathless while sitting. What is the correct verdict?",
        options: [
          "Iron tablets, dietary advice, review in two weeks",
          "Oral iron doubled tonight plus reassurance",
          "Folic acid alone and advice to rest at home",
          "Arrange blood and urgent referral — treat and refer, not tablets alone",
        ],
        correctIndex: 3,
        explanation:
          "Hb below 7 with breathlessness is severe anaemia in pregnancy; the safe pathway is blood and referral. Oral iron at home cannot correct this fast enough and risks collapse.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Antenatal Sim Cases",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A febrile woman at 26 weeks has a positive malaria test. What does the sim expect?",
        options: [
          "Another dose of SP, since she is due for IPTp",
          "Paracetamol only, as fever in pregnancy is normal",
          "Referral for fever without any treatment given",
          "Treatment for confirmed malaria per national guideline",
        ],
        correctIndex: 3,
        explanation:
          "A positive test means disease now, so treat per guideline at the point of care; SP is prevention for IPTp, and neither waiting nor untreated referral is acceptable.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Antenatal Sim Cases",
        front: "The numbers that make pre-eclampsia severe?",
        back: "BP 160/110 or above — or 140/90 plus headache, visual disturbance or epigastric pain. Either way: MgSO4 per protocol and urgent referral.",
      },
      {
        topic: "Antenatal Sim Cases",
        front: "Verdict for Hb 6.4 g/dL with breathlessness at rest?",
        back: "Severe anaemia — arrange blood, refer urgently; oral iron alone is not a plan.",
      },
      {
        topic: "Antenatal Sim Cases",
        front: "Why is SP never malaria treatment?",
        back: "IPTp doses of SP prevent infection; confirmed malaria requires a full treatment course per national guideline.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
        note: "WHO ANC guidance — check for latest update.",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National malaria and anaemia management — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Antenatal and Labour Simulations",
    lessonTitle: "Sim Cases: Labour Emergencies",
    description:
      "The shoulders that will not come, and the cord that comes first — two emergencies that give you no time to think. Drill both until the moves are boring, because boring is what calm looks like.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the HELPERR sequence for shoulder dystocia.",
      "Explain the immediate response to cord prolapse at any dilatation.",
      "Apply loud calling, clock-watching and narration during labour drills.",
    ],
    tags: ["simulation", "emergency", "shoulder dystocia", "cord prolapse"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two labour emergencies give you almost no time to think: the shoulders that will not come, and the cord that comes before the baby. In each, the sequence must live in your hands before the day you need it — and simulation is where it moves in.\n\nDrill both until the moves feel boring, because boring is exactly what calm looks like under pressure.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Shoulder dystocia announces itself with the turtle-neck sign: the head is born, retracts against the perineum, and gentle traction brings nothing. That instant, call loudly for help and note the clock — head-to-body time is the number everyone will ask about. Then HELPERR, one manoeuvre at a time with narration: Help; evaluate for Episiotomy; hyperflex the Legs (McRoberts); suprapubic Pressure; Enter the vagina to rotate; Remove the posterior arm; Roll onto all fours if needed. Fundal pressure is contraindicated — it drives the shoulder harder against the bone.\n\nCord prolapse: the cord slips past the presenting part, usually just after the membranes rupture. The drill is Position, Push, Phone: knee-chest or steep head-down position to lift the presenting part off the cord; a gloved hand in the vagina elevating that presenting part until delivery; and the urgent phone call — at 5 cm, the destination is theatre for caesarean, transfer arranged while your hand stays in place. Never pull the cord, never replace it and wait, and never leave the woman alone.",
      },
      {
        type: "clinical_pearl",
        body: "In both drills your loudest intervention is your voice: call for help with the diagnosis named and your eye on the clock. The notes only need what you said out loud.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a simulation, membranes rupture at 5 cm and you see the cord at the vulva; the fetal heart drops to 80. The candidate shouts for help, shouts the time, and then pulls gently on the cord to deliver the baby vaginally. What went wrong, and what are the next three correct moves?\n\nAnswer: Pulling the cord risks tearing it and does not relieve the compression. The correct moves: knee-chest or head-down position immediately, a gloved hand elevating the presenting part off the cord, and the urgent call for caesarean — transfer with the hand in place and the woman positioned, telling the receiving team the diagnosis, the dilatation and the fetal heart.",
      },
      {
        type: "memory_trick",
        body: "HELPERR for the stuck shoulders — Help, Episiotomy, Legs, Pressure, Enter, Remove posterior arm, Roll. For the early cord, the three Ps: Position her, Push up the presenting part, Phone for the theatre.",
      },
      {
        type: "summary",
        body: "- Turtle-neck sign with failed gentle traction means shoulder dystocia: call for help, start the clock.\n- HELPERR, one manoeuvre at a time, narrated; fundal pressure is contraindicated.\n- Cord prolapse: Position (knee-chest or head-down), Push up the presenting part, Phone for caesarean.\n- At 5 cm, the destination is theatre — transfer with your hand elevating and the woman positioned.\n- Never pull the cord, never replace it and wait, never leave her alone.",
      },
    ],
    questions: [
      {
        topic: "Labour Emergency Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The head is born, retracts against the perineum, and gentle traction brings nothing. What is this, and what comes first?",
        options: [
          "Shoulder dystocia — call loudly for help and note the time",
          "Cord prolapse — put her in knee-chest position",
          "Normal second stage — wait for the next contraction",
          "Failure to progress — prepare referral in two hours",
        ],
        correctIndex: 0,
        explanation:
          "That is the turtle-neck sign of shoulder dystocia; the immediate response is a loud call for help with the clock noted, before starting the HELPERR sequence.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Labour Emergency Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which manoeuvre pair is usually tried first in the HELPERR sequence?",
        options: [
          "Symphysiotomy then fundal pressure",
          "Rolling to all fours first, then episiotomy",
          "Delivering the posterior arm first, then McRoberts",
          "McRoberts' hyperflexed legs with suprapubic pressure",
        ],
        correctIndex: 3,
        explanation:
          "McRoberts with suprapubic pressure is simple, fast and resolves most cases, so it comes early; posterior-arm delivery is more invasive and follows the simpler steps. Fundal pressure is contraindicated.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Labour Emergency Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 5 cm dilatation the membranes rupture and the cord prolapses. What is the correct management?",
        options: [
          "Replace the cord into the uterus and continue observations",
          "Encourage pushing to achieve vaginal birth quickly",
          "Repeat the vaginal examination hourly to monitor the cord",
          "Knee-chest position, elevate the presenting part, and urgent transfer for caesarean with the hand in place",
        ],
        correctIndex: 3,
        explanation:
          "The only lasting fix is delivery, and at 5 cm that means caesarean; positioning and elevation protect the cord on the way. Replacement, pushing and hourly observation all delay the fix.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Labour Emergency Sim",
        front: "What is the turtle-neck sign?",
        back: "The head delivers and then retracts against the perineum while gentle traction fails to bring the shoulders — the bedside sign of shoulder dystocia.",
      },
      {
        topic: "Labour Emergency Sim",
        front: "The first-line manoeuvre pair for shoulder dystocia?",
        back: "McRoberts' hyperflexed legs combined with suprapubic pressure — before any internal manoeuvre.",
      },
      {
        topic: "Labour Emergency Sim",
        front: "The three Ps of cord prolapse?",
        back: "Position (knee-chest or head-down), Push up the presenting part with a gloved hand, Phone for urgent caesarean — the hand stays until delivery.",
      },
    ],
    sources: [
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Green-top Guideline No. 42: Shoulder Dystocia",
        year: "2012",
        note: "Verify current edition on the RCOG website.",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Antenatal and Labour Simulations",
    lessonTitle: "Sim Cases: The Referral Decision",
    description:
      "In district midwifery, the most important instrument on the table is sometimes the telephone. Who to send, when, and what you say on the call decides more outcomes than any drug.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe when a referral becomes due and what must precede transport.",
      "Explain SBAR as the referral phone-call structure.",
      "Apply the stabilise-scribe-send rule and the three delays to referral sims.",
    ],
    tags: ["simulation", "referral", "handover", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In district midwifery, the most important instrument on the table is sometimes the telephone. The referral decision — who, when, and what you say — decides more outcomes than any single drug you will ever give. Simulation rehearses it because the real version arrives with a frightened mother, a driver asking whether we are going, and a clock already running.\n\nThe habit to build is one line: refer early, stabilise first, and make the call that prepares the receiving team.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A referral is due the moment you cannot safely manage the next deterioration — not after it. Before transport, three things. Stabilise what you can: airway protected, left lateral for eclampsia, MgSO4 or uterotonics already given, IV access for the bleeding woman. Scribe it all: drugs, doses, times, vitals and findings on a written note the woman travels with. Then send — with an escort, never alone, positioned for her problem. And before or during all three, the phone call in SBAR: Situation, one sentence of who she is and what is happening; Background, her history; Assessment, your findings and what you have done; Recommendation, what you are asking for — 'she needs a caesarean tonight.'\n\nThe three delays model explains why the call matters: the first delay is deciding to go, the second is reaching care, the third is receiving it once there. Your early decision attacks the first; your call-ahead and written note attack the third, because the receiving team prepares instead of starting from zero. Late referrals arrive as emergencies; early referrals arrive as problems with plans.",
      },
      {
        type: "clinical_pearl",
        body: "A referral is never a failure; a late referral is. When in doubt, make the call — the worst outcome of consulting early is being told to keep her, and you will survive that.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A referred woman arrives at the district hospital collapsed and bleeding, with no notes, no escort, and a tro-tro driver who cannot say what she received. The receiving midwife asks the class: which delays were missed, and what should the sending facility have done before she travelled?\n\nAnswer: The decision to refer came late (first delay), and the call-ahead with records was skipped (third delay). Before travel she should have been stabilised — uterotonics, IV fluids, monitoring — with a written note of drugs, doses and times, an escort briefed on the plan, and an SBAR call so the receiving team had blood and theatre waiting instead of triaging a mystery.",
      },
      {
        type: "memory_trick",
        body: "Before she travels: Stabilise, Scribe, Send. On the phone, SBAR — 'Say Before Ambulance Rushes' — situation, background, assessment, and what you are asking for.",
      },
      {
        type: "summary",
        body: "- Refer at the moment you cannot manage the next deterioration, not after it.\n- Before transport: stabilise, scribe the note with drugs, doses and times, send with an escort.\n- SBAR structures the call: Situation, Background, Assessment, Recommendation.\n- The call-ahead attacks the third delay — the receiving team prepares instead of restarting.\n- Never transfer an unstable woman unescorted, unpositioned and undocumented.",
      },
    ],
    questions: [
      {
        topic: "Referral Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What do the letters of SBAR stand for on a referral call?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Symptoms, Bloods, Allergies, Route",
          "Send, Bring, Attend, Return",
          "System, Balance, Action, Response",
        ],
        correctIndex: 0,
        explanation:
          "SBAR — Situation, Background, Assessment, Recommendation — is the standard handover structure; the last element forces you to state plainly what you are asking for.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Referral Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with severe pre-eclampsia must travel 40 minutes to the referral centre. What must happen before she leaves?",
        options: [
          "Nothing — transfer immediately and treat on arrival",
          "Oral antihypertensive only, with her husband driving her",
          "Wait for a convulsion to occur so the receiving team can see the diagnosis",
          "MgSO4 per protocol, positioning, IV access, written note and SBAR call, then escorted transfer",
        ],
        correctIndex: 3,
        explanation:
          "Stabilise before transport: the loading dose protects her en route, and the note plus call-ahead mean the receiving team acts instead of assessing from zero. Sending her untreated or unescorted invites disaster in the tro-tro.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Referral Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A referred woman reaches the hospital, but the receiving team was never called and has no notes, so her care restarts from zero. Which delay was worsened?",
        options: [
          "The first delay — deciding to go",
          "The second delay — reaching care",
          "The third delay — receiving care on arrival",
          "No delay — the system worked as designed",
        ],
        correctIndex: 2,
        explanation:
          "The third delay is what happens after arrival: without a call-ahead and records, the clock restarts at triage. The earlier delays concern the decision and the journey.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Referral Sim",
        front: "The three Rs before any referral transport?",
        back: "Stabilise what you can, Scribe the note (drugs, doses, times, vitals), Send with an escort — and call ahead in SBAR.",
      },
      {
        topic: "Referral Sim",
        front: "Name the three delays.",
        back: "Deciding to seek care, reaching the facility, and receiving care once there — your early call and written note attack the first and the third.",
      },
      {
        topic: "Referral Sim",
        front: "What does the R in SBAR demand of you?",
        back: "A Recommendation — state plainly what you are asking for: theatre, blood, a review tonight.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        note: "WHO PCPNC — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
      {
        organization: "Social Science & Medicine (journal)",
        title: "Too Far to Walk: Maternal Mortality in Context (Thaddeus and Maine)",
        year: "1994",
        note: "The original three-delays paper.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Postnatal and Newborn Simulations",
    lessonTitle: "Sim Cases: Postpartum Emergencies",
    description:
      "The baby is born, the room is warm — and the danger clock keeps running. PPH and sepsis, the two emergencies after birth, punish hesitation. Rehearse until the sequences run themselves.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the first-minute response to postpartum haemorrhage.",
      "Explain the recognition and first response of puerperal sepsis.",
      "Apply the rub-drug-bladder sequence and escalation ladder in drills.",
    ],
    tags: ["simulation", "pph", "sepsis", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby is born, the room is warm, and the danger clock keeps running. Postpartum haemorrhage and sepsis are the emergencies of the hours and days after birth — the first measured in minutes, the second in the courage to act before collapse. Both are drilled in simulation because both punish hesitation.\n\nRehearse the sequences until they run themselves; your thinking is needed for the parts that are not sequences.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The PPH drill: recognise it — 500 mL or more, or any bleeding with a rising pulse and falling blood pressure — then respond in order. Shout for help and note the time. Rub the fundus up into a contraction; your hand starts before the drug does. Give the uterotonic per protocol, empty the bladder with a catheter, and check the other Ts yourself: inspect the perineum and vagina for tears, examine the placenta for completeness. If bleeding continues: bimanual compression, IV fluids wide open, and escalation to theatre or transfer, while a colleague counts pads and charts vitals.\n\nThe sepsis drill turns on recognition: fever of 38°C or more, offensive lochia, a tender uterus, tachycardia — at any time from delivery to day 42. The response is antibiotics per protocol, IV fluids, and referral for any danger signs, with a respiratory rate of 24 or more the loudest single alarm. Prevention is already yours: clean delivery, clean cord care, hand hygiene — every wound you prevented yesterday is today's sepsis case avoided.",
      },
      {
        type: "clinical_pearl",
        body: "In PPH, the hands come before the drugs: a fundus being rubbed is a uterus contracting while you reach for the oxytocin. Seconds matter, and the rubbing hand loses none of them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after a vaginal birth, blood soaks a pad in five minutes and the fundus feels soft and boggy. The sim candidate calls for help, calls the time, and reaches for the suture kit to hunt for tears. What should the sequence actually be, and why does the order matter?\n\nAnswer: A soft fundus with heavy bleeding is atony — the commonest cause — so the first acts are rubbing the fundus, a uterotonic per protocol and emptying the bladder; tears are inspected once the uterus is contracting, because an atonic uterus keeps bleeding while you sew. Rub, drug, bladder, then look — with help and vitals running the whole time.",
      },
      {
        type: "memory_trick",
        body: "PPH's first line is a bus queue: RUB the uterus, DRUG it contracting, BLADDER empty — then look for tears and tissue. For sepsis, remember the smell: fever plus offensive lochia equals antibiotics, fluids and referral.",
      },
      {
        type: "summary",
        body: "- PPH: 500 mL or more, or bleeding with shock signs — shout, note the time, start.\n- First line: rub the fundus, uterotonic, catheterise — then inspect for trauma and retained tissue.\n- Escalation: bimanual compression, IV fluids, theatre or transfer, with pads and vitals counted.\n- Sepsis: fever, offensive lochia, tender uterus, tachycardia — from birth to day 42.\n- Sepsis response: antibiotics per protocol, fluids, referral; a respiratory rate of 24 or more is the alarm.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Emergency Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Heavy bleeding after birth with a soft, boggy fundus. What are the first two acts?",
        options: [
          "Rub the fundus up and give a uterotonic per protocol",
          "Begin suturing the perineum immediately",
          "Start IV fluids and wait for the uterus to firm on its own",
          "Perform bimanual compression as the first manoeuvre",
        ],
        correctIndex: 0,
        explanation:
          "A soft fundus with heavy bleeding is uterine atony, so massage and uterotonics come first. Tears are inspected once the uterus is contracting; bimanual compression is the escalation step, not the opener.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Postpartum Emergency Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Day 5 after birth: temperature 38.6°C, offensive lochia, tender uterus, pulse 112, respiratory rate 26. What is she, and what does she need?",
        options: [
          "Breast engorgement — she needs support and expression",
          "Malaria until proven otherwise — test only, treat nothing",
          "Normal puerperium — reassure and review at six weeks",
          "Puerperal sepsis — antibiotics per protocol, fluids, and referral",
        ],
        correctIndex: 3,
        explanation:
          "Fever with offensive lochia, a tender uterus and tachycardia within 42 days of birth is puerperal sepsis, and the fast respiratory rate is the alarm. Antibiotics, fluids and escalation — not reassurance.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Postpartum Emergency Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation is the loudest single alarm in a possibly septic postnatal woman?",
        options: [
          "Oral temperature of 37.2°C",
          "Respiratory rate of 26 breaths per minute",
          "Two loose stools since morning",
          "Mild ankle oedema in the evening",
        ],
        correctIndex: 1,
        explanation:
          "A respiratory rate of 24 or more signals systemic deterioration from sepsis before blood pressure falls; the other findings are common and non-specific.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Emergency Sim",
        front: "First three moves in atonic PPH?",
        back: "Rub the fundus up, give the uterotonic per protocol, catheterise the bladder — then inspect for tears and retained tissue.",
      },
      {
        topic: "Postpartum Emergency Sim",
        front: "Screening picture of puerperal sepsis?",
        back: "Fever 38°C or more with offensive lochia, tender uterus and tachycardia, from delivery to day 42 — an emergency needing antibiotics and referral.",
      },
      {
        topic: "Postpartum Emergency Sim",
        front: "Which vital is the earliest red flag in sepsis?",
        back: "Respiratory rate — 24 or more per minute precedes a falling blood pressure and demands escalation.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
        note: "Check for the latest update.",
      },
      {
        organization: "WHO",
        title: "WHO Statement on Maternal Sepsis",
        year: "2017",
        url: "https://www.who.int/publications/i/item/WHO-RHR-17.2",
        note: "Check for latest update.",
      },
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Postnatal and Newborn Simulations",
    lessonTitle: "Sim Cases: Newborn Resuscitation",
    description:
      "The flat baby drill — warmth, position and air within the Golden Minute. Most newborns need no drugs at all; they need effective ventilation, and a chest that rises proves it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the initial steps of newborn resuscitation and the Golden Minute.",
      "Explain when positive pressure ventilation begins and what makes it effective.",
      "Apply the air-first principle and heart-rate checks in team drills.",
    ],
    tags: ["simulation", "resuscitation", "newborn", "ventilation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most babies cry and pink up without your help. The small minority who do not are the reason every birth has a resuscitation corner and a team that has drilled this until it is boring. Newborn resuscitation is mostly warmth, position and air — plus the courage to start fast.\n\nThe drill is short, so every second in it is accounted for. Learn the sequence and the clock it runs on.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The Golden Minute: within 60 seconds of birth, every baby should be either breathing on its own or receiving help to breathe. The steps: dry the baby thoroughly on a warm surface, cover, position the head neutrally — the sniffing position — clear the airway only if it is visibly blocked, and stimulate by rubbing the back or soles. Then assess breathing, heart rate (count at the base of the cord or listen, counting 6 seconds and multiplying by 10) and tone. A baby who is apnoeic or gasping, or whose heart rate is under 100, gets positive pressure ventilation with a bag-mask — starting with air, because most newborns recover with air alone.\n\nEffective ventilation is the whole game: a proper mask seal, a neutral head, gentle squeezes at about 40 breaths per minute, and the chest visibly rising. The rising chest is your feedback — if it does not rise, reseal the mask, reposition the head and try again before reaching for anything else. Chest compressions are rare: only if the heart rate stays below 60 despite effective ventilation, at a ratio of three compressions to one breath. Teamwork runs the clock — one calls the times, one watches the chest, one records.",
      },
      {
        type: "clinical_pearl",
        body: "The fix for nearly every flat baby is the same thing: effective bag-mask ventilation with air, proven by a rising chest and a climbing heart rate. Drugs come almost never.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a team drill, a baby is born limp and not breathing. At 30 seconds the team is still stimulating; at 75 seconds one member starts bag-mask ventilation but the chest does not move, and oxygen is already being connected. Which two errors will the debrief name, and what does success actually look like?\n\nAnswer: First, ventilation should have started by 60 seconds — the Golden Minute — instead of extended stimulation. Second, with the chest not rising, the priority is correcting the mask seal and head position until it does, not adding oxygen. Success looks like the chest rising with each squeeze, and the heart rate climbing after it.",
      },
      {
        type: "memory_trick",
        body: "The Golden Minute in one line: dry and warm, position the airway, stimulate — and if not breathing by one minute, bag with air and watch the chest rise. Air first, chest rise always.",
      },
      {
        type: "summary",
        body: "- Dry, warm, neutral airway position, stimulate — all within the Golden Minute.\n- Ventilate any baby who is apnoeic, gasping, or has a heart rate below 100.\n- Start with air — most newborns do not need added oxygen.\n- The chest must rise with each squeeze; reseal and reposition until it does.\n- Compressions only for a heart rate below 60 despite effective ventilation, at 3:1.",
      },
    ],
    questions: [
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A term newborn is limp and apnoeic at 30 seconds despite drying and stimulation. What happens at 60 seconds if nothing changes?",
        options: [
          "Positive pressure ventilation with a bag-mask begins",
          "You continue stimulation for five more minutes",
          "You wait for the one-minute Apgar before acting",
          "You give intravenous adrenaline immediately",
        ],
        correctIndex: 0,
        explanation:
          "The Golden Minute rule: breathing or help to breathe within 60 seconds. Waiting for Apgar, prolonged stimulation or immediate drugs all delay the one intervention that works — effective ventilation.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During bag-mask ventilation, the chest is not moving with your squeezes. What is the correct response?",
        options: [
          "Squeeze harder and faster until the chest moves",
          "Connect oxygen while continuing to squeeze",
          "Move immediately to chest compressions",
          "Reposition the head and reseal the mask until the chest rises",
        ],
        correctIndex: 3,
        explanation:
          "No chest rise means no ventilation, and the fixes are mask seal and head position. Harder squeezing risks injury, and neither oxygen nor compressions help a baby receiving no air.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Newborn Resuscitation Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "With which oxygen concentration does newborn resuscitation normally start?",
        options: [
          "100 percent oxygen by mask",
          "Room air — 21 percent oxygen",
          "60 percent oxygen",
          "A carbon dioxide and oxygen mixture",
        ],
        correctIndex: 1,
        explanation:
          "Evidence supports starting with room air; most newborns recover with air alone, and higher oxygen is reserved for guided situations.",
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
        back: "The chest rises with each gentle squeeze and the heart rate climbs — reseal and reposition until it does.",
      },
      {
        topic: "Newborn Resuscitation Sim",
        front: "When do chest compressions start in newborn resuscitation?",
        back: "Only when the heart rate stays below 60 despite effective ventilation — compressions at 3:1, rare in practice.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Basic Newborn Resuscitation",
        year: "2012",
        url: "https://www.who.int/publications/i/item/9789241503693",
        note: "Check for latest update.",
      },
      {
        organization: "American Academy of Pediatrics",
        title: "Helping Babies Breathe (2nd edition)",
        year: "2017",
        note: "Neonatal resuscitation training programme — verify current materials.",
      },
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Postnatal and Newborn Simulations",
    lessonTitle: "Sim Cases: The Sick Newborn",
    description:
      "'The baby is not feeding well' is the sentence that starts more newborn emergencies than any monitor. Newborns hide illness — these drills train you to read the soft signals and act.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core newborn danger signs that demand urgent action.",
      "Explain why poor feeding and lethargy mean possible serious infection.",
      "Apply the assess-warm-refer sequence to sick newborn scenarios.",
    ],
    tags: ["simulation", "newborn", "danger signs", "infection"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'The baby is not feeding well' starts more newborn emergencies than any monitor reading. Newborns hide illness: instead of dramatic collapse, they go quiet, feed less, cool down, breathe faster. Your job is to read the soft signals before the loud ones arrive.\n\nThese simulations train exactly that reading — and the discipline to act on it within the same hour.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The danger signs — any one of them is an urgent problem: not feeding or feeding poorly; fast breathing, 60 per minute or more counted over a full minute; grunting or severe chest indrawing; fever of 38°C or more, or cold below 35.5°C; convulsions; lethargy or difficult waking; jaundice in the first 24 hours or on the palms and soles; and a red, swollen or pus-covered cord. Together they screen for possible serious bacterial infection, and the response is not 'watch and see' — it is the first antibiotic dose per national guideline plus urgent referral.\n\nIn the drill, work the sequence: take the temperature, count the respiratory rate for a whole minute, watch a feed, check the cord and skin, weigh the baby. A cold baby gets skin-to-skin warming immediately; a baby who has fed poorly for hours is at risk of low blood sugar, so offer the breast or expressed milk while preparing to refer. Then the referral — SBAR, note, escort — with the family told plainly which signs made this an emergency. Before any discharge, teaching these danger signs is half of your defence of that newborn.",
      },
      {
        type: "clinical_pearl",
        body: "A newborn who has stopped feeding is septic until proved otherwise. Do not spend the golden hours confirming that; spend them getting the first dose in and the referral moving.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother brings her four-day-old baby: 'He sleeps too much and has fed only twice since yesterday.' The baby's temperature is 35.2°C, respiratory rate 64, he wakes only with difficulty, and the skin is slightly yellow. Which findings are danger signs, and what are the next three actions?\n\nAnswer: Poor feeding, lethargy, hypothermia and fast breathing are all danger signs — possible serious bacterial infection with cold stress, and day-four jaundice needs assessment. Actions: warm him skin-to-skin at once, help him feed to protect his blood sugar, give the first antibiotic dose per national guideline, and refer urgently with SBAR — recounting the respiratory rate over a full minute on the way.",
      },
      {
        type: "memory_trick",
        body: "Four babies you must never send home: the baby who won't FEED, the baby who won't WAKE, the baby who breathes FAST, and the baby who runs COLD. Any one of them buys a referral.",
      },
      {
        type: "summary",
        body: "- Danger signs: poor feeding, RR 60 or more, grunting or severe indrawing, fever or cold, convulsions, lethargy.\n- Jaundice in the first 24 hours, or on palms and soles, is urgent jaundice.\n- A red or pus-covered cord is infection until excluded.\n- Respond with warming, feeding support, the first antibiotic dose per guideline, urgent referral.\n- Teach the danger signs before discharge — the family is your night cover.",
      },
    ],
    questions: [
      {
        topic: "Sick Newborn Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which respiratory rate, counted for a full minute in a calm newborn, is a danger sign?",
        options: [
          "58 breaths per minute",
          "60 breaths per minute or more",
          "40 breaths per minute",
          "30 breaths per minute",
        ],
        correctIndex: 1,
        explanation:
          "Sixty or more per minute, counted over a full minute, is fast breathing — a core newborn danger sign. The other values fall within the normal range.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Sick Newborn Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which jaundice pattern always demands urgent action rather than reassurance?",
        options: [
          "Mild yellow face on day 4 with good feeding",
          "Yellow palms and soles at any age, or jaundice in the first 24 hours",
          "Yellow eyes only, on day 5, baby feeding well",
          "Yellow tummy at day 5 in an alert, feeding baby",
        ],
        correctIndex: 1,
        explanation:
          "Jaundice within 24 hours of birth, or spreading to palms and soles, signals pathological jaundice with risk of brain injury — urgent referral. Day 4-5 yellowing of face or eyes in an alert, feeding baby fits the common physiological pattern, still assessed but not automatically an emergency.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Sick Newborn Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A five-day-old is brought in feeding poorly and waking only with difficulty. What is the correct disposition?",
        options: [
          "Advise more frequent feeds at home and review in 48 hours",
          "Observe in the waiting area for six hours before deciding",
          "Reassure the mother that newborns sleep heavily",
          "Treat as possible serious infection: first dose per guideline and urgent referral",
        ],
        correctIndex: 3,
        explanation:
          "Poor feeding with lethargy are danger signs in a newborn; the safe sequence is evaluation, the first antibiotic dose per national guideline and urgent referral. Home advice, waiting or reassurance forfeits the golden hours.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Sick Newborn Sim",
        front: "Four danger signs in a newborn that stop all plans?",
        back: "Won't feed, won't wake, breathes 60 or more per minute, or runs cold below 35.5°C — any one means urgent action.",
      },
      {
        topic: "Sick Newborn Sim",
        front: "Which jaundice patterns are emergencies?",
        back: "Visible in the first 24 hours of life, or yellow palms and soles — refer urgently.",
      },
      {
        topic: "Sick Newborn Sim",
        front: "Why is 'poor feeding' treated as infection?",
        back: "Newborns hide sepsis as quietness and feeding refusal; waiting for clearer signs often means waiting until the baby crashes.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        note: "Assessment of the sick young infant — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Recommendations on Managing Possible Serious Bacterial Infection in Young Infants",
        year: "2015",
        note: "Includes guidance where referral is not feasible — verify current edition.",
      },
      {
        organization: "Ghana Health Service / Ministry of Health",
        title: "National Newborn Health Strategy and Action Plan",
        year: "2014",
        note: "National strategy — verify current edition with GHS.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Complex and Multi-Patient Simulations",
    lessonTitle: "Sim Cases: Multiple Patients, One Midwife",
    description:
      "Two women labouring, one mother bleeding, one of you. The multi-patient simulation is the final-semester stress test: what you do first, and what you say while doing it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a rapid triage scan across several patients.",
      "Explain why calling for help early is the strongest single move.",
      "Apply named delegation and closed-loop communication in chaotic scenarios.",
    ],
    tags: ["simulation", "prioritization", "triage", "teamwork"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Night duty: two women labouring, one mother fresh from birth, a baby in the corner — and one of you. The multi-patient simulation is the final-semester stress test. It measures not just what you know but what you do first, and what you say while doing it.\n\nThe skill is triage plus voice: scan fast, call early, delegate by name, and keep notes short.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the scan — seconds at each bedside, in ABC order: who is bleeding, who is fitting, who is struggling to breathe, which baby is in trouble. Then act on the worst first: active bleeding outranks routine observations, and a distressed newborn outranks paperwork. The moment the scan shows more emergencies than hands, call for help — early, loud and named: 'Auntie, come now, Room 2 is bleeding — bring the oxytocin.' Waiting to be sure you are drowning before calling is the classic failure of these simulations.\n\nDelegate with names, tasks and a check-back — 'Kwabena, call the doctor about the baby in Room 4, and tell me what he says' — which is closed-loop communication: the task is confirmed and the reply returns. Meanwhile, scribe as you go: times, drugs, vitals, one line per event. Never leave a fitting or actively bleeding woman alone — position her, start the response, then move with your voice still working. When help arrives, hand over the rooms in the same ABC order you triaged them.",
      },
      {
        type: "clinical_pearl",
        body: "The earliest call for help is the most powerful intervention a lone midwife has. One midwife shouting at minute two has a team by minute ten; one still managing quietly at minute ten has a disaster by minute twenty.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m. you are alone with Woman A at 8 cm coping well, Woman B one hour postpartum now soaking pads, and Baby C crying in the bassinet, due for a feed. The ward assistant sleeps at the desk. What are your first three moves?\n\nAnswer: Wake the assistant by name and send her to call the doctor and bring the oxytocin; go straight to Woman B — call the time, rub the fundus, give the uterotonic, empty the bladder, with vitals running; between actions, glance at A and C — A keeps her intermittent auscultation as planned, and a crying newborn due a feed can safely wait minutes. Bleeding is the clock that kills, so it gets your first hands.",
      },
      {
        type: "memory_trick",
        body: "Scan, Shout, Sort, Scribe: scan all beds in ABC order, shout for help by name, sort onto the worst first, scribe one line as you go. And never leave the bleeder or the fitter alone.",
      },
      {
        type: "summary",
        body: "- Triage by scan in ABC order: bleeding, fitting, breathing — then routine needs.\n- Act on the worst first: active bleeding outranks observations and paperwork.\n- Call for help early, loudly and by name — the early call is the strongest move.\n- Closed-loop delegation: named task plus check-back, so the reply returns.\n- Scribe one line per event, and hand over rooms in the order you triaged them.",
      },
    ],
    questions: [
      {
        topic: "Multi-Patient Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are alone with three patients and one is actively bleeding. What comes first?",
        options: [
          "Call for help by name and begin care of the bleeding woman",
          "Complete observations on all three patients first",
          "Begin with the patient you assessed first on admission",
          "Wait to see whether the bleeding stops before deciding",
        ],
        correctIndex: 0,
        explanation:
          "Active bleeding is the immediate threat, and help is summoned while you act. Full observations, admission order and watchful waiting all surrender blood.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Multi-Patient Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which is an example of closed-loop communication during a multi-patient emergency?",
        options: [
          "'Somebody call the doctor, please.'",
          "'Call the doctor about the baby, and tell me what he says.'",
          "Writing 'doctor informed' in the notes after the event",
          "Announcing your plan to the whole ward at volume",
        ],
        correctIndex: 1,
        explanation:
          "A named task plus a required check-back closes the loop: the message is confirmed and the reply returns. Anonymous appeals may go unheard, and notes do not summon anyone.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Multi-Patient Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Rank these in the order a lone midwife should respond: woman at 8 cm coping, postpartum mother soaking pads, crying newborn due a feed.",
        options: [
          "Labouring woman, then newborn, then postpartum mother",
          "Newborn, then postpartum mother, then labouring woman",
          "Postpartum mother, then labouring woman, then newborn",
          "In whatever order the call bells rang",
        ],
        correctIndex: 2,
        explanation:
          "The bleeding mother is the life threat now; the coping labouring woman needs scheduled monitoring, not immediate action, and a crying newborn due a feed can safely wait minutes — while help is being called for the bleeder.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Multi-Patient Sim",
        front: "The four S's of the lone-midwife triage drill?",
        back: "Scan every bed in ABC order, Shout for help by name, Sort onto the worst first, Scribe one line per event.",
      },
      {
        topic: "Multi-Patient Sim",
        front: "What makes delegation 'closed-loop'?",
        back: "A named person, a specific task, and a check-back — 'tell me what he says' — so both the message and the reply return.",
      },
      {
        topic: "Multi-Patient Sim",
        front: "Whom do you never leave alone, even briefly?",
        back: "The fitting or actively bleeding woman — position her, start the response, then move with your voice still working.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
      {
        organization: "Agency for Healthcare Research and Quality (AHRQ)",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
        note: "Team communication framework — verify current version.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-case-simulation",
    moduleTitle: "Complex and Multi-Patient Simulations",
    lessonTitle: "Sim Cases: The Full Complex Case",
    description:
      "One woman, one journey — from admission to referral in a single unfolding scenario. Everything you have learned in four years, tested together, with one question: would she arrive alive?",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the patient journey through a full complex simulation, admission to handover.",
      "Explain how assessment, escalation and documentation link into safety.",
      "Apply the REACH sequence to an unfolding referral scenario.",
    ],
    tags: ["simulation", "complex", "integration", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The final simulation is one woman, one journey: she arrives walking and talking, and your decisions decide how she travels and who is waiting when she arrives. Nothing is tested in isolation — history, examination, escalation, medication, referral and records arrive together, exactly as real nights do.\n\nThis lesson walks the journey and gives you one sequence to carry through all of it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The case opens at admission: history — parity, previous births, danger factors such as a previous PPH or caesarean — targeted examination, and the first decision: is this birth safe here? As the scenario unfolds, recognition triggers escalation: the partograph crosses its action line, the BP climbs, the fetal heart drifts. Whatever the thread, the examiner is watching whether you notice, say it aloud, and act within the window. Acting means the protocol sequence — magnesium sulphate per protocol, the PPH ladder, urgent referral — with the clock called at each turn.\n\nThen the journey ends the way district emergencies end: referral. REACH carries it — Recognise what you are facing, Escalate early with a named call, Act per protocol before travel, Call ahead in SBAR, and Hand over notes with drugs, doses and times. What is graded across the whole case is not brilliance; it is sequence, communication and records — a woman who arrives alive, with a usable note, to a team already moving. The examiner's real question is a single sentence: would this patient reach the referral centre alive, and would anyone there know why?",
      },
      {
        type: "clinical_pearl",
        body: "In the full case, narrate every finding and every drug as you give it — the recording colleague, the assessor and the receiving team all live on your voice.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 38-year-old grand multipara at 39 weeks walks into your CHPS compound at 6 cm, with a history of severe PPH at her last birth and a BP today of 158/106 with 2+ protein and a headache. Two hours later the partograph crosses the action line. Take the case to its end: what must happen, in what order, and what travels with her?\n\nAnswer: She has severe pre-eclampsia meeting a high-risk labour in a grand multipara with a PPH history — magnesium sulphate per protocol and IV access now, with an SBAR call for urgent referral to comprehensive care, because this birth belongs where blood and theatre stand ready. She travels positioned, escorted, IV running, with a written note of findings, drugs, doses and times, and the receiving team called ahead and prepared. The note is her second midwife.",
      },
      {
        type: "memory_trick",
        body: "The journey is REACH: Recognise, Escalate early, Act per protocol, Call ahead, Hand over the note. A referral that skips a letter arrives as a mystery instead of a patient.",
      },
      {
        type: "summary",
        body: "- The full case tests the chain, not the links: admission, recognition, escalation, referral, handover.\n- Open with history, targeted examination and the question: is this birth safe here?\n- Recognition demands voice — say findings aloud and call the clock at every turn.\n- Act per protocol before travel; never send an unstable woman unescorted.\n- REACH the referral: Recognise, Escalate, Act, Call ahead, Hand over — drugs, doses, times.",
      },
    ],
    questions: [
      {
        topic: "Full Complex Case Sim",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the full complex simulation really testing?",
        options: [
          "Whether the chain — recognition, escalation, referral, handover — holds together safely",
          "Whether you can name the rarest diagnoses",
          "Speed of documentation after the emergency ends",
          "Your familiarity with the manikin's settings",
        ],
        correctIndex: 0,
        explanation:
          "Integration is the target: one patient, one journey, and evidence that each link — recognise, act, call, hand over — fires in sequence and in time.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Full Complex Case Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grand multipara with severe pre-eclampsia is labouring at 6 cm in a CHPS compound. What is the correct course?",
        options: [
          "Allow vaginal birth at the compound with oral antihypertensives only",
          "Give magnesium sulphate per protocol and arrange urgent referral to comprehensive care",
          "Wait for full dilatation and decide then",
          "Transfer immediately without any treatment",
        ],
        correctIndex: 1,
        explanation:
          "MgSO4 protects her en route and referral puts blood and theatre at her side — that birth belongs at referral level. Waiting or untreated transfer trades the safe window for risk.",
        courseSlug: "clinical-case-simulation",
      },
      {
        topic: "Full Complex Case Sim",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the receiving team most need from your handover so care continues without starting over?",
        options: [
          "Your personal impression of the family's cooperation",
          "Findings, drugs with doses and times, and the vitals trend — written and travelling with her",
          "A verbal summary given next week at the district meeting",
          "Only the diagnosis, written on her folder cover",
        ],
        correctIndex: 1,
        explanation:
          "Continuity lives in the written record that travels: what you found, what you gave and when, and what happened — with an SBAR call so the team reads it before she arrives.",
        courseSlug: "clinical-case-simulation",
      },
    ],
    flashcards: [
      {
        topic: "Full Complex Case Sim",
        front: "Spell the referral journey in REACH.",
        back: "Recognise, Escalate early, Act per protocol, Call ahead in SBAR, Hand over the written note.",
      },
      {
        topic: "Full Complex Case Sim",
        front: "What is the examiner's one real question in a full complex case?",
        back: "Would this woman and baby reach the referral centre alive — with a usable record and a team already moving?",
      },
      {
        topic: "Full Complex Case Sim",
        front: "What must a travelling referral note contain?",
        back: "Findings, vitals trend, and every drug with dose and time — enough for the receiving team to continue care without restarting.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing Complications in Pregnancy and Childbirth (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565219",
        note: "Check for latest update.",
      },
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        note: "Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Verify current edition.",
      },
    ],
  },
];
