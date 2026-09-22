// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch A (Medical & Surgical Nursing III)
// 20 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Heart Under Strain",
    lessonTitle: "Hypertension: The Silent Threat",
    description:
      "One in three Ghanaian adults is walking around with high blood pressure — most of them feeling perfectly fine. Here is how to measure it properly, what it quietly damages, and how your nursing keeps hearts, brains and kidneys safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define hypertension using the standard thresholds and explain why it is called the silent killer.",
      "Demonstrate correct blood pressure measurement technique, including patient preparation and cuff choice.",
      "Describe the four target organs damaged by long-standing hypertension and the complications of each.",
      "Apply lifestyle and adherence counselling for a patient with newly diagnosed hypertension in a Ghanaian community.",
    ],
    tags: ["hypertension", "blood pressure", "cardiovascular", "health screening"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A man of 48 walks into your district hospital outpatient department for a letter — he feels completely well. You check his blood pressure as routine and it reads 168 over 98. He smiles and says, 'But I am strong, I have no problem.'\n\nThat sentence is exactly why hypertension is called the **silent killer**. It damages the body for ten or more years before the first symptom — and the first symptom is often a stroke, a heart attack or kidney failure. Your sphygmomanometer sees what the patient cannot feel, and the nurse who measures properly becomes the first line of defence.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Hypertension** is persistently raised pressure in the arteries. Using the widely taught adult classification, **normal** is below 120 over 80, and **hypertension** is 140 or more systolic, or 90 or more diastolic, confirmed on more than one occasion. In most cases there is no single identifiable cause — this is **primary (essential) hypertension**, driven by genetics, age, salt intake, obesity, alcohol, stress and inactivity. A minority are **secondary**, caused by kidney disease, some endocrine conditions or certain medicines.\n\nThe pressure itself injures vessel walls year after year. The **arterioles** thicken and narrow, the **left ventricle** hypertrophies from pushing against high resistance, and tiny vessels in the brain, kidney and eye rupture or clog. That is how the silent years become the loud emergency: **stroke**, **heart failure**, **chronic kidney disease**, **retinopathy** and **coronary disease**.",
      },
      {
        type: "table",
        title: "Blood pressure categories in adults",
        body: "| Category | Systolic (mmHg) | and/or | Diastolic (mmHg) | What the nurse does |\n|---|---|---|---|---|\n| Normal | below 120 | and | below 80 | Reassure; reinforce healthy lifestyle |\n| Elevated | 120–129 | and | below 80 | Lifestyle counselling; review as advised |\n| Stage 1 hypertension | 130–139 | or | 80–89 | Recheck; report for management decisions |\n| Stage 2 hypertension | 140 or more | or | 90 or more | Confirm on repeat; refer and support treatment |\n| Hypertensive crisis | 180 or more | and/or | 120 or more | Rapid assessment for organ damage; urgent escalation |\n\nThresholds are confirmed on repeated measurement — never label a person hypertensive from one anxious reading in a busy OPD. A hypertensive **crisis with signs of organ damage** — chest pain, breathlessness, visual blurring, weakness, confusion — is an emergency, not a prescription refill.",
      },
      {
        type: "clinical_pearl",
        body: "The reading belongs to the moment, not the patient. Sit for five minutes, back supported, feet flat on the floor, arm bare and supported at heart level, no talking, no full bladder, correct cuff width for the arm. Use the same arm for follow-up, and in a new patient compare both arms. A rushed, wrong reading can start a decade of unnecessary treatment — or miss the silent killer entirely.",
      },
      {
        type: "quiz_prompt",
        title: "The tired businessman",
        body: "At a health screening durbar, a trader measures 152 over 96. He is rushing to load goods and asks you to write down the number quickly. What must happen before that reading is called hypertension?\n\nAnswer: Repeat measurement after proper rest and correct technique — on a separate occasion — before any label or lifelong treatment. Explain calmly that single readings, especially taken in a hurry or stress, can be falsely high, and book him for a recheck while encouraging salt reduction, weight awareness and physical activity from today.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 60-year-old seamstress, known hypertensive for six years, presents with a two-day history of severe headache and blurred vision. Her daughter says she has stopped attending clinic because 'the medicines finished and she feels fine.' Her blood pressure is 196 over 118. What does this picture mean and what is your nursing priority?\n\nAnswer: This is a hypertensive crisis with probable target-organ effects — the blurred vision points to retinal or brain involvement, and the headache may precede stroke. Your priority is rapid, calm escalation: keep her seated and quiet, take full vital signs, perform a quick neurological check, inform the medical team immediately and never leave her alone. The missed clinic visits and 'feeling fine' remind you why adherence counselling and affordable follow-up are part of treatment, not an extra.",
      },
      {
        type: "callout",
        title: "Salt is a Ghanaian family matter",
        body: "Most dietary sodium here hides in processed seasoning cubes, salted dried fish and koobi, tinned sauces and instant noodles — not the pinch added at the table. Teach the whole household, because the pot is shared. Salt reduction, more vegetables and fruit, brisk walking most days, weight reduction where needed, limited alcohol and no tobacco are the pillars of lifestyle therapy that every patient hears from you — in plain, respectful language.",
      },
      {
        type: "memory_trick",
        body: "Hypertension HITS the big four target organs from the neck down: **Brain** (stroke), **Heart** (failure and infarction), **Kidneys** (failure), **Eyes** (retinopathy and blindness). And remember the rule of silence: pressure that argues for ten years without raising its voice — until the wall falls.",
      },
      {
        type: "summary",
        body: "- Hypertension is persistently 140/90 or higher — confirmed, never diagnosed from one reading.\n- It is mostly primary, silent for years, and its first symptom is often the first emergency.\n- Correct technique transforms the reading into truth: rested patient, supported arm at heart level, right cuff, no talking.\n- Target organs: brain, heart, kidneys, eyes — the complications you are preventing.\n- 180/120 or more with organ-damage signs is a crisis: assess fast, escalate fast, stay with the patient.\n- Lifestyle counselling — salt, weight, activity, alcohol, tobacco — plus adherence support is nursing treatment, not decoration.",
      },
    ],
    questions: [
      {
        topic: "Hypertension",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is hypertension called the 'silent killer'?",
        options: [
          "Because it is caused by an invisible organism",
          "Because it usually produces no symptoms while it silently damages organs for years",
          "Because patients secretly stop taking their medicines",
          "Because blood pressure machines make no sound during measurement",
        ],
        correctIndex: 1,
        explanation:
          "Hypertension damages vessels and target organs over many years without symptoms, so the first presentation may be a stroke, heart failure or kidney disease. The name is a warning to screen and treat early, not a literal silence.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Blood Pressure Measurement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best describes correct blood pressure measurement technique?",
        options: [
          "Patient standing, arm hanging down, talking to relax him, any cuff available",
          "Patient seated after five minutes of rest, arm supported at heart level, correct cuff size, no talking during measurement",
          "Patient lying flat, arm above head, cuff applied over thick clothing for comfort",
          "Patient seated, arm below heart level, cuff inflated slowly to save time",
        ],
        correctIndex: 1,
        explanation:
          "Rest, back support, an uncovered arm supported at heart level, correct cuff width and silence give the true reading. Arm position below the heart or a cuff over clothing falsely raises the pressure, and a cuff that is too small overestimates.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Hypertension",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient's blood pressure is 192 over 118 and she complains of blurred vision and severe headache. What does this combination demand?",
        options: [
          "A routine appointment next week with a letter for refills",
          "Immediate re-measurement in both arms and discharge if she walks in unaided",
          "Urgent assessment and escalation, because this is a hypertensive crisis with probable organ damage",
          "Reassurance that headache is common with stress and she should rest at home",
        ],
        correctIndex: 2,
        explanation:
          "Severely raised pressure plus symptoms of organ involvement — visual change, severe headache, neurological signs — defines a hypertensive emergency pathway. She needs rapid medical review, close monitoring and must not be sent home with reassurance.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Hypertension",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Long-standing poorly controlled hypertension causes left ventricular hypertrophy. What is the mechanism behind this change?",
        options: [
          "The ventricle muscle thickens because it must pump against persistently high arterial resistance",
          "The ventricle dilates because excess salt is stored inside the muscle cells",
          "The heart muscle is infected and swells in response to circulating bacteria",
          "The valves thicken and force the chamber to enlarge passively",
        ],
        correctIndex: 0,
        explanation:
          "Chronic high afterload — the resistance the ventricle pushes against — makes the myocardium hypertrophy, like a weightlifter's muscle. This thickened, stiff ventricle eventually fails, which is how hypertension becomes heart failure.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Hypertension",
        front: "What blood pressure defines hypertension in adults, and when do you label someone hypertensive?",
        back: "140/90 mmHg or higher, confirmed by properly repeated measurements on separate occasions — never from one rushed reading.",
      },
      {
        topic: "Target Organs",
        front: "Name the four target organs damaged by chronic hypertension and one complication of each.",
        back: "Brain — stroke; Heart — heart failure and coronary disease; Kidneys — chronic kidney disease; Eyes — retinopathy and blindness.",
      },
      {
        topic: "Measurement",
        front: "State four technique rules for an accurate blood pressure reading.",
        back: "Patient rested about five minutes, seated with back supported; arm bare and supported at heart level; correct cuff size for the arm; no talking and no full bladder during measurement.",
      },
      {
        topic: "Crisis",
        front: "What defines a hypertensive emergency rather than just severe hypertension?",
        back: "Very high blood pressure (commonly 180/120 or more) WITH signs of target-organ damage — chest pain, breathlessness, neurological signs, visual loss, confusion. It is an escalation-now situation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guideline for the Pharmacological Treatment of Hypertension in Adults",
        year: "2021",
      },
      {
        organization: "Ghana Health Service",
        title: "National Strategy for the Prevention and Control of Chronic Non-Communicable Diseases",
        note: "Ghana national NCD guidance; verify current edition at GHS Health Policy, Research, Innovation and Data Management Division.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on hypertension and cardiovascular assessment. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Heart Under Strain",
    lessonTitle: "Heart Failure: When the Pump Tires",
    description:
      "When the pump weakens, fluid backs up and the whole body feels it — swollen ankles by evening, three pillows by night, a frightening gasp at 2 am. Learn to read the failing heart and nurse it day by day.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Explain the pathophysiology of heart failure using the forward-failure and backward-congestion framework.",
      "Distinguish left-sided from right-sided heart failure by their signs and common causes.",
      "Prioritise nursing care in acute pulmonary oedema and in chronic stable heart failure, including daily weights and fluid monitoring.",
      "Construct discharge education that reduces readmission — weight watching, salt and fluid limits, and medication adherence.",
    ],
    tags: ["heart failure", "pulmonary oedema", "cardiovascular", "fluid balance"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The heart is a muscular pump, and like any pump it can weaken. When it can no longer move blood forward efficiently, two things happen at once: the tissues receive less blood (**forward failure** — fatigue, weakness, reduced urine output), and blood dams back behind the failing pump (**backward failure** — congestion). Which side of the heart tires first decides where the congestion lands, and your nursing eyes will see it in the lungs or in the ankles.\n\nIn Ghana, the tired pump usually has a story behind it: decades of untreated hypertension, rheumatic heart disease from childhood sore throat, cardiomyopathies including the postpartum type, and the strain of chronic severe anaemia. You are not just nursing a heart — you are nursing the road that brought it here.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Left-sided failure** congests the lungs. Blood backs into pulmonary veins, fluid leaks into the lung tissue, and the patient reports exertional breathlessness, **orthopnoea** (needing extra pillows to sleep), **paroxysmal nocturnal dyspnoea** (waking at night gasping) and a cough that may froth pink. Your stethoscope finds crackles at the bases and the chest X-ray shows congestion.\n\n**Right-sided failure** congests the body behind it: dependent **oedema** — swollen ankles that pit under your thumb — engorged neck veins, an enlarged tender liver and abdominal fullness. In our setting, a lung disease such as advanced COPD can strain the right heart for years (**cor pulmonale**), and severe chronic anaemia overworks the whole heart until it fails.\n\nThe **New York Heart Association (NYHA)** grading scales the patient's own experience from class I (no limitation) to class IV (symptoms at rest) — a language the whole team uses to track response to treatment.",
      },
      {
        type: "table",
        title: "Left versus right heart failure at a glance",
        body: "| Feature | Left-sided failure | Right-sided failure |\n|---|---|---|\n| Where fluid backs up | Lungs | Systemic circulation |\n| Hallmark symptoms | Exertional dyspnoea, orthopnoea, night-time gasping, cough | Swollen ankles, abdominal fullness, fatigue, weight gain |\n| Key signs | Bibasal crackles, tachypnoea, frothy sputum in acute oedema | Pitting oedema, raised JVP, tender hepatomegaly |\n| Common Ghanaian causes | Hypertension, coronary disease, cardiomyopathy | Cor pulmonale from COPD, rheumatic valve disease, chronic severe anaemia |\n| Nursing watch-points | Respiratory rate, oxygen saturation, position, daily weight | Daily weight, fluid balance, skin care over oedematous ankles |\n\nMost patients in advanced failure have both sides involved — the left usually tires first and eventually overworks the right.",
      },
      {
        type: "clinical_pearl",
        body: "One kilogram of sudden weight equals about one litre of retained fluid. The daily weight — same scale, same time each morning, similar clothing, after voiding — is the single most sensitive measure of creeping fluid overload. A gain of two kilograms in three days is a reportable warning, not a dieting comment.",
      },
      {
        type: "case",
        title: "2 am on the ward",
        body: "You are the night nurse. A 58-year-old woman admitted with heart failure suddenly sits bolt upright, gripping the rails. She is pale and drenched in sweat, breathing fast and loud, and coughing pink frothy sputum. What is happening, and what are your first actions?\n\nAnswer: This is acute pulmonary oedema — the failing left ventricle has let fluid flood her lungs. Sit her upright with legs dependent to pool blood away from the chest, give oxygen as prescribed, alert the medical team immediately, and stay with her — fear raises catecholamines and worsens the workload. This is one emergency where your positioning starts treatment before any trolley arrives.",
      },
      {
        type: "quiz_prompt",
        title: "The disappearing urine",
        body: "The same patient's urine output drops to small amounts by afternoon while her weight rises. Why does a failing heart reduce urine output, and why does this make her congestion worse?\n\nAnswer: Reduced cardiac output delivers less blood to the kidneys, so they filter less — less urine. The retained fluid adds to the circulating volume the heart cannot handle, worsening oedema. The kidneys and the failing heart trap each other, which is why the fluid balance chart is as important as any medicine you give.",
      },
      {
        type: "text",
        title: "Day-by-day nursing care",
        body: "Your routine is the treatment. Record **daily weight** and a strict **fluid intake–output chart**; give prescribed fluid and salt restriction humanely — small frequent fluids, a salty-food plan the family can actually cook; administer diuretics early in the morning so the patient is not up all night passing urine, and watch for the hidden costs of diuresis — low potassium, which causes weakness and dangerous arrhythmias. For patients on digoxin, count the **apical pulse for one full minute** before administration and report a rate below 60 — and teach the family to report nausea, visual yellowing or slow irregular pulse.\n\nPosition the breathless patient upright; rest the exhausted body with planned activity; inspect and moisturise oedematous skin, which breaks down and heals slowly. Above all, teach: take medicines every single day even when feeling well, come for refill before tablets finish, weigh at home every morning, and come to clinic for the two-kilogram warning.",
      },
      {
        type: "memory_trick",
        body: "LEFT fails, LUNGS flood. RIGHT fails, the REST swells. For the emergency, remember 'Sit, Oxygen, Summons, Stay' — sit her up, oxygen as prescribed, summon the team, stay with her. For the long game: W.E.I.G.H.T. — Weigh daily, Eat less salt, Inspect skin, Gain of 2 kg means go to clinic, Hold the fluid limit, Take tablets daily.",
      },
      {
        type: "summary",
        body: "- Heart failure is forward failure (poor output, fatigue, low urine) plus backward congestion (fluid behind the pump).\n- Left-sided failure floods the lungs — dyspnoea, orthopnoea, crackles, frothy sputum; right-sided failure swells the body — pitting oedema, raised JVP, tender liver.\n- Acute pulmonary oedema: sit upright, oxygen as prescribed, call for help, stay with the patient.\n- The daily weight and fluid chart are your early-warning system; 1 kg of gain equals about 1 litre of fluid.\n- Diuretics in the morning; watch potassium and check the apical pulse before digoxin, holding and reporting below 60.\n- Discharge teaching — daily home weights, two-kilogram warning, salt and fluid limits, unbroken adherence — is what keeps her out of your ward.",
      },
    ],
    questions: [
      {
        topic: "Heart Failure",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient with heart failure sleeps propped on three pillows and wakes at night suddenly gasping for breath. Which terms describe these two features?",
        options: [
          "Orthopnoea and paroxysmal nocturnal dyspnoea",
          "Dysphagia and paroxysmal daytime dyspnoea",
          "Hyperpnoea and Cheyne–Stokes respiration",
          "Apnoea and orthostatic hypotension",
        ],
        correctIndex: 0,
        explanation:
          "Orthopnoea is breathlessness lying flat relieved by sitting up; paroxysmal nocturnal dyspnoea is the frightening awakening at night gasping. Both are classic congestive lung signs of left-sided failure.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Acute Pulmonary Oedema",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient develops acute pulmonary oedema on your shift. Which nursing action do you take FIRST?",
        options: [
          "Lie her flat and quiet to reduce cardiac workload",
          "Sit her upright with legs dependent, then give oxygen as prescribed and call the team",
          "Restrict all fluids immediately and insert a urinary catheter yourself",
          "Wait for the morning ward round to report the frothy sputum",
        ],
        correctIndex: 1,
        explanation:
          "Sitting upright with dependent legs instantly reduces venous return to the congested lungs and eases breathing; oxygen as prescribed and immediate escalation follow. Lying her flat would worsen the congestion, and waiting a night is not an option in an emergency.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Heart Failure",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the daily weight the most sensitive early indicator of worsening heart failure?",
        options: [
          "It measures fat gain from a high-salt diet directly",
          "A rapid rise reflects retained fluid before visible oedema or breathlessness appears",
          "It estimates the dose of diuretic required for the next week",
          "It replaces the need for fluid intake–output charting entirely",
        ],
        correctIndex: 1,
        explanation:
          "About one kilogram of weight equals one litre of retained fluid, so the scale detects silent volume accumulation days before the ankles show it. It complements — never replaces — the fluid balance chart.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Medication Safety",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Before giving a scheduled digoxin dose, you count the apical pulse for one full minute and get 54 beats per minute, irregular. What do you do?",
        options: [
          "Give the dose since the patient is asleep and needs rest",
          "Give half the dose and document your estimate",
          "Hold the dose, re-check, and report to the medical team before administration",
          "Give the dose and count the pulse again afterwards",
        ],
        correctIndex: 2,
        explanation:
          "Digoxin slows conduction, and a rate below 60 — especially irregular — may signal toxicity and risk of dangerous blocks. Holding, re-checking and reporting is the safe professional action; guessing a half-dose is never a nursing decision.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Heart Failure",
        front: "Contrast left-sided and right-sided heart failure in one line each.",
        back: "Left-sided: the pump fails forward into the lungs — dyspnoea, orthopnoea, crackles. Right-sided: congestion backs into the body — pitting oedema, raised JVP, tender hepatomegaly.",
      },
      {
        topic: "Monitoring",
        front: "What is the fluid-weight rule, and what gain should trigger a report or clinic visit?",
        back: "About 1 kg of weight equals 1 litre of retained fluid; a gain of 2 kg over three days is a warning sign of worsening failure and must be reported.",
      },
      {
        topic: "Emergency",
        front: "State the first-line nursing response sequence to acute pulmonary oedema.",
        back: "Sit the patient upright with legs dependent, give oxygen as prescribed, summon the medical team immediately, and stay with the patient to calm fear.",
      },
      {
        topic: "Medications",
        front: "Why give diuretics in the morning, and what electrolyte danger do you monitor?",
        back: "Morning dosing prevents nocturia disrupting sleep; monitor potassium — diuresis can cause hypokalaemia with weakness and dangerous arrhythmias.",
      },
      {
        topic: "Digoxin",
        front: "What must you check before administering digoxin, and what is the action threshold?",
        back: "The apical pulse counted for one full minute; if below 60 beats per minute (or newly irregular), hold the dose and report.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (WHO PEN)",
        note: "Protocols for heart failure, hypertension and risk assessment in low-resource settings; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National reference for management protocols in Ghanaian facilities; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on heart failure, fluid balance and cardiac pharmacology. Verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Heart Under Strain",
    lessonTitle: "Coronary Heart Disease & Chest Pain",
    description:
      "The narrowed artery, the crushing chest pain, the hours that decide muscle survival — from stable angina to full heart attack, and the nurse who acts with the clock.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Explain how atherosclerosis narrows coronary arteries and produces angina or acute coronary syndrome.",
      "Distinguish stable angina from acute coronary syndromes using pain history and ECG changes.",
      "Prioritise the nursing response to chest pain suspected to be cardiac, including the 10-minute ECG rule.",
      "Outline secondary prevention and cardiac rehabilitation counselling for a patient recovering from myocardial infarction.",
    ],
    tags: ["coronary disease", "chest pain", "myocardial infarction", "ecg"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Chest pain is one of the sentences that changes everything on a ward. Most of it is not from the heart — but a small fraction is, and that fraction is decided by minutes. Your job in this lesson is to learn the story the heart tells when its own blood supply fails: which words the patient uses, which changes the ECG makes, and which actions you take while the clock runs.\n\nIn Ghana, coronary disease is rising with ageing populations, hypertension, diabetes, smoking and changing diets — and many patients present late, after hours of 'gastric' self-diagnosis and pain medicine bought from the drug store.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The coronary arteries feed the heart muscle itself. Over years, **atheroma** — fatty plaques in the vessel wall — narrows them. When narrowing is fixed and moderate, exertion outruns the supply and the muscle aches: **stable angina** — tight central chest pain on climbing a hill or carrying a basin, easing within minutes of rest or glyceryl trinitrate. The plaque's fibrous cap can also tear suddenly; a **thrombus** forms and occludes the artery completely — an **acute coronary syndrome**.\n\nOcclusion that kills a full thickness of muscle shows as **ST elevation** on the ECG — the **STEMI**, a heart attack where every minute of delay destroys more muscle. Partial occlusion or unstable plaque gives **unstable angina** or **NSTEMI**, heralded by pain that is new, occurs at rest, or escalates over days. The classic pain is central, heavy or crushing, may radiate to the left arm, jaw or back, and comes with sweating, nausea and a frightened, still patient. **Time is muscle.**",
      },
      {
        type: "table",
        title: "Reading the chest pain history",
        body: "| Feature | Stable angina | Acute coronary syndrome |\n|---|---|---|\n| Trigger | Predictable exertion — hill, load, harmattan cold morning | May occur at rest or sleep, or on minimal activity |\n| Pattern | Similar each time, minutes, relieved by rest/GTN | New, prolonged (over 15–20 minutes), escalating, or rest pain |\n| Associated signs | Minimal; relieved quickly | Sweating, nausea, breathlessness, fear, pale clammy skin |\n| ECG | Often normal between episodes, or chronic stable changes | New ST elevation (STEMI) or ST depression/T-wave inversion (NSTEMI/UA) |\n| Meaning | Supply–demand mismatch, no muscle death | Active threatened or ongoing muscle death — emergency pathway |\n\nNot every heart attack reads the textbook: women, older adults and people with diabetes often present atypically — breathlessness, epigastric 'gastric' discomfort, fatigue or confusion. In these groups your suspicion threshold must fall, not rise.",
      },
      {
        type: "clinical_pearl",
        body: "The ECG belongs in the first ten minutes of any chest pain suspected to be cardiac — before the full history is written, before the queue. Serial ECGs fifteen minutes apart catch the changing patterns. And remember atypical presentations in women, the elderly and diabetics: 'gastric pain' plus sweating and fear is a heart attack until the ECG and troponin say otherwise.",
      },
      {
        type: "case",
        title: "The driver at the gate",
        body: "A 54-year-old trotro driver arrives clutching his chest. The pain started one hour ago while offloading goods — 'like a heavy stone', central, radiating to the left arm, with sweating and nausea. He took two pain tablets from a drug store and a bottle of malt 'for energy' but the pain persists. What is your sequence of actions?\n\nAnswer: Treat this as an evolving STEMI until proven otherwise. Move him to an area where he can be assessed immediately, take vital signs, ensure the ECG is done within ten minutes, attach monitoring, establish intravenous access, give oxygen only if saturation is low, and alert the medical team urgently — because reperfusion (thrombolysis where available, or transfer to a centre with a catheter laboratory in Accra or Kumasi) is time-critical. Calm him: fear and catecholamines increase cardiac workload. Document the exact time pain started — reperfusion decisions hang on it.",
      },
      {
        type: "quiz_prompt",
        title: "The 'gastric' trap",
        body: "A 61-year-old diabetic teacher complains of burning upper abdominal pain for two hours with sweating and breathlessness, blaming the beans she ate. Why must this not be filed as indigestion?\n\nAnswer: Diabetics and women frequently present with atypical infarction — epigastric discomfort, fatigue or breathlessness instead of crushing chest pain — because autonomic neuropathy blunts classic pain. Sweating plus breathlessness alongside epigastric discomfort in a diabetic with risk factors demands an ECG now, not antacid and observation.",
      },
      {
        type: "text",
        title: "After the storm: prevention and rehabilitation",
        body: "Surviving the infarct begins the second battle — preventing the next one. Secondary prevention lives in the daily work you reinforce: complete adherence to antiplatelet, blood pressure and cholesterol therapy; smoking stopped completely; diabetes controlled; salt and fat reduced in the family pot with more vegetables, beans and fruit; gradual, structured walking back toward activity; weight and waist watched; and stress and alcohol addressed honestly.\n\n**Cardiac rehabilitation** — supervised, graded exercise plus education and emotional support — rebuilds confidence as much as fitness. Screen gently for depression after infarction; fear of another pain keeps many patients housebound. The family joins every teaching session, because the cooking pot and the walking companion are usually family members.",
      },
      {
        type: "memory_trick",
        body: "For the emergency, remember 'T-M-E': **T**en-minute ECG, **M**onitor and IV access, **E**scalate for reperfusion. For the history, use 'SOCRATES' — Site, Onset, Character, Radiation, Associations, Timing, Exacerbating/relieving factors, Severity. And tattoo this on your practice: 'TIME IS MUSCLE.'",
      },
      {
        type: "summary",
        body: "- Atheroma narrows coronaries: fixed narrowing gives exertional stable angina; plaque rupture with thrombus gives acute coronary syndrome.\n- Cardiac pain is typically central, heavy, radiating, with sweating and nausea — but women, the elderly and diabetics whisper atypically.\n- ECG within ten minutes; serial ECGs reveal ST elevation (STEMI — reperfusion emergency) or ischaemic changes.\n- Record pain onset time; calm the patient; oxygen only if hypoxaemic; escalate for reperfusion — thrombolysis or cath-lab transfer.\n- Secondary prevention is nursing territory: adherence, smoking cessation, diet, activity, BP and diabetes control, and cardiac rehabilitation.",
      },
    ],
    questions: [
      {
        topic: "Acute Coronary Syndrome",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which description is most typical of pain from myocardial ischaemia?",
        options: [
          "Sharp, right-sided pain worse on deep breathing",
          "Central heavy pressure radiating to the left arm, with sweating and nausea",
          "Colicky pain moving around the umbilicus with vomiting",
          "Burning pain along one intercostal space with skin rash",
        ],
        correctIndex: 1,
        explanation:
          "Ischaemic pain is central and heavy — 'like a stone' — frequently radiating to arm, jaw or back, with autonomic features such as sweating and nausea. Pleuritic, colicky and dermatomal patterns point elsewhere.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Acute Coronary Syndrome",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient presents with chest pain suspicious for cardiac origin. Within how long should the first ECG be obtained, and why?",
        options: [
          "Within one hour, because the ECG confirms the diagnosis after troponin returns",
          "Within ten minutes of arrival, because ECG findings decide the emergency reperfusion pathway",
          "Only after the patient is pain-free, to compare baseline tracings",
          "Within 24 hours, since changes develop slowly over a day",
        ],
        correctIndex: 1,
        explanation:
          "ST elevation on the earliest ECG opens the reperfusion door — thrombolysis or transfer for intervention — and every minute of delay costs myocardium. Serial ECGs every fifteen minutes catch evolving patterns.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Chest Pain Assessment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A 62-year-old woman with longstanding diabetes reports two hours of epigastric burning, sweating and mild breathlessness after eating beans. What is the safest interpretation?",
        options: [
          "Gastroenteritis from beans, treat with oral fluids and antacid",
          "Muscle strain from carrying her grandchild, rest and review next week",
          "Possible atypical myocardial infarction — obtain an urgent ECG and escalate",
          "Biliary colic; advise a low-fat diet and outpatient ultrasound",
        ],
        correctIndex: 2,
        explanation:
          "Diabetic autonomic neuropathy and female sex both favour atypical infarction — epigastric discomfort, breathlessness and sweating instead of crushing chest pain. With risk factors and autonomic features, the ECG comes before reassurance.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Cardiac Rehabilitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which package best summarises secondary prevention teaching after myocardial infarction?",
        options: [
          "Strict bed rest for three months, heavy protein diet and monthly massages",
          "Complete medication adherence, smoking cessation, BP and diabetes control, low-salt low-fat family diet and graded activity",
          "Avoiding all exercise permanently and using herbal pain mixtures for chest discomfort",
          "Returning to full manual work immediately to prove recovery",
        ],
        correctIndex: 1,
        explanation:
          "Preventing the next event rests on adherence to antiplatelet, BP and lipid therapy, total smoking cessation, risk-factor control, family-wide dietary change and supervised gradual activity. Both extremes — lifelong rest and premature heavy work — are harmful.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Angina",
        front: "How does stable angina differ from an acute coronary syndrome?",
        back: "Stable angina: predictable exertional tightness, minutes, relieved by rest or GTN, no muscle death. ACS: new, rest or escalating pain of longer duration from plaque rupture — threatened or ongoing infarction, an emergency.",
      },
      {
        topic: "ECG",
        front: "What ECG finding defines a STEMI and what door does it open?",
        back: "New ST-segment elevation in contiguous leads — it opens the reperfusion pathway: immediate thrombolysis where available or urgent transfer to a centre with a catheter laboratory. Time is muscle.",
      },
      {
        topic: "Atypical Presentation",
        front: "Which three patient groups classically present with atypical infarction, and how?",
        back: "Women, the elderly and people with diabetes — with epigastric 'gastric' discomfort, breathlessness, fatigue or confusion rather than crushing chest pain.",
      },
      {
        topic: "Emergency Care",
        front: "List the immediate nursing priorities for suspected cardiac chest pain.",
        back: "Rapid assessment and vitals; ECG within ten minutes; monitoring and IV access; oxygen only if hypoxaemic; calm the patient; escalate urgently; document pain onset time for reperfusion decisions.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (WHO PEN)",
        note: "Chest pain and cardiovascular risk protocols for district-level care; verify latest edition.",
      },
      {
        organization: "CDC",
        title: "Heart Disease — Know the Signs and Symptoms",
        note: "Public education resource on heart attack warning signs and risk factors.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on coronary artery disease and acute coronary syndromes. Verify current edition.",
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
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Heart Under Strain",
    lessonTitle: "Arrhythmias: When Rhythm Breaks",
    description:
      "Too slow, too fast, or chaotically irregular — when the heart's electrical wiring fails, the nurse reads the rhythm, protects the patient and calls the right help at the right time.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Trace the normal electrical pathway of the heart and the origin of common arrhythmias.",
      "Recognise atrial fibrillation, heart blocks, ventricular tachycardia and ventricular fibrillation by their clinical and monitor features.",
      "Prioritise nursing actions for the symptomatic bradycardia, the tachyarrhythmia and the arrest rhythm.",
      "Explain the link between atrial fibrillation, clot formation and stroke, and its implications for patient education.",
    ],
    tags: ["arrhythmia", "cardiac monitoring", "ecg", "resuscitation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The heartbeat is an electrical event before it is a mechanical one. A speck of tissue called the **sinoatrial (SA) node** fires a wave that travels to the **atrioventricular (AV) node**, down the **bundle of His** and out through the **Purkinje fibres**, squeezing the ventricles in perfect order — sixty to a hundred times each minute. Every rhythm in this lesson is a failure somewhere along that elegant pathway: a pacemaker too slow, a rogue circuit too fast, or chaotic storms that abolish pumping altogether.\n\nYou will meet these rhythms on monitors in high-dependency corners of regional hospitals, and — just as importantly — you will meet their fingerprints with your fingertips, counting the pulse of a grandmother on an ordinary ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Arrhythmias are **too slow** (**bradycardias**, under 60), **too fast** (**tachycardias**, over 100) or **irregular**. **Sinus tachycardia** — a fast but regular rhythm with a visible P wave — is usually a symptom of something else: fever, pain, anxiety, dehydration, blood loss, anaemia. Treating the rate means finding the cause.\n\n**Atrial fibrillation (AF)** is the commonest sustained arrhythmia: the atria quiver instead of contracting, so the pulse is **irregularly irregular**, P waves vanish, and blood stagnating in the left atrium can clot — which is why AF travels to the brain as **stroke**. Anticoagulation, where clinically indicated, is stroke prevention. **Heart blocks** interrupt conduction between atria and ventricles: first-degree is a delay, second-degree drops beats, and **third-degree (complete) heart block** disconnects the chambers entirely — the ventricles beat their own slow escape rhythm, often with dizziness and syncope.\n\n**Ventricular tachycardia (VT)** — wide, fast, regular complexes — may still pump weakly, but it can degenerate into **ventricular fibrillation (VF)**, the chaotic rhythm of cardiac arrest: no output, no pulse, no time.",
      },
      {
        type: "table",
        title: "Rhythms and what they ask of you",
        body: "| Rhythm | Rate and character | Patient's usual picture | Nurse's key response |\n|---|---|---|---|\n| Sinus tachycardia | Over 100, regular, P waves present | Fever, pain, fear, blood loss, anaemia | Find and treat the cause; monitor trend |\n| Atrial fibrillation | Often 100–160, irregularly irregular pulse | Palpitations, fatigue; may be silent; stroke risk | Full 60-second pulse; report new AF; anticoagulation and rate-control education |\n| Sinus bradycardia / heart blocks | Under 60; dropped beats or AV dissociation in higher grades | Dizziness, fatigue, syncope ('Stokes–Adams') | Report symptomatic bradycardia urgently; prepare for pacing pathway |\n| Ventricular tachycardia | Over 100, wide regular complexes | May be with pulse (weak, dizzy) or pulseless | With pulse — urgent escalation, pads on; pulseless — defibrillate, CPR |\n| Ventricular fibrillation / asystole | Chaotic or flat line | Unresponsive, not breathing, no pulse | Call for help, start CPR immediately, defibrillate VF without delay |",
      },
      {
        type: "clinical_pearl",
        body: "Check the patient before the monitor. A flat line on the screen is far more often a disconnected lead than asystole — but an unresponsive patient with no pulse is an arrest whatever the screen says. Equally, electrolytes make and break rhythms: a falling or rising potassium (especially in vomiting, diarrhoea, kidney disease or diuretic therapy) is one of the commonest arrhythmia drivers on a Ghanaian ward.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are doing routine observations and find a 74-year-old woman's pulse rapid and completely irregular — 126, uneven like scattered beans. She says her heart sometimes 'runs races' but she came in for a stiff knee. What is the likely rhythm and what does it change about her future?\n\nAnswer: Irregularly irregular tachycardia is the fingerprint of atrial fibrillation. Document the rate and rhythm, take a full set of vitals, report for ECG confirmation, and explore how long it has been present. The crucial conversation is stroke risk: stagnant atrial blood clots, so if anticoagulation is clinically indicated, adherence teaching and bleeding precautions become part of her 'stiff knee' visit. A rhythm found on a routine pulse check can save a brain.",
      },
      {
        type: "quiz_prompt",
        title: "Monitor versus patient",
        body: "The monitor of a sleeping post-operative patient suddenly shows a flat line. He is not on continuous one-to-one observation. What are your first two actions?\n\nAnswer: Look at the patient — call him, check responsiveness and breathing — while checking the leads and cables, which loosen with turning. A patient who answers you loudly has, by definition, a cardiac output; a flat line with a sleeping patient is a lead problem until proven otherwise. If he does not respond, treat it as cardiac arrest: call for help and start CPR.",
      },
      {
        type: "callout",
        title: "The pulse is a 60-second commitment",
        body: "An irregular pulse cannot be half-counted. Count for the full minute, noting rate, regularity and volume, because irregularity is data: new AF found at the bedside changes anticoagulation decisions, and a rate drifting upward over shifts signals the compensated patient quietly decompensating.",
      },
      {
        type: "text",
        title: "Living with an arrhythmia",
        body: "For patients discharged on rate or rhythm control, your teaching prevents readmission and stroke: take medicines exactly as prescribed — a missed dose of an anticoagulant is a window for clot; attend INR and clinic appointments without fail; report palpitations with dizziness, breathlessness or chest discomfort immediately; use a soft toothbrush and electric razor and apply firm pressure to any cut while on anticoagulants; and tell the team about every herbal preparation, because interactions are real.\n\nFamilies of patients with syncope should learn the basics: protect the falling patient from injury, lay them safely flat, check breathing, and shout for help. Never leave a syncopal patient alone to 'walk it off'.",
      },
      {
        type: "memory_trick",
        body: "The rhythm ladder: 'Slow, Fast, Chaotic, Gone.' Slow — blocks and bradycardias (dizzy, dropping). Fast — tachycardias (racing, decompensating). Chaotic — AF's scattered pulse, VT/VF's storms. Gone — VF or asystole: CPR now, defibrillate the chaotic one. And for AF in four words: 'Quiver, Clot, Stroke, Prevent.'",
      },
      {
        type: "summary",
        body: "- Normal conduction: SA node to AV node to bundle to Purkinje fibres, 60–100 per minute.\n- Sinus tachycardia is a symptom — fever, pain, blood loss, anaemia — treat the cause.\n- Atrial fibrillation: irregularly irregular, no P waves; quivering atria clot — stroke prevention via anticoagulation is the teaching priority.\n- Symptomatic bradycardia and high-grade blocks threaten syncope and arrest — urgent reporting, pacing pathway.\n- VT may degenerate to VF; VF and asystole mean CPR immediately, with defibrillation for VF.\n- Check the patient before the monitor, count irregular pulses for the full minute, and suspect potassium in any new arrhythmia.",
      },
    ],
    questions: [
      {
        topic: "Atrial Fibrillation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which pulse finding is the classic bedside signature of atrial fibrillation?",
        options: [
          "Regular, slow and bounding",
          "Rapid, regular with a strong beat every second pulse",
          "Irregularly irregular, with beat-to-beat unpredictability",
          "Alternating strong and weak beats at a fixed slow rate",
        ],
        correctIndex: 2,
        explanation:
          "In AF the atria quiver and the AV node passes impulses at random intervals, producing a pulse with no pattern at all — irregularly irregular. Regularity, even with dropped or alternating beats, points to other rhythms.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Cardiac Arrest",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient becomes unresponsive and not breathing normally; the monitor shows ventricular fibrillation. What is the immediate priority?",
        options: [
          "Document the rhythm and wait for the senior doctor's instruction",
          "Start CPR immediately and prepare for defibrillation without delay",
          "Give oxygen by mask and elevate the legs",
          "Insert an intravenous line before touching the patient",
        ],
        correctIndex: 1,
        explanation:
          "Unresponsive, not breathing normally, VF — this is cardiac arrest: call for help, start high-quality CPR immediately and defibrillate as soon as the machine is ready. Documentation, oxygen and IV access follow, never lead.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Arrhythmias",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A 78-year-old man on your ward reports dizziness and his pulse is 44, regular. He nearly fainted walking to the bathroom. What does this demand?",
        options: [
          "Reassurance that slow pulses are normal in the elderly",
          "Encouraging him to walk more so the heart 'trains itself'",
          "Urgent reporting of symptomatic bradycardia with preparation for the pacing pathway",
          "Giving his afternoon tea with extra sugar and rechecking tomorrow",
        ],
        correctIndex: 2,
        explanation:
          "A rate under 60 with dizziness and near-syncope is symptomatic bradycardia — possibly high-grade block. It needs urgent ECG, medical review and readiness for pacing; reassurance or exercise advice risks a Stokes–Adams collapse.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Stroke Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does longstanding atrial fibrillation increase stroke risk, and what does that mean for patient teaching?",
        options: [
          "The fast heart rate directly bursts brain vessels",
          "Quivering atria let blood stagnate and clot; clots can travel to the brain — so anticoagulant adherence, clinic attendance and bleeding precautions are core teaching",
          "AF lowers blood pressure until the brain is starved of blood flow",
          "The irregular pulse causes repeated minor head injuries from falls",
        ],
        correctIndex: 1,
        explanation:
          "Blood pooling in a quivering left atrium forms clots that embolise to the cerebral circulation. Where anticoagulation is indicated, the nurse's teaching on strict adherence, monitoring appointments and bleeding precautions is literally stroke prevention.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Normal Conduction",
        front: "Trace the normal electrical pathway of one heartbeat.",
        back: "SA node fires in the right atrium, spreads across the atria, pauses at the AV node, races down the bundle of His and its branches, and exits through the Purkinje fibres to contract the ventricles. Normal rate 60–100 per minute.",
      },
      {
        topic: "Atrial Fibrillation",
        front: "Give the four-word story of atrial fibrillation.",
        back: "Quiver — the atria fibrillate instead of contracting; Clot — blood stagnates in the left atrium; Stroke — clots travel to the brain; Prevent — rate control plus anticoagulation where indicated.",
      },
      {
        topic: "Monitoring",
        front: "The monitor shows asystole but the patient answers when you call. What happened?",
        back: "Most likely a disconnected lead or cable, not a true rhythm. Check the patient first, then the leads — but an unresponsive, breathless patient is an arrest regardless of the screen.",
      },
      {
        topic: "Emergencies",
        front: "Which two rhythms belong to cardiac arrest, and what is the immediate response to each?",
        back: "Ventricular fibrillation — CPR plus urgent defibrillation; asystole — CPR plus adrenaline per protocol with rhythm checks. Both: call for help, start compressions immediately.",
      },
    ],
    sources: [
      {
        organization: "CDC",
        title: "Arrhythmia — Types and Public Information",
        note: "Public-facing reference on arrhythmia types and warning signs.",
      },
      {
        organization: "World Health Organization",
        title: "Emergency Triage Assessment and Treatment (ETAT)",
        note: "Structured emergency recognition principles adapted across ages; verify latest edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on dysrhythmias, monitoring and resuscitation. Verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Heart Under Strain",
    lessonTitle: "Cardiac Nursing Care Day by Day",
    description:
      "It is rarely the dramatic rescue that saves the cardiac patient — it is the daily weight, the morning tablet, the salt reduced in the family pot. The quiet nursing that changes cardiac outcomes.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Organise a structured daily cardiac nursing routine: observations, daily weight, fluid balance and activity pacing.",
      "Apply safe medication timing and pre-administration checks for common cardiac medicines.",
      "Deliver practical, Ghanaian-family dietary and lifestyle counselling for cardiac patients.",
      "Construct a discharge plan with clear danger signs that bring the patient back early.",
    ],
    tags: ["cardiac care", "nursing management", "patient education", "monitoring"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask a cardiac patient what saved her and she may name the doctor's procedure. Ask her notes and they will tell a different story: the diuretic given at 8 am instead of 8 pm, the daily weight that caught two litres before her lungs flooded, the couscous cooked with less bouillon, the nurse who sat down for ten minutes and explained the tablets until the fear went away.\n\nThis lesson gathers the unglamorous, repeatable routines of cardiac nursing into one daily plan — because in heart failure, hypertension and post-infarction care, the boring things done every single day are what keep patients alive and out of your ward.",
      },
      {
        type: "text",
        title: "The rhythm of the cardiac day",
        body: "**Morning:** weight before breakfast, same scale, similar clothing — the day's anchor. Vital signs including a full one-minute pulse (rate, rhythm, volume), blood pressure, respiratory rate and check for early crackles. Inspect ankles and sacrum for new pitting. Review the fluid chart from yesterday and the urine output trend.\n\n**Medication rounds** follow their own safety logic: diuretics early to protect the night; digoxin only after the apical pulse is counted — held and reported below 60 or newly irregular; antihypertensives never skipped because 'pressure is normal today' — normal is the treatment working. Watch blood pressure after first doses and dose changes, especially in the elderly, who fall.\n\n**Daytime:** position breathless patients upright; pace activity between rest periods; encourage walking as prescribed; moisturise and inspect oedematous skin. **Evening:** evening weights and observations if ordered, toileting before sleep, and safety rails for patients on hypotensive medicines who may rise at night.",
      },
      {
        type: "table",
        title: "The traffic-light plan every cardiac patient should own",
        body: "| Zone | Meaning | Patient's signs | Patient's action |\n|---|---|---|---|\n| GREEN — stable | Dry and comfortable | Weight steady, breathing easy, sleeping flat with usual pillows | Continue medicines and routine; keep clinic date |\n| YELLOW — warning | Fluid is creeping back | Weight up 2 kg in 3 days; new ankle swelling; needing an extra pillow; more breathless on usual walk | Come to clinic within 24–48 hours; do not wait for collapse |\n| RED — emergency | The heart is failing now | Severe breathlessness, cannot lie flat at all, coughing frothy sputum, chest pain, fainting | Come to hospital immediately — day or night |",
      },
      {
        type: "clinical_pearl",
        body: "Teach the family the scale rule before discharge: same time every morning, after urinating, before breakfast, with similar clothes. A two-kilogram gain over three days means the body is silently hoarding a litre a day — the clinic visit that day is the one that prevents the midnight emergency three days later.",
      },
      {
        type: "quiz_prompt",
        title: "The 8 pm diuretic",
        body: "You find a colleague preparing to give a patient's furosemide at 8 pm 'to complete the twice-daily dose'. Why does timing matter, and what do you discuss with the team?\n\nAnswer: Evening diuretics fill the night with toileting trips — exhausting for a frail cardiac patient and dangerous in the dark, with falls and disrupted sleep raising cardiac workload. The schedule should be arranged so diuresis happens in daytime; flag the order, not just the dose, because good prescribing respects the body clock.",
      },
      {
        type: "case",
        title: "Discharge planning with Auntie Efua",
        body: "Auntie Efua, 64, is going home tomorrow after a heart failure admission. She sells porridge, lives with her daughter-in-law, and confesses she stopped her tablets last time 'because they finished and the clinic queue is long'. Build her discharge plan.\n\nAnswer: Medicines — a written plan in plain language, doses in her clinic card, teach-back until she can state each one and why, and a refill date BEFORE tablets finish, with the traffic-light rules. Weight — daily home weighing on any reliable scale, yellow-zone action. Diet — the daughter-in-law joins the talk: less bouillon cube and koobi in the porridge pot, no added salt at table, more vegetables. Clinic — an appointment card with a date, and honest talk about how to shorten her waits. Danger signs — frothy cough, can't-lie-flat nights, chest pain: come immediately. Every item has a family name attached, because cardiac care at home is a household project.",
      },
      {
        type: "text",
        title: "Diet, drink and daily life in a Ghanaian kitchen",
        body: "Dietary counselling fails when it hands out foreign menus. Work with the family pot: reduce bouillon cubes, salted dried fish and koobi; season with onion, ginger, garlic, herbs and lime instead; grill, stew or steam rather than deep-fry; build meals around beans, garden eggs, kontomire and other greens, with fish and lean meat in moderate portions. Fluid restriction, where prescribed, is easier in small frequent servings from a marked cup than one large glass. Alcohol should be minimal or none; total smoking cessation — including exposure to wood smoke where kitchen ventilation can be improved.\n\nActivity advice is graduated, not forbidden: comfortable walking with rest pauses, avoiding heavy lifting and hill pushing early, and stopping for dizziness, chest discomfort or unusual breathlessness. Sexual activity concerns can be raised gently — patients rarely ask but frequently worry; a general guide is resuming when ordinary stair-climbing feels comfortable, with clinic advice for the anxious or post-infarction patient.",
      },
      {
        type: "memory_trick",
        body: "The cardiac day in one line: 'WEIGH before breakfast, WATER by the chart, TABLETS by the clock, LEGS checked nightly, TEACH the family.' And the discharge bundle is 'M.A.P.S.': Medicines with teach-back, Appointment before tablets finish, Plan with the family, Signs that bring her back.",
      },
      {
        type: "summary",
        body: "- The cardiac routine: morning weight, full vitals, fluid balance, ankle and sacral checks, paced activity and evening safety.\n- Diuretics in the morning; count the apical pulse a full minute before digoxin and hold below 60; antihypertensives are never stopped because numbers look good.\n- Traffic-light self-management: green stable; yellow — 2 kg in 3 days, extra pillow, new oedema — clinic within 48 hours; red — frothy cough, orthopnoea, chest pain — hospital now.\n- Diet counselling happens in the family kitchen: less cube, koobi and salt; more greens and beans; the family cooks, so the family learns.\n- Discharge is complete only with teach-back, an appointment before tablets finish, and named danger signs.",
      },
    ],
    questions: [
      {
        topic: "Cardiac Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct procedure for the daily weight of a cardiac patient?",
        options: [
          "Weigh after breakfast fully dressed, on any available scale",
          "Weigh at the same time each morning, before eating, after urinating, in similar clothing, on the same scale",
          "Weigh only when the ankles look swollen, to confirm oedema",
          "Weigh weekly, since daily changes reflect food intake only",
        ],
        correctIndex: 1,
        explanation:
          "Standardised conditions — same time, same scale, similar clothing, after voiding, before food — make the number meaningful. Two kilograms gained in three days under these conditions is fluid, not breakfast.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Medication Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before administering digoxin, your pre-check finds an apical pulse of 54, newly irregular. What is the correct action?",
        options: [
          "Administer as prescribed; the irregularity is age-related",
          "Hold the dose, recount, and report to the medical team before giving",
          "Give the dose and monitor the pulse every 15 minutes afterwards",
          "Ask the patient to walk briskly to raise the rate, then give it",
        ],
        correctIndex: 1,
        explanation:
          "A pulse below 60, especially when newly irregular, may signal digoxin effect on conduction or early toxicity. The safe professional action is to hold, re-verify and report — never to 'compensate' or dose around it.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Patient Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the traffic-light self-management plan, which finding places a heart failure patient in the yellow zone?",
        options: [
          "Stable weight and easy breathing on usual activity",
          "A 2 kg weight gain over three days, new ankle swelling, or needing an extra pillow",
          "Frothy pink sputum with inability to lie flat at all",
          "Complaints of knee pain after market work",
        ],
        correctIndex: 1,
        explanation:
          "Yellow means fluid is returning without collapse — the zone where a clinic visit within 24–48 hours aborts the emergency. Green is stability; red (frothy sputum, total orthopnoea) means hospital immediately.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Diet Counselling",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which dietary advice is most practical for a Ghanaian family caring for a member with heart failure?",
        options: [
          "Increase bouillon cubes for taste since salt is only harmful in tablets",
          "Encourage frequent consumption of koobi and salted dried fish for protein",
          "Reduce bouillon cubes, salted fish and added salt; season with ginger, garlic, onion and lime; build meals around beans and greens",
          "Insist on imported low-sodium ready meals to guarantee compliance",
        ],
        correctIndex: 2,
        explanation:
          "Most sodium in the local diet hides in cubes, koobi and salted fish. Counselling that works with the family pot — local seasonings, beans, vegetables, moderate lean protein — is realistic, affordable and effective.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Daily Weight",
        front: "State the daily-weight rule and its warning threshold for cardiac patients.",
        back: "Same time each morning, same scale, similar clothing, after urinating, before food; a 2 kg gain over three days signals about two litres of retained fluid — clinic within 24–48 hours.",
      },
      {
        topic: "Medication Timing",
        front: "Why are diuretics given in the morning?",
        back: "So diuresis happens during waking hours — protecting sleep, reducing dangerous night-time toileting falls, and easing cardiac workload overnight.",
      },
      {
        topic: "Self-Management",
        front: "Give one green, one yellow and one red traffic-light sign for a heart failure patient.",
        back: "Green: stable weight, easy breathing. Yellow: 2 kg in 3 days, new oedema, extra pillow needed — clinic within 48 hours. Red: frothy sputum, cannot lie flat, chest pain — hospital immediately.",
      },
      {
        topic: "Family Teaching",
        front: "Why must dietary counselling include the person who cooks?",
        back: "Because the pot is shared — the cook controls the bouillon cubes, salted fish and salt. A plan the family kitchen can actually produce is the only plan that works.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (WHO PEN)",
        note: "Follow-up and education protocols for cardiac patients at first-referral level; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Facility-level management and counselling guidance; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on cardiac patient education and rehabilitation. Verify current edition.",
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
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Every Breath Counts",
    lessonTitle: "Asthma: The Tightened Airway",
    description:
      "The airway that narrows in three ways at once — and the person who cannot breathe long enough to explain it. Triggers, inhalers and the attack you must act on today.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the three components of airway narrowing in asthma and why they make the obstruction reversible.",
      "Recognise the severity of an asthma attack using speech, posture and physical signs.",
      "Apply the nursing response to an acute attack — positioning, reliever therapy and escalation.",
      "Teach preventer-versus-reliever therapy, inhaler technique and trigger control to a Ghanaian patient.",
    ],
    tags: ["asthma", "inhaler", "respiratory", "attack management"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Asthma is a condition of a sensitive airway. In response to triggers, the bronchi narrow in **three ways at once**: smooth muscle wrapped around them squeezes (**bronchoconstriction**), the lining swells with inflammation (**mucosal oedema**), and glands pour out thick mucus that plugs the narrowed tubes. Three layers of narrowing — which is why the wheeze has both a musical note and a frightening effort behind it.\n\nThe key word is **reversible**. Unlike COPD, the asthmatic airway can open again — with treatment and with time — and a well-controlled asthmatic can run, dance and write exams like anyone else. Your nursing lives in two places: the attack you must manage now, and the months of teaching that prevent the next one.",
      },
      {
        type: "text",
        title: "Triggers in a Ghanaian setting",
        body: "The asthmatic airway is not fragile — it is **hyperresponsive**: it over-reacts to stimuli most airways ignore. In Ghana the common triggers are practically a map of daily life: **harmattan dust** rolling in every dry season; **smoke** from firewood and charcoal kitchens, mosquito coils and roadside burning; **respiratory infections**, especially viral colds; **cold night air** and sudden weather changes; **exercise** — the dawn fitness runs; **strong smells** — insecticide sprays, kerosene stoves, fresh paint, perfume; **allergens** — house-dust mites in old mattresses and curtains, cockroach debris, pollen and grass; some **medicines** — aspirin-type pain relievers and certain eye drops in sensitive patients; and **strong emotion** — laughter, examinations, grief.\n\nMost patients have never been taught their personal trigger list. Drawing it together with them over one clinic visit is one of the highest-value things you can do.",
      },
      {
        type: "table",
        title: "Grading the attack by what the patient can say",
        body: "| Severity | Speech | Position and effort | Other signs | Action level |\n|---|---|---|---|---|\n| Mild | Full sentences | Walking, mildly breathless | Slight wheeze, normal colour | Reliever as prescribed, review, continue monitoring |\n| Moderate | Short phrases | Prefers sitting | Louder wheeze, some accessory muscle use, mild tachycardia | Reliever per protocol, inform team, observe closely |\n| Severe | Single WORDS | Sits hunched forward, cannot lie back | Loud wheeze or quiet chest, marked accessory use, agitation, sweating | Immediate medical call, high-flow oxygen if prescribed, never leave alone |\n| Life-threatening | Cannot speak at all | Exhausted, slumped | SILENT CHEST, cyanosis, bradycardia or collapse | Emergency — call for urgent help, resuscitation readiness |\n\nThe speech test is your fastest severity gauge: a patient speaking in full sentences is not fighting for air; a patient answering in words is. And remember the paradox — a silent chest is not improvement, it is the worst sign: no air is moving at all.",
      },
      {
        type: "clinical_pearl",
        body: "In an asthma attack, stay calm and keep the patient upright. Fear tightens every accessory muscle; sitting forward opens the mechanics of breathing. Give the reliever inhaler as prescribed (with a spacer if available — it doubles delivery, especially in children), call for help early in any severe attack, and never send a gasping patient to walk to another department alone. You escort, or you send help.",
      },
      {
        type: "case",
        title: "The night after sweeping",
        body: "A 19-year-old student is brought to your district hospital casualty at 2 am. She swept the compound at dusk; by midnight she was coughing, and now she cannot finish a sentence. She sits hunched with her shoulders heaving, a loud whistle in every breath, and her reliever inhaler has been empty for weeks — she could not afford a refill.\n\nWhat is your immediate care?\n\nAnswer: This is a SEVERE attack — single-phrase speech, hunched posture, accessory breathing. Keep her upright and calm, give oxygen as prescribed, help her take a reliever promptly via a spacer if available, alert the medical team immediately and stay with her, watching for the quieting chest and cyanosis of a life-threatening attack. Afterwards the real nursing begins: the empty inhaler is the diagnosis of failed access — she needs a supply plan, an action plan for the next attack, and the family must understand that a preventer inhaler taken daily, even when she is well, is what keeps the 2 am attacks away.",
      },
      {
        type: "quiz_prompt",
        title: "Which inhaler, and when?",
        body: "A patient tells you she uses her brown preventer inhaler 'only when the chest is tight', and her blue reliever 'every day, two puffs morning and evening'. What is wrong with this picture?\n\nAnswer: It is exactly backwards. The RELIEVER is for symptoms — tightness, wheeze, attacks — and using it daily signals poor control needing review. The PREVENTER (inhaled corticosteroid) is the daily controller that heals the inflamed airway wall over weeks — it must be taken EVERY DAY even when well, and it does nothing useful during an attack. Patients who swap these two roles end up in your casualty at 2 am.",
      },
      {
        type: "text",
        title: "Inhaler technique and the education that sticks",
        body: "An inhaler only works when the technique works. Watch the patient demonstrate: shake the canister; exhale fully; lips sealed around the mouthpiece (or spacer); press and SLOWLY breathe in — never a rushed gasp; hold the breath up to ten seconds; wait before a second puff. Common errors are breathing out during activation, rushing the inhalation, and forgetting the shake. A **spacer** device — even a simple one — turns poor coordination into good delivery, especially for children and breathless adults. Teach rinse-and-spit (or mouth care for children) after preventer doses to prevent oral thrush.\n\nPrevention counselling: dust-proof the bedroom (damp-dust, sunning mattresses), keep cooking smoke out of the sleeping room, close windows on the worst harmattan days, treat every cold early, and carry the reliever ALWAYS — the student who leaves the inhaler home for an exam is gambling. Asthma control also has review points: waking at night with symptoms, reliever use increasing, morning tightness — each is a yellow flag for clinic, not a reason to quietly increase doses alone.",
      },
      {
        type: "memory_trick",
        body: "The airway narrows three ways: **SQUEEZE, SWELL, SLIME** — muscle, mucosa, mucus. Attack severity by speech: 'Sentences, Phrases, Words, Silence' — when the voice disappears, danger has arrived. And the two inhalers: 'BLUE is the FIRE EXTINGUISHER, BROWN is the FIREPROOFING' — one rescues, one prevents.",
      },
      {
        type: "summary",
        body: "- Asthma narrows the airway by bronchoconstriction, mucosal oedema and mucus plugging — and it is reversible.\n- Ghanaian triggers: harmattan dust, cooking and mosquito-coil smoke, infections, cold nights, exercise, strong smells, dust mites and cockroaches, some medicines, strong emotion.\n- Grade every attack by speech — sentences, phrases, words, silence; a silent chest is life-threatening, not better.\n- Attack care: sit upright, stay calm, reliever via spacer as prescribed, oxygen as prescribed, escalate early, never leave the patient alone.\n- Preventer daily even when well; reliever only for symptoms and carried always; check technique by demonstration at every visit.",
      },
    ],
    questions: [
      {
        topic: "Asthma",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which combination describes the three mechanisms of airway narrowing in asthma?",
        options: [
          "Bronchoconstriction, mucosal oedema and mucus plugging",
          "Alveolar destruction, fibrosis and pleural effusion",
          "Vascular engorgement, clot formation and valve destruction",
          "Bronchial dilation, ciliary paralysis and surfactant excess",
        ],
        correctIndex: 0,
        explanation:
          "The sensitive airway narrows three ways at once — smooth muscle squeeze, swollen inflamed mucosa, and thick mucus. All three are reversible with treatment, which distinguishes asthma from the fixed destruction of COPD.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Asthma Attack",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During assessment of an acute attack, a patient's wheeze suddenly becomes very quiet, and she is now cyanosed and exhausted. How do you interpret this?",
        options: [
          "The treatment is working and she is improving",
          "She has a chest infection superimposed on mild asthma",
          "This is a life-threatening sign — air movement has nearly stopped; emergency escalation now",
          "She is anxious and needs to be left alone to breathe calmly",
        ],
        correctIndex: 2,
        explanation:
          "The silent chest is the paradox of severe asthma: so little air moves that the wheeze vanishes. With cyanosis and exhaustion it signals impending respiratory arrest — urgent help, not quiet observation.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Asthma Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which teaching about the two main inhaler types is correct?",
        options: [
          "The reliever is taken daily for weeks to heal inflammation",
          "The preventer (corticosteroid) is taken daily even when well; the reliever is used promptly for symptoms and attacks",
          "Both inhalers work immediately and are interchangeable",
          "The preventer should be used first during an attack, followed by the reliever",
        ],
        correctIndex: 1,
        explanation:
          "Preventers calm airway inflammation over weeks — daily, regardless of symptoms, with mouth rinsing after use. Relievers relax bronchial muscle within minutes and are the rescue therapy. Daily reliever need is a sign of poor control needing review.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Acute Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient arrives with an acute asthma attack able to speak only single words. Which nursing action comes FIRST?",
        options: [
          "Send her alone to the pharmacy to buy a spacer",
          "Sit her upright, keep her calm, and give the reliever as prescribed while calling for help",
          "Lie her flat on a couch to reduce muscle work",
          "Ask her to fill the admission form while waiting for the doctor",
        ],
        correctIndex: 1,
        explanation:
          "Word-level speech marks a severe attack: upright positioning improves the mechanics of breathing, prompt reliever opens the airway, and early escalation plus staying with her covers deterioration. Flat positioning worsens breathlessness; paperwork can wait.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Pathophysiology",
        front: "Name the three mechanisms of airway narrowing in asthma.",
        back: "SQUEEZE — bronchial smooth muscle constriction; SWELL — inflamed, oedematous mucosa; SLIME — thick mucus plugging the narrowed tubes. All reversible, unlike COPD.",
      },
      {
        topic: "Severity",
        front: "How does the speech test grade asthma attacks, and what does a silent chest mean?",
        back: "Full sentences — mild; phrases — moderate; single words — severe; unable to speak — life-threatening. A silent chest means almost no air is moving: the most dangerous sign of all.",
      },
      {
        topic: "Inhalers",
        front: "Contrast the preventer and reliever inhalers in one sentence.",
        back: "The preventer (corticosteroid) is taken EVERY DAY even when well to heal inflammation; the reliever (bronchodilator) works in minutes and is reserved for symptoms and attacks — and carried everywhere.",
      },
      {
        topic: "Triggers",
        front: "List five common asthma triggers in Ghana.",
        back: "Harmattan dust; smoke from firewood, charcoal and mosquito coils; respiratory infections; cold night air; strong smells such as insecticide sprays — plus dust mites, cockroach debris, exercise, some pain medicines and strong emotion.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Asthma (fact sheet)",
        year: "2024",
        note: "Burden, triggers and management framework; check for the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National protocols on asthma management including emergency care; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on asthma and airway management. Verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Every Breath Counts",
    lessonTitle: "COPD: The Long Breathlessness",
    description:
      "The lungs that trap every breath — the smoker's cough and the firewood kitchen's cough, the pursed lips and the barrel chest, and the nurse who paces life without stealing dignity.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the structural changes of chronic bronchitis and emphysema and why COPD obstruction is not fully reversible.",
      "Identify the causes of COPD in Ghanaian patients, including biomass smoke exposure in women.",
      "Apply nursing strategies for breathlessness — positioning, breathing techniques, energy conservation and safe oxygen use.",
      "Explain exacerbation prevention, inhaler adherence and smoking cessation support.",
    ],
    tags: ["copd", "emphysema", "respiratory", "rehabilitation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In COPD, the damage is permanent and the story is long. **Chronic bronchitis** means the airways are inflamed and mucus-drenched — a productive cough on most days for three months in two consecutive years. **Emphysema** means the delicate alveolar walls have been destroyed, so the lung loses its elastic recoil: air gets IN but cannot fully get OUT, and the chest slowly over-inflates into the **barrel chest** you will see in advanced disease.\n\nThe airflow obstruction of COPD is **not fully reversible** — that is the exam question and the bedside truth that separates it from asthma. What is reversible is the misery: positioning, breathing technique, activity pacing, vaccination, inhaler adherence and exacerbation prevention all return quality of life that the destroyed alveoli cannot.",
      },
      {
        type: "text",
        title: "Whose lungs? The causes in Ghana",
        body: "Tobacco smoking remains the leading cause worldwide — cigarettes, including roll-ups. But in Ghana your COPD wards hold two other big groups. The first is **women exposed to biomass smoke**: decades of cooking with firewood and charcoal in poorly ventilated kitchens fill the lungs with the same irritants as smoke inhaled deliberately. The second is **occupational dust** — quarry workers, stone crushers, carpenters, cocoa and grain handlers.\n\nAdd second-hand smoke in the home, recurrent chest infections that scar airways, and the genetic deficiency (alpha-1-antitrypsin) that occasionally explains a young patient, and your assessment question is written: not just 'do you smoke?' but 'who cooks, where, and with what?'",
      },
      {
        type: "table",
        title: "Asthma versus COPD — the bedside contrast",
        body: "| Feature | Asthma | COPD |\n|---|---|---|\n| Typical onset | Any age, often young | Middle age and beyond, after years of exposure |\n| Airway problem | Reversible inflammation and spasm | Fixed destruction and air trapping |\n| Pattern | Episodic — normal between attacks | Persistent, slowly progressive daily symptoms |\n| Cough and sputum | Between attacks, usually dry; night symptoms | Chronic productive cough, most days |\n| Breathlessness | With attacks/triggers | Constant, worsens insidiously over years |\n| Chest shape | Usually normal | Barrel chest in advanced disease; pursed-lip breathing |\n| Response to bronchodilators | Strong, near-complete | Partial; relief but not reversal |\n| Oxygen caution | Standard targets | Target 88–92% — risk of carbon dioxide retention |",
      },
      {
        type: "clinical_pearl",
        body: "Watch the veteran COPD patient breathe and you will see the treatment before anyone prescribes it: lips PURSED on expiration — a home-made back-pressure that splints the floppy airways open — and the body leaning forward onto the arms (the 'tripod'), which turns the shoulder girdle into an accessory breathing machine. Your positioning and breathing coaching are simply the patient's own wisdom, named and taught.",
      },
      {
        type: "case",
        title: "The firewood chest",
        body: "A 58-year-old teacher's wife is admitted with three days of worsening breathlessness and yellow-green sputum. She has never smoked, but she has cooked on a three-stone fire in a windowless kitchen for thirty-five years. At rest she sits forward, elbows on knees, blowing breath out through pursed lips; her chest is barrel-shaped and she cannot finish a sentence. What is happening, and what does your nursing plan include?\n\nAnswer: This is a COPD exacerbation, almost certainly infective, on long-standing biomass-smoke disease. Nursing: sit her upright leaning forward over pillows or a table, give oxygen as prescribed with the COPD target in mind (88–92%), give her bronchodilator therapy via spacer as prescribed, encourage hydrated sputum clearance with effective coughing, and monitor for CO2 retention drowsiness if high oxygen flows are used. Long-term, her kitchen is the disease — the family must hear about ventilation, a chimney or improved stove, sitting by a doorway, and her walking programme with rest pauses, vaccines, and never missing her inhalers.",
      },
      {
        type: "quiz_prompt",
        title: "The 94 percent trap",
        body: "A colleague connects a COPD patient with saturation 88% to oxygen and pushes it up to 99%, saying 'full tank is best'. What is the danger, and what is the safer goal?\n\nAnswer: In COPD, excessive oxygen can blunt the hypoxic drive that keeps breathing going and can worsen carbon dioxide retention, leading to drowsiness and respiratory failure. The safer target is a saturation of 88–92% — enough oxygen for the body, not so much that breathing slows. The lesson 'Oxygen Therapy & Respiratory Care' takes this further.",
      },
      {
        type: "text",
        title: "Living well with COPD: the nursing package",
        body: "**Breathing retraining:** pursed-lip breathing during exertion — in through the nose, out slowly through pursed lips 'as if cooling hot porridge'; diaphragmatic breathing to recruit the belly rather than the shoulders.\n\n**Energy conservation:** the breathless patient plans the day like a bank account — sit to bathe, to chop vegetables, to dress; keep heavy pots at waist height; pace stairs with a pause per landing; rest BEFORE exhaustion, not after. **Nutrition:** small, frequent, calorie-rich meals — a full stomach presses the diaphragm and breathlessness steals appetite, so late-stage COPD patients drift toward underweight; rest before eating, and choose softer, energy-dense foods. **Exercise:** supervised walking as tolerated — 'the less you do, the less you can do' — the principle behind pulmonary rehabilitation. **Vaccines:** influenza and pneumococcal vaccination per national schedule to prevent the exacerbations that admit patients. **Smoking cessation:** ask every visit, advise clearly, assist without judgement — the ex-smoker's cough improves in weeks, and there is no point in the disease where quitting stops helping.",
      },
      {
        type: "callout",
        title: "Exacerbations: the cliff-edge events",
        body: "An exacerbation is more than sputum changing colour — it is breathlessness beyond the patient's normal, and each one scars more lung and more confidence. Teach the patient and family the early warning trio: MORE breathless, MORE sputum, MORE purulent (any two matter). The action plan: come early to clinic, do not wait three days as the firewood-chest case did; a plan for early treatment at home or clinic prevents hospitalisation and death.",
      },
      {
        type: "memory_trick",
        body: "COPD = **C**hronic **O**bstruction, **P**ermanent damage, **D**aily cough. The two diseases in one: 'BRONCHITIS is the river of mucus; EMPHYSEMA is the burst balloons that won't spring back.' The red-flag oxygen rule: '88 to 92, that's the COPD crew.' The exacerbation trio: 'More breathless, more sputum, more yellow — any two means come.'",
      },
      {
        type: "summary",
        body: "- COPD = chronic bronchitis (mucus and cough) + emphysema (alveolar destruction and air trapping); obstruction is only partially reversible.\n- In Ghana think beyond cigarettes: biomass cooking smoke in women and occupational dust are major causes.\n- Pursed-lip breathing and the tripod position are the patient's own pathophysiology — support, teach and name them.\n- Oxygen in COPD targets 88–92% — over-oxygenation risks carbon dioxide retention and drowsiness.\n- The nursing package: positioning, breathing retraining, energy conservation, small frequent meals, graded walking, vaccines, inhaler adherence and non-judgmental cessation support.\n- Exacerbation warning trio — more breathless, more sputum, more purulent — and early clinic attendance is survival teaching.",
      },
    ],
    questions: [
      {
        topic: "COPD",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is COPD described as not fully reversible, unlike asthma?",
        options: [
          "Because the mucus in COPD cannot be cleared by coughing",
          "Because destroyed alveolar walls and chronically remodeled airways leave permanent airflow limitation",
          "Because patients with COPD refuse to use inhalers correctly",
          "Because the obstruction in COPD only appears during sleep",
        ],
        correctIndex: 1,
        explanation:
          "Emphysema destroys alveolar tissue and the airways remodel permanently — bronchodilators relieve but cannot rebuild lung. Asthma's inflammation and spasm, by contrast, can resolve almost completely.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Causes",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 55-year-old Ghanaian woman has advanced COPD but has never smoked. Which exposure most likely explains her disease?",
        options: [
          "Living near the sea and breathing salty air",
          "Longstanding indoor biomass smoke from cooking with firewood or charcoal in poorly ventilated kitchens",
          "Drinking untreated well water for decades",
          "Eating a high-cassava diet",
        ],
        correctIndex: 1,
        explanation:
          "Biomass smoke exposure — decades of firewood/charcoal cooking in unventilated kitchens — is a leading cause of COPD in non-smoking Ghanaian women, alongside occupational dust. The kitchen is part of the respiratory history.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Oxygen Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which oxygen saturation target is generally safest for a COPD patient at risk of hypercapnic respiratory failure?",
        options: [
          "88 to 92 percent",
          "As close to 100 percent as possible",
          "Below 80 percent to preserve the breathing drive",
          "It does not matter; any saturation is acceptable in COPD",
        ],
        correctIndex: 0,
        explanation:
          "A target of 88–92% gives adequate oxygenation while limiting the risk of worsening carbon dioxide retention and respiratory depression in CO2-retaining COPD patients. Chasing 100% can sedate the patient into failure.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Breathing Techniques",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the purpose of pursed-lip breathing taught to COPD patients?",
        options: [
          "To strengthen the diaphragm with resistance training",
          "To create back-pressure that splints small airways open and slows expiration, reducing air trapping",
          "To increase oxygen absorption in the alveoli by holding breath longer",
          "To prevent aspiration of food and fluids",
        ],
        correctIndex: 1,
        explanation:
          "Blowing out through pursed lips generates a gentle back-pressure that keeps floppy airways from collapsing during the long expiration, emptying trapped air and easing the work of the next breath.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Definition",
        front: "Define chronic bronchitis, and name the two diseases under the COPD umbrella.",
        back: "Productive cough on most days for at least three months in two consecutive years. COPD = chronic bronchitis (mucus-plugged, inflamed airways) plus emphysema (destroyed alveoli, lost recoil, air trapping).",
      },
      {
        topic: "Signs",
        front: "What do the barrel chest, tripod position and pursed lips each tell you?",
        back: "Barrel chest — hyperinflated lungs from trapped air; tripod — using arms and shoulder girdle as accessory breathing muscles; pursed lips — back-pressure splinting airways open during slow expiration.",
      },
      {
        topic: "Oxygen",
        front: "State the COPD oxygen target and the danger of exceeding it.",
        back: "Target saturation 88–92% — excess oxygen can blunt the hypoxic drive and worsen carbon dioxide retention, causing drowsiness and respiratory failure.",
      },
      {
        topic: "Exacerbations",
        front: "Which three changes define a COPD exacerbation, and what should the patient do when two appear?",
        back: "Increased breathlessness, increased sputum volume, and increased sputum purulence — any two means attend clinic early for the action plan, not 'wait three days and see'.",
      },
      {
        topic: "Prevention",
        front: "List four elements of the COPD living-well package.",
        back: "Breathing retraining and energy conservation; graded exercise/pulmonary rehabilitation; small frequent energy-dense meals; influenza and pneumococcal vaccination — plus inhaler adherence and smoking or biomass-smoke reduction.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Chronic Obstructive Pulmonary Disease (COPD) (fact sheet)",
        year: "2024",
        note: "Global burden, causes including indoor air pollution, and management framework; check latest update.",
      },
      {
        organization: "CDC",
        title: "Chronic Obstructive Pulmonary Disease — Causes and Prevention",
        note: "Public resource on COPD risk factors including smoking and air quality.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on COPD, oxygen therapy and pulmonary rehabilitation. Verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Every Breath Counts",
    lessonTitle: "Pneumonia: The Ward Regular",
    description:
      "The infection that soaks the lungs — the fever, the rusty cough, the fast breathing that quietly outruns the elderly. Assessment, antibiotics, and the nursing that keeps the complication away.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain how pneumonia develops and identify the patients most at risk on Ghanaian wards.",
      "Recognise the classic presentation and the atypical presentation in the elderly.",
      "Prioritise nursing interventions — positioning, hydration, secretion clearance and oxygen monitoring.",
      "Apply prevention teaching: vaccination, chest care, oral hygiene and early escalation of deterioration.",
    ],
    tags: ["pneumonia", "chest infection", "respiratory", "elderly care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pneumonia is infection of the lung tissue itself — usually bacteria reaching the alveoli, most commonly **Streptococcus pneumoniae** in the community, followed by other bacteria, viruses and atypical organisms. The infected alveoli respond exactly as you learned in inflammation: they fill with exudate — fluid, proteins and white cells. A section of lung that should be air becomes sponge soaked with pus, and gas exchange falters across it.\n\nIt is called the ward regular honestly: it is among the commonest reasons adults occupy beds in our district hospitals — the elderly, people living with HIV, post-operative patients, the bedridden and malnourished — and it is a condition where nursing care changes the outcome directly, both by what you do and by how early you notice the patient sliding.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The classic picture assembles itself fast: fever with chills, a cough that becomes **productive** (pneumococcal sputum is famously rusty or blood-tinged), **pleuritic chest pain** — sharp, worse on deep breath — and breathlessness with a **raised respiratory rate**. On examination: crackles or bronchial breathing over the affected zone, dullness to percussion, and a tachycardia keeping pace with the fever.\n\nThe elderly rewrite this script. Their immune system signals weakly: there may be **no fever at all**, and the first signs are a **new confusion**, reduced appetite, a fall, incontinence or simple exhaustion, with fast breathing the only loud clue. Any deterioration framework you use will place the respiratory rate near the top — it is the single most sensitive early sign, before blood pressure dreams of falling. In people living with HIV, consider broader opportunistic causes; in bedridden patients, dependent-lung hypoventilation; in the post-operative and the intoxicated, aspiration.",
      },
      {
        type: "table",
        title: "Classic versus elderly presentation",
        body: "| Feature | Classic adult presentation | Common elderly presentation |\n|---|---|---|\n| Fever | High with shaking chills | May be absent or low-grade |\n| Cough | Productive, rusty or purulent | Often dry or dismissed as 'old cough' |\n| Pain | Sharp pleuritic pain localised | Vague discomfort or none |\n| Mental state | Alert, anxious | NEW CONFUSION — often the only early sign |\n| Mobility | Reduced by illness | Falls, exhaustion, off legs |\n| Respiratory rate | Raised early | Raised early — the sign you must not ignore |\n| Outcome risk | Usually good with prompt treatment | High — deterioration can be rapid and quiet |",
      },
      {
        type: "clinical_pearl",
        body: "Treat the respiratory rate as the pulse of the lung. In pneumonia — and in every ward patient — a rate creeping from 18 to 24 to 28, or a temperature-pulse-respiration pattern rising together, is the body announcing sepsis hours before blood pressure falls. Chart it honestly, chart it hourly when it matters, and report the trend, not just the number.",
      },
      {
        type: "case",
        title: "The quiet grandmother",
        body: "A 74-year-old grandmother, admitted after a fall, has been 'a bit confused' since yesterday evening; the night nurse charted temperature 37.4 °C, pulse 98, respirations 26 — 'all normal for age'. This morning she answers slowly, is not interested in porridge, and her respirations are 30 with a faint crackle at the right base. What is your reading?\n\nAnswer: New confusion plus a climbing respiratory rate and reduced appetite in an elderly patient is pneumonia until examined and reviewed — the 'normal for age' charting was the missed alarm. Take a full set of vitals, count respirations honestly for one minute, auscultate if trained to do so, and report immediately with the trend across shifts: 'She was 22 yesterday evening, she is 30 now and newly confused.' Early antibiotics, oxygen assessment, hydration and chest care in the next hours will decide whether this stays pneumonia or becomes sepsis.",
      },
      {
        type: "quiz_prompt",
        title: "Why deep breathing after surgery?",
        body: "Your post-operative laparotomy patient has been flat in bed for two days and is developing a temperature. Explain in pathophysiology terms why she is at risk of pneumonia and what you do about it.\n\nAnswer: Shallow breathing from wound pain plus lying flat leaves dependent alveoli under-ventilated — their secretions pool, and stagnant secretions grow bacteria (atelectasis then infection). The response is taught chest physiotherapy: deep-breathing exercises and supported coughing every hour while awake, sitting her upright as early as possible, adequate pain control so breathing stays deep, incentive spirometry where available, and early mobilisation.",
      },
      {
        type: "text",
        title: "The nursing package",
        body: "**Position:** upright to lower the diaphragm and expand the bases; in unilateral pneumonia, lying with the affected side down splints the pleuritic pain (discuss with the team — some patients breathe better lying on the affected side, some need the healthy side up — individualise with observation).\n\n**Clear the secretions:** hydrated mucus moves — push oral fluids unless restricted; teach deep breaths with a pause and an effective (not explosive) cough or 'huff'; humidify dry harmattan air where possible; provide tissues and a bag, and coach position changes every two hours for the bedridden.\n\n**Support the fever and fatigue:** antipyretics and fluids as prescribed, light clothing, skin and mouth care (a dry, neglected mouth seeds the lungs — oral hygiene is pneumonia prevention in the elderly and the tube-fed).\n\n**Watch the cliff:** hourly-or-more frequent observations when the patient is unwell; report rising rate, falling pressure, new confusion or falling urine output — sepsis has a signature, and you are the one holding the pen. **Finish the course:** teach patients why the antibiotic course must be completed even when they feel better by day three — relapse and resistance are the price of stopping.",
      },
      {
        type: "memory_trick",
        body: "For the elderly presentation: 'Pneumonia in the old whispers instead of screaming — CONFUSION is its fever.' For your care package, 'P.H.O.B.E.' — Position upright, Hydrate, Oxygen per prescription and monitored, Breathe deep and cough, Escalate early the rising rate. For prevention: 'Vaccinate the vulnerable, clear the chest, clean the mouth, move the body.'",
      },
      {
        type: "summary",
        body: "- Pneumonia fills alveoli with infective exudate; S. pneumoniae leads the community list.\n- Classic picture: fever, productive cough, pleuritic pain, tachypnoea, crackles. Elderly whisper: new confusion, appetite loss, falls — with the respiratory rate as the reliable early sign.\n- Nursing package: upright positioning, hydration and secretion clearance, fever and mouth care, monitored oxygen, chest physiotherapy for the immobile and post-operative.\n- The rising respiratory rate and parallel vital-sign trends are sepsis announcing itself — escalate the trend early.\n- Prevent with influenza and pneumococcal vaccination of the vulnerable, chest care, oral hygiene and early mobilisation; teach full antibiotic course completion.",
      },
    ],
    questions: [
      {
        topic: "Pneumonia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding is most typical of pneumococcal pneumonia sputum?",
        options: [
          "Frothy pink sputum",
          "Rusty or blood-tinged purulent sputum",
          "Clear watery sputum",
          "Currant-jelly sputum",
        ],
        correctIndex: 1,
        explanation:
          "Pneumococcal pneumonia classically produces rusty or blood-tinged purulent sputum — the breakdown of red cells mixing with the exudate. Frothy pink suggests pulmonary oedema; currant-jelly suggests infection with certain organisms like Klebsiella.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Elderly Presentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An 80-year-old patient has new confusion, poor appetite and a respiratory rate rising from 20 to 28, with temperature 37.2 °C. What is the correct interpretation?",
        options: [
          "Normal ageing — elderly patients are always a bit confused and breathe faster",
          "The normal temperature excludes pneumonia; assess for other causes at leisure",
          "This pattern is compatible with pneumonia in the elderly — assess fully and escalate now",
          "Wait for a fever to develop before reporting, to avoid false alarms",
        ],
        correctIndex: 2,
        explanation:
          "The elderly show pneumonia quietly: new confusion, reduced intake and tachypnoea, frequently without fever. The rising respiratory rate plus mental change demands urgent assessment — waiting for classic signs is how elderly patients with pneumonia become elderly patients with sepsis.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Nursing Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which bundle of nursing measures best prevents pneumonia in a bedridden post-operative patient?",
        options: [
          "Strict bed rest flat in bed, minimal disturbance, and oral fluids restricted to avoid choking",
          "Upright positioning as early as possible, hourly deep-breathing and supported cough exercises, pain control enabling deep breaths, oral hygiene and early mobilisation",
          "Regular prophylactic antibiotics and a fan to cool the fever",
          "Suppression of all coughing to protect the wound",
        ],
        correctIndex: 1,
        explanation:
          "Post-operative and bedridden lungs develop atelectasis and pooled secretions. Upright positioning, deep breathing, effective coughing, adequate analgesia for deep breaths, mouth care and early movement clear the lung — prophylactic antibiotics and cough suppression are not the answer.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Hard",
        stem: "In a patient treated for pneumonia, which trend should trigger the most urgent escalation for possible sepsis?",
        options: [
          "Temperature returning to normal on day two of antibiotics",
          "A productive cough that is loosening and clearing",
          "Respirations rising from 24 to 30 with new confusion and reducing urine output",
          "Complaints of mild pleuritic pain on coughing",
        ],
        correctIndex: 2,
        explanation:
          "A climbing respiratory rate with new confusion and falling urine output is the sepsis trajectory — perfusion and oxygenation are failing. Improving temperature, loosening cough and mild pleuritic discomfort all point toward recovery, not deterioration.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Presentation",
        front: "How does pneumonia present differently in the elderly?",
        back: "Quietly: new confusion, reduced appetite, falls or 'off legs' — often without fever. The respiratory rate is the dependable early sign; treat tachypnoea plus mental change as pneumonia until reviewed.",
      },
      {
        topic: "Assessment",
        front: "Why is the respiratory rate the 'pulse of the lung' in pneumonia?",
        back: "It rises earliest and tracks deterioration — climbing rates plus parallel rises in temperature and pulse, with falling urine output, form the signature of developing sepsis hours before blood pressure falls.",
      },
      {
        topic: "Nursing Care",
        front: "Name five components of pneumonia nursing care.",
        back: "Upright positioning; hydration to mobilise secretions; deep-breathing and effective cough coaching; monitored oxygen as prescribed; mouth and skin care — with frequent observations and early escalation of deterioration.",
      },
      {
        topic: "Prevention",
        front: "State four prevention strategies for pneumonia in vulnerable patients.",
        back: "Influenza and pneumococcal vaccination per schedule; chest physiotherapy and early mobilisation after surgery; diligent oral hygiene; and prompt attention to early deterioration to prevent progression.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pneumonia in Children and Adults — Epidemiology and Management",
        note: "Fact sheet resources on pneumonia burden and prevention; check latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National protocols for pneumonia management; verify current edition.",
      },
      {
        organization: "CDC",
        title: "Pneumonia — Risk Factors, Treatment and Prevention",
        note: "Public health reference on pneumococcal disease and vaccination.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on respiratory infections and chest physiotherapy. Verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Every Breath Counts",
    lessonTitle: "Tuberculosis: Ghana's Old Enemy",
    description:
      "The cough with a calendar — two weeks or more. Screening, sputum, the six-month road, and the nurse who protects the family, treats the patient as a person and hunts the defaulters.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Describe the transmission and natural history of tuberculosis, including latent versus active disease.",
      "Apply the screening pathway for a cough of two weeks or more and outline Ghana's diagnostic tools.",
      "Structure the six-month treatment journey and teach recognition of drug side effects.",
      "Implement ward and community infection control — ventilation, cough etiquette and protecting the vulnerable.",
    ],
    tags: ["tuberculosis", "airborne infection", "contact tracing", "public health"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Tuberculosis has been breathing alongside Ghanaians for generations, and it remains one of our most burdensome infections. It is caused by **Mycobacterium tuberculosis**, spread by **airborne droplet nuclei** — the invisible particles a coughing patient launches into the air of a crowded waiting room, a shared bedroom, a trotro. Prolonged, close contact matters most; that is why whole households and crowded workspaces are the battlegrounds.\n\nMost people who inhale the bacillus contain it: their immune system walls it off, producing **latent TB infection** — alive in the body, not making the person ill, not spreading. But when immunity weakens — HIV, malnutrition, diabetes, silicosis, smoking, pregnancy, poverty's chronic stress — the wall crumbles and **active TB** declares itself. The old enemy's modern allies are exactly these.",
      },
      {
        type: "text",
        title: "The cough with a calendar",
        body: "The screening question that Ghana's National Tuberculosis Programme teaches every health worker is simple and powerful: **'Have you been coughing for two weeks or more?'** Behind that question stands the classic quartet: **chronic cough** (initially dry, later productive, sometimes blood-streaked), **fever** (often worst in the evening), **night sweats** that soak the shirt, and **weight loss** that clothes hide until they don't. Fatigue and reduced appetite complete the picture.\n\nTB does not only live in the lung: **lymph nodes**, the **spine** (Pott's disease — back pain, a stiff gait, a cold abscess), pleura, pericardium, meninges, kidneys and bone all host it. A young adult with unexplained weight loss and drenching night sweats is a TB screen waiting to happen — and, in our setting, an HIV test waiting to be offered, because the two diseases hunt as a pair.",
      },
      {
        type: "table",
        title: "The patient's journey through the pathway",
        body: "| Stage | What happens | The nurse's role |\n|---|---|---|\n| Screening | Cough 2+ weeks, night sweats, weight loss identified at OPD, CHPS or community outreach | Ask the calendar question EVERY time; fast-track suspected cases |\n| Diagnosis | Sputum tests (smear microscopy and molecular tests such as Xpert MTB/RIF), chest X-ray, HIV testing offered | Teach good sputum collection — deep cough, morning sample, outdoors where possible |\n| Treatment start | Standard first-line therapy (multiple drugs, fixed-dose combinations) begun | Explain the months ahead honestly; enroll a treatment supporter; nutrition counselling |\n| Continuation | Intensive phase, then continuation phase — months of daily dosing | Observe dosing where arranged; trace missed doses; screen contacts; watch side effects |\n| Cure and after | Treatment completed, sputum re-checked, return to normal life | Celebrate completion; counsel on late relapse signs; stigma-fighting in the community |",
      },
      {
        type: "clinical_pearl",
        body: "Teach sputum collection like a craft: deep breaths, a real cough from the chest, into the wide-mouthed container — not saliva, not a spit. Collect outdoors or by an open window. Two things are being protected: the diagnostic truth (saliva gives a false negative) and the household air (a closed room concentrates what a cough releases).",
      },
      {
        type: "case",
        title: "The quiet young man",
        body: "A 26-year-old driver's mate arrives at your district hospital OPD with 'four weeks of cough that started as malaria'. He has lost weight — his belt confirms it — and sweats at night. He is terrified of the HIV test the counsellor proposes, and mentions his pregnant wife and two junior brothers share one room. What must your care cover?\n\nAnswer: Take the history seriously as a TB screen and support sputum testing today. Offer the HIV test with privacy and compassion — his fear is the disease's best friend; whatever the result, the journey is treatable. Educate on cough etiquette (elbow or tissue, turned away), window-opening in that one room, and early screening of the wife and brothers — they are contacts, and contact investigation is how this chain breaks. Throughout, confidentiality is absolute: he decides who knows, because in his community stigma can cost him work, marriage and friendship.",
      },
      {
        type: "quiz_prompt",
        title: "The orange urine call-back",
        body: "Three weeks into treatment, a patient phones you, alarmed: 'My urine is orange-red and even my tears look coloured. Is the medicine killing me?' What do you tell him?\n\nAnswer: Orange-red discolouration of urine, tears and sweat is a harmless signature of rifampicin — one of his medicines at work. Warn him it can permanently stain contact lenses and is expected. THEN complete the safety net: ask about the alarm symptoms — yellow eyes (jaundice), dark urine with pale stools, abdominal pain, nausea with loss of appetite, vision changes or numb, tingling feet — which are the side effects that must be seen the same day.",
      },
      {
        type: "text",
        title: "Infection control: the ward as fortress",
        body: "The bacillus dies in sunshine and dilutes in moving air — build your defences on that. In the ward: keep suspected and confirmed pulmonary TB patients apart from others, and away from children, pregnant women and people living with HIV; open the windows — cross-ventilation is a treatment the building provides free; sunlight is a disinfectant, so daylight-filled rooms are protective; keep coughing patients outdoors or in well-ventilated areas when waiting.\n\nProtect yourself and colleagues: masks (fitting respirator-type where available) for prolonged close contact and aerosol-generating moments; teach every patient **cough etiquette** — cover the mouth with the elbow or a tissue, turn away from others, dispose of tissues safely, and wash hands. Sputum is collected outdoors. BCG vaccination of infants — the familiar scar — protects Ghanaian children mainly against the severe disseminated forms, miliary TB and TB meningitis.",
      },
      {
        type: "callout",
        title: "Adherence is a community project",
        body: "Six months of daily tablets is the treatment — and stopping early is how multi-drug resistant TB (MDR-TB) is born, a disease that costs years of harder, more toxic treatment. The nurse's toolkit is human: treatment supporters chosen by the patient, pill counts and home visits, phone credit for defaulter tracing, nutrition support, transport discussions, stigma counselling, and completion celebrated openly with the family. Every dose observed or traced is an investment in the whole community's lungs.",
      },
      {
        type: "memory_trick",
        body: "The screen: 'A cough with a CALENDAR — two weeks or more — think TB.' The classic quartet: 'Cough, night Fever, night Sweats, Slimming.' The harmless alarm: 'Orange tears and urine = rifampicin working, not harming.' The ward fortress: 'AIR and SUN — windows open, daylight in, coughs covered.' The adherence law: 'Miss the doses, meet the resistance.'",
      },
      {
        type: "summary",
        body: "- TB spreads by airborne droplet nuclei in prolonged close contact; latent infection activates when immunity falls — HIV, malnutrition, diabetes, silicosis, smoking.\n- Screen every cough of two weeks or more; classic quartet: chronic cough, evening fever, night sweats, weight loss; remember extrapulmonary sites and always offer HIV testing.\n- Diagnose with sputum (smear and molecular tests) and chest X-ray; teach deep-cough sputum collection outdoors.\n- Treatment is months-long combination therapy — adherence is the cure and the resistance prevention; know the harmless rifampicin orange and the jaundice/vision/numbness alarms.\n- Infection control is air and sun: separation, cross-ventilation, daylight, cough etiquette, masks where indicated, BCG protecting children against severe forms.",
      },
    ],
    questions: [
      {
        topic: "Tuberculosis Screening",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which symptom duration should trigger TB screening in Ghana?",
        options: [
          "Any cough lasting more than 2 days",
          "Cough lasting two weeks or more",
          "Cough occurring only at night for one week",
          "A single episode of coughing blood with no cough otherwise",
        ],
        correctIndex: 1,
        explanation:
          "The National Tuberculosis Programme screening trigger is a cough of two weeks or more — a duration that separates common self-limiting causes from TB. Haemoptysis without cough still merits assessment but the calendar question is the systematic screen.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Infection Control",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of ward measures best reduces TB transmission?",
        options: [
          "Keeping all windows closed to prevent draughts, and spraying disinfectant hourly",
          "Separating suspected pulmonary TB patients from others, cross-ventilating with open windows, maximising daylight, and teaching cough etiquette",
          "Wearing cloth masks only, since TB spreads by touching surfaces",
          "Grouping all coughing patients together in one closed consulting room",
        ],
        correctIndex: 1,
        explanation:
          "TB's droplet nuclei are diluted by moving air and killed by sunlight, and reduced at the source by covering coughs. Separating infectious patients protects the vulnerable, including children and people living with HIV; closed rooms and shared coughing spaces concentrate exposure.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Medication Teaching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient three weeks into TB treatment reports orange-red urine. What is the correct interpretation and response?",
        options: [
          "Kidney failure — stop all medicines and refer urgently",
          "A harmless, expected effect of rifampicin; reassure, warn about stained contact lenses, and ask about alarm symptoms such as jaundice or vision change",
          "An allergic reaction requiring immediate drug discontinuation",
          "Dehydration — double the fluids and continue without review",
        ],
        correctIndex: 1,
        explanation:
          "Rifampicin colours urine, sweat and tears orange-red — expected and harmless, though it stains soft contact lenses. Reassurance should be paired with the true alarm symptoms: jaundice, abdominal pain, vision change or peripheral numbness, which need same-day review.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Adherence",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Why is completing the full course of anti-TB drugs so critical to the wider community?",
        options: [
          "Incomplete cure leaves the patient permanently immune, protecting contacts",
          "Stopping early selects drug-resistant organisms that then spread and require longer, more toxic treatment to cure",
          "Partial treatment reduces infectiousness enough that contacts are safe",
          "The drugs are expensive, so wasting them is the only concern",
        ],
        correctIndex: 1,
        explanation:
          "Sub-therapeutic exposure lets bacilli with resistance survive and multiply — the origin of MDR-TB, which is harder to treat, more toxic to treat, and can spread to family and community. Adherence support is public health, not just patient care.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Screening",
        front: "What is Ghana's TB screening trigger, and what is the symptom quartet?",
        back: "A cough lasting two weeks or more. Quartet: chronic cough, evening fever, night sweats, weight loss — with fatigue and appetite loss, and an HIV test always offered.",
      },
      {
        topic: "Transmission",
        front: "How is TB transmitted, and who progresses from latent to active disease?",
        back: "Airborne droplet nuclei from a coughing patient, over prolonged close contact. Progression when immunity falls: HIV, malnutrition, diabetes, silicosis, smoking, extremes of age.",
      },
      {
        topic: "Sputum Collection",
        front: "State three teaching points for sputum collection.",
        back: "Deep cough from the chest (not saliva), ideally a morning sample; collect outdoors or by an open window; use the wide-mouthed container with a secure lid and label correctly.",
      },
      {
        topic: "Side Effects",
        front: "Which TB drug side effect is harmless, and which three are same-day alarms?",
        back: "Harmless: orange-red urine, sweat and tears from rifampicin. Alarms: yellow eyes (hepatitis), vision changes (ethambutol), and numbness or tingling of feet (isoniazid neuropathy).",
      },
      {
        topic: "Infection Control",
        front: "Give four ward-level TB infection control measures.",
        back: "Separate suspected pulmonary TB patients from the vulnerable; open windows for cross-ventilation; maximise daylight; teach cough etiquette — plus respirator-type masks for prolonged close or aerosol-generating contact.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "TB Elimination — Screening, Treatment and Infection Control Guidance",
        note: "WHO consolidated guidance on tuberculosis preventive care and programmatic management; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Tuberculosis Programme — Guidelines for Health Workers",
        note: "Ghana NTP screening, treatment and infection control guidance; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on tuberculosis and airborne infection control. Verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Every Breath Counts",
    lessonTitle: "Oxygen Therapy & Respiratory Care",
    description:
      "Oxygen is a medicine — right patient, right dose, right device, right monitoring. From concentrators in power cuts to cylinders by the bedside, and the target saturations that keep breathless patients safe.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Explain the difference between hypoxaemia and breathlessness, and why oxygen treats the former, not the latter.",
      "Select saturation targets for acutely ill adults and for patients at risk of hypercapnic failure.",
      "Compare oxygen delivery devices, sources and the practical realities of Ghanaian facilities.",
      "Apply oxygen safety rules and troubleshoot common equipment failures, escalating hypoxaemia appropriately.",
    ],
    tags: ["oxygen therapy", "pulse oximetry", "respiratory care", "patient safety"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A breathless patient is not automatically an oxygen-deficient patient. **Breathlessness** is a sensation with many masters — anaemia, anxiety, acidosis, pain, fever; **hypoxaemia** is a measurable fact — too little oxygen in the arterial blood, read at the fingertip as a low **oxygen saturation (SpO2)**. Oxygen corrects hypoxaemia. It is not a sedative for fear, not a tonic for tiredness, and not a routine comfort for every fast-breathing patient.\n\nOnce prescribed, oxygen becomes a medicine with your name on its safety: the right dose (a target saturation, not a flow guessed), the right device, the right monitoring, and the right reaction when the machine, the cylinder or the national grid lets you down. This lesson builds that judgement.",
      },
      {
        type: "text",
        title: "Targets, not taps",
        body: "The dose of oxygen is a **target saturation range**, and the ward's job is to hold the patient inside it. For most acutely ill adults the target is **94–98%**. For patients at risk of **hypercapnic respiratory failure** — the known or suspected COPD patient, the severely breathless long-term lung patient — the target is deliberately lower, **88–92%**, because their breathing drive partly depends on mild hypoxia, and generous oxygen can let carbon dioxide climb into drowsiness and respiratory failure.\n\nRecognise hypoxaemia early: falling saturation, central cyanosis (a LATE sign — by the time lips are blue, the crisis is old), new confusion or agitation, and tachypnoea with tachycardia. Know your oximeter's weaknesses too: it reads poorly with cold fingers and poor perfusion, nail polish, constant movement; it cannot detect carbon monoxide poisoning (it reads falsely normal); and in severe anaemia the saturation may read well while the blood carries too little oxygen overall — the fingertip number is one part of the picture, never the whole one.",
      },
      {
        type: "table",
        title: "Devices, sources and Ghanaian realities",
        body: "| Item | What it is | Practical nursing notes |\n|---|---|---|\n| Nasal cannula | Soft prongs in the nostrils, low flow | Comfortable, allows eating and talking; dries the nose at higher flows — humidify per protocol; check ears and cheeks for pressure damage |\n| Simple face mask | Covers nose and mouth, moderate flow | Needs an adequate minimum flow so exhaled carbon dioxide is washed out; remove for meals with an alternative ready |\n| Non-rebreather mask | Mask with reservoir bag, high flow, emergencies | Inflate the bag before fitting; highest delivered fraction without intubation; a bridge, not a destination — escalate while it works |\n| Oxygen cylinder | Compressed gas, portable independence | Secure upright to a stand or bed rail (a falling cylinder can shear its valve and become a missile); open the valve slowly; watch the pressure gauge; keep spare cylinder and key where the night shift can find them |\n| Oxygen concentrator | Extracts oxygen from room air, needs electricity | Keep 15–30 cm from the wall so air circulates; clean filters per schedule; runs warm — do not cover it; it needs a backup cylinder for power outages and must never be crowded with storage |\n\nHumidification matters for flows through cannula beyond the comfortable range or for long-duration therapy — dry oxygen cracks and thickens airway mucus. Follow your facility's protocol.",
      },
      {
        type: "clinical_pearl",
        body: "Oxygen feeds fire. No smoking, no candles, no kerosene lamps, no open cooking flames near oxygen — a flame in an oxygen-rich corner becomes a bonfire. Keep oils and grease (including shea butter and Vaseline on lips and faces) away from cylinders and valves; offer water-based lip care instead. Post the oxygen warning sign; secure every cylinder upright; and never allow a cylinder to be dragged or rolled like a barrel.",
      },
      {
        type: "case",
        title: "Two patients, one power cut",
        body: "On the same night shift, the ward's power fails. Bed 4 — a severe pneumonia patient on a concentrator via face mask, saturation 95% — and Bed 8 — a COPD exacerbation patient on a concentrator via nasal cannula, saturation 90% — both go quiet as the machines die. The ward has two full cylinders and one backup concentrator attached to the facility generator circuit.\n\nWhat do you do?\n\nAnswer: Move both patients off dead concentrators now: Bed 4 to a cylinder with a face mask at the prescribed flow, checking the cylinder's pressure gauge and securing it upright; Bed 8 to the second cylinder at their prescribed LOW flow, respecting the 88–92% target — do not open the flow 'for safety', or you may buy oxygen at the price of carbon dioxide retention. Re-check both saturations within minutes of switching, then at intervals; flag both for the generator circuit concentrator if available; phone the engineer about the failed unit; and document timings. In the morning, teach the ward: cylinders and keys ready for the next cut, because the next cut always comes.",
      },
      {
        type: "quiz_prompt",
        title: "The calm blue patient",
        body: "A patient with severe COPD is on high-flow oxygen and you notice the saturation is 99% — but he is becoming drowsy and his breathing is slowing. What is your reading, and what do you do?\n\nAnswer: Rising drowsiness with slowing breathing in a COPD patient on generous oxygen is carbon dioxide retention until reviewed: the excess oxygen has blunted the hypoxic drive. Report urgently, reduce oxygen to reach the 88–92% target as directed, monitor saturation and conscious level closely, and prepare for escalation including possible ventilatory support. High saturation in a COPD patient can be a danger sign, not a comfort.",
      },
      {
        type: "text",
        title: "The wider respiratory care package",
        body: "Oxygen is one instrument in an orchestra. Continue everything else that moves air: **positioning** — upright, leaning forward; **secretion clearance** — hydration, deep breathing, coached coughing and humidity; **breathing retraining** for the chronically breathless; and **rest pacing** to break the exhaustion spiral.\n\nWeaning and documentation: record the target range, the device, the flow and the saturation achieved at each check — 'oxygen running' is not a chart entry, it is an absence of one. Re-assess every patient on oxygen regularly: has the cause improved? Is the saturation holding in range on less oxygen? Can it come off — because every unnecessary hour on oxygen is unnecessary fire risk, dry mucosa and cylinder cost. When hypoxaemia deepens despite escalation, your job is recognition and referral: call early, prepare the patient, and hand over the whole story.",
      },
      {
        type: "memory_trick",
        body: "Oxygen is a DRUG — think 'D.R.U.G.': **D**ose = a target range (94–98%; 88–92% for the CO2-risk crew); **R**ight device for the need; **U**nderstand your sources — cylinder pressure, concentrator needs power and breathing room; **G**uard the fire rules. And the overnight mantra for equipment: 'Pressure, Position, Power' — check the gauge, secure the cylinder, know the backup plan.",
      },
      {
        type: "summary",
        body: "- Oxygen treats measured hypoxaemia, not breathlessness alone — a low SpO2, new confusion or cyanosis (a late sign) is your trigger.\n- Dose is a target: 94–98% for most acutely ill adults; 88–92% for those at risk of hypercapnic respiratory failure such as COPD.\n- Devices ladder from nasal cannula through simple mask to non-rebreather for emergencies; humidify longer or higher flows.\n- Sources in Ghana: cylinders — secured upright, gauge watched, key and spares findable; concentrators — ventilated, filter-cleaned, warm, needing a power-cut backup.\n- Safety absolutes: no flames or smoking, no oils or grease, warning signs posted, cylinders never dragged.\n- Chart target, device, flow and achieved saturation; reassess for weaning; escalate early when hypoxaemia deepens.",
      },
    ],
    questions: [
      {
        topic: "Oxygen Targets",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with known COPD and a severe exacerbation requires oxygen. Which target saturation range should guide titration?",
        options: [
          "94 to 98 percent",
          "88 to 92 percent",
          "100 percent at all times",
          "Below 85 percent to maintain the breathing drive",
        ],
        correctIndex: 1,
        explanation:
          "In patients at risk of hypercapnic respiratory failure, the 88–92% range provides adequate oxygenation while limiting carbon dioxide retention — the trade-off that keeps the patient breathing safely. Below 85% is hypoxaemia; chasing 100% risks CO2 narcosis.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A COPD patient on high-flow oxygen becomes drowsy with slowing respirations; saturation reads 99%. What is the priority interpretation and action?",
        options: [
          "He is finally resting comfortably — dim the lights and chart 'sleeping well'",
          "His pneumonia is resolving; reduce observations to four-hourly",
          "Probable oxygen-induced carbon dioxide retention — escalate urgently and adjust oxygen toward the 88–92% target as directed",
          "He needs his saturation pushed even higher to wake the brain",
        ],
        correctIndex: 2,
        explanation:
          "Drowsiness plus slowing breathing on generous oxygen in a COPD patient signals hypercapnic respiratory failure: excess oxygen removed the hypoxic drive. Escalate urgently, reduce flow toward the safe target under direction and monitor conscious level and saturation closely.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Equipment Safety",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which practice keeps oxygen therapy safe on the ward?",
        options: [
          "Resting the cylinder loosely against a wall so it is easy to roll to the next bed",
          "Applying shea butter around the mask edges and valves to prevent skin dryness",
          "Securing cylinders upright on stands, keeping oils and open flames away, and posting oxygen-in-use warning signs",
          "Covering the humming concentrator with a cloth to muffle noise at night",
        ],
        correctIndex: 2,
        explanation:
          "Cylinders must stand secured (a falling one can shear its valve with force), oils and grease can ignite in oxygen-rich equipment, flames and smoking are forbidden near oxygen, and warning signs protect everyone. Covering a running concentrator blocks its air intake and traps heat.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Equipment Management",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Power fails and a patient on a concentrator (face mask, prescribed flow) begins to desaturate. Your sequence should be:",
        options: [
          "Wait 20 minutes for the grid to return; most outages resolve quickly",
          "Switch the patient to a backup cylinder at the prescribed flow immediately, secure it upright, re-check saturation, and alert engineering while documenting the times",
          "Turn the flow to maximum on the next available cylinder to 'make up the lost time'",
          "Remove the mask and fan the patient until the concentrator restarts",
        ],
        correctIndex: 1,
        explanation:
          "Hypoxaemia tolerates no waiting: move to the backup cylinder at the PRESCRIBED flow (never maximum — dose discipline survives emergencies), verify the saturation response, notify the responsible team/engineer, and record the timeline. The next outage is planned for tonight's lesson learned.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Concepts",
        front: "Distinguish hypoxaemia from breathlessness, and state which one oxygen treats.",
        back: "Hypoxaemia is low arterial oxygen, measured as low SpO2 — oxygen's actual target. Breathlessness is a sensation with many causes (anaemia, anxiety, acidosis); giving oxygen without hypoxaemia treats nothing and adds risk.",
      },
      {
        topic: "Targets",
        front: "State the two standard saturation targets and who gets each.",
        back: "94–98% for most acutely ill adults; 88–92% for patients at risk of hypercapnic respiratory failure, such as COPD — enough oxygen to live, not so much that breathing slows.",
      },
      {
        topic: "Devices",
        front: "Name three oxygen delivery devices in order of increasing delivered concentration and one key point for each.",
        back: "Nasal cannula — comfortable, dries the nose at higher flows; simple face mask — needs adequate flow to wash out carbon dioxide; non-rebreather with reservoir bag — emergency bridge, inflate the bag before fitting and escalate while it holds.",
      },
      {
        topic: "Sources",
        front: "What three checks keep a ward's oxygen sources safe and reliable?",
        back: "Cylinders — secured upright, valve opened slowly, gauge watched, key and spares locatable; concentrators — breathing room from the wall, filters cleaned, never covered, power-cut backup planned; all — flames banned and warning signs posted.",
      },
      {
        topic: "Monitoring",
        front: "What are the limitations of pulse oximetry you must remember?",
        back: "Reads poorly with poor perfusion, cold fingers, nail polish or movement; cannot detect carbon monoxide poisoning (falsely normal); in severe anaemia it may read normally while oxygen DELIVERY is still inadequate — read it with the whole patient.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Oxygen Therapy for Children and Adults — Technical Guidance",
        note: "WHO guidance on oxygen sources, devices and safe use, including the WHO–UNICEF technical specifications for oxygen therapy devices; verify latest edition.",
      },
      {
        organization: "UNICEF",
        title: "Oxygen Access and Availability — Programme Guidance",
        note: "Field guidance on concentrators, cylinders and power planning in African health facilities; verify current resources.",
      },
      {
        organization: "Ghana Health Service",
        title: "Clinical Protocols for Emergency and Critical Care",
        note: "Facility-level emergency oxygen protocols; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on oxygenation, chest physiotherapy and respiratory monitoring. Verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Blood, Vessels & Anaemia",
    lessonTitle: "Anaemia: The Tired Blood",
    description:
      "The tiredness everyone blames on stress — but behind it may be hookworm, malaria, heavy menses or a poor pot of soup. Find the pallor, find the cause, and nurse the blood back.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Define anaemia using standard haemoglobin thresholds and classify its severity.",
      "Group the causes of anaemia in Ghana into blood loss, impaired production and increased destruction.",
      "Perform a focused assessment for anaemia using pallor sites, history and lifestyle clues.",
      "Apply nursing care and education — iron therapy teaching, dietary counselling and referral for severe disease.",
    ],
    tags: ["anaemia", "iron deficiency", "pallor", "nutrition"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Anaemia means the blood's haemoglobin has fallen below the normal threshold — **below 13 g/dL in men, below 12 in non-pregnant women, below 11 in pregnant women** — and the red cells can no longer carry oxygen at full capacity. Every tissue then runs slightly starved: the muscles feel it as weakness, the brain as dizziness and poor concentration, the heart as a compensating faster beat.\n\nIn Ghana this is one of the commonest problems you will meet, cutting across age and sex — and it is often dismissed as 'just stress' or 'too much work' until somebody looks at the conjunctiva. Your eyes and questions are the diagnostic instrument: find the pallor, then find which of three broad mechanisms emptied the blood — **loss, poor production or destruction** — because the treatment follows the mechanism, not the tiredness.",
      },
      {
        type: "text",
        title: "The three ways blood runs low",
        body: "**Lost:** chronic bleeding is the quiet thief — heavy monthly bleeding, peptic ulcer disease, hookworm and schistosomiasis in farming and fishing communities, haemorrhoids, repeated pregnancies. Always ask where blood could be leaving, visible or invisible (parasites and ulcers bleed into the gut without red ever being seen).\n\n**Under-produced:** iron-poor diets (maize-heavy meals without absorption helpers), folate deficiency, chronic disease — tuberculosis, HIV, chronic infections and kidney disease all suppress the marrow or trap iron; and the haemoglobinopathies like sickle cell disease produce structurally faulty cells.\n\n**Destroyed (haemolysis):** malaria — the great Ghanaian destroyer of red cells; sickle cell crises; some drugs and infections. The haemolysed patient may also show jaundice and dark urine as the broken cells spill their pigment.\n\nIron deficiency — the world's commonest — has signature bedside clues: **spoon-shaped nails (koilonychia)**, cracks at the mouth corners (**angular stomatitis**), a smooth sore tongue, and **pica** — the craving to eat ice, clay or our familiar white kaolin ('ayilo'). A patient confessing to ayilo is not confessing a habit — she is giving you the diagnosis.",
      },
      {
        type: "table",
        title: "Assessment at a glance",
        body: "| Where to look | What anaemia shows | Why it matters |\n|---|---|---|\n| Conjunctiva of the lower eyelid | Pale instead of healthy pink | Blood flows close to the surface — the classic screening site |\n| Palms and nail beds | Pallor; with pressure, colour returns slowly | Easily compared with your own hand; spoon nails suggest iron deficiency |\n| Tongue and mouth corners | Smooth sore tongue; angular cracks | Specific clues to iron and B-vitamin deficiency |\n| History — bleeding | Menses, ulcers, worms, previous transfusions | Points to the LOSS mechanism |\n| History — diet and infection | Maize-heavy diet, no greens; malaria episodes; TB/HIV; kidney disease | Points to PRODUCTION failure or DESTRUCTION |\n| Compensating body | Tachycardia, flow murmur, breathlessness on exertion | Severity gauge — the body's own monitor |",
      },
      {
        type: "clinical_pearl",
        body: "Severity is a clinical judgement, not only a number: severe anaemia with breathlessness at rest, a pounding heart, chest pain or heart failure signs is a medical emergency whatever the laboratory value. The severely anaemic heart works at its limit — and in the Ghanaian context of malaria or postpartum blood loss, a 'tired' patient who now cannot lie flat is a failing heart needing urgent referral, not a tonic.",
      },
      {
        type: "case",
        title: "The market porter",
        body: "A 32-year-old head porter at Makola complains of tiredness 'every month — it is my malaria'. She has breathlessness climbing the Adabraka hill, craves ice and ayilo, and her conjunctivae are pale; her menses are heavy and long. What is the shape of your nursing response?\n\nAnswer: Her story gathers all three threads — likely iron deficiency from heavy monthly losses, worsened by repeated malaria and an ayilo-craving diet. Assess severity (pulse, respiratory rate, pallor sites, ability to lie flat); document for laboratory confirmation of haemoglobin and cause; treat or refer per protocol — including malaria testing, menstrual history review and deworming as appropriate. Education: iron tablets taken as prescribed for the FULL course (months, not days), with a citrus fruit or juice to aid absorption and NOT with tea, which blocks it; expect dark stools; an iron-rich family menu — kontomire and other greens, beans, groundnuts, small fish, liver — plus sleeping under a treated net and prompt malaria treatment. And her 'monthly malaria' tiredness deserves a real diagnosis, not a repeat of antimalarials by guesswork.",
      },
      {
        type: "quiz_prompt",
        title: "The tea and tablet question",
        body: "A patient takes her iron tablet every morning with a big cup of tea, 'because tea washes everything down well'. What do you teach?\n\nAnswer: Tea (and coffee) contains tannins that bind iron and block its absorption — separate tablet and tea by at least one to two hours, and pair the dose with vitamin C instead: orange, pineapple, lime or a tomato. Iron is best absorbed on an empty stomach if tolerated, and the course continues for months after she feels better, refilling the body's iron stores. Dark stools are normal; persistent nausea or constipation should be reported, not stopped silently.",
      },
      {
        type: "text",
        title: "Prevention is a community meal",
        body: "Anaemia prevention in Ghana is nutrition and infection control woven together. Teach the plate: **iron sources** — dark green leaves (kontomire, ayoyo), beans, groundnuts, small fish, liver and lean meat; **absorption helpers** — citrus, pawpaw, mango, tomatoes alongside the meal; **absorption blockers** — strong tea or coffee with meals, and maize-only diets. Pair with infection control: treated bed nets and prompt malaria treatment; deworming per national programme; footwear on farms and in compounds to keep hookworm out; and antenatal iron-folate use where applicable.\n\nKnow your referral duty: severe anaemia, suspected haemoglobinopathy, anaemia of chronic disease, or a patient who does not respond to a proper iron course all need medical evaluation — the diagnosis is sometimes the ulcer, the kidney, the fibroid or the marrow, and no tablet replaces finding it.",
      },
      {
        type: "memory_trick",
        body: "The mechanisms: 'LOSE it, MAKE less of it, BREAK it' — bleeding/worms/menses; diet/chronic disease; malaria/sickling. The pallor map: 'PALM, PLATE (conjunctiva), PINCERS of the nails' — look where blood runs shallow. And remember: ayilo and ice in the history = iron deficiency knocking.",
      },
      {
        type: "summary",
        body: "- Anaemia = haemoglobin below 13 (men), 12 (non-pregnant women), 11 (pregnant) g/dL — severity is clinical as well as numerical.\n- Three mechanisms: loss (menses, ulcers, worms), under-production (diet, chronic disease), destruction (malaria, sickling).\n- Screen with pallor sites — conjunctiva, palms, nails — plus koilonychia, angular stomatitis and pica for iron deficiency.\n- Compensating signs (tachycardia, exertional dyspnoea) gauge severity; breathlessness at rest or heart failure is urgent referral.\n- Iron teaching: full course, vitamin C helper, no tea for one to two hours, dark stools expected; diet = greens, beans, small fish, liver plus citrus.\n- Non-response or severe disease → investigate the cause; anaemia is a finding, not a final diagnosis.",
      },
    ],
    questions: [
      {
        topic: "Anaemia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which bedside sites are the classic screening places for pallor in anaemia?",
        options: [
          "Forehead, chest and abdomen",
          "Lower eyelid conjunctiva, palms and nail beds",
          "Behind the knees and the earlobes only",
          "Sclerae and the tip of the nose",
        ],
        correctIndex: 1,
        explanation:
          "Conjunctivae, palms and nail beds carry blood close to the surface and show early pallor, easily compared with your own hand. Yellow sclerae suggest jaundice rather than anaemia.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Causes",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following best groups the three broad mechanisms of anaemia?",
        options: [
          "Blood loss, impaired production, increased destruction",
          "Infection, inflammation, infestation",
          "Dietary, genetic, psychological",
          "Acute, chronic, recurrent",
        ],
        correctIndex: 0,
        explanation:
          "Every anaemia works by one (or more) of: losing blood — menses, ulcers, worms; making too little or faulty blood — diet and chronic disease; or destroying blood — malaria and haemolysis. Grouping causes this way steers both questions and treatment.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Patient Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on iron tablets drinks strong tea with every dose. What teaching corrects this?",
        options: [
          "Tea improves iron absorption and should continue",
          "Separate tea and iron by one to two hours; take iron with a vitamin C source such as citrus instead",
          "Iron should be crushed into the tea for better taste",
          "Tea is only a problem if the patient is pregnant",
        ],
        correctIndex: 1,
        explanation:
          "Tannins in tea bind iron and sharply reduce absorption. Pair the dose with vitamin C — orange, lime, tomato — and keep tea at least an hour or two away from the tablet; continue the full course for months after feeling well.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Assessment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A woman with known chronic heavy menses now cannot lie flat, has a pulse of 118 and crackles in both lung bases. What does your reading become?",
        options: [
          "Simple tiredness from housework; advise rest and a tonic",
          "Mild anaemia needing only oral iron and diet counselling",
          "Severe anaemia with high-output cardiac strain — urgent referral and monitored care",
          "Asthma, since she is breathless lying flat",
        ],
        correctIndex: 2,
        explanation:
          "Orthopnoea, tachycardia and basal crackles in a chronically anaemic patient signal the overworked heart decompensating — high-output failure. This is the severe-anaemia emergency: urgent medical review, monitored vitals, positioning and likely transfusion decisions made by the team.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Definition",
        front: "State the standard adult haemoglobin thresholds for anaemia.",
        back: "Below 13 g/dL in men; below 12 g/dL in non-pregnant women; below 11 g/dL in pregnant women. Severity is judged clinically as well as numerically.",
      },
      {
        topic: "Mechanisms",
        front: "Give the three mechanisms of anaemia with a Ghanaian example of each.",
        back: "Loss — heavy menses, hookworm, peptic ulcer; under-production — iron-poor diet, TB or kidney disease; destruction — malaria, sickle cell haemolysis.",
      },
      {
        topic: "Iron Deficiency Clues",
        front: "Name four bedside clues specific to iron deficiency.",
        back: "Spoon-shaped nails (koilonychia), angular stomatitis at the mouth corners, smooth sore tongue, and pica — craving ice or clay such as ayilo.",
      },
      {
        topic: "Iron Therapy",
        front: "Summarise iron tablet teaching in one breath.",
        back: "Full course for months even after feeling better; pair with vitamin C; keep tea and coffee one to two hours away; dark stools are normal; report persistent nausea or constipation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Anaemia (fact sheet)",
        year: "2024",
        note: "Global thresholds, burden and control strategies; check latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Nutrition Policy and Anaemia Control Guidance",
        note: "Ghana anaemia programming including maternal and child supplementation; verify current edition.",
      },
      {
        organization: "UNICEF",
        title: "Nutrition — Anaemia Prevention Programming",
        note: "Field guidance on iron-folic acid, fortification and dietary diversification.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on haematological disorders. Verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Blood, Vessels & Anaemia",
    lessonTitle: "Sickle Cell Disease: The Ghanaian Reality",
    description:
      "Crescent cells born from both parents' genes — the pain that deserves to be believed, the malaria that must be prevented, and the compassionate, structured care that lets patients live full lives.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Explain the genetics of sickle cell disease and the inheritance risk when both parents carry the trait.",
      "Describe how sickled cells produce vaso-occlusion and haemolysis, and list the common crisis triggers.",
      "Differentiate vaso-occlusive, sequestration, aplastic and acute chest crises, and the emergencies among them.",
      "Apply crisis nursing care and long-term prevention education, including pain advocacy, hydration and genetic counselling.",
    ],
    tags: ["sickle cell disease", "crisis", "genetics counselling", "pain management"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sickle cell disease is Ghana's inherited reality: roughly one in every fifty Ghanaian babies is born with it, and around one in five of us carries the trait. It is a single change in the haemoglobin — one amino acid — that turns round, pliable red cells into rigid crescents when they give up oxygen. Those crescents **block small vessels** (vaso-occlusion — the source of the famous pain) and are **destroyed early** by the spleen and circulation (haemolysis — the source of the chronic anaemia and yellow eyes).\n\nThis lesson is about a lifetime condition, not a single event. You will learn what the cells do, what a crisis looks like, which complications are emergencies — and just as importantly, how to care for the person behind the genotype: the teenager in 9/10 pain whom somebody labelled 'dramatic', and the couple who did not know their statuses before the wedding.",
      },
      {
        type: "text",
        title: "Genetics — the question every family asks",
        body: "Haemoglobin genes come in pairs, one from each parent. **HbA** is normal; **HbS** is the sickle variant. A person with **HbAS** has sickle **trait** — one normal gene holding the fort: generally healthy, malaria-resistant to a degree, and often unaware. **HbSS** is sickle cell **disease** — no normal gene to compensate; **HbSC** (one S, one C) is a common and sometimes milder, but still serious, Ghanaian form.\n\nThe arithmetic every couple must hear: **trait (AS) with trait (AS)** — every pregnancy carries a one-in-four (25%) chance of a child with HbSS; a one-in-two chance of a child with trait; a one-in-four chance of an unaffected AA child. AS with SS faces a coin-flip between SS child and carrier in every pregnancy. This is why Ghana encourages **knowing your status before marriage** — a message carried into churches, mosques, schools and durbars, and delivered non-directively: the choice belongs to the couple; the information belongs to them both. Diagnosis is by haemoglobin electrophoresis (or molecular testing), and newborn screening services exist in parts of Ghana — early diagnosis saves lives.",
      },
      {
        type: "table",
        title: "Crisis types — recognition and urgency",
        body: "| Crisis | Hallmark picture | Urgency level |\n|---|---|---|\n| Vaso-occlusive (pain) | Deep gnawing pain — long bones, spine, chest, abdomen; infants show hand–foot swelling | Urgent: prompt analgesia, hydration, warmth, treat triggers |\n| Acute chest syndrome | New fever, chest pain, breathlessness, new infiltrate on chest imaging | EMERGENCY — leading killer; oxygen, urgent medical care |\n| Splenic sequestration (mainly children) | Sudden pallor, weakness, abdominal fullness, rapidly enlarging spleen; Hb drops fast | EMERGENCY — collapse can follow in hours |\n| Aplastic crisis | Sudden severe pallor and fatigue, low reticulocytes; often after viral infection | Urgent — transfusion usually needed |\n| Stroke (mainly children) | Sudden weakness, facial droop, slurred speech, seizure | EMERGENCY — every minute counts |\n| Priapism (males) | Persistent painful penile erection | Urgent — prolonged episodes damage tissue; come early |",
      },
      {
        type: "text",
        title: "Why the crises come",
        body: "Sickling is triggered by anything that dehydrates, deoxygenates or stresses red cells. The list is the patient's prevention manual: **infection** (especially malaria and pneumonia), **dehydration** (harmattan heat, forgotten water bottles, vomiting and diarrhoea), **cold** (dry-season harmattan nights, cold baths, ceiling fans on bare skin), **hypoxia** (high altitude, severe exertion, poorly managed anaesthesia), **emotional stress**, and **exhaustion**.\n\nBecause haemolysis is continuous, most patients live with a baseline haemoglobin around 6–9 g/dL — 'normal for them' — so a further drop during crises is dangerous quickly. The spleen scars itself into uselessness by childhood in HbSS (**functional asplenia**), which is why encapsulated bacteria — pneumococcus, Haemophilus, salmonella — cause the infections that admit these patients: penicillin prophylaxis and vaccination (including pneumococcal) are part of standard Ghanaian paediatric care. Long-term, the same blocked vessels and haemolysis sculpt the complications of adult life: avascular necrosis of the hip, leg ulcers that refuse to heal, gallstones, kidney concentrating problems (the child who wets the bed is not lazy — his kidneys cannot concentrate urine), retinal disease (especially in HbSC), and strokes.",
      },
      {
        type: "clinical_pearl",
        body: "Believe the pain. Sickle pain is ischaemic — tissue starving of blood — and it is frequently undertreated because the patient 'looks fine' between screams or is wrongly labelled drug-seeking after years of presentations. Assess pain properly (site, severity score, what worked last time), give prescribed analgesia PROMPTLY, and let the patient say what relieves them. Dignity is part of the prescription.",
      },
      {
        type: "case",
        title: "Two patients, one genotype",
        body: "Bed 6: a 16-year-old girl with HbSS, day two of a vaso-occlusive crisis affecting her back and thighs, curled on her side, pulse 104, drinking reluctantly. Bed 6's neighbour, a 3-year-old, arrived suddenly pale and floppy with a visibly enlarged abdomen; his mother says 'his eyes turned white since morning' and his last fever was two days ago. What does each need?\n\nAnswer: The adolescent is in a classic pain crisis — prescribed analgesia on schedule, not 'when she asks nicely'; oral and IV fluids to reverse dehydration; warmth, rest and analgesia review by the team; malaria screen and treatment for any found infection; encourage drinking, chart intake and urine. The toddler is the emergency — sudden pallor, weakness and a fast-growing spleen is acute splenic sequestration: her blood is pooling in the spleen and the circulating volume is collapsing. Call for urgent medical review, monitor vitals closely, position and reassure, and prepare for urgent transfusion decisions. Two patients, same genotype, two completely different clock-speeds.",
      },
      {
        type: "quiz_prompt",
        title: "The wedding conversation",
        body: "A young couple comes for pre-marital counselling; laboratory results show both are HbAS. They ask: 'So does every child of ours have sickle cell disease?' What do you explain?\n\nAnswer: No — for each pregnancy the chances are one in four (25%) for HbSS disease, one in two (50%) for trait like themselves, and one in four (25%) for a child with no sickle gene at all. Explain that every pregnancy rolls these dice independently of previous children, that prenatal and newborn diagnostic options exist, and that this information is shared so the couple can plan — the decision is theirs, made with full knowledge and without pressure.",
      },
      {
        type: "text",
        title: "Living well: the prevention package",
        body: "The modern management of sickle cell disease is prevention, and much of it is nursing: **daily folic acid** supports the marrow's constant red-cell production; **hydroxyurea** — where prescribed — reduces crisis frequency and is the disease-modifying backbone in many programmes; **penicillin prophylaxis and vaccination** shield the asplenic child; **malaria prevention** — treated bed net plus prompt fever treatment — because malaria is the commonest crisis trigger in Ghana; **hydration always** — a water bottle as a body organ, with extra fluids in heat and illness; **warmth and layered clothing** in harmattan; **paced activity** with rest gaps; a **balanced diet**; and **regular clinic review** even when well.\n\nCrisis-first-aid education for families: give fluids, keep warm, give prescribed pain medication at home protocol, and COME EARLY — especially for fever, chest pain, unusual pallor, swelling of hands or feet in infants, weakness or drowsiness. Every 'she waited two days at home' story is a preventable admission.\n\nAnd carry the community message wherever you serve: sickle cell disease is an inherited condition, not a curse, not punishment, not spiritual failure. Stigma keeps young people silent about their status and keeps couples from testing. Your respectful voice at the clinic, the school and the durbar changes that arithmetic.",
      },
      {
        type: "memory_trick",
        body: "Crisis triggers — think **C.H.I.P.**: **C**old, **H**ypoxia, **I**nfection, **P**oor hydration (dehydration). The crisis ladder: 'PAIN blocks, CHEST kills, SPLEEN steals blood, MARROW stalls, BRAIN stops.' The genetics coin: 'Trait times trait = one in four sick, every pregnancy rolls again.' The bedside rule: 'Believe the pain — it is ischaemia, not drama.'",
      },
      {
        type: "summary",
        body: "- One amino-acid change makes HbS; deoxygenated cells polymerise into rigid crescents that block vessels (pain) and are destroyed early (chronic haemolytic anaemia).\n- AS × AS parents: 25% SS disease per pregnancy; know your status before marriage — testing, counselling, non-directive support.\n- Triggers: infection (malaria!), dehydration, cold, hypoxia, stress; prevention = folic acid, hydroxyurea where prescribed, prophylaxis and vaccination, nets, water, warmth, paced activity.\n- Emergency crises: acute chest syndrome, splenic sequestration, stroke, prolonged priapism — recognise fast, escalate fast.\n- Vaso-occlusive pain care: prompt scheduled analgesia, hydration, warmth, trigger treatment — and belief in the pain.\n- Chronic realities: baseline anaemia, functional asplenia, leg ulcers, hip necrosis, kidney concentrating defects, retinopathy — monitor, teach and support for life.",
      },
    ],
    questions: [
      {
        topic: "Genetics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Both parents have sickle cell trait (HbAS). What is the chance that EACH pregnancy produces a child with sickle cell disease (HbSS)?",
        options: [
          "100 percent — all their children will have disease",
          "50 percent",
          "25 percent, with the same odds for every pregnancy independent of previous children",
          "0 percent — trait cannot produce disease",
        ],
        correctIndex: 2,
        explanation:
          "Trait × trait gives a one-in-four chance of HbSS per pregnancy — the dice re-roll with every child, so a family with one affected child has the same 25% risk for the next. This is the core fact of genetic counselling.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Crisis Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A teenager with HbSS arrives with severe back and thigh pain, her third such admission, grimacing and rocking. A colleague mutters about 'drug-seeking behaviour'. What is correct nursing care?",
        options: [
          "Delay analgesia and observe her behaviour for consistency first",
          "Assess the pain properly and give prescribed analgesia promptly, alongside hydration and trigger screening",
          "Tell her the pain cannot be as bad as she says, since her vital signs are stable",
          "Discharge her quickly to break the 'admission habit'",
        ],
        correctIndex: 1,
        explanation:
          "Sickle pain is ischaemic and real; a history of repeated admissions reflects the disease, not dishonesty. Prompt scheduled analgesia, hydration, warmth and treatment of triggers (screen for malaria and infection) is the standard of care. Stigma delays treatment and costs lives.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Emergencies",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A 3-year-old with HbSS becomes suddenly pale and weak with an enlarging abdomen and a rapidly enlarging mass in the left upper quadrant. What is this and the response?",
        options: [
          "Simple worsening of his chronic anaemia — oral iron and follow-up next week",
          "Acute splenic sequestration — blood is pooling in the spleen; urgent medical review and transfusion readiness",
          "Constipation with faecal loading — enema and diet advice",
          "A vaso-occlusive pain crisis of the abdominal wall — analgesia only",
        ],
        correctIndex: 1,
        explanation:
          "Sudden pallor, weakness and a rapidly growing spleen is sequestration: the spleen traps a large share of the child's blood and circulating volume collapses within hours. This is an emergency — urgent escalation with monitoring and transfusion decisions, never outpatient follow-up.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which prevention measure specifically addresses the commonest infection-related crisis trigger in Ghana?",
        options: [
          "Avoiding all physical activity permanently",
          "Sleeping under an insecticide-treated net with prompt treatment of any fever",
          "Eating only boiled foods for life",
          "Taking daily iron tablets instead of folic acid",
        ],
        correctIndex: 1,
        explanation:
          "Malaria is the leading infection trigger of sickle crises in Ghana — treated bed nets plus prompt, tested treatment of every fever is core prevention, alongside vaccination, penicillin prophylaxis where prescribed, hydration, warmth and clinic review.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Pathophysiology",
        front: "What two processes does sickled haemoglobin cause, and what does each produce clinically?",
        back: "Vaso-occlusion — rigid crescents block small vessels, causing ischaemic pain and organ damage; haemolysis — early destruction of cells, causing chronic anaemia, jaundice and gallstones.",
      },
      {
        topic: "Genetics",
        front: "State the offspring risks of an AS × AS coupling.",
        back: "Per pregnancy: 25% HbSS disease, 50% HbAS trait, 25% HbAA unaffected — odds re-set every pregnancy. HbSC arises when one parent carries HbC.",
      },
      {
        topic: "Crisis Recognition",
        front: "Which four sickle presentations are emergencies demanding immediate escalation?",
        back: "Acute chest syndrome (fever, chest pain, breathlessness), splenic sequestration (sudden pallor with enlarging spleen), stroke (sudden weakness or speech change), and priapism that will not settle.",
      },
      {
        topic: "Prevention",
        front: "List six pillars of the sickle prevention package.",
        back: "Daily folic acid; hydroxyurea where prescribed; penicillin prophylaxis and vaccination; malaria prevention with nets and prompt treatment; constant hydration plus warmth and paced activity; regular clinic review with early presentation for fever or pain.",
      },
      {
        topic: "Chronic Care",
        front: "Why does a child with HbSS wet the bed, and what does it signal?",
        back: "Sickle damage to the kidney's concentrating ability causes dilute, high-volume urine — nocturnal enuresis is a renal feature of the disease, not laziness or naughtiness.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sickle Cell Disease — Global Burden and Management Guidance",
        note: "WHO resources on haemoglobin disorders in Africa; check latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "Sickle Cell Disease Clinical Management Guidelines (Ghana)",
        note: "National guidance including newborn screening and crisis protocols; verify current edition.",
      },
      {
        organization: "CDC",
        title: "Sickle Cell Disease — Complications and Prevention",
        note: "Public health reference on crises, infection prevention and hydroxyurea.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on haematological and genetic disorders. Verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Blood, Vessels & Anaemia",
    lessonTitle: "Blood Transfusion: Gift and Risk",
    description:
      "The gift that saves — until the wrong unit meets the wrong patient. The groups, the checks, the fifteen minutes that matter most, and the reactions you must catch mid-flow.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain ABO and Rh grouping, compatibility and the role of crossmatching.",
      "Perform the full transfusion safety routine — identity checks, baseline observations, timing and documentation.",
      "Recognise the major transfusion reactions, their timing and the universal first response.",
      "Apply Ghana-specific blood safety practice: the National Blood Service, voluntary donation and conservative transfusion decisions.",
    ],
    tags: ["blood transfusion", "transfusion reaction", "patient safety", "blood groups"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A unit of blood can snatch a mother from postpartum haemorrhage, a child from severe malaria anaemia, a wounded driver from the theatre table — no medicine on the shelf matches it. It is also a living tissue transplant with risks of its own, and in Ghana's realities — voluntary donors too few, replacement donation from worried families common, cold-chain and laboratory capacity stretched — the safety of a transfusion rests heavily on the nurse at the bedside.\n\nThis lesson walks the whole journey: the **groups and crosses** that decide which unit a patient may receive; the **checks** that guard the moment of connection; the **first fifteen minutes** where most lethal reactions announce themselves; and the **reactions** themselves — how each presents and the response that is always the same first.",
      },
      {
        type: "text",
        title: "Groups, compatibility and the crossmatch",
        body: "Red cells carry surface markers — the **A** and **B** antigens — while plasma carries antibodies against the markers the person lacks. Group **O** red cells carry neither antigen, so almost no plasma attacks them: O is the **universal red-cell donor**. Group **AB** plasma carries no anti-A or anti-B, so AB is the universal plasma donor and the **universal red-cell recipient**. The **Rh D** antigen adds the plus or minus: Rh-negative patients can develop antibodies against Rh-positive cells, a particular danger in women of childbearing age because of haemolytic disease in future pregnancies.\n\n**Grouping** identifies the patient's ABO and Rh type; **crossmatching** then mixes the patient's serum with the donor's red cells to confirm no reaction — the final laboratory firewall before any unit is released. A unit labelled and crossmatched for one patient is that patient's unit alone: not 'the same group, so it will do'. Transfusion decisions belong to clinicians, guided by symptoms and severity — a number alone is not an indication, and in anaemia the first questions are 'can we treat the cause and support the marrow instead?'",
      },
      {
        type: "table",
        title: "The bedside routine, step by step",
        body: "| Stage | Actions | Why it matters |\n|---|---|---|\n| Preparation | Doctor's order reviewed; consent obtained and explained; IV access working; baseline temperature, pulse, respirations and blood pressure recorded | You cannot detect a change you never measured — baseline is the comparison for everything |\n| The double check | TWO qualified nurses, AT THE BEDSIDE, check together: patient identity (ask the patient to state name, check wristband and folder) against the compatibility form and the unit label — blood group, unit number, expiry date; inspect the unit for clots, discolouration or haemolysis | The commonest fatal error is administration of the wrong unit; two pairs of eyes with the patient in the loop is the barrier |\n| Starting | Correct blood-giving set with filter, primed; start slowly per prescription and protocol; STAY AT THE BEDSIDE for the first 15 minutes | The severest reactions begin early — your presence is monitoring |\n| Ongoing | Observations at 15 minutes, then per facility schedule (commonly every 30–60 minutes); watch the patient, not only the drip | Febrile and allergic reactions declare mid-flow; TRALI and overload come later |\n| Completion | Time limits per policy for one unit; document start and end times, unit number, observations and any reaction; sign | The record is the evidence and the safety net for the next transfusion |",
      },
      {
        type: "clinical_pearl",
        body: "One universal reflex for every suspected reaction: STOP the transfusion, disconnect the blood set and keep the line open with normal saline as protocol directs, check the patient's airway and vital signs, call the medical team and the blood bank, and keep the unit and all paperwork for investigation. Then document timings and findings. Every reaction pathway begins with those same five steps — learn them until they are reflexes.",
      },
      {
        type: "table",
        title: "The reactions you must recognise",
        body: "| Reaction | Typical timing | Signature signs | First-line meaning |\n|---|---|---|---|\n| Acute haemolytic (wrong blood) | Early — often within minutes | Fever and chills, loin or chest pain, hypotension, dark urine, feeling of doom | Emergency — stop, escalate, renal protection |\n| Febrile non-haemolytic | During or soon after | Fever, rigors, no hypotension or urine change | Commonest; stop, assess, treat per protocol, re-rule-out haemolysis |\n| Allergic / urticarial | During | Itching, rash, hives | Slow or stop per protocol, antihistamine as ordered, monitor |\n| Anaphylactic | Rapid | Airway swelling, wheeze, collapse, shock | Emergency — resuscitation call, adrenaline per protocol |\n| TRALI (lung injury) | Within 6 hours | Acute breathlessness, hypoxia, bilateral chest changes | Stop, oxygen, urgent escalation |\n| TACO (fluid overload) | During or after, in at-risk patients | Breathlessness, crackles, raised neck veins, hypertension | Too much, too fast — sit up, slow or stop, medical review |\n| Septic (contaminated unit) | Early | High fever with shock out of proportion | Emergency — cultures and full escalation |\n\nPatients at special risk of TACO — the elderly, the cardiac patient, the chronically and severely anaemic — need slower prescribed rates: your sensitivity at the bedside, especially in the small, elderly grandmother receiving her 'lifesaving' unit, is what prevents the transfusion from drowning her.",
      },
      {
        type: "case",
        title: "Ten minutes in",
        body: "You are ten minutes into a unit for a postpartum woman when she complains her back 'is paining her', begins to shiver violently, and looks frightened. Temperature is climbing; blood pressure is drifting down. What is this, and what do you do in the next five minutes?\n\nAnswer: Fever with rigors PLUS loin pain and falling blood pressure early in a transfusion is an acute haemolytic reaction until proven otherwise — the classic wrong-blood picture. Stop the transfusion now, disconnect the blood set and maintain the line with normal saline per protocol, take vital signs, call the medical team and the blood bank urgently, keep the unit with its labels for investigation, monitor urine colour and output (dark urine signals haemoglobinuria and kidney threat), and document everything with times. Your calm speed in these five minutes decides whether her kidneys survive the error.",
      },
      {
        type: "quiz_prompt",
        title: "The rushed colleague",
        body: "A colleague is alone at the bedside with a unit to start and says, 'The group matches — I have checked the label myself, and the ward is busy.' What is wrong with that sentence?\n\nAnswer: Two qualified people must check together, with the patient participating by stating their name, matching wristband and folder against the compatibility form and the unit label — group, unit number and expiry. 'The group matches' has killed patients whose unit number belonged to someone else. The double check is not a formality; it is the firewall, and busy wards are exactly where it matters.",
      },
      {
        type: "text",
        title: "The Ghanaian blood chain",
        body: "Behind every unit stands the **National Blood Service, Ghana** — the zonal blood centres and hospital blood banks that recruit donors, test every unit (screening includes HIV, hepatitis B and C, and syphilis), process and store blood and its components, and issue crossmatched units. Voluntary, unpaid repeat donors are the safest supply, and family 'replacement' donation remains common: encourage eligible relatives to donate voluntarily and regularly — a safer blood supply is built one informed donor at a time.\n\nYour conservative duty: blood is scarce, shared and never risk-free. Champion the alternatives your patient can use — treating the cause of anaemia, iron therapy, managing surgical blood loss carefully, using national patient blood management principles — and guard the units in the fridge like the community resource they are. Blood is also a nursing responsibility at the cold chain level: report storage or transport breaches, never store units in ward fridges without validated monitoring, and challenge any unit that arrives warm, clotted or unlabeled.",
      },
      {
        type: "memory_trick",
        body: "The safety sequence: 'C.B.S.T.D.' — **C**onsent and order, **B**aseline vitals, **S**econd-nurse check with patient identity, **T**wenty-less minutes of presence (stay for the first fifteen), **D**ocument everything. The reaction reflex: **S.T.O.P.** — Stop the blood, Tell the team, Open the saline line, Preserve the unit for the lab. And the compatibility mantra: 'O gives to all; AB receives from all — but the crossmatched unit belongs to ONE.'",
      },
      {
        type: "summary",
        body: "- ABO and Rh grouping plus crossmatching decide compatibility; O red cells give universally, AB receives red cells universally; crossmatched units are patient-specific.\n- Baseline observations, the two-nurse bedside identity check with the patient participating, filter set, slow start and the first-fifteen-minutes presence are non-negotiable.\n- Every suspected reaction: STOP, saline line per protocol, assess and call, preserve the unit and paperwork, document times.\n- Know the timing signature: haemolytic early with loin pain and hypotension; febrile and allergic mid-flow; TRALI and TACO within hours; septic with disproportionate shock.\n- Fluid-overload risk (elderly, cardiac, chronic severe anaemia) — slower prescribed rates and close chest assessment.\n- The National Blood Service tests every unit; voluntary donors are the safest supply — promote donation, choose conservative transfusion, and protect the cold chain.",
      },
    ],
    questions: [
      {
        topic: "Blood Groups",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which blood group is the universal red-cell donor, and why?",
        options: [
          "Group AB — its red cells carry all antigens",
          "Group O — its red cells carry neither A nor B antigens, so most recipient plasma will not attack them",
          "Group A — it is the most common group in Ghana",
          "Rh-positive — because positive means compatible",
        ],
        correctIndex: 1,
        explanation:
          "Group O red cells display no A or B antigens, so recipient antibodies have no target on the cell surface. AB red cells carry both antigens and are the most attackable; AB plasma, however, makes AB the universal plasma donor.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Transfusion Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice is essential at the start of every transfusion?",
        options: [
          "One nurse checks the unit label alone to save staff time",
          "Two qualified nurses check patient identity, wristband, compatibility form and unit label together at the bedside, with baseline vitals recorded and the nurse present for the first 15 minutes",
          "The unit is connected quickly while observations are done later at the nurses' convenience",
          "The transfusion starts at maximum speed to finish before the shift ends",
        ],
        correctIndex: 1,
        explanation:
          "Wrong-unit errors are the deadliest and most preventable: the two-person bedside identity check with the patient stating their name is the firewall. Baseline vitals enable change detection, and the first 15 minutes of direct observation cover the window where severe reactions begin.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Transfusion Reactions",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Minutes into a transfusion, a patient develops fever with rigors, loin pain and falling blood pressure. What is the interpretation and immediate response?",
        options: [
          "A routine febrile reaction — slow the transfusion and continue with an antipyretic",
          "An allergic reaction — give antihistamine and continue",
          "Probable acute haemolytic reaction — stop the transfusion immediately, keep IV access open with saline per protocol, call the team and blood bank, and preserve the unit for investigation",
          "Normal response to cold blood — warm the patient with blankets and continue",
        ],
        correctIndex: 2,
        explanation:
          "Fever with rigors plus loin pain and hypotension is the signature of acute haemolysis — usually wrong-blood incompatibility — and it threatens the kidneys and circulation. Stop, maintain the line, escalate, monitor urine, and keep the unit and paperwork for laboratory investigation. Treating it as routine febrile reaction can be fatal.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Special Precautions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 70-year-old woman with chronic severe anaemia and mild heart failure is to receive a unit of blood. What is the key bedside consideration?",
        options: [
          "Run the unit as fast as possible so her anaemia corrects quickly",
          "Transfuse at the slower prescribed rate with close monitoring for breathlessness, crackles and neck-vein filling — she is at risk of circulatory overload (TACO)",
          "Warm the unit in hot water before starting",
          "Withhold the transfusion because she is elderly",
        ],
        correctIndex: 1,
        explanation:
          "Elderly, cardiac and chronically severely anaemic patients tolerate volume poorly — transfusion-associated circulatory overload presents as pulmonary oedema. Slow prescribed rates, sitting upright and vigilant chest assessment protect her; rapid transfusion is how a gift becomes a drowning.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Compatibility",
        front: "Who is the universal red-cell donor, and who the universal red-cell recipient?",
        back: "Group O red cells — no A or B antigens to attack — can be given to almost any ABO recipient; group AB — no anti-A or anti-B in plasma — can receive red cells of almost any group. Rh matching still applies, especially for Rh-negative women of childbearing age.",
      },
      {
        topic: "Safety Routine",
        front: "What five things anchor every transfusion start?",
        back: "Valid order and explained consent; working IV access; baseline vitals; the two-nurse bedside identity check with patient participation against the compatibility form and unit label; slow start with the nurse present for the first 15 minutes.",
      },
      {
        topic: "Reactions",
        front: "State the universal first response to any suspected transfusion reaction.",
        back: "STOP the transfusion; disconnect the blood set and keep the line open with normal saline per protocol; assess the patient and call the medical team and blood bank; preserve the unit and paperwork; document times and findings.",
      },
      {
        topic: "Reaction Signatures",
        front: "Give the timing clue for haemolytic, febrile, allergic and TACO reactions.",
        back: "Haemolytic — early, with fever, loin pain and hypotension; febrile non-haemolytic — during/soon after, fever without haemodynamic collapse; allergic — itching and hives mid-flow; TACO — during or hours later in at-risk patients, breathlessness, crackles, raised neck veins.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Blood Service, Ghana — Clinical Transfusion Guidance",
        note: "National transfusion policy and bedside safety standards; verify current edition with the National Blood Service.",
      },
      {
        organization: "World Health Organization",
        title: "Blood Safety and Availability — Guidance for National Blood Systems",
        note: "WHO guidance on safe blood donation, screening and appropriate clinical use; check latest update.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on haematological therapy and transfusion nursing. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "Blood, Vessels & Anaemia",
    lessonTitle: "DVT & Pulmonary Embolism: The Travelling Clot",
    description:
      "The clot that forms in a quiet calf and flies to the lung — Virchow's triad, the post-operative exercises that actually prevent, and the breathless moment you must not miss.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Explain Virchow's triad and apply it to the risk factors common in Ghanaian patients.",
      "Recognise the signs of DVT and the presentation of pulmonary embolism as time-critical emergencies.",
      "Implement VTE prevention nursing — early ambulation, leg exercises, hydration and education for long journeys.",
      "Teach safe anticoagulant therapy, including warfarin's vitamin K interaction and bleeding precautions.",
    ],
    tags: ["dvt", "pulmonary embolism", "anticoagulation", "vte prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Deep vein thrombosis is a clot forming in the deep veins of the leg — and its danger is travel. A fragment can break loose, ride through the heart and lodge in the pulmonary arteries: **pulmonary embolism**, a killer that can take a healthy adult from walking to collapse in minutes. The whole story of prevention is written in a triad from the 1800s — **Virchow's triad**: clotting is favoured by **slow blood flow (stasis)**, **injury to the vessel wall**, and **blood that clots too readily (hypercoagulability)**.\n\nYour nursing lives on both ends of the journey: the exercises, hydration and early walking that stop clots forming in the post-operative and bedridden patient — and the recognition, on a ward or at a bus park story, of the leg that swelled and the chest that suddenly could not breathe.",
      },
      {
        type: "text",
        title: "Whose clot? Risk factors you will actually meet",
        body: "**Surgery** — especially pelvic, hip and long operations — injures vessels and activates clotting. **Immobility** — the stroke patient, the bedridden grandmother, the fractured femur in traction — creates stasis. **Long journeys** — the overnight Accra to Bolgatanga bus, the long-haul flight home — cramp the calves for hours in one seat. **Pregnancy and the six weeks after birth** — the body's natural hypercoagulable state. **Oestrogen medicines** — combined contraceptive pills and hormone therapy. **Cancer** — itself a clotting activator. Add **previous VTE**, **obesity**, **older age**, **dehydration** (harmattan, vomiting, market days without water), inherited thrombophilias and severe infection, and your mental checklist is complete. Two risk factors together multiply, not add.",
      },
      {
        type: "table",
        title: "Two presentations, one disease",
        body: "| Feature | DVT in the leg | Pulmonary embolism |\n|---|---|---|\n| Typical picture | Unilateral calf or thigh swelling (measure BOTH calves — a difference of 3 cm or more at the same point is significant), warmth, tenderness, a heavy ache, visible surface veins | SUDDEN breathlessness, pleuritic chest pain, fast pulse and fast breathing, faintness or syncope, cough (sometimes blood-streaked), anxiety; massive PE collapses the patient |\n| Timing | Days of gradual swelling, often silent | Minutes — often after a DVT that was never noticed |\n| What it means | Treatable — anticoagulate, prevent embolisation | Life-threatening emergency — call for help, oxygen, urgent medical care |\n| The trap | Both-leg swelling, or swelling after insect bite — think again | May mimic pneumonia, asthma or 'panic'; unexplained sudden breathlessness after risk factors = suspect PE |",
      },
      {
        type: "clinical_pearl",
        body: "Suspect DVT in ONE swollen leg — measure both calves at the same point and compare; bilateral evening puffiness that fades by morning is usually not DVT, but a unilateral, warm, tender calf in a patient with risk factors is DVT until reviewed. And treat sudden unexplained breathlessness in any at-risk patient as pulmonary embolism first: the clot you never saw in the leg is still in the lung.",
      },
      {
        type: "case",
        title: "The morning after surgery",
        body: "Day two after emergency appendicectomy, a 45-year-old trader's left calf is swollen 3 cm more than the right, warm and tender to squeeze. He has been in bed since theatre, the harmattan is dry, and he is reluctant to drink because he wants to avoid the shared toilet. What is your assessment and action?\n\nAnswer: Unilateral calf swelling with warmth and tenderness in an immobile, dehydrated post-operative patient is a suspected DVT — report to the medical team promptly for assessment and investigations (the team may use a clinical score, D-dimer and ultrasound). Nursing: do NOT massage the leg (you may free the clot to travel), keep him in bed as directed while the team assesses, ensure hydration is corrected, document calf measurements and times, and review the VTE prevention that should have been in place — leg exercises, early ambulation and fluids. Once the team's plan is set (commonly anticoagulation), watch for PE signs with every set of vitals: new breathlessness, chest pain or syncope are stop-everything events.",
      },
      {
        type: "quiz_prompt",
        title: "From calf to chest in one hour",
        body: "An hour after you report the suspected DVT, the trader suddenly becomes breathless with a fast pulse and a sharp pain on breathing in, and looks grey and frightened. What has happened and what comes first?\n\nAnswer: This is pulmonary embolism until the team says otherwise — a clot fragment has travelled from the calf to the pulmonary arteries. First actions: call for urgent medical help, sit him up, give oxygen as prescribed, take vital signs including saturation if available, prepare for emergency care and investigations, stay with him and keep him still and calm. This is the moment your earlier reporting and documentation built toward — the story is already in the notes.",
      },
      {
        type: "text",
        title: "Prevention: the exercises that actually work",
        body: "VTE prevention is one of the highest-yield nursing interventions in existence. For every surgical and immobile patient: **early ambulation** — the day of surgery if the team allows, because walking is the calf muscle pumping; **hourly leg exercises while awake** — ankle pumps (pull toes up, point down, circle) and knee flexes moving perhaps dozens of times each hour; **hydration** — dry blood is sticky blood, so push fluids unless restricted; **graduated compression stockings** where prescribed — measured to the patient, applied correctly without wrinkles, removed for skin checks on schedule, and documented; **prophylactic anticoagulation** given as prescribed for high-risk patients, not skipped because of busy mornings.\n\nAnd the public-health version you can teach anywhere: on long bus and trotro journeys, drink water, walk at the rest stops, and exercise your ankles in your seat; patients on contraceptive pills who smoke or face long journeys should discuss their risk. Advice delivered at a lorry station has prevented strokes of a different kind — but it prevents clots all the same.",
      },
      {
        type: "callout",
        title: "Living on anticoagulants: the teaching that prevents bleeds",
        body: "Warfarin patients: keep appointments for INR checks without fail; keep vitamin K intake STEADY — the kontomire and greens do not need to be eliminated, but today's heap and tomorrow's nothing swing the INR dangerously; tell every provider about ALL medicines, including herbal preparations, because interactions are common; report dark stools, coffee-ground vomit, unusual bruising, nosebleeds that will not stop, and severe headache (which may be bleeding inside the skull). Injection anticoagulants (such as LMWH): taught subcutaneous technique — injection into skin folds, sites rotated, never rubbed; expect small bruises.\n\nFor all anticoagulated patients: soft toothbrush, electric razor if possible, gentle nail care, pressure for any cut, avoid contact sports, and carry an anticoagulant card or note. And never stop the medicine because 'the leg is fine now' — the course prevents both recurrence and the lung clot that has not yet happened.",
      },
      {
        type: "memory_trick",
        body: "Virchow's triad: 'A lazy river with a scraped bank and muddy water' — **Stasis** (lazy flow), **vessel wall Injury** (scraped bank), **Hypercoagulability** (muddy, clot-ready water). The leg rule: 'ONE swollen calf, warm and tender — measure both, report the difference.' The lung rule: 'Sudden breathless + fast pulse + chest pain in a risky patient = travelling clot.' Prevention mantra: 'Move the legs, move the water, move the patient.'",
      },
      {
        type: "summary",
        body: "- Virchow's triad — stasis, vessel injury, hypercoagulability — generates every DVT risk factor; risks multiply together.\n- DVT: unilateral calf swelling (measure both — 3 cm difference), warmth, tenderness, ache; do not massage a suspected DVT.\n- PE: sudden breathlessness, pleuritic pain, tachycardia, syncope or haemoptysis in an at-risk patient — an emergency; suspect it before pneumonia or panic.\n- Prevention is daily nursing: early ambulation, hourly ankle pumps, hydration, correctly applied compression stockings and prescribed prophylaxis — plus journey advice for buses and flights.\n- Anticoagulant teaching: adherence and INR appointments, STEADY greens, declare all medicines including herbs, bleeding precautions and warning signs; correct subcutaneous technique for injections.\n- Post-operative day two with a swollen calf is not a waiting game — assess, report, document and watch the chest.",
      },
    ],
    questions: [
      {
        topic: "Pathophysiology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three components of Virchow's triad for thrombus formation?",
        options: [
          "Infection, inflammation and infarction",
          "Venous stasis, vessel wall injury and hypercoagulability of blood",
          "Anaemia, dehydration and fever",
          "Arterial spasm, plaque rupture and embolisation",
        ],
        correctIndex: 1,
        explanation:
          "Virchow named the three forces that make blood clot in vessels: slow flow (stasis), damage to the vessel lining, and blood primed to clot (hypercoagulability). Every risk factor you assess maps onto one of these.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Clinical Reasoning",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A post-operative patient with an untreated swollen calf suddenly develops severe breathlessness, a rapid pulse and pleuritic chest pain. What is happening and your priority?",
        options: [
          "A panic attack from hospital anxiety — reassure and leave to rest",
          "Aspiration pneumonia from lying down — antibiotics and physiotherapy",
          "Probable pulmonary embolism from a travelling clot — call for urgent help, sit the patient up, give oxygen as prescribed and prepare for emergency care",
          "Heart failure from fluid overload — restrict fluids and give the morning diuretic early",
        ],
        correctIndex: 2,
        explanation:
          "The story of swollen calf plus sudden breathlessness, tachycardia and pleuritic pain is the classic PE trajectory. It is a time-critical emergency: urgent escalation, positioning, oxygen as prescribed and readiness for resuscitation — reassurance or routine treatments cost the minutes that matter.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "VTE Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which nursing bundle best prevents VTE in post-operative patients?",
        options: [
          "Strict bed rest for five days with legs still to protect the wound",
          "Early ambulation as allowed, hourly ankle and leg exercises while awake, adequate hydration, correctly applied compression stockings and prophylaxis as prescribed",
          "Massaging the calves vigorously each shift",
          "Withholding fluids and applying heat packs to the legs",
        ],
        correctIndex: 1,
        explanation:
          "Movement is the calf muscle's pump: early walking plus hourly ankle pumps, hydration to avoid sticky blood, properly applied stockings and prescribed prophylaxis form the standard bundle. Bed rest and immobility CAUSE DVT, and massaging a suspected clot can free it to travel.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Anticoagulant Teaching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on warfarin loves kontomire and eats large amounts some weeks, none on others. What teaching applies?",
        options: [
          "Eliminate all green leafy vegetables permanently",
          "Keep vitamin K intake steady from week to week, attend INR appointments, and report bleeding signs — swings in greens swing the INR",
          "Green vegetables have no interaction with warfarin",
          "Double the warfarin dose whenever she eats greens",
        ],
        correctIndex: 1,
        explanation:
          "Warfarin and vitamin K are opponents in balance: sudden big intakes blunt the anticoagulant (clot risk) and sudden withdrawal potentiate it (bleeding risk). The steady plate — not the empty one — plus faithful INR monitoring and bleeding vigilance keeps the therapy safe.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Virchow's Triad",
        front: "Name Virchow's triad with one clinical example of each.",
        back: "Stasis — bed rest, long bus journeys, stroke; vessel wall injury — surgery, trauma, catheters; hypercoagulability — pregnancy and postpartum, oestrogen pills, cancer, dehydration, inherited thrombophilias.",
      },
      {
        topic: "DVT Recognition",
        front: "What calf finding raises suspicion of DVT, and how do you confirm the asymmetry?",
        back: "One leg — calf or thigh — swollen, warm and tender with a heavy ache; measure both calves at the same marked point: a 3 cm or greater difference is significant. Never massage a suspected DVT.",
      },
      {
        topic: "PE Recognition",
        front: "Give the pulmonary embolism presentation in one sentence.",
        back: "Sudden unexplained breathlessness with pleuritic chest pain, fast pulse and fast breathing — sometimes fainting or blood-streaked cough — in any patient with VTE risk factors; suspect PE before pneumonia or panic.",
      },
      {
        topic: "Prevention",
        front: "State four VTE prevention measures you implement daily.",
        back: "Early ambulation as the team allows; hourly ankle pumps and leg exercises while awake; hydration unless restricted; correctly fitted, wrinkle-free compression stockings plus prescribed prophylaxis — and journey advice: walk at rest stops, drink water, pump the ankles in the seat.",
      },
      {
        topic: "Anticoagulation",
        front: "What three bleeding-warning signs must every anticoagulated patient report immediately?",
        back: "Black tarry stools or coffee-ground vomit; unusual spreading bruises or unstoppable nosebleeds; severe new headache — possible intracranial bleeding. Plus: dark urine and unusual menstrual flooding.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Guidelines on the Prevention of Venous Thromboembolism in Surgical Patients",
        note: "WHO recommendations on VTE prevention including non-orthopaedic surgical patients; verify latest edition.",
      },
      {
        organization: "CDC",
        title: "Venous Thromboembolism (Blood Clots) — Risk Factors and Prevention",
        note: "Public health reference on DVT/PE signs, risks and hospital prevention.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on vascular disorders, coagulation and anticoagulant therapy. Verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Surgical Abdomen",
    lessonTitle: "Appendicitis: The Classic Emergency",
    description:
      "The pain that travels from navel to the right lower pocket — the anorexia that outshines the fever, the nil-by-mouth that protects the theatre, and the post-operative care that heals.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the pathophysiological chain from appendiceal obstruction to perforation and peritonitis.",
      "Recognise the classic presentation of appendicitis, including the migration of pain and the order of symptoms.",
      "Apply pre-operative nursing care for suspected appendicitis, including nil-by-mouth and prohibited interventions.",
      "Deliver post-operative care and discharge education after appendicectomy.",
    ],
    tags: ["appendicitis", "acute abdomen", "surgical nursing", "postoperative care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The appendix is a small finger of gut hanging from the caecum, and its disaster begins with a blocked lumen — a hard piece of stool (**faecolith**), swollen lymphoid tissue, a seed or a worm burden. Behind the blockage, mucus accumulates, bacteria multiply, pressure rises until the wall's blood supply is squeezed shut; the tissue then dies from the tip inward — **gangrene** — and finally perforates, spilling infected contents into the abdominal cavity (**peritonitis**).\n\nThe whole journey can take one or two days, which is why appendicitis is measured in hours: the patient who reaches theatre before perforation has a very different story from the one who waits. In Ghana, the wait is often long — self-treated with pain tablets and 'malaria' medicine, or a journey from a village — so the perforated, rigid abdomen is still a familiar admission. You are the clock-keeper.",
      },
      {
        type: "text",
        title: "The story the pain tells",
        body: "The classic sequence is almost theatrical. **Pain begins around the navel** — dull, poorly localised, because early appendiceal pain is visceral and the midgut refers to the periumbilical region. Over hours, as the inflamed appendix touches the **parietal peritoneum** of the right iliac fossa, the pain **migrates to the right lower quadrant** (near McBurney's point) and becomes sharp and localised. Then follow **anorexia** — the most underrated symptom; the patient simply cannot eat — **nausea and vomiting**, and a **low-grade fever** later in the course.\n\nThe order matters diagnostically: in appendicitis **pain comes first, vomiting follows**; in gastroenteritis, vomiting and diarrhoea lead with cramps everywhere and no migration. Examination of the right lower quadrant finds **tenderness, guarding and rebound tenderness** — pain sharper when a pressing hand is released. In women of reproductive age, an **ectopic pregnancy can mimic appendicitis perfectly** — every woman of childbearing age with right-sided abdominal pain needs a pregnancy consideration. Children present vaguely and deteriorate fast; the elderly may feel little pain until perforation declares itself with confusion and a rigid abdomen; a **retrocaecal appendix** hides behind the caecum with muted signs and more back or flank pain. Atypical presentations are the perforations of tomorrow.",
      },
      {
        type: "table",
        title: "Classic versus must-not-miss variants",
        body: "| Presentation | What to notice | The trap it sets |\n|---|---|---|\n| Classic adult | Periumbilical pain migrating to RIF, anorexia, nausea, low fever, localised tenderness with guarding | Straightforward — do not let queue or 'malaria' self-diagnosis cost hours |\n| Pregnancy (later trimesters) | Appendix pushed upward and to the right by the uterus; pain higher than expected | Looks like pyelonephritis or gallbladder disease; mothers and fetuses depend on fast referral |\n| Retrocaecal appendix | Softer signs, flank or back discomfort, mild tenderness | Underestimated severity — perforation before recognition |\n| Elderly | Mild pain, late presentation, confusion, minimal fever until late | Silent progression to generalised peritonitis |\n| Children | Vague pains, poor localisation, rapid progression | Missed because 'children always have stomach pain' |\n| Young women | Identical picture to ectopic pregnancy and ovarian problems | Pregnancy status must be known before the diagnosis is closed |",
      },
      {
        type: "clinical_pearl",
        body: "Three rules of the suspected appendix. First: PAIN BEFORE VOMITING — appendicitis; vomiting before pain points elsewhere. Second: ANOREXIA is worth a paragraph — the patient who cannot touch food has a surgical abdomen asking for review. Third: NO enemas, NO laxatives, NO heat applications — a stimulated bowel can perforate an obstructed appendix or spill an already-septic one. Nil by mouth, medical review, theatre decisions.",
      },
      {
        type: "case",
        title: "The student at dawn",
        body: "A 19-year-old student walks into your district hospital's OPD at 7 am. His pain started around the navel at midnight — he thought it was the previous evening's waakye. By dawn the pain had 'moved' to the right lower abdomen; he has not eaten since yesterday and vomited once. Temperature 37.8 °C, pulse 92. He is tender with guarding in the right iliac fossa and winces when you release your pressing hand. What is happening and what are your nursing actions?\n\nAnswer: This is a textbook evolving appendicitis — migratory pain, anorexia, nausea after pain, low-grade fever, rebound tenderness. Keep him **nil by mouth** (no food, no water — theatre may call within hours), inform the surgical team immediately, take vitals and keep monitoring, establish access for fluids as ordered, and prepare for investigations (full blood count, urinalysis to exclude urinary causes, pregnancy test for women). Do NOT give enemas or laxatives, do not apply heat, and do not send him to the queue. Document the timeline — the hour the pain started is part of the surgical handover.",
      },
      {
        type: "quiz_prompt",
        title: "Why empty?",
        body: "The student's mother arrives with roasted plantain and asks why you are starving her son when he has not eaten since yesterday. Explain nil by mouth in one nursing sentence.\n\nAnswer: The appendix may need to come out within hours, and surgery is safest on an empty stomach — anaesthesia on a full stomach risks vomiting and aspiration into the lungs. Food or drink now could delay theatre and turn a straightforward operation into a dangerous one: kindness is explanation, not exception.",
      },
      {
        type: "text",
        title: "After theatre: the post-operative road",
        body: "**Immediate recovery:** monitor observations per schedule until fully recovered from anaesthesia — airway, breathing, circulation, pain, bleeding at the site, and urine output; recovery-position care while drowsy.\n\n**Day one onward:** pain assessment and prescribed analgesia — a comfortable patient coughs and breathes deeply, which is itself pneumonia and DVT prevention; **early ambulation** — walking the same day when the team allows, which protects against DVT and ileus and wakes the gut; **wound care** — inspect for infection signs (spreading redness, discharge, fever around day three to five); **diet progression** as directed — from sips, to light foods, to normal as the bowel resumes work, guided by passing flatus and comfort.\n\n**Watch for the late complications:** a post-operative patient with a 'swinging' fever, malaise and a tender mass after several days may have an intra-abdominal abscess, especially after a perforated appendix — report patterns, not just numbers. **Discharge teaching:** keep the wound clean and dry; return immediately for fever, wound discharge, worsening pain, vomiting or abdominal swelling; resume activity gradually — no heavy lifting for the period your surgeon states; and complete any prescribed antibiotics. The scar heals in two weeks; the habit of hand hygiene and returning early lasts forever.",
      },
      {
        type: "memory_trick",
        body: "The timeline of the appendix: 'BLOCK, BUILD, STRANGLE, BURST' — obstruction, mucus and pressure, ischaemia, perforation. The story: 'Pain TRAVELS — navel to right pocket.' The sequence rule: 'Appendicitis: pain first, vomit after. Gastroenteritis: vomit first, pain everywhere.' The ward rule: 'Nothing in, nothing out (no enemas), theatre-ready always.'",
      },
      {
        type: "summary",
        body: "- Obstruction of the appendiceal lumen leads to pressure, ischaemia, gangrene and perforation — a journey measured in hours.\n- Classic story: periumbilical pain migrating to the right iliac fossa, anorexia, nausea and vomiting after pain, low-grade fever, localised tenderness with guarding and rebound.\n- Atypical groups: children, the elderly, retrocaecal appendix, pregnancy, and women needing pregnancy status established.\n- Pre-operative nursing: nil by mouth, urgent surgical referral, monitoring, access and investigations — never enemas, laxatives or heat.\n- Post-operative: anaesthesia observations, analgesia enabling cough and movement, early ambulation, wound inspection, graduated diet, and vigilance for abscess (swinging fever) after perforation.\n- Discharge: wound care, danger signs that bring the patient back, gradual activity, completed antibiotics.",
      },
    ],
    questions: [
      {
        topic: "Appendicitis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which pain pattern is most characteristic of classic appendicitis?",
        options: [
          "Right lower quadrant pain from the very beginning, constant from onset",
          "Pain starting around the umbilicus and migrating to the right iliac fossa, becoming sharper and localised",
          "Severe left lower quadrant pain with alternating diarrhoea and constipation",
          "Burning epigastric pain relieved by food",
        ],
        correctIndex: 1,
        explanation:
          "Early appendiceal pain is visceral and periumbilical; as inflammation reaches the parietal peritoneum it localises to the right iliac fossa. The migration is the story — a RIF pain that never moved, or left-sided or food-relieved pain, points to other diagnoses.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Pre-operative Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with suspected appendicitis is waiting for surgical review. Which nursing instruction applies?",
        options: [
          "Give a warm enema to clear the bowel before theatre",
          "Encourage a light meal to maintain strength for surgery",
          "Keep the patient nil by mouth, monitor vital signs and pain, and inform the surgical team urgently",
          "Apply a hot compress to the right iliac fossa for pain relief",
        ],
        correctIndex: 2,
        explanation:
          "Nil by mouth protects the anaesthetic airway; urgent surgical referral protects the timeline; monitoring catches deterioration. Enemas, laxatives, heat and food can all precipitate perforation or aspiration — each is actively dangerous.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature helps most in distinguishing appendicitis from simple gastroenteritis at the bedside?",
        options: [
          "Both conditions always have diarrhoea",
          "In appendicitis, pain typically precedes vomiting and localises to the right lower quadrant; in gastroenteritis vomiting and diffuse cramping lead",
          "Gastroenteritis always produces a high fever while appendicitis does not",
          "Appendicitis pain is always relieved by passing stool",
        ],
        correctIndex: 1,
        explanation:
          "The irritated appendix hurts before the vomit reflex follows, and peritoneal contact localises the pain; gastroenteritis announces itself with vomiting and diffuse colic. Order and localisation are the bedside discriminators.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Post-operative Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On day one after appendicectomy, which nursing measure reduces the risk of both chest infection and deep vein thrombosis?",
        options: [
          "Keeping the patient flat and still until day three to protect the wound",
          "Early mobilisation as allowed, with deep-breathing exercises and prescribed analgesia enabling movement",
          "Restricting all fluids to reduce the risk of vomiting",
          "Delaying pain relief so the patient rests quietly",
        ],
        correctIndex: 1,
        explanation:
          "Walking early and breathing deeply are the two strongest protections after abdominal surgery — both depend on adequate analgesia. Immobility and uncontrolled pain are the parents of pneumonia, DVT and ileus.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Pathophysiology",
        front: "Describe the pathological chain of appendicitis in four steps.",
        back: "Blocked lumen (faecolith, lymphoid swelling, seed, worms) — mucus and pressure build with bacterial overgrowth — rising pressure strangulates the wall's blood supply (gangrene) — perforation spilling infection into the peritoneal cavity.",
      },
      {
        topic: "Presentation",
        front: "What is the classic symptom order of appendicitis, and why does the pain move?",
        back: "Pain first (periumbilical, visceral), then anorexia, nausea and vomiting, then low fever. The pain migrates to the RIF as inflammation touches the parietal peritoneum, which localises sensation precisely.",
      },
      {
        topic: "Pre-operative Care",
        front: "State the three 'never' interventions in suspected appendicitis and the one 'always'.",
        back: "Never enemas, never laxatives, never heat to the abdomen — each can precipitate perforation. Always nil by mouth with urgent surgical referral.",
      },
      {
        topic: "Post-operative Care",
        front: "Four days after surgery for a perforated appendix, the patient spikes a high fever with a tender abdominal mass. What do you suspect and do?",
        back: "Intra-abdominal (pelvic) abscess — a recognised late complication after perforation. Report the pattern urgently for medical review and imaging; monitor vitals; never dismiss a 'swinging' fever as malaria.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Management for Emergency and Essential Surgical Care (IMEESC)",
        note: "WHO toolkit for emergency abdominal surgery and perioperative care at district level; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National surgical and emergency referral guidance; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on pre- and post-operative nursing and acute abdomen. Verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Surgical Abdomen",
    lessonTitle: "Intestinal Obstruction: The Blocked Gut",
    description:
      "Nothing in, nothing out — the colicky pain, the green then faeculent vomit, the silent abdomen that means strangulation. The blocked gut gives the nurse one job: recognise the clock.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Explain the pathophysiology of intestinal obstruction and its progression to strangulation and perforation.",
      "Differentiate the four classic clinical features and the danger signs of a compromised bowel.",
      "Compare mechanical obstruction with paralytic ileus, and name the common Ghanaian causes of each.",
      "Apply nursing care for the obstructed patient — decompression, fluid and electrolyte monitoring and pre-operative preparation.",
    ],
    tags: ["intestinal obstruction", "acute abdomen", "ng tube", "fluid balance"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When the gut's lumen is blocked, the intestine does not simply stop — it fights. Above the blockage, swallowed air and secreted fluid accumulate, the bowel dilates and its contractions become visible colicky waves; below it, everything is silent and empty. The patient experiences this as the four classics: **colicky pain, vomiting, abdominal distension, and absolute constipation** — no flatus, no faeces, a rectum that has nothing left to pass (obstipation).\n\nThe danger is time. A distended bowel's wall swells until its own blood supply is compressed — **strangulation** — after which the tissue dies, perforates and floods the peritoneum with bacteria and toxins. That is the shift from a mechanical problem to a septic emergency, and your monitoring is the alarm system the patient does not have.",
      },
      {
        type: "text",
        title: "What blocks the gut in Ghana",
        body: "**Adhesions** — internal scars from previous surgery, the commonest cause in adults with an operative history. **Hernias** — a loop caught in an abdominal wall defect (the next lesson). **Volvulus** — the bowel twisting on itself; sigmoid volvulus is notably common in adult West African men, presenting with massive distension and absolute constipation. **Intussusception** — one segment of bowel telescoping into the next; the classic infant (six to eighteen months) with episodic screaming, legs drawn up, vomiting, and later the red-currant-jelly stool, sometimes with a sausage-shaped mass palpable. **Ascaris bolus** — a ball of roundworms literally plugging the small bowel of an infected child — a genuine Ghanaian paediatric cause. Add tumours, strictures, and swallowed foreign bodies.\n\nWhen nothing is physically blocking but the bowel is silent and dilated, that is **paralytic ileus** — the paralysed gut of the early post-operative abdomen, of peritonitis, of severe hypokalaemia and of some drugs. It is treated by patience, correcting the cause and decompression — not by surgery. Your distinguishing examination: **tinkling, rushing bowel sounds** in early mechanical obstruction versus the **silent abdomen** of ileus and peritonitis.",
      },
      {
        type: "table",
        title: "Mechanical obstruction versus paralytic ileus",
        body: "| Feature | Mechanical obstruction | Paralytic ileus |\n|---|---|---|\n| Cause | Adhesions, hernia, volvulus, intussusception, worms, tumour | Post-operative state, peritonitis, hypokalaemia, drugs |\n| Pain | Colicky, intermittent, often visible peristalsis | Distension and discomfort without colic |\n| Bowel sounds | Tinkling, rushing, hyperactive early; silent late with peritonitis | Absent throughout |\n| Vomiting | Early and frequent in high obstruction; late and faeculent in low | Present but less dramatic |\n| Course and treatment | Often needs surgery — especially strangulation signs | Treat the cause, decompress, correct electrolytes, wait for function |",
      },
      {
        type: "clinical_pearl",
        body: "The strangulation alarm is a change of character: colicky pain that becomes CONSTANT and severe; fever and a rising pulse; a abdomen going rigid; and signs of shock. When the pain stops cycling and starts drilling, the bowel's blood supply is failing — this is theatre-now information, and the nurse who recognises it first may be the one who saves the segment.",
      },
      {
        type: "case",
        title: "The farmer and the old scar",
        body: "A 60-year-old farmer presents with two days of central colicky pain, distension, and vomiting that has turned from green to foul-smelling brown; he has passed neither flatus nor stool for two days. He has a right-sided appendicectomy scar from decades ago. His abdomen is distended and tympanic, with visible waves and loud tinkling sounds; pulse 104, blood pressure borderline, urine output small and dark. What is the picture, the danger, and your nursing role?\n\nAnswer: The four classics plus a previous abdominal scar point to mechanical obstruction, most likely adhesive. The brown faeculent vomit means the obstruction is established with stagnating gut contents; the rising pulse and dark scanty urine signal dehydration and volume loss into the distended gut. Your nursing: report urgently for surgical review; insert and secure a nasogastric tube as ordered to decompress the stomach (relieves vomiting and protects against aspiration); establish intravenous access for fluid and electrolyte correction as prescribed — the vomiting patient is losing chloride and potassium; insert a urinary catheter if ordered and monitor output closely as the guide to resuscitation; chart intake and output strictly, monitor vitals and abdominal signs at prescribed intervals, and watch specifically for the strangulation alarms — constant pain, fever, rigidity, falling blood pressure. Prepare the patient and family for theatre: this bowel's blood supply decides its survival in hours.",
      },
      {
        type: "quiz_prompt",
        title: "The purpose of the tube",
        body: "The farmer's family sees the nasogastric tube draining brown fluid and asks whether it is 'making him worse'. Explain the two purposes of the tube and the purpose of the fluid chart.\n\nAnswer: The tube decompresses the stomach and upper gut — preventing further vomiting, protecting the airway from aspiration, and relieving some of the pressure above the blockage — while the intravenous fluids replace what the obstructed gut is pooling and the vomit is losing, guided by the urine output. The fluid chart is the navigation instrument for both: without intake and output numbers, resuscitation is guesswork that can either under-fill or drown.",
      },
      {
        type: "text",
        title: "Nursing the obstructed bowel",
        body: "**Decompression:** nasogastric tube care — check patency and position, secure without pressure on the nostril, measure and document drainage volume and character (green bilious, brown faeculent, bloody), provide meticulous mouth care, because a dry intubated mouth with a tube taped for days is misery and infection risk.\n\n**Fluid and electrolytes:** the obstructed patient loses volume in three directions — vomit, gut pooling and drainage — with potassium and chloride at risk. Record everything: NG drainage, vomitus, urine (hourly if catheterised), and match to the intravenous orders. Watch potassium especially: weakness and arrhythmias betray depletion.\n\n**Monitoring for the turn to strangulation:** scheduled abdominal examination comparisons — is the pain still colicky or now constant? Is the abdomen more rigid? Temperature, pulse and blood pressure trends; new bloody NG aspirate or rectal bleeding. Each of these is a theatre-now finding and belongs in the notes with a time.\n\n**After surgery:** the same bowel-watching continues in reverse — listen for returning bowel sounds, await the passage of flatus (chart it — it is the gut's first word after silence), progress diet as directed, mobilise early, and inspect the wound. An anastomosis leak may declare itself days later with fever, pain and peritonism: swinging patterns after obstruction surgery get reported, never managed with antimalarials and hope.",
      },
      {
        type: "memory_trick",
        body: "The blocked gut's four notes: 'COLIC, VOMIT, BLOAT, NOTHING PASSES.' The strangulation switch: 'When the colic goes CONSTANT, the bowel is COMPROMISED.' The response recipe: 'Suck it out (NG), fill the veins (IV fluids), watch the pee (urine output), find the block (surgery).' And for infants: 'Screaming spells, legs up, red-currant stool — think intussusception.'",
      },
      {
        type: "summary",
        body: "- Obstruction accumulates fluid and air above the block — colicky pain, vomiting, distension, absolute constipation; the danger is strangulation and perforation.\n- Ghanaian causes: adhesions, hernias, sigmoid volvulus in adult men, intussusception in infants (currant-jelly stool), ascaris bolus in children, tumours.\n- Strangulation alarms: pain becoming constant, fever, rising pulse, rigid abdomen, shock, GI bleeding — theatre now.\n- Mechanical versus ileus: tinkling rushing sounds versus the silent abdomen; surgery versus cause-correction and decompression.\n- Nursing: NG decompression with documented drainage, strict intake-output with urine as the resuscitation compass, electrolyte vigilance (potassium!), scheduled abdominal monitoring and pre-theatre readiness.\n- Post-op: bowel sounds, flatus as the first sign of function, graduated diet, early ambulation, and vigilance for abscess or leak.",
      },
    ],
    questions: [
      {
        topic: "Intestinal Obstruction",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which four features make up the classic clinical picture of intestinal obstruction?",
        options: [
          "Colicky pain, vomiting, abdominal distension and absolute constipation (no flatus or faeces)",
          "Fever, jaundice, dark urine and pale stools",
          "Burning epigastric pain, waterbrash and heartburn",
          "Diarrhoea, tenesmus and rectal bleeding",
        ],
        correctIndex: 0,
        explanation:
          "The blocked gut produces the quartet of colic (hyperactive contractions), vomiting (backed-up contents), distension (accumulating fluid and gas) and obstipation (nothing passes the block). Each of the other sets belongs to biliary, reflux or colorectal disease.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Strangulation",
        type: "MCQ",
        difficulty: "Hard",
        stem: "During monitoring, a patient's intermittent colicky pain becomes constant and severe, with new fever, tachycardia and a rigid abdomen. What has happened and what does it demand?",
        options: [
          "The obstruction has resolved and the bowel is resting — increase oral fluids",
          "Ordinary disease fluctuation — continue observations on the four-hourly schedule",
          "Strangulation with likely bowel ischaemia — immediate surgical escalation; this is a theatre emergency",
          "Paralytic ileus setting in — stop all fluids and await natural recovery",
        ],
        correctIndex: 2,
        explanation:
          "Pain losing its colicky rhythm to become constant, with fever, rising pulse and peritonism, marks compression of the bowel's blood supply — strangulated gut dies in hours. Escalation for urgent surgery, not fluids by mouth or extended observation, is the response.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Nursing Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the obstructed patient need a nasogastric tube AND strict fluid balance charting with a urinary catheter where ordered?",
        options: [
          "The tube feeds the patient while the gut heals, and the catheter prevents bedwetting",
          "The tube decompresses the gut above the block (preventing vomiting and aspiration), while intake-output and urine output guide intravenous fluid and electrolyte replacement for the large hidden losses",
          "Both are purely for comfort and nursing documentation convenience",
          "The tube is needed only if the patient requests it, and the catheter is routine for all surgical patients forever",
        ],
        correctIndex: 1,
        explanation:
          "Decompression and aspiration protection on one side; measured resuscitation on the other. Obstruction hides litres in the distended gut and vomit — urine output is the practical gauge of whether the veins are being refilled correctly.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Special Populations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 10-month-old infant has episodic screaming with legs drawn up, vomiting, and later a stool like red currant jelly. Which condition is this?",
        options: [
          "Sigmoid volvulus",
          "Intussusception — the bowel telescoping into itself",
          "Ascaris bolus obstruction",
          "Paralytic ileus from hypokalaemia",
        ],
        correctIndex: 1,
        explanation:
          "Intussusception is the classic infant obstruction: intermittent severe colic with screaming and drawn-up legs, vomiting, a palpable sausage-shaped mass, and red-currant-jelly stool from the engorged telescoped bowel. It is a paediatric surgical emergency.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Clinical Features",
        front: "State the four classic features of intestinal obstruction and the meaning of 'absolute constipation'.",
        back: "Colicky pain, vomiting, distension, and absolute constipation — no flatus AND no faeces (obstipation), distinguishing true obstruction from ordinary constipation, which still passes gas.",
      },
      {
        topic: "Causes",
        front: "Name the common causes of intestinal obstruction in Ghanaian adults and children.",
        back: "Adults: adhesions from previous surgery, hernias, sigmoid volvulus, tumours. Children: intussusception (infants), ascaris worm bolus, and occasionally congenital lesions.",
      },
      {
        topic: "Danger Signs",
        front: "List five strangulation/perforation alarm signs you monitor in the obstructed patient.",
        back: "Pain becoming constant instead of colicky; new fever; rising pulse with falling blood pressure; rigid or peritonitic abdomen; bloody nasogastric aspirate or rectal bleeding.",
      },
      {
        topic: "Management",
        front: "What are the four pillars of non-operative management while awaiting surgical decisions?",
        back: "Nil by mouth; nasogastric decompression with measured drainage; intravenous fluid and electrolyte replacement guided by strict intake-output and urine output; and scheduled monitoring of vitals and abdominal findings for the turn to strangulation.",
      },
      {
        topic: "Post-operative",
        front: "Which post-operative events tell you the bowel is waking up?",
        back: "Return of bowel sounds, the passage of flatus (chart it — the gut's first word), then stool, with tolerance of graduated diet. Before these, maintain decompression, fluids and patience.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Management for Emergency and Essential Surgical Care (IMEESC)",
        note: "WHO district-hospital guidance on emergency abdominal conditions; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National emergency surgery and referral guidance; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on gastrointestinal surgical nursing and fluid-electrolyte management. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "The Surgical Abdomen",
    lessonTitle: "Hernias & GI Bleeds",
    description:
      "The wall that weakens and the ulcer that bleeds — the groin lump that must never become tense and tender, and the black tarry stool that must never be ignored.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Classify common hernias and explain how raised intra-abdominal pressure and wall weakness create them.",
      "Recognise a strangulated hernia as a surgical emergency requiring immediate escalation.",
      "Distinguish upper from lower gastrointestinal bleeding by presentation, and melaena from other dark stools.",
      "Apply nursing care for significant GI bleeding — monitoring, positioning and escalation — and prevention teaching for both conditions.",
    ],
    tags: ["hernia", "gi bleed", "melaena", "emergency care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "Part 1 — The hernia: a door that will not lock",
        body: "A **hernia** is tissue — usually bowel — pushing through a weakness or defect in the abdominal wall. The commonest is **inguinal** (through the groin canal — indirect in the young, direct in older men); **femoral** hernias pass below the inguinal ligament, are commoner in women and have the highest strangulation risk; **umbilical** hernias bulge at the navel — most infant ones close naturally by school age, while adult ones widen with time; **incisional** hernias push through old operation scars; **epigastric** ones are small fatty protrusions through the midline.\n\nTwo forces make every hernia: a weak wall and pressure pushing through it. In Ghana, the pressure list is our daily life: heavy lifting (head porters, farmers, mechanics), chronic cough (COPD, TB), straining at stool (constipation), straining to pass urine (older men with prostate enlargement), pregnancy and repeated childbearing, and fluid in the abdomen. This is also the prevention list — treating the cough, softening the stool, addressing the urinary obstruction is hernia prevention in slow motion.",
      },
      {
        type: "table",
        title: "The life stages of a hernia",
        body: "| Stage | Meaning | Clinical sign | Action level |\n|---|---|---|---|\n| Reducible | Content slips back through the defect | Lump appears on standing/coughing, disappears lying down or with gentle pressure; a cough impulse is felt | Elective repair discussion; teach danger signs |\n| Irreducible (incarcerated) | Content stuck in the sac | Lump will not reduce; may be uncomfortable but is soft, non-tender | Urgent surgical review — same-day assessment |\n| Obstructed | Trapped bowel blocks the gut | Irreducible + signs of obstruction: colic, vomiting, distension | Emergency |\n| Strangulated | Blood supply cut off — tissue dying | IRREDUCIBLE + TENSE + TENDER + no cough impulse; overlying skin may redden; patient in severe pain, later toxic | THEATRE NOW — minutes matter |",
      },
      {
        type: "clinical_pearl",
        body: "The strangulation exam is three findings and one absence: the lump that will not reduce, is tense, is exquisitely tender — and gives NO cough impulse, because the trapped contents can no longer move. Add obstruction signs (vomiting, distension, absolute constipation) and this patient belongs in theatre, not in a queue or under a hot compress. Never force a manual reduction of a tense, tender hernia.",
      },
      {
        type: "case",
        title: "The porter's groin",
        body: "A 47-year-old head porter has 'carried his lump' for three years — a right groin swelling that appears when he loads trucks and vanishes at night. Today he arrives sweating, vomiting green fluid, with a distended abdomen; the lump is now hard, exquisitely tender and will not reduce; he has not passed flatus since morning. What is happening and what do you do?\n\nAnswer: A long-standing reducible inguinal hernia has become strangulated with obstruction — tense, tender, irreducible, no cough impulse, plus the obstructed quartet. Keep him nil by mouth, inform the surgical team immediately, monitor vitals and pain, prepare for emergency surgery (access, investigations, consent support), and do NOT attempt to push the lump back or give any enema. Aftercare teaching is prophetic: every reducible hernia in your community is a strangulation waiting for a heavy load — elective repair, cough and constipation treatment, and safe lifting advice are the prevention you owe the next porter.",
      },
      {
        type: "text",
        title: "Part 2 — The gastrointestinal bleed",
        body: "GI bleeding declares itself in two colours. **Upper GI bleeding** (above the duodenojejunal junction) shows as **haematemesis** — vomiting fresh red blood or coffee-grounds (blood darkened by stomach acid) — and **melaena**: black, sticky, tarry, characteristically offensive stool, blood digested on its passage. In Ghana the common sources are **peptic ulcer disease** (Helicobacter pylori plus NSAIDs bought over the counter for 'waist pain', plus alcohol), **oesophageal varices** from cirrhosis (hepatitis B and alcohol), gastritis, and the Mallory–Weiss tear of forceful retching.\n\n**Lower GI bleeding** shows as **haematochezia** — fresh bright red or maroon blood, with or on the stool. Commonest: **haemorrhoids** — bright red blood on the paper, dripping after defaecation, from straining and constipation; anal fissure (painful streaks); and — the must-not-miss — **colorectal cancer**: bleeding with a CHANGED BOWEL HABIT, weight loss and older age. Never assign rectal bleeding to piles without professional assessment; dysentery (amoebic or bacillary) also presents with bloody mucoid diarrhoea needing treatment, not surgery.\n\nMelaena has a famous mimic: **iron tablets** also blacken stool — but iron-stool is dark yet formed and not sticky-tarry-offensive. Ask the medication history before the bedpan is discarded as reassuring.",
      },
      {
        type: "table",
        title: "Reading the bleed",
        body: "| Feature | Upper GI bleed | Lower GI bleed |\n|---|---|---|\n| Typical evidence | Haematemesis (fresh or coffee-grounds) and melaena — black tarry sticky offensive stool | Haematochezia — fresh red or maroon, in or on stool |\n| Common Ghanaian causes | Peptic ulcer (H. pylori, NSAIDs, alcohol), varices from cirrhosis, gastritis | Haemorrhoids, fissures, colorectal cancer, dysentery |\n| Red-flag severity signs | Pale, sweaty, fast pulse, low blood pressure, fainting, reduced urine — shock | Same — plus changed bowel habit and weight loss pointing to cancer |\n| First nursing frame | Emergency monitoring pathway; nil by mouth; two large-bore IV access; crossmatch readiness | Assess severity; the fresh-looking bleed can still be massive |\n\nA patient who has bled into the gut can look 'fine' for hours and then collapse — the bedpan and the vomit basin are data, the vital signs are trends, and the two together are the story you hand over.",
      },
      {
        type: "clinical_pearl",
        body: "Treat visible GI bleeding with the same urgency as visible bleeding anywhere: it is the circulatory volume that matters first. Frequent vitals and urine output, the patient kept warm and still (and in the recovery position if vomiting), oxygen if hypoxic, and two working large-bore intravenous lines with fluids running as prescribed, blood products organised early — because a bleeding varix at 2 am forgives nobody the twenty minutes spent hunting a vein.",
      },
      {
        type: "quiz_prompt",
        title: "Tarry or just dark?",
        body: "A patient recovering from an ulcer bleed reports black stool; his drug chart shows iron tablets started yesterday. How do you decide what you are looking at, and what do you teach?\n\nAnswer: Iron-blackened stool is dark but typically formed and NOT sticky, tarry or offensive; melaena is black AND sticky AND tarry AND characteristically foul-smelling. Confirm with the history of volume and symptoms, and report any doubt. Teach him: report black stool that is sticky or smelly immediately — and understand that iron is safe, not a cause for alarm by itself.",
      },
      {
        type: "text",
        title: "Prevention: the quiet victory",
        body: "**For ulcers:** complete the full H. pylori treatment course when prescribed — stopping early is the recipe for relapse; avoid regular NSAIDs for 'waist pain' without medical guidance — paracetamol is the safer default and review of the cause is the real cure; limit alcohol; eat regular meals; and report indigestion that persists, worsens, or comes with vomiting.\n\n**For haemorrhoids:** fibre and fluids so the stool is soft (greens, fruits, whole grains, water); do not strain or sit long on the toilet; warm sitz baths for comfort; and any bleeding — especially with changed habit or weight loss — is assessed, not self-treated.\n\n**For hernias:** treat the chronic cough, soften the stool, address the urinary straining, lift smartly — bend knees with a straight back, share heavy loads — and plan elective repair for a symptomatic hernia rather than waiting for its strangulated morning. Every elective repair is a midnight emergency prevented.",
      },
      {
        type: "memory_trick",
        body: "Strangulation sings in four words: 'STUCK, TENSE, TENDER, SILENT' (no cough impulse). Melaena in three: 'BLACK, STICKY, SMELLY' — iron copies the colour but never the character. The hernia-pressure list: 'COUGH, STRAIN, LOAD, BABY, FLUID' — the same list prevents as causes. And for any GI bleed: 'Watch the PATIENT, not the basin.'",
      },
      {
        type: "summary",
        body: "- Hernias = weak wall + raised intra-abdominal pressure (lifting, cough, straining, pregnancy, fluid); types: inguinal, femoral (women, high strangulation), umbilical, incisional, epigastric.\n- Reducible → irreducible → obstructed → strangulated; strangulation = tense, tender, irreducible, no cough impulse — theatre now; never force reduction.\n- Upper GI bleed: haematemesis and melaena (black, sticky, tarry, offensive) from ulcers, varices, gastritis; lower GI bleed: fresh red blood from piles, fissure, cancer, dysentery.\n- Melaena mimicked by iron — sticky-smelly character distinguishes; changed bowel habit with bleeding = cancer pathway.\n- Nursing a significant bleed: frequent vitals and urine, recovery position if vomiting, oxygen if needed, two large-bore IV lines, crossmatch readiness, nil by mouth for likely endoscopy, accurate documentation of losses.\n- Prevention: complete H. pylori courses, avoid habitual NSAIDs, alcohol sense, fibre and fluids, cough and straining treatment, safe lifting, elective hernia repair.",
      },
    ],
    questions: [
      {
        topic: "Hernias",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which findings indicate that a groin hernia has become STRANGULATED?",
        options: [
          "A lump that appears on coughing and reduces when lying down",
          "A soft, painless lump present since childhood",
          "An irreducible lump that is tense and exquisitely tender with no cough impulse, often with obstruction signs",
          "A lump that enlarges during pregnancy and disappears after delivery",
        ],
        correctIndex: 2,
        explanation:
          "Strangulation means the blood supply is cut: the hernia is stuck, tense, very tender and gives no cough impulse, with obstruction signs following. The reducible cough-impulse lump and the soft painless swelling are benign stages.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "GI Bleeds",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 55-year-old man with longstanding 'waist pain' self-treated with pain tablets reports passing black stool that is sticky and very foul-smelling. What is the most likely interpretation?",
        options: [
          "Dietary discolouration from large amounts of dark chocolate",
          "Melaena — digested blood from an upper GI bleed, likely NSAID-related peptic ulceration until reviewed",
          "Normal effect of eating kontomire and dark greens",
          "Cholera stools, requiring only oral rehydration",
        ],
        correctIndex: 1,
        explanation:
          "Black, sticky, tarry and offensive stool is melaena — blood digested in the upper gut. Chronic NSAID use for pain is the classic Ghanaian ulcer-bleed story. Green vegetables and chocolate discolour stool but do not make it tarry and sticky.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Emergency Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient vomits a large volume of fresh blood and is pale, sweaty with a pulse of 122. Which nursing package is correct?",
        options: [
          "Reassure, give oral fluids to replace losses and review at the next round",
          "Recovery position if vomiting, frequent vital signs and urine output monitoring, oxygen if hypoxic, two large-bore IV lines with fluids as prescribed, urgent escalation with crossmatch readiness",
          "Lie flat with legs raised, withhold all fluids by mouth including IV, and wait for morning endoscopy",
          "Give hot sweet tea to 'keep the pressure up' and transport the patient to the ward unaccompanied",
        ],
        correctIndex: 1,
        explanation:
          "Major haematemesis is a volume emergency: airway-safe positioning, close circulatory monitoring, reliable IV access running prescribed fluids, oxygen for hypoxia and urgent team escalation with blood-bank preparedness. Fluids by mouth and delayed review are dangerous in active bleeding.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which teaching most directly prevents progression of a reducible hernia to strangulation?",
        options: [
          "Encouraging heavy weightlifting to strengthen the abdominal wall",
          "Treating the chronic cough and constipation, advising safe lifting, and planning elective surgical repair",
          "Wearing a tight belt over the lump at all times",
          "Ignoring the lump unless it becomes painful",
        ],
        correctIndex: 1,
        explanation:
          "Removing the pressure drivers — cough, straining, unsafe loads — and repairing the defect electively are the real prevention. Tight belts do not fix defects and can mask a strangulation; waiting for pain means waiting for the emergency.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Hernias",
        front: "Which hernia type is commoner in women and carries the highest strangulation risk?",
        back: "The femoral hernia — through the femoral canal below the inguinal ligament; its narrow, rigid neck traps content easily. Any tense tender femoral lump is an emergency.",
      },
      {
        topic: "Strangulation",
        front: "Give the four strangulation descriptors and the contraindicated action.",
        back: "Stuck (irreducible), tense, exquisitely tender, no cough impulse — often with obstruction. Never attempt forceful reduction and never apply heat; theatre is the treatment.",
      },
      {
        topic: "Melaena",
        front: "Define melaena and its three distinguishing characters.",
        back: "Digested blood in stool from an upper GI bleed: black AND sticky-tarry AND characteristically offensive — the trio that separates it from iron-tablet or dietary darkening.",
      },
      {
        topic: "GI Bleed Care",
        front: "What monitoring and access priorities frame significant GI bleeding?",
        back: "Frequent vitals with urine output as the perfusion gauge; recovery position if vomiting; oxygen if hypoxic; two large-bore IV lines with prescribed fluids; urgent escalation with crossmatch organised early; accurate record of losses.",
      },
      {
        topic: "Prevention",
        front: "Name four pressure-drivers you correct to prevent hernia complications.",
        back: "Chronic cough (COPD, TB); constipation and straining at stool; urinary straining from prostate enlargement; unsafe heavy lifting — plus pregnancy care and elective repair of symptomatic hernias.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Management for Emergency and Essential Surgical Care (IMEESC)",
        note: "WHO guidance on hernia repair and emergency surgical care at district level; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National guidance on peptic ulcer disease and GI bleeding; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on GI disorders, hernias and upper GI bleeding. Verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "When Kidneys Struggle",
    lessonTitle: "Urinary Tract Infections: Small Bug, Big Trouble",
    description:
      "The burning that annoys and the loin pain that alarms — from the market trader's cystitis to the grandmother's urosepsis, and the catheter you place only when you must.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Distinguish lower UTI from upper UTI and recognise the populations that present atypically.",
      "Apply correct midstream urine collection technique and interpret dipstick findings.",
      "Implement catheter-associated UTI prevention as a core nursing safety practice.",
      "Teach prevention — hydration, voiding habits and hygiene — using Ghanaian daily-life examples.",
    ],
    tags: ["uti", "pyelonephritis", "catheter care", "infection prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Urinary tract infection travels a small distance with big consequences. **Lower UTI (cystitis)** is infection of the bladder: burning on urination (**dysuria**), needing to go often and urgently (**frequency and urgency**), suprapubic discomfort, and cloudy or strong-smelling urine — usually without fever, because the trouble is contained. **Upper UTI (pyelonephritis)** is infection climbing into the kidney: fever with chills, flank or loin pain, nausea and vomiting, systemic illness — and a body that can slide into **urosepsis** if unattended.\n\nThe culprit in the community is most often **Escherichia coli** — our own gut flora finding a wrong door. That single fact explains who gets infected and how it is prevented, and it hands the nurse the whole story: women (whose short urethra gives the bacteria a quick route), people who hold urine for hours, and anyone whose bladder is emptied by a tube.",
      },
      {
        type: "text",
        title: "The special patients who whisper",
        body: "**Pregnant women** can carry **asymptomatic bacteriuria** — a silent infection of consequence, because untreated it climbs to pyelonephritis and threatens preterm birth; urine screening in antenatal care exists for exactly this reason, and a positive culture is treated, not watched.\n\n**The elderly** often present without any urinary complaint at all: new **confusion**, a fall, loss of appetite or increased incontinence may be the whole picture. Assess their urine properly — but equally, do not blame every confusion on urine: assess, test, and interpret with the team. **Children** show fever alone, poor feeding or vomiting — a UTI in a young child deserves proper evaluation. **Men** get UTIs less often, so when they do, obstruction (commonly prostate enlargement) or prostatitis should be considered. **Diabetic and immunosuppressed patients** are both more susceptible and more dangerous to treat casually. **Catheterised patients** — the final group — deserve their own lesson-half below, because the catheter is the commonest hospital cause.",
      },
      {
        type: "table",
        title: "Cystitis versus pyelonephritis at the bedside",
        body: "| Feature | Cystitis (lower) | Pyelonephritis (upper) |\n|---|---|---|\n| Site | Bladder | Kidney and renal pelvis |\n| Urinary symptoms | Dysuria, frequency, urgency, suprapubic pain | May have urinary symptoms plus systemic illness |\n| Fever and systemic | Usually absent | Fever, chills, nausea, vomiting, malaise |\n| Pain | Suprapubic, low | Loin/flank — costovertebral angle tenderness |\n| Risk trajectory | Nuisance to significant | Pyelonephritis can become urosepsis — a sepsis pathway |\n| Care level | Managed as per protocol, often ambulatory | Often needs stronger therapy, sometimes admission; monitor for sepsis |",
      },
      {
        type: "clinical_pearl",
        body: "One in three sepsis presentations in the elderly starts as a urinary source: when a confused older adult arrives with a fast respiratory rate and borderline blood pressure, examine the urine AND treat the sepsis pathway — not just the burning. Urosepsis is the reason 'small bug, big trouble' is this lesson's title.",
      },
      {
        type: "case",
        title: "Two traders, one clinic",
        body: "A 26-year-old seamstress comes for the third time this year with burning urination and urgency; she is famous for 'holding it' through long market days and wiping 'back to front' in a hurry. Her 71-year-old aunt, brought today, is confused, has vomited twice and has a temperature of 38.6 °C with right loin tenderness. What is the assessment and plan for each?\n\nAnswer: The seamstress has recurrent cystitis with two behavioural drivers — teach hydration as prevention (a habit of roughly two to three litres daily where healthy), voiding when the urge comes, wiping front to back, and urinating soon after intercourse; a midstream urine sample before treatment where possible, and a discussion with the clinician about investigation of recurrence. The aunt is pyelonephritis with possible early urosepsis in an elderly woman: vitals including respiratory rate, midstream (or catheter) specimen as feasible, urgent medical review, monitoring of urine output and perfusion — this is the patient of the two who could be admitted tonight. One clinic bench, two completely different clock-speeds.",
      },
      {
        type: "quiz_prompt",
        title: "The specimen that tells the truth",
        body: "A colleague hands you a urine sample collected 'while she was already passing urine — the first drops into the pot'. What was wrong, and how do you teach a proper midstream collection?\n\nAnswer: The first part of the stream washes out the bacteria and debris of the urethra and perineum, contaminating the culture and mimicking infection. Midstream technique: clean the perineum (front to back for women), begin voiding, and collect the MIDDLE portion into the sterile container without stopping the flow — ideally the first morning specimen, delivered promptly to the laboratory. A contaminated sample prescribes antibiotics to a patient who never needed them.",
      },
      {
        type: "text",
        title: "The catheter: your biggest lever",
        body: "Catheter-associated UTI is among the commonest healthcare-associated infections — and one of the most preventable. The discipline: **catheterise only when truly indicated** — retention, accurate output monitoring in critical illness, selected surgical and palliative situations — never for convenience, staffing ease or 'keeping the bed dry'. Once placed: **aseptic insertion** with generous lubrication; a **closed drainage system** never opened except by necessity; the **bag below bladder level** but off the floor; **unobstructed, unkinked tubing**; **hand hygiene** before and after every contact; **secure the catheter** to the thigh so traction does not harm the urethra; meatal care per policy; and — most powerful of all — the **daily question: does this catheter still need to be in?** Every day of removal delay is added infection risk. The fastest treatment for a catheter UTI is often removing the catheter.",
      },
      {
        type: "memory_trick",
        body: "The ladder: 'Bladder BURNS, Kidney KILLS.' Collection: 'CLEAN, START, CATCH the MIDDLE.' The catheter code: 'Only, Aseptic, Closed, Below, Flowing, Clean, Secure, Daily-ask-why, and Out-as-early-as-possible.' And for the elderly: 'Confusion plus fever — think urine, treat sepsis.'",
      },
      {
        type: "summary",
        body: "- Lower UTI (cystitis): dysuria, frequency, urgency, suprapubic pain, no fever; upper UTI (pyelonephritis): fever, chills, loin pain, systemic upset — a sepsis-capable illness.\n- E. coli from the gut is the commonest organism — short female urethra, held urine and catheters are the open doors.\n- Atypical presenters: pregnant women (asymptomatic bacteriuria — screen and treat), the elderly (confusion, falls), children (fever alone), men (think obstruction).\n- Midstream collection: clean, begin voiding, catch the middle; dipstick nitrites and leucocytes support, culture guides therapy — complete the prescribed course.\n- Catheter discipline is CAUTI prevention: only when indicated, aseptic, closed, below-bladder, flowing, secured — with daily review and earliest removal.\n- Prevention teaching: hydration, void when urged (market traders, teachers, travellers), wipe front to back, void after intercourse.",
      },
    ],
    questions: [
      {
        topic: "UTI",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which symptom cluster points to pyelonephritis rather than simple cystitis?",
        options: [
          "Burning urination with frequency and urgency only",
          "Fever with chills, flank (loin) pain, nausea and systemic illness",
          "Suprapubic discomfort with cloudy urine and no fever",
          "Stress incontinence on coughing",
        ],
        correctIndex: 1,
        explanation:
          "Pyelonephritis means the infection has reached the kidney: fever, chills, loin tenderness and systemic features separate it from the contained bladder syndrome of cystitis, which is dysuria-frequency-urgency without fever.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Specimen Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which instructions give a correct midstream urine specimen?",
        options: [
          "Collect the first few drops of the stream directly into the container",
          "Clean the perineum, begin voiding, then catch the middle portion of the stream in a sterile container without stopping flow",
          "Collect urine from the drainage bag of a catheter system",
          "Ask the patient to drink a full litre first and hold urine as long as possible before the sample",
        ],
        correctIndex: 1,
        explanation:
          "The midstream portion avoids urethral and perineal contamination that the first (and last) drops carry. Bag urine is stale and colonised; samples from the drainage port follow a different protocol; and forced holding merely concentrates discomfort, not accuracy.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "CAUTI Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which nursing practice best prevents catheter-associated urinary tract infection?",
        options: [
          "Catheterising every bed-bound patient for hygiene convenience",
          "Catheterising only when clinically indicated, maintaining a closed drainage system with the bag below bladder level, hand hygiene before and after contact, and reviewing daily for earliest removal",
          "Opening the drainage system regularly to irrigate the bladder with antiseptic",
          "Placing the drainage bag on the bedside table to keep it off the floor",
        ],
        correctIndex: 1,
        explanation:
          "The prevention bundle is indication discipline, asepsis, closed systems, dependent (but off-floor) drainage, unkinked flow, hygiene and earliest removal. Convenience catheterisation and routine irrigation create the very infections the bundle prevents; the bag belongs below the bladder, never above it.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Special Populations",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Why is asymptomatic bacteriuria in a pregnant woman treated rather than observed?",
        options: [
          "Because it always causes immediate kidney failure",
          "Because in pregnancy it frequently ascends to pyelonephritis and is associated with preterm labour and low birth weight",
          "Because untreated bacteriuria is contagious to the newborn at delivery",
          "Because it is required for accurate antenatal dating",
        ],
        correctIndex: 1,
        explanation:
          "Pregnancy's dilated ureters and suppressed immunity let silent bacteriuria climb: untreated, a significant proportion develop pyelonephritis with risks of preterm birth. Antenatal urine screening and treatment of significant bacteriuria is standard protective care.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Presentation",
        front: "Contrast cystitis and pyelonephritis in one line each.",
        back: "Cystitis — bladder: burning, frequency, urgency, suprapubic pain, no fever. Pyelonephritis — kidney: fever with chills, loin pain, vomiting, systemic illness, sepsis-capable.",
      },
      {
        topic: "Specimen Collection",
        front: "Describe proper midstream urine collection in three steps.",
        back: "Clean the perineum (front to back in women); start voiding to flush the urethra; catch the middle portion of the stream in a sterile container — promptly labelled and sent, ideally a first-morning sample.",
      },
      {
        topic: "CAUTI Prevention",
        front: "State the catheter-care bundle that prevents CAUTI.",
        back: "Catheterise only for true indication; aseptic insertion; closed drainage never broken; bag below bladder, off the floor; tubing unkinked; hand hygiene; secure to thigh; daily review — remove at the earliest possible moment.",
      },
      {
        topic: "Atypical Presentations",
        front: "How does UTI present in the elderly, and what must you assess alongside urine?",
        back: "Often silently: new confusion, falls, appetite loss, incontinence — sometimes without fever or urinary complaints. Assess urine, but also assess for the sepsis pathway (respiratory rate, blood pressure, urine output) because urosepsis is common and lethal.",
      },
    ],
    sources: [
      {
        organization: "CDC",
        title: "Catheter-Associated Urinary Tract Infections — Prevention Guidance",
        note: "Evidence-based recommendations on catheter use, maintenance and removal.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National protocols on UTI management and specimen handling; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on renal and urological nursing. Verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "When Kidneys Struggle",
    lessonTitle: "Acute Kidney Injury: The Failing Filter",
    description:
      "The kidney that stops overnight — the farmer's dehydration, the 'waist pain' tablets, the blocked catheter. Find the cause before the kidney dies of it, and never drown a failing filter.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Define acute kidney injury by its creatinine and urine-output signature and describe its staging concept.",
      "Classify AKI causes as pre-renal, intrinsic and post-renal, with Ghanaian examples of each.",
      "Apply nursing surveillance — strict intake-output, daily weight and monitoring for hyperkalaemia and fluid overload.",
      "Explain the recovery phase, the medication-review role and dialysis referral in the Ghanaian context.",
    ],
    tags: ["acute kidney injury", "oliguria", "fluid balance", "renal nursing"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "**Acute kidney injury (AKI)** is an abrupt fall in the kidney's filtering ability — over hours to days — shown by a **rising creatinine and urea** in the blood and, in most cases, falling **urine output**: less than 0.5 mL per kilogram per hour for six hours or more, or under about 400 mL per day (**oliguria**). Some patients pass normal volumes of poor-quality urine (non-oliguric AKI) — which is why the blood tests matter, not only the bedpan.\n\nThe framing that unlocks everything at the bedside is the plumber's map: is the problem **BEFORE the kidney** (not enough blood arriving), **IN the kidney** (the filter itself damaged), or **AFTER the kidney** (the pipes blocked)? Each has a different treatment, and the first — pre-renal AKI, the thirsty kidney — is the commonest on our wards and the most reversible if you catch it early.",
      },
      {
        type: "text",
        title: "The three territories",
        body: "**Before the kidney (pre-renal):** the filter is healthy but blood arrives inadequate — dehydrating diarrhoea and cholera, vomiting, harmattan heat with poor intake, severe malaria, sepsis pooling blood away from the kidneys, haemorrhage, heart failure's poor forward flow, burns. The kidney is gasping, not broken: early fluid correction restores it fully; delay lets the starving tissue die (**acute tubular necrosis**, the bridge into intrinsic AKI).\n\n**In the kidney (intrinsic):** the filter itself is injured — prolonged pre-renal starvation as above; sepsis; and **nephrotoxins**, which in Ghana means self-purchased NSAIDs for 'waist pain' taken for weeks, aminoglycoside antibiotics (the gentamicin family), contrast studies, and the nephrotoxic **herbal concoctions** patients often do not mention unless you ask respectfully.\n\n**After the kidney (post-renal):** pressure builds backward from a blocked pipe — the elderly man with prostate enlargement, cervical cancer invading the ureters, stones, strictures — and one cause you can fix with your own hands in minutes: **the blocked or kinked urinary catheter**. Any new oliguria on your ward deserves one thought before all others: check the catheter.",
      },
      {
        type: "table",
        title: "AKI territories at a glance",
        body: "| Territory | Mechanism | Ghanaian examples | First response |\n|---|---|---|---|\n| Pre-renal | Poor renal blood flow — thirsty filter | Diarrhoea/cholera, vomiting, heat dehydration, malaria, sepsis, haemorrhage, heart failure | Identify and correct volume per prescription — early reversal is complete |\n| Intrinsic | Filter damaged | ATN from prolonged pre-renal; NSAIDs, aminoglycosides, contrast, nephrotoxic herbs; sepsis | Remove the insult, supportive care, monitor electrolytes |\n| Post-renal | Outflow blocked | Prostate enlargement, cervical cancer, stones, strictures, blocked catheter | Relieve the obstruction — always check the catheter FIRST |\n\nDangerous complications you monitor for: **fluid overload** (oedema, hypertension, crackles — the drowning risk of over-enthusiastic fluids), **hyperkalaemia** (arrhythmias — peaked T waves, widened complexes; cardiac arrest), **acidosis** (deep Kussmaul breathing), **uraemia** (confusion, drowsiness, pericarditis, bleeding tendency) and infection.",
      },
      {
        type: "clinical_pearl",
        body: "Urine output is the kidney's live news broadcast: measure it hourly in the catheterised acutely ill patient and record the non-catheterised patient's voids with times and volumes. A urine output below 0.5 mL/kg/h for six hours is AKI's early headline — reported with the fluid intake beside it, because the interpretation ('dry patient' versus 'drowning patient') hangs on that pairing.",
      },
      {
        type: "case",
        title: "The farmer and the waist pain",
        body: "A 56-year-old farmer, three days of vomiting and diarrhoea, has been dosing 'waist pain' with pain tablets and a bitter herbal preparation bought at the lorry park. He has passed only small amounts of dark urine since yesterday and today barely any. Mucous membranes are dry, pulse 110, and his creatinine has doubled since admission. What is the likely territory, what do you chart, and what must be corrected?\n\nAnswer: A dry gut-emptying patient with scanty dark urine on NSAIDs and a nephrotoxic concoction — most probably pre-renal AKI threatening to tip into tubular damage. Chart strict intake and output (hourly urine if catheterised), daily weight, vitals, and report for urgent medical review of volume status, electrolytes and medication list. Expect the team to stop the nephrotoxins — the pain tablets and the herbal mix both belong on the list you hand over — and correct volume per prescription, guided by urine response. Your documentation is the resuscitation's steering wheel. And one more check before anything clever: confirm there is no blocked catheter or prostate story — the plumber's map, every time.",
      },
      {
        type: "quiz_prompt",
        title: "The drowning trap",
        body: "The same farmer, now 12 hours into treatment, has developing ankle oedema and new crackles at both lung bases while his urine output stays minimal. A colleague suggests 'pushing more fluids — the kidney is still dry'. What is the danger?\n\nAnswer: When AKI is established, the failing kidney cannot excrete what you pour in — continued aggressive fluids cause fluid overload: pulmonary oedema, hypertension and strain on the heart. The decision to give or restrict fluid belongs to the team's assessed volume status, and your intake-output record and daily weights are exactly the evidence that decision needs. 'More fluids' is a diagnosis, not a reflex.",
      },
      {
        type: "text",
        title: "Nursing the failing filter",
        body: "**Measure everything:** hourly urine output when catheterised; every oral and intravenous input; vomitus and diarrhoea losses; daily weight at the same time on the same scale — the trend is the story.\n\n**Guard the electrolytes:** know the potassium danger foods during hyperkalaemia — bananas, oranges and citrus, plantain, groundnuts, avocados, tomatoes, dark greens — and teach the 'small salt, small fluid, listed foods' plan the dietitian individualises. Watch for the arrhythmia signs and report potassium results with ECG changes immediately.\n\n**Protect the kidney from further harm:** the medication review is a nursing contribution — flag every NSAID, aminoglycoside, metformin and herbal preparation on the chart for the team's reassessment; ensure contrast studies are flagged in renal impairment; dose adjustments are the prescriber's, awareness yours.\n\n**Prepare for the escalation:** when uraemia worsens, hyperkalaemia resists correction, acidosis deepens or fluid overload stops responding, the team moves toward **dialysis** — available in Ghana mainly at teaching and larger regional hospitals (Korle Bu and Komfo Anokye among them), with cost and distance realities that families need honest, early guidance about. Your role: timely recognition, safe monitoring, and preparing patient and family for referral conversations.\n\n**The recovery phase:** kidneys that survive often **recover with a flood** — the **polyuric phase**, litres of urine daily as tubular function returns before concentrating ability. The danger flips: now the patient can dehydrate and lose electrolytes. Continue intake-output vigilance, replace as prescribed, and schedule follow-up creatinine — recovery is confirmed by the laboratory, not by the bedside smile.",
      },
      {
        type: "memory_trick",
        body: "The map: 'BEFORE, IN, BEHIND — blood in, filter, pipes out' (pre-renal, intrinsic, post-renal). The early warning: '0.5 millilitres per kilogram per hour — six hours of less is AKI knocking.' The fluid rule: 'Dry kidney: fill the veins. Dying kidney: do not drown it.' The potassium shape: 'Peaked T, wide QRS — potassium threatening the heart.' The recovery paradox: 'First it won't pass, then it can't stop — the polyuric flood needs watching too.'",
      },
      {
        type: "summary",
        body: "- AKI = abrupt fall in filtration: rising urea/creatinine with oliguria (below 0.5 mL/kg/h over 6 hours, or under ~400 mL/day); non-oliguric AKI exists — trust the labs.\n- Territories: pre-renal (dehydration, malaria, sepsis, bleeding, heart failure — most common, most reversible), intrinsic (ATN, NSAIDs, aminoglycosides, herbs, sepsis), post-renal (prostate, cervical cancer, stones — and the blocked catheter, checked first).\n- Nursing core: strict intake-output with hourly urine when it matters, daily weights, medication-review flags, potassium vigilance and individualised diet teaching.\n- Fluid decisions follow assessed volume status — the dry kidney needs filling, the established AKI can be drowned; your charts steer both.\n- Escalation to dialysis for refractory hyperkalaemia, acidosis, overload or deepening uraemia — with honest Ghanaian guidance on access and cost.\n- Recovery's polyuric phase still needs charts: litres of urine can dehydrate as surely as oliguria drowned.",
      },
    ],
    questions: [
      {
        topic: "AKI Classification",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with severe diarrhoeal dehydration develops oliguria and a rising creatinine. Which AKI category is most likely, and why does speed matter?",
        options: [
          "Post-renal, because diarrhoea compresses the bladder outlet",
          "Pre-renal — reduced blood flow to a healthy filter; early volume correction reverses it completely, while delay causes tubular death",
          "Intrinsic, because the diarrhoea directly destroys glomeruli within hours",
          "Chronic kidney disease, because oliguria always means chronic failure",
        ],
        correctIndex: 1,
        explanation:
          "Volume depletion starves a healthy kidney — the classic pre-renal pattern, fully reversible with early correction. Every hour of delay moves the starving tubules toward necrosis, converting a plumbing problem into permanent filter damage.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Monitoring",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which urine output threshold should trigger reporting for possible AKI in a monitored acutely ill patient?",
        options: [
          "Below 0.5 mL per kilogram per hour for six hours or more",
          "Below 3000 mL per day",
          "Any urine output below 2000 mL per day in all adults",
          "Passing urine only four times daily",
        ],
        correctIndex: 0,
        explanation:
          "Oliguria defining AKI is under 0.5 mL/kg/h for about six hours (roughly under 400 mL/day in an average adult) — the bedside threshold your intake-output chart is built to catch early.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Post-renal AKI",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A catheterised patient's urine output falls abruptly to nearly zero. Before assuming the kidney has failed, what must you check first?",
        options: [
          "Nothing — oliguria in a catheterised patient always means intrinsic AKI",
          "The catheter and tubing for blockage, kinking or occlusion — a mechanical cause you can relieve immediately",
          "Only the patient's temperature",
          "The evening meal, because food reduces urine production",
        ],
        correctIndex: 1,
        explanation:
          "A blocked or kinked catheter is post-renal AKI you can reverse with your hands in minutes. Mechanical checks precede laboratory theorising whenever an output falls suddenly in a catheterised patient.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Fluid Management",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient with established AKI has new crackles, rising ankle oedema and continuing minimal urine output. What is the correct nursing frame?",
        options: [
          "Push more intravenous fluids — the kidney is still volume-depleted",
          "Escalate the fluid-overload picture for medical review; continue strict intake-output and daily weights to guide restriction decisions",
          "Encourage two to three litres of oral fluids to flush the kidneys",
          "Give a high-potassium diet to support the struggling heart",
        ],
        correctIndex: 1,
        explanation:
          "Established AKI cannot excrete fluid: crackles plus oedema mean the resuscitation has become the danger. Escalation with accurate charts guides the restriction or dialysis decisions — more fluid now would drown the patient, and potassium-rich diets feed the arrhythmia risk.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Definition",
        front: "Define AKI by its urine-output criterion and state the three causal territories.",
        back: "Urine output under 0.5 mL/kg/h for about six hours (or under ~400 mL/day) with rising urea/creatinine. Territories: pre-renal (poor inflow), intrinsic (filter damage), post-renal (blocked outflow).",
      },
      {
        topic: "Causes",
        front: "Give two Ghanaian examples of each AKI territory.",
        back: "Pre-renal: diarrhoeal dehydration, severe malaria, sepsis, haemorrhage. Intrinsic: NSAID overuse for 'waist pain', aminoglycosides, nephrotoxic herbal concoctions. Post-renal: prostate enlargement, cervical cancer, stones — or a blocked catheter.",
      },
      {
        topic: "Complications",
        front: "Name four AKI complications and one sign of each.",
        back: "Fluid overload — crackles and oedema; hyperkalaemia — peaked T waves and arrhythmia; acidosis — deep Kussmaul breathing; uraemia — confusion and drowsiness (with pericarditis and bleeding risk).",
      },
      {
        topic: "Nursing Surveillance",
        front: "What three measurements anchor AKI nursing, and why pair intake with output?",
        back: "Strict intake-output (hourly urine when catheterised), daily weight at standard conditions, and vitals with electrolyte vigilance — intake beside output distinguishes the dry kidney needing filling from the failing kidney needing restriction.",
      },
      {
        topic: "Recovery",
        front: "What is the polyuric phase of AKI recovery, and what danger does it carry?",
        back: "As tubules recover, urine volumes surge for days before concentrating ability returns — the patient can now dehydrate and lose electrolytes. Keep charts running and replace losses as prescribed; confirm recovery with follow-up creatinine.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Integrated Management of Adult Illness — Acute Care Guidelines",
        note: "WHO district-level acute care modules covering severely ill adults including renal compromise; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "National guidance on fluid management and referral of renal emergencies; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on renal disorders, fluid-electrolyte balance and dialysis. Verify current edition.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-3",
    moduleTitle: "When Kidneys Struggle",
    lessonTitle: "Chronic Kidney Disease: The Long Decline",
    description:
      "The kidneys that fade for years without a word — until the itching, the weakness and the fluid arrive. Slowing the decline, choosing dialysis, and nursing the life that remains.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Define chronic kidney disease and outline its stages using the GFR framework.",
      "Identify the leading causes of CKD in Ghana and the interventions that slow progression.",
      "Explain the systemic complications of CKD — anaemia, bone disease, itch, fluid overload and cardiovascular risk.",
      "Apply nursing care across the CKD journey: diet and adherence coaching, vascular access protection and supportive decision-making with families.",
    ],
    tags: ["chronic kidney disease", "dialysis", "renal diet", "long-term care"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "**Chronic kidney disease** is damage or declining function persisting longer than three months — a slow, quiet substitution of scar tissue for working nephrons. The kidney's legendary reserve hides the disease: a patient can lose half the filtration and feel nothing, so CKD is often first met as anaemia that will not respond, hypertension that will not settle, oedema without explanation, or symptoms only at the late stages. Two quiet numbers define the journey: **creatinine** rising and the **GFR** (glomerular filtration rate) falling; protein in the urine (proteinuria) is both a marker and an accelerant.\n\nWhere AKI is a storm, CKD is harmattan — patient, gradual, and settling over everything. The medical agenda is slowing the decline; the nursing agenda is larger: protecting what remains, treating the complications, walking the dialysis and transplant conversations with honesty, and caring for those for whom the technology is out of reach.",
      },
      {
        type: "text",
        title: "Whose kidneys? The Ghanaian causes",
        body: "The four giants driving Ghanaian CKD: **hypertension** — years of high pressure hammering the filters; **diabetes** — rising fast with our changing diets and lifestyles, diabetic nephropathy now a leading cause of new dialysis patients; **chronic glomerulonephritis** — the kidney's own immune scarring, common in younger patients; and **sickle cell nephropathy** — decades of sickling in the kidney's delicate medulla. Add obstructive causes (the uncle whose prostate went untreated too long; stones), polycystic disease, HIV-associated nephropathy — and a category Ghana cannot afford to ignore: **herbal nephrotoxicity**, the accumulated injury of chronic concoction use, often unmentioned until you ask without judgement.\n\nRepeated episodes of untreated AKI also leave scars that become CKD — which links this lesson to the last one: every well-resuscitated farmer is one less dialysis candidate in fifteen years.",
      },
      {
        type: "table",
        title: "The stages of CKD (simplified GFR framework)",
        body: "| Stage | GFR band (mL/min/1.73 m2) | Typical picture | Focus |\n|---|---|---|---|\n| G1 | 90 or more with kidney damage markers | Normal filtration, proteinuria or structural findings | Treat cause, protect the kidney |\n| G2 | 60–89, mild reduction | Usually silent | Risk-factor control, monitoring |\n| G3 | 30–59, moderate reduction | Anaemia, early bone disease, rising blood pressure | Complications management, nephrology referral |\n| G4 | 15–29, severe reduction | Fatigue, itch, appetite loss, oedema | Prepare for renal replacement decisions |\n| G5 | Under 15, kidney failure | Uraemia, fluid overload, dangerous electrolytes | Dialysis, transplant or supportive care |",
      },
      {
        type: "clinical_pearl",
        body: "The kidney makes hormones as well as urine: the failing kidney cannot produce **erythropoietin**, so CKD anaemia is normocytic and unresponsive to iron alone — it is a hormone deficiency as much as a blood problem. And because the kidney fails to activate vitamin D and excrete phosphate, the bones pay the bill: renal osteodystrophy — bone pain, fractures — with intractable **itching** often driven by the retained phosphate. Itch that does not respond to anything in a chronic patient is a renal symptom until proven otherwise.",
      },
      {
        type: "case",
        title: "The retired teacher",
        body: "A 63-year-old retired teacher attends your clinic for 'swollen legs and weakness'. She has had hypertension for fifteen years, attends clinic 'when there is money', and her last two refills ran out months ago; she takes a herbal mixture 'for pressure'. Her blood pressure today is 186 over 104, she has pitting ankle oedema, pallor of the palms, and complains of generalised itching that keeps her awake. What is the likely story and what does your nursing plan hold?\n\nAnswer: Long-standing uncontrolled hypertension with self-purchased herbal mixtures, new oedema, pallor and itch — CKD with probable G3–G4 disease until staging proves otherwise. Nursing: measure vitals and weight, document the oedema and skin, support investigations (creatinine and GFR, urinalysis for protein, haemoglobin), and report for management review. The counselling is the treatment: blood pressure control as the single biggest brake on her decline — attended refills, affordable options discussed with the team, the herbal mixture disclosed honestly for the team's assessment; salt and fluid discipline; and complication care as staged (anaemia assessment, phosphate and itch management). Her missed appointments are the disease's biography — bring the family in, solve the cost conversation with the team early, and set a follow-up rhythm she can actually keep.",
      },
      {
        type: "quiz_prompt",
        title: "The arm that saves the life",
        body: "A patient on haemodialysis arrives at your ward for an intercurrent illness. The student on duty measures blood pressure on the left forearm — the arm with the bulging, scarred vein of his arteriovenous fistula. Why is this a serious error, and what is the rule?\n\nAnswer: The fistula is his lifeline — the only reliable access for dialysis — and its delicate vessel and pressure dynamics can be destroyed by compression, cannulation or infection. The rule: NO blood pressure cuffs, NO injections, NO blood draws, and no tight jewellery or watches on the fistula arm; keep it clean, check the thrill (the buzzing flow) daily, and report a silent, cold or painful fistula immediately. One careless cuff can end a patient's dialysis access.",
      },
      {
        type: "text",
        title: "The journey: slowing, replacing, or comforting",
        body: "**Slowing the decline** is where nursing earns its keep: blood pressure controlled to target and medications taken exactly as prescribed (the day she skips 'because I feel fine' is the day the filters scar); diabetes tightly managed; protein in the diet 'right-sized' — enough to keep strength, not so much as to burden the filters — a dietitian's craft in Ghanaian terms; **salt and fluid** individualised to the patient's output and overload pattern; **potassium and phosphate** managed with food lists (the plantain, banana, orange, groundnut and avocado warnings belong to the hyperkalaemia window; phosphate-rich foods and binders taken WITH meals for the bone-and-itch problem); and a standing rule: **every new medicine, including herbal, crosses the team's desk**.\n\n**Replacing the function:** **haemodialysis** — typically three sessions weekly at a unit, blood cleaned through the fistula or a line; Ghana's reality of cost and distance makes your adherence and transport counselling as important as the prescription. **Peritoneal dialysis** — exchanges of fluid in the abdominal cavity, performed at home; the nurse's teaching mission includes exit-site care and the peritonitis alarm: **cloudy drained fluid**, abdominal pain or fever means come now. **Transplantation** — the fullest restoration, dependent on living-related donation and lifelong immunosuppression, with its own counselling and monitoring world.\n\n**Comforting when replacement is not chosen or not reachable:** a legitimate, dignified pathway — meticulous symptom care for itch (emollients, short clean nails, cool clothing; phosphate control where possible), nausea, mouth and skin care; fluid and salt gentleness; psychosocial and spiritual support for patient and family; and honest planning that lets families spend the remaining time meaningfully rather than in desperate late transfers.",
      },
      {
        type: "memory_trick",
        body: "The decline drivers: 'P.D.G.S.H.' — **P**ressure (hypertension), **D**iabetes, **G**lomerulonephritis, **S**ickle cell, **H**erbal toxins. The failure functions: the kidney 'EXCRETES water, EXHALES potassium and acid, MAKES EPO and vitamin D' — losing them gives oedema, arrhythmias, acidosis, anaemia, bone disease and itch. The fistula law: 'Cuff, Needle, Watch — NEVER on the fistula arm; check the THRILL every day.'",
      },
      {
        type: "summary",
        body: "- CKD = damage or GFR decline beyond three months; staged G1–G5 by GFR, with proteinuria as marker and accelerant — often silent until G3–G4.\n- Ghanaian drivers: hypertension, diabetes (rising), glomerulonephritis, sickle cell, obstruction, repeated AKI and chronic herbal nephrotoxicity — ask without judgement.\n- Complications: EPO-deficiency anaemia, renal bone disease with phosphate-driven itch, fluid overload and hypertension, hyperkalaemia, acidosis, uraemia — and cardiovascular disease as the leading cause of death.\n- Slowing the decline: BP and diabetes control, adherence, nephrotoxin vigilance, individualised salt-fluid-protein-potassium-phosphate diet coaching.\n- Replacement: haemodialysis (fistula protected — no cuff, no needles, no watches; check the thrill), peritoneal dialysis (cloudy effluent = peritonitis alarm), transplant where feasible — with honest cost and access counselling.\n- Supportive care is real care: symptom relief, family partnership and dignified planning for those who cannot reach the machines.",
      },
    ],
    questions: [
      {
        topic: "CKD Definition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How is chronic kidney disease defined in contrast to acute kidney injury?",
        options: [
          "Kidney damage or reduced function persisting longer than three months",
          "Any rise in creatinine occurring within 48 hours",
          "Complete absence of urine for two weeks",
          "Kidney stones seen on ultrasound",
        ],
        correctIndex: 0,
        explanation:
          "CKD is the chronicity beyond three months of damage markers or reduced filtration, staged by GFR — distinguishing it from AKI's abrupt hours-to-days injury, though repeated AKI can seed CKD.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Complications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does advanced CKD commonly cause a normocytic anaemia that does not respond well to iron alone?",
        options: [
          "Because the failing gut cannot absorb iron at all in CKD",
          "Because the damaged kidney cannot produce erythropoietin, the hormone that drives red cell production in the marrow",
          "Because CKD patients always have concurrent malaria",
          "Because uraemia causes red cells to swell and burst in the vessels",
        ],
        correctIndex: 1,
        explanation:
          "The kidney is an endocrine organ: erythropoietin from the peritubular cells stimulates the marrow. As filtration fails, EPO production fails — a hormone-deficiency anaemia needing specific therapy, not iron alone.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Dialysis Access",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of rules protects a haemodialysis patient's arteriovenous fistula?",
        options: [
          "Use the fistula arm preferentially for blood draws and injections to keep veins healthy",
          "No blood pressure cuffs, no injections or blood draws, no tight jewellery on the fistula arm; keep it clean, check the thrill daily and report a silent or cold access immediately",
          "Apply a firm compression bandage over the fistula each night",
          "Massage the fistula firmly three times daily to maintain flow",
        ],
        correctIndex: 1,
        explanation:
          "The fistula is the patient's lifeline: compression, puncture and infection destroy it. Protect the arm from cuffs and needles, guard cleanliness, monitor the thrill (buzz) and escalate a cold, silent or painful access immediately.",
        courseSlug: "medical-surgical-nursing-3",
      },
      {
        topic: "Disease Management",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient with stage 3 CKD from hypertension asks what will actually keep her off dialysis. Which package best answers her?",
        options: [
          "Strict bed rest, total fluid restriction from now, and avoiding all clinic visits to reduce stress",
          "Blood pressure controlled to target with faithful medication adherence, nephrotoxin avoidance including unprescribed herbs, an individualised diet with salt and fluid discipline, and regular monitoring visits",
          "High-protein body-building diet with unlimited greens and fruits to build blood",
          "Starting dialysis early at stage 3 as a preventive measure",
        ],
        correctIndex: 1,
        explanation:
          "Progression slows with the boring disciplines: pressure control, adherence, avoidance of further insults, diet individualised by stage (excess protein burdens the filters; potassium-heavy fruits and greens can be dangerous) and consistent monitoring. Bed rest and early elective dialysis are not protective; discipline is.",
        courseSlug: "medical-surgical-nursing-3",
      },
    ],
    flashcards: [
      {
        topic: "Staging",
        front: "What defines CKD, and what does the GFR stage ladder run?",
        back: "Damage or GFR decline beyond three months. Stages: G1 at 90-plus with damage markers, G2 at 60–89, G3 at 30–59, G4 at 15–29, G5 below 15 — kidney failure, where replacement or supportive care begins.",
      },
      {
        topic: "Causes",
        front: "Name five drivers of CKD in Ghana.",
        back: "Hypertension, diabetes mellitus (rising fast), chronic glomerulonephritis, sickle cell nephropathy — plus obstruction from untreated prostate or stones, and chronic herbal nephrotoxicity; repeated AKI seeds CKD too.",
      },
      {
        topic: "Complications",
        front: "Why itch, weak bones and anaemia travel together in CKD?",
        back: "Failing kidneys retain phosphate and cannot activate vitamin D — bone disease with fractures — while retained phosphate drives the intractable itch; and absent erythropoietin starves the marrow of its red-cell signal.",
      },
      {
        topic: "Fistula Care",
        front: "State the fistula protection rules in one line.",
        back: "No cuff, no needle, no watch on the fistula arm; keep it clean; feel the thrill daily; a silent, cold or painful fistula is an emergency.",
      },
      {
        topic: "Peritoneal Dialysis",
        front: "What single sign marks peritonitis in a peritoneal dialysis patient, and what does it demand?",
        back: "Cloudy drained dialysis fluid — often with abdominal pain or fever — means peritonitis: present for review the same day, every time.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Noncommunicable Diseases and Renal Health — Country Capacity and Guidance",
        note: "WHO resources on CKD burden and integrated NCD care including hypertension and diabetes control; check latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National NCD and Renal Services Guidance",
        note: "Ghana renal care and dialysis service framework; verify current edition with GHS.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
        note: "Chapters on chronic kidney disease, dialysis and renal replacement therapy. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },
];
