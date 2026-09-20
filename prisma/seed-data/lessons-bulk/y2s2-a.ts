// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 2 — Batch A
// 19 lessons anchored to prisma/seed-data/anchors/y2s2-a.json
// (8 medical-surgical-nursing-2, 9 pathology-2, 2 pharmacology-2)
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Acute and Chronic Care",
    lessonTitle: "Common Acute Conditions: Sudden Illness on the Ward",
    description:
      "The acute pictures you will meet on every ward — fever, confusion, low sugar, dehydration — and the rapid, structured response that buys time.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the common acute presentations seen on wards, including fever, acute confusion, hypoglycaemia and dehydration.",
      "Explain the structured first-response sequence for a patient who suddenly deteriorates, including glucose and comparison with baseline.",
      "Apply a rapid assessment approach to a ward emergency and decide when to call for senior help.",
    ],
    tags: ["acute care", "deterioration", "assessment", "triage"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "An acute condition arrives fast. One minute your patient was chatting about her grandchild; the next she is confused, sweating or febrile. Between those two moments lies the work of this lesson — noticing quickly, assessing in order, and treating what kills first.\n\nYou do not need a diagnosis to begin. Acute care rewards a structured sweep — look, listen, check the glucose and the vitals, compare with what this patient was an hour ago. The diagnosis can follow; the rescuing starts now.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Common acute pictures cluster into a few families. **Fever**: treat the discomfort, test the cause — in Ghana, malaria RDT or film first, then hunt the source in chest, urine and wound. **Hypoglycaemia**: cold sweat, tremor, confusion or drowsiness in a patient on diabetes medicines or too ill to eat — check the glucose and treat at once. **Dehydration**: sunken eyes, dry mouth, skin that tents, dark scanty urine from vomiting, diarrhoea or poor intake. **Acute confusion** always has a physical cause — infection, hypoxia, low sugar, head injury, drugs — never simply old age.\n\nYour response runs like a ladder: ABC sweep (is she breathing, is she circulating?), then consciousness, glucose and full vitals — comparing with earlier recordings, because a change from baseline outranks any single number. Within the first two minutes, call for help: an emergency you handle alone is an emergency handled late.",
      },
      {
        type: "clinical_pearl",
        body: "In sudden illness, ask for the last set of observations and read them against the present. The woman whose pressure was 124/78 yesterday and is 96/60 tonight is more alarming than the one who runs low-normal every day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are on a night shift in a district hospital surgical ward. A 60-year-old man, two days after prostate surgery, suddenly becomes restless and confused, pulling at his drip. His skin is cold and damp, he cannot tell you where he is, and the night nurse says he was perfectly fine at 8 pm. His temperature is 37.1 C and his pulse is 102.\n\nWhat must you check within the next few minutes, and in what order?\n\nAnswer: Do the ABC sweep, confirm airway and breathing are safe, then check consciousness and blood glucose before anything else — acute confusion with cold, damp skin in a fasting post-operative patient is hypoglycaemia until excluded. Follow with vitals against the 8 pm chart and call the doctor. Treat a low sugar at once, then hunt for infection, hypoxia or blood loss.",
      },
      {
        type: "memory_trick",
        body: "For the causes of sudden confusion on a ward, remember **DIMS**: Drugs, Infection, Metabolic (low sugar, low oxygen) and Structural (head injury). When the lights go out upstairs, something in one of those four rooms is on fire.",
      },
      {
        type: "summary",
        body: "- Acute means sudden — start treating before you finish diagnosing.\n- The common ward emergencies: fever, hypoglycaemia, dehydration and acute confusion.\n- Respond in order: ABC, consciousness, glucose, vitals — compare with baseline and call for help early.\n- Acute confusion always has a physical cause — Drugs, Infection, Metabolic, Structural (DIMS).\n- In Ghana, test for malaria (RDT or film) before treating any fever.",
      },
    ],
    questions: [
      {
        topic: "Acute Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient on your ward becomes acutely confused at 2 am. Which assessment should happen first, before hunting for infection or injury?",
        options: [
          "Give a sedative so she does not harm herself",
          "Rapid ABC sweep with level of consciousness and blood glucose check",
          "Wait until morning rounds when the doctor is available",
          "Restrict fluids and observe quietly until a cause is found",
        ],
        correctIndex: 1,
        explanation:
          "Airway, breathing, consciousness and glucose are the fastest killers and the fastest fixes, so they come first in acute confusion. Sedation before assessment masks the cause, waiting delays rescue, and fluid restriction addresses nothing identified.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Fever Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on your ward spikes a fever of 38.9 C with chills. According to Ghanaian practice, what should guide treatment of this fever?",
        options: [
          "Start an antimalarial immediately — every fever in Ghana is malaria until excluded",
          "Give a broad antibiotic and reassess in 48 hours",
          "Test first (malaria RDT or film) and search for the infection source before specific treatment",
          "Give paracetamol only and take no further action",
        ],
        correctIndex: 2,
        explanation:
          "Ghanaian practice is test-first: not every fever is malaria, and treatment without testing drives drug pressure and missed diagnoses. Paracetamol may comfort the patient, but the cause must still be hunted.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Deterioration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation pattern most strongly suggests true deterioration rather than a stable patient's usual numbers?",
        options: [
          "A blood pressure of 96/60 tonight in a woman who charted 124/78 yesterday evening",
          "Pulse 88 today and 86 yesterday",
          "Temperature 37.0 C in a patient who has charted 36.8 C all week",
          "Respiratory rate 18, once, in a sleeping adult",
        ],
        correctIndex: 0,
        explanation:
          "A fall of nearly 30 mmHg systolic from the patient's own baseline is a real change that demands explanation. The other readings are trivial variations within normal limits.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Acute Conditions",
        front: "What does 'acute' mean in acute condition?",
        back: "Sudden onset, minutes to days — the patient who was well and now is not. It says nothing about severity: acute can be mild or life-threatening.",
      },
      {
        topic: "Acute Confusion",
        front: "Name the four families of cause for sudden ward confusion (the DIMS mnemonic).",
        back: "Drugs, Infection, Metabolic (hypoglycaemia, hypoxia) and Structural (head injury). Confusion always has a cause — never treat it as 'just madness'.",
      },
      {
        topic: "Hypoglycaemia",
        front: "How does hypoglycaemia typically show, and what is the immediate response?",
        back: "Cold damp skin, tremor, hunger, confusion or drowsiness. Check glucose and treat immediately — oral sugar if awake and swallowing, IV dextrose if not. Then find out why.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "WHO/ICRC course manual — verify current edition with your library.",
      },
      {
        organization: "WHO",
        title: "Malaria (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/malaria",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Check for the latest edition and your facility protocols.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Acute and Chronic Care",
    lessonTitle: "Chronic Conditions: Nursing for the Long Haul",
    description:
      "Diabetes, hypertension, sickle cell and their companions — how nursing keeps long-term illness from becoming a crisis, one routine at a time.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe what defines a chronic condition and the chronic diseases most commonly managed in Ghanaian facilities.",
      "Explain the nursing roles of education, adherence support, complication screening and routine review in chronic care.",
      "Apply counselling skills to support a patient who has stopped taking medicines because they feel well.",
    ],
    tags: ["chronic care", "hypertension", "diabetes", "self-management"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Chronic disease is a slow fire. It starts quietly — a pressure of 150/95 that hurts nothing, a glucose that only whispers — and it burns for years. Your job in chronic care is not one heroic rescue but thousands of small, steady interventions: education, monitoring, encouragement, review.\n\nIn Ghanaian clinics you will spend much of your career with hypertension, diabetes, sickle cell disease, asthma and epilepsy — conditions people live with, not die of in a day. How well they live depends on the partnership you build with them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The heart of chronic care is self-management — the patient does the daily work between your appointments. Hypertension is the classic silent disease: it damages vessels and kidneys for years while the person feels completely well, which is exactly why people stop tablets. Diabetes brings its own routines — diet, activity, foot care — and its emergencies, from hypoglycaemia to foot ulcers. Sickle cell disease demands hydration, trigger avoidance and prompt care of infection. For all of them, the nurse is teacher, monitor and coach in one.\n\nStructure the long haul with the three R's: **Routine** reviews (blood pressure, weight, urine, feet), **Refill** before the tablets run out — a stock-out becomes a stroke in six months — and **Review of complications** (vision, chest pain, swollen ankles, numb feet). Give every patient personal danger signs and a follow-up date they keep.",
      },
      {
        type: "clinical_pearl",
        body: "Adherence is rarely about knowledge alone. Ask 'what makes it hard to take your medicine?' — money, distance, side effects, forgetfulness — and you will find the real prescription.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 52-year-old trader attends the CHPS compound chronic clinic with a blood pressure of 162/98. She was started on tablets eight months ago but stopped after three months. Her reason: 'I felt fine, and the tablets finished, and the pharmacy in town was closed that week.' Her mother died of a stroke last year. She has no headache and feels completely normal.\n\nWhat is the danger in her story, and how will you counsel her today?\n\nAnswer: The danger is that hypertension's silence feels like safety — the same silence that preceded her mother's stroke. She felt fine because the disease does not announce itself while it damages vessels, kidneys and brain. Arrange restart per the prescriber, explain why she must continue even on well days, find an affordable refill pathway, agree a follow-up date, screen for complications, and give clear danger signs — severe headache, one-sided weakness, chest pain, blurred vision.",
      },
      {
        type: "memory_trick",
        body: "Chronic care runs on the three R's: **Routine** reviews, **Refill** before the tablets finish, and **Review** for complications. When any one R is missing, the slow fire finds oxygen.",
      },
      {
        type: "summary",
        body: "- Chronic disease is slow, silent and lifelong — nursing works through partnership, not single rescues.\n- The silent diseases (hypertension, early diabetes) still damage vessels, kidneys, eyes and brain.\n- Support self-management: diet, activity, foot care, glucose checks, hydration, trigger avoidance.\n- Run the three R's — Routine, Refill, Review of complications — at every visit.\n- Give every chronic patient personal danger signs and a follow-up date.",
      },
    ],
    questions: [
      {
        topic: "Hypertension Adherence",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must a patient with hypertension continue tablets even when feeling completely well?",
        options: [
          "The tablets prevent withdrawal symptoms when the pressure is normal",
          "Hypertension damages vessels and organs silently, so control protects the brain, heart and kidneys even when she feels well",
          "Stopping suddenly converts hypertension into an acute infection",
          "Tablets only work after at least two years of continuous use",
        ],
        correctIndex: 1,
        explanation:
          "Feeling well is hypertension's camouflage, not a cure. Continued control prevents stroke, heart failure and kidney disease; there are no withdrawal symptoms, and stopping does not cause infection.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Sickle Cell Disease",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A young woman with sickle cell disease asks how to reduce her painful crises. Which advice directly targets the mechanism?",
        options: [
          "Drink plenty of fluids and treat every infection early, even a small one",
          "Avoid all physical activity, including walking",
          "Take daily iron tablets to thicken the blood",
          "Eat only fruits to thin the blood",
        ],
        correctIndex: 0,
        explanation:
          "Dehydration and infection both increase sickling and sludging in small vessels — the commonest crisis triggers, and both largely preventable. Activity in moderation is encouraged; iron does not help unless deficient, and no diet dissolves sickled cells.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Chronic Care Review",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a chronic clinic review, which set of checks belongs to the 'Review for complications' of long-standing diabetes?",
        options: [
          "Height, weight and head circumference",
          "Blood group and rhesus typing",
          "Foot inspection, vision enquiry, urine protein check and cardiovascular enquiry",
          "Monthly skull X-rays",
        ],
        correctIndex: 2,
        explanation:
          "Diabetes quietly damages feet, eyes, kidneys and the heart, so the review covers all four. The other checks belong to different chapters of care.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Hypertension",
        front: "What makes hypertension the 'silent killer'?",
        back: "It causes no symptoms while damaging vessels, kidneys, eyes, brain and heart — so patients feel well and stop treatment just when protection matters most.",
      },
      {
        topic: "Chronic Care",
        front: "The three R's of chronic care?",
        back: "Routine reviews, Refill before medicines finish, Review for complications at every visit.",
      },
      {
        topic: "Sickle Cell Disease",
        front: "Why does sickle cell care emphasise fluids and early infection treatment?",
        back: "Dehydration and infection increase sickling and blockage of small vessels — both common triggers of painful crises, and both largely preventable.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Hypertension (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
      },
      {
        organization: "WHO",
        title: "Diabetes (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Acute and Chronic Care",
    lessonTitle: "The Patient with Several Conditions at Once",
    description:
      "When two or three diseases share one body, everything interacts. Learn to see the whole patient, not just today's complaint.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define multimorbidity and describe how coexisting conditions interact to worsen each other.",
      "Explain the risks of polypharmacy, including interactions and side effects that mimic new disease.",
      "Apply a whole-patient review approach to prioritise care for a patient with several chronic conditions.",
    ],
    tags: ["multimorbidity", "polypharmacy", "chronic care", "drug interactions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Textbook patients have one disease. Ward patients have three. The diabetic with hypertension and early kidney trouble, the mother with HIV and epilepsy, the grandfather with heart failure and arthritis — in real facilities, illnesses travel in groups.\n\nMultimorbidity — two or more long-term conditions in one person — changes the game: each disease can worsen another, each medicine can clash with another, and treating one problem can destabilise the rest. This lesson teaches you to see the whole patient, not the part shouting loudest.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Conditions feed each other. An infection raises a diabetic's glucose; poorly controlled glucose feeds infection in return. Pain keeps a patient awake; sleeplessness raises blood pressure. Kidney disease makes hypoglycaemia likelier because insulin is cleared more slowly. And medicines join the fight: NSAIDs like ibuprofen and diclofenac raise blood pressure, retain fluid and stress kidneys — dangerous company for a heart failure patient with sore joints.\n\nThen there is **polypharmacy** — the growing pill burden that brings interactions, side effects and prescribing that no one ever reviews. The skilled nurse keeps a complete, current list (herbal preparations and chemical-seller purchases included), checks each new symptom against that list first — many 'new diseases' are old drugs misbehaving — and prioritises with the team, treating the greatest immediate threat while protecting everything else.",
      },
      {
        type: "clinical_pearl",
        body: "Before labelling any new symptom a new disease, read the medicine list. In a patient taking five drugs, the culprit is often already on the chart.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 58-year-old woman attends your clinic with diabetes, heart failure and knee arthritis. For two weeks she has taken diclofenac daily for knee pain, bought from a chemical seller. Today her ankles are swollen, she is breathless lying flat, and her blood pressure is 158/94 — up from her usual 128/76. Her sugar is unchanged.\n\nWhich of her medicines is the likely troublemaker, and why?\n\nAnswer: The diclofenac. NSAIDs cause salt and water retention (worsening heart failure and swelling), raise blood pressure and reduce kidney blood flow — three separate attacks on a patient with a weak pump and a diabetic kidney. Report to the prescriber, stop the NSAID under their direction, plan safer pain relief (paracetamol first, plus heat and pacing), recheck kidneys and pressure, and teach her to give her full disease list to any prescriber or seller before accepting new drugs.",
      },
      {
        type: "memory_trick",
        body: "Review the complex patient with **PILL**: **P**roblems list (all of them), **I**nteractions (between diseases and between drugs), **L**ifestyle (what she can change), **L**ong-term plan (what the team reviews together). A PILL you can swallow at every visit.",
      },
      {
        type: "summary",
        body: "- Multimorbidity = two or more chronic conditions in one person — the rule, not the exception, in real practice.\n- Diseases interact: infection raises glucose, pain raises pressure, kidney disease prolongs drug action.\n- NSAIDs are a classic hidden threat — fluid retention, higher pressure, kidney stress.\n- Check any new symptom against the medicine list before naming a new disease.\n- Keep the list complete — herbs and chemical-seller purchases included — and prioritise with the team.",
      },
    ],
    questions: [
      {
        topic: "Multimorbidity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does multimorbidity mean?",
        options: [
          "A disease that transforms into another disease over time",
          "Two patients sharing one ward bed with similar illnesses",
          "Two or more long-term conditions coexisting in the same patient",
          "Any acute illness lasting more than one week",
        ],
        correctIndex: 2,
        explanation:
          "Multimorbidity simply means multiple chronic conditions in one body — the rule rather than the exception in real practice, and the reason care must look at the whole patient.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Drug Interactions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with heart failure and controlled hypertension starts daily ibuprofen for arthritis. Two weeks later: ankle swelling, breathlessness lying flat, and pressure 158/94. Most likely cause?",
        options: [
          "The heart failure has permanently entered its terminal stage",
          "The NSAID is retaining salt and water, raising her pressure and stressing her kidneys",
          "The arthritis has spread to the heart valves",
          "She has developed a new thyroid problem overnight",
        ],
        correctIndex: 1,
        explanation:
          "NSAIDs like ibuprofen and diclofenac retain sodium and water, raise blood pressure and reduce kidney perfusion — a triple threat to a weak pump and diabetic kidneys. The knee did not attack her heart; the painkiller did.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Polypharmacy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best protects a patient with several conditions from drug interaction problems?",
        options: [
          "Take all medicines at the same time each morning to keep levels even",
          "Stop all medicines whenever a new symptom appears",
          "Buy extra antibiotics from the chemical seller to prevent infections",
          "Keep a complete, current medicine list including herbal products, and review it with the team at every visit",
        ],
        correctIndex: 3,
        explanation:
          "The complete list plus team review is the core of medication safety: it exposes interactions, side effects masquerading as new disease, and medicines that have outlived their purpose. Abruptly stopping everything can cause harm, simultaneous dosing does not prevent interactions, and self-purchased antibiotics breed resistance.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Multimorbidity",
        front: "What is multimorbidity?",
        back: "Two or more chronic conditions in one person. It multiplies interactions between diseases and between medicines, so care must look at the whole patient, not one complaint.",
      },
      {
        topic: "NSAID Cautions",
        front: "Why are NSAIDs risky in heart failure and kidney disease?",
        back: "They retain salt and water (worsening failure and oedema), raise blood pressure and reduce kidney blood flow — a triple threat to the pump and the filter.",
      },
      {
        topic: "Medication Review",
        front: "A patient on five medicines develops a new symptom. What is the first question to ask?",
        back: "Could this be a side effect or interaction of an existing medicine? Read the list before naming a new disease — then involve the team.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Medication Without Harm (Global Patient Safety Challenge)",
        year: "2017",
        url: "https://www.who.int/initiatives/medication-without-harm",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Check for the latest edition and facility protocols.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Emergencies You Must Recognise",
    lessonTitle: "Shock Revisited: Types and Response",
    description:
      "Hypovolaemic, septic, cardiogenic and anaphylactic shock — the four patterns, how to tell them apart, and what each demands of you first.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define shock as a state of failing oxygen delivery to tissues, independent of blood pressure.",
      "Distinguish the four major shock patterns by their bedside clues, including warm and cold presentations.",
      "Apply the immediate nursing response for each shock type, including calling for help and safe positioning.",
    ],
    tags: ["shock", "emergency", "hypovolaemic", "sepsis", "anaphylaxis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You met shock last year as a physiology problem. On the ward it is a clock problem — tissues are starving of oxygen right now, and every minute you spend undecided is a minute they do not get back. Shock announces itself in patterns, and the patterns tell you what to do.\n\nHold one definition tightly: shock is inadequate delivery of oxygen to the cells, whatever the blood pressure reads. Trust the pulse, the skin, the consciousness and the urine.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Hypovolaemic shock** — the tank is empty: bleeding, severe diarrhoea and vomiting (cholera does this brutally fast). Pale, cold, clammy skin and a weak fast pulse. **Septic shock** — the pipes are poisoned: infection floods the system with vasodilating mediators, so the patient may be warm, flushed and dry early — do not be comforted — and cold and mottled late. Look for fever, rigors, fast breathing and new confusion, and find the source. **Cardiogenic shock** — the pump has failed, usually after a large infarct: chest pain, engorged neck veins, crackles, cold sweat. The tank may be full but nothing is pumped — fluids can drown this patient. **Anaphylactic shock** — massive allergy minutes after a drug, food or sting: rash, swollen lips, wheeze, stridor. The first drug is intramuscular adrenaline; everything else waits.\n\nFor every shock, your first three actions are the same: call for help, position for the pattern, and get oxygen flowing. Speed of the call matters more than perfection of the diagnosis.",
      },
      {
        type: "clinical_pearl",
        body: "Young women compensate — a normal blood pressure never rules out shock. Trust pulse rate, skin temperature, consciousness and urine output.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two hours after a normal delivery, a 26-year-old woman soaks a pad in twenty minutes. She is pale and sweating, her pulse is 122 and thready, and her blood pressure is 98/62 — it was 118/70 two hours ago. The bleeding continues.\n\nWhich shock pattern is this, and what are your first actions?\n\nAnswer: Hypovolaemic (haemorrhagic) shock — volume pouring out, with the classic pale, cold, fast-pulse picture and a falling pressure in a recently normal woman. Call for help and activate the PPH protocol, check the uterus and empty the bladder while another nurse prepares IV fluids, lay her flat with legs raised, give oxygen, and measure pulse and pressure every few minutes — she is young and compensating, so the numbers lie until late. Escalate for theatre or transfer early if bleeding continues.",
      },
      {
        type: "memory_trick",
        body: "Circulation is a pump connected to a tank through pipes: shock is an **Empty tank** (hypovolaemic), **Poisoned pipes** (septic), a **Broken pump** (cardiogenic) or **Panic pipes** (anaphylaxis). Find the failed part and you know what to do.",
      },
      {
        type: "summary",
        body: "- Shock = failing oxygen delivery to tissues; a normal blood pressure never rules it out.\n- Hypovolaemic: bleeding or fluid loss — pale, cold, fast pulse; replace volume, stop the loss.\n- Septic: vasodilation from infection — warm early, cold late; find the source, antibiotics within the hour.\n- Cardiogenic: pump failure — raised neck veins, crackles, chest pain. Fluids can harm.\n- Anaphylactic: allergy with airway swelling — IM adrenaline first, everything else second.\n- For all: call early, position wisely, oxygen on, monitor continuously.",
      },
    ],
    questions: [
      {
        topic: "Anaphylaxis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient develops swollen lips, widespread wheeze and dizziness minutes after a penicillin injection. What is the immediate first-line treatment?",
        options: [
          "Intramuscular adrenaline into the outer thigh",
          "Oral antihistamine and observation for one hour",
          "A wide-open IV infusion before any drug",
          "Nebulised salbutamol alone",
        ],
        correctIndex: 0,
        explanation:
          "Adrenaline by IM injection reverses the vasodilation and airway swelling within minutes and is the first-line rescue. Antihistamines, fluids and salbutamol are helpers that must not delay it.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Septic Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which bedside picture best fits EARLY septic shock?",
        options: [
          "Pale, cold, clammy skin after visible bleeding",
          "Chest pain with engorged neck veins and crackles",
          "A rash within minutes of an injection",
          "Fever, warm flushed skin, a bounding pulse and new confusion, with falling blood pressure",
        ],
        correctIndex: 3,
        explanation:
          "Early septic shock vasodilates the circulation, so the skin is warm and dry before it turns cold and mottled late. The other patterns describe haemorrhage, pump failure and allergy respectively.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Cardiogenic Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must IV fluids be given cautiously in cardiogenic shock?",
        options: [
          "Fluids weaken the effect of heart medicines",
          "Cardiogenic patients are always severely dehydrated",
          "The failing pump cannot handle extra volume, which can flood the lungs",
          "IV fluids cause infection in patients with heart disease",
        ],
        correctIndex: 2,
        explanation:
          "In cardiogenic shock the tank may already be full behind the failing pump — extra IV volume backs up into the lungs and deepens the drowning. Fluid decisions belong to the prescriber, guided by your monitoring.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Shock Definition",
        front: "The single definition of shock, whatever the type?",
        back: "Inadequate delivery of oxygen to the cells. Blood pressure can still be normal while the patient is deeply shocked — trust pulse, skin, consciousness and urine.",
      },
      {
        topic: "Septic Shock",
        front: "Warm, flushed, febrile, confused and hypotensive — which shock, and what next?",
        back: "Early septic shock — the infection's vasodilators have opened the pipes. Call for help, find the source, cultures where possible, antibiotics within the first hour, oxygen and fluids per protocol.",
      },
      {
        topic: "Anaphylaxis",
        front: "First drug in anaphylaxis, and by which route?",
        back: "Adrenaline, intramuscular, into the outer thigh. Antihistamines and steroids are helpers, never the rescue.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "WHO/ICRC course manual — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Sepsis (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Emergencies You Must Recognise",
    lessonTitle: "Respiratory Emergencies: Minutes Matter",
    description:
      "The severe asthma attack, acute pulmonary oedema and the obstructed airway — three breathing emergencies that will not wait for the doctor to arrive.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the recognition features of the three major breathing emergencies, including the complete-sentence test.",
      "Explain the immediate nursing response to severe asthma, acute pulmonary oedema and airway obstruction.",
      "Apply first-response actions safely at CHPS compound or district hospital level while organising help.",
    ],
    tags: ["respiratory", "emergency", "asthma", "pulmonary oedema", "choking"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A patient who cannot breathe has no patience, and neither should your response. Respiratory emergencies move faster than almost anything on the ward: between noticing and acting there is room for exactly one thought — what is wrong with the breathing, and what helps it now?\n\nThree emergencies will define your worst shifts and your best saves: the severe asthma attack, acute pulmonary oedema and the obstructed airway. Each has a signature, and each has a first move you can make before any doctor reaches the bedside.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Severe asthma** — the attack that will not break. Ask her to speak: if she cannot finish a sentence, is sitting upright, using neck and shoulder muscles, audibly wheezing (or has an ominously silent chest) with a racing pulse, treat as severe. Sit her up, give oxygen, give back-to-back nebulised salbutamol, and never leave her alone to fetch things — send someone. **Acute pulmonary oedema** — fluid drowning the air sacs: sudden breathlessness worse lying flat, frothy sputum, crackles. Sit her upright with legs down, stop running IV fluids, give oxygen, call the doctor.\n\n**Airway obstruction** — usually food, at mealtime; the universal sign is hands clutched to the throat. If she can cough or speak, encourage coughing and do not interfere. If she cannot cough, speak or breathe: five firm back blows, then five abdominal thrusts, alternating and checking the mouth after each cycle. Blind finger sweeps push objects deeper — never perform them.",
      },
      {
        type: "clinical_pearl",
        body: "'Can she speak a full sentence?' is the fastest severity meter in breathing emergencies — repeat it after every treatment to see whether you are winning.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On the postnatal ward at 3 am, a woman with severe pre-eclampsia who has been on IV fluids for hours becomes suddenly breathless. She cannot lie flat, is gasping in the upright position, and pink frothy sputum bubbles at her lips. Her oxygen saturation is 84 percent and her pulse is 128.\n\nWhat is happening, and what are your first actions?\n\nAnswer: Acute pulmonary oedema — the fluid load has overflowed into her lungs. Sit her fully upright with legs dependent, stop the IV infusion, give oxygen immediately, call the doctor and prepare for the ordered diuretic, monitoring saturation and pulse continuously. This is too much fluid, not too little — more IV fluid or lying her flat would deepen the drowning.",
      },
      {
        type: "memory_trick",
        body: "Three emergencies, three S's: **Sentence** failure (severe asthma), **Sputum** that is frothy (pulmonary oedema), **Silence** with hands to the throat (obstruction). Ask the sentence, look for the sputum, watch for the silence.",
      },
      {
        type: "summary",
        body: "- Breathing emergencies tolerate no delay — assess and act in the same minute.\n- Severe asthma: cannot speak a full sentence, upright, accessory muscles — sit up, oxygen, nebulised salbutamol, never leave alone.\n- Pulmonary oedema: orthopnoea, frothy sputum, crackles — sit up, legs down, stop IV fluids, oxygen, call.\n- Obstruction: hands to throat; coughing means encourage, silence means five back blows then five abdominal thrusts.\n- Never blind-sweep a choking mouth; never leave a severe asthmatic to fetch equipment — send someone.",
      },
    ],
    questions: [
      {
        topic: "Airway Obstruction",
        type: "MCQ",
        difficulty: "Easy",
        stem: "An adult at dinner clutches his throat and cannot speak, cough or breathe. What do you do first?",
        options: [
          "Give him water to push the food down",
          "Reach into the mouth blindly to grab the object",
          "Lie him flat and raise his legs",
          "Five firm back blows, then five abdominal thrusts, alternating",
        ],
        correctIndex: 3,
        explanation:
          "A patient who cannot cough, speak or breathe needs the choking sequence: five back blows between the shoulder blades, then five abdominal thrusts, alternating and checking after each cycle. Water and blind sweeps push objects deeper; lying flat helps nothing.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Asthma Severity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which patient is responding best to treatment, judged by the sentence test?",
        options: [
          "The asthmatic who now speaks a full sentence between breaths, when earlier she managed only two words",
          "The asthmatic who now speaks in short phrases instead of single words",
          "The patient who has become drowsier and quieter since the last dose",
          "The patient whose noisy wheeze has become silent, with no other change",
        ],
        correctIndex: 0,
        explanation:
          "Speaking full sentences means airflow is returning. A quieter, drowsier patient and a silent chest are warnings, not improvements — silence in asthma can mean almost no air is moving.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Pulmonary Oedema",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with severe pre-eclampsia on IV fluids becomes breathless, unable to lie flat, with pink frothy sputum. Which nursing action is correct?",
        options: [
          "Lie her flat and increase the IV rate to support her pressure",
          "Sit her upright with legs down, stop the IV infusion and give oxygen while calling for help",
          "Give nebulised salbutamol as the definitive treatment",
          "Restrict oral fluids for 48 hours and observe",
        ],
        correctIndex: 1,
        explanation:
          "Pulmonary oedema is fluid overload drowning the lungs: sitting upright with legs dependent decongests them, stopping the infusion halts the flood, and oxygen treats the saturation. Lying her flat or running more fluid would deepen the drowning.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Sentence Test",
        front: "Sentence test — how does it work?",
        back: "Ask the breathless patient to speak. Full sentence = milder; short phrases = severe; single words or silence = critical. Repeat after each treatment to track direction.",
      },
      {
        topic: "Emergency Positioning",
        front: "Positioning: pulmonary oedema versus the hypotensive bleeding patient?",
        back: "Pulmonary oedema: sit UP, legs down — decongest the lungs. Fainting or haemorrhagic hypotension: lie FLAT, legs raised. Opposite problems, opposite positions.",
      },
      {
        topic: "Choking",
        front: "Choking: when do you simply encourage coughing?",
        back: "While she can cough, speak or make any sound — a coughing patient is exchanging air. The moment she goes silent: five back blows plus five abdominal thrusts, alternating, and call for help.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "WHO/ICRC course manual — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Asthma (fact sheet)",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/asthma",
        note: "Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Emergencies You Must Recognise",
    lessonTitle: "Cardiovascular Emergencies: The Chest Pain Moment",
    description:
      "Chest pain triage for the nurse — spotting the pain that is a heart attack in progress, and acting in the first minutes that decide muscle survival.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the features of chest pain that suggest acute coronary syndrome and the important mimics.",
      "Explain the first-line nursing response to suspected cardiac chest pain, including ECG timing.",
      "Apply safe triage decisions for chest pain at district level, including repeat ECGs and escalation.",
    ],
    tags: ["chest pain", "myocardial infarction", "triage", "cardiovascular", "ecg"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every chest pain arrives wearing a question: heart or not-heart? It is the most important sorting question in the building — a heart attack kills muscle by the minute, and the treatment that saves it works best in the first hours.\n\nAs the nurse, you are often the first responder to that pain. You do not need to read the ECG to save the heart — you need to recognise the pattern, act on the clock, and never send it away as 'gas'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The pain of a heart attack is usually **central, heavy and squeezing** — 'like something sitting on my chest' — lasting more than ten to fifteen minutes, not eased by rest or antacids, often with sweating, nausea, breathlessness and radiation to the left arm, jaw or back. Risk history helps: older age, hypertension, diabetes, smoking. Beware atypical presentations — women and long-standing diabetics may report only breathlessness, tiredness or epigastric discomfort.\n\nYour response runs on rails: rest, call the doctor, record vitals, ECG within 10 minutes — repeated if pain persists or changes, because a first clean ECG clears nothing. Give oxygen only if saturation is low, prepare aspirin for chewing per order, and nitroglycerine only when the prescriber confirms it. Keep the mimics in mind: pulmonary embolism (breathless, sharp, after surgery or travel), aortic dissection (tearing pain to the back, unequal arm pressures) and pericarditis (sharp, worse lying flat).",
      },
      {
        type: "clinical_pearl",
        body: "ECG within ten minutes, repeated when the story continues. A normal first ECG has never cleared a heart attack — it has only cleared that minute.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In a district hospital OPD, a 58-year-old teacher clutches his chest. For the past 40 minutes he has had a heavy central pressure 'like a bag of stones', sweating, and an ache down the left arm. He is a known hypertensive who smokes. His pain is 8 out of 10 and not easing; he tried an antacid at home with no relief.\n\nWhat are your first three nursing actions, and why the hurry?\n\nAnswer: A possible acute coronary syndrome, and the clock is running — heart muscle dies minute by minute. Call the medical officer, settle him to rest, record vitals with oxygen saturation, and obtain the ECG within 10 minutes (repeating if pain persists), while preparing aspirin per the doctor's order and continuous monitoring. Do not be reassured by the antacid trial, and do not queue him behind stable patients — this pattern bypasses every queue.",
      },
      {
        type: "memory_trick",
        body: "A dying heart speaks **HEART**: **H**eaviness central, **E**xertion or rest, **A**rm or jaw radiation, **R**est brings no relief, **T**en-plus minutes with sweat. Three letters or more — treat as cardiac until proven otherwise.",
      },
      {
        type: "summary",
        body: "- Heart-attack pain: central, heavy, over ten minutes, no relief with rest or antacids, with sweat, radiation and breathlessness.\n- Women and diabetics often present atypically — breathlessness, fatigue, epigastric discomfort.\n- Response rails: rest, call, vitals, ECG within 10 minutes, repeat ECG if pain persists, monitor continuously.\n- Oxygen only if saturation is low; aspirin and nitroglycerine per prescriber order.\n- Keep the mimics in mind: pulmonary embolism, dissection (tearing, to the back), pericarditis.\n- Chest pain of cardiac pattern bypasses every queue.",
      },
    ],
    questions: [
      {
        topic: "Chest Pain Triage",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient presents with central chest heaviness for 45 minutes, sweating and left arm radiation. What must happen within the first 10 minutes?",
        options: [
          "A trial of antacid and 30 minutes of observation",
          "Rest, vital signs, the doctor called, and a 12-lead ECG",
          "Discharge home with paracetamol and review next week",
          "Immediate transfer by any available transport without assessment",
        ],
        correctIndex: 1,
        explanation:
          "A cardiac-pattern pain gets the clock response: rest, monitoring and an ECG within 10 minutes with the doctor called. Antacid trials and queuing cost heart muscle; unassessed transfer can be fatal en route.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "ECG Timing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must the ECG be repeated if chest pain continues or changes after a first normal tracing?",
        options: [
          "The machine needs two readings to calibrate",
          "The first ECG is always performed incorrectly",
          "ECG changes evolve over time, and a single normal tracing never excludes infarction",
          "Repeat ECGs directly reduce the patient's pain",
        ],
        correctIndex: 2,
        explanation:
          "Infarction writes itself onto the ECG over hours. One clean tracing clears only that minute; a continuing or changing story needs a repeat, plus troponin where available.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Atypical Infarction",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 62-year-old woman with long-standing diabetes reports sudden breathlessness and marked fatigue, with mild upper abdominal discomfort and no chest pain. What does this mean for triage?",
        options: [
          "This is simple indigestion — antacid and home",
          "Breathlessness excludes heart attack by definition",
          "Diabetes protects the heart from infarction",
          "Diabetics and women may have atypical infarcts — triage her as possible acute coronary syndrome",
        ],
        correctIndex: 3,
        explanation:
          "Women and long-standing diabetics often present without classic chest pain — breathlessness, fatigue or epigastric discomfort may be the whole heart attack. Pattern and risk, not textbook pain, drive triage.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Chest Pain",
        front: "Pain pattern of a heart attack?",
        back: "Central, heavy, squeezing, over 10-15 minutes, no relief with rest or antacids; sweating, nausea, breathlessness; radiation to arm, jaw or back.",
      },
      {
        topic: "ECG",
        front: "The ECG rule in chest pain?",
        back: "Within 10 minutes of arrival — and repeat if pain persists or changes. One clean ECG clears nothing: infarction evolves on the tracing over hours.",
      },
      {
        topic: "Atypical Infarction",
        front: "Why think twice in diabetic and female patients with chest-area complaints?",
        back: "Both groups commonly have atypical infarcts — breathlessness, fatigue, epigastric discomfort rather than classic chest pain. Triage by risk and pattern, not only by textbook pain.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Cardiovascular Diseases (fact sheet)",
        year: "2021",
        url: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
        note: "Check for the latest update.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Check for the latest edition and facility protocols.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Trauma Care",
    lessonTitle: "Trauma: The First Priorities",
    description:
      "The multiply-injured patient from the road crash — the primary survey that hunts the killers in order: catastrophic bleeding, airway, breathing, circulation, disability, exposure.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the primary survey sequence, including control of catastrophic haemorrhage before airway.",
      "Explain how to manage the airway when cervical spine injury is suspected, and why bleeding control precedes fluids.",
      "Apply the primary survey to a multiply-injured patient while organising transfer to definitive care.",
    ],
    tags: ["trauma", "primary survey", "abcde", "haemorrhage", "transfer"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Road traffic crashes do not read textbooks, but the injuries they cause follow a grim order of lethality. The multiply-injured patient dies of airway, breathing and bleeding — in roughly that order, unless the bleeding is pouring. Your job is to hunt the killers in that order, not to catalogue every wound.\n\nThat hunt has a name: the primary survey, taught worldwide as ABCDE — airway, breathing, circulation, disability, exposure — with one modern amendment: catastrophic haemorrhage comes first. It takes ninety seconds when practised, and it outranks every bruise and break.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Catastrophic bleeding first**: a limb pumping or pouring blood gets firm direct pressure — or a tourniquet above the wound if pressure fails — before anything else. Then **A, airway with the spine in mind**: if there is any chance of neck injury, one person stabilises the head, you open the airway with a jaw thrust (not head tilt), suction or clear what you can see, and you speak to the patient — talking is the best airway test. **B, breathing**: expose the chest, look and listen for absent sounds, neck vein distension or a sucking wound. **C, circulation**: two large-bore IV cannulas, fluid per protocol after bleeding control, noting pulse and skin.\n\n**D, disability**: pupils equal and reacting, and AVPU — alert, responds to voice, to pain, or unresponsive. **E, exposure**: undress completely, inspect front and back (log-rolling with the spine protected), then cover up again at once — the cold trauma patient slides toward a lethal triad of hypothermia, acidosis and clotting failure. Only when the whole survey is complete and stable does the head-to-toe secondary survey, and the paperwork that can wait, begin.",
      },
      {
        type: "clinical_pearl",
        body: "Blood on the floor counts twice: it belongs to the patient, and until the pouring is controlled it is the thing killing him. Pressure first, paperwork later.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man arrives at your district hospital after a tro-tro crash. He has a bleeding scalp wound, is drowsy and mumbling, breathing noisily, with bruising across the chest. Bystanders say he was thrown against the seat in front.\n\nIn what order do you act, and what comes after?\n\nAnswer: Start with the visible pouring bleeding — firm pressure to the scalp. Hold the head still for possible neck injury, open the airway with a jaw thrust and clear what you can see, then check breathing (expose the chest — bruising may hide a flail segment or pneumothorax), start two large-bore IVs for circulation once bleeding is controlled, check pupils and AVPU for disability, log-roll to inspect the back, keep him warm, and organise urgent referral with the primary survey documented. Every step comes before wound closure and X-rays.",
      },
      {
        type: "memory_trick",
        body: "Trauma's ABC has a bloody twist: stop the pouring — catastrophic haemorrhage — before the alphabet, then **A**irway with spine, **B**reathing, **C**irculation, **D**isability, **E**xposure. And at E, expose briefly, inspect, then cover: cold kills clotting.",
      },
      {
        type: "summary",
        body: "- The multiply-injured die of airway, breathing and bleeding — treat in order of lethality, not of visibility.\n- Catastrophic haemorrhage jumps the queue: firm pressure, tourniquet above the wound if pressure fails.\n- Suspect neck injury in blunt trauma: jaw thrust, head held still, log-roll.\n- C: two large-bore IVs after bleeding control; D: pupils and AVPU; E: undress, inspect, then cover and warm.\n- Secondary survey and paperwork only after the primary survey is complete.\n- Organise transfer early, with your findings documented.",
      },
    ],
    questions: [
      {
        topic: "Primary Survey",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A crash victim arrives pouring blood from a leg wound and has noisy breathing. Which comes first?",
        options: [
          "Firm direct pressure on the bleeding limb wound",
          "Inserting an IV line and running fluids fast",
          "Clearing the airway with head tilt and chin lift",
          "Splinting the leg before touching the wound",
        ],
        correctIndex: 0,
        explanation:
          "Catastrophic haemorrhage jumps the queue: the pouring wound gets firm pressure, and a tourniquet if needed, before airway manoeuvres and fluids. Head tilt is also wrong here with possible neck injury — jaw thrust protects the spine.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Airway Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is the jaw thrust — not head-tilt and chin-lift — used for the trauma patient's airway?",
        options: [
          "The jaw thrust is simply faster to perform",
          "The jaw thrust opens the airway wider than any other manoeuvre",
          "Head tilt causes pain in all injured patients",
          "Head extension can worsen an unstable cervical spine injury, which cannot be excluded at the roadside",
        ],
        correctIndex: 3,
        explanation:
          "In blunt trauma the neck must be presumed injured until imaging says otherwise; jaw thrust opens the airway without moving the neck. If the patient is talking, the airway is working — but it must be re-checked.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Exposure and Hypothermia",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does exposure end with covering the patient and preventing hypothermia?",
        options: [
          "Cold reduces swelling of the fractures",
          "Hypothermia worsens the lethal triad — cold blood clots poorly, so bleeding becomes uncontrollable",
          "Hypothermia protects the brain in all trauma patients",
          "Covering is required only for dignity, not physiology",
        ],
        correctIndex: 1,
        explanation:
          "The exposed trauma patient slides into hypothermia, acidosis and coagulopathy — the lethal triad — where cold blood fails to clot and bleeding runs away. Expose briefly, inspect, then cover and warm.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Primary Survey",
        front: "What jumps ahead of A in the trauma primary survey?",
        back: "Catastrophic haemorrhage — the pouring limb wound. Firm direct pressure immediately; tourniquet above the wound if pressure cannot control it. Everything else waits.",
      },
      {
        topic: "Airway with Spine",
        front: "Airway manoeuvre when neck injury is possible, and why?",
        back: "Jaw thrust with the head held still — head tilt can displace an unstable cervical fracture. If the patient talks, the airway is working right now.",
      },
      {
        topic: "Lethal Triad",
        front: "Why keep the undressed trauma patient warm at E?",
        back: "Cold trauma blood clots poorly: hypothermia, acidosis and coagulopathy form the lethal triad. Expose briefly, inspect front and back, then cover.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "WHO/ICRC course manual — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Injuries and Violence (fact sheet)",
        year: "2021",
        url: "https://www.who.int/news-room/fact-sheets/detail/injuries-and-violence",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "medical-surgical-nursing-2",
    moduleTitle: "Trauma Care",
    lessonTitle: "Nursing the Trauma Patient Through Recovery",
    description:
      "Surviving the first hour is only the beginning — the ward weeks after trauma, and the complications your routine quietly prevents.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the major complications that threaten trauma patients during ward-based recovery.",
      "Explain the nursing interventions that prevent infection, DVT, pressure ulcers and chest complications after trauma.",
      "Apply a structured daily plan for a recovering trauma patient, including monitoring for deterioration.",
    ],
    tags: ["trauma recovery", "complications", "infection", "dvt", "rehabilitation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The drama of the first hour earns the stories; the quiet of the ward weeks earns the outcomes. Once the bleeding is controlled and the fractures set, trauma recovery becomes a long game of preventing complications — and the players are you, your routine and your observation chart.\n\nRecovering patients can still die — of infection, of clots, of lungs that never re-expanded, of a head injury that redeclares itself. The nurse who knows the trajectory becomes the patient's early-warning system.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Infection** leads the list: wounds, chests, bladders and IV sites all offer entry. Watch the temperature trend, wound redness, warmth and discharge, and changing sputum; remove catheters and cannulas as soon as they stop earning their keep. **Clots**: immobility thickens the blood — encourage leg exercises, early walking and hydration; a new hot swollen calf is a DVT. **Skin and lungs**: the immobile patient needs repositioning every two hours (pressure ulcers) plus deep breathing and early mobilisation (atelectasis and chest infection). **Head injury watch**: a patient who 'talks and deteriorates' — worsening drowsiness, vomiting, unequal pupils, new weakness — needs urgent escalation, always.\n\nLayer onto this the repair work: nutrition rich in protein and micronutrients for wound healing, pain that is assessed and treated (untreated pain blocks deep breathing and mobilisation), and the invisible injuries — fear, sleeplessness, flashbacks — that deserve to be asked about. Involve the family in every plan; rehabilitation starts on the ward, not at discharge.",
      },
      {
        type: "clinical_pearl",
        body: "Two-hourly turning is not kindness, it is prevention: one missed night of repositioning buys a sacral ulcer that costs four months of healing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day 3 after abdominal surgery for a splenic rupture from a road crash, a young man has a fever of 38.4 C. His wound is red and warm with a small discharge, he has not left the bed since surgery, breathes shallowly 'to protect the pain', and has had a urinary catheter since admission. He is eating little.\n\nWhich complications are already knocking, and what is your plan?\n\nAnswer: Several at once: surgical site infection (fever, red, warm, discharge — report for review, dressing and possible culture), chest infection risk from shallow breathing and immobility (teach deep breathing with pain cover first), DVT risk from immobility (leg exercises and assisted mobilisation), catheter-associated infection (request removal review) and delayed healing from poor intake (high-protein diet plan with the family). Chart temperature trends, control pain enough to move, and escalate the wound today.",
      },
      {
        type: "memory_trick",
        body: "Watch recovery with the **six F's**: **Fever** (infection), **Flow** (clots in legs, phlegm in chests), **Flaps** of skin (pressure areas), **Fuel** (nutrition), **Feelings** (psychological trauma), **Follow-up** (rehabilitation). Check all six on every round.",
      },
      {
        type: "summary",
        body: "- Trauma recovery is a prevention job: infection, clots, pressure ulcers and chest complications are the enemies.\n- Temperature trend, wound inspection and early removal of catheters and cannulas fight infection.\n- Leg exercises, hydration and early walking fight DVT; two-hourly turning fights pressure ulcers.\n- 'Talks and deteriorates' after head injury is an emergency: drowsiness, vomiting, unequal pupils, new weakness.\n- Nutrition, pain control and asking about feelings are treatment, not extras; rehabilitation begins on the ward.",
      },
    ],
    questions: [
      {
        topic: "Immobility Complications",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is an unconscious trauma patient repositioned every two hours?",
        options: [
          "To reduce blood loss from the wounds",
          "To help the patient sleep more deeply",
          "To prevent pressure ulcers and the chest complications of lying still",
          "To improve the appetite",
        ],
        correctIndex: 2,
        explanation:
          "Two-hourly repositioning protects skin over bony points and lets the chest expand and drain — both major killers of the immobile. It is scheduled prevention, not comfort politeness.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Head Injury Watch",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On day 3 after trauma surgery, the patient who was alert becomes drowsy, vomits and has an unequal right pupil. What does this demand?",
        options: [
          "Immediate escalation — possible expanding intracranial injury ('talks and deteriorates')",
          "Routine analgesia and reassessment at the next shift",
          "More IV fluids to treat assumed dehydration",
          "Charting him as sleeping and dimming the lights",
        ],
        correctIndex: 0,
        explanation:
          "A lucid interval followed by drowsiness, vomiting and unequal pupils is the classic 'talks and deteriorates' pattern — an expanding bleed inside the skull until excluded. This is an immediate call, not a next-shift item.",
        courseSlug: "medical-surgical-nursing-2",
      },
      {
        topic: "Recovery Nutrition",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which plan best supports wound healing in a recovering trauma patient?",
        options: [
          "Strict bed rest until discharge",
          "Fluid restriction to keep the wound dry",
          "Daily dressing changes with no nutrition review",
          "Adequate pain control, a high-protein diet and early mobilisation",
        ],
        correctIndex: 3,
        explanation:
          "Healing needs protein and micronutrients for collagen, movement for perfusion and lung health, and pain control that makes both possible. Bed rest and restriction starve recovery.",
        courseSlug: "medical-surgical-nursing-2",
      },
    ],
    flashcards: [
      {
        topic: "Head Injury",
        front: "'Talks and deteriorates' — what does it mean?",
        back: "A head-injured patient who seemed fine, then worsens — drowsy, vomiting, unequal pupils, new weakness. Possible expanding bleed inside the skull; escalate immediately.",
      },
      {
        topic: "Immobility",
        front: "Two-hourly turning plus deep breathing in bed rest — what do they prevent?",
        back: "Turning: pressure ulcers on sacrum and heels. Deep breathing and mobilisation: atelectasis and hypostatic chest infection. Both are nurse-prescribed and nurse-delivered.",
      },
      {
        topic: "Recovery Review",
        front: "The six F's of trauma recovery?",
        back: "Fever, Flow (clots and chest), Flaps (pressure areas), Fuel (nutrition), Feelings, Follow-up. Run them on every round.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
        note: "Verify current edition with your library.",
      },
      {
        organization: "WHO",
        title: "Injuries and Violence (fact sheet)",
        year: "2021",
        url: "https://www.who.int/news-room/fact-sheets/detail/injuries-and-violence",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Pathology of Circulation",
    lessonTitle: "Fluid Balance and Oedema",
    description:
      "Why fluid leaves the blood and settles in tissues — the capillary pressures behind swollen legs, puffy faces and wet lungs.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain the balance of hydrostatic and oncotic pressures at the capillary and how disturbances cause oedema.",
      "Describe the four main mechanisms of oedema with examples from Ghanaian practice, including filariasis and kwashiorkor.",
      "Apply bedside oedema assessment — pitting, laterality and location — to distinguish common causes.",
    ],
    tags: ["oedema", "fluid balance", "capillaries", "pre-eclampsia"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every second, fluid leaves your capillaries to bathe the cells and returns by two routes — the veins and the lymphatics. Two pressures govern the door: hydrostatic pressure pushing out, and plasma proteins (mainly albumin) pulling back in. Disturb either, and fluid settles where it should not: that is oedema.\n\nYou will see oedema every working week — swollen ankles, puffy faces, ascites, wet lungs. Reading the mechanism behind the swelling is like reading a map of the body's circulation, and it changes what you do next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Raised hydrostatic pressure** — the push is too strong: deep vein thrombosis in one leg, right-sided heart failure, and pregnancy, where the growing uterus presses pelvic veins and the body holds extra fluid. Swelling follows gravity: ankles in the walking patient, sacrum and flanks in the bed-bound. **Low oncotic pressure** — the pull is too weak because albumin is lost or not made: nephrotic syndrome (protein poured into the urine), kwashiorkor, cirrhosis. This oedema is general and often starts in the face — periorbital puffiness in the morning.\n\n**Lymphatic obstruction** — the drain is blocked: after lymph node surgery or infection, and famously in filariasis, where swollen limbs thicken over years (elephantiasis). This oedema is typically non-pitting. **Inflammation** — the wall itself opens: burns, cellulitis and allergic reactions leak protein-rich fluid locally, which is why an inflamed leg swells hot and tender rather than pale and soft. At the bedside, press the shin for five seconds: a dent that stays is pitting oedema. Then think laterality (one leg is a clot until excluded) and location (face and hands in pregnancy raise pre-eclampsia's flag).",
      },
      {
        type: "clinical_pearl",
        body: "Pitting test, laterality, location. New swelling of ONE leg is a DVT until excluded; face-and-hand swelling with headache in pregnancy is pre-eclampsia's knock — check the pressure and the urine.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 30-year-old woman at 32 weeks of pregnancy attends the antenatal clinic. Her ankles have been swollen for weeks, and at the last visit the record called it normal. Today her face looks puffy, her wedding ring is tight, and she reports a headache since morning. Her blood pressure is 152/96.\n\nWhat has changed, and what must you do?\n\nAnswer: The pattern changed. Dependent ankle swelling alone is common in pregnancy, but facial and hand swelling with headache and hypertension point to pre-eclampsia — now affecting her circulation. Check the urine for protein, initiate the facility's pre-eclampsia protocol, inform the prescriber immediately, and do not send her home with 'normal pregnancy swelling'. Her risk of eclampsia — seizure, placental abruption and fetal compromise — is real today.",
      },
      {
        type: "memory_trick",
        body: "Fluid escapes when **HALI** strikes: **H**ydrostatic pressure up (heart failure, DVT, pregnancy), **A**lbumin down (nephrotic, kwashiorkor, cirrhosis), **L**ymph blocked (filariasis, node surgery), **I**nflammation opens the wall. When fluid hails down, HALI is somewhere at work.",
      },
      {
        type: "summary",
        body: "- Capillary exchange balances hydrostatic push against albumin's oncotic pull.\n- Hydrostatic up: heart failure, DVT, pregnancy — dependent oedema, ankles or sacrum.\n- Albumin down: nephrotic syndrome, kwashiorkor, cirrhosis — general oedema, puffy face.\n- Lymph blocked (filariasis, node surgery) gives thick non-pitting limbs; inflammation gives local hot swelling.\n- Bedside routine: pitting test, laterality, location — one swollen leg is a clot until excluded; face-hands-headache in pregnancy triggers the pre-eclampsia workup.",
      },
    ],
    questions: [
      {
        topic: "Oedema Mechanisms",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A child with kwashiorkor has generalized oedema. What is the mechanism?",
        options: [
          "Excess salt alone directly fills the tissues",
          "Low plasma albumin weakens the oncotic pull, so fluid escapes the vessels",
          "A kidney infection blocks the lymphatics",
          "Heart failure has raised hydrostatic pressure everywhere",
        ],
        correctIndex: 1,
        explanation:
          "In kwashiorkor the poorly nourished liver cannot make albumin; the plasma loses its protein pull and fluid leaks into tissues. The mechanism is low oncotic pressure, not salt, lymphatic blockage or heart failure.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Unilateral Oedema",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal woman develops sudden swelling of ONE calf — warm and tender. What does new unilateral swelling most suggest?",
        options: [
          "Normal dependent swelling of pregnancy",
          "Low albumin from malnutrition",
          "Bilateral dietary oedema",
          "Deep vein thrombosis — a clot blocking venous drainage raises local hydrostatic pressure",
        ],
        correctIndex: 3,
        explanation:
          "New unilateral calf swelling in a postnatal or post-operative patient is a DVT until excluded — the clot dams venous outflow behind it. Generalised, low-albumin causes would swell both legs.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Pre-eclampsia Oedema",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which swelling pattern most raises pre-eclampsia rather than normal pregnancy oedema?",
        options: [
          "Facial and hand swelling with headache and hypertension",
          "Ankle swelling alone at the end of the day, resolving overnight with legs raised",
          "Symmetrical ankle oedema with normal blood pressure and urine",
          "Swelling of one leg only after a long journey",
        ],
        correctIndex: 0,
        explanation:
          "Dependent ankle oedema that resolves overnight is common and often benign in pregnancy. Face and hand swelling with headache and high pressure is pre-eclampsia's signature — check the urine and escalate.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Capillary Pressures",
        front: "The two pressures that govern fluid at the capillary?",
        back: "Hydrostatic pressure pushes fluid OUT; plasma albumin's oncotic pressure pulls it back IN. The lymphatics collect the remainder.",
      },
      {
        topic: "Pitting Oedema",
        front: "Pitting versus non-pitting oedema — with examples?",
        back: "Pitting: heart failure, DVT, nephrotic syndrome, pre-eclampsia. Non-pitting: chronic lymphatic obstruction — filariasis, elephantiasis. Press the shin five seconds and look for the dent.",
      },
      {
        topic: "Nephrotic Face",
        front: "Why does nephrotic syndrome swell the face?",
        back: "Massive urinary protein loss drains albumin, weakening the oncotic pull; fluid settles in loose periorbital tissue — puffiest in the morning.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Pathology of Circulation",
    lessonTitle: "Thrombosis, Embolism and Infarction",
    description:
      "Virchow's triad, the clot that travels, and the tissue it starves — the three-act story behind strokes, infarcts and postnatal calf pain.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe Virchow's triad and how stasis, endothelial injury and hypercoagulability conspire to form clots.",
      "Explain the differences between thrombosis, embolism and infarction, with venous and arterial patterns.",
      "Apply nursing prevention of venous thromboembolism to post-operative and postnatal patients.",
    ],
    tags: ["thrombosis", "embolism", "infarction", "virchow", "vte"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A clot that saves you from a paper cut can kill you in a coronary artery. Thrombosis (a clot forming where it should not), embolism (the clot travelling) and infarction (the tissue it starves) are one story told in three acts — the story that causes strokes, heart attacks and the postnatal pulmonary embolus you dread.\n\nUnderstanding the why — Virchow's triad — turns prevention from ritual into reasoning. You will use it every time you get a post-operative patient out of bed.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Virchow's triad** names the three conspirators. **Stasis**: slow flow — surgery, immobility, long journeys, and pregnancy, where the uterus obstructs pelvic veins. **Endothelial injury**: a damaged vessel wall invites platelets — trauma, surgery, smoking, hypertension. **Hypercoagulability**: blood primed to clot — pregnancy and the puerperium (nature's guard against delivery bleeding), cancer, dehydration. The more conspirators present, the faster the clot. Arterial thrombi (white, platelet-rich) cause infarcts: myocardial infarction, stroke. Venous thrombi (red-cell-rich) begin as calf DVT and kill by travelling to the lungs.\n\nAn **embolus** is anything that travels — clot, fat from fractured bones, air from IV mishandling, and rarely amniotic fluid in labour. It lodges where the pipe narrows and starves whatever lies downstream. **Infarction** follows: death of the tissue supplied. The brain liquefies; other organs scar. End-arterial organs (heart, brain, kidney, spleen) infarct easily because they lack spare routes, while the lung's double supply tolerates small emboli. And in Ghana, sickle cell disease writes its own version — painful crises are bone and spleen infarctions from sickled cells, not from ordinary clot.",
      },
      {
        type: "clinical_pearl",
        body: "The puerperium is a hypercoagulable state armed with stasis — a postnatal woman with a hot, tender calf is a DVT until excluded. Never massage the leg: you may convert a clot into a pulmonary embolus.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On day 4 after an emergency caesarean, a 28-year-old woman has not walked since yesterday because of wound pain. This morning her left calf is swollen, warm and tender, and she mentions feeling slightly short of breath with a pulse of 104.\n\nWhat is happening, and what must you NOT do?\n\nAnswer: She has the full triad — surgery (endothelial injury), bed rest (stasis) and the puerperium (hypercoagulability) — and now a probable DVT, with breathlessness raising the question of a clot already travelled. Report urgently, check vitals and oxygen saturation, and arrange urgent review. Do NOT massage or rub down the leg — it can dislodge the clot into the lungs — and do not mobilise her before review. Prevention was this morning's job: early ambulation, hydration, leg exercises and pain relief that makes movement possible.",
      },
      {
        type: "memory_trick",
        body: "Virchow's triad is **SHE**: **S**tasis (flow slowed), **H**ypercoagulability (blood thickened), **E**ndothelial injury (wall wounded). When SHE visits a post-operative, postnatal, dehydrated smoker — expect a clot.",
      },
      {
        type: "summary",
        body: "- Thrombosis = clot in place; embolism = clot (or fat, air) travels; infarction = tissue starves downstream.\n- Virchow's SHE: Stasis, Hypercoagulability, Endothelial injury — count the factors in each patient.\n- Arterial (white) thrombi infarct: MI, stroke. Venous (red) thrombi start as calf DVT, kill as pulmonary embolism.\n- End-arterial organs (heart, brain, kidney, spleen) infarct easily; the lungs tolerate small emboli.\n- Never massage a suspected DVT. Prevention: mobility, hydration, leg exercises, adequate pain control.\n- Sickle cell crises are infarctions from sickled cells — vasculature, not clot.",
      },
    ],
    questions: [
      {
        topic: "Virchow's Triad",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which patient has all three of Virchow's factors stacked highest?",
        options: [
          "A dehydrated smoker on strict bed rest after major surgery",
          "A walking teenager with a clean finger laceration",
          "A breastfed infant with no IV access",
          "An athlete icing a sprained ankle at home",
        ],
        correctIndex: 0,
        explanation:
          "The post-operative, dehydrated, smoking patient stacks all three conspirators — stasis, hypercoagulability and endothelial injury. The others carry one factor or none.",
        courseSlug: "pathology-2",
      },
      {
        topic: "DVT Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal woman has a hot, tender, swollen calf. Which nursing action is contraindicated, and why?",
        options: [
          "Measuring blood pressure on the unaffected arm",
          "Massaging the leg — it can dislodge the clot into the pulmonary circulation",
          "Monitoring vitals and oxygen saturation while awaiting review",
          "Recording calf circumference for comparison",
        ],
        correctIndex: 1,
        explanation:
          "A calf DVT is tethered but can break loose; rubbing it risks turning a leg problem into a pulmonary embolus. The safe actions are observation, urgent report and review — never massage.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Infarction Patterns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do the heart, brain, kidney and spleen infarct so readily from emboli?",
        options: [
          "Their tissues cannot survive any reduction in blood flow at all",
          "Their arteries are too wide to hold a clot",
          "They are end-arterial organs with little collateral supply, so one blockage starves the territory",
          "They lack capillaries entirely",
        ],
        correctIndex: 2,
        explanation:
          "Heart, brain, kidney and spleen depend on single end-arteries with few backup routes, so an embolus infarcts outright. Tissues with dual or rich collateral supply, like the lung, tolerate small emboli better.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Virchow's Triad",
        front: "Virchow's triad — the three conspirators?",
        back: "Stasis (slow flow), Hypercoagulability (thicker blood), Endothelial injury (damaged wall). Surgery, immobility, pregnancy, dehydration and smoking each add conspirators.",
      },
      {
        topic: "Definitions",
        front: "Thrombosis versus embolism versus infarction?",
        back: "Thrombus: a clot attached where it formed. Embolus: any travelling material (clot, fat, air). Infarct: tissue death from the blockage — coagulative necrosis, liquefactive in the brain.",
      },
      {
        topic: "VTE Prevention",
        front: "The DVT prevention bundle for post-operative and postnatal patients?",
        back: "Early and repeated mobilisation, leg exercises, hydration, adequate pain relief to enable movement — and reporting a hot, swollen calf at once.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Pathology of Circulation",
    lessonTitle: "Shock at the Cellular Level",
    description:
      "The pathology beneath the pale face — what starving cells do without oxygen, and why your urine chart tells the story.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the cellular changes of hypoperfusion — anaerobic metabolism, lactate accumulation and cell swelling.",
      "Explain how compensation produces early bedside signs and why decompensation arrives late in young patients.",
      "Apply urine output, capillary refill and level of consciousness as bedside markers of cellular perfusion.",
    ],
    tags: ["shock", "hypoperfusion", "lactate", "organ dysfunction"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You know shock by its face — pale, sweaty, faint. This lesson is about what that face hides: cells whose oxygen supply has been cut, switching to desperate chemistry that produces acid, swells their walls and finally kills them. The bedside signs you chart are echoes of this chemistry.\n\nUnderstanding the cellular story explains your tools: why we treasure urine output, why we watch lactate, why minutes matter, and why 'the pressure is normal' is never the end of the argument.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Cut a cell's oxygen and its power stations — the mitochondria — stop making ATP in quantity. It switches to **anaerobic glycolysis**, a poor backup that yields little energy and dumps **lactate**, which acidifies the blood. Without ATP, the sodium-potassium pump fails; sodium and water seep inward and the cell **swells**. Enzymes leak, membranes break, and in the last act the cell dies — first in the most oxygen-hungry tissues: neurons in minutes, then heart muscle and the renal tubules. This is why your interventions have a deadline.\n\nBefore that, the body defends itself: vessels to skin, gut and muscle constrict to keep flow for heart and brain. That compensation is your early warning — cool pale skin, weak peripheral pulses, slow capillary refill, falling urine output — all before the blood pressure drops. Young patients hold the pressure until the last. The gut, starved early, lets bacteria cross its injured wall and add sepsis to the fire; the renal tubules shut down (acute tubular injury, oliguria). And when flow returns, reperfusion can add injury of its own, as oxygen free radicals pour into tissue that has lost its defences.",
      },
      {
        type: "clinical_pearl",
        body: "Urine output is the kidney's verdict on perfusion. Under 0.5 mL/kg/hour in an adult says the gut and skin have already been sacrificed — measure it hourly in shock and treat the number as a voice.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman who collapsed with severe malaria anaemia has received two units of blood and IV fluid. Her blood pressure has 'normalised' at 104/64 and she seems calmer. But in the last two hours she has passed only 15 mL of urine, and her fingertips are still cool with sluggish refill.\n\nIs she truly stabilised? What does the kidney know that the cuff does not?\n\nAnswer: Not yet. The recovered blood pressure is a compensated state, not a perfused one — vasoconstriction is still sacrificing skin, gut and kidneys to protect heart and brain. The oliguria is the renal tubule's distress signal, and the cool fingertips confirm the periphery is still shut down. Report the urine output, chart it hourly, watch her consciousness and lactate if available, and keep treating the cause — the anaemia and the infection — while monitoring for the point at which compensation fails.",
      },
      {
        type: "memory_trick",
        body: "The dying cell's last dance has four moves: **Switch** (to anaerobic), **Swell** (sodium floods in), **Leak** (enzymes escape), **Die** (membrane breaks). Arrive before the last move and everything is reversible.",
      },
      {
        type: "summary",
        body: "- Hypoperfusion starves cells of oxygen: anaerobic glycolysis, lactate, acidosis.\n- ATP failure stops the sodium pump — cells swell, leak and finally die; neurons go first.\n- Compensation (vasoconstriction) gives early signs: cool skin, weak pulses, low urine — before the BP falls.\n- Urine under 0.5 mL/kg/hour in an adult marks renal hypoperfusion; measure hourly in shock.\n- Gut ischaemia invites bacterial translocation; reperfusion itself can add injury.",
      },
    ],
    questions: [
      {
        topic: "Anaerobic Metabolism",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does lactate rise in shock?",
        options: [
          "The liver manufactures lactate to feed the brain",
          "Cells short of oxygen switch to anaerobic metabolism, which produces lactate",
          "Lactate leaks inward from the environment",
          "The kidneys excrete excess bicarbonate, generating lactate",
        ],
        correctIndex: 1,
        explanation:
          "Without oxygen the mitochondria cannot run aerobic metabolism, so the cell falls back on anaerobic glycolysis — which yields little ATP and leaves lactate, and acid, behind.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Compensation Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which bedside findings best show the compensation stage of shock, before the blood pressure falls?",
        options: [
          "Cool pale skin, weak peripheral pulses and falling urine output",
          "Warm pink skin with a bounding pulse",
          "A urine output above 1 mL/kg/hour",
          "A slow pulse with deep, regular, quiet breathing",
        ],
        correctIndex: 0,
        explanation:
          "Compensation clamps the vessels of skin, gut and muscle to protect heart and brain — producing cool skin, thready pulses and oliguria while the pressure still reads normal. Warm and bounding describes early sepsis, not compensation.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Oliguria in Shock",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient's blood pressure has returned to normal after resuscitation, but hourly urine remains under 15 mL and the fingertips are cool. What is the interpretation?",
        options: [
          "Full recovery — remove the monitors and let her sleep",
          "The kidney failure is now permanent and untreatable",
          "Compensated shock — kidneys and periphery are still under-perfused; report and keep monitoring",
          "She is simply dehydrated from sweating; oral water alone is enough",
        ],
        correctIndex: 2,
        explanation:
          "A restored blood pressure with oliguria and cool periphery means vasoconstriction is still buying the number. Report the urine, chart it hourly, and treat the cause — the cuff and the renal tubules are telling two different stories.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Cellular Hypoxia",
        front: "What happens inside a cell starved of oxygen — the four moves?",
        back: "Switch to anaerobic metabolism (lactate, acid), Swell (ATP failure stops the sodium pump), Leak enzymes, Die. Arrive before the last move and it is reversible.",
      },
      {
        topic: "Compensated Shock",
        front: "Why can blood pressure be normal in shock?",
        back: "Vasoconstriction defends heart and brain by clamping skin, gut and muscle vessels. Young patients compensate until late — trust pulse, skin, consciousness and urine.",
      },
      {
        topic: "Urine Output",
        front: "The adult urine output threshold signalling hypoperfusion?",
        back: "Under 0.5 mL/kg/hour. It means renal (and gut) perfusion is already being sacrificed — chart it hourly in any shocked patient.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Guyton and Hall Textbook of Medical Physiology (14th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Organ System Pathology",
    lessonTitle: "Pathology of the Heart and Vessels",
    description:
      "From a fatty streak to a blocked coronary — atherosclerosis, hypertension's thickened heart, and the failure that follows.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the stepwise development of atherosclerosis from endothelial injury to plaque and thrombosis.",
      "Explain how chronic hypertension causes left ventricular hypertrophy and heart failure, and how rheumatic disease scars valves.",
      "Apply the distinction between stable angina and plaque rupture (infarction) to patient education.",
    ],
    tags: ["atherosclerosis", "myocardial infarction", "heart failure", "hypertension"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana's wards are full of hearts that worked hard for decades and then failed. Behind most of those failures stand two slow stories: atherosclerosis, the plaque that narrows and finally blocks arteries, and hypertension, the pressure that thickens the heart's walls until they cannot relax.\n\nKnowing these pathways changes your counselling: every 'take your tablets' conversation is an intervention in pathology that is still in progress.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Atherosclerosis begins with **endothelial injury** — hypertension, smoking and diabetes roughen the vessel lining. LDL cholesterol slips into the wall, macrophages devour it and become foam cells, and a fatty streak grows into a **plaque** with a fibrous cap. A plaque that slowly narrows the lumen gives exertional chest pain that eases with rest — **stable angina**: the pipe is narrow but patent. The killer is different: a soft plaque **ruptures**, platelets swarm, and a thrombus occludes the artery in minutes — **myocardial infarction**, death of downstream muscle. The most dangerous plaques are often the small, soft ones, not the tightest-looking narrowings.\n\nMeanwhile, hypertension makes the left ventricle pump against high pressure for years; its wall thickens — **left ventricular hypertrophy** — muscle that is strong but stiff and poorly perfused, sliding toward failure. Rheumatic fever after untreated streptococcal sore throat scars valves years later — mitral stenosis is still common in young Ghanaian women. Whatever the route, heart failure shows two faces: **forward** failure (fatigue, low output, cold hands) and **backward** congestion (crackles, orthopnoea, swollen ankles, engorged neck veins). Most patients show both.",
      },
      {
        type: "clinical_pearl",
        body: "Assess heart failure through its two faces: ask what the forward face can do — stairs, market walks — and what the backward face holds — pillows at night, wet cough, tight shoes by evening.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 52-year-old market trader who has had 'high blood' for six years — treated for two, then stopped when she felt well — now wakes at night gasping and sleeps on three pillows. Her ankles swell by evening, her shoes no longer fit, and climbing the stairs leaves her breathless.\n\nTell the story of how untreated hypertension brought her to this night.\n\nAnswer: Years of pumping against high pressure thickened her left ventricle into a wall that cannot relax or fill easily. Filling pressures rose behind the stiff ventricle, blood dammed back into the lungs, and fluid seeped into the air sacs — hence the night-time gasping and the pillows. Meanwhile the forward flow weakens: breathlessness on stairs, fatigue. This is hypertensive heart failure with pulmonary congestion. Sit her up, arrange urgent review, record vitals and daily weights, and restart education — the same silence that let the pressure climb for six years is the silence that broke the wall.",
      },
      {
        type: "memory_trick",
        body: "Atheroma in five words: **Hurt, LDL, Foam, Cap, Clot**. Hurt the lining, LDL enters, Foam cells build, a Cap forms — and one day it tears. The clot is the killer, not the narrowing.",
      },
      {
        type: "summary",
        body: "- Atherosclerosis: endothelial injury, LDL entry, foam cells, plaque with a fibrous cap.\n- Stable narrowing = angina on exertion, eased by rest; plaque rupture plus thrombosis = myocardial infarction.\n- Small soft plaques rupture as readily as tight ones — never reassure by narrowing size.\n- Chronic hypertension thickens the left ventricle: strong but stiff, prone to failure.\n- Rheumatic fever scars valves; heart failure shows forward (fatigue, low output) and backward (crackles, oedema, orthopnoea) faces.",
      },
    ],
    questions: [
      {
        topic: "Stable Angina",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient gets central chest heaviness only when climbing hills, always easing within minutes of rest. What is the mechanism?",
        options: [
          "A plaque has ruptured and acutely blocked the artery",
          "The mitral valve has been scarred by rheumatic fever",
          "A stable atherosclerotic plaque narrows the artery, limiting flow when demand rises",
          "Fluid is flooding the lungs from kidney failure",
        ],
        correctIndex: 2,
        explanation:
          "Exertional heaviness that eases with rest is stable angina — a fixed narrowing that cannot meet rising demand. Rupture would give pain at rest that does not settle; valve and fluid stories give different pictures.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Plaque Rupture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is a myocardial infarction more often caused by plaque rupture than by slow narrowing alone?",
        options: [
          "Narrowing never reduces flow enough to cause pain",
          "Rupture exposes the plaque core, platelets swarm, and thrombosis occludes the artery within minutes",
          "Rupture reverses blood flow through the heart",
          "Plaques rupture only in arteries already fully blocked",
        ],
        correctIndex: 1,
        explanation:
          "Infarction is thrombotic: the torn cap presents the lipid core, platelets pile on and the artery shuts. Narrowing itself gives the graded pattern of angina — the killer is the clot.",
        courseSlug: "pathology-2",
      },
      {
        topic: "LV Hypertrophy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How does chronic hypertension reshape the left ventricle?",
        options: [
          "It dilates the chamber into a thin, floppy bag at once",
          "It dissolves the myocardium gradually",
          "It leaves the ventricle unchanged until an infection strikes",
          "It thickens the wall — stronger but stiffer, prone to poor filling and eventual failure",
        ],
        correctIndex: 3,
        explanation:
          "Pumping against high resistance builds myocardial bulk — left ventricular hypertrophy — but the thick wall is stiff, poorly perfused and prone to arrhythmia and failure. The path is slow, not sudden.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Angina vs Infarction",
        front: "Stable angina versus infarction — one sentence each?",
        back: "Stable angina: a fixed narrowing gives exertional heaviness relieved by rest. Infarction: plaque rupture plus thrombosis occludes the artery — muscle dies minute by minute.",
      },
      {
        topic: "Hypertensive Heart",
        front: "Hypertension's path to heart failure?",
        back: "Pumping against high pressure for years thickens the left ventricle — stiff, poorly filling, poorly perfused — leading to congestion behind and weak output forward.",
      },
      {
        topic: "Heart Failure Faces",
        front: "The two faces of heart failure at your assessment?",
        back: "Forward: fatigue, breathlessness on effort, cold hands. Backward: orthopnoea, night cough, crackles, engorged neck veins, dependent oedema.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Cardiovascular Diseases (fact sheet)",
        year: "2021",
        url: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
        note: "Check for the latest update.",
      },
      {
        organization: "WHO",
        title: "Hypertension (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Organ System Pathology",
    lessonTitle: "Pathology of the Lungs and Airways",
    description:
      "Pneumonia, collapse, fibrosis and the post-operative chest — what disease looks like in lung tissue, and what your nursing prevents.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe consolidation in pneumonia and distinguish lobar from bronchopneumonia.",
      "Explain atelectasis and why post-operative patients develop it, with prevention measures.",
      "Distinguish obstructive from restrictive lung disease patterns with common examples.",
    ],
    tags: ["pneumonia", "atelectasis", "consolidation", "postoperative care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The lung is a sponge of millions of air sacs wrapped in capillaries — gas exchange happens across walls thinner than tissue paper. Disease attacks this design in a few repeating ways: airways narrowed, tissue stiffened, air sacs flooded or vessels blocked. Learn the patterns and the auscultation, the X-ray report and the nurse's 'deep breath' all connect.\n\nThis lesson walks the common patterns and lands on the one you will prevent most often — the post-operative chest.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pneumonia** floods alveoli with exudate — fluid, white cells and organisms — producing **consolidation**: a lung region that is airless and solid. Clinically: fever, fast breathing, dullness to percussion, crackles and bronchial breathing over the area, and rusty sputum. Lobar pneumonia fills a whole lobe (classically the young adult); bronchopneumonia scatters patches around the airways (the extremes of age and the bedridden). **Atelectasis** is collapse — alveoli shut by a mucus plug or by shallow, pain-guarded breathing, as after surgery and anaesthesia; the day-two post-operative fever with a dull base is often exactly this.\n\n**Obstructive disease** narrows airways so emptying is slow — asthma (reversible) and COPD, the legacy of biomass smoke and cigarettes in Ghana. **Restrictive disease** stiffens the tissue itself — fibrosis after tuberculosis, dusts or repeated inflammation, so the lung cannot inflate. **Pleural effusion** collects fluid between the lung and chest wall — a transudate in heart failure, an exudate in infection or TB. The severest pattern, diffuse alveolar damage (ARDS), floods both lungs with protein-rich fluid after sepsis or major trauma. Your post-operative nursing — deep breathing, supported cough, early walking, pain control — attacks atelectasis, the seedbed of pneumonia.",
      },
      {
        type: "clinical_pearl",
        body: "The post-operative fever with a dull base is the chest you can prevent: teach the deep breath before surgery, support the cough with a pillow after, and have the patient walking the same evening — unless the surgeon says otherwise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day 3 after a caesarean section, a woman has a temperature of 38.3 C, a respiratory rate of 26, and crackles with dullness at the left lung base. She has been lying almost flat since surgery, avoiding cough because 'it will burst the wound', and taking shallow breaths.\n\nWhat has her lung tissue done, and how do you break the cycle?\n\nAnswer: Her bases have collapsed into atelectasis — shallow, pain-guarded breathing and an unsupported cough let alveoli shut, and the collapsed segment is now heading toward pneumonia (post-op fever, fast breathing). Break the cycle: sit her upright, ensure adequate pain relief first (nothing works through pain), teach deep breathing and coughing splinted with a pillow, and get her walking today. Escalate if the fever or breathing fails to improve or purulent sputum appears — that is pneumonia needing antibiotics.",
      },
      {
        type: "memory_trick",
        body: "Post-operative fever has five W's, in order of the clock: **Wind** (atelectasis, pneumonia — check breath sounds first), **Water** (catheter and urine), **Walking** (DVT), **Wound** (site infection), **Wonder drugs** (medicine reaction). Days one and two whisper Wind — listen there first.",
      },
      {
        type: "summary",
        body: "- Pneumonia = consolidated, airless alveoli: dullness, crackles, bronchial breathing, rusty sputum.\n- Lobar pneumonia fills a lobe; bronchopneumonia scatters patches in the very young, old and bedridden.\n- Atelectasis is the classic day-2/3 post-op fever cause — prevent with deep breathing, supported cough, mobilisation, pain control.\n- Obstructive disease (asthma, COPD) empties slowly; restrictive disease (fibrosis) fills poorly.\n- Effusion: transudate in heart failure, exudate in infection; ARDS floods both lungs after sepsis or trauma.",
      },
    ],
    questions: [
      {
        topic: "Consolidation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What fills the alveoli to create consolidation in pneumonia?",
        options: [
          "Exudate — fluid, white cells and organisms replacing air",
          "Pure blood alone, as in infarction",
          "Tumour cells throughout both lungs",
          "Air trapped behind mucus plugs",
        ],
        correctIndex: 0,
        explanation:
          "Consolidation is airless, solid alveoli filled with exudate. Trapped air is the opposite problem (obstruction), and pure blood is infarction or bleed.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Post-op Fever",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A post-operative patient has a day-3 fever, fast breathing and dull crackles at both lung bases. Under the five W's, where do you look first?",
        options: [
          "Water — the urine and the catheter",
          "Wound — the surgical site",
          "Wind — the chest: atelectasis or pneumonia",
          "Walking — the calves for DVT",
        ],
        correctIndex: 2,
        explanation:
          "The five W's order post-operative fever by likelihood, and the chest leads early: this patient's fast breathing and dull crackles point straight at Wind. Water, Walking and Wound stay on the round, but later.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Lung Patterns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A retired farmer with decades of dust exposure and treated tuberculosis has lungs that 'cannot inflate'. Which pattern fits?",
        options: [
          "Obstructive — narrowed airways with slow emptying",
          "Consolidation — an airless lobe filled with exudate",
          "Effusion — fluid collecting in the pleural space",
          "Restrictive — fibrotic, stiff lungs that cannot inflate",
        ],
        correctIndex: 3,
        explanation:
          "Old scarring and dust have stiffened the tissue: the problem is filling the lungs, not emptying them. Obstruction belongs to asthma and COPD; consolidation and effusion are airspace and pleural stories.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Consolidation",
        front: "What is consolidation?",
        back: "Alveoli filled with exudate (fluid, cells, organisms) instead of air — dull to percussion, crackles and bronchial breathing, rusty sputum. The tissue pattern of pneumonia.",
      },
      {
        topic: "Atelectasis",
        front: "Why do post-operative patients get atelectasis?",
        back: "Anaesthesia, shallow pain-guarded breathing and immobile secretions let alveoli collapse — the classic early post-op fever. Deep breathing, supported cough, sitting up and walking prevent it.",
      },
      {
        topic: "Lung Disease Patterns",
        front: "Obstructive versus restrictive in one breath?",
        back: "Obstructive: airways narrowed, emptying slow (asthma, COPD). Restrictive: tissue stiff, filling poor (fibrosis, old TB). Both end in breathlessness — by different doors.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Pneumonia in Children (fact sheet)",
        year: "2022",
        url: "https://www.who.int/news-room/fact-sheets/detail/pneumonia",
        note: "Check for the latest update.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Organ System Pathology",
    lessonTitle: "Pathology of the Liver, Kidneys and Beyond",
    description:
      "The factory and the filter — cirrhosis with its backlog, glomerulonephritis versus nephrotic syndrome, and organs that fail quietly.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how chronic hepatitis leads to cirrhosis, portal hypertension and its downstream consequences.",
      "Distinguish nephritic from nephrotic glomerular patterns and describe acute tubular injury.",
      "Apply the bedside implications of lost liver synthetic function, including clotting failure.",
    ],
    tags: ["cirrhosis", "portal hypertension", "glomerulonephritis", "nephrotic syndrome"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The liver is a chemical factory; the kidneys are a tireless filter. Both fail with a strange politeness — symptoms arrive late and sideways: a bruise, a swollen face, a dark urine, a man who sleeps all day and wanders at night. Reading those whispers is the pathology skill of this lesson.\n\nIn Ghana, chronic hepatitis B, longstanding hypertension and diabetes quietly fill our wards with cirrhosis and chronic kidney disease — both largely preventable, both easy to miss early.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Chronic hepatitis (B is the classic), alcohol and toxins kill liver cells in patches; surviving tissue regenerates into **nodules** while fibrous scars criss-cross between them — **cirrhosis**. Blood from the gut meets the scars and dams up: **portal hypertension**. The backlog sends fluid into the abdomen (ascites), opens bypass veins at the oesophagus (**varices** — the bleed that fills a basin) and enlarges the spleen. The factory falters: jaundice appears, clotting factors stop being made — so bruises, gum bleeding and oozing puncture sites are liver reports in disguise — and failing detoxication lets ammonia cloud the brain: **encephalopathy**, with day sleep, night wandering and flapping hands.\n\nIn the kidneys, immune complexes settle in the glomeruli about two weeks after a streptococcal sore throat or skin infection — **nephritic syndrome**: smoky urine, rising pressure and reduced urine. A different chemistry gives **nephrotic syndrome**: the filter's charges fail and albumin pours out — heavy proteinuria (over 3.5 g/day) with facial swelling. Prolonged hypoperfusion or nephrotoxins (gentamicin, contrast media, some herbal preparations) injure the tubules — **acute tubular injury** — with oliguria and rising creatinine, often recoverable if caught. Longstanding hypertension and diabetes scar the filter slowly — chronic kidney disease — and the scarred kidney cannot release erythropoietin, so anaemia joins the late picture.",
      },
      {
        type: "clinical_pearl",
        body: "In cirrhosis, bleeding gums and easy bruises are not small problems — they announce that clotting factor production has fallen. Handle the patient gently, avoid unnecessary injections, and report every bleed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 9-year-old boy is brought to the clinic with a puffy face for three days, urine the colour of strong tea, and headache. Two weeks ago he finished treatment for an infected sore on his leg. His blood pressure today is 140/92, and the urine dipstick shows blood 2+ and protein 1+.\n\nWhich kidney pattern is this, and what told you?\n\nAnswer: Nephritic syndrome — post-infectious glomerulonephritis. The story is the teacher: a streptococcal skin infection, a two-week gap, then smoky urine (blood), hypertension (high for a child), facial puffiness and mild protein. The immune response to the infection has settled in his glomeruli, inflaming the filter. Refer for review, chart strict fluid balance and daily weight, monitor the pressure and urine output, and educate the family — most children recover fully, but follow-up matters. (Heavy protein with little blood and normal pressure would instead speak nephrotic.)",
      },
      {
        type: "memory_trick",
        body: "Nephritic versus nephrotic: **ITIS is a tempest** — blood in the urine, pressure up, urine down. **OSIS is an overflow** — protein pours out, albumin falls, the body swells. ITIS storms; OSIS soaks.",
      },
      {
        type: "summary",
        body: "- Cirrhosis: chronic injury, regenerating nodules and fibrosis lead to portal hypertension.\n- The backlog of portal hypertension: ascites, oesophageal varices, splenomegaly.\n- The failing liver factory: jaundice, lost clotting factors (easy bruising), encephalopathy from ammonia.\n- Nephritic (post-streptococcal): smoky urine, hypertension, reduced volume — a storm in the filter.\n- Nephrotic: albumin pours out (over 3.5 g/day), face and body swell.\n- Acute tubular injury follows hypoperfusion or nephrotoxins; chronic disease scars slowly and anaemia follows.",
      },
    ],
    questions: [
      {
        topic: "Portal Hypertension",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A man with cirrhosis bleeds from oesophageal varices because of which upstream problem?",
        options: [
          "His platelets have all become white cells",
          "His lungs are pushing blood downward",
          "The spleen is pumping blood too fast",
          "Portal hypertension — scarred liver tissue dams blood and opens bypass veins",
        ],
        correctIndex: 3,
        explanation:
          "Varices are the pressure-relief valves of portal hypertension: when scar blocks flow through the liver, vessels at the oesophagus enlarge and can bleed catastrophically. The plumbing explains the bleed.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Nephrotic Syndrome",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set of findings points to nephrotic rather than nephritic syndrome?",
        options: [
          "Smoky urine with hypertension two weeks after a skin infection",
          "Proteinuria over 3.5 g/day with facial oedema, little blood and normal pressure",
          "Severe loin pain with gravel in the urine",
          "Bedwetting only at night",
        ],
        correctIndex: 1,
        explanation:
          "Nephrotic syndrome is the overflow picture: the filter loses its charge barrier, albumin pours out and the body swells. Blood plus hypertension after infection is the nephritic storm instead.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Acute Tubular Injury",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient who was hypotensive has been on gentamicin for five days; her urine output is falling and creatinine rising. What is the likely lesion?",
        options: [
          "Nephrotic syndrome from charge-barrier loss",
          "Bilateral stones blocking both ureters",
          "Acute tubular injury — hypoperfusion plus a nephrotoxic insult to the tubules",
          "Liver failure withdrawing blood from the kidneys",
        ],
        correctIndex: 2,
        explanation:
          "Gentamicin is a classic tubule poison, and shock primes the same tubules — together they produce oliguria with rising creatinine, often recoverable if the drug is stopped and perfusion restored.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Portal Hypertension",
        front: "The three consequences of portal hypertension?",
        back: "Ascites (fluid in the abdomen), varices (opened bypass veins at the oesophagus — the dangerous bleed) and splenomegaly.",
      },
      {
        topic: "Liver Failure Signs",
        front: "Two bedside clues that liver synthetic function is failing?",
        back: "Easy bruising, gum bleeding and oozing puncture sites (clotting factors not made), and deepening jaundice. Report every bleed; avoid unnecessary injections.",
      },
      {
        topic: "Post-streptococcal GN",
        front: "The two-week rule of post-streptococcal glomerulonephritis?",
        back: "Sore throat or skin infection, then about two weeks of latency before smoky urine, hypertension and puffiness — immune complexes settling in the glomeruli.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Hepatitis B (fact sheet)",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b",
        note: "Check for the latest update.",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Systemic Disease",
    lessonTitle: "Sepsis and Systemic Inflammation",
    description:
      "Cytokine storms, leaky vessels, paradoxical clotting — the biology that turns one infection into whole-body disease.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the inflammatory cascade from infection trigger to systemic mediator release.",
      "Explain how cytokines produce vasodilation, capillary leak, myocardial depression and DIC in sepsis.",
      "Apply early sepsis recognition using bedside signs that precede hypotension, including the hour-one actions.",
    ],
    tags: ["sepsis", "cytokines", "dic", "puerperal sepsis", "septic shock"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A wound infection is a local quarrel. Sepsis is when the quarrel spills into the whole body: the immune system's own chemicals — meant to be precise — pour out in floods, and the body's pipes, pump and clotting system all get caught in the crossfire. It is the commonest final pathway to the ICU.\n\nYour role is early recognition, because sepsis rewards speed like nothing else — antibiotics within the first hour change survival. In Ghanaian practice the sources are familiar: pneumonia, wound and puerperal infection, urinary infection, and the newborn's umbilical stump.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The trigger is usually bacterial: Gram-negative **endotoxin** in the wall, or Gram-positive **exotoxins** dumped into tissue. Immune cells sound the alarm with cytokines — TNF, interleukin 1 and 6 — the body's fire brigade. But the flood of mediators becomes the disaster. **Vasodilation** opens the pipes: early the patient is warm and flushed with a bounding pulse, then pressure falls. **Capillary leak** pours fluid into tissues, so circulating volume collapses even as the patient swells. **Myocardial depression** weakens the pump's squeeze. And **DIC** — disseminated intravascular coagulation — throws microclots everywhere while consuming the clotting factors, so the patient clots and bleeds at once.\n\nThe definition you need: sepsis is life-threatening organ dysfunction from a dysregulated response to infection. Look for the quiet markers — new confusion, respiratory rate 22 or more, urine under 0.5 mL/kg/hour, mottled skin, falling pressure (blood pressure 90 systolic or less after fluids defines septic shock). Progression is measured in hours, not days. Your hour-one bundle at ward level: call for help, take cultures if it does not delay, oxygen, IV access, fluids per protocol, and antibiotics — the prescriber's order guided by your early report is what makes speed real.",
      },
      {
        type: "clinical_pearl",
        body: "Sepsis whispers before it shouts: new confusion, a faster breath, urine that stops — all before the pressure falls. When the blood pressure finally drops, the whispering is over.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman delivered at home five days ago and is brought to your CHPS compound with fever of 39.2 C, foul-smelling lochia, a respiratory rate of 28, and confusion — she cannot say the year. Her blood pressure is 94/60 and her pulse 116.\n\nName the process and your hour-one actions.\n\nAnswer: Puerperal sepsis, already tipping into septic shock with organ dysfunction — confusion, fast breathing, low pressure. Hour one: call the ambulance and the district hospital, secure IV access, begin fluids per protocol, give oxygen, arrange the first antibiotic dose with the prescriber (transfer must not cancel it), obtain cultures before antibiotics only if this causes no delay, and monitor vitals, urine and consciousness continuously. Retained products are the likely source — she needs definitive care, and your speed starting treatment and transfer is the difference. Chart the timeline: what you found, what you did, when.",
      },
      {
        type: "memory_trick",
        body: "Sepsis burns the body in four strokes: **Fire** (cytokines), **Flood** (leaky capillaries), **Clot** (DIC microclots consuming factors), **Collapse** (vasodilating pipes). Remember the burning flood that clots and collapses.",
      },
      {
        type: "summary",
        body: "- Sepsis = life-threatening organ dysfunction from a dysregulated response to infection.\n- Mediators (TNF, IL-1, IL-6) drive vasodilation, capillary leak, myocardial depression and DIC.\n- The DIC paradox: microclots everywhere AND bleeding — clotting factors consumed.\n- Early signs arrive before hypotension: new confusion, respiratory rate 22 or more, falling urine, mottling.\n- Hour-one: call, cultures if no delay, oxygen, IV fluids, antibiotics — transfer must not delay the antibiotic.\n- Common Ghanaian sources: pneumonia, puerperal sepsis, wounds, urine — and the newborn cord stump.",
      },
    ],
    questions: [
      {
        topic: "Sepsis Definition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the modern definition of sepsis?",
        options: [
          "Any fever with a positive blood culture",
          "Bacteria present in normally sterile tissues without symptoms",
          "Life-threatening organ dysfunction caused by a dysregulated host response to infection",
          "A fall in blood pressure caused by bleeding",
        ],
        correctIndex: 2,
        explanation:
          "Sepsis is defined by the disordered response and the organ injury it causes — not merely by bacteria or fever, and clearly not by haemorrhage, which is a different emergency.",
        courseSlug: "pathology-2",
      },
      {
        topic: "DIC",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the septic patient both clot and bleed?",
        options: [
          "DIC consumes clotting factors in widespread microclots, leaving too little for real haemostasis",
          "Vasodilation physically washes clots away",
          "Antibiotics destroy platelets directly",
          "The liver manufactures too many clotting factors at once",
        ],
        correctIndex: 0,
        explanation:
          "Disseminated coagulation throws microclots into the circulation while using up platelets and factors — so the patient clots and bleeds simultaneously. It is consumption, not washing.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Early Sepsis Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which group of bedside signs belongs to sepsis BEFORE the blood pressure falls?",
        options: [
          "A slow pulse with deep, sighing breathing",
          "New confusion, respiratory rate 28, falling urine output and warm flushed skin",
          "Cold dry skin with a normal urine stream",
          "Only a rise in blood pressure with a slow pulse",
        ],
        correctIndex: 1,
        explanation:
          "Before pressure falls, sepsis whispers through the organs it is sacrificing — brain, lungs, kidneys — while vasodilation keeps the skin warm. Waiting for hypotension means waiting too long.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Sepsis Pathology",
        front: "The four strokes of sepsis pathology?",
        back: "Fire (cytokine storm), Flood (capillary leak), Clot (DIC — microclots consuming factors), Collapse (vasodilation with falling pressure).",
      },
      {
        topic: "DIC",
        front: "The DIC paradox in one line?",
        back: "Widespread microclots consume platelets and clotting factors, so the patient simultaneously clots and bleeds — oozing puncture sites, bruising.",
      },
      {
        topic: "Hour-one Bundle",
        front: "The hour-one sepsis actions at ward level?",
        back: "Call for help, cultures if they do not delay, oxygen, IV access, protocol fluids, first antibiotic dose, continuous monitoring of vitals, urine and consciousness.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Sepsis (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
      },
      {
        organization: "Ghana Health Service",
        title: "National Policy and Guidelines for Infection Prevention and Control",
        year: "2015",
      },
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Systemic Disease",
    lessonTitle: "When Immunity Attacks Itself",
    description:
      "Tolerance lost — autoantibodies, the four hypersensitivity types, and friendly fire you can prevent with one injection after delivery.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain how loss of immune tolerance produces autoimmune disease, with SLE as the example.",
      "Describe the four Gell-and-Coombs hypersensitivity types with clinical examples from ward practice.",
      "Apply knowledge of Type II disease to explain anti-D prophylaxis after an Rh-mismatched delivery.",
    ],
    tags: ["autoimmunity", "hypersensitivity", "lupus", "anti-d", "allergy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The immune system's deepest skill is not attacking — it is knowing what to leave alone. Every day it meets your own proteins and files them under 'self'. When that filing fails, the army turns on its own citizens: that is autoimmunity. When it over-reacts to outside guests in one of four repeatable ways, that is hypersensitivity.\n\nBoth live on your ward: the young woman with joint pains and a butterfly rash, the patient whose next penicillin dose could kill, the newborn anaemic because its mother's memory attacked its blood. Each is friendly fire, and each has a lesson for you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Autoimmunity** needs lost tolerance plus a trigger — genetics, hormones (why SLE favours young women), sunlight, infections. Antibodies and cells attack self-tissue: SLE strikes joints, skin, kidneys and blood cells, flaring with sun and stress; type 1 diabetes destroys the beta cells; autoimmune thyroid disease burns hot or cold. These diseases run relapses and remissions — 'she was fine last month' is part of the disease, not a contradiction.\n\n**Hypersensitivity** repeats four patterns (Gell and Coombs). **Type I, immediate**: IgE arms mast cells — allergy. Minutes after penicillin, a bee sting or groundnuts: rash, wheeze, swollen lips, anaphylaxis; each exposure tends to be worse than the last. **Type II, cytotoxic**: antibodies attack cells directly — transfusion mismatch haemolysis, and haemolytic disease of the newborn, where an Rh-negative mother makes anti-D against her next baby. **Type III, immune complexes**: antigen-antibody clusters settle in tissues — post-streptococcal glomerulonephritis. **Type IV, delayed**: T-cells arrive over hours to days — contact dermatitis from latex or soap, the Mantoux reading, graft rejection. The nurse's bedside duties live in Type I (allergy history, red-flag documentation) and Type II (anti-D within 72 hours).",
      },
      {
        type: "clinical_pearl",
        body: "A rash after penicillin is history that must be written in red on the chart and asked aloud before every dose. Type I reactions escalate — today's itch may be tomorrow's anaphylaxis.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An Rh-negative woman delivers a healthy Rh-positive baby at your facility. She has no living children and hopes for more. Anti-D immunoglobulin is in the fridge.\n\nWhy does this injection protect her next baby, and by when must it be given?\n\nAnswer: During birth, some of the baby's Rh-positive cells entered her circulation. Her immune system, meeting the unfamiliar D antigen, is primed to build antibodies — and memory means the next Rh-positive baby would be attacked in the womb (haemolytic disease of the newborn, a Type II cytotoxic reaction). Anti-D given within 72 hours mops up the fetal cells before she can mount a lasting response, so the memory is never written. Document the Rhesus status, give within the window per protocol, and record it clearly — the protection of her future babies depends on this chart entry.",
      },
      {
        type: "memory_trick",
        body: "The four types as a speed dial: **1 is minutes (IgE allergy), 2 attacks cells (transfusion mismatch, anti-D), 3 aggregates settle (complexes in the kidney), 4 is a day late and angry (T-cells: latex, Mantoux)**. Fast to slow, antibody to cell.",
      },
      {
        type: "summary",
        body: "- Autoimmunity = lost tolerance: SLE, type 1 diabetes, thyroid disease — relapse and remission.\n- Type I: IgE allergy, minutes, escalates with each exposure — anaphylaxis is the emergency.\n- Type II: antibodies attack cells — transfusion mismatch, haemolytic disease of the newborn.\n- Type III: immune complexes settle — post-streptococcal glomerulonephritis.\n- Type IV: delayed T-cells — latex contact dermatitis, Mantoux, graft rejection.\n- Anti-D within 72 hours of an Rh-positive delivery prevents Type II disease in the next baby.",
      },
    ],
    questions: [
      {
        topic: "Hypersensitivity Types",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient develops urticaria, wheeze and hypotension minutes after a penicillin dose. Which hypersensitivity type is this?",
        options: [
          "Type II — cytotoxic antibody attack on cells",
          "Type I — IgE-mediated immediate hypersensitivity",
          "Type III — immune complex deposition",
          "Type IV — delayed T-cell reaction",
        ],
        correctIndex: 1,
        explanation:
          "Urticaria, wheeze and hypotension within minutes of a drug is textbook Type I — IgE-triggered mast-cell release. Cytotoxic, complex and delayed patterns run on different clocks.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Anti-D Prophylaxis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must anti-D be given to an Rh-negative mother within 72 hours of delivering an Rh-positive baby?",
        options: [
          "It clears fetal Rh-positive cells before her immune system writes lasting anti-D memory that would attack future babies",
          "It treats the newborn's anaemia directly through breast milk",
          "It raises the mother's platelets after delivery bleeding",
          "It prevents infection of the umbilical stump",
        ],
        correctIndex: 0,
        explanation:
          "Anti-D is mopping-up: passively given antibody removes fetal cells before sensitisation. Without it, memory antibodies would haemolyse the NEXT Rh-positive baby in the womb — a Type II disease.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Contact Dermatitis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife develops itchy, red, blistered hands a day after wearing gloves — worse each month. Which type and trigger?",
        options: [
          "Type I immediate anaphylaxis to latex proteins",
          "Type II cytotoxic attack on her red cells",
          "Type III immune complexes settling in the hands",
          "Type IV delayed contact dermatitis from latex or glove chemicals",
        ],
        correctIndex: 3,
        explanation:
          "Itch, redness and blistering a day after glove contact is delayed T-cell inflammation — Type IV. Immediate urticaria, lip swelling or airway involvement would signal Type I latex allergy instead, and that is the one that escalates.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "Gell and Coombs",
        front: "The four hypersensitivity types, one example each?",
        back: "I — immediate IgE allergy (penicillin anaphylaxis). II — antibodies on cells (transfusion mismatch, haemolytic disease of the newborn). III — immune complexes settle (post-streptococcal GN). IV — delayed T-cells (latex contact dermatitis, Mantoux).",
      },
      {
        topic: "Type I Escalation",
        front: "Why do Type I reactions worsen with each exposure?",
        back: "Each reaction produces more IgE memory. The first exposure may only sensitise; the next can be urticaria; the next anaphylaxis. Chart every drug rash in red and ask before every dose.",
      },
      {
        topic: "Anti-D",
        front: "What does anti-D actually prevent?",
        back: "Rh-negative mother sensitisation after an Rh-positive delivery. Given within 72 hours, it clears fetal cells before lasting anti-D memory forms — protecting the NEXT Rh-positive baby from haemolytic disease (Type II).",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "pathology-2",
    moduleTitle: "Systemic Disease",
    lessonTitle: "Multi-Organ Failure: The Cascade",
    description:
      "How one failing organ drags the rest — MODS physiology, the domino order, and the ward-level surveillance that stops the fall.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define multi-organ dysfunction syndrome and distinguish primary from secondary MODS.",
      "Explain the cascade by which hypoperfusion, inflammation and gut barrier failure propagate organ failure.",
      "Apply ward-level surveillance — oxygen needs, urine output, clotting and mentation — to detect the cascade early.",
    ],
    tags: ["mods", "organ failure", "ards", "cascade", "critical care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Intensive care exists largely for one pattern: one organ failing, then another, then another — each failure loading the next. Multi-organ dysfunction syndrome (MODS) is the final common pathway of severe infection, trauma and shock, and it is why the sickest patient you will ever transfer is rarely sick from only one thing.\n\nYou cannot run the ICU from the ward, but you are the one who sees the cascade begin. Two or more organs failing together is MODS — and the physiology explains exactly which alarms to watch.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Define it precisely: MODS is altered function of two or more organs in an acutely ill patient, such that routine support is no longer enough. **Primary MODS** is direct injury — the crushed chest that fails on day one. **Secondary MODS** arrives days later, distant from the original insult, driven by the systemic inflammatory response — sepsis is its great engine. The cascade runs in vicious circles: hypoperfusion and cytokines starve and injure organs; injured organs release more mediators; the gut's barrier breaks under ischaemia and bacteria cross into the blood ('translocation'), fanning the fire. A primed patient — the 'first hit' of trauma or surgery — can be tipped by a 'second hit', classically a hospital-acquired infection.\n\nThe dominoes have an order. The **lungs** fall first and loudest — the entire cardiac output passes their vast capillary bed, so circulating mediators land there directly: rising oxygen need, stiff flooded lungs (ARDS). The **kidneys** answer next — urine falls, creatinine climbs. Then the **liver**, **coagulation** (the DIC slide from clotting to bleeding), the **brain** (confusion, drowsiness) and finally the **heart** itself, depressed by the same mediators. Your ward surveillance is simply the domino list: hourly urine, oxygen requirement, consciousness, platelet trend — and the discipline to report a trend rather than a number.",
      },
      {
        type: "clinical_pearl",
        body: "Report trends, not snapshots: the saturation needing more oxygen each shift, the urine fading each hour, the patient who is 'just a bit drowsier'. The cascade announces itself in slopes, not cliffs.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 70-year-old man admitted with severe pneumonia is on day 3 of antibiotics. Overnight his oxygen requirement rose from 2 to 6 litres, his urine output fell to 20 mL per hour, he is mildly confused, and the morning results show his platelets have halved since admission.\n\nWhat is unfolding, and what should have been — and still can be — done?\n\nAnswer: The cascade of MODS. Despite treatment, systemic inflammation is pulling organs down in the classic order: lungs (rising oxygen need), kidneys (failing urine), brain (confusion) and coagulation (falling platelets — DIC beginning). He belongs in a higher level of care: escalate for ICU review immediately. What can still be done: treat the sepsis fully (source control, right antibiotics), restore perfusion carefully, support each organ, protect the kidneys by avoiding nephrotoxins, and prevent the next hit — infection control, minimal unnecessary lines. Ward surveillance caught it; now speed decides the dominoes.",
      },
      {
        type: "memory_trick",
        body: "The dominoes of MODS in order: **Lungs, Kidneys, Liver, Blood, Brain, Heart** — the body's A-list falls from the chest downward. Watch the list hourly and you will hear each domino before it lands.",
      },
      {
        type: "summary",
        body: "- MODS = two or more organs failing together, beyond what routine support can handle.\n- Primary (direct injury) versus secondary (SIRS or sepsis driven, days later) — the second is the sneaky one.\n- Vicious circles: hypoperfusion plus cytokines injure organs; injured organs release more; gut translocation fans the fire.\n- Domino order: lungs (ARDS), then kidneys (oliguria), liver, coagulation (DIC), brain, heart.\n- Ward surveillance: hourly urine, oxygen trend, consciousness, platelet trend — report slopes, not snapshots.\n- Prevent the second hit: infection control, source control, avoid nephrotoxins, careful perfusion.",
      },
    ],
    questions: [
      {
        topic: "MODS Definition",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What defines multi-organ dysfunction syndrome?",
        options: [
          "Any two diseases present in the same patient",
          "Failure of the heart alone",
          "An infection that has entered the bloodstream",
          "Altered function of two or more organs in an acutely ill patient, needing support beyond routine care",
        ],
        correctIndex: 3,
        explanation:
          "MODS is organs failing together — not two coexisting diseases, not single-organ failure, and not simply bacteraemia. It is the cascade, defined by how many organs fail and the support they need.",
        courseSlug: "pathology-2",
      },
      {
        topic: "ARDS First Domino",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do the lungs usually fail first in MODS?",
        options: [
          "The lungs store the body's cytokines for later release",
          "Lung tissue is the only tissue without mitochondria",
          "The entire cardiac output passes through the lungs' vast capillary bed, so circulating inflammatory mediators injure them directly",
          "The brain directs all inflammatory injury to the lungs first",
        ],
        correctIndex: 2,
        explanation:
          "Every drop of blood passes the pulmonary capillaries, and in systemic inflammation that means every mediator lands there — hence stiff, flooded lungs (ARDS) as the first domino.",
        courseSlug: "pathology-2",
      },
      {
        topic: "Two-hit Model",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A trauma patient stabilises, then deteriorates sharply on day 5 when a wound infection sets in. What does this illustrate?",
        options: [
          "Primary MODS from direct lung injury at the scene",
          "A completely unrelated new illness",
          "Normal healing that needs no escalation",
          "The two-hit model — the first insult primed the inflammatory system and the infection tipped it into cascade",
        ],
        correctIndex: 3,
        explanation:
          "Apparent stabilisation followed by day-5 deterioration on infection is the two-hit story: the primed inflammatory system over-responds to the second insult. Recognising it demands escalation, not watchful waiting.",
        courseSlug: "pathology-2",
      },
    ],
    flashcards: [
      {
        topic: "MODS Types",
        front: "Primary versus secondary MODS?",
        back: "Primary: direct injury to the organ (a crushed chest failing on day one). Secondary: distant, days later, driven by systemic inflammation or sepsis — the sneaky one that follows apparent stabilisation.",
      },
      {
        topic: "Domino Order",
        front: "The domino order of organ failure in MODS?",
        back: "Lungs first (rising oxygen need — ARDS), then kidneys (falling urine), liver, coagulation (DIC), brain, heart. Watch the list hourly.",
      },
      {
        topic: "Two-hit Model",
        front: "The two-hit model of MODS?",
        back: "The first hit (trauma, surgery, shock) primes inflammation; a second hit — classically a hospital-acquired infection — tips the primed patient into cascade. Prevention: infection control and source control.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Robbins Basic Pathology (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Porth's Pathophysiology: Concepts of Altered Health States (10th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "WHO",
        title: "Sepsis (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drug Classes You'll Meet Everywhere",
    lessonTitle: "Antimicrobials: Fighting the Invaders",
    description:
      "The antibiotic families by their targets — walls, factories, blueprints and vitamins — and the stewardship that keeps them working for the next patient.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Classify the major antimicrobial families by their target in the bacterial cell, with examples you will chart.",
      "Explain bactericidal versus bacteriostatic action and why the distinction matters in the immunosuppressed.",
      "Apply antimicrobial stewardship at ward level, including culture-before-dose and completing courses.",
    ],
    tags: ["antibiotics", "stewardship", "resistance", "antimicrobials"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Bacteria are small, but they depend on the same four things any builder does: a wall, a factory (the ribosomes), blueprints (DNA) and a vitamin supply (folate). Nearly every antibiotic you will chart attacks one of those four — learn the four targets and the whole antibiotic cupboard organises itself.\n\nThen there is the other half of the job: keeping the drugs working. Every unnecessary course of antibiotics trains the bacteria that survive, and resistance is now a global emergency. Stewardship is not bureaucracy; it is saving the last working drug for the patient who will need it next year.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Walls**: penicillins (amoxicillin, the ward staple) and cephalosporins (ceftriaxone for severe sepsis and meningitis) stop the cell wall being built — bactericidal. **Factories**: aminoglycosides (gentamicin — Gram-negative cover, with renal and hearing checks), macrolides (erythromycin, azithromycin — the penicillin-allergic patient's friend) and tetracyclines (avoid in pregnancy and children — they stain developing teeth and bone). **Blueprints**: fluoroquinolones such as ciprofloxacin block DNA copying; metronidazole, the anaerobe and amoebiasis specialist, attacks DNA by another door. **Vitamins**: cotrimoxazole jams folate assembly — a mainstay for urinary infection and prophylaxis in HIV. Bactericidal kills; bacteriostatic stops growth and lets the immune system finish — in the immunosuppressed, cidal matters.\n\n**Stewardship** at your level: culture before the first dose wherever possible (the sample taken after the first dose may name nothing), complete the prescribed course — stopping early breeds survivors — and never share, hoard or buy antibiotics without prescription, the chemical-seller habit that drives resistance in Ghana. Keep the history alive: ask about previous rashes (penicillin allergy is Type I, and it escalates) and record it in red. Match narrow-spectrum to known bugs, broad-spectrum to the genuinely sick while awaiting results — then narrow down.",
      },
      {
        type: "clinical_pearl",
        body: "Take the culture before the first antibiotic dose — thirty minutes of patience at the start can name the bug, its sensitivities and the right drug for the whole course. After the first dose, the evidence begins to fade.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother arrives at the CHPS compound with a feverish two-year-old. She has already given him 'half a course' of amoxicillin bought from the chemical seller two weeks ago, kept the rest, and now wants you to finish it. The child's malaria test is negative on RDT.\n\nWhat is the harm in the story, and what do you counsel?\n\nAnswer: The harm is double: a partial course is the perfect resistance trainer — it kills the weak bacteria and educates the strong — and leftover antibiotics are tomorrow's misused dose: wrong drug, wrong dose, wrong duration, treating a viral illness. Assess the child fully (danger signs, source of fever), report to the prescriber, and use whatever cultures and tests are available to direct treatment rather than guess. Counsel the mother respectfully: antibiotics are not for every fever, never shared or half-finished — and the malaria test proved the value of testing before treating; the same discipline applies to antibiotics.",
      },
      {
        type: "memory_trick",
        body: "The four doors antibiotics break: **W-F-B-V — Wall, Factory, Blueprint, Vitamins.** Penicillins and cephalosporins break the Wall; gentamicin and macrolides jam the Factory; ciprofloxacin and metronidazole shred the Blueprint; cotrimoxazole starves the Vitamins. Four doors, and the whole cupboard.",
      },
      {
        type: "summary",
        body: "- Antibiotics attack four targets: cell WALL (penicillins, cephalosporins), protein FACTORY (gentamicin, macrolides, tetracyclines), DNA BLUEPRINT (ciprofloxacin, metronidazole), FOLATE (cotrimoxazole).\n- Bactericidal kills; bacteriostatic halts growth — the immune system finishes the job.\n- Tetracyclines stain growing teeth and bone: avoid in children and pregnancy.\n- Culture before the first dose; complete every course; never share or hoard antibiotics.\n- A partial course breeds resistance — it kills the weak and teaches the strong.\n- Narrow when you know the bug, broad only while awaiting results; some drugs are shared property.",
      },
    ],
    questions: [
      {
        topic: "Antibiotic Classes",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which antimicrobial is the classic choice for anaerobic infections and amoebiasis?",
        options: [
          "Amoxicillin",
          "Gentamicin",
          "Metronidazole",
          "Ciprofloxacin",
        ],
        correctIndex: 2,
        explanation:
          "Metronidazole is the anaerobe specialist — abdominal and pelvic sepsis, trichomoniasis, amoebiasis. The others cover aerobes and do not cross into amoebic disease.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Tetracycline Cautions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should tetracyclines be avoided in pregnancy and young children?",
        options: [
          "They bind to developing teeth and bone, causing permanent staining",
          "They cause immediate anaphylaxis in all children",
          "They are inactive against every childhood bacterium",
          "They raise blood pressure dangerously in children",
        ],
        correctIndex: 0,
        explanation:
          "Tetracyclines bind calcium in growing teeth and bone, leaving grey-brown permanent staining — hence avoidance in pregnancy and young children. No anaphylaxis specificity or blood pressure story applies.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Stewardship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the stewardship reason for taking cultures before the first antibiotic dose?",
        options: [
          "Cultures taken after dosing grow faster and cost more",
          "The first dose begins suppressing the organism, so later samples may not grow or give sensitivities",
          "It is only a laboratory billing requirement",
          "Antibiotics kill the culture medium itself",
        ],
        correctIndex: 1,
        explanation:
          "Even one dose pressures the bacteria: growth becomes sparse and sensitivity testing loses its map. The sample taken before the first dose names the bug and steers the whole course.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "Antibiotic Targets",
        front: "W-F-B-V — match the doors to the drugs?",
        back: "Wall: penicillins, cephalosporins. Factory (ribosomes): gentamicin, macrolides, tetracyclines. Blueprint (DNA): ciprofloxacin, metronidazole. Vitamins (folate): cotrimoxazole.",
      },
      {
        topic: "Resistance",
        front: "Why does stopping antibiotics early breed resistance?",
        back: "A partial course kills susceptible bacteria and leaves the hardy ones to multiply — it kills the weak and teaches the strong. Complete the prescribed course.",
      },
      {
        topic: "Cidal vs Static",
        front: "Bactericidal versus bacteriostatic — and why it matters?",
        back: "Cidal kills outright; static halts growth and relies on immunity to finish. In the immunosuppressed, neutropenic or deeply septic patient, cidal drugs matter more.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Antimicrobial Resistance (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Check for the latest edition and facility protocols.",
      },
      {
        organization: "Elsevier",
        title: "Rang and Dale's Pharmacology (9th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "pharmacology-2",
    moduleTitle: "Drug Classes You'll Meet Everywhere",
    lessonTitle: "Analgesics: The Pain Toolbox",
    description:
      "Paracetamol to morphine — matching the tool to the pain, climbing the WHO ladder safely, and the checks that keep opioids from becoming the emergency.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the main analgesic classes — paracetamol, NSAIDs and opioids — with actions and key cautions.",
      "Explain the WHO analgesic ladder and its principles: by mouth, by the clock, by the ladder.",
      "Apply pre-dose safety checks for opioids, including respiratory rate and sedation monitoring.",
    ],
    tags: ["analgesia", "pain ladder", "opioids", "paracetamol", "nsaids"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pain relief is not one drug, it is a toolbox — and the craft is matching the tool to the pain. A headache, a fractured femur and a sickle crisis do not all need the same spanner, and the strongest tool has the sharpest edge. This lesson walks the toolbox from gentle to powerful, and the safety rails that let you use it confidently.\n\nThe organising map is the WHO pain ladder, born in cancer care and working everywhere: step one for mild pain, step two for moderate, step three for severe — adding and climbing rather than leaping.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Paracetamol** — the first rung and the safest in pregnancy and breastfeeding: mild pain and fever, usual adult maximum 4 g a day, and watch for hidden paracetamol in combination products, the commonest route of accidental overdose and liver failure. **NSAIDs** — ibuprofen, diclofenac: the anti-inflammatory rung for injuries, cramps and joint pain; the cautions are stomach irritation and bleeding, kidney stress, asthma flare and avoiding the third trimester of pregnancy. **Opioids** — step two's codeine (often combined with paracetamol, so remember the ceiling that comes with it) and step three's morphine and pethidine for severe and labour pain: powerful, with side effects to manage — constipation (prevent it: fluids, fibre, movement), nausea, sedation and the overdose sign: **respiratory depression**.\n\nThe ladder's three principles: **by mouth** wherever possible, **by the clock** (regular dosing for continuous pain, not chasing it) and **by the ladder** — step up when a rung fails, adding rather than replacing, and combining paracetamol with an NSAID for additive effect. Assess before and after: a pain score before giving and 30-60 minutes after giving closes the loop and shows whether the tool fit. Adjuncts complete the craft — gabapentin for burning nerve pain, ice, positioning — and the non-drug tools you already own: presence, explanation and a warm hand.",
      },
      {
        type: "clinical_pearl",
        body: "Count the respiratory rate and look at the eyelids before every opioid dose. A rate under 12, or a patient drifting off mid-sentence, means the drug is climbing past analgesia into danger — withhold, call, stimulate, and be ready with oxygen and the naloxone protocol.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The evening after a laparotomy, a woman has morphine charted for severe pain. When you come to give the next dose she is drowsy, answers slowly, and her respiratory rate is 9 breaths per minute — it was 16 this morning. Her pain is now mild.\n\nWhat has happened, and what are your actions?\n\nAnswer: Opioid-induced respiratory depression — sedation with a respiratory rate under 12 is the warning that analgesia has crossed into overdose territory. Withhold the next dose, call the prescriber immediately, keep her stimulated and observed (airway, oxygen, saturation monitoring), and expect the doctor to consider naloxone per protocol — which reverses the opioid, and the analgesia, rapidly. Thereafter reassess pain and sedation before every dose, lengthen intervals if she is drifting, and step down the ladder as her pain settles. The respiratory rate before every dose is the habit that keeps this scene from being worse.",
      },
      {
        type: "memory_trick",
        body: "The ladder's three B's: **By mouth, By the clock, By the ladder.** And the opioid's three watch-words: **Breath, Blink, Bowels** — count the respirations, watch the eyelids for sedation, prevent the constipation before it starts.",
      },
      {
        type: "summary",
        body: "- Match the tool to the pain: paracetamol (mild, safest in pregnancy, max 4 g/day), NSAIDs (inflammatory pain; stomach, kidney, third-trimester cautions), opioids (severe pain).\n- WHO ladder: step up when a rung fails, adding rather than replacing; paracetamol plus NSAID is additive.\n- By mouth, by the clock, by the ladder — regular dosing for continuous pain.\n- Manage opioid side effects: prevent constipation, treat nausea, watch sedation.\n- Pre-dose check for every opioid: respiratory rate (under 12 means withhold and call) and sedation level.\n- Assess pain before and 30-60 minutes after every analgesic dose.",
      },
    ],
    questions: [
      {
        topic: "Analgesics in Pregnancy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A pregnant woman at 12 weeks asks what she can safely take for a mild headache. First choice?",
        options: [
          "Paracetamol at usual doses",
          "Ibuprofen at full dose around the clock",
          "Aspirin at full dose",
          "A long-term codeine combination product",
        ],
        correctIndex: 0,
        explanation:
          "Paracetamol is the first rung and the safest analgesic in pregnancy at usual doses. NSAIDs and aspirin carry third-trimester and bleeding concerns, and long-term codeine is not first choice for mild pain.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Opioid Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before giving a charted dose of morphine, which check is essential?",
        options: [
          "Blood glucose only",
          "Respiratory rate and sedation level — under 12 breaths per minute or deep drowsiness means withhold and call",
          "Temperature and pulse only",
          "The morning weight",
        ],
        correctIndex: 1,
        explanation:
          "Opioids kill by respiratory depression, and sedation arrives before the count falls. Every dose gets a respiratory rate and a look at the eyelids; the rest are good practice but not the opioid check.",
        courseSlug: "pharmacology-2",
      },
      {
        topic: "Pain Ladder",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient has continuous moderate pain, only partially controlled by paracetamol. Per the ladder, what is the next move?",
        options: [
          "Stop all analgesia until the pain is severe",
          "Give a strong opioid only when she cries out",
          "Step up — add or switch to a weak opioid such as codeine, given regularly by the clock",
          "Double the paracetamol beyond the daily maximum",
        ],
        correctIndex: 2,
        explanation:
          "The ladder climbs on failure of a rung: moderate pain on paracetamol calls for step two, taken regularly rather than heroically late. Exceeding the paracetamol ceiling risks the liver.",
        courseSlug: "pharmacology-2",
      },
    ],
    flashcards: [
      {
        topic: "WHO Ladder",
        front: "The three rungs of the WHO analgesic ladder?",
        back: "1: non-opioid (paracetamol, with or without an NSAID). 2: weak opioid (codeine, tramadol). 3: strong opioid (morphine). Step up when a rung fails; add, do not replace.",
      },
      {
        topic: "Opioid Checks",
        front: "The pre-dose opioid check and its thresholds?",
        back: "Count respiratory rate and assess sedation. Under 12 breaths per minute, or a patient too drowsy to hold a conversation: withhold, call, stimulate, oxygen ready — naloxone per protocol with the prescriber.",
      },
      {
        topic: "NSAID Cautions",
        front: "Which NSAID caution matters most in the third trimester, and why?",
        back: "Avoid NSAIDs near term: they risk premature closure of the fetal ductus arteriosus, bleeding, and reduced amniotic fluid. Paracetamol is the safer rung.",
      },
    ],
    sources: [
      {
        organization: "WHO",
        title: "Cancer Pain Relief: With a Guide to Opioid Availability (2nd edition)",
        year: "1996",
        note: "The origin of the WHO analgesic ladder — verify with current WHO guidance.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "Check for the latest edition and facility protocols.",
      },
      {
        organization: "Elsevier",
        title: "Rang and Dale's Pharmacology (9th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },
];
