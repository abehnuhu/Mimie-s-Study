// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 2 — Batch B
// 19 lessons anchored to prisma/seed-data/anchors/y2s2-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drug Classes You'll Meet Everywhere",
    lessonTitle: "Antipyretics and Anti-Inflammatories",
    description:
      "Paracetamol and the NSAIDs — the two families that cool fevers and calm swelling, and the situations where one is clearly the safer choice.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how paracetamol and the NSAIDs lower fever through prostaglandin chemistry.",
      "Explain why NSAIDs are held in late pregnancy and why aspirin is avoided in children with fever.",
      "Apply safe fever-management counselling to a woman at ANC or on the ward.",
    ],
    tags: ["antipyretics", "nsaids", "paracetamol", "fever", "safe medication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Fever is the symptom you will meet most on any ward in Ghana — malaria, a throat infection, the post-operative mother whose temperature climbs on day two. The two drug families that cool it are paracetamol and the NSAIDs, the non-steroidal anti-inflammatory drugs.\n\nThis lesson shows you how they work, how they differ, and the times one is clearly safer than the other. Knowing the difference turns you from a nurse who simply gives 'fever medicine' into one who understands exactly what the tablet is doing — and what it is not doing.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Fever begins when infection triggers chemicals that reset the hypothalamus — the body's thermostat — to a higher setting, and prostaglandins carry the reset. **Paracetamol** works mainly in the brain, blocking prostaglandin production there: it brings fever down and eases pain, but barely touches inflammation, because it does not switch prostaglandins off at the inflamed site itself. That is why an arthritic knee may improve with ibuprofen and shrug at paracetamol.\n\n**NSAIDs** — ibuprofen, diclofenac, aspirin — block the prostaglandin-making enzyme all over the body, so they lower fever, relieve pain and dampen inflammation at once. The same wide action explains their side effects: stomach irritation, kidney strain in the dehydrated patient, and easier bruising. In pregnancy, paracetamol is the usual choice; NSAIDs are avoided in the third trimester because they can close the baby's ductus arteriosus early and reduce the amniotic fluid. Aspirin is never given to children with fever because of Reye's syndrome, a rare but deadly liver-and-brain illness. One supervised exception: low-dose aspirin for women at high risk of pre-eclampsia is prescribed treatment, not an over-the-counter habit.",
      },
      {
        type: "clinical_pearl",
        body: "A fever medicine is comfort, not a cure. It cools the child but does nothing to the malaria parasites or the pus. Always hunt the cause — test for malaria, examine the chest — and treat the source, not just the thermometer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a busy ANC, a woman at 34 weeks tells you she has been taking ibuprofen from the chemical seller's shop for backache — two tablets three times a day for a week. Her blood pressure is normal.\n\nWhat is the concern with this drug at this stage of pregnancy, and what should she use instead?\n\nAnswer: At 34 weeks, NSAIDs can close the baby's ductus arteriosus early and reduce the amniotic fluid, so she should stop and switch to paracetamol at normal doses. Her backache deserves assessment and the prescriber should confirm the plan today — but the first counselling point is clear: no more ibuprofen from this week.",
      },
      {
        type: "memory_trick",
        body: "Paracetamol is the fan; NSAIDs are the fire brigade. A fan cools the room but leaves the fire burning. The fire brigade goes to the source — damping inflammation as well as fever — but brings its own damage: stomach, kidneys, platelets.",
      },
      {
        type: "summary",
        body: "- Fever = prostaglandins resetting the hypothalamic thermostat.\n- Paracetamol acts centrally: antipyretic and analgesic, weak on inflammation, the usual choice in pregnancy.\n- NSAIDs act everywhere: fever, pain and inflammation — with gastric, renal and bleeding costs.\n- Avoid NSAIDs in the third trimester (ductus arteriosus, amniotic fluid); caution from about 20 weeks.\n- No aspirin for fever in children — Reye's syndrome.\n- Always treat the cause of the fever, not just the number.",
      },
    ],
    questions: [
      {
        topic: "Antipyretics and Anti-Inflammatories",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks why her child's swollen, tender knee improved with ibuprofen but not with paracetamol. What is the best explanation?",
        options: [
          "Paracetamol is a weaker painkiller than ibuprofen in all situations",
          "Ibuprofen blocks prostaglandins at the inflamed joint, damping swelling as well as pain; paracetamol works mainly in the brain",
          "Ibuprofen also kills the germs causing the swelling",
          "Paracetamol is not absorbed properly from swollen limbs",
        ],
        correctIndex: 1,
        explanation:
          "NSAIDs switch off prostaglandin production at the inflamed site, relieving both pain and swelling. Paracetamol acts centrally, so it is a good antipyretic and analgesic but a weak anti-inflammatory.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Antipyretics and Anti-Inflammatories",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which antipyretic is the usual first choice for a woman at 30 weeks of pregnancy?",
        options: [
          "Paracetamol at usual doses",
          "Ibuprofen",
          "Diclofenac",
          "Aspirin 300 mg",
        ],
        correctIndex: 0,
        explanation:
          "Paracetamol has long been the standard antipyretic choice in pregnancy at usual doses. NSAIDs are avoided in later pregnancy, and aspirin is reserved for specific prescribed indications only.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Antipyretics and Anti-Inflammatories",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 36 weeks has been taking regular ibuprofen for a week. Which fetal risk are you most worried about?",
        options: [
          "A neural tube defect, since organ formation was disrupted",
          "Neonatal addiction to NSAIDs",
          "Early closure of the ductus arteriosus and reduced amniotic fluid",
          "Excessive fetal hair growth",
        ],
        correctIndex: 2,
        explanation:
          "Near term, NSAIDs can constrict and close the fetal ductus arteriosus and reduce amniotic fluid production. Neural tube defects belong to first-trimester injuries, and the other options are not NSAID effects.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Antipyretics",
        front: "How does paracetamol lower fever?",
        back: "It blocks prostaglandin production in the brain (hypothalamus), lowering the reset thermostat. It relieves fever and pain but has little anti-inflammatory action.",
      },
      {
        topic: "Antipyretics",
        front: "Why are NSAIDs avoided in the third trimester of pregnancy?",
        back: "They can close the fetal ductus arteriosus early and reduce amniotic fluid. Guidance increasingly cautions against them from about 20 weeks unless specifically prescribed.",
      },
      {
        topic: "Antipyretics",
        front: "Which fever drug must never be given to a child, and why?",
        back: "Aspirin — risk of Reye's syndrome, a rare but deadly liver-and-brain illness in children and teenagers with fever.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        note: "Dosing and fever-management guidance for children.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Ghanaian formulary guidance — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drugs for the Body Systems",
    lessonTitle: "Cardiovascular Drugs: The Pressure Controllers",
    description:
      "Antihypertensives, diuretics and heart drugs — the agents you will chart most often, and the small checks that keep them safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the main antihypertensive classes and the pregnancy-safe options.",
      "Explain the pre-dose checks and post-dose monitoring for common cardiovascular drugs.",
      "Apply the principles of treating severe hypertension in a pregnant woman.",
    ],
    tags: ["antihypertensives", "cardiovascular", "methyldopa", "nifedipine", "diuretics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On Ghana's medical wards, hypertension is everywhere — the young stroke patient, the grandmother in heart failure, the pregnant woman whose pressure is climbing toward pre-eclampsia. The drugs that control it are among the most frequently charted medicines you will handle.\n\nThis lesson meets the main pressure-lowering families: how they work, which are safe in pregnancy, and the small checks you make before and after giving them. Those checks, done properly, are what keep potent drugs safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Methyldopa** is the old faithful of pregnancy hypertension — it calms sympathetic drive from the brainstem, with decades of reassuring safety data. **Labetalol** blocks beta- and alpha-receptors, slowing the heart and opening vessels; check the pulse before every dose. **Nifedipine**, a calcium-channel blocker, relaxes arterial muscle — and for severe hypertension in pregnancy, WHO recommends prompt treatment with IV hydralazine or labetalol, or oral nifedipine, lowering the pressure steadily (commonly toward 130–150 systolic / 80–100 diastolic). ACE inhibitors and ARBs — names ending in -pril and -sartan — are excellent everyday drugs and absolutely contraindicated in pregnancy, where they damage fetal kidneys.\n\nOutside pregnancy the ladder is longer. Loop diuretics like **furosemide** pull salt and water through the kidneys — invaluable in heart failure, with potassium loss as the price. **Digoxin** strengthens a failing heart's squeeze and slows its rate; hold and report if the pulse is below 60. Two habits carry across all of these: check the blood pressure or pulse before giving, because a drug given when the pressure is already low becomes a fall — and in pregnancy, fetal distress. And counsel the chronic hypertension patient that these drugs control but never cure: stopping because 'I feel fine' is how the stroke returns.",
      },
      {
        type: "clinical_pearl",
        body: "Antihypertensives treat a number the patient cannot feel. The woman who feels perfectly well at 170/110 is the one who needs the most persuasion to keep swallowing her tablets — silence is hypertension's favourite disguise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 34 weeks is admitted with headache and a blood pressure of 172/114, protein ++ on dipstick. The midwife in charge asks you to give oral nifedipine 10 mg as prescribed and prepare magnesium sulfate per protocol.\n\nWhat do you check before the dose, and what is the goal of treatment?\n\nAnswer: Confirm the reading with the right cuff and check the fetal heart first. Then re-check the blood pressure at your unit's intervals — nifedipine can drop pressure quickly, and a precipitous fall reduces placental blood flow. The goal is a controlled reduction to your protocol's range, while magnesium sulfate protects against seizures and delivery is planned.",
      },
      {
        type: "memory_trick",
        body: "Pregnancy's safe pressure trio: **M-L-N — Methyldopa, Labetalol, Nifedipine.** The -prils and -sartans are strictly out; in a pregnant chart they spell fetal kidney damage.",
      },
      {
        type: "summary",
        body: "- Methyldopa, labetalol and nifedipine are the pregnancy-safe pressure controllers.\n- ACE inhibitors and ARBs are contraindicated in pregnancy — fetal renal damage.\n- Severe hypertension in pregnancy: IV hydralazine or labetalol, or oral nifedipine, lowered steadily, never abruptly.\n- Diuretics (furosemide) drain fluid in heart failure — watch potassium and dehydration.\n- Check BP and pulse before each dose; hold digoxin below a pulse of about 60.\n- Hypertension drugs control, never cure — adherence counselling saves lives.",
      },
    ],
    questions: [
      {
        topic: "Cardiovascular Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which antihypertensive has the longest safety record in pregnancy?",
        options: [
          "Propranolol",
          "Enalapril",
          "Methyldopa",
          "Losartan",
        ],
        correctIndex: 2,
        explanation:
          "Methyldopa has decades of use and safety data in pregnancy, acting centrally to calm sympathetic outflow. Enalapril and losartan (ACE inhibitor and ARB) are contraindicated in pregnancy.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Cardiovascular Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A pregnant woman's chart shows a new prescription for lisinopril. What do you do?",
        options: [
          "Give it — ACE inhibitors are first-line in pregnancy",
          "Crush it and give half the dose",
          "Give it only after checking the pulse",
          "Hold the dose and inform the prescriber — ACE inhibitors are contraindicated in pregnancy",
        ],
        correctIndex: 3,
        explanation:
          "ACE inhibitors damage developing fetal kidneys and are contraindicated throughout pregnancy. Hold, question, and document; the prescriber switches to a pregnancy-safe agent such as methyldopa, labetalol or nifedipine.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Cardiovascular Drugs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are treating severe hypertension (172/114) in a woman at 34 weeks. What is the goal of drug treatment?",
        options: [
          "Lower the pressure steadily into a safe range without a precipitous fall",
          "Normalize to 110/70 as fast as possible",
          "Lower only the diastolic reading",
          "Wait until the diastolic exceeds 120 before treating",
        ],
        correctIndex: 0,
        explanation:
          "Severe hypertension in pregnancy needs prompt but controlled reduction (commonly toward 130–150/80–100) with IV hydralazine or labetalol, or oral nifedipine. A sudden crash in pressure reduces placental blood flow and can shock both mother and fetus.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Cardiovascular Drugs",
        front: "Name three antihypertensives considered safe in pregnancy.",
        back: "Methyldopa, labetalol, and nifedipine — with hydralazine available intravenously for severe cases.",
      },
      {
        topic: "Cardiovascular Drugs",
        front: "Why are ACE inhibitors (-pril) and ARBs (-sartan) banned in pregnancy?",
        back: "They damage developing fetal kidneys, causing reduced amniotic fluid, renal failure and fetal or neonatal death.",
      },
      {
        topic: "Cardiovascular Drugs",
        front: "What must you check before giving a beta-blocker like labetalol?",
        back: "The pulse (and blood pressure). Hold and report if the heart rate is below the ordered hold point — commonly about 60 — or the pressure is already low.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241548274",
      },
      {
        organization: "WHO",
        title: "Hypertension fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
        note: "Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drugs for the Body Systems",
    lessonTitle: "Endocrine Drugs: Balancing Hormones",
    description:
      "Insulin, metformin and levothyroxine — medicines that stand in for the body's own chemistry, especially when pregnancy bends it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe insulin types, storage and injection-site rotation.",
      "Explain how metformin and insulin differ in gestational diabetes management.",
      "Apply hypoglycaemia recognition and the 15/15 response.",
    ],
    tags: ["insulin", "endocrine", "metformin", "levothyroxine", "gestational diabetes"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When the endocrine system falters, medicines step in to imitate its chemistry: insulin for the pancreas, metformin to coax the liver and muscles, levothyroxine for the thyroid. You will meet all three in antenatal clinics, because pregnancy itself bends hormones out of shape — gestational diabetes being the classic example.\n\nThis lesson covers what each drug does, how it is stored and given, and the emergency you must never miss: hypoglycaemia.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Insulin** pushes glucose into cells and does not cross the placenta — the classic choice when diet fails to control gestational diabetes. Rapid-acting insulins are clear and work within minutes, covering meals; intermediate insulins like isophane are cloudy and cover the day; some mixes combine both. Unopened insulin sleeps in the fridge at 2–8 °C; the pen in use lasts about a month at cool room temperature. Rotate injection sites within one region — repeating the exact spot grows lumpy tissue that swallows doses unpredictably.\n\n**Metformin** makes the body more sensitive to its own insulin and tells the liver to release less glucose. It is a tablet that crosses the placenta and controls many women with gestational diabetes; alone it does not cause hypoglycaemia, though stomach upset is common. **Levothyroxine** replaces thyroid hormone: under-treated hypothyroidism harms the baby's brain development, so the TSH is checked every trimester and the dose often rises. Teach the ritual — morning, water only, at least half an hour before breakfast — because food, especially iron tablets, blocks its absorption.",
      },
      {
        type: "clinical_pearl",
        body: "Hypoglycaemia kills faster than hyperglycaemia. Cold sweat, trembling, hunger or sudden confusion in anyone on insulin — think sugar first: check with a glucometer and act before you theorize.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman with gestational diabetes at 34 weeks, on twice-daily mixed insulin, is found on the postnatal ward the morning after delivery: sweating, trembling and confused, her breakfast tray untouched.\n\nWhat is your immediate response, and what is the discharge teaching point?\n\nAnswer: Insulin was given but breakfast never came — treat hypoglycaemia now: 15 g of fast sugar (three teaspoons in water or a sweet drink), recheck at 15 minutes, then a real meal, and re-test. After delivery insulin needs drop sharply with the placenta gone, so the prescriber re-tunes the dose. The lasting teaching: never take insulin without food on the way, always carry sugar, know your own warning signs.",
      },
      {
        type: "memory_trick",
        body: "Insulin is a **key**: it opens the cell door so glucose can step inside. Too few keys, glucose loiters in the blood; too many keys with no meal coming, glucose vanishes — and the brain, which cannot store sugar, runs dry in minutes.",
      },
      {
        type: "summary",
        body: "- Insulin does not cross the placenta — the classic choice in pregnancy diabetes.\n- Rapid = clear, before meals; intermediate = cloudy, background cover.\n- Unopened insulin in the fridge at 2–8 °C; in-use pen about a month at room temperature.\n- Rotate sites — repeated spots lump up and steal the dose.\n- Metformin: oral, improves insulin sensitivity, no hypoglycaemia alone, GI upset common.\n- Levothyroxine: morning, empty stomach, 30+ minutes before food, away from iron; TSH each trimester.\n- Suspected hypoglycaemia: 15 g fast sugar, recheck at 15 minutes, then food.",
      },
    ],
    questions: [
      {
        topic: "Endocrine Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is insulin preferred over most oral glucose-lowering drugs in pregnancy?",
        options: [
          "It does not cross the placenta, so the baby is not exposed to the drug",
          "It is cheaper than tablets",
          "It cannot cause hypoglycaemia",
          "It works without injections",
        ],
        correctIndex: 0,
        explanation:
          "Insulin molecules are too large to cross the placenta, so the mother's glucose is controlled without direct drug exposure of the fetus. It certainly can cause hypoglycaemia, which is why meals and timing matter.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Endocrine Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman has injected the same small patch of her thigh daily for a month; a rubbery lump has grown there. What is the concern?",
        options: [
          "She has developed an insulin allergy",
          "Lipohypertrophy — absorption from over-used, lumpy sites becomes unpredictable",
          "Insulin has leaked out of the bottle",
          "She must switch to tablets today",
        ],
        correctIndex: 1,
        explanation:
          "Repeating the exact same injection spot causes fatty lumps (lipohypertrophy). Injecting into them delays and randomizes absorption — a hidden cause of erratic glucose levels. Rotate within regions.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Endocrine Drugs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When should levothyroxine be taken in relation to breakfast?",
        options: [
          "With the first bite of food",
          "Crushed into the morning tea",
          "On an empty stomach at least 30 minutes before food, and away from iron tablets",
          "Only at bedtime with a snack",
        ],
        correctIndex: 2,
        explanation:
          "Food — and iron especially — binds levothyroxine in the gut and blocks absorption. The ritual: morning, water only, at least 30 minutes before breakfast, with iron doses separated by several hours.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Endocrine Drugs",
        front: "Rapid vs intermediate insulin — appearance and timing?",
        back: "Rapid-acting: clear, begins within minutes, covers meals. Intermediate (isophane/NPH): cloudy, slower onset, background cover through the day.",
      },
      {
        topic: "Endocrine Drugs",
        front: "Does metformin cause hypoglycaemia when used alone?",
        back: "No — it reduces the liver's glucose output and improves insulin sensitivity but does not force glucose into cells on its own. Risk rises when combined with insulin or sulfonylureas.",
      },
      {
        topic: "Endocrine Drugs",
        front: "The 15/15 rule?",
        back: "15 g of fast-acting sugar, recheck the glucose in 15 minutes, repeat if still low, then follow with a meal or snack to hold the level up.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Diagnostic criteria and classification of hyperglycaemia first detected in pregnancy",
        year: "2013",
      },
      {
        organization: "WHO",
        title: "Diabetes fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
        note: "Check for the latest update.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drugs for the Body Systems",
    lessonTitle: "Respiratory Drugs: Opening the Airways",
    description:
      "Relievers and preventers — the inhalers that turn a wheeze back into breath, and the technique that makes them work.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish reliever (bronchodilator) from preventer (inhaled steroid) and describe each one's job.",
      "Explain inhaled-steroid technique points, mouth rinsing and spacer use.",
      "Apply asthma-in-pregnancy counselling.",
    ],
    tags: ["bronchodilators", "respiratory", "asthma", "inhalers", "salbutamol", "inhaled steroids"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Asthma can arrive in any clinic, in any month of pregnancy — sometimes quieter, sometimes terrifyingly worse. Its medicines live in small plastic devices, and the difference between a well-controlled patient and a midnight emergency is often not the drug but the technique.\n\nThis lesson covers the two working families — relievers and preventers — what each does inside the airway, and the coaching that turns a device into treatment.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An asthma attack is bronchial muscle clamped tight around inflamed, mucus-clogged airways. The **reliever** — salbutamol, a short-acting beta-2 agonist — attaches to receptors on that muscle and relaxes it within minutes; it is the rescue spray. Its side effects come from the same receptors elsewhere: trembling hands, a racing heart, low potassium at high doses. You know salbutamol in another costume — the tocolytic drip holding a threatened preterm labour: the same muscle-relaxing chemistry aimed at the uterus.\n\nThe **preventer** — an inhaled corticosteroid such as beclometasone — does nothing dramatic in the moment. Taken daily, it calms the airway lining so attacks become rarer and milder; it only works taken every day, even when the chest feels perfect. Stopping it because the patient 'feels fine' is removing the roof because the rain ended. Rinse and spit after each dose to prevent oral thrush, and use a spacer — it catches the dose the throat would otherwise swallow. In pregnancy, reassure firmly: uncontrolled asthma starves the baby of oxygen far more than any inhaler ever will.",
      },
      {
        type: "clinical_pearl",
        body: "A reliever needed every day is the sound of an uncontrolled airway. Daily reliever dependence means the preventer needs review — report the pattern; don't just refill the spray.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 26 weeks with asthma stopped her beclometasone preventer two months ago because 'my chest was fine.' This week she has needed salbutamol twice a day and woke once at night coughing.\n\nWhat does the pattern tell you, and what do you say to her?\n\nAnswer: Night symptoms and twice-daily reliever use are the signature of uncontrolled asthma — the preventer was quietly working, and stopping it unmasked the inflammation. Restart it exactly as prescribed, take it daily with a spacer, rinse afterwards, and keep the reliever for rescue. In pregnancy the stakes rise: poor control threatens the baby's oxygen, while inhaled preventers at prescribed doses are considered safe.",
      },
      {
        type: "memory_trick",
        body: "Reliever = **fire extinguisher**; preventer = **roof repair**. The extinguisher saves you while the flames are rising; the repaired roof is what stops the next fire. Never tear down the roof in the middle of the rainy season.",
      },
      {
        type: "summary",
        body: "- Relievers (salbutamol) relax bronchial muscle within minutes — rescue use only.\n- Daily reliever dependence signals uncontrolled asthma — escalate for review.\n- Preventers (inhaled corticosteroids) calm airway inflammation every day; the effect is silent but essential.\n- Rinse and spit after steroids to prevent oral thrush; spacers improve delivery for all ages.\n- In pregnancy: continue both — uncontrolled asthma is the greater danger to the baby.\n- Acute severe asthma: nebulised salbutamol with oxygen, steroids, and assess for referral.",
      },
    ],
    questions: [
      {
        topic: "Respiratory Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the main purpose of a daily inhaled corticosteroid preventer?",
        options: [
          "To open the airway within minutes during an attack",
          "To replace the reliever inhaler entirely",
          "To treat oral thrush",
          "To reduce airway inflammation over time so attacks become rarer and milder",
        ],
        correctIndex: 3,
        explanation:
          "Preventers act slowly on the inflammation underneath asthma. They prevent nothing in the moment of an attack — that is the reliever's job — but taken daily they make attacks rarer and milder.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Respiratory Drugs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman with asthma wants to stop her inhalers because she fears harming the baby. What is the correct counselling?",
        options: [
          "Uncontrolled asthma is more dangerous to the baby than prescribed inhalers; continue them as prescribed",
          "Agree — stop everything until after delivery",
          "Switch to oral steroids only, at double dose",
          "Halve all doses quietly without telling the prescriber",
        ],
        correctIndex: 0,
        explanation:
          "Poorly controlled asthma reduces the oxygen supply to the fetus, which is the bigger risk. Inhaled relievers and preventers at prescribed doses are considered safe in pregnancy; any change should involve her prescriber.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Respiratory Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why rinse and spit after each dose of beclometasone?",
        options: [
          "To speed the drug into the blood",
          "To prevent oral thrush and a hoarse voice from steroid residue in the mouth and throat",
          "To clean the teeth between meals",
          "To strengthen the swallowing reflex",
        ],
        correctIndex: 1,
        explanation:
          "Steroid particles left in the mouth feed candida and irritate the vocal cords. A simple rinse-and-spit after each dose prevents oral thrush and dysphonia without losing any of the lung dose.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Respiratory Drugs",
        front: "Reliever vs preventer — one line each.",
        back: "Reliever (salbutamol): beta-2 agonist that relaxes airway muscle in minutes, for rescue. Preventer (inhaled corticosteroid): daily anti-inflammatory that makes attacks rarer — keep taking it even when well.",
      },
      {
        topic: "Respiratory Drugs",
        front: "Three side effects of salbutamol to warn about.",
        back: "Tremor, palpitations or a racing heart, and low potassium at high doses — plus, when given systemically, relaxation of the uterine muscle (the tocolytic effect).",
      },
      {
        topic: "Respiratory Drugs",
        front: "Why does a spacer help with inhalers?",
        back: "It holds the mist so the patient breathes it in slowly instead of swallowing it — improving delivery to the lungs, especially in children and acute attacks.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Asthma fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/asthma",
        note: "Check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Package of Essential Noncommunicable Disease Interventions (PEN)",
        year: "2020",
      },
      {
        organization: "Global Initiative for Asthma (GINA)",
        title: "Global Strategy for Asthma Management and Prevention",
        note: "Updated annually — check current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Special Situations",
    lessonTitle: "Psychotropic Medications: An Introduction",
    description:
      "Antidepressants, antipsychotics and anxiolytics in plain language — how they help, what to watch, and how to fight the stigma that stops people swallowing them.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the main psychotropic families and their time-to-effect.",
      "Explain key monitoring points: early activation, extrapyramidal effects, sedation and dependence.",
      "Apply stigma-free counselling that supports adherence.",
    ],
    tags: ["psychotropics", "mental health", "ssris", "antipsychotics", "anxiolytics", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "About one person in four will face a mental health condition in a lifetime — and postnatal depression, anxiety and psychosis sit squarely inside midwifery territory. The medicines that treat them are ordinary tools of recovery, yet stigma makes patients hide them, stop them, and suffer twice.\n\nThis lesson introduces the three families you will meet — antidepressants, antipsychotics and anxiolytics — in plain, judgment-free language, with the watching points that keep them safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Antidepressants**: the SSRIs (sertraline, fluoxetine) raise serotonin signalling by blocking its re-uptake. They are first-line for depression and anxiety, and sertraline is among the preferred choices in pregnancy and breastfeeding. Patients must know two things: benefit takes two to four weeks, and stopping must be gradual and supervised — abrupt stop brings withdrawal. In younger adults, watch the early weeks for new agitation or thoughts of self-harm and report them.\n\n**Antipsychotics** (risperidone, haloperidol) settle the disordered thinking of psychosis. Watch for extrapyramidal effects — the stiff, shuffling body or restless legs — and, long-term, weight gain and metabolic changes. The **benzodiazepines**, like diazepam, calm acute anxiety fast, but they sedate, interact dangerously with alcohol, and create dependence when used for weeks; you have met IV diazepam in obstetrics, the old eclampsia treatment before magnesium took over. Whatever the drug, the midwife's work is the same: guard confidentiality, confront stigma gently — the brain is an organ like any other, and its medicine is spectacles for poor vision, not a confession of weakness — and check adherence without interrogating.",
      },
      {
        type: "clinical_pearl",
        body: "Ask the quiet question that catches non-adherence: 'Some people find these tablets hard to keep taking — how are you managing with yours?' Curiosity, not accusation, invites the truthful answer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother two months postnatal was started on sertraline for depression. She confesses she stopped after five days because 'I saw no change, and my husband says I should just pray more.' She is tearful; the baby is well cared for.\n\nWhat went wrong in the first week, and what do you tell her?\n\nAnswer: Sertraline needs two to four weeks to work — five days is far too early to judge — and abrupt stopping is discouraged. Affirm that faith and treatment can walk together: praying more and taking the medicine are not rivals. Encourage a prescriber review to restart, book follow-up, and involve her husband so the home supports rather than shames the treatment. Treated, postnatal depression lifts; untreated, it harms mother and baby.",
      },
      {
        type: "memory_trick",
        body: "SSRIs are a **garden**: the seed takes two to four weeks before green shows — never dig it up on day five. Antipsychotics: watch the **body's volume knob** — stiffness and restlessness. Benzos: **fast friends, bad housemates** — helpful for a night, trouble if they move in.",
      },
      {
        type: "summary",
        body: "- SSRIs: first-line, 2–4 weeks to work, never stop abruptly, watch early agitation in young adults.\n- Antipsychotics: control psychosis; watch extrapyramidal stiffness and restlessness plus metabolic changes.\n- Benzodiazepines: rapid calm but sedation and dependence — short courses, never with alcohol.\n- Stigma is a treatment-killer; model calm, confidential, non-judgmental care.\n- Faith and pharmacology are not enemies — support both, and involve the family.\n- Report thoughts of self-harm immediately; confidentiality still governs everything.",
      },
    ],
    questions: [
      {
        topic: "Psychotropic Medications",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient stopped her SSRI after one week, saying it was not working. What explains this best?",
        options: [
          "SSRIs typically take two to four weeks to show benefit",
          "SSRIs work only in men",
          "The dose was clearly too low ever to work",
          "SSRIs act instantly, so she needs a different diagnosis",
        ],
        correctIndex: 1,
        explanation:
          "SSRIs need two to four weeks of regular use before benefit appears, and stopping abruptly is discouraged. Early stop is the commonest reason patients conclude the drug 'does nothing.'",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Psychotropic Medications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on risperidone develops a stiff, shuffling walk and cannot keep her legs still when seated. What are these?",
        options: [
          "Expected signs that the drug is curing the psychosis",
          "Simple tiredness from better sleep",
          "Extrapyramidal side effects — report for review so treatment can be adjusted",
          "The start of a new psychiatric illness",
        ],
        correctIndex: 2,
        explanation:
          "Stiffness, shuffling gait and restlessness (akathisia) are extrapyramidal side effects of antipsychotics. They are dose-related, distressing and treatable — the prescriber can adjust the drug or add corrective treatment.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Psychotropic Medications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about benzodiazepines such as diazepam is correct?",
        options: [
          "They are safe to combine with alcohol for a stronger effect",
          "They are the first choice for long-term antidepressant therapy",
          "They have no sedative effect",
          "They calm acute anxiety quickly but can cause dependence and dangerous sedation with alcohol",
        ],
        correctIndex: 3,
        explanation:
          "Benzodiazepines act fast on anxiety but sedate, interact dangerously with alcohol, and create dependence when used beyond short courses. They are not antidepressants and belong in brief, supervised use.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Psychotropic Medications",
        front: "How long before an SSRI starts working, and the rule about stopping?",
        back: "Two to four weeks for benefit; never stop abruptly — taper with the prescriber to avoid withdrawal and rebound.",
      },
      {
        topic: "Psychotropic Medications",
        front: "What are extrapyramidal side effects?",
        back: "Drug-induced movement problems from antipsychotics: tremor, stiffness, shuffling gait and restlessness (akathisia). Report for dose review and treatment.",
      },
      {
        topic: "Psychotropic Medications",
        front: "The midwife's stance toward psychotropic medication and stigma?",
        back: "Confidential, non-judgmental support; mental illness is a health condition like any other. Encourage adherence and follow-up, involve the family, and report any thoughts of self-harm.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "mhGAP Intervention Guide — Version 2.0",
        year: "2016",
      },
      {
        organization: "WHO",
        title: "Depression fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
        note: "Check for the latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Special Situations",
    lessonTitle: "Emergency Drugs: The Ones to Know Cold",
    description:
      "Adrenaline, naloxone, atropine, dextrose, oxytocin and magnesium sulfate — the short shelf of drugs you cannot afford to fumble.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "State the drug, dose and route for adrenaline in anaphylaxis.",
      "Describe the pre-dose safety checks for magnesium sulfate and its antidote.",
      "Apply the stop-stay-call sequence and emergency trolley discipline in drug emergencies.",
    ],
    tags: ["emergency drugs", "resuscitation", "adrenaline", "magnesium sulfate", "anaphylaxis", "emergency trolley"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Emergencies do not wait for you to check a textbook. There is a short list of drugs whose name, dose and route you must be able to say without a pause — the ones that decide whether the patient crossing the next five minutes gets to see the next hour.\n\nThis lesson walks that shelf, and also covers where the drugs live and how the emergency trolley is kept ready — because an expired adrenaline in a locked cupboard is the same as none at all.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Adrenaline** is the first drug of anaphylaxis: intramuscular, 1 in 1000, 0.5 mg (0.5 mL) into the adult mid-outer thigh, repeated after 5 minutes if there is no improvement — never IV undiluted 1:1000, a route that belongs to resuscitation teams. **Naloxone** reverses opioids: it evicts the drug from its receptors and restores breathing within minutes, but it is shorter-acting than many opioids, so watch for breathing slowing again as it wears off. **Atropine** speeds the dangerously slow pulse of symptomatic bradycardia; **dextrose** rescues the unconscious hypoglycaemic — check glucose where you can, because unconsciousness has other causes.\n\nTwo obstetric greats share the shelf. **Oxytocin 10 units IM** contracts the uterus in postpartum haemorrhage; **magnesium sulfate** controls eclamptic seizures, with a narrow window between therapeutic and toxic: before every dose confirm reflexes are present, the respiratory rate is at least 16, and urine is flowing — with **calcium gluconate 10%** standing by as the antidote. Keep the emergency trolley checked each shift and after every use, drugs in the same places, expiry dates visible, and everything recorded the moment the storm allows.",
      },
      {
        type: "clinical_pearl",
        body: "In anaphylaxis the airway is closing while someone searches for a vein. IM adrenaline into the thigh works within minutes and needs no IV access. Give it early — delay, not under-dosing, is the fatal error.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ten minutes after her first dose of IV ampicillin, a postnatal mother develops widespread hives, lip swelling and a tight cough; her voice is hoarse. The nurse beside her reaches for IV fluids and antihistamine first.\n\nWhich drug takes priority, by which route, and when is it repeated?\n\nAnswer: Hoarse voice, lip swelling and cough mean airway involvement — anaphylaxis. Stop the antibiotic, call for help, and give IM adrenaline 1:1000, 0.5 mg into the mid-outer thigh now, repeating at 5 minutes if she is not improving. Fluids, antihistamine and hydrocortisone come after adrenaline, never instead of it — and the reaction is documented prominently so ampicillin never reaches her again.",
      },
      {
        type: "memory_trick",
        body: "Say the shelf aloud each morning of your emergency rotation until it speaks itself: **Adrenaline for allergy, Naloxone for narcotics, Atropine for the slow heart, Dextrose for the empty sugar, Oxytocin for the open womb, Magnesium for the mother's muscles.**",
      },
      {
        type: "summary",
        body: "- Anaphylaxis: IM adrenaline 1:1000, 0.5 mg adult, mid-outer thigh; repeat at 5 minutes if no improvement.\n- Naloxone reverses opioids but wears off faster than many of them — keep watching the breathing.\n- Atropine for symptomatic bradycardia; dextrose for verified hypoglycaemia.\n- Oxytocin 10 units IM fights postpartum haemorrhage; magnesium sulfate fights eclampsia.\n- Before every magnesium dose: reflexes present, RR at least 16, urine flowing; calcium gluconate 10% is the antidote.\n- Emergency trolley: same layout, visible expiry dates, checked each shift and after every use.",
      },
    ],
    questions: [
      {
        topic: "Emergency Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the first drug and route for an adult in anaphylaxis?",
        options: [
          "IM adrenaline 1:1000, 0.5 mg into the mid-outer thigh",
          "IV adrenaline 1:1000 as a fast push",
          "Oral antihistamine immediately",
          "IV hydrocortisone before anything else",
        ],
        correctIndex: 0,
        explanation:
          "Adrenaline IM into the thigh is the first, fastest and safest intervention in anaphylaxis — given early and repeated at 5 minutes if needed. Steroids and antihistamines are later adjuncts, not substitutes.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Emergency Drugs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving the next dose of magnesium sulfate to a woman with severe pre-eclampsia, which checks do you perform?",
        options: [
          "Blood glucose, temperature and pupils",
          "Weight, height and BMI",
          "The fetal heart only",
          "Reflexes present, respiratory rate at least 16, and adequate urine output",
        ],
        correctIndex: 3,
        explanation:
          "Magnesium accumulates into toxicity through the kidneys: lost reflexes, respiratory depression then cardiac arrest. The pre-dose ritual — reflexes, RR of at least 16, urine flowing — is the safety net, with calcium gluconate as the antidote.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Emergency Drugs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient treated with naloxone for opioid overdose starts breathing normally again. What must you still do?",
        options: [
          "Send her home immediately",
          "Continue monitoring — naloxone wears off sooner than many opioids, and breathing can slow again",
          "Give a second opioid to balance the naloxone",
          "Nothing; the reversal is permanent",
        ],
        correctIndex: 1,
        explanation:
          "Naloxone is shorter-acting than most opioids it reverses. As it fades, sedation and respiratory depression can return — continued observation is mandatory, with further doses if breathing deteriorates again.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Emergency Drugs",
        front: "Adult anaphylaxis adrenaline — strength, dose, route, site, repeat interval.",
        back: "1:1000 (1 mg/mL), 0.5 mg IM, mid-outer thigh, repeated after 5 minutes if there is no improvement.",
      },
      {
        topic: "Emergency Drugs",
        front: "Magnesium sulfate pre-dose checklist and antidote?",
        back: "Reflexes present, respiratory rate at least 16, urine output adequate (roughly 25–30 mL/h or per protocol); antidote = calcium gluconate 10%.",
      },
      {
        topic: "Emergency Drugs",
        front: "Why keep watching after naloxone?",
        back: "Naloxone wears off sooner than many opioids; sedation and respiratory depression can return as its level falls. Monitor and be ready to repeat.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017",
      },
      {
        organization: "WHO",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
      },
      {
        organization: "WHO",
        title: "Medication Without Harm",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Special Situations",
    lessonTitle: "Medications in Special Populations",
    description:
      "The old, the young, the pregnant and the breastfeeding — the four patients who turn every standard dose into a calculation.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how pregnancy, infancy, age and breastfeeding change drug handling.",
      "Explain why paediatric doses are calculated per kilogram of measured weight.",
      "Apply the medication-review habit for an elderly patient with polypharmacy.",
    ],
    tags: ["special populations", "dosing", "paediatric dosing", "pregnancy", "breastfeeding", "elderly"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A dose that is perfect for a 60-kilogram adult can be poison for a 4-kilogram newborn and a hazard for a frail grandmother. The very young, the very old, the pregnant and the breastfeeding are not small adults — their bodies handle drugs differently, and the same prescription rules do not automatically cross.\n\nThis lesson visits each group and the practical habits that keep drug rounds safe: weigh the child, review the grandmother's bag, and always check the pregnancy and the breast.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pregnancy** changes everything: plasma volume and kidney blood flow rise, so some drugs clear faster than the books say; the stomach empties slowly; and the first trimester — the window of organ formation — is the time to avoid any drug that is not clearly needed. Firmly out: warfarin, ACE inhibitors, tetracyclines and NSAIDs late. The **breastfeeding mother** passes a little of most drugs into milk — many are compatible, but the baby's immature liver must be considered: sedatives that make a newborn sleepy, tetracyclines and codeine-containing painkillers need avoidance or substitution.\n\n**Children** are dosed in milligrams per kilogram of measured body weight — never by age, never by guessing; a working scale is dosing equipment, and neonates especially accumulate drugs. **The elderly** carry less body water and less kidney power, so drugs linger and doses stack; add polypharmacy — the shopping bag of boxes from different clinics — and interactions multiply. Sedatives and blood-pressure drugs cause falls. The medicine review, done with the actual containers on the table, is one of the kindest things a nurse can do.",
      },
      {
        type: "clinical_pearl",
        body: "The brown-bag review: ask the elderly patient to bring every medicine she takes — every box, bottle, herb and tea — and lay them on the table. Duplicates and interactions jump out that no amount of chart-reading would find.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 78-year-old hypertensive diabetic is admitted dizzy after a fall. Her bag holds amlodipine from the district hospital, lisinopril from a private clinic, a herbal 'BP tea', and two brands of paracetamol for knee pain — each two tablets, three times daily.\n\nWhat risks do you see, and what is your immediate action?\n\nAnswer: Two antihypertensives plus a herbal BP product can stack into dangerous pressure drops — a likely cause of the fall — while the double-branded paracetamol totals about four grams daily on ageing kidneys. Review with the prescriber: one paracetamol brand, a renal check, the herbal tea disclosed honestly, and counselling to use one pharmacy and one list. Falls and drug load in the elderly are a medication story until proven otherwise.",
      },
      {
        type: "memory_trick",
        body: "The dose triangle: **Small, Swollen, Senior.** Small — weigh them. Swollen (pregnant) — reason about the baby and faster-clearing kidneys. Senior — count the boxes and halve your assumptions.",
      },
      {
        type: "summary",
        body: "- Pregnancy: first trimester = organ formation, avoid unless clearly needed; faster clearance of some drugs.\n- Firmly out in pregnancy: warfarin, ACE inhibitors, tetracyclines, late NSAIDs.\n- Breastfeeding: many drugs compatible — always check; avoid sedatives and codeine in the mother.\n- Children: mg per kg of measured weight, never guessed age; neonates accumulate drugs.\n- Elderly: less water, less kidney, more medicines — polypharmacy multiplies interactions and falls.\n- Do the brown-bag medication review at every elderly admission.",
      },
    ],
    questions: [
      {
        topic: "Medications in Special Populations",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 3-year-old needs paracetamol. What determines the correct dose?",
        options: [
          "The child's age in months",
          "Half of the mother's dose",
          "The child's measured body weight, dosed in mg/kg",
          "The size of the tablet available",
        ],
        correctIndex: 2,
        explanation:
          "Paediatric doses are calculated in milligrams per kilogram of actual, measured weight — which is why a working scale is dosing equipment. Age and tablet size do not dose children safely.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Medications in Special Populations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why can a breastfeeding mother's diazepam harm her newborn?",
        options: [
          "The drug stops milk production entirely",
          "It passes into milk and can sedate the newborn, whose liver clears drugs poorly",
          "It changes the colour of the milk",
          "Newborns metabolize diazepam faster than adults",
        ],
        correctIndex: 1,
        explanation:
          "Benzodiazepines enter breast milk and can sedate a newborn whose immature liver clears them slowly — poor feeding, limpness and drowsiness. Avoid or substitute, and involve the prescriber.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Medications in Special Populations",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why do many drugs need dose reduction in the elderly?",
        options: [
          "Reduced kidney and liver function makes drugs accumulate and linger",
          "They have more body water, diluting every drug",
          "Their kidneys and liver clear drugs faster",
          "They absorb all drugs completely",
        ],
        correctIndex: 0,
        explanation:
          "Ageing shrinks kidney filtration and liver metabolism, so the same dose stands in the body longer and stacks with the next. Lower doses, longer intervals and regular reviews are the answer.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Medications in Special Populations",
        front: "Which drugs are firmly contraindicated in pregnancy?",
        back: "Warfarin, ACE inhibitors and ARBs, tetracyclines, NSAIDs in late pregnancy — the classic recitation list; each has a safer alternative.",
      },
      {
        topic: "Medications in Special Populations",
        front: "The paediatric dose rule?",
        back: "mg per kg of actual, measured weight — with a working scale, a double-checked calculation, and paediatric formulations.",
      },
      {
        topic: "Medications in Special Populations",
        front: "What is the brown-bag review?",
        back: "Asking the patient to bring ALL medicines — including herbs and teas — in their containers to one table, to expose duplicates, interactions and expired drugs.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Medication Without Harm",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "WHO",
        title: "WHO recommendations on antenatal care for a positive pregnancy experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "Triage and Rapid Decisions",
    lessonTitle: "Triage: Deciding Who Needs Help First",
    description:
      "The ethical arithmetic of emergencies — sorting patients with colours when demand outruns everything you have.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the triage colour categories and their meanings.",
      "Apply rapid sorting criteria (walking, breathing, perfusion, consciousness) to multiple casualties.",
      "Explain the ethical principle that governs triage during mass casualty incidents.",
    ],
    tags: ["triage", "prioritization", "mass casualty", "start", "color coding"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A tro-tro overturns outside your district hospital and eleven injured people arrive within minutes. Your unit has two beds, one doctor and you. Who is treated first is no longer a matter of arrival order or of noise — it is a system called triage, and it is the most disciplined kindness there is.\n\nThis lesson teaches the sorting logic used worldwide: quick checks, colour tags, and the courage to treat the salvageable first when you cannot treat everyone at once.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The word triage comes from the French 'trier' — to sort. You already triage daily: the woman bleeding in labour goes before the bandaged finger. In a mass casualty the sorting becomes formal. Rapid systems such as START and SALT walk every casualty through the same seconds-long questions. Can they walk? Send the walking wounded one way — they are tagged **green** (minor; care can wait). For those who cannot walk: are they breathing? If breathing returns only when you open the airway, they are **red** (immediate); no breathing despite an open airway is **black** (deceased or expectant — the hardest tag, applied only when rescuers are few). Breathing too fast (over about 30), wrist pulse absent or capillary refill over 2 seconds, or unable to follow commands — any yes becomes **red**. Stable but immobile is **yellow** (delayed).\n\nThe ethics shift with scale. In normal times each patient's best interest rules; in a disaster the rule becomes the greatest good for the greatest number, because hours spent on one unsalvageable patient may cost three survivable ones. Two habits keep triage honest: reassess everyone, because a yellow can quietly become a red; and remember the tag is a sorting tool, never a verdict — categories move as the patient's condition and your resources change.",
      },
      {
        type: "clinical_pearl",
        body: "The loudest casualty is rarely the sickest. The quiet one in the corner — drowsy, breathing slowly, alone — is the one your eyes must find on every arrival sweep. Loudness means airway and voice are working.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After a market fire, six casualties reach your casualty block. A man with a bleeding scalp wound is shouting loudly; a mother carries a silent 4-year-old who will not open her eyes; another man limps in walking; a woman with burns to both arms sits quietly, following your instructions.\n\nWho do you tag red, and why?\n\nAnswer: The silent 4-year-old — a child who will not open her eyes cannot follow commands, and smoke inhalation, hypoxia or shock underneath is life-threatening. The burned woman is also red: burns carry fluid-loss and airway risk. The limping man is green, and the shouting scalp-bleeder is green or at most yellow after a check — his strong voice proves an open airway. Silence is the alarm; noise is reassurance.",
      },
      {
        type: "memory_trick",
        body: "**Red now, Yellow waits, Green walks, Black rests.** And the four sorting questions: **Walks? Breathes? Wrist? Words?** — walking makes green; no breathing after airway opening makes black; fast breathing, missing wrist pulse or no response to words makes red.",
      },
      {
        type: "summary",
        body: "- Triage = sorting by need and survivability, not arrival order or noise.\n- Green: walking wounded. Yellow: stable, immobile, can wait. Red: immediate threat to life. Black: deceased or expectant.\n- Rapid red flags: RR over ~30, absent wrist pulse or cap refill over 2 s, not following commands.\n- Disaster ethics: greatest good for the greatest number, with honest, repeated reassessment.\n- Tags move as patients and resources change — never a fixed verdict.\n- Find the quiet casualties first; loudness means a working airway.",
      },
    ],
    questions: [
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In mass casualty triage, what does a green tag mean?",
        options: [
          "Immediate life-saving treatment required now",
          "Minor injuries — the walking wounded, whose care can wait",
          "Deceased or expectant",
          "Contagious infection",
        ],
        correctIndex: 1,
        explanation:
          "Green tags the walking wounded: injuries that are minor or can safely wait hours while red and yellow casualties are treated. They are still assessed and reassessed — green is a category, not a discharge.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An adult casualty has a respiratory rate of 36 per minute and does not follow commands. What tag does rapid triage assign?",
        options: [
          "Green — he is breathing on his own",
          "Yellow — wait for a doctor first",
          "Black — no treatment possible",
          "Red — immediate threat to life; treat first",
        ],
        correctIndex: 3,
        explanation:
          "Respiratory rate above about 30, absent wrist pulse/cap refill over 2 seconds, or failure to follow commands each mark a red tag under rapid triage. He may be fighting for his life quietly — red means treatment now.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What ethical principle guides triage during a mass casualty incident?",
        options: [
          "First-come, first-served, strictly by clock time",
          "Favour the oldest and youngest regardless of injury",
          "The greatest good for the greatest number — resources go where they save the most lives",
          "Treat only the patients with identification",
        ],
        correctIndex: 2,
        explanation:
          "When demand overwhelms resources, allocation shifts from each individual's best interest to saving the most lives — while protecting dignity and keeping tags under constant review as capacity changes.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Triage",
        front: "The four triage colours and their meanings?",
        back: "Red: immediate (life threat). Yellow: delayed (stable, needs care, can wait). Green: minor — the walking wounded. Black: deceased or expectant when rescuers are overwhelmed.",
      },
      {
        topic: "Triage",
        front: "Three rapid red-flag checks in adult sorting?",
        back: "Respiratory rate over ~30, absent wrist pulse or capillary refill over 2 seconds, or unable to follow simple commands — any one sends the casualty to red.",
      },
      {
        topic: "Triage",
        front: "What is the rule about reassessment in triage?",
        back: "Triage is continuous: a yellow can become a red while waiting, and a red can stabilize to yellow. Re-sweep the waiting area as often as the situation allows.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Interagency Integrated Triage Tool",
        year: "2021",
      },
      {
        organization: "WHO",
        title: "Emergency Response Framework",
        year: "2017",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "Triage and Rapid Decisions",
    lessonTitle: "Rapid Patient Assessment in Emergencies",
    description:
      "ABCDE and the sixty-second workup — gleaning maximum information about any emergency patient in minimum time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Perform the ABCDE primary survey sequence.",
      "Describe AVPU and the SAMPLE history.",
      "Apply the treat-as-you-find principle during the primary survey.",
    ],
    tags: ["rapid assessment", "emergency", "abcde", "primary survey", "avpu"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Emergencies do not grant time for a full head-to-toe examination and a careful history. What they demand is a disciplined sixty seconds that finds the life threats in the order they kill: airway first, then breathing, then circulation, consciousness and the rest.\n\nThat sequence is ABCDE, and it is the same in a CHPS compound at midnight as in the biggest referral emergency unit. Learn it until it runs itself — and until its habit of treating threats as they appear becomes reflex.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**A — Airway.** Is it open? Snoring or gurgling means the tongue or fluid is closing the road; reposition, suction if available. **B — Breathing.** Look, listen, count: rate, depth, effort, equal chest rise, colour. A rate too fast, too slow or exhausting is an emergency; in a child, breathing rate is the earliest alarm. **C — Circulation.** Pulse — present, rate, strength; capillary refill over 2 seconds; skin colour; bleeding you can see and stop. Blood pressure can lag: a young mother holds a normal pressure until she is deep in trouble, so trust the pulse and the perfusion. **D — Disability.** AVPU — Alert, responds to Voice, to Pain, Unresponsive — plus pupils and a finger-prick glucose, because low sugar masquerades as anything. **E — Exposure.** Head-to-toe under dignity, then keep her warm.\n\nThe rule that makes it work: **treat as you find** — an airway problem is fixed the moment it is found. Once the patient is stable comes the SAMPLE history (Signs and symptoms, Allergies, Medications, Past history, Last meal, Events) and the fuller examination. And ABCDE is a loop, not a line: reassess from the top as often as the patient demands.",
      },
      {
        type: "clinical_pearl",
        body: "In children and in shocked young adults, the blood pressure lies — normal until suddenly it is not. If the pulse is weak and fast and the skin pale, believe the pulse. Recheck the pressure every few minutes, not once.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are called to a postnatal ward where a 25-year-old lies drowsy, breathing noisily. Your survey: snoring airway, corrected by positioning; respiratory rate 28, shallow; pulse 120, thready; eyes open only to pain; glucose 2.1 mmol/L.\n\nIn what order do you act, and what explains her state?\n\nAnswer: Airway first — open and positioned. Breathing — oxygen if available, keep counting. Circulation — IV access, fluids per protocol. Then Disability: the glucose explains the drowsiness, so IV dextrose per protocol, recheck, and keep her positioned safely. The order is the lesson: without an open airway, the dextrose never reaches her brain in time — and the cause (sepsis? missed diabetes?) is hunted next.",
      },
      {
        type: "memory_trick",
        body: "**ABCDE — And Begin Correcting During Examination.** For consciousness, climb the **AVPU ladder**: Alert, Voice, Pain, Unresponsive — every rung downward is a step toward the emergency bell.",
      },
      {
        type: "summary",
        body: "- A: open airway — snoring and gurgling are partial-closure sounds; fix immediately.\n- B: count rate and watch effort; a child's breathing rate is the earliest alarm.\n- C: pulse, cap refill and bleeding — trust perfusion over a 'normal' BP in the young.\n- D: AVPU, pupils and glucose — low sugar imitates everything.\n- E: expose with dignity, then keep the patient warm.\n- Treat as you find; after stability take SAMPLE history; reassess in loops.",
      },
    ],
    questions: [
      {
        topic: "Rapid Patient Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the C of ABCDE stand for?",
        options: [
          "Circulation — pulse, perfusion and bleeding",
          "Consciousness level",
          "Chest expansion",
          "Contact history",
        ],
        correctIndex: 0,
        explanation:
          "C is circulation: pulse rate and strength, capillary refill, skin colour and visible bleeding, with control of any haemorrhage. Consciousness is D, under Disability.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Rapid Patient Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient opens her eyes only when you press firmly on her nail bed. On the AVPU scale she is:",
        options: [
          "Alert",
          "Responsive to voice",
          "Responsive to pain",
          "Unresponsive",
        ],
        correctIndex: 2,
        explanation:
          "AVPU descends from Alert to Voice to Pain to Unresponsive. Reacting only to a painful stimulus places her two steps down — a serious finding needing urgent assessment and reassessment.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Rapid Patient Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During the primary survey you find an obstructed airway. What do you do?",
        options: [
          "Finish the whole survey first, then return to it",
          "Note it in the chart for the next team",
          "Wait for the doctor to arrive",
          "Correct it immediately — treat as you find",
        ],
        correctIndex: 3,
        explanation:
          "The primary survey treats life threats the moment they are found. An obstructed airway kills in minutes; positioning or suction happens now, and the survey continues after it is secure.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Rapid Patient Assessment",
        front: "What does AVPU stand for?",
        back: "Alert, responds to Voice, responds to Pain, Unresponsive — a rapid consciousness ladder; every step down is a warning.",
      },
      {
        topic: "Rapid Patient Assessment",
        front: "Why does the primary survey come before history-taking?",
        back: "Life threats kill in order — airway, breathing, circulation — so they are hunted and fixed first. History (SAMPLE) follows once the patient is stable.",
      },
      {
        topic: "Rapid Patient Assessment",
        front: "What is the SAMPLE history?",
        back: "Signs and symptoms, Allergies, Medications, Past medical history, Last meal, Events leading to the emergency.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Emergency Response Framework",
        year: "2017",
      },
      {
        organization: "WHO",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "Disaster Preparedness and Response",
    lessonTitle: "What Disaster Preparedness Actually Means",
    description:
      "Plans, drills, stockpiles and early warning — the quiet work done years before the flood that decides who survives it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define a disaster and describe the phases of the disaster management cycle.",
      "Describe the elements of health-facility preparedness.",
      "Explain risk as the balance of hazard, vulnerability and capacity.",
    ],
    tags: ["disaster", "preparedness", "disaster cycle", "mass casualty", "ghana"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A disaster is not simply a bad event. WHO describes it as a serious disruption that overwhelms a community's ability to cope using its own resources. By that definition, a three-car crash can be a disaster for a CHPS compound with one midwife — while the same crash is a busy Tuesday in a teaching hospital.\n\nPreparedness is everything a facility and community do before the event so that the day itself is survivable. It is unglamorous work — meetings, checklists, drills — and it is the difference between a flood that drowns and a flood that is survived.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Disaster management runs in a cycle: **prevention and mitigation**, **preparedness**, **response**, **recovery** — rebuilding better than before. Risk itself is a balance: **hazard × vulnerability ÷ capacity**. The same flood hits a riverside settlement harder than a hillside estate; a community with trained volunteers and an evacuation plan fares better than one without. Ghana's own hazard map makes this vivid: seasonal floods (Accra and the White Volta catchment), market fires, road crashes — our recurring mass-casualty generator — and cholera and meningitis outbreaks in the harmattan.\n\nFor a health facility, preparedness is a concrete checklist: a **mass casualty plan** written and known (who triages, who runs, where the walking wounded go); a designated **triage and treatment area**; **stockpiles** — IV fluids, consumables, fuel, safe water, generator power; **training and drills** at least yearly, honestly reviewed afterward, because a plan that lives only in a drawer is a wish; a **communication tree**; and a **surveillance link** so the first cases of a brewing outbreak reach the right desk. Preparedness is the only phase bought entirely before it is needed.",
      },
      {
        type: "clinical_pearl",
        body: "The time to learn the mass casualty plan is not the day the bus overturns. Read it this week, walk the triage area, count the IV fluids. On the day itself you will not have time to read — only to remember.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Last year your district hospital's mass casualty drill was chaotic: nobody knew where to send walking casualties, and the generator ran out of fuel. This harmattan, radio warnings announce a head-on crash with fifteen victims while the district manages suspected meningitis cases.\n\nWhy do last year's failures matter today?\n\nAnswer: Drills are cheap rehearsals of expensive lessons. By now the walking-casualty flow should be solved — a marked area with a named marshal; the generator on a fuel log with tested runs; the communication tree rehearsed. With fifteen victims expected and beds partly full, those fixes turn chaos into a functioning triage line — and the meningitis cases show that everyday services and surge capacity must be planned together. A drill without honest review is a photograph, not preparation.",
      },
      {
        type: "memory_trick",
        body: "The disaster cycle is a wheel: **Prevent, Prepare, Respond, Recover** — and the wheel turns again. Remember risk as a fraction: **hazard times vulnerability, divided by capacity.** Capacity is the only part you can grow.",
      },
      {
        type: "summary",
        body: "- Disaster = disruption beyond local coping ability; a three-car crash can be a CHPS disaster.\n- Cycle: prevention/mitigation, preparedness, response, recovery.\n- Risk = hazard × vulnerability ÷ capacity — grow the capacity.\n- Ghana's hazards: floods, market fires, road crashes, cholera, harmattan meningitis.\n- Facility preparedness: mass casualty plan, triage area, stockpiles, drills, communication tree, surveillance link.\n- A drill without honest review is not preparation.",
      },
    ],
    questions: [
      {
        topic: "Disaster Preparedness",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which phase of the disaster management cycle happens BEFORE the event?",
        options: [
          "Response",
          "Recovery",
          "Preparedness",
          "Reconstruction",
        ],
        correctIndex: 2,
        explanation:
          "Preparedness — plans, stockpiles, drills, communication trees — is the phase you can only buy in advance. Response happens during the event; recovery and reconstruction follow it.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Disaster Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A hazard and a community's vulnerability are fixed. Which factor most changes the disaster risk?",
        options: [
          "The community's capacity — plans, training and resources — which divides the risk",
          "The season of the year",
          "The number of hospitals in the capital city",
          "The name the disaster is given",
        ],
        correctIndex: 0,
        explanation:
          "Risk rises with hazard and vulnerability but falls with capacity. Training, plans, stockpiles and community organization are the levers you can actually pull before the event.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Disaster Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should a facility practise its mass casualty drill yearly and review it honestly?",
        options: [
          "Because drills are a regulatory formality with no operational value",
          "Because an unrehearsed plan fails on the day — drills expose gaps while they are still cheap to fix",
          "Because drills use up stock about to expire",
          "Because drills are mainly for photographs and reports",
        ],
        correctIndex: 1,
        explanation:
          "The drill is the rehearsal that reveals the forgotten marshal, the empty fuel log and the locked side door — while fixing them still costs nothing. The review, not the drill itself, is the preparation.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Disaster Preparedness",
        front: "The four phases of the disaster cycle?",
        back: "Prevention/mitigation, preparedness, response, recovery — a repeating wheel, not a straight line.",
      },
      {
        topic: "Disaster Preparedness",
        front: "Risk formula in plain words?",
        back: "Hazard × vulnerability ÷ capacity. The same hazard injures more where vulnerability is high and capacity is low; capacity is the part you can grow.",
      },
      {
        topic: "Disaster Preparedness",
        front: "Five elements of facility preparedness?",
        back: "A written, known mass casualty plan; a designated triage/treatment area; stockpiles (fluids, fuel, power, water); trained staff with yearly drills; a communication tree and surveillance link.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Health Emergency and Disaster Risk Management Framework",
        year: "2019",
      },
      {
        organization: "UNDRR",
        title: "Sendai Framework for Disaster Risk Reduction 2015–2030",
        year: "2015",
        url: "https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030",
      },
      {
        organization: "National Disaster Management Organisation (NADMO), Ghana",
        title: "National disaster management mandate under Act 517 of 1996",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "Disaster Preparedness and Response",
    lessonTitle: "The Nurse's Role When Disaster Strikes",
    description:
      "Where you go, what you carry and who you answer to — the discipline of being useful from the first minute a disaster activates.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe scene safety and chain-of-command principles during activation.",
      "Explain the nurse's typical roles in facility disaster response.",
      "Apply personal safety and rest discipline during prolonged response.",
    ],
    tags: ["disaster response", "roles", "chain of command", "safety", "nadmo", "patient tracking"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When the alert sounds, instinct says run toward the problem. Discipline says otherwise: in a disaster the unprepared helper becomes the second casualty, and a nurse who runs to the flood without a role adds to the chaos she meant to cure.\n\nThis lesson is about behaving like part of a system: keeping yourself safe, reporting into the chain of command, and working the role you are given — while the ward's mothers keep delivering babies underneath it all.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**First, safety.** Size up the scene before entering — fuel, live wires, unstable walls, contaminated water. A dead rescuer rescues nobody. **Second, the chain of command.** Every disaster response names an incident commander; in a facility that role sits with the medical superintendent or the most senior officer present. You do not self-deploy and you do not freelance: report to the staging point or staffing pool, receive a role, and keep reporting to that role's leader — one boss per person is what keeps a hundred helpers from becoming a mob.\n\nThe roles you may be given: **triage officer**, **treatment-area** nurse, **transport and transfer** coordinator, or **patient tracking** — names, colour tags and destinations on the master log so no mother is ever 'lost' between casualty block and ward. Meanwhile the hospital's ordinary work continues: women labour, oxygen empties — disaster response is added on top of the ward, not instead of it. You will also meet the wider machine — NADMO, GHS, police, fire, ambulance — and your professional identity travels with you: duties, documentation, confidentiality and controlled-drug security never pause. And when the response stretches past twelve hours, rest rotation is not a luxury: tired nurses make calculation errors, and those errors cost exactly what you were trying to save.",
      },
      {
        type: "clinical_pearl",
        body: "The most useful sentence on the day is not 'I want to help' but 'Midwife X reporting for assignment — where do you need me?' Identify yourself, take a role, keep the loop closed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m., floodwater reaches the district hospital compound. Off-duty staff arrive spontaneously; some wade straight toward the maternity ward to 'help move the mothers.' A student midwife phones you from home.\n\nWhat do you tell her?\n\nAnswer: Come safe, come into the system. Travel by a safe route, report to the staging point rather than into the water, and take the role assigned — moving stable mothers upstairs, tracking names on the ward list, or the supply run. Do not wade into moving floodwater and do not self-assign to the labour room; and if sent home because staffing is enough, rest with the phone on — the response will outlast the first shift, and the second crew matters as much as the first.",
      },
      {
        type: "memory_trick",
        body: "**S-R-C: Safety, Report, Contribute.** Before the disaster, know your call-up list. During it, stay safe, report into the chain, work your role. After it, rest, debrief and hand over cleanly.",
      },
      {
        type: "summary",
        body: "- Scene safety first — an injured rescuer becomes part of the disaster.\n- No self-deployment: travel safe, report to staging, take an assigned role.\n- One incident commander; one boss per responder; span of control kept small.\n- Roles: triage, treatment, transport, tracking — the master log loses no patient.\n- Ordinary care continues under the disaster; documentation and drug security never pause.\n- Rest rotation is a safety intervention, not a favour to the tired.",
      },
    ],
    questions: [
      {
        topic: "The Nurse's Role in Disaster",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You arrive off-duty during a flood evacuation of your hospital. What is your first action?",
        options: [
          "Wade directly into the deepest water to reach patients first",
          "Begin treating casualties alone on the roadside",
          "Go home and sleep until the flood ends",
          "Travel by a safe route and report to the staging point for an assigned role",
        ],
        correctIndex: 3,
        explanation:
          "Safety and the chain of command come first: report to staging, receive a role, then work. Wading into moving floodwater risks making you the next casualty; treating outside the system fragments care and record-keeping.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "The Nurse's Role in Disaster",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does disaster response insist on a single incident commander and a clear chain of command?",
        options: [
          "Because rank must always outrank clinical skill",
          "Because a hundred well-meaning helpers without coordination become a second disaster",
          "It is only a legal formality with no operational effect",
          "So nurses never take any initiative at all",
        ],
        correctIndex: 1,
        explanation:
          "Coordination is what converts goodwill into capacity. One commander, clear roles and limited span of control prevent duplicated work, missed patients and freelancing — without erasing professional initiative inside your role.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "The Nurse's Role in Disaster",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a 20-hour flood response, why enforce staff rest rotation?",
        options: [
          "Fatigue-driven medication and clinical errors cost exactly what the response is trying to save",
          "To reduce payroll costs overnight",
          "To give everyone equal photographs",
          "Rest is optional for night staff",
        ],
        correctIndex: 0,
        explanation:
          "Tired clinicians misread labels, miscalculate doses and miss deterioration. Rotating rest protects patients as much as staff — and keeps a functional crew for the days a long response demands.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "The Nurse's Role in Disaster",
        front: "The first rule of disaster response for a nurse?",
        back: "Safety first — size up the scene before entering. A rescuer who becomes a casualty doubles the problem and halves the workforce.",
      },
      {
        topic: "The Nurse's Role in Disaster",
        front: "What does 'no self-deployment' mean?",
        back: "Do not rush to the scene on your own decision; report to the staging point or staffing pool, take a role within the chain of command, then work.",
      },
      {
        topic: "The Nurse's Role in Disaster",
        front: "What is patient tracking in disaster response?",
        back: "A master log of every patient: name, triage colour, treatments and destination — so nobody is lost between the casualty point, theatre and the ward.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Health Emergency and Disaster Risk Management Framework",
        year: "2019",
      },
      {
        organization: "National Disaster Management Organisation (NADMO), Ghana",
        title: "National disaster management mandate under Act 517 of 1996",
      },
      {
        organization: "International Council of Nurses (ICN)",
        title: "Position statements on nurses and disaster management",
        note: "Check the current ICN statement set.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "Disaster Preparedness and Response",
    lessonTitle: "Communication and Coordination in Chaos",
    description:
      "Radios, runners and closed-loop talk — keeping information alive when the network dies and the corridors fill.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe backup communication tools when phone networks fail.",
      "Apply closed-loop communication and SBAR in emergencies.",
      "Explain briefings, scribes and tracking boards as coordination structures.",
    ],
    tags: ["communication", "coordination", "closed-loop", "sbar", "emergency communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask any team that has worked a real mass casualty what failed first: rarely the fluid supply, rarely the courage — usually the communication. Phone networks choke or die exactly when everyone calls home, noise drowns speech, and forty people shouting 'we need help' at once produce nothing but noise.\n\nThis lesson is about keeping information alive in chaos: tools that work when phones do not, and words that work when adrenaline is high.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Tools.** Two-way radios with spare batteries, charged at designated points; **runners** carrying written messages both ways, because paper does not misremember; whiteboards listing patients, tags and destinations; megaphones for crowds. Text messages sometimes survive when calls cannot — and one designated person calling one designated number beats a hundred everyone-calls.\n\n**Words.** The closed loop: the sender names the receiver and sends the message in short chunks; the receiver reads it back; the sender confirms. Without that read-back, orders mutate as they travel. Use names ('Midwife Adjoa, give ampicillin one gram now — read back please'), avoid codes, speak in numbers: 'respiratory rate twenty-four', not 'breathing fast-ish'. For handovers, SBAR still rules — Situation, Background, Assessment, Recommendation, with the decision stated outright. And the structure holds it together: briefings at set intervals from the incident commander; one channel for orders; a scribe logging times and decisions; a visible tracking board. The speak-up culture that patient safety built survives the disaster — the quietest 'I think that dose is wrong' may be the most important sentence of the shift.",
      },
      {
        type: "clinical_pearl",
        body: "A verbal order is not delivered until it is read back and confirmed. 'Read back please' is not rudeness in a disaster — it is survival grammar for the whole team.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a market-fire response, the network dies and your facility coordinates with two radios and one runner. A colleague shouts across the crowded casualty area, 'Send that burn patient to the theatre!' — but there are three burn patients and two theatres.\n\nWhat went wrong, and how is the message correctly delivered?\n\nAnswer: The shout was open-loop and unaddressed — ambiguous patient, ambiguous destination, no confirmation. The closed-loop version: 'Nurse Mensah: the woman with burns to both arms, tag red, BP 90 over 60 — prepare her for Theatre B now; read back.' Mensah repeats it, the sender confirms, and the runner carries the written version for the log. Names, numbers and read-backs are the difference between the right patient and the wrong theatre.",
      },
      {
        type: "memory_trick",
        body: "**C-L-O-S-E-D: Call the person by name, Limit to one message, Offer numbers not adjectives, Say it short, Expect read-back, Document after.** Say it like a drumbeat under pressure.",
      },
      {
        type: "summary",
        body: "- The first casualties of a disaster include phone networks — plan radios, runners and boards.\n- A written message carried by a named runner beats a shouted guess.\n- Closed loop: name the receiver, short chunks, read-back, confirm.\n- SBAR for handovers: Situation, Background, Assessment, Recommendation.\n- Structured briefings, a scribe, a tracking board, one orders channel.\n- Speak up when you see an error forming — chaos does not suspend safety.",
      },
    ],
    questions: [
      {
        topic: "Emergency Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What completes a closed-loop communication?",
        options: [
          "Speaking loudly enough for everyone to hear",
          "The receiver reads the message back and the sender confirms it",
          "Writing a letter afterward",
          "Repeating every order twice, always",
        ],
        correctIndex: 1,
        explanation:
          "The loop closes only when the receiver reads the message back and the sender confirms. Everything before that is transmission, not delivery.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Emergency Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your district's phone network collapses during a mass casualty response. Which arrangement is most reliable?",
        options: [
          "Two-way radios with spare batteries plus written messages carried by designated runners",
          "Shouting orders across the crowded courtyard",
          "Waiting for the network to return before issuing instructions",
          "Sending all messages with relatives of patients",
        ],
        correctIndex: 0,
        explanation:
          "Radios with charged spares and named runners with written slips survive network failure, noise and crowd confusion — and written messages become the log the response is audited by.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Emergency Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In SBAR, which element states what you want done?",
        options: [
          "Situation",
          "Background",
          "Assessment",
          "Recommendation",
        ],
        correctIndex: 3,
        explanation:
          "Recommendation is the decision you are asking for — 'I need you to review her now' — stated with a time attached. Without it, handovers describe and never decide.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Emergency Communication",
        front: "What is closed-loop communication?",
        back: "Sender names the receiver and gives the message in chunks; the receiver reads it back verbatim; the sender confirms. Only the read-back closes the loop.",
      },
      {
        topic: "Emergency Communication",
        front: "SBAR — expand it.",
        back: "Situation (who and what, one line), Background (relevant context), Assessment (what you think is happening), Recommendation (what you want done, and when).",
      },
      {
        topic: "Emergency Communication",
        front: "Three backup communication tools when phones fail?",
        back: "Two-way radios with charged spare batteries, written messages carried by named runners, and visible tracking boards or whiteboards.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Patient Safety Curriculum Guide: multi-professional edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      {
        organization: "WHO",
        title: "Communicating risk in public health emergencies",
        year: "2017",
      },
      {
        organization: "WHO",
        title: "Emergency Response Framework",
        year: "2017",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "After the Emergency",
    lessonTitle: "Psychological First Aid",
    description:
      "Calm presence and practical help — the first mental health response after any crisis, for survivors and for colleagues.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the core actions of psychological first aid: Look, Listen, Link.",
      "Explain what PFA is not, and the responses to avoid.",
      "Apply PFA principles to a distressed mother or colleague.",
    ],
    tags: ["psychological first aid", "mental health", "crisis support", "look listen link", "perinatal loss"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "After the flood recedes and the wounds are dressed, something invisible remains: people shaking, mute, wandering or wailing. Psychological first aid — PFA — is the first response to that suffering. It requires no psychology degree: it is humane, practical presence, offered until professional help is available.\n\nPFA belongs to midwifery as much as to disasters. The mother who has delivered a stillborn baby at midnight is a survivor of a crisis too, and the same quiet skills hold her.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The WHO field guide frames PFA as three verbs. **Look**: scan for safety (move her away from danger), for obvious urgent needs (injury, water, a blanket) and for acute distress — the person shaking, mute or frozen. **Listen**: approach, introduce yourself, offer help, and listen without pressure. Never force her to retell the event; make room for silence; accept even anger. **Link**: connect her to what restores her — information, loved ones, practical help, and services that carry the next stage: protection, medical care, mental health referral for the few with severe reactions.\n\nPFA rests on five quiet ingredients: safety, calming, connectedness, self-efficacy — small tasks like bathing her own baby restore a sense of control — and hope. What it avoids matters as much: no forced retelling, no false reassurance ('everything will be fine' — you do not know that), no minimizing ('at least you survived'), no promises you cannot keep, no sedation for ordinary distress. Anyone can offer PFA. In the days after, watch for reactions that do not settle: hopelessness, thoughts of harm, inability to care for self or baby, worsening sleep, substance use — referral moments, not moments for a firmer pep talk.",
      },
      {
        type: "clinical_pearl",
        body: "Your calm is the treatment. A steady voice, unhurried movements, sitting at eye level — a regulated nervous system is contagious, and so is panic. Enter settled, and the room settles with you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a flood evacuation, a mother arrives at your shelter soaked, clutching her eight-month-old, saying nothing, staring. She is physically uninjured; the baby, wrapped and dry, is feeding.\n\nHow do you offer psychological first aid?\n\nAnswer: Look — she is safe, uninjured, the baby warm and feeding. Listen — sit beside her, introduce yourself, offer a dry cloth and tea, and be present without demanding the story; later, quiet questions: her name, the baby's name, who might be missing. Link — help her send word to family, give small tasks like bathing the baby to restore control, and keep checking in. If she stays mute, cannot care for the baby, or voices hopelessness, refer — distress that does not begin easing deserves a professional eye.",
      },
      {
        type: "memory_trick",
        body: "PFA = the **three L's: Look, Listen, Link.** The five quiet gifts: **Safety, Calming, Connection, Self-efficacy, Hope.** You are a lantern, not an interrogator — shine, don't question.",
      },
      {
        type: "summary",
        body: "- PFA: humane, practical first support — no therapy degree required.\n- Look (safety, urgent needs, distress), Listen (no pressure to retell), Link (family, practical help, services).\n- Ingredients: safety, calming, connectedness, self-efficacy, hope.\n- Avoid forced storytelling, false reassurance, 'at least' remarks and broken promises.\n- Refer when reactions are severe, worsening, or block care of self or baby.\n- The same skills hold a mother through perinatal loss.",
      },
    ],
    questions: [
      {
        topic: "Psychological First Aid",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Psychological first aid is best described as:",
        options: [
          "A form of counselling requiring clinical training",
          "A debriefing where survivors must describe the event in detail",
          "Humane, practical support — look, listen, link — until further help is available",
          "Medication to calm the distressed person",
        ],
        correctIndex: 2,
        explanation:
          "PFA is basic, humane support that anyone can give: attending to safety and needs, listening without pressure, and linking to help. It is deliberately not therapy, not debriefing, and not drugging.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Psychological First Aid",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother keeps saying 'my baby is gone' after a stillbirth. Which response is PFA-aligned?",
        options: [
          "'At least you are young — you will have another'",
          "'Don't cry — be strong for your family'",
          "'Tell me everything that happened, right now, in detail'",
          "'I am so sorry. I will stay with you. Would you like me to call someone for you?'",
        ],
        correctIndex: 3,
        explanation:
          "Presence, an honest acknowledgment of loss and a link to support are the PFA answers. 'At least' minimizes, 'be strong' forbids grief, and forced retelling can re-wound a fresh trauma.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Psychological First Aid",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What should you AVOID in psychological first aid?",
        options: [
          "Forcing the person to retell the traumatic event",
          "Offering water and a blanket",
          "Sitting quietly beside the person",
          "Helping her contact her family",
        ],
        correctIndex: 0,
        explanation:
          "Retelling is invited, never forced; pushing a fresh survivor through the story can deepen the wound. Offer presence, practical care and connection instead.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Psychological First Aid",
        front: "The three action verbs of PFA?",
        back: "Look, Listen, Link — check safety and needs, listen without pressure, then connect to information, loved ones, practical help and services.",
      },
      {
        topic: "Psychological First Aid",
        front: "Name three things PFA must NOT do.",
        back: "Force the survivor to talk through the event; give false reassurance or minimize ('at least…'); promise what cannot be delivered. Nor does it sedate ordinary distress.",
      },
      {
        topic: "Psychological First Aid",
        front: "When does distress move from PFA to referral?",
        back: "When reactions are severe or worsening — hopelessness or thoughts of harm, substance use, inability to care for self or baby, sleep and function that will not return.",
      },
    ],
    sources: [
      {
        organization: "WHO, War Trauma Foundation & World Vision International",
        title: "Psychological First Aid: Guide for Field Workers",
        year: "2011",
      },
      {
        organization: "Inter-Agency Standing Committee (IASC)",
        title: "Guidelines on Mental Health and Psychosocial Support in Emergency Settings",
        year: "2007",
      },
      {
        organization: "WHO",
        title: "mhGAP Intervention Guide — Version 2.0",
        year: "2016",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "emergency-disaster-nursing",
    moduleTitle: "After the Emergency",
    lessonTitle: "Recovery and Resilience After Disasters",
    description:
      "Picking up the pieces — restoring services, watching for outbreaks, and protecting your own wellbeing on the long road back.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe recovery-phase priorities for health services.",
      "Explain post-disaster outbreak surveillance and community resilience.",
      "Recognize stress reactions in yourself and colleagues, and when to seek help.",
    ],
    tags: ["recovery", "resilience", "outbreak surveillance", "staff support", "build back better"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "News cameras leave on day three; recovery lasts years. After the water recedes or the fire is out, the health system's job is to stand services back up, keep watch for the epidemics that trail every disaster, and hold the minds of both community and staff.\n\nRecovery is also where the promise of 'build back better' lives: the flood that destroys a clinic is, painfully, also the moment to site the new one above the waterline.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Services first.** The recovery checklist restores essential care in order: safe water and sanitation, the vaccine cold chain, antenatal clinics and deliveries, treatment continuity for tuberculosis and HIV. Lost continuity is a silent disaster — a defaulting TB patient or an unvaccinated district pays the flood's bill months later. **Surveillance second.** Disasters incubate outbreaks: cholera follows floods through contaminated water, malaria follows standing water, meningitis follows harmattan and crowded displacement. Recovery means heightened surveillance and a daily reporting line that stays alive.\n\n**Resilience** is the community's shock-absorber: social networks, savings groups, community health volunteers, the chief's durbar. Recovery that builds on these, rather than parachuting in outsiders, creates capacity that also survives the next disaster. And the staff? You are survivors too. After intense events, expect a normal dose of sleeplessness, replaying and irritability; most settles within weeks. Warning signs it is not settling: weeks of insomnia, avoiding the ward, detachment, drinking to sleep, hopelessness — then seek support, peer or counselling, not as weakness but as maintenance of the instrument patients depend on.",
      },
      {
        type: "clinical_pearl",
        body: "In the weeks after a flood, report every case of acute watery diarrhoea. The cholera curve of the disaster is drawn by whoever reports the first case — and by nobody else.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Three weeks after the flood, your clinic has reopened. A colleague — calm and heroic through the response — now avoids the maternity ward, snaps at students and admits she 'just doesn't sleep anymore.' The same week, two children from the displaced camp present with acute watery diarrhoea.\n\nWhat two recovery issues sit on your desk?\n\nAnswer: One is surveillance: acute watery diarrhoea in a displaced camp after flooding is suspected cholera until proven otherwise — ORS, isolation per protocol, specimens, and immediate IDSR notification. The other is staff recovery: her stress reactions are lasting and disrupting function, so encourage her gently toward support, take some load from her, skip the gossip. Recovery is both the community's outbreak curve and the nurse's sleep; a system that only treats the first loses the second.",
      },
      {
        type: "memory_trick",
        body: "**W-A-T-E-R for recovery: Watch for outbreaks, All services restored (cold chain, ANC, TB), Track patients lost to follow-up, Engage community assets, Rest and support for staff.** Then build back better — above the waterline, not merely back to it.",
      },
      {
        type: "summary",
        body: "- Recovery outlasts the cameras — months to years.\n- Restore in order: water and sanitation, cold chain and immunization, ANC and deliveries, TB and HIV continuity.\n- Post-disaster surveillance: cholera after floods, malaria after standing water, meningitis after crowding.\n- Community resilience grows from local networks — build back better, above the waterline.\n- Staff stress reactions are normal; weeks of insomnia, avoidance or hopelessness are referral moments.\n- Peer support and debriefing are maintenance, not weakness.",
      },
    ],
    questions: [
      {
        topic: "Recovery After Disasters",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is cholera surveillance heightened after a flood?",
        options: [
          "Flooding contaminates water sources, so waterborne disease can follow",
          "Cholera bacteria swim directly into the blood during floods",
          "Hospitals are emptier, so reporting is easier",
          "Floodwater kills cholera bacteria, ending all risk",
        ],
        correctIndex: 0,
        explanation:
          "Floods mix faecal matter with drinking-water sources, the classic cholera setup. Heightened surveillance and immediate reporting of acute watery diarrhoea catch the curve early enough to break it.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Recovery After Disasters",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Six weeks after a mass casualty response, a nurse still cannot sleep, avoids the ward and feels detached. What does this suggest?",
        options: [
          "Normal, healthy adaptation to stress",
          "Stress reactions that are not settling — encourage support through peer, supervisory or counselling channels",
          "A pure physical fitness problem",
          "She should be transferred to another facility without discussion",
        ],
        correctIndex: 1,
        explanation:
          "Weeks of insomnia, avoidance and detachment pass the line from normal reaction to persistent stress injury. Support is the treatment: peer debriefing, supervision, counselling — offered without stigma.",
        courseSlug: "emergency-disaster-nursing",
      },
      {
        topic: "Recovery After Disasters",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does 'build back better' mean for a flooded clinic?",
        options: [
          "Rebuild exactly as before, but faster",
          "Rebuild with a bigger signboard",
          "Rebuild in ways that reduce future risk — safer siting, stronger systems, community capacity",
          "Do not rebuild; close the service permanently",
        ],
        correctIndex: 2,
        explanation:
          "Recovery is the rare chance to remove the vulnerability the disaster exposed: siting above flood lines, robust cold chain and water systems, and community structures that carry the next shock.",
        courseSlug: "emergency-disaster-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Recovery After Disasters",
        front: "Three post-disaster outbreak patterns to watch?",
        back: "Cholera and other waterborne disease after floods; malaria where water stands; meningitis with harmattan dust and crowded displacement camps.",
      },
      {
        topic: "Recovery After Disasters",
        front: "What is 'build back better'?",
        back: "Recovery that reduces future risk — safer siting, stronger systems and community capacity — instead of restoring the same vulnerability.",
      },
      {
        topic: "Recovery After Disasters",
        front: "Normal stress reaction vs. when to seek help?",
        back: "Sleeplessness, replaying and irritability settling within weeks are normal. Weeks of insomnia, avoidance, detachment, substance use or hopelessness call for active support.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Health Emergency and Disaster Risk Management Framework",
        year: "2019",
      },
      {
        organization: "Inter-Agency Standing Committee (IASC)",
        title: "Guidelines on Mental Health and Psychosocial Support in Emergency Settings",
        year: "2007",
      },
      {
        organization: "WHO",
        title: "Cholera fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/cholera",
        note: "Check for the latest update.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Public Health Foundations",
    lessonTitle: "What Is Public Health?",
    description:
      "From clean water to health policy — the discipline that treats whole populations, and why every midwife already works in it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define public health in Winslow's terms and describe the population lens.",
      "Describe the core functions and the three levels of prevention.",
      "Identify Ghana's public health structures and the midwife's role within them.",
    ],
    tags: ["public health", "foundations", "prevention levels", "chps", "ghana health service"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You treat one mother; public health asks why forty mothers in this district were anaemic before they ever reached you. That shift of lens — from the patient in front of you to the population behind her — is the whole of public health.\n\nCharles-Edward Winslow's 1920 definition still stands: public health is the science and art of preventing disease, prolonging life and promoting health through organized community effort. As a midwife you are not adjacent to that effort; you are one of its frontline workers.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Public health's **core functions** are three: **assessment** — measuring the population's health (how many home deliveries? which community's children are stunted?); **policy development** — turning evidence into rules (salt iodisation, tobacco taxation, free maternal care); and **assurance** — making sure services actually reach people (CHPS zones, outreach clinics, immunization days). Its classic tool is prevention at three levels: **primary** — stop disease starting (vaccination, clean water, insecticide-treated nets); **secondary** — find it early (ANC screening for anaemia and pre-eclampsia, growth monitoring); **tertiary** — limit the damage (physiotherapy after stroke, surgery and reintegration for the woman with obstetric fistula).\n\nThis quiet discipline's achievements are the reason you practise comfortably: smallpox eradicated, Guinea worm nearly gone from Ghana, polio pushed to the brink, iodised salt, safer childbirth, life expectancy climbing. In Ghana's structure you will meet it as the Ghana Health Service with its district health directorates, the CHPS compound bringing care door-to-door, the National Health Insurance Scheme, disease control officers and health promotion teams. And the midwife sits at the junction: every ANC visit is surveillance, every education talk is health promotion, every home visit is community assessment — the individual care you give feeds the population's data, and the population's programmes send you the next mother.",
      },
      {
        type: "clinical_pearl",
        body: "When the same problem walks into your clinic three times in one week — three anaemic mothers, three home deliveries — it has stopped being three patients and become one public health signal. Report it: that is surveillance in its simplest clothes.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In one month your CHPS zone records three home deliveries, two of them managed by unskilled helpers when the placenta would not come. The district asks your team what it plans to do.\n\nIs this three unlucky patients or a public health problem — and what does the public health response look like?\n\nAnswer: Three events in one zone in one month is a pattern, not luck, and the public health lens asks why the pattern exists: distance, cost, night transport, or fear of disrespect at the facility. The response is organized community effort: map the affected communities, consult through durbars with assembly members and traditional birth attendants, intensify ANC education on birth preparedness, propose solutions for night transport — possibly a maternity waiting home — and feed the data upward so the district can weigh staffing or outreach. Treating the three mothers is care; removing the pattern is public health.",
      },
      {
        type: "memory_trick",
        body: "Public health = **the patient is the village.** Its three jobs: **A-P-A — Assess, Policy, Assure.** Prevention's three hands: stop it starting, catch it early, contain the damage — primary, secondary, tertiary.",
      },
      {
        type: "summary",
        body: "- Winslow: preventing disease, prolonging life, promoting health through organized community effort.\n- Lens shift: from one patient to the population's patterns.\n- Core functions: assessment, policy development, assurance.\n- Prevention: primary (vaccines, nets, clean water), secondary (screening), tertiary (limiting damage).\n- Ghana's structures: GHS districts, CHPS, NHIS, health promotion teams.\n- The midwife is a public health worker: ANC is surveillance, education is promotion.",
      },
    ],
    questions: [
      {
        topic: "What Is Public Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Clean drinking water and latrine construction are examples of which level of prevention?",
        options: [
          "Tertiary prevention",
          "Secondary prevention",
          "Quaternary prevention",
          "Primary prevention",
        ],
        correctIndex: 3,
        explanation:
          "Safe water and sanitation stop disease from ever starting — primary prevention in its purest form, protecting whole populations before anyone falls sick.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "What Is Public Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife notices several mothers from one community arriving anaemic over two months and reports the pattern to the district. Which core public health function is she performing?",
        options: [
          "Assurance",
          "Policy development",
          "Assessment — measuring the population's health",
          "Clinical audit",
        ],
        correctIndex: 2,
        explanation:
          "Assessment is the ongoing measurement of community health. Spotting, counting and reporting a pattern is surveillance — the assessment function working through a midwife's eyes.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "What Is Public Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which phrase best captures the public health lens?",
        options: [
          "Treat the loudest patient first",
          "The patient is the population — patterns, not just individuals",
          "Care only for those who attend clinic",
          "Public health ends at the hospital gate",
        ],
        correctIndex: 1,
        explanation:
          "Public health asks why a cluster exists and intervenes on the cause — water, vectors, access, behaviour — rather than only treating the individuals who happen to arrive.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "What Is Public Health",
        front: "Winslow's definition of public health?",
        back: "The science and art of preventing disease, prolonging life and promoting health through organized community effort (1920).",
      },
      {
        topic: "What Is Public Health",
        front: "The three core functions of public health?",
        back: "Assessment (measure the population's health), policy development (turn evidence into rules), assurance (make services actually reach people).",
      },
      {
        topic: "What Is Public Health",
        front: "One example each of primary, secondary and tertiary prevention in midwifery?",
        back: "Primary: ITNs and vaccination in pregnancy. Secondary: ANC screening for anaemia and pre-eclampsia. Tertiary: surgical repair and reintegration for obstetric fistula.",
      },
    ],
    sources: [
      {
        organization: "Science (journal)",
        title: "Winslow C-E A. The Untilled Fields of Public Health",
        year: "1920",
      },
      {
        organization: "WHO/UNICEF",
        title: "Declaration of Astana on Primary Health Care",
        year: "2018",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): the community health programme",
        note: "GHS programme documentation — verify current policy edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Public Health Foundations",
    lessonTitle: "Disease Prevention at Community Level",
    description:
      "Vaccination, nets, safe water and outbreak detective work — the community programmes that stop disease before it ever reaches your ward.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the levels of prevention applied at community level.",
      "Explain herd immunity and Ghana's EPI schedule basics.",
      "Apply community outbreak-control actions: notification, case finding, contact tracing and catch-up immunization.",
    ],
    tags: ["prevention", "community", "immunization", "epi", "outbreak control", "herd immunity"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every cholera case on your ward began in a community — a water source, a household, a missed vaccine. Prevention at community level is public health's sharpest weapon: programmes designed so the disease never makes it to the admission book.\n\nHere you meet that machinery: immunization days, bed nets, safe-water campaigns, contact tracing, and the outreach that carries prevention to doorsteps.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Community prevention runs on the three levels, scaled to villages. **Primary**: immunization through Ghana's Expanded Programme on Immunization — BCG at birth; oral polio, pentavalent (DPT-HepB-Hib), pneumococcal and rotavirus vaccines across the 6, 10 and 14-week visits; measles-rubella and yellow fever at nine months — plus vitamin A, insecticide-treated nets for every pregnancy, safe water and sanitation, and ANC health education. **Secondary**: growth monitoring and child welfare clinics that catch faltering weight early, and contact tracing that hunts everyone exposed to a case of measles or meningitis. **Tertiary**: rehabilitation of the child who survived meningitis, support for families of children disabled by preventable disease.\n\nTwo ideas power the whole system. **Herd immunity**: when most of the community is immune, the germ cannot find enough hosts to travel — which protects the baby too young to be vaccinated and the child too ill for vaccines. That is why every unvaccinated child matters statistically, not just personally. And **community ownership**: prevention works when it belongs to the people — chiefs hosting the durbar, volunteers going door-to-door, mothers' groups planning net-washing days. A measles cluster in an under-vaccinated community triggers the classic response: notify immediately, define cases, find every case and contact, check the vaccination cards, catch up the missed doses in outreach, and educate on the spot — while reporting every step upward through the district surveillance system.",
      },
      {
        type: "clinical_pearl",
        body: "Herd immunity is the village carrying its most fragile members. Every card you check at child welfare clinic is either a shield added to the circle — or a gap the fire can walk through.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Child welfare clinic brings you a cluster: three children from one farming community with fever and rash, the eldest with the classic measles look. Their cards show one dose of measles-rubella given late to one child and none to the others; several younger siblings are entirely unvaccinated.\n\nWhat does community-level prevention now demand?\n\nAnswer: Measles is immediately notifiable under IDSR — report at once. Then the machinery moves: confirm with the district team, define cases, find every fever-and-rash child in the settlement and every contact, check the vaccination status of all children there, run a catch-up immunization session for every eligible and missed child, give vitamin A per protocol, and educate households on care and isolation. The cluster is a hole in the shield; the response rebuilds the circle — and the surveillance report makes the pattern visible to the region.",
      },
      {
        type: "memory_trick",
        body: "The EPI ladder is an age ladder: **Birth (BCG) → 6, 10, 14 weeks (polio, pentavalent, pneumococcal, rotavirus) → 9 months (measles-rubella, yellow fever).** Climb it in your head at every card check.",
      },
      {
        type: "summary",
        body: "- Primary at community level: EPI vaccines, ITNs, safe water, sanitation, health education.\n- Ghana EPI: BCG at birth; 6-10-14-week vaccines; measles-rubella and yellow fever at 9 months.\n- Herd immunity protects those who cannot be vaccinated — every card is part of the shield.\n- Secondary: growth monitoring, contact tracing, screening at outreach.\n- Outbreak response: notify, case-find, trace, catch up immunization, educate, report upward.\n- Community ownership — chiefs, volunteers, mothers' groups — makes prevention stick.",
      },
    ],
    questions: [
      {
        topic: "Community Disease Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Ghana's EPI schedule, when are measles-rubella and yellow fever vaccines given?",
        options: [
          "At 9 months",
          "At birth",
          "At 6 weeks",
          "At 5 years",
        ],
        correctIndex: 0,
        explanation:
          "Both measles-rubella and yellow fever vaccines come at nine months, after the maternal antibodies that would neutralize them have faded. The earlier visits carry BCG, polio, pentavalent, pneumococcal and rotavirus vaccines.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Disease Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is herd immunity?",
        options: [
          "Immunity obtained from breastfeeding alone",
          "The natural resistance of adults to childhood diseases",
          "When enough of the population is immune that infection cannot spread, protecting even those who cannot be vaccinated",
          "Immunity that lasts for one season only",
        ],
        correctIndex: 2,
        explanation:
          "High coverage breaks the chain of transmission, shielding the too-young, the immunocompromised and the unvaccinated. This is why coverage targets matter to the whole community, not only to each family.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Disease Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a measles cluster, a nurse finds several unvaccinated contacts. What is the community-level action?",
        options: [
          "Wait to see whether they develop measles first",
          "Notify per IDSR, trace contacts, and organize catch-up immunization for all eligible children",
          "Give antibiotics to all contacts",
          "Close the clinic until the outbreak ends",
        ],
        correctIndex: 1,
        explanation:
          "Measles response combines notification, active case finding, contact tracing and catch-up vaccination with vitamin A per protocol. Waiting generates cases; antibiotics do not touch a virus.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Community Disease Prevention",
        front: "Ghana's EPI key visits?",
        back: "Birth: BCG. 6, 10, 14 weeks: oral polio, pentavalent (DPT-HepB-Hib), pneumococcal, rotavirus. 9 months: measles-rubella and yellow fever. Vitamin A and boosters follow the schedule.",
      },
      {
        topic: "Community Disease Prevention",
        front: "Herd immunity in one sentence?",
        back: "When nearly everyone is immune, the germ cannot travel — protecting the too-young and the immunocompromised who cannot be shielded directly.",
      },
      {
        topic: "Community Disease Prevention",
        front: "The community outbreak response sequence?",
        back: "Notify (IDSR) → case definition and active case finding → contact tracing → catch-up immunization → household education → report through the surveillance chain.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization — childhood immunization schedule",
        note: "Verify the current national schedule card.",
      },
      {
        organization: "WHO",
        title: "Immunization coverage fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage",
        note: "Check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Measles fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/measles",
        note: "Check for the latest update.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Public Health Foundations",
    lessonTitle: "Maternal and Community Health Foundations",
    description:
      "Three delays, birth plans and the community design of safe motherhood — the population-scale foundation of your future speciality.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three delays model and its community-level solutions.",
      "Explain the core maternal health indicators (MMR, skilled birth attendance).",
      "Apply birth preparedness and complication readiness counselling.",
    ],
    tags: ["maternal health", "community", "three delays", "birth preparedness", "safe motherhood"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A mother dies of postpartum haemorrhage not in one moment but in a chain of moments: the family waited to decide; the river crossing took two hours; the facility had no blood. Safe motherhood at community level is the discipline of shortening that chain before the emergency ever begins.\n\nThis is midwifery seen from the population side: where maternal health meets roads, money, tradition and community design — and where your ANC counselling becomes a health-system intervention.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The framework that changed the world is the **three delays** (Thaddeus and Maine, 1994): delay in **deciding** to seek care (family authority, cost, fear, memories of disrespect); delay in **reaching** care (distance, roads, rivers, no transport at night); delay in **receiving** care once arrived (staff, supplies, blood, attitude). Every maternal death review walks this chain, and every community intervention targets one of its links.\n\nThe community arsenal maps onto it. Against delay one: ANC education, women's and mothers' groups, involving husbands and mothers-in-law, durbars on danger signs — and respectful care at the facility, because a woman scolded once will not return in an emergency. Against delay two: **birth preparedness and complication readiness** — every pregnant family plans the delivery place, saves money in advance, identifies transport and who commands it at 2 a.m., identifies a blood donor, and knows the danger signs; community emergency transport schemes and maternity waiting homes near the referral facility shorten the distance itself. Against delay three: facility readiness — skilled staff, essential drugs, functioning theatre, blood — which the midwife influences by reporting gaps honestly. Progress is measured with the **maternal mortality ratio** (deaths per 100,000 live births), skilled birth attendance and ANC coverage. Ghana has cut maternal deaths substantially over two decades; the unfinished work sits precisely in those three delays.",
      },
      {
        type: "clinical_pearl",
        body: "Ask the ANC mother three questions and you have diagnosed her delays: Who decides to go when there is a problem? What transport will carry you at 2 a.m.? Where is the money saved? Whatever is blank is your counselling plan.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 32 weeks in a riverside village attends outreach ANC — her third visit. She is anaemic and on treatment, and she intends to deliver at home as her mother did, 'because the canoe man does not cross at night.'\n\nWhich delays is she living, and what does the plan look like?\n\nAnswer: Delay one — tradition favours home birth. Delay two — no night transport across the river. The plan: correct the anaemia now; counsel birth preparedness with the husband and mother-in-law present — deliver at the referral facility, save the money now, agree the transport arrangement including the cost of an emergency night crossing, identify a blood donor, and review every danger sign. Where a maternity waiting home exists, book her to stay near the facility from about 38 weeks. Each item on that plan is one link of the chain deliberately shortened before the bleeding ever starts.",
      },
      {
        type: "memory_trick",
        body: "The **3 D's: Decide, Distance, Door.** Decide at home — counsel the family. Distance on the road — transport and money. Door of the facility — readiness and respect. And remember **BPCR**: Birth Preparedness and Complication Readiness.",
      },
      {
        type: "summary",
        body: "- Three delays: deciding to seek, reaching care, receiving care — every death walks the chain.\n- Delay 1 answers: ANC education, family involvement, respectful care.\n- Delay 2 answers: birth plan — place, money, transport, blood donor, danger signs; waiting homes.\n- Delay 3 answers: facility readiness — staff, drugs, blood, theatre — and honest gap reporting.\n- Indicators: maternal mortality ratio per 100,000 live births, skilled attendance, ANC coverage.\n- Your ANC counselling is the health system reaching into the household.",
      },
    ],
    questions: [
      {
        topic: "Maternal and Community Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the three delays model, what is the second delay?",
        options: [
          "Delay in deciding to seek care",
          "Delay in reaching the facility — transport, distance, rivers",
          "Delay in receiving care once at the facility",
          "Delay in documenting the case",
        ],
        correctIndex: 1,
        explanation:
          "Delay two is everything between the decision and the door: roads, rivers, money and vehicles at night. Birth plans, transport schemes and maternity waiting homes attack exactly this link.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Maternal and Community Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of items belongs in a birth-preparedness plan?",
        options: [
          "The baby's name, the church dedication date and the photo outfit",
          "The mother's genotype and the hospital's phone number only",
          "A list of foods to avoid in the third trimester",
          "Planned delivery place, saved money, transport and driver, blood donor, danger signs",
        ],
        correctIndex: 3,
        explanation:
          "Birth preparedness and complication readiness answers the three delays in advance: where to deliver, how to pay, how to travel — including at night — who donates blood, and what danger signs trigger action.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Maternal and Community Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A community's facility deliveries fell after staff publicly scolded a labouring woman. Which delay grew?",
        options: [
          "The first — deciding to seek care, because fear of disrespect now outweighs the emergency",
          "The second only",
          "The third only",
          "None — respect has nothing to do with the delays",
        ],
        correctIndex: 0,
        explanation:
          "Disrespect is a driver of delay one: families who expect humiliation decide late, or decide to stay home. Respectful care is therefore a clinical intervention, not a courtesy.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Maternal and Community Health",
        front: "The three delays model?",
        back: "Delay 1: deciding to seek care (family, cost, fear). Delay 2: reaching care (distance, transport). Delay 3: receiving adequate care at the facility (staff, supplies, blood, attitude). Thaddeus & Maine, 1994.",
      },
      {
        topic: "Maternal and Community Health",
        front: "What does the maternal mortality ratio count?",
        back: "Maternal deaths per 100,000 live births — the headline population measure of safe motherhood.",
      },
      {
        topic: "Maternal and Community Health",
        front: "Five elements of birth preparedness and complication readiness?",
        back: "Delivery place chosen, money saved, transport and driver identified (with the night plan), a blood donor named, and the household knowing the danger signs.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO recommendations on antenatal care for a positive pregnancy experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Social Science & Medicine (journal)",
        title: "Thaddeus S, Maine D. Too Far to Walk: Maternal Mortality in Context",
        year: "1994",
      },
      {
        organization: "WHO, UNICEF, UNFPA, World Bank Group & UNDESA/Population Division",
        title: "Trends in Maternal Mortality 2000 to 2020",
        year: "2023",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Epidemiology Basics",
    lessonTitle: "Epidemiology: The Detective Work of Health",
    description:
      "Outbreaks investigated, rates compared, causes hunted — the science that finds the pump behind the cholera.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define endemic, outbreak, epidemic, pandemic, incidence and prevalence.",
      "Describe the outbreak investigation sequence and the epidemic curve.",
      "Apply person-place-time reasoning to a community cluster.",
    ],
    tags: ["epidemiology", "outbreak", "incidence", "prevalence", "cholera", "john snow"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Epidemiology is the detective department of health: who fell sick, where, when — and what connected them. Its most famous case solved cholera decades before anyone could see the germ: John Snow mapped London's deaths, followed them to one water pump, removed the handle, and the outbreak died.\n\nYour district uses the same method, just with boreholes instead of Broad Street — and midwives are among its field eyes.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First, the vocabulary. **Endemic** is a disease's baseline presence (malaria in Ghana). An **outbreak** is cases above that baseline in place and time — cholera in one town this month; an **epidemic** is the same at wider scale; a **pandemic** crosses nations, as COVID-19 did. **Incidence** counts new cases over a period — the flow; **prevalence** counts everyone existing with the condition at a moment — the reservoir. Two measures do ward work: case fatality rate (deaths among cases) tells how deadly; attack rate (cases among the exposed) tells how contagious during an outbreak.\n\nThe detective method follows a sequence whenever a cluster appears: confirm the diagnosis; write a **case definition** (who counts — 'acute watery diarrhoea in a resident of Town X since the first of the month'); find cases actively, not passively; then run the descriptive analysis — **person, place, time**: cases laid out by age, by household, by date of onset. The resulting **epidemic curve** tells the story: a sharp peak suggests one common source (one contaminated borehole, one funeral meal); a slow, stair-stepping rise suggests spread from person to person. Form the hypothesis, test it — compare the sick and the well, who drank from which well — control immediately while confirming, and communicate upward and to the community. Control never waits for final proof: Snow removed the handle first and argued second.",
      },
      {
        type: "clinical_pearl",
        body: "Person, place, time cracks most village mysteries. Sketch the cases on paper — house by house, day by day — and the map often points its own finger at the well, the funeral or the market.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Over five days, twenty-three people in one town develop acute watery diarrhoea. You plot the cases: onset dates cluster within 48 hours of the town's funeral, ages span whole households, and twenty of the twenty-three drew water from the borehole by the lorry park — while households on the hill's second borehole are almost untouched.\n\nWhat does the pattern suggest, and what do you do next?\n\nAnswer: The tight time clustering and whole-household spread point to a common source rather than slow person-to-person drips, and the place pattern points to the funeral area and the lorry-park borehole. Next: report and treat — ORS corner, referral of the severe, specimens for confirmation — protect the exposed by closing the suspect borehole, promoting safe water and chlorinating, and continue surveillance for new cases. The untouched hill borehole is the natural experiment that tests the hypothesis, exactly as Snow's two water companies did in 1854.",
      },
      {
        type: "memory_trick",
        body: "Outbreak vocabulary as weather: **endemic = the climate; outbreak = a storm over one town; epidemic = a storm over the region; pandemic = the whole sky.** The detective's chant: **Person, Place, Time — then find the pump.**",
      },
      {
        type: "summary",
        body: "- Endemic = baseline presence; outbreak, epidemic and pandemic = cases above it at growing scale.\n- Incidence = new cases (the flow); prevalence = existing cases (the reservoir).\n- Case fatality rate measures deadliness; attack rate measures contagiousness in an outbreak.\n- Outbreak steps: confirm → case definition → active case finding → person/place/time → hypothesis → test → control → communicate.\n- A sharp epidemic curve peak suggests a common source; slow stairs suggest person-to-person spread.\n- Control begins while the investigation confirms — remove the pump handle first.",
      },
    ],
    questions: [
      {
        topic: "Epidemiology Basics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Malaria's constant, year-round presence in Ghana is described as:",
        options: [
          "A pandemic",
          "An outbreak",
          "Endemic — the disease's baseline presence",
          "Sporadic",
        ],
        correctIndex: 2,
        explanation:
          "Endemic describes a disease's usual, expected level in a place. An outbreak means cases above that expected level — which is why knowing the baseline is the detective's first tool.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Epidemiology Basics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Cases counted by date of onset and plotted per day during an outbreak produce:",
        options: [
          "A survival curve",
          "A growth chart",
          "A pie chart",
          "An epidemic curve",
        ],
        correctIndex: 3,
        explanation:
          "The epidemic curve — cases per day of onset — is the outbreak's biography: its shape distinguishes a common-source spike from person-to-person stairs, and shows whether control is working.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Epidemiology Basics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A village epidemic curve rises sharply over two days and then falls. What does this shape most suggest?",
        options: [
          "A common source — everyone exposed around the same time, like one contaminated well or meal",
          "Slow person-to-person transmission",
          "A seasonal change in the endemic level",
          "A data-entry error",
        ],
        correctIndex: 0,
        explanation:
          "When everyone was exposed at once, everyone falls sick in one tight cluster — a sharp peak that then falls as the source is closed or exhausted. Person-to-person spread climbs in stair steps instead.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Epidemiology Basics",
        front: "Incidence vs prevalence?",
        back: "Incidence: NEW cases arising over a period (the flow). Prevalence: all cases existing at one point in time (the reservoir). Long-lasting diseases raise prevalence even with steady incidence.",
      },
      {
        topic: "Epidemiology Basics",
        front: "Outbreak vs epidemic vs pandemic?",
        back: "Outbreak: cases above baseline in a place and time. Epidemic: the same over a wider region. Pandemic: spread across countries or continents.",
      },
      {
        topic: "Epidemiology Basics",
        front: "What does a sharp, brief epidemic-curve peak indicate?",
        back: "A common-source outbreak — one exposure around one time, such as a contaminated well or a single funeral meal, as in John Snow's Broad Street pump.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Bonita R, Beaglehole R, Kjellström T. Basic Epidemiology (2nd edition)",
        year: "2006",
      },
      {
        organization: "WHO",
        title: "Cholera fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/cholera",
        note: "Check for the latest update.",
      },
      {
        organization: "Jones & Bartlett Learning",
        title: "Friis RH, Sellers TA. Epidemiology for Public Health Practice (5th edition)",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Epidemiology Basics",
    lessonTitle: "Surveillance and Disease Patterns",
    description:
      "Counting illness to see patterns — how routine reports, zero reports and immediate alerts become the district's early-warning radar.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe passive, active and sentinel surveillance.",
      "Explain IDSR immediate-report diseases and weekly zero reporting.",
      "Recognize data-quality principles and the purpose of DHIMS reporting.",
    ],
    tags: ["surveillance", "data", "idsr", "dhims", "notifiable diseases", "reporting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Surveillance is public health standing on watch: the continuous, systematic collection of health data, its analysis, and — the part that makes it matter — action taken on what appears. A health system without surveillance is a town without a fire bell.\n\nIn Ghana the bell is the IDSR system — Integrated Disease Surveillance and Response — and every nurse and midwife who fills a register or makes a phone call is one of its sensors.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Surveillance comes in modes. **Passive** surveillance is the routine: facilities report the cases that walk through their doors, on schedule, through registers and monthly summaries — cheap and wide, but it only sees patients who reach care. **Active** surveillance goes hunting: during an outbreak, or in programmes like polio eradication, teams visit communities and facilities to find cases, including the ones that never reached a clinic. **Sentinel** surveillance uses selected sites for detailed, regular reporting of certain conditions — trends tracked at a few well-run stations rather than everywhere.\n\nUnder IDSR, diseases sit in reporting bands. Some are **immediately notifiable by phone or the fastest means**: suspected cholera, measles, yellow fever, bacterial meningitis, acute flaccid paralysis — polio's red flag — viral haemorrhagic fevers, maternal deaths and others, followed by written reports and laboratory confirmation. Others report weekly; and famously, facilities must send their **weekly zero report** — 'no cases this week' — because silence is ambiguous, while an explicit zero proves someone was actually counting. Data flows from facility to district to region into the national **DHIMS** platform, where patterns are analysed and thresholds act: meningitis alert and epidemic thresholds trigger vaccination decisions; a handful of watery-diarrhoea cases on a Tuesday can become an outbreak curve by Friday. Data quality is the whole game — complete (every unit, including zeros), timely (weekly means weekly), accurate (dates of onset, not dates of noticing) — and the loop closes when reports return to the reporters and action follows the data visibly.",
      },
      {
        type: "clinical_pearl",
        body: "Two cases of acute flaccid paralysis in a district are a phone call today, not a form next week. Polio eradication lives or dies in that one habit: report immediately, and let the stool specimens and investigation follow at speed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On Thursday a three-year-old is brought to your CHPS compound with sudden floppiness of both legs after a fever — you suspect acute flaccid paralysis. On Friday a second child from a nearby community arrives with the same picture.\n\nWhat does surveillance demand of you?\n\nAnswer: AFP is immediately notifiable under IDSR: call the district surveillance officer today, by phone, rather than waiting for the weekly report. Document onset dates, examine and keep both children, collect two stool specimens at least twenty-four hours apart within fourteen days of onset and keep them cold, as the programme directs, and begin the line-list and case investigation. Two AFP cases in neighbouring communities is a cluster the system must investigate fast — every AFP is treated as possible polio until the laboratory proves otherwise, and the speed of your phone call is the speed of the response.",
      },
      {
        type: "memory_trick",
        body: "Surveillance is **RADAR: Reports in, Analyse, Decide, Act, Return the signal.** The golden habits: **phone first, form follows; zero reports weekly; onset dates, not notice dates.**",
      },
      {
        type: "summary",
        body: "- Surveillance = continuous collection + analysis + action — the system's early-warning bell.\n- Passive: routine reports of cases reaching facilities. Active: teams hunting cases. Sentinel: trend stations.\n- IDSR: some diseases reported immediately — cholera, measles, AFP, yellow fever, meningitis, VHF, maternal deaths.\n- Weekly zero reporting turns silence into information.\n- Data flows facility → district → region → DHIMS; thresholds trigger response.\n- Quality: complete, timely, accurate; close the loop back to the reporters.",
      },
    ],
    questions: [
      {
        topic: "Surveillance and Disease Patterns",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You see a child with sudden weakness of both legs after a fever — suspected acute flaccid paralysis. What do you do?",
        options: [
          "Notify the district surveillance officer immediately by phone — AFP is immediately notifiable under IDSR",
          "Note it in the register and report next month",
          "Wait for a third case to confirm a pattern",
          "Refer only the mother for testing",
        ],
        correctIndex: 0,
        explanation:
          "AFP is polio's alarm bell, and every case is treated as possible polio until laboratory testing says otherwise. Immediate phone notification, then stool specimens and investigation — speed is the entire strategy.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Surveillance and Disease Patterns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must facilities submit a weekly zero report?",
        options: [
          "To show that the facility is empty",
          "Because zeros earn extra funding",
          "It is a computer artefact of DHIMS",
          "Because an explicit zero proves someone was counting — silence is ambiguous",
        ],
        correctIndex: 3,
        explanation:
          "'No cases this week' is information; silence is not. Zero reporting keeps the radar switched on, tells managers the unit is functioning, and makes any real rise visible against a true baseline.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Surveillance and Disease Patterns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a cholera outbreak, surveillance officers visit homes and compounds searching for unreported diarrhoea cases. What is this called?",
        options: [
          "Passive surveillance",
          "Sentinel surveillance",
          "Active surveillance — teams hunting for cases",
          "Zero reporting",
        ],
        correctIndex: 2,
        explanation:
          "Active surveillance seeks cases out in the community instead of waiting for them to present — essential during outbreaks and eradication programmes, where the hidden case matters most.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Surveillance and Disease Patterns",
        front: "Passive vs active vs sentinel surveillance?",
        back: "Passive: routine reports of cases that reach facilities. Active: field teams search out cases (outbreaks, polio eradication). Sentinel: selected sites report in depth to track trends.",
      },
      {
        topic: "Surveillance and Disease Patterns",
        front: "Name four immediately notifiable conditions under IDSR.",
        back: "Suspected cholera, measles, yellow fever, bacterial meningitis, viral haemorrhagic fevers, acute flaccid paralysis and maternal deaths — any four of these.",
      },
      {
        topic: "Surveillance and Disease Patterns",
        front: "Two habits that keep surveillance data trustworthy?",
        back: "Report immediately — phone first, form follows; and send the weekly report even when it is zero. Record dates of onset, not dates of noticing.",
      },
    ],
    sources: [
      {
        organization: "WHO Regional Office for Africa",
        title: "Technical Guidelines for Integrated Disease Surveillance and Response in the African Region (3rd edition)",
        year: "2019",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS) reporting requirements",
        note: "GHS data-management documentation — verify current version.",
      },
      {
        organization: "Global Polio Eradication Initiative (GPEI)",
        title: "Acute flaccid paralysis (AFP) surveillance standards",
        note: "Check current GPEI surveillance guidance.",
      },
    ],
  },
];
