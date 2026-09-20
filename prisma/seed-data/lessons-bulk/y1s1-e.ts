// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Batch: Y1 S1, batch E (microbiology-1 Asepsis & Control + clinical-skills-1)
// Anchors: prisma/seed-data/anchors/y1s1-e.json
// Match key: courseSlug::moduleTitle::lessonTitle (copy character-for-character)
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1. Asepsis: Clean Versus Sterile ──────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Asepsis & Control",
    lessonTitle: "Asepsis: Clean Versus Sterile, Made Clear",
    description: "Two words you will hear every single day on the ward — clean and sterile. By the end of this lesson you will know exactly which one your task needs, and why the difference protects mothers and babies.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the difference between medical (clean) asepsis and surgical (sterile) asepsis.",
      "Explain why tasks that break skin or enter the body always need sterile technique.",
      "Apply the right level of asepsis to everyday midwifery tasks, from bed baths to cutting the cord.",
    ],
    tags: ["asepsis", "sterile technique", "clean technique", "infection control"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Asepsis simply means keeping germs away from people who are vulnerable — and in midwifery you meet vulnerable people all day. Newborns with fresh cord stumps, mothers with healing perineums, women in labour whose defences are stretched. Your defence comes in two strengths, and knowing which one a task needs is one of the most practical skills of your first year.\n\nMedical asepsis, or clean technique, reduces the number of germs until they cannot cause harm. Washing hands, wearing clean gloves for a bed bath, using clean linen and clean equipment — this is the level most of your day runs on. Surgical asepsis, or sterile technique, aims higher: removing organisms completely, including tough bacterial spores, using sterilized instruments, sterile gloves and a sterile field.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "How do you choose? Ask one question: will this task break skin, or enter a part of the body that should stay germ-free? If yes, sterile technique. Cutting the umbilical cord, repairing an episiotomy, inserting a urinary catheter, siting an IV line, assisting a birth — all sterile moments, because each one opens a door germs would love.\n\nIf the task touches intact skin only, clean technique is enough. Bathing a newborn, walking a mother to the toilet, taking a pulse — clean hands and clean gloves do the job.\n\nThen learn the golden rule of sterile work: **sterile touches only sterile**. The moment a sterile item touches anything unsterile — a bed rail, your sleeve, the wrapper's edge — it is contaminated. No wiping, no debating, no 'it was only for a second'. If in doubt, throw it out.",
      },
      {
        type: "clinical_pearl",
        body: "When you cannot decide if a task is clean or sterile, picture the cord stump, the suture needle and the catheter. If your equipment will meet tissue, blood or mucous membranes, it must be sterile — and if you are still unsure, treat it as sterile. Two extra minutes of preparation cost nothing; one infection costs everything.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are on a delivery ward in a district hospital. Madam Adjoa has just given birth to a healthy girl, and the midwife hands you the sterile scissors and clamps for the cord. Twenty minutes later the same midwife asks you to give Madam Adjoa a fresh bed bath and help her into a clean nightgown.\n\nWhich of the two tasks needs surgical asepsis, and which needs only medical asepsis — and what changes if, while bathing her, you notice her perineal wound dressing has slipped loose?\n\nAnswer: Cutting the cord needs surgical asepsis — the cord stump is an open door into the newborn's bloodstream, so only sterilized instruments and sterile gloves may touch it. The bed bath needs medical asepsis: clean hands, clean gloves, clean water, because you are touching intact skin. The loose dressing changes things — a healing wound is a portal of entry, so redressing becomes a sterile procedure done by someone trained for it, reported to the midwife, not simply tucked back.",
      },
      {
        type: "memory_trick",
        body: "Picture two kitchens. The clean kitchen serves your daily meals — plates washed with soap, hands washed before serving, good enough for everyday life. The sterile kitchen is an operating theatre — instruments wrapped, gloved hands, nothing alive anywhere. At every task ask: **which kitchen am I in?** Skin intact — clean kitchen. Skin, membranes or tissue crossed — sterile kitchen.",
      },
      {
        type: "summary",
        body: "- Asepsis keeps germs away from vulnerable people, and it comes in two strengths.\n- Medical (clean) asepsis reduces germs; surgical (sterile) asepsis removes them completely, including spores.\n- Anything that breaks skin or enters a normally sterile body part needs sterile technique — cord cutting, suturing, catheters, IVs, births.\n- Tasks on intact skin — bathing, walking, vital signs — need clean technique with clean hands and gloves.\n- Sterile touches only sterile; once contaminated, the item is discarded. If in doubt, throw it out.",
      },
    ],
    questions: [
      {
        topic: "Levels of Asepsis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these tasks requires surgical (sterile) asepsis?",
        options: [
          "Giving a bed bath to a newborn",
          "Taking a mother's blood pressure",
          "Cutting the umbilical cord immediately after birth",
          "Helping a mother walk to the bathroom",
        ],
        correctIndex: 2,
        explanation: "Cutting the cord creates an open portal into the newborn's bloodstream, so the instruments and gloves must be sterile. The other three tasks touch intact skin, where clean technique is enough.",
      },
      {
        topic: "Levels of Asepsis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the key difference between medical asepsis and surgical asepsis?",
        options: [
          "Medical asepsis reduces organisms to a safe level; surgical asepsis removes them all, including spores",
          "Medical asepsis is for nurses; surgical asepsis is for doctors",
          "Medical asepsis uses gloves; surgical asepsis uses soap only",
          "Medical asepsis is for children; surgical asepsis is for adults",
        ],
        correctIndex: 0,
        explanation: "Medical asepsis lowers the number of organisms so they cannot cause harm, while surgical asepsis aims for their complete removal, spores included, before anything enters normally sterile tissue.",
      },
      {
        topic: "Levels of Asepsis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a sterile procedure, your sterile glove accidentally touches the bed rail. What should you do?",
        options: [
          "Wipe the glove with an alcohol swab and continue",
          "Continue if the bed rail looks clean",
          "Turn the glove inside out to trap the germs",
          "Change into a new sterile glove before continuing",
        ],
        correctIndex: 3,
        explanation: "A bed rail is never sterile, so the glove is contaminated the instant it touches. There is no wiping a glove back to sterile — you replace it, because sterile touches only sterile.",
      },
    ],
    flashcards: [
      {
        topic: "Levels of Asepsis",
        front: "What is the difference between medical and surgical asepsis?",
        back: "Medical (clean) asepsis reduces the number of organisms to a safe level. Surgical (sterile) asepsis removes all organisms, including spores, so that nothing enters sterile tissue.",
      },
      {
        topic: "Levels of Asepsis",
        front: "Name three midwifery tasks that need sterile technique.",
        back: "Any task that breaks skin or enters a sterile body part: cutting the cord, suturing an episiotomy, catheterisation, IV insertion, assisting a delivery.",
      },
      {
        topic: "Levels of Asepsis",
        front: "A sterile glove touches a bed rail during a procedure. What now?",
        back: "The glove is contaminated — change it. Sterile touches only sterile, and no wipe or excuse restores sterility.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
      {
        organization: "World Health Organization",
        title: "Guidelines on core components of infection prevention and control programmes",
        year: "2016",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 2. Disinfection ────────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Asepsis & Control",
    lessonTitle: "Disinfection: Choosing the Right Weapon",
    description: "Not every item needs the same treatment. Learn the three levels of disinfection, the simple way of sorting equipment by risk, and how to match weapon to task.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Classify equipment as critical, semi-critical or non-critical using the Spaulding approach.",
      "Match each class of equipment to the level of disinfection it needs.",
      "Explain why instruments must be cleaned before they are disinfected.",
    ],
    tags: ["disinfection", "equipment", "spaulding classification", "infection control"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Not everything in a maternity unit can go through the autoclave — and not everything needs to. After every client, equipment must be made safe for the next one, and the level of safe depends on where that equipment has been on the body. That is the whole art of disinfection: matching the strength of your weapon to the risk of the item.\n\nThe classic tool for this is the Spaulding classification, and it is wonderfully practical. It asks one question: where does this item touch the patient? Only intact skin? Mucous membranes? Or does it break skin and enter tissue? Each answer gives a category — non-critical, semi-critical or critical — and each category points straight to the process the item needs before it meets the next patient.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Non-critical items touch intact skin only — thermometers, blood pressure cuffs, stethoscopes. Low-level disinfection is enough: wipe with 70% alcohol or your facility's recommended disinfectant after each patient.\n\nSemi-critical items touch mucous membranes without entering tissue — reusable vaginal speculums are the classic example. They need high-level disinfection at minimum: a rolling boil for 10-20 minutes or a chemical high-level disinfectant, following your facility's protocol. Critical items enter sterile tissue or the bloodstream — delivery scissors, needles, forceps. Only sterilization is acceptable.\n\nOne rule serves them all: **clean before you disinfect**. Blood and body fluids left on an item can shield germs and weaken chemicals, so every item is washed with soap and water first. Skip the washing step and the disinfection step becomes a gamble.",
      },
      {
        type: "clinical_pearl",
        body: "Boiling is honest, cheap high-level disinfection — but never call it sterilization. A rolling boil kills most organisms, yet bacterial spores can survive it. In a CHPS compound without an autoclave, boiling plus careful storage is the accepted standard for semi-critical items; it is never enough for critical ones.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are doing antenatal clinic at a CHPS compound. By mid-morning, eight reusable speculums and a tray of thermometers are waiting for processing, and a delivery set is being packed for the autoclave. The community health officer asks you to sort the items and choose the right processing for each.\n\nWhich items are semi-critical and which are non-critical — and what must happen to each before it meets the next client?\n\nAnswer: The speculums are semi-critical because they touch mucous membranes, so each one must be washed with soap and water, then boiled for 10-20 minutes or soaked in a high-level disinfectant as your facility's protocol directs. The thermometers are non-critical — intact skin only — so cleaning and a wipe with 70% alcohol is enough. The delivery set is critical because it enters tissue, so it goes to the autoclave. Washing comes first for everything: organic matter protects germs and weakens chemicals.",
      },
      {
        type: "memory_trick",
        body: "Sort every item by where it goes: **skin, membranes, inside**. Skin = low level. Membranes = high level. Inside = sterilize. Picture a staircase: thermometers on the bottom step, speculums in the middle, delivery scissors at the very top — and the washing bucket stands before every step, because cleaning always comes first.",
      },
      {
        type: "summary",
        body: "- The Spaulding approach sorts equipment by where it touches the patient: skin, mucous membranes, or sterile tissue.\n- Non-critical items (thermometers, cuffs, stethoscopes) need low-level disinfection after each patient.\n- Semi-critical items (speculums) need high-level disinfection at minimum — boiling 10-20 minutes or chemical HLD.\n- Critical items (delivery scissors, needles, forceps) need sterilization, no compromise.\n- Always wash with soap and water first — organic matter shields germs and weakens disinfectants.\n- Boiling is high-level disinfection, never sterilization: spores can survive it.",
      },
    ],
    questions: [
      {
        topic: "Disinfection Levels",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A reusable vaginal speculum touches mucous membranes but does not enter tissue. What is the minimum processing it needs before reuse?",
        options: [
          "Low-level disinfection with an alcohol wipe",
          "High-level disinfection, such as a rolling boil for 10-20 minutes",
          "Washing under running water only",
          "Nothing, if it still looks clean",
        ],
        correctIndex: 1,
        explanation: "Items that touch mucous membranes are semi-critical and need high-level disinfection at minimum — boiling or a chemical HLD process — because membranes have thinner defences than intact skin.",
      },
      {
        topic: "Disinfection Levels",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A colleague says boiling the delivery scissors for 20 minutes makes them safe for the next birth. Why is this dangerous?",
        options: [
          "Boiling makes the scissors blunt",
          "Boiling kills most organisms but not bacterial spores — critical items must be sterilized",
          "Boiling is only allowed for glass items",
          "Twenty minutes is too short for water to heat",
        ],
        correctIndex: 1,
        explanation: "Boiling is high-level disinfection, not sterilization: bacterial spores can survive 100°C. Scissors that cut tissue and cross into sterile areas are critical items, and critical items need the autoclave.",
      },
      {
        topic: "Disinfection Levels",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must instruments be washed with soap and water before disinfection?",
        options: [
          "To keep the instruments shiny",
          "Because disinfectant is expensive",
          "Organic matter such as blood can shield germs and weaken the disinfectant",
          "To warm the instruments before soaking",
        ],
        correctIndex: 2,
        explanation: "Blood and tissue left on an item physically protect micro-organisms from the chemical and can inactivate it. Cleaning first lets the disinfectant actually reach the germs.",
      },
    ],
    flashcards: [
      {
        topic: "Disinfection Levels",
        front: "Name the three Spaulding categories with one example each.",
        back: "Non-critical — touches intact skin (thermometer). Semi-critical — touches mucous membranes (vaginal speculum). Critical — enters sterile tissue or bloodstream (delivery scissors).",
      },
      {
        topic: "Disinfection Levels",
        front: "What does boiling instruments at 100°C for 10-20 minutes achieve?",
        back: "High-level disinfection — most organisms die, but spores can survive. Acceptable minimum for semi-critical items, never enough for critical ones.",
      },
      {
        topic: "Disinfection Levels",
        front: "Why clean instruments before disinfecting them?",
        back: "Blood and tissue remaining on an item shield germs from the chemical and can inactivate it — cleaning first lets disinfection actually reach the microbes.",
      },
    ],
    sources: [
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Guideline for Disinfection and Sterilization in Healthcare Facilities",
        year: "2009",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 3. Sterilization ───────────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Asepsis & Control",
    lessonTitle: "Sterilization: When Clean Isn't Enough",
    description: "The autoclave is the heart of infection control. Discover how steam under pressure kills everything — and how you prove that it did.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Explain what sterilization destroys and which items require it.",
      "Describe how an autoclave works and the conditions it must reach.",
      "Distinguish between chemical and biological indicators of sterility.",
    ],
    tags: ["sterilization", "autoclave", "indicators", "infection control", "equipment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Disinfection leaves some survivors; sterilization leaves none. To sterilize means to destroy every form of microbial life — bacteria, viruses, fungi and the toughest customers of all, bacterial spores. In maternity care this is not a luxury. The scissors that cut a cord, the needle that repairs a perineum and the forceps that help a baby into the world all meet tissue or blood, where one surviving spore can seed a life-threatening infection.\n\nThe main workhorse is the autoclave — a metal chamber that uses steam under pressure. Steam at about 121°C, held for roughly 15-20 minutes, does what no boiling pot can do: it kills spores too. A sealed domestic pressure cooker works on the same principle for small loads, which is why some CHPS compounds rely on one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Autoclaving only counts when the conditions are right: temperature, pressure, time, and steam that actually reaches every surface. Wrapping instruments in porous material such as cloth or paper lets steam in, and drying the load properly afterwards stops moisture from re-contaminating it.\n\nThen comes proof. Chemical indicators — the tapes and strips that change colour — tell you the pack met steam and heat. They are useful, but they are a ticket, not a guarantee. The gold standard is the biological indicator: a strip of live bacterial spores processed with the load and incubated afterwards. If the spores die, the load was truly sterile; most facilities run these weekly and with every implant-type load.\n\nStorage completes the job. Sterile packs stay sterile until an event spoils them — a torn wrapper, a wet pack, a fall to the floor. Any doubt means re-sterilization.",
      },
      {
        type: "clinical_pearl",
        body: "Tape turning brown tells you steam happened, not that sterility was achieved. Before you trust a pack, check the indicator, the wrapper for tears and dampness, and the cycle record. A wet pack is a contaminated pack — moisture wicks germs straight through the wrapping.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is early morning at the district hospital. You are collecting a sterile delivery pack from the autoclave room when you notice that one pack's outer wrapping feels damp — a pipe has been dripping overnight. The autoclave tape has turned the right colour, and the labour ward is asking for the pack now for an episiotomy repair.\n\nCan you take this pack into the procedure — and why or why not?\n\nAnswer: No. A damp wrapper means the pack is considered contaminated whatever the tape says: moisture can travel through the wrapping and carry micro-organisms with it, so sterility inside is no longer guaranteed. Set the pack aside for repacking and re-sterilization, and take a dry, intact pack with a passed indicator instead. The tape only shows exposure to steam — sterility also depends on the full cycle, the drying and an intact wrapper. Fix the dripping pipe too, or tomorrow's packs will fail the same way.",
      },
      {
        type: "memory_trick",
        body: "Remember the autoclave's four friends: **Time, Temperature, Pressure, Dry**. Steam at about 121°C, held around 15-20 minutes, under pressure, then dried before storage. Miss one friend and the party fails — and a wet pack betrays them all, no matter how brown the tape turned.",
      },
      {
        type: "summary",
        body: "- Sterilization destroys all microbial life, including spores — the non-negotiable standard for critical items.\n- The autoclave uses steam under pressure (about 121°C for 15-20 minutes); pressure cookers work on the same principle for small loads.\n- Chemical indicators prove steam exposure; biological spore indicators are the gold standard of proof.\n- A wet, torn or dropped pack is contaminated — storage conditions protect sterility as much as the cycle does.\n- If any doubt exists about a pack, re-sterilize it. Sterility is never 'probably fine'.",
      },
    ],
    questions: [
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does sterilization achieve that disinfection does not?",
        options: [
          "It makes instruments smell fresh",
          "It destroys all microbial life, including bacterial spores",
          "It only works on metal instruments",
          "It removes visible dirt faster",
        ],
        correctIndex: 1,
        explanation: "Sterilization is total destruction of all microbial life, spores included — the level required before an item enters normally sterile tissue. Disinfection always leaves some survivors.",
      },
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The autoclave tape on a pack has changed to the correct colour. What does this actually confirm?",
        options: [
          "The pack is guaranteed sterile",
          "The biological indicator has passed",
          "The pack was exposed to steam and heat — sterility also depends on the full cycle, drying and intact wrapping",
          "The instruments inside are dry",
        ],
        correctIndex: 2,
        explanation: "Tape is a chemical indicator of steam and heat exposure only. True assurance of sterility comes from the whole cycle being correct, a dry and intact pack, and ultimately the biological spore test.",
      },
      {
        topic: "Sterilization",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these items must always be sterilized, never merely disinfected?",
        options: [
          "A blood pressure cuff",
          "An axillary thermometer",
          "A reusable vaginal speculum",
          "Scissors used to cut the umbilical cord",
        ],
        correctIndex: 3,
        explanation: "Cord scissors enter what is effectively a sterile site — the newborn's bloodstream via the cord. They are a critical item, and critical items must be sterilized before every use.",
      },
    ],
    flashcards: [
      {
        topic: "Sterilization",
        front: "What conditions does a standard autoclave cycle use?",
        back: "Steam under pressure at about 121°C, held for roughly 15-20 minutes, followed by proper drying of the load before storage.",
      },
      {
        topic: "Sterilization",
        front: "Autoclave tape versus biological indicator — what is the difference?",
        back: "Tape is a chemical indicator showing exposure to steam and heat. A biological indicator uses live spores incubated after the cycle — the gold standard that proves the load is truly sterile.",
      },
      {
        topic: "Sterilization",
        front: "A sterile pack in storage feels damp. What do you do?",
        back: "Treat it as contaminated. Moisture can carry micro-organisms through the wrapping, so the pack must be repacked and re-sterilized before use.",
      },
    ],
    sources: [
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Guideline for Disinfection and Sterilization in Healthcare Facilities",
        year: "2009",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Decontamination and Reprocessing of Medical Devices",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
    ],
  },

  // ── 4. Standard Precautions ────────────────────────────────
  {
    courseSlug: "microbiology-1",
    moduleTitle: "Asepsis & Control",
    lessonTitle: "Standard Precautions: Your Everyday Armour",
    description: "You cannot always know who carries what — so you protect yourself and every patient the same way. Learn the armour you wear for every single client.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Explain the reasoning behind standard precautions.",
      "List the main parts of standard precautions in daily midwifery care.",
      "Apply standard precautions correctly after a body fluid exposure.",
    ],
    tags: ["standard precautions", "ppe", "infection control", "body fluids"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Imagine having to guess which patients carry dangerous infections before caring for them. You would fail — hepatitis B, HIV and other infections often walk silently, with no sign on the face and no result in the file. Ghana's maternity units see thousands of births, and blood and amniotic fluid are part of daily life there.\n\nStandard precautions answer this problem beautifully: treat **every** patient's blood and body fluids as potentially infectious, every time, no matter who they are or how well they look. It is not fear, and it is not distrust. It is armour that works precisely because it never has to guess.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The armour has several pieces, and you already know most of them. Hand hygiene at WHO's five moments. Gloves whenever you touch blood, body fluids, mucous membranes or broken skin. Gown or apron and eye protection whenever splashes are likely — and deliveries splash. Safe handling of sharps: the puncture-proof box within reach, and never recapping a used needle.\n\nThe armour continues around the patient: careful handling of soiled linen, safe waste disposal, cleaning of shared equipment between patients, and respiratory hygiene for coughing visitors.\n\nTwo ideas unlock it all. Amniotic fluid counts as body fluid — a splash at delivery is an exposure. And the armour protects in both directions: it guards you today, and it guards every future patient whose care passes through your hands.",
      },
      {
        type: "clinical_pearl",
        body: "Report every exposure the same day it happens. Wash the area at once, then tell your supervisor — a splash to the eyes or broken skin can carry HIV and hepatitis risk, and post-exposure care works best when started within hours. Reporting is never a confession of failure; it is part of professional care.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are assisting at a delivery in the evening. As the baby is born, a gush of amniotic fluid mixed with blood splashes across your face — your mask caught most of it, but one drop reached your right eye. The midwife is busy with the newborn and the room is full of joy and noise.\n\nWhat should happen in the next few minutes — for your eye, and for the event itself?\n\nAnswer: Rinse your eye at once with clean running water or saline, thoroughly and for several minutes. Then report the exposure to the midwife in charge and follow your facility's protocol for documentation and assessment, which may include testing and post-exposure prophylaxis for HIV — most effective when started within hours. The mother's known status does not change your response: standard precautions and exposure follow-up run the same for everyone, because that is exactly what they were designed for.",
      },
      {
        type: "memory_trick",
        body: "Think **Treat All The Same**. Standard precautions are armour worn for ALL — no guessing, no picking, no asking who looks risky. Clean hands, safe sharps and careful linen handling for every patient, every single time, as if each one could be the one who tests you.",
      },
      {
        type: "summary",
        body: "- Standard precautions treat all blood and body fluids — including amniotic fluid — as potentially infectious.\n- They apply to every patient, every time, because infection status is often silent.\n- The core pieces: hand hygiene, gloves, gowns and eye protection for splash tasks, safe sharps handling, safe waste and linen, clean equipment between patients.\n- The armour protects in both directions — you today, and every patient who follows you.\n- Rinse and report every exposure immediately; post-exposure care works best within hours.",
      },
    ],
    questions: [
      {
        topic: "Standard Precautions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Standard precautions apply to which patients?",
        options: [
          "Only patients with confirmed infections",
          "Only patients who look unwell",
          "Every patient, every time",
          "Only patients booked for surgery",
        ],
        correctIndex: 2,
        explanation: "Standard precautions assume any patient could be carrying an infection you cannot see or test for on the spot — so the same precautions apply to everyone, every time.",
      },
      {
        topic: "Standard Precautions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Under standard precautions, which of these is handled as potentially infectious?",
        options: [
          "Only visible blood",
          "Only amniotic fluid",
          "Blood, amniotic fluid, vaginal secretions and other body fluids and secretions",
          "Sweat and intact-skin flakes only",
        ],
        correctIndex: 2,
        explanation: "All blood and body fluids, secretions and excretions are treated as potentially infectious — amniotic fluid very much included, which is why delivery work demands full splash protection.",
      },
      {
        topic: "Standard Precautions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a delivery, fluid splashes onto your forearm where you have a small uncovered cut. What is your first action?",
        options: [
          "Finish the delivery and wash later",
          "Wash the area immediately with soap and running water, then report the exposure",
          "Cover it with a plaster and say nothing",
          "Wipe it off with a towel and continue",
        ],
        correctIndex: 1,
        explanation: "Broken skin plus body fluid is an exposure: wash at once with soap and running water, then report so testing and post-exposure prophylaxis can be considered quickly. Delays weaken the protection.",
      },
    ],
    flashcards: [
      {
        topic: "Standard Precautions",
        front: "What is the core idea of standard precautions?",
        back: "Treat every patient's blood and body fluids as potentially infectious, because you cannot know who carries what — the same armour for everyone, every time.",
      },
      {
        topic: "Standard Precautions",
        front: "Does amniotic fluid count as body fluid under standard precautions?",
        back: "Yes. A splash of amniotic fluid or blood to the eyes, mouth or broken skin is an exposure — rinse immediately and report it the same day.",
      },
      {
        topic: "Standard Precautions",
        front: "Name the main parts of standard precautions.",
        back: "Hand hygiene, gloves and PPE when splashes are likely, safe sharps handling, safe waste and linen handling, and cleaning equipment between patients.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standard Precautions in Health Care",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Guideline for Isolation Precautions",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 5. The Clinical Environment ────────────────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Entering the Clinical World",
    lessonTitle: "The Clinical Environment: Finding Your Feet",
    description: "Your first placement can feel like a maze of corridors and new faces. Take a guided walk through the wards, the people and the rhythms of clinical life.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main areas of a maternity unit and the levels of Ghana's health system.",
      "Identify the people you will meet on placement and what their roles are.",
      "Apply a first-day routine that keeps you safe, useful and welcome on any ward.",
    ],
    tags: ["clinical placement", "orientation", "health system", "teamwork"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your first day in a clinical facility can feel overwhelming: corridors, doors, trolleys, and people in uniform who all seem to know exactly what they are doing. This lesson is your map. Maternity care happens in different places — the antenatal clinic where women come for check-ups, the labour ward where babies arrive, the postnatal ward where mothers recover, the theatre for cesarean births, and the newborn unit or SCBU where small babies get extra care.\n\nYou may be placed at a CHPS compound serving its community, a district hospital, or a bigger regional or teaching hospital. Each level refers upward what it cannot manage, but the rhythm is similar everywhere: handovers, ward rounds, clinics — and births that follow nobody's timetable.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The people matter as much as the places. The ward in-charge — often called the sister or senior midwife — runs the unit. Staff midwives care for the mothers, obstetricians and medical officers handle complications, and nurses, orderlies and cleaners keep the whole machine turning. Treat every one of them as a teacher and an ally.\n\nIn your first days, be an excellent guest. Introduce yourself to the in-charge and confirm she knows you are starting. Ask for orientation to the emergency trolley, the oxygen, the wash points and the exits. Learn the handover times, and find out who your preceptor is. Ask before you act, watch everything, and write things down — a small notebook is a student's best friend.\n\nQuestions asked in week one are expected. The same questions in month three are expensive.",
      },
      {
        type: "clinical_pearl",
        body: "Learn where the emergency trolley, oxygen and suction stand on day one — not the day you need them. A ten-minute walk around the ward with a senior, asking 'where is...?' about equipment, sharps boxes and delivery packs, buys you calm in every emergency that follows.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is your first Monday at a district hospital labour ward. The night shift is leaving, the corridor is busy, and nobody has told you what to do. You find a quiet corner and wonder whether to just start taking vital signs on the women in the observation room.\n\nWhat should your first half-hour actually look like on a ward that is new to you?\n\nAnswer: Find the ward in-charge, introduce yourself, and confirm she knows you are starting today. Ask for orientation or a brief walk-round — emergency trolley, delivery packs, wash points, sharps containers — and find out who your preceptor is. Attend the handover so you hear which women are in labour and what the team is watching for. Only then begin any care, under supervision. Starting tasks before you know the ward or the patients is well-meant but unsafe; orientation always comes first.",
      },
      {
        type: "memory_trick",
        body: "Your first-day checklist is **People, Places, Papers**. People — the in-charge, your preceptor, the team. Places — emergency trolley, wash points, sharps containers, exits. Papers — handover times, where the charts live, your log book. Learn these three and any new ward stops feeling like a maze.",
      },
      {
        type: "summary",
        body: "- Maternity areas include the antenatal clinic, labour ward, postnatal ward, theatre and newborn unit — each with its own rhythm.\n- Ghana's system runs from CHPS compounds through district and regional hospitals to teaching hospitals, referring complications upward.\n- The ward in-charge runs the unit, and everyone from cleaner to obstetrician is part of the team you can learn from.\n- First days: introduce yourself, get oriented, attend handover, ask before you act, keep a notebook.\n- Know the emergency equipment locations on day one, before you need them.\n- Early questions are cheap; late questions are expensive.",
      },
    ],
    questions: [
      {
        topic: "Clinical Placement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "It is your first day on a new ward. What should you do first?",
        options: [
          "Begin taking observations on the nearest patients",
          "Introduce yourself to the ward in-charge and ask for orientation",
          "Wait in the corridor until someone gives you work",
          "Go home until your preceptor calls you",
        ],
        correctIndex: 1,
        explanation: "Orientation comes first: the in-charge needs to know you are there, and you need to know the ward's layout, routines and safety points before touching any patient.",
      },
      {
        topic: "Clinical Placement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How does a CHPS compound fit into Ghana's health system?",
        options: [
          "It is a training hospital for specialists",
          "It provides community-level primary care — health promotion, antenatal clinics and deliveries — and refers complications upward",
          "It only performs laboratory tests",
          "It replaces the district hospital in its zone",
        ],
        correctIndex: 1,
        explanation: "CHPS compounds bring primary care close to communities, including antenatal services and uncomplicated deliveries, and refer what they cannot manage to district hospitals. Knowing the levels tells you who can handle what.",
      },
      {
        topic: "Clinical Placement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why is attending handover valuable for a student midwife?",
        options: [
          "It is a chance to rest before work starts",
          "It passes essential patient information from the outgoing to the incoming team — and tells you what the team is watching for",
          "It counts as extra study time",
          "It is only required for qualified staff",
        ],
        correctIndex: 1,
        explanation: "Care continues safely only when information travels between shifts. For you, handover is the live briefing on every woman on the ward — which patients are stable, and which are being watched.",
      },
    ],
    flashcards: [
      {
        topic: "Clinical Placement",
        front: "Name the main areas of a maternity unit.",
        back: "Antenatal clinic, labour ward, postnatal ward, theatre, and the newborn nursery or SCBU.",
      },
      {
        topic: "Clinical Placement",
        front: "Who is your first point of reporting on a new ward?",
        back: "The ward in-charge (sister or senior midwife), together with your assigned preceptor or clinical supervisor.",
      },
      {
        topic: "Clinical Placement",
        front: "What does a CHPS compound provide?",
        back: "Community-level primary care — health promotion, antenatal clinics, deliveries and child welfare — referring complications upward to district hospitals.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS) Policy",
        note: "Educational reference — verify the current national policy document.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Standards for Midwifery Education and Practice",
        note: "Educational reference — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 6. Professional Appearance and Behaviour ───────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Entering the Clinical World",
    lessonTitle: "Professional Appearance and Behaviour on Placement",
    description: "Before you say a word, your uniform, your timing and your phone have already spoken. Learn how your presence builds — or breaks — patient trust.",
    difficulty: "Easy",
    durationMin: 11,
    objectives: [
      "Describe the professional appearance expected of a student midwife on placement.",
      "Explain why punctuality and phone discipline matter for trust and safety.",
      "Apply confidentiality rules to conversations and social media during placement.",
    ],
    tags: ["professionalism", "conduct", "confidentiality", "placement"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Patients decide whether to trust you before you open your mouth. A clean uniform, neat hair, short nails and closed shoes say 'I will care for you carefully.' A crumpled dress, chipped polish, jangling bracelets or a phone that rings during a breastfeeding session say something else entirely. In Ghanaian maternity care, trust is everything: a woman who trusts you will tell you about her bleeding, her fears, her previous loss. Your appearance is the first page of that relationship.\n\nBehaviour is the rest of the book. Arriving before handover, being where you said you would be, keeping your phone silenced and out of sight, greeting staff and patients warmly — these habits protect patients, because a ward runs on reliability.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The rules are practical, not fussy. Hair tied back so it never falls into a wound or a newborn's face. Nails short and clean because germs live beneath them and long nails tear gloves and scratch skin. No dangling jewellery, no rings with stones, no dangling earrings. Closed, low-heeled shoes, because nights are long and floors are wet. Perfume light or none — newborns and sick people have sensitive noses.\n\nThen behaviour. Confidentiality is absolute: nothing about a patient leaves the ward — not her story, not her file, not her photo, not on WhatsApp, not ever. Introduce yourself to every patient before you touch her. And punctuality means arriving before handover begins, because the report only helps you if you hear all of it.",
      },
      {
        type: "clinical_pearl",
        body: "Before you approach a patient, ask yourself one question: would I be happy if my own mother were in this bed and a student walked in looking, sounding and behaving exactly like me? If the answer is yes, you are ready to approach her.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a quiet afternoon, a woman you know from your own neighbourhood is admitted to the postnatal ward after a difficult birth. That evening a relative calls you: 'I hear your hospital delivered our Ama — how is she? What actually happened?' Your phone is in your hand, and you would love to reassure her.\n\nWhat can you share — and what is the kindest thing to say?\n\nAnswer: Nothing about Ama's care — not her condition, not the baby, not even confirmation that she is on your ward. Patient information belongs to the patient and the care team, and sharing it with anyone else, however loving, breaches confidentiality. Say warmly that you cannot discuss patients from your workplace, but she is welcome to call Ama directly or visit through the ward. It may feel harsh, but it protects Ama — and it builds the trust every patient must be able to place in student midwives.",
      },
      {
        type: "memory_trick",
        body: "Check the **4 Cs before you walk on: Clean, Confined, Covered, Controlled**. Uniform clean, hair confined, feet covered, phone controlled. If any one of the four fails, fix it at the door — it takes thirty seconds and sets the tone for the whole shift.",
      },
      {
        type: "summary",
        body: "- Patients judge your trustworthiness from appearance before you speak — uniform, hair, nails, shoes.\n- Short clean nails, tied-back hair and no dangling jewellery are infection control, not just etiquette.\n- Punctuality means arriving before handover so you hear the whole report.\n- Phones are silenced and out of sight on the ward; no patient is ever photographed.\n- Confidentiality is absolute: no patient stories, files or photos beyond the care team — including WhatsApp and neighbourhood talk.",
      },
    ],
    questions: [
      {
        topic: "Professional Conduct",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why must nails be kept short and unpolished on placement?",
        options: [
          "To make gloves look neat",
          "Germs collect under nails, and long nails can tear gloves and scratch patients",
          "Because nail polish is expensive",
          "It is only a tradition with no health reason",
        ],
        correctIndex: 1,
        explanation: "Micro-organisms survive under nail edges even after washing, and long or artificial nails are a documented cause of glove tears and scratches — a direct infection risk to mothers and newborns.",
      },
      {
        topic: "Professional Conduct",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A classmate sends you a photo of a newborn taken on the ward and asks you to share it in your study group's chat. What is the correct response?",
        options: [
          "Share it — the baby's face is small in the photo",
          "Share it only with midwifery students, not the public",
          "Refuse, and remind them the photo breaches patient confidentiality and must not circulate",
          "Save it quietly but do not forward it",
        ],
        correctIndex: 2,
        explanation: "Any patient image taken without proper consent breaches confidentiality, and forwarding it spreads the breach. The kind — and professional — move is to refuse and help your classmate understand why the photo should never have been taken.",
      },
      {
        topic: "Professional Conduct",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does punctuality on placement really mean?",
        options: [
          "Arriving exactly when the shift starts",
          "Arriving before handover begins, so you hear the full report",
          "Being seen by the sister before mid-morning",
          "Sending a message if you will be late",
        ],
        correctIndex: 1,
        explanation: "The shift's plan is set during handover. Arriving before it starts means you hear which patients need watching — and it signals reliability, the quality teams value most in students.",
      },
    ],
    flashcards: [
      {
        topic: "Professional Conduct",
        front: "Give three appearance rules and the safety reason for each.",
        back: "Hair tied back (keeps it off wounds and newborns), nails short and clean (germs hide beneath and tear gloves), closed shoes (long shifts, wet floors).",
      },
      {
        topic: "Professional Conduct",
        front: "A friend asks you for news about a patient on your ward. What do you say?",
        back: "That you cannot discuss any patient — her condition, file or even presence on the ward — and she is welcome to speak to the patient herself.",
      },
      {
        topic: "Professional Conduct",
        front: "Where does your phone live during a shift?",
        back: "Silenced and out of sight — never used at the bedside, and never used to photograph a patient.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Conduct and Professional Standards",
        note: "Educational reference — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — appearance rules such as nail and jewellery limits are grounded in IPC.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 7. Hand Hygiene ────────────────────────────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Entering the Clinical World",
    lessonTitle: "Hand Hygiene: The Skill That Saves the Most Lives",
    description: "One humble habit outperforms every machine in the hospital. Master the five moments and the technique that makes hands truly safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Recite WHO's five moments for hand hygiene.",
      "Describe the correct technique for hand washing and alcohol rub.",
      "Choose correctly between soap-and-water washing and alcohol rub.",
    ],
    tags: ["hand hygiene", "infection prevention", "who five moments", "asepsis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the 1840s a doctor in Vienna called Semmelweis noticed something disturbing: women on his ward were dying of childbed fever, and the students who came straight from the dissection room to the delivery beds were carrying the cause on their hands. When hand washing was introduced, the deaths fell dramatically. He was mocked for the idea, but history proved him right — and his discovery still stands today. Clean hands remain the single most powerful infection control measure ever known.\n\nYou will clean your hands dozens of times a shift. That is not a burden; that is the skill that saves the most lives in the building — sometimes including your own.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "WHO's five moments tell you **when**: before touching a patient; before a clean or aseptic procedure; after exposure to body fluids; after touching the patient; and after touching the patient's surroundings — bed, table, notes, curtain.\n\nThe technique tells you how and for how long. With soap and water, work the lather through six steps — palms, backs of hands, between the fingers, backs of the fingertips, thumbs, fingertips in the palm — then the wrists, for about 40-60 seconds in total. With alcohol rub, the same steps for 20-30 seconds until the hands are dry.\n\nWhich one? Alcohol rub is excellent for most moments. But when hands are visibly soiled with blood or fluid, soap and running water is the only correct choice — rub cannot clean through dirt.",
      },
      {
        type: "clinical_pearl",
        body: "Gloves never replace hand hygiene. Hands go clean into gloves and are cleaned again the moment the gloves come off, because hands are contaminated during removal without you feeling it. If the same pair of gloves is still on at the next bedside, they have quietly become a germ taxi.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are supporting a woman in early labour. Ten minutes ago you helped her change position and tucked her pillows; since then you have written on her partograph at the bedside. Now she asks you to wipe her forehead with a cool cloth, and you will chart her temperature next.\n\nWhich WHO moments have already passed in those few minutes, and which one is coming now?\n\nAnswer: After helping her change position you touched the patient — moment four. Writing on the partograph at her bedside meant touching her surroundings — moment five. Each of those moments demanded clean hands afterwards. Wiping her face now is another patient contact, so moment one applies right now: clean your hands before touching her again. One small task carried you through three of the five moments — which is exactly why the habit must become automatic.",
      },
      {
        type: "memory_trick",
        body: "The five moments fit in one line: **two befores, three afters, fluids in the middle**. Before touching the patient and before the clean procedure; after body fluid exposure, after touching the patient, after touching her surroundings. Say it to yourself while you rub — it takes about one hand hygiene episode to memorise it.",
      },
      {
        type: "summary",
        body: "- Clean hands remain the single most effective infection control measure in healthcare.\n- The five moments: before touching the patient, before a clean/aseptic procedure, after body fluid exposure, after touching the patient, after touching the surroundings.\n- Full soap wash: six steps covering palms, backs, between fingers, fingertips and thumbs — 40-60 seconds.\n- Alcohol rub: same steps, 20-30 seconds until hands are dry.\n- Visibly soiled hands need soap and water — rub cannot work through dirt.\n- Gloves are never a substitute: hands are cleaned before gloves go on and after they come off.",
      },
    ],
    questions: [
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are about to perform a vaginal examination. Which WHO moment applies immediately beforehand?",
        options: [
          "After touching the patient's surroundings",
          "Before a clean or aseptic procedure",
          "After body fluid exposure risk",
          "None — gloves make hand hygiene unnecessary",
        ],
        correctIndex: 1,
        explanation: "A vaginal examination is a clean procedure touching mucous membranes, so it is one of WHO's 'before' moments: hand hygiene (and gloves) immediately before it.",
      },
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your hands are visibly soiled with blood after assisting with the cord. What is the correct hand hygiene action?",
        options: [
          "Use alcohol hand rub for 20 seconds",
          "Wipe your hands with a clean dry towel",
          "Wash with soap under running water, then dry",
          "Put new gloves on over the soil",
        ],
        correctIndex: 2,
        explanation: "Visibly soiled hands are washed with soap and running water — alcohol rub cannot penetrate dirt and organic matter, and wiping or covering contamination only spreads it.",
      },
      {
        topic: "Hand Hygiene",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How long should a complete soap-and-water hand wash take?",
        options: [
          "40-60 seconds",
          "5-10 seconds",
          "2-3 minutes",
          "As long as the sister is watching",
        ],
        correctIndex: 0,
        explanation: "WHO timing is 40-60 seconds for the full wash — enough for the six steps to cover every surface of the hands, including fingertips and thumbs, where germs hide longest.",
      },
    ],
    flashcards: [
      {
        topic: "Hand Hygiene",
        front: "Name WHO's five moments for hand hygiene.",
        back: "Before touching a patient; before a clean or aseptic procedure; after body fluid exposure risk; after touching a patient; after touching the patient's surroundings.",
      },
      {
        topic: "Hand Hygiene",
        front: "How long does each method take?",
        back: "Alcohol rub: 20-30 seconds until hands are dry. Soap and water: 40-60 seconds for the full six-step wash.",
      },
      {
        topic: "Hand Hygiene",
        front: "When is alcohol rub NOT enough?",
        back: "When hands are visibly soiled — and after contact with spore-forming organisms such as C. difficile — where soap and water washing is required.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guidelines on Hand Hygiene in Health Care",
        year: "2009",
        url: "https://www.who.int/publications/i/item/9789241597906",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 8. Practising Vital Signs ──────────────────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Bedside Essentials",
    lessonTitle: "Practising Vital Signs Until They're Second Nature",
    description: "Temperature, pulse, respiration and blood pressure — the four numbers that whisper before anything shouts. Practise until they flow without thinking.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Measure temperature, pulse, respiration and blood pressure accurately.",
      "Recognise the normal adult ranges for the four vital signs.",
      "Apply a safe routine when a reading falls outside the normal range.",
    ],
    tags: ["vital signs", "practice", "observations", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Vital signs are the body's earliest warning system. Before a woman collapses, before a baby deteriorates, the numbers move — a creeping pulse, a climbing temperature, a sagging blood pressure. Your job is to catch the whisper before the shout. On a busy ward that takes speed, accuracy and gentleness all at once, and the only road there is repetition: take them a hundred times, supervised, until your hands know the rhythm.\n\nThe four classics are temperature, pulse, respiration and blood pressure. Later you will add pain, oxygen saturation and consciousness — but these four are your daily bread on every shift, for every patient.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Accuracy hides in small details. Temperature: the right route, a clean thermometer, wiped between patients — axillary for newborns. Pulse: count a full minute at the radial or apical site, noticing rhythm and strength, not just speed. Respiration: count a full minute quietly, ideally while your fingers still rest on her wrist — if she knows you are counting, her breathing changes.\n\nBlood pressure: the right cuff size (too small falsely raises the reading), the arm supported at heart level, and the diastolic read where the tapping sound disappears. Record honestly — never chart a value you did not take. Single odd readings are repeated and compared with earlier ones, because trends tell the real story: 118/78 this morning and 152/102 this evening speaks louder than either alone.",
      },
      {
        type: "clinical_pearl",
        body: "A reading that surprises you deserves a second look. Recheck an unexpected value with good technique after a brief rest, compare it with previous recordings, then report the trend. And treat 'I did not measure it' as the only wrong way to chart — an honest blank beats an invented number every time.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On the postnatal ward you take Madam Esi's observations six hours after delivery: temperature 38.2°C, pulse 112 beats per minute, blood pressure 104/64. She says she feels warm and her breasts are heavy, and you remember that her placenta was removed by hand in theatre. The staff midwife is at the far end of the ward.\n\nWhat do these numbers suggest, and what is your next move?\n\nAnswer: A temperature of 38.2°C with a fast pulse suggests possible postnatal infection — puerperal sepsis — for which manual removal of the placenta was a risk factor. Recheck to confirm accuracy, note the findings with the time in her chart, and inform the staff midwife now, not at handover. Do not wait for the fever to climb or the pulse to race further: early reporting is what turns a treatable infection into a short story.",
      },
      {
        type: "memory_trick",
        body: "Hold the normal ranges as **T-P-R-BP**: Temperature 36.0-37.5°C, Pulse 60-100, Respiration 12-20, Blood pressure around 120/80. Whisper it while you practise. And in pregnancy one number towers over the rest — 140/90 or more is the flag that must go up the chain the same day.",
      },
      {
        type: "summary",
        body: "- Temperature, pulse, respiration and blood pressure are the body's earliest warning system — measure, record, compare.\n- Accuracy lives in the details: right route, full-minute counts, right cuff, arm supported at heart level.\n- Count respirations discreetly — patients change their breathing when they know it is being counted.\n- Typical adult ranges: 36.0-37.5°C, pulse 60-100, respiration 12-20, BP around 120/80.\n- In pregnancy, a BP of 140/90 or more needs same-day escalation — pre-eclampsia can be silent.\n- Recheck and report surprising values; never chart a value you did not take.",
      },
    ],
    questions: [
      {
        topic: "Vital Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should you count respirations while your fingers still rest on the patient's wrist?",
        options: [
          "To keep her wrist warm",
          "Because it is faster than counting separately",
          "So she does not notice the count and change her breathing pattern",
          "Because the wrist moves with each breath",
        ],
        correctIndex: 2,
        explanation: "The moment patients realise their breathing is being counted, many unconsciously alter it. Resting fingers on the pulse hides the count and keeps the rate true.",
      },
      {
        topic: "Vital Signs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a 34-week antenatal visit you record a blood pressure of 156/104. The client feels completely well. What should you do?",
        options: [
          "Reassure her and record it for review at the next visit",
          "Recheck after she rests quietly, record accurately, and inform the midwife — raised BP can signal pre-eclampsia even without symptoms",
          "Advise her to reduce salt and increase walking",
          "Repeat the measurement next week",
        ],
        correctIndex: 1,
        explanation: "Severe hypertension in pregnancy is a same-day escalation even when the woman feels fine — pre-eclampsia often announces itself only in the numbers. Confirm with a proper recheck, then report upward immediately.",
      },
      {
        topic: "Vital Signs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which resting pulse range is normal for a healthy adult?",
        options: [
          "60-100 beats per minute",
          "110-140 beats per minute",
          "20-40 beats per minute",
          "150-180 beats per minute",
        ],
        correctIndex: 0,
        explanation: "The adult resting pulse normally sits between 60 and 100 beats per minute. Below or beyond that range, recheck the technique first, then think about the causes — bleeding, fever, pain, anxiety.",
      },
    ],
    flashcards: [
      {
        topic: "Vital Signs",
        front: "What are the typical adult normal ranges for temperature, pulse, respiration and blood pressure?",
        back: "Temperature 36.0-37.5°C, pulse 60-100 per minute, respiration 12-20 per minute, blood pressure around 120/80 mmHg.",
      },
      {
        topic: "Vital Signs",
        front: "Which single vital sign value in pregnancy must always be escalated the same day?",
        back: "Blood pressure of 140/90 mmHg or higher — possible pre-eclampsia, which can threaten mother and baby even when she feels well.",
      },
      {
        topic: "Vital Signs",
        front: "What do you do with an unexpected or odd reading?",
        back: "Recheck with correct technique, compare with earlier readings for the trend, record honestly and report to a senior — never chart a value you did not take.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth",
        note: "Educational source — verify current WHO edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — thermometer decontamination between patients.",
      },
    ],
  },

  // ── 9. Positioning and Comfort ─────────────────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Bedside Essentials",
    lessonTitle: "Positioning and Comfort at the Bedside",
    description: "A well-placed pillow can prevent pressure sores, ease breathing and keep a pregnant woman's blood flowing. Positioning is quiet, powerful care.",
    difficulty: "Easy",
    durationMin: 11,
    objectives: [
      "Position patients safely for rest, eating, recovery and procedures.",
      "Explain why the left lateral position matters in late pregnancy.",
      "Protect skin and dignity through regular repositioning.",
    ],
    tags: ["positioning", "comfort", "pressure areas", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Positioning sounds like the smallest job on the ward — shift a patient, tuck a pillow, done. Done well, it prevents pressure sores, eases breathing, protects a sleeping newborn's airway and keeps a heavy womb from squashing the vessels behind it. Done carelessly, it causes avoidable harm. This is care you give with your hands and a few pillows, and it tells patients that someone is watching over them.\n\nThe positions you will use most: lying flat (supine), lying on the side (lateral — the left side is gold in late pregnancy), sat upright supported on pillows (Fowler's or semi-Fowler's), and special positions for examination and birth, such as lithotomy.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Why does the left side matter so much in late pregnancy? Lying flat, the heavy womb presses on the large vessels running behind it — the aorta and the inferior vena cava — slowing the blood returning to the heart and reaching the placenta. The mother may feel faint, and the baby gets less oxygen. Turning her to the left side lifts the womb off those vessels. A woman in late pregnancy should never rest flat on her back for long.\n\nFor anyone confined to bed, reposition at least every two hours. Pressure sores form over bony points — heels, sacrum, elbows, hips — where blood flow is squeezed for too long. Keep the skin dry, place a pillow under the calves to float the heels, and help rather than heave: explain what you are doing, get help with heavy moves, and keep her covered and dignified while you work.",
      },
      {
        type: "clinical_pearl",
        body: "A drowsy patient after sedation or a cesarean rests on her side, never flat on her back — the airway stays clear and secretions drain. And every repositioning doubles as an assessment: level of consciousness, colour, breathing and pain, all checked in one gentle move.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Madam Fatima is 38 weeks pregnant, waiting on the antenatal ward for review. You find her lying perfectly flat on her back because it seems tidy and polite; she looks pale and mentions she feels 'small small dizzy' whenever she lies like this. The ward is short of pillows, but you manage to find two.\n\nWhat position do you settle her into, and why does the dizziness happen at all?\n\nAnswer: Turn her onto her left side, with one pillow supporting her back behind the womb and one between her knees. Flat on her back, the heavy uterus compresses the inferior vena cava and aorta behind it, reducing the blood returning to her heart and flowing to the placenta — that is the cause of her dizziness. On her left side the pressure lifts, her circulation recovers and her baby's oxygen supply improves. That two-pillow move is real clinical care, not tidying.",
      },
      {
        type: "memory_trick",
        body: "Late pregnancy: **Left is life, flat on the back is bad.** And for anyone stuck in bed: **two hours, two heels, two sides** — reposition at least every two hours, float the heels on a pillow, and alternate sides to protect the skin.",
      },
      {
        type: "summary",
        body: "- Positioning prevents pressure sores, eases breathing and protects blood flow — it is real clinical care.\n- In late pregnancy, left lateral lifts the womb off the aorta and vena cava; lying flat causes dizziness and less blood for the baby.\n- Reposition immobile patients at least every two hours, watching the bony points — heels, sacrum, elbows, hips.\n- Drowsy patients rest on their side so the airway stays clear.\n- Use pillows under backs, knees and calves, and keep the patient covered and dignified.\n- Explain before you move anyone, and get help for heavy moves.",
      },
    ],
    questions: [
      {
        topic: "Positioning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman at 38 weeks feels faint whenever she lies flat on her back. What should you do, and why?",
        options: [
          "Give her drinking water and leave her flat",
          "Turn her onto her left side — this lifts the womb off the major vessels behind it",
          "Sit her up quickly with her legs hanging down",
          "Raise her legs above the level of her heart",
        ],
        correctIndex: 1,
        explanation: "Lying flat in late pregnancy lets the womb compress the aorta and inferior vena cava (supine hypotension). The left lateral position relieves the pressure and restores blood return and placental flow.",
      },
      {
        topic: "Positioning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient who cannot move herself should be repositioned how often to protect her skin?",
        options: [
          "Once every shift",
          "Every 8 hours",
          "At least every 2 hours",
          "Only when she complains of pain",
        ],
        correctIndex: 2,
        explanation: "Sustained pressure over bony points cuts off local blood supply and begins forming pressure sores within about two hours in vulnerable patients — which is why two-hourly repositioning is the ward standard.",
      },
      {
        topic: "Positioning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A patient is drowsy after medication. In which position should she rest?",
        options: [
          "Flat on her back with a pillow",
          "On her side, with her airway observed",
          "Sitting fully upright",
          "Face down",
        ],
        correctIndex: 1,
        explanation: "The side-lying (recovery) position keeps the tongue from falling back and lets secretions drain — the safest resting position for anyone with reduced consciousness.",
      },
    ],
    flashcards: [
      {
        topic: "Positioning",
        front: "Why is left lateral the position of choice in late pregnancy?",
        back: "Lying flat, the uterus compresses the aorta and inferior vena cava — supine hypotension. Turning left lifts the womb off the vessels, restoring blood return and placental flow.",
      },
      {
        topic: "Positioning",
        front: "How often should an immobile patient be repositioned, and why?",
        back: "At least every two hours — sustained pressure over bony points (heels, sacrum, elbows, hips) cuts blood supply and forms pressure sores.",
      },
      {
        topic: "Positioning",
        front: "A patient is drowsy after medication. Where does she rest?",
        back: "On her side — the recovery position keeps the airway clear and lets secretions drain.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        note: "Educational source — positioning and pressure-area care; verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care Guide",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 10. Assisting with Daily Living Activities ─────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Bedside Essentials",
    lessonTitle: "Assisting with Daily Living Activities",
    description: "Bathing, feeding, walking, dressing — the ordinary tasks where extraordinary care happens. Learn to help without taking over.",
    difficulty: "Easy",
    durationMin: 11,
    objectives: [
      "Assist with bathing, feeding and mobility safely and respectfully.",
      "Explain why preserving patient independence matters for recovery.",
      "Recognise what you can observe about a patient while helping with daily activities.",
    ],
    tags: ["activities of daily living", "assistance", "fundamental care", "bed bath"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Daily living activities — washing, dressing, eating, moving, using the toilet — sound ordinary. On a ward they are where care becomes human. A woman recovering from a cesarean or a difficult birth feels better in ways no tablet can match when someone helps her wash comfortably, eat with dignity and walk to the window. Helping well is a skill: enough help to be safe, little enough to keep her strong.\n\nYour stance is 'assist, don't take over'. Watch what she can manage herself, support the rest, and step back as she recovers. Independence is not the opposite of care — it is part of the treatment.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "For a bed bath, work with privacy, warmth and respect: screens drawn, water comfortably warm, only the part being washed uncovered. Wash from clean areas to dirty, with the perineum last and a fresh cloth for the face. Dry each area well, and change the water when it cools or soils.\n\nFeeding: sit her upright, let her set the pace, offer fluids between mouthfuls, and never rush a tired woman. For moving, encourage early, safe walking after birth or surgery — it improves circulation, prevents clots and lifts mood — but stay beside the unsteady and call a colleague when you need one.\n\nThrough it all, you are assessing: her colour, mood, appetite, pain and skin. Nothing tells you more about a patient than helping her eat.",
      },
      {
        type: "clinical_pearl",
        body: "Every activity of daily living is an assessment in disguise. While you help her wash you see her skin; while you walk with her you learn her strength and balance; while you feed her you watch her appetite and mood. Help with your hands and observe with your eyes — both at once, every time.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is the first morning after Madam Abena's cesarean birth. She has an IV line in one arm, her wound dressing is clean, and she tells you she wants to wash and walk to the bathroom by herself. When she sits up she holds the bed rail and sways slightly.\n\nHow much help should you give — and what does 'helping' look like here?\n\nAnswer: Stay with her and assist — she should do what she can, but not alone yet. Bring a basin of warm water for a wash at the bedside, or support her to the sink if she is steady with you beside her; keep the IV line dry and supported, and keep her covered for warmth and dignity. When she stands, support her until you are sure she is steady, then walk beside her to the bathroom. Early movement is exactly what she needs to prevent clots and speed recovery — your job is to make it safe, not to stop it.",
      },
      {
        type: "memory_trick",
        body: "One rule, four moves: **assist the action, protect the dignity**. Wash clean-to-dirty, cover what you are not washing, feed at her pace, walk beside her — never for her. She does what she can, and you guard the rest.",
      },
      {
        type: "summary",
        body: "- Daily living activities are where clinical care becomes human — bathing, feeding, dressing, moving.\n- Help enough to be safe and little enough to preserve strength: patients recover faster when they do what they can.\n- Bed bath: privacy, warm water, one area uncovered at a time, clean-to-dirty, perineum last, dry well.\n- Feeding: upright position, her pace, fluids between mouthfuls, no rushing.\n- Early supervised walking after birth or surgery prevents clots and lifts mood.\n- Every daily activity doubles as an assessment — watch skin, strength, appetite, mood and pain.",
      },
    ],
    questions: [
      {
        topic: "Daily Living Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a bed bath, when should you wash the perineal area?",
        options: [
          "First, while the water is cleanest",
          "Last, after all other areas",
          "Only if the patient requests it",
          "Together with the face to save time",
        ],
        correctIndex: 1,
        explanation: "The perineum is the dirtiest area, so it is washed last with a separate cloth — washing it earlier carries organisms to cleaner areas on the same cloth and in the same water.",
      },
      {
        topic: "Daily Living Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother one day after a cesarean wants to walk to the bathroom but is unsteady on her feet. What is the best response?",
        options: [
          "Tell her to stay in bed today and use a bedpan",
          "Walk beside her and support her until she is steady — early safe movement aids her recovery",
          "Carry her to the bathroom yourself",
          "Let her walk alone to build her confidence",
        ],
        correctIndex: 1,
        explanation: "Early mobilisation after surgery improves circulation, helps prevent blood clots and speeds recovery — but safety comes through support. Walking beside her keeps the benefit while removing the fall risk.",
      },
      {
        topic: "Daily Living Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should patients be allowed to do what they can for themselves?",
        options: [
          "It preserves their independence, dignity and confidence, and speeds recovery",
          "Because staff are too busy to help everyone",
          "It saves water and soap",
          "It is only expected of private patients",
        ],
        correctIndex: 0,
        explanation: "Doing what she can keeps a patient's muscles, morale and independence working — all of which shorten recovery. Assisting is about supporting her remaining ability, not replacing it.",
      },
    ],
    flashcards: [
      {
        topic: "Daily Living Care",
        front: "In what order do you wash a patient during a bed bath?",
        back: "Clean areas to dirty: face first with a fresh cloth, then the body, with the perineum always last — and each area dried before moving on.",
      },
      {
        topic: "Daily Living Care",
        front: "What does 'assist, don't take over' mean in daily care?",
        back: "Let the patient do whatever she safely can and support the rest — independence maintains strength, dignity and faster recovery.",
      },
      {
        topic: "Daily Living Care",
        front: "Why encourage early walking after a cesarean or delivery?",
        back: "It improves circulation and helps prevent blood clots, aids gut recovery and lifts mood — with support for safety while she is unsteady.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter and Perry's Fundamentals of Nursing",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Postnatal Care of the Mother and Newborn",
        year: "2014",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11. Personal Protective Equipment ──────────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Safe Practice Basics",
    lessonTitle: "Personal Protective Equipment: Dressing for Safety",
    description: "Gloves, gowns, masks and goggles — learn what to wear for which task, and the order that keeps removal safe.",
    difficulty: "Easy",
    durationMin: 11,
    objectives: [
      "Select the right PPE for routine care, deliveries and other splash-risk tasks.",
      "Apply the correct sequence for putting on and removing PPE.",
      "Explain the glove rules that protect both you and your patients.",
    ],
    tags: ["ppe", "safety", "infection prevention", "standard precautions"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "PPE is armour you put on task by task. The purpose is not to look dramatic — it is to keep blood and body fluids off your skin, your eyes and your clothes, and to stop you carrying germs from one patient to the next. In maternity care the splash risk is real: deliveries gush, cords spurt, and a baby's first cry can arrive with a shower you never ordered.\n\nThe trick is proportion. Too little PPE leaves you exposed. Too much, worn everywhere, breeds contamination and waste — gloves worn from bed to bed spread germs rather than stop them. PPE is chosen task by task, put on in order, removed carefully, and always followed by hand hygiene.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "For general care with likely contact with body fluids, gloves plus an apron are usually enough. For a delivery, add mask and eye protection — goggles or a face shield — because amniotic fluid and blood travel far. Gowns when your clothing may be soiled; closed shoes or boots when the floor will be wet.\n\nPutting on: gown first, then mask, then eye protection, then gloves — gloves go over the gown cuffs and are always last. Taking off: gloves first, because they are the most contaminated, then eye protection, then gown, then mask, keeping your hands away from your face throughout. Disposable items go straight into the correct waste stream.\n\nAnd the glove rules: change between patients, between dirty and clean tasks on the same patient, and immediately if torn. Never wash or reuse disposable gloves, and always clean your hands after removing them.",
      },
      {
        type: "clinical_pearl",
        body: "Gloves are for a moment, not a shift. If you find yourself wearing the same pair at the next bedside, they have quietly become a germ taxi — carrying whatever they touched to everyone they meet afterwards. The moment a task ends, the gloves end.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are called to assist at a birth. In the delivery room you put on your apron, mask and goggles, then your sterile gloves. The baby arrives healthy and loud, and the bed is wet with amniotic fluid. As you step back, you reach to remove your goggles — your gloved hands are soaked.\n\nIn what order should you remove your PPE, and what must happen straight afterwards?\n\nAnswer: Remove the gloves first, peeling one off inside-out and holding it in the gloved hand, then sliding inside the second glove to peel it over the first — so the contaminated outsides never touch your bare skin. Then remove the goggles from behind your head without touching the front, then the gown, then the mask — dirtiest items off first, and nothing touches your face or uniform. Dispose of everything correctly and perform hand hygiene immediately. Removal is where most self-contamination happens, so it deserves as much care as the procedure itself.",
      },
      {
        type: "memory_trick",
        body: "Dressing up: **Gown, Mask, Eyes, Gloves — gloves last, over the cuffs**. Undressing: **Gloves, Eyes, Gown, Mask — dirtiest first**, hands off your face, then wash. Say each order twice while you practise and it becomes muscle memory.",
      },
      {
        type: "summary",
        body: "- PPE is chosen per task: gloves and apron for general body fluid contact; add mask and eye protection for deliveries.\n- Put on in order: gown, mask, eye protection, gloves last over the cuffs.\n- Remove in order: gloves (most contaminated) first, then eye protection, gown, mask — then hand hygiene.\n- Change gloves between patients and between tasks; never wash or reuse disposables.\n- Gloved hands never touch your face, and contaminated surfaces face away from you during removal.\n- PPE worn between patients spreads germs instead of stopping them — proportion is protection.",
      },
    ],
    questions: [
      {
        topic: "PPE",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are assisting at a vaginal delivery. Which set of PPE is appropriate?",
        options: [
          "Clean gloves only",
          "Sterile gloves, apron or gown, mask and eye protection",
          "Mask and theatre cap only",
          "Closed shoes only",
        ],
        correctIndex: 1,
        explanation: "Births splash: amniotic fluid and blood reach the face regularly, so eye protection and a mask join the gown and sterile gloves. Gloves alone leave the face and clothing exposed.",
      },
      {
        topic: "PPE",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the correct order for removing PPE after a procedure?",
        options: [
          "Mask, gown, gloves, goggles",
          "Gown first, then gloves",
          "Gloves first, then eye protection, then gown, then mask",
          "Whichever piece is easiest to reach first",
        ],
        correctIndex: 2,
        explanation: "Gloves are the most contaminated piece, so they come off first — without their outside touching your skin — followed by eye protection, gown and mask, finishing with hand hygiene.",
      },
      {
        topic: "PPE",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You have finished washing a patient and are about to help her walk. Your gloves should be:",
        options: [
          "Kept on to save a fresh pair",
          "Washed at the tap for reuse",
          "Changed — or removed with hand hygiene — between tasks",
          "Left on until the lunch break",
        ],
        correctIndex: 2,
        explanation: "Gloves used for one task carry its germs into the next. They are changed between dirty and clean tasks on the same patient and between patients, with hand hygiene after removal.",
      },
    ],
    flashcards: [
      {
        topic: "PPE",
        front: "What is the order for putting on PPE?",
        back: "Gown first, then mask, then eye protection (goggles or face shield), then gloves last — pulled over the gown cuffs.",
      },
      {
        topic: "PPE",
        front: "What is the order for removing PPE?",
        back: "Gloves first (most contaminated), then eye protection, then gown, then mask — hands away from the face, then hand hygiene immediately.",
      },
      {
        topic: "PPE",
        front: "When must gloves be changed?",
        back: "Between patients, between dirty and clean tasks on the same patient, and immediately when torn — disposable gloves are never washed or reused.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Rational Use of Personal Protective Equipment for Coronavirus Disease",
        year: "2020",
        note: "Educational source — verify current WHO guidance.",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Sequence for Putting On and Removing Personal Protective Equipment",
        note: "Educational source — verify current version.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Infection Prevention and Control Guidelines",
        note: "Educational reference — always consult the current national document and your facility's protocol.",
      },
    ],
  },

  // ── 12. Aseptic Technique: First Practice ───────────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Safe Practice Basics",
    lessonTitle: "Aseptic Technique: Your First Practice",
    description: "A sterile field is a promise — nothing alive crosses this line. Learn the choreography that keeps procedures sterile without panic.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Prepare and maintain a sterile field for simple procedures.",
      "Apply the rules that decide when an item or field is contaminated.",
      "Identify the common beginner errors that break sterile technique.",
    ],
    tags: ["aseptic technique", "sterile field", "sterile gloves", "infection control"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Aseptic technique is surgical asepsis in action — the choreography of gloves, drapes, forceps and packaging that keeps an item sterile from the autoclave to the patient. On paper it looks intimidating. In practice it is a small set of rules, repeated until they feel like a dance you know by heart.\n\nPicture a sterile field as clean, dry, high ground in the middle of a contaminated world. Everything inside the wrapping is sterile; everything outside it — the air's dust, your uniform, the bed, your hands — is not. Your whole job is to move sterile things from wrapper to field to patient without ever letting the two worlds touch.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The rules are few and strict. Sterile touches only sterile. Anything below waist level, behind you, or out of your view is treated as contaminated — you must be able to see sterility to guard it. The outer one-inch border of a sterile drape is never sterile and never holds sterile items. Wet is dangerous: fluid soaking through a drape or wrapper wicks germs straight through it. Reach around a sterile field, never across it, and never turn your back on one.\n\nOpening packages: touch only the outside, and peel or unfold so the contents drop onto the field while your hands stay outside. Gloving: bare skin touches only the inside of the glove.\n\nWhen any rule breaks — a sleeve drifts over the field, a glove grazes the bed rail — the item is contaminated. No debate, no wipe: discard and replace. **If in doubt, throw it out.**",
      },
      {
        type: "clinical_pearl",
        body: "Beginners break sterile fields in two ways: reaching across them, and staying silent after contaminating them. Seniority does not decontaminate. If you notice a break, say it out loud immediately — 'that field is contaminated' — and start again. The senior who sighs over a wasted pack would grieve far longer over an infected wound.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The midwife is about to suture a second-degree tear and asks you to open the sterile suturing pack onto the trolley. You open the outer wrapper and tip the inner pack onto the prepared sterile drape — but as you pass it across, your sleeve brushes over the top of the open field. Nobody else seems to have noticed.\n\nWhat happens next — and what do you say?\n\nAnswer: Say it immediately: the field is contaminated, because your sleeve passed across it and sleeves are never sterile. The pack is discarded and a fresh one opened, with you reaching around the field, not across it. Continuing silently would risk carrying bacteria into the wound — suturing means entering tissue, and the sterile standard is absolute. The midwife may sigh about the wasted pack, but a contaminated field is never a bargain; it is tomorrow's wound infection.",
      },
      {
        type: "memory_trick",
        body: "Guard the field with four questions: **In sight? Above the waist and in front of me? Dry? Sterile touching only sterile?** Any 'no' means contaminated — below the waist, behind your back, beyond the one-inch border, soaked through, or touched by something unsterile. If in doubt, throw it out.",
      },
      {
        type: "summary",
        body: "- Aseptic technique is the choreography that carries sterility from package to patient without a single break.\n- Sterile touches only sterile — the rule that never bends.\n- Contaminated by definition: below the waist, behind you, out of view, beyond the drape's one-inch border, wet, or touched by anything unsterile.\n- Reach around the field, never across it; never turn your back on it.\n- Fluid wicks germs through fabric — a wet field is a dead field.\n- If in doubt, throw it out — and say the break out loud the moment you see it.",
      },
    ],
    questions: [
      {
        topic: "Aseptic Technique",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a sterile procedure your sleeve passes over the sterile field. What does this mean?",
        options: [
          "Nothing — sleeves are part of your uniform",
          "Only the sleeve needs changing afterwards",
          "The field is contaminated — exposed items are discarded and the setup starts again",
          "Spraying the field with alcohol will fix it",
        ],
        correctIndex: 2,
        explanation: "Uniforms carry micro-organisms, and anything passing over the field can shed them onto it. The field and its exposed contents are contaminated, and no spray restores sterility — you start again.",
      },
      {
        topic: "Aseptic Technique",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The outer one-inch edge of a sterile drape is considered:",
        options: [
          "A safe handle for moving the drape",
          "Sterile, because it came from the autoclave",
          "Only meant for resting instrument corners",
          "Contaminated — never touch it or place sterile items on it",
        ],
        correctIndex: 3,
        explanation: "The drape's border is where unsterile hands gripped during laying out, so that margin is defined as contaminated. Sterile items stay inside the border, and gloved hands stay off it.",
      },
      {
        topic: "Aseptic Technique",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A sterile instrument falls below waist level. What is the correct action?",
        options: [
          "Pick it up quickly and continue with it",
          "Consider it contaminated and discard it",
          "Wipe it with alcohol and reuse it",
          "Ask the patient to pick it up for you",
        ],
        correctIndex: 1,
        explanation: "Below the waist is out of your guarded view, where sterility can no longer be guaranteed — the item is treated as contaminated. Wiping cannot return sterility to an instrument.",
      },
    ],
    flashcards: [
      {
        topic: "Aseptic Technique",
        front: "Name five ways a sterile item becomes contaminated.",
        back: "Falls below waist level; passes behind your back or out of view; touches the drape's one-inch border; becomes wet (fluid wicks germs through); touches anything unsterile.",
      },
      {
        topic: "Aseptic Technique",
        front: "Why does reaching across a sterile field break it?",
        back: "Your uniform and skin carry micro-organisms that can shed onto whatever lies beneath — so you reach around the field, never over it.",
      },
      {
        topic: "Aseptic Technique",
        front: "Your sleeve brushes the field and nobody sees it. What do you do?",
        back: "Announce it immediately — the field is contaminated and items must be replaced. Honesty costs a pack; silence can cost a wound infection.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Best Practices for Injections and Related Procedures Toolkit",
        note: "Educational source — aseptic technique principles; verify current WHO guidance.",
      },
      {
        organization: "Centers for Disease Control and Prevention",
        title: "Guideline for Isolation Precautions",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2020 (17th edition)",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 13. Speaking Up: Reporting and Escalating ───────────────
  {
    courseSlug: "clinical-skills-1",
    moduleTitle: "Safe Practice Basics",
    lessonTitle: "Speaking Up: Reporting and Escalating Safely",
    description: "When something looks wrong, your voice is the patient's safety net. Learn what to report, to whom, and how — before you need it.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Recognise findings and situations that require immediate escalation.",
      "Escalate concerns clearly using objective observations.",
      "Explain why raising a concern early is a professional duty, not disrespect.",
    ],
    tags: ["escalation", "safety", "communication", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Things go wrong on wards quietly at first — a pulse creeping up, a mother becoming restless, a baby feeding less. The difference between a bad night and a tragedy is often one person noticing and one voice speaking up. As a student, that voice can be yours, and this lesson is about using it well.\n\nSpeaking up feels hard, especially where respect for seniors is deep and real. You worry about being wrong, about interrupting, about seeming to question someone's judgement. Reframe it: escalation is not disrespect. It is information travelling to where it can save a life — and seniors cannot act on what they never hear.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "What needs escalating now, not at handover? Anything suggesting a patient is deteriorating: heavy bleeding after birth, a rising pulse with a falling blood pressure, breathing difficulty, seizures, a newborn who will not feed or is grunting, any sudden change in consciousness. Also unsafe practice, missing equipment and your own errors — all of these belong to the team.\n\nHow to speak so people act: state the facts first. 'Madam, Bed 4 is bleeding heavily — pulse 118, BP 90/60, the pad is soaked.' Then say what you think and ask what to do — the SBAR pattern (Situation, Background, Assessment, Recommendation) gives your words weight.\n\nAnd document: what you saw, what you measured, whom you told and what was said. If your concern is dismissed but the patient still worries you, take it one level higher. Being wrong costs an apology; staying silent can cost a life.",
      },
      {
        type: "clinical_pearl",
        body: "Say the numbers, then say the worry. 'Her pulse is 118 and I am worried about bleeding' beats 'she does not look fine' every time — measurements cannot be argued away the way impressions can, and numbers move people into action.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 02:00 on the postnatal ward. You have been watching Bed 7 since your last round: Madam Yaa, six hours after a normal birth, now looks pale and sweaty. Her pad is heavier than before, her pulse is 118, and she says she feels 'small small dizzy'. The staff midwife is at the far end of the ward with another patient.\n\nWhat do you do in the next two minutes — and what exactly do you say?\n\nAnswer: Go straight to the staff midwife, interrupt politely and immediately — heavy bleeding after birth kills quickly, and pale, sweaty, fast pulse and dizziness are its warning signs. Give the facts: 'Madam, Bed 7, Madam Yaa, six hours postpartum. She is pale and sweaty, pulse 118, the pad is heavier than at midnight, and she feels dizzy. I am worried about bleeding — what should we do?' Do not wait to be more certain and do not save it for handover. Afterwards, document what you measured, whom you told and when. At 02:00, your voice is the safety net.",
      },
      {
        type: "memory_trick",
        body: "Structure every escalation in three beats: **facts first, worry second, question third**. One line of facts (bed, name, numbers), one line of worry ('I am concerned about...'), one question ('What should we do?'). Numbers open doors that vague feelings cannot — and a worry shared is a patient guarded.",
      },
      {
        type: "summary",
        body: "- Deterioration whispers first — changes in pulse, bleeding, breathing, feeding or consciousness need immediate reporting.\n- Escalation is information travelling to where it saves lives, never disrespect toward seniors.\n- Speak in facts: observations and measurements first, then your worry, then your question.\n- The SBAR pattern (Situation, Background, Assessment, Recommendation) gives an escalation weight and clarity.\n- Document what you saw, measured, reported and were told — with times.\n- If a concern is dismissed but the patient still worries you, take it one level higher. Being wrong costs an apology; silence can cost a life.",
      },
    ],
    questions: [
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 02:00 you notice a postnatal woman bleeding heavily, pale, with a pulse of 118. The staff midwife is busy with another patient. What do you do?",
        options: [
          "Wait until the midwife is free to approach her",
          "Write it in the chart for the morning handover",
          "Interrupt the midwife immediately and report what you are seeing",
          "Ask a relative to keep watching the bed",
        ],
        correctIndex: 2,
        explanation: "Postpartum haemorrhage kills within minutes to hours — a rising pulse with visible bleeding is a now problem. Interrupting a senior politely is always correct when the finding may be life-threatening; waiting or delegating to relatives is not.",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which is the most effective way to escalate a concern about a deteriorating patient?",
        options: [
          "She does not look fine to me, madam",
          "Bed 4: pulse 118, BP 90/60, bleeding heavily since 02:00 — I am worried about haemorrhage. What should we do?",
          "I think something is wrong somewhere",
          "Please come and check all the patients yourself",
        ],
        correctIndex: 1,
        explanation: "Facts, worry, question — measurements with bed and timing, your concern, and a request for action. Objective data cannot be brushed aside the way vague impressions can, and it guides the senior's next move.",
      },
      {
        topic: "Escalation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are not sure whether your observation is significant. Should you still report it?",
        options: [
          "No — report only when you are certain",
          "Yes — a senior can judge what you cannot; reporting a possible problem is always safer than silence",
          "Only if another student agrees with you",
          "Only during handover",
        ],
        correctIndex: 1,
        explanation: "Your job as a student is to notice and report, not to be certain. A senior can dismiss a false alarm in seconds — but no one can recover the time lost to an unreported real one.",
      },
    ],
    flashcards: [
      {
        topic: "Escalation",
        front: "Which findings need immediate escalation, never delayed to handover?",
        back: "Heavy bleeding after birth, rising pulse with falling blood pressure, breathing difficulty, seizures, a newborn who feeds poorly or grunts, sudden consciousness change — and any sharp departure from the patient's baseline.",
      },
      {
        topic: "Escalation",
        front: "How do you structure an effective escalation?",
        back: "Facts first (identity, measurements, timing), then your worry, then a question — the SBAR pattern: Situation, Background, Assessment, Recommendation.",
      },
      {
        topic: "Escalation",
        front: "Your concern was dismissed but the patient still worries you. Now what?",
        back: "Escalate to the next level, and document what you saw and whom you told. Being wrong costs an apology; staying silent can cost a life.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide",
        year: "2011",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Safe Childbirth Checklist",
        year: "2015",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Conduct and Professional Standards",
        note: "Educational reference — verify current edition.",
      },
    ],
  },
];
