// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 1 — Batch B
// 18 lessons anchored to prisma/seed-data/anchors/y2s1-b.json
// (pharmacology-1 and nutrition-dietetics)
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "How Drugs Work",
    lessonTitle: "Pharmacology Terminology: Speaking the Language",
    description:
      "Pharmacology has a language of its own — half-life, bioavailability, loading dose. Once you speak it, drug charts stop being a puzzle and start being information.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define half-life, bioavailability, loading dose and maintenance dose in plain language.",
      "Explain what peak and trough levels tell you about a drug building up or wearing off.",
      "Apply these terms to ward drugs such as gentamicin, oxytocin and ferrous sulfate.",
    ],
    tags: ["pharmacology", "terminology", "half-life", "bioavailability", "drug charts"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Open any treatment sheet and a small dictionary stares back at you: stat doses, loading doses, half-lives, trough levels. Nobody hands you a translation guide on your first ward round — you are expected to already speak the language.\n\nThis lesson is your phrasebook. You will meet the words that describe how much of a drug reaches the blood, how long it stays, and how we keep it working at a safe level. These are the terms nurses, doctors and pharmacists use to talk to each other about every woman in your care.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Half-life** is the time the body takes to remove half of what is circulating. If a drug's half-life is six hours, half is gone by six hours, a quarter remains at twelve, an eighth at eighteen. After roughly **five half-lives**, a repeated dose reaches **steady state** — the level stops climbing because you are putting in only as fast as the body clears. The same five half-lives is roughly how long a drug takes to wash out after the last dose.\n\n**Bioavailability** is the fraction of each dose that actually reaches the bloodstream. Intravenous drugs arrive complete — 100 percent — while tablets lose some to digestion and the liver's first-pass breakdown. A **loading dose** is a larger opening dose that fills the body quickly so the drug reaches effective levels fast; the smaller **maintenance dose** keeps the level steady. The highest blood level after a dose is the **peak**; the lowest, just before the next dose, is the **trough**. The gap between the smallest helpful level and the smallest harmful one is the **therapeutic window** — and some ward drugs, like magnesium sulfate, live in a very narrow one.",
      },
      {
        type: "clinical_pearl",
        body: "A drug with a short half-life is gone before you finish the shift; a drug with a long one is still working after handover. That single sentence explains many a night instruction to 'hold the next dose' — and many a morning instruction to 'watch for accumulation'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on the postnatal ward is being treated for puerperal sepsis with once-daily gentamicin. On rounds the nurse mentions that the team has requested 'drug levels' — blood samples timed precisely to the dose — and you are asked to explain to the evening student why the timing matters.\n\nWhy do we measure gentamicin at specific times rather than at random?\n\nAnswer: Gentamicin has a narrow therapeutic window. A peak level, drawn shortly after the dose, confirms the dose is strong enough to fight the infection. A trough level, drawn just before the next dose, confirms the drug is being cleared and is not accumulating towards kidney and hearing damage. A random sample gives a number with no meaning — the clock is part of the test.",
      },
      {
        type: "memory_trick",
        body: "Count on your fingers: five half-lives in to fill the tank, five half-lives out to empty it. And picture a window, not a door — the wider the therapeutic window, the more room a drug has before someone falls out of safety.",
      },
      {
        type: "summary",
        body: "- Half-life: time for the body to remove half the circulating drug; about five half-lives reaches steady state or near-total clearance.\n- Bioavailability: the fraction of a dose reaching the blood — 100 percent intravenous, less by mouth.\n- A loading dose fills the tank quickly; the maintenance dose keeps it steady.\n- Peak is the highest level after a dose, trough the lowest before the next — vital for narrow-window drugs.\n- The therapeutic window is the space between the least effective and the least toxic levels.",
      },
    ],
    questions: [
      {
        topic: "Pharmacology Terminology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A drug has a half-life of 6 hours. A student asks when it will be almost completely cleared after the final dose. What is the best answer?",
        options: [
          "After about 6 hours",
          "After about 12 hours",
          "After about 30 hours — roughly five half-lives",
          "It is never cleared and always needs dialysis",
        ],
        correctIndex: 2,
        explanation:
          "After each half-life the amount halves, so five half-lives (6 x 5 = 30 hours) leaves only about 3 percent of the drug behind. 'Almost cleared' means roughly five half-lives.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacology Terminology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is an intravenous dose of a drug stronger, milligram for milligram, than the same drug swallowed as a tablet?",
        options: [
          "Injected drugs bind to more receptors than oral drugs",
          "The full IV dose reaches the bloodstream, while an oral dose loses part to gut absorption and first-pass liver breakdown",
          "Tablets are always manufactured at lower purity than injections",
          "Oral drugs are destroyed completely by saliva before swallowing",
        ],
        correctIndex: 1,
        explanation:
          "Bioavailability is the fraction of the dose reaching the circulation. Intravenous administration is 100 percent bioavailable; the oral route loses drug across the gut wall and to the liver's first-pass metabolism.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacology Terminology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A doctor prescribes a single large loading dose followed by smaller regular maintenance doses of an antibiotic. What is the purpose of the loading dose?",
        options: [
          "To reach effective blood levels quickly, after which maintenance doses hold the level steady",
          "To test whether the patient is allergic to the drug",
          "To reduce the risk of side effects from the drug",
          "To shorten the drug's half-life so it clears faster",
        ],
        correctIndex: 0,
        explanation:
          "Without a loading dose, a drug only creeps towards steady state over about five half-lives. The loading dose fills the body's tank at once; maintenance doses then replace only what is being cleared.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Pharmacology Terminology",
        front: "What is a drug's half-life, and what happens after about five half-lives of regular dosing?",
        back: "Half-life is the time to remove half the circulating drug. After about five half-lives of regular dosing the drug reaches steady state; after the last dose, five half-lives means it is almost completely cleared.",
      },
      {
        topic: "Pharmacology Terminology",
        front: "Define bioavailability. Which route scores 100 percent?",
        back: "The fraction of a dose that reaches the bloodstream. Intravenous administration is 100 percent bioavailable; oral doses lose part to gut absorption and first-pass liver metabolism.",
      },
      {
        topic: "Pharmacology Terminology",
        front: "What do peak and trough levels tell you for a narrow-window drug like gentamicin?",
        back: "Peak (shortly after a dose) shows the dose is high enough to work; trough (just before the next dose) shows the drug is being cleared and not accumulating towards toxicity.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
        note: "Educational source — verify current edition alongside your course texts.",
      },
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2017 (10th edition)",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "How Drugs Work",
    lessonTitle: "Pharmacokinetics: The Journey of a Drug",
    description:
      "Absorption, distribution, metabolism, excretion — the four-part journey every drug takes through the body, and the reason the same dose behaves differently in different women.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the four stages of pharmacokinetics in order.",
      "Explain the first-pass effect and how the route of administration changes absorption.",
      "Apply pregnancy-related changes in blood volume and kidney function to drug behaviour.",
    ],
    tags: ["pharmacokinetics", "adme", "absorption", "excretion", "pregnancy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every drug you give takes a journey: in through one door, around the body, changed by the liver, out through the kidneys. Pharmacokinetics is simply the map of that journey — what the body does to the drug between the syringe and the drain.\n\nMaster the map and you can answer the questions the ward asks daily. Why does this drug need an infusion? Why is the dose smaller in kidney disease? Why does pregnancy change how long a medicine lingers?",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Absorption** is the journey in. An oral tablet must survive the stomach, cross the gut wall, and take a detour through the liver via the portal vein before reaching the general circulation — the liver's **first-pass metabolism** destroys part of it. Intramuscular injections skip the gut, seeping from muscle into the blood at a steady rate. Intravenous drugs skip everything: the whole dose arrives at once.\n\n**Distribution** is travel. Drugs ride the bloodstream, some latched onto blood proteins, with only the free portion able to act. In pregnancy, plasma volume rises by about 40 percent, which can dilute some drugs, and the placenta opens a door to the baby. **Metabolism** is the liver's chemistry, converting fat-soluble drugs into water-soluble forms the body can discard. **Excretion** is the exit, mostly through the kidneys. In pregnancy kidney blood flow rises sharply, so renally-cleared drugs leave faster. Oxytocin is special: enzymes in the blood itself dismantle it within minutes.",
      },
      {
        type: "clinical_pearl",
        body: "Oxytocin's half-life is three to five minutes. That single fact explains why it runs as an infusion, why the uterus can soften when the drip falters, and why its dose is counted in milliunits per minute rather than milligrams twice a day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman who delivered an hour ago is on an oxytocin infusion. During a busy handover the giving set becomes kinked and the infusion effectively stops; within ten minutes her uterus feels soft and the blood loss creeps up. The nurse unkinks the line, massages the uterus firmly and summons help while you monitor the woman and count pads.\n\nWhy can uterine tone fade so quickly when an oxytocin infusion stops?\n\nAnswer: Oxytocin is broken down by enzymes in the blood within minutes, so its effect depends on continuous delivery. When the flow stops, blood levels collapse, the uterus loses its stimulation and atony returns. A kinked oxytocin line in the postpartum hour is not a nuisance — it is a bleeding risk to fix immediately.",
      },
      {
        type: "memory_trick",
        body: "A Drink Meets its End — Absorption, Distribution, Metabolism, Excretion. Four stations, one ticket: every drug rides the same line, only the speed changes.",
      },
      {
        type: "summary",
        body: "- Absorption is the way in: oral faces the gut and liver first-pass; intramuscular is steady; intravenous is instant.\n- Distribution: drugs travel in blood, partly protein-bound; pregnancy dilutes plasma volume and opens the placental door.\n- Metabolism: the liver converts drugs into forms the body can excrete.\n- Excretion: mainly the kidneys — and kidney clearance speeds up in pregnancy.\n- Oxytocin is cleared from blood within minutes, which is why it must run as a continuous infusion.",
      },
    ],
    questions: [
      {
        topic: "Pharmacokinetics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the first-pass effect mean for a drug swallowed as a tablet?",
        options: [
          "Part of the dose is broken down by the liver before it ever reaches the general circulation",
          "The drug passes out of the body unchanged in the stool",
          "The drug acts for twice as long as an injected dose",
          "Stomach acid activates the drug into a stronger form",
        ],
        correctIndex: 0,
        explanation:
          "Oral drugs absorbed from the gut travel via the portal vein straight to the liver, which metabolises a portion before the rest reaches the systemic blood. This is the first-pass effect, and it lowers oral bioavailability.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacokinetics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman takes a drug that is cleared almost entirely by the kidneys. What should you expect compared with her non-pregnant self?",
        options: [
          "Kidney blood flow rises in pregnancy, so the drug is cleared faster and levels may run lower",
          "The drug will accumulate to toxic levels because kidney function falls in pregnancy",
          "Pregnancy does not change renal drug excretion at all",
          "The drug switches to being excreted only through the bile",
        ],
        correctIndex: 0,
        explanation:
          "Glomerular filtration and renal blood flow rise by roughly half in pregnancy, so renally-cleared drugs leave the body faster. This is one reason prescribers sometimes adjust doses or intervals for pregnant women.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacokinetics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Oxytocin is given as a continuous infusion rather than as spaced bolus doses because…",
        options: [
          "It cannot cross the gut wall and must be diluted to work",
          "The placenta slowly destroys the drug during pregnancy",
          "Repeated injections would permanently damage the liver",
          "Its half-life is only a few minutes, so its effect fades unless delivery is continuous",
        ],
        correctIndex: 3,
        explanation:
          "Peptidase enzymes in the blood break oxytocin down within minutes. A continuous infusion maintains steady levels; a single bolus is washed out almost as fast as it arrives.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Pharmacokinetics",
        front: "Name the four stages of pharmacokinetics in order.",
        back: "Absorption, Distribution, Metabolism, Excretion — what the body does to the drug from entry to exit. 'A Drink Meets its End'.",
      },
      {
        topic: "Pharmacokinetics",
        front: "What is first-pass metabolism, and which routes avoid it?",
        back: "The liver metabolises part of an oral dose arriving via the portal vein before it reaches the general circulation. Intramuscular, sublingual and intravenous routes avoid it.",
      },
      {
        topic: "Pharmacokinetics",
        front: "Why must oxytocin run as an infusion?",
        back: "Enzymes in the blood dismantle oxytocin within minutes, so its effect depends on continuous delivery. Stop the flow and uterine stimulation fades within minutes.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "How Drugs Work",
    lessonTitle: "Pharmacodynamics: What the Drug Does to You",
    description:
      "Receptors, agonists, antagonists and the therapeutic window — the science of what a drug actually does once it arrives, and why some drugs forgive small errors and others never do.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain how drugs act through receptors, distinguishing agonists from antagonists.",
      "Describe the dose-response relationship and what receptor saturation means.",
      "Apply the concept of a narrow therapeutic window to magnesium sulfate monitoring.",
    ],
    tags: ["pharmacodynamics", "receptors", "agonist", "antagonist", "therapeutic window"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pharmacokinetics told you what the body does to the drug. Pharmacodynamics asks the other half of the question: what does the drug do to the body? This is where receptors, dose-response relationships and the phrase every nurse should respect — 'narrow therapeutic window' — make their home.\n\nThese ideas turn routine actions into understanding. When you check knee reflexes before a magnesium sulfate dose, you are not performing a ritual. You are reading a drug's effect on the body in real time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Most drugs work by binding **receptors** — docking stations built for the body's own chemical messengers. An **agonist** binds and switches the receptor on: oxytocin locks onto uterine receptors and the muscle contracts; salbutamol switches on beta-2 receptors, which relax the uterus, making it useful when preterm labour threatens. An **antagonist** occupies the docking station but does nothing except block it, keeping the natural messenger out.\n\nIncrease the dose and the effect grows — until the receptors are **saturated**. Beyond that, extra drug adds harm, not benefit. Safety depends on the **therapeutic window**: the distance between the smallest effective level and the smallest toxic level. Magnesium sulfate has a famously narrow window — the level that prevents seizures sits uncomfortably close to the level that depresses breathing. It also shows that not every drug uses a receptor: magnesium competes with calcium at nerve endings, quieting an overexcited nervous system.",
      },
      {
        type: "clinical_pearl",
        body: "With narrow-window drugs, monitoring is part of the prescription. Before each maintenance dose of magnesium sulfate: reflexes present, respiratory rate at least 16 per minute, urine flowing. The body's own signs decide whether the next dose is safe.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman with severe pre-eclampsia is receiving four-hourly maintenance doses of magnesium sulfate. On your round she is drowsy, her respiratory rate has drifted down and you cannot elicit her knee reflexes. You withhold the next dose, call the doctor, and keep IV calcium gluconate in mind while watching her breathing closely.\n\nWhat drug property makes magnesium sulfate so unforgiving of small changes in blood level?\n\nAnswer: Its therapeutic window is narrow — the concentration that controls seizures is close to the one that abolishes reflexes and depresses respiration. Small rises travel quickly from 'enough' to 'too much'. That is why the drug is guarded by the checks of reflexes, respiratory rate and urine output, with calcium gluconate standing by as antidote.",
      },
      {
        type: "memory_trick",
        body: "The AGOnist is the actor that performs; the ANtagonist blocks the stage door. And a narrow therapeutic window is thin ice — lovely to cross, but you test every step.",
      },
      {
        type: "summary",
        body: "- Many drugs act by binding receptors: agonists switch them on, antagonists block them.\n- Oxytocin (uterine contraction) and salbutamol (uterine relaxation) are agonist examples from nursing.\n- Dose-response rises only until receptors saturate; more drug beyond that adds risk, not effect.\n- The therapeutic window is the gap between the least effective and the least toxic levels.\n- Magnesium sulfate has a narrow window: check reflexes, respiration and urine before every maintenance dose.",
      },
    ],
    questions: [
      {
        topic: "Pharmacodynamics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Salbutamol relaxes the uterus in threatened preterm labour. At beta-2 receptors, salbutamol is acting as what?",
        options: [
          "An antagonist that blocks oxytocin",
          "An agonist that switches the receptors on",
          "An enzyme that digests oxytocin",
          "A calcium substitute for nerve endings",
        ],
        correctIndex: 1,
        explanation:
          "Salbutamol mimics the body's own messenger at beta-2 receptors and activates them — the definition of an agonist. The resulting uterine muscle relaxation is why it is used as a tocolytic.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacodynamics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Doubling the dose of a receptor-binding drug does not double its effect indefinitely. Why?",
        options: [
          "The liver instantly destroys the extra half of the dose",
          "Protein binding always falls by half with each dose increase",
          "Receptors saturate — once they are all occupied, extra drug cannot add further effect",
          "The kidneys double their filtration rate in response",
        ],
        correctIndex: 2,
        explanation:
          "The dose-response curve flattens as receptors fill. Once every receptor is occupied, additional drug has nowhere to act and only adds the risk of dose-related toxicity.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Pharmacodynamics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving a maintenance dose of magnesium sulfate to a woman with pre-eclampsia, which findings must you check?",
        options: [
          "Temperature, pulse and blood pressure only",
          "Fetal heart, fundal height and fetal lie",
          "Bleeding, pain score and cervical dilation",
          "Respiratory rate, knee reflexes and urine output",
        ],
        correctIndex: 3,
        explanation:
          "Magnesium sulfate toxicity shows itself first as lost reflexes, then slow breathing, with poor urine output allowing accumulation. Respiratory rate, reflexes and urine output are the pre-dose safety gates; calcium gluconate is the antidote.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Pharmacodynamics",
        front: "Agonist versus antagonist — one line each.",
        back: "Agonist binds the receptor and activates it (oxytocin on the uterus). Antagonist binds the same receptor and blocks it without activating, keeping the natural messenger out.",
      },
      {
        topic: "Pharmacodynamics",
        front: "What is the therapeutic window?",
        back: "The gap between the smallest effective drug level and the smallest toxic level. Narrow-window drugs, like magnesium sulfate, need close monitoring because effective and toxic levels sit close together.",
      },
      {
        topic: "Pharmacodynamics",
        front: "What must you check before every maintenance dose of magnesium sulfate?",
        back: "Respiratory rate (at least 16 per minute), knee reflexes present, and adequate urine output — with IV calcium gluconate available as the antidote.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "Giving Drugs Safely",
    lessonTitle: "Routes of Administration: Choosing the Path",
    description:
      "Tablet, injection, drip, pessary — the route decides how fast a drug works and how much survives the journey. Choosing it well is a quiet daily skill.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Compare the speed and bioavailability of the oral, intramuscular and intravenous routes.",
      "Explain why emergencies favour the intravenous route, and its main danger.",
      "Apply route knowledge to postpartum haemorrhage drugs when IV access fails.",
    ],
    tags: ["routes", "administration", "sublingual", "intramuscular", "intravenous", "misoprostol"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The same drug can be a slow tablet, a monthly injection or a push through a cannula — and the choice changes everything about its speed, its strength and its risks. Route selection is one of the everyday decisions hiding inside every prescription you will ever carry out.\n\nIn this lesson you will meet the common routes, learn the speed ladder they sit on, and see why some of your most important nursing drugs — oxytocin, magnesium sulfate, misoprostol — travel by more than one path.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Oral** is convenient and comfortable but slow, and the liver's first-pass metabolism swallows part of the dose. **Sublingual** tablets dissolve under the tongue, where rich blood vessels absorb them straight into the circulation — no first-pass at all. **Intramuscular** injections sink into muscle and are absorbed steadily into the blood: think of magnesium sulfate maintenance doses or the 10 units of oxytocin given into the thigh straight after birth. **Intravenous** is the emergency route: the entire dose arrives in the blood at once, which is both its power and its danger — there is no taking it back.\n\nOther routes serve special moments. **Rectal** misoprostol can treat postpartum haemorrhage when there is no working cannula; **vaginal** prostaglandin ripens the cervix for induction; **inhaled** salbutamol opens airways within minutes. Each route carries practicalities: rotate sites for repeated intramuscular injections, use sterile technique for anything intravenous, and counsel a woman that a sublingual tablet must dissolve, not be swallowed.",
      },
      {
        type: "clinical_pearl",
        body: "When postpartum haemorrhage strikes and the cannula has failed, your routes are still open: oxytocin into the muscle, misoprostol under the tongue. Route choice can buy the minutes that save a life.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a CHPS compound a woman delivers and begins to bleed heavily. The only cannula has failed, so the nurse gives oxytocin 10 units into the thigh muscle, places misoprostol under the woman's tongue, rubs up a contraction, calls for the ambulance and keeps counting pads. The uterus firms up as help is arranged.\n\nWhy do these non-intravenous routes still work quickly enough in an emergency?\n\nAnswer: The muscle of the thigh and the rich blood supply under the tongue absorb drugs rapidly, and both routes skip the gut and the liver's first-pass toll. They cannot match the instant arrival of intravenous drugs, but they deliver meaningful blood levels within minutes — enough to contract the uterus while transport and further help are on the way.",
      },
      {
        type: "memory_trick",
        body: "The speed ladder: IV jumps, sublingual sprints, IM jogs, oral strolls. And remember the toll gate — any route that skips the gut also skips the liver's fee.",
      },
      {
        type: "summary",
        body: "- Oral is convenient but slow, with reduced bioavailability from gut absorption and first-pass metabolism.\n- Sublingual absorbs quickly through rich mouth blood vessels and bypasses the first-pass toll.\n- Intramuscular gives steady absorption; intravenous gives instant, complete delivery — with no way back.\n- Special routes serve special moments: rectal or sublingual misoprostol for PPH, vaginal prostaglandin for induction, inhaled salbutamol for airways.\n- When IV access fails during haemorrhage, IM oxytocin and sublingual misoprostol keep working for you.",
      },
    ],
    questions: [
      {
        topic: "Routes of Administration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about the intravenous route is correct?",
        options: [
          "It is the fastest route and delivers 100 percent of the dose, but an error cannot be recalled once given",
          "It is slower than the intramuscular route because the drug must cross a vein wall",
          "It has the lowest bioavailability of any route",
          "It avoids the need for sterile technique",
        ],
        correctIndex: 0,
        explanation:
          "Intravenous drugs enter the circulation instantly and completely, which makes them first choice in emergencies — and makes errors irreversible. Everything else must first be absorbed.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Routes of Administration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a sublingual tablet absorbed faster than the same drug swallowed?",
        options: [
          "Stomach acid strengthens swallowed drugs but delays them",
          "It must be chewed first, which releases the drug",
          "The tablet dissolves under the tongue, where blood vessels absorb it directly into the circulation, bypassing gut and first-pass metabolism",
          "Sublingual tablets always contain a higher dose",
        ],
        correctIndex: 2,
        explanation:
          "The floor of the mouth is richly vascular, so a drug held under the tongue enters the bloodstream directly — no gut absorption barrier and no first-pass visit to the liver.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Routes of Administration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the loading dose of magnesium sulfate given intravenously while maintenance doses are given intramuscularly?",
        options: [
          "Because the intramuscular route cannot carry magnesium at all",
          "To save the woman from repeated intramuscular pain in the first hour only",
          "Because intramuscular magnesium is stronger than the intravenous form",
          "The loading dose must act immediately, so it goes IV; maintenance needs steady levels over hours, which IM sustains more simply",
        ],
        correctIndex: 3,
        explanation:
          "In eclampsia, the first priority is stopping seizures at once, so the loading dose is intravenous. The maintenance schedule simply needs to keep levels steady over many hours, which deep intramuscular injections achieve safely and practically.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Routes of Administration",
        front: "Rank these routes by speed of onset: oral, intramuscular, sublingual, intravenous.",
        back: "Fastest to slowest: intravenous (instant, complete), sublingual (rapid, bypasses first-pass), intramuscular (steady), oral (slowest, reduced by gut and liver first-pass).",
      },
      {
        topic: "Routes of Administration",
        front: "During PPH with no working cannula, which two routes can still deliver uterotonics quickly?",
        back: "Oxytocin 10 units intramuscularly and misoprostol under the tongue (sublingual) — both absorb within minutes without IV access.",
      },
      {
        topic: "Routes of Administration",
        front: "What is the main danger of the intravenous route?",
        back: "The whole dose reaches the circulation at once — effective in emergencies, but an overdose or wrong drug cannot be recalled once injected.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2012",
      },
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "Giving Drugs Safely",
    lessonTitle: "Medication Safety: The Rights and Beyond",
    description:
      "The rights of administration are the seatbelt of drug-giving — quick, habitual, and the quiet difference between a safe shift and a tragedy.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "List the core rights of medication administration, including documentation and response.",
      "Explain why high-alert drugs need independent double-checks.",
      "Apply safe identification habits that prevent wrong-patient errors.",
    ],
    tags: ["medication safety", "rights", "high-alert drugs", "allergies", "double-check"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most medication errors are not caused by careless people — they are caused by busy systems and skipped habits. The rights of administration exist because human memory and speed fail exactly when the ward is loudest.\n\nIn this lesson you will build the checklist that travels with every dose you give, meet the high-alert drugs that deserve extra ceremony, and practise the identification habits that keep the right drug inside the right woman.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Before any drug leaves your hand, a short checklist walks beside it: the **right patient**, the **right drug**, the **right dose**, the **right route**, the **right time** — and afterwards the **right documentation** and the **right response** (did it work, did she react?). Read the label against the prescription three times: when you take the drug, when you prepare it, and when you give it. Ask about **allergies** in the woman's own words before any first dose.\n\nSome medicines earn extra respect. **High-alert** drugs — oxytocin, magnesium sulfate, insulin, heparin, opioids — are used every day, yet they cause the most harm when errors happen. For these, use an independent double-check: a second nurse verifies the drug, dose and calculation without being told your answer first. Never pre-draw syringes for later; never give from memory of a chart you saw earlier. WHO's Medication Without Harm campaign reminds us that a large share of medication harm is preventable — most of it by habits exactly like these.",
      },
      {
        type: "clinical_pearl",
        body: "Never ask 'Are you Madam Mensah?' — a drowsy, anxious or hurried woman will agree to almost any name. Ask openly: 'Please tell me your name,' then match her answer to the folder and the wristband.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student, keen to be efficient, pre-draws two unlabeled syringes at the treatment trolley because 'the ward will be busy after lunch'. Two postnatal women with similar surnames are due the same antibiotic. The error is caught at the bedside — but only because the student's preceptor happened to ask which syringe was for which woman, and the honest answer was 'I am no longer sure'.\n\nWhat went wrong here, and which habits would have prevented it?\n\nAnswer: Several layers failed together: doses were prepared far from the patient, left unlabeled, and identification was left until last. Safer habits: prepare one woman's medicine at a time, label every syringe the moment it is drawn, check at the bedside with an open identity question, and treat any 'I am no longer sure' as a reason to discard and start again — never to guess. Reporting the near-miss lets the ward fix the system too.",
      },
      {
        type: "memory_trick",
        body: "Let the rights drum like a beat: PATIENT — DRUG — DOSE — ROUTE — TIME… then WRITE it down and WATCH her. Six beats and two shadows; the dose is not done until all eight are done.",
      },
      {
        type: "summary",
        body: "- The core rights: right patient, drug, dose, route and time — plus documentation and response afterwards.\n- Read the label against the prescription three times: taking, preparing, giving.\n- High-alert drugs (oxytocin, magnesium sulfate, insulin, heparin, opioids) deserve an independent double-check.\n- Ask about allergies before the first dose of anything, in the woman's own words.\n- Identify every woman with open questions plus folder and wristband — never a yes/no guess.",
      },
    ],
    questions: [
      {
        topic: "Medication Safety",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are about to give a drug to a woman on a busy postnatal ward. What is the safest identification question?",
        options: [
          "Are you Madam Adjoa, room 4?",
          "Can you confirm you are the woman with the fever?",
          "Which drug did you come here for?",
          "Please tell me your full name — then match it to her folder and wristband",
        ],
        correctIndex: 3,
        explanation:
          "Open questions force the woman to state her name from her own memory, and you then verify it against two independent sources. Leading yes/no questions invite agreement errors from drowsy or anxious patients.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Medication Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes an 'independent double-check' of a high-alert drug actually independent?",
        options: [
          "The second nurse checks the drug, dose and calculation without being told what the first nurse concluded",
          "The second nurse watches the first nurse prepare the drug from start to finish",
          "The second nurse simply signs the chart afterwards to share responsibility",
          "The two nurses discuss the dose together before either one checks",
        ],
        correctIndex: 0,
        explanation:
          "Independence means the second checker reaches their own conclusion from the prescription and the drug first. If they are told the answer, their mind tends to agree with it — the check loses its power exactly when it matters.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Medication Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do oxytocin, magnesium sulfate, insulin and heparin appear on high-alert lists?",
        options: [
          "They are the most expensive drugs in the pharmacy",
          "They are rarely used, so staff are unfamiliar with them",
          "Errors with them are more likely to cause serious harm, even though they are used daily",
          "They cannot be measured accurately in ward settings",
        ],
        correctIndex: 2,
        explanation:
          "High-alert does not mean high-risk to give correctly — it means high harm when an error occurs. These drugs act on powerful systems (labour, nerves, glucose, clotting), so slips have severe consequences and demand double-checks and monitoring.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Medication Safety",
        front: "Name the six core rights that travel with every dose.",
        back: "Right patient, right drug, right dose, right route, right time — then right documentation and right response (did it work, did she react?).",
      },
      {
        topic: "Medication Safety",
        front: "What is an independent double-check and which drugs need it?",
        back: "A second nurse verifies drug, dose and calculation from the chart itself without being told your conclusion. Needed for high-alert drugs: oxytocin, magnesium sulfate, insulin, heparin, opioids.",
      },
      {
        topic: "Medication Safety",
        front: "How should you ask about allergies before a first dose?",
        back: "Ask openly in the woman's own words — 'Have you ever reacted badly to any medicine, injection or food?' — and record the reaction, not just the word 'allergy'.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "Nursing and Midwifery Council, Ghana",
        title: "Code of Professional Conduct",
        note: "Verify the current edition on the NMC Ghana portal.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2017 (10th edition)",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "Giving Drugs Safely",
    lessonTitle: "Medication Calculations: Practice Until Perfect",
    description:
      "Doses per kilogram, volumes from stock, drip rates — the small sums that patients' lives quietly depend on. Slow, written, and always checked.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Convert confidently between grams, milligrams and micrograms.",
      "Calculate weight-based doses and the volume to draw from a known stock concentration.",
      "Calculate an infusion drip rate from volume, time and drop factor.",
    ],
    tags: ["calculations", "drug doses", "drip rate", "conversions", "drug math"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A decimal point slips, a unit is assumed, a sum is done in a tired head — and a drug error is born. Medication arithmetic is not hard mathematics; it is careful arithmetic, done slowly in a place that rewards speed.\n\nIn this lesson you will drill the three calculations a nurse actually meets: unit conversions, weight-based doses drawn from stock, and drip rates for infusions. Every one of them is a place where writing your working saves a life.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Units first: 1 g = 1000 mg, and 1 mg = 1000 micrograms. A **percentage** on an ampoule is a promise in disguise: 1 percent means 1 g in 100 mL, which is 10 mg in every mL. So 50 percent magnesium sulfate holds 0.5 g per mL, and a 5 g dose measures 10 mL. For **weight-based** doses, multiply the mg per kg by the woman's weight, then divide by the concentration in mg per mL to find the volume.\n\nInfusions run by drops. The **drop factor** printed on the giving set tells you how big its drops are — common sets deliver 20 drops per mL. The sum: drops per minute = (volume in mL x drop factor) divided by minutes. For 500 mL over 4 hours with a 20-drops-per-mL set: (500 x 20) / 240, which is about 42 drops per minute. Write your working, keep units beside every number, and have a colleague check any calculation that matters — hidden arithmetic errors become medication errors the moment a patient is attached.",
      },
      {
        type: "clinical_pearl",
        body: "Never carry a ward calculation in your head. Head-math is where trailing zeros vanish and decimal points migrate. Paper, units, and a second pair of eyes keep them honest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are asked to give gentamicin 5 mg/kg to a woman weighing 60 kg. The stock vial contains 40 mg per mL. The prescription sheet has space for your calculation, and the senior nurse asks you to show it before you draw up.\n\nWhat dose does she need, and what volume do you draw?\n\nAnswer: 5 mg x 60 kg = 300 mg. Then 300 mg divided by 40 mg per mL = 7.5 mL. You write both steps with units, have the sum checked, draw exactly 7.5 mL, and chart the dose, route, time and site. The mathematics took two minutes; the habit behind it will protect every dose of your career.",
      },
      {
        type: "memory_trick",
        body: "Drops per minute = Volume x Drop factor, all over Time — 'VDT: Very Diligent Thinking'. And percentages always whisper the same secret: 1 percent = 10 mg in every mL.",
      },
      {
        type: "summary",
        body: "- Conversions: 1 g = 1000 mg = 1,000,000 micrograms; write units beside every number.\n- A percentage w/v is a concentration: 1 percent = 1 g per 100 mL = 10 mg per mL; so 50 percent magnesium sulfate = 0.5 g per mL.\n- Weight-based dose: mg per kg x weight, then divide by stock concentration to get the volume in mL.\n- Drip rate: (volume x drop factor) / minutes; know your giving set's drop factor.\n- Every calculation that matters gets written down and checked by a second person.",
      },
    ],
    questions: [
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A prescription asks for 0.5 g of paracetamol. Your tablets are labelled 500 mg each. How many tablets?",
        options: [
          "One tablet",
          "Half a tablet",
          "Two tablets",
          "Five tablets",
        ],
        correctIndex: 0,
        explanation:
          "0.5 g equals 500 mg, which is exactly one 500 mg tablet. Converting grams to milligrams first (0.5 g = 500 mg) makes the match obvious and prevents the classic 10-fold error.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Gentamicin 5 mg/kg is prescribed for a 60 kg woman. The stock vial contains 40 mg/mL. What volume do you draw?",
        options: [
          "4.5 mL",
          "6.0 mL",
          "7.5 mL",
          "12.0 mL",
        ],
        correctIndex: 2,
        explanation:
          "Dose = 5 x 60 = 300 mg. Volume = 300 / 40 = 7.5 mL. Distractors come from dividing by 50 or multiplying wrongly — always show both steps with units.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You must run 500 mL of intravenous fluid over 4 hours using a giving set with a drop factor of 20 drops/mL. What is the drip rate?",
        options: [
          "About 21 drops per minute",
          "About 42 drops per minute",
          "About 63 drops per minute",
          "About 84 drops per minute",
        ],
        correctIndex: 1,
        explanation:
          "Drops per minute = (500 x 20) / 240 minutes = 10,000 / 240, which is about 42 drops per minute. Time must first be converted to minutes — the commonest slip in drip-rate sums.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Medication Calculations",
        front: "How do you turn a weight-based prescription into a volume to draw?",
        back: "Multiply mg per kg by the woman's weight to get the dose in mg; then divide by the stock concentration (mg per mL) to get the volume. Write units at every step.",
      },
      {
        topic: "Medication Calculations",
        front: "What does 1 percent on an ampoule mean in mg per mL — and what is 50 percent magnesium sulfate?",
        back: "1 percent = 1 g in 100 mL = 10 mg per mL. So 50 percent magnesium sulfate = 0.5 g per mL, and a 5 g dose equals 10 mL.",
      },
      {
        topic: "Medication Calculations",
        front: "State the drip-rate formula.",
        back: "Drops per minute = (volume in mL x drop factor in drops per mL) / time in minutes. Convert hours to minutes before dividing.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2017 (10th edition)",
      },
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "Giving Drugs Safely",
    lessonTitle: "Safe Documentation of Medications",
    description:
      "The dose is not finished when it is swallowed — it is finished when it is written down. What to chart, when to chart it, and why honesty protects everyone.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe what a complete medication entry must contain, including site for injections.",
      "Explain why doses are charted immediately after administration and never before.",
      "Apply correct documentation of refusals and omissions, and the rules for controlled drugs.",
    ],
    tags: ["documentation", "medications", "refusal", "controlled drugs", "charting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Long after you have forgotten the shift, the chart remembers it. Every dose you give becomes a written fact that the next nurse, the pharmacist, the auditor and — if things go wrong — the court will rely on. 'If it was not documented, it was not done' is not a threat; it is the honest truth of shared care.\n\nThis lesson covers the small, exact habits that make your drug documentation trustworthy: what to write, when to write it, and how to record the awkward moments — doses refused, doses omitted, drugs out of stock.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Chart **immediately after giving** a dose — never before, and never from memory an hour later. A complete entry carries the **drug, dose, route, time and your signature**, plus the **site** for injections, so a leg due a second dose is not stuck twice in the same spot. If a dose is not given, the chart must say why — 'refused', 'nil by mouth', 'out of stock' — and the prescriber must be told, because an omitted antibiotic is a clinical decision, not a blank space.\n\nRefusals deserve special care: record that the woman declined, the reason she gave, what you counselled, and who was informed. Controlled drugs such as pethidine follow stricter rules — a dedicated register, checks with a second signatory, and counts that balance at shift's end. One habit rules them all: write the **actual time** the drug was given, sign, and never backdate to make a chart look tidy. A late, honest entry beats an early, false one every single time.",
      },
      {
        type: "clinical_pearl",
        body: "A refusal documented in full — declined, her reason, your counselling, who was told — reads very differently at 3 a.m. when she spikes a fever than a blank space that no one can explain.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You give a stat dose of paracetamol at 14:20. At 14:25 an emergency on the opposite bed pulls you away, and only at 16:00 do you sit down with the chart, pen in hand, tempted to write the entry as if it were just made.\n\nWhat should you have done, and what do you write now?\n\nAnswer: The ideal was charting immediately at 14:20 — documentation is part of the dose, not an optional extra after the emergencies. Now, honesty is the only safe option: record the true time the drug was given (14:20), and if your facility requires it, note that the entry was made late and why. Never record the time of writing as the time of giving. The next team must be able to trust every word on that sheet.",
      },
      {
        type: "memory_trick",
        body: "Chart like a camera: DRUG, DOSE, ROUTE, TIME, SITE, SIGNATURE — six shots taken at the scene, never later from memory. And refusals get the full story, not a silence.",
      },
      {
        type: "summary",
        body: "- Chart immediately after administration — never in advance, never from memory.\n- Every entry: drug, dose, route, time, signature — and injection site for all syringes.\n- Omitted doses are charted with the reason, and the prescriber is informed.\n- Refusals are documented in full: declined, her reason, your counselling, who was told.\n- Controlled drugs follow the register: second signatures, witnessed checks, balanced counts.\n- Record the true time given; a late honest entry beats an early false one.",
      },
    ],
    questions: [
      {
        topic: "Safe Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When should a medication entry be written?",
        options: [
          "When the prescription is received, so the chart is ready",
          "At the end of the shift, grouped together for tidiness",
          "Only if the patient asks for a record",
          "Immediately after the dose is given — documentation is part of the administration",
        ],
        correctIndex: 3,
        explanation:
          "Charting before giving risks a record of a dose that was never given; charting hours later risks memory errors. The record must reflect what actually happened, at the moment it happened.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Safe Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman refuses her evening antibiotic, saying it gives her heartburn. What does complete documentation look like?",
        options: [
          "Leave the space blank — the doctor will understand",
          "Write 'refused' and nothing more",
          "Record that she declined, her reason, the counselling you gave, and who was informed",
          "Chart the dose as given, since she will probably take it later",
        ],
        correctIndex: 2,
        explanation:
          "The refusal, the reason, the counselling and the escalation together form the clinical picture the next team needs. A blank space or a bare 'refused' hides the very information that protects the woman — and charting a dose as given when it was not is falsification.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Safe Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do controlled drugs like pethidine require a dedicated register with a second signatory?",
        options: [
          "Because they are the most expensive medicines in the pharmacy",
          "Because doctors are not allowed to prescribe them otherwise",
          "Because their half-lives need special recording",
          "Because they are prone to misuse and diversion, so every dose must be accounted for and witnessed",
        ],
        correctIndex: 3,
        explanation:
          "Controlled drugs carry addiction and diversion risk, so facilities track them tightly: a register recording every dose given and discarded, signatures from two people, and stock counts that must balance at every handover.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Safe Documentation",
        front: "List the six elements of a complete medication entry (including injections).",
        back: "Drug, dose, route, time, site (for injections), signature — written immediately after the dose is given.",
      },
      {
        topic: "Safe Documentation",
        front: "What must accompany an omitted or refused dose on the chart?",
        back: "The reason (refused, nil by mouth, out of stock), your counselling for refusals, who was informed — and notification of the prescriber, because an omitted dose is a clinical decision.",
      },
      {
        topic: "Safe Documentation",
        front: "Why must you never chart a dose before giving it?",
        back: "Because emergencies and refusals happen: a pre-charted dose may never be given, yet the record says it was — poisoning trust in the whole chart and risking double-dosing by the next shift.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council, Ghana",
        title: "Code of Professional Conduct",
        note: "Verify the current edition on the NMC Ghana portal.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        year: "2017 (10th edition)",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "When Drugs Go Wrong",
    lessonTitle: "Adverse Effects: Reading the Warning Signs",
    description:
      "Most drugs cause more than one effect. Learning to tell an expected side effect from a dangerous reaction — quickly — is a core ward skill.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish side effects, adverse drug reactions and toxicity.",
      "Classify Type A and Type B reactions with ward examples.",
      "Recognise the early signs of anaphylaxis and the first actions to take.",
    ],
    tags: ["adverse effects", "toxicity", "anaphylaxis", "type a", "type b", "monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "No drug does exactly one thing. Every medicine you give carries a shadow of other effects, and most of the time the shadow is small. Your job is to tell the harmless from the dangerous early — sometimes within minutes.\n\nIn this lesson you will learn the vocabulary of drug harm, meet the two great families of reactions, and practise the pattern recognition that turns 'she says she feels strange' into the right action.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **side effect** is an unwanted but predictable effect at normal doses — nausea with some antibiotics, dark stools with iron. An **adverse drug reaction** is harm significant enough to matter even at correct doses, and **toxicity** is harm from too much drug, by overdose or accumulation. **Type A reactions** are dose-related and predictable: they follow the drug's known pharmacology, like respiratory depression when magnesium sulfate climbs too high, and they are largely preventable by dose, renal function and monitoring. **Type B reactions** are unpredictable hypersensitivity — rashes, and at the extreme, anaphylaxis — and sometimes the very first dose carries the risk.\n\nYour task is pattern recognition. New rash, itching, swelling of the lips, wheeze, or a sudden fall in blood pressure after a drug means: stop giving, stay with her, call for help — anaphylaxis moves fast and intramuscular adrenaline is the first-line treatment by protocol. Milder expected effects are managed with counselling: warn the woman starting iron about dark stools and constipation before she panics or quietly stops her tablets.",
      },
      {
        type: "clinical_pearl",
        body: "Counsel before the effect arrives. A woman told 'your stool will turn black — that is the iron working' keeps taking her tablets; a woman surprised by black stools often does not.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A postnatal woman receiving intravenous antibiotics for a wound infection suddenly complains of itching, and you notice raised patches on her arms and slight swelling of her lips. She looks frightened and a little short of breath. You stop the infusion, call for help and stay with her while the team responds.\n\nWhat kind of reaction is this, and why does it demand immediate action?\n\nAnswer: This is a Type B hypersensitivity reaction, moving towards anaphylaxis. It is not dose-related or predictable — the immune system, not the dose, is the problem. Airway swelling can progress quickly, so the drug must be stopped, help summoned, and emergency care with intramuscular adrenaline per protocol begun. Afterwards, the allergy goes into her records prominently so no one re-exposes her.",
      },
      {
        type: "memory_trick",
        body: "Type A is Arithmetic — it follows the dose, so you can predict and prevent it. Type B is a Bolt from the blue — it follows the immune system, so you watch and react fast.",
      },
      {
        type: "summary",
        body: "- Side effect: unwanted but expected at normal doses; adverse reaction: harm at correct doses; toxicity: harm from excess.\n- Type A reactions are dose-related and predictable (magnesium sulfate respiratory depression) — prevented by dosing and monitoring.\n- Type B reactions are unpredictable hypersensitivity (rash, anaphylaxis) — the first dose can carry the risk.\n- Itch, rash, lip swelling, wheeze or hypotension after a drug: stop, stay, call for help.\n- Counsel expected effects in advance — iron's dark stools, constipation — so treatment is not abandoned out of fear.",
      },
    ],
    questions: [
      {
        topic: "Adverse Effects",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman taking ferrous sulfate reports that her stools have turned black. How should you classify and handle this?",
        options: [
          "A dangerous Type B reaction — stop the drug immediately",
          "An expected side effect at normal dose — reassure and counsel her to continue, with constipation advice",
          "Gastrointestinal bleeding — send an urgent stool sample",
          "An allergy — switch to another medicine permanently",
        ],
        correctIndex: 1,
        explanation:
          "Unabsorbed iron darkens the stool; this is a well-known, harmless side effect. Black tarry stool with a foul smell can signal bleeding, but on iron treatment alone, counselling to continue with fibre and fluids is the correct response.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Adverse Effects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman on magnesium sulfate becomes drowsy, her respiratory rate falls and her knee reflexes disappear. What type of reaction is this?",
        options: [
          "Type B hypersensitivity to magnesium",
          "An expected side effect requiring no action",
          "Type A toxicity — dose-related, following the drug's known pharmacology",
          "An unrelated neurological disease",
        ],
        correctIndex: 2,
        explanation:
          "This is classic Type A: the toxic effects (lost reflexes, respiratory depression) are an extension of the drug's known actions at excessive levels. The response is to withhold the drug, call for help and have calcium gluconate ready.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Adverse Effects",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Within minutes of starting an intravenous antibiotic, a woman develops widespread itch, lip swelling and a wheeze. What is the correct first action?",
        options: [
          "Slow the infusion and observe for ten minutes",
          "Give an oral antihistamine and continue, since it is only a rash",
          "Document the reaction and review at the next round",
          "Stop the drug, stay with her, call for help — anaphylaxis needs immediate intramuscular adrenaline by protocol",
        ],
        correctIndex: 3,
        explanation:
          "Airway involvement plus skin signs after a drug is anaphylaxis until proven otherwise. The infusion is stopped, emergency help called, and adrenaline given intramuscularly per local protocol; observation-by-slowing is how lives are lost.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Adverse Effects",
        front: "Type A versus Type B adverse reactions — one line each.",
        back: "Type A: dose-related and predictable from the drug's pharmacology (magnesium sulfate respiratory depression). Type B: unpredictable hypersensitivity, from rash to anaphylaxis, sometimes with the first dose.",
      },
      {
        topic: "Adverse Effects",
        front: "What early features after a drug dose signal possible anaphylaxis?",
        back: "Itch or rash with lip, tongue or throat swelling, wheeze or difficulty breathing, and a sudden fall in blood pressure — stop the drug, call for help, adrenaline intramuscularly per protocol.",
      },
      {
        topic: "Adverse Effects",
        front: "Why counsel a woman about dark stools before starting ferrous sulfate?",
        back: "Iron blackens stool harmlessly. A woman warned in advance continues her tablets; a woman surprised often stops them, and the anaemia goes untreated.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "When Drugs Go Wrong",
    lessonTitle: "Contraindications: When a Drug Must Not Be Given",
    description:
      "Some drugs heal one woman and harm another. Absolute and relative contraindications — the checks that make familiar medicines dangerous for some.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish absolute from relative contraindications.",
      "Identify key pregnancy and postpartum contraindications for ergometrine, misoprostol, NSAIDs and tetracyclines.",
      "Apply three screening questions before giving any drug to a woman of reproductive age.",
    ],
    tags: ["contraindications", "safety", "pregnancy", "ergometrine", "misoprostol", "nsaids"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The same misoprostol that saves a bleeding mother can rupture a scarred uterus. The same ergometrine that rescues a woman from haemorrhage can send a hypertensive woman into crisis. A contraindication is the moment a familiar drug becomes the wrong drug.\n\nIn this lesson you will learn the difference between absolute and relative contraindications, meet the classic pregnancy examples you will be examined on, and build the three questions that should pass through your mind before almost every drug you give a woman.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An **absolute contraindication** means do not give — the harm outweighs any possible benefit. A **relative contraindication** means give with care: the benefit may still justify use, with adjusted doses and closer monitoring. Pregnancy adds a second patient to every decision. **NSAIDs** like ibuprofen are avoided in the third trimester because they can close the fetal ductus arteriosus early and reduce amniotic fluid. **Tetracyclines** stain developing fetal teeth and affect bone, so other antibiotics are chosen. **Ergometrine** is withheld in severe hypertension and pre-eclampsia, because it can drive blood pressure higher — and it is not given while the placenta is still inside, since a tonic contraction can trap it.\n\n**Misoprostol** for induction is used with great caution, or not at all, when the uterus carries a caesarean scar, because powerful contractions against scarred muscle risk rupture. And before any drug reaches any woman of reproductive age, three questions earn their keep: could she be pregnant, is she breastfeeding, and has she ever reacted badly to a medicine?",
      },
      {
        type: "clinical_pearl",
        body: "Thirty seconds, three questions: Could she be pregnant? Is she breastfeeding? Has she ever reacted badly to a drug? Most contraindication disasters on the ward are failures of one of those three.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at term with one previous caesarean section arrives at the district hospital hoping for a vaginal birth. A student, revising pharmacology, suggests that misoprostol could ripen her cervix. The senior nurse stops the idea immediately and refers the decision to senior obstetric staff, who plan a different approach.\n\nWhy is misoprostol the wrong drug here?\n\nAnswer: A scarred uterus plus a powerful uterotonic is a dangerous pairing — strong contractions against tissue weakened by a previous incision carry a real risk of uterine rupture, which threatens both mother and baby. Induction after caesarean is a specialist decision made with safer methods and full monitoring. The student's willingness to raise it was correct; the setting for that decision belongs to senior staff.",
      },
      {
        type: "memory_trick",
        body: "Keep the danger pairings apart: miso with a scar, ergometrine with high blood pressure, NSAIDs with the last trimester, tetracycline with any pregnancy.",
      },
      {
        type: "summary",
        body: "- Absolute contraindication: never give — harm outweighs benefit. Relative: give with caution, adjustment and monitoring.\n- Ergometrine: avoid in severe hypertension and pre-eclampsia, and not before the placenta is delivered.\n- Misoprostol for induction: caution or avoidance with a previous caesarean scar — rupture risk.\n- NSAIDs are avoided in the third trimester (ductus arteriosus, amniotic fluid); tetracyclines stain fetal teeth and bone.\n- Screen every woman of reproductive age: pregnancy, breastfeeding, previous drug reactions.",
      },
    ],
    questions: [
      {
        topic: "Contraindications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with severe pre-eclampsia develops postpartum haemorrhage after delivery. Why is ergometrine the wrong uterotonic for her?",
        options: [
          "Ergometrine can raise blood pressure further, adding to her already dangerous readings",
          "Ergometrine is not effective on the postpartum uterus",
          "It crosses into breast milk and harms the baby",
          "It reverses the effect of magnesium sulfate",
        ],
        correctIndex: 0,
        explanation:
          "Ergometrine is a strong uterotonic but also a vasoconstrictor; in severe hypertension and pre-eclampsia it can push blood pressure to crisis. Oxytocin is the safer first uterotonic for her, with senior guidance.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Contraindications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is misoprostol used with great caution or avoided for induction in a woman with a previous caesarean section?",
        options: [
          "It causes fetal deafness when given near term",
          "Misoprostol has no effect on the cervix",
          "Powerful contractions against a scarred uterus carry a risk of uterine rupture",
          "It is absolutely contraindicated in all inductions everywhere",
        ],
        correctIndex: 2,
        explanation:
          "The scarred uterus is the weak point. Intense prostaglandin-driven contractions can tear the old incision — a catastrophe for mother and baby — so induction after caesarean is a specialist decision with safer options and close monitoring.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Contraindications",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the difference between an absolute and a relative contraindication?",
        options: [
          "Absolute applies to tablets only; relative applies to injections",
          "Absolute means the drug must never be given in that situation; relative means it may be given with caution and monitoring",
          "Absolute contraindications expire after one year; relative ones are lifelong",
          "There is no difference — the terms are interchangeable",
        ],
        correctIndex: 1,
        explanation:
          "An absolute contraindication means harm always outweighs benefit in that situation. A relative contraindication means the balance is delicate — use may still be justified with dose adjustment and closer observation.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Contraindications",
        front: "Name three drugs with pregnancy-related contraindications and their reasons.",
        back: "Ergometrine — severe hypertension or pre-eclampsia (raises BP); NSAIDs — third trimester (premature ductus closure, reduced amniotic fluid); tetracyclines — pregnancy (stain fetal teeth, affect bone).",
      },
      {
        topic: "Contraindications",
        front: "Why is ergometrine not given while the placenta is still inside the uterus?",
        back: "A sustained tonic contraction can trap the placenta inside the uterus, complicating the third stage — ergometrine is reserved until after delivery of the placenta.",
      },
      {
        topic: "Contraindications",
        front: "What three questions precede giving any drug to a woman of reproductive age?",
        back: "Could she be pregnant? Is she breastfeeding? Has she ever reacted badly to a medicine? — the thirty-second screen that prevents most contraindication errors.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Recommendations for Induction of Labour",
        year: "2011",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-1",
    moduleTitle: "When Drugs Go Wrong",
    lessonTitle: "Drug Interactions: The Hidden Dangers",
    description:
      "One drug can strengthen, weaken or poison another — and in Ghana the chemical seller and herbalist are part of the story. What to ask, and what to watch.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define a drug interaction and distinguish pharmacodynamic from pharmacokinetic types.",
      "Explain key ward examples, including magnesium sulfate with gentamicin and iron with tea or antacids.",
      "Apply non-judgmental questioning about herbal and self-bought medicines.",
    ],
    tags: ["interactions", "polypharmacy", "herbal medicine", "iron absorption", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "No drug arrives alone. It meets the other medicines in the woman's bag, the herbs in her tea, the antacid she bought from the chemical seller, and the drugs you are giving on the ward. Each newcomer can change what the others do — sometimes helpfully, sometimes dangerously.\n\nIn this lesson you will meet the two great families of interaction, the pairings nurses must know by heart, and the warm, non-judgmental question that uncovers what patients are really taking.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **drug interaction** means one substance changes another's effect. **Pharmacodynamic** interactions happen at the level of action: two drugs pushing the same system — like gentamicin and magnesium sulfate, which both impair neuromuscular function, deepening weakness together — or opposing each other, cancelling benefit. Some are deliberate: oxytocin and ergometrine are combined precisely because their contractile powers add. **Pharmacokinetic** interactions change the journey: liver enzyme inducers speed clearance until a drug stops working, inhibitors slow it until toxicity builds; antacids and the tannins in tea bind iron in the gut so less is absorbed.\n\nHerbal remedies deserve real respect. Many contain pharmacologically active chemicals that can duplicate or oppose prescribed drugs, and patients rarely volunteer them unless asked kindly. The habit of asking warmly — 'Some people take herbs or buy medicines from the chemical seller — do you take anything like that?' — changes the answer you get. Never mock the answer; judge the practice and you will simply never hear the next one.",
      },
      {
        type: "clinical_pearl",
        body: "Tea steals iron. Tannins bind iron in the gut, so ferrous sulfate swallowed with strong morning tea is partly wasted — counsel women to take iron with water or citrus instead, away from tea and antacids.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at the antenatal clinic has taken ferrous sulfate for six weeks, yet her haemoglobin has barely moved. Speaking gently, you learn that she drinks strong tea at every meal and takes an antacid bought from the chemical seller for heartburn — all three taken together, faithfully, on schedule.\n\nWhat is happening to her iron, and what do you counsel?\n\nAnswer: Her regimen is sabotaged at the absorption stage. Tannins in tea and the minerals in antacids bind iron in the gut, so much of each tablet never reaches her blood — a pharmacokinetic interaction. You separate the players: iron with water or orange juice, ideally between meals; antacid at a different hour; tea not with the tablet. Then recheck her haemoglobin at review. Same drug, same woman — only the timetable changes, and the treatment finally works.",
      },
      {
        type: "memory_trick",
        body: "Tea steals iron; orange unlocks it. And when two drugs travel the same road, expect one to change the other's speed — ask what else is riding along.",
      },
      {
        type: "summary",
        body: "- An interaction means one substance changes another's effect — for better or worse.\n- Pharmacodynamic interactions act at the drug's site of action: gentamicin plus magnesium sulfate deepens weakness; oxytocin plus ergometrine adds contractile power deliberately.\n- Pharmacokinetic interactions change absorption, metabolism or excretion: enzyme inducers and inhibitors, antacids and tannins.\n- Ask warmly about herbs and chemical-seller medicines — judgment hides the truth.\n- Practical counselling: iron away from tea and antacids, taken with water or citrus.",
      },
    ],
    questions: [
      {
        topic: "Drug Interactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman on magnesium sulfate for severe pre-eclampsia is also prescribed gentamicin. Why does the team watch her muscle strength and breathing extra closely?",
        options: [
          "Gentamicin destroys magnesium sulfate in the infusion bag",
          "Both drugs can impair neuromuscular function, so their effects can add up",
          "Gentamicin makes magnesium sulfate fail to prevent seizures",
          "The two drugs together always cause anaphylaxis",
        ],
        correctIndex: 1,
        explanation:
          "Aminoglycosides like gentamicin can themselves impair neuromuscular transmission. Combined with magnesium, the effect is additive — a classic pharmacodynamic interaction demanding closer monitoring of reflexes and respiration.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Drug Interactions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman takes her ferrous sulfate tablet with strong tea every morning. What should you tell her?",
        options: [
          "Tannins in tea bind iron in the gut and reduce its absorption — take the tablet with water or citrus instead",
          "Tea increases iron absorption, so the habit is excellent",
          "Tea has no effect on any medication",
          "Iron should be crushed and added to the tea to improve taste",
        ],
        correctIndex: 0,
        explanation:
          "Tannins chelate non-haem iron in the intestine, cutting absorption. Vitamin C, by contrast, converts iron to a better-absorbed form — so water or orange juice with the tablet, and tea at another time.",
        courseSlug: "pharmacology-1",
      },
      {
        topic: "Drug Interactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A drug that inhibits the liver enzymes which clear another medicine will tend to cause what?",
        options: [
          "The second drug is cleared faster, so its levels fall",
          "No change, because liver metabolism is fixed at birth",
          "The second drug builds up in the blood, risking toxicity at the same dose",
          "Immediate anaphylaxis to the second drug",
        ],
        correctIndex: 2,
        explanation:
          "Enzyme inhibition slows metabolism, so the second drug accumulates — a pharmacokinetic interaction that can turn a safe dose into a toxic one. Enzyme induction does the opposite: levels fall and treatment fails quietly.",
        courseSlug: "pharmacology-1",
      },
    ],
    flashcards: [
      {
        topic: "Drug Interactions",
        front: "Pharmacodynamic vs pharmacokinetic interaction — one line each.",
        back: "Pharmacodynamic: the drugs' effects interact at the site of action (additive, opposing). Pharmacokinetic: one changes the other's absorption, metabolism or excretion, so levels rise or fall.",
      },
      {
        topic: "Drug Interactions",
        front: "Why monitor muscle strength when gentamicin and magnesium sulfate are given together?",
        back: "Both impair neuromuscular transmission, so effects can add — watch reflexes, muscle power and breathing closely.",
      },
      {
        topic: "Drug Interactions",
        front: "How should iron tablets be timed relative to tea and antacids?",
        back: "Away from both — tannins and antacid minerals bind iron in the gut. Take with water or vitamin C (citrus), ideally between meals, and recheck haemoglobin at review.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Traditional Medicine Strategy 2014-2023",
        year: "2013",
      },
      {
        organization: "Elsevier",
        title: "Rang & Dale's Pharmacology",
        year: "2020 (9th edition)",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "The Building Blocks",
    lessonTitle: "Nutrients: The Body's Shopping List",
    description:
      "Macronutrients, micronutrients and water — the complete shopping list the body cannot live without, and how to read it for every woman you counsel.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Classify nutrients into macronutrients, micronutrients and water, with examples of each.",
      "State the energy each macronutrient provides per gram.",
      "Apply the idea of a balanced plate to antenatal counselling in a Ghanaian setting.",
    ],
    tags: ["nutrients", "basics", "macronutrients", "micronutrients", "balanced diet"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every plate a woman eats is a delivery of raw materials. Her body places a standing order — fuel, bricks, sparks — and it cannot shop for itself. Your job at the antenatal clinic or bedside is to read her meals as the delivery list they really are.\n\nIn this lesson you will meet the whole shopping list: the macronutrients needed in fistfuls, the micronutrients needed in pinches, and the water that carries it all. Then you will practise turning the list into practical, affordable advice.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Macronutrients** — carbohydrates, proteins and fats — are needed in large amounts and supply all our energy: carbohydrate and protein give 4 kilocalories per gram, fat gives 9. **Water** carries no energy but tops every list, because every reaction, every blood drop and every sweat bead depends on it. **Micronutrients** — vitamins and minerals — are needed in tiny amounts yet unlock the machinery: iron builds haemoglobin, folate closes the neural tube, iodine builds a brain. An **essential nutrient** is one the body cannot make for itself, so it must arrive on the plate.\n\nA balanced plate follows the Ghana food-based dietary guidance: a staple for energy, a protein food for building, vegetables and fruit for the micronutrients, with water throughout the day. No single food is complete, and no single food is a villain — variety is the whole secret. Fibre, though barely absorbed, keeps the bowel moving and steadies the release of energy.",
      },
      {
        type: "clinical_pearl",
        body: "A plate of only starch is a common plate, not a complete one. The cheapest upgrade is a handful of beans or small fish and a heap of greens — variety matters more than expense.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At booking a pregnant woman describes her typical day: kenkey in the morning, rice with shito at midday, bread and sweet tea in the evening. She is tired and her conjunctivae look pale. She asks, half-joking, whether she is 'eating for two'.\n\nWhat is missing from her delivery list, and what is the risk?\n\nAnswer: Her energy arrives, but protein, vegetables and fruit barely appear — so iron, folate and other micronutrients are short. That combination points straight towards anaemia and poor fetal growth. The counselling is upgrade, not overhaul: add beans, eggs or small fish to two meals daily, add kontomire or garden eggs and a local fruit, and continue her iron and folate tablets per protocol. Eating for two means twice the quality, not twice the quantity.",
      },
      {
        type: "memory_trick",
        body: "MACRO in kilograms, MICRO in pinches. Fuel and bricks come in bulk; sparks and keys come in pinches — and water drives the whole delivery van.",
      },
      {
        type: "summary",
        body: "- Macronutrients — carbohydrate, protein, fat — supply energy: 4, 4 and 9 kilocalories per gram respectively.\n- Water gives no energy but is the most indispensable nutrient of all.\n- Micronutrients — vitamins and minerals — are needed in tiny amounts but unlock growth, blood-building and immunity.\n- An essential nutrient cannot be made by the body; it must arrive in food.\n- A balanced plate is variety: staple plus protein plus vegetables and fruit — no single food is complete.",
      },
    ],
    questions: [
      {
        topic: "Nutrients",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which nutrient group provides the most energy per gram?",
        options: [
          "Carbohydrates",
          "Proteins",
          "Water-soluble vitamins",
          "Fats",
        ],
        correctIndex: 3,
        explanation:
          "Fat yields 9 kilocalories per gram, compared with 4 for both carbohydrate and protein. Vitamins provide no energy at all — they regulate the machinery that burns the fuel.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Nutrients",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Iron, folate and iodine are examples of which class of nutrients?",
        options: [
          "Macronutrients, needed in fistfuls every day",
          "Micronutrients, needed in small amounts for specific jobs",
          "Energy nutrients measured in kilocalories",
          "Non-essential nutrients the body synthesises on demand",
        ],
        correctIndex: 1,
        explanation:
          "Vitamins and minerals are micronutrients: required in milligram or microgram amounts, providing no energy, yet essential — iron for haemoglobin, folate for the neural tube, iodine for the fetal brain.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Nutrients",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does it mean for a nutrient to be 'essential'?",
        options: [
          "It is only needed during pregnancy",
          "It is the most important nutrient on the list",
          "The body cannot make enough of it itself, so it must come from food",
          "It can be stored in the body for years without harm",
        ],
        correctIndex: 2,
        explanation:
          "Essential simply means the body depends on the diet for its supply — it cannot be manufactured internally. Essential nutrients missing from the diet cause deficiency diseases, however small the required amount.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Nutrients",
        front: "Energy per gram for carbohydrate, protein and fat?",
        back: "Carbohydrate 4 kcal/g, protein 4 kcal/g, fat 9 kcal/g. Vitamins and minerals supply none.",
      },
      {
        topic: "Nutrients",
        front: "Macronutrients versus micronutrients — one line each.",
        back: "Macronutrients (carbohydrate, protein, fat, water) are needed in bulk and supply energy or structure; micronutrients (vitamins, minerals) are needed in pinches and regulate the body's chemistry.",
      },
      {
        topic: "Nutrients",
        front: "What does 'eating for two' actually require?",
        back: "Twice the quality, not twice the quantity — the energy need rises modestly, but the need for protein, iron, folate and other micronutrients rises sharply.",
      },
    ],
    sources: [
      {
        organization: "Ghana Ministry of Health / FAO",
        title: "Ghana Food-Based Dietary Guidelines",
        year: "2023",
        note: "National guidance — verify the current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Healthy Diet (Fact Sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "The Building Blocks",
    lessonTitle: "Carbohydrates: The Quick Fuel",
    description:
      "Sugars, starches and fibre — the body's quickest fuel, and the blood glucose story that matters from the newborn's first hour to the diabetic mother's last trimester.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Distinguish simple sugars, complex starches and fibre by their effect on blood glucose.",
      "Explain how the body handles glucose: insulin, glycogen storage and the brain's fuel needs.",
      "Apply basic dietary counselling for gestational diabetes and describe newborn hypoglycaemia risk.",
    ],
    tags: ["carbohydrates", "energy", "blood glucose", "gestational diabetes", "fibre", "glycogen"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Carbohydrates are the fuel the body reaches for first — the brain alone burns through a steady glucose supply every hour of every day. From the sugar in tea to the starch in banku, they arrive in different forms, and the form decides how fast the fuel floods in.\n\nIn this lesson you will meet the three faces of carbohydrate — sugars, starches and fibre — and follow glucose from plate to bloodstream to storage. You will also meet the two glucose dramas of nursing: gestational diabetes and the newborn whose sugar dips after birth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Simple sugars** — glucose, the sugars in sweet drinks and ripe fruit — are absorbed quickly, spiking blood glucose. **Complex starches** — in rice, yam, plantain, oats — must be broken down gradually, releasing fuel slowly. **Fibre**, the indigestible part of plants, absorbs water, keeps stool soft and bulky (pregnancy's constipation relief) and steadies glucose release. Surplus glucose is stored as **glycogen** in liver and muscle — a limited tank — and whatever exceeds it converts to fat.\n\n**Insulin** is the hormone that moves glucose out of blood into cells. In pregnancy, placental hormones resist insulin, so the mother's pancreas must work harder; when it cannot keep up, glucose rises and **gestational diabetes** follows. The baby of a diabetic mother grows fat on the excess sugar, then, cut from the glucose supply at birth, can plunge into **hypoglycaemia** — sleepiness, jitteriness, poor feeding — which is why such newborns need early feeding and glucose monitoring.",
      },
      {
        type: "clinical_pearl",
        body: "In gestational diabetes counselling, swap before you ban: unrefined starches for white ones, whole fruit for juice, water for sweet drinks, smaller meals more often. Diets demanding perfection are diets that get abandoned.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 28 weeks is diagnosed with gestational diabetes. She looks near tears and asks, 'So I should stop eating? My mother said food is what makes the baby grow.' You sit beside her and plan her meals with her.\n\nWhat is the heart of your counselling?\n\nAnswer: Carbohydrates are not her enemy — the type and timing are. She keeps her staple but chooses unrefined versions, adds beans and vegetables to slow glucose release, spreads food into smaller frequent meals, and drops sweet drinks entirely. A short walk after meals helps muscle soak up glucose. She follows the referral for dietitian review and glucose monitoring per protocol — and you correct the fear, not the appetite, because the baby still needs her to eat.",
      },
      {
        type: "memory_trick",
        body: "Sugars sprint, starches stroll, fibre sweeps. And the baby of a diabetic mother spent months on a sugar drip — once the cord is cut, feed it early or its sugar falls.",
      },
      {
        type: "summary",
        body: "- Simple sugars absorb fast and spike glucose; complex starches release fuel slowly; fibre softens stool and steadies the release.\n- Insulin moves glucose into cells; surplus is stored as limited glycogen, then as fat.\n- Placental hormones resist insulin in pregnancy — the pancreas that cannot keep up allows gestational diabetes.\n- GDM counselling: swap, don't ban — unrefined starches, fibre-rich meals, smaller frequent feeds, no sweet drinks.\n- Newborns of diabetic mothers risk early hypoglycaemia: feed early and monitor glucose.",
      },
    ],
    questions: [
      {
        topic: "Carbohydrates",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is fibre valuable in pregnancy even though it is barely digested?",
        options: [
          "It is converted into fat for energy storage",
          "It provides 9 kilocalories per gram",
          "It holds water in the stool, preventing constipation, and slows glucose absorption",
          "It builds the fetal skeleton",
        ],
        correctIndex: 2,
        explanation:
          "Fibre resists digestion, so it contributes almost no energy — but it bulks and softens stool (the blessing of pregnant bowels) and steadies glucose release. The other options describe fat or minerals.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Carbohydrates",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does gestational diabetes develop in some pregnant women?",
        options: [
          "The mother eats too much carbohydrate for any pancreas to handle",
          "The fetus absorbs all her insulin",
          "Pregnancy destroys the insulin-producing cells permanently",
          "Placental hormones resist insulin, and her pancreas cannot secrete enough extra to compensate",
        ],
        correctIndex: 3,
        explanation:
          "Pregnancy hormones deliberately blunt insulin's action so glucose stays available for the baby. Most women's pancreas simply secretes more insulin to compensate; when it cannot keep up, blood glucose rises — gestational diabetes, which usually resolves after delivery.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Carbohydrates",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a baby born to a mother with poorly controlled diabetes observed closely for hypoglycaemia in the first hours?",
        options: [
          "The baby's pancreas under-produced insulin all along",
          "The baby inherits the mother's diabetes at birth",
          "The baby was exposed to high glucose and made extra insulin; once the glucose supply stops at birth, that insulin drives its sugar down",
          "Newborns cannot digest breast milk sugar",
        ],
        correctIndex: 2,
        explanation:
          "A high-glucose environment makes the fetal pancreas secrete generously. At birth the glucose flood stops but the insulin does not — the newborn's sugar can fall quickly, so early feeding and glucose checks are routine.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Carbohydrates",
        front: "Simple sugar versus starch versus fibre — speed and stool.",
        back: "Sugars absorb fast and spike glucose; starches release slowly; fibre is barely digested — it softens stool, prevents constipation and steadies glucose release.",
      },
      {
        topic: "Carbohydrates",
        front: "Why does gestational diabetes appear in pregnancy?",
        back: "Placental hormones resist insulin; when the mother's pancreas cannot raise insulin output enough to compensate, blood glucose climbs. It usually resolves after delivery.",
      },
      {
        topic: "Carbohydrates",
        front: "Why watch the newborn of a diabetic mother for hypoglycaemia?",
        back: "Chronic high glucose made the fetus secrete extra insulin; at birth the glucose supply stops while the insulin persists — sugar falls. Feed early, monitor glucose.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Healthy Diet (Fact Sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
      {
        organization: "World Health Organization",
        title: "Diagnostic Criteria and Classification of Hyperglycaemia First Detected in Pregnancy",
        year: "2013",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "The Building Blocks",
    lessonTitle: "Proteins: The Builders",
    description:
      "Amino acids are the body's bricks. Blood, wounds, antibodies and growing babies are all built from protein — and deficiency shows in every one of them.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "List the major roles of protein in the body, from repair to immunity.",
      "Explain the meaning of essential amino acids and complementary plant proteins.",
      "Distinguish kwashiorkor from marasmus, and counsel Ghanaian protein sources.",
    ],
    tags: ["proteins", "repair", "amino acids", "kwashiorkor", "anaemia", "wound healing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Carbohydrates are the fuel, but protein is the building site. Every wound that closes, every red cell that carries oxygen, every antibody that fights infection and every gram of a growing baby is assembled from protein's smaller units — amino acids.\n\nIn this lesson you will meet protein's six jobs, learn why some amino acids must arrive ready-made from food, and practise recognising what protein deficiency looks like in a child at the clinic and in a healing wound on the ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Proteins are chains of **amino acids**. Nine of them are **essential** — the body cannot build them, so they must arrive in food. Protein's jobs read like a construction company's catalogue: **build and repair** tissue (healing episiotomies and caesarean wounds); serve as **enzymes** running every reaction; carry messages as **hormones** like insulin; fight as **antibodies**; carry oxygen as **haemoglobin**; and hold fluid in the bloodstream as **albumin**. In pregnancy and after birth, protein needs rise — mother is building an entire second person, then manufacturing milk.\n\nDeficiency shows two faces. **Kwashiorkor** — protein deficiency with some calories — hides the wasting under oedema: a swollen belly and feet, hair that thins and loses colour, a miserable, apathetic child with flaky skin. **Marasmus** is starvation overall: a shrunken, wrinkled, old-looking face on a small body, without oedema. Ghanaian protein is affordable: fish, eggs, beans, groundnuts, snails, chicken — and combining foods across the day, like rice with beans, supplies all essential amino acids even without meat at every meal.",
      },
      {
        type: "clinical_pearl",
        body: "A postnatal wound that will not heal in a woman eating porridge alone is a nutrition problem wearing a surgical dressing. Look at the plate before repeating the dressing pack.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Three days after a caesarean section, a young mother's wound is inflamed at one end and healing sluggishly. On talk, you discover she has been taking only thin millet porridge since the operation — her family believes 'heavy food' spoils a fresh wound.\n\nWhat is her wound missing, and what do you counsel?\n\nAnswer: Collagen, the repair material of every healing wound, is built from amino acids she is not eating. The belief holding her back needs gentle correction: repair requires protein, so eggs, fish or beans daily are part of the treatment, not a threat. If her appetite is small, frequent protein-rich portions beat one large meal, and the team should review her intake daily until the wound behaves.",
      },
      {
        type: "memory_trick",
        body: "Protein's six jobs, one mason: Bricks (build and repair), Engines (enzymes), Messengers (hormones), Soldiers (antibodies), Carriers (haemoglobin), Plugs (albumin holding fluid in vessels).",
      },
      {
        type: "summary",
        body: "- Proteins are amino-acid chains; nine amino acids are essential — food must supply them.\n- Protein's jobs: repair tissue, run enzymes, carry hormonal messages, fight as antibodies, carry oxygen as haemoglobin, hold fluid as albumin.\n- Kwashiorkor is protein deficiency with oedema, swollen belly, hair changes and apathy; marasmus is overall starvation without oedema.\n- Pregnancy, lactation and wound healing all raise protein needs.\n- Affordable Ghanaian sources: fish, eggs, beans, groundnuts — plant foods combined across the day complete each other.",
      },
    ],
    questions: [
      {
        topic: "Proteins",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which combination of functions belongs to protein?",
        options: [
          "Energy storage, insulation and organ padding",
          "Tissue repair, enzymes, antibodies, haemoglobin and fluid balance",
          "Nerve signalling, bone hardness and blood clotting only",
          "Vision and skin colour",
        ],
        correctIndex: 1,
        explanation:
          "Protein builds and repairs tissue, runs the body's enzymatic reactions, forms antibodies, carries oxygen as haemoglobin and holds fluid in vessels as albumin — the construction crew, not the fuel or insulation.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Proteins",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 2-year-old has a swollen belly and puffy feet, thin sparse hair, and appears apathetic, though he receives some maize porridge daily. What is the most likely picture?",
        options: [
          "Kwashiorkor — protein deficiency with some calorie intake, oedema hiding the wasting",
          "Marasmus, from total energy deficiency",
          "Normal toddler belly, no action needed",
          "Kidney disease, because oedema always means kidney failure",
        ],
        correctIndex: 0,
        explanation:
          "Oedema plus reasonably present calories plus hair and mood changes is the classic kwashiorkor picture — low albumin lets fluid leak into tissues and masks the wasting beneath. Marasmus wastes visibly without oedema. Either way, treat per protocol; never dismiss a swollen belly as normal.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Proteins",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family cannot afford meat every day. How can they still receive all essential amino acids from plant foods?",
        options: [
          "They cannot — meat is the only complete source",
          "By eating one large serving of a single grain daily",
          "By cooking all vegetables for two hours",
          "By combining different plant proteins across the day, such as rice with beans",
        ],
        correctIndex: 3,
        explanation:
          "Individual plant proteins are low in different amino acids, but combinations — grains with legumes, like rice and beans — cover each other's gaps over the day. Meat is helpful, not exclusive; long boiling instead destroys vitamins, not gaps.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Proteins",
        front: "List four jobs of protein in one breath.",
        back: "Build and repair tissue; enzymes; antibodies; haemoglobin and fluid balance (albumin) — plus hormones as messengers. The body's construction crew.",
      },
      {
        topic: "Proteins",
        front: "Kwashiorkor versus marasmus in one line each.",
        back: "Kwashiorkor: protein-deficient diet with calories — oedema, swollen belly, hair changes, apathy. Marasmus: overall starvation — visible wasting without oedema.",
      },
      {
        topic: "Proteins",
        front: "Why does a healing wound need protein?",
        back: "Collagen, the structural protein knitting the wound, is assembled from dietary amino acids — no protein, no repair, however clean the dressing.",
      },
    ],
    sources: [
      {
        organization: "WHO / FAO / UNU",
        title: "Protein and Amino Acid Requirements in Human Nutrition",
        year: "2007",
      },
      {
        organization: "Ghana Ministry of Health / FAO",
        title: "Ghana Food-Based Dietary Guidelines",
        year: "2023",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "The Building Blocks",
    lessonTitle: "Fats: The Misunderstood Macronutrient",
    description:
      "The most concentrated fuel and the most maligned nutrient — why growing babies need fat, which fats to choose, and what happens when fat is banned.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "List the essential functions of dietary fat, including fetal brain and vitamin absorption.",
      "Distinguish saturated, unsaturated and trans fats by food source and health effect.",
      "Apply moderate-fat counselling for pregnant women who fear or overuse fat.",
    ],
    tags: ["fats", "lipids", "essential fatty acids", "dha", "fat-soluble vitamins", "cholesterol"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Fat has spent decades as the villain of every diet conversation — yet a growing baby's brain is mostly built from it, and the vitamins A, D, E and K ride nowhere without it. The truth about fat is not 'avoid'; it is 'choose'.\n\nIn this lesson you will meet fat's real jobs, learn the three families — saturated, unsaturated and trans — and practise counselling the two women you will actually meet: the one who fears all fat, and the one whose cooking oil has been deep-frying since last month.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Fat is the most concentrated fuel at **9 kilocalories per gram**, and it does work no other nutrient can: builds **cell membranes** and the myelin around nerves, forms the raw material for **hormones**, ferries the **fat-soluble vitamins** (A, D, E, K) across the gut, and pads and insulates organs. Two fatty acids are **essential** — linoleic and alpha-linolenic — because the body cannot make them. In the last trimester, the fetal **brain and retina** grow fat-hungry, and DHA from fish matters most.\n\nThe families differ. **Unsaturated** fats are liquid at room temperature — fish, groundnut, soybean and olive oils — and support health. **Saturated** fats are solid — fatty meat, palm kernel, butter — best kept modest. **Trans** fats, formed when oil is repeatedly reused for deep frying or hardened in processed snacks, are the true villains, raising heart risk; WHO advises cutting them hard. Cholesterol is mostly manufactured by your liver — the overall dietary pattern matters far more than one egg.",
      },
      {
        type: "clinical_pearl",
        body: "The deep-frying pot reused for days is making trans fats in your own kitchen. Counsel vendors and families alike: fresh oil for frying, and drain old oil away — the cheapest heart decision a family can make.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A pregnant woman at 32 weeks tells you she has cut all oil, fish and groundnut from her food because she fears the baby will grow 'too big to deliver'. Her skin is dry and she asks whether that is normal.\n\nWhat is the risk in her plan, and what do you counsel?\n\nAnswer: She has removed the carrier of vitamins A, D, E and K, the essential fatty acids, and the DHA her baby's brain and retina are busy building. A big baby is caused by excess total calories and poorly controlled diabetes, not by moderate healthy fat. Counsel: modest oil on her greens, fish when possible, groundnut stew returned — with the reused deep-fried foods kept out. Dry skin may improve as her diet does; note and follow it.",
      },
      {
        type: "memory_trick",
        body: "Fat is the ferry for A-D-E-K — no ferry, no boarding. Choose your fats like passengers: unsaturated welcome aboard, saturated small fare, trans never sails.",
      },
      {
        type: "summary",
        body: "- Fat is the densest fuel (9 kcal/g) and builds membranes, myelin and hormones.\n- It ferries the fat-soluble vitamins A, D, E and K — banning fat strands them all.\n- Linoleic and alpha-linolenic acids are essential; DHA from fish builds the fetal brain and retina in late pregnancy.\n- Unsaturated (liquid) fats support health; saturated (solid) keep modest; trans fats — reused deep-fry oil, hardened snacks — are cut hard per WHO.\n- Big babies come from total calories and diabetes, not moderate healthy fat.",
      },
    ],
    questions: [
      {
        topic: "Fats",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why do very low-fat diets risk deficiency of vitamins A, D, E and K?",
        options: [
          "Fat carries these fat-soluble vitamins across the gut into the blood — without it, they are poorly absorbed",
          "The body cannot make vitamins without eating fat first",
          "These vitamins are destroyed by any fat in the meal",
          "Fat converts these vitamins into protein",
        ],
        correctIndex: 0,
        explanation:
          "A, D, E and K dissolve in fat, not water, so they need dietary fat for absorption. Strip the fat and the vitamins pass through unabsorbed — the ferry carrying the passengers.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Fats",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which source of fat should be reduced most firmly in dietary counselling?",
        options: [
          "Fresh groundnut stew",
          "Boiled fish eaten twice a week",
          "Oil that has been reused repeatedly for deep frying at a roadside stand",
          "A spoonful of red palm oil in soup",
        ],
        correctIndex: 2,
        explanation:
          "Repeatedly reheated oil accumulates trans fats, which WHO guidance targets for aggressive reduction. The others are unsaturated or micronutrient-rich traditional sources used in moderation.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Fats",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does DHA matter in the third trimester of pregnancy?",
        options: [
          "It thickens the mother's fat stores for delivery",
          "The fetal brain and retina are built richly with it in late pregnancy",
          "It prevents morning sickness",
          "It hardens the fetal skull",
        ],
        correctIndex: 1,
        explanation:
          "The last trimester is the brain-growth sprint, and DHA — an omega-3 fatty acid from fish — is a major structural fat of brain and retina. This is why fish or other DHA sources earn their place in late-pregnancy meals.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Fats",
        front: "Which vitamins depend on dietary fat for absorption?",
        back: "A, D, E and K — all fat-soluble. Fat is the ferry; no ferry, no boarding.",
      },
      {
        topic: "Fats",
        front: "Name the essential fatty acids and why DHA matters in late pregnancy.",
        back: "Linoleic and alpha-linolenic (body cannot make them). DHA, from fish, is a structural fat of the fetal brain and retina, built fastest in the third trimester.",
      },
      {
        topic: "Fats",
        front: "Saturated vs unsaturated vs trans — one line each.",
        back: "Saturated: solid at room temperature (fatty meat, butter) — keep modest. Unsaturated: liquid (fish, groundnut, olive) — supportive. Trans: reheated deep-fry oil and hardened snacks — cut hard.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Healthy Diet (Fact Sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
      {
        organization: "World Health Organization",
        title: "Saturated Fatty Acid and Trans-Fatty Acid Intake for Adults and Children",
        year: "2023",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "Small but Mighty",
    lessonTitle: "Vitamins: Small Amounts, Big Jobs",
    description:
      "Two families — water-soluble and fat-soluble — with oversized jobs. The deficiencies you can see from the doorway, and the newborn injection every parent asks about.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Classify vitamins into fat-soluble and water-soluble families and explain storage and toxicity differences.",
      "Link key deficiencies to their signs: vitamin A night blindness, D rickets, C poor healing, folate neural tube defects.",
      "Explain the rationale for vitamin K prophylaxis in newborns and preconception folate.",
    ],
    tags: ["vitamins", "deficiency", "fat-soluble", "water-soluble", "folate", "vitamin k"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Vitamins are the micromachines of the body — needed in pinches, blamed for enormous failures. One tiny molecule short, and a child cannot see at dusk, a wound will not knit, or a baby's spine fails to close.\n\nIn this lesson you will organise the thirteen vitamins into the two families every exam loves — fat-soluble and water-soluble — and walk through the deficiency pictures you will actually meet at the clinic, plus two timing questions with lifelong stakes: folate before conception and vitamin K at birth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **fat-soluble** vitamins — **A, D, E and K** — travel with dietary fat, and the body stores them in the liver and fatty tissue. Storage is convenient but risky: megadoses accumulate to toxicity, and in pregnancy large preformed vitamin A can harm the developing baby — supplements belong to prescription, not self-dosing. The **water-soluble** family — the **B complex** and **C** — cannot be stored; the excess simply passes out in urine, so they must arrive daily, and they are easily destroyed by prolonged high-heat cooking.\n\nMap the deficiency signs: **vitamin A** — night blindness, dry eyes, more infections; **vitamin D** — with calcium, rickets in children and soft bones in mothers; **vitamin C** — bleeding gums and wounds that will not heal; **vitamin K** — the clotting vitamin; **folate (B9)** — the neural tube closes by about day 28 of pregnancy, which is why daily 400 micrograms is advised to start **before** conception. And every newborn receives **vitamin K** by injection at birth, because a sterile gut makes almost none, breast milk carries little, and low clotting factors risk serious bleeding in the first days.",
      },
      {
        type: "clinical_pearl",
        body: "The folate lesson is a timing lesson: the neural tube closes before the missed period. Starting folic acid at booking is starting it late — counsel every woman planning pregnancy, and every woman who could become pregnant.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a newborn examination at a CHPS compound, a father watches you give the baby an injection and asks, with real feeling, 'She is healthy — why are you injecting her on her first day?'\n\nHow do you explain the vitamin K injection to him?\n\nAnswer: You explain, warmly, that clotting — the ability to stop bleeding — depends on vitamin K. Babies are born with low reserves: their guts are sterile (gut bacteria make vitamin K later), and breast milk carries little. Without the injection, a small number of newborns bleed dangerously in the first days of life, sometimes into the brain. One intramuscular dose of vitamin K at birth is the safe, standard protection — a small injection against a rare but serious bleed, recommended for every newborn.",
      },
      {
        type: "memory_trick",
        body: "A-D-E-K hold fat's hand — stored in the liver, so megadoses can poison. B and C take the waterway — excess washes out, so they come daily. And K is for Koagulation: the newborn's first gift.",
      },
      {
        type: "summary",
        body: "- Fat-soluble vitamins A, D, E, K need dietary fat for absorption and are stored — megadoses risk toxicity (extra caution with preformed A in pregnancy).\n- Water-soluble B and C are not stored; daily intake, destroyed by prolonged high heat.\n- Deficiency signs: A night blindness; D rickets with calcium; C bleeding gums and poor healing; K bleeding.\n- Folate 400 micrograms daily starting before conception — the neural tube closes by about day 28.\n- Every newborn gets vitamin K at birth: sterile gut, low stores, low breast-milk levels, risk of early bleeding.",
      },
    ],
    questions: [
      {
        topic: "Vitamins",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which vitamins are fat-soluble, stored in the body and therefore able to reach toxic levels with megadoses?",
        options: [
          "Vitamins A, D, E and K",
          "B complex and vitamin C",
          "Folate and vitamin B12 only",
          "All vitamins are stored equally",
        ],
        correctIndex: 0,
        explanation:
          "A, D, E and K dissolve in fat and are stored in liver and fatty tissue, so excess accumulates. The B vitamins and C dissolve in water and wash out in urine, needing daily replacement.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Vitamins",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is folic acid recommended to start before conception rather than at the first antenatal visit?",
        options: [
          "Because it causes nausea if started during pregnancy",
          "Because the neural tube closes by about day 28 — often before a woman knows she is pregnant",
          "Because folate stores last for years and early dosing saves money",
          "Because it interferes with iron if given together",
        ],
        correctIndex: 1,
        explanation:
          "The spinal cord and brain tube form and close in the first four weeks. By the time many women realise they are pregnant, the window has passed — hence 400 micrograms daily for any woman who could become pregnant.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Vitamins",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn's gut is sterile, breast milk is low in it, and its stores are small. Which vitamin is given by injection at birth to prevent bleeding?",
        options: [
          "Vitamin A",
          "Vitamin C",
          "Vitamin B12",
          "Vitamin K",
        ],
        correctIndex: 3,
        explanation:
          "Vitamin K is needed to make clotting factors. Newborns start low — no gut bacteria yet, little in breast milk — so one intramuscular dose at birth prevents vitamin K deficiency bleeding in the first days of life.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Vitamins",
        front: "Fat-soluble versus water-soluble vitamins — storage and risk.",
        back: "A, D, E, K: stored in liver and fat, need dietary fat for absorption, megadoses can poison. B complex and C: not stored, daily intake needed, excess passes in urine.",
      },
      {
        topic: "Vitamins",
        front: "Match the deficiency: night blindness, rickets, bleeding gums, neonatal bleeding.",
        back: "Night blindness — vitamin A; rickets — vitamin D (with calcium); bleeding gums and poor healing — vitamin C; neonatal and clotting-related bleeding — vitamin K.",
      },
      {
        topic: "Vitamins",
        front: "Why does every newborn receive vitamin K at birth?",
        back: "Newborns have low clotting factors: sterile gut makes no vitamin K, stores are small, breast milk is low. One dose prevents rare but serious vitamin K deficiency bleeding.",
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
        title: "WHO Guideline: Vitamin A Supplementation in Pregnant Women",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2021 (17th edition)",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "Small but Mighty",
    lessonTitle: "Minerals: The Construction Crew",
    description:
      "Iron, calcium, iodine and their crew — the minerals Ghanaian mothers most often lack, and the ones nurses fight for daily, from booking to birth.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the roles of iron, calcium, iodine and zinc in mother and baby.",
      "Link mineral deficiencies to their signs, including anaemia at booking and iodine's fetal effects.",
      "Apply WHO-aligned antenatal supplementation counselling: iron with folate, calcium in low-intake settings, iodised salt.",
    ],
    tags: ["minerals", "iron", "calcium", "iodine", "anaemia", "pre-eclampsia prevention"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Minerals are the crew that builds: blood, bone, brain. They come from soil and water, pass through plants and animals, and land on the plate — and in Ghana, iron, calcium and iodine are the three the plate most often misses.\n\nIn this lesson you will meet the mineral crew through the antenatal clinic, where their deficiencies actually live: the pale woman at booking, the calcium-poor diet raising pre-eclampsia risk, and the salt that quietly decides a child's intelligence.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Iron** builds haemoglobin, the oxygen carrier in red cells. In pregnancy, demands rise for mother and baby together, and deficiency is the world's commonest cause of **anaemia** — pallor, fatigue, breathlessness, and a threshold of haemoglobin below 11 g/dL by WHO definition. Prevention in settings like Ghana is daily iron (30-60 mg elemental) with folic acid. **Calcium** builds bone and teeth, but also powers muscle contraction and nerve signalling — and where dietary calcium is low, WHO advises 1.5-2 g daily in pregnancy to reduce the risk of pre-eclampsia. Sources: milk, small fish eaten with their bones, dark green leaves.\n\n**Iodine** makes thyroid hormone, the brain's foreman: deficiency in pregnancy causes goitre in the mother and, at its worst, permanent intellectual impairment in the child — prevented most cheaply by iodised salt. **Zinc** quietly matters for wound healing and immunity. One rule of iron timing from the interactions lesson travels everywhere: iron with water or citrus, not with tea or antacids — absorption is the whole battle.",
      },
      {
        type: "clinical_pearl",
        body: "Anaemia at booking is not small sickness. The anaemic woman enters labour with no reserves for the bleeding you cannot predict — treat her iron like an emergency that plans ahead.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At booking, a woman in her second trimester looks pale and tires climbing the clinic steps. Her haemoglobin returns at 8.5 g/dL. She mentions, unhappily, that a previous course of 'blood medicine' made her stool dark and she stopped it.\n\nHow do you classify her anaemia, and what is your plan?\n\nAnswer: Below 11 g/dL is anaemia in pregnancy; at 8.5 g/dL this is moderate, and it explains her symptoms. Plan: treatment-dose iron with folic acid per local protocol, food counselling (beans, fish, dark greens), iron taken with water or citrus rather than tea, and a haemoglobin recheck at review — with warning signs for referral. Explain the dark stool in advance this time; a counselled woman keeps taking her tablets, and the fear that stopped her last course is the real deficiency to treat first.",
      },
      {
        type: "memory_trick",
        body: "Iron-Calcium-Iodine: blood, bone, brain. And remember zinc for zippers — wounds close with it.",
      },
      {
        type: "summary",
        body: "- Iron builds haemoglobin; deficiency is the commonest cause of anaemia, defined in pregnancy as haemoglobin below 11 g/dL.\n- Prevention where anaemia is common: daily elemental iron (30-60 mg) with folic acid; treat with counselling and recheck.\n- Calcium builds bone and runs muscle and nerve; WHO advises 1.5-2 g daily in pregnancy where dietary calcium is low, to lower pre-eclampsia risk.\n- Iodine builds thyroid hormone and the fetal brain — deficiency causes goitre and permanent impairment; iodised salt is the cheap fix.\n- Zinc serves wound healing and immunity; iron absorbs best with citrus, away from tea and antacids.",
      },
    ],
    questions: [
      {
        topic: "Minerals",
        type: "MCQ",
        difficulty: "Easy",
        stem: "By WHO definition, at what haemoglobin level is a pregnant woman considered anaemic?",
        options: [
          "Below 13 g/dL",
          "Below 11 g/dL",
          "Below 9 g/dL",
          "Below 7 g/dL",
        ],
        correctIndex: 1,
        explanation:
          "In pregnancy the threshold is 11 g/dL, because plasma expands more than red cell mass. Below 7 g/dL is severe anaemia needing escalation; 8.5 g/dL is moderate; the diagnosis begins under 11.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Minerals",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman's diet contains almost no milk or small fish. What does WHO advise, and why?",
        options: [
          "Calcium 1.5-2 g daily in pregnancy, because low dietary calcium settings carry higher pre-eclampsia risk",
          "No supplement, since the fetus draws calcium only after birth",
          "Iron only, because calcium has no role in muscle function",
          "Vitamin B12 injections monthly",
        ],
        correctIndex: 0,
        explanation:
          "Where dietary calcium intake is low, WHO recommends daily calcium supplementation (1.5-2 g) in pregnancy, which reduces the risk of pre-eclampsia — calcium also serving muscle contraction and nerve signalling all along.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Minerals",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the most serious effect of iodine deficiency during pregnancy?",
        options: [
          "Maternal night blindness",
          "Goitre in the mother only, with no fetal effect",
          "Iron-deficiency anaemia",
          "Impaired fetal brain development, potentially permanent",
        ],
        correctIndex: 3,
        explanation:
          "Iodine makes thyroid hormone, essential for fetal brain development. Severe deficiency in pregnancy can cause permanent intellectual impairment; the mother's goitre is the visible sign, the child's brain is the stakes. Iodised salt prevents it cheaply.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Minerals",
        front: "Iron-Calcium-Iodine-Zinc: match each to its headline job.",
        back: "Iron — blood (haemoglobin); Calcium — bone, muscle contraction, nerve signalling; Iodine — brain (thyroid hormone); Zinc — wound healing and immunity.",
      },
      {
        topic: "Minerals",
        front: "Pregnancy haemoglobin thresholds for anaemia — and the moderate range?",
        back: "Anaemia in pregnancy: Hb below 11 g/dL. Moderate roughly 7-10.9; severe below 7 needs urgent escalation. Prevention: daily 30-60 mg elemental iron with 400 micrograms folic acid where anaemia is common.",
      },
      {
        topic: "Minerals",
        front: "Why is iodised salt one of the cheapest public health victories?",
        back: "Iodine is essential for thyroid hormone and fetal brain development; salt iodisation prevents goitre and, in pregnancy, permanent intellectual impairment — pennies per head.",
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
        title: "WHO Guideline: Daily Iron and Folic Acid Supplementation in Pregnant Women",
        year: "2012",
      },
      {
        organization: "WHO / UNICEF / ICCIDD",
        title: "Assessment of Iodine Deficiency Disorders and Monitoring Their Elimination (3rd edition)",
        year: "2007",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "Small but Mighty",
    lessonTitle: "Hydration: Water, the Forgotten Nutrient",
    description:
      "Every reaction, every temperature, every waste product travels on water. Reading hydration from the bedside, fixing it with ORS mixed right, and the newborn who cannot ask.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "List the body's uses of water and the main daily losses.",
      "Recognise dehydration in adults and newborns from bedside signs, especially urine and fontanelle.",
      "Apply correct ORS counselling for diarrhoea, including breastfeeding continuation.",
    ],
    tags: ["hydration", "water", "dehydration", "ors", "fluid balance", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Water never appears on a food label or a diet poster, yet it is the nutrient nobody survives three days without. Every temperature you sweat away, every nutrient you absorb, every waste your kidneys discard — all of it travels on water.\n\nIn this lesson you will learn to read the body's rain gauge — urine colour, output, eyes, fontanelle — and to fix deficits the safe way: the right fluids, the right mixing, and the feeding that never stops.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Water is the **solvent** every reaction dissolves into, the **transport** medium of blood, the **coolant** of sweat, the **lubricant** of joints and the **carrier** of waste out through the kidneys. Balance is a daily negotiation: roughly two to two and a half litres in (drinks plus food) against urine and the invisible losses of skin and breath. Thirst lags behind the deficit — and in newborns, the elderly and the febrile it fails almost completely. Extra needs: fever, vomiting, diarrhoea, and breastfeeding, which demands roughly an extra 700 mL daily.\n\nRead the rain gauge at the bedside: **dark, scanty urine** is the earliest honest signal; then dry lips and mouth, sunken eyes, skin that tents when pinched, drowsiness. In babies add the **sunken fontanelle**, lethargy and fewer wet nappies. For diarrhoea, **oral rehydration salts** are the treatment: the full sachet in exactly the clean water printed on the packet — more water weakens it, less concentrates it, and both are dangerous. Feed through it: breastfeeding continues, and so should small, frequent feeds.",
      },
      {
        type: "clinical_pearl",
        body: "Urine is the cheapest monitor on any ward. Check the colour and the output before you trust any chart — dark and scanty means the rain gauge is empty and the in must grow.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother brings her four-day-old breastfed baby to the CHPS compound: six watery stools since morning, feeding slower than usual, and she has noticed the soft spot on the head looking slightly sunken. She asks for 'an injection to stop the diarrhoea'.\n\nWhat is happening, and what do you do and teach?\n\nAnswer: The baby is dehydrating from diarrhoea — the sunken fontanelle and sluggish feeding are the bedside evidence in one too young to show much else. The treatment is fluids, not a stopper: continue breastfeeding on demand, give ORS in small frequent sips after each loose stool, mixed exactly as the packet directs. You check for danger signs — blood in stool, repeated vomiting, no wet nappies, lethargy, poor suck — any of which means urgent referral. And you teach the mother the mixing and the watching, because she will be the rain gauge at home tonight.",
      },
      {
        type: "memory_trick",
        body: "In through the lips, out through the kidneys. Dark and scanty out? Then the in must grow. And ORS has one law: one sachet, one amount of water, no negotiation.",
      },
      {
        type: "summary",
        body: "- Water is the solvent, transport, coolant, lubricant and waste carrier — about 2-2.5 litres in daily, against urine and insensible losses.\n- Thirst is unreliable in newborns, fever, vomiting and diarrhoea — watch the rain gauge instead.\n- Bedside signs of dehydration: dark scanty urine first, then dry mouth, sunken eyes, skin tenting, drowsiness.\n- Babies add a sunken fontanelle, lethargy, poor feeding, fewer wet nappies.\n- ORS: full sachet in exactly the stated amount of clean water; keep breastfeeding and feeding through diarrhoea; danger signs mean referral.",
      },
    ],
    questions: [
      {
        topic: "Hydration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which bedside finding is the earliest honest signal that a patient is becoming dehydrated?",
        options: [
          "Dark, scanty urine",
          "Raised blood pressure",
          "Increased appetite",
          "Warm hands",
        ],
        correctIndex: 0,
        explanation:
          "The kidneys concentrate urine to defend the blood's water long before other signs appear — colour darkens and volume falls. Urine is the body's rain gauge; check it before you trust the chart.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Hydration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother is preparing ORS for her child with diarrhoea. What must the mixing rule be?",
        options: [
          "Dissolve the sachet in whatever amount of water tastes acceptable to the child",
          "Use half the water printed on the packet for a stronger effect",
          "Dissolve the full sachet in exactly the amount of clean water stated on the packet — no more, no less",
          "Add extra sugar to make the child drink more",
        ],
        correctIndex: 2,
        explanation:
          "ORS is a precise chemistry: the sugar-salt ratio drives water absorption in the gut. Wrong dilution — weaker or stronger — breaks that chemistry, risking water overload or dangerous sodium concentration. Full sachet, stated water, clean water, no additions.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Hydration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A breastfed baby with diarrhoea shows a sunken fontanelle and feeds sluggishly. What is the core of correct management?",
        options: [
          "Stop breastfeeding until the stools settle, then restart",
          "Continue breastfeeding, give correctly mixed ORS in small frequent sips, and check for danger signs",
          "Give only plain water for 24 hours",
          "Wait 24 hours to see if the diarrhoea stops by itself",
        ],
        correctIndex: 1,
        explanation:
          "Breast milk is both fluid and nutrition, and stopping it worsens the deficit. ORS replaces losses; small frequent sips suit a sluggish feeder. Danger signs — blood, repeated vomiting, no wet nappies, lethargy — mean referral, not waiting.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Hydration",
        front: "List five jobs of water in the body.",
        back: "Solvent for reactions; transport medium (blood); temperature regulation (sweat); lubricant (joints); waste carrier (urine). The forgotten nutrient.",
      },
      {
        topic: "Hydration",
        front: "Name the newborn-specific signs of dehydration.",
        back: "Sunken fontanelle, sunken eyes, lethargy, poor feeding, and fewer wet nappies — with dark scanty urine as the honest early signal at any age.",
      },
      {
        topic: "Hydration",
        front: "State the ORS mixing rule and the feeding rule during diarrhoea.",
        back: "Full sachet in exactly the stated amount of clean water — never more, never less. Continue breastfeeding and small frequent feeds; watch for danger signs requiring referral.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "The Treatment of Diarrhoea: A Manual for Physicians and Other Senior Health Workers",
        year: "2005",
      },
      {
        organization: "WHO / UNICEF",
        title: "Clinical Management of Acute Diarrhoea (Joint Statement)",
        year: "2004",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "When Nutrition Fails",
    lessonTitle: "Malnutrition: The Quiet Emergency",
    description:
      "Undernutrition rarely announces itself. MUAC bands, quiet weight drift and the double burden of too little and too much — how to spot the emergency that does not shout.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define malnutrition in both its forms and explain the double burden.",
      "Screen with weight, BMI and MUAC, applying the childhood MUAC cut-offs.",
      "Recognise hospital-acquired undernutrition and act on a red MUAC without delay.",
    ],
    tags: ["malnutrition", "assessment", "muac", "severe acute malnutrition", "double burden", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The emergencies that shout — haemorrhage, convulsions, a blue newborn — get all the attention. Malnutrition whispers: a slowly thinning arm, a wound that lingers, a weight that drifts downward between admission and discharge. It kills quietly, on a delay.\n\nIn this lesson you will learn both faces of malnutrition — too little and too much, often side by side in the same community — and the two-minute screening tools that turn a quiet emergency into an actionable one: the scale, the BMI, and the colour band on a child's arm.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Malnutrition simply means the wrong amount or type of nutrients. **Undernutrition** shows as wasting (recent acute loss), stunting (long-run, height-for-age), being underweight, or missing micronutrients. **Overnutrition** — overweight and obesity — is malnutrition's other face, and in Ghana the two often share a household. In pregnancy, obesity raises risks of gestational diabetes, hypertension, caesarean delivery and anaesthetic difficulty; underweight raises risks of low birth weight and fetal loss.\n\nScreening is deliberately simple. Weigh every patient and compute **BMI** (underweight below 18.5). For children 6-59 months, the **MUAC** band reads like traffic light: **below 11.5 cm is severe acute malnutrition** — red, treatment now; 11.5 to 12.5 cm is moderate; and in pregnancy, a MUAC below about 23 cm commonly flags nutritional risk. In hospitals, remember that illness raises nutritional needs exactly as appetite falls — tuberculosis, HIV, depression and post-operative recovery all waste people from the inside, so a falling weight on the chart is often the first symptom of something the patient has not complained about yet.",
      },
      {
        type: "clinical_pearl",
        body: "Weigh on admission and reweigh weekly. The number drifting downward between two readings is often the earliest warning on the ward — investigate it before the clothes hang loose.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a CHPS compound, an 18-month-old girl is measured with a MUAC band during a growth monitoring session. It reads 11.0 cm — the red zone. Yet she plays with her sister's shoe and smiles at you, and her mother says, 'She is fine, she is just small like her grandmother.'\n\nWhat does the red band actually say, and what must you do?\n\nAnswer: Below 11.5 cm means severe acute malnutrition — the measurement stands on its own, and a smiling child does not overrule it. She needs treatment per national protocol and urgent referral, not a wait for visible thinness; by the time a child looks starving to the eye, things are far advanced. The smile is why MUAC exists — it catches the quiet emergency before the eye does. You act now, kindly and firmly, and explain the number to her mother.",
      },
      {
        type: "memory_trick",
        body: "MUAC is a door, not a line: red means rescue now (under 11.5), yellow means watch closely, green means growing well. And in the ward, the weekly weight is the quiet alarm nobody silences.",
      },
      {
        type: "summary",
        body: "- Malnutrition means wrong amount or type: undernutrition (wasting, stunting, underweight, micronutrient gaps) and overnutrition, often side by side.\n- Pregnancy risks rise at both ends: obesity brings GDM, hypertension and caesarean difficulty; underweight brings low birth weight.\n- Screen simply: weight and BMI (underweight under 18.5); MUAC in children 6-59 months.\n- MUAC below 11.5 cm = severe acute malnutrition, even in a smiling child — treat and refer per protocol now.\n- In hospital, illness raises needs while appetite falls: reweigh weekly and act on drift.",
      },
    ],
    questions: [
      {
        topic: "Malnutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An 18-month-old measures 11.0 cm on the MUAC band but is alert and playing. How do you act?",
        options: [
          "Discharge with feeding advice, since a lively child cannot be severely malnourished",
          "Repeat the measurement at the next monthly session before deciding anything",
          "Treat as severe acute malnutrition now, per protocol and with referral — the reading stands even when the child smiles",
          "Record it as mild wasting and give a multivitamin",
        ],
        correctIndex: 2,
        explanation:
          "MUAC under 11.5 cm is the severe acute malnutrition threshold — a smiling child can still be severely malnourished, and the measurement catches what the eye misses. Waiting for visible wasting or the next visit is how quiet emergencies become loud ones.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Malnutrition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does the 'double burden' of malnutrition describe?",
        options: [
          "Having both malaria and malnutrition together",
          "A mother and child being malnourished at the same time",
          "Malnutrition caused twice by the same diet",
          "Undernutrition and overnutrition existing side by side in the same community or household",
        ],
        correctIndex: 3,
        explanation:
          "The double burden is underweight and stunted children living alongside overweight and obese adults — often in one household. Counselling therefore runs in both directions: quality and quantity for the deficit, balance for the excess.",
        courseSlug: "nutrition-dietetics",
      },
      {
        topic: "Malnutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a patient's weight chart one of the most valuable monitoring tools on a medical ward?",
        options: [
          "Weight confirms the fluid prescription daily",
          "Illness raises nutritional needs while appetite falls, so a drifting weight is often the earliest sign of trouble — infection, depression, or wasting illness",
          "Weight predicts the discharge date",
          "It replaces the need for vital signs",
        ],
        correctIndex: 1,
        explanation:
          "Sick patients burn more while eating less, and hospital diets plus poor appetite quietly drain them. A weight falling between weekly readings signals a problem often before any complaint is voiced — a cheap alarm worth heeding.",
        courseSlug: "nutrition-dietetics",
      },
    ],
    flashcards: [
      {
        topic: "Malnutrition",
        front: "State the MUAC colour thresholds for children 6-59 months.",
        back: "Below 11.5 cm — red, severe acute malnutrition, treat now; 11.5-12.5 cm — yellow, moderate; above 12.5 — green, growing well. In pregnancy, below about 23 cm commonly flags risk.",
      },
      {
        topic: "Malnutrition",
        front: "Define the double burden of malnutrition.",
        back: "Undernutrition (wasting, stunting, micronutrient gaps) and overnutrition (overweight, obesity) existing side by side in the same community — often the same household.",
      },
      {
        topic: "Malnutrition",
        front: "Why can a smiling child still be severely malnourished?",
        back: "Severe acute malnutrition is defined by measurement (MUAC under 11.5 cm), not by appearance or mood — the body compensates until late. The smile is exactly why we measure instead of guessing.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guideline: Updates on the Management of Severe Acute Malnutrition in Infants and Children",
        year: "2013",
      },
      {
        organization: "World Health Organization",
        title: "WHO Child Growth Standards",
        year: "2006",
      },
      {
        organization: "Ghana Ministry of Health / FAO",
        title: "Ghana Food-Based Dietary Guidelines",
        year: "2023",
      },
    ],
  },
];
