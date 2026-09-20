// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch C (Neonatal & Paediatric Nursing)
// 16 lessons anchored to prisma/seed-data/anchors/y3s2-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Neonatal Danger Signs",
    description:
      "A newborn cannot say where it hurts — but the body speaks through a short list of warning signs. Learn the list, and you will know the baby who needs hospital today.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the WHO/UNICEF neonatal danger signs and what each one may mean.",
      "Explain why newborn illness presents with vague, non-specific signs.",
      "Apply the danger signs to assess a baby at a CHPS compound and arrange urgent care.",
    ],
    tags: ["danger signs", "newborn", "referral", "assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Big people fall ill loudly and tell you the story. Newborns fall ill quietly — a feed refused here, a temperature drifting there — and by the time they look obviously sick, hours have already been lost. Where home births and early discharge are common, the day-three visit may be this baby's only safety net.\n\nSo WHO and UNICEF distilled neonatal illness into a short list of **danger signs**. The idea is simple: any one sign, in any baby, means this child needs assessment and urgent referral — not home advice and a review next week.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The list: **not feeding well** (or stopped feeding since birth); **convulsions**; **fast breathing** (60 breaths per minute or more); **severe chest in-drawing**; **fever 38°C or above, or cold below 35.5°C**; **movement only when stimulated, or no movement at all**; and **jaundice on day one, or yellow palms and soles**. Behind one sign can hide sepsis, meningitis, pneumonia, hypothermia or haemolysis — the sign is the alarm, not the diagnosis.\n\nYour response is a package: keep the baby warm (skin-to-skin on the mother, a hat, dry clothes — a cold baby must be rewarmed even while you refer), give the pre-referral first dose of antibiotics and any treatment your national protocol directs, arrange transport, tell the mother honestly what you are doing and why, and phone ahead if you can.",
      },
      {
        type: "clinical_pearl",
        body: "A mother who says \"the baby just isn't feeding like yesterday\" has handed you the earliest warning in neonatal medicine. Examine that baby fully — temperature, breathing, activity, colour — before you reassure anyone.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a CHPS compound postnatal visit, a day-three baby takes two weak sucks and stops. The mother says he has been \"sleeping too much\". His temperature is 35.6°C, and when you undress him he stirs briefly and goes still again. There is no fast breathing and the chest is clear.\n\nWhich danger signs has this baby already shown, and what are your next actions?\n\nAnswer: Poor feeding, abnormal temperature (below 35.5°C is a danger sign, and he is nearly there), and reduced movement fit the list — and hypothermia itself can be the face of sepsis. Rewarm him now with skin-to-skin contact and a hat while you complete your assessment, then give the pre-referral treatment your protocol directs, explain to the mother, and arrange urgent transport to the district hospital.",
      },
      {
        type: "memory_trick",
        body: "Chant the list like a counting rhyme: \"Won't FEED, FITS, breathes FAST, chest SUCKED IN, HOT or COLD, STILL as stone, YELLOW too soon.\" Any single line of the rhyme sends the baby to hospital — you never need two signs to act.",
      },
      {
        type: "summary",
        body: "- Danger signs: poor feeding, convulsions, fast breathing (≥60/min), severe chest in-drawing, fever ≥38°C or cold <35.5°C, no movement or movement only when stimulated, jaundice on day one or yellow palms and soles.\n- Newborn illness is vague by nature — one quiet sign can hide sepsis, meningitis or pneumonia.\n- One sign equals urgent referral: warm the baby, give pre-referral treatment per protocol, counsel the mother, transport, document.\n- Hypothermia in a newborn is never \"just cold weather\" — it may be the first sign of sepsis.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Danger Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in a one-week-old baby counts as a WHO danger sign requiring urgent referral?",
        options: [
          "Passing five soft yellow stools a day while feeding well",
          "Feeding poorly and moving only when stimulated",
          "Startling at sudden noises during sleep",
          "Having mild jaundice of the face on day five with good feeding",
        ],
        correctIndex: 1,
        explanation:
          "Poor feeding and movement only when stimulated are both danger signs — either alone means urgent assessment and referral. Frequent soft stools, a startle (Moro) reflex and mild facial jaundice peaking around day three to five in a well-feeding baby are normal findings.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Danger Signs",
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
          "A temperature below 35.5°C is a danger sign in its own right and may be the presenting sign of sepsis. Rewarming with skin-to-skin contact and a hat starts immediately, and the baby is managed as a danger-sign newborn with referral — never cold baths, which worsen heat loss, and never simple observation at home.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are danger signs so non-specific in newborns compared with older children?",
        options: [
          "Because newborns cannot develop severe infections in the first month",
          "Because the newborn brain and immune defences are immature, so illness shows as feeding, temperature, tone and breathing changes rather than local complaints",
          "Because danger signs are designed to detect surgical problems only",
          "Because newborns always show a rash before becoming seriously ill",
        ],
        correctIndex: 1,
        explanation:
          "An immature nervous and immune system means serious disease in a neonate surfaces as poor feeding, temperature instability, floppiness or abnormal breathing — vague signs that can each hide sepsis or meningitis. That is exactly why the WHO list uses whole-baby clues rather than specific complaints.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Danger Signs",
        front: "List the WHO/UNICEF neonatal danger signs.",
        back: "Poor feeding; convulsions; fast breathing (≥60/min); severe chest in-drawing; fever ≥38°C or temperature <35.5°C; movement only when stimulated or none; jaundice on day one or yellow palms and soles. Any one sign = urgent referral.",
      },
      {
        topic: "Neonatal Danger Signs",
        front: "A newborn's temperature is 35.4°C. What is this and what does it demand?",
        back: "Hypothermia — a danger sign. Rewarm immediately with skin-to-skin contact and a hat, look for other signs, give pre-referral care per protocol, and refer urgently; hypothermia can signal sepsis.",
      },
      {
        topic: "Neonatal Danger Signs",
        front: "Why does jaundice on day one qualify as a danger sign?",
        back: "Jaundice appearing within 24 hours suggests haemolysis (Rhesus or ABO incompatibility, G6PD deficiency), which can climb fast to bilirubin levels that damage the brain — it needs urgent assessment, not watching.",
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
        note: "Danger-sign and young-infant assessment content. Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "Ghana Health Service",
        title: "Newborn care guidelines and referral protocols",
        note: "Verify the current national version for pre-referral dosing and transport advice.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Prematurity: The Baby Who Came Early",
    description:
      "Before 37 weeks, every system of the baby is still under construction. Meet the challenges of the preterm newborn — and the simple care that saves them.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define prematurity and its gestational-age categories.",
      "Explain how immaturity affects the lungs, skin, brain, gut, liver, blood and eyes of the preterm baby.",
      "Apply core preterm care principles — warmth, feeding support, gentle handling and infection prevention.",
    ],
    tags: ["prematurity", "preterm", "rds", "kangaroo mother care", "lbw"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A baby born before 37 completed weeks is **preterm**. We describe them as late preterm (34–36 weeks), moderate (32–33), very (28–31) and extremely preterm (below 28). In Ghana, infection, malaria, hypertension, anaemia and teenage pregnancy push many babies out early.\n\nThe key insight: prematurity is not one problem but a whole-body state — every system needs your plan.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **lungs** lack mature surfactant, so breathing is stiff and fast and respiratory distress syndrome can develop. The **skin** is thin with little fat, so heat escapes fast — hypothermia is one of the most preventable killers. The **brain** has fragile vessels; handle gently, avoid bumps and rapid fluid changes. The **gut** cannot yet coordinate suck and swallow reliably (this matures around 32–34 weeks), so feeds may come as expressed breast milk by cup or tube, started carefully to protect against necrotising enterocolitis. The **liver** clears bilirubin poorly, so jaundice comes earlier, climbs higher and lasts longer. **Immunity** is thin-skinned and naive — hand hygiene is a treatment. The **eyes** of very preterm babies are vulnerable to retinopathy of prematurity.\n\nYour cornerstones are beautifully low-tech: warmth (skin-to-skin or **kangaroo mother care** for stable babies, with a hat and cap), the mother's own milk, minimal gentle handling, strict cleanliness, and early referral when a baby needs oxygen or tube feeding you cannot provide. Antenatal corticosteroids for the mother in threatened preterm labour mature the lungs.",
      },
      {
        type: "clinical_pearl",
        body: "The preterm baby loses heat through thin skin faster than a big water tank loses water through a crack. Warmth, milk and clean hands save more preterm babies in district facilities than any machine you are waiting for.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 33-week baby is born at your district hospital, limp and grunting. You dry him under a radiant warmer, and his breathing settles to fast but unlaboured. He is 1.8 kg, temperature holding at 36.5°C, and the mother asks anxiously whether she can breastfeed.\n\nWhat are your priorities in the first hours, and how do you answer her?\n\nAnswer: Keep him warm — continuous skin-to-skin with a hat once stable — and start expressed colostrum within the first hour by cup or tube, because his suck is not yet reliable, with the mother expressing every few hours to build her supply. Handle him gently, keep hands clean, watch for jaundice and apnoea, and review with the team for oxygen or specialist needs. Her milk is exactly the medicine he needs, so she is not a visitor — she is part of the treatment.",
      },
      {
        type: "memory_trick",
        body: "The whole-baby alphabet: **L**ungs (surfactant), **S**kin (heat leaks), **B**rain (handle gently), **G**ut (feeds by cup or tube), **L**iver (jaundice), **I**mmunity (clean hands), **E**yes (retinopathy). Then chant the care: **Warm, Milk, Gentle, Clean**.",
      },
      {
        type: "summary",
        body: "- Preterm = birth before 37 completed weeks; late (34–36), moderate (32–33), very (28–31), extreme (<28).\n- Every system is immature: surfactant-poor lungs, leaky skin, fragile brain, uncoordinated suck, slow bilirubin clearance, naive immunity.\n- Care cornerstones: warmth and kangaroo mother care, expressed breast milk by cup or tube, gentle minimal handling, strict hand hygiene.\n- Antenatal corticosteroids for the mother in threatened preterm labour mature the lungs — escalate early.\n- Jaundice arrives earlier and climbs higher in preterm babies — watch daily.",
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
          "Late preterm covers 34 to 36 weeks. The baby is preterm regardless of his weight; 28–31 weeks is very preterm and below 28 weeks is extremely preterm.",
        courseSlug: "neonatal-nursing",
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
        courseSlug: "neonatal-nursing",
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
          "Around 32 weeks the suck-swallow coordination is still maturing, so the mother's expressed milk is given early by cup or tube in frequent small feeds — her milk protects the immature gut. Delaying feeds, bottle formula and glucose water routines all increase risk.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Prematurity",
        front: "Define preterm birth and give the four categories.",
        back: "Birth before 37 completed weeks: late preterm 34–36, moderately preterm 32–33, very preterm 28–31, extremely preterm below 28 weeks.",
      },
      {
        topic: "Prematurity",
        front: "Which single drug given to the mother before a preterm birth can mature the baby's lungs?",
        back: "Antenatal corticosteroids (typically two doses) given in threatened preterm labour accelerate surfactant production and reduce respiratory distress syndrome and death.",
      },
      {
        topic: "Prematurity",
        front: "Name the four cornerstones of preterm care in a district facility.",
        back: "Warmth (kangaroo mother care and a hat for stable babies), the mother's expressed milk by cup or tube, gentle minimal handling, and strict infection prevention — then refer for oxygen or specialist needs.",
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
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Newborn care chapters. Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Low Birth Weight: Small but Vulnerable",
    description:
      "Under 2.5 kg, a baby's small reserves run out fast — heat, sugar and germ-fighting power all run short. Learn to spot the LBW baby and guard the three things that fail first.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define low birth weight and distinguish preterm LBW from term small-for-gestational-age babies.",
      "Explain the three headline risks of the LBW newborn: hypothermia, hypoglycaemia and infection.",
      "Apply a practical care plan for a small baby at a CHPS compound or district hospital.",
    ],
    tags: ["lbw", "growth", "hypoglycaemia", "hypothermia", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every baby must be weighed at birth — that single number sorts the vulnerable from the robust. **Low birth weight (LBW)** means less than 2500 g whatever the cause; below 1500 g is very low birth weight. Its roots run through malaria, maternal anaemia, hypertension, malnutrition, teenage pregnancy and short birth spacing.\n\nTwo roads lead to the same reading: a **preterm** baby came early; a **small-for-gestational-age (SGA)** baby reached term but grew poorly inside. The preterm one adds immature lungs and feeding to the risks of smallness.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Small reserves fail in three predictable ways. **Heat**: a large skin surface wrapped around little fat loses warmth fast — hypothermia. **Sugar**: a small liver stores little glycogen, so feeding gaps drop the blood glucose — watch for jitteriness, poor feeding, lethargy or apnoea. **Germs**: thin skin and a naive immune system invite infection, which in a small baby may present as cold rather than fever.\n\nThe counter-plan: warm the baby (skin-to-skin or kangaroo care with a hat — a wrapper does not make heat, a person does), feed early and often (within the first hour, then at least three-hourly **including at night**, expressed milk by cup if the suck is weak), and protect with clean hands, clean cord care and prompt treatment of danger signs. Weigh daily — steady gain is your proof.",
      },
      {
        type: "clinical_pearl",
        body: "A term SGA baby can look wonderfully mature — alert, pink, vigorous. Do not be charmed: their glycogen tank is tiny, so the night feed you skip becomes the morning hypoglycaemia you treat.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A term baby boy delivered at your CHPS compound weighs 2100 g. He is pink and active, feeds with enthusiasm, and his temperature is 36.6°C in a wrapped shawl on the bed. The mother, a first-time 19-year-old, plans to give plain water at night \"so he can sleep longer\".\n\nWhat are the risks here, and what is your counselling and care plan before discharge?\n\nAnswer: He is term SGA — mature-looking, but with small heat and sugar reserves. Plan skin-to-skin or kangaroo mother care with a hat, exclusive breastfeeding within the hour and at least three-hourly **including at night** — water at night is precisely the fast his small glycogen store cannot afford, and it also displaces milk. Keep the cord clean and dry, weigh him at the welfare clinic, teach the danger signs, and review the mother's own health — nutrition, anaemia and malaria prevention matter for both.",
      },
      {
        type: "memory_trick",
        body: "Remember **2500** as the line, then the three battles a small baby loses: **Heat, Sugar, Germs** — and your three replies: **a person's chest, milk at night, clean hands**.",
      },
      {
        type: "summary",
        body: "- Low birth weight = below 2500 g at birth, whatever the gestation; very low birth weight = below 1500 g.\n- Two roads to the same scale: preterm (early) and SGA (grown poorly at term) — the preterm baby carries extra problems.\n- Three predictable failures: hypothermia (big surface, little fat), hypoglycaemia (small glycogen store), infection (thin skin, naive immunity).\n- Counter-plan: warmth by skin-to-skin/kangaroo care with a hat, early and frequent feeds including at night, clean hands and cord, daily weighing.\n- Weigh every baby at birth — you cannot manage a risk you never measured.",
      },
    ],
    questions: [
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which baby is classified as low birth weight?",
        options: [
          "A term baby weighing 3.4 kg",
          "Any live-born baby weighing less than 2500 g",
          "A 40-week baby weighing 2800 g",
          "Only babies born before 34 weeks",
        ],
        correctIndex: 1,
        explanation:
          "Low birth weight is defined purely by weight — under 2500 g at birth, regardless of gestational age. It includes both preterm babies and term babies who are small for gestational age.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two babies weigh 2.2 kg each: one is 34 weeks preterm, the other is 39 weeks and SGA. What is the key difference in their care needs?",
        options: [
          "There is no difference — weight alone dictates management",
          "The preterm baby may also need support for immature lungs, feeding and temperature regulation, while the term SGA baby mainly needs warmth, frequent feeding and infection vigilance",
          "The SGA baby always needs phototherapy",
          "The preterm baby should be fed only after 48 hours",
        ],
        correctIndex: 1,
        explanation:
          "Same scale, different stories. The term SGA baby is mature but depleted — warmth, frequent milk and watching suffice. The preterm baby adds prematurity problems: surfactant-poor lungs, an uncoordinated suck and even poorer temperature control. Gestational age, not weight alone, shapes the plan.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grandmother advises waking a 2.1 kg newborn every three hours at night for feeds. Why is this correct rather than cruel?",
        options: [
          "It is not correct — night feeds should be avoided so the baby sleeps and grows",
          "Small babies have limited glycogen stores, and long gaps risk hypoglycaemia",
          "Night feeds are only needed after the first month",
          "It only matters if the baby is formula-fed",
        ],
        correctIndex: 1,
        explanation:
          "The LBW baby's liver stores little glycogen, so a long fast can drop blood glucose low enough to cause jitteriness, lethargy, apnoea or convulsions. Frequent feeds, day and night, keep the small tank topped up — with either breast milk or formula, the principle holds.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Low Birth Weight",
        front: "Define LBW and VLBW.",
        back: "LBW = birth weight under 2500 g regardless of gestation. VLBW = under 1500 g. Causes in Ghana include maternal malaria, anaemia, hypertension, malnutrition, adolescence and short birth spacing.",
      },
      {
        topic: "Low Birth Weight",
        front: "Which three problems threaten the LBW baby first, and why?",
        back: "Hypothermia (large surface area, little fat), hypoglycaemia (small glycogen stores) and infection (thin skin, immature immunity).",
      },
      {
        topic: "Low Birth Weight",
        front: "How do you prevent hypoglycaemia in a term SGA baby at home?",
        back: "Exclusive, early, frequent feeding — at least every three hours including overnight — using direct breastfeeding or expressed milk by cup if the suck is weak; watch for jitteriness, lethargy or poor feeding as warning signs.",
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
        title: "Managing newborn problems: a guide for doctors, nurses and midwives",
        note: "Classic WHO newborn guide — verify the current edition used by your programme.",
      },
      {
        organization: "Ghana Health Service",
        title: "National newborn care guidelines",
        note: "Verify current national protocols for LBW care and referral.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Neonatal Jaundice: The Yellow Warning",
    description:
      "Most newborns turn a little yellow — but the timing, the pace and the colour of stool tell you which yellow is harmless and which one can harm a brain.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how physiological jaundice differs from pathological jaundice.",
      "Explain bilirubin production in the newborn and the risk of kernicterus.",
      "Apply timing, spread and stool colour to decide when jaundice is an emergency.",
    ],
    tags: ["jaundice", "bilirubin", "phototherapy", "g6pd", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Newborn red cells are numerous and short-lived, and their bilirubin load lands on a liver whose processing enzymes are still waking up. The result is a yellow tide, visible first in the face and flowing downward. Most of the time this is **physiological jaundice** — a normal event of the first week.\n\nThe midwife's job is to read the tide: when it starts, how fast it rises, how far it spreads, and whether urine and stool look right — four clues separating the harmless tide from the flood that can poison a brain.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Physiological** jaundice appears after 24 hours, peaks around day three to five in a term baby, stays below the face-chest zone, and clears within one to two weeks; the baby feeds and behaves normally. **Pathological** jaundice raises four alarms: it appears **within the first 24 hours** (haemolysis — Rhesus or ABO incompatibility, G6PD deficiency), it **climbs fast**, it **lasts beyond two weeks** in a term baby, or it comes with **pale stools and dark urine** — a sign of obstruction that needs surgical review. A deeply yellow baby who is sleepy at the breast, irritable, high-pitched in cry or arching the back may be developing **kernicterus** — lifelong disability.\n\nJaundice advances from head to toe, so the further down the yellow travels, the higher the bilirubin: yellow **palms and soles** always means severe — measure and refer now. Treatment is **phototherapy** (eyes shielded, extra fluids, temperature and bilirubin monitored) or exchange transfusion at extreme levels. Ghana's G6PD lesson: keep naphthalene (camphor) balls out of baby clothes — in a G6PD-deficient baby they trigger sudden haemolysis.",
      },
      {
        type: "clinical_pearl",
        body: "Day one is the deadline: yellow within the first 24 hours is haemolysis until proven otherwise, and it can double in hours. That baby needs urgent assessment and phototherapy, not a review appointment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 20-hour-old baby is brought to your postnatal ward. The face and chest are clearly yellow; he breastfeeds lazily and is sleepy. The mother is blood group O, the baby A. There is no pallor, no fever, and the stool is yellow-brown.\n\nWhat is your reading of this jaundice, and what do you do next?\n\nAnswer: Jaundice within 24 hours is pathological, and the O-mother/A-baby combination makes ABO incompatibility the leading suspect. This is beyond home watching: assess urgently, arrange bilirubin measurement and phototherapy (or referral where measurement is unavailable), keep him warm and feeding, shield the eyes during phototherapy, and monitor for anaemia and rising levels.",
      },
      {
        type: "memory_trick",
        body: "Two rhymes carry the lesson. First, the spread: \"**Face, chest, belly, legs, hands — the further down the yellow, the higher the bilirubin stands.**\" Second, the timing: \"**Yellow on day one? Haemolysis has begun. Pale stool and dark pee? Send for surgery, three-by-three.**\"",
      },
      {
        type: "summary",
        body: "- Physiological jaundice: after 24 hours, peaks day 3–5, clears by 2 weeks in a term baby, baby well and feeding.\n- Pathological alarms: jaundice within 24 hours, rapid rise, lasting beyond 2 weeks, or pale stools with dark urine.\n- Yellow palms and soles always indicate severe hyperbilirubinaemia — measure and treat urgently.\n- Watch for kernicterus: sleepiness, poor feeding, high-pitched cry, irritability, arching back.\n- Phototherapy shields the eyes, adds fluids and needs monitoring; G6PD babies must avoid naphthalene in clothes and bedding.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Jaundice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When does physiological jaundice normally appear and peak in a term baby?",
        options: [
          "At birth, peaking on day one",
          "After 24 hours, peaking around day 3–5",
          "Only after the second week of life",
          "In the first month, peaking at week four",
        ],
        correctIndex: 1,
        explanation:
          "Physiological jaundice appears after the first 24 hours, peaks around day three to five and fades by one to two weeks in a term baby. Yellow at birth or in the first day is never physiological.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Jaundice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grandmother has packed a newborn's clothes with naphthalene balls against insects. Why must they be removed?",
        options: [
          "They cause physiological jaundice in all newborns",
          "In a G6PD-deficient baby they can trigger sudden red cell destruction and a dangerous bilirubin surge",
          "They stain the skin yellow and mimic jaundice",
          "They only matter after the baby turns one month",
        ],
        correctIndex: 1,
        explanation:
          "Naphthalene is a classic trigger of acute haemolysis in G6PD deficiency, which is common in Ghana. The sudden red cell destruction floods the blood with bilirubin and can push a modest jaundice into kernicterus range within hours.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Jaundice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A five-day-old baby has yellow palms and soles but is breastfeeding normally. How do you interpret this finding?",
        options: [
          "Reassuring — jaundice on the hands of a feeding baby is always physiological",
          "Severe hyperbilirubinaemia until measured and treated — this baby needs urgent assessment",
          "Normal, because jaundice always spreads to the hands by day five",
          "A sign of intestinal obstruction",
        ],
        correctIndex: 1,
        explanation:
          "Jaundice spreads head to toe with rising bilirubin, so yellow palms and soles mark the end of the journey and a severe level, even in a baby who is still feeding. This baby needs urgent bilirubin measurement, phototherapy or referral — a calm surface can hide a deep tide.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Jaundice",
        front: "Which four features mark pathological jaundice?",
        back: "Onset within 24 hours (haemolysis), a rapid rise, duration beyond two weeks in a term baby, and pale stools with dark urine (obstructive pattern).",
      },
      {
        topic: "Neonatal Jaundice",
        front: "Why does yellow in the palms and soles signal a severe level?",
        back: "Bilirubin deposits spread from head to toe as levels rise; reaching the hands and feet means the level is high enough to threaten the brain — measure and treat urgently.",
      },
      {
        topic: "Neonatal Jaundice",
        front: "Name three nursing priorities during phototherapy.",
        back: "Shield the eyes, increase feeds or fluids and monitor weight, temperature and bilirubin; watch for the bronze-baby effect and skin care, and keep treating the underlying cause.",
      },
    ],
    sources: [
      {
        organization: "National Institute for Health and Care Excellence (NICE)",
        title: "Jaundice in newborn babies under 28 days (Clinical guideline CG98)",
        url: "https://www.nice.org.uk/guidance/cg98",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Neonatal Infection: The Quiet Threat",
    description:
      "Sepsis in a newborn whispers where an older child shouts. Learn where the germs come from, what the whispers sound like, and why waiting is the enemy.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish early-onset from late-onset neonatal infection and their sources.",
      "Explain how neonatal sepsis presents and why signs are subtle and non-specific.",
      "Apply prevention and first-response measures, including clean cord care and urgent referral.",
    ],
    tags: ["neonatal sepsis", "infection", "cord care", "referral", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A newborn's immune army is small and untrained, so bacteria that a toddler would shrug off can overrun a baby in hours. **Early-onset infection** (within about the first 72 hours) is usually inherited from the mother — ascending from prolonged rupture of membranes (over 18 hours), chorioamnionitis, maternal fever or urinary infection.\n\n**Late-onset infection** (after 72 hours) comes from the world the baby lives in: the cord stump, the skin, feeding utensils, crowded hands and health-facility equipment — staphylococci, E. coli and Klebsiella.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The newborn whispers. Look for **poor or erratic feeding**, **temperature instability** (fever or, just as worrying, hypothermia), **tone changes** (floppy or irritable), **breathing changes** (fast, grunting, or pauses), vomiting, abdominal distension, early or worsening jaundice, and umbilical redness or discharge around the cord. One baby shows two of these, another shows all — what matters is that any exist in a baby under a month.\n\nThe rule that saves lives: **a sick-looking newborn has sepsis until proven otherwise.** Blood cultures may guide the doctors, but treatment starts on suspicion — injectable antibiotics per national protocol (typically a penicillin plus gentamicin), never oral medicine alone, with warmth, feeding support and urgent referral for any danger-sign baby. Prevention is beautifully midwifery-shaped: clean hands at every contact, clean birth, clean cutting and tying of the cord, chlorhexidine on the stump as national policy directs with nothing else applied, and exclusive breastfeeding.",
      },
      {
        type: "clinical_pearl",
        body: "In a baby under one month, cold can be the new fever: a temperature below 35.5°C in a home-delivered newborn is sepsis until the blood culture says otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A day-five home-delivered baby is brought to your CHPS compound. Feeds have been weak and infrequent since last night. The cord stump is moist with a faint smell, the temperature is 35.4°C, and the baby stirs only when handled. There is no fever.\n\nWhat does this picture most likely represent, and what are your actions?\n\nAnswer: Poor feeding, hypothermia and reduced movement in a newborn with an unhealthy cord are the classic whisper of sepsis — most likely a late-onset cord-related infection. Treat as sepsis until proven otherwise: rewarm with skin-to-skin, give the pre-referral dose of injectable antibiotics per protocol, keep the cord clean, arrange urgent transport, counsel the mother, and document your findings and times. Oral medicine and a next-day review would gamble with this baby's life.",
      },
      {
        type: "memory_trick",
        body: "Sepsis in a newborn whispers in four voices: \"**Feed** off, **Fever-or-cold**, **Floppy**, **Fast** (or paused) breathing.\" Any voice in a baby under one month demands four responses: **Warm**, **Inject** (never oral alone), **Refer** urgently, **Record** exactly.",
      },
      {
        type: "summary",
        body: "- Early-onset infection (≤72 hours) comes from the mother: prolonged ROM, chorioamnionitis, maternal fever.\n- Late-onset infection comes from the baby's world: cord, skin, feeds, equipment and hands.\n- Signs are subtle: poor feeding, temperature instability (fever or hypothermia), floppiness, breathing changes, early jaundice, unhealthy cord.\n- Rule: a sick newborn has sepsis until proven otherwise — injectable antibiotics per protocol plus warmth and urgent referral; oral treatment alone is not enough.\n- Prevention: clean hands, clean birth, clean cord with chlorhexidine per national policy, exclusive breastfeeding.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Infection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother's membranes ruptured 30 hours before delivery and she ran a fever in labour. Which type of neonatal infection is this baby most at risk of developing?",
        options: [
          "Late-onset infection from the cord stump",
          "Early-onset infection acquired from the mother during labour",
          "No increased risk, because labour was monitored",
          "Infection that always waits until the second week of life",
        ],
        correctIndex: 1,
        explanation:
          "Prolonged rupture of membranes (over 18 hours) plus maternal fever are classic risk factors for early-onset infection, acquired vertically — the baby should be watched closely and treated promptly at the first whisper of illness.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sign in a one-week-old baby should raise the strongest suspicion of neonatal sepsis rather than a minor problem?",
        options: [
          "A single loose stool after a feed",
          "Hypothermia with poor feeding and reduced activity",
          "Mild facial jaundice on day six with normal feeding",
          "Startling during sleep",
        ],
        correctIndex: 1,
        explanation:
          "Hypothermia in a newborn is as significant as fever and, combined with poor feeding and reduced movement, forms the classic quiet presentation of sepsis. The other findings are within normal behaviour for a baby of this age.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Neonatal Infection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect sepsis in a four-day-old at a CHPS compound without laboratory facilities. Which response is correct?",
        options: [
          "Give oral antibiotics and review the next day",
          "Tell the mother to watch at home and return if things worsen",
          "Give the pre-referral first dose of injectable antibiotics per protocol, keep the baby warm, and arrange urgent referral",
          "Give paracetamol and extra fluids while waiting for the fever to settle",
        ],
        correctIndex: 2,
        explanation:
          "Suspected neonatal sepsis needs parenteral antibiotics started on suspicion and urgent referral, with warmth maintained during preparation and transport. Oral drugs, watchful waiting at home and antipyretics all lose hours the septic newborn does not have.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Infection",
        front: "How do early-onset and late-onset neonatal infections differ?",
        back: "Early-onset (within ~72 hours) is acquired from the mother — prolonged ROM, chorioamnionitis, maternal fever; group B strep and E. coli. Late-onset comes from the baby's surroundings — cord, skin, feeds, equipment, hands.",
      },
      {
        topic: "Neonatal Infection",
        front: "What are the quiet signs of neonatal sepsis?",
        back: "Poor feeding, temperature instability (fever or hypothermia), floppiness or irritability, fast or irregular breathing, vomiting, abdominal distension, early or worsening jaundice, and an unhealthy cord.",
      },
      {
        topic: "Neonatal Infection",
        front: "State the golden rule for a sick-looking newborn under one month.",
        back: "Sepsis until proven otherwise: start injectable antibiotics per national protocol, keep the baby warm, refer urgently — never rely on oral treatment or a next-day review.",
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
        organization: "World Health Organization",
        title: "Recommendations for the management of common childhood conditions and maternal conditions affecting the newborn",
        note: "Covers neonatal infection management — verify the current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National cord care policy (chlorhexidine for the newborn cord)",
        note: "Verify the current national guidance on application and duration.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "neonatal-nursing",
    moduleTitle: "The At-Risk Newborn",
    lessonTitle: "Newborn Resuscitation: Core Concepts",
    description:
      "About one baby in ten needs help to breathe. Own the golden minute and the airway-breathing sequence, and you will carry the skill that changes everything.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the steps of basic newborn resuscitation within the Golden Minute.",
      "Explain why effective ventilation with room air is the core lifesaving intervention.",
      "Apply the decision points that escalate care to chest compressions and referral.",
    ],
    tags: ["resuscitation", "abc", "ventilation", "golden minute", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Roughly one newborn in ten needs help to begin breathing, and for most of them the problem is simple: fluid has not been cleared and air has not reached the lungs. What you do in the **first minute — the Golden Minute** — decides whether this becomes a footnote in the notes or a tragedy in the family's story.\n\nResuscitation is not drama: it is a short, orderly sequence any trained midwife can run calmly — dry, position, stimulate, and if the baby stays silent, ventilate.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The sequence begins the moment the baby arrives. **Dry** the baby thoroughly (the rubbing itself stimulates breathing) and replace the wet towel. **Assess**: is the baby crying or breathing well, term, with good tone? If yes — routine care: skin-to-skin and observation. If not breathing or only gasping: **position the head neutral** (slight extension), clear the mouth only if the airway is obstructed, **stimulate** again briefly, and if there is still no breathing, start **bag-mask ventilation with room air** at about 30 breaths per minute, watching for chest rise.\n\nIf the heart rate stays below 60 beats per minute despite effective ventilation, add **chest compressions** in a 3:1 ratio with ventilation. Most babies respond to ventilation alone, so bag-mask skill is the most valuable resuscitation asset you own. Before every delivery, check your equipment — bag-mask and a clean warm surface. Tell the mother what is happening in one calm sentence: your calm is her anaesthesia.",
      },
      {
        type: "clinical_pearl",
        body: "Chest rise is the dashboard light of newborn resuscitation: if the chest is not moving, air is not reaching the lungs — reposition the head and reseal the mask before you reach for anything else.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a district hospital, a term baby is born through thin meconium-stained fluid and arrives limp and silent. You dry and stimulate him for thirty seconds: no cry, no breathing effort, no chest movement.\n\nWhat is your next action, and how do you judge whether it is working?\n\nAnswer: Start positive-pressure ventilation with a bag-mask in room air now — the Golden Minute is passing. Position the head neutrally, seal the mask over mouth and nose, and ventilate at about 30 breaths per minute. Working means visible chest rise, then a rising heart rate, improving colour and returning tone; add compressions only if the rate stays below 60 despite effective ventilation. Afterwards, keep him warm and monitor closely — a ventilated baby needs watching tonight.",
      },
      {
        type: "memory_trick",
        body: "Carry the sequence as three words: **WARM — AIR — WORK**: warm them (dry, stimulate, assess), open the **AIR** (neutral head), make the lungs **WORK** (ventilate, watch the chest rise). Compressions join only when the heart stays under 60 despite air.",
      },
      {
        type: "summary",
        body: "- The Golden Minute: by sixty seconds after birth, a non-breathing baby should be drying under your hands or receiving ventilation.\n- Sequence: dry and stimulate, assess breathing and tone, position head neutrally, clear the airway only if obstructed, ventilate with room air if silent or gasping.\n- Ventilation at about 30 breaths per minute with visible chest rise is the core lifesaving skill — most babies need nothing more.\n- Escalate to chest compressions (3:1 with ventilation) only if heart rate remains below 60 despite effective ventilation.\n- Check equipment before every birth; every resuscitated baby needs continued monitoring.",
      },
    ],
    questions: [
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A term baby remains limp and silent after thorough drying and thirty seconds of stimulation. What is the immediate next step?",
        options: [
          "Wait another two minutes for breathing to start spontaneously",
          "Start positive-pressure ventilation with a bag-mask in room air",
          "Give chest compressions immediately",
          "Give oxygen by nasal prongs and continue stimulating",
        ],
        correctIndex: 1,
        explanation:
          "If drying and stimulation do not establish breathing within the Golden Minute, positive-pressure ventilation with a bag-mask is the immediate priority — air in the lungs is the treatment. Compressions come only later, if the heart rate stays below 60 despite effective ventilation.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During bag-mask ventilation, the baby's chest is not rising. What should you do first?",
        options: [
          "Squeeze the bag faster and harder",
          "Reposition the head neutrally and reseal the mask over mouth and nose",
          "Move straight to chest compressions",
          "Stop ventilation and wait for transport",
        ],
        correctIndex: 1,
        explanation:
          "The commonest causes of a still chest are a poorly positioned head and a leaking mask. Correct the head position to slight extension and reseal the mask before changing anything else; the ventilating rate and compressions are not the first answers when air is simply not arriving.",
        courseSlug: "neonatal-nursing",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about the gas used for basic newborn resuscitation is correct?",
        options: [
          "Newborns need 100% oxygen from the first breath",
          "Room air (21% oxygen) is the recommended starting gas for basic newborn ventilation",
          "Oxygen concentration does not matter in newborns",
          "Room air is only for preterm babies",
        ],
        correctIndex: 1,
        explanation:
          "Guidelines recommend starting newborn ventilation with room air; it is effective for the vast majority and avoids the risks of excess oxygen. Supplemental oxygen is added only when saturation targets are not met, guided by pulse oximetry where available.",
        courseSlug: "neonatal-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Resuscitation",
        front: "What is the Golden Minute?",
        back: "By sixty seconds after birth every baby should be either breathing well on the mother's chest or receiving help — dried, stimulated, and if still silent, ventilated with a bag-mask in room air.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "What single physical sign tells you ventilation is effective?",
        back: "Visible chest rise with each squeeze, followed by a rising heart rate, improving colour and returning tone. No chest rise means reposition the head and reseal the mask.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "When do chest compressions start in newborn resuscitation, and in what ratio?",
        back: "When the heart rate stays below 60 beats per minute despite effective ventilation — compressions coordinated with ventilation at a ratio of 3:1 (three compressions to one breath).",
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
        note: "Golden Minute training programme. Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Managing newborn problems: a guide for doctors, nurses and midwives",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "Growth and Development: The Roadmap of Childhood",
    description:
      "Growth is the centimetres, development is the skills — and both follow a roadmap you can read. Learn the milestones and the red flags that mean a child needs help.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the difference between growth and development and the main developmental domains.",
      "Explain how WHO growth charts and milestones are used to monitor children.",
      "Apply milestone red flags to decide when a child needs referral.",
    ],
    tags: ["growth", "development", "milestones", "growth charts", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child's body tells two stories at once. **Growth** is the measurable story — weight, length and head circumference plotted over time. **Development** is the skill story — how the child gains control of head, hands, words and friendships, domain by domain. Ghana's growth monitoring and promotion (GMP) clinics weigh the first story; a wise nurse reads both at every contact.\n\nBecause both stories follow a roadmap, you need the broad mile-markers and, above all, the signs a child has left the road.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The motor roadmap: a social smile by six to eight weeks; steady head control by about four months; rolling over and reaching by four to six months; sitting without support by six to eight; crawling and pulling to stand by nine to twelve; first steps around the first birthday; and running, climbing and feeding themselves in the second year. Language grows in step: babbling by six months, first true words around the first birthday, two-word phrases by age two. Plot growth on WHO charts — weight-for-age, weight-for-height (**wasting** = recent hunger or illness) and height-for-age (**stunting** = long-term deprivation).\n\nNow the red flags: **no social smile by three months; not sitting by nine months; not walking by eighteen months; no words by sixteen to eighteen months; any loss of a skill already learned; and a head circumference or weight crossing centile lines sharply up or down.** None of these is a \"wait and see\" finding — each deserves assessment and referral. Remember also that two children can grow differently and both be normal: the roadmap has lanes, not tramlines.",
      },
      {
        type: "clinical_pearl",
        body: "Loss of a skill is never normal, at any age, in any domain. A child who stops saying the words he had, or stops walking after an illness, needs assessment the same week.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a welfare clinic, a mother mentions that her eighteen-month-old son has never walked. He sits confidently, pulls to stand against the bench, babbles happily and transfers objects hand to hand. He was born at term with a normal birth weight, and his growth chart follows his line nicely.\n\nWhich domain concerns you, and what is your next move?\n\nAnswer: His fine motor, language and social skills and his growth look on course, but no independent walking at eighteen months is a motor red flag — especially with pulling-to-stand present, which localises the concern and makes further assessment essential. Examine tone, reflexes and leg symmetry, ask about illness and feeding, and refer for developmental assessment rather than reassuring the family that he will \"walk when ready\" — though some children do walk late, the red flag rule exists because some do not.",
      },
      {
        type: "memory_trick",
        body: "Rhyme the red flags: \"**No smile by three, no sit by nine, no word or walk by eighteen — refer, don't wait in line.**\" And keep the year-map on one hand: by each **birthday** a new chapter — first steps and first words at one, two-word chat at two.",
      },
      {
        type: "summary",
        body: "- Growth is measurable size over time; development is gaining skills across gross motor, fine motor, language and social domains.\n- Milestones arrive in ranges: smile by 6–8 weeks, sit by 6–8 months, first steps around the first birthday, words by 12–15 months, two-word phrases by two years.\n- WHO charts turn measurements into meaning: wasting (weight-for-height) signals recent trouble; stunting (height-for-age) signals long-term deprivation.\n- Red flags: no smile by 3 months, not sitting by 9, not walking or no words by 16–18 months, skill regression, or growth crossing centiles sharply.\n- Every contact is a screening opportunity — glance at the chart, watch the child play, ask the parent one question.",
      },
    ],
    questions: [
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which finding in an infant is a developmental red flag requiring referral?",
        options: [
          "Sitting unsupported at eight months",
          "Not sitting without support by nine months",
          "Rolling over at five months",
          "Crawling at ten months",
        ],
        correctIndex: 1,
        explanation:
          "Most infants sit unsupported by six to eight months, so not sitting by nine months is a red flag needing assessment. The other milestones are comfortably within normal ranges.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A three-year-old who was speaking in short sentences six months ago now says only single words. How do you interpret this?",
        options: [
          "A normal phase of selective speech",
          "Skill regression — never normal, and needing prompt assessment",
          "Expected after the second birthday",
          "Only significant if growth has also slowed",
        ],
        correctIndex: 1,
        explanation:
          "Losing a skill already mastered is a red flag in every domain at every age. Language regression in particular demands urgent developmental and neurological assessment — it is not a phase, and growth trends do not make it safe to wait.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Growth and Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a WHO growth chart, a child's weight-for-height is far below the expected range while height-for-age is normal. What does this pattern suggest?",
        options: [
          "Long-term chronic undernutrition",
          "Recent or acute weight loss — wasting",
          "Normal variation of toddler growth",
          "Excess weight for height",
        ],
        correctIndex: 1,
        explanation:
          "Weight-for-height compares current weight to current size, so a sharp fall signals recent weight loss — wasting, typically from acute illness or hunger. Stunting (low height-for-age) is the marker of long-term deprivation, and here height is normal.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Growth and Development",
        front: "Distinguish growth from development.",
        back: "Growth is the measurable increase in size — weight, length, head circumference plotted over time. Development is the progressive gain of function — gross motor, fine motor, language, social and cognitive skills.",
      },
      {
        topic: "Growth and Development",
        front: "Quote four developmental red flags.",
        back: "No social smile by 3 months; not sitting by 9 months; not walking and no words by 16–18 months; any loss of already-learned skills. Add growth that crosses centile lines sharply.",
      },
      {
        topic: "Growth and Development",
        front: "What do wasting and stunting each represent on WHO charts?",
        back: "Wasting = low weight-for-height, acute recent undernutrition or illness; stunting = low height-for-age, chronic long-term deprivation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Child Growth Standards",
        url: "https://www.who.int/tools/child-growth-standards",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "Ghana Health Service",
        title: "Growth Monitoring and Promotion (GMP) programme materials",
        note: "Verify the current national GMP guidance and chart editions.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "The Newborn-to-Infant Transition",
    description:
      "Reflexes that arrive at birth and retire on schedule, stools that change colour like traffic lights, and a weight journey with its own rules — the first weeks explained.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the primitive reflexes, their timing and their clinical meaning.",
      "Explain the expected weight changes and stool patterns of early infancy.",
      "Apply normal-transition knowledge to reassure parents appropriately and spot genuine problems.",
    ],
    tags: ["infant", "transition", "primitive reflexes", "stools", "weight gain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The newborn arrives fitted with automatic programmes — the primitive reflexes — which run the show until the thinking brain takes over. Presence at birth confirms the wiring works; polite retirement over the first months confirms the cortex is maturing.\n\nThe same visits bring the two questions parents ask most: \"Is this weight normal?\" and \"are these stools normal?\" Both follow rules, and knowing them turns anxiety into reassurance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Meet the reflexes: **Moro** (startle), **rooting** (cheek touched, head turns), **sucking**, **palmar grasp** (your finger is captured), **plantar grasp**, **stepping** and the asymmetric tonic neck (fencer's posture) — all fading over the first four to six months as voluntary control arrives. Abnormal comes in two flavours: **absent at birth** (worrying) or **persisting too long** (development may be delayed). A one-sided Moro — one arm flies, one stays — suggests nerve or bone injury on the quiet side.\n\nWeight rules: newborns lose up to about seven to ten percent in the first days, regain birth weight by ten to fourteen days, then gain roughly 150–200 g weekly for the first three months, doubling birth weight by about five to six months. Stool rules: black tarry **meconium** for a day or two, greenish transitional stools, then the breastfed norm — soft, seedy, mustard-yellow, from six times daily to once every few days, both fine if feeding and growth are good. Formula stools are firmer and smellier.",
      },
      {
        type: "clinical_pearl",
        body: "Watch a feed before you weigh the worries: a baby who latches, suckles audibly, swallows and settles is almost always thriving, however strange the stool diary looks. The scale and the stool together settle the question.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother brings her six-week-old, fully breastfed baby to your CHPS compound: \"He passes stool six times a day — loose and yellow with seeds. My mother says my milk is too weak and I should add porridge.\" The baby feeds eagerly, has six heavy wet nappies a day, and his weight tracks his line — 200 g up on last week.\n\nHow do you counsel her?\n\nAnswer: This is the textbook normal breastfed stool — frequent, loose, seedy, mustard-yellow — and it signals a good milk supply, not weak milk. With eager feeding, heavy wet nappies and steady weight gain, there is nothing to fix: exclusive breastfeeding covers all his needs until six months, and porridge now would displace milk and bring infection risk. Reassure, plot the weight so she sees the story, and give the return signs: blood or mucus in stool, vomiting, poor feeding, or a weight line that flattens.",
      },
      {
        type: "memory_trick",
        body: "The stool rainbow of week one: \"**Black tar, then army green, then mustard seeds** — after that, six-a-day or once-a-week can both be seen.\" Reflexes retire by six months, except the plantar grasp, the last to leave near the first birthday.",
      },
      {
        type: "summary",
        body: "- Primitive reflexes (Moro, rooting, sucking, palmar and plantar grasp, stepping) confirm healthy wiring at birth and fade by 4–6 months as voluntary control grows.\n- Absent reflexes at birth, reflexes persisting well beyond six months, or a one-sided Moro all warrant assessment.\n- Weight: lose up to 7–10% in the first days, regain birth weight by 10–14 days, then gain ~150–200 g weekly, doubling birth weight by 5–6 months.\n- Breastfed stools are soft, seedy, mustard-yellow and may come six times a day or every few days — frequency plus growth defines normal.",
      },
    ],
    questions: [
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A two-week-old breastfed baby passes frequent loose, seedy, mustard-yellow stools, feeds eagerly and is gaining weight. What is your interpretation?",
        options: [
          "Normal breastfed stool pattern — reassure the mother",
          "Lactose intolerance requiring formula change",
          "Diarrhoea needing ORS",
          "A reason to start complementary feeds early",
        ],
        correctIndex: 0,
        explanation:
          "Frequent, loose, seedy, mustard-yellow stools are the healthy norm for an exclusively breastfed baby. With eager feeding and good weight gain there is nothing pathological — reassure, and no feeds should be added before six months.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn startles violently when the cot is bumped, but only the right arm flings out; the left stays still. What does this asymmetry suggest?",
        options: [
          "A normal, stronger side of the body",
          "Possible injury to the left arm's nerves or bone — the quiet side needs examination",
          "A normal early form of the Moro reflex",
          "Overfeeding",
        ],
        correctIndex: 1,
        explanation:
          "The Moro should be symmetric. A one-sided Moro points to a problem on the motionless side — classically an upper brachial plexus (Erb's) injury or a fractured clavicle or humerus. Examine that arm, check the grip, and refer per protocol.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Newborn-to-Infant Transition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A term baby loses 8% of birth weight on day three and is feeding well. On which day should the baby be back at birth weight if all is well?",
        options: [
          "By day 5 at the latest",
          "By day 10–14",
          "By the end of the first month",
          "Babies never regain the early loss",
        ],
        correctIndex: 1,
        explanation:
          "A loss of up to about 7–10% is physiological, but birth weight should be regained by ten to fourteen days. Continued loss beyond the first week, or failure to regain by two weeks, points to feeding problems and needs review.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Newborn-to-Infant Transition",
        front: "Name four primitive reflexes and state when they normally fade.",
        back: "Moro (startle), rooting, sucking, palmar grasp — present at birth and fading over the first 4–6 months; the plantar grasp persists longer, to around the first birthday.",
      },
      {
        topic: "Newborn-to-Infant Transition",
        front: "What does a persisting primitive reflex beyond six months suggest?",
        back: "Delayed cortical maturation — persistent reflexes beyond the usual window (or reflexes absent at birth) warrant developmental assessment.",
      },
      {
        topic: "Newborn-to-Infant Transition",
        front: "Describe the normal stool journey of the first week.",
        back: "Black tarry meconium for the first day or two, then greenish transitional stools, then the breastfed norm: soft, seedy, mustard-yellow — frequent or infrequent, both fine if feeding and growth are good.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Infant and young child feeding counselling tools",
        note: "Verify the current WHO edition used in your programme.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — development and reflexes",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
      {
        organization: "Elsevier",
        title: "Wong's Essentials of Pediatric Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "The Growing Child",
    lessonTitle: "Child Assessment: A Different Approach",
    description:
      "You cannot ask a baby where it hurts — but a screaming toddler on a mother's lap will tell you almost everything, if you know how to look before you touch.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the paediatric assessment triangle and WHO emergency signs for rapid triage.",
      "Explain how observation-first sequencing adapts the physical examination for children.",
      "Apply a child-friendly examination order and accurate measurement to everyday practice.",
    ],
    tags: ["assessment", "paediatrics", "triage", "observation", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Adults walk in and narrate. Children arrive crying, clinging or asleep, and the first minutes decide everything: is this child dying, sick, or frightened and well? WHO's emergency signs catch the critical few; the paediatric assessment triangle grades the rest within seconds.\n\nThen comes the second skill: examining without destroying your own data — a screaming, pinned-down child has a fast pulse, heaving chest and rigid tummy whether ill or not. Order and manner matter as much as findings.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **paediatric assessment triangle** has three corners: **appearance** (alert, interactive, consolable or floppy and distant), **work of breathing** (how hard the child breathes — in-drawing, grunting, nasal flaring) and **circulation to the skin** (pale, mottled or blue). Any corner looking wrong marks the child urgent. WHO emergency signs go further: obstructed or severely distressed breathing, central cyanosis, signs of shock (cold hands with a long capillary refill and a fast weak pulse), coma or convulsion, and severe dehydration in a lethargic child — any one means treatment now, queue never.\n\nWork **from least to most intrusive**: watch and play first, listen to the chest while the child is calm, feel the tummy when the child trusts you, and leave the ears and throat for last — one look at a tongue depressor and your quiet child is gone. Count the respiratory rate for a full minute before touching. **Weigh every child** — weight is the denominator for every drug dose. Add temperature, and MUAC at welfare contacts.",
      },
      {
        type: "clinical_pearl",
        body: "Count the respiratory rate while the child sleeps or rests on the mother's lap, before any examination — crying doubles it, and a wrong number becomes a wrong referral or a missed pneumonia.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A twenty-month-old is carried into your OPD crying loudly, hot to touch. The queue is long; a colleague suggests \"just give paracetamol first and see.\" From the doorway you see him crying with a strong voice, kicking, clinging to his mother. His colour is pink; as she settles him on her lap and offers the breast he quiets, and you count 38 breaths per minute.\n\nHow do you use the assessment triangle here, and what is your next step?\n\nAnswer: All three corners look safe — appearance strong (loud cry, clinging, consolable), breathing unlaboured at 38 per minute (under the 40 threshold for his age), circulation pink. So settle him, take his temperature, weigh him, examine the throat and ears last, test for malaria, and treat the cause you find. Had any corner been abnormal, he would have gone straight to emergency care.",
      },
      {
        type: "memory_trick",
        body: "Three words for the triangle: **Look, Listen, Feel — eyes first, hands last.** For the examination order: \"**Play, Chest, Belly, then Throat last.**\" And \"**no weight, no dose**\" — weigh every child before prescribing.",
      },
      {
        type: "summary",
        body: "- Paediatric assessment triangle: appearance, work of breathing, circulation to skin — three looks in seconds, before any touch.\n- Examine least-intrusive first: observe and play, then chest, then abdomen, ears and throat last; count the respiratory rate for one full minute while calm.\n- Weigh every child — weight drives every paediatric drug dose; add MUAC and growth review at welfare contacts.\n- A calm, ordered examination on the mother's lap produces better data than a pinned-down struggle ever will.",
      },
    ],
    questions: [
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When is the best moment to count a child's respiratory rate accurately?",
        options: [
          "While the child is crying during undressing",
          "While the child is calm or asleep on the caregiver's lap, before any examination",
          "Immediately after examining the throat",
          "During a feed with the child struggling",
        ],
        correctIndex: 1,
        explanation:
          "Crying and struggling can double the respiratory rate, so count for one full minute while the child is calm or asleep and before touching them — ideally before the examination begins.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding is a WHO emergency sign requiring immediate treatment rather than triage to the queue?",
        options: [
          "A temperature of 38.5°C in a drinking, alert child",
          "Cold hands with capillary refill over three seconds and a fast, weak pulse",
          "A clear runny nose in an otherwise playful child",
          "Mild jaundice without fever in a five-year-old",
        ],
        correctIndex: 1,
        explanation:
          "Cold hands, prolonged capillary refill and a fast weak pulse describe shock — an emergency sign treated immediately. Fever in an alert, drinking child and a runny nose in a playful child are triaged, not treated as emergencies.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should the ears and throat be examined last in a young child?",
        options: [
          "Because those findings are the least important",
          "Because children find them the most distressing, and once the child cries the rest of the examination data is spoilt",
          "Because the equipment must be sterilised between children",
          "Because the throat can only be seen after feeding",
        ],
        correctIndex: 1,
        explanation:
          "A tongue depressor or auriscope often triggers the tears — and a crying child gives a fast pulse, heaving chest and rigid abdomen that no longer mean anything clinically. Save the intrusive parts for last so the earlier, quieter findings stay trustworthy.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Child Assessment",
        front: "Name the three corners of the paediatric assessment triangle.",
        back: "Appearance (alert, interactive, consolable), work of breathing (in-drawing, grunting, flaring), and circulation to the skin (pale, mottled, blue). Any abnormal corner makes the child urgent.",
      },
      {
        topic: "Child Assessment",
        front: "Why is every child weighed at a paediatric visit?",
        back: "Weight is the denominator for nearly every paediatric drug dose — prescribing without a current, measured weight invites under- or overdose. It also feeds the growth record.",
      },
      {
        topic: "Child Assessment",
        front: "State a child-friendly examination order.",
        back: "Watch and play first, listen to the chest while calm, feel the abdomen, and leave ears and throat for last — least intrusive to most intrusive, ideally on the caregiver's lap.",
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
        title: "Emergency Triage Assessment and Treatment (ETAT) course materials",
        note: "Verify the current ETAT adaptation used in Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Wong's Essentials of Pediatric Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Feeding and Protecting",
    lessonTitle: "Nutrition for Infants and Children",
    description:
      "From the first hour of breastfeeding to the family plate at two years — the feeding journey, the Ghanaian plate, and the signs of malnutrition you must never miss.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the infant feeding timeline: exclusive breastfeeding, complementary feeding and continued breastfeeding.",
      "Explain what a balanced complementary meal looks like in a Ghanaian setting.",
      "Apply recognition of severe acute malnutrition and key supplementation practices.",
    ],
    tags: ["nutrition", "feeding", "breastfeeding", "malnutrition", "vitamin a"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child's first thousand days build the body they will use for life, and feeding is the construction material. The timeline is simple: **nothing but breast milk for the first six months**, family foods **from six months**, breastfeeding continuing **to two years and beyond**. Most feeding problems you meet come from breaking that timeline — water at two months, thin porridge alone at eight.\n\nThis lesson walks the timeline, builds the Ghanaian plate, and teaches you to recognise malnutrition.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Exclusive breastfeeding means no water, no tea, no formula — breast milk is about 87% water, and a thirsty baby needs more feeds, not other fluids; extra fluids displace milk and bring germs. At six months add **complementary foods**: thick porridge (koko enriched with groundnut paste, not thin soup), and meals combining a staple (rice, banku, yam), a legume or animal food (beans, fish, egg) and vegetables or fruit (kontomire, pawpaw). Feed responsively, two to three meals plus snacks from six to eight months, rising to three to four by two years. The myths you will dismantle weekly: eggs are not \"for adults only\"; porridge alone is not a meal.\n\nRecognition: **kwashiorkor** shows puffy feet and face, flaky-peel skin, thin sparse hair, apathy; **marasmus** shows extreme wasting and an old-man face. Screen with **MUAC** — under 11.5 cm in a 6–59-month-old, or any oedema, means severe acute malnutrition needing therapeutic care. Vitamin A from six months and deworming from one year close common gaps.",
      },
      {
        type: "clinical_pearl",
        body: "Two hands make the screening: MUAC tape on the left upper arm, thumb pressed on the feet for pits. Under 11.5 cm or pitting oedema means therapeutic feeding today — no home counselling substitutes.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a growth monitoring session, a mother of a four-month-old says her own mother insists the baby needs water during the harmattan heat, and that he \"cries too much in the evenings — my milk is not enough.\" He is exclusively breastfed, weighs steadily along his line, and passes six heavy wet nappies a day.\n\nWhat do you tell her, and what will change your advice?\n\nAnswer: Her milk is enough — steady weight gain and six heavy wet nappies prove it. Breast milk adjusts to thirst, so in hot weather she offers the breast more often; water at four months fills the stomach, displaces milk and brings diarrhoea risk. Evening fussiness in a growing four-month-old is common, not a feeding failure. What would change your advice: a flattening weight line, fewer wet nappies, or poor attachment — and at six months complementary foods begin while breastfeeding continues.",
      },
      {
        type: "memory_trick",
        body: "The **6-6-2 rule**: nothing but breast for **6** months, family food from **6** months, breastfeeding to **2** years and beyond. And the Ghanaian baby plate on three fingers: a **staple**, a **protein** (beans, fish, egg), and a **colour** (kontomire, garden eggs, pawpaw).",
      },
      {
        type: "summary",
        body: "- Exclusive breastfeeding to six months: no water, no other fluids — breast milk is ~87% water and more frequent feeds meet thirst.\n- From six months: thick, enriched complementary meals — staple plus legume or animal food plus vegetables or fruit — with responsive feeding, continuing breastfeeding to two years and beyond.\n- Meals grow with age: 2–3 from 6–8 months, 3–4 by 9–23 months, plus snacks and milk.\n- Kwashiorkor = oedema, flaky skin, thin hair; marasmus = extreme wasting. MUAC <11.5 cm or oedema = severe acute malnutrition → therapeutic care.\n- Vitamin A from six months and deworming from one year are part of routine protection in Ghana.",
      },
    ],
    questions: [
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks whether to give her three-month-old water during the hot season. What is the correct advice?",
        options: [
          "Give cooled boiled water twice a day",
          "Offer the breast more frequently — breast milk meets both thirst and hunger, and extra water is not needed before six months",
          "Give diluted porridge instead of water",
          "Give glucose water to prevent weakness",
        ],
        correctIndex: 1,
        explanation:
          "Breast milk is about 87% water and supply adjusts to the baby's thirst, so more frequent feeds cover hot weather. Water or other fluids before six months displace milk, reduce milk production and introduce infection risk.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An eighteen-month-old has swollen feet and a puffy face, sparse reddish hair and peeling skin patches, and is apathetic. What does this picture suggest, and what is the priority?",
        options: [
          "Simple anaemia — start iron syrup and review in a month",
          "Kwashiorkor (severe acute malnutrition with oedema) — refer for therapeutic feeding",
          "Nephrotic syndrome — restrict fluids at home",
          "Normal toddler puffiness of the dry season",
        ],
        correctIndex: 1,
        explanation:
          "Oedema with flaky-peel skin, thin discoloured hair and apathy is the classic picture of kwashiorkor. Bilateral pitting oedema in a young child defines severe acute malnutrition and needs urgent therapeutic care — home counselling or iron alone would be a dangerous delay.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Infant and Child Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best describes a balanced complementary meal for a nine-month-old in Ghana?",
        options: [
          "Thin rice water with sugar only",
          "Thick enriched porridge or a soft family meal combining a staple with beans, fish or egg and vegetables",
          "Breast milk alone, since solids are unnecessary until one year",
          "Fruit juice and biscuits between breastfeeds",
        ],
        correctIndex: 1,
        explanation:
          "From six months meals should be energy-dense and varied: a staple (banku, rice, porridge made thick), plus legume or animal protein (beans, groundnut, fish, egg) plus vegetables or fruit. Thin rice water, milk alone and juice-and-biscuits all fail energy, protein or micronutrient needs.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Infant and Child Nutrition",
        front: "State the 6-6-2 feeding rule.",
        back: "Exclusive breastfeeding to 6 months (no water or other fluids), complementary family foods from 6 months, and continued breastfeeding to 2 years and beyond.",
      },
      {
        topic: "Infant and Child Nutrition",
        front: "What MUAC reading in a child aged 6–59 months indicates severe acute malnutrition?",
        back: "Mid-upper arm circumference below 11.5 cm — or bilateral pitting oedema at any circumference — both require urgent therapeutic feeding.",
      },
      {
        topic: "Infant and Child Nutrition",
        front: "Distinguish kwashiorkor from marasmus on sight.",
        back: "Kwashiorkor: oedematous feet and face, flaky-peel skin, sparse discoloured hair, apathy. Marasmus: severe wasting, visible ribs, old-man facies, alert but ravenous.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guideline: Updates on the management of severe acute malnutrition in infants and children",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241506328",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Infant and young child feeding counselling cards",
        note: "Verify the current Ghana-adapted version.",
      },
      {
        organization: "Ghana Health Service",
        title: "Child Health Records Booklet and nutrition counselling materials",
        note: "Verify the current national edition for feeding and supplementation schedules.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Feeding and Protecting",
    lessonTitle: "Immunization: Schedules and Safety",
    description:
      "The little drops and jabs on Ghana's immunization schedule have silenced diseases our grandparents feared. Learn the timetable, the true contraindications, and the words that reassure a hesitant parent.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe Ghana's routine immunization schedule by age.",
      "Explain common side effects and distinguish them from true contraindications.",
      "Apply catch-up rules and counselling skills to keep children protected.",
    ],
    tags: ["immunization", "vaccines", "epi", "ghana schedule", "cold chain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every antigen on the schedule is a disease Ghana once watched kill children in numbers. The schedule is your map of that protection, and the child health record booklet is the family's passport through it. Your job: know the timetable, keep it honest (a missed dose is continued, never restarted), and hold the hands of parents who heard a rumour at the market.\n\nThis lesson walks Ghana's routine schedule, flags the true contraindications (very little qualifies), and gives you counselling language for the everyday worries — fever, crying, \"he is sick today.\"",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Ghana's routine schedule in outline: **at birth** — BCG, OPV-0, hepatitis B; **at 6, 10, 14 weeks** — oral polio, pentavalent (DPT-HepB-Hib), PCV and rotavirus, with IPV at 14 weeks; **at 9 months** — measles-rubella, yellow fever and meningitis A; **15–18 months** — a second MR. Vitamin A accompanies measles contacts per policy, and HPV protects pre-teen girls where the programme operates. Always confirm against the current record booklet.\n\nThe commonest reactions are a tender lump at the BCG site (and its small, honourable scar), mild fever, fretfulness and a day of poor appetite — all brief, treatable with fluids, a cool cloth and weight-based paracetamol. **Minor illness — a cold, low fever, mild diarrhoea — is not a reason to postpone vaccination.** True contraindications are rare: severe allergic reaction to a previous dose, and, for live vaccines, significantly weakened immunity. A missed dose continues the series — never restart from zero. Behind every visit stands the **cold chain**: vaccines live between 2 and 8°C, and a vaccine left on a sunny windowsill quietly ruins itself.",
      },
      {
        type: "clinical_pearl",
        body: "A runny nose never postponed a life-saving vaccine. A child who is feeding, playing and febrile below 38.5°C is immunized today — the disease prevented is far more dangerous than the cold already there.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother arrives for her baby's 14-week vaccines but refuses them: \"He has a small fever since last night and he is sneezing.\" Temperature is 37.6°C, he is breastfeeding well, playful and his chest is clear.\n\nWhat do you say and do?\n\nAnswer: This is a mild illness, not a contraindication — vaccinate today, because postponing risks a real disease while waiting for a perfect day that never comes. Cover the expected after-effects (fussiness, low fever, a tender leg) with fluids, breastfeeding, a cool cloth and weight-based paracetamol, and record the doses. If she still declines, respect her, agree a return date and document — a refused visit you can re-invite is recoverable; a lost family is not.",
      },
      {
        type: "memory_trick",
        body: "Chant the ages: \"**Birth — six — ten — fourteen — nine — eighteen.**\" Birth: BCG, OPV, hepatitis B. Six-ten-fourteen: OPV, penta, PCV, rota (IPV at fourteen). Nine months: MR, yellow fever, MenA. Eighteen: MR again. Golden catch-up rule: \"**Continue, never restart.**\"",
      },
      {
        type: "summary",
        body: "- Ghana routine schedule: birth (BCG, OPV-0, HepB); 6, 10, 14 weeks (OPV, pentavalent, PCV, rotavirus; IPV at 14 weeks); 9 months (MR, yellow fever, MenA); 15–18 months (MR2) — verify against the current record booklet.\n- Common effects are brief: tender site, low fever, fretfulness — fluids, comfort, weight-based paracetamol.\n- Minor illness is NOT a contraindication — vaccinate the child with the sniffles; true contraindications are rare (severe reaction to a prior dose, significant immune compromise for live vaccines).\n- Missed doses continue the series — never restart it.\n- The cold chain (2–8°C) is part of the dose: a vaccine cooked in the sun is a placebo with paperwork.",
      },
    ],
    questions: [
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A child missed her 10-week vaccines because the family travelled. She returns healthy at 14 weeks. What is the correct approach?",
        options: [
          "Restart the whole schedule from the birth doses",
          "Continue the series — give the missed 10-week doses now and keep to the programme with adjusted spacing",
          "Skip the missed doses and give only the 14-week set",
          "Wait until her first birthday and give a full fresh series",
        ],
        correctIndex: 1,
        explanation:
          "Interrupted schedules continue, they do not restart: give the missed doses now and complete the remaining ones with appropriate spacing. Skipping doses or restarting both leave avoidable gaps in protection.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother refuses vaccination because the baby has a cold and a temperature of 37.6°C, feeding and playing normally. What is the best response?",
        options: [
          "Agree to postpone for two weeks to be safe",
          "Explain that mild illness is not a contraindication and immunize today, covering expected side effects and comfort measures",
          "Give half doses now and the other half next month",
          "Refer to hospital before any vaccination",
        ],
        correctIndex: 1,
        explanation:
          "Mild illness in an otherwise well, feeding child does not reduce vaccine safety or effectiveness, and deferring only opens a window for disease. Vaccinate fully (never in halves), counsel on the mild expected reactions, and document.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which vaccines are routinely given at nine months on Ghana's schedule?",
        options: [
          "BCG and hepatitis B only",
          "Measles-rubella, yellow fever and meningitis A",
          "Pentavalent, PCV and rotavirus",
          "HPV and a second BCG",
        ],
        correctIndex: 1,
        explanation:
          "At nine months Ghana gives the first measles-rubella dose alongside yellow fever and meningitis A vaccines, with the second MR following at 15–18 months. Pentavalent, PCV and rotavirus belong to the 6-10-14 week visits, and BCG to birth.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Immunization",
        front: "Recite Ghana's routine immunization ages and their vaccines.",
        back: "Birth: BCG, OPV-0, hepatitis B. 6, 10, 14 weeks: OPV, pentavalent, PCV, rotavirus (IPV at 14 weeks). 9 months: MR, yellow fever, MenA. 15–18 months: MR2. Confirm against the current child health record booklet.",
      },
      {
        topic: "Immunization",
        front: "What is the rule for a child who missed doses?",
        back: "Continue the series from where it stopped, with appropriate spacing — never restart from the beginning and never skip the missed doses.",
      },
      {
        topic: "Immunization",
        front: "Name the common side effects of infant vaccines and two true contraindications.",
        back: "Common: tender injection site (BCG scar), mild fever, fretfulness, poor appetite for a day. True contraindications: severe allergic reaction to a previous dose, and significant immune compromise for live vaccines.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization — national schedule and child health record booklet",
        note: "Verify against the current national booklet, as schedule details are updated periodically.",
      },
      {
        organization: "World Health Organization",
        title: "Immunization coverage and vaccine safety resources",
        note: "Verify current WHO guidance and fact sheets.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Common Childhood Conditions",
    description:
      "Malaria, measles, anaemia and sickle cell disease — the everyday illnesses of Ghanaian children, and the IMCI habit of asking, looking, treating and teaching that keeps them survivable.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the presentation and management of malaria and measles in children.",
      "Explain sickle cell disease crises and why fever in these children is an emergency.",
      "Apply the IMCI sequence — assess, classify, treat, counsel — to everyday presentations.",
    ],
    tags: ["childhood illness", "malaria", "measles", "sickle cell", "imci", "anaemia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In a Ghanaian clinic, four names appear on the register daily: malaria, measles in season, anaemia and sickle cell disease. IMCI — Integrated Management of Childhood Illness — keeps them orderly: ask the danger signs, look and count, classify, treat, then teach the mother before she leaves.\n\nThis lesson tours the big four: recognising each, treating correctly, and knowing which version needs the ambulance rather than the pharmacy shelf.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Malaria**: test every fever (RDT) and treat positives with weight-based artemether-lumefantrine **with food or milk** — fat doubles absorption — completed over three days. Danger signs, convulsion, coma, severe pallor or inability to drink mean severe malaria: first-dose injectable artesunate and urgent referral — a within-hours disease. **Measles**: fever with cough, runny nose and red eyes, Koplik spots inside the cheeks, then a rash spreading down from behind the ears. Complications — pneumonia, diarrhoea, ear and eye damage — kill: give **vitamin A**, feed well and refer the complicated. The MR vaccine is the prevention.\n\n**Anaemia** in Ghanaian children is usually malaria plus diet plus worms: check pallor of palms and conjunctiva, confirm with haemoglobin, treat causes and feed the fix. **Sickle cell disease** touches thousands of families: painful crises (in infants, the swollen hand-foot dactylitis), with two standing rules — fever in a sickler is an emergency, and daily folic acid plus relentless malaria prevention keep crises away. Teach families the warning words: fever, chest pain, breathing trouble, swollen painful part, sudden pallor.",
      },
      {
        type: "clinical_pearl",
        body: "Artemether-lumefantrine swallowed on an empty stomach is a dose half-taken — fat is needed for absorption. Every AL prescription travels with the instruction: give with milk or food, and finish all three days even when the fever leaves.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-year-old reaches your OPD with two days of fever and one vomit this morning. She is alert, drinks eagerly, has no convulsions, no pallor and a normal chest. RDT positive; temperature 38.4°C; weight 13 kg.\n\nHow do you classify and manage this child?\n\nAnswer: This is uncomplicated malaria — alert, drinking, no danger signs, positive test. Treat with weight-based artemether-lumefantrine for three days, with milk or food, plus paracetamol and fluids. The teaching completes the prescription: finish all doses even as she improves, and return immediately for convulsion, refusing to drink, worsening vomiting, new pallor or fast breathing. Remind the family about treated bed nets.",
      },
      {
        type: "memory_trick",
        body: "The fever frame: \"**Test, Treat, Teach**\" — RDT first, full treatment with food, danger-sign counselling at the door. Measles in one line: \"**Cough, Coryza, Conjunctivitis — Koplik — then the rash from the ears down.**\" Sickle cell standing orders: \"Fever is not a symptom in a sickler — it is an emergency.\"",
      },
      {
        type: "summary",
        body: "- IMCI at every sick child: ask danger signs, look and count, classify, treat, teach the mother before discharge.\n- Malaria: test every fever; uncomplicated cases get weight-based AL for three days WITH food or milk; danger signs mean severe malaria — first-dose injectable artesunate and urgent referral.\n- Measles: cough, coryza, conjunctivitis, Koplik spots, rash from the ears downward; give vitamin A and hunt complications (pneumonia, diarrhoea, eye damage).\n- Anaemia: think malaria, diet and worms together — treat causes and feed the cure.\n- Sickle cell disease: dactylitis in infants, painful crises later; fever = emergency; daily folic acid and malaria prevention stand permanently.",
      },
    ],
    questions: [
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must artemether-lumefantrine be given with milk or food?",
        options: [
          "To prevent vomiting in all children",
          "Because fat in the meal greatly improves absorption of the drug",
          "To mask the taste only",
          "Because food prevents sleepiness",
        ],
        correctIndex: 1,
        explanation:
          "Artemether-lumefantrine is poorly absorbed on an empty stomach; dietary fat roughly doubles uptake. Giving it with milk or food is part of the prescription, not a comfort measure.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature in a febrile child turns malaria from uncomplicated to severe, requiring first-dose injectable artesunate and urgent referral?",
        options: [
          "Fever for two days with a positive RDT in a drinking, alert child",
          "A convulsion or inability to drink",
          "A temperature of 38.5°C in a playful child",
          "Mild pallor with normal activity",
        ],
        correctIndex: 1,
        explanation:
          "Danger signs — convulsion, coma, inability to drink or breastfeed, severe pallor, repeated vomiting — define severe malaria, treated with pre-referral injectable artesunate and urgent transfer. Alert, drinking children with fever and a positive test are treated orally at outpatient level.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Common Childhood Conditions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother of a child with sickle cell disease calls the clinic: her son has a temperature of 38.6°C and mild body pains. What is the correct response?",
        options: [
          "Advise paracetamol at home and clinic review if not better in three days",
          "Treat it as an emergency — the child needs urgent assessment and treatment because fever can signal overwhelming infection in sickle cell disease",
          "Reassure that fever is normal in sicklers",
          "Advise increasing folic acid at home",
        ],
        correctIndex: 1,
        explanation:
          "Children with sickle cell disease have impaired defences against encapsulated bacteria, so fever can be the first sign of overwhelming sepsis or a chest crisis. Fever in a sickler is a same-hour emergency — assess, investigate, start treatment; home observation with paracetamol is how these children die.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Common Childhood Conditions",
        front: "Give the three-step fever frame for malaria management.",
        back: "Test (RDT or blood film on every fever), Treat (weight-based AL for three days, with food or milk, completed fully), Teach (danger signs requiring immediate return: convulsion, refusing drinks, vomiting everything, worsening breathing or pallor).",
      },
      {
        topic: "Common Childhood Conditions",
        front: "Describe the clinical picture of measles.",
        back: "Fever with cough, coryza and conjunctivitis, Koplik spots on the buccal mucosa, then a maculopapular rash beginning behind the ears and spreading downward. Treat with vitamin A and refer complications.",
      },
      {
        topic: "Common Childhood Conditions",
        front: "Why is fever an emergency in a child with sickle cell disease?",
        back: "Impaired splenic function and immunity allow fast, overwhelming bacterial infection — a fever of 38.5°C or more needs urgent assessment and treatment, never home watch-and-wait.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guidelines for the treatment of malaria (current edition)",
        note: "Verify the latest WHO edition and the Ghana-adapted treatment policy used in your facility.",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Verify the current edition for national dosing and referral criteria.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Dehydration in Children: Assess and Act",
    description:
      "A child can lose a whole water bottle through a day of diarrhoea — the pinch of skin, the sunken eyes and the offer of a drink tell you how much, and the plan letter tells you what to do.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO classification of dehydration: none, some and severe.",
      "Explain Treatment Plans A, B and C and what each contains.",
      "Apply the assessment signs to choose the correct plan without delay.",
    ],
    tags: ["dehydration", "fluids", "ors", "diarrhoea", "who plans"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Diarrhoea is ordinary; dehydration is what kills. A small child's body is mostly water, and loose stools drain it fast. The WHO system turns the emergency into three questions answered with eyes and hands alone: how does the child behave, are the eyes sunken, and what happens to a pinched fold of skin?\n\nThe answers sort every child into **no, some or severe dehydration** — and each class carries a plan letter: A for home, B for the rehydration bench, C for the vein. Choose the letter fast, and you save more children than with any other skill.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**No dehydration**: well and drinking normally, eyes normal, pinch returns instantly — Plan A: ORS after each loose stool at home, continued feeding and breastfeeding, zinc, and clear return advice. **Some dehydration**: restless, drinks eagerly, sunken eyes, pinch returns slowly — Plan B: ORS **75 ml/kg over four hours** at the facility, reassess, then resume feeding with the mother taught to mix and give ORS. **Severe dehydration**: lethargic, **unable to drink**, eyes very sunken, pinch very slow — Plan C: IV Ringer's lactate **100 ml/kg** (30 ml/kg fast, the rest over hours by age), switching to ORS as soon as the child can drink; if IV access is impossible, refer urgently.\n\nTwo habits finish the system: **zinc for 10–14 days** shortens the illness and prevents the next one, and **feeding continues** — food is part of the treatment. For severely malnourished children use ReSoMal instead of standard ORS. And never send a dehydrated child home with anti-diarrhoeal medicine and false comfort.",
      },
      {
        type: "clinical_pearl",
        body: "The offer of a drink is a diagnostic test: eager drinking means some dehydration; inability to drink means severe — an IV line, not a queue ticket.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An eighteen-month-old is carried in after two days of loose stools. She is drowsy and floppy, does not cry when handled, and when you offer ORS by cup she does not swallow. Her eyes are deeply sunken; the skin pinch over the abdomen stays tented for more than two seconds.\n\nWhich dehydration class is this, and what is your immediate management?\n\nAnswer: Lethargy with inability to drink and a very slow pinch is severe dehydration — Plan C. Start IV Ringer's lactate 100 ml/kg (30 ml/kg over the first half hour in a child over 12 months, the remaining 70 ml/kg over the next two and a half hours), reassess hourly, and switch to oral ORS the moment she can drink. Continue breastfeeding when she wakes, start zinc, look for the cause — cholera if stools are rice-water — and teach the mother Plan A before discharge.",
      },
      {
        type: "memory_trick",
        body: "Grading signs: \"**Pinch, Eyes, Drink**\" — normal pinch and eyes with a drinking child = none; slow pinch, sunken eyes, drinking eagerly = some; very slow pinch, very sunken eyes, cannot drink = severe. Then the plan letters: \"**A at home, B on the bench, C in the vein.**\"",
      },
      {
        type: "summary",
        body: "- Dehydration grades: none (well, drinking, normal pinch) / some (restless, drinks eagerly, sunken eyes, slow pinch) / severe (lethargic, cannot drink, very sunken eyes, very slow pinch).\n- Plan A: home ORS after each stool, continued feeding and breastfeeding, zinc 10–14 days, return advice.\n- Plan B: 75 ml/kg ORS over four hours at the facility with reassessment, then feeding resumes.\n- Plan C: IV Ringer's lactate 100 ml/kg for severe dehydration — reassess and step down to ORS as soon as the child can drink.\n- Zinc shortens this illness and the next; feeding is treatment, not a pause; ReSoMal replaces ORS in severe malnutrition.",
      },
    ],
    questions: [
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A child with diarrhoea is restless, drinks eagerly when offered ORS, has sunken eyes and a skin pinch that returns slowly. Which classification and plan fit?",
        options: [
          "No dehydration — Plan A, home care",
          "Some dehydration — Plan B, ORS 75 ml/kg over four hours at the facility",
          "Severe dehydration — Plan C, IV fluids",
          "Cholera until proven otherwise — antibiotics first",
        ],
        correctIndex: 1,
        explanation:
          "Restlessness, eager drinking, sunken eyes and a slowly returning pinch define some dehydration, treated with Plan B — 75 ml/kg of ORS over about four hours with reassessment, then continued feeding and Plan A advice.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which single finding upgrades a child with diarrhoea to severe dehydration?",
        options: [
          "Drinking eagerly but fretfully",
          "Being lethargic or unable to drink",
          "Passing four loose stools in a day",
          "Sunken eyes with a normal pinch and good drinking",
        ],
        correctIndex: 1,
        explanation:
          "Lethargy, unconsciousness or inability to drink marks severe dehydration — the class that needs IV Ringer's lactate (Plan C) immediately. Eager drinking, sunken eyes with good drinking, or stool counts alone do not.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Dehydration in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Besides rehydration, which additional treatment shortens the current diarrhoeal episode and reduces recurrence?",
        options: [
          "A course of routine antibiotics for all diarrhoea",
          "Zinc supplementation for 10–14 days",
          "Anti-diarrhoeal syrup",
          "Stopping all feeds for 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Zinc for 10–14 days reduces the duration of the episode and the risk of the next one, and continues alongside feeding. Routine antibiotics, anti-diarrhoeal drugs and fasting are not part of WHO management and some cause harm.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Dehydration in Children",
        front: "Name the three WHO dehydration classes with one signature sign each.",
        back: "None: well and drinking, normal pinch. Some: restless, drinks eagerly, slow pinch. Severe: lethargic, cannot drink, very slow pinch with very sunken eyes.",
      },
      {
        topic: "Dehydration in Children",
        front: "What fluids and volumes define Plans B and C?",
        back: "Plan B: ORS 75 ml/kg over about four hours at the facility. Plan C: IV Ringer's lactate 100 ml/kg — 30 ml/kg rapidly, the rest over the following hours by age — reassessing to step down to ORS when the child can drink.",
      },
      {
        topic: "Dehydration in Children",
        front: "What extra prescription accompanies every diarrhoea treatment plan, and why?",
        back: "Zinc for 10–14 days — it shortens the current episode and lowers the risk of recurrence; feeding and breastfeeding also continue throughout.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "The treatment of diarrhoea: a manual for physicians and senior health workers",
        note: "Classic WHO diarrhoea manual with Plans A–C. Verify the current edition.",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Fever in Children",
    description:
      "The frightened parent's first words at triage — and the calm sequence behind them: undress, fluids, dose, test, and the signs that mean the hospital, today.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define fever in children and list its common Ghanaian causes.",
      "Explain the assessment that separates a safe fever from a dangerous one.",
      "Apply correct antipyretic dosing and first aid for febrile convulsions.",
    ],
    tags: ["fever", "assessment", "malaria", "febrile convulsion", "paracetamol"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "\"Doctor, my child is hot!\" — six words you will hear before the family sits down. Fever — an axillary temperature of **37.5°C or more** — is a symptom, not a disease, and in Ghana it wears many costumes: malaria first, then chest and throat infections, urinary infection, typhoid, measles in season. The fever itself is rarely the danger; what it travels with is.\n\nSo this lesson is a sorting exercise: finding the dangerous fevers, cooling safely, and handling the moment every feverish family dreads — the convulsion.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Assess with the IMCI questions: how long, any convulsion, drinking, vomiting everything, unusually sleepy? Then look: stiff neck, bulging fontanelle, petechial rash, severe pallor, fast breathing, a child who cannot be woken. Any of these, **or any fever under three months of age**, means treat and refer urgently. Test every febrile child for malaria and treat positives; hunt other causes when negative.\n\nSafe care: undress to a single layer, offer fluids often, give **paracetamol 15 mg per kg** every six hours (max four doses daily) from today's measured weight, and treat the cause. No cold baths, alcohol rubs or guessed doses — harm without benefit. A **febrile convulsion** (six months to five years) is frightening but usually brief: lay the child on the side, protect from injury, put **nothing in the mouth**, time it, then assess fully — malaria and meningitis must be ruled out before anyone calls it \"just a fit\". A fit beyond five minutes, a repeat, or drowsiness that will not lift needs urgent hospital care.",
      },
      {
        type: "clinical_pearl",
        body: "A feverish baby under three months is a referral, whatever the malaria test says — that immune system cannot yet argue with bacteria. The threshold is the age, not the temperature.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A two-year-old convulsed at home for about a minute during yesterday's fever. He is now awake and irritable, temperature 38.9°C, drinking from his mother's hand. RDT negative; no stiff neck, fontanelle closed. The mother is terrified of another fit.\n\nWhat is this event, and what are your next steps?\n\nAnswer: A brief convulsion with fever in a two-year-old fits a febrile convulsion — but only after malaria and meningitis are excluded. With a negative RDT, an awake drinking child and an unremarkable examination, treat the fever: undress him, keep fluids coming, paracetamol 15 mg/kg, and hunt the source (throat, ears, urine, chest). Teach the mother the first aid — side-lying, nothing in the mouth, protect the head, time the fit — and the return rules: a fit beyond five minutes, a repeat, or a child who cannot be woken means hospital now.",
      },
      {
        type: "memory_trick",
        body: "Fever care in four beats: \"**Strip, Sip, Dose, Diagnose**\" — undress to one layer, fluids again and again, paracetamol 15 mg per kilo, then find and treat the cause. Convulsion first aid: \"**Side, Safe, Stop-watch, and nothing in the mouth.**\"",
      },
      {
        type: "summary",
        body: "- Fever = axillary 37.5°C or above; a symptom to investigate, not a disease to suppress.\n- Dangerous companions: convulsion, stiff neck, bulging fontanelle, petechiae, not drinking, unrousable — and ANY fever under three months of age: treat and refer.\n- Safe care: undress, fluids, paracetamol 15 mg/kg every 6 hours from measured weight; test and treat malaria; no cold baths or alcohol rubs.\n- Febrile convulsion: side-lying, protect from injury, nothing in the mouth, time it; afterwards exclude malaria and meningitis before calling it simple.\n- Return immediately if: fit lasting over five minutes, repeated fits, no waking, or refusal of all fluids.",
      },
    ],
    questions: [
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct paracetamol dose and frequency for a feverish child?",
        options: [
          "15 mg per kg per dose, up to every six hours with a maximum of four doses a day",
          "A quarter of an adult tablet at any age",
          "500 mg for every child over one year",
          "As much as needed until the fever goes",
        ],
        correctIndex: 0,
        explanation:
          "Paracetamol is dosed by weight, not by age or tablet fractions: 15 mg/kg per dose, given every six hours, with a maximum of four doses in 24 hours. Today's measured weight is part of the prescription.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A three-week-old baby has an axillary temperature of 38°C. What is the correct management?",
        options: [
          "Home paracetamol and review in two days if fever continues",
          "Urgent referral — any fever in an infant under three months needs hospital assessment and treatment",
          "Treat as malaria if the RDT is positive, home care if negative",
          "Tepid sponging with cold water at home",
        ],
        correctIndex: 1,
        explanation:
          "Infants under three months cannot localise infection and can deteriorate within hours, so fever at this age is always an urgent referral for full assessment and treatment — regardless of the malaria test result.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Fever in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A child is having a febrile convulsion in your consulting room. Which action is correct?",
        options: [
          "Force a spoon between the teeth to protect the tongue",
          "Lay the child on the side, protect from injury, put nothing in the mouth and time the convulsion",
          "Pour cold water over the child immediately",
          "Hold the child upright and shake gently to rouse them",
        ],
        correctIndex: 1,
        explanation:
          "Correct first aid is side-lying to protect the airway, removing hazards, nothing forced into the mouth (it breaks teeth and blocks breathing), and timing the fit. After it ends, assess fully — in Ghana, exclude malaria and meningitis before labelling it a simple febrile convulsion.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Fever in Children",
        front: "Define fever in a child and state the paracetamol dose.",
        back: "Fever = axillary temperature 37.5°C or higher. Paracetamol 15 mg/kg per dose, every 6 hours, maximum four doses in 24 hours, calculated from a measured weight.",
      },
      {
        topic: "Fever in Children",
        front: "Which children with fever must be referred urgently regardless of test results?",
        back: "Any infant under three months with fever; and any child with convulsion, stiff neck, bulging fontanelle, petechial rash, refusal of fluids, or unrousable drowsiness.",
      },
      {
        topic: "Fever in Children",
        front: "Give the four steps of febrile convulsion first aid.",
        back: "Lay the child on the side, protect from injury, put nothing in the mouth, and time the seizure — then, once it has ended, assess fully and exclude malaria and meningitis.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / UNICEF",
        title: "Integrated Management of Childhood Illness (IMCI) chart booklet",
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548373",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Verify the current edition for national antipyretic and referral guidance.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "When Children Fall Ill",
    lessonTitle: "Respiratory Disease in Children",
    description:
      "A child's airways are narrow and their breathing tells the truth — learn the age-band breath counts, the warning shapes of the chest, and the conditions behind the cough.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO fast-breathing thresholds by age and their use in classifying pneumonia.",
      "Explain severe respiratory signs requiring referral and oxygen.",
      "Apply management principles for pneumonia, croup and bronchiolitis.",
    ],
    tags: ["pneumonia", "respiratory", "fast breathing", "croup", "bronchiolitis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Children breathe faster than adults, and what counts as fast depends on age. WHO turns this into three numbers you will carry forever — **60, 50, 40**: under two months, 60 or more breaths per minute is fast; two to twelve months, 50 or more; one to five years, 40 or more. Count a full minute in a calm child, and the number plus the chest's shape sorts most coughs into treatable categories.\n\nBecause a child's airways are narrow and soft, infections an adult shrugs into a cough become, in a child, a struggle for air — read the struggle early.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pneumonia** is cough or difficult breathing plus fast breathing for age; add **lower chest wall in-drawing** or other danger signs (grunting, flaring, cyanosis, inability to drink, convulsions, lethargy) and it is severe — first-dose antibiotics, oxygen if saturation is low, and urgent referral. Non-severe pneumonia gets weight-based **oral amoxicillin** with follow-up in two days and danger-sign teaching. Cough beyond two weeks asks for TB screening.\n\n**Croup** (viral, parainfluenza) strikes six months to three years with a barking seal-like cough, hoarse voice and inspiratory stridor, worse at night: keep the child calm — crying deepens the obstruction — give corticosteroids per protocol, avoid steam inhalation (scalds, no benefit), and refer stridor at rest. **Bronchiolitis** is the first wheeze in an under-two with coryza: supportive care — small frequent feeds, gentle nose clearing, oxygen if needed — antibiotics adding nothing. And charcoal and cooking smoke worsen all of these: smoke-free counselling is respiratory medicine.",
      },
      {
        type: "clinical_pearl",
        body: "In-drawing is a shape, not a sound: watch the lower chest wall sink inward in a bare-chested child. With cough, that look reclassifies pneumonia as severe in one glance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A fourteen-month-old is brought with three days of cough and mild fever. He is alert, drinking from his cup, and you count 54 breaths per minute while he rests on his mother's lap. No chest in-drawing, no grunting, saturation normal, chest clear of wheeze.\n\nHow do you classify this illness, and what is the plan?\n\nAnswer: For a 14-month-old the threshold is 40, so 54 breaths per minute with cough is fast breathing — pneumonia without severe signs. Plan: weight-based oral amoxicillin, teach the danger signs (in-drawing, inability to drink, worsening breathing, fever that will not settle), review in two days, and counsel on smoke-free air. Any danger sign turns this into severe pneumonia — first-dose treatment and referral.",
      },
      {
        type: "memory_trick",
        body: "The breath bands: \"**Sixty before two months, Fifty to a year, Forty to five years**\" — count a full minute in a calm child first. For the cough dictionary: \"**Pneumonia = fast breathing; Croup = seal cough at night; Bronchiolitis = first wheeze under two.**\"",
      },
      {
        type: "summary",
        body: "- Fast-breathing thresholds (WHO): ≥60/min under 2 months; ≥50/min at 2–12 months; ≥40/min at 1–5 years — always counted for a full minute in a calm child.\n- Cough plus fast breathing = pneumonia; add lower chest in-drawing, grunting, cyanosis, or drinking refusal = severe — first-dose antibiotics, oxygen if needed, urgent referral.\n- Non-severe pneumonia: weight-based oral amoxicillin, danger-sign teaching, review in two days; cough over two weeks needs TB screening.\n- Croup: barking cough, hoarseness, night stridor — keep calm, steroids per protocol, no steam, refer stridor at rest.\n- Bronchiolitis: first wheeze under two — supportive feeding, nose care, oxygen if needed; antibiotics add nothing.",
      },
    ],
    questions: [
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A six-month-old with cough has a respiratory rate of 52 per minute when calm. What does this mean?",
        options: [
          "Normal breathing for a six-month-old",
          "Fast breathing — meets the pneumonia threshold of 50 for a child aged 2–12 months",
          "Only worrying if it reaches 60",
          "Fast breathing, but the threshold for this age is 40",
        ],
        correctIndex: 1,
        explanation:
          "For a child aged two to twelve months, 50 or more breaths per minute counts as fast breathing, so 52 with a cough classifies as pneumonia. The 40 threshold applies to 1–5 years and 60 to infants under two months.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sign, added to cough and fast breathing, reclassifies pneumonia as severe and requires referral?",
        options: [
          "A runny nose",
          "Lower chest wall in-drawing",
          "A temperature of 37.8°C",
          "Coughing at night only",
        ],
        correctIndex: 1,
        explanation:
          "Lower chest wall in-drawing shows the small airways are working hard enough to collapse the soft chest wall — a severe sign. With grunting, cyanosis, refusal to drink or lethargy, it demands first-dose antibiotics, oxygen when indicated, and urgent referral.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Respiratory Disease in Children",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A two-year-old wakes at night with a barking cough, a hoarse voice and noisy inspiration but is drinking and not cyanosed. What is the best immediate management?",
        options: [
          "Steam inhalation over a bowl of hot water",
          "Keep the child calm, give corticosteroids per protocol, and refer if stridor persists at rest",
          "Start oral amoxicillin immediately",
          "Encourage running around to clear the airway",
        ],
        correctIndex: 1,
        explanation:
          "This is classic viral croup. Calm (crying worsens obstruction) plus corticosteroids per protocol is the evidence-based response; steam risks scalds without benefit, antibiotics treat nothing viral, and exertion deepens the struggle. Stridor at rest or distress needs referral.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Respiratory Disease in Children",
        front: "Quote the WHO fast-breathing thresholds by age.",
        back: "Under 2 months: 60 breaths/min or more; 2–12 months: 50 or more; 1–5 years: 40 or more. Count for one full minute in a calm child before classifying.",
      },
      {
        topic: "Respiratory Disease in Children",
        front: "Which physical signs make pneumonia 'severe'?",
        back: "Lower chest wall in-drawing, grunting, nasal flaring, central cyanosis, inability to drink, convulsions or lethargy — give first-dose antibiotics, oxygen if indicated, and refer urgently.",
      },
      {
        topic: "Respiratory Disease in Children",
        front: "How do you recognise croup and what is its cornerstone of care?",
        back: "Barking seal-like cough, hoarse voice, inspiratory stridor, worse at night, aged 6 months–3 years. Keep the child calm, give corticosteroids per protocol, avoid steam, and refer stridor at rest.",
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
        note: "Verify the current national adaptation used in Ghana.",
      },
      {
        organization: "Elsevier",
        title: "Nelson Textbook of Pediatrics",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "paediatric-nursing",
    moduleTitle: "Keeping Children Safe",
    lessonTitle: "Child Protection: Recognising Abuse and Neglect",
    description:
      "Some stories do not match the injuries that walk in with them. Learn to recognise abuse and neglect, document what you truly see, and act within Ghana's child protection system.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four types of child abuse and their recognition patterns.",
      "Explain the documentation and reporting duties of a health worker who suspects abuse.",
      "Apply a safeguarding response that protects the child while following national law and policy.",
    ],
    tags: ["safeguarding", "abuse", "neglect", "child protection", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Children cannot book appointments to report their own harm. They arrive with burns \"from spilling water\", bruises a toddler cannot reach, or a silence louder than the caregiver's story. Abuse takes four forms — **physical, sexual, emotional and neglect** — and Ghana's Children's Act 1998 (Act 560) places a duty on health workers to notice and act.\n\nThis is sensitive work, and the families may be your neighbours. The lesson is not about accusation — it is about pattern recognition, honest documentation, and knowing what to do next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Injuries speak: a **non-mobile baby** should not bruise anywhere (\"those who don't cruise rarely bruise\"); patterned marks mirror the object (belt lines, stick streaks, cigarette shapes); burns with **glove-and-stocking** symmetry and clean waterlines speak of immersion, not spilling; torn frenulum, fractures or injuries at different healing stages tell a different story than the one given. **Neglect** shows chronically: a dirty child with untreated sores, missed immunisations, weight falling off the chart without organic cause. **Sexual abuse** may present with genital injury, an STI or pregnancy in a young adolescent, sexualised behaviour, or a disclosure — the most serious evidence. **Emotional** abuse shows in behaviour: flinching, frozen watchfulness, aggression, regression.\n\nYour duty when suspicion rises: treat the injuries, **document verbatim** — the child's words in quotation marks, diagrams with measurements, times — ask open questions only (\"tell me what happened\"), never leading ones, never promise secrecy. Then report to the Department of Social Welfare, the police DOVVSU unit or your facility's child protection focal person, with a safety plan before discharge — a child should not go home unprotected while the report waits. Stay non-accusatory with the caregiver; your job is evidence and safety, not confrontation.",
      },
      {
        type: "clinical_pearl",
        body: "When the story and the injury disagree, believe the injury — a symmetrical burn with a clean border does not come from a spilt cup.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-year-old is brought to the emergency room with burns to both feet and ankles. The mother says he pulled a bowl of hot water onto himself \"this morning, around six\" — but the burn is symmetrical like a pair of socks, with a sharp line at the ankles, and she waited until afternoon to come. The child is withdrawn, meeting no one's eyes.\n\nWhat features trouble you, and what are your next actions?\n\nAnswer: Spilled water scalds splash asymmetrically down one side; a stocking-pattern burn with a clean waterline on both feet speaks of immersion, and the hours of delay deepen the concern. Treat the burn fully, document with diagrams and measured descriptions, record the mother's account in her own words with times, ask open non-leading questions, and report to Social Welfare and DOVVSU — with a safety plan agreed before discharge. Confronting the mother yourself is not your role; safeguarding is.",
      },
      {
        type: "memory_trick",
        body: "The four doubts of harm: \"**Doesn't match** (story vs injury), **Development** (can this child reach that?), **Different** (does the story stay the same?), **Delay** (why did help come so late?).\" Any two doubts and your duty begins: **Treat, Record verbatim, Report.**",
      },
      {
        type: "summary",
        body: "- Four abuse types — physical, sexual, emotional, neglect — and Ghana's Children's Act 1998 (Act 560) places a duty to act on every health worker.\n- Injury patterns: bruises in non-walking babies, patterned marks, glove-and-stocking burns, injuries at different healing stages, torn frenulum.\n- Neglect: chronic dirtiness, untreated illness, failing weight; sexual abuse: genital injury, STI, pregnancy in a young adolescent, disclosure.\n- Documentation is evidence: exact words in quotes, diagrams and measurements, times, open questions, no promises of secrecy.\n- Report to Social Welfare, DOVVSU or your child protection focal person, with a safety plan before discharge; stay non-accusatory.",
      },
    ],
    questions: [
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A four-month-old baby who cannot yet roll is found to have bruises on the back and thighs. How should you interpret this?",
        options: [
          "Normal bruising from everyday baby care",
          "Highly suspicious for physical abuse — babies who cannot move themselves should not bruise",
          "A sign of vitamin deficiency only",
          "Safe as long as the mother explains it",
        ],
        correctIndex: 1,
        explanation:
          "\"Those who don't cruise rarely bruise\" — a non-mobile infant with bruises cannot have made them accidentally, so non-accidental injury must be assumed until excluded: examine fully, document, and follow child protection procedures.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect a child's burn is non-accidental. Which set of actions matches your duty as a health worker?",
        options: [
          "Confront the caregiver directly and demand the true story",
          "Treat the injury, document findings and quotes exactly, and report to social welfare or the police DOVVSU unit with a safety plan before discharge",
          "Note your private suspicion in the chart and leave the family to resolve it",
          "Discharge quickly to avoid embarrassing the family",
        ],
        correctIndex: 1,
        explanation:
          "Your duty is treatment, verbatim documentation, open non-leading questions, formal report through child protection channels, and a safety plan before discharge. Private notes, confrontation and quick discharge all leave the child unprotected.",
        courseSlug: "paediatric-nursing",
      },
      {
        topic: "Child Protection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which burn pattern most strongly suggests an inflicted (immersion) injury rather than an accidental spill?",
        options: [
          "Irregular splash marks down one side of the chest",
          "Symmetrical glove-or-stocking distribution with a sharp, clean border",
          "A single small blister on one fingertip",
          "Diffuse redness across the face",
        ],
        correctIndex: 1,
        explanation:
          "Accidental spills splash and trickle, producing irregular, one-sided patterns. Forced immersion produces symmetrical stocking or glove burns with crisp waterlines — the shape of the container, not the splash. A history inconsistent with that pattern deepens the suspicion.",
        courseSlug: "paediatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Child Protection",
        front: "Name the four types of child abuse and the Ghanaian law that frames your duty.",
        back: "Physical, sexual, emotional abuse and neglect — with duty framed by the Children's Act 1998 (Act 560) and reporting through the Department of Social Welfare and the police DOVVSU unit.",
      },
      {
        topic: "Child Protection",
        front: "What documentation rules protect both the child and you in a suspected abuse case?",
        back: "Record the child's words verbatim in quotation marks, describe and diagram injuries with measurements and times, note the stated history and who gave it, ask only open questions, and never promise secrecy.",
      },
      {
        topic: "Child Protection",
        front: "State the four recognition doubts (the four D's) that should trigger safeguarding.",
        back: "Doesn't match (injury vs story), Development (the child is too young for the explanation), Different (the story changes), and Delay (presentation came unreasonably late).",
      },
    ],
    sources: [
      {
        organization: "Republic of Ghana",
        title: "Children's Act, 1998 (Act 560)",
        note: "Primary national legislation on child rights and protection — verify the current consolidated version.",
      },
      {
        organization: "World Health Organization",
        title: "Responding to children and adolescents who have been sexually abused: WHO clinical guidelines",
        year: "2017",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Child maltreatment — fact sheet and prevention resources",
        note: "Verify the latest WHO update.",
      },
    ],
  },
];
