// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 2, Semester 2 — Batch C
// 18 lessons anchored to prisma/seed-data/anchors/y2s2-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Family and Community Care",
    lessonTitle: "Family-Centred Community Care",
    description:
      "On the ward you care for one patient at a time; in the community the whole household becomes your patient. Learn to read and work with the family as your unit of care.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the family as the unit of care in community health nursing, using common Ghanaian family structures.",
      "Explain how family roles, decision-makers and resources shape a woman's health outcomes.",
      "Apply family assessment findings to plan care that the whole household can support.",
    ],
    tags: ["family", "community care", "chps", "family assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the hospital you care for one patient in one bed. Step into a CHPS compound or a home visit, and the patient quietly becomes a whole household. The pregnant woman who eats last and least, whose husband holds the transport money, whose mother-in-law decides when she may travel to deliver — her health is decided around the evening fire, not only in your consulting room.\n\nFamily-centred community care means you assess and work with the whole family — its structure, its roles, its resources and its beliefs — because that is where her health actually lives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A family is two or more people bound by blood, marriage or choice who share resources, care and decisions. In Ghana you will meet nuclear families, large extended families, single parents and families split by migration. What matters clinically is not the shape but the function: who provides, who decides, and who can be relied on at 2 a.m.\n\nAssess three things at first contact: structure — who lives in this house; roles — who must agree before she attends ANC or travels to deliver; and resources — transport, money, food, and who controls them. A genogram maps three generations of this on one page. Then plan **with** the family, never merely **for** the woman — a plan the household owns is a plan the household keeps.",
      },
      {
        type: "clinical_pearl",
        body: "Find the gatekeeper early. In many homes the husband or the senior mother-in-law decides whether a woman can go to the facility. Win that person's respect, and you have won the whole family's cooperation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a home visit you find Adjoa, 34 weeks pregnant, with a swollen face, headache and a blood pressure of 158/104. She agrees she needs review at the district hospital today, but her husband is away at the farm and her mother-in-law insists a herbal preparation is enough. Adjoa looks at the older woman and falls silent.\n\nHow do you secure safe transfer for Adjoa without turning the family against the hospital — and against her?\n\nAnswer: You work with the family, not around it. Phone the husband respectfully and explain that her symptoms warn of eclampsia, which can kill within hours; most families move fast once the danger is named clearly. Gently explore the mother-in-law's view and explain that delay itself is the danger — the herbs can wait, eclampsia cannot. Involve the volunteer to arrange transport, and agree one family action: Adjoa travels today. Ordering her to defy the household would leave her alone with a decision she cannot keep.",
      },
      {
        type: "memory_trick",
        body: "Think F-A-M-I-L-Y: Find the decision-maker, Ask about transport and money, Map the genogram, Involve everyone in the plan, Listen to their beliefs — then Yield a plan the family owns.",
      },
      {
        type: "summary",
        body: "- In the community, the household — not the individual — is your unit of care.\n- Assess structure (who lives here), roles (who decides) and resources (transport, money, food).\n- The gatekeeper is often the husband or senior woman; engage them respectfully from the first visit.\n- Plan with the family, never for the woman — owned plans survive your absence.\n- A genogram maps three generations of structure and illness on one page.",
      },
    ],
    questions: [
      {
        topic: "Family-Centred Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In family-centred community care, the primary unit of care is:",
        options: [
          "The individual patient only",
          "The family or household",
          "The community chief and elders",
          "The nearest health facility",
        ],
        correctIndex: 1,
        explanation:
          "Community care treats the household as the unit of care, because nutrition, transport, delay and adherence are all household decisions. The individual, the chief and the facility all matter, but care is planned around the family.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Family-Centred Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A pregnant woman at 34 weeks consents to hospital review for danger signs, but says her husband, who is away at the farm, must first agree because he controls the transport money. What is the most family-centred next step?",
        options: [
          "Tell her to ignore her husband and travel immediately on her own",
          "Record her consent and leave, since she has agreed in principle",
          "Contact the husband, explain the danger clearly, and agree a transport plan with the family",
          "Advise her to prepare for home delivery in case the husband refuses",
        ],
        correctIndex: 2,
        explanation:
          "The husband is the gatekeeper for transport. Contacting him, explaining the danger of eclampsia in plain terms and agreeing a family transport plan both protects the woman and keeps the family on the side of care.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Family-Centred Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the main purpose of drawing a genogram during a family assessment?",
        options: [
          "To map family structure, relationships and illnesses across generations in one picture",
          "To register the family for national health insurance",
          "To record the family's daily income and expenditure",
          "To list the medicines the family currently uses",
        ],
        correctIndex: 0,
        explanation:
          "A genogram is a three-generation map of who is who — relationships, deaths and illnesses — giving you the household's structure and health history at a glance. It registers nothing and prescribes nothing.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Family as Unit of Care",
        front: "In community care, what is the unit of care — and why?",
        back: "The family or household. A woman's nutrition, transport, delay and treatment adherence are household decisions, so her health outcomes are largely made at home.",
      },
      {
        topic: "Family Assessment",
        front: "Name three things to assess at first family contact.",
        back: "Structure (who lives in the house), roles and decision-makers (who must agree), and resources (transport, money, food, water — and who controls them).",
      },
      {
        topic: "Family Assessment",
        front: "What is a gatekeeper in family-centred care?",
        back: "The person whose approval unlocks action — often the husband or the senior mother-in-law. Engage them respectfully; winning them wins the family.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Primary health care (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/primary-health-care",
        note: "PHC is family- and community-centred — check for latest update.",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing (10th edition)",
        year: "2021",
        note: "Family-centred care and community settings — verify current edition.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Family and Community Care",
    lessonTitle: "Assessing a Community's Health",
    description:
      "A community can be read like a patient — history, examination, diagnosis, plan. Learn to gather the numbers and the stories that show where your care is needed most.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core components of a community health assessment: people, place and health status.",
      "Explain the difference between quantitative data and community perceptions in community diagnosis.",
      "Apply assessment findings to choose one priority action for a CHPS zone.",
    ],
    tags: ["community assessment", "planning", "community diagnosis", "chps"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You already know how to assess a patient: look, listen, examine, then plan. A community can be read the same way — its people, environment, health numbers and its own view of its problems. The result is a community diagnosis, and it decides where your scarce time does the most good.\n\nBecause in public health you cannot see everyone, assessment is how you choose. Is the real problem ANC attendance, teenage pregnancy, malaria in pregnancy, or the broken bridge between the village and the clinic? Guess wrong and you waste a year; assess well and you aim straight.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A community assessment has three classic parts. **People** — population size, age and sex structure, how many women of reproductive age, births expected this year, deaths. **Place** — geography, roads, rivers, distance to the nearest facility, water sources, sanitation, schools and markets. **Health status** — ANC coverage, skilled delivery rate, immunization coverage, teenage pregnancies, maternal and infant deaths, and the diseases actually seen at the clinic.\n\nGather data in layers. Existing records first — census, DHIMS reports, facility registers. Then walk the community yourself: a transect walk or community mapping shows distances and dangers no report contains. Finally, ask people: the chief, the assembly member, teachers, volunteers and — most important — the women themselves. Numbers tell you what is happening; people tell you why. The community's own priorities may surprise you, and plans built on them survive long after you leave.",
      },
      {
        type: "clinical_pearl",
        body: "Numbers count the problem; neighbours explain it. When attendance is low, do not assume laziness — walk the road the women walk, and ask them what stops them. The answer is often something you can actually fix.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are posted to a CHPS zone where DHIMS shows only 40 per cent of expected pregnant women registered for ANC from one village. The register is clean and the staff kind, so the problem is not the clinic. On a transect walk you notice the footbridge over the river is broken; to reach the clinic, women must wade across, which no heavily pregnant woman will do in the rainy season.\n\nWhat has your community assessment just changed about your plan?\n\nAnswer: The diagnosis changed from 'the women refuse ANC' to 'the river refuses the women'. The plan follows: outreach ANC on market day, when women already cross at the shallow point in groups; the volunteer for registration; and the broken bridge raised with the assembly member and chief, data in hand. Counselling women harder to wade a flooded river would be the wrong medicine for the real problem.",
      },
      {
        type: "memory_trick",
        body: "Count, Walk, Ask. Count the numbers (registers, census, DHIMS), Walk the terrain (transect walk, mapping), Ask the people (key informants and the women themselves). All three legs — or the stool falls.",
      },
      {
        type: "summary",
        body: "- A community assessment reads a community like a patient: people, place and health status.\n- Data comes in layers — records and DHIMS first, then transect walks and mapping, then key informants.\n- Numbers tell you what is happening; community members tell you why — both are needed.\n- The community's own priorities are data, not noise; plans built on them last.\n- A community diagnosis turns blame ('they refuse') into solvable problems ('the river blocks').",
      },
    ],
    questions: [
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The main purpose of a community diagnosis is to:",
        options: [
          "Identify the priority health needs of a community so that planning targets them",
          "Rank communities for punishment according to their health indicators",
          "Replace the need for individual patient assessment",
          "Complete annual reports for the regional health directorate",
        ],
        correctIndex: 0,
        explanation:
          "A community diagnosis identifies priority needs and resources so that limited effort is aimed where it matters. It complements — never replaces — individual care, and reporting is a by-product, not the purpose.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "ANC registration from one village is low although staff are friendly and records clean. A transect walk shows the footbridge to the clinic is broken and women must wade a river. What is the most appropriate first response?",
        options: [
          "Intensify health education on the importance of ANC in that village",
          "Report the women to the chief for refusing clinic services",
          "Offer home delivery kits to the pregnant women instead of ANC",
          "Organize outreach ANC on market days when women already cross, and advocate for bridge repair",
        ],
        correctIndex: 3,
        explanation:
          "The assessment changed the diagnosis from refusal to access. The fitting response removes the barrier: outreach when crossing is easiest, plus advocacy to fix the bridge. Education and blame both miss the real cause.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which source gives you the quantitative core of a community health assessment in Ghana — ANC coverage, deliveries and immunization figures?",
        options: [
          "Interviews with the market women's association",
          "The District Health Information Management System (DHIMS) and facility registers",
          "The chief's oral history of the town",
          "Your personal impressions from one market day",
        ],
        correctIndex: 1,
        explanation:
          "DHIMS and facility registers hold the countable indicators — coverage, deliveries, deaths. Interviews and stories then explain the numbers; impressions from one visit are anecdote, not assessment.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Community Assessment",
        front: "Name the three classic parts of a community assessment.",
        back: "People (demographics), Place (geography, roads, water, facilities) and Health status (ANC coverage, delivery rates, deaths, common diseases).",
      },
      {
        topic: "Community Assessment",
        front: "What is a transect walk and what does it add?",
        back: "Systematically walking through the community with a guide, observing environment, distances and risks — it reveals what registers cannot, like a broken bridge or a distant water source.",
      },
      {
        topic: "Community Assessment",
        front: "Numbers tell you what; who tells you why?",
        back: "Community members themselves — key informants such as the chief, teachers and volunteers, and especially the women. Their explanation turns a statistic into a plan.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Community Engagement: A Health Promotion Guide for Universal Health Coverage",
        year: "2017",
        note: "WHO/FWC/EMP/2017.2 — verify current WHO guidance.",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS)",
        note: "Facility and district reporting platform — access via your unit; verify local reporting practice.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "public-health-nursing",
    moduleTitle: "Family and Community Care",
    lessonTitle: "Working with Community Health Workers",
    description:
      "You cannot be everywhere at once — and you do not have to be. Meet the community health workforce that multiplies your reach, and learn to keep that partnership strong.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the roles of community health officers, volunteers and re-oriented traditional birth attendants in Ghana's CHPS strategy.",
      "Explain why feedback and clear roles keep community health worker partnerships alive.",
      "Apply partnership principles to act on information a volunteer brings from a remote hamlet.",
    ],
    tags: ["chps", "partnership", "community health workers", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A CHPS zone can hold thousands of people scattered across farms and hamlets. You cannot walk it all — but a network of community health workers can. Community health officers, community-based volunteers, disease control officers and re-trained traditional birth attendants are the eyes, hands and trust of the health system at the last mile.\n\nThese colleagues only multiply your care if you work with them well: clear roles, respect, simple tools and honest feedback. This lesson is about keeping that partnership alive — because when it breaks, the system goes blind.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Community health officers (CHOs) lead CHPS zones — running ANC, postnatal and child welfare clinics, outreach and uncomplicated deliveries, and supervising volunteers. Community-based volunteers find pregnant women, encourage registration, follow defaulters and escort the sick. Disease control officers track malaria, TB and other notifiable diseases. Traditional birth attendants in Ghana are no longer conductors of home births; policy re-orients them as **companions** who prepare women, accompany them to deliver in a facility, and alert you early when something is wrong.\n\nPartnership runs on four things. Clear roles — everyone knows who does what, written simply. Respect — learn their names and never correct them harshly in front of the community. Simple tools — a danger-sign list in the local language outperforms a lecture. And feedback — tell the volunteer what happened to the woman she escorted; the outcome is her fuel. The learning flows both ways: they know which households are hidden and which belief is holding women back.",
      },
      {
        type: "clinical_pearl",
        body: "Feedback is the fuel of referral. When a volunteer learns that 'her' woman survived because she came early, she will find the next woman even faster. Silence starves partnerships.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Alhassan, a volunteer, sends word that in a hamlet two hours away, Fati is about seven months pregnant. She has never attended ANC and lost her last baby at home. He asks what to do, adding that a respected traditional birth attendant in the hamlet is willing to help.\n\nWhat do you do with this piece of intelligence?\n\nAnswer: You act on all of it. Visit Fati at home to register her, screen for danger signs and start iron and folic acid; agree a birth and emergency plan — where she will deliver, and transport. Enlist the birth attendant as her official companion, so her influence pulls Fati towards safe delivery. Then close the loop with Alhassan: tell him what you found and thank him by name. One alert, one visit, one companion — a life-path changed.",
      },
      {
        type: "memory_trick",
        body: "C-L-E-A-R: Clear roles, Learn their community, Encourage with feedback, Agree simple referral steps, Respect their knowledge. A partnership kept CLEAR keeps the whole zone visible.",
      },
      {
        type: "summary",
        body: "- CHOs lead CHPS zones; volunteers find and escort; disease control officers track notifiable illness.\n- Traditional birth attendants in Ghana are companions, not conductors — they prepare and accompany women to facility delivery.\n- Partnerships survive on clear roles, respect, simple local-language tools and honest feedback.\n- The learning flows both ways — they know the hidden households and the local beliefs.\n- Close the referral loop — tell volunteers the outcome of the women they bring.",
      },
    ],
    questions: [
      {
        topic: "Community Health Workers",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Under Ghana's current CHPS-oriented policy, what is the re-oriented role of a trained traditional birth attendant (TBA)?",
        options: [
          "To conduct home deliveries when the clinic is far away",
          "To run ANC clinics in the CHPS zone",
          "To prepare and accompany women to deliver in a health facility, and alert staff early",
          "To prescribe herbal medicines for pregnancy complaints",
        ],
        correctIndex: 2,
        explanation:
          "Policy re-orients TBAs as companions, not conductors: they prepare women, accompany them to deliver in facilities, and alert health staff early. Delivery itself belongs at the facility with skilled attendants.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Health Workers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A community volunteer escorted a woman with severe pre-eclampsia who delivered safely at your facility. What is the single most motivating thing you can do for that volunteer afterwards?",
        options: [
          "Tell her the outcome and thank her — the woman survived because she came early",
          "Say nothing, so the volunteer stays humble and objective",
          "Remind her that escorting is her unpaid duty anyway",
          "Ask her to bring at least five more women next month",
        ],
        correctIndex: 0,
        explanation:
          "Feedback on the outcome is the fuel of referral. Knowing that her action saved a life motivates better than quotas or silence — and it teaches the community that early referral works.",
        courseSlug: "public-health-nursing",
      },
      {
        topic: "Community Health Workers",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A volunteer reports a pregnant woman hidden in a remote hamlet who has never attended ANC. Which response best applies partnership principles?",
        options: [
          "File the message and review it at the next monthly meeting",
          "Tell the volunteer that registration is the woman's own responsibility",
          "Send the woman a written appointment letter through the chief",
          "Visit her at home to register and screen her, agree a birth plan, and feed back to the volunteer",
        ],
        correctIndex: 3,
        explanation:
          "Act on the intelligence promptly: home visit for registration, screening and a birth plan; involve local allies; and close the loop with the volunteer so the partnership deepens. Filing or delegating the duty wastes both the alert and the trust.",
        courseSlug: "public-health-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Community Health Workers",
        front: "Who leads a CHPS zone and what do they do?",
        back: "The community health officer (CHO): ANC, postnatal and child welfare clinics, outreach, uncomplicated deliveries, and supervision of volunteers.",
      },
      {
        topic: "Community Health Workers",
        front: "What is the re-oriented role of TBAs in Ghana?",
        back: "Companions, not conductors — they prepare women, accompany them to deliver at a facility, and alert health staff early about problems.",
      },
      {
        topic: "Community Health Workers",
        front: "Name the four things that keep CHW partnerships alive.",
        back: "Clear roles, respect, simple tools in the local language, and honest feedback on every referral.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Guideline on Health Policy and System Support to Optimize Community Health Worker Programmes",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550369",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-Based Health Planning and Services (CHPS): The Operational Policy",
        note: "Superseded in parts by the Ministry of Health National Community Health Policy (2020) — verify current edition with your district.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Understanding Mental Health",
    lessonTitle: "Mental Health and Wellbeing: The Full Picture",
    description:
      "Mental health is more than the absence of illness — it is the presence of coping, working and contributing. Meet the full picture you will be protecting in every woman you care for.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the WHO concept of mental health as a positive state of wellbeing, not merely the absence of disorder.",
      "Explain the mental health continuum and how people move along it in both directions.",
      "Apply wellbeing principles to notice when a postnatal woman needs support rather than dismissal.",
    ],
    tags: ["mental health", "wellbeing", "continuum", "perinatal"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When you hear 'mental health', your mind may jump straight to illness. The WHO picture is bigger: mental health is a state of wellbeing in which a person realizes her own abilities, copes with the normal stresses of life, works productively, and contributes to her community. Notice what is missing — any mention of madness. Every client has mental health, just as they all have physical health.\n\nThat matters in nursing because most of the women you meet are mentally healthy people under stress — first pregnancies, losses, fears, poverty. Your work is double: protect and promote their wellbeing, and notice when the balance tips.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Mental health sits on a continuum, and people move along it in both directions. At one end is **wellbeing** — coping, functioning, contributing. In the middle are **mental health problems** — the normal-range distress of grief, fear or exhaustion that most people pass through, especially around birth. At the far end are **mental disorders** — conditions with defined patterns and duration, like depression, needing treatment. People move both ways: illness is not a life sentence, and wellness is not a guarantee.\n\nWellbeing has three dimensions you can observe: **emotional** — how she feels; **psychological** — how she thinks and copes; **social** — her relationships and contribution to home and work. Influences come from all sides: biology (illness, hormones, sleep), psychology (trauma, loss, worry) and society (poverty, isolation, violence, support). You promote mental health with tools you already own — dignity, companionship, information, rest and safety — long before any diagnosis exists.",
      },
      {
        type: "clinical_pearl",
        body: "No diagnosis is not the same as no problem. A woman can be struggling with no label, or carrying a serious diagnosis and still functioning well with support. Assess the person and her daily functioning, not just her category.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On a postnatal ward, a mother six hours after a long labour keeps crying when the baby cries, has not slept for two nights, and has eaten almost nothing. Her observations are normal and bleeding minimal. Her relatives laugh it off — 'she is just being womanish'.\n\nHow does the full picture of mental health — not just illness — shape what you do next?\n\nAnswer: You assess her functioning, not a label. She is in the normal-distress band: exhausted, and short of the two things that restore wellbeing — sleep and support. So treat those: a protected rest block while a relative holds the fed baby, food, and a gentle word to the family that this is exhaustion after hard work, not weakness. Then watch: most women lift within days. If low mood, poor sleep and poor feeding persist beyond two weeks, or she cannot care for the baby, she has drifted towards depression and needs formal assessment. Noticing early is the cheapest medicine there is.",
      },
      {
        type: "memory_trick",
        body: "Test wellbeing with three verbs: COPE, WORK, CONTRIBUTE. Coping with normal stress, working at her daily tasks, contributing at home. All three present — wellbeing. Any of them collapsing — look closer.",
      },
      {
        type: "summary",
        body: "- WHO defines mental health positively: realizing abilities, coping with normal stress, working, contributing.\n- It is a continuum — wellbeing, normal distress, disorder — and people move in both directions.\n- Everyone has mental health; only some have mental illness.\n- Watch three dimensions: emotional (feelings), psychological (thinking and coping), social (relationships and contribution).\n- Promote wellbeing with dignity, rest, information and support long before any diagnosis is needed.",
      },
    ],
    questions: [
      {
        topic: "Mental Health Concepts",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to the WHO concept, mental health is best defined as:",
        options: [
          "The complete absence of any emotional distress",
          "A state of wellbeing in which a person realizes abilities, copes with normal stresses, works and contributes",
          "A permanent state of happiness unaffected by life events",
          "The presence of mental illness that is well controlled with drugs",
        ],
        correctIndex: 1,
        explanation:
          "WHO defines mental health positively — realizing abilities, coping with normal life stresses, working productively and contributing to community. It is not mere absence of disorder, nor constant happiness.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Mental Health Concepts",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A postnatal mother cries easily on day 1, sleeps when the baby sleeps, jokes with her mother-in-law and feeds the baby. Ten days later she is still tearful most of the day and has stopped leaving her bed. What does the continuum tell you?",
        options: [
          "She has a mental disorder that was present from birth",
          "Her feelings are imaginary and need no attention",
          "Wellbeing is fixed, so this change cannot be mental-health related",
          "She has moved along the continuum from normal distress towards a possible problem and needs assessment",
        ],
        correctIndex: 3,
        explanation:
          "The continuum is dynamic. She began in normal distress but has drifted towards persistent low mood and lost function — a signal to assess rather than reassure and hope. Mental health changes in both directions.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Mental Health Concepts",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which observation belongs to the social dimension of mental wellbeing?",
        options: [
          "She reports palpitations when anxious",
          "She sleeps eight hours most nights",
          "She has rejoined her market stall and trades with her neighbours again",
          "Her haemoglobin is 11.5 g/dL",
        ],
        correctIndex: 2,
        explanation:
          "The social dimension covers relationships and contribution — trading again with her neighbours is social functioning. Palpitations are somatic, sleep is physiological, and haemoglobin is a laboratory value.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Mental Health Concepts",
        front: "Give the WHO definition of mental health.",
        back: "A state of wellbeing in which the person realizes her abilities, copes with the normal stresses of life, works productively and contributes to her community — not merely the absence of disorder.",
      },
      {
        topic: "Mental Health Concepts",
        front: "Name the three bands of the mental health continuum.",
        back: "Wellbeing — normal mental health problems (grief, stress, exhaustion) — mental disorders. People move in both directions.",
      },
      {
        topic: "Mental Health Concepts",
        front: "What are the three dimensions of wellbeing to observe?",
        back: "Emotional (how she feels), psychological (how she thinks and copes), social (relationships and contribution to home and work).",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Mental health: strengthening our response (fact sheet)",
        year: "2022",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
        note: "Check for latest update.",
      },
      {
        organization: "World Health Organization",
        title: "World Mental Health Report: Transforming Mental Health for All",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240049338",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Understanding Mental Health",
    lessonTitle: "Stigma: The Barrier We Build Ourselves",
    description:
      "Stigma — the whispering, the labels, the hiding — often blocks care more effectively than the illness itself. Learn to recognize it in others, and in yourself.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe public, self-, courtesy and structural stigma and their consequences for mental health care.",
      "Explain how stigma delays treatment and violates the rights of people with mental illness.",
      "Apply person-first language and supportive disclosure practices to reduce stigma on your ward.",
    ],
    tags: ["stigma", "attitudes", "mental health", "rights"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Imagine having a condition that whispers, that neighbours would call madness, that relatives hide from visitors. Now imagine the treatment exists — but reaching for it costs you your name in the community. That is stigma, and in mental health it is often a bigger barrier than the disease itself.\n\nHere is the uncomfortable part: the barrier is partly built by us — by communities, and sometimes quietly by health workers. This lesson asks you to see stigma clearly, understand its cost, and choose your side.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Stigma wears several coats. **Public stigma** is the community's negative stereotype — the 'mad person', feared as dangerous or blamed as cursed. **Self-stigma** is what happens when the person swallows the label: shame, secrecy, and giving up on help. **Courtesy stigma** splashes onto families, who then hide the relative to protect the family name. **Structural stigma** lives in systems — mental health left unfunded while other services find money. In Ghana, spiritual attributions can deepen the hiding; the Mental Health Act 842 of 2012 protects the rights of persons with mental disorder and prohibits degrading treatment.\n\nThe cost is measured in bodies: people present late or never, families hide relatives, treatable illness relapses, preventable deaths occur. Your antidotes are simple and powerful. Person-first language — 'a woman living with schizophrenia', never 'a mad person'. Confidentiality guarded fiercely. Calm education: these conditions are common and treatable. Contact with someone who has recovered — nothing dismantles fear like a former patient selling cloth beside you at the market. And watch your corridor talk; the whole ward learns from how you speak.",
      },
      {
        type: "clinical_pearl",
        body: "Stigma is contagious — but so is respect. The way you talk about a psychiatric patient at the nurses' table teaches the entire ward, and every family listening outside the door, how to treat her.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A husband corners you on the postnatal ward and glances over his shoulder before speaking. 'Please,' he whispers, 'is my wife mad? Don't tell anyone — write something else.' His wife, three days postpartum, barely sleeps, will not hold the baby, and has said the baby 'deserves a better mother'.\n\nHow do you answer him — protecting both the woman and the truth?\n\nAnswer: Treat the stigma and the illness in the same breath. Name it plainly and kindly: she is not mad; she has a common, treatable complication of childbirth — about one mother in ten — and early care brings recovery. Shame is what makes families hide and delay, and delay is what makes it worse. Reassure him that confidentiality is your duty. Then recruit him as part of the treatment: his warmth, her rest, follow-up. Scribble a vague 'weakness' in the notes to please him, and you confirm that the illness is unspeakable — and may lose her follow-up entirely.",
      },
      {
        type: "memory_trick",
        body: "Stigma works like a STAMP: Stereotypes get Terrifying, so families Avoid, the label Marks the whole family, and everyone Postpones help. Your calm, person-first language lifts the stamp off.",
      },
      {
        type: "summary",
        body: "- Stigma comes as public, self-, courtesy (family) and structural forms.\n- It delays presentation, hides patients, breaches rights and worsens outcomes.\n- Ghana's Mental Health Act 842 (2012) protects the rights of persons with mental disorder.\n- Antidotes: person-first language, confidentiality, calm education, contact with recovered people.\n- Your corridor talk is teaching material — the ward copies how you speak about mental illness.",
      },
    ],
    questions: [
      {
        topic: "Stigma",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with depression believes she is worthless and stops attending clinic because 'people like me don't deserve help'. This is best described as:",
        options: [
          "Self-stigma — she has internalized the negative label",
          "Structural stigma by the health system",
          "Public stigma by the pharmacy staff",
          "Courtesy stigma directed at her neighbours",
        ],
        correctIndex: 0,
        explanation:
          "Self-stigma is the internalization of public labels: the person agrees with the stereotype and gives up on help. Structural stigma is built into services; public stigma is others' reactions; courtesy stigma lands on families.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Stigma",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which nursing action most directly reduces public stigma on a maternity ward?",
        options: [
          "Keeping psychiatric referrals off the ward entirely",
          "Referring to patients by diagnosis in corridor conversation so staff learn the terms",
          "Explaining calmly that the condition is common and treatable, and using person-first language such as 'a mother living with depression'",
          "Restricting visiting for families of affected mothers",
        ],
        correctIndex: 2,
        explanation:
          "Calm education (common and treatable) plus person-first language replaces stereotypes with facts and respect. Hiding patients, careless corridor labels and restricting visiting all deepen stigma.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Stigma",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family hides a relative with psychosis at home to protect the family name. What is this an example of, and what is its main cost?",
        options: [
          "Self-stigma; the cost is only to the patient's pride",
          "Courtesy stigma; it delays treatment and worsens the illness",
          "Structural stigma; it is caused entirely by government policy",
          "Public stigma; it has no effect on when care is sought",
        ],
        correctIndex: 1,
        explanation:
          "Courtesy (stigma by association) splashes onto families, who hide the relative to guard the family name — and hiding is what delays treatment, worsens illness and can end in preventable death.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Stigma",
        front: "Name the four types of stigma.",
        back: "Public (community stereotypes), self-stigma (internalized shame), courtesy stigma (splashes onto families), structural stigma (unfunded or discriminatory services).",
      },
      {
        topic: "Stigma",
        front: "What is person-first language? Give an example.",
        back: "Naming the person before the condition: 'a woman living with schizophrenia' — not 'a schizophrenic' or 'a mad person'.",
      },
      {
        topic: "Stigma",
        front: "Which Ghanaian law protects the rights of persons with mental disorder?",
        back: "The Mental Health Act, 2012 (Act 842) — it protects rights and prohibits degrading treatment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "World Mental Health Report: Transforming Mental Health for All",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789240049338",
      },
      {
        organization: "Government of Ghana",
        title: "Mental Health Act, 2012 (Act 842)",
        year: "2012",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing (9th edition)",
        year: "2022",
        note: "Stigma and culture chapters — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Understanding Mental Health",
    lessonTitle: "Common Psychiatric Conditions: An Overview",
    description:
      "A respectful first meeting with depression, anxiety disorders, bipolar disorder, schizophrenia and substance use — what they look like, and what they are not.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core features of depression, anxiety disorders, bipolar disorder and schizophrenia.",
      "Explain why duration and functional impairment separate illness from normal mood variation.",
      "Apply a simple recognition screen to decide when to refer or escalate.",
    ],
    tags: ["psychiatric conditions", "overview", "depression", "anxiety", "recognition"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You are not training to be a psychiatrist — you are training to recognize, respond and refer. In a general ward, ANC clinic or CHPS compound, psychiatric conditions arrive disguised: the 'stubborn' girl who has stopped school, the 'lazy' husband, the 'difficult' mother-in-law. Recognition changes what you do next, and sometimes whether a person lives.\n\nThis overview is a first respectful meeting with the conditions you will meet most: depression, anxiety disorders, bipolar disorder and schizophrenia — plus substance use disorders, which often travel with them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Depression** is two weeks or more of low mood or loss of pleasure (anhedonia), most of the day, nearly every day — plus changes in sleep, appetite, energy and concentration, feelings of worthlessness or guilt, and at worst thoughts of death. **Anxiety disorders** share excessive, hard-to-control worry: generalized anxiety (constant worry about everything), panic disorder (sudden surges of terror with pounding heart and breathlessness) and phobias. Both are common and treatable — women carry roughly one and a half times men's risk of depression.\n\n**Bipolar disorder** swings between depression and mania — days of elevated or irritable mood, racing thoughts, big plans, little need for sleep, reckless spending or risk-taking. **Schizophrenia** is a psychosis: hallucinations (often voices), fixed false beliefs (delusions), disorganized thinking, and 'negative' symptoms like withdrawal and flat emotion; it usually starts in young adults and responds to treatment. **Substance use disorder** shows tolerance, withdrawal and use despite harm. For every one of these, the first duty is the same: ask directly about self-harm, and refer. Treatment works far more often than the public believes.",
      },
      {
        type: "clinical_pearl",
        body: "Two weeks and function. Sadness that lifts is a mood; low mood or loss of interest nearly every day for two weeks, in someone who can no longer do her daily work, is depression until proved otherwise — and it is treatable.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On your postnatal ward a woman's husband sits apart from the celebrations. Nobody else seems to notice him. He has barely slept 'for months' since his shop collapsed, moves slowly, and finally says: 'My family is better off without me'.\n\nWhat picture is emerging, and what is your immediate duty before anything else?\n\nAnswer: The picture is depression — insomnia, psychosocial loss, slowed movement, and a statement of worthlessness that may carry suicidal intent. Your immediate duty is not the label but the risk: stay with him, ask directly and calmly whether he has thoughts of harming himself, and escalate the same hour per your facility's protocol. 'Cheer up, you have a new baby' would be false reassurance; sending the family home to see whether the mood passes would be gambling. Direct questions do not plant the idea — they open the door to rescue.",
      },
      {
        type: "memory_trick",
        body: "Screen depression with 'Two weeks, two questions': How is your mood? What still brings you joy? Low mood plus no joy for two weeks, with work suffering, screens positive. Then always ask about self-harm.",
      },
      {
        type: "summary",
        body: "- Depression: low mood or anhedonia most days for 2+ weeks, with sleep, appetite, energy and worthlessness changes; treatable.\n- Anxiety disorders: excessive worry, panic surges, phobias — common and treatable.\n- Bipolar disorder: swings between depression and mania (little sleep, big plans, reckless energy).\n- Schizophrenia: psychosis — voices, fixed beliefs, disorganized thinking plus negative symptoms; usually young adults.\n- Whatever the condition: assess self-harm risk directly, stay with the person, refer early — treatment works.",
      },
    ],
    questions: [
      {
        topic: "Psychiatric Conditions Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which cluster of features most strongly suggests depression rather than ordinary sadness?",
        options: [
          "Tearfulness at a funeral that eases within the week",
          "Fear of delivery that resolves after a normal birth",
          "Low mood and loss of interest nearly every day for three weeks, with early waking, poor appetite and 'I am worthless'",
          "Excitement and insomnia the night before a family wedding",
        ],
        correctIndex: 2,
        explanation:
          "Depression needs duration (two weeks or more) plus breadth (sleep, appetite, worthlessness) and impairment. Grief that lifts, resolved fear and pre-wedding excitement are all normal mood variation.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Psychiatric Conditions Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A man has slept two hours a night for four days, talks rapidly, plans to buy three taxis with borrowed money, and feels 'unstoppable'. Which condition does this most suggest?",
        options: [
          "Schizophrenia, negative symptoms",
          "Bipolar disorder, manic episode",
          "Generalized anxiety disorder",
          "Panic disorder",
        ],
        correctIndex: 1,
        explanation:
          "Days of little sleep, rapid speech, grand reckless plans and inflated confidence are the manic pole of bipolar disorder — the mirror image of the depressive pole.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Psychiatric Conditions Overview",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which feature belongs to schizophrenia's negative symptoms?",
        options: [
          "Hearing commanding voices",
          "Believing neighbours are poisoning the food",
          "Rapid, disorganized speech",
          "Withdrawal from people and flat, empty emotion",
        ],
        correctIndex: 3,
        explanation:
          "Negative symptoms take things away: flat affect, withdrawal, low drive. Voices, persecutory beliefs and disorganized speech are positive symptoms — things added by the illness.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Psychiatric Conditions Overview",
        front: "Two features define depression's core — name them.",
        back: "Low mood most of the day nearly every day, and/or anhedonia (loss of interest or pleasure), for at least two weeks, with functional impairment.",
      },
      {
        topic: "Psychiatric Conditions Overview",
        front: "Mania in one breath?",
        back: "Days of elevated or irritable mood, decreased need for sleep, racing thoughts, grand plans, reckless spending or risk-taking — the pole opposite depression in bipolar disorder.",
      },
      {
        topic: "Psychiatric Conditions Overview",
        front: "What are positive and negative symptoms of schizophrenia?",
        back: "Positive = things added: voices, delusions, disorganized thinking. Negative = things lost: flat affect, withdrawal, no drive — often mistaken for laziness.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Mental disorders (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
      },
      {
        organization: "World Health Organization",
        title: "Depression (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Therapeutic Use of Self",
    lessonTitle: "Therapeutic Communication in Mental Health",
    description:
      "In psychiatric care your main instrument is not a machine or a drug — it is you. Learn the advanced techniques that open people up, and the phrases that shut them down.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the core therapeutic communication techniques: silence, open questions, reflection, validation and offering self.",
      "Explain why both arguing with and confirming a delusion damage trust.",
      "Apply the correct response pattern to a patient reporting frightening voices.",
    ],
    tags: ["therapeutic communication", "techniques", "psychiatric nursing", "hallucinations"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In most nursing you have tools — thermometers, cannulas, partographs. In psychiatric nursing the main instrument is you: your words, your pace, your silence. Used well, they lower fear, unlock hidden symptoms and keep people safe. Used carelessly, they close a person who was about to open.\n\nThis lesson collects the advanced techniques — and, just as important, the classic blocks: the well-meant phrases that do damage.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The opening techniques: **silence** — sitting quietly, letting thought happen, showing you can bear her pain without rushing to fix it. **Open-ended questions** — 'Tell me what that has been like' instead of 'Are you sad?'. **Reflection and paraphrasing** — returning her own meaning so she hears herself: 'So the nights are the worst.' **Validation** — 'Anyone who lost what you lost would find it heavy.' **Offering self** — 'I will sit with you a while.' Behind them all: active listening and a calm, open posture.\n\nThen the blocks — the small phrases that close doors: false reassurance ('you will be fine'), premature advice, 'why' questions that sound like accusations, changing the subject, and arguing with a person's beliefs. With hallucinations and delusions, two errors destroy trust: confirming ('yes, the voices are real') and confronting ('there are no voices, stop it'). You cannot debate a person into reality. The middle path: **present reality gently without arguing** — 'I don't hear the voices, but I can see they frighten you, and I want to help.' You treat the fear, not the belief's content.",
      },
      {
        type: "clinical_pearl",
        body: "Never argue with a delusion, and never confirm it. You cannot talk someone out of their reality — but you can talk them out of trusting you, and trust is the only door to treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A young man on the ward has kept to his bed for two days and refused the morning group session. Now he stops you in the corridor and speaks quietly. 'The voices tell me I am useless,' he says, 'and that I should hurt myself.'\n\nWhich replies are therapeutic, and which will close him down?\n\nAnswer: Therapeutic replies stay calm, name the feeling and keep you useful: 'That sounds exhausting — how long have the voices been saying this?' and 'I don't hear them myself, but I believe they frighten you. Are you able to resist them tonight?' — followed by staying nearby and informing the senior nurse, because voices commanding self-harm are a safety issue, not just talk. Closing replies include: 'There are no voices, stop that' (arguing — he learns not to tell you), 'Don't worry, they will go away' (false reassurance), and walking off wordless (abandonment). The belief can wait; the fear and the risk cannot.",
      },
      {
        type: "memory_trick",
        body: "Keep communication O-P-E-N: Open questions, Paraphrase back, Empathize and validate, Never argue with the belief. When the door is OPEN, the assessment walks in.",
      },
      {
        type: "summary",
        body: "- Core techniques: silence, open questions, reflection, validation, offering self — on a base of active listening.\n- Blocks: false reassurance, premature advice, 'why' questions, changing the subject, arguing.\n- With delusions and voices: neither confirm nor confront — 'I don't hear them, but I can see they frighten you.'\n- Nurse the fear, not the truth of the belief; treat safety first.\n- Voices commanding harm are a safety issue — stay, ask about ability to resist, escalate.",
      },
    ],
    questions: [
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient says, 'The people next door poison my food through the wall.' Which response is most therapeutic?",
        options: [
          "'That is impossible — walls cannot be poisoned through, so stop thinking it.'",
          "'Yes, I have heard the neighbours are dangerous; you are right to be careful.'",
          "'Let us not talk about that; tell me about your family instead.'",
          "'I don't share that belief, but I can see it frightens you — tell me more about how it feels.'",
        ],
        correctIndex: 3,
        explanation:
          "The middle path presents your reality without arguing and immediately addresses the fear. Arguing ('impossible'), confirming ('you are right') and changing the subject all close the door the patient just opened.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The therapeutic purpose of deliberate silence in a psychiatric conversation is to:",
        options: [
          "Give the patient time to think and show you can wait without rushing",
          "Give you time to write your notes unnoticed",
          "Signal disapproval of what was just said",
          "Encourage the patient to fill the gap with small talk",
        ],
        correctIndex: 0,
        explanation:
          "Silence communicates patience and safety — the patient is allowed to think and feel without being rushed to 'useful' words. It is a gift of time, never a punishment or a sneaky clerical moment.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Therapeutic Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of the following is a communication block rather than a therapeutic technique?",
        options: [
          "'It sounds as though the nights are the hardest for you.'",
          "'Why do you always let these thoughts upset you?'",
          "'Anyone carrying this would find it heavy.'",
          "'I will sit with you for a while.'",
        ],
        correctIndex: 1,
        explanation:
          "'Why' questions sound accusatory and push the patient into defending instead of exploring. Reflection, validation and offering self all open; 'why' closes.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Therapeutic Communication",
        front: "What does offering of self sound like, and what does it communicate?",
        back: "'I'll sit with you a while' — communicates presence and safety without demanding anything from the patient.",
      },
      {
        topic: "Therapeutic Communication",
        front: "How do you respond to a delusion without arguing or confirming?",
        back: "'I don't share that belief, but I can see it frightens you — tell me more.' You treat the fear, leave the debate, and keep the trust.",
      },
      {
        topic: "Therapeutic Communication",
        front: "Why are 'why' questions considered blocks?",
        back: "They sound accusatory ('Why did you...?') and push the patient into defending instead of exploring. 'What happened next?' or 'Tell me more' opens instead.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing (9th edition)",
        year: "2022",
        note: "Communication chapters — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Therapeutic Use of Self",
    lessonTitle: "Building Therapeutic Relationships",
    description:
      "The relationship that heals is built on purpose and ended on purpose. Learn its three phases — and the boundaries that keep it safe for both of you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the orientation, working and termination phases of the therapeutic relationship.",
      "Explain how trust is built through consistency, honesty and maintained boundaries.",
      "Apply boundary rules to common ward situations such as gift offers and requests for personal contacts.",
    ],
    tags: ["therapeutic relationship", "boundaries", "psychiatric nursing", "trust"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A therapeutic relationship is not friendship — and that is its strength. It is a purposeful, patient-centred alliance with a beginning, a middle and a deliberately planned ending, aimed at her recovery, not at your company. It heals through the experience of being consistently, safely cared for — sometimes for the first time in a person's life.\n\nBecause it is professional, it has rules. Get them right and the relationship does its deep work; get them wrong and you can harm the very person you set out to help.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **orientation phase** builds the base: you meet, introduce your role, and agree a working contract — what you will do together, when you will meet, what is confidential and its limits (danger to self or others must travel upward). The **working phase** is the engine: exploring problems, testing solutions, surviving setbacks and testing behaviours — a patient who misses sessions or turns distant may be checking whether you will abandon her as others did. The **termination phase** starts long before the last day: review progress, rehearse relapse signs, and name the feelings — sadness at a well-prepared ending is healthy.\n\nTrust is built in small, kept promises: say 'I will come back at 2 p.m.' and do it. Boundaries keep the relationship clean: no personal phone numbers, no off-duty visits, no secrets; gifts through the in-charge; self-disclosure only when it serves the patient. Watch for transference — she may treat you as the mother she never had, warmly or with hostility — and countertransference, your own strong feelings towards her. Both are information for supervision, never directions to act on.",
      },
      {
        type: "clinical_pearl",
        body: "Trust is grown in small kept promises. Returning at 2 p.m. exactly as you said builds more relationship than an hour of eloquent conversation.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After three weeks on your ward, a depressed patient is going home. Her eyes are bright for the first time since admission. At farewell she presses a gift of cloth into your hands and asks for your personal number 'just in case things get bad again'.\n\nHow do you respond — warmly, and still safely?\n\nAnswer: Thank her genuinely — the cloth is gratitude, not a bribe; handle it through the ward in-charge per policy. For the number, warmly explain that care must reach her through channels that work at 3 a.m. — the clinic, the emergency unit, the helpline you write down — because a personal number fails when you are on duty elsewhere or asleep. Confirm her follow-up date, rehearse her relapse signs, and hand her story to the community team. She leaves held by a system, not dependent on one phone — the safer kindness.",
      },
      {
        type: "memory_trick",
        body: "Phases: O-W-T — Orientation (open the contract), Working (work the problems), Termination (tie up and hand over). Say it as 'out' — every therapeutic relationship aims to end well and let her out into life.",
      },
      {
        type: "summary",
        body: "- The therapeutic relationship is purposeful, patient-centred and time-limited — not friendship.\n- Orientation sets the contract; working explores and solves; termination reviews, plans relapse signs and manages the ending.\n- Trust is built of small kept promises and honest availability.\n- Boundaries: no personal numbers, no off-duty visits, no secrets; gifts via the in-charge; limited, purposeful self-disclosure.\n- Transference and countertransference are information for supervision, never instructions for action.",
      },
    ],
    questions: [
      {
        topic: "Therapeutic Relationship",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the orientation phase of a therapeutic relationship, the nurse primarily:",
        options: [
          "Solves the patient's presenting problems",
          "Introduces her role, and agrees goals, meeting times and the limits of confidentiality",
          "Begins planning the patient's discharge home",
          "Encourages the patient to disclose her deepest traumas immediately",
        ],
        correctIndex: 1,
        explanation:
          "Orientation builds the base: roles, goals, meeting times and confidentiality with its limits. Problem-solving belongs to the working phase, and deep disclosure is never rushed.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Therapeutic Relationship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A recovering patient asks for your personal phone number so she can call if she relapses. The most therapeutic response is to:",
        options: [
          "Give the number — refusing would undo weeks of trust",
          "Give a colleague's number instead so that you are protected",
          "Explain warmly that care must reach her through channels that work any hour, and confirm her follow-up plan and emergency contacts",
          "Tell her the request is inappropriate and end the conversation quickly",
        ],
        correctIndex: 2,
        explanation:
          "Boundaries protect the patient as much as the nurse. A personal number fails when you are off duty or asleep; reliable channels, a follow-up date and rehearsed relapse signs keep her safe without wounding her.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Therapeutic Relationship",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient who improved well suddenly misses two meetings and becomes distant in the working phase. The most likely explanation to consider first is:",
        options: [
          "Testing behaviour — checking whether you will abandon her as others have",
          "Proof that she has fully recovered",
          "A signal to terminate the relationship immediately",
          "Deliberate disrespect that deserves a reprimand",
        ],
        correctIndex: 0,
        explanation:
          "In the working phase, distance and missed meetings are often tests of reliability — will you stay, as others did not? It calls for steady, non-punitive follow-up, not discharge or scolding.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Therapeutic Relationship",
        front: "Name the three phases of the therapeutic relationship and one key task of each.",
        back: "Orientation — agree the contract (role, goals, times, confidentiality limits). Working — explore and solve problems, survive testing. Termination — review progress, rehearse relapse signs, manage the ending.",
      },
      {
        topic: "Boundaries",
        front: "What are the boundary rules for a nurse in psychiatric care?",
        back: "No personal numbers, no off-duty visits, no secret-keeping; gifts handled via ward policy and the in-charge; self-disclosure only when it serves the patient.",
      },
      {
        topic: "Therapeutic Relationship",
        front: "What are transference and countertransference?",
        back: "Transference: the patient redirects old feelings onto you. Countertransference: your own strong feelings toward the patient. Both belong in supervision, not in action.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing (9th edition)",
        year: "2022",
        note: "Therapeutic relationship chapters — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Professional boundaries and conduct — obtain current version from NMC Ghana.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Caring Through the Conditions",
    lessonTitle: "Nursing the Anxious and Depressed Patient",
    description:
      "The two conditions you will meet most, met with nursing that actually helps — calm bodies, direct questions about self-harm, and small daily victories.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four levels of anxiety and the nursing measures appropriate to each.",
      "Explain why asking directly about self-harm protects rather than provokes.",
      "Apply structured nursing care — safety, activity scheduling, nutrition and medication support — for a depressed patient.",
    ],
    tags: ["depression", "anxiety", "psychiatric nursing", "risk assessment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Anxiety and depression are the common colds of mental health — and you will meet them everywhere: the terrified first-time mother in ANC, the withdrawn woman on your postnatal ward, sometimes a colleague at the next table. They are also the two conditions where ordinary nursing kindness, done skilfully, changes outcomes.\n\nThis lesson pairs them: first the ladder of anxiety and how to calm it, then the nursing of depression — and the one question you must never be afraid to ask.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Anxiety is normal in small doses — it sharpens attention. It climbs in four levels. **Mild**: alert, driven, a little restless. **Moderate**: attention narrows and somatic symptoms arrive — palpitations, trembling hands, dry mouth, frequent urination, butterflies. **Severe**: focus collapses onto self and the person cannot take in new information; your teaching lands nowhere. **Panic**: terror — screaming, clinging or freezing, unable to function. Nursing follows the level: your own slow breathing and low voice, short simple sentences, reduced stimuli (curtains drawn, quiet, fewer faces), and grounding — 'feel the chair under you; name three things you can see.' An anxious body cannot hear logic; calm the body first.\n\nIn depression, safety leads. Ask **directly** about thoughts of self-harm — asking does not plant the idea; it opens the exit. Then rebuild gently: structured days, small goals (out of bed to the window, breakfast at the table), activity around what she once enjoyed, meals and fluids watched — appetite dies with mood. In postnatal depression, protect the bond — skin-to-skin, feeding support, family recruited to help rather than criticize. Medication: SSRIs take two to four weeks, must not be stopped abruptly, and worsening is reported the same day. Assess risk every shift, and never dismiss any statement as attention-seeking.",
      },
      {
        type: "clinical_pearl",
        body: "Grounding beats arguing. Slow your voice and breath; give her something to feel and name — the chair, the floor, three visible things. When the body settles, the words land.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Postnatal day 3. A mother on your bay has not initiated a feed all morning. She stares at the wall, and when you sit beside her she says quietly, 'My baby deserves a better mother'.\n\nWhat do you do first — and what must you ask directly?\n\nAnswer: First, do not leave her alone with the baby; stay calm and warm beside her. Then ask the direct question, kindly and without euphemism: 'Sometimes mothers have thoughts of harming themselves. Do you have thoughts like that?' Her answer decides everything: any thought of self-harm or of harming the baby means immediate escalation, constant observation, and documentation of her exact words. Beyond risk, judge whether this has crossed from blues into postnatal depression — poor bonding, persistent low mood — arrange formal assessment, involve her partner, and support feeding. 'You'll snap out of it' is not a nursing intervention; presence and a direct question are.",
      },
      {
        type: "memory_trick",
        body: "For depression nursing remember S-A-F-E: Suicide risk asked directly every shift, Activity scheduled in small wins, Food and fluids watched, Evaluate medication response and report any worsening.",
      },
      {
        type: "summary",
        body: "- Anxiety climbs mild, moderate, severe, panic; learning stops at severe.\n- Nursing anxiety: calm self, short sentences, reduced stimuli, grounding — the body before the logic.\n- In depression: ask directly about self-harm; asking protects, never provokes.\n- Rebuild with structure: small goals, activity scheduling, meals and fluids, protected bonding postnatally.\n- SSRIs need two to four weeks, must not be stopped abruptly, and worsening is reported the same day.\n- Never dismiss distress as attention-seeking; assess it.",
      },
    ],
    questions: [
      {
        topic: "Anxiety and Depression Nursing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient cannot take in your explanations about her medication, says her heart is 'racing out', and cannot say what day it is. Her anxiety is best graded as:",
        options: [
          "Mild — she is simply alert and attentive",
          "Moderate — narrowed attention with somatic symptoms only",
          "Panic — screaming and clinging to staff",
          "Severe — focus has collapsed onto self and learning has stopped",
        ],
        correctIndex: 3,
        explanation:
          "At severe anxiety the perceptual field collapses onto the self and no new information can be taken in — exactly her picture. Panic adds terror with screaming, clinging or freezing; moderate still allows some learning.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Anxiety and Depression Nursing",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement about asking a depressed patient directly about thoughts of self-harm is correct?",
        options: [
          "It should be avoided unless the patient raises it first",
          "Only doctors may ask such questions",
          "Asking directly does not plant the idea; it opens the door to help and protection",
          "It should be phrased vaguely, such as 'You wouldn't do anything silly, would you?'",
        ],
        correctIndex: 2,
        explanation:
          "Direct, kind questions about self-harm identify risk without increasing it; vague phrasing invites vague answers and hides danger. Any nurse can and should ask — it is core risk assessment.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Anxiety and Depression Nursing",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When supporting a depressed patient starting an SSRI, which teaching point is essential?",
        options: [
          "The effect is immediate, so she may stop it the day she feels better",
          "Improvement typically takes two to four weeks, and the drug must not be stopped abruptly",
          "It works only if combined with total bed rest",
          "If she feels agitated or worse, she should double the next dose",
        ],
        correctIndex: 1,
        explanation:
          "SSRIs take two to four weeks to show benefit and must not be stopped suddenly. Worsening or new agitation is a report-the-same-day matter for the prescriber — never a reason to self-adjust the dose.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Anxiety Levels",
        front: "Name the four levels of anxiety with one marker of each.",
        back: "Mild — alert and driven. Moderate — narrowed attention, palpitations, tremor. Severe — focus on self only, cannot learn. Panic — terror, cannot function, may scream or freeze.",
      },
      {
        topic: "Anxiety Nursing",
        front: "How do you calm an acutely anxious patient?",
        back: "Calm yourself first (breath, voice), short simple sentences, reduce stimuli, and ground her — feel the chair, name three visible things. Body first, logic later.",
      },
      {
        topic: "Depression Nursing",
        front: "What is the safe rule for SSRI teaching?",
        back: "Two to four weeks to work; never stop abruptly; report worsening or new agitation the same day.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Depression (fact sheet)",
        year: "2023",
        url: "https://www.who.int/news-room/fact-sheets/detail/depression",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing (9th edition)",
        year: "2022",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Caring Through the Conditions",
    lessonTitle: "Understanding Psychosis",
    description:
      "Voices, fixed beliefs and the person still living inside them. Meet the symptoms of psychosis and the calm, non-argumentative nursing that keeps everyone safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe positive and negative symptoms of schizophrenia and other psychoses.",
      "Explain why neither arguing with nor confirming delusions is therapeutic.",
      "Apply safe nursing actions for a patient experiencing persecutory beliefs or command hallucinations.",
    ],
    tags: ["psychosis", "schizophrenia", "psychiatric nursing", "safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Psychosis means losing contact with the reality the rest of us share: hearing voices no one else hears, holding beliefs that evidence cannot shake, thinking that becomes tangled. Schizophrenia is its most recognized cause, usually arriving in young adults. There is no 'mad patient' to manage — there is a frightened human being, an illness with effective treatment, and a family watching how you behave.\n\nThe old picture is a stereotype. The modern picture is symptoms — positive and negative — and each has its own nursing response.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Positive symptoms add things** that should not be there. Hallucinations — most often voices, commenting or commanding. Delusions — fixed false beliefs held with full conviction; persecutory ones are common ('they are poisoning my food'). Disorganized thinking and speech, odd or catatonic behaviour. **Negative symptoms take things away**: flat emotion, absent drive (avolition), few words, withdrawal, no pleasure. Families misread these as laziness or rudeness — your teaching role is to explain they are illness, not character.\n\nNursing rests on calm structure: low stimulation, predictable routine, short clear sentences. For beliefs, take the middle path — never argue, never confirm. For voices, ask about content: voices commanding harm are a **safety issue** — stay, inform senior staff, and document her exact words. Watch antipsychotic side effects — drowsiness, stiffness, tremor — and report rather than let her stop the drug. Teach families the relapse signs: sleeplessness, withdrawal returning, refusing medication. And tell them the truth that brings hope: with treatment, many people with schizophrenia work, marry and raise children.",
      },
      {
        type: "clinical_pearl",
        body: "The belief may be false, but the fear inside it is completely real. Nurse the fear and the person; leave the debate about the wall to the weeks of treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman is brought in by her family. She has not slept for three nights, eats almost nothing, and tells you people come through the wall at night to poison her food. She is tense, watching the door, and refuses to eat from the ward plate.\n\nWhat are your first nursing priorities?\n\nAnswer: Safety and calm first. Offer a quiet, low-stimulation space and stay with her — your presence is treatment. Do not argue her out of the wall and do not agree people come through it; offer the middle path: 'I don't see anyone, but I can see how frightened you are.' Solve the practical fear the belief feeds on — offer sealed food she opens herself, so eating stops being a test of survival. Ask directly whether any voice tells her to harm herself, inform the senior nurse, and hand over her exact words. Reassure the family that this is a treatable illness, not a curse. The truth of the wall is not tonight's business; her safety is.",
      },
      {
        type: "memory_trick",
        body: "Think of a radio. Positive symptoms turn the volume UP — voices, beliefs, agitation. Negative symptoms pull the plug — flat, silent, withdrawn, no drive. Louder or unplugged: either way, the person needs the same calm, structured, non-arguing care.",
      },
      {
        type: "summary",
        body: "- Psychosis = lost contact with shared reality: hallucinations, delusions, disorganized thinking.\n- Positive symptoms add (voices, fixed beliefs, agitation); negative symptoms subtract (flat affect, no drive, withdrawal).\n- Negative symptoms are illness, not laziness — teach families this.\n- Never argue a delusion, never confirm it: 'I don't see them, but I can see they frighten you.'\n- Voices commanding harm are safety issues: stay, ask, escalate, document her exact words.\n- Watch antipsychotic side effects (stiffness, tremor, drowsiness) and report rather than stop.",
      },
    ],
    questions: [
      {
        topic: "Psychosis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The most common type of hallucination in schizophrenia is:",
        options: [
          "Visual — seeing figures and shadows",
          "Auditory — hearing voices, often commenting or commanding",
          "Olfactory — smelling poison in food",
          "Tactile — feeling insects on the skin",
        ],
        correctIndex: 1,
        explanation:
          "Auditory hallucinations, especially voices commenting on the person or commanding action, are the most common in schizophrenia. The other senses can be involved but far less often.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Psychosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient refuses to eat, believing the food is poisoned. Which nursing action is most appropriate?",
        options: [
          "Push the plate towards her and insist the food is safe",
          "Agree the food may be poisoned so that she trusts you",
          "Withhold all food until the belief passes",
          "Offer sealed food she can open herself, while neither confirming nor arguing with the belief",
        ],
        correctIndex: 3,
        explanation:
          "Meet the fear inside the belief: food she opens herself returns some control, while the middle path — no confirming, no arguing — preserves trust and nutrition. Insisting, colluding and starving all fail.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Psychosis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A patient with schizophrenia has become silent, withdrawn and unmotivated, with flat emotion. The family calls him 'lazy and rude'. The best explanation you can give them is:",
        options: [
          "These are negative symptoms of the illness — things the illness has taken away, not his character",
          "He is being punished for stopping his medication deliberately",
          "He is actually depressed and needs scolding to wake up",
          "This is terminal deterioration and nothing can be done",
        ],
        correctIndex: 0,
        explanation:
          "Negative symptoms — flat affect, avolition, withdrawal — are core features of the illness, frequently misread as laziness or rudeness. Naming them correctly protects the patient from blame and the family from despair.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Psychosis",
        front: "Positive vs negative symptoms in one line each.",
        back: "Positive adds what shouldn't be there: voices, delusions, disorganized thinking, agitation. Negative removes what should be there: flat affect, avolition, few words, withdrawal.",
      },
      {
        topic: "Psychosis",
        front: "What should you do when a patient reports voices commanding self-harm?",
        back: "Treat it as a safety issue: stay with the patient, ask about the content, inform senior staff immediately, and document her exact words.",
      },
      {
        topic: "Psychosis",
        front: "What is the middle path for responding to a persecutory delusion?",
        back: "'I don't share that belief, but I can see it frightens you — I'll stay with you.' Neither argue nor confirm; nurse the fear.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Schizophrenia (fact sheet)",
        year: "2022",
        url: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Elsevier",
        title: "Varcarolis' Foundations of Psychiatric-Mental Health Nursing (9th edition)",
        year: "2022",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "psychiatric-nursing",
    moduleTitle: "Caring Through the Conditions",
    lessonTitle: "Maternal Mental Health: A First Look",
    description:
      "Baby blues, perinatal depression, postpartum psychosis — three different visitors after birth, and only one of them is safe to watch and wait. Your first perinatal mental health preview.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe baby blues, perinatal depression and postpartum psychosis with their distinguishing features.",
      "Explain the risk factors that raise a mother's chance of perinatal mental illness.",
      "Apply duration, functioning and bonding cues to decide support versus escalation.",
    ],
    tags: ["maternal mental health", "perinatal", "postpartum depression", "screening"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Physical complications of birth announce themselves with blood pressure charts and pad counts. Mental ones whisper. Yet around one mother in ten will experience a mental health problem during pregnancy or the year after birth — and you may be the only person who sees both the mother and the baby every day.\n\nYour first tool is telling three visitors apart: the baby blues, perinatal depression and postpartum psychosis. They look related, but they are managed completely differently — and one of them is an emergency.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Baby blues** visit up to about eight in ten mothers, arriving around days three to ten: tearfulness, irritability, feeling overwhelmed — but she still sleeps when the baby sleeps, eats, smiles between tears, and can care for her baby. It fades within about two weeks and needs support, rest and reassurance, not treatment. **Perinatal depression** affects roughly one mother in ten: low mood or loss of interest most days for more than two weeks, with real impairment — not bonding with the baby, exhaustion beyond the normal, intrusive thoughts, sometimes thoughts of self-harm. Risk climbs with previous depression, poor partner support, unplanned pregnancy, violence, recent loss or stillbirth, HIV and poverty. It is treatable — counselling approaches such as WHO's Thinking Healthy, and medicines chosen for breastfeeding; screening tools like the Edinburgh Postnatal Depression Scale exist for exactly this.\n\n**Postpartum psychosis** is rare — one to two mothers in every thousand — but it is an emergency of the mind: sudden confusion, strange beliefs, hallucinations, agitation, not sleeping even when the baby sleeps, usually in the first two weeks after birth. It threatens both mother and baby. The response is urgent psychiatric referral today, not tomorrow — never leave her alone, and hand the baby's care to family or staff. For every condition the rule is the same: ask, listen, involve the partner, protect the mother-baby bond, refer early. And never dismiss her as spoilt or ungrateful — these are complications of childbirth, as real as haemorrhage.",
      },
      {
        type: "clinical_pearl",
        body: "Separate the three visitors by time and function: blues fade within two weeks; depression persists and steals function; psychosis arrives suddenly with confusion and strange beliefs — and waits for no one. When in doubt, escalate the same day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two beds, day five. Bed 1: a mother cries each morning, jokes with her mother-in-law by noon, sleeps when the baby sleeps and feeds well. Bed 2: a mother has not slept though the baby sleeps all night, refuses to hold her, and says the baby 'is not meant for this world'.\n\nWhich mother gets support, and which gets same-day escalation?\n\nAnswer: Bed 1 is the baby blues — brief, fluctuating, function intact. She gets rest, food, reassurance of the family and watchful waiting for up to two weeks. Bed 2 has crossed a line: at minimum perinatal depression with a frightening statement — 'not meant for this world' may be a depressive belief or something darker. Either way she needs assessment today, direct questions about thoughts of harming herself or the baby, no time alone with the baby until assessed, involvement of her partner, and referral per your facility's perinatal mental health pathway. Not sleeping at all while the baby sleeps is a red flag to write in the notes and say at handover. Do not 'wait and see' bed 2 — that is how the rare emergency is missed.",
      },
      {
        type: "memory_trick",
        body: "The B-ladder: Blues = Brief (better by two weeks, function intact). Beyond two weeks = depression (function and bonding stolen). Bizarre beliefs, confusion, no sleep = psychosis = emergency — escalate today.",
      },
      {
        type: "summary",
        body: "- Baby blues: up to 8 in 10 mothers, days 3-10, tears with intact function, gone in about 2 weeks — support and watch.\n- Perinatal depression: about 1 in 10, more than 2 weeks of low mood or anhedonia with impaired function and bonding — assess, screen, treat.\n- Risk factors: previous depression, poor support, unplanned pregnancy, violence, loss, HIV, poverty.\n- Postpartum psychosis: 1-2 per 1000, sudden confusion and strange beliefs with no sleep — emergency psychiatric referral, never leave her alone.\n- Ask directly, involve the partner, protect the bond, refer early — these are complications of childbirth, not character.",
      },
    ],
    questions: [
      {
        topic: "Maternal Mental Health",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother is tearful on days 4 to 8, sleeps when her baby sleeps, jokes between tears and feeds the baby well. The most likely explanation is:",
        options: [
          "Postpartum psychosis",
          "Perinatal depression requiring antidepressants",
          "Baby blues — support, rest and watchful waiting",
          "Normal infection of the puerperium",
        ],
        correctIndex: 2,
        explanation:
          "Brief tearfulness with intact sleep, appetite and function — and smiles between tears — is classic baby blues: self-limiting within about two weeks. It needs support, not medication.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Maternal Mental Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which feature most strongly distinguishes postpartum psychosis from postpartum depression?",
        options: [
          "Tearfulness in the first week",
          "Sudden confusion, strange beliefs or hallucinations, with no sleep even when the baby sleeps",
          "Worry about the baby's feeding",
          "Feeling tired at six weeks postpartum",
        ],
        correctIndex: 1,
        explanation:
          "Postpartum psychosis adds disorganization — confusion, delusions, hallucinations, agitation — and characteristically total insomnia despite the sleeping baby. Tearfulness, feeding worry and tiredness belong to the commoner, milder conditions.",
        courseSlug: "psychiatric-nursing",
      },
      {
        topic: "Maternal Mental Health",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother five days postpartum says her baby 'is not meant for this world' and has not slept for two nights. Your most appropriate first action is:",
        options: [
          "Note it in the chart and review at the six-week visit",
          "Reassure her that all new mothers feel strange at first",
          "Ask the family to pray about it before anything medical",
          "Ensure she is assessed today, ask directly about harm to herself or the baby, and do not leave her alone with the baby until assessed",
        ],
        correctIndex: 3,
        explanation:
          "A disturbing statement plus total insomnia same-day after birth crosses the safety line: assess today, ask directly about thoughts of harm, and supervise contact with the baby until a senior assessment clears it. Waiting weeks or spiritualizing first can be fatal.",
        courseSlug: "psychiatric-nursing",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Mental Health",
        front: "How do baby blues differ from perinatal depression?",
        back: "Blues: days 3-10, tearful but functioning — sleeps, eats, feeds baby, resolves within about 2 weeks. Depression: more than 2 weeks of low mood or anhedonia with impaired function and bonding; needs assessment and treatment.",
      },
      {
        topic: "Maternal Mental Health",
        front: "Postpartum psychosis — three features and the response.",
        back: "Sudden confusion, delusions or hallucinations, agitation with no sleep, usually within 2 weeks of birth. Response: urgent psychiatric referral today; never leave the mother alone with the baby.",
      },
      {
        topic: "Maternal Mental Health",
        front: "Name four risk factors for perinatal depression.",
        back: "Previous depression, poor partner support, unplanned pregnancy, and violence — also recent loss or stillbirth, HIV, and poverty.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Maternal mental health (fact sheet)",
        year: "2020",
        url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mental-health",
        note: "Check for latest update.",
      },
      {
        organization: "World Health Organization",
        title: "Thinking Healthy: A Manual for Psychosocial Management of Perinatal Depression",
        year: "2015",
        note: "WHO psychological intervention programme — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide, 2nd edition",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "A Day on the Ward",
    lessonTitle: "Admission and Discharge: The Bookends of Care",
    description:
      "The first hour sets her anxiety, the last hour decides her safety at home. Master the two processes that bookend every episode of care.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the components of a safe, welcoming admission assessment and orientation.",
      "Explain why discharge planning begins on the day of admission and what discharge criteria must be met.",
      "Apply teach-back counselling to postnatal discharge, including danger signs for mother and baby.",
    ],
    tags: ["admission", "discharge", "teach-back", "postnatal care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Admission and discharge look like paperwork, but they are clinical acts. The first hour of admission decides how safe she feels to tell you the truth — about her four previous caesareans, her herbs, her bleeding. The last hour of discharge decides whether six weeks of careful care survive the journey home, or die in a trotro.\n\nBoth processes reward structure. Learn the components once, and every ward you ever work on becomes calmer — including you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Admission** begins with a welcome by name and orientation to the ward: routines, meal times, water and toilet, where relatives wait, how to call for help. Then verification — identity, folder, allergy band — and the baseline assessment: history including obstetric history and previous complications, observations, and risk screening (anaemia, pre-eclampsia, haemorrhage risk, social risks). Belongings are recorded, consent is taken properly, the family is informed, and everything is documented. A warm admission is not politeness; frightened patients under-disclose, and under-disclosure is a clinical risk.\n\n**Discharge** starts on admission day — expected length of stay known, teaching sprinkled through the days rather than dumped at the gate. Discharge when criteria are met: mother — bleeding minimal, no fever, feeding established, able to care for herself and the baby; baby — feeding well, warm, no danger signs. Then structured teaching with **teach-back**: danger signs for the mother (heavy bleeding, fever, foul-smelling lochia, headache or blurred vision, convulsions, breast problems) and for the baby (poor feeding, jaundice, fast breathing, fever, unusually cold or floppy), plus cord care, family planning and immunization appointments. Give a written summary for the family and send a copy to the receiving facility; confirm the follow-up date and how she will travel. Document what was taught and what she could repeat back.",
      },
      {
        type: "clinical_pearl",
        body: "'Any questions?' buys silence. 'So that I know I explained well — tell me two danger signs that would bring you straight back' buys safety. The burden of proof of understanding belongs to you, not to her.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother is discharged on day 3 with her card handed over quickly at the gate. Ten days later she returns febrile with foul-smelling lochia and a hard, tender uterus — puerperal sepsis. She tells the consultant that no one ever said fever mattered.\n\nWhat was missed, and how is discharge done properly?\n\nAnswer: What was missed was the teaching half of discharge — the danger signs were never explained, never checked with teach-back and never given in writing, so the family had no tripwire to trigger a return. Done properly: sit with the mother and one relative before discharge; teach the specific danger signs in plain language; ask her to say two back; hand over a written sheet with the postnatal check dates and the baby's immunization day; confirm transport and who decides in the family; send the discharge summary to the CHPS compound; and record that teaching was given and understood. Discharge is the last clinical act of the episode, not a clerical exit — and the notes must be able to prove it happened.",
      },
      {
        type: "memory_trick",
        body: "Discharge in B-E-D: Before you go — criteria met; Education — danger signs with teach-back; Documents — written summary, appointments, and a record of what she understood.",
      },
      {
        type: "summary",
        body: "- Admission: welcome, orient, verify identity and allergies, baseline assessment, risk screening, consent, documentation.\n- A warm admission is clinical — fear suppresses disclosure of history that changes management.\n- Discharge planning starts on admission day; teach through the stay, not at the gate.\n- Discharge criteria for mother and baby must be met, then danger-sign teaching with teach-back.\n- Written summary for the family, copy to the receiving facility, confirmed follow-up — and document the teaching.",
      },
    ],
    questions: [
      {
        topic: "Admission and Discharge",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A newly admitted woman hesitates to mention her four previous caesarean scars. Which admission element most directly encourages full disclosure?",
        options: [
          "Rapid completion of the admission form",
          "A warm welcome, orientation and reassurance about confidentiality",
          "Immediate insertion of an intravenous line",
          "Listing the ward visiting rules first",
        ],
        correctIndex: 1,
        explanation:
          "Safety — a warm welcome plus clear confidentiality — lowers fear, and lowered fear raises disclosure. Forms and cannulas can wait a few minutes; a hidden scar history cannot.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Admission and Discharge",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which set belongs in the danger-sign counselling at every postnatal discharge?",
        options: [
          "The baby's Apgar scores at birth",
          "The mother's admission weight",
          "The names of all ward staff who cared for her",
          "Heavy bleeding, fever, foul-smelling lochia, headache or blurred vision — and poor feeding or jaundice in the baby",
        ],
        correctIndex: 3,
        explanation:
          "Discharge teaching centres on the tripwires that demand return: maternal bleeding, sepsis and pre-eclampsia signs, and the baby's feeding, colour and breathing. Apgar scores and staff names are history, not safety teaching.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Admission and Discharge",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During discharge teaching you finish explaining the danger signs. The most reliable way to confirm she has understood is:",
        options: [
          "Ask her to repeat two danger signs back to you in her own words",
          "Ask 'Any questions?' and move on when she shakes her head",
          "Hand her the discharge summary to read at home",
          "Ask the relatives whether she is educated",
        ],
        correctIndex: 0,
        explanation:
          "Teach-back puts the proof of understanding on you: she says the teaching back in her own words. Head-shakes are politeness, summaries get lost, and her relatives' schooling is not her comprehension.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Admission and Discharge",
        front: "List the core components of admission.",
        back: "Welcome and orientation, identity and allergy verification, baseline history and observations, risk screening, consent, belongings, informing family, documentation.",
      },
      {
        topic: "Admission and Discharge",
        front: "When should discharge planning begin, and what is teach-back?",
        back: "On the day of admission. Teach-back: asking the patient to repeat key teaching in her own words — the proof of understanding rests on the teacher, not the learner.",
      },
      {
        topic: "Admission and Discharge",
        front: "Name four maternal danger signs to teach before postnatal discharge.",
        back: "Heavy bleeding, fever, foul-smelling lochia, headache or blurred vision (plus convulsions and breast problems). For the baby: poor feeding, jaundice, fast breathing, fever, floppiness.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
        note: "WHO PCPNC guide — check for latest edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Postnatal Care of the Mother and Newborn",
        year: "2013",
        note: "Discharge timing and counselling content — check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Obtain current version from NMC Ghana.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "A Day on the Ward",
    lessonTitle: "Shift Handover: Passing the Baton Safely",
    description:
      "Between two shifts, care changes hands like a baton — and a dropped baton is a dropped patient. Learn the structured handover that keeps the baton flying.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the SBAR structure and apply it to a postnatal ward handover.",
      "Explain the added safety of bedside handover and read-back of critical information.",
      "Apply risk-based ordering — sickest patient first, with data — to every handover you give.",
    ],
    tags: ["handover", "communication", "sbar", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Twice a day, sometimes thrice, your patients change hands. For a few minutes, the safest of wards holds its breath — because information lost at that seam does not exist for the next nurse, no matter how carefully it was observed. Communication failures at moments like these are among the most common roots of preventable harm, in every country that has measured it.\n\nThe cure is structure: same format, same order, every time, so nothing depends on memory or mood. If you can hand over well as a student, you will be trusted with more than students usually are.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**SBAR** is the format. **Situation** — who she is, where she is, what is happening now. **Background** — the story that brought her here: obstetric history, this pregnancy's complications. **Assessment** — her latest numbers and your clinical reading: observations, pad counts, labour progress, your worry. **Recommendation** — what must happen next, by whom and by when: 'needs hourly pad checks for two hours; IV running; group and save sent; doctor to review at 4 p.m.' Hand over the sickest patients first, then walk the ward — **bedside handover** adds a layer of safety the notes cannot: the incoming nurse sees the woman's colour and drip with her own eyes, the woman hears her plan spoken aloud and can correct it, and the family is introduced to the new face.\n\nTwo habits close the loop. **Read-back** for anything critical — drug doses, infusion rates, allergies — the listener repeats it back so errors surface before they reach the patient. And questions are invited, not resented. Keep the environment still: no phone calls, no corridor shouting; if a crisis forces a corridor report, the full structured handover is completed once the ward is safe. Whatever is not handed over does not exist for the next shift — and never rely on memory alone; the notes must carry the same story.",
      },
      {
        type: "clinical_pearl",
        body: "A handover is a transfer of responsibility, not of impressions. 'All fine, six patients' transfers nothing. The incoming nurse can only guard what she has been told — with numbers.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Night shift takes a postnatal ward on the report: 'All fine, six patients, everything is in the folder.' At 2 a.m. a woman soaks a pad in twenty minutes. The folder shows her last two evening pads were already heavier than before, with a comment: 'watch pad count' — but nobody said it aloud.\n\nWhat should the 6 p.m. handover have contained?\n\nAnswer: A proper SBAR for that patient, spoken first because she was the highest risk. Situation: bed 4, day 1 postpartum. Background: grand multipara, anaemic this pregnancy. Assessment: bleeding trend rising — pads heavier over the last two hours, pulse 96. Recommendation: pad checks every 30 minutes for the next two hours, IV access secured, group and save sent, doctor informed of the trend, and a defined escalation threshold — any soak-through in under an hour means call now. Spoken aloud, that would have put the night nurse at her bedside at 10 p.m. instead of 2 a.m. 'All fine' is an opinion; a trend with a number and a threshold is a handover.",
      },
      {
        type: "memory_trick",
        body: "Order your report Hot first, then Whole: the sickest patient first in full SBAR, then the whole-ward picture. And remember — what you don't say doesn't exist.",
      },
      {
        type: "summary",
        body: "- Handover is the seam where care is most easily lost; structure is the repair.\n- SBAR: Situation, Background, Assessment, Recommendation — the last one with times and owners.\n- Sickest first; bedside handover lets the incoming nurse verify with her own eyes.\n- Read-back for doses, rates and allergies closes the loop on critical items.\n- Questions are invited; interruptions are refused.\n- 'All fine' transfers nothing — hand over numbers, trends and thresholds.",
      },
    ],
    questions: [
      {
        topic: "Shift Handover",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In SBAR, the R stands for:",
        options: [
          "Recovery — her discharge plan",
          "Record — the folder reference number",
          "Recommendation — what should happen next, by whom and by when",
          "Reassurance — that the patient is stable",
        ],
        correctIndex: 2,
        explanation:
          "Recommendation converts your assessment into ordered action: what to do, who does it and by when. It is the half most often left out — and the half that protects patients overnight.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Shift Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "'All fine, everything is in the folder' is a poor handover mainly because:",
        options: [
          "It is too short to be polite",
          "It transfers no clinical data, trends or thresholds — what is not said does not exist for the incoming nurse",
          "Folders cannot be opened by night staff",
          "It assumes the patients are sleeping",
        ],
        correctIndex: 1,
        explanation:
          "Responsibility can only pass with information. An impression transfers no data, no trend and no escalation threshold, so the incoming nurse cannot watch for what mattered. Length and politeness are beside the point.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Shift Handover",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why do read-back and bedside handover add safety?",
        options: [
          "They make the shift shorter",
          "They hide errors from the ward in-charge",
          "They let the outgoing nurse leave earlier",
          "Read-back surfaces misheard critical items, and bedside handover lets the incoming nurse verify the patient's condition directly and involve her in the plan",
        ],
        correctIndex: 3,
        explanation:
          "Read-back catches mishearing before it becomes a medication event; the bedside lets the incoming nurse check colour, drip and alertness personally — and the woman herself can correct the story. None of it shortens anything.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Shift Handover",
        front: "Expand SBAR with a one-line example.",
        back: "Situation (bed 4, day 1 postpartum, bleeding heavier); Background (grand multipara, anaemic); Assessment (pads rising, pulse 96); Recommendation (pad checks every 30 minutes, IV access, group and save, doctor to review at 4 p.m.).",
      },
      {
        topic: "Shift Handover",
        front: "Why bedside handover?",
        back: "The incoming nurse sees the patient and drip personally, the woman hears and can correct her own plan, and the family meets the new nurse.",
      },
      {
        topic: "Shift Handover",
        front: "What gets read back?",
        back: "Anything critical — drug doses, infusion rates, allergies: the listener repeats it so mishearing is caught before it reaches the patient.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Solutions: Communication During Patient Hand-Overs (Solution 3)",
        year: "2007",
        note: "WHO Collaborating Centre for Patient Safety — verify current WHO materials.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Obtain current version from NMC Ghana.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "A Day on the Ward",
    lessonTitle: "Organising Care for Multiple Patients",
    description:
      "Six patients, one call bell, two doctors and a crying baby — all at 07:30. Organisation is a clinical skill, and this lesson teaches it like one.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe the ABC and risk-based principles for prioritising patient care.",
      "Explain clustering of care, delegation within scope and early escalation as workload tools.",
      "Apply prioritisation to a maternity ward with several competing demands at once.",
    ],
    tags: ["prioritization", "workload", "time management", "delegation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One patient at a time is nursing as it is taught; six at once is nursing as it is lived. On a real ward, call bells, doctors' orders, a labouring woman and your own hunger all compete for the same two hands. Organisation is what stands between busy and safe — and it is a skill you build deliberately, not a personality some people are born with.\n\nThe heart of it is triage: deciding who needs you first when everybody needs you, and then arranging the rest so nothing quietly dies while you are being a hero elsewhere.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Prioritise by risk, not by noise. Unstable before stable; actual problems before potential ones; and ABC first — **airway, breathing, circulation** — which in maternity translates to: bleeding, convulsion, respiratory distress and fetal distress outrank routine observations, paperwork and comfort. Add Maslow's logic: life before safety, safety before comfort — a woman with pre-eclampsia symptoms comes before a newborn's routine vitamin K, and both come before the notes.\n\nThen organise the possible. Start the shift with a walk-through: lay eyes on every patient and rank the list. **Cluster care** — combine observations, medications and charting for the same woman into one visit instead of three. Delegate within scope — the aide can walk her, a colleague can cover the other labour room. Document in real time, even one line, because an unrecorded event doubles later. Protect the plan from interruptions by triaging them too: ask who is asking, for whom, and how sick. And when two emergencies pull you in opposite directions, the first clinical act is to **call for help** — one nurse cannot split herself, and a shouted 'come now' is therapy for both patients. Accept that not everything will be done; the skill is choosing correctly what must.",
      },
      {
        type: "clinical_pearl",
        body: "When two emergencies pull you at once, call for help before you move — one nurse cannot be in two rooms, and summoning support is the first treatment, not a confession of failure.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "07:30 on a district maternity ward: bed 1 is 8 cm dilated with meconium-stained liquor; bed 3, day 1 after caesarean, has a blood pressure of 150/100 and now complains of headache and blurred vision; a newborn is due vitamin K and a first feed; the night notes are unsigned.\n\nIn what order do you act?\n\nAnswer: Two women are simultaneously high-risk, so first call for help — alert the senior nurse and obstetric review so both rooms can be covered in parallel. You stay with bed 3: severe pre-eclampsia with neurological signs is a convulsion waiting, so you assess, position her safely, prepare magnesium sulphate per protocol and keep her never alone. The labour room with meconium needs continuous fetal heart monitoring and preparation for possible urgent delivery — your summoned colleague and review take that, with a clear SBAR. Vitamin K and the first feed are essential but not minute-critical; once acute coverage is secured, they go to the next capable pair of hands. The unsigned notes are last, and the delay itself is documented. Priority follows risk, not the order of bells.",
      },
      {
        type: "memory_trick",
        body: "A little ward rhyme: ABC before OBS, bleeding before feeding, sick before sore — and shout before you split. If two alarms ring at once, calling for help is the answer to both.",
      },
      {
        type: "summary",
        body: "- Prioritise by risk, not by noise: unstable before stable, actual before potential, ABC first.\n- Open the shift with a walk-through and a ranked list; revise it after every major event.\n- Cluster care per patient, delegate within scope, document in real time.\n- Triage interruptions too — who asks, for whom, how sick.\n- Two emergencies at once: call for help first; you cannot split yourself.\n- Not everything gets done; the skill is choosing what must.",
      },
    ],
    questions: [
      {
        topic: "Organising Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 07:30 you must choose between: a day-1 post-caesarean woman with BP 150/100, headache and blurred vision; a woman at 8 cm with meconium-stained liquor; a newborn due vitamin K; and unsigned notes. Which principle governs your first move?",
        options: [
          "Complete tasks in bed order from bed 1 upwards",
          "Finish documentation first because records are permanent",
          "Handle the quietest patient first to avoid waking others",
          "Risk-based priority — summon help to cover both high-risk women, then stay with the pre-eclamptic woman while a colleague covers the labour room",
        ],
        correctIndex: 3,
        explanation:
          "Risk beats order and paperwork: both women are urgent, so the first act is summoning help, then splitting coverage — you with the imminent-eclampsia risk, the colleague with fetal distress. Vitamin K and notes follow once coverage exists.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Organising Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "'Clustering care' means:",
        options: [
          "Grouping all the sickest patients near the nurses' station",
          "Combining observation, medication and charting for one patient into a single visit",
          "Asking all relatives to visit at one time",
          "Documenting all patients' notes at the end of the shift",
        ],
        correctIndex: 2,
        explanation:
          "Clustering collects everything one patient needs into one visit — fewer walks, fewer interruptions of her rest, fewer missed items. It is about tasks per patient, not bed arrangements.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Organising Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two emergencies occur at opposite ends of the ward at the same time. Your first action should be:",
        options: [
          "Choose the patient you know better and proceed alone",
          "Call for help immediately so that both rooms can be covered",
          "Wait to see which emergency settles on its own",
          "Document both events before acting",
        ],
        correctIndex: 1,
        explanation:
          "One nurse cannot cover two rooms, so summoning help is the first clinical act — it starts coverage for both patients at once. Choosing one, waiting or documenting first all leave someone unwatched.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Organising Care",
        front: "State the priority ladder in maternity.",
        back: "ABC and risk first — bleeding, convulsion, respiratory or fetal distress; then safety issues (pre-eclampsia symptoms, infection risk); then comfort and routine; paperwork last.",
      },
      {
        topic: "Organising Care",
        front: "What is clustering of care and why does it save time?",
        back: "Combining obs, meds and charting for one patient into one visit — fewer walks, fewer interruptions of her rest, fewer missed items.",
      },
      {
        topic: "Organising Care",
        front: "What is the rule when two emergencies pull at once?",
        back: "Call for help first — summoning support is the first clinical act, not an admission of failure; one nurse cannot cover two rooms.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing (10th edition)",
        year: "2021",
        note: "Time management, prioritization and delegation chapters — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Delegation and scope — obtain current version from NMC Ghana.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "Learning from Real Patients",
    lessonTitle: "Reflective Practice: Turning Experience into Learning",
    description:
      "Experience teaches only those who process it. Learn the structured habits that turn yesterday's hard shift into tomorrow's better one.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe reflection-in-action and reflection-on-action with ward examples.",
      "Explain the stages of Gibbs' reflective cycle and the difference between reflection and rumination.",
      "Apply a structured reflection to a clinical event that is still bothering you.",
    ],
    tags: ["reflection", "learning", "gibbs", "portfolio"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "There are two ways to have ten years of experience. One is to grow every year; the other is to have one year of experience repeated ten times. The difference between them is reflection — the deliberate habit of going back over an event, extracting its lesson, and changing what you do next.\n\nMidwifery hands you powerful material: births, losses, near misses, words you wish you could unsay. Left unprocessed, they pile up and make you heavy. Processed properly, they are the making of you. This lesson gives you the machinery.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Reflection comes in two timings. **Reflection-in-action** is thinking on your feet — noticing mid-episode that the pushing effort has changed sound and adjusting your plan before the emergency does. **Reflection-on-action** is the scheduled revisit afterwards, and it has a structure: Gibbs' cycle. **Description** — what happened, facts only. **Feelings** — what you felt at each point, honestly. **Evaluation** — what went well, what went badly. **Analysis** — why, drawing on knowledge and system factors. **Conclusion** — what you now know. **Action plan** — what you will do differently, in specific terms. Skip the action plan and you have storytelling, not learning.\n\nKeep it light and regular: ten minutes after a shift with the pocket version — What? So what? Now what? Choose the moments that linger: the shoulder dystocia you froze in, the transfer that came late, the exchange with a relative. Write them while they are warm, then take hard cases to a senior or a debrief, because reflection works better with a witness. Guard the border with **rumination** — replaying an event with no plan attached, on a loop, at 2 a.m. Reflection ends in an action and relief; rumination ends in neither. If an event still shakes you after several weeks, that is a signal to seek support — a mentor, counselling, your chaplain — not a verdict of weakness.",
      },
      {
        type: "clinical_pearl",
        body: "If you don't schedule reflection, the day will schedule it for you — at 2 a.m., in your dreams. Ten minutes with a notebook is the cheaper appointment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student nurse keeps replaying a night PPH: when the senior called for IV access she froze for what felt like a minute, and someone else got the line. The woman was transfused and survived, but the student now cannot sleep on postnatal wards.\n\nHow does she turn this into growth instead of a scar?\n\nAnswer: She runs Gibbs on paper. Description: she was asked for an IV during a PPH and did not attempt it. Feelings: terror, and shame at being seen frozen. Evaluation: the outcome was good, but her delay was real. Analysis: she had never practised cannulation on a call-shift, and no one had told her who hands over which tasks in emergencies. Conclusion: it was a skill gap and a system gap, not a character verdict. Action plan: ten supervised cannulations on her next rostered shifts; a one-card 'emergency roles' summary agreed with her senior; a request to debrief the case at the next staff meeting. The loop ends in plans — that is reflection. Playing the frozen minute nightly, with no plan, would be rumination — and it cures nothing.",
      },
      {
        type: "memory_trick",
        body: "Pocket version: What? So what? Now what? Full version, Gibbs in six steps — Describe, Feel, Evaluate, Analyse, Conclude, Act. If it doesn't end in an action, it wasn't reflection; it was replay.",
      },
      {
        type: "summary",
        body: "- Reflection-in-action thinks on your feet; reflection-on-action is the scheduled revisit.\n- Gibbs: Description, Feelings, Evaluation, Analysis, Conclusion, Action plan — the last step is non-negotiable.\n- Keep it light: ten minutes, What? So what? Now what?\n- Reflect on what lingers; take hard events to seniors and debriefs — a witness helps.\n- Reflection ends in an action and relief; rumination ends in neither — seek help if an event stays heavy for weeks.",
      },
    ],
    questions: [
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Noticing mid-labour that a pushing effort has changed and quietly preparing for a possible shoulder dystocia is an example of:",
        options: [
          "Reflection-on-action",
          "Rumination",
          "Clinical audit",
          "Reflection-in-action",
        ],
        correctIndex: 3,
        explanation:
          "Thinking and adjusting while the event is still unfolding is reflection-in-action. The scheduled revisit afterwards is reflection-on-action; audit is a formal system review.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What most distinguishes reflection from rumination?",
        options: [
          "Rumination is written and reflection is spoken",
          "Reflection ends in a specific action plan; rumination is replaying without one",
          "Reflection requires a supervisor's signature",
          "Rumination only happens after good outcomes",
        ],
        correctIndex: 1,
        explanation:
          "The action plan is the watershed: reflection processes an event into a change of practice and brings relief; rumination replays it on a loop with no plan and no relief — a sign to seek support.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Reflective Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Gibbs' cycle, what follows Evaluation (what went well or badly)?",
        options: [
          "Analysis — why it happened, drawing on knowledge and system factors",
          "Description — restating the facts",
          "Termination — closing the episode",
          "Feelings — naming the emotions again",
        ],
        correctIndex: 0,
        explanation:
          "After judging what went well or badly, Analysis asks why — linking the event to knowledge, skills and system factors. Description and Feelings have already happened; there is no Termination step.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Reflective Practice",
        front: "Reflection-in-action vs reflection-on-action?",
        back: "In-action: thinking and adjusting mid-event. On-action: the structured revisit afterwards — Gibbs' six steps ending in an action plan.",
      },
      {
        topic: "Reflective Practice",
        front: "Name Gibbs' six steps in order.",
        back: "Description, Feelings, Evaluation, Analysis, Conclusion, Action plan.",
      },
      {
        topic: "Reflective Practice",
        front: "What is the pocket reflection tool, and the rumination warning?",
        back: "What? So what? Now what? If an event still hurts after weeks with no relief, seek support — mentor, counselling, chaplain. That's health, not weakness.",
      },
    ],
    sources: [
      {
        organization: "FE Palmer Press",
        title: "Learning by Doing: A Guide to Teaching and Learning Methods (Gibbs, G.)",
        year: "1988",
        note: "The original reflective cycle source.",
      },
      {
        organization: "Wiley-Blackwell",
        title: "Reflective Practice in Nursing (Bulman & Schutz, eds.)",
        year: "2013 (4th edition)",
        note: "Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Frames lifelong-learning obligations; reflection doubles as portfolio evidence — obtain current version.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "Learning from Real Patients",
    lessonTitle: "When Things Go Wrong: Learning Without Blame",
    description:
      "Errors happen because nurses are human inside imperfect systems. What happens next — blame and hiding, or learning and prevention — is a choice, and it is yours to make.",
    difficulty: "Moderate",
    durationMin: 13,
    objectives: [
      "Describe slips, lapses and mistakes, and distinguish active errors from latent conditions.",
      "Explain why blame culture makes care less safe and just culture makes it safer.",
      "Apply the correct sequence of actions after an error or near miss, including incident reporting and duty of candour.",
    ],
    tags: ["error", "safety culture", "incident reporting", "near miss"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "One day you will reach for the wrong vial, give a dose late, or miss a sign that a busier shift conspired to hide. Health care is delivered by humans in imperfect systems, so errors are not a question of if — they are a question of when, and of what happens next. Systems that punish silence breed hidden errors that repeat; systems that surface errors learn, and the same mistake never gets its second patient.\n\nThis lesson is about the vocabulary of error, the culture that either buries or harvests it, and your own first moves on the worst day.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Learn the words. An **error** is a planned action that fails, or a plan that was wrong from the start. A **slip** is doing the wrong thing unintentionally — picking the look-alike vial. A **lapse** is a memory failure — forgetting to sign the drug chart. A **mistake** is a plan that was wrong even if executed perfectly — right technique, wrong dose intention. A **near miss** is harm caught before it reached the patient — the free lesson. Errors happen at the **sharp end** (you, holding the syringe), but they are fed by **latent conditions** at the blunt end: short staffing, look-alike packaging, a fridge that has failed twice, a missing chart. Reason's Swiss cheese image says it simply: every defence layer has holes, and harm passes only when the holes align — a good system slides new slices in.\n\n**Just culture** is the destination: honest accountability, where reckless behaviour is still answered, but human error is met with system repair and support. Blame culture does the opposite — it teaches everyone to hide, and hiding is the engine of repeat harm. Your sequence on the worst day: patient first — care, honesty, an apology to the family (candour is humanity, not an admission of guilt); then inform your senior immediately; then complete the incident form — facts, no speculation, no blame, written the same day. Never alter records; contemporaneous documentation protects you. Support the involved colleague, who is often the 'second victim' of the event. And report near misses as loudly as errors: they are the cheapest tuition the ward will ever get.",
      },
      {
        type: "clinical_pearl",
        body: "A near miss is free tuition — it teaches the ward what almost killed someone, at no cost in blood. An unreported near miss is that gift thrown away, waiting for a busier colleague.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You reach for oxytocin and ergometrine vials that sit side by side and look nearly identical. Something makes you pause — and you find you were one label away from the wrong drug. No harm done. A colleague shrugs: 'Nothing happened, why fill a form?'\n\nWhat do you do, and why?\n\nAnswer: You report the near miss the same day, on the incident form, in facts: the vials, the shelf, the near pick. Nothing happened this time because you paused — but the next nurse will be busier, the light dimmer, and the pause may not come. Latent conditions like look-alike storage produce active errors exactly when the holes align; your form is the new cheese slice. Then act at the bedside too: physically separate the vials, label the shelf, and raise it at the next meeting. Staying silent to avoid 'trouble' protects no one — it just schedules the error for someone else. In a just culture the report is welcomed, not punished; that is the culture you are building by writing it.",
      },
      {
        type: "memory_trick",
        body: "Swiss cheese: every layer has holes — staffing, labels, light, timing. Harm needs the holes to align. Every report you file slides a fresh slice between them. Fill the form, fill the hole.",
      },
      {
        type: "summary",
        body: "- Errors: slips (wrong action), lapses (memory), mistakes (wrong plan); near miss = harm caught before the patient.\n- Active errors happen at the sharp end; latent conditions — staffing, look-alike labels, failing equipment — load them.\n- Just culture repairs systems and supports humans; blame culture breeds hiding and repeat harm.\n- After an event: patient care first, candour with the family, inform senior, incident form the same day.\n- Never alter records; support the involved colleague — the second victim.\n- Report near misses loudly — they are the cheapest safety lessons the ward gets.",
      },
    ],
    questions: [
      {
        topic: "Error and Safety Culture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A nurse picks a look-alike vial from a shelf but notices the label before injecting. This is best described as:",
        options: [
          "A mistake, because the plan was wrong",
          "A lapse, because she forgot the drug chart",
          "A near miss — an error caught before harm reached the patient",
          "An adverse event, because harm occurred",
        ],
        correctIndex: 2,
        explanation:
          "An error that was caught before reaching the patient is a near miss — the cheapest safety lesson available. No harm occurred, so it is not an adverse event; the wrong pick itself would have been a slip.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Error and Safety Culture",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Reason's Swiss cheese model, latent conditions are:",
        options: [
          "Hidden system weaknesses — short staffing, look-alike packaging, failing equipment — that can align with active errors to cause harm",
          "The deliberate actions of careless staff",
          "The unpredictable weather affecting transport",
          "The patient's own hidden allergies",
        ],
        correctIndex: 0,
        explanation:
          "Latent conditions are the blunt-end weaknesses resident in the system — staffing, packaging, equipment — waiting quietly for a sharp-end error to line up with them. They are not the worker's intent or the patient's state.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Error and Safety Culture",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A drug error has just reached a patient, who is now being treated for its effects. Which sequence of actions is correct for the nurse involved?",
        options: [
          "Correct the chart quietly, then hope the shift ends without questions",
          "Complete the incident form first, then inform the senior, then tell the family",
          "Wait a week to see whether the patient recovers before reporting",
          "Ensure the patient's care first, inform the senior immediately, be honest with the family, and complete an incident report the same day",
        ],
        correctIndex: 3,
        explanation:
          "Patient first, then escalation, candour with the family, and factual written reporting the same day — never quiet chart corrections or delayed reporting. Delay and concealment are what turn single errors into repeat harm.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Error and Safety Culture",
        front: "Slip vs lapse vs mistake — one example each.",
        back: "Slip: picking the wrong look-alike vial. Lapse: forgetting to sign the chart. Mistake: executing flawlessly a plan that was wrong (e.g., a mis-calculated dose).",
      },
      {
        topic: "Error and Safety Culture",
        front: "What is a near miss and why report it?",
        back: "An error caught before reaching the patient. Reporting it exposes the latent condition (look-alike storage, broken fridge) before it finds a busier colleague — free tuition, no blood.",
      },
      {
        topic: "Error and Safety Culture",
        front: "What is just culture in one breath?",
        back: "Accountability with honesty: reckless behaviour is answered, but human error triggers system repair and support for the staff involved — so people report instead of hide.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "World Health Organization",
        title: "Medication Without Harm (Global Patient Safety Challenge)",
        year: "2017",
        note: "WHO global challenge — check for latest materials.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Duty of candour and reporting — obtain current version.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "Growing into the Team",
    lessonTitle: "Working with the Multidisciplinary Team",
    description:
      "A woman is delivered by a team, not a person. Learn who brings what — and how the newest voice at the table can still keep a patient safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the roles of the maternity team members — obstetrician, anaesthetist, newborn team, pharmacist, laboratory and social welfare.",
      "Explain psychological safety, closed-loop communication and the CUS escalation tool.",
      "Apply graded assertiveness to challenge a possible drug error on a senior colleague's order.",
    ],
    tags: ["teamwork", "mdt", "communication", "speaking up"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When a woman haemorrhages at midnight, the people who save her include the nurse who saw it first, the anaesthetist who takes her to theatre, the laboratory scientist who crossmatches blood in twenty minutes, the porter who runs, and the cleaner who kept the theatre ready. Modern maternity care is a relay of specialists — and the nurse is often the one holding the baton for the whole lap.\n\nTeamwork is therefore a clinical skill, not a soft one. This lesson covers who brings what — and, just as vital, how to speak up when you see something wrong, even when you are the most junior person in the room.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the cast. The **obstetrician** leads surgical and complex care; the **anaesthetist** owns pain relief, epidurals and the airway in theatre; the **paediatrician or newborn team** receives the compromised baby; the **pharmacist** guards doses and interactions — your phone call about a magnesium sulphate concentration is cheaper than an overdose; the **laboratory and blood bank** deliver the haemoglobin and crossmatched units; **physiotherapists**, **dietitians** and **social welfare** rebuild function, nutrition and safe discharge. Each sees one piece; the nurse often sees the whole woman across time — which is why your summary is valuable at every team meeting.\n\nTeams function on five pillars: shared goals spoken aloud at huddles, clear roles, **closed-loop communication** — orders repeated back and confirmed — mutual support, and situation monitoring, where everyone cross-checks everyone. Under them all sits **psychological safety**: the belief that you can speak without being punished. Tools give it teeth: **CUS** — 'I am Concerned / I am Uncomfortable / this is a Safety issue' — and the **two-challenge rule**: raise your concern twice; if it is unresolved, escalate to the next senior, respectfully and immediately. Speaking up is not disrespect; in aviation and in medicine alike, silence at the table has cost more lives than boldness ever has.",
      },
      {
        type: "clinical_pearl",
        body: "In a good team, the newest voice is welcome — the student who says 'why is her face swollen?' has saved more lives than the quiet one who assumed someone else had noticed. Hierarchy never resuscitates anyone; information does.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During an emergency for a woman with eclampsia, you hear the resident order 'magnesium 10 grams IV now'. Your understanding of the protocol is a 4-gram IV loading dose — 10 grams IV could stop her breathing.\n\nHow do you raise it?\n\nAnswer: With graded assertiveness, anchored to the patient: 'I'm concerned — I understood the IV loading dose is 4 grams; can we re-verify?' If the resident confirms 10 grams, you challenge a second time, referencing the protocol aloud; if it is still unresolved, you escalate immediately to the consultant or senior nurse — that is the two-challenge rule, and it exists exactly for this minute. Meanwhile, closed-loop the eventual order: repeat the dose back before it is given. You do not silently assume seniors are right — fatigue and stress make seniors human — and you do not shout across the room. Patient safety outranks hierarchy, every single time; the team that thanks you afterwards is the team worth working on.",
      },
      {
        type: "memory_trick",
        body: "Let C-U-S escalate for you: Concerned, then Uncomfortable, then Safety issue — said in that order, the room knows you are climbing the ladder. Two challenges without resolution means escalate. Graded words, steady voice.",
      },
      {
        type: "summary",
        body: "- The team: obstetrician, anaesthetist, newborn team, pharmacist, laboratory, physiotherapist, dietitian, social welfare — and you, the continuity holder.\n- Five pillars: shared goals, clear roles, closed-loop communication, mutual support, situation monitoring.\n- Psychological safety lets anyone speak; CUS and the two-challenge rule give speaking up structure.\n- Closed-loop every critical order: repeat it back before it reaches the patient.\n- Your synthesis of the whole woman is a legitimate contribution at every team meeting.\n- Silence costs lives; information saves them — speak, respectfully and immediately.",
      },
    ],
    questions: [
      {
        topic: "Multidisciplinary Team",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which team member is your first call to confirm the concentration and dose of magnesium sulphate before an urgent re-order?",
        options: [
          "The hospital porter",
          "The pharmacist",
          "The social welfare officer",
          "The ward cleaner",
        ],
        correctIndex: 1,
        explanation:
          "The pharmacist guards doses, concentrations and interactions — a thirty-second call is cheaper than an overdose. Porters and welfare officers play vital roles, but dose verification belongs to pharmacy.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Multidisciplinary Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the CUS tool, saying 'I am uncomfortable with this' signals:",
        options: [
          "The second and final level — you will now bypass everyone and call the director",
          "A personal preference about the roster",
          "The middle of the escalation ladder — rising concern, before declaring a safety issue",
          "That you are physically unwell and need relief",
        ],
        correctIndex: 2,
        explanation:
          "CUS climbs in three steps — Concerned, Uncomfortable, Safety issue. 'Uncomfortable' is the middle rung: clearly rising, not yet the top. It is a safety ladder, not a roster complaint or a sick note.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Multidisciplinary Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You believe a senior colleague's verbal drug order is dangerously high, and your first two challenges have been dismissed. What does the two-challenge rule direct you to do?",
        options: [
          "Escalate to the next senior level immediately and respectfully",
          "Carry out the order, since you have already challenged it twice",
          "Stay silent to preserve the working relationship",
          "Wait until the shift ends and report it in writing next week",
        ],
        correctIndex: 0,
        explanation:
          "Two unanswered challenges are the trigger to escalate to the next level, respectfully and immediately — patient safety outranks hierarchy and comfort. Proceeding, staying silent or delaying all hand the error to the patient.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Multidisciplinary Team",
        front: "What is closed-loop communication?",
        back: "The order-giver states, the receiver repeats it back, the giver confirms — so critical instructions are verified before they reach the patient.",
      },
      {
        topic: "Multidisciplinary Team",
        front: "Expand CUS and its use.",
        back: "'I am Concerned / I am Uncomfortable / this is a Safety issue' — graded language that tells the team you are climbing the escalation ladder; pair with the two-challenge rule.",
      },
      {
        topic: "Multidisciplinary Team",
        front: "What is the two-challenge rule?",
        back: "Raise your concern twice, clearly. If unresolved, escalate to the next senior level immediately — patient safety outranks hierarchy.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241951501",
      },
      {
        organization: "Elsevier",
        title: "Potter & Perry's Fundamentals of Nursing (10th edition)",
        year: "2021",
        note: "Team communication and delegation chapters — verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Obtain current version from NMC Ghana.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "clinical-practice",
    moduleTitle: "Growing into the Team",
    lessonTitle: "Caring for Yourself While Caring for Others",
    description:
      "The ward gets the nurse you bring to it. Sleep, boundaries, debriefs and the courage to ask for help — the self-care that makes a long career possible.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe burnout's three dimensions and the normal range of acute stress after traumatic events.",
      "Explain the personal and institutional defences against burnout and compassion fatigue.",
      "Apply a self-care plan — REST — to your own first difficult rotation.",
    ],
    tags: ["self-care", "resilience", "burnout", "support"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You chose a profession that holds joy in one hand and loss in the other — sometimes within the same hour. The work of caring runs on a fuel that is genuinely yours, and it can run out. Burnout is not weakness and it is not shameful; the WHO classifies it as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed.\n\nCaring for yourself is therefore not a luxury bolted onto the end of the syllabus. It is maintenance of the instrument of care — which is you.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Learn the enemy's shape. Burnout has three dimensions: **emotional exhaustion** — nothing left in the tank; **depersonalization** — patients become 'the PPH in bed 3', and cynicism creeps into your voice; **reduced accomplishment** — 'nothing I do matters'. Its cousin, compassion fatigue, comes from repeated exposure to suffering. And after acute events — a maternal death, an aggressive relative, a resuscitated baby — stress reactions like replaying images, numbness and irritability are normal, and usually ease within days to a few weeks. What matters is the trend.\n\nBuild the defences while you are still well. The basics are boringly powerful: protected sleep even after nights, real food, movement, and your faith or spiritual practice as an anchor. Mark the border between ward and life with a small ritual — changing your clothes, a short walk, three lines in a notebook — so the shift does not follow you home. After every bad event, debrief with the team and talk it through with someone trusted; silence converts stress into sediment. Learn your own early warning signs — Sunday dread, a shortening temper at home, headaches, dreams about the ward — and check on colleagues the way you wish someone would check on you. And when the signs persist, asking for help — a mentor, a senior, counselling through your service or association — is professionalism, not weakness. The strongest nurses you will ever meet are the ones who learned this early.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot pour from an empty calabash. The ward gets the nurse you bring to it — rested, fed and human. Protecting yourself is protecting them, and it is not negotiable.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A week after a maternal death on her shift, a student nurse finds herself snapping at juniors, avoiding the ward where it happened, and dreaming of the family's crying. A colleague advises her to 'be strong and pray about it'.\n\nWhat is actually happening, and what should she do next?\n\nAnswer: She is having a stress reaction to a traumatic event, and it is persisting beyond the first days — the images, the avoidance and the irritability say it has not processed itself out. 'Be strong' is bad medicine here: strength means acting. First, a structured debrief with her senior and the team who were there, to give the event words and a shared narrative. Then the basics: protected sleep, food, lighter duties for a few days if the service allows, and one trusted person — mentor, counsellor or chaplain — to talk it through properly. If the dreams and avoidance are still there in a few weeks, she should seek formal counselling through her service or association without embarrassment; this is exactly what those pathways exist for. And the colleague who said 'be strong' needs the same lesson — checking in beats advising silence.",
      },
      {
        type: "memory_trick",
        body: "Your maintenance schedule spells R-E-S-T: Rest protected (sleep is clinical), Eat and exercise (the machine's fuel), Speak (debrief every bad event — talk it out of your body), Take boundaries seriously (a ritual that ends the shift at the ward door).",
      },
      {
        type: "summary",
        body: "- Burnout = emotional exhaustion, depersonalization, reduced sense of accomplishment — an occupational phenomenon, not weakness.\n- Acute stress reactions after traumatic events are normal; watch the trend, not the day.\n- Defences: protected sleep, real food, movement, faith, and a ritual that ends the shift at the door.\n- Debrief after every bad event; silence is what stress becomes when it settles.\n- Learn your early warning signs and check on colleagues the same way.\n- Symptoms persisting for weeks: seek counselling through your service or association — that is professionalism.",
      },
    ],
    questions: [
      {
        topic: "Self-Care and Burnout",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which trio makes up the classic dimensions of burnout?",
        options: [
          "Emotional exhaustion, depersonalization, reduced sense of accomplishment",
          "Fever, anaemia and weight loss",
          "Insomnia, rash and appetite loss only",
          "Mania, depression and psychosis",
        ],
        correctIndex: 0,
        explanation:
          "Burnout is defined by emotional exhaustion (empty tank), depersonalization (patients become cases, cynicism grows) and reduced personal accomplishment ('nothing I do matters'). The other options are physical or psychiatric illness pictures.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Self-Care and Burnout",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Weeks after a maternal death on her ward, a nurse still has intrusive images, avoids the ward and is irritable at home. The most appropriate next step is:",
        options: [
          "Reassure her that this proves she is unsuited to nursing",
          "Advise her to work more shifts to distract herself",
          "Wait another six months before acting",
          "Encourage structured debrief plus formal counselling through her service, since symptoms persisting weeks after trauma deserve care",
        ],
        correctIndex: 3,
        explanation:
          "Stress reactions that persist for weeks after a traumatic event deserve active care: structured debrief with the team and formal counselling through the service. Longer hours and longer waiting both deepen the wound; her distress says she cares, not that she is unfit.",
        courseSlug: "clinical-practice",
      },
      {
        topic: "Self-Care and Burnout",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is self-care framed as a professional duty rather than a personal luxury?",
        options: [
          "Because regulators require documented hobbies",
          "Because it looks good at interviews",
          "Because fatigue and burnout degrade judgement and empathy — the ward receives the nurse you bring to it",
          "Because it reduces the number of shifts owed to colleagues",
        ],
        correctIndex: 2,
        explanation:
          "Fatigue and burnout measurably dull clinical judgement and strip empathy — patient safety is downstream of the carer's state. That is why rest, debriefs and support belong to professionalism, not to vanity.",
        courseSlug: "clinical-practice",
      },
    ],
    flashcards: [
      {
        topic: "Self-Care and Burnout",
        front: "Name burnout's three dimensions.",
        back: "Emotional exhaustion (empty tank), depersonalization (patients become cases, cynicism), reduced personal accomplishment ('nothing I do matters').",
      },
      {
        topic: "Self-Care and Burnout",
        front: "What is the REST self-care mnemonic?",
        back: "Rest protected, Eat and exercise, Speak (debrief bad events), Take boundaries seriously — a ritual that ends the shift at the ward door.",
      },
      {
        topic: "Self-Care and Burnout",
        front: "When do stress reactions after a traumatic event deserve formal help?",
        back: "When they persist beyond a few weeks — intrusive images, avoidance, irritability, sleep disturbance — seek counselling through your service or association. Early, not late.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Burn-out an 'occupational phenomenon': International Classification of Diseases",
        year: "2019",
        url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
      },
      {
        organization: "World Health Organization",
        title: "Mental health at work (fact sheet)",
        year: "2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work",
        note: "Check for latest update.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Nurses",
        note: "Professional wellbeing and support — obtain current version.",
      },
    ],
  },
];
