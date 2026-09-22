// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch A (Critical Care & Emergency Nursing)
// 11 lessons; the flagship lesson "The ABCDE Approach" is authored
// separately in lessons-full. Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "The Deteriorating Patient",
    lessonTitle: "Early Warning Scores & Track-and-Trigger",
    description:
      "Turning observations into numbers that summon help — the charts and thresholds that catch the quiet crash long before the loud one.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain what track-and-trigger systems are and why single observations fail to catch deterioration.",
      "Score a set of observations on a NEWS-style early warning chart and state the escalation each score demands.",
      "Apply the escalation response when a trigger fires — including when the score is low but your instinct is loud.",
    ],
    tags: ["early warning", "vital signs", "deterioration", "escalation"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patients rarely crash out of nowhere. For hours before the collapse, the body whispers — a breathing rate creeping from 16 to 24, a pulse that will not settle, a patient who was chatty at dawn and oddly quiet by noon. The tragedy on many wards is that the whispers were written down, in ink, by hardworking nurses — and nobody added them up.\n\nA **track-and-trigger system** does the adding up. The tracking half is a standard observation chart, completed regularly and measured properly. The trigger half is a set of fixed thresholds that force an action the moment a patient's numbers cross them. This lesson teaches how the systems work, how to score, and how to answer the alarm — and why your own worried instinct is part of the system, never a threat to it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The widely used systems — the UK's **NEWS2**, the MEWS family, and the modified hospital charts spreading through Ghana's regional and district hospitals — all do the same job: they turn seven observations into a single number. The parameters are **respiratory rate**, **oxygen saturation** plus whether the patient is **on supplemental oxygen**, **temperature**, **systolic blood pressure**, **heart rate**, and **level of consciousness** — alert, or new confusion, or responding only to voice, pain or nothing (the AVPU scale).\n\nEach parameter scores zero when normal and one to three points as it drifts further from normal. The total then calls the shots: zero means routine monitoring; a low score of one to four means more frequent observations and review by the senior nurse; **a score of five or more — or three points in any single parameter — means urgent clinical review now**, with escalation to the most senior team available. Many hospitals add their own single-parameter triggers: a systolic below 90, a respiratory rate above 24, chest pain, any new bleeding — any one of these demands review regardless of the total.\n\nThe second half of the system is behaviour. A chart only works if observations are taken at the prescribed frequency, measured correctly, and never invented for a busy hour. A score written and ignored is worse than no score at all, because it looks like care.",
      },
      {
        type: "table",
        title: "A NEWS-style early warning chart (adult)",
        body: "| Parameter | 3 points | 2 points | 1 point | 0 points |\n|---|---|---|---|---|\n| Respiratory rate | 8 or less · 25 or more | 21–24 | 9–11 | 12–20 |\n| SpO2 (on air) | 91 or less | 92–93 | 94–95 | 96 or more |\n| Supplemental oxygen | — | any oxygen running | — | breathing room air |\n| Temperature | 35.0 or less | 39.1 or more | 35.1–36.0 · 38.1–39.0 | 36.1–38.0 |\n| Systolic BP | 90 or less · 220 or more | 91–100 | 101–110 | 111–219 |\n| Heart rate | 40 or less · 131 or more | 111–130 | 41–50 · 91–110 | 51–90 |\n| Consciousness | new confusion or unresponsive | — | — | alert |\n\nAdd the points and act: 0 — routine, minimum 12-hourly observations; 1–4 — observations every 4–6 hours plus senior-nurse review; **5 or more, or 3 points in any single parameter — urgent clinical review and escalation, now.** The values follow the NEWS2 pattern — the chart your hospital actually uses is the one you must know by heart.",
      },
      {
        type: "clinical_pearl",
        body: "The respiratory rate is the sentry of the whole chart — it climbs early in sepsis, shock, bleeding and heart failure, and it is the observation most often skipped or guessed on a busy evening. Count it for a full minute, every time. And remember: a total score of zero never overrules your eyes. The chart has not examined the patient — you have.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day two after prostate surgery, a 68-year-old man is charted 'stable' — BP 118/74, temperature 37.4. But his respiratory rate is 24, his pulse is 108, and the night nurse wrote that he was 'a bit muddled' around 2 am. Nobody has scored it; the observation chart shows a column of reassuring blood pressures.\n\nScore him — and tell me what the ward must do in the next hour.\n\nAnswer: Respiratory rate 24 scores 2, pulse 108 scores 1, and new confusion scores 3 in a single parameter — which demands urgent clinical review on its own, and the total of 6 confirms it. He is deteriorating, most probably toward sepsis or a silent surgical complication, and the chart is shouting while everyone admires the blood pressure. Within the hour: observations at least hourly, the senior nurse informed, a clinician at the bedside, bloods and cultures per the sepsis pathway, and the whole story handed over with SBAR — situation, background, assessment, recommendation. The score is not paperwork; it is the doorbell, and it has been rung.",
      },
      {
        type: "quiz_prompt",
        title: "When the score disagrees with you",
        body: "You cannot put your finger on it. The man in bed 6 scores 2 — pulse 94, everything else green — but he has not touched his food, he will not look at you, and something in your chest says go back. What does the chart's worry rule let you do?\n\nAnswer: Escalate anyway. Every track-and-trigger system includes a concern rule: the nurse's — or the family's — feeling that a patient is getting worse is a valid trigger in its own right, whatever the number says. Report the score and the behaviour together and ask for a review. You will be wrong sometimes; you will be right often enough to justify every false alarm.",
      },
      {
        type: "memory_trick",
        body: "The chart is a doorbell, not a diary. **Three in one, or five all told — someone senior must be told.** And the lungs speak first: count the respiratory rate for a full minute, every set of observations, every shift.",
      },
      {
        type: "summary",
        body: "- Track-and-trigger: a standard observation chart (track) plus fixed thresholds that force escalation (trigger).\n- Score the seven parameters — respiratory rate, SpO2, oxygen need, temperature, systolic BP, heart rate, consciousness — and let the total speak: 0 routine; 1–4 closer monitoring and senior-nurse review; 5 or more, or 3 in one parameter, urgent clinical review.\n- The respiratory rate is the sentinel and the most-skipped number: count it, never guess it.\n- The worry rule: your concern, or the family's, is a legitimate trigger — escalate on instinct even when the score is low.\n- The system fails by silence: unmeasured vitals, uncalculated scores, unanswered alarms. Do not be the silent link.",
      },
    ],
    questions: [
      {
        topic: "Early Warning Scores",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core purpose of a track-and-trigger early warning system?",
        options: [
          "To predict the exact diagnosis before the clinician arrives",
          "To store observations neatly for audit and statistics",
          "To convert observations into a number that forces review before the patient collapses",
          "To reduce the number of observations a nurse must take each shift",
        ],
        correctIndex: 2,
        explanation:
          "The system aggregates whispering vital signs into a score whose thresholds demand action — closer monitoring, senior-nurse review, urgent clinical review. It is a doorbell, not a filing system, and it assists rather than replaces clinical judgement.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Early Warning Scores",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which observation is both the earliest and most reliable sentinel of deterioration — and the one most often guessed on a busy ward?",
        options: [
          "The respiratory rate",
          "The blood pressure",
          "The temperature",
          "The weight",
        ],
        correctIndex: 0,
        explanation:
          "The respiratory rate rises early in sepsis, shock, bleeding and heart failure, and it is the observation nurses most often skip or estimate. Count it for a full minute. Blood pressure falls late — trusting it alone is the classic trap.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Early Warning Scores",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A post-operative patient has a respiratory rate of 26, pulse 112, systolic 98, new confusion, and all other observations normal. What does the chart demand?",
        options: [
          "Observations every four hours and review at the next ward round",
          "Reassurance — the blood pressure is still normal",
          "Repeat the full set in the morning and compare",
          "Urgent clinical review now, with escalation and at least hourly observations",
        ],
        correctIndex: 3,
        explanation:
          "Respiratory rate 26 scores 3, and new confusion scores 3 in a single parameter — either one alone triggers urgent review; with tachycardia and a drifting pressure, the total is deep in the danger zone. Next-morning comparison is how quiet crashes become loud ones.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Early Warning Scores",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your patient scores only 2, but he is drowsy, has stopped eating, and his wife says he 'is not himself'. What does the worry rule allow you to do?",
        options: [
          "Nothing — a score of 2 is reassuring, and over-riding it will annoy the doctors",
          "Escalate and request review on the strength of your concern, even though the number is low",
          "Wait until the score reaches 5 so the escalation is justified on paper",
          "Ask the relatives to monitor him overnight and report in the morning",
        ],
        correctIndex: 1,
        explanation:
          "Every modern track-and-trigger system includes an explicit concern rule: the nurse's or family's judgement that something is wrong is a trigger in its own right. Escalate the behaviour together with the score. Waiting for the number to catch up with your eyes defeats the whole system.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Early Warning Scores",
        front: "What are the two halves of a track-and-trigger system?",
        back: "Tracking: a standard observation chart completed accurately and on time. Trigger: fixed thresholds that demand defined actions — more frequent observations, senior-nurse review, urgent clinical review.",
      },
      {
        topic: "Early Warning Scores",
        front: "State the escalation thresholds on a NEWS-style chart.",
        back: "0 — routine, minimum 12-hourly observations. 1–4 — observations every 4–6 hours plus senior-nurse review. 5 or more, or 3 points in any single parameter — urgent clinical review and escalation.",
      },
      {
        topic: "Early Warning Scores",
        front: "Which single observation is the chart's sentry, and why?",
        back: "Respiratory rate. It climbs early in sepsis, shock, haemorrhage and heart failure — and it is the one most often skipped. Count it for a full minute, every time.",
      },
      {
        topic: "Early Warning Scores",
        front: "The patient scores 2 but you are worried. What does the worry rule say?",
        back: "Nurse or family concern is a valid trigger independent of the score — escalate anyway. The chart assists judgement; it never replaces it.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "World Health Organization",
        title: "Emergency Triage Assessment and Treatment (ETAT)",
        note: "Structured emergency recognition principles adapted across ages; verify latest edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Nursing care protocols and observation charting standards",
        note: "Facility-level monitoring practice; verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "The Deteriorating Patient",
    lessonTitle: "Sepsis: The Body's Overreaction",
    description:
      "The infection that becomes a whole-body crisis — the sentry signs that catch it, and the hour-one bundle that decides who survives.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Define sepsis and septic shock, and describe how infection anywhere becomes failure everywhere.",
      "Recognise the sentinel signs of adult sepsis and screen febrile patients without waiting for collapse.",
      "Apply the hour-one bundle — oxygen, antibiotics, fluids, cultures, lactate and urine output — with escalation and reassessment.",
    ],
    tags: ["sepsis", "infection", "bundles", "deterioration"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sepsis is the quiet one. It rarely announces itself with a collapse; it arrives as a fever, a tender wound, a patient who 'is not quite themselves' — and it kills more people worldwide than any single cancer. The World Health Organization counts millions of sepsis deaths each year, most of them in low-resource settings, and most of them preventable with recognition and simple treatment in the first hours.\n\nIn Ghana there is a second trap: every fever is malaria until proven otherwise — and malaria-first thinking has buried cases of sepsis that looked exactly like malaria. This lesson is about recognition that outruns the fever chart, and the bundle that must start within the hour.",
      },
      {
        type: "text",
        title: "What sepsis actually is",
        body: "**Sepsis is life-threatening organ dysfunction caused by a dysregulated response to infection.** Read that twice: the problem is not the germ alone, but the body's own answer to it — an immune response that tips from fighting the infection into attacking the body, flooding vessels, leaking lungs, stalling kidneys, clotting and bleeding at once. When the circulation begins to fail under this storm — **blood pressure that will not respond to fluids** — it becomes **septic shock**, and mortality climbs steeply.\n\nThe infection behind it enters by any door. On a Ghanaian ward, hunt in this order: the **chest** (pneumonia, especially in the elderly and in people living with HIV), the **urine** (catheters left too long, blocked urinary systems), the **skin and wounds** (diabetic foot ulcers, post-operative wounds, cellulitis, traditional incision sites), the **abdomen** (perforated ulcer, appendicitis, typhoid, cholera-like diarrhoea), and the **bloodstream** from any of these — plus, in a mother who has recently given birth, the uterus. Malaria, typhoid and sepsis coexist cheerfully; a positive malaria smear has never once excluded an infection somewhere else.",
      },
      {
        type: "text",
        title: "The sentinel signs and the hour-one bundle",
        body: "The diagnosis hides behind the masks other diseases wear, so nurses screen by signs. The **sentry signs of sepsis in any adult** are: **pyrexia of 38 degrees or more — or hypothermia below 36**; **respiratory rate of 25 or more**; **heart rate above 110**; **new confusion, drowsiness or agitation**; and **systolic pressure drifting below 100**. Two or more of these, with any suspicion of infection, and sepsis is the working diagnosis until excluded. A simple bedside screen used worldwide is **qSOFA** — respiratory rate 22 or more, systolic 100 or less, altered mentation — with two of three flagging the high-risk patient. But you do not need the acronym to count the signs; you need the habit of counting the breathing rate, because tachypnoea is the earliest and the most-ignored flag the body raises.\n\nThe response is a package, not a debate. Within **one hour** of recognising possible sepsis — the three **IN**: **high-flow oxygen** to target saturations, **IV broad-spectrum antibiotics** per local protocol, and **IV fluid resuscitation** begun with caution; and the three **OUT**: **cultures** (blood plus relevant swabs and urine, taken before antibiotics only if this costs no delay), **serum lactate** to reveal hidden tissue acid, and **hourly urine output** through a catheter — the honest meter of perfusion. **Antibiotics within the first hour is the single intervention that moves survival most** — do not wait for the ward round, the culture result or the registrar; and in Ghana, take the malaria smear **in parallel, never instead**. After every fluid bolus, re-examine: did the pressure rise, the pulse fall — or has the patient begun to crepitate? The septic heart is a fragile heart, and flooding it unwatched trades shock for pulmonary oedema. Escalate deliberately: persistent hypotension or a lactate that will not fall means critical-care review and transfer planning, discussed early rather than at midnight.",
      },
      {
        type: "clinical_pearl",
        body: "The respiratory rate is the sentry — an adult breathing 26 times a minute has sepsis until proven otherwise, whatever the temperature chart says. And the antibiotic clock starts at recognition, not at the doctor's arrival. Sepsis rewards the fast and punishes the polite.",
      },
      {
        type: "table",
        title: "Common sources of sepsis on a Ghanaian ward",
        body: "| Door the infection used | Clues that point there |\n|---|---|\n| Chest | Cough, fast breathing, crackles, chest pain; elderly or HIV-positive patient |\n| Urine | Catheter in situ, burning on urination, cloudy or offensive urine, flank pain |\n| Skin and wounds | Spreading redness, discharging wound, diabetic foot ulcer, traditional incisions, puerperal fever in a recently delivered mother |\n| Abdomen | Severe or persistent pain, rigid abdomen, distension, vomiting, typhoid or ulcer history |\n| Bloodstream | Any of the above plus rigors, shaking chills, rapid collapse — and always think of the IV cannula that has stayed too long |\n\nWhatever the door, the hour-one bundle is the same. The source changes the definitive treatment; it never delays the bundle.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day six after prostate surgery, a 68-year-old diabetic man becomes confused in the evening. Temperature 38.4, pulse 118, respiratory rate 26, BP 98/58. His catheter has been in since theatre and the urine looks cloudy; he has passed 'very little' today.\n\nWhat is the working diagnosis, and what happens in the next hour?\n\nAnswer: Fever, tachycardia, tachypnoea, new confusion and borderline pressure — sepsis until excluded, with the likely doors being the catheter, the chest and the surgical wound. Within the hour: inform the senior; blood cultures, a urine culture and a malaria smear before antibiotics if the delay is only minutes; **IV broad-spectrum antibiotics per protocol — not in the morning**; oxygen to target; a cautious IV fluid bolus with immediate reassessment of chest and mentation; lactate sent; hourly urine charted; observations moved to early-warning scoring at least hourly. Reassess at one hour: pressure falling or lactate rising means critical-care review and transfer planning now. Waiting overnight 'to see whether the malaria treatment works' is how this case becomes a mortality audit — and the relatives will remember that the confusion was reported and nothing moved.",
      },
      {
        type: "memory_trick",
        body: "SEPSIS SIX, three IN, three OUT, all within the hour: **I**N — oxygen, antibiotics, IV fluids. **O**UT — cultures, lactate, urine output. And the sentry at the door is the breathing rate.",
      },
      {
        type: "summary",
        body: "- Sepsis is life-threatening organ dysfunction from a dysregulated response to infection; septic shock is when the pressure fails to respond to fluids.\n- Sentinel signs: fever 38 or more (or hypothermia), respiratory rate 25 or more, pulse above 110, new confusion, systolic below 100 — two or more means sepsis until excluded.\n- Hour-one bundle: oxygen, IV antibiotics, IV fluids IN; cultures, lactate, hourly urine OUT.\n- Malaria smear in parallel, never instead — a positive smear excludes nothing.\n- Reassess after every bolus — the septic heart floods easily; escalate persistent hypotension or a rising lactate.",
      },
    ],
    questions: [
      {
        topic: "Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination of adult findings makes sepsis the working diagnosis until excluded?",
        options: [
          "Temperature 37.2, pulse 76, respiratory rate 16, alert and chatty",
          "Temperature 38.4, respiratory rate 26, new confusion, pulse 116",
          "Blood pressure 148/92, pulse 88, afebrile, alert",
          "Temperature 36.9, respiratory rate 18, pulse 84, mild headache",
        ],
        correctIndex: 1,
        explanation:
          "Fever, tachypnoea, new confusion and tachycardia — several sentry signs together with probable infection — is the sepsis screen firing. Screening tools differ in exact cutoffs, but several flags together always outrank a single borderline number.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Sepsis",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient screens positive for sepsis at 21:40. Within the next hour, what is the correct relationship between antibiotics and cultures?",
        options: [
          "Hold all treatment until blood cultures have incubated, so therapy can be precisely targeted",
          "Give antibiotics immediately and skip cultures entirely, since they will not change the first hour",
          "Send cultures only after three days of fever, and treat symptomatically meanwhile",
          "Take cultures before the antibiotics if it costs no delay — but the antibiotics are given within the hour regardless",
        ],
        correctIndex: 3,
        explanation:
          "The hour-one bundle draws cultures when it can, but the antibiotic clock is fixed: every hour of delay in antibiotics measurably increases mortality. Waiting for incubation, ward rounds or results is the classic fatal pause.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Sepsis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In a Ghanaian ward, how should malaria be handled in a patient being treated for suspected sepsis?",
        options: [
          "Test for malaria in parallel and treat both possibilities — never let malaria management delay the sepsis bundle",
          "Treat malaria alone for 48 hours first; fever in Ghana is almost always malaria",
          "A positive malaria smear excludes sepsis, so the sepsis pathway can be stopped",
          "Malaria and sepsis cannot coexist in one patient",
        ],
        correctIndex: 0,
        explanation:
          "Both diseases are common and can coexist. The safe pattern is smear and cultures in parallel, the sepsis bundle now, and malaria treatment added if confirmed. Malaria-first thinking is exactly how sepsis deaths are audited in endemic settings.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Sepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During fluid resuscitation for sepsis, what must the nurse do after each bolus — and why?",
        options: [
          "Nothing until the registrar reviews the chart in the morning",
          "Run the next bolus immediately — the faster the fluid, the better",
          "Reassess pressure, pulse, mentation and the chest — because the septic heart floods easily, and shock can be traded for pulmonary oedema",
          "Only check the urine output, since it alone reflects perfusion",
        ],
        correctIndex: 2,
        explanation:
          "Every bolus is a test as well as a treatment: reassess the pressure, pulse and mentation and auscultate the chest after each one. Septic patients can tip from under-filled to overloaded within hours, which is why the bundle pairs aggressive fluids with aggressive reassessment.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Sepsis",
        front: "Define sepsis in one sentence.",
        back: "Life-threatening organ dysfunction caused by a dysregulated host response to infection — the body's answer to the germ becomes the killer. With hypotension that fails to respond to fluids, it is septic shock.",
      },
      {
        topic: "Sepsis",
        front: "List the sentinel (sentry) signs of adult sepsis.",
        back: "Pyrexia 38 or more (or hypothermia below 36); respiratory rate 25 or more; heart rate above 110; new confusion or drowsiness; systolic below 100. Two or more — with suspected infection — treat as sepsis.",
      },
      {
        topic: "Sepsis",
        front: "What is the Sepsis Six (hour-one bundle)?",
        back: "Three IN: oxygen, IV broad-spectrum antibiotics, IV fluids. Three OUT: cultures (before antibiotics if no delay), serum lactate, hourly urine output.",
      },
      {
        topic: "Sepsis",
        front: "Why count the respiratory rate in every febrile patient?",
        back: "Tachypnoea is the earliest and most consistently present sepsis sign — and the most frequently skipped observation. A fever with a rate of 26 is sepsis until proven otherwise.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Sepsis — Fact Sheet",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Antimicrobial choices for sepsis management; verify current edition, Ministry of Health Ghana.",
      },
      {
        organization: "CDC",
        title: "About Sepsis — clinical and public education resources",
        note: "Recognition resources for health workers; verify current pages on the CDC website.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Shock & Circulation",
    lessonTitle: "Shock: The Four Kinds of Collapse",
    description:
      "Hypovolaemic, cardiogenic, septic and anaphylactic — the failing circulation, the signs that betray it early, and the response that runs volume and cause in parallel.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Define shock as failing tissue oxygen delivery rather than a blood-pressure reading, and describe compensation.",
      "Distinguish the four shock families — hypovolaemic, cardiogenic, septic and anaphylactic — with the bedside signs that separate them.",
      "Apply the first-line nursing response to each family, running resuscitation and cause control in parallel.",
    ],
    tags: ["shock", "circulation", "haemorrhage", "haemodynamics"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Shock means the tissues are starving. Whatever the blood pressure reads, the circulation is no longer delivering oxygen to the cells — and cells denied oxygen begin dying within minutes. The word frightens people, which is the wrong lesson: shock is not a verdict, it is a signal, and it is caught by watching the pulse, the skin and the urine rather than worshipping the pressure cuff.\n\nThe causes arrive daily on Ghanaian wards: the okada rider bleeding into his abdomen, the grandmother emptied by cholera-like diarrhoea, the man whose infarction has broken his pump, the patient whose infection has thrown every vessel open, the one whose antibiotic has triggered an allergic collapse. Four families of failure — and four different answers. This lesson separates them.",
      },
      {
        type: "text",
        title: "The four kinds — tank, pump, pipes",
        body: "Picture the circulation as a **tank** (the blood volume), a **pump** (the heart) and **pipes** (the vessels). Shock is what happens when one of them fails.\n\n**Hypovolaemic shock** — the tank empties. Bleeding is the honoured cause: trauma, a ruptured ulcer, obstetric haemorrhage — but in Ghana, diarrhoea and vomiting empty the tank as thoroughly and far more quietly, and burns do it through weeping skin. **Cardiogenic shock** — the pump breaks. Myocardial infarction is the classic; arrhythmias and late heart failure follow. Note its three **obstructive cousins**, which strangle a healthy pump from outside: massive pulmonary embolism, tension pneumothorax and cardiac tamponade. **Septic (distributive) shock** — the pipes leak. Overwhelming infection floods the body with inflammatory signals; the vessels dilate and gape open, so a normal volume circulates in pipes twice too wide. **Anaphylactic shock** — the pipes collapse in minutes, an allergic catastrophe with its own lesson and its own injection. A fifth cousin, **neurogenic shock** after spinal cord injury, mimics the distributive pattern — warm dry limbs, low pressure and a paradoxically slow pulse.",
      },
      {
        type: "table",
        title: "The four shocks at a glance",
        body: "| Family | The fault | Classic causes | Skin | Neck veins | First nursing answer |\n|---|---|---|---|---|---|\n| Hypovolaemic | Empty tank | Bleeding, diarrhoea and vomiting, burns | Cold, clammy, pale | Flat | Two wide-bore lines, warmed fluids, blood early, stop the loss |\n| Cardiogenic (± obstructive) | Broken or squeezed pump | Infarction, arrhythmia, pulmonary embolism, tension pneumothorax, tamponade | Cold, clammy, mottled | Engorged | Oxygen, sit up, fluids with great caution, treat the heart, escalate early |\n| Septic (distributive) | Gaping pipes | Chest, urine, wounds, abdomen; malaria may ride along | Warm and flushed early; cold and clammy late | Flat until late | The sepsis bundle — oxygen, antibiotics within the hour, careful fluids, source control |\n| Anaphylactic | Pipes clamped after a trigger | Antibiotics, foods, stings, contrast, antivenom, blood products | Flushed, urticaria, swollen lips | Flat | IM adrenaline first — everything else second |\n\nThe skin and the neck veins are your fastest compass between the families: cold and collapsed versus warm and wide; flat neck veins when tank or pipes are empty, engorged when the pump is drowning.",
      },
      {
        type: "text",
        title: "Compensation — the honest signs",
        body: "The body defends its blood pressure heroically, and healthy young adults defend it best — which is why the young rider 'looks fine' with half his volume pooled in his abdomen. First the **pulse rises** and the skin vessels clamp down: pale, cold, clammy fingers; capillary refill dragging past two seconds; urine quietly falling — the kidney is the first organ sacrificed. **Pulse pressure narrows** — the systolic and diastolic close together — breathing quickens, and the patient becomes anxious, restless or oddly still; restlessness after blood loss is a physiology sign, not a personality. The pressure is defended until roughly **a third of the volume is gone**; by the time it falls, you are late, and when it becomes unrecordable you are nearly out of road.\n\nFor bleeding, quantify everything: weigh the dressings and pads — one gram is one millilitre — measure the drainage, chart the stool and vomit, watch the collection bag. The eye underestimates every loss, every single time.",
      },
      {
        type: "clinical_pearl",
        body: "Trust the pulse and the skin, not the pressure — and weigh the swabs. A young adult with a climbing pulse, cold fingertips and an empty catheter bag has lost serious blood even while the cuff reads beautifully. And warm shock is the sneaky one: fever with warm flushed skin and a bounding pulse is still shock — it is merely septic.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An okada rider arrives after a head-on collision. He is quiet and pale, with 'no big wounds' — only a graze on the forearm. Pulse 122 and thin, BP 96/64, respiratory rate 26, capillary refill four seconds; the abdomen is distending under your hands, and the catheter has yielded 15 mL in an hour. The night cover says he seems stable because the pressure is fine.\n\nWhat is happening, and what do you do in the next fifteen minutes?\n\nAnswer: This is compensated hypovolaemic shock — almost certainly bleeding into the abdomen, with the chest and pelvis on the suspicion list. The physiology speaks: fast thin pulse, narrowed pressure, cold skin, absent urine — loss well past a litre while 'the pressure is fine'. Within fifteen minutes: call for help and alert theatre and the blood bank; two large-bore cannulae with crossmatch bloods drawn at insertion; warmed fluids running while blood is fetched — blood early, because endless crystalloid into ongoing bleeding only dilutes what remains; oxygen; keep him warm; monitor with pulse, pressure, respirations and hourly urine; prepare him for theatre, because the treatment of haemorrhagic shock is the treatment of its cause. And chart it all, so the next person sees the trend rather than a reassurance.",
      },
      {
        type: "memory_trick",
        body: "P-P-P: the **P**ulse speaks first, the **P**ressure lies late, the **P**erfusion — skin, capillary refill, urine — tells the truth. And the four families in four pictures: **tank empty, pump broken, pipes gaping, pipes clamped**.",
      },
      {
        type: "summary",
        body: "- Shock is failing tissue oxygen delivery, not a blood-pressure reading; young adults compensate brilliantly and then collapse without warning.\n- Four families: hypovolaemic (empty tank — bleeding, diarrhoea, burns), cardiogenic with its obstructive cousins (broken or squeezed pump), septic/distributive (gaping pipes), anaphylactic (clamped pipes after allergy; neurogenic the spinal cousin).\n- Earliest honest signs: rising pulse, narrowing pulse pressure, cold clammy skin, slow capillary refill, falling urine, restlessness.\n- The skin and neck veins are the compass between families: cold-and-flat versus warm-and-wide.\n- Treat in parallel: resuscitate (two wide-bore lines, warmed fluids, blood early in bleeding) while attacking the cause — volume alone has never stopped a bleed or cured an infarction.",
      },
    ],
    questions: [
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement defines shock correctly?",
        options: [
          "Shock means the blood pressure is low",
          "Shock means the tissues are starved of oxygen — whatever the blood pressure reads",
          "Shock is a faint that resolves with lying flat",
          "Shock is the final stage of infection",
        ],
        correctIndex: 1,
        explanation:
          "Shock is failure of oxygen delivery at tissue level — the pressure is merely one dial on the machine, and it lies until late. A patient can be in compensated shock with a normal pressure, which is precisely the trap that catches the confident.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which group of findings represents the EARLIEST reliable signs of haemorrhagic shock?",
        options: [
          "Fall in blood pressure and loss of consciousness",
          "Falling urine output with hypertension and a slow pulse",
          "Rising pulse, cold clammy skin, delayed capillary refill, falling urine output",
          "Warm flushed skin with a slow strong pulse",
        ],
        correctIndex: 2,
        explanation:
          "Compensation shows first in the pulse and skin perfusion while the kidney quietly loses its supply; the pressure is defended until roughly a third of the volume is lost. Warm flushed skin belongs to early distributive shock, not bleeding.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Shock",
        type: "CLINICAL_SCENARIO",
        difficulty: "Hard",
        stem: "A febrile patient has warm flushed skin, a bounding fast pulse, wide pulse pressure and new confusion. Which shock family is this — and what is the response?",
        options: [
          "Hypovolaemic from concealed bleeding — urgent crossmatch and theatre",
          "Cardiogenic after infarction — sit up, restrict fluids, treat the heart",
          "Neurogenic from cord injury — immobilise and observe",
          "Early septic (distributive) shock — run the sepsis bundle: oxygen, antibiotics within the hour, careful fluids, source control",
        ],
        correctIndex: 3,
        explanation:
          "Warm, vasodilated shock with fever is the distributive pattern — sepsis until proven otherwise. The warm skin deceives: the pipes are gaping, not the tank overflowing. The response is the hour-one bundle; anaphylaxis is the mimic to exclude if a trigger occurred minutes before.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is endless crystalloid the wrong answer to ongoing haemorrhage?",
        options: [
          "Because crystalloid raises the blood pressure dangerously fast",
          "Because replacing volume while bleeding continues dilutes the remaining blood and its clotting factors — blood early and control of the bleed are the definitive treatment",
          "Because crystalloid only works in children",
          "Because young adults cannot tolerate IV fluids",
        ],
        correctIndex: 1,
        explanation:
          "Fluid buys minutes, but the cure is stopping the bleeding — with early blood and blood products to preserve oxygen delivery and clotting. Volume without cause control is a slowing failure; this is the same logic that fills the next lesson.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Shock",
        front: "Name the four shock families and their fault.",
        back: "Hypovolaemic — empty tank (bleeding, diarrhoea, burns); cardiogenic, with the obstructive cousins pulmonary embolism, tension pneumothorax and tamponade — broken or squeezed pump; septic/distributive — gaping pipes; anaphylactic — pipes clamped after allergy (neurogenic the spinal cousin).",
      },
      {
        topic: "Shock",
        front: "What are the earliest honest signs of shock?",
        back: "Rising pulse, narrowing pulse pressure, cold clammy skin, capillary refill over two seconds, falling urine output, anxiety or restlessness. The pressure falls only after about a third of the volume is lost.",
      },
      {
        topic: "Shock",
        front: "How does warm shock differ from cold shock at the bedside?",
        back: "Warm, flushed skin with a bounding pulse early in sepsis (distributive), versus cold, clammy, pale skin with a thready pulse in hypovolaemic and cardiogenic shock. Neck veins: flat when tank or pipes are empty; engorged when the pump fails.",
      },
      {
        topic: "Shock",
        front: "Why weigh dressings and pads in a bleeding patient?",
        back: "Visual estimation underestimates blood loss every time. Weighing dressings and pads (1 g is about 1 mL) plus measured drainage gives the number that drives treatment — while the physiology, not the estimate, drives the urgency.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Basic Emergency Care: approach to the acutely ill and injured",
        note: "Circulatory assessment and shock management for frontline providers; verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Emergency management in district practice; verify current edition, Ministry of Health Ghana.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing",
        year: "2022 (15th edition)",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Shock & Circulation",
    lessonTitle: "Fluid Resuscitation & Blood Products",
    description:
      "Choosing, giving and watching — the craft of refilling the tank without drowning it, and the blood that answers what water cannot.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Compare crystalloids, colloids and blood products, and match each to the clinical problem it actually solves.",
      "Apply the technique of rapid, safe administration — large-bore access, warmed boluses, reassessment after each.",
      "Recognise the patients in whom fluid itself is the danger, and the nursing discipline around blood transfusion.",
    ],
    tags: ["fluids", "transfusion", "resuscitation", "iv therapy"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Refill the tank without drowning the pump. Fluid resuscitation is one of the most powerful things a nurse does — and one of the most abused. Given thoughtfully, it walks patients back from the edge of shock; given reflexively, it floods lungs, dilutes blood and hides the fact that the bleeding never stopped.\n\nThis lesson is the craft: choosing the fluid, giving it fast when speed matters, watching what happens, knowing when the answer is blood instead — and respecting the patients in whom fluid itself is the danger.",
      },
      {
        type: "text",
        title: "Choosing the fluid",
        body: "Fluids are medicines: they have indications, doses and side-effects. The everyday choice is between **crystalloids** — salt-water solutions that mix with the whole water space of the body — and **blood products**, which carry what water cannot: oxygen and clotting. **Normal saline** is familiar and stable, but litres of it deliver a heavy salt and acid load. **Ringer's lactate or Hartmann's (balanced crystalloids)** approximate the body's own chemistry and are generally preferred for resuscitation. Crystalloid works by volume — and two-thirds of what you give leaves the vessels within the hour, which is fine until bleeding continues, because then every bag dilutes the remaining red cells and clotting factors. **Colloids** (gelatins, starches, albumin) stay in the vessels longer but add cost and complications — and none of them replaces what a bleeding patient is actually losing.\n\n**Blood is the definitive answer to ongoing haemorrhage.** Whole blood or packed red cells restore the oxygen carriers; **fresh frozen plasma and platelets** restore clotting when loss or dilution has thinned it. In Ghana, blood comes through the **National Blood Service** from voluntary donors — stock is precious, group-and-screen and crossmatch take time, and the blood bank must be alerted at the first thought of bleeding, not the last. In dire emergencies, group O blood bridges the gap while the crossmatch completes.",
      },
      {
        type: "table",
        title: "The fluid larder",
        body: "| Fluid | What it is | Best for | Caution |\n|---|---|---|---|\n| Normal saline | Crystalloid — salt water | Volume where nothing else exists; diluent for many drugs | Large volumes load salt and acid; watch the kidneys and the chloride |\n| Ringer's lactate / Hartmann's | Balanced crystalloid | First-choice volume for shock and losses | None unique — but no fluid replaces blood for the bleeding patient |\n| Colloids (gelatin, albumin) | Large molecules that stay in vessels | Selected cases of persistently low pressure | Cost, reactions; never a substitute for blood or cause control |\n| Packed red cells / whole blood | Oxygen carriers | Ongoing bleeding; severe anaemia with shock | Crossmatch time; reactions; cold blood; identity checking |\n| Fresh frozen plasma and platelets | Clotting factors | Bleeding with diluted or failing clotting | Guided by the clinical picture and available tests |\n\nThe rule under every row: fluid resuscitation is a bridge to a diagnosis, never a substitute for one.",
      },
      {
        type: "text",
        title: "Giving it — speed, warmth and watching",
        body: "Speed is technique. For shock, run fluids through **two large-bore cannulae** — wide enough to matter, 16–18 gauge in an adult, sized to the child — with pressure bags or squeezed bags for the fast ones, and the first bag **warmed**, because cold fluid into a cold shocked patient deepens the hypothermia that already switches off their clotting. Then the discipline that separates craft from ritual: **reassess after every bolus**. Does the pulse fall, the pressure climb, the skin warm, the confusion clear, the **urine rise past 0.5 mL per kilogram per hour**? That urinary catheter is not an indignity — it is the honest meter of your resuscitation, alongside capillary refill, mentation and, where available, a falling **lactate**. And put your stethoscope on the chest between boluses: new crepitations, a gallop rhythm, breathing that quickens as the pressure climbs — the tank is full and the lungs are drinking.\n\nThis is where fluid becomes the enemy, and some patients were in danger from the first drop: the **cardiogenic shock patient**, whose failing pump cannot be filled; the **kidney-failure patient**; the frail elderly; and — taught sharply by WHO's ETAT — the **severely malnourished child**, whose small stiff heart demands fluids given slowly, in smaller volumes, with weaker solutions than the standard bolus, watched breath by breath for the signs of overload.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 52-year-old man is admitted overnight with three days of black tarry stools — melaena from a long-known ulcer. Pulse 118, BP 92/58, cold and pale. The night cover runs litre after litre of saline and writes 'responding to fluids'. By morning he is on his third litre, still tachycardic, now breathing at 28 with fine crepitations at both bases — and nobody has called the blood bank.\n\nWhat has gone wrong, and what are the next moves?\n\nAnswer: The bleeding never stopped, so the crystalloid has only diluted him — volume without oxygen carriers, clotting factors thinned further. He is now both under-resuscitated (still tachycardic, still hypovolaemic) and overloaded (the crepitations, the tachypnoea). Correct the course: inform the senior and the blood bank now, with a crossmatch drawn; sit him upright; oxygen; hold the routine saline; treat the bleed — acid suppression per protocol and urgent endoscopy or transfer — and monitor with pulse, pressure, respirations, hourly urine and repeated chest listens. The lesson the shock lesson closed on, now in full colour: **the treatment of haemorrhagic shock is the treatment of its cause — and blood early in the bleeding patient is not a last resort, it is the plan.**",
      },
      {
        type: "clinical_pearl",
        body: "Fluids are a bridge, not a destination. After every bolus, three questions before the next bag: is the patient warmer, clearer and making urine — or merely wetter? The catheter and the stethoscope judge your fluids; the drip chart only records them.",
      },
      {
        type: "quiz_prompt",
        title: "The malnourished child",
        body: "WHO's ETAT teaching singles out the severely malnourished child for a different fluid rule. Why does the standard adult bolus become dangerous in this child — and what replaces it?\n\nAnswer: Severe acute malnutrition remodels the heart into a small, stiff, fragile pump, and the usual rapid bolus can push it into acute heart failure. ETAT teaches fluids given slowly, in smaller volumes and weaker solutions than the standard regimen, under close monitoring for congestive signs — with shock re-assessed before anything is repeated. The general law: in fluid resuscitation, the sicker the heart, the slower the hand.",
      },
      {
        type: "memory_trick",
        body: "**Two big and warm; blood early; ears between.** Two big-bore lines, fluids warmed, blood early when the tank leaks — and between every bolus, your ears on the chest and your eyes on the catheter bag. The drip judges nothing; the patient does.",
      },
      {
        type: "summary",
        body: "- Crystalloid (saline, or the balanced Ringer's/Hartmann's) buys volume; only blood restores oxygen carriers and clotting — in ongoing bleeding, blood early and the blood bank alerted early.\n- Give shock fluids through two large-bore cannulae, warmed, as reassessed boluses — never as an unwatched river.\n- After each bolus judge pulse, pressure, skin, mentation and urine (target 0.5 mL/kg/h) — and listen to the chest.\n- The slow-fluid patients: cardiogenic shock, kidney failure, the frail elderly, and the severely malnourished child (ETAT: slow, small, weak, watched).\n- Fluid resuscitation is a bridge to definitive care: stop the bleed, treat the cause — then the fluids can stop.",
      },
    ],
    questions: [
      {
        topic: "Fluid Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does ongoing crystalloid infusion fail the actively bleeding patient?",
        options: [
          "Because crystalloid damages the kidneys in everyone",
          "Because it replaces volume with water — diluting red cells and clotting factors — while the loss continues; the definitive answers are blood early and control of the bleed",
          "Because crystalloid cannot be given through large cannulae",
          "Because crystalloid causes immediate anaphylaxis",
        ],
        correctIndex: 1,
        explanation:
          "Crystalloid refills the pipes but cannot carry oxygen or make clot; every bag given while bleeding continues thins what remains, trading haemorrhage for dilutional anaemia and coagulopathy. Blood and cause control are the treatment; crystalloid is the bridge.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Fluid Resuscitation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which bedside measures most reliably show whether resuscitation is working?",
        options: [
          "Urine output past 0.5 mL/kg/h, with warming skin and a falling pulse",
          "A rising temperature",
          "The total volume of fluid infused overnight",
          "The patient's weight on admission",
        ],
        correctIndex: 0,
        explanation:
          "The kidney is the first organ sacrificed in shock and the last rewarded — hourly urine, read together with mentation, perfusion and pulse, is the honest meter. Volume infused measures effort; urine measures effect.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Fluid Resuscitation",
        type: "MCQ",
        difficulty: "Hard",
        stem: "An elderly patient in cardiogenic shock needs volume assessment. What is the safe nursing approach to fluids?",
        options: [
          "A rapid two-litre bolus to fill the failing pump",
          "Fluids are absolutely forbidden in all cardiac patients",
          "Only if prescribed: small reassessed boluses with chest auscultation and pressure checks after each — the failing pump floods early",
          "Run fluids at double speed because the pressure is low",
        ],
        correctIndex: 2,
        explanation:
          "Cardiogenic shock sometimes does need judicious volume — but the failing ventricle tips into pulmonary oedema quickly, so fluids travel in small, reassessed steps with the stethoscope between bags. 'Never' is as wrong as 'fast'.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Fluid Resuscitation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What must precede every blood transfusion, without exception?",
        options: [
          "A prophylactic dose of antihistamine",
          "Warming the unit in hot water for speed",
          "A haemoglobin check alone",
          "A two-person bedside identity check — patient and unit against the prescription — with the patient monitored closely from the first minutes for a reaction",
        ],
        correctIndex: 3,
        explanation:
          "Most fatal transfusion reactions trace to the wrong blood in the wrong patient, and disciplined bedside checking is the only barrier. Monitor temperature, pulse, respiration and rash through the first 15 minutes, and stop the transfusion at the first sign of a reaction — stop, keep the line open with saline, alert.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Fluid Resuscitation",
        front: "Why give blood early in ongoing haemorrhage?",
        back: "Crystalloid replaces volume but not oxygen carriers or clotting factors; continued crystalloid dilutes the remaining blood into dilutional anaemia and coagulopathy. Blood plus control of the bleed is the definitive treatment.",
      },
      {
        topic: "Fluid Resuscitation",
        front: "Three signs a bolus worked — and three signs of overload.",
        back: "Worked: pulse falls, pressure and mentation improve, skin warms, urine passes 0.5 mL/kg/h. Overload: breathing quickens, new crepitations or a gallop, distress rising with the pressure — stop and reassess.",
      },
      {
        topic: "Fluid Resuscitation",
        front: "Who are the 'slow-fluid' patients?",
        back: "Cardiogenic shock, kidney failure, the frail elderly — and the severely malnourished child (WHO ETAT: slow, small-volume, weakened solutions under close observation). The sicker the heart, the slower the hand.",
      },
      {
        topic: "Fluid Resuscitation",
        front: "First nursing response to a suspected transfusion reaction?",
        back: "Stop the transfusion immediately, keep the line open with normal saline, re-check identity paperwork, inform the doctor and blood bank, monitor vitals — and never restart the same unit.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Emergency Triage Assessment and Treatment (ETAT)",
        note: "Fluid therapy principles including the special rules for severe malnutrition; verify current edition.",
      },
      {
        organization: "National Blood Service, Ghana",
        title: "Clinical transfusion practice resources",
        note: "Blood safety, donation and bedside checking guidance; verify current materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Fluid choices and transfusion indications; verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Shock & Circulation",
    lessonTitle: "Anaphylaxis: The Allergic Emergency",
    description:
      "Adrenaline, airway and speed — the reaction that gives you minutes, not hours, and the thigh injection that reverses it.",
    difficulty: "Clinical Reasoning",
    durationMin: 11,
    objectives: [
      "Recognise anaphylaxis rapidly using the two-systems-after-a-trigger rule, and separate it from faints and panic.",
      "Apply the first-line response: IM adrenaline into the thigh immediately, position, oxygen and fluids — with antihistamines understood as adjuncts.",
      "Explain the biphasic reaction, the observation period, and the documentation and family education that prevent the next reaction.",
    ],
    tags: ["anaphylaxis", "adrenaline", "allergy", "emergency"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The reaction that gives you minutes, not hours. Ten minutes after an intravenous antibiotic, a patient can travel from an itch to a closing airway to circulatory collapse — and the difference between a story told warmly at handover and a case discussed in a mortality meeting is whether the nearest nurse's hands already knew what to do.\n\nAnaphylaxis lives in exactly the places Ghanaian nurses work: antibiotic injections in OPD, antivenom after snakebite, blood products, anaesthesia, contrast scans in the cities, bee and wasp stings at the farm, and foods from groundnuts to shellfish. This lesson makes the recognition instant and the response automatic — starting with the one drug that is the treatment.",
      },
      {
        type: "text",
        title: "Recognising it — the rule of two",
        body: "Anaphylaxis is a serious, rapid **hypersensitivity reaction involving the airway, breathing or circulation — typically with skin changes — after exposure to a trigger**. The bedside rule that never lets you down: **two systems, after a trigger, treat as anaphylaxis**. Skin is the most faithful witness — **urticaria** (the raised, itching weals), widespread flushing, **angioedema** of the lips, tongue and eyelids — arriving in most cases within minutes. The killers are the other systems: **airway** — hoarseness, a swelling tongue, stridor, the sound of a pipe closing; **breathing** — wheeze, distress, falling saturation; **circulation** — faintness, collapse, hypotension, a fast thready pulse; and the gut may join with vomiting, cramping and diarrhoea.\n\nDistinguish the fainters. A **vasovagal** collapse is pale, brief, slow-pulsed, resolves with lying flat, and shows no rash, stridor or wheeze. Panic flushes and hyperventilates but keeps a strong pulse, no swelling and normal breathing sounds. When you genuinely cannot tell — treat as anaphylaxis: adrenaline given for a faint harms almost no one, while an anaphylaxis treated as a faint becomes a fatality.",
      },
      {
        type: "text",
        title: "The response — adrenaline owns the first minute",
        body: "Shout for help and **stop the trigger** — clamp the infusion, remove a stinger by scraping sideways, never squeezing the sac. Then the one drug that is the treatment: **adrenaline 1 in 1000, 0.5 mg intramuscularly into the mid-outer thigh** for an adult — through clothing if you must, repeated after about **five minutes** if the response is poor. It is not the last resort; it is the first move, given by nurses under standing emergency protocols while the doctor is being called. Then the support: **lie the patient flat with legs raised** — the vasodilated, empty circulation needs gravity's help (sitting up if breathing demands it; left tilt if she is pregnant); **high-flow oxygen**; **IV fluid resuscitation** through a wide-bore line for the collapsed pressure; **salbutamol nebulisation** for stubborn bronchospasm; and early senior or anaesthetic help for the airway that keeps narrowing — because a swelling airway narrows fast, and the moment of 'worse' is not the moment to begin planning.\n\nAntihistamines and steroids are the furniture — useful adjuncts, never the treatment, and reaching for them first is the classic beginner's error. **Biphasic reactions** — the second wave — arrive without re-exposure in a meaningful minority of patients, hours after apparent recovery: everyone treated for anaphylaxis is observed, commonly at least six hours and longer after severe reactions, and referred for review with written instructions. On discharge, the patient owns the lesson: what the trigger was, red-flag documentation at every future contact, an alert band, and — where available — an adrenaline auto-injector with the family taught to use it.",
      },
      {
        type: "clinical_pearl",
        body: "Adrenaline is the treatment; everything else is furniture. There is no contraindication to IM adrenaline in anaphylaxis, the best site is the mid-outer thigh, and the dose can be repeated at five minutes. The deaths cluster in the minutes spent reaching for an antihistamine.",
      },
      {
        type: "table",
        title: "Anaphylaxis, vasovagal faint or panic — the 60-second separation",
        body: "| Feature | Anaphylaxis | Vasovagal faint | Panic attack |\n|---|---|---|---|\n| Onset after trigger | Minutes | Seconds to minutes — at the needle, at the pain | Minutes, under stress |\n| Skin | Urticaria, flushing, angioedema | Pale, cold, clammy | Flushed, but no weals or swelling |\n| Airway and chest | Stridor, hoarseness, wheeze | Clear | Tight feeling, but good air entry and clear lungs |\n| Pulse | Fast, thready, may fade | Slow | Fast but strong |\n| Response to lying flat | Hypotension persists or deepens | Colour and consciousness return quickly | Settles with calm and slowed breathing |\n| First response | IM adrenaline — now | Flat with legs raised, observe | Reassure, breathe slowly, monitor |\n\nWhen the columns blur, act in the first column's favour — treat as anaphylaxis and keep watching.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Ten minutes into an intravenous ampicillin infusion on a medical ward, a 30-year-old man starts scratching, his lips and tongue visibly swell, his voice turns hoarse, and he slumps sideways in the bed fighting to sit upright and breathe. The infusion is still running; the emergency trolley has adrenaline; the doctor is on a ward round two buildings away.\n\nWhat are your actions in the next two minutes — in order?\n\nAnswer: Clamp and disconnect the infusion — the trigger — while shouting for help. **Adrenaline 1 in 1000, 0.5 mg IM into the mid-outer thigh now**: with tongue swelling and a hoarse voice the airway is closing, and this is the intervention that reverses it — under standing protocol you do not wait for the doctor. Lie him flat with legs raised — or as upright as his breathing tolerates — high-flow oxygen on, and airway help summoned early, because a narrowing airway narrows fast. Wide-bore IV access and a fluid bolus ready for the collapsing pressure; salbutamol nebuliser if wheeze dominates; and the clock written down — time of reaction, time of adrenaline, response — because the second dose at five minutes and the biphasic watch are decided by that clock. Antihistamine and steroid follow, never lead. Then observation for at least six hours, documentation that shouts 'penicillin allergy' from the front of the folder, and a discharge conversation with the family about the next reaction and its first minute.",
      },
      {
        type: "memory_trick",
        body: "The anaphylaxis answer is written on the **thigh**: A-A-A — **A**drenaline IM, **A**irway help early, **A**ntihistamines never first. Flat with legs up, oxygen on, fluids wide, repeat the adrenaline at five — and watch for the second wave.",
      },
      {
        type: "summary",
        body: "- Rule of two: airway, breathing or circulation signs — usually with skin changes — after a trigger, treat as anaphylaxis.\n- Adrenaline 1 in 1000, 0.5 mg IM into the mid-outer thigh for an adult, repeat at about five minutes: first move, no contraindications, works while everything else is still being fetched.\n- Support: stop the trigger, flat with legs raised, high-flow oxygen, IV fluids, salbutamol for wheeze, early airway help.\n- Antihistamines and steroids are adjuncts; deaths cluster in delayed adrenaline.\n- Observe for the biphasic second wave (commonly six hours or more); document the allergy where the next drug-giver cannot miss it, band the patient, and teach the family.",
      },
    ],
    questions: [
      {
        topic: "Anaphylaxis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the first-line treatment, dose and route for an adult in anaphylaxis?",
        options: [
          "Slow IV chlorpheniramine while calling the doctor",
          "Oral prednisolone, then observation for improvement",
          "Subcutaneous adrenaline 0.1 mg into the deltoid",
          "Adrenaline 1 in 1000, 0.5 mg intramuscularly into the mid-outer thigh, repeatable after about five minutes",
        ],
        correctIndex: 3,
        explanation:
          "IM adrenaline into the thigh gives the fastest reliable absorption and is the single intervention that reverses airway and circulatory collapse — repeat at five minutes if the response is poor. Antihistamines and steroids are adjuncts; subcutaneous absorption is slower and has no place here.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Anaphylaxis",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A patient is successfully treated for anaphylaxis and feels entirely well two hours later, asking to go home. What does the evidence demand?",
        options: [
          "He can go — adrenaline cures the reaction completely",
          "Observe for at least six hours (longer after severe reactions): biphasic second waves arrive without re-exposure — with written discharge instructions and a clear plan",
          "Observe only if he needed two doses of adrenaline",
          "Send him home on antihistamines alone, which prevent the second wave",
        ],
        correctIndex: 1,
        explanation:
          "Biphasic reactions recur hours after apparent recovery in a meaningful minority of patients; observation periods — commonly six hours or more after severe reactions — with clear written instructions are standard. Antihistamines do not prevent the second wave.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Anaphylaxis",
        type: "CLINICAL_SCENARIO",
        difficulty: "Clinical Reasoning",
        stem: "During an injection, a nursing student goes pale, briefly faints, and recovers fully when laid flat — no rash, no swelling, no stridor, and a slow pulse. What happened, and what is the correct response?",
        options: [
          "A vasovagal faint — lie flat with legs raised, observe, and escalate only if rash, swelling, stridor or persistent hypotension appears",
          "Anaphylaxis — give IM adrenaline immediately and admit for observation",
          "A seizure — protect her with restraint and a mouth gag",
          "A panic attack — discharge her at once with reassurance",
        ],
        correctIndex: 0,
        explanation:
          "Pale, brief, slow-pulsed, recovered by lying flat, with clean skin and a clear airway — the vasovagal signature. Treat with position and observation, keeping the anaphylaxis rule close: any evolution into rash, stridor or persistent hypotension converts the plan to adrenaline. When a case genuinely blurs, treat as anaphylaxis — but the classic faint is not a blur.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Anaphylaxis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before a patient with a new drug allergy goes home, what documentation and education are essential?",
        options: [
          "A verbal reminder to avoid the drug, recorded nowhere",
          "A note buried deep in the summary sheet only",
          "A front-of-notes allergy entry and alert band, the trigger named in writing, the family taught the warning signs and first response — and an adrenaline auto-injector with training where available",
          "Nothing — future prescribing is the pharmacist's responsibility",
        ],
        correctIndex: 2,
        explanation:
          "The next reaction depends on the next drug-giver seeing the warning: red-flag documentation, a band, a taught family and — where available — an auto-injector. Allergies recorded only in conversation are allergies forgotten.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Anaphylaxis",
        front: "The bedside rule for recognising anaphylaxis?",
        back: "Two systems after a trigger: airway (stridor, tongue swelling, hoarseness), breathing (wheeze, distress), circulation (collapse, hypotension) — usually with skin signs (urticaria, flushing, angioedema). When you cannot exclude it, treat as anaphylaxis.",
      },
      {
        topic: "Anaphylaxis",
        front: "Adult adrenaline in anaphylaxis — what, where, when, and again?",
        back: "Adrenaline 1 in 1000, 0.5 mg IM into the mid-outer thigh, immediately, repeated after about five minutes if the response is poor. No contraindications. Everything else — antihistamines, steroids — comes second.",
      },
      {
        topic: "Anaphylaxis",
        front: "Why does the anaphylaxis patient lie flat with legs raised?",
        back: "Vasodilation has emptied the effective circulation; gravity refills the heart from the legs. Sit up only if breathing demands it, left tilt in pregnancy — and never stand the patient up suddenly during recovery.",
      },
      {
        topic: "Anaphylaxis",
        front: "What is a biphasic reaction?",
        back: "A second wave of anaphylaxis, without new exposure, typically within hours — the reason to observe (commonly six hours or more after severe reactions) and to send the patient home with written instructions.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Anaphylaxis recognition and treatment — immunization training resources",
        note: "Recognition and first-response guidance used in vaccination training; verify current edition.",
      },
      {
        organization: "CDC",
        title: "Anaphylaxis after vaccination — clinical guidance",
        note: "Public clinical resources on recognition and management; verify current pages on the CDC website.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Anaphylaxis management in district practice; verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Airway, Breathing & Resuscitation",
    lessonTitle: "Basic Life Support: The Core Skills",
    description:
      "Chest compressions, rescue breaths and the defibrillator — the sequence practised until calm, and the teamwork that brings people back.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Perform the adult BLS sequence: danger, response, shouting for help, airway and breathing assessment, then high-quality compressions.",
      "Explain the quality standards — rate, depth, recoil, minimal interruption — and why they, not the equipment, determine outcome.",
      "Apply BLS as a team: calling 112 for the Ghana National Ambulance Service, using the AED, documenting times, and stopping correctly.",
    ],
    tags: ["bls", "cpr", "resuscitation", "aed"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A man collapses in the market, in the corridor, in the bathroom of your ward — and your training has to outrun your fear. Cardiac arrest is rare enough that you must think it through now, because in the event, the first two minutes belong to reflexes.\n\nBasic life support is those reflexes, organised: a short sequence of checks and actions — compressions, breaths, an automated defibrillator — that keeps oxygenated blood moving to the brain until advanced help arrives. Started early and done well, it doubles or triples survival. Started late or done gently, it is theatre. This lesson builds the sequence, the quality standards, and the teamwork that keeps it calm.",
      },
      {
        type: "text",
        title: "The sequence — D-R-S-A-B-C",
        body: "**Danger** before anything: traffic, live wires, an aggressive patient, a wet floor — a second victim helps nobody. **Response**: shout and gently shake — 'Are you alright?' **Shout for help**: call the emergency line — **112, the Ghana National Ambulance Service** — and send a *specific* runner with a *specific* task: bring the AED, bring the bag-mask and oxygen. Note the time. **Airway**: head-tilt, chin-lift; jaw-thrust without head movement if the neck may be injured. **Breathing**: look, listen and feel for no more than ten seconds. Breathing normally? — recovery position, monitor closely, keep watching. Absent or **abnormal — and gasping, snoring or irregular agonal breaths are abnormal** — compressions begin immediately.\n\n**Compressions**: heel of one hand on the centre of the chest, the second hand clasped over it, arms straight, shoulders above the hands, over the **lower half of the sternum**; push **hard and fast — 5 to 6 centimetres deep, 100 to 120 a minute**; let the chest **recoil fully** between compressions, because the heart refills as you come *up*; and **minimise every interruption** — the blood pressure your compressions build drains away within seconds of stopping. Give **two rescue breaths after every thirty compressions** if you are trained and willing, each breath over about one second, just enough to make the chest rise; untrained or unwilling? — continuous compressions, without pause. Swap the compressor about every two minutes — fatigue quietly destroys depth within minutes, even when the compressor still feels strong.",
      },
      {
        type: "text",
        title: "The defibrillator and the aftermath",
        body: "**Defibrillation is the only cure for ventricular fibrillation**, the chaotic rhythm behind most sudden adult collapses — so the AED is fetched, not admired. Bare the chest, dry it, attach the pads where the pictures on them say, let the machine analyse, and follow its voice exactly: shock delivered, then **compressions resume immediately** — do not pause to feel for a pulse after a shock; a reorganised rhythm without circulation is still arrest, and it is the compressions you resume that convert rhythm into a beating heart. Continue the cycles until the patient recovers, a qualified team takes over, or you are relieved.\n\nIf normal breathing returns, into the **recovery position** — on the side, airway open, watched breath by breath until the ambulance arrives, because arrest loves an encore. Record everything: time found, time CPR started, shocks given, rhythm changes, drugs and outcomes when the advanced team arrives — the times are the spine of the resuscitation record and of every audit. And when it is over, whoever you are: the debrief belongs to the next lesson, and it is part of the resuscitation, not a luxury.",
      },
      {
        type: "callout",
        title: "The quality checklist — chant it while you pump",
        body: "- Centre of the chest, lower half of the sternum; arms straight, shoulders above hands.\n- Hard and fast: 5–6 cm deep, 100–120 per minute — roughly the beat of a familiar highlife chorus.\n- Full recoil every time — the heart refills on the upstroke.\n- Thirty compressions, two breaths; swap the compressor every two minutes.\n- Hands move only when they must — every pause drains the brain's supply.\n- Agonal gasps are not breathing. They are the dying heart's echo — and the most misread sign at any bedside.",
      },
      {
        type: "clinical_pearl",
        body: "The commonest bystander mistake is waiting to be sure. The unresponsive patient who is not breathing *normally* — including the one who is gasping or snoring — is in cardiac arrest until proven otherwise, and certainty takes ten seconds. The second mistake is gentle compressions: a cracked rib heals; a brain starved at half-depth does not.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Walking to the sluice at 23:40, you find an elderly patient collapsed in the bathroom, unresponsive. You shake and shout — nothing. You tilt his head back and look, listen, feel: you cannot be sure — the chest seems to move, but the breaths are slow, noisy and irregular.\n\nWhat are your actions in the next two minutes?\n\nAnswer: He is unresponsive with breathing that is not normal — slow, noisy, irregular breaths are agonal until proven otherwise, so this is treated as arrest. Shout for the night team, send a runner for the arrest trolley and the defibrillator, and note the time. On the floor, compressions begin now: centre of the chest, 5–6 cm, 100–120 a minute, full recoil, 30:2 with the bag-mask once the second nurse arrives, swapping compressors every two minutes. The AED is attached the moment it arrives — chest bare and dry, pads as pictured, analyse, shock if instructed, compressions resuming the instant the shock lands. Recovery means breathing turns normal: into the recovery position and monitored until help arrives. Afterwards — the record of times and shocks, and the ten-minute debrief. Two minutes of reflex, built years before this night.",
      },
      {
        type: "memory_trick",
        body: "DRS-ABCD, in order and out loud: **D**anger, **R**esponse, **S**hout and send for the defib and the 112 line, **A**irway, **B**reathing — not normal means **C**ompressions, hard and fast, 30 to 2 — and the **D**efibrillator as soon as it lands. Underneath it all, the chant: hard, fast, deep, full-up, no stopping.",
      },
      {
        type: "summary",
        body: "- BLS sequence: Danger, Response, Shout for help (call 112, send for the AED), Airway, Breathing check within ten seconds, then compressions.\n- Compress the centre of the chest: 5–6 cm, 100–120 per minute, full recoil, minimal pauses, swap every two minutes; 30:2 with breaths if trained — otherwise continuous compressions.\n- Agonal gasps are not breathing: unresponsive plus not-normal breathing equals arrest — start.\n- AED early, follow the voice, resume compressions immediately after every shock; recovery position once normal breathing returns — and keep watching.\n- Record the times; debrief the team. Survival is built in the first minutes, by the hands that arrive first.",
      },
    ],
    questions: [
      {
        topic: "Basic Life Support",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the correct compression standards for adult CPR?",
        options: [
          "5–6 cm deep, 100–120 per minute, full recoil, minimal interruptions",
          "2–3 cm deep, 60 per minute, pausing after each set to feel the pulse",
          "As deep and as fast as the ribs allow, at any rhythm",
          "Compressions are only for trained physicians",
        ],
        correctIndex: 0,
        explanation:
          "Depth 5–6 cm, rate 100–120 per minute, complete recoil between compressions and minimal interruption define effective CPR — the chest is both pump and valve, and the heart refills only when you release fully upward.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Basic Life Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An unresponsive man is taking slow, noisy, irregular breaths. What does this mean, and what must you do?",
        options: [
          "He is breathing — place him in the recovery position and watch",
          "He is sleeping deeply — check again in five minutes",
          "These are agonal gasps: treat as cardiac arrest — call for help and start compressions immediately",
          "He needs an airway adjunct and hourly observations",
        ],
        correctIndex: 2,
        explanation:
          "Agonal gasps are the dying brain's reflex breathing, present in many arrests — and the single most misread sign at a bedside: they are not normal breathing. The unresponsive patient who is not breathing normally gets CPR, now.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Basic Life Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are alone on a ward with no phone at hand. After confirming cardiac arrest in an adult, what is the order of priorities?",
        options: [
          "Search the surroundings for the cause before touching the patient",
          "Check danger, response, shout for help — send a runner to call 112 and fetch the AED — open the airway, check breathing, then start compressions as help travels",
          "Give rescue breaths for two minutes before any compressions",
          "Run to inform the senior nurse before starting anything at the bedside",
        ],
        correctIndex: 1,
        explanation:
          "Danger, response, summoning help with specific tasks per runner, airway and breathing check — then immediate compressions. Help that is not coming cannot restart a heart, and compressions cannot wait while the runner travels: begin as help moves.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Basic Life Support",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The AED delivers a shock and prompts you to continue. What comes next?",
        options: [
          "Feel for a pulse to see whether the shock worked",
          "Wait thirty seconds for the rhythm to stabilise",
          "Remove the pads and switch to mouth-to-mouth",
          "Resume compressions immediately and continue cycles until the AED analyses again or the patient recovers",
        ],
        correctIndex: 3,
        explanation:
          "After a shock, resume CPR immediately: a reorganised rhythm without circulation is still arrest, and it is the compressions that restore output. Pulse checks interrupt the pump for little gain; the AED will analyse again on its own cycle.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Basic Life Support",
        front: "State the adult BLS sequence in order.",
        back: "Danger → Response (shout and shake) → Shout for help: call 112, send for the AED → Airway (head-tilt chin-lift; jaw-thrust if the neck may be hurt) → Breathing check within 10 seconds → CPR 30:2, or compressions only → Defibrillator as early as possible.",
      },
      {
        topic: "Basic Life Support",
        front: "Agonal gasps — what are they, and what do they trigger?",
        back: "Slow, noisy, irregular reflex breaths from the dying brain, present in many arrests — NOT normal breathing. Unresponsive plus not breathing normally equals cardiac arrest: start compressions.",
      },
      {
        topic: "Basic Life Support",
        front: "Four quality standards for compressions?",
        back: "Depth 5–6 cm; rate 100–120 per minute; full chest recoil; minimal pauses — and swap compressors every two minutes, because fatigue quietly halves depth while the compressor still feels strong.",
      },
      {
        topic: "Basic Life Support",
        front: "Why resume compressions immediately after an AED shock?",
        back: "The shock reorganises the rhythm, but circulation is still absent until compressions restore it — pausing to check pulses or waiting only drains the cerebral supply that CPR built.",
      },
    ],
    sources: [
      {
        organization: "Ghana National Ambulance Service",
        title: "Emergency medical services and first-response training resources",
        note: "National emergency line 112; verify current training materials.",
      },
      {
        organization: "World Health Organization",
        title: "Basic Emergency Care: approach to the acutely ill and injured",
        note: "Structured resuscitation teaching for frontline providers; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Airway, Breathing & Resuscitation",
    lessonTitle: "Choking & Airway Emergencies",
    description:
      "The blocked airway at any age — back blows, abdominal thrusts, and the everyday manoeuvres that keep the airway you were given open.",
    difficulty: "Moderate",
    durationMin: 10,
    objectives: [
      "Distinguish mild from severe airway obstruction using speech, cough and colour — and act on the difference.",
      "Apply the age-correct response: five back blows and five abdominal thrusts in adults and children, the infant sequence, and CPR for the unconscious choker.",
      "Use the everyday airway skills — head-tilt chin-lift, jaw thrust, suction, recovery position — and know which swollen airways to transfer fast.",
    ],
    tags: ["choking", "airway", "obstruction", "first aid"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The blocked airway is the emergency with the shortest fuse and the simplest tools. A bolus of fufu at the family table, a groundnut at a durbar, a fish bone in a chop bar — and between breathing and silence stands whoever is nearest, with two bare hands and about a minute.\n\nThis lesson trains those hands: telling the cough that is working from the airway that is closing, the blow-and-thrust sequence that clears an adult, its gentler cousin for the infant, and the airway manoeuvres you will use every week of your working life.",
      },
      {
        type: "text",
        title: "Reading the obstruction",
        body: "Ask one question first — and watch the answer: **'Are you choking? Can you speak?'**\n\nThe patient who answers, coughs loudly and can still speak has **mild obstruction**: the cough is still moving air. The treatment is encouragement — keep coughing, stay beside them, do not slap a back yet and do not reach into the mouth; an interrupted cough is a lost cough. The patient who cannot speak, whose cough is silent or ineffective, who clutches the throat — the universal distress sign — and darkens toward cyanosis, has **severe obstruction**: no air is moving, and the clock runs toward hypoxic cardiac arrest within minutes. Two signs confirm closure: a silent chest that moves nothing, and an attempted rescue breath in a choking victim that goes nowhere — but do not wait to auscultate. A patient who cannot speak needs your hands, now.",
      },
      {
        type: "text",
        title: "Clearing it — five and five",
        body: "Shout for help and start the cycle: **five firm back blows** — heel of your hand between the shoulder blades, the patient leaned well forward (over your knee in a small child, over a chair or your arm in an adult), each blow delivered separately with the mouth checked between them. Still obstructed: **five abdominal thrusts** — the heel of one hand just above the navel, the other fist clasped over it, sharp inward-and-upward thrusts, again checking the mouth between each. Alternate **five and five** until the object flies out, help takes over, or the patient becomes unconscious — at which point the drill changes to **CPR beginning with compressions**: the compressions push the obstruction as effectively as anything, so lower them to the floor, begin the sequence, and check the mouth between cycles, removing only what you can *see*. Never perform a blind finger sweep — fingers wedge objects deeper. In the pregnant or very obese patient, abdominal thrusts become **chest thrusts**, aimed straight back toward the spine.\n\n**Infants under one year are different**: five back blows with the head supported and lowered over your forearm, then **five chest thrusts** with two fingers on the lower sternum — and never abdominal thrusts, because the infant's liver and spleen sit exposed under a soft ribcage. And any patient saved by abdominal or chest thrusts, or rendered unconscious, is examined afterwards: thrusts injure abdominal organs quietly, so medical review is part of the rescue, not an optional extra.",
      },
      {
        type: "text",
        title: "The airway you can fix without tools",
        body: "Behind choking sits the wider craft of keeping airways open. The **tongue** is the commonest airway obstruction of the unconscious patient — the head-tilt, chin-lift you perform a dozen times a shift is a life-saving manoeuvre disguised as a small one. **Jaw thrust** without head movement when the neck may be injured. **Suction** for the vomit, blood and secretions that drown the unprotected airway — mouth before nose, only what you can see, never deep and blind. The **recovery position** protects the airway of every breathing unconscious patient until help and full assessment arrive.\n\nAnd the airways that swell rather than block: burns and smoke inhalation with soot in the nose and singed nasal hair, angioedema, deep neck infections, and the anaphylaxis of the last lesson. They share one nursing law: keep the patient calm and sitting upright, keep them nil by mouth, call for airway help early, and transfer with the person most able to secure an airway. Swollen airways get worse before they get better — the moment of worse is not the moment to start planning.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During the ward's evening meal, a visitor suddenly stands, hands to his throat, unable to answer his wife's question — no sound, no cough, his face darkening over seconds.\n\nWhat is happening, and what are your actions in the next sixty seconds?\n\nAnswer: Cannot speak, cannot cough, universal distress sign — severe airway obstruction. Shout for help, lean him forward and deliver **five sharp back blows between the shoulder blades**, checking the mouth after each; no relief means **five abdominal thrusts** above the navel, inward and upward; alternate five-and-five until the bolus clears — usually with a cough and one very shaken patient — or he collapses, at which point he goes to the floor and compressions begin, with the mouth checked between cycles. Once the object clears, the story is not over: he is examined for what the thrusts may have done, and observed for swallowed fragments — a wheeze or persistent cough afterwards means something has slipped down into a lung, needing chest review and imaging. He is also taught, gently, to chew slowly and to sit while eating at his age. The relatives will tell this story for years; the ones they tell are the ones where somebody knew the sixty seconds.",
      },
      {
        type: "clinical_pearl",
        body: "A cough that speaks is a cough that works — encourage it, never interrupt it. Silence is the danger sign: the choking patient who goes quiet is the one your hands must answer. And after any successful set of abdominal thrusts, examine the abdomen even when the dinner seems saved: the rescue is not finished until the patient is reviewed.",
      },
      {
        type: "memory_trick",
        body: "**Five and five — blow, then shove.** Blows between the shoulder blades, thrusts above the navel, mouth checked between every five. Baby under one: blows and chest thrusts only — never shove the infant belly. Unconscious means compressions; the mouth gives up only what your eyes can see.",
      },
      {
        type: "summary",
        body: "- Ask 'can you speak?': speech and a strong cough mean mild obstruction — encourage coughing, observe. Silence, ineffective cough, the distress sign and cyanosis mean severe — act immediately.\n- Severe obstruction: five back blows, then five abdominal thrusts, alternating five-and-five, mouth checked between each set; chest thrusts in pregnancy and obesity.\n- The unconscious choker gets CPR from compressions; remove only visible objects; no blind finger sweeps, ever.\n- Infant under one: five back blows with the head low and supported, then five chest thrusts — abdominal thrusts are forbidden.\n- After any rescue: medical review for thrust injuries and inhaled fragments.\n- Everyday airway care: head-tilt chin-lift, jaw thrust, suction, recovery position — and early, urgent transfer for the swelling airways (burns, angioedema, infection, anaphylaxis).",
      },
    ],
    questions: [
      {
        topic: "Choking",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which patient has SEVERE airway obstruction and needs immediate intervention?",
        options: [
          "The patient coughing loudly between sentences",
          "The patient who can whisper 'I am fine' with an occasional cough",
          "The patient with a silent, ineffective cough, clutching the throat, going blue",
          "The patient with a night cough and a runny nose for two days",
        ],
        correctIndex: 2,
        explanation:
          "Silence is the signature: no speech, no effective cough, the universal distress sign and cyanosis mean no air is moving. The loud coucher is still moving air — encourage and observe.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Choking",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the correct response sequence for severe choking in a responsive adult?",
        options: [
          "Five back blows, checking the mouth, then five abdominal thrusts — alternating five-and-five until relief or unconsciousness",
          "An immediate blind finger sweep to hook the object out",
          "Water to wash the bolus down, then back blows",
          "Lay the patient flat and start CPR before any blows",
        ],
        correctIndex: 0,
        explanation:
          "Blows and thrusts alternate, with the mouth checked between sets; objects must never be swept blindly because fingers wedge them deeper, fluids cannot pass a dry obstruction, and CPR belongs to the unconscious patient.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Choking",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An 8-month-old baby has severe airway obstruction. What is the correct technique?",
        options: [
          "Abdominal thrusts as in adults, with less force",
          "A blind finger sweep with the little finger",
          "Back blows with the baby held upright at eye level",
          "Five back blows with the head supported and lowered, then five chest thrusts with two fingers on the lower sternum",
        ],
        correctIndex: 3,
        explanation:
          "Infants get back blows with the head low over the supported forearm, then chest thrusts — abdominal thrusts are forbidden under one year, where the liver and spleen lie exposed under the soft ribcage, and blind sweeps drive objects deeper.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Choking",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An adult's obstruction clears after one round of abdominal thrusts; he is laughing, breathing normally and declines any review. What must you insist on, and why?",
        options: [
          "Nothing — successful clearance ends the emergency",
          "Medical review before he leaves: thrusts can injure abdominal organs, and a fragment retained in the airway causes later wheeze, collapse or infection",
          "A glass of water to prove the airway is clear",
          "A week of prophylactic antibiotics to prevent aspiration",
        ],
        correctIndex: 1,
        explanation:
          "Two late dangers follow a save: occult abdominal injury from the thrusts, and an inhaled fragment slipping into a bronchus — signalled by persistent wheeze, cough or later fever. The rescue ends with a review, not a laugh. Prophylactic antibiotics are not routine.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Choking",
        front: "How do you distinguish mild from severe airway obstruction?",
        back: "Speech and an effective cough mean mild — encourage coughing, observe closely. No speech, a silent or ineffective cough, hands to the throat and cyanosis mean severe — act immediately.",
      },
      {
        topic: "Choking",
        front: "The adult sequence for severe choking?",
        back: "Five back blows (patient leaned forward) → five abdominal thrusts (above the navel, inward and upward) → alternate five-and-five, checking the mouth between sets. Unconscious: CPR starting with compressions; remove only what is visible.",
      },
      {
        topic: "Choking",
        front: "What changes in the infant under one year?",
        back: "Five back blows with the head supported and lowered over the forearm, then five chest thrusts — two fingers on the lower sternum. Abdominal thrusts and blind finger sweeps are never performed on infants.",
      },
      {
        topic: "Choking",
        front: "Why does a successful choking rescue still require hospital review?",
        back: "Abdominal thrusts can quietly injure abdominal organs, and fragments may remain in the airway to cause later wheeze, collapse or infection — the rescue ends with a review, not a handshake.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Basic Emergency Care: approach to the acutely ill and injured",
        note: "Airway and choking management for frontline providers; verify current edition.",
      },
      {
        organization: "Ghana National Ambulance Service",
        title: "First responder training resources",
        note: "National emergency line 112; verify current materials.",
      },
      {
        organization: "World Health Organization / UNICEF",
        title: "Emergency Triage Assessment and Treatment (ETAT) course materials",
        note: "Verify the current ETAT adaptation used in Ghana.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Airway, Breathing & Resuscitation",
    lessonTitle: "Acute Coronary Syndromes & Stroke Response",
    description:
      "The two time-critical emergencies of adults — the pathways, the minutes that are myocardium and brain, and the nurse who defends the clock.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Recognise acute coronary syndromes — typical and atypical — and initiate the response: ECG within ten minutes, aspirin per protocol, monitored transfer.",
      "Apply the stroke response: FAST recognition, glucose check, CT to separate clot from bleed, and time-critical referral.",
      "Explain the time-is-muscle, time-is-brain logic, and document the two timestamps that govern every downstream decision.",
    ],
    tags: ["acs", "stroke", "chest pain", "fast"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Two emergencies own the adult time-clock: the heart starving of blood and the brain starving of blood. Both are common in Ghana — hypertension and diabetes quietly load the gun for years — and both reward the same scarce resource: **minutes**. In a myocardial infarction, dying heart muscle is counted in minutes; in stroke, dying brain tissue is counted the same way, and the treatments that save both run in narrow windows measured from the moment symptoms began.\n\nThe district nurse cannot perform angioplasty or thrombolysis. What the district nurse does — the history, the ECG, the aspirin, the clock, the calm, the referral — decides whether any of those things can still succeed. This is the lesson of being the first ten minutes of a pathway that ends in a regional hospital.",
      },
      {
        type: "text",
        title: "Acute coronary syndromes — the spectrum and the response",
        body: "A heart attack begins when a plaque cracks inside a coronary artery and a clot grows over the crack. The spectrum — **unstable angina, NSTEMI, STEMI** — matters less to your first response than the recognition. The classic story: **central chest pain or heaviness — a stone on the chest — lasting more than about fifteen minutes**, radiating to the left arm, jaw or back, with sweating, nausea, breathlessness, and the fear patients describe as 'something bad is happening'. Atypical presentations are the trap: **the diabetic, the elderly and many women** arrive with breathlessness, epigastric 'ulcer' pain, sweating alone, sudden fatigue or confusion — nearly painless events that get misfiled as gastritis and die at home.\n\nThe response, district-hospital standard: **an ECG within ten minutes of first contact** — painless, cheap, and the only thing that separates the ST-elevation of a STEMI from everything else; **aspirin chewed per protocol** unless truly contraindicated (ask about allergy and bleeding); **oxygen only if saturations are low**, because routine oxygen adds nothing and may harm; nitrate per protocol with the pressure checked; IV access, continuous monitoring, troponin where available. Then the decision: STEMI needs **reperfusion — angioplasty at a capable centre, or thrombolysis within the golden hours where transfer is impossible** — which means the referral phone call happens now, ECG described and SBAR given, to the receiving hospital. While you wait: watch for the arrhythmias and the arrest that complicate the first hours — the defibrillator lives beside this patient. And afterwards the counselling begins, because this is a disease of decades and the admission is only its opening scene.",
      },
      {
        type: "text",
        title: "Stroke — the brain's clock",
        body: "Most strokes are **ischaemic** — a clot plugging a brain artery; the rest are **haemorrhagic**, a vessel burst into the tissue. The two look identical at the bedside and demand opposite treatments, which is why **imaging decides** before any clot-dissolving drug is drawn: a thrombolytic helps the ischaemic stroke and is catastrophic in a bleed. The recognition tool is **FAST**: a **F**ace that droops on one side when asked to smile; **A**rms that drift or fall when raised; **S**peech turned slurred, jumbled or absent; **T**ime — when symptoms began, or the last moment the person was seen well, because the clot-dissolving window is measured from there, commonly **up to four and a half hours**.\n\nNursing the first hour: check **glucose** — hypoglycaemia is the great stroke mimic, and a sugar fix cures a 'stroke' in minutes; **nil by mouth** until swallow is tested, because stroke patients aspirate silently; head of bed at about thirty degrees, head midline; careful IV access; blood pressure managed per protocol, never reflexly crushed; the onset time documented in red; a calm, quiet space; and the referral call to the CT-capable centre with the FAST findings, glucose, timings and any anticoagulants the patient takes — the answer changes everything. Family education closes the loop: every household should know FAST the way it knows fire, because the patient who arrives inside the window is the patient somebody recognised early. In Ghana, where hypertension strikes young, 'it cannot be a stroke, he is only fifty-two' is a sentence audited in every stroke registry.",
      },
      {
        type: "table",
        title: "The two clocks, side by side",
        body: "| | Acute coronary syndrome | Stroke |\n|---|---|---|\n| The starving organ | Heart muscle | Brain tissue |\n| Recognition | Central pressure-like pain over 15 minutes, sweating; atypical in diabetics, the elderly, women | FAST — facial droop, arm drift, speech change; note the onset or last-seen-well time |\n| First tools | ECG within 10 minutes; aspirin chewed per protocol; monitoring | Glucose check; CT scan; nil by mouth pending the swallow test |\n| The window | Reperfusion within the golden hours — thrombolysis or transfer for angioplasty | Thrombolysis commonly within 4.5 hours of last seen well |\n| The nurse's crown jewel | The 10-minute ECG and the early referral call | The documented onset time — every eligibility decision hangs on it |\n| The trap | The 'gastritis' that was an infarct | The hypoglycaemia mimic; the late arrival |\n\nBoth pathways run on one currency: time. Chart it, protect it, and hand it over with the patient.",
      },
      {
        type: "clinical_pearl",
        body: "Two timestamps save more lives than any drug you will ever give: the **first ECG time** and the **last-seen-well time**. Write them large, hand them over loudly, and let no one move a stroke patient without them. And in the diabetic, the heart shouts quietly — epigastric discomfort with sweat deserves an ECG, not an antacid.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old teacher with known diabetes arrives at the OPD at 08:20, sweating and gripping his epigastrium: 'my ulcer has returned'. The pain is 6 out of 10, he feels sick, and he looks grey. Meanwhile, in the corner, an elderly woman's face has begun to droop — her daughter says the smile 'went crooked' while she ate at 06:40, and her right arm will not hold the cup.\n\nTwo clocks are running. What do you do for each?\n\nAnswer: The teacher is a diabetic with a probable atypical infarction — epigastric pain, sweat and grey in a known diabetic is a cardiac story until an ECG says otherwise: ECG within ten minutes, aspirin chewed per protocol once true allergy is excluded, monitoring, IV access, and the referral call with the ECG to the reperfusion-capable centre, defibrillator at hand. The woman is FAST-positive with a last-seen-well of 06:40 — under two hours ago: glucose checked first (the mimic), nil by mouth, head midline at thirty degrees, calm — the onset time written large — and immediate transfer to the CT-capable hospital, with her anticoagulant history hunted for the lysis conversation. Both patients needed the same thing from you: recognition, the first tools, and the defence of the clock. The regional hospital may hold the miracles; the miracles belong only to patients who arrive inside the window you kept open.",
      },
      {
        type: "memory_trick",
        body: "For the brain: **FAST** — Face, Arms, Speech, Time. For the heart: **TEN** — The ECG Now, within ten minutes of arrival. And the drum under both: time is muscle, time is brain — one clock per patient, written in red.",
      },
      {
        type: "summary",
        body: "- ACS: central pressure-like pain over 15 minutes with sweating — but diabetics, the elderly and many women present atypically (breathlessness, epigastric pain, collapse). ECG within 10 minutes, aspirin chewed per protocol, oxygen only if hypoxic, monitoring, early referral for reperfusion.\n- STEMI is ST elevation on the ECG; the golden hours decide thrombolysis or transfer — the referral call competes with everything else on your list.\n- Stroke: FAST; exclude the mimic with glucose; CT separates clot from bleed; thrombolysis commonly within 4.5 hours of last seen well.\n- Stroke nursing: nil by mouth until the swallow test, head midline at about 30 degrees, BP per protocol, onset time documented, urgent transfer to the CT-capable centre.\n- Two timestamps rule the chart: the first ECG and the last-seen-well — write them where nobody can miss them.",
      },
    ],
    questions: [
      {
        topic: "ACS & Stroke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A known diabetic presents with epigastric discomfort, sweating and nausea, calling it 'ulcer pain'. What is the correct interpretation?",
        options: [
          "Gastritis until proven otherwise — antacid and review in one hour",
          "Atypical acute coronary syndrome until excluded — ECG within ten minutes",
          "Anxiety — reassure and observe",
          "Malaria with gastric irritation — test and treat for malaria first",
        ],
        correctIndex: 1,
        explanation:
          "Diabetics, the elderly and many women have infarctions with little or no chest pain — epigastric discomfort with sweating and a grey look is a cardiac story until the ECG says otherwise. The antacid hour is the hour of myocardium lost.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "ACS & Stroke",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In suspected stroke, which piece of information most determines treatment eligibility?",
        options: [
          "The blood pressure at triage",
          "The patient's weight",
          "The temperature",
          "The time symptoms began — or the last time the person was seen well",
        ],
        correctIndex: 3,
        explanation:
          "Clot-dissolving therapy is governed by the clock — commonly up to four and a half hours from last seen well — so the onset story is the most valuable data anyone can collect at the bedside. Everything downstream is scheduled by it.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "ACS & Stroke",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Why must a CT scan precede thrombolysis in stroke?",
        options: [
          "To measure the infarct volume for research purposes",
          "Because the scanner calibrates the drug dose",
          "Because strokes are either clots or bleeds: thrombolysis helps the clot and is catastrophic if a bleed caused the symptoms",
          "To exclude migraine before any treatment",
        ],
        correctIndex: 2,
        explanation:
          "Ischaemic and haemorrhagic strokes look identical at the bedside and need opposite treatments — imaging tells them apart before the lytic is drawn. Giving a clot-buster into a bleed converts a survivable stroke into a disaster.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "ACS & Stroke",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does FAST stand for in stroke recognition?",
        options: [
          "Fever, Anaemia, Swelling, Tenderness",
          "Face drooping, Arm weakness, Speech difficulty, Time to call help",
          "Full history, Auscultation, Scan, Treatment",
          "Family history, Age, Smoking, Trauma",
        ],
        correctIndex: 1,
        explanation:
          "FAST is the recognition tool taught worldwide: facial droop, arm drift or weakness, speech change — and Time, the reminder that the clock started at symptom onset, not at arrival.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "ACS & Stroke",
        front: "Atypical ACS presentations — in whom, and how do they look?",
        back: "Diabetics, the elderly and many women: breathlessness, epigastric pain mistaken for 'ulcer', sweating, fatigue, confusion or collapse with little chest pain. Suspicion plus ECG within ten minutes.",
      },
      {
        topic: "ACS & Stroke",
        front: "Stroke bedside assessment: FAST plus the first checks.",
        back: "Face droop, arm drift, speech change, onset time (last seen well) — then check glucose to exclude the mimic, keep nil by mouth pending the swallow test, and transfer to the CT-capable centre.",
      },
      {
        topic: "ACS & Stroke",
        front: "Why 'time is muscle and time is brain'?",
        back: "Infarcting heart muscle and brain tissue die by the minute; reperfusion for STEMI and thrombolysis for ischaemic stroke (commonly within 4.5 hours of last seen well) exist only inside their windows — windows you defend with the documented clock.",
      },
      {
        topic: "ACS & Stroke",
        front: "First nursing actions in suspected ACS at district level?",
        back: "ECG within 10 minutes, aspirin chewed per protocol after the allergy check, oxygen only if hypoxic, IV access, continuous monitoring, the defibrillator at hand — and the early referral call with the ECG to the reperfusion-capable centre.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable Disease Interventions (WHO PEN)",
        note: "Chest pain and cerebrovascular pathways for first-referral facilities; verify current edition.",
      },
      {
        organization: "CDC",
        title: "Heart attack signs and F.A.S.T. stroke public education resources",
        note: "Public recognition campaigns; verify current pages on the CDC website.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standard Treatment Guidelines",
        note: "Cardiovascular and cerebrovascular emergencies in district practice; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Organising Emergency Care",
    lessonTitle: "Triage: Sorting the Waiting Room",
    description:
      "Who is seen first and why — the ETAT minute, the colours, and the running of a waiting room whose story keeps changing.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Explain triage as clinical sorting by urgency — not arrival order, wealth or loudness — and the WHO ETAT colour system.",
      "Apply the rapid assessment — airway, breathing, circulation, disability — in about a minute per patient.",
      "Run the waiting room safely: re-triage cycles, documentation, honest communication, and the instinct that promotes quiet patients.",
    ],
    tags: ["triage", "priorities", "etat", "emergency"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "07:45 at a district hospital OPD: forty people in the queue, a man quietly clutching his chest, a child breathing fast on her mother's back, a teenager with a gashed hand from a workshop machine, a grandmother here for a two-month refill. Seen by arrival order, the queue is fair. Seen by urgency, the queue is a lottery — and the man with the chest pain is losing it.\n\n**Triage** — from the French *trier*, to sort — is the discipline that replaces the lottery with clinical judgement: a fast, structured sorting of every arriving patient by how urgently they need care. WHO's **ETAT** (Emergency Triage Assessment and Treatment) taught it for children; the same architecture runs in emergency rooms for all ages. This lesson teaches the minute, the colours, and the running of a room whose story keeps changing.",
      },
      {
        type: "text",
        title: "The minute — assessing an arrival",
        body: "Sorting must be fast to be honest, so it is structured. For each arrival, within about a minute, run **ABCD** — the ETAT survey: **A**irway — is it obstructed, noisy, or silent when it should not be? **B**reathing — count the rate and look for distress: cyanosis, severe recession, a silent chest in an asthmatic. **C**irculation — pulse, capillary refill, pallor, **severe bleeding**, the cold clammy skin of shock. **D**isability — level of consciousness (AVPU: alert, responds to voice, responds to pain, unresponsive), convulsions, and in children the danger signs parents whisper: cannot drink, cannot stand, vomits everything. Add the thermometer's question and the pain question — and decide the colour.\n\n**RED — emergency signs** — an obstructed airway, severe respiratory distress, cyanosis, signs of shock, a convulsing or comatose patient, severe active bleeding, chest pain with sweating: treatment begins immediately, the clinician is called now, monitoring is continuous. **YELLOW — priority signs** — the front-of-queue patients who will not die in the next hour but may in the next day: a fast-breathing child without emergency signs, moderate dehydration, a fever lasting five days or more, a febrile infant under two months, severe wasting, known sickle-cell disease in crisis, uncontrolled pain, an ingestion or overdose. **GREEN — non-urgent** — the refill, the mild illness, the stable injury: the ordinary queue, held safe by the patrol.",
      },
      {
        type: "table",
        title: "The colours — who and what",
        body: "| Colour | Meaning | Response | Examples at the door |\n|---|---|---|---|\n| RED | Emergency signs — a life-threat now | Immediate care; clinician called now; continuous monitoring | Obstructed airway, severe respiratory distress, cyanosis, shock, severe bleeding, convulsions or coma, chest pain with sweating |\n| YELLOW | Priority signs — danger within hours | Seen next, ahead of the queue; observed while waiting | Fast breathing without emergency signs, moderate dehydration, febrile infant under 2 months, sickle-cell crisis, uncontrolled pain, ingestion or overdose, severe wasting |\n| GREEN | Non-urgent | The ordinary queue; re-checked every 30–60 minutes | Mild illness, chronic-disease refill, stable minor injuries, wound review |\n\nIn mass-casualty disasters the colour code changes its ethics — that is the next lesson. The triage nurse also holds the unwritten fifth category: anyone whose look, smell or story makes the spine prickle — the colour of instinct is red until examined.",
      },
      {
        type: "text",
        title: "Running the room",
        body: "Triage is not one decision at the door; it is a patrol. **Re-triage the whole waiting room every thirty to sixty minutes**, because queues change: the child who was fast-breathing and calm becomes the child who is quiet and limp; the 'gastritis' becomes a grey, sweating silence. Walk the room, eyes on the breathing of every patient, hands on the drowsy ones — the quiet ones are the dangerous ones. Document the category and the time for every sort; the OPD register is the audit trail that shows your hospital what its emergencies really are.\n\nTalk to the room as well. The man whose refill waited an hour behind a chest pain deserves the honest sentence: 'that patient was seen first because his heart was failing; you are next for the malaria review.' The waiting room that understands triage defends it; the one kept in the dark becomes a crowd when the wait outruns patience. And protect the triage desk itself — drunk, violent or distressed relatives may need security, and your safety is a condition of everyone else's.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Monday morning queue; you are the triage nurse. Four arrivals within five minutes: a 55-year-old man, pale and sweaty, gripping his chest since 07:00; a two-year-old on her mother's back, breathing fast with a 'hot body', but drinking and alert; a young man with a bleeding hand from a workshop machine, cloth wrapped tight, walking and talking; and a 70-year-old here for a hypertension refill who mentions, casually, that her left arm 'feels heavy today'.\n\nSort them — and say why.\n\nAnswer: The chest-pain man — **RED**: pain, pallor, sweat, probable acute coronary syndrome; clinician now, ECG within ten minutes, monitored while waiting for nobody. The 'casual' grandmother — urgent as well, because arm heaviness in a known hypertensive is a possible atypical stroke or angina: she goes to immediate assessment, not the refill queue — the casualness is the trap. The child — **YELLOW**: fever with fast breathing but drinking and alert, no emergency signs; front of the paediatric queue, assessed and treated per ETAT and national guidance, watched closely while waiting. The laceration — first-minute care is triage: elevate, re-wrap firmly, confirm the pressure stops the ooze and the fingertip pulses remain; then **GREEN** once controlled, with one more question asked — dirty wound, last tetanus years ago, so today is the vaccination conversation. The lesson of the morning: the refill queue was not the emergency; the quietest symptom in it nearly was.",
      },
      {
        type: "quiz_prompt",
        title: "The quiet child",
        body: "A mother sits in the corner with an 18-month-old who has been febrile since yesterday. He is not crying — he is asleep on her chest, breathing fast, and she says 'at least he is finally resting.' What does triage say about 'quiet' — and what do you do?\n\nAnswer: Quiet is not a good sign in a sick child — it is often exhaustion. A febrile child breathing fast while 'asleep' may be hypoxic or sliding toward shock; the drink test (can he wake, drink and stay roused?) and the counted respiratory rate decide the colour. Walk to the corner now, wake him gently, count a full minute of breathing, check AVPU and pallor — and the odds are this child moves to YELLOW at least, sometimes RED. 'Finally resting' is the sentence triage exists to interrupt.",
      },
      {
        type: "memory_trick",
        body: "**ABCD at the door, every arrival, one minute: A**irway, **B**reathing, **C**irculation, **D**isability — then colour the patient: **Red** now, **Yellow** next, **Green** the queue. And patrol — because the room that was safe at 8 am is a different room by 9.",
      },
      {
        type: "summary",
        body: "- Triage sorts by clinical urgency — not arrival order, loudness, wealth or age; ETAT taught it for children, and emergency rooms run it for everyone.\n- The minute: ABCD — airway, breathing (counted), circulation (perfusion, bleeding), disability (AVPU, convulsions) — plus temperature and pain.\n- RED = emergency signs, immediate care; YELLOW = priority signs, front of the queue; GREEN = non-urgent — with instinct allowed to promote anyone.\n- Re-triage the room every 30–60 minutes: the quiet patient is the dangerous patient.\n- Document category and time; explain the logic honestly to the waiting room; keep the triage desk safe.",
      },
    ],
    questions: [
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does triage actually sort patients by?",
        options: [
          "Clinical urgency — how quickly each patient needs care to survive",
          "Arrival order and ticket numbers",
          "Whoever paid first",
          "The loudest complaints, to keep the peace",
        ],
        correctIndex: 0,
        explanation:
          "Triage replaces queue fairness with survival fairness: the chest pain before the refill, the silent child before the shouting one. Arrival order is only the tiebreaker within a colour — and payment was never a clinical sign.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the ETAT rapid survey of an arrival cover?",
        options: [
          "A full history and complete physical examination",
          "Airway, breathing, circulation, disability — the emergency-sign check, in about a minute",
          "Laboratory results and a chest X-ray",
          "A financial and insurance assessment",
        ],
        correctIndex: 1,
        explanation:
          "The ETAT minute screens the systems that kill fastest — airway, breathing, circulation and consciousness — enough to colour the patient; the full work-up belongs to the clinical encounter that follows. It is fast because it must be: sorting forty arrivals with full examinations is a queue by another name.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Among these waiting-room patients, who goes RED — immediate care?",
        options: [
          "An adult with a two-day mild cough",
          "A teenager needing a dressing change",
          "A man here for a refill whose blood pressure was fine last month",
          "A pale, sweating man clutching his chest for the past hour",
        ],
        correctIndex: 3,
        explanation:
          "Chest pain with pallor and sweat is a probable acute coronary syndrome — an emergency sign: clinician now, ECG within ten minutes. Coughs and dressings wait; and the refill stays safe only because the patrol keeps checking it.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Triage",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must the waiting room be re-triaged every 30–60 minutes?",
        options: [
          "To reissue tickets in a fresh order",
          "Because policy requires paperwork each hour",
          "Because waiting patients change: quiet deterioration — the sleepy child, the 'resting' patient, the grey silence — appears with time, and colours must follow the physiology",
          "To give latecomers a fair chance to be seen early",
        ],
        correctIndex: 2,
        explanation:
          "The room you sorted at 8 am is a different room by 9: children drift, bleeders re-bleed, 'mild' becomes 'grey'. The patrol — walking, watching every patient's breathing, waking the quiet ones — is the difference between triage as a moment and triage as a system.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Triage",
        front: "The ETAT rapid survey — which four systems, in what time?",
        back: "Airway (obstructed? noisy?), Breathing (counted rate, distress, cyanosis), Circulation (perfusion, severe bleeding), Disability (AVPU, convulsions) — in about one minute per arrival, plus temperature and pain.",
      },
      {
        topic: "Triage",
        front: "Name the three triage colours and their response.",
        back: "RED — emergency signs: immediate care, clinician called now, continuous monitoring. YELLOW — priority signs: seen next, ahead of the queue, observed while waiting. GREEN — non-urgent: the queue — every colour re-checked by the 30–60-minute patrol.",
      },
      {
        topic: "Triage",
        front: "Why is the quiet febrile child a triage red flag?",
        back: "Quiet in a sick child often means exhaustion, hypoxia or early shock — not rest. The triage nurse wakes, rouses and counts; 'finally resting' is the sentence triage exists to interrupt.",
      },
      {
        topic: "Triage",
        front: "What honest sentence keeps a waiting room calm when someone is seen first?",
        back: "Explain the logic simply — 'that patient was seen first because his heart is failing; you are next for your malaria review.' Understanding converts an angry queue into a partner in the sorting.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / UNICEF",
        title: "Emergency Triage Assessment and Treatment (ETAT) course materials",
        note: "Verify the current ETAT adaptation used in Ghana.",
      },
      {
        organization: "Ghana Health Service",
        title: "Outpatient and emergency care protocols",
        note: "District-level triage practice; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Organising Emergency Care",
    lessonTitle: "Emergency Preparedness & Mass Casualties",
    description:
      "The crash, the fire, the bus overturning — the ethics and structures of disaster triage, and the nurse who was ready before the sirens.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Define a mass casualty incident and explain the ethical shift to the greatest good for the greatest number.",
      "Apply disaster triage categories — immediate, delayed, minimal, expectant, deceased — and re-assess them as resources change.",
      "Describe the hospital incident command structure, the nurse's roles within it, and personal readiness including the Ghanaian notification chain.",
    ],
    tags: ["disaster", "preparedness", "mass casualty", "command"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana has lived the mass casualty: the stadium disaster of May 9, 2001, that killed over a hundred; the tanker fires — Atomic Junction in 2017, Apiate in 2022 — with burn casualties counted in the dozens; the trotro and bus crashes on our highways every year; the floods that arrive with the rains and the harmattan fires that follow the dryness.\n\nA **mass casualty incident (MCI)** is any event whose casualties overwhelm what the facility can normally manage — and the difference between a hospital that copes and a hospital that collapses is not luck or equipment. It is whether the plan was written, drilled and believed before the sirens. This lesson is the plan, the ethics, and the nurse's place in both.",
      },
      {
        type: "text",
        title: "What changes in a mass casualty",
        body: "Everyday triage and disaster triage obey different moral arithmetic. Every day, the **sickest comes first**, whatever the cost. In an MCI, **resources are the fixed pie** — three nurses, one doctor, four emergency beds, two ventilators, forty patients — and the ethics invert: **the greatest good for the greatest number** means treating first those whose lives can be saved by what you actually have. The categories follow it. **RED — immediate**: life-threatening injuries that treatment *now* makes survivable — an obstructed airway, a compressible arterial bleed, a tension pneumothorax. **YELLOW — delayed**: patients needing theatre and serious care who remain stable for hours — most closed fractures, many penetrating injuries without active shock. **GREEN — minimal**: the walking wounded, treated and even recruited as helpers. **Expectant (grey or blue)**: injuries unsurvivable with the resources present — comfort and dignity become the treatment, and the category is re-assessed as resources arrive. **BLACK — deceased**: confirmed dead, moved to the designated area, never through the treatment floor.\n\nTwo laws hold the system honest. Categories are **provisional** — as staff, blood and ambulances arrive, yesterday's expectant patient may become salvageable, and today's walking wounded can quietly bleed into tomorrow's shock. And the decision is **clinical, not personal**: the triage officer with the best training stands at the door doing the sorting — which means the most experienced hands may treat the *fewest* patients, and that is correct, not cruel. Doing the greatest good is the hardest discipline in this course; it is also the discipline that saves the most people.",
      },
      {
        type: "table",
        title: "Everyday triage versus disaster triage",
        body: "| | Everyday emergency | Mass casualty incident (MCI) |\n|---|---|---|\n| The arithmetic | Sickest first, cost no object | Greatest good for the greatest number — resources are finite |\n| RED | Immediate, full effort | Immediate: survivable and treatable now — airway, compressible bleed, tension pneumothorax |\n| YELLOW | Next in the urgent queue | Delayed: stable for hours despite serious injury |\n| GREEN | The queue | Minimal: walking wounded — treated, tagged, sometimes drafted as helpers |\n| Further categories | — | Expectant (comfort-focused, re-assessed) and deceased (designated area) |\n| The clock | Continuous treatment | Continuous re-triage — categories move as resources move |\n| The record | Full notes | Tag on the patient, a minimal log — the tracking team fills the gap later |\n\nThe colour words are the same; the meanings are not. The best-prepared teams say the difference out loud in drills, so it does not have to be discovered mid-disaster.",
      },
      {
        type: "text",
        title: "Command — and the nurse's place in it",
        body: "Chaos is managed by structure. The hospital's disaster plan puts one **incident commander** at the top — usually the senior administrator or clinician on site — with defined roles around them: **triage** at the entrance, **treatment areas** divided by colour, **transport and ambulance loading**, **morgue and family reception**, **security** holding the perimeter, and **communications** — one radio channel, one runner system, one spokesperson, so the plan does not drown in noise. Nurses carry the spine of it: the triage officer is very often a senior nurse; the treatment areas are staffed by nurses; and the **patient tracking log** — number, name if known, tag colour, destination — is a nursing discipline that reunites families days later.\n\nThe personal half of the plan matters as much. Know where your facility's disaster plan lives and what your own role says. Know the stock — where the fluids, dressings, blankets and generator live, and who holds their keys. Have your **family's own emergency plan** — a nurse whose family is safe and reachable can stay at her post, and that is a hospital asset, not a private luxury. The Ghanaian chain: **call 112 for the Ghana National Ambulance Service**, and the **National Disaster Management Organisation (NADMO)** is notified through your facility's agreed channel. After every event — real or drill — comes the **after-action review**: what worked, what failed, what changes before the next siren. A plan that survives contact is a plan that was drilled.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A head-on trotro crash on the main road. Your district hospital — four emergency beds, one doctor on call, three nurses on shift — receives word that at least fourteen casualties will arrive within twenty minutes, some in private cars.\n\nWhat happens in those twenty minutes?\n\nAnswer: Activate the disaster plan: the call to the doctor, the administrator and — through the agreed channel — GNAS on 112 and NADMO; the off-duty call-out list activated; runners clearing the emergency room and the nearby ward spaces into RED, YELLOW and GREEN areas; fluids, dressings and blankets pulled to the triage point; security warned to hold the perimeter, because the public arrives with the ambulances, bringing both love and noise. At the door: the most senior nurse becomes the triage officer, tags on, colours assigned and re-assessed as the flow continues; every casualty gets a number, name if known, colour and destination in one log; the walking wounded go GREEN, treated and recruited as carriers and interpreters; an expectant area is designated with one nurse whose assignment is comfort — written into the plan so nobody has to improvise it in tears. The doctor rotates among the RED casualties; the stable, referrable patients are staged for GNAS transfer to the regional hospital; the morgue pathway is prepared. And the after-action review is booked before the last casualty leaves — because the next trotro is already somewhere on the road.",
      },
      {
        type: "clinical_pearl",
        body: "In a disaster, the best-trained hands go to the door, not to the loudest patient — the triage officer saves more lives than any single rescuer. And the walking wounded are the most dangerous category of all: GREEN today can be the silent bleed of tomorrow. Tag, log, and keep looking.",
      },
      {
        type: "memory_trick",
        body: "Readiness is **S-T-A-N-D**: **S**tock (where it lives, who holds the keys), **T**eam (call-out list and your family's plan), **A**reas (RED, YELLOW, GREEN mapped in advance), **N**otify (112 for GNAS, NADMO through the channel), **D**rill and debrief — a plan undrilled is a wish. And the ethics in one line: the greatest good for the greatest number, re-triaged every time the resources move.",
      },
      {
        type: "summary",
        body: "- MCI = casualties overwhelm normal capacity; Ghana's history makes the lesson practical, not theoretical.\n- Disaster ethics: the greatest good for the greatest number — RED (survivable, treatable now), YELLOW (stable for hours), GREEN (walking wounded), expectant (comfort, dignity, re-assessed), deceased (designated area).\n- Categories are clinical and provisional: re-triage as resources change — GREEN patients still bleed.\n- Structure: incident commander, triage at the door (often a senior nurse), colour areas, tracking log, security, one communication channel; call 112 (GNAS), notify NADMO.\n- Personal readiness is professional: know the plan, the stock and your role — and your family's own plan. Then drill, review, revise.",
      },
    ],
    questions: [
      {
        topic: "Mass Casualties",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What ethical principle governs triage during a mass casualty incident?",
        options: [
          "First come, first treated",
          "The sickest patient is treated first, whatever the cost, as on every ordinary day",
          "Patients with the loudest relatives receive priority",
          "The greatest good for the greatest number — resources go first to the salvageable patients that available care can save now",
        ],
        correctIndex: 3,
        explanation:
          "When casualties overwhelm resources, everyday sickest-first ethics would consume everything on the unsalvageable while salvageable patients wait and die. The MCI principle — greatest good for the greatest number — is hard, clinical, and re-assessed as resources change. It is not abandonment; it is arithmetic with compassion.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Mass Casualties",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the expectant (grey or blue) category mean in disaster triage?",
        options: [
          "Patients expected to complain most, kept for last",
          "Patients expected to recover fully without treatment",
          "Patients whose injuries are unlikely to be survivable with the resources available — care focuses on comfort and dignity, with re-assessment if resources improve",
          "Patients expected by relatives, held in reception",
        ],
        correctIndex: 2,
        explanation:
          "The expectant category is the hardest label in disaster medicine: injuries that available resources cannot save, so comfort and dignity become the treatment — assigned in the plan, not improvised in tears, and re-assessed whenever staff or supplies arrive.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Mass Casualties",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A district hospital receives early warning of multiple casualties from a highway crash. What is among the FIRST actions?",
        options: [
          "Activate the disaster plan — alert the call-out list, call GNAS on 112 and the notification chain, and begin clearing and mapping the treatment areas",
          "Lock the gates and continue routine clinic, since the casualties may not arrive",
          "Wait for the first ambulance, then decide the scale",
          "Discharge all current inpatients immediately to create empty beds",
        ],
        correctIndex: 0,
        explanation:
          "The twenty minutes before the ambulances are worth more than the two hours after them: plan activation, staff recall, area preparation and notification — 112 for the ambulance service, NADMO through the agreed channel — convert chaos into command. Waiting for scale, or discharging patients into the street, are the classic false economies.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Mass Casualties",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During an MCI, why are the walking wounded (GREEN) still watched carefully?",
        options: [
          "They are assigned to guard the perimeter instead of being treated",
          "Their category is provisional: a quiet internal bleed can turn a walking patient into a shocked RED casualty hours later — tags are re-checked on a cycle",
          "They receive no treatment at all during an MCI",
          "They are always sent home on the first available transport",
        ],
        correctIndex: 1,
        explanation:
          "The walking wounded are the dangerous category: stable-looking patients with splenic or pelvic injuries drift into shock quietly. Tags are provisional; the re-triage cycle — and the tracking log — catch the drift before the collapse does.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Mass Casualties",
        front: "Define a mass casualty incident.",
        back: "Any event whose casualties exceed what the facility can manage with normal staffing and resources — a full waiting room is workload; an MCI is a different ethical and operational world.",
      },
      {
        topic: "Mass Casualties",
        front: "The disaster triage categories and their meanings.",
        back: "RED — immediate: survivable, treatable now (airway, compressible bleed, tension pneumothorax). YELLOW — delayed: stable for hours. GREEN — minimal: walking wounded. Expectant — unsurvivable with available resources: comfort, dignity, re-assessed. BLACK — deceased, designated area.",
      },
      {
        topic: "Mass Casualties",
        front: "How does disaster ethics differ from everyday triage ethics?",
        back: "Every day: sickest first, cost unlimited. MCI: the greatest good for the greatest number — finite resources go where they save the most lives, and categories move as resources move.",
      },
      {
        topic: "Mass Casualties",
        front: "The nurse's personal readiness before any disaster?",
        back: "Know the plan and your role in it, the stock locations and key-holders, the call-out list — and hold your own family's emergency plan: a nurse whose family is safe can stay at the post. Call 112 for GNAS; NADMO is notified through the facility channel.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Hospital emergency preparedness and mass casualty management guidance",
        note: "WHO emergency preparedness and response resources; verify current edition.",
      },
      {
        organization: "National Disaster Management Organisation (NADMO)",
        title: "Disaster response coordination in Ghana",
        note: "National disaster coordination body; verify current structures and contacts.",
      },
      {
        organization: "Ghana National Ambulance Service",
        title: "National emergency medical line 112 — training and coordination resources",
        note: "Verify current materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Hospital disaster preparedness guidance",
        note: "Facility-level planning; verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "critical-care-nursing",
    moduleTitle: "Organising Emergency Care",
    lessonTitle: "After the Emergency: The Family & the Team",
    description:
      "Breaking bad news with structure and warmth, bereavement care that honours Ghanaian families, and the debrief that keeps the team standing.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Structure difficult conversations with SPIKES — setting, perception, invitation, knowledge, empathy, strategy.",
      "Apply culturally humble bereavement care: plain words, viewing and time, rites asked about, documentation explained, follow-up arranged.",
      "Apply post-event team care: the hot debrief, no-blame incident reporting, and recognising lasting distress in yourself and colleagues.",
    ],
    tags: ["family", "bereavement", "communication", "debriefing"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The resuscitation ends. For the team, the emergency is over; for the family standing in the corridor, it is just beginning — and the difference between a family that grieves well and a family that breaks is very often the nurse standing in front of them.\n\nThis closing lesson of the course is about the two groups who were hit by the same event and are left standing when the adrenaline drains: the family — how bad news is broken, how death is announced, how grief is accompanied with cultural humility — and the team itself, how a shift that hurt is unpacked so that it does not become the wound that never closes.",
      },
      {
        type: "text",
        title: "Breaking bad news — SPIKES",
        body: "Bad news is a procedure, and like any procedure it has steps — the widely taught **SPIKES** sequence.\n\n**S — Setting**: a private space, everyone seated, phones away, enough time — and the question that matters in a Ghanaian context: *who should be present?* Decision-making often flows through the family head or elders; ask early and include respectfully rather than circumvent. **P — Perception**: ask what they already understand — 'tell me what the doctors have said so far' — so you build on their truth, not your assumption. **I — Invitation**: how much do they want to know now, and what can wait? **K — Knowledge**: a warning shot first — 'I am sorry, I have difficult news' — then the news itself in **plain words, in short sentences, in the family's own language where possible**, with silence allowed to do its work. A frightened family hears one sentence in ten; say the essential one slowly, and say it again later. **E — Empathy**: name the feeling, do not argue with it, do not bury it in platitudes — and answer the question underneath the questions, which is usually guilt: did we bring her too late? **S — Strategy and Summary**: what happens next, what has been agreed, who they will hear from and when — one consistent voice across the days, not a parade of strangers updating in riddles. Check understanding with a gentle 'tell me what you have understood so far' — teach-back belongs in grief as much as in health education.",
      },
      {
        type: "text",
        title: "When the patient has died",
        body: "Death is communicated in the same architecture — SPIKES with a heavier K. Warn, then use the word: **'I am so sorry. He has died.'** Not 'he passed', not 'he is gone', not 'we lost him' — euphemisms a shocked listener can mishear as discharge or transfer, and false hope is the cruelest inheritance of a vague sentence.\n\nThen the accompaniment: **silence**, offered without discomfort; permission to **see the body**, prepared with dignity, with unhurried time in a private space; the practical, compassionate details — belongings listed and returned, the death certificate and burial documentation pathway explained one step at a time and written down, because grief remembers nothing. Ask about the **rites and customs** rather than assuming them — the pastor or imam, the family head, the arrangements that matter in this family's tradition; and where death is sudden, violent or unexplained, explain the medico-legal pathway gently and honestly, because it is law, and families fear it less when it is not a surprise. Memory-making has a place at every age — photographs, a lock of hair, the naming of a baby who died — offered, never imposed. And follow-up is part of the care: a call or visit in the weeks after tells the family that the person who died was a person, not a bed number. You do not need perfect words. You need honest ones, offered with warmth, repeated as often as it takes.",
      },
      {
        type: "text",
        title: "The team after the code",
        body: "The patient and the family were not the only people in the room. A resuscitation, a death, a bad shift land in the bodies of the staff who were there, and the profession's old culture of 'just carry on' is how yesterday's unprocessed event becomes next year's burned-out nurse.\n\nThe **hot debrief** is ten minutes, right after the event, wherever there is a corner — three questions only: *What went well? What would we change? Is anyone struggling?* No rank, no blame, no file: its purpose is decompression and learning, and teams that hold it function better the next time. The **formal review** comes later — the audit and the incident report, written in a **no-blame culture** that treats errors as system news rather than personal shame, with the documentation completed honestly, because the notes are the patient's last voice.\n\nThen watch yourself and each other across the weeks: the sleeplessness that stays, the intrusive images, the dread of a ward or a task. These are not weakness — they are the normal aftermath of abnormal events, and they answer to talking, to peer support, to counselling wherever your facility or the wider health system offers it, and to time. The nurse who looks after herself is not stealing anything from patients. She is maintaining the instrument the patients need.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The okada rider from the shock lesson dies at 02:10 despite everything. At 05:30 his wife, his mother and three men from the extended family arrive — loud, frightened, angry. A cousin has already said on the phone that 'nobody even called', which is not true. They are standing at the OPD entrance while the morning queue watches.\n\nWhat happens in the next twenty minutes?\n\nAnswer: Meet the anger without matching it — calm voices, no argument at the door. Move the family to the private room: everyone seated, water offered, phones set aside; ask for the family head or senior member, and if the family's first language differs, find the interpreter before the news, not after. Then SPIKES: perception — what did the cousin tell them? A warning shot — 'I am so sorry; I have very difficult news' — then the plain sentence: 'he died this morning. We tried everything, and he died.' Silence, held as long as it needs. The story afterwards, in small honest pieces: the crash, the bleeding, the transfusion, the moment his heart stopped — and the guilt question answered before it festers: nobody's delay brought him too late; his injuries were beyond what surgery could save — said plainly and kindly. Then the accompaniment: seeing the body together, prepared with dignity; the medico-legal steps of a sudden death explained in writing, one step at a time; the belongings listed; a contact name and number for the questions that come at midnight. One staff member stays assigned to the family all morning. And before the shift ends — the hot debrief, because the night team fought and lost at 02:10, and the ones who were there need the ten minutes that says: you did well, and this one was not yours to win.",
      },
      {
        type: "clinical_pearl",
        body: "Warn, then say the word. Silence is the space where grief breathes; euphemism is the space where false hope grows. And the sentence that helps most is rarely a sentence at all — it is the chair you pull up, the silence you can sit in, and the name of the person you promise will call them back.",
      },
      {
        type: "memory_trick",
        body: "**SPIKES: S**etting (private, seated, who should be present?), **P**erception (what do they already know?), **I**nvitation (how much now?), **K**nowledge (warn, then plain words), **E**mpathy (name the feeling), **S**trategy (what happens next — one consistent voice). And for the team: **the ten-minute debrief is part of the resuscitation, not an afterthought.**",
      },
      {
        type: "summary",
        body: "- Breaking bad news is a procedure: SPIKES — setting with the right elders present, perception, invitation, knowledge in plain language, empathy, strategy — with teach-back to check understanding.\n- In death: warn, then say 'died' — never euphemisms that mishear into false hope; allow silence, viewing and time; explain documentation and medico-legal steps in writing; offer memory-making and follow-up.\n- Work with the family's structure and faith — the family head, the pastor or imam, the customs — asked about, never assumed.\n- The team needs the hot debrief (ten minutes: what went well, what changes, is anyone struggling) and the no-blame incident culture; lasting distress is normal aftermath, not weakness.\n- The nurse who cares for herself is maintaining the instrument patients need.",
      },
    ],
    questions: [
      {
        topic: "Family & Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In SPIKES, what does the K step require of the news-giver?",
        options: [
          "Precise medical terminology, so the family respects the information",
          "Delaying the news until every relative has gathered, however long it takes",
          "A warning sentence, then the news in plain short words — in the family's own language where possible — with silence allowed",
          "A euphemism such as 'she passed on', to soften the impact",
        ],
        correctIndex: 2,
        explanation:
          "Knowledge lands when it is warned and then translated: 'I have difficult news' prepares the ear; plain short sentences deliver the truth; the family's language carries it; silence lets it arrive. Jargon distances, and euphemism — as the next question shows — creates its own casualties.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Family & Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are phrases like 'he passed' or 'we lost him' dangerous when telling a family about a death?",
        options: [
          "They are too medically technical for most families",
          "They can be misheard as discharge, transfer or a missing person — planting false hope, then deeper anger; the clear word 'died' leaves no room for misunderstanding",
          "They are only dangerous when translators are present",
          "They are actually the recommended form in professional guidelines",
        ],
        correctIndex: 0,
        explanation:
          "Euphemism is meant kindly and lands cruelly: shocked listeners genuinely mishear 'we lost him' as a search problem and 'passed' as a procedure. The plain word hurts once, honestly; the vague word hurts twice — once as hope, once as betrayal.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Family & Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the purpose of a hot debrief after a resuscitation?",
        options: [
          "To identify and reprimand whoever performed worst, for accountability",
          "Ten minutes of decompression and learning — what went well, what we would change, is anyone struggling — no blame, no rank, no file",
          "To complete the patient's notes as a group while memories are fresh",
          "To decide the staffing rota for the next similar emergency",
        ],
        correctIndex: 1,
        explanation:
          "The hot debrief treats the team as patients of the event: decompressing the adrenaline, capturing the learning while fresh, surfacing anyone struggling — with no blame and no rank. Documentation and rosters are real tasks that belong elsewhere; blame has no place in a learning debrief.",
        courseSlug: "critical-care-nursing",
      },
      {
        topic: "Family & Team",
        type: "CLINICAL_SCENARIO",
        difficulty: "Moderate",
        stem: "An angry, loud family arrives hours after their relative died in your hospital. What is the best first response?",
        options: [
          "Meet the volume with firm authority — a strong voice restores order",
          "Have security remove the loudest relatives immediately",
          "Explain the clinical details at the entrance so everyone hears at once",
          "Stay calm, move the family to a private room, seat them, identify the family head and an interpreter — then deliver the news with SPIKES",
        ],
        correctIndex: 3,
        explanation:
          "Anger at the door is grief wearing armour: it is lowered by calm, privacy, seating and inclusion — not by counter-volume or force. Clinical detail shouted across an entrance is neither SPIKES nor dignity. The sequence — room, seats, head, interpreter, then the plain truth — is how the same family becomes a partner in the hours ahead.",
        courseSlug: "critical-care-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Family & Team",
        front: "Name the six SPIKES steps.",
        back: "Setting (private, seated, the right people present); Perception (what do they already know?); Invitation (how much now?); Knowledge (warn, then plain words); Empathy (name the feeling); Strategy (next steps, one consistent voice).",
      },
      {
        topic: "Family & Team",
        front: "How should death be communicated, in one rule?",
        back: "Warn — 'I have difficult news' — then the plain word: 'he has died.' No euphemisms that mishear into false hope. Then silence, viewing, time, rites asked about, and documentation explained in writing.",
      },
      {
        topic: "Family & Team",
        front: "What is a hot debrief, and what are its three questions?",
        back: "Ten minutes straight after the event: What went well? What would we change? Is anyone struggling? No blame, no rank — decompression and learning before the team disperses.",
      },
      {
        topic: "Family & Team",
        front: "Why is the nurse's own recovery part of professional care?",
        back: "Unprocessed events become burnout, errors and exits from the profession; debriefs, peer support and counselling keep the instrument — the nurse — in working order. Self-care is patient care at one remove.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Professional obligations in communication and confidentiality; verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
        note: "Communication, teamwork and incident-reporting culture; verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality assurance and staff support guidance",
        note: "Incident reporting and staff welfare pathways; verify current materials.",
      },
    ],
  },
];
