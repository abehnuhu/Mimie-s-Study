// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch A (Normal Pregnancy & Normal Labour)
// 18 lessons anchored to prisma/seed-data/anchors/y3s1-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "From Conception to Fetus",
    lessonTitle: "Conception to Implantation: The Deep Dive",
    description:
      "The full story of egg, sperm and settling in — the biology that pregnancy care rests on.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the journey from the released egg to a fully implanted blastocyst, day by day.",
      "Explain how trophoblast hCG keeps the corpus luteum working until the placenta takes over.",
      "Apply this timeline to recognise a possible ectopic pregnancy early and refer the same day.",
    ],
    tags: ["conception", "implantation", "hcg", "ectopic pregnancy", "early pregnancy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Before you can care for a pregnancy, know how it begins. In this lesson we follow one egg and one sperm from the fallopian tube to the warm wall of the uterus, where this pregnancy will live for the next nine months.\n\nThis is not biology for its own sake. Knowing the days — when implantation happens, when hCG appears, when the pregnancy is too small to see on scan — is what lets you counsel a worried woman wisely and spot an ectopic pregnancy before it bursts.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Fertilisation normally happens in the **ampulla**, the widest part of the fallopian tube, within about 24 hours of ovulation. The fertilised cell — the zygote — travels toward the uterus while dividing: a solid ball called a **morula** by day 3 to 4, a fluid-filled **blastocyst** by day 5. Around days 6 to 10 the blastocyst burrows into the upper posterior wall of the uterus. That is implantation.\n\nThe outer cells become the **trophoblast**, the placenta's front line, and it immediately sends out **hCG** — the hormone a urine test detects. hCG's first job is practical: it rescues the **corpus luteum** in the ovary, keeping it alive to pour out progesterone until the placenta takes over at about 10 to 12 weeks. If implantation happens in the wrong place, most often the tube itself, that is an **ectopic pregnancy** — the emergency that can kill a young woman who never knew she was at risk.",
      },
      {
        type: "clinical_pearl",
        body: "Implantation spotting is light, brief and happens around the time a period is due. Once a pregnancy test is positive, fresh bleeding with one-sided pain is never 'just implantation' — think ectopic until proven otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old trader comes to your CHPS compound with six weeks of missed periods and a positive home urine test. She reports light brown spotting for two days and a dull ache low on the right side of her abdomen. She plans to travel to Kumasi tomorrow for three weeks of business.\n\nWhat must you rule out before she travels, and what do you do today?\n\nAnswer: She has the warning trio of early pregnancy — positive test, spotting and one-sided pain. Treat this as a possible ectopic pregnancy: refer urgently today for ultrasound and hCG testing, and advise against travel until ectopic is excluded. Reassuring her that spotting is normal, or reviewing in two weeks, is how a tubal rupture becomes a midnight emergency with blood in the belly.",
      },
      {
        type: "memory_trick",
        body: "Keep the early days as F-M-B-I: Fertilise (day 0), Morula (day 3 to 4), Blastocyst (day 5), Implant (day 6 to 10). And keep one phrase in your pocket: hCG Holds the Corpus luteum.",
      },
      {
        type: "summary",
        body: "- Fertilisation occurs in the ampulla of the tube within about a day of ovulation.\n- Morula by day 3 to 4, blastocyst by day 5, implantation days 6 to 10 in the upper uterus.\n- Trophoblast hCG sustains the corpus luteum's progesterone until the placenta takes over at 10 to 12 weeks.\n- A positive test with one-sided pain or bleeding is ectopic until ultrasound says otherwise — refer today.",
      },
    ],
    questions: [
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where does fertilisation of the human egg normally take place?",
        options: [
          "In the body of the uterus, where the baby grows",
          "In the ampulla of the fallopian tube",
          "On the surface of the ovary that released the egg",
          "In the cervix, just inside the internal opening",
        ],
        correctIndex: 1,
        explanation:
          "Fertilisation normally occurs in the ampulla, the widest part of the tube, within about 24 hours of ovulation; the conceptus then travels for days before reaching the uterus.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the main job of hCG in the first weeks after implantation?",
        options: [
          "To soften the cervix in preparation for birth",
          "To stop the mother's immune system reacting to the fetus",
          "To keep the corpus luteum producing progesterone until the placenta takes over",
          "To stimulate the breasts to make colostrum immediately",
        ],
        correctIndex: 2,
        explanation:
          "Trophoblast hCG rescues the corpus luteum so progesterone continues to sustain the lining until the placenta can take over production at about 10 to 12 weeks.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 6 weeks with a positive pregnancy test reports light spotting and right-sided lower abdominal pain. What is the most appropriate action?",
        options: [
          "Reassure her that implantation bleeding is normal and review in two weeks",
          "Give a haematinic and treat for a urinary tract infection",
          "Ask her to monitor at home and report only if the pain worsens",
          "Refer urgently for ultrasound today to exclude ectopic pregnancy",
        ],
        correctIndex: 3,
        explanation:
          "A positive test with spotting and one-sided pain is ectopic until excluded. Same-day referral for ultrasound and hCG is the safe answer; waiting risks tubal rupture and collapse.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Conception and Implantation",
        front: "Where and roughly when does fertilisation occur?",
        back: "In the ampulla of the fallopian tube, within about 24 hours of ovulation.",
      },
      {
        topic: "Conception and Implantation",
        front: "On which days after fertilisation does implantation occur?",
        back: "Around days 6 to 10, into the upper posterior wall of the uterus.",
      },
      {
        topic: "Conception and Implantation",
        front: "What does early trophoblast hCG do, and why does 10 to 12 weeks matter?",
        back: "It rescues the corpus luteum so progesterone continues; at 10 to 12 weeks the placenta takes over progesterone production itself.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook. Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition and use alongside your course texts.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "From Conception to Fetus",
    lessonTitle: "Embryonic and Fetal Development",
    description:
      "Week by week from embryo to viable baby — the milestones that structure antenatal care.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the embryonic period and fetal period and state what happens in each.",
      "Explain why folic acid must start before conception and why teratogens do most damage in weeks 3 to 8.",
      "Apply milestones such as the heartbeat, quickening and viability to counselling women at booking.",
    ],
    tags: ["embryo", "organogenesis", "teratogens", "viability", "folate"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A pregnancy does not stay a tiny ball of cells for long. Within weeks of implantation the embryo is laying down the blueprint of every organ the baby will ever use — heart, brain, spine, limbs. This lesson walks that construction timetable.\n\nThe timetable answers your real clinic questions: when is the baby most at risk from drugs and infections, when does the heartbeat appear, and when can a baby born early be expected to survive? Milestones turn vague reassurance into precise counsel.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Weeks 1 and 2 are preparation — implantation and foundations. **Weeks 3 to 8 are the embryonic period**, the age of **organogenesis**: the neural tube closes by about day 28, the heart begins to beat around day 22 to 23 (visible on scan from about week 6), and limbs, eyes and ears take shape. Exposure to **teratogens** — alcohol, certain drugs, rubella, radiation — in these weeks can cause major structural defects. From **week 9 the fetal period** begins: every organ now exists, and the rest of pregnancy is growth and maturation.\n\nTwo fetal milestones matter most to you. **Viability** climbs steeply from about 28 weeks — a 28-weeker referred early to a facility with newborn intensive care has a real fighting chance, and every extra week inside counts. In the third trimester the brain grows fastest, fat is laid down, and the lungs mature, with **surfactant** rising steadily from about 34 to 36 weeks — why late prematurity so often means breathing trouble.",
      },
      {
        type: "clinical_pearl",
        body: "The neural tube closes at about day 28, often before a woman knows she is pregnant. Folic acid works before the pregnancy test, not after it — that is the whole logic of starting it before conception.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At booking, a 22-year-old first-time mother, now 9 weeks by dates, mentions she has been taking a herbal concoction from a chemical seller for 'body pains' since before she missed her period. She asks anxiously whether the baby has already 'formed' and whether it is already damaged.\n\nHow do you answer her honestly and helpfully today?\n\nAnswer: Truthfully, by 9 weeks the major organs have largely formed, so the most sensitive window has passed — partly reassuring, but no preparation of unknown content can be declared safe. Advise her to stop it now, record the exposure honestly in her notes, arrange a dating scan, and plan the anomaly scan at about 18 to 20 weeks. Balance kindness with truth: most exposures cause no harm, but none can be guaranteed safe, and the months of growth still ahead are worth protecting.",
      },
      {
        type: "memory_trick",
        body: "Eight is the gate: by week 8, everything that will exist has been built — after that the baby only grows and matures. And folate guards the gate, but only if it arrives before day 28.",
      },
      {
        type: "summary",
        body: "- Weeks 3 to 8, the embryonic period, is organogenesis — every organ is formed then.\n- Neural tube closes by about day 28; heartbeat from about day 22; folic acid must precede conception.\n- Teratogens — alcohol, some drugs, rubella, radiation — do their worst in weeks 3 to 8.\n- From week 9 the fetus grows and matures: viability climbs steeply from about 28 weeks; lungs mature towards 34 to 36 weeks.",
      },
    ],
    questions: [
      {
        topic: "Embryonic and Fetal Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In which weeks does the embryonic period of organogenesis occur?",
        options: [
          "Weeks 3 to 8",
          "Weeks 1 to 2 only",
          "Weeks 12 to 20",
          "Weeks 28 to 40",
        ],
        correctIndex: 0,
        explanation:
          "Weeks 3 to 8 are the embryonic period, when every organ system is laid down; from week 9 the fetus grows and matures rather than forming new organs.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Embryonic and Fetal Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must folic acid ideally be started before conception rather than at the first antenatal visit?",
        options: [
          "Because it causes nausea if started after the first trimester",
          "Because the neural tube closes at about day 28, often before the woman knows she is pregnant",
          "Because it only works when combined with iron tablets",
          "Because the placenta blocks folate after week 6",
        ],
        correctIndex: 1,
        explanation:
          "The neural tube closes at about day 28 after fertilisation — commonly before a missed period is even confirmed. Folate must already be on board to protect the spine and brain.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Embryonic and Fetal Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother asks whether her baby, if born at 34 weeks, can survive. What is the honest counsel?",
        options: [
          "No baby survives before 37 weeks, so she must reach term at all costs",
          "Survival is impossible without lungs, which only form at 36 weeks",
          "A 34-weeker has a good chance of survival with newborn care, and every extra day inside improves the odds",
          "Survival depends only on the sex of the baby, not on gestation",
        ],
        correctIndex: 2,
        explanation:
          "Viability rises steeply from about 28 weeks, so a 34-weeker is a premature but viable baby — though the lungs are still maturing and surfactant only nears adequacy at 34 to 36 weeks, so breathing support is often needed.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Embryonic and Fetal Development",
        front: "What defines the embryonic period, and when is it?",
        back: "Weeks 3 to 8 — organogenesis, when every organ system is formed; the peak window for teratogenic damage.",
      },
      {
        topic: "Embryonic and Fetal Development",
        front: "When does the neural tube close, and what does that dictate about folate?",
        back: "About day 28 after fertilisation; folate must start before conception to prevent neural tube defects.",
      },
      {
        topic: "Embryonic and Fetal Development",
        front: "From which gestational age does survival climb steeply, and what matures at 34 to 36 weeks?",
        back: "From about 28 weeks with newborn intensive care; the lungs and their surfactant mature at 34 to 36 weeks.",
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
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "From Conception to Fetus",
    lessonTitle: "The Fetus: Circulation, Growth and Adaptations",
    description:
      "The remarkable fetal circulatory shortcuts — and what changes in the first breaths after birth.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Trace oxygenated blood from the placenta through the three fetal shunts to the fetal body.",
      "Explain how the first breaths close the foramen ovale and ductus arteriosus and re-route the circulation.",
      "Apply knowledge of transitional circulation to findings such as murmurs in the first days of life.",
    ],
    tags: ["fetal circulation", "foramen ovale", "ductus arteriosus", "newborn adaptation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Inside the womb the lungs are folded shut and dark — the placenta is the baby's lungs, kidneys and kitchen in one. To make that work, the fetal circulation takes three clever shortcuts past organs that have not started working yet.\n\nYour job is to know those shortcuts, because at birth the whole system is redesigned within minutes. Understanding what changes — and what sounds change with it — keeps you calm and wise in the first hour of a baby's life.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Oxygen-rich blood returns from the placenta through the **umbilical vein** — the only vein in fetal life carrying fresh oxygen. Most of it skips the liver via the first shunt, the **ductus venosus**, into the inferior vena cava. In the right atrium, the second shunt, the **foramen ovale**, swings it across to the left atrium, dodging the lungs, and blood entering the pulmonary artery is mostly diverted by the third shunt, the **ductus arteriosus**, straight into the descending aorta. The two **umbilical arteries** then carry used blood back to the placenta for a refill.\n\nAt the first cries, everything changes. The lungs open, pulmonary resistance falls, blood floods in, and left-heart pressure rises above the right: the foramen ovale and ductus arteriosus now close functionally — the ductus sealing over hours to days into the **ligamentum arteriosum**. Fetal haemoglobin, which grips oxygen tighter than the adult form, hands over gradually in the first months of life.",
      },
      {
        type: "clinical_pearl",
        body: "A soft murmur in the first day or two of a pink, feeding, breathing-well baby is often the ductus finishing its closure. Judge the baby, not just the sound — poor feeding, fast breathing or blueness is a referral.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are doing the daily newborn check on a term baby born 20 hours ago at your health centre. He is pink, breastfeeding well, and his mother mentions the night midwife 'heard a slight noise in the heart'. On listening you hear a soft murmur; his breathing is easy and his colour good.\n\nWhat is the most likely explanation, and what will you do next?\n\nAnswer: In the first one to two days of life, a soft murmur in a well baby commonly reflects transitional circulation — the ductus arteriosus still finishing its closure after birth. Confirm he is pink, feeding and breathing normally, explain this to the mother, and arrange routine review to re-check that the murmur fades. Teach the newborn danger signs and ask her to return sooner if he feeds poorly, breathes fast or looks blue. A murmur that persists, or one with those signs, needs referral.",
      },
      {
        type: "memory_trick",
        body: "The three shunts dodge the lazy organs: the ductus venosus dodges the liver, the foramen ovale dodges the lungs, and the ductus arteriosus dodges the lungs again. One vein in, two arteries out.",
      },
      {
        type: "summary",
        body: "- The umbilical vein carries oxygenated blood; the two umbilical arteries return it to the placenta.\n- Three shunts route blood past organs not yet in use: ductus venosus (liver), foramen ovale and ductus arteriosus (lungs).\n- The first breaths drop pulmonary resistance and close the shunts functionally; the ductus seals over hours to days.\n- A soft murmur in a well baby on day one or two is usually transitional — assess feeding, colour and breathing before worrying.",
      },
    ],
    questions: [
      {
        topic: "Fetal Circulation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which fetal vessel normally carries oxygenated blood?",
        options: [
          "The umbilical vein",
          "The umbilical arteries",
          "The ductus arteriosus",
          "The pulmonary artery",
        ],
        correctIndex: 0,
        explanation:
          "The umbilical vein is the exception in fetal circulation — the only vein carrying oxygen-rich blood, from placenta to fetus. The umbilical arteries and pulmonary artery carry less oxygenated blood.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Circulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newborn takes her first breaths. What happens to the fetal shunts?",
        options: [
          "They widen to let more blood reach the lungs before birth",
          "Nothing changes until the cord is cut",
          "Pulmonary resistance falls and pressures close the foramen ovale and ductus arteriosus functionally",
          "The ductus venosus becomes the main channel for lung blood flow",
        ],
        correctIndex: 2,
        explanation:
          "Lung expansion drops pulmonary resistance, blood flows to the lungs, and left-sided pressure rises above the right — functionally closing the foramen ovale and ductus arteriosus, with the ductus sealing anatomically over hours to days.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Circulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife hears a soft heart murmur in a pink, breastfeeding term baby aged 24 hours. What is the most likely explanation?",
        options: [
          "Congenital heart disease requiring immediate transfer",
          "Closure of the ductus arteriosus, still in transition",
          "Pneumonia acquired during the birth",
          "Severe neonatal anaemia from rhesus disease",
        ],
        correctIndex: 1,
        explanation:
          "Soft murmurs in well babies on day one or two often reflect the transitional flow of the closing ductus. Assess the whole baby — feeding, colour, breathing — and review, rather than alarming the mother.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Circulation",
        front: "Name the three fetal shunts and what each bypasses.",
        back: "Ductus venosus bypasses the liver; foramen ovale bypasses the lungs (right to left atrium); ductus arteriosus bypasses the lungs (pulmonary artery to aorta).",
      },
      {
        topic: "Fetal Circulation",
        front: "What closes the shunts at birth?",
        back: "The first breaths: lung expansion drops pulmonary resistance, pulmonary blood flow rises, and left-heart pressure exceeds the right, closing the foramen ovale and ductus functionally.",
      },
      {
        topic: "Fetal Circulation",
        front: "What does the ductus arteriosus become after closure?",
        back: "The ligamentum arteriosum — closure is functional within hours and anatomical over the first days.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Pregnant Body",
    lessonTitle: "Physiological Changes of Pregnancy: Everything Adapts",
    description:
      "Every system changes to carry a baby — knowing normal pregnancy from warning signs.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the major cardiovascular, renal, respiratory and gastrointestinal adaptations of pregnancy.",
      "Explain dilutional physiological anaemia and why Hb below 11 g/dL still means true anaemia.",
      "Apply the shifted normal ranges to tell adaptation from disease, including supine hypotension.",
    ],
    tags: ["physiological changes", "blood volume", "supine hypotension", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy is the physiology exam you sit every day on the ward. Blood volume, heart output, breathing, kidney work — nearly everything changes so the mother can carry and feed a second person. If you do not know the new normal, you will either panic over normal things or sleep on dangerous ones.\n\nThe rule of this lesson: pregnant women adapt. Learn the direction and size of each change, then read every observation against those shifted baselines.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Blood **plasma volume rises by about 40 to 50 percent** while red cell mass rises only 20 to 30 percent, so the blood is deliberately thinned — the **physiological anaemia of pregnancy**. Expected, yes, but a haemoglobin below **11 g/dL** still counts as true anaemia needing treatment. **Cardiac output rises** about a third and the pulse quickens by 10 to 15 beats per minute. Blood pressure usually **dips in the second trimester** and climbs back towards term — so a second-trimester 104/60 is normal, and it is the later trend that warns you.\n\nThe kidneys filter about 50 percent more, so urinary frequency and a little sugar in the urine are common without meaning diabetes. Progesterone relaxes smooth muscle everywhere: the stomach valve loosens (heartburn), the bowel slows (constipation), ligaments soften (backache and a waddle). Breathing deepens, so mild breathlessness on stairs is normal — breathlessness at rest never is. From about 20 weeks the heavy womb squashes the great vessels when she lies flat, causing **supine hypotension** — cured instantly by turning her onto her left side.",
      },
      {
        type: "clinical_pearl",
        body: "Read blood pressure as a story, not a snapshot. A climb from her booking 100/60 towards the 140/90 line is a whisper of pre-eclampsia even before the line is crossed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-week multigravida at your ANC explains she feels dizzy and breathless when lying flat during her afternoon rest, and it disappears when she sits up. She has no cough, her conjunctivae are pink, and her blood pressure today is 116/74.\n\nWhat is happening, and what do you advise and check?\n\nAnswer: This is classic supine hypotension — the pregnant uterus compressing the inferior vena cava and aorta when she lies flat, relieved by position change. Teach her to rest and sleep on her left side. Her steady blood pressure and pink conjunctivae are reassuring, but since she mentions breathlessness, confirm her haemoglobin is above 11 and ask whether it ever comes at rest — rest breathlessness escalates. Simple positioning advice plus a quick anaemia screen covers both the harmless and the serious.",
      },
      {
        type: "memory_trick",
        body: "Dilution is normal; deficiency is not. The pregnant body waters the blood down by design — but below 11 g/dL she needs iron, not reassurance.",
      },
      {
        type: "summary",
        body: "- Plasma rises 40 to 50 percent against a 20 to 30 percent red cell rise: mild dilutional drop is normal, Hb below 11 g/dL is true anaemia.\n- Cardiac output rises about a third, pulse adds 10 to 15 beats, and BP dips in the second trimester before returning toward term.\n- Kidney filtration rises about 50 percent — frequency and some glycosuria are expected, not automatic disease.\n- Progesterone relaxes smooth muscle and ligaments (heartburn, constipation, backache); from 20 weeks, left lateral position relieves supine hypotension.",
      },
    ],
    questions: [
      {
        topic: "Physiological Changes of Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does haemoglobin concentration normally fall in pregnancy?",
        options: [
          "The mother's bone marrow slows down for nine months",
          "Plasma volume rises more than red cell mass, diluting the blood",
          "The fetus consumes the mother's red cells directly",
          "Iron stores are transferred entirely to the placenta at term",
        ],
        correctIndex: 1,
        explanation:
          "Plasma volume rises 40 to 50 percent while red cell mass rises only 20 to 30 percent — the blood is diluted by design. A fall below 11 g/dL, however, is true anaemia requiring treatment.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at 32 weeks feels dizzy whenever she lies flat on her back. What is the first management step?",
        options: [
          "Give oxygen by facemask immediately",
          "Check a random blood sugar",
          "Turn her onto her left side",
          "Refer urgently for an ECG",
        ],
        correctIndex: 2,
        explanation:
          "From about 20 weeks the uterus can compress the inferior vena cava and aorta in the supine position, reducing venous return — the immediate cure is the left lateral position.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these findings in a 34-week woman is NOT explained by normal physiological adaptation and needs action?",
        options: [
          "Resting respiratory rate of 28 breaths per minute",
          "Resting pulse of 92 beats per minute",
          "Blood pressure of 108/68 in the second trimester",
          "Mild glycosuria on dipstick with normal glucose tolerance",
        ],
        correctIndex: 0,
        explanation:
          "Pregnancy deepens breathing but does not raise the rate — it stays 12 to 20. A rate of 28 is always abnormal and signals illness (infection, anaemia, cardiac disease, or another emergency). A pulse of 92, a second-trimester BP dip and mild glycosuria are all expected adaptations.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Physiological Changes of Pregnancy",
        front: "Why does haemoglobin fall in normal pregnancy, and what level means true anaemia?",
        back: "Plasma volume rises more than red cell mass (dilution); Hb below 11 g/dL in pregnancy is true anaemia needing treatment.",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        front: "What causes supine hypotension and what is the instant cure?",
        back: "From about 20 weeks the uterus compresses the inferior vena cava and aorta when she lies flat; turning her left lateral relieves it at once.",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        front: "What happens to blood pressure across pregnancy?",
        back: "It dips in the second trimester and returns towards term — so the trend from her booking baseline matters more than any single reading; 140/90 is the action threshold.",
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
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Pregnant Body",
    lessonTitle: "Diagnosing Pregnancy",
    description:
      "Signs, symptoms and tests — confirming pregnancy confidently and dating it accurately.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Classify the signs of pregnancy as presumptive, probable and positive, with examples.",
      "Explain how urine pregnancy tests work and what they cannot tell you.",
      "Apply Naegele's rule and ultrasound dating, choosing the best method for each woman.",
    ],
    tags: ["pregnancy diagnosis", "hcg", "dating", "naegele's rule", "ultrasound"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'Am I pregnant?' is the question that first brings most women through your door, and how you answer it matters. A confidently dated pregnancy sets the rhythm of all the antenatal care that follows; a careless guess quietly scrambles every later decision, from when to give malaria prevention to when to refer a growth problem.\n\nIn this lesson we separate the signs only the mother can feel from the signs you can see and test, finish with the few that prove pregnancy beyond argument, and then date it properly.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Presumptive signs** are what the woman feels: a missed period, nausea, tender breasts, tiredness, frequent urination. Stress, illness or a late cycle can mimic any of them — they suggest, never confirm. **Probable signs** are what you find: a soft enlarging uterus, bluish vaginal walls, a positive urine test. The test detects **hCG**, which roughly doubles every two days in a healthy early pregnancy — but a test only says hCG is present; it cannot say where the pregnancy is sitting.\n\n**Positive signs** come from the baby itself: hearing the fetal heart, feeling fetal movement with your own hand, or seeing the fetus on ultrasound — the heartbeat flickers on screen from about 6 weeks. For dating, **Naegele's rule** takes a reliable last menstrual period, subtracts three months and adds seven days, assuming a regular 28-day cycle. If her cycles are irregular, she was breastfeeding, or she conceived on contraception, the LMP lies — then **ultrasound with crown-rump length before 13 weeks 6 days** is the most accurate tool you have.",
      },
      {
        type: "clinical_pearl",
        body: "A pregnancy test tells you that she is pregnant, never where. Pain plus a positive test means ectopic until ultrasound proves otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 29-year-old mother presents unsure of her dates: she breastfed her last baby until four months ago and her cycles have been irregular since. She believes she is 'about four months' based on when she first felt flutters, but cannot say exactly when.\n\nWhat is the most reliable way to establish her gestational age, and why?\n\nAnswer: Ultrasound. If she is still under 14 weeks, crown-rump length dates the pregnancy to within about a week; if she is already in the second trimester, other ultrasound measures still beat a shaky LMP, though accuracy loosens to about two weeks. Her quickening recollection is rough — first movements usually arrive at 18 to 20 weeks in a first-time mother and 16 to 18 in others — and breastfeeding plus irregular cycles makes the LMP unreliable. Record the dating method and EDD clearly, because every antenatal decision downstream depends on it.",
      },
      {
        type: "memory_trick",
        body: "Three Ps, rising in certainty: she Presumes (symptoms), you Probably see (uterus, positive test), only the baby Proves (heartbeat, parts felt, ultrasound).",
      },
      {
        type: "summary",
        body: "- Presumptive signs are maternal feelings — amenorrhoea, nausea, breast tenderness; suggestive, never confirmatory.\n- Probable signs include uterine enlargement and a positive hCG test — hormone present, location unproven.\n- Positive signs come from the baby: fetal heart, fetal parts or movement, or ultrasound visualisation.\n- Date by reliable LMP with Naegele's rule; with unreliable cycles, ultrasound before 13 weeks 6 days is best.",
      },
    ],
    questions: [
      {
        topic: "Diagnosing Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is a POSITIVE sign of pregnancy?",
        options: [
          "A missed period with morning nausea",
          "A positive urine pregnancy test",
          "A soft, enlarged uterus on examination",
          "Fetal heartbeat heard on auscultation",
        ],
        correctIndex: 3,
        explanation:
          "Only signs arising from the baby itself are positive: fetal heart heard, fetal parts or movement felt by the examiner, or ultrasound visualisation. The others are presumptive or probable.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Diagnosing Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The first day of a reliable last menstrual period was 10 March 2024, with regular 28-day cycles. Using Naegele's rule, the estimated date of delivery is:",
        options: [
          "3 March 2025",
          "10 December 2024",
          "17 December 2024",
          "17 January 2025",
        ],
        correctIndex: 2,
        explanation:
          "Naegele's rule: subtract three months (10 March to 10 December) and add seven days, giving 17 December 2024 — accurate only when the LMP and cycle pattern are reliable.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Diagnosing Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which woman most needs ultrasound dating rather than dates from her last menstrual period?",
        options: [
          "A woman still breastfeeding with irregular cycles since her last birth",
          "A woman with regular 28-day cycles and a certain LMP",
          "A woman who charts her cycles and knows her ovulation day",
          "A second-time mother whose previous dating matched her LMP exactly",
        ],
        correctIndex: 0,
        explanation:
          "Breastfeeding and irregular cycles make the LMP unreliable. Ultrasound crown-rump length before 13 weeks 6 days then becomes the most accurate dating method, since quickening recollection is only approximate.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Diagnosing Pregnancy",
        front: "Give one example each of a presumptive, probable and positive sign of pregnancy.",
        back: "Presumptive: amenorrhoea or nausea (felt by the woman). Probable: enlarging uterus or positive urine test (seen by the examiner). Positive: fetal heartbeat, fetal parts, or ultrasound visualisation.",
      },
      {
        topic: "Diagnosing Pregnancy",
        front: "State Naegele's rule.",
        back: "Take the first day of a reliable LMP, subtract three calendar months, add seven days (and add one year) — it assumes a regular 28-day cycle with ovulation on day 14.",
      },
      {
        topic: "Diagnosing Pregnancy",
        front: "What is the most accurate way to date a pregnancy with an unreliable LMP?",
        back: "Ultrasound crown-rump length before 13 weeks 6 days — accurate to within about a week.",
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
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Pregnant Body",
    lessonTitle: "Minor Disorders of Pregnancy: Common but Real",
    description:
      "Nausea, heartburn and swollen ankles — the discomforts you can soothe and those you can't ignore.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the common minor disorders of pregnancy with safe, practical first-line advice.",
      "Explain the physiology behind nausea, heartburn, constipation and ankle swelling.",
      "Apply red-flag screening to tell a minor disorder from an early danger sign.",
    ],
    tags: ["minor disorders", "nausea", "heartburn", "oedema", "self care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask any pregnant woman in your waiting area what troubles her and you will hear this lesson's list: the nausea, the burning chest after kenkey, the swollen ankles by evening, the constipation. These discomforts are real and deserve real answers, not an eye-roll. The skill is soothing the harmless while never missing the dangerous.\n\nMost minor disorders flow straight from pregnancy physiology — progesterone and a growing uterus — so the advice makes sense too: work with the body's changes rather than against them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Nausea** troubles most women in the first trimester. Advise small, frequent, dry carbohydrate snacks (toast or biscuits on waking), fluids between rather than with meals, ginger tea, and avoiding trigger smells. But if vomiting becomes relentless — weight loss, dehydration, no food kept down — that is **hyperemesis gravidarum**, and she needs referral, not more ginger. **Heartburn** comes from progesterone relaxing the stomach's valve while the uterus pushes up: smaller meals, sitting upright after eating, no late heavy meals, antacids when needed.\n\n**Constipation** answers to water, fibre and daily walking. Evening ankle swelling without other signs is common in the third trimester — rest with feet raised, avoid long standing, sleep on the left side. Leg cramps ease with gentle foot dorsiflexion. More vaginal discharge is normal in pregnancy — but itch, odour or soreness signals infection needing treatment. Whatever the complaint, screen for red flags: headache, visual change, face or hand swelling, fever, reduced fetal movement.",
      },
      {
        type: "clinical_pearl",
        body: "Ankles that swell in the evening and shrink by morning are normal. A face that looks puffy at breakfast, with headache, is pre-eclampsia until excluded — check her blood pressure and urine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-week primigravida complains of swollen feet every evening for two weeks. She has no headache, no visual symptoms, her face and hands are not swollen, blood pressure is 122/74 and urine dipstick shows no protein. She asks whether the swelling is dangerous.\n\nWhat do you tell her, and which single finding would change everything?\n\nAnswer: Reassure her genuinely — dependent ankle oedema in the evening, with normal blood pressure, no protein and no symptoms, is a normal pregnancy discomfort. Advise rest with feet elevated, left-side sleeping and avoiding long standing. Then name the alarms: swelling of the face or hands, headache or blurred vision, blood pressure at or above 140/90, or protein in the urine would demand immediate return and evaluation for pre-eclampsia. Naming the red flags turns a routine visit into a safety net.",
      },
      {
        type: "memory_trick",
        body: "Ankles in the evening are fine; a puffy face at breakfast is a warning.",
      },
      {
        type: "summary",
        body: "- Nausea: small dry snacks, fluids between meals, ginger — relentless vomiting with dehydration or weight loss is hyperemesis: refer.\n- Heartburn: progesterone plus a lifted stomach — smaller meals, upright after eating, antacids as needed.\n- Constipation and ankle swelling: fibre, water, walking, feet-up rest and left-side sleep.\n- Screen every minor complaint for red flags — face or hand swelling, headache, visual symptoms, fever, reduced movement.",
      },
    ],
    questions: [
      {
        topic: "Minor Disorders of Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at 28 weeks has burning chest pain after large evening meals. What best explains this in pregnancy?",
        options: [
          "The stomach produces excess acid from the third trimester",
          "Progesterone relaxes the stomach's valve and the uterus presses upward",
          "Pregnancy slows the kidneys, causing fluid to back up into the chest",
          "The enlarged liver displaces the stomach sideways",
        ],
        correctIndex: 1,
        explanation:
          "Progesterone relaxes the lower oesophageal sphincter while the growing uterus lifts the stomach — together allowing reflux. Smaller meals, upright posture after eating and antacids help.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Minor Disorders of Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 10 weeks vomits several times daily for two weeks, has lost 4 kg and cannot keep any food down. What is the correct management?",
        options: [
          "Double the ginger tea and review at the booking visit",
          "Reassure her that all vomiting in pregnancy is normal",
          "Refer for assessment and treatment of hyperemesis gravidarum",
          "Start oral iron immediately to replace lost nutrients",
        ],
        correctIndex: 2,
        explanation:
          "Relentless vomiting with weight loss, dehydration and inability to keep food down is hyperemesis gravidarum, not ordinary morning sickness — she needs referral for assessment, fluids and treatment. Oral iron on an emptied stomach would only worsen the vomiting.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Minor Disorders of Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these complaints at a routine visit needs same-day escalation rather than simple advice?",
        options: [
          "Evening ankle swelling with BP 118/72 and no protein",
          "Mild nausea relieved by dry snacks in the morning",
          "Heartburn after large meals, eased by smaller portions",
          "Facial swelling with headache and flashing lights",
        ],
        correctIndex: 3,
        explanation:
          "Face or hand swelling with headache and visual disturbance is the classic warning of pre-eclampsia — check blood pressure and urine and escalate the same day. The other three are minor disorders managed with advice and review.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Minor Disorders of Pregnancy",
        front: "What marks the line between ordinary nausea and hyperemesis gravidarum?",
        back: "Relentless vomiting with weight loss, dehydration or inability to keep food down — hyperemesis needs referral for assessment and treatment.",
      },
      {
        topic: "Minor Disorders of Pregnancy",
        front: "Why does heartburn occur in pregnancy, and what helps?",
        back: "Progesterone relaxes the lower oesophageal sphincter and the uterus lifts the stomach. Smaller meals, sitting upright after eating and antacids when needed.",
      },
      {
        topic: "Minor Disorders of Pregnancy",
        front: "Normal vs concerning oedema?",
        back: "Evening ankle swelling that clears by morning is normal; face and hand swelling, especially with headache or visual symptoms, is pre-eclampsia until excluded.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Booking Visit and Routine Care",
    lessonTitle: "The Booking Visit: Your First Full Picture",
    description:
      "The comprehensive first antenatal visit — history, examination and the plan it creates.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the five components of a complete booking visit, from history to written plan.",
      "Explain the purpose of the core booking investigations and baseline measurements.",
      "Apply risk assessment at booking to produce an individualised care plan for each woman.",
    ],
    tags: ["booking visit", "anc", "screening", "risk assessment", "care plan"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The booking visit is the foundation stone of safe motherhood — the one long, unhurried conversation where you meet the pregnancy properly before the routine begins. Everything later stands on what you establish here: the dates, the risks, the baseline blood pressure and haemoglobin, and above all the relationship.\n\nDone well, booking finds the woman who needs a hospital delivery long before her emergency begins. Done carelessly, it is just a register entry. In this lesson we build it step by step.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The first contact should ideally happen **before 12 weeks**. The visit has five parts. **History**: obstetric, medical, surgical, family, social and menstrual, ending with a gestational age and EDD. **Examination**: a general survey — height, weight, pallor, thyroid, breasts, legs — vital signs, and abdominal examination. **Investigations**: haemoglobin, blood group and Rhesus, HIV, syphilis, urinalysis (protein, glucose, infection) and hepatitis B screening per national guideline. **Risk assessment**: anything that changes where or how she should deliver — previous caesarean, hypertension, height under 150 cm, adolescence, grand multiparity, or a three-hour journey to the facility.\n\nFinally, **the plan**: start daily iron and folic acid, give the contact schedule, arrange malaria prevention (IPTp from the second trimester plus a treated net), teach the danger signs today rather than at the end, and record everything in her antenatal booklet. Offer HIV testing with counselling and invite her partner. A woman who leaves booking knowing her EDD, her warning signs and her next appointment already carries her own safety in her hand.",
      },
      {
        type: "clinical_pearl",
        body: "Book the visit, and book her trust in the same hour. A woman who felt rushed at booking arrives in labour at 3 am unsure whether to come to you at all.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 26-year-old primigravida arrives at your CHPS compound at 10 weeks by dates, healthy and cheerful — the first in her family ever to start antenatal care this early. Her mother has told her the visits 'really start at six months'.\n\nWhat must be accomplished today for the visit to be complete, and how do you answer her mother's advice?\n\nAnswer: Complete the five parts: full history with EDD, baseline examination and vital signs, core investigations (haemoglobin, blood group and Rhesus, HIV, syphilis, urinalysis, hepatitis B per guideline), risk assessment, and a written plan — iron and folic acid started, contact schedule given, danger signs taught, malaria prevention arranged. Then gently correct the family advice: starting early lets you date the pregnancy accurately, treat anaemia before it harms, screen infections in time and build trust. First contact before 12 weeks is the standard, and her instinct to come early was right.",
      },
      {
        type: "memory_trick",
        body: "HEIDI makes the plan: History, Examination, Investigations, Dating, Individualised plan. Miss one part and the foundation has a crack in it.",
      },
      {
        type: "summary",
        body: "- Aim for the first contact before 12 weeks — accurate dating and early screening depend on it.\n- Booking = HEIDI: history, examination, investigations, dating, individualised plan.\n- Core tests: haemoglobin, blood group and Rhesus, HIV, syphilis, urinalysis, hepatitis B per national guideline.\n- Before she leaves: iron and folic acid started, contact schedule given, danger signs taught, plan written in her booklet.",
      },
    ],
    questions: [
      {
        topic: "The Booking Visit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the ideal timing of the first antenatal contact?",
        options: [
          "As soon as she feels quickening",
          "At 28 weeks, when fetal viability improves",
          "At 20 weeks, when the uterus is measurable",
          "Before 12 weeks of pregnancy",
        ],
        correctIndex: 3,
        explanation:
          "WHO recommends a first contact before 12 completed weeks — early booking allows accurate dating, early screening and treatment of anaemia and infections, and time to build trust and the birth plan.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "The Booking Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are blood group and Rhesus factor documented at booking?",
        options: [
          "To predict the baby's blood group before delivery",
          "To identify Rhesus-negative women needing specialised follow-up to prevent sensitisation in this or future pregnancies",
          "To decide which ward she will sleep on after delivery",
          "To calculate how much iron she will need in pregnancy",
        ],
        correctIndex: 1,
        explanation:
          "A Rhesus-negative mother carrying a Rhesus-positive baby can become sensitised, endangering this and especially future pregnancies. Identifying her at booking allows specialised follow-up and preventive care per national guideline.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "The Booking Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these booking findings changes the PLACE of planned delivery rather than just the visit schedule?",
        options: [
          "Haemoglobin of 11.5 g/dL with no symptoms",
          "A blood pressure of 108/66 at 10 weeks",
          "One previous caesarean birth for obstructed labour",
          "Mild nausea in the mornings",
        ],
        correctIndex: 2,
        explanation:
          "A previous caesarean means a scarred uterus at risk of rupture — she should deliver where theatre, blood and surgical staff are available. The other findings are normal or manageable at routine level.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "The Booking Visit",
        front: "List the five parts of a complete booking visit.",
        back: "History, Examination, Investigations, Dating, Individualised plan — HEIDI.",
      },
      {
        topic: "The Booking Visit",
        front: "What core investigations are performed at booking?",
        back: "Haemoglobin, blood group and Rhesus, HIV, syphilis, urinalysis (protein, glucose, infection) and hepatitis B screening per national guideline.",
      },
      {
        topic: "The Booking Visit",
        front: "Why does a maternal height under 150 cm matter at booking?",
        back: "It flags possible cephalopelvic disproportion risk — short stature is a reason to plan delivery where safe obstetric intervention is available.",
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
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Booking Visit and Routine Care",
    lessonTitle: "History Taking in Antenatal Care",
    description:
      "Obstetric, medical and social history — the questions that reveal risk before it bites.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Take a structured obstetric history using gravidity, parity and previous pregnancy outcomes.",
      "Explain how medical, surgical, family and social history change the plan of care in pregnancy.",
      "Apply history findings to flag high-risk women and plan their place of care.",
    ],
    tags: ["history taking", "obstetric history", "risk factors", "grand multiparity"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The most powerful instrument at the antenatal bench is not the doppler or the sphygmomanometer — it is your question list. A previous stillbirth, a scarred uterus, a heart murmur, a violent partner: none of these appears on examination, yet each one rewrites the birth plan.\n\nHistory taking is pattern-finding. You are not collecting facts for their own sake; you are hunting the risks that need action before they bite.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the **obstetric history**: gravidity and parity (many services add TPAL — term births, preterm births, abortions, living children), then interrogate every previous pregnancy. How did it end? Any caesarean — why, and what scar? Any postpartum haemorrhage, pre-eclampsia, stillbirth, neonatal death, preterm or low-birth-weight baby? A **grand multipara** — five or more births — risks haemorrhage and malpresentation, and a gap under six months since the last birth is a nutritional and uterine risk.\n\nThen the **medical history**: hypertension, diabetes, sickle cell disease (her status and her partner's), epilepsy, heart disease, TB, HIV. **Surgical history**: caesarean or fibroid surgery means a scarred uterus. **Family history**: hypertension, diabetes, twins, sickle cell. **Social history** sets logistics as much as medicine — her age (adolescents and women over 35 need extra attention), distance and transport, money, who will decide if she collapses, intimate partner violence (asked privately), workload and food security. **Menstrual and contraceptive history** completes the picture and polishes the dating.",
      },
      {
        type: "clinical_pearl",
        body: "The past is your crystal ball. One previous PPH or one previous caesarean changes today's plan more than anything you will find on abdominal examination.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 35-year-old G5P4 arrives at 16 weeks for booking. Her first three babies delivered normally at a facility, the fourth was born by caesarean for 'failure to progress', and the third was followed by severe bleeding requiring transfer to the district hospital.\n\nWhat does this history change about her care?\n\nAnswer: Two flags rise at once: a previous caesarean (scarred uterus — risk of rupture, so she must deliver where theatre and blood are available) and previous PPH (the strongest predictor of bleeding again — plan an active third stage, secure intravenous access in labour, and correct anaemia now). Age and grand multiparity add further risk. She should deliver at the district hospital, not a health centre, with the plan written, shared with her and updated at every contact — plus screening, iron and folic acid, and danger-sign teaching including bleeding.",
      },
      {
        type: "memory_trick",
        body: "The five files of history: Obstetric, Medical, Surgical, Family, Social. Open all five at booking — the risk is always filed in one of them.",
      },
      {
        type: "summary",
        body: "- Obstetric history: parity and TPAL, then every outcome — caesarean, PPH, pre-eclampsia, stillbirth, preterm birth.\n- Medical and surgical history: hypertension, diabetes, sickle cell, HIV, epilepsy, uterine scars.\n- Family history: hypertension, diabetes, twins, sickle cell — screen the partner where relevant.\n- Social history sets logistics: age, distance, transport, money, decision-makers, violence — asked privately.",
      },
    ],
    questions: [
      {
        topic: "History Taking in Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which element belongs to the OBSTETRIC history rather than the medical or social history?",
        options: [
          "A previous postpartum haemorrhage",
          "A diagnosis of sickle cell disease",
          "A distance of two hours from the nearest facility",
          "Family history of hypertension",
        ],
        correctIndex: 0,
        explanation:
          "Postpartum haemorrhage in a previous pregnancy is obstetric history — and the strongest single predictor of bleeding again. Sickle disease is medical, distance is social, and family hypertension is family history.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "History Taking in Antenatal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A grand multipara is conventionally a woman who has given birth how many times?",
        options: [
          "Once",
          "Twice",
          "Three times",
          "Five or more times",
        ],
        correctIndex: 3,
        explanation:
          "Grand multiparity is conventionally five or more births. It carries increased risk of postpartum haemorrhage, malpresentation and uterine dysfunction, so the birth plan must reflect it.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "History Taking in Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should screening questions about intimate partner violence be asked with the woman alone?",
        options: [
          "Because the questions are only valid in the first trimester",
          "Because a partner or relative present may stop her answering honestly, and may endanger her further if she does",
          "Because the answers must be recorded in front of the partner",
          "Because the questions require a chaperone for legal reasons",
        ],
        correctIndex: 1,
        explanation:
          "Disclosing violence is only safe when she can speak freely. A present partner blocks honest answers or invites retaliation afterwards — so ask privately, respond calmly, document carefully, and offer support and referral.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "History Taking in Antenatal Care",
        front: "What does TPAL record?",
        back: "Term births, Preterm births, Abortions (miscarriages), Living children — a precise way to summarise obstetric history beyond simple parity.",
      },
      {
        topic: "History Taking in Antenatal Care",
        front: "Why does a previous caesarean matter so much in the history?",
        back: "It leaves a scarred uterus at risk of rupture in labour — delivery must be planned where theatre, blood and surgical staff are available.",
      },
      {
        topic: "History Taking in Antenatal Care",
        front: "Define grand multiparity and one key risk.",
        back: "Five or more births; risks include postpartum haemorrhage, malpresentation and uterine dysfunction.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Booking Visit and Routine Care",
    lessonTitle: "Physical Examination and Maternal Vital Signs in Pregnancy",
    description:
      "Examining the pregnant woman and reading her vitals — the normal ranges that change in pregnancy.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Perform a head-to-toe antenatal examination, including height, weight, pallor and leg assessment.",
      "State the normal vital sign ranges in pregnancy and the blood pressure threshold that triggers action.",
      "Apply trend-reading to blood pressure, weight and pulse to catch deterioration early.",
    ],
    tags: ["physical examination", "vital signs", "blood pressure", "preeclampsia screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Examination in pregnancy is a calm, ordered sweep: look at the whole woman, work through the systems, and finish at the bump, where fundal height, lie and the fetal heart are waiting. Between the looking and the listening you will collect the numbers that protect both lives.\n\nVital signs in pregnancy read like a shifted dialect — pulse a little quick, blood pressure lower in mid-pregnancy, breathing deeper but not faster. Learn the dialect, and the abnormal accent stands out at once.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Begin with the **general survey** as she walks in: body build, gait, breathing, comfort. Measure **height** (under 150 cm flags possible cephalopelvic disproportion), **weight** and BMI, then look for **pallor** in the palms and conjunctivae, check the thyroid and breasts, and examine the **legs** for oedema, varicose veins and calf tenderness. The shifted normals: **pulse commonly 70 to 90, up to about 100 acceptable at rest** (it has risen by 10 to 15 beats); **respiratory rate 12 to 20 and unchanged** — above 24 is always abnormal; **temperature** normal; **blood pressure below 140/90**, measured after a short rest on the correct cuff.\n\nInterpretation is the examination's second half. Blood pressure at or above **140/90** demands urine protein testing and a symptom screen for pre-eclampsia — but read the **trend** too, since a climb from a low booking baseline warns early. Weight gain in later pregnancy runs roughly **half a kilogram a week**; a sudden jump is fluid, not food. Abdominal examination — fundal height, lie, presentation, fetal heart — completes the routine, with her semi-reclined and tilted left in later pregnancy. Chart every number, every visit: trends are diagnoses.",
      },
      {
        type: "clinical_pearl",
        body: "Measure blood pressure after she has sat for five minutes, with the cuff on a bare arm at heart level. A rushed blood pressure is a fictional blood pressure.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-week primigravida attends a routine contact. Her booking blood pressure was 104/62; today's quick reading is 138/86. She mentions a mild headache for two days that she blames on 'the sun', and the dipstick reads trace protein.\n\nWhat should you do next, and why is reassurance not enough?\n\nAnswer: Repeat the blood pressure properly after five minutes of rest, re-dip the urine, and screen hard for pre-eclampsia symptoms — headache, visual changes, upper abdominal pain. A significant rise from baseline, a headache and trace protein suggest evolving pre-eclampsia, and 138/86 sits only a whisker below the 140/90 line. Escalate for same-day assessment rather than sending her home with paracetamol — pre-eclampsia does not politely wait for the numbers to qualify before it endangers mother and baby.",
      },
      {
        type: "memory_trick",
        body: "Four numbers and a dip: pulse, pressure, respirations, temperature, urine — plotted alongside weight. The trend betrays what a single reading hides.",
      },
      {
        type: "summary",
        body: "- Examine head to toe: height (under 150 cm a caution), weight, pallor, thyroid, breasts, legs.\n- Pulse up 10 to 15 beats, respirations unchanged at 12 to 20, blood pressure below 140/90 — expect a second-trimester dip.\n- Blood pressure at or above 140/90, or a steep climb from her baseline, demands urine protein and a symptom screen.\n- Chart everything at every visit — weight, BP, pulse, urine — because trends catch deterioration long before single numbers do.",
      },
    ],
    questions: [
      {
        topic: "Maternal Vital Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What blood pressure threshold in pregnancy triggers investigation for pre-eclampsia?",
        options: [
          "Systolic 140 or diastolic 90 and above",
          "Systolic 120 or diastolic 80 and above",
          "Any rise of 5 mmHg from booking",
          "Diastolic 100 and above only",
        ],
        correctIndex: 0,
        explanation:
          "In pregnancy, 140 systolic or 90 diastolic and above is the action threshold — check urine protein and screen for symptoms. A rise from her own booking baseline matters too, even below the line.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Maternal Vital Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A routine observation in a 32-week woman reads: pulse 94, BP 118/74, respirations 26, temperature 36.8 C. Which value is abnormal for pregnancy and needs action?",
        options: [
          "Pulse of 94 beats per minute",
          "Blood pressure of 118/74",
          "Respiratory rate of 26 breaths per minute",
          "Temperature of 36.8 C",
        ],
        correctIndex: 2,
        explanation:
          "Pregnancy deepens breathing but never raises the rate — it stays 12 to 20, so 26 signals illness (infection, anaemia, cardiac or other emergency). A resting pulse of 94 and a BP of 118/74 are within pregnancy norms, and 36.8 C is normal.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Maternal Vital Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which technique gives the most accurate antenatal blood pressure reading?",
        options: [
          "Measure immediately as she rushes in from the queue",
          "Measure after five minutes seated rest, cuff on a bare arm at heart level",
          "Measure with a thigh cuff on her upper arm",
          "Measure while she lies flat on her back in the third trimester",
        ],
        correctIndex: 1,
        explanation:
          "Rest, correct cuff size and arm position at heart level give a true reading; a supine position in later pregnancy artificially lowers it through vena cava compression, while exertion falsely raises it.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Vital Signs in Pregnancy",
        front: "Which vital sign does NOT change in normal pregnancy, and what is its normal range?",
        back: "Respiratory rate — stays 12 to 20 breaths per minute; only the depth of breathing increases. Above 24 is always abnormal.",
      },
      {
        topic: "Maternal Vital Signs in Pregnancy",
        front: "What blood pressure requires action in pregnancy, and what two checks follow?",
        back: "140 systolic or 90 diastolic and above — test urine for protein and screen for pre-eclampsia symptoms (headache, visual change, upper abdominal pain).",
      },
      {
        topic: "Maternal Vital Signs in Pregnancy",
        front: "What does a sudden jump in maternal weight at a late contact usually mean?",
        back: "Fluid retention, not food — suspect pre-eclampsia and check blood pressure, urine and symptoms.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "The Booking Visit and Routine Care",
    lessonTitle: "Routine Antenatal Care: The Schedule That Protects",
    description:
      "The visit schedule, the screening tests and why each exists — the rhythm of good antenatal care.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Outline the WHO 2016 eight-contact schedule and the content of every contact.",
      "Explain the purpose of IPTp-SP, iron and folate, calcium and tetanus immunisation in pregnancy.",
      "Apply the schedule to a real woman's plan, including screening tests and their timing.",
    ],
    tags: ["anc schedule", "contacts", "iptp", "screening", "malaria prevention"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Good antenatal care is not a place women go when something hurts — it is a rhythm they keep all pregnancy, with fixed beats where problems are hunted while they are still small. In 2016 WHO moved from the old four-visit model to a richer **eight-contact schedule**, reducing perinatal deaths and improving women's experience of care.\n\nIn this lesson we lay out the timetable and — more importantly — unpack what must happen inside every contact, because an empty visit protects nobody.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The eight contacts land roughly at **before 12, 20, 26, 30, 34, 36, 38 and 40 weeks** — more attention in the third trimester, where growth problems and hypertensive disease do their quiet damage. Every contact reviews **danger signs, blood pressure, urine protein, fundal height and fetal heart**, and ends with a plan. Alongside the rhythm runs the preventive spine: **daily iron (30 to 60 mg elemental) and folic acid (400 micrograms)**; **calcium 1.5 to 2 g daily** where dietary intake is low; **IPTp with sulfadoxine-pyrimethamine** — at least three doses, given monthly from the second trimester in malaria-endemic Ghana — plus sleeping under a treated net.\n\nScreening follows the national guideline: syphilis and HIV (with partner invitation), haemoglobin, blood group and Rhesus, urinalysis, hepatitis B, and an **ultrasound before 24 weeks** for dating, viability and twins. Tetanus immunisation, deworming and health education complete the picture. Your facility's schedule may still list fewer contacts while services transition — but the content is the covenant: never let a visit pass without the danger-sign questions, the tape, the pressure and the dip.",
      },
      {
        type: "clinical_pearl",
        body: "A contact is not a visit — it is content. If she leaves with only a next appointment, no measurement, no teaching and no test result, a visit happened but a contact was missed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old second-time mother attends her 30-week contact feeling entirely well and jokes that with her first baby she came 'only twice before delivery'. Her blood pressure today is 112/70, fundal height 29 cm, fetal heart 144, and her third SP dose is due.\n\nWhat makes this contact worthwhile even though she feels fine?\n\nAnswer: Everything that protects her is invisible to her feelings. Today's measurements build the trend that will expose growth faltering or rising blood pressure at later contacts; the urine dip screens for protein that gives no symptoms until severe; the SP dose continues protecting her and the baby from placental malaria and the anaemia it causes; and the danger-sign review refreshes the one list that gets her to hospital in time. Routine contacts work precisely because they check everything while she still feels well.",
      },
      {
        type: "memory_trick",
        body: "Book by 12, then 20, 26, 30 — and tighten the net late: 34, 36, 38, 40. Every contact: ask, measure, dip, teach, plan.",
      },
      {
        type: "summary",
        body: "- WHO 2016 recommends eight contacts: before 12, 20, 26, 30, 34, 36, 38 and 40 weeks.\n- Every contact: danger signs, blood pressure, urine, fundal height, fetal heart, and a clear plan.\n- Preventive spine: daily iron 30 to 60 mg with folic acid 400 micrograms, calcium 1.5 to 2 g where intake is low, monthly IPTp-SP from the second trimester plus a treated net.\n- Screen syphilis, HIV, haemoglobin, Rhesus, urine and hepatitis B; ultrasound before 24 weeks; keep TT and deworming on schedule.",
      },
    ],
    questions: [
      {
        topic: "Routine Antenatal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How many antenatal contacts does WHO's 2016 antenatal care model recommend?",
        options: [
          "Two contacts, at booking and 36 weeks",
          "Four contacts, as in the old focused ANC model",
          "Eight contacts across the pregnancy",
          "Twelve contacts, monthly from booking",
        ],
        correctIndex: 2,
        explanation:
          "The 2016 WHO model recommends eight contacts — before 12, 20, 26, 30, 34, 36, 38 and 40 weeks — which reduced perinatal deaths and improved women's experience compared with the four-visit model.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Routine Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a malaria-endemic area like Ghana, when should IPTp with sulfadoxine-pyrimethamine be given?",
        options: [
          "Once at booking, in the first trimester",
          "Monthly from the second trimester, aiming for at least three doses before delivery",
          "Only if she reports fever at a contact",
          "Single dose after delivery to clear the placenta",
        ],
        correctIndex: 1,
        explanation:
          "IPTp-SP starts in the second trimester (after quickening, about 13 weeks) and is given monthly, directly observed, aiming for at least three doses — protecting against placental malaria, low birth weight and anaemia. SP is not used in the first trimester.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Routine Antenatal Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of checks belongs at EVERY antenatal contact, whatever the week?",
        options: [
          "Danger sign review, blood pressure, urine protein, fundal height and fetal heart",
          "Blood group and Rhesus testing at each visit",
          "Ultrasound scan at each visit",
          "Tetanus immunisation at each visit",
        ],
        correctIndex: 0,
        explanation:
          "Every contact reviews danger signs, blood pressure, urine, fundal height and fetal heart. Blood group is done once at booking; ultrasound is recommended once before 24 weeks; TT follows its own dosing schedule, not every visit.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Routine Antenatal Care",
        front: "List the weeks of the WHO 2016 eight-contact schedule.",
        back: "Before 12, 20, 26, 30, 34, 36, 38 and 40 weeks — denser in the third trimester.",
      },
      {
        topic: "Routine Antenatal Care",
        front: "What is the IPTp-SP schedule in a malaria-endemic area?",
        back: "Monthly SP, directly observed, starting in the second trimester (about 13 weeks), aiming for at least three doses before delivery — plus sleeping under a treated net.",
      },
      {
        topic: "Routine Antenatal Care",
        front: "What does every antenatal contact review, whatever the gestation?",
        back: "Danger signs, blood pressure, urine protein, fundal height, fetal heart — and it ends with a plan.",
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
        title: "Updated WHO Policy Recommendation: Intermittent Preventive Treatment of Malaria in Pregnancy using Sulfadoxine-Pyrimethamine (IPTp-SP)",
        year: "2012",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Watching the Fetus",
    lessonTitle: "Fetal Assessment and Fundal Height",
    description:
      "Measuring growth with hands and tape — the skill that detects problems early.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Measure symphysis-fundal height correctly and interpret it against gestational age.",
      "Perform the four abdominal palpation grips to determine lie, presentation and engagement.",
      "Apply serial measurement to detect growth faltering and refer appropriately.",
    ],
    tags: ["fundal height", "growth monitoring", "palpation", "fetal growth restriction"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A tape measure and two hands are the most powerful ultrasound many communities will ever have — and you are holding them. Fundal height, plotted visit after visit, is how the quiet baby who has stopped growing announces itself long before birth.\n\nThe tape is cheap; the skill is technique and patience. In this lesson we measure, palpate and — most of all — interpret trends.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "To measure **symphysis-fundal height**, ask her to empty her bladder, lie semi-reclined tilted left, and relax. Fix the zero of the tape on the upper border of the **symphysis pubis** and measure to the top of the fundus along the curve of the abdomen. From about **20 weeks the centimetres roughly track the weeks**, within about 2 to 3 cm either way. One measurement is a photograph; a series is a movie. If serial growth stalls or falls away, suspect fetal growth restriction and refer for ultrasound assessment.\n\nComplete the assessment with the **four palpation grips**: first feel the fundus — which pole sits there; second, map the sides to find the **back** (smooth, firm curve) and the small parts; third, just above the pubis, find the **presentation** — round, hard, ballotable head or soft irregular breech; fourth, judge head **engagement** by how many fifths remain above the brim. From these grips write the three-line story: lie, presentation, position. A breech or transverse lie persisting after 36 weeks needs referral for a hospital plan — vaginal breech birth is a specialised skill.",
      },
      {
        type: "clinical_pearl",
        body: "Plot, do not just note. A single 'fundus 30 cm at 32 weeks' is unremarkable; a curve that has not moved in a month is a baby not growing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old primigravida's measurements run: 27 cm at 28 weeks, 29 cm at 32 weeks, 30 cm at 36 weeks. Her last note says she 'felt the baby was quieter than usual', and her blood pressure today is 148/94 with 1+ protein on dipstick.\n\nWhat is the story the tape is telling, and what do you do?\n\nAnswer: Her fundal height has climbed barely 3 cm in eight weeks — growth has stalled. Add reduced fetal movement, rising blood pressure and proteinuria, and this paints placental insufficiency with evolving pre-eclampsia starving the baby of nutrition and oxygen. Refer urgently today for hospital assessment — blood pressure management, ultrasound growth and Doppler, and a delivery plan. Do not wait for term: a flat growth curve with hypertension and a quiet baby is among the highest-risk combinations on any antenatal bench.",
      },
      {
        type: "memory_trick",
        body: "From twenty weeks, the tape speaks weeks. And remember: one measurement is a photo, the series is the movie — watch the movie.",
      },
      {
        type: "summary",
        body: "- Measure from the symphysis pubis to the fundal top, bladder empty, mother tilted left; from 20 weeks cm tracks weeks within about 2 to 3 cm.\n- Serial measurement beats single readings — a stalled curve means referral for growth assessment.\n- The four grips give lie, presentation, position and engagement; find the back, the fetal heart's best address.\n- Breech or transverse lie after 36 weeks, or suspected growth restriction, refers for a hospital plan.",
      },
    ],
    questions: [
      {
        topic: "Fundal Height and Fetal Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "At 26 weeks, a fundal height of 25 cm is best described as:",
        options: [
          "Roughly appropriate for gestational age",
          "Markedly large for dates, suggesting twins",
          "Small for dates, requiring immediate referral",
          "Impossible, since the fundus is only measurable from 30 weeks",
        ],
        correctIndex: 0,
        explanation:
          "From about 20 weeks, symphysis-fundal height in centimetres roughly equals gestational weeks within 2 to 3 cm — 25 cm at 26 weeks is normal. Trends, not single readings, decide further action.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fundal Height and Fetal Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman's serial fundal heights are 26 cm at 28 weeks, 27 cm at 32 weeks and 27 cm at 36 weeks. What is the appropriate response?",
        options: [
          "Reassure her that growth slows naturally near term",
          "Refer for ultrasound assessment of fetal growth, same week",
          "Repeat the measurement at 40 weeks before acting",
          "Increase her iron dose and review in a month",
        ],
        correctIndex: 1,
        explanation:
          "A curve that has flattened across three measurements suggests fetal growth restriction from placental insufficiency — refer for ultrasound growth assessment without waiting; 'growth slows near term' is a myth that delays action.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fundal Height and Fetal Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A fundus measuring far AHEAD of dates could be explained by each of the following EXCEPT:",
        options: [
          "Twins",
          "Polyhydramnios",
          "Incorrect dating of the pregnancy",
          "Fetal growth restriction",
        ],
        correctIndex: 3,
        explanation:
          "Growth restriction causes a small-for-dates fundus, not a large one. Twins, polyhydramnios and wrong dates all push the tape ahead of the expected weeks — an ultrasound sorts them out.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fundal Height and Fetal Assessment",
        front: "How do you measure symphysis-fundal height, and what does it equal from 20 weeks?",
        back: "Bladder empty, mother semi-reclined tilted left, tape from the upper border of the symphysis pubis to the fundal top; from 20 weeks the cm roughly equals gestational weeks within 2 to 3 cm.",
      },
      {
        topic: "Fundal Height and Fetal Assessment",
        front: "What are the four palpation grips for?",
        back: "Fundal grip (which pole), lateral grips (back and small parts), pelvic grip (presentation), and the fifths assessment of head engagement above the brim — together they give lie, presentation and position.",
      },
      {
        topic: "Fundal Height and Fetal Assessment",
        front: "What does a flat or falling fundal height curve over serial visits mean?",
        back: "Suspected fetal growth restriction — refer for ultrasound growth assessment and delivery planning.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Watching the Fetus",
    lessonTitle: "Fetal Heart Assessment",
    description:
      "Finding and interpreting the fetal heartbeat — reassurance and alarm in one sound.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Auscultate the fetal heart with a Pinard or doppler and state the normal range of 110 to 160 bpm.",
      "Interpret rates outside the normal range and begin intrauterine resuscitation measures.",
      "Apply the schedule for intermittent auscultation during labour.",
    ],
    tags: ["fetal heart", "auscultation", "fetal distress", "intermittent monitoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The fetal heartbeat is the one sound that tells you, in a minute of listening, how the baby behind the bump is coping with life in there. Your Pinard stethoscope and the doppler are simple instruments carrying an outsized job: catching the baby whispering for help.\n\nListening is the easy part. Interpreting — and acting on time — is the skill this lesson builds.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The normal fetal heart rate sits between **110 and 160 beats per minute**. Find the **fetal back** with your hands — the heart sounds loudest through it — and count for a **full minute** in pregnancy, never a guess over fifteen seconds, and confirm you are not hearing the mother's pulse. A rate **below 110** is fetal bradycardia: an emergency — turn her onto her left side, stop any oxytocin infusion running, hydrate, summon senior help and refer. A sustained rate **above 160** is tachycardia — think maternal fever (malaria!), dehydration or early fetal compromise, and investigate rather than admire.\n\nIn labour, intermittent auscultation follows a discipline: listen **every 15 to 30 minutes in the first stage** and **about every 5 minutes in the second stage** — and always after the membranes rupture, after oxytocin dose changes and after vaginal examinations. Listen between contractions and record the rate with the time. What your ear cannot judge is variability and subtle deceleration patterns — where electronic monitoring is available it extends your ear; where it is not, your counted minute plus the whole picture (meconium, growth, movement, fever) is the wisdom you have.",
      },
      {
        type: "clinical_pearl",
        body: "A fetal heart rate that exactly matches the mother's pulse is not a coincidence — it is her radial pulse on a tour of the abdomen. Count both at once, always.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a 32-week contact a mother feels feverish and shivery; her temperature is 38.6 C and she blames 'the harmattan'. The fetal heart counts 172 over a full minute, and she sleeps under a torn mosquito net.\n\nWhat is the fetal heart telling you, and what happens next?\n\nAnswer: Fetal tachycardia at 172 with maternal fever points strongly to malaria until proved otherwise — the placenta cannot shield the baby from maternal fever, and the fast heart is the baby's response. Test with an RDT or blood film, treat the malaria per national guideline, bring the temperature down, hydrate her and re-listen: the rate should settle as the fever does. Persisting tachycardia, or any fall below 110, escalates to same-day referral. Fever in pregnancy is never 'just the season' — investigate it.",
      },
      {
        type: "memory_trick",
        body: "One-Ten to One-Sixty, sweet and steady; below or above, act, do not admire.",
      },
      {
        type: "summary",
        body: "- Normal fetal heart: 110 to 160 bpm; count a full minute through the fetal back and confirm it is not the mother's pulse.\n- Below 110: left lateral, stop oxytocin, hydrate, call and refer. Above 160: hunt maternal fever, malaria and dehydration.\n- In labour, listen every 15 to 30 minutes in the first stage, about every 5 minutes in the second, and after membrane rupture or oxytocin changes.\n- Your ear cannot judge variability or deceleration patterns — use the whole clinical picture, and refer when the story worries you.",
      },
    ],
    questions: [
      {
        topic: "Fetal Heart Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal fetal heart rate range?",
        options: [
          "110 to 160 beats per minute",
          "100 to 140 beats per minute",
          "150 to 200 beats per minute",
          "80 to 120 beats per minute",
        ],
        correctIndex: 0,
        explanation:
          "The normal fetal heart rate lies between 110 and 160 beats per minute. Below 110 is bradycardia and above 160 is tachycardia — both need action, not admiration.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Heart Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A febrile mother at 32 weeks has a fetal heart rate of 172. What is the priority interpretation and action?",
        options: [
          "Normal for a fever — no action needed",
          "It must be the mother's own pulse — recount at the wrist only",
          "Immediate caesarean delivery",
          "Fetal tachycardia: test for malaria and other causes of maternal fever, treat, hydrate and re-listen",
        ],
        correctIndex: 3,
        explanation:
          "Maternal fever — malaria foremost in Ghana — commonly drives fetal tachycardia. Investigate and treat the cause, bring the fever down, hydrate, and re-check the fetal heart; persistent tachycardia or a fall below 110 escalates to referral.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Heart Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During oxytocin augmentation, the fetal heart is counted at 98 beats per minute. What is the immediate first action?",
        options: [
          "Increase the oxytocin to speed delivery",
          "Give the mother oral glucose water",
          "Document it and recheck in two hours",
          "Turn the mother onto her left side and stop the oxytocin infusion",
        ],
        correctIndex: 3,
        explanation:
          "Fetal bradycardia during augmentation is an emergency: stop the oxytocin, left lateral position, hydrate, call for senior help — intrauterine resuscitation first, then decide about delivery with the whole picture.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Heart Assessment",
        front: "Normal fetal heart rate range, and how long do you count?",
        back: "110 to 160 beats per minute; count for a full minute through the fetal back — and verify against the mother's pulse.",
      },
      {
        topic: "Fetal Heart Assessment",
        front: "How often should the fetal heart be auscultated in labour?",
        back: "Every 15 to 30 minutes in the first stage, about every 5 minutes in the second stage, and after membrane rupture, oxytocin changes or vaginal examinations.",
      },
      {
        topic: "Fetal Heart Assessment",
        front: "What are the immediate steps for fetal bradycardia?",
        back: "Left lateral position, stop any oxytocin infusion, hydrate, call senior help and refer — intrauterine resuscitation before decisions about delivery.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Watching the Fetus",
    lessonTitle: "Fetal Movement and Wellbeing",
    description:
      "Kick counts and movement patterns — the mother's own monitoring that saves babies.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe normal fetal movement patterns and when women first feel them.",
      "Teach a count-to-ten fetal movement method accurately.",
      "Apply the protocol for reduced fetal movement: same-day assessment, without telephone reassurance.",
    ],
    tags: ["fetal movement", "kick counts", "stillbirth prevention", "patient education"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Long before you owned a doppler, the mother owned the world's oldest fetal monitor: her own attention. A baby's movements are the most sensitive daily signal of its wellbeing, and a mother's report that 'the baby has gone quiet' is a screening test more powerful than any instrument on your bench.\n\nYour task is two-sided: teach every woman to know her baby's pattern, and build a service that takes her report seriously every single time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First movements — quickening — arrive around **18 to 20 weeks in a first pregnancy**, often two weeks earlier for mothers who have felt it before. Babies have sleep-and-wake cycles of roughly 40 minutes, so a quiet hour means nothing; but babies do not 'run out of room and stop moving' before birth — that popular belief costs lives. Movements often peak in the evening, the ideal counting time. Teach the simple **count-to-ten**: at her chosen evening hour, she counts until she feels **ten movements — nearly all healthy babies manage ten within two hours**.\n\nThe protocol for reduced movement is absolute: fewer than ten in two hours, or a fall from her own normal, means **assessment the same day** — no waiting for tomorrow, no 'drink water and sleep on it', no reassurance by telephone. On arrival, take a detailed movement history, listen to the fetal heart for a full minute, check blood pressure and urine, review the fundal-height trend for growth restriction, and refer for CTG or ultrasound as available. Reduced movement links to placental insufficiency, growth restriction and stillbirth risk — repeated episodes raise it further. Document the report, the assessment and the plan, and teach her again before she leaves.",
      },
      {
        type: "clinical_pearl",
        body: "Never talk a mother out of her own observation. If she says the baby has gone quiet, the visit is already late enough — the only acceptable answer is 'come now'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 36 weeks a multigravida calls the health centre at 4 pm: 'This baby used to dance all evening, but since morning I have felt almost nothing.' A staff member recalls that near term 'babies slow down, it is normal' and suggests she sleep and see the morning.\n\nWhat is the correct response, and what happens if she comes in?\n\nAnswer: The advice given is wrong and dangerous — movement does not normally die away near term. Tell her to come now. On arrival, take the movement history in detail, listen to the fetal heart for a full minute, check blood pressure and urine, review the fundal-height trend, and refer for CTG or ultrasound if available. If all is reassuring, review the plan and instruct her to count daily and return at once if the pattern falls again; any hint of compromise warrants same-day hospital review. A stillborn baby is the price of a night's delay, and no phone call can see the placenta.",
      },
      {
        type: "memory_trick",
        body: "Ten movements in two hours, or you come — the same day, day or night. And the phrase that protects: movement never winds down before birth.",
      },
      {
        type: "summary",
        body: "- Quickening: 18 to 20 weeks in first pregnancies, often 16 to 18 in later ones; babies keep moving until birth.\n- Teach count-to-ten: at a fixed evening hour, ten movements within two hours is normal.\n- Fewer than ten, or a fall from her own normal: same-day assessment — no waiting, no telephone reassurance.\n- On arrival: movement history, fetal heart, blood pressure and urine, growth trend — and referral for monitoring as needed.",
      },
    ],
    questions: [
      {
        topic: "Fetal Movement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Teaching a woman the count-to-ten method, you tell her that feeling ten movements within what time is normal?",
        options: [
          "Ten movements within 2 hours",
          "Ten movements within 10 minutes",
          "Ten movements within 12 hours only",
          "Ten movements per week",
        ],
        correctIndex: 0,
        explanation:
          "In the count-to-ten method, at her chosen time of day (usually evening, when movement peaks) a healthy baby delivers ten movements within two hours. Fewer than ten in two hours warrants same-day assessment.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Movement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 36 weeks telephones: her baby has been unusually quiet since morning. What is the correct response?",
        options: [
          "Reassure her that babies rest before labour and suggest she waits for tomorrow",
          "Advise her to take glucose water and call back in the evening",
          "Invite her to attend the same day for assessment without delay",
          "Book her routine appointment for the following week",
        ],
        correctIndex: 2,
        explanation:
          "Reduced movement is a same-day emergency by protocol — babies do not normally 'wind down' before birth. She needs assessment now: movement history, fetal heart, blood pressure, urine and growth review, with referral for monitoring as needed.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Fetal Movement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A first-time mother asks when she should first feel her baby move. The usual answer is:",
        options: [
          "12 to 14 weeks",
          "18 to 20 weeks",
          "26 to 28 weeks",
          "Not until after 30 weeks",
        ],
        correctIndex: 1,
        explanation:
          "Quickening usually occurs at 18 to 20 weeks in a first pregnancy, often two weeks earlier (16 to 18 weeks) in women who have been pregnant before, because they recognise the sensation earlier.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Movement",
        front: "State the count-to-ten rule.",
        back: "At a fixed daily time (evening), count until ten movements; fewer than ten within two hours, or a fall from her normal, means same-day assessment.",
      },
      {
        topic: "Fetal Movement",
        front: "Is it true that babies 'run out of room and slow down' near term?",
        back: "No — movement continues until birth; the belief delays care and costs lives. Reduced movement near term is a warning sign, not a normal event.",
      },
      {
        topic: "Fetal Movement",
        front: "What assessment does a woman get after reporting reduced movement?",
        back: "Detailed movement history, fetal heart auscultation for a full minute, blood pressure and urine, review of the fundal-height growth trend, and CTG or ultrasound referral as available.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Nutrition, Education and Safety Nets",
    lessonTitle: "Nutrition in Pregnancy",
    description:
      "Eating for two without doubling — the nutrients that matter most and the deficiencies to prevent.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe balanced eating in pregnancy in affordable Ghanaian terms, correcting the 'eating for two' myth.",
      "Explain the roles and food sources of iron, folate, calcium, protein and iodine in pregnancy.",
      "Apply nutrition counselling to anaemia prevention and appropriate weight gain.",
    ],
    tags: ["nutrition", "anaemia prevention", "iron", "calcium", "weight gain"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'Now you are eating for two!' is the warmest — and most misleading — sentence said to pregnant women. The second person she feeds is the size of a mango at 20 weeks: her needs rise modestly, not by doubled plates. Good pregnancy nutrition is not more food; it is better-chosen food.\n\nIn Ghana the stakes are concrete: anaemia is common, calcium intake is often low, and a thin maternal diet writes its signature on the baby's birth weight. Your counselling is preventive medicine at its cheapest.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every meal should follow the balanced plate: a swallow (kenkey, banku, rice, yam), a protein (fish, beans, eggs, groundnuts) and vegetables or fruit (kontomire, garden eggs, okro, pawpaw). She needs roughly one extra snack's worth of energy daily in later pregnancy, plus water throughout. **Iron** — meat, beans, dark leaves, plus her daily 30 to 60 mg tablet — builds her blood; pair iron with **vitamin C** (citrus, tomato) and keep tea and coffee an hour away — their tannins block absorption. **Folate** in dark greens protects the baby's neural tube. **Calcium** from small dried fish eaten whole with the bones, milk and green leaves reduces pre-eclampsia risk and builds the baby's skeleton — where dietary intake is low, WHO advises 1.5 to 2 g daily as a supplement.\n\n**Iodised salt** protects the baby's brain, and protein supplies the baby's building blocks. Total weight gain for a normal-BMI mother runs about 11.5 to 16 kg — roughly half a kilogram a week after 20 weeks; a sudden jump is fluid, not food, and a long stall in a thin woman is a nutrition alarm. Reheat food thoroughly, wash fruits and vegetables, and avoid alcohol entirely. The adolescent mother is still building her own body alongside her baby's — she needs extra portions, not scolding.",
      },
      {
        type: "clinical_pearl",
        body: "Prescribe food like medicine: name the foods, the amounts and the times. 'Eat well' changes nobody's plate; 'add one egg and a handful of beans daily, and take your iron with orange squash, not tea' changes blood.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old at 24 weeks has a haemoglobin of 9.6 g/dL. She takes her iron and folate tablets but says they 'worry her stomach', so she swallows them with tea at breakfast 'to settle it'. She asks which blood tonic injection will 'boost her quickly'.\n\nHow do you counsel her today?\n\nAnswer: No injection is the answer; her tablets and her plate are. Settle the stomach by taking iron after food, not empty, and stop the tea — its tannins block absorption — pairing the tablet with a vitamin C source such as orange or tomato. Reinforce daily tablets, translate her meals into food she can afford (fish, beans, eggs, kontomire, whole small fish for calcium), and treat any malaria or worm contribution per guideline. Recheck her haemoglobin at the next contact — anaemia near delivery is a haemorrhage amplifier, and the months left are enough time to build her blood.",
      },
      {
        type: "memory_trick",
        body: "IRON on the plate: fish, beans, greens and eggs — with a vitamin C partner beside them, and tea kept an hour away.",
      },
      {
        type: "summary",
        body: "- Eating for two means better, not double: one balanced plate (swallow, protein, vegetables) plus a modest extra snack.\n- Iron 30 to 60 mg daily with folate; absorb iron with vitamin C and away from tea; calcium 1.5 to 2 g where dietary intake is low.\n- Iodised salt for the baby's brain; protein and vitamin A from food daily; food hygiene and zero alcohol.\n- Weight gain about half a kilogram weekly after 20 weeks — a sudden jump is fluid; a long stall is a nutrition alarm.",
      },
    ],
    questions: [
      {
        topic: "Nutrition in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman takes her iron tablet with tea at breakfast 'to settle her stomach'. What do you advise?",
        options: [
          "Continue — tea is harmless with iron",
          "Take iron after food with a vitamin C source, and keep tea at least an hour away",
          "Stop the iron tablets until delivery",
          "Switch the tablet to bedtime with coffee",
        ],
        correctIndex: 1,
        explanation:
          "Tannins in tea (and coffee) bind iron and block its absorption; taking the tablet after food with vitamin C — citrus, tomato — improves both comfort and uptake.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Nutrition in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "'Eating for two' in pregnancy really means:",
        options: [
          "Doubling every portion from the first trimester",
          "Eating twice as many fatty and sugary foods",
          "A modest increase in energy plus better nutrient choices",
          "Skipping meals so the baby takes from the mother's stores",
        ],
        correctIndex: 2,
        explanation:
          "Pregnancy raises energy needs modestly — about one extra snack's worth in later pregnancy — while raising demands for protein, iron, folate, calcium and iodine. Quality and consistency beat quantity.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Nutrition in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does WHO advise calcium supplementation (1.5 to 2 g daily) in pregnancy where dietary calcium intake is low?",
        options: [
          "To make the mother's bones fully adult-sized",
          "To prevent morning sickness",
          "To reduce the risk of pre-eclampsia while building the baby's skeleton",
          "To speed up labour contractions",
        ],
        correctIndex: 2,
        explanation:
          "In populations with low dietary calcium, supplementation of 1.5 to 2 g daily lowers the risk of pre-eclampsia and supplies the baby's skeletal needs — food sources include small dried fish eaten with bones, milk and dark greens.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Nutrition in Pregnancy",
        front: "How should iron tablets be taken for best absorption and comfort?",
        back: "After food (not on an empty stomach), with a vitamin C source such as orange or tomato, and at least an hour away from tea or coffee.",
      },
      {
        topic: "Nutrition in Pregnancy",
        front: "Normal total weight gain in pregnancy for a mother with normal BMI?",
        back: "About 11.5 to 16 kg — roughly half a kilogram a week after 20 weeks; sudden gain is fluid (think pre-eclampsia), a long stall is a nutrition alarm.",
      },
      {
        topic: "Nutrition in Pregnancy",
        front: "Affordable Ghanaian calcium sources, and the supplement dose where intake is low?",
        back: "Small dried fish eaten whole with the bones, milk and dark green leaves; WHO advises 1.5 to 2 g daily where dietary intake is low — it lowers pre-eclampsia risk.",
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
        organization: "Ministry of Health, Ghana / FAO",
        title: "Food-Based Dietary Guidelines for Ghana",
        year: "2023",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Nutrition, Education and Safety Nets",
    lessonTitle: "Antenatal Education and Birth Preparedness",
    description:
      "Preparing mothers for birth and beyond — the teaching that turns fear into readiness.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Build a birth plan and complication-readiness plan with a woman and her family.",
      "Explain the core content of antenatal education, from labour signs to newborn feeding.",
      "Apply teaching methods that reach families, not just mothers, in district settings.",
    ],
    tags: ["birth plan", "birth preparedness", "antenatal education", "danger signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Birth is a planned journey, and the families who travel it best are those who packed before the pains started. A birth plan — worked out with the woman and, crucially, the people around her — answers in advance the questions that panic erases: where, with whom, by what transport, with whose money, and by whose decision.\n\nIn districts where the referral hospital may be two hours and two rivers away, birth preparedness is not paperwork; it is the bridge between the danger sign and the ambulance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A complete **birth plan** names: the chosen place of birth and the skilled attendant; **transport** (and its fuel, driver or tro arrangement) for both the normal and the emergency journey; **money saved** for fees and supplies; a **blood donor** identified; the **companion** who will go with her; who will mind the home and children; when to set out in labour; the danger signs known by name to her family; saved emergency numbers; and her newborn feeding decision — early, exclusive breastfeeding. Review and update the plan at **36 weeks**, and hand her the written version with her booklet.\n\nAntenatal education makes the plan understood, not just written. Group classes cover: signs of labour and when to come; what happens in normal labour and birth; hygiene and clean practices; breastfeeding and newborn care; newborn danger signs; family planning after birth; and the danger signs of pregnancy. Use teach-back — she explains the list back in her own words. Invite the husband, the mother-in-law, the grandmother: in the 3 am emergency, the decision-maker is rarely the mother alone. Women who prepare are likelier to deliver with a skilled attendant and to reach care before complications mature.",
      },
      {
        type: "clinical_pearl",
        body: "Write the plan for the person who will be awake at 3 am. If only the mother knows it, the family will debate while the placenta separates.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-week first-time mother in a farming village is 90 minutes from the district hospital. Her husband works on another farm Tuesdays to Fridays, and the family car runs only 'when the driver is around'. She is confident she will 'just manage' because her mother delivered all six children at home.\n\nWhat must her birth plan contain before this contact ends?\n\nAnswer: A named destination (the hospital, chosen with her risk in mind); a transport plan that works on any weekday — an agreed driver and fuel money set aside; a companion named for any day; someone assigned to the home; saved emergency numbers; the danger signs taught to the mother and to whoever else will decide at night; money for fees; a blood donor identified; and her feeding decision. Gently open the conversation about her mother's home births — those were survived, not planned, and the plan replaces luck with readiness. She should leave with the written plan and a 36-week review date.",
      },
      {
        type: "memory_trick",
        body: "Be READY: Rides arranged, Emergency money saved, A companion named, Destination decided, Your feeding plan chosen.",
      },
      {
        type: "summary",
        body: "- A birth plan fixes destination, attendant, transport, money, blood donor, companion and timing before labour starts.\n- Complication readiness means the family knows the danger signs and the numbers to call.\n- Review and hand over the written plan at 36 weeks.\n- Educate the family, not just the mother — the 3 am decision is rarely hers alone.",
      },
    ],
    questions: [
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which item belongs in a complete birth and complication-readiness plan?",
        options: [
          "An identified blood donor and money saved for emergencies",
          "A stock of traditional herbs to speed labour at home",
          "A written guarantee that labour will start on the EDD",
          "A private driver on standby until 42 weeks",
        ],
        correctIndex: 0,
        explanation:
          "Core elements include a named blood donor, saved money, arranged transport, a companion, and a destination with a skilled attendant — readiness for both the normal birth and the emergency.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should the danger-sign list be taught to family members, not only to the pregnant woman?",
        options: [
          "Because family members are usually healthier than she is",
          "Because teaching families is cheaper than teaching mothers",
          "Because the list is too long for one person to remember",
          "Because in a midnight emergency the decision to travel is often made by relatives, and the woman may be too ill to act",
        ],
        correctIndex: 3,
        explanation:
          "When danger strikes, the woman may be unconscious, convulsing or in severe pain — the family is the first responder. Teaching them, with teach-back, and recording the plan, is what turns the list into action.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When should the birth plan be formally reviewed and updated, and the final written copy handed to the woman?",
        options: [
          "At booking only, then left unchanged",
          "At the six-week postnatal visit",
          "Only after she goes into labour",
          "At 36 weeks, with the plan revisited whenever risk changes",
        ],
        correctIndex: 3,
        explanation:
          "The plan is built early but formally reviewed and updated at 36 weeks, when labour is near — and revisited at any contact where the risk picture changes.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Birth Preparedness",
        front: "List the READY elements of a birth plan.",
        back: "Rides arranged, Emergency money saved, A companion named, Destination decided, Your feeding plan chosen — plus a blood donor and danger signs known to the family.",
      },
      {
        topic: "Birth Preparedness",
        front: "Why involve family members in antenatal education?",
        back: "The 3 am decision to travel is usually made by relatives, and the woman may be too ill to act — the family is the real first responder.",
      },
      {
        topic: "Birth Preparedness",
        front: "When is the birth plan reviewed and the final copy handed over?",
        back: "Formally at 36 weeks — earlier if risk changes — with the written version carried with her antenatal booklet.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
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
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-pregnancy",
    moduleTitle: "Nutrition, Education and Safety Nets",
    lessonTitle: "Danger Signs in Pregnancy: When to Act and Refer",
    description:
      "The symptoms that demand immediate attention — your list to memorise and teach every mother.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "List the danger signs of pregnancy and the emergencies that hide behind them.",
      "Explain the first response and referral pathway for each major danger sign at CHPS or health-centre level.",
      "Apply danger-sign teaching with family members and teach-back before every woman goes home.",
    ],
    tags: ["danger signs", "referral", "preeclampsia", "aph", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There is a short list of symptoms that turn an antenatal clinic into a rescue station, and every midwife must carry it letter-perfect in her head and teach it until families can recite it in theirs. A woman with any of these signs cannot wait for the next routine contact — today's arrival at the facility is the contact.\n\nThis lesson gives you the list, the first response, and the teaching method that carries it from your mouth to the compound where it will matter at midnight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The core danger signs: **vaginal bleeding**; **severe headache with blurred vision** or flashing lights; **convulsions or loss of consciousness**; **severe abdominal pain**; **fever**; **reduced or absent fetal movement**; **leaking or gushing fluid** from the vagina; **swelling of face and hands**; **breathlessness at rest**; and **severe vomiting with weakness**. Behind them hide the killers: haemorrhage and ectopic pregnancy (bleeding), pre-eclampsia advancing to eclampsia (headache, vision, convulsions, swelling), placental abruption (bleeding with pain), malaria and other infection (fever), cord compression and stillbirth risk (fluid leak, quiet baby).\n\nYour first response is a pattern: assess (vitals, pallor, urine protein, fetal heart), **stabilise** (left lateral, airway, IV fluids per guideline), then **arrange urgent referral** — call the receiving facility ahead, send a written note, send someone who knows her history, and never send a deteriorating woman alone. For a convulsing woman: left lateral, protect from injury, force nothing into the mouth, and treat per the magnesium sulphate protocol before and during transfer as your guideline directs. Teach the list to whoever will be home with her, using teach-back, before she leaves.",
      },
      {
        type: "clinical_pearl",
        body: "Never perform a vaginal examination on a woman bleeding in later pregnancy until placenta praevia has been excluded by ultrasound — the examining finger can tear the placenta's bed open.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-week multigravida arrives at your CHPS compound supported by her sister: two days of severe headache, 'lights dancing' in her vision this morning, and facial swelling. Her blood pressure is 162/104, dipstick shows 3+ protein, and she says the baby has not moved since yesterday evening.\n\nWhat is happening, and what are your first actions?\n\nAnswer: This is severe pre-eclampsia — headache, visual disturbance, facial swelling, 162/104 and heavy proteinuria — already threatening convulsion, and a quiet baby raises placental failure to the surface. Act now: keep her calm and on her left side, recheck the pressure, secure IV access, confirm the urine result, listen to the fetal heart, arrange urgent ambulance referral to the district hospital with a call ahead, give magnesium sulphate per protocol for seizure prevention, and document times and findings. Nothing delays the referral — two lives are being transferred, and minutes are the currency.",
      },
      {
        type: "memory_trick",
        body: "The six Bs and a convulsion: Bleeding, Blurred vision, Bursting waters, Burning fever, Breathlessness, Baby gone quiet — plus any convulsion. Never wait; come immediately.",
      },
      {
        type: "summary",
        body: "- Core danger signs: bleeding, severe headache with visual change, convulsions, severe abdominal pain, fever, reduced fetal movement, fluid leak, face and hand swelling, rest breathlessness, severe vomiting.\n- The response pattern is constant: assess, stabilise, refer urgently with a call ahead and a written note.\n- No vaginal examination for bleeding in later pregnancy until placenta praevia is excluded.\n- Teach the list to the family with teach-back at every contact — the 3 am responder is rarely the midwife.",
      },
    ],
    questions: [
      {
        topic: "Danger Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which symptom reported at a routine contact requires immediate, same-day assessment rather than routine follow-up?",
        options: [
          "Mild heartburn after evening meals",
          "Severe headache with blurred vision for two days",
          "Mild nausea in the mornings",
          "Evening ankle swelling without other signs",
        ],
        correctIndex: 1,
        explanation:
          "Severe headache with visual disturbance is a danger sign of worsening pre-eclampsia that can progress to eclampsia — assess blood pressure, urine protein and symptoms now, and refer. The other complaints are minor disorders managed with advice.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Danger Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks reports painless bright vaginal bleeding. What must you NOT do before referral?",
        options: [
          "Record her vital signs and check the fetal heart",
          "Ask about fetal movements and contractions",
          "Establish IV access and arrange transfer with a call ahead",
          "Perform a vaginal examination to see the cervix",
        ],
        correctIndex: 3,
        explanation:
          "Painless bleeding in later pregnancy suggests placenta praevia — a vaginal examination can provoke catastrophic haemorrhage. Assess and stabilise without an internal exam; ultrasound at the referral centre must exclude praevia first.",
        courseSlug: "normal-pregnancy",
      },
      {
        topic: "Danger Signs in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman begins convulsing in your clinic. Which action is correct?",
        options: [
          "Force a spoon or cloth between her teeth to protect the tongue",
          "Restrain her limbs firmly to stop the shaking",
          "Place her on her left side, protect her from injury, and treat per the magnesium sulphate protocol before urgent transfer",
          "Give oral paracetamol and wait for the fit to pass",
        ],
        correctIndex: 2,
        explanation:
          "Eclampsia care: left lateral position to protect the airway, nothing forced into the mouth, gentle protection from injury, magnesium sulphate per protocol, and urgent referral with a call ahead. Restraint harms; oral medicines risk aspiration.",
        courseSlug: "normal-pregnancy",
      },
    ],
    flashcards: [
      {
        topic: "Danger Signs in Pregnancy",
        front: "Name the six Bs of pregnancy danger signs.",
        back: "Bleeding, Blurred vision (with severe headache), Bursting waters, Burning fever, Breathlessness at rest, Baby gone quiet — plus convulsions and face/hand swelling.",
      },
      {
        topic: "Danger Signs in Pregnancy",
        front: "Why no vaginal examination for bleeding in later pregnancy?",
        back: "Placenta praevia may sit over the cervix — an examining finger can tear its bed and cause massive haemorrhage. Ultrasound must exclude praevia first.",
      },
      {
        topic: "Danger Signs in Pregnancy",
        front: "What is the constant referral pattern for a danger sign at a CHPS compound?",
        back: "Assess, stabilise, then urgent referral: call the receiving facility ahead, send a written note and an escort who knows her history — never send a deteriorating woman alone.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565905",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Ghana national maternal health standards — verify current version with your facility.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Foundations of Labour",
    lessonTitle: "What Is Labour?",
    description:
      "The clinical definition, the physiology and why we care so much about the word itself.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define labour clinically: regular painful contractions with progressive cervical change and descent.",
      "Distinguish true labour from false labour (Braxton Hicks) confidently.",
      "Apply the definition and the four stages of labour to safe admission decisions.",
    ],
    tags: ["labour", "definition", "false labour", "stages of labour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'Is she in labour?' sounds like the smallest question on the ward, yet everything hangs from it: who is admitted, who goes home, who eats and rests, whose labour is augmented. A wrong answer in either direction hurts women — admitting a rehearsal fills the ward and invites intervention; sending the true performance home ends in roadside births.\n\nSo we take the definition seriously, word by word, and then test it against real women walking through the gate.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Labour is defined by three findings together: **regular uterine contractions that are painful**, producing **progressive effacement and dilatation of the cervix**, with **descent of the presenting part**. Pain is part of the definition — Braxton Hicks tightenings are irregular and painless or merely uncomfortable. The **show**, a blood-tinged mucus plug, often announces that the cervix is ripening. For active labour, WHO's intrapartum guidance counts the active first stage from about **5 cm dilatation** with regular contractions (many curricula still teach 4 cm); before that lies the latent phase, where women labour best at home, walking and eating — not on the delivery bed.\n\nThe four stages map the birth: **first** — onset of labour to full dilatation (latent then active); **second** — full dilatation to the birth of the baby; **third** — to delivery of the placenta; **fourth** — the first hour after, the hour of highest postpartum haemorrhage risk, when you watch like a hawk. A false labour diagnosis is made in hindsight: contractions that stay irregular and painless, ease with rest, warmth or a mild analgesic, and a cervix unchanged between two assessments. When unsure, reassess in one to two hours and write down the findings — the honest second look is your best diagnostic tool.",
      },
      {
        type: "clinical_pearl",
        body: "If rest, warmth and paracetamol dissolve the contractions, it was a rehearsal. If they return stronger and the cervix has changed between two looks, the performance has begun.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A G2 mother at 39 weeks walks into your health centre at 7 am: mild tightenings since about 4 am, ten to fifteen minutes apart and irregular; she talks and jokes between them. Examination shows a closed cervix with a streak of blood, and she is eager for admission because her sister's baby last year 'came very fast'. Her own last birth was normal and quick.\n\nDo you admit her, and how do you decide safely?\n\nAnswer: By the definition she is not yet in established labour — contractions irregular and painless, cervix closed — so this is latent-phase or false labour. But her fast-birth history means distance matters: assess now and again in one to two hours, documenting cervical change honestly. If nothing changes, discharge her with clear written instructions — return when contractions are strong and regular about five minutes apart for an hour, or with rupture of membranes, bleeding or reduced fetal movement — and confirm her transport is ready. Given her history, if she cannot stay near the facility, err towards keeping her.",
      },
      {
        type: "memory_trick",
        body: "Real labour is Regular, Painful and Progressive — three Ps. If any one is missing, reassess in an hour; do not admit on hope.",
      },
      {
        type: "summary",
        body: "- Labour = regular painful contractions with progressive cervical effacement and dilatation plus descent of the presenting part.\n- False labour: irregular, painless, eases with rest, no cervical change between two assessments.\n- Active first stage from about 5 cm (WHO) with regular contractions; the latent phase belongs at home, walking and eating.\n- Four stages: to full dilatation, to birth, to placenta, and the first hour after — the postpartum haemorrhage hour.",
      },
    ],
    questions: [
      {
        topic: "Definition and Diagnosis of Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following triads of findings defines labour clinically?",
        options: [
          "Regular painful contractions with progressive cervical effacement and dilatation, and descent of the presenting part",
          "Painless tightenings, a closed cervix and no show",
          "Rupture of membranes followed immediately by pushing",
          "Backache, nausea and a softening cervix with no contractions",
        ],
        correctIndex: 0,
        explanation:
          "Labour requires all three elements: regular painful contractions, progressive cervical change, and descent. Show and membrane rupture often accompany it but do not alone define labour.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Definition and Diagnosis of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman's contractions are irregular, painless and ease after warm water and rest; two assessments one hour apart show an unchanged cervix. What is this?",
        options: [
          "Established active labour — admit and rupture membranes",
          "Concealed placental abruption — emergency referral",
          "Second stage of labour",
          "False labour (Braxton Hicks) — discharge with clear return instructions",
        ],
        correctIndex: 3,
        explanation:
          "Irregular, painless tightenings that settle with comfort measures and an unchanged cervix between two honest looks define false labour. Discharge with written advice on when to return — strong regular contractions, membrane rupture, bleeding or reduced movement.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Definition and Diagnosis of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the fourth stage of labour called the most dangerous hour?",
        options: [
          "Because the baby is most likely to develop jaundice then",
          "Because infection rates peak exactly 60 minutes after birth",
          "Because labour contractions restart most strongly then",
          "Because it is when postpartum haemorrhage risk is highest and uterine atony can kill quickly",
        ],
        correctIndex: 3,
        explanation:
          "The first hour after placental delivery carries the highest risk of postpartum haemorrhage — monitor tone, bleeding, vital signs and the baby closely throughout it.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Definition and Diagnosis of Labour",
        front: "Give the clinical definition of labour.",
        back: "Regular painful uterine contractions producing progressive cervical effacement and dilatation, with descent of the presenting part.",
      },
      {
        topic: "Definition and Diagnosis of Labour",
        front: "Three features separating false labour from true labour.",
        back: "False labour contractions are irregular, painless (or merely uncomfortable), ease with rest or warmth, and produce no cervical change between assessments.",
      },
      {
        topic: "Definition and Diagnosis of Labour",
        front: "Name the four stages of labour.",
        back: "First: onset to full dilatation. Second: full dilatation to birth of the baby. Third: to delivery of the placenta. Fourth: the first hour after — the highest-risk hour for postpartum haemorrhage.",
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
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "normal-labour",
    moduleTitle: "Foundations of Labour",
    lessonTitle: "The Onset of Labour: What Tips the Balance",
    description:
      "The hormonal cascade that starts it all — and the theories behind why labour begins when it does.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the hormonal cascade that converts the uterus from a quiet bag to a contracting organ.",
      "Explain the roles of fetal cortisol, oestrogen, prostaglandins, oxytocin receptors and the Ferguson reflex.",
      "Apply this physiology to induction, augmentation and postpartum practice safely.",
    ],
    tags: ["onset of labour", "prostaglandins", "oxytocin", "ferguson reflex", "cervical ripening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For nine months the uterus holds its peace — a muscular bag designed not to contract. Then, within hours, it converts itself into the most effective pump in nature. No single switch flips; labour begins as a cascade, and the baby is not a passenger in it but a co-author.\n\nLearn the cascade once and half the labour ward's drug cupboard becomes logical: the prostaglandins, the oxytocin, the membrane sweep, even the breastfeeding contraction — all borrow from nature's own script.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The fetal brain matures and its hypothalamic-pituitary-adrenal axis steps up: **fetal cortisol** rises and, through placental **CRH** — some call it the placental clock — signals that the pregnancy is complete. The hormonal ratio shifts, with **oestrogen rising against progesterone's relaxing brake**. Meanwhile the myometrium grows **oxytocin receptors** and gap junctions between its cells, becoming electrically excitable and ready to contract in synchrony. The decidua and membranes release **prostaglandins** (PGE2 and PGF2-alpha), which soften and shorten the cervix — cervical ripening — and provoke contractions.\n\nThen comes the loop that powers the show: the presenting part presses the cervix, nerve signals fire to the hypothalamus, **oxytocin** pours out, contractions strengthen, the head presses harder — the **Ferguson reflex**, a positive feedback spiral that ends only with expulsion of the placenta and the oxytocin surge that follows. Uterine **stretch** itself is a signal. Your armamentarium copies every step: misoprostol is a prostaglandin that ripens and induces; oxytocin infusion is augmentation that must be titrated because the loop has no internal brake; sweeping the membranes releases her own prostaglandins; and skin-to-skin with suckling after birth rides the same oxytocin wave to clamp the uterus down.",
      },
      {
        type: "clinical_pearl",
        body: "Oxytocin augmentation is the Ferguson reflex in a bottle — it respects no dose you merely intended. Respect the drip, titrate against the contractions, and never walk away from it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother at 41 weeks asks, half joking, whether she can 'drink something' from the chemical seller to start the labour, 'like my auntie did'.\n\nHow do you explain what starts labour, and what do you advise safely?\n\nAnswer: Explain honestly: her baby's maturity signals her hormones, prostaglandins ripen the cervix and oxytocin loops the contractions — a timetable her body and her baby are negotiating, which usually lands within a week of the due date. The chemical seller's concoctions are unregulated oxytocin-boosters with no dose control — they can rupture a uterus or drive unrelenting contractions until the baby suffocates: absolutely not. Offer the evidence-based option: a membrane sweep by a skilled provider at term, which releases her own prostaglandins; walking and upright positions aid comfort; intercourse in an uncomplicated pregnancy may contribute prostaglandins. If she passes well beyond dates, arrange hospital review for formal induction — nature's cascade borrowed safely, never forced.",
      },
      {
        type: "memory_trick",
        body: "C.O.P.E.S. starts the show: Cortisol from the baby, Oestrogen rising, Prostaglandins ripening, Excitable uterus, Stretch plus the Ferguson reflex.",
      },
      {
        type: "summary",
        body: "- Fetal cortisol and placental CRH set the clock; oestrogen rises as progesterone's brake lifts.\n- Prostaglandins ripen the cervix; oxytocin receptors and gap junctions make the uterus excitable and synchronised.\n- The Ferguson reflex — cervical pressure feeding oxytocin release — is the positive feedback loop powering labour and the third stage.\n- Every tool copies nature: misoprostol (prostaglandin), oxytocin (the reflex in a bottle), membrane sweep (local prostaglandins).",
      },
    ],
    questions: [
      {
        topic: "Onset of Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What best describes the Ferguson reflex in the progress of labour?",
        options: [
          "Pressure of the presenting part on the cervix triggering oxytocin release, which strengthens contractions in a positive feedback loop",
          "A pain reflex causing the mother to push involuntarily at full dilatation",
          "The baby's first breath closing the fetal shunts",
          "A reflex that stops contractions when the uterus is overdistended",
        ],
        correctIndex: 0,
        explanation:
          "The Ferguson reflex is the self-reinforcing loop of labour: cervical stretch signals the hypothalamus, oxytocin is released, contractions strengthen, the presenting part presses harder — ending only with placental expulsion.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Onset of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the role of rising fetal cortisol near term in the onset of labour?",
        options: [
          "It matures the baby's lungs only and has no role in labour timing",
          "It suppresses maternal oxytocin until delivery",
          "It softens the mother's cervix directly by crossing into her bloodstream unmodified",
          "It signals fetal maturity through placental CRH, helping shift the hormonal balance towards labour",
        ],
        correctIndex: 3,
        explanation:
          "Maturity of the fetal HPA axis raises cortisol, driving placental CRH — the 'placental clock' — which shifts the oestrogen-progesterone balance and helps initiate the cascade. The baby co-authors its own birth.",
        courseSlug: "normal-labour",
      },
      {
        topic: "Onset of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a membrane sweep at term able to encourage the onset of labour?",
        options: [
          "It mechanically forces the cervix open to full dilatation",
          "It gives the mother a large dose of oxytocin by injection",
          "It cuts the placental clock hormone directly",
          "It separates the membranes from the decidua, releasing local prostaglandins that ripen the cervix",
        ],
        correctIndex: 3,
        explanation:
          "Sweeping the membranes releases the woman's own prostaglandins locally — cervical ripening and contraction initiation by the natural route, which is why it is the evidence-based, low-intervention option at term.",
        courseSlug: "normal-labour",
      },
    ],
    flashcards: [
      {
        topic: "Onset of Labour",
        front: "Explain the Ferguson reflex.",
        back: "Cervical pressure from the presenting part signals the hypothalamus to release oxytocin — stronger contractions press harder — a positive feedback loop ending with placental expulsion.",
      },
      {
        topic: "Onset of Labour",
        front: "What do prostaglandins do at the onset of labour?",
        back: "Released by the decidua and membranes, they ripen the cervix (soften, shorten) and initiate contractions — the step misoprostol borrows for induction.",
      },
      {
        topic: "Onset of Labour",
        front: "Why must an oxytocin infusion be titrated and never left unattended?",
        back: "Oxytocin is the Ferguson reflex in a bottle with no internal brake — overdose drives unsynchronized, unrelenting contractions that can rupture the uterus or asphyxiate the baby.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles' Textbook for Midwives (17th edition)",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
    ],
  },
];
