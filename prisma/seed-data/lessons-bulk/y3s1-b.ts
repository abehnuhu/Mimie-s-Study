// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch B (Maternal & Child Health Nursing I)
// 13 lessons for courseSlug "maternal-child-health-1"
// Match key: courseSlug::moduleTitle::lessonTitle
// ("Danger Signs in Pregnancy" is authored separately as a flagship lesson.)
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Pregnancy: A Body Transformed",
    lessonTitle: "How Pregnancy Begins: Conception to Implantation",
    description:
      "The quiet first fortnight of pregnancy — egg, sperm and settling in — and the day-by-day timeline that lets you counsel wisely and catch an ectopic early.",
    difficulty: "Moderate",
    durationMin: 11,
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
        body: "Before you can care for a pregnancy, know how it begins. In this lesson we follow one egg and one sperm from the fallopian tube to the warm wall of the uterus, where this pregnancy will live for the next nine months.\n\nThis is not biology for its own sake. As the nurse at the clinic bench, you are often the first person a woman tells about a missed period. Knowing the days — when implantation happens, when hCG appears, when the pregnancy is still too small to see on scan — is what lets you counsel a worried woman wisely and recognise an ectopic pregnancy before it bursts.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Fertilisation normally happens in the **ampulla**, the widest part of the fallopian tube, within about 24 hours of ovulation. The fertilised cell — the **zygote** — travels toward the uterus while dividing: a solid ball called a **morula** by day 3 to 4, a fluid-filled **blastocyst** by day 5. Around days 6 to 10 the blastocyst burrows into the upper posterior wall of the uterus. That is implantation.\n\nThe outer cells become the **trophoblast**, the placenta's front line, and it immediately sends out **hCG** — the hormone a urine test detects. hCG's first job is practical: it rescues the **corpus luteum** in the ovary, keeping it alive to pour out progesterone until the placenta takes over at about 10 to 12 weeks. In a healthy early pregnancy, hCG roughly doubles every two days.\n\nIf implantation happens in the wrong place, most often the tube itself, that is an **ectopic pregnancy** — the emergency that can kill a young woman who never knew she was at risk. A tube is narrow and thin-walled: as the pregnancy grows, it stretches, then tears, and a woman who was shopping in the morning can be in haemorrhagic shock by nightfall.",
      },
      {
        type: "clinical_pearl",
        body: "Implantation spotting is light, brief and happens around the time a period is due. Once a pregnancy test is positive, fresh bleeding with one-sided pain is never 'just implantation' — think ectopic until proven otherwise.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A 27-year-old trader comes to your CHPS compound with six weeks of missed periods and a positive home urine test. She reports light brown spotting for two days and a dull ache low on the right side of her abdomen. She plans to travel to Kumasi tomorrow for three weeks of business.\n\nWhat must you rule out before she travels, and what do you do today?\n\nAnswer: She has the warning trio of early pregnancy — positive test, spotting and one-sided pain. Treat this as a possible ectopic pregnancy: refer urgently today for ultrasound and hCG testing, and advise against travel until ectopic is excluded. Reassuring her that spotting is normal, or reviewing in two weeks, is how a tubal rupture becomes a midnight emergency with blood in the belly.",
      },
      {
        type: "memory_trick",
        body: "Keep the early days as F-M-B-I: Fertilise (day 0), Morula (day 3 to 4), Blastocyst (day 5), Implant (day 6 to 10). And keep one phrase in your pocket: hCG Holds the Corpus luteum.",
      },
      {
        type: "summary",
        body: "- Fertilisation occurs in the ampulla of the tube within about a day of ovulation.\n- Morula by day 3 to 4, blastocyst by day 5, implantation days 6 to 10 in the upper uterus.\n- Trophoblast hCG sustains the corpus luteum's progesterone until the placenta takes over at 10 to 12 weeks; hCG roughly doubles every two days early on.\n- A positive test with one-sided pain or bleeding is ectopic until ultrasound says otherwise — refer today.",
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
          "In the cervix, just inside the internal opening",
          "On the surface of the ovary that released the egg",
          "In the ampulla of the fallopian tube",
        ],
        correctIndex: 3,
        explanation:
          "Fertilisation normally occurs in the ampulla, the widest part of the tube, within about 24 hours of ovulation; the conceptus then travels for days before reaching the uterus.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the main job of hCG in the first weeks after implantation?",
        options: [
          "To soften the cervix in preparation for birth",
          "To stop the mother's immune system reacting to the fetus",
          "To stimulate the breasts to make colostrum immediately",
          "To keep the corpus luteum producing progesterone until the placenta takes over",
        ],
        correctIndex: 3,
        explanation:
          "Trophoblast hCG rescues the corpus luteum so progesterone continues to sustain the lining until the placenta can take over production at about 10 to 12 weeks.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 6 weeks with a positive pregnancy test reports light spotting and right-sided lower abdominal pain. What is the most appropriate nursing action?",
        options: [
          "Reassure her that implantation bleeding is normal and review in two weeks",
          "Give a haematinic and treat for a urinary tract infection",
          "Ask her to monitor at home and report only if the pain worsens",
          "Refer urgently for ultrasound today to exclude ectopic pregnancy",
        ],
        correctIndex: 3,
        explanation:
          "A positive test with spotting and one-sided pain is ectopic until excluded. Same-day referral for ultrasound and hCG is the safe answer; waiting risks tubal rupture and collapse.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Conception and Implantation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Implantation of the blastocyst normally occurs on which days after fertilisation?",
        options: [
          "Days 1 to 2",
          "Days 6 to 10",
          "Days 14 to 18",
          "Days 21 to 28",
        ],
        correctIndex: 1,
        explanation:
          "The blastocyst forms by about day 5 and burrows into the upper posterior uterine wall between days 6 and 10 — roughly a week before the next period is due, which is why spotting at that time can mimic a light period.",
        courseSlug: "maternal-child-health-1",
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
      {
        topic: "Conception and Implantation",
        front: "What trio of findings makes you treat an early pregnancy as possible ectopic?",
        back: "A positive pregnancy test, bleeding or spotting, and one-sided lower abdominal pain — refer for ultrasound the same day.",
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
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Pregnancy: A Body Transformed",
    lessonTitle: "The Pregnant Body: Changes System by System",
    description:
      "Blood volume, breath, bones and bladder — every system adapts to carry a baby. Learn the shifted normals so you never mistake adaptation for illness, or illness for adaptation.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the major cardiovascular, renal, respiratory and gastrointestinal adaptations of pregnancy, system by system.",
      "Explain dilutional physiological anaemia and why a haemoglobin below 11 g/dL still means true anaemia.",
      "Apply the shifted normal ranges to tell adaptation from disease, including recognising supine hypotension.",
    ],
    tags: ["pregnancy physiology", "vital signs", "blood volume", "supine hypotension"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy is the physiology exam you sit every day at the antenatal bench. Blood volume, heart output, breathing, kidney work — nearly everything changes so the mother can carry and feed a second person. If you do not know the new normal, you will either panic over normal things or sleep on dangerous ones.\n\nThe rule of this lesson: pregnant women adapt. Learn the direction and size of each change, then read every observation you take against those shifted baselines. You are the person who takes the observations — which makes you the person the interpretation depends on.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Blood **plasma volume rises by about 40 to 50 percent** while red cell mass rises only 20 to 30 percent, so the blood is deliberately thinned — the **physiological anaemia of pregnancy**. Expected, yes, but a haemoglobin below **11 g/dL** still counts as true anaemia needing treatment. **Cardiac output rises** about a third and the pulse quickens by 10 to 15 beats per minute. Blood pressure usually **dips in the second trimester** and climbs back towards term — so a second-trimester 104/60 is normal, and it is the later trend that warns you.\n\nThe kidneys filter about 50 percent more, so urinary frequency and a little sugar in the urine are common without meaning diabetes. Progesterone relaxes smooth muscle everywhere: the stomach valve loosens (heartburn), the bowel slows (constipation), ligaments soften (backache and the pregnancy waddle). Breathing **deepens** so mild breathlessness on stairs is normal — breathlessness at rest never is. From about 20 weeks the heavy womb squashes the great vessels when she lies flat, causing **supine hypotension** — cured instantly by turning her onto her left side. Skin stretches and pigments: the dark **linea nigra** down the abdomen and darkened cheeks (chloasma) are normal signatures of pregnancy hormones.",
      },
      {
        type: "table",
        title: "The shifted normals, system by system",
        body: "| System | Normal change in pregnancy | What it means at your bench |\n|---|---|---|\n| Blood | Plasma up 40 to 50 percent, red cells up 20 to 30 percent | Mild Hb drop is expected; below 11 g/dL is true anaemia — treat |\n| Heart | Cardiac output up about a third; pulse up 10 to 15 beats | A resting pulse of 90 can be normal; read the trend |\n| Blood pressure | Dips in the second trimester, returns towards term | 140/90 or a steep climb from her booking baseline means action |\n| Lungs | Deeper breathing, rate unchanged at 12 to 20 | A rate above 24 is always illness, never adaptation |\n| Kidneys | Filtration up about 50 percent | Frequency and mild glycosuria are common; protein is not normal |\n| Gut | Progesterone slows everything | Heartburn and constipation get advice, not alarm |\n| Musculoskeletal | Ligaments soften under relaxin | Backache and a waddle are expected; calf pain is not |",
      },
      {
        type: "clinical_pearl",
        body: "Read blood pressure as a story, not a snapshot. A climb from her booking 100/60 towards the 140/90 line is a whisper of pre-eclampsia even before the line is crossed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-week multigravida at your antenatal clinic explains she feels dizzy and breathless when lying flat during her afternoon rest, and it disappears when she sits up. She has no cough, her conjunctivae are pink, and her blood pressure today is 116/74.\n\nWhat is happening, and what do you advise and check?\n\nAnswer: This is classic supine hypotension — the pregnant uterus compressing the inferior vena cava and aorta when she lies flat, relieved by position change. Teach her to rest and sleep on her left side. Her steady blood pressure and pink conjunctivae are reassuring, but since she mentions breathlessness, confirm her haemoglobin is above 11 and ask whether it ever comes at rest — breathlessness at rest escalates. Simple positioning advice plus a quick anaemia screen covers both the harmless and the serious.",
      },
      {
        type: "memory_trick",
        body: "Dilution is normal; deficiency is not. The pregnant body waters the blood down by design — but below 11 g/dL she needs iron, not reassurance.",
      },
      {
        type: "summary",
        body: "- Plasma rises 40 to 50 percent against a 20 to 30 percent red cell rise: a mild dilutional drop is normal, Hb below 11 g/dL is true anaemia.\n- Cardiac output rises about a third, pulse adds 10 to 15 beats, and BP dips in the second trimester before returning toward term.\n- Kidney filtration rises about 50 percent — frequency and some glycosuria are expected; proteinuria is not.\n- Progesterone relaxes smooth muscle and ligaments (heartburn, constipation, backache); breathing deepens but the rate stays 12 to 20.\n- From 20 weeks, the left lateral position relieves supine hypotension instantly.",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at 32 weeks feels dizzy whenever she lies flat on her back during a check. What is the first nursing action?",
        options: [
          "Give oxygen by facemask immediately",
          "Check a random blood sugar",
          "Turn her onto her left side",
          "Refer urgently for an ECG",
        ],
        correctIndex: 2,
        explanation:
          "From about 20 weeks the uterus can compress the inferior vena cava and aorta in the supine position, reducing venous return — the immediate cure is the left lateral position, and the dizziness resolves at once.",
        courseSlug: "maternal-child-health-1",
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
          "Mild glycosuria on dipstick with normal glucose testing",
        ],
        correctIndex: 0,
        explanation:
          "Pregnancy deepens breathing but does not raise the rate — it stays 12 to 20. A rate of 28 is always abnormal and signals illness (infection, anaemia, cardiac disease or another emergency). A pulse of 92, a second-trimester BP dip and mild glycosuria are all expected adaptations.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Physiological Changes of Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 26 weeks has ankle swelling by evening, a blood pressure of 114/70, no protein on dipstick and no headache. What does this picture most likely represent?",
        options: [
          "Early pre-eclampsia requiring same-day referral",
          "Normal physiological fluid shift with dependent oedema",
          "Heart failure until proved otherwise",
          "Kidney disease requiring urgent ultrasound",
        ],
        correctIndex: 1,
        explanation:
          "Evening ankle swelling that is absent in the morning, with normal blood pressure, no proteinuria and no symptoms, is a common discomfort of late pregnancy. The teaching point is naming the red flags — face and hand swelling, headache, visual change — that would change the answer at once.",
        courseSlug: "maternal-child-health-1",
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
        front: "Which vital sign does NOT change in pregnancy, and what is its range?",
        back: "Respiratory rate — stays 12 to 20 per minute; only the depth of breathing increases. A rate above 24 is always abnormal.",
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
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Pregnancy: A Body Transformed",
    lessonTitle: "Signs of Pregnancy & Dating the Due Date",
    description:
      "The questions every clinic starts with — is she pregnant, and when is the baby due? Presumptive, probable and positive signs, urine tests, Naegele's rule and ultrasound dating.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Classify the signs of pregnancy as presumptive, probable and positive, with examples of each.",
      "Explain how urine pregnancy tests work and what they cannot tell you.",
      "Apply Naegele's rule and ultrasound dating, choosing the best method for each woman.",
    ],
    tags: ["pregnancy diagnosis", "hcg", "dating", "naegele's rule", "ultrasound"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "'Am I pregnant?' is the question that first brings most women through your door, and how you answer it matters. A confidently dated pregnancy sets the rhythm of all the antenatal care that follows; a careless guess quietly scrambles every later decision, from when to give malaria prevention to when to refer a growth problem.\n\nIn this lesson we separate the signs only the mother can feel from the signs you can see and test, finish with the few that prove pregnancy beyond argument, and then date the pregnancy properly — because the estimated date of delivery, or **EDD**, is the clock every later check reads against.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Presumptive signs** are what the woman feels: a missed period, nausea, tender breasts, tiredness, frequent urination. Stress, illness or a late cycle can mimic any of them — they suggest, never confirm. **Probable signs** are what you find: a soft enlarging uterus, bluish vaginal walls, a positive urine test. The test detects **hCG**, which roughly doubles every two days in a healthy early pregnancy — but a test only says hCG is present; it cannot say where the pregnancy is sitting.\n\n**Positive signs** come from the baby itself: hearing the fetal heart, feeling fetal movement with your own hand, or seeing the fetus on ultrasound — the heartbeat flickers on screen from about 6 weeks. For dating, **Naegele's rule** takes a reliable last menstrual period, subtracts three months and adds seven days, assuming a regular 28-day cycle. If her cycles are irregular, she was breastfeeding, or she conceived on contraception, the LMP lies — then **ultrasound with crown-rump length before 13 weeks 6 days** is the most accurate tool you have.",
      },
      {
        type: "table",
        title: "Three levels of certainty",
        body: "| Category | Who notices | Examples | Certainty |\n|---|---|---|---|\n| Presumptive | The woman feels them | Missed period, nausea, breast tenderness, fatigue, frequency | Suggestive only — stress and illness mimic all of them |\n| Probable | You find them | Enlarging soft uterus, bluish vagina, positive urine hCG | Strongly suggests — but says nothing about where the pregnancy sits |\n| Positive | The baby provides them | Fetal heartbeat heard, fetal parts or movement felt by you, fetus seen on ultrasound | Proof — pregnancy and (with scan) its location confirmed |",
      },
      {
        type: "clinical_pearl",
        body: "A pregnancy test tells you that she is pregnant, never where. Pain plus a positive test means ectopic until ultrasound proves otherwise.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A 29-year-old mother presents unsure of her dates: she breastfed her last baby until four months ago and her cycles have been irregular since. She believes she is 'about four months' based on when she first felt flutters, but cannot say exactly when.\n\nWhat is the most reliable way to establish her gestational age, and why?\n\nAnswer: Ultrasound. If she is still under 14 weeks, crown-rump length dates the pregnancy to within about a week; if she is already in the second trimester, other ultrasound measures still beat a shaky LMP, though accuracy loosens to about two weeks. Her quickening recollection is rough — first movements usually arrive at 18 to 20 weeks in a first-time mother and 16 to 18 in others — and breastfeeding plus irregular cycles makes the LMP unreliable. Record the dating method and EDD clearly, because every antenatal decision downstream depends on it.",
      },
      {
        type: "memory_trick",
        body: "Three Ps, rising in certainty: she Presumes (symptoms), you Probably see (uterus, positive test), only the baby Proves (heartbeat, parts felt, ultrasound).",
      },
      {
        type: "summary",
        body: "- Presumptive signs are maternal feelings — amenorrhoea, nausea, breast tenderness; suggestive, never confirmatory.\n- Probable signs include uterine enlargement and a positive hCG test — hormone present, location unproven.\n- Positive signs come from the baby: fetal heart, fetal parts or movement felt by the examiner, or ultrasound visualisation.\n- Date by reliable LMP with Naegele's rule (subtract three months, add seven days); with unreliable cycles, ultrasound before 13 weeks 6 days is best.\n- Record the EDD and how it was dated — the whole antenatal rhythm reads from that clock.",
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
          "Only signs arising from the baby itself are positive: fetal heart heard, fetal parts or movement felt by the examiner, or ultrasound visualisation. The others are presumptive or probable signs.",
        courseSlug: "maternal-child-health-1",
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
        courseSlug: "maternal-child-health-1",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Diagnosing Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A urine pregnancy test is positive. What has the test actually told you?",
        options: [
          "That hCG is present — but not where the pregnancy is located",
          "That the pregnancy is in the uterus and progressing normally",
          "That the baby's heartbeat has started",
          "The exact gestational age of the pregnancy",
        ],
        correctIndex: 0,
        explanation:
          "Urine tests detect hCG only. They cannot show location (uterus or tube), viability or gestational age — which is why a positive test with pain stays a referral for ultrasound until ectopic is excluded.",
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Diagnosing Pregnancy",
        front: "Give one example each of a presumptive, probable and positive sign of pregnancy.",
        back: "Presumptive: amenorrhoea or nausea (felt by the woman). Probable: enlarging uterus or positive urine test (found by the examiner). Positive: fetal heartbeat, fetal parts, or ultrasound visualisation.",
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
      {
        topic: "Diagnosing Pregnancy",
        front: "From how many weeks is the fetal heartbeat usually visible on ultrasound?",
        back: "From about 6 weeks — one of the positive signs, and the moment a scan first separates a progressing pregnancy from a silent one.",
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
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Pregnancy: A Body Transformed",
    lessonTitle: "The Growing Fetus: Trimester by Trimester",
    description:
      "Three trimesters, three different jobs — building organs, testing life outside, gaining weight. The milestones that give your antenatal advice its timing.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe what happens in each trimester, from organogenesis to lung maturation.",
      "Explain why folic acid must start before conception and why teratogens do most damage in weeks 3 to 8.",
      "Apply milestones such as quickening, viability and surfactant maturation to counselling women at the clinic.",
    ],
    tags: ["fetal development", "trimesters", "organogenesis", "viability", "surfactant"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A pregnancy does not stay a tiny ball of cells for long. Within weeks of implantation the embryo is laying down the blueprint of every organ the baby will ever use — heart, brain, spine, limbs. This lesson walks that construction timetable, trimester by trimester.\n\nThe timetable answers your real clinic questions: when is the baby most at risk from drugs and infections, when does the heartbeat appear, when will she first feel movement, and when can a baby born early be expected to survive? Milestones turn vague reassurance into precise counsel.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**First trimester — construction.** Weeks 1 and 2 are preparation; **weeks 3 to 8 are the embryonic period**, the age of **organogenesis**: the neural tube closes by about day 28, the heart begins to beat around day 22 to 23 (visible on scan from about week 6), and limbs, eyes and ears take shape. Exposure to **teratogens** — alcohol, certain medicines, rubella, radiation — in these weeks can cause major structural defects. From **week 9 the fetal period** begins: every organ now exists, and the rest of pregnancy is growth and maturation.\n\n**Second trimester — proof and practice.** The mother feels the first movements (**quickening**) at 18 to 20 weeks in a first pregnancy, often two weeks earlier in later ones. The detailed **anomaly scan** happens at about 18 to 20 weeks. **Viability** climbs steeply from about 28 weeks — a 28-weeker referred early to a facility with newborn intensive care has a real fighting chance, and every extra week inside counts.\n\n**Third trimester — finishing.** The brain grows fastest, fat is laid down under the skin, and the lungs mature, with **surfactant** rising steadily from about 34 to 36 weeks — why late prematurity so often means breathing trouble.",
      },
      {
        type: "table",
        title: "The trimester map",
        body: "| Trimester | The baby's project | What it means for your teaching |\n|---|---|---|\n| First (weeks 1 to 12) | Organogenesis in weeks 3 to 8; heartbeat from about day 22 | Folate before conception; no alcohol, review every medicine and herb early |\n| Second (weeks 13 to 27) | Growth, quickening at 18 to 20 weeks, anomaly scan window | Teach movement awareness; refer the anomaly scan; dating and twins confirmed |\n| Third (weeks 28 to 40) | Brain growth, fat, lung surfactant rising to 34 to 36 weeks | Watch growth with the tape; every extra week inside counts; prepare for birth |",
      },
      {
        type: "clinical_pearl",
        body: "The neural tube closes at about day 28, often before a woman knows she is pregnant. Folic acid works before the pregnancy test, not after it — that is the whole logic of starting it before conception.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "At booking, a 22-year-old first-time mother, now 9 weeks by dates, mentions she has been taking a herbal concoction from a chemical seller for 'body pains' since before she missed her period. She asks anxiously whether the baby has already 'formed' and whether it is already damaged.\n\nHow do you answer her honestly and helpfully today?\n\nAnswer: Truthfully, by 9 weeks the major organs have largely formed, so the most sensitive window has passed — partly reassuring, but no preparation of unknown content can be declared safe. Advise her to stop it now, record the exposure honestly in her notes, arrange a dating scan, and plan the anomaly scan at about 18 to 20 weeks. Balance kindness with truth: most exposures cause no harm, but none can be guaranteed safe, and the months of growth still ahead are worth protecting.",
      },
      {
        type: "memory_trick",
        body: "Eight is the gate: by week 8, everything that will exist has been built — after that the baby only grows and matures. And folate guards the gate, but only if it arrives before day 28.",
      },
      {
        type: "summary",
        body: "- Weeks 3 to 8, the embryonic period, is organogenesis — every organ is formed then; teratogens do their worst there.\n- Neural tube closes by about day 28; heartbeat from about day 22; folic acid must precede conception.\n- Second trimester: quickening at 18 to 20 weeks (16 to 18 in later pregnancies) and the anomaly scan at 18 to 20 weeks.\n- Viability climbs steeply from about 28 weeks with newborn intensive care; lungs and surfactant mature towards 34 to 36 weeks.\n- Third trimester is brain growth and fat — growth monitoring with the tape is the baby's guardian.",
      },
    ],
    questions: [
      {
        topic: "Fetal Development",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Development",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Development",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Development",
        type: "MCQ",
        difficulty: "Easy",
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
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Development",
        front: "What defines the embryonic period, and when is it?",
        back: "Weeks 3 to 8 — organogenesis, when every organ system is formed; the peak window for teratogenic damage.",
      },
      {
        topic: "Fetal Development",
        front: "When does the neural tube close, and what does that dictate about folate?",
        back: "About day 28 after fertilisation; folate must start before conception to prevent neural tube defects.",
      },
      {
        topic: "Fetal Development",
        front: "From which gestational age does survival climb steeply, and what matures at 34 to 36 weeks?",
        back: "From about 28 weeks with newborn intensive care; the lungs and their surfactant mature at 34 to 36 weeks.",
      },
      {
        topic: "Fetal Development",
        front: "When is the anomaly scan usually done, and what does the first trimester need from the mother?",
        back: "About 18 to 20 weeks; in the first trimester she needs folate already on board, zero alcohol, and an honest review of every medicine and herb.",
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
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Antenatal Care",
    lessonTitle: "The Booking Visit: Building the Picture",
    description:
      "The long, unhurried first visit where you meet the whole pregnancy — history, examination, baseline tests and the individualised plan that follows her home.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the five components of a complete booking visit, from history to written plan.",
      "Take a structured obstetric, medical and social history that surfaces risk before it bites.",
      "Apply risk assessment at booking to build an individualised care plan for each woman.",
    ],
    tags: ["booking visit", "history taking", "risk assessment", "care plan", "antenatal care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The booking visit is the foundation stone of safe motherhood — the one long, unhurried conversation where the pregnancy is met properly before the routine begins. Everything later stands on what is established here: the dates, the risks, the baseline blood pressure and haemoglobin, and above all the relationship.\n\nDone well, booking finds the woman who needs a hospital delivery long before her emergency begins. Done carelessly, it is just a register entry. As the nurse who often takes that first contact, you are the architect of this picture.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The first contact should ideally happen **before 12 weeks**. The visit has five parts. **History**: obstetric, medical, surgical, family, social and menstrual, ending with a gestational age and EDD. **Examination**: a general survey — height, weight, pallor, thyroid, breasts, legs — vital signs, and abdominal examination. **Investigations**: the booking bloods and urine. **Risk assessment**: anything that changes where or how she should deliver. Finally, **the plan** — written in her booklet, in words she understands.\n\nThe **obstetric history** is the sharpest tool: gravidity and parity (many services add TPAL — term births, preterm births, abortions, living children), then interrogate every previous pregnancy. How did it end? Any caesarean — why, and what scar? Any postpartum haemorrhage, pre-eclampsia, stillbirth, neonatal death, preterm or low-birth-weight baby? A **grand multipara** — five or more births — risks haemorrhage and malpresentation. **Medical history**: hypertension, diabetes, sickle cell disease (her status and her partner's), epilepsy, heart disease, TB, HIV. **Surgical history**: a scarred uterus. **Family history**: hypertension, diabetes, twins, sickle cell. **Social history** sets logistics as much as medicine — her age, distance and transport to the facility, money, who will decide if she collapses, and intimate partner violence, asked privately.",
      },
      {
        type: "text",
        title: "From risk to plan",
        body: "Risk assessment asks one question: does anything here change the place, the timing or the team of her care? A **previous caesarean** means a scarred uterus — she must deliver where theatre, blood and surgical staff exist. **Hypertension**, **diabetes**, **sickle cell disease** and **epilepsy** mean shared care with a doctor. A height **under 150 cm** flags possible cephalopelvic disproportion. **Adolescents** and women **over 35**, **grand multiparas**, a **gap under six months** since the last birth, and a **three-hour journey** to the facility all change the plan too.\n\nBefore she leaves, the plan must be real: daily **iron and folic acid** started; the **contact schedule** given; **malaria prevention** arranged (IPTp from the second trimester plus a treated net); the **danger signs taught today**, not saved for the last visit; every finding recorded in her antenatal booklet. Offer HIV testing with counselling and invite her partner. A woman who leaves booking knowing her EDD, her warning signs and her next appointment already carries her own safety in her hand.",
      },
      {
        type: "clinical_pearl",
        body: "Book the visit, and book her trust in the same hour. A woman who felt rushed at booking arrives in labour at 3 am unsure whether to come to you at all.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A 26-year-old primigravida arrives at your CHPS compound at 10 weeks by dates, healthy and cheerful — the first in her family ever to start antenatal care this early. Her mother has told her the visits 'really start at six months'.\n\nWhat must be accomplished today for the visit to be complete, and how do you answer her mother's advice?\n\nAnswer: Complete the five parts: full history with EDD, baseline examination and vital signs, core investigations, risk assessment, and a written plan — iron and folic acid started, contact schedule given, danger signs taught, malaria prevention arranged. Then gently correct the family advice: starting early lets you date the pregnancy accurately, treat anaemia before it harms, screen infections in time and build trust. First contact before 12 weeks is the standard, and her instinct to come early was right.",
      },
      {
        type: "memory_trick",
        body: "HEIDI makes the plan: History, Examination, Investigations, Dating, Individualised plan. Miss one part and the foundation has a crack in it.",
      },
      {
        type: "summary",
        body: "- Aim for the first contact before 12 weeks — accurate dating and early screening depend on it.\n- Booking = HEIDI: history, examination, investigations, dating, individualised plan.\n- Obstetric history is the sharpest predictor: previous caesarean, PPH, pre-eclampsia, stillbirth, grand multiparity.\n- Ask about intimate partner violence privately — never in front of relatives.\n- Before she leaves: iron and folic acid started, contact schedule given, danger signs taught, plan written in her booklet.",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "The Booking Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are blood group and Rhesus factor documented at booking?",
        options: [
          "To predict the baby's blood group before delivery",
          "To calculate how much iron she will need in pregnancy",
          "To decide which ward she will sleep on after delivery",
          "To identify Rhesus-negative women needing specialised follow-up to prevent sensitisation in this or future pregnancies",
        ],
        correctIndex: 3,
        explanation:
          "A Rhesus-negative mother carrying a Rhesus-positive baby can become sensitised, endangering this and especially future pregnancies. Identifying her at booking allows specialised follow-up and preventive care per national guideline.",
        courseSlug: "maternal-child-health-1",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "The Booking Visit",
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
        courseSlug: "maternal-child-health-1",
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
        front: "What does TPAL record?",
        back: "Term births, Preterm births, Abortions (miscarriages), Living children — a precise way to summarise obstetric history beyond simple parity.",
      },
      {
        topic: "The Booking Visit",
        front: "Why does a maternal height under 150 cm matter at booking?",
        back: "It flags possible cephalopelvic disproportion risk — short stature is a reason to plan delivery where safe obstetric intervention is available.",
      },
      {
        topic: "The Booking Visit",
        front: "Define grand multiparity and one key risk.",
        back: "Five or more births; risks include postpartum haemorrhage, malpresentation and uterine dysfunction.",
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
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Antenatal Care",
    lessonTitle: "Routine Antenatal Checks",
    description:
      "The rhythm of contacts that protects — what to ask, measure, dip and teach at every single visit, and the trend-reading that catches trouble while it is still small.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Outline the WHO eight-contact schedule and the content of every contact.",
      "Measure and interpret maternal vital signs in pregnancy, including the action thresholds.",
      "Explain the preventive backbone of routine care — iron and folate, IPTp, calcium and tetanus protection.",
    ],
    tags: ["anc schedule", "vital signs", "trends", "iptp", "preventive care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Good antenatal care is not a place women go when something hurts — it is a rhythm they keep all pregnancy, with fixed beats where problems are hunted while they are still small. In 2016 WHO moved from the old four-visit model to a richer **eight-contact schedule**, reducing perinatal deaths and improving women's experience of care.\n\nIn this lesson we lay out the timetable and — more importantly — unpack what must happen inside every contact, because an empty visit protects nobody. Your hands take the measurements; your eyes read the trends.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The eight contacts land roughly at **before 12, 20, 26, 30, 34, 36, 38 and 40 weeks** — more attention in the third trimester, where growth problems and hypertensive disease do their quiet damage. Every contact reviews **danger signs, blood pressure, urine protein, fundal height and fetal heart**, and ends with a plan. Alongside the rhythm runs the preventive spine: **daily iron (30 to 60 mg elemental) and folic acid (400 micrograms)**; **calcium 1.5 to 2 g daily** where dietary intake is low; **IPTp with sulfadoxine-pyrimethamine** — at least three doses, given monthly from the second trimester in malaria-endemic Ghana — plus sleeping under a treated net.\n\nTechnique decides truth. Measure blood pressure **after five minutes seated rest**, cuff on a bare arm at heart level, with her comfortably seated — never flat on her back in late pregnancy. A rushed blood pressure is a fictional blood pressure. Interpretation is the second half: **140/90 or above** demands urine protein testing and a symptom screen; pulse commonly runs 70 to 90; **respiratory rate stays 12 to 20** — above 24 is always abnormal. Weight gain runs roughly **half a kilogram a week** after 20 weeks; a sudden jump is fluid, not food, and a long stall in a thin woman is a nutrition alarm.",
      },
      {
        type: "table",
        title: "The eight contacts at a glance",
        body: "| Contact | Focus beyond the routine |\n|---|---|\n| Before 12 weeks | Full booking: history, examination, investigations, dating, individualised plan |\n| 20 weeks | Fundal height should now track weeks; anomaly scan window 18 to 20 weeks; IPTp continues monthly |\n| 26 weeks | Growth review; blood pressure trend from her booking baseline |\n| 30 weeks | Growth and fetal heart review; third-trimester danger-sign teaching refresh |\n| 34 weeks | Position check — breech or transverse now needs referral planning; birth plan review begins |\n| 36 weeks | Birth plan finalised and written copy handed over; feeding decision confirmed |\n| 38 weeks | Fetal wellbeing; discuss when to set out in labour |\n| 40 weeks | Pregnancy beyond dates needs a dated, written plan for review or induction |",
      },
      {
        type: "clinical_pearl",
        body: "A contact is not a visit — it is content. If she leaves with only a next appointment, no measurement, no teaching and no test result, a visit happened but a contact was missed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-week primigravida attends a routine contact. Her booking blood pressure was 104/62; today's quick reading is 138/86. She mentions a mild headache for two days that she blames on 'the sun', and the dipstick reads trace protein.\n\nWhat should you do next, and why is reassurance not enough?\n\nAnswer: Repeat the blood pressure properly after five minutes of rest, re-dip the urine, and screen hard for pre-eclampsia symptoms — headache, visual changes, upper abdominal pain. A significant rise from baseline, a headache and trace protein suggest evolving pre-eclampsia, and 138/86 sits only a whisker below the 140/90 line. Escalate for same-day assessment rather than sending her home with paracetamol — pre-eclampsia does not politely wait for the numbers to qualify before it endangers mother and baby.",
      },
      {
        type: "memory_trick",
        body: "Book by 12, then 20, 26, 30 — and tighten the net late: 34, 36, 38, 40. Every contact: ask, measure, dip, teach, plan.",
      },
      {
        type: "summary",
        body: "- WHO 2016 recommends eight contacts: before 12, 20, 26, 30, 34, 36, 38 and 40 weeks.\n- Every contact: danger signs, blood pressure, urine, fundal height, fetal heart — and it ends with a plan.\n- Preventive spine: daily iron 30 to 60 mg with folic acid 400 micrograms, calcium 1.5 to 2 g where intake is low, monthly IPTp-SP from the second trimester plus a treated net.\n- Measure blood pressure after five minutes' seated rest; 140/90 or a steep climb from baseline triggers urine protein and symptom screening.\n- Chart everything at every visit — trends catch deterioration long before single numbers do.",
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
        courseSlug: "maternal-child-health-1",
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
          "IPTp-SP starts in the second trimester and is given monthly, directly observed, aiming for at least three doses — protecting against placental malaria, low birth weight and anaemia. SP is not used in the first trimester.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Routine Antenatal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of checks belongs at EVERY antenatal contact, whatever the week?",
        options: [
          "Danger sign review, blood pressure, urine protein, fundal height and fetal heart",
          "Blood group and Rhesus testing at each visit",
          "Ultrasound scan at each visit",
          "Tetanus immunisation at each visit",
        ],
        correctIndex: 0,
        explanation:
          "Every contact reviews danger signs, blood pressure, urine, fundal height and fetal heart. Blood group is done once at booking; ultrasound is recommended once before 24 weeks; tetanus immunisation follows its own dosing schedule, not every visit.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Routine Antenatal Care",
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
        courseSlug: "maternal-child-health-1",
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
        back: "Monthly SP, directly observed, starting in the second trimester, aiming for at least three doses before delivery — plus sleeping under a treated net.",
      },
      {
        topic: "Routine Antenatal Care",
        front: "What does every antenatal contact review, whatever the gestation?",
        back: "Danger signs, blood pressure, urine protein, fundal height, fetal heart — and it ends with a plan.",
      },
      {
        topic: "Routine Antenatal Care",
        front: "What blood pressure technique gives a true antenatal reading?",
        back: "After five minutes' seated rest, correct cuff on a bare arm at heart level — never supine in late pregnancy, where vena cava compression falsely lowers it.",
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

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Antenatal Care",
    lessonTitle: "Screening & Laboratory Tests in Pregnancy",
    description:
      "The tests that quietly guard two lives — what each screen is for, what an abnormal result means, and the nurse's job between the sample and the result.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the purpose of the core antenatal screening tests and the baseline investigations at booking.",
      "Describe what an abnormal result means for each major screen and the first nursing response.",
      "Apply results tracking and counselling so no sample is sent, and no result left unactioned.",
    ],
    tags: ["screening", "laboratory tests", "hiv", "anaemia", "rhesus", "urinalysis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Blood is taken, urine is dipped, and then the samples travel — but results only protect a woman if someone explains them, files them and acts on them. Between the laboratory bench and the clinic bench stands the nurse: preparing the woman for what the test is for, supporting sample collection, and making sure every result that returns meets a plan.\n\nThis lesson walks the core antenatal screens one by one: what each is hunting, what an abnormal result means, and what you do next. A result that sits unfiled in a folder — or worse, undelivered — protects no one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Haemoglobin** screens for anaemia: below **11 g/dL** in pregnancy needs treatment and a recheck — anaemia near delivery is a haemorrhage amplifier. **Blood group and Rhesus**: a **Rhesus-negative** mother carrying a Rhesus-positive baby can become sensitised and endanger this and future pregnancies, so she needs specialised follow-up per national guideline. **HIV** is offered with counselling, and testing is the doorway to protection: a positive result means the mother starts antiretroviral treatment for her own health and the baby receives prophylaxis and early testing — that combination is how mothers with HIV now deliver HIV-free babies. **Syphilis** screening matters because syphilis silently causes stillbirth and newborn disease, and treatment works — the mother and her partner should both be treated.\n\n**Hepatitis B** screening protects the baby: a positive result means the newborn must receive the **birth-dose vaccine within 24 hours**. **Urinalysis** at every visit dips for protein (with blood pressure, the pre-eclampsia screen), glucose (needs proper confirmatory testing, not panic) and infection signs (treated per guideline). An **ultrasound before 24 weeks** dates the pregnancy, confirms viability and finds twins — and the detailed anomaly scan at 18 to 20 weeks checks the baby's structure. **Tetanus immunisation** protects mother and newborn, and deworming and other measures follow national protocol.",
      },
      {
        type: "table",
        title: "The screens and your action on each",
        body: "| Test | What it hunts | Your action on an abnormal result |\n|---|---|---|\n| Haemoglobin | Anaemia (below 11 g/dL in pregnancy) | Start or reinforce treatment per guideline, address nutrition and malaria, recheck at the next contact |\n| Blood group & Rhesus | Rhesus-negative mother | Flag the folder; specialised follow-up per national guideline to prevent sensitisation |\n| HIV (with counselling) | Undiagnosed infection | Supportive counselling, same-day linkage to care and treatment, plan newborn prophylaxis and testing, protect confidentiality |\n| Syphilis | Infection that stillbirths babies | Treat mother and partner per guideline; the test is only the beginning |\n| Hepatitis B | Chronic infection | Ensure the newborn receives the birth-dose vaccine within 24 hours of delivery |\n| Urinalysis (every visit) | Protein, glucose, infection | Protein + blood pressure review; glucose needs confirmatory testing; infection is treated and hydration taught |\n| Ultrasound before 24 weeks | Dating, viability, twins | Record the EDD; twin pregnancy changes the entire risk profile and the birth plan |",
      },
      {
        type: "clinical_pearl",
        body: "Results need a chase. Keep a simple log of every sample sent with its date — and tick it only when the result has been seen, explained and acted upon.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A 24-year-old at her booking visit tests reactive for HIV. She sits very still, then asks in a low voice: 'Nurse, so the baby will also have it? And please, don't tell my sister who came with me.'\n\nWhat does she need from you in the next fifteen minutes?\n\nAnswer: First, presence: sit with her, let the silence be brief and warm, and answer the question truthfully — no, the baby need not have it. With treatment for her during pregnancy, newborn prophylaxis, safe feeding choices and early infant testing, the chance of the baby being infected drops dramatically. Arrange same-day linkage to the treatment clinic, give the next appointment before she leaves, and promise — and keep — confidentiality, including from her sister. Ask what support at home she wants to build, at her pace. The test result opened a door; your counselling decides whether she walks through it.",
      },
      {
        type: "memory_trick",
        body: "The booking bloods are the Big Five: Haemoglobin, Blood group and Rhesus, Syphilis, HIV, Hepatitis B — and the urine dips at every visit on top of them.",
      },
      {
        type: "summary",
        body: "- Booking bloods: haemoglobin, blood group and Rhesus, syphilis, HIV, hepatitis B; urinalysis at every visit.\n- Anaemia below 11 g/dL needs treatment and recheck; Rhesus-negative women need specialised follow-up.\n- HIV screening with counselling opens the treatment pathway that keeps babies negative — link the same day, protect confidentiality.\n- Syphilis: treat the mother and the partner; hepatitis B: the newborn gets the birth-dose vaccine within 24 hours.\n- Urine protein is read with blood pressure (pre-eclampsia), glucose needs confirmation, infection needs treatment.\n- Track every sample until its result is seen, explained and acted upon.",
      },
    ],
    questions: [
      {
        topic: "Antenatal Screening",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which haemoglobin level in pregnancy defines anaemia needing treatment?",
        options: [
          "Below 13 g/dL",
          "Below 11 g/dL",
          "Below 9 g/dL only",
          "Any haemoglobin change from booking",
        ],
        correctIndex: 1,
        explanation:
          "Pregnancy dilutes the blood by design, so the threshold shifts: below 11 g/dL is true anaemia in pregnancy, needing treatment, a search for causes (malaria, nutrition) and a recheck.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Screening",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A booking screen shows the mother is hepatitis B positive. What must be arranged for the newborn?",
        options: [
          "Immediate delivery by caesarean section",
          "No action — hepatitis B does not affect newborns",
          "Separation of mother and baby until testing is complete",
          "The hepatitis B birth-dose vaccine within 24 hours of birth",
        ],
        correctIndex: 3,
        explanation:
          "The birth-dose vaccine within the first 24 hours, with the scheduled series to follow, is the intervention that protects babies of hepatitis B positive mothers. Breastfeeding is not contraindicated.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Screening",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A syphilis screen at booking is reactive. What completes the screening act?",
        options: [
          "Filing the result and treating only the mother at the next visit",
          "Treating the mother and her partner per guideline, and documenting the plan",
          "Repeating the test at 36 weeks before any treatment",
          "Referring to a traditional healer for confirmation",
        ],
        correctIndex: 1,
        explanation:
          "Syphilis treatment is effective and prevents stillbirth and congenital disease — but the partner must be treated too, or reinfection undoes the cure. Screening is completed by treatment, not by the result alone.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Screening",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a 30-week contact, a woman's dipstick shows 2+ protein and her blood pressure is 152/96. What is the correct next step?",
        options: [
          "Repeat the dipstick at the next routine contact in two weeks",
          "Treat as a urinary tract infection and give fluids",
          "Same-day escalation for assessment of pre-eclampsia",
          "Advise reduced salt in her diet and review next week",
        ],
        correctIndex: 2,
        explanation:
          "Proteinuria with a blood pressure at or above 140/90 fulfils the screening warning for pre-eclampsia — this is beyond routine management and needs same-day escalation, symptom screening and referral.",
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Antenatal Screening",
        front: "Name the booking bloods — the Big Five.",
        back: "Haemoglobin, blood group and Rhesus, syphilis, HIV and hepatitis B — plus urinalysis at every visit.",
      },
      {
        topic: "Antenatal Screening",
        front: "What does a hepatitis B positive mother's newborn need, and when?",
        back: "The hepatitis B birth-dose vaccine within 24 hours of birth, then the scheduled series.",
      },
      {
        topic: "Antenatal Screening",
        front: "Why does syphilis screening insist on treating the partner?",
        back: "Untreated partners reinfect — treatment of mother and partner together is what converts the screen into protection.",
      },
      {
        topic: "Antenatal Screening",
        front: "What is the nurse's role between sample and result?",
        back: "Explain the test before it is taken, track the sample, then make sure the result is seen, explained to the woman, filed and acted upon — a result that sits unfiled protects no one.",
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
        title: "National HIV/STI Guidelines for Antenatal Care and Prevention of Mother-to-Child Transmission",
        note: "Ghana national guideline — verify current version with your facility.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Educational source — verify current edition at your facility.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Antenatal Care",
    lessonTitle: "Health Education in the Antenatal Clinic",
    description:
      "Teaching that travels home — the topics every mother needs, the family members to include, and the teach-back that proves the message actually arrived.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "List the core topics of antenatal health education and the topics repeated at every contact.",
      "Apply teach-back and plain-language methods so teaching reaches the woman, not just the room.",
      "Involve family decision-makers in education so the 3 am emergency has a prepared responder.",
    ],
    tags: ["health education", "teach-back", "danger signs", "antenatal clinic", "family teaching"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Education is the nurse's most powerful prescription. The tablets you give protect a woman while she holds them; the words you give protect her when you are not there — at the compound, on the road, at 3 am when the family decides whether to move.\n\nAntenatal education is not a lecture with a poster. It is a conversation, repeated contact after contact, measured not by what you said but by what she can say back. This lesson covers what to teach, how to teach it, and who must be in the room when you do.",
      },
      {
        type: "text",
        title: "What to teach",
        body: "The **danger signs of pregnancy** come first and are repeated at every contact: vaginal bleeding, severe headache with blurred vision, convulsions or loss of consciousness, severe abdominal pain, fever, reduced fetal movement, leaking fluid, swelling of face and hands, breathlessness at rest, and severe vomiting. Each sign comes with one instruction: come immediately, day or night.\n\nAround that spine, build the rest: **nutrition** in foods she can afford; **rest and sleep**, favouring the left side in later pregnancy; **personal hygiene** and clean water practices; **malaria prevention** — sleeping under a treated net and taking IPTp as scheduled; **medicine rules** — no self-prescribing, no borrowed tablets, every herb mentioned honestly at the clinic; **birth preparedness** — where, with whom, by what transport, with whose money; **breastfeeding** — starting within the first hour and exclusively for six months; **newborn care** and newborn danger signs; **family planning** after the birth; and the **clinic schedule** itself — why every contact matters even when she feels well. Group classes strengthen the message; a woman who hears another mother ask the question she was shy to ask learns twice.",
      },
      {
        type: "callout",
        title: "Teach-back: the proof of teaching",
        body: "'Do you understand?' is not a check — an anxious woman will say yes to almost anything. Teach-back asks her to explain it in her own words: 'So that I know I explained it well, tell me what you will tell your husband tonight about when to bring you to the clinic.' If the message comes back broken, it was never delivered — re-teach differently, without blame.",
      },
      {
        type: "clinical_pearl",
        body: "Teach the person who will be awake at 3 am. If only the mother knows the danger signs, the family will debate while the placenta separates.",
      },
      {
        type: "case",
        title: "In the education corner",
        body: "At a group education session, a quiet 19-year-old primigravida finally asks her question: 'Madam, my mother says the baby will stop moving near the time because there is no more space — is that true?' Two other mothers nod along.\n\nHow do you answer — and what do you do next?\n\nAnswer: Correct it warmly and clearly: babies keep moving until birth; movement never winds down because of space, and a baby gone quiet is a baby to be checked the same day. Then use teach-back: ask her to tell you when she would come to the clinic about movements, and invite the whole group to answer too — the myth was shared, so the correction must be shared. Finally, note the teaching point in her booklet and repeat it at her next contact. One question in a group class often represents ten silent women.",
      },
      {
        type: "memory_trick",
        body: "TEACH: Time it at every contact, Explain in her own language, Ask her to say it back, Check who else at home needs to hear it, Help her leave with it written down.",
      },
      {
        type: "summary",
        body: "- Danger signs head every contact's teaching — each with one instruction: come immediately.\n- Core topics: nutrition, rest, hygiene, malaria prevention, medicine rules, birth preparedness, breastfeeding, newborn care, family planning.\n- Teach-back proves the message arrived: she explains it back in her own words, and you re-teach without blame if it comes back broken.\n- Invite the husband, mother-in-law and grandmother — the 3 am decision-maker is rarely the mother alone.\n- Group classes let one brave woman's question teach ten.",
      },
    ],
    questions: [
      {
        topic: "Antenatal Health Education",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which teaching method reliably proves the woman has understood a danger-sign list?",
        options: [
          "Handing her a printed leaflet to read at home",
          "Asking 'Do you understand?' after explaining",
          "Asking her to explain the signs back in her own words",
          "Reading the list aloud twice, slowly",
        ],
        correctIndex: 2,
        explanation:
          "Teach-back asks her to restate the message in her own words — the only method that shows what actually landed. Leaflets, closed questions and repetition tell you nothing about her understanding.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should antenatal education deliberately include family members, not just the pregnant woman?",
        options: [
          "Because family members are usually healthier than she is",
          "Because teaching families is cheaper than teaching mothers",
          "Because the list of topics is too long for one person to remember",
          "Because in a midnight emergency the decision to travel is often made by relatives, and the woman may be too ill to act",
        ],
        correctIndex: 3,
        explanation:
          "When danger strikes, the woman may be unconscious, convulsing or in severe pain — the family is the first responder. Teaching them, with teach-back, is what turns the danger-sign list into action.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which topic belongs in the education of EVERY antenatal contact, not only once?",
        options: [
          "The full list of labour pain relief options",
          "The danger signs and the instruction to come immediately",
          "Detailed newborn bathing demonstration",
          "The hospital's visiting hours",
        ],
        correctIndex: 1,
        explanation:
          "Danger signs are the safety net of pregnancy and must be refreshed at every contact until the woman and her family can recite them — the other topics have their own natural moments.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Antenatal Health Education",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman teaches back that 'swelling of the face means I should come, but the baby going quiet is normal near the end'. What is your best next move?",
        options: [
          "Praise the correct part, correct the wrong part, and ask her to teach it back again",
          "Mark the teaching as complete since she remembered most of it",
          "Give her a leaflet and move on — she will relearn at the postnatal visit",
          "Ask the doctor to counsel her instead",
        ],
        correctIndex: 0,
        explanation:
          "The dangerous half-memory ('quiet baby is normal') is exactly the belief that delays care and costs lives. Praise the correct part to keep her confident, correct the myth clearly, then re-check with teach-back until the right message returns.",
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Antenatal Health Education",
        front: "What is teach-back, and why beats 'Do you understand?'",
        back: "Asking her to explain the message in her own words; closed yes/no questions invite polite agreement and prove nothing.",
      },
      {
        topic: "Antenatal Health Education",
        front: "Which topic is repeated at every contact?",
        back: "The danger signs — each paired with one instruction: come to the facility immediately, day or night.",
      },
      {
        topic: "Antenatal Health Education",
        front: "Why invite the mother-in-law and husband to the teaching?",
        back: "The 3 am decision to travel is usually made by relatives, and the woman may be too ill to act — the family is the real first responder.",
      },
      {
        topic: "Antenatal Health Education",
        front: "What does TEACH stand for?",
        back: "Time it at every contact, Explain in her language, Ask her to say it back, Check who else at home needs to hear it, Help her leave with it written down.",
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
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Watching Mother & Baby",
    lessonTitle: "Fetal Wellbeing: Growth, Movement & Heart",
    description:
      "Three monitors — the tape, your ear and the mother's own count. Together they tell you how the baby behind the bump is really doing between visits.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Measure symphysis-fundal height correctly and interpret serial growth against gestational age.",
      "Auscultate the fetal heart, state the normal range, and act on rates outside it.",
      "Teach fetal movement counting and apply the same-day protocol for reduced movement.",
    ],
    tags: ["fundal height", "fetal heart", "fetal movement", "kick counts", "fetal wellbeing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between contacts, the baby reports on itself three ways: by growing along the tape, by keeping a steady heartbeat your ear can count, and by moving in a pattern the mother knows better than any instrument. Your job is to read all three — and to teach the mother to be the monitor she already is.\n\nThese skills look humble. A tape measure, a Pinard stethoscope or doppler, and a mother counting at home: together they are the surveillance system that catches the growth-restricted, the sick and the still-at-risk baby before tragedy finishes the sentence.",
      },
      {
        type: "text",
        title: "The tape: growth",
        body: "To measure **symphysis-fundal height**, ask her to empty her bladder, lie semi-reclined tilted left, and relax. Fix the zero of the tape on the upper border of the **symphysis pubis** and measure to the top of the fundus along the curve of the abdomen. From about **20 weeks the centimetres roughly track the weeks**, within about 2 to 3 cm either way.\n\nOne measurement is a photograph; a series is a movie. If serial growth **stalls or falls away**, suspect fetal growth restriction and refer for ultrasound assessment — placental insufficiency is the quiet diagnosis behind a flat curve. Complete the assessment with the **four palpation grips**: feel the fundus for which pole sits there, map the sides to find the **fetal back** (smooth and firm — the fetal heart's best address), find the **presentation** just above the pubis, and judge head engagement by how many fifths remain above the brim. A breech or transverse lie persisting after 36 weeks needs referral for a hospital plan, because a fundus far ahead of dates also hides twins and extra fluid.",
      },
      {
        type: "text",
        title: "The ear and the mother's count",
        body: "The normal fetal heart rate sits between **110 and 160 beats per minute**. Find the fetal back with your hands and count for a **full minute** in pregnancy — never a guess over fifteen seconds — and confirm you are not hearing the mother's pulse by counting both at once. A rate **below 110** is fetal bradycardia: turn her onto her left side, stop any oxytocin infusion running, summon senior help and refer. A sustained rate **above 160** is tachycardia — think maternal fever (malaria first, in Ghana), dehydration or early fetal compromise, and investigate rather than admire.\n\nMovements are the mother's own monitor. First movements — **quickening** — arrive around 18 to 20 weeks in a first pregnancy, often two weeks earlier for experienced mothers, and babies have sleep-wake cycles of roughly 40 minutes, so a quiet hour means nothing. But babies do not 'run out of room and stop moving' before birth — that popular belief costs lives. Teach the **count-to-ten**: at her chosen evening hour, she counts until she feels **ten movements — nearly all healthy babies manage ten within two hours**. Fewer than ten, or a fall from her own normal, means **assessment the same day**: no waiting for tomorrow, no 'drink water and sleep on it', no reassurance by telephone.",
      },
      {
        type: "table",
        title: "Three monitors, one verdict",
        body: "| Monitor | Normal | Warning | Your action |\n|---|---|---|---|\n| Fundal height (serial) | Cm tracks weeks from 20, within 2 to 3 cm | A curve that stalls or falls; far ahead or behind dates | Refer for ultrasound growth assessment; check BP and urine alongside |\n| Fetal heart | 110 to 160 bpm, counted a full minute | Below 110; sustained above 160 | Left lateral, stop oxytocin, call for help, treat maternal fever and malaria, refer |\n| Movements | Ten movements within two hours at her evening count | Fewer than ten; any fall from her own pattern | Same-day assessment: movement history, fetal heart, BP, urine, growth trend — refer for monitoring |",
      },
      {
        type: "clinical_pearl",
        body: "A fetal heart rate that exactly matches the mother's pulse is not a coincidence — it is her radial pulse on a tour of the abdomen. Count both at once, always.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old primigravida's measurements run: 27 cm at 28 weeks, 29 cm at 32 weeks, 30 cm at 36 weeks. Her last note says she 'felt the baby was quieter than usual', and her blood pressure today is 148/94 with 1+ protein on dipstick.\n\nWhat is the story the tape is telling, and what do you do?\n\nAnswer: Her fundal height has climbed barely 3 cm in eight weeks — growth has stalled. Add reduced fetal movement, rising blood pressure and proteinuria, and this paints placental insufficiency with evolving pre-eclampsia starving the baby of nutrition and oxygen. Refer urgently today for hospital assessment — blood pressure management, ultrasound growth and Doppler, and a delivery plan. Do not wait for term: a flat growth curve with hypertension and a quiet baby is among the highest-risk combinations on any antenatal bench.",
      },
      {
        type: "memory_trick",
        body: "Ten in two, one-ten to one-sixty, tape tracks weeks — the three monitors, and the trend beats the single reading every time.",
      },
      {
        type: "summary",
        body: "- Fundal height: bladder empty, mother tilted left, symphysis to fundus; from 20 weeks cm tracks weeks within 2 to 3 cm — serial trends decide action.\n- A flat or falling curve, or a fundus far off dates, means referral for ultrasound; breech or transverse after 36 weeks means a hospital plan.\n- Fetal heart 110 to 160, counted a full minute through the back; below 110 — left lateral, stop oxytocin, escalate; above 160 — hunt fever, malaria, dehydration.\n- Teach count-to-ten: ten movements within two hours at a fixed evening hour; fewer, or a fall from her normal, is a same-day assessment, never telephone reassurance.\n- Babies keep moving until birth — movement never winds down near term.",
      },
    ],
    questions: [
      {
        topic: "Fetal Wellbeing",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Wellbeing",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Wellbeing",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Fetal Wellbeing",
        type: "MCQ",
        difficulty: "Moderate",
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
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Wellbeing",
        front: "How do you measure symphysis-fundal height, and what does it equal from 20 weeks?",
        back: "Bladder empty, mother semi-reclined tilted left, tape from the upper border of the symphysis pubis to the fundal top; from 20 weeks the cm roughly equals gestational weeks within 2 to 3 cm.",
      },
      {
        topic: "Fetal Wellbeing",
        front: "Normal fetal heart rate range, and how long do you count?",
        back: "110 to 160 beats per minute; count for a full minute through the fetal back — and verify against the mother's pulse.",
      },
      {
        topic: "Fetal Wellbeing",
        front: "What does a flat or falling fundal height curve over serial visits mean?",
        back: "Suspected fetal growth restriction — refer for ultrasound growth assessment and delivery planning, checking blood pressure and urine alongside.",
      },
      {
        topic: "Fetal Wellbeing",
        front: "State the count-to-ten rule and the protocol when it fails.",
        back: "At a fixed daily time (evening), count until ten movements; fewer than ten within two hours, or a fall from her normal, means same-day assessment — no waiting, no telephone reassurance.",
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
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Watching Mother & Baby",
    lessonTitle: "The Nurse's Role in the Maternity Team",
    description:
      "Who does what when a baby is on the way — and why the nurse's watchful eyes, teaching voice and quick escalation hold the whole maternity team together.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the nurse's four moves in maternity care: assess, educate, monitor and escalate.",
      "Explain what the nurse supports rather than leads, and why the nurse never abandons the woman.",
      "Apply SBAR communication and referral discipline to a deteriorating woman.",
    ],
    tags: ["nurse's role", "maternity team", "escalation", "referral", "sbar"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Maternity care is a relay, and every runner matters. The skilled attendant who conducts the birth — the specialist whose hands catch the baby — runs one leg of it. The doctor runs the leg of complications and surgery. The nurse runs the whole race: the assessments between visits, the teaching that travels home, the monitoring at the bedside, and the escalation that moves a woman to the right runner at the right time.\n\nThis lesson is about your leg — what it includes, what it does not, and why 'the nurse never abandons the woman' is written into every maternity guideline in the world.",
      },
      {
        type: "text",
        title: "The four moves",
        body: "**Assess.** You take the history, the vital signs, the trend from the last visit. You notice what the woman herself may not mention — the quiet baby, the rising pressure, the pallor. Assessment is not a task you finish; it is a stance you hold.\n\n**Educate.** Danger signs, nutrition, the birth plan, the medicines, the feeding decision — the words you give protect her when no clinician is in the room. Teaching is clinical care with a longer reach.\n\n**Monitor.** The serial measurements — blood pressure, urine, fundal height, fetal heart, weight — plotted so the trend is visible. One reading is weather; the trend is climate.\n\n**Escalate.** When the picture worsens, you recognise it, you say it clearly, and you move — call the senior, call the doctor, arrange the referral. Escalation is not defeat; it is the system working. A nurse who assesses, educates and monitors beautifully but never escalates has done the first three for nothing.",
      },
      {
        type: "text",
        title: "What you support, and what you never do",
        body: "The birth itself is led by the skilled attendant who is trained to conduct deliveries. The nurse's part is everything around it: preparing the woman physically and mentally, keeping the observations and records that guide decisions, monitoring the fetal heart, keeping her informed and companioned, and readying the emergency pathway. When a complication appears, the nurse is often the one who saw it first — and the one whose calm keeps the room together while help is called.\n\n**Never abandon the woman.** Whatever the emergency, you stay with her or you hand her over — properly, to a named person, with a spoken and written summary. Never leave her alone in a corridor, never send a deteriorating woman to travel without a call ahead to the receiving facility, never assume someone else has noticed. Referral discipline is simple: **stabilise what you can, call the receiving facility ahead, send a written note, send someone who knows her history, and hand over by name.**",
      },
      {
        type: "text",
        title: "Saying it so it lands: SBAR",
        body: "When you call the doctor or the referral hospital at 2 am, your words must carry the whole picture in under a minute. **SBAR** is the shape that does it: **Situation** — who you are calling about and what is happening now ('This is the nurse at Nkwanta Health Centre; I have a 32-week woman with a severe headache and a blood pressure of 162 over 104'). **Background** — the facts that matter ('Second pregnancy, booking pressure 104 over 62, protein 3+ on dipstick today'). **Assessment** — what you think is happening ('I believe this is severe pre-eclampsia'). **Recommendation** — what you need ('I need an ambulance now and magnesium sulfate guidance while she is transferred').\n\nWrite it on the back of your hand if you must. In an emergency, structure is speed.",
      },
      {
        type: "table",
        title: "The same woman, four moments, four moves",
        body: "| Moment | What you see | Your move |\n|---|---|---|\n| Routine contact, all well | Steady vitals, growing fundus, moving baby | Educate and monitor — plot, teach, plan the next contact |\n| Trend turning | Booking 104/62, now 138/86, mild headache | Re-measure properly, screen symptoms, escalate same day |\n| Emergency arriving | Headache with flashing lights, BP 162/104, 3+ protein | Left lateral, calm her, secure access, call for help, prepare transfer — never leave her |\n| Handover | Ambulance ready | SBAR by phone, written note, someone who knows her travels with her |",
      },
      {
        type: "clinical_pearl",
        body: "In every maternity emergency, the most dangerous sentence is 'I thought someone else had noticed.' If you saw it, you own it — until you hand it to a named person.",
      },
      {
        type: "case",
        title: "Night shift",
        body: "You are the nurse on the postnatal ward at 2 am. A woman who delivered six hours ago calls you — she feels 'something is wrong'; she is pale, her pulse is 118, the pad under her is soaked and the uterus feels soft on your touch.\n\nWalk through your four moves in the next five minutes.\n\nAnswer: Assess — pulse, blood pressure, pad check, uterine tone: this is a postpartum haemorrhage picture. Act and call — rub the uterus to firm it, empty the bladder, call the senior staff on the ward immediately while you stay with her. Escalate — help arrives, treatment begins, and you are the one documenting times: when you found her, what you did, who arrived, what was given. Never leave — through all of it, someone stays with her; if she must be moved, a named person travels with her and hands over. Assessment without action is a footnote; action without documentation is invisible; and abandoning her is unthinkable.",
      },
      {
        type: "memory_trick",
        body: "Four moves in order: ASSESS, EDUCATE, MONITOR, ESCALATE. And one law underneath them: the nurse never abandons the woman — you stay, or you hand over by name.",
      },
      {
        type: "summary",
        body: "- The nurse's four moves: assess, educate, monitor, escalate — the last move makes the first three count.\n- The skilled attendant conducts the birth; the nurse prepares, monitors, informs and keeps the emergency pathway ready.\n- Never abandon the woman: stay with her or hand her over properly, to a named person.\n- Referral discipline: stabilise, call ahead, written note, send someone who knows her, hand over by name.\n- SBAR carries the whole picture in under a minute: Situation, Background, Assessment, Recommendation.",
      },
    ],
    questions: [
      {
        topic: "The Nurse's Role in Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of verbs describes the nurse's core moves in maternity care?",
        options: [
          "Prescribe, operate, discharge, document",
          "Assess, educate, monitor, escalate",
          "Diagnose, treat, cure, follow up",
          "Admit, deliver, refer, close the file",
        ],
        correctIndex: 1,
        explanation:
          "The nurse's contribution is continuous: assessing between visits, educating so protection travels home, monitoring trends, and escalating early. Prescribing and surgery belong to other team members within their scope.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In SBAR handover, what does the R stand for — and why does it matter?",
        options: [
          "Record — because the file must be complete before anything else happens",
          "Recovery — a plan for the patient's rehabilitation",
          "Recommendation — what you need the listener to do now",
          "Report — a full history from booking to the present",
        ],
        correctIndex: 2,
        explanation:
          "The Recommendation tells the doctor or receiving facility exactly what you need — an ambulance, a medication decision, a review — turning information into action. Without it, the call reports a problem without requesting a move.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which referral practice is UNSAFE and must never happen?",
        options: [
          "Calling the receiving facility before the woman travels",
          "Sending a written note and someone who knows her history",
          "Sending a deteriorating woman alone, with no call ahead",
          "Stabilising what you can before transfer",
        ],
        correctIndex: 2,
        explanation:
          "A deteriorating woman must not travel unaccompanied, and the receiving facility must always be called ahead so the team is ready. Stabilise, call ahead, written note, a companion who knows her — that is referral discipline.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are alone on the ward when a postnatal woman begins to bleed heavily. What is your first obligation?",
        options: [
          "Complete the incident report form before touching anything",
          "Stay with the woman, call for help, and begin what you can — massage, position, observation",
          "Go to the nurses' home to wake the senior, leaving her with her visitor",
          "Wait for the next scheduled round to confirm the bleeding",
        ],
        correctIndex: 1,
        explanation:
          "The nurse never abandons the woman. Stay, act within your scope, and summon help to you — by call, bell or another person — rather than leaving her side. Documentation follows the emergency, and waiting for a round is never an option.",
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "The Nurse's Role in Maternity Care",
        front: "Name the nurse's four moves in maternity care.",
        back: "Assess, educate, monitor, escalate — and the law underneath: never abandon the woman.",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — a one-minute structure that carries the whole clinical picture to the listener.",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        front: "List the elements of safe referral.",
        back: "Stabilise what you can, call the receiving facility ahead, send a written note, send someone who knows her history, and hand over to a named person.",
      },
      {
        topic: "The Nurse's Role in Maternity Care",
        front: "Who leads the birth itself, and what is the nurse's part around it?",
        back: "The skilled attendant trained to conduct deliveries leads the birth; the nurse prepares and informs the woman, keeps observations and records, monitors the fetal heart, and keeps the emergency pathway ready.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Scope of practice and professional role — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241548993",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Healthy Pregnancy, Healthy Start",
    lessonTitle: "Nutrition in Pregnancy",
    description:
      "Eating for two without doubling — the nutrients that build blood and bone, in foods a Ghanaian kitchen can actually afford.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe balanced eating in pregnancy in affordable Ghanaian terms, correcting the 'eating for two' myth.",
      "Explain the roles and food sources of iron, folate, calcium, protein and iodine in pregnancy.",
      "Apply nutrition counselling to anaemia prevention and appropriate weight gain.",
    ],
    tags: ["nutrition", "iron", "anaemia prevention", "calcium", "weight gain"],
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
        body: "Every meal should follow the balanced plate: a swallow (kenkey, banku, rice, yam), a protein (fish, beans, eggs, groundnuts) and vegetables or fruit (kontomire, garden eggs, okro, pawpaw). She needs roughly one extra snack's worth of energy daily in later pregnancy, plus water throughout. **Iron** — meat, beans, dark leaves, plus her daily 30 to 60 mg tablet — builds her blood; pair iron with **vitamin C** (citrus, tomato) and keep tea and coffee an hour away, because their tannins block absorption. **Folate** in dark greens protects the baby's neural tube. **Calcium** from small dried fish eaten whole with the bones, milk and green leaves reduces pre-eclampsia risk and builds the baby's skeleton — where dietary intake is low, WHO advises 1.5 to 2 g daily as a supplement.\n\n**Iodised salt** protects the baby's brain, and protein supplies the baby's building blocks. Total weight gain for a normal-BMI mother runs about 11.5 to 16 kg — roughly half a kilogram a week after 20 weeks; a sudden jump is fluid, not food, and a long stall in a thin woman is a nutrition alarm. Reheat food thoroughly, wash fruits and vegetables, and avoid alcohol entirely. The adolescent mother is still building her own body alongside her baby's — she needs extra portions and kindness, not scolding.",
      },
      {
        type: "table",
        title: "The nutrients and where a Ghanaian kitchen finds them",
        body: "| Nutrient | Why it matters | Affordable sources |\n|---|---|---|\n| Iron | Builds the mother's blood; prevents anaemia near delivery | Fish, beans, eggs, kontomire and other dark leaves — plus the daily tablet |\n| Folate | Protects the baby's neural tube, especially before and in early pregnancy | Dark green leaves, legumes, oranges — plus the daily tablet |\n| Calcium | Builds the baby's skeleton and lowers pre-eclampsia risk where intake is low | Small dried fish eaten whole with bones, milk, agushi, dark leaves |\n| Protein | The baby's building blocks and the mother's repair | Fish, beans, eggs, groundnuts, chicken |\n| Iodine | The baby's brain development | Iodised salt in cooking |",
      },
      {
        type: "clinical_pearl",
        body: "Prescribe food like medicine: name the foods, the amounts and the times. 'Eat well' changes nobody's plate; 'add one egg and a handful of beans daily, and take your iron with orange squash, not tea' changes blood.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A 24-year-old at 24 weeks has a haemoglobin of 9.6 g/dL. She takes her iron and folate tablets but says they 'worry her stomach', so she swallows them with tea at breakfast 'to settle it'. She asks which blood tonic injection will 'boost her quickly'.\n\nHow do you counsel her today?\n\nAnswer: No injection is the answer; her tablets and her plate are. Settle the stomach by taking iron after food, not empty, and stop the tea — its tannins block absorption — pairing the tablet with a vitamin C source such as orange or tomato. Reinforce daily tablets, translate her meals into food she can afford (fish, beans, eggs, kontomire, whole small fish for calcium), and treat any malaria or worm contribution per guideline. Recheck her haemoglobin at the next contact — anaemia near delivery is a haemorrhage amplifier, and the months left are enough time to build her blood.",
      },
      {
        type: "memory_trick",
        body: "IRON on the plate: fish, beans, greens and eggs — with a vitamin C partner beside them, and tea kept an hour away.",
      },
      {
        type: "summary",
        body: "- Eating for two means better, not double: one balanced plate (swallow, protein, vegetables) plus a modest extra snack.\n- Iron 30 to 60 mg daily with folate; absorb iron with vitamin C and away from tea; calcium 1.5 to 2 g where dietary intake is low.\n- Iodised salt for the baby's brain; protein and vitamin A from food daily; food hygiene and zero alcohol.\n- Weight gain about half a kilogram weekly after 20 weeks — a sudden jump is fluid (think pre-eclampsia); a long stall is a nutrition alarm.\n- The adolescent mother is building two bodies at once — extra portions, extra kindness.",
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
          "Switch the tablet to bedtime with coffee",
          "Stop the iron tablets until delivery",
          "Take iron after food with a vitamin C source, and keep tea at least an hour away",
        ],
        correctIndex: 3,
        explanation:
          "Tannins in tea (and coffee) bind iron and block its absorption; taking the tablet after food with vitamin C — citrus, tomato — improves both comfort and uptake.",
        courseSlug: "maternal-child-health-1",
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
        courseSlug: "maternal-child-health-1",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Nutrition in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks has gained 3 kg since her visit two weeks ago, with new ankle and facial swelling. What does the weight jump most likely represent?",
        options: [
          "Healthy catch-up growth of the baby",
          "Normal late-pregnancy weight acceleration",
          "Excess kenkey — advise a strict diet",
          "Fluid retention — suspect pre-eclampsia and check blood pressure, urine and symptoms",
        ],
        correctIndex: 3,
        explanation:
          "Late pregnancy gain runs roughly half a kilogram a week; 3 kg in two weeks with new swelling is fluid, not food — and with facial swelling it points toward pre-eclampsia. Check blood pressure, urine protein and symptoms now.",
        courseSlug: "maternal-child-health-1",
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
      {
        topic: "Nutrition in Pregnancy",
        front: "What is the balanced-plate rule for pregnancy meals?",
        back: "Every meal: a swallow (kenkey, banku, rice, yam), a protein (fish, beans, eggs, groundnuts) and vegetables or fruit — plus about one extra snack's energy daily in later pregnancy.",
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
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Healthy Pregnancy, Healthy Start",
    lessonTitle: "Medicines & Substances in Pregnancy",
    description:
      "Two patients, one dose — the risk-and-benefit logic of medicines in pregnancy, and the honest conversation about herbs, alcohol and tobacco.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Describe the risk-versus-benefit logic that governs medicine use in pregnancy, trimester by trimester.",
      "Name the classic medicines to avoid in pregnancy and the substances that carry no safe amount.",
      "Apply counselling skills to a woman afraid to take treatment or already taking herbal preparations.",
    ],
    tags: ["medicines in pregnancy", "teratogens", "substances", "folate", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a pregnant woman swallows a tablet, two patients receive it. Medicine use in pregnancy is therefore never a simple yes or no — it is a weighing of the medicine's risk against the risk of leaving the disease untreated. Far more often than students expect, the untreated disease is the greater danger.\n\nMost of your work here is counselling: the woman afraid to treat her malaria, the one borrowing tablets from a neighbour, the one drinking a herbal preparation faithfully and mentioning it to no one. This lesson gives you the timing, the rules and the words for all three conversations.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Timing shapes the harm.** In the first two weeks after conception, damage tends to be all-or-none — the embryo is lost or repairs perfectly. **Weeks 3 to 8 are organogenesis**, the most sensitive window, when the heart, neural tube and palate are forming. From week 9 to term, medicines mainly threaten growth and function — the brain keeps developing, and second- or third-trimester harm is real (fetal kidney injury from ACE inhibitors proves it). Near birth, medicines affect the newborn directly.\n\n**The classic offenders** to know by name: **warfarin** (nasal and bone abnormalities), **valproate** (neural tube defects), **isotretinoin** (multiple severe anomalies), **tetracyclines** (discoloured teeth, slowed bone growth) and **ACE inhibitors** in later pregnancy (fetal kidney injury). **The safe backbone**: iron and folic acid daily, IPTp-SP in malaria-endemic areas, and paracetamol as the routine analgesic choice per guideline — but always as advised, never self-prescribed.\n\n**The rules of thumb.** Lowest effective dose for the shortest necessary time; prefer old, well-studied medicines over new ones; review every medicine at booking — including herbal preparations, which many Ghanaian women take faithfully and rarely mention; and never let a woman stop an essential medicine abruptly out of fear — a seizure or a hypertensive crisis endangers both patients at once. Refer prescribing decisions to the prescriber; your role is to spot, ask, counsel and connect.",
      },
      {
        type: "text",
        title: "Substances: the honest list",
        body: "**Alcohol** has no known safe amount in pregnancy — fetal alcohol spectrum disorders bring lifelong growth, facial and brain changes, and the risk starts with the first drink. **Tobacco** smoke, including the smoke she breathes from others, reduces birth weight and raises the risks of preterm birth and stillbirth; pregnancy is the moment to support the whole household to quit. **Cannabis and other recreational drugs** are out — the developing brain pays the bill. **Caffeine** in tea, coffee and cola drinks is best kept moderate. And **herbal preparations** deserve respect, not ridicule: they can be potent, unstandardised and interacting with prescribed treatment. Ask about them openly at booking, record them, and let the review happen with the prescriber — never let a woman feel judged for telling the truth.",
      },
      {
        type: "clinical_pearl",
        body: "The two most dangerous habits in pregnancy care are refusing all medicines out of fear, and continuing all medicines out of habit. The safe path is the reasoned prescription, reviewed at every stage.",
      },
      {
        type: "case",
        title: "At the clinic bench",
        body: "A woman at nine weeks attends your clinic with fever and a positive malaria test. You offer the recommended first-line treatment, but she refuses, saying an elder told her medicines 'spoil the pregnancy'. She plans to drink a herbal preparation instead.\n\nHow do you counsel her, and what is the reasoning?\n\nAnswer: Take time to explain that untreated malaria is the real threat — fever and parasites in the first trimester raise her risks of miscarriage, severe anaemia and maternal collapse, and the baby is far safer when the mother is treated. Offer the nationally recommended first-line medicine for her stage of pregnancy, invite the elder into the conversation if she wishes, and ask her to return or call the same day if symptoms continue. Refusing treatment to 'protect' the baby is the riskier choice.",
      },
      {
        type: "memory_trick",
        body: "Sing the calendar: weeks 3 to 8, organs are made; weeks 9 to birth, growth is the trade; near delivery, watch the breath. And the counsel that anchors it all: treat the mother properly — the disease is usually the bigger danger.",
      },
      {
        type: "summary",
        body: "- Prescribing in pregnancy weighs medicine risk against untreated disease — often the disease is worse.\n- Weeks 0 to 2: all-or-none. Weeks 3 to 8: organogenesis, the most sensitive window. Week 9 onward: growth and function; near birth, newborn effects.\n- Classic offenders: warfarin, valproate, isotretinoin, tetracyclines and later-trimester ACE inhibitors.\n- Safe backbone: daily iron and folate, IPTp-SP in malaria areas, paracetamol per guideline — never self-prescribed or borrowed.\n- No alcohol (no safe amount), no tobacco smoke, moderate caffeine; review herbal preparations openly at booking.\n- Never stop an essential medicine abruptly out of fear — arrange an urgent review instead.",
      },
    ],
    questions: [
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During which period is medicine exposure most likely to cause major structural malformations?",
        options: [
          "Weeks 3 to 8, the period of organogenesis",
          "Weeks 0 to 2 after conception",
          "Weeks 20 to 24",
          "The third trimester only",
        ],
        correctIndex: 0,
        explanation:
          "Weeks three to eight are organogenesis, when the heart, neural tube and other organs take shape — the window of greatest structural risk. Earlier exposure is typically all-or-none, and later exposure mainly threatens growth and function.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with epilepsy discovers she is pregnant and stops her antiepileptic tablets immediately, terrified of harming the baby. What is the correct guidance?",
        options: [
          "She was right — all antiepileptics must be stopped in pregnancy",
          "She should halve the dose and monitor herself at home",
          "She should switch to a herbal preparation until delivery",
          "She should restart her prescribed medicine and be reviewed urgently by her prescriber",
        ],
        correctIndex: 3,
        explanation:
          "Uncontrolled seizures endanger both mother and baby far more than well-managed treatment. The safe action is to continue or restart the prescribed medicine and arrange an urgent review, where options and doses can be optimised — never abrupt withdrawal.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 26 weeks is offered tetracycline capsules for a urinary infection. What fetal effect makes this the wrong choice?",
        options: [
          "Discoloured teeth and slowed bone growth",
          "Neural tube defects",
          "Fetal kidney injury with low amniotic fluid",
          "Cleft palate only",
        ],
        correctIndex: 0,
        explanation:
          "Tetracycline binds calcium in developing bones and teeth, producing permanently discoloured teeth and slowed skeletal growth. Ask the prescriber for a pregnancy-safe alternative — and praise her for asking before swallowing the first capsule.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Medicines in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the honest message about alcohol in pregnancy?",
        options: [
          "One bottle a week is safe after the first trimester",
          "Only strong spirits are harmful",
          "There is no known safe amount — the safest choice is none at all",
          "Alcohol only matters if the mother is dependent",
        ],
        correctIndex: 2,
        explanation:
          "Fetal alcohol spectrum disorders — growth restriction, characteristic facial features and lifelong brain effects — can occur with drinking at any stage, and no threshold of safety has ever been established. The counsel is simple: no known safe amount.",
        courseSlug: "maternal-child-health-1",
      },
    ],
    flashcards: [
      {
        topic: "Medicines in Pregnancy",
        front: "What happens to medicine risk during weeks 3 to 8 of pregnancy?",
        back: "This is organogenesis — the heart, neural tube and organs are forming — so exposure here carries the highest risk of major structural malformations.",
      },
      {
        topic: "Medicines in Pregnancy",
        front: "Name three classic medicines to avoid in pregnancy and their signatures.",
        back: "Warfarin (nasal and bone abnormalities), valproate (neural tube defects), isotretinoin (multiple severe anomalies) — plus tetracyclines (discoloured teeth) and later-trimester ACE inhibitors (fetal kidney injury).",
      },
      {
        topic: "Medicines in Pregnancy",
        front: "Why must the booking medicine review include herbal preparations?",
        back: "They are pharmacologically active, often potent, unstandardised and unregulated — and they can interact with prescribed treatment. Asking respectfully completes the picture of what she is truly taking.",
      },
      {
        topic: "Medicines in Pregnancy",
        front: "What is the safe analgesic backbone in pregnancy, and under what rule?",
        back: "Paracetamol, per guideline and as advised — never self-prescribed, never borrowed from a neighbour, at the lowest effective dose for the shortest time.",
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
        organization: "Ministry of Health, Ghana",
        title: "Standard Treatment Guidelines",
        note: "Educational source — verify current edition at your facility.",
      },
      {
        organization: "Elsevier",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-1",
    moduleTitle: "Healthy Pregnancy, Healthy Start",
    lessonTitle: "Preparing for Birth & the Newborn",
    description:
      "Packing before the pains start — the birth plan, the money, the transport, the newborn's first hour, and everything a family must decide before the due date.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Build a birth and complication-readiness plan with a woman and her family, ready for the 3 am emergency.",
      "Explain when to set out for the facility in labour and the newborn practices that protect the first days.",
      "Apply the timing rules for birth-plan review and written handover at 36 weeks.",
    ],
    tags: ["birth plan", "birth preparedness", "newborn care", "breastfeeding", "complication readiness"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Birth is a planned journey, and the families who travel it best are those who packed before the pains started. A birth plan — worked out with the woman and, crucially, the people around her — answers in advance the questions that panic erases: where, with whom, by what transport, with whose money, and by whose decision.\n\nThe second half of the lesson looks past the birth itself: the newborn's first hours and days — the feeding, the warmth, the cord, the danger signs — because a family that prepared for the baby is a family whose baby arrives safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A complete **birth plan** names: the chosen **place** of birth and the skilled attendant; **transport** (and its fuel, driver or tro arrangement) for both the normal and the emergency journey; **money saved** for fees and supplies; a **blood donor** identified; the **companion** who will go with her; who will mind the home and children; when to set out in labour; the danger signs known by name to her family; saved emergency numbers; and her newborn feeding decision — early, exclusive breastfeeding. Review and update the plan at **36 weeks**, and hand her the written version with her booklet.\n\n**When to come in labour**: regular, strong contractions that keep coming closer — for a first baby, roughly every five minutes for an hour — or the waters breaking, or any bleeding. **Come immediately, whatever the hour**, for: bleeding, leaking fluid, contractions before 37 weeks, severe headache with visual change, a quiet baby, fever, or convulsions.\n\n**The newborn plan**: breastfeeding **within the first hour**, exclusively for six months; warmth by drying and skin-to-skin contact; a clean, dry cord stump with nothing applied to it; immunisation on schedule; and the newborn danger signs taught to the whole family — poor feeding, fast breathing, fever or a cold body, and unusual sleepiness all mean bring the baby back at once.",
      },
      {
        type: "table",
        title: "READY — the birth plan in one word",
        body: "| Letter | Element | The question it answers |\n|---|---|---|\n| R | Rides arranged | Which transport, which driver, with fuel — for a Tuesday or a Sunday night? |\n| E | Emergency money saved | Who pays, and where is it kept? |\n| A | A companion named | Who goes with her — whoever is available at 3 am? |\n| D | Destination decided | Which facility, chosen with her risk in mind? |\n| Y | Your feeding plan | Breastfeeding within the first hour, exclusively for six months? |\n| + | Blood donor identified | Who can donate if bleeding comes? |\n| + | Danger signs known to the family | Can the relatives recite them? |",
      },
      {
        type: "clinical_pearl",
        body: "Write the plan for the person who will be awake at 3 am. If only the mother knows it, the family will debate while the placenta separates.",
      },
      {
        type: "case",
        title: "In the village",
        body: "A 34-week first-time mother in a farming village is 90 minutes from the district hospital. Her husband works on another farm Tuesdays to Fridays, and the family car runs only 'when the driver is around'. She is confident she will 'just manage' because her mother delivered all six children at home.\n\nWhat must her birth plan contain before this contact ends?\n\nAnswer: A named destination (the hospital, chosen with her risk in mind); a transport plan that works on any weekday — an agreed driver and fuel money set aside; a companion named for any day; someone assigned to the home; saved emergency numbers; the danger signs taught to the mother and to whoever else will decide at night; money for fees; a blood donor identified; and her feeding decision. Gently open the conversation about her mother's home births — those were survived, not planned, and the plan replaces luck with readiness. She should leave with the written plan and a 36-week review date.",
      },
      {
        type: "memory_trick",
        body: "Be READY: Rides arranged, Emergency money saved, A companion named, Destination decided, Your feeding plan chosen — plus a blood donor and danger signs the family can recite.",
      },
      {
        type: "summary",
        body: "- A birth plan fixes destination, attendant, transport, money, blood donor, companion and timing before labour starts.\n- Complication readiness means the family knows the danger signs and the numbers to call.\n- Review and hand over the written plan at 36 weeks — earlier if risk changes.\n- Come in labour for regular strong contractions, waters breaking or bleeding; come immediately, any hour, for any danger sign.\n- Newborn plan: breastfeeding within the first hour and exclusive for six months, warmth, clean dry cord with nothing applied, immunisation — and newborn danger signs the whole family knows.",
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
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Beyond feeding, which newborn care practice belongs in the plan the family learns before the birth?",
        options: [
          "Keep the baby warm and dry with skin-to-skin contact, keep the cord clean and dry with nothing applied, and start immunisation on schedule",
          "Apply shea butter or powder to the cord stump daily so that it stays soft",
          "Bathe the newborn thoroughly immediately after birth to welcome it properly",
          "Keep the baby wrapped in a separate room away from the mother until the cord falls off",
        ],
        correctIndex: 0,
        explanation:
          "Warmth comes first: dry the baby, place it skin-to-skin and cover the head. The cord stays clean and dry with nothing applied — powders, shea butter and herbs invite cord infection. Immunisation starts on schedule, and the family learns the newborn danger signs. Early bathing only chills the baby, and separating baby from mother delays bonding and feeding.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A first-time mother asks when she should set out for the facility once labour begins. The best guidance is:",
        options: [
          "At the very first tightening, however mild",
          "The day after the EDD, regardless of contractions",
          "Only when the baby's head is visible",
          "When contractions are regular and strong — roughly every five minutes for an hour — or at once if the waters break or she bleeds",
        ],
        correctIndex: 3,
        explanation:
          "For a first baby, setting out when contractions are established — regular, strong, about five minutes apart for an hour — balances arriving in time with not labouring on the road. Ruptured membranes or bleeding override every other rule: come now.",
        courseSlug: "maternal-child-health-1",
      },
      {
        topic: "Birth Preparedness",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What newborn practice does the birth plan's feeding decision commit the family to?",
        options: [
          "Breastfeeding within the first hour of birth and exclusively for six months",
          "Water and gripe water from the first week",
          "Formula feeding on a strict four-hour schedule",
          "Starting porridge at two months to build the baby's strength",
        ],
        correctIndex: 0,
        explanation:
          "Early breastfeeding within the first hour — with exclusive breastfeeding for six months — is one of the most protective decisions a family makes, and it belongs in the written birth plan, taught to the family before the baby arrives.",
        courseSlug: "maternal-child-health-1",
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
        front: "When is the birth plan reviewed and the final copy handed over?",
        back: "Formally at 36 weeks — earlier if risk changes — with the written version carried with her antenatal booklet.",
      },
      {
        topic: "Birth Preparedness",
        front: "When should a first-time mother set out in labour?",
        back: "When contractions are regular and strong — roughly every five minutes for an hour — or immediately if the waters break or she bleeds.",
      },
      {
        topic: "Birth Preparedness",
        front: "What are the newborn first-days practices to teach before birth?",
        back: "Breastfeeding within the first hour and exclusive for six months; warmth and skin-to-skin; clean, dry cord with nothing applied; immunisation on schedule — and the family knowing the newborn danger signs.",
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
];
