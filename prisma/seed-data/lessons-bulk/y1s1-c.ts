import type { SeedFullLesson } from "../types";

// Y1 S1 batch C — foundations-nursing-1, perspectives-nursing-1, health-promotion-1
// Anchors: prisma/seed-data/anchors/y1s1-c.json (14 lessons)

export const lessons: SeedFullLesson[] = [
  // ───────────────────────────────────────────────────────────
  // 1. Patient Observation: Noticing What Others Miss
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "Vital Signs & Observation",
    lessonTitle: "Patient Observation: Noticing What Others Miss",
    description: "Train your eyes to see the quiet early signs — the small changes that come before the crisis. This is the skill that separates a watcher from a machine-taker.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Describe what patient observation means beyond taking vital signs.",
      "Explain why a patient's own baseline and trends matter more than a single 'normal' reading.",
      "Recognise the quiet early signs of deterioration in a postnatal woman.",
      "Apply the habit of documenting and escalating what you notice.",
    ],
    tags: ["observation", "assessment", "vital signs", "early warning", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Observation is more than clipping a cuff on an arm. It is the deliberate use of your senses — looking, listening, feeling, even smelling — to build a picture of how a patient is really doing. The blood pressure machine gives you a number. You give it meaning.\n\nHere is the truth of the ward: the patients who crash rarely crash out of nowhere. Hours earlier they were slightly restless, slightly pale, slightly quiet. Someone who knew their baseline noticed. Someone who didn't, charted 'stable'. Your eyes are the cheapest and most powerful monitoring equipment in the building.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "First, know the **baseline**. Every woman has her own normal. A pulse of 96 might be ordinary for one mother and a red flag for another whose pulse was 68 all morning. Compare every reading to her, not only to the textbook.\n\nSecond, the trend beats the snapshot. A pulse moving 78, then 88, then 100 is still 'within normal range' on paper — but the direction is shouting. Rising pulse, rising restlessness, falling urine output, cooling skin: these are the body's early whispers.\n\nThird, remember that young fit women compensate beautifully. A postnatal woman can lose a serious amount of blood and keep her blood pressure normal while her vessels clamp down to compensate. Blood pressure is a **late** sign in her. Pulse, behaviour and skin colour move first.\n\nFinally, noticing is only half the job. Write it down, and tell someone. 'She doesn't look right to me' is clinical data — say it out loud.",
      },
      {
        type: "clinical_pearl",
        body: "In a healthy young postnatal woman, blood pressure stays normal until bleeding is already serious. Trust the creeping pulse, the pallor and the restlessness before you trust the cuff — and act on the trend, not the single reading.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 12:00 on the postnatal ward. Madam Adjoa delivered this morning; at 08:00 her pulse was 88 and her blood pressure 110/70. Walking past now, you notice she is lying flat and unusually quiet. Her lips look pale. You recheck: pulse 104, blood pressure 108/68. The chart says 'normal'.\n\nShould the unchanged blood pressure reassure you, and what should you do next?\n\nAnswer: No. A rising pulse with pallor and quietness in a day-one postnatal woman means bleeding or infection until proven otherwise. Young women keep their blood pressure normal while compensating. Check her fundus for tone, check the pads and check for trickling blood, then inform the nurse in charge immediately. You do not wait for the blood pressure to fall — by then she is already in trouble.",
      },
      {
        type: "memory_trick",
        body: "Remember T.R.E.N.D. — Track it over time, Recheck after acting, Escalate early, Never dismiss a feeling, Document every reading. A trend is a story; a single reading is only a word.",
      },
      {
        type: "summary",
        body: "- Observation uses all your senses, not just the blood pressure machine.\n- Compare every reading with the patient's own baseline, not only with textbook ranges.\n- The trend beats the snapshot: a rising pulse or growing restlessness matters even when 'in range'.\n- Young postnatal women compensate — blood pressure falls late, pulse and pallor move first.\n- Noticing is incomplete until it is documented and escalated.",
      },
    ],
    questions: [
      {
        topic: "Patient Observation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In observation, what does a patient's 'baseline' refer to?",
        options: [
          "The average vital signs of all patients on that ward",
          "The patient's own usual values when well or stable",
          "The middle of the textbook normal range",
          "The first reading printed by the machine each shift",
        ],
        correctIndex: 1,
        explanation: "Baseline is personal. A pulse of 96 is normal for some women and a warning for another whose pulse has been 68 all day. Judging change against the patient's own usual values is what makes observation meaningful.",
      },
      {
        topic: "Early Deterioration",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A day-one postnatal woman has gone from pulse 88 to 104 over four hours. She is pale and quietly restless; her blood pressure is unchanged. What is the best interpretation and action?",
        options: [
          "Reassuring — both pulse and blood pressure are still within the normal range",
          "Possible early haemorrhage — assess the fundus, pads and lochia, and inform the nurse in charge now",
          "Simple anxiety — sit with her and recheck in the evening",
          "Early infection — start paracetamol and document the temperature only",
        ],
        correctIndex: 1,
        explanation: "A rising pulse trend with pallor and restlessness after delivery suggests bleeding until proven otherwise, because healthy young women maintain blood pressure by compensating while loss continues. Assess the fundus and blood loss immediately and escalate — waiting for the blood pressure to drop waits too long.",
      },
      {
        topic: "Patient Observation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following is a 'quiet early sign' of deterioration that observation is designed to catch?",
        options: [
          "Sudden collapse with no pulse",
          "Frank massive bleeding visible from across the ward",
          "Slight restlessness with cool, clammy skin",
          "A blood pressure of 70/40 on the machine",
        ],
        correctIndex: 2,
        explanation: "The quiet signs — mild restlessness, pallor, cool clammy skin, falling urine output — appear while the body is still compensating. Collapse and late hypotension are what happen when the quiet signs were missed.",
      },
    ],
    flashcards: [
      {
        topic: "Patient Observation",
        front: "What does a patient's baseline mean, and why does it matter?",
        back: "Her own usual values when well or stable. Change is judged against her personal normal, not just textbook ranges — a 'normal' number can still be a warning if it is abnormal for her.",
      },
      {
        topic: "Early Deterioration",
        front: "Why is blood pressure a late sign in young postnatal women?",
        back: "Healthy young women compensate: their vessels constrict to keep blood pressure up while significant loss continues. Pulse rate, pallor, restlessness and skin changes appear first.",
      },
      {
        topic: "Patient Observation",
        front: "What is the T.R.E.N.D. habit for observations?",
        back: "Track it over time, Recheck after acting, Escalate early, Never dismiss a feeling, Document every reading.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing complications in pregnancy and childbirth: a guide for nurses and doctors",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Integrated Management of Maternal and Newborn Health guidelines",
        note: "Educational reference — consult your facility protocol.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 2. Patient Safety: Protecting People at Their Most Vulnerable
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "Vital Signs & Observation",
    lessonTitle: "Patient Safety: Protecting People at Their Most Vulnerable",
    description: "Falls, pressure injuries and identification errors — the everyday hazards that harm patients. Learn the habits that keep people safe while they heal.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Define patient safety and explain why preventable harm is a core concern.",
      "List the common hazards on a maternity ward — falls, pressure injuries, identification errors, medication errors.",
      "Apply simple routines that prevent each hazard.",
      "Explain why near-misses and incidents are reported, and what a student should do after one.",
    ],
    tags: ["safety", "risk", "falls", "pressure injuries", "patient identification"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patient safety means keeping people free from preventable harm while they are in your care. Patients come to us at their most vulnerable — in pain, exhausted, anaemic, dizzy, separated from their families. They trust us with their bodies. That trust deserves more than good intentions; it deserves habits.\n\nThe World Health Organization counts unsafe care among the leading causes of death and disability worldwide — and most of that harm comes not from rare dramatic events, but from ordinary things: a fall on a wet floor, a heel ulcer, a folder mix-up, a wrong drug. The good news: every one of these has a boring, reliable prevention routine you can learn this year.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Falls.** The danger window on a maternity ward is the first time a woman stands — after delivery, after a caesarean, after sedation or blood loss. Prevention: stay with her, let her sit first, rise slowly, keep the floor dry and the light working, and keep the call bell within reach — always.\n\n**Pressure injuries.** Skin over bony points — heels, sacrum, hips, elbows, the back of the head — dies between the bone and the mattress when pressure is not relieved. Prevention: reposition at least two-hourly, inspect the skin, keep it clean and dry, and make sure she eats.\n\n**Identification errors.** A name and folder number — two unique identifiers — checked before every medication, every procedure, every newborn feed. Newborns wear their tags; they cannot introduce themselves.\n\n**Reporting.** When something goes wrong, or nearly goes wrong, report it. Not to punish anyone — to find the hole in the system before it swallows a patient. Near-misses are free lessons.",
      },
      {
        type: "clinical_pearl",
        body: "Fall prevention is not a sign on a door; it is your feet staying beside the bed on the first ambulation. And identification is not paperwork — it is the difference between Mrs Mensah's oxytocin and Mrs Mensima's magnesium.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Esi delivered by caesarean section yesterday. This morning she says she wants to walk to the bathroom herself — 'I am strong.' She swings her legs off the bed and sways, gripping the bedside. You are alone with her. What do you do, and why is this moment dangerous?\n\nAnswer: Sit her back on the edge, stay with her, and check she is steady before she stands — then walk with her to the bathroom or bring the commode. After a caesarean she may be anaemic, recovering from spinal anaesthesia, and unused to being upright; fainting on the first ambulation is a classic post-operative event. Call the nurse if you cannot stay. 'I am strong' is her pride talking; your job is the quiet safety net under it.",
      },
      {
        type: "memory_trick",
        body: "For pressure areas, picture the bones that touch the bed: 'Heels, Sacrum, Hips, Elbows, Head — every two hours, MOVE them instead.' Say it while you reposition: 'Move them every two, or the skin pays the due.'",
      },
      {
        type: "summary",
        body: "- Patient safety is freedom from preventable harm — built from small daily routines, not heroics.\n- Falls cluster at first ambulation: sit first, rise slowly, stay beside her, call bell in reach.\n- Pressure injuries form over bony points: reposition two-hourly, inspect skin, keep it dry.\n- Check two unique identifiers before every medication, procedure or newborn feed.\n- Report incidents and near-misses — they expose system holes before a patient falls through one.",
      },
    ],
    questions: [
      {
        topic: "Fall Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman is standing for the first time after a caesarean section. What is the safest practice for the student nurse?",
        options: [
          "Encourage her to walk alone to build her strength and independence",
          "Stay with her, let her sit on the edge first, then rise slowly with support",
          "Tell her to stay in bed until the physiotherapist arrives next week",
          "Give her a walking stick and check on her in thirty minutes",
        ],
        correctIndex: 1,
        explanation: "First ambulation after caesarean is the highest fall-risk moment: anaemia, spinal anaesthesia recovery and bed rest make fainting common. Sitting first, rising slowly with support and staying beside her turns a dangerous moment into a safe one.",
      },
      {
        topic: "Pressure Injury Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best prevents pressure injuries in a bed-bound patient?",
        options: [
          "Massaging the bony prominences firmly every shift to stimulate circulation",
          "Keeping the head of the bed flat at all times to spread the pressure",
          "Repositioning at least two-hourly, inspecting the skin, and keeping it clean and dry",
          "Applying a thick layer of petroleum jelly to intact skin each morning",
        ],
        correctIndex: 2,
        explanation: "Relieving pressure is the only thing that stops a pressure injury forming — reposition at least two-hourly over bony points, inspect what you are protecting, and keep skin dry. Deep massage over bony prominences can actually damage tissue beneath the skin and is no longer taught.",
      },
      {
        topic: "Patient Identification",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Before administering a medication, how should you confirm the patient's identity on a busy ward?",
        options: [
          "Ask the patient 'Are you Mrs Mensah?' and proceed when she says yes",
          "Use the bed number, which is fixed and cannot be confused",
          "Check two unique identifiers — her stated name and her folder number — against the prescription",
          "Rely on the ward clerk's assignment sheet from the morning",
        ],
        correctIndex: 2,
        explanation: "Two unique identifiers, stated by the patient or read from her wristband and matched against the prescription, prevent the classic errors. Yes/no questions invite wrong answers, bed numbers change, and assignment sheets can be outdated — identifiers travel with the patient.",
      },
    ],
    flashcards: [
      {
        topic: "Fall Prevention",
        front: "What are the key steps for safe first ambulation after delivery or caesarean?",
        back: "Sit her upright on the edge first, let her rise slowly, stay beside her for the first walk, and keep the call bell within reach — she may be anaemic or recovering from spinal anaesthesia.",
      },
      {
        topic: "Pressure Injury Prevention",
        front: "Name the classic pressure points to check in a bed-bound patient.",
        back: "Heels, sacrum, hips/buttocks, elbows, shoulders, and the back of the head — anywhere bone lies close under the skin against the mattress.",
      },
      {
        topic: "Patient Identification",
        front: "What two unique identifiers are used to confirm patient identity before care?",
        back: "The patient's stated name and her folder (or unique) number — matched against the chart, wristband and prescription every time.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety fact sheet",
        note: "Educational source — verify current WHO data.",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality and Safety protocols for facility care",
        note: "Educational reference — consult your facility's policy.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 3. Hygiene: Clean Care Is Safe Care
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "Safety, Hygiene & Comfort",
    lessonTitle: "Hygiene: Clean Care Is Safe Care",
    description: "Personal care with dignity — how a basin of warm water and a clean pad protect patients from infection and preserve their sense of self.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Explain how patient hygiene prevents infection and supports skin integrity, comfort and dignity.",
      "Describe a bed bath that protects privacy and dignity.",
      "Perform and teach postnatal perineal hygiene correctly.",
      "Relate hygiene to infection prevention on the ward and at home.",
    ],
    tags: ["hygiene", "infection prevention", "perineal care", "dignity", "bed bath"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a woman cannot easily wash herself after birth — sore, tired, attached to a drip — hygiene becomes your clinical work, not her private problem. Skin that stays sweaty, soiled or damp breaks down, hosts germs and smells, and quietly erodes a person's confidence. A mouth that is not cleaned grows infection. Perineal pads that stay too long invite the very infection you warned her about.\n\nSo think of hygiene as treatment: it prevents infection, protects skin, reveals what is happening on the body (a bed bath is also a full-body assessment), and restores something illness takes — dignity. A woman who feels clean is a woman who feels human again.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **bed bath** is done with the patient, never to her. Explain first, draw the curtain, keep her covered and expose only the part you are washing — one area at a time. Warm water, a clean cloth, soap where wanted, and thorough drying. Wash the face first while she is fresh, save the perineum for last, and never carry soiled water or cloth back toward cleaner areas. One basin per patient — the basin travels with her, not between her and her neighbour.\n\n**Perineal care** after birth: wash your hands, use warm water and a clean cloth or poured water, and wipe from front to back — urethra and vagina first, anus last, one stroke per cloth or per direction. Change the pad at every check or at least every four hours, note the lochia, dry gently, then wash your hands again. Teach her the same sequence for home: front to back, fresh pads, clean hands.\n\nOral care is not a luxury. A clean, moist mouth helps her eat and drink, which helps her heal and feeds the baby.",
      },
      {
        type: "clinical_pearl",
        body: "A bed bath done well is three treatments in one: infection control, a full skin assessment, and dignity restored. If you find a reddened heel or an infected perineum during a wash, the wash just paid for itself.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Afia had a perineal tear repaired yesterday. She refuses help with washing: 'I can manage, and I don't want anyone to see me there.' You notice she has not changed her pad since morning and walks stiffly, as if avoiding touch to the area. What does she need, and how will you provide it?\n\nAnswer: She needs perineal hygiene done in a way that costs her no dignity. Explain that clean care prevents infection in the tear, then offer privacy and as much self-care as she can manage: curtain drawn, warm water and clean cloth within reach, front-to-back technique taught in words, and a fresh pad from you before you leave. Stay close enough to help, far enough to respect her. Tomorrow, inspect the perineum gently during the pad change — discomfort is expected, increasing pain, swelling or offensive discharge is not.",
      },
      {
        type: "memory_trick",
        body: "For perineal care, say it like a rhythm: 'Front to back, one way, one wipe — fresh pad, clean hands, every check.' If the rhythm breaks, germs travel the wrong direction.",
      },
      {
        type: "summary",
        body: "- Hygiene is clinical care: it prevents infection, protects skin and restores dignity.\n- Bed bath: explain, curtain, warm water, wash cleanest areas first, perineum last, one basin per patient, dry well.\n- Perineal care: clean hands, front to back, one wipe one direction, pad changed every check or four-hourly, clean hands again.\n- A bed bath doubles as a full-body skin assessment — look while you wash.\n- Teach the same sequences for home so good hygiene continues after discharge.",
      },
    ],
    questions: [
      {
        topic: "Perineal Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "When providing postnatal perineal hygiene, in which direction should the perineum be cleaned, and why?",
        options: [
          "Back to front, because it is faster and the anus is already colonised by normal flora",
          "Front to back, so organisms from the anal area are not carried toward the urethra and vagina",
          "In circles, to distribute cleaning solution evenly",
          "Direction does not matter as long as soap is used",
        ],
        correctIndex: 1,
        explanation: "Cleaning from front (urethra, vagina) to back (anus) keeps faecal organisms away from the healing perineum, the urinary tract and the birth canal. The reverse direction drags bowel flora straight into the places where postnatal infection begins.",
      },
      {
        topic: "Bed Bath",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best protects a patient's dignity during a bed bath?",
        options: [
          "Bathing quickly with two people to halve the exposure time",
          "Keeping the door locked and talking loudly so staff know the room is occupied",
          "Explaining each step and exposing only the body part being washed, keeping the rest covered",
          "Skipping the genital and perineal areas entirely to avoid embarrassment",
        ],
        correctIndex: 2,
        explanation: "Dignity lives in the details: explain before you touch, curtain or close the door, and uncover one limb or area at a time, re-covering it before moving on. Skipping care altogether trades dignity for infection risk — the skill is doing intimate care respectfully, not avoiding it.",
      },
      {
        topic: "Patient Hygiene",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is regular oral care clinically important for a weak, bedridden postnatal woman?",
        options: [
          "It is only a courtesy — the mouth has no connection to illness",
          "A clean, moist mouth protects eating and drinking, and reduces the risk of mouth infection",
          "It replaces the need for antibiotics after delivery",
          "It is required only if she is diabetic",
        ],
        correctIndex: 1,
        explanation: "A clean mouth is the start of nutrition: a woman with a sore, dry or infected mouth will not eat or drink enough to heal and to make milk. Oral care is comfort and infection prevention working together — courtesy is just the bonus.",
      },
    ],
    flashcards: [
      {
        topic: "Perineal Care",
        front: "What is the correct sequence for postnatal perineal cleaning?",
        back: "Wash hands; clean with warm water from front to back — urethra/vagina first, anus last, one wipe one direction; dry gently; apply a fresh pad; wash hands again. Change the pad at every check or at least every four hours.",
      },
      {
        topic: "Bed Bath",
        front: "Give three rules of a dignified bed bath.",
        back: "Explain before touching; keep the patient covered and expose only the area being washed; wash the cleanest areas first and the perineum last, with one basin per patient — then dry well.",
      },
      {
        topic: "Patient Hygiene",
        front: "How is patient hygiene clinical care, not just kindness?",
        back: "It prevents skin breakdown and infection, keeps the mouth able to eat and drink, and doubles as a full-body assessment — while also restoring the patient's dignity and mood.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO recommendations on postnatal care of the mother and newborn",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — consult your facility protocol.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 4. Patient Comfort: The Small Things That Heal
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "Safety, Hygiene & Comfort",
    lessonTitle: "Patient Comfort: The Small Things That Heal",
    description: "Positioning, sleep, a drink of water and a calm voice — comfort is clinical. Unrelieved pain and exhaustion slow healing in ways you can measure.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain why comfort — pain relief, positioning, sleep and calm — is part of clinical care, not decoration.",
      "Assess pain using the patient's self-report.",
      "Apply simple comfort measures after delivery and surgery.",
      "Protect sleep on a night shift by clustering care.",
    ],
    tags: ["comfort", "rest", "pain assessment", "positioning", "sleep"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Comfort sounds soft next to words like haemorrhage and sepsis — but measure its absence. A woman in unrelieved pain breathes shallowly, moves less, sleeps less, breastfeeds less, and develops the complications of exactly that: chest infection, clots in the legs, delayed healing, a baby who is underfed. Anxiety tightens muscles and can slow labour itself. Sleep is when the body repairs.\n\nSo comfort is not the cherry on the cake; it is an ingredient of recovery. The good news is that most of it costs nothing: a pillow in the right place, water within reach, a procedure explained before it happens, a hand held during a contraction, a ward that quiets down at night.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Pain assessment starts with asking.** The patient's own report is the gold standard: a simple 0–10 scale, or for the overwhelmed, her face, guarding and tension. McCaffery's famous line is worth memorising: pain is whatever the experiencing person says it is. Then act — within your role and prescriptions — and come back to recheck. The reassessment is what proves the care.\n\n**Positioning.** After a caesarean, a pillow splinted against the abdomen turns a cough from torture into something she can do — and coughing prevents chest infection. After a vaginal delivery, side-lying with a pillow between the knees eases a sore perineum. After any long labour, she needs help finding the position that lets her actually rest.\n\n**Protect sleep.** On night duty, cluster your observations and medications so she is woken once, not five times. Dim lights, lower voices, silence squeaky trolleys. Finally, presence: sitting at eye level for two minutes and saying 'I noticed you were awake — how are you, really?' is a comfort measure with measurable effects on anxiety and trust.",
      },
      {
        type: "clinical_pearl",
        body: "The most forgotten step in pain care is the return trip. Ask, believe, act — then come back in half an hour and ask again. Reassessment is also safety: it catches both the medicine that worked and the one that didn't.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 22:00. Madam Yaa, day one after caesarean, is lying rigid with her eyes open. She has not pressed the call bell. When you quietly ask how she is, she whispers, 'I am fine, Sister. You are all so busy.' She has not turned since 19:00 and her drip is nearly dry. What is happening, and what will you do in the next ten minutes?\n\nAnswer: She is in pain and politely hiding it, and being still — rigid, unturned, not drinking — is exactly what breeds complications. Ask her to score the pain 0–10; report it and give analgesia as prescribed with your supervisor; help her splint a pillow, turn onto her side comfortably and reposition the drip. Then return after about thirty to forty-five minutes to rescore the pain and document both scores. Her politeness is the reason you must ask directly — many patients under-report pain rather than 'disturb' the staff.",
      },
      {
        type: "memory_trick",
        body: "For pain, remember A.B.A.R. — Ask, Believe, Act, Reassess. Four beats, in order, every time. And for night comfort, think M.P.T.M.: Mouth care, Position, Toilet, Mattress-and-drink — do them all in one waking, not four.",
      },
      {
        type: "summary",
        body: "- Comfort is clinical: unrelieved pain and lost sleep measurably slow healing and feed complications.\n- Pain is whatever the patient says it is — self-report is the gold standard of assessment.\n- A.B.A.R.: Ask, Believe, Act, Reassess — the reassessment is the step most often skipped.\n- Pillows are treatment: splint the abdomen after caesarean, support the knees after delivery.\n- Cluster night care so patients are woken once, not repeatedly — sleep is repair time.",
      },
    ],
    questions: [
      {
        topic: "Pain Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to McCaffery's classic definition, how should a patient's pain be regarded?",
        options: [
          "Whatever the nurse judges it to be based on vital signs",
          "Whatever the experiencing person says it is, whenever she says it exists",
          "Real only when it prevents sleep or movement",
          "Rated by comparing it with the average post-operative patient",
        ],
        correctIndex: 1,
        explanation: "Self-report is the gold standard: only the patient feels her pain, and vital signs can stay normal despite severe pain. Believing the report is the foundation of assessing it correctly — then acting and reassessing.",
      },
      {
        topic: "Comfort and Sleep",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On a night shift, which practice best protects a recovering postnatal woman's sleep?",
        options: [
          "Waking her hourly so she can be repositioned and reassessed",
          "Clustering observations, medications and care tasks into one or two visits per block of time",
          "Keeping the ward lights on for safety during rounds",
          "Encouraging visitors to stay late so she feels supported",
        ],
        correctIndex: 1,
        explanation: "Sleep is when tissue repair and recovery happen, so it is a treatment to protect. Clustering care means she is fully woken once instead of drifting in and out all night — the same work, less fragmentation, more rest.",
      },
      {
        topic: "Comfort Measures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A day-one post-caesarean woman needs to cough to clear her chest. What is the most helpful comfort technique?",
        options: [
          "Have her lie flat and cough quickly before she can anticipate the pain",
          "Support her abdomen with a pillow held firmly against the incision while she coughs",
          "Tell her to suppress the cough until the wound has fully healed",
          "Position her lying on her unaffected side, away from the incision",
        ],
        correctIndex: 1,
        explanation: "Splinting the incision with a pillow supports the wound edges and dramatically reduces pain with coughing, letting her clear her airway — which is exactly how post-operative chest infection is prevented. Suppression, flat positions or delay all trade short-term comfort for complications.",
      },
    ],
    flashcards: [
      {
        topic: "Pain Assessment",
        front: "What is the A.B.A.R. sequence for pain care?",
        back: "Ask about the pain, Believe the report, Act within your role and prescriptions, and Reassess after 30–45 minutes — then document both scores.",
      },
      {
        topic: "Pain Assessment",
        front: "Whose report is the gold standard of pain assessment, and what did McCaffery say?",
        back: "The patient's own. 'Pain is whatever the experiencing person says it is, existing whenever she says it does.'",
      },
      {
        topic: "Comfort Measures",
        front: "How do you make coughing comfortable after a caesarean, and why does it matter?",
        back: "Splint the abdomen with a pillow held against the incision. Coughing clears the airway and prevents post-operative chest infection — comfort here is prevention.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Standards and protocols for quality of care",
        note: "Educational reference — consult your facility protocol.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 5. Infection Prevention: The Basics That Save Lives
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "foundations-nursing-1",
    moduleTitle: "Safety, Hygiene & Comfort",
    lessonTitle: "Infection Prevention: The Basics That Save Lives",
    description: "Hands, gloves, sharps and clean equipment — the simple habits that protect you, your patients, and your family at home. These basics are where lives are saved.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Apply WHO's Five Moments for hand hygiene at the bedside.",
      "Choose correctly between alcohol-based hand rub and soap and water.",
      "Explain the correct use of gloves and safe sharps handling.",
      "Adapt infection prevention routines to a resource-limited setting like a CHPS compound.",
    ],
    tags: ["infection prevention", "asepsis", "hand hygiene", "sharps safety", "standard precautions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every infection that travels inside a hospital travels along a route — and almost every route passes through hands, equipment or needles. Infection prevention is the discipline of closing those routes, and it protects three people at once: the patient, the next patient, and you — which means your family too, when you go home.\n\nThe core attitude is **standard precautions**: treat every patient's blood and body fluids as potentially infectious, every time. Not because you distrust anyone, but because you cannot see a virus, and the person who looks healthiest may carry the quietest infection. The precaution is not an insult; it is a uniform you wear for everyone.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Hand hygiene is the master habit.** WHO's Five Moments tell you when: before touching the patient, before a clean or aseptic procedure, after any body fluid exposure, after touching the patient, and after touching her surroundings — the bed, the drip stand, the cot. Two befores, three afters.\n\n**Rub or wash?** Alcohol-based hand rub is the workhorse: 20–30 seconds, all hand surfaces, and it works even where there is no tap. Use soap and running water when hands are visibly soiled or after caring for a patient with diarrhoeal illness. Wash after removing gloves too — gloves get contaminated as they come off.\n\n**Gloves are a moment-tool, not a second skin.** Clean gloves for contact with blood, body fluids, mucous membranes; sterile gloves for sterile procedures; change them between patients and between tasks on the same patient.\n\n**Sharps** kill quietly. Never recap a needle by hand, never pass it hand to hand, and drop it straight into the puncture-proof container at the point of use. If a needle pierces your skin: wash with soap and water, and report immediately — post-exposure care is time-sensitive.",
      },
      {
        type: "clinical_pearl",
        body: "Keep the hand rub bottle as close as your pen. The habit that survives a busy night is the one that fits in your pocket and takes twenty seconds — distance kills hand hygiene faster than forgetfulness does.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are a student at a rural CHPS compound, and a woman arrives in labour at midnight. There is no running tap — the veronica bucket by the door has water, and you have a bottle of alcohol-based hand rub, clean gloves and a sharps container. You are about to do a vaginal examination, and after the birth you will have a used needle, soiled gloves and bloody linen. How do you run your infection prevention through this whole scenario?\n\nAnswer: Before the examination, clean your hands with the alcohol rub (they are not visibly soiled). Put on clean gloves; after the examination, remove them and rub again. For the birth, use the rub again, then gloves and apron. Drop the needle straight into the puncture-proof container — no recapping. Afterward, wash visibly soiled hands at the veronica bucket with soap, and dry with a clean towel. Soiled linen goes into the designated bag, away from your uniform. Water scarcity changes the tools; it never changes the discipline.",
      },
      {
        type: "memory_trick",
        body: "Five Moments, said as a rhythm: 'Two befores — patient and procedure; three afters — fluids, patient, surroundings.' And for sharps, one law with three hammers: 'Never recap, never pass, straight to the box.'",
      },
      {
        type: "summary",
        body: "- Standard precautions treat every patient's blood and body fluids as potentially infectious — no exceptions, no judgements.\n- WHO's Five Moments: before patient, before procedure, after fluids, after patient, after surroundings.\n- Alcohol rub for routine moments (20–30 seconds); soap and water when visibly soiled or after diarrhoeal illness — and always after removing gloves.\n- Gloves protect the task, not the shift: change between patients and tasks; they never replace hand hygiene.\n- Sharps: never recap, never pass hand to hand, straight into the puncture-proof container; after any injury, wash and report immediately.",
      },
    ],
    questions: [
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You have just finished a vaginal examination and removed your gloves. What must you do next?",
        options: [
          "Nothing — clean gloves protected your hands throughout",
          "Perform hand hygiene, because hands can be contaminated during glove removal",
          "Wipe your hands on your uniform before the next patient",
          "Apply lotion and proceed to write in the notes",
        ],
        correctIndex: 1,
        explanation: "Gloves are pierced invisibly and contaminated during removal, so hand hygiene follows every glove removal. Writing in the notes with contaminated hands simply transfers organisms to the next surface — and the next patient.",
      },
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a CHPS compound with no running tap, your hands are not visibly soiled and you are about to examine a woman in labour. What is the correct hand hygiene choice?",
        options: [
          "Skip hand hygiene and rely on clean gloves, since water is unavailable",
          "Clean your hands with alcohol-based hand rub for 20–30 seconds before gloving",
          "Wash in the delivery bucket after the examination only",
          "Have a colleague pour tap water over your hands while you wipe them on a shared towel",
        ],
        correctIndex: 1,
        explanation: "WHO's alcohol-based hand rub is the routine standard where hands are not visibly soiled, precisely because it works without running water. Soap and water is reserved for visible soiling or specific organisms like C. difficile — and shared towels recontaminate everything they dry.",
      },
      {
        topic: "Sharps Safety",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You have just drawn up a drug and notice the needle is uncapped on the trolley. Which action is correct?",
        options: [
          "Recap the needle carefully using both hands before carrying it to the patient",
          "Pick it up and pass it to the nurse so she can deal with it",
          "Drop it directly into the puncture-proof sharps container at the point of use",
          "Leave it — housekeeping collects sharps during evening cleaning",
        ],
        correctIndex: 2,
        explanation: "The majority of sharps injuries happen during recapping and passing. Direct disposal into the puncture-proof container at the point of use removes the needle from circulation in one movement — nothing else in the chain is safe.",
      },
    ],
    flashcards: [
      {
        topic: "Hand Hygiene",
        front: "List WHO's Five Moments for hand hygiene.",
        back: "Before touching the patient; before a clean or aseptic procedure; after body fluid exposure; after touching the patient; after touching the patient's surroundings.",
      },
      {
        topic: "Hand Hygiene",
        front: "When do you use alcohol rub, and when must you use soap and water?",
        back: "Alcohol rub (20–30 seconds, all surfaces) for routine decontamination when hands are not visibly soiled. Soap and running water when hands are visibly dirty, and after caring for patients with certain infections such as diarrhoeal illness.",
      },
      {
        topic: "Sharps Safety",
        front: "State the three rules of safe sharps handling.",
        back: "Never recap a needle by hand, never pass sharps hand to hand, and dispose directly into the puncture-proof container at the point of use. After any sharps injury: wash with soap and water, and report immediately.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guidelines on Hand Hygiene in Health Care",
        year: "2009",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — consult your facility protocol.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 6. The History of Nursing: From Temples to Modern Wards
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Where Nursing Came From",
    lessonTitle: "The History of Nursing: From Temples to Modern Wards",
    description: "The long human story of caring for the sick — from temple healers to the regulated, educated profession you are joining today.",
    difficulty: "Easy",
    durationMin: 13,
    objectives: [
      "Trace the broad stages of nursing history: temple and religious care, the decline of the hospital era, and the reform that created modern nursing.",
      "Describe how nursing reached the Gold Coast and grew into Ghana's regulated profession.",
      "Explain why knowing this history strengthens your professional identity.",
    ],
    tags: ["history", "nursing", "professional development"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Caring for the sick is as old as humanity — someone has always fetched water, wiped a brow and stayed through the night. But **trained** nursing is young, barely two centuries old, and its story is one of the most dramatic upgrades in human welfare. Wherever the care of the sick improved, survival followed.\n\nThis lesson walks the long road: healing temples, monastery infirmaries, the grim charity hospitals of the 1700s, and the reform movement that turned nursing from an act of kindness into a science-based profession. It ends in your own country, where Ghanaian nurses now carry a professional lineage that is at once global and proudly local.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "In the ancient world, care lived in temples and homes. Egyptian and Greek priest-healers tended the sick; in the early Islamic world, hospitals called bimaristans had trained staff, separate wards and teaching — centuries ahead of Europe. In medieval Europe, monasteries ran infirmaries where monks and nuns nursed with prayer and practical care.\n\nThen came the low point. Between roughly the 1500s and 1800s, European hospitals were places of last resort: overcrowded, filthy, and staffed by untrained, poorly paid women. Charles Dickens gave the era its lasting caricature — the drunken, careless nurse Sairey Gamp.\n\nReform arrived with Florence Nightingale and her generation after the Crimean War, and trained nursing spread worldwide with astonishing speed. In the Gold Coast, mission societies and colonial medical services built hospitals and dispensaries in the late 1800s and early 1900s; Korle Bu opened in 1923, and training schools grew with them. After independence, Ghana expanded nurse and nurse training across every region, and today the Nursing and Midwifery Council sets the standard your own registration will carry.",
      },
      {
        type: "clinical_pearl",
        body: "Whenever the care of the sick became organised, clean and trained, death rates fell — long before modern drugs arrived. Never let anyone tell you nursing is 'just kindness': historically, it is one of the highest-impact interventions humanity has ever deployed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During clinicals, a relative watching you work remarks, 'Nursing is just women's work — wiping and fetching. Anyone can do it; it has always been the same.' You have just finished this lesson. What is the strongest, kindest reply you can give?\n\nAnswer: Compassion has always existed — that part is true. But trained nursing is new: before the reforms, hospital nurses were unskilled labour and the hospitals themselves were among the deadliest places in town. When training, sanitation and standards arrived, survival transformed — and Ghana built that same system, from mission hospitals to Korle Bu to the Nursing and Midwifery Council that will license you. The wiping and fetching you noticed is performed today by an educated professional whose licence is a public guarantee — and that is the difference history made.",
      },
      {
        type: "memory_trick",
        body: "Picture nursing history as five stops on one road: 'Temple, Convent, Slum-hospital, School, Statute.' Care began as worship, survived as charity, nearly drowned in filth, was rescued by training, and was sealed by law.",
      },
      {
        type: "summary",
        body: "- Sick-care is ancient; trained nursing is modern — the difference is education, standards and sanitation.\n- Temples, monasteries and Islamic bimaristans cared for the sick long before modern hospitals.\n- The 1500s–1800s were the low point: untrained staff and hospitals as places of last resort.\n- Nightingale-era reform spread trained nursing worldwide within decades.\n- In Ghana: mission and colonial-era hospitals led to Korle Bu (1923) and growing training; today the Nursing and Midwifery Council regulates the profession you are entering.",
      },
    ],
    questions: [
      {
        topic: "Nursing History",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Europe before the Nightingale reforms, hospital nursing was generally characterised by which of the following?",
        options: [
          "University-educated nurses with formal registration",
          "Untrained, poorly paid staff working in overcrowded and unsanitary hospitals",
          "Strict protocols enforced by a national nursing council",
          "Male physicians performing all bedside care themselves",
        ],
        correctIndex: 1,
        explanation: "Pre-reform hospital nursing was a last-resort occupation with no training, poor pay and terrible conditions — which is why hospitals themselves were dangerous places. Dickens' Sairey Gamp caricature captured the era, and the reforms that followed changed everything.",
      },
      {
        topic: "Nursing History",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The Islamic bimaristans of the medieval period are historically significant because they:",
        options: [
          "Were the first hospitals to ban all nurses from patient care",
          "Provided organised hospital care with trained staff and separate wards centuries before comparable European institutions",
          "Focused exclusively on surgery and ignored hygiene",
          "Only treated soldiers wounded in battle",
        ],
        correctIndex: 1,
        explanation: "From about the eighth century, bimaristans in the Islamic world offered structured hospital care — trained staff, separate wards for different conditions, teaching and standards of cleanliness — predating Europe's organised hospital system by centuries.",
      },
      {
        topic: "Nursing in Ghana",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best describes the arrival and growth of trained nursing in the Gold Coast/Ghana?",
        options: [
          "Nursing arrived only after independence in 1957, with no earlier institutions",
          "Mission societies and colonial medical services introduced hospital care and training from the late 1800s, with Korle Bu opening in 1923, and training expanded after independence",
          "Ghana's first training school opened before any hospital existed in the country",
          "Trained nursing was banned during the colonial period and returned only in the 1990s",
        ],
        correctIndex: 1,
        explanation: "Mission and colonial-era hospitals and dispensaries introduced formal nursing to the Gold Coast from the late 1800s; Korle Bu opened in 1923 and training schools grew around such institutions. Independence accelerated expansion, and the Nursing and Midwifery Council now regulates the profession.",
      },
    ],
    flashcards: [
      {
        topic: "Nursing History",
        front: "What were the bimaristans, and why do they matter to nursing history?",
        back: "Hospitals in the medieval Islamic world with trained staff, separate wards and teaching — organised hospital care centuries before Europe achieved it.",
      },
      {
        topic: "Nursing History",
        front: "Who was Sairey Gamp, and what does she represent?",
        back: "Dickens' caricature of the untrained, careless, drunken nurse of pre-reform Europe — the symbol of nursing before education and standards existed.",
      },
      {
        topic: "Nursing in Ghana",
        front: "When did Korle Bu Hospital open, and what followed it?",
        back: "1923 — hospital care and nurse/nurse training expanded around it and across the country, growing further after independence into today's Nursing and Midwifery Council-regulated profession.",
      },
    ],
    sources: [
      {
        organization: "International Council of Nurses",
        title: "ICN history of the nursing profession",
        note: "Educational source — verify current ICN materials.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "History and regulation of nursing and midwifery in Ghana",
        note: "Educational reference — consult the Council's current publications.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 7. Florence Nightingale: More Than a Lamp
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Where Nursing Came From",
    lessonTitle: "Florence Nightingale: More Than a Lamp",
    description: "The founder of modern nursing — statistician, sanitation reformer and the reason nursing became a science. The lamp is the least interesting thing about her.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Describe Nightingale's work at Scutari and what actually reduced mortality there.",
      "List the five environmental essentials from Notes on Nursing.",
      "Explain her contribution to statistics and how counting deaths created modern nursing.",
    ],
    tags: ["nightingale", "history", "environment", "statistics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Florence Nightingale was born in 1820 in Florence, Italy, to a wealthy English family that expected her to marry well. Instead she insisted on nursing — then considered a disreputable trade. In 1854 she led a small band of nurses to the British military hospital at Scutari (in today's Istanbul) during the Crimean War, where soldiers were dying of infection far more than of wounds.\n\nThe romantic image is 'the lady with the lamp', walking the dark wards. The real woman is more interesting: a mathematician who counted the dead, found the pattern, forced the army to flush the sewers and reform ventilation, and then founded a training school that made nursing a profession. The lamp makes a lovely picture. The data changed the world.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "At Scutari the death rate fell dramatically — commonly cited as roughly a ten-fold drop — and it was **not** medicine that did it. Blocked sewers were cleared, ventilation improved, soldiers received food, clean water and clean linen. In 1855 the Sanitary Commission flushed the hospital's drains; the months that followed saw the steepest fall. Nightingale concluded that the environment — air, water, drainage, cleanliness — was doing the killing, and could do the healing.\n\nShe proved it with numbers. Nightingale invented or popularised the polar-area diagram (the 'coxcomb'), making death statistics visible to parliamentarians who could not read tables. In 1858 she became the first woman elected a fellow of the Royal Statistical Society. Her 1859 book, *Notes on Nursing*, written for ordinary women, listed five essentials: pure air, pure water, efficient drainage, cleanliness and light.\n\nIn 1860 she founded the Nightingale Training School at St Thomas' Hospital in London — the model for the modern profession, including yours.",
      },
      {
        type: "clinical_pearl",
        body: "The most Nightingale thing you can do on your ward is not carry a lamp — it is look at your patient's corner and ask: is the air moving, is the water clean, is the bed dry, is the light coming in? She would audit your ward with a pencil, and she would be right to.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are on night duty at a district hospital. The postnatal ward is crowded, the windows are shut, the beds are pushed against a wall away from them, and two babies are overheated under thick wraps. Two mothers have developed fever. Your tutor asks you to 'think like Nightingale'. What was her core insight, and what would you change first?\n\nAnswer: Nightingale's insight was that the environment itself causes or cures disease — before any drug does. The crowded, shut-window ward with poor air movement and overheated babies is a Scutari problem in miniature. First changes: get air moving (open windows to ventilate), space the beds if possible, lighten the babies' wrapping, check the water and the linen, and report the fevers. Counting the fevers, as she counted deaths, is how you prove the environment needs fixing.",
      },
      {
        type: "memory_trick",
        body: "Her five essentials, as a chant: 'Air, Water, Drains, Dirt, Daylight.' Five doors that let healing in — and all five are things a nurse can open, without waiting for a doctor's prescription.",
      },
      {
        type: "summary",
        body: "- Nightingale went to Scutari in 1854 and found soldiers dying of the environment, not just wounds.\n- Mortality fell about ten-fold after sanitation reform: sewers, ventilation, clean water, food and linen.\n- She was a statistician: polar-area diagrams made death data visible; first woman elected to the Royal Statistical Society.\n- Notes on Nursing (1859): pure air, pure water, efficient drainage, cleanliness, light.\n- The Nightingale Training School (1860, St Thomas') is the ancestor of every registered nurse and nurse today.",
      },
    ],
    questions: [
      {
        topic: "Florence Nightingale",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What was the main intervention responsible for the dramatic fall in mortality at Scutari hospital?",
        options: [
          "Powerful new antibiotics given to every wounded soldier",
          "Environmental reform: clearing sewers, ventilation, clean water, food and clean linen",
          "Moving all patients to their homes for convalescence",
          "Hiring more doctors to perform operations",
        ],
        correctIndex: 1,
        explanation: "The death rate fell steeply after the sanitary reforms of 1855 — flushed drains, moving air, clean water, food and linen. Nightingale's conclusion that the environment was the killer became the foundation of modern nursing practice.",
      },
      {
        topic: "Notes on Nursing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which list matches Nightingale's five essential points from Notes on Nursing?",
        options: [
          "Pure air, pure water, efficient drainage, cleanliness, light",
          "Antiseptics, antibiotics, antipyretics, analgesics, antiemetics",
          "Rest, exercise, diet, medication, surgery",
          "Sterile gloves, masks, gowns, goggles, shoe covers",
        ],
        correctIndex: 0,
        explanation: "Nightingale's five essentials were environmental: pure air, pure water, efficient drainage, cleanliness and light. She wrote before germ theory, yet the essentials remain the daily checklist of good basic ward care.",
      },
      {
        topic: "Florence Nightingale",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best describes Nightingale's contribution to statistics?",
        options: [
          "She refused to use numbers, believing nursing was purely intuitive",
          "She invented the polar-area diagram to display mortality data and became the first woman elected a fellow of the Royal Statistical Society",
          "She only counted beds and linen supplies for the army",
          "She developed the modern randomised controlled trial",
        ],
        correctIndex: 1,
        explanation: "Nightingale used statistics as her weapon of reform: her polar-area diagrams made the scale of preventable death impossible for politicians to ignore, and in 1858 she was elected the first female fellow of the Royal Statistical Society. Counting the dead is what forced the living to change the wards.",
      },
    ],
    flashcards: [
      {
        topic: "Florence Nightingale",
        front: "What actually caused the ~ten-fold drop in deaths at Scutari?",
        back: "Sanitation and environment: sewers flushed, ventilation restored, clean water, adequate food and clean linen — the Sanitary Commission's 1855 reforms. Not medicines.",
      },
      {
        topic: "Notes on Nursing",
        front: "List Nightingale's five environmental essentials.",
        back: "Pure air, pure water, efficient drainage, cleanliness and light. Hook: 'Air, Water, Drains, Dirt, Daylight — five doors that let healing in.'",
      },
      {
        topic: "Florence Nightingale",
        front: "Why call Nightingale 'more than a lamp'?",
        back: "The lamp is a romantic image; her real tools were statistics (polar-area diagrams, first female fellow of the Royal Statistical Society) and reform — plus the 1860 training school that professionalised nursing.",
      },
    ],
    sources: [
      {
        organization: "International Council of Nurses",
        title: "The Florence Nightingale legacy",
        note: "Educational source — verify current ICN materials.",
      },
      {
        organization: "Elsevier",
        title: "Notes on Nursing by Florence Nightingale (annotated editions)",
        note: "Primary historical source — public domain editions available.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 8. The Development of Professional Nursing
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Where Nursing Came From",
    lessonTitle: "The Development of Professional Nursing",
    description: "From apprenticeship to degree — how nursing earned its place as a regulated, educated profession, and why your licence exam is the public's guarantee.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Contrast hospital apprenticeship training with modern professional nursing education.",
      "Explain the purpose of registration, licensure and regulation.",
      "Describe how nursing education and regulation developed in Ghana.",
    ],
    tags: ["professional development", "regulation", "education", "licensure"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask a retired nurse how she trained, and she may describe living in the nurses' home, learning on the ward, working long unpaid hours as the hospital's workforce. That was apprenticeship: you learned by doing, under senior nurses, and knowledge was passed down mostly by tradition. It produced dedicated nurses — but it had no national standard, no examination of competence, and no guarantee to the public.\n\nOver the past century, nursing climbed a ladder: hospital apprenticeship, then registered training schools, then licensure examinations, and today college and university education with continuing professional development. In Ghana, the Nursing and Midwifery Council now accredits training institutions, sets curricula, and runs the licensing examination you will sit before you practise. Each rung of the ladder was won for one reason: patient safety.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Registration changed everything.** When a country registers nurses — as Britain did by law in 1919, with many nations following — it creates a public list of people who have proven competence. A patient can no longer be cared for by anyone who simply claims the title. The International Council of Nurses, founded in 1899, spread this idea worldwide: a defined scope of practice, education standards, a code of ethics, and accountability.\n\n**Education moved with the science.** As medicine discovered infection, antibiotics, resuscitation and monitoring, nursing knowledge grew too deep to absorb by tradition alone. Curricula, supervised skill competency and examinations replaced imitation. Modern research links better-educated nursing to better patient survival — which is why the direction of travel is toward higher entry education, including degree-level nursing.\n\n**Regulation protects both sides.** Ghana's Nursing and Midwifery Council licenses practitioners, sets standards and can discipline misconduct. That protects the public — and protects you, the honest practitioner, from being undercut by the unqualified. Specialisation continues upward: post-basic and college pathways now produce nurses with advanced skills, right here in Ghana.",
      },
      {
        type: "clinical_pearl",
        body: "When you sit your licensing examination, you are not ticking a bureaucratic box — you are renewing a century-old promise: that whoever touches a patient at 02:00 has proven, before an examiner, that she knows what she is doing.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your aunt trained as an enrolled nurse in the 1970s, hospital-based and apprenticed. Visiting your school, she asks why you must attend college, pass licensing exams and complete continuing education 'to do the same work we did'. How do you answer her respectfully — and truthfully?\n\nAnswer: Her generation built the wards you stand on, and her dedication is real. What changed is the work and the evidence: today's nurse manages partographs, resuscitates newborns, makes referral decisions and is legally accountable for them — a body of knowledge too large and too life-critical to pass on by tradition alone. Registration, licensing and continuing education are the public's guarantee that competence was examined, not assumed. The title she was proud of and the licence you will earn are the same promise, renewed for a harder age.",
      },
      {
        type: "memory_trick",
        body: "Picture the professional ladder with four rungs: 'Apprentice, Registered, Licensed, Specialist.' From learning by watching, to being on a list, to being examined, to being advanced. Each rung exists because a patient somewhere paid the price of the one below.",
      },
      {
        type: "summary",
        body: "- Apprenticeship trained nurses by tradition and ward labour — no national standard, no proof of competence.\n- Registration (UK 1919; ICN from 1899) created a public list of proven practitioners.\n- Education rose with the science: curricula, examined competencies and degrees replaced imitation.\n- In Ghana, the Nursing and Midwifery Council accredits training and runs licensing examinations.\n- Regulation protects the public from the unqualified and protects the qualified from unfair competition.",
      },
    ],
    questions: [
      {
        topic: "Professional Regulation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the main purpose of nursing registration and licensure?",
        options: [
          "To limit the number of nurses so salaries stay high",
          "To protect the public by ensuring only practitioners of proven competence use the title and practise",
          "To give hospitals a cheaper workforce of student labour",
          "To make nursing exams internationally recognised for travel",
        ],
        correctIndex: 1,
        explanation: "Licensure is a public safety measure: it sets a floor of examined competence beneath everyone who practises. Career mobility and fair pay are side benefits — the core is the patient's guarantee.",
      },
      {
        topic: "Nursing Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which change most distinguishes modern professional nursing education from the old hospital apprenticeship model?",
        options: [
          "Students now work longer hours on the wards",
          "There is an accredited curriculum, examined competencies, national standards and licensing examinations",
          "Nursing knowledge is now passed mainly through tradition and imitation",
          "Training takes place only after graduation",
        ],
        correctIndex: 1,
        explanation: "Apprenticeship relied on tradition and hours; professional education relies on curricula, supervised and examined competencies, national accreditation and a licensing examination. The difference is that competence is proven — not assumed.",
      },
      {
        topic: "Professional Regulation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Ghana, which body accredits nursing and midwifery training institutions and administers licensing to practise?",
        options: [
          "The hospital's board of directors",
          "The Nursing and Midwifery Council of Ghana",
          "The ward sister or nurse in charge",
          "The district chief executive",
        ],
        correctIndex: 1,
        explanation: "The Nursing and Midwifery Council of Ghana is the statutory regulator: it accredits training programmes, sets curricula and standards of conduct, and runs the licensing examination — with the power to discipline practitioners who breach them.",
      },
    ],
    flashcards: [
      {
        topic: "Professional Regulation",
        front: "What is the purpose of nursing licensure?",
        back: "To protect the public: only practitioners of proven, examined competence may use the title and practise. It also protects honest practitioners from the unqualified.",
      },
      {
        topic: "Nursing Education",
        front: "What replaced tradition-and-imitation in modern nursing education?",
        back: "Accredited curricula, supervised and examined skill competencies, national standards and licensing examinations — plus continuing professional development.",
      },
      {
        topic: "Professional Regulation",
        front: "Which body regulates nursing and midwifery in Ghana, and what can it do?",
        back: "The Nursing and Midwifery Council of Ghana — it accredits training, sets standards and curricula, administers licensing examinations, and can discipline misconduct.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Regulation of nursing and midwifery education and practice",
        note: "Educational reference — consult the Council's current publications.",
      },
      {
        organization: "International Council of Nurses",
        title: "ICN regulation and education standards resources",
        note: "Educational source — verify current ICN materials.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 9. Nursing Theories: Why They Actually Matter
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Nursing as a Profession",
    lessonTitle: "Nursing Theories: Why They Actually Matter",
    description: "The thinkers who explained what nursing is for — and how their ideas quietly shape your checklists, your conversations and your daily work.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Explain what a nursing theory is and what the metaparadigm concepts are.",
      "Match major theorists to their central ideas.",
      "Apply at least one theory to a real antenatal or postnatal situation.",
    ],
    tags: ["nursing theories", "theory", "metaparadigm", "professional development"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A nursing theory is not decoration for an essay. It is an organised way of answering the profession's biggest question: what, exactly, is nursing for? Doctors treat disease; what is our object of work? The theorists answered it differently — the environment, the person's own self-care, the relationship, adaptation — and each answer becomes a lens that changes what you see and do at the bedside.\n\nThe word 'metaparadigm' sounds intimidating, but it is simply the four concepts every nursing theory addresses: the **person** (whoever you care for, including family), the **environment** (everything around the person), **health** (where the person is on the wellness-illness scale), and **nursing** (your actions). Four corners; every theory sits somewhere on them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Nightingale made the environment the treatment: air, water, drainage, cleanliness and light. Henderson defined nursing as assisting the individual — sick or well — to perform activities contributing to health or recovery that she would perform unaided if she had the strength, doing this in a way that helps her gain independence as rapidly as possible. Notice what that becomes in your hands: a checklist at admission (can she breathe, eat, drink, sleep, eliminate, move, feel safe?) and a goal for discharge.\n\nOrem's **self-care theory** says people naturally care for themselves, and nurses step in only where a self-care deficit appears — anaemia in pregnancy, pain after delivery, a mother unsure how to attach the baby. Peplau saw nursing as an interpersonal process: the relationship itself is the treatment vehicle — which is why the trust you build at antenatal clinic decides whether a woman tells you the truth. Roy's adaptation model and Watson's caring theory round out the family.\n\nFor a nurse, Orem and Peplau are almost job descriptions: the woman does the work of pregnancy and birth; you support, educate and step in where the deficit or danger appears.",
      },
      {
        type: "clinical_pearl",
        body: "A theory is a torch, not a poster. Henderson's definition becomes your admission checklist; Orem's tells you exactly when to step in — and just as importantly, when to step back and let the woman do it herself.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Dede is at her first antenatal visit. When you ask about medications, she admits — hesitantly — that she stopped her iron tablets weeks ago because 'they made me too dark' (a common belief), and she takes herbal preparations she has not mentioned to anyone before, worried you would shout at her. Which theorist's lens best explains what just happened, and what does it tell you to do differently next visit?\n\nAnswer: Peplau's interpersonal lens: the therapeutic relationship is the vehicle of care, and Dede only disclosed once she sensed she would not be judged — this is the theory working in real time. It tells you to keep listening without scolding, correct the belief about iron gently, explore the herbs' safety with her, and rebuild trust so the disclosure continues. Orem adds the second layer: a self-care deficit (knowledge and beliefs about iron) that your health education is there to fill.",
      },
      {
        type: "memory_trick",
        body: "The metaparadigm is four corners holding up the roof of care: 'Person, Environment, Health, Nursing — the four corners of every theory.' Then remember the family in one breath: 'Florence fixed the room, Henderson listed the needs, Orem fills the gaps, Peplau builds the bridge.'",
      },
      {
        type: "summary",
        body: "- A nursing theory organises what nursing is for — it is a lens, not an essay topic.\n- The metaparadigm has four concepts: person, environment, health, nursing.\n- Nightingale: the environment is the treatment. Henderson: assist toward independence — your admission checklist.\n- Orem: step in where self-care has a deficit; Peplau: the relationship itself carries care.\n- Nursing lives inside these: the woman does the work, you support, educate and act on danger.",
      },
    ],
    questions: [
      {
        topic: "Metaparadigm",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which four concepts make up nursing's metaparadigm — the concepts every nursing theory addresses?",
        options: [
          "Person, environment, health, nursing",
          "Doctor, nurse, patient, hospital",
          "Assessment, diagnosis, planning, evaluation",
          "Anatomy, physiology, pathology, pharmacology",
        ],
        correctIndex: 0,
        explanation: "Person, environment, health and nursing are the four central concepts of the discipline — every theorist positions their ideas across these four corners, whatever language they use.",
      },
      {
        topic: "Henderson",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Virginia Henderson's definition centres nursing on which goal?",
        options: [
          "Assisting the individual to perform health-related activities and gain independence as rapidly as possible",
          "Carrying out doctors' orders precisely and efficiently",
          "Keeping the patient dependent so care remains needed",
          "Managing the hospital budget and staffing",
        ],
        correctIndex: 0,
        explanation: "Henderson saw the nurse as helping the person do what she would do unaided if she had the strength or knowledge — with independence as the goal. It is the definition behind your admission checklist and your discharge teaching.",
      },
      {
        topic: "Orem",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman with severe anaemia is too breathless to cook, and she does not know which foods are iron-rich. In Orem's terms, what has appeared, and what is the nurse's role?",
        options: [
          "A self-care deficit — nursing steps in with support and education until she can care for herself again",
          "A therapeutic relationship — nursing focuses only on conversation for several weeks",
          "An environmental hazard — nursing must first relocate her house",
          "An interpersonal conflict — nursing should discipline her for poor diet",
        ],
        correctIndex: 0,
        explanation: "Orem's theory is built around self-care deficits: when illness, knowledge or resources fall short of what the person's situation demands, nursing supplies the deficit — here through treatment, practical help and iron-rich diet education — aiming to return the ability to her hands.",
      },
    ],
    flashcards: [
      {
        topic: "Metaparadigm",
        front: "Name the four concepts of nursing's metaparadigm.",
        back: "Person, environment, health, and nursing — the four corners every nursing theory addresses.",
      },
      {
        topic: "Henderson",
        front: "What is Henderson's famous goal for nursing?",
        back: "To assist the individual — sick or well — to perform activities contributing to health or recovery, helping her gain independence as rapidly as possible.",
      },
      {
        topic: "Orem",
        front: "What is a 'self-care deficit' in Orem's theory?",
        back: "A gap between what the person's health situation demands and what she can do for herself — the point at which nursing steps in with support and education, aiming to hand the ability back.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Nursing Theorists and Their Work (Alligood)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "International Council of Nurses",
        title: "ICN definitions of nursing",
        note: "Educational source — verify current ICN materials.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 10. Nursing as a Profession: Standards and Accountability
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Nursing as a Profession",
    lessonTitle: "Nursing as a Profession: Standards and Accountability",
    description: "What makes an occupation a profession — education, ethics, regulation and public trust — and what being accountable means for you from your very first clinical day.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "List the hallmarks that make nursing a profession rather than a job.",
      "Define accountability and describe its three faces — legal, professional and ethical.",
      "Apply the concept of scope of practice to the position of a student nurse.",
    ],
    tags: ["profession", "accountability", "standards", "scope of practice", "regulation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Plenty of occupations pay better than nursing. What nursing has is something rarer: it is a profession. That word is not a compliment — it is a claim with evidence behind it. An occupation becomes a profession when it meets a set of tests: a specialised body of knowledge built on education and research, a service orientation (the work exists for society, not just for salary), a code of ethics, a professional association, and — most decisively — regulation and accountability to the public.\n\nThe heart of the matter is trust. A patient at 02:00 cannot inspect your training. She cannot audit your knowledge of oxytocin or resuscitation. She simply hands you her body — or her baby. A profession exists to make that trust rational: standards define what competent practice looks like, and accountability means someone answers if it is not delivered.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Standards** are the profession's written promises. The Nursing and Midwifery Council's code of conduct and standards of practice tell you what good care looks like, and your facility's policies make them local. They are not obstacles to your initiative — they are your defence when you followed them and your map when you are unsure.\n\n**Accountability** means you are answerable for what you do and what you fail to do. It has three faces: legal (answerable in law for negligence or harm), professional (answerable to the Council, which can suspend or strike you off) and ethical (answerable to your own conscience and to the patient). It is why documentation matters — the record is the evidence of your care.\n\n**Scope of practice** defines the boundary of what you may safely and lawfully do. As a student, yours is narrower than a registered nurse's, and that is not a slight — it is scaffolding. Working within it, asking for supervision and saying 'I have not been trained for this' are professional acts, not confessions of weakness.",
      },
      {
        type: "clinical_pearl",
        body: "Accountability is trust in writing: document what you did, practise only what you are trained and permitted to do, and when you decline a task beyond your competence, decline it with a straight back — the patient's safety is the reason, and that reason is respectable.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The ward is short-staffed during a busy evening. The nurse on duty, who knows you are capable, says: 'Set up the oxytocin infusion for bed 6 and monitor her — I am with another delivery.' You have watched infusions being set up but never done one unsupervised, and as a student this is not in your scope. What is the professional response — and how do you say it?\n\nAnswer: Decline the unsupervised task clearly and without apology-theatre: 'I have not been signed off for setting up oxytocin, and I am not permitted to do it unsupervised — I will prepare the drip stand and the bag, and fetch you the moment anything changes.' Then escalate: call the second nurse, the doctor, or the ward supervisor so bed 6 is covered by a competent practitioner. Protecting the patient from a well-meaning student is the professional act — and covering the staffing gap is management's problem to solve, not yours to absorb unsafely.",
      },
      {
        type: "memory_trick",
        body: "A profession stands on three legs: 'Brains, Heart, Spine' — knowledge and education, ethics and service, regulation and accountability. A stool needs all three; sit on any two and the profession falls over.",
      },
      {
        type: "summary",
        body: "- A profession is proven, not claimed: specialised education, research-based knowledge, service orientation, ethics, association and regulation.\n- Standards and codes of practice are written promises that make public trust rational.\n- Accountability has three faces: legal, professional (to the Council) and ethical — and documentation is its evidence.\n- Scope of practice defines your lawful boundaries; for a student it is scaffolding, not insult.\n- Declining tasks beyond your training, escalating staffing gaps and asking for supervision are professional acts.",
      },
    ],
    questions: [
      {
        topic: "Profession",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is NOT a hallmark of a profession?",
        options: [
          "A specialised body of knowledge built through formal education and research",
          "A code of ethics and a regulatory body with the power to discipline members",
          "A high salary relative to other occupations",
          "An orientation of service to society",
        ],
        correctIndex: 2,
        explanation: "Salary is an economic feature, not a professional one: many low-paid fields are professions and many high-paid fields are not. The hallmarks are knowledge, ethics, service and — decisively — regulation with accountability.",
      },
      {
        topic: "Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student nurse is asked to perform a procedure she has never been trained or signed off to perform. What is the professionally correct response?",
        options: [
          "Attempt it carefully — the nurse asked, so responsibility now transfers to her",
          "Perform it if the patient looks stable and it seems straightforward",
          "Decline politely, explain it is outside her student scope, offer to help within her role, and escalate to a competent practitioner",
          "Refuse and report the nurse to the police",
        ],
        correctIndex: 2,
        explanation: "Being asked does not transfer competence — accountability follows the person who performs the act. The professional answer is to decline with a reason, assist within scope, and ensure a qualified practitioner covers the task. Escalation goes to supervisors, not to criminal process.",
      },
      {
        topic: "Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best defines professional accountability in nursing?",
        options: [
          "Being answerable — legally, professionally and ethically — for your actions and omissions in patient care",
          "Following the senior nurse on duty without question",
          "Working unpaid overtime to prove dedication",
          "Delegating all risky decisions to the doctor so blame never lands on you",
        ],
        correctIndex: 0,
        explanation: "Accountability means answering for both what you did and what you failed to do, across the legal, professional (Council) and ethical domains. Delegating every decision is an abdication of it — and following orders has never excused a nurse who knew better.",
      },
    ],
    flashcards: [
      {
        topic: "Profession",
        front: "What three legs does a profession stand on (the 'Brains, Heart, Spine' rule)?",
        back: "Brains — specialised education and a research-based body of knowledge; Heart — ethics and service to society; Spine — regulation, standards and accountability.",
      },
      {
        topic: "Accountability",
        front: "What are the three faces of nursing accountability?",
        back: "Legal (answerable in law), professional (answerable to the Nursing and Midwifery Council, including for documentation), and ethical (answerable to the patient and your conscience).",
      },
      {
        topic: "Scope of Practice",
        front: "What should a student do when asked to perform a task outside her training or scope?",
        back: "Decline politely with the reason (patient safety), assist within her role, and escalate so a competent practitioner takes the task — being asked does not transfer competence.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of conduct and standards of practice",
        note: "Educational reference — consult the Council's current publications.",
      },
      {
        organization: "International Council of Nurses",
        title: "The ICN Code of Ethics for Nurses",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 11. Professional Identity: Becoming the Nurse You Admire
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Nursing as a Profession",
    lessonTitle: "Professional Identity: Becoming the Nurse You Admire",
    description: "The values, habits and self-image you build now — from how you wear the uniform to how you hold a phone — will carry you through your whole career.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe professional identity and how it forms during training.",
      "Identify daily habits that build or damage a professional reputation.",
      "Maintain professional boundaries, including on social media.",
      "Explain the value of role models, mentors and self-care in identity formation.",
    ],
    tags: ["identity", "professionalism", "boundaries", "social media", "mentoring"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Professional identity is the quiet shift that happens somewhere in your training: you stop being someone who is studying nursing and become a nurse. Sociologists call the process professional socialisation — the values, habits and self-respect of the profession slowly becoming yours, until they hold even when nobody is watching.\n\nIt is built from small things. Arriving before your shift, not five minutes into it. A clean uniform and a visible name badge. Speaking about patients with respect even in the staff room. Handing over properly when you are tired. Choosing not to photograph anything on the ward. Over four years these either become your character or never do — and the habits of your first year are the hardest to unlearn later.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Boundaries** protect the caring relationship. You may be warm without becoming the patient's friend: no lending money, no personal phone numbers, no accepting significant gifts, no special favours that compromise judgement. The relationship is professional precisely so that the patient can trust your advice is clinical, not personal.\n\n**Social media** is where identities are now lost. Nothing from the ward belongs on your status — no newborn photos, no delivery stories, no complaints about patients or colleagues. A photo without a name still identifies a mother to her whole community; on a small-town ward, anonymity is an illusion. Consent is a legal process, not a friendly nod.\n\n**Role models and mentors** accelerate you: pick the nurse whose practice you admire and study her — ask her why she does things, and let her correct you. And guard your own fuel: sleep, faith or rest, friendships outside the ward. Compassion fatigue is a professional hazard; caring for yourself is maintenance, not indulgence. The nurse you admire was built by a thousand small choices, repeated.",
      },
      {
        type: "clinical_pearl",
        body: "Your uniform is a promise made before you speak a word: this person will be punctual, clean, honest and discreet. Wear it like it is heavy — because to every patient who sees it, it is.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your classmate posts on her WhatsApp status a photo of a newborn with the caption 'my first catch — so cute!' There is no name, but the hospital ward curtain and a corner of the mother's wrapper are visible. She is proud, and she sees no harm — the mother even smiled when she took it. What is at stake, and what do you say to her?\n\nAnswer: This breaches confidentiality and professionalism even without a name: the setting, the wrapper and the story identify the family to their whole community, and a friendly smile is not documented consent for publication. Speak to her privately and kindly — she is proud, not malicious. Ask her to remove it, explain the identifiability and the consent principle, and tell her the pride deserves a better channel: her logbook, her tutor's ears, her family's celebration. If it stays up after the conversation, your duty is to inform your tutor — protecting patients outranks protecting feelings.",
      },
      {
        type: "memory_trick",
        body: "Wear the checklist as an acronym: N.U.R.S.E. — Neat, Upstanding (honest), Reliable (punctual, follows through), Supportive (to patients and colleagues), Ethical (confidential, boundaried). Five letters to check every morning in the mirror.",
      },
      {
        type: "summary",
        body: "- Professional identity is the shift from 'studying nursing' to 'being a nurse' — built from daily habits, not declarations.\n- Small behaviours compound: punctuality, uniform, name badge, respectful speech about patients, proper handover.\n- Boundaries keep care trustworthy: no money, no personal numbers, no significant gifts, no favours that bend judgement.\n- Nothing from the ward goes on social media — unnamed photos are still identifiable, and a smile is not consent.\n- Choose role models, use mentors, and protect your own rest: self-care is professional maintenance.",
      },
    ],
    questions: [
      {
        topic: "Professional Identity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A student posts a newborn's photo on WhatsApp with no name, but the ward curtain and the mother's wrapper are visible. Why is this still a confidentiality problem?",
        options: [
          "Only hospital buildings are legally protected from photography",
          "Photos are only confidential once the patient's name is written in the caption",
          "Contextual details can identify the family to their community even without a name, and a casual smile is not documented consent",
          "It is not a problem as long as the caption is positive",
        ],
        correctIndex: 2,
        explanation: "Confidentiality protects identifiability, not just names — a curtain, a wrapper and a birth story are enough for the community to know exactly who is meant. Publication of patient images requires genuine, documented consent; a positive caption changes nothing.",
      },
      {
        topic: "Professional Socialisation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does 'professional socialisation' mean for a student nurse?",
        options: [
          "Attending enough social events to network with senior staff",
          "The process by which the values, behaviours and identity of the profession gradually become one's own",
          "Learning to socialise primarily with patients' families for better rapport",
          "Being formally introduced at the graduation ceremony",
        ],
        correctIndex: 1,
        explanation: "Professional socialisation is the internalisation of a profession's values, norms and self-image — the slow shift from wearing the role to being the role. It happens through modelling, feedback and repeated daily habits, not ceremonies.",
      },
      {
        topic: "Professional Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A grateful postnatal mother offers you an expensive gift and asks for your personal phone number so she can 'call you for advice anytime'. What is the professionally best response?",
        options: [
          "Accept both — building warm relationships is the heart of nursing",
          "Accept the gift and give the clinic's number instead, keeping the gift quietly",
          "Politely decline the gift and personal number while warmly giving her proper channels — clinic line, next appointment, counselling services — so your clinical judgement stays free",
          "Report her immediately for attempting to bribe staff",
        ],
        correctIndex: 2,
        explanation: "Significant gifts and personal contact blur the boundary that keeps clinical advice trustworthy: the patient must be able to trust that your guidance is professional, not paid for or social. Declining warmly and redirecting to proper channels preserves the caring relationship; a gift of this kind is gratitude, not bribery, and needs no report.",
      },
    ],
    flashcards: [
      {
        topic: "Professional Identity",
        front: "What does the N.U.R.S.E. identity checklist stand for?",
        back: "Neat, Upstanding (honest), Reliable (punctual, follows through), Supportive (to patients and colleagues), Ethical (confidential, boundaried).",
      },
      {
        topic: "Confidentiality",
        front: "Why does an unnamed ward photo still breach confidentiality?",
        back: "Identifiability, not just names, is what confidentiality protects — settings, clothing and stories reveal the family to their community, and publication needs documented consent.",
      },
      {
        topic: "Professional Boundaries",
        front: "Give two examples of professional boundary-keeping with patients.",
        back: "Politely declining personal phone numbers, loans or significant gifts; giving proper channels (clinic line, appointments) instead — so clinical advice stays independent of personal favour.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of conduct, professionalism and social media guidance",
        note: "Educational reference — consult the Council's current publications.",
      },
      {
        organization: "International Council of Nurses",
        title: "The ICN Code of Ethics for Nurses",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 12. Teamwork: Healthcare Is a Team Sport
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Working as One Team",
    lessonTitle: "Teamwork: Healthcare Is a Team Sport",
    description: "No one saves a life alone. How teams really work — roles, structured communication, and the humility to speak up and to listen.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the members of the healthcare team, including support staff, and their contribution to patient outcomes.",
      "Use SBAR and closed-loop communication in handover and escalation.",
      "Explain why and how the newest team member can and must speak up about a safety concern.",
    ],
    tags: ["teamwork", "collaboration", "communication", "sbar", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Watch a well-run emergency — a postpartum haemorrhage, a resuscitation — and you are not watching individuals; you are watching an organism. One nurse works on the uterus, another calls the doctor, a third runs for blood, a porter clears the corridor, the records officer finds the folder. The analysis of preventable harm keeps finding the same root cause, and it is rarely ignorance: it is communication that failed between people who each knew something.\n\nThe team is larger than the people in uniforms. The cleaner who disinfects the delivery room is doing infection prevention. The records officer who files correctly is protecting the next decision. The security man who controls visitors at night is part of newborn safety. Respect for every role is not politeness — it is clinical accuracy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Structure your words.** Handovers and escalations fail when they wander. SBAR gives you a spine: Situation — what is happening right now; Background — the story so far; Assessment — what you found and think; Recommendation — what you propose. Thirty seconds, in order, with the ask at the end.\n\n**Close the loop.** Verbal orders and shouted requests in emergencies get misheard. The receiver repeats the message back — 'Oxytocin 10 units IM, bed 6, confirming?' — and the sender confirms. Two extra seconds, errors eliminated.\n\n**Speak up, whoever you are.** Modern safety culture, built into tools like the WHO Surgical Safety Checklist, deliberately flattens hierarchy: anyone in the room is invited to voice a concern before a critical step. As a student you may be the one who counted the pads correctly, or the one whose patient 'doesn't look right'. Voice it with data, not volume: 'I am concerned because…' then the numbers. If dismissed and still concerned, escalate one level up — that is procedure, not disrespect. Listening when someone junior speaks is the mark of a senior worth working with.",
      },
      {
        type: "clinical_pearl",
        body: "Bring data, not adjectives, when you raise a concern: 'I am concerned — five soaked pads and her pulse is 108' beats 'I think she's not fine' every time. Numbers make the newest voice audible.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In your district hospital's delivery room, a woman delivered forty minutes ago. You have been counting the pads: five fully soaked since birth, and the bowl you weighed suggests over 500 ml lost so far. The woman is restless; her pulse is 108 and rising on your recheck. The nurse, busy with the baby, glances over and says, 'That's normal post-delivery oozing, she's fine.' Your stomach is not so sure. What do you say — and to whom?\n\nAnswer: Speak up now, with data, in her hearing: 'Sister, I am concerned — I have counted five soaked pads, over 500 ml, and her pulse has risen to 108. Could you check the fundus?' SBAR-style specifics make the concern actionable and hard to wave away. If she reassures you but the pulse keeps climbing and bleeding continues, escalate one level yourself — call the senior nurse or doctor; in postpartum haemorrhage, minutes matter, and being wrong about speaking up costs nothing. Closed-loop the requests: 'Confirming — you want me to run for the IV set and call the doctor?' The patient is the referee of this conversation, not the hierarchy.",
      },
      {
        type: "memory_trick",
        body: "SBAR, said as 'Say it Briefly And Right': Situation, Background, Assessment, Recommendation. And for speaking up, remember the ladder: Concern — voice it; Uncomfortable — repeat it; Safety issue — escalate it. Facts first, feelings as the alarm bell.",
      },
      {
        type: "summary",
        body: "- Safe care is a team output; communication failure between people who each know part is the classic root of harm.\n- The team includes cleaners, records officers and porters — their work is clinical, not peripheral.\n- SBAR structures escalation: Situation, Background, Assessment, Recommendation.\n- Closed-loop communication: receiver repeats the message, sender confirms — seconds that kill errors.\n- Anyone on the team, including a student, may voice a safety concern — with data; escalate one level if dismissed and still concerned.",
      },
    ],
    questions: [
      {
        topic: "SBAR",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR communication, what does the 'R' require you to state?",
        options: [
          "The rules of the ward",
          "Your recommendation — what you propose should be done",
          "Your rank and years of experience",
          "A restatement of everything already said",
        ],
        correctIndex: 1,
        explanation: "The R closes the loop with an action: what you think should happen — review, call, blood, transfer. Ending with a clear recommendation converts information into a decision.",
      },
      {
        topic: "Closed-Loop Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During an emergency, the nurse shouts a medication order across the room. What does closed-loop communication require?",
        options: [
          "The receiver repeats the message back and the sender confirms it, before acting",
          "The receiver writes the order down quietly and acts after the emergency ends",
          "The sender repeats the order twice without waiting for confirmation",
          "The most senior person present assumes the order was heard correctly",
        ],
        correctIndex: 0,
        explanation: "Read-back and confirmation — the closed loop — is what catches the 'oxytocin' heard as 'ergometrine' before a syringe is drawn. Silence is never confirmation; in emergencies, mishearing is the default, not the exception.",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about the healthcare team is TRUE?",
        options: [
          "Only registered professionals contribute to patient outcomes; support staff are purely administrative",
          "A student who notices a safety concern should stay quiet until she has qualified",
          "Every role, including cleaners, records officers and porters, contributes to patient safety and outcomes — and anyone may voice a concern",
          "Teamwork means the senior nurse's judgement always overrides all new information",
        ],
        correctIndex: 2,
        explanation: "Outcomes are produced by the whole system — the cleaner does infection prevention, the records officer protects information flow — and modern safety culture invites anyone, at any level, to voice a concern. Hierarchy that silences the newest eyes is how known dangers stay unreported.",
      },
    ],
    flashcards: [
      {
        topic: "SBAR",
        front: "What do the letters of SBAR stand for?",
        back: "Situation (what is happening now), Background (the story so far), Assessment (what you found), Recommendation (what you propose should be done).",
      },
      {
        topic: "Closed-Loop Communication",
        front: "What is closed-loop communication?",
        back: "The receiver repeats the order or message back, and the sender confirms before action — the read-back that catches misheard instructions, especially in emergencies.",
      },
      {
        topic: "Speaking Up",
        front: "How should a student raise a safety concern with a senior?",
        back: "Voice it early, with data not adjectives — 'I am concerned because…' followed by numbers. If dismissed and the concern persists, escalate one level up: that is procedure, not disrespect.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety curriculum and teamwork guidance (incl. Surgical Safety Checklist principles)",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Quality and safety protocols for facility care",
        note: "Educational reference — consult your facility's policy.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 13. Introduction to Ethics: Doing Right When It's Hard
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "perspectives-nursing-1",
    moduleTitle: "Working as One Team",
    lessonTitle: "Introduction to Ethics: Doing Right When It's Hard",
    description: "Your first map of right and wrong in care — autonomy, beneficence, nonmaleficence and justice, and what to do when they point in different directions.",
    difficulty: "Moderate",
    durationMin: 14,
    objectives: [
      "Define the four prima facie principles of healthcare ethics.",
      "Apply autonomy, beneficence, nonmaleficence and justice to everyday ward situations.",
      "Recognise a genuine ethical dilemma and know the supports available — codes, supervisors and ethics committees.",
    ],
    tags: ["ethics", "principles", "autonomy", "consent", "confidentiality"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ethics is the study of right and wrong conduct — and in healthcare it is not a luxury subject, because every shift hands you real power over real people. Should you tell the husband what his wife's test showed? Must a woman accept a referral she does not want? May you keep a teenager's secret from her mother? These are not questions of niceness; they have principles behind them.\n\nThe classic map is four principles, and you will use them within weeks of starting clinicals. They do not hand you easy answers — good dilemmas exist precisely because principles collide — but they give you a vocabulary to think, argue and document with. And when the collision is serious, you are never meant to solve it alone.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Beneficence**: act for the patient's benefit — the reason you entered this profession. **Nonmaleficence**: do no harm — older than medicine itself ('first, do no harm'). It asks not only what helps, but what might hurt: every drug, every procedure, even every truth-telling has a cost to weigh.\n\n**Autonomy**: respect the patient's right to decide for herself. It is why informed consent is not a signature but a conversation — the diagnosis, the plan, the alternatives and the risks, explained in Twi or Ewe or Ga until she truly understands, with the clear right to refuse. Without understanding there is no consent; there is only compliance.\n\n**Justice**: fairness — equal care regardless of wealth, tribe, religion or who shouted loudest, and honest sharing of scarce resources. Supporting these are **confidentiality** (what a patient tells you stays with her care team) and **veracity** (tell the truth, including when things go wrong).\n\nWhen principles collide — autonomy versus beneficence, confidentiality versus protection — you are in a dilemma. Then: talk to your supervisor, check the code (ICN and the Nursing and Midwifery Council both publish one), involve the ethics committee for hard cases, and document your reasoning. Reasoning recorded is reasoning defended.",
      },
      {
        type: "clinical_pearl",
        body: "Informed consent is a conversation in a language she understands, not a signature on a form. If she cannot explain the procedure back to you in her own words, autonomy has not been exercised — only obedience has.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A sixteen-year-old comes to the antenatal clinic alone, pregnant and frightened. She begs you not to tell her mother, and she wants to be tested for HIV today. She is not ready for anyone to know about the pregnancy, and the man involved is older than she is. Which principles are pulling against each other here, and what should you do?\n\nAnswer: The pull is between confidentiality and autonomy (her privacy, her consent to testing) on one side, and beneficence and protection on the other. Start with confidential, judgement-free care: register her, support the HIV test with counselling, and gently explore why she fears her mother. Encourage — without forcing — a trusted adult's involvement, because a sixteen-year-old facing birth needs support. But the 'older man' changes the ground: if the relationship may be abusive or exploitative, you have a duty to escalate and report — child-protection law overrides ordinary confidentiality for a minor. Involve your supervisor, document your facts and reasoning, and keep the warmth that made her trust you with the secret.",
      },
      {
        type: "memory_trick",
        body: "The four principles fit one phrase: 'Be A Nice Judge' — Beneficence, Autonomy, Nonmaleficence, Justice. Whenever a situation feels tangled, lay it on those four letters and watch the knot show itself.",
      },
      {
        type: "summary",
        body: "- Four principles: beneficence (do good), nonmaleficence (do no harm), autonomy (respect her decisions), justice (be fair).\n- Informed consent is understanding in her own language with a genuine right to refuse — not a signature.\n- Confidentiality and veracity support all four; breaches of either need justification, not convenience.\n- A dilemma means the principles themselves collide — you are not failing, you are thinking.\n- You never solve a serious dilemma alone: supervisor, professional code, ethics committee, documented reasoning.",
      },
    ],
    questions: [
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Before a procedure, you explain the diagnosis, the plan, the alternatives and the risks to a patient in Twi until she can repeat them back, and she agrees. Which ethical principle have you mainly honoured?",
        options: [
          "Autonomy",
          "Justice",
          "Fidelity",
          "Nonmaleficence",
        ],
        correctIndex: 0,
        explanation: "Autonomy is the patient's right to make informed decisions about her own body — and it only exists where real understanding and a genuine right to refuse exist. The language of explanation is what makes the consent real.",
      },
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The maxim 'first, do no harm' corresponds to which ethical principle?",
        options: [
          "Beneficence",
          "Nonmaleficence",
          "Justice",
          "Veracity",
        ],
        correctIndex: 1,
        explanation: "Nonmaleficence is the duty to avoid harm — including the harms of unnecessary interventions, omissions and hasty truth-telling. Beneficence's 'do good' and nonmaleficence's 'do no harm' often argue with each other over the same decision, which is exactly where ethics begins.",
      },
      {
        topic: "Confidentiality",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 16-year-old antenatal client asks you to keep her pregnancy secret from her parents. In which situation does your duty of confidentiality most clearly give way to a higher duty?",
        options: [
          "She is simply embarrassed and fears scolding",
          "Her parents are known to be strict about school performance",
          "You suspect the pregnancy results from abuse or exploitation",
          "She has not yet told the baby's father",
        ],
        correctIndex: 2,
        explanation: "Embarrassment, strict parents and awkward family dynamics call for sensitive, confidential support and gentle encouragement to involve a trusted adult — but suspected abuse or exploitation of a minor triggers a duty to protect that overrides confidentiality. Escalate to your supervisor and follow child-protection procedures, documenting your reasoning.",
      },
    ],
    flashcards: [
      {
        topic: "Ethical Principles",
        front: "Name the four prima facie principles of healthcare ethics, with the mnemonic.",
        back: "Beneficence, Autonomy, Nonmaleficence, Justice — 'Be A Nice Judge.'",
      },
      {
        topic: "Informed Consent",
        front: "What makes consent truly 'informed'?",
        back: "A conversation in the patient's own language covering diagnosis, plan, alternatives and risks, with a genuine right to refuse — confirmed when she can explain it back in her own words.",
      },
      {
        topic: "Confidentiality",
        front: "When can confidentiality be overridden?",
        back: "When a higher duty appears: serious risk of harm to the patient or others, suspected abuse or exploitation (especially of a minor), and legal reporting duties — with supervisor involvement and documented reasoning.",
      },
    ],
    sources: [
      {
        organization: "International Council of Nurses",
        title: "The ICN Code of Ethics for Nurses",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of conduct and ethical standards",
        note: "Educational reference — consult the Council's current publications.",
      },
      {
        organization: "World Health Organization",
        title: "Adolescent-friendly health services guidance",
        note: "Educational source — verify current WHO guidance.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
  // 14. Health and Illness: A Moving Scale, Not Two Boxes
  // ───────────────────────────────────────────────────────────
  {
    courseSlug: "health-promotion-1",
    moduleTitle: "Health & Its Determinants",
    lessonTitle: "Health and Illness: A Moving Scale, Not Two Boxes",
    description: "Health isn't yes or no — it's a continuum we all travel along. See where your patients sit on the scale, and what pushed them there.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "State the WHO definition of health and explain what it adds beyond 'not sick'.",
      "Describe the health-illness continuum and how people move along it.",
      "Identify the social determinants that push people toward or away from illness.",
      "Apply the continuum and determinants thinking to a missed antenatal appointment.",
    ],
    tags: ["health", "illness", "continuum", "determinants of health", "health promotion"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ask a woman if she is healthy and she will check for symptoms: no fever, no pain — 'I am well.' It feels like two boxes, sick or well. The World Health Organization, since 1948, has insisted on something bigger: health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity. By that measure, a woman with no fever who is exhausted, anaemic and anxious is not fully healthy — even if she says she is fine.\n\nSo picture health not as a box but as a **continuum** — a scale from peak wellness to serious illness and death. Everyone alive is somewhere on it, and nobody stays in one place: malaria, hunger or fear push a woman toward the illness end; treatment, rest, support and knowledge pull her back. Your job as a nurse is to meet her wherever she stands, and help her move the right way.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "What moves people along the scale? Partly biology — genes, age, infection. But the bigger engine is what WHO calls the **social determinants of health**: the conditions in which people are born, grow, live, work and age. Income. Education. Clean water and sanitation. Food security. Housing. Transport to the clinic. The status of women, and who decides about money and permission to travel for care. Culture and beliefs. Access to services — which in Ghana is why the CHPS strategy and the National Health Insurance Scheme exist.\n\nThis lens changes your clinical behaviour. A woman who has missed two antenatal visits is rarely 'careless' — she is more likely broke, far from the road, needing her husband's consent, or in the farming season. Labelling her non-compliant treats the symptom and ignores the cause; asking 'what made it hard to come?' is diagnosis of the determinant.\n\nThe continuum also maps your interventions: health **promotion** keeps the well well (nutrition, family planning education); prevention catches drift early (iron, tetanus, blood pressure screening); treatment pulls back from illness; rehabilitation restores after it. A nurse works the whole scale — the well woman at ANC is as much your patient as the emergency in theatre.",
      },
      {
        type: "clinical_pearl",
        body: "When a patient 'defaults', ask what pushed her before you write what she failed to do. Distance, money, permission and farm work move people off the health end of the scale more surely than any germ does.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Mansa, pregnant with her third child, arrives at your rural clinic pale and tired, having missed two antenatal appointments. Her haemoglobin is low. Another student mutters 'non-compliant' and moves on. Using the continuum and the determinants lens, what do you see — and what will you do beyond prescribing iron?\n\nAnswer: You see a woman who has drifted along the continuum — anaemia and exhaustion moving her away from wellness — with determinants, not carelessness, as the likely engine. So you ask, without accusation, what made the previous visits hard. Suppose she says her husband travels for work, she has no fare, and it is farming season: your care now includes scheduling her next visit on outreach market days, helping with NHIS registration, a health talk that includes her family, and treatment for the anaemia itself. The iron tablet treats today's finding; addressing the determinants is what keeps next month's appointment.",
      },
      {
        type: "memory_trick",
        body: "Two hooks. First: 'Health is a road, not a room — everyone is somewhere on it, moving.' Second, WHO's own five verbs for the determinants: 'Born, grow, live, work, age' — five stages where health is decided long before the clinic is reached.",
      },
      {
        type: "summary",
        body: "- WHO (1948): health is complete physical, mental and social well-being — not merely the absence of disease.\n- The health-illness continuum is a moving scale: everyone is somewhere on it, all the time, drifting either way.\n- Social determinants — income, education, water, food, housing, transport, gender, culture, services — move people more than biology alone.\n- 'Defaulted' patients usually have determinants behind them: ask 'what made it hard to come?' before judging.\n- Promotion keeps the well well, prevention catches drift, treatment pulls back, rehabilitation restores — nursing works the whole scale.",
      },
    ],
    questions: [
      {
        topic: "Definition of Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to the WHO definition, health is:",
        options: [
          "The absence of any diagnosed disease",
          "A state of complete physical, mental and social well-being, not merely the absence of disease or infirmity",
          "The ability to work a full day without tiredness",
          "A normal set of vital signs and laboratory results",
        ],
        correctIndex: 1,
        explanation: "WHO's 1948 definition deliberately reaches beyond 'not sick': a woman free of disease but exhausted, isolated or anxious is not yet healthy. This is why nursing assesses the whole life, not just the chart.",
      },
      {
        topic: "Health-Illness Continuum",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best describes the health-illness continuum?",
        options: [
          "People are either in the health box or the illness box, and mostly stay where they are",
          "Health and illness form a scale along which everyone sits somewhere and moves over time, in either direction",
          "The continuum applies only to people diagnosed with chronic disease",
          "Once a person moves toward illness, movement back toward wellness is rarely possible",
        ],
        correctIndex: 1,
        explanation: "The continuum is a moving scale: the same woman can be pushed toward illness by malaria, anaemia or stress and pulled back by treatment, rest and support. It is why 'well' versus 'sick' thinking misses the anaemic, exhausted mother who claims she is fine.",
      },
      {
        topic: "Social Determinants",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman repeatedly misses antenatal visits. Which factor, if found on asking, would be a social determinant of her health rather than simple carelessness?",
        options: [
          "She forgot the clinic days printed in her folder",
          "The clinic is 15 km away, there is no transport money, and she needs her husband's permission to travel",
          "She dislikes the taste of iron tablets",
          "She prefers traditional medicine and dislikes hospitals",
        ],
        correctIndex: 1,
        explanation: "Distance, cost and the need for permission are classic structural determinants — conditions shaping her options long before the clinic day. They call for practical redesign (outreach days, NHIS support, involving the family), not a lecture on compliance.",
      },
    ],
    flashcards: [
      {
        topic: "Definition of Health",
        front: "State the WHO definition of health.",
        back: "A state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity (WHO, 1948).",
      },
      {
        topic: "Health-Illness Continuum",
        front: "What is the health-illness continuum?",
        back: "A moving scale from peak wellness to serious illness and death — everyone sits somewhere on it, all the time, drifting in either direction with circumstances and care.",
      },
      {
        topic: "Social Determinants",
        front: "What are the social determinants of health (WHO's shorthand)?",
        back: "The conditions in which people are born, grow, live, work and age — income, education, water, food, housing, transport, gender, culture and access to services.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Constitution of the World Health Organization (1948) and social determinants of health resources",
        note: "Educational source — verify current WHO materials.",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS) and NHIS orientation materials",
        note: "Educational reference — consult current GHS publications.",
      },
    ],
  },
];
