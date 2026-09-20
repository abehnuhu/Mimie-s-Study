import type { SeedFullLesson } from "../types";

// Y1 S1 batch B — 14 lessons:
//   anatomy-physiology-1: "Body Systems Overview" (4), "Homeostasis & Balance" (1)
//   foundations-nursing-1: "The Profession & the Process" (9)
// Anchors: prisma/seed-data/anchors/y1s1-b.json (titles copied character-for-character).

export const lessons: SeedFullLesson[] = [
  // ── 1. The Urinary System ─────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Urinary System: The Master Filter",
    description: "The kidneys filter, balance and fine-tune — the quiet system that controls the body's chemistry.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the parts of the urinary system and the order urine flows through them.",
      "Explain how nephrons filter, reabsorb and excrete, and list the kidneys' other jobs.",
      "Recognise low urine output as a warning sign and know to measure and report it.",
    ],
    tags: ["kidneys", "urinary", "urine output", "nephron", "fluid balance"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Meet the quietest system in the body. Two bean-shaped kidneys sit high at the back of the abdomen, one on each side, just below the ribs. Below them, two thin tubes called ureters drain urine into the bladder, a stretchy muscular bag that stores it until a convenient moment. Finally the urethra carries urine out.\n\nThe kidneys do far more than make urine. Every drop of your blood passes through them many times an hour. They filter out waste, hold back what the body still needs, and fine-tune the chemistry of your blood — water, salts, acids — moment by moment. In this lesson you meet the parts, follow the flow, and learn why the urine chart is one of the most important pages on your ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The working unit of the kidney is the nephron, and each kidney holds about a million of them. A nephron does three jobs in order: it filters the blood, reabsorbs the useful parts — glucose, water, salts — back into the bloodstream, and excretes the rest as urine. Your kidneys filter around 180 litres of fluid a day, yet you pass only 1–2 litres of urine. Almost everything is reabsorbed. Nothing the body still needs is thrown away.\n\nThe kidneys also help control blood pressure through the hormone renin, tell the bone marrow to make red blood cells using erythropoietin, and activate vitamin D for strong bones.\n\nOne detail matters greatly to you as a midwife: a woman's urethra is short — around 4 cm — and sits close to the anus and the birth canal. That is why urinary tract infections are common in women, and even more common in pregnancy. After birth, the body also sheds the extra fluid it carried for nine months, so women pass large amounts of urine on days two to five.",
      },
      {
        type: "clinical_pearl",
        body: "On the ward, urine output is a window into the kidneys' blood supply. If a woman is bleeding or becoming unwell, her kidneys protect the circulation by making less urine — output below about 30 mL per hour (roughly 400 mL per day) is a warning sign called oliguria. Measure it, report it, never ignore it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are a student midwife on the postnatal ward of a district hospital. Madam Efua delivered six hours ago after a moderately heavy blood loss. The midwife inserted a catheter to monitor her urine. You check the drainage bag: 60 mL over the last three hours — about 20 mL each hour. Her pulse is 104, her skin feels cool, the fundus is firm and her blood pressure is still 100/68.\n\nWhy is her urine output low, and what should you do?\n\nAnswer: Her kidneys are receiving less blood because the circulation is stretched after blood loss — the low urine output, rising pulse and cool skin all point the same way, even while the blood pressure still looks normal. This is compensation, and it buys time, not safety. Your job is to report the urine output and the observations to the midwife in charge now, keep fluids running exactly as ordered, and keep measuring. Urine output is one of the clearest signs of whether she is improving or slipping.",
      },
      {
        type: "memory_trick",
        body: "Picture a market woman sorting tomatoes. Good tomatoes — glucose, water, salts — go back into the basket (reabsorbed). Bruised ones — urea and extra water — go to the bin (urine). The kidney sorts roughly 180 litres a day and keeps almost every good tomato. The kidney never throws away what the body still needs.",
      },
      {
        type: "summary",
        body: "- The urinary system runs kidneys → ureters → bladder → urethra, in the order urine flows.\n- About a million nephrons in each kidney filter, reabsorb and excrete — filtering ~180 L a day but making only 1–2 L of urine.\n- Beyond filtering, the kidneys balance water and salts, manage acid–base, help blood pressure (renin), make red cells (erythropoietin) and activate vitamin D.\n- A woman's short urethra makes urinary tract infections common, especially in pregnancy.\n- Low urine output (under ~30 mL an hour) suggests the kidneys are short of blood — measure it and report it.",
      },
    ],
    questions: [
      {
        topic: "Kidney Functions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient with long-standing kidney disease has a low red blood cell count. Which lost kidney function best explains this?",
        options: [
          "The kidneys no longer release erythropoietin, the hormone that tells the bone marrow to make red blood cells",
          "The kidneys can no longer reabsorb glucose from the filtrate",
          "The kidneys no longer store iron for blood production",
          "The kidneys no longer filter waste from the blood",
        ],
        correctIndex: 0,
        explanation: "Erythropoietin (EPO) is released by healthy kidneys and signals the bone marrow to produce red blood cells. When kidney tissue is damaged, EPO falls and anaemia follows. Glucose loss would appear as sugar in the urine, and the kidneys do not store iron at all.",
      },
      {
        topic: "Urinary Tract Infection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are urinary tract infections more common in women than in men?",
        options: [
          "Women have two ureters instead of one",
          "The female urethra is short and lies close to the anus and birth canal, so bacteria reach the bladder easily",
          "The female bladder is smaller and empties less often",
          "Women's urine is naturally more acidic",
        ],
        correctIndex: 1,
        explanation: "A woman's urethra is only about 4 cm long and sits near the anus and birth canal, so bacteria have a short journey to the bladder. Men and women have the same number of ureters, and bladder size and urine acidity are not the reason.",
      },
      {
        topic: "Urine Output",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On the postnatal ward, a catheter shows 120 mL of urine over six hours. What is this finding called, and what should you do?",
        options: [
          "Polyuria — encourage more fluids and recheck tomorrow",
          "Normal postpartum diuresis — no action needed",
          "Oliguria — report to the midwife in charge, because the kidneys may be receiving too little blood",
          "Anuria — remove the catheter immediately",
        ],
        correctIndex: 2,
        explanation: "120 mL in six hours is about 20 mL per hour — oliguria. After birth this can mean the kidneys are being protected because circulating volume is low, for example after bleeding. Report it, monitor the observations, and follow the care plan; true postpartum diuresis produces large amounts of urine, not small ones.",
      },
    ],
    flashcards: [
      {
        topic: "Urinary System",
        front: "Name the parts of the urinary system in the order urine flows.",
        back: "Kidneys → ureters → bladder → urethra.",
      },
      {
        topic: "Urine Output",
        front: "What is oliguria, and what figure suggests it on the ward?",
        back: "Urine output below about 400 mL in 24 hours, or under ~30 mL per hour. It suggests the kidneys are receiving too little blood — measure it and report it.",
      },
      {
        topic: "Kidney Functions",
        front: "Besides filtering, name three other jobs of the kidneys.",
        back: "Water and salt balance, acid–base balance, blood pressure control (renin), red blood cell production (erythropoietin), and vitamin D activation — any three.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — The Urinary System",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2. The Nervous System ─────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Nervous System: The Body's Control Network",
    description: "Neurons, reflexes and the brain — the electrical messaging system running everything, including you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the divisions of the nervous system and the direction sensory and motor messages travel.",
      "Explain how a neuron carries a signal and how the reflex arc bypasses the brain.",
      "Distinguish sympathetic from parasympathetic activity and link sympathetic signs to ward observations.",
      "Recognise why newborn reflexes are checked and what an asymmetric reflex may mean.",
    ],
    tags: ["nervous system", "neurons", "reflex arc", "autonomic", "newborn reflexes"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The nervous system is the body's control network — the fastest messaging service you own. It has two great divisions. The central nervous system (CNS) is the headquarters: the brain and the spinal cord. The peripheral nervous system (PNS) is the courier service: the nerves that run to every corner of the body, carrying messages in both directions. Sensory nerves bring news inward — heat, pain, a full bladder. Motor nerves carry orders outward — contract, relax, grip.\n\nFor a midwife, this system is personal. It runs the contractions a woman feels, the stress her body shows, and every reflex you will check on a newborn baby. When you assess a patient's level of consciousness, you are assessing the brain. When you watch a baby startle at a sound and both arms spring out, the whole network has just answered you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The message carrier is the neuron. Its branching dendrites receive signals; the long axon carries them away; and at the far end the message crosses a tiny gap called a synapse, using a chemical courier — a neurotransmitter. Some axons are wrapped in a fatty coat called myelin, which lets signals travel far faster, like a paved road in a good neighbourhood.\n\nFastest of all is the reflex arc — the body's shortcut. Touch something hot and your hand pulls back before you consciously feel the burn. The message ran sensory neuron → spinal cord → motor neuron → muscle. The brain was informed, but not consulted, because speed saves skin.\n\nThe autonomic nervous system runs your organs silently, in two moods. Sympathetic is emergency mode — fight or flight — racing the heart, sweating the skin, widening the airways. Parasympathetic is rest and digest — slow pulse, comfortable gut. A frightened or bleeding woman will show sympathetic signs on the ward: pale, sweaty, fast pulse, wide eyes.",
      },
      {
        type: "clinical_pearl",
        body: "Pale skin, sweat and a pulse racing above 100 is the sympathetic system raising an alarm. On a postnatal ward, never settle for 'she is just frightened' — fear is real, but bleeding kills. Check the fundus, check the pads, check the pulse again, and report. Rule out the dangerous cause first.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are helping with newborn checks at a CHPS compound an hour after a difficult delivery. The baby feeds sleepily and the colour is pink. But when you test the Moro reflex, both arms should spring out — the right arm does, and the left stays still at the baby's side. You also notice the baby holds that left arm close and does not move it.\n\nWhat might an asymmetric Moro reflex tell you, and what happens next?\n\nAnswer: A Moro reflex that is missing on one side suggests the problem is not in the brain but somewhere on that side's pathway — classically a fractured clavicle or an injury to the brachial plexus nerves, both known complications of a difficult delivery such as shoulder dystocia. Handle the arm gently, support it as instructed, and report immediately for review by the senior midwife or the referring clinician. Document exactly what you saw and when — that quiet note travels with the baby.",
      },
      {
        type: "memory_trick",
        body: "Two hooks for two systems. For the reflex arc, think 'hot pot': your hand is off the handle before your brain even knows you touched it — the spinal cord did that. For the autonomic moods, pair S with P: Sympathetic = Survival; Parasympathetic = Peace. Survival speeds the pulse; Peace slows it back down.",
      },
      {
        type: "summary",
        body: "- The nervous system divides into CNS (brain and spinal cord) and PNS (the nerves), with sensory messages travelling in and motor orders travelling out.\n- A neuron carries signals from dendrites along the axon, across a synapse, using neurotransmitters; myelin speeds the journey.\n- The reflex arc — receptor, sensory neuron, spinal cord, motor neuron, effector — bypasses the brain to save time.\n- Sympathetic activity is survival mode: fast pulse, pale sweaty skin, wide eyes. Parasympathetic is rest and digest.\n- Newborn reflexes (Moro, rooting, sucking, grasp) test the nervous system — an asymmetric Moro suggests local injury and must be reported.",
      },
    ],
    questions: [
      {
        topic: "Reflex Arc",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You touch a hot pot and your hand pulls back before you feel pain. Which path did the message take?",
        options: [
          "Sensory neuron → spinal cord → motor neuron → muscle",
          "Sensory neuron → brain → motor neuron → muscle",
          "Motor neuron → spinal cord → sensory neuron → muscle",
          "Sensory neuron → brain → spinal cord → muscle",
        ],
        correctIndex: 0,
        explanation: "Withdrawal reflexes are processed in the spinal cord so the response happens at top speed; the brain receives the news afterwards. Routing through the brain first would cost precious time and more injury.",
      },
      {
        topic: "Autonomic Nervous System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal woman is pale, sweating, and her pulse is 118. Which division of the autonomic nervous system is active, and what should you rule out first?",
        options: [
          "Parasympathetic — rule out constipation",
          "Sympathetic — rule out bleeding before blaming fear",
          "Somatic — rule out nerve injury",
          "Parasympathetic — rule out overfeeding",
        ],
        correctIndex: 1,
        explanation: "Pale sweaty skin with a racing pulse is classic sympathetic fight-or-flight activity. Fear and pain can cause it, but on a postnatal ward bleeding must be excluded first — check the fundus and the blood loss, then report your findings.",
      },
      {
        topic: "Neuron Structure",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the job of the myelin sheath around an axon?",
        options: [
          "It manufactures neurotransmitters at the synapse",
          "It physically joins two neurons into one",
          "It insulates the axon so signals travel much faster",
          "It stores oxygen for the neuron",
        ],
        correctIndex: 2,
        explanation: "Myelin is a fatty wrapping that insulates the axon and dramatically speeds the electrical signal. Neurotransmitters are made at the synapse, neurons remain separate cells, and myelin stores nothing.",
      },
    ],
    flashcards: [
      {
        topic: "Nervous System",
        front: "CNS or PNS — name the parts of each.",
        back: "Central nervous system: brain and spinal cord. Peripheral nervous system: all the nerves carrying messages between the CNS and the rest of the body.",
      },
      {
        topic: "Reflex Arc",
        front: "List the five stations of the reflex arc in order.",
        back: "Receptor → sensory neuron → spinal cord (integration) → motor neuron → effector, such as a muscle.",
      },
      {
        topic: "Autonomic Nervous System",
        front: "A patient is pale, sweaty and tachycardic — which autonomic mood is this, and what must you rule out on a postnatal ward?",
        back: "Sympathetic — survival mode. Rule out bleeding before settling for fear or pain.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — The Nervous System and Nervous Tissue",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3. The Endocrine System ───────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "The Endocrine System: Messengers in the Blood",
    description: "Hormones travel slowly but change everything — growth, metabolism, stress and reproduction.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain how hormones travel and why they act only on cells with matching receptors.",
      "Contrast nervous and endocrine messaging in speed and duration.",
      "Name the major glands and the hormones that matter most in midwifery.",
      "Explain gestational diabetes in words a mother can understand.",
    ],
    tags: ["hormones", "endocrine", "oxytocin", "prolactin", "gestational diabetes"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "While nerves send messages like phone calls, the endocrine system posts letters. Glands — small factories such as the thyroid in the neck, the adrenals above the kidneys, the pancreas, the ovaries and the pituitary in the brain — release hormones straight into the bloodstream. The blood carries those chemical letters everywhere it goes. But a letter only matters to the one who can read it: a hormone acts only on cells carrying its matching receptor, like a lock answering its own key.\n\nEndocrine messages are slower than nerve messages but last far longer. Growth, puberty, metabolism, pregnancy and milk production are all endocrine stories. So is the pregnancy test you will use thousands of times in your career.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The pituitary, hanging just below the brain, is the conductor of the orchestra: its hormones order the other glands around. In the neck, the thyroid sets the speed of metabolism. The adrenal glands pour out cortisol for long-term stress and adrenaline for instant alarm. In the pancreas, insulin lowers blood glucose after meals while glucagon raises it between them.\n\nThen the hormones you will meet daily as a midwife. Oestrogen builds the womb lining and shapes the pregnancy. Progesterone quiets the uterus and holds a pregnancy in place. Oxytocin drives contractions in labour and squeezes milk toward the nipple afterwards. Prolactin makes the milk in the first place. And the placenta makes hCG — human chorionic gonadotropin — the hormone a urine pregnancy test detects.\n\nNotice how hormones travel: from gland to blood to distant target. No duct, no wire — just chemistry riding the circulation until it finds its lock.",
      },
      {
        type: "clinical_pearl",
        body: "Two breastfeeding hormones are easy to mix up. Prolactin makes the milk; oxytocin delivers it — and the same oxytocin squeezes the uterus after birth. That is why a breastfeeding baby is good medicine for the mother: every feed helps the womb clamp down and reduces bleeding.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At an antenatal clinic in your district hospital, Madam Abena is 28 weeks into her first pregnancy. She has just been told her screening blood sugar is high. She looks close to tears. 'How? I don't take sugar in my tea!' she says. 'Nobody in my family has diabetes.' She turns to you, the student, for an explanation she can understand.\n\nWhat causes diabetes in a woman who never had it, and how do you explain it kindly?\n\nAnswer: This is gestational diabetes, and it is not her fault. The placenta makes hormones that help the baby grow but also make the mother's body resist her own insulin, so glucose climbs in the blood. Her pancreas works harder and harder, and in some women it cannot keep up. Explain it in her words: the pregnancy itself is blocking her sugar door. Then support the plan — the diet advice, the walks after meals, the glucose checks, the extra clinic visits — and reassure her that with follow-up, most mothers and babies do well.",
      },
      {
        type: "memory_trick",
        body: "Phone call versus letter: the nervous system phones — fast, brief, gone. The endocrine system posts letters — slower to arrive, but the message stays in the house for hours. And for the breastfeeding pair: Prolactin = Production; Oxytocin = Outflow.",
      },
      {
        type: "summary",
        body: "- Glands pour hormones into the blood; only cells carrying the matching receptor respond — lock and key.\n- The pituitary conducts the orchestra; the thyroid sets metabolic speed; the pancreas balances glucose with insulin and glucagon.\n- Oestrogen and progesterone run the cycle and hold the pregnancy; oxytocin drives contractions and milk ejection; prolactin makes the milk.\n- hCG from the placenta is the hormone a urine pregnancy test detects.\n- Gestational diabetes happens because placental hormones make the mother resist insulin — it is physiology, not blame.",
      },
    ],
    questions: [
      {
        topic: "Hormone Action",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does a hormone affect only certain cells in the body?",
        options: [
          "Only cells carrying the matching receptor respond, like a lock answering its key",
          "Hormones are carried only to their target organs inside special ducts",
          "All cells respond, but only target cells survive the message",
          "Hormones dissolve all cell membranes except those of target organs",
        ],
        correctIndex: 0,
        explanation: "Hormones travel everywhere the blood goes, but only cells with the matching receptor can respond. Ducts belong to other glands — the endocrine system is defined by releasing its messengers directly into the bloodstream.",
      },
      {
        topic: "Reproductive Hormones",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which hormone both strengthens uterine contractions in labour and ejects milk during breastfeeding?",
        options: [
          "Prolactin",
          "Oxytocin",
          "Progesterone",
          "Oestrogen",
        ],
        correctIndex: 1,
        explanation: "Oxytocin from the posterior pituitary contracts the uterus in labour and drives the milk let-down reflex during feeds — which is why suckling also helps the womb clamp down after birth. Prolactin makes the milk; progesterone quiets the uterus; oestrogen builds the lining.",
      },
      {
        topic: "Pregnancy Testing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A urine pregnancy test turns positive because it detects which hormone, and where does it come from?",
        options: [
          "Prolactin, made by the breast",
          "Insulin, made by the pancreas",
          "hCG, made by the developing placenta",
          "Oestrogen, made by the ovary",
        ],
        correctIndex: 2,
        explanation: "hCG — human chorionic gonadotropin — is produced by the developing placenta and passes into the mother's blood and urine. Tests for early pregnancy are built to detect it.",
      },
    ],
    flashcards: [
      {
        topic: "Endocrine System",
        front: "How do hormones reach their target cells?",
        back: "They travel in the bloodstream; only cells carrying the matching receptor respond — lock and key.",
      },
      {
        topic: "Breastfeeding Hormones",
        front: "Which hormone makes breast milk, and which pushes it out?",
        back: "Prolactin makes the milk (production); oxytocin ejects it (let-down) and also contracts the uterus.",
      },
      {
        topic: "Pregnancy Testing",
        front: "What hormone does a urine pregnancy test detect, and where does it come from?",
        back: "hCG — human chorionic gonadotropin, made by the developing placenta and passed into the mother's blood and urine.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — The Endocrine System",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Diagnostic criteria and classification of hyperglycaemia first detected in pregnancy",
        year: "2013",
        note: "Educational source — verify current edition and follow local protocols.",
      },
    ],
  },

  // ── 4. Reproductive System: A First Look ──────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Body Systems Overview",
    lessonTitle: "Reproductive System: A First Look",
    description: "Your first gentle meeting with the system you'll spend your whole career caring for.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Name the parts of the female reproductive tract and describe the job of each.",
      "Outline the events of a 28-day cycle, including ovulation and implantation.",
      "Locate the cervix and fundus and say why both matter in midwifery care.",
    ],
    tags: ["reproductive system", "menstrual cycle", "uterus", "ovulation", "anatomy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Today you meet the system you will spend your whole career caring for. Take it slowly — these parts will become as familiar to you as your own hands. The external parts together are called the vulva. Inside, the path runs: vagina, cervix, uterus, two fallopian tubes, and two ovaries.\n\nEach has a job. The vagina is the birth canal and the route for menstrual flow. The cervix is the mouth of the womb — closed and firm in pregnancy, and the part that opens in labour. The uterus is a remarkable muscle bag, roughly the size of your fist before pregnancy, where a baby grows. The fallopian tubes reach out towards the ovaries with finger-like fimbriae. The ovaries hold a woman's lifetime supply of eggs and make her hormones. The male side is simpler: the testes make sperm, released through the penis at intercourse.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Follow one cycle, about 28 days long. On days one to five, the womb sheds its lining — that is menstruation. Meanwhile hormones instruct an ovary to ripen one egg inside its own follicle. Around day 14 comes ovulation: the follicle bursts, and the fimbriae sweep the egg into the fallopian tube. If sperm is waiting there — or arrives within about a day — fertilisation happens in the tube, not in the womb. The new embryo then drifts down into the uterus over several days and embeds in the soft, hormone-prepared lining: implantation.\n\nIf no sperm meets the egg, the egg dies within about a day, hormone levels fall, the lining sheds, and the cycle begins again.\n\nThis is also your first map of labour: the cervix you will feel during vaginal examination, the muscle you will watch contracting, the birth canal the baby must pass through. Anatomy and midwifery meet right here.",
      },
      {
        type: "clinical_pearl",
        body: "Two landmarks you will use every working day. The cervix is what your fingers find during a vaginal exam in labour — you measure its opening in centimetres. The fundus is the top of the womb felt through the mother's abdomen; after birth, a fundus that is firm and central means the muscle has clamped down and bleeding is controlled.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At her first antenatal visit, 19-year-old Sandra, pregnant for the first time, asks shyly: 'Please, is it true the baby is inside my stomach, eating my food?'\n\nHow do you answer her in plain, respectful words — and where is the baby actually growing?\n\nAnswer: Teach her with confidence and warmth: the baby grows in the uterus, the womb, a stretchy muscle organ sitting low in the belly between the bladder and the rectum — not in the stomach, which handles food. The placenta, joined to the baby by the cord, brings oxygen and nourishment from the mother's blood. Then add the good news: that is why we measure from the pubic bone to the top of the womb at every visit — the growing height tells us the baby is growing well. A woman who understands her body becomes a partner in her own care, and teaching her is part of yours.",
      },
      {
        type: "memory_trick",
        body: "The egg's journey is three stops: Ovary (released) → Tube (fertilised) → Uterus (implanted). Say it as O-T-U — On To Uterus. And keep the cycle's quiet headline: ovulation sits near day 14 of a 28-day cycle, and fertilisation happens in the tube, never in the womb.",
      },
      {
        type: "summary",
        body: "- The female tract runs vagina → cervix → uterus → fallopian tubes → ovaries, each with its own job.\n- The uterus grows the baby: myometrium contracts, endometrium lines.\n- Eggs live in the ovaries; fimbriae sweep the released egg into the tube, where fertilisation usually happens.\n- In a 28-day cycle the lining sheds days 1–5, ovulation nears day 14, and the lining rebuilds for a possible pregnancy.\n- A baby grows in the uterus, fed through the placenta and cord — simple, honest teaching women remember.",
      },
    ],
    questions: [
      {
        topic: "Fertilisation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where does fertilisation of the egg most often take place?",
        options: [
          "In the fallopian tube",
          "In the uterus",
          "On the ovary",
          "In the cervix",
        ],
        correctIndex: 0,
        explanation: "The egg is swept into the fallopian tube at ovulation, and sperm meets it there. The resulting embryo travels on to the uterus, where it implants in the lining days later.",
      },
      {
        topic: "Cervix",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a vaginal examination in labour, what are you measuring when you report 'the woman is 6 centimetres'?",
        options: [
          "The length of the vagina",
          "The opening of the cervix",
          "The width of the fundus",
          "The baby's head circumference",
        ],
        correctIndex: 1,
        explanation: "Cervical dilation — the opening of the mouth of the womb — is measured in centimetres, from closed (0) to fully open (10). The vagina's length and the fundus are not measured this way.",
      },
      {
        topic: "Uterine Layers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which layer of the uterus provides the power for contractions during labour?",
        options: [
          "The myometrium, the muscle wall",
          "The endometrium, the inner lining",
          "The perimetrium, the outer covering",
          "The fimbriae at the tube openings",
        ],
        correctIndex: 0,
        explanation: "The myometrium is the thick muscle coat whose contractions shorten and open the cervix and push the baby out. The endometrium is the lining that hosts the pregnancy and sheds as menstruation; the fimbriae belong to the tubes.",
      },
    ],
    flashcards: [
      {
        topic: "Reproductive Anatomy",
        front: "Name the female internal parts, from outside in.",
        back: "Vagina, cervix, uterus, fallopian tubes, ovaries.",
      },
      {
        topic: "Conception",
        front: "Where is the egg fertilised, and where does the embryo implant?",
        back: "Fertilisation: in the fallopian tube. Implantation: in the endometrium, the lining of the uterus.",
      },
      {
        topic: "Postnatal Check",
        front: "After birth, what are you feeling when you check the fundus, and what does 'firm and central' mean?",
        back: "The top of the uterus through the abdomen. Firm and central means the muscle has clamped down — bleeding is being controlled.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — The Reproductive System",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5. Negative Feedback ──────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-1",
    moduleTitle: "Homeostasis & Balance",
    lessonTitle: "Negative Feedback: The Body's Thermostat",
    description: "The elegant loops that reverse change and restore balance — the reason healthy bodies self-correct.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Define negative feedback and explain how it holds body values at their set points.",
      "Walk through a full loop — glucose or temperature — naming receptor, control centre and effector.",
      "Contrast negative feedback with the positive feedback of labour.",
      "Apply the warm chain to protect a newborn who cannot yet hold its own temperature.",
    ],
    tags: ["negative feedback", "homeostasis", "thermoregulation", "set point", "warm chain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your body holds its inner conditions near fixed targets — a set point for temperature, for glucose, for blood pressure, for water. When something drifts away from the set point, the body does not panic and does not improvise. It runs a loop, and the loop pushes the value home.\n\nThis is negative feedback, and it works like the thermostat on a wall in a Tamale house. Set the fan to cool the room to 26 degrees. If the room heats past 26, the fan comes on; when the room returns to 26, the fan switches off. The response — cooling — cancels the problem — heating. That cancelling is the negative in negative feedback, and it is the body's most used, most dependable habit.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every loop has three stations. A receptor senses the change. A control centre compares the reading with the set point and decides. An effector carries out the correction — and the result feeds back to switch the loop off.\n\nRun it with glucose. You eat a heavy plate of banku. Blood glucose climbs above its set point; the pancreas senses it and releases insulin, which moves glucose out of the blood into cells. Glucose returns to its set point and insulin release slows. Undo complete.\n\nRun it with cold. Skin receptors report falling temperature to the hypothalamus, the body's thermostat in the brain. It orders shivering muscles to generate heat and skin vessels to narrow and keep warmth in. Warm again, the shivering stops.\n\nPositive feedback is the rare opposite — it amplifies change instead of reversing it. Labour's oxytocin loop is the great example, ending only when the baby is born. Healthy bodies run on negative feedback almost all the time.",
      },
      {
        type: "clinical_pearl",
        body: "A newborn's thermostat is brand new and easily overwhelmed — a wet baby loses heat fast. In the first hours of life, you are the baby's negative feedback: dry the baby, place skin-to-skin on the mother's chest, cover with a warm cloth and a cap. Follow the warm chain, and check the temperature again.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You attend a birth at a CHPS compound on a harmattan morning. Thirty minutes after delivery you dried and wrapped the baby. Later you check: the temperature reads 35.6 °C, the feet feel cool, and the baby is sleepy and not rooting well.\n\nWhat is happening, and what do you do first?\n\nAnswer: This baby is cold — hypothermia. The newborn's own negative feedback loop is not yet strong enough to hold the set point, and heat is being lost to the dry, cool air. Your first moves are the warm chain: change the damp cloth for a dry one, place the baby skin-to-skin on the mother's chest under a blanket, cover the head with a cap, and keep the room free of draughts. Recheck the temperature in 30 minutes. If it has not risen, or the baby still feeds poorly, report to the midwife in charge for review — a cold baby can quickly become a sick baby.",
      },
      {
        type: "memory_trick",
        body: "Negative feedback is the body's undo button: whatever drifts away, the loop undoes. And every loop runs sense it → compare it → correct it. If you can say those six words, you can explain any loop an examiner throws at you.",
      },
      {
        type: "summary",
        body: "- Negative feedback reverses any change that pulls a value away from its set point — the body's undo button.\n- Every loop runs receptor → control centre → effector, and the correction itself switches the loop off.\n- Glucose rises after a meal; insulin returns it; insulin then slows. Cold triggers shivering and narrowed skin vessels.\n- The hypothalamus is the temperature control centre; the pancreas runs the glucose loop.\n- Newborns lose heat easily — dry, warm, cover, and recheck: you are their thermostat at first.",
      },
    ],
    questions: [
      {
        topic: "Negative Feedback",
        type: "MCQ",
        difficulty: "Easy",
        stem: "After a meal, blood glucose rises, insulin brings it back down, and then insulin release slows. Why does insulin release slow?",
        options: [
          "Because the glucose has returned to its set point, and the loop switches off",
          "Because insulin runs out and must be remade",
          "Because glucagon immediately replaces it",
          "Because digestion stops all hormone release",
        ],
        correctIndex: 0,
        explanation: "This is the feedback part of the loop: the correction itself turns the response down. The body has reached its set point, so there is nothing left to correct — insulin is not a store that runs dry.",
      },
      {
        topic: "Feedback Loop Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which is the correct order of stations in a negative feedback loop?",
        options: [
          "Effector → receptor → control centre",
          "Receptor → effector → brain",
          "Receptor → control centre → effector",
          "Control centre → receptor → effector",
        ],
        correctIndex: 2,
        explanation: "The loop always runs the same way: the receptor senses, the control centre compares with the set point and decides, and the effector carries out the correction. Any other order breaks the logic — nothing can be corrected before it is detected.",
      },
      {
        topic: "Thermoregulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which part of the brain compares body temperature with the set point and orders shivering or sweating?",
        options: [
          "The cerebellum",
          "The hypothalamus",
          "The medulla oblongata",
          "The pituitary gland",
        ],
        correctIndex: 1,
        explanation: "The hypothalamus is the body's thermostat. The cerebellum coordinates movement, the medulla runs breathing and heart rhythms, and the pituitary runs hormones — but temperature control lives in the hypothalamus.",
      },
    ],
    flashcards: [
      {
        topic: "Negative Feedback",
        front: "Define negative feedback in one sentence.",
        back: "A control loop that reverses a change and returns a value to its set point — the body's undo button.",
      },
      {
        topic: "Feedback Loop Anatomy",
        front: "Name the three stations of the loop.",
        back: "Receptor senses the change; control centre compares it with the set point; effector carries out the correction.",
      },
      {
        topic: "Warm Chain",
        front: "A newborn's temperature is 35.6 °C. What are your first actions?",
        back: "Warm chain: dry cloth, skin-to-skin on the mother, cover with a cap, keep the room warm, and recheck the temperature in 30 minutes — you are the baby's thermostat.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e — Homeostasis",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
        note: "Educational source — verify current edition and follow local protocols.",
      },
    ],
  },

  // ── 6. The Nursing Profession ─────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "The Nursing Profession: What You're Joining",
    description: "A warm welcome to the profession — its history, its standards and the trust people place in you.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe what makes nursing and midwifery a profession rather than a job.",
      "Identify the Nursing and Midwifery Council of Ghana as the regulator of practice.",
      "State the core professional values and the promises behind the ICN Code of Ethics.",
      "Apply confidentiality in everyday situations, on and off the ward.",
    ],
    tags: ["profession", "nursing and midwifery council", "ethics", "confidentiality", "values"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Welcome to the profession. A job pays you for your hours; a profession holds you to a standard. Nursing and midwifery earned the title of profession the hard way: long training, examinations, licensure, a code of ethics, and accountability to the public — standards nobody is allowed to skip.\n\nIn Ghana, the Nursing and Midwifery Council regulates who may practise. Pass your exams, register with the Council, and only then may you lawfully call yourself a nurse or midwife and care for the public. Every qualified midwife you admire carries that registration. From Florence Nightingale's lamp-lit wards to the labour wards of Accra and Bawku, the idea has stayed the same: skilled hands, trained minds, and trust.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "What are you actually joining? A profession built on values you will be examined on and will live by. Compassion — care that feels, not just functions. Integrity — truth in your charting, your words and your dealings. Confidentiality — what you see on the ward stays on the ward. Accountability — you own your actions and their consequences. Respect for patients, families and colleagues. And lifelong learning, because midwifery knowledge changes and you must change with it.\n\nThe International Council of Nurses' Code of Ethics says it plainly: nurses care with respect, protect dignity and confidentiality, act with integrity, and keep their competence current.\n\nThen there is trust itself. People meet you on the worst days of their lives — in pain, exposed, frightened. They allow you close because of the badge you wear, and that badge is a promise. As a student you work under supervision, but the values apply from your very first day.",
      },
      {
        type: "clinical_pearl",
        body: "Everything on the ward is confidential — not just the diagnosis. Even confirming that a neighbour was your patient is a breach. Discuss patients only for care, only in the right place, and never by name outside the ward.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On your way to the market on Saturday, wearing your student uniform, a neighbour greets you warmly. 'Ei, my sister! They say our Madam Adjoa delivered at your hospital this week. Is it true she lost plenty blood? My wife wants to visit her.'\n\nWhat can you tell him, and why?\n\nAnswer: You tell him kindly but clearly that you cannot discuss hospital patients — not who was admitted, not what happened. Confirming even the delivery is a breach of confidentiality, and passing it on only spreads it further. Your registration and your school's code both bind you to this, and patients trust the uniform precisely because it keeps secrets. Offer what you can honestly: when she is home, let the family ask her themselves — a visit will surely cheer her. Staying warm while staying silent is one of the first professional skills you will master.",
      },
      {
        type: "memory_trick",
        body: "Hold the badge on with CARE: Compassion, Accountability, Respect, Ethics. Four cords, one promise — and if any one cord breaks, the badge falls.",
      },
      {
        type: "summary",
        body: "- Nursing is a profession: standardised training, licensure, a code of ethics and public accountability.\n- The Nursing and Midwifery Council of Ghana registers and regulates nurses and midwives — no registration, no practice.\n- Core values: compassion, integrity, confidentiality, accountability, respect and lifelong learning.\n- The ICN Code of Ethics: care with respect, protect dignity and confidentiality, act with integrity, keep learning.\n- Confidentiality includes the fact of admission itself — guard it even at the market, especially in uniform.",
      },
    ],
    questions: [
      {
        topic: "Regulation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which body regulates and licenses nurses and midwives to practise in Ghana?",
        options: [
          "The Nursing and Midwifery Council of Ghana",
          "The Ghana Health Service",
          "The Ministry of Finance",
          "The university that trained them",
        ],
        correctIndex: 0,
        explanation: "The Nursing and Midwifery Council of Ghana sets standards, runs licensing examinations and keeps the professional register. The Ghana Health Service is a major employer, not the regulator, and universities certify training but do not license practice.",
      },
      {
        topic: "Professionalism",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of features best distinguishes a profession from an ordinary job?",
        options: [
          "Standardised education, licensure, a code of ethics and public accountability",
          "A monthly salary and annual leave",
          "Working nights and weekends",
          "Wearing a uniform to work",
        ],
        correctIndex: 0,
        explanation: "A profession is defined by specialised preparation, mandatory licensure, an ethical code and accountability to the public — not by pay, shift patterns or clothing. Plenty of jobs share the others; only the first set makes a profession.",
      },
      {
        topic: "Confidentiality",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A neighbour asks whether a certain woman was admitted on your ward. What is the correct professional response?",
        options: [
          "Confirm she was admitted but share no details",
          "Refuse politely — you cannot discuss any patient, including whether they were admitted",
          "Share only the diagnosis, not the name",
          "Discuss it, since the neighbour already knows the woman",
        ],
        correctIndex: 1,
        explanation: "Confidentiality covers the fact of care itself. Even confirming admission gives away private information, and 'already knowing her' changes nothing. A warm, polite refusal protects the patient and the profession's trust.",
      },
    ],
    flashcards: [
      {
        topic: "Regulation",
        front: "Which organisation licenses nurses and midwives in Ghana?",
        back: "The Nursing and Midwifery Council of Ghana — it sets standards, examines and keeps the register.",
      },
      {
        topic: "Professional Values",
        front: "Name four core professional values.",
        back: "Compassion, integrity, confidentiality, accountability — with respect and lifelong learning alongside.",
      },
      {
        topic: "Confidentiality",
        front: "What does the badge on your uniform represent?",
        back: "A promise of competence and confidentiality — the public's trust, worn where everyone can see it.",
      },
    ],
    sources: [
      {
        organization: "International Council of Nurses",
        title: "The ICN Code of Ethics for Nurses",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of conduct and standards of practice for nurses and midwives in Ghana",
        note: "Educational source — verify the current version with the Council.",
      },
    ],
  },

  // ── 7. The Role of the Nurse and Midwife ──────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "The Role of the Nurse and Midwife",
    description: "Caregiver, advocate, teacher, detective — the many hats you'll wear and how they fit together.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "List the main roles of the nurse-midwife and give an everyday example of each.",
      "Explain advocacy and practise presenting a concern to the midwife in charge.",
      "Describe the midwife's scope of practice within the Ghanaian health system.",
    ],
    tags: ["roles", "advocacy", "scope of practice", "midwife", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask a child what a nurse does and she may say 'gives injections.' You now know better. On a single shift you will wear many hats: caregiver, communicator, teacher, advocate, counsellor, coordinator, record-keeper — and sometimes the detective whose noticing saves a life.\n\nAs a caregiver you deliver the clinical care itself: observations, medications, deliveries, dressings, comfort. As a communicator you listen, explain, hand over and document. As a teacher you turn knowledge into health — breastfeeding, family planning, immunisation dates, danger signs. As a counsellor you sit with fear and grief. As a coordinator you connect the pieces: referrals, the pharmacy, the laboratory, the family. And as a researcher, even at student level, you keep asking what the evidence says.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Two of these hats deserve a closer look because they surprise new students.\n\nThe first is advocate. To advocate is to speak for someone whose voice is too weak, too frightened, or too junior to be heard. On a Ghanaian ward, that is often the labouring woman. When you notice her pulse creeping up and the family is debating whether to wait for morning to travel, advocacy is what you do next: bring the midwife in charge, present what you found, and push for the decision the woman's body is begging for.\n\nThe second is detective. Skilled midwives read the ordinary signs that others pass over: the quiet woman who answered 'fine' but did not eat; the fundus a finger higher than an hour ago; the baby feeding less since midnight. Noticing is a role, not luck.\n\nYour midwifery scope, in the Ghanaian system, spans antenatal care, skilled delivery, postnatal and newborn care, family planning and health education — with a sharp eye for danger signs and swift referral when they appear.",
      },
      {
        type: "clinical_pearl",
        body: "Escalation is a role, not a failure. When you cannot fix what you have found, moving it fast to the midwife in charge is clinical care. Say what you saw, say what you are worried about, and say it early.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are on outreach with a senior midwife at a CHPS compound. A woman has laboured since midnight; contractions now come every five minutes and are strong, but her pulse is 110 and she is exhausted. The compound cannot manage a complication if one comes. The family is hesitant: 'Let us wait for morning; the road is bad at night.'\n\nWhich role must lead now, and what does it look like in practice?\n\nAnswer: Advocate and coordinator, working together. Your findings — a tiring mother with a rising pulse, far from backup — belong in front of the midwife in charge immediately, not filed for later. Present the observations plainly, support the discussion of early referral to the district hospital while travel is still possible, and help the family weigh the real risk of waiting against the discomfort of the road. Document the discussion. The woman's body has already voted; your job is to make sure that vote is heard.",
      },
      {
        type: "memory_trick",
        body: "You must CATCh your roles: Caregiver, Advocate, Teacher, Counsellor — with the Coordinator quietly holding them all together. Miss one and care leaks.",
      },
      {
        type: "summary",
        body: "- The nurse-midwife wears many hats: caregiver, communicator, teacher, advocate, counsellor, coordinator, record-keeper, researcher.\n- Advocacy means speaking up when the patient's own voice cannot — and it is clinical care, not attitude.\n- Detective work is noticing the quiet signs others pass over: appetite, tone, trends.\n- The midwife's span: antenatal care, skilled delivery, postnatal and newborn care, family planning, health education.\n- Danger signs belong to the referral system — recognise fast, escalate fast.",
      },
    ],
    questions: [
      {
        topic: "Advocacy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient's family is delaying a referral the patient urgently needs. Which role is the nurse-midwife performing when she raises it with the charge midwife?",
        options: [
          "Advocate",
          "Recorder",
          "Researcher",
          "Pharmacist",
        ],
        correctIndex: 0,
        explanation: "Advocacy is speaking and acting on the patient's behalf when her own voice cannot move the decision — exactly what raising an urgent referral with the charge midwife achieves.",
      },
      {
        topic: "Role of the Midwife",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which action best demonstrates the advocate role for an exhausted labouring woman with a rising pulse whose family is hesitant to travel?",
        options: [
          "Respecting the family's wishes and waiting for morning",
          "Presenting the findings to the midwife in charge and supporting an urgent discussion of referral",
          "Telling the woman to decide alone so the family is bypassed",
          "Documenting the pulse and reviewing it at the next scheduled check",
        ],
        correctIndex: 1,
        explanation: "Advocacy is active and immediate: the concerning findings go to the person with power to act, together with support for the referral the woman's condition needs. Waiting, isolating the woman, or filing the finding for later all delay the care her body is asking for.",
      },
      {
        topic: "Scope of Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these sits within a midwife's scope of practice?",
        options: [
          "Antenatal care, skilled delivery, postnatal and newborn care, with referral of complications",
          "Performing caesarean sections at a CHPS compound",
          "Prescribing chemotherapy",
          "Independent diagnosis and treatment of complicated disease without referral",
        ],
        correctIndex: 0,
        explanation: "The midwife's scope covers normal pregnancy, birth and the postnatal period — including health promotion, family planning and the recognition and referral of complications. Surgery and complex treatment belong to doctors and hospitals.",
      },
    ],
    flashcards: [
      {
        topic: "Advocacy",
        front: "What does it mean to be the patient's advocate?",
        back: "To speak and act on her behalf when her own voice cannot — raising concerns to the right people, fast.",
      },
      {
        topic: "Roles of the Midwife",
        front: "Name five roles of the nurse-midwife.",
        back: "Caregiver, advocate, teacher, counsellor, coordinator — also communicator and record-keeper.",
      },
      {
        topic: "Observation",
        front: "What is the detective role on the ward?",
        back: "Noticing the quiet, early signs — the uneaten meal, the fundus creeping up, the baby feeding less — and reporting them before they become emergencies.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8. The Nursing Process ────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "The Nursing Process: Your Problem-Solving Tool",
    description: "Assess, diagnose, plan, implement, evaluate — the five-step cycle that organises all safe care.",
    difficulty: "Easy",
    durationMin: 11,
    objectives: [
      "Name the five steps of the nursing process and keep them in order.",
      "Distinguish a nursing diagnosis from a medical diagnosis with examples.",
      "Apply the ADPIE cycle to a simple postnatal situation.",
    ],
    tags: ["nursing process", "adpie", "nursing diagnosis", "care planning", "critical thinking"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "From today, every patient problem you meet has a road map: the nursing process. Five steps, always in the same order — assess, diagnose, plan, implement, evaluate. Students remember them as ADPIE.\n\nIt exists because humans under pressure forget things. The process keeps your thinking honest and ordered when the ward is loud, the shift is long, and three women need you at once. Instead of reacting to whatever shouts loudest, you gather data, name the problem, set a goal, act, and check the result. Care stops being a list of tasks and becomes reasoning with a structure — one patient, one cycle, at a time. And the cycle is not a straight line: it circles back on itself, over and over, for as long as you care for that patient.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Walk the steps. Assessment collects the clues: history, observations, what the patient says. Diagnosis, in nursing, names the human problem you can treat — pain, anxiety, risk of infection, deficient knowledge. Planning writes the goal, measurable and timed, plus the steps to reach it. Implementation is the doing. Evaluation checks honestly whether the goal was met, and feeds the answer back into assessment.\n\nNotice that a nursing diagnosis is not a medical diagnosis, though the two live side by side. A doctor may write 'severe pre-eclampsia.' Your nursing diagnoses for the same woman might be: risk for injury related to possible convulsions; anxiety related to fear of the unknown. Same woman, different lenses — the disease on one chart line, her human experience of it on the next. You treat the second while reporting to the first.\n\nBecause evaluation restarts the cycle, the process never truly ends; it moves forward in circles, each one a little better informed than the last.",
      },
      {
        type: "clinical_pearl",
        body: "Two temptations to resist: acting before you have assessed, and finishing without evaluating. The first treats the wrong problem; the second never learns whether the treatment worked at all.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Dede delivered her first baby this morning. Tonight she is awake and tearful, and tells you she is afraid to hold him — 'what if I drop him?' She has not slept and refuses to feed him while you watch.\n\nTake this through the nursing process: what comes first, and what does each step look like?\n\nAnswer: Assess first — sit down, listen, and rule out physical causes such as pain or heavy bleeding before labelling anything. Diagnose: anxiety related to first-time motherhood and fear of harming the baby. Plan a goal that can be checked: 'Madam Dede will hold and feed her baby with a midwife beside her before midnight, and will voice her fears.' Implement: stay with her, place the baby in her arms, coach the latch, praise each attempt, invite her questions. Evaluate at the goal's deadline: is she feeding him with you present, and did she speak her fears aloud? Then begin the next circle — assessment, again, of how she manages alone.",
      },
      {
        type: "memory_trick",
        body: "ADPIE — think 'a pie.' Every plan of care is baked in five steps: Assess the ingredients, Diagnose what is missing, Plan the recipe, Implement the baking, Evaluate the taste.",
      },
      {
        type: "summary",
        body: "- The nursing process runs ADPIE: assessment, diagnosis, planning, implementation, evaluation — always in order.\n- It is a cycle, not a line: evaluation feeds back into assessment and the circle turns again.\n- Nursing diagnoses name human problems — pain, anxiety, risk of infection — alongside, not instead of, medical diagnoses.\n- Planning sets measurable, timed goals; implementation does the work; evaluation checks honestly.\n- Resist acting before assessing and finishing without evaluating.",
      },
    ],
    questions: [
      {
        topic: "Nursing Process",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the correct order of the nursing process?",
        options: [
          "Assess → diagnose → plan → implement → evaluate",
          "Diagnose → assess → implement → plan → evaluate",
          "Plan → assess → implement → diagnose → evaluate",
          "Assess → implement → plan → evaluate → diagnose",
        ],
        correctIndex: 0,
        explanation: "ADPIE is the fixed order. You cannot diagnose before collecting data, cannot plan before naming the problem, and cannot evaluate before implementing — the sequence is the safety.",
      },
      {
        topic: "Nursing Diagnosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A doctor documents malaria with a temperature of 39 °C. Which is a matching nursing diagnosis?",
        options: [
          "Hyperthermia related to infection, as evidenced by temperature 39 °C",
          "Malaria, as evidenced by positive blood film",
          "Antimalarial therapy, to start today",
          "Anaemia with low packed cell volume",
        ],
        correctIndex: 0,
        explanation: "A nursing diagnosis names the human response you will monitor and manage — here the fever, hyperthermia. The disease name and the treatment order belong on the medical line; the nursing diagnosis is what your interventions aim at.",
      },
      {
        topic: "Nursing Process",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Evaluation shows the patient's goal was not met. What does the nursing process tell you to do next?",
        options: [
          "Close the care plan — the process has ended",
          "Continue the same plan and evaluate again next week",
          "Reassess the patient and revise the plan, restarting the cycle",
          "Ask the doctor to take over the problem",
        ],
        correctIndex: 2,
        explanation: "An unmet goal is information, not the end of the road. You reassess to find out why, revise the diagnosis or the plan, and the cycle begins again — that turning is the process working.",
      },
    ],
    flashcards: [
      {
        topic: "Nursing Process",
        front: "Name the five steps of the nursing process in order.",
        back: "Assessment, diagnosis, planning, implementation, evaluation — ADPIE.",
      },
      {
        topic: "Nursing Diagnosis",
        front: "Give one nursing diagnosis that could pair with the medical diagnosis of pre-eclampsia.",
        back: "'Risk for injury related to possible convulsions' or 'anxiety related to unfamiliar procedures and fear of outcome.'",
      },
      {
        topic: "Nursing Process",
        front: "Why is the nursing process drawn as a circle?",
        back: "Evaluation results flow back into assessment — care is continuously adjusted, never finished in one straight pass.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Alfaro-LeFure — Applying the Nursing Process: A Tool for Critical Thinking",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9. Assessment ─────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Assessment: Gathering the Clues",
    description: "Learn to collect the history, the observations and the story that everything else depends on.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Distinguish subjective from objective data with ward examples.",
      "Take a focused obstetric history in a logical order.",
      "Screen for the danger signs of pregnancy and act on a positive finding.",
    ],
    tags: ["assessment", "nursing process", "history taking", "danger signs", "pre-eclampsia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Assessment is the detective's work: collecting clues before drawing conclusions. Every diagnosis you will ever act on stands on the data you gathered first — and weak data topples everything built on it.\n\nYour clues come in two families. Subjective data is what the patient says: 'my head is aching,' 'the baby is not moving as before.' Objective data is what you find: blood pressure 150/100, pale palms, a urine dipstick reading of protein. One lives in her words, the other in your measurements, and a full picture needs both. Your sources are the woman herself first, then family or carers, her antenatal records, and your own examination. In midwifery, records carry special weight — the last blood pressure, the last haemoglobin, the trend of the growth curve.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A focused obstetric history is a habit you build now. Chief complaint in her own words. Dates: last menstrual period, expected date of delivery. Gravidity and parity — how many pregnancies, how many births. Antenatal visits and where. Past history: illnesses, operations, previous pregnancy losses, bleeding problems. Allergies and current medications. Then the examination: vital signs, a head-to-toe look, abdominal examination, and whatever focused checks the story points to.\n\nThen the screen for danger signs — the questions that catch killers early. Headache, blurred vision, epigastric pain, swelling of face and hands, fever, bleeding, leaking liquor, reduced fetal movement. Any yes deserves your full attention and a full set of observations.\n\nTwo habits sharpen everything: ask open questions — 'tell me how you have been since yesterday' beats 'are you okay?' — and compare every finding with her baseline. A pulse of 96 is a different story in a woman whose usual is 60 than in one whose usual is 84.",
      },
      {
        type: "clinical_pearl",
        body: "Ask open questions, and always ask for the baseline. 'Are you okay?' teaches patients to say yes. 'Tell me how you have been sleeping since the delivery?' opens the real story — and a pulse only means something when you know her normal.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a busy antenatal clinic, 34 weeks into her second pregnancy, Madam Yaa mentions almost in passing: 'My head aches small in the mornings.' Her blood pressure at booking was 112/70.\n\nWhat do you ask next, and what do you measure?\n\nAnswer: A headache at 34 weeks is a danger sign until proved otherwise. Screen with the questions that matter: blurred vision? pain in the upper belly? swelling of the face and hands? has the baby been moving well? Then measure: blood pressure now, urine for protein, and compare against her booking baseline — a rise to 140/90 or above with protein changes the whole day. Report your findings to the midwife in charge promptly, document them clearly, and stay with the woman. Pre-eclampsia moves quietly and fast, and a casually mentioned headache is sometimes its opening line.",
      },
      {
        type: "memory_trick",
        body: "If the patient SAYS it, it is subjective. If you SEE or MEASURE it, it is objective. And for danger signs, remember the quiet four: headache, blurred vision, epigastric pain, swelling — the quiet callers of pre-eclampsia.",
      },
      {
        type: "summary",
        body: "- Assessment gathers clues: subjective data from her words, objective data from your findings — good care needs both.\n- Sources: the woman, family and carers, previous records, and your own examination.\n- A focused obstetric history: complaint, dates (LMP, EDD), gravidity and parity, ANC visits, past history, allergies, medications.\n- Screen every pregnant woman for danger signs: headache, blurred vision, epigastric pain, swelling, fever, bleeding, leaking liquor, reduced fetal movement.\n- Open questions and baseline comparison turn routine checks into real detection.",
      },
    ],
    questions: [
      {
        topic: "Types of Data",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The patient tells you, 'I feel dizzy when I stand.' How is this classified?",
        options: [
          "Subjective data — a symptom reported by the patient",
          "Objective data — a sign you measured",
          "A nursing diagnosis",
          "An evaluation finding",
        ],
        correctIndex: 0,
        explanation: "What the patient reports is subjective data — a symptom. The finding you confirm yourself, such as a blood pressure drop on standing, would be the objective partner of the same complaint.",
      },
      {
        topic: "Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At an antenatal visit, which group of symptoms should make you think immediately of pre-eclampsia and act on it?",
        options: [
          "Heartburn after meals and a bitter taste in the mouth",
          "Frequency of urination at night",
          "Headache together with blurred vision and epigastric pain",
          "Mild ankle swelling at the end of the day with no other symptoms",
        ],
        correctIndex: 2,
        explanation: "Headache, blurred vision and epigastric pain are the classic warning triad of worsening pre-eclampsia — they call for an immediate blood pressure check, urine testing and reporting. Nighttime frequency and mild dependent ankle swelling alone are common in late pregnancy, and heartburn is a discomfort, not this emergency.",
      },
      {
        topic: "Obstetric History",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does the midwife ask for the first day of the last menstrual period at booking?",
        options: [
          "To estimate the gestational age and the expected date of delivery",
          "To calculate how much weight she should gain",
          "To decide the baby's sex",
          "To know how many children she wants",
        ],
        correctIndex: 0,
        explanation: "The last menstrual period anchors the pregnancy's calendar: it estimates gestational age and the expected date of delivery, which guide every visit, investigation and referral that follows.",
      },
    ],
    flashcards: [
      {
        topic: "Types of Data",
        front: "Subjective vs objective — give one example of each.",
        back: "Subjective: 'I feel dizzy when I stand.' Objective: blood pressure 90/50 on standing, pale conjunctiva.",
      },
      {
        topic: "Danger Signs",
        front: "Name five danger signs to screen for at every antenatal visit.",
        back: "Headache, blurred vision, epigastric pain, swelling of face and hands, fever, bleeding, leaking liquor, reduced fetal movement — any five.",
      },
      {
        topic: "Obstetric History",
        front: "Why ask for the LMP at booking?",
        back: "It estimates gestational age and the expected date of delivery — the calendar that guides every visit, test and referral.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations on prevention and diagnosis of pre-eclampsia and eclampsia",
        year: "2021",
        note: "Educational source — verify current edition and follow local protocols.",
      },
    ],
  },

  // ── 10. Planning Care ─────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Planning Care: Goals That Make Sense",
    description: "Turn your assessment into a plan — realistic goals and the steps that lead the patient there.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Write a SMART goal for a simple ward problem.",
      "Distinguish short-term from long-term goals.",
      "Prioritise care using the ABC rule and comfort-before-teaching logic.",
    ],
    tags: ["care planning", "goals", "smart goals", "prioritisation", "nursing process"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Assessment hands you a pile of clues; planning turns it into a promise. The heart of the plan is the goal — a statement of what should change, by how much, and by when. Write it well and the whole team can see the target; write it vaguely and nobody, including you, will ever know whether the care worked.\n\nA weak goal: 'the patient will be less painful.' Better, sharper: 'the patient will report pain of 3/10 or less within one hour of analgesia.' The second goal has a number and a clock. When the hour is up, you can hold it against reality and answer honestly: met, partially met, or not met. That is the difference between a goal and a wish.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Goals come in two lengths. Short-term goals aim at hours or days — comfort today, walking by evening. Long-term goals reach towards discharge and beyond — exclusive breastfeeding established by discharge, the wound healed at the two-week check. Plans also carry priority, and the rule is older than nursing: life before limb, limb before comfort, comfort before teaching. A threat to airway, breathing or circulation outranks everything. Then pain, then sleep, then education.\n\nThis ordering is why a good plan never begins by teaching a mother in severe pain — she cannot take it in. Silence the pain first; teach afterwards. The same logic that orders your goals also orders your shift.\n\nFinally, the plan lists the interventions: what will be done, by whom, how often, and what you will watch for. Prescriber's orders, independent nursing actions, teaching for the family — one page, a whole day of care visible at a glance.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot teach a patient in pain. Comfort first, education second — and any threat to airway, breathing or circulation outranks both. Order is not a detail of the plan; order is the plan.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Fatima delivered by caesarean section yesterday. This morning her pain is 6/10 when she moves, and she has not yet walked. The family asks when you will teach them about breastfeeding, because discharge is planned for day three.\n\nWhich goal belongs first, and how do you write it?\n\nAnswer: Pain first — unrelieved pain is blocking everything else, including safe walking and any teaching. Write it SMART: 'Madam Fatima will report pain of 3/10 or less within one hour of the prescribed analgesia.' Then a mobility goal — assisted walking by evening — and only then the teaching goal: 'will demonstrate comfortable positioning for breastfeeding, with support, before discharge.' Sequence matters: each goal clears the ground for the next, and by day three the family is not learning under a cloud of pain but building on a mother who can move, sit and hold her baby.",
      },
      {
        type: "memory_trick",
        body: "SMART: Specific, Measurable, Achievable, Relevant, Timed. Or say it the student way: a goal without a number and a clock is only a wish.",
      },
      {
        type: "summary",
        body: "- Planning turns assessment into goals: what will change, by how much, by when.\n- SMART goals are specific, measurable, achievable, relevant and time-bound — 'pain 3/10 or less within one hour.'\n- Short-term goals cover hours to days; long-term goals reach to discharge and beyond.\n- Priority runs ABC first — airway, breathing, circulation — then comfort, then teaching.\n- The plan lists interventions: what, by whom, how often, watched for what.",
      },
    ],
    questions: [
      {
        topic: "SMART Goals",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a SMART goal?",
        options: [
          "The patient will be comfortable",
          "The patient will report pain of 3/10 or less within one hour of analgesia",
          "The patient will sleep well and eat enough",
          "The patient will recover quickly",
        ],
        correctIndex: 1,
        explanation: "Only the second option carries a measurable target (3/10 or less) and a deadline (within one hour) — the features that let evaluation judge it honestly. The others are wishes: nobody can tell whether they were met.",
      },
      {
        topic: "Prioritisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Four women on the postnatal ward: one reports heavy vaginal bleeding, one has severe perineal pain, one wants breastfeeding help, one asks for a bath. Who do you attend first?",
        options: [
          "The woman with heavy vaginal bleeding",
          "The woman with severe perineal pain",
          "The woman who wants breastfeeding help",
          "The woman asking for a bath",
        ],
        correctIndex: 0,
        explanation: "Heavy bleeding after birth is a circulation-level threat and outranks comfort, teaching and hygiene. Check the fundus and blood loss, call for help, and the others follow in order once she is safe.",
      },
      {
        topic: "Goal Writing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must a goal be measurable and time-bound?",
        options: [
          "So the family can read it easily",
          "Because the file looks tidier that way",
          "So evaluation can honestly judge it met, partially met, or not met",
          "Because unmeasurable goals are always unethical",
        ],
        correctIndex: 2,
        explanation: "Evaluation compares reality with the promise. Without a number and a deadline there is nothing to compare, and the team can only guess whether the care worked — a measurable, timed goal makes honest evaluation possible.",
      },
    ],
    flashcards: [
      {
        topic: "SMART Goals",
        front: "What does SMART stand for?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound.",
      },
      {
        topic: "Prioritisation",
        front: "Rank these in order of attention: teaching, an airway threat, severe pain.",
        back: "Airway (any ABC threat) first, pain second, teaching last — you cannot teach a patient in pain.",
      },
      {
        topic: "Goal Writing",
        front: "Give one short-term and one long-term goal example.",
        back: "Short-term: pain 3/10 or less within one hour of analgesia. Long-term: exclusive breastfeeding established by discharge.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11. Implementation ────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Implementation: Turning Plans into Care",
    description: "Executing the plan — the skills, timing and judgement of actually delivering care.",
    difficulty: "Moderate",
    durationMin: 9,
    objectives: [
      "Define implementation and its place in the nursing process.",
      "Distinguish dependent, independent and collaborative interventions with examples.",
      "Describe the reassess–chart–report routine that closes every intervention.",
    ],
    tags: ["implementation", "interventions", "dependent orders", "patient safety", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Implementation is the step where the plan leaves the paper and touches the patient — the doing. But notice it is a step of the process, not a task list. Timing, safety and judgement travel with every action: the right patient, the right care, the right moment, with the patient informed and her dignity protected.\n\nWhile you act, you keep assessing. The woman's response to your care is new data, arriving live. Give analgesia and her face eases — that is a finding. Massage a fundus and it firms under your hand — another. Implementation and assessment run together in practice, two hands of the same work. And when the action is done, the step is not finished until you have looked at the patient, judged the response, and written it down.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Interventions come in three families, and knowing the family tells you who may act. Dependent interventions need a prescriber's order — giving prescribed oxytocin, IV fluids or antibiotics. Independent interventions sit inside your own nursing authority: positioning, hygiene, comfort, health education, monitoring observations, encouraging early breastfeeding. Collaborative interventions need the team together — planning discharge feeding support, or working with a physiotherapist after a prolonged bed rest.\n\nAs a student you act under supervision, and the boundary matters daily: what you may do alone, what you may do with your supervisor present, and what belongs to the licensed midwife only. Learn the boundary early and you will never be caught guessing at 3 a.m.\n\nSafety threads through it all: hand hygiene before and after every contact, patient identity checked, drug rights honoured, chart after care — not hours later. The best implementation is quiet, unhurried and exact, even when the ward is loud.",
      },
      {
        type: "clinical_pearl",
        body: "Implementation ends with your eyes, not your hands. After you act, look at the patient: did the pain ease, the fundus firm, the bleeding slow? The response is the finding — check it, chart it, and report it if it is not what you expected.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Following the plan, you give Madam Fatima her prescribed analgesia at 8 a.m. for post-caesarean pain, chart it, and move on to your other patients. At 8:45 she calls you. She has not moved from the chair where she sat to feed the baby, the pain is still 7/10, and she is close to tears.\n\nWhat do you do next — and what does this tell you about the plan?\n\nAnswer: First, respond to her now. Reassess the pain properly, position her comfortably with pillows supporting the wound, and report to the midwife in charge that the prescribed analgesia has not relieved her pain — a stronger or different plan may be needed, and that decision is not yours to make alone. Chart the reassessment time and the findings. Unrelieved pain is not an inconvenience; it is data telling you the plan is inadequate, and acting on that data is exactly what the nursing process is for.",
      },
      {
        type: "memory_trick",
        body: "The signature test: if the task needs a doctor's or prescriber's order first, it is dependent. If it needs nothing but your own licence and judgement, it is independent. If it needs a meeting, it is collaborative.",
      },
      {
        type: "summary",
        body: "- Implementation is planned action with timing, safety and judgement — never a bare task list.\n- Dependent interventions need a prescriber's order; independent ones sit in your nursing authority; collaborative ones need the team.\n- Keep assessing while you act — the patient's response is live data.\n- End every intervention by looking at the result, charting it, and reporting what falls outside the expected.\n- Unrelieved symptoms are not complaints; they are findings that the plan needs revision.",
      },
    ],
    questions: [
      {
        topic: "Intervention Types",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is an independent nursing intervention?",
        options: [
          "Administering prescribed IV oxytocin",
          "Ordering an antibiotic for a wound infection",
          "Repositioning a labouring woman to ease her back pain",
          "Performing a caesarean section",
        ],
        correctIndex: 2,
        explanation: "Positioning, comfort, hygiene, monitoring and teaching sit within the nurse's own authority — no order needed. IV oxytocin needs a prescriber's order, and prescribing and surgery belong to doctors.",
      },
      {
        topic: "Response to Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Forty-five minutes after prescribed analgesia, the patient still rates her pain 7/10. What is your best next action?",
        options: [
          "Reassess the pain, apply comfort measures, and report to the midwife in charge that relief is inadequate",
          "Repeat the dose yourself since the first one did not work",
          "Tell her to wait for the next scheduled dose and chart nothing",
          "Ask the family to buy stronger pain tablets from the pharmacy",
        ],
        correctIndex: 0,
        explanation: "Unrelieved pain is a finding, and the finding belongs to the team. Reassess, comfort, document and report so the plan can be changed by the person authorised to change it. Repeating a dose yourself, ignoring her, or outsourcing to the pharmacy are all unsafe.",
      },
      {
        topic: "Dependent Interventions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which action must not be performed without a prescriber's order?",
        options: [
          "Teaching a mother the signs of wound infection",
          "Starting an IV antibiotic for a woman with fever after birth",
          "Helping a postnatal woman to walk on day one",
          "Measuring and recording a full set of vital signs",
        ],
        correctIndex: 1,
        explanation: "Administering IV antibiotics is a dependent intervention — it requires a prescriber's order. Teaching, assisting mobility and measuring observations are independent nursing actions within your own authority.",
      },
    ],
    flashcards: [
      {
        topic: "Intervention Types",
        front: "Dependent, independent, collaborative — one example of each.",
        back: "Dependent: giving prescribed IV fluids. Independent: positioning, comfort, hygiene, monitoring, teaching. Collaborative: discharge feeding plans made with the dietitian or physiotherapist.",
      },
      {
        topic: "Implementation",
        front: "What must follow every intervention?",
        back: "Reassessment: look at the patient's response, chart it, and report anything unexpected.",
      },
      {
        topic: "Response to Care",
        front: "The prescribed analgesia did not work. What is this finding, and what does it mean?",
        back: "New data — an unmet goal. It means the plan needs revision, reported to the midwife in charge.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12. Evaluation ────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Evaluation: Did the Care Work?",
    description: "The step most people skip — checking honestly whether your care achieved what the patient needed.",
    difficulty: "Moderate",
    durationMin: 9,
    objectives: [
      "Define evaluation and its three verdicts: met, partially met, not met.",
      "Explain what to do when a goal is unmet or only partly met.",
      "Recognise evaluation as the step that turns the nursing process into a cycle.",
    ],
    tags: ["evaluation", "outcomes", "nursing process", "care planning", "revision"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Evaluation is the quiet question every plan must face: did it work? You ask it at the time the goal named — one hour after the analgesia, by discharge, at the two-week check — and you answer it by comparing reality with the promise you wrote. Met, partially met, or not met. Three honest verdicts.\n\nThis is why the goal carried a number and a clock. 'Pain 3/10 or less within one hour' can be judged; 'she will be fine' cannot. Evaluation is where planning either proves its worth or exposes its weakness — and both outcomes improve the next round of care. A student who evaluates honestly is safer than one who assumes generously.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "When a goal is not met, the professional response is curiosity, not embarrassment. Ask why, in order. Was the assessment incomplete — a different problem hiding under the one you named? Was the goal realistic for this patient, in this ward, today? Were the interventions actually carried out, and carried out well? Has something new appeared since the plan was written? The answer sends you back around the cycle: reassess, adjust the diagnosis if needed, rewrite the goal, change the steps. The circle turning is the process working, not failing.\n\nEvaluation also listens to the patient's side. The numbers may improve while she still tells you the night was terrible. Both findings count — one measures the body, the other the person, and midwifery serves both.\n\nDocument the verdict in the same language as the goal: what you found, what it means, what you changed. An un-evaluated care plan is an unfinished story, and on a busy ward unfinished stories get lost.",
      },
      {
        type: "clinical_pearl",
        body: "A goal not met is not a wrong answer — it is new information. The midwife who asks 'why not?' is safer than the one who quietly moves on. Evaluate honestly, revise openly, and write it down.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Pokua's goal reads: 'will be exclusively breastfeeding with a comfortable latch before discharge on day two.' At evaluation, the verdict is partially met — she latches the baby well when you are beside her, but the grandmother has been giving the baby water and formula at night, saying 'the milk is not enough.'\n\nWhat does a partially met goal demand next?\n\nAnswer: Curiosity, then a revised plan. The assessment found a new barrier — the family's beliefs about milk sufficiency — so the plan must reach the family, not just the mother. Revise the teaching to include the grandmother, respectfully and with her wisdom acknowledged; explain how frequent suckling builds supply and how extra water can reduce it; agree together on how the nights will go, and set a new goal with a new deadline. Partially met is progress — but only if the circle turns and the plan changes with what you learned.",
      },
      {
        type: "memory_trick",
        body: "Evaluate against the goal you wrote — the goal is the measuring stick. No stick, no measurement. And remember the three verdicts: Met, Partially met, Not met.",
      },
      {
        type: "summary",
        body: "- Evaluation compares the patient's outcome with the goal, at the time the goal named.\n- The three verdicts: met, partially met, not met — recorded in the goal's own language.\n- A goal not met demands curiosity: reassessment, honest reasons, a revised plan.\n- The cycle restarts — evaluation flows straight back into assessment.\n- The patient's own report counts alongside the numbers; serve the person, not only the chart.",
      },
    ],
    questions: [
      {
        topic: "Evaluation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Evaluation compares the patient's outcome with what, exactly?",
        options: [
          "The goals set during planning",
          "The doctor's progress notes",
          "The routine of the ward",
          "The experience of previous patients",
        ],
        correctIndex: 0,
        explanation: "The goal is the measuring stick. Evaluation holds the patient's reality against the promise written at planning — which is why the goal needed a number and a deadline in the first place.",
      },
      {
        topic: "Unmet Goals",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A goal is not met. What is the correct next move?",
        options: [
          "Continue the same plan and wait longer",
          "Close the care plan and start a new one from zero",
          "Reassess the patient, find out why, and revise the plan",
          "Document the failure and inform the family",
        ],
        correctIndex: 2,
        explanation: "An unmet goal sends you back around the cycle: reassess to find the reason — incomplete assessment, unrealistic goal, failed intervention, or a new problem — then revise the plan. Waiting repeats the failure, starting from zero discards good data, and blaming helps nobody.",
      },
      {
        topic: "Evaluation Verdicts",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The goal was 'pain 3/10 or less within one hour of analgesia.' One hour later, the patient reports 6/10. How is this classified?",
        options: [
          "Met — some relief occurred",
          "Partially met — halfway to the target",
          "Cannot be classified without a doctor's review",
          "Not met — reassess, report and revise",
        ],
        correctIndex: 3,
        explanation: "The criterion was 3/10 or less, and 6/10 misses it — the honest verdict is not met. The next steps follow the cycle: reassess the pain, report the inadequate relief, and revise the plan.",
      },
    ],
    flashcards: [
      {
        topic: "Evaluation",
        front: "What are the three verdicts of evaluation?",
        back: "Met, partially met, not met — measured against the goal and its deadline.",
      },
      {
        topic: "Unmet Goals",
        front: "A goal is not met — what happens next, in order?",
        back: "Reassess the patient, ask why (assessment, goal, interventions, new problems), revise the plan, and restart the cycle.",
      },
      {
        topic: "Goal Writing",
        front: "Why must the goal carry a time frame?",
        back: "Evaluation needs a deadline — it tells you exactly when to check the outcome against the promise.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Guideline: protecting, promoting and supporting breastfeeding",
        year: "2021",
        note: "Educational source — verify current edition and follow local protocols.",
      },
    ],
  },

  // ── 13. Communication ─────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Communication: The Heart of Nursing",
    description: "How you speak, listen and carry yourself is a clinical skill — maybe the most important one.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe therapeutic communication techniques and use them deliberately.",
      "Recognise blocking habits and replace them with listening.",
      "Use SBAR to raise a concern clearly to the midwife in charge.",
      "Communicate respectfully across culture, especially in grief.",
    ],
    tags: ["communication", "therapeutic communication", "sbar", "active listening", "grief support"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Communication is not the soft side of nursing; it is a clinical skill with clinical consequences. The history you gather, the fears you calm, the deterioration you notice, the handover that protects the next shift — all of it runs through how you speak, listen and carry yourself.\n\nTherapeutic communication is deliberate: techniques chosen because they help the patient speak and heal. Open questions — 'tell me about the pain' — open doors that yes-or-no questions close. Active listening gives her your eyes, your patience and your silence. Reflection hands her own words back: 'you sound frightened.' Clarification chases the vague until it is exact: 'aching how — sharp, or heavy?' Touch, used respectfully, says what language cannot. And silence — sitting quietly with a woman who is suffering — is not empty; it is full.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Some habits block the very door you are trying to open. False reassurance — 'everything will be fine' — comforts you, not her, and quietly closes the conversation. Interrupting, judging, advising too fast, hiding behind jargon ('she is a G2P1 with PID') — all of it teaches patients to stop telling you things.\n\nNon-verbal language speaks too: your posture, your tone, your face while she talks. Read hers as well, and read it culturally — a younger person may show respect by looking down, so do not read downcast eyes as evasion; read warmth in the voice and openness in the shoulders. Where you can, meet people in their own language, and when the message is serious, find the words in the language she thinks in.\n\nFor structured reporting, use SBAR: Situation, Background, Assessment, Recommendation. It turns a wandering worry into a sentence the midwife in charge can act on immediately.",
      },
      {
        type: "clinical_pearl",
        body: "In grief, silence is a skill. Sitting quietly beside a mother, a hand on her arm, honours her loss better than any sentence. And never say 'at least' — 'at least you can try again' comforts no one who is grieving today.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on your ward delivered a stillborn baby girl last night. This morning you enter the room with her drugs. She turns her face to the wall and begins to cry.\n\nWhat do you say — and what must you not say?\n\nAnswer: Often the best first words are none. Sit where she can see you if she turns, stay quietly present, and acknowledge simply: 'I am so sorry about your baby.' Let her lead. If she speaks, listen without correcting or consoling away her pain — her words are the work. Do not say 'at least,' do not promise what you cannot know, and do not fill the silence with chatter. Ask gently what she needs: to talk, to be alone, to see a senior midwife or a counsellor, or a faith leader of her choice. Before you leave, tell her you will come back — then come back. Presence, kept honestly, is therapeutic communication at its deepest.",
      },
      {
        type: "memory_trick",
        body: "SOLER, the listening posture: Sit squarely facing her, Open posture, Lean slightly forward, Eye contact (gentle and culturally respectful), Relax. And the old ratio: two ears, one mouth — use them in that proportion.",
      },
      {
        type: "summary",
        body: "- Therapeutic communication is a clinical skill: open questions, active listening, reflection, clarification, respectful touch, silence.\n- Blocking habits: false reassurance, interrupting, judging, jargon — they teach patients to stop talking.\n- Non-verbal language speaks both ways; read it culturally, not mechanically.\n- SBAR turns worry into action: Situation, Background, Assessment, Recommendation.\n- In grief, presence over words — and never 'at least.'",
      },
    ],
    questions: [
      {
        topic: "Therapeutic Techniques",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which question is the most open?",
        options: [
          "Tell me what the pain has been like since yesterday",
          "Is the pain sharp?",
          "Does it hurt now?",
          "You're feeling better today, right?",
        ],
        correctIndex: 0,
        explanation: "An open question invites the patient's own story in her own words. The others can each be answered with a single word — and the last one even coaches the answer it wants.",
      },
      {
        topic: "Grief Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother has just lost her baby. Which response is most therapeutic?",
        options: [
          "'At least you are young — you can try again'",
          "'Everything happens for a reason'",
          "Sit quietly beside her, acknowledge her loss, and let her lead",
          "Leave her alone without checking until visiting hours",
        ],
        correctIndex: 2,
        explanation: "Presence, acknowledgement and permission to lead are the therapeutic core of grief support. 'At least' statements and explanations minimise her loss, and disappearing denies her the support she may need.",
      },
      {
        topic: "SBAR",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does SBAR stand for?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Symptoms, Bloods, Assessment, Referral",
          "Story, Background, Actions, Results",
          "Safety, Bed, Allergies, Risks",
        ],
        correctIndex: 0,
        explanation: "SBAR is the structured handover and escalation pattern: the situation now, the background, your assessment, and your recommendation — ending with the action you are asking for.",
      },
    ],
    flashcards: [
      {
        topic: "SBAR",
        front: "What does SBAR stand for, and when do you use it?",
        back: "Situation, Background, Assessment, Recommendation — for handover and for raising a concern the midwife in charge can act on.",
      },
      {
        topic: "Therapeutic Techniques",
        front: "Give two therapeutic techniques and two blocking habits.",
        back: "Therapeutic: open questions and reflection. Blocking: false reassurance and interrupting.",
      },
      {
        topic: "Active Listening",
        front: "What does SOLER remind you to do?",
        back: "Sit squarely, Open posture, Lean forward, Eye contact (gentle), Relax — the listening posture.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "NHS Institute for Innovation and Improvement",
        title: "SBAR communication tool",
        note: "Educational source — verify current version.",
      },
    ],
  },

  // ── 14. Documentation ─────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "The Profession & the Process",
    lessonTitle: "Documentation: If It Isn't Written, It Didn't Happen",
    description: "Clear, honest, timely notes — protecting your patient and your practice with every line.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Explain the four purposes of the patient record.",
      "Chart by FACT: factual, accurate, complete, timely.",
      "Correct charting errors properly and record late entries honestly.",
    ],
    tags: ["documentation", "records", "partograph", "legal", "nursing process"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The chart is the story of the care — the version that survives memory. Memory fades after a long shift; the record endures. It is read by the next shift, the referral hospital, the auditor and, on the worst day, the court. 'If it isn't written, it didn't happen' is not a scolding; it is the simple truth that only documented care can be seen, continued and defended.\n\nRecords work four jobs at once. Communication: the night shift knows what the day shift found. Continuity: the referral hospital receives the whole story travelling with the patient. Monitoring: the partograph turns labour into a plotted line, so delay is seen early. And evidence: for audits, research and legal protection — for the patient's rights and for yours.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Good charting follows FACT: factual, accurate, complete, timely. Factual — write what you observed and did, in measurable terms, quoting the patient's own words for symptoms. Accurate — right patient, right times, right numbers; 2 a.m. is not 3 a.m. Complete — the whole event: the finding, the report, the order, the response. Timely — chart as close to the event as possible, because notes written at the moment carry the most trust. Never pre-chart care; the future has a way of disagreeing with you.\n\nCorrections have a protocol: one line through the error, still readable; the correction beside it; your initials and the time. Erasing, correction fluid and blacking-out are forbidden — a record that hides its past looks like a record that lies.\n\nIn Ghana, your midwifery records include the antenatal record, the partograph in labour, and the referral notes that travel with the woman. Sign with your name and designation — student included. Your entry is your word.",
      },
      {
        type: "clinical_pearl",
        body: "Write now, not at the end of the shift — the busiest hour is when the record is most needed and least written. If an entry must be late, mark it as a late entry, record the actual time of the event, and say when you wrote it. Honesty about timing protects you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m. you checked Madam Serwaa's blood pressure: 150/100, up from 110/70 at 10 p.m. You reported it immediately; the midwife in charge reviewed her and treatment was started. At 7 a.m. the incoming midwife asks what happened overnight — and finds nothing in the notes, because by morning you had been pulled into two emergencies and the entry was never written.\n\nWhat is at stake here, and how should it have been handled?\n\nAnswer: Continuity and legal protection are both at stake. The morning shift cannot build on care they cannot see, and if questions ever arose about that night, the treatment given — real as it was — cannot be proven. The rule is contemporaneous recording: chart the finding, the time of reporting, the midwife's response and the treatment as close to 2 a.m. as possible, even briefly. The honest fix now is a late entry labelled as such, with both the event time and the writing time stated. Care that happened deserves to exist on paper too.",
      },
      {
        type: "memory_trick",
        body: "FACT: Factual, Accurate, Complete, Timely — the four tests every entry must pass. And for errors: one line, initial, rewrite — never make a hole where a mistake used to be.",
      },
      {
        type: "summary",
        body: "- Records are communication, continuity, monitoring and legal evidence — the story that outlives memory.\n- Chart by FACT: factual, accurate, complete, timely — measurements and quotes, exact times, whole events.\n- Contemporaneous recording: write as close to the event as possible; never pre-chart future care.\n- Correct errors with a single readable line, the correction, your initials and the time — never erasure or fluid.\n- Sign with name and designation; in labour, the partograph is your plotted, early-warning record.",
      },
    ],
    questions: [
      {
        topic: "Purposes of Records",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best explains 'if it isn't written, it didn't happen'?",
        options: [
          "Care that is not documented cannot be proven, continued or defended",
          "The hospital only pays for documented care",
          "Charts are required to decorate the patient's file",
          "Writing notes is a punishment exercise for students",
        ],
        correctIndex: 0,
        explanation: "The record is the evidence of care: the next shift cannot continue what it cannot see, and no audit or court can defend treatment it cannot read. Undocumented care is invisible care, however good it was.",
      },
      {
        topic: "Error Correction",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You write the wrong figure in a chart. What is the correct way to correct it?",
        options: [
          "Erase it completely before rewriting",
          "Use correction fluid to cover the error",
          "Draw one line through it so it stays readable, write the correction, and add your initials and the time",
          "Rewrite the whole page on a fresh form and discard the old one",
        ],
        correctIndex: 2,
        explanation: "Legal records must keep their history visible: a single readable line, the correction, your initials and the time. Erasing, covering or destroying entries makes the whole record suspect.",
      },
      {
        topic: "Timeliness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You were too busy to chart a 2 a.m. event and write it at 7 a.m. What is the correct approach?",
        options: [
          "Chart as close to events as possible; if late, label it a late entry with the event's actual time and the time of writing",
          "Backdate the entry to 2 a.m. so the chart looks tidy",
          "Write it without times so no one can question it",
          "Ask the next shift to chart it from their own memory",
        ],
        correctIndex: 0,
        explanation: "Contemporaneous notes carry the most trust; when that fails, honesty preserves it — label the late entry, state the event's real time and when you wrote it. Backdating is falsification, and vague or second-hand entries weaken the record.",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "What does FACT stand for?",
        back: "Factual, Accurate, Complete, Timely.",
      },
      {
        topic: "Error Correction",
        front: "How do you correct an error in the record?",
        back: "One line through the error (still readable), write the correction, initial and time it. Never erase or use correction fluid.",
      },
      {
        topic: "Partograph",
        front: "Why is the partograph more than a form?",
        back: "It plots labour's progress — cervix, contractions, fetal heart — so delay and warning lines are seen early and referral decisions are backed by evidence.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021 (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors",
        year: "2017 (2nd edition)",
        note: "Educational source — verify current edition and follow local protocols.",
      },
    ],
  },
];
