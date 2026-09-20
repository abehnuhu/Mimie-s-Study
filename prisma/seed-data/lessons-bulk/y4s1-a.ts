// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch A (Advanced Midwifery Practice,
// High-Risk Pregnancy, Obstetric Emergencies)
// 19 lessons anchored to prisma/seed-data/anchors/y4s1-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "Clinical Reasoning for the Expert Midwife",
    description:
      "From pattern recognition to deliberate analysis — the thinking that experts actually do, and how to keep it safe when it moves fast.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the two systems of clinical thinking — fast pattern recognition and slow deliberate analysis.",
      "Explain how cognitive biases such as premature closure and anchoring distort expert judgement.",
      "Apply structured reflection to real ward cases so your intuition stays honest and your reasoning stays checkable.",
    ],
    tags: ["clinical reasoning", "expertise", "decision making", "cognitive bias"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "By your final year you have started to notice things without knowing quite how. One glance at a woman on the corridor and you already have a feeling about her. That feeling is real clinical data, and this lesson is about what it is, where it comes from, and when to trust it.\n\nExperts think in two modes. Fast, effortless pattern recognition — built from hundreds of matched cases — and slow, deliberate analysis, where you list possibilities and test them one by one. Expertise is not choosing one mode. It is knowing when to switch.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Pattern recognition (often called **System 1**) is the strength and the danger of the expert midwife. It is fast and usually right, because the patterns were learned from real patients. It fails when today's case only looks like a familiar one — the feverish postnatal woman who resembles yesterday's malaria case but is actually developing sepsis. Deliberate analysis (**System 2**) is slower and effortful: you state your findings, form hypotheses, and go looking for evidence that could prove you wrong.\n\nExperts stay safe through **calibration** — tracking whether their calls turned out right, and adjusting. Watch for the classic traps: **premature closure** (settling on the first answer that fits), **anchoring** (fixating on one early detail), and **availability** (judging by the case you remember most vividly). The rescue is metacognition: thinking about your own thinking. When something about the story does not sit right, name it aloud, widen your differential, and let a colleague hear your reasoning.",
      },
      {
        type: "clinical_pearl",
        body: "If the story does not sit right, that feeling is a finding, not a distraction. Slow down, say out loud what does not fit, and get a second pair of eyes. Speaking your reasoning aloud is the cheapest safety device on any ward.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night shift on a postnatal ward. A G3P2 woman, day one after a normal birth, has a temperature of 37.8 degrees and complains of feeling feverish. The night sister says, \"That is malaria season, we all know it.\" You almost agree — but something snags: her lochia smells slightly offensive and she winces when you press the fundus.\n\nWhich mode of thinking is being used here, and what should you do next?\n\nAnswer: This is fast pattern recognition, and it is drifting towards premature closure — the classic picture of malaria is being fitted onto a story with early warning signs of puerperal sepsis, which can be fatal within hours. Switch to deliberate analysis: full vital signs on a modified early warning chart, a focused abdominal and lochia assessment, senior review, and investigations plus antibiotics per protocol rather than waiting for the textbook picture. The feeling that something did not fit was your expertise working.",
      },
      {
        type: "memory_trick",
        body: "PATTERN — PAUSE — PROVE. Run the pattern, pause the moment anything smudges it, and prove your diagnosis with vitals, examination and evidence before you commit the plan.",
      },
      {
        type: "summary",
        body: "- Experts hold two modes: fast pattern recognition and slow deliberate analysis.\n- Pattern recognition is efficient but prone to premature closure, anchoring and availability bias.\n- A feeling of unease is data — treat it as a trigger to slow down and widen the differential.\n- Calibration comes from reviewing your own calls and saying your reasoning aloud to colleagues.",
      },
    ],
    questions: [
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best describes the difference between the two modes of expert clinical thinking?",
        options: [
          "Experienced midwives should use pattern recognition and students should use deliberate analysis",
          "Pattern recognition is fast and automatic; deliberate analysis is slow, effortful and hypothesis-driven",
          "Deliberate analysis is only used when documentation is required",
          "Pattern recognition is taught in class while deliberate analysis only comes with years of practice",
        ],
        correctIndex: 2,
        explanation:
          "The two modes differ in speed and effort: pattern recognition matches the current case against a library of remembered ones, while deliberate analysis builds and tests hypotheses step by step. Experts use both and switch deliberately.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife accepts 'malaria' as the explanation for a day-one postnatal fever because three other patients this week had malaria. Which cognitive trap is she falling into, and what is the practical antidote?",
        options: [
          "Availability bias — antidote is to consult the laboratory before seeing any patient",
          "Anchoring on the first vital sign — antidote is to re-measure the temperature",
          "Premature closure on an available diagnosis — antidote is to list alternatives and look for evidence against the favoured one",
          "Confirmation bias in the physical exam — antidote is to avoid examining the abdomen",
        ],
        correctIndex: 0,
        explanation:
          "She is closing the case early using the diagnosis that comes most easily to mind — a blend of premature closure and availability. The antidote is deliberately generating alternatives (sepsis, breast engorgement, UTI) and hunting for disconfirming evidence, not avoiding examination.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a busy clinic you feel uneasy about a woman whose observations are all technically normal. What is the most expert response to that feeling?",
        options: [
          "Document 'patient appears well' and move on, since the observations are normal",
          "Treat the feeling as a clinical finding: name what does not fit, widen the differential, and ask a colleague to review her with you",
          "Request a specialist referral for every woman who gives you an uneasy feeling",
          "Ignore the feeling until an observation becomes abnormal, to avoid over-investigating",
        ],
        correctIndex: 1,
        explanation:
          "Expert intuition is trained pattern matching, and unease often reflects cues you have not consciously registered. Naming it, widening the differential and seeking a second opinion converts a vague worry into checkable clinical reasoning — without reflexively escalating everything.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Clinical Reasoning",
        front: "What are the two modes of expert clinical thinking?",
        back: "Fast pattern recognition (System 1) — matching today's case against remembered ones — and slow deliberate analysis (System 2) — listing hypotheses and testing them. Expertise is knowing when to switch between the two.",
      },
      {
        topic: "Clinical Reasoning",
        front: "Name three classic cognitive traps that distort expert judgement.",
        back: "Premature closure (settling on the first answer that fits), anchoring (fixating on one early detail) and availability bias (judging by the most vivid recent case).",
      },
      {
        topic: "Clinical Reasoning",
        front: "Why should a feeling of unease be treated as a clinical finding?",
        back: "It often reflects real cues your experience has registered but your conscious mind has not. Naming what does not fit, widening the differential and getting a second opinion turns instinct into safety.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Chapter on clinical judgement and decision making. Verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "Differential Thinking in Midwifery",
    description:
      "Holding several possibilities at once — the simple habit that prevents premature closure and keeps the dangerous diagnosis on the table.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what a differential diagnosis is and why single-answer thinking is unsafe in maternity care.",
      "Explain the worst-first principle and how illness scripts organise a differential.",
      "Apply a three-point differential to common presenting complaints such as headache, breathlessness and fever.",
    ],
    tags: ["differential", "diagnosis", "clinical reasoning", "decision making"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A woman tells you one thing — a headache, a fever, breathlessness — and behind that one symptom sit several possible diseases. The commonest diagnostic error in medicine is grabbing the first plausible answer and stopping. This lesson trains the opposite habit: holding more than one possibility in mind until the evidence chooses for you.\n\nDifferential thinking is not academic gymnastics. On a district labour ward it is the difference between treating a 34-week headache as 'stress' and finding a blood pressure of 170/115 before she convulses.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **differential** is a short, ranked list of explanations for what you see. Rank it **worst first**: whatever could kill or disable her in the next few hours goes to the top, even if it is uncommon. For the third-trimester headache: pre-eclampsia first (treatable and deadly), then severe anaemia or malaria (common in Ghana), then migraine or tension headache last. Whatever ranks first gets excluded first — blood pressure and urine protein cost minutes and answer the question.\n\nExperts store **illness scripts** — the typical story of each disease — and compare the woman in front of them against each script, deliberately noticing what fits and what does not. Write the differential in the notes when the case is unclear; it shows the next midwife what you considered, and it forces you to keep the dangerous option alive until it is genuinely excluded.",
      },
      {
        type: "clinical_pearl",
        body: "One diagnosis is a guess; two is a plan. When a case is not obvious, write three possibilities in the margin — worst first — and let your examination and tests argue between them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 19-year-old primigravida at 34 weeks attends antenatal clinic with her mother, who explains that the girl 'cannot sleep because of headaches' and the family has given her paracetamol. The girl looks pale and tired. Your clinic is heaving and the easy move is to treat the anaemia and send her home.\n\nWhich diagnoses must be on your differential before she leaves, and which goes first?\n\nAnswer: Headache at 34 weeks in a pale, tired teenager could be anaemia, malaria, tension headache — or pre-eclampsia, and pre-eclampsia goes first because it can progress to eclampsia and death within hours, and it is cheap to exclude. Check her blood pressure and urine protein now, examine for oedema and reflexes, and test her haemoglobin. The rule of worst-first exists precisely for the busy clinic where shortcuts feel safest.",
      },
      {
        type: "memory_trick",
        body: "WORST — COMMON — FIT — HOLD. Rank what could kill her worst first, add the most common cause next, check how the story fits each script, and hold the list open until evidence closes it.",
      },
      {
        type: "summary",
        body: "- A differential is a short, ranked list of explanations for a presenting complaint.\n- Always rank worst first — exclude the killer before comforting yourself with the common.\n- Illness scripts let you compare this woman against the typical story of each disease.\n- Write the differential down for unclear cases; it keeps the dangerous option alive and tells the next reader what you considered.",
      },
    ],
    questions: [
      {
        topic: "Differential Diagnosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 32 weeks presents with breathlessness. Which differential is ranked on the worst-first principle?",
        options: [
          "Anaemia first, then malaria, then pulmonary embolism, then normal pregnancy breathlessness",
          "Normal pregnancy breathlessness first, since it is by far the most common cause",
          "Pulmonary embolism first, then severe anaemia and pneumonia, then physiological breathlessness of pregnancy",
          "Malaria first, then pulmonary embolism, since both are common in Ghana",
        ],
        correctIndex: 3,
        explanation:
          "Worst-first means the condition that can kill within hours — here pulmonary embolism, with severe anaemia and pneumonia close behind — is ranked top and excluded actively, before settling on the common benign explanations.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Differential Diagnosis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is an illness script?",
        options: [
          "A written referral letter describing the woman's diagnosis",
          "A standard treatment protocol issued by the Ministry of Health",
          "The typical story of a disease — its features, course and signs — stored in an expert's memory",
          "The list of differential diagnoses required by the hospital register",
        ],
        correctIndex: 1,
        explanation:
          "An illness script is the mental model of a disease's typical presentation, course and findings. Experts compare the patient in front of them against each script, noting what fits and what does not.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Differential Diagnosis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does premature closure matter so much in maternity care?",
        options: [
          "Because it lengthens the woman's stay in hospital",
          "Because the dangerous diagnoses in pregnancy can progress within hours, so a wrong early label delays life-saving treatment",
          "Because it makes documentation harder for the next midwife",
          "Because it prevents the midwife from following protocols exactly",
        ],
        correctIndex: 0,
        explanation:
          "In maternity, conditions like eclampsia, sepsis and abruption move in hours. Settling on a benign explanation early means the killer diagnosis is only discovered when she collapses — when treatment is far harder.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Differential Diagnosis",
        front: "What does worst-first mean when building a differential?",
        back: "Rank whatever could kill or disable her within hours at the top, even if uncommon — and exclude it first. Pre-eclampsia before migraine; pulmonary embolism before anxiety.",
      },
      {
        topic: "Differential Diagnosis",
        front: "Give a worst-first differential for headache at 34 weeks.",
        back: "Pre-eclampsia first (check BP and urine protein immediately), then severe anaemia or malaria, then migraine or tension headache last.",
      },
      {
        topic: "Differential Diagnosis",
        front: "Why write the differential in the notes for an unclear case?",
        back: "It shows the next clinician what you considered, and it stops you quietly dropping the dangerous option — the list must stay open until evidence closes it.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice, 3rd edition",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549289",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Diagnostic reasoning chapters. Verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "Prioritisation When Everything Is Urgent",
    description:
      "Triage thinking in maternity — sequencing care when three patients need you now, and why the calm sequencer saves more lives than the fastest runner.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a structured method for ranking simultaneous emergencies on a busy ward.",
      "Explain why treating and assessing happen together, not in sequence, during a crisis.",
      "Apply delegation and closed-loop communication to cover more than one urgent patient at once.",
    ],
    tags: ["prioritization", "triage", "emergency", "delegation", "time management"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One night you will be the senior midwife on a district labour ward and three things will happen at once. A woman will be bleeding, a trace will go bad, and someone will start fitting in the corridor. You cannot be in three rooms, but your thinking can — if it is sequenced.\n\nThis lesson is about triage thinking: deciding, in seconds, which problem gets you first, which gets a delegated pair of hands, and which gets reassessed in ten minutes. It is a final-year skill because nobody can practise it until the stakes are real.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Rank threats by how fast they kill and what your presence changes. **Airway first** — a convulsing woman can asphyxiate in minutes. **Uncontrolled bleeding next** — PPH kills within the hour if the uterus stays slack. **The compromised fetus third** — usually minutes rather than seconds, and often improved by delegated actions: reposition, stop oxytocin, call for help. And in every version your first act is the same: **shout for help and name what you need** — theatre, doctor, ambulance — the single highest-yield action you own.\n\nTwo habits multiply you. **Treat while you assess**: rub the uterus while counting the pulse — never finish an assessment before starting treatment. And **delegate by name with a closed loop**: 'Sister Adjoa, call the registrar now, come back and tell me he is coming.' A vague 'someone call someone' is a hope, not delegation.",
      },
      {
        type: "clinical_pearl",
        body: "The loudest patient is not always the sickest. A quiet, pale woman in the corner with a thready pulse outranks the shouting one — silence in shock is a warning, not comfort.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the senior on night duty with one junior midwife and a ward aide. Simultaneously: the bell rings from Room 1 where a woman delivered an hour ago and the junior shouts 'she is bleeding heavily'; the CTG in Room 2 shows deep late decelerations; and a waiting woman in the corridor cries out and begins to convulse.\n\nIn what order do you act, and what do you say?\n\nAnswer: Shout for the doctor, theatre team and second helper first — one call, many hands. Go to the convulsing woman, who is dying fastest: left lateral, airway clear, nothing in her mouth, magnesium sulfate per protocol. Send the aide and junior to Room 1 with clear orders — rub the uterus, empty the bladder, give oxytocics — because active PPH is the next fastest killer. Room 2 gets a delegated action now: turn the mother, stop oxytocin if running, with theatre preparation for the arriving doctor. You sequenced by speed of death and by what only you could do.",
      },
      {
        type: "memory_trick",
        body: "SHOUT, then A-B-B-P: Airway first, Blood second, Baby third, Paperwork last. And when you delegate, name the person, name the task, and make them report back.",
      },
      {
        type: "summary",
        body: "- Prioritise by speed of death and by what your personal hands change: airway, then bleeding, then the fetus.\n- Shout for help before anything else — summoning the team is the highest-yield action you own.\n- Treat while you assess; never finish assessing before starting treatment.\n- Delegate by name with a closed loop — vague requests are wishes, not instructions.\n- The quiet, pale woman outranks the loud one: silence in shock is a red flag.",
      },
    ],
    questions: [
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are alone when three emergencies start at once: a convulsion, heavy postpartum bleeding, and late decelerations on the CTG. What is your first action?",
        options: [
          "Shout for help and state clearly what you need — doctor, theatre, extra hands",
          "Run to the CTG machine to assess the fetal heart in detail",
          "Begin documentation, since accurate notes protect everyone",
          "Assess all three patients fully before intervening in any of them",
        ],
        correctIndex: 0,
        explanation:
          "Summoning the team multiplies the hands available and starts the longer chain (theatre, blood, transport) moving. It costs seconds and changes everything downstream.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which order reflects sound triage reasoning when a convulsing woman, an active PPH and a pathological CTG occur together?",
        options: [
          "CTG first, since fetal death is irreversible; then convulsion; then PPH",
          "Convulsion first, then PPH, then the compromised fetus — ranked by speed of death and by what your presence changes",
          "PPH first in all cases, because bleeding is always the commonest emergency",
          "Deal with whichever family is loudest, to keep the ward calm",
        ],
        correctIndex: 2,
        explanation:
          "The convulsion threatens the airway within minutes, uncontrolled PPH kills within the hour, and fetal compromise can usually be bridged with delegated actions while the team assembles. Speed of death sets the order.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes 'someone call the registrar' an ineffective instruction during a crisis?",
        options: [
          "It is too polite for an emergency",
          "It assigns no named person, sets no closed loop, and assumes the task will be noticed — often nobody acts",
          "Registrars should only be called by students",
          "It wastes time that could be spent on documentation",
        ],
        correctIndex: 1,
        explanation:
          "Diffuse responsibility is a known team killer in emergencies. Naming a person, stating the task and requiring a report back creates a closed loop — the task is verifiably done.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Prioritisation",
        front: "Give the A-B-B-P order for simultaneous maternity emergencies.",
        back: "Airway (convulsion) first, Blood (uncontrolled haemorrhage) second, Baby (fetal compromise) third, Paperwork last — after shouting for help, which always comes first.",
      },
      {
        topic: "Prioritisation",
        front: "What does 'treat while you assess' mean?",
        back: "Start treatment the moment danger is suspected rather than completing a full assessment first — rub the uterus while counting the pulse, give oxygen while taking respirations.",
      },
      {
        topic: "Prioritisation",
        front: "What are the two ingredients of closed-loop delegation?",
        back: "Name the person and the task ('Sister, call the registrar now'), and require a report back ('come and tell me he is coming') — so the task is verifiably done, not assumed.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Complex Care Integration",
    lessonTitle: "Managing Complex Cases",
    description:
      "The mother whose complications stack up — anaemia, old scars, distance and blood pressure all at once — and how to hold the whole picture together.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how multiple risk factors interact rather than simply add up in a complex pregnancy.",
      "Explain the value of a single problem list, a single coordinator and a single plan in complex care.",
      "Apply an individualised care plan to a Ghanaian woman with stacked complications, including where she should birth.",
    ],
    tags: ["complex care", "integration", "care planning", "high risk", "case management"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some women arrive with one problem. Others arrive with a queue: a previous caesarean scar, a haemoglobin of 8.5, blood pressure creeping up, five previous births, and a three-hour tro-tro ride to your facility. Managing complexity is not managing each problem well side by side — it is managing their conversation.\n\nThis lesson is about integration: one story, one plan, one person holding it together — the difference between a woman 'known to be high risk' and a woman whose every danger has been thought through before the night it happens.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Complications **multiply** risk rather than add it. A scarred uterus plus grand multiparity plus anaemia is not three small worries — the scar is more likely to give way, she tolerates bleeding worse, and she has less reserve to survive it. Complex care therefore starts with a **single written problem list** naming each condition and what it does to the others, from which grows one plan with a **named coordinator** — usually you — who carries it to everyone: the woman, the referral hospital, the anaesthetist, the blood bank.\n\nThe plan works by **anticipation**: for each problem ask what could go wrong tonight, next week, at term — and where she must be when it does. A woman with a repaired ruptured uterus should never labour far from a theatre; severe anaemia needs iron now and a crossmatch plan for later. Write the plan where everyone can see it — her booklet, the referral letter, the ward board — and rehearse it in plain language: who decides at 2 am, and how the transport will be paid.",
      },
      {
        type: "clinical_pearl",
        body: "Complexity multiplies faster than it adds. When the second serious problem arrives on the same notes, the risk of the first one turning fatal has already grown — that is the moment to escalate, not when the pulse rises.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 39-year-old G6P5 books at your district hospital at 14 weeks. Her notes read: previous caesarean for obstructed labour, postpartum haemorrhage at her last birth requiring transfusion, haemoglobin 8.9, blood pressure 148/94, breech at the current visit is possible, and she lives three hours away by road with no phone credit for emergencies.\n\nWhat are the elements of a safe integrated plan for her?\n\nAnswer: One written problem list: uterine scar, previous PPH, anaemia, possible chronic hypertension, distance. Then one plan: iron now for the anaemia; investigate and manage the pressure; birth at the regional hospital — not your district — because the scar, the bleeding history and the possible breech all point to caesarean with blood on standby; anaesthetic review in the third trimester with a crossmatch plan; a maternity waiting home near term so distance cannot strand her; the danger signs taught to her and her husband. One coordinator — you — carries the plan so no thread is dropped.",
      },
      {
        type: "memory_trick",
        body: "The FOUR ONES: ONE list of problems, ONE plan everyone can see, ONE coordinator who owns it, ONE story told back to the woman in her own language.",
      },
      {
        type: "summary",
        body: "- Complications interact and multiply risk; a single problem list exposes those interactions.\n- Complex care needs one written plan, one named coordinator and anticipation of what could go wrong at each stage.\n- Where she births is a complexity decision: blood, theatre and senior skills must match her danger list.\n- The woman is part of the team — rehearse the plan with her and the 2 am decision-maker, in plain language.",
      },
    ],
    questions: [
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a woman with both a previous caesarean scar and severe anaemia at far greater risk than either problem alone suggests?",
        options: [
          "Anaemia weakens the scar directly and speeds up labour",
          "The two problems require conflicting treatments, so care has to be delayed",
          "If the scar ruptures she bleeds faster, and with severe anaemia she has less reserve to tolerate the blood loss — the risks multiply",
          "It is not; risk simply adds up, and two moderate risks equal one high risk",
        ],
        correctIndex: 1,
        explanation:
          "Risk factors interact: haemorrhage from scar rupture on top of a low haemoglobin decompensates far earlier, and her capacity to survive blood loss is already reduced. Complexity multiplies rather than adds.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of arrangements best shows integrated complex care for the woman with a scarred uterus, previous PPH and a three-hour distance to hospital?",
        options: [
          "Routine antenatal contacts with advice to come in quickly if anything feels wrong",
          "A single problem list, a written plan in her booklet, birth planned at a theatre-equipped facility, a crossmatch strategy and a maternity waiting home near term",
          "Serial haemoglobin checks to confirm the anaemia is improving before planning anything else",
          "Immediate referral letter to the teaching hospital for the whole pregnancy and birth",
        ],
        correctIndex: 3,
        explanation:
          "Integration means the plan connects the problems: birth where blood and theatre live, the anaemia treated, the distance solved by a waiting home, and one written plan carried by the woman. The other options treat one thread and drop the rest.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the role of the named coordinator in complex care?",
        options: [
          "To perform all the specialist procedures personally",
          "To hold the single plan, communicate it to every level — woman, clinic, referral hospital, blood bank — and make sure no thread is dropped",
          "To replace the woman's own decision-making during labour",
          "To take legal responsibility so other staff can step back",
        ],
        correctIndex: 2,
        explanation:
          "The coordinator owns communication and continuity — the commonest failure point when many teams touch one complex woman. The clinical tasks still belong to the specialists; the joining-up belongs to the coordinator.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Complex Care",
        front: "What are the FOUR ONES of managing a complex case?",
        back: "One problem list, one plan everyone can see, one coordinator who owns it, and one story told back to the woman and her family in plain language.",
      },
      {
        topic: "Complex Care",
        front: "Why do complications multiply rather than add?",
        back: "Because they interact: scar rupture plus anaemia means faster decompensation and less reserve; each condition changes how dangerous the others are.",
      },
      {
        topic: "Complex Care",
        front: "What anticipation question drives the complex birth plan?",
        back: "For every problem on the list: what could go wrong tonight, next week, at term — and where must she be when it does? Then plan blood, theatre, transport and waiting home accordingly.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition at GHS Reproductive and Child Health Department.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Chapters on risk assessment and referral. Verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Complex Care Integration",
    lessonTitle: "Multidisciplinary Teamwork in Maternity",
    description:
      "Obstetricians, anaesthetists, neonatologists, labs and midwives — how the full team actually works when the emergency alarm goes.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core roles of the maternity multidisciplinary team during an obstetric emergency.",
      "Explain shared mental model, closed-loop communication and psychological safety in team performance.",
      "Apply structured speaking-up language (CUS) when you are the most junior person who sees the danger first.",
    ],
    tags: ["teamwork", "mdt", "communication", "safety", "leadership"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When the alarm sounds for an eclamptic fit, the people who arrive hold different skills: the midwife who knows the woman, the obstetrician who decides delivery, the anaesthetist who protects her airway, the paediatric team for the baby, the lab and blood bank behind them all. None of them can save her alone — the team is the treatment.\n\nThis lesson is about how such teams work: who does what, how they talk, and how you — often the most junior voice in the room — speak up when you see something others have missed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "High-performing teams build a **shared mental model**: the plan is said out loud — 'we are stabilising her, then caesarean in twenty minutes.' They talk in **closed loops**: instructions repeated back and confirmed done. Roles are assigned by name, because tasks without names are tasks without owners. A **brief** before high-risk work ('previous rupture, group and screen done, theatre on standby') and a **debrief** after every emergency turn each crisis into rehearsal for the next.\n\nThe quiet engine is **psychological safety** — the shared belief that anyone can raise a concern without punishment. You, at the bedside, often hold information the registrar does not: the pressure you watched climb, the bleeding the swabs show. Use graded assertive language (CUS): 'I'm **C**oncerned about this bleeding'; 'I'm **U**ncomfortable continuing'; 'this is a **S**afety issue — I need you now.' Hierarchy that silences the junior voice is a hazard, not a tradition.",
      },
      {
        type: "clinical_pearl",
        body: "Say the plan out loud even when everyone 'obviously' knows it — the shared mental model is built by speaking, not by assuming. And the most junior person in the room is often the closest to the monitors and the blood; the team works when they can say so.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 02:00 a woman at 33 weeks convulses in your district hospital. Seven responders crowd in: two midwives, the medical officer, an anaesthetic nurse, the ward aide, a student — you. People begin three conversations at once; nobody has stated a plan and the magnesium is still in the cupboard.\n\nWhat does this team need in its first sixty seconds, and what can you contribute even as the most junior?\n\nAnswer: Sixty seconds buy: a named leader, roles by name — one to give magnesium per protocol, one for the airway and timing, one to run the calls to the regional hospital and blood bank, one scribing — and the plan said aloud: stabilise with magnesium, then prepare delivery. Your contribution is real: you may know her history from triage, you can close the loop on tasks, and you can speak up if her respirations fall after the loading dose — 'I'm concerned, her breathing has slowed, we should check reflexes.'",
      },
      {
        type: "memory_trick",
        body: "B-N-L-D: **B**rief before the risky work, **N**ame the leader and roles, **L**oop every message closed, **D**ebrief after the dust settles. And when you must speak up: C-U-S — Concerned, Uncomfortable, Safety.",
      },
      {
        type: "summary",
        body: "- The emergency team is the treatment: midwife, obstetrician, anaesthetist, neonatal team, lab and blood bank, each with a defined role.\n- A shared mental model is spoken aloud; closed-loop communication makes every instruction verifiably done.\n- Brief before high-risk work and debrief after every emergency — each crisis rehearses the next.\n- Psychological safety lets the most junior person raise the alarm: use CUS — Concerned, Uncomfortable, Safety.",
      },
    ],
    questions: [
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is a shared mental model in an emergency team?",
        options: [
          "A private mental plan each member keeps to themselves",
          "The hospital's written protocol filed in the emergency folder",
          "A common, spoken understanding of the situation and the plan that everyone in the room holds",
          "The shift roster showing who is present that night",
        ],
        correctIndex: 0,
        explanation:
          "A shared mental model means all responders understand the same picture and the same plan — and because minds cannot be read, it is built by saying the plan out loud and confirming it.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are the student at the bedside when the woman's respirations fall to 12 per minute after the magnesium loading dose. The medical officer is busy with the drip. What is your best action?",
        options: [
          "Stay quiet and watch, because interrupting a senior is insubordinate",
          "Reduce the magnesium infusion yourself without telling anyone",
          "Speak up with graded assertive language: 'I'm concerned her breathing has slowed — can we check her reflexes before the next dose?'",
          "Wait for the ward aide to notice and report it on your behalf",
        ],
        correctIndex: 2,
        explanation:
          "The bedside observer often detects deterioration first. Graded assertive language (CUS) states the concern respectfully but unmistakably; silence from the closest watcher is a classic cause of magnesium toxicity going unrecognised.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about the maternity MDT is true?",
        options: [
          "The midwife defers all decisions to the obstetrician, so her knowledge is rarely needed in the emergency",
          "Briefing and debriefing are optional courtesies that delay care",
          "The anaesthetist's main emergency role is airway and haemodynamic support while the obstetrician plans delivery and the midwife holds continuity and the woman's story",
          "Blood bank and laboratory are not considered part of the emergency team",
        ],
        correctIndex: 3,
        explanation:
          "Each role has a distinct emergency function — airway and circulation, delivery decisions, continuity and observation, plus lab and blood bank as essential team members behind the clinicians. Debriefing afterwards converts the crisis into learning.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Teamwork",
        front: "What are the four roles that define an obstetric emergency team's work?",
        back: "Leader (directs and decides), airway/circulation holder (anaesthetist), delivery planner (obstetrician), and the midwife holding continuity, observations and the woman's story — with lab and blood bank behind them.",
      },
      {
        topic: "Teamwork",
        front: "What does CUS stand for?",
        back: "Concerned — Uncomfortable — Safety issue: graded assertive language for speaking up, so a junior voice can stop the line without insult: 'I'm concerned... I'm uncomfortable... this is a safety issue.'",
      },
      {
        topic: "Teamwork",
        front: "Why brief and debrief around obstetric emergencies?",
        back: "The brief sets roles and the plan before the crisis; the debrief after it turns what went wrong into system change — each emergency rehearses the next one.",
      },
    ],
    sources: [
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Working with the multidisciplinary team. Verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Complex Care Integration",
    lessonTitle: "Consultation and Referral: The Professional Conversation",
    description:
      "Calling for help as an expert — concise, structured and persuasive, with the right information at the right time to the right person.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the SBAR structure for a referral or consultation call.",
      "Explain why early referral of a stabilised woman outperforms late referral of a collapsing one.",
      "Apply a complete referral package — call, letter, records, medications given and a timeline of observations.",
    ],
    tags: ["referral", "communication", "sbar", "transfer", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Referral is a clinical skill like palpation or suturing — and in Ghana's tiered system, with district hospitals feeding regional and teaching hospitals, it is one of the most life-saving skills you own. A mumbled, incomplete call leads to a bouncing patient and lost hours. A structured call moves her through the system the same night.\n\nThis lesson trains the professional conversation: deciding when to call, what to say, in what order, and what travels with the woman in the ambulance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Structure your call as **SBAR**. **S**ituation: who you are, where you are calling from, and the one-sentence emergency — 'I am the midwife at Suhum District Hospital; I have a 34-week woman with severe pre-eclampsia.' **B**ackground: the facts that matter — her age, parity, history. **A**ssessment: your findings with numbers — blood pressure, protein, reflexes, urine output. **R**ecommendation: what you are asking for — 'I request acceptance for transfer; I have started the magnesium loading dose per protocol; ambulance ready in thirty minutes.' That last sentence is what makes you a professional colleague rather than a voice with a problem.\n\nTwo principles govern timing. **Refer early with a stable patient** — the woman who arrives talking survives the journey; the one who is transferred as she collapses often arrives as a corpse in transit. And **stabilise before and during transfer**: magnesium running, IV access secured, a trained escort with a clear timeline of observations, and the call made **ahead** so the receiving team prepares blood, theatre or ICU. Send the referral letter, her booklet, the medication record and a written vitals timeline — a woman who travels with her story travels safer.",
      },
      {
        type: "clinical_pearl",
        body: "Refer early with a stable woman, not late with a dying one — and never send a referral note alone: the note travels with her, along with the drugs given, doses, times and a vitals timeline, in the hands of someone who knows the story.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old G2P1 at 34 weeks has a repeat blood pressure of 168/112 with headache and 2+ proteinuria. Your district hospital has no theatre or blood. You have given the magnesium loading dose per protocol. Now you must call the regional hospital's registrar, who is mid-round and impatient.\n\nHow do you open and structure the call?\n\nAnswer: 'Good evening, Doctor. I am Sister Mensah, the midwife at Suhum District. I am referring a 34-week primigravida — sorry, G2P1 — with severe pre-eclampsia.' Background: no medical history, first pregnancy normal. Assessment: BP 168/112 on two readings, headache, 2+ protein, brisk reflexes, magnesium loading given at 19:40, urine output 40 mL in the last hour. Recommendation: 'I request acceptance for transfer; she is stable; ambulance leaves in thirty minutes with an escort; notes, booklet and vitals timeline attached.' Ten structured sentences move her tonight.",
      },
      {
        type: "memory_trick",
        body: "SBAR: Situation — one sentence with your name and the emergency. Background — her story in facts. Assessment — your findings in numbers. Recommendation — your ask, stated as a colleague states it: 'I request...'",
      },
      {
        type: "summary",
        body: "- SBAR (Situation, Background, Assessment, Recommendation) structures every referral call.\n- Recommendation is the expert's paragraph: state what you are asking for and what you have already done.\n- Refer early with a stable woman; stabilise before and during transfer, with a trained escort.\n- Call ahead so the receiving team prepares blood, theatre or ICU; send notes, booklet, drug record and a vitals timeline.",
      },
    ],
    questions: [
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife calls the regional hospital: 'Please, we have a woman here, she is not well, we want to send her to you.' What is the main failure of this call?",
        options: [
          "It is too polite for a professional referral",
          "It gives no identification, no clinical picture, no numbers and no explicit request — the receiver cannot triage or prepare",
          "Referrals should be made by text message, not by phone",
          "It fails because district midwives may not speak to regional registrars directly",
        ],
        correctIndex: 1,
        explanation:
          "The receiving team cannot assign urgency, prepare theatre or blood, or even accept the patient usefully without the situation, findings and a clear request. That structure is exactly what SBAR provides.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR, what belongs in the Recommendation section?",
        options: [
          "The woman's full antenatal history since booking",
          "The laboratory printouts for the last three visits",
          "What you are asking for and what you have already done — acceptance for transfer, what treatment has started, transport timing",
          "A polite apology for disturbing the senior doctor",
        ],
        correctIndex: 0,
        explanation:
          "Recommendation is your professional ask plus actions already taken — 'I request acceptance; magnesium started at 19:40; ambulance ready in thirty minutes.' It is what distinguishes a colleague's call from a cry for help.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which woman is being referred at the right time by the right method?",
        options: [
          "A woman transferred while actively convulsing, with no escort and no treatment record",
          "A woman with rising blood pressure referred only after she collapses, since the receiving hospital 'will manage better'",
          "A woman with severe features and early symptoms, stabilised on magnesium with IV access, escorted with a written vitals timeline, after a call ahead to the accepting registrar",
          "A stable woman sent home to pack, to travel by public transport tomorrow morning",
        ],
        correctIndex: 2,
        explanation:
          "Early referral of the stabilised woman, treatment running, escort and records present, receiving team warned — this package survives the journey. Convulsing or collapsing transfers and 'come tomorrow' instructions are how distance becomes death.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Referral",
        front: "What are the four SBAR elements?",
        back: "Situation (who and the one-sentence emergency), Background (relevant history), Assessment (findings with numbers), Recommendation (what you request and what you have already done).",
      },
      {
        topic: "Referral",
        front: "Why is 'refer early with a stable patient' the golden rule of transfer?",
        back: "The woman who arrives talking survives the journey; deterioration during transfer — without blood, theatre or ICU — converts a treatable problem into a death. Stabilise, then move.",
      },
      {
        topic: "Referral",
        front: "What should travel with every referred woman?",
        back: "Referral letter, antenatal booklet, medication record with doses and times, a written vitals timeline — and a trained escort who knows the story, after a call ahead to the receiving team.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Referral protocols for district and regional levels. Verify current edition.",
      },
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Leading at the Bedside",
    lessonTitle: "Leadership in Clinical Practice",
    description:
      "Leading the room when it matters — directing, delegating and staying calm when the emergency finds you first.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the specific behaviours of an effective emergency team leader.",
      "Explain why the leader's hands stay empty and the plan is spoken aloud.",
      "Apply leadership behaviours to a cord prolapse scenario as the senior clinician present.",
    ],
    tags: ["leadership", "practice", "emergency", "delegation", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Leadership in maternity is not a rank on your collar — it is a set of behaviours a room needs when things go wrong. On many Ghanaian night shifts the most senior person at the bedside is the midwife. The team takes its calm from whoever leads it, and leading can be learned.\n\nThis lesson looks at what a good emergency leader actually does in the first minutes: how they stand, how they speak, what they refuse to do with their own hands, and how they hand the room back afterwards.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The leader's first duty is to **stay out of the task work**: hands full of a syringe cannot point at the next problem. The leader stands where the whole room is visible and keeps the **big picture** — what is happening now, what happens next, what goes wrong in ten minutes. They **allocate by name with closed loops** ('Nurse Adjoa, ring theatre, come back and confirm'), keep **one voice at a time**, and use a low, unhurried tone — a team copies its leader's voice the way water copies the wind.\n\nThe leader **says the plan aloud** and stamps it with time: 'Plan is emergency caesarean; we should be in theatre by 07:35.' A scribe records times and events. When new information arrives, the leader re-plans aloud, saying what has changed. Afterwards, a two-minute **debrief** — what went well, what we do differently — closes the loop. Leadership may rotate between emergencies, but only one person leads at a time; two leaders are none.",
      },
      {
        type: "clinical_pearl",
        body: "The leader's hands should be the emptiest in the room. If you are the one filling the syringe, nobody is watching the whole picture — and the whole picture is the leader's real job.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 07:10 on your final placement, the cord prolapses during a vaginal examination on a woman at 6 cm with a breech. Two junior midwives freeze; the medical officer is doing the ward round upstairs; a nurse aide starts crying. You are the senior person present.\n\nWhat do you do in the next two minutes?\n\nAnswer: Announce yourself leader aloud: 'I am leading until the doctor comes.' Keep the presenting part off the cord — yourself or one named helper, mother head-down in knee-to-chest; this is the single most fetal-life-preserving action. Delegate by name: one to call the medical officer and theatre team, one for IV access and tocolysis per protocol, the aide to comfort the woman. Say the plan with a time: 'Emergency caesarean; moving by 07:25.' Keep your voice low and your hands mostly empty; brief the arriving doctor in two sentences, then debrief.",
      },
      {
        type: "memory_trick",
        body: "A leader keeps EYES ON THE WHOLE ROOM, NOT THE HOLE IN IT — hands empty, names given, one voice, plan spoken with a time on it, and a debrief to close.",
      },
      {
        type: "summary",
        body: "- Leadership is behaviour, not rank; the most senior person present owns it, and only one person leads at a time.\n- The leader's hands stay empty: watching the whole picture beats doing any single task.\n- Allocate by name with closed loops; keep one voice and a low, unhurried tone.\n- Say the plan aloud with a time attached; re-plan aloud when the picture changes.\n- Two minutes of debrief after every emergency turns panic into rehearsal.",
      },
    ],
    questions: [
      {
        topic: "Leadership",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a postpartum haemorrhage, the most senior midwife starts suturing the tear herself while shouting instructions. What has gone wrong with her leadership?",
        options: [
          "Nothing — the most experienced hands should do the most skilled task",
          "She has not called the doctor, which is mandatory before any suturing",
          "Her hands are no longer free, so nobody is watching the whole picture, allocating roles or re-planning as the bleeding evolves",
          "She should have delegated the shouting instead of the suturing",
        ],
        correctIndex: 2,
        explanation:
          "Once the leader is absorbed in a manual task, the team loses its coordinator: no big picture, no re-planning, no visible calm. Skilled tasks are delegated or swapped; leadership is the role that cannot be delegated.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Leadership",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of statements is characteristic of an effective emergency leader?",
        options: [
          "Gives tasks to 'someone', works silently, and waits for the plan to become obvious",
          "Allocates by name with closed loops, speaks the plan aloud with a time, keeps one voice going and their own hands free",
          "Assigns blame quickly so the team learns, then continues the shift without discussion",
          "Leads the loudest, takes over all technical tasks, and avoids delegating to juniors",
        ],
        correctIndex: 3,
        explanation:
          "Name-task-loop delegation, a spoken, time-stamped plan, one calm voice and empty leader hands are the core behaviours — they build the shared mental model and keep the leader in the coordinating role.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Leadership",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does a leader announce the plan aloud with a time attached, e.g. 'we should be in theatre by 07:25'?",
        options: [
          "To comply with documentation rules about verbal orders",
          "So that every team member shares one mental model and can notice if progress falls behind the stated clock",
          "To reassure the family waiting outside",
          "Because the scribe cannot write without a stated time",
        ],
        correctIndex: 1,
        explanation:
          "The spoken, time-stamped plan builds the shared mental model and creates a visible yardstick: if 07:25 comes and the team is still in the room, everyone knows escalation is needed without anyone having to ask.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Leadership",
        front: "What are the core behaviours of an emergency team leader?",
        back: "Hands empty, eyes on the whole room; allocate by name with closed loops; one voice, low and unhurried; plan spoken aloud with a time; re-plan aloud when the picture changes; debrief afterwards.",
      },
      {
        topic: "Leadership",
        front: "Why must the leader's hands stay empty in a crisis?",
        back: "Hands full of a task cannot direct the next one — a leader absorbed in a syringe has stopped watching the whole picture, which is the leadership job nobody else holds.",
      },
      {
        topic: "Leadership",
        front: "How many leaders should an emergency have, and why?",
        back: "Exactly one — two leaders are none. Leadership can rotate between emergencies, but at any moment the room needs one voice, one plan and one owner of the big picture.",
      },
    ],
    sources: [
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
      },
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Good Practice Series: Leadership in Obstetric Emergencies",
        note: "Verify current edition on the RCOG website.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Professional issues: leading care. Verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-midwifery-practice",
    moduleTitle: "Leading at the Bedside",
    lessonTitle: "Documentation and Communication at Expert Level",
    description:
      "Your notes as clinical instruments — writing that the next team acts on, the audit trusts and the courtroom reads fairly.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what separates expert-level clinical notes from ordinary notes.",
      "Explain the legal and clinical weight of contemporaneous, objective, time-stamped records.",
      "Apply a structured entry format to a complicated birth so the timeline can be reconstructed without you.",
    ],
    tags: ["documentation", "communication", "record keeping", "legal", "handover"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "By now you write notes every shift. The question this lesson asks is sharper: do your notes work as clinical instruments? Are they written so that the team taking over at 20:00 can act instantly, the audit committee can reconstruct events, and a court — if it ever comes to that — finds fairness and fact?\n\nIn your final year, documentation graduates from a chore to a clinical skill. The difference between 'lochia moderate' and a timed, quantified, signed observation is sometimes the difference between a sepsis caught at day one and a death audited at month's end.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Expert notes are **contemporaneous** — written at the bedside or immediately after, never reconstructed at shift end. They carry a **timeline**: each event with its time — when the fetal heart decelerated, when you called, when help arrived, when the baby was born. They record **what was observed, what was done, and what was said**: conversations that matter are quoted verbatim in quotation marks ('she refuses blood transfusion on religious grounds'), with the witness present. Every escalation entry names **who** was informed and **when**.\n\nThe expert register is **objective and neutral**: 'fundus soft, bled 400 mL estimated by weighing' — never 'patient being difficult'. Opinion belongs to assessments, not to descriptions. Remember the two readers you never meet: the next clinician at 02:00, who needs action-ready facts, and the woman herself, who has a right to read what was written about her. Sign, print your name, and give your designation — an unsigned note is legally no note at all.",
      },
      {
        type: "clinical_pearl",
        body: "Write so that a stranger can rebuild the timeline without you — and remember the woman may one day read it. Facts written kindly at 03:00 protect both her and you at 15:00 in a courtroom.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A shoulder dystocia occurred on your shift. The manoeuvres worked; the baby cried after thirty seconds of airway support and was examined by the paediatric team. Two weeks later the case is selected for the perinatal audit meeting, and the chair reads your entry aloud: 'Difficulty with shoulders. Help called. Baby fine.'\n\nWhat must a defensible, useful entry for this event contain?\n\nAnswer: The timeline first: time of head birth and time of body birth — the head-to-body interval is the number audits and courts look for. Then the call: who was called, at what time, who attended. The manoeuvres in the order used (McRoberts, suprapubic pressure, then internal rotation) and the result of each. The baby's condition: Apgar scores, resuscitation given, cord gases if taken, who examined the baby and when. The parents' debrief: that you explained what happened, in what words, and their questions. Sign, print, designation. Written that way, the note teaches the audit; written vaguely, it teaches nothing and protects no one.",
      },
      {
        type: "memory_trick",
        body: "NOTE: **N**eutral language, **O**bserved facts and quotes, **T**imes on every event, **E**very hand signed with name and designation. If it is not written down, it was not done.",
      },
      {
        type: "summary",
        body: "- Expert notes are contemporaneous, time-stamped and reconstructable by a stranger without you.\n- Record what was observed, done and said — important conversations quoted verbatim, escalations named and timed.\n- Keep language neutral and objective; opinion belongs to assessments, not descriptions.\n- Sign, print and designate — an unsigned entry is legally invisible.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What makes a clinical record contemporaneous?",
        options: [
          "It is countersigned by the doctor on duty",
          "It is written at the time of the events or immediately afterwards, at the bedside rather than reconstructed later",
          "It is written in the hospital's approved format",
          "It contains the woman's full name and folder number",
        ],
        correctIndex: 0,
        explanation:
          "Contemporaneous means written as events happen or immediately after — memory fades within hours, and notes reconstructed at shift end lose exactly the details audits and courts need most.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman refuses a recommended blood transfusion. Which is the best note entry?",
        options: [
          "Refused transfusion. Doctor informed.",
          "Patient uncooperative regarding blood; will hold her responsible if anything happens",
          "At 21:15, with her husband and Sister Yaro present, she declined transfusion, stating 'I cannot accept blood on religious grounds.' Risks of refusing explained in Twi; she repeated her refusal and understood. Dr Mensah informed 21:20.",
          "Advice given about blood; family resisting; suggest they talk to her pastor",
        ],
        correctIndex: 1,
        explanation:
          "The strong entry quotes her words verbatim, times the event, names witnesses, records the information given and her demonstrated understanding, and names who was informed — it is factual, respectful and reconstructable.",
        courseSlug: "advanced-midwifery-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the head-to-body interval a mandatory fact in shoulder dystocia notes?",
        options: [
          "Because the hospital needs it for billing purposes",
          "Because the length of the interval predicts the baby's risk of hypoxic injury, and it is the number that audits and legal review look for",
          "Because it determines which midwife documents the birth",
          "Because maternity statistics require all intervals to be recorded",
        ],
        correctIndex: 3,
        explanation:
          "In shoulder dystocia the clock between head and body delivery is the measure of asphyxia risk. Without it, no reviewer can judge whether delay occurred — which is precisely why vague notes fail the audit.",
        courseSlug: "advanced-midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "What does NOTE stand for in expert record keeping?",
        back: "Neutral language, Observed facts (with important speech quoted verbatim), Times on every event, Every entry signed with printed name and designation.",
      },
      {
        topic: "Documentation",
        front: "What must an escalation entry always contain?",
        back: "Who was informed, by what method, and at what time — plus what you were advised and what you did next.",
      },
      {
        topic: "Documentation",
        front: "Which number must always appear in shoulder dystocia documentation?",
        back: "The head-to-body delivery interval with times — the key measure of asphyxia risk and the first thing auditors and courts look for.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives and Nurses",
        note: "Standards for records and accountability. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Record keeping and legal aspects of midwifery. Verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Recognising Risk Early",
    lessonTitle: "What Makes a Pregnancy High-Risk?",
    description:
      "Risk factors you can spot before conception and at booking — the assessment that quietly changes everything about her care.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three time-frames of risk assessment — before pregnancy, at booking, and along the way.",
      "Explain why a risk factor is a reason to prepare rather than a prediction of disaster.",
      "Apply a structured booking assessment to identify which women need an altered pathway from the start.",
    ],
    tags: ["risk factors", "assessment", "booking", "preconception", "high risk"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'High risk' is not a prophecy — it is a traffic signal. It changes where a woman births, who reviews her, how often she is seen and what the team prepares for. The whole skill is spotting the signal early, ideally before the pregnancy even starts.\n\nThis lesson organises risk into three time-frames and trains your booking assessment so that the woman who needs a different pathway is identified at her first contact — not at her first emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Risk from **before** the pregnancy: age under 18 or over 35, grand multiparity (five or more births), chronic hypertension, diabetes or kidney disease, severe anaemia, heart disease, HIV, Rhesus-negative blood, epilepsy, and the powerful obstetric history — previous caesarean, pre-eclampsia, PPH, stillbirth, three or more miscarriages, or a repaired ruptured uterus. Risk **of** this pregnancy: twins, pre-eclampsia, antepartum haemorrhage, malpresentation after 36 weeks, growth restriction, severe malaria, anaemia. Risk **along the way**: the pregnancy that was normal at booking but develops a rising blood pressure at 28 weeks or reduced movements at 36 — risk is dynamic, so every antenatal contact is a re-assessment.\n\nHold the balance carefully. The label 'high risk' means prepare, not panic — most labelled women birth normally and safely. But never let the label lull you either: prepared teams survive the complications that unprepared teams discover. At booking, the risk screen decides her pathway: which facility, which frequency, which tests, which senior eyes.",
      },
      {
        type: "clinical_pearl",
        body: "A risk factor is a reason to prepare, never a prediction of disaster — but 'low risk' is not a destination either. Reassess at every contact; the pregnancy that changes class at 30 weeks does not announce it politely.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 37-year-old G5P4 attends your clinic hoping to conceive again. Her history: caesarean for obstructed labour nine years ago, then three vaginal births; a transfusion after her last delivery for haemorrhage; she mentions her blood pressure has 'sometimes been high' at market screenings. Her haemoglobin today is 10.2 g/dL.\n\nWhich risk factors are already on the table, and what do you advise before she conceives?\n\nAnswer: Before pregnancy she carries five flags: age over 35, grand multiparity (para 4 becoming 5), a uterine scar, a previous PPH with transfusion, and possible chronic hypertension — plus borderline anaemia. Preconception advice: check blood pressure properly and treat if confirmed; start iron and improve diet to build her haemoglobin now; test glucose; plan antenatal care at a facility with theatre and blood once she conceives, booked early; and agree a family planning method until she is ready. Every one of these problems is easier to fix before conception than during pregnancy.",
      },
      {
        type: "memory_trick",
        body: "BEFORE — DURING — ALONG: risks she brings from before, risks of this pregnancy, and risks that join along the way. Reassess at every contact, because risk is a traveller.",
      },
      {
        type: "summary",
        body: "- Risk is a traffic signal, not a prophecy — it changes pathway, place and preparation.\n- Risk before pregnancy includes age, parity, chronic disease, anaemia and the obstetric history.\n- Risk of this pregnancy includes multiples, pre-eclampsia, bleeding, malpresentation and growth problems.\n- Risk is dynamic: reassess at every contact; a 'low risk' booking can be a high-risk third trimester.",
      },
    ],
    questions: [
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman's booking history shows: age 37, para 4, previous caesarean, previous PPH requiring transfusion. What does this combination mean for her care?",
        options: [
          "She should be discouraged from further pregnancy entirely",
          "She is low risk because she has since had vaginal births after the caesarean",
          "She needs a high-risk pathway from booking: senior review, theatre-capable facility for birth, blood availability planning and anaemia correction",
          "Only the previous caesarean matters; the other factors can be ignored if she feels well",
        ],
        correctIndex: 2,
        explanation:
          "Stacked risk factors — age, grand multiparity, scar, bleeding history — trigger an altered pathway from the start: where she births, who reviews her and what is prepared. The factors interact; they do not cancel.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is risk assessment repeated at every antenatal contact rather than only at booking?",
        options: [
          "Because women forget their history between visits",
          "To fill the required forms of the maternity register",
          "Because risk is dynamic — problems like pre-eclampsia, growth restriction and anaemia appear along the way and change her class",
          "Because the midwife on duty changes each week",
        ],
        correctIndex: 0,
        explanation:
          "A woman can be entirely normal at booking and develop the next complication weeks later. Risk re-assessment at each contact is how the pathway changes before the emergency does.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding at booking most strongly signals that this woman should not deliver at a CHPS compound?",
        options: [
          "First pregnancy at age 22 with haemoglobin 11.5",
          "Mild nausea controlled by diet",
          "Previous ruptured uterus repaired at laparotomy",
          "One previous miscarriage at eight weeks, now well",
        ],
        correctIndex: 3,
        explanation:
          "A repaired ruptured uterus is at high risk of recurrence — catastrophic, sudden and surgical. She needs a facility with immediate theatre and blood from the earliest planning conversation. The other findings are compatible with community-level care.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Risk Assessment",
        front: "Name the three time-frames of risk.",
        back: "Before the pregnancy (age, parity, chronic disease, obstetric history), of this pregnancy (twins, pre-eclampsia, bleeding, growth), and along the way (new findings at any contact).",
      },
      {
        topic: "Risk Assessment",
        front: "What does 'risk is a traffic signal, not a prophecy' mean in practice?",
        back: "A high-risk label changes pathway, place of birth, frequency and preparation — it does not assume disaster. Most labelled women birth normally, but prepared teams survive what unprepared teams discover.",
      },
      {
        topic: "Risk Assessment",
        front: "List five powerful 'before pregnancy' risk factors.",
        back: "Age over 35 or under 18; grand multiparity (para 5+); chronic hypertension or diabetes; previous caesarean or ruptured uterus; previous PPH, stillbirth or recurrent miscarriage.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Risk categorisation and referral criteria. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Recognising Risk Early",
    lessonTitle: "The High-Risk Care Pathway and Team",
    description:
      "What actually changes when risk is flagged — more watching, different specialists, and a birth planned where the right help already lives.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the concrete changes a high-risk flag makes to surveillance, specialty input and place of birth.",
      "Explain the roles of the specialists around a high-risk pregnancy and who coordinates them.",
      "Apply pathway thinking to plan care for a woman with twins after two caesareans.",
    ],
    tags: ["care pathway", "surveillance", "high risk", "referral", "birth planning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When the risk screen lights up, something concrete has to change — otherwise the label is decoration. A high-risk pathway is the set of changes that follow: how often she is seen, which tests run on a schedule, which specialists join, and where the birth is planned.\n\nIn Ghana this is a geography question as much as a clinical one: the right help must already be close when the emergency comes, because the emergency will not wait for a three-hour ambulance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Surveillance intensifies along the danger: blood pressure and urine more often, growth scans every two to four weeks for a lagging fetus, umbilical artery doppler when growth falters, haemoglobin re-checked for the anaemic woman, specialised tests for medical conditions (HbA1c, renal function, viral load). **Specialists join early** — the obstetrician for surgical decisions, the physician for medical disease, the anaesthetist reviewing a scarred abdomen in the third trimester, the neonatal team warned in advance, the blood bank holding a plan. One **named coordinator** — often the senior midwife — keeps it all moving between levels.\n\nThe **place of birth** is the pathway's anchor: it must match her danger list. Placenta praevia after two caesareans needs a regional hospital with theatre, blood and ICU capability — arranging that at 32 weeks is the pathway working; discovering it at 03:00 with bleeding is the pathway failed. Her individualised plan travels in the booklet she carries, in plain language.",
      },
      {
        type: "clinical_pearl",
        body: "The pathway's weakest link is usually the woman's understanding of it. She should be able to say, in her own words, where she will birth, why, which signs mean 'go now', and who travels with her — a plan she cannot recite is a plan that does not exist.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 31-year-old with two previous caesareans is found to have twins at her 20-week scan at your district facility. Your theatre functions, but there is no blood bank and the neonatal unit manages only well babies.\n\nWhat does her pathway look like from here?\n\nAnswer: The danger list is surgical (two scars plus twins), haemorrhagic (twins over-distend the uterus — high PPH risk) and neonatal (twins are often early and small). The pathway: transfer antenatal care to the regional hospital; growth scans of both twins every three to four weeks; anaesthetic review in the third trimester; crossmatch and transfusion plan with the regional blood bank; paediatric team briefed; maternity waiting home near term so distance cannot separate her from the theatre; a written plan with danger signs that she and her husband can recite. The district clinic stays in the loop until the handover is complete.",
      },
      {
        type: "memory_trick",
        body: "The pathway changes four things: WATCH more (extra visits and scans), INVITE more specialists, BIRTH WHERE THE HELP LIVES, and WRITE the plan where the woman carries it.",
      },
      {
        type: "summary",
        body: "- A high-risk flag must produce visible change: extra surveillance, scheduled tests and named specialists.\n- The team grows deliberately — obstetrician, physician, anaesthetist, neonatal team, blood bank — under one named coordinator.\n- Place of birth is the anchor: theatre, blood and neonatal capability must match her danger list, arranged in advance.\n- The plan lives in her booklet in plain words, with danger signs and a named facility — a plan she cannot recite does not exist.",
      },
    ],
    questions: [
      {
        topic: "Care Pathway",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with twins after two caesareans is being planned. Which arrangement reflects pathway thinking rather than wishful thinking?",
        options: [
          "Continue district antenatal care and see how the pregnancy goes before deciding anything",
          "Book a home birth with the CHPS midwife on standby for transfer",
          "Regional-hospital birth planned, third-trimester anaesthetic review, crossmatch plan with the blood bank, neonatal team briefed, waiting home near term, written plan in her booklet",
          "Wait for labour to start, then refer to whichever hospital has space that day",
        ],
        correctIndex: 1,
        explanation:
          "The pathway pre-arranges the three things her danger list demands — theatre, blood and neonatal care — plus distance solved and a written plan. Deciding 'on the day' is how pathway failure looks in audits.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Care Pathway",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the anchor of a high-risk care pathway?",
        options: [
          "The booking blood test results",
          "The chosen place of birth, matched to her danger list and arranged in advance",
          "The number of antenatal visits scheduled",
          "The referral letter to the regional hospital",
        ],
        correctIndex: 3,
        explanation:
          "Visits and tests feed the decision, but where she births — with theatre, blood and neonatal capability matched to her risks — is the anchor that determines whether an emergency at 03:00 is survivable.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Care Pathway",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Who typically coordinates a high-risk pathway across clinic, referral hospital and community in the Ghanaian system?",
        options: [
          "The woman's husband, as head of the household",
          "The regional hospital's medical director",
          "A named senior midwife who holds the plan, communicates between levels and follows the woman through",
          "Whoever is on duty at each contact — responsibility rotates with the shift",
        ],
        correctIndex: 0,
        explanation:
          "A named coordinator (commonly the senior midwife) keeps the plan moving between the levels and is answerable for continuity; 'whoever is on duty' is how women fall between services.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Care Pathway",
        front: "What four things change when a pregnancy is flagged high-risk?",
        back: "Watch more (extra visits, scheduled scans and tests), invite more specialists, birth where the help lives (facility matched to her dangers), and write the plan in the booklet she carries.",
      },
      {
        topic: "Care Pathway",
        front: "Why is place of birth the anchor of the pathway?",
        back: "Because emergencies at 03:00 are survived by proximity: theatre, blood and neonatal care must already be close. Arranging that at 32 weeks is the pathway working; discovering its absence during haemorrhage is failure.",
      },
      {
        topic: "Care Pathway",
        front: "What is the pathway's weakest link, and how do you test it?",
        back: "The woman's own understanding. Test by teach-back: she should say in her own words where she births, why, which signs mean 'go now', and who travels with her.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Levels of care and referral pathways. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Hypertensive Crises",
    lessonTitle: "Severe Pre-eclampsia and Severe Hypertension",
    description:
      "When blood pressure threatens — recognition, magnesium, and the decisions that time the birth of two patients.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe severe hypertension and severe pre-eclampsia, including severe features at lower blood pressures.",
      "Explain the roles of magnesium sulfate and antihypertensive treatment, and the monitoring they demand.",
      "Apply the first hour of management to a woman presenting with severe features at 34 weeks.",
    ],
    tags: ["pre-eclampsia", "hypertension", "magnesium sulfate", "hellp", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pre-eclampsia becomes an emergency when it turns severe — and 'severe' is not only about the number on the cuff. A woman at 150/100 with platelets crashing and epigastric pain is in more danger than one at 165/112 who feels well. This lesson covers recognition of severity, magnesium, the blood pressure itself, and the timing of birth.\n\nThe midwife role is central here: you find her first, and your monitoring guides the clock.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Severe hypertension** is 160/110 or above, confirmed with a repeat reading. **Severe pre-eclampsia** means severe hypertension, or any BP with proteinuria plus **severe features**: severe headache, visual disturbance, epigastric or right-upper-quadrant pain, clonus, oliguria, low platelets, raised liver enzymes — the HELLP combination of **h**aemolysis, **e**levated **l**iver enzymes, **l**ow **p**latelets. This is a multi-organ disease: kidneys, liver, brain and clotting are all targets, which is why repeated blood pressure alone cannot monitor her.\n\nManagement stands on three legs. **Magnesium sulfate** for seizure prophylaxis: 4 g IV slowly over 5–10 minutes, then maintenance per your unit's protocol, with the safety triad of reflexes present, respirations at least 16 per minute and urine flowing; calcium gluconate is the antidote. **Antihypertensive therapy** to bring the severe range down within hours — IV labetalol or hydralazine, or oral nifedipine — aiming below 160/110, not down to normal. **Timing of birth**: at 37 weeks or more, deliver; at 34 weeks or beyond with severe features, birth after stabilisation; before 34 weeks, expectant care only in a capable unit with a stable mother and reassuring fetus. Corticosteroids cover fetal lungs below 34 weeks.",
      },
      {
        type: "clinical_pearl",
        body: "The liver and platelets can crash before the pressure climbs another millimetre — symptoms and bloods are part of the monitoring, not decoration. In HELLP the headache may be the loudest alarm.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 26-year-old primigravida at 34 weeks attends your district clinic with a two-day headache, flashing lights and pain under the right ribs. Blood pressure is 172/114 on two readings 20 minutes apart; urine shows 3+ protein; reflexes are brisk with two beats of clonus; her platelet count from this morning is 95 × 10⁹/L.\n\nWhat does your first hour look like?\n\nAnswer: Recognise severe pre-eclampsia with severe features (symptoms, clonus, low platelets — HELLP territory). Call the senior and the referral pathway now. Magnesium sulfate: 4 g IV slowly, then maintenance per protocol, monitoring reflexes, respirations and urine. Antihypertensive per protocol to bring the pressure below 160/110. Repeat full blood count, liver enzymes, creatinine and coagulation; strict fluid balance — with low platelets she risks pulmonary oedema. Corticosteroids for fetal lungs. Plan birth after stabilisation — at 34 weeks with severe features, delivery is expected, by the route the obstetrician chooses — with transfer to a theatre-capable facility running in parallel.",
      },
      {
        type: "memory_trick",
        body: "HER UP — she is getting worse: **H**eadache, **E**ye changes, **R**ight upper quadrant pain, **U**rine output falling, **P**latelets falling. Any of these with hypertension means severe: magnesium, antihypertensive, senior, and a plan for birth.",
      },
      {
        type: "summary",
        body: "- Severe hypertension is 160/110 or above; severe pre-eclampsia can exist below it with severe features — symptoms, clonus, oliguria, HELLP.\n- Magnesium sulfate (4 g IV slowly, then maintenance) protects against fits; monitor reflexes, respirations (≥16) and urine; calcium gluconate is the antidote.\n- Bring severe BP below 160/110 within hours — not to normal — with labetalol, hydralazine or nifedipine per protocol.\n- Birth timing: deliver at 37 weeks; at 34+ with severe features usually after stabilisation; below 34 weeks expectant care only in a capable unit with a stable mother and fetus.",
      },
    ],
    questions: [
      {
        topic: "Severe Pre-eclampsia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 33 weeks has BP 148/98 with 2+ proteinuria, severe headache, visual flashing and right upper quadrant pain. Why is this classified as severe despite the blood pressure reading?",
        options: [
          "Any headache in pregnancy is treated as severe pre-eclampsia",
          "Proteinuria above 2+ automatically defines severity regardless of other findings",
          "Severe features — neurological symptoms and liver-area pain — define severe pre-eclampsia even at blood pressures below 160/110",
          "Because her gestational age is below 34 weeks, all pre-eclampsia is severe",
        ],
        correctIndex: 2,
        explanation:
          "Severity is defined by organ involvement, not the cuff alone: neurological symptoms, epigastric pain, clonus, oliguria, HELLP or severe hypertension each define it. Waiting for the pressure to reach 160/110 before acting is a classic fatal delay.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Severe Pre-eclampsia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What monitoring accompanies magnesium sulfate maintenance therapy?",
        options: [
          "Daily weight and abdominal girth only",
          "Reflexes present, respirations at least 16 per minute, and urine output flowing — checked regularly",
          "Blood pressure every four hours only, since magnesium treats the pressure",
          "No monitoring is needed once the loading dose is given",
        ],
        correctIndex: 1,
        explanation:
          "Magnesium is excreted by the kidneys and depresses respiration and reflexes when it accumulates: check patellar reflexes, keep respirations at or above 16 per minute and monitor urine output, with calcium gluconate ready as the antidote.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Severe Pre-eclampsia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks has severe pre-eclampsia with severe features, just stabilised on magnesium. What is the usual plan for birth?",
        options: [
          "Continue expectant care until 37 weeks in any facility, to mature the lungs",
          "Deliver now by caesarean without stabilising further, to prevent a fit",
          "Plan birth after stabilisation — usually within 24 hours — at a theatre-capable facility, with steroids given where time allows and the obstetrician choosing the route",
          "Suppress the blood pressure for two weeks and deliver at 36 weeks",
        ],
        correctIndex: 3,
        explanation:
          "At 34 weeks and beyond with severe features, the disease is usually more dangerous than prematurity: stabilise first, then deliver, by the route the obstetrician selects. Prolonging pregnancy with active severe disease invites eclampsia, abruption and HELLP deterioration.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Severe Pre-eclampsia",
        front: "What defines severe hypertension, and what defines severe pre-eclampsia?",
        back: "Severe hypertension: BP 160/110 or above. Severe pre-eclampsia: severe hypertension, OR proteinuria with severe features — headache, visual symptoms, epigastric pain, clonus, oliguria, HELLP.",
      },
      {
        topic: "Severe Pre-eclampsia",
        front: "What is the magnesium sulfate safety triad, and the antidote?",
        back: "Reflexes present, respirations at least 16 per minute, urine output flowing (about 25-30 mL/h or more). Antidote: calcium gluconate 10 mL of 10% IV slowly.",
      },
      {
        topic: "Severe Pre-eclampsia",
        front: "What does HELLP stand for?",
        back: "Haemolysis, Elevated Liver enzymes, Low Platelets — the multi-organ severe end of pre-eclampsia; epigastric pain and falling platelets are its warning lights.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241548335",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Hypertensive disorders chapters. Verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Hypertensive Crises",
    lessonTitle: "Eclampsia: Managing the Emergency",
    description:
      "The fit and everything after — the drill from airway to magnesium to the delivery decision, and the monitoring that guards the hours that follow.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the correct actions during and immediately after an eclamptic fit.",
      "Explain magnesium sulfate dosing logic, toxicity signs and the place of the antidote.",
      "Apply the stabilise-then-deliver principle and postpartum magnesium continuation to a real fit.",
    ],
    tags: ["eclampsia", "emergency", "magnesium sulfate", "convulsion", "airway"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Eclampsia — the fit — is the complication every midwife fears and every ward drills for. The woman you least expect can convulse: after weeks of normal pressure, in the corridor, two days after an uneventful birth. Half of fits come without warning; your speed in the first five minutes shapes whether she survives.\n\nThis lesson is the drill itself: what to do while she fits, what drug to reach for, what to monitor, when the baby comes. Learn it until your hands move before your fear does.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**During the fit**, your job is protection, not restraint. Call for help. Left lateral — the airway drains and the womb lifts off the great vessels. Clear the airway, give oxygen; suction if secretions block it. **Nothing in her mouth, ever** — tongues are bitten, not swallowed, and forced gags break teeth and block airways. Shield her from injury and time the fit; most stop within a minute or two. Then the drug that changed this disease: **magnesium sulfate**, loading dose 4 g IV slowly over 5–10 minutes, then maintenance per protocol (commonly 1 g per hour IV). Further fits after loading get an additional bolus per protocol.\n\n**After the fit**, monitoring is the treatment's shadow: reflexes, respirations (16 or more per minute), hourly urine output, and a MEOWS-style chart. Toxicity — depressed breathing, absent reflexes, drowsiness — is treated with **calcium gluconate 10 mL of 10% IV slowly**. **Delivery** is the cure, but sequence matters: stabilise first — magnesium running, BP treated, airway safe — then deliver by the fastest safe route, often caesarean, though a woman near full dilatation may deliver vaginally. Continue magnesium for 24 hours after birth, because fits still occur postpartum.",
      },
      {
        type: "clinical_pearl",
        body: "Nothing in her mouth — ever — and know where the calcium gluconate lives before the night you need it. The two errors that kill in eclampsia are a forced mouth gag and an unmonitored infusion.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 19-year-old primigravida at 39 weeks, admitted in early labour with BP 144/94 and trace protein, suddenly convulses in the assessment room. The fit lasts 90 seconds. Her aunt begins screaming and tries to force a spoon between her teeth.\n\nWalk through your response, and what happens after the fit stops?\n\nAnswer: Protect, don't restrain: left lateral, airway open, oxygen, nothing in the mouth — move the aunt gently away and delegate someone to calm her. Time the fit. When it stops: shout for the doctor and theatre team, give magnesium sulfate 4 g IV slowly as the loading dose and start maintenance per protocol; treat severe BP readings per protocol; insert a catheter for hourly urine; keep watching reflexes and respirations. Once stabilised, deliver — at 39 weeks in early labour the obstetrician may accelerate a vaginal birth or take her to theatre, either way birth after stabilisation. Magnesium continues 24 hours postpartum, and the aunt learns the postnatal warning signs too.",
      },
      {
        type: "memory_trick",
        body: "LEFT — CLEAR — LOAD. Turn her LEFT lateral, CLEAR the airway (nothing in the mouth), LOAD with magnesium. Then watch REFLEXES — RESPIRATIONS — URINE, with CALCIUM in your pocket.",
      },
      {
        type: "summary",
        body: "- During the fit: left lateral, airway and oxygen, nothing in the mouth, protect from injury, time it — no restraint.\n- Magnesium sulfate 4 g IV slowly as loading, then maintenance per protocol; extra bolus for recurrent fits per protocol.\n- Monitor reflexes, respirations at or above 16, hourly urine; calcium gluconate 10 mL of 10% IV is the antidote for toxicity.\n- Stabilise first, then deliver by the fastest safe route; continue magnesium 24 hours postpartum — fits still come after birth.",
      },
    ],
    questions: [
      {
        topic: "Eclampsia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman is convulsing and a relative tries to force a spoon into her mouth. What is the correct action and reasoning?",
        options: [
          "Allow it — protecting the tongue from biting takes priority",
          "Allow it only if the spoon is wrapped in cloth",
          "Stop them: position her left lateral, keep the airway clear, and give oxygen — forced objects break teeth, cause aspiration and block the airway",
          "Restrain her limbs tightly while the gag is placed",
        ],
        correctIndex: 0,
        explanation:
          "Nothing goes in the mouth during a fit. Left lateral position lets the airway drain; tongues recover from bites, but broken teeth and gags obstruct breathing. Protection, not restraint, is the job.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Eclampsia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two hours after the magnesium loading dose and start of maintenance, the woman's respirations are 12 per minute, her reflexes are absent and she is drowsy. What is happening and what do you do?",
        options: [
          "She is settling after the fit — dim the lights and let her rest",
          "This is a recurrent fit beginning — give another magnesium bolus now",
          "Magnesium toxicity: stop the infusion, give calcium gluconate 10 mL of 10% IV slowly, check respiratory support is ready, and alert the team",
          "She has developed HELLP — send urgent bloods and prepare theatre",
        ],
        correctIndex: 2,
        explanation:
          "Absent reflexes, respirations below 16 and drowsiness are textbook magnesium toxicity. Stop the drug, give the antidote (calcium gluconate, slowly IV) and support breathing — continuing the infusion risks respiratory arrest.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Eclampsia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is magnesium continued for 24 hours after birth in an eclamptic woman?",
        options: [
          "To prevent postpartum haemorrhage, which is her main remaining risk",
          "Because postpartum fits occur — the highest risk period extends into the first 24 hours (and later) after delivery",
          "To help the uterus involute properly after the seizure",
          "Because the baby also receives magnesium through breastfeeding and needs the cover",
        ],
        correctIndex: 1,
        explanation:
          "Eclampsia does not end at delivery: fits occur postpartum, with meaningful risk in the first 24 hours and beyond. Continued magnesium for a day after birth is standard protection.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Eclampsia",
        front: "Give the LEFT-CLEAR-LOAD drill for an eclamptic fit.",
        back: "LEFT lateral position, CLEAR the airway with oxygen (nothing ever in the mouth), LOAD with magnesium sulfate 4 g IV slowly over 5-10 minutes, then maintenance per protocol.",
      },
      {
        topic: "Eclampsia",
        front: "What are the three magnesium toxicity signs and the antidote?",
        back: "Absent reflexes, respirations below 16 per minute, drowsiness (with falling urine output driving accumulation). Antidote: calcium gluconate 10 mL of 10% IV slowly, ready on the emergency trolley.",
      },
      {
        topic: "Eclampsia",
        front: "What is the delivery rule after a fit?",
        back: "Stabilise first — magnesium running, BP controlled, airway safe — then deliver by the fastest safe route. Continue magnesium for 24 hours postpartum.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241548335",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Hypertensive Crises",
    lessonTitle: "After the Crisis: Monitoring and Follow-Up",
    description:
      "The recovery that still holds danger — postpartum monitoring, the six-week blood pressure, and honest counselling for the next pregnancy.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the monitoring and follow-up a woman needs after pre-eclampsia or eclampsia.",
      "Explain recurrence risk and the long-term cardiovascular implications of hypertensive disease in pregnancy.",
      "Apply next-pregnancy counselling — early booking, aspirin prophylaxis — to a post-eclamptic mother.",
    ],
    tags: ["follow-up", "recovery", "postpartum", "recurrence", "pre-eclampsia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The crisis is over — the baby is born, the magnesium has run its 24 hours, the pressure is drifting down. This is exactly when teams relax and exactly when women are lost: postpartum pre-eclampsia is real, blood pressure can climb again at home, and the next pregnancy is already on its way for many families.\n\nThis lesson covers the follow-up that keeps her safe after discharge, and the conversation that protects her next pregnancy and her long-term health.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**In the first days**, blood pressure is checked at least daily in hospital, magnesium continues for 24 hours after eclampsia, and symptoms are asked about actively — headache, visual disturbance, epigastric pain. **At home**, blood pressure is checked at every postnatal contact (24 hours, 48–72 hours, days 7–14, and the visits through six weeks), with a written rule: severe headache, visual changes or right-upper-quadrant pain means come now, day or night — postpartum pre-eclampsia and eclampsia occur up to six weeks after birth, most in the first days.\n\n**The next pregnancy conversation** is part of this episode's care. Recurrence: roughly 1 in 6 women with pre-eclampsia develop it again, rising towards 1 in 4 after severe, early disease. Next time: book before 12 weeks and ask about low-dose aspirin from early in the second trimester where criteria are met. The longer horizon matters too — pre-eclampsia flags lifetime risks of hypertension, heart disease and stroke, so the postnatal visit is the moment to talk weight, salt, exercise and blood-pressure checks. For contraception, progestin-only and non-hormonal methods suit the recovering hypertensive mother.",
      },
      {
        type: "clinical_pearl",
        body: "A headache at home on day five is postpartum pre-eclampsia until excluded — not 'stress from the baby'. Check her blood pressure, not her patience.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the child welfare clinic, day five after discharge, you meet a woman who birthed at your hospital after an eclamptic fit; BP was 142/92 on discharge and she was told to 'come for postnatal in six weeks'. Today she reports headache since yesterday and blurring when she stands; BP is 158/104, urine trace protein.\n\nWhat has gone wrong, and what happens now?\n\nAnswer: The follow-up gap. A post-eclamptic woman with a rising discharge BP needed scheduled checks and a written warning rule — not a six-week appointment only. Today: symptoms plus severe-range blood pressure five days postpartum is postpartum pre-eclampsia until excluded — same-day medical review, bloods (platelets, liver enzymes, creatinine), BP treatment per protocol, assessment for magnesium, and admission or close observation rather than home. After stabilising, fix the system: written postnatal BP plan, symptom rules, and a next-pregnancy conversation — early booking, aspirin where criteria are met — plus lifelong blood-pressure awareness she and her husband both understand.",
      },
      {
        type: "memory_trick",
        body: "B-P-B after the crisis: **B**lood pressure checked at every postnatal contact to six weeks, **P**lan the next pregnancy early (book before 12 weeks, ask about aspirin), **B**eyond pregnancy — her heart health for life.",
      },
      {
        type: "summary",
        body: "- Danger continues after birth: check BP daily in hospital then at every postnatal contact through six weeks; postpartum fits and severe hypertension are real.\n- Written warning signs — headache, visual change, epigastric pain — must travel home with her and her family.\n- Recurrence risk is about 1 in 6 overall, higher after severe or early disease; next pregnancy: book before 12 weeks, consider low-dose aspirin per criteria.\n- Pre-eclampsia flags lifetime cardiovascular risk — use the postnatal visit to plant blood-pressure awareness for life.",
      },
    ],
    questions: [
      {
        topic: "Post-Crisis Follow-Up",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman reports severe headache and blurred vision five days after a birth complicated by eclampsia. Her BP is 158/104. What does this represent and what is the response?",
        options: [
          "Normal postnatal tiredness — advise rest and paracetamol, review in six weeks",
          "Postpartum pre-eclampsia until excluded — same-day review, bloods, BP treatment per protocol and assessment for magnesium; observe or admit",
          "Migraine triggered by sleeplessness — treat with fluids and send home",
          "A reaction to the magnesium she received last week — reassure and recheck tomorrow",
        ],
        correctIndex: 3,
        explanation:
          "Symptoms plus severe-range blood pressure days after birth is postpartum pre-eclampsia territory: it needs urgent assessment and treatment the same day, because postpartum eclampsia can still follow. 'Come back in six weeks' is how women are lost.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Post-Crisis Follow-Up",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What follow-up does a woman recovering from severe pre-eclampsia need after discharge?",
        options: [
          "A single six-week postnatal check, since the disease ends with delivery",
          "No checks — delivery is the cure and blood pressure always normalises within a day",
          "Blood pressure checks at postnatal contacts through six weeks (24 hours, 48-72 hours, days 7-14 and later), with written warning signs for headache, visual change and epigastric pain",
          "Weekly telephone calls from the ward clerk for two months",
        ],
        correctIndex: 0,
        explanation:
          "The risk window extends weeks beyond birth: scheduled BP checks at each postnatal contact plus a written rule for symptoms covers it. A six-week-only appointment leaves the highest-risk days unwatched.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Post-Crisis Follow-Up",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During counselling before discharge, what do you tell a woman whose first pregnancy ended in eclampsia at 34 weeks?",
        options: [
          "She cannot safely have another pregnancy and should choose permanent contraception",
          "Her next pregnancy will definitely be normal because she is now 'immune'",
          "She has a raised recurrence risk (higher after early, severe disease): book before 12 weeks next time, attend early ANC, and low-dose aspirin from early second trimester may be advised — plus lifelong blood-pressure awareness",
          "Recurrence risk is negligible, and only family planning needs discussion",
        ],
        correctIndex: 2,
        explanation:
          "After severe, early-onset disease recurrence risk rises substantially (approaching one in four). Early booking with aspirin prophylaxis where indicated, close surveillance, and lifelong cardiovascular risk awareness form the honest next-pregnancy message.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Post-Crisis Follow-Up",
        front: "How long can postpartum pre-eclampsia and eclampsia occur after birth?",
        back: "Up to six weeks — most in the first days. Symptoms (headache, visual change, epigastric pain) at home mean same-day BP review, not reassurance.",
      },
      {
        topic: "Post-Crisis Follow-Up",
        front: "What is the recurrence risk of pre-eclampsia, and what raises it?",
        back: "About 1 in 6 overall, rising towards 1 in 4 or higher after severe or early-onset disease (before 34 weeks) and after eclampsia.",
      },
      {
        topic: "Post-Crisis Follow-Up",
        front: "Name three elements of next-pregnancy counselling after pre-eclampsia.",
        back: "Book before 12 weeks and attend early; low-dose aspirin from early second trimester where criteria are met; and lifelong cardiovascular awareness — blood pressure checks, weight, salt, exercise, no smoking.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241500649",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241548335",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Postnatal follow-up of hypertensive disorders. Verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Bleeding and the At-Risk Fetus",
    lessonTitle: "Severe Antepartum Haemorrhage",
    description:
      "Major bleeding before birth — maternal stabilisation first, the scan that rules the examination, and the race to a safe delivery.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the distinguishing features of placenta praevia and placental abruption.",
      "Explain why vaginal examination is forbidden until placental position is known, and how resuscitation runs in parallel.",
      "Apply the first response to a woman presenting at 32 weeks with heavy painless bleeding.",
    ],
    tags: ["aph", "emergency", "placenta praevia", "abruption", "haemorrhage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Antepartum haemorrhage — bleeding after about 24 weeks and before birth — is the emergency where a single wrong reflex can empty her blood volume into the bed: the classic error is examining the vagina to 'see where the blood is coming from' in a woman whose placenta sits over the cervix.\n\nThis lesson covers the two great causes, the resuscitation that runs parallel with assessment, and the delivery decisions that end the bleeding.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Placenta praevia**: the placenta lies in the lower segment, over or near the cervix. The bleeding is typically **painless, bright red and recurrent** — she soaks a pad, feels entirely well, then bleeds again worse. The uterus is soft and non-tender, and the fetus often lies oddly (transverse or breech). **Placental abruption**: the placenta separates from the wall — **constant pain**, a **tense, tender, board-like uterus**, dark or revealed blood, with much loss **concealed** behind the placenta so the visible pad betrays nothing while she slips into shock. Fetal compromise comes early and often.\n\nTwo laws govern response. **The examination law**: no vaginal or speculum examination until ultrasound has located the placenta — in praevia, a finger on the cervix can tear the placental edge and convert a bleed into a flood. **The resuscitation law**: assessment and treatment run in parallel — shout for help, ABC with left lateral tilt, two large-bore IV lines, crossmatch (FBC, coagulation) before blood is needed, warm fluids, oxygen, MEOWS plus continuous fetal heart monitoring. Analgesia for abruption pain, anti-D for the Rhesus-negative mother, and senior review decide delivery: major praevia means caesarean; abruption means urgent delivery by the fastest appropriate route, theatre team awake while you resuscitate.",
      },
      {
        type: "clinical_pearl",
        body: "Painless and bright, think praevia; painful with a board-like womb and a worrying trace, think abruption. And never let fingers meet a cervix before the scan has cleared it — that examination is the one that kills.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 28-year-old G3P2 at 32 weeks arrives by taxi: an hour ago she stood up from cooking and felt a gush. One pad soaked with bright red blood; no pain or contractions; she looks pale but chatty. Pulse 104, BP 104/64; uterus soft and non-tender; fetus transverse; fetal heart 148.\n\nWhat is the likely cause, and what are your next actions in order?\n\nAnswer: Painless, bright bleeding, soft uterus, transverse lie at 32 weeks — the pattern reads placenta praevia, though abruption stays on the list until the scan. Actions: call for help, alert theatre and blood bank; left lateral tilt, oxygen; two large-bore cannulae with bloods for FBC, coagulation and crossmatch; warm fluids; fetal heart and MEOWS monitoring; **no vaginal examination**; urgent ultrasound. Then senior decisions: heavy bleeding at 32 weeks with praevia usually means caesarean once she is stabilised — steroids only if bleeding settles enough to buy 48 hours — and anti-D if she is Rhesus negative.",
      },
      {
        type: "memory_trick",
        body: "P for **P**ainless and bright — **P**raevia. Pain plus a hard, tender womb — abruption: the blood hides behind the placenta, so trust the pain more than the pad. SCAN before you touch.",
      },
      {
        type: "summary",
        body: "- Praevia: painless, bright, recurrent bleeding, soft uterus, odd fetal lie. Abruption: pain, tense tender uterus, dark or concealed loss, fetal compromise early.\n- Never perform vaginal or speculum examination until ultrasound locates the placenta.\n- Resuscitate in parallel: help, tilt, oxygen, two large-bore lines, crossmatch, warm fluids, MEOWS and fetal monitoring.\n- Delivery is the definitive treatment: caesarean for major praevia, urgent delivery for abruption, theatre team involved from the start; give anti-D to Rhesus-negative mothers.",
      },
    ],
    questions: [
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 33 weeks has painless bright red bleeding, a soft non-tender uterus and a transverse lie. What is the most likely diagnosis, and what must precede any vaginal examination?",
        options: [
          "Placental abruption; an abdominal ultrasound must precede examination only if the bleeding continues",
          "Placenta praevia; an ultrasound locating the placenta must precede any vaginal or speculum examination",
          "Cervical infection; a full blood count must precede examination",
          "Early labour show; a digital examination must be done first to assess the cervix",
        ],
        correctIndex: 2,
        explanation:
          "Painless, bright, recurrent bleeding with a soft uterus and malpresentation is classic praevia. Vaginal examination before imaging risks tearing the placental edge and provoking torrential bleeding — ultrasound first, always.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why can a woman with placental abruption be in profound shock despite only a small visible blood loss on the pad?",
        options: [
          "Because abruption always causes infection before bleeding shows",
          "Because abruption pain causes fainting rather than true shock",
          "Because much of the bleeding can be concealed behind the placenta and within the uterine wall, so the pad shows only a fraction of the true loss",
          "Because abruption blocks the placenta from producing blood for the mother",
        ],
        correctIndex: 0,
        explanation:
          "In abruption, blood pools behind the placenta and inside the uterine muscle — concealed haemorrhage. Trust the mother's signs (pain, tense uterus, shock, fetal distress) over the visible pad.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does 'resuscitation runs in parallel with assessment' mean in severe APH?",
        options: [
          "Complete the full examination and ultrasound before starting any treatment, to keep the diagnosis clean",
          "Start help, tilt, oxygen, IV access, crossmatch and fluids at the same time as you are assessing — treatment does not wait for a final diagnosis",
          "Only the senior doctor may start resuscitation, so call and wait",
          "Resuscitation is deferred until the fetal heart has been documented for ten minutes",
        ],
        correctIndex: 3,
        explanation:
          "In haemorrhage, minutes of blood loss matter more than diagnostic completeness: call for help, secure access and start volume replacement while the assessment continues. Sequence kills; parallelism saves.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Antepartum Haemorrhage",
        front: "Contrast the classic pictures of praevia and abruption.",
        back: "Praevia: painless, bright, recurrent bleeding; soft uterus; odd fetal lie. Abruption: constant pain; tense, tender, board-like uterus; dark or concealed blood; fetal compromise early.",
      },
      {
        topic: "Antepartum Haemorrhage",
        front: "What is the examination law of antepartum haemorrhage?",
        back: "No vaginal or speculum examination until ultrasound has located the placenta — in praevia, touching the cervix can convert a bleed into a torrential one.",
      },
      {
        topic: "Antepartum Haemorrhage",
        front: "List the parallel first-line actions for severe APH.",
        back: "Call for help; left lateral tilt and oxygen; two large-bore IV lines; bloods for FBC, coagulation, crossmatch; warm fluids; MEOWS and continuous fetal heart monitoring; then scan and senior delivery decision — anti-D if Rhesus negative.",
      },
    ],
    sources: [
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Green-top Guideline No. 63: Antepartum Haemorrhage",
        year: "2011",
        note: "Verify current edition on the RCOG website.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Bleeding and the At-Risk Fetus",
    lessonTitle: "Surveilling the At-Risk Fetus",
    description:
      "CTG patterns, doppler and growth scans — reading the technology that whispers about a placenta that is failing its baby.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the roles and limits of growth charts, CTG and umbilical artery doppler in fetal surveillance.",
      "Explain the significance of absent and reversed end-diastolic flow on doppler.",
      "Apply surveillance interpretation to a growth-restricted fetus and decide when findings demand escalation.",
    ],
    tags: ["fetal surveillance", "ctg", "doppler", "growth restriction", "antepartum monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The at-risk fetus — growth-restricted, hypertensive mother, previous stillbirth, reduced movements — cannot tell you it is struggling. But the placenta leaves fingerprints: in the growth curve, in the blood flow of the umbilical artery, and sometimes on the CTG trace. Your job is to read the fingerprint before the silence becomes a stillbirth.\n\nThis lesson matches each tool to its question: growth asks 'is the baby getting nutrition over weeks', doppler asks 'is the placenta resisting blood flow today', and the CTG asks 'how is the baby coping right now'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Growth**: serial symphysis-fundal height at every contact, with ultrasound scans every two to four weeks when risk is flagged. One reading means little; the trend is the message — a fetus crossing centiles downwards is being starved of placental supply. Note that **small-for-gestational-age** (constitutionally small) is not the same as **growth restriction** (failing to reach potential); doppler helps tell them apart.\n\n**Umbilical artery doppler** is the early-warning line for a failing placenta: as resistance rises, end-diastolic flow falls — **absent** end-diastolic flow is severe, **reversed** flow is critical, usually demanding delivery at a centre with neonatal care. **CTG** (from about 28 weeks in the at-risk fetus) reads the current state: baseline 110–160, variability roughly 5–25 beats, accelerations reassuring, repetitive decelerations worrying — interpret systematically (DR C BraVADO). But remember the CTG's character: it is a snapshot of now, not a promise about tomorrow — a reactive trace does not cancel absent doppler flow or reduced movements. And the mother herself is surveillance: teach count-to-ten and treat every report as same-day review.",
      },
      {
        type: "clinical_pearl",
        body: "A single reassuring trace says the baby is fine right now; the series — growth trend plus doppler plus the mother's own count — tells you where the baby is heading. Never let one friendly CTG veto an unfriendly pattern.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-year-old hypertensive mother at 35 weeks has an SFH tracking four weeks behind since 30 weeks; ultrasound confirms growth below the 3rd centile. Today's umbilical artery doppler shows absent end-diastolic flow. The CTG you perform is reactive with good variability, and the baby moves 'less than before, but she still feels ten in the evening'.\n\nWhat do these findings mean together, and what happens next?\n\nAnswer: The pattern is severe placental insufficiency: growth restriction with absent end-diastolic flow — the placenta is failing, and stillbirth risk climbs with every day of waiting. The reactive CTG means the baby is coping today; it does not offset the doppler. Management is admission to a facility with neonatal support for intensified surveillance — daily CTG, repeated doppler — and a senior-planned delivery, at this gestation usually within days rather than weeks; any deterioration (reversed flow, abnormal CTG, reduced movements) means delivery now.",
      },
      {
        type: "memory_trick",
        body: "Three questions, one story: GROWTH (weeks), DOPPLER (today's placenta), CTG (this minute). On the CTG itself, run DR C BraVADO: **D**efine risk, **C**ontractions, **BRA**seline, **V**ariability, **A**ccelerations, **D**ecelerations, **O**verall.",
      },
      {
        type: "summary",
        body: "- Match the tool to its question: growth trend over weeks, doppler for placental resistance today, CTG for the state of now.\n- Small-for-gestational-age is not the same as growth restriction — the trend and doppler separate them.\n- Absent end-diastolic flow is severe; reversed flow is critical — both demand senior-level planning and a facility with neonatal care.\n- A reactive CTG does not cancel abnormal doppler or reduced movements; the mother's counts are part of the monitoring.",
      },
    ],
    questions: [
      {
        topic: "Fetal Surveillance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 34 weeks, a growth-restricted fetus shows absent end-diastolic flow on umbilical artery doppler, but the CTG is reactive with good variability. How should the findings be interpreted together?",
        options: [
          "The reactive CTG cancels the doppler concern — resume routine care",
          "Both tests are contradictory, so repeat both in two weeks to see which is right",
          "Severe placental insufficiency with a baby currently compensating: admit for intensified surveillance and senior-planned delivery — the CTG is a snapshot, the doppler is the trajectory",
          "The findings suggest a constitutionally small baby with no risk; reassure and discharge",
        ],
        correctIndex: 1,
        explanation:
          "Doppler reflects the placenta's failing supply line; the reactive CTG shows present compensation only. Absent end-diastolic flow with growth restriction needs admission, intensified monitoring and a delivery plan — not routine care or a two-week wait.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Fetal Surveillance",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which CTG finding pair belongs to a normal, reassuring trace?",
        options: [
          "Baseline 170 with absent variability",
          "Baseline 140 with moderate variability and accelerations present",
          "Baseline 100 with repetitive late decelerations",
          "Sinusoidal pattern with no accelerations",
        ],
        correctIndex: 2,
        explanation:
          "Normal: baseline 110–160, moderate (roughly 5–25 beats) variability and accelerations. A baseline of 170 or 100, absent variability, repetitive late decelerations or a sinusoidal pattern all demand escalation.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Fetal Surveillance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother at 36 weeks reports reduced movements for two days. The CTG today is reactive. What is the correct management?",
        options: [
          "Reassure her — a reactive CTG proves the fetus is safe and movements often reduce near term",
          "Admit for observation and repeat assessment as per protocol, because reduced movements with a reactive CTG still require same-day review and further assessment — the 'slows near term' myth has killed babies",
          "Advise her to drink cold water and count movements at home for a week",
          "Perform immediate caesarean for the reduced movements alone",
        ],
        correctIndex: 0,
        explanation:
          "Reduced movements is a same-day-review symptom: assess now (CTG, growth/doppler history), plan follow-up and never send the message that 'babies slow down near term'. A reactive trace does not predict tomorrow.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Surveillance",
        front: "What question does each surveillance tool answer?",
        back: "Growth trend (SFH + scans): is the baby being fed over weeks? Umbilical artery doppler: is the placenta resisting flow today? CTG: how is the baby coping this minute?",
      },
      {
        topic: "Fetal Surveillance",
        front: "What does reversed end-diastolic flow on umbilical artery doppler mean?",
        back: "Critical placental failure — the fetus is at very high risk of hypoxia and stillbirth. Delivery is usually imminent, at a facility with neonatal support. Absent flow is severe; reversed is worse.",
      },
      {
        topic: "Fetal Surveillance",
        front: "Give the normal CTG core features and the DR C BraVADO order.",
        back: "Baseline 110-160, variability roughly 5-25 beats, accelerations reassuring. DR C BraVADO: Define risk, Contractions, BRAseline, VArIability, Accelerations, Decelerations, Overall.",
      },
    ],
    sources: [
      {
        organization: "National Institute for Health and Care Excellence",
        title: "Fetal Monitoring in Labour (NG229)",
        year: "2022",
        url: "https://www.nice.org.uk/guidance/ng229",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "FIGO",
        title: "FIGO Consensus Guidelines on Intrapartum Fetal Monitoring",
        year: "2015",
        note: "CTG interpretation standards. Verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-pregnancy",
    moduleTitle: "Bleeding and the At-Risk Fetus",
    lessonTitle: "Deciding the Timing of Birth",
    description:
      "The risk balance of waiting versus delivering — decisions that weigh two patients against one clock, and how experts make them defensible.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the factors that weigh in the timing-of-birth decision for a complicated pregnancy.",
      "Explain the roles of antenatal corticosteroids and magnesium sulfate neuroprotection, and their limits.",
      "Apply timing logic to a severe growth-restricted fetus at 30 weeks with abnormal doppler.",
    ],
    tags: ["timing", "decision making", "steroids", "prematurity", "growth restriction"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every complicated pregnancy eventually asks the same question: is this baby safer inside or outside — today? Inside buys maturity but the danger continues; outside removes the danger but hands the baby to prematurity. There is no risk-free answer, only a reasoned one.\n\nThis lesson is about how experts weigh it: which factors matter, what steroids and magnesium buy, and how to make the decision defensible in notes, audits and the conversation with the parents.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Four factors sit on the scale. **Maternal condition and trend**: stable and treatable buys time; deteriorating pre-eclampsia, bleeding or sepsis does not. **Fetal state**: growth trend, doppler, CTG and movements — a fetus with reversed flow or an abnormal trace is negotiating its exit. **Gestational age**: below 34 weeks the lungs are the great vulnerability, so **antenatal corticosteroids** (best effect about 48 hours after the first dose; partial benefit real) are given whenever birth before 34 weeks is anticipated, and magnesium sulfate adds **neuroprotection** below about 32 weeks. **Facility capability**: a 30-week decision belongs where a neonatal unit can receive the baby.\n\nThe rules of thumb: if the mother or fetus is unstable, deliver — steroids ride along, but never hold the door on a deteriorating patient for a drug course. If all is stable in a capable unit, wait under intensified surveillance with a **named review time** ('re-scan Thursday, deliver if growth flat') so the decision is re-made on evidence, not inertia. Involve the parents: they should hear both sides — the risks of waiting and the realities of a neonatal unit. And time elective decisions for indication, not convenience: late prematurity without cause carries its own costs.",
      },
      {
        type: "clinical_pearl",
        body: "Never let a steroid course hold you hostage: give it while you prepare, but if the trace or the mother deteriorates, deliver. A living baby on partial steroids beats a perfect course that arrived too late.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother at 30 weeks has a growth-restricted fetus with reversed end-diastolic flow; she received the first steroid dose 24 hours ago. Today's CTG shows reduced variability with recurrent decelerations, and movements have halved since yesterday.\n\nDo you wait another 24 hours to complete the steroids, or deliver now — and why?\n\nAnswer: Deliver now. The doppler has already declared critical placental failure, and the abnormal CTG shows the fetus is decompensating — each hour inside raises stillbirth risk more than prematurity raises risk outside. The single steroid dose already given matters (partial benefit is real); the second rides along. Give magnesium for neuroprotection below 32 weeks per protocol, have the neonatal team present at delivery, and counsel the parents honestly: their baby is small but better born breathing with help than silent inside. Waiting to 'finish the course' would be choosing the drug over the patient.",
      },
      {
        type: "memory_trick",
        body: "W-A-I-T before you cut: **W**hat is the risk of staying in? **A**ge of the fetus (steroids under 34, magnesium under 32)? **I**s the facility ready for this baby? **T**ime-limit written and named? If any answer collapses, so does the waiting.",
      },
      {
        type: "summary",
        body: "- The decision weighs maternal trend, fetal state, gestational age and facility capability — two patients, one clock.\n- Antenatal corticosteroids before 34 weeks mature the lungs (ideally 48 hours, partial benefit real); magnesium below ~32 weeks protects the brain.\n- Unstable mother or fetus = deliver now; steroids ride along but never hold the door.\n- Stable and capable = wait under intensified surveillance with a named review time; document the reasoning and share both sides with the parents.",
      },
    ],
    questions: [
      {
        topic: "Timing of Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 30-week growth-restricted fetus with reversed end-diastolic flow now shows an abnormal CTG (reduced variability, recurrent decelerations) after one steroid dose. What is the correct decision and its logic?",
        options: [
          "Complete the steroid course before delivering, because two doses are far superior to one",
          "Continue expectant care with daily doppler until 34 weeks to mature the lungs",
          "Deliver now: the fetus is decompensating, and the risk of in-utero death now exceeds the prematurity risk; the single dose already gives partial protection",
          "Give a tocolytic and re-examine in six hours to see if the trace normalises",
        ],
        correctIndex: 3,
        explanation:
          "Reversed flow plus a pathological CTG means the placenta has stopped supporting the fetus: waiting risks stillbirth. Steroids are valuable but partial benefit is real, and neuroprotective magnesium and neonatal presence accompany delivery — the drug never outranks the patient.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Timing of Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "At which gestational age window are antenatal corticosteroids routinely given when preterm birth is anticipated, and what is their target benefit?",
        options: [
          "Below 24 weeks, to prevent congenital infection",
          "Below 34 weeks, to accelerate fetal lung maturity and reduce respiratory distress and neonatal death",
          "Only after 37 weeks, to prevent meconium aspiration",
          "Any gestation, purely to reduce maternal anxiety",
        ],
        correctIndex: 1,
        explanation:
          "Antenatal corticosteroids given when birth before 34 weeks is anticipated mature the fetal lungs, measurably reducing respiratory distress, neonatal morbidity and death. Best effect is ~48 hours after the first dose, but even partial courses help.",
        courseSlug: "high-risk-pregnancy",
      },
      {
        topic: "Timing of Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with stable chronic hypertension and a well-grown fetus at 34 weeks is offered delivery 'today' because the consultant is travelling. What principle does this decision violate?",
        options: [
          "It violates the two-patient rule — the mother's interests always come first",
          "No violation — consultant availability is a legitimate timing factor whenever convenient",
          "It violates the capability rule — 34-week babies can never survive outside tertiary care",
          "Timing should follow clinical indication, not convenience: without a medical or fetal reason, late-preterm delivery exposes the baby to avoidable prematurity risks",
        ],
        correctIndex: 2,
        explanation:
          "Elective timing without clinical indication trades real neonatal risk (respiratory, feeding, jaundice) for schedule. Defensible timing is documented against maternal-fetal factors and a named review time, with capability arranged.",
        courseSlug: "high-risk-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Timing of Birth",
        front: "What four factors sit on the timing-of-birth scale?",
        back: "Maternal condition and its trend; fetal state (growth, doppler, CTG, movements); gestational age (steroids below 34 weeks, magnesium below ~32); and facility capability for this baby.",
      },
      {
        topic: "Timing of Birth",
        front: "What is the rule when the mother or fetus is unstable but steroids are incomplete?",
        back: "Deliver. Steroids ride along and partial benefit is real, but a drug course is never a reason to keep a deteriorating patient undelivered.",
      },
      {
        topic: "Timing of Birth",
        front: "What does magnesium sulfate add below about 32 weeks, and what does it reduce?",
        back: "Neuroprotection — given before preterm birth it reduces the risk of cerebral palsy in the surviving baby.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Interventions to Improve Preterm Birth Outcomes",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241508980",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Corticosteroids for Improving Preterm Birth Outcomes",
        year: "2015",
        note: "Verify current edition on the WHO publications site.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "Maternal Collapse and Shock",
    lessonTitle: "Maternal Collapse: First Response",
    description:
      "The pregnant or postnatal woman who collapses — a systematic response under pressure, and why pregnancy changes the resuscitation itself.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a systematic first response to maternal collapse using an ABCDE approach with pregnancy modifications.",
      "Explain the aortocaval compression problem after 20 weeks and how it changes CPR and positioning.",
      "Apply the four-minute rule for resuscitative caesarean and the leading reversible causes of collapse.",
    ],
    tags: ["collapse", "resuscitation", "cpr", "emergency", "perimortem caesarean"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A woman collapses in the corridor and your training has to outrun your fear. Maternal collapse is rare, which means you must think your approach through now — because in the event, the first two minutes belong to reflexes.\n\nThis lesson covers the systematic response, plus the special rules pregnancy writes on top: the womb that blocks her circulation after 20 weeks, and the operation that is part of her resuscitation, not separate from it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Shout for help and start systematically.** Check response; open the airway; check breathing — if abnormal or absent, start CPR immediately on a firm surface, calling the arrest team and defibrillator as you go. From about **20 weeks** (fundus at or above the umbilicus), the pregnant womb presses the aorta and vena cava against the spine when she lies flat, cutting the blood returning to her heart. So **tilt the woman, or have a helper manually displace the uterus to the left** during compressions. Otherwise CPR follows standard rules — about 100–120 compressions per minute on the lower sternum — and the defibrillator is used exactly as in any collapse.\n\nThink causes as you work: the **4Hs and 4Ts** plus the obstetric list — haemorrhage (obvious or concealed), eclampsia, pulmonary embolism, amniotic fluid embolism, sepsis, anaesthetic complications. And know the **four-minute rule**: from 20 weeks, if there is no return of circulation after about four minutes, a **resuscitative caesarean** is performed — not to save the baby at her expense but as part of saving her: emptying the uterus relieves the compression and restores venous return. For the postnatal woman, the same systematic response applies, with haemorrhage, sepsis and thromboembolism topping the cause list.",
      },
      {
        type: "clinical_pearl",
        body: "In any pregnant collapse beyond 20 weeks, her own womb is squashing the pipe that refills her heart — tilt her or push the womb aside while you compress. And start the clock for the four-minute caesarean at the start of CPR, not after you feel you have failed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 34 weeks collapses in the clinic waiting area — unresponsive, not breathing normally; a nurse screams her name; the crowd presses in. You are the senior midwife present.\n\nWhat are your actions in the first two minutes, and what is the pregnancy-specific decision already running?\n\nAnswer: Shout for the arrest team and defibrillator and clear the crowd. On the floor: airway open, breathing check — abnormal, so CPR starts now, compressions at 100–120 per minute while a second helper manually displaces the womb to the left, because at 34 weeks the uterus is strangling her venous return. Attach the AED as soon as it arrives. Note the time CPR started and task someone to alert theatre: no return of circulation by four minutes means the resuscitative caesarean is the next step of her resuscitation. As you work, run the cause list — pale and bleeding? cyanosed after a fit? recently delivered? The cause changes the treatment; the sequence never changes.",
      },
      {
        type: "memory_trick",
        body: "SHOUT — TILT — PUMP — FOUR: shout for help, tilt the womb off the vessels, pump the chest hard and fast, and let the clock run towards the four-minute caesarean — which is resuscitation, not surrender.",
      },
      {
        type: "summary",
        body: "- Maternal collapse gets the same disciplined start as any collapse: shout, airway, breathing, CPR on a firm surface, defibrillator early.\n- Beyond 20 weeks, tilt or manually displace the uterus — the womb itself obstructs venous return when she lies flat.\n- Run the obstetric cause list alongside the 4Hs and 4Ts: haemorrhage, eclampsia, embolism, sepsis, anaesthesia.\n- No circulation back by about four minutes from 20 weeks: resuscitative caesarean is part of the mother's resuscitation, emptying the uterus to restore venous return.",
      },
    ],
    questions: [
      {
        topic: "Maternal Collapse",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must a pregnant woman beyond 20 weeks be tilted, or her uterus manually displaced, during CPR?",
        options: [
          "To make the chest compressions easier to perform",
          "To keep the baby comfortable during resuscitation",
          "Because the uterus compresses the aorta and vena cava against the spine when she lies flat, obstructing the venous return that CPR needs to circulate",
          "To reduce the risk of acid reflux during compressions",
        ],
        correctIndex: 0,
        explanation:
          "Supine after 20 weeks, the heavy womb occludes the vena cava and aorta — blood cannot return to the heart, so compressions pump an empty pipe. Tilting or manual displacement relieves the obstruction and restores the circulation CPR is trying to create.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Maternal Collapse",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 36 weeks, CPR with uterine displacement has run four minutes without return of circulation. What is the rationale for proceeding to resuscitative caesarean?",
        options: [
          "It is performed to save the baby, accepting that the mother cannot be saved",
          "It is performed to save the mother: emptying the uterus relieves aortocaval compression and dramatically improves venous return, making her resuscitation viable — the baby is the second beneficiary",
          "It is performed because CPR is impossible to continue with the uterus present",
          "It is performed to allow diagnosis of the cause of the collapse",
        ],
        correctIndex: 3,
        explanation:
          "The resuscitative hysterotomy is a maternal resuscitation move: delivery of the fetus decompresses the great vessels and restores the venous return CPR depends on. Start its clock from the beginning of CPR; waiting until 'failure' wastes the minutes that make it work.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Maternal Collapse",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman collapses two days after a normal vaginal birth. Which cause list should be running in your head alongside standard resuscitation?",
        options: [
          "Only obstetric causes are possible after delivery, so no standard 4Hs and 4Ts apply",
          "Ectopic pregnancy and placenta praevia are the leading causes in this period",
          "Postpartum haemorrhage, sepsis and thromboembolism top the list, alongside the standard 4Hs and 4Ts causes",
          "Collapse after birth is almost always vasovagal and needs no resuscitation",
        ],
        correctIndex: 1,
        explanation:
          "The postnatal collapse list is led by haemorrhage (including concealed), sepsis and pulmonary embolism, in addition to the standard reversible causes. Collapsed postnatal women deserve the full systematic response — 'just fainted' is a diagnosis that audits discover was wrong.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Collapse",
        front: "Give the SHOUT-TILT-PUMP-FOUR sequence.",
        back: "SHOUT for the arrest team and defibrillator; TILT the woman or displace the uterus left (from 20 weeks); PUMP the chest hard and fast with standard CPR; FOUR minutes without circulation from 20 weeks = resuscitative caesarean.",
      },
      {
        topic: "Maternal Collapse",
        front: "Why is the resuscitative caesarean part of the mother's resuscitation?",
        back: "Emptying the uterus relieves aortocaval compression and restores venous return — CPR suddenly becomes effective. Saving the baby is the second benefit, not the primary purpose.",
      },
      {
        topic: "Maternal Collapse",
        front: "Name the leading causes of postnatal collapse.",
        back: "Postpartum haemorrhage (including concealed), sepsis and thromboembolism — with the standard 4Hs and 4Ts still running alongside.",
      },
    ],
    sources: [
      {
        organization: "Royal College of Obstetricians and Gynaecologists",
        title: "Green-top Guideline No. 56: Maternal Collapse in Pregnancy and the Puerperium",
        year: "2011",
        note: "Verify current edition on the RCOG website.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives, 17th edition",
        year: "2020",
        note: "Emergency management chapters. Verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "Maternal Collapse and Shock",
    lessonTitle: "Obstetric Shock: Causes and Response",
    description:
      "Haemorrhagic, septic and amniotic causes — how young mothers hide shock beautifully, and the response that catches it early.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the physiological stages of shock and why young women conceal blood loss so effectively.",
      "Explain the major obstetric causes of shock and how each directs treatment.",
      "Apply early recognition and quantified blood loss to a postpartum woman whose numbers do not match her appearance.",
    ],
    tags: ["shock", "emergency", "haemorrhage", "sepsis", "haemodynamics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Shock means the tissues are starving — the circulation, whatever its pressure, is no longer delivering. In maternity the causes are few and fierce: bleeding first, sepsis second, amniotic fluid embolism and clot obstruction as the rarer assassins. The trap is that your patients are young and fit, and young fit women defend their blood pressure heroically — right up until they collapse without warning.\n\nThis lesson trains the early signs, before the fall, and the response that runs volume and cause in parallel.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Shock progresses through compensation. First the **pulse rises** and the skin arteries clamp down: she is pale, cold, clammy; fingertips refill slowly; urine output falls. The **pulse pressure narrows**, the breathing quickens, and she is anxious or oddly restless. Blood pressure holds until perhaps a **third of her volume is gone** — and pregnancy gave her extra volume to lose, while the fetus suffers quietly well before she does. By the time the BP falls, you are late; when it is unrecordable, you are nearly out of road.\n\nThe response: **call for help early**; restore delivery — oxygen, two large-bore IV lines, warm fluids, and **blood early** in haemorrhage (endless crystalloid while she keeps bleeding only dilutes what remains); **treat the cause in parallel**, because volume alone does not stop a bleeding uterus — rub, empty the bladder, give uterotonics, escalate to theatre; for septic shock, cultures and broad-spectrum antibiotics within the hour. **Quantify the loss**: weigh the swabs and pads, use a collection bag — the eye underestimates blood every single time. Monitor with pulse, BP, respirations and hourly urine (the catheter tells the truth) on a MEOWS chart, left lateral if she is still pregnant.",
      },
      {
        type: "clinical_pearl",
        body: "Trust the pulse and the skin, not the pressure — and weigh the swabs. A young mother with a rising pulse and cold fingertips has lost serious blood even if her pressure reads beautifully.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An hour after a normal vaginal birth, the midwife reports 'moderate bleeding, maybe 500 mL — she looks fine'. The woman is pale and quiet, fingers cold, pulse 118, BP 96/62, respirations 24, and the catheter bag holds 15 mL for the hour. The pads are soaked but the estimation was 'about two'.\n\nWhat is happening, and what do you do in the next fifteen minutes?\n\nAnswer: This is compensated hypovolaemic shock — the '500 mL' is almost certainly wrong, and the physiology (pulse 118, narrowed pressure, cold skin, near-absent urine) speaks of loss well beyond a litre. Weigh the swabs and pads on a scale now. In parallel: call for help and the blood bank; rub the uterus and give uterotonics per protocol; empty the bladder; two large-bore lines with bloods for FBC, coagulation and crossmatch; warm fluids while blood is fetched; oxygen; MEOWS charting with hourly urine as your progress meter. If bleeding continues, she goes to theatre — the treatment of haemorrhagic shock is the treatment of its cause.",
      },
      {
        type: "memory_trick",
        body: "P-P-P: the **P**ulse speaks first, the **P**ressure lies late, the **P**erfusion — skin, capillary refill, urine — tells the truth. And the swabs go on a scale, not on a guess.",
      },
      {
        type: "summary",
        body: "- Shock = failing tissue delivery; young mothers compensate brilliantly and collapse suddenly — watch the pulse, skin and urine, not the BP.\n- Causes: haemorrhage leads, sepsis follows, embolism is the rarer killer; each redirects treatment.\n- Respond in parallel: help, oxygen, two large-bore lines, blood early, uterotonics and theatre for the cause, antibiotics within the hour for sepsis.\n- Quantify loss by weighing swabs and pads; monitor with MEOWS and hourly urine.",
      },
    ],
    questions: [
      {
        topic: "Obstetric Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An hour after birth, a woman has pulse 118, BP 96/62, cold fingertips and 15 mL of urine in the hour. The midwife estimates blood loss at 500 mL. What is the correct interpretation?",
        options: [
          "Normal post-birth physiology — observe and chart hourly",
          "Mild anxiety — reassure and offer tea",
          "Compensated hypovolaemic shock: the true loss is almost certainly far higher than estimated, and the pulse, cold skin and urine output are the honest signs",
          "Early septic shock — start with cultures alone before any fluids",
        ],
        correctIndex: 2,
        explanation:
          "Tachycardia, narrowed pulse pressure, cold skin and oliguria are the compensatory phase of hypovolaemia — typically appearing only after substantial loss. The visual estimate is unreliable; weigh the swabs and treat for the physiology you see.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Obstetric Shock",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which group of signs represents the EARLIEST reliable indicators of obstetric haemorrhagic shock?",
        options: [
          "Fall in systolic blood pressure and loss of consciousness",
          "Rising pulse, cold clammy skin, delayed capillary refill and falling urine output",
          "Rising blood pressure and bounding pulses",
          "Warm flushed skin with a slow pulse",
        ],
        correctIndex: 1,
        explanation:
          "Compensation shows first in the pulse and the skin perfusion, with urine output quietly falling. Blood pressure is maintained until roughly a third of volume is lost — by which point you are already late.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Obstetric Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is endless crystalloid the wrong answer to ongoing obstetric haemorrhage?",
        options: [
          "Because crystalloid crosses the placenta and harms the baby",
          "Because crystalloid raises blood pressure dangerously fast",
          "Because replacing volume while bleeding continues dilutes the remaining blood and its clotting factors — blood and correction of the cause (uterotonics, theatre) are the definitive treatment",
          "Because young women cannot tolerate IV fluids",
        ],
        correctIndex: 3,
        explanation:
          "Fluid buys minutes, but the cure is stopping the bleeding: uterotonics, mechanical measures and theatre, with early blood and blood products to preserve oxygen delivery and clotting. Volume without cause control is a slowing failure.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Obstetric Shock",
        front: "What are the earliest honest signs of haemorrhagic shock in a young mother?",
        back: "Rising pulse, narrowed pulse pressure, cold clammy skin with delayed refill, falling urine output and anxiety/restlessness. Blood pressure holds until roughly a third of the volume is gone.",
      },
      {
        topic: "Obstetric Shock",
        front: "Why weigh swabs and pads instead of estimating blood loss?",
        back: "Visual estimation underestimates every time, sometimes by half. Weighing swabs and pads (1 g ≈ 1 mL) plus a calibrated collection bag gives the true number that drives treatment.",
      },
      {
        topic: "Obstetric Shock",
        front: "Name the major obstetric causes of shock.",
        back: "Haemorrhage (commonest — atony, trauma, retained tissue, coagulopathy), sepsis, amniotic fluid embolism and thromboembolism — each redirects treatment toward its cause.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, 2nd edition",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565195",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
        note: "Verify current edition on the WHO publications site.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8th edition",
        year: "2021",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "obstetric-emergencies",
    moduleTitle: "Maternal Collapse and Shock",
    lessonTitle: "Sepsis in Pregnancy and After Birth",
    description:
      "The quiet killer of new mothers — why the respiratory rate is the sentry, and why antibiotics within the hour are the treatment's beating heart.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe maternal and puerperal sepsis and identify the red-flag vital signs in pregnancy and after birth.",
      "Explain the Sepsis Six bundle and the importance of antibiotics within the first hour.",
      "Apply the first response to a day-three postpartum woman with fever, tachycardia and tachypnoea.",
    ],
    tags: ["sepsis", "maternal", "puerperal sepsis", "emergency", "antibiotics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sepsis is the quiet one. It rarely announces itself with a collapse; it arrives as a fever, a tender uterus, a mother who 'isn't quite herself' — and it kills more new mothers than almost any other cause. In Ghana the trap is real: every fever in a postnatal mother is malaria until excluded, but malaria treatment alone has buried cases of puerperal sepsis.\n\nThis lesson is about recognition that outruns the fever chart, and the bundle that must start within the hour.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Puerperal sepsis** is infection of the genital tract after birth, classically from rupture of membranes to day 42 — but sepsis around birth can arise from any source: the uterus (endometritis — tender uterus, offensive lochia, fever), wounds, breasts, urine, chest. What makes it deadly is masking: pregnancy already runs a fast pulse and warm skin, so the classic 'septic' picture arrives late. Watch instead for the **sentry signs**: pyrexia 38 degrees or more (or hypothermia), **respiratory rate of 25 or more** — the most under-charted, most telling vital — heart rate above 110-120, and any altered mental state; 'she seems confused' from a relative is data. Two or more of these, or a MEOWS in the red zone, and sepsis is the working diagnosis.\n\nThe response is the **Sepsis Six, within one hour**: the three IN — high-flow oxygen, IV broad-spectrum antibiotics, IV fluid resuscitation; the three OUT — cultures (before antibiotics if this costs no delay), serum lactate, hourly urine via catheter. Antibiotics within the first hour is the intervention that most changes survival — do not wait for culture results or the ward round. In Ghana, take the malaria smear in parallel, never instead. Escalate early: septic shock in a young mother can move from clinic to ICU in four hours.",
      },
      {
        type: "clinical_pearl",
        body: "The respiratory rate is the sentry — a postnatal mother breathing 26 a minute has sepsis until proven otherwise, whatever the temperature chart says. And the antibiotic clock starts at recognition, not at the registrar's arrival.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day three after a normal birth, a 24-year-old mother has a temperature of 38.6, pulse 114, respirations 26, BP 100/62 and 'she is not talking well' per her mother-in-law. The uterus is tender, the lochia offensive, and she has passed urine twice today.\n\nWhat is the working diagnosis and what happens in the next hour?\n\nAnswer: Fever, tachycardia, tachypnoea, mild hypotension, new confusion, tender uterus and offensive lochia — puerperal sepsis (endometritis) approaching severe sepsis; the confusion and RR 26 say it is already serious. Within the hour: call the senior; take blood cultures, high vaginal swab and urine culture plus a malaria smear — in parallel, never instead; IV broad-spectrum antibiotics within the hour per protocol; oxygen; IV fluids with careful monitoring (she risks pulmonary oedema); lactate; catheter for hourly urine; MEOWS charting; reassess at one hour — falling pressure or high lactate means critical-care review and transfer. Waiting overnight 'to see if the malaria treatment works' is how this case becomes a maternal death audit.",
      },
      {
        type: "memory_trick",
        body: "SEPSIS SIX — three IN, three OUT, all within the hour: **I**n — oxygen, antibiotics, IV fluids. **O**ut — cultures, lactate, urine output. And the sentry at the door is the respiratory rate.",
      },
      {
        type: "summary",
        body: "- Puerperal sepsis spans rupture of membranes to day 42; sources include uterus (commonest), wounds, breast, urine and chest.\n- Pregnancy masks sepsis — watch the sentry signs: pyrexia, RR 25+, HR 110+, new confusion; chart the respiratory rate.\n- Sepsis Six within one hour: oxygen, IV antibiotics, IV fluids IN; cultures, lactate, urine output OUT.\n- Test for malaria in parallel — never let malaria treatment delay the sepsis bundle; escalate early toward critical care.",
      },
    ],
    questions: [
      {
        topic: "Maternal Sepsis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which single vital sign most reliably raises the flag for sepsis in a postnatal mother, and is most often under-charted?",
        options: [
          "Blood pressure",
          "Temperature alone",
          "Respiratory rate — a rate of 25 or more in a postnatal mother is sepsis until proven otherwise",
          "Blood glucose",
        ],
        correctIndex: 0,
        explanation:
          "Tachypnoea is an early and highly predictive sepsis sign, and it is the one most often skipped when observations are charted. Blood pressure falls late; temperature alone misses the afebrile septic mother.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Maternal Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A day-three postpartum woman has fever 38.6, pulse 114, RR 26 and mild hypotension. What must happen within the first hour, and in what relationship to cultures?",
        options: [
          "Wait for blood cultures, malaria smear and the doctor's review before starting any treatment, to target therapy precisely",
          "The Sepsis Six: oxygen, IV fluids, cultures, lactate, urine output — and IV broad-spectrum antibiotics within the hour, with cultures taken first only if this causes no delay",
          "Oral antimalarials for a week, then reassess for antibiotics if she deteriorates",
          "Paracetamol and tepid sponging hourly until the fever settles, then decide",
        ],
        correctIndex: 2,
        explanation:
          "The hour-one bundle is the survival difference: antibiotics within 60 minutes alongside oxygen, fluids, lactate and urine monitoring, with cultures drawn before antibiotics only if it costs no delay. Waiting for results or ward rounds is the classic fatal pause.",
        courseSlug: "obstetric-emergencies",
      },
      {
        topic: "Maternal Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal mother is feverish with a tender uterus and offensive lochia on day three. How should malaria, common in Ghana, be handled in her care?",
        options: [
          "Treat malaria alone for 48 hours — fever after birth in Ghana is almost always malaria",
          "Test for malaria in parallel while treating the sepsis possibility immediately with the full bundle; never let malaria management delay antibiotics",
          "Malaria and sepsis cannot coexist, so a positive smear excludes sepsis",
          "Malaria testing is only needed if she is jaundiced",
        ],
        correctIndex: 1,
        explanation:
          "Both diseases are common and can coexist. The safe pattern: smear and cultures in parallel, sepsis bundle now, malaria treatment added if confirmed. Malaria-first thinking is exactly how puerperal sepsis deaths are audited in malaria-endemic settings.",
        courseSlug: "obstetric-emergencies",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Sepsis",
        front: "What is the Sepsis Six?",
        back: "Six actions within one hour — three IN: oxygen, IV broad-spectrum antibiotics, IV fluids; three OUT: cultures (before antibiotics if no delay), lactate, hourly urine output.",
      },
      {
        topic: "Maternal Sepsis",
        front: "What is the time-frame of puerperal sepsis, and its commonest postnatal source?",
        back: "From rupture of membranes until day 42 after birth; endometritis — tender uterus with offensive lochia and fever — is the classic postnatal source, alongside wounds, breast, urine and chest infections.",
      },
      {
        topic: "Maternal Sepsis",
        front: "List the sentry signs of maternal sepsis.",
        back: "Pyrexia 38+ (or hypothermia), respiratory rate 25 or more, heart rate above 110-120, new confusion or altered behaviour, and hypotension — the first four appear before the pressure ever falls.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sepsis — Fact Sheet",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
      },
      {
        organization: "World Health Organization",
        title: "WHO Statement on Maternal Sepsis",
        year: "2017",
        note: "Global Maternal Sepsis Study background. Verify current edition on the WHO website.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Antimicrobial choices for puerperal sepsis. Verify current edition, Ministry of Health Ghana.",
      },
    ],
  },
];
