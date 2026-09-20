// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch C (Puerperium + Reproductive Health)
// 17 lessons anchored to prisma/seed-data/anchors/y3s1-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "The First Six Weeks",
    lessonTitle: "Uterine Involution: Watching the Womb Return",
    description:
      "The uterus has done nine months of growing — now watch it shrink. Day by day, the fundus tells you whether the puerperium is going well or quietly going wrong.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the normal timeline of uterine involution from birth to six weeks.",
      "Explain how to assess involution at the bedside and what afterpains mean.",
      "Apply fundal findings to recognise subinvolution and respond appropriately.",
    ],
    tags: ["involution", "uterus", "postnatal assessment", "puerperium"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Birth ends the pregnancy, not the midwife's watchfulness. Over the next six weeks the uterus shrinks from an organ of about one kilogram back to a tidy pear of roughly 60 grams. This shrinking is called **involution**, and its pace is one of the most useful vital signs of the puerperium.\n\nYou will chart the fundus every day on the postnatal ward and at every postnatal contact. A uterus descending on schedule is healing. A uterus that lags behind is trying to tell you something — usually retained products, infection, or simply a bladder in the way.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Immediately after delivery the fundus sits at about the level of the umbilicus. From there it descends roughly one centimetre — about one fingerbreadth — each day, so by day 10 to 12 it slips behind the symphysis pubis and can no longer be felt abdominally. Inside, muscle fibres break down and the placental site heals, until by six weeks the organ weighs 60 to 70 grams and rests back in the pelvis.\n\nMultiparas may feel crampy **afterpains** for the first two to three days, strongest during feeds, because suckling releases oxytocin and squeezes the uterus. That pain is healthy, not alarming. What is alarming is **subinvolution**: a fundus high for the day, soft or boggy, with heavy lochia. Ask first when she last passed urine — a full bladder lifts and tilts the uterus — then massage the uterus firm and think retained products or endometritis.",
      },
      {
        type: "clinical_pearl",
        body: "Always palpate the fundus after she empties her bladder. A full bladder pushes a perfectly well uterus up and to the side, making a good uterus look like a bad one — and sending you chasing a problem that is not there.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Amina delivered her fourth baby two days ago at your district hospital. At evening rounds you find the fundus three fingerbreadths above the umbilicus and soft, and her lochia is heavier than at the morning check. She has not passed urine since morning and winces each time the baby feeds.\n\nWhat is your sequence of assessments before you worry about retained products?\n\nAnswer: First send her to pass urine — or catheterise if she cannot void — and re-examine, because a full bladder with breastfeeding afterpains can explain a raised, tender fundus in a multipara. If the fundus remains high after emptying the bladder, massage until firm, check the colour, smell and clot content of the lochia, take her pulse and temperature, and arrange review for possible retained products or early endometritis. Document what you found and reassess within the hour.",
      },
      {
        type: "memory_trick",
        body: "Chant One-U-Ten-Sixty: at day ONE the fundus is at the umbilicus, it drops about one centimetre a day, by day TEN it hides behind the pubic bone, and by six weeks it is SIXTY grams. A uterus with a timetable — and if the timetable slips, ask why.",
      },
      {
        type: "summary",
        body: "- Involution: the uterus falls from about 1 kg to 60-70 g within six weeks.\n- Day 1 fundus at the umbilicus, descending about 1 cm per day, impalpable by day 10-12.\n- Afterpains during feeds are oxytocin at work — normal, and commonest in multiparas.\n- Subinvolution (high, boggy fundus, heavy lochia): check the bladder first, then retained products or infection.",
      },
    ],
    questions: [
      {
        topic: "Uterine Involution",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Immediately after a normal vaginal delivery, where should you expect to palpate the fundus?",
        options: [
          "Two fingerbreadths above the umbilicus",
          "At about the level of the umbilicus",
          "Just below the symphysis pubis",
          "Midway between the umbilicus and the symphysis",
        ],
        correctIndex: 1,
        explanation:
          "Right after delivery the fundus sits at roughly the level of the umbilicus, then descends about a centimetre a day. Far above the umbilicus suggests a full bladder, distension or subinvolution.",
        courseSlug: "puerperium",
      },
      {
        topic: "Uterine Involution",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 6 after an uncomplicated birth you palpate the fundus midway between the umbilicus and the symphysis pubis. What is your interpretation?",
        options: [
          "Normal involution — the uterus is descending on schedule",
          "Subinvolution — arrange review for retained products now",
          "A sign the uterus has ruptured — prepare for theatre",
          "Proof that she is pregnant again",
        ],
        correctIndex: 0,
        explanation:
          "Descending about a centimetre a day from the umbilicus puts the fundus roughly five to six centimetres down by day 5-6 — midway to the symphysis. This is a uterus keeping its timetable, not lagging behind it.",
        courseSlug: "puerperium",
      },
      {
        topic: "Uterine Involution",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these is NOT a cause of subinvolution?",
        options: [
          "Retained placental fragments",
          "Endometritis",
          "A uterus over-distended by twins or fibroids",
          "Exclusive breastfeeding on demand",
        ],
        correctIndex: 3,
        explanation:
          "Breastfeeding releases oxytocin, which actively helps the uterus contract and involute. Retained products, infection and over-distension all delay involution.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Uterine Involution",
        front: "Where is the fundus on day 1, and by when can it no longer be felt?",
        back: "At about the level of the umbilicus on day 1; it descends roughly 1 cm per day and becomes impalpable behind the symphysis pubis by day 10-12.",
      },
      {
        topic: "Uterine Involution",
        front: "Why do multiparas get afterpains, and when are they strongest?",
        back: "Oxytocin released during suckling contracts the uterus. The pains are strongest in the first 2-3 days and worse in multiparas, whose uterus has more work to shrink.",
      },
      {
        topic: "Uterine Involution",
        front: "Name three causes of subinvolution — and the one thing to exclude first.",
        back: "Retained products of conception, endometritis, and an over-distended uterus (twins, polyhydramnios, fibroids). Always first exclude a full bladder lifting the fundus.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "Elsevier",
        title: "Myles' Midwifery (17th edition)",
        note: "Educational source — verify current edition against your course texts.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify the current edition with your district",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "The First Six Weeks",
    lessonTitle: "Lochia: What's Normal and What's Not",
    description:
      "The postnatal discharge is a healing wound speaking in colour. Learn its three normal shades and the changes that mean come back now.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the three stages of lochia and their usual timing.",
      "Explain the difference between normal lochial variation and warning signs.",
      "Apply the pad rule to decide when postnatal bleeding needs urgent review.",
    ],
    tags: ["lochia", "bleeding", "puerperium", "postnatal assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "After the placenta is born, the raw placental site on the uterine wall must heal — and like any wound, it discharges as it repairs. That discharge is **lochia**, and for four to six weeks it will be part of almost every postnatal conversation you have.\n\nLochia follows a colour calendar: red, then pink-brown, then creamy-white. Learn the calendar well and you can often tell from the doorway whether a mother is healing or heading for trouble.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Lochia rubra** is the red, blood-rich flow of the first three to four days, containing decidua and small clots. **Lochia serosa** follows from about day 4 to 10 — pinkish-brown and thinner as the discharge shifts from blood to serum. From about day 10 onwards, **lochia alba** takes over: pale, yellowish-white, mostly cells and mucus. Flow may last three to six weeks, often with a brief reddish echo around week two as the placental site finishes healing. Flow commonly increases with activity and briefly during feeds, because oxytocin squeezes the uterus.\n\nThe warning signs sit outside the calendar: an **offensive smell** (the classic red flag for genital tract sepsis), large clots, bright red flooding that returns after the serosa stage, or soaking a pad in an hour. Any of these means the mother should be seen the same day — do not wait for her six-week visit.",
      },
      {
        type: "clinical_pearl",
        body: "If the smell of the lochia reaches you at the doorway, you already have your working diagnosis — treat as puerperal sepsis until excluded. The nose is a legitimate assessment tool in the puerperium.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Adjoa gave birth at home eight days ago and attends your CHPS compound for a routine check. She says the bleeding is less than before — one pad lasts the day — but she mentions the discharge smells bad, and you note her temperature is 37.9 degrees and she looks tired.\n\nIs this normal serosa, and what should you do?\n\nAnswer: The reduced volume fits lochia serosa, but the offensive smell with low-grade fever is not normal — this is suspected puerperal sepsis until proven otherwise. Take a full set of observations, examine the uterus for tenderness and size, and start management per your sepsis protocol and national guidelines, arranging referral for antibiotics. Also review perineal hygiene, ask about any retained pieces she may have noted, and document your findings and the plan.",
      },
      {
        type: "memory_trick",
        body: "Remember the wound's diary: Rubra = Red and raw (first days), Serosa = Soil-coloured and serous (the healing middle), Alba = Almond-cream and almost done. The wound bleeds, weeps, then dries — and if it smells, it is infected.",
      },
      {
        type: "summary",
        body: "- Lochia rubra (red) days 1-4, serosa (pink-brown) days 4-10, alba (creamy) from about day 10.\n- Normal duration is up to four to six weeks; flow may increase with activity or feeds.\n- Offensive smell is the red flag for puerperal sepsis; clots and flooding are not normal.\n- Soaking one pad in an hour, or bright red bleeding returning after the pink-brown stage, means same-day review.",
      },
    ],
    questions: [
      {
        topic: "Lochia",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother on day 12 asks whether her pale, yellowish-white discharge is normal. What is this called?",
        options: [
          "Lochia rubra",
          "The show",
          "Lochia alba",
          "Lochia serosa",
        ],
        correctIndex: 2,
        explanation:
          "From about day 10 the discharge turns pale and creamy — lochia alba, the final stage of the healing wound. Rubra is red, serosa is pink-brown, and the show is the blood-stained mucous plug of labour onset.",
        courseSlug: "puerperium",
      },
      {
        topic: "Lochia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following lochial findings in a well day-6 mother can be considered NORMAL?",
        options: [
          "Flow briefly increasing during a breastfeed",
          "Flow lasting until week five",
          "A constant offensive smell",
          "Passing clots the size of a fist",
        ],
        correctIndex: 0,
        explanation:
          "Oxytocin released with suckling contracts the uterus, so a brief rise in flow during feeds is expected. Flow to six weeks is possible, but fist-sized clots and offensive smell never are — those demand same-day review.",
        courseSlug: "puerperium",
      },
      {
        topic: "Lochia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 10 a mother suddenly soaks a pad in an hour and passes bright red blood with clots after four days of pink-brown flow. What is the most likely explanation?",
        options: [
          "Normal transition to lochia alba",
          "Secondary postpartum haemorrhage, most often from retained products",
          "Mastitis",
          "The return of her first period",
        ],
        correctIndex: 1,
        explanation:
          "Bleeding that becomes heavy and bright red after the flow had settled points to secondary postpartum haemorrhage, commonly from retained placental tissue or endometritis. She needs assessment the same day — menses does not return this early, and mastitis does not bleed.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Lochia",
        front: "Name the three stages of lochia with their timing.",
        back: "Rubra (red) days 1-4; serosa (pink-brown, thinner) days 4-10; alba (creamy-white) from about day 10. Total duration up to 4-6 weeks.",
      },
      {
        topic: "Lochia",
        front: "Which single lochial feature most strongly suggests puerperal sepsis?",
        back: "An offensive, foul smell — often with fever and uterine tenderness. Treat as genital tract infection until excluded.",
      },
      {
        topic: "Lochia",
        front: "What is the pad rule for postnatal bleeding?",
        back: "Soaking one pad in an hour (or passing large clots) is abnormal at any time in the puerperium and needs same-day assessment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors (2nd edition)",
        year: "2017",
      },
      {
        organization: "Elsevier",
        title: "Myles' Midwifery (17th edition)",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "The First Six Weeks",
    lessonTitle: "Maternal Assessment in the Postnatal Period",
    description:
      "The postnatal check is more than a quick smile and a pulse. Learn the WHO contact schedule and the systematic assessment that catches trouble early.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the WHO-recommended schedule of postnatal contacts for the mother.",
      "Explain the components of a systematic maternal postnatal assessment.",
      "Apply assessment findings to decide when a mother needs referral or treatment.",
    ],
    tags: ["postnatal assessment", "routine", "puerperium", "who contacts"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most maternal deaths linked to birth happen in the days and weeks after it — which is why the postnatal period demands structured follow-up, not good wishes. WHO recommends a series of postnatal contacts rather than a single six-week check, and each contact is your chance to catch a quiet disaster early.\n\nThis lesson gives you the contact schedule and a systematic way to assess the recovering mother, whether you meet her on the ward, at a CHPS compound or under a tree at an outreach clinic.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "WHO 2022 guidance recommends contact within 24 hours of birth for every mother and baby, a second at 48-72 hours, a third between days 7 and 14, and a fourth at six weeks — with an additional contact between three and four weeks advisable where possible. After caesarean or complications, observation in facility continues longer before discharge.\n\nAt every contact work head-to-toe with hands and questions: temperature, pulse and **blood pressure** (eclampsia can still develop after discharge); the uterus in the early days — height and firmness; lochia — colour, amount, smell; the perineum or caesarean wound; breasts and feeding; urination and any burning; legs for tenderness and swelling; and always the **mind** — ask simply how her mood and sleep have been. End with the practical: iron and folate continuation, family planning plans, and danger signs she should act on. One calm, complete assessment beats five hurried ones.",
      },
      {
        type: "clinical_pearl",
        body: "The commonest error is skipping the blood pressure after day two — eclampsia does not respect the discharge date. A woman with a severe headache, blurred vision or a raised BP at any postnatal contact is a referral, not a reassurance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Efua attends her six-week postnatal visit at your clinic feeling generally well. She mentions a dull headache for two days that panadol has not settled. Her BP is 160/100 and she has trace protein on dipstick.\n\nWhat is happening, and what do you do?\n\nAnswer: This is postpartum pre-eclampsia — the disease can present new, or persist, up to six weeks after birth, and 160/100 with headache needs action, not a follow-up appointment. Assess her fully, keep her calm and seated, arrange urgent medical review for antihypertensive treatment and magnesium sulphate assessment per protocol, and counsel her about convulsion danger signs for herself and her family while transfer is arranged.",
      },
      {
        type: "memory_trick",
        body: "Remember the contact rhythm as 1-3-10-42: within 1 day, day 3 (48-72 hours), around day 10 (7-14), and week 6 (42 days) — with a bonus visit at weeks 3-4 when you can. And examine every mother OBS-FIRST: Observations, Breasts, Wound, Flow, Legs, and Mood.",
      },
      {
        type: "summary",
        body: "- WHO postnatal contacts: within 24 hours, at 48-72 hours, days 7-14, and six weeks (plus 3-4 weeks if possible).\n- At each contact: observations including BP, uterus and lochia in early days, perineum or wound, breasts, urine, legs and mood.\n- Pre-eclampsia can appear or persist up to six weeks postpartum — never skip the BP.\n- Close every contact with iron and folate, family planning plans and danger-sign counselling.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set best describes the WHO-recommended postnatal contact schedule after an uncomplicated birth?",
        options: [
          "Within 24 hours, at 48-72 hours, between days 7-14, and at six weeks",
          "Only at six weeks, since complications are rare by then",
          "Daily for six weeks at the facility",
          "At 48 hours and then only if the mother reports problems",
        ],
        correctIndex: 0,
        explanation:
          "WHO 2022 recommends four core contacts — day 1, 48-72 hours, days 7-14, and six weeks — with an extra contact at 3-4 weeks advisable. Risk does not end at discharge, so a single six-week check is too late alone.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which combination belongs in EVERY maternal postnatal assessment?",
        options: [
          "Weight, height and BMI only",
          "Ultrasound scan of the uterus",
          "Blood pressure, lochia, perineum or wound, and mood",
          "Chest X-ray",
        ],
        correctIndex: 2,
        explanation:
          "BP catches late pre-eclampsia, lochia and the wound catch sepsis and bleeding, and asking about mood catches the blues or depression. Routine imaging and X-rays have no place in an uncomplicated postnatal check.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a six-week postnatal visit a mother has BP 160/100, headache and trace proteinuria. What is the correct action?",
        options: [
          "Reassure — pre-eclampsia cannot occur after six weeks of birth",
          "Give paracetamol and review in one month",
          "Recheck her haemoglobin for anaemia",
          "Treat as postpartum pre-eclampsia and arrange urgent medical review",
        ],
        correctIndex: 3,
        explanation:
          "Pre-eclampsia can persist or newly present up to six weeks after birth. Severe-range BP with symptoms and proteinuria needs urgent treatment and review — possibly magnesium sulphate and antihypertensives — not reassurance or a month's wait.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Assessment",
        front: "List the four core WHO postnatal contact times.",
        back: "Within 24 hours of birth; 48-72 hours; days 7-14; and six weeks — with an additional contact at 3-4 weeks advisable.",
      },
      {
        topic: "Postnatal Assessment",
        front: "Why must the blood pressure be taken at every postnatal contact?",
        back: "Pre-eclampsia and eclampsia can persist or appear for the first time up to six weeks after birth — even after an uncomplicated delivery.",
      },
      {
        topic: "Postnatal Assessment",
        front: "Name six body systems you cover in one maternal postnatal check.",
        back: "Observations (temp, pulse, BP), uterus and lochia, perineum or caesarean wound, breasts and feeding, urinary symptoms and legs — and never forget the mood.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify the current edition with your district",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Feeding and Recovery",
    lessonTitle: "Breastfeeding: The First Days",
    description:
      "The first week decides whether breastfeeding succeeds or quietly fails. Positioning, attachment and knowing what normal looks like — your hands-on guide.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the steps for early breastfeeding initiation after birth.",
      "Explain the signs of good attachment and effective milk transfer.",
      "Apply knowledge of normal feeding patterns to reassure and to detect problems needing help.",
    ],
    tags: ["breastfeeding", "feeding", "lactation", "newborn feeding"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Breastfeeding is natural, but it is also a skill two people learn together — and the first days decide the journey. When a mother and baby get positioning and attachment right early, milk comes in, nipples stay whole and confidence grows. When they get it wrong, pain and doubt follow, and in Ghana families quickly reach for the feeding bottle.\n\nYour job in those first days is hands-on: observe a feed, correct the latch, and give the mother honest expectations of what normal newborn feeding looks like.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the golden hour: dry the baby, place him skin-to-skin on the mother's chest and support the first feed **within one hour** of birth. The first milk, colostrum, is small in volume and perfect in content — never dirty water to be discarded. Feed on demand, typically 8-12 times in 24 hours. Good **attachment** shows a wide-open mouth, chin touching the breast, lower lip rolled outward, and more areola seen above the mouth than below — and no pain beyond the first seconds.\n\nHow do you know milk is transferring? Rhythmic suck-swallow cycles with audible swallows, breasts softening after feeds, a settled baby, and the output count: from day 5, six or more heavy wet nappies daily and stools turned yellow, with the baby regaining birth weight by about two weeks. Common early troubles: engorgement on day 3-4 (both breasts swollen and warm — keep feeding, it passes), sore nipples (an attachment problem — re-latch), and a red, painful wedge of breast with fever, which may be mastitis and needs review while feeding continues.",
      },
      {
        type: "clinical_pearl",
        body: "If feeding hurts beyond the first few seconds, the attachment is wrong — break the suction with a clean little finger and start again. A well-attached baby trains the nipple; a poorly attached one damages it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is day 3 and Akua is in tears: her milk has not come, the baby cries constantly, and her mother-in-law has already sent for formula. On examination the baby latches shallowly with cheeks pulled in, and you hear clicking.\n\nWhat is actually going on, and what do you do?\n\nAnswer: This is most often a positioning and attachment problem, not failing milk — clicking and drawn cheeks signal poor latch, and poor drainage then delays the milk coming in fully. Sit her comfortably, reposition nose-to-nipple with baby held chest-to-chest, wait for the wide gape and bring the baby on deeply. Then track the real milk markers over the next day: swallowed sounds, six-plus wet nappies by day 5, and yellow stools. Involve the mother-in-law kindly — families support what they understand.",
      },
      {
        type: "memory_trick",
        body: "Teach every mother the rhyme: Nose to nipple, tummy to mummy, chin to breast — and check that ear, shoulder and hip lie in one straight line. If it looks like a photo pose, the latch is usually right.",
      },
      {
        type: "summary",
        body: "- First feed within one hour of birth, skin-to-skin; colostrum is liquid gold, not dirt.\n- Good attachment: wide gape, chin touching, lip rolled out, more areola above than below, no lasting pain.\n- Milk transfer shows in swallows, softening breasts, six-plus heavy wet nappies daily from day 5 and yellow stools.\n- Engorgement: keep feeding; sore nipples: re-latch; red painful breast with fever: suspect mastitis and refer.",
      },
    ],
    questions: [
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When should the first breastfeed ideally take place?",
        options: [
          "After the baby is bathed and dressed",
          "Only after the milk has come in on day 3 or 4",
          "Any time in the first 24 hours — timing does not matter",
          "Within one hour of birth, skin-to-skin with the mother",
        ],
        correctIndex: 3,
        explanation:
          "Early skin-to-skin contact with a feed within the first hour takes advantage of the baby's alert period, warms and stabilises her, and suckling triggers oxytocin that helps the uterus and the milk. Waiting for day 3 wastes colostrum and the alert hour.",
        courseSlug: "puerperium",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation suggests GOOD attachment at the breast?",
        options: [
          "Cheeks drawn inwards with each suck",
          "A clicking sound during feeding",
          "Chin pressed to the breast with the lower lip rolled outward",
          "Only the nipple taken into the mouth",
        ],
        correctIndex: 2,
        explanation:
          "A deep latch shows the chin touching the breast, lips flanged outward and more areola covered above the mouth than below. Drawn cheeks, clicking and nipple-only latching are all classic signs of shallow, damaging attachment.",
        courseSlug: "puerperium",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A day-4 mother reports both breasts swollen, shiny and tender since morning, with no fever. What is the best first advice?",
        options: [
          "Keep feeding frequently — the swelling is engorgement and will settle with drainage",
          "Stop breastfeeding for 24 hours to rest the breasts",
          "Discard the milk until the swelling reduces",
          "Start antibiotics immediately for mastitis",
        ],
        correctIndex: 0,
        explanation:
          "Bilateral swelling without fever in the first days is engorgement from milk coming in — frequent, effective feeding plus gentle warm compresses drains it. Stopping feeds makes it worse. Mastitis is usually one segment, with fever and flu-like illness.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Breastfeeding",
        front: "Recite the positioning rhyme and the straight-line check.",
        back: "Nose to nipple, tummy to mummy, chin to breast — with ear, shoulder and hip in a straight line; baby held close, head free to tilt back and gape.",
      },
      {
        topic: "Breastfeeding",
        front: "How do you confirm effective milk transfer by day 5?",
        back: "Audible swallows, breasts softening after feeds, six or more heavy wet nappies per 24 hours, yellow stools, and a baby regaining birth weight by about two weeks.",
      },
      {
        topic: "Breastfeeding",
        front: "Engorgement vs mastitis — the one-line difference?",
        back: "Engorgement: both breasts, diffuse swelling, no fever — keep feeding. Mastitis: one red, hot, painful wedge with fever and flu-like illness — keep feeding AND seek treatment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Breastfeeding fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/breastfeeding",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "Elsevier",
        title: "Myles' Midwifery (17th edition)",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Feeding and Recovery",
    lessonTitle: "Maternal Nutrition After Birth",
    description:
      "Healing a mother and feeding a baby both draw from the same plate. What the recovering body needs — served the Ghanaian way.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the extra nutritional needs of the lactating and recovering mother.",
      "Explain how to build a nourishing postnatal plate from everyday Ghanaian foods.",
      "Apply counselling skills to address food taboos and support postpartum recovery.",
    ],
    tags: ["nutrition", "recovery", "lactation", "postnatal diet"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "After birth a mother is doing two jobs at once: rebuilding her own blood, tissues and strength, and manufacturing roughly three-quarters of a litre of milk a day. Both jobs are paid in food — and when the diet is thin, her recovery slows and her milk may dwindle.\n\nThe good news is that a nourishing postnatal diet needs no imported foods. The Ghanaian market already holds everything her body is asking for; your job is to help her choose it and defend that choice against taboos.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "While exclusively breastfeeding, a mother needs roughly **500 extra kilocalories a day** — the famous eating-for-two, arriving after the birth rather than before it. Build the plate around protein for repair: fish, eggs, beans, groundnuts and a little meat with the swallow, plus dark green leaves like kontomire and ayoyo for iron and vitamins. Pair iron foods with vitamin C — garden eggs, tomato, orange, or a squeeze of citrus — and keep strong tea and heavy cocoa drinks away from mealtimes, because their tannins cut iron absorption.\n\nFluid matters too: milk is mostly water, so the simple rule is a drink at every feed, aiming for around two litres or more daily. She should continue **iron and folic acid for about three months** after birth in settings where anaemia is common, per WHO guidance, to rebuild the blood she spent. Gentle weight loss through breastfeeding is fine; crash dieting while feeding is not. And when elders bar foods, counsel with respect — see the case below.",
      },
      {
        type: "clinical_pearl",
        body: "The thirsty-feeling at every feed is her body's natural drinking reminder — hand her the water before she asks. A mother with a filled water bottle beside the bed feeds better than one relying on visitors.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Yaa, four days after a caesarean at your district hospital, is eating mainly plain kenkey. Her mother has told her that fish, eggs and pepper soup will poison the baby through the milk. She is pale and her lochia is slow to settle.\n\nHow do you counsel without turning the family against the hospital?\n\nAnswer: You feed the family, not just the facts — invite the mother into the discussion and lead with respect for her care, then reframe the foods as the medicine Yaa needs: fish and eggs to rebuild blood and tissue, greens and vitamin C for iron, plenty of fluids for milk. Link the teaching to something the elder values, like the traditional fish soups new mothers in their own community once received, and ask Yaa to tell back one food she will add. Enlist the ward's senior midwife if the taboo holds.",
      },
      {
        type: "memory_trick",
        body: "Double the relish, not the swallow: her plate grows by adding more soup, fish, beans, eggs and greens to the side of the usual portion. Remember POST: Protein for repair, Oily-fish? no — simply Iron with vitamin C, Sip at every feed, Taboos handled with respect.",
      },
      {
        type: "summary",
        body: "- Exclusive breastfeeding needs about 500 extra kcal daily — eat for two after birth, not just before.\n- Repair plate: fish, eggs, beans and groundnuts with greens; pair iron foods with vitamin C, keep tea away from meals.\n- Drink at every feed — around two litres plus per day; milk is mostly water.\n- Continue iron and folic acid for about three months postpartum; handle food taboos with respectful family counselling.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Nutrition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Approximately how much extra energy does a mother need each day while exclusively breastfeeding?",
        options: [
          "None — breastfeeding uses stored fat only",
          "About 100 kcal",
          "About 250 kcal",
          "About 500 kcal",
        ],
        correctIndex: 3,
        explanation:
          "Milk production costs roughly 500 kcal a day on top of her normal needs — partly met by pregnancy fat stores, but a real increase in food is still needed, especially where diets are already marginal.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Yaa takes her iron tablet with a strong cup of tea at breakfast. What should you advise?",
        options: [
          "Carry on — tea has no effect on iron",
          "Take the iron with a citrus fruit or juice instead, and keep tea away from that meal",
          "Stop the iron tablets completely",
          "Double the iron dose to overcome the tea",
        ],
        correctIndex: 1,
        explanation:
          "Tannins in tea bind iron and cut absorption. Pairing iron with vitamin C — orange, pineapple or a squeeze of citrus — does the opposite. Changing the company the tablet keeps is the fix; stopping or doubling it is not.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Nutrition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "For how long should a postnatal mother continue daily iron and folic acid in a setting where anaemia is common?",
        options: [
          "One week",
          "Only during her hospital stay",
          "About three months",
          "Two years, without review",
        ],
        correctIndex: 2,
        explanation:
          "WHO advises continuing iron and folic acid supplementation for about three months after birth in anaemia-affected settings, allowing the mother to rebuild blood lost in pregnancy and delivery.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Nutrition",
        front: "How many extra kilocalories does exclusive breastfeeding demand daily?",
        back: "About 500 kcal per day — met by a bigger relish of protein and greens rather than a bigger mound of swallow.",
      },
      {
        topic: "Postnatal Nutrition",
        front: "Give the fluid rule for a breastfeeding mother.",
        back: "A drink at every feed — at least around two litres a day; thirst at feeds is the body's built-in reminder.",
      },
      {
        topic: "Postnatal Nutrition",
        front: "What should accompany iron-rich foods, and what should stay away?",
        back: "Accompany with vitamin C (citrus, tomato, garden eggs) to boost absorption; keep strong tea and cocoa drinks away from iron meals — tannins block uptake.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Guideline: daily iron and folic acid supplementation in postpartum women",
        year: "2012",
        note: "Check for the latest update.",
      },
      {
        organization: "Ministry of Health Ghana / FAO",
        title: "Ghana Food-Based Dietary Guidelines",
        year: "2023",
      },
      {
        organization: "Elsevier",
        title: "Myles' Midwifery (17th edition)",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Feeding and Recovery",
    lessonTitle: "Postnatal Education for the New Mother",
    description:
      "What she carries home matters as much as what you did at the birth. Danger signs, baby care and teaching that sticks — discharge education done properly.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core content of discharge education for mother and newborn.",
      "Explain how to teach so families actually remember and act.",
      "Apply the teach-back method to confirm understanding before discharge.",
    ],
    tags: ["postnatal education", "discharge", "danger signs", "newborn care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The mother leaves your ward after a day or two, but the puerperium runs six weeks. Everything that keeps her and her baby safe in that time — danger signs, feeding, cord care, sleeping, the next visit — depends on what you taught before she walked out of the gate.\n\nDischarge education is not a leaflet handed at the door. It is a short, structured conversation with the mother and whoever will actually care for her, checked with teach-back so you know the teaching landed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Cover five things every time. **Mother's danger signs**: heavy bleeding (soaking a pad in an hour), fever, severe headache or blurred vision, offensive lochia, calf pain or breathlessness, and low mood that will not lift. **Baby's danger signs**: poor feeding, fast breathing of 60 or more per minute at rest, chest in-drawing, fever or a cold body, yellow palms and soles, few wet nappies, or an umbilicus that is red or discharging pus. **Cord care**: keep it clean and dry, apply nothing from home, and follow the national chlorhexidine policy where your facility uses it. **Sleep and feeding**: baby sleeps on the back, feeds 8-12 times a day, alone on a firm surface. **Follow-up**: the postnatal contact schedule, immunisation dates on the card, and when the six-week mother-and-baby check happens.\n\nThen close the loop with **teach-back**: never ask do you understand? — instead ask her to tell you, in her own words, the signs that would send her straight back to the clinic. Involve the grandmother or husband who will decide at midnight, and give the messages to both of them.",
      },
      {
        type: "clinical_pearl",
        body: "Ask one question before discharge: What will make you come straight back to the clinic? Her answer tells you instantly whether your teaching survived the ward round or died in translation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are discharging Abena and her healthy term baby. Her mother-in-law, who will care for them both at home, has arrived early and taken charge of packing. Abena speaks English well; her mother-in-law only Twi.\n\nHow do you deliver discharge education that actually protects this pair?\n\nAnswer: Invite the mother-in-law into the teaching session — the midnight decision-maker must hear the danger signs in Twi, not receive them second-hand. Teach the mother's and baby's red flags in plain language, demonstrate cord care and safe sleeping, and use teach-back with both women. Finish with the return dates and where to go — nearest CHPS compound or facility — and note on the discharge summary who received the teaching and what was understood.",
      },
      {
        type: "memory_trick",
        body: "Send every mother home with the 5 Bs and the blues: Bleeding, Burning fever, Blinding headache, Bad-smelling flow, Breathlessness — plus a mood that stays low. For the baby remember FAST-B: Feeding poorly, Fast breathing (60 or more), baby feels hot or cold, and yellow Baby palms.",
      },
      {
        type: "summary",
        body: "- Discharge education covers mother's danger signs, baby's danger signs, cord care, feeding and sleep, and the return schedule.\n- Mother's red flags: bleeding, fever, headache or vision change, offensive lochia, calf pain or breathlessness, low mood.\n- Baby's red flags include breathing 60 or more per minute at rest, chest in-drawing, poor feeding and an infected cord.\n- Confirm teaching with teach-back, and always teach the person who will decide at midnight — in her own language.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grandmother asks how to know a newborn is breathing too fast. What number do you teach as the danger threshold at rest?",
        options: [
          "More than 30 breaths per minute",
          "More than 45 breaths per minute",
          "60 breaths per minute or more",
          "80, but only while crying",
        ],
        correctIndex: 2,
        explanation:
          "Fast breathing — 60 or more per minute when calm and not crying — is a key newborn danger sign, usually counted for a full minute. Normal newborn rates sit between about 40 and 60; counting during crying or feeding gives false readings.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Education",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which practice for umbilical cord care should be discouraged at discharge?",
        options: [
          "Washing hands before touching the cord",
          "Keeping the cord clean and dry",
          "Applying herbs, powder or other home substances to the stump",
          "Bringing the baby back if the cord becomes red or leaks pus",
        ],
        correctIndex: 2,
        explanation:
          "Home applications to the cord — herbs, ashes, powders, shea and the like — introduce the bacteria that cause cord infection and tetanus. Clean, dry care (plus chlorhexidine where national policy uses it) is the safe message.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postnatal Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the teach-back method?",
        options: [
          "Asking the client to repeat your instructions in her own words",
          "Repeating your instructions twice, louder the second time",
          "Handing over a well-written leaflet",
          "Asking do you understand? and recording yes",
        ],
        correctIndex: 0,
        explanation:
          "Teach-back asks the mother to explain the plan in her own words, which tests the teaching rather than her politeness. Nodding at a leaflet or a loud repeat tells you nothing about what will happen at 3 am.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Education",
        front: "List the mother's postnatal danger signs — the 5 Bs and the blues.",
        back: "Bleeding (a pad an hour), Burning fever, Blinding headache or vision change, Bad-smelling lochia, Breathlessness or calf pain — and a low mood that will not lift.",
      },
      {
        topic: "Postnatal Education",
        front: "At what breathing rate does a calm newborn need same-day assessment?",
        back: "60 breaths per minute or more when resting — count for a full minute, ideally when the baby is calm and not feeding.",
      },
      {
        topic: "Postnatal Education",
        front: "What is the one discharge question that tests all your teaching?",
        back: "What will make you come straight back to the clinic? — her spoken answer is the teach-back that tells you whether the danger signs landed.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice (3rd edition)",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "Newborn and Child Health Standards (national newborn care strategy)",
        note: "Verify the current edition and chlorhexidine policy with your district",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Mind, Family and Warning Signs",
    lessonTitle: "Family Planning After Birth",
    description:
      "Her fertility can return before her first period ever does. Spacing babies wisely starts with knowing the postpartum rules.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe when fertility typically returns after birth, including the lactation amenorrhoea rules.",
      "Explain which contraceptive methods suit breastfeeding mothers and when each can start.",
      "Apply counselling principles to help a postpartum mother plan her birth spacing.",
    ],
    tags: ["family planning", "contraception", "postpartum", "lam"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A mother leaves the delivery bed with two recoveries ahead of her: her body and her family plans. Space the next pregnancy at least about two years after a live birth, as WHO advises, and the next baby is more likely to be born at term, at weight, and to a mother who is not depleted.\n\nThe trap is timing: many families wait for the first period before thinking about family planning, and the first ovulation slips out before it. Your postpartum counselling is the fence around that gap.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Ovulation commonly returns by four to six weeks after birth — **before the first menses** — so a breastfeeding mother can conceive while still amenorrhoeic. The exception with rules is **LAM**, the lactation amenorrhoea method: over 98 percent effective while the baby is under six months, exclusively breastfeeding day and night, and her menses have not returned. Miss any one criterion and she needs another method.\n\nFor breastfeeding mothers the progestin-only family suits best: the progestogen-only pill and implants can start soon after birth without harming milk, and DMPA fits too. The copper IUD can be inserted within the first 48 hours postpartum or, if that window is missed, from about four weeks. **Oestrogen-containing methods** — the combined pill, patch — wait until at least six weeks and ideally until feeding is well established, because oestrogen can reduce milk supply. Condoms work any time and add infection protection. Every postnatal contact, including the six-week visit, is a family planning moment.",
      },
      {
        type: "clinical_pearl",
        body: "The first period is a late signal, not the starting gun — ovulation arrives first. Offer family planning before discharge, not after the menses returns; by then the fence may already be down.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Comfort, at her six-week check, is exclusively breastfeeding a thriving baby, has had no bleeding since week three, and tells you she and her husband want at least three years before the next child. Her sister warned her that family planning methods spoil the milk.\n\nWhich options can you offer her today, and what do you say about the milk worry?\n\nAnswer: LAM still technically protects her, but with three years of spacing in mind she should layer a modern method now — a progestin-only option such as the implant or progestogen-only pill, or a copper IUD, all milk-friendly and long-acting enough for her plan. Explain that oestrogen-containing methods are the ones to delay while feeding, which is why they are not the first choice for her. Screen her for any contraindications per the medical eligibility criteria, let her choose, and book the insertion.",
      },
      {
        type: "memory_trick",
        body: "Estrogen waits six weeks; progestin plays today. Picture the breastfeeding breast as progestin-friendly territory with a six-week KEEP-OUT sign for oestrogen — and remember LAM's three-part key: baby under six months, feeds exclusive, menses absent.",
      },
      {
        type: "summary",
        body: "- Ovulation can return four to six weeks after birth — before the first period, even while breastfeeding.\n- LAM works while all three hold: under six months, exclusive feeding, no menses — above 98 percent effective.\n- Progestin-only pills, implants and DMPA suit breastfeeding; copper IUD within 48 hours or from four weeks.\n- Oestrogen-containing methods wait at least six weeks; WHO advises about two years of spacing after a live birth.",
      },
    ],
    questions: [
      {
        topic: "Family Planning After Birth",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is NOT a criterion for reliable LAM use?",
        options: [
          "The baby is exclusively breastfeeding day and night",
          "The baby is under six months old",
          "The mother's menses have not returned",
          "The baby has passed six months but still feeds often",
        ],
        correctIndex: 3,
        explanation:
          "LAM needs all three criteria: exclusive feeding, baby under six months, and amenorrhoea. Once the sixth month passes, fertility can return regardless of how frequent the feeding still is — time to add another method.",
        courseSlug: "puerperium",
      },
      {
        topic: "Family Planning After Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should a postpartum mother not wait for her first period before starting contraception?",
        options: [
          "Periods stop fertility permanently after birth",
          "Ovulation can return before the first menses, so she can conceive without ever bleeding",
          "Breastfeeding blocks all conception for a full year",
          "The uterus needs a period to heal before methods work",
        ],
        correctIndex: 1,
        explanation:
          "The first ovulation commonly precedes the first period — often around four to six weeks postpartum — so waiting for menses to appear leaves an open window, particularly in a partially breastfeeding mother.",
        courseSlug: "puerperium",
      },
      {
        topic: "Family Planning After Birth",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother is four weeks postpartum and fully breastfeeding. She asks for the combined oral contraceptive pill today. What is your best counselling?",
        options: [
          "It is the ideal method for her right now",
          "A progestin-only method is better now — oestrogen should wait at least six weeks, as it may reduce her milk",
          "No hormonal method is ever safe in breastfeeding",
          "She must wean the baby before any contraception",
        ],
        correctIndex: 1,
        explanation:
          "Oestrogen can suppress milk production, so combined methods are delayed until at least six weeks — ideally until feeding is established — while progestin-only pills, implants and injectables are compatible with breastfeeding from early on.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Family Planning After Birth",
        front: "State the three LAM criteria.",
        back: "Exclusive breastfeeding day and night, baby under six months, and no return of menses — all three must hold for LAM's over 98 percent protection.",
      },
      {
        topic: "Family Planning After Birth",
        front: "Which hormonal methods can a breastfeeding mother start soon after birth, and which must wait?",
        back: "Progestin-only methods (pill, implant, injectable) can start soon; oestrogen-containing combined methods wait at least six weeks and until feeding is established, because oestrogen may reduce milk.",
      },
      {
        topic: "Family Planning After Birth",
        front: "What spacing interval does WHO advise after a live birth, and why?",
        back: "About two years — it allows the mother to rebuild iron and health, and reduces prematurity, low birth weight and maternal depletion in the next pregnancy.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Family planning/contraception fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Medical eligibility criteria for contraceptive use (5th edition)",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Family Planning Guidelines and Service Standards",
        note: "Verify the current edition with your district",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Mind, Family and Warning Signs",
    lessonTitle: "Emotional Wellbeing and the Baby Blues",
    description:
      "Tears on day four can be normal; tears at week four with hopelessness are not. Learn where the blues end and illness begins.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe baby blues and their usual course after birth.",
      "Explain the differences between baby blues, postpartum depression and puerperal psychosis.",
      "Apply simple screening questions and actions to protect a mother's mental health.",
    ],
    tags: ["mental health", "blues", "depression", "puerperium"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The puerperium moves the mind as surely as the uterus. In the first days a mother's hormones fall off a cliff, her sleep shatters, and tearfulness arrives so often we gave it a name: the baby blues. For most women this passes by itself in days.\n\nBut some tears are the edge of something deeper. Your skill is telling the passing storm from the one that will not clear — depression after birth is common, treatable, and tragically missed where every mother is expected to smile.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Baby blues** visit up to 80 percent of mothers, typically on day three to five: sudden tears, irritability, feeling overwhelmed, up one hour and down the next. It fades within about two weeks and needs no treatment — sleep, food, kindness and reassurance. **Postpartum depression** affects roughly one in ten mothers, beginning within weeks and lasting beyond two weeks: low mood most of the day, loss of enjoyment, guilt, poor function, sometimes thoughts that the baby or family would be better off without her. It needs treatment and follow-up, and risk rises with past depression, poor support, an unplanned pregnancy or a sick baby.\n\n**Puerperal psychosis** is rare — one to two mothers in a thousand — but is an emergency: confusion, strange beliefs, rapid mood swings, usually starting within the first two weeks. Ask two gentle questions at every contact: How has your mood really been, and who helps you at night? Tools like the Edinburgh Postnatal Depression Scale can guide referral where available. Involve family with her consent — never judgement — and treat any talk of harm to herself or the baby as a same-day referral, never left alone.",
      },
      {
        type: "clinical_pearl",
        body: "Sleep protects the postnatal mind. A mother who has not slept more than three-hour stretches for weeks is not weak when she crumbles — one protected night, taken by a trusted relative, is sometimes the most therapeutic thing your team can arrange.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two mothers attend your clinic. Maame, day 5 postpartum, cries when visitors leave and laughs with the baby an hour later. Serwaa, four weeks postpartum, has stopped going to market, says the baby would be better off with another mother, and has eaten little for days.\n\nWhich one reassures you, and what do you do for the other?\n\nAnswer: Maame's pattern — day 5, tearful spells that come and go, intact function — is classic baby blues; support, protect sleep and reassure with a review date. Serwaa's picture crosses every line: four weeks of low mood, loss of function, appetite loss and a statement that the baby would be better off without her. That is postpartum depression with possible thoughts of harm — never leave her alone with the baby, arrange same-day mental health or medical referral, and involve a supportive family member with her consent.",
      },
      {
        type: "memory_trick",
        body: "Sort them by the 3 B's and the 3 D's: Blues are Brief, come on day 3-ish and Benign — sleep and kindness suffice. Depression is Deep, lasts Daily beyond two weeks, and Disabling. And psychosis? Different planet entirely — delirium-like changes mean emergency referral today.",
      },
      {
        type: "summary",
        body: "- Baby blues: up to 80 percent of mothers, days 3-5, settles within about two weeks — support, sleep, reassurance.\n- Postpartum depression: about 1 in 10, mood low beyond two weeks with poor function — needs treatment and follow-up.\n- Puerperal psychosis: rare but an emergency — confusion, delusions, rapid changes within the first two weeks; refer same-day.\n- Any talk of harm to mother or baby means never leave her alone and refer immediately.",
      },
    ],
    questions: [
      {
        topic: "Emotional Wellbeing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When do baby blues characteristically appear, and how long do they last?",
        options: [
          "Days 3-5 after birth, resolving within about two weeks",
          "Only in the third month after birth",
          "From the day of birth until weaning",
          "Only after caesarean births",
        ],
        correctIndex: 0,
        explanation:
          "The hormonal crash of day three to five brings tearfulness and mood swings to most mothers, settling without treatment within about two weeks. Persistence beyond that raises the question of depression.",
        courseSlug: "puerperium",
      },
      {
        topic: "Emotional Wellbeing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement from a postnatal mother must trigger urgent same-day mental health referral?",
        options: [
          "I cry whenever the visitors leave",
          "I am so tired every evening",
          "I worry I am not a good mother yet",
          "The baby would be better off without me",
        ],
        correctIndex: 3,
        explanation:
          "A statement that the baby would be better off without her suggests thoughts of self-harm or infant harm in postpartum depression — an immediate referral, with the mother never left alone in the meantime. The other statements fit the blues and normal adjustment.",
        courseSlug: "puerperium",
      },
      {
        topic: "Emotional Wellbeing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother two weeks postpartum is confused, not sleeping at all, and says voices are telling her the baby is not hers. What is your action?",
        options: [
          "Reassure the family it is the baby blues",
          "Advise more rest and review at six weeks",
          "This is puerperal psychosis — urgent same-day referral, never leaving her alone with the baby",
          "Start her on iron tablets for fatigue",
        ],
        correctIndex: 2,
        explanation:
          "Confusion, delusions and total insomnia within the first two weeks point to puerperal psychosis — a psychiatric emergency needing urgent referral, protection of mother and baby, and immediate care, not reassurance or a six-week wait.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Emotional Wellbeing",
        front: "What are baby blues, and how common are they?",
        back: "Tearfulness, irritability and feeling overwhelmed on days 3-5 after birth, affecting up to 80 percent of mothers — self-limiting within about two weeks.",
      },
      {
        topic: "Emotional Wellbeing",
        front: "Give two features that separate postpartum depression from the blues.",
        back: "Depression lasts beyond two weeks and disables daily function — plus possible thoughts of hopelessness or harm; the blues are brief with mood that still lifts between spells.",
      },
      {
        topic: "Emotional Wellbeing",
        front: "Name the emergency among postnatal mood disorders and its hallmark features.",
        back: "Puerperal psychosis — 1-2 per 1000 mothers, within the first two weeks: confusion, delusions, hallucinations, profound insomnia; refer same-day and never leave mother and baby alone.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Depression fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations on maternal and newborn care for a positive postnatal experience",
        year: "2022",
      },
      {
        organization: "Elsevier",
        title: "Myles' Midwifery (17th edition)",
        note: "Educational source — verify current edition against your course texts.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Mind, Family and Warning Signs",
    lessonTitle: "Postpartum Danger Signs",
    description:
      "Haemorrhage, sepsis, eclampsia and clots can all arrive after the happy discharge. The symptoms that mean now — and what you do.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the maternal danger signs in the postpartum period and their urgency.",
      "Explain the link between each danger sign and its underlying emergency.",
      "Apply first-response actions for a postpartum woman presenting with danger signs.",
    ],
    tags: ["danger signs", "postpartum", "puerperium", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most postpartum danger does not shout — it whispers. A headache dismissed as tiredness, a fever blamed on malaria, a heavy flow excused because the baby feeds often. Behind those whispers stand the great postpartum killers: haemorrhage, sepsis, pre-eclampsia and thromboembolism.\n\nThis lesson is the loud version: the signs that mean come now, which emergency each one signals, and your first moves when a mother arrives with them at the CHPS compound at midnight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Bleeding**: soaking one pad in an hour, large clots, or bright red flooding returning after the flow had settled — postpartum haemorrhage, primary or secondary; keep her lying, empty the bladder, rub the uterus firm, call for help and transfer. **Fever and offensive lochia**: 38 degrees or more, a bad-smelling flow, tender uterus — puerperal sepsis until proven otherwise. **Severe headache, blurred vision, upper abdominal pain or convulsion**: postpartum pre-eclampsia or eclampsia — possible up to six weeks after birth, commonest in the first 48 hours; keep her left lateral, give nothing by mouth if drowsy, and treat per the magnesium sulphate protocol while arranging referral.\n\n**Calf pain or swelling, or sudden breathlessness with chest pain**: possible deep vein thrombosis or pulmonary embolism — an emergency after long trips, caesarean births and immobility. **A red, hot, painful breast with flu-like illness**: mastitis or abscess. And a mother who talks of harming herself: an emergency of the mind. At discharge, teach this list to whoever will be awake with her at night.",
      },
      {
        type: "clinical_pearl",
        body: "Any convulsion after birth is eclampsia until proven otherwise: airway open, left lateral position, nothing forced into her mouth, magnesium sulphate per protocol, and urgent referral with a call ahead. Timed from the start, not from the arrival.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman nine days postpartum is carried into your CHPS compound. Since morning she has had a pounding headache and blurred vision; her sister now reports she briefly stiffened on the way. BP is 158/104 and she has proteinuria. There is no transport of her own.\n\nWhat is your sequence of actions?\n\nAnswer: This is late postpartum pre-eclampsia proceeding toward eclampsia. Position her left lateral with the airway clear, nothing in the mouth if she fits again, secure IV access and give magnesium sulphate per protocol if available at your level, run the pre-referral checklist including a treatment note, and activate your emergency referral plan — call the receiving hospital ahead and organise transport through the community or district ambulance arrangements. Document times: onset, arrival, treatment and departure.",
      },
      {
        type: "memory_trick",
        body: "Drum the come-now list into every family: BLEEDING, BURNING (fever), BLINDING headache or blurred vision, BAD-smelling flow, BREATHLESS or swollen calf — and the quiet one, a mother who has stopped hoping. Six Bs, one heartbeat each.",
      },
      {
        type: "summary",
        body: "- Bleeding: one pad an hour, clots or returned flooding = postpartum haemorrhage — lie her down, firm the uterus, transfer.\n- Fever with offensive lochia or tender uterus = puerperal sepsis until excluded.\n- Headache, vision change, convulsion: eclampsia risk up to six weeks — left lateral, MgSO4 per protocol, urgent referral.\n- Calf pain or sudden breathlessness suggests thrombosis — treat as emergency; teach the list to the family before discharge.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Danger Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother phones the CHPS compound: since noon she has soaked one pad every hour. What do you advise?",
        options: [
          "This is a danger sign — she must be brought to the facility now",
          "This is normal lochia — review at the six-week visit",
          "Reduce fluids and rest, then review tomorrow",
          "Continue breastfeeding more often and monitor at home",
        ],
        correctIndex: 0,
        explanation:
          "Soaking one pad in an hour signals postpartum haemorrhage — at any point in the puerperium. She needs assessment the same hour, not tomorrow: lie her down and arrange urgent transport while the family calls ahead.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postpartum Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 9 after a normal birth a mother reports severe headache and blurred vision, no fever. What is the first thing to treat this as?",
        options: [
          "Normal postnatal tiredness — advise rest",
          "Migraine — give simple analgesia at home",
          "Malaria — test and treat as an outpatient",
          "Postpartum pre-eclampsia — assess and refer urgently today",
        ],
        correctIndex: 3,
        explanation:
          "Severe headache with visual disturbance after birth points to postpartum pre-eclampsia until excluded — check the BP and refer urgently. Dismissing it as tiredness, migraine or malaria is how late eclampsia deaths happen.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postpartum Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two weeks after a caesarean and a long tro-tro journey, a mother develops sudden breathlessness and chest pain. What does this signal?",
        options: [
          "Possible pulmonary embolism — an absolute emergency requiring immediate transfer",
          "Anaemia from the operation — start oral iron",
          "Simple exhaustion — she needs a week of bed rest at home",
          "Early asthma — give a salbutamol inhaler and review next week",
        ],
        correctIndex: 0,
        explanation:
          "Sudden breathlessness with chest pain after recent surgery, travel or immobility is a pulmonary embolism until excluded — a leading cause of late maternal death. She needs emergency transfer and oxygen on the way; bed rest, iron or inhalers gamble with her life.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Danger Signs",
        front: "State the pad rule for postpartum bleeding.",
        back: "Soaking one pad in an hour — with or without clots — is abnormal bleeding at any time in the puerperium and means come now.",
      },
      {
        topic: "Postpartum Danger Signs",
        front: "Until when can postpartum eclampsia occur?",
        back: "Up to six weeks after birth, though risk is highest in the first 48 hours — headache, vision change or convulsion after delivery is eclampsia until excluded.",
      },
      {
        topic: "Postpartum Danger Signs",
        front: "What postpartum signs point to venous thromboembolism?",
        back: "Unilateral calf pain or swelling, and sudden breathlessness or chest pain — especially after caesarean, immobility or long journeys. Emergency transfer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for midwives and doctors (2nd edition)",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "Maternal mortality fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality",
        note: "Check for the latest update.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify the current edition with your district",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "puerperium",
    moduleTitle: "Mind, Family and Warning Signs",
    lessonTitle: "Postpartum Complications",
    description:
      "Sepsis, secondary haemorrhage and clots — the three complications that turn a good puerperium bad, and the first response each demands.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe puerperal sepsis, secondary postpartum haemorrhage and thromboembolism.",
      "Explain the first-response management of each complication at your level of care.",
      "Apply preventive measures for postpartum complications within facility and community settings.",
    ],
    tags: ["complications", "puerperium", "sepsis", "postpartum haemorrhage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The puerperium is usually kind, but three complications account for most of its danger: infection of the genital tract, bleeding that returns after the baby, and clots in the legs and lungs. All three reward the same two virtues — early recognition and fast action.\n\nThis lesson walks through each one: how it presents, what you do first at your level, and how you prevent it in the mothers you care for from today.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Puerperal sepsis** is infection of the genital tract any time from rupture of membranes or labour up to the 42nd day after birth. Its commonest face is endometritis — fever from about day 2-3 (later after home births), a tender, soft uterus and offensive lochia, commoner after caesarean and prolonged labour. It is an emergency, not a fever to observe: assess vital signs including respiratory rate, start antibiotics early per national guidelines, give fluids, and refer — sepsis can slide into septic shock within hours.\n\n**Secondary postpartum haemorrhage** is abnormal bleeding after the first 24 hours up to six weeks, most often from retained placental tissue or infection. Manage it like the emergency it can become: resuscitate, rub the uterus and give uterotonics, and arrange referral for possible evacuation. **Thromboembolism** risk rises after caesarean, immobility and dehydration; prevent it with early walking, leg exercises, hydration and graduated compression stockings where indicated — and treat calf pain or breathlessness as embolism until excluded. Mastitis and wound infection complete the everyday list.",
      },
      {
        type: "clinical_pearl",
        body: "Fever after day one is never just malaria until you have examined the uterus, the urine, the breasts and the wound. Postpartum women collect several infections at once, and the commonest charting error is treating the first cause you think of while the real one waits.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman delivered at home six days ago and arrives at your CHPS compound with fever of 38.6 degrees, foul-smelling lochia and a tender uterus just above the symphysis. She is breastfeeding, alert, and her respiratory rate is 26 per minute.\n\nWhat is your diagnosis and your first actions?\n\nAnswer: This is puerperal sepsis, most likely endometritis, following a home birth — and her respiratory rate of 26 already signals systemic illness. Take a full set of observations, secure IV access, start fluids and the first dose of antibiotics per your national protocol without delay, check for retained products and anaemia, and arrange urgent referral to the district hospital with a clear treatment note. Do not send her home for observation — and do not blame her for the home birth on the way out.",
      },
      {
        type: "memory_trick",
        body: "Work up every postpartum fever through the five wells: Womb (endometritis), Water (urinary infection), Wound (perineal or caesarean site), the Milk machine (mastitis) — and Malaria in the blood. Examine all five before you choose your treatment, and the fever rarely outsmarts you.",
      },
      {
        type: "summary",
        body: "- Puerperal sepsis: genital tract infection up to day 42 — fever, tender uterus, offensive lochia; early antibiotics and referral save lives.\n- Secondary postpartum haemorrhage: bleeding after 24 hours to six weeks, usually retained products or infection — resuscitate and refer.\n- Thromboembolism risk follows caesarean, immobility and dehydration — early ambulation, fluids and leg exercises prevent it.\n- Examine all five wells before labelling any postpartum fever: womb, urine, wound, breast and malaria.",
      },
    ],
    questions: [
      {
        topic: "Postpartum Complications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother on day 6 has fever 38.6 degrees, foul-smelling lochia and uterine tenderness. What is the most likely diagnosis?",
        options: [
          "Mastitis",
          "Malaria without another focus",
          "Puerperal sepsis, most likely endometritis",
          "Simple urinary tract infection",
        ],
        correctIndex: 2,
        explanation:
          "Fever plus offensive lochia plus a tender uterus is the classic triad of endometritis, the face of puerperal sepsis. Mastitis centres on a red painful breast, malaria lacks the lochial smell, and cystitis brings dysuria without uterine tenderness.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postpartum Complications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the most common cause of secondary postpartum haemorrhage (bleeding after the first 24 hours)?",
        options: [
          "Retained placental tissue, often with infection",
          "Uterine fibroids",
          "Breastfeeding-induced contractions",
          "The first menstrual period",
        ],
        correctIndex: 0,
        explanation:
          "Secondary haemorrhage typically reflects retained products of conception, frequently combined with endometritis, keeping the placental site open and bleeding. Fibroids may cause heaviness, feeding contracts rather than bleeds, and menses returns weeks later.",
        courseSlug: "puerperium",
      },
      {
        topic: "Postpartum Complications",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which measures genuinely reduce the risk of postpartum venous thromboembolism?",
        options: [
          "Strict bed rest for the first week",
          "Deliberately restricting fluids after caesarean",
          "Early mobilisation, leg exercises and good hydration",
          "Tight bandaging of both calves",
        ],
        correctIndex: 2,
        explanation:
          "Venous blood pools with immobility and thickens with dehydration, so movement, calf exercises and fluids are the real prevention — alongside compression stockings and prophylaxis where indicated after caesarean. Bed rest and bandaging increase stasis.",
        courseSlug: "puerperium",
      },
    ],
    flashcards: [
      {
        topic: "Postpartum Complications",
        front: "Define puerperal sepsis.",
        back: "Infection of the genital tract occurring at any time between rupture of membranes or the start of labour and the 42nd day after birth — classic signs: fever, tender uterus, offensive lochia.",
      },
      {
        topic: "Postpartum Complications",
        front: "When does secondary postpartum haemorrhage occur, and its main causes?",
        back: "Abnormal bleeding from 24 hours after birth up to six weeks — usually retained placental tissue, often with endometritis; needs resuscitation, uterotonics and referral for evacuation.",
      },
      {
        topic: "Postpartum Complications",
        front: "Name the five wells to examine in any postpartum fever.",
        back: "The womb (endometritis), water (urine), wound (perineum or caesarean), the breast (mastitis) — and malaria in the blood. Examine all five before diagnosing.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sepsis fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "WHO recommendations for the prevention and treatment of postpartum haemorrhage",
        year: "2022",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Verify the current edition with your facility",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Understanding Reproductive Health",
    lessonTitle: "Reproductive Anatomy for Practice",
    description:
      "You learned this anatomy for exams; now it explains your work. A refresher with clinical eyes — catheters, smears and the water under the bridge.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the clinically important anatomy of the uterus, cervix, tubes and pelvic floor.",
      "Explain anatomical facts that guide procedures such as catheterisation and smear taking.",
      "Apply reproductive anatomy to interpret findings in midwifery practice.",
    ],
    tags: ["reproductive anatomy", "review", "uterus", "clinical anatomy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You already passed exams on the pelvis and its contents. This lesson revisits that anatomy through a different question: where does it show up in your working day? Which structure explains a difficult catheterisation, a Pap smear, a breech at term, a tear during birth?\n\nThink of it as anatomy re-read through the midwife's hands — fewer lists, more reasons.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The non-pregnant uterus is a pear of about 60 grams and 7.5 centimetres, anteverted in about 80 percent of women — which is why a full bladder tips it backward and makes fundal palpation unreliable. The cervix presents the external os, round in the nullipara and slit-like after births, and the **transformation zone** where squamous meets columnar epithelium: the tissue sampled on every Pap smear and the target of HPV. The tubes run about ten centimetres from cornua to fimbriae, and the **ampulla** — their widest stretch — is where fertilisation happens, and where most ectopic pregnancies settle.\n\nTwo more landmarks earn their keep. The **ureter** passes beneath the uterine artery at the level of the cervix — water under the bridge — the most endangered centimetre in pelvic surgery. And the urethral opening lies anterior to the vagina, between clitoris and vaginal orifice, so a catheter must never be aimed at the vaginal opening behind it. The cardinal and uterosacral ligaments plus the levator ani pelvic floor hold all of this up; their injury in birth is the anatomy of prolapse and tears.",
      },
      {
        type: "clinical_pearl",
        body: "The ureter runs under the uterine artery at the cervix — water under the bridge. Clamp blindly there during a caesarean or a bleeding emergency and you may take a kidney with the bleeder. See it, name it, protect it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Before a caesarean section you are asked to catheterise the patient. Your junior colleague, flustered by drapes, asks how she can be sure she has found the urethral meatus and not something else, because last week a catheter went into the wrong opening.\n\nWhat do you teach her?\n\nAnswer: Work front to back with the anatomy: the clitoris is most anterior, then the urethral meatus a centimetre or so behind it, then the larger vaginal opening — the catheter belongs to the middle, small, often slightly posterior-facing opening. Clean with your gloved hand from front to back, separate the labia fully with the other hand, and insert gently on identifying it. If a catheter slips into the vagina, discard it for a new sterile one and start again — never re-use a contaminated catheter.",
      },
      {
        type: "memory_trick",
        body: "Three small pictures to keep: The water flows UNDER the bridge (ureter under the uterine artery). The smile of the cervix: nullipara round, para a slit. And the front-to-back line from clitoris to urethra to vagina — the middle one is the catheter's door.",
      },
      {
        type: "summary",
        body: "- Uterus: about 60 g and 7.5 cm, anteverted in 80 percent — a full bladder hides it; fundal palpation needs an empty bladder.\n- Cervix: transformation zone is the Pap smear target; os is round in nullipara, slit-like after births.\n- Fertilisation normally occurs in the tube's ampulla — also the home of most ectopics.\n- Ureter passes beneath the uterine artery at the cervix; the urethral meatus sits anterior to the vagina for catheterisation.",
      },
    ],
    questions: [
      {
        topic: "Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In which part of the fallopian tube does fertilisation normally occur?",
        options: [
          "The fimbrial end",
          "The ampulla",
          "The isthmus",
          "The interstitial portion",
        ],
        correctIndex: 1,
        explanation:
          "The ampulla, the tube's wide middle stretch, is where sperm meets ovum — and, for the same reason, where most ectopic pregnancies implant. Fimbriae sweep the egg in, the isthmus and interstitial segments are narrow corridors.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A surgeon warns about the structure described as water under the bridge. What runs under the uterine artery at the level of the cervix?",
        options: [
          "The bladder",
          "The ovarian artery",
          "The obturator nerve",
          "The ureter",
        ],
        correctIndex: 3,
        explanation:
          "The ureter passes beneath the uterine artery near the cervix — the water under the bridge relationship. Identifying it protects it during clamping in caesarean sections and tubal surgery; ureteric injury here is a classic surgical complication.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Reproductive Anatomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the cervical transformation zone clinically important?",
        options: [
          "It is where sperm are stored before fertilisation",
          "It is the site sampled on a Pap smear and the target of HPV-related change",
          "It forms the lower segment in labour",
          "It anchors the round ligament",
        ],
        correctIndex: 1,
        explanation:
          "The transformation zone, where squamous outer epithelium meets columnar cells, is where HPV drives the changes that become cervical cancer — so the smear sampler must brush it directly. It plays no part in sperm storage, the lower segment, or the round ligament.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Reproductive Anatomy",
        front: "What does anteverted mean, and how common is it?",
        back: "The uterus tips forward over the bladder — the position of about 80 percent of women. A retroverted uterus is normal too, but can complicate early pregnancy assessment and catheter-related bladder emptying checks.",
      },
      {
        topic: "Reproductive Anatomy",
        front: "Where is the transformation zone and why does the smear target it?",
        back: "On the cervix, where squamous outer epithelium meets columnar inner epithelium — the zone where HPV-induced changes and early cancer arise, so the sampler must brush it directly.",
      },
      {
        topic: "Reproductive Anatomy",
        front: "Give the front-to-back order of female perineal openings.",
        back: "Clitoris most anterior, then the urethral meatus (the catheter's door), then the vaginal opening, then the anus — a line to recite before every catheterisation.",
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
        note: "Educational source — verify current edition and use alongside your course texts.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Understanding Reproductive Health",
    lessonTitle: "Fertility: How It Works and What Affects It",
    description:
      "Couples will ask you about getting pregnant before they ask any doctor. The biology of the fertile window, and the honest counsel that goes with it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the events of the menstrual cycle that create the fertile window.",
      "Explain factors that raise or lower fertility in women and men.",
      "Apply basic fertility counselling to a couple trying to conceive.",
    ],
    tags: ["fertility", "conception", "menstrual cycle", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every week in a CHPS compound, someone asks: we have been trying for months — is something wrong with me? Fertility counselling is midwifery work, and it starts with the calendar of conception: when the window opens, how long the egg truly lives, and what moves the odds.\n\nThis lesson gives you the biology of the fertile window, the factors that quietly damage fertility in Ghana, and the first honest words to offer a worried couple.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Each cycle, FSH ripens follicles until one dominates and oestrogen climbs, triggering the **LH surge** about 24-36 hours before ovulation. The egg lives only 12-24 hours, but sperm survive up to five days in good cervical mucus — so the **fertile window** spans about six days: the five before ovulation plus ovulation day itself. Mucus turns stretchy and egg-white at this time; body temperature rises 0.3-0.5 degrees only after ovulation. The luteal phase holds steady at about 14 days, so in any cycle length, ovulation sits roughly **14 days before the next period** — count backwards, not forwards.\n\nWhat damages fertility? Age, most powerfully from the mid-thirties; smoking and heavy alcohol; obesity or being underweight; untreated infections — chlamydia and gonorrhoea scarring the tubes, often silently; conditions like PCOS; and the male partner, who contributes to about **half** of all cases. Counsel couples trying for a baby: folate for the woman, healthy weight, no smoking, intercourse across the window, and both partners assessed if nothing has happened after a year — six months if she is over 35. The semen analysis is cheap and frequently forgotten.",
      },
      {
        type: "clinical_pearl",
        body: "The luteal phase is a metronome: period minus 14 days locates ovulation in almost any cycle length. A woman with 32-day cycles ovulates around day 18 — send the couple home with the right week, not the textbook's day 14.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A couple married fourteen months have been trying to conceive. Both are 27; her cycles are regular every 30 days. She has begun to believe she is cursed and her mother-in-law blames her openly. They have been abstaining except at mid-month, by which they mean the exact calendar middle, days 14-15.\n\nWhat do you tell them today?\n\nAnswer: First, relieve the blame: fourteen months of trying at their age is within the normal range, and regular cycles signal probable ovulation — her tubes and his sperm remain untested, and male factors account for about half of cases, so the problem is not assumed to be hers. Teach the real window: ovulation around day 16 (30 minus 14), with intercourse across the days before it. Start her on folic acid, advise both on weight, smoking and alcohol, and book review at the two-year mark of trying — or earlier referral of both partners, including semen analysis, if she is over 35 or the history shifts.",
      },
      {
        type: "memory_trick",
        body: "Sperm are week-long guests; the egg is a one-day visitor. The party lasts six days, but the guest of honour only appears on the last — so invite the guests a few days early. And remember: period minus fourteen finds the party.",
      },
      {
        type: "summary",
        body: "- LH surge precedes ovulation by 24-36 hours; the egg lives under a day, sperm up to five.\n- The fertile window is about six days — the five before ovulation plus ovulation day itself.\n- The luteal phase is fixed near 14 days: ovulation equals next period minus 14, in any cycle length.\n- Age, infections, weight and smoking cut fertility in both sexes; male factors cause about half of cases — refer couples together after a year (six months over 35).",
      },
    ],
    questions: [
      {
        topic: "Fertility",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman has regular 32-day cycles. Using the fixed luteal phase, on which day does she most likely ovulate?",
        options: [
          "Day 14",
          "Day 18",
          "Day 28",
          "Day 10",
        ],
        correctIndex: 1,
        explanation:
          "Ovulation sits about 14 days before the next period: 32 minus 14 gives day 18. Teaching couples to count backwards beats the textbook day 14, which only suits 28-day cycles.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Fertility",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about the fertile window is correct?",
        options: [
          "The egg survives five days while sperm survive one",
          "It spans about six days, ending on the day of ovulation",
          "It opens only after menstruation has fully stopped",
          "It is the three days just before the next period",
        ],
        correctIndex: 1,
        explanation:
          "Sperm can wait up to five days in fertile mucus while the egg lives under 24 hours, so the window covers roughly the five days before ovulation plus ovulation day. The days before a period are the least fertile of the cycle.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Fertility",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A couple aged 27 have tried to conceive for 14 months. What is the appropriate advice?",
        options: [
          "Reassure them nothing is wrong and review in three years",
          "Refer the woman for IVF immediately",
          "Tell them the problem is certainly hers",
          "Counsel on the fertile window, start folate, and refer both partners for assessment including semen analysis now — one year has already passed",
        ],
        correctIndex: 3,
        explanation:
          "Investigation begins after about one year of trying under 35 (six months over 35), and both partners are assessed together since male factors cause roughly half of cases. A semen analysis is cheap, early and kind — IVF talk and blame at 14 months are both premature.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Fertility",
        front: "How long do sperm and the ovum survive, and what window does that create?",
        back: "Sperm up to five days, the ovum about 12-24 hours — giving a fertile window of about six days: the five before ovulation plus ovulation day.",
      },
      {
        topic: "Fertility",
        front: "Why does period-minus-14 locate ovulation in any cycle length?",
        back: "The luteal phase is fixed at about 14 days regardless of cycle length, so counting backwards from the expected period marks ovulation far better than counting forward from day one.",
      },
      {
        topic: "Fertility",
        front: "What share of subfertility is male-factor, and which test catches it?",
        back: "About half of cases involve the male partner — the semen analysis is the cheap, simple, first-line test that is too often forgotten while the woman is investigated alone.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Infertility fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/infertility",
        note: "Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Gabbe's Obstetrics: Normal and Problem Pregnancies (8th edition)",
        note: "Educational source — verify current edition against your course texts.",
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
    courseSlug: "reproductive-health",
    moduleTitle: "Understanding Reproductive Health",
    lessonTitle: "Reproductive Rights and You",
    description:
      "Consent, confidentiality and choice are not paperwork — they are the frame that holds every service you offer. Your duties as a rights-defending midwife.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core reproductive rights that apply to every client you serve.",
      "Explain how informed consent, refusal and confidentiality work in daily midwifery practice.",
      "Apply a rights-based approach to challenging situations including adolescent care and refusal of treatment.",
    ],
    tags: ["rights", "ethics", "consent", "confidentiality"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Behind every antenatal card, every family planning session and every delivery bed stands a set of rights: to information, to choice, to dignity, to privacy. They are written into Ghana's Patients' Charter and international guidance, and they are not decoration — they are the frame that keeps care from sliding into force.\n\nThis lesson is about your daily duties as a midwife: how consent really works, what to do when a client refuses, what confidentiality means when the family is in the room, and how to hold the line kindly when it is hard.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Consent** is a conversation, not a signature: she must understand what is proposed, its benefits and risks, the alternatives — including doing nothing — and agree freely, and she may withdraw at any time. This applies from a vaginal examination to a caesarean section. **Refusal** is her right. When she refuses, document clearly what was offered, what she understood, her reasons and the danger signs you taught her — and keep the door open for her return.\n\n**Confidentiality** covers family planning choices, HIV status, pregnancy history and anything told in confidence, including from partners and parents. Offer **privacy** for every examination — a screen, a curtain, a chaperone — and **dignity and non-discrimination** for the teenager, the woman on her sixth pregnancy, the poor and the positive alike. Ghanaian law permits termination of pregnancy on defined grounds including risk to the woman's life and physical or mental health, including following rape, incest or defilement; your duty is accurate, compassionate counselling and referral within the law — never judgement. And coerced contraception — a method imposed to obtain a service — violates the same rights you uphold. FGM is illegal in Ghana; gender-based violence deserves a private question, a careful record and referral. Adolescents are entitled to confidential, respectful care.",
      },
      {
        type: "clinical_pearl",
        body: "If she cannot repeat in her own words what will happen, what the alternatives are and that she may say no, you have not yet asked her. Consent lives in her understanding, not on the form she signed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 16-year-old walks into your CHPS compound and asks quietly for contraception — but begs you not to tell her mother, who is a respected community health worker and would be ashamed.\n\nWhat is your rights-based response?\n\nAnswer: Welcome her without judgement and provide confidential, adolescent-friendly services per Ghana's adolescent reproductive health policy — her confidentiality is protected like any client's. Explore her situation, offer a method that suits her, screen for coercion and risk with care, and gently encourage family or adult support without forcing disclosure; where you believe she faces harm, follow the child-protection guidance in your national policy. Document the visit privately, so the next provider continues — rather than exposes — the care.",
      },
      {
        type: "memory_trick",
        body: "Run every encounter through the 3 Cs and 2 Ds: Consent as a conversation, Confidentiality from everyone, Choice that is genuinely hers — delivered with Dignity and non-Discrimination. Five words, one profession.",
      },
      {
        type: "summary",
        body: "- Consent = understanding + freedom to agree or refuse, at any point in care; document refusals with reasons and warning advice.\n- Confidentiality protects family planning, HIV status and adolescent services from partners and parents alike.\n- Dignity and non-discrimination apply to every client — teenager, grand multip, or HIV-positive.\n- Coerced contraception and FGM violate rights; GBV warrants a private question, documentation and referral.",
      },
    ],
    questions: [
      {
        topic: "Reproductive Rights",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What makes consent to a procedure truly informed?",
        options: [
          "A conversation in which she understands the procedure, alternatives and right to refuse, and agrees freely",
          "A relative signing the consent form on her behalf",
          "Her following the midwife's instruction without question",
          "The hospital stamp on the admission form",
        ],
        correctIndex: 0,
        explanation:
          "Informed consent rests on understanding, freedom and the acknowledged right to refuse — a dialogue she could summarise herself. Signatures and stamps record consent; they do not create it, and a relative cannot consent for a competent adult.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Reproductive Rights",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman in labour refuses the vaginal examination you consider necessary. What is the correct response?",
        options: [
          "Proceed anyway — safety overrides refusal in labour",
          "Ask her husband to sign consent so you can continue",
          "Respect her refusal, document what was offered and understood, teach warning signs, and keep her under close observation",
          "Discharge her from the facility immediately",
        ],
        correctIndex: 2,
        explanation:
          "A competent adult may refuse any examination. The professional answer is to respect the refusal, record what was offered, what she understood and why she declined, give clear warning-sign advice, and monitor closely with the door open for her to change her mind. Forcing the examination or discarding her breaches both law and ethics.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Reproductive Rights",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 16-year-old requests contraception and asks you not to inform her parents. What is the rights-based approach?",
        options: [
          "Refuse all services until a parent attends",
          "Inform her mother, since she is a health worker herself",
          "Provide confidential, adolescent-friendly care per national policy, encourage supportive adult involvement without forcing disclosure, and screen for coercion",
          "Send her to the pharmacy for supplies instead",
        ],
        correctIndex: 2,
        explanation:
          "Adolescents are entitled to confidential, non-judgemental reproductive health services; Ghana's adolescent health policy supports this. Encourage family communication where safe, watch for coercion or abuse, and never breach confidentiality casually — deflecting her to a pharmacist abandons the clinical care she is owed.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Reproductive Rights",
        front: "What are the three tests of a real consent conversation?",
        back: "She understands the procedure, its risks and alternatives; she knows she may refuse or stop; and she agrees freely — a conversation she could repeat in her own words.",
      },
      {
        topic: "Reproductive Rights",
        front: "A client refuses a recommended procedure. Name the four things your documentation must capture.",
        back: "What was offered and why, what she understood of the risks, her stated reasons, and the warning signs and follow-up arranged — leaving the door open for return.",
      },
      {
        topic: "Reproductive Rights",
        front: "Recite the 3 Cs and 2 Ds of rights-based care.",
        back: "Consent as conversation, Confidentiality, Choice — delivered with Dignity and non-Discrimination.",
      },
    ],
    sources: [
      {
        organization: "Ministry of Health, Ghana",
        title: "The Patients' Charter",
        note: "Verify the current version with your facility or the MoH",
      },
      {
        organization: "World Health Organization",
        title: "Ensuring human rights in the provision of contraceptive information and services: guidance and recommendations",
        year: "2014",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Midwives",
        note: "Verify the current edition",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Family Planning and Contraception",
    lessonTitle: "Contraception: The Options Explained",
    description:
      "From natural methods to implants and sterilisation — the whole menu explained: how each works, how well, and who it suits.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main categories of contraceptive methods and their mechanisms.",
      "Explain the difference between perfect-use and typical-use effectiveness.",
      "Apply method knowledge to match options safely to clients' lives and needs.",
    ],
    tags: ["contraception", "methods", "family planning", "larc"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Family planning clients do not come asking for a drug — they come asking for a life: school, work, spacing, recovery. Your job is to know the menu so well that whatever she brings — fear of needles, a travelling husband, myths from her aunt — you can hand her real options.\n\nThis lesson lays out the full method menu, category by category, with the effectiveness numbers and the people each method suits best.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Methods divide into six families. **Natural methods** — fertility awareness and LAM — cost nothing and carry no side effects, but demand discipline and instruction. **Barriers** — male and female condoms — protect against STIs, a shield no other method offers, though their typical-use failure is the highest of the modern set. **Short-acting hormones** — the combined pill, the progestogen-only pill, injectables like DMPA every three months — are effective when used consistently, which is exactly where typical use slips. **LARCs** — the implant (three to five years, depending on type) and the copper IUD (up to ten) — sit at the top of the effectiveness table, fitted and then largely forgotten, and the IUD is hormone-free.\n\n**Sterilisation** — tubal ligation for her, vasectomy for him — is permanent: simpler and safer in the man, and a decision that deserves its own unhurried counselling. When you quote effectiveness, distinguish **perfect use** from **typical use** — the gap between them is real life: memory, supply, negotiation. WHO's medical eligibility criteria guide who can safely use what — oestrogen-containing methods, for example, are avoided in smokers over 35 and women with raised blood pressure. And the best method is rarely the strongest one on paper: it is the one she will actually use and can return to change.",
      },
      {
        type: "clinical_pearl",
        body: "Effectiveness charts assume perfect use; clients live typical use. Ask the honest question — what will this method demand of her every day, or every act? — and match the method to her real answer, not the league table.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 28-year-old mother of three, eight weeks postpartum and breastfeeding, wants reliable spacing. Her husband travels for work, her aunt insists the pill causes cancer, and she has heard the injection makes women permanently barren.\n\nWhich options lead your counselling?\n\nAnswer: Her profile points to the LARC family: the implant or the copper IUD — top-tier effectiveness, milk-friendly, and nothing to remember on a travelling husband's calendar; the IUD adds ten hormone-free years. Explain the oestrogen-cancer myth honestly — combined methods actually lower ovarian and endometrial cancer risk — and that DMPA can delay fertility's return for up to a year after the last injection but does not cause sterility. Screen her against the eligibility criteria, let her choose, and invite her back for any side effect or change of mind.",
      },
      {
        type: "memory_trick",
        body: "Picture the ladder Long Acting Beats Daily, Daily Beats the Moment: LARC on top, then pills and injectables, then condoms, then natural methods — with one banner beneath: the STI shield belongs to condoms alone.",
      },
      {
        type: "summary",
        body: "- Method families: natural, barrier, short-acting hormonal, LARC (implant, copper IUD) and permanent sterilisation.\n- LARCs lead effectiveness — implant 3-5 years, copper IUD up to 10 — no daily demands.\n- Perfect use versus typical use: the gap is real life; counsel the method she will actually sustain.\n- Only condoms add STI protection; WHO eligibility criteria guide safe matching, e.g. avoiding oestrogen with high BP or smoking over 35.",
      },
    ],
    questions: [
      {
        topic: "Contraception",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which method offers the highest effectiveness with typical, real-life use?",
        options: [
          "Withdrawal",
          "Male condom",
          "Combined oral contraceptive pill",
          "Subdermal implant",
        ],
        correctIndex: 3,
        explanation:
          "The implant tops the effectiveness table even with typical use, because it removes human error for three to five years. Pills and condoms drop from their perfect-use figures through missed doses and inconsistent use, and withdrawal sits at the bottom.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Contraception",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A couple asks which method also protects against sexually transmitted infections. Your answer?",
        options: [
          "The copper IUD",
          "The subdermal implant",
          "Correct, consistent condom use",
          "DMPA injection",
        ],
        correctIndex: 2,
        explanation:
          "Condoms are the only method with a physical barrier that stops both sperm and infections, including HIV. Implants, IUDs and injectables prevent pregnancy admirably but do nothing about STIs — hence dual protection counsel for at-risk couples.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Contraception",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 30-year-old smoker wants the combined pill. What does safe counselling require you to consider?",
        options: [
          "Nothing — smoking does not interact with hormonal methods",
          "Combined hormonal methods are avoided in smokers over 35 because of clot risk — discuss progestin-only options with her",
          "Smokers can only use natural methods",
          "She must stop breastfeeding first",
        ],
        correctIndex: 1,
        explanation:
          "WHO's eligibility criteria flag oestrogen-containing methods for smokers over 35 — the cardiovascular risk climbs steeply — making progestin-only methods the safer counsel. Note the age threshold: this client's smoking alone at 30 does not yet bar the method, but the flag is worth teaching honestly.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Contraception",
        front: "Explain perfect use versus typical use in one sentence.",
        back: "Perfect use is what trials achieve with flawless compliance; typical use is what real people achieve with missed pills and inconsistent use — always counsel the typical-use figure.",
      },
      {
        topic: "Contraception",
        front: "Name the two LARC methods with their durations.",
        back: "The subdermal implant (three to five years depending on type) and the copper IUD (up to ten years) — the most effective methods because they remove daily human error.",
      },
      {
        topic: "Contraception",
        front: "Which methods does WHO's eligibility criteria flag for oestrogen risks?",
        back: "Combined hormonal methods are avoided or limited with raised blood pressure, smokers over 35, migraine with aura and breastfeeding under six weeks — progestin-only options are the usual alternative.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Family planning/contraception fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Medical eligibility criteria for contraceptive use (5th edition)",
        year: "2015",
      },
      {
        organization: "World Health Organization / Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2018",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Family Planning and Contraception",
    lessonTitle: "Family Planning: Counselling for Real Choices",
    description:
      "A method chosen in a rush is a method soon abandoned. The counselling approach that respects values, lives and truth — GATHER and beyond.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a structured framework for family planning counselling.",
      "Explain how privacy, voluntariness and honest side-effect counselling improve continuation.",
      "Apply counselling skills to real situations including partner opposition and method myths.",
    ],
    tags: ["family planning", "counselling", "gather", "informed choice"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The strongest family planning programme is not the one with the most supplies — it is the one where every woman chooses freely, understands truly, and comes back when she needs to. Counselling is where that happens or fails.\n\nThis lesson teaches a structure that keeps counselling complete (GATHER), the principles that keep it honest, and the field skills for the moments that make it hard: the crowded clinic, the dominant relative, the confident myth.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**GATHER** keeps a session whole. **Greet** her respectfully and find privacy — even a lowered voice and a corner screen protects the conversation in a busy CHPS compound. **Ask** about her situation: children, plans, reproductive goals, partner, method experience. **Tell** her the methods honestly — how they work, how well, the real side effects; a client who learns that DMPA may bring irregular bleeding will not abandon it in disillusion. **Help** her choose — and notice the verb: help, not decide. **Explain** correct use, what to do about missed pills, and when to return. **Return**: teach her to come back for side effects, method changes, or when pregnancy is desired — rather than quietly stopping.\n\nThe principles beneath: voluntariness — no method as a condition of any service; full method-mix information, not the shelf's leftover; confidentiality from family members; partner involvement when she wants it, never forced. Meet myths with respect, the correct fact, and a check of understanding — injectables do not sterilise, but DMPA can delay fertility's return up to a year after the last shot; pills raise no cancer alarm — they lower ovarian and endometrial risk. For clients facing partner opposition, offer discreet options and a plan for dialogue on her terms.",
      },
      {
        type: "clinical_pearl",
        body: "Never let the queue pick her method. A choice whispered in front of ten listening clients is not a choice — it is performance. Privacy is not a luxury in family planning; it is part of the method.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a packed clinic, a 24-year-old whispers that she wants the injection — but her mother-in-law, waiting outside, insists family planning spoils wombs and she must not come home with anything in her arm.\n\nHow do you counsel her?\n\nAnswer: Move her somewhere private, even a curtained corner, and run the session properly: her goals and spacing plans, the method menu with honest side effects, and her own preference. The injectable is discreet and reversible — reasonable here — but she chooses, not the queue and not the mother-in-law. Address the womb myth with the DMPA facts: fertility may take up to a year to return after the last injection, but no permanent damage follows. Offer, without pressure, to involve her husband later if she wants dialogue at home, agree a return date, and record her own choice.",
      },
      {
        type: "memory_trick",
        body: "GATHER = a basket you bring to every session: Greet privately, Ask her life, Tell the truth about methods, Help her choose, Explain use and returns, Return-with-a-reason. A gathered choice stays chosen; a rushed choice leaks away.",
      },
      {
        type: "summary",
        body: "- GREET in privacy, ASK her situation and goals, TELL methods with honest side effects, HELP her choose, EXPLAIN use and missed doses, plan the RETURN.\n- Voluntariness and full method-mix information are rights — no method as a condition of care.\n- Honest side-effect counselling drives continuation; myths answered with respect, fact and understanding checks.\n- Partner opposition: offer discreet options, support dialogue on her terms, and always respect her choice.",
      },
    ],
    questions: [
      {
        topic: "Family Planning Counselling",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which sequence correctly expands the GATHER counselling framework?",
        options: [
          "Greet, Ask, Tell, Help her choose, Explain use, Return visits",
          "Give, Advise, Treat, Help, Examine, Record",
          "Greet, Assess, Test, Help, Explain, Refer",
          "Guide, Advise, Talk, Hear, Explain, Reassure",
        ],
        correctIndex: 0,
        explanation:
          "GATHER runs Greet respectfully and privately, Ask about her life and goals, Tell the method options honestly, Help her choose, Explain correct use, and arrange Return. The other options are invented and miss the structure entirely.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Family Planning Counselling",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A client returns after three months saying she stopped her pills because of spotting — she never knew it could happen. What does this failure most reveal?",
        options: [
          "The pill was the wrong method for her body",
          "Side-effect counselling was incomplete — she was not told what to expect or to come back",
          "She needs an immediate tubal ligation",
          "Spotting means the pills damaged her womb",
        ],
        correctIndex: 1,
        explanation:
          "Breakthrough bleeding is a common, mostly harmless early effect of pills — a woman who expects it and knows help exists rarely abandons the method silently. Continuation is built at the counselling desk, not only at the dispensing window.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "Family Planning Counselling",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother-in-law openly opposes family planning, and the young client wants the injectable. What is the best counselling response?",
        options: [
          "Tell the client to obey her elders and use natural methods only",
          "Refuse service unless the husband signs approval first",
          "Give her the injection in front of the family to settle the matter",
          "Offer the service in privacy, correct the womb-damage myth, and support her choice — discreet where needed and dialogue only if she wishes",
        ],
        correctIndex: 3,
        explanation:
          "Her method choice is hers alone: counsel privately, correct the misinformation with respect, and offer a discreet option. Requiring a husband's or mother-in-law's permission breaches her right to informed choice — and confronting the family publicly endangers her at home.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "Family Planning Counselling",
        front: "What does each letter of GATHER stand for?",
        back: "Greet respectfully in private, Ask about her situation and goals, Tell the methods honestly, Help her choose, Explain correct use and missed-dose rules, and plan Return for problems or changes.",
      },
      {
        topic: "Family Planning Counselling",
        front: "What is the continuation counselling line every client should hear?",
        back: "Come back anytime — for side effects, for a change of method, or when you want to become pregnant — stopping silently is the only wrong answer.",
      },
      {
        topic: "Family Planning Counselling",
        front: "How do you answer the myth that injectables make women barren?",
        back: "With respect and fact: DMPA can delay the return of fertility for up to a year after the last injection — an effect that wears off, not damage that stays.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / Johns Hopkins CCP",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2018",
      },
      {
        organization: "World Health Organization",
        title: "Ensuring human rights in the provision of contraceptive information and services: guidance and recommendations",
        year: "2014",
      },
      {
        organization: "Ghana Health Service",
        title: "National Family Planning Guidelines and Service Standards",
        note: "Verify the current edition with your district",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Preventing Infection",
    lessonTitle: "STI Prevention: Protect and Educate",
    description:
      "In women, STIs whisper — until they take the tubes or the baby. The common infections, the quiet damage, and the prevention that actually works.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the common STIs, their presentations and their complications.",
      "Explain the principles of syndromic management and partner treatment.",
      "Apply prevention counselling, including in pregnancy, to protect clients and newborns.",
    ],
    tags: ["sti", "prevention", "syndromic management", "partner treatment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sexually transmitted infections are among the most under-diagnosed problems you will meet — not because they are rare, but because in women they are so often silent. A gonococcal or chlamydial infection can smoulder for months, scar a fallopian tube, and present years later as infertility or an ectopic pregnancy.\n\nThis lesson covers the STIs you will actually see, the damage they do to women and newborns, and the prevention messages that work in real consultations — including the treatment principle most often forgotten: the partner.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The common players: **chlamydia** — mostly symptomless in women, quietly causing pelvic inflammatory disease (PID); **gonorrhoea** — purulent discharge or, just as often, nothing, and a cause of ophthalmia neonatorum when the newborn's eyes meet it at birth; **syphilis** — a painless chancre that heals and forgets, returning years later; **trichomonas** — frothy, itchy discharge; and **herpes simplex** — recurrent painful ulcers. All three of the first group travel toward the same destination: PID, tubal blockage, ectopic pregnancy and infertility — plus pregnancy losses, preterm birth and congenital infection.\n\nWhere laboratory testing is thin, Ghana applies **syndromic management**: national flowcharts that treat the most likely causes of a discharge or ulcer at the same visit instead of waiting on results. Two rules anchor good practice: treat the **partner** too — untreated partners re-infect within weeks — and counsel **condoms** as the only STI shield. In antenatal care, test every woman for syphilis and treat positives with benzathine penicillin per protocol to prevent stillbirth and congenital syphilis; Ghana is also rolling out HPV vaccination for adolescent girls against cervical cancer.",
      },
      {
        type: "clinical_pearl",
        body: "If you treat her and not her partner, you have treated half the infection. Re-infection within three weeks is the usual sequel — the partner slip is not paperwork, it is half the prescription.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 23-year-old returns to your CHPS compound for the third time in two months with the same vaginal discharge. She was treated at the last visit and improved, then her symptoms returned within three weeks. She has no fever and no abdominal pain on examination.\n\nWhat has gone wrong, and what do you do this time?\n\nAnswer: The pattern — improvement then relapse — is the signature of re-infection from an untreated partner, not treatment failure. Manage her per the national syndromic flowchart again, and this time treat the partner too, with a partner-notification slip and counselling on completing the course. Teach consistent condom use, offer an HIV and syphilis test, and check for pregnancy before prescribing. If she develops fever, pelvic pain or cervical-motion tenderness, treat PID per protocol and refer.",
      },
      {
        type: "memory_trick",
        body: "The quiet three — Chlamydia, Gonorrhoea, Syphilis — all whisper while they work. Match them to their signatures: Chlamydia the Silent thief of tubes, Gonorrhoea the discharger that blinds babies' eyes, Syphilis the chancre that heals so it can hide. Silence is not safety — test, treat, and treat the partner.",
      },
      {
        type: "summary",
        body: "- Chlamydia and gonorrhoea are frequently silent in women, ascending to PID, tubal damage and infertility.\n- Untreated syphilis in pregnancy stillbirths babies — screen every antenatal client and treat with benzathine penicillin per protocol.\n- Syndromic management treats the likely causes at the same visit using national flowcharts — and always treats the partner.\n- Condoms are the only STI shield; pair every treatment with partner treatment and prevention counselling.",
      },
    ],
    questions: [
      {
        topic: "STI Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are chlamydial and gonococcal infections especially dangerous to women's fertility?",
        options: [
          "They always cause obvious symptoms early",
          "They only affect men's fertility",
          "They are often symptomless, ascending silently to damage and scar the tubes",
          "They are untreatable with antibiotics",
        ],
        correctIndex: 2,
        explanation:
          "Most women with chlamydia — and many with gonorrhoea — notice nothing while the infection ascends, causing pelvic inflammatory disease that scars the tubes into ectopic pregnancy and infertility. Silence is exactly why screening and partner treatment matter.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "STI Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A treated client returns in three weeks with the same discharge. What is the most likely explanation?",
        options: [
          "The tablets were counterfeit",
          "Re-infection from an untreated partner — the partner was never treated",
          "She has developed cancer of the cervix",
          "The discharge is now normal for her body",
        ],
        correctIndex: 1,
        explanation:
          "Improve-then-relapse within weeks is the classic signature of re-infection, not drug failure: the partner carries the same untreated organism and hands it back. The fix is re-treatment per the flowchart plus partner treatment and condom counselling.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "STI Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which drug is the standard treatment for syphilis detected in pregnancy?",
        options: [
          "Benzathine penicillin by intramuscular injection",
          "Doxycycline for ten days",
          "Metronidazole as a single dose",
          "Artemisinin combination therapy",
        ],
        correctIndex: 0,
        explanation:
          "Benzathine penicillin treats maternal syphilis and prevents congenital syphilis and stillbirth. Doxycycline is avoided in pregnancy, metronidazole treats trichomonas and bacterial vaginosis, and artemisinin treats malaria — none touches syphilis.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "STI Prevention",
        front: "Name three long-term consequences of untreated chlamydia or gonorrhoea in women.",
        back: "Pelvic inflammatory disease with chronic pain, tubal-factor infertility, and ectopic pregnancy — plus risks to pregnancy including preterm birth and newborn eye infection.",
      },
      {
        topic: "STI Prevention",
        front: "What is syndromic management?",
        back: "Treating the most likely causes of a presenting syndrome — discharge or genital ulcer — at the same visit using national flowcharts, without waiting for laboratory results that may not exist at your level.",
      },
      {
        topic: "STI Prevention",
        front: "Why must partners be treated alongside clients?",
        back: "Untreated partners carry the same organism and re-infect the treated client within weeks — partner treatment plus a notification slip is half the prescription.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sexually transmitted infections (STIs) fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "WHO guideline on syphilis screening and treatment in pregnancy",
        year: "2016",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines (STI syndromic management flowcharts)",
        note: "Verify the current edition with your facility",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "reproductive-health",
    moduleTitle: "Preventing Infection",
    lessonTitle: "HIV and Reproductive Health",
    description:
      "Testing every mother, treating from day one, choosing feeding wisely — how the modern midwife helps end vertical HIV transmission, with hope.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe HIV transmission routes, including mother-to-child transmission.",
      "Explain the PMTCT pathway from testing through treatment and infant follow-up.",
      "Apply supportive counselling to HIV-positive clients, including feeding choices and disclosure.",
    ],
    tags: ["hiv", "pmtct", "vertical transmission", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "HIV has changed from a death sentence into a manageable condition — and from an inevitable infection of babies into one your counselling can nearly erase. A woman on effective treatment can expect a healthy life and can breastfeed safely.\n\nThe midwife is the hinge of that success. This lesson covers transmission, the prevention of mother-to-child transmission (PMTCT) pathway as practised in Ghana, and the counselling that keeps mothers in care.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "HIV attacks CD4 cells and, untreated, dismantles immunity over years. It spreads through unprotected sex, blood contact, and from mother to child — in pregnancy, labour and birth, and breastfeeding. Without intervention that vertical risk runs up to around 45 percent; with testing, treatment and safe feeding it falls below five percent, near zero where viral suppression is achieved.\n\nGhana's PMTCT pathway runs through you. Test every antenatal client — and the partner too; the unbooked woman in labour is tested per national protocol. A positive result means **lifelong triple ART started the same day** (Ghana's Option B+ approach), viral load monitoring, and a protected delivery — avoiding unnecessary episiotomy and prolonged membrane rupture. The newborn receives prophylaxis per protocol and **early infant diagnosis by PCR at about six weeks**. On feeding: in Ghana, exclusive breastfeeding for six months with continued feeding alongside complementary foods is the recommended course while the mother is on effective ART — formula only where it is acceptable, feasible, affordable, sustainable and safe. For couples: condoms, suppression of the positive partner — undetectable equals untransmittable — and PrEP for the negative partner.",
      },
      {
        type: "clinical_pearl",
        body: "The most powerful HIV intervention you will ever deliver is finding the positive mother and starting her treatment today. The virus you suppress before delivery protects a baby not yet born — and protects her for decades.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At her first antenatal visit, a 22-year-old's rapid HIV test returns positive. She is four months pregnant, has not told her partner, and whispers through tears that he may leave her — and that she dare not take medicines he does not understand.\n\nWhat do your first actions and words include?\n\nAnswer: Sit with her — the first minutes decide whether she stays in care. Confirm the result per the national algorithm, explain that starting ART today protects both her health and the baby — with treatment and follow-up, the great majority of such babies are born free of HIV. Explore disclosure at her pace, offering the couples-testing approach so her partner learns his own status rather than her verdict, and connect her to the facility's support group or peer counsellor. Book same-day ART initiation, plan viral load follow-up and the delivery and infant-care pathway, and guarantee confidentiality at every step.",
      },
      {
        type: "memory_trick",
        body: "Test, Treat, Track: test everyone — partners included; treat from day one with lifelong ART; track the virus with viral loads and the baby with PCR at six weeks. On feeding: breast is best while the virus is suppressed.",
      },
      {
        type: "summary",
        body: "- HIV transmits through sex, blood and vertically — pregnancy, labour and breastfeeding; untreated risk to the baby climbs toward 45 percent.\n- PMTCT in Ghana: test all antenatal clients and partners, start lifelong ART the same day for positives, monitor viral load.\n- Newborns: prophylaxis per protocol and PCR testing at about six weeks; exclusive breastfeeding for six months is recommended while the mother is virally suppressed on ART.\n- Suppress the virus and it is untransmittable sexually (U=U); PrEP and condoms protect discordant couples. Counsel with hope and strict confidentiality.",
      },
    ],
    questions: [
      {
        topic: "HIV and Reproductive Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Through which routes can HIV pass from mother to child?",
        options: [
          "Pregnancy only",
          "Labour and delivery only",
          "Pregnancy, labour and delivery, and breastfeeding",
          "It cannot pass through breastfeeding",
        ],
        correctIndex: 2,
        explanation:
          "Vertical transmission can occur throughout — in utero, during labour and birth, and through breast milk. This is why PMTCT wraps around the whole journey: treatment in pregnancy, a protected delivery, and infant prophylaxis with safe feeding.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "HIV and Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An HIV-positive mother is on effective ART with suppressed viral load and asks about feeding in Ghana. What is the recommended counsel?",
        options: [
          "Never breastfeed under any circumstances",
          "Exclusive breastfeeding for six months, continuing alongside complementary foods, while she remains on ART",
          "Mixed feeding with formula from birth is best",
          "Expressing and boiling all milk first",
        ],
        correctIndex: 1,
        explanation:
          "Where formula is not reliably AFASS — acceptable, feasible, affordable, sustainable and safe — WHO and Ghana recommend exclusive breastfeeding for six months for mothers on effective ART, because suppression makes the milk safe and clean formula is not guaranteed. Mixed feeding carries the highest risk combination.",
        courseSlug: "reproductive-health",
      },
      {
        topic: "HIV and Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When does early infant diagnosis of HIV infection take place under Ghana's PMTCT programme?",
        options: [
          "At birth only",
          "Only after six months of age",
          "At about six weeks of age, by PCR testing",
          "Only when the baby falls sick",
        ],
        correctIndex: 2,
        explanation:
          "The first DNA-PCR test is scheduled at about six weeks of age, catching infection early enough to start treatment before the virus does its worst damage. Waiting for illness or six months surrenders the advantage of early diagnosis.",
        courseSlug: "reproductive-health",
      },
    ],
    flashcards: [
      {
        topic: "HIV and Reproductive Health",
        front: "What does U=U mean for an HIV-positive client?",
        back: "Undetectable equals untransmittable: a person sustained on effective ART with an undetectable viral load does not transmit HIV sexually — hope with evidence for discordant couples.",
      },
      {
        topic: "HIV and Reproductive Health",
        front: "Outline Ghana's PMTCT core steps for a newly positive antenatal client.",
        back: "Confirm per the national algorithm, start lifelong triple ART the same day, monitor viral load, protect the delivery, give infant prophylaxis, test the baby by PCR at about six weeks, and support exclusive breastfeeding for six months.",
      },
      {
        topic: "HIV and Reproductive Health",
        front: "What feeding do you counsel for an ART-suppressed mother in Ghana?",
        back: "Exclusive breastfeeding for six months, continuing alongside complementary foods — chosen because her suppressed virus makes milk safe while formula safety (AFASS) cannot be assumed in her setting.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "HIV/AIDS fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/hiv-aids",
        note: "Check for the latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Guideline: updates on HIV and infant feeding",
        year: "2016",
      },
      {
        organization: "Ghana National AIDS/STI Control Programme (NACP)",
        title: "National Guidelines for PMTCT of HIV",
        note: "Verify the current edition with your district",
      },
    ],
  },
];
