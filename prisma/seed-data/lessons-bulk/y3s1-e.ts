// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch E (Clinical Nursing Skills III
// + Mental Health Nursing I)
// 14 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ═══════════════════════════════════════════════════════════
  // CLINICAL NURSING SKILLS III — 7 lessons
  // ("The Head-to-Toe Assessment" is authored as a flagship
  //  lesson elsewhere and is intentionally not repeated here.)
  // ═══════════════════════════════════════════════════════════

  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "Assessment Skills That Matter",
    lessonTitle: "The Focused Assessment: When Time Is Short",
    description:
      "Ten targeted minutes on the system that worries you — choosing the questions, hands and numbers that matter when time is not on your side.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe when a focused assessment replaces a full head-to-toe examination.",
      "Apply a survey-story-system structure to common ward presentations.",
      "Interpret focused findings against the patient's baseline before acting or escalating.",
    ],
    tags: ["focused assessment", "priorities", "abcde"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At 2 a.m., with eight patients and one complaint, you cannot run a full head-to-toe on everyone — and you should not. The focused assessment is the senior nurse's answer: a rapid, targeted examination of the system that is worrying you, wrapped around the question that matters most — **what changed?**\n\nDone well, a focused assessment finds the hypoxia hiding behind 'he is just confused'. Done carelessly, it becomes a stethoscope on the chest and nothing else, and the quiet deterioration underneath stays invisible. This lesson gives you the structure that keeps ten minutes honest.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A focused assessment runs in three layers. **Survey first** — a rapid ABCDE sweep (**A**irway, **B**reathing, **C**irculation, **D**isability — level of consciousness, **E**xposure) to confirm nothing is about to collapse while you examine. **Story second** — the three questions that steer everything: What changed? When did it start? How bad is it now? Ask the patient, the family, the notes — and compare with **baseline**, because a blood pressure of 118/76 means nothing until you know this man usually runs 160/95. **System third** — the targeted examination of the relevant system: for breathlessness, respiratory rate, oxygen saturation, chest expansion, breath sounds, position, colour; for acute confusion, glucose, temperature, urine output, neurological check, and the drug chart; for chest pain, vitals, pain character, radiation, and the cardiac and respiratory examination. Fresh observations beat stale ones: take your own, don't inherit the 6 p.m. set.\n\nThen close the loop: decide — monitor, act, or escalate — and write what you found, in numbers, with the time.",
      },
      {
        type: "table",
        title: "Focused assessments for common night calls",
        body: "| Presentation | Minimum focused set |\n| --- | --- |\n| New confusion | Glucose, temperature, oxygen saturation, neuro check, urine output, drug chart review |\n| Breathlessness | Respiratory rate, saturation, position, breath sounds, colour, pulse, baseline comparison |\n| Chest pain | Vitals, pain character and radiation, cardiac and chest auscultation, history of onset time |\n| Fever | Temperature, pulse, respiratory rate, saturation, source hunt (wound, urine, IV site, chest) |\n| Fall | Neuro check, limb and hip examination, skin, glucose, vitals, what preceded the fall |\n| Reduced urine output | Fluid balance chart review, bladder assessment, vital signs, weight trend, drug chart |",
      },
      {
        type: "clinical_pearl",
        body: "A focused assessment answers one question well — what changed, and how badly? The full examination maps the whole house; the focused one goes straight to the room where the fire is. But even the focused one always starts at the front door: airway, breathing, circulation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Post-operative night, day two after bowel surgery. The call bell rings: the man in bed 6 is 'not himself'. He is 71, mildly confused, pulling at his sheet. The evening observations four hours ago were normal. You run your focused set: airway clear, speaking in sentences; respiratory rate 26; saturation 88 percent on room air; pulse 108; temperature 37.9 degrees; glucose 6.4; chest sounds reveal crackles at the right base. He is not 'just confused' — he is hypoxic with a developing chest problem, four hours into it.\n\nWhat made this assessment work, and what happens next?\n\nAnswer: The three questions and fresh numbers: something changed (new confusion), when (this evening), how bad (respiratory rate 26, saturation 88). The confusion was the symptom, the chest was the cause — found by going to the right system, not by sedating the symptom. Next: sit him upright, give oxygen per protocol, escalate now with SBAR — this is early deterioration, not a night nuisance, and the trend belongs in the note, with times, before you leave the bedside.",
      },
      {
        type: "memory_trick",
        body: "Keep your focus with **F.O.C.U.S.**: **F**ind what changed and when; **O**bserve fresh vitals — your own, not inherited; **C**ompare with the patient's baseline; **U**se the system exam — go to the room where the fire is; **S**ay what you will do — monitor, act or escalate — and write the numbers with the time.",
      },
      {
        type: "summary",
        body: "- Use a focused assessment when time, urgency or a single complaint makes the full examination wrong.\n- Structure: ABCDE survey → what changed, when, how bad → targeted system examination.\n- Fresh observations always; compare with the patient's baseline — numbers mean nothing alone.\n- Common presentations each have a minimum focused set — learn them by heart.\n- Close every focused assessment with a decision (monitor, act, escalate) and documented numbers with times.",
      },
    ],
    questions: [
      {
        topic: "Focused Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are called at night for a patient who has 'become confused'. Which first step belongs to every focused assessment, before any system examination?",
        options: [
          "A rapid ABCDE survey to confirm nothing is about to collapse",
          "A full head-to-toe examination, from scalp to soles",
          "Documenting the confusion as dementia",
          "Calling the family to ask about baseline behaviour",
        ],
        correctIndex: 0,
        explanation:
          "The ABCDE sweep is the front door of every focused assessment: it confirms that airway, breathing, circulation and consciousness are not in immediate trouble while you work out the cause. The full head-to-toe is exactly what time does not allow; labels and phone calls come after the patient is assessed.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Focused Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must a focused assessment always compare findings with the patient's baseline?",
        options: [
          "Because hospital policy requires two sets of observations",
          "Because the meaning of a number depends on the person's usual state — 118/76 in a man who runs 160/95 is a fall, not a normal reading",
          "Because baselines are needed for research statistics",
          "Because you cannot chart without a previous value",
        ],
        correctIndex: 1,
        explanation:
          "A reading only becomes a finding in context. The same number can be normal for one patient and a warning sign for another — baseline is what turns data into clinical judgement, especially for blood pressure, urine output and behaviour.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Focused Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 71-year-old man, day two after bowel surgery, becomes mildly confused at 22:00. Which focused assessment set is most appropriate?",
        options: [
          "Assess confusion alone and request a sedative",
          "Glucose, temperature, oxygen saturation, respiratory rate, neuro check, urine output and a drug chart review",
          "Wait for the morning ward round and document the behaviour",
          "A full skin and joint examination for infection source only",
        ],
        correctIndex: 1,
        explanation:
          "New post-operative confusion is a symptom, not a diagnosis — its common drivers are hypoxia, infection, hypoglycaemia, retention and drugs. That minimum set finds each of them; sedation without assessment would sedate the alarm, not the fire.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Focused Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a focused assessment of new breathlessness, the most valuable observations are:",
        options: [
          "The ones taken by the previous shift, which are already charted",
          "Fresh observations taken by you now — respiratory rate, saturation, position, breath sounds — compared with baseline",
          "The patient's weight from admission day",
          "The relatives' description alone",
        ],
        correctIndex: 1,
        explanation:
          "Inherited numbers are history, not assessment. Deterioration moves faster than four-hourly charts, so the focused assessment always takes its own vitals — and interprets them against the patient's baseline to expose the trend.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Focused Assessment",
        front: "What is the F.O.C.U.S. mnemonic?",
        back: "Find what changed and when; Observe fresh vitals; Compare with baseline; Use the system exam — go to the room where the fire is; Say what you will do and chart the numbers with times.",
      },
      {
        topic: "Focused Assessment",
        front: "What are the three steering questions of any focused assessment?",
        back: "What changed? When did it start? How bad is it now? Asked of the patient, the family and the notes — then verified with fresh observations.",
      },
      {
        topic: "Focused Assessment",
        front: "Give the minimum focused set for new post-operative confusion.",
        back: "Glucose, temperature, oxygen saturation, respiratory rate, neuro check, urine output and drug chart review — the drivers of post-op confusion are hypoxia, infection, hypoglycaemia, retention and drugs.",
      },
      {
        topic: "Focused Assessment",
        front: "Why does the focused assessment still start with ABCDE?",
        back: "The targeted system exam assumes the patient is stable enough to be examined — ABCDE confirms the airway, breathing, circulation and consciousness are not already collapsing while you look for the cause.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        note: "Assessment chapters; verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "Assessment Skills That Matter",
    lessonTitle: "Recognising the Deteriorating Patient",
    description:
      "Early warning signs in breathing, behaviour and numbers — the sixth sense that is not magic but a trained eye on the chart and the patient.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the parameters of an early warning score and the track-and-trigger principle.",
      "Explain why respiratory rate and nurse's instinct are the most sensitive alarms of deterioration.",
      "Apply a structured response when a patient crosses a trigger threshold, including sepsis recognition.",
    ],
    tags: ["deterioration", "ews", "sepsis"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patients rarely collapse without warning — they whisper first. The respiratory rate creeps from 18 to 24. The chatty patient becomes 'just not himself'. The urine output thins. Hours before the crisis, the body publishes its distress in numbers and behaviour, and the only question is whether anyone is reading.\n\nThis lesson teaches you to read. Early warning scores give the numbers a voice; your own eyes and instinct give the rest. Together they form the trained sixth sense that senior nurses seem to have — and that you can build deliberately.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An **early warning score (EWS)** turns routine observations into an alarm. Each parameter — respiratory rate, oxygen saturation, temperature, pulse, systolic blood pressure, level of consciousness and (in many charts) urine output — scores points as it drifts from the safe range; the total crosses thresholds that trigger defined actions: increase observation frequency, inform the ward in-charge, call the doctor. This is **track and trigger**: the chart tracks, the score triggers, and the action is agreed in advance so nobody has to invent a response at midnight.\n\nTwo alarms deserve special respect. **Respiratory rate is the earliest and most neglected vital sign** — it climbs before blood pressure falls and before saturation drops, because the body compensates quietly until it cannot. A rate of 25 in a previously settled patient is a finding, not a charting habit. And **the nurse's concern is a trigger in its own right**: 'I am worried about this patient' outperforms several scoring systems in studies — the instinct has absorbed data the chart has not. Never silence it because the numbers look acceptable.\n\n**Sepsis is the deterioration you must catch earliest**: infection plus fever or hypothermia, fast pulse, fast breathing, and any new confusion — with low blood pressure arriving late and meaning the body is losing. When that picture appears, escalate as an emergency, not as a routine review: the hours between recognition and treatment decide survival.",
      },
      {
        type: "table",
        title: "A typical early warning approach (your hospital's chart governs)",
        body: "| Parameter | Comfort zone | Warning zone | Alarm zone |\n| --- | --- | --- |\n| Respiratory rate | 12–20 per minute | 21–24 | 25 or more, or below 8 |\n| Oxygen saturation | 96% or more | 94–95% | 93% or less |\n| Temperature | 36–38 degrees | 38.1–39 or 35–35.9 | 39.1 or more, or below 35 |\n| Pulse | 51–90 | 91–110, or 41–50 | 111 or more, or 40 or less |\n| Systolic BP | 111–219 | 101–110 | 100 or less |\n| Consciousness (ACVPU) | Alert | New confusion or drowsy | Responds to voice, pain, or unresponsive |\n| Urine output | Passing well | Below expected for 6–12 hours | Anuric or shock-picture |",
      },
      {
        type: "clinical_pearl",
        body: "Respiratory rate is the sentinel: the body defends its oxygen quietly, and the rate rises before anything else moves. A rate of 25 is not 'anxiety' or 'a charting habit' — it is a patient telling you, in the only language available, that compensation has begun.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night shift, surgical ward. The man in bed 9, day three after prostate surgery, has observations 'within limits' — pulse 102, temperature 37.8, blood pressure 128/76, saturation 95 percent. But you notice three things the chart does not score: his respiratory rate is 26 when you watch him unobserved; he answered your greeting with a sentence that made no sense; and he has passed no urine since the evening. You cannot name what is wrong — you only know he is wrong.\n\nWhat do you do with that instinct, and what is your working fear?\n\nAnswer: The instinct is a trigger — act on it, not around it. Re-score the full set including the respiratory rate you measured yourself; you now have tachypnoea, tachycardia, low-grade fever and new confusion in a man with a surgical site and a catheter — the sepsis picture, with hypotension not yet arrived (it comes late, and then it means the body is losing). Escalate now as an emergency with SBAR, quote your numbers and the trend, suggest the source hunt (wound, urine, chest, IV site), and stay with the patient. The morning team will find a cause; your job is to make sure there is a morning team finding a cause — in a patient still alive to be examined. 'Within limits' is an opinion; a rising trend with a worried nurse is a handover.",
      },
      {
        type: "memory_trick",
        body: "**Track, Trigger, Telephone.** The chart tracks the observations; the score (or your worry) triggers the agreed action; the telephone makes it someone else's problem too — while you stay at the bedside. Never re-check-and-wait a triggering patient alone: deterioration is a rumour until confirmed, and death is the confirmation nobody wants.",
      },
      {
        type: "summary",
        body: "- Patients whisper before they collapse — in respiratory rate, behaviour, urine output and trend.\n- Early warning scores formalise track and trigger: agreed parameters, agreed thresholds, agreed actions.\n- Respiratory rate rises first and is recorded most carelessly — measure it deliberately.\n- The nurse's instinct is a legitimate trigger: 'I am worried' is data; act on it.\n- Sepsis = infection plus fever or hypothermia, fast pulse, fast breathing, new confusion — escalate as an emergency; low blood pressure arrives late.\n- Always escalate with numbers, trends and a stated worry — and stay with the patient.",
      },
    ],
    questions: [
      {
        topic: "Deteriorating Patient",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation most often rises first in a patient who is quietly deteriorating, and is most often poorly recorded?",
        options: [
          "Blood pressure",
          "Respiratory rate",
          "Weight",
          "Blood glucose",
        ],
        correctIndex: 1,
        explanation:
          "The body compensates for failing oxygen delivery by breathing harder long before blood pressure falls — so respiratory rate is the sentinel vital sign. It is also the one most often estimated rather than counted, which is exactly why deterioration whispers unnoticed.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Deteriorating Patient",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A patient's observations are all individually 'within limits', but your instinct says he is deteriorating — new confusion, no urine since evening, and a respiratory rate of 26 you counted yourself. The correct action is to:",
        options: [
          "Do nothing until the numbers formally trigger the score",
          "Wait an hour and re-check, to be sure the instinct is right",
          "Treat the instinct itself as a trigger: complete the observations, and escalate now with SBAR, quoting numbers and trend",
          "Chart the findings and mention it casually at morning handover",
        ],
        correctIndex: 2,
        explanation:
          "Nurse concern is a validated trigger — studies show it outperforms scoring systems alone. The score aggregates single snapshots; your instinct aggregates a whole patient. Escalate now with the full picture; waiting to be 'sure' is how the confirmation arrives as a crash call.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Deteriorating Patient",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Day three after surgery, a patient has fever of 37.9 degrees, pulse 108, respiratory rate 26 and new confusion. Your working recognition and response is:",
        options: [
          "Simple fever — give paracetamol and reassess in the morning",
          "Possible early sepsis — escalate as an emergency now, hunt the source with the team, and stay with the patient",
          "Anxiety — reassure and dim the lights",
          "Normal post-operative course — chart and continue",
        ],
        correctIndex: 1,
        explanation:
          "Infection plus fever, tachycardia, tachypnoea and new confusion is the sepsis picture — hypotension arrives late, so 'the pressure is fine' must not delay you. Emergency escalation with a source hunt (wound, urine, chest, IV site) is the response; in sepsis, the hours decide the outcome.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Deteriorating Patient",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The 'track and trigger' principle means that:",
        options: [
          "Observations are recorded, and crossing an agreed threshold triggers a pre-agreed action — increased frequency, informing the in-charge, calling the doctor",
          "Nurses track patients with GPS devices",
          "Only doctors may respond to abnormal observations",
          "Observation charts are filed monthly for audit",
        ],
        correctIndex: 0,
        explanation:
          "Track and trigger removes improvisation from the middle of the night: the chart tracks the parameters, the score sets the thresholds, and the required actions are agreed in advance — so the response to deterioration is a protocol, not a debate.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Deteriorating Patient",
        front: "Why is respiratory rate called the sentinel vital sign?",
        back: "It rises earliest — the body compensates for failing oxygen delivery by breathing faster — and it is the vital sign most often estimated instead of counted. Measure it deliberately and you hear the whisper before the shout.",
      },
      {
        topic: "Deteriorating Patient",
        front: "State the sepsis recognition picture in one line.",
        back: "Infection plus fever or hypothermia, fast pulse, fast breathing, and any new confusion — with low blood pressure arriving late; escalate as an emergency, not a routine review.",
      },
      {
        topic: "Deteriorating Patient",
        front: "What is 'track and trigger'?",
        back: "The chart tracks observations; a score or threshold (or the nurse's worry) triggers a pre-agreed action — more frequent observations, informing the ward in-charge, calling the doctor. The response to deterioration is protocol, not improvisation.",
      },
      {
        topic: "Deteriorating Patient",
        front: "What should you do with 'I am worried about this patient'?",
        back: "Treat it as a trigger — complete and escalate the observations now with SBAR, quoting numbers and trend. Nurse concern outperforms scores alone; silencing it because the numbers look acceptable is how quiet deaths happen.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        note: "Deterioration and early warning chapters; verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Sepsis prevention and recognition context; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "Monitoring & Responding",
    lessonTitle: "Fluid Balance & Recording",
    description:
      "Ins and outs, daily weights and the trends that whisper before the body shouts — the chart that tells you which way the patient is drifting.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe what counts as fluid intake and output on a ward fluid balance chart.",
      "Interpret positive and negative fluid balance with daily weight trends.",
      "Recognise the signs of dehydration and fluid overload and escalate with numbers.",
    ],
    tags: ["fluid balance", "monitoring", "dehydration"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The body is mostly water held in a narrow, polite range — and illness pushes it out of that range from both directions. The woman in heart failure is drifting wet; the man with diarrhoea and fever is drifting dry. Long before either of them looks obviously wrong, the fluid balance chart has been publishing the drift, entry by entry.\n\nThat is the magic and the discipline of this lesson: a chart of millilitres, kept honestly, predicts the crisis. Kept carelessly — the 'eyeballed' urine, the forgotten porridge, the unmeasured vomit — it predicts nothing while pretending to be data.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Intake** is everything that enters: oral fluids and feeds (including porridge, soup and fruit, which relatives bring and nobody charts), intravenous infusions with volume and rate, intravenous drugs, and nasogastric feeds. **Output** is everything that leaves: urine measured every time (measuring jugs, not glances), vomit, diarrhoea, drainage from tubes and wounds, and stoma losses. **Insensible losses** — sweat and breath — quietly remove roughly 500 to 800 millilitres a day, more in fever and in harmattan heat; the chart cannot see them, but your interpretation must.\n\n**The balance** is intake minus output. **Positive balance** (intake more than output) accumulates fluid — expected in resuscitation, dangerous in heart failure and kidney injury: rising weight, swollen ankles, breathlessness, crackles in the chest, a raised jugular vein. **Negative balance** loses fluid — intended in overload treatment, dangerous in vomiting, diarrhoea and fever: dry mouth, sunken eyes, loss of skin elasticity, dark scanty urine and confusion. **The daily weight** is the most honest trend you own — same scale, same time (before breakfast), same clothing, every day: a kilogram of weight is roughly a litre of fluid, and a two-kilogram rise in two days speaks louder than any single observation.\n\n**Urine output is a vital sign**: an adult consistently passing less than about 400 millilitres a day (roughly under 30 millilitres an hour) is oliguric — the kidney is either dry, blocked or sick, and it is your job to notice first and say so with numbers.",
      },
      {
        type: "table",
        title: "Reading the drift: dry versus wet",
        body: "| Finding | Fluid deficit (dehydration) | Fluid excess (overload) |\n| --- | --- | --- |\n| Mouth and tongue | Dry, cracked | Moist — but may be breathless |\n| Eyes and skin | Sunken eyes, poor skin turgor | Pitting oedema of ankles and sacrum |\n| Chest | — | Crackles, raised jugular vein, breathlessness |\n| Urine | Dark, scanty, concentrated | Often plentiful — unless kidneys failing |\n| Weight trend | Falling | Rising (1 kg ≈ 1 litre) |\n| Mentation | Confusion, drowsiness, weakness | May be normal until failure is advanced |",
      },
      {
        type: "clinical_pearl",
        body: "A kilogram is a litre in a coat. The daily weight — same scale, same hour, same clothes — is the most tamper-proof fluid balance tool you own; the chart can be guessed, but the waistband cannot. And the moment relatives bring porridge, the chart either finds out or starts lying.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An 80-year-old man, day two on your medical ward, was admitted with diarrhoea. He is 'drinking well', says the night nurse. Your chart review says otherwise: two days of charted output exceed charted intake by more than a litre, the vomit this morning was never written down, and his urine today totals 260 millilitres. He is now drowsy and his mucous membranes are dry. You weigh him: two kilograms below admission weight.\n\nWhat is the chart telling you, and what do you do?\n\nAnswer: This is significant dehydration with developing oliguria — the chart's negative balance, the uncounted vomit, the 260-millilitre day and the two-kilogram loss all tell one story the words 'drinking well' concealed. Escalate now with numbers: total balance, urine totals, weight change, and the clinical signs. Expect the team to resuscitate and hunt the cause; your part is monitoring — hourly urine if needed, all losses measured (including the relatives' porridge and soup), vitals, and the daily weight tomorrow, same scale, same hour. The chart did the diagnosing; your job was to keep it honest and to read it before the kidneys did.",
      },
      {
        type: "memory_trick",
        body: "**I — O — W**: every **I**n, every **O**ut, one daily **W**eight. The three habits that make the chart a monitor instead of a decoration. And when you interpret, remember what the chart cannot see: fever, sweat and harmattan air — the invisible 800.",
      },
      {
        type: "summary",
        body: "- Intake: oral and NG feeds (including relatives' porridge), IV fluids and drugs. Output: urine measured every time, vomit, diarrhoea, drains, stomas; add insensible losses of 500–800 mL daily in your interpretation.\n- Positive balance accumulates (heart failure, kidney injury); negative balance dehydrates (vomiting, diarrhoea, fever).\n- Daily weight — same scale, time and clothing — is the honest trend; 1 kg ≈ 1 litre.\n- Oliguria (under ~400 mL/day or ~30 mL/hour in an adult) is a finding that must travel upward the same shift.\n- Escalate with numbers and trends, never with 'not drinking well'.",
      },
    ],
    questions: [
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following must be counted as fluid INTAKE on a ward fluid balance chart?",
        options: [
          "Intravenous infusions only — oral fluids are nutrition",
          "Oral fluids and relatives' porridge, IV infusions and IV drugs, and nasogastric feeds",
          "Only fluids given by nurses; fluids given by family are not charted",
          "Nothing swallowed counts if the patient is on IV fluids",
        ],
        correctIndex: 1,
        explanation:
          "Everything that enters counts: the IV drip, the drugs in the drip, the NG feed — and the porridge, soup and fruit relatives bring, which are the most commonly forgotten millilitres on the ward. An uncharted intake makes the chart a lie with numbers on it.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with heart failure gains 2 kilograms over two days, with ankle swelling and new crackles in the chest. His fluid balance chart most likely shows:",
        options: [
          "Marked negative balance — the weight is unrelated",
          "Positive balance — intake exceeding output by roughly two litres",
          "Perfect balance — the gain must be muscle",
          "It cannot be interpreted without blood tests first",
        ],
        correctIndex: 1,
        explanation:
          "A kilogram of weight is roughly a litre of fluid. Two kilograms plus oedema and crackles is overload accumulating — a positive balance of about two litres needing escalation, diuretic review and sodium/fluid decisions with the team.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Easy",
        stem: "For daily weights to mean anything clinically, they must be taken:",
        options: [
          "On whatever scale is nearest, at any hour",
          "Same scale, same time each day (usually before breakfast), same clothing",
          "Only on admission and discharge",
          "After a large meal, for consistency",
        ],
        correctIndex: 1,
        explanation:
          "The trend is the test, and the trend only exists when everything but the patient is held constant: one scale, one hour, one kind of clothing. Then each kilogram of change is roughly a litre of fluid gained or lost.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An adult patient's total urine output for the day is 260 millilitres, with dry mucous membranes and new drowsiness. This finding is:",
        options: [
          "Normal — older adults simply pass less urine",
          "Oliguria with clinical dehydration — a finding to escalate with numbers this shift",
          "Only significant if the blood pressure has also fallen",
          "A bladder problem to manage with a bedpan",
        ],
        correctIndex: 1,
        explanation:
          "Under roughly 400 millilitres a day (about 30 millilitres an hour) is oliguria — the kidney signalling deficit, obstruction or injury. With dry membranes and drowsiness, this is dehydration reaching the organs; waiting for the blood pressure to fall is waiting for the late sign.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Fluid Balance",
        front: "What three habits make a fluid balance chart trustworthy?",
        back: "I–O–W: every In recorded (including relatives' porridge and IV drugs), every Out measured (urine with a jug, vomit, diarrhoea, drains), one daily Weight — same scale, hour, clothing.",
      },
      {
        topic: "Fluid Balance",
        front: "What do insensible losses add up to, and when do they grow?",
        back: "Roughly 500–800 mL lost daily through sweat and breathing — rising with fever, harmattan heat and fast breathing. The chart cannot see them; your interpretation must.",
      },
      {
        topic: "Fluid Balance",
        front: "Define oliguria in an adult, and state your duty.",
        back: "Persistently under about 400 mL per day (or ~30 mL/hour) — dry, blocked or injured kidneys. It is a finding to escalate with numbers this shift, not to observe overnight.",
      },
      {
        topic: "Fluid Balance",
        front: "Give three signs of fluid overload and three of dehydration.",
        back: "Overload: rising weight, pitting ankle/sacral oedema, crackles with raised jugular vein. Dehydration: dry mucous membranes, sunken eyes with poor skin turgor, dark scanty urine with drowsiness.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        note: "Fluid, electrolyte and acid-base balance chapters; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "Monitoring & Responding",
    lessonTitle: "Bedside Monitoring Equipment",
    description:
      "Pulse oximeters, thermometers, glucometers and blood pressure machines — the machines that help you, and the ways they quietly fool you.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the correct use of common bedside monitoring equipment and the checks before trusting a reading.",
      "Explain the common ways each device gives falsely reassuring or falsely alarming values.",
      "Apply a maintenance mindset — clean, check, calibrate and report — so the ward's machines stay honest.",
    ],
    tags: ["equipment", "monitoring", "pulse oximetry"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The pulse oximeter clipped to a cold finger, the glucometer fed an expired strip, the blood pressure cuff wrapped over a thick cloth — every ward has a drawer of machines and a lifetime of numbers nobody questioned. Equipment is a colleague that never sleeps and never lies — except when it does.\n\nThis lesson is the short, practical training the machines assume you already had: how each device works, what fools it, and the habits that keep it honest. Ten minutes here will save you years of confidently charted nonsense.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The pulse oximeter** estimates the percentage of haemoglobin carrying oxygen. It is fooled by poor circulation (a cold, shocked finger reads low or not at all — warm the hand, recheck, or trust your clinical eyes), movement, ambient light, and nail polish or artificial nails (remove or use an unpolished finger). Two traps deserve respect: it reads **percentage, not content** — a severely anaemic patient can show a 'beautiful' 99 percent while carrying too little oxygen in total — and it says nothing about the work of breathing: a patient at 97 percent with a respiratory rate of 30 is still in trouble.\n\n**The blood pressure machine** needs the right cuff (a cuff too small over-reads; too large under-reads), the arm supported at heart level, the patient rested a few minutes, and nothing thick between cuff and skin. **Thermometers** demand route consistency — a chart that mixes axillary and oral values is a chart of two different patients; tympanic readings suffer from earwax and aim. **Glucometers** want washed, dried hands (sugar on a finger reads high), in-date strips matched to the meter, the correct drop size, and quality checks — and remember malaria and some medications can distort certain meters. For every device: check it before you trust it — power, probe, cable, date, calibration sticker — and when a reading disagrees with the patient, **believe the patient and re-measure**. A machine supports assessment; it never replaces it.",
      },
      {
        type: "table",
        title: "Your equipment, and how it fools you",
        body: "| Device | Common trap | Your habit |\n| --- | --- | --- |\n| Pulse oximeter | Cold finger, polish, motion, anaemia's 'normal' percentage | Warm the hand, clean finger, still patient — and read it beside the respiratory rate |\n| BP machine | Wrong cuff size, arm below heart, clothing under cuff | Right cuff, supported arm at heart level, rested patient, bare skin |\n| Thermometer | Mixed routes, earwax, dead battery | One route per chart, clean probe, check the battery and reading sanity |\n| Glucometer | Unwashed hands, expired strips, wrong drop | Washed dried hands, in-date strips, quality control per schedule |\n| Any device | Quiet faults nobody reports | Check before use; tag and report faults — never quietly re-shelve |",
      },
      {
        type: "clinical_pearl",
        body: "The oximeter trusts the finger it is given — warm, clean, still and well-perfused. And remember the two lies it cannot tell the truth about: it measures saturation, not how much blood there is (anaemia), and it says nothing about how hard the patient is breathing to hold that number.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The night report says bed 4 is 'stable, saturating 99'. Your eyes disagree: the woman is breathing at 30 a minute, using her shoulder muscles, and talking in broken phrases. The probe sits on a finger cold with poor circulation; the plethysmograph waveform on the monitor is ragged. You warm her hand, reposition the probe and recheck while watching her chest — and you chart the respiratory rate and work of breathing beside the new reading.\n\nWhat did the '99' hide, and what rule did you follow?\n\nAnswer: A poorly perfused probe can fail to read (or read falsely), and the saturation percentage alone can look reassuring even when the body is compensating hard — here with tachypnoea and accessory muscle use, which the machine never measures. The rule: when the patient and the machine disagree, believe the patient, fix the measurement (warm, reposition, recheck), and chart the clinical picture — rate and work of breathing — beside the number. Saturation without respiratory rate is half an assessment.",
      },
      {
        type: "memory_trick",
        body: "Before you trust any machine, run **C.H.E.C.K.**: **C**lean probe and device; **H**as it power, cable, in-date strips or calibration?; **E**quipment matched to the patient (cuff size, finger, route); **C**ompare the reading with the patient in front of you; **K**eep it honest — tag and report any fault instead of quietly re-shelving it.",
      },
      {
        type: "summary",
        body: "- Pulse oximetry: fooled by cold fingers, motion, polish and light; a percentage, not a content — anaemia can look 'normal'; always read it beside respiratory rate.\n- Blood pressure: right cuff, arm at heart level, rested patient, bare skin.\n- Thermometers: one route per chart; tympanic needs a clear ear canal.\n- Glucometers: washed dried hands, in-date strips, quality control.\n- When patient and machine disagree, believe the patient and re-measure.\n- Faulty equipment is tagged and reported — never quietly returned to the shelf to fool the next shift.",
      },
    ],
    questions: [
      {
        topic: "Bedside Equipment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A pulse oximeter on the cold, poorly perfused finger of a shocked patient fails to give a reading. Your best next action is to:",
        options: [
          "Record 'unable to measure — stable' and move on",
          "Warm the hand, reposition the probe or use an alternative site, recheck — and assess the patient's breathing and circulation clinically regardless",
          "Chart 100 percent, since no reading usually means normal",
          "Remove the monitor to save the battery",
        ],
        correctIndex: 1,
        explanation:
          "Poor perfusion starves the probe, not the patient. Warm, reposition, recheck — and never let a failed reading stand in for an assessment: in shock, your clinical eyes (rate, colour, consciousness, pulse) carry the decision, with the machine as a supporter.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Bedside Equipment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient's oxygen saturation reads 97 percent, but his respiratory rate is 30 and he speaks in broken phrases. The correct interpretation is:",
        options: [
          "All is well — the saturation is normal",
          "He is compensating hard: the saturation percentage says nothing about the work of breathing — assess and escalate on the rate and effort",
          "The oximeter must be broken, because breathing fast means low saturation",
          "Give oxygen immediately at the highest flow to lower the rate",
        ],
        correctIndex: 1,
        explanation:
          "The saturation is the result; the rate and effort are the cost. A patient can hold a 'good' percentage by breathing twice as hard — and that effort is early deterioration. Read every saturation beside the respiratory rate, and escalate on the pair, not the percentage alone.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Bedside Equipment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about blood pressure measurement is correct?",
        options: [
          "A cuff that is too small for the arm tends to give falsely HIGH readings",
          "A cuff that is too small always reads falsely low",
          "The arm position and cuff size do not matter with automatic machines",
          "Measuring over thick clothing improves accuracy",
        ],
        correctIndex: 0,
        explanation:
          "A too-small cuff needs more pressure to occlude the artery and over-reads — labelling normotensive patients hypertensive. Correct cuff size, a supported arm at heart level, a rested patient and bare skin are the four habits of an honest number, whatever the machine's brand.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Bedside Equipment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A glucometer reading seems impossible for your patient's clinical state. Which combination best explains common glucometer errors and your response?",
        options: [
          "Unwashed hands and expired strips cause false values — wash and dry the hands, confirm in-date strips, repeat the test, and compare with the patient before acting",
          "Glucometers never fail — act on any reading immediately",
          "The meter only works after midnight",
          "Colour of the patient's skin affects glucose readings",
        ],
        correctIndex: 0,
        explanation:
          "Sugar on an unwashed finger reads falsely high; expired or mismatched strips read nonsense. The discipline is the same for every device: correct technique, in-date consumables, a repeat measurement, and the patient's picture as the referee. Acting on an unverified impossible number is how insulin errors happen.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Bedside Equipment",
        front: "Name four things that fool a pulse oximeter.",
        back: "Poor perfusion (cold, shocked finger), movement, ambient light, and nail polish or artificial nails — plus remembering that it reports a percentage of saturation, not the total oxygen content (anaemia can look 'normal').",
      },
      {
        topic: "Bedside Equipment",
        front: "What are the four habits of an honest blood pressure reading?",
        back: "Correct cuff size (too small over-reads), arm supported at heart level, patient rested a few minutes, bare skin under the cuff.",
      },
      {
        topic: "Bedside Equipment",
        front: "What rule applies when the patient and the machine disagree?",
        back: "Believe the patient: fix the measurement (warm the finger, check the cuff, repeat the glucose) and reassess clinically. Machines support assessment; they never replace it.",
      },
      {
        topic: "Bedside Equipment",
        front: "What do you do with faulty equipment on the ward?",
        back: "Tag it, report it and remove it from service — never quietly re-shelve it for the next shift to trust. And run CHECK before use: Clean, Has power and in-date parts, Equipment matched to patient, Compare with the patient, Keep it honest.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        note: "Clinical measurement and equipment chapters; verify current edition.",
      },
      {
        organization: "WHO",
        title: "Medical Devices: Managing the Mismatch (and WHO medical device technical series)",
        note: "Equipment management and maintenance principles; verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Equipment Maintenance and Inventory Guidance",
        note: "Facility-level practice; verify with your biomedical engineering department.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "Monitoring & Responding",
    lessonTitle: "Escalating Concern: SBAR & the Call",
    description:
      "Saying it clearly when it matters — a structured handover of worry that turns 'something is not right' into action.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Apply the SBAR structure to an escalation call, including recommendation with times and owners.",
      "Explain the escalation ladder and the duty to persist when a first call is dismissed.",
      "Describe what to document after the call — and why the record protects the patient.",
    ],
    tags: ["sbar", "escalation", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You have recognised the deteriorating patient. Now comes the moment that separates a safe ward from an unsafe one: telling someone who can act — clearly enough, fast enough, and firmly enough to be heard at 2 a.m. by a doctor who has four other wards.\n\n'Please come, she is not fine' is how patients die politely. **SBAR** is how nurses save them: a sixty-second structure that turns worry into information, and information into action. And behind SBAR stands a second skill the profession demands of you — the courage to call again, and higher, when the first answer is not enough.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**SBAR** orders your call into four movements. **Situation** — who you are, who the patient is, where they are, and the one-line problem: 'This is the night nurse on the male medical ward; bed 7, Mr. Mensah, day three after stroke — he has become drowsy and his breathing has worsened.' **Background** — the story that matters: admission reason, relevant history, what has happened today. **Assessment** — your fresh numbers and your clinical reading: 'Respiratory rate 28, saturation 90 percent on air, pulse 110, temperature 38.2; I think this is sepsis until proven otherwise.' **Recommendation** — what you need, by whom, by when: 'I need you to review him within thirty minutes; I have given oxygen per protocol and I am starting hourly observations.' The R is the part most often left out — and the part that converts a report into a plan.\n\n**Prepare before you dial**: the chart, the latest full observations, the drug and fluid charts, and your question written down. **Read-back** any order you receive — doses, rates, fluids — repeating it so mishearing dies on the phone. **Persist politely**: if the response dismisses a deteriorating patient, re-state the numbers and your worry; if there is still no plan, climb the ladder — ward in-charge, then the on-call medical team, then the registrar or consultant on call — and say at each rung what you have already called and what was said. Then **document**: the time of the call, who was called, what you reported, what was instructed, and what you did — because the record is the patient's protection and yours. Concern that is not escalated is gossip; escalation that is not documented is a rumour with a phone number.",
      },
      {
        type: "clinical_pearl",
        body: "The R in SBAR is the half that gets things done: 'I need you to review him within thirty minutes' has an owner, an action and a clock. 'Something is not right, please advise' has none of the three — and at 2 a.m., vague gets postponed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You call the house officer about bed 7 — drowsiness, respiratory rate 28, saturation 90, fever. He is mid-admission elsewhere: 'He's a stroke patient, they get like that. Keep an eye on it.' You put the phone down. Your hands are still uneasy: the urine output has fallen too, and the confusion is new. You re-check him — the rate is now 30.\n\nWhat do you do in the next ten minutes?\n\nAnswer: Call again, higher, with SBAR and a trend. First re-state to the house officer, briefly and firmly, the deterioration trend and your specific request — 'I have rechecked him; the rate is now 30 and urine has fallen; I am formally requesting review within thirty minutes' — and if the answer is still no plan, climb the ladder: the ward in-charge now, then the registrar on call, stating at each rung what you have already called, what was said, and the numbers. Persisting with a deteriorating patient is not insubordination; it is the job — the nurse at the bedside holds information no one else has. Document every call with times, names, what was reported, what was instructed and what you did — and keep the patient on hourly observations. When the registrar arrives and sepsis is confirmed at 3 a.m., the record will show a system that worked — and a nurse who held its seams together.",
      },
      {
        type: "quiz_prompt",
        title: "Check yourself",
        body: "Your patient has deteriorated overnight. Draft the four SBAR sentences you would say on the phone.\n\nAnswer: Situation — who you are, who and where the patient is, the one-line problem. Background — admission reason and today's relevant story. Assessment — fresh numbers (respiratory rate, saturation, pulse, temperature, urine, consciousness) and your clinical reading. Recommendation — what you need, by whom, by when. Four sentences, sixty seconds, one plan.",
      },
      {
        type: "memory_trick",
        body: "SBAR is the message; the **three Ps of the call** are the messenger: **P**repare (chart, numbers, question written down), be **P**recise (owners, actions, clocks — 'review within thirty minutes'), and **P**ersist (restate the numbers, climb the ladder, document every call). Prepared, precise, persistent — that is how worry becomes treatment.",
      },
      {
        type: "summary",
        body: "- SBAR: Situation, Background, Assessment, Recommendation — with owners, actions and times in the R.\n- Prepare before dialling: chart, fresh observations, drug and fluid charts, your question written down.\n- Read-back every order received — doses, rates, fluids — so mishearing dies on the phone.\n- If a deteriorating patient is dismissed, persist: restate numbers, then climb the ladder (in-charge → on-call team → registrar/consultant).\n- Document each call: time, person, report, instruction, action. Unescalated concern is gossip; undocumented escalation is a rumour with a phone number.",
      },
    ],
    questions: [
      {
        topic: "Escalation & SBAR",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR, the 'R' stands for:",
        options: [
          "Recovery — the discharge plan",
          "Recommendation — what you need done, by whom and by when",
          "Reassurance — confirming the patient is stable",
          "Record — the folder number",
        ],
        correctIndex: 1,
        explanation:
          "Recommendation converts your assessment into a plan with an owner and a clock: 'review within thirty minutes', 'fluid orders tonight', 'oxygen review now'. It is the half most often omitted — and the half that protects the patient while everyone else sleeps.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Escalation & SBAR",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You call about a deteriorating patient and are told: 'Keep an eye on it.' The patient's trend is still worsening. The professionally correct response is to:",
        options: [
          "Accept the instruction and re-check in the morning",
          "Feel relieved that responsibility has been transferred, and wait",
          "Restate the numbers and your worry, request a defined review time — and if there is still no plan, escalate to the ward in-charge and the next level on call, documenting each call",
          "Ask a relative to complain on your behalf",
        ],
        correctIndex: 2,
        explanation:
          "Transferring a report is not transferring safety: while the patient worsens, the bedside nurse's duty is to persist — clearly, factually, up the ladder — and to document every call. Accepting a dismissive answer about a deteriorating patient is how quiet deaths happen with full phone records.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Escalation & SBAR",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which details belong in the documentation of an escalation call?",
        options: [
          "Only that 'the doctor was informed'",
          "Time of the call, who was called, what you reported (with numbers), what was instructed, and what you did",
          "Your personal opinion of the doctor's attitude",
          "Nothing — phone calls need no documentation",
        ],
        correctIndex: 1,
        explanation:
          "The record must show the chain of concern: times, names, the numbers reported, the instructions received and the actions taken — enough for the next shift and any review to see that escalation happened and what it achieved. Opinions belong to no chart; omissions protect no one.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Escalation & SBAR",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before making an escalation call about a deteriorating patient, you should prepare by gathering:",
        options: [
          "Only your memory of the shift's events",
          "The chart, fresh full observations, drug and fluid charts, and your specific question or request written down",
          "The patient's visitor list",
          "A senior nurse's phone password",
        ],
        correctIndex: 1,
        explanation:
          "Preparation makes the call fast, precise and complete: the chart carries the story, the fresh observations carry the evidence, the drug and fluid charts pre-answer the questions you will be asked — and a written request keeps the R of SBAR from dissolving into nerves.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Escalation & SBAR",
        front: "Expand SBAR with a one-line clinical example.",
        back: "Situation: 'Night nurse, male medical ward, bed 7, day three after stroke, now drowsy and breathless.' Background: admission story and today's events. Assessment: 'RR 28, SpO2 90 on air, pulse 110, temp 38.2 — sepsis until proven otherwise.' Recommendation: 'Review within thirty minutes; oxygen started; hourly observations running.'",
      },
      {
        topic: "Escalation & SBAR",
        front: "What are the three Ps of the escalation call?",
        back: "Prepare (chart, fresh numbers, written request); be Precise (owners, actions, clocks); Persist (restate the numbers, climb the ladder — in-charge, on-call team, registrar/consultant — and document every call).",
      },
      {
        topic: "Escalation & SBAR",
        front: "What gets read back after an escalation call, and why?",
        back: "Anything critical — drug doses, infusion rates, fluid orders: the listener repeats it so mishearing is caught on the phone, before it reaches the patient.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Solutions: Communication During Patient Hand-Overs (Solution 3)",
        year: "2007",
        note: "WHO Collaborating Centre for Patient Safety.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Duty to escalate and document; obtain current version from the Council.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "The Paper Trail",
    lessonTitle: "Documentation That Protects",
    description:
      "What you write is what happened — records that serve patients, teams and, on the hardest days, you.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the principles of ward documentation — contemporaneous, objective, complete, legible and signed.",
      "Apply correct error correction and late-entry practice.",
      "Explain what to document after assessments, medicines, refusals, calls and teaching — and why quotes matter.",
    ],
    tags: ["documentation", "records", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is not about",
        body: "It is not about paperwork for paperwork's sake. On a Ghanaian ward, the folder travels: the nurse who reads your note at handover never saw your shift; the doctor at 3 a.m. never met your patient's evening; the court, years later, never met anyone. Your documentation is the only version of your care that outlives the moment.\n\nThe profession's plain rule says it all: **if it is not written down, it was not done.** The reverse is also true — what is written carelessly can become a harm that never happened, or hide one that did. Ten minutes learning this lesson will make every shift you ever work safer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every entry must be **contemporaneous** — written at the time or as near as the work allows, never reconstructed at the end of a long day; **objective** — what you observed, measured, did and said, including negatives ('no pain at rest' is a finding); **complete** — vitals with times, medicines with times and site, the response to treatment, what you told the patient, who you called and what they said; **legible** — in ink, in a form the next reader can actually decode; and **signed** — your name, designation, date and time. Opinions, labels and shorthand characterisations — 'difficult patient', 'non-compliant', 'seems fine' — are not clinical data, and they read terribly in a review: chart the behaviour, not the verdict ('declined injection, reason given: fear of needles; doctor informed 21:40').\n\nPatient statements that carry risk — pain scores, refusals, confusion, thoughts of self-harm, complaints — are recorded **in the patient's own words, in quotation marks**. Corrections are never erased: draw **one line through the error, write the correction beside it, initial and date it** — an audit trail, not a scar. Late entries are labelled as such with both times. And after every escalation call: time, person, report, instruction, action. The note is not the residue of nursing; it is part of the nursing.",
      },
      {
        type: "table",
        title: "What the record must carry, by event",
        body: "| Event | The minimum record |\n| --- | --- |\n| Assessment | Findings with times, vitals, comparison with baseline, your clinical judgement in measured words |\n| Medicine given | Drug, dose, route, site, time, and the patient's response where relevant |\n| Medicine refused / not given | What was offered, the patient's words in quotes, the reason, who was informed and when |\n| Escalation call | Time, who was called, numbers reported, instruction received, action taken |\n| Teaching | What was taught, to whom, and what they could say back (teach-back) |\n| Incident or fall | Facts of the event, assessments after, who was informed, care given — no blame language |",
      },
      {
        type: "clinical_pearl",
        body: "Write for the reader who was not there. If the night nurse can pick up your patient's story from your note alone — trend, actions, instructions, plan — the note is doing its clinical work. If a lawyer can read it years later and see calm, honest care, it is doing its protective work. Both readers matter; neither needs your opinions.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A post-operative patient's pain has been rising all evening. You have charted each score with its time, each assessment, and the two calls you made — 20:10 and 22:35 — with the responses and the instructions you received. At 23:15, the ward in-charge reviews your entries, sees the trend at a glance, escalates once more with the full sequence behind her, and the patient is finally reviewed and treated.\n\nWhat made your documentation clinically powerful that night?\n\nAnswer: The trend was visible — pain scores with times, not 'in pain all evening'; the actions were traceable — what you assessed, whom you called, what was said and done, with times; and the escalation was effortless because the record handed the next nurse a loaded argument, not a vague worry. The same note protects everyone later: it shows a nurse who observed, escalated and acted — in writing, at the time, in facts. 'Not documented, not done' cuts both ways: for the patient, it is the safety net; for you, it is the mirror of your care.",
      },
      {
        type: "memory_trick",
        body: "Make every entry **D.A.T.E.**-d: **D**ocumented at the time (contemporaneous), **A**ccurate and objective (facts, negatives, quotes — no labels), **T**rend visible (numbers with times, so the story moves), **E**very entry signed with name, designation, date and time. And when you err: one line, initial, date — never an erasure.",
      },
      {
        type: "summary",
        body: "- Documentation is clinical care that outlives the shift: if it is not written, it was not done.\n- Every entry: contemporaneous, objective, complete, legible, signed — with names, designation, date and time.\n- Chart behaviour, never verdicts: 'declined injection, fears needles, doctor informed 21:40' — not 'difficult patient'.\n- Risk-carrying patient statements go in quotes, in the patient's own words.\n- Errors: single line through, correction beside, initial and date — the audit trail is the integrity.\n- Calls, refusals, teaching and incidents each have a minimum record — learn the table.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You realize you wrote the wrong time in a ward entry. The correct way to correct it is to:",
        options: [
          "Erase the error completely and write the correct time",
          "Use correction fluid, then write over it",
          "Draw one line through the error, write the correction beside it, and initial and date the change",
          "Tear out the page and rewrite the whole entry",
        ],
        correctIndex: 2,
        explanation:
          "Records are legal and clinical documents: the correction must remain visible with a single strike-through, the new value beside it, and your initials and date — an audit trail that shows honesty. Erasure, over-writing or page removal destroys the record's credibility entirely.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient refuses her evening injection, saying 'it burns too much'. Which entry is written professionally?",
        options: [
          "Patient difficult and refusing treatment",
          "Refused diclofenac injection 19:30: 'it burns too much'. Offered oral alternative, accepted. Doctor informed 19:45. — N. Adjei, Student Nurse, 19:50",
          "Injection not given",
          "Patient being stubborn about the injection again",
        ],
        correctIndex: 1,
        explanation:
          "The professional entry carries facts with times, the patient's own words in quotes, the alternative offered and its result, who was informed and when, and a signature with designation. Labels like 'difficult' or 'stubborn' are judgements — they are neither data nor defensible.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The phrase 'contemporaneous documentation' means entries are:",
        options: [
          "Written only at the end of the shift, together",
          "Written at the time of the event or as soon as practicable afterwards, not reconstructed later",
          "Written by the nurse who knows the patient best, whenever she returns",
          "Copied from the previous day's entry for consistency",
        ],
        correctIndex: 1,
        explanation:
          "At the time, or as near as the work allows: memory edits events within hours, and the details lost first are the ones the next carer needs most. Late entries must be labelled with both the event time and the writing time; copied entries are fiction with a signature.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are critical patient statements recorded in quotation marks, in the patient's own words?",
        options: [
          "For literary interest in the notes",
          "Because exact words are clinical data — 'the pain is like fire in my chest' carries assessment meaning, and exactness protects both patient and nurse when decisions are reviewed",
          "Because patients sign their own notes",
          "Quotation marks are only used for doctors' words",
        ],
        correctIndex: 1,
        explanation:
          "The patient's exact words are findings: character, severity and meaning of symptoms live in the phrasing, and paraphrases quietly edit them. In any later review — clinical, complaint or legal — the difference between 'complained of chest pain' and 'said it is like fire in my chest, 22:05' can matter enormously.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "What does D.A.T.E. demand of every entry?",
        back: "Documented at the time (contemporaneous); Accurate and objective — facts, negatives, quotes, never labels; Trend visible — numbers with times; Every entry signed with name, designation, date and time.",
      },
      {
        topic: "Documentation",
        front: "How is an error in the record corrected?",
        back: "One line through the error (still legible), the correction written beside it, initialled and dated — never erased, overwritten or page-removed. The audit trail is the integrity.",
      },
      {
        topic: "Documentation",
        front: "What minimum details follow an escalation call?",
        back: "Time of the call, who was called, what you reported (with numbers), what was instructed, and what you did — the chain of concern, visible to the next reader.",
      },
      {
        topic: "Documentation",
        front: "Why does 'if it is not written down, it was not done' protect the nurse as much as the patient?",
        back: "The record is the only version of your care that outlives the moment — it carries your observations, escalations and actions to the readers who were not there, and on the hardest days it is the mirror showing calm, honest, timely nursing.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Documentation and accountability standards; obtain current version from the Council.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Ghana Health Service",
        title: "Records and Patient folder Management Guidance",
        note: "Facility documentation practice; verify current guidance with your facility.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "clinical-nursing-skills-3",
    moduleTitle: "The Paper Trail",
    lessonTitle: "Handover: Passing the Baton",
    description:
      "Shift changes without dropped threads — structured, honest, kind, and always with the numbers that let the next nurse guard your patients.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Apply the SBAR structure to a ward handover, sickest patient first.",
      "Explain the added safety of bedside handover and read-back of critical information.",
      "Recognize the handover failures that lose patients — and the habits that prevent them.",
    ],
    tags: ["handover", "communication", "sbar"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Twice a day, sometimes thrice, your patients change hands. For a few minutes the safest of wards holds its breath — because information lost at that seam does not exist for the next nurse, no matter how carefully it was observed. Communication failures at handover are among the most common roots of preventable harm, in every country that has measured it.\n\nThe cure is structure: same format, same order, every time, so nothing depends on memory, mood or eloquence. And the added layer of craft: doing it at the bedside, with the patient hearing their own story. If you can hand over well as a student, you will be trusted with more than students usually are.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**SBAR** is the format. **Situation** — who she is, where she is, what is happening now. **Background** — the story that brought her here, her relevant history. **Assessment** — the latest numbers and your clinical reading: observations, trends, your worry stated in words. **Recommendation** — what must happen next, by whom and by when: 'needs hourly urine measures for two more hours; doctor to review at 4 p.m.; family to be updated on the fluid plan.' Hand over the **sickest patients first**, in full — then the rest of the ward. Walk the bay: **bedside handover** adds what notes cannot — the incoming nurse sees the patient's colour, breathing and drip with her own eyes, the patient hears her plan spoken aloud and can correct it, and the family meets the new face.\n\nTwo habits close the loop. **Read-back** for anything critical — drug doses, infusion rates, allergies, pending results — the listener repeats it so errors surface before they reach the patient. And **questions are invited, not resented**: the incoming nurse who interrupts to clarify is doing the job. Keep the environment still — no phone calls, no corridor shouting; if a crisis forces a corridor report, the full structured handover is completed once the ward is safe. And remember the rule that governs everything: what you do not say does not exist for the next shift. 'All fine, eight patients' hands over nothing.",
      },
      {
        type: "clinical_pearl",
        body: "A handover is a transfer of responsibility, not of impressions. The incoming nurse can only guard what she has been told — with numbers, trends and thresholds. 'Watch her' is a hope; 'pad checks every thirty minutes for two hours, doctor informed, call again if saturation drops below 94' is a baton.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night shift takes the surgical ward on the report: 'All fine, eight patients, everything is in the folder.' At 2 a.m. a post-operative patient becomes breathless, saturation 90. The folder shows her pulse climbing through the evening — 92, 98, 106 — with a comment at 20:00: 'appears restless'. Nobody said it aloud.\n\nWhat should the 18:00 handover have contained?\n\nAnswer: A full SBAR for that patient, spoken first because she was the highest risk. Situation: bed 3, day one after surgery. Background: the operation and relevant history. Assessment: the trend — pulse 92 to 106 over the evening, restless, saturation drifting. Recommendation: observations every 30 minutes for the next two hours, doctor informed of the trend, a defined threshold for calling again — any further rise or a saturation under 94 means call now. Spoken aloud at the bedside, that would have put the night nurse beside her at 22:00 instead of behind a crash trolley at 02:00. 'All fine' is an opinion; a trend with a number and a threshold is a handover.",
      },
      {
        type: "memory_trick",
        body: "Order your report **Hot first, then Whole**: the sickest patient first in full SBAR, then the whole-ward picture, walking the bays. And repeat the handover's oath as you leave: **what you don't say doesn't exist.**",
      },
      {
        type: "summary",
        body: "- Handover is the seam where care is most easily lost; structure is the repair.\n- SBAR: Situation, Background, Assessment, Recommendation — with owners, actions and times in the R.\n- Sickest first; bedside handover lets the incoming nurse verify with her own eyes — and the patient correct her own story.\n- Read-back for doses, rates, allergies and pending results; questions invited, interruptions refused.\n- 'All fine' hands over nothing — numbers, trends and thresholds do.\n- The notes must carry the same story: whatever the night nurse needs at 2 a.m. belongs in writing too.",
      },
    ],
    questions: [
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which ordering principle governs a safe ward handover?",
        options: [
          "Alphabetical by patient surname",
          "Sickest patients first, in full SBAR, then the rest of the ward",
          "Admission date order, oldest first",
          "Whichever patient the outgoing nurse remembers first",
        ],
        correctIndex: 1,
        explanation:
          "The sickest patients need the fullest handover while attention is freshest — and the incoming nurse must start her shift knowing exactly where the danger sits. Alphabetical or memory-order handovers scatter the risk information the night most needs.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "'All fine, eight patients, everything is in the folder' is a poor handover mainly because:",
        options: [
          "It is too short to be polite",
          "It transfers no clinical data, trends or thresholds — what is not said does not exist for the incoming nurse",
          "Folders cannot be opened at night",
          "It assumes the patients are sleeping",
        ],
        correctIndex: 1,
        explanation:
          "Responsibility can only pass with information. An impression transfers no data, no trend and no escalation threshold — so the incoming nurse cannot watch for what mattered. The folder is the backup, never the handover; politeness and length are beside the point.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do read-back and bedside handover add safety?",
        options: [
          "They shorten the shift for both nurses",
          "They hide errors from the ward in-charge",
          "Read-back surfaces misheard critical items, and bedside handover lets the incoming nurse verify the patient directly — with the patient able to correct her own plan",
          "They allow the outgoing nurse to leave early",
        ],
        correctIndex: 2,
        explanation:
          "Read-back catches mishearing before it becomes a medication event; the bedside lets the incoming nurse see colour, breathing and drip personally, and gives the patient a voice in her own plan. None of it shortens anything — it lengthens safety.",
        courseSlug: "clinical-nursing-skills-3",
      },
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A crisis interrupts handover in the corridor. The professional standard is to:",
        options: [
          "Abandon the handover — the crisis proves it was unlucky",
          "Give a quick corridor summary and consider the shift transferred",
          "Manage the crisis, then complete the full structured handover once the ward is safe",
          "Ask the night nurse to read the folder instead of a handover",
        ],
        correctIndex: 2,
        explanation:
          "Safety never transfers by assumption. The crisis is handled first, but the full structured handover — numbers, trends, thresholds — is completed before responsibility is truly handed over. 'Read the folder' is an abdication, not a handover.",
        courseSlug: "clinical-nursing-skills-3",
      },
    ],
    flashcards: [
      {
        topic: "Handover",
        front: "Give a one-line bedside SBAR example.",
        back: "Situation: bed 3, day one post-op, breathing worsening. Background: the operation and history. Assessment: pulse 92→106 over the evening, restless, saturation drifting. Recommendation: observations every 30 minutes for two hours, doctor informed, call again if saturation falls below 94.",
      },
      {
        topic: "Handover",
        front: "What does bedside handover add that notes cannot?",
        back: "The incoming nurse verifies the patient's colour, breathing and drip with her own eyes — and the patient hears her own plan and can correct it, while the family meets the new face.",
      },
      {
        topic: "Handover",
        front: "What is read-back, and what gets read back?",
        back: "The listener repeats critical items so mishearing dies before the patient: drug doses, infusion rates, allergies, pending results — anything whose misunderstanding would harm.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Solutions: Communication During Patient Hand-Overs (Solution 3)",
        year: "2007",
        note: "WHO Collaborating Centre for Patient Safety.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Accountability across shift boundaries; obtain current version from the Council.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // MENTAL HEALTH NURSING I — 7 lessons
  // ═══════════════════════════════════════════════════════════

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "The Mind on the Ward",
    lessonTitle: "Mental Health: More Than the Absence of Illness",
    description:
      "A working definition of mental health — wellbeing, the continuum we all ride, and why every nurse on every ward is a mental health nurse.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "State the WHO concept of mental health as a positive state of wellbeing, not merely the absence of disorder.",
      "Explain the mental health continuum and how people move along it in both directions.",
      "Describe the nurse's mental health role on any ward — noticing, opening doors, and referring.",
    ],
    tags: ["mental health", "definitions", "continuum"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When you hear 'mental health', your mind may jump straight to illness — to voices, to madness, to the psychiatric hospital. The WHO's picture is far bigger: mental health is a state of wellbeing in which a person **realizes their own abilities, copes with the normal stresses of life, works productively, and contributes to their community**. Notice what is missing: any mention of madness. Every patient you will ever nurse has mental health, exactly as they all have physical health — and most of them are mentally healthy people under stress.\n\nThat reframe changes your work everywhere, not just in psychiatric units. The woman facing a mastectomy, the man two years on dialysis, the student nurse on her first night shift — your job includes their minds as well as their bodies. In Ghana, where most people with mental illness never reach formal care, the general nurse is often the only mental health worker a patient will ever meet.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Think of mental health as a **continuum**, not a category: **mental wellbeing** at one end — coping, functioning, contributing; **mental health problems** in the middle — the struggles most of us visit during loss, illness or fear; and **mental disorders** at the far end — conditions with names, criteria and treatments. People move along the line in both directions, slowly or suddenly: a retrenched worker slides toward depression and, with treatment and support, climbs back to wellbeing; a recovering patient relapses under stress and returns. Nobody is fixed at one point — which is why the words 'mad' and 'normal' are useless clinically.\n\nThe scale is staggering: the WHO estimates roughly **one person in eight worldwide lives with a mental disorder** — depression and anxiety alone affect hundreds of millions. In Ghana, the treatment gap is among the largest in the world: most people living with mental illness receive no formal care at all, care that exists being concentrated in the few psychiatric hospitals. Which is why the general nurse matters so much: you will meet depression on the medical ward, anxiety in the outpatient queue, psychosis in the emergency department — long before any psychiatric referral. The skills are noticing, opening doors ('How have you been sleeping? How is your mood?'), asking directly when risk appears, and referring early. Mental health is not a specialty you visit; it is a dimension of every patient you touch.",
      },
      {
        type: "clinical_pearl",
        body: "The body and mind are one patient borrowing two vocabularies: depression worsens diabetes control, and uncontrolled diabetes deepens depression; chronic pain drains mood, and low mood amplifies pain. Assessing one while ignoring the other is half an assessment — on every ward you will ever work.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day four after a leg amputation, Mr. Dankwa refuses his meals, will not join the physiotherapy session, and stares at the ceiling. The night nurse writes 'difficult and uncooperative'. At your morning assessment, you sit down, greet him properly, and ask how he is sleeping and how his mood has been. He is quiet a long time, then says: 'What am I now, without this leg?'\n\nWhat has your reframe of mental health just changed?\n\nAnswer: Everything. The note recorded a character flaw; your questions found a mental health problem — grief and probable depression in a man facing a changed body and livelihood. Sitting down and asking about mood and sleep opens the door; his answer ('what am I now?') tells you he is not being difficult, he is being honest. Next steps: listen without dismissing, assess for self-harm risk directly, involve the team, inform referral per your facility's pathway, and adjust the day's care — food he will accept, physiotherapy negotiated not commanded, a family member he trusts invited in. The label 'difficult' would have closed every one of those doors.",
      },
      {
        type: "memory_trick",
        body: "The WHO definition in one word: **ABLE** — **A**ble to cope with normal stresses; **B**uilding on one's abilities; **L**iving and working productively; **E**ngaging with and contributing to community. Where these are present, that is mental health — madness was never the measuring stick.",
      },
      {
        type: "summary",
        body: "- Mental health is a positive state — coping, functioning, contributing — not merely the absence of illness.\n- It is a continuum: wellbeing → problems → disorders; people move along it in both directions.\n- Roughly one in eight people worldwide lives with a mental disorder; in Ghana most receive no formal care.\n- The general nurse is often the first — sometimes only — mental health worker a patient meets.\n- Core skills on any ward: notice changes, ask open questions, assess risk directly, refer early.\n- Mind and body are one patient: each worsens or heals the other.",
      },
    ],
    questions: [
      {
        topic: "Mental Health Foundations",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The WHO concept of mental health is best summarized as:",
        options: [
          "The absence of any psychiatric diagnosis",
          "A state of wellbeing in which a person realizes their abilities, copes with normal stresses, works productively and contributes to their community",
          "A permanent trait that some people have and others never will",
          "The ability never to feel sad or anxious",
        ],
        correctIndex: 1,
        explanation:
          "Mental health is a positive state — functioning and contributing — not a mere absence of disorder. Everyone has mental health, it fluctuates, and it is measured by coping and participation, not by the presence or absence of 'madness'.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Mental Health Foundations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The 'mental health continuum' means that:",
        options: [
          "People are permanently either mentally ill or mentally healthy",
          "People move between wellbeing, problems and disorder in both directions over time",
          "Only psychiatric patients move along the continuum",
          "Once a person reaches illness, movement back to wellbeing is impossible",
        ],
        correctIndex: 1,
        explanation:
          "The continuum is a line, not two boxes: stress pushes people toward problems and illness; treatment, support and time pull them back. Recovery is expected and common — which is exactly why early recognition and referral matter so much.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Mental Health Foundations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A post-amputation patient refuses meals and physiotherapy and stares at the ceiling. The night note says 'difficult and uncooperative'. Applying a mental health lens, the nurse's best next step is to:",
        options: [
          "Insist that he comply with the physiotherapy timetable",
          "Document the non-compliance formally and withdraw privileges",
          "Sit with him, ask open questions about sleep, mood and how he is coping — and assess directly for thoughts of self-harm before involving the team",
          "Wait for the psychiatric referral that the family will surely arrange",
        ],
        correctIndex: 2,
        explanation:
          "'Difficult' is a label that closes doors; a mental health assessment opens them. Open questions about mood and sleep find the depression or grief underneath the refusal; a direct question about self-harm protects him; and the team plus referral pathway then carry the care. Waiting for the family to act is waiting for the risk to grow.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Mental Health Foundations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the general ward nurse described as a mental health worker in Ghana?",
        options: [
          "Because general nurses are licensed to treat psychiatric illness independently",
          "Because the treatment gap is so large that a medical or surgical patient's nurse is often the only health worker who will notice and open the door to mental health care",
          "Because psychiatric hospitals refuse non-psychiatric patients",
          "It is only a figure of speech — mental health belongs to specialists alone",
        ],
        correctIndex: 1,
        explanation:
          "With most Ghanaians living with mental illness never reaching formal care, the nurse who notices the withdrawn patient, asks about mood, assesses risk directly and refers early is often the only mental health contact that patient will ever have. Notice, open, refer — not diagnose and treat alone.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Mental Health Foundations",
        front: "State the WHO definition of mental health (the ABLE version).",
        back: "A state of wellbeing in which a person is Able to cope with normal stresses, Builds on their abilities, Lives and works productively, and Engages with and contributes to community.",
      },
      {
        topic: "Mental Health Foundations",
        front: "What is the mental health continuum, in one sentence?",
        back: "A line from wellbeing through mental health problems to disorder, along which every person can move in both directions — slowly or suddenly, with stress pushing down and treatment plus support pulling back.",
      },
      {
        topic: "Mental Health Foundations",
        front: "Give the general nurse's four core mental health moves on any ward.",
        back: "Notice changes (mood, sleep, appetite, withdrawal); open the door with open questions; assess risk directly when it appears; refer early through the facility's pathway.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "World Mental Health Report: Transforming Mental Health for All",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240049338",
      },
      {
        organization: "World Health Organization",
        title: "Mental disorders (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
      },
      {
        organization: "World Health Organization",
        title: "WHO-AIMS Report on Mental Health System in Ghana",
        note: "Basis of the treatment-gap picture; verify current data with the Mental Health Authority.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "The Mind on the Ward",
    lessonTitle: "Common Mental Illnesses: Depression & Anxiety",
    description:
      "The most common conditions on earth — recognising depression under the smile, anxiety in the racing body, and the question you must never be afraid to ask.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core features of depression and the anxiety disorders, including somatic presentation common in Ghana.",
      "Explain the four levels of anxiety and the nursing response suited to each.",
      "Apply direct, kind risk assessment and structured nursing care for the depressed patient.",
    ],
    tags: ["depression", "anxiety", "risk assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Anxiety and depression are the common colds of mental health — you will meet them everywhere: the terrified patient before theatre, the withdrawn man on the medical ward, sometimes a colleague at the next table. They are also the two conditions where ordinary nursing kindness, done skilfully, changes outcomes.\n\nIn Ghana there is a twist you must know: distress often presents in the **body**. 'My chest is heavy', 'my body is hot', 'something is crawling in my head' — patients carry their low mood and their worry as physical symptoms, and they present to general clinics, not psychiatric units. A nurse who can hear depression inside a bodily complaint is a diagnostic instrument in her own right.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Depression** is two weeks or more of low mood or **anhedonia** — the loss of pleasure in what used to please — most of the day, nearly every day, plus changes in sleep (classically early waking), appetite, energy and concentration, feelings of worthlessness or guilt, and at worst thoughts of death. Two questions screen for it anywhere: 'How has your mood been?' and 'What still brings you joy?' — and remember that in Ghana the presentation may be somatic: headaches, burning sensations, vague pains with no physical cause, and a clinic folder full of normal results.\n\n**Anxiety** climbs in four levels. **Mild**: alert, driven, a little restless — actually useful before an exam or an operation. **Moderate**: attention narrows, the body joins in — palpitations, trembling, dry mouth, frequent urination. **Severe**: the perceptual field collapses onto the self — the person cannot take in new information, and your teaching lands nowhere. **Panic**: terror — screaming, clinging or freezing, unable to function. Nursing follows the level: your own slow breathing and low voice, short simple sentences, reduced stimulation — drawn curtains, fewer faces — and **grounding**: 'feel the chair under you; name three things you can see.' An anxious body cannot hear logic; calm the body first. In depression, safety leads: **ask directly about thoughts of self-harm** — asking does not plant the idea; it opens the exit. Then rebuild gently with structure: small scheduled victories (out of bed to the window, breakfast at the table), activity around what she once enjoyed, meals and fluids watched — appetite dies with mood. If antidepressants are prescribed: they take **two to four weeks** to work, must not be stopped abruptly, and any worsening is reported the same day. And never dismiss any statement as attention-seeking — dismissiveness is how the risk hides.",
      },
      {
        type: "clinical_pearl",
        body: "Grounding beats arguing. Slow your voice and your breathing; give her something to feel and name — the chair, the floor, three visible things. When the body settles, the words land. And with depression, the kindest sentence is the scariest question: asking directly about self-harm does not plant the idea — it opens the door out.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-year-old woman admitted for severe anaemia has stopped eating well and barely sleeps. This morning you find her staring at the wall, and when you sit beside her she says quietly: 'My family is better off without me.'\n\nWhat do you do first — and what must you ask directly?\n\nAnswer: First, do not leave her alone; stay calm and warm beside her. Then ask the direct question, kindly and without euphemism: 'Sometimes people have thoughts of harming themselves. Do you have thoughts like that?' Her answer decides everything: any thought of self-harm means immediate escalation, constant observation, and documentation of her exact words in quotes. Beyond risk, assess the picture — two weeks or more of low mood or lost pleasure, sleep and appetite disturbed, worthlessness voiced — and arrange formal assessment per your pathway. Involve a trusted family member, support her nutrition (her anaemia will not improve on sorrow alone), and schedule one small achievable activity today. 'You will snap out of it' is not a nursing intervention; presence, a direct question, and a referral are.",
      },
      {
        type: "memory_trick",
        body: "For depression nursing remember **S.A.F.E.**: **S**uicide risk asked directly every shift, in plain words; **A**ctivity scheduled in small, achievable wins; **F**ood and fluids watched — appetite dies with mood; **E**valuate medication response — antidepressants take two to four weeks, never stop abruptly, worsening reported the same day.",
      },
      {
        type: "summary",
        body: "- Depression: two weeks or more of low mood or anhedonia, with sleep, appetite, energy, concentration and worthlessness changes — often somatic in Ghana: 'body hot', 'chest heavy', normal folders.\n- Two-question screen: mood? joy? — then always ask directly about self-harm; asking protects, never provokes.\n- Anxiety climbs mild → moderate → severe → panic; learning stops at severe — calm the body first with slow voice, short sentences, grounding.\n- Nursing depression: stay present, structure small victories, watch meals, involve family, refer.\n- Antidepressants: two to four weeks to work, no abrupt stops, same-day reporting of worsening.\n- Never dismiss distress as attention-seeking — assess it.",
      },
    ],
    questions: [
      {
        topic: "Depression & Anxiety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which cluster most strongly suggests depression rather than ordinary sadness?",
        options: [
          "Tearfulness at a funeral that eases within the week",
          "Low mood and loss of interest nearly every day for three weeks, with early waking, poor appetite and 'I am worthless'",
          "Fear of surgery that resolves after a successful operation",
          "Excitement and sleeplessness before a family wedding",
        ],
        correctIndex: 1,
        explanation:
          "Depression needs duration (two weeks or more), breadth (sleep, appetite, worthlessness) and impairment. Grief that lifts, resolved fear and pre-wedding excitement are normal mood variation — the line is drawn by time and function, not by the presence of tears.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Depression & Anxiety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient cannot take in your explanation about her medicines, says her heart is 'racing out', and cannot say what day it is. Her anxiety level is best graded as:",
        options: [
          "Mild — she is simply alert",
          "Moderate — narrowed attention with body symptoms only",
          "Severe — focus has collapsed onto self, and learning has stopped",
          "Panic — she is screaming and clinging",
        ],
        correctIndex: 2,
        explanation:
          "At severe anxiety the perceptual field narrows to the self and no new information enters — her picture exactly. Panic adds terror with screaming, clinging or freezing; moderate still permits some learning. The response: short sentences, low voice, reduced stimulation, grounding — teach later.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Depression & Anxiety",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about asking a depressed patient directly about thoughts of self-harm is correct?",
        options: [
          "It should be avoided unless the patient raises it first",
          "Only psychiatrists may ask such questions",
          "Asking directly does not plant the idea; it opens the door to help and protection",
          "It should be phrased vaguely: 'You wouldn't do anything silly, would you?'",
        ],
        correctIndex: 2,
        explanation:
          "Direct, kind questions identify risk without increasing it; vague phrasing invites vague answers and hides danger. Any nurse can and must ask — it is core risk assessment, and the exact words of the answer belong in the notes, in quotes.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Depression & Anxiety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A clinic patient repeatedly reports 'body hot' and 'something crawling in my head' with entirely normal physical findings across many visits. The possibility a general nurse must actively consider is:",
        options: [
          "Malingering for attention",
          "Somatic presentation of depression or anxiety — distress carried as physical symptoms",
          "Witchcraft, requiring spiritual referral",
          "A new tropical disease unknown to medicine",
        ],
        correctIndex: 1,
        explanation:
          "In Ghana, psychological distress frequently presents through the body — and lands in general clinics with folders full of normal results. The two-question screen (mood? joy?) and a respectful psychosocial history find the depression or anxiety underneath. Dismissing it as malingering or spiritualising it first both delay the treatment that works.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Depression & Anxiety",
        front: "Define depression's core in one sentence.",
        back: "Two weeks or more of low mood or anhedonia, most of the day nearly every day, with sleep, appetite, energy, concentration and worthlessness changes — plus, always, a direct assessment of self-harm risk.",
      },
      {
        topic: "Depression & Anxiety",
        front: "Name the four levels of anxiety and the level at which teaching stops.",
        back: "Mild (alert, driven), moderate (body symptoms, narrowed attention), severe (focus collapsed onto self — learning stops), panic (terror, cannot function). Calm the body before offering words.",
      },
      {
        topic: "Depression & Anxiety",
        front: "What is S.A.F.E. for depression nursing?",
        back: "Suicide risk asked directly every shift; Activity scheduled in small wins; Food and fluids watched; Evaluate medication response — antidepressants take two to four weeks, never stop abruptly, worsening reported same day.",
      },
      {
        topic: "Depression & Anxiety",
        front: "How does distress often present in Ghana, and where does it land first?",
        back: "As physical symptoms — 'body hot', 'chest heavy', burning sensations — presenting at general clinics with normal test results. Hearing depression inside a bodily complaint is a general-nurse skill.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "World Health Organization",
        title: "Depression (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing",
        note: "Anxiety and depression chapters; verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "The Mind on the Ward",
    lessonTitle: "Severe Mental Illness: Psychosis & Bipolar Disorder",
    description:
      "When reality itself wobbles — voices, fixed beliefs, and the moods that swing to the ceiling — plus the calm, non-argumentative nursing that keeps dignity intact.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the positive and negative symptoms of psychosis and the poles of bipolar disorder.",
      "Apply the middle path — neither arguing with nor confirming delusions — and the safety response to command hallucinations.",
      "Teach families relapse signs and medication-watch duties, with recovery as the working expectation.",
    ],
    tags: ["psychosis", "bipolar", "schizophrenia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Psychosis means losing contact with the reality the rest of us share: hearing voices no one else hears, holding beliefs that evidence cannot shake, thinking that becomes tangled. **Schizophrenia** is its most recognized cause, usually arriving in young adults. **Bipolar disorder** is a different visitor: a mood illness that swings between the floor of depression and the ceiling of mania. There is no 'mad patient' to manage — there are frightened human beings, illnesses with effective treatment, and families watching how you behave.\n\nThis is the lesson where your nursing has to be its calmest — because with severe mental illness, the wrong words can close a patient, and the right ones hold a family together.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Psychosis splits its symptoms in two. Positive symptoms ADD things that should not be there**: hallucinations — most often voices, commenting or commanding; **delusions** — fixed false beliefs held with unshakeable conviction, persecutory ones common ('they are poisoning my food'); disorganized speech and behaviour. **Negative symptoms TAKE things away**: flat emotion, absent drive (**avolition**), few words, withdrawal, no pleasure. Families misread these as laziness or rudeness — your teaching moment: they are illness, not character. Nursing rests on calm structure: low stimulation, predictable routine, short clear sentences.\n\nFor beliefs, the **middle path**: never argue ('there are no voices, stop it' — the patient learns not to tell you), never confirm ('yes, the neighbours are dangerous' — you enter the delusion and lose the ground). Instead: **'I don't hear the voices, but I can see they frighten you, and I want to help.'** You treat the fear, not the belief's content. For voices, ask about their content: **voices commanding harm are a safety issue** — stay, inform senior staff, document the patient's exact words. Watch antipsychotic side effects — drowsiness, stiffness, tremor, restlessness — and report rather than let the patient quietly stop the drug.\n\n**Bipolar disorder swings between poles.** The manic pole: days of elevated or irritable mood, little need for sleep (two hours a night and still 'unstoppable'), rapid pressured speech, grand plans, reckless spending, risk-taking — sometimes arriving on your surgical or medical ward in a patient with a psychiatric history. The depressive pole mirrors major depression. Nursing the manic phase: low stimulation, short interactions, safety over confrontation — do not argue with grand plans, do not feed the pace; protect sleep, food and fluid (they forget both), and guard against exhaustion and risky behaviour. Lithium and other mood stabilizers demand adherence without interruption — and teach families the relapse signature, the earliest and most reliable sign being **sleep disturbance**: the patient who starts sleeping badly, talking faster and starting big projects is relapsing weeks before the storm.",
      },
      {
        type: "clinical_pearl",
        body: "The belief may be false, but the fear inside it is completely real. Nurse the fear and the person; leave the debate about the wall to the weeks of treatment. And for bipolar families, teach one word: SLEEP — when it shortens and the plans grow wings, call the clinic before the ceiling arrives.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young teacher is brought by his family. He has not slept properly for four nights, is talking rapidly, has bought three motorbikes on credit, and says he is 'the greatest mathematics brain in Africa'. He is cheerful, expansive, and slightly irritable when the family corrects him. Last year he spent two months 'low' and barely speaking.\n\nWhat picture is this, and how do you nurse him on a general ward tonight?\n\nAnswer: This is a manic episode in bipolar disorder — the pressured speech, days of little sleep, grandiosity, reckless spending, and the history of a depressive episode complete the classic arc. Tonight: a quiet low-stimulation space, brief calm interactions, and no argument with the grand plans (challenging them feeds the energy); protect the practical basics he is forgetting — meals, fluids, rest, and safety of his money and phone, negotiated with the family where needed. Inform senior staff and arrange psychiatric assessment urgently; watch for exhaustion and risky behaviour overnight; document his exact statements. Then teach the family the relapse signature — sleep shortening, speech quickening, new big plans — because next time, that early call to the clinic may save his job and his credit. Recovery is the expectation: with treatment and adherence, he teaches again.",
      },
      {
        type: "memory_trick",
        body: "Think of a **radio**. Psychosis's positive symptoms turn the volume UP — voices, beliefs, agitation; negative symptoms pull the plug — flat, silent, withdrawn, no drive. Bipolar is the **poles** — floor (depression) and ceiling (mania) — and the relapse ladder starts at **sleep**: the first rung that creaks is the night that shortens.",
      },
      {
        type: "summary",
        body: "- Psychosis = lost contact with shared reality: hallucinations, delusions, disorganized thinking.\n- Positive symptoms add (voices, fixed beliefs, agitation); negative symptoms subtract (flat affect, avolition, withdrawal) — illness, not laziness.\n- The middle path: 'I don't hear them, but I can see they frighten you' — never argue, never confirm; nurse the fear.\n- Voices commanding harm are safety issues: stay, ask the content, escalate, document exact words.\n- Antipsychotic side effects (stiffness, tremor, drowsiness, restlessness) are reported, never 'managed' by stopping.\n- Bipolar mania: little sleep, pressured speech, grand plans, recklessness — low stimulation, protect meals and fluids and money, urgent psychiatric assessment.\n- Teach families the relapse signature: sleep disturbance first, then quick speech and big plans.",
      },
    ],
    questions: [
      {
        topic: "Severe Mental Illness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with schizophrenia has become silent, withdrawn, unmotivated and emotionally flat. The family calls him 'lazy and rude'. The best explanation you can give them is:",
        options: [
          "These are negative symptoms of the illness — things the illness has taken away, not his character",
          "He is being punished for stopping his medication deliberately",
          "He needs to be scolded back into activity",
          "This is terminal deterioration and nothing can be done",
        ],
        correctIndex: 0,
        explanation:
          "Flat affect, avolition and withdrawal are core negative symptoms — subtractions caused by the illness, routinely misread as laziness or disrespect. Naming them correctly protects the patient from blame and the family from despair, and points them toward the right treatment and expectations.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Severe Mental Illness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient refuses to eat, believing the food is poisoned. Which response takes the middle path?",
        options: [
          "'That is impossible — eat your food and stop this foolishness.'",
          "'You are right, the food may be poisoned; I'll lock it away.'",
          "'Let us not talk about food — tell me about your village.'",
          "'I don't share that belief, but I can see it frightens you — let's find a way for you to eat safely, perhaps food you open yourself.'",
        ],
        correctIndex: 3,
        explanation:
          "The middle path presents your reality without arguing, addresses the real fear, and solves the practical problem the belief feeds — food she opens herself returns control without surrendering the truth. Arguing closes disclosure; agreeing enters the delusion; changing the subject abandons nutrition.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Severe Mental Illness",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient tells you the voices have started telling him to hurt himself. Your priority sequence is to:",
        options: [
          "Reassure him the voices will stop by themselves and leave him to rest",
          "Stay with him, ask about the voices' content, inform senior staff immediately, and document his exact words",
          "Argue forcefully that the voices are not real until he agrees",
          "Give him extra duties to distract himself",
        ],
        correctIndex: 1,
        explanation:
          "Command hallucinations of self-harm are a safety emergency, not talk: presence prevents action, the content assessment informs the plan, senior escalation brings treatment, and the exact words in quotes carry the risk to every reader of the note. Reassurance, arguing and distraction all leave the risk unattended.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Severe Mental Illness",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Which cluster most strongly suggests a manic episode rather than ordinary high spirits?",
        options: [
          "Joy at a wedding with dancing and good sleep afterwards",
          "Four nights of two hours' sleep, rapid unstoppable speech, three motorbikes bought on credit, and 'I am the greatest brain in Africa'",
          "Excitement about a promotion, with normal sleep",
          "Relief after passing final exams",
        ],
        correctIndex: 1,
        explanation:
          "Mania is defined by its engine and its cost: the decreased need for sleep with preserved energy, pressured speech, grandiosity and reckless spending — days of it, often with a depressive history behind it. Ordinary joy keeps its sleep, its speech rate and its bank account.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Severe Mental Illness",
        front: "Positive vs negative symptoms of psychosis, one line each.",
        back: "Positive adds what shouldn't be there: voices, delusions, disorganized thinking, agitation. Negative removes what should: flat affect, avolition, few words, withdrawal — illness, not laziness.",
      },
      {
        topic: "Severe Mental Illness",
        front: "What do you do when a patient reports voices commanding self-harm?",
        back: "Treat it as a safety emergency: stay with the patient, ask about the content, inform senior staff immediately, and document the exact words in quotes.",
      },
      {
        topic: "Severe Mental Illness",
        front: "Give the middle-path sentence for a persecutory delusion.",
        back: "'I don't share that belief, but I can see it frightens you — and I want to help.' Neither argue nor confirm; nurse the fear, and solve the practical problem the belief feeds (e.g. food the patient opens personally).",
      },
      {
        topic: "Severe Mental Illness",
        front: "What is the earliest relapse sign families must watch for in bipolar disorder?",
        back: "Sleep disturbance — the patient sleeping badly, talking faster and starting grand projects is relapsing weeks before the full manic episode: call the clinic early.",
      },
      {
        topic: "Severe Mental Illness",
        front: "Name three nursing priorities for a manic patient on a general ward.",
        back: "Low stimulation and brief calm interactions (never argue with grand plans); protection of the forgotten basics — meals, fluids, rest — and of money and safety; urgent psychiatric assessment with the exact statements documented.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "World Health Organization",
        title: "Schizophrenia (fact sheet)",
        year: "2022",
        url: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia",
      },
      {
        organization: "World Health Organization",
        title: "Bipolar disorder (fact sheet)",
        note: "Check for the latest WHO fact-sheet update.",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing",
        note: "Psychosis and bipolar chapters; verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "Therapeutic Conversations",
    lessonTitle: "Therapeutic Communication Skills",
    description:
      "Listening as a clinical instrument — silence, reflection and the questions that open doors, in a Ghanaian voice that respects the culture it serves.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the core therapeutic techniques: silence, open questions, reflection, validation and offering self.",
      "Explain why arguing with or confirming a delusion damages trust — and the middle path that replaces both.",
      "Apply culturally aware non-verbal and verbal communication on the ward.",
    ],
    tags: ["therapeutic communication", "techniques", "culture"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In most nursing you have instruments — thermometers, cannulas, charts. In mental health nursing the main instrument is you: your words, your pace, your silence. Used well, they lower fear, unlock hidden symptoms and keep people safe. Used carelessly — even kindly — they close a person who was about to open.\n\nThis lesson collects the techniques that open doors, the classic blocks that close them, and the cultural frame a Ghanaian ward adds: greetings before business, respect in the eyes you hold or lower, and the family standing quietly at the door.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The opening techniques: **silence** — sitting quietly, letting thought happen, showing you can bear the pain without rushing to fix it (in Ghanaian conversation, a held silence is respect, not failure); **open-ended questions** — 'Tell me what that has been like' instead of 'Are you sad?'; **reflection and paraphrasing** — returning the patient's own meaning so he hears himself: 'So the nights are the worst.'; **validation** — 'Anyone who lost what you lost would find it heavy.'; **offering self** — 'I will sit with you a while.' Behind them all: active listening, a calm open posture, and greetings that go before questions — in Twi or Dagbani or Ewe as the patient speaks.\n\nNon-verbal culture matters: sustained direct eye contact can read as challenge, especially to elders; a soft gaze, an angled stance and unhurried presence often communicate more safety than a stare. Involve the family where the patient consents — in Ghana, healing is rarely solitary.\n\nThen the blocks — the well-meant phrases that close doors: false reassurance ('you will be fine'), premature advice, 'why' questions that sound like accusations ('Why did you stop your medicine?'), changing the subject, and arguing with beliefs. With hallucinations and delusions, two errors destroy trust: confirming ('yes, the voices are real') and confronting ('there are no voices, stop it'). You cannot debate a person into reality. The middle path: **present reality gently without arguing** — 'I don't hear the voices, but I can see they frighten you, and I want to help.' You treat the fear, not the belief's content — and keep the door, and the disclosure, open.",
      },
      {
        type: "clinical_pearl",
        body: "Never argue with a delusion, and never confirm it. You cannot talk someone out of their reality — but you can talk them out of trusting you, and trust is the only door to treatment. In this work, the relationship is not the soft part of the medicine; it is the medicine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man on your ward has kept to his bed for two days and refused the morning group session. Now he stops you in the corridor and speaks quietly: 'The voices tell me I am useless, and that I should hurt myself.'\n\nWhich replies are therapeutic, and which will close him down?\n\nAnswer: Therapeutic replies stay calm, name the feeling and keep you useful: 'That sounds exhausting — how long have the voices been saying this?' and 'I don't hear them myself, but I believe they frighten you. Are you able to resist them tonight?' — followed by staying nearby and informing the senior nurse, because voices commanding self-harm are a safety issue, not just talk. Closing replies include: 'There are no voices, stop that' (arguing — he learns not to tell you), 'Don't worry, they will go away' (false reassurance), 'Why do you let them upset you?' (accusation), and walking off wordless (abandonment). The belief can wait; the fear and the risk cannot — and the greeting, the soft gaze and the unhurried chair beside him are the treatment's doorway.",
      },
      {
        type: "memory_trick",
        body: "Keep communication **O-P-E-N**: **O**pen questions ('Tell me what it has been like'); **P**araphrase back ('So the nights are the worst'); **E**mpathize and validate ('Anyone would find this heavy'); **N**ever argue with the belief — take the middle path. When the door is OPEN, the assessment walks in.",
      },
      {
        type: "summary",
        body: "- Core techniques: silence, open questions, reflection, validation, offering self — on a base of active listening, proper greeting and cultural awareness of gaze and pace.\n- Blocks: false reassurance, premature advice, 'why' questions, changing the subject, arguing with beliefs.\n- With voices and delusions: neither confirm nor confront — 'I don't hear them, but I can see they frighten you.'\n- Nurse the fear, not the truth of the belief; treat safety first; document exact words.\n- The therapeutic relationship is the treatment's vehicle — protect it with every sentence.",
      },
    ],
    questions: [
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient says, 'The people next door poison my food through the wall.' Which response is most therapeutic?",
        options: [
          "'That is impossible — walls cannot be poisoned through, so stop thinking it.'",
          "'Yes, I have heard the neighbours are dangerous; you are right to be careful.'",
          "'Let us not talk about that; tell me about your family instead.'",
          "'I don't share that belief, but I can see it frightens you — tell me more about how it feels.'",
        ],
        correctIndex: 3,
        explanation:
          "The middle path presents your reality without arguing and immediately addresses the fear. Arguing ('impossible') teaches the patient to hide symptoms; confirming ('you are right') enters the delusion and surrenders your ground; changing the subject closes the door he just opened.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The therapeutic purpose of deliberate silence in a psychiatric conversation is to:",
        options: [
          "Give the patient time to think and show you can wait without rushing",
          "Give you time to write notes unnoticed",
          "Signal disapproval of what was said",
          "Encourage the patient to fill the gap with small talk",
        ],
        correctIndex: 0,
        explanation:
          "Silence communicates patience and safety — the patient may think and feel without being rushed toward 'useful' words. In Ghanaian conversation a held silence carries respect; it is a gift of time, never a punishment or a clerical moment.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following is a communication block rather than a therapeutic technique?",
        options: [
          "'It sounds as though the nights are the hardest for you.'",
          "'Why do you always let these thoughts upset you?'",
          "'Anyone carrying this would find it heavy.'",
          "'I will sit with you for a while.'",
        ],
        correctIndex: 1,
        explanation:
          "'Why' questions sound accusatory and push the patient into defending instead of exploring. Reflection, validation and offering self open; 'why' closes. 'What happened next?' or 'Tell me more' does the same job without the accusation.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a Ghanaian ward, which non-verbal approach best supports therapeutic communication with an elder in distress?",
        options: [
          "Sustained direct eye contact to show confidence",
          "A soft gaze rather than a fixed stare, an unhurried pace, a proper greeting in his own language, and family involved with his consent",
          "Standing over the bed to establish authority",
          "Avoiding any greeting to save consultation time",
        ],
        correctIndex: 1,
        explanation:
          "Culture carries the message as much as words: a fixed stare can read as challenge, standing over a patient as threat, and skipping greeting as disrespect — while the proper greeting, an unhurried manner and consented family presence open the conversation. The technique is the same; the wrapping is Ghanaian.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Therapeutic Communication",
        front: "What does offering of self sound like, and what does it communicate?",
        back: "'I will sit with you a while' — presence and safety without demanding anything of the patient. Often the strongest intervention in the first hour of distress.",
      },
      {
        topic: "Therapeutic Communication",
        front: "How do you respond to a delusion without arguing or confirming?",
        back: "'I don't share that belief, but I can see it frightens you — tell me more.' You treat the fear, leave the debate, and keep the trust — trust is the only door to treatment.",
      },
      {
        topic: "Therapeutic Communication",
        front: "Why are 'why' questions considered blocks?",
        back: "They sound accusatory ('Why did you stop your medicine?') and push the patient into defending instead of exploring. 'What happened?' or 'Tell me what made it difficult' opens the same story.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing",
        note: "Communication chapters; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "Therapeutic Conversations",
    lessonTitle: "Responding to Distress & Aggression",
    description:
      "De-escalation, safety and staying human when a patient's fear turns loud — plus what must happen after the storm.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the escalation cycle and the window in which de-escalation works best.",
      "Apply verbal and non-verbal de-escalation: one voice, calm and low, space, choices, and the need beneath the behaviour.",
      "Explain the after-storm duties — debrief, documentation, care for the patient and for yourself.",
    ],
    tags: ["de-escalation", "safety", "aggression"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One day a patient's fear will turn loud on your watch: the man in withdrawal shouting at the triage desk, the confused elder swinging at the cannula, the young psychotic patient refusing any touch. Your heart will race. That is normal — and manageable, because de-escalation is not bravery or luck. It is a learnable sequence, practised in calm weeks and executed in loud minutes.\n\nThe reframe that carries it: aggression on a ward is almost never wickedness. It is fear, pain, psychosis, withdrawal or helplessness wearing a dangerous coat. You will not always be thanked — but you can keep everyone, including yourself, safe and dignified.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Aggression climbs a cycle: a **trigger** (fear, pain, being restrained, bad news, withdrawal, voices) → **escalation** (pacing, louder voice, clenched fists, rocking, threats) → **crisis** (the strike, the throw, the crash) → **recovery** → **post-crisis depression** (exhaustion, shame, tearfulness — a window for rapport and teaching). The phase to work in is **early escalation** — once the crisis breaks, de-escalation's hour has passed and safety rules.\n\nThe de-escalation sequence: **one voice** — decide who speaks; multiple people shouting is fuel. **Calm and low** — slow your breathing, drop your voice below theirs; let your body (hands visible and open, angled stance, both eyes soft) say safety. **Space** — two arm-lengths, never corner the patient, and keep your own exit clear. **Clear the crowd** — in Ghana a commotion gathers an audience fast, and an audience pressures both of you; kindly move people along or move the situation. **Listen and name** — 'I can see you are angry. Tell me what happened.' **Find the need** — pain needing analgesia, thirst, needing the toilet, wanting to leave, terror of needles, voices commanding — meet it or offer real choices ('Would you like to sit here or walk with me to the quiet room?'). **Never** argue, threaten, mock, corner or rush in to grab. Call for help **early** — security, the male staff, the on-call team — before you need them, not after. Restraint is a **last resort** under clear policy, for the shortest time, never as punishment — Ghana's Mental Health Act protects psychiatric patients from degrading treatment, and the ward's dignity rules are not suspended during a storm. If you cannot de-escalate, withdraw and contain safely: distance is treatment too.\n\n**After the storm**: care for the patient first — injuries assessed, the post-crisis depression met with kindness, not scolding; then the debrief with the team — what triggered it, what worked, what changes in the care plan (a chart flag, a different nurse, a PRN plan agreed with the doctor); then documentation — facts, times, exact words, interventions, injuries, in objective language; then yourself — report any injury, accept support, and talk it through. Nurses who are assaulted and swallow it alone are the ones who leave the profession quietly.",
      },
      {
        type: "table",
        title: "The escalation cycle and your move at each phase",
        body: "| Phase | What you see | Your move |\n| --- | --- | --- |\n| Trigger | Fear, pain, bad news, withdrawal, voices | Meet the need early; remove the pressure |\n| Escalation | Pacing, louder voice, fists, threats, rocking | THE WINDOW: one voice, calm and low, space, clear the crowd, listen, offer choices |\n| Crisis | Strike, throw, crash | Safety of all: distance, call for help, contain per policy — last-resort restraint, brief and dignified |\n| Recovery | Winding down, exhaustion | Low-key presence, basic care — fluids, reassurance |\n| Post-crisis depression | Shame, tearfulness, withdrawal | The teaching window: rapport, review the plan, meet the patient again as a person |",
      },
      {
        type: "clinical_pearl",
        body: "The best de-escalation tool ever invented is a calm, low, unhurried voice used early — while the patient is pacing, not while the crash trolley is flying. And the crowd is the fire's oxygen: clearing the audience is half the intervention on a Ghanaian ward.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man at triage, known to the psychiatric service, is pacing the corridor, shouting that no one will 'inject my blood', and starting to swing his arms at anyone who approaches. A crowd of patients and relatives is gathering, three staff are telling him at once to 'calm down and behave', and his mother is weeping at the edge.\n\nSequence your next two minutes.\n\nAnswer: First, one voice: ask your colleagues to step back and let you (or the most experienced person) speak; the crowd is gently dispersed — 'Please give him space, everyone' — with a colleague quietly guiding people away. You stop two arm-lengths away, hands open and visible, body angled, voice low and slow: 'My brother, my name is Ama. I can see you are angry and afraid. Nobody is touching you.' You listen, and you offer choices: 'No injection is going to happen without your agreement today. Would you like to sit in the quiet room, or walk outside with me and your mother?' Meanwhile help has already been called — not to restrain, but to be present. If he accepts any option, the crisis passes without hands; if he escalates further, you withdraw to distance and the team contains safely per policy, briefly and without humiliation. Afterwards: assess him for injuries, meet the shame of the post-crisis phase with kindness, debrief the team, document facts and exact words, and check on your own shaken self. The patient who was met with dignity will still accept care tomorrow; the patient who was wrestled publicly may not.",
      },
      {
        type: "memory_trick",
        body: "When it rises, run **C.A.L.M.**: **C**ommunicate low and slow, with one voice only; **A**sk what is wrong and acknowledge the anger; **L**imit the crowd and keep two arm-lengths of space with exits clear; **M**eet the need or offer real choices — and call for help early, never as a last gasp.",
      },
      {
        type: "summary",
        body: "- Aggression is fear, pain, psychosis or withdrawal in a dangerous coat — rarely wickedness.\n- The cycle: trigger → escalation → crisis → recovery → post-crisis depression; your window is early escalation.\n- De-escalation: one voice, calm and low, space and exits, crowd cleared, listen and name, find the need, offer choices.\n- Never argue, threaten, mock, corner or grab; call for help early; restraint is a last resort under policy — brief, dignified, never punishment.\n- Afterwards: assess the patient, debrief the team, document objectively with exact words — and report your own injuries and take support. Nurses who swallow assault alone leave quietly.",
      },
    ],
    questions: [
      {
        topic: "De-escalation & Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient at triage is pacing, shouting and clenching his fists. In which phase of the escalation cycle is de-escalation most effective?",
        options: [
          "After the crisis, once he is exhausted",
          "During early escalation — pacing and threats are the window for one calm voice, space and choices",
          "During the crisis itself, when he is striking",
          "Before the trigger ever occurs — the only useful moment",
        ],
        correctIndex: 1,
        explanation:
          "The pacing-and-threats stage is the intervention window: the patient is still reachable by voice, space and choices. At the crisis phase, safety and containment take over; after it, you meet the exhaustion and shame. Prevention is ideal, but the window is the skill.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "De-escalation & Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A commotion on your ward draws a crowd of relatives and patients. In de-escalation terms, the crowd is:",
        options: [
          "Harmless spectators who will calm the situation by their concern",
          "Oxygen on the fire — pressure and audience for both parties; dispersing it kindly is part of the intervention",
          "A security asset that should encircle the patient",
          "Irrelevant to the escalation",
        ],
        correctIndex: 1,
        explanation:
          "An audience raises the stakes: the patient loses face if he stands down, and the staff perform authority instead of calm. Kindly clearing the space — one nurse gently moving people along — removes the oxygen. Encircling is cornering; cornering is fuel.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "De-escalation & Safety",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A psychotic patient refuses an injection and is escalating. Which response best applies C.A.L.M.?",
        options: [
          "Three staff speak at once, loudly insisting he accepts the injection for his own good",
          "Grab him quickly before he becomes stronger, and restrain him to give the dose",
          "One nurse, two arm-lengths away, hands visible, voice low: acknowledge his fear, promise nothing happens without agreement today, and offer choices — while help is called early",
          "Ignore the behaviour; it will exhaust itself in time",
        ],
        correctIndex: 2,
        explanation:
          "One voice, low and slow, space, named fear, real choices and early backup are the sequence — with honesty ('nothing without your agreement today') replacing force. Multiple loud voices and grabbing are escalation fuel; ignoring a rising patient is abandoning the window.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "De-escalation & Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After an aggressive incident is resolved, which set of actions completes the professional duty?",
        options: [
          "Punish the patient with restricted visiting to teach a lesson",
          "Assess the patient for injuries and meet the post-crisis shame kindly; debrief the team; document objectively with times and exact words; report and support any staff member who was hurt",
          "Forget it — the shift is nearly over",
          "Assign the patient only to male nurses as a permanent rule, undocumented",
        ],
        correctIndex: 1,
        explanation:
          "The after-storm duties are four: care (injuries, dignity, revised plan), team learning (debrief), record (facts, quotes, interventions) and self (injuries reported, support taken). Punishment has no therapeutic role, silence breeds repeat events, and informal undocumented rules harm care.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "De-escalation & Safety",
        front: "Name the phases of the escalation cycle and the intervention window.",
        back: "Trigger → escalation → crisis → recovery → post-crisis depression. The window is early escalation (pacing, shouting, threats) — one calm voice still works there.",
      },
      {
        topic: "De-escalation & Safety",
        front: "What does C.A.L.M. stand for?",
        back: "Communicate low and slow with one voice; Ask what is wrong and acknowledge the anger; Limit the crowd and keep two arm-lengths with exits clear; Meet the need or offer real choices — calling for help early, never as a last gasp.",
      },
      {
        topic: "De-escalation & Safety",
        front: "Why is restraint a last resort, and what rules govern it?",
        back: "It risks harm and humiliation and breaks trust — used only when safety demands it, per clear policy, for the shortest time, never as punishment; Ghana's Mental Health Act protects patients from degrading treatment.",
      },
      {
        topic: "De-escalation & Safety",
        front: "List the four after-storm duties.",
        back: "Care for the patient (injuries, post-crisis shame met with kindness, plan revised); debrief the team; document objectively with times and exact words; report and support the harmed nurse — swallowed assault empties the profession.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Government of Ghana",
        title: "Mental Health Act, 2012 (Act 846)",
        year: "2012",
        note: "Rights protections including freedom from degrading treatment.",
      },
      {
        organization: "ILO / ICN / WHO / PSI",
        title: "Framework Guidelines for Addressing Workplace Violence in the Health Sector",
        year: "2002",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing",
        note: "Aggression and de-escalation chapters; verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "Mental Health in Ghana",
    lessonTitle: "Culture, Stigma & Mental Health in Ghana",
    description:
      "Spiritual causes, the prayer camps, the family burden — seeing the real context of Ghanaian mental illness, and the nurse's part in softening it.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the forms of stigma — public, self, courtesy and structural — as they appear in Ghana.",
      "Explain common Ghanaian attributions and pathways of care for mental illness, and their effect on presentation.",
      "Apply person-first language, confidentiality and family engagement to reduce stigma on the ward.",
    ],
    tags: ["ghana", "stigma", "culture"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Imagine having a condition the neighbours would call madness, that relatives hide from visitors, whose treatment exists — but reaching for it costs your family its name. That is stigma, and in mental health it is often a bigger barrier than the disease itself.\n\nIn Ghana the barrier has deep roots: illness attributed to curses, witchcraft or spiritual attack; treatment sought first from prayer camps, prophets and healers; families who hide the member to protect the family name. This lesson asks you to see that context clearly — including the part health workers quietly build — and to choose your side. The law already has: the Mental Health Act, 2012 (Act 846) protects the rights of persons with mental disorder and prohibits degrading treatment.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Stigma wears several coats. **Public stigma** is the community's stereotype — the 'mad person', feared as dangerous or blamed as cursed. **Self-stigma** is the label swallowed: shame, secrecy, giving up on help. **Courtesy stigma** splashes onto families, who hide the relative to guard the family name — and delay care for years. **Structural stigma** lives in systems: mental health services left underfunded while other services find budgets.\n\nThe Ghanaian pathway to care explains what arrives at your gate: first the spiritual interpretation ('this is not a hospital sickness'), then the prayer camp or healer — sometimes for months — and the hospital last, often late, with the illness advanced and the family exhausted. Some camps provide prayer and community; conditions in others — chaining, starvation — are human-rights concerns that Act 846 exists to end. Your response is never ridicule of faith: it is respect, partnership and a clinical door held open — healers and faith leaders who refer early are allies; a queen mother who repeats your message outperforms a hundred leaflets.\n\nYour antidotes are quiet and powerful. **Person-first language**: 'a man living with schizophrenia', never 'a mad man' or 'a psycho'. Confidentiality guarded fiercely in a community where gossip travels like light. Calm education: these conditions are common and treatable, and recovery is real — contact with a recovered person is the single best stigma breaker there is. Family engagement: burdened families need teaching, relief and respect, not judgement. And watch your corridor talk — the whole ward, and every family listening outside the door, learns how to treat patients from how you speak about them when you think no one who matters is listening.",
      },
      {
        type: "clinical_pearl",
        body: "Stigma is contagious — but so is respect. The way you talk about a psychiatric patient at the nurses' table teaches the entire ward, and every family listening outside the door, how to treat her. Person-first language is free, and it changes rooms.",
      },
      {
        type: "case",
        title: "In the field",
        body: "A father stops you outside the consulting room and glances over his shoulder before speaking. 'Please,' he whispers, 'is my son mad? Don't write it anywhere. He was at the prayer camp eight months — the pastor said an evil spirit. Now he is worse. My brother says hospital means the family is finished.' His son, 24, sits inside: thin, talking to himself, not sleeping.\n\nHow do you answer him — protecting both the son and the truth?\n\nAnswer: Treat the stigma and the illness in the same breath. Name it plainly and kindly: the son is not mad; he has a treatable illness of the brain — psychosis — and eight months of it has made things worse, which is exactly what delay does; early treatment brings recovery, and people with this illness finish school, work and marry. Reassure him that confidentiality is your professional duty — nothing leaves that room. Recruit him as part of the treatment: his son will need his steadiness, his meals, his follow-up. Respect the faith without surrendering the medicine: 'The pastor prayed with love — the medicine is part of the same care now.' Then care for the young man: assess risk, involve the mental health pathway, document. If the father still asks you to write something else, the answer is gentle and firm: the record must protect the son, and a hidden diagnosis cannot. The family's name survives illness; it rarely survives silence.",
      },
      {
        type: "memory_trick",
        body: "Stigma works like a **STAMP**: **S**tereotypes get terrifying, so families **A**void, the label **M**arks the whole family, and everyone **P**ostpones help. Your calm, person-first, confidential care lifts the stamp — and every recovered patient seen at the market peels one off the whole community.",
      },
      {
        type: "summary",
        body: "- Stigma arrives as public, self, courtesy (family) and structural forms — all delaying care and breaching rights.\n- Ghanaian pathways often run through spiritual attribution, prayer camps and healers before the hospital — late, advanced, exhausted.\n- Mental Health Act 846 (2012) protects rights and prohibits degrading treatment; chaining and starvation are human-rights concerns.\n- Antidotes: person-first language, confidentiality, calm education (common and treatable), contact with recovered people, family engagement.\n- Respect faith and partner with its leaders — a referring healer or a repeating queen mother extends your safety net.\n- Corridor talk is teaching material: the ward copies how you speak about mental illness.",
      },
    ],
    questions: [
      {
        topic: "Stigma & Culture",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A family hides a relative with psychosis at home for months to protect the family name. This is best described as:",
        options: [
          "Self-stigma; the cost is only to the patient's pride",
          "Courtesy stigma — stigma by association — and its cost is delayed treatment and worsened illness",
          "Structural stigma caused entirely by government policy",
          "Public stigma with no effect on care-seeking",
        ],
        correctIndex: 1,
        explanation:
          "Courtesy stigma lands on families: the label splashes, the relative is hidden, and hiding is what delays treatment, deepens the illness and sometimes ends in preventable death. Naming it correctly points your care at the family as well as the patient.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Stigma & Culture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which Ghanaian law protects the rights of persons with mental disorder and prohibits degrading treatment?",
        options: [
          "The Mental Health Act, 2012 (Act 846)",
          "The National Health Insurance Act, 2012 (Act 852)",
          "The Labour Act, 2003 (Act 651)",
          "There is no such law in Ghana",
        ],
        correctIndex: 0,
        explanation:
          "The Mental Health Act, 2012 (Act 846) established the Mental Health Authority and protects the rights of persons with mental disorder — including protection from degrading treatment such as chaining. It is the legal ground your advocacy stands on.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Stigma & Culture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A father begs you to write a different diagnosis in his son's notes so the family name survives. Your best response is to:",
        options: [
          "Agree — family harmony is part of care",
          "Write something vague like 'weakness' to satisfy him",
          "Explain gently that the record exists to protect his son — a hidden diagnosis cannot be treated, handed over or defended — and that confidentiality is your duty; then recruit him into the treatment",
          "Refuse coldly and report him to the police",
        ],
        correctIndex: 2,
        explanation:
          "The clinical record protects the patient: the next team must know what they are treating, and follow-up, prescribing and safety all hang on it. Falsifying a diagnosis betrays the son and the profession. The kind path is honesty plus confidentiality plus recruitment of the father into care — the family's name survives illness far better than it survives silence.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Stigma & Culture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which nursing behaviour most directly reduces public stigma on a general ward?",
        options: [
          "Keeping psychiatric patients away from other patients entirely",
          "Referring to patients by their conditions in corridor talk so staff learn the terms",
          "Using person-first language ('a man living with schizophrenia') and explaining calmly that the condition is common and treatable",
          "Restricting family visits for psychiatric patients",
        ],
        correctIndex: 2,
        explanation:
          "Person-first language replaces the label with the person, and calm education replaces fear with facts. Isolation, careless corridor labels and restricted visiting all deepen the very stigma that delays care — and the whole ward learns from how you speak.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Stigma & Culture",
        front: "Name the four types of stigma with one Ghanaian example each.",
        back: "Public ('mad person' stereotype); self-stigma (shame, giving up on help); courtesy (family hides the relative); structural (mental health underfunded). Each one delays care.",
      },
      {
        topic: "Stigma & Culture",
        front: "What does Ghana's Mental Health Act 846 (2012) provide?",
        back: "It established the Mental Health Authority, protects the rights of persons with mental disorder and prohibits degrading treatment — the legal ground for ending practices like chaining.",
      },
      {
        topic: "Stigma & Culture",
        front: "What is person-first language? Give an example.",
        back: "Naming the person before the condition: 'a man living with schizophrenia' — never 'a mad man', 'a psycho' or 'a schizophrenic'. Free, respectful, and it changes how rooms treat people.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "World Mental Health Report: Transforming Mental Health for All",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240049338",
      },
      {
        organization: "Government of Ghana",
        title: "Mental Health Act, 2012 (Act 846)",
        year: "2012",
      },
      {
        organization: "World Health Organization",
        title: "WHO-AIMS Report on Mental Health System in Ghana",
        note: "System and treatment-gap context; verify current data with the Mental Health Authority.",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing",
        note: "Stigma and culture chapters; verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "mental-health-nursing-1",
    moduleTitle: "Mental Health in Ghana",
    lessonTitle: "The Psychiatric Survivor's Journey to Care",
    description:
      "From first episode to the classroom, market stall and pulpit — the services a survivor moves through, and the nurse's part at every step of the road home.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the survivor's pathway: recognition, spiritual and community routes, admission, treatment and community reintegration.",
      "Explain the nurse's contribution at each step — recognition, referral, ward care, discharge teaching and follow-up.",
      "Apply relapse-prevention teaching and the recovery model, with Ghana's mental health services in view.",
    ],
    tags: ["recovery", "services", "reintegration"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Mental illness does not begin at the psychiatric hospital gate, and recovery does not end there either. The survivor's journey runs from the first strange night in the family house, through healers and prayer camps and CHPS compounds, into admission — and back out again, to the market stall, the classroom and the church. Every step of that road has a nurse standing on it, if the system has trained her to stand there.\n\nThis lesson walks the whole road, so you can see your own place on it — whether you are the community nurse who recognizes the first episode, the ward nurse who rebuilds a shattered person, or the follow-up nurse who keeps the recovery alive.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The road to care.** A first episode — often in a young adult — is usually interpreted spiritually and carried first to prayer camps, prophets or healers; some families arrive at the CHPS compound or clinic within weeks, others only after months of delay. The community nurse's part: recognize psychosis and severe depression early, engage the family without ridiculing their path, arrange referral, and teach the household while the journey is being made. **Admission**, when needed, happens in the psychiatric hospitals — Accra, Pantang and Ankaful — or in regional and district units with mental health beds; the ward nurse's part: safety, medication support and observation of side effects, structured daily living, therapeutic relationship, family teaching, and discharge planning that begins on day one.\n\n**The road home.** Discharge is not the finish line — it is the start of the part where most relapses happen. The nurse's part in the community: follow-up through mental health units and community mental health officers, adherence support (medicines run out; money runs out; clinics are far — solve the practical or the tablets stop), relapse-signature teaching (sleep disturbance first, then withdrawal or quickened speech, then the storm — call the clinic at the first sign, not the third), family support and respite, and watch for the threats to recovery: unemployment, stigma, substance use. The recovery model frames all of it: people with severe mental illness can and do live, work, marry, worship and raise children — the professional's job is not to manage patients but to support lives. Peer support and survivor groups — where recovered persons counsel and employ each other — are among the strongest medicines on the road home.",
      },
      {
        type: "table",
        title: "The journey and the nurse standing on each step",
        body: "| Step | What happens | The nurse's part |\n| --- | --- | --- |\n| First episode | Strange behaviour, voices, withdrawal in a young adult | Recognize early; engage the family without blame; refer; teach the household |\n| Community routes | Prayer camps, healers, then clinic or CHPS | Respect the path, hold the clinical door open, build referral alliances |\n| Admission | Psychiatric hospitals (Accra, Pantang, Ankaful) or mental health units | Safety, medicines and side-effect watch, structure, therapeutic relationship, day-one discharge planning |\n| Treatment | Medicines, therapy, ward routines | Adherence support, side-effect reporting, skill rebuilding, family teaching |\n| Discharge & follow-up | Community mental health officers, clinics, reviews | Relapse-signature teaching, adherence problem-solving, family support, respite |\n| Reintegration | Work, school, market stall, church, family roles | Recovery model in action: livelihood support, peer groups, anti-stigma work |",
      },
      {
        type: "clinical_pearl",
        body: "Relapse writes its signature before it arrives: sleep first, then speech or withdrawal, then the storm. A family that has been taught to call the clinic at the first line of that signature has been given the most powerful relapse prevention in psychiatry — and it costs one conversation.",
      },
      {
        type: "case",
        title: "On the road",
        body: "Kwabena, 24, a teacher, hears his first voices during national service. His family reads it spiritually and he spends eight months at a prayer camp. When he arrives at the regional hospital — thin, frightened, talking to himself — a mental health nurse greets the family without a word of blame for the delay, assesses him, and admits him. Six weeks of treatment later he is sleeping, quieter, beginning to laugh again. On discharge, the nurse sits with the family for the teaching that decides the next decade: the medicines must continue even when he feels well; the relapse signature — sleep shortening, talking faster, new projects — means call the clinic that week; the follow-up dates are written in the booklet; and the community mental health officer's name and number are in the father's phone. A year on, Kwabena teaches again, with one early relapse caught at the first sleepless week and corrected before the storm.\n\nWhere were the decisive nursing moments on this road?\n\nAnswer: Four of them. The hospital nurse who received the family without blame — turning shame into alliance — because ridicule would have sent them back to the camp. The ward weeks of medication, side-effect watch and therapeutic relationship that returned a mind. The discharge teaching that armed the family with the relapse signature and the officer's number — the difference between a corrected wobble and a second admission. And the follow-up call taken seriously at the first sleepless week, a year later. Kwabena's recovery was pharmacology plus four nurses' worth of continuity — and every one of those moments is a skill this course has taught you.",
      },
      {
        type: "memory_trick",
        body: "The road home is **R.O.A.D.**: **R**ecognition (early, community, first episode); **O**fficial care pathway (clinic → admission at the psychiatric hospitals or units); **A**dmission and treatment (medicines, structure, relationship); **D**ischarge with support (follow-up, adherence, relapse signature, reintegration). Every step has a nurse on it — that is the design.",
      },
      {
        type: "summary",
        body: "- The journey: first episode → spiritual and community routes → admission → treatment → discharge → community reintegration.\n- Ghana's inpatient base: the psychiatric hospitals — Accra, Pantang and Ankaful — plus regional and district mental health units; community follow-up through mental health officers.\n- The nurse's parts: early recognition and referral; ward safety, medicines and relationship; discharge teaching; follow-up adherence and relapse prevention.\n- Relapse signature: sleep disturbance first, then speech or withdrawal, then the storm — teach families to call at the first sign.\n- Recovery is the expectation: work, school, marriage, parenthood — supported by adherence, follow-up, peer groups and anti-stigma work.\n- Practical threats — medicine cost, distance, unemployment — are clinical problems: solve them or the tablets stop.",
      },
    ],
    questions: [
      {
        topic: "Recovery Journey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A young man with schizophrenia is being discharged home. Which teaching most protects him from relapse in the next year?",
        options: [
          "To stop his medicines once he feels completely well",
          "The relapse signature — sleep disturbance first, then changes in speech or withdrawal — with the family instructed to call the clinic at the first sign, and the medicines to continue unless the clinic says otherwise",
          "That follow-up visits are only for crises",
          "That the family should hide his medicines from him",
        ],
        correctIndex: 1,
        explanation:
          "Relapse broadcasts its signature early — sleep first, then speech and behaviour — and the family that calls at the first line catches the wobble before the storm. Continuation of medicines unless the clinic decides otherwise, plus follow-up, completes the protection. Stopping when 'well' is the commonest cause of the next admission.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Recovery Journey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which institutions form Ghana's main inpatient base for psychiatric care?",
        options: [
          "The teaching hospitals' maternity blocks",
          "The psychiatric hospitals — Accra, Pantang and Ankaful — together with regional and district mental health units",
          "Private clinics alone",
          "CHPS compounds provide inpatient psychiatric care",
        ],
        correctIndex: 1,
        explanation:
          "Specialized inpatient care centres on the psychiatric hospitals — Accra, Pantang and Ankaful — supplemented by regional and district mental health beds, with CHPS compounds and clinics carrying community follow-up rather than admission.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Recovery Journey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family arrives at the regional hospital after eight months at a prayer camp, ashamed and defensive. The nurse's most constructive first move is to:",
        options: [
          "Lecture them on the delay so they learn for next time",
          "Receive them without blame, engage the father as an ally, assess the patient — and build the teaching and follow-up plan on that alliance",
          "Ask them to return to the camp for the pastor's permission first",
          "Record 'non-compliant family' in the notes",
        ],
        correctIndex: 1,
        explanation:
          "The delay is history; the alliance is the treatment's vehicle. A family met without shame stays in care, takes the teaching, and calls early at the next signature — a family lectured returns to the camp. Blame in the notes is neither data nor care.",
        courseSlug: "mental-health-nursing-1",
      },
      {
        topic: "Recovery Journey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Three months after discharge, a survivor stops attending follow-up; his medicines finished two weeks ago and he cannot afford transport. The nurse's correct interpretation is:",
        options: [
          "He has decided to relapse — it is his choice",
          "Practical barriers are clinical problems: solve them — medicine access through the clinic's channels, transport planning, family involvement — or the tablets stop and the relapse follows",
          "The case is closed — defaulters must re-refer themselves",
          "Only the psychiatrist can address adherence",
        ],
        correctIndex: 1,
        explanation:
          "Adherence is not a character trait; it is a system the nurse actively builds — medicine supply solved, transport planned, family engaged, follow-up made reachable. Where the system fails, the relapse is a system event, not a moral one, and the community nurse is the system's hands.",
        courseSlug: "mental-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Recovery Journey",
        front: "What does R.O.A.D. describe in the psychiatric survivor's journey?",
        back: "Recognition (first episode, community), Official care pathway (clinic and admission at the psychiatric hospitals or units), Admission and treatment, Discharge with support (follow-up, adherence, relapse signature, reintegration) — a nurse stands on every step.",
      },
      {
        topic: "Recovery Journey",
        front: "Name Ghana's psychiatric hospitals.",
        back: "Accra Psychiatric Hospital, Pantang Hospital and Ankaful Psychiatric Hospital — with regional and district mental health units carrying the rest.",
      },
      {
        topic: "Recovery Journey",
        front: "What is the relapse signature, and what should the family do with it?",
        back: "Sleep disturbance first, then quickened speech or withdrawal, then the storm. The family calls the clinic at the first sign — an early, cheap, treatable wobble instead of a second admission.",
      },
      {
        topic: "Recovery Journey",
        front: "What does the recovery model promise and require?",
        back: "It promises that people with severe mental illness can live, work, marry and raise children — and it requires adherence support, follow-up, livelihood, peer support and anti-stigma work from the professionals around them.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Mental Health Authority, Ghana",
        title: "Mental Health Service Directory and Annual Reports",
        note: "Facilities, community mental health services and staffing; verify current data.",
      },
      {
        organization: "Government of Ghana",
        title: "Mental Health Act, 2012 (Act 846)",
        year: "2012",
      },
      {
        organization: "World Health Organization",
        title: "World Mental Health Report: Transforming Mental Health for All",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240049338",
      },
    ],
  },
];
