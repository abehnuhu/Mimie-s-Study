// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch C (High-Risk Maternal & Newborn Care)
// 12 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Spotting Trouble Early",
    lessonTitle: "Risk Assessment: The First Visit Onwards",
    description:
      "Some mothers carry their risks quietly — the booking visit is where a nurse's questions turn a hidden danger into a written plan.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the history, examination and baseline tests that make up the first-visit risk assessment.",
      "Explain the obstetric, medical and social risk factors that change where a mother should give birth.",
      "Apply a booking-visit plan that flags high-risk mothers, treats what is treatable and builds the birth plan early.",
    ],
    tags: ["risk assessment", "booking visit", "antenatal", "birth plan", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most pregnancies end well, and that happy fact can make a busy clinic sleepy. But every mother who walks through the door carries her own level of risk — and the visit where that risk is first measured is the visit where it is cheapest to manage.\n\nHigh-risk maternal care begins long before any emergency. It begins with a nurse who asks the right questions at booking, writes down what she finds, and lets that information shape a plan: extra visits, extra iron, a different birth place, a waiting home near term. In this course doctors and senior maternity clinicians lead the definitive care — but it is usually the nurse who first notices, counts, flags and prepares. That work starts at visit one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Sort risk into four baskets.\n\n**Her obstetric history** — a previous caesarean or ruptured uterus, pre-eclampsia, stillbirth or newborn death, preterm birth, low birth weight, three or more miscarriages, postpartum haemorrhage, or a previous obstructed labour. **Her body today** — anaemia, hypertension, diabetes, cardiac disease, epilepsy, sickle cell disease, HIV or tuberculosis. **Her background** — age under 18 or over 35, five or more previous births, less than two years since the last birth, long distance from a facility, no transport plan, or a family that decides for her. **Her numbers** — blood pressure at every contact, weight and height, fundal height against dates, haemoglobin, urine for protein and infection, and the booking screens: syphilis, HIV and hepatitis B.\n\nThen let the findings act. Risk factors **stack** — two moderate risks behave like one strong one, so weigh the whole mother, not single findings. Every serious flag moves the birth plan toward a facility with blood, theatre and newborn care — and the time to write that plan is the first visit, not the forty-second week.",
      },
      {
        type: "table",
        title: "The four baskets at a glance",
        body: "| Basket | Examples | What changes in the plan |\n| --- | --- | --- |\n| Past pregnancies | Previous caesarean, pre-eclampsia, stillbirth, preterm birth, PPH | Plan birth where theatre and blood exist; extra surveillance |\n| Body conditions | Anaemia, hypertension, diabetes, heart disease, HIV, sickle cell | Treat or stabilise now; more frequent visits; medicines per protocol |\n| Background life | Teenage or over 35, grand multiparity, spacing under two years, distance, poverty | Counselling, iron and net, waiting home, transport plan, social support |\n| Baseline numbers | BP, weight, Hb, urine, syphilis, HIV, hepatitis B screens | Treat positives, document results, set the follow-up schedule |",
      },
      {
        type: "clinical_pearl",
        body: "The cheapest risk-screening trio in Ghana is the blood pressure cuff, the haemoglobin result and the tape measure. Any one of them can change a birth plan — and all three fit in a CHPS cupboard.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ataa, 17, books for antenatal care at your district clinic at 16 weeks. It is her first pregnancy. She looks pale, her haemoglobin returns 9.4 g/dL, and she walked two hours from her village because the river road has no transport. Her blood pressure is 104/64 and her urine is clear.\n\nWhat does her risk assessment add up to, and what is your plan today?\n\nAnswer: Her risks stack — adolescence in a first pregnancy, anaemia, and real distance from emergency care. Start treatment now: iron with folic acid per protocol, counselling to take it with a vitamin C-rich drink and never with tea, and a treated mosquito net. Book more frequent visits with a haemoglobin recheck, open the conversation about a facility birth with a named transport plan or a maternity waiting home near term, and teach the danger signs that mean come immediately — severe headache, blurred vision, swelling of the face and hands, bleeding, fever, reduced fetal movement. Write the whole plan in her antenatal book so every nurse who meets her next reads the same story.",
      },
      {
        type: "memory_trick",
        body: "Remember the four Baskets of booking: Babies (her obstetric history), Body (her medical conditions), Background (her social situation and distance), Basics (the numbers and screens). A mother with findings in two baskets is never a low-risk mother.",
      },
      {
        type: "summary",
        body: "- Booking is where risk is cheapest to manage: history, examination, baseline tests, and a birth plan written early.\n- Four baskets: obstetric history, current medical conditions, social background, baseline numbers.\n- Risk factors stack — two moderate findings behave like one strong indication for a higher-level birth plan.\n- Every serious flag — previous caesarean, severe anaemia, teenage first pregnancy, distance from care — moves the plan toward blood, theatre and newborn care.\n- The nurse does not wait for danger to declare itself: extra visits, iron, nets, transport plans and danger-sign teaching all start at visit one.",
      },
    ],
    questions: [
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which previous obstetric history most strongly changes where a mother should give birth?",
        options: [
          "One previous miscarriage at 8 weeks, fully treated",
          "A previous caesarean birth",
          "A previous baby weighing 3.1 kg born at term",
          "Two previous normal births at a facility",
        ],
        correctIndex: 1,
        explanation:
          "A previous caesarean leaves a scarred uterus that can rupture in labour, so such mothers give birth where theatre, blood and monitoring exist — a plan made at booking, not in labour. The other histories do not change the birth place this way.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother books at 16 weeks: Hb 9.4 g/dL, age 17, first pregnancy, and two hours from the nearest facility. What is the best plan?",
        options: [
          "Reassure her that young mothers usually do well",
          "Start iron per protocol, plan closer follow-up, and begin planning birth at a higher-level facility",
          "Refer immediately for blood transfusion today",
          "Ask her to return only if she feels unwell",
        ],
        correctIndex: 1,
        explanation:
          "Her risks stack — adolescence, anaemia and distance. Treatment and a strengthened plan start now: iron, more frequent visits, a haemoglobin recheck, and a birth plan with transport solved. Transfusion is not first-line for Hb 9.4, and waiting for symptoms wastes the whole advantage of screening.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the booking visit ask about birth spacing — the time since the last birth?",
        options: [
          "Spacing under about two years raises risks such as anaemia, preterm birth and low birth weight",
          "It is only collected for clinic statistics",
          "Close spacing improves the next baby's growth",
          "Spacing matters only for mothers who had a caesarean",
        ],
        correctIndex: 0,
        explanation:
          "The mother needs roughly two years to rebuild iron and recovery after a live birth — WHO advises this interval because shorter spacing raises prematurity, low birth weight and maternal depletion. It is a clinical question, not a statistical one.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Risk Assessment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Which baseline booking result changes plans for BOTH the mother and her newborn?",
        options: [
          "Maternal weight of 70 kg",
          "A positive syphilis screen",
          "Blood group O rhesus positive",
          "Clear urine on dipstick",
        ],
        correctIndex: 1,
        explanation:
          "A positive syphilis screen means treatment for the mother now, treatment for the partner, and a documented plan to assess the newborn at birth — untreated, it causes stillbirth and congenital syphilis. The other results change nothing for the baby.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Risk Assessment",
        front: "Name the four baskets of booking-visit risk.",
        back: "Babies (obstetric history), Body (current medical conditions), Background (social situation and distance from care), Basics (numbers and screening tests).",
      },
      {
        topic: "Risk Assessment",
        front: "Why do risk factors stack?",
        back: "Two moderate risks behave like one strong indication — the whole picture, not single findings, sets the level of care and the birth place.",
      },
      {
        topic: "Risk Assessment",
        front: "Which previous pregnancy finding most changes the birth plan?",
        back: "A previous caesarean or ruptured uterus — this mother births where theatre, blood and one-to-one monitoring exist.",
      },
      {
        topic: "Risk Assessment",
        front: "What is the cheapest risk-screening trio at booking?",
        back: "Blood pressure, haemoglobin and the tape measure (fundal height against dates) — three tools that fit in a CHPS cupboard.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Spotting Trouble Early",
    lessonTitle: "Hypertensive Disorders of Pregnancy",
    description:
      "From gestational hypertension to eclampsia — the spectrum every nurse must know cold, and the first-response drills that keep a mother safe while help is called.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the spectrum of hypertensive disorders from gestational hypertension to eclampsia.",
      "Explain accurate blood pressure measurement and the symptom screen that reveals severe disease.",
      "Apply first-response nursing actions — positioning, IV access, seizure safety, protocol medicines and call-ahead referral — for the pre-eclamptic mother.",
    ],
    tags: ["pre-eclampsia", "hypertension", "eclampsia", "danger signs", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Blood pressure is the reading you take at every single antenatal contact, because the disease it screens for — pre-eclampsia — can turn a healthy mother into a critically ill one between two visits. Hypertensive disorders touch about one pregnancy in ten.\n\nIn Ghana most births are led by senior maternity clinicians and doctors, but it is very often the nurse who takes the blood pressure, asks the three symptom questions, and raises the alarm first. This lesson walks the full spectrum and the numbers and symptoms that move a mother from monitor to refer now — including what you do in the first minutes of a convulsion.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Gestational hypertension**: BP 140/90 or higher first arising after 20 weeks, without proteinuria or organ signs. **Pre-eclampsia**: that same rise plus protein in the urine or organ involvement — falling platelets, rising liver enzymes, a persistent headache, visual disturbance or epigastric pain. **Eclampsia**: convulsions — an obstetric emergency. **Chronic hypertension** predates pregnancy or persists beyond it, and can have pre-eclampsia superimposed.\n\nMeasure well before you call anything: correct cuff, mother seated and rested, and repeat an abnormal reading before acting. Risk factors include first pregnancy, previous pre-eclampsia, twins, diabetes, obesity, age over 35, chronic hypertension or kidney disease. Ask the three symptom questions at every visit — headache, blurred or flashing vision, upper belly pain — because severe disease can declare itself while the numbers still look modest. Severe elevation (160/110) or dangerous symptoms mean referral, an antihypertensive per protocol (methyldopa, labetalol or nifedipine — never ACE inhibitors) and magnesium sulfate to prevent seizures. The only cure is delivery of the placenta, timed against the baby's maturity by the responsible clinician — and keep checking after the birth, because pre-eclampsia can appear or worsen in the first postpartum days.\n\nIf she convulses before transfer: protect the airway, turn her onto her left side, do not restrain her or force anything into her mouth, note the time, and give magnesium sulfate per protocol with the senior clinician informed — then urgent referral.",
      },
      {
        type: "table",
        title: "The spectrum ladder",
        body: "| Stage | Definition | First response |\n| --- | --- | --- |\n| Gestational hypertension | BP 140/90+ after 20 weeks, no protein, no symptoms | Close monitoring, repeat BP, symptom screen every visit |\n| Pre-eclampsia | BP rise plus proteinuria or organ signs | Inform senior, urine dip, IV access, refer per protocol |\n| Severe pre-eclampsia | BP 160/110+, or danger symptoms whatever the number | Magnesium sulfate per protocol, antihypertensive, urgent call-ahead referral |\n| Eclampsia | Convulsions | Airway, left lateral, timing, magnesium per protocol, emergency transfer |",
      },
      {
        type: "clinical_pearl",
        body: "Treat the woman, not the number. A mother with BP 138/88, headache and visual flashing is sicker than one with 150/95 who feels well. Symptoms upgrade your assessment; numbers alone do not finish the story.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Efua, 19, is 34 weeks into her first pregnancy. At today's ANC her BP is 148/96, repeated at 146/94. Her urine dips protein 2+, she reports a frontal headache since yesterday, and her fingers are so swollen her ring had to be cut off. She was planning to walk home after the visit.\n\nWhat is your assessment, and what are your next four actions as the nurse?\n\nAnswer: This is pre-eclampsia with severe features — new hypertension after 20 weeks, proteinuria and a danger symptom, in a first pregnancy at a facility without definitive care. Next actions: keep her seated and calm in a quiet corner; repeat the BP and urine dip and inform the senior nurse and clinician immediately; insert an IV line and keep her nil by mouth while plans are made; prepare magnesium sulfate and an antihypertensive per protocol for administration as directed, and arrange urgent call-ahead referral with a written note and a relative. She must not walk home with a next-week appointment — headache plus proteinuria plus rising BP is exactly how eclampsia introduces itself.",
      },
      {
        type: "memory_trick",
        body: "The spectrum ladder: G-H-P-E — Good Health Progresses Easily: Gestational hypertension → Pre-eclampsia → Eclampsia. And the three places a pre-eclamptic mother hurts: HEAD, VISION, EPIGASTRIUM — any one of them makes the BP urgent, whatever the number says.",
      },
      {
        type: "summary",
        body: "- Spectrum: gestational hypertension (140/90+ after 20 weeks alone), pre-eclampsia (BP plus proteinuria or organ signs), eclampsia (seizures); chronic hypertension can be complicated by superimposed pre-eclampsia.\n- Measure properly and repeat: correct cuff, seated, rested — and ask every visit about headache, visual disturbance and epigastric pain.\n- Severe range (160/110) or danger symptoms: inform senior, IV access, protocol medicines (magnesium sulfate, antihypertensive — never ACE inhibitors), urgent call-ahead referral.\n- In a convulsion: airway, left lateral, do not restrain or force objects into the mouth, time it, magnesium per protocol, emergency transfer.\n- Pre-eclampsia can arise or escalate after birth — check blood pressure at postnatal contacts too.",
      },
    ],
    questions: [
      {
        topic: "Hypertensive Disorders",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 32 weeks has BP 142/92 on repeated measurement, no proteinuria and no symptoms. What is the label?",
        options: [
          "Gestational hypertension",
          "Eclampsia",
          "Chronic hypertension",
          "Severe pre-eclampsia",
        ],
        correctIndex: 0,
        explanation:
          "New hypertension after 20 weeks without proteinuria or organ signs is gestational hypertension — still high risk, so monitor closely for progression to pre-eclampsia with urine dips and symptom screens at every visit.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Hypertensive Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of symptoms most strongly suggests severe pre-eclampsia, whatever the exact BP reading?",
        options: [
          "Heartburn after meals and constipation",
          "Morning nausea that eases by noon",
          "Persistent headache, flashing lights and epigastric pain",
          "Evening ankle swelling that is gone by morning",
        ],
        correctIndex: 2,
        explanation:
          "Headache, visual disturbance and epigastric pain signal brain and liver involvement — severe disease needing immediate escalation. Evening ankle oedema alone is a normal finding of late pregnancy, and heartburn and morning nausea are common discomforts.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Hypertensive Disorders",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "In the waiting area, a mother with known pre-eclampsia begins to convulse. Which nursing sequence is correct?",
        options: [
          "Restrain her firmly, put a spoon between her teeth and call for a doctor",
          "Note the time, protect her airway, turn her left lateral, give magnesium sulfate per protocol and arrange emergency transfer",
          "Give her water to drink and let the convulsion pass before doing anything",
          "Walk her to the ward quickly so she can lie on a proper bed",
        ],
        correctIndex: 1,
        explanation:
          "Eclampsia first response is airway protection and positioning — left lateral — with the time noted, never restraint and never objects forced into the mouth (they break teeth and block the airway). Magnesium sulfate per protocol prevents further seizures, and she needs emergency transfer. Moving her during a convulsion is unsafe.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Hypertensive Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which antihypertensive is contraindicated in pregnancy?",
        options: [
          "Methyldopa",
          "Labetalol",
          "Nifedipine",
          "Enalapril, an ACE inhibitor",
        ],
        correctIndex: 3,
        explanation:
          "ACE inhibitors harm the developing fetal kidneys and are stopped in pregnancy. Methyldopa, labetalol and nifedipine are the standard pregnancy options per protocol.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Hypertensive Disorders",
        front: "Define pre-eclampsia.",
        back: "New BP 140/90 or higher after 20 weeks plus proteinuria or organ involvement — low platelets, raised liver enzymes, persistent headache, visual disturbance or epigastric pain.",
      },
      {
        topic: "Hypertensive Disorders",
        front: "The three danger symptoms to ask at every antenatal visit?",
        back: "Headache, visual disturbance (blurring or flashing), epigastric pain — any one upgrades the assessment toward severe disease, whatever the BP number.",
      },
      {
        topic: "Hypertensive Disorders",
        front: "What is the only cure for pre-eclampsia?",
        back: "Delivery of the placenta — antihypertensives and magnesium sulfate buy safe time while the clinician weighs the timing of birth against the baby's maturity and the mother's danger.",
      },
      {
        topic: "Hypertensive Disorders",
        front: "First-response nursing sequence for a convulsing mother?",
        back: "Note the time, protect the airway, left lateral position, no restraint and nothing forced into the mouth, magnesium sulfate per protocol, then emergency call-ahead transfer.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
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
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Spotting Trouble Early",
    lessonTitle: "Bleeding in Pregnancy",
    description:
      "Bleeding is the red alarm of every trimester — from the rupturing ectopic to the low-lying placenta. Learn the signatures and the drills that buy time.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the major causes of bleeding in early and late pregnancy with their bedside signatures.",
      "Explain why maternal vital signs beat the pad in judging blood loss, and why vaginal examination is withheld until praevia is excluded.",
      "Apply the first-response drills for early and late pregnancy bleeding, including IV access, pre-referral treatment and call-ahead transfer.",
    ],
    tags: ["bleeding", "ectopic", "praevia", "abruption", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Bleeding in pregnancy is the alarm that rings in two very different rooms. In the early weeks it rings for ectopic pregnancy and miscarriage; after 20 weeks it rings for the placenta — praevia and abruption. The causes differ, but your first moves overlap: assess the mother and her baby, secure the circulation, and move her safely.\n\nThis lesson organises the causes by trimester, gives you the bedside signature of each, and drills the responses — including the two sentences that have saved more lives than any scan, and the one examination you must never perform.",
      },
      {
        type: "text",
        title: "Early pregnancy: the bleeding that hides",
        body: "**Ectopic pregnancy** implants outside the womb, usually in the tube, and writes a countdown: around six to ten weeks the tube can burst and bleed into the abdomen. The classic triad is a **positive pregnancy test, one-sided lower abdominal pain and light dark vaginal bleeding** — often described as prune juice. The danger words are fainting, dizziness on standing, shoulder-tip pain and collapse: shoulder-tip pain means blood irritating the diaphragm. Internal bleeding hides, so her pad may show almost nothing while her abdomen fills — watch the pulse, pallor and blood pressure, not the pad.\n\n**Miscarriage** classifies on two findings — the cervical os and what has passed: threatened (bleeding, closed os, pregnancy alive), inevitable (os open), incomplete (part passed, bleeding continues), complete (all passed, settling) and missed (found on scan). About half of early losses carry abnormal chromosomes — random, not the mother's fault, so say that plainly. The emergency is **septic abortion**: fever, foul-smelling discharge and uterine tenderness, often after an unsafe termination — IV antibiotics per protocol and urgent referral, with judgement-free care. And remember hyperemesis with a uterus larger than dates: a **molar pregnancy** also presents with bleeding and needs referral.",
      },
      {
        type: "text",
        title: "Late pregnancy: the placenta speaks",
        body: "**Placenta praevia** sits low, covering or reaching the cervix, and announces itself with **painless, bright red, recurrent** bleeding in the second half of pregnancy — the mother looks well between episodes, the uterus stays soft, and the baby often lies transverse or stays high. **Placental abruption** is the opposite: the normally sited placenta separates before birth, bringing sudden severe constant pain, a hard tender woody uterus, dark revealed bleeding — or barely any visible bleeding when the loss is concealed — fetal distress, and shock out of proportion to the pad. **Vasa praevia**, fetal vessels running across the cervix, bleeds the baby rather than the mother: light bleeding with sudden fetal heart collapse.\n\nThe iron rule: nothing — no fingers, no speculum — enters the vagina of a woman bleeding after 20 weeks until ultrasound has located the placenta. A praevia disturbed by a finger can bleed catastrophically in minutes. With heavy bleeding and no scan available, treat her as praevia: IV line, fluids, crossmatch if possible, and transfer. Give anti-D to rhesus-negative mothers. In a labouring mother with a previous caesarean, bleeding with scar pain and fetal distress means rupture until excluded.",
      },
      {
        type: "table",
        title: "Three bleeders, three signatures",
        body: "| Cause | Pain | Uterus | Blood | First response |\n| --- | --- | --- | --- | --- |\n| Ectopic (ruptured) | One-sided, then diffuse | Not pregnant-large | Light, dark; shock beyond the pad | NBM, wide-bore IV fluids, call-ahead transfer — surgery and blood |\n| Placenta praevia | Painless | Soft, non-tender | Bright red, recurrent | No vaginal examination, IV line, monitor fetal heart, transfer for scan |\n| Placental abruption | Severe, constant | Hard, woody, tender | Dark or concealed; fetal distress | IV access, crossmatch, continuous fetal heart monitoring, urgent review |",
      },
      {
        type: "clinical_pearl",
        body: "Two sentences save lives: every woman of reproductive age with lower abdominal pain is pregnant until a test says otherwise — and every positive test with one-sided pain is ectopic until proven otherwise. Estimate blood loss by how the mother looks, not how the pad looks: the cleanest pad of all belongs to the fully concealed abruption.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Hawa, 26, gravida 2 at 35 weeks, is carried into your health centre having soaked two cloths since dawn. She is pale and frightened, pulse 112, BP 96/60; the uterus is soft and non-tender and the fetal heart is 150. Your centre has no ultrasound.\n\nWhat do you do in the next fifteen minutes — and what must you not do?\n\nAnswer: This is antepartum haemorrhage with early shock — tachycardia, low BP and pallor, with a soft painless bleed that could well be praevia. Treat first: keep her warm and flat, insert a wide-bore IV with fluids running, take blood for grouping and crossmatch if possible, monitor pulse, BP and fetal heart every 15 minutes, and arrange urgent call-ahead referral. Do not examine her vagina — without an ultrasound the bleeding must be assumed praevial, and a digital examination could turn bleeding into haemorrhage. Send a written note with her vitals and times, send a relative who can consent, and remember anti-D if she is rhesus negative.",
      },
      {
        type: "memory_trick",
        body: "Early bleeding: PPB — Positive test, one-sided Pain, light Bleeding — ectopic till proven otherwise. Late bleeding: PAIN divides it — Painless and bright is Praevia; Painful, hard and dark is the Abrupted placenta. And the forbidden letter in late bleeding is V — no Vaginal examination until the scan clears the placenta.",
      },
      {
        type: "summary",
        body: "- Early bleeding: ectopic (positive test, one-sided pain, light dark loss, shoulder-tip pain), miscarriage (classify by os and passed tissue) and molar pregnancy — plus septic abortion as the infection emergency.\n- Late bleeding: praevia (painless, bright, soft uterus), abruption (painful, hard, tender, dark or concealed, fetal distress) and rare vasa praevia (light bleed, fetal collapse).\n- Judge severity by pulse, pallor and blood pressure — the pad lies; concealed bleeding hides.\n- Never examine the vagina in bleeding after 20 weeks before ultrasound excludes praevia.\n- Response package: IV access, fluids, crossmatch, fetal heart monitoring, anti-D if rhesus negative, call-ahead referral with a written note.",
      },
    ],
    questions: [
      {
        topic: "Bleeding in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a mother with a ruptured ectopic have massive internal bleeding but only spotting on her pad?",
        options: [
          "The tube contracts and seals itself after rupture",
          "Most of the blood is reabsorbed into the circulation",
          "The bleeding is inside the peritoneal cavity, so the vagina shows only a fraction of it",
          "Ectopic bleeding is always light and harmless",
        ],
        correctIndex: 2,
        explanation:
          "A ruptured tube bleeds into the peritoneal cavity, where litres can collect out of sight; the small vaginal loss tells you nothing about the true volume — the rising pulse and falling pressure tell the truth.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Bleeding in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Painless, bright-red, recurrent bleeding at 32 weeks with a soft uterus and transverse lie points to:",
        options: [
          "Placental abruption",
          "Uterine rupture",
          "Placenta praevia",
          "Septic abortion",
        ],
        correctIndex: 2,
        explanation:
          "That is the textbook signature of praevia — a low placenta bleeding painlessly as the lower segment forms. Abruption is painful with a hard uterus, rupture belongs to labour with a scar, and septic abortion complicates miscarriage with fever.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Bleeding in Pregnancy",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A mother at 34 weeks arrives bleeding heavily at a health centre without ultrasound. The night nurse asks you to examine the vagina to see where the blood is coming from. Your best response?",
        options: [
          "Perform a gentle digital examination to assess the cervix",
          "Insert a speculum to visualise the bleeding site",
          "Refuse any vaginal examination, treat as possible praevia — IV line, fetal heart check and urgent call-ahead transfer",
          "Give ergometrine to close down the bleeding before transfer",
        ],
        correctIndex: 2,
        explanation:
          "Until ultrasound excludes praevia, nothing enters the vagina — a finger or speculum on a low placenta can convert bleeding into exsanguination. Ergometrine is dangerous before birth. IV access, fetal assessment and call-ahead referral are the safe first fifteen minutes.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Bleeding in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Light vaginal bleeding at term with sudden loss of the fetal heart but a well mother suggests:",
        options: [
          "Vasa praevia — the torn vessels belong to the baby",
          "Placenta praevia",
          "Threatened miscarriage",
          "Cervicitis",
        ],
        correctIndex: 0,
        explanation:
          "In vasa praevia the torn vessels are the baby's own — even a small bleed is a large share of fetal blood volume, so the fetal heart collapses before the mother shows any sign. Maternal shock with heavy bleeding points instead to praevia or abruption.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Bleeding in Pregnancy",
        front: "The classic triad of ectopic pregnancy?",
        back: "Positive pregnancy test, one-sided lower abdominal pain, light dark vaginal bleeding — with cervical excitation on gentle examination; shoulder-tip pain means blood under the diaphragm.",
      },
      {
        topic: "Bleeding in Pregnancy",
        front: "Praevia versus abruption in one line each?",
        back: "Praevia — painless, bright, recurrent, soft uterus, malpresentation. Abruption — sudden severe constant pain, hard woody tender uterus, dark or concealed blood, fetal distress.",
      },
      {
        topic: "Bleeding in Pregnancy",
        front: "Why is vaginal examination forbidden in late-pregnancy bleeding?",
        back: "A digital examination can tear a low-lying placenta and convert bleeding into exsanguination — the placenta must be located by ultrasound first.",
      },
      {
        topic: "Bleeding in Pregnancy",
        front: "How do you classify miscarriage at the bedside?",
        back: "Two questions: open or closed os, and passed or not? Closed with bleeding = threatened; open = inevitable; part passed = incomplete; all passed and settling = complete; silent and scan-diagnosed = missed.",
      },
      {
        topic: "Bleeding in Pregnancy",
        front: "What is the emergency face of miscarriage care?",
        back: "Septic abortion — fever, foul-smelling discharge, uterine tenderness, often after unsafe termination: IV antibiotics per protocol and urgent referral, with judgement-free care.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Nurses and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Emergencies of Pregnancy & Birth",
    lessonTitle: "Medical Disorders Complicating Pregnancy",
    description:
      "Anaemia, sugar, vomiting, infection and a straining heart — the conditions mothers arrive with, and how pregnancy turns up their volume.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe how anaemia, hyperemesis gravidarum, gestational diabetes, infection and cardiac disease complicate pregnancy.",
      "Explain the screening thresholds and red flags for each condition at the community and district level.",
      "Apply nursing plans — supportive care, counselling, protocol treatment and referral — for mothers with medical disorders.",
    ],
    tags: ["anaemia", "gestational diabetes", "hyperemesis", "infection", "cardiac disease"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy is a stress test the body runs on itself: blood volume rises, sugar drifts, hormones pour, and every organ works harder. A mother who was coping quietly before conception can arrive at your clinic with a condition now amplified — and a mother whose condition was never diagnosed can meet it for the first time pregnant.\n\nThe doctor leads the treatment of these disorders, but the nurse runs the early detection net: the haemoglobin result read, the fasting sugar followed, the mother who cannot keep water down spotted for what she is, the booking screen acted upon. This lesson gathers the five great companions of high-risk pregnancy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Anaemia** — the commonest medical problem of pregnancy. The WHO cut-off is Hb below 11 g/dL; below 7 g/dL it is severe and needs urgent referral. Pregnancy dilutes the blood — plasma rises more than red cells — so Hb drifts to its lowest around 28 to 32 weeks, but 11 still defines true deficiency. In Ghana malaria, hookworm and diet drain stores further: treat causes, not just the number. Counsel honestly: iron with a vitamin C-rich drink, never with tea, dark stools are normal, and stores refill slowly so the tablets continue for months. An anaemic mother tolerates haemorrhage poorly — blood every anaemic mother accordingly, and plan her birth near help.\n\n**Hyperemesis gravidarum** is vomiting that becomes dangerous: weight loss over 5% of pre-pregnancy weight, dehydration, ketones on the dipstick. Screen for the mimics that change the plan — one-sided pain (ectopic until excluded), a uterus larger than dates (molar), jaundice or fever. She needs IV rehydration and referral — with thiamine before any glucose-containing fluid, because glucose first can trigger Wernicke's encephalopathy.\n\n**Gestational diabetes** arrives with risk factors — obesity, age over 35, a previous baby over 4 kg, family history — though many Ghanaian mothers have none. WHO's 75 g glucose tolerance thresholds are fasting 5.1, one-hour 10.0 or two-hour 8.5 mmol/L or above. Manage with food and movement first; insulin or metformin per protocol when targets are missed. Remember the two faces of the GDM baby: BIG in the womb — macrosomia and shoulder dystocia — and LOW after birth — hypoglycaemia from insulin overshoot: feed within the first hour, then every 2-3 hours.\n\n**Infection**: the booking screens are syphilis, HIV and hepatitis B, with urine where indicated — treat syphilis with benzathine penicillin per protocol together with the partner; start lifelong ART the same day for HIV-positive mothers per Ghana's Option B+; immunise the hepatitis-B-exposed newborn within 24 hours. Malaria prevention is the ITN every night plus IPTp-SP monthly from the second trimester. **Cardiac disease** hides the deepest: a mother who cannot finish a sentence, who sleeps propped on two pillows, whose pulse never settles — refer to a centre that can manage it, and warn against fluid overload in labour.",
      },
      {
        type: "callout",
        title: "The condition that whispers",
        body: "Cardiac disease in pregnancy announces itself with breathlessness on minor effort, a cough that will not settle, and the need to sleep sitting up. In a country where walking far is normal, mothers describe it as 'just tired'. Ask the functional question — can she climb the two steps to your room and still speak a full sentence? — and refer early: a damaged heart meeting the blood volume of the third trimester is a scheduled emergency.",
      },
      {
        type: "clinical_pearl",
        body: "Anaemia in pregnancy is a postpartum haemorrhage risk factor in disguise. A mother with Hb 8 g/dL has roughly half the reserve of a healthy one — the same 500 mL bleed that tires one can kill the other. Blood every anaemic mother accordingly: plan birth where help is close.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Adjoa, gravida 3 at 31 weeks, attends your district ANC with an Hb of 6.8 g/dL. Her palms and conjunctivae are pale, she is breathless walking from the tro-tro but comfortable sitting, and she finished her iron tablets three weeks ago — taking them each morning with her tea. She has no fever and no net at home.\n\nWhat is your plan for her today?\n\nAnswer: This is severe anaemia in the third trimester — treat actively. Refer urgently for hospital assessment, where IV iron and transfusion decisions belong, while you treat the causes: test and treat malaria, check for hookworm, and re-educate on iron — the tablet must leave the tea cup and travel with vitamin C. Give her a net, a hospital birth plan and an Hb recheck within two weeks; breathlessness at rest with a fast pulse makes her an emergency.",
      },
      {
        type: "memory_trick",
        body: "The five companions that travel with pregnancy: Anaemia, Sugar, Sickness (hyperemesis), infection and a Straining heart. Screen for all five at booking — and remember the two iron numbers: 11 is the floor, 7 is the door.",
      },
      {
        type: "summary",
        body: "- Anaemia: Hb below 11 g/dL in pregnancy, severe below 7 — refer; physiological dip at 28-32 weeks; treat malaria, hookworm and diet; iron with vitamin C, never with tea; plan birth near help.\n- Hyperemesis: over 5% weight loss, ketones, dehydration — exclude ectopic and molar; IV fluids, thiamine before glucose, referral.\n- GDM: screen risk factors, WHO OGTT cut-offs 5.1/10.0/8.5 mmol/L; diet and activity first; the baby risks macrosomia then hypoglycaemia — feed within the first hour.\n- Infections: booking screens for syphilis, HIV and hepatitis B; partner treatment for syphilis; same-day ART under Option B+; ITN plus IPTp-SP for malaria.\n- Cardiac disease whispers: breathlessness, orthopnoea, a sentence she cannot finish — refer early and fear fluid overload.",
      },
    ],
    questions: [
      {
        topic: "Medical Disorders in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother at 34 weeks has Hb 6.5 g/dL with pallor and breathlessness on walking, comfortable at rest. What is the appropriate action?",
        options: [
          "Double the oral iron dose and review in four weeks",
          "Refer urgently for hospital assessment — IV iron or transfusion, cause-finding and a hospital birth plan",
          "Advise more dark green leaves and review next month",
          "Transfuse two units at your health centre before referral",
        ],
        correctIndex: 1,
        explanation:
          "Hb below 7 g/dL in late pregnancy is severe anaemia and needs hospital-level decisions. Doubling tablets, diet alone, or transfusing at a centre without blood safety capability all expose her to the one danger she cannot survive — bleeding while anaemic.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is thiamine given before IV glucose to a woman with prolonged severe vomiting?",
        options: [
          "It reduces nausea directly",
          "It prevents gastric bleeding",
          "It protects the brain from Wernicke's encephalopathy",
          "It corrects low potassium",
        ],
        correctIndex: 2,
        explanation:
          "Prolonged vomiting depletes thiamine, and glucose given without thiamine can precipitate Wernicke's encephalopathy — confusion, abnormal eye movements and unsteadiness.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two hours after a normal birth, the term baby of a diabetic mother is jittery. The most likely cause is:",
        options: [
          "Overheating under the warmer",
          "Early sepsis from prolonged rupture of membranes",
          "Neonatal hypoglycaemia — the baby's insulin overshoots once the sugar supply stops",
          "Normal newborn jitteriness needing no check",
        ],
        correctIndex: 2,
        explanation:
          "Chronic maternal hyperglycaemia made the fetus hyperinsulinaemic; at birth the glucose supply stops but the insulin persists. Check the glucose, feed early — within the first hour and then 2-3 hourly — and never dismiss jitteriness as normal in this baby.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        type: "MCQ",
        difficulty: "Hard",
        stem: "How does malaria in pregnancy harm the baby's growth?",
        options: [
          "It causes the placenta to detach in the first trimester",
          "Parasites sequester in the placenta, causing maternal anaemia, low birth weight and preterm birth",
          "It causes macrosomia like gestational diabetes",
          "It protects the baby by transferring maternal antibodies",
        ],
        correctIndex: 1,
        explanation:
          "Parasite-infected red cells clog the placental vessels, so nutrition and oxygen transfer fail — anaemia, low birth weight and prematurity follow. The ITN nightly plus IPTp-SP from the second trimester attack exactly this mechanism.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Medical Disorders in Pregnancy",
        front: "Hb cut-offs for anaemia in pregnancy, and the physiological low point?",
        back: "Anaemia below 11 g/dL; severe below 7 g/dL. Plasma rises more than red cells, so Hb falls to its lowest at 28-32 weeks — expected dip, deficiency still counts at 11.",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        front: "The line between morning sickness and hyperemesis?",
        back: "Severe persistent vomiting with over 5% weight loss, dehydration and ketonuria — screen for ectopic and molar pregnancy, rehydrate IV with thiamine before glucose, and refer.",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        front: "WHO 75 g OGTT thresholds in pregnancy?",
        back: "Fasting 5.1, one-hour 10.0, or two-hour 8.5 mmol/L or above — any one of the three makes the diagnosis of gestational diabetes.",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        front: "The malaria prevention package in pregnancy?",
        back: "Sleep under an insecticide-treated net every night; IPTp-SP monthly from the second trimester, at least three doses — it prevents maternal anaemia, low birth weight and preterm birth.",
      },
      {
        topic: "Medical Disorders in Pregnancy",
        front: "Which screening question uncovers cardiac disease at booking?",
        back: "The functional one: can she climb a short flight and still speak a full sentence — breathlessness on minor effort, orthopnoea and a cough that will not settle all point to a heart that needs referral.",
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
        organization: "World Health Organization",
        title: "Diagnostic Criteria and Classification of Hyperglycaemia First Detected in Pregnancy",
        year: "2013",
        url: "https://www.who.int/publications/i/item/WHO-NMH-MND-13.2",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Emergencies of Pregnancy & Birth",
    lessonTitle: "Obstructed Labour & Its Consequences",
    description:
      "The labour that will not progress is the diagnosis that punishes waiting — the partograph, the shut door and the transfer that protects a mother from rupture and fistula.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the causes of prolonged and obstructed labour using the 4 Ps framework and the partograph.",
      "Explain the signs of the shut door — caput, moulding, no descent, urinary retention and Bandl's ring — and the consequences of neglect.",
      "Apply the nursing response: no oxytocin, bladder care, first antibiotic dose and stabilise-and-transfer.",
    ],
    tags: ["obstructed labour", "partograph", "fistula", "referral", "uterine rupture"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Labour is meant to move. When it stalls, every standing-still hour costs the mother energy, the baby oxygen, and the soft tissues trapped between the baby's head and her bladder their blood supply — the anatomy that fails into fistula. In Ghana obstructed labour remains a major cause of maternal death and of vesico-vaginal fistula.\n\nSenior clinicians lead the management decisions in labour, but the nurse is often the one keeping the partograph — and the partograph is the early warning system of the whole labour ward. This lesson teaches why labour slows, what the plotted line is telling you, the signs that the door is truly shut, and the response that saves both patients.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Think in Ps. **Power**: contractions too weak or too infrequent — active labour should bring three to four moderate contractions in ten minutes. **Passenger**: a big baby, a persistent malposition like occipito-posterior, or a deflexed head. **Passage**: a pelvis that is small or unforgiving. **Psyche**: exhaustion, fear, an empty stomach and a full bladder — the frightened, dehydrated mother contracts badly.\n\nThe partograph converts time into a picture. Plot dilatation from active labour at about 4-5 cm: the **alert line** runs at 1 cm per hour; the **action line** sits four hours to its right. Cross the alert line and you reassess — the 4 Ps, hydration, position; cross the action line and the responsible clinician must decide — augment if the fault is Power, or move to caesarean if the head refuses to descend.\n\nThe signs the door is shut, whatever the contractions do: **no descent between examinations**, a fully dilated cervix with a head still high, growing caput — a boggy scalp swelling that can make the head feel lower than it is — and **moulding**, skull bones overlapping under pressure. Add a bladder she cannot empty because the head crushes the urethra, a mother becoming quiet and still, foul-smelling liquor, a deteriorating fetal heart — and the red flag of red flags: a rising, tender, palpable ridge across the abdomen, **Bandl's ring**, which says the lower segment is thinning and rupture is near.\n\nYour response must be firm. Obstruction is resolved by caesarean, not by patience, and never by oxytocin — augmenting a block drives the uterus toward rupture. At the referring level: insert an IV line, pass a catheter gently and leave it draining, give nothing by mouth, give the first antibiotic dose per protocol, explain to the family that the baby cannot pass this way, call ahead and transfer urgently. The baby may already be lost; your decisions now protect the mother from rupture, sepsis and a fistula that would change her life forever.",
      },
      {
        type: "clinical_pearl",
        body: "The cervix should open roughly a centimetre an hour once active labour is running. Plot every dilatation at the time you felt it — a line on paper cannot be argued with at 3 am, but a memory can. And moulding and caput are not trophies of hard labour; they are the skull's surrender to force.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 4 pm Gifty, gravida 2, has been fully dilated and pushing for three hours at your health centre. Your partograph shows the head has not descended for the past two hours — still 3/5 palpable above the brim, with a large caput and overlapping skull bones on examination. She has not passed urine for six hours, the liquor draining is thin and offensive, and she has become quiet and still. Her mother-in-law urges, 'She is strong, let her push more.' The district hospital is 45 minutes away.\n\nWhat is your assessment, and what are your next four actions?\n\nAnswer: This is obstructed labour — no descent despite full dilatation and strong pushing, caput and moulding from a skull forced against resistance, a bladder compressed dry, offensive liquor signalling infection, and a mother sliding into exhaustion. The next actions: no oxytocin and no instrumental attempt at this level; insert an IV line and pass a catheter to drain the bladder, leaving it in place; give the first antibiotic dose per protocol; then call the hospital ahead and transfer urgently with a written note and a relative who can consent — explaining to the family that strength cannot open a mechanical block, and more pushing invites rupture, a dead baby and a fistula rather than a birth.",
      },
      {
        type: "memory_trick",
        body: "The 4 Ps of the stalled labour — Power, Passenger, Passage, Psyche — ask in order: is she too tired and empty to contract? Is the baby too big or badly turned? Is the way too small? Then the baby that is not coming makes its own five knocks on a shut door: the head swells (caput), the skull overlaps (moulding), the bladder is crushed dry, the mother goes quiet, and the uterus draws a line across the abdomen (Bandl's ring). Five knocks = theatre — never oxytocin.",
      },
      {
        type: "summary",
        body: "- Prolonged labour has four interacting causes: Power, Passenger, Passage and Psyche — resuscitate the Psyche before reaching for drugs.\n- Partograph: plot from active labour (~4-5 cm); alert line 1 cm/hour, action line four hours to its right — alert means reassess, action means the clinician decides.\n- Signs of the shut door: no descent between examinations, caput and moulding, urinary retention, offensive liquor, exhaustion — late: Bandl's ring and a deteriorating fetal heart.\n- Obstruction is treated by caesarean — never oxytocin, never instrumental birth at a low-level facility, never one more hour of pushing.\n- Transfer package: IV line, catheter draining and in situ, first antibiotic dose, nil by mouth, call-ahead — protect the mother from rupture, sepsis and fistula.",
      },
    ],
    questions: [
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On the WHO partograph, where does the action line sit?",
        options: [
          "On the same point as the alert line",
          "Four hours to the left of the alert line",
          "Twelve hours to the right of the alert line",
          "Four hours to the right of the alert line",
        ],
        correctIndex: 3,
        explanation:
          "The action line lies parallel to and four hours to the right of the alert line — crossing it means progress has failed for four hours and a decision (augment, refer, or deliver) must now be made.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which picture most strongly indicates obstructed labour?",
        options: [
          "Cervix 8 cm after four hours with improving contractions",
          "Full dilatation with rapid descent after amniotomy",
          "A second stage of 30 minutes in a multipara",
          "No descent between two examinations despite full dilatation, strong contractions, caput and moulding",
        ],
        correctIndex: 3,
        explanation:
          "A fixed station with full dilatation and good contractions, plus the skull showing pressure changes, means the baby is mechanically stuck — obstruction until proven otherwise. The other pictures all show progress.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Obstructed Labour",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A nurse at a health centre suspects obstructed labour in a mother who has pushed for three hours without descent. A relative asks why she cannot simply be given medicine to make the contractions stronger. Why is oxytocin the wrong answer?",
        options: [
          "Oxytocin stops lactation permanently",
          "Oxytocin is too expensive for health centres",
          "Oxytocin would drive forceful contractions against a mechanical block, inviting uterine rupture",
          "Oxytocin only works after the baby is born",
        ],
        correctIndex: 2,
        explanation:
          "The uterus is already contracting against a baby that cannot descend; oxytocin multiplies that force on a thinning lower segment — the direct road to rupture and maternal death. The correct package is IV line, catheter, first antibiotic dose and urgent transfer for caesarean.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A rising, tender ridge across the abdomen (Bandl's ring) tells you that:",
        options: [
          "The uterus is thinning at its lower segment and rupture threatens — transfer now",
          "The bladder is full and only needs catheterisation",
          "The baby has rotated into an ideal position",
          "Labour is progressing normally and faster",
        ],
        correctIndex: 0,
        explanation:
          "Bandl's ring is the pathological retraction ring: the upper segment thickens while the lower thins — the last warning before uterine rupture. It demands immediate transfer for theatre, not reassurance. (Catheterisation is still done — but as part of the emergency package, not the diagnosis.)",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Obstructed Labour",
        front: "Define obstructed labour.",
        back: "A mechanical impediment to birth despite a contracting uterus — the baby cannot fit through the pelvis because of cephalopelvic disproportion, malposition or fetal enlargement.",
      },
      {
        topic: "Obstructed Labour",
        front: "What is Bandl's ring?",
        back: "A rising, palpable ridge between the thickened upper and thinned lower uterine segments during prolonged obstructed labour — the pathological retraction ring warning of imminent rupture.",
      },
      {
        topic: "Obstructed Labour",
        front: "The 4 Ps of prolonged labour?",
        back: "Power (contractions), Passenger (fetal size and position), Passage (pelvis), Psyche (exhaustion, fear, dehydration) — treat the Psyche before reaching for drugs.",
      },
      {
        topic: "Obstructed Labour",
        front: "Why must oxytocin never be given in obstructed labour?",
        back: "It drives forceful contractions against a mechanical block, multiplying force on a thinning lower segment — the direct route to uterine rupture and maternal death.",
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
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Nurses and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Emergencies of Pregnancy & Birth",
    lessonTitle: "Sepsis & Hemorrhage After Birth",
    description:
      "The two great killers of the hours after birth — heavy bleeding and the smelly fever. Both are beatable with fast hands, a clear framework and no delay.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe primary postpartum haemorrhage and the tone-trauma-tissue-thrombin framework.",
      "Explain how puerperal sepsis presents and why it is the emergency of the first week after birth.",
      "Apply the first-response drills for both — in parallel, not in sequence — including protocol medicines and referral.",
    ],
    tags: ["pph", "puerperal sepsis", "uterotonics", "emergency", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The hours after birth are the most dangerous of the whole maternity journey. Postpartum haemorrhage can take a mother from fit to critical in under two hours; puerperal sepsis can take her by the end of the first week. Both kill quietly in communities where the danger signs are not known, and both are beaten by exactly the same discipline: recognise early, act in parallel, escalate fast.\n\nYou will meet both on postnatal wards and in postnatal clinics, and in the community after home births. Learn these two drills like your own name.",
      },
      {
        type: "text",
        title: "Postpartum haemorrhage: the four Ts",
        body: "PPH is blood loss of 500 mL or more after a vaginal birth (1,000 mL after caesarean), or any loss that makes the mother shocked — whatever the pad says. **Tone** — a floppy, atonic uterus — causes about 70 of every 100 PPHs. Rub the uterus up through the abdominal wall, empty the bladder with a catheter, and give a uterotonic: oxytocin 10 units IV or IM is first choice; ergometrine 0.2 mg if her blood pressure is normal; misoprostol 600 micrograms sublingually where no oxytocin or cold chain exists — the realistic backbone of community care in Ghana. **Trauma** means tears of the perineum, vagina or cervix: if the uterus is well contracted and she still bleeds, inspect with good light. **Tissue** means a placenta or clots retained inside — check the placenta is complete. **Thrombin** — a clotting problem — is suspected when bleeding continues despite the other three.\n\nThroughout, act in parallel, not in sequence: call for help, two large-bore IV lines, fluids running, vital signs every 15 minutes, keep her warm. Visual estimation always under-reads — often by nearly half — so trust her pulse, pallor and restlessness. If bleeding continues: bimanual compression of the uterus while the senior team and theatre plan take over; transfusion decisions rest on her condition, not the swabs.",
      },
      {
        type: "text",
        title: "Puerperal sepsis: the smelly fever",
        body: "Infection after birth is the emergency of the first days and weeks. Suspect **puerperal sepsis** in any mother with fever of 38°C or more after the first 24 hours, foul-smelling lochia, uterine tenderness, or pain and fever out of proportion to examination findings — particularly after prolonged labour, prolonged rupture of membranes, many vaginal examinations, retained products, or a birth outside a facility. The loss can progress within hours to severe sepsis and septicaemia, so the response is immediate: first dose of antibiotics per protocol (given before transfer, not after), IV fluids, a full set of vital signs, and urgent referral.\n\nPrevention is your daily work: clean birth practices, hand hygiene for everyone who touches mother or baby, strictly limited vaginal examinations, clean cord care, and teaching the danger signs to every family before discharge — fever, offensive discharge, spreading belly pain, and a mother who 'just is not herself'.",
      },
      {
        type: "clinical_pearl",
        body: "The pulse is the monitor that never lies. In bleeding, a rising pulse with pallor and restlessness means compensating shock before the pad looks frightening; in infection, a fast pulse with fever means the antibiotics start today, not tomorrow. And a lochia that smells offensive is never normal — sepsis until excluded.",
      },
      {
        type: "quiz_prompt",
        title: "The six-hour fever",
        body: "Six hours after a difficult 18-hour labour, a mother has a temperature of 38.6°C, offensive-smelling lochia and a tender uterus. What is the working diagnosis, and what are your first three actions?\n\nAnswer: Puerperal sepsis until excluded — fever with foul lochia and uterine tenderness after prolonged labour. Actions: give the first dose of antibiotics per protocol now, start IV fluids and monitor vital signs, and arrange urgent referral with a written note — never wait for tomorrow's clinic to begin treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Twenty minutes after a normal vaginal birth, a 26-year-old mother of three soaks a fresh pad and the blood runs onto the sheet. Her uterus feels soft and difficult to outline. Her pulse has climbed from 76 to 108 and she looks pale around the lips. Estimated loss so far is 700 mL.\n\nWhat is the most likely cause, and what are your first five actions?\n\nAnswer: The soft uterus with heavy bleeding after birth is uterine atony — the tone cause, the commonest PPH. Call for help; rub the uterus up firmly and keep a hand there; give oxytocin 10 units IV or IM (misoprostol 600 micrograms sublingually if oxytocin is unavailable); catheterise to empty the bladder; start two large-bore lines with fluids and record vitals every 15 minutes. Then check the placenta and perineum as the uterus firms, keep her warm, and escalate to bimanual compression and the theatre plan if bleeding does not settle — the first hour is where mothers are won or lost.",
      },
      {
        type: "memory_trick",
        body: "The four Ts: Tone is a Tired womb, Trauma is a Tear, Tissue is something left inside, Thrombin is Thin blood. Then 'PHONE': call for help, Hands on the uterus, Oxytocin, catheterise the Bladder, Examine placenta, perineum and vitals. And sepsis in three words: Fever, Foul, Fundal.",
      },
      {
        type: "summary",
        body: "- PPH is 500 mL or more after vaginal birth (1,000 mL after caesarean) — or any loss causing shock; the four Ts are Tone (about 70%), Trauma, Tissue and Thrombin.\n- First response in parallel: call help, rub up the contraction, empty the bladder, give a uterotonic — misoprostol where no oxytocin or cold chain exists.\n- Visual estimates under-read — trust a rising pulse, pallor and restlessness; escalate to bimanual compression and theatre if bleeding persists.\n- Puerperal sepsis: fever 38°C or more after 24 hours, foul lochia, uterine tenderness — first antibiotic dose per protocol before referral, IV fluids, urgent transfer.\n- Prevention is nursing territory: clean birth, hand hygiene, limited examinations, clean cord care, danger-sign teaching for every family.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Emergencies",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the definition of primary postpartum haemorrhage after a vaginal birth?",
        options: [
          "Any bleeding within six weeks of birth",
          "Blood loss of 500 mL or more within 24 hours of birth",
          "Blood loss of 100 mL or more within one hour of birth",
          "Any bleeding that occurs after a caesarean section",
        ],
        correctIndex: 1,
        explanation:
          "Primary PPH is blood loss of 500 mL or more in the first 24 hours after a vaginal birth (1,000 mL or more after caesarean), or any loss that makes the mother clinically shocked — the definition includes her condition, not just the measured volume.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Postpartum Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a CHPS compound with no functioning refrigeration, a mother bleeds heavily from an atonic uterus. Which uterotonic is the practical first choice?",
        options: [
          "Intravenous oxytocin infusion",
          "Ergometrine 0.2 mg in a woman with severe hypertension",
          "Misoprostol 600 micrograms sublingually",
          "Wait for transfer before any drug",
        ],
        correctIndex: 2,
        explanation:
          "Misoprostol is heat-stable, needs no cold chain or injection skills, and 600 micrograms sublingually is an effective first-line uterotonic at community level. Oxytocin needs a cold chain, ergometrine is avoided in severe hypertension, and never delay a uterotonic while waiting for transport.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Postpartum Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother's uterus is well contracted after birth, but bright red bleeding continues. Which of the four Ts moves to the top of your list?",
        options: [
          "Tone — give more uterotonics",
          "Thrombin — send clotting studies immediately",
          "None — some bleeding is normal for hours",
          "Trauma or Tissue — inspect the birth canal and check the placenta",
        ],
        correctIndex: 3,
        explanation:
          "Bleeding despite a firm, well-contracted uterus points away from atony: examine for tears of the perineum, vagina or cervix, and ensure the placenta and membranes are complete. Clotting problems come later in the framework — after trauma and tissue are excluded.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Postpartum Emergencies",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "On day three after a birth at home, a mother is brought to your clinic: temperature 38.8°C, offensive lochia, tender uterus, pulse 116. What is the correct response?",
        options: [
          "Give paracetamol and review at the welfare clinic next week",
          "Advise increased hygiene at home and traditional care",
          "First dose of antibiotics per protocol, IV fluids, vital signs and urgent referral",
          "Reassure that fever after birth is normal for the first week",
        ],
        correctIndex: 2,
        explanation:
          "Fever with foul lochia and a tender uterus is puerperal sepsis — an emergency of the first week that can progress to severe sepsis within hours. Treatment starts before transfer: the first antibiotic dose per protocol, fluids and urgent referral. Analgesia and reassurance alone gamble with her life.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Emergencies",
        front: "What are the four Ts of PPH, and which is commonest?",
        back: "Tone (atony — roughly 70% of cases), Trauma (tears), Tissue (retained placenta or clots), Thrombin (clotting failure). Run through all four in every single case.",
      },
      {
        topic: "Postpartum Emergencies",
        front: "First-line uterotonics at birth, with the community fallback?",
        back: "Oxytocin 10 units IV/IM first line; ergometrine 0.2 mg IM if blood pressure is normal; misoprostol 600 micrograms sublingually where oxytocin and a cold chain are unavailable.",
      },
      {
        topic: "Postpartum Emergencies",
        front: "The three-word screen for puerperal sepsis?",
        back: "Fever, Foul (offensive lochia), Fundal (uterine) tenderness — any combination after birth means antibiotics per protocol and urgent referral, not observation.",
      },
      {
        topic: "Postpartum Emergencies",
        front: "Why trust the pulse more than the pad in PPH?",
        back: "Visual estimation of blood loss under-reads — often by nearly half. A rising pulse with pallor and restlessness signals compensating shock earlier than any swab count.",
      },
      {
        topic: "Postpartum Emergencies",
        front: "Why does postnatal nursing observations matter after every birth?",
        back: "The first hours hold the PPH risk and the first week the sepsis risk — pulse, fundal tone, lochia and temperature checks catch both before they become fatal.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "The Struggling Newborn",
    lessonTitle: "The Compromised Newborn: Recognition",
    description:
      "The baby who needed help arriving, and the baby who was fine then faded — newborns fall ill quietly, and the nurse is the one who hears the whisper.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the signs of newborn compromise at birth and in the first days of life.",
      "Explain the WHO/UNICEF neonatal danger signs and why newborn illness presents non-specifically.",
      "Apply the response package — warm, assess, pre-referral treatment per protocol, urgent transport — for the baby in trouble.",
    ],
    tags: ["danger signs", "newborn", "apgar", "recognition", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A newborn cannot say where it hurts. At birth it shows you through colour, tone, breathing and cry; in the days after, through feeding, temperature and movement. Learn these two languages and you hold the recognition net for the smallest patients in the building.\n\nThis lesson covers both windows. First the arrival — the baby who does not cry or breathe, what you assess and how you describe it. Then the fade — the WHO/UNICEF danger signs that turn a vague maternal worry into a clear decision: this baby needs hospital today.",
      },
      {
        type: "text",
        title: "At birth: reading the first minute",
        body: "In the first minute, assess in order: is the baby **term**, is he **breathing or crying**, is his **tone** good, is his **colour** pink? A term baby who cries and moves needs routine care: drying, skin-to-skin and watching. A baby who is limp, silent or **gasping** — gasping is not breathing — needs the resuscitation sequence you will meet later in this module.\n\nThe **Apgar score** (Appearance, Pulse, Grimace, Activity, Respiratory effort) at 1, 5 and 10 minutes is the shared language of that first assessment. It communicates how the baby is responding to transition and to help — it does not predict the future, and it never delays hands-on care. The heart rate carries the most weight: count it by listening to the chest or feeling pulsation in the cord stump, and remember that a baby who is blue, limp and slow is a baby whose circulation needs support now. Every observation, with its time, goes into the record — the resuscitation story is retold from your notes.",
      },
      {
        type: "text",
        title: "After birth: the seven danger signs",
        body: "WHO and UNICEF distilled newborn illness into a short list. **Not feeding well** (or stopped feeding since birth); **convulsions**; **fast breathing** (60 breaths per minute or more); **severe chest in-drawing**; **fever 38°C or above, or cold below 35.5°C**; **movement only when stimulated, or no movement at all**; and **jaundice on day one, or yellow palms and soles**. Behind one sign can hide sepsis, meningitis, pneumonia, hypothermia or haemolysis — the sign is the alarm, not the diagnosis.\n\nYour response is a package, and it travels together: keep the baby warm (skin-to-skin on the mother, a hat, dry clothes — a cold baby must be rewarmed even while you refer), give the pre-referral first dose of antibiotics and any treatment the national protocol directs, arrange transport, tell the mother honestly what you are doing and why, and phone ahead if you can. Any one sign, in any baby, means assessment and urgent referral — not home advice and a review next week.",
      },
      {
        type: "clinical_pearl",
        body: "A mother who says the baby just isn't feeding like yesterday has handed you the earliest warning in neonatal medicine. Examine that baby fully — temperature, breathing, activity, colour — before you reassure anyone, including yourself. And count a fast breathing baby for a full minute while the baby is calm: crying counts are wrong counts.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a CHPS compound postnatal visit, a day-three baby takes two weak sucks and stops. The mother says he has been sleeping too much. His temperature is 35.6°C, and when you undress him he stirs briefly and goes still again. There is no fast breathing and the chest is clear.\n\nWhich danger signs has this baby already shown, and what are your next actions?\n\nAnswer: Poor feeding, near-hypothermia and reduced movement fit the danger list — and hypothermia itself can be the face of sepsis in a newborn. Rewarm him now with skin-to-skin contact and a hat while you complete your assessment, then give the pre-referral treatment your protocol directs, explain to the mother what you are doing, and arrange urgent transport to the district hospital with a call ahead. This is not a baby to review next week.",
      },
      {
        type: "quiz_prompt",
        title: "The fast-breathing baby",
        body: "A term baby on day two has a respiratory rate of 70 per minute counted while calm, with grunting on expiry and a temperature of 36.2°C. Which danger signs are present, and what do they mean together?\n\nAnswer: Fast breathing (70 ≥ the 60/min threshold) plus grunting — a sign of respiratory distress — plus a low temperature. Together they point to pneumonia or early sepsis announcing itself through the lungs: keep the baby warm, give pre-referral treatment per protocol, and refer urgently.",
      },
      {
        type: "memory_trick",
        body: "Chant the list like a counting rhyme: Won't FEED, FITS, breathes FAST, chest SUCKED IN, HOT or COLD, STILL as stone, YELLOW too soon. Any single line of the rhyme sends the baby to hospital — you never need two signs to act.",
      },
      {
        type: "summary",
        body: "- At birth assess term, breathing, tone and colour; gasping is not breathing — it is an emergency; the Apgar at 1, 5 and 10 minutes communicates, it does not predict, and it never delays hands-on care.\n- Count the heart rate by chest auscultation or cord pulsation; a blue, limp, slow baby needs support now.\n- The seven danger signs: poor feeding, convulsions, fast breathing ≥60/min, severe chest in-drawing, fever ≥38°C or cold <35.5°C, movement only when stimulated or none, jaundice on day one or yellow palms and soles.\n- Newborn illness is vague by nature — one quiet sign can hide sepsis, meningitis or pneumonia.\n- One sign = urgent referral: warm the baby, pre-referral treatment per protocol, counsel the mother, transport, document.",
      },
    ],
    questions: [
      {
        topic: "Compromised Newborn",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in a one-week-old baby counts as a WHO danger sign requiring urgent referral?",
        options: [
          "Passing five soft yellow stools a day while feeding well",
          "Feeding poorly and moving only when stimulated",
          "Startling at sudden noises during sleep",
          "Mild jaundice of the face on day five with good feeding",
        ],
        correctIndex: 1,
        explanation:
          "Poor feeding and movement only when stimulated are both danger signs — either alone means urgent assessment and referral. Frequent soft stools, the startle (Moro) reflex and mild facial jaundice peaking around day three to five in a well-feeding baby are normal findings.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Compromised Newborn",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn at your CHPS compound has a temperature of 35.2°C but is breathing quietly and feeding reasonably. What is the correct interpretation and action?",
        options: [
          "Cold weather explains it, so just add a blanket and review tomorrow",
          "Hypothermia is a danger sign — rewarm the baby now and manage as a seriously ill newborn, including referral",
          "Hypothermia only matters if the baby also has fast breathing",
          "Give warm water baths every two hours until the temperature rises",
        ],
        correctIndex: 1,
        explanation:
          "A temperature below 35.5°C is a danger sign in its own right and may be the presenting sign of sepsis. Rewarming with skin-to-skin contact and a hat starts immediately, and the baby is managed as a danger-sign newborn with referral — never warm baths, which worsen heat loss, and never simple observation at home.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Compromised Newborn",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are danger signs so non-specific in newborns compared with older children?",
        options: [
          "Because newborns cannot develop severe infections in the first month",
          "Because the newborn brain and immune defences are immature, so illness shows as feeding, temperature, tone and breathing changes",
          "Because danger signs are designed to detect surgical problems only",
          "Because newborns always show a rash before becoming seriously ill",
        ],
        correctIndex: 1,
        explanation:
          "An immature nervous and immune system means serious disease in a neonate surfaces as poor feeding, temperature instability, floppiness or abnormal breathing — vague signs that can each hide sepsis or meningitis. That is exactly why the WHO list uses whole-baby clues rather than specific complaints.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Compromised Newborn",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "At one minute, a term baby is blue, limp, not breathing; you feel pulsation in the cord stump at about 90 beats per minute. What does this baby need first?",
        options: [
          "Immediate chest compressions for the slow heart rate",
          "Effective positive-pressure ventilation with a bag-mask in room air",
          "Warming only, and observation for five minutes",
          "Oxygen by nasal prongs while waiting for the paediatrician",
        ],
        correctIndex: 1,
        explanation:
          "A baby who is not breathing needs air in the lungs before anything else — a heart rate around 90 usually recovers once ventilation is effective, so bag-mask ventilation comes before compressions (which are reserved for a heart rate below 60 despite effective ventilation). Warming and oxygen alone do not ventilate an apnoeic baby.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Compromised Newborn",
        front: "List the WHO/UNICEF neonatal danger signs.",
        back: "Poor feeding; convulsions; fast breathing (≥60/min); severe chest in-drawing; fever ≥38°C or temperature below 35.5°C; movement only when stimulated or none; jaundice on day one or yellow palms and soles. Any one sign = urgent referral.",
      },
      {
        topic: "Compromised Newborn",
        front: "Why does jaundice on day one qualify as a danger sign?",
        back: "Jaundice within 24 hours suggests haemolysis (Rhesus or ABO incompatibility, G6PD deficiency), which can climb fast to bilirubin levels that damage the brain — it needs urgent assessment, not watching.",
      },
      {
        topic: "Compromised Newborn",
        front: "What does the Apgar score communicate, and what does it not do?",
        back: "It communicates how the baby is handling transition and resuscitation at 1, 5 and 10 minutes — Appearance, Pulse, Grimace, Activity, Respiratory effort. It does not predict the future and must never delay hands-on care.",
      },
      {
        topic: "Compromised Newborn",
        front: "How do you count a newborn heart rate without a monitor?",
        back: "Listen to the chest with a stethoscope or feel for pulsation in the umbilical cord stump — near the base, close to the baby's body.",
      },
      {
        topic: "Compromised Newborn",
        front: "A mother says the baby is not feeding like yesterday. What is the correct next move?",
        back: "Full examination before any reassurance: temperature, breathing for a full minute while calm, activity, colour — poor feeding is the earliest warning in neonatal medicine and may hide sepsis.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Danger-sign and young-infant assessment content — verify the current national adaptation used in Ghana.",
      },
      {
        organization: "Ghana Health Service",
        title: "National newborn care guidelines and referral protocols",
        note: "Verify the current national version for pre-referral treatment and transport advice.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "The Struggling Newborn",
    lessonTitle: "Prematurity: The First Days",
    description:
      "Before 37 weeks every system is still under construction — the first days of warmth, milk and clean hands are where small babies are won.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Define prematurity and its categories, and describe the system-by-system immaturity that shapes care.",
      "Explain the three predictable failures of small reserves — heat, sugar and germs — and their counter-plans.",
      "Apply first-days nursing care for the preterm and low-birth-weight baby, and recognise when to escalate.",
    ],
    tags: ["prematurity", "preterm", "kangaroo mother care", "lbw", "newborn care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A baby born before 37 completed weeks is **preterm** — late preterm (34-36 weeks), moderate (32-33), very (28-31) and extremely preterm (below 28). A baby weighing under 2500 g at birth is **low birth weight**, whatever the cause — born early, or grown poorly at term. In Ghana infection, malaria, hypertension, anaemia and teenage pregnancy push many babies into these groups.\n\nPrematurity is not one problem but a whole-body state. The good news is that most of what saves these babies in the first days is not machinery — it is warmth, the mother's milk, gentle hands and clean technique, all of them nursing work. This lesson walks the immaturity system by system, then the first-days plan.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **lungs** lack mature surfactant, so breathing is stiff and fast, and respiratory distress syndrome can develop — grunting, in-drawing, a baby working to breathe. The **skin** is thin with little fat, so heat escapes fast: hypothermia is one of the most preventable killers of small babies. The **brain** has fragile vessels — handle gently, no bumps, no rapid fluid swings, and watch for apnoea. The **gut** cannot yet coordinate suck and swallow reliably (this matures around 32-34 weeks), so feeds may come as expressed breast milk by cup or tube, started early and built carefully to protect against necrotising enterocolitis. The **liver** clears bilirubin poorly, so jaundice comes earlier, climbs higher and lasts longer. **Immunity** is thin — hand hygiene is a treatment, not a courtesy.\n\nThe first-days plan: **warmth** — dry at birth, skin-to-skin or continuous **kangaroo mother care** for stable babies with a hat, and the mother as the incubator; **milk** — the mother's own expressed milk, early and often, by cup or nasogastric tube, including through the night, because small glycogen stores cannot survive long fasts; **gentleness** — minimal handling, clustered care, light and noise kept low; **cleanliness** — hand hygiene before every touch, clean cord care; and **watching** — temperature, feeding tolerance, jaundice, apnoea and daily weight. Escalate when breathing worsens, jaundice appears early or climbs, feeds are not tolerated, the temperature will not hold, or apnoea appears — that baby needs a special care baby unit. And remember what could have been done before the birth: antenatal corticosteroids for the mother and transfer before delivery, not after.",
      },
      {
        type: "clinical_pearl",
        body: "The preterm baby loses heat through thin skin faster than a big water tank loses water through a crack. Warmth, milk and clean hands save more preterm babies in district facilities than any machine you are waiting for. And a term baby weighing 2.4 kg is not just a small mother's baby — a growth-restricted baby tolerates cold and hunger like a preterm, so treat smallness itself as a risk.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 33-week baby is born at your district hospital, limp and grunting. He is dried and warmed, and his breathing settles to fast but unlaboured. He is 1.8 kg, temperature holding at 36.5°C, and the mother asks anxiously whether she can breastfeed.\n\nWhat are your priorities in the first hours, and how do you answer her?\n\nAnswer: Keep him warm — continuous skin-to-skin with a hat once stable — and start expressed colostrum within the first hour by cup or tube, because his suck is not yet reliable, with the mother expressing every few hours to build her supply. Handle him gently, keep hands clean, watch for jaundice and apnoea, and review with the team for oxygen or specialist needs. Her milk is exactly the medicine he needs, so she is not a visitor — she is part of the treatment.",
      },
      {
        type: "memory_trick",
        body: "The whole-baby alphabet: Lungs (surfactant), Skin (heat leaks), Brain (handle gently), Gut (feeds by cup or tube), Liver (jaundice), Immunity (clean hands), Eyes (retinopathy). Then chant the care: Warm, Milk, Gentle, Clean. And for any small baby remember the three battles: Heat, Sugar, Germs.",
      },
      {
        type: "summary",
        body: "- Preterm = birth before 37 completed weeks; LBW = under 2500 g at birth whatever the gestation — and a term growth-restricted baby shares the risks of smallness.\n- Every system is immature: surfactant-poor lungs, leaky skin, fragile brain, uncoordinated suck, slow bilirubin clearance, naive immunity.\n- First-days care: warmth and kangaroo mother care with a hat, expressed breast milk by cup or tube early and through the night, gentle clustered handling, strict hand hygiene, daily weighing.\n- Watch for the escalations: worsening breathing, early or climbing jaundice, feed intolerance, unstable temperature, apnoea — refer to a special care baby unit.\n- Before birth, the best gifts were antenatal corticosteroids and in-utero transfer — escalate threatened preterm labour early.",
      },
    ],
    questions: [
      {
        topic: "Prematurity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A baby is born at 34 completed weeks. Which term correctly describes him?",
        options: [
          "Term but small for gestational age",
          "Late preterm",
          "Very preterm",
          "Extremely preterm",
        ],
        correctIndex: 1,
        explanation:
          "Late preterm covers 34 to 36 weeks — preterm regardless of weight. Very preterm is 28-31 weeks, and below 28 weeks is extremely preterm.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Prematurity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does respiratory distress syndrome occur in preterm babies?",
        options: [
          "Their airways are too narrow for air to pass",
          "They lack mature surfactant, so the air sacs collapse with each breath",
          "Their lungs fill with amniotic fluid that cannot drain",
          "They breathe too slowly to oxygenate their blood",
        ],
        correctIndex: 1,
        explanation:
          "Surfactant lowers surface tension and keeps the air sacs open; without it the lungs become stiff and each breath re-inflates collapsed alveoli — seen clinically as grunting, fast breathing and in-drawing. Antenatal corticosteroids accelerate surfactant maturation.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Prematurity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A stable 32-week baby weighing 1.6 kg is on your postnatal ward. Which feeding plan is most appropriate?",
        options: [
          "Delay all feeds for 48 hours to let the gut rest",
          "Formula by bottle, because it is thicker than breast milk",
          "Expressed breast milk by cup or nasogastric tube, started early and given frequently",
          "Water and glucose water for the first week",
        ],
        correctIndex: 2,
        explanation:
          "Around 32 weeks the suck-swallow coordination is still maturing, so the mother's expressed milk is given early by cup or tube in frequent small feeds — her milk protects the immature gut. Delaying feeds, bottle formula and glucose-water routines all increase risk.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Prematurity",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A grandmother advises waking a 2.1 kg newborn every three hours at night for feeds. Why is this correct rather than cruel?",
        options: [
          "It is not correct — night feeds should be avoided so the baby sleeps and grows",
          "Small babies have limited glycogen stores, and long gaps risk hypoglycaemia",
          "Night feeds are only needed after the first month",
          "It only matters if the baby is formula-fed",
        ],
        correctIndex: 1,
        explanation:
          "The small baby's liver stores little glycogen, so a long fast can drop blood glucose low enough to cause jitteriness, lethargy, apnoea or convulsions. Frequent feeds day and night keep the small tank topped up — the principle holds whatever the milk.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Prematurity",
        front: "Define preterm birth and give the four categories.",
        back: "Birth before 37 completed weeks: late preterm 34-36, moderately preterm 32-33, very preterm 28-31, extremely preterm below 28 weeks.",
      },
      {
        topic: "Prematurity",
        front: "Which single treatment given to the mother before a preterm birth matures the baby's lungs?",
        back: "Antenatal corticosteroids given in threatened preterm labour accelerate surfactant production and reduce respiratory distress syndrome and death.",
      },
      {
        topic: "Prematurity",
        front: "Name the four cornerstones of first-days preterm care in a district facility.",
        back: "Warmth (kangaroo mother care and a hat for stable babies), the mother's expressed milk by cup or tube, gentle minimal handling, and strict infection prevention — then refer for oxygen or specialist needs.",
      },
      {
        topic: "Prematurity",
        front: "Why must feeds continue through the night for a small baby?",
        back: "Small glycogen stores cannot survive long fasts — waking for feeds every three hours prevents hypoglycaemia (jitteriness, lethargy, apnoea, convulsions).",
      },
      {
        topic: "Prematurity",
        front: "Why is kangaroo mother care described as the district solution for small babies?",
        back: "Continuous skin-to-skin in a wrapper on the mother's chest keeps the baby warm, stabilises breathing and heart rate, supports exclusive breastfeeding and reduces mortality in stable low-birth-weight babies — no incubator required.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Recommendations for the care of the preterm or low-birth-weight infant",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240058262",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "UNICEF",
        title: "Kangaroo Mother Care implementation guidance for low-resource settings",
        note: "Educational source — verify the current UNICEF and WHO guidance used in your programme.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "The Struggling Newborn",
    lessonTitle: "The Newborn With a Birth Defect",
    description:
      "About one baby in thirty is born with a structural difference — the day-one examination is the safety net, and the first hours decide feeding, protection and referral.",
    difficulty: "Hard",
    durationMin: 11,
    objectives: [
      "Describe the common congenital anomalies found on the day-one examination and the finding that needs same-day referral for each.",
      "Explain the immediate nursing care for the baby with a cleft, an open back, a heart defect or a bowel wall defect.",
      "Apply periconception prevention messages and family-support principles for parents of a baby with a birth defect.",
    ],
    tags: ["birth defects", "congenital anomalies", "newborn examination", "referral", "folic acid"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Worldwide roughly one baby in every 33 is born with a structural difference, and in Ghana the common ones — neural tube defects, cleft lip and palate, congenital heart disease, and the bowel wall defects — still arrive regularly at district facilities. Many are survivable with early recognition, feeding support, protection of the exposed parts and timely referral.\n\nThe nurse rarely repairs any of them. What the nurse does is often the difference between a treatable defect and a tragedy: the head-to-toe examination that finds it on day one, the milk that gets in around it, the covering that keeps infection out, and the words that keep the family standing. This lesson takes the day-one examination defect by defect.",
      },
      {
        type: "text",
        title: "Head, face and eyes",
        body: "**Neural tube defects** — spina bifida — appear as a sac or an open lesion on the baby's back, usually lumbar or sacral, sometimes with a hair tuft or dimple over the area. Cover the intact sac with a sterile saline-moistened dressing and keep the baby off the lesion (prone or side-lying); refer urgently the same day. Ask about kicking of the legs and watch for a poorly draining bladder — and remember the prevention: **folic acid daily before conception and through the first trimester**, which is why it belongs in every family planning and preconception conversation.\n\n**Cleft lip and palate** make feeding the day-one problem. The baby can feed: hold him upright, aim the nipple or a special teat toward the intact side, let him work slowly, and consider expressed milk squeezed gently into the cleft. Watch for milk coming back through the nose, burp often, and refer for surgical repair in the coming months — but the calories must start today. **Eyes**: a white or absent **red reflex** is never normal on day one — congenital cataract or retinoblastoma — and needs same-day ophthalmological referral.",
      },
      {
        type: "text",
        title: "Heart, tummy, bottom and hips",
        body: "**Congenital heart disease** whispers on day one and shouts on day three. Check the femoral pulses in every newborn — weak or absent pulses raise coarctation of the aorta. Central blueness that does not improve with warming, fast breathing and poor feeding are the duct-dependent heart presenting; these babies can collapse suddenly after the duct closes, so refer early, before the collapse. **Bowel wall defects** — gastroschisis (bowel outside through a small wall gap, not covered) or an omphalocele (a sac covering the contents) — need immediate covering with a sterile plastic wrap or a clean plastic bag, nothing by mouth, an IV line, and urgent transfer; never try to push the bowel back.\n\n**Bottom**: examine the anus of every newborn and check the clock — no meconium by 24-48 hours means **imperforate anus** until examined; also note a single stream versus a sprayed or dribbling urine stream. **Hips**: with warm hands on a calm baby, perform Ortolani and Barlow — a clunk, a click that repeats, or limited abduction needs orthopaedic referral for developmental dysplasia. Finally, a baby with **Down syndrome** features — hypotonia, upslanting eyes, a single palm crease, often with feeding difficulty and heart defects — needs a full cardiac assessment, feeding support and honest, warm family counselling.",
      },
      {
        type: "clinical_pearl",
        body: "The day-one feeding assessment is a defect detector: a baby who cannot feed has a reason, and the reason is usually findable — look in the mouth for a cleft, at the back for a spine lesion, at the heart for a duct-dependent defect, at the hips for a dislocation. And when you speak to parents, their baby is not a diagnosis — say her name first, the findings second.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A baby girl is born at your district hospital with a wide cleft of the lip extending into the palate. Her mother's first words are quiet: will she ever eat normally?\n\nWhat do you do today, and what do you say?\n\nAnswer: She can eat today — hold her upright, offer the breast aimed toward the intact side, and use expressed milk squeezed gently into the cleft if needed; expect slow feeds, frequent burps and some milk returning through the nose, and weigh her daily to prove the intake is enough. Refer to the surgical team for repair in the coming months and to any local cleft feeding programme. To the mother: her milk is still the best food, the repair is planned and staged, and the feeding skills she learns this week are the treatment she herself gives. Ask her what she would like to call her — and use the name in the notes.",
      },
      {
        type: "memory_trick",
        body: "The six S's of the day-one search: Spine, Smile, Sight, Systole, Stools, Steps — plus a seventh S that travels with all of them: Support for the family. Spine covered, cleft fed, red reflex present, femoral pulses felt, meconium seen by 48 hours, hips stable — six findings, one safe baby.",
      },
      {
        type: "summary",
        body: "- Neural tube defect: cover the lesion with a sterile saline dressing, keep the baby off it, refer same day — and prevent the next one with periconception folic acid.\n- Cleft lip and palate: feeding is the day-one treatment — upright, toward the intact side, expressed milk into the cleft; surgical repair comes later, calories come first.\n- White or absent red reflex = same-day ophthalmological referral (cataract or retinoblastoma).\n- Heart: feel femoral pulses in every newborn; blue, fast-breathing, poor-feeding babies need referral before the duct closes.\n- Bowel wall defects: cover with sterile plastic, nil by mouth, IV, urgent transfer — never push the bowel back.\n- No meconium by 24-48 hours means imperforate anus until examined; hip clunks or limited abduction need orthopaedic referral.",
      },
    ],
    questions: [
      {
        topic: "Birth Defects",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During the first-day examination, the left eye of a newborn shows a dull white reflection where the right shows a red reflex. What does this finding require?",
        options: [
          "No action — it often settles in the first month",
          "Same-day ophthalmological referral",
          "Eye drops for one week and review",
          "Washing the eye with clean water twice daily",
        ],
        correctIndex: 1,
        explanation:
          "A white or absent red reflex raises congenital cataract or retinoblastoma — both time-critical for vision and life. Early referral preserves sight; waiting, drops and washing all waste the days that matter.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Birth Defects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn has a lumbar swelling covered by thin membrane. What is the immediate nursing care before transfer?",
        options: [
          "Press the swelling gently back into place and bandage it",
          "Cover with a sterile saline-moistened dressing, keep the baby off the lesion, and refer urgently",
          "Apply traditional powder and watch feeding for two days",
          "Nothing — these swellings always resolve without treatment",
        ],
        correctIndex: 1,
        explanation:
          "An uncovered neural tube defect is a route straight to infection: cover it with a sterile saline dressing, position the baby prone or side-lying off the lesion, and refer the same day. Pressing it is harmful, and powders and waiting invite meningitis.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Birth Defects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which prevention belongs in every preconception and family planning conversation, because it reduces neural tube defects?",
        options: [
          "Iron supplementation in the third trimester",
          "Daily folic acid before conception and through the first trimester",
          "Vitamin K for the newborn",
          "Avoiding all medicines during pregnancy",
        ],
        correctIndex: 1,
        explanation:
          "The neural tube closes in the first weeks — often before a woman knows she is pregnant — so folic acid must already be on board at conception. That is why the message belongs with family planning clients, not only with antenatal bookings.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Birth Defects",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A term newborn has passed no meconium by 48 hours, has a distended abdomen and has begun vomiting. What is the working assumption, and what must be checked?",
        options: [
          "Simple constipation — give water and glucose and wait two more days",
          "Breast milk is too thin — start formula immediately",
          "Imperforate anus or another bowel obstruction until examined — inspect the anus and refer urgently",
          "Normal pattern of a breastfed baby — reassure the mother",
        ],
        correctIndex: 2,
        explanation:
          "Almost every newborn passes meconium within 24-48 hours; failure with distension and vomiting means obstruction — imperforate anus until proven otherwise. Examine the perineum, keep the baby nil by mouth, insert an IV line and refer urgently. Water, formula and reassurance all delay the diagnosis.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Birth Defects",
        front: "The six S's of the day-one defect search?",
        back: "Spine, Smile, Sight (red reflex), Systole (heart and femoral pulses), Stools (anus and meconium by 48 hours), Steps (hips) — plus Support for the family.",
      },
      {
        topic: "Birth Defects",
        front: "Day-one care of the cleft lip and palate baby in one line?",
        back: "Feed upright toward the intact side, use expressed milk into the cleft if needed, weigh daily to prove intake — calories today, repair later.",
      },
      {
        topic: "Birth Defects",
        front: "Why feel femoral pulses in every newborn?",
        back: "Weak or absent femoral pulses raise coarctation of the aorta — a duct-dependent defect that can collapse a baby after day two, so catching it on day one buys time.",
      },
      {
        topic: "Birth Defects",
        front: "Immediate care of gastroschisis before transfer?",
        back: "Cover the exposed bowel with a sterile plastic wrap or bag, nil by mouth, IV fluids, urgent transfer — never push the bowel back.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "CDC",
        title: "Birth Defects — Data and Facts for Families and Providers",
        note: "Verify the latest CDC update used in your teaching.",
      },
      {
        organization: "Ghana Health Service",
        title: "National newborn care guidelines",
        note: "Verify current national referral pathways for congenital anomalies.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Refer, Stabilise, Transport",
    lessonTitle: "Neonatal Resuscitation Beyond the Basics",
    description:
      "The Golden Minute you already know — this is the baby who does not respond to it: the still chest, the slow heart, thick meconium and the very early baby.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Describe the systematic correction of ineffective ventilation using the airway ladder.",
      "Explain the criteria and technique for chest compressions, and the special considerations for meconium and the preterm baby.",
      "Apply post-resuscitation care and the communication, documentation and debriefing that follow every resuscitation.",
    ],
    tags: ["resuscitation", "ventilation", "compressions", "meconium", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "About one newborn in ten needs help to breathe, and for most of them the basic sequence is enough: dry, stimulate, ventilate with a bag-mask in room air. You know the Golden Minute.\n\nThis lesson is about the rest — the baby whose chest will not rise, whose heart will not recover, the baby born through thick meconium, and the very small baby whose margin for cold and rough handling is zero. It also covers what happens after the crisis: the watching, the warming, the mother's sentence, and the record. In every one of these scenes the nurse is not an assistant — she is often the person performing the whole sequence while the team gathers.",
      },
      {
        type: "text",
        title: "The airway ladder: when the chest will not rise",
        body: "Chest rise is the dashboard light of newborn resuscitation. If the chest is not moving, air is not reaching the lungs — and the most common cause of a baby who will not respond to ventilation is **ineffective ventilation**, not a baby who cannot be saved. Work the ladder in order, about thirty seconds per step, and announce it aloud so the team hears where you are: **M** — Mask adjustment (reseat it over mouth and nose with a good seal); **R** — Reposition the head neutral (slight extension, not flexed or overextended); **S** — clear the airway by suction if the mouth or nose is obstructed with thick material; **O** — slightly Open the mouth; **P** — increase the Pressure you squeeze with; **A** — move to an Alternative airway only if you are trained in one (for example a laryngeal mask or endotracheal tube).\n\nCheck the heart rate the whole time — by listening to the chest or feeling pulsation at the cord stump. If the rate stays **below 60 beats per minute despite at least 30-60 seconds of effective ventilation** (chest visibly rising), add **chest compressions**: the two-thumb technique over the lower third of the sternum, coordinated with ventilation at a ratio of **3:1** — three compressions to one breath, roughly 120 events per minute. Recheck the heart rate every minute or so; most babies who need compressions recover once ventilation is truly effective, and compressions without effective ventilation accomplish nothing.",
      },
      {
        type: "text",
        title: "Special scenes: meconium and the preterm",
        body: "**Thick meconium**: a baby born through pea-soup liquor who is vigorous — crying, breathing well — needs observation, not routine suction. A baby who is limp or not breathing needs the ventilation sequence now; clear the mouth of obstructing thick material only if the airway is blocked — blind deep suction of every meconium baby delays the air the lungs need.\n\n**The very preterm baby** doubles every rule about warmth: prepare a pre-warmed surface, a hat, and plastic wrap or a clean plastic bag to cover the body immediately after drying (leaving the face free); handle with gentle, slow movements; and start ventilation earlier rather than later — a 28-week baby does not get the luxury of waiting to see. Room air remains the starting gas for ventilation for babies at every gestation, moving to supplemental oxygen only when saturation targets are not met and oximetry guides you.\n\nCall for senior help early — at the latest when a baby needs compressions, when gasping persists beyond the first minutes, or when the heart rate has not recovered after five minutes of effective ventilation. A baby who needed more than brief ventilation is a baby to watch for hours: warmth, early feeding or expressed milk, monitoring for apnoea, and usually referral.",
      },
      {
        type: "clinical_pearl",
        body: "The most common cause of a baby who will not respond to resuscitation is ineffective ventilation — fix the mask, the head position and the pressure before you blame the baby. Say the ladder out loud while you work it; the team calms down when it can hear the next step.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At your district hospital a term baby is born through thick meconium-stained liquor, limp and silent. You dry and stimulate him for thirty seconds: no cry, no breathing effort. You start bag-mask ventilation — but the chest is not moving.\n\nWhat is your next sequence of actions, and how do you know when it is working?\n\nAnswer: Work the airway ladder aloud: readjust the mask for seal, reposition the head neutral, clear the mouth of thick meconium if it is obstructing, slightly open the mouth, then increase squeeze pressure — checking between steps. You know it is working when the chest rises with each squeeze, then when the heart rate climbs (check by cord pulsation), colour improves and tone returns. If the rate stayed below 60 despite visible chest rise, you would add two-thumb compressions at 3:1. Afterwards: keep him warm, monitor for apnoea, feed early, and document every step with its time — then talk the team through it, and the mother in one calm sentence.",
      },
      {
        type: "memory_trick",
        body: "MR SOPA climbs the still chest: Mask reseat, Reposition the head, Suction if obstructing, Open the mouth, Pressure increase, Alternative airway. And the numbers that matter: 30-60 seconds of effective ventilation before compressions; 3:1 compressions to breaths; 60 is the heart rate that changes everything.",
      },
      {
        type: "summary",
        body: "- A still chest means ineffective ventilation — work the MR SOPA ladder aloud, about thirty seconds per step, before concluding the baby is not responding.\n- Chest compressions: two thumbs on the lower third of the sternum, only when the heart rate stays below 60 despite effective ventilation, in a 3:1 ratio with breaths.\n- Check the heart rate by chest auscultation or cord-stump pulsation throughout; most babies needing compressions recover once ventilation is truly effective.\n- Meconium: a vigorous baby needs observation; a depressed baby needs ventilation now — clear the airway only if obstructed, no routine blind suction.\n- The preterm baby: doubled warmth (hat, plastic wrap, pre-warmed surface), gentle handling, room air to start, and earlier rather than later ventilation.\n- After the crisis: warmth, early feeds, apnoea watch, referral — one calm sentence to the mother, times in the notes, and a team debrief.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During bag-mask ventilation the newborn's chest is not rising. What should you do first?",
        options: [
          "Squeeze the bag faster and harder",
          "Reposition the head neutrally and reseal the mask over mouth and nose",
          "Move straight to chest compressions",
          "Stop ventilation and wait for transport",
        ],
        correctIndex: 1,
        explanation:
          "The commonest causes of a still chest are a poorly positioned head and a leaking mask. Correct the position to slight extension and reseal the mask before changing anything else — squeezing harder into a blocked airway only inflates the stomach.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Neonatal Resuscitation",
        type: "MCQ",
        difficulty: "Hard",
        stem: "When do chest compressions start in newborn resuscitation, and in what ratio with ventilation?",
        options: [
          "Immediately for every baby who does not cry, ratio 15:2",
          "When the heart rate stays below 60 despite at least 30-60 seconds of effective ventilation, ratio 3:1",
          "When the baby is blue but the heart rate is 120, ratio 5:1",
          "Only after transfer to a neonatal unit, ratio 30:2",
        ],
        correctIndex: 1,
        explanation:
          "Compressions are reserved for a heart rate below 60 that has not responded to genuinely effective ventilation — chest visibly rising — and are coordinated with breaths at 3:1 (three compressions to one breath, about 120 events per minute). The other timings and ratios belong to older children and adults.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Neonatal Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A baby is born through thick meconium-stained liquor, limp and not breathing after drying and stimulation. What is the correct approach?",
        options: [
          "Suction deeply on the way in, then start ventilation only after the airway is fully clear",
          "Start positive-pressure ventilation now, clearing the mouth only if it is obstructed with thick material",
          "Wait two minutes — meconium babies often start breathing late",
          "Give chest compressions immediately because of the meconium",
        ],
        correctIndex: 1,
        explanation:
          "A depressed baby born through thick meconium needs air in the lungs without delay; clear only obstructing material from the mouth. Routine deep suction delays ventilation, waiting burns reserve, and compressions without ventilation accomplish nothing.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Neonatal Resuscitation",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A term baby needed bag-mask ventilation for three minutes after birth and now looks pink, cries and feeds hungrily. The nurse suggests routine care on the postnatal ward with mother. What is the safer plan?",
        options: [
          "Routine rooming-in — a recovered baby needs no special observation",
          "Discharge home the same day since feeding is established",
          "Close monitoring for apnoea and deterioration, warmth, early feeds and clear documentation of the resuscitation with referral where indicated",
          "Formula feeding every four hours to prevent hypoglycaemia",
        ],
        correctIndex: 2,
        explanation:
          "A baby who needed positive-pressure ventilation has shown he can decompensate — he needs close observation for apnoea and colour changes, warmth, early feeding and a documented handover (and referral where local policy directs). Same-day discharge and routine four-hourly formula both gamble with a baby who has already warned you once.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Resuscitation",
        front: "What is MR SOPA?",
        back: "The airway ladder for a chest that will not rise: Mask reseat, Reposition head neutral, Suction if obstructing, Open the mouth, Pressure increase, Alternative airway — worked aloud, about thirty seconds per step.",
      },
      {
        topic: "Neonatal Resuscitation",
        front: "When and how do chest compressions start?",
        back: "Heart rate below 60 despite at least 30-60 seconds of effective ventilation — two thumbs on the lower third of the sternum, 3:1 with breaths, about 120 events per minute.",
      },
      {
        topic: "Neonatal Resuscitation",
        front: "How do you count the newborn heart rate without a monitor?",
        back: "Listen to the chest, or feel for pulsation in the umbilical cord stump near the baby's body — check it before, during and after each change you make.",
      },
      {
        topic: "Neonatal Resuscitation",
        front: "What are the doubled rules for the very preterm baby at birth?",
        back: "Doubled warmth — pre-warmed surface, hat, plastic wrap after drying — plus gentle handling, earlier start of ventilation, and room air as the starting gas.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guidelines on basic newborn resuscitation",
        year: "2012",
        note: "Verify the current WHO edition used in your programme.",
      },
      {
        organization: "American Academy of Pediatrics",
        title: "Helping Babies Breathe (2nd edition)",
        note: "Golden Minute and airway-ladder training programme — educational source, verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National newborn care guidelines",
        note: "Verify current national protocols for resuscitation and post-resuscitation monitoring.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Refer, Stabilise, Transport",
    lessonTitle: "Stabilising for Transport",
    description:
      "The road is part of the treatment — a referral that leaves before stabilising arrives as a smaller emergency than it left as.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Explain the principle of stabilise-before-transfer and the pre-transport package for the mother with haemorrhage, eclampsia, sepsis or obstruction.",
      "Apply the newborn transport package — warmth, airway, feeding, monitoring and the escort — for a small or sick baby.",
      "Describe safe transfer practice: escort, documentation that travels, monitoring en route and the call ahead.",
    ],
    tags: ["transport", "stabilisation", "referral", "preterm", "emergency care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A referral is treatment in motion. The road between your facility and the district hospital is not neutral ground: every bump is a fluid challenge, every hour is an infection growing or a uterus tiring, and a baby who left warm can arrive cold. The discipline is simple to say and demanding to keep — stabilise first, then move.\n\nThis lesson packages the pre-transport moves for the two patients of high-risk maternal care: the mother with haemorrhage, eclampsia, sepsis or obstructed labour, and the newborn who is small, early or struggling.",
      },
      {
        type: "text",
        title: "The mother: lines, drugs, catheter, position, note",
        body: "For the mother in shock or bleeding: two wide-bore IV lines with fluids running, blood grouped and crossmatched where possible, the uterus rubbed up and a uterotonic given per protocol before the wheels turn. For severe pre-eclampsia or eclampsia: magnesium sulfate loading per protocol with the time charted, left lateral position, airway watched, a catheter in place with urine output recorded, and nothing by mouth. For sepsis — abortion-related or puerperal: the first antibiotic dose per protocol, fluids, and vitals charted before departure. For obstructed labour: IV access, the catheter draining and left in, nil by mouth, first antibiotic dose, and no oxytocin — ever.\n\nTwo golden details: for cord prolapse, the lifting hand travels inside the vehicle with her, holding the presenting part off the cord until theatre takes over. And she never travels alone — an escort who can monitor vitals and hand over, plus a relative who knows her story and can consent. Every drug given, with dose and clock time, goes into the note that travels.",
      },
      {
        type: "text",
        title: "The newborn: the mother's chest is the ambulance",
        body: "For the small or sick newborn, warmth is the whole first half of the transfer. Skin-to-skin on the mother's chest in kangaroo position with a hat and wrapper is the warmest, most stable way a baby can travel on a Ghanaian road — the mother is the incubator, and the escort watches them both. For the very small baby, add a plastic wrap and keep the face free. Feed expressed breast milk before departure and at rest stops if the journey is long and the baby is stable — small glycogen stores do not survive long roads — and keep the airway clear with the head neutral. Monitor at stops: heart rate by cord stump or chest, colour, breathing, and a temperature check on arrival. If the baby is on oxygen or needs suction, the equipment travels too.\n\nWhenever possible, transfer the mother before the birth — a baby inside travels warm, fed and oxygenated; a newborn in transit battles cold and unstable breathing. And the call ahead is part of stabilisation: the receiving team prepares warmth, theatre, blood or a special care cot before the vehicle door opens.",
      },
      {
        type: "clinical_pearl",
        body: "Never send an empty patient down the road: lines running, drugs given and timed, note in the escort's hand. And the warmest incubator on any Ghanaian road is the mother's chest — a transferred baby who arrives cold, hypoglycaemic and unmonitored was referred too fast, not too early.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 32-week baby is born at your health centre at 7 pm. She is 1.7 kg, breathing comfortably, and sucks weakly. The nearest special care baby unit is 90 minutes away, and the ambulance will come in the next hour. The father asks whether they should simply wait for morning, since she looks 'not too bad'.\n\nWhat do you do in this hour?\n\nAnswer: Use the hour to stabilise, not to wait: place her skin-to-skin on her mother in kangaroo position with a hat, cover them both, and feed expressed colostrum by cup now — and again shortly before departure — to protect her small glucose stores. Call the special care baby unit ahead so a warm cot and feeding support are ready; write the note with birth time, weight, temperature, feeds given and findings; and arrange for a nurse or trained escort plus the mother to travel with her, checking colour and feeding at rest stops. Waiting for morning risks a baby who arrives cold, hypoglycaemic and sicker — the quiet-looking 32-weeker is exactly the baby the road punishes.",
      },
      {
        type: "memory_trick",
        body: "Two patients, four needs: Warm, Fed, Lined, Documented — plus one phone call before the wheels turn. For the mother remember: lines, drugs, catheter, position, note. For the baby: mother's chest, hat, milk, monitor.",
      },
      {
        type: "summary",
        body: "- Stabilise before transfer: IV lines running, protocol medicines given and timed, catheter where indicated, position protected, note written.\n- Mother packages: haemorrhage — lines, crossmatch, uterotonic; eclampsia — magnesium loading per protocol, left lateral, airway, catheter, urine charted; sepsis — first antibiotic dose; obstruction — catheter draining, nil by mouth, no oxytocin.\n- Cord prolapse: the lifting hand travels with her until theatre takes over.\n- Newborn package: skin-to-skin kangaroo warmth with a hat, feeds of expressed milk before and during travel, airway neutral, monitoring at stops, escort trained to check.\n- Transfer the mother before the birth whenever possible — in-utero transport beats newborn transport — and always call ahead.",
      },
    ],
    questions: [
      {
        topic: "Stabilising for Transport",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why give magnesium sulfate per protocol before transfer rather than on arrival?",
        options: [
          "Medicines are cheaper at the health centre",
          "The receiving doctor prefers to start all drugs personally",
          "Treatment started before transfer improves survival — the road and facility delays cost hours, and eclampsia worsens by the hour",
          "Family consent is required before the hospital can give drugs",
        ],
        correctIndex: 2,
        explanation:
          "Pre-referral treatment is one of the strongest survival levers in district obstetrics: the loading dose buys the hours the road would otherwise steal. Waiting until arrival spends them.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Stabilising for Transport",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is skin-to-skin kangaroo position recommended for a stable 1.7 kg baby during a 90-minute transfer?",
        options: [
          "It is the warmest and most stable transport position — the mother is the incubator, and it supports feeding at rest stops",
          "It makes the baby easier for the driver to observe",
          "It is required by ambulance policy",
          "It replaces the need for any monitoring on the way",
        ],
        correctIndex: 0,
        explanation:
          "Kangaroo position keeps the baby warm continuously — far better than a cot on a moving vehicle — stabilises heart rate and breathing, and keeps feeding possible. It does not replace monitoring: the escort still checks colour, breathing and feeding at stops.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Stabilising for Transport",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In obstructed labour, why does the urinary catheter stay in and draining during transfer?",
        options: [
          "So the receiving team can measure urine output continuously and relieve the pressure of a full bladder",
          "Because a full bladder helps the baby descend",
          "It is only for comfort and can be removed en route",
          "Catheterisation is contraindicated in obstructed labour",
        ],
        correctIndex: 0,
        explanation:
          "The impacted head compresses the urethra — a full bladder returns the pressure and worsens tissue damage; a draining catheter protects the bladder wall and records output, a key vital sign for the theatre team.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Stabilising for Transport",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "Before a long referral journey, a mother asks whether her stable 2.0 kg baby should be fed just before departure. What is the correct advice, and why?",
        options: [
          "No — a full stomach makes travel unsafe, so withhold milk until arrival",
          "Yes — feed expressed breast milk before departure and at rest stops: small glycogen stores do not survive long roads",
          "Only plain water is safe during travel",
          "Feeding should wait until the hospital team has examined the baby",
        ],
        correctIndex: 1,
        explanation:
          "Small babies hold tiny glycogen reserves; a long fast in a cold vehicle is the classic road to hypoglycaemia. For a stable baby, expressed milk before departure (and at stops if the journey is long) is part of stabilisation. Withholding all milk or substituting water is the unsafe choice.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Stabilising for Transport",
        front: "The pre-transport package for the mother in five words.",
        back: "Lines, drugs, catheter, position, note — with a phone call ahead and an escort; never transfer alone.",
      },
      {
        topic: "Stabilising for Transport",
        front: "Why is the mother's chest called the ambulance's incubator?",
        back: "Continuous skin-to-skin in kangaroo position with a hat is the warmest, most stable way a small baby travels — it holds temperature, heart rate and breathing while allowing feeding at rest stops.",
      },
      {
        topic: "Stabilising for Transport",
        front: "What travels with a cord prolapse referral?",
        back: "The lifting hand — fingers hold the presenting part off the cord for the whole journey, until the theatre team takes over.",
      },
      {
        topic: "Stabilising for Transport",
        front: "Why transfer the mother before birth rather than the baby after?",
        back: "In-utero transport keeps the baby warm, fed and oxygenated; a transferred newborn battles cold stress and unstable breathing on the road.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "World Health Organization",
        title: "Recommendations for the care of the preterm or low-birth-weight infant",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240058262",
      },
      {
        organization: "Ghana Health Service",
        title: "Referral protocols for maternal and newborn emergencies",
        note: "Verify the current national version with your district health directorate.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "high-risk-maternal-newborn",
    moduleTitle: "Refer, Stabilise, Transport",
    lessonTitle: "The Referral Conversation & Documentation",
    description:
      "A referral is a conversation, a phone call and a piece of paper — all three travel with the patient, and the weakest of the three is the one that fails.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the family conversation that overcomes the first delay — honest, kind and clear about why moving beats waiting.",
      "Explain the SBAR call-ahead and the structured written referral note with times, vitals, drugs and recommendations.",
      "Apply documentation discipline — objective, timed, complete — and close the referral loop by calling back for the outcome.",
    ],
    tags: ["referral", "sbar", "documentation", "communication", "three delays"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between your recognition of an emergency and the receiving doctor's hands stands a chain of human moments: a family deciding, a vehicle finding, a phone call connecting, a note being read. The three delays model names them — deciding to seek care, reaching care, and receiving adequate care — and your referral craft attacks all three.\n\nThe clinical stabilisation you practised in the last lesson fails quietly if the conversation is cold, the call is confused or the note is thin. This lesson is about those three carriers: the conversation, the call, and the paper.",
      },
      {
        type: "text",
        title: "The conversation and the call",
        body: "**The family conversation.** Explain what you have found, what it threatens, and what moving now changes — in plain words, with the treatment you have already given named. A mother-in-law urging 'let her push more, she is strong' is not an obstacle; she is a frightened family member who has never been told what a blocked labour means. Kindness here is clinical: a family that understands the why consents faster, raises transport money faster, and travels tonight instead of tomorrow. Ask who can consent for her at the receiving hospital and send that person in the vehicle.\n\n**The call.** Use **SBAR** so the receiving team hears a story, not a list: Situation — who she is and what is happening now; Background — relevant history and what has been done; Assessment — her current vitals and your working diagnosis; Recommendation — what she needs and when, plus your travel time and escort. 'This is Nana from Bawjiase CHPS: situation — para 3, term labour, now 7 cm with fresh bleeding; background — booked with a previous caesarean; assessment — BP 158/104, pulse 102, fetal heart 140; recommendation — she needs theatre tonight, we are transferring now, 40 minutes, escort is a nurse.' Then write down who took the call and at what time.",
      },
      {
        type: "text",
        title: "The paper and the loop",
        body: "The referral note is written as if the reader will never speak to you — because often they will not. It carries: the identification and the situation; vitals with times, not 'stable'; your findings, with the partogram or relevant chart attached; every drug and fluid given, with dose, route and clock time; what you recommend and the urgency; and your name with a contact number. Write it in duplicate — one copy travels, one stays in your records. Time and sign every entry; a note without times cannot be audited and cannot defend anyone.\n\nCharting discipline is the same everywhere: objective (what you saw, not what you concluded about people), timed, complete, and free of blame. Finally, close the loop — telephone the receiving unit the next day, ask for the outcome, and record it in your copy. This is how a facility learns: which referrals arrived in time, which arrived too late, and which conversations to hold differently next time. It also tells the receiving team that someone upstream is following the patient — and that changes how carefully your next note is read.",
      },
      {
        type: "quiz_prompt",
        title: "The referral note, from memory",
        body: "Before you scroll on: what six things must a referral note carry, and why does one copy stay behind?\n\nAnswer: Identification and situation; vitals with times; findings with the partogram or chart attached; drugs and fluids given with doses and clock times; your recommendation with urgency; and your name and contact — written in duplicate because the copy that stays lets you audit the referral and follow up the outcome.",
      },
      {
        type: "clinical_pearl",
        body: "A blank column in a referral note is a hole in the next team's care. Vitals with times, drugs with doses and clock times, findings in your own words — the note is both clinical memory and legal record, and it is the only version of your assessment that travels.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 am, a 38-year-old gravida 6 at term has been fully dilated and pushing for two hours in your facility. The head has not descended for the past hour: still 3/5 palpable above the brim, with a large caput and overlapping skull bones. Her mother-in-law urges, 'let her push more, she is strong'. The district hospital is 45 minutes away.\n\nHow do you manage the conversation, the call, and the paper?\n\nAnswer: The conversation: explain gently that strength cannot open a mechanical block — the baby cannot pass this way, and waiting risks a torn womb, a lost baby and a fistula; the safe route is surgery at the district hospital tonight, and the family member who can consent should travel with her. The call: SBAR to the receiving unit — obstructed second stage, vitals with times, what has been given — and record who took it. The paper: IV line in, catheter draining, nil by mouth, all written with times; the note in duplicate with your recommendation (needs theatre) and contact. She travels with an escort, not alone — and tomorrow you call back for the outcome and file it.",
      },
      {
        type: "memory_trick",
        body: "A referral must travel S-A-N-D: Stabilised (lines, drugs, catheter), Announced (SBAR call ahead, documented), Noted (duplicate written note with times, doses, recommendation), Delivered with a Decision-maker (a relative who knows her story and can consent). Sand packs tight — so do these four.",
      },
      {
        type: "summary",
        body: "- The three delays: deciding to seek care, reaching care, receiving adequate care — the conversation attacks the first, the vehicle and escort the second, the SBAR call the third.\n- Family conversation: plain words for the finding, the threat and what moving changes; send the person who can consent.\n- SBAR tells a story: Situation, Background, Assessment, Recommendation — then document who took the call and when.\n- The note: identification, timed vitals, findings with chart attached, drugs with doses and clock times, recommendation, your contact — in duplicate, timed and signed.\n- Chart objectively — what you saw, not what you concluded about people.\n- Close the loop: call back for the outcome, record it, and let it teach your next referral.",
      },
    ],
    questions: [
      {
        topic: "Referral & Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does SBAR stand for in a referral phone call?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Screen, Brief, Advise, Refer",
          "Symptoms, Bloods, Auscultation, Radiology",
          "Stabilise, Bag, Ambulate, Record",
        ],
        correctIndex: 0,
        explanation:
          "SBAR — Situation, Background, Assessment, Recommendation — structures the call so the receiving team hears a story in under a minute and can prepare before the patient arrives.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Referral & Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why send a relative who knows the patient's story in the referral vehicle?",
        options: [
          "To keep the patient company during a boring ride",
          "To carry her belongings safely",
          "Because that person can give consent and give history if she cannot speak for herself at the receiving facility",
          "Because the ambulance cannot travel with staff",
        ],
        correctIndex: 2,
        explanation:
          "A knowing companion provides consent for surgery or transfusion and history if she deteriorates — a practical answer to the delays that kill at the receiving door. Companionship and belongings are by-products, not the reason.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Referral & Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best closes the referral loop after transferring a patient to the district hospital?",
        options: [
          "File your copy of the note and move on to the next patient",
          "Wait for the hospital to call you if they need anything",
          "Call the receiving unit the next day to ask her outcome and record it",
          "Send a family member to check on her every week",
        ],
        correctIndex: 2,
        explanation:
          "Calling back completes the loop: the receiving team knows someone is following up, you learn what happened to your patient, and the record becomes evidence for auditing your own referrals. Passive waiting teaches you nothing and loses the follow-up.",
        courseSlug: "high-risk-maternal-newborn",
      },
      {
        topic: "Referral & Documentation",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "You are writing the referral note for a mother with severe pre-eclampsia before transfer. Which entry meets the documentation standard?",
        options: [
          "BP high, given some medicines, patient stable",
          "BP 158/104 at 02:15, repeated 156/102 at 02:30; magnesium sulfate loading given per protocol at 02:20; painless vaginal bleeding since 01:00 — recommend theatre-ready review tonight",
          "Refer for BP check",
          "Referred to district hospital. See card for details.",
        ],
        correctIndex: 1,
        explanation:
          "The standard is objective, timed and complete: vitals with times, drugs with clock times, the finding in plain words, and a clear recommendation. Vague entries — 'stable', 'see card', 'BP high' — are unauditable and leave holes in the next team's care.",
        courseSlug: "high-risk-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Referral & Documentation",
        front: "What does the three delays model describe?",
        back: "Delay in deciding to seek care, in reaching care, and in receiving adequate care at the facility — the family conversation, the transport plan and the SBAR call-ahead each attack one delay.",
      },
      {
        topic: "Referral & Documentation",
        front: "What six things must a referral note carry?",
        back: "Identification and situation; vitals with times; findings with the partogram or chart attached; drugs and fluids with doses and clock times; your recommendation with urgency; your name and contact — written in duplicate.",
      },
      {
        topic: "Referral & Documentation",
        front: "How do you run a referral phone call?",
        back: "SBAR — Situation, Background, Assessment, Recommendation — then record who took the call and at what time.",
      },
      {
        topic: "Referral & Documentation",
        front: "What does SAND remind you about referrals?",
        back: "Stabilised, Announced (call ahead), Noted (duplicate written note with times, doses and recommendation), Delivered with a decision-maker who can consent.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify the current edition at your facility.",
      },
    ],
  },
];
