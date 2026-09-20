// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 1, Semester 2 — Batch D (Health Assessment + Communication & Professional Practice)
// 12 lessons anchored to prisma/seed-data/anchors/y1s2-d.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "Physical Assessment",
    lessonTitle: "The General Survey: First Impressions Count",
    description:
      "Before you touch, you watch. The first thirty seconds with any patient tell you more than you think — this lesson teaches you how to use them.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the five components of the general survey: appearance, gait, breathing, colour and level of consciousness.",
      "Explain why the general survey begins before any instrument is used.",
      "Apply observation skills to spot pallor, breathlessness and distress on a busy ward.",
    ],
    tags: ["general survey", "observation", "assessment", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Before your hands or your stethoscope go anywhere near a patient, your eyes are already working. The moment a woman walks into the CHPS compound or the district hospital clinic, you are collecting information: how she moves, how she breathes, what colour she is, how she greets you. Clinicians call this the general survey, and it starts the moment you see the patient — not the moment the examination begins.\n\nIn this lesson you will learn what to notice in the first thirty seconds, and how those first impressions guide everything that follows.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The general survey covers five things. **Appearance**: does she look her stated age? Is she neat and settled, or dishevelled and exhausted? **Gait**: does she walk steadily, or lean on a companion, shuffle, or wince with each step? **Breathing**: quiet and easy, or fast and laboured, with shoulders working hard? **Colour**: pink and healthy, pale, yellow, or blue around the lips? **Level of consciousness**: alert and conversing, or drowsy and slow to respond?\n\nTwo colours matter greatly in our clinics. **Pallor** (paleness) points to anaemia — check the palms and the inside of the lower eyelid, where it shows earliest. **Jaundice** (yellowness) points to liver or blood problems — look at the sclera, the white of the eye, in natural light.\n\nSpeech belongs to the survey too. A woman who has to stop mid-sentence to catch her breath is telling you something urgent about her breathing before any machine confirms it.",
      },
      {
        type: "clinical_pearl",
        body: "Greet the patient with your eyes open. 'Good morning, how are you today?' is a diagnostic test — the answer, the voice, the walk and the colour all arrive together in one free observation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 28-week pregnant woman walks slowly into a busy ANC waiting area. You watch her from the door: she leans on her husband's arm, sits down heavily, and does not chat with the neighbouring women. Her lips and palms look pale, and when she answers the clerk she speaks softly, pausing once to catch her breath. You have not touched her and taken no reading yet.\n\nWhat has your general survey already told you, and what should you do next?\n\nAnswer: Her slow gait, pallor and breathless speech suggest possible anaemia, common in pregnancy and dangerous when severe. Next, check her conjunctiva and palms, arrange her vitals and haemoglobin check promptly, and do not let her sit for hours in the queue — a patient who walks and talks can still be a sick patient.",
      },
      {
        type: "memory_trick",
        body: "Remember **A G B C C** — 'All Good Babies Can Crawl': Appearance, Gait, Breathing, Colour, Consciousness. Five things, five seconds, in that order, every time.",
      },
      {
        type: "summary",
        body: "- The general survey begins the moment you see the patient, before any equipment.\n- Its five parts: appearance, gait, breathing, colour and consciousness.\n- Pallor shows earliest in the palms and conjunctiva; jaundice shows in the sclera.\n- Speech is part of the survey — pausing mid-sentence signals breathlessness.\n- A patient who walks and talks can still be seriously unwell; let the survey set the urgency.",
      },
    ],
    questions: [
      {
        topic: "The General Survey",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When does the general survey begin?",
        options: [
          "When you first lay hands on the patient to palpate",
          "When the patient first enters and you observe them",
          "After the vital signs have been recorded",
          "Only during the doctor's formal ward round",
        ],
        correctIndex: 1,
        explanation:
          "The general survey is observation-based, so it starts the moment you first see the patient — at the door, in the waiting area, on the ward — before any equipment or touch.",
        courseSlug: "health-assessment",
      },
      {
        topic: "The General Survey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect anaemia from across the room. Where do the earliest signs of pallor show?",
        options: [
          "The sclera, the whites of the eyes",
          "The palms and the conjunctiva of the lower eyelid",
          "The earlobes and the nose",
          "The nail beds of the toes",
        ],
        correctIndex: 1,
        explanation:
          "Pallor shows earliest in the palms and the conjunctiva of the lower eyelid. The sclera is where you look for jaundice instead, and peripheral sites are later and less reliable.",
        courseSlug: "health-assessment",
      },
      {
        topic: "The General Survey",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal woman says 'I am fine' but pauses twice mid-sentence to catch her breath. What should you do?",
        options: [
          "Accept her answer — 'fine' is reassuring enough",
          "Chart her exact words only and continue the round",
          "Count her respiratory rate at once; speech broken by breaths signals respiratory distress",
          "Reassure her and recheck at the next shift",
        ],
        correctIndex: 2,
        explanation:
          "Speech interrupted by breaths means her breathing is laboured enough to compete with talking. That is a red flag from the general survey — count a full minute of respirations immediately rather than waiting.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "General Survey",
        front: "What five things do you observe in the general survey?",
        back: "Appearance, gait, breathing, colour and level of consciousness — 'All Good Babies Can Crawl'.",
      },
      {
        topic: "Pallor and Jaundice",
        front: "Where do pallor and jaundice show earliest?",
        back: "Pallor: the palms and conjunctiva of the lower eyelid. Jaundice: the sclera, in natural light.",
      },
      {
        topic: "General Survey",
        front: "What does a patient pausing mid-sentence to breathe tell you?",
        back: "Her breathing is laboured enough to interrupt speech — count her respiratory rate immediately; quiet broken speech is a red flag.",
      },
    ],
    sources: [
      { organization: "McGraw Hill", title: "Bates' Guide to Physical Examination and History Taking (13th edition)" },
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "Physical Assessment",
    lessonTitle: "Head-to-Toe Physical Assessment",
    description:
      "A full examination feels enormous until you learn the order. One system, one route from head to toe, nothing missed.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the head-to-toe order of a systematic physical assessment.",
      "Explain the four examination techniques — inspection, palpation, percussion and auscultation.",
      "Apply the abdominal exception: auscultate before you palpate.",
    ],
    tags: ["physical assessment", "examination", "inspection", "palpation", "systematic"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When you are new, a full examination feels like a mountain: so many parts, so little time, and the fear of forgetting something important. The solution is a system — a fixed route from head to toe with fixed techniques at each stop. A system is not slow; it is the fastest safe way to examine, because nothing is hunted for and nothing is skipped.\n\nIn this lesson you will learn the four techniques every examination uses, the head-to-toe route, and the one famous exception to the usual order.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every complete examination runs on four techniques. **Inspection** is looking — always first, always with good light. **Palpation** is touching — light pressure before deep, with warm hands and short nails. **Percussion** is tapping — the drum-like notes tell you whether tissue underneath is air, fluid or solid. **Auscultation** is listening with the stethoscope — breath sounds, heart sounds, bowel sounds.\n\nIn most of the body these run in order: IPPA — inspect, palpate, percuss, auscultate. The **abdomen is the exception**: there you auscultate before palpating and percussing, because pressing on the belly first stirs the bowel and changes the sounds you were about to hear.\n\nThe head-to-toe route keeps you honest: head and face (conjunctiva, sclera, mouth), neck (trachea), chest (breath and heart sounds, breasts), abdomen, limbs (pulses, oedema, skin), back, and a brief neurological check. Always explain what you are about to do before you touch, keep the patient covered except for the part being examined, and offer a chaperone for intimate areas.",
      },
      {
        type: "clinical_pearl",
        body: "Warm your hands before you palpate — rub them together. Cold hands make muscles tighten and mask what you are feeling; warm hands earn a relaxed patient and better findings.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are asked to examine a woman on her first postnatal day. Your classmate dives straight to the abdomen, checks the fundus and lochia, and finishes in two minutes. You follow the head-to-toe route: face, chest, abdomen, then calves — and on her left calf you find a tender, warm swelling she never mentioned.\n\nWhat did the systematic route achieve that the abdomen-first shortcut missed, and why does it matter?\n\nAnswer: The head-to-toe route treats the whole woman, not just the part connected to the delivery. The swollen, tender calf could be a deep vein thrombosis, a life-threatening complication after birth — a clot can travel to the lungs. A fixed route means no region is skipped because it seemed unrelated or because the patient did not complain.",
      },
      {
        type: "memory_trick",
        body: "IPPA everywhere — Inspect, Palpate, Percuss, Auscultate. Except the tummy: 'listen before you press.' Picture a radio playing on her abdomen — touch it and the music changes, so listen first.",
      },
      {
        type: "summary",
        body: "- Four techniques: inspection, palpation, percussion, auscultation — always inspect first.\n- IPPA is the usual order; the abdomen is the exception — auscultate before touching.\n- Run the route head to toe: head, neck, chest, abdomen, limbs, back, brief neuro.\n- Explain before touching, keep her covered, offer a chaperone for intimate areas.\n- The system protects you: complaints are optional, but the route never skips a region.",
      },
    ],
    questions: [
      {
        topic: "Physical Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In which region do you auscultate before palpating?",
        options: [
          "The chest",
          "The abdomen",
          "The neck",
          "The lower limbs",
        ],
        correctIndex: 1,
        explanation:
          "The abdomen is the classic exception to IPPA. Palpation and percussion stimulate peristalsis and alter bowel sounds, so you listen first. Everywhere else, inspect-palpate-percuss-auscultate stands.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Physical Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does palpating the abdomen before auscultating risk an error?",
        options: [
          "It makes the patient too relaxed for accurate findings",
          "It cools the skin and changes the pitch of bowel sounds",
          "It stimulates peristalsis and alters the bowel sounds you were about to hear",
          "It is only a problem in pregnant patients",
        ],
        correctIndex: 2,
        explanation:
          "Touch and percussion stir the bowel, increasing peristalsis — so bowel sounds heard afterwards may not reflect the patient's true baseline. Listening first protects the finding.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Physical Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your classmate examines only the fundus and lochia after birth. Which finding is most likely to be missed by this shortcut?",
        options: [
          "Heavy lochia from the uterus",
          "A tender, warm swelling in one calf",
          "The height of the fundus",
          "Whether lochia is foul-smelling",
        ],
        correctIndex: 1,
        explanation:
          "A calf with a warm, tender swelling — possibly a deep vein thrombosis — sits far from the uterus. If the route never reaches the limbs, it is missed until the clot causes an emergency. Fundus and lochia were already in the classmate's shortcut.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Examination Techniques",
        front: "What are the four examination techniques?",
        back: "Inspection (look), palpation (touch), percussion (tap), auscultation (listen) — always starting with inspection.",
      },
      {
        topic: "Abdominal Exception",
        front: "What is the exception to IPPA?",
        back: "The abdomen: auscultate bowel sounds before palpating or percussing — pressing first stimulates peristalsis and changes the sounds.",
      },
      {
        topic: "Examination Conduct",
        front: "What must you do before touching a patient in any examination?",
        back: "Explain what you are about to do, keep her covered except the part being examined, and offer a chaperone for intimate areas.",
      },
    ],
    sources: [
      { organization: "McGraw Hill", title: "Bates' Guide to Physical Examination and History Taking (13th edition)" },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
      { organization: "Elsevier", title: "Myles Textbook for Midwives (17th edition)" },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "Physical Assessment",
    lessonTitle: "Assessment Equipment and Techniques",
    description:
      "Your stethoscope, cuff, thermometer and penlight are only as accurate as your technique. Small equipment errors become big clinical errors.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Explain correct stethoscope use, including diaphragm versus bell and earpiece direction.",
      "Apply correct blood pressure cuff sizing and deflation technique.",
      "Describe safe, accurate use and cleaning of thermometers and penlights.",
    ],
    tags: ["equipment", "technique", "blood pressure", "stethoscope", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Instruments are amplifiers for your senses. The stethoscope makes breath sounds audible, the cuff turns pressure into numbers, the thermometer and penlight reach where your eyes cannot. But an instrument is only as honest as the hands holding it — and the commonest measurement errors in any clinic are equipment errors, not patient changes.\n\nIn this lesson you will learn the four everyday tools of assessment and the small techniques that keep their readings true.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **stethoscope** works only when worn correctly. The earpieces should point forward, toward your nose, following the natural bend of your ear canal. The **diaphragm** — the firm side — picks up high-pitched sounds: breath sounds, normal heart sounds and Korotkoff sounds during blood pressure measurement. The **bell** — the hollow side, held lightly — picks up low-pitched sounds such as extra heart sounds and bruits.\n\nThe **sphygmomanometer** gives true readings only with the right cuff. The bladder inside the cuff should wrap about 80 percent of the upper arm's circumference. A cuff too small for the arm reads **falsely high**; one too large reads falsely low. Palpate the radial pulse first, inflate 20–30 mmHg above the point where it disappears, then deflate at about 2–3 mmHg per heartbeat while listening.\n\nThe **thermometer** must be cleaned between patients — wipe digital probes with an alcohol swab according to your ward's infection control routine — and record the site you used, since axillary and oral readings differ. The **penlight** checks that the pupils are equal and react to light, lights the mouth and throat, and lights the conjunctiva so pallor cannot hide in a dark corner.",
      },
      {
        type: "clinical_pearl",
        body: "The most common blood pressure error in any clinic is a cuff that is too small. If her arms are full, fetch the large cuff — the number you write down decides the care she receives.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At a screening outreach, a student takes a woman's blood pressure with the ward's standard adult cuff and records 162/100. The supervising nurse re-checks with a large adult cuff and records 138/86. The woman has no headache, no blurred vision, and her previous ANC readings were all around 128/80.\n\nWhy did the two readings differ, and what could have gone wrong if the first number had been acted on?\n\nAnswer: The first reading suffered miscuffing — a cuff too small for the arm's circumference reads falsely high. Acting on 162/100 alone could have caused unnecessary referral, anxiety or treatment for a woman whose true pressure was acceptable. When a reading surprises you, check your equipment — cuff size, arm support, deflation rate — and re-measure before you act on it.",
      },
      {
        type: "memory_trick",
        body: "'Bell for LOW, diaphragm for HIGH' — big, deep sounds love the bell. And for the cuff: 'wrap 80 or the number lies' — the bladder should encircle about 80 percent of the arm.",
      },
      {
        type: "summary",
        body: "- Earpieces point forward toward the nose; diaphragm for high-pitched, bell for low-pitched sounds.\n- The cuff bladder should wrap about 80 percent of the upper arm.\n- A too-small cuff reads falsely high; a too-large cuff reads falsely low.\n- Deflate at 2–3 mmHg per heartbeat; palpate the radial pulse first to avoid over-inflating.\n- Clean thermometers between patients and record the measurement site you used.",
      },
    ],
    questions: [
      {
        topic: "Assessment Equipment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which side of the stethoscope is designed for breath sounds and Korotkoff sounds?",
        options: [
          "The bell, pressed lightly",
          "The diaphragm, held firmly",
          "Either side — there is no difference",
          "The tubing, held against the chest",
        ],
        correctIndex: 1,
        explanation:
          "The firm diaphragm transmits high-pitched sounds — breath sounds, normal heart sounds and Korotkoff sounds. The hollow bell, held lightly, is for low-pitched sounds such as extra heart sounds and bruits.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Assessment Equipment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A standard adult cuff is used on a woman with a full upper arm. What is the expected effect on her blood pressure reading?",
        options: [
          "Falsely low",
          "No effect — all cuffs read the same",
          "Falsely high",
          "It depends only on her heart rate",
        ],
        correctIndex: 2,
        explanation:
          "A cuff bladder too small for the arm must be over-inflated to compress the artery, producing a falsely high reading. The bladder should wrap about 80 percent of the arm's circumference.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Assessment Equipment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How should the stethoscope earpieces be positioned in your ears?",
        options: [
          "Pointing forward, toward the nose",
          "Pointing backward, away from the face",
          "Either direction — comfort alone decides",
          "Removed entirely during auscultation",
        ],
        correctIndex: 0,
        explanation:
          "The ear canals angle forward, so earpieces pointing toward the nose seat properly and seal well. Backward-pointing earpieces leak sound and make you miss quiet findings.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Stethoscope",
        front: "Diaphragm or bell — which side for which sounds?",
        back: "Diaphragm (firm, pressed) for high-pitched: breath sounds, normal heart sounds, Korotkoff. Bell (hollow, light) for low-pitched: extra heart sounds, bruits.",
      },
      {
        topic: "Blood Pressure",
        front: "What happens when the cuff bladder is too small for the arm?",
        back: "The reading is falsely high — the commonest BP error. The bladder should wrap about 80 percent of the upper arm's circumference.",
      },
      {
        topic: "Blood Pressure",
        front: "How fast should you deflate the cuff, and what do you do before inflating?",
        back: "Deflate about 2–3 mmHg per heartbeat. First palpate the radial pulse and inflate 20–30 mmHg above where it disappears, so you do not over- or under-inflate.",
      },
    ],
    sources: [
      { organization: "McGraw Hill", title: "Bates' Guide to Physical Examination and History Taking (13th edition)" },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
      { organization: "Ghana Health Service", title: "National Infection Prevention and Control Policy and Guidelines", year: "2015" },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "Thinking About What You Find",
    lessonTitle: "Normal Versus Abnormal Findings",
    description:
      "You cannot recognise the wrong until you know the right. Building your inner library of normal is the quiet superpower of safe practice.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "State normal adult ranges for temperature, pulse, respiratory rate and blood pressure.",
      "Explain how pregnancy changes expected findings, including the 140/90 threshold.",
      "Apply the trend principle: compare every reading with what came before.",
    ],
    tags: ["findings", "clinical judgment", "vital signs", "normal ranges"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Experienced midwives seem to spot the abnormal instantly. They are not magicians — they simply carry a large, well-organised library of 'normal', built by examining many well people. Against that library, the abnormal finding jumps out like a spelling mistake in a familiar sentence.\n\nYour library starts in this lesson: the normal ranges every student should hold in memory, the ways pregnancy rewrites them, and the habit that turns ordinary numbers into early warnings — the trend.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the big four for adults. Temperature 36.1–37.2 °C. Pulse 60–100 beats per minute, regular. Respiratory rate 12–20 breaths per minute, counted for a full minute. Blood pressure below 120/80, with capillary refill under two seconds and oxygen saturation around 95 percent or more.\n\nPregnancy rewrites some pages. By the second trimester the pulse rises by 10–20 beats per minute and blood pressure drifts slightly lower, so a pulse of 95 can be entirely normal in a pregnant woman. From 20 weeks, a blood pressure of **140/90 or more** is not 'borderline' — it is the threshold for hypertensive disorders and demands a full pre-eclampsia screen: headache, visual changes, epigastric pain, oedema, urine protein. A haemoglobin below 11 g/dL in pregnancy counts as anaemia.\n\nAbove all lives the trend. A single number is a photograph; the chart is the film. A blood pressure of 138/86 is unremarkable in isolation — unless her last three visits read 104/64.",
      },
      {
        type: "clinical_pearl",
        body: "Before calling any finding abnormal, ask two questions: 'Is this normal for this patient?' and 'What was it yesterday?' Her baseline and the trend beat any single number.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 34 weeks attends ANC. Today her blood pressure is 138/86, and the student charts it as normal because it sits under 140/90. Reviewing her folder, you see her readings at 28, 30 and 32 weeks were all around 106/64. Almost apologetically she mentions that her head has ached for two days and her hands look swollen.\n\nShould 138/86 reassure anyone in this room?\n\nAnswer: No. The reading is below the threshold, but the trend has climbed more than 30 points from her own baseline, and headache with swollen hands completes a pre-eclampsia warning picture. She needs urgent review, urine testing and close monitoring — the trend and the symptoms make this an escalation, not a reassurance.",
      },
      {
        type: "memory_trick",
        body: "Photo versus film: one reading is a photo, the chart is the film. And pin '140 over 90 in pregnancy = stop and screen' to the wall — headache, vision, epigastric pain, oedema, urine.",
      },
      {
        type: "summary",
        body: "- Adult normals: 36.1–37.2 °C, pulse 60–100, respirations 12–20, BP below 120/80.\n- In pregnancy the pulse rises 10–20 beats and BP dips in the second trimester.\n- From 20 weeks, 140/90 is the pre-eclampsia threshold — screen with symptoms and urine.\n- Haemoglobin below 11 g/dL in pregnancy counts as anaemia.\n- Compare every value with her baseline: the trend beats any single reading.",
      },
    ],
    questions: [
      {
        topic: "Normal Findings",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the normal resting respiratory rate range for a healthy adult?",
        options: [
          "6–10 breaths per minute",
          "12–20 breaths per minute",
          "24–30 breaths per minute",
          "30–40 breaths per minute",
        ],
        correctIndex: 1,
        explanation:
          "Adults normally breathe 12–20 times per minute at rest, counted over a full minute. Rates above 24 are a red flag; rates below 12 suggest depression or deterioration.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Normal Findings",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "From 20 weeks of pregnancy, which blood pressure reading triggers a full pre-eclampsia screen?",
        options: [
          "120/80",
          "130/85",
          "140/90",
          "150/100 only",
        ],
        correctIndex: 2,
        explanation:
          "140/90 or more from 20 weeks is the threshold for pregnancy-related hypertensive disorders. It demands screening for headache, visual changes, epigastric pain, oedema and urine protein — waiting for 150/100 is waiting too long.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Clinical Judgment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman at 34 weeks has a BP of 138/86 today. Her last three ANC readings were 106/64, and she reports a two-day headache with swollen hands. What does this represent?",
        options: [
          "A rising trend with pre-eclampsia warning signs — she needs urgent review now",
          "Reassurance, since the reading is below 140/90",
          "White coat anxiety — recheck in one month",
          "A normal third-trimester pattern",
        ],
        correctIndex: 0,
        explanation:
          "The trend has jumped more than 30 points from her baseline, and headache plus oedema complete the warning picture. The trend and symptoms together make this urgent — the single number alone would falsely reassure.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Normal Ranges",
        front: "What are the normal adult ranges for the big four?",
        back: "Temperature 36.1–37.2 °C, pulse 60–100/min, respirations 12–20/min, blood pressure below 120/80, capillary refill under two seconds.",
      },
      {
        topic: "Pregnancy Changes",
        front: "Which BP threshold from 20 weeks triggers a pre-eclampsia work-up?",
        back: "140/90 or higher — check headache, vision, epigastric pain, oedema and urine protein, and escalate.",
      },
      {
        topic: "The Trend",
        front: "Why compare today's reading with the last one?",
        back: "A single number is a photo; the chart is the film. 138/86 is normal for one woman and a warning for another whose baseline was 106/64.",
      },
    ],
    sources: [
      {
        organization: "Royal College of Physicians",
        title: "National Early Warning Score (NEWS) 2",
        year: "2017",
        url: "https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/",
      },
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549919",
      },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "health-assessment",
    moduleTitle: "Thinking About What You Find",
    lessonTitle: "Which Finding Should You Report Immediately?",
    description:
      "Some findings wait for the morning round. Others cannot wait ten minutes. Learning which is which is what makes a student safe.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "List the red-flag findings that require immediate escalation.",
      "Explain how to report an urgent finding using a structured approach.",
      "Apply the 'report early' rule whenever you are uncertain about a finding.",
    ],
    tags: ["escalation", "prioritization", "red flags", "safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every shift you will see dozens of findings. Most can wait for the ward round; a few cannot wait ten minutes. The skill that separates a safe student from a risky one is knowing the difference — and having the courage to act on it.\n\nIn this lesson you will meet the red-flag findings of maternity care, learn how to report them so help comes fast, and plant the one rule that keeps patients alive: when in doubt, report.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Learn the red flags that end all waiting. Heavy vaginal bleeding — a pad soaked within an hour, or steady trickling — is an emergency you shout about. A blood pressure of **140/90 or more with headache, blurred vision or epigastric pain** is a pre-eclampsia emergency. A fever of 38 °C or more after birth with foul-smelling lochia or a fast respiratory rate points to **puerperal sepsis**, which can overwhelm a woman within hours. A respiratory rate above 24, a sudden change in consciousness, a convulsion, absent fetal movement or an absent fetal heart — all go straight to the senior midwife.\n\nWhen you report, be structured: who she is, what you found, what you need. SBAR — Situation, Background, Assessment, Recommendation — keeps a frightened report clear. And stay with the patient until help arrives; never leave a deteriorating woman alone.\n\nUnder all the rules sits one rule: if you are unsure whether a finding is serious, report it anyway. Nobody is ever scolded for escalating too early.",
      },
      {
        type: "clinical_pearl",
        body: "The reputation you want on the ward is the student who calls early. Errors live in the gap between 'I noticed something' and 'I told someone' — close that gap immediately.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On the postnatal ward at 10 p.m., you find a day-three mother with a temperature of 38.6 °C. Her lochia smells foul, her respirations are 26 per minute, and to you she looks 'just not right'. You are tempted to chart the vitals and mention it on the morning round when the doctors come.\n\nWhat does this decision depend on, and what should happen in the next five minutes?\n\nAnswer: It depends on knowing that fever plus foul lochia plus a rising respiratory rate is the picture of puerperal sepsis — a killer that moves in hours, not days. In the next five minutes: take her full vitals, stay with her, and report now to the senior midwife using SBAR. The morning round is far too late; the next steps will likely be urgent review, intravenous access and antibiotics.",
      },
      {
        type: "memory_trick",
        body: "The ward's Big Six Shouts: **Blood, Breath, Baby, Brain, Blood pressure, Burning** — bleeding, respiratory rate above 24 or a saturation crash, fetal heart or movement lost, drowsiness or convulsion, 140/90 with warning signs, fever with foul lochia. Any one of them, and you are already walking to find the senior.",
      },
      {
        type: "summary",
        body: "- Heavy bleeding, pre-eclampsia signs, sepsis pictures, RR above 24, consciousness change and fetal concerns: report now.\n- Use SBAR when reporting: who she is, what you found, what you need.\n- Stay with the patient until senior help arrives.\n- Never park a worrying finding for the morning round.\n- Unsure whether it is serious? Report anyway — early escalation is never punished.",
      },
    ],
    questions: [
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "An hour after delivery, a woman's pad is fully soaked with blood. What do you do?",
        options: [
          "Chart it and check again in two hours",
          "Report immediately to the senior midwife, call for help and stay with her",
          "Wait for the doctor's round to mention it",
          "Encourage fluids and rest, then reassess",
        ],
        correctIndex: 1,
        explanation:
          "A pad soaked within an hour of birth suggests postpartum haemorrhage — a leading killer of mothers. Shout for help, stay with her, and escalate immediately; bleeding can become catastrophic in minutes.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A day-three postnatal mother has a temperature of 38.6 °C, foul-smelling lochia and a respiratory rate of 26. What is the priority?",
        options: [
          "Document the findings and review at the next shift",
          "Give antibiotics from ward stock without review",
          "Report immediately — this is a possible puerperal sepsis",
          "Tepid sponging and paracetamol, then reassess in the morning",
        ],
        correctIndex: 2,
        explanation:
          "Fever, foul lochia and tachypnoea together form the sepsis picture, which progresses within hours. Report now with full vitals and SBAR; treatment decisions belong to the senior team, and cooling measures treat the thermometer, not the cause.",
        courseSlug: "health-assessment",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You notice a reading that feels wrong, but you cannot say why. What is the safe move?",
        options: [
          "Report your concern anyway — uncertainty is a reason to escalate, not to wait",
          "Wait until you understand what it means before reporting",
          "Say nothing; you are a first-year and may be wrong",
          "Ask the patient's relatives what they think first",
        ],
        correctIndex: 0,
        explanation:
          "Safe systems run on early warning, not on complete diagnosis. Your unease may be pattern recognition you cannot yet name. Reporting it costs a few minutes of a senior's time; not reporting it can cost a life.",
        courseSlug: "health-assessment",
      },
    ],
    flashcards: [
      {
        topic: "Red Flags",
        front: "Name six findings you report immediately on a maternity ward.",
        back: "Heavy bleeding; respiratory rate above 24 or a saturation crash; lost fetal movement or heart; drowsiness or convulsion; 140/90 plus warning signs; fever with foul lochia (sepsis).",
      },
      {
        topic: "Escalation Rule",
        front: "You are unsure whether a finding is serious. What is the rule?",
        back: "Report it anyway. Uncertainty is a reason to escalate, not to wait — no one is ever scolded for calling early.",
      },
      {
        topic: "Puerperal Sepsis",
        front: "Fever 38.6 °C, foul lochia, respiratory rate 26 on day three postnatal. What is this and when do you act?",
        back: "Possible puerperal sepsis — act within minutes: full vitals, stay with her, SBAR report to the senior midwife now.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "Elsevier", title: "Myles Textbook for Midwives (17th edition)" },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Communicating in Care",
    lessonTitle: "Communication Foundations in Care",
    description:
      "You speak with your words, your body and your pen — and patients believe all three. When the channels disagree, they believe the loudest one.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe verbal, non-verbal and written communication as the three core channels in care.",
      "Explain congruence — why words and body language must match.",
      "Apply active listening and plain language on the ward.",
    ],
    tags: ["communication", "basics", "active listening", "non-verbal"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Communication is not a soft extra to 'real' clinical work — it is clinical work. Almost everything a midwife does — taking a history, giving news, teaching a mother, calming a frightened woman — travels along communication. And it travels on three channels at once: the words you speak, the body that speaks them, and the notes you write.\n\nIn this lesson you will meet the three channels, learn why they must all carry the same message, and pick up two habits — active listening and plain language — that immediately improve every conversation you have.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Verbal communication is the words and the voice: plain language instead of jargon, short sentences, a pace the patient can follow. 'The baby's head has settled well down in the birth passage' heals better than 'the vertex is deeply engaged at station minus two.' Save the technical words for the chart; speak the words she speaks.\n\nNon-verbal communication is everything your body says while your mouth talks: posture, distance, gesture, touch, and the timing of your silences. Face her squarely, keep an open posture, lean slightly forward, let your eyes meet hers warmly — noticing that in many Ghanaian settings eye contact is offered gently rather than stared. If your mouth says 'everything is fine' while your face says otherwise, she believes the face. That match between channels is called **congruence**.\n\nWritten communication is the chart: factual, timed and signed. It speaks for you when you are off duty, and long after the shift is forgotten. Three channels, one message — that is the foundation.",
      },
      {
        type: "clinical_pearl",
        body: "Before every conversation, put the chart down, square your shoulders to her, and let your face settle. Two seconds of arrangement makes everything after it more honest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student counselled a newly delivered mother on breastfeeding with accurate words: 'exclusive for six months, feed on demand, eight or more times a day.' But she delivered the speech standing at the door, arms folded, glancing at the clock. That evening, the mother asked the ward cleaner instead whether 'formula at night' was allowed.\n\nThe words were right — so why did the message fail?\n\nAnswer: The channels disagreed. Folded arms, the distance and the clock-glances said 'I am busy; do not trouble me', and the mother believed the body over the words — congruence failed, so the teaching never landed. Sitting down, facing her and matching warmth to the accurate content would have opened the door to her real questions.",
      },
      {
        type: "memory_trick",
        body: "Your **three mouths** must say the same thing: face, voice, pen. Before you speak, run the SOLER check — Sit squarely, Open posture, Lean forward, Eye contact, Relaxed.",
      },
      {
        type: "summary",
        body: "- Verbal: plain words, short sentences, a pace she can follow — jargon belongs on the chart.\n- Non-verbal: posture, distance, gesture, touch and silence speak louder than words.\n- Congruence means all channels match; when they disagree, the body wins.\n- Written notes speak for you when you are gone — keep them factual, timed and signed.\n- SOLER — Sit squarely, Open posture, Lean forward, Eye contact, Relaxed.",
      },
    ],
    questions: [
      {
        topic: "Communication Channels",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your words say 'all is well' but your face shows worry. What will the patient most likely believe?",
        options: [
          "The face and body language",
          "The words",
          "Neither channel",
          "The medication chart only",
        ],
        correctIndex: 0,
        explanation:
          "Patients trust the non-verbal channel when the two disagree — tone, posture and expression are harder to fake than words. This is why congruence, the match between channels, matters more than a perfect script.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Communication Channels",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Egan's SOLER guide to active listening, what does the L stand for?",
        options: [
          "Listen quietly",
          "Lean slightly forward",
          "Leave the room",
          "Lower your voice",
        ],
        correctIndex: 1,
        explanation:
          "SOLER: Sit squarely, Open posture, Lean slightly forward, Eye contact, Relaxed. Leaning forward slightly signals attention — the body listening along with the ears.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Communication Channels",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sentence is best when explaining to a mother that her baby's head is low in the pelvis?",
        options: [
          "'The vertex is deeply engaged at station minus two.'",
          "'The baby's head has settled well down into the birth passage — that is good news.'",
          "'Station minus two — you know, the ischial spine landmarks.'",
          "'The doctor will explain the obstetric parameters later.'",
        ],
        correctIndex: 1,
        explanation:
          "Plain language carries the same truth without the jargon: she understands, remembers and can ask questions. Technical phrasing either loses her or shuts the conversation down.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Communication Channels",
        front: "What are the three channels of communication in care?",
        back: "Verbal (words and voice), non-verbal (posture, gesture, touch, silence) and written (the chart). All three must agree.",
      },
      {
        topic: "Congruence",
        front: "What is congruence in communication?",
        back: "The match between words and body language. When they disagree, patients believe the non-verbal channel — the face beats the mouth.",
      },
      {
        topic: "SOLER",
        front: "What does SOLER stand for?",
        back: "Sit squarely, Open posture, Lean slightly forward, Eye contact, Relaxed — Egan's active-listening posture.",
      },
    ],
    sources: [
      { organization: "CRC Press", title: "Silverman, Kurtz & Draper: Skills for Communicating with Patients (3rd edition)" },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Communicating in Care",
    lessonTitle: "Overcoming Barriers to Communication",
    description:
      "Pain, fear, language, noise and hierarchy — five walls can rise between you and your patient. Every one of them has a door.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Identify the five common barriers to communication in care.",
      "Explain correct interpreter etiquette when a patient does not speak your language.",
      "Apply teach-back and pain-first strategies to overcome barriers.",
    ],
    tags: ["barriers", "communication", "interpreter", "teach-back"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Communication would be easy if patients were comfortable, unafraid, fluent in your language, standing somewhere quiet, and confident that staff are approachable. Patients are rarely all five at once. Between you and the woman in front of you, five walls can rise: pain, fear, language, noise and hierarchy.\n\nThe good news is that each wall has a door. This lesson walks you through the five barriers and the practical habits that open them — including the rules of working with an interpreter, which every Ghanaian ward needs almost daily.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Pain blocks conversation: a woman in severe pain cannot listen, decide or absorb. The door is simple — assess and treat the pain first, then counsel. Reassurance given mid-contraction is wasted. Fear silences questions: acknowledging fear out loud — 'I can see this worries you; many women worry' — lowers the wall faster than any fact.\n\nLanguage needs an interpreter, and interpreter work has rules. Speak to the patient, not about her, and let your eye contact follow. Use short segments. Never use a child to interpret adult matters, and be careful with relatives who may 'protect' her by softening what is said. Noise and crowding drown quiet voices: move closer, create privacy with screens or a quiet corner, and lower your own voice.\n\nHierarchy is the quietest wall: patients who feel staff are too senior to question simply stop saying what they do not understand. The door is **teach-back**: 'Just so I know I explained it well — tell me how you will take the medicine at home.' Notice it blames your explanation, never her understanding.",
      },
      {
        type: "clinical_pearl",
        body: "Treat pain before teaching, and blame yourself in teach-back: 'so I know I explained it clearly.' The barrier is never her failure to understand — it is your failure to check.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman admitted with bleeding in early pregnancy speaks only Ewe. The student on duty speaks Twi and English. The woman's ten-year-old daughter, who attends school in town, offers to translate 'because she speaks English well.' The ward is full, the girl is eager, and the student is tempted.\n\nWhat is wrong with this arrangement, and what is the better path?\n\nAnswer: Using a child to interpret distressing adult information burdens the girl and risks distorting facts her mother must hear plainly. Find an adult interpreter — a colleague, a clerk or cleaner on shift, or another patient who speaks both languages — then speak directly to the woman in short segments, and confirm understanding with teach-back rather than a nod.",
      },
      {
        type: "memory_trick",
        body: "Picture five walls between you and her, each with a door: Pain → treat it. Fear → name it. Language → find an adult voice. Noise → move. Hierarchy → teach-back.",
      },
      {
        type: "summary",
        body: "- Pain, fear, language, noise and hierarchy are the five common barriers.\n- Treat pain before counselling; acknowledgement lowers fear.\n- Use adult interpreters, speak to the patient, keep sentences short; never a child.\n- Create privacy and reduce noise before important conversations.\n- Close with teach-back, blaming your explanation — not her understanding.",
      },
    ],
    questions: [
      {
        topic: "Barriers to Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A ten-year-old offers to interpret for her mother during a discussion of miscarriage. What is the best response?",
        options: [
          "Accept — children learn fast and the ward is busy",
          "Accept, but ask her to soften the difficult words",
          "Decline and find an adult interpreter who speaks both languages",
          "Write the news on paper for the child to read out",
        ],
        correctIndex: 2,
        explanation:
          "Children should not carry adult clinical news — it burdens the child and invites distortion or filtering. Find an adult interpreter, speak to the mother in short segments, and check understanding with teach-back.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Barriers to Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman in severe labour pain needs to consent to an examination. What comes first?",
        options: [
          "A detailed explanation of the consent form",
          "Assessment and management of her pain, then discussion and consent",
          "Asking her partner to persuade her",
          "Postponing all communication until after delivery",
        ],
        correctIndex: 1,
        explanation:
          "Pain is a communication barrier: information given mid-severe-pain is rarely heard or retained. Assess and manage the pain first — then explain, discuss and obtain consent properly.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Barriers to Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which teach-back phrasing blames the student, not the patient?",
        options: [
          "'Do you understand what I said?'",
          "'Are you listening properly?'",
          "'Tell me how you will take this medicine at home, so I know I explained it well.'",
          "'Repeat back what I just told you.'",
        ],
        correctIndex: 2,
        explanation:
          "'Do you understand?' pressures the patient to say yes; 'repeat what I said' sounds like a test. Framing it as a check on your own explanation gives her safe permission to reveal gaps.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Barriers",
        front: "Name the five common barriers to communication in care.",
        back: "Pain, fear, language, noise and hierarchy. The doors: treat pain, name fear, use an adult interpreter, create privacy, teach-back.",
      },
      {
        topic: "Interpreter Etiquette",
        front: "Three rules when working with an interpreter?",
        back: "Speak to the patient (not about her), use short segments, and never use a child to interpret adult matters.",
      },
      {
        topic: "Teach-back",
        front: "What is teach-back, and why blame yourself?",
        back: "Asking the patient to explain the plan in her own words — framed as checking your explanation, 'so I know I explained it well', so she can safely admit gaps.",
      },
    ],
    sources: [
      { organization: "CRC Press", title: "Silverman, Kurtz & Draper: Skills for Communicating with Patients (3rd edition)" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "Elsevier", title: "Myles Textbook for Midwives (17th edition)" },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Communicating in Care",
    lessonTitle: "Therapeutic Communication: Healing Through Words",
    description:
      "Some conversations do more than gather information — they heal. The techniques have names, and you can learn them like any other skill.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe therapeutic techniques: open questions, silence, reflection, clarification and summarising.",
      "Differentiate empathy from sympathy and from false reassurance.",
      "Apply the techniques in difficult conversations such as loss and grief.",
    ],
    tags: ["therapeutic communication", "techniques", "empathy", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some conversations simply collect facts — a temperature, a due date, a next of kin. Others do something more: they steady a frightened woman, give a grieving mother room to breathe, or help someone decide about her own body. Those are therapeutic conversations, and they are built from named, learnable techniques — not from a special personality you must be born with.\n\nIn this lesson you will learn the core techniques, meet the habits that accidentally harm, and practise holding the hardest conversations of all — those around loss.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "An **open question** opens the story: 'What is troubling you most today?' invites far more than 'Do you have pain?', which closes it with a yes. **Silence** is the most underrated tool: after she stops speaking, count five before filling the gap — patients use that space to say what matters most, often the thing they almost did not mention. **Reflection** echoes her words with her feeling: 'It sounds as though the pain frightens you more than anything.' **Clarification** digs deeper: 'Tell me more about the nights.' **Summarising** gathers the thread so she can correct you before care is planned. Together: **OARS** — Open questions, Affirmations, Reflections, Summarising.\n\nWhat is not therapeutic also has names. False reassurance — 'don't worry, everything will be fine' — promises what you cannot promise and teaches her to stop telling you things. 'Why' questions ('why did you wait so long?') sound like blame. Changing the subject to soothe your own discomfort steals her chance to grieve. **Empathy** — 'this is very hard; I am here with you' — is not pity. It is presence.",
      },
      {
        type: "clinical_pearl",
        body: "After bad news, say the true thing and then be quiet: 'I am so sorry.' Silence is not empty — it is the space where a person begins to hold what has happened.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman who delivered a stillborn baby three days ago begins to cry when you bring her the discharge folder. Your classmate, meaning well, says: 'Don't cry — at least you are young, you can have another one soon.' The woman turns her face to the wall and stops talking.\n\nWhat made this well-meant sentence wounding, and what would you say instead?\n\nAnswer: 'At least' sentences and 'don't cry' ask a grieving mother to hurry past her loss, as if this baby were replaceable. Instead: sit down at her level, offer presence — 'I am so sorry about your baby' — and let the silence be. Reflect what she says when she speaks. Nothing you can say will fix this loss; the healing is in her not being alone in it.",
      },
      {
        type: "memory_trick",
        body: "OARS steers every hard conversation: Open questions, Affirmations ('you coped so well'), Reflections ('it sounds frightening'), Summarising. And ban the two poison phrases: 'at least' and 'don't worry'.",
      },
      {
        type: "summary",
        body: "- Open questions invite the story; closed questions collect a yes or no.\n- Silence — five unhurried seconds — invites what matters most.\n- Reflection repeats her feeling; clarification digs; summarising checks.\n- OARS: Open questions, Affirmations, Reflections, Summarising.\n- Avoid false reassurance, 'why' questions and 'at least' sentences — empathy is presence, not pity.",
      },
    ],
    questions: [
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is an open question?",
        options: [
          "'Do you have pain?'",
          "'Is the baby feeding?'",
          "'What is troubling you most today?'",
          "'Did you sleep well?'",
        ],
        correctIndex: 2,
        explanation:
          "Open questions cannot be answered with yes or no, so they invite the patient's story — the concerns you did not think to ask about. The other three are closed questions, useful for facts but not for opening a conversation.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother cries three days after a stillbirth. Which response is therapeutic?",
        options: [
          "'Don't cry — you can try again soon.'",
          "'At least you are young.'",
          "'Everything happens for a reason.'",
          "'I am so sorry. I am here with you.'",
        ],
        correctIndex: 3,
        explanation:
          "Presence without fixing is the therapeutic response. 'Don't cry', 'at least' and 'everything happens for a reason' all ask her to skip her grief — the loss of this baby is not replaceable and not explainable away.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You tell a patient 'Don't worry, everything will be fine' after a worrying finding. What is the risk?",
        options: [
          "None — positivity aids healing",
          "She may stop reporting her real symptoms because you dismissed her worry",
          "She will only ask more questions",
          "It is harmful only with elderly patients",
        ],
        correctIndex: 1,
        explanation:
          "False reassurance promises an outcome you cannot guarantee and signals that her worries are unwelcome — so she stops sharing them, exactly when you most need to hear about new symptoms.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "OARS",
        front: "What does OARS stand for in therapeutic communication?",
        back: "Open questions, Affirmations, Reflections, Summarising — the backbone of helpful conversations.",
      },
      {
        topic: "Silence",
        front: "Why count to five after a patient stops speaking?",
        back: "Patients often use that silence to voice what matters most — the thing they almost did not say. Filling it too quickly takes it away.",
      },
      {
        topic: "False Reassurance",
        front: "Why is 'don't worry, everything will be fine' harmful?",
        back: "It promises what you cannot promise and teaches the patient to stop telling you her real worries and symptoms.",
      },
    ],
    sources: [
      { organization: "CRC Press", title: "Silverman, Kurtz & Draper: Skills for Communicating with Patients (3rd edition)" },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Professional Writing",
    lessonTitle: "Documentation in Practice: Writing That Protects",
    description:
      "The chart speaks for the patient when she cannot, and for you when you are not there. Writing that protects is a clinical skill, not a chore.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "List the essential elements of a legal-quality clinical note.",
      "Explain how to correct an entry without destroying the record.",
      "Apply factual, objective, quotation-based writing to ward notes.",
    ],
    tags: ["documentation", "records", "legal", "charting"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Long after your shift ends, the chart keeps working: it speaks to the next midwife at 2 a.m., to the doctor at the morning round, to the court if care is ever questioned, and to the patient herself. Documentation is the only part of your care that outlives the shift — which is why writing that protects is a clinical skill, not paperwork.\n\nIn this lesson you will learn the skeleton every entry needs, the difference between fact and opinion, how to correct an error without destroying a legal record, and the old rule that decides audits and lawsuits alike: if it was not documented, it was not done.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every entry needs the same skeleton: date, time, what you observed or did, your signature and your designation. Chart as close to real time as the ward allows, and never pre-date or back-date an entry to look tidy.\n\nFactual writing reports what you saw and heard, not what you concluded. 'BP 148/96, reports headache and epigastric pain' is a record; 'not doing well' is an opinion, and 'stable' means nothing unless the numbers sit beside it. Quote the patient's own words in quotation marks — 'I feel the baby moving less since yesterday' — because her words are evidence, and paraphrase smooths them away. Chart refusals too: a declined medicine, a woman who absconded, advice given and her response to it.\n\nCorrections have one rule: a single line through the error, the correction written beside it, initialled and dated. Never erase, never scribble over, never use correction fluid — the record is a legal document, and an entry that looks altered protects no one.",
      },
      {
        type: "clinical_pearl",
        body: "Write every note as if the patient's lawyer, the next midwife and your own future self will read it tomorrow — all three should find it clear, honest and complete.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a review after a near-miss, the folder of a woman with pre-eclampsia shows the 8 a.m. entry: 'Patient stable. Continue monitoring.' The vital-signs chart shows 148/96 at that same hour, and the nursing notes record that she had a headache. The midwife insists she noticed everything; the record says nothing.\n\nWhat did 'stable' cost this woman, and how should the entry have read?\n\nAnswer: 'Stable' hid the one finding that mattered. The record should carry the data: '8 a.m. — BP 148/96, pulse 88, reports headache; senior midwife informed, review within 30 minutes.' A note without numbers cannot guide the next shift or defend the care given — an opinion in place of facts is a gap in the record where harm hides.",
      },
      {
        type: "memory_trick",
        body: "Write in **FACTS**: Factual words, Attributed quotes, Complete details, Timed and dated, Signed with designation. The correction rule is one line: strike, correct, initial — never erase.",
      },
      {
        type: "summary",
        body: "- Every entry: date, time, findings or care, signature, designation.\n- Facts and patient quotations over opinions — 'stable' means nothing without numbers.\n- Chart refusals, absconding and advice given, not just medicines and vitals.\n- Correct errors with a single strike-through, correction, initial and date — never erase.\n- If it was not documented, it was not done.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You accidentally write a wrong medicine dose in the notes. What is the correct way to fix it?",
        options: [
          "Erase it with the ward rubber and rewrite the note",
          "Cover it with correction fluid and continue",
          "A single line through it, correction written beside, initialled and dated",
          "Leave it and explain verbally at handover",
        ],
        correctIndex: 2,
        explanation:
          "The record is a legal document: the original error must remain visible but struck through with one line, corrected, and the change initialled and dated. Erasing or covering makes the whole record look tampered with and protects no one.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 8 a.m. a woman's BP is 148/96 and she reports a headache. The student writes 'Patient stable. Continue monitoring.' What is the main problem?",
        options: [
          "'Stable' is an opinion without data — the numbers and symptoms belong in the note",
          "The entry is grammatically incomplete",
          "Only doctors may write 'stable'",
          "The note lacks the patient's signature",
        ],
        correctIndex: 0,
        explanation:
          "An opinion in place of facts hides deterioration. The entry must carry the actual readings and her reported symptoms plus what was done — that is the record the next shift and any review will rely on.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother tells you 'I feel the baby moving less since yesterday.' How is this recorded?",
        options: [
          "Summarise it as 'fetal movement reduced'",
          "Chart: mother reports 'I feel the baby moving less since yesterday'",
          "Write 'complaining a lot'",
          "Omit it — it is not objective data",
        ],
        correctIndex: 1,
        explanation:
          "Her exact words are evidence — quotation marks preserve the pattern and timing she reported, which matters for fetal assessment. Summaries and judgments smooth away detail; omission removes evidence entirely.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Note Structure",
        front: "What must every chart entry carry?",
        back: "Date, time, what you observed or did, your signature and designation — charted as close to real time as possible.",
      },
      {
        topic: "Correction Rule",
        front: "How do you correct an error in the legal record?",
        back: "One line through the error, the correction beside it, initialled and dated. Never erase, scribble over or use correction fluid.",
      },
      {
        topic: "Factual Writing",
        front: "Why quote the patient's exact words in the notes?",
        back: "Her words are evidence; paraphrase smooths them away. 'I feel the baby moving less since yesterday' records a pattern a summary may lose.",
      },
    ],
    sources: [
      { organization: "Nursing and Midwifery Council of Ghana", title: "Code of Professional Conduct for Nurses and Midwives" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Professional Writing",
    lessonTitle: "Handover and Team Communication",
    description:
      "Every shift ends with a baton pass. Drop the baton and the patient pays. Structure is how you hold on.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe SBAR and its four components.",
      "Explain what makes handovers fail — omission, noise and assumptions.",
      "Apply structured, interactive handover for high-risk patients.",
    ],
    tags: ["handover", "teamwork", "sbar", "safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Twice a day, every ward performs a baton pass: the outgoing shift hands the patients to the incoming one. Studies of hospital harm keep finding the same weak seam — information that stayed in the head of the nurse going home. The patient is fine at 7 p.m. and deteriorating at 9 p.m., and nobody connecting the two shifts knows the whole story.\n\nThis lesson teaches the stitch for that seam: a structured handover built on SBAR, given and received well, with the high-risk patients first and the loop closed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**SBAR** is the standard structure. **Situation**: who she is and why you are worried — 'Madam Yaa, room 4, day one after delivery, blood pressure climbing.' **Background**: the relevant history — 'first pregnancy, booked at 20 weeks, pressures normal until last night.' **Assessment**: your findings — 'BP 152/98 now, pulse 96, headache, no visual symptoms, urine protein trace.' **Recommendation**: what you need — 'she needs review within 30 minutes; I have kept her on her left side and the fetal heart is being monitored.'\n\nHand over face to face, at the bedside where the ward layout allows, so the incoming midwife can ask questions and see the patient. Give the highest-risk patients first, while everyone is fresh, and back verbal report with the written chart. Close the loop on instructions by repeating them back — read-back confirms the message arrived before the outgoing shift leaves.\n\nThe classic failure is the warm assumption: 'she's fine, you know Madam Yaa' — she is known to you, and a stranger to the next shift. Familiarity transfers nothing; facts transfer care.",
      },
      {
        type: "clinical_pearl",
        body: "Never hand over a name with 'she's fine, you know her.' Hand over facts. If your recommendation feels demanding, that is SBAR working — clear asks with times attached are how patients get seen.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the 7 p.m. handover on the postnatal ward, a tired student says: 'Bed 6 is fine, she's the one from Tuesday, you know her.' The incoming midwife does not know her. Two hours later, bed 6's blood pressure is 158/102 with a headache, and the story of a steadily climbing pressure since the morning comes out only after hunting through the notes.\n\nWhat was lost in that one sentence, and what would a proper SBAR have changed?\n\nAnswer: Everything that mattered was compressed into 'fine' — her identity, the day of delivery, the trend of climbing pressures, the morning's warning signs. A proper SBAR — name, day, background, current numbers, recommendation for review — would have put the incoming midwife at the bedside with her eyes open, ready to escalate before 158/102. 'You know her' transfers nothing; facts transfer care.",
      },
      {
        type: "memory_trick",
        body: "SBAR: 'She Brings All Results.' Situation — who and why worried. Background — the story so far. Assessment — your numbers now. Recommendation — your ask, with a time attached.",
      },
      {
        type: "summary",
        body: "- Handover is the seam where patients get lost; structure is the stitch.\n- SBAR: Situation, Background, Assessment, Recommendation.\n- Hand over the highest-risk patients first; back verbal report with the chart.\n- Read instructions back to close the loop before the outgoing shift leaves.\n- 'You know her' transfers nothing — hand over facts, not familiarity.",
      },
    ],
    questions: [
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR, what does the R stand for?",
        options: [
          "Recommendation",
          "Report",
          "Recovery",
          "Revision",
        ],
        correctIndex: 0,
        explanation:
          "R is Recommendation — what you need for the patient, with a time attached: 'she needs senior review within 30 minutes.' It is the part students most often leave out, and the part that triggers action.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which is a proper SBAR recommendation for a postnatal woman with BP 152/98 and headache?",
        options: [
          "'Maybe keep an eye on her tonight'",
          "'She needs senior review within 30 minutes; I have her on the left side and the fetal heart is being monitored'",
          "'Continue routine observations in the morning'",
          "'Nothing needed unless she complains more'",
        ],
        correctIndex: 1,
        explanation:
          "A recommendation states what you need, from whom, and by when — vague phrases like 'keep an eye' and 'nothing needed' leave the incoming nurse without an action and the patient without a plan.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these is the classic handover failure?",
        options: [
          "Writing too many notes in the chart",
          "Warm assumptions — 'she's fine, you know her' — instead of facts",
          "Speaking too slowly and clearly",
          "Handing over at the bedside",
        ],
        correctIndex: 1,
        explanation:
          "Warm assumptions transfer no information: the incoming midwife may not know the patient, and 'fine' hides the trend, the risks and the plan. Bedside handover and clear notes are protections, not failures.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "SBAR",
        front: "What do the letters of SBAR stand for?",
        back: "Situation (who and the worry), Background (relevant history), Assessment (your findings and numbers), Recommendation (what you need, with a time).",
      },
      {
        topic: "Handover Order",
        front: "Which patients do you hand over first, and where?",
        back: "The highest-risk patients, while attention is fresh — face to face, at the bedside where possible, backed by the written chart.",
      },
      {
        topic: "Closing the Loop",
        front: "How do you close the loop on instructions during handover?",
        back: "Repeat them back — read-back confirms the message arrived intact before the outgoing shift leaves.",
      },
    ],
    sources: [
      { organization: "WHO", title: "Patient Safety Solutions: Communication During Patient Hand-overs (Solution 3)", year: "2007" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Professional Conduct",
    lessonTitle: "Professional Boundaries and Behaviour",
    description:
      "You can care deeply without becoming her friend, her banker or her secret-keeper. Warm and boundaried is the professional way — and it is learnable.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Define professional boundaries and why they protect both patient and midwife.",
      "Identify warning signs of boundary drift, including secrets, gifts and off-duty involvement.",
      "Apply gracious ways to decline gifts and manage dual relationships in small communities.",
    ],
    tags: ["boundaries", "professionalism", "ethics", "conduct"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You chose this work because you care — and caring is your greatest clinical asset. But in close Ghanaian communities, caring needs a frame: patients who are also neighbours and church members, families who want to thank you with gifts, patients who ask you to keep little secrets. Most boundary questions arrive dressed as kindness.\n\nThis lesson defines the professional boundary, teaches the warning signs of drift, and gives you gracious words for the awkward moments — because the line protects the patient's care and your career at the same time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A professional boundary is the line between a caring relationship and a personal one. You may know the woman on your ward from church or the market — it is fine to greet her warmly by name. What stays constant is that during her care you are her midwife, not her friend: your decisions, your records and your confidentiality follow professional rules, not personal loyalty.\n\nBoundary drift has warning signs. You spend off-duty hours with one patient. You share your own problems with her. She asks you to keep something 'just between us — don't tell sister.' You begin accepting personal gifts, money or favours, or a social media friend request from a current patient. Any of these means the boundary has moved, and it is time to talk it through with your supervisor.\n\nGifts are the everyday test. Families offer out of genuine gratitude, sometimes as tradition, and refusing rudely wounds them. The professional path: thank them sincerely, explain that policy does not allow staff to accept personal gifts, and refer the matter to the ward in-charge. Money is never yours to keep, and secrets are never yours to keep either: 'I cannot promise to keep secrets, but I can promise to handle what you tell me carefully.'",
      },
      {
        type: "clinical_pearl",
        body: "When a patient says 'don't tell sister', the boundary has already slipped — and so has safety. Secrets do not protect patients; they protect harm. Bring them into the light, carefully and kindly.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student cared well for a woman for five days after a caesarean. At discharge, the husband presses an envelope of money into her hands: 'Small thing for your transport — you have been like a daughter to us.' The student knows the family; they come from her own town. She wants to accept without offending them.\n\nWhat is at stake if she accepts, and what can she say that keeps both the relationship and her integrity?\n\nAnswer: Accepting money from a patient or family, however gratefully offered, blurs the boundary and opens the door to expectations — favours, secrecy, preferential treatment — that compromise care. She can decline graciously: 'Thank you so much — your recovery and the baby are my reward. I am not allowed to accept gifts, but please tell the ward in-charge how you feel.' Warm words, a clear line, and the relationship survives intact.",
      },
      {
        type: "memory_trick",
        body: "Run the **line test** before any act: 'Would I do this if my ward in-charge were standing right here?' Gifts, secrets and off-duty visits all fail the test — notice that kindness, patience and presence all pass it.",
      },
      {
        type: "summary",
        body: "- Boundaries are the line between a caring role and a personal one.\n- Dual relationships are normal in close communities; the professional role governs during care.\n- Warning signs of drift: off-duty visits, over-sharing, secrets, personal gifts, money, social media.\n- Decline gifts graciously and refer to the ward in-charge; never keep money or secrets.\n- Line test: would I do this with my supervisor standing beside me?",
      },
    ],
    questions: [
      {
        topic: "Professional Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient asks you to keep her heavy bleeding 'just between us — don't tell sister.' Why must you refuse?",
        options: [
          "Blood loss is only the doctor's business",
          "Secrets about clinical facts blind the team — handle the information carefully, but never hide it",
          "She is testing your loyalty and should be reported",
          "It is acceptable if her husband agrees to it",
        ],
        correctIndex: 1,
        explanation:
          "Clinical secrets remove the team's ability to keep her safe — harm hides in them. Refuse the secrecy, not the patient: promise careful, professional handling and then inform those who need to know.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Professional Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family offers you an envelope of money at discharge. What is the best response?",
        options: [
          "Accept quietly — refusing is rude in our culture",
          "Accept and share it with the ward staff",
          "Thank them sincerely, explain staff cannot accept personal gifts, and refer them to the ward in-charge",
          "Report the family for attempted bribery",
        ],
        correctIndex: 2,
        explanation:
          "Warm refusal protects everyone: gratitude is acknowledged, the boundary stays clear, and the matter is transparent to the supervisor. Accepting money — even shared — compromises professional judgement; treating gratitude as bribery wounds an innocent family.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Professional Boundaries",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which action passes the 'line test' of professional boundaries?",
        options: [
          "Visiting one patient on your off-duty day",
          "Befriending her on social media during her admission",
          "Keeping her secret blood loss out of the chart",
          "Warm, professional care documented in the record",
        ],
        correctIndex: 3,
        explanation:
          "Kindness, patience, presence and honest documentation all stand up to a supervisor watching — that is the test. Off-duty visits, social media friendships during care and clinical secrets all fail it.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Boundaries",
        front: "What is the line test?",
        back: "Before any act, ask: 'Would I do this if my ward in-charge were standing beside me?' Kindness and presence pass; gifts, secrets and off-duty visits fail.",
      },
      {
        topic: "Gifts",
        front: "A family presses money into your hands at discharge. What do you do?",
        back: "Thank them warmly, explain staff cannot accept personal gifts, and refer them to the ward in-charge. Money is never kept.",
      },
      {
        topic: "Secrets",
        front: "A patient says 'don't tell sister.' What is the danger?",
        back: "Secrets about clinical facts blind the team — harm hides in them. Promise careful, professional handling, never secrecy.",
      },
    ],
    sources: [
      { organization: "Nursing and Midwifery Council of Ghana", title: "Code of Professional Conduct for Nurses and Midwives" },
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "communication-professional-practice",
    moduleTitle: "Professional Conduct",
    lessonTitle: "Reflecting on Your Communication",
    description:
      "The fastest way to improve how you come across is to look honestly at how you came across. Two lines a shift is all it takes.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe reflection as a structured review of an interaction after it happens.",
      "Apply a simple three-question model: what happened, what did I do, what will I try next.",
      "Explain how feedback from mentors and peers sharpens communication.",
    ],
    tags: ["reflection", "self-awareness", "feedback", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some students practise for three years and finish with three years of learning. Others practise for three years and finish with one year repeated three times. The difference is not talent — it is reflection: looking honestly at your own conversations, on purpose, and deciding what to try next.\n\nThe good news is that reflection does not require long essays or counselling sessions. It needs three questions, two lines of writing, and the humility to ask someone what they saw. This lesson sets up the habit.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Reflection is thinking on purpose after the event. It is not re-playing a bad moment all night — that is rumination, which drains you and changes nothing. Reflection has a shape. **What happened?** The facts: the mother asked no questions during her counselling session. **What did I do, and what did she do?** I spoke for ten minutes without pausing; she nodded and looked at the floor. **What will I try next time?** Pause after each section and finish with teach-back. One decision, and the interaction has taught you something.\n\nWrite it small or it will not survive the ward: two lines after a shift — one win, one retry — in a small notebook. In a month the notebook becomes a mirror: you see your patterns (you rush when busy, you use jargon when nervous, you interrupt when anxious) and your growth. Reflection works best with company: ask your mentor or a trusted classmate what they saw — 'How did I come across when the mother refused the examination?' is a question senior midwives respect. What you cannot see in yourself, others see plainly, and that feedback is free tuition.",
      },
      {
        type: "clinical_pearl",
        body: "Keep a two-line habit: one win, one retry, every shift. The wins teach you what to repeat; the retries are tomorrow's plan. In a year, the notebook will know you better than you know yourself.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student noticed that a mother who had agreed to everything at a family-planning session left without her chosen method and never returned for follow-up. She asked her mentor, who had watched one session, and heard: 'You explained everything correctly, but you spoke fast and never stopped — she had no door to walk her questions through.' The next clinic day, the student planned one pause after each section and teach-back at the end.\n\nWhat makes this loop — notice, ask, plan, try — more useful than simply feeling bad about the mother?\n\nAnswer: Feeling bad is rumination; it changes nothing. The loop is reflection: she noticed a real outcome, a patient lost to follow-up; sought another pair of eyes; received specific feedback — speed and no pauses; and turned it into a concrete plan — pause and teach-back. Each clinic day now tests the plan, so improvement becomes visible instead of accidental.",
      },
      {
        type: "memory_trick",
        body: "The loop has four beats: **Notice, Ask, Plan, Try**. Notice what happened; Ask someone who watched; Plan one small change; Try it next shift. One change at a time — reflection is a ladder, not a leap.",
      },
      {
        type: "summary",
        body: "- Reflection is structured review: what happened, what I did, what I will try next time.\n- Rumination replays harm; reflection extracts a lesson and a plan.\n- Two lines a shift — one win, one retry — turn a notebook into a mirror.\n- Feedback from mentors and peers is free tuition; ask specific questions.\n- One small change at a time: notice, ask, plan, try.",
      },
    ],
    questions: [
      {
        topic: "Reflection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Reflection differs from rumination because reflection:",
        options: [
          "Extracts a lesson and a concrete plan to try next time",
          "Replays the same moment again and again",
          "Focuses only on what went wrong",
          "Should be avoided after difficult shifts",
        ],
        correctIndex: 0,
        explanation:
          "Reflection ends in a decision — one small thing to try differently. Rumination circles the same painful moment without producing change, and drains you instead of teaching you.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Reflection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set matches the three reflection questions?",
        options: [
          "Who, when, where",
          "What happened, what did I do, what will I try next time",
          "What did she do, who was wrong, what should she have said",
          "Assess, diagnose, treat",
        ],
        correctIndex: 1,
        explanation:
          "The three questions move from facts to your own behaviour to a forward plan. Questions that stop at blaming the patient, or that borrow the clinical cycle, never reach 'what will I try next time' — the step that creates growth.",
        courseSlug: "communication-professional-practice",
      },
      {
        topic: "Reflection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After a counselling session, which is the most useful feedback question to ask your mentor?",
        options: [
          "Did I look professional?",
          "How did I come across when she refused the examination — what did you see me do?",
          "Was I the best student today?",
          "Do you think she likes me?",
        ],
        correctIndex: 1,
        explanation:
          "Specific questions about a specific moment get specific answers you can act on. General questions about appearance, ranking or being liked collect polite answers and teach nothing.",
        courseSlug: "communication-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Reflection",
        front: "What are the three reflection questions?",
        back: "What happened? What did I do and what did she do? What will I try next time? — always ending in one concrete plan.",
      },
      {
        topic: "Win and Retry",
        front: "What are the two lines to write after each shift?",
        back: "One win — what worked and is worth repeating — and one retry: the one small thing to try differently tomorrow.",
      },
      {
        topic: "Reflection Loop",
        front: "What are the four beats of the reflection loop?",
        back: "Notice, Ask, Plan, Try — notice what happened, ask someone who watched, plan one small change, try it next shift.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
      },
      { organization: "CRC Press", title: "Silverman, Kurtz & Draper: Skills for Communicating with Patients (3rd edition)" },
      { organization: "Elsevier", title: "Potter & Perry's Fundamentals of Nursing (10th edition)" },
    ],
  },
];
