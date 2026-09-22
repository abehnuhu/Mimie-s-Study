// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 2 — Batch B (Maternal & Child Health Nursing II)
// 16 lessons anchored to courseSlug maternal-child-health-2
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Labour: The Nurse's Role",
    lessonTitle: "Understanding Labour: Onset & Stages",
    description:
      "How birth begins and unfolds — the signs that say the real thing has started, the three stages, and where you stand as the nurse in it all.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the features of true labour and distinguish them from false labour and warning signs.",
      "Outline the three stages of labour with their typical patterns and durations.",
      "Apply triage advice to a woman who calls or arrives at the facility in early labour.",
    ],
    tags: ["labour", "stages of labour", "true labour", "triage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "At 2am the phone rings at the CHPS compound. A woman at 39 weeks says, 'Nurse, tightenings have started — should I come?' What you say next can be the difference between a safe birth and a roadside emergency. Sorting the real thing from the rehearsal is a nursing skill you will use for the rest of your career.\n\nYour role in labour is a defined and powerful one: you welcome and assess the woman, monitor her and her baby, prepare everything, recognise deviation and escalate fast. The birth itself is led by the skilled attendant — the midwife or doctor — and your preparation and watchfulness are what make their work possible. In this course you will learn both halves of that partnership.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**True labour** is defined by progress. Contractions become **longer, stronger and closer together**, often starting in the back and sweeping round to the front like a wave. Rest, a warm bath or sleep does not switch them off. The **show** — sticky mucus streaked with a little blood as the plug leaves the ripening cervix — often accompanies them. The decisive proof is the cervix: it effaces and dilates. **False labour** — Braxton Hicks tightenings — is irregular, changes nothing, eases with rest or hydration, and the cervix stays closed.\n\nThen the **warning signs**, which override every contraction pattern: bleeding that soaks a pad, fluid leaking, fever, severe headache with blurred vision or epigastric pain, a baby gone quiet, and contractions before 37 weeks. Any of these means come now — do not triage her by the clock.\n\nLabour then unfolds in three acts. The **first stage**, onset to full dilatation, runs a slow latent phase to about 4-5 cm and a faster active phase from there — it is the longest stage, especially for first-time mothers. The **second stage**, full dilatation to the birth of the baby, is the work of pushing — normally up to three hours in a first birth, up to two in later ones. The **third stage**, birth of the baby to delivery of the placenta, is the shortest and the most dangerous, usually over within half an hour. Nurses monitor all three; the attendant delivers the baby and placenta; the team is one.",
      },
      {
        type: "clinical_pearl",
        body: "Sleep is a good screening test. False labour lets a woman sleep; true labour wakes her and marches on. And never wave away bleeding as 'just show' — show is mucus streaked pink, not blood that soaks a pad.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Maame Adjoa, a third-time mother at 39 weeks, calls your CHPS compound at 11pm. She has had tightenings since supper — three in the last hour, at uneven intervals. She drank water, lay down and dozed between them. The baby has been lively all evening, and she asks whether she should start walking to the clinic now.\n\nGiven her story, is this likely true or false labour — and what will you advise before ending the call?\n\nAnswer: The pattern is classic false labour: irregular tightenings that ease with rest, with a lively baby. Advise rest, fluids and a light meal, and repeat the warning signs — fluid, bleeding, fever, severe headache, or a quiet baby. Because she is a multigravida whose labours move fast, she should come once contractions arrive every ten minutes or less, or sooner if her waters break or any warning sign appears. Chart the call: time, story, advice given.",
      },
      {
        type: "quiz_prompt",
        body: "A first-time mother asks how she will know labour has truly started, since her friend told her everyone suffers false alarms. What three features will you teach her?\n\nAnswer: Contractions that grow longer, stronger and closer together; a show of pink-streaked mucus; and progressive change confirmed at the facility — plus the come-now signs: soaked-pad bleeding, gush of fluid, fever, severe headache with vision change, a quiet baby, or contractions before 37 weeks.",
      },
      {
        type: "memory_trick",
        body: "TRUE labour SLIDES: Show, Lengthening contractions, Increasing strength, Dilatation, Effacement. No slide, no labour. And keep the five Bs that end a phone call fast: Bleeding, Burst of waters, Burning fever, Blinding headache, Baby gone quiet — plus contractions Before 37 weeks.",
      },
      {
        type: "summary",
        body: "- True labour: contractions that grow longer, stronger and closer together, unrelieved by rest, with cervical effacement and dilatation.\n- False labour: irregular Braxton Hicks tightenings that settle with rest, hydration or sleep, with a closed, unchanged cervix.\n- Three stages: first (onset to full dilatation, the longest), second (full dilatation to baby, up to 3 hours first birth / 2 hours later births), third (baby to placenta, usually under 30 minutes).\n- Warning signs override every plan: bleeding, fluid leak, fever, severe headache or visual disturbance, a quiet baby, contractions before 37 weeks — come now.\n- The nurse assesses, monitors, prepares and escalates; the midwife or doctor conducts the birth — one team, two roles.",
      },
    ],
    questions: [
      {
        topic: "Stages of Labour",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman calls at 39 weeks with contractions every seven minutes, each lasting 50 seconds and getting stronger; they wake her from sleep. What is the most likely interpretation?",
        options: [
          "True labour, because the contractions are progressive and disrupt sleep",
          "False labour, because contractions near term are always Braxton Hicks",
          "True labour only if she also reports a gush of fluid",
          "False labour, because she has not yet passed the show",
        ],
        correctIndex: 0,
        explanation:
          "Progressive contractions — longer, stronger, closer, unrelieved by sleep — define true labour. Show and membrane rupture may come before, during or after labour begins, so their absence does not exclude it.",
        whyOthers: {
          B: "Braxton Hicks tightenings are irregular and ease with rest — they do not strengthen and wake a sleeping woman.",
          C: "Membrane rupture often accompanies labour but is not required to diagnose it.",
          D: "Show may appear before, during or after onset; its absence does not make true labour false.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Stages of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which stage of labour is correctly matched with its endpoints?",
        options: [
          "First stage: from full dilatation to the birth of the baby",
          "Second stage: from onset of labour to full dilatation",
          "Third stage: from the birth of the baby to expulsion of the placenta and membranes",
          "Second stage: from the birth of the baby to expulsion of the placenta",
        ],
        correctIndex: 2,
        explanation:
          "The third stage runs from the baby's birth to delivery of the placenta and membranes — short, but it carries the highest risk of haemorrhage and demands close nursing observation.",
        whyOthers: {
          A: "That describes the second stage, not the first.",
          B: "That describes the first stage, not the second.",
          D: "That mixes the third stage with the wrong starting point.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Stages of Labour",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 38 weeks a woman calls reporting a sudden gush of warm fluid, contractions ten minutes apart, and a baby moving well. What is your advice as the nurse on the phone?",
        options: [
          "Stay home until contractions are five minutes apart, to avoid a long admission",
          "Rest and re-examine in the morning, since the waters may reseal",
          "Come to the facility now, travelling on her side if possible",
          "Drink oral rehydration salts and monitor for fever at home",
        ],
        correctIndex: 2,
        explanation:
          "Ruptured membranes invite cord prolapse and ascending infection. With contractions established, she should come in now — lying on her side if the head is not fixed — for assessment of fetal wellbeing and labour progress.",
        whyOthers: {
          A: "Waiting for a tighter pattern risks a roadside birth or a cord accident after membrane rupture.",
          B: "Ruptured membranes do not reseal; delaying invites infection.",
          D: "Rehydration does not address the cord and infection risks of ruptured membranes with contractions.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Stages of Labour",
        front: "Name three features separating true from false labour.",
        back: "True labour: contractions grow longer, stronger and closer; discomfort sweeps from back to front; rest and sleep do not ease them; the cervix effaces and dilates. False labour: irregular, front-only tightenings eased by rest, with no cervical change.",
      },
      {
        topic: "Stages of Labour",
        front: "Match each stage of labour to its endpoints.",
        back: "First: onset of true labour to full dilatation. Second: full dilatation to the birth of the baby. Third: birth of the baby to expulsion of placenta and membranes.",
      },
      {
        topic: "Stages of Labour",
        front: "When should a multigravida be advised to come in?",
        back: "Earlier than a first-time mother — contractions about every ten minutes or less, since her cervix has opened before and labour can move quickly. Any warning sign beats any timing rule.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Labour: The Nurse's Role",
    lessonTitle: "Supporting a Woman in Labour",
    description:
      "Comfort, breathing, positions and advocacy — the quiet, continuous presence that changes a birth experience, and the first medicine a nurse offers.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the non-pharmacological comfort measures a nurse offers in each stage of labour.",
      "Explain where labour pain comes from and how support measurably changes it.",
      "Apply safe nursing practice around analgesia, including what to observe and report.",
    ],
    tags: ["labour support", "comfort measures", "pain relief", "advocacy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You cannot take a labouring mother's pain away, but you can change how she carries it. On many Ghanaian wards the nurse is the person who stays — the midwife may be catching babies in the next room, the doctor is called for problems — and to the labouring woman, whoever stays is the whole hospital.\n\nWHO recommends a **companion of her choice** for every labouring woman, and the evidence is striking: continuous support reduces perceived pain, shortens labour slightly, and reduces the need for analgesia and instrumental birth. Your presence is not the soft half of care. It is care.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know where the pain comes from, and both your hands and your words become smarter. In the **first stage**, pain rises from cervical dilatation and the ischaemic uterus, referred through T10-L1 — felt in the lower abdomen and the small of the back. In the **second stage**, perineal and vaginal stretch travels S2-S4 — sharp, local and pushing-related.\n\nYour toolkit needs no prescription. Breathing and relaxation, guided in a low voice at the peak of each contraction. Freedom to move and change position — walking in early labour, upright or squatting positions later, side-lying for rest. **Sacral massage** and steady pressure on the lower back through T10-L1 pain. A warm compress against the perineum in the second stage, which eases pain and reduces tears. Sips of fluid, a light diet in early labour, and regular bladder emptying — a full bladder both hurts and obstructs descent. Encouragement that is specific and true: 'You are doing the hardest work of your life, and you are doing it.'\n\nWhere drugs are prescribed — commonly pethidine with promethazine in district settings — nursing carries two duties: it crosses to the baby and can depress newborn breathing, so its timing near birth matters and any opioid demands closer observation of both mother and baby after birth; and a mother who has had analgesia is never left alone. Escalate honestly: if a mother's pain suddenly changes character, or she becomes exhausted, frightened beyond reassurance, or the pattern of her labour shifts, that is information — report it, do not just soothe it.",
      },
      {
        type: "clinical_pearl",
        body: "Presence before position, position before pressure, pressure before pharmacology. And the mirror rule works both ways: fear and abandonment raise pain perception; calm company lowers it. Never leave a mother alone because 'she has had her injection'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A second-time mother at 8 cm is begging for an injection. Her contractions come every three minutes; the midwife assesses the head at plus one and expects birth within the hour. The fetal heart is normal. You are the nurse supporting her, and she grips your hand each contraction.\n\nWhat is your best plan for the next hour, and what will you report to the team?\n\nAnswer: With birth expected within the hour, pethidine given now would reach the baby almost undiminished and risk respiratory depression at the moment it matters most — report your assessment and let the prescriber decide, but plan for the fast tools: stay at her side, guide her breathing, press the sacrum with each contraction, and help her into an upright position. Explain honestly why this hour belongs to her own strength. Report her pain, her progress and her exhaustion at handover — and note that support given was part of the care plan.",
      },
      {
        type: "memory_trick",
        body: "Labour pain has two chapters: T10-L1 writes the first (back and belly), S2-S4 writes the second (perineum). Order your relief like a meal: Presence, Position, Pressure, then Pharmacology — each one tried before the next is reached.",
      },
      {
        type: "summary",
        body: "- First-stage pain travels T10-L1 (lower abdomen and back); second-stage pain travels S2-S4 (perineum).\n- First-line relief needs no prescription: companion of choice, breathing, movement, upright positions, sacral massage, warm compress, fluids, bladder care.\n- Continuous support measurably reduces pain perception, analgesia use and instrumental birth — presence is medicine.\n- Opioids cross to the baby: time them wisely per prescription, observe mother and baby closely after birth, and never leave a medicated mother alone.\n- Sudden changes in pain, coping or labour pattern are clinical information — report, do not merely soothe.",
      },
    ],
    questions: [
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which is the recommended first-line approach to labour pain in a low-resource setting?",
        options: [
          "Companionship, breathing, movement, position changes and massage",
          "Immediate epidural analgesia for every labouring woman",
          "Routine pethidine injection for all women at 4 cm",
          "Restriction to bed with dim lights and silence",
        ],
        correctIndex: 0,
        explanation:
          "Continuous support and non-pharmacological comfort are safe, effective first-line measures — WHO recommends companionship for every labouring woman; drugs are additions, not substitutes.",
        whyOthers: {
          B: "Epidural is excellent where available, but it is neither first-line nor accessible in most district settings.",
          C: "Routine opioid injection exposes mothers and babies to side effects without indication.",
          D: "Immobility and isolation increase pain perception and slow labour.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should pethidine be avoided when birth is expected within about four hours?",
        options: [
          "It stops uterine contractions completely",
          "It causes maternal hypertension",
          "It is incompatible with oxytocin",
          "It crosses to the baby and can depress newborn breathing",
        ],
        correctIndex: 3,
        explanation:
          "Pethidine crosses the placenta; given close to birth it can make the newborn slow to breathe, with naloxone as the antidote. Nursing's role is to observe, time and report — the prescription belongs to the prescriber.",
        whyOthers: {
          A: "Opioids do not abolish contractions; they act on pain perception.",
          B: "Maternal hypotension, not hypertension, is the more typical cardiovascular effect.",
          C: "Pethidine and oxytocin are commonly used together under monitoring.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother describes aching in her back and lower abdomen with each first-stage contraction, and sharp perineal burning late in labour. Which nerve roots carry each sensation?",
        options: [
          "Both are S2-S4",
          "Back and lower abdomen T10-L1; perineal burning S2-S4",
          "Both are T10-L1",
          "Back T1-T4; perineum L1-L2",
        ],
        correctIndex: 1,
        explanation:
          "Cervical and uterine pain refers through T10-L1 — lower abdomen and back; perineal and vaginal stretch travels the pudendal nerve, S2-S4. This is why sacral pressure helps first-stage pain and warm compresses help second-stage pain.",
        whyOthers: {
          A: "Perineal pain is S2-S4, but first-stage pain is T10-L1, not S2-S4.",
          C: "Second-stage pain has its own roots, S2-S4, via the pudendal nerve.",
          D: "Neither T1-T4 nor L1-L2 carries these sensations.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Labour Support",
        front: "Where does labour pain come from in each stage?",
        back: "First stage: cervical dilatation and uterine ischaemia, referred T10-L1 — lower abdomen and back. Second stage: perineal and vaginal stretch via S2-S4.",
      },
      {
        topic: "Labour Support",
        front: "Give four non-drug comfort measures and the stage each suits best.",
        back: "Breathing and a calm presence (all stages); upright positions and movement (first stage); sacral pressure (first-stage back pain, T10-L1); warm perineal compress (second stage — eases burning and reduces tears).",
      },
      {
        topic: "Labour Support",
        front: "What does WHO recommend for every labouring woman, and what does it change?",
        back: "A companion of her choice, with continuous support — it reduces perceived pain, shortens labour slightly, and lowers the need for analgesia and instrumental birth.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Labour: The Nurse's Role",
    lessonTitle: "Monitoring Labour: Contractions & Fetal Heart",
    description:
      "The observations that keep labour safe — the rhythm of checks, the fetal heart below and above the line, and the partograph that makes delay visible.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the schedule of maternal and fetal observations in labour and how to chart them.",
      "Explain how to assess contractions and interpret fetal heart rate findings including decelerations and meconium.",
      "Apply partograph principles to recognise abnormal progress and escalate early.",
    ],
    tags: ["monitoring", "fetal heart rate", "partograph", "contractions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In labour you watch two patients at once — and monitoring is the early-warning system that guards them both. In many Ghanaian facilities it is the nurse who performs, records and interprets these observations; the skill you build in this lesson is the one that will make seniors trust your judgement.\n\nEverything you find goes onto the **partograph** — one page that holds the baby's heart, the contractions, the fluid, the descent, the dilatation and the mother's vitals — so the story survives every shift change.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The rhythm to remember is **1-4-30 and every void**: **pulse hourly**, **blood pressure and temperature every four hours** — sooner if anything worries you — **fetal heart and contractions every 30 minutes** in the active first stage (the fetal heart every five minutes in the second stage), and a **urine check with every void** for volume, protein, ketones and glucose.\n\n**Contractions**: palpate with your fingertips on the fundus and time from the start of one to the start of the next. Record them as number **in ten minutes** and their duration in seconds, grading strength by how the fundus feels — soft at rest, firm like a chin in a moderate contraction, rigid like your forehead in strong labour. A cervix dilating on schedule usually rides contractions of three or more in ten, each lasting about forty-five seconds.\n\n**The fetal heart** is the baby's voice. Listen with a Pinard or Doppler **immediately after a contraction**, counting a **full sixty seconds**: the reassuring baseline is **110-160 beats per minute** with gentle variability — the rate moves a little when the baby moves. Concerning patterns are a persistent rate below 110 or above 160, and **decelerations** — the heart dipping repeatedly after contractions and recovering slowly. Note the **liquor** too: clear fluid reassures; meconium-stained fluid means the baby may have been stressed, and it matters most when the heart is also abnormal. When you find a concern: turn her onto her left side, report at once, and keep counting while help comes.\n\nThe **partograph** turns observations into decisions. Plot cervical dilatation from the active phase (about 4-5 cm). From that first mark, the **alert line** runs at about one centimetre per hour — the minimum acceptable speed; the **action line** stands four hours to its right. Crossing the alert line means stop and reassess; crossing the action line means a decision is overdue. Plot at the bedside, at the time you measure — a chart filled in later is a story rewritten.",
      },
      {
        type: "table",
        title: "The monitoring clock in active labour",
        body: "| Observation | Frequency | Watch for |\n| --- | --- | --- |\n| Pulse | Every hour | Quietly climbing — bleeding, infection, exhaustion |\n| Blood pressure and temperature | Every 4 hours | 140/90 or more with protein; fever after membrane rupture |\n| Fetal heart | Every 30 minutes (every 5 in second stage), after a contraction for 60 seconds | Below 110, above 160, decelerations after contractions |\n| Contractions | Every 30 minutes | Fewer than 3 in 10, weak; or exceeding 5 in 10 on oxytocin |\n| Urine | Every void | Ketones (empty stomach, long labour), protein, glucose |\n| Cervix and descent | 4-hourly or on indication | Crossing the alert line; no descent with moulding |",
      },
      {
        type: "clinical_pearl",
        body: "Trust the pulse before you trust the pressure. A young woman can hold her blood pressure while losing a great deal of blood — the climbing pulse is her first confession. And count the fetal heart right after the contraction: the dip that matters arrives after the peak.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 8 cm has been in labour since midnight. Her pulse was 84 at 2am, 96 at 3am, 108 at 4am; her blood pressure is now 100/70 and her conjunctivae look pale. She says she just feels tired. Separately, at your last count the fetal heart was 168 and had not settled after you turned her on her side.\n\nWhat does this pattern suggest, and what do you do?\n\nAnswer: Two alarms at once. A rising pulse with a falling blood pressure and pallor suggests maternal shock — possibly a concealed bleed or sepsis. A persistently raised fetal heart is fetal tachycardia, often distress responding to the mother's state. Do not wait for collapse: call for help now, stay with her, keep her left lateral, continue the fetal heart count, insert an IV line if delegated and run fluids, and chart every reading with the time — the trend is the evidence, and it is what the receiving team will act on.",
      },
      {
        type: "memory_trick",
        body: "1-4-30 and every void — pulse on the hour, pressure and temperature every four, fetal heart and contractions every half hour, urine at every void. The happy baby hums between 110 and 160; the honest partograph is written at the bedside.",
      },
      {
        type: "summary",
        body: "- Monitoring rhythm: pulse hourly; BP and temperature 4-hourly; fetal heart and contractions every 30 minutes (fetal heart every 5 minutes in second stage); urine every void.\n- Contractions: count in ten minutes, time duration, grade strength by fundal feel during palpation.\n- Fetal heart: listen immediately after a contraction for a full 60 seconds; normal 110-160 with variability; persistent bradycardia, tachycardia or repetitive decelerations are alarms.\n- Meconium with an abnormal heart is fetal distress until proven otherwise.\n- Partograph: alert line at about 1 cm per hour from 4-5 cm; action line 4 hours beyond; crossing alert = reassess and inform, crossing action = decision overdue. Chart at the bedside in real time.",
      },
    ],
    questions: [
      {
        topic: "Labour Monitoring",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How should you time the fetal heart count during the first stage of labour?",
        options: [
          "Midway between contractions, for fifteen seconds multiplied by four",
          "Immediately after a contraction, counting a full sixty seconds, at least every 15-30 minutes",
          "Only during a contraction, for thirty seconds",
          "Once on admission and again at full dilatation",
        ],
        correctIndex: 1,
        explanation:
          "Listening immediately after a contraction for a full minute catches the late decelerations that follow the contraction peak — the classic sign of fetal hypoxia. In active first stage this happens at least every 15-30 minutes.",
        whyOthers: {
          A: "Counting between contractions only misses post-contraction dips, and short counts misestimate rate.",
          C: "Maternal noise over the contraction masks the fetal heart; the informative window is just after it.",
          D: "Twice per labour is far too sparse to catch developing distress.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You palpate contractions two in ten minutes, each lasting twenty-five seconds, and the fundus feels only moderately firm. How do you record and interpret this?",
        options: [
          "Strong labour in advanced progress — no concern",
          "Two in ten, 25 seconds, moderate strength — inadequate power for the active phase, likely slow progress",
          "Five in ten, 45 seconds, strong — normal active labour",
          "Tetanic contraction — prepare for uterine rupture",
        ],
        correctIndex: 1,
        explanation:
          "Contractions are recorded as frequency in ten minutes, duration, and strength on palpation. Two weak, short contractions in ten will usually not dilate a cervis at active-phase speed — this is inadequate power, a setup for prolonged labour that belongs on the partograph and in your report.",
        whyOthers: {
          A: "Frequency, duration and strength all fall short of adequate active labour.",
          C: "The numbers described are two in ten at 25 seconds — not five at 45.",
          D: "Tetanic contraction is a single, unrelenting hypertonic state, not a sparse weak pattern.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Monitoring",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In second stage, you notice the fetal heart dipping to about 80 with each contraction and returning slowly. The liquor is lightly meconium-stained. What is your first nursing action?",
        options: [
          "Coach louder pushing to finish the birth quickly yourself",
          "Document it and recheck in thirty minutes",
          "Call for help, keep counting, and turn the mother onto her left side while the team responds",
          "Give the mother oral glucose and reassurance",
        ],
        correctIndex: 2,
        explanation:
          "Repetitive late decelerations with slow recovery, plus meconium, signal fetal compromise — a recognition-and-escalation moment. Your job is the fast, accurate alarm: call for help, stay with her, reposition left lateral, continue counting, and be ready with a warm towel and the resuscitation corner for the baby.",
        whyOthers: {
          A: "Conducting the birth is beyond nursing scope and delays the skilled response the baby needs.",
          B: "Waiting half an hour with a distressed fetus trades minutes of brain for minutes of charting.",
          D: "Glucose does nothing for cord compression or hypoxia, and reassurance without escalation is abandonment.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Labour Monitoring",
        front: "State the 1-4-30 monitoring rule.",
        back: "Pulse every 1 hour; blood pressure and temperature every 4 hours; fetal heart and contractions every 30 minutes in active first stage (fetal heart every 5 minutes in second stage); urine checked at every void.",
      },
      {
        topic: "Labour Monitoring",
        front: "What does the WHO partograph alert line mean, and what crosses it trigger?",
        back: "The alert line marks minimum acceptable progress — about 1 cm of dilatation per hour from where plotting begins at 4-5 cm. Touching or crossing it means full reassessment and informing the team; the action line, four hours to the right, means a decision is overdue.",
      },
      {
        topic: "Labour Monitoring",
        front: "Why check urine at every void in labour?",
        back: "Each void is a free investigation: ketones flag dehydration and exhaustion, protein signals pre-eclampsia or infection, and a full bladder obstructs descent — while volume tracks hydration.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Policy and Guidelines",
        year: "2015",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Labour: The Nurse's Role",
    lessonTitle: "When Labour Needs Help: Recognition & Referral",
    description:
      "The labours that leave the script — prolonged and obstructed labour, fetal distress — and the calm choreography of recognising, stabilising and referring.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Recognise prolonged and obstructed labour and fetal distress using partograph and examination findings.",
      "Explain the three delays that turn complications into maternal deaths and how referral attacks them.",
      "Apply a structured referral — stabilise, call ahead with SBAR, document, escort — within the nurse's role.",
    ],
    tags: ["prolonged labour", "fetal distress", "referral", "sbar"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most labours care for themselves. A few quietly become emergencies, and the difference between a good outcome and a tragedy is usually not heroic rescue — it is early recognition and a well-run referral. In Ghana's three-delay reality, the nurse who notices at 2am and moves at 2:05 saves more lives than the one who performs one dramatic rescue at 6am.\n\nThis lesson is about the labours that leave the script, and the choreography — rehearsed, written, and calm — that moves a mother from a CHPS compound to a facility that can help her.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Prolonged labour** shows itself on the partograph: dilatation touching or crossing the alert line, then the action line. When you see it, work the **four Ps**. **Power** — are contractions adequate in frequency and strength? **Passenger** — is position or size the problem: a deflexed head, an occipito-posterior position, moulding rising? **Passage** — is there disproportion: no descent, a stuck station, growing caput? **Psyche** — fear, exhaustion, a full bladder, an empty stomach? A full bladder and an empty stomach have ended more labours than anatomy has: empty the bladder, feed and calm the mother, and reassess before concluding anything.\n\n**Obstructed labour** is arrest despite power — no further dilatation or descent with strong contractions, heavy moulding, rising caput, a bladder that will not drain. It is a referral problem, full stop: at CHPS level there is nothing to fix, and the cost of waiting is sepsis, rupture, fistula and stillbirth. **Fetal distress** we met in the last lesson: persistent heart rate outside 110-160, repetitive late decelerations, meconium with an abnormal heart — escalate, do not wait.\n\nWhen referral is needed, attack all **three delays**: deciding to seek care (honest counselling with the family), reaching care (transport, money, the pre-agreed driver), and receiving care (the call-ahead that has the receiving team ready before the vehicle arrives). Before she moves: stabilise — IV access and fluids per protocol, the bladder emptied, prescribed medicines given and timed, position managed. Then **call ahead with SBAR** — Situation, Background, Assessment, Recommendation — write the referral note in duplicate with vitals, findings, drugs and times, and never, ever send her alone: a trained escort travels with her.",
      },
      {
        type: "clinical_pearl",
        body: "Write the referral note as if the reader will never speak to you — because often they won't. Vitals with times, findings, drugs with doses and clock times, the partogram attached. A blank column in a referral note is a hole in the next team's care.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A first-time mother reaches your CHPS compound at 8pm, 5 cm dilatation, partograph started, fetal heart normal. At midnight she is 6 cm — on the alert line. At 4am she is still 6 cm, past the alert line; contractions are two in ten and weak; the head is at minus two with moulding +. Your compound cannot augment labour.\n\nWhat is the plan — and when should it have started?\n\nAnswer: The full reassessment should have begun at midnight when the alert line was crossed — the four Ps, the bladder emptied, the family informed. Now, with arrested dilatation, weak power and early moulding, she needs capability beyond the compound: call the district team, start IV access per protocol, empty the bladder, and transfer her with the partograph and a duplicate referral note while her condition is still good — plus an escort and a call-ahead with SBAR. Waiting four more hours risks an exhausted mother, an obstructed labour and a compromised baby — and a transfer in panic instead of in order. Document times: onset, recognition, call, departure.",
      },
      {
        type: "quiz_prompt",
        body: "Your labouring patient's dilatation has just crossed the action line at a CHPS compound. Name the four things you check under the four Ps before concluding the labour is obstructed — and the one humble cause you correct first.\n\nAnswer: Power (contraction frequency and strength), Passenger (position, flexion, moulding, size), Passage (descent, disproportion, caput), Psyche (fear, exhaustion, full bladder, empty stomach). Correct the humble causes first — especially the full bladder — then reassess before escalating.",
      },
      {
        type: "memory_trick",
        body: "The referral waltz is 1-2-3-4: Stabilise (lines, bladder, protocol drugs), Phone SBAR ahead, Paper in duplicate (partograph, times, doses), Escort with the woman. And the three delays — deciding, distance, door — every referral fights all three at once.",
      },
      {
        type: "summary",
        body: "- Prolonged labour is visible on the partograph: alert line = reassess the four Ps and inform; action line = a decision is overdue.\n- Obstructed labour = arrest despite power, with moulding, caput and no descent — refer; at CHPS level there is nothing to fix.\n- Fetal distress: persistent heart rate outside 110-160, repetitive late decelerations, meconium with an abnormal heart — escalate now.\n- Three delays: deciding to seek care, reaching care, receiving care — attack all three with counselling, transport planning and the call-ahead.\n- Refer well: stabilise first, SBAR call-ahead, duplicate note with times and doses, trained escort — never transfer a woman alone.",
      },
    ],
    questions: [
      {
        topic: "Labour Complications",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "A first-time mother at term has been in active labour for ten hours. Contractions are two in ten and weak; dilatation has not changed in four hours and is now past the action line; moulding is ++ and the head has not descended. The fetal heart is 144. What is the correct interpretation and action at your level?",
        options: [
          "Normal first labour — reassure the family and continue observations for four more hours",
          "Obstructed or severely prolonged labour — prepare for urgent referral with the partograph, IV access and a call-ahead",
          "Latent phase mislabelled as active — reset the partograph and wait",
          "Adequate contractions with slow cervix — encourage more pushing now",
        ],
        correctIndex: 1,
        explanation:
          "Arrest of dilatation and descent with weak power, heavy moulding and a crossed action line defines obstructed or severely prolonged labour needing augmentation capability or surgery — neither available at a compound. The normal fetal heart narrows, but does not cancel, the urgency: refer in order, not in panic.",
        whyOthers: {
          A: "Every marker — arrested progress, action line, moulding — argues against normality; four more hours risks rupture, sepsis, fistula and stillbirth.",
          C: "A partograph started at 5 cm with ten hours since cannot be reinterpreted as latent phase.",
          D: "Pushing before full dilatation injures the cervix, and power is the problem — not her effort.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Complications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What are the classic three delays that turn obstetric complications into maternal deaths?",
        options: [
          "Delay in diagnosis, treatment, and rehabilitation",
          "Delay in deciding to seek care, reaching care, and receiving adequate care once there",
          "Delay by the nurse, the doctor, and the family",
          "Delay in booking, delivery, and discharge",
        ],
        correctIndex: 1,
        explanation:
          "The three delays model names the decision to seek care, reaching an adequate facility, and receiving adequate care once there. Every good referral is designed to attack all three: counselling, transport, and the call-ahead.",
        whyOthers: {
          A: "That is a disease pathway, not the maternal three-delays model.",
          C: "The model describes phases of access, not blame of individuals.",
          D: "Booking-to-discharge timing is administrative, not the lethal triad.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Labour Complications",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are referring a labouring woman by ambulance. Which package must be complete before the vehicle leaves?",
        options: [
          "Nothing — transfer speed is everything, so leave immediately",
          "Only a written referral letter, since the receiving hospital will treat her",
          "A relative in the vehicle with bus fare for the family",
          "Stabilisation (IV access, bladder care, protocol drugs timed), a duplicate referral note with the partograph, an SBAR call-ahead and a trained escort",
        ],
        correctIndex: 3,
        explanation:
          "A good referral is choreography: stabilise before the rough road, write the note as if the reader will never speak to you, call ahead with SBAR so the team is waiting, and never let her travel without a trained escort. Speed matters — but speed without stabilisation and information is just bouncing a shocked woman down a road.",
        whyOthers: {
          A: "Unstabilised transfer converts a treatable complication into an arrived-dead one.",
          B: "A letter alone leaves the receiving team blind and the mother unstabilised.",
          C: "A relative is company, not clinical escort — someone skilled must travel with her.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Labour Complications",
        front: "What are the four Ps assessed when labour crosses the alert line?",
        back: "Power (contraction quality), Passenger (position, size, flexion, moulding), Passage (pelvic adequacy and descent), Psyche (fear, exhaustion, full bladder, empty stomach) — correct the correctable, then escalate.",
      },
      {
        topic: "Labour Complications",
        front: "What picture defines obstructed labour rather than slow progress?",
        back: "Arrest of dilatation and descent despite strong contractions, with heavy moulding, rising caput and no descent — the pelvis refusing the head. It needs referral for augmentation capability or surgery, never more waiting.",
      },
      {
        topic: "Labour Complications",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — a phone handover structure that tells the receiving team a story in under a minute.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Nurses and Doctors",
        year: "2017",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Birth & the Golden Minutes",
    lessonTitle: "The Birth & Immediate Newborn Care",
    description:
      "The first minutes of a new life — how you prepare the room, support the birth team, and become the first responder to a brand-new human being.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the nurse's preparation and support role during the second stage and birth.",
      "Explain the immediate care of the newborn — drying, warmth, skin-to-skin, cord care and the first feed.",
      "Apply the watchful-hour routine that detects early postpartum haemorrhage and newborn problems.",
    ],
    tags: ["immediate newborn care", "golden hour", "skin-to-skin", "birth"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Everything converges into about thirty minutes: the second stage, the birth, and the golden minutes that follow. The midwife or doctor conducts the birth itself — the hands that receive the baby are theirs. But around that moment stands a choreography the nurse owns: the room is warm because you checked it, the resuscitation corner works because you tested it, the mother is supported because you stayed at her side — and very often, the first trained hands on a new baby are yours.\n\nLearn your part so well that the whole team looks calm to the family. Calm is built from a sequence you can recite in your sleep.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Before the birth, prepare.** A warm room with no drafts, a clean delivery surface, a sterile cord-cutting blade and ties, two warm dry towels, a hat, a clock you can see, and a resuscitation corner you have checked — flat firm surface, self-inflating bag and the right-size mask, suction only if needed, a heat source. Suction is not routine; the bag and mask are the equipment that matters.\n\n**During the birth, support.** Help her into the position she has chosen, coach her breathing with the contractions, keep the bladder empty, keep the record running, and call for the attendant at the right time. If the attendant asks for an extra pair of hands, know where everything is without looking.\n\n**At the birth, respond to the newborn.** Dry the baby immediately and thoroughly, head to toe, and discard the wet towel — a wet baby cools frighteningly fast. Place the baby **skin-to-skin** on the mother's bare chest, cover both with a dry cloth, and put a **hat** on the head, where a newborn loses a large share of its heat. Look at breathing (normally 40-60 per minute), colour and tone — this is your first assessment, before any score. **Delayed cord clamping** of one to three minutes in a well baby gives the baby iron-rich blood; when it is clamped, the stump stays clean, dry and bare. Support the **first breastfeed within the hour** — colostrum is the first immunisation, and suckling releases oxytocin that keeps the uterus tight. Note the exact time of birth.\n\n**After the birth, run the watchful hour.** For the mother: uterine tone and bleeding at least every 15 minutes, with pulse and blood pressure; inspect the perineum when the attendant has finished; encourage a first void within six hours. A soft uterus with a heavy pad and a climbing pulse is bleeding announcing itself — rub the fundus firmly until it contracts, call for help, and start the drill. For the baby: warm, breathing, and feeding. Keep mother and baby together; separation without a reason undoes everything this hour builds.",
      },
      {
        type: "clinical_pearl",
        body: "A warm dry baby on a warm chest does more medicine in one hour than any bottle: it warms, steadies blood sugar, seeds friendly skin bacteria and squeezes the uterus tight through oxytocin. And colostrum is not 'bad milk' — it is the baby's first vaccine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Forty minutes after a normal birth, the mother says she feels wet. You lift the sheet: the pad is heavy, and the uterus is soft at the umbilicus. Her pulse is 104. The midwife is in the next room with another birth.\n\nWhat is happening, and what are your first actions as the nurse?\n\nAnswer: A soft fundus with heavy lochia and a rising pulse is uterine atony bleeding — postpartum haemorrhage. Call for help at once, and rub the fundus firmly through the abdominal wall until it contracts; empty the bladder if full (a full bladder blocks contraction); continue uterotonics as prescribed and available; start IV fluids if delegated; and reassess blood loss and vitals continuously. Bleeding usually stops with a firm uterus — the massage is not a courtesy, it is the first-line treatment. Chart the times, the findings and the response.",
      },
      {
        type: "memory_trick",
        body: "The golden hour belongs to the five Ts: Tone, Tears, Toilet, Temperature, Tummy-to-tummy — check the uterus, the perineum, the urine, the warmth of mother and baby, and skin-to-skin with feeding. Run the Ts every 15 minutes and the hour watches itself.",
      },
      {
        type: "summary",
        body: "- Prepare before the birth: warm room, clean surface, sterile cord blade, warm towels, hat, visible clock, and a tested resuscitation corner.\n- Support the birth: position, breathing, bladder care, records — and call the attendant in good time.\n- Newborn first response: dry immediately, skin-to-skin, hat on, check breathing 40-60, colour and tone; delay cord clamping 1-3 minutes in a well baby; first breastfeed within the hour.\n- Watchful hour for the mother: tone, bleeding and vitals at least every 15 minutes; soft uterus with heavy lochia = PPH — rub firm, call for help, escalate.\n- Keep mother and baby together; note the exact time of birth and chart everything.",
      },
    ],
    questions: [
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A healthy term baby is just born crying. What is the immediate care sequence?",
        options: [
          "Dry thoroughly, place skin-to-skin on the mother, cover both and put a hat on, then check breathing",
          "Suction the nose and mouth routinely, then bathe the baby to clean the vernix",
          "Clamp the cord within ten seconds and move the baby to a cot under a warmer",
          "Give glucose water before the first breastfeed",
        ],
        correctIndex: 0,
        explanation:
          "Drying, skin-to-skin, covering and a hat warm, stabilise and bond the baby — and position you for the first assessment of breathing, colour and tone. Routine suction, early bathing, early cord clamping and glucose water all harm more than they help.",
        whyOthers: {
          B: "Routine suction can injure the airway and is reserved for obstruction; bathing strips warmth and vernix.",
          C: "Immediate clamping deprives the baby of placental blood; separation from the mother costs warmth, stability and feeding.",
          D: "The first feed is colostrum at the breast — glucose water interferes with establishing milk supply.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How often should you assess uterine tone and bleeding in the first hour after birth?",
        options: [
          "At least every 15 minutes",
          "Once, at the end of the hour",
          "Only if the mother reports heavy bleeding",
          "Every four hours, as in labour",
        ],
        correctIndex: 0,
        explanation:
          "Mother and baby are assessed at least every 15 minutes in the early hours after birth — most postpartum haemorrhage declares itself in this window, and the trend is the warning.",
        whyOthers: {
          B: "A single end-of-hour check can miss an entire bleed — most PPH announces itself within the hour.",
          C: "Waiting for the mother to report invites late recognition; she may be exhausted or shy.",
          D: "Four-hourly is the labour schedule, not the post-birth watch.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Immediate Newborn Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Forty minutes after birth the mother's uterus is soft at the umbilicus, the pad is heavy, and her pulse is 110. What is your first action?",
        options: [
          "Wait ten minutes and re-examine",
          "Rub the fundus firmly until it contracts, call for help, and continue the response drill",
          "Start broad-spectrum antibiotics",
          "Document the finding and hand over at the end of shift",
        ],
        correctIndex: 1,
        explanation:
          "Uterine massage to contract the atonic uterus is the first and fastest treatment for postpartum haemorrhage — combined with an immediate call for help, emptying the bladder, further uterotonics per prescription, and continuous reassessment.",
        whyOthers: {
          A: "Waiting lets a treatable atony become a shock; the treatment begins with your hands immediately.",
          C: "Antibiotics treat infection, not tone — and sepsis is not the cause of a soft bleeding fundus in the first hour.",
          D: "Documentation matters, but after action — and never at the cost of the response itself.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Immediate Newborn Care",
        front: "What equipment must you check before every birth, wherever you work?",
        back: "Warm room and surface, two warm dry towels and a hat, sterile cord-cutting blade and ties, a visible clock — and a tested resuscitation corner: firm surface, self-inflating bag with correct mask size, suction available but not routine.",
      },
      {
        topic: "Immediate Newborn Care",
        front: "Name the five Ts of the golden hour.",
        back: "Tone (uterus), Tears (perineum), Toilet (first void by six hours), Temperature (warmth of mother and baby), Tummy-to-tummy (skin-to-skin and the first breastfeed) — repeated at least every 15 minutes.",
      },
      {
        topic: "Immediate Newborn Care",
        front: "Why does early breastfeeding help the mother as well as the baby?",
        back: "Suckling triggers oxytocin, which keeps the uterus contracted and reduces postpartum bleeding — while the baby receives colostrum, the first immunisation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "UNICEF",
        title: "Baby-Friendly Hospital Initiative: Implementation Guidance",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Birth & the Golden Minutes",
    lessonTitle: "Newborn Resuscitation: The First Breath",
    description:
      "The sixty seconds that decide everything — the steps you rehearse until they are reflexes, because when a baby will not breathe, the calmest hands in the room are often yours.",
    difficulty: "Hard",
    durationMin: 13,
    objectives: [
      "Describe the golden minute and the initial steps of newborn resuscitation.",
      "Explain how to start and improve positive pressure ventilation with a bag and mask.",
      "Apply escalation and post-resuscitation care, including honest communication with parents.",
    ],
    tags: ["resuscitation", "newborn", "golden minute", "ventilation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "About one baby in ten born in our region needs help to begin breathing — and almost all of them respond to simple steps done well in the first minute. This is the lesson where the nurse's role becomes most dramatic: the midwife is often still managing the mother — the uterus, the placenta, the bleeding — and the baby who will not breathe is placed in your arms. In that minute, you are the baby's whole team.\n\nThe skill is not exotic. It is warmth, a dry towel, a clear airway and, for a few babies, a bag and mask used well. Rehearse it until your hands know it without your head.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **golden minute**: by sixty seconds after birth, a baby who needs help should be receiving it — drying, stimulation and, if needed, ventilation under way. Before every birth, check the corner: warm surface, two dry towels, a self-inflating bag with a newborn mask that fits, suction available but not routinely used.\n\n**Step by step.** Dry the baby thoroughly and replace the wet towel — drying is stimulation. While you dry, look: is the baby breathing or crying, pink in the trunk, with good tone? Most babies pass here. A baby who is **not breathing, or only gasping**, needs action now. Position the head slightly extended — the sniffing position — open the mouth, and clear the airway only if something is blocking it; routine deep suction wastes time and can injure. Flick the soles, rub the back. Thirty seconds of warmth and stimulation is enough for most.\n\nIf breathing has not begun, **ventilate**: bag and mask on room air — oxygen is added only per senior guidance. Make the seal first — chin, then mouth, then nose with the right-sized mask — and squeeze about once every two seconds, roughly thirty breaths a minute, watching for a gentle rise of the chest. If the chest does not move, the ventilation is not working: reposition the head, re-seat the mask, check the mouth is open, try a little more pressure — then call for senior help. Assess after the first minute and at least every thirty seconds: breathing, heart rate by listening at the chest or feeling the cord stump, colour. A baby who begins breathing is dried again, given to the mother skin-to-skin with a hat, watched, and fed early. A baby who does not improve needs advanced help — an heart rate that stays very slow, or no improvement after effective ventilation, means call now, keep ventilating, and arrange transfer.\n\nThrough all of it, one rule governs the room: **anticipate and call early**. If you know a baby will be small, or the labour was long and bitter, have the second pair of hands present before the birth, not after.",
      },
      {
        type: "callout",
        title: "Two traps to avoid",
        body: "First, routine suction: it is reserved for a truly blocked airway — vigorous babies clear themselves, and rough suction of the throat can trigger spasm and bradycardia. Second, pressing oxygen at a baby who simply needs ventilation: air (21 percent) is the first gas for newborn resuscitation per WHO — the fix for a baby who is not breathing is breathing, delivered by your bag and mask.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A baby is born after a long, difficult second stage. You dry him and flick his soles. He is limp and makes two gasping movements. The midwife is managing a slow-bleeding uterus across the room. The clock reads fifteen seconds.\n\nWalk us through your next two minutes.\n\nAnswer: Position his head slightly extended, open the mouth, ensure nothing blocks the airway, and rub the back — but gasping is not breathing, so prepare to ventilate. By sixty seconds, apply the mask (chin first, then mouth, then nose), seal it, and squeeze about once every two seconds watching the chest. After thirty seconds of good chest movement, reassess: he begins to cry and his trunk pinks up — dry him again, place him skin-to-skin on the mother with a hat, and watch breathing and warmth closely. If instead he had not improved, your sequence would be reposition, re-seat, call for help, and keep ventilating while it comes. Tell the mother, in plain words, what happened and what you are doing — she is part of the team even when she is frightened.",
      },
      {
        type: "memory_trick",
        body: "The first-minute recipe is DRSV: Dry, Reassess breathing, Stimulate, Ventilate if needed. For the ventilation itself, 'seal before you squeeze, and watch the chest, not your hands' — a rising chest means breath going in; a still chest means fix the mask, the position or the pressure.",
      },
      {
        type: "summary",
        body: "- Golden minute: drying, stimulation and — if needed — ventilation should be under way within sixty seconds of birth.\n- Initial steps: dry thoroughly and replace the towel (drying is stimulation); assess breathing, colour and tone; position the head slightly extended; suction only for a truly obstructed airway.\n- Gasping or no breathing means ventilate: bag and mask on room air, good seal, about one breath every two seconds (roughly 30 a minute), watching for gentle chest rise.\n- Chest not moving? Fix seal, head position, open mouth, pressure — and call for senior help.\n- Anticipate: known risk (small baby, long labour, meconium, bleeding) means the extra hands are present before the birth.\n- After successful resuscitation: re-dry, skin-to-skin with hat, close observation, early feeding — and honest words to the parents. Babies who do not improve are kept ventilating while help and transfer are arranged.",
      },
    ],
    questions: [
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A term baby is born limp and not breathing. You have dried and stimulated him for thirty seconds with no change. What is the next step?",
        options: [
          "Deep suction of the throat and nose for thirty more seconds",
          "Start positive pressure ventilation with a bag and mask on room air",
          "Give oxygen by funnel while waiting for the doctor",
          "Wait for the APGAR score at one minute before intervening",
        ],
        correctIndex: 1,
        explanation:
          "A baby who is apnoeic or gasping after warmth, airway positioning and stimulation needs ventilation — bag and mask with room air, a good seal, gentle chest rise. This is the single intervention that revives most newborns.",
        whyOthers: {
          A: "Suction is only for obstruction; delay for a procedure the baby does not need costs brain.",
          C: "Blow-by oxygen does not breathe for a baby who is not breathing — ventilation does.",
          D: "APGAR describes condition; it never delays treatment. The golden minute is a clock, not a score.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Hard",
        stem: "You are ventilating a newborn but the chest is not moving at all. What is your sequence?",
        options: [
          "Stop ventilation and begin chest compressions",
          "Switch immediately to mouth-to-mouth respiration",
          "Reposition the head, re-seat the mask, ensure the mouth is open, then retry with slightly more pressure — and call for help if it still fails",
          "Increase the oxygen concentration and continue unchanged",
        ],
        correctIndex: 2,
        explanation:
          "A still chest means the breath is not entering — almost always a mask seal or head-position problem. Reposition, re-seat and retry before anything else, and escalate if effective ventilation still does not produce chest movement. Compressions come only after effective ventilation has been established and the heart rate remains very slow.",
        whyOthers: {
          A: "Compressions without air going in are useless — the problem is the airway, not the circulation.",
          B: "Bag-and-mask ventilation is safer and more effective than mouth-to-mouth for newborns.",
          D: "More oxygen cannot fix a blocked airway — air already contains all the oxygen the lungs need to receive.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Resuscitation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about routine care of the vigorous newborn is correct?",
        options: [
          "The nose and throat should be suctioned in every newborn to clear mucus",
          "Drying the baby thoroughly is itself effective stimulation to breathe",
          "The first bath should happen immediately to prevent infection",
          "The baby should be separated from the mother until fully pink",
        ],
        correctIndex: 1,
        explanation:
          "Vigorous babies clear their own airways — drying and warmth are both care and stimulation. Routine suction, immediate bathing and separation all add harm without benefit.",
        whyOthers: {
          A: "Routine suction is not recommended — it can cause spasm and slow the heart; reserve it for true obstruction.",
          C: "Early bathing strips warmth and vernix; bathing waits at least six hours, and longer for small babies.",
          D: "Skin-to-skin contact warms and stabilises — separation is the harmful choice.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Resuscitation",
        front: "What is the golden minute?",
        back: "By sixty seconds after birth, a baby needing help should be receiving it — drying, stimulation and, if still not breathing, positive pressure ventilation under way.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "How do you ventilate a newborn with a bag and mask?",
        back: "Room air, right-sized mask sealed chin first, then mouth and nose; head slightly extended; squeeze about once every two seconds (roughly 30 breaths a minute), watching for gentle chest rise. No rise? Fix seal, position and pressure before anything else.",
      },
      {
        topic: "Newborn Resuscitation",
        front: "When do you call for senior help in newborn resuscitation?",
        back: "Early and unashamed: before the birth when risk is anticipated; the moment ventilation is needed; and immediately if the chest does not move despite repositioning, or the heart rate stays very slow, or there is no improvement after effective ventilation.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guidelines on Basic Newborn Resuscitation",
        year: "2012",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Birth & the Golden Minutes",
    lessonTitle: "APGAR & the Newborn Examination",
    description:
      "Scoring the first minutes, then examining the whole small body from head to toe — what is reassuringly normal, and what needs action today.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain the APGAR score — its components, timing and correct interpretation.",
      "Perform a systematic head-to-toe newborn examination within the first day.",
      "Apply knowledge of benign findings versus red flags that need same-day escalation.",
    ],
    tags: ["apgar", "newborn examination", "screening", "assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two quiet rituals follow every birth: a score taken in the first minutes, and a head-to-toe examination done in the first day. Between them they answer two different questions — how is this baby *coping right now*, and is this baby *whole and well*? Both are often the nurse's to take, and both reward calm, systematic hands.\n\nThe APGAR takes sixty seconds. The examination takes ten unhurried minutes with the baby warm, fed and settled — a crying, cold baby on a hard trolley hides more than it shows.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**APGAR** is scored at **one and five minutes** — and repeated at ten if it stays low — across five signs, each 0, 1 or 2: **A**ppearance (colour: blue or pale 0, pink body with blue hands and feet 1, pink all over 2), **P**ulse (absent 0, below 100 1, 100 or more 2), **G**rimace (no response 0, some facial response 1, cough or active cry 2), **A**ctivity (limp 0, some flexion 1, active movement 2), **R**espiration (absent 0, slow or irregular 1, strong cry 2). Seven to ten is normal. The score is named for Virginia Apgar, and the five signs spell her name back for you: Appearance, Pulse, Grimace, Activity, Respiration. Take it at the bedside, in real time — never reconstructed later at the desk.\n\nInterpret it honestly: APGAR describes the baby's condition at that minute and how resuscitation is going — it guides action in the golden minutes and is repeated to track response. It is not a prophecy of intelligence or future health. A baby scoring low at one minute who climbs to eight at five minutes after ventilation has told you the treatment worked.\n\n**The examination**, within the first 24 hours: observe first — colour, breathing 30-60 per minute and quiet, tone, cry. Then work downward like rain, never sideways. Head: moulding and caput settle; a cephalhaematoma is bounded by one bone while caput crosses suture lines; fontanelles soft and flat. Eyes: a white or absent **red reflex** needs urgent referral. Mouth: inspect the palate for a cleft. Clavicles: crepitus after a difficult birth suggests fracture. Heart: feel the **femoral pulses** — absent or weak raises coarctation of the aorta. Abdomen: a liver edge 1-2 cm below the ribs is normal; the cord should be drying with **three vessels**. Genitals and anus: urine passed within the day, meconium within 24-48 hours. Hips: Ortolani and Barlow, done last with warm hands — a clunk or limited abduction needs orthopaedic review. Spine and skin: a sacral dimple with a hair tuft, and the harmless classics — milia, erythema toxicum, mongolian spots. Record weight, temperature, heart and respiratory rates, and confirm vitamin K and immunisations per policy.",
      },
      {
        type: "table",
        title: "APGAR at a glance",
        body: "| Sign | 0 | 1 | 2 |\n| --- | --- | --- | --- |\n| Appearance | Blue or pale | Pink body, blue hands and feet | Completely pink |\n| Pulse | Absent | Below 100 | 100 or more |\n| Grimace | No response | Grimace only | Cough, sneeze, active cry |\n| Activity | Limp | Some flexion | Active movement |\n| Respiration | Absent | Slow, irregular | Strong cry |\n\n7-10: reassuring · 4-6: the baby needs help — airway and breathing first, resuscitation under way · 0-3: full resuscitation now, never a spectator score.",
      },
      {
        type: "clinical_pearl",
        body: "Do the hips last, with warm hands and a calm baby — a cold, crying baby makes hips lie. And when you reassure, be specific: 'the spots on her nose are milk glands, the blue patch on his back is his birthmark, both are normal' — specifics calm a family better than 'fine'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You examine a term baby boy on day one. He is pink, feeding, warm at 36.9 C. Everything is normal until you lift your penlight to the eyes: the right eye shows a normal red reflex, the left a dull white reflection. His mother mentions the 'white eye' ran in an uncle's family.\n\nWhat is your finding, and what do you do?\n\nAnswer: A white or absent red reflex is never normal on day one — it raises congenital cataract (the family history strengthens this) or, less commonly, retinoblastoma, and needs same-day ophthalmological referral, because early surgery preserves vision. Document the rest of the examination as normal, reassure the mother you are acting early rather than in panic, and make sure the referral appointment is booked, not just advised.",
      },
      {
        type: "memory_trick",
        body: "Work like rain — top down, never sideways: Head (fontanelles, eyes, red reflex), Mouth and palate, Neck and clavicles, Chest and heart with femoral pulses, Tummy and cord (three vessels), Genitals and bottom (urine and meconium), Hips last with warm hands, Spine and Skin. If you can name the stations in order, you will never skip one.",
      },
      {
        type: "summary",
        body: "- APGAR at 1 and 5 minutes (repeated at 10 if low): Appearance, Pulse, Grimace, Activity, Respiration — each 0-2; 7-10 reassuring, 4-6 needs help, 0-3 full resuscitation.\n- APGAR guides action in the moment and tracks response to resuscitation — it does not predict the future.\n- Examine within 24 hours, baby warm and settled, good light, mother present: observe first, then head to toe like rain.\n- Benign classics: caput, milia, erythema toxicum, mongolian spots, palpable liver edge, moulding.\n- Same-day red flags: grunting or breathing 60 or more, central cyanosis, jaundice under 24 hours, absent red reflex, cleft palate, absent femoral pulses, hip that will not abduct, no urine by 24 hours or meconium by 48, cold floppy baby.\n- Record findings, vitals, vitamin K and immunisations — and be specific when you reassure.",
      },
    ],
    questions: [
      {
        topic: "APGAR",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A baby scores 8 at one minute and 9 at five minutes. How do you interpret this?",
        options: [
          "Reassuring — no resuscitation needed, continue routine care and observation",
          "Borderline — prepare for immediate transfer to a special care unit",
          "Abnormal — repeat the score every hour for six hours",
          "Impossible — five-minute scores are always lower than one-minute scores",
        ],
        correctIndex: 0,
        explanation:
          "Scores of 7-10 are normal: a healthy term baby adapting to life outside. Routine warmth, feeding and observation are the care; APGAR here simply confirms a baby who is coping.",
        whyOthers: {
          B: "A normal score never triggers transfer — watch for over-reaction to a reassuring number.",
          C: "Hourly APGAR repetition has no meaning; the score is a first-five-minutes tool.",
          D: "Scores usually rise between one and five minutes as the baby adapts — improvement is the expected direction.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During the first-day examination you note a swelling on the baby's head confined to one parietal bone, not crossing suture lines. What is it?",
        options: [
          "Caput succedaneum",
          "Cephalhaematoma",
          "A subdural haemorrhage",
          "A bulging fontanelle",
        ],
        correctIndex: 1,
        explanation:
          "A cephalhaematoma is bleeding under the periosteum, so it respects suture lines and stays on one bone; caput is scalp oedema and crosses sutures. Both settle, but cephalhaematoma can contribute to jaundice as it resolves — worth noting in your charting.",
        whyOthers: {
          A: "Caput is oedema of the presenting scalp and crosses suture lines.",
          C: "Subdural bleeding presents with neurological signs, not a tidy superficial swelling.",
          D: "A bulging fontanelle is a tense skull finding, not a bruise-like swelling on one bone.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Examination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must you palpate the femoral pulses in every newborn examination?",
        options: [
          "To assess the baby's temperature",
          "To screen for coarctation of the aorta before the duct closes",
          "To confirm the baby has passed urine",
          "To estimate the baby's blood pressure",
        ],
        correctIndex: 1,
        explanation:
          "Weak or absent femoral pulses raise coarctation of the aorta — a duct-dependent heart problem that can collapse a baby after day two. Feeling them on day one buys time: finding it means urgent cardiac referral.",
        whyOthers: {
          A: "Temperature is measured with a thermometer, not pulses.",
          C: "Urine passage is asked in the nappy history, not assessed by pulses.",
          D: "Palpating pulses does not estimate blood pressure — but their absence is a red flag for the heart.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "APGAR",
        front: "Name the five APGAR components with their timing.",
        back: "Appearance, Pulse, Grimace, Activity, Respiration — each scored 0, 1 or 2 at one and five minutes (repeated at ten if still low). 7-10 is normal.",
      },
      {
        topic: "Newborn Examination",
        front: "Caput succedaneum vs cephalhaematoma — the one-line difference?",
        back: "Caput is scalp oedema and crosses suture lines; cephalhaematoma is subperiosteal bleeding and respects suture lines (one bone only).",
      },
      {
        topic: "Newborn Examination",
        front: "Give four findings from the first-day examination that need same-day escalation.",
        back: "Absent red reflex (white eye), absent femoral pulses, cleft palate, jaundice in the first 24 hours — also grunting or breathing 60 or more, central cyanosis, hips that will not abduct, no urine by 24 hours, no meconium by 48 hours.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Caring After Birth",
    lessonTitle: "The Postnatal Period: What Normal Looks Like",
    description:
      "The body's six-week return journey — involution, lochia, milk and mood — and the nursing checks that confirm normal recovery at every contact.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the normal physiological changes of the puerperium, including involution and lochia.",
      "Explain the WHO postnatal contact schedule and what happens at each contact.",
      "Apply postnatal assessment to distinguish normal recovery from findings that need referral.",
    ],
    tags: ["puerperium", "postnatal assessment", "involution", "lochia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Birth is not the end of the story; it is the end of act one. Over six weeks the body dismantles nine months of change with astonishing speed — mostly at home, and mostly out of your sight. That is why the postnatal nurse works in two directions: assessing the mother in front of you, and teaching her what normal looks like so she raises her hand early when it does not.\n\nIn Ghana much of this care happens through postnatal contacts at the facility, the CHPS compound and child welfare clinics. Every contact is a check and a lesson at once.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Involution** is the headline: the kilogram uterus shrinks to about 60-70 grams in six weeks as muscle fibres break down. Track it — the fundus sits at the umbilicus after birth, falls about a centimetre a day, dips into the pelvis by day 10-12 and is no longer palpable by two weeks. Always palpate **after she empties her bladder**: a full bladder lifts and softens a perfectly well uterus. **Lochia** follows a colour story: **rubra** for three to four days, **serosa** to about day 10, then pale **alba** — total loss 250-500 mL, lasting up to four to six weeks, often a little heavier with activity and briefly during feeds.\n\nThe rest of the return: pregnancy fluid leaves by **diuresis** and night sweats in the first days — reassure her, she is not falling sick. Breasts move from immune-rich colostrum to mature milk around day three to five, driven by demand. Afterpains are normal, stronger in multigravidae and during breastfeeding. The cervix closes; the vagina regains tone — teach pelvic floor exercises. And menses may return from about six weeks if she is not exclusively breastfeeding — but **ovulation can precede the first period**, so family planning is counselled before discharge, not after the bleeding returns.\n\n**The contact schedule**: WHO recommends postnatal contacts **within 24 hours of birth, on day 3 (48-72 hours), between days 7 and 14, and at six weeks** — with extra contacts for small or unwell babies or mothers with complications. At each one, the nursing check is the same: temperature, pulse, blood pressure, fundal height and tenderness, lochia (amount, colour, smell), breasts and feeding, perineum or wound, urine and bowels, mood — and the baby: warmth, feeding, weight, cord, and danger signs. Most mothers never need more than this; the skill is spotting the few who do, which is the next lesson's whole job.",
      },
      {
        type: "table",
        title: "The postnatal diary you teach every mother",
        body: "| What | Normal | Come the same day if |\n| --- | --- | --- |\n| Fundus | At umbilicus day 1, ~1 cm lower each day, impalpable by 2 weeks | Higher than yesterday, soft, or tender |\n| Lochia | Rubra → serosa → alba over ~3 weeks; may increase with activity | Soaks a pad in an hour, clots, or returns bright red after settling |\n| Temperature | Up to 38 C in the first day, then normal | 38 C or more after the first day, with offensive lochia |\n| Breasts | Fullness when milk arrives, softening after feeds | One red hot painful segment with fever |\n| Mood | Weepy day 3-5, lifting within 2 weeks | Low mood beyond 2 weeks, or any thought of harm |",
      },
      {
        type: "clinical_pearl",
        body: "A fundus that is higher than yesterday asks you a question: full bladder, retained products or infection. Check the bladder first — it is the humblest cause and the easiest to fix — then reassess before you worry.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a day-3 contact, a mother tells you her bleeding is less than yesterday — one pad lasts the day — but her nightclothes are soaked each morning and she feels 'as if water is pouring from her skin'. She is eating well, feeding the baby, has no fever, and the fundus is four fingerbreadths below the umbilicus.\n\nWhat is happening, and what will you tell her?\n\nAnswer: This is postpartum diuresis — the body shedding the fluid of pregnancy through copious urine and night sweats — plus normal early involution and settling lochia. Reassure her warmly: this is recovery working, not illness. Encourage fluids to match the loss, keep feeding on demand, review hygiene and rest, and confirm the next contact. Teaching her the normal is what keeps her from paying a herbalist to treat a process that is going well.",
      },
      {
        type: "memory_trick",
        body: "Lochia runs a traffic light: Rubra (red — stop, days 1-4), Serosa (amber — slow, to about day 10), Alba (white — go, to about three weeks). And the fundus timetable — One-U-Ten-Sixty: umbilicus on day ONE, about 1 cm a day, behind the pubic bone by day TEN, SIXTY grams by six weeks.",
      },
      {
        type: "summary",
        body: "- Involution: fundus at the umbilicus after birth, about 1 cm per day descent, into the pelvis by day 10-12, impalpable by two weeks; always palpate after emptying the bladder.\n- Lochia: rubra (days 1-4), serosa (to ~day 10), alba (to ~3 weeks); may last to six weeks and vary with activity — offensive smell, clots or soaked pads are never normal.\n- Diuresis and night sweats shed pregnancy fluid in the first days; colostrum becomes mature milk around day 3-5; afterpains are healthy, strongest in multiparas.\n- Ovulation can precede the first menses — counsel family planning before discharge.\n- WHO postnatal contacts: within 24 hours, day 3, days 7-14, and six weeks (extra for at-risk pairs) — check vitals, fundus, lochia, breasts, perineum, urine, mood, and the baby at each one.",
      },
    ],
    questions: [
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother asks why her lochia is red-brown and heavier on day 2, then pinkish by day 6. What do you say?",
        options: [
          "This is infection and needs antibiotics",
          "This is retained placenta and needs evacuation",
          "This is normal — rubra gives way to serosa over the first weeks",
          "This is menstruation returning",
        ],
        correctIndex: 2,
        explanation:
          "Lochia runs rubra, then serosa, then alba over about three weeks — the colour change is the normal script; offensive smell, clots or soaked pads are the alarms.",
        whyOthers: {
          A: "Infection announces itself with fever and offensive smell, not a normal colour change.",
          B: "Retained products bring heavy bleeding and clots, not an improving flow.",
          D: "Menses returns weeks later, around six weeks or beyond if she is exclusively breastfeeding.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 6 after an uncomplicated birth you palpate the fundus midway between the umbilicus and the symphysis pubis. What is your interpretation?",
        options: [
          "Normal involution — the uterus is descending on schedule",
          "Subinvolution — arrange review for retained products now",
          "A sign of uterine rupture",
          "Proof of a twin pregnancy",
        ],
        correctIndex: 0,
        explanation:
          "Descending about a centimetre a day from the umbilicus puts the fundus roughly midway to the pubis by day 5-6 — a uterus keeping its timetable, not lagging behind it.",
        whyOthers: {
          B: "Subinvolution is a high, soft or tender fundus with heavy lochia — not an on-schedule descent.",
          C: "Rupture presents with pain, shock and bleeding in labour, not a routine day-6 finding.",
          D: "A twin uterus is over-distended before the birth; this is the normal post-birth shrink.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Puerperium",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which schedule reflects WHO's recommended minimum postnatal contacts for a mother and baby without complications?",
        options: [
          "One visit at six weeks only",
          "Within 24 hours, day 3, between days 7 and 14, and at six weeks",
          "Daily visits for two weeks, then monthly to a year",
          "At birth and at the first immunisation only",
        ],
        correctIndex: 1,
        explanation:
          "WHO 2022 recommends at least four contacts: within the first 24 hours, on day 3 (48-72 hours), between days 7 and 14, and at six weeks — with additional contacts for small, unwell or at-risk babies and mothers.",
        whyOthers: {
          A: "A single six-week check misses the days when bleeding, sepsis and feeding problems declare themselves.",
          C: "Daily visits for two weeks exceed any recommendation and are rarely feasible.",
          D: "Two contacts leave the highest-risk first week largely unwatched.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Puerperium",
        front: "Normal involution timeline?",
        back: "Fundus at the umbilicus right after birth, descending about 1 cm per day, into the pelvis by day 10-12, impalpable by two weeks; the uterus reaches 60-70 grams by six weeks. Palpate after she empties her bladder.",
      },
      {
        topic: "Puerperium",
        front: "Lochia phases and red flags?",
        back: "Rubra (red, days 1-4), serosa (pink-brown, to ~day 10), alba (pale, to ~3 weeks). Red flags: offensive smell, large clots, soaking a pad in an hour, or bright red flooding returning after settling.",
      },
      {
        topic: "Puerperium",
        front: "Why counsel family planning before discharge rather than after menses returns?",
        back: "Ovulation can precede the first period — often around 4-6 weeks postpartum — so a mother can conceive while still amenorrhoeic. The fence goes up before the gap opens.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Caring After Birth",
    lessonTitle: "Postnatal Danger Signs & Emergencies",
    description:
      "Bleeding, fever, headache and the sadness that will not lift — the postnatal red flags every family must know and every nurse must act on the same day.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "List the maternal postnatal danger signs and the emergency each one signals.",
      "Explain the first-response nursing actions for postpartum haemorrhage, sepsis and postpartum pre-eclampsia.",
      "Apply a structured fever work-up and safe referral for the deteriorating postnatal mother.",
    ],
    tags: ["postpartum haemorrhage", "puerperal sepsis", "danger signs", "emergency"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Most postpartum danger does not shout — it whispers. A headache dismissed as tiredness, a fever blamed on malaria, a heavy flow excused because the baby feeds often. Behind those whispers stand the great postpartum killers: haemorrhage, sepsis, pre-eclampsia and clots. Together with early mental health emergencies, they claim mothers in the very weeks when everyone has stopped worrying.\n\nThis lesson is the loud version: the signs that mean come now, which emergency each signals, and your first moves when a mother arrives at the CHPS compound with one at midnight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Bleeding**: soaking one pad in an hour, large clots, or bright red flooding returning after the flow had settled — postpartum haemorrhage, primary or secondary (after 24 hours, usually retained products or infection). First response: lie her down, empty the bladder, rub the fundus until firm, call for help, give uterotonics as prescribed, IV fluids if delegated, and arrange transfer if it does not settle. **Fever and offensive lochia**: 38 C or more, a bad-smelling flow, a tender uterus — **puerperal sepsis** until proven otherwise; work every postpartum fever through the five wells — womb, water (urine), wound, breast, and malaria in the blood — and refer for antibiotics early, because sepsis slides into shock within hours.\n\n**Severe headache, blurred vision, upper abdominal pain or convulsion**: postpartum pre-eclampsia or eclampsia — possible up to six weeks after birth, and highest risk in the first 48 hours. Keep her left lateral, give nothing by mouth if drowsy, treat per the magnesium sulphate protocol where available, and refer urgently with a call ahead. **Calf pain or swelling, or sudden breathlessness with chest pain**: possible deep vein thrombosis or pulmonary embolism — an emergency after caesareans, long tro-tro journeys and immobility. **A red, hot, painful breast with flu-like illness**: mastitis or abscess. And a mother who talks of harming herself or the baby: an emergency of the mind — never leave her alone, refer same-day.\n\nAt discharge, teach this list to whoever will be awake with her at night. The drumbeat is the six Bs: **Bleeding, Burning fever, Blinding headache, Bad-smelling flow, Breathlessness or swollen calf — and the quiet one, a mother who has stopped hoping.**",
      },
      {
        type: "clinical_pearl",
        body: "Any convulsion after birth is eclampsia until proven otherwise: airway open, left lateral position, nothing forced into her mouth, magnesium sulphate per protocol, and urgent referral — timed from the start of the fit, not from her arrival at your door.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman nine days postpartum is carried into your CHPS compound. Since morning she has had a pounding headache and blurred vision; her sister reports she briefly stiffened on the way. Blood pressure is 158/104 with proteinuria. There is no transport of her own.\n\nWhat is your sequence of actions?\n\nAnswer: This is late postpartum pre-eclampsia proceeding to eclampsia. Position her left lateral with the airway clear; nothing into the mouth if she fits again; secure IV access and give magnesium sulphate per protocol if available at your level; catheterise and chart urine output and reflexes per the protocol; then activate your emergency referral plan — call the receiving hospital ahead with SBAR and organise transport through district or community arrangements. Document times: onset, arrival, treatment given, departure. The family has already made the first delay — your job is to make sure the second and third delays never happen.",
      },
      {
        type: "quiz_prompt",
        body: "A mother on day 6 has a fever of 38.6 C. Before you conclude anything, which five sources of fever will you examine in order?\n\nAnswer: The five wells — the womb (tender? offensive lochia?), the water (urine — dysuria, flank pain?), the wound (perineal or caesarean site — red, hot, discharging?), the breast (red painful segment?), and the blood (malaria test per protocol). Examine all five before choosing treatment.",
      },
      {
        type: "memory_trick",
        body: "Drum the come-now list into every family: BLEEDING, BURNING (fever), BLINDING headache or blurred vision, BAD-smelling flow, BREATHLESS or swollen calf — and the quiet one, a mother who has stopped hoping. Six Bs, one heartbeat each.",
      },
      {
        type: "summary",
        body: "- Bleeding: a pad an hour, clots, or flooding returning after settling = postpartum haemorrhage — lie her down, empty the bladder, rub the uterus firm, call for help, transfer if not settling.\n- Fever 38 C or more with offensive lochia or a tender uterus = puerperal sepsis until excluded — work the five wells (womb, urine, wound, breast, malaria) and refer for antibiotics early.\n- Headache, vision change or convulsion after birth = pre-eclampsia/eclampsia risk up to six weeks — left lateral, magnesium sulphate per protocol, urgent referral.\n- Calf pain, swelling or sudden breathlessness = possible thromboembolism — emergency transfer, especially after caesarean or long journeys.\n- Mastitis: red painful breast with flu-like illness; thoughts of harm are a mental health emergency — never leave her alone.\n- Teach the six Bs to whoever is awake with her at night, before discharge.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Emergencies",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "A mother phones the CHPS compound: since noon she has soaked one pad every hour, nine days after an otherwise normal birth. What do you advise, and what is your working diagnosis?",
        options: [
          "Normal lochia — review at the six-week visit",
          "Secondary postpartum haemorrhage, most likely retained products — come now; lie down and arrange urgent transport",
          "Her period has returned — reassure and monitor at home",
          "Heavy bleeding from too much activity — advise bed rest and review tomorrow",
        ],
        correctIndex: 1,
        explanation:
          "Soaking a pad an hour is abnormal at any point in the puerperium. Nine days out, bright heavy bleeding is secondary postpartum haemorrhage — usually retained placental tissue, often with infection — needing same-day assessment and likely evacuation. She comes now, lying down, with transport arranged while you call ahead.",
        whyOthers: {
          A: "No stage of lochia soaks a pad an hour — this is the single most dangerous reassurance in the puerperium.",
          C: "Menses does not return around day 9, and periods do not soak pads hourly.",
          D: "Tomorrow turns a treatable bleed into a shock state — activity advice is not treatment.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Postnatal Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 9 after a normal birth a mother reports severe headache and blurred vision, no fever. What must you treat this as first?",
        options: [
          "Normal postnatal tiredness — advise rest",
          "Migraine — give simple analgesia at home",
          "Malaria — test and treat as an outpatient",
          "Postpartum pre-eclampsia — check blood pressure and refer urgently today",
        ],
        correctIndex: 3,
        explanation:
          "Severe headache with visual disturbance after birth points to postpartum pre-eclampsia until excluded — check the blood pressure and dip the urine, then refer urgently. Dismissing it as tiredness, migraine or malaria is exactly how late eclampsia deaths happen.",
        whyOthers: {
          A: "Tiredness does not blur vision — the combination is a pre-eclampsia signature.",
          B: "Treating a headache without checking the pressure is a gamble with a fitting mother.",
          C: "Malaria may coexist, but the visual symptom demands the pressure check first.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Postnatal Emergencies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two weeks after a caesarean and a long tro-tro journey, a mother develops sudden breathlessness and chest pain. What does this signal?",
        options: [
          "Anaemia from the operation — start oral iron",
          "Possible pulmonary embolism — an absolute emergency requiring immediate transfer",
          "Simple exhaustion — she needs a week of bed rest",
          "Early asthma — give a salbutamol inhaler and review next week",
        ],
        correctIndex: 1,
        explanation:
          "Sudden breathlessness with chest pain after recent surgery, travel or immobility is pulmonary embolism until excluded — a leading cause of late maternal death. She needs emergency transfer with oxygen on the way; bed rest, iron or an inhaler gamble with her life.",
        whyOthers: {
          A: "Anaemia causes gradual breathlessness, not sudden chest pain.",
          C: "Bed rest worsens venous stasis — and delays the diagnosis that matters.",
          D: "New-onset asthma does not start with post-operative sudden chest pain; the timing screams clot.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Emergencies",
        front: "State the pad rule for postpartum bleeding.",
        back: "Soaking one pad in an hour — with or without clots — is abnormal bleeding at any time in the puerperium and means come now.",
      },
      {
        topic: "Postnatal Emergencies",
        front: "Until when can postpartum eclampsia occur, and when is risk highest?",
        back: "Up to six weeks after birth, with risk highest in the first 48 hours — headache, vision change or convulsion after delivery is eclampsia until excluded.",
      },
      {
        topic: "Postnatal Emergencies",
        front: "Name the five wells examined in any postpartum fever.",
        back: "The womb (endometritis), the water (urinary infection), the wound (perineal or caesarean site), the breast (mastitis) — and malaria in the blood. Examine all five before diagnosing.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Nurses and Doctors",
        year: "2017",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage",
        year: "2022",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Caring After Birth",
    lessonTitle: "Postnatal Mental Health",
    description:
      "Tears on day four can be normal; hopelessness at week four is not. Noticing the mother behind the baby — blues, depression and the rare emergencies of the mind.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe baby blues, postpartum depression and puerperal psychosis with their distinguishing features.",
      "Explain simple screening questions and supportive nursing actions at postnatal contacts.",
      "Apply safety rules for mothers with thoughts of harm, including same-day referral.",
    ],
    tags: ["mental health", "baby blues", "postpartum depression", "screening"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The puerperium moves the mind as surely as the uterus. Hormones fall off a cliff after the placenta is born, sleep shatters, and tearfulness arrives so often we gave it a name: the baby blues. For most mothers this passes by itself in days.\n\nBut some tears are the edge of something deeper, and in Ghana — where every new mother is expected to smile through the visitors, and where 'she is just tired' ends many conversations — depression after birth is common, treatable and tragically missed. The nurse who asks one extra question at each contact is often the only person who asks at all.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Baby blues** visit up to 80 percent of mothers, typically on day three to five: sudden tears, irritability, feeling overwhelmed, up one hour and down the next — with function intact between spells. It fades within about two weeks and needs no treatment: sleep, food, kindness, reassurance and a review date.\n\n**Postpartum depression** affects roughly one in ten mothers, beginning within weeks and lasting beyond two weeks: low mood most of the day, loss of enjoyment, guilt about being a 'bad mother', poor function, changes in sleep and appetite — sometimes thoughts that the baby or family would be better off without her. It needs treatment and follow-up, and risk rises with past depression, poor support, an unplanned pregnancy or a sick baby. **Puerperal psychosis** is rare — one to two mothers in a thousand — but is an emergency: confusion, strange beliefs, hallucinations and rapid mood swings, usually within the first two weeks. Same-day psychiatric referral, and mother and baby are not left alone.\n\nYour tools are simple and powerful. At every postnatal contact, ask two gentle questions — 'How has your mood really been, beyond the visitors?' and 'Who helps you at night?' — and listen longer than you speak. Tools like the **Edinburgh Postnatal Depression Scale** can guide referral where available. Practical medicine matters too: protect her sleep (one protected night taken by a trusted relative can change a week), involve family with her consent and never with judgement, and treat any talk of harm to herself or the baby as a same-day emergency — never left alone, never dismissed as attention.",
      },
      {
        type: "clinical_pearl",
        body: "Sleep protects the postnatal mind. A mother who has not slept more than three-hour stretches for weeks is not weak when she crumbles — arranging one protected night, taken by a trusted relative, is sometimes the most therapeutic thing your team can do.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two mothers attend your day-10 clinic. Maame, five days postpartum, cries when visitors leave and laughs with the baby an hour later. Serwaa, four weeks postpartum, has stopped going to market, says the baby would be better off with another mother, and has eaten little for days.\n\nWhich one reassures you, and what do you do for the other?\n\nAnswer: Maame's pattern — day 5, tearful spells that come and go, function intact — is classic baby blues: support, protect sleep, reassure, review at two weeks. Serwaa's picture crosses every line: four weeks of low mood with loss of function, appetite loss, and a statement that the baby would be better off without her. That is postpartum depression with possible thoughts of harm — arrange same-day referral, ask her directly and kindly about thoughts of harming herself or the baby, and in the meantime ensure she is never alone with the baby. Involve a supportive family member with her consent, and follow up — the referral is the beginning of her care, not the end of your involvement.",
      },
      {
        type: "memory_trick",
        body: "Sort them by the 3 B's and the 3 D's: Blues are Brief, arrive around day 3, and Benign — sleep and kindness suffice. Depression is Deep, present Daily beyond two weeks, and Disabling. And psychosis is a different planet — confusion and delusions within two weeks mean emergency referral today.",
      },
      {
        type: "summary",
        body: "- Baby blues: up to 80 percent of mothers, days 3-5, settles within about two weeks — support, sleep, reassurance.\n- Postpartum depression: about 1 in 10, mood low beyond two weeks with poor function — needs treatment and follow-up; risk rises with past depression, poor support, unplanned pregnancy, or a sick baby.\n- Puerperal psychosis: 1-2 per 1000, within the first two weeks — confusion, delusions, hallucinations: same-day psychiatric referral, never leave mother and baby alone.\n- Screen at every contact with two questions: how has your mood really been, and who helps you at night? Edinburgh scale where available.\n- Protect sleep, involve family with consent and without judgement, and treat any thought of harm as a same-day emergency.",
      },
    ],
    questions: [
      {
        topic: "Postnatal Mental Health",
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
        whyOthers: {
          B: "Third-month low mood is not the blues — it deserves a depression assessment.",
          C: "Months of tearfulness until weaning is not normal and should never be dismissed.",
          D: "Blues follow any birth, vaginal or caesarean.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Postnatal Mental Health",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "Which statement from a postnatal mother must trigger urgent same-day referral, with her never left alone in the meantime?",
        options: [
          "I cry whenever the visitors leave",
          "I am so tired every evening",
          "I worry I am not a good mother yet",
          "The baby would be better off without me",
        ],
        correctIndex: 3,
        explanation:
          "A statement that the baby would be better off without her suggests thoughts of self-harm or infant harm in postpartum depression — an immediate safety situation: same-day referral, direct and kind questioning about harm, and constant company until care begins. The other statements fit the blues and normal adjustment.",
        whyOthers: {
          A: "Tearful spells with intact function are classic day 3-5 blues.",
          B: "Tiredness is near-universal and deserves support, not emergency referral by itself.",
          C: "Worrying about being a good mother is a common adjustment thought — watch it, but it is not an emergency.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Postnatal Mental Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother two weeks postpartum is confused, not sleeping at all, and says voices are telling her the baby is not hers. What is your action?",
        options: [
          "Reassure the family it is the baby blues",
          "Advise more rest and review at six weeks",
          "Puerperal psychosis — urgent same-day referral, never leaving her alone with the baby",
          "Start her on iron tablets for fatigue",
        ],
        correctIndex: 2,
        explanation:
          "Confusion, delusions and total insomnia within the first two weeks point to puerperal psychosis — a psychiatric emergency needing urgent referral and protection of mother and baby, not reassurance, a six-week wait or vitamins.",
        whyOthers: {
          A: "The blues never bring confusion or hallucinations — this is a different illness.",
          B: "Waiting six weeks with untreated psychosis risks tragedy for mother and baby.",
          D: "Iron treats anaemia, not an acute psychiatric emergency.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Postnatal Mental Health",
        front: "Give two features that separate postpartum depression from the blues.",
        back: "Depression lasts beyond two weeks and disables daily function — plus possible thoughts of hopelessness or harm; the blues are brief with mood that still lifts between spells.",
      },
      {
        topic: "Postnatal Mental Health",
        front: "What are your two screening questions at every postnatal contact?",
        back: "'How has your mood really been, beyond the visitors?' and 'Who helps you at night?' — listen longer than you speak, and use the Edinburgh scale where available.",
      },
      {
        topic: "Postnatal Mental Health",
        front: "Name the emergency among postnatal mood disorders and its hallmark features.",
        back: "Puerperal psychosis — 1-2 per 1000 mothers, within the first two weeks: confusion, delusions, hallucinations, profound insomnia; refer same-day and never leave mother and baby alone.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Depression Fact Sheet",
      },
      {
        organization: "Ghana Health Service",
        title: "Mental Health Gap Action Programme (mhGAP) Adaptation for Ghana",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Caring After Birth",
    lessonTitle: "Immunization & the Postnatal Visit Schedule",
    description:
      "Vitamin K, the first vaccines, and the stitchwork of visits that connects a newborn to a lifetime of protection — dates every nurse must teach plainly.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the newborn care essentials given at or soon after birth.",
      "Outline Ghana's immunization schedule as recorded in the child health booklet.",
      "Apply the postnatal visit schedule to keep mother and baby protected and defaults caught early.",
    ],
    tags: ["immunization", "epi schedule", "postnatal visits", "child welfare"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two calendars begin on the day a baby is born. One belongs to the mother — the postnatal visits that watch her recover. The other belongs to the child — a stitchwork of immunisation dates and welfare-clinic visits that will protect her for a lifetime. The nurse is the keeper of both calendars, and the teaching you do in the first days decides whether a family keeps them.\n\nThe most important book a Ghanaian family owns in these months is small, often faded and frequently lost: the **child health record booklet**. Treat it like the treasure it is — every date you write in it is a promise.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**At or soon after birth**, three protections are routine: a single intramuscular dose of **vitamin K** to prevent haemorrhagic disease of the newborn; **eye care** per national protocol to prevent ophthalmia neonatorum; and the first immunisations — **BCG**, the tuberculosis vaccine into the left upper arm, and **oral polio vaccine dose zero**. Confirm and record each one; if any is missed, arrange it before discharge or at the first contact.\n\n**The Ghana EPI schedule** then builds in layers — record the dates in the booklet and teach the mother to read them. The core series begins at **six weeks**: pentavalent vaccine (diphtheria, pertussis, tetanus, hepatitis B and Hib), further oral polio doses, pneumococcal conjugate vaccine and rotavirus vaccine — given at **six, ten and fourteen weeks** (rotavirus per the current schedule). **Measles-rubella** follows at **nine months**. Vitamin A supplementation and deworming come later in infancy per the child health schedule. Schedules are updated from time to time — always teach from the current booklet, not from memory alone.\n\n**The visit schedule** stitches it together: WHO postnatal contacts at within 24 hours, day 3, days 7-14 and six weeks — then the child welfare clinic becomes the child's home base, with growth monitoring at every visit. At the six-week postnatal visit the mother receives her full check, her family planning counselling, and the baby's first EPI series — one visit, three services. Teach the family to keep the booklet in a safe plastic sleeve, to bring it to every visit, and what to do about fever after vaccination (a common, mostly harmless event — comfort, fluids, and same-day review if the baby is otherwise unwell). Trace defaulters kindly: missed dates are usually poverty, distance or forgetting, not neglect.",
      },
      {
        type: "table",
        title: "The protection calendar you teach",
        body: "| Age | What the baby receives | What the visit also does |\n| --- | --- | --- |\n| At birth | Vitamin K, eye care, BCG, OPV-0 | Newborn examination, breastfeeding support |\n| 6 weeks | Pentavalent 1, OPV, PCV, rotavirus (per schedule) | Mother's postnatal check + family planning counselling |\n| 10 and 14 weeks | Next doses in the series | Growth monitoring, feeding review |\n| 9 months | Measles-rubella | Weight, development check |\n| Every CWC visit | Weighing and plotting | Danger-sign teaching, defaulter catch-up |",
      },
      {
        type: "clinical_pearl",
        body: "The six-week visit is the hinge of the whole system: mother's check, family planning and the baby's first vaccines in one appointment. If a family can only be persuaded to keep one date perfectly, make it that one — then let the booklet carry the rest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At discharge, Ama's mother-in-law says the family will be travelling to their village for the outdooring and will 'start the injections later, after the ceremony'. The baby is three days old and has received vitamin K, BCG and OPV-0.\n\nWhat do you teach, and what do you arrange?\n\nAnswer: Congratulate the ceremony first — respect opens ears. Then show the booklet: the next doses are due at six weeks, and the calendar will still be waiting when they return. Arrange the nearest child welfare clinic to the village so the six-week visit can happen there, and write its name in the booklet. Teach the danger signs for the journey (poor feeding, fast breathing, fever or cold, yellow eyes), remind them to keep the booklet dry in a plastic sleeve — and use teach-back: 'Tell me the three signs that bring her straight to a clinic.'",
      },
      {
        type: "memory_trick",
        body: "The protection calendar: B-C-O at birth (BCG and oral polio), the six-ten-fourteen train carries pentavalent, PCV and polio further, rotavirus rides along, and measles-rubella waits at nine months. And the hinge is the six-week visit: mother's check, family planning, first vaccines — one date, three services.",
      },
      {
        type: "summary",
        body: "- Newborn essentials at birth: vitamin K, eye care per protocol, BCG and OPV-0 — confirm and record each.\n- Ghana EPI core series: pentavalent, polio, PCV and rotavirus at 6, 10 and 14 weeks; measles-rubella at 9 months — always teach from the current child health booklet.\n- Postnatal contacts (within 24h, day 3, days 7-14, six weeks) hand over smoothly to child welfare clinic visits with growth monitoring.\n- The six-week visit is the hinge: mother's check, family planning and the baby's first vaccine series in one appointment.\n- Fever after vaccination is usually mild and expected — comfort, fluids, review if otherwise unwell; trace defaulters kindly, and teach every family to guard the booklet.",
      },
    ],
    questions: [
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which vaccines are typically given to a Ghanaian newborn at birth?",
        options: [
          "Measles-rubella and pentavalent",
          "BCG and oral polio vaccine dose zero",
          "Rotavirus and pneumococcal conjugate",
          "Yellow fever and tetanus",
        ],
        correctIndex: 1,
        explanation:
          "At birth, Ghana's schedule gives BCG (left upper arm) and OPV-0, alongside vitamin K and eye care. The pentavalent, PCV and rotavirus series begins at six weeks, and measles-rubella waits until nine months.",
        whyOthers: {
          A: "Measles-rubella comes at nine months; pentavalent starts at six weeks.",
          C: "PCV and rotavirus begin at six weeks, not at birth.",
          D: "Neither is a routine newborn vaccine in Ghana's EPI.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother brings a six-week-old to the postnatal clinic. Which combination of services should this single visit deliver?",
        options: [
          "Mother's postnatal check, family planning counselling, and the baby's first EPI doses",
          "Only the baby's vaccines — the mother was seen at birth",
          "Only the mother's check — vaccines wait until three months",
          "Nothing — six weeks is too early for any service",
        ],
        correctIndex: 0,
        explanation:
          "The six-week visit is the designed hinge of the system: the mother's full postnatal check, her family planning counselling, and the start of the baby's six-week vaccine series — one journey, three protections.",
        whyOthers: {
          B: "The mother needs her six-week check — fundus, lochia, mood, blood pressure — and family planning counselling.",
          C: "Vaccines begin at six weeks, not three months — delaying them opens the risk window.",
          D: "Six weeks is exactly the designed time for all three services.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Immunization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A baby has a mild fever and fretfulness the evening after a vaccine dose. What is your advice to the mother?",
        options: [
          "It is a vaccine failure — bring the baby for admission tonight",
          "This is a common, usually mild reaction — extra fluids, comfort, and same-day review if the baby feeds poorly, breathes fast or looks much worse",
          "Never continue the series — this baby cannot tolerate vaccines",
          "Give the baby antibiotics to prevent infection",
        ],
        correctIndex: 1,
        explanation:
          "Low-grade fever and fussiness in the first day or two after vaccination are common and mostly harmless: comfort, fluids and breastfeeding, with review if danger signs appear — poor feeding, fast breathing, or a generally unwell baby.",
        whyOthers: {
          A: "Mild fever is an expected response, not failure — admission is not needed.",
          C: "Mild reactions are not a contraindication to future doses — stopping the series leaves the baby unprotected.",
          D: "Antibiotics do nothing for vaccine fever and breed resistance.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Immunization",
        front: "What protections does a newborn receive at birth in Ghana?",
        back: "Vitamin K injection, eye care per national protocol, BCG vaccine (left upper arm) and oral polio vaccine dose zero — each confirmed and recorded in the child health booklet.",
      },
      {
        topic: "Immunization",
        front: "When does the core EPI series start, and which vaccines does it include?",
        back: "At six weeks — pentavalent (DPT, hepatitis B, Hib), oral polio, pneumococcal conjugate and rotavirus vaccines, repeated at ten and fourteen weeks (rotavirus per current schedule); measles-rubella at nine months.",
      },
      {
        topic: "Immunization",
        front: "Why is the six-week postnatal visit called the hinge of the system?",
        back: "One visit delivers three services: the mother's full postnatal check, family planning counselling, and the baby's first vaccine series — the highest-value appointment a family keeps.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunization — National Schedule",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
      },
      {
        organization: "UNICEF",
        title: "Facts for Life",
        year: "2010",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Newborn Feeding & Care",
    lessonTitle: "Breastfeeding: The First Food",
    description:
      "The first feed in the first hour, attachment you can see across the room, and the day-two worries you can answer — the practical craft of making breastfeeding work.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe correct positioning and attachment at the breast with their observable signs.",
      "Explain newborn feeding behaviour and the markers of effective milk transfer.",
      "Apply solutions to the common early breastfeeding problems families bring to you.",
    ],
    tags: ["breastfeeding", "attachment", "lactation", "feeding problems"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Breastfeeding is natural, but it is also a learned dance between two beginners — a mother who has never fed this way and a baby who has never fed at all. Most first-week 'breastfeeding problems' are positioning problems you can fix at the bedside, with your own two hands and ten unhurried minutes.\n\nIn Ghana you also fight myths: that colostrum is dirty and must be expressed away, that a crying baby needs water, that big babies need formula from the first week. This lesson gives you the craft and the words — and the confidence to know that supporting breastfeeding is frontline nursing work, the foundation of Baby-Friendly practice.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start at the start: the first feed **within one hour of birth**, baby skin-to-skin, rooting to the breast — colostrum is concentrated immunity, the baby's first immunisation and a natural laxative to clear meconium. Nothing else should pass his lips: no water, no formula, no pacifiers. WHO recommends **exclusive breastfeeding for six months**, with continued breastfeeding to two years and beyond.\n\nGood **attachment** is visible from across the room: a wide gape, chin pressed into the breast, **more areola showing above the nipple than below**, lips flanged out, round cheeks, and rhythmic sucking with swallows. It should be comfortable — pain past the first seconds means a shallow latch; break the seal with a clean finger and re-attach. **Positioning** is the mother's frame: ear, shoulder and hip in one line, tummy to tummy, whole body supported, nose level with the nipple so he tilts and takes a big mouthful as he gapes.\n\nRead the baby, not the clock: **8-12 feeds in 24 hours**, roused by early cues — stirring, mouth opening, hands to face — because crying is a late and harder cue. Evidence that it is working: audible swallows, **six or more heavy wet nappies by day five**, stools turning yellow and seedy by day four to five, and birth weight regained by day 10-14. The day-two 'no milk' cry is usually physiology — milk volume rises on days two to four — so answer it with more feeds, fluids for the mother and encouragement, not formula.\n\nThe common problems, each with a first-line answer: **sore nipples** mean attachment — re-latch; **engorgement** means frequent feeds with warmth before and cold after; **a sleepy jaundiced baby** needs waking, expressing and cup feeding until stronger; **a blocked duct or mastitis** needs continued feeding from the affected side plus medical review if fever and redness persist. And when a mother must be separated from her baby — illness, work, prematurity — teach **expressing** by hand and cup feeding, so the milk and the skill both survive.",
      },
      {
        type: "clinical_pearl",
        body: "Watch the jaw and listen for the swallow — you can diagnose attachment across the room. If feeding hurts past the first ten seconds, it is wrong, however good it looks; detach and start again.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother on day two is in tears at 2am: the baby 'cries all night' and her 'milk has not come'. The night staff have already suggested formula. On examination the baby feeds with shallow, quick sucks, the mother winces, and his lips are tucked in. One wet nappy today; a meconium stool this morning. Weight is down 8 percent from birth.\n\nWhat is going on, and what do you do tonight?\n\nAnswer: Poor attachment is driving the whole story — painful shallow feeding removes less milk, so less is made; the 8 percent weight loss and single wet nappy confirm under-intake, and the night crying is hunger. Fix the latch tonight: unhurried skin-to-skin, wide gape, chin deep, more areola above, lips flanged — and let him feed frequently through the night. Reassure her that milk volume rises over the next day or two and effective feeds are what bring it — formula is not the first answer, only a considered supplement if weight still fails with good support. Review feeds, wet nappies and weight in the morning, and document the plan and the feeding support given.",
      },
      {
        type: "memory_trick",
        body: "Attachment: CHINS — Chin touching, Head tilt with wide gape, In for a big mouthful, Nipples comfortable, Suckles with swallows. Answer the day-two cry with the three Fs: Frequency, Fluids for mother, Feedback on weight — no formula first.",
      },
      {
        type: "summary",
        body: "- First feed within one hour, skin-to-skin; colostrum is the first immunisation — no water, no formula, no pacifiers.\n- Exclusive breastfeeding for six months, continued to two years and beyond (WHO).\n- Positioning: ear-shoulder-hip in a line, tummy to tummy, nose level with the nipple; attachment: wide gape, chin deep, more areola above than below, flanged lips, rhythmic swallows, no pain.\n- Feed 8-12 times daily on early cues — stirring, rooting, hands to mouth; crying is a late cue.\n- Working well: six or more heavy wet nappies by day five, yellow stools by day four to five, birth weight regained by day 10-14, audible swallows.\n- Sore nipples = attachment; engorgement = frequent feeds; day-two 'no milk' = physiology — answer with frequency, fluids and support; express and cup-feed when mother and baby must be separated.",
      },
    ],
    questions: [
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which sign tells you a baby is well attached at the breast?",
        options: [
          "More areola visible above the nipple, with the chin pressed into the breast",
          "Only the nipple held between tightly pressed lips",
          "Quick, shallow suckling with clicking sounds",
          "The mother wincing with pain at every feed",
        ],
        correctIndex: 0,
        explanation:
          "Deep attachment shows as a wide gape with the chin pressed in and more areola covered below than above — the baby draws breast tissue over the milk ducts rather than chewing the nipple. Nipple-only latch, clicking and pain all point to shallow attachment needing re-latching.",
        whyOthers: {
          B: "Nipple-only latch is the classic shallow attachment that damages nipples and removes little milk.",
          C: "Clicking suggests a lost seal; swallows with round cheeks are what good feeding sounds like.",
          D: "Pain beyond the first seconds is a diagnostic sign of poor attachment, not a normal feature.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation on day five best reassures you that breastfeeding is going well?",
        options: [
          "The baby feeds for exactly ten minutes on each side",
          "The baby sleeps six hours without waking for a feed",
          "Six or more heavy wet nappies in 24 hours with yellow, seedy stools",
          "The mother's breasts have become soft and small again",
        ],
        correctIndex: 2,
        explanation:
          "Output is the evidence: by day five a well-fed baby produces six or more heavy wet nappies and yellow stools, showing milk transfer is adequate. Clock-based feeds, long sleeps and breast feel are unreliable guides.",
        whyOthers: {
          A: "Timing feeds by the clock ignores intake — watch the swallow and the output instead.",
          B: "Six hours of sleep in a five-day-old risks underfeeding; cue-based waking is the norm.",
          D: "Soft breasts after the milk comes in can still feed a baby perfectly well — feel is not a measure of supply.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Breastfeeding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother says breastfeeding is painful. What is your first assessment and action?",
        options: [
          "Diagnose mastitis and start antibiotics",
          "Assess attachment at the next feed; detach gently, reposition with a wide gape and deep chin, and re-latch",
          "Advise formula feeding until the pain resolves",
          "Tell her pain is normal and she must endure it",
        ],
        correctIndex: 1,
        explanation:
          "Poor attachment is almost always the cause of early nipple pain. Watch a full feed, detach with a clean finger, correct the gape and chin position, re-latch — and re-assess. Pain beyond the first seconds means try again.",
        whyOthers: {
          A: "Mastitis brings fever, redness and a hot segment — not simple feeding pain.",
          C: "Stopping feeds worsens engorgement and ends the breastfeeding she wants — fix the latch first.",
          D: "Enduring pain teaches nothing and damages nipples — pain is data, and it points to attachment.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Breastfeeding",
        front: "What is the value of colostrum, and when should the first feed happen?",
        back: "Colostrum is concentrated protein and antibodies — the baby's first immunisation and a natural laxative to clear meconium. The first feed happens within one hour of birth, skin-to-skin.",
      },
      {
        topic: "Breastfeeding",
        front: "Give three observable markers that a newborn is getting enough milk.",
        back: "Six or more heavy wet nappies per 24 hours by day five; stools changing from black meconium to yellow and seedy by day four to five; birth weight regained by day 10-14 — plus audible swallows during feeds.",
      },
      {
        topic: "Breastfeeding",
        front: "How do you answer the day-two cry that 'the milk has not come'?",
        back: "With the three Fs — Frequency of feeds, Fluids for the mother, and Feedback on weight and output: milk volume rises on days two to four, and effective, frequent feeding is what brings it in. Formula is a last resort, not a first answer.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Breastfeeding Fact Sheet",
        year: "2023",
      },
      {
        organization: "UNICEF",
        title: "Baby-Friendly Hospital Initiative: Implementation Guidance",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Newborn Feeding & Care",
    lessonTitle: "The Low-Birth-Weight Baby",
    description:
      "Small and strong — the baby who weighed less than 2.5 kg, the heat she loses faster than she makes, and the mother's chest that becomes her incubator.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define low birth weight and explain why these babies lose heat and feed differently.",
      "Apply the warm chain and kangaroo mother care in a district setting.",
      "Explain feeding support, infection protection and danger signs for the small baby.",
    ],
    tags: ["low birth weight", "kangaroo care", "warm chain", "newborn"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A baby born weighing **less than 2500 grams** is a low-birth-weight baby — some born too early, some grown too slowly in the womb, and in our region both are common. Below 1500 grams is very low birth weight, a baby whose care belongs in a well-equipped unit. Between the two, in every district hospital in Ghana, sits a baby whose survival is decided less by machines than by warmth, milk and an alert nurse.\n\nThis baby cannot shiver. She burns precious calories to stay warm — every calorie spent on heat is a calorie not spent growing. She tires quickly at the breast, drops her blood sugar, and catches infections more easily than her heavier cousin. Everything in this lesson answers those four vulnerabilities.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Warmth.** Heat escapes a newborn through four doors: **evaporation** from a wet body — so dry immediately and discard the wet towel; **convection** in moving air — fans, drafts, open windows; **conduction** into cold surfaces — the scale, the table, the cot mattress; **radiation** to cold walls and windows near the bed. The **warm chain** closes every door: dry and cover at birth, hat on the head (where a disproportionate share of heat is lost), skin-to-skin, delay the first bath — at least six hours, and longer for small babies — warm every surface that touches her, keep mother and baby together day and night, and check the temperature. Normal is 36.5 to 37.5 C; below 36.5 is **cold stress** — re-warm skin-to-skin under a blanket and recheck within the hour.\n\n**Kangaroo mother care** is the district solution for the stable small baby: continuous skin-to-skin in a wrapper on the mother's chest, hat on, exclusive breast milk, early discharge with close follow-up. WHO evidence shows early kangaroo care substantially reduces deaths in small babies — no electricity, no cost, and the mother's body regulates temperature better than most machines we can offer.\n\n**Feeding.** Small babies have small stomachs and big needs: feed early, feed often — two to three hourly through day and night, waking a sleepy baby rather than waiting for hunger she cannot express. When she tires at the breast, the answer is not formula but the mother's own expressed milk, given by cup, by a person who has washed their hands, with the baby held upright — drip, pause, swallow, breathe. Cup feeding protects the breast milk supply and the baby's ability to learn the breast. **Protection and watching.** Handwashing for every carer, no visitors with coughs or cold sores, and the danger signs that mean come now: poor feeding, fast breathing, cold or hot body, yellow eyes, few wet nappies. Weigh daily and plot — after the first week, steady gain is the report card. Discharge when she feeds well, holds her temperature, gains weight, and the family can run the routine at home — then follow up at the child welfare clinic with kangaroo care continuing.",
      },
      {
        type: "clinical_pearl",
        body: "Feel the abdomen, never the hands and feet — normal newborn hands are often cool. A cold tummy on a sleepy feeding baby is hypothermia until the thermometer says otherwise, and the fastest safe re-warming is the mother's chest, not the cot.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 34-week baby weighing 1.9 kg is born at your district hospital at 6am. By 8am the nurse notes she is in the cot under a thin cloth, the fan is on, and she has not fed. Her temperature is 35.8 C. Her mother is anxious that touching her 'will make her sick'.\n\nWhat has gone wrong, and what is your plan?\n\nAnswer: The four doors of heat loss were left open — no skin-to-skin, a fan blowing on her, under-dressed, probably on a cool surface — and the missed feeds risk hypoglycaemia. Explain gently that her chest is the baby's best medicine, then place the baby skin-to-skin in kangaroo position with a hat and wrapper, cover them both, and recheck the temperature in one hour. Support expressing colostrum and cup feeding two to three hourly until she can breastfeed; keep the fan away; monitor temperature, feeds and output; and plan daily weights. In the mother's worry about touch you have found your teaching moment: for this baby, her body is the incubator.",
      },
      {
        type: "quiz_prompt",
        body: "Name the four doors of heat loss in a newborn and one simple shield for each.\n\nAnswer: Evaporation (wet body) — dry immediately and swap the towel; convection (moving air) — no fans or drafts near the cot; conduction (cold surfaces) — warm cloths on scales and tables; radiation (cold walls and windows) — keep the cot away from them. Plus the cap: a hat on the head, where heat loss is disproportionate.",
      },
      {
        type: "memory_trick",
        body: "Four doors of heat loss — 'Every Cow Chews Roughly': Evaporation (wet), Convection (wind), Conduction (cold surface), Radiation (cold walls). Shut them with the warm chain, and remember the golden cap: hat on the head, mother on the chest.",
      },
      {
        type: "summary",
        body: "- Low birth weight: below 2500 grams (very low below 1500); these babies cannot shiver, tire at the breast, and are infection-prone.\n- Four doors of heat loss — evaporation, convection, conduction, radiation — each closed by the warm chain: dry and cover, hat, skin-to-skin, delayed bath, warm surfaces, no drafts.\n- Normal temperature 36.5-37.5 C; below 36.5 is cold stress — re-warm skin-to-skin and recheck within the hour; feel the abdomen, not the hands.\n- Kangaroo mother care: continuous skin-to-skin, hat, exclusive breast milk, close follow-up — reduces deaths in small babies.\n- Feed two to three hourly, waking sleepy babies; expressed breast milk by cup when she tires at the breast; handwashing for every carer.\n- Danger signs — poor feeding, fast breathing, cold or hot body, yellow eyes, few wet nappies — and daily weights plotted from the first week onward.",
      },
    ],
    questions: [
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse places a newborn wet on a metal scale without drying it. Which two mechanisms of heat loss are at work?",
        options: [
          "Radiation and evaporation",
          "Evaporation and conduction",
          "Conduction and radiation",
          "Convection and evaporation",
        ],
        correctIndex: 1,
        explanation:
          "The wet baby loses heat to the air as moisture evaporates, and directly into the cold metal surface by conduction. Put a warm cloth on the scale and dry the baby first — weigh warm, or not at all.",
        whyOthers: {
          A: "Radiation needs cold walls nearby; the scale scenario is wet-skin and cold-metal.",
          C: "Conduction yes, but the wet skin points to evaporation, not radiation.",
          D: "Convection needs moving air; still air over wet skin is evaporation.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 2am a small baby's temperature reads 35.6 C. She is in a cot under a thin cloth. What is the best response?",
        options: [
          "Add two more blankets in the cot and check again at dawn",
          "Give a warm bath to raise her temperature quickly",
          "Place her skin-to-skin on her mother under a blanket with a hat, and recheck within one hour",
          "Offer glucose water to help her generate heat",
        ],
        correctIndex: 2,
        explanation:
          "Below 36.5 C is cold stress, and the fastest safe re-warming is the mother's chest: skin-to-skin under a blanket with a hat, rechecked within the hour. Blankets alone in a cold cot work slowly; a warm bath strips away more heat; glucose water replaces the feeding she needs.",
        whyOthers: {
          A: "Dawn is six hours away — cold stress needs action now, and blankets alone in a cold cot are too slow.",
          B: "Bathing a hypothermic baby evaporates away more heat — never the answer.",
          D: "She needs milk and warmth; sugar water is not feeding and not warming.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Low Birth Weight",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is kangaroo mother care especially valuable in district hospitals in Ghana?",
        options: [
          "It replaces the need for breastfeeding entirely",
          "It works only for babies weighing over 3 kg",
          "It requires no parental involvement at all",
          "It uses the mother's own body as a continuous warm incubator and reduces deaths in small babies",
        ],
        correctIndex: 3,
        explanation:
          "Kangaroo mother care turns the mother's chest into a warm, regulated, portable incubator — no electricity, no cost — while supporting exclusive breast milk feeding. WHO evidence shows early kangaroo care substantially reduces mortality in preterm and low-birth-weight babies, exactly the population district hospitals struggle to serve.",
        whyOthers: {
          A: "Kangaroo care is built around exclusive breastfeeding — it replaces machines, not milk.",
          B: "It is designed for small babies — the very ones under 2.5 kg.",
          C: "It is the definition of parental involvement — the mother is the treatment.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Low Birth Weight",
        front: "Define low birth weight and very low birth weight.",
        back: "Low birth weight: below 2500 grams at birth, whatever the gestational age — from prematurity, growth restriction, or both. Very low birth weight: below 1500 grams, needing higher-level care.",
      },
      {
        topic: "Low Birth Weight",
        front: "What temperature defines cold stress, and what is the first response?",
        back: "Below 36.5 C. First response: re-warm skin-to-skin on the mother under a blanket with a hat on, and recheck within one hour — feel the abdomen, never the hands.",
      },
      {
        topic: "Low Birth Weight",
        front: "How does a small baby who tires at the breast get fed without formula?",
        back: "The mother's own expressed breast milk, given by cup: baby held upright, hand-washed feeder, drip-pause-swallow rhythm, two to three hourly through day and night — protecting both her intake and the milk supply.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Kangaroo Mother Care for Preterm and Low-Birth-Weight Infants",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Thermal Protection of the Newborn: A Practical Guide",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Newborn Feeding & Care",
    lessonTitle: "Newborn Danger Signs for Families",
    description:
      "The teaching that saves lives at 3am — the signs every parent, grandmother and neighbour must know before a healthy baby goes home.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "List the newborn danger signs families must be taught before discharge.",
      "Explain safe sleep, safe cord care and household safety for the newborn.",
      "Apply teach-back and respectful negotiation so family teaching actually lands.",
    ],
    tags: ["danger signs", "parent education", "newborn safety", "teach-back"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The best medical birth can be undone in the third week at home — by a fever blamed on teething, a fast breathing mistaken for hunger, an infected cord, a brazier burn, or smoke from a mosquito coil burning under the cot. Newborn safety teaching is a conversation with the whole family, held before discharge and repeated at the first postnatal contact.\n\nAnd in Ghana, the person you most need on your side is often the grandmother. She is usually the one awake at 3am, and her decision — to bring the baby, or to wait and try herbs — is the one that matters. This lesson gives you the content and the diplomacy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The danger signs that mean come now.** Teach them as a drumbeat, in the family's own language: **poor feeding** — refusing the breast or tiring after a minute or two; **fast breathing** — 60 breaths a minute or more when calm, or chest indrawing between the ribs; **too hot or too cold** — fever, or a body that feels cold; **yellow eyes, face or palms** — jaundice reaching the skin; **few wet nappies** — fewer than about six in a day once milk is established; **a cord that is red, discharging pus, or smells bad**; **convulsions or unusual floppiness**. Any one of these brings the baby the same day — not after the weekend, not after the naming ceremony.\n\n**Safe sleep.** Babies sleep safest on their **backs**, on a firm flat surface, with nothing loose — no pillows, no thick blankets, no strings or charms around the neck. Where families bed-share, teach harm reduction honestly: baby beside the mother rather than under her arm, never on a sofa, never beside a sedated, unwell or smoking carer. Ventilate without a draft, and use a **mosquito net** rather than a coil burning beside the cot.\n\n**Cord care and hygiene.** Hands washed, stump clean and dry — Ghana's newborn strategy promotes dry cord care, with chlorhexidine where policy directs. Nothing goes on the stump: no ash, no powder, no shea butter or dung — each is an infection road, and the stump is an open wound until it separates in one to two weeks. Everyone washes hands before touching a newborn; anyone with fever, cough or a cold sore keeps their distance. Keep babies away from braziers, hot water and cooking areas; support the head; never shake a baby; skip talc of every kind, which small lungs can inhale.\n\nThen close the loop with **teach-back**: never ask 'do you understand?' — ask her to tell you, in her own words, the three signs that would send her straight back to the clinic. Involve the grandmother and husband so the midnight decision-maker hears it firsthand. Weigh the baby at every contact, confirm the immunisation dates in the booklet, and finish every teaching session with the question: 'What will make you come straight back?'",
      },
      {
        type: "clinical_pearl",
        body: "Nothing around the neck and nothing on the cord — the two 'nothings' that prevent two very different deaths. If the family insists on a protective cord or waist bead, negotiate: they can have it later, clean, loose and nowhere near the stump or the neck.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At discharge, the grandmother asks you to put a talcum powder tin and a charm cord in the baby's cot 'as we did for his father'. She also plans a warm cleansing bath tonight, and the family sleeps with a coil burning under the bed to keep mosquitoes off the newborn.\n\nHow do you respond without losing her?\n\nAnswer: Respect first, then facts: praise her experience of raising children, then explain gently that this baby's lungs and skin are new — powder can be breathed straight into the lungs, so plain clean skin is best. Ask her to delay the first bath a day so the baby keeps the warmth and vernix he was born with. Offer the mosquito net as the modern version of the coil — protection without smoke. And welcome the charm as tradition — later, clean and away from the neck and cord. Bring the mother into the conversation so the whole house hears one plan, and close with teach-back on the danger signs, addressed to the grandmother, in her own language.",
      },
      {
        type: "memory_trick",
        body: "The SAFE newborn: Sleeping on the back, Airway clear of cords and smoke, Free of nothing-on-the-cord, Everyone washes hands. For family teaching, '3 plus 3': three habits (back to sleep, clean dry cord, net not coil) and three warnings (poor feeding, fast breathing, fever or a cold body).",
      },
      {
        type: "summary",
        body: "- Danger signs that mean come now: poor feeding, fast breathing 60 or more at rest, chest indrawing, fever or cold body, yellow eyes and palms, fewer wet nappies, red or discharging cord, convulsions or floppiness.\n- Sleep: on the back, firm flat surface, nothing loose; bed-sharing families get honest harm reduction — baby beside mother, never beside a smoker, sedated carer or sofa.\n- Cord: clean and dry, hands washed — no ash, powder or shea butter; redness, pus or a foul smell means same-day care.\n- Net, not coil; everyone washes hands; keep babies away from braziers and hot water; never shake; skip talc.\n- End every discharge teaching with teach-back in the family's own language — and make the grandmother your ally, not your opponent.",
      },
    ],
    questions: [
      {
        topic: "Newborn Danger Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A grandmother asks how to know a newborn is breathing too fast. What number do you teach as the danger threshold at rest?",
        options: [
          "More than 30 breaths per minute",
          "More than 45 breaths per minute",
          "60 breaths per minute or more",
          "Any breathing you can see",
        ],
        correctIndex: 2,
        explanation:
          "Fast breathing — 60 or more per minute when calm and not crying — is a key newborn danger sign, counted for a full minute. Normal newborn rates sit between about 30 and 60; counting during crying or feeding gives false readings.",
        whyOthers: {
          A: "30 is well within the normal newborn range.",
          B: "45 is also normal for a newborn — the threshold is 60.",
          D: "Newborn breathing is naturally visible; the alarm is the rate, not the sight of it.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a postnatal visit you find the family has been applying ash to the cord stump. What is your teaching?",
        options: [
          "Keep the stump clean and dry — nothing should be applied; watch for redness, pus or a foul smell",
          "Ash is safe as long as it comes from a clean fire",
          "Cover the stump with a tight bandage after each application",
          "Clean the cord with spirit at every nappy change",
        ],
        correctIndex: 0,
        explanation:
          "Clean, dry cord care — with chlorhexidine where national policy directs — is the safe message. Ash and other substances on the raw stump are a direct road to infection, including tetanus. Teach the warning signs that mean same-day care.",
        whyOthers: {
          B: "No ash is clean enough for an open wound — the practice itself is the danger.",
          C: "Tight bandaging traps moisture and bacteria against the stump.",
          D: "Routine spirit application is unnecessary where dry cord care is policy — keep it clean, dry and bare.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Newborn Danger Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the teach-back method, and why does it matter at discharge?",
        options: [
          "Asking the mother to repeat your instructions in her own words — it tests the teaching, not her politeness",
          "Repeating your instructions twice, louder the second time",
          "Handing over a well-written leaflet",
          "Asking 'do you understand?' and recording yes",
        ],
        correctIndex: 0,
        explanation:
          "Teach-back asks the mother — or better, the grandmother who decides at 3am — to explain the danger signs and care plan in her own words. Nodding, leaflets and loud repetition tell you nothing about what will actually happen at home.",
        whyOthers: {
          B: "Volume is not comprehension.",
          C: "A leaflet cannot answer questions or reveal misunderstanding.",
          D: "'Do you understand?' invites politeness, not truth — and the family will say yes.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Newborn Danger Signs",
        front: "Name four newborn danger signs a family must be taught before discharge.",
        back: "Poor feeding, fast breathing of 60 or more at rest (or chest indrawing), fever or a cold body, and yellow eyes or palms — plus few wet nappies, a red or discharging cord, and convulsions or floppiness. Any one means bring the baby the same day.",
      },
      {
        topic: "Newborn Danger Signs",
        front: "What three things should never be applied to a newborn's cord stump?",
        back: "Ash, powders or traditional substances like shea butter or dung — the stump stays clean and dry (with chlorhexidine where local policy directs), and hands are washed before and after care.",
      },
      {
        topic: "Newborn Danger Signs",
        front: "Why is a mosquito net preferred to a coil for a newborn?",
        back: "Coil smoke is an airway irritant to a small baby with fast, delicate breathing; a net gives the same protection without smoke beside the cot.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
      },
      {
        organization: "World Health Organization",
        title: "Caring for the Newborn at Home: A Training Course for Community Health Workers",
        year: "2015",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Planning Families",
    lessonTitle: "Family Planning: Methods & Counselling",
    description:
      "The full menu of options — how each works, how well, and the counselling that helps a family choose the method they will actually keep using.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the main contraceptive method families and their typical effectiveness.",
      "Explain the postpartum rules for breastfeeding mothers and WHO's spacing advice.",
      "Apply GATHER counselling, including myth correction and partner situations.",
    ],
    tags: ["family planning", "contraception", "counselling", "gather"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Family planning clients do not come asking for a drug — they come asking for a life: school, work, spacing, recovery. A 19-year-old finishing school, a mother of four whose body needs two years to rebuild, a couple separated by a travelling job — each needs a different answer from the same menu. Your job as the nurse is to know the menu so well that whatever she brings — fear of needles, a dominant mother-in-law, myths from an aunt — you can hand her real options.\n\nIn Ghana's clinics, family planning counselling is largely nursing work. Done well, it prevents more death and poverty than almost anything else you do.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Methods divide into families. **Natural methods** — fertility awareness and LAM — cost nothing and carry no side effects, but demand discipline and instruction. **Barriers** — male and female condoms — are the only methods that also protect against STIs, though typical-use failure is the highest of the modern set. **Short-acting hormones** — the combined pill, the progestogen-only pill, injectables like DMPA every three months — are effective when used consistently, which is exactly where typical use slips. **LARCs** — the implant (three to five years depending on type) and the copper IUD (up to ten) — sit at the top of the effectiveness table: fitted, then largely forgotten, and the IUD is hormone-free. **Sterilisation** — tubal ligation for her, vasectomy for him — is permanent: simpler and safer in the man, and a decision that deserves its own unhurried counselling.\n\nTwo disciplines make your counselling honest. First, distinguish **perfect use from typical use** — the gap between them is real life: memory, supply, negotiation. Always counsel the typical-use figure. Second, match the method to the life: the best method is rarely the strongest one on paper — it is the one she will actually use and can return to change. WHO's medical eligibility criteria guide safe matching: oestrogen-containing methods are avoided or delayed with raised blood pressure, smokers over 35, migraine with aura, and breastfeeding under six weeks.\n\n**Postpartum rules** are the nursing bread and butter: ovulation can return by four to six weeks — before the first menses — so counsel before discharge. **LAM** protects at over 98 percent only while all three hold: baby under six months, exclusive breastfeeding day and night, and no return of menses. Progestin-only methods (pill, implant, injectable) suit breastfeeding from early on; the copper IUD can go in within 48 hours of birth or from about four weeks; **oestrogen-containing methods wait at least six weeks**, because oestrogen can reduce milk. WHO advises spacing at least about **two years** after a live birth — the next baby arrives more likely to be born at term, at weight, to a mother who is not depleted.",
      },
      {
        type: "table",
        title: "The method menu at a glance",
        body: "| Family | Examples | Strengths | Cautions |\n| --- | --- | --- | --- |\n| Natural | Fertility awareness, LAM | Free, no side effects | Demands training and discipline; LAM needs all 3 criteria |\n| Barrier | Male and female condoms | Only method with STI protection | Highest typical-use failure |\n| Short-acting hormonal | Combined pill, POP, DMPA 3-monthly | Effective, reversible | Depends on daily or 3-monthly adherence |\n| LARC | Implant 3-5 years, copper IUD up to 10 | Most effective, no daily demands | Needs insertion service and removal planning |\n| Permanent | Tubal ligation, vasectomy | Definitely ends fertility | Permanent — unhurried consent; vasectomy simpler and safer |",
      },
      {
        type: "clinical_pearl",
        body: "Never let the queue pick her method. A choice whispered in front of ten listening clients is not a choice — it is performance. Privacy is not a luxury in family planning; it is part of the method.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 28-year-old mother of three, eight weeks postpartum and breastfeeding, wants reliable spacing. Her husband travels for work, her aunt insists the pill causes cancer, and she has heard the injection makes women permanently barren.\n\nWhich options lead your counselling, and how do you handle the myths?\n\nAnswer: Her profile points to the LARC family: the implant or the copper IUD — top-tier effectiveness, milk-friendly, and nothing to remember on a travelling husband's calendar; the IUD adds ten hormone-free years. Explain honestly that combined methods actually lower ovarian and endometrial cancer risk, and that DMPA can delay fertility's return for up to a year after the last injection but does not cause sterility. Screen her against the eligibility criteria, let her choose, and invite her back for any side effect or change of mind. Record her own choice in her notes.",
      },
      {
        type: "memory_trick",
        body: "Picture the ladder 'Long Acting Beats Daily, Daily Beats the Moment': LARC on top, then pills and injectables, then condoms, then natural methods — with one banner beneath: the STI shield belongs to condoms alone. And GATHER keeps the counselling whole: Greet privately, Ask her life, Tell the truth about methods, Help her choose, Explain use and returns, Return with a reason.",
      },
      {
        type: "summary",
        body: "- Method families: natural (incl. LAM), barrier, short-acting hormonal, LARC (implant, copper IUD) and permanent sterilisation — counsel the typical-use effectiveness, not the perfect-use one.\n- Only condoms add STI protection — dual protection counsel for at-risk couples.\n- Postpartum: ovulation returns before menses; LAM works only while baby under six months + exclusive feeding + no menses; progestin-only methods suit breastfeeding; oestrogen waits at least six weeks.\n- WHO spacing: about two years after a live birth — safer mothers, heavier babies.\n- GATHER: Greet in privacy, Ask her situation, Tell methods honestly, Help her choose, Explain use and missed-dose rules, plan the Return.\n- Eligibility flags for oestrogen: high blood pressure, smokers over 35, migraine with aura, breastfeeding under six weeks. Myths answered with respect, fact and a check of understanding.",
      },
    ],
    questions: [
      {
        topic: "Family Planning",
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
        whyOthers: {
          A: "Withdrawal has the highest failure of all named methods.",
          B: "Condoms are essential for STI protection but have high typical-use pregnancy rates.",
          C: "The pill is effective only with daily perfection most lives cannot supply.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Family Planning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set correctly states the three LAM criteria?",
        options: [
          "Baby under six months, exclusive breastfeeding day and night, no return of menses",
          "Baby under one year, any breastfeeding, mother under 35",
          "Baby under six months, mixed feeding, menses returned",
          "Exclusive feeding, baby under nine months, mother amenorrhoeic and over 35",
        ],
        correctIndex: 0,
        explanation:
          "LAM protects at over 98 percent only while all three criteria hold: the baby is under six months, exclusively breastfeeding day and night, and the mother's menses have not returned. Miss any one — mixed feeding, the sixth month passing, or bleeding — and she needs another method.",
        whyOthers: {
          B: "Age and one year are not criteria; any-feeding is not enough.",
          C: "Mixed feeding and returned menses both cancel LAM's protection.",
          D: "Nine months is past the age limit, and maternal age is irrelevant.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Family Planning",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "A mother four weeks postpartum, fully breastfeeding, asks for the combined oral contraceptive pill today. What is your best counselling?",
        options: [
          "It is the ideal method for her right now",
          "A progestin-only method is better now — oestrogen should wait at least six weeks, as it may reduce her milk",
          "No hormonal method is ever safe in breastfeeding",
          "She must wean the baby before any contraception",
        ],
        correctIndex: 1,
        explanation:
          "Oestrogen can suppress milk production, so combined methods are delayed until at least six weeks — ideally until feeding is established — while progestin-only pills, implants and injectables are compatible with breastfeeding from early on. Her desire for contraception is right; the method choice is what needs adjusting.",
        whyOthers: {
          A: "The combined pill at four weeks while establishing feeding risks her milk supply.",
          C: "Progestin-only hormonal methods are safe in breastfeeding — the blanket ban is a myth.",
          D: "Weaning is never required for contraception — the method is chosen to fit the feeding, not against it.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Family Planning",
        front: "Explain perfect use versus typical use in one sentence.",
        back: "Perfect use is what trials achieve with flawless compliance; typical use is what real people achieve with missed pills and inconsistent use — always counsel the typical-use figure.",
      },
      {
        topic: "Family Planning",
        front: "Which methods can a breastfeeding mother start soon after birth, and which must wait?",
        back: "Progestin-only methods (pill, implant, injectable) and the copper IUD (within 48 hours or from four weeks) suit breastfeeding; oestrogen-containing combined methods wait at least six weeks and until feeding is established.",
      },
      {
        topic: "Family Planning",
        front: "What does each letter of GATHER stand for?",
        back: "Greet respectfully in private, Ask about her situation and goals, Tell the methods honestly, Help her choose, Explain correct use and missed-dose rules, and plan the Return for problems, changes or pregnancy plans.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Medical Eligibility Criteria for Contraceptive Use",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "Family Planning: A Global Handbook for Providers",
        year: "2018",
      },
      {
        organization: "Ghana Health Service",
        title: "National Family Planning Guidelines and Service Standards",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "maternal-child-health-2",
    moduleTitle: "Planning Families",
    lessonTitle: "Reproductive Health Across the Lifespan",
    description:
      "From a teenager's first questions to a grandmother's hot flushes — the reproductive health conversations of a lifetime, and the nurse who keeps them safe.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe reproductive health needs across adolescence, adulthood and later life.",
      "Explain STI and HIV prevention counselling, including PMTCT and cervical cancer screening.",
      "Apply confidential, rights-based communication to clients of every age and stage.",
    ],
    tags: ["reproductive health", "lifespan", "stis", "menopause"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Reproductive health is not one consultation — it is a conversation that lasts a lifetime. The girl in JHS with her first questions about her body; the newlywed choosing a method; the mother of three avoiding her fourth; the woman at fifty whispering about hot flushes; the grandmother caring for a teenager of her own. Each of them meets a nurse somewhere along that road.\n\nReproductive health, in WHO's definition, is not merely the absence of disease — it is a state of physical, mental and social wellbeing in all matters relating to the reproductive system. Your work across this lesson is built on two habits: accurate information, given without flinching, and confidentiality, kept without exception.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Adolescence.** Puberty arrives with questions, and if the nurse will not answer, the internet and peers will. Teach the changes of puberty plainly, the menstrual cycle, and pregnancy risk from the first unprotected encounter. Ghana's adolescents face a hard arithmetic: pregnancy and its complications are among the leading causes of death for girls aged 15-19. Counselling has three levels — delayed first sex for those who choose it, correct condom use for those who do not, and dual protection (condom plus another method) for the sexually active. Confidentiality is the whole door: an adolescent who fears being reported simply does not come back.\n\n**Adulthood.** This is family planning's home ground, plus two protections every adult deserves: **STI screening and treatment** — teach the signs, treat partners together where possible, because treating one and not the other simply reinfects — and **HIV care**, where your counselling saves two lives at once: test her, treat her, and in pregnancy, support prevention of mother-to-child transmission (PMTCT) and safe infant feeding per national guidance. **Cervical cancer** is Ghana's silent killer of women, and screening with visual inspection (VIA) at district level means precancer can be found and treated before it becomes cancer — teach every woman you meet when her screening is due.\n\n**Later life.** Menopause is a transition, not a disease: explain the hot flushes, sleep changes and mood shifts, the bone and heart concerns, and the red flags — any bleeding after menopause needs assessment, always. Offer practical counsel: calcium-rich diet, weight-bearing movement, and honest answers about treatments. And at every stage, **rights**: every client — married or unmarried, adolescent or elderly — is entitled to information, choice, confidentiality, consent and dignity. The nurse who guards these rights becomes the person the whole community talks to.",
      },
      {
        type: "clinical_pearl",
        body: "One rule travels the whole lifespan: information given without flinching, confidence kept without exception. The moment a client believes her story travels, she stops bringing you her questions — and the questions do not stop, they just go unanswered.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 16-year-old comes to your clinic asking for 'medicine for stomach pain', accompanied by an aunt who insists on staying in the room. Alone with you later for the examination, the girl whispers that she has a boyfriend and is afraid of pregnancy — but begs you not to tell her aunt or parents.\n\nWhat are your obligations, and what is your plan?\n\nAnswer: Her presenting complaint deserves real assessment — abdominal examination, urine and pregnancy test per protocol, STI screening as indicated. Her confidentiality is her right and her safety: adolescent sexual health services are confidential within the limits of serious risk of harm. Provide age-appropriate counselling — options, condom demonstration, a method if she chooses one — and help her plan how to involve her family in time, on her terms. Escalate to a senior only if there is risk of serious harm. And treat the aunt with warmth: her presence signals care, not obstruction — keep her an ally for the girl's future visits.",
      },
      {
        type: "memory_trick",
        body: "Reproductive health across the lifespan is 'ACE the road': Adolescents (answer questions early, protect confidentiality), Childbearing age (methods, STIs, HIV, cervical screening), Elders (menopause counsel, bleeding after menopause is a red flag). And one banner over all: rights — information, choice, consent, confidentiality, dignity.",
      },
      {
        type: "summary",
        body: "- Reproductive health spans adolescence, adulthood and later life — each stage with its own questions and protections.\n- Adolescents: teach puberty and cycles plainly; counsel delayed first sex, correct condom use, dual protection; keep confidentiality or lose the client entirely.\n- Adults: family planning, STI screening with partner treatment, HIV testing and PMTCT in pregnancy, and cervical cancer screening (VIA) at district level.\n- Menopause: a transition, not a disease — counsel flushes, sleep, bones and heart; any bleeding after menopause needs assessment.\n- Every stage: information, choice, consent, confidentiality and dignity — the rights that make the rest of your teaching usable.",
      },
    ],
    questions: [
      {
        topic: "Reproductive Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A 15-year-old girl attends your clinic with questions about her changing body and pregnancy risk. What is the foundation of effective counselling with her?",
        options: [
          "Telling her to save all questions for her future husband",
          "Confidential, judgement-free information — with delayed sex, correct condom use and dual protection as options",
          "Refusing to discuss anything until a parent is present",
          "Referring her to the nearest pharmacy for brochures",
        ],
        correctIndex: 1,
        explanation:
          "Adolescents seek information with or without us; the nurse who answers plainly and confidentially is the one they return to. Counselling offers delayed first sex for those who choose it, correct condom use for those who do not, and dual protection for the sexually active.",
        whyOthers: {
          A: "Silence does not delay sex — it only delays safe decisions.",
          C: "Forcing parental presence before any discussion often ends the conversation at the door.",
          D: "Brochures cannot answer, reassure or protect — and pharmacies do not counsel.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman of 52, two years past her last period, reports a single episode of vaginal bleeding. What is your response?",
        options: [
          "Reassure her that spotting is a normal tail of menopause",
          "Treat as a urinary tract infection and review if it recurs",
          "Assess and refer — any bleeding after menopause needs evaluation to exclude endometrial or cervical cancer",
          "Advise a herbal remedy and review in six months",
        ],
        correctIndex: 2,
        explanation:
          "Postmenopausal bleeding is never 'a normal tail' — it requires assessment to exclude endometrial and cervical cancer, both far more curable when found early. Your nursing job is to take it seriously and get her seen, not to explain it away.",
        whyOthers: {
          A: "Bleeding two years after menopause is a red flag, not a flicker.",
          B: "Mistaking gynaecological bleeding for urinary infection delays a cancer diagnosis.",
          D: "Six months of waiting can be the difference between cure and catastrophe.",
        },
        courseSlug: "maternal-child-health-2",
      },
      {
        topic: "Reproductive Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does cervical cancer screening matter so much in district-level care in Ghana?",
        options: [
          "It detects cancer too late for any treatment",
          "Screening with visual inspection (VIA) can find and treat precancerous changes before cancer develops",
          "It replaces the need for HPV vaccination",
          "It is only accurate in regional hospitals",
        ],
        correctIndex: 1,
        explanation:
          "Cervical cancer develops slowly through treatable precancerous stages. VIA — simple visual screening with acetic acid — can be performed at district level, and treatment of precancerous lesions prevents the cancer entirely. Teach every woman when her screening is due.",
        whyOthers: {
          A: "The entire value of screening is early, treatable detection.",
          C: "Vaccination and screening are partners, not substitutes — vaccinated women still need screening.",
          D: "VIA is designed exactly for district and health-centre level, not only regional hospitals.",
        },
        courseSlug: "maternal-child-health-2",
      },
    ],
    flashcards: [
      {
        topic: "Reproductive Health",
        front: "What is WHO's definition of reproductive health?",
        back: "A state of physical, mental and social wellbeing in all matters relating to the reproductive system — not merely the absence of disease or infirmity.",
      },
      {
        topic: "Reproductive Health",
        front: "What is dual protection?",
        back: "Using a condom together with another contraceptive method — protecting against both pregnancy and sexually transmitted infections, including HIV.",
      },
      {
        topic: "Reproductive Health",
        front: "Which symptom after menopause always needs assessment?",
        back: "Any vaginal bleeding after menopause — it must be evaluated to exclude endometrial and cervical cancer. Menopause itself is a normal transition: flushes, sleep and mood changes, bone and heart health.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sexually Transmitted Infections (STIs) Fact Sheet",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
      },
      {
        organization: "World Health Organization",
        title: "Comprehensive Cervical Cancer Control: A Guide to Essential Practice",
        year: "2014",
      },
    ],
  },
];
