// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 3, Semester 1 — Batch D (Community Health Nursing I)
// 11 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Beyond the Hospital Walls",
    lessonTitle: "Primary Health Care: The Foundation",
    description:
      "The idea that health begins where people live — the Alma-Ata vision, Ghana's version of it, and why prevention beats cure when resources are thin.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Define primary health care and list its essential elements.",
      "Explain the Alma-Ata and Astana declarations and what 'Health for All' means in practice.",
      "Distinguish primary, secondary and tertiary prevention with examples from Ghanaian communities.",
    ],
    tags: ["primary health care", "philosophy", "prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A hospital can only care for the people who reach it. Most of Ghana's health — and most of your future work as a community nurse — happens long before anyone becomes a patient: in the compound with its covered drinking water, at the child welfare clinic where a baby is weighed, in the classroom where a teenager first hears about malaria nets.\n\nThis is the world primary health care built. In 1978, at Alma-Ata, the world's health leaders declared health a fundamental human right and committed to bringing essential, acceptable care within the reach of every person — not just those near big facilities. Ghana took that idea and, through CHPS and community nursing, carried it into the last village. This lesson gives you the foundation every later lesson stands on.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Primary health care (**PHC**) is **essential health care made universally accessible to individuals and families in the community, at a cost they can afford, through their full participation**. It is practical, scientifically sound and socially acceptable — care that fits the place and the pocket. Alma-Ata's eight essential elements still describe the community nurse's job list: health education; food supply and proper nutrition; safe water and basic sanitation; maternal and child health including family planning; immunization against the major infectious diseases; prevention and control of locally endemic diseases; appropriate treatment of common diseases and injuries; and the provision of essential drugs. In 2018, the Astana Declaration renewed the promise and added a modern partner: **universal health coverage** — nobody impoverished by the cost of their own care.\n\nPHC also reframes prevention in three levels. **Primary prevention** stops illness before it starts — immunization, bed nets, clean water, health education. **Secondary prevention** catches it early — blood pressure checks at the market, tracing a cough that has lasted three weeks, treating a child's malaria before it becomes cerebral. **Tertiary prevention** limits the damage of established disease — teaching a stroke survivor's family exercises, protecting a diabetic's feet. All three belong to you, but community nursing is the only place where primary prevention gets the whole of your attention.",
      },
      {
        type: "table",
        title: "The three levels of prevention",
        body: "| Level | What it does | Community example |\n| --- | --- | --- |\n| Primary | Stops disease before it starts | Immunization outreach, bed nets, safe water teaching, school health education |\n| Secondary | Finds and treats disease early | Blood pressure screening at market day, defaulter tracing, sputum collection for a chronic cough |\n| Tertiary | Limits damage from established disease | Stroke rehabilitation teaching, diabetic foot care, supporting a patient's return to work |",
      },
      {
        type: "clinical_pearl",
        body: "The cheapest bed in Ghana is the one a patient never needs. When your immunization outreach works, when the drinking water stays covered, when the net hangs over the right bed — you are treating thousands of people who will never know your name. That is primary health care's quiet arithmetic.",
      },
      {
        type: "case",
        title: "In the field",
        body: "Your district reports a rise in malaria admissions among children under five, and the DHIMS data shows your CHPS zone has the worst numbers. At the compound, you and the community health volunteers find the root: two villages across the river received no nets at the last distribution, and their children cross daily to the farm. You plan three responses — a net distribution with hang-up teaching (primary), rapid diagnostic testing of every febrile child at the next outreach (secondary), and referral criteria reviewed with the volunteers so a child who cannot drink or is convulsing travels to the district hospital the same hour (tertiary).\n\nWhy does the response need all three levels, not just the nets?\n\nAnswer: The nets stop tomorrow's infections, but the children already febrile today need detection and treatment now — and the few who deteriorate need a fast, prepared pathway to hospital. Primary health care is not one intervention; it is a system of prevention, early detection and managed referral. Remove one level and the community pays for it in admissions — or funerals.",
      },
      {
        type: "memory_trick",
        body: "The prevention ladder: **Stop it, Spot it, Soften it.** Primary stops the disease before it starts; secondary spots it early enough to treat; tertiary softens the blow it has already struck. Climb in that order — the higher the rung, the more it costs and the less it can undo.",
      },
      {
        type: "summary",
        body: "- Primary health care: essential, accessible, affordable care delivered in the community with people's full participation.\n- Alma-Ata (1978) declared health a fundamental right; Astana (2018) renewed it around universal health coverage.\n- Eight elements: education, nutrition, water and sanitation, MCH and family planning, immunization, endemic disease control, treatment of common conditions, essential drugs.\n- Prevention runs in three levels — Stop it (primary), Spot it (secondary), Soften it (tertiary).\n- The community nurse is the only health worker whose daily list contains all three.",
      },
    ],
    questions: [
      {
        topic: "Primary Health Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best defines primary health care?",
        options: [
          "Cheap, basic care offered to poor communities when doctors are unavailable",
          "Essential health care made universally accessible in the community, at affordable cost, with people's full participation",
          "The first ward a patient is admitted to in a district hospital",
          "Care delivered only by community volunteers without professional staff",
        ],
        correctIndex: 1,
        explanation:
          "PHC is essential care placed within the community's reach — practical, scientifically sound, socially acceptable and affordable, delivered with community participation. It is not a lesser service for the poor; it is the foundation for everyone, staffed by qualified professionals.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Levels of Prevention",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A community nurse checks blood pressures at a market-day outreach and refers two people with high readings for confirmation. This activity is an example of:",
        options: [
          "Primary prevention, because the market is a community setting",
          "Tertiary prevention, because hypertension is chronic",
          "Secondary prevention, because it detects existing disease early",
          "Not prevention at all, because it leads to treatment",
        ],
        correctIndex: 2,
        explanation:
          "Screening detects disease that already exists but is silent — the heart of secondary prevention. Primary prevention would stop hypertension from developing (salt reduction teaching); tertiary would limit damage in diagnosed patients (adherence follow-up, foot checks).",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Primary Health Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The Alma-Ata Declaration of 1978 is best remembered for:",
        options: [
          "Building the first teaching hospital in Africa",
          "Declaring health a fundamental human right and launching 'Health for All'",
          "Banning traditional medicine worldwide",
          "Recommending that nurses replace doctors in all facilities",
        ],
        correctIndex: 1,
        explanation:
          "Alma-Ata framed health as a fundamental right and set the goal of Health for All through primary health care — the idea that carried CHPS compounds, community nurses and outreach clinics into Ghana's remotest villages.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Levels of Prevention",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which activity belongs to primary prevention?",
        options: [
          "Referring a child with convulsions to the district hospital",
          "Teaching handwashing and helping a school build a tippy-tap station",
          "Dressing a chronic leg ulcer at home",
          "Tracing a patient who defaulted from tuberculosis treatment",
        ],
        correctIndex: 1,
        explanation:
          "Handwashing teaching prevents infection before it starts — primary prevention. Referral of a sick child is care of established disease, ulcer dressing limits damage (tertiary), and defaulter tracing is early detection and treatment (secondary).",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Primary Health Care",
        front: "What is the definition of primary health care?",
        back: "Essential health care made universally accessible to individuals and families in the community, at a cost they can afford, through their full participation — practical, scientifically sound and socially acceptable.",
      },
      {
        topic: "Primary Health Care",
        front: "Name four of the eight essential elements of PHC.",
        back: "Health education; food supply and nutrition; safe water and basic sanitation; maternal and child health including family planning; immunization; prevention and control of locally endemic diseases; treatment of common conditions; essential drugs.",
      },
      {
        topic: "Levels of Prevention",
        front: "Give one community example of each prevention level.",
        back: "Primary — immunization outreach or bed nets. Secondary — blood pressure screening at market day. Tertiary — teaching a stroke survivor's family rehabilitation exercises.",
      },
      {
        topic: "Primary Health Care",
        front: "What did the Astana Declaration (2018) add to Alma-Ata's vision?",
        back: "It renewed Health for All and tied PHC to universal health coverage — no one impoverished by the cost of their own health care.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Declaration of Alma-Ata (International Conference on Primary Health Care)",
        year: "1978",
      },
      {
        organization: "World Health Organization",
        title: "Declaration of Astana (Global Conference on Primary Health Care)",
        year: "2018",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): The Policy and Strategy",
        note: "Ghana's national rendition of primary health care; verify current edition with the district directorate.",
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
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Beyond the Hospital Walls",
    lessonTitle: "The CHPS Compound & the Health System",
    description:
      "From the CHPS compound in the last village to the teaching hospitals — the levels of Ghana's health system and how a referral finds its way up the ladder.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the levels of Ghana's health system and the services typical of each.",
      "Explain what CHPS is, where it came from, and the services a CHPS zone provides.",
      "Apply referral logic to decide which level of care a patient's problem needs.",
    ],
    tags: ["chps", "health system", "referral"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Ghana's health system is a ladder, not a pyramid of importance. Every rung matters, and your job as a community nurse is to know exactly which rung a patient's problem needs — because sending someone up too high wastes their money and their day, and failing to send them at all can cost their life.\n\nAt the bottom of the ladder, within walking distance of the family, stands the **CHPS compound** — the closest thing Ghana has to a doorstep health service. This lesson walks the whole ladder from CHPS to the teaching hospitals, so that when you meet a patient, you always know where they should go next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**CHPS** — Community-based Health Planning and Services — grew from the Navrongo experiment in the Kassena-Nankana district in the 1990s: relocate the nurse from the distant clinic into the community, add trained volunteers, and listen to what the community itself wants. Child survival improved so clearly that CHPS became national policy. Today a CHPS zone serves a cluster of villages with essential services: immunization and child welfare clinics, antenatal and postnatal contacts, family planning, treatment of minor ailments, home visits, health education, disease surveillance and community mobilisation.\n\nAbove CHPS sit the **health centres** (led by physician assistants, with laboratory support and more treatment options), then **district hospitals** (medical officers, inpatient beds, theatre, maternity), **regional hospitals** (specialists and services district hospitals cannot carry), and the **teaching hospitals** — Korle Bu, Komfo Anokye and Tamale — which treat, train and take the hardest referrals. Alongside the public ladder run a parallel set of services you must also know: mission facilities under the Christian Health Association of Ghana (**CHAG**), private clinics and pharmacies, and the traditional and faith healers your patients usually meet first. The system is held together by referral upward, feedback downward, and the National Health Insurance Scheme helping patients pay.",
      },
      {
        type: "table",
        title: "The levels of Ghana's health system",
        body: "| Level | Typical services | Usually staffed by |\n| --- | --- | --- |\n| CHPS compound / zone | Immunization, child welfare, ANC, family planning, minor ailments, home visits | Community health nurses and officers, community health volunteers |\n| Health centre | Broader outpatient care, laboratory, supervised deliveries (most) | Physician assistants, general nurses, community health officers |\n| District hospital | Inpatient care, theatre, maternity, X-ray, emergency stabilisation | Medical officers, nursing and allied teams |\n| Regional hospital | Specialist clinics, surgery and services beyond the district | Specialists, medical officers, nursing teams |\n| Teaching hospital | Tertiary referral, specialist units, training and research | Consultants, residents, specialist nurses |",
      },
      {
        type: "clinical_pearl",
        body: "Refer up, never away. A good referral sends the patient to the lowest rung that can actually solve the problem, with a call ahead, a note in hand and a plan for the journey — and expects feedback to travel back down the ladder so the community record stays whole.",
      },
      {
        type: "case",
        title: "In the field",
        body: "It is nearly dusk when a father arrives at your CHPS compound carrying his three-year-old, hot and convulsing. You clear the airway, position him safely, note the time the convulsion started, check his temperature and glucose per your protocol, and treat the fever. The convulsion stops, but the child is drowsy and cannot drink — danger signs you know from your integrated management training.\n\nWhich level does this child need, and what do you arrange before the family leaves?\n\nAnswer: This is severe illness — suspected severe malaria with convulsions — and it needs the district hospital, not observation at home. Before they leave: call the district hospital ahead and give a spoken handover (age, what happened, findings, what you have done and at what time); write a referral note in duplicate with the child's temperature, the convulsion times, treatments given with times, and the father's contact; organise the fastest safe transport with a responsible adult who can keep the child positioned on his side; and tell the father exactly which danger signs on the journey mean turning back or hurrying. Your compound could start the care — only the district can finish it.",
      },
      {
        type: "memory_trick",
        body: "Climb the ladder **C-H-D-R-T**: Community (CHPS), Health centre, District, Regional, Teaching. Each rung adds what the one below cannot carry — and your clinical judgement decides the first, and often the most important, step of the climb.",
      },
      {
        type: "summary",
        body: "- Ghana's system: CHPS zone → health centre → district hospital → regional hospital → teaching hospital, with CHAG, private and traditional providers alongside.\n- CHPS grew from the Navrongo experiment — nurses living in the community plus volunteers, and measurably better child survival.\n- A CHPS package: immunization, child welfare, ANC, family planning, minor ailments, home visits, education, surveillance.\n- Refer to the lowest level that can actually solve the problem — with a call ahead, a written note and safe transport.\n- Feedback flowing back down the ladder keeps the community record and the system honest.",
      },
    ],
    questions: [
      {
        topic: "CHPS & the Health System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does CHPS stand for, and what is its core idea?",
        options: [
          "Community Hospital Planning System — building hospitals in every village",
          "Community-based Health Planning and Services — relocating essential, nurse-led care into the community itself",
          "Central Health Procurement Service — supplying medicines to districts",
          "Child Health Promotion Scheme — school-based immunization alone",
        ],
        correctIndex: 1,
        explanation:
          "CHPS is Ghana's national strategy for taking primary care to the community's doorstep: a nurse and community health officers serving a zone of villages, supported by trained volunteers. It grew from the Navrongo experiment, which showed better child survival when care moved into the community.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "CHPS & the Health System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient at your CHPS compound has an uncomplicated hypertension review, stable and symptom-free. Where is the most appropriate place for this care?",
        options: [
          "Immediate referral to the teaching hospital",
          "The CHPS compound or health centre, with referral only if control fails or danger signs appear",
          "No care is possible outside a regional hospital",
          "The nearest pharmacy, as hypertension is not nursing work",
        ],
        correctIndex: 1,
        explanation:
          "Stable chronic disease follow-up belongs at the lowest effective rung — CHPS or health centre — close to the patient's home. Referral upward is reserved for failed control, danger signs or complications; over-referring costs the patient money, time and trust in the system.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "CHPS & the Health System",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The Navrongo experiment, which led to the CHPS strategy, demonstrated that:",
        options: [
          "Hospitals achieve better outcomes than community care in all settings",
          "Placing nurses within communities, supported by local volunteers, improves child survival and service use",
          "Volunteers can replace professional nurses entirely in rural zones",
          "Communities prefer to travel long distances for care",
        ],
        correctIndex: 1,
        explanation:
          "Navrongo showed that bringing the nurse to live and work among the people — with community participation through trained volunteers — cut child mortality and raised uptake of services. That evidence became national CHPS policy. Volunteers extend the nurse's reach; they never replace the professional.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "CHPS & the Health System",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about Ghana's health system is correct?",
        options: [
          "Only government facilities form part of the health system",
          "Mission hospitals under CHAG, private clinics and pharmacies stand outside the system entirely",
          "Public facilities, CHAG mission facilities, private providers and traditional or faith healers all form part of the landscape patients move through",
          "Referral feedback from hospitals back to CHPS compounds is forbidden",
        ],
        correctIndex: 2,
        explanation:
          "Patients move through a mixed system — public ladder, CHAG mission facilities, private clinics and the traditional and faith healers they meet first. The community nurse maps all of them, because care is delayed wherever the parts do not connect, and referral feedback flowing downward is part of good practice, not a breach.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "CHPS & the Health System",
        front: "Expand CHPS and state its origin in one line.",
        back: "Community-based Health Planning and Services — Ghana's national strategy born from the Navrongo experiment, which relocated nurses into communities with trained volunteers and improved child survival.",
      },
      {
        topic: "CHPS & the Health System",
        front: "Name the five levels of Ghana's public health ladder.",
        back: "CHPS compound (community), health centre, district hospital, regional hospital, teaching hospital.",
      },
      {
        topic: "CHPS & the Health System",
        front: "What services does a CHPS zone typically provide?",
        back: "Immunization and child welfare clinics, antenatal and postnatal contacts, family planning, minor ailment treatment, home visits, health education, disease surveillance and community mobilisation.",
      },
      {
        topic: "CHPS & the Health System",
        front: "What is the referral principle 'refer up, never away'?",
        back: "Send the patient to the lowest level that can actually solve the problem — with a call ahead, a written referral note and safe transport — and expect feedback to travel back down so the community record stays complete.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): The Policy and Strategy",
        note: "Verify current edition with the district directorate.",
      },
      {
        organization: "World Health Organization",
        title: "Primary Health Care on the Road to Universal Health Coverage (2018 Monitoring Report)",
        year: "2018",
      },
      {
        organization: "Christian Health Association of Ghana",
        title: "CHAG Member Institutions Overview",
        note: "The mission-health arm of Ghana's system.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Beyond the Hospital Walls",
    lessonTitle: "The Community Health Nurse: Roles & Realities",
    description:
      "Clinician, teacher, record keeper, advocate — and the neighbour everyone calls Sister. The real shape of the work you are walking into.",
    difficulty: "Easy",
    durationMin: 10,
    objectives: [
      "Describe the six core roles of the community health nurse with everyday examples.",
      "Explain how community nursing differs from ward nursing in setting, rhythm and relationships.",
      "Apply trust-building behaviours that make community care safe and effective.",
    ],
    tags: ["community nursing", "roles", "trust"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "On the ward, the patient comes to you, the folder comes with them, and a whole team stands behind you. In the community, you go to the patient, the folder is the one you carry, and the team may be a volunteer on a bicycle and a phone with credit. Community health nursing is the same profession with a different centre of gravity — and it deserves an honest job description.\n\nThis lesson sets out the roles you will actually perform and the realities you will actually live: the motorbike in harmattan, the weighing under a tree, the funeral you attend because you are part of the community now. It is demanding, deeply skilled work — and for many nurses, the most meaningful years of their career.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your roles stack rather than alternate. You are a **care provider** — treating minor ailments, following up chronic disease, running child welfare clinics. A **health educator** — one-to-one at a bedside, or to a whole durbar under the chief's tree. A **record keeper and tracker** — the registers that feed the district's data, the defaulter list that sends you hunting a child's missed doses through the lanes. An **advocate** — arguing for a bridge, a borehole or an outreach budget at the assembly, or for a patient's NHIS registration at the facility. A **collaborator and team leader** — supervising community health volunteers, working with teachers, chiefs, queen mothers, assembly members, traditional birth attendants and healers. And a **surveillance sentinel** — the first to notice a cluster of diarrhoea cases or a strange cough and to raise the alarm.\n\nThe realities are part of the job description too. You live where you work, addressed as Sister at the market and at funerals. You are often the most trusted — and most watched — person in the zone. Trust is the currency of your practice: a family that trusts you calls early, discloses honestly, takes the tablets and brings the child. And the register you keep today is the data that decides next year's services — in community nursing, your pen has a second job as the district's memory.",
      },
      {
        type: "table",
        title: "The roles on an ordinary Tuesday",
        body: "| Role | What it looks like |\n| --- | --- |\n| Care provider | Dress a leg ulcer at home; recheck a defaulting hypertensive's blood pressure |\n| Health educator | Teach nutrition to a mothers' group; explain immunization to a doubtful grandmother |\n| Recorder and tracker | Update the child welfare register; trace three children who missed their third dose |\n| Advocate | Push for the river crossing community's outreach date; help a family register for NHIS |\n| Collaborator | Supervise two volunteers; brief the queen mother before a net campaign |\n| Sentinel | Notice four diarrhoea cases from one village and report to the district same day |",
      },
      {
        type: "clinical_pearl",
        body: "In the community your reputation precedes your stethoscope. The nurse who greets properly, keeps promises and guards confidences earns something no hospital can buy: a community that calls early instead of waiting for the crisis. That early call is the safety system itself.",
      },
      {
        type: "case",
        title: "In the field",
        body: "You follow Sister Akosua, who has served the same cluster of villages for fifteen years. At a morning home visit she rechecks a grandfather's blood pressure, counts his tablets, and updates the family on his clinic date. At noon she weighs babies at the compound under the tree, spotting a child slipping down the growth chart and arranging follow-up. In the afternoon she traces two defaulters with a volunteer, and on the way back she stops at the chief's house to plan Sunday's durbar on net use. At the market, three people stop her with questions — and she answers all of them, because that is the job.\n\nWhat can her way of working achieve that a hospital clinic cannot?\n\nAnswer: Continuity and proximity. She sees the conditions the clinic never shows — the cooking pot, the water source, who nods when the grandfather speaks — and because the community knows her, they call her at the first sign of trouble instead of at the crisis. Her registers catch the children slipping through the gaps, and her relationships with the chief and the volunteers multiply every clinic's reach. The hospital treats the sick who arrive; she shapes who arrives, and when.",
      },
      {
        type: "memory_trick",
        body: "The community nurse **CARES** in six directions: **C**linician, **A**dvocate, **R**ecorder and tracker, **E**ducator, **S**entinel for disease — all resting on the support of the community team you build. Six roles, one nurse, one community that learns to call you first.",
      },
      {
        type: "summary",
        body: "- Community nursing = same profession, different centre of gravity: you go to the patient, often alone, with prevention as the main business.\n- Six roles: care provider, educator, recorder and defaulter tracker, advocate, collaborator and team leader, surveillance sentinel.\n- Registers and DHIMS reporting are clinical tools — they steer services and catch defaulters.\n- Trust is your licence to practise: early calls, honest disclosure, accepted advice.\n- Living in the community is both the reward and the boundary challenge — the next modules teach you how to hold that line.",
      },
    ],
    questions: [
      {
        topic: "Community Nursing Roles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which combination best captures what is different about community nursing compared with ward nursing?",
        options: [
          "Higher pay, shorter hours and a smaller caseload",
          "Care delivered where people live, working often alone, with prevention and health promotion at the centre",
          "No need for clinical skills, only health talks",
          "The patient always travels to you with a complete folder",
        ],
        correctIndex: 1,
        explanation:
          "Community nursing moves the care to the patient's environment, works with minimal immediate backup, and makes prevention, promotion and continuity its central business. Clinical skill is as essential as on the ward — arguably more, because you decide alone.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Nursing Roles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The child welfare register at your CHPS compound shows four children who missed their third immunization dose. The register is serving mainly as:",
        options: [
          "A census instrument for the national statistical service",
          "A defaulter-tracing tool that triggers you to find the children in the community",
          "Proof for the parents that their children are unhealthy",
          "A record of stock issued to the compound",
        ],
        correctIndex: 1,
        explanation:
          "Registers double as defaulter lists — the community nurse's early-warning system. A missed dose in the book becomes a visit through the lanes, a conversation with the family and, most often, a child protected. That active loop is what separates community nursing from static record keeping.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Nursing Roles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is trust described as the community nurse's licence to practise?",
        options: [
          "It is a legal requirement printed on the practising certificate",
          "Because a community that trusts the nurse calls early, discloses honestly and accepts advice — the system that makes care safe",
          "It replaces the need for clinical knowledge in remote areas",
          "It only matters when the nurse is popular with the chief",
        ],
        correctIndex: 1,
        explanation:
          "In the community, safety lives in the early call: the first heavy pad, the first fever, the missed dose. Families only make that call for a nurse they know and trust. Clinical competence earns the trust; trust delivers the patient in time.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Nursing Roles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Community health volunteers are best described as:",
        options: [
          "Replacements for the professional nurse in the zone",
          "Trained community members who extend the nurse's reach — mobilising, educating, tracing defaulters — under supervision",
          "Untrained helpers with no defined role",
          "Administrative staff of the district directorate",
        ],
        correctIndex: 1,
        explanation:
          "Volunteers multiply what one nurse can cover: they mobilise communities, deliver health messages, trace defaulters and give early warning — always under the nurse's supervision. The professional judgement, assessment and care remain yours.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Community Nursing Roles",
        front: "Name the six roles of the community health nurse.",
        back: "Care provider; health educator; recorder and defaulter tracker; advocate; collaborator and team leader (supervising volunteers); surveillance sentinel. Mnemonic: CARES — Clinician, Advocate, Recorder, Educator, Sentinel.",
      },
      {
        topic: "Community Nursing Roles",
        front: "How do registers act as clinical tools, not paperwork?",
        back: "They double as defaulter lists and surveillance feeds — a missed dose or a cluster of diarrhoea cases in the book becomes a home visit or a district alert today, not a statistic next year.",
      },
      {
        topic: "Community Nursing Roles",
        front: "Why does trust function as the community nurse's safety system?",
        back: "Families who trust the nurse call at the first warning sign instead of at the crisis — early calls are what make community care safe, and they are earned by kept promises and guarded confidences.",
      },
      {
        topic: "Community Nursing Roles",
        front: "What is the community health volunteer's role?",
        back: "To extend the nurse's reach — mobilisation, health education, defaulter tracing, early warning — under the nurse's supervision; they support professional care, never replace it.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Verify current version with the Council.",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): The Policy and Strategy",
        note: "Roles and realities of CHPS-zone nursing; verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Standard community health nursing reference; verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Beyond the Hospital Walls",
    lessonTitle: "Knowing Your Community: Assessment",
    description:
      "Before you serve a community, study it — the numbers, the leaders, the lanes and the water sources that quietly decide its health.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe community assessment as the first step of the community nursing process.",
      "Identify sources of community health data, from census and DHIMS to key informants and walking surveys.",
      "Apply assessment findings to prioritise a community's real health needs.",
    ],
    tags: ["community assessment", "data", "community diagnosis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You would not prescribe for a patient you had never assessed. Yet nurses are posted to communities every year and begin work without ever examining the place. A community has a body, a history and a set of vital signs — its population, its water, its top causes of clinic attendance — and reading them is a clinical skill, not an administrative one.\n\nThis lesson teaches the community nursing process the way you learned the patient nursing process: assess, diagnose, plan, implement, evaluate. It begins with knowing where the numbers live and where the truths the numbers miss live too.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **community assessment** gathers the facts a zone's health stands on: **demographics** (how many people, their ages, growth through migration); **socio-economics** (occupations, income, education, housing); **culture and beliefs** (health practices, taboo days, festival calendars); **environment** (water sources, sanitation, waste, roads, river crossings, electricity); **health status** (top diagnoses, immunization and antenatal coverage, mortality); and **health resources** (your compound, the nearest health centre and CHAG facility, healers, transport, volunteers).\n\nYour data sources layer on top of each other. The **census** (Ghana Statistical Service) gives the denominators. **DHIMS** — the District Health Information Management System — holds what your own facilities report monthly, including your defaulter rates and coverage. The **Ghana Demographic and Health Survey** gives the regional picture between censuses. Then the qualitative layer: **key informant interviews** with the chief, queen mother, assembly member, teachers and healers; **focus group discussions** with mothers or farmers; and your own **community mapping** and **walking (windshield) survey** — a sketch map of water points, toilets, schools, churches, farms and hazards, walked with a volunteer who knows the lanes. The output is a **community diagnosis** — a statement of the community's health status and its priority needs — which becomes the plan, which becomes your year.",
      },
      {
        type: "table",
        title: "Where the data lives",
        body: "| Source | What it gives you | Watch out for |\n| --- | --- | --- |\n| Census (Ghana Statistical Service) | Population size, age structure, housing | May lag growth through migration |\n| DHIMS | Facility attendances, coverage, defaulters — your own zone's detail | Only counts people who reached a facility |\n| Ghana Demographic and Health Survey | Regional mortality, nutrition, fertility trends | Regional, not village-level |\n| Key informants and focus groups | Beliefs, barriers, rumours, access problems | Individual perspective — triangulate several |\n| Community map and walking survey | Distance, terrain, hazards, resources | Needs repeated after seasons change |",
      },
      {
        type: "case",
        title: "In the field",
        body: "You arrive at a new posting. The DHIMS numbers show good first antenatal visits but poor fourth visits, and a rise in teenage pregnancy. On your walking survey with a volunteer, you find the antenatal clinic is a two-hour walk for the far villages, and the river crossing is impassable in the rainy season. In a focus group, the mothers mention a belief that too many clinic visits 'invite the evil eye'. The queen mother, when you visit her, says simply: 'Our girls have nowhere to go and nothing to do.'\n\nWhat is your community diagnosis, and where do you start?\n\nAnswer: The data triangulates into a clear picture: access and belief are suppressing late antenatal coverage, and social conditions are driving teenage pregnancy. Your priorities: negotiate outreach antenatal dates for the far villages (and a wet-season alternative for the crossing), involve the queen mother and the mothers' own belief leaders in re-framing the fourth visit, and build a youth corner with the volunteers and teachers. Numbers showed the problem; walking and listening revealed its causes and its allies.",
      },
      {
        type: "quiz_prompt",
        title: "Check yourself",
        body: "Name three sources of community health data you could access in your first week at a new posting.\n\nAnswer: The census and Ghana Statistical Service reports for population; DHIMS data at the district directorate for your zone's service coverage; and key informant interviews with the chief, queen mother or assembly members — plus your own walking survey. Statisticians give you the shape of the problem; the people give you its reasons.",
      },
      {
        type: "memory_trick",
        body: "Count your community on **five fingers**: **Heads** (demographics), **Homes** (environment and sanitation), **Health** (status data from DHIMS), **Helpers** (resources, leaders, volunteers), **Habits** (culture, beliefs, practices). Five fingers folded into a fist — that is your community diagnosis.",
      },
      {
        type: "summary",
        body: "- Community assessment is a clinical act: the community is your patient, and the nursing process applies — assess, diagnose, plan, implement, evaluate.\n- Six domains: demographics, socio-economics, culture, environment, health status, health resources.\n- Data layers: census and DHIMS for numbers; GDHS for context; key informants, focus groups and walking surveys for the truths numbers miss.\n- A community diagnosis states the priority needs — it becomes the year's plan.\n- Triangulate: no single source, however official, knows the whole community.",
      },
    ],
    questions: [
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 'community diagnosis' is best described as:",
        options: [
          "The mental illness the community's nurse develops from overwork",
          "A statement of a community's health status and priority needs, derived from assessment data",
          "The list of diseases the district hospital treats",
          "A census report filed with the national statistics office",
        ],
        correctIndex: 1,
        explanation:
          "Just as a patient diagnosis summarises assessment findings into a statement that drives care, the community diagnosis summarises demographic, environmental and health data into the community's priority problems — the basis of your plan for the year.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "DHIMS is best described as:",
        options: [
          "A donor agency funding community projects",
          "The District Health Information Management System holding routine data reported by health facilities",
          "A nationwide census conducted every year",
          "A laboratory information system for regional hospitals",
        ],
        correctIndex: 1,
        explanation:
          "DHIMS carries the routine reports from CHPS compounds, health centres and hospitals — attendances, coverage, defaulters, disease surveillance. It is your own zone's mirror: detailed about those who reach services, silent about those who never do.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "DHIMS shows low completion of childhood immunization in one village, but coverage is excellent everywhere else. The most useful next assessment step is:",
        options: [
          "Report the village to the district for sanction",
          "A walking survey and key informant interviews in that village to find the barrier",
          "Nothing — the data alone is enough to write the community diagnosis",
          "Repeat the DHIMS report until the numbers improve",
        ],
        correctIndex: 1,
        explanation:
          "The number tells you WHERE the problem lives; qualitative assessment tells you WHY — a river crossing, a rumour after a side-effect, a market-day clash or a moved family. Walking and listening in that village converts a statistic into an intervention.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The main reason to include chiefs, queen mothers and healers in community assessment is:",
        options: [
          "To fulfil a paperwork requirement of the directorate",
          "They hold knowledge of beliefs, barriers and social dynamics that no dataset contains — and their support decides whether interventions are adopted",
          "They are legally responsible for the community's health data",
          "It shortens the walking survey",
        ],
        correctIndex: 1,
        explanation:
          "Key informants carry the community's unwritten health map — what people believe, fear, and follow. Including them is both good assessment (data the census cannot hold) and good strategy: plans announced at the chief's palace travel further than plans announced on leaflets.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Community Assessment",
        front: "What is a community diagnosis?",
        back: "A statement of a community's health status and priority needs, derived from assessment — the first step's output and the plan's foundation.",
      },
      {
        topic: "Community Assessment",
        front: "What does DHIMS give you, and what does it not?",
        back: "The District Health Information Management System gives facility-reported detail: attendances, coverage, defaulters, surveillance. It counts only those who reach a facility — the unreached need walking and listening.",
      },
      {
        topic: "Community Assessment",
        front: "Name the five assessment domains on the 'five fingers'.",
        back: "Heads (demographics), Homes (environment), Health (status data), Helpers (resources and leaders), Habits (culture and beliefs).",
      },
      {
        topic: "Community Assessment",
        front: "What is a walking (windshield) survey?",
        back: "Systematic observation of the community's conditions while moving through it — water points, sanitation, terrain, hazards, resources — ideally guided by a local volunteer, repeated across seasons.",
      },
    ],
    sources: [
      {
        organization: "Ghana Statistical Service",
        title: "Population and Housing Census",
        year: "2021",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS) Reporting Guidelines",
        note: "Verify current guidance with the district directorate.",
      },
      {
        organization: "Ghana Statistical Service & ICF",
        title: "Ghana Demographic and Health Survey",
        note: "Latest edition available from GSS; check for the current round.",
      },
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Community assessment chapters; verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "The Home Visit",
    lessonTitle: "Home Visiting: The Art of Respectful Entry",
    description:
      "How to arrive so that doors open — the greeting, the permission, the observation, and the exit that leaves a plan behind.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the phases of a purposeful home visit, from preparation to exit teaching.",
      "Explain respectful entry in the Ghanaian context — greeting, permission and privacy.",
      "Apply observation skills within the home without breaking the trust that brought you in.",
    ],
    tags: ["home visit", "communication", "respect"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A home visit can drift: you greet, glance at the patient, and leave having learned nothing. Or it can be one of the sharpest clinical instruments you own — a structured assessment that sees what the clinic never shows. Two things make the difference: structure, and entry.\n\nEntry is the part they do not teach on the ward. In a house you are a guest before you are a nurse, and the household decides which one stays. This lesson covers both halves — how to arrive, greet and earn your welcome, and how to turn that welcome into an assessment that protects the family.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Preparation** happens before you knock: review the record or folder, know exactly why you are going, pack your kit (blood pressure set, thermometer, scale, gloves, dressings, forms, soap and water), and time the visit to the household's rhythm — not market day, not farm hours. Share your itinerary for safety, and greet in the local language.\n\n**Entry** follows the household's rules, not yours. Greet everyone present, elders and the household head first — even when your patient is a young mother, the elder's welcome is the door itself. Accept the stool they offer; the pleasantries are not wasted minutes, they are the consultation fee of trust. State your purpose honestly and simply. Then ask **permission** — before you examine, before you move anything, before you write in your notes — and negotiate **privacy**: a side room, a screened corner, or a request to visitors for a few minutes. Examination without permission in a home is not boldness; it is a breach that closes the next visit.\n\n**Observation** runs quietly underneath: the cooking pot, the water storage, the net hanging over the bed, who answers for whom, and how the patient looks in doorway light. And **exit** is clinical, not social: teach what matters with teach-back, agree the next contact, and write your notes before you leave the compound — a bumpy road will edit your memory.",
      },
      {
        type: "clinical_pearl",
        body: "The greetings are the consultation fee of trust — pay them in full before you touch a clinical instrument. And ask permission as if the house belongs to the patient, because it does; you are the guest, and the compound is your new consulting room.",
      },
      {
        type: "case",
        title: "In the field",
        body: "A child on your register has missed two immunization dates, and you visit. The compound gate is open, but the grandmother who receives you is cold: 'We don't want injections for this child.' You do not argue at the gate. You greet her properly, accept the stool, and listen — and learn that a neighbour's baby fell sick for two days after a dose, and the story settled in the compound like dust.\n\nWhat do you do with the next five minutes?\n\nAnswer: Work the grandmother's fear, not her resistance. Acknowledge the story respectfully ('That must have frightened everyone'), explain gently that fever after a dose is the body learning, and that the baby recovered — and that the diseases the vaccines prevent do not always recover so kindly. Offer, don't insist: 'May I explain what the measles dose protects him from?' If she still refuses, leave the door open — the agreed next contact, the volunteer who can talk with her again, your name — and document her exact words and your teaching. A refusal today, handled with respect, becomes a consent next month; a confrontation today becomes a closed gate for years.",
      },
      {
        type: "quiz_prompt",
        title: "Check yourself",
        body: "You need to examine a patient in a compound full of visitors. What two things must you negotiate before you touch the stethoscope?\n\nAnswer: Permission — from the patient (and the household head where custom expects it) — and privacy: a side room, a screened corner, or a polite request to the visitors. Examination in a home without either is an intrusion, and intrusions are not invited back.",
      },
      {
        type: "memory_trick",
        body: "Walk every visit through **V.I.S.I.T.**: **V**alue the greeting (elders first, in their language); **I**ntroduce yourself and your honest purpose; **S**eek permission — for examination, privacy and notes; **I**nspect the environment as you work; **T**each with teach-back — then **T**ake your notes before you travel. If you finish a visit without the word VISIT, you were only passing through.",
      },
      {
        type: "summary",
        body: "- Prepare before you knock: record, purpose, kit, timing, itinerary shared for safety.\n- Greet the household — elders and the household head first — in the local language; accept the stool.\n- State your purpose honestly and ask permission before examining, moving or writing.\n- Negotiate privacy before any assessment; observation continues quietly throughout.\n- Exit is clinical: teach-back, next contact agreed, notes written before you leave the compound.\n- A respectful refusal handled today is a consent waiting for next month.",
      },
    ],
    questions: [
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You arrive at a compound for a scheduled home visit. What is the best first action?",
        options: [
          "Weigh the patient immediately to save time",
          "Greet the household, elders first, introduce yourself and ask permission before assessing anyone",
          "Scold the family for missing their clinic appointment",
          "Ask the neighbours how the patient is doing before entering",
        ],
        correctIndex: 1,
        explanation:
          "Respect opens the door to honest disclosure. Greeting the household — with elders and the head first — introducing yourself and asking permission builds the trust the whole visit and every future visit depends on. It is a professional requirement, not a courtesy.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should you greet the household head and elders first, even when your patient is a young adult in the same house?",
        options: [
          "Because the elders are always the patients in the end",
          "Because the elder's welcome controls access to the household, and their support decides whether your advice is followed after you leave",
          "It is only about politeness and has no clinical meaning",
          "Because young patients must never be spoken to directly",
        ],
        correctIndex: 1,
        explanation:
          "In many Ghanaian households, the elder or head controls access and often the decisions — what is eaten, whether the patient travels to the clinic, what is bought. Winning the elder's welcome is not deference; it is the clinical unlock for every recommendation you make.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family refuses your visit: 'We did not call you, and we don't need the clinic.' Your best response is to:",
        options: [
          "Insist on entering, since the referral gives you authority",
          "Argue forcefully until they accept the visit",
          "Stay respectful, state the purpose of your visit and the danger signs to watch, leave a contact, and document the refusal and follow-up plan",
          "Report the family to the police immediately",
        ],
        correctIndex: 2,
        explanation:
          "Forcing entry wins the compound and loses the patient. Respectful exit with a stated purpose, danger-sign teaching and a contact keeps the door ajar; documenting the refusal protects both the family's record and you. Escalation is reserved for situations of immediate danger to a child or dependent adult, through proper channels.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "The Home Visit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should home visit notes be written before you leave the compound?",
        options: [
          "Because families like to watch you write",
          "Because contemporaneous notes capture exact findings and times before the road and the afternoon edit your memory",
          "Because the register cannot be updated later at the compound",
          "It makes no difference to the record's value",
        ],
        correctIndex: 1,
        explanation:
          "Contemporaneous recording is the standard: details, times and exact words fade fastest after the visit — and the ones you lose are the ones the next carer needs most. The doorstep note is the safest note.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "The Home Visit",
        front: "What does V.I.S.I.T. stand for?",
        back: "Value the greeting (elders first); Introduce yourself and your purpose; Seek permission — for examination, privacy, notes; Inspect the environment as you work; Teach with teach-back — then Take notes before travelling.",
      },
      {
        topic: "The Home Visit",
        front: "Why must permission be asked before examining in a home?",
        back: "The house belongs to the patient — you are a guest. Permission and negotiated privacy protect dignity and trust; examination without them closes the door to every future visit.",
      },
      {
        topic: "The Home Visit",
        front: "How should you handle a refused home visit?",
        back: "Stay respectful, state your purpose and the danger signs, leave a contact, keep the door open, involve a trusted intermediary (volunteer, elder) — and document the refusal, the teaching and the follow-up plan.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Home visiting chapters; verify current edition.",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): The Policy and Strategy",
        note: "Home visiting within the CHPS package; verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Consent, dignity and professional behaviour; obtain current version from the Council.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "The Home Visit",
    lessonTitle: "Family Assessment at Home",
    description:
      "One visit, the whole household — structure, health, environment and the support network that decides whether your care plan survives.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Apply the HOUSE framework to assess a whole family in a single home visit.",
      "Explain what a quick genogram adds — who lives, who cares, and who decides.",
      "Interpret household environment findings and turn them into the family's care plan.",
    ],
    tags: ["family assessment", "home", "environment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Individuals fall ill inside families. The man whose blood pressure keeps climbing lives in a household where someone else holds the salt, someone else controls the money, and someone else will decide — at 2 a.m. — whether he travels to the hospital. Assess the patient and you get a patient; assess the family and you get a plan that can actually work.\n\nThe clinical skills are ones you already own — observation, measurement, conversation. What changes is the frame. This lesson gives you a house-shaped frame that fits inside one visit: HOUSE.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**HOUSE** walks the family the way a ward round walks the bay. **H — Household**: who lives here, and how are they related? A quick **genogram** — three generations sketched in sixty seconds — maps it: the grandfather with the stroke, the daughter-in-law who cooks, the eldest son in Kumasi who sends money and makes the decisions. Note who cares for the patient daily, because that person is your co-nurse. **O — Occupants' health**: a brief pass over every member — chronic conditions, medicines, pregnancy, childhood immunization status, disabilities — then your index patient in detail. **U — Use of the home**: water source and how it is stored, toilet and waste, kitchen and food store, ventilation, sleeping spaces, bed nets, vectors, hazards. This is where environment becomes diagnosis: an uncovered drinking-water pot is a diarrhoea case waiting for the rains. **S — Support**: income and its seasonality, NHIS coverage, distance and transport to the facility, the social network — church, relatives, volunteers — and the caregiver's own health and workload. **E — Exit**: sit with the family, summarise in plain words, teach with teach-back, agree the next contact, and write the record before you leave.",
      },
      {
        type: "table",
        title: "The HOUSE assessment at a glance",
        body: "| Domain | What you look for | Why it matters |\n| --- | --- | --- |\n| Household | Who lives here, who cares, who decides (quick genogram) | The care plan lives or dies with the caregiver and the decision-maker |\n| Occupants' health | Each member's conditions, medicines, immunization, pregnancy | Illness hides in the others — and the index patient sits inside a web of risk |\n| Use of the home | Water storage, toilet, waste, kitchen, nets, hazards | Environment is the commonest cause of the family's recurring problems |\n| Support | Income, NHIS, transport, distance, social network, caregiver burden | Determines what advice is realistic and what will collapse by next month |\n| Exit | Summary, teach-back, next contact, notes at the door | Turns a visit into a plan — and a plan into a record |",
      },
      {
        type: "clinical_pearl",
        body: "Assess the caregiver as carefully as the patient. The person who cooks, cleans and decides at 2 a.m. is your co-nurse — exhausted, unpaid and often invisible. A care plan that ignores them is a plan written for a ward that does not exist.",
      },
      {
        type: "case",
        title: "In the field",
        body: "You visit a 68-year-old diabetic man for a foot check. The HOUSE opens: his genogram shows a grandson who does the cooking while the man's son — the decision-maker — works in Kumasi; the man's medicines ran out two weeks ago because no one was sent to the health centre. In the kitchen, the grandson proudly shows you the heavy palm-oil stews; the drinking water stands uncovered by the door; and the grandson sleeps without a net, though he has had malaria twice this year. The man's wife, his main caregiver, looks tired and thin, and has never had her own blood pressure checked.\n\nWhat does your care plan hold when you sit at the exit?\n\nAnswer: The foot check becomes the doorway to the family's care: refill and clinic date arranged with the grandson, low-salt, oil-light cooking taught to the very person who cooks, water storage covered (and a narrow-mouthed pot suggested), a net sourced for the grandson before the rains, and the wife's own blood pressure checked — she registers hypertensive, a new patient found inside a visit she was not the reason for. A call to the son in Kumasi, with the grandfather's permission, secures the money and the decisions. One HOUSE visit, five care threads.",
      },
      {
        type: "memory_trick",
        body: "Walk every family visit through the **HOUSE**: **H**ousehold (who lives, who cares, who decides), **O**ccupants' health (every member, briefly), **U**se of the home (water, waste, kitchen, nets), **S**upport (money, NHIS, transport, people), **E**xit (teach-back, plan, record). If you did not walk all five rooms, you are still standing at the door.",
      },
      {
        type: "summary",
        body: "- Families, not just individuals, are the unit of community care.\n- HOUSE: Household, Occupants' health, Use of the home, Support, Exit.\n- A sixty-second genogram maps relationships — and reveals the caregiver and the decision-maker.\n- Environment findings are diagnoses: uncovered water, missing nets, harmful cooking practices.\n- Support determines realism: money, NHIS, transport and people decide what advice survives.\n- Exit converts the visit into a taught, agreed, recorded plan.",
      },
    ],
    questions: [
      {
        topic: "Family Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the HOUSE framework for family assessment, the 'U' stands for:",
        options: [
          "Urgent problems only",
          "Use of the home — water, sanitation, kitchen, sleeping spaces and hazards",
          "Units of medicine the patient takes",
          "The uncle of the household",
        ],
        correctIndex: 1,
        explanation:
          "Use of the home examines how the household actually lives: how water is stored, where waste goes, what is cooked, who sleeps under a net. It converts the environment into clinical data the clinic can never collect.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Family Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why does the community nurse sketch a quick genogram during a family assessment?",
        options: [
          "To have a decorative diagram for the folder",
          "To map who lives in the household, who cares for the patient daily, and who makes decisions — the people a care plan must carry",
          "To calculate the family's income precisely",
          "To determine the family's tribe and religion",
        ],
        correctIndex: 1,
        explanation:
          "Three generations sketched in a minute reveal the household's working structure: the daily caregiver who will deliver your plan, and the decision-maker — often far away — whose consent and money it also needs. Care plans built on the genogram are plans built for real people.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Family Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a family assessment, you find drinking water stored in an open bucket by the door and a child with two episodes of diarrhoea this year. The best interpretation is:",
        options: [
          "Coincidence — water storage and diarrhoea are unrelated",
          "An environment-to-illness link that belongs in your assessment and your teaching: cover the water, narrow the mouth, use a dedicated cup",
          "The family needs to be reported for negligence",
          "The child should simply be given more water",
        ],
        correctIndex: 1,
        explanation:
          "Open storage lets hands, dust, insects and animals contaminate the household's water — a classic environment-to-illness link. Covering the container, choosing a narrow mouth and a dedicated cup are cheap, teachable changes that interrupt the cycle. Blame closes homes; teaching fixes them.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Family Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your patient's main caregiver — his wife — looks exhausted and has never had her own blood pressure checked. The most appropriate action is:",
        options: [
          "Note it mentally and continue focusing only on the patient",
          "Check her blood pressure and address her health as part of the same visit — she is part of the family assessment, and the plan depends on her survival",
          "Refer her to the teaching hospital immediately",
          "Tell her to rest more and say nothing clinical",
        ],
        correctIndex: 1,
        explanation:
          "The caregiver is the care plan's engine; her collapse would undo everything you arrange for the patient. Family assessment deliberately includes her — a quick check, teaching, and her own follow-up — because households stay healthy together or not at all.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Family Assessment",
        front: "What does HOUSE stand for in a family home visit?",
        back: "Household (who lives, who cares, who decides), Occupants' health (every member), Use of the home (water, waste, kitchen, nets), Support (income, NHIS, transport, people), Exit (teach-back, plan, record).",
      },
      {
        topic: "Family Assessment",
        front: "What is a genogram and why take sixty seconds for one?",
        back: "A quick sketch of three or more generations showing relationships. It reveals the daily caregiver (your co-nurse) and the decision-maker (whose consent and money the plan needs) — the people without whom advice stays on paper.",
      },
      {
        topic: "Family Assessment",
        front: "Give three 'Use of the home' findings with direct clinical meaning.",
        back: "Uncovered drinking water (contamination → diarrhoea); no bed net over a child's bed (malaria); salt-heavy cooking by a hypertensive patient's household (blood pressure control).",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Family assessment chapters; verify current edition.",
      },
      {
        organization: "Wolters Kluwer",
        title: "Allender, Rector & Warner, Community and Public Health Nursing: Promoting the Public's Health",
        note: "Family health assessment tools; verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Housing and Health Guidelines",
        year: "2018",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "The Home Visit",
    lessonTitle: "Care in the Home: Wounds, Chronic Disease & Hygiene",
    description:
      "Nursing that travels — clean dressings on a stool, blood pressure under a tree, and the hygiene teaching that outlasts your visit.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Apply clean technique for wound care in the home setting.",
      "Deliver structured follow-up for hypertension and diabetes at home, aligned to WHO PEN principles.",
      "Teach home hygiene — handwashing, safe water and food safety — in ways families can afford.",
    ],
    tags: ["home care", "wound care", "chronic disease", "hygiene"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The hospital has sterile packs, trolleys and a sterilizing unit down the corridor. The home has a stool, daylight and whatever you carried. Does that make home nursing second-class? No — it makes it principled. The same infection-control logic, adherence discipline and hygiene teaching travel with you; only the scenery changes.\n\nThis lesson is the practical heart of home care: dressing a wound on a kitchen stool, doing a hypertension review under a tree, checking a diabetic's feet between his toes, and leaving behind a household that washes hands and covers its water — using WHO's PEN approach to noncommunicable disease care at the primary level.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Wound care at home runs on clean technique.** Wash your hands before and after with soap and water (or carry your own); set a clean field — a freshly washed cloth on a table, not the bed; glove when you have them; clean the wound with normal saline or clean water boiled and cooled; carry your dressings in a closed bag, and dispose of soiled dressings and sharps safely — burn or bury per local practice, or carry them back to the compound. Assess every wound the way the ward taught you: size, edges, exudate, odour, surrounding skin, pain. And know the red flags that end home care: spreading redness, pus, foul odour, fever, uncontrolled pain, or bone or tendon visible in the base — especially in a diabetic foot, where infection climbs quietly and limbs are lost late.\n\n**Chronic disease follow-up is discipline, not drama.** For hypertension: check the blood pressure, **count the tablets** — an empty strip explains a 'medicine that stopped working' better than any machine — teach salt reduction in real Ghanaian cooking terms, and refer same-day for readings of 180/110 or more with headache, chest pain, breathlessness or blurred vision. For diabetes: inspect the feet at every visit, between the toes included, and teach daily self-inspection (a mirror on the floor for elderly eyes); reinforce regular meals, and for patients on insulin, teach storage it can survive — a cool dark place, a clay pot kept damp, never a hot room or sunlight, and the date it was opened written on the vial. The WHO **PEN** package — essential interventions for noncommunicable disease at primary care — is your evidence base for all of it.\n\n**Hygiene teaching must be affordable or it is fiction.** A tippy-tap handwashing station made from a jerrycan, string and soap saves lives at almost no cost; drinking water stored covered in a narrow-mouthed container with one dedicated cup; food covered and hands washed before cooking; waste swept and buried or burned away from play areas.",
      },
      {
        type: "clinical_pearl",
        body: "Count the tablets before you count the symptoms. An empty medicine strip found on a stool tells you more about 'the drug stopped working' than any reading you take that day — and turns a failed prescription into a solvable problem: access, money, memory or belief.",
      },
      {
        type: "table",
        title: "Home hygiene teaching that sticks",
        body: "| Practice | The affordable version | Why it matters |\n| --- | --- | --- |\n| Handwashing | Tippy-tap from a jerrycan, string and soap at the compound entrance | Hands are the commonest vehicle of diarrhoeal disease into the family |\n| Safe water | Covered, narrow-mouthed storage with one dedicated cup | Open pots collect hands, dust, insects — and the rains collect illness |\n| Food safety | Cover food, cook fresh, wash hands before cooking | Prevents contamination in harmattan dust and rainy-season flies |\n| Waste and toilets | Sweep, bury or burn refuse away from play areas; use and maintain the toilet | Breaks the flies-and-fingers cycle of intestinal disease |",
      },
      {
        type: "case",
        title: "In the field",
        body: "You arrive for Mr. Ofori's routine diabetic foot dressing — a small ulcer under the great toe, clean and healing last week. Today the edges are ragged, redness has climbed to the instep, the exudate smells different, and his wife mentions he had fever in the night. He says the foot 'is just hot, it will settle'.\n\nWhat has changed, and what do you do?\n\nAnswer: This is no longer a healing ulcer — spreading redness, changed exudate, odour and fever in a diabetic mean ascending infection, the exact red flag that ends home care. Do not apply the routine dressing and leave: keep the foot elevated and weight off it, tell the family plainly that this travels to the health centre today, call ahead with a spoken handover, and write the referral note with your findings, dates and the ulcer's history. Then — because a preventable recurrence is also your business — re-teach the foot routine: daily inspection, feet never bare, and reporting any hot spot the day it appears, not the week it swells. Mr. Ofori's 'it will settle' is how diabetic feet are lost; your 'today' is how they are saved.",
      },
      {
        type: "memory_trick",
        body: "The home-care bag runs on the **five C's**: **C**lean hands, **C**lean field, **C**lean solution (boiled and cooled, or saline), **C**lean dressing kept closed, **C**lean disposal — and while you are there, **C**ount the tablets. Five C's, one finger-length of soap, and a wound that heals instead of a limb that doesn't.",
      },
      {
        type: "summary",
        body: "- Home wound care = clean technique: hand hygiene, clean field, saline or boiled-and-cooled water, closed bag, safe disposal.\n- Wound red flags for same-day referral: spreading redness, pus, odour, fever, exposed bone or tendon — treat diabetic feet as emergencies-in-waiting.\n- Chronic follow-up: blood pressure and pill counts at every visit; salt teaching in real cooking terms; 180/110 with symptoms travels today.\n- Diabetes feet: inspect between the toes every visit; teach daily self-inspection and 'no bare feet'.\n- Insulin at home: cool, dark, clay-pot storage; date opened; never heat or sunlight.\n- Hygiene teaching must be affordable: tippy-taps, covered narrow-mouthed water, one dedicated cup.",
      },
    ],
    questions: [
      {
        topic: "Care in the Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best describes 'clean technique' for wound dressing in a home?",
        options: [
          "Sterile technique is impossible at home, so any approach is acceptable",
          "Hand hygiene, a freshly washed field, saline or boiled-and-cooled water, supplies carried closed, and safe disposal — reducing pathogens to a level the body can handle",
          "It means using alcohol on the wound itself each time",
          "It means dressing the wound less often than in hospital",
        ],
        correctIndex: 1,
        explanation:
          "Clean technique adapts infection control to the setting: clean hands, clean field, clean solution, closed supplies and safe disposal. It is not carelessness — it is the deliberate application of the same principles with the means the home provides.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Care in the Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At a routine home dressing of a diabetic foot ulcer, you find spreading redness up the foot, changed odorous exudate and a report of fever overnight. The correct action is:",
        options: [
          "Apply the routine dressing and review next week",
          "Same-day referral with call-ahead, the foot elevated and weight off until the journey",
          "Advise stronger herbs from the family's healer",
          "Tell the patient to complete his antibiotics first if any remain",
        ],
        correctIndex: 1,
        explanation:
          "Spreading redness, altered exudate and fever in a diabetic foot is ascending infection — the red flag that ends home care. Elevation, urgent same-day referral with a spoken handover and a written note protect the limb; waiting is how diabetic feet are lost. Continuing leftover antibiotics without assessment is not a plan.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Care in the Home",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your hypertensive patient says his medicine 'stopped working' — his blood pressure is high again. Before adjusting your thinking, you should:",
        options: [
          "Assume the tablets have lost their potency and blame the pharmacy",
          "Count the remaining tablets to check adherence and ask how he has been taking them",
          "Double the dose yourself",
          "Refer him to the teaching hospital the same day",
        ],
        correctIndex: 1,
        explanation:
          "The commonest cause of 'failure' is tablets not taken — finished early, shared, saved for bad days, or simply unaffordable this month. The pill count plus a respectful question turns a mystery into a solvable problem: access, cost, side effect or belief.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Care in the Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A diabetic patient on insulin has no refrigerator. The best storage teaching is:",
        options: [
          "Insulin cannot be used without electricity — he must move house",
          "Keep it cool and dark — a damp clay pot away from the kitchen fire and sunlight — and write the date it was opened on the vial",
          "Keep it in the sun to stay warm",
          "Store it in the freezer at a neighbour's shop",
        ],
        correctIndex: 1,
        explanation:
          "Heat and sunlight degrade insulin, but many Ghanaian homes keep it serviceable in cool, dark places — the damp clay pot is a well-known evaporative-cooling method. Marking the date opened tracks its safe in-use period. Freezing destroys it; moving house is not a care plan.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Care in the Home",
        front: "What are the five C's of the home-care bag?",
        back: "Clean hands, clean field, clean solution (saline or boiled-and-cooled water), clean dressing kept closed, clean disposal — plus counting the tablets at every chronic follow-up.",
      },
      {
        topic: "Care in the Home",
        front: "Name four wound red flags that end home care and trigger same-day referral.",
        back: "Spreading redness, pus or changed exudate, foul odour, fever — plus uncontrolled pain or visible bone/tendon. In a diabetic foot, treat these as limb-threatening.",
      },
      {
        topic: "Care in the Home",
        front: "How does WHO PEN guide the community nurse?",
        back: "The Package of Essential Noncommunicable Disease Interventions defines the evidence-based minimum — risk assessment, blood pressure and diabetes protocols, counselling and referral criteria — that even a low-resource CHPS service can deliver.",
      },
      {
        topic: "Care in the Home",
        front: "Teach one affordable handwashing and one water-storage improvement for homes.",
        back: "Handwashing: a tippy-tap (jerrycan, string, soap) at the compound entrance. Water: covered, narrow-mouthed storage with a single dedicated cup.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions for Primary Health Care",
        year: "2020",
      },
      {
        organization: "CDC",
        title: "Handwashing: Clean Hands Save Lives",
        note: "Community hand hygiene teaching resources.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Guidelines for Noncommunicable Disease Management at Primary Care",
        note: "Verify current edition with the district directorate.",
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
    courseSlug: "community-health-nursing-1",
    moduleTitle: "The Home Visit",
    lessonTitle: "Health Education in the Community",
    description:
      "From one-to-one teaching under a mango tree to the durbar that moves a whole village — messages that change what people actually do.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the channels of community health education and match each to its audience.",
      "Apply teach-back and adult-learning principles so messages survive the compound.",
      "Explain the stages of behaviour change and target teaching to the stage a person has reached.",
    ],
    tags: ["health education", "teaching", "behaviour change"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Knowledge does not equal behaviour. Every village knows mosquitoes carry malaria, yet nets sit in their wrappers; everyone knows hands spread germs, yet the soap stays for guests. The gap between knowing and doing is where community health education lives — and closing it is a craft, not a megaphone.\n\nThis lesson covers the channels you can command — the bedside, the mothers' group, the school, the durbar, the FM radio — and the teaching skills that decide whether your message is heard once and forgotten, or heard once and done.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Adults learn by doing, not by listening.** Demonstration with practice — washing hands at the tippy-tap while you watch — beats an hour of talk. Know your audience's **language and literacy**: teach with pictures, demonstrations and local proverbs rather than leaflets. Start from **their** problem, not yours: a mother worried about school missed through illness will hear net-and-de-worming messages through that door. Time it to their calendar — market day, after harvest, after the rains, never during planting.\n\n**Stages of change** tell you what to say. A person in **precontemplation** ('nets are hot, mosquitoes are nothing') needs dialogue and awareness, not instructions. In **contemplation** ('I know I should… but'), they need barriers explored — cost, heat, shape of the bed. In **preparation**, they need a concrete first step — 'shall we hang it now, together?' In **action**, they need praise and problem-solving; in **maintenance**, they need re-teaching before the next season. **Verification closes the loop**: teach-back — 'so that I know I explained it well, show me the steps' — moves the burden of understanding from the listener to you, where it belongs.\n\nYour channels stack: **one-to-one** (home visit, clinic — for personal, sensitive, behaviour-specific teaching); **small groups** (mothers' clubs, school health clubs — for practice and peer support); **community events** (durbars at the chief's palace, church and mosque announcements — for legitimacy and reach); and **mass media** — the community FM station in the local language, which travels further than any leaflet ever printed.",
      },
      {
        type: "table",
        title: "Choosing your channel",
        body: "| Channel | Best for | Tip |\n| --- | --- | --- |\n| One-to-one at home or clinic | Personal risk, behaviour change, sensitive topics | Teach-back is mandatory — it is your only proof of understanding |\n| Small group (mothers' club, school club) | Skills practice and peer support | Everyone demonstrates; the shy practice first in pairs |\n| Community event (durbar, church, mosque) | Legitimacy and mass reach | Brief the chief or leader first — their endorsement is your microphone |\n| Local FM radio | Whole-community awareness, season-timed campaigns | Three minutes in Twi or Dagbani beats a thousand leaflets |",
      },
      {
        type: "callout",
        title: "The radio advantage",
        body: "Ghana's community FM stations, broadcasting in Twi, Ewe, Dagbani and more, reach into kitchens, farms and taxis where no nurse can stand. A three-minute morning-show slot after the diarrhoea season, in the language of the listeners, is the cheapest mass education in the district — build the relationship with the presenter before the outbreak, not during it.",
      },
      {
        type: "case",
        title: "In the field",
        body: "After a cluster of diarrhoea cases, you run handwashing teaching at the basic school. You do not lecture: the class builds two tippy-taps from jerrycans, string and soap; every child washes with the six steps while you watch; the head teacher asks each class to demonstrate back at assembly — your teach-back at scale. Two weeks later you return: both stations stand, soap is refilled, and the PTA has agreed to buy soap each term.\n\nWhat made the teaching stick, and what would have made it fail?\n\nAnswer: It stuck because the children practiced rather than listened, the station was visible and theirs, the demonstration was verified back, and an institution — the PTA — carried the cost of continuing. It would have failed as a poster on a wall: no practice, no ownership, no supply, no proof of understanding. Health education is engineering a behaviour into daily life, not announcing information into the air.",
      },
      {
        type: "memory_trick",
        body: "Make every session **T.E.A.C.H.**: **T**arget your audience's language, literacy and calendar; **E**ngage them in doing, not listening; **A**dapt the message to their stage of change; **C**heck with teach-back; **H**elp them take one affordable first step before you part.",
      },
      {
        type: "summary",
        body: "- Knowledge ≠ behaviour; education is engineering doing, not announcing knowing.\n- Adults learn by practice: demonstrate, let them do, verify.\n- Match the channel to the job: bedside, group, durbar, or FM radio in the local language.\n- Stages of change (precontemplation → contemplation → preparation → action → maintenance) decide your message.\n- Teach-back shifts the burden of understanding to the teacher — where it belongs.\n- Involve the structures that will still be there next term: PTA, church, chief's palace.",
      },
    ],
    questions: [
      {
        topic: "Health Education",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A nurse finishes teaching a mother about preparing oral rehydration and says: 'So that I know I explained it well — tell me how you will mix it when you get home.' This technique is:",
        options: [
          "Interrogation, and should be avoided as it offends",
          "Teach-back — verification that shifts the burden of understanding to the teacher and exposes gaps safely",
          "A test the mother must pass before discharge",
          "Documentation, and has nothing to do with teaching",
        ],
        correctIndex: 1,
        explanation:
          "Teach-back asks the learner to return the information or demonstrate the skill, proving the teaching landed and revealing what needs re-teaching — framed as a check on the teacher, not an exam of the mother. It is the single most protective habit in patient education.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You need to reach every adult in a large rural community with a season-timed message about net use before the rains. The most effective primary channel is:",
        options: [
          "A printed leaflet in English distributed at the clinic",
          "The local FM station in the community's own language, backed by durbar announcements and home-visit follow-up",
          "A poster in the district hospital corridor",
          "A WhatsApp message to the nurses' group",
        ],
        correctIndex: 1,
        explanation:
          "Local-language radio reaches kitchens, farms and taxis where leaflets and posters never travel, and the durbar adds the community's own endorsement. Layered with home visits, it becomes a campaign rather than an announcement — English print material excludes exactly the audience you need.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A father says: 'I know bed nets are supposed to be good, but we sleep hot and the net is trouble to hang.' According to the stages of change, what teaching does he need next?",
        options: [
          "Instructions and a deadline — he is ready for action",
          "Nothing — he has rejected the behaviour permanently",
          "Barriers explored and solutions offered — hanging it together, tucking it under the mat, the fan of a cooler night — he is in contemplation",
          "A referral to the district health education officer",
        ],
        correctIndex: 2,
        explanation:
          "He is in contemplation: he accepts the benefit but is stuck on real barriers. Meeting the barriers honestly — heat, effort, bed shape — and offering practical solutions and help with the first hanging moves him toward action. Lectures and deadlines do not; they push him back.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Health Education",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature best explains why the school handwashing programme in this lesson survived after the nurse left?",
        options: [
          "The nurse lectured clearly and left a poster",
          "Children practiced the skill at a station they built themselves, the head teacher verified it at assembly, and the PTA took over buying soap",
          "The teaching was conducted in English for accuracy",
          "The nurse promised prizes for the best class",
        ],
        correctIndex: 1,
        explanation:
          "Practice built the skill, visibility kept it in daily sight, verification embedded it in the school's routine, and handing the running cost to the PTA made it institutional. Ownership, not eloquence, is what survives the educator's departure.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Health Education",
        front: "What is teach-back, and how is it framed?",
        back: "Asking the learner to explain or demonstrate the message back — 'so that I know I explained it well' — proving understanding and exposing gaps. The burden of proof sits with the teacher, not the learner.",
      },
      {
        topic: "Health Education",
        front: "List the five stages of behaviour change and one nursing response for each.",
        back: "Precontemplation — dialogue and awareness; contemplation — explore barriers, offer solutions; preparation — set a concrete first step and help take it; action — praise and problem-solve; maintenance — re-teach before the risky season returns.",
      },
      {
        topic: "Health Education",
        front: "Why does local FM radio outperform leaflets in rural Ghana?",
        back: "It broadcasts in the community's own language into kitchens, farms and taxis — reaching non-literate listeners and busy adults where printed, English material cannot.",
      },
      {
        topic: "Health Education",
        front: "State the T.E.A.C.H. mnemonic for a health education session.",
        back: "Target the audience's language and calendar; Engage them in doing; Adapt the message to their stage of change; Check with teach-back; Help them take one affordable first step.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Health Promotion Division: Community Health Education Guidance",
        note: "Verify current materials with the district health promotion officer.",
      },
      {
        organization: "UNICEF",
        title: "Communication for Development (C4D) Guidance",
        note: "Participation-based community communication principles.",
      },
      {
        organization: "World Health Organization",
        title: "Health Education: Theoretical Basis and Practical Approaches",
        note: "Behaviour change and adult learning foundations; verify current WHO materials.",
      },
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Health education chapters; verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Trust & Safety in the Community",
    lessonTitle: "Culture, Beliefs & Health Choices",
    description:
      "Herbs, prayers, taboos and healers — meeting beliefs with respect and negotiation so your health advice survives the compound.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe common Ghanaian beliefs and practices that shape health choices.",
      "Explain the LEARN framework for working respectfully with health beliefs.",
      "Apply negotiation when a belief conflicts with treatment — and distinguish respect from practices that must be escalated.",
    ],
    tags: ["culture", "beliefs", "learn model"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pamphlets do not decide where a Ghanaian family seeks care — beliefs, elders and spiritual leaders do. Many of those beliefs protect health; some quietly delay treatment, drain nutrition, or stop the medicines that keep chronic disease controlled.\n\nThis is not a lesson about winning arguments. It is about a clinical skill: how to listen, negotiate and recruit the very people whose influence decides whether your advice ever leaves the room — and how to keep respect and safety in the same hand when they seem to pull apart.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Beliefs you will meet: illness attributed to spiritual causes — curses, witchcraft, 'this is not a hospital sickness'; **herbal medicine**, used by a majority of Ghanaians, often alongside hospital care and often undisclosed unless you ask respectfully; **faith practices** — prayer camps for prolonged or mental illness, anointing and fasting, and the dangerous declaration of healing that stops a hypertensive, epileptic or HIV-positive patient's medicines; food beliefs and taboos in illness; traditional bone-setters for fractures; home remedies, including enemas given to children. The risks are concrete: delayed presentation, abandoned treatment, drug-herb interactions and direct harm from some practices.\n\nYour tool is **LEARN** — **Listen** to the belief in the family's own words; **Explain** your perspective simply; **Acknowledge** the meaning the belief carries; **Recommend** what protects the patient; **Negotiate** an acceptable path — beans and groundnuts where eggs are taboo; the medicines continued as 'God's provision through the nurse'; the healer welcomed as a referring ally rather than a rival. Recruit the influencer: a pastor who tells the congregation to keep taking their tablets doubles your adherence; a queen mother who repeats your message outperforms a hundred leaflets. And know your own limits: **respect never extends to practices that harm** — a child in danger, restraint of a mentally ill relative, harmful substances — is a safeguarding and reporting duty, carried out with the same calm.",
      },
      {
        type: "clinical_pearl",
        body: "The belief you ridicule goes underground; the belief you sit with can be negotiated. Respect is not the same as agreement — it is the price of influence. And the only question that matters clinically is not 'who is right?' but 'what will this family actually do tonight?'",
      },
      {
        type: "case",
        title: "In the field",
        body: "Mr. Boakye, 58, has controlled his hypertension for three years — until today. His blood pressure is 178/105, his tablets finished a month ago, and his daughter explains joyfully: 'Our pastor declared him healed last month — the whole church witnessed it.' Mr. Boakye himself is serene and clearly relieved to be free of daily medicine.\n\nHow do you respond — protecting both his health and his faith?\n\nAnswer: Lead with LEARN. **Listen**: let him tell you about the healing — his joy is real and his relief from lifelong medicine is understandable. **Explain** gently: hypertension is silent; the healing service and the pressure inside his vessels are two different things, and the machine's number is today's fact. **Acknowledge** that faith and health work together — God's care and the nurse's tablets can share one plan. **Recommend** restarting the medicine, with a pressure recheck in two weeks. **Negotiate**: invite the pastor into the plan — 'ask your pastor to pray over the tablets too; healing and treatment can walk together' — and secure a monthly pressure check on the church's clinic day if that is where he will reliably appear. You may never change the doctrine; you can change tonight's tablet.",
      },
      {
        type: "memory_trick",
        body: "**LEARN** to work with beliefs: **L**isten, **E**xplain, **A**cknowledge, **R**ecommend, **N**egotiate. When a belief blocks safety, you LEARN your way to a substitute — you never mock your way to one. And when a practice puts a child or a dependent adult in danger, respect the people, and escalate the harm.",
      },
      {
        type: "summary",
        body: "- Beliefs shape care-seeking more than pamphlets do; most Ghanaians meet herbal and spiritual care before, or alongside, yours.\n- Ask about herbs non-judgmentally at every assessment — patients only disclose where disclosure is safe.\n- LEARN: Listen, Explain, Acknowledge, Recommend, Negotiate — respect keeps the door open.\n- Recruit the influencers: pastors, imams, queen mothers, healers — a referring healer is an asset, not a rival.\n- Respect never covers harm: dangerous practices involving children or dependents are safeguarding duties, handled calmly and by the book.",
      },
    ],
    questions: [
      {
        topic: "Culture & Beliefs",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What do the letters of the LEARN framework stand for?",
        options: [
          "Locate, Examine, Admit, Record, Notify",
          "Listen, Explain, Acknowledge, Recommend, Negotiate",
          "Learn, Educate, Advise, Repeat, Note",
          "Limit, Evaluate, Avoid, Refer, Normalise",
        ],
        correctIndex: 1,
        explanation:
          "LEARN is the negotiation sequence for health beliefs: listen to the belief in the family's words, explain your perspective simply, acknowledge its meaning, recommend what protects the patient, and negotiate a path the family will truly follow.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Culture & Beliefs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient on HIV treatment stops his antiretrovirals after his church declared him healed. Your best response is to:",
        options: [
          "Tell him the church is misleading him and he must choose between faith and medicine",
          "Document 'self-discharge against advice' and close the file",
          "Respect the faith, explain the danger of interruption, negotiate treatment continuation — and involve the spiritual leader in the plan",
          "Ignore it — religious decisions are beyond nursing scope",
        ],
        correctIndex: 2,
        explanation:
          "Confrontation forces a choice the patient may not make in your favour; abandonment abandons the patient. Respect plus honest explanation plus negotiation — with the pastor recruited as an ally — is the path most likely to restart the tablets. Abandoning the issue is not neutrality; it is a lapse of duty.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Culture & Beliefs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should you ask every patient, non-judgmentally, about herbal medicines they are taking?",
        options: [
          "To prove that hospital medicine is superior",
          "Because herbs are used widely, often undisclosed, and can interact with prescribed treatment — disclosure only happens where questions are safe and respectful",
          "Because it is required for the census",
          "So you can prescribe the herb yourself",
        ],
        correctIndex: 1,
        explanation:
          "Most patients using herbs will not volunteer it — they expect judgement. A routine, respectful question surfaces the full medication picture (interactions, kidney risks, undisclosed adherence patterns) and marks you as a nurse it is safe to tell.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Culture & Beliefs",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which view of traditional and faith healers best serves the community's health?",
        options: [
          "They are competitors who should be discouraged from seeing patients",
          "They are allies who see patients first and can refer early — a healer who recognises danger signs and sends patients to you extends your safety net",
          "They should be arrested when patients default",
          "Their role is irrelevant because patients never consult them",
        ],
        correctIndex: 1,
        explanation:
          "Families meet healers and faith leaders before they meet you — that is the reality of help-seeking. A healer trained in danger signs and connected to your compound becomes an early-warning post; hostility merely removes the earliest referral you had, and patients still go — silently.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Culture & Beliefs",
        front: "Expand LEARN and state its purpose.",
        back: "Listen, Explain, Acknowledge, Recommend, Negotiate — the respectful sequence for working with health beliefs, trading confrontation for a plan the family will actually follow.",
      },
      {
        topic: "Culture & Beliefs",
        front: "A 'healing declaration' stops a chronic patient's medicines. What is the negotiated response?",
        back: "Respect the faith, explain what silent diseases do off treatment, recommend restarting, and recruit the spiritual leader — 'pray over the tablets too'. Never force a choice between God and medicine; that choice is usually not yours to win.",
      },
      {
        topic: "Culture & Beliefs",
        front: "Why ask about herbs at every assessment?",
        back: "Herb use is common, usually undisclosed, and can interact with treatment or harm kidneys. Disclosure only happens where the question is routine and judgment-free.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Traditional Medicine Strategy",
        year: "2014",
        note: "Basis for respectful integration of traditional medicine into health systems.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive and Public Health Service Policy and Standards",
        note: "Culturally appropriate service delivery; verify current edition with the district directorate.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Respect, dignity and safeguarding duties; obtain current version from the Council.",
      },
      {
        organization: "Elsevier",
        title: "Stanhope & Lancaster, Public Health Nursing: Population-Centered Health Care in the Community",
        note: "Cultural competence chapters; verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Trust & Safety in the Community",
    lessonTitle: "Safety & Boundaries for the Community Nurse",
    description:
      "Lone work, known faces and requests for 'small help' — staying safe, professional and kind in the community you also live in.",
    difficulty: "Easy",
    durationMin: 9,
    objectives: [
      "Describe safety planning for lone community work — itinerary, transport, timing and communication.",
      "Explain professional boundaries for a nurse who lives among her patients.",
      "Apply warm, principled responses to loans, gifts, confidentiality leaks and harassment.",
    ],
    tags: ["safety", "boundaries", "professionalism"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the hospital, walls, guards and colleagues surround you. In the community, your protection is a plan, a charged phone, and the respect of the people you serve — mostly. This short lesson gives you the habits that keep lone work safe, and the boundary lines that keep a nurse who lives in her community trusted, rested and professional.\n\nNone of this is distrust of the community — most of your years out here will be warm beyond anything a ward offers. Safety planning is for the one evening that goes wrong; boundaries are for the hundred ordinary Tuesdays that quietly go wrong by accretion.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Safety planning.** Before any itinerary: tell someone — the register, the district WhatsApp group, your supervisor — which compounds you are visiting and when you expect to return. Visit in daylight where you can; know your terrain and seasons (river crossings in the rains, dust and heat in harmattan); on the motorbike, helmet, training, sensible speed. Keep the phone charged with credit, and emergency contacts current — police, district directorate, the health centre. In the compound, stay aware: note who is present, keep your exit free, and if a visit feels wrong — aggression, drunkenness, rising tension, a chieftaincy or political dispute — leave politely, never argue, and report. Being known and uniformed is itself protection: the community guards its nurse — but only up to the edge of the community's own conflicts.\n\n**Boundaries.** You will be asked for money, loans, transport fares and 'small things' — because you are the visible, salaried friend of the poor. The professional line is warm refusal plus redirection: no personal loans or cash gifts, ever — the second loan is your job description. Redirect to what systems exist: NHIS registration, the volunteer's transport plan, social welfare and fee-waiver processes, and document what you arranged. Examine where a chaperone or family member can be present — it protects patient and nurse alike. Guard confidentiality fiercely in a small community: what you know from the clinic is not market conversation, even when everyone knows the family. Attend the funerals and durbars you can — they are public health work — but you are allowed your own hours. And if you are harassed or threatened: leave immediately, report the same day, and revisit with a colleague or through the chief.",
      },
      {
        type: "clinical_pearl",
        body: "Your uniform opens compounds; your professionalism keeps them open. The community's respect is your safety equipment — maintain it like any vital sign: within limits, checked regularly, and never taken for granted.",
      },
      {
        type: "case",
        title: "In the field",
        body: "A mother whose child's malaria you treated last week stops you at the path: 'Sister, small help — fifty cedis for his review visit. God will bless you.' She is warm, genuine, and genuinely short. Everyone within earshot waits for your answer.\n\nWhat do you say — kindly, and without becoming the zone's lender?\n\nAnswer: Warm refusal plus a real path: 'I don't keep money to lend, and I would never insult you with a promise I can't keep — but let's fix the visit itself.' Check the family's NHIS status and register them if lapsed; the review is covered. Arrange the volunteer's bicycle or the market-day transport with the driver; confirm the appointment day when travel is cheapest. Involve the assembly member's transport support where it exists, and document what you arranged so follow-up happens. You have solved the problem she actually named — the cost of reaching care — without opening the bottomless account of personal lending. In a community, the nurse who lends once becomes the bank by Friday.",
      },
      {
        type: "memory_trick",
        body: "Stay **S.A.F.E.** in the field: **S**hare your itinerary — someone always knows where you are; **A**void what you can — risky hours, risky routes, rising tempers; leave early, never argue; **F**amily-free finances — no loans, no cash gifts, always redirect; **E**xit and report — keep your way out clear, and tell someone the same day anything goes wrong.",
      },
      {
        type: "summary",
        body: "- Lone work runs on a plan: shared itinerary, daylight where possible, known terrain, charged phone, emergency contacts.\n- If a visit feels wrong, leave politely and report — never argue your way into safety.\n- Money is the boundary the community will test first: warm refusal, then redirect to NHIS, transport plans and social support.\n- A chaperone or family presence protects both patient and nurse during home examinations.\n- Confidentiality is hardest in a small community — and matters most there.\n- Harassment or threats: leave, report the same day, revisit accompanied.",
      },
    ],
    questions: [
      {
        topic: "Safety & Boundaries",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Before setting out on a day of lone home visits, the essential safety habit is:",
        options: [
          "Wearing plain clothes so nobody identifies you",
          "Sharing your itinerary — where you are going and when you expect back — with the register, a colleague or your supervisor",
          "Carrying large amounts of cash for emergencies",
          "Visiting the most difficult compounds first, alone, to prove courage",
        ],
        correctIndex: 1,
        explanation:
          "Someone must always know where you are and when you should return — that is the thread that pulls help your way if the day turns. Anonymity removes your protection rather than adding to it, and carrying cash or courting trouble both create risk.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Safety & Boundaries",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A family asks you to lend money for their son's next clinic visit. The professional response is:",
        options: [
          "Lend it quietly — kindness is the heart of community nursing",
          "Lend it once only, and tell nobody",
          "Warmly decline personal lending, and redirect to real solutions — NHIS registration, transport planning with the volunteer, and documented follow-up",
          "Report the family to the district for begging",
        ],
        correctIndex: 2,
        explanation:
          "The first loan redefines your role: by the second week you are the zone's bank, and the third request comes with resentment. Solving the actual problem — the cost of reaching care — through NHIS, transport arrangements and social support is both kinder and sustainable.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Safety & Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a home visit, the atmosphere turns hostile and you begin to feel unsafe. The best action is:",
        options: [
          "Stay and argue your case until the family accepts your advice",
          "Call the police from the compound and refuse to leave without protection",
          "Leave politely without insisting on the visit's purpose, and report the incident the same day",
          "Continue the visit but keep your notes as a shield",
        ],
        correctIndex: 2,
        explanation:
          "No clinical task outranks your safety. A calm, courteous exit preserves the relationship for another day and preserves you for the rest of your career; the incident is reported the same day so the return visit can be planned — accompanied, or through the chief.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Safety & Boundaries",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In a small community where everybody knows the family, a neighbour at market asks you how a patient is really doing. The professional answer is:",
        options: [
          "Share the general picture — everyone knows the family anyway",
          "Decline warmly: clinical information belongs to the patient and the care team, even in a place where curiosity is neighbourly",
          "Tell her, but ask her not to repeat it",
          "Change the subject but let her guess from your face",
        ],
        correctIndex: 1,
        explanation:
          "Confidentiality is tested hardest — and matters most — where community ties make every case a story. A warm but firm boundary protects the patient's dignity and your practice: once the market learns you share, no one tells you anything again.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Safety & Boundaries",
        front: "What does S.A.F.E. stand for in community nursing?",
        back: "Share your itinerary; Avoid risky hours, routes and rising tempers — leave early, never argue; Family-free finances — no loans or cash gifts, redirect instead; Exit and report the same day anything goes wrong.",
      },
      {
        topic: "Safety & Boundaries",
        front: "How do you handle a request for money from a patient's family?",
        back: "Warm refusal plus redirection: NHIS registration, transport planning with the volunteer or driver, social welfare channels — and documentation of what was arranged. The nurse who lends once becomes the bank.",
      },
      {
        topic: "Safety & Boundaries",
        front: "Why examine home patients with a chaperone or family member present where possible?",
        back: "It protects the patient's dignity and the nurse from misunderstanding or allegation — professional care stays visibly professional, especially in the intimacy of a home.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Professional boundaries, consent and conduct; obtain current version from the Council.",
      },
      {
        organization: "Ghana Health Service",
        title: "Code of Ethics and Disciplinary Procedures",
        note: "Boundaries and conduct in service delivery; verify current edition.",
      },
      {
        organization: "ILO / ICN / WHO / PSI",
        title: "Framework Guidelines for Addressing Workplace Violence in the Health Sector",
        year: "2002",
        note: "Violence prevention and reporting principles adapted for lone community work.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "community-health-nursing-1",
    moduleTitle: "Trust & Safety in the Community",
    lessonTitle: "When Home Care Is Not Enough: Referral",
    description:
      "The findings that end a visit with a journey — recognising danger early and organising a transfer that protects the patient all the way to the door.",
    difficulty: "Clinical Reasoning",
    durationMin: 11,
    objectives: [
      "Describe the 5 Rs framework for managing emergencies and urgent referrals from the community.",
      "Apply red-flag recognition across common community presentations, including stroke (FAST).",
      "Organise a structured call-ahead referral with a written note, safe transport and a competent companion.",
    ],
    tags: ["referral", "emergency", "red flags"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the hospital, an emergency arrives with a team. In the home, an emergency arrives with you — alone, with the kit you carried, and forty minutes of road between the compound and help. The community nurse's emergency skill is not heroic medicine; it is disciplined sequence: recognise early, respond with the few things that matter, and move the patient with a handover that starts their treatment before they arrive.\n\nThis lesson gives you that sequence — the 5 Rs — and the red flags that should trigger it, from the stroke in a hypertensive grandfather to the diabetic foot that has turned against him.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Recognise.** Screen every visit against the red flags: severe breathing difficulty; chest pain; stroke signs — **FAST** (**F**ace drooping, **A**rm weakness, **S**peech difficulty, **T**ime to call — with the time of onset written down); convulsions or unconsciousness; severe bleeding; severe dehydration (sunken eyes, a sunken fontanelle in a baby, unable to drink); high fever with a stiff neck or a rash that does not fade under pressure; severe or uncontrolled pain; and the red flags of worsening chronic disease — a blood pressure of 180/110 or more with symptoms, a diabetic foot with spreading redness, fever or odour, new confusion or drowsiness in any patient. And trust the instinct that says this patient 'just looks wrong' — it is data.\n\n**Respond** within your scope and protocol: position — recovery position for the drowsy, sitting upright for the breathless; keep the patient warm; nothing by mouth for anyone drowsy; check glucose if trained and equipped; calm the family, because panic travels downhill to the patient. **Ring** the receiving facility ahead with a structured spoken handover: who the patient is, what happened, your findings and vitals, what you have done and at what time, what you need ready (bed, oxygen, the doctor), and your estimated arrival. **Record** the referral note in duplicate — findings with times, treatments given with times, the patient's regular medicines and allergies, the event's onset time, the family's contact, and your name — one copy travels, one stays in your register. **Refer**: arrange the fastest safe transport, a responsible adult as companion, the patient positioned and warm — and you alongside whenever the patient is unstable. A deteriorating patient never travels without a competent companion.",
      },
      {
        type: "clinical_pearl",
        body: "Phone before the road. A call-ahead handover lets the district hospital prepare the oxygen, the drip and the doctor before your taxi reaches the gate — you are the first responder and the ambulance controller in one. And the emergency you manage well was prepared in calm weeks: the driver's numbers, the phone tree, the emergency fund, the list kept current in the register.",
      },
      {
        type: "case",
        title: "In the field",
        body: "You are reviewing Mr. Osei, 62, for his routine hypertension check when his speech suddenly slurs, his right arm will not grip the chair, and the right side of his face is drooping. He remains conscious but frightened. It is 11:40 a.m.\n\nWhat are your actions, in order — and why does the clock matter?\n\nAnswer: **Recognise**: FAST positive — this is a stroke until proven otherwise. **Respond**: note the exact time the symptoms started (11:40 a.m.) and say it aloud to the family; sit him safely supported with his head slightly raised, nothing by mouth, keep him calm and still; reassure him — panic raises the pressure he needs lowered. **Ring** the district hospital: structured handover — age, hypertension history, medicines, onset time 11:40 a.m., findings, your vitals, and that you are bringing him now. **Record** the referral note in duplicate: onset time, findings, vitals, his medicines and any allergies, your name. **Refer**: the fastest vehicle available, his wife as companion, him positioned and warm, and you travelling with him. The clock matters because stroke treatment decisions are made by time since onset — the moment the symptoms started, not the moment you arrived. Write it down before anything else fades.",
      },
      {
        type: "quiz_prompt",
        title: "Check yourself",
        body: "Name four things a referral note must carry.\n\nAnswer: Findings and vital signs with their times; treatments given, with times; the patient's regular medicines and allergies; the time the event started — plus the patient's identity and contact, and your name and signature. The note is the receiving team's first history: make it one they can act on at the gate.",
      },
      {
        type: "memory_trick",
        body: "The **5 Rs** of referral from the community: **Recognise, Respond, Ring, Record, Refer**. Say them in order every time — emergencies steal your sequencing first and your patient second. And for stroke, the fifth sense is the clock: FAST — Face, Arm, Speech, Time.",
      },
      {
        type: "summary",
        body: "- Community emergencies run on sequence: Recognise, Respond, Ring, Record, Refer.\n- Red flags: severe breathing difficulty, chest pain, FAST-positive stroke (record onset time), convulsions, severe bleeding, severe dehydration, fever with stiff neck or non-fading rash, severe pain, and dangerous chronic-disease changes.\n- Respond within scope: position, warmth, nothing by mouth if drowsy, glucose if trained, calm the family.\n- Call ahead with a structured handover; the receiving team can prepare before the road.\n- The referral note: findings, treatments and times, medicines, allergies, onset time, contacts, your signature — in duplicate.\n- A deteriorating patient never travels without a competent companion — and emergencies are prepared in calm weeks.",
      },
    ],
    questions: [
      {
        topic: "Referral from the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a home visit, your hypertensive patient suddenly develops facial drooping, right arm weakness and slurred speech. Which sequence of actions is correct?",
        options: [
          "Finish the routine review, then advise a clinic visit next week",
          "Give him water and food to keep his strength, then call his son in Kumasi for advice",
          "Note the onset time, position him safely with nothing by mouth, call the district hospital ahead, write the referral note and arrange fast transport with a companion",
          "Drive him yourself immediately without informing anyone at the hospital",
        ],
        correctIndex: 2,
        explanation:
          "FAST-positive stroke is a time-critical emergency: the onset time drives treatment decisions, safe positioning and nil-by-mouth protect him now, the call-ahead lets the hospital prepare, and the written note travels his history with him. Nothing-by-mouth prevents aspiration, and arriving unannounced wastes the golden window.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Referral from the Community",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why should you always call the receiving facility before transferring a patient from the community?",
        options: [
          "To ask permission from the accountant first",
          "So the receiving team can prepare — staff, bed, oxygen, medicines — and start care the moment the patient reaches the gate",
          "It is a courtesy required only for teaching hospitals",
          "To avoid writing a referral note",
        ],
        correctIndex: 1,
        explanation:
          "A call-ahead with a structured handover converts arrival time into treatment time — the team is ready instead of starting from zero. It is also the moment to say what you need and your estimated time of arrival.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Referral from the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which finding during a chronic-disease home visit requires same-day referral rather than continued home care?",
        options: [
          "A healing leg ulcer with clean, dry edges",
          "A blood pressure of 148/92 in a patient with no symptoms, on review due next month",
          "A diabetic foot ulcer with spreading redness, foul odour and fever",
          "A patient who ran out of tablets two days ago but feels well",
        ],
        correctIndex: 2,
        explanation:
          "Spreading redness, odour and fever in a diabetic foot is ascending infection — limb- and life-threatening, and beyond home care. The others are routine: continue the ulcer plan, review the stable pressure at the scheduled visit, and refill the tablets with adherence teaching.",
        courseSlug: "community-health-nursing-1",
      },
      {
        topic: "Referral from the Community",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which items are essential in the written referral note for a patient transferred from home?",
        options: [
          "Only your name and the working diagnosis",
          "Findings and vitals with times, treatments given with times, regular medicines and allergies, the onset time, and your signature",
          "Your personal opinion of the family's cooperation",
          "The hospital's address and visiting hours",
        ],
        correctIndex: 1,
        explanation:
          "The note is the handover the next team acts on: what you found, what you did and when, what the patient normally takes, what started it all — signed. Opinions belong nowhere near it, and the receiving facility's address does not treat the patient.",
        courseSlug: "community-health-nursing-1",
      },
    ],
    flashcards: [
      {
        topic: "Referral from the Community",
        front: "What are the 5 Rs of referral from the community?",
        back: "Recognise, Respond, Ring, Record, Refer — recognise the red flags, respond within scope, call ahead with a structured handover, write the note in duplicate, then move the patient with a companion.",
      },
      {
        topic: "Referral from the Community",
        front: "Expand FAST, and name the thing you must write down.",
        back: "Face drooping, Arm weakness, Speech difficulty — Time to call. Record the exact time symptoms started: stroke treatment decisions are made against the clock of onset.",
      },
      {
        topic: "Referral from the Community",
        front: "Which chronic-disease foot findings end home care today?",
        back: "Spreading redness, foul odour, changed exudate or fever in a diabetic foot — ascending infection, needing same-day referral with call-ahead. Limbs are lost late, not early.",
      },
      {
        topic: "Referral from the Community",
        front: "What must travel with every transferred patient?",
        back: "A responsible adult as companion, safe positioning and warmth, the referral note — and you, whenever the patient is unstable and the journey allows it. A deteriorating patient never travels alone.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Emergency Triage Assessment and Treatment (ETAT)",
        note: "Referral principles adapted for community and first-response practice.",
      },
      {
        organization: "World Health Organization",
        title: "Package of Essential Noncommunicable (PEN) Disease Interventions for Primary Health Care",
        year: "2020",
        note: "Referral criteria for noncommunicable disease danger signs.",
      },
      {
        organization: "Ghana Health Service",
        title: "Referral Protocols for Primary Level Facilities",
        note: "Verify current guidance with the district directorate.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses",
        note: "Accountability and documentation in referral; obtain current version from the Council.",
      },
    ],
  },
];
