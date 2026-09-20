// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch A (Abnormal Pregnancy & Abnormal Labour)
// 16 lessons anchored to prisma/seed-data/anchors/y3s2-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Medical Disorders in Pregnancy",
    lessonTitle: "Hyperemesis Gravidarum: Beyond Morning Sickness",
    description:
      "When nausea becomes dangerous — recognising and supporting the mother who can't keep anything down.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the line between ordinary morning sickness and hyperemesis gravidarum using weight loss, ketonuria and function.",
      "Explain the fluid and electrolyte dangers of prolonged vomiting, including the role of thiamine.",
      "Apply a CHPS-level action plan: assess, exclude ectopic and molar pregnancy, and refer the dehydrated mother.",
    ],
    tags: ["hyperemesis", "vomiting", "dehydration", "ketones", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Nausea in early pregnancy is so common it feels almost normal — most mothers have it, and most babies grow beautifully through it. But there is a point where vomiting stops being a nuisance and becomes dangerous: the mother dehydrates, loses weight and cannot function. That point is **hyperemesis gravidarum**.\n\nIn this lesson you will learn where the line sits between ordinary morning sickness and hyperemesis, what to check at the CHPS level, and when a mother needs IV fluids and referral rather than reassurance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Morning sickness typically eases by about 14 weeks and, unpleasant as it is, still allows the mother to eat and drink. Hyperemesis is different: vomiting that is severe, persistent and often continues beyond the first trimester, with weight loss over 5% of pre-pregnancy weight, dehydration and ketones in the urine. It touches roughly 1 to 3 mothers in every 100.\n\nThe danger lies in what the body loses — water and salts. Look for sunken eyes, a dry tongue, a fast pulse, dark scanty urine and dizziness on standing, and dipstick for ketones every time. Ask two quiet questions: what have you kept down in 24 hours, and how much weight have you lost? Then screen for the mimics that change your plan: one-sided pain (ectopic until excluded), a uterus larger than dates with no fetal heart (molar pregnancy), jaundice or fever. Management runs from rest, small dry frequent meals, ginger and oral antiemetics such as promethazine to IV rehydration and referral — with thiamine before any glucose-containing fluid, because glucose first can trigger Wernicke's encephalopathy.",
      },
      {
        type: "clinical_pearl",
        body: "A mother who 'is managing at home' with ketones on the dipstick is not managing — she is quietly dehydrating. Check the urine before you reassure anyone, including yourself.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ama, 26, gravida 1 at 9 weeks, is brought to your CHPS compound by her mother. She has vomited 'everything' for six days, cannot keep even water, and has lost 4 kg from a starting weight of 58 kg. She is drowsy, her tongue is dry, her pulse is 110 and her urine dipstick shows large ketones. Her mother asks whether the pregnancy is just 'doing its thing' and whether she can be managed at home with tea.\n\nWhat is your assessment, and what do you do next?\n\nAnswer: This is hyperemesis with clinical dehydration — nothing kept down for over 24 hours, about 5% weight loss, tachycardia and heavy ketonuria. She needs IV rehydration (potassium and thiamine per protocol), an antiemetic and urgent referral; first, quietly screen for ectopic or molar pregnancy — one-sided pain, bleeding, a uterus too large for dates. Home tea cannot replace what her body has lost.",
      },
      {
        type: "memory_trick",
        body: "The 5-K rule for referral: 5% of body weight lost, Ketones on the stick, Keeping nothing down for 24 hours. Any one of these, and morning sickness has graduated into hyperemesis — dry tongue, deep trouble.",
      },
      {
        type: "summary",
        body: "- Ordinary morning sickness eases by about 14 weeks and the mother still eats and drinks.\n- Hyperemesis: severe persistent vomiting with over 5% weight loss, dehydration and ketonuria — about 1-3 in 100 pregnancies.\n- Assess what is kept down, weight lost and urine ketones; exclude ectopic (one-sided pain) and molar pregnancy (size greater than dates).\n- Small dry frequent meals and antiemetics for mild cases; IV fluids with thiamine before glucose, and referral, for the dehydrated mother.",
      },
    ],
    questions: [
      {
        topic: "Hyperemesis Gravidarum",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 11 weeks has vomited everything for three days, has 2+ ketones on dipstick and has lost 4 kg. What is the most important next step?",
        options: [
          "Reassure that morning sickness is normal and review in two weeks",
          "Start IV rehydration and refer, giving thiamine before any glucose-containing fluid",
          "Encourage one large fatty meal daily to settle the stomach",
          "Prescribe oral antiemetics and send her home on tea",
        ],
        correctIndex: 1,
        explanation:
          "Nothing kept down for 24 hours, marked ketonuria and roughly 5% weight loss define hyperemesis with dehydration — she needs IV fluids and referral. Thiamine comes before glucose to prevent Wernicke's encephalopathy.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Hyperemesis Gravidarum",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in a vomiting pregnant woman most urgently changes your differential diagnosis?",
        options: [
          "Lower one-sided abdominal pain with a positive pregnancy test",
          "Nausea that is worse in the mornings",
          "Vomiting that improves after 14 weeks",
          "Mild weight loss in the first trimester",
        ],
        correctIndex: 0,
        explanation:
          "A positive test with one-sided pain is ectopic pregnancy until excluded — rupture kills quickly. The other findings fit ordinary morning sickness.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Hyperemesis Gravidarum",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is thiamine given before IV glucose to a woman with prolonged severe vomiting?",
        options: [
          "It reduces nausea directly",
          "It prevents gastric bleeding",
          "It protects the brain from Wernicke's encephalopathy",
          "It corrects hypokalaemia",
        ],
        correctIndex: 2,
        explanation:
          "Prolonged vomiting depletes thiamine, and glucose given without thiamine can precipitate Wernicke's encephalopathy — confusion, abnormal eye movements and unsteadiness.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Hyperemesis Gravidarum",
        front: "What separates hyperemesis from ordinary morning sickness?",
        back: "Severe persistent vomiting with over 5% weight loss, dehydration and ketonuria, often lasting beyond the first trimester — about 1-3 in 100 pregnancies.",
      },
      {
        topic: "Hyperemesis Gravidarum",
        front: "Two dangerous mimics to exclude in severe early vomiting?",
        back: "Ectopic pregnancy (one-sided pain with a positive test) and molar pregnancy (uterus larger than dates, sometimes no fetal heart).",
      },
      {
        topic: "Hyperemesis Gravidarum",
        front: "Why thiamine before glucose in hyperemesis?",
        back: "Vomiting depletes thiamine; glucose given first can precipitate Wernicke's encephalopathy — confusion, eye movement problems and ataxia.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Medical Disorders in Pregnancy",
    lessonTitle: "Anaemia in Pregnancy",
    description:
      "Why pregnancy drains iron — the screening, treatment and thresholds that matter.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the WHO haemoglobin thresholds for anaemia severity in pregnancy and the physiological dilution of pregnancy.",
      "Explain why anaemic mothers tolerate haemorrhage poorly and list common causes in Ghana.",
      "Apply a treatment and counselling plan for oral iron, and set referral thresholds for severe anaemia.",
    ],
    tags: ["anaemia", "iron", "haemoglobin", "screening", "nutrition"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Somewhere on your next antenatal clinic morning there will be a mother with pale palms who tires climbing the two steps to your room. Anaemia is the most common medical problem of pregnancy worldwide, and in Ghana malaria, hookworm and diet make it more common still.\n\nThis lesson covers the thresholds you screen against, why pregnancy drains iron, how to treat it, and why an anaemic mother tolerates bleeding so poorly at birth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In pregnancy the WHO cut-off for anaemia is a haemoglobin below 11 g/dL; below 7 g/dL it is severe, and below 4 g/dL very severe. Pregnancy dilutes the blood — plasma volume rises by nearly half while red cell mass rises less — so haemoglobin drifts down to its lowest around 28 to 32 weeks. That dip is expected, but 11 still defines true deficiency.\n\nThe baby and placenta demand about 1000 mg of iron across pregnancy — more than most diets supply — and in Ghana hookworm, malaria and short birth intervals drain the stores further. Screen at booking and again around 28 weeks; treat with daily oral iron plus folic acid, counselling honestly: swallow with a vitamin C-rich drink, away from tea because tannins block absorption, expect dark stools, and continue for months because stores refill slowly. Severe anaemia, intolerance or late pregnancy may need IV iron or transfusion and referral. The stakes at birth: a loss a healthy mother shrugs off can tip an anaemic mother into shock, with added risks of infection, preterm birth and low birth weight.",
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
        body: "Remember: 11 is the floor, 7 is the door — below 11 g/dL she is anaemic, below 7 g/dL open the referral door. And TEA BLOCKS THE TABLET — never iron with tea.",
      },
      {
        type: "summary",
        body: "- Anaemia in pregnancy: Hb below 11 g/dL; severe below 7 g/dL — treat or refer, do not watch and wait.\n- Plasma rises more than red cells, so Hb falls to its lowest at 28-32 weeks — the dip is expected, deficiency still counts at 11.\n- Iron demand is about 1000 mg per pregnancy; in Ghana malaria, hookworm and short birth spacing drain stores — treat causes, not just the number.\n- Swallow iron with vitamin C and away from tea; dark stools are normal; plan birth near help for every anaemic mother.",
      },
    ],
    questions: [
      {
        topic: "Anaemia in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does a healthy pregnant mother's Hb fall to its lowest around 28-32 weeks?",
        options: [
          "The baby consumes red cells directly",
          "The kidneys destroy red cells faster in the third trimester",
          "Iron absorption stops after 28 weeks",
          "Plasma volume rises more than red cell mass, diluting the blood",
        ],
        correctIndex: 3,
        explanation:
          "Plasma volume expands by about 45% while red cell mass rises less, so the haemoglobin concentration is diluted — a physiological dip, not necessarily deficiency.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Anaemia in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother at 34 weeks has Hb 6.5 g/dL with pallor and breathlessness on walking, but is comfortable at rest. What is the appropriate action?",
        options: [
          "Double the oral iron dose and review in four weeks",
          "Refer urgently for hospital assessment — IV iron or transfusion, cause-finding and a hospital birth plan",
          "Advise more dark green leaves and review next month",
          "Transfuse two units at your health centre before referral",
        ],
        correctIndex: 1,
        explanation:
          "Hb below 7 g/dL in late pregnancy is severe anaemia and needs hospital-level decisions. Doubling tablets, dietary advice alone, or transfusing at a centre without blood safety capability all expose her to the one danger she cannot survive — bleeding while anaemic.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Anaemia in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which counselling point about oral iron is correct?",
        options: [
          "Take it with a vitamin C-rich drink and not with tea",
          "Swallow the tablet with strong tea to settle the stomach",
          "Stop the tablets if the stools turn dark",
          "Iron restores the haemoglobin fully within one week",
        ],
        correctIndex: 0,
        explanation:
          "Vitamin C aids absorption, tannins in tea block it, dark stools are harmless and expected, and stores take weeks to months to refill — adherence is the treatment.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Anaemia in Pregnancy",
        front: "Hb cut-offs for anaemia severity in pregnancy?",
        back: "Anaemia below 11 g/dL; moderate 7-10.9; severe below 7; very severe below 4 g/dL (WHO). The physiological low point is 28-32 weeks.",
      },
      {
        topic: "Anaemia in Pregnancy",
        front: "Why does anaemia make birth dangerous?",
        back: "Bleeding tolerance falls — a loss a healthy mother manages can tip an anaemic mother into shock; plus higher risks of infection, preterm birth and low birth weight.",
      },
      {
        topic: "Anaemia in Pregnancy",
        front: "Three ways to make iron tablets work?",
        back: "Take with a vitamin C-rich drink and never with tea; treat the causes (malaria, hookworm); continue for months — dark stools are normal, not a reason to stop.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guideline: Daily Iron and Folic Acid Supplementation in Pregnant Women",
        year: "2012",
        url: "https://www.who.int/publications/i/item/9789241501996",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "National reference — verify current edition at your facility.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Medical Disorders in Pregnancy",
    lessonTitle: "Hypertensive Disorders of Pregnancy",
    description:
      "From gestational hypertension to pre-eclampsia — the spectrum every midwife must know cold.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the spectrum of hypertensive disorders from gestational hypertension to eclampsia.",
      "Explain accurate BP measurement and the symptom screen that reveals severe disease.",
      "Apply referral and first-response actions — antihypertensives, magnesium sulfate and call-ahead referral — for the pre-eclamptic mother.",
    ],
    tags: ["pre-eclampsia", "hypertension", "eclampsia", "magnesium sulfate", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Blood pressure is the reading you take at every single antenatal contact, because the disease it screens for — pre-eclampsia — can turn a healthy mother into a critically ill one between two visits. Hypertensive disorders touch about one pregnancy in ten.\n\nThis lesson walks the full spectrum, from gestational hypertension through pre-eclampsia to eclampsia, and the numbers and symptoms that move a mother from 'monitor' to 'refer now'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Gestational hypertension: BP 140/90 or higher first arising after 20 weeks, without proteinuria or organ signs. **Pre-eclampsia**: that same rise plus protein in the urine or organ involvement — falling platelets, rising liver enzymes, a persistent headache, visual disturbance or epigastric pain. Eclampsia: convulsions — an obstetric emergency. Chronic hypertension predates pregnancy or persists beyond it, and can have pre-eclampsia superimposed.\n\nMeasure well before you call anything: correct cuff, mother seated and rested, and repeat an abnormal reading before acting. Risk factors: first pregnancy, previous pre-eclampsia, twins, diabetes, obesity, age over 35, chronic hypertension or kidney disease. Ask the three symptom questions at every visit — headache, blurred or flashing vision, upper belly pain — because severe disease can declare itself while the numbers still look modest. Severe elevation (160/110) or dangerous symptoms mean referral, an antihypertensive per protocol (methyldopa, labetalol or nifedipine — never ACE inhibitors) and magnesium sulfate to prevent seizures. The only cure is delivery of the placenta, timed against the baby's maturity — and keep checking after the birth, because pre-eclampsia can appear or worsen in the first postpartum days.",
      },
      {
        type: "clinical_pearl",
        body: "Treat the woman, not the number. A mother with BP 138/88, headache and visual flashing is sicker than one with 150/95 who feels well. Symptoms upgrade your assessment; numbers alone do not finish the story.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Efua, 19, is 34 weeks into her first pregnancy. At today's ANC her BP is 148/96, repeated at 146/94. Her urine dips protein 2+, she reports a frontal headache 'since yesterday', and her fingers are so swollen her ring had to be cut off. She was planning to walk home after the visit.\n\nWhat is your assessment, and what are your next three actions?\n\nAnswer: This is pre-eclampsia with severe features — new hypertension after 20 weeks, proteinuria and a danger symptom, in a first pregnancy at a facility without definitive care. Next actions: keep her seated and calm, insert an IV line, and arrange urgent call-ahead referral with a written note; if transfer will be delayed, give magnesium sulfate for seizure prevention and an antihypertensive per your local protocol. She must not walk home with 'come next week' — headache plus proteinuria plus rising BP is how eclampsia introduces itself.",
      },
      {
        type: "memory_trick",
        body: "The spectrum ladder: G-H-P-E — 'Good Health Progresses Easily': Gestational hypertension → Pre-eclampsia → Eclampsia. And the three places a pre-eclamptic mother hurts: HEAD, VISION, EPIGASTRIUM — any one of them makes the BP reading urgent, whatever the number says.",
      },
      {
        type: "summary",
        body: "- Spectrum: gestational hypertension (BP 140/90+ after 20 weeks alone), pre-eclampsia (BP plus proteinuria or organ signs), eclampsia (seizures); chronic hypertension can be complicated by superimposed pre-eclampsia.\n- Measure properly and repeat: correct cuff, seated, rested; ask every visit about headache, visual disturbance and epigastric pain.\n- Severe range (160/110) or danger symptoms: refer urgently — antihypertensives per protocol, magnesium sulfate for seizure prevention; the cure is delivery of the placenta.\n- Pre-eclampsia can arise or escalate after birth — check BP at postnatal contacts too.",
      },
    ],
    questions: [
      {
        topic: "Hypertensive Disorders of Pregnancy",
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
          "New hypertension after 20 weeks without proteinuria or organ signs is gestational hypertension — still high risk, so monitor closely for progression to pre-eclampsia.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Hypertensive Disorders of Pregnancy",
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
          "Headache, visual disturbance and epigastric pain signal central nervous system and liver involvement — severe disease. Evening ankle oedema alone is a normal finding of late pregnancy.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Hypertensive Disorders of Pregnancy",
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
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Hypertensive Disorders of Pregnancy",
        front: "Define pre-eclampsia.",
        back: "New BP 140/90 or higher after 20 weeks plus proteinuria or organ involvement — low platelets, raised liver enzymes, persistent headache, visual disturbance or epigastric pain.",
      },
      {
        topic: "Hypertensive Disorders of Pregnancy",
        front: "The three danger symptoms to ask at every antenatal visit?",
        back: "Headache, visual disturbance (blurring or flashing), epigastric pain — any one upgrades the assessment toward severe disease, whatever the BP number.",
      },
      {
        topic: "Hypertensive Disorders of Pregnancy",
        front: "What is the only cure for pre-eclampsia?",
        back: "Delivery of the placenta — antihypertensives and magnesium sulfate buy safe time while the timing of birth is weighed against the baby's maturity and the mother's danger.",
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
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Medical Disorders in Pregnancy",
    lessonTitle: "Gestational Diabetes",
    description:
      "The sugar that arrives with pregnancy — screening, management and the birth that follows.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe GDM risk factors and the WHO 75 g oral glucose tolerance test thresholds.",
      "Explain how maternal hyperglycaemia causes macrosomia and neonatal hypoglycaemia.",
      "Apply a management plan — diet, activity, medicines, birth-place planning and postpartum follow-up.",
    ],
    tags: ["diabetes", "screening", "ogtt", "macrosomia", "hypoglycaemia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy makes the body mildly resistant to insulin — placental hormones push sugar upward so the growing baby is always fed. In some mothers the pancreas cannot keep pace, and blood sugar rises for the first time: **gestational diabetes mellitus (GDM)**.\n\nThis lesson covers who to screen, the numbers that diagnose, the management steps, and why these mothers and babies need extra watching — at birth and for years afterwards.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Screen mothers with risk factors — obesity, age over 35, a previous baby of 4 kg or more, previous GDM, a family history of diabetes — while remembering that many Ghanaian mothers with GDM have no risk factor at all, so local practice screens widely wherever testing is possible. Diagnosis uses the 75 g oral glucose tolerance test, WHO thresholds: fasting 5.1, one-hour 10.0 or two-hour 8.5 mmol/L or above.\n\nManagement begins with food and movement: carbohydrates spread across the day rather than one huge evening banku, walking after meals, and glucose monitoring; insulin is added if targets are missed (metformin is an option in many settings). High sugar crosses the placenta freely, so the baby's pancreas over-responds — and insulin is a growth hormone, laying fat especially on the shoulders. That macrosomia brings shoulder dystocia, birth injury and caesarean risk; after birth the newborn's insulin overshoots once the sugar supply is cut, so feed within the first hour and check glucose. Poor control also raises prematurity, respiratory problems and stillbirth. Most GDM resolves after birth — but up to half of these mothers develop type 2 diabetes over the following years, so a postpartum glucose check, weight care and birth spacing are part of the treatment.",
      },
      {
        type: "clinical_pearl",
        body: "The GDM baby looks beautifully chubby — and then crashes at two hours of age. Never discharge one without early feeding and glucose checks: first feed within the hour, then every 2-3 hours, and watch any jitteriness closely.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Serwaa, 29, is 31 weeks into her second pregnancy, referred with GDM confirmed on a glucose tolerance test. Her first baby weighed 4.3 kg and needed hospital help for shoulders that stuck during birth; she is overweight and eats one large meal after market each evening. She asks why 'a little high sugar' should matter to the baby, and whether she must now stop eating altogether.\n\nHow do you counsel her and plan her care?\n\nAnswer: Explain that even modestly high sugar crosses the placenta, driving the baby's insulin — a growth hormone that lays fat on the shoulders, exactly where her first baby was stuck. She must not fast: spread carbohydrates across meals and snacks, walk after meals, and attend the district hospital with a hospital birth plan. Alert the newborn team, because after birth this baby's insulin overshoots and glucose can fall. Finish with her own future: a postpartum glucose test and weight goals — GDM is an early warning she can still act on.",
      },
      {
        type: "memory_trick",
        body: "GDM means 'BIG baby, LOW baby': BIG in the womb — macrosomia and shoulder dystocia; LOW after birth — hypoglycaemia from insulin overshoot. Manage the mother's sugar and both problems shrink.",
      },
      {
        type: "summary",
        body: "- GDM is glucose intolerance first recognised in pregnancy; screen risk factors (obesity, age, previous big baby, family history) — many mothers have none.\n- WHO 75 g OGTT thresholds: fasting 5.1, one-hour 10.0, two-hour 8.5 mmol/L or above.\n- First-line management: carbohydrate spread across the day, activity after meals, insulin (or metformin per protocol) if targets are missed.\n- Baby risks: macrosomia, shoulder dystocia, neonatal hypoglycaemia — feed within the first hour and monitor; mother's risk: up to half develop type 2 diabetes — postpartum testing, lifestyle and birth spacing.",
      },
    ],
    questions: [
      {
        topic: "Gestational Diabetes",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which history suggests a mother at risk of gestational diabetes?",
        options: [
          "A previous term baby weighing 2.5 kg",
          "A previous term baby weighing 4.3 kg",
          "A history of low blood pressure",
          "Being under 18 years old",
        ],
        correctIndex: 1,
        explanation:
          "A previous baby over 4 kg is classic evidence of past hyperglycaemia — macrosomia is the footprint GDM leaves. The other options point away from diabetes risk.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Gestational Diabetes",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the GDM baby become macrosomic?",
        options: [
          "The mother's fat cells cross the placenta directly",
          "Extra glucose thickens the amniotic fluid and overfeeds the baby",
          "The baby's muscles grow from maternal insulin crossing over",
          "Glucose crosses the placenta, the baby secretes extra insulin, and insulin acts as a growth hormone",
        ],
        correctIndex: 3,
        explanation:
          "Glucose crosses the placenta, insulin does not — so the baby's own pancreas over-secretes, and that insulin drives fat deposition, especially around the shoulders. Maternal fat cells do not cross, and amniotic fluid is not a feeding route.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Gestational Diabetes",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two hours after a normal birth, the term baby of a GDM mother is jittery. The most likely cause is:",
        options: [
          "Overheating under the warmer",
          "Early sepsis from prolonged rupture of membranes",
          "Neonatal hypoglycaemia — the baby's insulin overshoots once the sugar supply stops",
          "Normal newborn jitteriness needing no check",
        ],
        correctIndex: 2,
        explanation:
          "Chronic maternal hyperglycaemia made the fetus hyperinsulinaemic; at birth the glucose supply stops but the insulin persists. Check the glucose, feed early — within the first hour and then 2-3 hourly — and never dismiss jitteriness as normal in the GDM baby.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Gestational Diabetes",
        front: "WHO diagnostic thresholds for the 75 g OGTT in pregnancy?",
        back: "Fasting 5.1, one-hour 10.0, or two-hour 8.5 mmol/L or above — any one of the three makes the diagnosis.",
      },
      {
        topic: "Gestational Diabetes",
        front: "Why is the GDM baby at special risk in the first hours after birth?",
        back: "It is hyperinsulinaemic; when maternal glucose stops at birth, its own insulin drives sugar down — hypoglycaemia. Feed within the first hour and monitor glucose.",
      },
      {
        topic: "Gestational Diabetes",
        front: "Long-term outlook after GDM?",
        back: "It usually resolves after birth, but up to half of these mothers develop type 2 diabetes over the years — postpartum glucose testing, weight control, activity and birth spacing are part of care.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Diagnostic Criteria and Classification of Hyperglycaemia First Detected in Pregnancy",
        year: "2013",
        url: "https://www.who.int/publications/i/item/WHO-NMH-MND-13.2",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Early Complications",
    lessonTitle: "Ectopic Pregnancy: The Emergency You Can't Miss",
    description:
      "The pregnancy in the wrong place — recognising rupture before it takes the mother.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the classic triad and risk factors of ectopic pregnancy.",
      "Explain why internal haemorrhage can hide from external bleeding assessment.",
      "Apply the first-response drill — IV access, nil by mouth, call-ahead referral — for suspected rupture.",
    ],
    tags: ["ectopic", "emergency", "early pregnancy", "shock", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A pregnancy can implant almost anywhere, and when it chooses a fallopian tube it quietly writes a countdown. The tube cannot stretch like a womb — somewhere around six to ten weeks it bursts, and the mother can bleed into her abdomen faster than a transfusion can chase.\n\nIn Ghana many ectopics arrive already ruptured. This lesson trains your eye and hands on the presentation that must never be sent home: the positive test, the one-sided pain, the bleeding.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The overwhelming majority of ectopics implant in the fallopian tube, most often in its widest part, the ampulla. Risk factors include previous pelvic infection, a previous ectopic, tubal surgery, pregnancy with an IUCD in place and smoking. The classic triad is a **positive pregnancy test, one-sided lower abdominal pain and light vaginal bleeding** — the blood often dark brown, described as 'prune juice'. On gentle examination, moving the cervix hurts (cervical excitation) and there may be adnexal tenderness or a mass.\n\nThe danger words are fainting, dizziness on standing, shoulder-tip pain and collapse — shoulder-tip pain means blood irritating the diaphragm, internal bleeding already underway. Internal bleeding hides: her pad may show almost nothing while her abdomen fills, so watch the pulse, pallor and BP — a rising, thready pulse with a falling pressure is early shock while the pad stays modest. With ultrasound and hCG testing, unruptured ectopics can be treated with methotrexate or minimally invasive surgery; without them your job is suspicion and speed: nil by mouth, a wide-bore IV running fluids, and urgent referral — a collapsed woman of reproductive age has a ruptured ectopic until proven otherwise.",
      },
      {
        type: "clinical_pearl",
        body: "Two sentences have saved more lives than any scan: every woman of reproductive age with lower abdominal pain is pregnant until a test says otherwise — and every positive test with one-sided pain is ectopic until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Dede, 27, is carried into your CHPS compound at 11 pm having collapsed in the kitchen. Her period is seven weeks late. She is pale and sweating, BP 85/50, pulse 120, with right-sided lower abdominal pain and guarding. There is only a stain of dark blood on her wrapper, and her husband asks why she is so weak when 'the bleeding is small'.\n\nWhat is happening, and what are your next actions?\n\nAnswer: This is a probable ruptured ectopic with internal haemorrhage — collapse with a missed period, one-sided pain, and shock out of proportion to the visible loss, because the blood is filling her abdomen, not the pad. Keep her warm and flat, insert a wide-bore IV and run fluids, give nothing by mouth, and transfer urgently with a call ahead, a written note and a relative — she needs surgery and blood now. Tell the husband gently: little on the wrapper, much within.",
      },
      {
        type: "memory_trick",
        body: "PPB: Positive test, one-sided Pain, light Bleeding — ectopic till proven otherwise. And when she faints or her shoulder hurts, remember 'SHOULDER TIP = BLOOD UNDER THE DIAPHRAGM'.",
      },
      {
        type: "summary",
        body: "- Ectopic: pregnancy implanted outside the uterus, mostly tubal; risks include pelvic infection, previous ectopic and IUCD pregnancy.\n- Classic triad: positive test, one-sided lower abdominal pain, light dark bleeding — with cervical excitation on gentle examination.\n- Rupture: fainting, collapse, shoulder-tip pain, shock with little visible bleeding — the pad lies, the pulse tells the truth.\n- Response: nil by mouth, wide-bore IV fluids, call ahead, transfer urgently; methotrexate and tube-sparing surgery belong to equipped referral centres.",
      },
    ],
    questions: [
      {
        topic: "Ectopic Pregnancy",
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
          "A ruptured tube bleeds into the peritoneal cavity, where litres can collect out of sight; the small vaginal loss is decidual or related bleeding and tells you nothing about the true volume.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Ectopic Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A positive pregnancy test plus which finding makes ectopic the working diagnosis?",
        options: [
          "One-sided lower abdominal pain",
          "Morning nausea",
          "Breast tenderness",
          "Frequency of urination",
        ],
        correctIndex: 0,
        explanation:
          "One-sided pain with a positive test is ectopic until excluded — the other three are ordinary early pregnancy complaints.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Ectopic Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the correct first response at a health centre for a woman with suspected ruptured ectopic in shock?",
        options: [
          "Give pain relief and observe for four hours",
          "IV fluids through a wide-bore cannula, nil by mouth, urgent call-ahead transfer",
          "Oral rehydration at the centre while awaiting transport",
          "Repeat the pregnancy test before deciding anything",
        ],
        correctIndex: 1,
        explanation:
          "She needs volume, theatre and blood — fluids through a wide-bore cannula buy minutes, and a call-ahead referral ensures the receiving team prepares blood and an operating table. Observation, oral fluids or repeating tests all spend the minutes she does not have.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Ectopic Pregnancy",
        front: "The classic triad of ectopic pregnancy?",
        back: "Positive pregnancy test, one-sided lower abdominal pain, light dark vaginal bleeding ('prune juice') — with cervical excitation on gentle examination.",
      },
      {
        topic: "Ectopic Pregnancy",
        front: "What does shoulder-tip pain suggest in early pregnancy?",
        back: "Referred pain from diaphragmatic irritation by intraperitoneal blood — a ruptured ectopic is bleeding now.",
      },
      {
        topic: "Ectopic Pregnancy",
        front: "Why watch the pulse more than the pad in suspected ectopic?",
        back: "Internal bleeding hides from the pad; a rising, thready pulse with pallor and falling BP signals shock while external loss still looks small.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
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
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Early Complications",
    lessonTitle: "Miscarriage: Management and Compassion",
    description:
      "The types and treatments of pregnancy loss — clinical skill and human kindness together.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the classification of miscarriage types using the cervical os and passed tissue.",
      "Explain the common causes of early pregnancy loss and why mothers are not to blame.",
      "Apply safe management, septic-abortion referral and compassionate communication to bereaved families.",
    ],
    tags: ["miscarriage", "loss", "bleeding", "septic abortion", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Miscarriage is the quietest, most common sorrow of pregnancy: roughly one recognised pregnancy in five ends on its own, most in the first trimester. You will meet it on every posting — and the family will remember not only what you did, but how you spoke.\n\nThis lesson gives you the clinical classification, the management options, the emergency of septic abortion, and the words that help.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Classification rests on two findings: the cervical os and what has passed. **Threatened**: bleeding with a closed os, pregnancy still alive — rest, reassure, follow up. **Inevitable**: the os has opened with cramping — the pregnancy cannot be saved. **Incomplete**: some tissue has passed but bleeding continues — completion is needed, surgically or medically (misoprostol per protocol). **Complete**: all has passed and the bleeding settles. **Missed**: the pregnancy has died but is retained, usually painless and found on scan. Recurrent miscarriage — three or more — deserves a cause hunt.\n\nAbout half of first-trimester losses carry abnormal chromosomes — random events, not the mother's fault. Other contributors include uterine problems, uncontrolled diabetes or thyroid disease, and antiphospholipid syndrome; heavy lifting, market days, sex or a fall almost never cause a healthy pregnancy to miscarry, so say that plainly — guilt is heavy in our communities. Give anti-D to rhesus-negative mothers. The emergency is septic abortion — fever, foul-smelling discharge, abdominal pain and uterine tenderness, often after an unsafe termination: IV antibiotics and urgent referral, with judgement-free care that keeps the next woman from hiding what happened.",
      },
      {
        type: "clinical_pearl",
        body: "Never begin a sentence with 'at least'. 'At least it was early' sands down grief. Say instead: 'I am so sorry. This is not something you caused.' Then ask what she wants to know — some mothers want details, some want silence, all deserve respect.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Akosua, 22, arrives at your health centre at nine weeks with cramping and bleeding like a heavy period since morning. On examination the cervix is open; in your assessment room she passes clots and tissue, after which the bleeding eases and the uterus contracts down over the hours. She has no fever and the discharge has no smell. Her mother-in-law insists she 'walked to the market too much' and brought this on herself.\n\nWhat type of miscarriage is this, and what do you say to her and her family?\n\nAnswer: With an open cervix, passed tissue, settling bleeding and a firm contracted uterus, this has moved from inevitable toward complete miscarriage. Observe for heavy bleeding or retained tissue, confirm completion at follow-up, give anti-D if she is rhesus negative, and watch for infection — with a clear follow-up appointment. To the family: 'The pregnancy itself was not developing normally. No market walking caused it, and nobody is to blame.' Most women who miscarry go on to have healthy babies.",
      },
      {
        type: "memory_trick",
        body: "Classify with two questions: 'Open or closed?' and 'Passed or not?' Closed with bleeding = Threatened; open with the pregnancy still inside = Inevitable; open with part passed = Incomplete; all passed and settling = Complete; silent and found on scan = Missed.",
      },
      {
        type: "summary",
        body: "- Types turn on the os and passed tissue: threatened (closed), inevitable (open, ongoing), incomplete (partly passed, still bleeding), complete (all passed, settling), missed (painless, scan-diagnosed).\n- Roughly half of early losses are random chromosomal errors — not caused by lifting, sex or market days; give anti-D to rhesus-negative mothers.\n- Incomplete and missed miscarriages are completed surgically or medically (misoprostol per protocol).\n- Septic abortion — fever, foul discharge, uterine tenderness — is the emergency: IV antibiotics and urgent referral, with judgement-free care.",
      },
    ],
    questions: [
      {
        topic: "Miscarriage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 10 weeks has light bleeding, a closed cervical os, and a live pregnancy on scan. What type of miscarriage is this?",
        options: [
          "Threatened miscarriage",
          "Inevitable miscarriage",
          "Incomplete miscarriage",
          "Missed miscarriage",
        ],
        correctIndex: 0,
        explanation:
          "Bleeding with a closed os and a living pregnancy is a threatened miscarriage — most continue when the baby remains alive and the os stays closed; rest, reassurance and follow-up.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Miscarriage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which presentation among these is the emergency needing IV antibiotics and urgent referral?",
        options: [
          "Threatened miscarriage with light spotting",
          "Complete miscarriage with settling bleeding",
          "Missed miscarriage found on routine scan",
          "Fever, foul-smelling discharge and uterine tenderness after a termination",
        ],
        correctIndex: 3,
        explanation:
          "That is septic abortion — retained infected tissue that can progress to sepsis and death. IV antibiotics before transfer, urgent evacuation at hospital level, and compassionate, judgement-free care.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Miscarriage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sentence is the most supportive thing to say to a mother after a miscarriage?",
        options: [
          "'At least it happened early, before you really knew the baby.'",
          "'I am so sorry — this was not something you caused.'",
          "'These things happen because of the things women do.'",
          "'Try to forget it and start trying again immediately.'",
        ],
        correctIndex: 1,
        explanation:
          "The words that help remove blame and acknowledge the loss. 'At least' minimises grief, blaming sentences add guilt, and rushing the next pregnancy dismisses her need to grieve this one.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Miscarriage",
        front: "Closed os with bleeding and a live pregnancy?",
        back: "Threatened miscarriage — rest, reassurance and follow-up; most continue when the baby stays alive and the os stays closed.",
      },
      {
        topic: "Miscarriage",
        front: "Define missed miscarriage.",
        back: "The pregnancy has died but is retained, usually painless and found on ultrasound; confirm before acting, then complete surgically or medically.",
      },
      {
        topic: "Miscarriage",
        front: "Red flags after miscarriage that mean septic abortion?",
        back: "Fever, foul-smelling discharge, abdominal and uterine tenderness — IV antibiotics and urgent referral.",
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
        title: "Safe Abortion: Technical and Policy Guidance for Health Systems",
        year: "2012",
        url: "https://www.who.int/publications/i/item/9789241548434",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Early Complications",
    lessonTitle: "Multiple Pregnancy: Twice the Watching",
    description:
      "Twins and their risks — the extra surveillance that keeps two babies safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe twin types, chorionicity and why the first-trimester ultrasound matters.",
      "Explain the maternal and fetal complications that rise in multiple pregnancy.",
      "Apply extra antenatal surveillance and a safe twin birth plan — attendants, third-stage management and newborn readiness.",
    ],
    tags: ["multiple pregnancy", "twins", "chorionicity", "preterm", "pph"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Twins run in West African families more than anywhere else on earth, so a twin clinic morning is not a rarity — it is your Tuesday. Two babies double the joy, and they also double nearly every risk in the book: preterm birth, anaemia, hypertension, bleeding and malpresentation.\n\nThis lesson is about the extra surveillance that keeps two babies safe, from the dating scan to the third stage of labour.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Twins are dizygotic (two eggs — familial, commoner in older and higher-parity mothers) or monozygotic (one egg splits — not familial). What matters most clinically is **chorionicity** — whether the babies share one placenta. Ultrasound before 14 weeks shows either two placentas or sacs (dichorionic — the safer pattern) or one shared placenta (monochorionic — risk of twin-to-twin transfusion syndrome and cord problems, needing hospital-level follow-up).\n\nThe complications arrive through several doors: anaemia, because two babies draw double iron; pre-eclampsia at higher rates and earlier; preterm labour, with the average twin birth hovering around 36-37 weeks and most twins under 2.5 kg; malpresentation, especially of the second twin; cord prolapse when the first membranes rupture; and PPH, because an overstretched uterus with a large placental bed contracts poorly. Your antenatal answer is more, earlier, higher: more frequent visits (typically two-weekly after 20-24 weeks), iron and folate, serial growth checks, preterm danger-sign counselling, and a birth plan pointing firmly to a hospital with skilled birth attendance and newborn care. At delivery: IV access, oxytocin ready for the third stage, a second skilled attendant for the second twin, and two warm corners for two small babies.",
      },
      {
        type: "clinical_pearl",
        body: "Never be alone at a twin delivery. The second twin is where the drama lives — malpresentation, cord prolapse, a too-quick or too-slow interval. Call for help the moment you confirm twins in labour, even when the first birth is going perfectly.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Comfort, 28, gravida 2 at 29 weeks with dichorionic twins confirmed at 13 weeks, attends your ANC from a village 40 minutes away. Today her BP is 138/88, repeated 136/86; her urine dips negative; fundal height measures 34 cm; and she mentions occasional tightenings. She had planned, until now, to deliver at the nearby CHPS compound because 'the road is bad'.\n\nWhat do you change today?\n\nAnswer: Twin pregnancy at 29 weeks with a borderline BP, a fundal height leaping ahead and tightenings has moved into a higher risk class — preterm labour and pre-eclampsia are both live possibilities, and two likely-small babies must not be born at a CHPS compound without newborn support. Repeat her BP after rest, screen the urine, assess for labour, and arrange district-hospital review now. Rebuild the birth plan around hospital delivery with transport solved, discuss a maternity waiting home near term, teach preterm danger signs, and ensure corticosteroids if preterm birth threatens.",
      },
      {
        type: "memory_trick",
        body: "T-W-I-N-S: Term arrives earlier (around 36-37 weeks), Watch the blood pressure, Iron for two, Newborn care planned from the start, Second twin is where the surprises live.",
      },
      {
        type: "summary",
        body: "- Twins: dizygotic (familial, commoner with age and parity) or monozygotic; chorionicity — best judged before 14 weeks — sets the risk level, with monochorionic twins needing the closest follow-up.\n- Expect more of everything: anaemia, pre-eclampsia, diabetes, preterm labour (average birth 36-37 weeks), malpresentation, cord prolapse and PPH.\n- Antenatal care: more frequent visits, iron and folate, growth surveillance, preterm counselling and a hospital birth plan.\n- At birth: two skilled attendants, IV access, active management of the third stage with oxytocin, two warm corners — and corticosteroids before transfer when preterm birth threatens.",
      },
    ],
    questions: [
      {
        topic: "Multiple Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does chorionicity describe, and when is it best assessed?",
        options: [
          "The number of amniotic sacs, best assessed at term",
          "Whether the twins are identical, best judged after birth",
          "The lie of the twins, best assessed at 36 weeks",
          "Whether the twins share one placenta, best assessed by ultrasound before 14 weeks",
        ],
        correctIndex: 3,
        explanation:
          "Chorionicity — one shared placenta (monochorionic) versus two (dichorionic) — predicts risk: monochorionic twins face twin-to-twin transfusion and cord entanglement, so it must be established early, ideally before 14 weeks.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Multiple Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pair of complications rises most in twin pregnancy?",
        options: [
          "Gallstones and appendicitis",
          "Post-term pregnancy and macrosomia",
          "Preterm labour and pre-eclampsia",
          "Ectopic implantation and molar pregnancy",
        ],
        correctIndex: 2,
        explanation:
          "Twins average 36-37 weeks at birth and raise pre-eclampsia rates several-fold — together they define the extra surveillance schedule. The other pairs are not twin-specific risks.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Multiple Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is PPH a particular danger after twin birth?",
        options: [
          "Twin placentas always implant over the cervix",
          "Twin placentas separate before labour begins",
          "Twins cause cervical tears as a rule",
          "The overstretched uterus and large placental bed contract poorly after birth",
        ],
        correctIndex: 3,
        explanation:
          "A uterus that has held two babies and a double placental bed is exactly the uterus that tires: anticipate atony, keep an IV line running, give oxytocin actively in the third stage and be ready to rub up a contraction.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Multiple Pregnancy",
        front: "What is chorionicity and why does it matter?",
        back: "Whether twins share one placenta (monochorionic) or have two (dichorionic); monochorionic twins risk twin-to-twin transfusion and cord problems — best judged by ultrasound before 14 weeks.",
      },
      {
        topic: "Multiple Pregnancy",
        front: "Average twin gestation at birth?",
        back: "Around 36-37 weeks, with most twins weighing under 2.5 kg — plan for preterm, small newborns needing warmth and feeding support.",
      },
      {
        topic: "Multiple Pregnancy",
        front: "Three labour-room preparations for twins?",
        back: "A second skilled attendant for the second twin; IV access with oxytocin ready for the third stage (overstretched uterus = PPH risk); two warm, equipped corners for two small babies.",
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
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Placenta, Bleeding and Infection",
    lessonTitle: "Placental Disorders",
    description:
      "Praevia, abruption and accreta — the placenta in the wrong place or doing the wrong thing.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the contrasting presentations of placenta praevia and placental abruption.",
      "Explain why vaginal examination is withheld until praevia is excluded, and why shock can exceed visible loss.",
      "Apply first-response actions and referral planning, including accreta risk in scarred uteri.",
    ],
    tags: ["placenta", "praevia", "abruption", "accreta", "haemorrhage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The placenta is the baby's life support, and in a few pregnancies it betrays the mother — sitting in the wrong place, or detaching at the wrong time. The two great placental dramas of late pregnancy, praevia and abruption, can both flood the ward with blood, yet they present almost oppositely.\n\nThis lesson separates them at the bedside, adds the accreta spectrum that threatens the uterus itself, and stamps the one rule you must never break: examine nothing vaginally until praevia is excluded.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Placenta praevia implants low, covering or reaching the cervix, and announces itself with **painless, bright red, recurrent** bleeding in the second half of pregnancy — the mother looks well between episodes, the uterus stays soft and non-tender, and the baby often lies transverse or stays high. Ultrasound makes the diagnosis; a placenta covering the os means caesarean birth, while a minor degree with light bleeding may be managed expectantly near term in hospital.\n\nPlacental abruption is the opposite picture: the normally sited placenta separates before birth, bringing severe constant pain, a hard tender 'woody' uterus, dark revealed bleeding — or barely any visible bleeding when the loss is concealed — fetal distress or death, and shock out of proportion to what the pad shows. Risks include hypertension, abdominal trauma and sudden decompression of an overfilled uterus; complications include massive PPH, clotting failure (DIC) and kidney injury, and the treatment is delivery plus blood. Then the accreta spectrum — placenta abnormally adherent to or invading the wall, classically where a previous caesarean scar meets a low-lying placenta: quiet antenatally, then catastrophic haemorrhage at birth. Any mother with previous caesarean plus a low placenta must deliver where massive obstetric haemorrhage services exist.",
      },
      {
        type: "clinical_pearl",
        body: "The one examination you never perform: nothing — no fingers, no speculum — enters the vagina of a woman bleeding after 20 weeks until an ultrasound has said where the placenta sits. A praevia disturbed by a finger can bleed catastrophically in minutes. No scan and heavy bleeding? Treat her as praevia: IV line, crossmatch, transfer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two mothers arrive an hour apart at your district hospital. Yaa, 34 weeks, gravida 4: painless bright-red bleeding, soft non-tender uterus, fetal heart 144, baby transverse. Abena, 34 weeks with known hypertension: sudden severe constant pain, uterus hard and exquisitely tender, fetal heart 90, dark blood trickling, pulse 118. The night nurse asks you to examine both vaginally to 'see where the blood is coming from'.\n\nWhat is your working diagnosis for each — and do you follow the nurse's instruction?\n\nAnswer: Yaa's picture fits placenta praevia — painless, bright, soft uterus, malpresentation; Abena's fits abruption — painful, hard and tender, fetal distress, shock beyond the visible loss. You do not examine either vaginally: praevia must first be excluded by ultrasound, and Abena's diagnosis is clinical. Both need IV access, crossmatched blood, continuous fetal heart monitoring and urgent senior review with the theatre team informed — Yaa stabilised and scanned, Abena moving toward delivery.",
      },
      {
        type: "memory_trick",
        body: "Praevia is Painless, bright-red and recurrent in a soft uterus — the mother between bleeds looks deceptively well. Abruption is the Angry abdomen — sudden pain, board-like tenderness, dark blood, baby in trouble. PAIN divides them; and the accreta rule: 'a scar plus a low placenta = the hospital with blood'.",
      },
      {
        type: "summary",
        body: "- Praevia: painless, bright, recurrent third-trimester bleeding; soft uterus, malpresentation; ultrasound diagnosis; covering praevia means caesarean birth.\n- Abruption: severe constant pain, hard tender uterus, dark or concealed blood, fetal distress, shock beyond visible loss; complications include DIC and PPH.\n- Never examine the vagina in late-pregnancy bleeding before ultrasound excludes praevia; judge severity by the mother's vitals, not the pad.\n- Accreta spectrum: suspect previous caesarean plus low placenta — deliver where massive haemorrhage capability exists.",
      },
    ],
    questions: [
      {
        topic: "Placental Disorders",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Painless, bright-red, recurrent bleeding at 32 weeks with a soft uterus and transverse lie — the most likely cause is:",
        options: [
          "Placental abruption",
          "Uterine rupture",
          "Vasa praevia",
          "Placenta praevia",
        ],
        correctIndex: 3,
        explanation:
          "That is the textbook signature of praevia — a low placenta bleeding painlessly as the lower segment forms. Abruption is painful with a hard uterus; rupture belongs to labour with a scar; vasa praevia presents with fetal collapse.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Placental Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the single contraindicated action in antepartum haemorrhage before the placenta is localised?",
        options: [
          "Digital vaginal examination",
          "Abdominal palpation to check the lie",
          "Recording the fetal heart rate",
          "Inserting an IV line and taking blood for crossmatch",
        ],
        correctIndex: 0,
        explanation:
          "A digital examination can tear a low-lying placenta and convert bleeding into exsanguination. Palpation, fetal heart assessment and IV access are all part of safe first response.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Placental Disorders",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother with two previous caesareans and a low-lying placenta at 32 weeks should be planned for birth at a facility that can:",
        options: [
          "Offer water birth and delayed cord clamping",
          "Perform a vaginal birth after caesarean trial",
          "Manage placenta accreta spectrum with massive transfusion and theatre capability",
          "Provide kangaroo mother care only",
        ],
        correctIndex: 2,
        explanation:
          "Scar plus low placenta is the classic accreta-spectrum setup, which can require hysterectomy and massive transfusion at delivery — it belongs in a tertiary or well-equipped regional centre.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Placental Disorders",
        front: "Placenta praevia presentation in one line?",
        back: "Painless, bright-red, recurrent bleeding after 20 weeks in a soft, non-tender uterus — often with malpresentation or a high, unengaged head.",
      },
      {
        topic: "Placental Disorders",
        front: "Placental abruption presentation in one line?",
        back: "Sudden severe constant pain, woody tender uterus, dark or concealed bleeding, fetal distress or death, shock disproportionate to visible loss.",
      },
      {
        topic: "Placental Disorders",
        front: "What is the placenta accreta spectrum?",
        back: "Placenta abnormally adherent to or invading the uterine wall (accreta, increta, percreta) — classically with previous caesarean plus praevia; catastrophic haemorrhage at delivery, needing a centre with massive transfusion capability.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
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
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies",
        year: "8th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Placenta, Bleeding and Infection",
    lessonTitle: "Antepartum Haemorrhage",
    description:
      "Bleeding before birth — the causes, the response and the referral decisions.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe APH and rank its major causes with their bedside signatures.",
      "Explain why maternal vital signs beat the pad in judging blood loss, and why vaginal examination is withheld.",
      "Apply the first-fifteen-minute drill — IV access, fetal assessment, call-ahead referral — and anti-D where indicated.",
    ],
    tags: ["aph", "bleeding", "praevia", "abruption", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Antepartum haemorrhage — bleeding from the vagina in late pregnancy, before the birth — is the red alarm of the third trimester. It touches a few pregnancies in every hundred, and behind it stand the two great emergencies you have just met: praevia and abruption.\n\nThis lesson organises the causes, the first fifteen minutes, and the referral decisions that keep both your patients alive.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "APH is bleeding from about 24 weeks until delivery (definitions vary slightly between 22 and 28 weeks — the response is the same). The causes sort into bleeding from the placenta and bleeding from elsewhere. Placental: **praevia** — painless, bright, soft uterus; **abruption** — painful, hard, tender uterus; and the rare **vasa praevia**, fetal vessels running across the cervix whose rupture bleeds the baby, not the mother — light bleeding with sudden fetal heart collapse. Non-placental causes include cervicitis, polyps and, in older mothers, cervical cancer — which is why the cervix is eventually visualised, but only once praevia is excluded. In the labouring mother with a previous caesarean, bleeding with scar pain and fetal distress means rupture.\n\nYour first fifteen minutes treat first and diagnose second. Assess the mother — pulse, BP, pallor, fundal tone, contractions — and the baby, by fetal heart. Never trust the pad alone: concealed bleeding, especially abruption, hides most of the story inside the uterus. Insert a wide-bore IV, send blood for grouping and crossmatch, and refer with the call made ahead so the receiving team can prepare blood and theatre. Give anti-D to rhesus-negative mothers. The timing of birth balances gestational age, severity and cause: a stable preterm praevia may wait under hospital watch; an abruption with a live distressed fetus cannot.",
      },
      {
        type: "clinical_pearl",
        body: "Estimate blood loss by how the mother looks, not how the pad looks. A pale, fast-pulsing mother with a 'small bleed' is sicker than a pink mother with a frightening pad — and the cleanest pad of all belongs to the fully concealed abruption.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Hawa, 26, gravida 2 at 35 weeks, is carried into your health centre having soaked two cloths since dawn. She is pale, frightened, pulse 112, BP 96/60; the uterus is soft and non-tender and the fetal heart is 150. Your centre has no ultrasound.\n\nWhat do you do in the next fifteen minutes — and what must you not do?\n\nAnswer: This is APH with early shock — tachycardia, low BP and pallor, with a soft painless bleed that could well be praevia. Treat first: keep her warm and flat, insert a wide-bore IV with fluids running, take blood for crossmatch if possible, monitor pulse, BP and fetal heart every 15 minutes, and arrange urgent call-ahead referral. Do not examine her vagina — without an ultrasound the bleeding must be assumed praevial, and a digital examination could turn bleeding into haemorrhage. Send a written note with her vitals and assessment, and remember anti-D if she is rhesus negative.",
      },
      {
        type: "memory_trick",
        body: "The APH drill is P-B-R: Patient first — pulse, pallor, pressure tell the truth; Blood — wide-bore line and crossmatch; Ring the referral centre before she leaves. And the forbidden letter is V — no Vaginal examination until praevia is excluded.",
      },
      {
        type: "summary",
        body: "- APH: significant bleeding from about 24 weeks until birth; the leading causes are praevia (painless, bright) and abruption (painful, hard) — with local cervical causes and rare vasa praevia behind them.\n- Assess mother and fetus, insert a wide-bore IV, crossmatch, and never examine the vagina before ultrasound excludes praevia.\n- Judge severity by the mother's vital signs and colour, not the pad — concealed loss hides.\n- Refer with a call-ahead note; give anti-D to rhesus-negative mothers; birth timing balances cause, maturity and stability.",
      },
    ],
    questions: [
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at 34 weeks has painless bright bleeding, a soft uterus and a transverse lie. What is the correct first response?",
        options: [
          "Immediate digital vaginal examination to check the cervix",
          "IV line, fetal heart check and urgent call-ahead referral — no vaginal examination",
          "Send her home to rest and report if the bleeding worsens",
          "Give ergometrine to close down the bleeding",
        ],
        correctIndex: 1,
        explanation:
          "Painless bright bleeding with a soft uterus is praevia until excluded by scan — treat and transfer without any vaginal examination. Ergometrine is dangerous before birth; sending her home risks a massive bleed at home.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a mother's condition in APH be much worse than her pad suggests?",
        options: [
          "Most APH blood clots inside the bladder",
          "Bleeding stops at night and restarts daily, appearing smaller",
          "Concealed bleeding, as in abruption, collects inside the uterus so the pad shows only a fraction",
          "Women routinely overestimate their own losses",
        ],
        correctIndex: 2,
        explanation:
          "Blood can pool behind the placenta and inside the uterus without reaching the vagina — a fully concealed abruption may show almost nothing externally while the mother shocks. Trust her vitals, not the pad.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Antepartum Haemorrhage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Vasa praevia should be suspected when:",
        options: [
          "Bleeding is light but the fetal heart suddenly drops or the baby dies",
          "Bleeding is heavy and the mother becomes shocked",
          "Bleeding follows intercourse with a closed os",
          "Bleeding comes with a hard, tender uterus",
        ],
        correctIndex: 0,
        explanation:
          "In vasa praevia the torn vessels belong to the baby — even a modest bleed is a large share of fetal blood volume, so fetal heart collapse precedes any maternal sign. Heavy bleeding with maternal shock points to praevia or abruption.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Antepartum Haemorrhage",
        front: "Definition of antepartum haemorrhage?",
        back: "Significant vaginal bleeding from about 24 weeks of pregnancy until the birth of the baby.",
      },
      {
        topic: "Antepartum Haemorrhage",
        front: "The two leading causes of APH, one line each?",
        back: "Praevia — painless, bright, soft uterus; abruption — painful, dark, hard tender uterus with fetal distress.",
      },
      {
        topic: "Antepartum Haemorrhage",
        front: "Why is vasa praevia lethal to the fetus with only light bleeding?",
        back: "The torn vessels are the baby's own — a small bleed is a large proportion of fetal blood volume, so the fetal heart collapses before the mother shows any sign.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
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
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "Placenta, Bleeding and Infection",
    lessonTitle: "Infections in Pregnancy",
    description:
      "The infections that threaten mother and baby — screening, treating and preventing.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main infections of pregnancy in Ghana and the routes by which each reaches the baby.",
      "Explain the screening and prevention package — booking tests, IPTp-SP, ITNs and newborn hepatitis B protection.",
      "Apply a booking-clinic response to positive results, including partner treatment and documentation.",
    ],
    tags: ["infection", "screening", "malaria", "syphilis", "hiv", "hepatitis b"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "An infection in pregnancy is never only the mother's problem — many cross the placenta or travel the birth canal to reach the baby. The old teaching group TORCH (toxoplasma, others, rubella, CMV, herpes) still frames the idea, but your working set in Ghana is wider and includes malaria, HIV, syphilis and hepatitis B on every booking sheet.\n\nThis lesson covers the infections that matter most in our clinics — how they reach the baby, what screening catches, and what treatment or prevention protects.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Syphilis crosses the placenta to cause miscarriage, stillbirth or congenital syphilis — so screen every woman with RPR or VDRL at booking and treat positives with **benzathine penicillin per protocol**, together with the partner, or the infection simply returns. Without care, HIV passes to the baby in pregnancy, birth and breastfeeding — but Ghana's Option B+ starts lifelong ART the same day it is diagnosed, and with an undetectable viral load the risk falls to minimal; exclusive breastfeeding for six months on treatment is recommended. Hepatitis B infects babies at birth — protect them with the first vaccine dose within 24 hours; breastfeeding remains safe.\n\nMalaria is the great Ghanaian drain: parasites sequester in the placenta, causing maternal anaemia, low birth weight and preterm birth — prevent it with an insecticide-treated net every night and at least three doses of IPTp-SP monthly from the second trimester. Urinary infection, often silent, ascends to cause pyelonephritis and preterm labour, so send midstream urine when symptoms or dipstick suggest it. Toxoplasma hides in cat soil and undercooked meat; rubella vaccine waits until after pregnancy; CMV travels with toddler saliva — wash hands. Your screening questions and lab requests are the baby's first line of defence.",
      },
      {
        type: "clinical_pearl",
        body: "Two of the most dangerous infections in pregnancy are silent: syphilis and urinary infection can both quietly take a pregnancy while the mother feels 'just fine'. Screen at booking — every woman, every time — and treat partners too, or the infection comes back home.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At booking (10 weeks) in your ANC, Naana's RPR returns positive at a titre of 1:8. She has no symptoms, her husband travels often, and she is distressed at 'carrying a sick pregnancy', asking whether the baby is already lost. She also has no mosquito net at home.\n\nWhat do you tell her, and what is your plan?\n\nAnswer: A positive RPR with no symptoms is syphilis discovered early — and discovered is the whole battle: treated now with benzathine penicillin per protocol, the risks of miscarriage, stillbirth and congenital syphilis fall dramatically; the baby is not 'already lost'. Treat her today, arrange partner treatment, document everything, and plan the newborn's syphilis assessment. Before she leaves: give her an insecticide-treated net and enrol her for IPTp-SP from the second trimester — malaria and syphilis both work through the placenta, and both are beatable.",
      },
      {
        type: "memory_trick",
        body: "The booking screen is 'three in the syringe, one in the pot, one on the bed': three bloods — Syphilis, HIV, Hepatitis B; one pot — urine; one bed item — the insecticide-treated net, with IPTp added from the second trimester.",
      },
      {
        type: "summary",
        body: "- Infections reach babies by the placenta (malaria, syphilis, HIV, toxoplasma, CMV), during birth (HIV, hepatitis B, herpes) or through breastfeeding — the route shapes the prevention.\n- Booking screens: syphilis, HIV and hepatitis B, with urinalysis where indicated; treat syphilis and start lifelong ART the same day per Ghana's Option B+.\n- Malaria: ITN nightly plus at least three IPTp-SP doses monthly from the second trimester — it prevents anaemia, low birth weight and preterm birth.\n- Silent threats: asymptomatic syphilis and bacteriuria; treat partners for STIs or the infection returns; immunise the hepatitis-B-exposed newborn within 24 hours.",
      },
    ],
    questions: [
      {
        topic: "Infections in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The standard infection screening at booking in Ghana includes:",
        options: [
          "Dengue, leprosy and yellow fever",
          "Cholera, tetanus and measles",
          "Rubella vaccination for the mother",
          "Syphilis, HIV and hepatitis B, with urinalysis where indicated",
        ],
        correctIndex: 3,
        explanation:
          "Those three bloods plus urine form the core booking screen — cheap tests that prevent stillbirth, HIV infection and preterm labour. Rubella vaccine is live and contraindicated in pregnancy.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Infections in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How does malaria in pregnancy harm the baby's growth?",
        options: [
          "It causes the placenta to detach in the first trimester",
          "Parasites sequester in the placenta, causing maternal anaemia, low birth weight and preterm birth",
          "It causes macrosomia like gestational diabetes",
          "It protects the baby by transferring maternal antibodies",
        ],
        correctIndex: 1,
        explanation:
          "Plasmodium-infected red cells clog the placental vessels, so nutrition and oxygen transfer fail — anaemia, low birth weight and prematurity follow. ITNs and IPTp-SP attack exactly this mechanism.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Infections in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman's RPR returns positive at booking. Best response?",
        options: [
          "Repeat the test at delivery instead of treating now",
          "Reassure her — no treatment is needed without symptoms",
          "Treat only the newborn after birth",
          "Treat the mother now with benzathine penicillin per protocol, treat the partner and document",
        ],
        correctIndex: 3,
        explanation:
          "Treatment during pregnancy — the earlier the better — prevents congenital syphilis; partner treatment prevents re-infection, and documentation protects the newborn plan. Waiting until delivery wastes the whole advantage of screening.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Infections in Pregnancy",
        front: "Why does malaria in pregnancy target the baby's growth?",
        back: "Parasites sequester in placental vessels, blocking nutrient and oxygen transfer — maternal anaemia, low birth weight and preterm birth follow.",
      },
      {
        topic: "Infections in Pregnancy",
        front: "The malaria prevention package in pregnancy?",
        back: "Sleep under an insecticide-treated net every night; IPTp-SP monthly from the second trimester, at least three doses.",
      },
      {
        topic: "Infections in Pregnancy",
        front: "Which infection screens are done at booking, and why treat partners for syphilis?",
        back: "Syphilis, HIV and hepatitis B, plus urine where indicated; untreated partners re-infect the mother and undo her treatment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guideline on Syphilis Screening and Treatment in Pregnant Women",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241550093",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "National reference — verify current edition and malaria policy at your facility.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "The Baby at Risk",
    lessonTitle: "Preterm Labour: Buying Time for the Baby",
    description:
      "When labour comes too early — the tocolytics, steroids and transfer that improve survival.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe preterm labour and its major risk factors.",
      "Explain the roles and timing of corticosteroids, tocolytics and magnesium sulfate.",
      "Apply a buy-and-transfer plan and the warmth-feeding-hygiene bundle for the preterm newborn.",
    ],
    tags: ["preterm", "labour", "corticosteroids", "tocolytics", "transfer"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A baby born too early is the leading killer of newborns worldwide, and Ghana carries a heavy share. When labour starts before 37 weeks, your job is to recognise it, buy the right hours, and move the mother to the place where her baby can survive.\n\nThis lesson covers the diagnosis, the medicines that change outcomes — corticosteroids and magnesium sulfate — the honest limits of tocolytics, and the transfer that must be part of your plan.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Preterm labour is regular contractions with cervical change before 37 completed weeks. The causes read like a Ghanaian risk list: infection (urinary, malaria, chorioamnionitis), preterm pre-labour rupture of membranes, multiple pregnancy, anaemia, hypertension, closely spaced or teenage pregnancies, and a previous preterm birth. Confirm with contractions plus a changing cervix — many threatened preterm labours settle, but never dismiss a mother who returns three times with the same tightenings.\n\nThe baby's maturity drives your moves. **Corticosteroids** — dexamethasone 6 mg IM every 12 hours for four doses, or betamethasone 12 mg 24 hours apart — mature the fetal lungs and cut death and respiratory distress most between roughly 24 and 34 weeks, ideally 24 hours to seven days before birth. **Tocolytics** (nifedipine is common in our settings) buy up to about 48 hours — and those hours exist only for steroids to work and the mother to reach a special care baby unit. **Magnesium sulfate** before a very early birth (below about 32 weeks) protects the newborn brain. With ruptured membranes, watch for infection — fever, foul liquor, fast maternal or fetal pulse. After birth the baby's enemies are cold and germs: thorough drying, skin-to-skin or Kangaroo Mother Care, breastfeeding within the first hour, handwashing by everyone, and delayed cord clamping where the baby permits.",
      },
      {
        type: "clinical_pearl",
        body: "Tocolytics are a bus ticket, not a cure — their whole purpose is to get the steroids in and the mother to the right hospital. And transfer the mother whenever possible: a baby inside travels warm and safe; a newborn in transit battles cold and unstable breathing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 30 weeks Esi's membranes rupture and mild contractions begin at your health centre. The nearest special care baby unit is 90 minutes away; you have dexamethasone and nifedipine. Her husband wants to 'wait and see' at home in case it stops.\n\nWhat is your plan for the next 48 hours?\n\nAnswer: The plan is buy-and-move. Start dexamethasone now (four doses over 48 hours), hold contractions with the tocolytic per protocol to cover the steroid course, and arrange urgent call-ahead transfer to the special care baby unit. Counsel the family plainly: waiting at home risks birthing a baby here without support — the medicines exist to make the journey safe, not to keep the baby here. Note the time of membrane rupture and watch temperature, liquor and both pulses; if birth happens anyway: dry and warm the baby, skin-to-skin, breastfeeding within the hour, clean hands for everyone.",
      },
      {
        type: "memory_trick",
        body: "S-T-A-R for the threatened preterm: Steroids for the lungs, Transfer the mother to the baby unit, Avoid infection (clean hands, minimal exams), Resuscitation-ready warmth at birth. Buy 48 hours — and spend them on exactly these four.",
      },
      {
        type: "summary",
        body: "- Preterm labour: regular contractions with cervical change before 37 weeks; risks include infection, PPROM, multiple pregnancy, anaemia and previous preterm birth.\n- Corticosteroids (dexamethasone or betamethasone) roughly 24-34 weeks cut neonatal death and lung disease — best 24 hours to 7 days before birth.\n- Tocolytics buy about 48 hours only — for steroids and transfer, not to avoid referral; magnesium sulfate before very early birth protects the newborn brain.\n- Transfer the mother when possible; at birth: dry, warm, skin-to-skin, early breastfeeding, hand hygiene and delayed cord clamping.",
      },
    ],
    questions: [
      {
        topic: "Preterm Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the real purpose of tocolytics in preterm labour?",
        options: [
          "Stop labour permanently until term",
          "Make the baby gain weight quickly",
          "Buy about 48 hours for corticosteroids and transfer to a facility with newborn care",
          "Reduce the mother's bleeding",
        ],
        correctIndex: 2,
        explanation:
          "No tocolytic stops preterm labour for good — they win roughly two days, and those days only count if they carry steroids and a transfer to a special care baby unit.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Preterm Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why transfer the mother rather than the newborn when a special care baby unit exists 90 minutes away?",
        options: [
          "Tocolytics can only be given after the baby is born",
          "Preterm newborns travel more comfortably after their first feed",
          "The special care unit only admits mothers",
          "The baby inside the mother travels warm, oxygenated and protected — better than a fragile newborn in transit",
        ],
        correctIndex: 3,
        explanation:
          "In-utero transport keeps the baby warm, fed and stable; a transferred preterm newborn faces cold stress and breathing problems on the road. The other options are simply false.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Preterm Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Corticosteroids for fetal lung maturity work best when:",
        options: [
          "Given after the baby is born",
          "Given at 39 weeks to every mother",
          "Given roughly between 24 and 34 weeks, ideally 24 hours to 7 days before birth",
          "Given only together with oxytocin augmentation",
        ],
        correctIndex: 2,
        explanation:
          "The benefit window is the vulnerable gestational range with enough lead time before delivery — two days to a week of steroid exposure is the sweet spot. Postnatal and routine-term steroid use carry no benefit.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Preterm Labour",
        front: "Define preterm labour.",
        back: "Regular contractions with cervical change before 37 completed weeks.",
      },
      {
        topic: "Preterm Labour",
        front: "Corticosteroid regimen and window?",
        back: "Dexamethasone 6 mg IM 12-hourly for four doses, or betamethasone 12 mg twice 24 hours apart — roughly 24-34 weeks, best 24 hours to 7 days before birth.",
      },
      {
        topic: "Preterm Labour",
        front: "Why 'transfer the mother, not the baby'?",
        back: "Inside the mother, the preterm baby travels warm, fed and stable; after birth it faces cold stress and breathing problems on the road — in-utero transport is safer whenever feasible.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Interventions to Improve Preterm Birth Outcomes",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241508988",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Care of the Preterm Newborn (Kangaroo Mother Care)",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241555746",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "The Baby at Risk",
    lessonTitle: "Fetal Growth Problems",
    description:
      "Too big, too small, too fast, too slow — growth issues and what they predict.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe LGA and FGR, including the symmetrical versus asymmetrical patterns.",
      "Explain how serial fundal height and Doppler detect failing growth and what a flat trend means.",
      "Apply risk-based plans — hospital birth, fetal surveillance and newborn glucose and temperature care.",
    ],
    tags: ["growth restriction", "lga", "fundal height", "placental insufficiency", "macrosomia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The tape measure on the mother's abdomen is one of the cheapest screening tools in obstetrics — and one of the sharpest. A baby growing too fast or too slowly is announcing something: placental failure, maternal diabetes, an infection. Your fundal height trend can be the first alarm.\n\nThis lesson covers the too-big baby (LGA and macrosomia), the too-small baby (fetal growth restriction), and how each changes your plan from antenatal clinic to the first hour after birth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Large for gestational age means a birth weight above the 90th centile; macrosomia beyond about 4-4.5 kg. Think diabetes, obesity, previous big babies and post-dates. The dangers cluster at birth: shoulder dystocia — the head delivers and the shoulders stick — birth injury, caesarean risk, maternal tears and PPH; after birth, hypoglycaemia.\n\nFetal growth restriction means an estimated weight below the 10th centile or a faltering trend — the baby is not reaching its genetic potential. Two patterns: **symmetrical**, small in every dimension from early pregnancy (chromosomal problems, congenital infection, malnutrition), and **asymmetrical**, the common one — late placental insufficiency from pre-eclampsia, anaemia or malaria, which diverts blood to the brain, sparing the head while the abdomen lags. Detect it with serial fundal height: a single small reading means little, but a trend flattening or falling behind by 4 cm or more should trigger growth ultrasound with Doppler. The FGR baby tolerates labour poorly — late decelerations, meconium, stillbirth — so birth is planned where fetal surveillance exists, and after birth it risks hypoglycaemia, hypothermia and poor feeding: feed early, keep warm, and remember that a small baby is not a healthy baby.",
      },
      {
        type: "clinical_pearl",
        body: "A term baby weighing 2.4 kg is not 'just a small mother's baby' — it is a growth-restricted baby whose placenta already struggled, and it will tolerate labour and cold like a preterm. Watch the trend, not the single number: fundal heights that flatten are shouting even before the tape says small.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 34 weeks Abi's fundal height measures 29 cm — the same as at 30 weeks. The tape has not moved for a month. Her BP today is 146/94 with urine protein 1+; the fetal heart is 140, and she reports the baby is 'quieter these days'.\n\nWhat does the flat tape tell you, and what is the plan?\n\nAnswer: A fundal height frozen for four weeks, with rising BP, proteinuria and reduced movements, points to placental insufficiency with fetal growth restriction — a baby being starved of supply, likely the asymmetrical, head-sparing type. Treat the pregnancy as high-risk today: growth ultrasound with Doppler at the district hospital, pre-eclampsia management, close fetal heart and movement monitoring, and birth planned where fetal surveillance and neonatal support exist — this baby has no reserve for a long hypoxic labour. Teach her daily movement counts and same-day reporting if the baby quietens further.",
      },
      {
        type: "memory_trick",
        body: "Symmetrical = Sick from the Start (early, whole baby, chromosomes or congenital infection). Asymmetrical = the placenta Aged late — A for Asymmetrical, A for After. And the tape rule: a FLAT tape = a failing placenta; never chart fundal height without comparing the last three visits.",
      },
      {
        type: "summary",
        body: "- LGA/macrosomia (above the 90th centile or over 4-4.5 kg): suspect diabetes; birth risks are shoulder dystocia, injury, PPH and neonatal hypoglycaemia.\n- FGR (below the 10th centile or faltering trend): symmetrical = early and intrinsic; asymmetrical = late placental insufficiency with head-sparing — the pattern you meet with pre-eclampsia, anaemia, malaria.\n- Detect by serial fundal height — a flat or falling trend is the alarm — and confirm with growth ultrasound and Doppler.\n- The FGR baby has no labour reserve: expect late decelerations and meconium; after birth guard against hypoglycaemia and hypothermia — small is not healthy.",
      },
    ],
    questions: [
      {
        topic: "Fetal Growth Problems",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A fundal height that has not changed in four weeks at 34 weeks should prompt:",
        options: [
          "Nothing — fundal height varies too widely to matter",
          "Immediate caesarean at the health centre",
          "Iron supplementation alone",
          "Growth assessment (ultrasound with Doppler) and high-risk follow-up",
        ],
        correctIndex: 3,
        explanation:
          "A flat trend across four weeks suggests failing fetal growth, most often placental insufficiency — confirm with ultrasound, Doppler and liquor assessment, then plan surveillance and a hospital birth. Ignoring it risks a preventable stillbirth.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Fetal Growth Problems",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Asymmetrical growth restriction with head-sparing suggests:",
        options: [
          "Late placental insufficiency diverting blood to the brain",
          "An early chromosomal problem",
          "A congenital infection from the first weeks",
          "A post-term pregnancy",
        ],
        correctIndex: 0,
        explanation:
          "When the placenta fails late, the fetus protects its brain: the abdomen lags while the head is relatively preserved. Early intrinsic problems (chromosomal, congenital infection) tend to shrink everything proportionately.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Fetal Growth Problems",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which baby is most at risk of shoulder dystocia at delivery?",
        options: [
          "A growth-restricted 2.2 kg term baby",
          "A preterm 1.8 kg baby at 32 weeks",
          "A 4.4 kg baby of a mother with gestational diabetes",
          "A normally grown 3.0 kg baby",
        ],
        correctIndex: 2,
        explanation:
          "Diabetic macrosomia lays fat across the fetal shoulders, so after the head delivers the anterior shoulder impacts against the pubic bone — the classic setup. Small and normally grown babies are not typical dystocia candidates.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Growth Problems",
        front: "Symmetrical vs asymmetrical FGR?",
        back: "Symmetrical — small from early pregnancy, proportionate (chromosomal, congenital infection, malnutrition). Asymmetrical — late placental insufficiency, abdomen lags, head spared (pre-eclampsia, anaemia, malaria).",
      },
      {
        topic: "Fetal Growth Problems",
        front: "Why does the FGR baby labour badly?",
        back: "A chronically stressed placenta leaves no reserve: contractions bring late decelerations, meconium and hypoxia — monitor closely and deliver where fetal surveillance exists.",
      },
      {
        topic: "Fetal Growth Problems",
        front: "Post-birth watchpoints for the FGR baby?",
        back: "Hypoglycaemia (feed early), hypothermia (warm, skin-to-skin) and poor feeding — treat a term FGR baby like a preterm in vigilance.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies",
        year: "8th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "The Baby at Risk",
    lessonTitle: "Fetal Compromise: Recognising Distress",
    description:
      "The signs that the baby is struggling — patterns that demand action for two patients.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe normal fetal heart parameters and the significance of tachycardia, bradycardia and deceleration patterns.",
      "Explain how intermittent auscultation detects compromise and what meconium adds to the picture.",
      "Apply the in-utero resuscitation drill and escalation for delivery decisions.",
    ],
    tags: ["fetal distress", "compromise", "fetal heart rate", "decelerations", "meconium"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "During labour, a baby cannot tell you it is starving for oxygen — but it shows you. The fetal heart rate is the baby's voice, and every midwife must learn its language: what a normal rate sounds like, and which patterns are a call for action.\n\nThis lesson trains your ears (and your Pinard) on the patterns that matter, and the first-response drills that buy time before help arrives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The baby's baseline heart rate sits between 110 and 160 beats per minute. Above 160 — tachycardia — think fever, infection (chorioamnionitis) or early hypoxia; below 110, especially sustained, is late and dangerous hypoxia. Decelerations are dips tied to contractions: early dips that mirror the contraction are usually head compression and benign; sharp, sudden variable dips suggest cord compression — change her position; **late** dips, starting after the contraction and recovering slowly after it, say the placenta is failing and the baby's reserve is draining.\n\nWith intermittent auscultation — your reality in many Ghanaian facilities — listen for a full minute immediately after a contraction, every 15-30 minutes in the first stage and every 5 in the second. Danger signatures: a rate that stays below 110 after a contraction, a baseline drifting upward, or a beat no longer steady. Add the other witnesses: fresh thick meconium with an abnormal heart is a double alarm (compromise now, airway risk at birth); reduced movements before labour, growth restriction and maternal fever raise the suspicion. The first-response drill is **left lateral, stop the oxytocin, IV fluids, call** — reposition, switch off any uterotonic drip, hydrate, reassess within minutes and escalate; if compromise persists, the baby must be born, instrumentally or by caesarean. And prepare the newborn corner: a compromised baby deserves warm, skilled resuscitation waiting for it.",
      },
      {
        type: "clinical_pearl",
        body: "The most under-used resuscitation tool in a district labour ward is the left lateral position. Cord compression and a drifting trace often improve within minutes of turning the mother and stopping the drip — do this before you panic, but never instead of calling for help.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ophelia, term and in established labour on an oxytocin augmentation, has been lying on her back for two hours. Listening immediately after a contraction, you count a fetal heart of 98 that recovers slowly; between contractions it sits at 150. The membranes you ruptured an hour ago released thickly meconium-stained liquor.\n\nWhat is your sequence of actions?\n\nAnswer: This is fetal compromise — a post-contraction dip to 98 with slow recovery (a late-pattern deceleration) plus thick fresh meconium, in a mother supine on oxytocin. First moves: turn her left lateral, stop the oxytocin drip, hang IV fluids and call for review. Re-listen within minutes: if the heart normalises, continue five-minutely auscultation with the drip reviewed and the hospital informed; if it remains abnormal, the baby needs urgent delivery — instrumental if fully dilated and low, or caesarean — with the newborn team warned, because thick meconium threatens the airway. Document your times and patterns.",
      },
      {
        type: "memory_trick",
        body: "The compromise drill is L-O-V-E: Left lateral, Off the oxytocin, Venous fluids running, Evaluate and escalate. Say it like a prayer — it is the closest thing to CPR you can give a baby still inside.",
      },
      {
        type: "summary",
        body: "- Normal baseline 110-160 bpm; tachycardia suggests fever or early hypoxia; sustained bradycardia is late, dangerous hypoxia.\n- Late decelerations — dipping after contractions, recovering slowly — mean placental failure; variable dips suggest cord compression, so reposition.\n- Intermittent auscultation: one full minute straight after a contraction, every 15-30 minutes in the first stage and every 5 in the second; thick fresh meconium plus an abnormal heart is a double alarm.\n- First response: left lateral, stop oxytocin, IV fluids, reassess and call; persistent compromise means deliver — with a warm resuscitation corner ready.",
      },
    ],
    questions: [
      {
        topic: "Fetal Compromise",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal fetal heart rate baseline in labour?",
        options: [
          "80-110 beats per minute",
          "110-160 beats per minute",
          "160-200 beats per minute",
          "60-100 beats per minute",
        ],
        correctIndex: 1,
        explanation:
          "110-160 is the normal baseline. Below 110 is bradycardia — late hypoxia; above 160 is tachycardia — fever, infection or early hypoxia.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Fetal Compromise",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A fetal heart that dips to 100 after each contraction, recovering slowly only after it ends, describes:",
        options: [
          "An early deceleration from head compression",
          "A normal variable pattern",
          "A late deceleration pattern — placental insufficiency and failing reserve",
          "A reassuring accelerative pattern",
        ],
        correctIndex: 2,
        explanation:
          "Dipping after the contraction and recovering slowly is the classic late deceleration — the placenta cannot keep up with contraction stress, and the baby's reserve is draining. Early decelerations mirror contractions and are usually benign.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Fetal Compromise",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You find an abnormal fetal heart pattern in a supine labouring mother on an oxytocin drip. First actions?",
        options: [
          "Left lateral position, stop the oxytocin, IV fluids, reassess and call",
          "Increase the oxytocin drip to finish delivery quickly",
          "Observe for one hour before acting",
          "Immediate forceps at 6 cm dilatation",
        ],
        correctIndex: 0,
        explanation:
          "In-utero resuscitation comes first — reposition, remove the contraction stress, hydrate, then reassess and escalate. More oxytocin adds stress, waiting burns reserve, and instruments at 6 cm are not an option.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Compromise",
        front: "Intermittent auscultation timing in labour?",
        back: "One full minute immediately after a contraction — every 15-30 minutes in the first stage, every 5 minutes in the second.",
      },
      {
        topic: "Fetal Compromise",
        front: "Meaning of late decelerations?",
        back: "The heart dips after the contraction and recovers slowly — the placenta is failing under contraction stress and the baby's reserve is running out.",
      },
      {
        topic: "Fetal Compromise",
        front: "The L-O-V-E drill?",
        back: "Left lateral, Off the oxytocin, Venous fluids (IV running), Evaluate and escalate — in-utero resuscitation before any delivery decision.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-pregnancy",
    moduleTitle: "The Baby at Risk",
    lessonTitle: "When to Refer: The Criteria That Save Lives",
    description:
      "The thresholds for escalation — decisions that depend on your recognition speed.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the antenatal and intrapartum findings that trigger referral from the CHPS level.",
      "Explain the three-delays model and how a prepared referral fights each delay.",
      "Apply the SAND referral standard — stabilise, call ahead, document and send a knowing companion.",
    ],
    tags: ["referral", "escalation", "danger signs", "partograph", "three delays"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At a CHPS compound you are the safety net, and the net's strength is your referral judgement. Send too late and a treatable problem becomes a death; send without preparation and the road itself becomes part of the danger.\n\nThis lesson collects the referral triggers every student midwife should carry in her head, and the craft of a referral that arrives with the patient — stabilised, documented and announced.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Triggers in pregnancy: any danger sign at any visit — severe headache, visual disturbance, convulsion, bleeding, fever, face and hand swelling, reduced fetal movement, breathlessness; BP 140/90 with protein, or 160/110 alone; Hb below 7; severe malaria; grand multiparity; previous caesarean; breech or unstable lie after 36 weeks; twins; growth restriction. Triggers in labour: the partograph crossing the **action line**, labour before 37 weeks, obstruction (no descent with caput and moulding), an abnormal fetal heart, bleeding, suspected rupture, prolonged second stage.\n\nThen refer like a craftsperson. Stabilise before the road: IV fluids for shock, magnesium sulfate loaded for eclampsia, the first antibiotic dose for sepsis — a loading dose travels better than a plan. Write a structured note — situation, background, assessment, what has been done and what you recommend, with times and vitals. Call ahead so the receiving team prepares blood, theatre or newborn care; arrange the fastest safe transport and send a relative who knows her story and can consent. And know the three delays that kill mothers — deciding to seek care, reaching care, receiving adequate care at the facility — because your counselling speeds the first, your preparation shortens the second, your phone call removes the third.",
      },
      {
        type: "clinical_pearl",
        body: "Refer the mother while she can still walk to the vehicle. The referral that waits until she cannot stand is usually the referral that arrives too late — and every hour between your decision and the receiving doctor's hands is an hour you are responsible for.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 am, a 38-year-old gravida 6 at term has been fully dilated and pushing for two hours in your facility. The head has not descended for the past hour: it is still 3/5 palpable above the brim, with a large caput and overlapping skull bones. Her mother-in-law urges, 'let her push more, she is strong'. The district hospital is 45 minutes away.\n\nWhat do you do, and how?\n\nAnswer: This has crossed a referral threshold — obstructed second stage with no descent despite good pushing; more pushing invites rupture, a dead baby and a fistula, not a birth. Do not give oxytocin. Refer now: explain kindly that strength cannot overcome a mechanical block; insert an IV line; catheterise the bladder; write a structured note with times and vitals; call the hospital ahead; and send her with the fastest transport and a relative who can consent, nothing by mouth. The outcome depends on the speed of this decision, not one more hour of pushing.",
      },
      {
        type: "memory_trick",
        body: "A referral must travel S-A-N-D: Stabilised (IV, magnesium sulfate, first antibiotic dose), Announced (call ahead), Noted (structured written note with times, vitals, drugs), Delivered with a Decision-maker (a relative who knows her story and can sign). Sand packs tight — so do these four.",
      },
      {
        type: "summary",
        body: "- Danger-sign triggers: headache, visual symptoms, convulsion, bleeding, fever, face and hand oedema, reduced movements; BP 140/90 with protein or 160/110 alone; Hb below 7; breech, twins or scarred uterus after 36 weeks.\n- Labour triggers: action line crossed, no descent with caput and moulding, preterm labour, abnormal fetal heart, prolonged second stage — and never oxytocin in obstruction.\n- Stabilise before the road: IV access, magnesium sulfate loaded for eclampsia, first antibiotic dose for sepsis; a loading dose travels better than a plan.\n- Refer SAND-style — stabilised, announced, noted, delivered with a knowing relative — and fight the three delays at every step.",
      },
    ],
    questions: [
      {
        topic: "Referral Criteria",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which antenatal finding is an immediate referral trigger at any gestation?",
        options: [
          "Swelling of the face and hands with headache",
          "Evening ankle oedema that clears by morning",
          "Mild heartburn after meals",
          "Nausea that improves by noon",
        ],
        correctIndex: 0,
        explanation:
          "Face and hand swelling with headache signals possible severe pre-eclampsia — a danger sign requiring same-day escalation. Ankle oedema that clears by morning, heartburn and morning nausea are normal pregnancy discomforts.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Referral Criteria",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why give the first dose of antibiotics — or magnesium sulfate — before transfer rather than 'on arrival'?",
        options: [
          "Medicines are cheaper at the health centre",
          "The receiving doctor prefers to start all drugs personally",
          "Family consent is required before the hospital can give drugs",
          "Treatment started before transfer improves survival — the road and facility delays cost hours, and sepsis and eclampsia worsen by the hour",
        ],
        correctIndex: 3,
        explanation:
          "Pre-referral treatment is one of the strongest survival levers in district obstetrics: the first dose buys hours the road would otherwise steal. Delaying treatment until arrival wastes them.",
        courseSlug: "abnormal-pregnancy",
      },
      {
        topic: "Referral Criteria",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The 'three delays' model refers to delay in:",
        options: [
          "Lab results, X-rays and referrals",
          "Deciding to seek care, reaching care, and receiving adequate care at the facility",
          "Booking, scanning and delivery",
          "The first, second and third stages of labour",
        ],
        correctIndex: 1,
        explanation:
          "The three-delays framework explains most maternal deaths: deciding to seek care at home, reaching the facility, and receiving adequate care once there. Counselling, transport planning and call-ahead referrals attack each one in turn.",
        courseSlug: "abnormal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Referral Criteria",
        front: "Six antenatal danger-sign referral triggers?",
        back: "Severe headache, visual disturbance or convulsion, bleeding, fever, face and hand swelling, reduced fetal movement (plus breathlessness and weakness).",
      },
      {
        topic: "Referral Criteria",
        front: "Four labour referral triggers you cannot manage at CHPS level?",
        back: "Action line crossed; no descent with caput and moulding (obstruction); labour before 37 weeks; abnormal fetal heart — plus a prolonged second stage.",
      },
      {
        topic: "Referral Criteria",
        front: "What does SAND remind you about referrals?",
        back: "Stabilised, Announced (call ahead), Noted (structured note with times, vitals and drugs), Delivered with a relative who knows her story and can consent.",
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
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National reference — verify current edition at your facility.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "When Labour Leaves the Script",
    lessonTitle: "Prolonged Labour: The Clock Is Ticking",
    description:
      "Why labour stalls and what the partograph shows — action before hours become danger.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four interacting causes (the 4 Ps) of prolonged labour.",
      "Explain partograph alert and action lines and the response each demands.",
      "Apply a sequence from supportive care through amniotomy and oxytocin to referral, respecting facility capability.",
    ],
    tags: ["prolonged labour", "partograph", "augmentation", "four ps", "fistula"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Labour is meant to move. When it stalls, every standing-still hour costs the mother energy, the baby oxygen, and the tissues trapped between the baby's head and her bladder their blood supply — the anatomy that fails into fistula.\n\nThis lesson unpacks why labour slows, how the partograph turns worry into a plotted line, and the actions — from support to amniotomy, augmentation and referral — that keep a slow labour from becoming a destructive one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Think in Ps. **Power**: contractions too weak or too infrequent — active labour should bring three to four moderate contractions in ten minutes. **Passenger**: a big baby, a persistent malposition like occipito-posterior, or a deflexed head. **Passage**: a pelvis that is small or unforgiving. **Psyche**: exhaustion, fear, an empty stomach and a full bladder — all four interact, because the frightened, dehydrated mother contracts badly.\n\nThe partograph converts time into a picture. Plot dilatation from active labour at about 4-5 cm: the **alert line** runs at 1 cm per hour; the **action line** sits four hours to its right. Cross the alert line and you reassess — the 4 Ps, hydration, position, amniotomy if membranes are intact; cross the action line and you decide — augment with oxytocin if the fault is Power, or refer for caesarean if the head refuses to descend. Augment only where fetal monitoring and caesarean capability exist — never without them, never when obstruction is suspected, never in a scarred uterus outside a monitored hospital. Prolonged labour also opens the infection door, so limit vaginal examinations to about four-hourly, keep technique clean, and support the mother with fluids, rest, pain relief and honest information. Neglect is what turns slow labour into ruptured uterus, sepsis, stillbirth and fistula.",
      },
      {
        type: "clinical_pearl",
        body: "The cervix should open roughly a centimetre an hour once active labour is running. Plot every dilatation at the time you felt it — a line on paper cannot be argued with at 3 am, but a memory can. The partograph is not paperwork; it is the labour's heartbeat monitor.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Adiza, gravida 1, has been in your district facility since 8 pm. At 2 am she is 6 cm — the same as four hours ago. Contractions are two in ten and mild; her membranes are intact. She is exhausted, has drunk nothing for hours, and is frightened. Her dilatation dot sits on the alert line.\n\nWhat is the likely problem, and what sequence do you follow?\n\nAnswer: The most probable fault is Power — weak, infrequent contractions in an exhausted, dehydrated, frightened primigravida with no sign of a descent problem. Resuscitate the labour first: oral or IV fluids, empty bladder, rest, encouragement, analgesia per protocol. Then reassess the 4 Ps with a repeat clean examination after four hours; if membranes are still intact and the head well applied, amniotomy is the natural next step. If contractions stay inadequate after hydration and amniotomy, oxytocin per protocol — appropriate here only because this facility can monitor and has caesarean backup. If the dots still stall to the action line, refer for caesarean. Replot honestly and watch the fetal heart and liquor throughout.",
      },
      {
        type: "memory_trick",
        body: "The 4 Ps of the stalled labour — Power, Passenger, Passage, Psyche — ask in order: is she too tired and empty to contract? Is the baby too big or badly turned? Is the way too small? Then treat the Psyche before you reach for the drip. And the lines: ALERT = assess, ACTION = act.",
      },
      {
        type: "summary",
        body: "- Prolonged labour has four interacting causes: Power, Passenger, Passage and Psyche — resuscitate the Psyche before reaching for drugs.\n- Partograph: plot from active labour (~4-5 cm); alert line 1 cm/hour; action line four hours to its right — alert means reassess, action means decide.\n- Supportive care is treatment: fluids, bladder care, rest and encouragement — then amniotomy, then oxytocin only where monitoring and caesarean capability exist.\n- Neglect costs lives — obstructed labour, rupture, sepsis, stillbirth and fistula: keep examinations sparse, cleanliness strict and the family informed.",
      },
    ],
    questions: [
      {
        topic: "Prolonged Labour",
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
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Prolonged Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A primigravida at 6 cm is exhausted, dehydrated and frightened, with mild contractions two in ten and intact membranes. What is the first intervention?",
        options: [
          "Immediate caesarean section",
          "Resuscitate the labour: fluids, bladder care, rest and encouragement, then reassess",
          "Oxytocin at maximum rate immediately",
          "Vaginal examination every hour to track progress",
        ],
        correctIndex: 1,
        explanation:
          "An empty, frightened mother contracts badly — fluids, a drained bladder and support often restart labour before any drug is needed. Jumping to theatre or maximum oxytocin skips the cheapest step, and hourly examinations only add infection risk.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Prolonged Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is oxytocin augmentation of slow labour generally contraindicated at a CHPS compound?",
        options: [
          "The facility lacks continuous fetal monitoring and caesarean capability — hyperstimulation there is unmanageable",
          "Oxytocin does not work in district facilities",
          "It is too expensive for health insurance coverage",
          "Midwives are never trained to give any uterotonics",
        ],
        correctIndex: 0,
        explanation:
          "Oxytocin can hyperstimulate the uterus and compromise the fetus; that emergency needs monitoring, quick delivery options and blood — capabilities a CHPS compound does not have. Midwives handle uterotonics routinely in the third stage, so training and cost are not the issue.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Prolonged Labour",
        front: "The 4 Ps of prolonged labour?",
        back: "Power (contractions), Passenger (fetal size and position), Passage (pelvis), Psyche (exhaustion, fear, dehydration) — treat the Psyche first.",
      },
      {
        topic: "Prolonged Labour",
        front: "Alert line versus action line?",
        back: "Alert line: 1 cm per hour from active labour (~4-5 cm) — crossing means reassess. Action line: four hours to the right — crossing means decide (augment or refer).",
      },
      {
        topic: "Prolonged Labour",
        front: "Why limit vaginal examinations in prolonged labour?",
        back: "Each examination adds infection risk once membranes are ruptured — about four-hourly with clean technique balances information against germs.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "abnormal-labour",
    moduleTitle: "When Labour Leaves the Script",
    lessonTitle: "Obstructed Labour: Recognising the Block",
    description:
      "The killer of mothers and babies — the signs that the baby simply cannot fit.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe obstructed labour and its common causes.",
      "Explain the significance of caput, moulding, urinary retention and Bandl's ring.",
      "Apply the no-oxytocin, stabilise-and-transfer response that protects the mother from rupture and fistula.",
    ],
    tags: ["obstructed labour", "emergency", "cpd", "moulding", "fistula", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Obstructed labour is the diagnosis that punishes waiting. The baby is mechanically stuck — too big, badly turned, or facing a pelvis it cannot pass — and the uterus responds by contracting harder and harder against a closed door. Every hour grinds the same tissues toward rupture, fistula and death.\n\nIn Ghana obstructed labour remains a major cause of maternal death and of vesico-vaginal fistula. This lesson teaches the signs that the door is shut — and the only honest response to them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The causes: cephalopelvic disproportion (the commonest), persistent occipito-posterior position or a deep transverse arrest, brow and face presentations, a transverse lie with a shoulder presenting or a prolapsed arm, and fetal enlargement such as hydrocephalus.\n\nThe signs that the baby is not coming, whatever the contractions do: **no descent between examinations**, a fully dilated cervix with a head still high, growing caput succedaneum — a boggy scalp swelling that can make the head feel lower than it is — and moulding, skull bones overlapping under the pressure of force, a bladder she cannot empty because the head crushes the urethra, a mother becoming exhausted and silent, foul-smelling liquor, a deteriorating fetal heart, and the red flag of red flags: a rising, tender, palpable ridge across the abdomen — **Bandl's ring**, the pathological retraction ring that says the uterus is thinning at its lower segment and rupture is near.\n\nYour response must be firm: obstruction is resolved by caesarean, not by patience, and never by oxytocin — augmenting a block drives the uterus toward rupture. At the referring level: insert an IV line, pass a catheter gently to drain the bladder and leave it in, give nothing by mouth, give the first antibiotic dose per protocol, explain to the family that the baby cannot pass this way and surgery is the only safe route, call ahead and transfer urgently. The baby may already be lost; your decisions now protect the mother from rupture, sepsis and a fistula that would change her life forever.",
      },
      {
        type: "clinical_pearl",
        body: "Moulding and caput are not trophies of hard labour — they are the skull's surrender to force. If two consecutive examinations show the same station in a contracting uterus, the door is shut: stop any oxytocin, catheterise, call, transfer. Never send an obstructed labour to 'push through the night'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 4 pm Gifty, gravida 2, has been fully dilated and pushing for three hours at your health centre. The abdomen still shows 3/5 of the head above the brim; on vaginal assessment there is a large caput and the skull bones overlap. She has not passed urine for six hours, and the liquor draining is thin and offensive. She has become quiet and still. A relative recalls that her first baby 'also took long' but was born at home.\n\nWhat is your assessment, and what are the next four actions?\n\nAnswer: This is obstructed labour — no descent despite full dilatation and strong pushing, with caput and moulding from a skull forced against resistance, a bladder compressed dry, offensive liquor signalling infection and a mother sliding into exhaustion. The next actions: no oxytocin and no instrumental attempt at this level; insert an IV line and pass a catheter to drain the bladder, leaving it in place; give the first antibiotic dose per protocol; then call the referral hospital ahead and transfer urgently with a written note and a relative who can consent — explaining to the family that the baby cannot pass and the only safe route now is surgery. Delay beyond this brings rupture, sepsis and fistula.",
      },
      {
        type: "memory_trick",
        body: "The baby that is not coming makes its own signs: the head swells (caput), the skull overlaps (moulding), the bladder is crushed dry, the mother goes quiet, and the uterus draws a line across the abdomen (Bandl's ring). Five knocks on a shut door = theatre — never oxytocin.",
      },
      {
        type: "summary",
        body: "- Causes: cephalopelvic disproportion (commonest), malposition (occipito-posterior, deep transverse arrest), brow and face presentations, shoulder presentation with prolapsed arm, hydrocephalus.\n- Signs of the shut door: no descent between examinations with full dilatation, caput and moulding, urinary retention from urethral compression, offensive liquor, exhaustion — late: Bandl's ring and a deteriorating fetal heart.\n- Obstruction is treated by caesarean — never oxytocin, never instrumental birth at a low-level facility, never one more hour of pushing.\n- Package for transfer: IV line, catheter draining and in situ, first antibiotic dose, nil by mouth, call-ahead — protect the mother from rupture, sepsis and fistula.",
      },
    ],
    questions: [
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which picture most strongly indicates obstructed labour?",
        options: [
          "Cervix 8 cm after four hours with improving contractions",
          "Full dilatation with rapid descent after amniotomy",
          "A second stage of 30 minutes in a multipara",
          "No descent between two examinations despite full dilatation, strong contractions, caput and moulding",
        ],
        correctIndex: 3,
        explanation:
          "A fixed station with full dilatation and good contractions, plus the skull showing pressure changes, means the baby is mechanically stuck — obstruction until proven otherwise. The other pictures show progress.",
        courseSlug: "abnormal-labour",
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
          "Bandl's ring is the pathological retraction ring: the upper segment thickens while the lower thins — the last warning before uterine rupture. It demands immediate transfer for theatre, not reassurance.",
        courseSlug: "abnormal-labour",
      },
      {
        topic: "Obstructed Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must oxytocin never be given in obstructed labour?",
        options: [
          "It stops lactation permanently",
          "It causes fever in the mother",
          "It is reserved only for the third stage",
          "It drives forceful contractions against a mechanical block, inviting uterine rupture",
        ],
        correctIndex: 3,
        explanation:
          "The uterus is already contracting against a baby that cannot descend; oxytocin multiplies that force on a thinning lower segment — the direct route to rupture and maternal death. Oxytocin's routine home is indeed the third stage, but the danger here is mechanical, not timing.",
        courseSlug: "abnormal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Obstructed Labour",
        front: "Define obstructed labour.",
        back: "A mechanical impediment to birth despite a contracting uterus — the baby cannot fit through the pelvis because of CPD, malposition or fetal enlargement.",
      },
      {
        topic: "Obstructed Labour",
        front: "What is Bandl's ring?",
        back: "A rising, palpable ridge between the thickened upper and thinned lower uterine segments — the pathological retraction ring warning of imminent rupture.",
      },
      {
        topic: "Obstructed Labour",
        front: "Why is a urinary catheter part of obstructed-labour care?",
        back: "The impacted head compresses the urethra; gentle catheterisation drains the bladder, relieves pressure and stays in place during transfer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles Midwifery",
        year: "17th edition",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },
];
