// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 1, Semester 2 — Batch B (Foundations of Nursing II + Microbiology II)
// 13 lessons anchored to prisma/seed-data/anchors/y1s2-b.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Comfort, Skin and Wounds",
    lessonTitle: "Pain Assessment: Believing the Story Behind the Score",
    description:
      "Pain cannot be seen on any scan, so your questions become the instrument. Learn the scales, the bedside interview and the discipline of believing what the patient tells you.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain why self-report is the gold standard for pain assessment.",
      "Choose an appropriate pain scale for adults, young children and patients who cannot report pain.",
      "Apply the PQRST questions and reassess pain after giving a prescribed analgesic.",
    ],
    tags: ["pain", "assessment", "vital signs", "communication"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You will meet pain on every shift — the woman after a caesarean, the patient in sickle cell crisis, the burnt child. Yet pain is invisible. No machine measures it and no scan shows it. What you have instead is the patient's own story, and this lesson teaches you how to listen to it well.\n\nPain assessment is core nursing work, not an optional extra. The score you record tonight decides the analgesia the next midwife reviews in the morning, so asking well, charting honestly and closing the loop matter deeply.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pain is whatever the experiencing person says it is**, existing whenever she says it does. That classic definition reminds you that self-report is the gold standard. A score of 8 from a quietly smiling patient is still 8 — behaviour and vital signs are weak guides, because people express pain differently. Some cry out; some go still and silent; culture and politeness shape it all.\n\nMatch the tool to the person. The **numeric scale 0 to 10** suits alert adults. The **Wong-Baker FACES scale**, with its row of drawn faces, suits children from about three years and adults who find numbers difficult. For infants and patients who cannot report, you use **behavioural tools** — facial expression, movement, crying, how consolable they are — remembering these are supporting evidence, never proof that pain is absent.\n\nGo beyond the number with **PQRST**: what Provokes or relieves it? What Quality is it — sharp, burning, cramping? Which Region, and does it Radiate? How Severe? And Timing — when did it start, how long does it last, how often? Finally, close the loop: after giving a prescribed analgesic, **reassess** — commonly within the hour for oral medicines — and record whether the plan is actually working.",
      },
      {
        type: "clinical_pearl",
        body: "The score is a conversation starter, not a verdict. Document the patient's exact words beside the number — 'like fire in my lower belly' tells the next shift more than '8/10' alone.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ama is one day post-caesarean. She rates her pain 8 out of 10 but she is walking to the bathroom, smiling at visitors and chatting with you. A classmate whispers that nobody with 8/10 pain could smile like that, and suggests you chart a lower score. You know the evening shift will plan her overnight analgesia from whatever you write.\n\nHow should you respond — and does her smiling change the score at all?\n\nAnswer: The score stands, because pain is subjective and self-report is the gold standard; smiling does not disprove pain. Respond to your classmate kindly but firmly, then build the story with PQRST, ensure the prescribed analgesia has been given on time, reassess within the hour, and chart the score with her own words. If the plan is not controlling her pain, report it so it can be reviewed — that is the loop closing.",
      },
      {
        type: "memory_trick",
        body: "Pain reports its own PQRST — Provokes, Quality, Radiates, Severity, Timing. Run the five letters in your head at the bedside and you will never freeze wondering what to ask next.",
      },
      {
        type: "summary",
        body: "- Pain is subjective; self-report is the gold standard — believe the score the patient gives.\n- Match the tool: numeric 0–10 for alert adults, Wong-Baker FACES from about age three, behavioural tools for those who cannot self-report.\n- PQRST turns a number into a story: Provokes, Quality, Region/Radiates, Severity, Timing.\n- Reassess after intervening — pain management is a loop, not a single question.\n- Behaviour and vital signs support your assessment; they never override the report.",
      },
    ],
    questions: [
      {
        topic: "Pain Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient rates her pain 8/10 while chatting calmly with visitors. What is the correct interpretation?",
        options: [
          "Her calm behaviour overrides the score, so chart 2/10",
          "Ask her relatives to decide an average score for the chart",
          "The score stands — pain is subjective and self-report is the gold standard",
          "Withhold the observation until she visibly shows severe pain",
        ],
        correctIndex: 2,
        explanation:
          "Pain is whatever the patient says it is. Behaviour varies widely between people and cultures, so a calm manner never disproves a reported score. Chart what she reports and act on it.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Pain Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pain assessment tool is most appropriate for a 4-year-old child in sickle cell crisis?",
        options: [
          "Numeric rating scale 0 to 10",
          "Wong-Baker FACES scale",
          "Behavioural scale for patients who cannot self-report at all",
          "Blood pressure and heart rate changes as the measure of pain",
        ],
        correctIndex: 1,
        explanation:
          "From about age three, children can point to the drawn face that matches how they feel, making FACES ideal for a 4-year-old. Numeric scales need numeracy, behavioural scales are for those who cannot self-report, and vital signs are weak guides to pain.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Pain Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You give prescribed oral paracetamol for moderate pain. When should you reassess and document its effect?",
        options: [
          "Immediately, before the drug can possibly act",
          "Only at the next shift handover",
          "Only if the patient calls out in pain again",
          "Commonly within the hour, then chart the new score",
        ],
        correctIndex: 3,
        explanation:
          "Oral analgesia usually begins acting within about 30–60 minutes, so reassess in that window and record the response. This closes the loop: unrelieved pain means the plan needs review, not silent acceptance.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Pain Assessment",
        front: "What is the gold standard of pain assessment?",
        back: "Self-report — pain is whatever the patient says it is, whenever she says it exists. Behaviour and vital signs only support, never override, the report.",
      },
      {
        topic: "Pain Assessment",
        front: "What does PQRST stand for?",
        back: "Provokes/Palliates, Quality, Region/Radiates, Severity, Timing — the five-part bedside pain interview.",
      },
      {
        topic: "Pain Assessment",
        front: "Which scale for a 4-year-old in pain, and why not 0–10?",
        back: "Wong-Baker FACES — children from about age three point to the matching face. Numeric scales need numeracy; behavioural scales are for patients who cannot self-report.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing text — pain assessment chapter. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "McCaffery and Pasero's Pain: Clinical Manual",
        note: "Source of the classic definition of pain as subjective. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Patient safety",
        year: "2023",
        url: "https://www.who.int/health-topics/patient-safety",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Comfort, Skin and Wounds",
    lessonTitle: "Wound Care Principles: Protecting the Body's Barrier",
    description:
      "Every wound is a door opened in the skin's wall. Learn how the body closes it — and how your dressings, your gentleness and your observations either help or hinder.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the four phases of wound healing and what happens in each.",
      "Distinguish healing by first and second intention with ward examples.",
      "Apply the principles of clean, protect and observe — and recognise the signs of wound infection.",
    ],
    tags: ["wound care", "healing", "dressings", "skin integrity"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every wound is a door opened in the body's wall. Some doors are small, clean and stitched shut — a caesarean incision. Others are left open, gaping or dirty, and the body must close them from the inside. In this lesson you meet the healing process itself, because good wound care simply means working with it, not against it.\n\nYou will learn what normal healing looks like at each stage, so you can spot the abnormal early and protect the wound from the things that slow it: friction, contamination, harsh chemicals and unnecessary disturbance.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Healing moves through four overlapping phases. **Haemostasis** plugs the bleeding vessels within minutes. **Inflammation** follows for roughly the first few days: the wound turns red, warm and tender as vessels leak fluid and white cells flood in to clean debris — a little inflammation is healing at work, not necessarily infection. **Proliferation**, from roughly day four, lays down granulation tissue — beefy-red, bumpy, fragile — with new vessels, pulling the edges together. **Remodelling** then slowly strengthens the scar over months, which is why a fresh scar stays pink and delicate long after discharge.\n\nHow a wound closes depends on its nature. Clean, well-approximated cuts heal by **first intention** and usually quickly. Gaping or infected wounds heal by **second intention**, filling with granulation tissue from the base — slower, with a bigger scar. Some dirty wounds are left open a few days, then closed later.\n\nYour care follows three quiet principles: **clean, protect, observe**. Clean with normal saline — strong antiseptics damage the new tissue. Protect with a dressing that keeps the wound just moist: dry gauze tears new cells away, and over-wet skin macerates. Observe for infection — increasing pain after the first two days, spreading redness, warmth, swelling, purulent discharge and fever — and report it rather than simply re-dressing and walking away.",
      },
      {
        type: "clinical_pearl",
        body: "If a dressing is doing its job and the wound is progressing, leave it alone. Every unnecessary peel-back is a fresh chance for contamination — and a tear to tender granulation tissue.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is post-caesarean day two. The dressing over the incision is clean, dry and intact, and the woman's observations are stable. A classmate suggests taking the dressing down to 'clean it with strong antiseptic and fresh gauze' every day, arguing that a covered wound cannot breathe.\n\nIs the daily routine helping or harming — and what should you actually do?\n\nAnswer: It is harming. An intact, clean dressing on a healing surgical wound is left undisturbed per protocol, changed if it becomes soiled, wet through or loose — constant removal only risks contamination and damages new tissue. Inspect the surrounding skin for redness, ask about pain and chart your findings. If the dressing must come off, use aseptic technique, clean with normal saline, and look closely for the infection signs that would need reporting: spreading redness, discharge, rising pain, fever.",
      },
      {
        type: "memory_trick",
        body: "Healing dances H.I.P.-M: Haemostasis plugs, Inflammation cleans, Proliferation builds, Maturing strengthens. Hum the four steps and you can date any wound's story on the ward.",
      },
      {
        type: "summary",
        body: "- Four phases: haemostasis (plug), inflammation (clean-up — early redness can be normal), proliferation (granulation builds), remodelling (scar strengthens for months).\n- First intention: clean, closed, stitched edges. Second intention: open, granulating from the base — slower, larger scar.\n- Clean with saline, keep the wound just moist, never disturb a dressing that is working.\n- Infection alarms: rising pain after two days, spreading redness, purulent discharge, fever — report them.\n- Granulation tissue bleeds easily — handle wounds and dressings gently.",
      },
    ],
    questions: [
      {
        topic: "Wound Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A clean surgical cut with edges stitched together shortly after injury heals by which process?",
        options: [
          "Second intention, granulating from the base upward",
          "First intention, because the edges are approximated",
          "Remodelling only, with no inflammatory phase",
          "Delayed closure, because sutures were used",
        ],
        correctIndex: 1,
        explanation:
          "Clean, well-approximated wounds heal by first intention — low infection risk, minimal tissue loss, fastest healing. Gaping or infected wounds heal by second intention; delayed closure is for dirty wounds left open first.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Wound Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On post-operative day five, a wound's base shows bright red, bumpy, fragile new tissue. What does this represent?",
        options: [
          "Pus forming under the wound",
          "Necrotic tissue that should be scrubbed away",
          "Normal proliferation — granulation tissue building",
          "A sign the dressing was changed too often",
        ],
        correctIndex: 2,
        explanation:
          "Beefy-red, bumpy granulation tissue appears in the proliferation phase from roughly day four and is exactly what healing should look like. It is delicate, so clean gently with saline and protect it — never scrub it or douse it with harsh antiseptic.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Wound Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding most strongly suggests a surgical wound infection on day three?",
        options: [
          "A small amount of clear fluid on the dressing in the first 24 hours",
          "Slight bruising around the incision on day one",
          "A pink, soft scar at six weeks",
          "Increasing pain with spreading redness and purulent discharge",
        ],
        correctIndex: 3,
        explanation:
          "Infection typically declares itself after the first day or two: pain that rises instead of settles, spreading redness, warmth, swelling, purulent discharge and fever. Early clear ooze and bruising are expected parts of healing, and a pink scar at six weeks is normal remodelling.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Wound Healing",
        front: "Name the four phases of wound healing in order.",
        back: "Haemostasis (vessel plug) → Inflammation (clean-up, white cells) → Proliferation (granulation, new vessels) → Remodelling (scar strengthens over months). HIP-M.",
      },
      {
        topic: "Wound Healing",
        front: "First intention vs second intention healing?",
        back: "First intention: clean approximated edges, stitched — fast, small scar. Second intention: open or infected wound, fills with granulation from the base — slow, larger scar.",
      },
      {
        topic: "Wound Healing",
        front: "What is granulation tissue and how do you treat it?",
        back: "Beefy-red, bumpy, fragile new tissue of the proliferation phase. Clean gently with saline, keep it just moist, protect it from strong antiseptics and rough handling.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Wound care and skin integrity chapters. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        url: "https://www.who.int/teams/integrated-health-services/infection-prevention-control",
        note: "WHO IPC programme page — follow links to SSI guidelines.",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Wound and dressing practice in the Ghanaian setting. Verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "Comfort, Skin and Wounds",
    lessonTitle: "Infection Prevention in Daily Care",
    description:
      "Theory meets the bedside. Hands, sharps, linen and shared equipment — the small daily choices that decide whether organisms travel with you or stop with you.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Apply WHO's 5 Moments for hand hygiene during routine patient care.",
      "Handle sharps, soiled linen and reusable equipment safely between patients.",
      "Explain how standard precautions protect every patient on the ward, not only the 'high-risk' ones.",
    ],
    tags: ["infection prevention", "hand hygiene", "sharps", "standard precautions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You learned how infection chains work earlier in your training; now the theory meets the patient. Daily care is full of small moments — turning a woman in bed, taking a temperature, changing a soiled pad, giving an injection — and each one either spreads organisms or stops them. This lesson is about making the safe choice automatic.\n\nThe frame for everything is standard precautions: treat blood and body fluids from every patient as potentially infectious, because you cannot tell by looking who carries what. These precautions are not for 'high-risk' patients only; they are for everyone, every time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your hands are the most useful and the most dangerous instrument on the ward. Clean them at the **WHO 5 Moments**: before touching a patient, before any clean or aseptic procedure, after exposure to body fluids, after touching the patient, and after touching the patient's surroundings. Soap-and-water washing takes about 40 to 60 seconds; alcohol rub about 20 to 30. **Gloves never replace hand hygiene** — clean your hands before gloving and again after removing them, and change gloves between tasks and between patients.\n\n**Sharps** deserve total respect. Never recap a used needle; drop it directly into the puncture-proof container, fill it to three-quarters at most, and never push contents down with your fingers. If a needlestick injury happens, wash under running water, do not squeeze the wound, report immediately and follow your facility's protocol — the hours right after exposure matter for protection.\n\n**Linen and equipment carry organisms too.** Never shake soiled linen and never lay it on the floor or against your uniform — hold it away from your body, bag it at the point of use, and let laundry protocols do the rest. Wipe reusable items — stethoscope, blood pressure cuff, thermometer — between patients with an appropriate disinfectant. Finally, sort waste at the point of generation: sharps into sharps containers, infectious waste into the correct colour-coded bag, and nothing dangerous into the general bin.",
      },
      {
        type: "clinical_pearl",
        body: "The moment between patients is where infections travel. One pause, one hand-clean, and the journey ends with you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are assisting with morning care. You watch a colleague recap a used needle over the sharps bin, then pile soiled linen from one bed onto the next bed while hunting for a bag. She is moving fast, the ward is busy, and she tells you this is how she keeps the morning flowing.\n\nWhat is wrong in these two actions, and what would you do right now?\n\nAnswer: Recapping is the classic cause of needlestick injury — a slip drives the needle into the finger carrying blood-borne risk; the needle should have been dropped uncapped straight into the container. Piling soiled linen on another patient's bed transfers organisms from patient to patient and from floor level to a clean surface; it should be held away from the body and bagged at the bedside. Speak up kindly and immediately, report any injury that has already happened, and model the correct habits — a busy ward is exactly when they matter most.",
      },
      {
        type: "memory_trick",
        body: "Two little rhymes prevent most daily exposures: sharps — DROP it, don't RECAP it, the bin is the cap; linen — never shake it, never floor it, hold it away from your uniform.",
      },
      {
        type: "summary",
        body: "- Standard precautions: treat all blood and body fluids as potentially infectious, for every patient, every time.\n- Clean hands at the WHO 5 Moments; about 40–60 seconds for washing, 20–30 for rub.\n- Gloves are an extra layer, never a substitute for hand hygiene — and they change between tasks and patients.\n- Never recap sharps; drop them directly into puncture-proof containers, filled to three-quarters maximum.\n- Bag soiled linen at the bedside without shaking; wipe shared equipment between patients; segregate waste where it is generated.",
      },
    ],
    questions: [
      {
        topic: "Infection Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You have just removed your gloves after changing a dressing. What comes next?",
        options: [
          "Go directly to the next patient — gloves kept your hands clean",
          "Put on a fresh pair of gloves for the next patient",
          "Perform hand hygiene, since gloves never replace it",
          "Wash only if your hands look visibly soiled",
        ],
        correctIndex: 2,
        explanation:
          "Hands are cleaned before gloving and again after glove removal, visible soil or not — gloves can have invisible defects, and hands sweat inside them. Hands that move from one patient to the next without cleaning are the ward's busiest carrier.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Infection Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the correct way to dispose of a needle you have just used for an injection?",
        options: [
          "Recap it carefully, then drop it into the sharps container",
          "Drop it uncapped directly into the puncture-proof sharps container",
          "Place it in the general waste bin if the sharps container is far away",
          "Bend the needle to blunt it, then place it in any yellow bag",
        ],
        correctIndex: 1,
        explanation:
          "Never recap, never bend, never hand-pass sharps — carry the container to the point of use and drop the device straight in, filling to three-quarters maximum. Recapping is a leading cause of needlestick injury, and sharps never belong in general waste or soft bags.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Infection Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which practice best prevents organisms spreading when handling soiled linen?",
        options: [
          "Shake the linen outdoors to remove visible debris first",
          "Place it briefly on the ward floor while fetching a bag",
          "Carry it pressed against your uniform to free your hands",
          "Hold it away from your body and bag it at the bedside without shaking",
        ],
        correctIndex: 3,
        explanation:
          "Shaking soiled linen launches organisms into the air, the floor and your uniform contaminate it further, and hugging it against your body carries them to your next patient. Hold linen away from the body and bag it where it was removed.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Infection Prevention",
        front: "Name the WHO 5 Moments for hand hygiene.",
        back: "Before touching a patient; before a clean/aseptic procedure; after body fluid exposure risk; after touching the patient; after touching the patient's surroundings.",
      },
      {
        topic: "Infection Prevention",
        front: "The golden rule connecting gloves and hand hygiene?",
        back: "Gloves are an extra layer, never a substitute — clean hands before gloving and after removing, and change gloves between tasks and patients.",
      },
      {
        topic: "Infection Prevention",
        front: "First response to a needlestick injury?",
        back: "Wash under running water, do not squeeze, report immediately and follow the facility exposure protocol — prompt reporting protects you.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Hand hygiene and WHO's 5 Moments",
        url: "https://www.who.int/teams/integrated-health-services/infection-prevention-control",
      },
      {
        organization: "World Health Organization",
        title: "Global report on infection prevention and control",
        year: "2022",
        url: "https://www.who.int/teams/integrated-health-services/infection-prevention-control",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "National daily-practice guidance, waste segregation and sharps rules. Verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "The Observant Nurse",
    lessonTitle: "Patient Observation: The Nurse's Sixth Sense",
    description:
      "The most valuable machine on the ward is the nurse who walks in and truly sees. Build the rhythm of safe observation — how often, what to look for, and how to chart it honestly.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "State what a complete observation round includes beyond the vital signs chart.",
      "Measure respiratory rate and level of consciousness accurately.",
      "Record observations correctly, in real time, and hand over what matters.",
    ],
    tags: ["observation", "monitoring", "vital signs", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The most valuable machine on the ward is the nurse who walks in, looks, and truly sees. Observations — vital signs, level of consciousness, skin, pain, urine, appetite, mood — form the rhythm of safe care. Done well and charted honestly, they catch trouble while it is still small.\n\nThis lesson organises that rhythm: what to look at, how often to look, and how to write it down so the next person sees the story too.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "How often you observe depends on how sick the patient is and on local policy: every shift is the usual floor for stable ward patients, four-hourly when unwell, and hourly or continuous for the critically ill. When you are unsure, ask — never skip rounds because the ward is busy.\n\nEach round should cover at least: **general appearance** (posture, hygiene, how she greets you), **level of consciousness** using AVPU — Alert, responds to Voice, responds to Pain, Unresponsive — the **four vital signs** (temperature, pulse, respiratory rate, blood pressure), a **pain score**, **skin** (colour, moisture, pressure areas) and **fluid balance**, including urine output. Count the **respiratory rate for a full minute** while pretending to take her pulse — if patients know you are counting their breathing, they change it.\n\nRecording rules keep the chart honest. Write at the bedside, in real time, with objective descriptions — 'pale, quiet, sweating', never 'seems fine'. Never pre-chart values or chart from memory at the end of shift: the chart is a legal document. At handover, communicate what changed, using SBAR — Situation, Background, Assessment, Recommendation. And remember that **trend beats single reading**: a temperature climbing from 36.8 to 37.4 to 37.9 across three checks is a message, even though each number alone looks harmless.",
      },
      {
        type: "clinical_pearl",
        body: "Treat the chart like a story and read the whole page, not one word. A single normal reading can hide a patient quietly slipping — the pattern is the warning.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A postnatal woman is on four-hourly observations after a caesarean. At 18:00 her temperature is 37.0 and pulse 78. At 22:00 she feels warm; her temperature reads 37.8, pulse 96, and while she rests you count her breathing at 24 breaths per minute. She says she feels 'a bit weak' and has not passed urine since the evening check.\n\nWhat do you do with these findings, and why do they matter even though no single number looks alarming?\n\nAnswer: Chart them immediately and accurately, because together they form a rising trend — creeping fever, climbing pulse, fast breathing, no urine — the classic whisper of infection or early sepsis. Inform the senior midwife or clinician now, not at handover, increase observation frequency as advised, and look for a source: the wound, breasts, lungs, urine and IV site. Early escalation is the whole point of the observation rhythm; waiting for the numbers to look dramatic is waiting too long.",
      },
      {
        type: "memory_trick",
        body: "AVPU is a ladder — Alert, Voice, Pain, Unresponsive. Any drop of even one rung is a call-out, not just a note on the chart.",
      },
      {
        type: "summary",
        body: "- Observation frequency follows the patient's condition and local policy — every shift minimum for stable patients, four-hourly when unwell, hourly or continuous when critical.\n- A full round: appearance, AVPU, temperature, pulse, respiratory rate, blood pressure, pain, skin and fluid balance.\n- Count respiratory rate for a full minute, without the patient knowing — one breath per chest rise, minute on your watch.\n- Chart at the bedside, in real time, in objective words; the record is a legal document.\n- Trend beats single reading — read the whole page and hand over what changed, with SBAR.",
      },
    ],
    questions: [
      {
        topic: "Patient Observation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should you count a patient's respiratory rate for a full minute, ideally without her knowing?",
        options: [
          "The rate becomes faster when patients know it is being counted",
          "Patients often hold their breath for exactly thirty seconds",
          "Blood pressure cannot be taken at the same time",
          "It allows you to leave the ward for a longer break",
        ],
        correctIndex: 0,
        explanation:
          "Awareness changes breathing — people consciously control it when they know it is counted. Keep your fingers on the pulse and your eyes on the chest for a full minute so you also catch depth, effort and rhythm, not just the number.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Patient Observation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the most appropriate way to document your observations?",
        options: [
          "Chart everything from memory at the end of the shift, when the ward is quieter",
          "Write values for the whole shift in advance so the chart looks complete",
          "Chart at the bedside in real time, using objective descriptions",
          "Record only the abnormal findings, to keep the chart tidy",
        ],
        correctIndex: 2,
        explanation:
          "The chart is a legal document and a story: real-time, objective entries made where the patient is. Pre-charting is falsification, memory-charting breeds error, and omitting normal values hides the trend that gives abnormal ones meaning.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Patient Observation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient's temperature moves from 36.8 to 37.4 to 37.9 over three checks. How should you read this?",
        options: [
          "Each value is near normal, so no action is needed",
          "A rising trend — report it early and observe more frequently",
          "A falling trend, since 37.9 is still below 38.0",
          "An equipment fault, since bodies do not warm gradually",
        ],
        correctIndex: 1,
        explanation:
          "Trend beats single reading. A staircase climb across checks is the body telling you something is brewing — usually infection — and early reporting with closer observation is precisely what prevents a dramatic collapse later.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Patient Observation",
        front: "What does AVPU stand for?",
        back: "Alert; responds to Voice; responds to Pain; Unresponsive — a quick ladder for level of consciousness. Any drop of one rung is a call-out.",
      },
      {
        topic: "Patient Observation",
        front: "Why count respiratory rate for a full minute?",
        back: "Awareness changes breathing; one full minute catches the true rate plus depth and effort. It is also the most sensitive early sign of deterioration.",
      },
      {
        topic: "Patient Observation",
        front: "What belongs in every observation round besides the four vital signs?",
        back: "General appearance, AVPU level of consciousness, pain score, skin (colour, moisture, pressure areas) and fluid balance including urine output.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient safety",
        year: "2023",
        url: "https://www.who.int/health-topics/patient-safety",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Assessment, vital signs and documentation chapters. Verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "Observation and monitoring practice in Ghanaian facilities. Verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-2",
    moduleTitle: "The Observant Nurse",
    lessonTitle: "Spotting the Patient Who Is Getting Worse",
    description:
      "Patients rarely collapse without warning — they whisper first. Train your ear on the early signs of deterioration and the discipline of escalating before the shout.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Explain why a compensating patient can look 'not that bad' before a collapse.",
      "List the early signs of deterioration, including rising respiratory rate and pulse.",
      "Apply escalation steps: monitor closely, communicate with SBAR and stay with the patient.",
    ],
    tags: ["deterioration", "early warning", "escalation", "vital signs"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patients rarely collapse out of nowhere — they whisper first. The pulse climbs a little, breathing quickens, the patient becomes oddly quiet or confused, urine shrinks to a dribble. Learn the whispers and you can act while the fix is still simple: a bag of IV fluid, an antibiotic, a call for help.\n\nThis lesson trains your eyes on the earliest signs of deterioration and your hands on the discipline of escalation — because noticing without acting is not enough.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The body compensates to keep blood pressure looking normal while it struggles. A falling blood pressure is a **late** sign — by the time it drops, shock is already deep. The early signals come first in the **rates**: a respiratory rate creeping above 24 breaths per minute, a pulse drifting past 100, or breathing that becomes laboured, however slightly.\n\nThen come the quieter whispers: **new confusion** or unusual sleepiness; **reduced urine output** — worry when a catheterised patient makes less than about 30 mL an hour, or a ward patient passes nothing for 6 to 8 hours; **cold, clammy skin** or slow capillary refill; **worsening pain** and a frightened, restless look. Fever with fast breathing should always raise the question of **sepsis**, which can kill within hours. In bleeding after birth, remember the pattern: the pulse rises first and the blood pressure falls last.\n\nMany hospitals use an early warning chart that colour-codes these values; if yours does, follow it exactly. Escalation itself is a skill: gather the trend, call the senior or clinician, hand over with **SBAR** — Situation, Background, Assessment, Recommendation — and stay with the patient until help arrives.",
      },
      {
        type: "clinical_pearl",
        body: "The quiet patient is not always the stable patient. Sometimes the one who stops complaining is the one who no longer has the strength to.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman is one day post-caesarean. At 08:00 she was chatting and eating. At 14:00 you find her quiet under the sheet, pale and sweaty. Her pulse is 118, blood pressure 100/60 — which your classmate says is 'still normal' — and her urine bag holds only a small volume of dark urine. Her respiratory rate is 26.\n\nIs your classmate right that she is fine because the blood pressure is normal — and what do you do?\n\nAnswer: No. This is compensated deterioration: the fast pulse, fast breathing, cold sweat and collapsing urine output show a body fighting to hold its pressure — bleeding or sepsis until proven otherwise after surgery. Blood pressure falls late; waiting for it is waiting too long. Call the senior now, give a crisp SBAR with the trend since morning, stay with her, keep observations running and prepare for urgent review. Your early call may be the reason she survives.",
      },
      {
        type: "memory_trick",
        body: "The four early F's: Fast breathing, Fast pulse, Few drops of urine, Faded mind. One F — look closer. Two or more — the alarm rings and you escalate.",
      },
      {
        type: "summary",
        body: "- The body compensates: blood pressure falls late, so 'normal BP' never means 'safe patient'.\n- Early whispers: respiratory rate above 24, pulse above 100, laboured breathing.\n- Quiet whispers: new confusion or sleepiness, urine under about 30 mL/hour or none for 6–8 hours, cold clammy skin, worsening pain.\n- Fever with fast breathing — think sepsis and escalate fast; in postpartum bleeding, the pulse rises before the pressure falls.\n- Escalate with SBAR, stay with the patient, and follow your local early warning chart exactly.",
      },
    ],
    questions: [
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is a falling blood pressure considered a late sign of deterioration?",
        options: [
          "Blood pressure machines fail in emergencies",
          "The body compensates first — pulse and breathing rise to hold pressure up until reserves run out",
          "Blood pressure only falls in elderly patients",
          "Blood pressure falls early, but nurses notice it late",
        ],
        correctIndex: 1,
        explanation:
          "Compensation keeps pressure near normal while the body struggles: the heart races and vessels tighten. When pressure finally drops, reserves are nearly spent. Watch the rates — pulse and respiratory rate — for the early whispers.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which group of findings should worry you most in one patient?",
        options: [
          "A single temperature of 37.4 with everything else normal",
          "A mild headache relieved by rest and fluids",
          "Respiratory rate 28, new confusion and urine output falling",
          "A pulse of 80 that has been 80 all day",
        ],
        correctIndex: 2,
        explanation:
          "Fast breathing plus a fading mind plus shrinking urine is the classic triad of early deterioration — possible sepsis or shock. Two or more of the four F's (Fast breathing, Fast pulse, Few drops, Faded mind) demand immediate escalation, while the other options are single, stable findings.",
        courseSlug: "foundations-nursing-2",
      },
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What do the letters of SBAR stand for when you escalate a deteriorating patient?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Symptoms, Blood results, Allergies, Referral",
          "Shift, Bed number, Attending doctor, Record",
          "Stable, Borderline, At-risk, Review",
        ],
        correctIndex: 0,
        explanation:
          "SBAR gives a call structure in seconds: what is happening now (Situation), what led here (Background), what you think (Assessment) and what you need (Recommendation). It turns a panicked report into a clear one — and gets help faster.",
        courseSlug: "foundations-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Deterioration",
        front: "Why does 'normal' blood pressure not mean a stable patient?",
        back: "The body compensates — tachycardia and vasoconstriction hold pressure up until reserves fail. Rising pulse and respiratory rate are the early signs; falling BP is late.",
      },
      {
        topic: "Deterioration",
        front: "What urine output should trigger concern?",
        back: "Less than about 30 mL per hour in a catheterised patient, or no urine passed for 6–8 hours on the ward — the kidneys are being starved of perfusion.",
      },
      {
        topic: "Deterioration",
        front: "The four early F's of deterioration?",
        back: "Fast breathing, Fast pulse, Few drops of urine, Faded mind. One — look closer; two or more — escalate immediately.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sepsis",
        year: "2023",
        url: "https://www.who.int/health-topics/sepsis",
      },
      {
        organization: "Royal College of Physicians",
        title: "National Early Warning Score (NEWS2)",
        year: "2017",
        url: "https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Clinical judgment and escalation chapters. Verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Your Immune System",
    lessonTitle: "The Body's Defences: Barriers First",
    description:
      "Right now, as you read, you are under attack — and winning. Meet the skin, the acid and the flowing rivers that stop most invaders before you ever feel ill.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the physical and chemical barriers that stop most pathogens daily.",
      "Explain how skin flora, stomach acid and urine flow defend their specific sites.",
      "Identify how wounds and clinical devices breach these defences.",
    ],
    tags: ["immunity", "barriers", "innate defence", "infection prevention"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Right now, as you read, you are under attack — bacteria, viruses and fungi landing on your skin, riding your breath, riding your food. You stay well because the body's first line of defence quietly wins most of these battles before you ever feel ill.\n\nIn this lesson you meet that first line: the barriers. Understanding them explains half of infection prevention — why intact skin matters, why catheters are dangerous, and why the mouth, lungs and bladder each protect themselves in their own way.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Intact skin** is the greatest wall you own: tough, constantly shedding its outer cells, slightly acidic, and home to harmless resident bacteria that crowd out intruders. Beneath and beyond it, every opening is guarded. **Mucous membranes** trap dust and germs in sticky mucus; in the airways, millions of tiny cilia beat upward like a conveyor belt — the **mucociliary escalator** — sweeping debris up to be coughed out or swallowed. **Tears and saliva** carry lysozyme, an enzyme that punches holes in bacterial walls.\n\nChemical guards work deeper. **Stomach acid** is strong enough to kill most swallowed organisms; the constant **flow of urine** flushes the urinary tract outward, which is one reason urine should never stagnate; and **lactobacilli** keep a healthy vagina acidic and unfriendly to invaders. The gut's enormous resident flora defends in the same way, competing for food and space.\n\nEach defence is a wall, and each wall has doors. Every surgical wound, cannula, catheter, drip site, cut and abrasion bypasses a barrier. That is why caring for skin integrity, handling devices only when they are truly needed, and removing them at the earliest safe moment is frontline immune support that you personally administer.",
      },
      {
        type: "clinical_pearl",
        body: "Every device is a door through the wall. The day the catheter or cannula comes out is a day the immune system gets reinforcement.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An older woman has had an indwelling urinary catheter for four days. It was inserted 'to monitor her output accurately' during a mild illness, but the reason has long passed. Today she has a fever of 38.2, her urine looks cloudy, and she is confused — new for her. The doctor asks you why the infection arrived despite all her natural defences.\n\nWhat is your explanation, and what should be done about the catheter?\n\nAnswer: The catheter bypassed two barriers at once — the urethra's natural closure and the flushing flow of urine — and gave bacteria a surface to climb and a stagnant pool to grow in, which is exactly how catheter-associated urinary infection develops. It should be removed now that monitoring is no longer essential, with hand hygiene before and after any contact, a closed drainage system maintained throughout, perineal care given, and the infection escalated for treatment. Her confusion in this context is itself a red-flag sign of infection in an older person.",
      },
      {
        type: "memory_trick",
        body: "The body keeps its WALLS: Water flowing (urine flushes), Acid in the stomach, Linings of mucus and cilia, Lactobacilli in the vagina, Skin intact. WALLS stop most wars before they start.",
      },
      {
        type: "summary",
        body: "- Intact skin: mechanical wall, acidic surface, resident flora crowding out intruders.\n- Mucous membranes and the mucociliary escalator trap and sweep invaders out of the airways.\n- Chemical and flow defences: lysozyme in tears and saliva, stomach acid, urine flow, acidic vagina, competitive gut flora.\n- Wounds, cannulas and catheters are doors through these walls — use them only when needed and remove them early.\n- Protecting skin integrity and device discipline is immune support you personally deliver every shift.",
      },
    ],
    questions: [
      {
        topic: "Body Defences",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a first-line (barrier) defence?",
        options: [
          "Antibodies in the blood",
          "Intact skin with its acid mantle and resident flora",
          "Memory T lymphocytes",
          "Fever induced by cytokines",
        ],
        correctIndex: 1,
        explanation:
          "First-line defences are the walls: skin, mucous membranes, cilia, acid and flow. Antibodies and memory cells are adaptive immunity, and fever is a systemic response — all of those arrive after a barrier has already been crossed.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Body Defences",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the role of the mucociliary escalator?",
        options: [
          "It kills bacteria with stomach acid",
          "It traps dust and germs in sticky mucus only",
          "Cilia beat upward, sweeping trapped debris out of the airways to be coughed out or swallowed",
          "It produces antibodies on mucous surfaces",
        ],
        correctIndex: 2,
        explanation:
          "The airways trap inhaled particles in mucus, and the cilia beat in a coordinated wave upward, like a conveyor belt, carrying the debris to the throat — the reason coughing and swallowing complete the defence. This is why smoking and illness that paralyse cilia raise infection risk.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Body Defences",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does an indwelling urinary catheter increase infection risk?",
        options: [
          "Catheters are themselves infected when manufactured",
          "It bypasses the urethra's barrier and stops the flushing flow of urine, giving bacteria a surface to climb",
          "It causes the bladder to produce less acid",
          "It lowers the number of white cells in the blood",
        ],
        correctIndex: 1,
        explanation:
          "The catheter holds the urethra open and drains urine continuously, removing the outward flush that normally carries organisms away, while providing a surface for bacteria to ascend. Closed drainage, hand hygiene and early removal are the defences you control.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Body Defences",
        front: "What do the letters of WALLS describe?",
        back: "Water flowing (urine), Acid (stomach), Linings (mucus + cilia), Lactobacilli (vagina), Skin — the first-line barrier defences.",
      },
      {
        topic: "Body Defences",
        front: "What is lysozyme and where do you find it?",
        back: "An enzyme that damages bacterial cell walls, found in tears and saliva — one reason the eyes and mouth defend themselves.",
      },
      {
        topic: "Body Defences",
        front: "Why are wounds and devices described as 'doors'?",
        back: "They breach the body's barrier walls, giving microbes direct access — which is why they are used only when truly needed and removed as early as safely possible.",
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
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Standard microbiology text — innate defences chapters. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Skin integrity and device management chapters. Verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Your Immune System",
    lessonTitle: "Inside the Immune Response",
    description:
      "Inflammation, fever, pus and swollen glands are not the disease — they are the fight. Meet the fast army, the slow specialists and the antibodies that remember.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Distinguish the innate and adaptive arms of the immune response.",
      "Describe inflammation and explain what pus and swollen lymph nodes represent.",
      "Outline the roles of B cells, T cells and antibodies, including which antibody crosses the placenta.",
    ],
    tags: ["immune response", "inflammation", "antibodies", "white cells"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a germ gets past the barriers, the body's second line takes over — a fast, general emergency team followed by a slower, sharper specialist force. Inflammation, fever, pus and swollen glands are not the disease; they are the fight itself.\n\nThis lesson walks you inside that fight, because every infected wound, sore throat or febrile patient on your ward is running this same programme. Knowing what the body is doing tells you what your job is: support the fight, remove the obstacles, and call for help when the fight is being lost.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **innate response** arrives within minutes and attacks anything unfamiliar. Neutrophils pour in first and engulf invaders — much of **pus is dead neutrophils** after that battle. Macrophages follow: bigger, slower eaters that also display fragments of the enemy to alert the specialists. Natural killer cells and complement proteins join in.\n\nThe **inflammatory response** explains every sign you see at a wound: injured cells release chemicals that widen vessels — redness and heat — and make them leak — swelling and pain — letting fluid and defender cells reach the tissue. Fever is a whole-body version of the same strategy. The **adaptive response** takes days but is precise. B lymphocytes mature into plasma cells that pour out **antibodies** — proteins that flag and neutralise specific enemies. T helper cells (CD4) coordinate the response; cytotoxic T cells kill body cells already taken over by viruses. After victory, **memory cells** remain, which is why a second meeting with the same germ is crushed fast — the entire logic of vaccination.\n\nKnow your antibodies in passing: **IgM** appears first in a new infection; **IgG** is the workhorse and the only one that crosses the placenta; **IgA** guards mucous surfaces and is rich in breast milk; **IgE** handles parasites and allergies. And note carefully: HIV destroys CD4 helper cells — one reason people living with HIV can face unusual infections.",
      },
      {
        type: "clinical_pearl",
        body: "Swollen, tender glands near an infected wound mean the lymphatic drain is carrying the fight — reinforcements have been called and the battle is under way.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman delivered three days ago. Her episiotomy wound is red, swollen and painful, draining some yellow material. On the same side, her groin lymph nodes are enlarged and tender, and her temperature is 38. A student asks you to explain what is actually happening under the skin.\n\nWhat is the biological story behind each of her findings, told in the language of this lesson?\n\nAnswer: Bacteria entered through the broken barrier of the wound. The innate response ignited inflammation — vasodilation gives the redness and heat, leaky vessels the swelling and pain — while neutrophils flooded in and died fighting, forming the pus she is draining. Bacteria and debris are carried in lymph to the nearby groin nodes, where the fight continues, so the nodes swell and become tender; fever reflects the systemic spread of the inflammatory signals. Meanwhile her adaptive system is selecting antibodies against the invader. Her wound needs care, her pain relief, and the infection reported for treatment before it spreads further.",
      },
      {
        type: "memory_trick",
        body: "The Ig story: IgM Makes the first move; IgG Guards long-term and crosses to the baby; IgA stands At the mucous gates and in milk; IgE attacks worms and flares allergies.",
      },
      {
        type: "summary",
        body: "- Innate response: fast and general — neutrophils first, macrophages behind, complement and natural killer cells alongside.\n- Inflammation is the delivery system: widened vessels (redness, heat) and leaky vessels (swelling, pain); fever is the whole-body version.\n- Pus is mostly dead neutrophils; swollen tender nodes mean lymph is carrying the fight.\n- Adaptive response: B cells become plasma cells making antibodies; T helpers coordinate, cytotoxic T cells kill infected cells; memory cells persist.\n- Antibodies in brief: IgM first, IgG crosses the placenta, IgA in mucous secretions and milk, IgE in parasites and allergies; HIV targets CD4 helpers.",
      },
    ],
    questions: [
      {
        topic: "Immune Response",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is pus largely made of?",
        options: [
          "Dead bacteria only",
          "Dead neutrophils after the battle with bacteria",
          "Lymph fluid from swollen glands",
          "Broken-down red blood cells",
        ],
        correctIndex: 1,
        explanation:
          "Neutrophils pour into an infected site, engulf organisms and die in large numbers — their remains, mixed with tissue fluid and bacteria, form pus. Plenty of pus means a fierce fight is under way.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Immune Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which antibody crosses the placenta to protect the fetus?",
        options: [
          "IgA",
          "IgM",
          "IgG",
          "IgE",
        ],
        correctIndex: 2,
        explanation:
          "IgG is the only antibody class that crosses the placenta, passing mainly in the last weeks of pregnancy to shield the newborn through its most vulnerable early weeks — the basis of vaccination during pregnancy.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Immune Response",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are swollen, tender lymph nodes near an infected wound a meaningful sign?",
        options: [
          "They mean the infection has definitely spread to the blood",
          "The nodes are failing and should be massaged",
          "Lymph is carrying the fight to the nodes, where immune cells multiply in response",
          "They only occur in viral infections",
        ],
        correctIndex: 2,
        explanation:
          "Lymph drains tissue fluid — and any organisms in it — to the nearby nodes, where lymphocytes multiply to meet the threat, so the nodes enlarge and become tender. It shows the fight is active, not that treatment has failed; never massage a swollen node.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Immune Response",
        front: "Innate vs adaptive immunity in one line each?",
        back: "Innate: fast, non-specific, no memory — neutrophils, macrophages, inflammation. Adaptive: slow, specific, remembers — B cells' antibodies and T cells, with memory cells after recovery.",
      },
      {
        topic: "Immune Response",
        front: "Which antibody crosses the placenta, and which guards mucous surfaces?",
        back: "IgG crosses the placenta to the fetus. IgA guards mucous surfaces and is rich in colostrum and breast milk.",
      },
      {
        topic: "Immune Response",
        front: "Why does HIV weaken immunity against unusual infections?",
        back: "HIV destroys CD4 helper T cells, the coordinators of the adaptive response — so infections that a healthy immune system would contain become dangerous.",
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
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Innate and adaptive immunity chapters. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        note: "Immunity in childbearing — transplacental IgG and breast milk IgA. Verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Your Immune System",
    lessonTitle: "Active and Passive Immunity",
    description:
      "Immunity can be built or borrowed — and pregnancy is the body's own delivery service of borrowed protection. Learn the difference, and why one vaccine protects two patients.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Distinguish active from passive immunity, natural and artificial.",
      "Explain how vaccination during pregnancy protects the newborn against tetanus.",
      "Describe the protection breast milk gives a newborn in the first months.",
    ],
    tags: ["immunity", "vaccination", "pregnancy", "breastfeeding"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Immunity can be built or borrowed. When your immune system meets an antigen and makes its own memory, that is active immunity — earned through infection or vaccination. When ready-made antibodies are handed to you, that is passive immunity — fast, borrowed and temporary.\n\nBoth matter enormously in midwifery, because pregnancy and breastfeeding are the body's own passive-immunity service: the mother's antibodies travel to her baby through the placenta and through milk. This lesson shows you how the two kinds of protection differ, and why vaccines fit so beautifully into that picture.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Active immunity** — natural (surviving an infection) or artificial (vaccination) — needs one to two weeks to build, because the immune system must meet the antigen, multiply its forces and store memory. That memory then lasts years, sometimes a lifetime. **Passive immunity** protects immediately but stores no memory and fades within weeks to months.\n\nPassive protection comes naturally from mother to baby: **IgG crosses the placenta**, mainly in the last weeks of pregnancy, protecting the newborn through its most vulnerable early weeks, while **IgA in colostrum and breast milk** coats the baby's gut against diarrhoea-causing organisms — one of the reasons early breastfeeding is treated like medicine. Passive immunity can also be given artificially through immunoglobulin injections — anti-D for rhesus-negative mothers, tetanus immunoglobulin after dirty wounds, hepatitis B immunoglobulin for exposed newborns.\n\nVaccination during pregnancy is two-patient care. When you give a pregnant woman **tetanus toxoid**, her immune system makes antibodies (active, artificial for her) that cross the placenta (passive, natural for the baby), shielding the newborn from neonatal tetanus. Ghana's immunisation schedule then builds the child's own memory: BCG, oral polio and hepatitis B vaccines at birth; pentavalent, pneumococcal and rotavirus vaccines through the 6, 10 and 14-week visits; and measles-rubella at 9 months.",
      },
      {
        type: "clinical_pearl",
        body: "Every tetanus dose you give at ANC protects two patients at once — one born, one not yet. Few interventions in your career will carry that kind of arithmetic.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At ANC, a woman in her third pregnancy hesitates over the tetanus injection. She says she was vaccinated in her first pregnancy and 'the baby got it from me', so this one should already be covered. She adds that she healed from a dirty wound last year anyway, so her body must already know tetanus.\n\nHow do you explain the protection she is being offered — for herself and for this baby?\n\nAnswer: Tetanus protection in the newborn comes from the mother's antibodies crossing the placenta, and those borrowed antibodies fade within months — they do not stay to protect a future pregnancy. Each pregnancy needs its own doses so this baby receives fresh IgG near term. Her healed wound does not promise immunity: natural tetanus infection does not reliably create lasting memory, which is exactly why vaccination exists. Complete her schedule today, and pair it with clean cord-care teaching for delivery, because neonatal tetanus enters through the cord.",
      },
      {
        type: "memory_trick",
        body: "If you make it, it's yours for years; if you borrow it, it disappears. Active = built memory, slow to start, long to last. Passive = ready antibodies, instant but temporary.",
      },
      {
        type: "summary",
        body: "- Active immunity: immune system builds its own memory — from infection (natural) or vaccination (artificial); slow to start, lasts years.\n- Passive immunity: ready-made antibodies borrowed — immediate, but no memory and fades in weeks to months.\n- Natural passive routes: IgG across the placenta in late pregnancy, IgA in colostrum and breast milk coating the baby's gut.\n- Artificial passive: immunoglobulin injections such as anti-D, tetanus immunoglobulin and hepatitis B immunoglobulin.\n- Maternal tetanus vaccination = active for the mother, passive for the newborn; Ghana's EPI then builds the child's own memory from birth.",
      },
    ],
    questions: [
      {
        topic: "Active and Passive Immunity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The IgA a newborn receives in colostrum is best described as what type of immunity?",
        options: [
          "Active natural immunity",
          "Passive natural immunity",
          "Active artificial immunity",
          "Passive artificial immunity",
        ],
        correctIndex: 1,
        explanation:
          "The baby borrows the mother's ready-made IgA through breast milk — naturally delivered, immediate, but with no memory built and fading over time. Passive artificial would mean an injected immunoglobulin; active would mean the baby's own immune system responding.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Active and Passive Immunity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does an injected immunoglobulin protect immediately while a vaccine takes days to weeks?",
        options: [
          "Injections always act faster than any other route",
          "The immunoglobulin supplies ready-made antibodies, while the vaccine supplies an antigen the immune system must still respond to",
          "Vaccines are weaker and need time to dissolve",
          "Immunoglobulins build memory faster than vaccines do",
        ],
        correctIndex: 1,
        explanation:
          "Passive artificial immunity hands over finished antibodies, so protection is instant but temporary and leaves no memory. A vaccine presents an antigen: the body must select and multiply its responding cells, which takes one to two weeks but creates lasting memory.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Active and Passive Immunity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How does giving a pregnant woman tetanus toxoid protect her newborn?",
        options: [
          "The vaccine itself crosses the placenta and vaccinates the baby directly",
          "The baby is protected because the mother can no longer catch tetanus",
          "Her IgG antibodies cross the placenta and give the baby passive protection against neonatal tetanus",
          "The vaccine enters the breast and is secreted in the amniotic fluid",
        ],
        correctIndex: 2,
        explanation:
          "The mother makes antibodies (active for her); IgG then crosses the placenta in late pregnancy to cover the newborn's vulnerable first weeks — passive, natural protection for the baby. The vaccine itself does not cross, which is why doses are needed in every pregnancy.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Active and Passive Immunity",
        front: "Active vs passive immunity in one breath?",
        back: "Active = you build memory yourself (infection or vaccine): slow start, lasts years. Passive = you borrow ready antibodies (placenta, milk, injections): instant, temporary, no memory.",
      },
      {
        topic: "Active and Passive Immunity",
        front: "Which two maternal routes deliver passive immunity to the baby?",
        back: "IgG across the placenta (mainly late pregnancy) and IgA in colostrum and breast milk, coating the gut.",
      },
      {
        topic: "Active and Passive Immunity",
        front: "Why must tetanus vaccination be repeated in each pregnancy?",
        back: "The baby's protection is borrowed IgG that fades after months — a future pregnancy needs fresh maternal antibodies near term, so each baby gets its own placental gift.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on antenatal care for a positive pregnancy experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunisation — Ghana schedule",
        note: "National childhood immunisation schedule. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Immunization coverage",
        year: "2024",
        url: "https://www.who.int/health-topics/immunization",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Practical Microbiology",
    lessonTitle: "Collecting Specimens the Right Way",
    description:
      "A laboratory result is only ever as good as the sample you send. Containers, technique, timing and labelling — the habits that make your specimens trustworthy.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Apply the rights of specimen collection: patient, test, container, technique, time and labelling.",
      "Collect a clean-catch midstream urine and a wound swab correctly.",
      "Explain why sampling before antibiotics and prompt transport matter.",
    ],
    tags: ["specimens", "laboratory", "asepsis", "urine collection"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A laboratory result is only ever as good as the sample you send. The most sophisticated machine cannot rescue a swab taken from the wrong place, urine contaminated at collection, or a culture bottle labelled after the fact. Bad samples produce confident, wrong answers.\n\nIn this lesson you learn the habits that make specimens trustworthy: the right container, the right technique, the right time — and the discipline of labelling at the bedside.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Check the **rights** before you begin: right patient (two identifiers), right test and container, right technique, right time — and label at the bedside, never in advance, so a specimen can never travel under the wrong name.\n\n**Timing** changes everything. Blood cultures are best taken **before antibiotics start**, from a properly cleaned site: disinfect the skin and let it dry fully, because drying is part of the disinfection, and ideally collect sets from separate sites. Once antibiotics flow, cultures may grow nothing and the answer is lost. **Midstream urine** is a clean-catch skill you will teach constantly: clean the perineum with water, wiping front to back; begin passing urine; let the first flow wash away skin commensals; then catch the middle portion in a sterile container without it touching skin. For **swabs**, sample where the living organisms are: rotate gently at the base of a lesion or its active advancing edge, not the old dead pus on top; for deep wounds, follow the wound-care protocol for depth and technique. Sputum means a deep cough from the chest — early morning is richest — not saliva.\n\nFinally, think about the journey. Fragile organisms like the gonococcus die quickly and need prompt transport in the right medium; some samples need a cold box if the laboratory is far. And always record clinical details on the request form — site, symptoms, day of illness — because a report read without its context is only half a report.",
      },
      {
        type: "clinical_pearl",
        body: "If the technique is wrong, the lab will still give you an answer — confidently, and for the wrong organism. Rubbish in, rubbish out.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman with burning urination gives a urine sample you collected in a hurry: she washed herself with a used cloth, began passing urine directly into the pot, and you labelled the pot later at the nurses' station. The report returns 'mixed growth — probable contamination', yet she has been started on antibiotics on the strength of it.\n\nWhat went wrong, and what should happen next?\n\nAnswer: Almost everything: the used cloth and unwashed perineum seeded skin and faecal organisms, the first flow (which should be discarded) carried commensals straight into the pot, and late labelling risks the sample travelling under the wrong name. 'Mixed growth' is the lab's polite way of flagging exactly this. Discuss with the prescriber: a repeat clean-catch midstream sample, properly labelled at the bedside, should guide treatment, with her symptoms weighed in the decision. Treating a contaminated result as truth risks the wrong drug, side effects and resistance.",
      },
      {
        type: "memory_trick",
        body: "Catch the middle of the river, not its banks: front-to-back clean, first flow away, midstream catch. And for swabs — take the edge that is alive, not the pus that is dead.",
      },
      {
        type: "summary",
        body: "- Check the rights first: patient (two identifiers), test, container, technique, time — and label at the bedside, never in advance.\n- Blood cultures before antibiotics, from disinfected, fully dried skin, ideally sets from separate sites.\n- Clean-catch MSU: front-to-back wash, discard the first flow, catch midstream without skin contact.\n- Swabs from the base or advancing edge of a lesion, not surface pus; sputum is a deep cough, early morning, not saliva.\n- Fragile organisms need rapid, correct transport; clinical details on the form make the report readable.",
      },
    ],
    questions: [
      {
        topic: "Specimen Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When should blood cultures be taken, if antibiotics are about to be started?",
        options: [
          "After the first dose, so the culture shows how the drug is working",
          "Before the antibiotics, from a cleaned site, ideally before treatment begins",
          "At any time — antibiotics do not affect culture results",
          "Only after three days of fever, never before",
        ],
        correctIndex: 1,
        explanation:
          "Antibiotics can clear the bloodstream of organisms and leave the culture growing nothing. Draw the cultures first — properly disinfected skin, allowed to dry — so the laboratory has a fair chance of catching the culprit.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Specimen Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the first portion of urine discarded in a clean-catch midstream sample?",
        options: [
          "The first urine is too concentrated for testing",
          "It washes away commensals around the urethral opening so they do not contaminate the sample",
          "The midstream contains no bacteria at all",
          "The container is only sterile after urine has wet it",
        ],
        correctIndex: 1,
        explanation:
          "The opening flow flushes skin and urethral commensals outward; catching midstream then collects urine from the bladder itself. Bacteria counted from a midstream sample are far more likely to reflect a true urinary infection rather than contamination.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Specimen Collection",
        difficulty: "Moderate",
        type: "MCQ",
        stem: "A wound swab is best taken from which part of an infected wound?",
        options: [
          "The old, dry pus on the surface, which is easiest to reach",
          "The surrounding healthy skin several centimetres away",
          "The base of the lesion or its active advancing edge after cleansing",
          "The outer dressing itself, freshly removed",
        ],
        correctIndex: 2,
        explanation:
          "Living, multiplying organisms sit at the base and the actively advancing edge; surface pus is a graveyard of dead material and old organisms, and skin or dressings only add their own flora. Cleanse first, then sample where the infection is alive.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Specimen Collection",
        front: "The three steps of a clean-catch midstream urine?",
        back: "Clean the perineum front to back with water; begin passing urine and let the first flow wash away commensals; catch the middle portion in a sterile pot without skin contact.",
      },
      {
        topic: "Specimen Collection",
        front: "Where do you take a wound swab from, and why?",
        back: "The base or the active advancing edge after cleansing — that is where living organisms multiply; surface pus is mostly dead material.",
      },
      {
        topic: "Specimen Collection",
        front: "Why take blood cultures before antibiotics?",
        back: "Antibiotics can sterilise the blood and leave the culture empty — sample first, from disinfected and fully dried skin, so the organism has a chance to grow.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Laboratory Quality Management System: Handbook",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241548274",
        note: "WHO/CDC laboratory quality standards, including specimen handling.",
      },
      {
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Specimen collection and culture principles. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Specimen collection procedures. Verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Practical Microbiology",
    lessonTitle: "Common Laboratory Tests: Stains, Cultures and More",
    description:
      "You send a swab and days later a report returns. Open the laboratory door: the stains that colour bacteria, the media that grow them, and the tests that choose the drug.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Explain what a Gram stain shows and why it guides the first antibiotic decision.",
      "Describe how culture and sensitivity testing work.",
      "Recognise the rapid and bedside tests common in Ghanaian facilities.",
    ],
    tags: ["laboratory", "gram stain", "culture", "microscopy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You send a swab to the laboratory and days later a report comes back. What actually happened in between? This lesson opens the laboratory door: the stains that colour bacteria, the media that grow them, and the tests that decide which drug will beat them.\n\nKnowing what the laboratory does helps you collect better samples, understand the reports you receive, and explain results to patients without promising what a test cannot give.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **Gram stain** is the laboratory's first verdict, ready in minutes. Bacteria are stained, then decolourised: those with thick peptidoglycan walls keep the crystal violet and stain **purple — Gram-positive** (think Staphylococcus aureus); those with thin walls lose it and take the pink counterstain — **Gram-negative** (think E. coli or the gonococcus). Purple or pink instantly narrows the suspect list and guides the first antibiotic choice while culture is still growing.\n\nFor **tuberculosis**, ordinary stains fail, so the **Ziehl-Neelsen stain** is used: mycobacteria, walled in wax, keep their red dye even under acid-alcohol — they are 'acid-fast bacilli', reported as AFB. **Culture** grows organisms on media — blood agar feeds most bacteria, MacConkey favours Gram-negative gut organisms. After a day or two, colonies appear and can be identified. **Sensitivity testing** then places antibiotic discs on the bacterial lawn: clear **zones of inhibition** mean the drug stops that organism, and the report grades each drug S (sensitive), I (intermediate) or R (resistant).\n\nBeyond cultures, microscopy and rapid tests carry much of daily practice: **wet mounts** of vaginal discharge revealing Candida hyphae or swimming Trichomonas; **malaria rapid diagnostic tests**; **HIV rapid test kits**; urine dipsticks; and blood markers of inflammation such as a raised white cell count. Each test answers one specific question — your job is to send the right sample for the right question.",
      },
      {
        type: "clinical_pearl",
        body: "Gram stain in minutes, culture in days. When your facility is far from the laboratory, that first purple-or-pink report often decides tonight's first dose.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man attends the OPD with a urethral discharge. You collect the swab correctly, and the laboratory phones through the Gram stain: Gram-negative diplococci, many inside neutrophils. The full culture will take two days, but the clinician wants to begin management tonight.\n\nWhat does the stain suggest, and what happens while the culture waits?\n\nAnswer: Gram-negative diplococci inside neutrophils strongly suggest Neisseria gonorrhoeae. The clinician can begin treatment tonight according to national guidelines, which already account for local resistance patterns, while culture and sensitivity confirm and refine the choice. The rest is yours: counselling, contact tracing so the partner is treated too, screening for other infections including HIV and syphilis, and condom education — because treating one person while leaving the partner untreated simply sends the infection back.",
      },
      {
        type: "memory_trick",
        body: "Purple Positive, red negative — and think of the wall: a thick peptidoglycan wall holds the purple dye; a thin wall lets it wash away and blushes red in the counterstain.",
      },
      {
        type: "summary",
        body: "- Gram stain in minutes: thick-wall bacteria keep crystal violet (purple, Gram-positive); thin-wall bacteria lose it and stain pink (Gram-negative).\n- Ziehl-Neelsen stain finds acid-fast bacilli — the tuberculosis report you will chase most often.\n- Culture grows organisms on media (blood agar general, MacConkey for Gram-negatives); colonies identify the organism.\n- Sensitivity testing uses antibiotic discs on the bacterial lawn; zones of inhibition translate into S, I or R on the report.\n- Rapid allies: wet mounts for vaginal discharge, malaria RDTs, HIV rapid kits, urine dipsticks and inflammatory markers.",
      },
    ],
    questions: [
      {
        topic: "Laboratory Tests",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A Gram stain report describes Gram-positive cocci in clusters. What colour did these organisms appear under the microscope?",
        options: [
          "Red/pink, because they lost the primary stain",
          "Purple, because their thick peptidoglycan wall retained the crystal violet",
          "Green, from the counterstain",
          "Colourless, needing culture before any colour appears",
        ],
        correctIndex: 1,
        explanation:
          "Gram-positive organisms have thick peptidoglycan layers that trap the crystal violet-iodine complex, so they stay purple through decolourisation. Gram-negative walls are thin, lose the violet and take the pink counterstain instead.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Laboratory Tests",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a sensitivity plate, a clear zone of inhibition surrounds an antibiotic disc. What does this mean?",
        options: [
          "The bacteria are feeding on the antibiotic and growing faster",
          "The laboratory accidentally spilled salt around the disc",
          "The antibiotic stops that organism — it will be reported as sensitive",
          "The disc was placed wrongly and the result is void",
        ],
        correctIndex: 2,
        explanation:
          "In disc-diffusion testing, bacteria grow across the plate except where an effective antibiotic diffuses out — the clear halo is the zone of inhibition. The larger the zone, the more susceptible the organism; the report grades the drug S, I or R accordingly.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Laboratory Tests",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A sputum report states 'acid-fast bacilli seen'. Which disease does this most strongly suggest?",
        options: [
          "Urinary tract infection with E. coli",
          "Pulmonary tuberculosis",
          "Gonorrhoea",
          "Candida infection of the mouth",
        ],
        correctIndex: 1,
        explanation:
          "Acid-fast bacilli on a Ziehl-Neelsen stain point to mycobacteria — in sputum, pulmonary tuberculosis until proven otherwise. E. coli is Gram-negative, gonococci are Gram-negative diplococci, and Candida is a fungus seen on other preparations.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Laboratory Tests",
        front: "Gram-positive vs Gram-negative — colour and wall?",
        back: "Gram-positive: thick peptidoglycan wall, retains crystal violet, stains purple (e.g. Staphylococcus aureus). Gram-negative: thin wall, decolourised, stains pink (e.g. E. coli, gonococcus).",
      },
      {
        topic: "Laboratory Tests",
        front: "What is an AFB report, and which stain produces it?",
        back: "Acid-fast bacilli — mycobacteria (tuberculosis) that keep their red dye even under acid-alcohol decolourisation in the Ziehl-Neelsen stain.",
      },
      {
        topic: "Laboratory Tests",
        front: "What does a zone of inhibition on a culture plate tell you?",
        back: "The antibiotic diffusing from the disc stopped bacterial growth there — the organism is susceptible; the report grades the drug S, I or R.",
      },
    ],
    sources: [
      {
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Staining, culture media and sensitivity testing chapters. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Laboratory Quality Management System: Handbook",
        year: "2011",
        note: "WHO/CDC laboratory quality standards. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        note: "Wet-mount microscopy for vaginal discharge. Verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Practical Microbiology",
    lessonTitle: "Interpreting Microbiology Results",
    description:
      "Growth or no growth, sensitive or resistant — reading reports wisely. The questions that separate a true finding from contamination, and the patient from the paper.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Distinguish true infection from colonisation and contamination in a laboratory report.",
      "Interpret a sensitivity report, including why a 'sensitive' drug is not always the right prescription.",
      "Apply the principle: correlate the result with the patient before acting.",
    ],
    tags: ["results", "interpretation", "culture", "sensitivity"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The report lands back on the ward: growth or no growth, sensitive or resistant. The final step of the laboratory journey is yours — reading wisely. A result is not an order; it is one piece of evidence to be weighed against the patient you examined.\n\nIn this lesson you learn the questions that separate a true finding from noise: where was the sample from, how was it collected, and does the organism match the story?",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Growth is not the same as infection. Skin commensals such as coagulase-negative staphylococci growing in **one blood culture bottle** usually mean contamination at collection — the organism came from the collector's hands or the patient's skin, not the bloodstream. **Mixed growth** in a clean-catch urine usually points to a contaminated sample. In contrast, the same organism grown in **both** bottles of a set, or a heavy, pure growth from a well-collected specimen with matching symptoms, points to true infection. 'No growth' does not exclude infection either: antibiotics given before sampling, poor transport or a demanding organism can all leave the plate empty.\n\nWeigh numbers with clinical sense: classical significant bacteriuria in a clean midstream sample is around 100,000 colony-forming units per millilitre, ideally supported by white cells in the urine and matching symptoms. A positive culture in a comfortable patient deserves a conversation, not an automatic prescription.\n\nRead the sensitivity report through two filters. First, the **narrowest effective** drug is usually preferred — broad-spectrum power is not a virtue when a precise one will do. Second, a drug marked sensitive is not automatically right for your patient: some are best avoided in pregnancy where safer options exist, and every drug must reach the site of infection in adequate concentration. Those are prescriber decisions — but flagging pregnancy and allergies on the request form is yours. Remember, too, that a negative malaria RDT can occur when parasite density is low: if the story screams malaria, say so.",
      },
      {
        type: "clinical_pearl",
        body: "Read the source and the technique before the organism. A beautifully grown bacterium from a badly taken sample deserves suspicion, not a prescription.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A febrile woman's blood culture returns: Staphylococcus epidermidis grown from one of two bottles. The organism is reported sensitive to several antibiotics, and a colleague suggests starting treatment on the strength of the report alone.\n\nWhat is the wisest reading of this result, and what should happen next?\n\nAnswer: Staphylococcus epidermidis is a common skin commensal, and growth from only one of two bottles is the classic pattern of collection contamination rather than true bloodstream infection. Look at the second bottle, review how the sample was taken, and weigh the patient's whole picture. If she still looks septic, the clinician will likely repeat cultures with rigorous technique before committing to treatment — neither dismissing the report nor treating it blindly. In the meantime, treat the fever and monitor her closely.",
      },
      {
        type: "memory_trick",
        body: "GIGO — Garbage In, Garbage Out. And read every report in threes: the patient first, the sample second, the germ last.",
      },
      {
        type: "summary",
        body: "- Growth is not infection: commensals from skin or collection technique contaminate samples; both-bottle growth points to truth.\n- No growth does not exclude infection — earlier antibiotics, poor transport and demanding organisms all empty the plate.\n- Classical significant bacteriuria: around 100,000 colony-forming units per millilitre, supported by symptoms and white cells.\n- Sensitivity reports: prefer the narrowest effective agent; flag pregnancy and allergies — some 'sensitive' drugs are wrong for your patient.\n- Correlate before you act: treat the patient, not the paper — and question the sample technique behind any surprising result.",
      },
    ],
    questions: [
      {
        topic: "Interpreting Results",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Coagulase-negative staphylococci grow from one of two blood culture bottles in a stable patient. What is the most likely explanation?",
        options: [
          "Definite bloodstream infection requiring immediate antibiotics",
          "Contamination at collection — skin commensals entered the sample",
          "The patient has tuberculosis",
          "The laboratory cultured the wrong organism deliberately",
        ],
        correctIndex: 1,
        explanation:
          "These organisms live harmlessly on skin, and growth from a single bottle of a pair is the signature of contamination during venepuncture. True bacteraemia usually grows the same organism from both bottles. Weigh the patient clinically and repeat with meticulous technique if sepsis is still suspected.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Interpreting Results",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A urine culture from a patient with urinary symptoms reports a single organism at high counts, with white cells present. How should this be read?",
        options: [
          "Likely contamination, since any growth can be contamination",
          "Likely true urinary tract infection — organism, count and symptoms agree",
          "No meaning until a blood culture is also taken",
          "A false result, because urine is normally sterile only in men",
        ],
        correctIndex: 1,
        explanation:
          "A single organism at classical significant counts, supported by pyuria and matching symptoms, is the picture of true infection. Contamination usually announces itself as mixed growth from several skin or faecal organisms.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Interpreting Results",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A sensitivity report lists several drugs marked 'S'. Why might the prescriber still avoid one of them for this patient?",
        options: [
          "Sensitive results are usually wrong and should be ignored",
          "The drug may be unsafe for this patient — for example best avoided in pregnancy — or may not reach the infection site well",
          "Drugs marked S are always reserved for severe hospital cases only",
          "The laboratory grades S drugs as the most expensive choice",
        ],
        correctIndex: 1,
        explanation:
          "The report answers one question — does the drug stop this organism in the dish? It does not know your patient. Pregnancy, allergies, site penetration, cost and availability all shape the final choice, which is why the prescriber weighs the report rather than following the first 'S' on the list.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Interpreting Results",
        front: "What single clue suggests blood culture contamination rather than true infection?",
        back: "A skin commensal (e.g. coagulase-negative staphylococci) growing in only one of two bottles — true bacteraemia usually grows in both.",
      },
      {
        topic: "Interpreting Results",
        front: "Can a 'no growth' culture still hide an infection?",
        back: "Yes — antibiotics given before sampling, delayed or wrong transport, and fastidious organisms can all leave the plate empty. Match the result to the patient.",
      },
      {
        topic: "Interpreting Results",
        front: "What two filters should a sensitivity report pass through?",
        back: "Choose the narrowest effective agent, and check the drug suits the patient — pregnancy, allergies and whether it reaches the infection site.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Laboratory Quality Management System: Handbook",
        year: "2011",
        note: "Interpretation and quality assurance of laboratory results. Verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Culture interpretation and susceptibility testing. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        note: "Applying laboratory results in midwifery care. Verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Microbes and Medicine",
    lessonTitle: "Antimicrobials and Resistance",
    description:
      "One of medicine's greatest gifts, spent carelessly. How antibiotics work, how bacteria fight back, and the daily habits that keep them working.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Match major antibiotic classes to their bacterial targets.",
      "Explain how resistance develops and how misuse accelerates it.",
      "Counsel patients on completing courses and never sharing or saving antibiotics.",
    ],
    tags: ["antibiotics", "resistance", "stewardship", "counselling"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Antibiotics are one of medicine's greatest gifts — and the world is spending them carelessly. Infections that once surrendered to simple antibiotics now resist them, turning treatable illnesses into long, costly, dangerous ones. This is happening in Ghana as surely as anywhere.\n\nNurses administer most of the antibiotics in any facility, which makes you a guardian of their power. This lesson explains how the drugs work, how bacteria fight back, and the daily habits that keep antibiotics winning.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Antibiotics exploit features bacteria have and human cells lack. **Penicillins and cephalosporins** block bacterial cell-wall building — human cells have no such wall, which is one reason these drugs are relatively safe for us. **Tetracyclines, macrolides and aminoglycosides** jam the bacterial ribosome, stalling protein production. **Fluoroquinolones** such as ciprofloxacin attack bacterial DNA enzymes, and **sulphonamides with trimethoprim** cut off folate synthesis. Metronidazole specialises in anaerobic organisms. Some antibiotics kill outright (bactericidal); others stall growth (bacteriostatic) and let the immune system finish the job. And antibiotics do **nothing** against viruses — no amount of them will touch a common cold or most sore throats.\n\nResistance is evolution at speed. Bacteria can produce **enzymes that cut the drug** (beta-lactamases destroying penicillins), **pump it out**, **change the target** it attacks, or **block its entry**. Every course of antibiotics kills the weakest organisms first and leaves behind any that resist — the survivors multiply, and that is **selection pressure**. It is intensified by missed doses, courses abandoned halfway, tablets shared between family members, and antibiotics bought from chemical sellers without a diagnosis. A dose given an hour late drops drug levels into exactly the range where resistant strains thrive.\n\nWHO lists antimicrobial resistance among the top ten threats to global health. Your corner of the fight is concrete: the right patient, right drug, right dose, right time, right duration — and teaching every patient to finish the course.",
      },
      {
        type: "clinical_pearl",
        body: "The dose you give an hour late is a dose bacteria survive. Low drug levels are exactly where resistant strains multiply best — timing is not a detail, it is the treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother at the clinic opens her bag and shows you half a strip of amoxicillin left over from a course she abandoned last month. She has a sore throat today, and her son has a runny nose, so she plans that they will each take the remainder 'to clear it before it becomes serious'.\n\nWhat are the problems with her plan, and how do you counsel her?\n\nAnswer: Both illnesses are most likely viral, which antibiotics cannot touch, and even if they were not, a shared half-course delivers the wrong drug at the wrong dose and duration for both of them. Abandoned courses and shared tablets are precisely how selection pressure breeds resistance — the weak organisms die, the strong survive and multiply. Counsel her warmly: advise an assessment for proper diagnosis before any antibiotic, explain that finishing a prescribed course is what protects her family, and remind her never to keep or share leftovers. Then ensure she knows where to seek care if symptoms worsen.",
      },
      {
        type: "memory_trick",
        body: "Resistance has four tricks: Cut the drug (enzymes), Pump it out, Change the target, Block the door. The counter-spell is just as short: Finish the fight — complete the course.",
      },
      {
        type: "summary",
        body: "- Antibiotic targets bacteria have and we do not: cell wall (penicillins, cephalosporins), ribosome (tetracyclines, macrolides, aminoglycosides), DNA enzymes (fluoroquinolones), folate synthesis (sulphonamides/trimethoprim).\n- Bactericidal kills; bacteriostatic stalls growth and relies on the immune system to finish.\n- Antibiotics do nothing against viruses — colds and most sore throats need no antibiotic.\n- Resistance tricks: drug-cutting enzymes, efflux pumps, altered targets, blocked entry; every partial or shared course selects for the survivors.\n- Stewardship habits: right patient, drug, dose, timing and duration — and patients taught to complete every course, never sharing or saving tablets.",
      },
    ],
    questions: [
      {
        topic: "Antimicrobials",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are penicillins relatively safe for human patients?",
        options: [
          "They are broken down completely by the stomach",
          "They target bacterial cell-wall synthesis, a structure human cells do not have",
          "They only circulate in the blood and never enter tissues",
          "Human cells repair the damage they cause within hours",
        ],
        correctIndex: 1,
        explanation:
          "Penicillins and cephalosporins block the building of the bacterial peptidoglycan wall. Human cells have no cell wall, so the drug's main target simply does not exist in us — the basis of selective toxicity.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Antimicrobials",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient asks for antibiotics for a runny nose and sore throat of two days, clearly caused by a cold. What is the correct explanation?",
        options: [
          "A short course will prevent the cold becoming pneumonia",
          "Antibiotics kill bacteria only — viruses cause colds, so they will not help",
          "Only injectable antibiotics work on colds",
          "Antibiotics shorten every sore throat by three days",
        ],
        correctIndex: 1,
        explanation:
          "Antibiotics act on bacterial structures and processes that viruses lack entirely. Taking them for a viral illness delivers side effects and resistance risk with zero benefit — the counselling that protects antibiotics starts in exactly this conversation.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Antimicrobials",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which patient behaviour most accelerates antimicrobial resistance?",
        options: [
          "Completing the full prescribed course exactly as directed",
          "Stopping the antibiotic as soon as symptoms improve and saving the rest",
          "Taking each dose at the scheduled time with water",
          "Returning for review when symptoms persist",
        ],
        correctIndex: 1,
        explanation:
          "Abandoned courses kill the weakest organisms and leave the more resistant ones alive to multiply — selection pressure in action. Completing the course, keeping doses on time and returning for review all work against resistance instead.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Antimicrobials",
        front: "What is the target of penicillins and cephalosporins — and why is that safe for us?",
        back: "Bacterial cell-wall (peptidoglycan) synthesis. Human cells have no cell wall, so the drug hits a target we simply lack.",
      },
      {
        topic: "Antimicrobials",
        front: "What is selection pressure, in one sentence?",
        back: "Every antibiotic exposure kills susceptible organisms first and lets any resistant survivors multiply — so partial, missed or shared doses breed resistance.",
      },
      {
        topic: "Antimicrobials",
        front: "Three counselling points that protect antibiotics?",
        back: "Finish every prescribed course; never share or save leftovers; get a proper diagnosis before taking antibiotics — and never take them for viral colds.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Antimicrobial resistance",
        year: "2023",
        url: "https://www.who.int/health-topics/antimicrobial-resistance",
      },
      {
        organization: "Ghana Ministry of Health / Ghana Health Service",
        title: "Ghana National Action Plan for Antimicrobial Resistance",
        year: "2017",
        note: "National AMR strategy and stewardship priorities. Verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Tortora, Funke and Case: Microbiology: An Introduction",
        note: "Antimicrobial mechanisms and resistance chapters. Verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "microbiology-2",
    moduleTitle: "Microbes and Medicine",
    lessonTitle: "Healthcare-Associated Infections",
    description:
      "Some infections are created inside the facility itself. Where they hide — devices, wounds, hands — and the daily discipline that prevents them, from Semmelweis to your shift.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Define a healthcare-associated infection and name the common types.",
      "Apply daily prevention measures for devices, wounds and the environment.",
      "Explain why hand hygiene remains the single most effective prevention measure.",
    ],
    tags: ["hai", "prevention", "ipc", "device care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some infections walk into the hospital inside patients. Others are created inside the facility itself — by hands, devices, equipment and corners of care that were meant to heal. These are healthcare-associated infections, and preventing them is not the IPC officer's job alone; it is stitched into every task you do.\n\nThis lesson defines these infections, shows where they hide, and turns prevention into habits you can actually keep on a busy district ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A healthcare-associated infection was **neither present nor incubating when the patient was admitted** — it typically declares itself 48 hours or more into admission, or after a procedure. The classic four: **catheter-associated urinary tract infections**, **surgical site infections**, **bloodstream infections from intravenous lines**, and **ventilator-associated pneumonia**. On a maternity ward, add **puerperal genital tract infection** — the historic killer of new mothers, and the very reason handwashing entered medicine.\n\nThe sources are unglamorous: staff hands moving between patients, contaminated shared equipment, devices left in too long, and lapses in theatre or dressing asepsis. Prevention therefore lives in daily discipline. **Hand hygiene remains the single most effective measure** — Ignaz Semmelweis proved it in the 1840s, when handwashing with chlorinated lime slashed death rates on his maternity ward decades before anyone knew germs existed.\n\nBeyond hands: use devices only when genuinely needed, insert them with full asepsis, keep urinary drainage **closed and the bag below bladder level**, and take every cannula and catheter **out at the earliest safe moment**. For surgery, follow the protocols that prevent wound infection — clipping rather than shaving hair where needed, keeping the patient warm, giving prophylactic antibiotics at the right time before incision per protocol, and disciplined dressing care. Clean shared equipment between patients, segregate waste correctly, and keep high-touch surfaces clean. Finally, report suspected cases: two similar infections on one ward may mean one fixable breakdown.",
      },
      {
        type: "clinical_pearl",
        body: "Devices are doors. The best prevention for a device-related infection is often the day the device comes out — review every line and catheter daily, and remove early.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In one week, two post-caesarean women on the same ward develop fever with wound discharge — one on day three, one on day four. Each is treated with antibiotics and dressings, and both slowly improve. The ward is busy, and the cases are charted as isolated complications.\n\nBeyond treating each woman, what does this pattern demand — and why?\n\nAnswer: Two similar surgical site infections on one ward in one week is a pattern, not a coincidence, and it demands escalation to the senior midwife and the IPC team. Possible common sources need review: hand hygiene compliance, dressing technique, theatre sterility and instrument processing, shared equipment and the wound-care trolley. Reporting triggers that review; treating the women in silence leaves the breakdown in place for the next patients. An outbreak contained early is a ward saved — and quiet charting helps nobody who is admitted tomorrow.",
      },
      {
        type: "memory_trick",
        body: "HANDS stops HAIs: Hygiene at the 5 Moments, Asepsis for every device and dressing, Never share unwashed equipment, Devices out early, Sterility guarded in theatre.",
      },
      {
        type: "summary",
        body: "- A healthcare-associated infection was neither present nor incubating at admission — often appearing 48 hours or more into care.\n- The classic four: catheter UTIs, surgical site infections, line-associated bloodstream infections, ventilator pneumonia; add puerperal sepsis on maternity wards.\n- Staff hands, shared equipment and retained devices are the everyday sources — which means everyday prevention.\n- Hand hygiene is the single most effective measure — Semmelweis proved it on a maternity ward long before germs were known.\n- Devices only when needed, inserted with asepsis, drainage closed with the bag below bladder level, removed early; report suspected clusters so the breakdown is fixed.",
      },
    ],
    questions: [
      {
        topic: "Healthcare-Associated Infections",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which best defines a healthcare-associated infection?",
        options: [
          "Any fever a patient develops after arriving at hospital",
          "An infection that was neither present nor incubating at admission, typically appearing 48 hours or more into care",
          "Any infection treated with hospital antibiotics",
          "An infection passed only between staff members",
        ],
        correctIndex: 1,
        explanation:
          "The timing relative to admission is the key: the infection was acquired during care, not incubating before it. A fever within hours of admission usually reflects something she arrived with — the 48-hour-plus pattern points to the facility itself.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Healthcare-Associated Infections",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the single most effective measure for preventing healthcare-associated infections?",
        options: [
          "Routine daily changing of every urinary catheter",
          "Prophylactic antibiotics for all admitted patients",
          "Hand hygiene at the right moments",
          "Isolating every post-operative patient",
        ],
        correctIndex: 2,
        explanation:
          "Hands are the main vehicle carrying organisms between patients, so hand hygiene at the WHO's 5 Moments prevents more HAIs than any other single measure. Routine catheter changes, blanket antibiotics and needless isolation add risk rather than removing it.",
        courseSlug: "microbiology-2",
      },
      {
        topic: "Healthcare-Associated Infections",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What did Semmelweis demonstrate on his maternity ward in the 1840s?",
        options: [
          "That ventilation prevents pneumonia",
          "That handwashing with chlorinated lime dramatically reduced deaths from puerperal infection",
          "That antibiotics should be given before surgery",
          "That hospital waste must be incinerated",
        ],
        correctIndex: 1,
        explanation:
          "Before germ theory existed, Semmelweis noted that women attended by staff who washed their hands in chlorinated lime after autopsy work survived far more often. Hand hygiene entered medicine on a maternity ward — your daily 20 seconds stand on his shoulders.",
        courseSlug: "microbiology-2",
      },
    ],
    flashcards: [
      {
        topic: "Healthcare-Associated Infections",
        front: "Define a healthcare-associated infection.",
        back: "An infection neither present nor incubating at admission — typically appearing 48 hours or more into care or after a procedure, acquired within the facility.",
      },
      {
        topic: "Healthcare-Associated Infections",
        front: "The classic four HAIs?",
        back: "Catheter-associated UTI, surgical site infection, line-associated bloodstream infection, ventilator-associated pneumonia — plus puerperal genital infection on maternity wards.",
      },
      {
        topic: "Healthcare-Associated Infections",
        front: "One-sentence rule for devices?",
        back: "Devices are doors — use only when truly needed, insert with asepsis, keep drainage closed with the bag below bladder level, and remove at the earliest safe moment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global report on infection prevention and control",
        year: "2022",
        url: "https://www.who.int/teams/integrated-health-services/infection-prevention-control",
      },
      {
        organization: "Ghana Health Service",
        title: "Infection Prevention and Control Guidelines for Health Care Facilities",
        note: "National HAI prevention practice. Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        note: "Evidence-based SSI prevention measures. Verify current edition.",
      },
    ],
  },
];
