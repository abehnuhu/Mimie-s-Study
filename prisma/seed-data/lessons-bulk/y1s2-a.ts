// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 1, Semester 2 — Batch A
// (Anatomy & Physiology II: reproductive anatomy, cycles,
//  embryology, pregnancy physiology + Foundations of Nursing II:
//  daily care fundamentals)
// 13 lessons anchored to prisma/seed-data/anchors/y1s2-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "The Reproductive Blueprint",
    lessonTitle: "Reproductive Anatomy: The Big Picture",
    description:
      "Before you can monitor a labour or palpate a fundus, you need the map. This is your guided overview of the pelvis and everything it holds — the terrain you will navigate for your whole career.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Name the four bones of the bony pelvis and describe how the false and true pelvis differ.",
      "Locate the key landmarks of the true pelvis, including the ischial spines and the sacral promontory.",
      "Explain why the shape of the pelvis matters for vaginal birth and for measuring a labour's progress.",
    ],
    tags: ["reproductive anatomy", "pelvis", "bony landmarks", "labour progress"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Almost everything a nurse does happens in and around the pelvis. You will palpate the fundus above it, guide a baby through it, and support the pelvic floor that closes its outlet. If you know this bowl of bone well, every other skill you learn has somewhere to live. If you don't, each new skill floats loose.\n\nIn this first overview we name the bones, divide the pelvis into its working parts, and meet the landmarks you will use daily on the labour ward. Think of it as drawing the map before you learn the roads.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The bony pelvis is built from four bones: two innominate (hip) bones at the sides and front, the sacrum wedged at the back, and the small coccyx at the tip. Each hip bone is a fusion of three childhood bones — the ilium, the ischium and the pubis. The two pubic bones meet in front at the pubic symphysis, a firm cartilage joint that softens slightly in late pregnancy.\n\nA curved ridge called the pelvic brim divides the pelvis into two storeys. Above the brim lies the **false pelvis**, which mainly supports the growing uterus. Below it lies the **true pelvis** — the passage the baby must travel, described as inlet, cavity and outlet.\n\nThree landmarks matter most to you. The sacral promontory marks the back of the brim. The **ischial spines** jut inward at mid-cavity level: when we say a presenting part is at station zero, it is level with these spines. The subpubic angle sits below the symphysis, wide and rounded in most women. Pelvic shapes vary — about half of women have a roomy gynaecoid pelvis, favourable for birth, while android, anthropoid and platypelloid shapes each carry their own considerations.",
      },
      {
        type: "clinical_pearl",
        body: "When you hear 'station zero', picture the ischial spines: the presenting part has descended level with them. Minus numbers mean it is still above; plus numbers mean it has passed below, on its way out.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a busy evening on a district hospital labour ward, your senior nurse calls you to review a partograph together. You read aloud: cervix six centimetres dilated, station zero, cephalic presentation, contractions every four minutes. The mother dozes calmly between contractions and the fetal heart is steady. Then the senior turns to you and asks: station zero is measured against which landmark, and what does it tell you about the baby's journey?\n\nAnswer: Station zero means the lowest part of the baby's head is level with the ischial spines of the mother's true pelvis. It tells you descent is progressing: station minus two means the head is still above the spines, while station plus two means it has travelled below them, moving toward the outlet and birth. Making the spines your zero turns the whole passage into a simple number line you can chart across shifts.",
      },
      {
        type: "memory_trick",
        body: "Picture the pelvis as a bowl made of two hips, a shield and a tail: the hip bones form the sides, the sacrum is the shield at the back, and the coccyx is the little tail. Inside the bowl, the ischial spines are two hooks facing each other — a baby at 'zero' hangs exactly between them.",
      },
      {
        type: "summary",
        body: "- The bony pelvis: two innominate (hip) bones, the sacrum and the coccyx.\n- The pelvic brim divides the false pelvis (above, supports the uterus) from the true pelvis (below, the birth passage).\n- Landmarks: sacral promontory at the back of the brim, ischial spines at station zero, subpubic angle at the front of the outlet.\n- The true pelvis is described as inlet, cavity and outlet — the three stages of the baby's route.\n- The gynaecoid pelvis is the most common shape in women and the most favourable for vaginal birth.",
      },
    ],
    questions: [
      {
        topic: "Pelvic Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which bones make up the bony pelvis?",
        options: [
          "Two innominate bones, the sacrum and the coccyx",
          "Two femurs, the sacrum and the coccyx",
          "The sacrum, the coccyx and five lumbar vertebrae",
          "Two innominate bones and the lumbar spine",
        ],
        correctIndex: 0,
        explanation:
          "The bony pelvis is formed by the two hip (innominate) bones at the sides and front, the sacrum behind and the coccyx at the tip. The femur belongs to the thigh and the lumbar spine sits above the pelvis.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Labour Progress",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A partograph reads 'station 0'. Which landmark is the presenting part level with?",
        options: [
          "The pelvic brim",
          "The pelvic outlet",
          "The ischial spines",
          "The sacral promontory",
        ],
        correctIndex: 2,
        explanation:
          "Station is measured against the ischial spines of the mid-cavity. Level with them is station zero; above them is negative, below them is positive. The brim and promontory mark the inlet, not the descent line.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Pelvic Types",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pelvic shape is the most common in women and generally the most favourable for vaginal birth?",
        options: [
          "Android",
          "Anthropoid",
          "Platypelloid",
          "Gynaecoid",
        ],
        correctIndex: 3,
        explanation:
          "The gynaecoid pelvis — round or oval inlet with a wide subpubic angle — is found in about half of women and is the classic 'female' shape that suits vaginal delivery. Android (heart-shaped), anthropoid (deep and narrow) and platypelloid (flat) shapes are less roomy in different directions.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Pelvic Anatomy",
        front: "What divides the false pelvis from the true pelvis?",
        back: "The pelvic brim. Above it sits the false pelvis, which supports the pregnant uterus; below it is the true pelvis — the passage the baby travels through.",
      },
      {
        topic: "Pelvic Anatomy",
        front: "What does station zero mean?",
        back: "The presenting part is level with the ischial spines. Minus figures sit above the spines; plus figures have descended past them toward the outlet.",
      },
      {
        topic: "Pelvic Anatomy",
        front: "Name the four bones of the bony pelvis.",
        back: "Two innominate (hip) bones — each a fusion of ilium, ischium and pubis — plus the sacrum at the back and the coccyx at the tip.",
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
        title: "Gray's Anatomy for Students",
        year: "2020 (4th edition)",
        note: "Standard anatomy reference. Educational source — use alongside your course texts.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Standard nursing text — pelvic assessment and labour mechanics.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "The Reproductive Blueprint",
    lessonTitle: "The Female Reproductive System: A Guided Tour",
    description:
      "From ovaries to vulva — every structure, its job, and the words patients actually use for it. Your working map of the system you will care for every single shift.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Trace the female reproductive tract from ovary to vulva and name each structure's main job.",
      "Identify the three layers of the uterine wall and the order of the external genital openings.",
      "Apply this anatomy to ward tasks such as catheterisation and explaining an ectopic pregnancy.",
    ],
    tags: ["female anatomy", "reproductive system", "uterus", "vulva", "catheterisation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a mother at a CHPS compound says her womb is paining her, she is talking to someone expected to know exactly what that means. This lesson tours the female reproductive system from the ovaries down to the vulva, so that everyday words like womb, private and menses can translate instantly into structures in your mind.\n\nKeep the tour order in your head — ovary, tube, uterus, vagina, vulva — because that is also the order of the egg's journey, and the order in which things go wrong in emergencies.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The two ovaries sit low in the pelvis, releasing one egg most months and producing the female hormones. Each ovary lies near the fringed fimbriae of a fallopian tube, which sweep the released egg inside. The tube's widest stretch, the ampulla, is where fertilisation normally happens; the narrower stretch nearer the uterus is the isthmus.\n\nThe uterus is a pear-shaped muscle, about 7.5 cm long when non-pregnant, with a fundus on top, a body in the middle and a cervix opening into the vagina. It has three layers: the outer perimetrium, the thick muscular **myometrium** that powers labour contractions, and the inner **endometrium** that thickens each month and sheds as menstruation. The vagina runs from the cervix to the vestibule, with recesses around the cervix called fornices.\n\nOutside, the vulva includes the mons pubis, the labia majora and minora, the clitoris, and the vestibule containing the openings of the urethra and the vagina, with the perineum stretching between the vaginal opening and the anus. Going front to back, the doors spell C-U-V-A: clitoris, urethra, vagina, anus.",
      },
      {
        type: "clinical_pearl",
        body: "At the vestibule, always go front to back: clitoris, urethral opening, vaginal opening, anus. The catheter enters the second door — anterior to the vaginal opening, inferior to the clitoris. Mixing the doors causes pain, trauma and infection.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on your postnatal ward has not passed urine for six hours after birth, and the senior nurse asks you to prepare to catheterise her. As you set up your sterile trolley, a classmate whispering beside you admits she always feels unsure — the openings look so close together on every woman. She asks you, before anything is inserted: which opening takes the catheter, and where exactly does it sit?\n\nAnswer: The catheter passes into the urethral meatus — the small opening that lies anterior (toward the front) to the vaginal opening and just below the clitoris, within the vestibule. Cleanse from front to back, and if the catheter slips into the vaginal opening by mistake, discard it and start again with a fresh sterile one. Naming the doors before you touch them is how you protect this woman from trauma and infection.",
      },
      {
        type: "memory_trick",
        body: "Front to back, the doors spell C-U-V-A: Clitoris, Urethra, Vagina, Anus. Catheters go in door two — never door three.",
      },
      {
        type: "summary",
        body: "- Tour order: ovaries, fallopian tubes, uterus, vagina, vulva — the egg's route and your mental checklist.\n- Fertilisation normally happens in the ampulla of the tube; an ectopic pregnancy most often lodges there too.\n- Uterine layers: perimetrium outside, myometrium (labour muscle) in the middle, endometrium (monthly lining) inside.\n- Vulva front to back: clitoris, urethral opening, vaginal opening, anus — C-U-V-A.\n- The catheter enters the urethral meatus, anterior to the vaginal opening; front-to-back cleaning is not optional.",
      },
    ],
    questions: [
      {
        topic: "Female Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at antenatal clinic says 'my womb is paining me.' Which structure is she referring to?",
        options: [
          "The bladder",
          "The uterus",
          "The ovaries",
          "The fallopian tubes",
        ],
        correctIndex: 1,
        explanation:
          "In everyday Ghanaian speech, the womb is the uterus. Listen for the local word, then translate it to the exact structure before you chart or assess — pelvic pain can still come from the bladder, bowels or adnexa, but the word 'womb' points to the uterus.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Female Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which uterine layer provides the power for labour contractions?",
        options: [
          "Endometrium",
          "Myometrium",
          "Perimetrium",
          "Parametrium",
        ],
        correctIndex: 1,
        explanation:
          "The myometrium is the thick smooth-muscle middle layer; its coordinated contractions dilate the cervix and deliver the baby. The endometrium is the lining that thickens and sheds; the perimetrium is the outer covering.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Female Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When catheterising a woman, where does the catheter enter, relative to the vaginal opening?",
        options: [
          "Anterior to the vaginal opening, just below the clitoris",
          "Posterior to the vaginal opening, just above the anus",
          "Inside the posterior vaginal fornix",
          "Anterior to the clitoris at the mons pubis",
        ],
        correctIndex: 0,
        explanation:
          "The urethral meatus lies in the vestibule, anterior to the vaginal opening and inferior to the clitoris. Entering the vagina or fornix by mistake contaminates the catheter — discard it and begin again sterile.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Female Reproductive Anatomy",
        front: "Name the three layers of the uterine wall and their jobs.",
        back: "Perimetrium (outer covering), myometrium (muscle that contracts in labour), endometrium (inner lining that thickens monthly and sheds as menstruation).",
      },
      {
        topic: "Female Reproductive Anatomy",
        front: "Where in the fallopian tube does fertilisation normally occur?",
        back: "In the ampulla, the widest outer third of the tube — also the most common site for an ectopic pregnancy to lodge.",
      },
      {
        topic: "Female Reproductive Anatomy",
        front: "Give the order of the genital openings from front to back.",
        back: "Clitoris, urethral opening, vaginal opening, anus — C-U-V-A. The urethral meatus sits anterior to the vaginal opening; the catheter goes there.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — reproductive system chapters.",
      },
      {
        organization: "Elsevier",
        title: "Gray's Anatomy for Students",
        year: "2020 (4th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Clinical application of pelvic anatomy to nursing practice.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "The Reproductive Blueprint",
    lessonTitle: "The Male Reproductive System: The Other Half of the Story",
    description:
      "The structures and hormones that make conception possible — and the knowledge that makes you a better family planning counsellor. Worth knowing well.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Follow the path of sperm from the testes to the urethra and name the glands that contribute to semen.",
      "Describe how testicular temperature control and hormones support sperm production.",
      "Apply this knowledge when counselling couples about fertility and vasectomy.",
    ],
    tags: ["male anatomy", "reproductive system", "sperm", "vasectomy", "family planning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "It takes two to make a pregnancy, and the man is half of every consultation you will hold — at family planning clinics, during antenatal registration, and in fertility counselling. When a husband understands his own body, conversations about contraception and conception go much more smoothly.\n\nIn this lesson you will trace sperm from where they are made to where they exit, meet the glands that feed and protect them, and learn enough to answer the questions men actually ask.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The two testes hang in the scrotum, held about two to three degrees below core body temperature — sperm production simply fails at normal body heat, which is why the testes sit outside. Inside each testis, the seminiferous tubules make the sperm, with Sertoli cells nursing them along; the Leydig cells between the tubules produce testosterone. Sperm take roughly two to three months to fully form — a fact that matters when couples try to improve habits and want quick results.\n\nFrom the testis, sperm move to the epididymis, a coiled tube where they mature and are stored. At emission they travel the vas deferens, join the duct of a seminal vesicle, and pass through the prostate into the urethra. The glands matter: the **seminal vesicles** contribute most of the semen volume, rich in fructose to fuel sperm; the **prostate** adds alkaline fluid that protects sperm from vaginal acidity; the bulbourethral glands release lubricating pre-ejaculate.\n\nA vasectomy is simply the cutting or blocking of the vas deferens through a tiny scrotal opening. Sperm cannot reach the semen, but testosterone enters the bloodstream directly from the testes, so desire and erection are untouched — the fluid still flows, simply without sperm.",
      },
      {
        type: "clinical_pearl",
        body: "Vasectomy does not make a man 'less of a man'. Testosterone is released into blood, not into the vas, so erection, voice and desire stay as they are. It is also not immediately effective — couples must use backup contraception until a semen check clears, around three months later.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a family planning session at a district hospital, a 38-year-old father of four leans in and lowers his voice. His wife has struggled with contraceptive side effects, and she waits quietly nearby as the counsellor has suggested he consider vasectomy. He is worried and asks you directly: what exactly will they cut, and will he still perform as a man afterwards?\n\nAnswer: You explain that the procedure blocks the vas deferens, the tube that carries sperm from each testis toward the semen — nothing is removed, and the testes stay in place. Testosterone passes from the testes into the bloodstream, so his desire and erections will not change, and he will still ejaculate fluid that simply carries no sperm. You add that it is a permanent method meant for men sure their family is complete, that a backup method is needed until a follow-up semen test, and that both of them are welcome to discuss it further with the counsellor.",
      },
      {
        type: "memory_trick",
        body: "Sperm ride the SEVEN UP road: Seminiferous tubules, Epididymis, Vas deferens, Ejaculatory duct, (Nothing), Urethra, Penis. And remember: the testes hang outside because sperm want it cooler than the rest of the body.",
      },
      {
        type: "summary",
        body: "- Testes sit in the scrotum, two to three degrees cooler than the core — sperm production needs that chill.\n- Sertoli cells nurse developing sperm; Leydig cells make testosterone.\n- Sperm mature and are stored in the epididymis, then travel the vas deferens to the urethra.\n- Seminal vesicles supply most of the volume (fructose fuel); the prostate adds alkaline protection; bulbourethral glands lubricate.\n- Vasectomy blocks the vas deferens only — hormones, erection and ejaculation are unaffected, and backup contraception is needed until semen clearance at about three months.",
      },
    ],
    questions: [
      {
        topic: "Male Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where do sperm mature and get stored before ejaculation?",
        options: [
          "The seminal vesicles",
          "The epididymis",
          "The prostate gland",
          "The seminiferous tubules",
        ],
        correctIndex: 1,
        explanation:
          "Sperm are produced in the seminiferous tubules but finish maturing and are stored in the coiled epididymis on the back of each testis. The glands add fluid; they do not store sperm.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Male Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which gland contributes the largest share of semen volume?",
        options: [
          "The prostate",
          "The bulbourethral glands",
          "The seminal vesicles",
          "The epididymis",
        ],
        correctIndex: 2,
        explanation:
          "The paired seminal vesicles provide most of the ejaculate — a fructose-rich fluid that fuels sperm on their journey. The prostate adds a smaller alkaline fraction, and the bulbourethral glands only a drop of lubrication.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Family Planning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A man asks what structure a vasectomy blocks. What is the correct answer?",
        options: [
          "The spermatic artery and vein",
          "The epididymis",
          "The ejaculatory duct within the prostate",
          "The vas deferens in the scrotum",
        ],
        correctIndex: 3,
        explanation:
          "Vasectomy cuts or occludes the vas deferens as it travels through the scrotum, blocking sperm from reaching the semen. Blood vessels, the epididymis and the prostate are left untouched, which is why hormones and sexual function are preserved.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Male Reproductive Anatomy",
        front: "Why do the testes hang outside the body?",
        back: "Sperm production needs a temperature about 2-3 degrees below core body heat, so the scrotum holds the testes outside, with muscles adjusting their distance for warmth.",
      },
      {
        topic: "Male Reproductive Anatomy",
        front: "Sertoli cells versus Leydig cells — what does each do?",
        back: "Sertoli cells sit inside the seminiferous tubules and nurse developing sperm; Leydig cells sit between the tubules and produce testosterone.",
      },
      {
        topic: "Male Reproductive Anatomy",
        front: "What does the seminal vesicle fluid provide?",
        back: "The bulk of semen volume, rich in fructose — the fuel that powers sperm on their long swim.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — male reproductive system chapter.",
      },
      {
        organization: "WHO & Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2022 (3rd edition)",
        url: "https://www.fphandbook.org",
        note: "Evidence-based counselling guidance including vasectomy facts.",
      },
      {
        organization: "Elsevier",
        title: "Guyton and Hall Textbook of Medical Physiology",
        year: "2021 (14th edition)",
        note: "Reference for spermatogenesis and reproductive endocrinology.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "Cycles and Hormones",
    lessonTitle: "The Menstrual Cycle: A Month in Four Acts",
    description:
      "Follicular, ovulation, luteal, menstruation — the four-act story you will explain and monitor countless times. Learn it once, properly, and it pays you back every clinic day.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Describe the four phases of the menstrual cycle and what the ovary and endometrium do in each.",
      "Explain how ovulation timing relates to cycle length and the fertile window.",
      "Apply cycle knowledge when teaching women about natural family planning and pregnancy timing.",
    ],
    tags: ["menstrual cycle", "ovulation", "luteal phase", "fertility awareness", "family planning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The menstrual cycle is not just the monthly bleeding — that is only the visible finale of a month-long performance by the brain, the ovaries and the uterus. When you understand the whole play, you can answer the questions women ask most: when did I conceive, why is my period late, which days can I get pregnant?\n\nThis lesson walks the cycle as four acts, then teaches you the single most useful timing rule you will ever use at a family planning desk.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Act one — menstruation (roughly days 1-5).** Without pregnancy, the corpus luteum dies, progesterone falls, and the endometrium it was holding is shed as the period. **Act two — the follicular phase.** From day one, FSH from the pituitary recruits a group of follicles in the ovary; one becomes dominant and pumps out oestrogen, which rebuilds the endometrium into a thick, blood-rich lining.\n\n**Act three — ovulation.** When oestrogen stays high for long enough, it flips the usual negative feedback into a positive one, triggering a massive LH surge from the pituitary. Ovulation — release of the egg — follows about 24 to 36 hours after the surge begins. The egg survives only 12 to 24 hours, but sperm can wait in the tube for up to five days, so the fertile window opens days before ovulation itself.\n\n**Act four — the luteal phase.** The emptied follicle becomes the corpus luteum, secreting progesterone that ripens the endometrium into a soft, secretory lining ready for an embryo. If no pregnancy signals arrive, the corpus luteum fades after about fourteen days and the next period begins. Here is the timing rule that outshines all others: ovulation happens roughly **fourteen days before the next period**, not a fixed fourteen days after the last one. A 32-day cycle ovulates near day 18; a 26-day cycle near day 12.",
      },
      {
        type: "clinical_pearl",
        body: "Day 14 is textbook, not gospel. It only fits the perfect 28-day cycle. For counselling, count fourteen days back from the expected next period, and remember sperm survive up to five days — the fertile window is wider than the day of ovulation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old trader registers at your CHPS compound wanting a natural family planning method. Her last three cycles ran 26, 30 and 32 days. She has heard that every woman ovulates on day 14 and asks you to confirm, because her friend with a 28-day cycle swears by the bead method. Working from her own cycles, when is she most likely ovulating, and what should you teach her before she relies on any calendar rule?\n\nAnswer: Her ovulation is probably scattered across roughly days 12 to 18 — fourteen days back from each cycle's next period — so day 14 fits only her shorter cycles. Teach her the count-back rule, that sperm surviving up to five days widen the fertile window, and that cycles jumping from 26 to 32 days make pure calendar methods unreliable. Offer proper fertility awareness counselling, where she tracks cervical mucus or uses standard-day tools if her cycles qualify, and discuss other methods in case the cycles stay irregular.",
      },
      {
        type: "memory_trick",
        body: "The luteal phase is loyal: fourteen days, almost every time, whether the cycle is 26 or 35 days long. So never count forward — count fourteen days back from the next period to find ovulation.",
      },
      {
        type: "summary",
        body: "- Four acts: menstruation (shedding), follicular (follicle grows, oestrogen rebuilds the lining), ovulation (LH surge releases the egg), luteal (corpus luteum, progesterone, secretory lining).\n- The LH surge triggers ovulation about 24-36 hours later; the egg lives 12-24 hours.\n- Sperm survive up to five days, so the fertile window opens before ovulation.\n- The luteal phase is fixed at about 14 days; therefore ovulation is best estimated 14 days before the next period.\n- A missed period is pregnancy until proved otherwise — always test before reassuring.",
      },
    ],
    questions: [
      {
        topic: "Menstrual Cycle",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which event triggers ovulation?",
        options: [
          "A sudden fall in progesterone",
          "An LH surge from the anterior pituitary",
          "Rupture of the corpus luteum",
          "A rise in FSH at the end of menstruation",
        ],
        correctIndex: 1,
        explanation:
          "Sustained high oestrogen switches feedback to positive, causing a large LH surge; ovulation follows about 24-36 hours after the surge begins. FSH helps follicles grow, but the surge that releases the egg belongs to LH.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Menstrual Cycle",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman has regular 32-day cycles. On which day is she most likely to ovulate?",
        options: [
          "Day 14",
          "Day 10",
          "Day 18",
          "Day 26",
        ],
        correctIndex: 2,
        explanation:
          "The luteal phase lasts about 14 days, so ovulation sits 14 days before the next period: 32 minus 14 gives day 18. Day 14 applies only to the textbook 28-day cycle.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Menstrual Cycle",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Fertilisation does not occur in a given cycle. What happens to the corpus luteum and the endometrium?",
        options: [
          "The corpus luteum persists and keeps the lining thick until the next ovulation",
          "The corpus luteum degenerates, progesterone falls, and the endometrium is shed",
          "The corpus luteum becomes a new follicle within days",
          "The endometrium continues thickening throughout the next cycle",
        ],
        correctIndex: 1,
        explanation:
          "With no hCG to rescue it, the corpus luteum regresses after about 14 days. Progesterone and oestrogen fall, the lining loses its support, and menstruation follows — which is exactly what the next cycle's day one means.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Menstrual Cycle",
        front: "How long is the luteal phase, and why does that matter for timing?",
        back: "About 14 days, in nearly every woman. So ovulation is best estimated by counting 14 days back from the next expected period — not 14 days forward from the last one.",
      },
      {
        topic: "Menstrual Cycle",
        front: "How long do the egg and sperm survive after ovulation and intercourse?",
        back: "The egg lives 12-24 hours; sperm can survive up to about 5 days in the female tract — which is why intercourse days before ovulation can still cause pregnancy.",
      },
      {
        topic: "Menstrual Cycle",
        front: "What marks the switch into the secretory (luteal) endometrium?",
        back: "Progesterone from the corpus luteum, which forms from the emptied follicle after ovulation and ripens the lining for a possible embryo.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — ovarian and uterine cycles.",
      },
      {
        organization: "WHO & Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2022 (3rd edition)",
        url: "https://www.fphandbook.org",
        note: "Fertility awareness-based methods and counselling.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Clinical nursing application of cycle physiology.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "Cycles and Hormones",
    lessonTitle: "Reproductive Hormones: The Chemical Conductors",
    description:
      "Oestrogen, progesterone, FSH, LH and hCG — the small chemical messages that run the entire reproductive show. Master the cast once and you can explain almost everything you'll see.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Trace the hormonal chain of command from the hypothalamus to the ovary and uterus.",
      "Contrast the main jobs of oestrogen, progesterone and hCG across the cycle and in pregnancy.",
      "Apply hormone knowledge to explain pregnancy tests, natural family planning signs and the combined pill.",
    ],
    tags: ["hormones", "endocrine", "feedback", "hcg", "contraception"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A handful of hormones quietly run everything you will ever monitor: the monthly cycle, the pregnancy test in your hand, the pill in a woman's purse, even the heartburn she complains about at antenatal clinic. Learn this small cast of characters and you hold the key to a hundred everyday questions.\n\nThis lesson introduces the conductors one by one — where each is made, what each directs, and how they talk back to the brain in feedback loops that keep the whole system in tempo.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The chain of command starts in the hypothalamus, which releases GnRH in pulses — not a steady stream. GnRH tells the anterior pituitary to send out **FSH** and **LH**. FSH grows the ovarian follicles; LH triggers ovulation and then runs the corpus luteum that forms from the emptied follicle.\n\nThe ovaries answer with the two leading ladies. **Oestrogen**, from the growing follicle and corpus luteum, rebuilds the endometrium each month, softens the cervical mucus into a fertile, stretchy welcome, and shapes the female body at puberty. Its boldest move: when oestrogen stays high long enough, feedback flips from negative to positive, firing the LH surge that causes ovulation. **Progesterone** is pro-gestation — a secretory lining for the uterus, a mucus plug at the cervix, a slight rise in body temperature (the basis of temperature-based family planning), and smooth muscle relaxed so a pregnant uterus stays quiet.\n\nOne hormone is made by the baby's side, not the mother's: **hCG**, secreted by the early placenta (trophoblast). Its job is to keep the corpus luteum alive until the placenta can support itself, around 8-10 weeks — and it is the hormone every pregnancy test detects. The combined pill works by holding the negative feedback steady with synthetic oestrogen and progestin, so no follicle dominates and no LH surge ever fires.",
      },
      {
        type: "clinical_pearl",
        body: "When a symptom or a drug puzzles you, name the hormone first. Heartburn and constipation in pregnancy — progesterone relaxing smooth muscle. A positive test — hCG from trophoblast. No ovulation on the pill — suppressed FSH and LH. The hormone is nearly always the first thread to pull.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a CHPS compound family planning desk, a young mother slides her strip of combined pills across the table. Her friends have warned her the tablet will 'damage her system', and she looks at you doubtfully before asking how one small daily tablet can actually stop a pregnancy. You have the whole endocrine system behind you. How do you explain it to her in plain words?\n\nAnswer: The pill carries two hormone copies — an oestrogen and a progestin — that hold her pituitary under gentle negative feedback. With no FSH rise, no follicle dominates; with no LH surge, there is no ovulation, so no egg ever meets any sperm. Progestin also thickens her cervical mucus and keeps the lining thin as backup. And because the hormones leave her body quickly, the pill must be taken every day at about the same time to keep the suppression steady.",
      },
      {
        type: "memory_trick",
        body: "Progesterone = PRO-gestation: it prepares the nest, plugs the door, warms the body and keeps the uterus quiet. Oestrogen = everything blooming: follicle growing, lining building, mucus fertile — and when it peaks, it fires the gun for ovulation.",
      },
      {
        type: "summary",
        body: "- Chain of command: hypothalamic GnRH (in pulses) → pituitary FSH and LH → ovary.\n- FSH grows follicles; LH triggers ovulation and runs the corpus luteum.\n- Oestrogen rebuilds the lining and fires the LH surge through positive feedback; progesterone makes the lining secretory, thickens mucus, warms the body and quietens smooth muscle.\n- hCG from the trophoblast rescues the corpus luteum until the placenta takes over at about 8-10 weeks; pregnancy tests detect it.\n- The combined pill holds negative feedback steady: no dominant follicle, no LH surge, no egg.",
      },
    ],
    questions: [
      {
        topic: "Reproductive Hormones",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which hormone does a urine pregnancy test detect?",
        options: [
          "Progesterone",
          "LH",
          "Oestrogen",
          "hCG",
        ],
        correctIndex: 3,
        explanation:
          "Pregnancy tests detect human chorionic gonadotropin, made by the trophoblast of the early embryo. It appears around the time of the missed period and its job is to keep the corpus luteum producing progesterone.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Reproductive Hormones",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What directly triggers the LH surge just before ovulation?",
        options: [
          "A sharp drop in progesterone at mid-cycle",
          "Sustained high oestrogen switching feedback from negative to positive",
          "Rising FSH from the corpus luteum",
          "hCG released by the mature follicle",
        ],
        correctIndex: 1,
        explanation:
          "When oestrogen from the dominant follicle stays high long enough, the pituitary's response flips from braking to accelerating — positive feedback — and the LH surge bursts out, followed by ovulation within about 24-36 hours.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Reproductive Hormones",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How does the combined oral contraceptive pill mainly prevent pregnancy?",
        options: [
          "It kills sperm in the fallopian tube",
          "It keeps FSH and LH suppressed, so no follicle matures and no ovulation occurs",
          "It causes the endometrium to shed every day",
          "It permanently stops the ovaries from producing hormones",
        ],
        correctIndex: 1,
        explanation:
          "Steady doses of oestrogen and progestin maintain negative feedback on the pituitary, so no dominant follicle emerges and no LH surge fires — there is simply no egg. Thickened mucus and a thin lining are backup effects, and fertility returns when the pills stop.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Reproductive Hormones",
        front: "What does GnRH do, and why is 'pulsatile' the key word?",
        back: "GnRH from the hypothalamus commands the pituitary to release FSH and LH — but only when it arrives in pulses. A constant stream would desensitise the pituitary.",
      },
      {
        topic: "Reproductive Hormones",
        front: "Name three jobs of progesterone.",
        back: "Converts the endometrium to a secretory lining, thickens cervical mucus into a plug, raises basal body temperature slightly — and relaxes smooth muscle, quietening the pregnant uterus (and causing heartburn and constipation).",
      },
      {
        topic: "Reproductive Hormones",
        front: "What is hCG's job, and where is it made?",
        back: "Made by the trophoblast (early placenta), hCG rescues and maintains the corpus luteum so progesterone keeps flowing until the placenta takes over at about 8-10 weeks. It is what pregnancy tests detect.",
      },
    ],
    sources: [
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — endocrine control of reproduction.",
      },
      {
        organization: "WHO & Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2022 (3rd edition)",
        url: "https://www.fphandbook.org",
        note: "Mechanisms of hormonal contraception.",
      },
      {
        organization: "Elsevier",
        title: "Guyton and Hall Textbook of Medical Physiology",
        year: "2021 (14th edition)",
        note: "Feedback loops and reproductive endocrine physiology.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "From Egg to Embryo",
    lessonTitle: "Fertilization: Where Life Begins",
    description:
      "The remarkable meeting of egg and sperm — the journey, the timing, and the first cell divisions. Everything about your job starts here.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the journey of sperm and egg to their meeting in the fallopian tube, including capacitation.",
      "Explain the block to polyspermy and the first week of cell divisions from zygote to blastocyst.",
      "Apply timing knowledge to fertility counselling and to recognosing an ectopic pregnancy.",
    ],
    tags: ["fertilization", "conception", "ectopic pregnancy", "embryology"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Of the hundreds of millions of sperm that begin the journey, only a few hundred reach the fallopian tube — and only one enters the egg. From that single meeting comes every patient you will ever care for, including the newborn you will catch in your hands.\n\nIn this lesson you will follow the egg and the sperm to their meeting place, watch the first cell divisions of the new life, and learn the timing facts that matter for both family planning and emergencies.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "After ovulation, the fimbriae sweep the egg into the tube, where fertilisation normally happens in the ampulla. Sperm cannot fertilise immediately: they must first spend hours in the female tract undergoing **capacitation**, a change that unlocks their ability to penetrate the egg. Sperm survive up to about five days there, while the egg stays viable for only 12-24 hours — which is why intercourse days before ovulation can still lead to conception.\n\nWhen a capacitated sperm reaches the egg, it releases enzymes from its acrosome to drill through the zona pellucida, the egg's outer shell. As soon as one sperm fuses with the egg membrane, the **cortical reaction** hardens the zona so no second sperm can enter — the block to polyspermy. The fused cell, now with a full set of 46 chromosomes, is the zygote, and whether the winning sperm carried an X or a Y chromosome has already decided the baby's sex.\n\nOver about five days the zygote divides — two cells, four, eight — becoming a morula around day three and a hollow **blastocyst** by day five, all while drifting down the tube toward the uterus. If the new life implants in the tube instead of the uterus, it is an ectopic pregnancy — most often in the ampulla — and as it grows, the tube can rupture, usually around six to eight weeks.",
      },
      {
        type: "clinical_pearl",
        body: "A positive pregnancy test plus one-sided lower abdominal pain, light spotting, or referred pain at the shoulder tip — think ectopic until an ultrasound proves otherwise. Rupture bleeds into the abdomen quietly and fast.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 27-year-old seamstress walks into your district hospital OPD holding a positive home pregnancy test. She reports seven weeks since her last period, a dull ache in her right lower belly since morning, and a small amount of brownish spotting. Her pulse is 98 and her blood pressure normal, but she looks pale and anxious. What must you suspect first, and what must not happen next for this woman?\n\nAnswer: You suspect an ectopic pregnancy — a positive test with unilateral pain and spotting at seven weeks fits it perfectly. She must be referred immediately for clinical review and ultrasound; she must never be sent home with painkillers and reassurance, because a rupturing tube causes hidden internal bleeding. Alert your senior, keep her off food and drink in case surgery is needed, record her vital signs, and arrange safe transport if the scan is not on site.",
      },
      {
        type: "memory_trick",
        body: "Picture the egg as a house with one door: the first sperm in slams the gate behind him — the cortical reaction hardens the zona pellucida, and no second sperm can enter.",
      },
      {
        type: "summary",
        body: "- Fertilisation normally happens in the ampulla of the fallopian tube, hours after ovulation.\n- Capacitation first: sperm must spend time in the female tract before they can penetrate an egg.\n- Timing: sperm survive up to about 5 days; the egg only 12-24 hours — the fertile window opens before ovulation.\n- One sperm enters; the cortical reaction blocks all others — the block to polyspermy.\n- Zygote → morula (day 3) → blastocyst (day 5) → implantation in the uterus; implantation in the tube = ectopic pregnancy, rupture risk around 6-8 weeks.",
      },
    ],
    questions: [
      {
        topic: "Fertilization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Where does fertilisation normally take place?",
        options: [
          "In the uterus",
          "In the ampulla of the fallopian tube",
          "In the ovary",
          "In the cervical canal",
        ],
        correctIndex: 1,
        explanation:
          "The egg is swept into the tube and meets sperm in its widest part, the ampulla. The isthmus and uterus come later in the journey; the ovary only releases the egg.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Fertilization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A couple had intercourse three days before the woman ovulated. Why can pregnancy still occur?",
        options: [
          "The egg can survive for a week waiting for sperm",
          "Sperm can survive in the female tract for up to about five days",
          "Ovulation repeats whenever sperm are present",
          "Sperm can fertilise the egg inside the ovary",
        ],
        correctIndex: 1,
        explanation:
          "Sperm remain capable of fertilising for up to about five days in the tube, patiently waiting. The egg, by contrast, lives only 12-24 hours — so the days before ovulation are fertile days.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Fertilization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the purpose of the cortical reaction after one sperm enters the egg?",
        options: [
          "To attract additional sperm for backup",
          "To harden the zona pellucida and prevent polyspermy",
          "To complete capacitation of the winning sperm",
          "To begin the shedding of the endometrium",
        ],
        correctIndex: 1,
        explanation:
          "As the first sperm fuses with the egg, the egg releases chemicals that harden the zona pellucida, sealing it against all other sperm. Without this, multiple sperm could enter and development would fail.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Fertilization",
        front: "What is capacitation?",
        back: "The final maturing change sperm undergo in the female tract over several hours that unlocks their ability to penetrate and fertilise an egg — fresh sperm cannot do it yet.",
      },
      {
        topic: "Fertilization",
        front: "What is the block to polyspermy?",
        back: "The cortical reaction: when the first sperm fuses, the egg's shell (zona pellucida) hardens instantly so no second sperm can enter — one father, one set of chromosomes only.",
      },
      {
        topic: "Fertilization",
        front: "When is the baby's sex decided?",
        back: "At fertilisation — by whether the winning sperm carried an X chromosome (girl) or a Y chromosome (boy). The egg always contributes an X.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia)",
        year: "2020 (11th edition)",
        note: "Standard clinical embryology reference — fertilisation and first week.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — development chapter.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Ectopic pregnancy recognition and referral pathways.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "From Egg to Embryo",
    lessonTitle: "Implantation and Early Development",
    description:
      "How the blastocyst burrows in and sets up home — the beginning of placenta, pregnancy tests and prenatal care as we know it. A small window with big consequences.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the parts of the blastocyst and what each becomes after implantation.",
      "Explain the timing of implantation and the hormonal handover from corpus luteum to placenta.",
      "Apply knowledge of early organ development to folic acid and early antenatal counselling.",
    ],
    tags: ["implantation", "embryo", "hcg", "folic acid", "neural tube"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "By about a week after fertilisation, the little blastocyst is ready to stop travelling and make its home in the uterus. Everything that follows — the pregnancy test, the placenta, the antenatal clinic card — flows from this quiet burrowing-in.\n\nIn this lesson you will meet the cells that build the placenta and the cells that build the baby, learn the timing that governs early pregnancy care, and understand why the first weeks are the most decisive ones of a whole lifetime.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The blastocyst has two working parts. The outer shell of cells, the **trophoblast**, is the catering company: it invades the uterine lining, builds the placenta, and secretes hCG to keep the corpus luteum producing progesterone. The clump of cells inside, the **inner cell mass**, is the guest of honour — it becomes the embryo itself. Implantation normally occurs about 6-10 days after fertilisation, most often in the upper back wall of the uterus.\n\nAs the trophoblast digs in, the inner cell mass organises into two layers, the epiblast and hypoblast, with a small amniotic cavity forming beside the epiblast. Around week three, the embryo lays down its body plan in a process called gastrulation, and the neural tube — the future brain and spinal cord — forms and closes by about **day 28**, often before a woman knows she is pregnant. This is exactly why folic acid must start before conception: the WHO recommends 400 micrograms daily for women planning pregnancy, continuing into the early weeks.\n\nA hormone handover follows. hCG keeps the corpus luteum alive, and the corpus luteum supplies progesterone until the placenta matures enough to take over the job at around 8-10 weeks — one reason early pregnancy is fragile. Some women notice light spotting when the blastocyst implants, easily mistaken for a light period; any bleeding in early pregnancy still deserves assessment, because miscarriage and ectopic pregnancy can look the same at first.",
      },
      {
        type: "clinical_pearl",
        body: "A positive pregnancy test tells you living trophoblast is present — it does not tell you where it implanted. Confirming location is ultrasound's job. Test positive, bleeding, one-sided pain: same drill as ectopic, refer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old teacher visits your CHPS compound before even trying to conceive. Her sister's baby was born with a neural tube defect, and she has heard folic acid helps — but she plans to simply start the tablets 'once I miss my period'. She asks whether that timing is right. What do you tell her about the neural tube and the calendar?\n\nAnswer: You tell her the neural tube closes by about day 28 after fertilisation — around the day the pregnancy test is just turning positive, and often before it. Waiting until a missed period misses the window. She should start 400 micrograms of folic acid daily now, while planning, continue through early pregnancy, and eat folate-rich foods like dark green leaves, beans and oranges alongside it. Given her family history, you note it for her clinician, since higher-risk histories may call for a higher dose on prescription.",
      },
      {
        type: "memory_trick",
        body: "Tropho- means food: the trophoblast is the catering company that builds the placenta and sends hCG invoices to the corpus luteum. The inner cell mass is the guest of honour — the baby under construction.",
      },
      {
        type: "summary",
        body: "- Blastocyst = trophoblast (becomes placenta, makes hCG) + inner cell mass (becomes the embryo).\n- Implantation occurs 6-10 days after fertilisation, usually in the upper posterior uterine wall.\n- hCG from the trophoblast maintains the corpus luteum until the placenta takes over progesterone at about 8-10 weeks.\n- The neural tube closes by about day 28 — often before a missed period — so folic acid 400 micrograms daily must start preconception.\n- Light spotting can accompany implantation, but any early-pregnancy bleeding needs assessment to exclude miscarriage and ectopic pregnancy.",
      },
    ],
    questions: [
      {
        topic: "Implantation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which part of the blastocyst develops into the placenta?",
        options: [
          "The inner cell mass",
          "The trophoblast",
          "The blastocoele cavity",
          "The zona pellucida",
        ],
        correctIndex: 1,
        explanation:
          "The trophoblast is the outer shell that invades the uterine lining and builds the placenta, including the hCG-secreting cells. The inner cell mass becomes the embryo itself.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Implantation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How long after fertilisation does implantation normally occur?",
        options: [
          "Within 24 hours",
          "About 6-10 days",
          "About 4 weeks",
          "Only after the first missed period ends",
        ],
        correctIndex: 1,
        explanation:
          "The blastocyst floats briefly in the uterine cavity, hatches, and burrows into the lining about 6-10 days after fertilisation — roughly the time a sensitive pregnancy test first turns positive.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Early Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should folic acid begin before a woman misses her period?",
        options: [
          "Because absorption from tablets stops once pregnancy begins",
          "Because the neural tube closes by about day 28, before pregnancy is usually confirmed",
          "Because folic acid prevents ectopic implantation",
          "Because the placenta stores folic acid for the third trimester",
        ],
        correctIndex: 1,
        explanation:
          "The brain and spinal cord take shape and close very early — around day 28, when most women have not yet tested. WHO advises 400 micrograms daily starting before conception so levels are already high during that brief, decisive window.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Implantation",
        front: "What does the trophoblast become, and what hormone does it make?",
        back: "The placenta — and its cells secrete hCG, the pregnancy-test hormone that keeps the corpus luteum alive until the placenta takes over at about 8-10 weeks.",
      },
      {
        topic: "Implantation",
        front: "When and where does implantation normally occur?",
        back: "About 6-10 days after fertilisation, most often into the upper posterior wall of the uterus — a spot with the richest blood supply.",
      },
      {
        topic: "Early Development",
        front: "When does the neural tube close, and what does that mean for counselling?",
        back: "By about day 28 after fertilisation — often before a missed period — so folic acid 400 micrograms daily must start preconception, not after the test turns positive.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
        note: "Nutritional interventions in pregnancy, including iron and folic acid.",
      },
      {
        organization: "Elsevier",
        title: "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia)",
        year: "2020 (11th edition)",
        note: "Standard reference — implantation and week-two development.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — development chapter.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "From Egg to Embryo",
    lessonTitle: "Genetics Basics: The Instruction Manual",
    description:
      "DNA, genes and chromosomes — the blueprint that decides so much, and the quiet mathematics behind sickle cell counselling in Ghana. Start here and the counselling makes sense.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe DNA, genes and chromosomes, and how meiosis halves the chromosome number for reproduction.",
      "Explain dominant and recessive inheritance using sickle cell trait as the working example.",
      "Apply genetic knowledge to genotype counselling for couples in the Ghanaian context.",
    ],
    tags: ["genetics", "dna", "chromosomes", "sickle cell", "inheritance"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every baby you deliver carries a combined instruction manual — half written by the mother, half by the father. Most chapters run smoothly; occasionally a recipe is misspelled, and a condition like sickle cell disease follows. In Ghana, where sickle cell disease touches thousands of families, genetics is not an academic subject — it is clinic conversation.\n\nThis lesson gives you the vocabulary: DNA, genes, chromosomes, and the simple maths of inheritance that turns two healthy parents into one affected child in four.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "DNA is the famous twisted ladder; a gene is one recipe along it, spelling out a protein; and chromosomes are the tidy bound volumes. Human body cells carry **46 chromosomes** — 23 pairs, one set of each pair from the mother's egg and one from the father's sperm. Meiosis is the special cell division that halves the number to 23 per egg or sperm, so fertilisation restores the full 46. The sperm also delivers the sex decision: X-carrying sperm make girls, Y-carrying sperm make boys — the egg always brings an X.\n\nGenes come in versions, and dominance decides whose voice is heard. A recessive condition like sickle cell disease appears only when both copies are affected. A carrier has one usual haemoglobin gene and one sickle gene (genotype AS) — healthy, but able to pass the sickle gene on. When two carriers have a baby, each child faces the same odds every single pregnancy: one in four unaffected (AA), two in four carriers (AS), and one in four with sickle cell disease (SS).\n\nSometimes the machinery stumbles: if a chromosome pair fails to separate in meiosis — non-disjunction — an egg or sperm carries an extra chromosome, giving trisomy 21, the cause of Down syndrome, whose risk rises with the mother's age. And carrier rates for the sickle gene in Ghana are among the world's highest — which is why genotype screening and calm, non-directive counselling belong in routine antenatal and preconception care.",
      },
      {
        type: "clinical_pearl",
        body: "Counselling is not judging. Offer genotype screening early, explain the odds in plain language, and let the couple decide — the one-in-four chance is the same for every pregnancy, no matter how previous children turned out.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A couple in their late twenties comes to your district hospital's counselling corner. Both tested genotype AS at a health screening. The wife is newly pregnant and worried; her cousin has sickle cell disease and she has seen the crises. The husband asks quietly: with both of us carrying it, what is the chance this baby will have the disease? What do you tell them — and what must you not do?\n\nAnswer: Every pregnancy of two AS parents carries a one-in-four (25 percent) chance of sickle cell disease (SS), two in four of a healthy carrier (AS), and one in four of a child with no sickle gene (AA) — and the odds reset at every pregnancy, so previous children change nothing for the next baby. You offer referral for prenatal testing and sickle cell care, encourage antenatal registration, and above all share the information without pressure or blame — the decision about testing belongs to them.",
      },
      {
        type: "memory_trick",
        body: "23 from Ma, 23 from Pa — 46 in every baby. And for two carriers, picture the Punnett square as a market table with four bowls: one AA, two AS, one SS. The table is reshuffled fresh at every pregnancy.",
      },
      {
        type: "summary",
        body: "- DNA holds the recipes, genes are single recipes, chromosomes are the bound volumes — 46 in body cells, 23 pairs.\n- Meiosis halves the count to 23 in egg and sperm; fertilisation restores 46. The sperm's X or Y decides sex.\n- Recessive conditions need two copies; carriers (AS) are healthy but pass the gene on.\n- AS x AS parents: each child faces 1 in 4 SS, 2 in 4 AS, 1 in 4 AA — the same odds every pregnancy.\n- Non-disjunction in meiosis causes an extra chromosome — trisomy 21 (Down syndrome), risk rising with maternal age.",
      },
    ],
    questions: [
      {
        topic: "Genetics Basics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How many chromosomes does a normal human body cell contain?",
        options: [
          "23",
          "32",
          "46",
          "48",
        ],
        correctIndex: 2,
        explanation:
          "Body cells carry 46 chromosomes in 23 pairs — one of each pair from each parent. Egg and sperm carry 23 each, restored to 46 at fertilisation.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Genetics Basics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Both parents have genotype AS. What is the chance, per pregnancy, that their child will have sickle cell disease (SS)?",
        options: [
          "No chance — both parents are healthy",
          "1 in 2 (50 percent)",
          "1 in 4 (25 percent)",
          "3 in 4 (75 percent)",
        ],
        correctIndex: 2,
        explanation:
          "Two carriers make a four-box Punnett square: one AA, two AS, one SS. The 25 percent chance applies to every pregnancy independently — a previous unaffected child does not reduce it.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Genetics Basics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Down syndrome (trisomy 21) most often results from which mechanism?",
        options: [
          "A dominant gene passed from one affected parent",
          "Chromosome pairs failing to separate during meiosis (non-disjunction)",
          "The mother's diet in the first trimester",
          "Fertilisation by two sperm at once",
        ],
        correctIndex: 1,
        explanation:
          "Non-disjunction leaves an egg or sperm carrying an extra chromosome 21; after fertilisation the embryo carries three copies. The risk rises with the mother's age, which is why it is a meiosis problem, not a lifestyle problem.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Genetics Basics",
        front: "Who determines a baby's sex — the egg or the sperm?",
        back: "The sperm. The egg always carries an X; a sperm carrying X makes a girl (XX) and one carrying Y makes a boy (XY).",
      },
      {
        topic: "Genetics Basics",
        front: "What does it mean to be a carrier of sickle cell (genotype AS)?",
        back: "You have one usual haemoglobin gene and one sickle gene — you are healthy, but each of your children can inherit the sickle gene from you.",
      },
      {
        topic: "Genetics Basics",
        front: "AS mother and AS father — what are the possible genotypes of their children?",
        back: "One in four AA (unaffected), two in four AS (healthy carriers), one in four SS (sickle cell disease) — the same one-in-four risk at every pregnancy.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Sickle Cell Disease — Fact Sheet",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/sickle-cell-anaemia",
        note: "Global burden and screening priorities.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Biology 2e",
        year: "2018",
        url: "https://openstax.org/books/biology-2e",
        note: "Free, peer-reviewed textbook — Mendelian inheritance and meiosis.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Genetic screening and counselling in antenatal care.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "From Egg to Embryo",
    lessonTitle: "Pregnancy Physiology: An Introduction",
    description:
      "A preview of how the whole body adapts to carry a pregnancy — the changes you will monitor daily before long, and the ones you must not mistake for disease.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the major cardiovascular, respiratory, renal and gastrointestinal adaptations of pregnancy.",
      "Distinguish physiological changes of pregnancy from true warning signs needing escalation.",
      "Apply positioning knowledge to manage supine hypotension safely.",
    ],
    tags: ["pregnancy", "physiology", "blood volume", "adaptations", "antenatal care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy is the healthiest state in which the body does the most dramatic remodelling of a woman's life. Almost every system changes — blood, heart, lungs, kidneys, gut, skin — and most of what looks strange on a chart is actually adaptation, not illness.\n\nYour future job as a nurse is to stand at the border between normal adaptation and disease. This lesson is your first map of that border.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the blood. Volume rises by about **40-50 percent** — nearly half again — and the liquid plasma rises faster than the red cells. That dilution lowers the haemoglobin reading, which is why WHO defines anaemia in pregnancy as a haemoglobin below 11 g/dL. The heart pumps harder too: cardiac output rises by roughly a third to a half, the pulse quickens by about 10-15 beats per minute, and blood pressure usually dips slightly in mid-pregnancy.\n\nThe kidneys filter about 50 percent more blood, so women urinate often, and a little sugar can appear in urine without disease. Progesterone relaxes smooth muscle everywhere — quietening the uterus, but softening the stomach's valve (hello, heartburn) and slowing the bowel (constipation). Breathing deepens on progesterone's orders, so mild breathlessness on a hill is common; the uterus grows from about 60 grams to roughly a kilogram; and the skin may darken along the midline or face.\n\nOne adaptation is positional and completely preventable: from about mid-pregnancy, lying flat on the back lets the heavy uterus compress the large vein returning blood to the heart — the **supine hypotensive syndrome**. The woman feels faint and pale; tilting her onto her left side, even with just a pillow wedged under the right hip, restores the flow within minutes.",
      },
      {
        type: "clinical_pearl",
        body: "Fast pulse, breathlessness on the hill, sugar in the urine, a slightly lower haemoglobin — in pregnancy these are usually adaptation, not alarm. But know your thresholds: WHO calls anaemia in pregnancy a haemoglobin below 11 g/dL, and any reading there deserves treatment, not reassurance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a district hospital antenatal clinic, a woman about 32 weeks pregnant lies flat on the examination couch while you check her blood pressure. Midway through, she tells you she feels dizzy and unwell, and you notice she has gone pale with slight sweating. Your classmate reaches for the sphygmomanometer again, sure the reading means shock. What is actually happening, and what is your first action?\n\nAnswer: She is likely experiencing supine hypotension — the heavy uterus pressing on the inferior vena cava as she lies flat, cutting blood return to her heart. Your first move is positional, not pharmaceutical: tilt her onto her left side, or wedge a pillow under her right hip, and stay with her while she settles. Recheck the blood pressure once she is comfortable in the new position — dizziness and low reading usually resolve together within minutes.",
      },
      {
        type: "memory_trick",
        body: "Fill the bath, speed the pump, dilute the red: plasma volume up 40-50 percent, cardiac output up a third to a half, and haemoglobin diluted simply because there is more water in the blood. Three phrases that keep the normal from being mistaken for the dangerous.",
      },
      {
        type: "summary",
        body: "- Blood volume rises about 40-50 percent; plasma outpaces red cells, so mild haemoglobin dilution is physiological — WHO anaemia threshold in pregnancy is Hb below 11 g/dL.\n- Cardiac output rises about 30-50 percent, pulse adds 10-15 beats per minute, and blood pressure dips slightly mid-pregnancy.\n- Kidney filtration rises about 50 percent — frequent urination and occasional harmless sugar in urine.\n- Progesterone relaxes smooth muscle: heartburn, constipation and a quiet uterus; breathing deepens and the uterus grows from about 60 g to 1 kg.\n- Never leave a woman past mid-pregnancy flat on her back — supine hypotension is treated with a left lateral tilt or wedge under the right hip.",
      },
    ],
    questions: [
      {
        topic: "Pregnancy Physiology",
        type: "MCQ",
        difficulty: "Easy",
        stem: "By late pregnancy, blood volume has increased by approximately how much?",
        options: [
          "5-10 percent",
          "20 percent",
          "40-50 percent",
          "It does not increase at all",
        ],
        correctIndex: 2,
        explanation:
          "Blood volume climbs by about 40-50 percent — nearly half again — to supply the placenta and protect the mother against delivery blood loss. The plasma fraction rises faster than red cells.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Pregnancy Physiology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the haemoglobin reading fall slightly in a healthy pregnancy?",
        options: [
          "The mother's red cells are being destroyed by the placenta",
          "Plasma volume rises more than red cell mass, diluting the blood",
          "The fetus consumes the mother's iron before birth",
          "Red cell production stops during pregnancy",
        ],
        correctIndex: 1,
        explanation:
          "This is dilutional (physiological) anaemia of pregnancy: the liquid plasma increases more than the red cells, so the concentration reading drops even though total red cell mass has actually risen. WHO flags true anaemia in pregnancy at Hb below 11 g/dL.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Pregnancy Physiology",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks feels faint while lying flat for a blood pressure check. What is the correct first action?",
        options: [
          "Lie her flatter and raise her legs",
          "Give her a drink of cold water",
          "Tilt her onto her left side or wedge a pillow under her right hip",
          "Take the blood pressure immediately on the other arm",
        ],
        correctIndex: 2,
        explanation:
          "She most likely has supine hypotension: the uterus is compressing the inferior vena cava. A left lateral tilt — or even a pillow under the right hip — lifts the uterus off the vein and restores blood flow within minutes; the reading can be repeated once she is settled.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Pregnancy Physiology",
        front: "What haemoglobin level defines anaemia in pregnancy, according to WHO?",
        back: "Below 11 g/dL. Slightly diluted haemoglobin is normal in pregnancy; at or below this threshold it is anaemia needing iron supplementation and follow-up.",
      },
      {
        topic: "Pregnancy Physiology",
        front: "How much does kidney filtration (GFR) rise in pregnancy, and what does it cause?",
        back: "About 50 percent — causing frequent urination and sometimes small, harmless amounts of glucose in urine.",
      },
      {
        topic: "Pregnancy Physiology",
        front: "What is supine hypotension, and how do you fix it?",
        back: "Faintness and low blood pressure when a heavily pregnant woman lies flat — the uterus compresses the inferior vena cava. Fix: left lateral tilt or a wedge/pillow under the right hip.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
        note: "Anaemia assessment and routine antenatal monitoring standards.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Maternal adaptations to pregnancy and clinical implications.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — pregnancy physiology chapter.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "anatomy-physiology-2",
    moduleTitle: "From Egg to Embryo",
    lessonTitle: "Fetal Development: A First Look at the Growing Baby",
    description:
      "From a speck to a newborn in forty weeks — the milestones, the trimesters, and the windows that make early antenatal care matter so much.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the three trimesters and the key developmental milestones of each.",
      "Explain why the embryonic period is the most vulnerable window for harmful exposures.",
      "Use fetal milestones such as quickening and fundal height in antenatal counselling.",
    ],
    tags: ["fetal development", "trimesters", "quickening", "fundal height", "organogenesis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Forty weeks, give or take, turn a speck smaller than a grain of rice into a newborn you will lift into a mother's arms. Along the way are milestones you can feel, hear and measure without any machine — and windows of vulnerability that explain why antenatal care cannot wait.\n\nThis lesson gives you the trimester-by-trimester story, so the baby's timeline and the mother's clinic card finally fit together.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Weeks 3 to 8 are the **embryonic period**, the age of organogenesis: the heart, brain, limbs, spine and every other organ are laid down. It is the most dangerous window for harm — alcohol, certain drugs, rubella and other teratogens do their worst damage precisely then. From week 9 the new life is called a fetus, and the work shifts from forming parts to growing and maturing them.\n\nThe trimesters tell the mother's version of the story. In the first (to about 13 weeks), organs finish forming and the heart begins beating around week 6 — a flicker visible on early ultrasound. In the second (14-27 weeks), growth accelerates and the mother feels the first movements, called quickening, usually between 16 and 20 weeks — a first-time mother tends to notice it closer to 18-20 weeks. In the third (28-40 weeks), the baby banks weight, the lungs mature with surfactant, and after about 37 weeks the baby is considered term.\n\nTwo bedside landmarks you will use constantly: the fundus at the umbilicus means roughly **20 weeks**, and the fundus at the pubic bone's upper edge about 12 weeks. Between them lies the whole clinical habit of dating and tracking a pregnancy — reason enough for WHO to recommend starting antenatal care early, in the first trimester.",
      },
      {
        type: "clinical_pearl",
        body: "When a woman books late, fundal height and quickening are your fallback clocks: movements first felt around 16-20 weeks, fundus at the umbilicus around 20 weeks, at the xiphoid around 36. Encourage every woman to register before the second trimester ends — dating is easiest early.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman registers for antenatal care at your district hospital around eight weeks pregnant. She looks anxious as she admits that before she suspected anything, she drank alcohol most weekends through weeks four to seven. Now she is worried the damage is already done, and asks you when the baby's organs were actually formed. What window do you explain — and how do you leave her?\n\nAnswer: You explain gently that weeks 3-8 are the period when organs are laid down, so the weeks she drank were within that window — but you refuse to predict doom, because exposure does not equal certainty of harm. You tell her the most protective step available starts today: no alcohol from now on, early registration, iron and folic acid, and honest follow-up so growth and anatomy can be monitored. She leaves supported and with a plan, not with a verdict.",
      },
      {
        type: "memory_trick",
        body: "Blueprint, Build, Bank weight: the first trimester draws the blueprint (organs form, weeks 3-8), the second builds (growth and quickening), and the third banks kilos and practises breathing. And fundus at the navel equals twenty weeks — one rhyme you will use for a career.",
      },
      {
        type: "summary",
        body: "- Weeks 3-8: the embryonic period of organogenesis — every organ laid down, the most vulnerable time for teratogens.\n- From week 9: the fetus — growth and maturation until birth.\n- The heart beats from about week 6; quickening arrives at 16-20 weeks, later for first-time mothers.\n- Fundal landmarks: pubic bone ~12 weeks, umbilicus ~20 weeks, xiphoid ~36 weeks.\n- Third trimester: weight gain and lung maturity (surfactant); term is from about 37 weeks; early ANC booking makes dating and protection possible.",
      },
    ],
    questions: [
      {
        topic: "Fetal Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In which weeks does organogenesis — the laying down of all major organs — mainly occur?",
        options: [
          "Weeks 1-2",
          "Weeks 3-8",
          "Weeks 20-28",
          "Weeks 32-40",
        ],
        correctIndex: 1,
        explanation:
          "The embryonic period, roughly weeks 3-8, forms every organ system — which is why this is the most dangerous window for infections, alcohol and harmful drugs. After week 9 the fetus grows and matures what is already formed.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Fetal Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A first-time mother asks when she should first feel her baby move. The most accurate answer is:",
        options: [
          "Between 12 and 14 weeks",
          "Between 16 and 20 weeks, often closer to 18-20 for a first baby",
          "Only after 28 weeks",
          "At the moment of quickening she will feel nothing",
        ],
        correctIndex: 1,
        explanation:
          "Quickening usually arrives between 16 and 20 weeks; women who have been pregnant before recognise the flutters earlier, first-time mothers often nearer 18-20 weeks. Absence of movements by 20-22 weeks deserves review.",
        courseSlug: "anatomy-physiology-2",
      },
      {
        topic: "Fetal Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The uterine fundus is palpated at the level of the umbilicus. The estimated gestational age is about:",
        options: [
          "12 weeks",
          "16 weeks",
          "20 weeks",
          "36 weeks",
        ],
        correctIndex: 2,
        explanation:
          "Around 20 weeks the fundus reaches the umbilicus — one of the most useful free dating tools you own. Twelve weeks puts it just above the pubic bone; 36 weeks brings it near the xiphoid process.",
        courseSlug: "anatomy-physiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Fetal Development",
        front: "What is organogenesis and when does it occur?",
        back: "The laying down of all major organ systems during the embryonic period, roughly weeks 3-8 — the most vulnerable window for teratogens like alcohol and rubella.",
      },
      {
        topic: "Fetal Development",
        front: "When is the new life called a fetus, and what changes then?",
        back: "From week 9. Formation is largely done; the focus shifts to growth and maturation — including lung maturation and surfactant in the third trimester.",
      },
      {
        topic: "Fetal Development",
        front: "What does the fundus at the umbilicus tell you, and at about how many weeks?",
        back: "Roughly 20 weeks of gestation — a bedside dating landmark requiring only your hands.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
        note: "Timing of first antenatal contact and fetal growth monitoring.",
      },
      {
        organization: "Elsevier",
        title: "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia)",
        year: "2020 (11th edition)",
        note: "Trimester staging and fetal milestones.",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Anatomy and Physiology 2e",
        year: "2022",
        url: "https://openstax.org/books/anatomy-and-physiology-2e",
        note: "Free, peer-reviewed textbook — development chapter.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Daily Care Fundamentals",
    lessonTitle: "Mobility and Positioning: Moving Patients Safely",
    description:
      "Safe moving and handling that protects your back and their dignity — technique before strength, always. The skill that keeps both of you whole.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Apply safe body mechanics when moving and repositioning patients.",
      "Match common bed positions — including left lateral — to the patient's clinical needs.",
      "Explain how early ambulation and regular repositioning prevent complications.",
    ],
    tags: ["mobility", "moving and handling", "positioning", "pressure injury", "ambulation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the kindest things you will ever do for a patient are done with your hands and your feet, not with any drug: helping her sit up, turning him comfortably, walking a fresh mother to the chair. Done well, these acts prevent clots, chest infections and pressure sores. Done carelessly, they wreck your back for life.\n\nThis lesson is about doing them properly — technique before strength, every single time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Before any move, assess and plan: can she move herself with a little coaching? Is the bed at your hip height, wheels locked, floor clear? Do you need a second pair of hands? Then protect your back with the golden rules: **base wide, load close, knees bent** — and turn your feet instead of twisting your spine. Push and pivot wherever possible; the strongest nurse is the one who never lifts what can be rolled or slid.\n\nPositioning has a clinical purpose beyond comfort. **Fowler's** (sitting upright) helps breathing and eating; **semi-Fowler's** eases reflux; **lateral** — for a pregnant woman, specifically left lateral — keeps the heavy uterus off the major veins; **Sim's** (half-prone) suits an unconscious or nauseated patient. For anyone confined to bed, reposition at least every two hours, float the heels off the mattress with a pillow, and check the skin over the sacrum and heels each time — pressure injuries form quietly in hours.\n\nAfter childbirth or surgery, mobility becomes medicine. Walking contracts the calf muscles — the body's second heart — pushing blood back and preventing clots; deep breaths clear the lungs; movement wakes the bowel. That first walk is a treatment, and it is yours to deliver.",
      },
      {
        type: "clinical_pearl",
        body: "You have one back for your whole career. Base wide, load close, knees bent, feet turning instead of twisting — and ask for help before your back discovers you needed it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is evening on a postnatal ward, and a woman who had a caesarean that morning is due for her first walk. She is nervous, holding her wound, and her drip stand stands between her and the door. Before anything else, you sit her upright on the edge of the bed and wait, watching her face as the bed's support leaves her. What must you check in that moment — and why does this early walk matter so much?\n\nAnswer: Sitting her up first lets you watch for dizziness, pallor or faintness before she stands — the safest possible start, with you beside her and the drip pole in her hand rather than in the way. Then you walk slowly with her for a short distance. The walk matters because it is treatment: her calf muscles pump blood upward and prevent clots, her lungs open up and clear secretions, her bowel wakes, and her confidence returns with every step. Tomorrow's longer walk begins with tonight's safe one.",
      },
      {
        type: "memory_trick",
        body: "Say it like a drum: base wide, load close, nose over toes. Wide stance, object hugged to your body, and your nose staying over your toes so the legs steer while the spine stays straight.",
      },
      {
        type: "summary",
        body: "- Assess and plan before every move: bed height, brakes, what she can do herself, and whether you need help.\n- Body mechanics: base wide, load close, knees bent, turn feet not spine — push and roll instead of lifting.\n- Position with purpose: Fowler's for breathing and eating, left lateral for pregnancy, Sim's for the unconscious or nauseated.\n- Reposition bed-bound patients at least every two hours; float the heels and check sacral skin each time.\n- Early ambulation is treatment: calf pump, lung expansion, bowel wake-up — never skip the first walk.",
      },
    ],
    questions: [
      {
        topic: "Moving and Handling",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You need to move a patient up in bed. Which set of actions reflects safe body mechanics?",
        options: [
          "Feet together, back bent, pulling from high above the head",
          "Feet apart, knees bent, patient close to your body, turning your feet rather than twisting your back",
          "Twisting quickly toward the direction of movement for momentum",
          "Holding your breath and lifting with straight locked knees",
        ],
        correctIndex: 1,
        explanation:
          "A wide base lowers your centre of gravity, bent knees let your legs — the strongest muscles — do the work, keeping the load close shortens the lever on your spine, and moving your feet prevents twisting. The other options all load the spine directly.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Pressure Injury Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should a bed-bound patient be repositioned at least every two hours?",
        options: [
          "To keep the nursing schedule tidy and consistent",
          "To relieve pressure over bony points like the sacrum and heels before tissue is starved of blood",
          "Because lying still causes the blood pressure to fall dangerously",
          "To help the patient sleep more deeply",
        ],
        correctIndex: 1,
        explanation:
          "Sustained pressure over bony prominences cuts off local blood supply, and tissue damage begins within hours. Regular repositioning — with heels floated and skin checked each time — is the heart of pressure injury prevention.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Ambulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before helping a post-caesarean woman take her first walk, what is the safest first step?",
        options: [
          "Walk her immediately to build strength quickly",
          "Sit her upright on the edge of the bed and watch for dizziness before standing",
          "Keep her in bed until the drip is removed the next day",
          "Ask her to stand alone while you fetch a wheelchair",
        ],
        correctIndex: 1,
        explanation:
          "Sitting her up first lets orthostatic changes reveal themselves while she can still be safely lowered back — you watch for pallor, dizziness or faintness with the bed directly behind her. Standing straight from lying invites a fall; the first walk starts from sitting, with you at her side.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Moving and Handling",
        front: "What are the golden rules of safe lifting?",
        back: "Base wide, load close, knees bent — and turn your feet instead of twisting your spine. Push and roll instead of lifting, and ask for help early.",
      },
      {
        topic: "Positioning",
        front: "Why left lateral for a pregnant or postnatal woman lying down?",
        back: "It lifts the heavy uterus off the inferior vena cava, keeping blood returning to the heart — the prevention and treatment for supine hypotension.",
      },
      {
        topic: "Ambulation",
        front: "Give three reasons early ambulation after surgery or childbirth is medicine.",
        back: "The calf muscle pump prevents clots, deep breaths expand the lungs and prevent chest infection, and movement wakes the bowel — plus each step rebuilds the patient's confidence.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501958",
        note: "Patient safety foundations including falls and safe care.",
      },
      {
        organization: "EPUAP / NPIAP / PPPIA",
        title: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline",
        year: "2019",
        url: "https://epuap.com",
        note: "Repositioning and heel-offloading recommendations.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021",
        note: "Moving, handling and positioning technique.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Daily Care Fundamentals",
    lessonTitle: "Nutrition Basics for Patient Care",
    description:
      "Why eating and drinking are clinical concerns — supporting appetite, diets and swallowing safely. Food is part of the treatment plan, not a side issue.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main nutrient groups and their roles in healing and health.",
      "Support patients safely with feeding, hydration and intake monitoring.",
      "Recognise swallowing danger signs and respond appropriately before aspiration occurs.",
    ],
    tags: ["nutrition", "hydration", "swallowing", "patient feeding", "diet"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On a ward, a meal tray is clinical information and a drinking glass is a treatment — or a hazard. Patients who eat and drink well heal faster, fight infection better and go home sooner; patients who aspirate a cup of water can develop a fatal chest infection.\n\nThis lesson covers the nutrition basics you need at the bedside: what the body needs, how to support eating and drinking with dignity, and how to spot a swallow that is no longer safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The nutrients come in groups you can teach in a breath. Carbohydrates — kenkey, banku, rice, yam — are the main fuel at 4 kilocalories per gram; proteins — fish, beans, eggs, groundnut soup — repair tissue and build antibodies, also 4 per gram; fats carry the most energy at 9 per gram and form every cell membrane. Vitamins and minerals work in tiny amounts: iron builds blood, vitamin C heals wounds and aids iron absorption, folate builds the nervous system. And water above all — an adult needs roughly 30-35 millilitres per kilogram daily, more in fever or heat.\n\nYour bedside job has three parts. First, watch intake: record what she actually ate and drank, not what was served — a full untouched plate is data. Second, help with dignity: sit her upright, allow time, offer small amounts, and let her do whatever she can herself. Third, guard the swallow. Coughing or a wet, gurgly voice with every sip, food pocketing in the cheek, or drooling means the swallow is unsafe — stop oral food and fluids, keep her upright, and refer for a swallowing assessment before the next cup.\n\nPregnancy raises the bar: she needs extra protein and iron-rich foods plus the daily iron and folate supplements of antenatal care. Pair iron-rich meals with vitamin C — orange, pawpaw, fresh pepper — and keep tea away from mealtimes, because it blocks iron absorption.",
      },
      {
        type: "clinical_pearl",
        body: "A full plate left untouched is data, not laziness. Ask why — pain, nausea, appetite, money or fear — chart it, and act on it. And never leave a coughing swallower alone with a cup of water.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 68-year-old woman recovering from a stroke is on your district hospital ward, her right side weak. At breakfast you offer her water and she coughs twice with each sip, her voice turning wet and gurgly. A visiting relative, meaning well, picks up the cup to encourage her to 'drink small small' and finish it. What must you do right now — and what happens next for this woman's fluids?\n\nAnswer: You stop oral fluids at once and gently explain that the coughing means water is heading toward her lungs — this is kindness, not cruelty. Keep her sitting fully upright, keep her mouth clean and moist, inform the nurse in charge, and document what you saw; she now needs a formal swallowing assessment before anything else goes in by mouth, with fluids given by another route on the clinician's plan.",
      },
      {
        type: "memory_trick",
        body: "Build the Plate Clock at every meal: starch at 12 o'clock, protein at 4, and let kontomire and garden eggs fill the rest of the dial — with a glass of water or fresh orange on the side. A clock face is easy to picture, and every plate you serve becomes a quick revision.",
      },
      {
        type: "summary",
        body: "- Carbohydrates fuel (4 kcal/g), proteins repair (4 kcal/g), fats carry the most energy (9 kcal/g), and vitamins and minerals work in small, vital amounts.\n- Hydration is clinical: roughly 30-35 mL/kg daily for an adult, more in fever or heat — and intake must be charted, not assumed.\n- Chart what was actually eaten, sit patients upright to eat, allow time, and preserve dignity.\n- Coughing, wet voice, pocketing or drooling = unsafe swallow: stop oral intake, sit upright, refer — never coax another sip.\n- In pregnancy: iron-rich foods plus daily iron and folate; pair iron with vitamin C, keep tea away from meals.",
      },
    ],
    questions: [
      {
        topic: "Nutrition Basics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which nutrient group provides the most energy per gram?",
        options: [
          "Carbohydrates",
          "Proteins",
          "Fats",
          "Vitamins",
        ],
        correctIndex: 2,
        explanation:
          "Fat supplies about 9 kcal per gram, more than double the 4 kcal per gram of carbohydrates and proteins. Vitamins provide no energy at all — they enable the reactions that release it.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Swallowing Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient coughs with every sip of water and her voice sounds wet afterwards. What is the correct response?",
        options: [
          "Give smaller, more frequent sips to build her strength",
          "Thicken the water a little and continue slowly",
          "Stop oral fluids, keep her upright, and refer for a swallowing assessment",
          "Give the fluids through a straw to bypass the cough",
        ],
        correctIndex: 2,
        explanation:
          "Coughing and a wet voice signal aspiration risk — fluid is entering the airway. The safe response is to stop oral intake, keep her upright to protect the airway, and request a swallowing assessment before the next oral intake. Every other option keeps sending water toward the lungs.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Nutrition in Pregnancy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which drink best supports iron absorption when taken with an iron-rich meal?",
        options: [
          "Tea with the meal",
          "Fresh orange juice",
          "Coffee immediately after the meal",
          "Cold water only",
        ],
        correctIndex: 1,
        explanation:
          "Vitamin C converts dietary iron into a form the gut absorbs far more easily — fresh orange, pawpaw or juice with the meal helps. Tea and coffee contain substances that block iron absorption, so they should sit an hour away from iron-rich meals.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Nutrition Basics",
        front: "How many kilocalories per gram do carbohydrates, proteins and fats each provide?",
        back: "Carbohydrates 4, proteins 4, fats 9. Fat is the most energy-dense — which is why small oily portions go far.",
      },
      {
        topic: "Patient Feeding",
        front: "Why do we record what the patient actually ate and drank rather than what was served?",
        back: "Intake charts are clinical data — a full untouched plate signals pain, nausea, appetite loss, cost or fear. You cannot act on a need you never noticed.",
      },
      {
        topic: "Swallowing Safety",
        front: "Name three bedside signs of an unsafe swallow.",
        back: "Coughing or choking with sips, a wet or gurgly voice after drinking, and food pocketing in the cheek or drooling — stop oral intake, sit upright, refer.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Healthy Diet — Fact Sheet",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
        note: "Population-level guidance on macronutrients and food groups.",
      },
      {
        organization: "Ghana Ministry of Health / FAO",
        title: "Ghana Food-Based Dietary Guidelines",
        year: "2023",
        note: "National guidance using local foods and portions.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nutrition and Nursing Care",
        year: "2021",
        note: "Feeding assistance and intake monitoring.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Daily Care Fundamentals",
    lessonTitle: "Elimination: Supporting Dignified Care",
    description:
      "Urination and defecation are the most private events on your ward — caring well takes both respect and sharp clinical eyes. Dignity and safety together.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Support urination and defecation with privacy, safety and respect for dignity.",
      "Recognise and act on postnatal bladder concerns and common elimination problems.",
      "Apply safe catheter care principles that prevent infection.",
    ],
    tags: ["elimination", "bladder care", "catheter care", "dignity", "constipation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "No one wants to discuss passing urine or stool in public — which is exactly why it falls to you, professionally and warmly, to make it safe and dignified. A woman who is embarrassed will not tell you she has not passed urine since delivery, and that silence can cost her a haemorrhage.\n\nIn this lesson you will learn how normal elimination works, what goes wrong most often on the ward, and how to care for both bladder and bowel without stealing anyone's dignity.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An adult passes roughly one to two litres of urine a day, voiding every three to four hours while awake. After birth, watch the bladder like a hawk: sensation is blunted, and a filling bladder can go unnoticed — while a **full bladder lifts and tilts the uterus so it cannot contract**, inviting postpartum haemorrhage. Support her to pass urine within about six hours of delivery, and palpate for a full bladder if she has not.\n\nWhen a catheter is clinically needed, disciplined care decides whether it heals or harms: sterile insertion for a clear indication, the closed system kept closed, the bag below bladder level but never on the floor, and removal as soon as possible — every extra day raises infection risk. Watch for burning, frequency, urgency, cloudiness or foul odour; in the elderly, a urine infection can even show up as new confusion.\n\nThe bowels tell their own story. Constipation rules the ward: progesterone relaxes the gut in pregnancy, iron tablets harden stool, immobility slows everything, and fear of pain over fresh stitches makes women hold on. Answer with fluids, fibre — kontomire, fruits, whole grains — early walking, and prescribed stool softeners, charting the stool so trends stay visible. Haemorrhoids in pregnancy add pain and sometimes fresh bright bleeding with hard stool — comfort measures help, but report and document bleeding anyway.",
      },
      {
        type: "clinical_pearl",
        body: "Privacy is clinical care, not politeness. Knock, pull the curtain, offer a warm bedpan, wipe front to back, leave the call bell within reach and wash your hands — a woman treated with dignity will tell you the truth about her bladder and bowel.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two hours after a straightforward vaginal delivery on your postnatal ward, you do your routine check and find the fundus soft and two finger-breadths above the umbilicus, with a round bulge appearing above the pubic bone. She has not passed urine since delivery and says she does not feel any urge. Your classmate suggests charting it and waiting for the doctor's rounds. What do you suspect — and what is your first action?\n\nAnswer: You suspect a full bladder holding the uterus up so it cannot clamp — the soft fundus and suprapubic bulge say so, and haemorrhage is the danger if nothing changes. First, help her empty the bladder herself: walk her to the toilet if steady, give privacy, run the tap or trickle warm water over the perineum, then recheck — the fundus should firm and drop toward the umbilicus. If she cannot void within about six hours, inform the senior nurse; catheterisation per protocol follows.",
      },
      {
        type: "memory_trick",
        body: "Empty bladder, firm fundus — say it like a proverb. A full bladder is the uterus's worst roommate: it pushes the uterus up and out of its clamping job. Send the roommate out, and the clamp comes back.",
      },
      {
        type: "summary",
        body: "- Support the first postnatal void within about six hours; a full bladder displaces the uterus and can trigger postpartum haemorrhage.\n- Catheter care: sterile insertion only when indicated, keep the system closed, bag below bladder level and off the floor, remove as soon as possible.\n- Urinary infection signals: burning, frequency, urgency, cloudy or foul urine — and new confusion in an elderly patient.\n- Fight constipation with fluids, fibre, early walking and prescribed softeners; chart stools to make trends visible.\n- Dignity is the treatment's twin: curtain, warm bedpan, front-to-back wiping, call bell in reach, and always wash your hands.",
      },
    ],
    questions: [
      {
        topic: "Elimination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which set of actions best shows dignified elimination care?",
        options: [
          "Placing the bedpan quickly and leaving the curtain open so you can watch her",
          "Knocking, pulling the curtain, offering a warm bedpan, wiping front to back and leaving the call bell in reach",
          "Asking the whole room to listen while she reports her bowel pattern",
          "Skipping hand hygiene since you only touched the bedpan edge",
        ],
        correctIndex: 1,
        explanation:
          "Knocking, covering, warming, wiping front to back, and keeping the call bell within reach all preserve dignity and safety together — and hand hygiene always follows every elimination care, because the bedpan edge is still a contaminated surface.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Postnatal Bladder Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two hours after vaginal delivery, a woman has a soft fundus above the umbilicus, a suprapubic bulge and no urge to void. What is your first action?",
        options: [
          "Chart it and wait for the doctor's rounds",
          "Give a strong dose of intravenous fluids to provoke urine",
          "Help her to the toilet with privacy and warm water over the perineum to help her void, then reassess the fundus",
          "Catheterise her immediately without trying other measures",
        ],
        correctIndex: 2,
        explanation:
          "The picture fits a full bladder preventing uterine contraction — the first move is to help her empty it naturally: ambulation, privacy, running water, warm perineal trickle. Catheterisation is reserved for failure to void within about six hours or per protocol, and the fundus is always reassessed after the bladder empties.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Catheter Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Where should a urinary catheter drainage bag hang?",
        options: [
          "On the bed rail above the patient for easy reading",
          "Below bladder level, kept off the floor",
          "On the floor beside the bed where it is stable",
          "Clamped off at all times to measure output later",
        ],
        correctIndex: 1,
        explanation:
          "Below bladder level keeps urine draining out by gravity so it cannot flow back; off the floor keeps it clear of contamination. Above the bladder invites backflow, the floor breeds organisms, and routine clamping risks over-distension.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Bladder Care",
        front: "Why must a postnatal woman empty her bladder early?",
        back: "A full bladder lifts and tilts the uterus, preventing it from contracting firmly — a classic setup for postpartum haemorrhage. Support voiding within about six hours of birth.",
      },
      {
        topic: "Catheter Care",
        front: "Give three rules of safe catheter care.",
        back: "Keep the closed drainage system closed, hang the bag below bladder level and off the floor, and remove the catheter as soon as it is no longer needed — every extra day raises infection risk.",
      },
      {
        topic: "Elimination",
        front: "Why do we wipe women from front to back after elimination care?",
        back: "The female urethra is short and sits close to the anus; wiping backward keeps gut organisms away from it and helps prevent urinary tract infections.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        year: "2020 (17th edition)",
        note: "Postnatal bladder care and immediate postpartum monitoring.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        year: "2021",
        note: "Elimination assessment, catheter care and dignity.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
        note: "Hand hygiene and aseptic technique for catheter care.",
      },
    ],
  },
];
