// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 1 — Batch C (18 lessons)
// Anchored to prisma/seed-data/anchors/y2s1-c.json
// (1x nutrition-dietetics, 9x first-aid, 8x clinical-skills-2)
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "nutrition-dietetics",
    moduleTitle: "When Nutrition Fails",
    lessonTitle: "Nutritional Assessment: Screening Every Patient",
    description:
      "Some of the quietest problems on your ward are written on the body — loose clothes, pale palms, swelling where it should not be. This lesson teaches you to catch them in minutes, every time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Explain the difference between nutritional screening and a full nutritional assessment.",
      "Use BMI, unplanned weight loss and MUAC to place a patient at low, medium or high nutritional risk.",
      "Apply screening results the same day: nutrition care plan, weekly weighing and referral.",
    ],
    tags: ["nutritional assessment", "screening", "malnutrition", "muac", "ward care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When somebody is slowly starving or quietly sliding into illness, the signs arrive long before the diagnosis: a belt tightened two notches, sleeves gone loose, a patient 'not hungry' for the third day running. Nutrition screening is the quick, repeatable way to catch these signals on every admission — not only on the patients who look thin.\n\nScreening is not a full assessment. It is a short set of measurements and questions that sorts people into low, medium or high risk, so that food and follow-up go where they are needed most.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A widely used approach is the MUST tool: **body mass index**, **unplanned weight loss**, and whether acute illness has kept the patient from eating for five days or more. A BMI under 18.5, a loss of more than 5% of body weight over three to six months, or no food intake for five days each push the score upward. A total of two or more means high risk, and high risk means action today — not next week.\n\nWhen scales are scarce — a busy CHPS compound, a home visit — the MUAC tape saves you: below roughly 23 cm in adults suggests undernutrition, with the exact cut-off set by your local protocol. Add your eyes: pale conjunctiva, a smooth sore tongue, leg oedema on a poor diet, or a wasted frame carrying fluid. Screen on admission, rescreen weekly, and never let oedema reassure you — fluid can hide a starving body from the scale.",
      },
      {
        type: "clinical_pearl",
        body: "A 'normal' weight in a swollen patient can hide serious undernutrition — the MUAC tape does not lie when the scale does. Score high risk, and the clock starts: plan, fortify, weigh weekly, refer.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 74-year-old farmer is admitted after a stroke, unable to swallow safely. His trousers hang loose; his wife says his clothes 'have been falling off him for months'. His BMI is 16.8, MUAC 20.5 cm, conjunctiva pale. The ward is busy, and the nutrition screen is left on the desk for 'later'.\n\nWhat risk band is he actually in, and what should happen today rather than later?\n\nAnswer: He is high risk — BMI well under 18.5, clear unplanned weight loss, and now an acute illness that has stopped his intake. Today he needs the score documented, a feeding plan agreed with the senior (including how he eats while swallowing is unsafe), fortified food or supplements once cleared, weekly weights, and a dietitian referral where available. 'Later' is how malnutrition becomes the second illness — the one you gave him in hospital.",
      },
      {
        type: "memory_trick",
        body: "MUST spells itself: **M**easure the BMI, **U**nplanned weight loss, **S**ick and not eating, then **T**ally — 2 or more means act today, not tomorrow.",
      },
      {
        type: "summary",
        body: "- Screening sorts every patient into low, medium or high nutritional risk — it belongs to every admission.\n- MUST = BMI + unplanned weight loss + acute illness effect on intake; 2 or more is high risk.\n- MUAC (below about 23 cm in adults) is your fallback when scales are unavailable.\n- Oedema masks wasting — trust the tape and your eyes over the scale alone.\n- High risk means same-day action: care plan, fortified food or supplements, weekly weights, referral.",
      },
    ],
    questions: [
      {
        topic: "Nutritional Screening",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "nutrition-dietetics",
        stem: "A patient's BMI is 17.4. In the MUST approach, this contributes which of the following?",
        options: [
          "A score suggesting high nutritional risk on its own",
          "A score suggesting medium risk, and only when combined with weight loss",
          "No score, because a BMI under 20 is normal in older adults",
          "A score only if the patient is also oedematous",
        ],
        correctIndex: 0,
        explanation: "A BMI under 18.5 scores 2 points in the MUST tool, which by itself places the patient in the high-risk band of 2 or more. The other options misstate how the tool works.",
      },
      {
        topic: "MUAC and Oedema",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "nutrition-dietetics",
        stem: "Your scales are broken at the CHPS compound and you suspect wasting in a postpartum mother whose legs are swollen. What is the most reliable bedside measure?",
        options: [
          "Use yesterday's clinic card weight as today's weight",
          "Estimate BMI from how loose her clothes are",
          "Measure MUAC and compare with your local adult cut-off",
          "Subtract 2 kg from her weight to account for the fluid",
        ],
        correctIndex: 2,
        explanation: "MUAC is far less affected by fluid shifts than body weight, so it tracks wasting even when oedema flatters the scale. Guesswork subtractions and loose clothes are not measurements.",
      },
      {
        topic: "Acute Disease Effect",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "nutrition-dietetics",
        stem: "When does a patient's poor oral intake itself score as the 'acute disease effect' in the MUST screen?",
        options: [
          "Any single missed meal during a hospital stay",
          "Any patient over the age of 65 years",
          "Only patients already receiving IV fluids",
          "Little or no intake for five days or more, or expected to be",
        ],
        correctIndex: 3,
        explanation: "The acute disease effect scores 2 when intake has been — or is expected to be — nothing for five days or more. One missed meal and age alone do not score.",
      },
    ],
    flashcards: [
      {
        topic: "Nutritional Screening",
        front: "What three things make up the MUST score?",
        back: "BMI, unplanned weight loss (more than 5% over 3-6 months), and the acute disease effect — no intake for 5 days or more. A total of 2 or more = high risk.",
      },
      {
        topic: "Nutritional Screening",
        front: "Why can MUAC beat the scale in an oedematous patient?",
        back: "Weight rises with retained fluid, masking wasting; the mid-upper arm circumference is far less affected and keeps revealing the true muscle loss.",
      },
      {
        topic: "Nutritional Screening",
        front: "What should happen the same day for a high-risk score?",
        back: "Document the score, start a nutrition care plan (fortified food, supplements or alternative feeding), arrange at-least-weekly weights, and refer to a dietitian where available.",
      },
    ],
    sources: [
      {
        organization: "BAPEN",
        title: "The 'MUST' Report — Malnutrition Universal Screening Tool",
        year: "2011",
        note: "Educational source — verify the edition and cut-offs used in your facility.",
      },
      {
        organization: "World Health Organization",
        title: "Guideline: Daily Iron and Folic Acid Supplementation in Pregnant Women",
        year: "2012",
        note: "Related micronutrient guidance for anaemia; educational source.",
      },
      {
        organization: "Ghana Ministry of Health / FAO",
        title: "Food-Based Dietary Guidelines for Ghana",
        year: "2023",
      },
    ],
  },
  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Before You Touch Anyone",
    lessonTitle: "Scene Safety: Don't Become the Second Patient",
    description:
      "The few seconds you spend looking before you step in are the most protective seconds in first aid. Learn to read a scene before it reads you.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain what the D in DRABC means and why it comes before everything else.",
      "Identify common hazards at emergency scenes, from traffic and fuel to electricity, chemicals and crowds.",
      "Apply the sequence of making a scene safe before approaching a casualty.",
    ],
    tags: ["scene safety", "priorities", "drabc", "first aid", "hazard assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "An emergency scene pulls at your heart. Somebody is hurt, people are shouting, and every instinct tells you to run in. The first rule of first aid is the opposite: the casualty does not need two casualties. If you go down too, nobody is left to help, and the emergency doubles.\n\nScene safety is a habit, not a heroic act. Practised smoothly, it takes five seconds — pause, look, decide — and it becomes the first thing you do at every scene, from a market faint to a crash on the main road.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Scan in every direction before you cross in. **Moving traffic**: park your vehicle off the road with hazards on, wear a reflective vest, and ask calm bystanders to wave cars away from the casualty. **Electricity**: a fallen live wire can carry current through wet ground and through you — never approach until the power is officially cut. **Fire, fuel and smoke**; **chemicals and pesticides** whose smell reaches you; **unstable structures**; **deep or moving water**; **animals** — dogs guard injured owners, and snakes seek the same shade you do; **crowds and alcohol**, which can turn hostile, so stand where you can leave quickly.\n\nIf the danger can be removed — engine off, cigarette out, dog restrained — remove it. If it cannot, wait for the right help (fire service, electricity company, police) or move the casualty as a last resort, protecting the spine as best you can. Whatever you decide must be a conscious decision — never an accident of rushing.",
      },
      {
        type: "clinical_pearl",
        body: "Count the dangers with your eyes before your knees touch the ground: traffic, wire, fuel, fire, fumes, animals, crowd. Anything that can reach you, will. The five-second pause is the cheapest life insurance you will ever buy.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Just after dark, a motorbike and a taxi collide near your compound. The rider is sprawled on the road, moaning, a crowd gathering, and one van is swerving around him. You grab your gloves and vest and start towards the tarmac.\n\nWhat do you do before you kneel beside him?\n\nAnswer: Park your own vehicle off the road, hazards on; put on the reflective vest; brief two calm bystanders to wave traffic away and slow the van — protecting him with people, not with your body. Scan for leaking fuel under the taxi and broken glass before choosing your path. Only when the space around him is controlled do you approach from the cleared side, gloves on, and begin your primary survey with D already done. Sprint straight in, and the next swerving vehicle has two victims to choose between.",
      },
      {
        type: "memory_trick",
        body: "STOP before you step: **S**top, **T**hink what can hurt you, **O**bserve all around, **P**rotect yourself first. A rescuer who stops for five seconds helps more than one who sprints for two.",
      },
      {
        type: "summary",
        body: "- The casualty never needs a second casualty — your safety comes first, always.\n- Scan for traffic, electricity, fire, fuel, fumes, water, unstable structures, animals and crowds.\n- Remove the hazard when you can; control traffic and bystanders; call the right service when you cannot.\n- Move a casualty only when the danger cannot be removed and staying is deadlier than moving.\n- Gloves and a visible vest are part of scene safety, not optional extras.",
      },
    ],
    questions: [
      {
        topic: "Scene Safety",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "You arrive at a night-time road crash. Which action comes first?",
        options: [
          "Kneel by the casualty and open the airway",
          "Check the casualty's pulse from the roadside",
          "Run across the road to reach the casualty faster",
          "Make the scene safe: park off the road, hazards on, warn and direct traffic",
        ],
        correctIndex: 3,
        explanation: "Danger comes before everything in DRABC. A rescuer struck by traffic becomes a second casualty and stops being any help at all.",
      },
      {
        topic: "Scene Safety",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A flooded street and a fallen electricity cable lie between you and a shouting casualty. What is the correct response?",
        options: [
          "Wade in quickly — shallow water is safe",
          "Shout clear instructions from a safe distance and call the electricity service / emergency line",
          "Use a wooden stick to move the cable aside",
          "Wait silently until the casualty stops shouting",
        ],
        correctIndex: 1,
        explanation: "A live cable in wet ground can energise the whole area — and a damp stick can conduct too. Keep everyone away and get the power officially cut before anyone approaches.",
      },
      {
        topic: "Scene Safety",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "Why does Danger come before Response in the DRABC sequence?",
        options: [
          "Because unconsciousness is always the biggest threat",
          "Because danger assessment takes the longest time",
          "Because response cannot be checked until the casualty is touched",
          "Because an injured rescuer becomes a second casualty and helps no one",
        ],
        correctIndex: 3,
        explanation: "The order exists to protect the helper. One rescuer down means zero rescuers left — the maths of the second patient is always worse.",
      },
    ],
    flashcards: [
      {
        topic: "Scene Safety",
        front: "What does the D in DRABC stand for, and why is it first?",
        back: "Danger — checking hazards before touching anyone. An injured rescuer becomes a second casualty, and the emergency doubles while the help halves.",
      },
      {
        topic: "Scene Safety",
        front: "Name five hazards to scan for at the scene of a road crash.",
        back: "Traffic, leaking fuel, fire or smoke, fallen electrical wires, unstable vehicles or structures — plus crowds, animals and chemicals.",
      },
      {
        topic: "Scene Safety",
        front: "When is it right to move a casualty before assessment?",
        back: "Only when the danger cannot be removed and staying is deadlier than moving — fire, rising water, traffic that cannot be controlled. Protect the spine as best you can.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
        note: "Open-access WHO-ICRC course supporting district-level emergency care.",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
      {
        organization: "Ghana National Ambulance Service",
        title: "Emergency Medical Services and the 112 Emergency Line",
        note: "Verify the emergency numbers and activation process for your district.",
      },
    ],
  },
  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Before You Touch Anyone",
    lessonTitle: "Primary Assessment: The First Look That Counts",
    description:
      "One calm, ordered sweep — danger, response, airway, breathing, circulation — finds the problems that kill first. This is the first look that counts.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Perform the primary survey (DRABC) in the correct order, in under a minute.",
      "Recognise an obstructed airway, including the snoring sound of a tongue fallen back.",
      "Apply AVPU and the ten-second breathing check correctly.",
    ],
    tags: ["primary survey", "abc", "drabc", "avpu", "emergency assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a patient collapses you cannot check everything at once. The primary survey is a fixed order that handles the problems that kill fastest, first: obstructed airway, absent breathing, catastrophic bleeding — each lethal within minutes. Everything else — the cut, the fracture, the full history — waits its turn.\n\nDone well, the survey takes well under a minute, and you repeat it whenever anything changes. The detailed head-to-toe examination comes later, once the life threats are controlled.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Run DRABC. **Danger** — make the scene safe. **Response** — speak loudly and gently squeeze the shoulders; grade what you get with AVPU: Alert, responds to Voice, responds to Pain, Unresponsive. **Airway** — look into the mouth for fluid or debris; snoring or gurgling means obstruction. Open the airway with a head-tilt and chin-lift; if you suspect a neck injury, use a jaw thrust instead, keeping the head still. **Breathing** — look, listen and feel for up to ten seconds: chest rising, breath at the mouth. Occasional noisy gasps are NOT breathing — they are agonal, and they mean the same as no breathing at all. **Circulation** — control any catastrophic bleeding with firm direct pressure; note colour and temperature of the skin.\n\nTreat what you find as you find it — open the airway, breathe for the non-breather, compress the pulseless chest, press hard on the bleeding — and only then does the detailed secondary survey begin.",
      },
      {
        type: "clinical_pearl",
        body: "A snoring patient is not sleeping. Snoring after a collapse usually means the tongue has relaxed against the back of the throat — and a jaw that opens it in two seconds is one of the most life-saving skills you will ever own.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the market a middle-aged man crumples beside a pile of tomatoes. He does not answer his name, but each breath is a loud snore. Your friend says, 'He is just sleeping it off', and starts fanning him.\n\nWhat is actually happening, and what is your next move?\n\nAnswer: Unresponsiveness with snoring means the tongue has fallen back to seal the throat, and 'sleeping it off' is a dangerous misread. With no sign of trauma, open the airway with a head-tilt and chin-lift (a jaw thrust if you suspected a neck injury), check breathing for up to ten seconds, send a specific person to call for help, and keep checking AVPU and breathing meanwhile. If the snoring vanishes and breathing steadies, you have saved a life with two fingers and a jaw — before any equipment, ambulance or doctor was involved.",
      },
      {
        type: "memory_trick",
        body: "DR ABC, said like a drumbeat: **D**anger, **R**esponse, **A**irway, **B**reathing, **C**irculation — you deal with problems in the order they kill, not in the order they are easy to check.",
      },
      {
        type: "summary",
        body: "- The primary survey is a fixed order: danger, response, airway, breathing, circulation — done in under a minute.\n- Grade response with AVPU: Alert, Voice, Pain, Unresponsive.\n- Snoring after collapse means airway obstruction until proven otherwise — open the airway first.\n- Look-listen-feel for breathing for no more than ten seconds; rare noisy gasps are agonal, not breathing.\n- Catastrophic bleeding gets firm direct pressure during C — do not wait for a full examination to finish.",
      },
    ],
    questions: [
      {
        topic: "Primary Survey",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "An unresponsive casualty is breathing but makes a loud snoring sound with each breath. This most likely means:",
        options: [
          "He is peacefully asleep",
          "The tongue has relaxed and is obstructing the airway",
          "He has a stomach upset",
          "He is breathing well and needs no airway action",
        ],
        correctIndex: 1,
        explanation: "Snoring in an unresponsive patient is the classic sign of a tongue sealing the airway. It is fixed by opening the airway — head-tilt/chin-lift, or jaw thrust if the neck is suspect.",
      },
      {
        topic: "Primary Survey",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "How long should your look-listen-feel breathing check take?",
        options: [
          "Exactly thirty seconds, to be certain",
          "A quick two-second glance is enough",
          "Until the chest visibly rises once",
          "Up to ten seconds",
        ],
        correctIndex: 3,
        explanation: "Ten seconds is long enough to detect normal breathing and short enough not to delay CPR. Thirty seconds of hesitation in cardiac arrest costs the brain dearly.",
      },
      {
        topic: "Primary Survey",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A casualty is unresponsive after a fall from height and you suspect a neck injury. The airway is partly obstructed. Which technique opens the airway?",
        options: [
          "Jaw thrust without moving the head",
          "Head-tilt and chin-lift",
          "Sitting him upright to clear the airway",
          "Giving five rescue breaths immediately",
        ],
        correctIndex: 0,
        explanation: "The jaw thrust lifts the tongue off the back of the throat without extending a possibly injured cervical spine. Head-tilt moves the neck; sitting him up could worsen a spinal injury.",
      },
    ],
    flashcards: [
      {
        topic: "Primary Survey",
        front: "What is the order of the primary survey?",
        back: "Danger → Response (AVPU) → Airway → Breathing → Circulation — treating each life threat the moment you find it, before moving on.",
      },
      {
        topic: "Primary Survey",
        front: "What does a snoring sound in an unresponsive patient mean, and what do you do?",
        back: "The tongue has relaxed back to obstruct the airway. Open it with head-tilt/chin-lift — or a jaw thrust if a neck injury is suspected.",
      },
      {
        topic: "Primary Survey",
        front: "What are agonal breaths and how do you treat them?",
        back: "Occasional slow, noisy gasps seen in cardiac arrest. They are NOT normal breathing — treat as arrest, call for help and start compressions.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "European Resuscitation Council",
        title: "ERC Guidelines 2021: Basic Life Support",
        year: "2021",
        note: "Educational source — verify current guidelines.",
      },
    ],
  },
  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Life-Saving Basics",
    lessonTitle: "Basic Life Support Concepts",
    description:
      "Why CPR works, what 'hard and fast' really means, and why agonal gasps fool bystanders. The reasoning behind the skill you may use once in a lifetime.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the chain of survival and why every link is timed in minutes.",
      "Apply the core parameters of adult CPR: 100-120 compressions per minute, 5-6 cm depth, full recoil, 30:2.",
      "Recognise that unresponsive plus abnormal breathing means start CPR — not watch and wait.",
    ],
    tags: ["bls", "cpr", "chain of survival", "resuscitation", "agonal breathing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "CPR is not magic, and it does not restart a stopped heart — that is what defibrillation attempts. CPR is you becoming the heart: squeezing blood from the chest to the brain and the coronary arteries. Done well, it can double or triple the chance of survival. Done half-heartedly, it does very little.\n\nThe chain of survival explains the race: early recognition and call for help, early CPR, early defibrillation, and good post-resuscitation care. Every link weakens with each minute that passes.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Check response, then breathing for up to ten seconds. Unresponsive and not breathing normally — including those rare noisy gasps — means CPR. Send a **specific** person to call for help and fetch an AED if one exists: 'You in the yellow shirt — call 112 and come back to me.' Kneel beside the chest, hands on the centre of the chest, heels of both hands, arms straight. Compress at **100-120 per minute** to a depth of **5-6 cm** in an adult, letting the chest come **all the way back up** — full recoil is when the heart refills. Minimise interruptions: every pause longer than ten seconds costs the brain. Give 30 compressions to 2 breaths if you are trained and willing; hands-only is acceptable for the untrained or unwilling.\n\nIn many districts an AED is nowhere nearby, which makes early CPR and rapid transfer even more important — your compressions buy the ambulance and the hospital their minutes. After resuscitation, keep the airway open, keep checking breathing, and hand over carefully.",
      },
      {
        type: "clinical_pearl",
        body: "Push hard, push fast, let the chest rebound fully, and do not stop to chat. The commonest CPR error is being too gentle — a sore rib heals; a starved brain does not.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A colleague in the records room suddenly slides from her chair to the floor. She does not answer; her chest gives one slow, loud gasp every ten seconds or so. A junior says, 'She is breathing — let's put her in the recovery position and wait for the doctor.'\n\nWhat is your reading of the situation, and what do you do?\n\nAnswer: Unresponsive with only occasional gasps is agonal breathing — cardiac arrest, not normal respiration, and waiting is fatal. Send a specific person to call for help and bring the defibrillator if one exists, then start compressions immediately: 100-120 per minute, 5-6 cm, full recoil, 30:2 if trained, minimising interruptions until help arrives. Had she truly been breathing normally, the recovery position and close reassessment would be right — it is the gasping pattern that changes everything.",
      },
      {
        type: "memory_trick",
        body: "The chain to chant: **Recognise, Call, Pump, Shock, Stabilise** — five links, each timed in minutes. And for quality, sing it like a fast beat: hard, fast, full rebound, no pause.",
      },
      {
        type: "summary",
        body: "- CPR means becoming the heart: pushing oxygen-carrying blood to brain and coronaries until definitive care arrives.\n- Chain of survival: early recognition and call, early CPR, early defibrillation, post-arrest care.\n- Adult CPR: 100-120 per minute, 5-6 cm depth, full recoil, minimal interruptions, 30:2.\n- Unresponsive plus not breathing normally — including agonal gasps — means start CPR now.\n- Where AEDs are scarce, early CPR and rapid transport are the minutes the ambulance and hospital need.",
      },
    ],
    questions: [
      {
        topic: "BLS",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "Which compression rate and depth is correct for an adult in CPR?",
        options: [
          "50-60 per minute, about 2 cm deep",
          "As fast and as deep as possible, with no limits",
          "100-120 per minute, 5-6 cm deep",
          "80 per minute, 8 cm deep",
        ],
        correctIndex: 2,
        explanation: "100-120 per minute and 5-6 cm with full recoil are the adult parameters — fast and deep enough to move blood, controlled enough to let the heart refill.",
      },
      {
        topic: "BLS",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A casualty is unresponsive and gives one slow, noisy gasp every fifteen seconds. You should:",
        options: [
          "Start chest compressions immediately and send for help and an AED",
          "Give rescue breaths only",
          "Place her in the recovery position — she is breathing",
          "Wait two minutes to see whether breathing improves",
        ],
        correctIndex: 0,
        explanation: "Occasional gasps are agonal breaths — a sign of cardiac arrest, not of effective breathing. Recovery position or waiting here is a fatal delay.",
      },
      {
        topic: "BLS",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Why is full chest recoil so important during compressions?",
        options: [
          "It rests your arms between sets",
          "The heart refills during recoil — incomplete recoil cuts blood flow even when depth is correct",
          "It prevents all rib fractures",
          "It makes the 30:2 ratio easier to count",
        ],
        correctIndex: 1,
        explanation: "Recoil is the filling phase of the mechanical heart you have become. Leaning on the chest between compressions squeezes out the refill and strangles the output.",
      },
    ],
    flashcards: [
      {
        topic: "BLS",
        front: "Name the links of the chain of survival.",
        back: "Early recognition and call for help; early CPR; early defibrillation; effective post-resuscitation care — each link timed in minutes, not hours.",
      },
      {
        topic: "BLS",
        front: "Unresponsive with slow, noisy gasps — what is happening?",
        back: "Agonal breathing, a sign of cardiac arrest. Call for help and start compressions; do not mistake it for normal breathing.",
      },
      {
        topic: "BLS",
        front: "Three quality rules for adult chest compressions?",
        back: "100-120 per minute; 5-6 cm depth; let the chest fully rebound between compressions and minimise every interruption.",
      },
    ],
    sources: [
      {
        organization: "American Heart Association",
        title: "2020 AHA Guidelines for CPR and Emergency Cardiovascular Care",
        year: "2020",
        note: "Educational source — verify current guidelines.",
      },
      {
        organization: "European Resuscitation Council",
        title: "ERC Guidelines 2021",
        year: "2021",
        note: "Educational source — verify current guidelines.",
      },
      {
        organization: "Ghana National Ambulance Service",
        title: "Emergency Medical Services and the 112 Emergency Line",
        note: "Know your local emergency number and response capability.",
      },
    ],
  },
  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Life-Saving Basics",
    lessonTitle: "Bleeding: Stop the Loss",
    description:
      "Blood on the floor is louder than blood leaking inside the belly — but both kill. Direct pressure, layering and smart escalation, with calm hands.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Apply direct pressure correctly and explain why soaked dressings are layered, never removed.",
      "Manage an impaled object and describe when a tourniquet is justified.",
      "Recognise internal bleeding as shock without a visible source.",
    ],
    tags: ["bleeding", "haemorrhage", "first aid", "direct pressure", "shock prevention"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Bleeding is the most survivable emergency there is — if you act quickly and in the right order. Most external bleeding, even the frightening arterial kind, yields to one unglamorous skill: firm, direct pressure with a clean pad and a gloved hand.\n\nWhat kills is time wasted on panic, on peeling dressings back to look, or on remedies poured into the wound. And blood you can see is half the story: blood leaking into the abdomen or thigh is the quiet half — suspect it whenever shock appears without a wound.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Gloves first — protect yourself. Press firmly on the wound with a clean cloth or pad; if the casualty can, have them press while you fetch supplies. Elevate a bleeding limb above heart level if no fracture is suspected. When a dressing soaks through, **do not remove it** — add fresh layers on top, because the old ones hold clot your curiosity would destroy. An impaled object — glass, knife, metal — **stays in**: pad and press around it, never pull it out, because it may be sealing the very vessel it pierced.\n\nA tourniquet is a last resort for limb bleeding pressure cannot control: apply it tight, write down the time, never loosen it in the field. Then manage shock — flat, warm, nil by mouth, watched — and move them to hospital fast. Internal bleeding announces itself with pain, a hardening abdomen, bruising, and the pale, cold, fast-pulsed picture of shock: treat the shock and transfer urgently.",
      },
      {
        type: "clinical_pearl",
        body: "Curiosity is the enemy of the clot. Every time you lift a soaked dressing to look, the forming clot tears and the bleeding restarts. Layer, press, and let the clot finish its work in the dark.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A market woman's forearm is slashed by a falling pane of glass at the scrap dealer's stall. Blood spurts with her pulse. A first-aider presses a cloth, which soaks through in two minutes, then starts pulling it off 'to see how bad it is'. A bystander offers a bottle of spirit to 'pour inside'.\n\nWhich of these actions help her, and what do you do instead?\n\nAnswer: Neither helps — both harm. Spirit adds pain and tissue damage without stopping blood; lifting the soaked cloth destroys the forming clot. The way through: gloves on, firm pressure with a fresh pad on the wound, soaked layers left in place with new ones over them, arm elevated once the spurting eases. Any glass fragment stays put — pressure around it, not on it. If blood spurts through the layers, escalate to a tourniquet as a last resort. Lay her flat, keep her warm, arrange transport — she also needs hospital care for the wound, tetanus cover, and whatever the glass carried.",
      },
      {
        type: "memory_trick",
        body: "P-A-D for the bleeding wound: **P**ress on it, **A**dd layers, **D**on't remove. If something stays stuck in the flesh, build your padding around it, never over it.",
      },
      {
        type: "summary",
        body: "- Firm direct pressure with a clean pad stops most external bleeding.\n- A soaked dressing is layered over, never peeled back to inspect.\n- Impaled objects stay in — they may be plugging the vessel they pierced.\n- Tourniquet: last resort for uncontrollable limb bleeding — note the time, never loosen in the field.\n- Pale, cold, weak-fast pulse with a hard or distending abdomen = internal bleeding: treat shock, nil by mouth, urgent transfer.",
      },
    ],
    questions: [
      {
        topic: "Bleeding Control",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "A dressing over a bleeding wound becomes soaked. The correct action is:",
        options: [
          "Remove it to inspect the wound and apply a smaller fresh one",
          "Pour spirit directly into the wound first",
          "Cover with larger clean layers, leaving the soaked ones in place",
          "Remove it and apply a tourniquet immediately",
        ],
        correctIndex: 2,
        explanation: "The soaked layers hold forming clot; removing them restarts the bleeding. New layers go on top while pressure continues.",
      },
      {
        topic: "Bleeding Control",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A man arrives at your CHPS compound with a knife still in his shoulder after an attack. The best first aid is to:",
        options: [
          "Stabilise the knife in place and apply pressure around it",
          "Pull the knife out to assess how deep it goes",
          "Push the knife deeper to seal the vessel",
          "Apply a tight constricting bandage high on the neck",
        ],
        correctIndex: 0,
        explanation: "The object may be tamponading the vessel it pierced — removal can convert a contained bleed into a fountain. Pad around it, press around it, and let theatre remove it.",
      },
      {
        topic: "Bleeding Control",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Which picture most strongly suggests internal bleeding?",
        options: [
          "Bright red blood spurting from a leg wound",
          "A pale, anxious patient with a rigid, distending abdomen and a weak fast pulse",
          "A calm patient with a small cut on the finger",
          "A bruise on the shin with normal colour and vitals",
        ],
        correctIndex: 1,
        explanation: "Shock signs with a hardening, swelling abdomen after trauma is the classic hidden-bleed picture — the blood is going somewhere you cannot see.",
      },
    ],
    flashcards: [
      {
        topic: "Bleeding Control",
        front: "Why do you layer dressings instead of replacing them?",
        back: "The soaked layers contain forming clot — removing them tears it and restarts bleeding. Add fresh padding on top and keep pressing.",
      },
      {
        topic: "Bleeding Control",
        front: "What do you do with an embedded object in a wound?",
        back: "Leave it in place — it may be tamponading the vessel. Pad and apply pressure around it; removal happens in theatre, not in the field.",
      },
      {
        topic: "Bleeding Control",
        front: "When is a field tourniquet justified, and with what precautions?",
        back: "Life-threatening limb bleeding that direct pressure cannot control. Apply tightly, record the time applied, never loosen in the field, and hand over the information.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
      {
        organization: "American College of Surgeons",
        title: "Stop the Bleed — Bleeding Control Resources",
        note: "Free public education materials on haemorrhage control.",
      },
    ],
  },
  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Life-Saving Basics",
    lessonTitle: "Shock: The Silent Killer",
    description:
      "Shock whispers before it screams — a fast pulse, cool skin, anxiety — long before the blood pressure falls. Learn to hear the early language.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Define shock as inadequate tissue perfusion, not simply a low blood pressure.",
      "Name the main types of shock and their common triggers.",
      "Apply first-aid care for shock and explain why a normal BP can hide it, especially in the young.",
    ],
    tags: ["shock", "circulation", "first aid", "perfusion", "compensation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In everyday speech, 'shock' means fright. In medicine it means something deadlier: the circulation is delivering so little oxygen that the body's cells are starving. Fright passes; medical shock kills quietly — and 'silent' is in its name for good reason. By the time it looks loud, it is late.\n\nThe body fights shock with everything it has: the pulse races, vessels clamp, the skin sweats. Blood pressure is the last line of defence — almost normal until compensation fails. That is why you never wait for a low BP before you call it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the types by their engines. **Hypovolaemic** — not enough volume, from bleeding, severe diarrhoea, vomiting or burns. **Septic** — infection dilates and leaks the vessels, often with fever. **Anaphylactic** — allergy, with rash, swollen lips and wheeze. **Cardiogenic** — the pump failing, as after a large heart attack. **Obstructive** — a clot on the lungs or pressure in the chest strangling the heart's filling.\n\nRead the early signs: pale, cold, clammy skin; a weak, fast pulse; fast breathing; capillary refill delayed past two seconds; thirst, anxiety, then confusion. Children and fit adults compensate longest of all — a normal BP alongside these signs is still shock, not safety. Care: treat the cause where you can (pressure on bleeding, remove the allergen, auto-injector if available), lay them flat, keep them warm, give nothing by mouth, and move them to hospital with breathing and consciousness watched continuously. A calm voice steadies patient, family — and you.",
      },
      {
        type: "clinical_pearl",
        body: "Shock speaks in a fixed order: the pulse first, the skin second, the pressure last. A fast, weak pulse with cool sweaty skin is already an emergency — do not wait for the BP to agree with you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young tro-tro mate is carried in after a crash. He is anxious and thirsty, his skin is cool and pale, pulse 112 and weak, breathing fast — but the BP reads 124/78, so a student notes 'stable' and suggests he can 'rest small' in the waiting area.\n\nWhat is really going on, and what happens next?\n\nAnswer: This is compensated hypovolaemic shock — volume lost into a splenic injury or fractured femur, masked by a racing heart and clamped vessels. The normal reading is his last reserve, not a green light: fit young people hold pressure until very late, then crash. He stays with you — flat, warm, nil by mouth, monitored every few minutes — while you arrange urgent transfer with a note recording the vitals and their times, because the receiving team needs the trend, not the snapshot.",
      },
      {
        type: "memory_trick",
        body: "Shock speaks in order: **Pulse first, Skin second, Pressure last.** When pressure finally falls, the whisper has become a scream — and by then you are late.",
      },
      {
        type: "summary",
        body: "- Shock means cells starved of oxygen from poor perfusion — 'the BP is normal' can still be shock.\n- Types: hypovolaemic, septic, anaphylactic, cardiogenic, obstructive — care matches the cause.\n- Early signs: pale cold clammy skin, weak fast pulse, fast breathing, delayed cap refill, thirst and anxiety.\n- Fit young people compensate longest — a normal BP with the other signs means act now.\n- First aid: treat the cause, lie flat, keep warm, nil by mouth, monitor continuously, transfer urgently.",
      },
    ],
    questions: [
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A young adult is cool, pale and sweaty after a road crash, pulse 118, but BP 126/80. The correct interpretation is:",
        options: [
          "He is stable — a normal BP excludes shock",
          "He is only anxious — reassure and let him rest",
          "This may be compensated shock — act now and monitor continuously",
          "He needs oral fluids immediately to drink",
        ],
        correctIndex: 2,
        explanation: "Compensation keeps BP near normal until reserves fail — cool sweaty skin and a fast weak pulse are the earlier, honest signs. Waiting for the BP to fall means waiting until he crashes.",
      },
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "Shock, in the medical sense, is best defined as:",
        options: [
          "A sudden fright or emotional upset",
          "A low blood pressure reading on the machine",
          "Unconsciousness after any accident",
          "Inadequate blood flow to the tissues, so cells are starved of oxygen",
        ],
        correctIndex: 3,
        explanation: "Medical shock is a perfusion problem at the tissue level. Fright passes, machines lag — the cells are the ones telling the truth.",
      },
      {
        topic: "Shock",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Which of these is NOT part of first-aid care for a shocked casualty?",
        options: [
          "Lying the patient flat and keeping them warm",
          "Controlling any external bleeding",
          "Giving sips of water to treat the thirst",
          "Monitoring breathing and consciousness continuously",
        ],
        correctIndex: 2,
        explanation: "Nothing by mouth — surgery and anaesthesia may be coming, and an airway in a drowsy patient is more precious than a satisfied thirst. Treat the thirst by treating the shock.",
      },
    ],
    flashcards: [
      {
        topic: "Shock",
        front: "Why is blood pressure a late sign of shock?",
        back: "Compensation: a racing pulse and clamped vessels hold the BP near normal until reserves run out. Young, fit people crash latest — and hardest.",
      },
      {
        topic: "Shock",
        front: "Name three early signs of shock.",
        back: "Pale, cold, clammy skin; a weak, fast pulse; fast breathing — plus delayed capillary refill, thirst and anxiety.",
      },
      {
        topic: "Shock",
        front: "What may a shocked patient have by mouth?",
        back: "Nothing — nil by mouth. Anaesthesia or surgery may be minutes away, and the thirst is treated by treating the shock itself.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
      {
        organization: "Surviving Sepsis Campaign (SCCM / ESICM)",
        title: "Surviving Sepsis Campaign International Guidelines",
        year: "2021",
        note: "Hospital-level sepsis context for septic shock — educational source.",
      },
    ],
  },
  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Common Emergencies",
    lessonTitle: "Burns: Depth, Cool and Cover",
    description:
      "What happens in the first twenty minutes of a burn decides how it heals. Cool thinking for hot injuries — plus the home remedies to politely refuse.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Apply first-aid burn care: cool running water for twenty minutes, remove constricting items, cover cleanly.",
      "Distinguish superficial, partial-thickness and full-thickness burns.",
      "Identify burns needing urgent referral by size, depth, site, cause and airway involvement.",
    ],
    tags: ["burns", "wounds", "first aid", "burn depth", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Burns arrive with every Ghanaian evening: a child reaching for the soup pot, a kerosene stove flaring, hot oil at the chop bar. The wound you finally see is shaped by the first minutes — and the difference between cooling and not cooling is the difference between a burn that heals and one that scars, contracts or kills.\n\nThe core first aid fits in one breath: cool, cover, get the right help — and refuse, kindly but firmly, everything else.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Cool with clean running water for **twenty minutes** — cool, not ice-cold — still useful up to three hours after the burn. Remove rings, watches and tight clothing before swelling turns them into tourniquets; cut clothing away rather than peeling what has stuck. Never burst blisters. Cover with clean, non-fluffy material — cling film laid lengthways, or a clean cloth. Never ice, never palm oil, shea butter, toothpaste or egg: they trap heat, feed infection and hide the wound.\n\nRead the depth. **Superficial**: red, painful, blanches — bad sunburn. **Partial-thickness**: pink or mottled, blistered, wet, very painful. **Full-thickness**: white, leathery or charred, and strangely painless — the nerves themselves are destroyed. For size, the casualty's palm including fingers is about 1% of the body surface. Refer urgently: more than 10% in an adult (5% in a child); burns of the face, hands, feet, genitals, joints or airway; all chemical, electrical and circumferential burns; and any suspicion of smoke inhalation — singed nasal hair, hoarse voice, soot in the sputum, or drowsiness.",
      },
      {
        type: "clinical_pearl",
        body: "A burn that does not hurt can be the most dangerous one — painlessness means destroyed nerves, which means depth. The quiet child with a leathery hand should worry you more than the howling child with a red one.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A two-year-old pulls a pot of kontomire soup onto her chest and arm. Grandmother, meaning well, rubs palm oil over the burn and wraps her in a cloth. An hour later at your CHPS compound, the child is crying weakly, her nasal hairs singed, her voice rough.\n\nWhat should have happened, and what do you do now?\n\nAnswer: First aid should have been cool running water for twenty minutes with tight clothes removed — the palm oil trapped heat, invited infection and hid the burn. Now: still within about three hours, cool the burn for the full twenty minutes while keeping the rest of the child warm — cool the burn, warm the child, because hypothermia is the small patient's danger. The weak cry, singed nasal hairs and rough voice raise airway burn, which makes this an urgent referral before any percentage is counted. Cover with clean film, keep her nil by mouth, transfer urgently, and explain gently to grandmother why water, not oil: the burn forgives nothing the first hour forgets.",
      },
      {
        type: "memory_trick",
        body: "The chant for the burnt: **Cool 20, Cover clean, Carry.** For depth, listen to the pain: 'Red hurts, blister hurts more, leather feels nothing' — the quiet one is the deep one.",
      },
      {
        type: "summary",
        body: "- Cool running water for about 20 minutes — still useful up to 3 hours after the burn; never ice, never oil, butter, egg or toothpaste.\n- Remove rings, watches and tight clothing before swelling; never burst blisters.\n- Depth: superficial red and painful; partial-thickness blistered, wet, very painful; full-thickness leathery and painless.\n- Palm-plus-fingers is about 1% body surface; over 10% in adults, 5% in children, means referral.\n- Face, hands, feet, genitals, joints, airway signs, chemical, electrical or circumferential burns always mean referral.",
      },
    ],
    questions: [
      {
        topic: "Burns",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "Correct first aid for a fresh hot-water burn is:",
        options: [
          "Cool under gently running water for about twenty minutes",
          "Apply palm oil or shea butter generously",
          "Apply ice cubes for ten minutes",
          "Cover at once with cotton wool",
        ],
        correctIndex: 0,
        explanation: "Twenty minutes of cool running water limits how deep the burn grows, and works even up to three hours later. Oils trap heat and invite infection; ice damages tissue further.",
      },
      {
        topic: "Burns",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A burn is white, leathery and the patient says it barely hurts. This suggests:",
        options: [
          "A superficial burn about to blister",
          "A partial-thickness burn healing well",
          "An infected burn needing antibiotics only",
          "A full-thickness burn with nerve destruction",
        ],
        correctIndex: 3,
        explanation: "Painless, leathery, white or charred skin means the nerve endings have been destroyed with the rest of the dermis — the deepest and most serious depth.",
      },
      {
        topic: "Burns",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Which burn must be referred urgently regardless of its size?",
        options: [
          "A red, painful forearm burn of about 2% in an adult",
          "A facial burn with hoarse voice and singed nasal hair",
          "A blistered shoulder burn of about 3%",
          "A superficial sunburn of the back",
        ],
        correctIndex: 1,
        explanation: "Hoarseness and singed nasal hairs mean smoke or heat has reached the airway — swelling there can obstruct breathing hours after the skin looks 'small'. Face burns are referral burns, always.",
      },
    ],
    flashcards: [
      {
        topic: "Burns",
        front: "How long do you cool a burn, how cool, and how late can it still help?",
        back: "Cool running water for about 20 minutes — cool, not icy — and it remains useful up to about 3 hours after the injury.",
      },
      {
        topic: "Burns",
        front: "A burn that feels no pain — what does that mean?",
        back: "The nerves have been destroyed: full-thickness depth. The quiet burn is often the most dangerous one.",
      },
      {
        topic: "Burns",
        front: "How do you estimate burn size with no chart?",
        back: "The patient's palm including the fingers is roughly 1% of total body surface area. Over 10% in adults (5% in children) needs referral.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "International Society for Burn Injuries",
        title: "ISBI Practice Guidelines for Burn Care",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
    ],
  },
  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Common Emergencies",
    lessonTitle: "Fractures: Stabilising What's Broken",
    description:
      "Bones heal — dead muscle and cut nerves do not. Suspect it, splint it as it lies, and keep checking the blood supply below the break.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Recognise the signs of a fracture and the difference between closed and open fractures.",
      "Splint a suspected fracture as found, covering the joints above and below.",
      "Check circulation, movement and sensation (CMS) before and after splinting, and act on absent pulses.",
    ],
    tags: ["fractures", "immobilisation", "splinting", "first aid", "circulation check"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A bone cracks from a fall, a crash or a bad twist — the young footballer and the elderly woman who slipped on the path are equal candidates. Most fractures are not killers in themselves; what kills and maims is what the sharp bone ends do beside them: slicing an artery, a nerve, or through the skin.\n\nSo the first-aid goal is never to 'fix' the bone. It is to stop it from doing more damage, and the two rules that carry that weight are: splint it as you found it, and keep checking the limb's blood supply.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Suspect a fracture whenever there is deformity, swelling, tenderness at one point, grating (crepitus), unnatural movement, or an inability to bear weight after trauma. **Closed** fracture: the skin is intact. **Open** fracture: bone has pierced the skin, or the wound reaches bone — higher infection risk, so cover it with a clean sterile dressing and never push bone ends back under the skin.\n\nSplint as found: a padded board, rolled cardboard or a careful improvisation — rigid, long enough to cover the **joint above and the joint below**, padded over bony points, tied firmly but not tightly (a finger slips under the ties). Do not straighten a deformed limb unless it blocks circulation or transport — that correction is for trained hands. Check CMS — pulse and capillary refill, movement, sensation — before and after splinting: a limb that is cold, pale or blue with no pulse is minutes from permanent loss, so reposition it gently toward alignment and transfer immediately. Analgesia where you can, nothing by mouth, and watch for shock.",
      },
      {
        type: "clinical_pearl",
        body: "Splints are cheap; arteries and nerves are not. Tie the splint firmly enough to hold and loosely enough to breathe — then recheck the fingers and toes after every adjustment and every bump of the journey.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 19-year-old footballer lands badly; his lower leg is bent outward at the middle of the shin and he is holding it, groaning. The foot looks pale, and he says his toes feel 'like electricity'. No wound is visible.\n\nWhat are your priorities, and in what order?\n\nAnswer: The priorities reorder themselves around the circulation. This is a suspected fracture with a pale foot and abnormal sensation — the sharp end may be kinking the artery, and this is the one exception where gentle realignment toward normal alignment is warranted, by the most trained person available, to free the blood supply. Recheck immediately: pulse, capillary refill, sensation, colour. Then splint the leg as it now lies — padded, rigid, spanning knee above and ankle below, firm not tight. Give analgesia, keep him nil by mouth, keep him warm, and arrange urgent transfer while watching for shock. Had the foot been warm, pink and feeling normal, you would simply have splinted as found and referred — it is the circulation signs that changed the order of the game.",
      },
      {
        type: "memory_trick",
        body: "After every splint, count the three Ps: **Pulse, Pink, Pins-and-needles gone.** Before the splint, after the splint, after the drive — three checks, every time.",
      },
      {
        type: "summary",
        body: "- Suspect fracture from deformity, point tenderness, swelling, crepitus, or inability to bear weight.\n- Closed means skin intact; open means bone through skin — cover sterile, never replace bone ends.\n- Splint the limb as found: padded, rigid, spanning the joint above and the joint below.\n- Check CMS — pulse, capillary refill, sensation — before and after splinting and after transport.\n- Cold, pale, pulseless limb: gentle realignment by trained hands toward alignment and immediate transfer.",
      },
    ],
    questions: [
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "An open fracture of the tibia shows bone ends protruding through the skin. Your care includes:",
        options: [
          "Irrigating the wound with spirit before covering",
          "Pushing the bone ends back beneath the skin",
          "Covering with a clean or sterile dressing without replacing the bone",
          "Applying a tight constrictive bandage above the wound",
        ],
        correctIndex: 2,
        explanation: "Bone ends stay where they are — pushing them back drags surface contamination inside and can injure further. Cover, splint as found, and let theatre do the rest.",
      },
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "A splint should immobilise:",
        options: [
          "Only the joint below the fracture",
          "Only the fractured bone segment itself",
          "The whole body on a spinal board, always",
          "The joints above and below the fracture",
        ],
        correctIndex: 3,
        explanation: "Movement at either neighbouring joint levers the broken bone. Immobilising only the bone segment leaves it free to move every time the patient shifts.",
      },
      {
        topic: "Fractures",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "After splinting a forearm you find the fingers cold and pale with no pulse. The correct next step is:",
        options: [
          "Loosen the splint slightly and wait ten minutes",
          "Gently reposition the limb toward alignment (trained hands) to restore circulation, and transfer urgently",
          "Send the patient home with analgesia",
          "Elevate above the heart and recheck tomorrow",
        ],
        correctIndex: 1,
        explanation: "A pulseless limb is minutes from permanent muscle and nerve death. Restoring alignment to free the artery is the exception to 'splint as found' — and it cannot wait.",
      },
    ],
    flashcards: [
      {
        topic: "Fractures",
        front: "What signs make you suspect a fracture?",
        back: "Deformity, point tenderness, swelling, crepitus, unnatural movement, and inability to bear weight or use the limb after trauma.",
      },
      {
        topic: "Fractures",
        front: "Why must the splint span the joints above and below the break?",
        back: "Either joint moving levers the broken bone. Spanning both converts the whole segment into one rigid unit that cannot twist the fracture.",
      },
      {
        topic: "Fractures",
        front: "What does CMS stand for, and when do you check it?",
        back: "Circulation, Movement, Sensation — distal to the injury. Check before the splint, after the splint, and after every leg of transport.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "National Association of Emergency Medical Technicians (NAEMT)",
        title: "Prehospital Trauma Life Support (PHTLS)",
        note: "Standard prehospital trauma reference — verify current edition.",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
    ],
  },
  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Common Emergencies",
    lessonTitle: "Poisoning: The First Questions",
    description:
      "What was it, when, how much, which way in — the four questions that guide everything. And why the empty bottle is your best witness.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Ask the key questions of any poisoning and explain why the container travels with the patient.",
      "Explain why inducing vomiting and home antidotes like milk or palm oil cause harm.",
      "Apply first aid for swallowed, inhaled, skin and eye exposures.",
    ],
    tags: ["poisoning", "toxins", "first aid", "pesticides", "decontamination"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Poisoning in Ghana is rarely mysterious: kerosene in a soft-drink bottle, pesticides decanted into food containers, an overdose of tablets, caustic soda, charcoal smoke in a closed room. What is mysterious is the many things well-meaning people do next — forcing the patient to vomit, drenching them in palm oil or milk — which usually make matters worse.\n\nYour first aid is mostly questions, safety and speed: what, when, how much, and which way in — then keep them breathing and get them moving.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Ask and record: **what** substance — read the label and keep the container, even empty, because it is your evidence; **when** it happened; **how much** went in; **which route** — mouth, lungs, skin or eyes; and the patient's age, weight, symptoms and any treatment already given.\n\nThen by route. **Swallowed**: wipe the mouth, do NOT induce vomiting — corrosives burn twice on the way back up, and fuels like kerosene are easily inhaled into the lungs, causing chemical pneumonia. Give no milk, no palm oil, no salt water, no herbal antidotes. **Inhaled**: move to fresh air. **On the skin**: gloves on, cut away contaminated clothing, rinse with running water for fifteen to twenty minutes. **In the eyes**: irrigate and keep going. Whatever the route, watch breathing and consciousness closely, use the recovery position if unconscious but breathing, and transfer with the container and your notes. Organophosphate pesticides announce themselves: pinpoint pupils, sweating, salivation, vomiting, wet chest and muscle weakness — that patient needs hospital-level care fast.",
      },
      {
        type: "clinical_pearl",
        body: "The bottle tells the truth the family cannot. Send the container, any vomitus and your written notes with the patient — 'some black liquid' leaves the hospital guessing while the antidote clock runs.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A three-year-old is found coughing and breathless with a kerosene bottle and a straw beside her; her breath smells of fuel. The neighbour says, 'Give her palm oil — she will vomit it all out', and someone starts hunting for salt water.\n\nWhat is your response, and why does it matter so much?\n\nAnswer: Refuse both, kindly and firmly. Vomiting is the danger with kerosene: it is light, and on the way back up it is easily inhaled into the lungs, causing chemical pneumonia. Palm oil and salt water add aspiration risk and waste the transfer minutes. Instead: wipe her mouth, keep her calm where breathing is easiest, watch breathing and consciousness without blinking, and arrange urgent transfer with the bottle, your notes and a clear handover naming kerosene. Coughing and breathlessness after kerosene mean the lungs are already involved: she is a referral now, not an observation at home.",
      },
      {
        type: "memory_trick",
        body: "WHIR through the questions: **W**hat was it, **H**ow much, **I**n — which route — then **R**ecord and rush with the bottle. And take the vow early: 'I will not make them vomit.'",
      },
      {
        type: "summary",
        body: "- First the questions: what, how much, when, which route — and the container comes with the patient.\n- Never induce vomiting; never give milk, palm oil, salt water or herbal antidotes.\n- Swallowed: wipe the mouth and transfer; inhaled: fresh air; skin: gloves plus a 15-20 minute rinse; eyes: irrigate and continue.\n- Unconscious but breathing: recovery position, watch breathing, transfer with notes and container.\n- Pesticide signs — pinpoint pupils, sweating, salivation, weakness — mean urgent hospital transfer for atropine.",
      },
    ],
    questions: [
      {
        topic: "Poisoning",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Why is forced vomiting dangerous after kerosene ingestion?",
        options: [
          "Kerosene is easily inhaled into the lungs during vomiting, causing chemical pneumonia",
          "It causes constipation instead of diarrhoea",
          "Vomiting burns only the mouth on the way out",
          "It makes the patient too sleepy to travel",
        ],
        correctIndex: 0,
        explanation: "Kerosene is light and volatile — re-emerging, it is aspirated into the lungs, where even small amounts cause serious chemical pneumonitis.",
      },
      {
        topic: "Poisoning",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "The FIRST priority in assessing a poisoning case is:",
        options: [
          "Inducing vomiting to remove the poison",
          "Giving milk to 'neutralise' the chemical",
          "Identifying the substance, the amount, the time and the route of exposure",
          "Walking the patient around the compound",
        ],
        correctIndex: 2,
        explanation: "Everything downstream — antidotes, decontamination, referral urgency — depends on what went in, how much, when and by which route. The bottle answers most of it.",
      },
      {
        topic: "Poisoning",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A farmworker arrives sweating heavily, drooling and vomiting, with pinpoint pupils, after a spraying session. This suggests:",
        options: [
          "Heat exhaustion — give ORS and rest",
          "Organophosphate pesticide poisoning — urgent transfer for atropine",
          "Alcohol intoxication — let him sleep it off",
          "Simple food poisoning — observe at home",
        ],
        correctIndex: 1,
        explanation: "The cholinergic picture — sweat, spit, small pupils, vomiting, wet chest — after pesticide exposure is organophosphate poisoning, and it kills by secretion and weakness unless atropine comes in time.",
      },
    ],
    flashcards: [
      {
        topic: "Poisoning",
        front: "The first questions of any poisoning?",
        back: "What substance, how much, when, and by which route — plus age, weight, symptoms and any treatment already given. Keep the container.",
      },
      {
        topic: "Poisoning",
        front: "Two things never to do for a swallowed poison, and why?",
        back: "Never induce vomiting (corrosives burn twice; fuels are aspirated into the lungs) and never give milk, oil or salt water (no neutralisation, real aspiration risk, wasted time).",
      },
      {
        topic: "Poisoning",
        front: "The organophosphate picture?",
        back: "Pinpoint pupils, sweating, salivation, vomiting, wet chest sounds, muscle weakness after pesticide exposure — urgent hospital transfer for atropine.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "McGraw-Hill",
        title: "Goldfrank's Toxicologic Emergencies",
        note: "Standard toxicology reference text — educational source, verify current edition.",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
    ],
  },
  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "first-aid",
    moduleTitle: "Common Emergencies",
    lessonTitle: "Recognising Emergencies and Making the Referral",
    description:
      "First aid ends with a decision, not a bandage. Learn the red flags, the referral note that speaks for you, and why 'urgent' means your feet move now.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Recognise red flags across body systems that demand emergency referral, including obstetric danger signs.",
      "Write a referral note that carries identity, vitals, treatments given and the reason for referral.",
      "Organise safe transfer: call ahead, match transport to severity, escort critical patients.",
    ],
    tags: ["referral", "emergencies", "first aid", "handover", "escalation", "sbar"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every first-aid episode ends at the same doorway: does this patient need more than I can give, now? Your power as a responder is not only in what you do — it is in how fast you recognise the ceiling of your resources and act on it.\n\nThe endgame skill is the referral: early, right, warm and complete. Late referrals arrive dead. Incomplete ones arrive unexplained, and the receiving team starts from zero while the clock runs.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Red flags that end any debate: breathing difficulty or a noisy airway; uncontrolled bleeding; the shock picture; falling consciousness; a seizure that will not stop; chest pain; a stiff neck with fever; poisoning; severe dehydration. In women, add the obstetric set: bleeding in pregnancy or after birth, severe headache with blurred vision or swelling, convulsions, obstructed labour — all travel by the same rule: move now.\n\nThen make the referral work. Phone ahead so the receiving facility can prepare. Write the note in SBAR order: identity and age; the **Situation** — what happened and why you are worried; **Background** — relevant history and allergies; your **Assessment** — vitals with times and your findings; **Recommendation** — what they need, plus every treatment and drug you gave, each with its time, so nobody double-doses. Match transport to severity: the walking wounded can go by car with an escort; the critical need the National Ambulance Service (112) or the fastest vehicle with a trained escort, oxygen and IV where possible. Send the note, the containers, the cards and the relatives who know the story — and where you can, go yourself: a spoken handover beats paper alone.",
      },
      {
        type: "clinical_pearl",
        body: "Treat first, write second, send third — and the note always travels with the patient. The paperwork is arranged while the transport is being called, never instead of it, and never in front of it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 11 p.m. at your CHPS compound. A woman who delivered six hours ago has soaked two pads in thirty minutes and now feels faint. Her pulse is 112, BP 92/60, skin cool. The nearest district hospital is forty minutes away; the night driver is available.\n\nWhat sequence do you run in the next ten minutes?\n\nAnswer: This is postpartum haemorrhage with early shock — a move-now emergency. Shout for help; check and rub the fundus (an atony, floppy uterus is the commonest cause) while an assistant keeps her flat and warm and counts the pads; a full bladder keeps the uterus floppy, so help her empty it; give any uterotonics your standing orders allow, with times noted; call the district hospital and the ambulance line (112). While treatment continues, write the SBAR note — identity, delivery and bleeding times, vitals with times, drugs given and when, pad count. Then she travels with the note, the pads and a knowledgeable escort. Treat first, write second, send third — and travel with her if you can.",
      },
      {
        type: "memory_trick",
        body: "The referral's five travelling companions: **the patient, the paper, the packaging, the people who know the story — and you.** Send all five and the handover tells itself.",
      },
      {
        type: "summary",
        body: "- Red flags end debates: airway and breathing trouble, uncontrolled bleeding, shock, falling consciousness, seizures, poisoning, obstetric danger signs.\n- The referral note is SBAR: Situation, Background, Assessment, Recommendation — with every treatment and its time.\n- Phone ahead so the receiving team prepares before the patient arrives.\n- Match transport to severity: the critical need the fastest option plus a trained escort.\n- Treat first, write second, send third — and the note always travels with the patient.",
      },
    ],
    questions: [
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "Which of these belongs in every referral note?",
        options: [
          "Only the patient's name and the destination facility",
          "A complete medical history going back to childhood",
          "Vitals with their times, treatments given with times, and the reason for referral",
          "The attendant's personal opinion of the family",
        ],
        correctIndex: 2,
        explanation: "The note must let the receiving team continue, not restart: current vitals with times, what has been given and when, and why you are worried. Opinions and biographies can wait.",
      },
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "first-aid",
        stem: "A postpartum woman soaks two pads in thirty minutes and feels faint six hours after delivery. The correct response is:",
        options: [
          "Observe for another hour — lochia varies between women",
          "Immediate recognition of postpartum haemorrhage with early shock: treat alongside urgent transfer",
          "Give oral iron and advise rest",
          "Wait for the morning van and send her with a note",
        ],
        correctIndex: 1,
        explanation: "Soaking two pads in half an hour with faintness, tachycardia and a falling BP is not normal lochia — it is haemorrhage with shock beginning, and it is treated while transfer is arranged, never watched.",
      },
      {
        topic: "Referral",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "first-aid",
        stem: "Why phone the receiving facility ahead of the patient?",
        options: [
          "So the team can prepare staff, space and supplies before the patient arrives",
          "To ask permission before treating anyone",
          "Because it is legally required for every patient",
          "To give the family time to gather funds",
        ],
        correctIndex: 0,
        explanation: "A pre-alerted team meets the patient with theatre space, blood or drugs ready — the minutes you save are the minutes that matter.",
      },
    ],
    flashcards: [
      {
        topic: "Referral",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — the order for a referral note or a phone handover.",
      },
      {
        topic: "Referral",
        front: "Why include the times of drugs given in the referral note?",
        back: "So the receiving team never double-doses or misses a time-critical dose. 'When' is as important as 'what'.",
      },
      {
        topic: "Referral",
        front: "Name four obstetric red flags that mean immediate transfer.",
        back: "Bleeding in pregnancy or after birth; severe headache with blurred vision or swelling (pre-eclampsia picture); convulsions; obstructed labour.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "Ghana National Ambulance Service",
        title: "Emergency Medical Services and the 112 Emergency Line",
        note: "Verify the referral pathway, numbers and response capability for your district.",
      },
      {
        organization: "St John Ambulance",
        title: "First Aid Manual",
        note: "Standard layperson first-aid reference — verify current edition.",
      },
    ],
  },
  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Medication Skills",
    lessonTitle: "Oral and Topical Medication Administration",
    description:
      "Tablets and creams look harmless, so their dangers are quiet. The rights, the checks, and the teaching that keeps patients safe after they swallow and go home.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Apply the rights of medication administration before, during and after giving a drug.",
      "Administer oral medicines correctly — positioning, fluids, and which forms must never be crushed.",
      "Apply topical medicines hygienically and teach patients safe use at home.",
    ],
    tags: ["medication administration", "oral", "topical", "rights", "patient teaching"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "By Year 2 you are giving medicines under supervision, and the ward quickly teaches you a paradox: the most ordinary medicines — tablets, syrups, creams — cause the most ordinary harm. A wrong tablet at 3 a.m., a dose given twice because nobody signed, a slow-release pill crushed into powder by someone in a hurry.\n\nThe defence is boring and beautiful: a fixed set of checks you never skip, however busy or familiar the drug. And the teaching you give before discharge is administration too — just with a delay before it matters.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Before giving: read the prescription against the chart and check the **rights** — right patient (two identifiers), right drug, right dose, right route, right time, plus right reason, documentation and response. Check allergies, expiry date and your calculation. If the drug is new to you, look it up: a minute with the formulary is cheaper than an error.\n\nOral route: position the patient upright so tablets slide instead of sinking, offer a full glass of water, and stay until they have swallowed. **Never crush enteric-coated or sustained-release forms** — the coating is the timing, and crushing dumps the whole dose at once. Follow the chart's food instructions: some drugs want food, some an empty stomach. Topical route: read the strength, because skin products differ from vaginal or eye preparations; clean and dry the area; apply a thin layer with a gloved hand or clean applicator; the patient uses their own tube — never a shared pot. After giving, sign the chart immediately — never before — and later note the response: did the fever fall, did the pain ease? Teaching before discharge: what the medicine is for, how to take it, for how long, which red-flag side effects mean 'come back', and never to share or stop early. Then confirm with teach-back.",
      },
      {
        type: "clinical_pearl",
        body: "Sign the chart only after the tablet has gone down, not before you fetch the cup. And when a patient cannot tell you what their medicine is for, the teaching has not happened yet — use teach-back before they leave your hands.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother being discharged with ferrous sulphate and folic acid tells you, 'I will stop them when my stool turns black — that means the medicine is spoiling my blood.'\n\nWhat does she need to hear, and how do you check that it landed?\n\nAnswer: Gently correct the map. Dark stools are a normal, harmless effect of iron, not a sign of harm — stopping is the danger, because her anaemia will deepen quietly. Teach the practical points: take iron with or after food to reduce nausea, keep it away from tea because tea cuts absorption, and finish the full course with a haemoglobin check booked. Then use teach-back: 'So that I know you have it — tell me two things about your stool and about stopping these tablets.' If she repeats the plan in her own words, the teaching stuck; if not, go again, warmly. A prescription she abandons at home was never really given.",
      },
      {
        type: "memory_trick",
        body: "Count the rights on your fingers: Patient, Drug, Dose, Route, Time — five on one hand — then the grown-ups on the other: Reason, Response, Documentation. Count all eight before the cup leaves the trolley.",
      },
      {
        type: "summary",
        body: "- Rights: patient (two identifiers), drug, dose, route, time — extended by reason, documentation, response.\n- Position upright, give fluids, and stay until the medicine is swallowed.\n- Enteric-coated and sustained-release forms are never crushed — the coating is the timing.\n- Topicals: right strength for the site, thin layer, gloves or applicator, the patient's own tube, hands washed after.\n- Sign after giving, teach before discharge, and confirm the teaching with teach-back.",
      },
    ],
    questions: [
      {
        topic: "Medication Administration",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "A sustained-release or enteric-coated tablet must never be crushed because:",
        options: [
          "It tastes too bitter for the patient",
          "The coating controls where and when the drug is released — crushing dumps the dose at once",
          "Crushing makes the drug permanently stronger",
          "Only children's tablets may be crushed",
        ],
        correctIndex: 1,
        explanation: "The coating is engineered timing: delaying release or protecting the stomach. Crush it and the patient receives the whole dose immediately — an overdose by technique.",
      },
      {
        topic: "Medication Administration",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "When should you sign the medication chart for a dose you have just given?",
        options: [
          "Before fetching the drug, to save time",
          "At the end of the shift, from memory",
          "Only if the patient later reports improvement",
          "Immediately after the patient has actually taken it",
        ],
        correctIndex: 3,
        explanation: "Signing before the swallow is how doses get recorded but never given — or given twice. The signature follows the swallow, immediately.",
      },
      {
        topic: "Medication Administration",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Which is correct practice when applying a topical cream to a patient?",
        options: [
          "Apply a thin layer with a gloved hand, from the patient's own tube",
          "Dip fingers into a shared ward pot to save tubes",
          "Apply a thick layer so it 'lasts the week'",
          "Cover every application with a tight occlusive bandage",
        ],
        correctIndex: 0,
        explanation: "Thin layers deliver the prescribed dose; shared pots become shared infections; occlusion is only for prescribed situations. Gloves protect you and the next patient.",
      },
    ],
    flashcards: [
      {
        topic: "Medication Administration",
        front: "The core five rights of medication administration?",
        back: "Right patient (two identifiers), right drug, right dose, right route, right time — extended by right reason, documentation and response.",
      },
      {
        topic: "Medication Administration",
        front: "Why never crush enteric-coated or sustained-release tablets?",
        back: "The coating is the timing and the protection — crushing releases the entire dose at once, causing overdose or stomach irritation.",
      },
      {
        topic: "Medication Administration",
        front: "What is teach-back?",
        back: "Asking the patient to explain the plan in their own words before discharge — proof the teaching landed, not just that it was spoken.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Professional standards governing medication practice — verify current version.",
      },
    ],
  },
  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Medication Skills",
    lessonTitle: "Giving Injections Safely",
    description:
      "Angles, sites, and the small habits — gloves, no recapping, the bin at the bedside — that keep an injection safe for the patient and for you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Match each route — IM, SC, ID — with correct sites, angles and techniques.",
      "Explain site choice in infants and the WHO position on aspiration for vaccines.",
      "Apply sharps safety at the point of use, and respond correctly to a needlestick.",
    ],
    tags: ["injections", "technique", "im injection", "sharps safety", "vaccination"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "An injection puts medicine exactly where you aim it — which means everything depends on knowing where you are aiming. The angles are few: ninety degrees into muscle, a pinch of fat under the skin, a whisper of a needle into the skin's own layers. The sites are chosen, not found by chance.\n\nAnd the second safety is yours. Every sharp is a possible needlestick, and the habits that protect you are as fixed as the angles that protect the patient.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**IM, at 90 degrees**: in adults, the deltoid — thumb on the acromion, two to three fingerbreadths below, a triangle that avoids the nerves behind — or the ventrogluteal site for larger volumes and irritating drugs. In infants and children who cannot yet walk, the anterolateral thigh (vastus lateralis), never the buttock, whose muscle is undeveloped and whose sciatic nerve sits exposed. Use the Z-track for stains and irritants: pull the tissue aside, inject, wait ten seconds, release — the track seals behind you. WHO no longer recommends aspiration for vaccine injections; for other IM drugs, follow local policy.\n\n**SC, at 45 to 90 degrees into a pinched fold**: abdomen, thigh, upper arm — the home of insulin and heparin; rotate sites, because repeated same-spot injections scar fat and make absorption unpredictable. **ID, at 10 to 15 degrees**: inner forearm, the Mantoux route — bevel up, a small wheal, no further. Sharps safety lives inside every injection: gloves on, needle straight from the patient into the sharps bin already at the bedside. Never recap, never pass a sharp hand to hand, never fill a bin past three-quarters. A needlestick is washed, reported and followed up the same hour — never hidden.",
      },
      {
        type: "clinical_pearl",
        body: "The infant's buttock has neither the muscle for the medicine nor the cover for the sciatic nerve — thigh, always thigh, until the child walks. And the safest recap is the one you never attempt: the bin, not the fingers, catches the needle.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At an EPI outreach a mother holds her four-month-old and asks, 'Why are you giving it in the thigh? At home the chemical seller gives injections in the bottom — that is where injections go, isn't it?'\n\nWhat is the accurate, kind answer?\n\nAnswer: For a baby, the thigh is not a style choice; it is anatomy. The vastus lateralis is well developed from kicking, thick enough to absorb the vaccine, and crossed by no major nerves or vessels. The gluteal muscle a four-month-old owns is thin, and the sciatic nerve lies close beneath the surface, protected by muscle only once a child has been walking a while. So the thigh gives reliable absorption with far less risk of nerve injury — and injections belong in trained hands with sterile equipment, one more reason the EPI clinic is the right place. Landmarks: middle third of the front-outer thigh, 90 degrees, no aspiration for vaccines, needle straight into the bin after.",
      },
      {
        type: "memory_trick",
        body: "The angle rhyme: 'Ninety for muscle, a pinch for the skin, fifteen for the whisper just under it in.' And for the babies: 'Thigh before they walk.'",
      },
      {
        type: "summary",
        body: "- IM is 90 degrees into muscle: adult deltoid or ventrogluteal; infant vastus lateralis (thigh), never the buttock.\n- Z-track for irritating drugs: pull aside, inject, wait ten seconds, release — the track seals.\n- WHO: no aspiration needed for vaccine injections; for other IM drugs, follow local policy.\n- SC into a pinched fold (abdomen, thigh, arm) with site rotation; ID at 10-15 degrees for the Mantoux wheal.\n- Needle straight from patient to bedside sharps bin: never recap, never fill past three-quarters, wash and report every needlestick the same hour.",
      },
    ],
    questions: [
      {
        topic: "Injections",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "You are giving an IM injection of an irritating drug to an adult. The Z-track technique is used because:",
        options: [
          "Pulling the skin aside seals the track and keeps the drug from staining or irritating tissue",
          "It makes the injection quicker",
          "It removes the need for aspiration entirely",
          "It reduces the volume of drug needed",
        ],
        correctIndex: 0,
        explanation: "Displacing the skin before injecting means the tissue planes realign when released — sealing the drug inside and away from the surface and the stain.",
      },
      {
        topic: "Injections",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "The correct IM injection site for a four-month-old infant is:",
        options: [
          "The deltoid muscle",
          "The gluteal muscle",
          "The anterolateral thigh (vastus lateralis)",
          "The abdomen",
        ],
        correctIndex: 2,
        explanation: "The thigh's vastus lateralis is thick, well-developed and safe. The infant buttock's muscle is undeveloped and the sciatic nerve is poorly protected beneath it.",
      },
      {
        topic: "Injections",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Current WHO guidance on aspiration before vaccine injections states that:",
        options: [
          "Always aspirate for every injection",
          "Aspiration is not required for vaccine injections",
          "Aspirate only in adults, never in children",
          "Aspirate for vaccines but not for antibiotics",
        ],
        correctIndex: 1,
        explanation: "WHO injection-safety guidance dropped aspiration for vaccine injections — the sites used have no large vessels to aspirate from, and the delay increases pain and tissue drag.",
      },
    ],
    flashcards: [
      {
        topic: "Injections",
        front: "The angles for IM, SC and ID injections?",
        back: "IM: 90 degrees into muscle. SC: 45-90 degrees into a pinched skin fold. ID: 10-15 degrees into the skin layers, bevel up, forming a small wheal.",
      },
      {
        topic: "Injections",
        front: "How do you find the adult deltoid safe spot?",
        back: "Thumb on the acromion, two to three fingerbreadths below — the triangle below avoids the nerves that curl behind the deltoid.",
      },
      {
        topic: "Injections",
        front: "Three sharps rules at the point of use?",
        back: "Never recap; the sharps bin sits at the bedside and the needle goes straight in; never fill past three-quarters — and every needlestick is washed and reported the same hour.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Best Practices for Injections and Related Procedures Toolkit",
        year: "2010",
      },
      {
        organization: "World Health Organization",
        title: "WHO Guideline on the Use of Safety-Engineered Syringes",
        year: "2016",
        note: "Educational source — verify current guidance.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Medication Skills",
    lessonTitle: "Medication Calculations for the Ward",
    description:
      "The sums you will actually meet at 3 a.m. — want over have, unit conversions, drip rates — plus the habits that catch what a calculator cannot.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Convert confidently between grams, milligrams and micrograms, and decode percentage solutions.",
      "Solve 'what you want / what you have' ampoule problems and mg/kg paediatric doses.",
      "Apply the independent double-check to high-risk drugs and infusions.",
    ],
    tags: ["calculations", "practice", "drug dosages", "infusion rates", "medication safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Medication maths is not hard mathematics — it is careful arithmetic done under pressure, on tired eyes, with a patient waiting. That combination is exactly why it is dangerous. The numbers themselves are simple; the conditions at 3 a.m. are not.\n\nSo the skill has two layers: the formula that gets the number right, and the habits that catch you when the formula meets a tired brain. Both layers belong in your fingers before your first solo drug round.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The core formula answers 'how many mL do I draw?' — **what you want ÷ what you have × the volume it comes in**. Prescribed 75 mg; the ampoule says 100 mg in 2 mL → 75 ÷ 100 × 2 = 1.5 mL. Conversions come first, always: 1 g = 1,000 mg, and 1 mg = 1,000 micrograms — a slipped decimal is a thousand-fold error. Percentage solutions: 1% means 1 g in 100 mL, which is 10 mg per mL — so 2% lidocaine is 20 mg/mL. Paediatric doses are weight-based: an 18 kg child at 10 mg/kg needs 180 mg, with the weight measured today, not copied from a month-old clinic card. Infusions: drops per minute = (volume in mL × the drip factor) ÷ the minutes — a macro set is usually 20 drops per mL and a micro set 60. mL per hour = total volume ÷ hours.\n\nThe habit layer: write every step, with units attached to every number, and let the units shadow their values to the end. If the answer wants six ampoules or a 20 mL push for a tablet-sized dose, the number itself is telling you to stop and re-check. High-risk drugs — insulin, heparin, opioids, paediatric doses, infusions — get an **independent double-check**: a second nurse calculates without seeing your answer, then you compare. Calculator allowed; brain mandatory.",
      },
      {
        type: "clinical_pearl",
        body: "Units travel with their numbers like a shadow. If the units of your answer do not match the units of the question, the answer is wrong no matter how confident the arithmetic felt. And 'that seems like a lot' is a safety device, not an insult — use it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 3 a.m. you are to give gentamicin 240 mg IV. The ampoule reads 80 mg in 2 mL. You work it quickly: 240 ÷ 80 × 2 = 6 mL, so you reach for a third ampoule. The senior nurse pauses you — 'three ampoules for one dose; check the order again.'\n\nWhat are the possible explanations, and what do you do?\n\nAnswer: The arithmetic is correct — 240 mg from 80 mg/2 mL ampoules is indeed 6 mL — so the maths is not the problem; the prescription might be. Gentamicin is weight-based and nephrotoxic, and a dose written for a much larger patient, or a transcription slip, can quietly double what this woman should receive. The right move is to re-read the order, re-check today's measured weight, re-do the calculation with a second person as an independent double-check, and query the prescriber before drawing up. If the dose is confirmed, draw the 6 mL, give it, and chart it. The senior's pause was not doubt in your arithmetic — it was the habit layer working, exactly as it should.",
      },
      {
        type: "memory_trick",
        body: "**Want over Have, times the Volume** — and keep the shadow: a unit on every number. When the answer looks big, stop; when the drug is high-risk, check it twice.",
      },
      {
        type: "summary",
        body: "- Volume to draw = what you want ÷ what you have × the stock volume.\n- 1 g = 1,000 mg = 1,000,000 micrograms; 1% solution = 10 mg per mL.\n- Paediatric doses are mg/kg on a weight measured today, not copied from an old card.\n- Drops per minute = (volume × drip factor) ÷ minutes — macro 20, micro 60 drops per mL.\n- High-risk drugs get an independent double-check; odd-looking answers stop the pen, not the patient.",
      },
    ],
    questions: [
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "The ampoule reads 100 mg in 2 mL and you need 75 mg. How many mL do you draw?",
        options: [
          "0.75 mL",
          "1.2 mL",
          "1.5 mL",
          "2.0 mL",
        ],
        correctIndex: 2,
        explanation: "75 ÷ 100 × 2 = 1.5 mL. Want over have, times the volume — with units written at every step.",
      },
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "A 1% solution contains how much drug per mL?",
        options: [
          "0.1 mg",
          "1 mg",
          "10 mg",
          "100 mg",
        ],
        correctIndex: 2,
        explanation: "1% means 1 g in 100 mL = 1,000 mg ÷ 100 mL = 10 mg per mL. So 2% lidocaine carries 20 mg per mL.",
      },
      {
        topic: "Medication Calculations",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Which list best represents the drugs that should always receive an independent double-check before administration?",
        options: [
          "Paracetamol, ORS and vitamins",
          "All cough syrups and topical creams",
          "Only drugs used in theatre",
          "Insulin, heparin, opioids, paediatric doses and infusions",
        ],
        correctIndex: 3,
        explanation: "The high-risk list — narrow margins between therapeutic and lethal — is exactly where a second, unseen calculation saves the most lives.",
      },
    ],
    flashcards: [
      {
        topic: "Medication Calculations",
        front: "The ampoule formula for the volume to draw?",
        back: "Volume = (dose wanted ÷ dose in the ampoule) × ampoule volume. Example: want 75 mg from 100 mg in 2 mL → 1.5 mL.",
      },
      {
        topic: "Medication Calculations",
        front: "1% solution equals how many mg/mL, and why?",
        back: "1 g per 100 mL = 1,000 mg per 100 mL = 10 mg/mL. A 2% solution is 20 mg/mL.",
      },
      {
        topic: "Medication Calculations",
        front: "What is an independent double-check?",
        back: "A second nurse calculates the dose without seeing your working, then you compare answers — mandatory for insulin, heparin, opioids, paediatric and infusion doses.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Medication Without Harm — WHO Global Patient Safety Challenge",
        year: "2017",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Nurses",
        note: "Standard nursing text — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Wound and Skin Skills",
    lessonTitle: "Aseptic Wound Dressing",
    description:
      "The dressing trolley is a small ceremony with a big purpose: clean hands, a protected field, clean-to-dirty strokes, and a chart that shows the next nurse what you saw.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Distinguish sterile (aseptic) from clean technique and choose correctly for the wound in front of you.",
      "Perform a dressing change in the correct sequence, including clean-to-dirty cleansing.",
      "Document wound appearance so the trend is visible to the whole team.",
    ],
    tags: ["wound dressing", "asepsis", "sterile technique", "wound assessment", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A dressing does two jobs at once: it protects the wound from the world, and the world from the wound's bacteria. Which job dominates depends on the wound — but every dressing change is also an examination, a scheduled moment to see whether the wound is winning or losing.\n\nThe technique is what keeps your hands from being the bridge between the two. Asepsis is a choreography: once it lives in your fingers, it protects every wound you ever touch.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Choose your level first. **Sterile (aseptic) technique** for fresh surgical wounds, wounds bound for theatre, and high-risk or immunocompromised patients — sterile gloves and a sterile pack. **Clean technique** is acceptable for many chronic wounds healing where they are: clean gloves and clean supplies, with the same discipline.\n\nThe sequence: explain and position the patient; give analgesia beforehand if the change is painful; gather everything before you touch anything — pack, saline, disposal bag, gloves; perform hand hygiene; remove the old dressing with a gloved hand, peeling tape toward the wound and never letting your fingers touch the wound side of the dressing; assess what you see — size, edges, tissue colour, exudate (type and amount), odour, surrounding skin, pain; cleanse with saline from **clean to dirty**: from the centre outward or from the least contaminated area to the most, one swab one direction, never dipping a used swab back into the sterile saline; pat dry; apply the dressing the wound's condition calls for; secure without tension; dispose waste and sharps; hand hygiene again. Document immediately — date, time, appearance, what you used, the plan. Strike-through (fluid soaked through to the surface) means the dressing changes now, not at the scheduled hour. And if a wound is packed, you do not remove the packing unless it is prescribed.",
      },
      {
        type: "clinical_pearl",
        body: "The stroke tells the story: clean to dirty, one direction, one swab — the moment a swab travels back toward clean, your sterile technique has ended. And a wound chart with no description is a wound nobody is monitoring.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On day three after caesarean section, a woman's abdominal dressing shows strike-through of straw-coloured fluid, and one edge has lifted overnight. A student says, 'It is due for change tomorrow — we can tape the corner down and leave it for now.'\n\nWhat is the correct judgement, and how do you act on it?\n\nAnswer: Strike-through means the barrier is gone — a soaked dressing is a wet highway for bacteria, and its working life is over. Change it now: explain and position her, gather everything, hand hygiene, remove with a gloved hand peeling toward the wound, then assess — the wound itself, and the fluid. Straw-coloured fluid on day three raises questions about a seroma; if there is fever, spreading redness or tenderness, wound infection joins the list and the senior is told. Cleanse with saline clean-to-dirty, re-dress, and chart what you saw with the time. Taping down a soaked corner hides the problem and invites infection — the wound decides the dressing schedule, not the other way round.",
      },
      {
        type: "memory_trick",
        body: "A-C-C-D at the trolley: **A**ssess, **C**lean (clean-to-dirty), **C**over, **D**ocument — and remember that strike-through ends the schedule.",
      },
      {
        type: "summary",
        body: "- Sterile technique for fresh surgical and high-risk wounds; clean technique is acceptable for many chronic wounds.\n- Gather everything before starting; hand hygiene before, between and after.\n- Assess at every change: size, edges, tissue, exudate, odour, surrounding skin, pain.\n- Cleanse clean-to-dirty — centre outward, one direction per swab, never re-dip a used swab.\n- Strike-through means change now; chart the wound's appearance with the time so the trend is visible.",
      },
    ],
    questions: [
      {
        topic: "Aseptic Wound Dressing",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "When cleansing a wound with gauze and saline, the correct stroke pattern is:",
        options: [
          "Back and forth, for thorough cleaning",
          "From the wound edges inward toward the centre",
          "Any direction, as long as saline is used",
          "From the cleanest area outward — least to most contaminated, one direction per swab",
        ],
        correctIndex: 3,
        explanation: "Cleaning drags bacteria along with the swab — so the stroke must always travel away from clean tissue toward the dirty margin, one swab, one direction, never back.",
      },
      {
        topic: "Aseptic Wound Dressing",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "A dressing shows strike-through — fluid has soaked through to its surface. You should:",
        options: [
          "Change it now — the barrier has failed",
          "Tape the corner down and wait for the scheduled change",
          "Cover it with a second dressing and chart 'dressing intact'",
          "Remove it and leave the wound open to the air overnight",
        ],
        correctIndex: 0,
        explanation: "A soaked dressing is no longer a barrier — it is a warm, wet bridge for bacteria. The change happens now, with full assessment of what soaked it.",
      },
      {
        topic: "Aseptic Wound Dressing",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Sterile (aseptic) technique rather than clean technique is indicated for:",
        options: [
          "A chronic leg ulcer managed in the community",
          "A minor graze on a healthy teenager",
          "An intact pressure-area blister",
          "A fresh post-operative abdominal wound",
        ],
        correctIndex: 3,
        explanation: "Fresh surgical wounds carry the highest stakes and the lowest tolerance for introduced bacteria — sterile gloves, sterile pack, full aseptic field.",
      },
    ],
    flashcards: [
      {
        topic: "Aseptic Wound Dressing",
        front: "What does clean-to-dirty cleansing mean in practice?",
        back: "Wipe from the wound's cleanest part toward the dirtier margin — centre outward, least to most contaminated — one direction, one swab, never back toward clean.",
      },
      {
        topic: "Aseptic Wound Dressing",
        front: "What is strike-through, and what does it demand?",
        back: "Fluid soaking through the dressing to the outside. The barrier has failed — change the dressing now, not at the scheduled time.",
      },
      {
        topic: "Aseptic Wound Dressing",
        front: "What do you assess at every dressing change?",
        back: "Size, edges, tissue colour, exudate (type and amount), odour, surrounding skin, and pain — charted each time so the whole team sees the trend.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Guidelines for the Prevention of Surgical Site Infection",
        year: "2016",
      },
      {
        organization: "World Health Organization",
        title: "WHO Guidelines on Hand Hygiene in Health Care",
        year: "2009",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Wound and Skin Skills",
    lessonTitle: "Pressure Area Care",
    description:
      "Pressure ulcers are the one wound class you can usually prevent — with a clock, a pillow and observant eyes. Reposition, offload the heels, keep skin dry, feed the skin.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain how pressure and shear create ulcers over bony prominences.",
      "Stage pressure injuries correctly, from stage 1 to deep tissue injury and unstageable.",
      "Apply the prevention bundle: repositioning, heel offloading, skin hygiene and nutrition.",
    ],
    tags: ["pressure ulcers", "skin care", "repositioning", "prevention", "staging"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Sit perfectly still and feel where your own weight lands — tailbone, heels, elbows. Blood is being squeezed out of those spots, and your body shifts without asking to restore it. A patient who cannot move — after a stroke, in a long labour with an epidural, drowsy after surgery — does not make those shifts, and within hours the skin over those bones begins to starve.\n\nA pressure ulcer is a preventable injury, and the word 'preventable' is why facilities audit them — and why the clock, the pillow and your eyes matter so much in every shift you work.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Pressure starves the tissue; **shear** — skin dragged one way while the bone beneath moves the other, as when a patient is pulled up the bed — tears it where you cannot see. Moisture, malnutrition, age, sensory loss and fever all accelerate the damage. Stage what you find: **stage 1** — intact skin with redness that does not blanch when you press it; **stage 2** — a shallow open sore or blister; **stage 3** — full thickness with fat visible; **stage 4** — bone, tendon or muscle exposed; **unstageable** — the base hidden under slough or eschar; **suspected deep tissue injury** — purple or maroon intact skin over a bony prominence, the damage brewing beneath.\n\nPrevention is a bundle, not a single act: turn and reposition at least **every two hours** for patients at risk, with a turning chart on the wall that makes it real; a 30-degree side-tilt rather than lying flat on the hip; heels floated free on a pillow under the calves; head of bed no higher than the illness requires; skin kept clean and dry, with sweaty or soiled linen changed promptly; **never massage over bony prominences** — it deepens damage you cannot see; lift rather than drag when moving a patient, or use a slide sheet; feed the skin — protein and fluids are wound care from the inside; inspect the whole skin every shift, especially the spots nobody looks at. Stage 3 and beyond need wound-team or specialist referral.",
      },
      {
        type: "clinical_pearl",
        body: "Press the redness over a hip or a heel: if it stays red, it is stage 1 — damage already begun and a two-hourly clock starting today. If the skin is purple, do not wait for it to open: that is deep tissue injury talking from underneath.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 68-year-old man is cared for at home after a stroke. The family says he 'prefers lying on his back' and is changed 'when someone notices'. You find a non-blanching red patch over his sacrum, his heels hard and dry against the mattress, and his shirt damp with yesterday's sweat.\n\nWhat is the injury, and what plan do you teach the family?\n\nAnswer: This is a stage 1 pressure injury over the sacrum, on intact skin — exactly the stage at which it is still reversible. The teaching plan: turn him at least every two hours, right side to back to left side, with a turning chart on the wall and family members assigned by name so the task has owners; use a 30-degree tilt rather than a full side-lying position on the hip; pillow under the calves so the heels float clear of the mattress; check and change sweaty or soiled linen promptly, washing and drying without rubbing; lift or slide him up with a cloth under him — never pull him across the sheet; feed him properly, protein especially, and keep fluids coming; and look at the sacrum, heels and hips every single day. If the redness refuses to blanch, turns purple, or the skin breaks, the family reports it at once. A follow-up visit is agreed before you leave.",
      },
      {
        type: "memory_trick",
        body: "The prevention clock: '**Two hours turn, heels off the bed, skin dry, lift — don't drag**' — then feed the skin and check the spots nobody sees.",
      },
      {
        type: "summary",
        body: "- Pressure and shear starve and tear skin over bony prominences; immobility, moisture, malnutrition and fever speed the damage.\n- Stage 1: non-blanching redness on intact skin — reversible if acted on today.\n- Stage 2 blister or shallow sore; 3 fat visible; 4 bone or tendon exposed; purple intact skin = suspected deep tissue injury.\n- Prevention bundle: reposition at least two-hourly with a chart, 30-degree tilt, heels floating, skin dry, lift don't drag.\n- Never massage bony prominences; nutrition is skin care; stage 3 and beyond need specialist referral.",
      },
    ],
    questions: [
      {
        topic: "Pressure Area Care",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "Redness over the sacrum that does NOT turn pale when pressed is:",
        options: [
          "A stage 1 pressure injury — damage already beginning",
          "Normal bruising from lying down",
          "A stage 4 pressure ulcer",
          "A fungal rash needing antifungal cream",
        ],
        correctIndex: 0,
        explanation: "Non-blanchable erythema on intact skin is stage 1 — the blood flow has already been compromised long enough to injure, and the prevention clock starts immediately.",
      },
      {
        topic: "Pressure Area Care",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Why should you never massage over bony prominences in an immobile patient?",
        options: [
          "It directly causes infection of the skin",
          "It removes too much natural skin oil",
          "It is too painful for every patient to tolerate",
          "It can deepen the tissue damage already caused by pressure beneath the surface",
        ],
        correctIndex: 3,
        explanation: "Massaging a pressure point adds friction and shear to tissue that is already ischaemic underneath — the massage can complete what the pressure began.",
      },
      {
        topic: "Pressure Area Care",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "Best practice for preventing heel pressure ulcers in a bedridden patient is to:",
        options: [
          "Roll a towel under the ankles to press heels into the mattress",
          "Massage the heels with shea butter every two hours",
          "Float the heels free, with a pillow placed under the calves",
          "Keep the knees bent tightly with a firm bandage",
        ],
        correctIndex: 2,
        explanation: "Offloading is the only reliable prevention for heels — a pillow under the calves lifts the heels clear of the mattress so no pressure reaches them at all.",
      },
    ],
    flashcards: [
      {
        topic: "Pressure Area Care",
        front: "What is a stage 1 pressure injury?",
        back: "Intact skin with non-blanchable redness over a bony prominence — press it and it stays red. Acted on today, it can fully reverse.",
      },
      {
        topic: "Pressure Area Care",
        front: "Four parts of the prevention bundle?",
        back: "Reposition at least two-hourly (with a turning chart), 30-degree side-tilt, heels floated on a pillow under the calves, skin kept clean and dry — plus lift, don't drag.",
      },
      {
        topic: "Pressure Area Care",
        front: "Purple intact skin over a bony prominence means what?",
        back: "Suspected deep tissue injury — damage beneath intact skin. Do not wait for the skin to break before acting and escalating.",
      },
    ],
    sources: [
      {
        organization: "EPUAP / NPIAP / PPPIA",
        title: "Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline",
        year: "2019",
        note: "The international guideline — educational source, verify current edition.",
      },
      {
        organization: "NICE",
        title: "Pressure Ulcers: Prevention and Management (CG179)",
        year: "2014",
        note: "Educational source — verify current version.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Monitoring and Elimination Skills",
    lessonTitle: "Catheterisation: Comfort and Safety",
    description:
      "The catheter is the most over-inserted device on the ward — and the infection that comes with it is yours to prevent. Anatomy, asepsis, and the dignity conversation.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Justify catheter insertion and remove catheters as early as possible.",
      "Describe female urethral anatomy and the safe balloon rule.",
      "Apply daily catheter care that prevents infection: closed system, bag position, hand hygiene.",
    ],
    tags: ["catheterisation", "elimination", "cauti", "asepsis", "bladder care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Nurses meet the catheter at both ends of the journey: measuring output accurately in a haemorrhaging mother, protecting skin during prolonged immobility, relieving a bladder that will not empty. It is a genuinely useful tool — with a tax attached. Every day a catheter stays, the risk of urinary infection climbs, and catheter-associated infection is among the most common healthcare-associated infections there are.\n\nSo this is really two skills in one lesson: knowing when not to insert it, and doing it safely when you must.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Insert only for a real reason: retention, critical illness needing accurate hourly output, selected palliative or skin situations, or specific procedures. Before inserting, try the gentler path — privacy, running water, a warm perineal pour, sitting upright, walking to the toilet if steady, analgesia for pain that makes voiding hard, and a bladder you have palpated and timed. For female anatomy: position and drape with dignity; cleanse front to back; the urethral meatus sits anterior to the vaginal opening — look before you insert, because the two openings are neighbours and the anatomy varies with age and parity. If the catheter slips into the vagina, leave it in place as a landmark, take a fresh sterile set, and find the meatus in front of it.\n\nThe technique in brief: sterile field and gloves, single-use lubricant, insert until urine returns, advance a little further, and only then — with urine flowing and no resistance — inflate the balloon. **Pain or resistance at inflation means STOP** and reassess; never force. Aftercare: secure the tubing to the thigh, keep the bag below bladder level and never on the floor, keep the system closed, empty at two-thirds to three-quarters full with hand hygiene before and after, cleanse the meatus daily with water (no routine antiseptics), and remove the catheter the moment its reason is gone. Ask every morning: does this catheter still need to be here?",
      },
      {
        type: "clinical_pearl",
        body: "The balloon rule is a stop sign: urine flowing and no resistance — or the balloon does not inflate. Forcing an inflated balloon in the wrong place tears the urethra; the patient's pain is the alarm, not background noise.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on day one after a straightforward pelvic repair has not passed urine for eight hours; her bladder is palpable and uncomfortable. A student asks whether to catheterise her now.\n\nWhat comes first, and how do you decide?\n\nAnswer: First the gentle trials, before any catheter: real privacy — screens closed, door handled, one staff member she is comfortable with — then running tap water, a warm pour over the perineum, sitting her upright if pain allows, and analgesia, because post-operative pain is one of the commonest causes of retention. If she is steady, walk her to the toilet. Give the trial a time limit: re-palpate and measure within thirty to sixty minutes. If she still cannot void and the bladder is growing tense and painful, short-term catheterisation per standing orders is now justified — with the reason documented, full aseptic technique, the balloon rules obeyed, and a plan to remove it as soon as she is voiding well again. A bladder left to over-distend loses its tone; a catheter inserted without need collects an infection. The timing is the clinical judgement.",
      },
      {
        type: "memory_trick",
        body: "Front to back, top to bottom: the meatus sits in front of the vagina, cleansing runs front to back, the bag hangs below the bladder and never on the floor — and every morning, ask 'Is today the day it comes out?'",
      },
      {
        type: "summary",
        body: "- Catheters need a reason: retention, accurate output in the critically ill, specific procedures — removed as soon as the reason is gone.\n- Try privacy, running water, warmth, analgesia and ambulation before inserting.\n- The female meatus is anterior to the vaginal opening — look before you insert.\n- Inflate the balloon only after urine returns with no resistance; pain means stop, never force.\n- Closed system, tubing secured, bag below bladder and off the floor, water-only meatal care, hand hygiene at every contact.",
      },
    ],
    questions: [
      {
        topic: "Catheterisation",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "During insertion you meet resistance and the patient cries out as the balloon inflates. You should:",
        options: [
          "Stop, allow the fluid out, withdraw slightly and reassess position — never force",
          "Inflate faster so it is over quickly",
          "Push the catheter deeper and inflate fully",
          "Remove everything and insert a larger catheter",
        ],
        correctIndex: 0,
        explanation: "Pain and resistance on inflation mean the balloon is likely not in the bladder — forcing it can tear the urethra. Deflate, adjust, confirm urine flow, and only then re-inflate.",
      },
      {
        topic: "Catheterisation",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "Where should the urinary drainage bag hang?",
        options: [
          "On the bed rail above the mattress",
          "Laid on the patient's abdomen",
          "Below bladder level, never on the floor",
          "On the floor beside the bed",
        ],
        correctIndex: 2,
        explanation: "Below the bladder keeps urine draining away; off the floor keeps the tap and the bag free of ward contamination. Bag on the floor is a classic route for reflux infection.",
      },
      {
        topic: "Catheterisation",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "A post-operative patient has not voided for six hours and the bladder is palpable. The FIRST approach is:",
        options: [
          "Immediate catheterisation to relieve the bladder",
          "Fluid restriction to reduce bladder filling",
          "Insertion of a suprapubic catheter",
          "Privacy, running water, warmth, analgesia and a timed trial of voiding",
        ],
        correctIndex: 3,
        explanation: "Most early post-operative retention yields to comfort and simple measures — privacy, running water, warmth, pain relief. The catheter is the backup, not the reflex.",
      },
    ],
    flashcards: [
      {
        topic: "Catheterisation",
        front: "Where is the female urethral meatus, and what if the catheter enters the vagina?",
        back: "Anterior to (in front of) the vaginal opening. If misplaced into the vagina, leave it as a landmark, take a fresh sterile set, and locate the meatus in front of it.",
      },
      {
        topic: "Catheterisation",
        front: "When may you inflate the retention balloon?",
        back: "Only after urine flows back and advancing meets no resistance. Pain or resistance means stop — deflate, reassess, never force.",
      },
      {
        topic: "Catheterisation",
        front: "Five daily catheter-care habits?",
        back: "Keep the system closed; secure tubing to the thigh; bag below bladder and off the floor; wash the meatus with water only, daily; hand hygiene before and after every contact — and ask daily whether it can come out.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Policy and Guidelines for Infection Prevention and Control",
        year: "2015",
        note: "Verify current version with GHS.",
      },
      {
        organization: "Society for Healthcare Epidemiology of America / IDSA",
        title: "Strategies to Prevent Catheter-Associated Urinary Tract Infections — Compendium Update",
        year: "2014",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Monitoring and Elimination Skills",
    lessonTitle: "Intravenous Therapy Basics",
    description:
      "A line that saves a life can drown a heart — the difference is your monitoring. Cannula sizes, veins, flow physics, and the complications to catch early.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Relate cannula gauge numbers to flow rate and choose appropriately for adults and children.",
      "Apply site-selection principles, including the limbs that must be avoided.",
      "Detect infiltration and phlebitis early, and manage both correctly.",
    ],
    tags: ["iv therapy", "cannulation", "peripheral cannula", "phlebitis", "infiltration"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The IV cannula is a doorway: fluids, blood, antibiotics and oxytocics all pass through it in minutes. That power is why it saves haemorrhaging women and dehydrated children — and why an unwatched line can swell an arm, flood a heart and feed an infection.\n\nYour job is not only putting it in. It is choosing the right size, the right vein and the right monitoring — every hour the line runs.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Gauge numbers run backwards to intuition: **the bigger the number, the smaller the cannula.** 14-16G for rapid resuscitation, blood and theatre; 18-20G for routine adult fluids and antibiotics; 22-24G for children, the frail elderly and small veins. Prefer a forearm vein in the non-dominant arm, avoiding joints — the flow stops every time the elbow bends — and never site a cannula in a limb with an AV fistula, lymphoedema after mastectomy, infection or thrombosis.\n\nInsertion is a supervised skill, and its principles are fixed: hand hygiene and aseptic technique, tourniquet, palpate before you pierce, insert at a shallow angle bevel-up, watch for flashback in the chamber, advance the cannula off the needle, secure with a transparent dressing labelled with date and time, and confirm patency with a saline flush. Monitoring is where safety lives — check the site and the rate every hour, with the dressing dry and the arm comfortable. **Infiltration** — fluid running into the tissue — shows pain, swelling, coolness and a slowing drip: stop, remove, elevate, resite, document. **Phlebitis** — an angry vein — shows pain tracking up the arm, redness, sometimes a palpable cord: remove and resite, never restart in the same vein. Watch the whole patient too: rising breathlessness, crackles at the bases and pitting oedema mean the heart cannot keep pace with the infusion — slow it, reassess, escalate. Cannulae are reviewed or re-sited per local policy, and nothing runs through a site that looks infected.",
      },
      {
        type: "clinical_pearl",
        body: "A swollen, cool, painful arm around a cannula is not 'a difficult patient' — it is fluid in the tissue. Stop the infusion, remove the cannula, elevate the arm and resite. Slowing the drip only floods the arm more slowly.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman on her first post-caesarean day is on a maintenance drip of Ringer's lactate at 125 mL per hour. On your hourly round she says her arm 'burns'; the forearm around the cannula is swollen, cool and pale, and the drip chamber has slowed. You can see fluid tracking under the skin.\n\nWhat is the problem, and what are your next steps?\n\nAnswer: This is infiltration — the cannula tip has slipped out of the vein, and the fluid is infusing into the tissue instead. Stop the infusion now, remove the cannula, elevate the arm on a pillow, and estimate and record how much fluid escaped into the tissue. Resite in a fresh vein — a new limb or at least a new site, away from joints — then restart the prescribed rate and recheck the site within the hour. Chart the event: site, estimated volume, arm condition, and what you told her. If the infusion had contained a vesicant or irritant drug — potassium, some antibiotics — the senior would be told immediately, because tissue injury from those is a serious event. The hourly round exists precisely so that this is caught within the hour, not at the end of the shift.",
      },
      {
        type: "memory_trick",
        body: "'**Big number, small door**' — resuscitation needs the smallest number on the pack. And on every hourly round: look at the drip, the vein and the arm.",
      },
      {
        type: "summary",
        body: "- Gauge: bigger number means smaller cannula — 14-16G for rapid volume and blood, 18-20G routine adult, 22-24G for children and frail veins.\n- Prefer the non-dominant forearm; avoid joints; never the fistula, mastectomy-lymphoedema, infected or thrombosed limb.\n- Insertion: asepsis, shallow angle bevel-up, flashback, secure transparent dressing labelled with date and time, flush to confirm.\n- Check hourly: rate, site and arm — plus breathlessness, crackles and oedema for overload.\n- Infiltration (pain, cool swelling, slowing flow) and phlebitis (red, tender vein) both mean remove and resite — never slow and watch.",
      },
    ],
    questions: [
      {
        topic: "IV Therapy",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "A patient's infusion site becomes painful, swollen, cool and pale, and the drip slows. The problem and correct response are:",
        options: [
          "Infiltration — stop the infusion, remove the cannula, elevate and resite",
          "Phlebitis — speed up the infusion to flush the vein",
          "Normal bruising — continue and observe",
          "Air embolism — lower the head and roll the patient",
        ],
        correctIndex: 0,
        explanation: "Cool, pale swelling with a slowing drip is fluid in the tissue, not in the vein. The line comes out, the arm goes up, and a new site goes in — no exceptions.",
      },
      {
        topic: "IV Therapy",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "In which arm should you avoid siting a routine cannula?",
        options: [
          "The non-dominant forearm with visible veins",
          "Any forearm with intact skin",
          "The arm with an AV fistula or lymphoedema after mastectomy",
          "The arm chosen by the patient",
        ],
        correctIndex: 2,
        explanation: "A fistula is that patient's lifeline for dialysis; a mastectomy-side arm risks infection and swelling. Both are no-go limbs for routine cannulation.",
      },
      {
        topic: "IV Therapy",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "Which statement about cannula gauge numbers is correct?",
        options: [
          "A bigger gauge number means a bigger cannula",
          "Gauge numbers do not affect how fast fluid can run",
          "All adult patients need 24G cannulae",
          "A bigger gauge number means a smaller cannula — 24G is far smaller than 16G",
        ],
        correctIndex: 3,
        explanation: "The scale runs backwards to intuition: 24G is a tiny door for children and fragile veins; 16G is the wide door for rapid resuscitation and blood.",
      },
    ],
    flashcards: [
      {
        topic: "IV Therapy",
        front: "The gauge-number rule, and which gauges for which jobs?",
        back: "Bigger number, smaller cannula. 14-16G for rapid volume, blood, theatre; 18-20G routine adult; 22-24G children and small or frail veins.",
      },
      {
        topic: "IV Therapy",
        front: "Three signs of infiltration, and the response?",
        back: "Pain, cool pale swelling at the site, and a slowing drip. Stop the infusion, remove the cannula, elevate the limb, resite and document.",
      },
      {
        topic: "IV Therapy",
        front: "How does phlebitis present and what do you do?",
        back: "Pain and redness tracking along the vein, sometimes a palpable cord. Remove the cannula and resite elsewhere — never restart in the same vein.",
      },
    ],
    sources: [
      {
        organization: "Infusion Nurses Society",
        title: "Infusion Therapy Standards of Practice",
        year: "2021",
        note: "Standard international reference — verify current edition.",
      },
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-skills-2",
    moduleTitle: "Monitoring and Elimination Skills",
    lessonTitle: "Fluid Balance Monitoring",
    description:
      "The chart nobody praises and everybody needs. Intake, output and the trends between them — including how to weigh the losses nobody can see.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Complete a fluid balance chart correctly: every intake and every measurable output, at the moment they happen.",
      "Recognise oliguria and dehydration using the minimum urine output rule.",
      "Interpret daily weight and use weighed pads to quantify hidden losses in maternity.",
    ],
    tags: ["fluid balance", "monitoring", "intake output", "oliguria", "dehydration"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Water tells the story of the kidneys, the heart and the circulation — and it tells it continuously, to whoever keeps the chart. A fluid balance chart is one of the least glamorous documents on the ward and one of the most powerful: a patient sinking into dehydration or drowning in overload can be visible on it hours before either becomes obvious at the bedside.\n\nMidwifery sharpens the stakes further. A mother's urine output after a haemorrhage, the fluid discipline of pre-eclampsia, a newborn's first wet nappies — all of it is fluid balance wearing different clothes.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Record everything in and everything out, at the time it happens — never from memory at the end of the shift. **In**: oral fluids measured with a cup, not estimated; IV fluids and drug volumes; flushes; feeds. **Out**: urine measured and charted at each void; vomitus; diarrhoea; drainage; stoma output; heavy wound exudate. The balance is total in minus total out across twenty-four hours. A healthy adult takes in around 2 to 2.5 litres and puts out around 1.5 litres of urine, with roughly 500 mL disappearing invisibly through breath and skin — the insensible loss, which grows with every degree of fever.\n\nThe numbers that matter: the minimum acceptable urine output is about **0.5 mL per kg per hour** — roughly 30 mL an hour for a 60 kg adult — and under 400 mL in a day is oliguria. Dark, strong-smelling urine, a dry mouth, thirst and a persistently negative balance say dehydration; breathlessness, crackles at the bases and pitting oedema say overload. Daily weight belongs to the story: 1 kg is roughly 1 litre, weighed same time, same scale, same clothing. And in maternity, hidden losses are measured by weight, not guesswork — **1 g of pad weight equals 1 mL of blood**, so pads are weighed, never eyeballed. Escalate a stubborn negative balance, an oliguric patient, or a chart trending the wrong way: the chart is an early-warning system, but only if someone reads it in time.",
      },
      {
        type: "clinical_pearl",
        body: "Chart at the moment, not from memory — 'about a cup' becomes a litre of error by nightfall. And when the chart has looked wrong for two hours, the answer is to escalate, not to wait for the morning round to agree with you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman is on her first day after surgery. Her chart shows an intake of 2,600 mL — IV plus measured sips — and a urine output of 480 mL over twenty-four hours, dark and strong-smelling, with a dry mouth to match. The night note reads 'drinking well — continue'.\n\nWhat is the chart actually saying, and what do you do?\n\nAnswer: The chart says her kidneys are being starved of circulation even while her intake looks generous — 480 mL in a day is oliguria, well under the roughly 30 mL an hour her body size needs, and dark, concentrated urine plus a dry mouth means a body conserving every drop, most often post-operative hypovolaemia (bleeding, fluid shifting into the tissues, hours of nil by mouth) — though retention and other causes are checked at assessment. 'Drinking well' was true, and it was the output that was raising the alarm. So escalate with the totals rather than waiting: report to the senior, check vital signs, palpate for a full bladder (post-operative retention is common and quiet), anticipate IV fluid reassessment, and switch to hourly urine measurement. The chart is an early-warning system — but only when someone reads it in time.",
      },
      {
        type: "memory_trick",
        body: "The three rhymes of the chart: '**Wee: 30 an hour, or tell someone now.**' '**1 kg is 1 litre.**' '**1 gram on the pad is 1 mL of blood.**'",
      },
      {
        type: "summary",
        body: "- Chart every intake and output at the moment it happens — measured, never estimated from memory.\n- Balance is 24-hour intake minus output; about 500 mL leaves invisibly through skin and breath, more with fever.\n- Urine below roughly 0.5 mL/kg/hour (about 30 mL/h for a 60 kg adult) or under 400 mL/day is oliguria — escalate.\n- Dark scant urine, dry mouth and a negative balance say dehydration; 1 kg of weight is roughly 1 litre of fluid.\n- In maternity, weigh the pads: 1 g is 1 mL — and urine output after haemorrhage is a vital sign, not a formality.",
      },
    ],
    questions: [
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Easy",
        courseSlug: "clinical-skills-2",
        stem: "The minimum acceptable urine output in an adult is approximately:",
        options: [
          "10 mL per hour for every patient",
          "1,000 mL per hour, always",
          "It depends only on the weather that day",
          "0.5 mL per kg per hour — about 30 mL per hour in a 60 kg adult",
        ],
        correctIndex: 3,
        explanation: "Below this, the kidneys are being starved of perfusion — oliguria is an early-warning sign that belongs to the senior, not to tomorrow.",
      },
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "A patient on IV fluids gains 2 kg overnight and becomes breathless, with crackles at the lung bases. The best interpretation is:",
        options: [
          "Muscle gain from bed rest",
          "The scale is faulty — re-weigh next week",
          "Roughly 2 litres of fluid retained — possible overload: slow or hold fluids and escalate",
          "Normal post-operative weight gain",
        ],
        correctIndex: 2,
        explanation: "1 kg is roughly 1 litre. A 2 kg overnight gain with breathlessness and crackles is the heart failing to keep pace with the infusion — a same-hour escalation, not a next-week weigh-in.",
      },
      {
        topic: "Fluid Balance",
        type: "MCQ",
        difficulty: "Moderate",
        courseSlug: "clinical-skills-2",
        stem: "The most accurate way to quantify blood loss on a maternity pad is to:",
        options: [
          "Ask the family how much it seemed",
          "Estimate from the size of the stain",
          "Simply count the number of pads used",
          "Weigh the pad — 1 g of added weight equals about 1 mL of blood",
        ],
        correctIndex: 3,
        explanation: "Visual estimation badly underestimates blood loss, and PPH decisions need numbers. Weighing the pad converts soaked cloth into measured volume.",
      },
    ],
    flashcards: [
      {
        topic: "Fluid Balance",
        front: "What counts as intake and output on a fluid balance chart?",
        back: "In: measured oral fluids, IV fluids, flushes, feeds. Out: urine per void, vomit, diarrhoea, drainage, stoma, exudate — all recorded at the time, never from memory.",
      },
      {
        topic: "Fluid Balance",
        front: "The two oliguria thresholds?",
        back: "Urine under 400 mL per 24 hours, or below roughly 0.5 mL/kg/hour (about 30 mL/h for a 60 kg adult) — both mean escalate.",
      },
      {
        topic: "Fluid Balance",
        front: "Why weigh pads in maternity?",
        back: "Eyes underestimate blood loss; scales do not. 1 g of pad weight is about 1 mL of blood — weighing turns PPH from a feeling into a number you can act on.",
      },
    ],
    sources: [
      {
        organization: "NICE",
        title: "Intravenous Fluid Therapy in Adults in Hospital (CG174)",
        year: "2013",
        note: "Clinical guideline — educational source, verify current version.",
      },
      {
        organization: "World Health Organization / ICRC",
        title: "Basic Emergency Care: Approach to the Acutely Ill and Injured",
        year: "2018",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing",
        note: "Standard nursing fundamentals text — verify current edition.",
      },
    ],
  },
];
