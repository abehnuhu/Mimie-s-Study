// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 1, Semester 2 — Batch C
// 12 lessons anchored to prisma/seed-data/anchors/y1s2-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Microbes and Medicine",
    lessonTitle: "Outbreaks and How They're Stopped",
    description:
      "One case is a patient, three cases from one village is a signal. Learn how outbreaks are spotted, reported through Ghana's surveillance system, and stopped in their tracks.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Define an outbreak and recognise when scattered cases become a cluster worth reporting.",
      "Explain how a student on the ward uses the IDSR reporting chain to raise the alarm the same shift.",
      "Apply chain-of-infection thinking to choose control measures matched to the disease.",
    ],
    tags: ["outbreak", "surveillance", "idsr", "reporting", "public health"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One child with watery diarrhoea is a patient. Three children from the same village in two days is a signal. That shift from single cases to a cluster is where outbreaks begin — and noticing it early is often the work of the person closest to the ground: you.\n\nIn this lesson you will learn what an outbreak actually is, how Ghana's surveillance system expects you to report it, and the handful of actions that stop transmission — on a ward, in a CHPS compound, or across a whole community.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An **outbreak** simply means more cases of a disease than expected, in a particular place and time. Two or more similar cases linked by person, place or time — for example two mothers from one town with fever and rash — is already worth reporting, not waiting.\n\nIn Ghana, reporting runs on **IDSR**, the Integrated Disease Surveillance and Response framework. Every facility reports an agreed list of diseases, and the epidemic-prone ones — cholera, measles, bacterial meningitis, viral haemorrhagic fevers, neonatal tetanus, suspected polio — are reported immediately, the same shift, up the chain to the district disease control officer.\n\nControl means breaking the **chain of infection** at its weakest link: manage and isolate cases, trace and protect contacts, and fix the environment — safe water, sanitation, hand hygiene, disinfection, sometimes vaccination or vector control. Match the measure to the disease: cholera lives in water and hands, so clean water and rehydration lead; measles needs a vaccination campaign; neonatal tetanus is stopped by teaching clean, dry cord care.",
      },
      {
        type: "clinical_pearl",
        body: "Outbreaks grow quietly and are stopped loudly. When you spot a cluster, report it before your shift ends — never wait for it to feel 'official' in your own mind first. Your carefully written names, villages and onset dates are the raw material of the whole investigation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Monday morning at a rural CHPS compound. Since Saturday, three women from the same farming village have arrived at the antenatal clinic with watery diarrhoea and vomiting. A fourth has sent word that two of her neighbours are also unwell. There is one midwife, no doctor, and the rain has slowed the road to the district capital. The midwife is with a woman in labour.\n\nWhat is your most important contribution right now — and what must you not do?\n\nAnswer: Your job is to report the cluster clearly and fast: tell the midwife immediately, write down each woman's name, village, date of onset and symptoms, and support an immediate call to the district disease control officer under IDSR while starting oral rehydration and strict hand hygiene for those affected. What you must not do is wait a week to 'see if more come', investigate the village yourself, or treat anyone unsupervised. Reporting is the treatment the whole community needs.",
      },
      {
        type: "memory_trick",
        body: "Outbreak work in three words: SPOT it, REPORT it the same day, BREAK the chain. And when hunting the weak link, follow the water, the hands and the waste — that is how cholera and most ward outbreaks travel.",
      },
      {
        type: "summary",
        body: "- An outbreak is more cases than expected in one place and time; two linked cases of an epidemic-prone disease is already a signal.\n- Ghana reports through IDSR — epidemic-prone diseases go up the chain immediately, the same shift.\n- Control breaks the chain of infection: manage cases, protect contacts, fix the environment, educate the community.\n- Match controls to the disease: cholera to water and hands, measles to vaccine, neonatal tetanus to clean cord care.\n- Your student role: notice, document carefully, report — never investigate or treat alone.",
      },
    ],
    questions: [
      {
        topic: "Outbreak Response",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best defines an outbreak?",
        options: [
          "More cases of a disease than expected, in a given place and time",
          "Any single confirmed case of cholera anywhere in the country",
          "Any fever occurring among patients on one ward",
          "Three different diseases appearing on the same day",
        ],
        correctIndex: 0,
        explanation:
          "An outbreak is an increase above what is expected for that disease in that place and time. A single case may matter for reporting, but the defining feature is unexpected numbers — and clusters linked by person, place or time are the earliest signal.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Outbreak Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are a student when three women from one village arrive with watery diarrhoea in two days. What is your best first action?",
        options: [
          "Wait for a fifth case so the cluster is beyond doubt before mentioning it",
          "Tell the senior midwife the same shift and document names, village, onset dates and symptoms",
          "Travel to the village yourself to find more cases and take samples",
          "Give each woman antibiotics from the store to treat them while the midwife is busy",
        ],
        correctIndex: 1,
        explanation:
          "Recognising, documenting and reporting the cluster the same shift lets the surveillance system move while the outbreak is still small. Investigating or treating alone is outside a student's role, and waiting for more cases is how outbreaks grow.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Outbreak Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A cholera outbreak is confirmed in a district. Which set of control measures is most central to stopping it?",
        options: [
          "Spraying insecticide across the affected communities",
          "Locking down every affected household in the district hospital",
          "Safe water, sanitation, hand hygiene and prompt rehydration of cases",
          "Mass vaccination of the entire district population only",
        ],
        correctIndex: 2,
        explanation:
          "Cholera travels through contaminated water and poor sanitation, so safe water, hygiene and rapid rehydration are the backbone of control. Oral cholera vaccines exist as an added tool, but spraying targets insects, and mass detention is neither possible nor effective.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Outbreak Recognition",
        front: "What counts as an outbreak?",
        back: "More cases than expected for that disease in that place and time — including two or more cases linked by person, place or time.",
      },
      {
        topic: "Surveillance",
        front: "What is IDSR, and what does it demand for epidemic-prone diseases?",
        back: "Integrated Disease Surveillance and Response — the reporting framework used across Ghana. Epidemic-prone diseases (cholera, measles, meningitis, VHFs, neonatal tetanus, suspected polio) are reported immediately, the same shift.",
      },
      {
        topic: "Outbreak Control",
        front: "Name one control measure matched to each of: cholera, measles, neonatal tetanus.",
        back: "Cholera — safe water, hand hygiene and rehydration. Measles — vaccination campaign. Neonatal tetanus — clean, dry cord care education.",
      },
    ],
    sources: [
      {
        organization: "WHO Regional Office for Africa",
        title: "Technical Guidelines for Integrated Disease Surveillance and Response in the African Region (3rd edition)",
        year: "2019",
        note: "The IDSR framework Ghanaian facilities report through; verify current national adaptations with your district.",
      },
      {
        organization: "World Health Organization",
        title: "Cholera (fact sheet)",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/cholera",
      },
      {
        organization: "World Health Organization",
        title: "Infection prevention and control during health care when an outbreak is suspected",
        year: "2007",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Finding Your Feet",
    lessonTitle: "Your First Days in the Clinical Area",
    description:
      "Nerves, names and new routines — a practical map for surviving and thriving in the first week of placement.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Locate the essential areas and equipment of a new clinical area within the first day.",
      "Introduce yourself correctly to staff and patients and ask permission before observing care.",
      "Apply confidentiality and professionalism rules from the very first shift.",
    ],
    tags: ["placement", "orientation", "professionalism", "confidentiality"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The night before your first placement you will hardly sleep. You will worry about your uniform, your greeting, whether anyone will explain anything at all. Every midwife you admire once stood at that same gate, heart pounding — and most of them were rescued by the simple habits of arriving early, mapping the place and asking good questions.\n\nThis lesson is your practical map for the first week: who to introduce yourself to, where to walk, what must stay private, and how to be genuinely useful before you know very much.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with **geography**. Walk the ward once with a notebook and find the emergency trolley, oxygen and suction, the delivery room, the sharps bins, and every handwashing point between them. Learn the names and roles of the team — the ward in-charge, your preceptor, the theatre staff, the cleaners — because everybody matters and everybody can teach you something.\n\nThen practise **introduction**. To staff: your full name and 'student midwife'. To patients: your name, your role, and what you would like to do — 'May I sit in while the midwife examines you?' Permission is not politeness; it is the rule. Wear your ID badge, arrive before handover, and keep a small notebook for the day's new words, reviewed each evening.\n\nFinally, **confidentiality starts on day one**. No patient names or stories outside the ward, nothing on social media ever — not even 'anonymised' stories. Nobody expects skill from you in week one; they expect punctuality, honesty and kindness.",
      },
      {
        type: "clinical_pearl",
        body: "In your first week, being reliably early beats being occasionally brilliant. Trust is built in small things — a made bed, a thank-you, a tidy notebook — long before you ever touch a patient.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are two days into placement on a busy labour ward. A woman in early labour has just been admitted, and your preceptor asks you to observe the admission assessment. You introduce yourself and explain that you are a student. The woman looks away and says she does not want a student present — she prefers only the midwife. The room is crowded and the midwife is already pulling on gloves.\n\nWhat should you do next, and how should you feel about it?\n\nAnswer: Step back graciously, thank her for her honesty, and inform your preceptor straight away. Her consent governs who attends her care, and refusing a student is her right, not an insult. Telling your preceptor also matters practically, since observing admissions will need to be arranged another day — but the decision itself is hers, and honouring it calmly is part of the professionalism you are here to learn.",
      },
      {
        type: "memory_trick",
        body: "MAP your first week: Map the ward (emergency trolley, oxygen, sinks, sharps bins), Arrive before handover, Present yourself by name and role. Do those three things daily and everything else grows around them.",
      },
      {
        type: "summary",
        body: "- Learn the geography first: emergency trolley, oxygen, suction, sharps bins, handwashing points, delivery room.\n- Introduce yourself by name and role to staff and patients, and ask permission before observing any care.\n- Confidentiality begins on day one: no patient details outside the ward, nothing on social media.\n- Reliability and punctuality build trust faster than cleverness; 'I don't know, I'll find out' is professional language.\n- Keep a small notebook of names, routines and new words — and read it each evening.",
      },
    ],
    questions: [
      {
        topic: "Placement Professionalism",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient declines your presence as a student during her examination. What is the correct response?",
        options: [
          "Insist gently that observation is required for your training",
          "Accept her decision graciously and inform your preceptor",
          "Stay quietly in the corner so you do not disturb anyone",
          "Chart that the patient is uncooperative with students",
        ],
        correctIndex: 1,
        explanation:
          "A patient's consent governs who attends her care, and refusing a student is her right. Accepting it without argument, and informing your preceptor so alternative learning is arranged, is both respectful and professional.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Confidentiality",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "With whom may you properly discuss a patient's clinical details from your placement?",
        options: [
          "Your classmates at the hostel, as long as you use her first name only",
          "A relative of the patient who is herself a nurse and asks how she is doing",
          "Only the staff directly involved in her care, for clinical purposes",
          "A WhatsApp study group, provided you change the names",
        ],
        correctIndex: 2,
        explanation:
          "Patient information is shared on a need-to-know basis with those involved in care. First names alone, family relationships and 'changed names' on social media all still breach confidentiality.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Placement Professionalism",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which habit will most quickly earn your preceptor's trust in your first week?",
        options: [
          "Quoting textbook chapters during ward rounds",
          "Comparing your progress with other students on the ward",
          "Hiding your uncertainties so you appear confident",
          "Arriving before handover, ready, with your notebook",
        ],
        correctIndex: 3,
        explanation:
          "Supervisors trust reliability before brilliance. Arriving early, being prepared and being honest about what you do not know marks you as safe to teach and safe with patients.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Introductions",
        front: "How do you introduce yourself to a patient on placement?",
        back: "Your name, your role ('student midwife'), what you would like to do — then ask permission and respect the answer, whatever it is.",
      },
      {
        topic: "Confidentiality",
        front: "What must never appear on your social media?",
        back: "Anything about patients or the ward — no names, no photos, no 'anonymised' stories. Confidentiality is absolute, even after the shift ends.",
      },
      {
        topic: "Ward Geography",
        front: "What must you locate on your first day in any clinical area?",
        back: "The emergency trolley, oxygen and suction, the sharps bins, and every handwashing point — plus the delivery room and theatre entrance where they exist.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Governs dress, identification, confidentiality and student conduct; consult the current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Finding Your Feet",
    lessonTitle: "Working with Preceptors and Mentors",
    description:
      "Making the most of supervision — asking questions well, receiving feedback without wilting, and becoming the student supervisors enjoy teaching.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Distinguish the role of a preceptor from that of a mentor.",
      "Ask specific clinical questions at appropriate moments during a shift.",
      "Receive and act on corrective feedback in a way that builds trust.",
    ],
    tags: ["mentorship", "supervision", "feedback", "learning", "logbook"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your preceptor is the midwife assigned to teach and supervise you — she signs off your competencies and she remembers exactly how you behaved on day one. A mentor is something different: a longer-term guide you and she choose for each other, and the relationship can outlive any single placement.\n\nMaking the most of supervision is a skill, not luck. This lesson is about asking questions well, receiving correction without wilting, and becoming the student supervisors genuinely enjoy teaching.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Both relationships grow on the same soil: **trust**. Trust grows from punctuality, honest limits and visible effort. Come prepared — the evening before, read up on the conditions you expect to meet. Offer your hands for basic tasks, and keep your logbook current, because it is the evidence trail of your growing competence.\n\n**Ask well.** Batch your small questions for calm moments — at the nurses' station after an emergency, never during one. Frame questions from what you observed: 'I noticed you palpated twice — what were you comparing?' beats 'how does labour work?' every time. After watching a skill, ask to be talked through it the next time.\n\n**Feedback** is the currency of placement. Ask for it directly — 'what one thing should I fix tomorrow?' — listen without defending yourself, and let the change be visible the next day. And when you make a mistake, report it immediately: preceptors forgive errors that are reported, never errors that are hidden.",
      },
      {
        type: "clinical_pearl",
        body: "Supervisors do not expect perfection; they expect honesty. A student who says 'I haven't been signed off for that — please watch me' is trusted more, not less. The sentence feels small and it shapes your whole career.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You have observed catheterisation twice, and this morning your preceptor asks you to perform it on a post-operative patient while she watches. Halfway through, your hands tremble and you cannot remember which hand is allowed to touch the sterile field. The patient is awake and listening, and the preceptor is waiting silently.\n\nWhat is the safest thing to say and do?\n\nAnswer: Stop, and say clearly that you need to be talked through the next steps. Let your preceptor guide you or take over — the sterile field and the patient's safety outrank your pride, and pausing is not failure. Afterwards, ask to rehearse the sequence until it is smooth, because supervised practice with honest pauses is exactly what placement exists for. The student who hides uncertainty in this moment risks the patient; the one who speaks up gets signed off sooner.",
      },
      {
        type: "memory_trick",
        body: "The good-question recipe: OBSERVE, WAIT, ASK. Observe what the senior did, wait for the calm moment, then ask one specific question about it — 'why twice?' beats 'how does it all work?'",
      },
      {
        type: "summary",
        body: "- A preceptor is assigned to supervise and sign off your competencies; a mentor is a longer-term guide you grow with.\n- Prepare before shifts, and offer yourself for basic tasks — visible effort buys teaching time.\n- Batch specific questions for calm moments; frame them from what you actually observed.\n- Ask for feedback directly, receive it without defending yourself, and show the change next day.\n- Report mistakes immediately — hidden errors end relationships and can end careers.",
      },
    ],
    questions: [
      {
        topic: "Preceptorship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement correctly describes a preceptor?",
        options: [
          "A senior midwife assigned to supervise you and sign off clinical competencies during placement",
          "A fellow student paired with you for peer revision before exams",
          "A lecturer who only meets you at the college for tutorials",
          "Any staff member who happens to be friendly to you on the ward",
        ],
        correctIndex: 0,
        explanation:
          "A preceptor is the assigned clinical teacher who supervises your practice and signs off competencies — a formal, placement-based role, unlike a mentor, who is a longer-term guide you choose together.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Asking Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You have collected several non-urgent questions during a busy morning on the labour ward. When is the best time to ask them?",
        options: [
          "Immediately, at the bedside, so the details are fresh",
          "Whenever the preceptor walks past, however brief the moment",
          "At a calm moment afterwards, such as at the station, asked together as a batch",
          "Save them all for the end-of-semester review with your lecturer",
        ],
        correctIndex: 2,
        explanation:
          "Non-urgent questions belong to calm moments, batched together — interrupting care or waiting months both cost you learning. Urgent safety questions, of course, are asked the instant they arise.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Feedback",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your preceptor tells you your perineal cleaning before catheterisation was disorganised and contaminated. What is the best response?",
        options: [
          "Explain that the ward was noisy and you were rushed",
          "Nod quietly, feel bad, and avoid that preceptor for a week",
          "Listen fully, ask one clarifying question, and demonstrate the corrected sequence next time",
          "Ask a classmate whether the feedback seemed fair",
        ],
        correctIndex: 2,
        explanation:
          "Corrective feedback is information about the work, not a verdict on you. Listening fully, clarifying, and visibly correcting the skill is what turns feedback into competence — excuses and avoidance leave the error intact.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Preceptorship",
        front: "Preceptor versus mentor — what is the difference?",
        back: "Preceptor: assigned by the programme, short-term, supervises your practice and signs off competencies. Mentor: chosen together, long-term, guides your growth beyond any one placement.",
      },
      {
        topic: "Asking Questions",
        front: "When and how should you ask your non-urgent clinical questions?",
        back: "At calm moments, batched together, and specific — 'I noticed you palpated twice; what were you comparing?' Never mid-emergency.",
      },
      {
        topic: "Feedback",
        front: "What do you do with corrective feedback from a supervisor?",
        back: "Listen fully, thank them, ask one clarifying question if needed, then change the behaviour and let them see you changed.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        note: "Includes guidance on supervision, speaking up and learning from error.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Finding Your Feet",
    lessonTitle: "The Rhythm of a Working Day",
    description:
      "Handover, rounds, observations, notes — how a shift flows, where the dangerous moments hide, and where a student fits into it all.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the structure of a standard shift from handover to handover.",
      "Use SBAR to give and receive patient information.",
      "Prioritise patients and report abnormal observations without delay.",
    ],
    tags: ["shift work", "routines", "handover", "sbar", "documentation", "prioritisation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At first, a ward day looks like beautiful chaos: phones, linen, relatives, crying babies, someone shouting for the BP machine. It is not chaos — it is a rhythm. Once you can hear it, you can move with it instead of being trampled by it.\n\nThis lesson walks you through a standard shift from handover to handover, so you know what is coming, where the dangerous moments hide, and exactly where a student fits.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A shift has a skeleton: **handover** at the start — bed by bed, each patient summarised as who she is, why she came, her current problem and the plan. Then the morning round and first observations, then the day's treatments, feeds and documentation, and finally handover to the next shift. Arrive before the first handover; it is where the whole day is explained.\n\nListen at handover for who is **unstable** — those patients are seen first and checked most often, and the routine work flows around them. When something acute interrupts you, note where you stopped so nothing is lost.\n\n**Documentation** is the shift's spine: chart as you go, because 'not charted is not done'. Your notes are the next shift's eyes. If you learn something new about a patient mid-shift — a new pain, a bleed, a worry — make sure it travels to the next shift even if you must say it twice.",
      },
      {
        type: "clinical_pearl",
        body: "Handover is the most dangerous minute of the day: patients can fall through the gap between shifts. Information you discovered during your shift must survive to the next one — an observation that is not handed over was never really made.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are asked to do the 8 am observations on six postnatal women. Your second patient, day one after a difficult delivery, has a blood pressure of 152/96 — and when you ask how she feels, she says her head is 'paining' her badly. Four more beds are waiting on your list, and the ward is loud.\n\nShould you finish the other four patients first, or act now?\n\nAnswer: Act now. A postnatal woman with a raised blood pressure and a severe headache is possible pre-eclampsia — this is report-immediately territory, not finish-the-round territory. Call the midwife in charge at once, recheck the pressure with her, and stay with the patient. The routine observations for the other mothers will wait a few minutes; a developing emergency never will.",
      },
      {
        type: "memory_trick",
        body: "SBAR hands over any patient in four sentences: Situation — who she is and what is happening now; Background — why she came; Assessment — what you found; Recommendation — what you think should happen next.",
      },
      {
        type: "summary",
        body: "- A shift runs handover → round and observations → treatments and documentation → handover; arrive before the first one.\n- Listen for unstable patients at handover — they are seen first, routine work flows around them.\n- SBAR keeps handover brief and complete: Situation, Background, Assessment, Recommendation.\n- Chart as you go — if it is not charted, it is not done.\n- Report abnormal observations the moment you find them; the rest of the round can wait.",
      },
    ],
    questions: [
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR, what does the 'R' stand for, and what does it mean?",
        options: [
          "Record — write the note before speaking to anyone",
          "Recommendation — what you think should happen next for the patient",
          "Responsibility — whose fault the current problem is",
          "Recovery — the patient's expected discharge date",
        ],
        correctIndex: 1,
        explanation:
          "SBAR ends with your Recommendation — the action you are suggesting, such as review by the senior midwife or urgent recheck of the blood pressure. It is the sentence that turns information into action.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "While doing routine 8 am observations, your second patient has a BP of 152/96 with a severe headache, day one postnatal. What is the correct action?",
        options: [
          "Chart the reading and continue with the remaining four patients first",
          "Recheck her pressure at the next routine round in four hours",
          "Report to the midwife in charge immediately and stay with the patient",
          "Give her paracetamol from the drug trolley for the headache",
        ],
        correctIndex: 2,
        explanation:
          "Raised blood pressure with severe headache in a postnatal woman signals possible pre-eclampsia — an emergency pathway that begins with immediate reporting. Continuing the round, delaying the recheck, or giving medication yourself all postpone care she needs now.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the ward saying 'not charted is not done' actually mean?",
        options: [
          "You may chart care at the end of the week if you remember it",
          "Care that is not documented cannot be known, continued or defended — for the patient, the next shift and the record",
          "Only senior midwives are allowed to chart observations",
          "Verbal reports to the next shift are a full replacement for notes",
        ],
        correctIndex: 1,
        explanation:
          "The record is how care survives the shift: the next team continues from it, and the patient's story is preserved. Verbal handover complements notes but never replaces them.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Handover",
        front: "What do the letters of SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — who she is and what is happening, why she came, what you found, and what should happen next.",
      },
      {
        topic: "Prioritisation",
        front: "Which patients are seen first after handover?",
        back: "The unstable ones. Routine work flows around them — the moment you hear 'watch bed 4', bed 4 becomes your first stop.",
      },
      {
        topic: "Documentation",
        front: "Why must abnormal observations be reported the moment you find them?",
        back: "Early warning only works in real time — a rising BP or a soft fundus is a developing emergency, and the delay between finding and reporting is where patients deteriorate quietly.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Solutions: Communication During Patient Hand-Overs (Solution 3)",
        year: "2007",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Practising the Basics",
    lessonTitle: "Vital Signs: Practice Until Confident",
    description:
      "Hundreds of repetitions turn observations into a skill you can trust — building speed without ever losing accuracy.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "State normal adult vital sign ranges and the pregnancy-related shifts that matter.",
      "Apply technique rules — respiratory counting, cuff size, equipment hygiene — on real patients.",
      "Interpret single readings as snapshots, recheck the unexpected, and escalate abnormalities immediately.",
    ],
    tags: ["vital signs", "practice", "observations", "respiratory rate", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Vital signs are the body's headline news, and taking them is the skill you will perform more than any other — hundreds of times before you qualify. On a busy ward, speed matters. But speed is only safe when accuracy rides along with it.\n\nThis lesson is about deliberate practice: how to repeat the basics until your hands are quick and your numbers can be trusted by the next person who reads them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know your baselines cold: temperature about **36.1 to 37.2 °C**, pulse **60 to 100** beats per minute, respirations **12 to 20** per minute, and blood pressure below **120/80** in non-pregnant adults. Pregnancy shifts the goalposts: the pulse may run 10 to 15 beats faster, and 140/90 or above is the hypertension threshold that triggers the pre-eclampsia pathway.\n\nTechnique discipline is what separates a trustworthy reading from decoration. Count respirations for a full minute **without announcing it** — keep your fingers on her wrist after the pulse count so she breathes naturally. Choose the right cuff (a small cuff over-reads), feel the pulse with your own fingers before trusting the machine, and wipe your stethoscope and thermometer between patients.\n\nInterpretation: one reading is a snapshot; the trend is the story. Recheck anything unexpected — correct technique, rested patient — and if it is still abnormal, report it then, not at the end of the round.",
      },
      {
        type: "clinical_pearl",
        body: "Count respirations while your fingers are still on her wrist from the pulse count — she will think you are still counting her heart and breathe naturally, which is exactly what you need to see. A patient who knows you are counting will breathe like an exam is in progress.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Morning observations, day one after a caesarean section. The machine reads 85/50, and when you glance up the patient is pale and says the room is 'turning'. Your fingers find a pulse of 118, thin and fast. Five more beds are still on your list, and the ward round is due to start.\n\nWhat do you do with these numbers?\n\nAnswer: You do not simply chart them and move on. A falling blood pressure with a racing, thready pulse in a post-operative woman means bleeding or serious fluid loss until proven otherwise — call the midwife in charge immediately, stay with the patient, and describe exactly what you found and when. Numbers like these are not observations; they are an alarm. Finishing the round first would give a quiet abdomen time to hide a very loud problem.",
      },
      {
        type: "memory_trick",
        body: "WATCH: Weigh the trend (one reading is a snapshot), Abnormal? — recheck calmly, Tell someone straight away, Chart honestly what you found, Hand over the story, not just the numbers.",
      },
      {
        type: "summary",
        body: "- Adult baselines: temp 36.1–37.2 °C, pulse 60–100, respirations 12–20, BP below 120/80.\n- In pregnancy the pulse runs faster, and 140/90 is the hypertension threshold that escalates.\n- Count respirations for a full minute without announcing it — the wrist trick keeps her breathing natural.\n- Right cuff size, your own fingers before the machine, clean equipment between patients.\n- Recheck the unexpected, then report — a snapshot becomes a story only when you watch it.",
      },
    ],
    questions: [
      {
        topic: "Vital Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal resting respiratory rate range for a healthy adult?",
        options: [
          "6 to 10 breaths per minute",
          "12 to 20 breaths per minute",
          "30 to 40 breaths per minute",
          "40 to 60 breaths per minute",
        ],
        correctIndex: 1,
        explanation:
          "Adults normally breathe 12 to 20 times per minute at rest. Rates of 40–60 belong to newborns, and a persisting rate outside 12–20 in an adult is a finding to recheck and report.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Vital Signs Technique",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do experienced nurses keep their fingers on the patient's wrist while counting respirations?",
        options: [
          "It is more comfortable for the patient during a long count",
          "So the patient does not realise respirations are being counted and consciously change the pattern",
          "Because pulse and respiration must always be measured at the same time",
          "To feel chest movements with the fingertips more accurately",
        ],
        correctIndex: 1,
        explanation:
          "The moment patients know their breathing is being counted, they alter it — usually slowing and deepening it. The wrist trick lets you count a full minute of natural breathing, which is the only honest sample.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Vital Signs Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Day one after a caesarean, a patient's machine reading is 85/50 with a manually confirmed pulse of 118; she is pale and dizzy. What should you do?",
        options: [
          "Chart the values and continue the observation round on the other beds",
          "Repeat the readings in four hours at the next scheduled round",
          "Encourage her to drink more water and reassess after breakfast",
          "Report immediately to the midwife in charge and stay with the patient",
        ],
        correctIndex: 3,
        explanation:
          "Hypotension with tachycardia after surgery means bleeding or major fluid loss until proven otherwise. Delaying the report — whether by finishing the round, waiting hours, or settling for fluids — is how post-operative deterioration hides.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Vital Signs",
        front: "Normal adult baseline ranges for temperature, pulse and respirations?",
        back: "Temperature 36.1–37.2 °C, pulse 60–100 beats/min, respirations 12–20 breaths/min; blood pressure below 120/80 in non-pregnant adults.",
      },
      {
        topic: "Vital Signs",
        front: "What blood pressure marks hypertension in pregnancy, and what must you do when you meet it?",
        back: "140/90 or above. Report it — and with headache, visual symptoms or swelling, treat it as a pre-eclampsia pathway needing same-visit escalation.",
      },
      {
        topic: "Vital Signs",
        front: "What does a low BP with a fast, thready pulse suggest after surgery?",
        back: "Bleeding or serious fluid loss until proven otherwise — report immediately and stay with the patient. Never just chart it and walk on.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Practising the Basics",
    lessonTitle: "Assisting with Hygiene and Feeding",
    description:
      "Real patients, real pace — supporting washing and feeding while protecting dignity, independence and the airway.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Perform a bed bath that protects dignity and doubles as a skin assessment.",
      "Feed dependent patients safely — upright, alert, watching every swallow.",
      "Recognise and respond to aspiration risk before it becomes pneumonia.",
    ],
    tags: ["hygiene", "feeding", "dignity", "aspiration", "bed bath", "skin assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Bed baths and meal trays are where dignity is either protected or quietly lost. The tasks look simple — water, soap, spoon — but they carry everything: privacy, culture, safety, and some of the sharpest clinical observation you will ever do.\n\nThis lesson covers how to wash and feed patients who cannot manage alone, at their pace, without stealing the independence they still have.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **bed bath** begins with explanation and the offer of a bedpan or urinal. Screen the bed. Warm the water and test it on your inner wrist. Uncover only the part you are washing and cover it again — face, chest, arms, working top to toe, changing the water when it goes cold or soapy. While you wash, your eyes work: check the pressure areas (heels, sacrum, hips), skin folds, wound dressings and — in maternity — the perineum and the pad. Dry thoroughly, finish with oral care, and leave her comfortable with the call bell in reach.\n\n**Feeding** has one unbreakable rule: only feed an alert patient. Sit her as upright as she can manage, offer small amounts, and watch each swallow before the next. A drowsy patient, a slow swallow or a wet, gurgling voice are aspiration warnings — food entering the lungs instead of the stomach. Encourage her to feed herself whatever she can manage: a steady hand on a cup is independence worth protecting. End with oral care, and stay through the meal; mealtimes are also assessments.\n\nInvolve her in the choices — water temperature, order, who helps. Ask how she prefers things; dignity lives in the details.",
      },
      {
        type: "clinical_pearl",
        body: "The bath basin doubles as your examination trolley — the best skin and pressure-area check of the day happens mid-lather. And the spoon is an assessment tool: it tests swallow, mood and grip all at once.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are helping a granddaughter feed an elderly woman on her second day after hip surgery. The woman manages half her porridge, then her eyes begin to drift; her next swallow seems slow, and there is a faint wet sound in her voice. The granddaughter urges you to continue — 'she needs the strength to heal'.\n\nWhat do you do, and why?\n\nAnswer: Stop feeding and sit her fully upright. A drowsy patient with a slow or wet-sounding swallow is at high risk of aspiration — food entering the lungs — which can cause choking or pneumonia. Feeding only continues when she is fully alert and swallowing safely. Tell your preceptor what you noticed, offer mouth care to keep her comfortable, and reassure the family that food will resume when she is ready. Keeping her airway safe today matters more than finishing the bowl.",
      },
      {
        type: "memory_trick",
        body: "BATHE: Bedpan offered first, Assess the skin as you wash, Test water on your wrist, Half-covered for dignity, End with oral care. For meals, two words rule everything: ALERT and UPRIGHT — both, before any spoon.",
      },
      {
        type: "summary",
        body: "- Offer the bedpan first, test water on your inner wrist, uncover only what you wash.\n- A bed bath is a skin assessment in disguise — check pressure areas, folds, dressings and pads.\n- Feed only alert patients: upright, small amounts, watching each swallow.\n- Drowsiness or a wet, gurgling voice means stop — aspiration causes choking and pneumonia.\n- Encourage self-feeding; preserved independence is part of treatment. End with oral care and the call bell in reach.",
      },
    ],
    questions: [
      {
        topic: "Patient Hygiene",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Before washing a patient with bath water, how do you check that the temperature is safe and comfortable?",
        options: [
          "Ask a colleague to dip a finger quickly",
          "Test it on your own inner wrist",
          "Trust the tap setting you always use",
          "Pour a little on the patient's forearm first",
        ],
        correctIndex: 1,
        explanation:
          "The inner wrist is sensitive skin on your own body, so it tells you what she will feel without risking a burn on hers. Forearm testing on the patient risks discomfort before she has agreed to anything.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Safe Feeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During feeding, a patient becomes drowsy and her voice sounds wet. Family urges you to continue for her strength. What is the safe action?",
        options: [
          "Continue slowly with smaller spoonfuls",
          "Stop feeding, sit her fully upright, and inform your preceptor",
          "Give her a drink of water to clear the voice, then continue",
          "Turn her onto her side and continue feeding lying down",
        ],
        correctIndex: 1,
        explanation:
          "Drowsiness plus a wet voice signals aspiration risk — food heading for the lungs. The safe response is to stop, sit her upright, and report. Continuing — even slowly — or adding fluids feeds the danger, not the patient.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Skin Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Besides cleanliness, what is the main clinical value of a bed bath for a bed-bound patient?",
        options: [
          "It lets you count her respirations without her noticing",
          "It is the best daily opportunity to inspect skin, pressure areas, dressings and pads",
          "It replaces the need for turning schedules",
          "It provides practice for injections later in the day",
        ],
        correctIndex: 1,
        explanation:
          "Washing every surface means seeing every surface. Heels, sacrum, hips, folds and dressings get their most reliable daily check during the bath — early pressure damage and wound changes are found mid-lather.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Safe Feeding",
        front: "Which two conditions must be met before any spoon reaches a dependent patient?",
        back: "ALERT and UPRIGHT — fully awake, and sitting as upright as she can manage. Drowsy or slumped patients aspirate.",
      },
      {
        topic: "Aspiration",
        front: "What warning signs during feeding point to aspiration risk?",
        back: "Drowsiness, a slow or effortful swallow, coughing or choking, and a wet, gurgling voice. Stop feeding, sit upright, and report.",
      },
      {
        topic: "Bed Bath",
        front: "What does BATHE remind you to do?",
        back: "Bedpan offered first; Assess skin as you wash; Test water on your wrist; Half-covered for dignity; End with oral care and comfort.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Essential Environmental Health Standards in Health Care",
        year: "2008",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines for Health Facilities",
        note: "Covers bathing, linen and standard precautions at ward level; verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Practising the Basics",
    lessonTitle: "Collecting Specimens in Practice",
    description:
      "Your first midstream urines, swabs and tubes — getting them right the first time, with a patient watching and a lab waiting.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Apply the six rights of specimen collection on every sample.",
      "Collect a midstream urine and clinical swabs with correct technique.",
      "Label, package and transport specimens so the results are worth acting on.",
    ],
    tags: ["specimens", "technique", "midstream urine", "swabs", "labelling", "transport"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your first midstream urine, your first high vaginal swab — collecting specimens with a real patient watching is a rite of passage. The good news is that the rules are few and they never change. Learn them once and every sample you collect will be worth the laboratory's time.\n\nThis lesson covers the rights of specimens, the technique for the common samples a midwifery student collects, and how to move them safely from bedside to bench.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Specimens live by six rights: the **right patient** (check two identifiers — name and folder number — and label the container at the bedside, in her sight), the **right container**, the **right technique**, the **right time**, the **right form** and the **right transport**. A mislabelled, under-filled or late specimen is worse than none: it delays treatment and wastes scarce resources.\n\nA **midstream urine** is caught mid-flow: she washes her hands, cleanses the perineum from front to back, begins passing urine into the toilet, then catches the middle portion in the container without stopping the flow. The first flush washes contaminants from the skin, so the middle stream reflects what is truly inside. Fill to about the mark, lid tight, label, and send promptly — within two hours, or kept cool per your laboratory's rule.\n\n**Swabs** sample the live site. A high vaginal swab rolls gently against the upper vaginal wall, taking care not to drag it over the perineum on the way out; a wound swab samples clean, viable tissue at the wound margin — not old pus. For blood tubes: gloves and hand hygiene throughout, never recap needles, fill to the line, invert gently, and send everything in a leak-proof bag with its form — never balanced on a windowsill.",
      },
      {
        type: "clinical_pearl",
        body: "Label at the bedside, in front of the patient. A bottle that leaves the bedside unlabelled is a guess — and the laboratory bins guesses. Two identifiers, every time, no matter how busy the corridor is.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 28 weeks arrives with burning pain when she passes urine. You are preparing to collect a midstream specimen when her sister hands you a small bottle she filled at home that morning and has carried in her bag 'so we would not waste time at the clinic'. The bottle is unlabelled and warm from the journey.\n\nCan this bottle go to the laboratory?\n\nAnswer: No. An unlabelled, home-collected sample of unknown technique and age cannot give reliable results — contamination is likely, and bacteria multiply in stale urine, so a genuine infection cannot be told apart from a spoiled sample. Explain kindly, then collect a fresh midstream specimen: clean technique, middle portion, labelled at the bedside, sent with the request form within two hours. In pregnancy a urine infection can threaten both mother and baby, so speed matters — but a wrong result costs more than the wait.",
      },
      {
        type: "memory_trick",
        body: "The six rights of a specimen — patient, container, technique, time, labelling, transport. Like the rights of medication, they protect the patient at every step between her body and the laboratory bench.",
      },
      {
        type: "summary",
        body: "- Two identifiers, labelled at the bedside in the patient's sight — every specimen, every time.\n- Midstream urine: clean front to back, catch the middle of the flow, fill to the mark, send within two hours.\n- Swabs sample live tissue — vaginal wall for HVS, cleaned wound margin for wounds — never old pus or the perineum on the way out.\n- Blood tubes: fill to the line, invert gently, never recap needles.\n- Transport in a leak-proof bag with the correct form, promptly — never windowsills or overnight waits.",
      },
    ],
    questions: [
      {
        topic: "Specimen Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A relative hands you a urine sample collected at home that morning, unlabelled and carried in a bag. What should you do?",
        options: [
          "Send it to the lab with a form, since it is already collected",
          "Reject it politely and collect a fresh midstream specimen with proper technique",
          "Refrigerate it overnight and send it with tomorrow's batch",
          "Send it but write 'home sample' on the form as a warning to the lab",
        ],
        correctIndex: 1,
        explanation:
          "A specimen of unknown collection technique and age — hours in a warm bag — will grow bacteria and mislead treatment. A fresh, properly collected, promptly transported midstream sample is the only result worth acting on, especially in pregnancy.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Midstream Urine",
        type: "MCQ",
        difficulty: "Easy",
        stem: "For a midstream urine sample, which portion of the urine flow is collected?",
        options: [
          "The very first portion, to catch the most organisms",
          "The middle portion, passed into the container without stopping the flow",
          "The last portion, after the bladder is nearly empty",
          "The whole flow, from start to finish",
        ],
        correctIndex: 1,
        explanation:
          "The first flush washes skin contaminants away, so the middle portion reflects the urine truly inside the bladder. Collecting the first or last portion, or mixing the whole flow, invites contamination and false results.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Specimen Handling",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are specimen containers labelled at the bedside, in front of the patient?",
        options: [
          "So the patient can check her own results later",
          "Because labelling away from the bedside risks mixing up samples, and the patient confirms her own identity",
          "It is a courtesy required by relatives waiting outside",
          "Because the ward trolley is too far from the door",
        ],
        correctIndex: 1,
        explanation:
          "Labelling at the bedside links the container to the right person at the moment of collection, with the patient confirming her own name. Labelled later in a busy corridor, samples get swapped — and a wrong result can drive wrong treatment.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Midstream Urine",
        front: "Why catch the middle portion of the urine flow?",
        back: "The first flush washes contaminants from the skin and urethral opening, so the middle portion reflects what is truly in the bladder — the honest sample.",
      },
      {
        topic: "Specimen Rights",
        front: "Name the six rights of specimen collection.",
        back: "Right patient, right container, right technique, right time, right labelling, right transport.",
      },
      {
        topic: "Specimen Handling",
        front: "What two identifiers confirm a specimen belongs to the right patient?",
        back: "Name and folder (or unique ID) number — checked and labelled at the bedside, in front of the patient.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization, CDC and CLSI",
        title: "Laboratory Quality Management System: Handbook",
        year: "2011",
      },
      {
        organization: "World Health Organization",
        title: "Best Practices for Injections and Related Procedures Toolkit",
        year: "2010",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Being a Safe Student",
    lessonTitle: "Infection Prevention Habits That Stick",
    description:
      "Making hand hygiene and PPE second nature even at 2 a.m., when the ward is busy and nobody is watching your hands.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Build hand hygiene into automatic routines using cues in the ward environment.",
      "Explain why gloves never replace hand hygiene and list the daily equipment-cleaning habits.",
      "Apply the five moments correctly under real pressure, including between newborns.",
    ],
    tags: ["hand hygiene", "habits", "ipc", "ppe", "five moments"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You already know the five moments and the thirty seconds. On the ward, though, knowledge is not the problem — habits are. At 2 a.m., with four babies crying and one midwife, what protects your patients is not memory but reflex.\n\nThis lesson is about turning hand hygiene and PPE from something you remember into something you simply do — especially when nobody is watching.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Habits form from a loop: **cue → routine → reward**. Build the cues into the geography of your day. The doorway — gel going in, gel coming out. The curtain — rub as you pull it. The glove packet — the moment you see gloves, remind yourself that hands follow their removal. Chant the moments as 'two befores, three afters': before touching the patient, before clean or aseptic procedures; after body fluids, after touching the patient, after touching the surroundings. Forty to sixty seconds with soap, twenty to thirty with rub.\n\n**Gloves are not a substitute** for hand hygiene. Hands are contaminated as gloves come off, so gel or wash after every removal. Stay bare below the elbows, keep nails short, and keep your hands away from your face. Wipe your stethoscope and thermometer between patients, and never pass sharps bins three-quarters full or recap a needle.\n\nThe real test is the busy moment when skipping feels justified. That is the moment to slow down by five seconds. The standard that matters is what you do alone, because patients cannot see germs — but you can see your own hands.",
      },
      {
        type: "clinical_pearl",
        body: "Gloves protect you during the task; hand hygiene protects the next patient from you. Gloved hands leave the bedside just as contaminated as bare ones — sometimes worse, because gloves feel like safety.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night duty in the special care baby unit. You are the only student on, three babies are crying, and the midwife is occupied with the sickest one. You move between the incubators — soothing one baby, adjusting a blanket on another, checking a feed chart for the third. You have not touched anything 'dirty'.\n\nWhat must happen between incubators, and why does it apply to you?\n\nAnswer: Hand hygiene between every single baby. Newborns are among the most susceptible hosts anywhere, and your hands carry whatever you last touched — including the previous baby's secretions. Comforting is still touching: both the before-touching and after-touching moments apply. Use the alcohol rub at the incubator if the sink is far away. The five seconds of rub is the cheapest protection these babies will receive all night, and 'the ward was busy' has never erased an infection.",
      },
      {
        type: "memory_trick",
        body: "The door is your bell: in clean, out clean — every door, every curtain, every time. And chant 'two befores, three afters' while you rub; the moments are the map, the doorway is the trigger.",
      },
      {
        type: "summary",
        body: "- Build cues, not willpower: doorways, curtains and glove packets all trigger the habit.\n- Five moments in shorthand: two befores, three afters — 40–60 seconds wash, 20–30 seconds rub.\n- Gloves are never a substitute: hands after every glove removal, every time.\n- Wipe equipment between patients; sharps bins to three-quarters; never recap needles.\n- Your real standard is what you do alone at 2 a.m., when no one is counting.",
      },
    ],
    questions: [
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a special care baby unit at night, you move between three incubators — soothing babies, adjusting blankets, checking charts. What must you do between babies?",
        options: [
          "Hand hygiene between every baby, using the alcohol rub at the incubator",
          "Wash only after changing a dirty nappy",
          "Wash once at the end, after leaving the unit",
          "Wear the same gloves for the whole round to save time",
        ],
        correctIndex: 0,
        explanation:
          "Newborns are highly susceptible hosts, and your hands transfer whatever you last touched. Both the before-touching and after-touching moments apply between babies — even when you were 'only comforting'.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Gloves and PPE",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You have just removed gloves after a procedure. What comes next?",
        options: [
          "Nothing — gloves protected your hands, so they are clean",
          "Hand hygiene — hands are contaminated during glove removal",
          "New gloves, straight into the next task",
          "Wipe the gloves with alcohol for reuse",
        ],
        correctIndex: 1,
        explanation:
          "Gloves protect you during contact, but hands become contaminated as gloves are removed — tiny perforations and the doffing process itself transfer organisms. Hand hygiene after glove removal is a rule with no exceptions.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to WHO guidance, how long should an alcohol-based hand rub take?",
        options: [
          "5 to 10 seconds",
          "20 to 30 seconds",
          "60 to 90 seconds",
          "Exactly two minutes",
        ],
        correctIndex: 1,
        explanation:
          "A proper alcohol rub takes 20 to 30 seconds — the time for the solution to dry while covering all hand surfaces. A soap-and-water wash takes 40 to 60 seconds. Shorter times leave organisms behind.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Hand Hygiene",
        front: "How long do hand hygiene and alcohol rub properly take?",
        back: "40–60 seconds for soap-and-water washing; 20–30 seconds for alcohol-based rub, covering all surfaces until dry.",
      },
      {
        topic: "Five Moments",
        front: "What does 'two befores, three afters' mean?",
        back: "Hand hygiene before touching the patient and before clean/aseptic procedures; after body fluids, after touching the patient, and after touching the surroundings.",
      },
      {
        topic: "Gloves",
        front: "Why are gloves never a substitute for hand hygiene?",
        back: "Hands get contaminated during glove removal and through tiny perforations. Gloves protect you during the task; hand hygiene protects the next patient from you.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guidelines on Hand Hygiene in Health Care",
        year: "2009",
        url: "https://www.who.int/publications/i/item/9789241597906",
      },
      {
        organization: "World Health Organization",
        title: "My 5 Moments for Hand Hygiene",
        year: "2009",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines for Health Facilities",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "basic-clinical-practice",
    moduleTitle: "Being a Safe Student",
    lessonTitle: "Knowing Your Limits and Asking for Help",
    description:
      "The most professional skill you own — recognising the edge of your competence and speaking up before anything goes wrong.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a student's scope of practice and use a clear script when a task is beyond it.",
      "Know the escalation chain and who is on call during a shift.",
      "Respond to errors and emergencies with immediate reporting, not hesitation.",
    ],
    tags: ["limitations", "escalation", "scope of practice", "student safety", "errors"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There is a sentence that has never harmed a patient, and you must learn to say it comfortably: 'I am not sure — I need help.' Knowing the edge of your competence is not weakness. It is the definition of a safe student, and one day it will be the definition of a safe midwife.\n\nThis lesson covers your scope as a student, the words to use when a task is beyond you, the escalation chain on any ward, and what to do when things go wrong anyway.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "As a student you practise **under supervision**. Invasive procedures, medications and independent clinical decisions all require a supervisor — competencies are signed off one by one in your logbook, and until then, they are not yours to perform alone. You never take verbal orders, never chart as the qualified midwife, and never continue alone when unsure.\n\nLearn the **refusal script** and use it with a smile: 'I haven't been signed off for that yet — could you watch me do it?' No supervisor worth working for will punish that sentence. Know the **escalation chain**: your preceptor, the ward in-charge, the senior midwife, the medical officer — and know who is on call tonight. Deterioration, unexpected findings and your own uncertainty are all reportable events; you never need certainty to ask for help.\n\n**Errors** are handled in the open: recognise it, report it immediately, help put it right, and reflect on it afterwards. Errors reported are treated as training; errors hidden become disciplinary matters and harm patients twice.",
      },
      {
        type: "clinical_pearl",
        body: "Escalate early and clearly. 'I think this patient is getting worse — please come now' is a sentence that saves lives. Waiting until you are certain is how deterioration hides in the quiet corner of the ward.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Evening shift, short-staffed. The midwife in charge is in the delivery room with a woman in the second stage of labour. In the observation room next door, a postnatal woman calls you — her pad is soaked through, the second one in fifteen minutes, and when you feel her abdomen the fundus is soft. She looks pale and frightened.\n\nAs a student, what is your job in the next thirty seconds?\n\nAnswer: Raise the alarm loudly and immediately — call or shout for the midwife, press the call bell, and stay with the woman. Heavy bleeding with a soft fundus is a postpartum haemorrhage until proven otherwise, and this is not a condition a student manages alone. Your role is rapid escalation: fetch help, fetch instruments, stay with the patient and keep talking to her. In an emergency, the most dangerous student is the quiet one who tries to cope.",
      },
      {
        type: "memory_trick",
        body: "When in doubt, shout it out. And keep the nine-word script ready for any emergency: 'I can't do this alone — please come now.' It covers every situation you will meet as a student.",
      },
      {
        type: "summary",
        body: "- Students practise under supervision: no medications, invasive procedures or independent decisions before sign-off.\n- Learn the script: 'I haven't been signed off for that — please watch me do it.'\n- Know your escalation chain — preceptor, ward in-charge, senior midwife, medical officer — and who is on call.\n- Uncertainty itself is a reason to escalate; you never need certainty to ask for help.\n- Errors: recognise, report, help put right, reflect. Hidden errors harm patients twice.",
      },
    ],
    questions: [
      {
        topic: "Scope of Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A busy staff member asks you to catheterise a patient alone, saying you have seen it done twice. What is the correct response?",
        options: [
          "Do it carefully — you remember the steps well",
          "Do it, but chart that you were asked to work alone",
          "Say you have not been signed off for it and ask to be supervised",
          "Refuse and leave the ward until the request is withdrawn",
        ],
        correctIndex: 2,
        explanation:
          "Observing a procedure is not competency; sign-off is. The script — 'I haven't been signed off for that, please supervise me' — protects the patient, protects you, and marks you as trustworthy. Walking off the ward abandons the patient; performing it unsupervised risks her.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The midwife in charge is busy with a delivery when you find a postnatal woman with a soaked pad and a soft fundus. What is your first action as a student?",
        options: [
          "Begin managing the bleeding yourself — massage the fundus and fetch drugs",
          "Note it in the chart and mention it at handover",
          "Call loudly for the midwife immediately, press the call bell, and stay with the woman",
          "Wait quietly for the delivery to finish so you do not disturb anyone",
        ],
        correctIndex: 2,
        explanation:
          "Postpartum haemorrhage is a team emergency measured in minutes, and your role as a student is rapid escalation — summon help, stay with the patient, be ready to fetch equipment. Noticing quietly, waiting, or solo management all delay the care she needs.",
        courseSlug: "basic-clinical-practice",
      },
      {
        topic: "Error Management",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You realise you recorded a wrong set of observations an hour ago. What should you do?",
        options: [
          "Correct the chart quietly and hope no one noticed",
          "Tell your preceptor immediately so the record and any clinical decisions can be fixed",
          "Leave it — the error is small and the shift is nearly over",
          "Ask a classmate what they would do first",
        ],
        correctIndex: 1,
        explanation:
          "Errors are reported the moment they are recognised, because records drive care — a wrong observation may already have shaped a decision. Reported errors become teaching; hidden errors repeat themselves.",
        courseSlug: "basic-clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Scope of Practice",
        front: "What is the script when you are asked to do something beyond your sign-off?",
        back: "'I haven't been signed off for that yet — could you watch me do it?' Honest, safe, and trusted more than silent guessing.",
      },
      {
        topic: "Escalation",
        front: "Name the escalation chain on a typical ward.",
        back: "Preceptor → ward in-charge → senior midwife → medical officer. Know who is on call each shift before you need them.",
      },
      {
        topic: "Error Management",
        front: "What are the four steps when you discover your own error?",
        back: "Recognise it, report it immediately, help put it right, then reflect so it does not repeat. Hiding it harms the patient twice.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "The Story First",
    lessonTitle: "History Taking: The Story Before the Stethoscope",
    description:
      "Most of diagnosis lives in the story — learning a structure that carries you through every ANC visit and admission without missing what matters.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Structure a full patient history in the correct order.",
      "Use OLDCARTS to explore any presenting complaint.",
      "Apply funnel questioning — open questions first, then focused closed questions.",
    ],
    tags: ["history taking", "communication", "olcarts", "anc", "obstetric history"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Long before you pick up a stethoscope, the diagnosis is walking toward you in words. Ask any experienced clinician and they will tell you: the history gives most of the answer, and examination and tests merely confirm it. That is why the best midwives are, first, very good listeners.\n\nThis lesson gives you a structure you can carry into every antenatal visit and every admission, so no part of the story that matters ever gets missed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A full history runs in a fixed order. Introduce yourself and gain consent. Then **biographic details**: name, age, folder number, parity. Then the **presenting complaint** — in her own words, one line — followed by the story of that complaint through **OLDCARTS**: Onset, Location, Duration, Character, Aggravating and relieving factors, Radiation, Timing pattern, Severity.\n\nThen the background that changes everything: **obstetric history** (gravida counts every pregnancy, para counts the deliveries — capture how each ended), medical history — hypertension, diabetes and sickle cell disease are common and consequential in Ghana — surgical history, medications and allergies, including respectful questions about herbs and traditional remedies, and finally family and social history: her support at home and her distance from the facility, which feed the three delays that decide outcomes.\n\nTechnique is a **funnel**: open questions first — 'tell me about the pain' — and let her finish without interruption. Only then close in with focused questions. Use an interpreter properly when needed, and keep eye contact rather than burying your head in notes.",
      },
      {
        type: "clinical_pearl",
        body: "Two ears, one mouth — the ratio is the lesson. A patient interrupted at the start buries her most important symptom; the last thing she says, once you let her finish, is often the real reason she came.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 26-year-old at her first antenatal visit says she has 'body pain' in her belly. Instead of reaching for your hands, you take the story: the pain began two days ago on the lower right side, is constant and worsening, she has vomited twice, feels hot, and her stools are normal. She is fourteen weeks pregnant and has no vaginal bleeding.\n\nHow does the story change what happens next?\n\nAnswer: With fever, vomiting and right-lower abdominal pain, this is no ordinary pregnancy ache — appendicitis or another surgical cause must be considered, and she needs medical review today, not reassurance and a routine appointment. The history has already given you the direction; examination and referral simply confirm it. Had you assumed round ligament pain without the story, she might have gone home and returned much sicker — the story was the diagnosis waiting to be heard.",
      },
      {
        type: "memory_trick",
        body: "OLDCARTS is your flashlight into any complaint: Onset, Location, Duration, Character, Aggravating/relieving, Radiation, Timing, Severity. Shine it before you touch — the eight letters outperform most instruments.",
      },
      {
        type: "summary",
        body: "- The history contributes more to diagnosis than any single examination or test.\n- Order: introduction and consent → biographic data → presenting complaint in her words → OLDCARTS → obstetric, medical, surgical, drugs and allergies, family and social.\n- Gravida counts every pregnancy; para counts deliveries — capture how each ended.\n- Funnel your questions: open first, let her finish, then close in.\n- Ask respectfully about herbs and traditional care, and about distance and support — they change plans.",
      },
    ],
    questions: [
      {
        topic: "History Taking",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 14 weeks reports two days of right-lower abdominal pain, vomiting twice and feeling hot. What does the history suggest you do?",
        options: [
          "Reassure her it is round ligament pain and give the next routine appointment",
          "Arrange medical review the same day — a surgical cause such as appendicitis must be considered",
          "Send her home and review at the next scheduled ANC visit",
          "Prescribe antacids and rest, then reassess in one week",
        ],
        correctIndex: 1,
        explanation:
          "Fever, vomiting and focal right-lower pain in pregnancy is a surgical story until proven otherwise. Same-day medical review is the safe response; reassurance or delay risks a ruptured appendix and fetal loss.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Obstetric History",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman is gravida 4, para 2. What does this mean?",
        options: [
          "She is pregnant for the fourth time and has had two deliveries",
          "She has four living children and is pregnant with twins",
          "She has had four deliveries and two miscarriages",
          "She has been pregnant twice and delivered four babies",
        ],
        correctIndex: 0,
        explanation:
          "Gravida counts every pregnancy, including the current one; para counts the pregnancies that ended in delivery. Gravida 4, para 2 means four pregnancies in total with two delivered — the remaining one, besides the current, ended without delivery.",
        courseSlug: "health-assessment",
      },
      {
        topic: "History Taking",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which question is the best OPENING question for a presenting complaint?",
        options: [
          "Is the pain sharp or dull?",
          "Does the pain move to your back?",
          "Tell me about the pain you are feeling.",
          "On a scale of one to ten, how severe is it?",
        ],
        correctIndex: 2,
        explanation:
          "An open question invites her story in her own words, without steering it. Sharp-or-dull, radiation and severity all belong later, once the funnel has narrowed and you know what to aim at.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "OLDCARTS",
        front: "What do the letters of OLDCARTS stand for?",
        back: "Onset, Location, Duration, Character, Aggravating/relieving factors, Radiation, Timing pattern, Severity — the eight probes into any complaint.",
      },
      {
        topic: "Obstetric History",
        front: "Define gravida and para.",
        back: "Gravida: every pregnancy she has ever had, including the current one. Para: the pregnancies that ended in delivery.",
      },
      {
        topic: "History Taking",
        front: "What is the funnel technique in questioning?",
        back: "Open questions first ('tell me about...'), let her finish uninterrupted, then narrow with focused closed questions — wide net first, sharp aim second.",
      },
    ],
    sources: [
      {
        organization: "Lippincott Williams & Wilkins",
        title: "Bates' Guide to Physical Examination and History Taking",
        year: "2021 (13th edition)",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "The Story First",
    lessonTitle: "The Chief Complaint and Its Red Flags",
    description:
      "Focusing on the presenting problem — and the warning signs hiding inside its story that turn a routine visit into an emergency.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Record the chief complaint in the patient's own words.",
      "Screen every complaint for its red-flag questions.",
      "List the WHO antenatal danger signs and respond to them with same-visit escalation.",
    ],
    tags: ["chief complaint", "red flags", "danger signs", "pre-eclampsia", "anc"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The chief complaint is the reason she came — in her words, one line, at the very top of the story. 'My body is hot.' 'The baby is not moving.' It sounds small, but inside every complaint hides a set of red flags, and your job is to find them before they find you.\n\nThis lesson teaches you to honour her words, then screen every complaint for the danger signs that change a routine visit into an emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Chart the complaint **in her own words** — 'my body is hot', not 'fever' — because her phrasing tells the next reader what she actually experienced. Then screen it. Every complaint has its red-flag questions. Headache: sudden? with blurred vision? with swelling of the face and hands? Abdominal pain: severe? with bleeding? with fever? Vaginal bleeding in pregnancy: how much, what colour, with pain or fluid?\n\nLearn the **antenatal danger signs** by heart, because any one of them means same-visit escalation, not a later appointment: vaginal bleeding, convulsions, severe headache with blurred vision, fever, severe abdominal pain, fast or difficult breathing, and decreased fetal movement.\n\nYour last duty is the widest one: teach these danger signs to every woman and her family, with clear instructions on where to go and when. A mother who knows that 'baby not moving' means come now, at once, tonight — is her own best early warning system.",
      },
      {
        type: "clinical_pearl",
        body: "Chart her words, screen with your questions. 'Headache since yesterday' becomes an emergency only when you ask about her eyes, her hands and her blood pressure — the red flags are found, not volunteered.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 32 weeks waits her turn at a busy antenatal clinic and mentions, almost as an aside, that her head has been 'paining' her since yesterday. When you ask a little more, she says bright spots float in her eyes, her hands have looked 'thick' since the weekend, and her blood pressure reads 148/96. The waiting area is full and the queue is long.\n\nWhat does this cluster mean, and what happens now?\n\nAnswer: Severe headache with visual disturbance, swollen hands and a raised blood pressure at 32 weeks is pre-eclampsia until proven otherwise — a cluster of danger signs, not a headache. She must be seen by the senior midwife immediately and referred for urgent review the same day; her queue number is irrelevant now. Danger signs cancel routine — a finding only matters if it changes what happens next.",
      },
      {
        type: "memory_trick",
        body: "The danger-sign drumbeat: BLOOD, BABY, BREATH, HEAD, HEAT, TUMMY, SWELL — bleeding, baby not moving, breathing difficulty, severe headache with vision change, fever, severe abdominal pain, swollen face and hands. Chant it until you can hear it over a busy waiting area.",
      },
      {
        type: "summary",
        body: "- The chief complaint is her reason for coming, charted in her own words, one line.\n- Screen every complaint with its red-flag questions — vision, swelling, bleeding, fever, fetal movement.\n- ANC danger signs: bleeding, convulsions, severe headache with blurred vision, fever, severe abdominal pain, fast breathing, decreased fetal movement.\n- A danger sign means same-visit escalation — never a later appointment.\n- Teach the danger signs to every woman and her family; informed mothers are their own first responders.",
      },
    ],
    questions: [
      {
        topic: "Danger Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is an antenatal danger sign requiring same-day escalation?",
        options: [
          "Heartburn after eating in the evening",
          "Mild ankle swelling at the end of the day",
          "Decreased fetal movement",
          "Feeling more tired than usual",
        ],
        correctIndex: 2,
        explanation:
          "Decreased fetal movement is a WHO antenatal danger sign — the baby's own report of its condition. Heartburn and mild ankle swelling are common discomforts, but any danger sign, alone or combined, sends the woman for same-visit review.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 32 weeks a woman reports severe headache with floating visual spots, swollen hands and a BP of 148/96. What is the correct action?",
        options: [
          "Give paracetamol and let her complete the queue before review",
          "Book her for a routine follow-up next week to see if the headache settles",
          "Immediate review by the senior midwife and same-day referral — treat as pre-eclampsia",
          "Recheck her blood pressure at the next routine visit and compare",
        ],
        correctIndex: 2,
        explanation:
          "Severe headache plus visual disturbance, swelling and hypertension is the classic pre-eclampsia cluster — a same-visit emergency pathway. Delay in any form, whether queue, next week, or later recheck, risks eclampsia and fetal death.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Chief Complaint",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the chief complaint charted in the patient's own words?",
        options: [
          "It saves you translating her symptom into medical terms",
          "It preserves exactly what she reported, so the next reader knows what she actually said and can track its evolution",
          "Because patients understand their symptoms better than clinicians",
          "It makes the notes shorter and faster to write",
        ],
        correctIndex: 1,
        explanation:
          "Her words are data. 'My body is hot' can be tracked verbatim across visits; translating it to 'fever' already loses her meaning — and what she chooses to call her problem often carries clinical clues of its own.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Danger Signs",
        front: "List the WHO antenatal danger signs.",
        back: "Vaginal bleeding, convulsions, severe headache with blurred vision, fever, severe abdominal pain, fast or difficult breathing, decreased fetal movement — any one means same-visit escalation.",
      },
      {
        topic: "Pre-eclampsia",
        front: "What cluster turns a 'headache' at 32 weeks into an emergency?",
        back: "Severe headache + visual disturbance + face/hand swelling + BP 140/90 or above — pre-eclampsia until proven otherwise; immediate review and same-day referral.",
      },
      {
        topic: "Chief Complaint",
        front: "How should the chief complaint be recorded?",
        back: "In the patient's own words, one line — 'the baby is not moving', not 'reduced fetal movement'. Her phrasing is the next reader's starting point.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "The Story First",
    lessonTitle: "Communicating While You Assess",
    description:
      "Talking, listening and examining all at once — the coordination real assessment requires, and the clinical gold hidden in a patient's face.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain every assessment step before touching, and ask permission each time.",
      "Use an interpreter correctly and confirm understanding with teach-back.",
      "Watch the patient's face and responses as clinical data during examination.",
    ],
    tags: ["communication", "assessment", "teach-back", "interpreters", "consent"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Assessment is not what happens while the patient waits quietly — it is a conversation that continues while your hands do the work. Explaining, asking permission, watching her face, listening between the words: these are not manners bolted on to the examination; they are part of the examination itself.\n\nThis lesson is about keeping the conversation alive with two busy hands, and about the clinical gold that shows up first in a patient's face.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Explain before touch**: 'I am going to feel your tummy now — is that okay?' Then, while your hands work, watch her face. The wince she hides is data — tenderness, fear and relief all announce themselves there before she says a word. Use her name, keep your words simple ('the baby's heartbeat', not 'auscultate the FHS'), and tell her what you are finding in plain language as you go.\n\n**Interpreters** need managing: brief them privately on what is coming, then speak to the woman — your eyes on her, not on him. Check understanding with **teach-back**: 'so I know I explained it well — tell me how you will take the tablets when you get home.' Her own words show you what actually landed. Allow silences instead of filling them, and when you hand over, pass on what you told her so the next midwife does not repeat or contradict it.",
      },
      {
        type: "clinical_pearl",
        body: "Watch the face, not just the findings. The tender spot she does not mention will announce itself in her eyes before your fingers confirm it — if you are looking up often enough to see it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are practising abdominal palpation on a woman at 34 weeks, talking her through each step as taught. When you press on her right upper abdomen, her jaw tightens and she goes quiet — though she says she is 'fine'. Your fingers find definite tenderness in that spot, and she has no headache.\n\nWhat did the talking and watching add to your assessment — and what should you do with the finding?\n\nAnswer: Her face told you where to look before she told you anything — the tightening jaw flagged the tenderness your fingers then confirmed, and 'fine' was politeness, not data. Right-upper abdominal tenderness at 34 weeks, especially with headache, swelling or hypertension, can point to the liver involvement of severe pre-eclampsia. Report the finding to the midwife with her blood pressure and symptoms so the whole picture is judged — and chart exactly where the tenderness was. The conversation did not slow the examination; it found the finding.",
      },
      {
        type: "memory_trick",
        body: "TALK: Tell her what you will do, Ask permission, Look at her face, Keep telling her what you found. Say it to yourself every time your hands approach a patient — it is the whole skill in four moves.",
      },
      {
        type: "summary",
        body: "- Explain before you touch, and ask permission every single time.\n- Her face is a monitor — watch it while your hands work, especially during palpation.\n- Plain words, her name, findings shared as you go.\n- With an interpreter, speak and look at the woman; confirm understanding with teach-back.\n- Hand over what you told her, so explanations are not repeated or contradicted.",
      },
    ],
    questions: [
      {
        topic: "Clinical Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What must you do immediately before palpating a patient's abdomen?",
        options: [
          "Warm the room and close the windows",
          "Explain what you are about to do and ask her permission",
          "Ask her to cough while you watch",
          "Chart the previous set of observations first",
        ],
        correctIndex: 1,
        explanation:
          "Explanation and permission are the entry fee to every examination — she is a person before she is a technique station. It also improves the assessment: a relaxed abdomen reveals far more than a guarded one.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Interpreters",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are taking a history through an interpreter. What is the correct approach?",
        options: [
          "Speak to the interpreter and let them manage the whole conversation",
          "Ask the family to summarise her story to save time",
          "Brief the interpreter, then speak to and look at the woman throughout",
          "Use medical terms so the interpreter can translate them accurately",
        ],
        correctIndex: 2,
        explanation:
          "The conversation belongs to the woman: your eyes and words go to her, with the interpreter as the channel. Family summaries lose her exact words, and jargon — even translated — builds walls rather than stories.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Teach-Back",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the purpose of the teach-back question — 'tell me how you will take the tablets at home'?",
        options: [
          "To test the patient's intelligence and memory",
          "To confirm that your explanation actually landed, in her own words",
          "To decide whether she deserves the medication",
          "To fill time while you write your notes",
        ],
        correctIndex: 1,
        explanation:
          "Teach-back tests your teaching, not her memory. If she cannot say the plan back in her own words, the gap is in the explanation — and you repeat it differently before she leaves, not after the tablets run out.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Clinical Communication",
        front: "What does TALK remind you to do during assessment?",
        back: "Tell her what you will do; Ask permission; Look at her face; Keep telling her what you found.",
      },
      {
        topic: "Teach-Back",
        front: "What is teach-back, and what does it test?",
        back: "Asking the patient to repeat the plan in her own words — 'tell me how you will take the tablets'. It tests your explanation, not her intelligence.",
      },
      {
        topic: "Clinical Observation",
        front: "Why watch the patient's face while you palpate?",
        back: "Hidden tenderness shows in the face — a tightened jaw or wince — before she reports it. Her face is a monitor running alongside your hands.",
      },
    ],
    sources: [
      {
        organization: "CRC Press",
        title: "Skills for Communicating with Patients (Silverman, Kurtz & Draper, 3rd edition)",
        year: "2013",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
      },
    ],
  },
];
