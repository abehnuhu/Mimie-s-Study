// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch C (Advanced Medical & Surgical
// Nursing, Ethics & Professional Practice, Research Methods)
// 25 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "Clinical Reasoning: From Novice to Expert",
    description:
      "The road from rules to intuition — Benner's five stages, the two speeds of expert thinking, and the habits that keep fast judgement safe.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe Benner's five stages of clinical growth and what changes at each step.",
      "Explain the two modes of expert thinking — fast pattern recognition and slow deliberate analysis — and when to switch between them.",
      "Apply the antidotes to premature closure, anchoring and availability bias to ward cases.",
      "Recognise the feeling that the story does not fit as clinical data that triggers structured re-checking.",
    ],
    tags: ["clinical reasoning", "expertise", "decision making", "cognitive bias"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Think back to your first ward placement. Every task came with a rule, and you followed the rules because rules were all you had. Now, in your final year, something has changed: you look at a patient and you know things — noticing, sorting, sensing trouble — without always being able to say how. This lesson is about that journey: the well-travelled road from novice to expert, what expert thinking actually is, and how to keep it safe as it speeds up.\n\nThe road was mapped by **Patricia Benner**, who watched real nurses work and described five stages of growth. But expertise is not just an accumulation of facts. It is a change in the shape of thinking itself — and the faster thinking becomes, the more deliberately it must be checked.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Benner's five stages describe how a nurse's relationship with the work changes. The **novice** follows rules with no ward context to bend them. The **advanced beginner** recognises recurring situations — 'this looks like the patients who go off' — but still needs help ranking them. The **competent** nurse plans a whole shift deliberately and knows what can safely wait. The **proficient** nurse sees situations whole and anticipates: the day-two post-operative patient who has gone quiet is already a worry before the chart says so. The **expert** responds fluidly, often without conscious analysis — which is both the gift and the trap.\n\nExperts hold two thinking modes. **System 1** is fast, effortless pattern recognition — real clinical data, learned from hundreds of patients. **System 2** is slow, deliberate, hypothesis-testing reasoning. Expertise is not choosing one mode; it is knowing when to switch. Staying safe is **calibration**: tracking whether your calls proved right, saying your reasoning aloud, and slowing down the moment the story stops fitting. Watch for the classic traps — **premature closure** (settling on the first answer that fits), **anchoring** (fixating on one early detail) and **availability** (judging by the case you remember most vividly).",
      },
      {
        type: "table",
        title: "Benner's five stages on a real ward",
        body: "| Stage | What it looks like | How to keep growing |\n|---|---|---|\n| Novice | Follows rules exactly; cannot yet tell which detail matters | Ask the why behind every routine; rehearse skills until they are automatic |\n| Advanced beginner | Recognises recurring patterns but needs help ranking them | Seek feedback on priorities, not just tasks |\n| Competent | Plans the shift, manages the routine, knows what can wait | Start reviewing how your predictions turned out |\n| Proficient | Sees the whole picture; anticipates trouble before the numbers change | Practise saying aloud what you are noticing, and let others challenge it |\n| Expert | Fluid, intuitive response — with the humility to re-check it | Stay calibrated: audit your calls, teach, and slow down when something smudges |",
      },
      {
        type: "clinical_pearl",
        body: "If the story does not sit right, that feeling is a finding, not a distraction. Slow down, say aloud what does not fit, widen the possibilities, and get a second pair of eyes. Speaking your reasoning aloud is the cheapest safety device on any ward.",
      },
      {
        type: "quiz_prompt",
        title: "Which stage is speaking?",
        body: "A final-year student takes over a bay. Mid-morning she notices a patient has gone unusually quiet since the night — no observation is due for two hours, but she checks him anyway and finds a fast pulse and a cool, damp forehead. She cannot say what told her; the pieces simply did not sit right.\n\nWhich stage of Benner's ladder best describes this, and which mode of thinking fired?\n\nAnswer: She is working like a proficient nurse moving toward expertise — the whole picture is beginning to speak to her. The noticing was System 1 pattern recognition; her response — checking the patient rather than waiting for the scheduled round — is exactly how System 2 verification should answer a System 1 alarm.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night shift, male surgical ward of a district hospital. A 54-year-old teacher is on day two after bowel surgery for an obstruction. His temperature is 38.2 °C. Three patients on the ward are on malaria treatment, and the night nurse, warm and busy, says, 'It is malaria season — we all know it,' and moves toward the drugs cupboard.\n\nSomething snags you: he has not passed flatus, his abdomen is more distended than at evening review, his heart rate has crept from 84 to 102, and he winces when you brush his belly.\n\nWhat is happening in the night nurse's thinking, and what do you do next?\n\nAnswer: Fast pattern recognition is drifting into premature closure — fever plus malaria season is being fitted onto a post-operative abdomen whose real danger is surgical sepsis, perhaps an anastomotic leak, which kills faster than malaria. Switch to deliberate analysis: full vital signs, a focused abdominal assessment, early-warning scoring, careful fluid balance review, and immediate escalation to the surgical team — rather than reaching for the malaria drawer. The feeling that something did not fit was not insolence; it was expertise forming.",
      },
      {
        type: "memory_trick",
        body: "PATTERN — PAUSE — PROVE. Run the pattern, pause the moment anything smudges it, and prove the answer with observations, examination and evidence before the plan is committed. And remember the ladder: rules, then patterns, then plans, then the whole picture, then fluid judgement — climbed one honest shift at a time.",
      },
      {
        type: "summary",
        body: "- Benner's road: novice, advanced beginner, competent, proficient, expert — each stage changes how you see, not just what you know.\n- Experts hold two modes: fast pattern recognition (System 1) and slow deliberate analysis (System 2); expertise is knowing when to switch.\n- The traps are premature closure, anchoring and availability bias — and a story that does not fit is a finding.\n- Calibration — reviewing your own calls and reasoning aloud — keeps fast thinking honest.\n- Escalating a doubt is never disrespect; it is the professional habit that keeps patients alive.",
      },
    ],
    questions: [
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Patricia Benner described how nurses grow from rule-followers to experts. Which sequence of stages is correct?",
        options: [
          "Novice → competent → advanced beginner → expert → proficient",
          "Novice → advanced beginner → competent → proficient → expert",
          "Novice → proficient → competent → advanced beginner → expert",
          "Advanced beginner → novice → competent → expert → proficient",
        ],
        correctIndex: 1,
        explanation:
          "The classic ladder is novice (rules), advanced beginner (recognises recurring patterns), competent (deliberate planning of whole situations), proficient (sees the whole picture and anticipates) and expert (fluid, intuitive judgement that still checks itself).",
        whyOthers: {
          A: "This swaps advanced beginner with competent and reverses the top two stages.",
          C: "Proficient cannot precede competent — the whole-picture view grows out of deliberate competence.",
          D: "Novice must come first; every nurse starts with rules and no context.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A senior nurse walks past a post-operative patient, stops mid-stride and says 'something is not right here' before a single vital sign is taken. What is happening, and what should follow?",
        options: [
          "Deliberate analysis — she has already listed and tested every hypothesis mentally",
          "Fast pattern recognition flagging a risk — an impression that must now be verified with structured, deliberate assessment",
          "Intuition that should be acted on with treatment immediately, since experts are rarely wrong",
          "A guess with no clinical value, because observations have not been measured yet",
        ],
        correctIndex: 1,
        explanation:
          "The mid-stride stop is System 1 at work: trained pattern recognition built from hundreds of patients. Expertise is not trusting the alarm blindly nor dismissing it — it is answering the alarm with System 2: full assessment, early-warning scoring and escalation.",
        whyOthers: {
          A: "Deliberate analysis is slow and hypothesis-driven — this moment was fast and wordless.",
          C: "Experts are sometimes wrong precisely because today's case only looks like a familiar one; intuition is verified, not obeyed.",
          D: "The impression is real clinical data — unmeasured does not mean untrue.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Clinical Reasoning",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "Day two after bowel surgery, your patient spikes a fever. Three patients on the ward are on malaria treatment, and a colleague says, 'It is malaria season — let us treat and move on.' The abdomen is distended, he has not passed flatus, and his pulse is climbing. What is the soundest next move?",
        options: [
          "Accept malaria as the working diagnosis — the ward pattern makes it the most likely cause",
          "Withhold all action until a blood film result returns, to avoid treating the wrong condition",
          "Give malaria treatment exactly as for the other three patients, since the protocol is the same",
          "Keep malaria on the list but treat possible surgical sepsis as the priority: full assessment, early-warning scoring and immediate escalation before the label is fixed",
        ],
        correctIndex: 3,
        explanation:
          "The colleague is being pulled into premature closure and availability bias — the diagnosis that comes most easily to mind this week. In a post-operative abdomen, fever with rising pulse, distension and absent flatus makes abdominal sepsis the worst-first possibility, and it is excluded actively, not after malaria treatment has delayed the search.",
        whyOthers: {
          A: "Ward frequency does not override this patient's post-operative danger — the two stories share only the fever.",
          B: "Waiting for results while a possible leak progresses is not caution; assessment and escalation can start now.",
          C: "Same protocol, wrong patient — a missed anastomotic leak can be fatal within hours.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which habit best keeps an expert nurse's fast thinking honest over the years?",
        options: [
          "Trusting accumulated experience completely, because intuition only grows stronger",
          "Reviewing how your clinical calls turned out, speaking your reasoning aloud to colleagues, and slowing down whenever the story does not fit",
          "Avoiding protocols, since they interrupt the flow of expert judgement",
          "Relying on seniority — the most senior opinion in the room should end the discussion",
        ],
        correctIndex: 1,
        explanation:
          "Calibration is the expert's maintenance discipline: tracking your hits and misses, reasoning aloud so others can challenge you, and deliberately switching to slow analysis when something smudges the pattern. Intuition that is never audited drifts; intuition that is checked stays sharp.",
        whyOthers: {
          A: "Unexamined confidence is how the classic traps — premature closure, anchoring, availability — become habits.",
          C: "Protocols and early-warning scores are precisely the System 2 supports that catch System 1's misses.",
          D: "Hierarchy that ends discussions silences the bedside eyes — often the first to see deterioration.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Clinical Reasoning",
        front: "Name Benner's five stages, in order.",
        back: "Novice, advanced beginner, competent, proficient, expert — from rule-following without context, through deliberate planning and whole-picture anticipation, to fluid intuitive judgement that still re-checks itself.",
      },
      {
        topic: "Clinical Reasoning",
        front: "System 1 versus System 2 thinking — what is each, and what is expertise?",
        back: "System 1 is fast, effortless pattern recognition learned from many patients; System 2 is slow, hypothesis-testing analysis. Expertise is not picking one — it is knowing when to switch, and answering every System 1 alarm with System 2 verification.",
      },
      {
        topic: "Clinical Reasoning",
        front: "Name three classic cognitive traps that distort expert judgement.",
        back: "Premature closure (settling on the first answer that fits), anchoring (fixating on one early detail), and availability (judging by the most vivid or recent case).",
      },
      {
        topic: "Clinical Reasoning",
        front: "A patient's observations are all normal, but the story does not sit right. What is that feeling?",
        back: "A finding, not a distraction — unregistered cues your experience has collected. Name aloud what does not fit, widen the possibilities, and get a second pair of eyes.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Addison-Wesley",
        title: "Benner P. From Novice to Expert: Excellence and Power in Clinical Nursing Practice",
        year: "1984",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: "2022",
        note: "Clinical decision-making chapters. Verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "The Complex Patient: Multi-System Care",
    description:
      "Diabetes plus kidneys plus heart plus a foot that will not heal — when problems talk to each other, the plan must listen to all of them at once.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Explain how complications multiply rather than add risk in a patient with several conditions.",
      "Build a single written problem list and ranked plan for a complex patient, worst problems first.",
      "Apply the anticipation question — what could go wrong tonight, next week, at discharge — to care planning.",
      "Describe the coordinator's role in carrying one plan across every team and family level.",
    ],
    tags: ["complex care", "multimorbidity", "care planning", "prioritization"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some patients arrive with one problem. Others arrive with a queue: fifteen years of diabetes, kidneys that no longer filter as they should, a heart that tires on the stairs, a foot ulcer that will not close, four clinics' worth of medicines — and a family doing its best at the end of a tro-tro route. Managing complexity is not managing each problem well, side by side. It is managing their conversation.\n\nThis lesson is about integration: one story, one plan, one person holding it together — the difference between a patient 'known to be high risk' and a patient whose every danger has been thought through before the night it happens.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Complications **multiply** risk rather than add it. Diabetic kidneys clear fluids and medicines differently, so a standard dose can behave like a different dose; a numb diabetic foot lets infection deepen silently; a failing heart turns a small fluid miscalculation into breathlessness at 2 am. Complex care therefore starts with a **single written problem list** naming each condition and what it does to the others, from which grows one plan with a **named coordinator** — often you.\n\nThe plan works by **anticipation** and by **worst-first ranking**. For each problem ask: what could go wrong tonight, next week, at discharge — and where must he be when it does? Whatever could kill or disable within hours is excluded first, even if it is uncommon. Write the plan where everyone can see it — the chart, the ward board, the referral letter — and tell it back to the patient and family in plain language: who decides at 2 am, and how the transport will be paid.",
      },
      {
        type: "table",
        title: "Stacked problems, multiplied dangers",
        body: "| Problems together | What they do to each other | What to watch tonight |\n|---|---|---|\n| Diabetes + kidney disease | Low blood sugars last longer; medicines accumulate | Meal intake, glucose checks, urine output |\n| Heart failure + kidney disease | Fluid becomes a tightrope — overload or dehydration | Daily weight, breathlessness at rest, oedema |\n| Diabetes + foot ulcer | Infection spreads quietly in numb tissue | Spreading redness, smell, pain on gentle pressure, fever |\n| Any illness + advanced age | Less physiological reserve; presentations turn quiet | New confusion, falls, refusing food — treat each as a new finding |",
      },
      {
        type: "clinical_pearl",
        body: "Complexity multiplies faster than it adds. When the second serious problem arrives in the same notes, the risk of the first one turning fatal has already grown — that is the moment to escalate and re-plan, not when the pulse finally rises.",
      },
      {
        type: "quiz_prompt",
        title: "Two problems, one patient",
        body: "Your patient with heart failure develops diarrhoea and vomiting from a gut infection. Why does the new problem change the old one — and which single daily measurement becomes your most honest guide?\n\nAnswer: A failing heart is balanced on fluid, and the infection is draining volume the heart was counting on; the medicines that shed fluid may now push him toward dehydration and kidney strain. The daily weight, taken the same way each morning, tells the truth faster than any single observation: a sharp fall warns of dehydration, a sharp rise of overload. Escalate early with the weight trend in your hand.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old retired teacher is admitted from the medical outpatient clinic. His list: type 2 diabetes for fifteen years, chronic kidney disease, hypertension, and a right foot ulcer that has oozed for two weeks. He lives with his daughter, a market trader who works dawn to dusk; his clinic medicines ran out three weeks ago because 'the pharmacy money finished'. This evening his temperature is 37.9 °C, his pulse 104, the ulcer's redness has spread beyond the margin you charted yesterday, and he is mildly confused about the day of the week.\n\nBuild his night. What are the elements of a safe, integrated plan?\n\nAnswer: Rank worst first: sepsis from the foot is the immediate threat — full assessment, escalate to the medical team now, and prepare the investigations and treatment they will direct. The confusion could be infection, glucose trouble or kidney upset, so check what you can check and chart the change as a finding, not a fault of old age. One written problem list: diabetes, kidney disease, hypertension, infected ulcer, medicine lapse, family circumstances. One plan: glucose monitoring tonight, strict intake-output and daily weight, ulcer reassessment with the wound team, review of the lapsed medicines by the doctor with his kidneys in mind, and a family conversation tonight — not at discharge — about who watches him at home and how the next medicine bill will be met. One coordinator: you, carrying the list to every review so no thread is dropped when each specialist sees their organ and leaves.",
      },
      {
        type: "memory_trick",
        body: "The FOUR ONES: ONE list of problems, ONE plan everyone can see, ONE coordinator who owns it, ONE story told back to the patient and family in their own language.",
      },
      {
        type: "summary",
        body: "- Complications interact and multiply risk; a single written problem list exposes the interactions.\n- Rank worst first: whatever could kill within hours is excluded before the common and the comfortable.\n- One plan, one named coordinator, one anticipation question — what could go wrong tonight, next week, at discharge, and where must he be when it does?\n- Family and finances are part of the clinical picture: a plan that ignores the empty pharmacy is a plan that fails at home.\n- The complex patient needs a nurse who holds the whole story — that is what advanced practice means.",
      },
    ],
    questions: [
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 58-year-old with long-standing diabetes now also has chronic kidney disease and a new foot ulcer. Why is he at far greater risk than any single problem suggests?",
        options: [
          "The diseases compete for the same medicines, so treatment must be delayed until one is cured",
          "The problems interact and multiply — infection in a diabetic foot can seed sepsis, and damaged kidneys clear drugs and fluids differently, so each problem changes the danger of the others",
          "It is mainly statistics — two problems simply double the risk, and three triple it",
          "Multi-system patients are always transferred to intensive care, where different rules apply",
        ],
        correctIndex: 1,
        explanation:
          "Complexity is multiplicative, not additive: each condition changes how the others behave. A numb foot hides deepening infection, kidneys alter drug and fluid handling, and the combination erodes the reserve he would need to survive a crisis.",
        whyOthers: {
          A: "Treatment is not delayed — it is coordinated, with the interactions in mind.",
          C: "If risk only added, a second problem would merely double the count; in reality it changes the first problem's behaviour.",
          D: "Most complex patients are managed on ordinary wards — that is exactly why integration skills matter.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Your complex patient becomes breathless overnight. He has heart failure, chronic kidney disease and a healing foot ulcer. Rank the differential the way an expert would.",
        options: [
          "Anxiety first, then heart failure, then pneumonia — the commonest emotional cause on night shift comes first",
          "Kidney disease first because it is chronic, then everything else in the order the problems appeared in the notes",
          "The life-threatening possibilities first — pulmonary oedema, pneumonia progressing to sepsis, a clot in the lung — actively excluded before settling on the benign explanations",
          "Foot ulcer sepsis first, because it is the newest problem on the list",
        ],
        correctIndex: 2,
        explanation:
          "Worst-first ranking puts whatever can kill within hours at the top, however uncommon: fluid on the lungs, evolving chest sepsis and pulmonary embolism all outrank anxiety. Newness and note order are not danger rankings — speed of death is.",
        whyOthers: {
          A: "Anxiety is a diagnosis of exclusion in the breathless complex patient, never the first label at 2 am.",
          B: "Chronicity tells you about the past; breathlessness tonight is a new question with new killers.",
          D: "The ulcer belongs on the differential — sepsis can present as breathlessness — but it earns its place by danger, not by date.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On many wards each specialist reviews 'their' organ and moves on. What is the coordinator's contribution in complex care?",
        options: [
          "Holding one written problem list and one plan, communicating them to every level — patient, ward team, referral hospital, family — so no thread is dropped",
          "Performing every specialist task personally, to keep the standard uniform",
          "Taking over the patient's decision-making so the family is spared difficult conversations",
          "Ensuring each specialist files a separate, independent plan so the record stays complete",
        ],
        correctIndex: 0,
        explanation:
          "When many teams touch one complex patient, the commonest failure is not any single team's error but the dropped thread between them. The coordinator owns continuity — the list, the plan, and the telling of it — while the clinical tasks still belong to the specialists.",
        whyOthers: {
          B: "No one person can be every specialist; integration, not substitution, is the role.",
          C: "Families need honest conversations, not a gatekeeper — and the patient's voice stays central.",
          D: "Nine separate plans on one chart is the problem, not the solution — complexity demands one reconciled plan.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Complex Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which anticipation question drives the written plan for a complex patient on your ward?",
        options: [
          "What has gone wrong for patients like this in other hospitals?",
          "What does the latest journal say about the rarest of his conditions?",
          "For every problem on his list: what could go wrong tonight, next week, at discharge — and where must he be, and what must be ready, when it does?",
          "Which problem is the oldest, since long-standing conditions always deserve attention first?",
        ],
        correctIndex: 2,
        explanation:
          "Anticipation walks each problem forward in time and pre-answers it: which ward, which referral, which supplies, which decision-maker. The plan then positions the patient and the resources before the crisis, not during it.",
        whyOthers: {
          A: "Other hospitals' audits may inform, but your plan must be built on this patient's stacked dangers.",
          B: "The rarest condition is rarely the one that will kill him tonight — relevance beats novelty.",
          D: "Age of a problem says nothing about its danger; rank by what could kill soonest.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Complex Care",
        front: "What are the FOUR ONES of managing a complex patient?",
        back: "One list of problems, one plan everyone can see, one coordinator who owns it, and one story told back to the patient and family in their own language.",
      },
      {
        topic: "Complex Care",
        front: "Why do complications multiply rather than add?",
        back: "Because they interact: diabetic kidneys change how medicines behave, a numb foot hides deepening infection, a failing heart turns small fluid shifts into crises — each condition changes how dangerous the others are.",
      },
      {
        topic: "Complex Care",
        front: "What does worst-first ranking mean at the bedside?",
        back: "Whatever could kill or disable within hours goes to the top of the differential and is actively excluded — before settling comfortably on the common and the benign.",
      },
      {
        topic: "Complex Care",
        front: "What is the coordinator's job in complex care?",
        back: "Hold one written problem list and plan, communicate them to every level — patient, ward team, referral hospital, family — and make sure no thread is dropped when specialists each see only their organ.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions",
        year: "2020",
      },
      {
        organization: "World Health Organization",
        title: "Framework on Integrated, People-Centred Health Services",
        year: "2016",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Management of comorbid adult conditions. Verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: "2022",
        note: "Chapters on multisystem care and older adults. Verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Thinking Like an Expert",
    lessonTitle: "Evidence at the Bedside",
    description:
      "Guidelines, trials and honest numbers — carrying evidence the last mile to the one patient in front of you.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Rank sources of evidence for a bedside question, from guidelines and systematic reviews down to expert opinion.",
      "Translate relative risk claims into absolute numbers for honest patient counselling.",
      "Apply the FACE check — Fit, Absolute, Context, Explain — when individualising evidence for a complex patient.",
      "Explain what to do when evidence, resources and patient circumstances disagree.",
    ],
    tags: ["evidence based practice", "guidelines", "clinical decision making", "appraisal"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Evidence does not apply itself. A guideline sitting in the ward office changes nothing until a nurse at a bedside decides what it means for the patient in front of her — whether that patient resembles the people who were studied, what the numbers actually say, and what to do when the evidence and the real world disagree. This lesson is about that last mile: taking what is already known — the pre-appraised guidelines, the summaries, the national protocols — and using it honestly on a real patient, with real resources, tonight.\n\nFinding studies and judging their quality is a craft your research course teaches in depth. Here the focus is the bedside move: the translation of established evidence into an individual decision.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In Ghana you are never far from a strong first source: the **Ghana Health Service Standard Treatment Guidelines** on the ward shelf, WHO guidance such as the **Package of Essential Noncommunicable Disease Interventions (PEN)**, and national protocols. They are evidence pre-chewed — teams have already searched and appraised — so when time is short, a current guideline outranks a memory and equals a good search. Beneath them sits the wider **hierarchy of evidence**: systematic reviews above single trials, trials above cohort studies, cohort studies above case reports, with expert opinion and tradition at the bottom — respected, but the weakest support.\n\nThen comes the part no guideline can do for you: **individualisation**. Trials tend to enrol the treatable middle of humanity — not the 84-year-old frail grandmother, not the patient with four diseases, not the village two hours from the pharmacy. And numbers need translation: a **relative risk reduction** of 50% can mean a fall from 4 in 100 to 2 in 100 — a very different sentence in a patient's ear. Always ask for the **absolute** numbers, and for what the outcome would mean in this particular life.",
      },
      {
        type: "table",
        title: "Where to look, in order",
        body: "| Source | What it is | Best used for |\n|---|---|---|\n| GHS Standard Treatment Guidelines / WHO PEN | National and global pre-appraised guidance | The first stop at every bedside question |\n| Systematic reviews | All quality studies on one question, combined | When a guideline is silent or outdated |\n| Randomised controlled trials | One intervention tested against a comparison | Specific 'does this work' questions |\n| Cohort and case-control studies | Observation without intervention | Questions trials cannot ethically test |\n| Expert opinion and tradition | Individual judgement and custom | Last resort — a hypothesis, never a conclusion |",
      },
      {
        type: "clinical_pearl",
        body: "Relative numbers impress; absolute numbers inform. 'It cuts your risk in half' and 'it spares 2 in every 100 people like you' are the same fact — but only the second lets a patient weigh the benefit against cost, travel and side effects. Translate before you counsel.",
      },
      {
        type: "quiz_prompt",
        title: "The guideline and the grandmother",
        body: "The hypertension guideline advises a target below 140/90 for most adults. Your patient is 84, frail, and has fallen twice since her blood pressure medicines were increased. What questions must you ask before the guideline rules her night?\n\nAnswer: Who was actually studied — were people like her included? What is the harm of tighter control for her specifically (dizziness, falls, a fractured hip) weighed against the benefit of stroke prevention at her age? What matters to her? Then take the tension back to the team — the guideline is the starting point of the decision, not the end of it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 62-year-old cloth trader is newly diagnosed with hypertension at your clinic. He listens carefully, then asks the question you should always be ready for: 'Doctor said these drugs reduce my stroke risk by a third. A third of what? And must I take them forever, with the clinic this far?'\n\nHow do you counsel him, using evidence honestly?\n\nAnswer: Translate the numbers. For illustration: if about 9 in 100 untreated people like him would have a stroke over ten years, 'a third' means roughly 3 in 100 are spared — a real benefit worth having, and an honest picture of the 91 who would not have had a stroke either way. Pair the medicine with the cheapest evidence-based medicine he owns: less salt in the shared pot, brisk walking most days, weight, no tobacco. Talk openly about cost and distance, because a plan he cannot afford is not a plan. Ask what he heard back, and book the review. Evidence became bedside care the moment it became his decision, informed by honest numbers.",
      },
      {
        type: "memory_trick",
        body: "FACE the evidence: **F**it — is this patient like the people who were studied? **A**bsolute numbers — out of how many? **C**ontext — do resources, distance and cost make it workable here? **E**xplain — does the patient understand it well enough to choose?",
      },
      {
        type: "summary",
        body: "- Guidelines — the GHS Standard Treatment Guidelines, WHO PEN — are the fast, pre-appraised first stop for bedside questions.\n- Evidence lives in a hierarchy: systematic reviews, then trials, then observational studies, with opinion and tradition last.\n- Translate relative claims into absolute numbers before counselling — patients deserve to hear 'out of how many'.\n- Trials often exclude the frail and the multi-morbid; individualising for the patient in front of you is expert work, not guideline rebellion.\n- Fit, Absolute numbers, Context, Explain — FACE — is the bedside checklist when evidence meets a person.",
      },
    ],
    questions: [
      {
        topic: "Evidence at the Bedside",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You need the best available answer to a bedside question and have limited time. Rank your sources.",
        options: [
          "Current clinical guidelines and systematic reviews first, then individual trials, then expert opinion as the weakest support",
          "Ask the most senior nurse, then check a textbook, then look for a guideline",
          "A single recent randomised trial always outranks a systematic review of many trials",
          "Textbooks are the strongest evidence, because they are written by professors",
        ],
        correctIndex: 0,
        explanation:
          "Pre-appraised guidance comes first: guidelines and systematic reviews have already searched, selected and combined the quality studies. A single trial, however recent, is one study among many; opinion and tradition are the weakest support.",
        whyOthers: {
          B: "Senior experience is valuable but sits in the 'expert opinion' tier — use it to interpret the guideline, not replace it.",
          C: "A systematic review of many trials beats any single trial by design — it pools and weighs them all.",
          D: "Authority is not evidence; a textbook's claim is only as strong as the studies behind it.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Evidence at the Bedside",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A drug information sheet says treatment 'reduces stroke risk by 50%'. What must you know before counselling a patient with this number?",
        options: [
          "Whether the study was done in Ghana, since foreign results never apply here",
          "The absolute risk — a 50% relative reduction could mean a fall from 4 in 100 to 2 in 100, which changes how a patient weighs the benefit against cost and clinic visits",
          "The price of the medicine, which is the only number patients truly care about",
          "Nothing — a 50% reduction means half of all patients on the drug will avoid stroke",
        ],
        correctIndex: 1,
        explanation:
          "Relative reduction without the baseline tells you nothing about how many people actually benefit. A 50% cut of a large risk and of a tiny risk are different clinical realities — and only the absolute numbers let the patient judge whether the treatment is worth his money and his journeys.",
        whyOthers: {
          A: "Setting matters for applicability, but the arithmetic trap here is relative versus absolute — and that trap survives every border.",
          C: "Cost matters genuinely, but knowing it cannot fix a misleading percentage.",
          D: "Half of a risk is not half of the patients — it is half of whatever the baseline chance was.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Evidence at the Bedside",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "The guideline recommends a blood pressure target below 140/90 for most adults. Your patient is 84, frail, and has become dizzy on standing since her last medicine change, nearly falling twice. What is the expert move?",
        options: [
          "Follow the guideline strictly — targets are targets, and dizziness is not a contraindication",
          "Discard the guideline as useless, since it clearly does not apply to old people",
          "Ask who was studied, weigh the harm of falls against the benefit of tighter control for this woman, and take the question back to the team and family for an individualised decision",
          "Stop her blood pressure medicines yourself and document the reason afterwards",
        ],
        correctIndex: 2,
        explanation:
          "The guideline is the starting point; the bedside question is whether this patient resembles the studied population and what the balance of benefit and harm looks like for her. Frailty, dizziness and near-falls change that balance — so the decision is reopened, openly, with the team, rather than followed blindly or overruled unilaterally.",
        whyOthers: {
          A: "In this woman, tighter control has already produced near-falls; a hip fracture can cost more than the blood pressure gains.",
          B: "Guidelines say 'for most adults' precisely because exceptions exist — the skill is individualising, not discarding.",
          D: "Changing prescribed treatment is a prescriber and team decision — the nurse's duty is to escalate the concern fast, not act alone.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Evidence at the Bedside",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Evidence supports a wound dressing technique that needs supplies your district pharmacy has not stocked for two months. What does evidence-based practice actually demand here?",
        options: [
          "Insist on the technique anyway, and let the wound wait until supplies arrive",
          "Abandon evidence-based practice whenever supplies run short",
          "Pretend to follow the protocol in the notes while using the old method",
          "Apply the evidence's principle as closely as local resources allow, document the constraint, and report the supply gap so the system can be fixed",
        ],
        correctIndex: 3,
        explanation:
          "Evidence-informed care adapts the principle to the context, records the constraint honestly, and escalates the resource problem so it can be solved. The wound is dressed as safely as today's supplies permit — never left bare, and never dressed with a fiction on the chart.",
        whyOthers: {
          A: "Leaving a wound unmanaged while waiting for perfect supplies harms the patient the evidence was meant to protect.",
          B: "Running short of one dressing is a reason to adapt, not to abandon the discipline.",
          C: "A chart that does not match reality is a safety and integrity failure — it breaks the record the next nurse depends on.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Evidence at the Bedside",
        front: "In order of trust, name the hierarchy of bedside evidence.",
        back: "Pre-appraised guidelines and systematic reviews first (GHS Standard Treatment Guidelines, WHO PEN), then randomised trials, then cohort studies, then case reports — with expert opinion and tradition last: a hypothesis, never a conclusion.",
      },
      {
        topic: "Evidence at the Bedside",
        front: "Why are guidelines called 'pre-chewed' evidence?",
        back: "Because a guideline or review team has already searched, selected and appraised the studies — so a current guideline outranks a memory and equals a good search when time is short.",
      },
      {
        topic: "Evidence at the Bedside",
        front: "Relative versus absolute risk — give the one-sentence translation rule.",
        back: "'Cuts your risk in half' is relative; 'spares 2 in every 100' is absolute — the same fact, but only the absolute number lets a patient weigh benefit against burden.",
      },
      {
        topic: "Evidence at the Bedside",
        front: "What does FACE stand for when individualising evidence?",
        back: "Fit — is this patient like the people studied? Absolute numbers — out of how many? Context — do resources, cost and distance make it workable here? Explain — does the patient understand enough to choose?",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "The ward's pre-appraised first source. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions",
        year: "2020",
      },
      {
        organization: "Churchill Livingstone",
        title: "Sackett DL, Straus SE, Richardson WS, et al. Evidence-Based Medicine: How to Practice and Teach EBM",
        year: "2000 (2nd edition)",
        note: "Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Complex Care in Context",
    lessonTitle: "The Ageing Patient & Multimorbidity",
    description:
      "The ward is growing older — learn the quiet ways illness speaks in an elder, and why the plan belongs to the person, not the disease list.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe why older adults present atypically and what 'confusion is the fever of the old' means in practice.",
      "Differentiate delirium from dementia using onset and course, and hunt reversible causes with the PINCH ME mnemonic.",
      "Explain how multimorbidity breaks single-disease guideline thinking and what anchors the plan instead.",
      "Apply nursing actions that protect the intrinsic capacity of frail older patients.",
    ],
    tags: ["older adults", "multimorbidity", "frailty", "delirium"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana is growing older. Children who once did not survive now do; strokes and diabetes that once went undiagnosed are now chronic companions; and the wards that once saw mostly the young are filling with patients in their seventies and eighties who arrive with a whole life of illness in one folder. The queue at the medical clinic is now, very often, a queue of elders.\n\nThis is one of the rewards of the health system's own success — and it changes the work. The senior nurse learns to see the person inside the disease list: the grandmother on five medicines brought in because 'she is not herself', the retired teacher whose every organ has its own clinic, the cocoa farmer whose family quietly fears he is 'going senile'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The first rule of ageing medicine is that presentations go quiet. Infection may arrive without fever — as confusion, a fall, or simply refusing food. A heart attack may arrive as breathlessness or a vague 'he is not himself' rather than crushing chest pain. Nurses sometimes say **confusion is the fever of the old**: in an elder, any sudden change in thinking, walking or eating is acute illness until proven otherwise.\n\nThe second rule: **multimorbidity breaks single-disease thinking**. Each guideline is written for one disease in a tidy patient; your patient has four diseases and is not tidy. The anchor for the plan is the patient's own goals — what she wants to be able to do — reconciled across the whole team. Around the diseases gather the **geriatric syndromes**: frailty, falls, incontinence, cognitive impairment and **polypharmacy** — where each new tablet can be the cause of the newest symptom.",
      },
      {
        type: "table",
        title: "The same diseases, wearing quieter clothes",
        body: "| Condition | Classic picture in a younger adult | How an older adult may show it |\n|---|---|---|\n| Pneumonia | Fever, cough, fast breathing | A fall, new confusion, off food, sleeping more |\n| Urinary tract infection | Burning, frequency, fever | Delirium, new incontinence, sudden worsening of everything |\n| Heart attack | Crushing chest pain, sweating | Breathlessness, quiet decline, 'just not himself' |\n| Depression | Sadness, expressed grief | Weight loss, withdrawal, 'failure to thrive' with no medical cause |",
      },
      {
        type: "clinical_pearl",
        body: "Any sudden change in an elder's mind, mobility or appetite is acute until proven otherwise. Dementia drifts in over months and years; delirium arrives over hours and days — and delirium has causes you can find and fix: infection, medicines, dehydration, retention, pain, low oxygen, metabolic upset. The nurse who sees the patient every shift is the first to notice, and the last to dismiss.",
      },
      {
        type: "quiz_prompt",
        title: "Since Tuesday",
        body: "Her granddaughter says: 'Grandma has become a bit senile since Tuesday.' What does the word 'since' do to your differential?\n\nAnswer: Onset over days points to delirium, not dementia. Hunt the reversible causes — infection (chest, urine, skin), a recent medicine change, dehydration, retained urine, pain, constipation, low oxygen — and report what you find. Dementia is a diagnosis of months, confirmed only after the reversible causes have been excluded; writing it on Tuesday's note closes the case while it is still winnable.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 74-year-old woman is brought to your ward at night. She has type 2 diabetes, hypertension and arthritis; her folder lists five medicines. Her granddaughter says she stopped eating two days ago, has been talking to people who are not there at night, and tonight tried to stand and nearly fell. Her observations: temperature 36.8 °C, pulse 92, blood pressure lying 148/82 — and she cannot say where she is.\n\nHow do you reason, and what do you do first?\n\nAnswer: New confusion with a two-day history in an elder is delirium until proven otherwise — and 'no fever' rules out nothing, because elders under-report temperature. Work the causes: check her glucose immediately (she is diabetic and not eating), examine for infection — chest, urine, skin — and send samples as directed, assess hydration, check whether she has passed urine, review what changed in her medicines, and look at her arthritic pain, because uncontrolled pain alone can unsettle an elder's mind. Meanwhile protect her: bed low, call bell within reach, light on, clock and calendar visible, glasses on, granddaughter encouraged to stay — familiar faces are treatment. Report the full picture, then reassess in the morning: delirium that clears tells you the cause was found; delirium that persists tells you to keep looking.",
      },
      {
        type: "callout",
        title: "The family is part of the geriatric team",
        body: "In Ghana, elders are rarely alone — the granddaughter who noticed, the son who pays, the cousin who brings porridge. Treat them as your informants and your allies: they know her baseline, her medicines, her language. And watch their fatigue too: the caregiver who is exhausted at week three will miss the pressure ulcer at week six. Teaching the family is geriatric nursing.",
      },
      {
        type: "memory_trick",
        body: "When an elder changes suddenly, think **PINCH ME**: **P**ain, **IN**fection, **C**onstipation, de**H**ydration, **M**edicines (new, stopped or wrong), **E**lectrolytes and Environment. Fix what you find, in that spirit, and the confusion often clears.",
      },
      {
        type: "summary",
        body: "- Ghana's population is ageing; multimorbidity is now the ordinary ward reality, not the exception.\n- Older adults present atypically: confusion, falls and refusal to eat are the fever equivalents of the old.\n- Delirium arrives over hours and days and is often reversible; dementia drifts over months. Never confuse them at 2 am.\n- PINCH ME — Pain, INfection, Constipation, deHydration, Medicines, Electrolytes/Environment — the reversible causes to hunt.\n- Anchor the plan to the patient's own goals across all diseases, and make the family part of the team.",
      },
    ],
    questions: [
      {
        topic: "The Ageing Patient",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is the 'classic' presentation of disease unreliable in older adults?",
        options: [
          "Older adults lose the ability to describe symptoms, so the history is always wrong",
          "Because they take many medicines that mask every symptom completely",
          "Ageing dulls the body's response to illness — infection may present as confusion or a fall rather than fever, and a heart attack as breathlessness or quiet decline rather than crushing chest pain",
          "Classical presentations only exist in textbooks; all patients present atypically at every age",
        ],
        correctIndex: 2,
        explanation:
          "The ageing immune and nervous systems mount weaker, quieter responses: fever may be absent in infection, and pain may be blunted in infarction. The elder's body whispers where the young body shouts — so sudden changes in mind, mobility and appetite become the important signs.",
        whyOthers: {
          A: "Elders describe symptoms as well as anyone — the difference is which symptoms the illness produces, not the telling of them.",
          B: "Medicines can mask or mimic symptoms, but the quieting of presentations is a property of ageing physiology itself.",
          D: "Young adults do show classic pictures; it is advanced age that turns the volume down.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "The Ageing Patient",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A granddaughter reports that her 74-year-old grandmother 'became senile since Tuesday' — confused at night, awake at 3 am, not herself, and it is now Thursday. How do you read this?",
        options: [
          "Dementia, because senility is a disease of the old that arrives with old age",
          "Delirium until proven otherwise — a change over days has an acute, often reversible cause, so hunt for infection, medicine changes, dehydration, retention and metabolic upset before any label of dementia is written",
          "Normal ageing — all elderly people drift in and out of confusion at night",
          "A psychiatric emergency requiring immediate sedation before any assessment",
        ],
        correctIndex: 1,
        explanation:
          "The timing is the diagnosis's first clue: delirium arrives over hours to days, dementia over months to years. Treating this as delirium opens the hunt for reversible causes — and many elders recover fully when the cause is found and fixed. Calling it dementia on day two closes the search while the cause is still winning.",
        whyOthers: {
          A: "'Senility' is a word, not a diagnosis; new-onset confusion in days is never the chronic drift of dementia.",
          C: "Night-time confusion in an elder is a symptom of illness or delirium — never 'just ageing'.",
          D: "Sedation before assessment hides the very signs (consciousness, breathing, reflexes) that would reveal the cause — and increases falls.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "The Ageing Patient",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your patient has diabetes, heart failure, arthritis and early kidney disease. Each specialist guideline gives instructions that conflict at the bedside. What anchors the plan?",
        options: [
          "A single prioritised plan built around her own goals — what she wants to be able to do — reconciled with the team's clinical judgement across all the conditions",
          "The guideline for whichever disease currently has the most abnormal test result",
          "The guideline with the newest publication date, which supersedes the others",
          "Whichever organ system the patient complains about most that morning",
        ],
        correctIndex: 0,
        explanation:
          "Single-disease guidelines assume a tidy patient; the multi-morbid elder is not tidy. The reconciler is the patient herself: her goals (stay mobile, stay out of hospital, hold the grandchild) rank which conditions deserve aggression and which deserve gentleness — a decision made with her and the whole team.",
        whyOthers: {
          B: "Today's most abnormal test tomorrow becomes another's — chasing laboratory targets produces plans that zig-zag.",
          C: "Publication date does not weigh benefit and burden for this woman; guidelines are starting points, not referees.",
          D: "Complaints vary by morning and by mood; goals endure by months and by meaning.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "The Ageing Patient",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of nursing actions most directly protects the intrinsic capacity of a frail older patient on your ward?",
        options: [
          "Strict bed rest to conserve energy, with minimal disturbance and routine sedation for sleep",
          "Early mobilisation, good food and hydration, skin and mouth care, meaningful conversation, glasses and hearing aids on and working, and falls-prevention vigilance",
          "Hourly full observation charts around the clock, with lights on for accuracy",
          "Limiting visitors so she is not overstimulated, and restricting evening fluids to reduce toileting",
        ],
        correctIndex: 1,
        explanation:
          "Intrinsic capacity — the WHO's framing of the elder's functional and mental reserves — is protected by movement, nutrition, hydration, sensory input, sleep, orientation and safety. Each of these is nursing work, done daily, long before a doctor's prescription is needed.",
        whyOthers: {
          A: "Bed rest dissolves muscle and sedation clouds minds — both accelerate the frailty spiral and raise fall risk on recovery.",
          C: "Measurement without mobilisation documents the decline it could have prevented; sleep disruption from hourly checks worsens delirium.",
          D: "Visitors orient and settle confused elders, and evening fluid restriction in a hot climate courts dehydration and kidney strain.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "The Ageing Patient",
        front: "Why must 'classic' presentations be trusted less in elders?",
        back: "Ageing quiets the body's alarm systems: infection without fever, infarction without chest pain. New confusion, falls and refusal to eat are the elder's fever equivalents.",
      },
      {
        topic: "The Ageing Patient",
        front: "Delirium versus dementia — the two-sentence bedside rule.",
        back: "Delirium arrives over hours to days, fluctuates through the day, and is often reversible when its cause is found. Dementia drifts over months to years and is progressive; never diagnose it during an acute change.",
      },
      {
        topic: "The Ageing Patient",
        front: "Spell PINCH ME — the reversible causes of delirium.",
        back: "Pain, INfection, Constipation, deHydration, Medicines (new, stopped or wrong), Electrolytes and Environment. Hunt them, fix them, and the confusion often clears.",
      },
      {
        topic: "The Ageing Patient",
        front: "Name the geriatric syndromes that gather around multimorbidity.",
        back: "Frailty, falls, incontinence, cognitive impairment (delirium and dementia) and polypharmacy — the conditions that cross organ systems and belong to nursing vigilance.",
      },
      {
        topic: "The Ageing Patient",
        front: "What anchors care when several disease guidelines collide?",
        back: "The patient's own goals — what she wants to be able to do — built with her and the team into one prioritised plan, rather than four competing protocols.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Care for Older People (ICOPE): Guidelines on Community-Level Interventions to Manage Declines in Intrinsic Capacity",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "Decade of Healthy Ageing: Baseline Report",
        year: "2020",
      },
      {
        organization: "Ghana Health Service",
        title: "Policy and Services for Noncommunicable Diseases and Healthy Ageing",
        note: "Verify current policy documents with GHS.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: "2022",
        note: "Gerontology and geriatric nursing chapters. Verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Complex Care in Context",
    lessonTitle: "Long-Stay & Rehabilitation Patients",
    description:
      "Weeks on the ward can quietly take what illness left behind — learn the daily nursing that keeps hope, function and skin alive until discharge.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the complications of prolonged bed rest, system by system.",
      "Apply first-day rehabilitation nursing: repositioning, early sitting, swallow screening and bladder and bowel routines.",
      "Set SMART, patient-centred goals with long-stay patients and their families.",
      "Explain the family's role as Ghana's largest rehabilitation workforce, and the caregiver's own risks.",
    ],
    tags: ["rehabilitation", "long stay patients", "pressure injuries", "stroke recovery"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some patients measure their stay in weeks. The stroke that will not hurry; the spinal injury learning a new body; the amputation awaiting a prosthesis; the patient whose wounds close a millimetre at a time. On many Ghanaian wards these long residents hold beds, hold hopes — and hold a special danger: everyone is busy saving the acute, while the long patient quietly loses what he came in with.\n\nThe insight this lesson builds on is simple and strange: **bed rest is a treatment with side effects**. Doctors once prescribed it for almost everything; now we know it dissolves muscle, stiffens joints, thins skin, pools blood and secretions, clogs bowels and unsettles the mind. The long-stay patient is never simply waiting for rehabilitation — he is either rehabilitating or deteriorating every single day.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "So rehabilitation starts on **admission**, not on the physiotherapist's first visit. The early moves are nursing moves: position and reposition well, sit the patient up early, screen the swallow before the first sip by mouth, keep the skin dry and moving, keep the bladder on a routine, keep the bowel honest, and keep the mind oriented — clock, daylight, news, visitors, hope.\n\nThe plan belongs to the team and to the patient. Set **SMART goals** — specific, measurable, achievable, relevant, time-bound — but let the patient name his own finish line: walking to church, holding the grandchild, returning to the market stall. The physiotherapist brings the science of movement; you bring the daily consistency that makes it work; the family brings the hours. In Ghana, where families sleep on ward floors and bring the food, they are not visitors at the edge of rehabilitation — they are its largest workforce, and teaching them is part of the prescription.",
      },
      {
        type: "table",
        title: "What the bed takes, and what you give back",
        body: "| Body system | What prolonged rest does | The daily nursing countermeasure |\n|---|---|---|\n| Muscles and joints | Strength falls fast; joints stiffen into contractures | Good positioning, passive then active movement with the team, early sitting and standing |\n| Skin | Pressure injuries over heels, hips and sacrum | Two-hourly repositioning, skin inspection at every turn, dry sheets, nutrition |\n| Veins | Blood pools; clots form | Movement, hydration, and reporting for clot-prevention decisions |\n| Chest and swallow | Secretions pool; aspiration risk rises | Upright for food and drink, swallow screen first, deep breathing, mouth care |\n| Bladder and bowel | Retention, constipation, incontinence | Routine toileting, fluid plan, fibre as available, monitor output |\n| Mind and mood | Disorientation, boredom, low mood | Clock and calendar, daylight, visitors, tasks, goals reviewed aloud |",
      },
      {
        type: "clinical_pearl",
        body: "Rehabilitation is not a department — it is a daily posture. The first careful turn, the first upright sit, the first supervised stand at the window: each is therapy, and each is yours to give.",
      },
      {
        type: "quiz_prompt",
        title: "The flat feeder",
        body: "A devoted daughter wants to feed her recovering stroke patient lying flat 'because he swallows more that way.' What must you check and teach before the next meal?\n\nAnswer: Swallow safety comes first — feeding a person whose swallow has not been assessed risks food and drink entering the lungs. Keep him sitting upright, arrange a swallow screen, and teach the family the warning signs: coughing or choking with meals, a wet or gurgling voice after swallowing, food pocketing in the weak cheek. Slower, smaller, upright — and stop and call if the voice turns wet.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Kwesi, 46, a trotro driver, is on week three after a stroke that left his left side weak. He is medically stable, and his family's daily question is 'when will he walk?' He has begun physiotherapy twice a week; between sessions he lies mostly on his right side 'so he doesn't fall'. His heels are reddening. His wife feeds him quickly and lays him flat afterwards. He said, once, that he will 'never hold a steering wheel again' — and has stopped asking about home.\n\nWhat is your rehabilitation nursing plan for this week?\n\nAnswer: Protect the skin — two-hourly repositioning including the neglected left side with pillows, heels offloaded, inspected at every turn. Feed upright after a swallow screen, and teach his wife the signals of trouble — coughing, wet voice — and a slower pace. Move daily between physiotherapy sessions: sitting out of bed each morning, standing practice with the team, passive movements to the left limbs. Set the goals with him: not 'walking' but 'standing at the door by Friday', 'feeding himself porridge by next week' — and one honest conversation about the steering wheel: a team referral for driving and work questions, and a discussion of what returning to the depot, or retraining, could look like. Screen his mood — low mood after stroke is common, treatable and hides behind silence. Book the family meeting: who will do the exercises at home, what equipment is needed, and how the follow-up clinic will be reached.",
      },
      {
        type: "callout",
        title: "The family is the workforce — and a patient too",
        body: "Teach the family precisely, and they will do the exercises at 5 am better than any roster could. But watch the caregiver's own health: the wife who has slept on the ward floor for three weeks is your patient too. An exhausted caregiver is a falls risk, a pressure-injury risk and a readmission risk.",
      },
      {
        type: "memory_trick",
        body: "**REHAB** — **R**eposition and inspect skin, **E**xercise early and daily, **H**ydrate and feed well, **A**spiration watch (upright, swallow-screened), **B**owel and bladder on a routine. And the golden rule: rehabilitation starts on admission day, not when therapy arrives.",
      },
      {
        type: "summary",
        body: "- Bed rest is a treatment with side effects: deconditioning, contractures, pressure injuries, clots, pooled secretions, constipation and low mood.\n- Rehabilitation starts on admission — first reposition, first upright sit, swallow screen before oral intake.\n- Goals belong to the patient: SMART targets with his own finish line, reviewed aloud and often.\n- The family is the largest rehabilitation workforce on a Ghanaian ward — teach them precisely and watch their fatigue too.\n- REHAB: Reposition, Exercise early, Hydrate and feed, Aspiration watch, Bowel and bladder.",
      },
    ],
    questions: [
      {
        topic: "Rehabilitation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of problems is the classic bill that long bed rest hands your patient?",
        options: [
          "Faster healing, stronger muscles and a steadier mood",
          "Only pressure injuries — other systems are unaffected by rest",
          "Deconditioned muscles, stiff joints, pressure injuries, clots, pooled chest secretions, constipation, low mood and confusion",
          "Weight gain and improved appetite, with mild stiffness that resolves on discharge",
        ],
        correctIndex: 2,
        explanation:
          "Bed rest is a whole-body prescription with whole-body side effects: muscle melts, joints stiffen, skin breaks over pressure points, blood pools and clots, secretions settle in the chest, bowels slow, and the mind loses its anchors. That is why immobility is treated as a clinical risk in every long patient.",
        whyOthers: {
          A: "The opposite is true — muscle strength falls fast and mood dips; healing of wounds may even slow with poor circulation.",
          B: "Skin is only the visible one-sixth of the damage — veins, chest, gut, muscles and mind all pay.",
          D: "Appetite typically falls and stiffness can become permanent contracture without movement.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Rehabilitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When does rehabilitation begin for a patient admitted with a stroke?",
        options: [
          "On admission — the first careful repositioning, the first upright sitting, the swallow screen before the first oral sip, and attention to bladder and mood are all rehabilitation",
          "When the physiotherapist first walks onto the ward with a referral form",
          "Once the doctor declares the patient medically stable, usually after the first week",
          "At discharge, when the family has been taught the home exercises",
        ],
        correctIndex: 0,
        explanation:
          "Rehabilitation is a daily posture, not a department. From day one, nursing actions determine whether the patient rehabilitates or deteriorates: positioning, early sitting, swallow screening, skin, bladder, bowel, orientation. Waiting for stability, referral or discharge surrenders the days when function is cheapest to save.",
        whyOthers: {
          B: "The physiotherapist brings the science of movement twice a week; the other 190 hours belong to nursing and family.",
          C: "'Medically stable' is often the moment complications of rest have already begun — days have already cost muscle and skin.",
          D: "Home exercises consolidate recovery that either exists or does not; they cannot resurrect what the ward lost.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Rehabilitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A devoted daughter wants to feed her recovering stroke patient lying flat, 'because he swallows more that way.' What is the danger and the correct practice?",
        options: [
          "No danger — family feeding is part of Ghanaian care and should always be supported as offered",
          "The danger is only spillage on the uniform; a towel under the chin solves it",
          "Aspiration — food or drink entering the lungs of a patient whose swallow has not been assessed. Feed sitting upright, after a swallow screen, watching for coughing or a wet voice, and refer for full swallow assessment",
          "She should simply use a bigger spoon so each swallow is more effective",
        ],
        correctIndex: 2,
        explanation:
          "Stroke commonly weakens the swallow, and aspiration pneumonia is one of the most serious — and most preventable — complications of recovery. Upright positioning, a swallow screen before oral intake, small slow feeds, and knowing the alarm signs (coughing, wet voice, pocketing) protect the lungs while preserving the family's central role.",
        whyOthers: {
          A: "Support the love, correct the technique — family feeding is welcome, but only when it is safe.",
          B: "The spillage on the uniform is nothing; the spillage into the lungs is everything.",
          D: "Bigger boluses increase, not decrease, aspiration risk in a weak swallow.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Rehabilitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The patient's goal is 'to walk to church again.' What makes this a strong rehabilitation goal in the terms your team uses?",
        options: [
          "It is suitably modest, so he will not be disappointed when he cannot achieve it",
          "It is specific, meaningful to him, and measurable — the distance from ward door to gate can be built up step by step, so progress is visible to patient, family and team",
          "It keeps him focused on spiritual matters rather than physical effort, which speeds recovery",
          "It transfers responsibility for recovery to the church community, easing ward workload",
        ],
        correctIndex: 1,
        explanation:
          "The best goals are the patient's own, and this one happens to be SMART: specific (walk to church), measurable (the route can be broken into distances), achievable in steps, relevant to his life — and time-bound once the team sets a review date. Meaning is the engine of rehabilitation.",
        whyOthers: {
          A: "Goals should be ambitious enough to matter; disappointment is managed by honest pacing, not low aims.",
          C: "Meaning motivates the physical work — it does not replace it.",
          D: "The church may cheer him home; the walking is still built on the ward, step by measurable step.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Rehabilitation",
        front: "Spell REHAB — the daily nursing countermeasures of long bed rest.",
        back: "Reposition and inspect skin, Exercise early and daily, Hydrate and feed well, Aspiration watch (upright, swallow-screened feeding), Bowel and bladder on a routine.",
      },
      {
        topic: "Rehabilitation",
        front: "When does rehabilitation start, and what are its first nursing moves?",
        back: "On admission day: careful repositioning, early upright sitting, swallow screen before oral intake, skin inspection, bladder routine, orientation and hope — therapy before the therapist arrives.",
      },
      {
        topic: "Rehabilitation",
        front: "Why must a stroke patient's swallow be screened before the first sip by mouth?",
        back: "Stroke can weaken swallowing silently; unassessed feeding risks aspiration — food or drink entering the lungs — causing pneumonia, one of the most preventable killers of recovery.",
      },
      {
        topic: "Rehabilitation",
        front: "Why is the family part of the rehabilitation team on a Ghanaian ward?",
        back: "They supply most of the hours — feeding, turning, walking practice, exercises — and they know the patient's world. Teach them precisely, and watch the caregiver's own exhaustion: burnout predicts readmission.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Rehabilitation 2030: A Strategic Direction for Strengthening Rehabilitation in Health Systems",
        year: "2017",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Stroke and immobilisation management. Verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: "2022",
        note: "Rehabilitation and immobility chapters. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Complex Care in Context",
    lessonTitle: "When Care Goals Change: Limits & Withdrawal",
    description:
      "When cure leaves the room, care does not — the goals-of-care conversation, treatment limits and dignity at the end of life in the Ghanaian family circle.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the cure–control–comfort lanes of care and how goals of care shift with advancing disease.",
      "Explain why withholding and withdrawing treatment are judged by the same ethical standard of benefit versus burden.",
      "Apply honest, family-inclusive communication when treatment limits are discussed in the Ghanaian context.",
      "Recognise the nurse's continuing duties — symptom control, advocacy and presence — after the goal changes.",
    ],
    tags: ["palliative care", "goals of care", "end of life care", "family communication"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There comes a point in some illnesses when cure is no longer on offer. The cancer has advanced beyond what treatment can chase; the lungs or liver are failing; the frail body has met an infection it cannot win. Nothing about the care gets smaller that day — but the question changes. Instead of 'how do we beat this?', the team, the patient and the family begin asking 'what is the kindest, most honest thing to do now?'\n\nIn Ghana these conversations are rarely private. Decisions travel through the family — the eldest son, the uncle who pays, the church elder — and the patient's own voice can be crowded out by love, by duty and by hope. The advanced nurse's task is to keep the conversation honest, the patient central, and the care never interrupted by the change of goal.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Think in three lanes: **cure**, **control**, **comfort**. The goal of care can move between them as disease moves — and moving it is a clinical decision, made with the team, the family and above all the patient, then written down and revisited. A **limit of therapy** — no further chemotherapy, no admission to intensive care — is not a limit of care: it redirects energy from what cannot work to what still can: pain relief, breathlessness eased, mouth care, dignity, presence.\n\n**Withholding** a treatment and **withdrawing** one already started are judged by the same ethical standard — whether the treatment offers benefit that outweighs its burdens. Stopping a burdensome, futile intervention is not the moral equivalent of abandoning the patient; it is the moment care changes direction, and everything that remains is still nursing work. Nurses also carry a duty of **advocacy**: you will know first when the dying patient's pain is uncontrolled, when the family has not understood, and when the goals on the chart no longer match the patient in the bed. Say so — in handover and on rounds.",
      },
      {
        type: "table",
        title: "When the goal shifts",
        body: "| Question | Cure lane | Comfort lane |\n|---|---|---|\n| What is treatment for? | Reversing the disease | Relieving symptoms and preserving dignity |\n| Observations | Frequent, to guide escalation | Only those that change comfort decisions |\n| Food and fluids | Full support as tolerated | Offered, never forced; mouth care is the nutrition of dignity |\n| Family talk | Prognosis, options, side effects | What dying looks like, what comfort looks like, presence |\n| Success | Discharge, remission, function restored | A comfortable, witnessed, dignified death |",
      },
      {
        type: "clinical_pearl",
        body: "Never say 'there is nothing more we can do.' There is always something more: pain controlled, breathlessness eased, a clean mouth, a hand held, a family prepared. The honest sentence is: 'We are changing what we are aiming for — not giving up on him.'",
      },
      {
        type: "quiz_prompt",
        title: "The oxygen question",
        body: "A family asks: 'Are you stopping the oxygen because she is dying, or is she dying because you stopped the oxygen?' How do you answer honestly?\n\nAnswer: The disease is the cause of her dying; the oxygen was supporting her through it, and at this stage it adds burden without changing the disease's course. Withdrawal of a treatment that can no longer achieve its purpose is not the cause of death — and it is not withdrawal of care, which continues with full attention to comfort. Say it plainly, kindly, and offer the family their part in her comfort.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Yaw, 66, a retired cocoa farmer, is back on your ward — his third admission in four months. Advanced liver cancer on the background of lifelong hepatitis B: yellow eyes, a swollen belly, legs like tree trunks, pain that keeps him awake, and a son who says to every team member, 'Do everything, Doctor. He is all we have.' At the last round, the team gently said there is no further anticancer treatment that will help.\n\nWhat is your role in the days that follow?\n\nAnswer: First, be the expert on his comfort — assess the pain at rest and on movement, report it in the team's language of severity and pattern, and push until it is controlled; care for the mouth, the skin over the swollen legs, the sleeping position, the nausea. Second, be the advocate for his voice: in a quiet moment he told you he wants to go home to Goaso, sit under his mango tree, and have the church elders pray with him — carry those words to the family meeting. Third, prepare the family: explain, gently and consistently, what the coming days will look like, what the medicines can still do, and that 'doing everything' now means doing everything for his comfort. Fourth, plan with the team for the discharge he wants: a symptom plan, supplies, community or clinic follow-up, transport. Write the goals-of-care conversation in the notes — who was present, what was decided — and revisit it at every change.",
      },
      {
        type: "callout",
        title: "The family circle",
        body: "In Ghana the unit of decision is wider than the patient — and this is not a problem to fix but a culture to work with. Meet the elders where they are; give the same honest message through every shift so the family is not shopping for a better answer; and keep asking, gently, 'what would he say if he could sit with us?' The patient is the circle's centre, not its absentee.",
      },
      {
        type: "memory_trick",
        body: "**GOC** — **G**oals: what matters most to him? **O**ptions: what can treatment honestly still offer? **C**onsequences: the burdens and benefits of each — and what comfort would look like. Run GOC at every turning of the illness: cure, control, comfort, in that order of retreat.",
      },
      {
        type: "summary",
        body: "- Goals of care move between cure, control and comfort; moving the goal is a clinical decision — documented, communicated and revisited.\n- Withholding and withdrawing are judged by one standard: benefit versus burden. Stopping a futile treatment is not stopping care.\n- Never say 'nothing more we can do' — comfort, dignity and presence are always on the list.\n- In Ghana, care goals are family work: one consistent message across shifts, elders engaged, the patient's own voice kept central.\n- The nurse is the constant: symptom expert, advocate, and the one who prepares the family for what comes.",
      },
    ],
    questions: [
      {
        topic: "Goals of Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement is correct about withholding versus withdrawing treatment?",
        options: [
          "Withdrawing a treatment once started is always morally worse than never starting it at all",
          "Withdrawing a treatment once started is legally forbidden, so futile treatments must continue to the end",
          "Withholding and withdrawing are judged by the same ethical standard — whether the treatment still offers benefit that outweighs its burdens; stopping a futile or burdensome intervention is not the same as stopping care",
          "The difference between the two is decided by whoever pays for the treatment",
        ],
        correctIndex: 2,
        explanation:
          "Ethically and legally, the central question is the same whether a treatment is not started or is stopped: does it offer this patient benefit proportionate to its burdens? If it does not, discontinuing it redirects care toward comfort — the care continues at full strength.",
        whyOthers: {
          A: "Moral weight attaches to the benefit–burden balance, not to the order of events; a trial of treatment that fails is legitimate medicine.",
          B: "Continuing a futile, burdensome treatment is not a legal duty — it can itself be the harm.",
          D: "Payment may shape conversations, but the ethical standard is clinical benefit versus burden, not the bill.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Goals of Care",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "The team has decided that further anticancer treatment will not help your patient with advanced cancer, and the plan is shifting to comfort. What is your role at the bedside?",
        options: [
          "Withdraw with the treatment — comfort is now the family's responsibility at home",
          "Stay central to it: assess and manage pain and other symptoms, keep mouth, skin and dignity intact, prepare the family for what dying looks like, and advocate for the goals-of-care plan in every handover",
          "Tell the family honestly that there is nothing more anyone can do for him",
          "Continue urging the doctors to restart the anticancer treatment, since families expect fighting to the end",
        ],
        correctIndex: 1,
        explanation:
          "When the goal changes, the nurse's workload changes shape, not size. Symptom assessment and relief, skin and mouth care, dignity, family preparation and advocacy become the treatment — and the bedside nurse is the one who delivers them hour by hour, and who speaks up when the plan on paper drifts from the patient in the bed.",
        whyOthers: {
          A: "Comfort care is specialist clinical work — abandoning it with the chemotherapy abandons the patient at his most vulnerable.",
          C: "There is always something more — pain, breathlessness, mouth care, presence; the honest sentence is 'we are changing the goal', not 'there is nothing'.",
          D: "Advocacy runs both ways: the patient's own wishes and honest prognosis deserve the family's ear more than borrowed hope.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Goals of Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family asks: 'Are you stopping the oxygen because she is dying, or is she dying because you stopped the oxygen?' What is the truthful answer?",
        options: [
          "Neither — patients simply die when their time comes, and treatment makes no difference either way",
          "The oxygen was indeed keeping her alive, so stopping it is what will end her life",
          "The disease is the cause of her dying; the oxygen was supporting her through it, and at this stage it adds burden without changing the disease. We are changing the goal — from cure to comfort — not withdrawing our care",
          "Such questions should be referred to the chaplain, not answered by nurses",
        ],
        correctIndex: 2,
        explanation:
          "This question deserves a straight answer, and the truth is reassuring: the illness is the cause of death, not the withdrawal of a treatment that can no longer reach its purpose. Saying so — plainly and kindly — protects the family from guilt and preserves their trust in the care that continues.",
        whyOthers: {
          A: "Treatment often changes comfort and sometimes time — but it does not change the disease's destination at this stage; 'no difference' is a dodge, not an answer.",
          B: "This is exactly the guilt-shaped misunderstanding the question carries; correcting it gently is part of the care.",
          D: "Referring it away abandons the family at the bedside with the biggest question they have — nurses answer it, or find the team member who can.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Goals of Care",
        type: "MCQ",
        difficulty: "Hard",
        stem: "What makes a goals-of-care conversation trustworthy in the notes and at handover?",
        options: [
          "It was recorded once, signed by the most senior doctor, and must never be reopened",
          "It names who was present, what the patient and family understood and chose, and what will and will not be offered — and it is revisited as the illness changes, because goals move as disease moves",
          "It is kept verbal among senior staff so the family is protected from frightening details",
          "It simply states 'family aware of prognosis', which covers all the decisions that follow",
        ],
        correctIndex: 1,
        explanation:
          "A usable goals-of-care record carries the conversation's content — participants, understanding, choices, specific limits — and a date, because the plan is a living document that must be revisited at each turn of the illness. Vague or frozen entries leave the night shift guessing at 2 am.",
        whyOthers: {
          A: "A frozen decision serves the file, not the patient — disease moves, and the plan must be allowed to move with it.",
          C: "Verbal-only plans fragment across shifts and leave the family hearing different stories from different nurses.",
          D: "'Family aware of prognosis' says nothing about what will actually be offered or withheld — it is the note that precedes confusion.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Goals of Care",
        front: "Name the three lanes of care goals, in the order illness usually retreats through them.",
        back: "Cure — control — comfort: reversing the disease, then holding it and its symptoms, then relieving symptoms and protecting dignity when disease can no longer be held.",
      },
      {
        topic: "Goals of Care",
        front: "Withdrawing versus withholding treatment — what is the shared ethical test?",
        back: "Benefit versus burden: does this treatment still offer the patient benefit proportionate to what it costs him? If not, not starting it and stopping it reach the same answer — and care continues either way.",
      },
      {
        topic: "Goals of Care",
        front: "What does GOC stand for at every turning of an illness?",
        back: "Goals — what matters most to him? Options — what can treatment honestly still offer? Consequences — the burdens and benefits of each, and what comfort would look like.",
      },
      {
        topic: "Goals of Care",
        front: "Which sentence must never be said, and what replaces it?",
        back: "Never 'there is nothing more we can do.' Replace it with: 'We are changing what we are aiming for — not giving up on him' — pain relief, comfort, dignity and presence are always still ours to give.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrating Palliative Care and Symptom Relief into Primary Health Care: Clinical Guidelines",
        year: "2018",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
        note: "Standards for accountability, advocacy and end-of-life care. Verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Pain and symptom management. Verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: "2022",
        note: "Palliative and end-of-life care chapters. Verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Leading at the Bedside",
    lessonTitle: "Preceptorship: Teaching While Working",
    description:
      "The badge arrives before you feel ready — teaching students inside the work, keeping patients safe and feedback kind.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the preceptor's role and its accountability when teaching happens inside ward work.",
      "Apply tell–show–do–review and 'I do, we do, you do' to procedural supervision.",
      "Give FAST feedback and manage both the avoidant and the overconfident student safely.",
      "Explain consent, patient dignity and error reporting in student supervision.",
    ],
    tags: ["preceptorship", "clinical teaching", "feedback", "supervision"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The badge comes before you feel ready. Within months of registration you will be the 'senior on the floor' — and trailing behind you will be a student in the uniform you wore last year, watching everything you do: how you speak to the woman in bed 6, whether you really clean your hands between patients, how you write your notes. Ghanaian wards run on this chain — every nurse who ever guided you was once teaching while working, and nobody ever had spare time to do it.\n\nThat is the reality of **preceptorship**: teaching that happens inside the work, not beside it. Done well, it doubles a ward's hands and grows the profession. Done carelessly, it puts patients at risk and breaks students quietly. This lesson is about doing it well.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Teach procedures with a four-step rhythm — **tell, show, do, review**. Tell: the steps and the reasons, in order. Show: the whole procedure performed well, at real pace, with commentary. Do: the student performs it — 'I do, we do, you do' — while you stay within reach. Review: afterwards, what went well, what changes next time, and what the student will practise before the next attempt.\n\nSupervise to the student's level, not to your memory of your own studentship. The safe question before any procedure is 'talk me through what you will do, and what could go wrong' — it reveals in thirty seconds whether confidence is built on skill or on hope. Feedback works when it is **FAST**: **F**ocused on one thing, **A**ctionable ('announce the reading aloud before you chart it'), **S**oon — the same shift — and **T**rue, about behaviour you both saw, never about personality. Praise in public; correct in private. And remember your dual accountability: a student's error made under your supervision is yours to answer for too — the task was delegated, never the responsibility for the patient's safety.",
      },
      {
        type: "table",
        title: "Know your student",
        body: "| The student who... | What the behaviour hides | The teaching move |\n|---|---|---|\n| Avoids procedures, always restocking shelves | Fear of failing in front of you | Name it kindly; arrange small wins with your presence; tell–show–do on a willing patient |\n| Says 'I have seen it twice, I can do it' | Confidence built on watching, not doing | 'Talk me through it first' — then stay gloved and in arm's reach |\n| Waits silently to be told everything | Learned helplessness from past shaming | Assign tasks by name; ask 'what would you do next?'; praise initiative out loud |\n| Asks the question behind the question | Real engagement — feed it | Extend: journal club, teach-back to juniors, a case discussion after the round |",
      },
      {
        type: "clinical_pearl",
        body: "Patients are not teaching material. Ask or explain, and get their agreement before a student performs a procedure. And keep this straight: a student's error under your supervision is your error to answer for — stay in sight of anything you would want to catch.",
      },
      {
        type: "quiz_prompt",
        title: "The wince",
        body: "A student's first injection is technically clumsy and the patient winces. What feedback do you give — when, where, and how?\n\nAnswer: At the bedside, briefly reassure the patient and close the moment warmly. After, in private: invite self-assessment first ('what would you change?'), then give one focused, actionable note on technique, name the steps that were correct, and agree on supervised repetition soon. Never in front of the patient or family, never about personality — 'your angle and support hand' is teachable; 'you are clumsy' is not.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Final placement, night shift. Ama, a final-year student, is keen to insert the nasogastric tube for the semi-conscious patient in bed 3 — she has seen it twice this week. 'I can manage,' she says, already reaching for the gloves. The patient's daughter is watching from the doorway.\n\nHow do you supervise this safely, from consent to debrief?\n\nAnswer: First the talk-through: 'Walk me through it — and tell me two things that can go wrong.' If the steps come out in order and she knows the danger signs — coughing, distress, the tube curling in the throat — and how she would respond, including stopping, proceed. Consent the daughter in plain language: 'My student will place the feeding tube while I supervise her directly.' Then do it together: you position the patient, she places, your hands stay ready to take over the moment comfort or safety needs it. Confirm the tube's position exactly as protocol demands before anything goes down it. Afterwards, the review in private: she names what she would change, you add one focused, actionable point, and you agree what she will practise before the next attempt. Chart the procedure and take responsibility — your signature makes it your procedure.",
      },
      {
        type: "callout",
        title: "You teach even when you do not mean to",
        body: "Every eye on the ward is on you. The student learns the charting shortcuts you hoped were invisible, and the kindness you thought nobody noticed. Preceptorship is mostly role modelling with a few words attached — so be worth copying before you bother correcting.",
      },
      {
        type: "memory_trick",
        body: "**TELL — SHOW — DO — REVIEW**, and feedback that is **FAST** — Focused, Actionable, Soon, True. Two laws for the corridor: praise in public, correct in private; and a student under your badge is a patient under your care.",
      },
      {
        type: "summary",
        body: "- Preceptorship is teaching inside the work — the chain that runs every Ghanaian ward.\n- Tell, show, do, review — with 'I do, we do, you do' until competence is real.\n- 'Talk me through it first' is the thirty-second test of true readiness.\n- FAST feedback: Focused, Actionable, Soon, True — about behaviour, never personality; praise in public, correct in private.\n- Supervision can be delegated; accountability cannot: the patient under a student is under your care.",
      },
    ],
    questions: [
      {
        topic: "Preceptorship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are teaching a student to perform urinary catheterisation for the first time. Which sequence reflects safe supervision?",
        options: [
          "I do — we do — you do, with me watching: demonstrate, perform it together, then observe the student closely, staying able to step in",
          "You do — I watch from the office — I correct it afterwards from the chart",
          "Describe it once, then send the student to read the procedure manual at the bedside",
          "Students learn best unsupervised with real patients — confidence builds competence",
        ],
        correctIndex: 0,
        explanation:
          "Gradual release keeps the patient safe and the learning real: you demonstrate, you perform it together, then the student performs it while you stay close enough to intervene. Independence is earned one verified step at a time, not declared.",
        whyOthers: {
          B: "Watching from the office is not supervision — the moment you would need to catch is the moment you cannot.",
          C: "A manual read at the bedside is preparation, not supervision; the gap between page and patient is exactly where errors live.",
          D: "Confidence without competence is the most dangerous product a ward can manufacture.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Preceptorship",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "A student says, 'I have seen this done twice, I can manage alone,' before an invasive procedure on an anxious patient. What is the preceptor's best response?",
        options: [
          "Refuse and perform it yourself — students must never touch patients",
          "Agree — seeing it twice is the accepted standard before independent practice",
          "Ask the student to talk you through the whole procedure, what could go wrong and what they would do about it; consent the patient; stay scrubbed and within reach, taking over the moment comfort or safety needs it",
          "Let the student attempt it alone, but tell them to document any difficulties",
        ],
        correctIndex: 2,
        explanation:
          "'Seen twice' is watching, not doing — and the talk-through reveals the difference in thirty seconds. With the patient consented, the preceptor scrubbed and in arm's reach, the student can genuinely perform while the safety net is real: that is how competence is built without gambling the patient.",
        whyOthers: {
          A: "Barring students from patients blocks the profession's only pipeline — the skill is supervision, not exclusion.",
          B: "No standard accepts two observations as readiness for unsupervised invasive practice — this is exactly the overconfidence preceptors exist to catch.",
          D: "Documentation does not catch a tube in a bronchus; only proximity does.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Preceptorship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student's first injection is technically clumsy and the patient winces. What is the right feedback approach?",
        options: [
          "Say nothing — students know when they have done badly, and shame teaches fastest",
          "Reassure the patient briefly at the bedside, then in private ask the student what she would change, give specific behavioural feedback on technique, and plan supervised repetition soon",
          "At the bedside, immediately and loudly, correct each mistake so the patient learns what good care looks like",
          "Wait until the final evaluation, when all the student's weaknesses can be listed together",
        ],
        correctIndex: 1,
        explanation:
          "Good feedback is FAST: focused, actionable, soon and true. A brief bedside reassurance closes the patient's moment; the private debrief invites self-assessment, targets one behavioural fix, and books repetition while the learning is fresh. Public correction and stored-up criticism both poison the well.",
        whyOthers: {
          A: "Shame teaches avoidance, not technique — the next patient meets a student who hides rather than a student who practised.",
          C: "Humiliating a learner in front of her patient damages both — and the patient does not need a lecture, only safe care.",
          D: "Feedback saved for the final evaluation arrives after a whole placement of rehearsing the same error.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Preceptorship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A student makes a medication error while under your supervision. Who is accountable?",
        options: [
          "The student alone — the person who physically commits the error carries all the responsibility",
          "Nobody, provided the patient came to no harm",
          "The hospital management, for allowing students on the ward",
          "Both — the student is accountable for honesty about what happened, and you, as the supervising nurse, are accountable for the supervision you provided; the error is reported and used to learn",
        ],
        correctIndex: 3,
        explanation:
          "Accountability is shared by design: the student answers for what they did and did not do, and the preceptor answers for the level of supervision they actually provided. Reporting — without blame, with facts — is how the ward fixes the conditions that allowed the error.",
        whyOthers: {
          A: "Delegating the task never delegates the responsibility for the patient's safety; supervision is a duty, not a title.",
          B: "Harm is not the test of accountability — a near miss reveals the same hole in the system.",
          C: "Management answers for systems; the bedside answers for supervision — and tonight, that is you.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Preceptorship",
        front: "Name the four-step rhythm of procedural teaching, with its supervision ladder.",
        back: "Tell, show, do, review — and within 'do': I do, we do, you do, with the preceptor staying within reach until competence is real.",
      },
      {
        topic: "Preceptorship",
        front: "What does FAST feedback stand for?",
        back: "Focused on one thing, Actionable ('announce the reading before you chart it'), Soon — the same shift — and True: about behaviour you both saw, never personality.",
      },
      {
        topic: "Preceptorship",
        front: "What is the thirty-second test of a student's true readiness?",
        back: "'Talk me through what you will do, and what could go wrong' — a coherent talk-through reveals whether confidence is built on skill or on hope.",
      },
      {
        topic: "Preceptorship",
        front: "Who answers for a supervised student's error?",
        back: "Both: the student for honesty about what happened, and the preceptor for the supervision actually provided. Delegation of the task is never delegation of responsibility for the patient.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Clinical practicum and supervision requirements.",
      },
      {
        organization: "World Health Organization",
        title: "Global Strategy on Human Resources for Health: Workforce 2030",
        year: "2016",
      },
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Post-Registration Speciality Programmes",
        note: "Mentorship and preceptorship requirements. Verify current programme documents.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        note: "Teaching, supervision and evaluation chapters. Verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "advanced-medical-surgical",
    moduleTitle: "Leading at the Bedside",
    lessonTitle: "Quality Improvement: The Small Changes",
    description:
      "The charts half-filled, the queue that never ends — small measured changes, tested one bay at a time, that make your ward genuinely better.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Distinguish quality improvement from research and audit.",
      "Apply the Model for Improvement's three questions and the PDSA cycle to a ward problem.",
      "Explain the value of baseline measurement, run charts and small-scale testing.",
      "Describe a no-blame reporting culture and why near misses are treated as free lessons.",
    ],
    tags: ["quality improvement", "pdsa cycle", "patient safety", "audit"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every ward has its quiet disorder: observation charts half-filled after midnight, the drug round interrupted nine times, the dressing clinic queue that still runs at 3 pm. Most of us wait for 'them' — the matron, the ministry, the next memo. Quality improvement begins with a different thought: the people closest to the work can change the work, one small tested change at a time.\n\nThis is not research. Research asks a question whose answer belongs to the world; quality improvement (QI) asks a question whose answer belongs to your ward, this month, measured with a pencil if necessary. The distinction matters because QI does not need an ethics committee and a control group — it needs a team, a measure, and the humility to test small before declaring victory.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The discipline behind almost every successful improvement is the **Model for Improvement**, and it begins with three questions: What are we trying to accomplish? How will we know a change is an improvement? What change can we test? Then comes the cycle — **Plan, Do, Study, Act**. **Plan** the smallest useful test: one bay, one shift, one week, with a clear measure. **Do** it, and record what actually happens, including the chaos. **Study** the data honestly: plot it over time on a run chart and look at the trend, not the single best day. **Act**: adopt what worked, adapt what nearly worked, abandon what failed — then scale it gradually to the rest of the ward.\n\nTwo habits keep it honest: measure a **baseline** before changing anything (otherwise you can never know the change changed anything), and involve everyone who touches the problem — the night nurse who misses the temperature, the cleaner who knows which sink runs dry, the record clerk who files the charts. Improvement that is done to people fails; improvement done with them sticks.",
      },
      {
        type: "table",
        title: "One PDSA cycle: night-shift temperatures",
        body: "| Step | What it looks like in practice |\n|---|---|\n| Plan | 'Night temperatures on side ward B will be taken at the 22:00 round by the named bay nurse, for one week.' Measure: temperatures charted divided by temperatures due |\n| Do | Run it for one week; note the interruptions, the arguments, the surprises |\n| Study | Plot the week on a run chart against the two-week baseline; look at the trend and ask why each miss happened |\n| Act | Adopt as ward routine, adapt (move the cue, add a handover reminder), or abandon and try a different change — then scale |",
      },
      {
        type: "clinical_pearl",
        body: "Make each test small enough to fail safely and big enough to matter. And remember what a missed temperature actually is: not paperwork, but a sepsis warning unspoken — the improvement you are chasing is a patient, not a percentage.",
      },
      {
        type: "quiz_prompt",
        title: "The Act decision",
        body: "Your change improved the measure on your own bay. What are the three possible 'Act' decisions, and what follows each?\n\nAnswer: Adopt — make the change standard practice and scale it to other bays; adapt — tweak what nearly worked and run another test; abandon — stop this change, keep what you learned, and design a different one. Whichever you choose, the run chart and the reasons go on the wall where the team can see them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the night senior. Reviewing charts before handover, you notice that on your 32-bed male ward, temperatures ordered four-hourly are frequently missed between 22:00 and 06:00 — the quiet hours when a post-operative fever or a malaria spike would otherwise announce itself. When you ask, the answers are honest: two nurses for 32 patients, and 'the thermometer cabinet key is with the nurse in-charge'.\n\nWalk through your first improvement cycle.\n\nAnswer: Define the aim: every four-hourly temperature charted on beds 1–16 for the coming month. Measure a baseline first: for two weeks, count missed temperatures on that side — say 14 of 112 ordered were missed. Plan the change: temperature taken at the 22:00 medicine round by the named bay nurse, with the thermometer kept with the bay's drug keys. Do it for one week. Study: plot the weekly count on a run chart beside the baseline — two missed — and ask why those two happened (both on the night the water supply failed and one nurse covered both bays). Act: adapt — extend the change to both bays, and agree a written exception rule with the day team for shortage nights. Report it at the morning meeting, thank the night nurses by name, and keep the run chart on the wall. That is quality improvement: small, measured, owned — and repeated.",
      },
      {
        type: "callout",
        title: "Incidents and near misses are free lessons",
        body: "A near miss — the wrong drug drawn up, caught at the last check — is the system showing its weakness without hurting anyone: the cheapest lesson your ward will ever receive. Report it without blame: the aim is to learn why the look-alike vials sat together, not to shame the tired nurse. No-blame is not no-accountability — recklessness still gets addressed — but honest error gets support, including for the 'second victim': the nurse who nearly caused the harm and now cannot sleep. A ward that punishes honesty stops reporting, and then the harm does the reporting instead.",
      },
      {
        type: "memory_trick",
        body: "**PDSA** — **P**lan small, **D**o it, **S**tudy honestly, **A**ct: adopt, adapt or abandon. And before anything changes, know your baseline — otherwise success is just a story you tell at handover.",
      },
      {
        type: "summary",
        body: "- QI measures to improve your ward now; research measures to prove for the world — different jobs, different rules.\n- Three questions first: what are we trying to accomplish, how will we know it improved, what change can we test — then PDSA.\n- Baseline before change; run chart over time; one small test before a ward-wide policy.\n- Act is three-pronged: adopt, adapt, abandon — then scale gradually.\n- Near misses are free lessons: report to learn, protect the honest reporter, and care for the second victim.",
      },
    ],
    questions: [
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What separates quality improvement from research?",
        options: [
          "Nothing — both are names for the same discipline",
          "QI aims to prove a general truth for publication, while research aims to improve one local ward",
          "QI uses measurement to improve care in your own ward now, while research tests a hypothesis to produce generalisable knowledge, with ethics-committee oversight",
          "QI requires a control group, while research never does",
        ],
        correctIndex: 2,
        explanation:
          "Research produces knowledge for the world: hypothesis, methodology, ethics approval, generalisable results. QI produces improvement for your patients: a local question, local measures, rapid cycles. Confusing the two either over-burdens improvement work or under-protects participants.",
        whyOthers: {
          A: "The disciplines share tools but not aims, oversight or timelines.",
          B: "This reverses the two — publication and proof belong to research, local improvement to QI.",
          D: "It is research that more often needs comparison groups; QI compares a ward to its own baseline over time.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the Model for Improvement's PDSA cycle, what follow 'Plan' and 'Do'?",
        options: [
          "Publish and Defend",
          "Stop and Abandon — every first test ends the project",
          "Delegate and Audit",
          "Study — look honestly at what the data did — then Act: adopt, adapt or abandon the change",
        ],
        correctIndex: 3,
        explanation:
          "After planning the small test and doing it while recording the reality, you Study — plot the data over time against baseline and read the trend — then Act on one of three branches: adopt, adapt or abandon. The cycle then repeats, larger or wiser.",
        whyOthers: {
          A: "Publication is research's destination; QI's destination is the run chart on the ward wall.",
          B: "A first test that fails is information, not the end — abandonment is only one of three Act options, chosen with reasons.",
          C: "Delegation may be part of doing, and audit is a cousin of QI — but neither closes the cycle.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You want night-shift temperatures to be charted reliably. How do you start your first improvement cycle?",
        options: [
          "Announce a new mandatory policy for the whole hospital at the morning meeting",
          "Change nothing, but count how many temperatures are currently missed on one bay for two weeks — a baseline — then test one small change on that bay",
          "Wait for the next external audit to measure the problem for you",
          "Report the nurses who miss temperatures to the matron, so accountability drives the change",
        ],
        correctIndex: 1,
        explanation:
          "Without a baseline you cannot prove your change changed anything — improvement starts by measuring the problem as it is, on a scale small enough to study closely. The baseline also tells you whether the problem is a system issue (two nurses, one thermometer key) rather than a person issue.",
        whyOthers: {
          A: "A hospital-wide policy on day one skips the testing that tells you whether the change actually works — and invites quiet resistance.",
          C: "External audits measure for others, occasionally; QI measures for your patients, continuously.",
          D: "Blame improves reporting behaviour, not charting behaviour — and it destroys the honesty the next near miss depends on.",
        },
        courseSlug: "advanced-medical-surgical",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A colleague nearly gives a wrong drug but catches it at the last check. Why should this near miss be reported with the same seriousness as actual harm?",
        options: [
          "It is a warning that the system has a weakness — reported near misses let the ward fix the hole before someone falls through it, without anyone having been harmed yet",
          "Because the colleague must be identified and sanctioned for the error",
          "It should not — reporting near misses only inflates paperwork and blame",
          "Only doctors' near misses matter, because their errors are more serious",
        ],
        correctIndex: 0,
        explanation:
          "A near miss is the system speaking for free: the same hole that let the error start exists whether or not someone fell through it. Reporting near misses, without blame, maps the weaknesses while they are still painless — every fixed hole is a harm that never happens.",
        whyOthers: {
          B: "The target is the condition — the look-alike vials stored together, the interruption at the critical check — not the tired human who caught it.",
          C: "The paperwork is light compared with the harm it pre-empts; wards that stop reporting near misses start reporting deaths.",
          D: "Errors have no rank: a missed check is a missed check, whoever stands at the trolley.",
        },
        courseSlug: "advanced-medical-surgical",
      },
    ],
    flashcards: [
      {
        topic: "Quality Improvement",
        front: "Name the Model for Improvement's three questions, in order.",
        back: "What are we trying to accomplish? How will we know a change is an improvement? What change can we test that will result in improvement? — then PDSA.",
      },
      {
        topic: "Quality Improvement",
        front: "Spell PDSA and say what each step demands.",
        back: "Plan (the smallest useful test, with a measure), Do (run it, record the reality), Study (plot the data over time against baseline, read the trend), Act (adopt, adapt or abandon — then scale).",
      },
      {
        topic: "Quality Improvement",
        front: "What are the three 'Act' decisions after a test?",
        back: "Adopt — make it standard and scale it; adapt — tweak what nearly worked and retest; abandon — stop this change, keep the learning, design a different one.",
      },
      {
        topic: "Quality Improvement",
        front: "Why is a near miss the ward's cheapest lesson?",
        back: "It shows the system's weakness without anyone being harmed. Reported without blame, each near miss lets the ward fix the hole before someone falls through it — and protects the honest reporter, the 'second victim', who needs support too.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        note: "Includes the quality improvement module.",
      },
      {
        organization: "World Health Organization",
        title: "Global Patient Safety Action Plan 2021–2030: Towards Eliminating Avoidable Harm in Health Care",
        year: "2021",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality Improvement Guidance for Facility and District Teams",
        note: "Verify current GHS quality improvement documents.",
      },
      {
        organization: "Institute for Healthcare Improvement",
        title: "The Model for Improvement (IHI Open School Quality Improvement Curriculum)",
        note: "Verify current materials on ihi.org.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Respectful Maternity Care: Every Mother's Right",
    description:
      "The way a woman is treated while giving birth stays with her for life — and decides whether the next mother comes at all. Respectful maternity care turns rights into ward practice.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the rights in the Respectful Maternity Care charter.",
      "Explain the recognised categories of disrespect and abuse in childbirth.",
      "Apply respectful care behaviours on the ward and recognise their community effect.",
    ],
    tags: ["rmc", "dignity", "rights", "mistreatment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The way a woman is treated while giving birth can stay with her for life — and the way your facility treats women decides whether the next mother comes at all. Respectful maternity care turns human rights into ward practice: a charter of what every childbearing woman deserves, whoever she is, wherever she delivers.\n\nIn this lesson you will learn the rights in the RMC charter, the recognised faces of disrespect and abuse, and the small behaviours — a name, a curtain, an explanation — that carry the whole idea.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **Respectful Maternity Care charter** (White Ribbon Alliance, 2011) translates universal human rights for childbearing women: dignity and respect; information and the right to ask questions; privacy and confidentiality; equality and freedom from discrimination; freedom from harm and from harmful practices; timely care; and the right to choose a companion, to move and choose positions, and to refuse what she does not want. Nothing in the charter is new — it is ordinary human rights fitted to the labour room.\n\nResearchers led by Bowser and Hill mapped the faces of violation: **physical abuse** such as slapping in the second stage; care **without consent**; exposure and gossip that break confidentiality; **humiliation** and mockery; **discrimination** by age, tribe, HIV status or poverty; **abandonment** — left alone in labour; and **detention** over unpaid bills. Each face is a reason a community stops coming. WHO has called for the prevention and elimination of disrespect and abuse in childbirth, and Ghana Health Service runs respectful care as a quality agenda — because kindness here is not decoration; it is a clinical outcome that moves delivery rates.",
      },
      {
        type: "clinical_pearl",
        body: "The woman you shout at tonight will tell ten women at the market tomorrow. Some of them will birth at home because of your voice — mistreatment is a cause of maternal death, not just a bad day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 19-year-old primigravida pushes for two hours. The covering nurse snaps, 'You lazy girl — push or your baby dies!', and leaves her alone to attend another case. She delivers alone; the baby cries, and the ward laughs at her screams. At her six-week check she refuses examination and says she will never deliver in that hospital again.\n\nWhich categories of disrespect and abuse are shown here, and what is the community cost?\n\nAnswer: Verbal humiliation, abandonment of care and mockery — three faces of the same violation. The cost is not only her trauma: her testimony travels, and home deliveries rise in her compound and beyond. Respectful care is a safety and quality intervention, not politeness training.",
      },
      {
        type: "memory_trick",
        body: "The seven faces of disrespect all begin with P: Punching, Procedures without consent, Public exposure, Put-downs, Prejudice, Patient left alone, Payment detention. Count the Ps in every ward story.",
      },
      {
        type: "summary",
        body: "- The RMC charter grounds maternity care in universal human rights: dignity, information, privacy, equality, freedom from harm, timeliness and choice.\n- Disrespect has seven faces: physical abuse, non-consented care, non-confidentiality, humiliation, discrimination, abandonment and detention.\n- Mistreatment drives women away from facilities and raises home-birth risk — a safety issue, not a courtesy issue.\n- Companionship, consent, calling by name, curtains and explanations are the daily practice of rights.\n- WHO and Ghana Health Service both treat respectful care as core quality of care.",
      },
    ],
    questions: [
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a recognised category of disrespect and abuse in childbirth?",
        options: [
          "Working night shifts without an allowance",
          "Refusing a woman's demand for a specific nurse",
          "Giving routine vitamin K to the newborn",
          "Leaving a woman unattended in active labour",
        ],
        correctIndex: 3,
        explanation:
          "Abandonment — leaving a woman alone in labour — is one of the seven recognised categories of disrespect and abuse. Shift allowances, team rosters and evidence-based newborn care fall outside the classification entirely.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On what is the Respectful Maternity Care charter built?",
        options: [
          "Hospital management policy on customer service",
          "Universal human rights applied to childbearing women",
          "The personal ethics of individual nurses",
          "International insurance requirements",
        ],
        correctIndex: 1,
        explanation:
          "The charter maps existing universal human rights onto maternity: every right a childbearing woman holds as a person — dignity, information, privacy, equality, freedom from harm — simply restated for the labour room. It invents nothing new; it demands what is already owed.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A unit bars sisters from the labour room and forbids women to walk or choose positions during labour. Which charter rights are violated?",
        options: [
          "None — these are standard safety rules",
          "Only the right to timely care",
          "Choice of companion and freedom of movement and position",
          "The right to free medication",
        ],
        correctIndex: 2,
        explanation:
          "The charter upholds a woman's right to a companion of her choice and to move and adopt positions freely in labour — rights that WHO's intrapartum recommendations echo for their clinical benefits. Blanket bans on companionship and movement are violations, not safety rules.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Respectful Maternity Care",
        front: "List the seven categories of disrespect and abuse in childbirth.",
        back: "Physical abuse; non-consented care; non-confidential care; non-dignified care (humiliation); discrimination; abandonment of care; detention in facility.",
      },
      {
        topic: "Respectful Maternity Care",
        front: "Name four rights from the RMC charter.",
        back: "Dignity and respect; information and question-asking; privacy and confidentiality; equality and non-discrimination; freedom from harm; choice of companion, movement and position.",
      },
      {
        topic: "Respectful Maternity Care",
        front: "Why is mistreatment a safety issue, not just a courtesy issue?",
        back: "Women who are humiliated or abandoned avoid facilities — testimony travels, home births rise, and complications arrive late. Respectful care measurably moves delivery rates and outcomes.",
      },
    ],
    sources: [
      {
        organization: "White Ribbon Alliance",
        title: "Respectful Maternity Care: The Universal Rights of Childbearing Women",
        year: "2011",
      },
      {
        organization: "World Health Organization",
        title: "The Prevention and Elimination of Disrespect and Abuse during Facility-based Childbirth (WHO statement)",
        year: "2014",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with the Ministry of Health.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Informed Consent: The Real Conversation",
    description:
      "A signature at the bottom of a form is paper, not permission. Consent is a conversation — and this lesson teaches you to hold it well, even when she says no.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three elements of valid informed consent.",
      "Explain the emergency exception and the management of refusal.",
      "Apply consent practice and documentation to ward situations.",
    ],
    tags: ["consent", "autonomy", "refusal", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A signature at the bottom of a form is paper, not permission. Informed consent is a conversation: you explain, she understands, she chooses freely — and the signature only records that this happened. When the conversation is skipped, consent becomes theatre, and in maternity care theatre has consequences for both the woman and you.\n\nThis lesson takes you through the elements of valid consent, the emergency exception that lets you save a life in seconds, and how to walk beside a woman who says no to what you recommend.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Valid consent stands on **three legs**. **Capacity**: she understands, remembers and weighs the information — most women in labour have it; confusion, eclampsia or heavy sedation may remove it. **Information**: what you propose, its benefits, its risks, the alternatives, and the right to refuse — in her own language, checked with a short teach-back. **Voluntariness**: no pressure from you, from family, from anyone; a nod given under threat is not consent.\n\nTwo hard cases. First, the **emergency**: an unconscious woman convulsing or bleeding needs treatment now; you act in her best interest, keep the action proportionate, and document immediately after. Second, the **refusal**: a competent adult may refuse even a life-saving transfusion. Your duty is to make sure she understands the consequences, offer alternatives, involve seniors, and then respect and document her decision while continuing every other care. For adolescents, involve her and a responsible adult where the law requires it — but never let the girl be the last to know her own plan.",
      },
      {
        type: "clinical_pearl",
        body: "If she cannot repeat back, in her own words, what she has agreed to and what she refused, you have not yet asked her. Consent is the conversation, not the signature.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 32 weeks with severe anaemia refuses blood transfusion. Her husband insists you 'just do it' because she is weak and confused. You sit with her, explain the risk of heart failure and death, offer iron and other treatment, ask her to explain the choice back, document her words, and call the consultant, who agrees she has capacity.\n\nOn what basis do you proceed?\n\nAnswer: Her refusal stands, because capacity — not fear, not weakness, not family pressure — decides. A person with capacity may refuse treatment even when refusal may kill her. You document capacity, the information given, her own words, the alternatives offered and the escalation — and you keep caring for her.",
      },
      {
        type: "memory_trick",
        body: "Consent is a three-legged stool: Capacity, Information, Voluntariness. Kick away any leg and the stool — and your defence — falls.",
      },
      {
        type: "summary",
        body: "- Valid consent needs capacity, full information (benefits, risks, alternatives, right to refuse) and freedom from pressure.\n- Explain in her language and check understanding with a teach-back; the signature records the conversation.\n- In emergencies, treat an incapacitated woman in her best interest and document at once.\n- A competent adult may refuse even life-saving treatment — inform, involve seniors, respect, document, continue care.\n- Never let a relative consent for a competent woman: relatives inform, the woman decides.",
      },
    ],
    questions: [
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three elements of valid informed consent?",
        options: [
          "Capacity, adequate information and voluntariness",
          "Signature, witness and doctor countersign",
          "Age, marital status and literacy",
          "Consent form, fee payment and registration",
        ],
        correctIndex: 0,
        explanation:
          "A valid consent is a capable person, given adequate information (benefits, risks, alternatives, right to refuse), choosing freely. Signatures, witnesses and forms only record that these three elements were present.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An unconscious eclamptic woman needs an urgent loading dose of magnesium sulfate. What is the correct course?",
        options: [
          "Wait for a relative to sign a consent form first",
          "Give the treatment immediately in her best interest and document the reasoning at once",
          "Wait for her to regain consciousness",
          "Transfer her without treatment to the regional hospital",
        ],
        correctIndex: 1,
        explanation:
          "The emergency exception applies: when a patient lacks capacity and delay would cost her life or health, you act in her best interest, keep the intervention proportionate, and document immediately afterwards. Waiting for signatures or consciousness would sacrifice her for a formality.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with capacity refuses a caesarean you believe is life-saving. What must you do?",
        options: [
          "Proceed anyway — the baby's welfare overrides her refusal",
          "Ensure she truly understands the consequences, involve seniors, then respect and document her refusal while continuing care",
          "Discharge her home as a refusal of all care",
          "Have her husband sign the consent form on her behalf",
        ],
        correctIndex: 1,
        explanation:
          "A competent adult's refusal governs her own body, however unwise it seems. Your duties are full information, senior involvement, documentation of her understanding and words — and continued care. Neither husband nor clinician can consent for a competent woman.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Informed Consent",
        front: "What are the three elements of valid consent?",
        back: "Capacity (understanding, retaining, weighing information), adequate information (benefits, risks, alternatives, right to refuse) and voluntariness (free of pressure).",
      },
      {
        topic: "Informed Consent",
        front: "When may you treat a woman without her consent?",
        back: "In a genuine emergency when she lacks capacity and delay would cause death or serious harm — act in her best interest, stay proportionate, and document immediately.",
      },
      {
        topic: "Informed Consent",
        front: "How do you handle a competent woman's refusal of life-saving treatment?",
        back: "Confirm capacity and understanding, give information and alternatives, involve seniors, respect and document her decision verbatim, and continue all other care.",
      },
    ],
    sources: [
      {
        organization: "Ghana Ministry of Health",
        title: "Patients' Charter",
        note: "Verify current edition with the Ministry of Health.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses (17th edition)",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Confidentiality in Maternity Care",
    description:
      "In the city a secret is cheap; in a village it is priceless. The promise of confidentiality is what makes women dare to tell you the truth — this lesson keeps that promise safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the duty of confidentiality and its legal limits.",
      "Explain why small communities raise the stakes of every disclosure.",
      "Apply privacy practices on the ward, in records and for adolescents.",
    ],
    tags: ["confidentiality", "privacy", "adolescents", "disclosure"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the city a secret is cheap; in a village it is priceless. The nurse in a Ghanaian community knows whose daughter is pregnant, whose husband beats her, whose test came back positive — and the whole community would love to know it too. Confidentiality is the promise that makes women dare to tell you the truth, and in small communities it is the difference between care and no care.\n\nThis lesson covers the duty, the limits the law places on it, and the daily habits that keep a secret safe on a crowded ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The duty is simple: what a woman tells you, and what you find in her records, is shared only with the team that needs it to care for her — and with nobody else. Not by name in the corridor, not in the tro-tro, not in the market, not in a WhatsApp message. 'Guess who we delivered last night' has ended careers and ended care-seeking in a single sentence.\n\nThe limits are equally simple. You must share information when the law requires it — notifiable diseases to public health, suspected child abuse to social welfare or the police — and when a person is at serious, identifiable risk. HIV shows the balance: you encourage and support her in **voluntary disclosure** to her partner, with counselling, rather than breaking her confidence yourself. For **adolescents**, Ghana's adolescent health services expect confidential care: do not report her pregnancy to parents without her agreement unless her safety is at risk. Before any disclosure, ask three questions: who needs this information, what exactly do they need to know, and what happens to her if it is said in the wrong place?",
      },
      {
        type: "clinical_pearl",
        body: "Curtains, closed doors and a private corner for sensitive questions are clinical tools, like gloves — you would not do a delivery without them, so do not take a history without them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 16-year-old comes for antenatal booking with her school bag. Her syphilis test is positive and she asks you not to tell her mother, who is waiting outside. You treat her, arrange partner notification and counselling through the clinic system, agree together what will be shared at today's visit, and explain you will involve her mother only with her consent — or if her safety is at risk.\n\nWhy is this the right course, and what must you promise carefully?\n\nAnswer: Because confidential adolescent care keeps her in treatment — a frightened girl simply stops coming, and an untreated girl infects others. You promise privacy, not secrecy: she must hear the limits from you first, so you never break a promise you made to win her trust.",
      },
      {
        type: "memory_trick",
        body: "Confidentiality is a door with three honest keys: the care team, the law (notifiable disease, child protection) and a named person at risk. Gossip has no key.",
      },
      {
        type: "summary",
        body: "- Share information only within the care team, on a need-to-know basis — never in corridors, markets or messages.\n- In small communities, gossip ends care-seeking for the woman and for everyone who hears the story.\n- The law requires sharing for notifiable diseases, child protection and serious risk to an identifiable person.\n- Support voluntary HIV disclosure with counselling rather than breaking confidence.\n- Adolescents are entitled to confidential care — promise privacy, never secrecy, and state the limits first.",
      },
    ],
    questions: [
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a breach of confidentiality?",
        options: [
          "Handing over a patient's history to the nurse taking the next shift",
          "Discussing a case with the consultant during ward review",
          "Telling a market woman you delivered her neighbour's daughter by caesarean last night",
          "Recording a positive syphilis test in the woman's maternity booklet",
        ],
        correctIndex: 2,
        explanation:
          "Shift handover, ward review and the woman's own record are all care-team uses on a need-to-know basis. Naming a patient to a market woman serves no clinical purpose and exposes her — the textbook breach.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect a child attending your postnatal clinic is being abused. What does your duty require?",
        options: [
          "Keep it confidential — the duty of confidentiality is absolute",
          "Report to the Department of Social Welfare or the police as child protection requires, and document",
          "Wait until the next visit to see whether the bruises fade",
          "Ask the suspected abuser to bring the child for review",
        ],
        correctIndex: 1,
        explanation:
          "Child protection is a legal limit on confidentiality: suspected abuse must be referred and documented. The duty protects patients and the public, not secrets — and delay or confrontation with the abuser endangers the child further.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 16-year-old asks for contraception and begs you not to tell her parents. What is the best response?",
        options: [
          "Offer confidential adolescent-friendly care and explain the limits — you involve others only with her consent or if she is at risk",
          "Refuse to see her without a parent present",
          "Send her home until she is 18",
          "Tell her mother, who is a family friend",
        ],
        correctIndex: 0,
        explanation:
          "Confidential adolescent services keep young people in care; refusal or parental betrayal simply drives them away from services. The offer is privacy with honestly stated limits — safety concerns and legal duties are shared, nothing else.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Confidentiality",
        front: "What three questions should you ask before sharing any patient information?",
        back: "Who needs this information? What exactly do they need to know? What will happen to her if it is said in the wrong place?",
      },
      {
        topic: "Confidentiality",
        front: "Name the legal limits of confidentiality.",
        back: "Notifiable disease reporting, suspected child abuse (safeguarding referral), court orders, and serious risk to an identifiable person.",
      },
      {
        topic: "Confidentiality",
        front: "What do you promise an adolescent who fears disclosure to her parents?",
        back: "Privacy, not secrecy — confidential care with the limits stated up front: you involve parents only with her consent or if her safety is at risk.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Verify current edition.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Patients' Charter",
        note: "Verify current edition with the Ministry of Health.",
      },
      {
        organization: "Ghana Health Service",
        title: "Adolescent Health Service Policy and Strategy",
        note: "Verify current edition with the Ministry of Health.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "The Principles of Healthcare Ethics",
    description:
      "When duties collide — her choice against her safety, fairness against speed — you need more than a kind heart. Meet the four pillars that carry a lifetime of hard calls.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four principles of healthcare ethics.",
      "Explain how the principles conflict in maternity situations.",
      "Apply a structured method for weighing, choosing and documenting ethical decisions.",
    ],
    tags: ["ethics", "principles", "autonomy", "justice"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When duties collide — her choice against her safety, fairness against speed — you need more than a kind heart; you need a framework. The four principles of healthcare ethics are that framework: short enough to remember at 3 am, deep enough to carry a lifetime of hard calls.\n\nThis lesson teaches the four principles, shows where they collide in maternity care, and gives you a method for choosing and defending your choice.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The principles come from Beauchamp and Childress. **Autonomy**: respect the woman's informed choices — her body, her decision. **Beneficence**: act for her benefit — recommend, advise, advocate. **Non-maleficence**: avoid harm — and weigh the harm of action against the harm of inaction. **Justice**: treat similar cases similarly and share scarce resources fairly — theatre time, blood, beds, your time.\n\nThe collisions are the daily bread of nursing. A woman refuses referral for severe pre-eclampsia: autonomy stands against beneficence, and your tools are information, patience and a documented conversation — never coercion. A woman with placenta praevia wants to deliver at the CHPS compound: you counsel honestly about risk and arrange what safety allows. The only theatre is occupied by another emergency: triage by clinical need is justice, not favouritism. When you are torn, name the principles in conflict, weigh them, choose, write your reasoning, and call a senior — ethics is a team sport.",
      },
      {
        type: "clinical_pearl",
        body: "Ethics that is documented can be defended; ethics that lived only in your head cannot. Write the advice you gave, her understanding, and her choice — in her words.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An HIV-positive woman with an undetectable viral load at 38 weeks wants to deliver at home with her mother. You discuss the small risk of transmission without facility care and newborn prophylaxis, learn that she fears ward gossip more than the virus, arrange a discreet corner of the ward with a named nurse, and she accepts.\n\nWhich principles were in tension, and what resolved them?\n\nAnswer: Autonomy — her chosen place of birth — against beneficence and non-maleficence — the best outcome for mother and baby. Resolution was counselling that found the real barrier, fear of stigma rather than stubbornness, and engineered an option she could accept. Coercion would have won the argument and lost the woman.",
      },
      {
        type: "memory_trick",
        body: "The four pillars hold the roof: A-B-N-J — Autonomy (her choice), Beneficence (her benefit), Non-maleficence (no harm), Justice (fair for all). Remove one pillar and the roof of trust falls.",
      },
      {
        type: "summary",
        body: "- Autonomy: respect the informed choices of a woman with capacity — her body, her decision.\n- Beneficence: act for her benefit; non-maleficence: weigh harm of action against harm of inaction.\n- Justice: treat similar cases similarly and share scarce resources by clinical need.\n- Collisions are routine — refusal of referral, place of birth, triage of the only theatre.\n- Method: name the conflict, weigh, choose, document the reasoning, involve a senior.",
      },
    ],
    questions: [
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse allocates the only empty high-dependency bed to the most clinically unstable woman, not the first to arrive. Which principle is she applying?",
        options: [
          "Autonomy",
          "Non-maleficence",
          "Confidentiality",
          "Justice",
        ],
        correctIndex: 3,
        explanation:
          "Justice governs the fair distribution of scarce resources — allocating by clinical need rather than arrival time, wealth or familiarity. It is the principle behind honest triage.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with capacity refuses a recommended life-saving operation. Which response best respects autonomy?",
        options: [
          "Book the theatre anyway — beneficence overrides autonomy",
          "Ask her husband to sign the consent form instead",
          "Explore her reasons, inform fully, respect and document her refusal, continue care",
          "Tell her she will be discharged if she refuses",
        ],
        correctIndex: 2,
        explanation:
          "Autonomy protects a competent woman's decisions about her own body, even unwise ones. Beneficence works through information and counselling, not force; threats and surrogate consent are both violations.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Weighing the risk of a drug's side effects against the risk of leaving her condition untreated illustrates the daily work of which principle?",
        options: [
          "Autonomy",
          "Justice",
          "Confidentiality",
          "Non-maleficence",
        ],
        correctIndex: 3,
        explanation:
          "Non-maleficence is rarely about doing nothing; it is about comparing harms. Every intervention carries risk, so the duty is to choose the path where expected harm is smallest — treatment included.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Ethical Principles",
        front: "Define the four principles of healthcare ethics.",
        back: "Autonomy — respect informed choice; beneficence — act in her best interest; non-maleficence — avoid harm, weighing action against inaction; justice — fairness and equitable distribution.",
      },
      {
        topic: "Ethical Principles",
        front: "How do you manage a clash between autonomy and beneficence?",
        back: "Counsel fully, explore the real barriers, offer safe alternatives, involve seniors — and if she still refuses, respect and document the choice while continuing care. Never coerce.",
      },
      {
        topic: "Ethical Principles",
        front: "Give two examples of justice on the labour ward.",
        back: "Allocating the only theatre or last unit of blood by clinical need, not by connection or payment; and refusing discrimination by tribe, age, HIV status or wealth.",
      },
    ],
    sources: [
      {
        organization: "Oxford University Press",
        title: "Beauchamp TL, Childress JF. Principles of Biomedical Ethics (8th edition)",
        year: "2019",
      },
      {
        organization: "International Confederation of Nurses",
        title: "International Code of Ethics for Nurses",
        note: "Verify current revision.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses (17th edition)",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "Professional Conduct and Accountability",
    description:
      "From the day you pin your badge, you answer to more than your conscience. Learn the four doors of accountability — and the daily habits that keep them all shut against trouble.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the domains in which a registered nurse is accountable.",
      "Explain the standards of conduct, boundaries and social media risks.",
      "Apply the duty to raise concerns about unsafe or impaired colleagues.",
    ],
    tags: ["conduct", "accountability", "nmc", "professionalism", "boundaries"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "From the day you pin your badge, you answer to more than your conscience. Registered nurses in Ghana are accountable to the Nursing and Midwifery Council, to the law, to the employer and to the public — four doors, and every clinical act walks through all of them. Professional conduct is how you keep all four doors shut against trouble.\n\nThis lesson maps your accountability, the code of conduct that defines it, and the boundaries — including social media — that trip up even good nurses.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Accountability means being able to answer for your actions. To the **Nursing and Midwifery Council**: practise within your scope and competence, keep your skills updated, be honest, never falsify records, and report concerns. To the **law**: negligence and crime apply to you personally. To your **employer**: policies, duty rosters and the scope of your job description. To the **public**: the trust that makes women book at your facility at all.\n\nThe code in daily life: arrive fit for duty — a colleague who appears impaired is a patient-safety emergency, not gossip. Keep boundaries: no romantic relationships with women in your care, care with gifts, no borrowing or lending money with patients. Social media is the newest trap: in a small town a post about 'an interesting breech tonight at our hospital' identifies the woman even without a name. **Raising concerns is a duty, not disloyalty**: report through your supervisor or designated officer, and record what you saw, when, and what you did. Students are accountable too — for honesty about what you did and did not do, and for practising only under agreed supervision.",
      },
      {
        type: "clinical_pearl",
        body: "Three habits guard your licence: practise only what you are competent in, document honestly, and speak up when care is unsafe. Nearly every fitness-to-practise case involves at least one habit that slipped.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "For the second night running a colleague on the labour ward smells of alcohol and makes confused decisions. Two mothers are in labour. You quietly take over her women, inform the shift lead immediately, and write a factual note of what you observed and did. The colleague is stood down and referred for support, and the mothers are safe.\n\nWhy not simply cover for her until morning?\n\nAnswer: Because covering an impaired practitioner trades tonight's safety — and your registration — for a quiet shift. Reporting is patient protection first and colleague support second: illness deserves help, but impairment on duty demands removal, and silence makes you complicit in whatever follows.",
      },
      {
        type: "memory_trick",
        body: "Accountability has four doors: the Council, the Court, the Employer, the Public. Guard them with three habits — Competence, honest Charts, and raising Concerns: the three Cs.",
      },
      {
        type: "summary",
        body: "- A registered nurse answers to the Nursing and Midwifery Council, the law, the employer and the public.\n- The code demands scope of practice, updated competence, honesty and truthful records.\n- Boundaries: no relationships with women in your care, care with gifts and money, disciplined social media.\n- An impaired colleague is a patient-safety event: act to protect mothers, report, record.\n- Students are accountable for honesty and for practising only under agreed supervision.",
      },
    ],
    questions: [
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Easy",
        stem: "To whom is a registered nurse in Ghana accountable?",
        options: [
          "Only to the medical director of the hospital",
          "Only to the professional association",
          "The Nursing and Midwifery Council, the law, the employer and the public",
          "Only to the clients she attends",
        ],
        correctIndex: 2,
        explanation:
          "Accountability runs through four doors at once: professional (the Council and its code), legal (negligence and crime), employer (policies and scope of employment) and public (the trust behind care-seeking). No single door excuses the others.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse posts 'Night shift drama — a footling breech walked into our theatre!' with the hospital tagged, but no patient name. What is the professional problem?",
        options: [
          "Nothing — the woman is not named, so no breach occurred",
          "In a small community, the time, place and story can identify the woman — a confidentiality and professionalism breach",
          "Only that she used her phone at work",
          "Breech births should never be discussed publicly",
        ],
        correctIndex: 1,
        explanation:
          "Identification does not require a name: hospital, date and a rare event narrow a small community to one woman. The post breaches confidentiality and professionalism — the phone-use rule is a lesser issue, and the topic is not the problem.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You observe a colleague repeatedly documenting observations that were never taken. What is your duty?",
        options: [
          "Report the falsification through the appropriate supervisory channel and record what you saw, when and what you did",
          "Say nothing — documentation is her responsibility alone",
          "Correct her notes yourself in the patient's file",
          "Warn her once and ask others on shift to watch her",
        ],
        correctIndex: 0,
        explanation:
          "Falsified records are both a professional and a patient-safety violation. The duty is to escalate through proper channels with a factual, timed account. Quiet warnings and amateur corrections leave fabricated clinical data in the record — the most dangerous outcome of all.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Accountability",
        front: "Name the four doors of nursing accountability.",
        back: "The Nursing and Midwifery Council (professional conduct), the law (negligence), the employer (policies and scope) and the public (trust).",
      },
      {
        topic: "Professional Boundaries",
        front: "Why is 'no names' not enough protection for social media posts about patients?",
        back: "In a small community, hospital, date and an unusual event identify the woman anyway. Re-identification, not naming, is the breach.",
      },
      {
        topic: "Raising Concerns",
        front: "What do you do when a colleague on duty appears impaired?",
        back: "Protect the mothers first (reallocate care), inform the shift lead immediately, and document factually what you observed, when, and what you did. Reporting is duty, not betrayal.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Verify current edition.",
      },
      {
        organization: "International Confederation of Nurses",
        title: "International Code of Ethics for Nurses",
        note: "Verify current revision.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses (17th edition)",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "Legal Responsibilities of the Nurse",
    description:
      "The law does not ask whether you meant well — it asks what you owed, what you did, and what followed. Learn the frame that lets you practise calmly and defend clearly.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four elements of negligence and the standard of care.",
      "Explain employer vicarious liability versus personal accountability.",
      "Apply the statutory duties of registration, notification, records and candour.",
    ],
    tags: ["law", "negligence", "liability", "records", "duty of candour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The law does not ask whether you meant well. It asks what you owed, what you did, and whether what you did caused what happened. Nurses who understand the legal frame practise more calmly — because they know exactly where the edges are, and how their pen protects them.\n\nHere you will learn the four elements of negligence, who pays when things go wrong, and the statutory duties — birth notification, disease reporting, record retention — that come with the badge.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A negligence claim needs the **four Ds**, all present. **Duty**: you owed her a duty of care, automatic once you take her on. **Dereliction**: you fell below the standard a reasonable body of nurses would accept — national guidelines and WHO recommendations now help define that standard. **Direct causation**: your breach actually caused the harm. **Damage**: harm resulted, physical or psychological. Miss any one element and the claim fails — which is why exact times in notes matter so much.\n\n**Vicarious liability** means your employer — the Ghana Health Service or the facility — is generally liable for acts within your employment, but this never erases your personal accountability to the Council, and acts clearly outside your scope can land on you alone. Two further duties: consent — touching or treating without consent can be battery, and the emergency exception must be genuine; and **statutory duties** — births and stillbirths must be notified to the Births and Deaths Registry, notifiable diseases reported, suspected child abuse referred, and records kept for the retention period your facility policy sets. When harm occurs, honesty is also a legal posture: tell her what happened, apologise for the experience, document — concealment converts error into misconduct.",
      },
      {
        type: "clinical_pearl",
        body: "In court the question is never 'did she try her best?' but 'show the court what she did and when'. Your pen is your defence counsel — contemporaneous, exact, unembarrassed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman bleeds after birth. The nurse is certain she gave oxytocin within two minutes, but the drug chart shows no time and the note was written an hour later from memory. In the resulting claim, the problem is not that she failed — it is that nothing she says can be verified.\n\nWhich part of her defence has collapsed, and why?\n\nAnswer: The documentation. Without contemporaneous times, the court cannot see whether the standard was met, and 'not documented, not done' turns a defensible case into an empty one. Causation may be arguable from the clinical facts; a blank chart is not arguable at all.",
      },
      {
        type: "memory_trick",
        body: "Negligence needs all four Ds standing: Duty, Dereliction, Direct causation, Damage. Knock down one D and the claim collapses — and your records are the evidence for every D.",
      },
      {
        type: "summary",
        body: "- Negligence requires duty of care, breach of the accepted standard, causation and damage — all four.\n- Guidelines and WHO recommendations help define the standard a reasonable body of nurses accepts.\n- Vicarious liability covers in-scope acts; personal accountability — and personal liability — never disappear.\n- Treating without consent can be battery; the emergency exception must be genuine and documented.\n- Statutory duties: notify births and stillbirths, report notifiable diseases, refer safeguarding, retain records; be candid when harm occurs.",
      },
    ],
    questions: [
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the four elements of negligence?",
        options: [
          "Duty of care, breach of standard, causation, damage",
          "Duty, payment, apology, punishment",
          "Delay, dereliction, discharge, documentation",
          "Doubt, diagnosis, drugs, decisions",
        ],
        correctIndex: 0,
        explanation:
          "A claim must show a duty owed, a breach of the standard, harm that the breach directly caused, and actual damage. All four must stand — remove any one and the claim fails, whatever the tragedy.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about vicarious liability is correct?",
        options: [
          "The employer is liable only if the nurse is a student",
          "The nurse is never personally liable once employed",
          "The employer is generally liable for acts within employment, but the nurse remains professionally accountable to the Council",
          "Liability transfers entirely to the woman if she signed consent",
        ],
        correctIndex: 2,
        explanation:
          "Employers generally answer for acts performed within the scope of employment — but professional accountability to the Council is personal and permanent, and a signed consent form does not excuse substandard care.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse performs a procedure she is neither trained nor authorised to perform, and harm results. Where does liability most likely fall?",
        options: [
          "Entirely on the employer under vicarious liability",
          "Personally on the nurse, since she acted outside her scope of practice",
          "On the woman for failing to refuse",
          "On the Nursing and Midwifery Council for registering her",
        ],
        correctIndex: 1,
        explanation:
          "Vicarious liability covers acts within employment and scope. A procedure outside training and authorisation falls outside that protection, exposing the nurse personally — to the court and to the Council.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Negligence",
        front: "State the four Ds of negligence.",
        back: "Duty of care owed; Dereliction — breach of the accepted standard; Direct causation; Damage. All four must be proved for a claim to succeed.",
      },
      {
        topic: "Vicarious Liability",
        front: "Does employer liability erase personal accountability?",
        back: "No. The employer generally answers financially for in-scope acts, but the nurse remains personally accountable — professionally to the Council, and personally in law for out-of-scope acts.",
      },
      {
        topic: "Records and Law",
        front: "Why are contemporaneous records the nurse's best legal defence?",
        back: "Courts reconstruct care from notes, not memory: without times, doses and escalation entries, the standard met cannot be shown — 'not documented, not done'.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Verify current edition.",
      },
      {
        organization: "Government of Ghana",
        title: "Ghana Health Service and Teaching Hospitals Act (Act 525)",
        year: "1996",
        note: "Verify current text and amendments.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses (17th edition)",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Protecting and Recording",
    lessonTitle: "Safeguarding: Protecting the Vulnerable",
    description:
      "Some of the people in your care cannot protect themselves. Safeguarding is the professional machinery that stands between them and harm — and in Ghana, you are part of it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe vulnerable groups and the recognition patterns of abuse.",
      "Explain the WHO LIVES response to a disclosure of violence.",
      "Apply Ghanaian referral routes and documentation for safeguarding concerns.",
    ],
    tags: ["safeguarding", "gbv", "child protection", "lives", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the people in your care cannot protect themselves — a schoolgirl made pregnant by a man three times her age, a woman beaten at every visit, an old grandmother whose pension is taken from her, a baby whose burns match no story. Safeguarding is the professional machinery that stands between them and harm, and in Ghana you are part of that machinery.\n\nThis lesson covers who is vulnerable, how to recognise abuse, what to do when a woman discloses, and where the law sends you next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Recognise the patterns: injuries inconsistent with the story or the child's development, delay in seeking care, repeated 'accidents', a partner who answers for her and refuses to leave the room, fearfulness, a minor's pregnancy that is itself a criminal red flag, or FGM scars on examination.\n\nWhen she discloses, your first response is the WHO **LIVES** framework: **Listen** without judgment; **Inquire** gently about her needs; **Validate** — believe her and name the violence as wrong; **Enhance safety** — is she safe tonight, are the children safe; **Support** — connect her to help and keep the door open. Never say 'why don't you just leave', and never promise secrecy. The law limits your silence: the Children's Act (Act 560, 1998) drives reporting of suspected child abuse to the Department of Social Welfare or the police; FGM has been a criminal offence since the 1994 amendment of the Criminal Code; the Domestic Violence Act (Act 732, 2007) backs referral to the Domestic Violence and Victim Support Unit — DOVVSU. Document exactly: her words in quotation marks, body maps, dates and times, and who you informed.",
      },
      {
        type: "clinical_pearl",
        body: "Two sentences never to say: 'Why don't you just leave him?' and 'I won't tell anyone.' Two always to say: 'I believe you — this is not your fault' and 'Let us make you and the children safe tonight.'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 15-year-old books for antenatal care with bruises on her forearm. Her 'boyfriend' is 32 and waits outside. She is frightened of him and of her parents, and begs you to keep everything secret.\n\nWhat are your immediate steps?\n\nAnswer: Clinical care and privacy first. Then, honestly, explain that you cannot promise secrecy — she is a minor at risk, so child protection applies: involve the Department of Social Welfare and DOVVSU per protocol, plan her immediate safety with her, and safeguard what she shares. Document her words verbatim, the findings on a body map, the time, and the referrals made. Confronting the partner is not your job and may endanger her further.",
      },
      {
        type: "memory_trick",
        body: "For a disclosure, LIVES: Listen, Inquire, Validate, Enhance safety, Support. For the route: A-B-C-D — Ask privately, Believe, Child first, DOVVSU and Document.",
      },
      {
        type: "summary",
        body: "- Vulnerable groups: children, women facing violence, adolescents, the elderly, the disabled.\n- Recognition: inconsistent injuries, delayed care-seeking, controlling partners, a minor's pregnancy, FGM scars.\n- Respond with LIVES: listen, inquire, validate, enhance safety, support — never judgment, never secrecy.\n- Ghana's machinery: Children's Act 560, the FGM ban of 1994, Domestic Violence Act 732, DOVVSU and Social Welfare.\n- Document verbatim, body-map the injuries, record times and referrals.",
      },
    ],
    questions: [
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which response belongs to the WHO LIVES first-line response to a disclosure of violence?",
        options: [
          "Advise her to leave the relationship immediately",
          "Listen without judgment, validate that the violence is not her fault, and help enhance her safety",
          "Ask her to confront her partner while you observe",
          "Prescribe sedation to help her sleep",
        ],
        correctIndex: 1,
        explanation:
          "LIVES is Listen, Inquire, Validate, Enhance safety, Support. It centres belief and safety planning. Telling her to leave ignores why women stay (resources, children, danger peaks on leaving), and confrontation or sedation solve nothing and can escalate risk.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must you never promise a disclosing woman absolute secrecy?",
        options: [
          "Because secrets are unprofessional in general",
          "Because child protection and legal duties may require you to share information, and a broken promise destroys trust and safety planning",
          "Because your supervisor owns all information",
          "Because she will tell others anyway",
        ],
        correctIndex: 1,
        explanation:
          "Some disclosures trigger mandatory sharing — child abuse, serious risk. Promising secrecy sets a trap: either you break the promise and lose her trust, or you keep it and fail a child. Offer privacy with honestly stated limits instead.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the legal status of female genital mutilation in Ghana?",
        options: [
          "It is a criminal offence, banned by the 1994 amendment of the Criminal Code",
          "It is legal if performed by a health worker",
          "It is legal with parental consent in rural areas",
          "It is banned only for girls under 12",
        ],
        correctIndex: 0,
        explanation:
          "Ghana criminalised FGM in 1994 by amendment of the Criminal Code. Whoever performs it — including a health worker — commits an offence; no consent, custom or age exception applies.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Safeguarding",
        front: "Spell out LIVES.",
        back: "Listen without judgment; Inquire gently about needs and risks; Validate — believe her, it is not her fault; Enhance safety — is she and are the children safe tonight; Support and refer.",
      },
      {
        topic: "Safeguarding",
        front: "What must you never promise at a disclosure — and why?",
        back: "Absolute secrecy. Child protection and legal duties may compel sharing; offer privacy with stated limits so trust is never betrayed by a broken promise.",
      },
      {
        topic: "Safeguarding",
        front: "Name Ghana's key legal instruments and referral bodies for safeguarding.",
        back: "Children's Act 1998 (Act 560); Criminal Code amendment banning FGM (1994); Domestic Violence Act 2007 (Act 732); referrals to DOVVSU and the Department of Social Welfare.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Responding to Intimate Partner Violence and Sexual Violence against Women: WHO Clinical and Policy Guidelines",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548595",
      },
      {
        organization: "Government of Ghana",
        title: "Children's Act, 1998 (Act 560)",
        year: "1998",
        note: "Verify current text and amendments.",
      },
      {
        organization: "Government of Ghana",
        title: "Domestic Violence Act, 2007 (Act 732)",
        year: "2007",
        note: "Verify current text and amendments.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Protecting and Recording",
    lessonTitle: "Documentation: Your Legal Shield",
    description:
      "Every note you write has three futures — tonight's handover, next year's audit, and one day, evidence. Learn to write notes that protect patients, nurses and the truth.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the purposes and principles of nursing records.",
      "Explain the rules for correcting errors and making late entries.",
      "Apply documentation standards to escalation and emergency situations.",
    ],
    tags: ["documentation", "records", "contemporaneous", "corrections", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every note you write has three futures: tonight it is a handover, next year it is an audit, and one day it may be evidence read aloud with a lawyer, the woman and another nurse at the table. Documentation that serves all three futures is a skill — learnable, and protective of your patient, your team and you.\n\nThis lesson sets out what makes notes legally and clinically sound, how to correct them honestly, and what must never be missing.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Notes are written for four audiences at once: the next caregiver (communication), the court (evidence), the auditor (quality and research data) and the woman herself (her own story). The principles: **contemporaneous** — at the time or as soon as possible after; **factual** — what you observed and did, not what you concluded (record 'BP 150/100, headache present', not 'she is being dramatic'); **complete** — times of observations, drugs with dose, route and time, who you escalated to, their advice, and what you then did; and **attributable** — signed with your name and designation on every entry.\n\nCorrections happen. Never use correcting fluid — draw a single line through the error so it stays readable, add the correction, initial and date it. A late entry is labelled 'late entry' with the reason and written in true sequence, never squeezed into a gap to look prompt. The entries that decide cases are the escalation entries — '21:40 Dr Mensah informed, advised oxytocin 10 units IM, given 21:45, reviewed 21:55' — because they show duty, standard and causation all at once.",
      },
      {
        type: "clinical_pearl",
        body: "Write every note as though a lawyer, a nurse and the woman herself will read it together in three years — because one day they might. If it is not written, in law it was not done.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A newborn needs brief resuscitation at 02:10. The nurse stays in the room stabilising the baby and the mother, and writes the note at 04:30 from memory: 'baby flat, bagged, cried'. At review, the minute-by-minute timing of ventilation and the Apgar scores cannot be reconstructed.\n\nWhat was lost, and what is the correct practice?\n\nAnswer: The minutes that guide neonatal follow-up — when breathing effort changed, what was done each minute, Apgar at 1 and 5 — and the legal defence. The right practice is a brief contemporaneous entry even during the emergency (a corner of the partogram or resuscitation record), then a timed late entry, labelled with the reason, completed before the shift ends.",
      },
      {
        type: "memory_trick",
        body: "A defensible note is FACT: Factual, At the time — contemporaneous, Complete with times, drugs and escalation, and Tagged with your signature. Errors: one line, initial, date — never ink.",
      },
      {
        type: "summary",
        body: "- Records serve communication, evidence, audit and the woman's own story.\n- Principles: contemporaneous, factual, complete (times, doses, escalation), attributable.\n- Correct errors with a single line, initial and date — never correcting fluid.\n- Label late entries with the reason; write them in true sequence.\n- Escalation entries decide cases: who, when, what was advised, what you did.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How should a written error in a record be corrected?",
        options: [
          "Erase it completely or cover it with correcting fluid",
          "Rewrite the whole page on a fresh sheet and destroy the old one",
          "Leave it — the record is a legal document and must never be touched",
          "Draw a single line through it so it remains legible, add the correction, initial and date",
        ],
        correctIndex: 3,
        explanation:
          "Legal records must show their own history: a struck-through, still-readable error, initialled and dated, proves honest correction. Erasure, rewriting or destruction of the original destroys credibility — it looks like concealment.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which entry is the strongest documentation of an escalation?",
        options: [
          "'Doctor informed.'",
          "'Told the doctor about the patient.'",
          "'Escalated as per protocol.'",
          "'21:40 Dr Mensah informed of BP 170/115 with clonus; advised hydralazine 5 mg IV and transfer; given 21:45, mother reviewed 21:55.'",
        ],
        correctIndex: 3,
        explanation:
          "The strongest entry names who was informed, when, of what, what was advised, and what was done and when — duty, standard and causation all visible. The other three are unverifiable fragments a court cannot use.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does 'contemporaneous' documentation mean?",
        options: [
          "Written at the time of the events, or as soon as practicable afterwards",
          "Written neatly in permanent ink",
          "Written only at the end of the shift",
          "Written together with the doctor",
        ],
        correctIndex: 0,
        explanation:
          "Contemporaneous means written while events are fresh — at the point of care or as soon as practicable. Memory written hours later fades, blurs times and orders, and carries little weight as evidence.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "State the correction rule for written records.",
        back: "Single line through the error so it stays legible, write the correction, initial and date. Never correcting fluid, never erasure, never rewriting the page.",
      },
      {
        topic: "Documentation",
        front: "What five elements make an escalation entry defensible?",
        back: "Who was informed (name), when (time), of what (findings), what was advised, and what you did and when in response.",
      },
      {
        topic: "Documentation",
        front: "What are the four audiences every note serves?",
        back: "The next caregiver (communication), the court (evidence), the auditor (quality and data), and the woman herself (her story).",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses (17th edition)",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "What Is Evidence-Based Practice?",
    description:
      "For centuries nurses did things 'because that is how it is done' — until trials swept the habits away. Evidence-based practice is the discipline of asking, checking and choosing.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define evidence-based practice and its three components.",
      "Explain the five-step cycle and the PICO question format.",
      "Apply the cycle to changing a ward tradition such as routine episiotomy.",
    ],
    tags: ["ebp", "evidence", "pico", "guidelines", "sackett"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For centuries, nurses did things because 'that is how it is done' — enemas, shaved pubic hair, starvation in labour, routine episiotomy. One by one, trials have swept many of these away. Evidence-based practice is the discipline of asking, checking and choosing, so that your hands follow knowledge rather than habit.\n\nIn this lesson you will define EBP, learn the five-step cycle, and practise shaping a ward question into a form a database can answer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "David Sackett defined it in 1996: the conscientious, explicit and judicious use of current best evidence, integrated with clinical expertise and the woman's values. Picture a **three-legged stool**: evidence, expertise and values. Evidence without her values is paternalism; values without evidence are guesswork; without your expertise neither survives contact with a real woman at 2 am.\n\nThe cycle is five A's. **Ask** a focused question — PICO: Population, Intervention, Comparison, Outcome ('In term primigravidae (P), does routine episiotomy (I) compared with restricted use (C) reduce severe perineal tears (O)?'). **Acquire** the evidence — guidelines first (WHO, national protocols), then systematic reviews, then primary studies. **Appraise** the quality before trusting it. **Apply** it to this woman, this facility, these resources. **Assess** whether the change helped. Barriers are real — time, access, skills — so start from pre-appraised guidelines: WHO's intrapartum care recommendations, for example, already restrict episiotomy and endorse companionship, so a busy unit can change practice tonight.",
      },
      {
        type: "clinical_pearl",
        body: "Guidelines are evidence pre-chewed: WHO and national protocols have already appraised the studies for you. When time is short, a current guideline outranks a memory and equals a good search.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your unit performs episiotomy on nearly every first-time mother 'to prevent bad tears'. At a journal club you find WHO's intrapartum care recommendation against routine episiotomy and a Cochrane review agreeing. The nurse in charge asks you to lead the change.\n\nHow do you proceed through the remaining A's?\n\nAnswer: You have already asked (the PICO question), acquired (WHO, Cochrane) and appraised (the guidelines have done it). Now apply — propose a restricted-episiotomy protocol, teach the true indications, address colleagues' fear of tears and blame — then assess: audit episiotomy rates and severe tears before and after, and feed the numbers back to the unit. Evidence that is never applied and assessed is decoration.",
      },
      {
        type: "memory_trick",
        body: "The A-team: Ask, Acquire, Appraise, Apply, Assess. And the stool of three legs — Evidence, Expertise, her Values — remove one leg and the stool falls.",
      },
      {
        type: "summary",
        body: "- EBP integrates best research evidence with clinical expertise and the woman's own values.\n- Form focused PICO questions: Population, Intervention, Comparison, Outcome.\n- Work the five A's: ask, acquire, appraise, apply, assess.\n- Guidelines and systematic reviews come first when time is short.\n- Tradition is not evidence — routine episiotomy, starvation and enemas all fell to trials.",
      },
    ],
    questions: [
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to Sackett, evidence-based practice integrates best research evidence with what?",
        options: [
          "Clinical expertise and the patient's own values",
          "Hospital management directives and budget limits",
          "The most senior clinician's preference",
          "Traditional practices of the community",
        ],
        correctIndex: 0,
        explanation:
          "Sackett's definition joins three elements: current best evidence, clinical expertise, and the patient's values. Drop any one and care either becomes guesswork, paternalism or blind protocol-following.",
        courseSlug: "research-methods",
      },
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Frame the question: 'In term primigravidae, does routine episiotomy, compared with restricted episiotomy, reduce severe perineal tears?' In PICO, what is the O?",
        options: [
          "Severe perineal tears",
          "Term primigravidae",
          "Routine episiotomy",
          "Restricted episiotomy",
        ],
        correctIndex: 0,
        explanation:
          "The Outcome — what you hope to influence — is severe perineal tears. Term primigravidae is the Population, routine episiotomy the Intervention, restricted use the Comparison. Each letter plays one role only.",
        courseSlug: "research-methods",
      },
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A unit continues routine episiotomy because 'the senior nurses have always done it'. In EBP terms, what is this?",
        options: [
          "Evidence-based practice by consensus",
          "Applying the precautionary principle",
          "A form of clinical audit",
          "Practice based on tradition rather than current evidence",
        ],
        correctIndex: 3,
        explanation:
          "'We have always done it this way' is the definition of tradition-based practice — the exact habit EBP exists to challenge. Consensus among staff is not evidence, and routine episiotomy is specifically not recommended by WHO.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Evidence-Based Practice",
        front: "Give Sackett's definition of evidence-based practice.",
        back: "The conscientious, explicit and judicious use of current best evidence in decisions about individual patients — integrated with clinical expertise and patient values.",
      },
      {
        topic: "Evidence-Based Practice",
        front: "What are the three legs of the EBP stool?",
        back: "Best research evidence, clinical expertise, and the woman's own values — all three needed, or the stool falls.",
      },
      {
        topic: "Evidence-Based Practice",
        front: "Spell the five A's of the EBP cycle.",
        back: "Ask (PICO), Acquire (search), Appraise (quality), Apply (fit to the woman and setting), Assess (did it work).",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "BMJ",
        title: "Sackett DL, et al. Evidence Based Medicine: What It Is and What It Isn't. BMJ 1996;312:71-72",
        year: "1996",
        url: "https://doi.org/10.1136/bmj.312.7023.71",
      },
      {
        organization: "Cochrane Library (Wiley)",
        title: "The Cochrane Library: Systematic Reviews of Healthcare Interventions",
        note: "Search via cochranelibrary.com.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "Finding and Reviewing the Literature",
    description:
      "Searching badly is easy — drown in two thousand results and quote the first three. Searching well is a craft: five ponds, a Boolean gate, and a written trail others can follow.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the key databases available to a Ghanaian student researcher.",
      "Explain Boolean search logic and screening against inclusion criteria.",
      "Apply a documented search strategy and the evidence hierarchy to a question.",
    ],
    tags: ["literature review", "search", "databases", "prisma", "evidence hierarchy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your project — and your practice — will stand on literature you must find yourself. Searching badly is easy: type a sentence into a browser, drown in two thousand results, and quote the first three. Searching well is a craft: five ponds, a Boolean gate, and a written trail that another person could follow.\n\nThis lesson shows you where to fish, how to build the search, how to screen what you catch, and what makes a review 'systematic' rather than a lucky dip.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know your **five ponds**: PubMed (free MEDLINE), the Cochrane Library (systematic reviews — the deepest pond), African Journals Online — AJOL — for research done on your own ground, Google Scholar (broad, fine for a start), and HINARI, which gives Ghanaian institutions free or low-cost access to thousands of journals.\n\nBuild the search from your PICO: list concepts and synonyms, then set the Boolean gate — **OR** gathers the synonyms of one concept ('home birth' OR 'home delivery'), **AND** narrows across concepts (home birth AND Ghana AND barriers). Add filters: date, language, publication type. **Screen** titles and abstracts against written inclusion and exclusion criteria — population, place, design, years — then read the survivors in full. Write down the database, the date, the exact terms and the number of hits: your search record is part of your methods, and the PRISMA flow diagram will demand it. Trust follows the **evidence hierarchy**: systematic reviews and meta-analyses at the top, then randomised trials, cohort, case-control, cross-sectional, case reports — expert opinion at the bottom. A **systematic review** is not a long literature review: it follows a written protocol, searches exhaustively, appraises quality with two reviewers, and synthesises in a way you could repeat.",
      },
      {
        type: "clinical_pearl",
        body: "Search like a farmer, not a hunter: sow many seeds (OR synonyms), weed precisely (AND concepts), and write down where and when you harvested. Your search record is half the harvest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student types 'why women deliver at home Northern Ghana' into a general browser and gets two thousand mixed hits, from news pages to theses. She rebuilds it: ('home birth' OR 'home delivery' OR 'facility delivery') AND (barriers OR determinants) AND Ghana, filtered to 2015-2025, run in PubMed and AJOL. She screens forty titles, keeps twelve abstracts, reads eight full texts, and records each search with dates and hit counts.\n\nWhy does recording the searches matter?\n\nAnswer: Because a documented trail makes the review reproducible and honest: examiners — and PRISMA flow diagrams — ask exactly how studies were found, how many were screened and excluded at each stage, and why. The search record is what separates a review from an opinion decorated with quotations.",
      },
      {
        type: "memory_trick",
        body: "Five ponds: P-C-A-G-H — PubMed, Cochrane, AJOL, Google Scholar, HINARI. Boolean: OR gathers the family of synonyms, AND narrows the gate, NOT locks a door.",
      },
      {
        type: "summary",
        body: "- Five sources: PubMed, Cochrane Library, AJOL, Google Scholar and HINARI access.\n- Build searches from PICO: OR for synonyms, AND across concepts, filters for date and type.\n- Screen titles and abstracts against written inclusion criteria, then full texts.\n- Record every search — database, date, terms, hits — PRISMA will demand it.\n- Hierarchy: systematic reviews, then RCTs, cohort, case-control, cross-sectional, case reports, opinion.",
      },
    ],
    questions: [
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which database specialises in systematic reviews of healthcare interventions?",
        options: [
          "Google Scholar",
          "African Journals Online",
          "General web browsers",
          "The Cochrane Library",
        ],
        correctIndex: 3,
        explanation:
          "The Cochrane Library is devoted to systematic reviews and their protocols, with a focus on intervention effects. The others contain primary studies and grey literature but no monopoly on reviews.",
        courseSlug: "research-methods",
      },
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Boolean searching, what does combining synonyms with OR achieve?",
        options: [
          "It broadens the search by catching all synonyms of a concept",
          "It narrows the search to fewer, more precise results",
          "It excludes unwanted topics from the search",
          "It translates the search into local languages",
        ],
        correctIndex: 0,
        explanation:
          "OR is the gatherer: 'home birth' OR 'home delivery' catches every author's wording for one concept. AND is the gate that narrows across concepts; NOT excludes. Confusing OR with AND is the commonest search error.",
        courseSlug: "research-methods",
      },
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes a review 'systematic' rather than narrative?",
        options: [
          "It is written by a senior professor",
          "It cites more than one hundred references",
          "It follows a pre-written protocol with an exhaustive, documented search and quality appraisal by more than one reviewer",
          "It is published in an international journal",
        ],
        correctIndex: 2,
        explanation:
          "Systematic reviews declare their methods in advance, search exhaustively, screen and appraise with at least two reviewers, and report the flow — which is why they sit at the top of the evidence hierarchy. Authorship, citation count and journal prestige prove nothing.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Literature Searching",
        front: "Name the five ponds for nursing literature searching.",
        back: "PubMed, the Cochrane Library, African Journals Online (AJOL), Google Scholar, and HINARI (free or low-cost journal access for eligible institutions).",
      },
      {
        topic: "Literature Searching",
        front: "What do OR and AND do in a Boolean search?",
        back: "OR gathers synonyms of one concept, broadening the net; AND combines different concepts, narrowing the results.",
      },
      {
        topic: "Literature Searching",
        front: "What defines a systematic review?",
        back: "A pre-specified protocol, an exhaustive documented search, screening against written criteria, appraisal by two or more reviewers, and transparent synthesis — repeatable by others.",
      },
    ],
    sources: [
      {
        organization: "Cochrane Training",
        title: "Cochrane Handbook for Systematic Reviews of Interventions (version 6)",
        year: "2019",
        url: "https://training.cochrane.org/handbook",
      },
      {
        organization: "PRISMA / EQUATOR Network",
        title: "PRISMA 2020 Statement and Flow Diagram",
        year: "2021",
        url: "https://www.prisma-statement.org",
      },
      {
        organization: "Research4Life (HINARI)",
        title: "HINARI Access to Research in Health Programme",
        url: "https://www.research4life.org",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "Judging the Quality of Research",
    description:
      "Not every published study deserves your trust — and the title rarely confesses its weaknesses. Critical appraisal is the interrogation that separates evidence from decoration.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three master questions of critical appraisal.",
      "Explain bias and confounding and how each is contained.",
      "Apply checklists and read effect sizes, p-values and confidence intervals like a clinician.",
    ],
    tags: ["appraisal", "bias", "confounding", "confidence intervals", "checklists"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Not every published study deserves your trust, and the title rarely confesses its weaknesses. Critical appraisal is the skill of interrogating a paper — is this true? is this big? does this apply to my ward? — and it is what separates evidence-based practitioners from citation collectors.\n\nYou will learn the three master questions, the bias and confounding that corrupt studies, the checklists that keep you honest, and how to read a p-value and a confidence interval without being hypnotised.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Interrogate every paper with **V-R-A**: is it **valid** — were the methods strong enough that bias has not manufactured the result? Are the **results** important — big enough to matter and precise enough to trust? Is it **applicable** — were the participants like your women, in a setting like yours, with resources like yours?\n\n**Bias** is systematic error: **selection bias** — the groups differed before the study began, cured by randomisation with concealed allocation; **measurement bias** — faulty tools or unblinded outcome assessment, cured by blinding. **Confounding** is the hidden third variable linked to both exposure and outcome — poverty confounds the link between home birth and death; randomisation, restriction, matching and adjusted analysis contain it. Checklists keep the interrogation honest: CASP for reading, CONSORT for reporting trials, STROBE for observational studies, PRISMA for reviews. Then read the numbers like a clinician: effect size first (relative risk, odds ratio, mean difference — how big is the difference?), then the **95% confidence interval** — the range of plausible truth; if it crosses 1 for a ratio measure, the study cannot exclude 'no effect', whatever the p-value suggests. Statistical significance is not clinical importance: a tiny, precise difference can be significant and still change nothing on your ward.",
      },
      {
        type: "clinical_pearl",
        body: "A p-value answers 'could chance have done this?' A confidence interval answers 'how big might it really be?' Your practice should follow the size, not the stars.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A poster at a conference claims a new uterotonic 'significantly reduces postpartum haemorrhage'. You find the abstract: relative risk 0.95, 95% confidence interval 0.70-1.30, p = 0.75. A colleague says the title still says 'reduces'.\n\nWhat do you tell her?\n\nAnswer: The interval crosses 1 and the p-value is far from significant — the study cannot exclude no effect, so 'reduces' in the title is spin. The effect, if any, is small and imprecise; no change in unit practice is justified. Keep oxytocin, and judge titles by their intervals, not their adjectives.",
      },
      {
        type: "memory_trick",
        body: "Interrogate with V-R-A: Valid? Results big and precise? Applicable to my women? And remember — a CI crossing 1 is a broken bridge: however wide the title smiles, no significant effect crosses it.",
      },
      {
        type: "summary",
        body: "- Three questions: is the study valid, are the results important, are they applicable to my setting?\n- Selection bias is cured by randomisation with concealed allocation; measurement bias by blinding.\n- Confounding is a third variable linked to exposure and outcome — contained by design and adjustment.\n- Use the checklists: CASP, CONSORT, STROBE, PRISMA.\n- Read effect size and 95% confidence interval; a CI crossing 1 means no demonstrated effect; significance is not importance.",
      },
    ],
    questions: [
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are outcome assessors blinded in a trial?",
        options: [
          "To make the trial cheaper to run",
          "To reduce measurement bias from knowing which group a participant belongs to",
          "To keep participants from leaving the study",
          "To satisfy the ethics committee only",
        ],
        correctIndex: 1,
        explanation:
          "An assessor who knows the allocation may, quite unconsciously, record outcomes differently between groups — measurement bias. Blinding the assessor protects the measurement, protecting the study's validity.",
        courseSlug: "research-methods",
      },
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A trial reports a relative risk of 1.2 with a 95% confidence interval of 0.8-1.8. How should you interpret it?",
        options: [
          "A 20% increase in risk, proven",
          "A 20% increase in risk, clinically important",
          "Not statistically significant — the interval crosses 1, so no effect cannot be excluded",
          "The trial was too small to report a confidence interval correctly",
        ],
        correctIndex: 2,
        explanation:
          "The interval spans both sides of 1 — risk could plausibly be raised by 80% or lowered by 20%. The point estimate means little until the interval excludes no effect; the CI was computable precisely because the trial had a size to compute from.",
        courseSlug: "research-methods",
      },
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is confounding?",
        options: [
          "Deliberate falsification of results by researchers",
          "Random variation that disappears with bigger samples",
          "An error in the statistical software",
          "A third variable associated with both the exposure and the outcome that can fake or mask an association",
        ],
        correctIndex: 3,
        explanation:
          "Confounding is the hidden third man: linked to both exposure and outcome, it can manufacture a false association or bury a real one. Randomisation, matching, restriction and adjusted analysis are the containment tools; it is not fraud, not chance, not software error.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Critical Appraisal",
        front: "What are the three master questions of appraisal (V-R-A)?",
        back: "Valid — are the methods free of fatal bias? Results — are they big enough to matter and precise enough to trust? Applicable — are the participants and setting like mine?",
      },
      {
        topic: "Critical Appraisal",
        front: "What does a 95% confidence interval crossing 1 tell you?",
        back: "For a ratio measure (RR, OR), the interval includes 'no effect' — the result is not statistically significant, however the title words it.",
      },
      {
        topic: "Critical Appraisal",
        front: "Define confounding and name two ways to contain it.",
        back: "A third variable linked to both exposure and outcome that distorts their true association. Contained by randomisation, matching, restriction or statistical adjustment.",
      },
    ],
    sources: [
      {
        organization: "Critical Appraisal Skills Programme (CASP)",
        title: "CASP Checklists for Appraising Research",
        url: "https://casp-uk.net",
      },
      {
        organization: "EQUATOR Network",
        title: "Reporting Guidelines: CONSORT, STROBE and PRISMA",
        url: "https://www.equator-network.org",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Research Methods: An Overview",
    description:
      "'How many?' and 'why?' are sister questions needing different tools — one counts, one listens. Most bad projects come from marrying a good question to the wrong method.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Distinguish quantitative, qualitative and mixed methods research.",
      "Explain the logic and sampling differences between the families.",
      "Apply the matching of question to method in a district study.",
    ],
    tags: ["research methods", "qualitative", "quantitative", "sampling", "mixed methods"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Before you choose a method, know what kind of knowledge you are hunting. 'How many women deliver at home?' and 'Why do women deliver at home?' are sister questions needing different tools — one counts, one listens. Most bad student projects are born from marrying a good question to the wrong method.\n\nThis lesson gives you the map: the quantitative, qualitative and mixed families, when each shines, and how sampling differs between counting and understanding.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Quantitative** research measures: numbers, categories, hypotheses; it asks how many, how much, does X change Y — and its strength is generalisation from a sample to a population. Its logic is **deductive**: theory first, then test. **Qualitative** research explores meaning: interviews, focus group discussions, observation; it asks why, how, what is it like — and its strength is depth. Its logic is **inductive**: themes rise from the data. Within the qualitative family there are traditions: **phenomenology** — the lived experience, say of a woman who survived eclampsia; **grounded theory** — the process, say of how families decide to seek care; **ethnography** — the culture, say of birth beliefs in a fishing community. **Mixed methods** runs both deliberately, because numbers without reasons are blind and reasons without numbers are lonely.\n\nSampling splits along the same line. **Probability sampling** — simple random, systematic, stratified, cluster — selects by chance, represents the population and permits statistical inference. **Non-probability sampling** — convenience, quota, **purposive** (choosing information-rich participants deliberately) and **snowball** (participants recruit the hidden next one) — suits exploration, not enumeration. Rigour has two names: validity and reliability in quantitative work; trustworthiness — credibility, transferability, dependability, confirmability — in qualitative.",
      },
      {
        type: "clinical_pearl",
        body: "Ask the question first, fall in love with it, and let it choose its method. The method is the servant of the question — never the other way round.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A district director asks two things: what proportion of births happen at home, and why. A final-year student proposes one instrument — a survey with a questionnaire ending in the open question 'Why?' — planning to report the most common answers.\n\nWhat is lost, and what design fits better?\n\nAnswer: The 'why' needs depth — fear of cost, past humiliation, in-law influence — that one open survey item cannot reach, and the proportion needs representative sampling that a handful of answers cannot give. A mixed methods design answers both: a cross-sectional survey for the proportion, then focus group discussions and interviews to explain it. Two questions, two tools, one study.",
      },
      {
        type: "memory_trick",
        body: "Numbers count, stories explain, mixed methods do both. Sampling doors: Random represents, Purposive understands, Snowball finds the hidden, Convenience merely takes what comes.",
      },
      {
        type: "summary",
        body: "- Quantitative research measures and generalises (deductive); qualitative research explores meaning and depth (inductive).\n- Qualitative traditions: phenomenology (lived experience), grounded theory (process), ethnography (culture).\n- Mixed methods combines both deliberately, for countable facts and their reasons.\n- Probability sampling represents populations; non-probability sampling explores and finds hidden groups.\n- Rigour is called validity and reliability in quantitative work, trustworthiness in qualitative.",
      },
    ],
    questions: [
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these questions is fundamentally qualitative?",
        options: [
          "What proportion of women deliver at the facility?",
          "Does IPTp reduce low birth weight?",
          "Why do women delay seeking care in labour?",
          "What is the mean birth weight in the district?",
        ],
        correctIndex: 2,
        explanation:
          "'Why' asks for meanings, reasons and experiences — the territory of interviews and focus groups. Proportions, effects and means are all counting questions needing measurement and representative samples.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why use stratified random sampling in a district-wide survey?",
        options: [
          "To save money on transport",
          "To avoid needing a sampling frame",
          "To make the questionnaire shorter",
          "To guarantee that key subgroups, such as rural and urban women, are represented in their true proportions",
        ],
        correctIndex: 3,
        explanation:
          "Stratification divides the population into subgroups and samples each proportionately, so no key stratum is missed by chance. It still needs a sampling frame, and it changes nothing about cost or questionnaire length.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In qualitative research, what corresponds to validity and reliability in quantitative research?",
        options: [
          "The p-value of the themes",
          "Sample size and power",
          "The response rate",
          "Trustworthiness — credibility, transferability, dependability and confirmability",
        ],
        correctIndex: 3,
        explanation:
          "Qualitative rigour is judged by trustworthiness: credibility (truth of findings), transferability (applicability elsewhere), dependability (consistency of process) and confirmability (grounding in data rather than bias). Themes have no p-values, and power belongs to counting.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Methods",
        front: "Contrast quantitative and qualitative research in one line each.",
        back: "Quantitative measures and generalises — how many, how much, does X cause Y. Qualitative explores meaning and depth — why, how, what is it like.",
      },
      {
        topic: "Research Methods",
        front: "What is snowball sampling and when is it used?",
        back: "Each participant recruits the next — used to reach hidden populations, such as women who birth unattended, who no register lists.",
      },
      {
        topic: "Research Methods",
        front: "Name the four components of qualitative trustworthiness.",
        back: "Credibility, transferability, dependability, confirmability — the qualitative answer to validity and reliability.",
      },
    ],
    sources: [
      {
        organization: "SAGE Publications",
        title: "Creswell JW, Creswell JD. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches",
        year: "2018 (5th edition)",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "African Journals Online (AJOL)",
        title: "African-Published Scholarly Research",
        url: "https://www.ajol.info",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Study Design: Choosing the Right Approach",
    description:
      "RCTs, cohorts, case-control and surveys — each design is a time machine with its own powers and blind spots. Learn what each can and cannot prove.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the major study designs and their strengths.",
      "Explain why randomisation beats confounding and where ethics forbids it.",
      "Apply design choice to a community maternity question.",
    ],
    tags: ["study design", "rct", "cohort", "case-control", "cross-sectional"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every study design is a time machine: some roll dice and roll forward, some start at the end and look backwards, some freeze the frame. Choosing the right one decides what your study can claim — and choosing badly decides what it cannot, no matter how hard you work.\n\nThis lesson walks through the designs a nursing researcher actually uses, their powers and blind spots, and the ethics that sometimes forbids the strongest one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **randomised controlled trial** allocates participants by chance to intervention or control — the only design that balances the unknowns, which is why it rules the hierarchy for questions of cause. It needs genuine uncertainty (equipoise), resources and ethics: you cannot randomise a harmful exposure, and in pregnancy you rarely randomise away known effective care.\n\nThe **cohort** study follows exposed and unexposed groups forward and measures incidence — the design for 'does cooking smoke associate with low birth weight?'; it is slow and loses people to follow-up. The **case-control** study starts at the outcome — cases with the disease, controls without — and looks back at exposure; it is fast and ideal for rare outcomes like maternal near-miss, but hostage to recall bias and to controls that do not represent the population that produced the cases. The **cross-sectional survey** takes a snapshot and measures **prevalence**, cheaply and quickly — but a snapshot cannot separate cause from effect. Case series only generate hypotheses. Above them all sit systematic reviews and meta-analyses, pooling the evidence. When you read any study, ask first which time machine it boarded.",
      },
      {
        type: "clinical_pearl",
        body: "Randomisation is the only design that balances the variables you never thought of. Everything else leaves a door open for confounding — which is why a small RCT can be decisive and a huge survey can only suggest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your district asks: does exposure to cooking-fire smoke relate to low birth weight? A colleague proposes an RCT — assign half the pregnant women to clean cookstoves. The ethics committee instead approves a cohort: recruit pregnant women, classify their household smoke exposure, follow them to birth, compare birth weights as relative risks.\n\nWhy not randomise, and what does the cohort cost?\n\nAnswer: You cannot ethically assign women to keep breathing harmful smoke, and withholding cleaner stoves from a control group is likewise difficult where they could simply be provided. The cohort observes exposure as it naturally occurs and follows forward — but it is slower, vulnerable to loss to follow-up, and cannot balance unknown confounders the way randomisation would, so adjustment is essential.",
      },
      {
        type: "memory_trick",
        body: "Designs by time travel: RCT rolls dice forward; cohort follows the exposed forward; case-control starts at the end and looks back; cross-sectional freezes the frame. Hierarchy top to bottom: reviews, RCTs, cohorts, case-control, cross-sectional, case reports.",
      },
      {
        type: "summary",
        body: "- RCT: random allocation balances known and unknown confounders — gold standard for causation, constrained by ethics and resources.\n- Cohort: follows exposure forward, measures incidence and relative risk; slow, loss to follow-up.\n- Case-control: starts with outcome and looks back; fast, suited to rare outcomes; recall and selection bias threaten it.\n- Cross-sectional: a snapshot that measures prevalence and association, never causation.\n- Systematic reviews and meta-analyses pool evidence and sit at the top of the hierarchy.",
      },
    ],
    questions: [
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which feature defines a randomised controlled trial?",
        options: [
          "Participants are interviewed in depth about their experiences",
          "Participants are allocated to groups by chance",
          "Participants are chosen because they already have the outcome",
          "Participants are measured once at a single point in time",
        ],
        correctIndex: 1,
        explanation:
          "Random allocation — chance decides the group — is the defining feature of the RCT, balancing both known and unknown confounders between arms. The other options describe qualitative, case-control and cross-sectional designs.",
        courseSlug: "research-methods",
      },
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You want to study risk factors for a rare outcome — maternal near-miss in your region. Which design is most practical?",
        options: [
          "Randomised controlled trial",
          "Prospective cohort",
          "Case-control study",
          "Cross-sectional survey",
        ],
        correctIndex: 2,
        explanation:
          "Rare outcomes make cohorts enormous and slow — you would follow thousands to catch a handful of cases. Case-control starts with the cases already identified and compares their exposures with controls, delivering the answer quickly. A trial cannot be done for past exposures, and a snapshot cannot collect rare events efficiently.",
        courseSlug: "research-methods",
      },
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What can a cross-sectional survey measure, and what can it never establish?",
        options: [
          "It measures prevalence and can establish causation",
          "It measures incidence and can establish causation",
          "It measures prevalence but cannot establish causation or time order",
          "It measures neither prevalence nor association",
        ],
        correctIndex: 2,
        explanation:
          "A snapshot counts who has the condition now — prevalence — and can show associations. But exposure and outcome are measured together, so the study cannot show which came first; causation needs the passage of time: cohort or trial.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Study Design",
        front: "Why does an RCT defeat confounding?",
        back: "Random allocation distributes both known and unknown confounders evenly between groups by chance — the only design that balances what you never measured.",
      },
      {
        topic: "Study Design",
        front: "Case-control studies: what do they start with, and what are their two classic biases?",
        back: "They start with the outcome (cases) and look backward at exposure. Watch for recall bias in reporting past exposure and selection bias in choosing controls.",
      },
      {
        topic: "Study Design",
        front: "Prevalence or incidence — which design delivers which?",
        back: "Cross-sectional surveys measure prevalence (cases at one moment). Cohort studies follow people forward and measure incidence (new cases over time).",
      },
    ],
    sources: [
      {
        organization: "Cochrane Training",
        title: "Cochrane Handbook for Systematic Reviews of Interventions (version 6)",
        year: "2019",
        url: "https://training.cochrane.org/handbook",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "EQUATOR Network",
        title: "STROBE Statement: Reporting of Observational Studies",
        url: "https://www.equator-network.org",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Collecting Data Well",
    description:
      "A study is only as good as its data — and data go wrong quietly. Good tools, honest sampling, trained hands and locked doors: the housekeeping of trustworthy research.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe data collection tools and the qualities of validity and reliability.",
      "Explain question-writing traps and the role of piloting and translation.",
      "Apply field discipline for consent, anonymisation and data security.",
    ],
    tags: ["data collection", "questionnaires", "sampling", "pilot", "data security"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A study is only as good as its data, and data go wrong quietly — a leading question here, an un-translated word there, a sheet lost in the rain — until the whole edifice answers a question nobody asked. Collecting data well is mostly housekeeping: good tools, honest sampling, trained hands and locked doors.\n\nThis lesson covers the tools, the classic question-writing traps, and the field discipline that keeps your data clean and your participants safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Choose the tool for the data: a **structured questionnaire** for numbers and categories; a **semi-structured interview guide** for depth one-to-one; a **focus group discussion guide** for shared norms and debate; an **observation checklist** for what people do rather than what they say; and a **record extraction form** for what already exists. Two qualities govern them all: **validity** — the tool measures what it claims — and **reliability** — it measures the same way every time. The cheapest way to buy both is a **pilot**: test on five or ten similar respondents, watch the frowns, fix the items.\n\nQuestion traps are standard exam fare: **leading** ('You do attend ANC, don't you?'), **double-barrelled** ('Do you eat well and take your iron?'), **jargon**, and questions asked where anyone can hear. For local languages, translate and independently back-translate to catch drift. Sample size needs a power calculation — too small misses a true effect; too large wastes scarce cedis; a free calculator with your supervisor's help does the arithmetic. In the field: train assistants with role-play, supervise with spot-checks, seek consent before every interview, anonymise with study codes kept separate from names, lock paper in a cabinet, password-protect files — and report missing data honestly, never inventing an entry.",
      },
      {
        type: "clinical_pearl",
        body: "Pilot the tool on five mothers before the study day. Five real pilots will find more faults than fifty proof-reads, because respondents read with their own vocabulary, not yours.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student pre-tests a translated questionnaire. Item 4 reads 'Do you practise good hygiene and deliver in the facility?' Two mothers answer yes to hygiene and no to facility but must tick one box; a third asks what 'hygiene' means.\n\nWhat are the faults, and how are they fixed?\n\nAnswer: The item is double-barrelled — two questions in one — and its value-laden wording ('good') invites the socially desirable yes. Split it into separate neutral items ('Where did your last birth take place?'), translate and back-translate, then re-pilot until nobody stumbles. A pre-test exists precisely to catch this before three hundred women answer a broken question.",
      },
      {
        type: "memory_trick",
        body: "Bad questions wear three hats — Leading, Jargon, Double-barrelled: the L-J-D gang. A good tool is V-R-P: Valid, Reliable, Piloted. Data safety in three moves: Code the names, lock the room, separate the key.",
      },
      {
        type: "summary",
        body: "- Match the tool to the data: questionnaire, interview guide, FGD guide, observation checklist, extraction form.\n- Validity and reliability are bought cheaply by piloting on real respondents.\n- Avoid leading, double-barrelled and jargon questions; translate and back-translate for local languages.\n- Sample size is a power calculation, not a guess — too small misses, too big wastes.\n- Field discipline: consent, anonymisation with separate master list, locked and password-protected data, honest missing data.",
      },
    ],
    questions: [
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which item is double-barrelled?",
        options: [
          "How many antenatal visits did you make?",
          "Do you eat a balanced diet and take your iron tablets daily?",
          "Where did your most recent birth take place?",
          "At what age did you first become pregnant?",
        ],
        correctIndex: 1,
        explanation:
          "The item asks two questions at once — diet and tablets — so a mother who does one but not the other has no truthful single answer. The other items each measure exactly one thing.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the main purpose of piloting a data collection tool?",
        options: [
          "To show the ethics committee a finished instrument",
          "To increase the sample size",
          "To train statisticians in data entry",
          "To detect confusing, leading or double-barrelled items and test validity and timing before the real study",
        ],
        correctIndex: 3,
        explanation:
          "A pilot is a dress rehearsal with real respondents of the target population: it exposes items that confuse or mislead, checks the flow and timing, and measures whether the tool behaves as intended. The ethics committee sees the tool before approval regardless; a pilot changes nothing about sample size or entry.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How should participants' identities be protected in a student survey?",
        options: [
          "Replace names with study codes and keep the master list separate, locked and accessible only to the researcher",
          "Write initials instead of full names on all forms",
          "Keep all names on one shared sheet for easy follow-up",
          "Photograph participants for the records",
        ],
        correctIndex: 0,
        explanation:
          "Anonymisation means the data carry codes, not identities, and the key linking codes to names is stored separately, locked, with access limited. Initials identify people almost as well as names; shared sheets and photographs do the opposite of protecting anyone.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Data Collection",
        front: "What are the three classic question-writing traps?",
        back: "Leading questions that push an answer; double-barrelled questions that ask two things at once; and jargon the respondent does not use.",
      },
      {
        topic: "Data Collection",
        front: "Define validity and reliability of a data tool.",
        back: "Validity — the tool measures what it claims to measure. Reliability — it measures the same way on repeated use, with different interviewers or occasions.",
      },
      {
        topic: "Data Collection",
        front: "How is participant anonymity protected in field practice?",
        back: "Study codes replace names on all forms; the code-name master list is stored separately, locked; electronic files are password-protected; access is limited to the research team.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Putting Women First: Ethical and Safety Recommendations for Research on Domestic Violence against Women",
        year: "2001",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Data Analysis Basics",
    description:
      "Numbers confess — but only under skilful interrogation. A small toolkit for describing, testing and presenting honestly, and for knowing when a number is being made to lie.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe data types and their descriptive statistics and charts.",
      "Explain the logic of chi-square and t-tests, p-values and confidence intervals.",
      "Apply result-reading to ward evidence without over-claiming causation.",
    ],
    tags: ["statistics", "analysis", "p-value", "chi-square", "correlation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Numbers confess, but only under skilful interrogation. Most of what a student nurse needs is not advanced mathematics — it is a small toolkit for describing, testing and presenting honestly, plus the wisdom to know when a number is being made to lie.\n\nThis lesson walks you from describing your data, through choosing the right simple test, to reading p-values, intervals and correlations like a clinician rather than a gambler.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Describe first, always.** Categorical data — place of birth, yes-or-no answers — become frequencies and percentages, shown as tables or bar charts. Numerical data — birth weights, waiting times — get a centre and a spread: **mean and standard deviation** when the distribution is symmetrical; **median and interquartile range** when it is skewed — and waiting times, costs and many biological values are skewed, so the median is the honest centre.\n\nWhen you compare groups you move from description to **inference**: could this difference be chance? The null hypothesis says 'no real difference'; the **p-value** is the probability of a difference at least this big if that null were true — convention draws the line at 0.05. The **95% confidence interval** is more honest: it shows the range of plausible values for the true effect. Two tests cover most student projects: **chi-square** for two categorical variables — ANC visits against place of birth; the **t-test** for two means — mean birth weight by number of IPTp doses. **Correlation** (r, from -1 to +1) measures how two numerical measures travel together — and never proves that one causes the other. Free software — Epi Info from CDC, or Excel — computes all of it; your job is to choose the test the data type demands and to report exact numbers, not adjectives.",
      },
      {
        type: "clinical_pearl",
        body: "For skewed data — waiting times, costs — the median stands firm while the mean is dragged along by the giants. And correlation never testifies to causation: two crocodiles rising with the tide did not cause the tide.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In your audit, women with four or more ANC visits delivered in a facility 62% of the time versus 41% for those with fewer; chi-square p = 0.03. A colleague announces that 'ANC causes facility delivery' and proposes mandatory ANC.\n\nWhat does p = 0.03 actually license you to say?\n\nAnswer: That if there were truly no association, a difference this large would arise by chance about three times in a hundred — so chance alone is an unlikely explanation. It does not prove causation: this is observational data, and confounding — distance, wealth, education — could produce or inflate the link. Report the association, name the possible confounders, and keep the word 'cause' out of your conclusion.",
      },
      {
        type: "memory_trick",
        body: "Choose the test by the data: Names go to chi-square, Means go to t, Medians to Mann-Whitney. Read the interval, not just the stars — and correlation is company, never causation.",
      },
      {
        type: "summary",
        body: "- Describe first: frequencies and percentages for categorical data; mean and SD, or median and IQR when skewed.\n- Match the chart to the data type: bars for categories, histogram for spread, line for time.\n- p-value: how easily chance could fake this result; 95% CI: the plausible range of the true effect.\n- Chi-square compares two categorical variables; t-test compares two means; Mann-Whitney for skewed or ordinal data.\n- Correlation measures company, never causation — and report exact numbers, not adjectives.",
      },
    ],
    questions: [
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Waiting times in your clinic are highly skewed by a few very long waits. Which summary is most honest?",
        options: [
          "The mean, because it uses all the data",
          "The median, because it is not dragged by extreme values",
          "The mode, because it is the most common value",
          "The range, because it is the simplest",
        ],
        correctIndex: 1,
        explanation:
          "A handful of marathon waits can pull the mean far above the experience of typical women. The median — the middle value — barely moves, so it reports the honest centre of skewed data, with the interquartile range for spread.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You compare place of birth (facility or home — a categorical variable) against having at least four ANC visits (yes or no). Which test fits?",
        options: [
          "Chi-square test",
          "Paired t-test",
          "Pearson correlation",
          "Analysis of variance",
        ],
        correctIndex: 0,
        explanation:
          "Two categorical variables compared for association is exactly the chi-square job — it asks whether the observed counts depart from what independence would predict. t-tests need means, correlation needs two numerical measures, ANOVA compares several means.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A study finds r = 0.7 between a mother's age and her number of living children. What can you conclude?",
        options: [
          "Age causes higher parity",
          "Parity causes ageing",
          "The correlation is too weak to report",
          "Age and number of living children rise together strongly — but causation is not established",
        ],
        correctIndex: 3,
        explanation:
          "r = 0.7 is a strong positive linear association — the two measures travel together. Correlation is silent about direction and mechanism: both variables are driven by shared histories, and only a designed study could untangle cause. The association is far from too weak to report.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Data Analysis",
        front: "When do you report a median instead of a mean?",
        back: "When the data are skewed — waiting times, costs, some biological measures. The median resists extreme values that drag the mean.",
      },
      {
        topic: "Data Analysis",
        front: "Which test compares two categorical variables, and which compares two means?",
        back: "Chi-square compares two categorical variables (counts across groups); the t-test compares the means of two groups — with Mann-Whitney for skewed or ordinal data.",
      },
      {
        topic: "Data Analysis",
        front: "What does a p-value of 0.03 mean — and what does it NOT mean?",
        back: "It means a result this extreme would occur by chance about 3% of the time if no true effect existed. It does not mean the effect is large, important, or causal.",
      },
    ],
    sources: [
      {
        organization: "US Centers for Disease Control and Prevention",
        title: "Epi Info: Free Statistics Software for Public Health",
        url: "https://www.cdc.gov/epiinfo",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Introductory Statistics 2e",
        url: "https://openstax.org/books/introductory-statistics-2e",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Integrity and Planning",
    lessonTitle: "Research Ethics: Protecting Participants",
    description:
      "Research has its own dark history — which is why it has the strictest ethics in all of health. Every rule was paid for by someone who was harmed.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the landmark codes and their lessons.",
      "Explain the informed consent process and the rights of research participants.",
      "Apply the Ghanaian approval pathway and protections for vulnerable groups.",
    ],
    tags: ["research ethics", "consent", "irb", "helsinki", "vulnerable groups"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Research has its own dark history — which is why it has the strictest ethics in all of health. Every rule you will meet, from thumbprint witnesses to ethics committees, was paid for by someone who was harmed. As a final-year student planning your project, you now stand on the protective side of that history.\n\nThis lesson covers the codes, the consent process, the treatment of vulnerable groups, and the Ghanaian approvals you must secure before the first question is asked.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The landmarks: the **Nuremberg Code** (1947) — born from the trials of war crimes — made voluntary consent essential; the **Declaration of Helsinki** (World Medical Association, 1964, revised many times) placed the participant's welfare above science and society; the **Belmont Report** framed three principles — respect for persons, beneficence and justice.\n\nResearch **informed consent** is stricter than clinical consent: a written participant information sheet in her own language; understanding verified, not presumed; genuine voluntariness — no care, favour or payment conditional on taking part; and the explicit right to refuse or **withdraw at any time, without penalty**. A participant who cannot read signs with a **thumbprint before an impartial witness** — and must still be able to tell you, in her own words, what she agreed to. Approval comes before data, not after: in Ghana, protocols go to a research ethics committee — the Ghana Health Service Ethics Review Committee, Noguchi Memorial Institute or a university IRB — plus administrative permission from the district and facility. **Pregnant women and adolescents** are vulnerable groups: studied precisely because they matter, but with stricter risk-benefit scrutiny; for children, a parent consents while the child gives age-appropriate assent. Protect data with codes and locked storage, return results to the community, and credit honestly — fabrication, falsification and plagiarism are misconduct, not shortcuts.",
      },
      {
        type: "clinical_pearl",
        body: "The thumbprint has a witness and the sheet has her language, but the test is the same: tomorrow, she should still be able to tell you what she agreed to — and that she may say no at any time.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student wants to interview women who survived eclampsia about their experiences. A helpful ward sister offers to 'pick the cooperative ones and have them sign while they are still on the ward — it saves time'.\n\nWhat is wrong with this offer?\n\nAnswer: Three things. Selection by a gatekeeper skews the sample to 'cooperative' voices; women fresh from critical illness, on a ward where staff hold power over them, cannot consent freely — voluntariness is compromised; and there is no information sheet, understanding check or stated right to withdraw. Recruit after discharge, in private, with committee-approved information and consent — and let the sister advertise the study, never select its participants.",
      },
      {
        type: "memory_trick",
        body: "Three codes, three lessons: Nuremberg taught consent, Helsinki taught that the participant comes before the finding, Belmont taught justice. And the golden sequence: Review first, Recruit freely, Refusal free of penalty.",
      },
      {
        type: "summary",
        body: "- Nuremberg (1947): voluntary consent essential. Helsinki (1964): participant welfare above science. Belmont: respect, beneficence, justice.\n- Research consent: information sheet in her language, verified understanding, voluntariness, withdrawal at any time without penalty.\n- Non-literate participants: thumbprint before an impartial witness, understanding still verified.\n- Ethics committee approval and facility permission come before any data collection.\n- Vulnerable groups — pregnant women, adolescents, children — need stricter scrutiny; data are coded and locked; fabrication and plagiarism are misconduct.",
      },
    ],
    questions: [
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A research participant who cannot read is invited to join a study. What is required for her consent?",
        options: [
          "A family member may sign on her behalf without her involvement",
          "She is excluded from all research",
          "Only a verbal agreement is needed",
          "The information is explained in her own language, and she consents by thumbprint before an impartial witness",
        ],
        correctIndex: 3,
        explanation:
          "Illiteracy does not remove the right to take part or to choose. The process is explained in her language, an impartial witness observes, and she thumbprints. Family signatures and bare verbal agreements bypass her own consent.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman agrees to join your study today. Next week she changes her mind. What is her right?",
        options: [
          "She must complete the interviews she started",
          "She must pay back the transport refund she received",
          "She may withdraw at any time without penalty, and her care is unaffected",
          "She may withdraw only with her husband's permission",
        ],
        correctIndex: 2,
        explanation:
          "Withdrawal at any time, without penalty and without any effect on her care, is a bedrock right of research participation. Reimbursement was never payment for data, and nobody else authorises her decisions about herself.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When must ethical approval for your student project be obtained?",
        options: [
          "After data collection, if the results look publishable",
          "Only if the study includes blood sampling",
          "Only when the supervisor is unavailable",
          "Before any participant is recruited or data collected",
        ],
        correctIndex: 3,
        explanation:
          "Ethics review exists to protect participants — so it must precede contact with any participant. Retroactive approval, and thresholds based on invasiveness or supervisor availability, all leave people unprotected while the harm would already have been done.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Ethics",
        front: "How is valid consent obtained from a participant who cannot read?",
        back: "Explain the study in her own language, confirm understanding, and take her thumbprint before an impartial witness who signs the form.",
      },
      {
        topic: "Research Ethics",
        front: "What are a research participant's withdrawal rights?",
        back: "She may refuse to join, or withdraw at any time, for any reason, without penalty — with no effect on her care or entitlements.",
      },
      {
        topic: "Research Ethics",
        front: "Name Ghana's routes of ethics approval for health research.",
        back: "A research ethics committee — Ghana Health Service Ethics Review Committee, Noguchi Memorial Institute or a university IRB — plus administrative permission from the district and facility where data will be collected.",
      },
    ],
    sources: [
      {
        organization: "World Medical Association",
        title: "Declaration of Helsinki: Ethical Principles for Medical Research Involving Human Subjects",
        url: "https://www.wma.net/policies-post/wma-declaration-of-helsinki/",
      },
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Ghana Health Service",
        title: "Ghana Health Service Ethics Review Committee: Protocol Submission Requirements",
        note: "Verify current requirements with GHS-ERC.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Integrity and Planning",
    lessonTitle: "From Idea to Proposal",
    description:
      "Every study is born twice — once as a question, and again as a proposal. The proposal is the contract behind your project; learn to write one that passes the first time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of a research proposal.",
      "Explain SMART objectives and the objectives-methods mirror rule.",
      "Apply feasibility checks of timeline, budget and scope to a student project.",
    ],
    tags: ["proposal", "planning", "objectives", "gantt", "budget"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every study is born twice: once as a question in your head, and again as a proposal on paper. The proposal is the contract between you and everyone whose trust you need — supervisors, the ethics committee, the district, and your future self on the day the data look messy. A weak question can still become a strong study; a weak proposal almost never does.\n\nThis lesson assembles the proposal, part by part, and teaches the two disciplines examiners look for: objectives that are SMART, and methods that mirror them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A proposal answers **five questions in order**. **Why** — background and problem statement: what is known, what gap your study fills, why it matters here; local numbers persuade examiners best. **What** — one general objective plus specific objectives that are **SMART**: specific, measurable, achievable, relevant, time-bound. **How** — methodology: design, setting, population with inclusion and exclusion criteria, sampling method and size (the calculation shown, not asserted), data collection tools, procedure, an analysis plan matched item by item to the objectives, and ethical considerations with the consent process. **With whose permission** — approvals: supervisor, ethics committee, district and facility authorities. **With what** — a **work plan**, best drawn as a Gantt chart mapping activities against months, and a realistic budget: transport, printing, assistant allowances, airtime, contingency.\n\nThe discipline that separates passed proposals from returned ones: **objectives and methods must mirror each other** — if an objective has no method to answer it, cut the objective; if a method serves no objective, cut the method. Keep the study small enough to finish: a modest cross-sectional study completed in three months beats an ambitious cohort abandoned in month five. Write the title last, once the study has found its shape — variables, population, place and design in one honest line.",
      },
      {
        type: "clinical_pearl",
        body: "Examiners read the objectives first and the methods second. If those two sections do not mirror each other line by line, no beautiful background will save the proposal. A small study finished beats a grand study abandoned.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student submits a proposal titled 'Improving maternal health in Ghana' with six sweeping objectives and a twelve-month budget covering three regions. Her supervisor returns it the next day.\n\nWhat does the rewrite look like?\n\nAnswer: Narrow and honest: 'Uptake of three or more doses of IPTp and its barriers among antenatal clients in Yendi district: a cross-sectional study.' One general objective, three specific SMART objectives — estimate uptake, identify barriers, examine the association with ANC factors — a cross-sectional design with a calculated sample, a three-month Gantt chart, a modest budget, ethics approval built into the timeline. Methods mirror objectives line for line, and the study can actually be finished.",
      },
      {
        type: "memory_trick",
        body: "A proposal answers five questions: Why (background), What (objectives), How (methods), Whose permission (ethics and authorities), With what (Gantt and budget). And the mirror rule: objectives and methods, one for one, line for line.",
      },
      {
        type: "summary",
        body: "- Structure: title, background and problem statement, literature review, objectives, methodology, ethics, work plan, budget, references, appendices.\n- Write one general objective and specific objectives that are SMART.\n- Methods must mirror objectives: design, population, sampling, tools, analysis — one for one.\n- Approvals — supervisor, ethics committee, district, facility — are part of the timeline, not an afterthought.\n- Gantt chart the months, budget the cedis, and keep the scope small enough to finish.",
      },
    ],
    questions: [
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the A in SMART objectives stand for?",
        options: [
          "Ambitious",
          "Academic",
          "Approved",
          "Achievable",
        ],
        correctIndex: 3,
        explanation:
          "SMART objectives are specific, measurable, achievable, relevant and time-bound. Achievable is the discipline students most often skip — an objective you cannot deliver with your sample, time and budget is a wish, not an objective.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which title is best for a student project?",
        options: [
          "Improving maternal health in Ghana",
          "A study of pregnant women",
          "Uptake of IPTp and its barriers among antenatal clients in Yendi district: a cross-sectional study",
          "Why mothers die: a global analysis",
        ],
        correctIndex: 2,
        explanation:
          "A good title carries the variables, the population, the place and the design in one line — the reader knows the study before page two. The alternatives are vague about everything: no population, no place, no design, and scopes no student could deliver.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your specific objective is to 'estimate the proportion of facility births in the district'. Which methods element must mirror it?",
        options: [
          "Twenty in-depth interviews with mothers",
          "A cross-sectional survey with a representative sample and a defined denominator for proportions",
          "A laboratory analysis of cord blood",
          "A systematic review of global literature",
        ],
        correctIndex: 1,
        explanation:
          "Estimating a proportion demands a representative cross-sectional sample and an explicit denominator — that is the method that mirrors the objective. Interviews explore meanings; they cannot estimate a proportion for a district.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Proposal",
        front: "What five questions must a proposal answer in order?",
        back: "Why (background and gap), What (objectives), How (methodology), Whose permission (ethics and authorities), With what (work plan and budget).",
      },
      {
        topic: "Research Proposal",
        front: "Spell out SMART.",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — the test every specific objective must pass.",
      },
      {
        topic: "Research Proposal",
        front: "What is the objectives-methods mirror rule?",
        back: "Every objective needs a method that answers it, and every method must serve an objective — one for one. Orphans on either side get cut.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "SAGE Publications",
        title: "Creswell JW, Creswell JD. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches",
        year: "2018 (5th edition)",
      },
      {
        organization: "Ghana Health Service",
        title: "Ghana Health Service Ethics Review Committee: Protocol Submission Requirements",
        note: "Verify current requirements with GHS-ERC.",
      },
    ],
  },
];
