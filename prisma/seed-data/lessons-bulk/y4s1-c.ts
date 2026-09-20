// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch C (Community Midwifery, Ethics & Professional Practice, Research Methods)
// 20 lessons anchored to prisma/seed-data/anchors/y4s1-c.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Population-Level Maternal Health",
    lessonTitle: "Health Education Campaigns in the Community",
    description:
      "Teaching one mother changes one life; a campaign changes a whole community. Learn to design health education that actually moves behaviour at scale.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the planning cycle of a community health education campaign.",
      "Explain why messages must be single, simple, local-language and pre-tested.",
      "Apply a campaign plan to a real community goal such as early antenatal registration.",
    ],
    tags: ["health education", "campaigns", "community", "health promotion"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Teaching one mother at a time changes one life. A campaign changes a whole community. In your final year and beyond, you may be asked to plan the talks, durbars and radio spots that decide whether women in a catchment area book early, deliver in facilities or sleep under treated nets. That is a different skill from bedside teaching, and this lesson gives you its bones.\n\nA campaign is planned persuasion. You will learn the small cycle that keeps campaigns honest: listen to the community first, carry one clear message, choose channels people actually trust, involve the leaders, and measure whether behaviour truly moved.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start by **listening**. What does the community already believe? Who decides whether a woman delivers at home? Which day is market day, and which language does the radio speak? A campaign built on wrong assumptions about people is just noise. Next, design **one message at a time**, short and actionable, in the local language — 'Book your antenatal care before the pregnancy shows' beats a lecture covering fifteen topics. Pre-test it on a handful of mothers and fix the words they stumble over.\n\nThen choose your channels. In Ghana the strongest are durbars blessed by the chief and queen mother, local FM radio, market-day talks, mothers' clubs at weighing points, announcements at church and mosque, and house-to-house visits by community health volunteers. Bring traditional birth attendants in as allies, not rivals. Finally, **evaluate behaviour, not applause**: count ANC registrations, facility deliveries and net use before and after. Attendance at a durbar is reach, not change.",
      },
      {
        type: "clinical_pearl",
        body: "If the market woman cannot repeat your message to her neighbour at dusk, the message is not finished. Simplify it until she can.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The midwife in charge of a CHPS compound in the Upper East notes that most women deliver at home with a traditional birth attendant. She plans a campaign: a durbar introduced by the chief, two radio spots in Kasem, a market-day demonstration, and a meeting where the TBAs are given gloves, a phone and the referral number. After three months facility deliveries rise, and the TBAs bring two referred mothers in early labour.\n\nWhy were the TBAs made allies instead of being warned against home birth?\n\nAnswer: The TBAs already attend most of the deliveries and hold the community's trust. As partners they carry your message into homes you will never reach, refer early, and call when trouble starts. Warned against, they become rivals who hide women from you — and they are the ones present at midnight when the haemorrhage begins.",
      },
      {
        type: "memory_trick",
        body: "Campaigns climb the five Ls: Listen first, one Lesson, Local language, Leaders before the crowd, and Look at the numbers at the end.",
      },
      {
        type: "summary",
        body: "- Listen first: assess beliefs, barriers, decision-makers and language before designing anything.\n- Carry one short, actionable message, pre-tested on real mothers.\n- Use trusted channels: durbars, local FM, market days, mothers' clubs, faith gatherings, volunteers.\n- Make TBAs and elders allies, and involve the chief and queen mother early.\n- Evaluate behaviour change — ANC registrations, facility births — not attendance figures.",
      },
    ],
    questions: [
      {
        topic: "Health Education Campaigns",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A community health education campaign should begin with which step?",
        options: [
          "Ordering banners and T-shirts carrying the health message",
          "Assessing the community's beliefs, barriers and trusted channels",
          "Inviting the district chief executive to launch the programme",
          "Scheduling a series of radio spots in English",
        ],
        correctIndex: 1,
        explanation:
          "Listening comes first. Until you know what the community believes, who decides, and which channels carry trust, any message is a guess aimed at the wrong target. Materials, dignitaries and broadcasts come later, built on that assessment.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Health Education Campaigns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A radio spot says: 'Pregnant women should book ANC early, eat a balanced diet, sleep under a treated net, deliver at the facility, avoid heavy loads and register with the NHIS.' What is its main weakness?",
        options: [
          "It packs many messages into one spot, so listeners remember none of them clearly",
          "Radio spots are never effective in rural Ghana",
          "It should have been broadcast only on market days",
          "The message is too short for a health campaign",
        ],
        correctIndex: 0,
        explanation:
          "One message at a time is a cardinal rule of campaigns. Fifteen behaviours cannot compete for memory in sixty seconds; the community remembers — and repeats — one simple action. Length and broadcast day matter far less than focus.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Health Education Campaigns",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Three months after a campaign, the team reports huge durbar attendance. What is the better measure of success?",
        options: [
          "Number of T-shirts and leaflets distributed",
          "Attendance and applause at community durbars",
          "Changes in behaviour such as ANC registrations and facility deliveries",
          "The number of speeches given by dignitaries",
        ],
        correctIndex: 2,
        explanation:
          "Attendance, leaflets and speeches measure reach — whether the message arrived. The campaign exists to move behaviour, so the indicators that matter are ANC registrations, facility deliveries, net use and similar counts taken before and after.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Campaign Planning",
        front: "What are the five Ls of planning a community campaign?",
        back: "Listen, one Lesson, Local language, Leaders first, Look at the numbers — assess, carry one message, speak her language, involve leaders, then evaluate behaviour.",
      },
      {
        topic: "Campaign Channels",
        front: "Name five trusted channels for health education in a Ghanaian community.",
        back: "Community durbar with the chief and queen mother, local FM radio, market-day talks, mothers' clubs at weighing points, church or mosque announcements, house-to-house volunteers.",
      },
      {
        topic: "Campaign Evaluation",
        front: "What should a campaign evaluate — and what is merely reach?",
        back: "Behaviour: ANC registrations, facility deliveries, net use, counted before and after. Attendance at durbars and leaflet counts measure reach, not change.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Health Education: Theoretical Concepts, Effective Strategies and Core Competencies",
        year: "2012",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with the Ministry of Health.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Linking Hospital and Home",
    lessonTitle: "Continuity of Care Across Settings",
    description:
      "Pregnancy is a nine-month story — continuity means it has one keeper. Meet the evidence and the tools that keep care connected from her village to the theatre and back.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what continuity of care means across settings and time.",
      "Explain the evidence from midwife-led continuity models.",
      "Apply practical tools — woman-held records, warm handovers, referral feedback — to connect care.",
    ],
    tags: ["continuity", "caseload", "records", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Pregnancy is a nine-month story, but in many systems it is told by a different narrator at every chapter — one midwife at the CHPS compound, a stranger in the district hospital, another team after birth. Continuity of care means the story has one keeper: a midwife or small team the woman knows across pregnancy, birth and the postnatal period, wherever the care happens.\n\nIn this lesson you will meet the evidence behind continuity, and the practical tools — woman-held records, warm handovers, referral feedback — that keep care connected from her village to the theatre and back.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The strongest evidence comes from the Cochrane review of midwife-led continuity models (Sandall and colleagues, 2016). Women cared for by a known midwife or team were more likely to have a spontaneous vaginal birth, less likely to need instruments or an epidural, and more satisfied with their care — at similar or lower cost. WHO's antenatal guidance recommends these models where systems support them. Being known changes physiology: a woman who feels safe labours better.\n\nContinuity across settings is mostly craft. Give every woman a **named midwife** she can call. Let her **maternity booklet travel with her** — it is the cheapest continuity device in Ghana; read it before you ask questions. Make a **warm handover**: the referring midwife phones the receiving unit, tells the story, sends the note. Close the loop — after discharge, the hospital sends a summary back to the CHPS compound so the community midwife who knows her picks up the thread. Maternity waiting homes and team caseloads knit distance and shift patterns together.",
      },
      {
        type: "clinical_pearl",
        body: "Never send a woman anywhere without her booklet, and never receive one without reading it. The record that travels is the midwife who stays.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A grand multipara books at her CHPS compound with Ama, the community midwife, who flags her previous postpartum haemorrhage. At 38 weeks she moves into the district hospital's maternity waiting home; Ama phones the ward sister with her history and sends the booklet. After a hard but well-managed birth, the hospital discharges her with a written summary and a call to Ama, who visits on day 2 and again on day 6.\n\nWhich practice in this story most protects the mother after discharge, and why?\n\nAnswer: The feedback loop — the written summary and the call back to Ama. The midwife who knows her history resumes postnatal care knowing what happened, which drugs were given and which danger signs to watch, so nothing is repeated and nothing is missed. The woman is received, not handed over and forgotten.",
      },
      {
        type: "memory_trick",
        body: "Continuity is a THREAD: The same midwife, Her record travels, Referral with a call, Every handover warm, And the story returns after discharge — Do not disappear at birth.",
      },
      {
        type: "summary",
        body: "- Continuity means a known midwife or small team across pregnancy, birth and the postnatal period, across settings.\n- Cochrane evidence: more spontaneous births, fewer interventions, greater satisfaction at similar or lower cost.\n- Woman-held booklets, named midwives, warm phone handovers and referral feedback are the working tools.\n- Maternity waiting homes and team caseloads bridge distance and shift patterns.\n- The community midwife who knows the story is the safest receiver of every discharge.",
      },
    ],
    questions: [
      {
        topic: "Continuity of Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What defines midwife-led continuity of care?",
        options: [
          "One midwife or a small team that the woman knows across pregnancy, birth and the postnatal period",
          "Booking every visit in the same hospital building",
          "Seeing a different specialist at each contact",
          "Referring every woman to the regional hospital at booking",
        ],
        correctIndex: 0,
        explanation:
          "Continuity is relational, not architectural: the same known midwife or small team follows the woman over time and across settings. A building or a referral policy cannot supply the trust and accumulated knowledge a known midwife carries.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Continuity of Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "According to the Cochrane review of midwife-led continuity models, which outcome is more likely for women in these models?",
        options: [
          "More caesarean sections",
          "More instrumental vaginal births",
          "Longer hospital stays",
          "Spontaneous vaginal birth",
        ],
        correctIndex: 3,
        explanation:
          "The review found women in midwife-led continuity models were more likely to birth spontaneously, with fewer instruments and no excess of adverse outcomes. The direction of every intervention finding favours continuity, which is why WHO endorses the model where systems allow.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Continuity of Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman arrives at your district hospital from a far CHPS compound without her maternity booklet. What is the greatest danger?",
        options: [
          "She will be angry with the referring midwife",
          "Her history — previous caesarean, rhesus status, past haemorrhage — is invisible, so decisions are made blind",
          "The ward will need to charge her for a new booklet",
          "The hospital cannot admit her without a booklet by law",
        ],
        correctIndex: 1,
        explanation:
          "Without the travelling record, the receiving team cannot know her scars, her rhesus status, her past haemorrhage or her treatment. The booklet carries the story that protects her; no law blocks admission, but clinical blindness is the real and dangerous cost.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Continuity of Care",
        front: "What is midwife-led continuity of care?",
        back: "A known midwife or small team caring for the woman across pregnancy, birth and the postnatal period, across home, clinic and hospital settings.",
      },
      {
        topic: "Continuity of Care",
        front: "What did the 2016 Cochrane review find for midwife-led continuity models?",
        back: "More spontaneous vaginal births, fewer instrumental births and epidurals, greater satisfaction, at similar or lower cost than other models.",
      },
      {
        topic: "Continuity of Care",
        front: "Name three practical tools of continuity across settings.",
        back: "The woman-held maternity booklet that travels with her; the warm phone handover before transfer; the discharge summary and feedback returned to the referring community midwife.",
      },
    ],
    sources: [
      {
        organization: "Cochrane Library (Wiley)",
        title: "Sandall S, et al. Midwife-led Continuity Models versus Other Models of Care for Childbearing Women",
        year: "2016",
        url: "https://doi.org/10.1002/14651858.CD004667.pub5",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549912",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-midwifery",
    moduleTitle: "Linking Hospital and Home",
    lessonTitle: "Community Referral Pathways",
    description:
      "A referral is a relay run at midnight with a life in the hands. Learn the chain between home, clinic and theatre — and how to keep it open and fast.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the levels of the referral chain and their signal functions.",
      "Explain the three delays and how each is attacked at community level.",
      "Apply the components of a safe referral — stabilise, call ahead, written note, feedback.",
    ],
    tags: ["referral", "pathways", "bemonc", "cemonc", "three delays"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A referral is not a signature on a form; it is a relay race run at midnight with a life in your hands. In community midwifery you will spend your career inside that relay — receiving from traditional birth attendants and CHPS volunteers, sending to the district hospital, and chasing feedback when the runner vanishes. This lesson maps the roads between home, clinic and theatre, and teaches you to keep them open and fast.\n\nYou will learn the levels of the chain, what each level can do, the three delays that kill, and the anatomy of a referral that arrives alive and well-documented.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The chain runs: home and TBA, CHPS compound, health centre, district hospital, regional hospital. Each level has defined signal functions. A **BEmONC** facility — a health centre or small district — provides parenteral antibiotics, magnesium sulfate, oxytocin, manual removal of the placenta, removal of retained products, assisted vaginal birth and newborn resuscitation. A **CEmONC** facility adds caesarean section and blood transfusion. Know which your nearest hospital is, because the woman's birth plan depends on it.\n\nReferrals die in the **three delays**: deciding to seek care, reaching care, and receiving care. Community work attacks delay 1 with birth plans and danger-sign teaching, and delay 2 with transport funds and maternity waiting homes. You attack delay 3 personally: **stabilise before you transfer** — load the magnesium sulfate, start the IV, empty the bladder — then **call ahead** so the receiving team is waiting, and send a **written note** with history, findings, treatment given (drug, dose, route, time) and the reason for referral, plus the partogram if she is in labour. Then insist on feedback.",
      },
      {
        type: "clinical_pearl",
        body: "The road is not treatment. Stabilise first, call second, note third — a woman who arrives seizing was transported, not referred.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 3 am a health centre midwife measures a blood pressure of 170/115 with 3+ protein in a 34-week primigravida. The district CEmONC hospital is 40 minutes away by hired truck. She inserts an IV, gives the magnesium sulfate loading dose, positions the woman on her left side, phones the hospital, and writes the referral note while the driver fuels the truck with the facility's transport fund. The hospital team meets them at the door.\n\nWhy give magnesium sulfate at the health centre instead of rushing straight to the hospital?\n\nAnswer: Because eclampsia can strike on the road, and the road offers no treatment. The loading dose protects her en route, the call prepares the receiving team, and the note carries her story so nothing is asked twice. Stabilised, announced and accompanied — that is a referral, not a transport.",
      },
      {
        type: "memory_trick",
        body: "A referral that lives is TREAT: Treat before travel, Record on paper, Engage the receiving team by phone, Accompany the mother, Track the feedback.",
      },
      {
        type: "summary",
        body: "- The chain: home and TBA, CHPS compound, health centre, district hospital, regional hospital.\n- BEmONC signal functions include parenteral drugs, manual removal of the placenta and resuscitation; CEmONC adds caesarean section and blood transfusion.\n- Three delays: deciding, reaching, receiving — attacked by birth plans, transport funds, maternity waiting homes and call-aheads.\n- Stabilise before transfer, call ahead, and send a written note with treatment given (drug, dose, route, time).\n- Insist on feedback: the returning loop closes the chain and teaches both ends.",
      },
    ],
    questions: [
      {
        topic: "Community Referral Pathways",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which signal functions are found only at a CEmONC facility?",
        options: [
          "Newborn resuscitation and parenteral oxytocin",
          "Caesarean section and blood transfusion",
          "Manual removal of the placenta",
          "Parenteral magnesium sulfate for eclampsia",
        ],
        correctIndex: 1,
        explanation:
          "Caesarean section and blood transfusion are the two signal functions that define comprehensive emergency obstetric and newborn care. Every other function listed — resuscitation, oxytocin, manual removal, magnesium sulfate — belongs to basic EmONC, available at health centres.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Community Referral Pathways",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which entry matters most in a written referral note for a woman treated with antihypertensives before transfer?",
        options: [
          "Her tribe and clan name",
          "The name of the driver transporting her",
          "The treatment given — drug, dose, route and time — plus findings and the reason for referral",
          "A copy of her NHIS registration card",
        ],
        correctIndex: 2,
        explanation:
          "The receiving team must know what has already been given, in what dose and at what time, or they will repeat, overdose or omit treatment. History, findings and the reason for referral complete the picture; tribe and driver's name change no clinical decision.",
        courseSlug: "community-midwifery",
      },
      {
        topic: "Community Referral Pathways",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A family delays setting out for the hospital because they are waiting for the husband's permission. Which of the three delays is this?",
        options: [
          "Delay 1: deciding to seek care",
          "Delay 2: reaching care",
          "Delay 3: receiving care",
          "Delay 4: documenting care",
        ],
        correctIndex: 0,
        explanation:
          "Waiting for a decision-maker's permission is the classic first delay — the failure to recognise danger or to decide to seek care in time. Birth plans that identify the midnight decision-maker exist precisely to attack this delay.",
        courseSlug: "community-midwifery",
      },
    ],
    flashcards: [
      {
        topic: "Referral Pathways",
        front: "What distinguishes CEmONC from BEmONC?",
        back: "CEmONC provides all BEmONC signal functions plus caesarean section and blood transfusion — typically the district or regional hospital.",
      },
      {
        topic: "Referral Pathways",
        front: "State the treat-before-transfer principle.",
        back: "Stabilise the woman before the journey — magnesium sulfate loaded, IV running, bladder empty — because the road provides no treatment; then call ahead and send a written note.",
      },
      {
        topic: "Referral Pathways",
        front: "Name the three delays that kill mothers.",
        back: "Delay 1: deciding to seek care. Delay 2: reaching care (distance, transport, cost). Delay 3: receiving adequate care once arrived.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565263",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with the Ministry of Health.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Respectful Maternity Care: Every Mother's Right",
    description:
      "The way a woman is treated while giving birth stays with her for life — and decides whether the next mother comes at all. Respectful maternity care turns rights into ward practice.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the rights in the Respectful Maternity Care charter.",
      "Explain the recognised categories of disrespect and abuse in childbirth.",
      "Apply respectful care behaviours on the ward and recognise their community effect.",
    ],
    tags: ["rmc", "dignity", "rights", "mistreatment"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The way a woman is treated while giving birth can stay with her for life — and the way your facility treats women decides whether the next mother comes at all. Respectful maternity care turns human rights into ward practice: a charter of what every childbearing woman deserves, whoever she is, wherever she delivers.\n\nIn this lesson you will learn the rights in the RMC charter, the recognised faces of disrespect and abuse, and the small behaviours — a name, a curtain, an explanation — that carry the whole idea.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **Respectful Maternity Care charter** (White Ribbon Alliance, 2011) translates universal human rights for childbearing women: dignity and respect; information and the right to ask questions; privacy and confidentiality; equality and freedom from discrimination; freedom from harm and from harmful practices; timely care; and the right to choose a companion, to move and choose positions, and to refuse what she does not want. Nothing in the charter is new — it is ordinary human rights fitted to the labour room.\n\nResearchers led by Bowser and Hill mapped the faces of violation: **physical abuse** such as slapping in the second stage; care **without consent**; exposure and gossip that break confidentiality; **humiliation** and mockery; **discrimination** by age, tribe, HIV status or poverty; **abandonment** — left alone in labour; and **detention** over unpaid bills. Each face is a reason a community stops coming. WHO has called for the prevention and elimination of disrespect and abuse in childbirth, and Ghana Health Service runs respectful care as a quality agenda — because kindness here is not decoration; it is a clinical outcome that moves delivery rates.",
      },
      {
        type: "clinical_pearl",
        body: "The woman you shout at tonight will tell ten women at the market tomorrow. Some of them will birth at home because of your voice — mistreatment is a cause of maternal death, not just a bad day.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 19-year-old primigravida pushes for two hours. The covering midwife snaps, 'You lazy girl — push or your baby dies!', and leaves her alone to attend another case. She delivers alone; the baby cries, and the ward laughs at her screams. At her six-week check she refuses examination and says she will never deliver in that hospital again.\n\nWhich categories of disrespect and abuse are shown here, and what is the community cost?\n\nAnswer: Verbal humiliation, abandonment of care and mockery — three faces of the same violation. The cost is not only her trauma: her testimony travels, and home deliveries rise in her compound and beyond. Respectful care is a safety and quality intervention, not politeness training.",
      },
      {
        type: "memory_trick",
        body: "The seven faces of disrespect all begin with P: Punching, Procedures without consent, Public exposure, Put-downs, Prejudice, Patient left alone, Payment detention. Count the Ps in every ward story.",
      },
      {
        type: "summary",
        body: "- The RMC charter grounds maternity care in universal human rights: dignity, information, privacy, equality, freedom from harm, timeliness and choice.\n- Disrespect has seven faces: physical abuse, non-consented care, non-confidentiality, humiliation, discrimination, abandonment and detention.\n- Mistreatment drives women away from facilities and raises home-birth risk — a safety issue, not a courtesy issue.\n- Companionship, consent, calling by name, curtains and explanations are the daily practice of rights.\n- WHO and Ghana Health Service both treat respectful care as core quality of care.",
      },
    ],
    questions: [
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a recognised category of disrespect and abuse in childbirth?",
        options: [
          "Working night shifts without an allowance",
          "Refusing a woman's demand for a specific midwife",
          "Giving routine vitamin K to the newborn",
          "Leaving a woman unattended in active labour",
        ],
        correctIndex: 3,
        explanation:
          "Abandonment — leaving a woman alone in labour — is one of the seven recognised categories of disrespect and abuse. Shift allowances, team rosters and evidence-based newborn care fall outside the classification entirely.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "On what is the Respectful Maternity Care charter built?",
        options: [
          "Hospital management policy on customer service",
          "Universal human rights applied to childbearing women",
          "The personal ethics of individual midwives",
          "International insurance requirements",
        ],
        correctIndex: 1,
        explanation:
          "The charter maps existing universal human rights onto maternity: every right a childbearing woman holds as a person — dignity, information, privacy, equality, freedom from harm — simply restated for the labour room. It invents nothing new; it demands what is already owed.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Respectful Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A unit bars sisters from the labour room and forbids women to walk or choose positions during labour. Which charter rights are violated?",
        options: [
          "None — these are standard safety rules",
          "Only the right to timely care",
          "Choice of companion and freedom of movement and position",
          "The right to free medication",
        ],
        correctIndex: 2,
        explanation:
          "The charter upholds a woman's right to a companion of her choice and to move and adopt positions freely in labour — rights that WHO's intrapartum recommendations echo for their clinical benefits. Blanket bans on companionship and movement are violations, not safety rules.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Respectful Maternity Care",
        front: "List the seven categories of disrespect and abuse in childbirth.",
        back: "Physical abuse; non-consented care; non-confidential care; non-dignified care (humiliation); discrimination; abandonment of care; detention in facility.",
      },
      {
        topic: "Respectful Maternity Care",
        front: "Name four rights from the RMC charter.",
        back: "Dignity and respect; information and question-asking; privacy and confidentiality; equality and non-discrimination; freedom from harm; choice of companion, movement and position.",
      },
      {
        topic: "Respectful Maternity Care",
        front: "Why is mistreatment a safety issue, not just a courtesy issue?",
        back: "Women who are humiliated or abandoned avoid facilities — testimony travels, home births rise, and complications arrive late. Respectful care measurably moves delivery rates and outcomes.",
      },
    ],
    sources: [
      {
        organization: "White Ribbon Alliance",
        title: "Respectful Maternity Care: The Universal Rights of Childbearing Women",
        year: "2011",
      },
      {
        organization: "World Health Organization",
        title: "The Prevention and Elimination of Disrespect and Abuse during Facility-based Childbirth (WHO statement)",
        year: "2014",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "Verify current edition with the Ministry of Health.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Informed Consent: The Real Conversation",
    description:
      "A signature at the bottom of a form is paper, not permission. Consent is a conversation — and this lesson teaches you to hold it well, even when she says no.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three elements of valid informed consent.",
      "Explain the emergency exception and the management of refusal.",
      "Apply consent practice and documentation to ward situations.",
    ],
    tags: ["consent", "autonomy", "refusal", "documentation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A signature at the bottom of a form is paper, not permission. Informed consent is a conversation: you explain, she understands, she chooses freely — and the signature only records that this happened. When the conversation is skipped, consent becomes theatre, and in maternity care theatre has consequences for both the woman and you.\n\nThis lesson takes you through the elements of valid consent, the emergency exception that lets you save a life in seconds, and how to walk beside a woman who says no to what you recommend.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Valid consent stands on **three legs**. **Capacity**: she understands, remembers and weighs the information — most women in labour have it; confusion, eclampsia or heavy sedation may remove it. **Information**: what you propose, its benefits, its risks, the alternatives, and the right to refuse — in her own language, checked with a short teach-back. **Voluntariness**: no pressure from you, from family, from anyone; a nod given under threat is not consent.\n\nTwo hard cases. First, the **emergency**: an unconscious woman convulsing or bleeding needs treatment now; you act in her best interest, keep the action proportionate, and document immediately after. Second, the **refusal**: a competent adult may refuse even a life-saving transfusion. Your duty is to make sure she understands the consequences, offer alternatives, involve seniors, and then respect and document her decision while continuing every other care. For adolescents, involve her and a responsible adult where the law requires it — but never let the girl be the last to know her own plan.",
      },
      {
        type: "clinical_pearl",
        body: "If she cannot repeat back, in her own words, what she has agreed to and what she refused, you have not yet asked her. Consent is the conversation, not the signature.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman at 32 weeks with severe anaemia refuses blood transfusion. Her husband insists you 'just do it' because she is weak and confused. You sit with her, explain the risk of heart failure and death, offer iron and other treatment, ask her to explain the choice back, document her words, and call the consultant, who agrees she has capacity.\n\nOn what basis do you proceed?\n\nAnswer: Her refusal stands, because capacity — not fear, not weakness, not family pressure — decides. A person with capacity may refuse treatment even when refusal may kill her. You document capacity, the information given, her own words, the alternatives offered and the escalation — and you keep caring for her.",
      },
      {
        type: "memory_trick",
        body: "Consent is a three-legged stool: Capacity, Information, Voluntariness. Kick away any leg and the stool — and your defence — falls.",
      },
      {
        type: "summary",
        body: "- Valid consent needs capacity, full information (benefits, risks, alternatives, right to refuse) and freedom from pressure.\n- Explain in her language and check understanding with a teach-back; the signature records the conversation.\n- In emergencies, treat an incapacitated woman in her best interest and document at once.\n- A competent adult may refuse even life-saving treatment — inform, involve seniors, respect, document, continue care.\n- Never let a relative consent for a competent woman: relatives inform, the woman decides.",
      },
    ],
    questions: [
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three elements of valid informed consent?",
        options: [
          "Capacity, adequate information and voluntariness",
          "Signature, witness and doctor countersign",
          "Age, marital status and literacy",
          "Consent form, fee payment and registration",
        ],
        correctIndex: 0,
        explanation:
          "A valid consent is a capable person, given adequate information (benefits, risks, alternatives, right to refuse), choosing freely. Signatures, witnesses and forms only record that these three elements were present.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An unconscious eclamptic woman needs an urgent loading dose of magnesium sulfate. What is the correct course?",
        options: [
          "Wait for a relative to sign a consent form first",
          "Give the treatment immediately in her best interest and document the reasoning at once",
          "Wait for her to regain consciousness",
          "Transfer her without treatment to the regional hospital",
        ],
        correctIndex: 1,
        explanation:
          "The emergency exception applies: when a patient lacks capacity and delay would cost her life or health, you act in her best interest, keep the intervention proportionate, and document immediately afterwards. Waiting for signatures or consciousness would sacrifice her for a formality.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Informed Consent",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with capacity refuses a caesarean you believe is life-saving. What must you do?",
        options: [
          "Proceed anyway — the baby's welfare overrides her refusal",
          "Ensure she truly understands the consequences, involve seniors, then respect and document her refusal while continuing care",
          "Discharge her home as a refusal of all care",
          "Have her husband sign the consent form on her behalf",
        ],
        correctIndex: 1,
        explanation:
          "A competent adult's refusal governs her own body, however unwise it seems. Your duties are full information, senior involvement, documentation of her understanding and words — and continued care. Neither husband nor clinician can consent for a competent woman.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Informed Consent",
        front: "What are the three elements of valid consent?",
        back: "Capacity (understanding, retaining, weighing information), adequate information (benefits, risks, alternatives, right to refuse) and voluntariness (free of pressure).",
      },
      {
        topic: "Informed Consent",
        front: "When may you treat a woman without her consent?",
        back: "In a genuine emergency when she lacks capacity and delay would cause death or serious harm — act in her best interest, stay proportionate, and document immediately.",
      },
      {
        topic: "Informed Consent",
        front: "How do you handle a competent woman's refusal of life-saving treatment?",
        back: "Confirm capacity and understanding, give information and alternatives, involve seniors, respect and document her decision verbatim, and continue all other care.",
      },
    ],
    sources: [
      {
        organization: "Ghana Ministry of Health",
        title: "Patients' Charter",
        note: "Verify current edition with the Ministry of Health.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Respect and Rights",
    lessonTitle: "Confidentiality in Maternity Care",
    description:
      "In the city a secret is cheap; in a village it is priceless. The promise of confidentiality is what makes women dare to tell you the truth — this lesson keeps that promise safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the duty of confidentiality and its legal limits.",
      "Explain why small communities raise the stakes of every disclosure.",
      "Apply privacy practices on the ward, in records and for adolescents.",
    ],
    tags: ["confidentiality", "privacy", "adolescents", "disclosure"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In the city a secret is cheap; in a village it is priceless. The midwife in a Ghanaian community knows whose daughter is pregnant, whose husband beats her, whose test came back positive — and the whole community would love to know it too. Confidentiality is the promise that makes women dare to tell you the truth, and in small communities it is the difference between care and no care.\n\nThis lesson covers the duty, the limits the law places on it, and the daily habits that keep a secret safe on a crowded ward.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The duty is simple: what a woman tells you, and what you find in her records, is shared only with the team that needs it to care for her — and with nobody else. Not by name in the corridor, not in the tro-tro, not in the market, not in a WhatsApp message. 'Guess who we delivered last night' has ended careers and ended care-seeking in a single sentence.\n\nThe limits are equally simple. You must share information when the law requires it — notifiable diseases to public health, suspected child abuse to social welfare or the police — and when a person is at serious, identifiable risk. HIV shows the balance: you encourage and support her in **voluntary disclosure** to her partner, with counselling, rather than breaking her confidence yourself. For **adolescents**, Ghana's adolescent health services expect confidential care: do not report her pregnancy to parents without her agreement unless her safety is at risk. Before any disclosure, ask three questions: who needs this information, what exactly do they need to know, and what happens to her if it is said in the wrong place?",
      },
      {
        type: "clinical_pearl",
        body: "Curtains, closed doors and a private corner for sensitive questions are clinical tools, like gloves — you would not do a delivery without them, so do not take a history without them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 16-year-old comes for antenatal booking with her school bag. Her syphilis test is positive and she asks you not to tell her mother, who is waiting outside. You treat her, arrange partner notification and counselling through the clinic system, agree together what will be shared at today's visit, and explain you will involve her mother only with her consent — or if her safety is at risk.\n\nWhy is this the right course, and what must you promise carefully?\n\nAnswer: Because confidential adolescent care keeps her in treatment — a frightened girl simply stops coming, and an untreated girl infects others. You promise privacy, not secrecy: she must hear the limits from you first, so you never break a promise you made to win her trust.",
      },
      {
        type: "memory_trick",
        body: "Confidentiality is a door with three honest keys: the care team, the law (notifiable disease, child protection) and a named person at risk. Gossip has no key.",
      },
      {
        type: "summary",
        body: "- Share information only within the care team, on a need-to-know basis — never in corridors, markets or messages.\n- In small communities, gossip ends care-seeking for the woman and for everyone who hears the story.\n- The law requires sharing for notifiable diseases, child protection and serious risk to an identifiable person.\n- Support voluntary HIV disclosure with counselling rather than breaking confidence.\n- Adolescents are entitled to confidential care — promise privacy, never secrecy, and state the limits first.",
      },
    ],
    questions: [
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these is a breach of confidentiality?",
        options: [
          "Handing over a patient's history to the midwife taking the next shift",
          "Discussing a case with the consultant during ward review",
          "Telling a market woman you delivered her neighbour's daughter by caesarean last night",
          "Recording a positive syphilis test in the woman's maternity booklet",
        ],
        correctIndex: 2,
        explanation:
          "Shift handover, ward review and the woman's own record are all care-team uses on a need-to-know basis. Naming a patient to a market woman serves no clinical purpose and exposes her — the textbook breach.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You suspect a child attending your postnatal clinic is being abused. What does your duty require?",
        options: [
          "Keep it confidential — the duty of confidentiality is absolute",
          "Report to the Department of Social Welfare or the police as child protection requires, and document",
          "Wait until the next visit to see whether the bruises fade",
          "Ask the suspected abuser to bring the child for review",
        ],
        correctIndex: 1,
        explanation:
          "Child protection is a legal limit on confidentiality: suspected abuse must be referred and documented. The duty protects patients and the public, not secrets — and delay or confrontation with the abuser endangers the child further.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Confidentiality in Maternity Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 16-year-old asks for contraception and begs you not to tell her parents. What is the best response?",
        options: [
          "Offer confidential adolescent-friendly care and explain the limits — you involve others only with her consent or if she is at risk",
          "Refuse to see her without a parent present",
          "Send her home until she is 18",
          "Tell her mother, who is a family friend",
        ],
        correctIndex: 0,
        explanation:
          "Confidential adolescent services keep young people in care; refusal or parental betrayal simply drives them away from services. The offer is privacy with honestly stated limits — safety concerns and legal duties are shared, nothing else.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Confidentiality",
        front: "What three questions should you ask before sharing any patient information?",
        back: "Who needs this information? What exactly do they need to know? What will happen to her if it is said in the wrong place?",
      },
      {
        topic: "Confidentiality",
        front: "Name the legal limits of confidentiality.",
        back: "Notifiable disease reporting, suspected child abuse (safeguarding referral), court orders, and serious risk to an identifiable person.",
      },
      {
        topic: "Confidentiality",
        front: "What do you promise an adolescent who fears disclosure to her parents?",
        back: "Privacy, not secrecy — confidential care with the limits stated up front: you involve parents only with her consent or if her safety is at risk.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition.",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Patients' Charter",
        note: "Verify current edition with the Ministry of Health.",
      },
      {
        organization: "Ghana Health Service",
        title: "Adolescent Health Service Policy and Strategy",
        note: "Verify current edition with the Ministry of Health.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "The Principles of Healthcare Ethics",
    description:
      "When duties collide — her choice against her safety, fairness against speed — you need more than a kind heart. Meet the four pillars that carry a lifetime of hard calls.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four principles of healthcare ethics.",
      "Explain how the principles conflict in maternity situations.",
      "Apply a structured method for weighing, choosing and documenting ethical decisions.",
    ],
    tags: ["ethics", "principles", "autonomy", "justice"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "When duties collide — her choice against her safety, fairness against speed — you need more than a kind heart; you need a framework. The four principles of healthcare ethics are that framework: short enough to remember at 3 am, deep enough to carry a lifetime of hard calls.\n\nThis lesson teaches the four principles, shows where they collide in maternity care, and gives you a method for choosing and defending your choice.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The principles come from Beauchamp and Childress. **Autonomy**: respect the woman's informed choices — her body, her decision. **Beneficence**: act for her benefit — recommend, advise, advocate. **Non-maleficence**: avoid harm — and weigh the harm of action against the harm of inaction. **Justice**: treat similar cases similarly and share scarce resources fairly — theatre time, blood, beds, your time.\n\nThe collisions are the daily bread of midwifery. A woman refuses referral for severe pre-eclampsia: autonomy stands against beneficence, and your tools are information, patience and a documented conversation — never coercion. A woman with placenta praevia wants to deliver at the CHPS compound: you counsel honestly about risk and arrange what safety allows. The only theatre is occupied by another emergency: triage by clinical need is justice, not favouritism. When you are torn, name the principles in conflict, weigh them, choose, write your reasoning, and call a senior — ethics is a team sport.",
      },
      {
        type: "clinical_pearl",
        body: "Ethics that is documented can be defended; ethics that lived only in your head cannot. Write the advice you gave, her understanding, and her choice — in her words.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "An HIV-positive woman with an undetectable viral load at 38 weeks wants to deliver at home with her mother. You discuss the small risk of transmission without facility care and newborn prophylaxis, learn that she fears ward gossip more than the virus, arrange a discreet corner of the ward with a named midwife, and she accepts.\n\nWhich principles were in tension, and what resolved them?\n\nAnswer: Autonomy — her chosen place of birth — against beneficence and non-maleficence — the best outcome for mother and baby. Resolution was counselling that found the real barrier, fear of stigma rather than stubbornness, and engineered an option she could accept. Coercion would have won the argument and lost the woman.",
      },
      {
        type: "memory_trick",
        body: "The four pillars hold the roof: A-B-N-J — Autonomy (her choice), Beneficence (her benefit), Non-maleficence (no harm), Justice (fair for all). Remove one pillar and the roof of trust falls.",
      },
      {
        type: "summary",
        body: "- Autonomy: respect the informed choices of a woman with capacity — her body, her decision.\n- Beneficence: act for her benefit; non-maleficence: weigh harm of action against harm of inaction.\n- Justice: treat similar cases similarly and share scarce resources by clinical need.\n- Collisions are routine — refusal of referral, place of birth, triage of the only theatre.\n- Method: name the conflict, weigh, choose, document the reasoning, involve a senior.",
      },
    ],
    questions: [
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A midwife allocates the only empty high-dependency bed to the most clinically unstable woman, not the first to arrive. Which principle is she applying?",
        options: [
          "Autonomy",
          "Non-maleficence",
          "Confidentiality",
          "Justice",
        ],
        correctIndex: 3,
        explanation:
          "Justice governs the fair distribution of scarce resources — allocating by clinical need rather than arrival time, wealth or familiarity. It is the principle behind honest triage.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman with capacity refuses a recommended life-saving operation. Which response best respects autonomy?",
        options: [
          "Book the theatre anyway — beneficence overrides autonomy",
          "Ask her husband to sign the consent form instead",
          "Explore her reasons, inform fully, respect and document her refusal, continue care",
          "Tell her she will be discharged if she refuses",
        ],
        correctIndex: 2,
        explanation:
          "Autonomy protects a competent woman's decisions about her own body, even unwise ones. Beneficence works through information and counselling, not force; threats and surrogate consent are both violations.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Ethical Principles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Weighing the risk of a drug's side effects against the risk of leaving her condition untreated illustrates the daily work of which principle?",
        options: [
          "Autonomy",
          "Justice",
          "Confidentiality",
          "Non-maleficence",
        ],
        correctIndex: 3,
        explanation:
          "Non-maleficence is rarely about doing nothing; it is about comparing harms. Every intervention carries risk, so the duty is to choose the path where expected harm is smallest — treatment included.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Ethical Principles",
        front: "Define the four principles of healthcare ethics.",
        back: "Autonomy — respect informed choice; beneficence — act in her best interest; non-maleficence — avoid harm, weighing action against inaction; justice — fairness and equitable distribution.",
      },
      {
        topic: "Ethical Principles",
        front: "How do you manage a clash between autonomy and beneficence?",
        back: "Counsel fully, explore the real barriers, offer safe alternatives, involve seniors — and if she still refuses, respect and document the choice while continuing care. Never coerce.",
      },
      {
        topic: "Ethical Principles",
        front: "Give two examples of justice on the labour ward.",
        back: "Allocating the only theatre or last unit of blood by clinical need, not by connection or payment; and refusing discrimination by tribe, age, HIV status or wealth.",
      },
    ],
    sources: [
      {
        organization: "Oxford University Press",
        title: "Beauchamp TL, Childress JF. Principles of Biomedical Ethics (8th edition)",
        year: "2019",
      },
      {
        organization: "International Confederation of Midwives",
        title: "International Code of Ethics for Midwives",
        note: "Verify current revision.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "Professional Conduct and Accountability",
    description:
      "From the day you pin your badge, you answer to more than your conscience. Learn the four doors of accountability — and the daily habits that keep them all shut against trouble.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the domains in which a registered midwife is accountable.",
      "Explain the standards of conduct, boundaries and social media risks.",
      "Apply the duty to raise concerns about unsafe or impaired colleagues.",
    ],
    tags: ["conduct", "accountability", "nmc", "professionalism", "boundaries"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "From the day you pin your badge, you answer to more than your conscience. Registered midwives in Ghana are accountable to the Nursing and Midwifery Council, to the law, to the employer and to the public — four doors, and every clinical act walks through all of them. Professional conduct is how you keep all four doors shut against trouble.\n\nThis lesson maps your accountability, the code of conduct that defines it, and the boundaries — including social media — that trip up even good midwives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Accountability means being able to answer for your actions. To the **Nursing and Midwifery Council**: practise within your scope and competence, keep your skills updated, be honest, never falsify records, and report concerns. To the **law**: negligence and crime apply to you personally. To your **employer**: policies, duty rosters and the scope of your job description. To the **public**: the trust that makes women book at your facility at all.\n\nThe code in daily life: arrive fit for duty — a colleague who appears impaired is a patient-safety emergency, not gossip. Keep boundaries: no romantic relationships with women in your care, care with gifts, no borrowing or lending money with patients. Social media is the newest trap: in a small town a post about 'an interesting breech tonight at our hospital' identifies the woman even without a name. **Raising concerns is a duty, not disloyalty**: report through your supervisor or designated officer, and record what you saw, when, and what you did. Students are accountable too — for honesty about what you did and did not do, and for practising only under agreed supervision.",
      },
      {
        type: "clinical_pearl",
        body: "Three habits guard your licence: practise only what you are competent in, document honestly, and speak up when care is unsafe. Nearly every fitness-to-practise case involves at least one habit that slipped.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "For the second night running a colleague on the labour ward smells of alcohol and makes confused decisions. Two mothers are in labour. You quietly take over her women, inform the shift lead immediately, and write a factual note of what you observed and did. The colleague is stood down and referred for support, and the mothers are safe.\n\nWhy not simply cover for her until morning?\n\nAnswer: Because covering an impaired practitioner trades tonight's safety — and your registration — for a quiet shift. Reporting is patient protection first and colleague support second: illness deserves help, but impairment on duty demands removal, and silence makes you complicit in whatever follows.",
      },
      {
        type: "memory_trick",
        body: "Accountability has four doors: the Council, the Court, the Employer, the Public. Guard them with three habits — Competence, honest Charts, and raising Concerns: the three Cs.",
      },
      {
        type: "summary",
        body: "- A registered midwife answers to the Nursing and Midwifery Council, the law, the employer and the public.\n- The code demands scope of practice, updated competence, honesty and truthful records.\n- Boundaries: no relationships with women in your care, care with gifts and money, disciplined social media.\n- An impaired colleague is a patient-safety event: act to protect mothers, report, record.\n- Students are accountable for honesty and for practising only under agreed supervision.",
      },
    ],
    questions: [
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Easy",
        stem: "To whom is a registered midwife in Ghana accountable?",
        options: [
          "Only to the medical director of the hospital",
          "Only to the professional association",
          "The Nursing and Midwifery Council, the law, the employer and the public",
          "Only to the clients she attends",
        ],
        correctIndex: 2,
        explanation:
          "Accountability runs through four doors at once: professional (the Council and its code), legal (negligence and crime), employer (policies and scope of employment) and public (the trust behind care-seeking). No single door excuses the others.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife posts 'Night shift drama — a footling breech walked into our theatre!' with the hospital tagged, but no patient name. What is the professional problem?",
        options: [
          "Nothing — the woman is not named, so no breach occurred",
          "In a small community, the time, place and story can identify the woman — a confidentiality and professionalism breach",
          "Only that she used her phone at work",
          "Breech births should never be discussed publicly",
        ],
        correctIndex: 1,
        explanation:
          "Identification does not require a name: hospital, date and a rare event narrow a small community to one woman. The post breaches confidentiality and professionalism — the phone-use rule is a lesser issue, and the topic is not the problem.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Professional Conduct and Accountability",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You observe a colleague repeatedly documenting observations that were never taken. What is your duty?",
        options: [
          "Report the falsification through the appropriate supervisory channel and record what you saw, when and what you did",
          "Say nothing — documentation is her responsibility alone",
          "Correct her notes yourself in the patient's file",
          "Warn her once and ask others on shift to watch her",
        ],
        correctIndex: 0,
        explanation:
          "Falsified records are both a professional and a patient-safety violation. The duty is to escalate through proper channels with a factual, timed account. Quiet warnings and amateur corrections leave fabricated clinical data in the record — the most dangerous outcome of all.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Accountability",
        front: "Name the four doors of midwifery accountability.",
        back: "The Nursing and Midwifery Council (professional conduct), the law (negligence), the employer (policies and scope) and the public (trust).",
      },
      {
        topic: "Professional Boundaries",
        front: "Why is 'no names' not enough protection for social media posts about patients?",
        back: "In a small community, hospital, date and an unusual event identify the woman anyway. Re-identification, not naming, is the breach.",
      },
      {
        topic: "Raising Concerns",
        front: "What do you do when a colleague on duty appears impaired?",
        back: "Protect the mothers first (reallocate care), inform the shift lead immediately, and document factually what you observed, when, and what you did. Reporting is duty, not betrayal.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition.",
      },
      {
        organization: "International Confederation of Midwives",
        title: "International Code of Ethics for Midwives",
        note: "Verify current revision.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Ethics in Daily Practice",
    lessonTitle: "Legal Responsibilities of the Midwife",
    description:
      "The law does not ask whether you meant well — it asks what you owed, what you did, and what followed. Learn the frame that lets you practise calmly and defend clearly.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the four elements of negligence and the standard of care.",
      "Explain employer vicarious liability versus personal accountability.",
      "Apply the statutory duties of registration, notification, records and candour.",
    ],
    tags: ["law", "negligence", "liability", "records", "duty of candour"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The law does not ask whether you meant well. It asks what you owed, what you did, and whether what you did caused what happened. Midwives who understand the legal frame practise more calmly — because they know exactly where the edges are, and how their pen protects them.\n\nHere you will learn the four elements of negligence, who pays when things go wrong, and the statutory duties — birth notification, disease reporting, record retention — that come with the badge.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A negligence claim needs the **four Ds**, all present. **Duty**: you owed her a duty of care, automatic once you take her on. **Dereliction**: you fell below the standard a reasonable body of midwives would accept — national guidelines and WHO recommendations now help define that standard. **Direct causation**: your breach actually caused the harm. **Damage**: harm resulted, physical or psychological. Miss any one element and the claim fails — which is why exact times in notes matter so much.\n\n**Vicarious liability** means your employer — the Ghana Health Service or the facility — is generally liable for acts within your employment, but this never erases your personal accountability to the Council, and acts clearly outside your scope can land on you alone. Two further duties: consent — touching or treating without consent can be battery, and the emergency exception must be genuine; and **statutory duties** — births and stillbirths must be notified to the Births and Deaths Registry, notifiable diseases reported, suspected child abuse referred, and records kept for the retention period your facility policy sets. When harm occurs, honesty is also a legal posture: tell her what happened, apologise for the experience, document — concealment converts error into misconduct.",
      },
      {
        type: "clinical_pearl",
        body: "In court the question is never 'did she try her best?' but 'show the court what she did and when'. Your pen is your defence counsel — contemporaneous, exact, unembarrassed.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman bleeds after birth. The midwife is certain she gave oxytocin within two minutes, but the drug chart shows no time and the note was written an hour later from memory. In the resulting claim, the problem is not that she failed — it is that nothing she says can be verified.\n\nWhich part of her defence has collapsed, and why?\n\nAnswer: The documentation. Without contemporaneous times, the court cannot see whether the standard was met, and 'not documented, not done' turns a defensible case into an empty one. Causation may be arguable from the clinical facts; a blank chart is not arguable at all.",
      },
      {
        type: "memory_trick",
        body: "Negligence needs all four Ds standing: Duty, Dereliction, Direct causation, Damage. Knock down one D and the claim collapses — and your records are the evidence for every D.",
      },
      {
        type: "summary",
        body: "- Negligence requires duty of care, breach of the accepted standard, causation and damage — all four.\n- Guidelines and WHO recommendations help define the standard a reasonable body of midwives accepts.\n- Vicarious liability covers in-scope acts; personal accountability — and personal liability — never disappear.\n- Treating without consent can be battery; the emergency exception must be genuine and documented.\n- Statutory duties: notify births and stillbirths, report notifiable diseases, refer safeguarding, retain records; be candid when harm occurs.",
      },
    ],
    questions: [
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the four elements of negligence?",
        options: [
          "Duty of care, breach of standard, causation, damage",
          "Duty, payment, apology, punishment",
          "Delay, dereliction, discharge, documentation",
          "Doubt, diagnosis, drugs, decisions",
        ],
        correctIndex: 0,
        explanation:
          "A claim must show a duty owed, a breach of the standard, harm that the breach directly caused, and actual damage. All four must stand — remove any one and the claim fails, whatever the tragedy.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement about vicarious liability is correct?",
        options: [
          "The employer is liable only if the midwife is a student",
          "The midwife is never personally liable once employed",
          "The employer is generally liable for acts within employment, but the midwife remains professionally accountable to the Council",
          "Liability transfers entirely to the woman if she signed consent",
        ],
        correctIndex: 2,
        explanation:
          "Employers generally answer for acts performed within the scope of employment — but professional accountability to the Council is personal and permanent, and a signed consent form does not excuse substandard care.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Legal Responsibilities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A midwife performs a procedure she is neither trained nor authorised to perform, and harm results. Where does liability most likely fall?",
        options: [
          "Entirely on the employer under vicarious liability",
          "Personally on the midwife, since she acted outside her scope of practice",
          "On the woman for failing to refuse",
          "On the Nursing and Midwifery Council for registering her",
        ],
        correctIndex: 1,
        explanation:
          "Vicarious liability covers acts within employment and scope. A procedure outside training and authorisation falls outside that protection, exposing the midwife personally — to the court and to the Council.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Negligence",
        front: "State the four Ds of negligence.",
        back: "Duty of care owed; Dereliction — breach of the accepted standard; Direct causation; Damage. All four must be proved for a claim to succeed.",
      },
      {
        topic: "Vicarious Liability",
        front: "Does employer liability erase personal accountability?",
        back: "No. The employer generally answers financially for in-scope acts, but the midwife remains personally accountable — professionally to the Council, and personally in law for out-of-scope acts.",
      },
      {
        topic: "Records and Law",
        front: "Why are contemporaneous records the midwife's best legal defence?",
        back: "Courts reconstruct care from notes, not memory: without times, doses and escalation entries, the standard met cannot be shown — 'not documented, not done'.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition.",
      },
      {
        organization: "Government of Ghana",
        title: "Ghana Health Service and Teaching Hospitals Act (Act 525)",
        year: "1996",
        note: "Verify current text and amendments.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Protecting and Recording",
    lessonTitle: "Safeguarding: Protecting the Vulnerable",
    description:
      "Some of the people in your care cannot protect themselves. Safeguarding is the professional machinery that stands between them and harm — and in Ghana, you are part of it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe vulnerable groups and the recognition patterns of abuse.",
      "Explain the WHO LIVES response to a disclosure of violence.",
      "Apply Ghanaian referral routes and documentation for safeguarding concerns.",
    ],
    tags: ["safeguarding", "gbv", "child protection", "lives", "referral"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the people in your care cannot protect themselves — a schoolgirl made pregnant by a man three times her age, a woman beaten at every visit, an old grandmother whose pension is taken from her, a baby whose burns match no story. Safeguarding is the professional machinery that stands between them and harm, and in Ghana you are part of that machinery.\n\nThis lesson covers who is vulnerable, how to recognise abuse, what to do when a woman discloses, and where the law sends you next.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Recognise the patterns: injuries inconsistent with the story or the child's development, delay in seeking care, repeated 'accidents', a partner who answers for her and refuses to leave the room, fearfulness, a minor's pregnancy that is itself a criminal red flag, or FGM scars on examination.\n\nWhen she discloses, your first response is the WHO **LIVES** framework: **Listen** without judgment; **Inquire** gently about her needs; **Validate** — believe her and name the violence as wrong; **Enhance safety** — is she safe tonight, are the children safe; **Support** — connect her to help and keep the door open. Never say 'why don't you just leave', and never promise secrecy. The law limits your silence: the Children's Act (Act 560, 1998) drives reporting of suspected child abuse to the Department of Social Welfare or the police; FGM has been a criminal offence since the 1994 amendment of the Criminal Code; the Domestic Violence Act (Act 732, 2007) backs referral to the Domestic Violence and Victim Support Unit — DOVVSU. Document exactly: her words in quotation marks, body maps, dates and times, and who you informed.",
      },
      {
        type: "clinical_pearl",
        body: "Two sentences never to say: 'Why don't you just leave him?' and 'I won't tell anyone.' Two always to say: 'I believe you — this is not your fault' and 'Let us make you and the children safe tonight.'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 15-year-old books for antenatal care with bruises on her forearm. Her 'boyfriend' is 32 and waits outside. She is frightened of him and of her parents, and begs you to keep everything secret.\n\nWhat are your immediate steps?\n\nAnswer: Clinical care and privacy first. Then, honestly, explain that you cannot promise secrecy — she is a minor at risk, so child protection applies: involve the Department of Social Welfare and DOVVSU per protocol, plan her immediate safety with her, and safeguard what she shares. Document her words verbatim, the findings on a body map, the time, and the referrals made. Confronting the partner is not your job and may endanger her further.",
      },
      {
        type: "memory_trick",
        body: "For a disclosure, LIVES: Listen, Inquire, Validate, Enhance safety, Support. For the route: A-B-C-D — Ask privately, Believe, Child first, DOVVSU and Document.",
      },
      {
        type: "summary",
        body: "- Vulnerable groups: children, women facing violence, adolescents, the elderly, the disabled.\n- Recognition: inconsistent injuries, delayed care-seeking, controlling partners, a minor's pregnancy, FGM scars.\n- Respond with LIVES: listen, inquire, validate, enhance safety, support — never judgment, never secrecy.\n- Ghana's machinery: Children's Act 560, the FGM ban of 1994, Domestic Violence Act 732, DOVVSU and Social Welfare.\n- Document verbatim, body-map the injuries, record times and referrals.",
      },
    ],
    questions: [
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which response belongs to the WHO LIVES first-line response to a disclosure of violence?",
        options: [
          "Advise her to leave the relationship immediately",
          "Listen without judgment, validate that the violence is not her fault, and help enhance her safety",
          "Ask her to confront her partner while you observe",
          "Prescribe sedation to help her sleep",
        ],
        correctIndex: 1,
        explanation:
          "LIVES is Listen, Inquire, Validate, Enhance safety, Support. It centres belief and safety planning. Telling her to leave ignores why women stay (resources, children, danger peaks on leaving), and confrontation or sedation solve nothing and can escalate risk.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why must you never promise a disclosing woman absolute secrecy?",
        options: [
          "Because secrets are unprofessional in general",
          "Because child protection and legal duties may require you to share information, and a broken promise destroys trust and safety planning",
          "Because your supervisor owns all information",
          "Because she will tell others anyway",
        ],
        correctIndex: 1,
        explanation:
          "Some disclosures trigger mandatory sharing — child abuse, serious risk. Promising secrecy sets a trap: either you break the promise and lose her trust, or you keep it and fail a child. Offer privacy with honestly stated limits instead.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Safeguarding",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the legal status of female genital mutilation in Ghana?",
        options: [
          "It is a criminal offence, banned by the 1994 amendment of the Criminal Code",
          "It is legal if performed by a health worker",
          "It is legal with parental consent in rural areas",
          "It is banned only for girls under 12",
        ],
        correctIndex: 0,
        explanation:
          "Ghana criminalised FGM in 1994 by amendment of the Criminal Code. Whoever performs it — including a health worker — commits an offence; no consent, custom or age exception applies.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Safeguarding",
        front: "Spell out LIVES.",
        back: "Listen without judgment; Inquire gently about needs and risks; Validate — believe her, it is not her fault; Enhance safety — is she and are the children safe tonight; Support and refer.",
      },
      {
        topic: "Safeguarding",
        front: "What must you never promise at a disclosure — and why?",
        back: "Absolute secrecy. Child protection and legal duties may compel sharing; offer privacy with stated limits so trust is never betrayed by a broken promise.",
      },
      {
        topic: "Safeguarding",
        front: "Name Ghana's key legal instruments and referral bodies for safeguarding.",
        back: "Children's Act 1998 (Act 560); Criminal Code amendment banning FGM (1994); Domestic Violence Act 2007 (Act 732); referrals to DOVVSU and the Department of Social Welfare.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Responding to Intimate Partner Violence and Sexual Violence against Women: WHO Clinical and Policy Guidelines",
        year: "2013",
        url: "https://www.who.int/publications/i/item/9789241548595",
      },
      {
        organization: "Government of Ghana",
        title: "Children's Act, 1998 (Act 560)",
        year: "1998",
        note: "Verify current text and amendments.",
      },
      {
        organization: "Government of Ghana",
        title: "Domestic Violence Act, 2007 (Act 732)",
        year: "2007",
        note: "Verify current text and amendments.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "ethics-professional-practice",
    moduleTitle: "Protecting and Recording",
    lessonTitle: "Documentation: Your Legal Shield",
    description:
      "Every note you write has three futures — tonight's handover, next year's audit, and one day, evidence. Learn to write notes that protect patients, midwives and the truth.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the purposes and principles of midwifery records.",
      "Explain the rules for correcting errors and making late entries.",
      "Apply documentation standards to escalation and emergency situations.",
    ],
    tags: ["documentation", "records", "contemporaneous", "corrections", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every note you write has three futures: tonight it is a handover, next year it is an audit, and one day it may be evidence read aloud with a lawyer, the woman and another midwife at the table. Documentation that serves all three futures is a skill — learnable, and protective of your patient, your team and you.\n\nThis lesson sets out what makes notes legally and clinically sound, how to correct them honestly, and what must never be missing.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Notes are written for four audiences at once: the next caregiver (communication), the court (evidence), the auditor (quality and research data) and the woman herself (her own story). The principles: **contemporaneous** — at the time or as soon as possible after; **factual** — what you observed and did, not what you concluded (record 'BP 150/100, headache present', not 'she is being dramatic'); **complete** — times of observations, drugs with dose, route and time, who you escalated to, their advice, and what you then did; and **attributable** — signed with your name and designation on every entry.\n\nCorrections happen. Never use correcting fluid — draw a single line through the error so it stays readable, add the correction, initial and date it. A late entry is labelled 'late entry' with the reason and written in true sequence, never squeezed into a gap to look prompt. The entries that decide cases are the escalation entries — '21:40 Dr Mensah informed, advised oxytocin 10 units IM, given 21:45, reviewed 21:55' — because they show duty, standard and causation all at once.",
      },
      {
        type: "clinical_pearl",
        body: "Write every note as though a lawyer, a midwife and the woman herself will read it together in three years — because one day they might. If it is not written, in law it was not done.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A newborn needs brief resuscitation at 02:10. The midwife stays in the room stabilising the baby and the mother, and writes the note at 04:30 from memory: 'baby flat, bagged, cried'. At review, the minute-by-minute timing of ventilation and the Apgar scores cannot be reconstructed.\n\nWhat was lost, and what is the correct practice?\n\nAnswer: The minutes that guide neonatal follow-up — when breathing effort changed, what was done each minute, Apgar at 1 and 5 — and the legal defence. The right practice is a brief contemporaneous entry even during the emergency (a corner of the partogram or resuscitation record), then a timed late entry, labelled with the reason, completed before the shift ends.",
      },
      {
        type: "memory_trick",
        body: "A defensible note is FACT: Factual, At the time — contemporaneous, Complete with times, drugs and escalation, and Tagged with your signature. Errors: one line, initial, date — never ink.",
      },
      {
        type: "summary",
        body: "- Records serve communication, evidence, audit and the woman's own story.\n- Principles: contemporaneous, factual, complete (times, doses, escalation), attributable.\n- Correct errors with a single line, initial and date — never correcting fluid.\n- Label late entries with the reason; write them in true sequence.\n- Escalation entries decide cases: who, when, what was advised, what you did.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "How should a written error in a record be corrected?",
        options: [
          "Erase it completely or cover it with correcting fluid",
          "Rewrite the whole page on a fresh sheet and destroy the old one",
          "Leave it — the record is a legal document and must never be touched",
          "Draw a single line through it so it remains legible, add the correction, initial and date",
        ],
        correctIndex: 3,
        explanation:
          "Legal records must show their own history: a struck-through, still-readable error, initialled and dated, proves honest correction. Erasure, rewriting or destruction of the original destroys credibility — it looks like concealment.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which entry is the strongest documentation of an escalation?",
        options: [
          "'Doctor informed.'",
          "'Told the doctor about the patient.'",
          "'Escalated as per protocol.'",
          "'21:40 Dr Mensah informed of BP 170/115 with clonus; advised hydralazine 5 mg IV and transfer; given 21:45, mother reviewed 21:55.'",
        ],
        correctIndex: 3,
        explanation:
          "The strongest entry names who was informed, when, of what, what was advised, and what was done and when — duty, standard and causation all visible. The other three are unverifiable fragments a court cannot use.",
        courseSlug: "ethics-professional-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does 'contemporaneous' documentation mean?",
        options: [
          "Written at the time of the events, or as soon as practicable afterwards",
          "Written neatly in permanent ink",
          "Written only at the end of the shift",
          "Written together with the doctor",
        ],
        correctIndex: 0,
        explanation:
          "Contemporaneous means written while events are fresh — at the point of care or as soon as practicable. Memory written hours later fades, blurs times and orders, and carries little weight as evidence.",
        courseSlug: "ethics-professional-practice",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "State the correction rule for written records.",
        back: "Single line through the error so it stays legible, write the correction, initial and date. Never correcting fluid, never erasure, never rewriting the page.",
      },
      {
        topic: "Documentation",
        front: "What five elements make an escalation entry defensible?",
        back: "Who was informed (name), when (time), of what (findings), what was advised, and what you did and when in response.",
      },
      {
        topic: "Documentation",
        front: "What are the four audiences every note serves?",
        back: "The next caregiver (communication), the court (evidence), the auditor (quality and data), and the woman herself (her story).",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice (3rd edition)",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives (17th edition)",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "What Is Evidence-Based Practice?",
    description:
      "For centuries midwives did things 'because that is how it is done' — until trials swept the habits away. Evidence-based practice is the discipline of asking, checking and choosing.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Define evidence-based practice and its three components.",
      "Explain the five-step cycle and the PICO question format.",
      "Apply the cycle to changing a ward tradition such as routine episiotomy.",
    ],
    tags: ["ebp", "evidence", "pico", "guidelines", "sackett"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For centuries, midwives did things because 'that is how it is done' — enemas, shaved pubic hair, starvation in labour, routine episiotomy. One by one, trials have swept many of these away. Evidence-based practice is the discipline of asking, checking and choosing, so that your hands follow knowledge rather than habit.\n\nIn this lesson you will define EBP, learn the five-step cycle, and practise shaping a ward question into a form a database can answer.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "David Sackett defined it in 1996: the conscientious, explicit and judicious use of current best evidence, integrated with clinical expertise and the woman's values. Picture a **three-legged stool**: evidence, expertise and values. Evidence without her values is paternalism; values without evidence are guesswork; without your expertise neither survives contact with a real woman at 2 am.\n\nThe cycle is five A's. **Ask** a focused question — PICO: Population, Intervention, Comparison, Outcome ('In term primigravidae (P), does routine episiotomy (I) compared with restricted use (C) reduce severe perineal tears (O)?'). **Acquire** the evidence — guidelines first (WHO, national protocols), then systematic reviews, then primary studies. **Appraise** the quality before trusting it. **Apply** it to this woman, this facility, these resources. **Assess** whether the change helped. Barriers are real — time, access, skills — so start from pre-appraised guidelines: WHO's intrapartum care recommendations, for example, already restrict episiotomy and endorse companionship, so a busy unit can change practice tonight.",
      },
      {
        type: "clinical_pearl",
        body: "Guidelines are evidence pre-chewed: WHO and national protocols have already appraised the studies for you. When time is short, a current guideline outranks a memory and equals a good search.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your unit performs episiotomy on nearly every first-time mother 'to prevent bad tears'. At a journal club you find WHO's intrapartum care recommendation against routine episiotomy and a Cochrane review agreeing. The midwife in charge asks you to lead the change.\n\nHow do you proceed through the remaining A's?\n\nAnswer: You have already asked (the PICO question), acquired (WHO, Cochrane) and appraised (the guidelines have done it). Now apply — propose a restricted-episiotomy protocol, teach the true indications, address colleagues' fear of tears and blame — then assess: audit episiotomy rates and severe tears before and after, and feed the numbers back to the unit. Evidence that is never applied and assessed is decoration.",
      },
      {
        type: "memory_trick",
        body: "The A-team: Ask, Acquire, Appraise, Apply, Assess. And the stool of three legs — Evidence, Expertise, her Values — remove one leg and the stool falls.",
      },
      {
        type: "summary",
        body: "- EBP integrates best research evidence with clinical expertise and the woman's own values.\n- Form focused PICO questions: Population, Intervention, Comparison, Outcome.\n- Work the five A's: ask, acquire, appraise, apply, assess.\n- Guidelines and systematic reviews come first when time is short.\n- Tradition is not evidence — routine episiotomy, starvation and enemas all fell to trials.",
      },
    ],
    questions: [
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "According to Sackett, evidence-based practice integrates best research evidence with what?",
        options: [
          "Clinical expertise and the patient's own values",
          "Hospital management directives and budget limits",
          "The most senior clinician's preference",
          "Traditional practices of the community",
        ],
        correctIndex: 0,
        explanation:
          "Sackett's definition joins three elements: current best evidence, clinical expertise, and the patient's values. Drop any one and care either becomes guesswork, paternalism or blind protocol-following.",
        courseSlug: "research-methods",
      },
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Frame the question: 'In term primigravidae, does routine episiotomy, compared with restricted episiotomy, reduce severe perineal tears?' In PICO, what is the O?",
        options: [
          "Severe perineal tears",
          "Term primigravidae",
          "Routine episiotomy",
          "Restricted episiotomy",
        ],
        correctIndex: 0,
        explanation:
          "The Outcome — what you hope to influence — is severe perineal tears. Term primigravidae is the Population, routine episiotomy the Intervention, restricted use the Comparison. Each letter plays one role only.",
        courseSlug: "research-methods",
      },
      {
        topic: "Evidence-Based Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A unit continues routine episiotomy because 'the senior midwives have always done it'. In EBP terms, what is this?",
        options: [
          "Evidence-based practice by consensus",
          "Applying the precautionary principle",
          "A form of clinical audit",
          "Practice based on tradition rather than current evidence",
        ],
        correctIndex: 3,
        explanation:
          "'We have always done it this way' is the definition of tradition-based practice — the exact habit EBP exists to challenge. Consensus among staff is not evidence, and routine episiotomy is specifically not recommended by WHO.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Evidence-Based Practice",
        front: "Give Sackett's definition of evidence-based practice.",
        back: "The conscientious, explicit and judicious use of current best evidence in decisions about individual patients — integrated with clinical expertise and patient values.",
      },
      {
        topic: "Evidence-Based Practice",
        front: "What are the three legs of the EBP stool?",
        back: "Best research evidence, clinical expertise, and the woman's own values — all three needed, or the stool falls.",
      },
      {
        topic: "Evidence-Based Practice",
        front: "Spell the five A's of the EBP cycle.",
        back: "Ask (PICO), Acquire (search), Appraise (quality), Apply (fit to the woman and setting), Assess (did it work).",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "BMJ",
        title: "Sackett DL, et al. Evidence Based Medicine: What It Is and What It Isn't. BMJ 1996;312:71-72",
        year: "1996",
        url: "https://doi.org/10.1136/bmj.312.7023.71",
      },
      {
        organization: "Cochrane Library (Wiley)",
        title: "The Cochrane Library: Systematic Reviews of Healthcare Interventions",
        note: "Search via cochranelibrary.com.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "Finding and Reviewing the Literature",
    description:
      "Searching badly is easy — drown in two thousand results and quote the first three. Searching well is a craft: five ponds, a Boolean gate, and a written trail others can follow.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the key databases available to a Ghanaian student researcher.",
      "Explain Boolean search logic and screening against inclusion criteria.",
      "Apply a documented search strategy and the evidence hierarchy to a question.",
    ],
    tags: ["literature review", "search", "databases", "prisma", "evidence hierarchy"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your project — and your practice — will stand on literature you must find yourself. Searching badly is easy: type a sentence into a browser, drown in two thousand results, and quote the first three. Searching well is a craft: five ponds, a Boolean gate, and a written trail that another person could follow.\n\nThis lesson shows you where to fish, how to build the search, how to screen what you catch, and what makes a review 'systematic' rather than a lucky dip.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know your **five ponds**: PubMed (free MEDLINE), the Cochrane Library (systematic reviews — the deepest pond), African Journals Online — AJOL — for research done on your own ground, Google Scholar (broad, fine for a start), and HINARI, which gives Ghanaian institutions free or low-cost access to thousands of journals.\n\nBuild the search from your PICO: list concepts and synonyms, then set the Boolean gate — **OR** gathers the synonyms of one concept ('home birth' OR 'home delivery'), **AND** narrows across concepts (home birth AND Ghana AND barriers). Add filters: date, language, publication type. **Screen** titles and abstracts against written inclusion and exclusion criteria — population, place, design, years — then read the survivors in full. Write down the database, the date, the exact terms and the number of hits: your search record is part of your methods, and the PRISMA flow diagram will demand it. Trust follows the **evidence hierarchy**: systematic reviews and meta-analyses at the top, then randomised trials, cohort, case-control, cross-sectional, case reports — expert opinion at the bottom. A **systematic review** is not a long literature review: it follows a written protocol, searches exhaustively, appraises quality with two reviewers, and synthesises in a way you could repeat.",
      },
      {
        type: "clinical_pearl",
        body: "Search like a farmer, not a hunter: sow many seeds (OR synonyms), weed precisely (AND concepts), and write down where and when you harvested. Your search record is half the harvest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student types 'why women deliver at home Northern Ghana' into a general browser and gets two thousand mixed hits, from news pages to theses. She rebuilds it: ('home birth' OR 'home delivery' OR 'facility delivery') AND (barriers OR determinants) AND Ghana, filtered to 2015-2025, run in PubMed and AJOL. She screens forty titles, keeps twelve abstracts, reads eight full texts, and records each search with dates and hit counts.\n\nWhy does recording the searches matter?\n\nAnswer: Because a documented trail makes the review reproducible and honest: examiners — and PRISMA flow diagrams — ask exactly how studies were found, how many were screened and excluded at each stage, and why. The search record is what separates a review from an opinion decorated with quotations.",
      },
      {
        type: "memory_trick",
        body: "Five ponds: P-C-A-G-H — PubMed, Cochrane, AJOL, Google Scholar, HINARI. Boolean: OR gathers the family of synonyms, AND narrows the gate, NOT locks a door.",
      },
      {
        type: "summary",
        body: "- Five sources: PubMed, Cochrane Library, AJOL, Google Scholar and HINARI access.\n- Build searches from PICO: OR for synonyms, AND across concepts, filters for date and type.\n- Screen titles and abstracts against written inclusion criteria, then full texts.\n- Record every search — database, date, terms, hits — PRISMA will demand it.\n- Hierarchy: systematic reviews, then RCTs, cohort, case-control, cross-sectional, case reports, opinion.",
      },
    ],
    questions: [
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which database specialises in systematic reviews of healthcare interventions?",
        options: [
          "Google Scholar",
          "African Journals Online",
          "General web browsers",
          "The Cochrane Library",
        ],
        correctIndex: 3,
        explanation:
          "The Cochrane Library is devoted to systematic reviews and their protocols, with a focus on intervention effects. The others contain primary studies and grey literature but no monopoly on reviews.",
        courseSlug: "research-methods",
      },
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In Boolean searching, what does combining synonyms with OR achieve?",
        options: [
          "It broadens the search by catching all synonyms of a concept",
          "It narrows the search to fewer, more precise results",
          "It excludes unwanted topics from the search",
          "It translates the search into local languages",
        ],
        correctIndex: 0,
        explanation:
          "OR is the gatherer: 'home birth' OR 'home delivery' catches every author's wording for one concept. AND is the gate that narrows across concepts; NOT excludes. Confusing OR with AND is the commonest search error.",
        courseSlug: "research-methods",
      },
      {
        topic: "Literature Searching",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What makes a review 'systematic' rather than narrative?",
        options: [
          "It is written by a senior professor",
          "It cites more than one hundred references",
          "It follows a pre-written protocol with an exhaustive, documented search and quality appraisal by more than one reviewer",
          "It is published in an international journal",
        ],
        correctIndex: 2,
        explanation:
          "Systematic reviews declare their methods in advance, search exhaustively, screen and appraise with at least two reviewers, and report the flow — which is why they sit at the top of the evidence hierarchy. Authorship, citation count and journal prestige prove nothing.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Literature Searching",
        front: "Name the five ponds for midwifery literature searching.",
        back: "PubMed, the Cochrane Library, African Journals Online (AJOL), Google Scholar, and HINARI (free or low-cost journal access for eligible institutions).",
      },
      {
        topic: "Literature Searching",
        front: "What do OR and AND do in a Boolean search?",
        back: "OR gathers synonyms of one concept, broadening the net; AND combines different concepts, narrowing the results.",
      },
      {
        topic: "Literature Searching",
        front: "What defines a systematic review?",
        back: "A pre-specified protocol, an exhaustive documented search, screening against written criteria, appraisal by two or more reviewers, and transparent synthesis — repeatable by others.",
      },
    ],
    sources: [
      {
        organization: "Cochrane Training",
        title: "Cochrane Handbook for Systematic Reviews of Interventions (version 6)",
        year: "2019",
        url: "https://training.cochrane.org/handbook",
      },
      {
        organization: "PRISMA / EQUATOR Network",
        title: "PRISMA 2020 Statement and Flow Diagram",
        year: "2021",
        url: "https://www.prisma-statement.org",
      },
      {
        organization: "Research4Life (HINARI)",
        title: "HINARI Access to Research in Health Programme",
        url: "https://www.research4life.org",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Becoming an Evidence-Based Practitioner",
    lessonTitle: "Judging the Quality of Research",
    description:
      "Not every published study deserves your trust — and the title rarely confesses its weaknesses. Critical appraisal is the interrogation that separates evidence from decoration.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the three master questions of critical appraisal.",
      "Explain bias and confounding and how each is contained.",
      "Apply checklists and read effect sizes, p-values and confidence intervals like a clinician.",
    ],
    tags: ["appraisal", "bias", "confounding", "confidence intervals", "checklists"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Not every published study deserves your trust, and the title rarely confesses its weaknesses. Critical appraisal is the skill of interrogating a paper — is this true? is this big? does this apply to my ward? — and it is what separates evidence-based practitioners from citation collectors.\n\nYou will learn the three master questions, the bias and confounding that corrupt studies, the checklists that keep you honest, and how to read a p-value and a confidence interval without being hypnotised.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Interrogate every paper with **V-R-A**: is it **valid** — were the methods strong enough that bias has not manufactured the result? Are the **results** important — big enough to matter and precise enough to trust? Is it **applicable** — were the participants like your women, in a setting like yours, with resources like yours?\n\n**Bias** is systematic error: **selection bias** — the groups differed before the study began, cured by randomisation with concealed allocation; **measurement bias** — faulty tools or unblinded outcome assessment, cured by blinding. **Confounding** is the hidden third variable linked to both exposure and outcome — poverty confounds the link between home birth and death; randomisation, restriction, matching and adjusted analysis contain it. Checklists keep the interrogation honest: CASP for reading, CONSORT for reporting trials, STROBE for observational studies, PRISMA for reviews. Then read the numbers like a clinician: effect size first (relative risk, odds ratio, mean difference — how big is the difference?), then the **95% confidence interval** — the range of plausible truth; if it crosses 1 for a ratio measure, the study cannot exclude 'no effect', whatever the p-value suggests. Statistical significance is not clinical importance: a tiny, precise difference can be significant and still change nothing on your ward.",
      },
      {
        type: "clinical_pearl",
        body: "A p-value answers 'could chance have done this?' A confidence interval answers 'how big might it really be?' Your practice should follow the size, not the stars.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A poster at a conference claims a new uterotonic 'significantly reduces postpartum haemorrhage'. You find the abstract: relative risk 0.95, 95% confidence interval 0.70-1.30, p = 0.75. A colleague says the title still says 'reduces'.\n\nWhat do you tell her?\n\nAnswer: The interval crosses 1 and the p-value is far from significant — the study cannot exclude no effect, so 'reduces' in the title is spin. The effect, if any, is small and imprecise; no change in unit practice is justified. Keep oxytocin, and judge titles by their intervals, not their adjectives.",
      },
      {
        type: "memory_trick",
        body: "Interrogate with V-R-A: Valid? Results big and precise? Applicable to my women? And remember — a CI crossing 1 is a broken bridge: however wide the title smiles, no significant effect crosses it.",
      },
      {
        type: "summary",
        body: "- Three questions: is the study valid, are the results important, are they applicable to my setting?\n- Selection bias is cured by randomisation with concealed allocation; measurement bias by blinding.\n- Confounding is a third variable linked to exposure and outcome — contained by design and adjustment.\n- Use the checklists: CASP, CONSORT, STROBE, PRISMA.\n- Read effect size and 95% confidence interval; a CI crossing 1 means no demonstrated effect; significance is not importance.",
      },
    ],
    questions: [
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why are outcome assessors blinded in a trial?",
        options: [
          "To make the trial cheaper to run",
          "To reduce measurement bias from knowing which group a participant belongs to",
          "To keep participants from leaving the study",
          "To satisfy the ethics committee only",
        ],
        correctIndex: 1,
        explanation:
          "An assessor who knows the allocation may, quite unconsciously, record outcomes differently between groups — measurement bias. Blinding the assessor protects the measurement, protecting the study's validity.",
        courseSlug: "research-methods",
      },
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A trial reports a relative risk of 1.2 with a 95% confidence interval of 0.8-1.8. How should you interpret it?",
        options: [
          "A 20% increase in risk, proven",
          "A 20% increase in risk, clinically important",
          "Not statistically significant — the interval crosses 1, so no effect cannot be excluded",
          "The trial was too small to report a confidence interval correctly",
        ],
        correctIndex: 2,
        explanation:
          "The interval spans both sides of 1 — risk could plausibly be raised by 80% or lowered by 20%. The point estimate means little until the interval excludes no effect; the CI was computable precisely because the trial had a size to compute from.",
        courseSlug: "research-methods",
      },
      {
        topic: "Critical Appraisal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is confounding?",
        options: [
          "Deliberate falsification of results by researchers",
          "Random variation that disappears with bigger samples",
          "An error in the statistical software",
          "A third variable associated with both the exposure and the outcome that can fake or mask an association",
        ],
        correctIndex: 3,
        explanation:
          "Confounding is the hidden third man: linked to both exposure and outcome, it can manufacture a false association or bury a real one. Randomisation, matching, restriction and adjusted analysis are the containment tools; it is not fraud, not chance, not software error.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Critical Appraisal",
        front: "What are the three master questions of appraisal (V-R-A)?",
        back: "Valid — are the methods free of fatal bias? Results — are they big enough to matter and precise enough to trust? Applicable — are the participants and setting like mine?",
      },
      {
        topic: "Critical Appraisal",
        front: "What does a 95% confidence interval crossing 1 tell you?",
        back: "For a ratio measure (RR, OR), the interval includes 'no effect' — the result is not statistically significant, however the title words it.",
      },
      {
        topic: "Critical Appraisal",
        front: "Define confounding and name two ways to contain it.",
        back: "A third variable linked to both exposure and outcome that distorts their true association. Contained by randomisation, matching, restriction or statistical adjustment.",
      },
    ],
    sources: [
      {
        organization: "Critical Appraisal Skills Programme (CASP)",
        title: "CASP Checklists for Appraising Research",
        url: "https://casp-uk.net",
      },
      {
        organization: "EQUATOR Network",
        title: "Reporting Guidelines: CONSORT, STROBE and PRISMA",
        url: "https://www.equator-network.org",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Research Methods: An Overview",
    description:
      "'How many?' and 'why?' are sister questions needing different tools — one counts, one listens. Most bad projects come from marrying a good question to the wrong method.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Distinguish quantitative, qualitative and mixed methods research.",
      "Explain the logic and sampling differences between the families.",
      "Apply the matching of question to method in a district study.",
    ],
    tags: ["research methods", "qualitative", "quantitative", "sampling", "mixed methods"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Before you choose a method, know what kind of knowledge you are hunting. 'How many women deliver at home?' and 'Why do women deliver at home?' are sister questions needing different tools — one counts, one listens. Most bad student projects are born from marrying a good question to the wrong method.\n\nThis lesson gives you the map: the quantitative, qualitative and mixed families, when each shines, and how sampling differs between counting and understanding.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Quantitative** research measures: numbers, categories, hypotheses; it asks how many, how much, does X change Y — and its strength is generalisation from a sample to a population. Its logic is **deductive**: theory first, then test. **Qualitative** research explores meaning: interviews, focus group discussions, observation; it asks why, how, what is it like — and its strength is depth. Its logic is **inductive**: themes rise from the data. Within the qualitative family there are traditions: **phenomenology** — the lived experience, say of a woman who survived eclampsia; **grounded theory** — the process, say of how families decide to seek care; **ethnography** — the culture, say of birth beliefs in a fishing community. **Mixed methods** runs both deliberately, because numbers without reasons are blind and reasons without numbers are lonely.\n\nSampling splits along the same line. **Probability sampling** — simple random, systematic, stratified, cluster — selects by chance, represents the population and permits statistical inference. **Non-probability sampling** — convenience, quota, **purposive** (choosing information-rich participants deliberately) and **snowball** (participants recruit the hidden next one) — suits exploration, not enumeration. Rigour has two names: validity and reliability in quantitative work; trustworthiness — credibility, transferability, dependability, confirmability — in qualitative.",
      },
      {
        type: "clinical_pearl",
        body: "Ask the question first, fall in love with it, and let it choose its method. The method is the servant of the question — never the other way round.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A district director asks two things: what proportion of births happen at home, and why. A final-year student proposes one instrument — a survey with a questionnaire ending in the open question 'Why?' — planning to report the most common answers.\n\nWhat is lost, and what design fits better?\n\nAnswer: The 'why' needs depth — fear of cost, past humiliation, in-law influence — that one open survey item cannot reach, and the proportion needs representative sampling that a handful of answers cannot give. A mixed methods design answers both: a cross-sectional survey for the proportion, then focus group discussions and interviews to explain it. Two questions, two tools, one study.",
      },
      {
        type: "memory_trick",
        body: "Numbers count, stories explain, mixed methods do both. Sampling doors: Random represents, Purposive understands, Snowball finds the hidden, Convenience merely takes what comes.",
      },
      {
        type: "summary",
        body: "- Quantitative research measures and generalises (deductive); qualitative research explores meaning and depth (inductive).\n- Qualitative traditions: phenomenology (lived experience), grounded theory (process), ethnography (culture).\n- Mixed methods combines both deliberately, for countable facts and their reasons.\n- Probability sampling represents populations; non-probability sampling explores and finds hidden groups.\n- Rigour is called validity and reliability in quantitative work, trustworthiness in qualitative.",
      },
    ],
    questions: [
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of these questions is fundamentally qualitative?",
        options: [
          "What proportion of women deliver at the facility?",
          "Does IPTp reduce low birth weight?",
          "Why do women delay seeking care in labour?",
          "What is the mean birth weight in the district?",
        ],
        correctIndex: 2,
        explanation:
          "'Why' asks for meanings, reasons and experiences — the territory of interviews and focus groups. Proportions, effects and means are all counting questions needing measurement and representative samples.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why use stratified random sampling in a district-wide survey?",
        options: [
          "To save money on transport",
          "To avoid needing a sampling frame",
          "To make the questionnaire shorter",
          "To guarantee that key subgroups, such as rural and urban women, are represented in their true proportions",
        ],
        correctIndex: 3,
        explanation:
          "Stratification divides the population into subgroups and samples each proportionately, so no key stratum is missed by chance. It still needs a sampling frame, and it changes nothing about cost or questionnaire length.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Methods Overview",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In qualitative research, what corresponds to validity and reliability in quantitative research?",
        options: [
          "The p-value of the themes",
          "Sample size and power",
          "The response rate",
          "Trustworthiness — credibility, transferability, dependability and confirmability",
        ],
        correctIndex: 3,
        explanation:
          "Qualitative rigour is judged by trustworthiness: credibility (truth of findings), transferability (applicability elsewhere), dependability (consistency of process) and confirmability (grounding in data rather than bias). Themes have no p-values, and power belongs to counting.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Methods",
        front: "Contrast quantitative and qualitative research in one line each.",
        back: "Quantitative measures and generalises — how many, how much, does X cause Y. Qualitative explores meaning and depth — why, how, what is it like.",
      },
      {
        topic: "Research Methods",
        front: "What is snowball sampling and when is it used?",
        back: "Each participant recruits the next — used to reach hidden populations, such as women who birth unattended, who no register lists.",
      },
      {
        topic: "Research Methods",
        front: "Name the four components of qualitative trustworthiness.",
        back: "Credibility, transferability, dependability, confirmability — the qualitative answer to validity and reliability.",
      },
    ],
    sources: [
      {
        organization: "SAGE Publications",
        title: "Creswell JW, Creswell JD. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches",
        year: "2018 (5th edition)",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "African Journals Online (AJOL)",
        title: "African-Published Scholarly Research",
        url: "https://www.ajol.info",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Study Design: Choosing the Right Approach",
    description:
      "RCTs, cohorts, case-control and surveys — each design is a time machine with its own powers and blind spots. Learn what each can and cannot prove.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the major study designs and their strengths.",
      "Explain why randomisation beats confounding and where ethics forbids it.",
      "Apply design choice to a community maternity question.",
    ],
    tags: ["study design", "rct", "cohort", "case-control", "cross-sectional"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every study design is a time machine: some roll dice and roll forward, some start at the end and look backwards, some freeze the frame. Choosing the right one decides what your study can claim — and choosing badly decides what it cannot, no matter how hard you work.\n\nThis lesson walks through the designs a midwifery researcher actually uses, their powers and blind spots, and the ethics that sometimes forbids the strongest one.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **randomised controlled trial** allocates participants by chance to intervention or control — the only design that balances the unknowns, which is why it rules the hierarchy for questions of cause. It needs genuine uncertainty (equipoise), resources and ethics: you cannot randomise a harmful exposure, and in pregnancy you rarely randomise away known effective care.\n\nThe **cohort** study follows exposed and unexposed groups forward and measures incidence — the design for 'does cooking smoke associate with low birth weight?'; it is slow and loses people to follow-up. The **case-control** study starts at the outcome — cases with the disease, controls without — and looks back at exposure; it is fast and ideal for rare outcomes like maternal near-miss, but hostage to recall bias and to controls that do not represent the population that produced the cases. The **cross-sectional survey** takes a snapshot and measures **prevalence**, cheaply and quickly — but a snapshot cannot separate cause from effect. Case series only generate hypotheses. Above them all sit systematic reviews and meta-analyses, pooling the evidence. When you read any study, ask first which time machine it boarded.",
      },
      {
        type: "clinical_pearl",
        body: "Randomisation is the only design that balances the variables you never thought of. Everything else leaves a door open for confounding — which is why a small RCT can be decisive and a huge survey can only suggest.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your district asks: does exposure to cooking-fire smoke relate to low birth weight? A colleague proposes an RCT — assign half the pregnant women to clean cookstoves. The ethics committee instead approves a cohort: recruit pregnant women, classify their household smoke exposure, follow them to birth, compare birth weights as relative risks.\n\nWhy not randomise, and what does the cohort cost?\n\nAnswer: You cannot ethically assign women to keep breathing harmful smoke, and withholding cleaner stoves from a control group is likewise difficult where they could simply be provided. The cohort observes exposure as it naturally occurs and follows forward — but it is slower, vulnerable to loss to follow-up, and cannot balance unknown confounders the way randomisation would, so adjustment is essential.",
      },
      {
        type: "memory_trick",
        body: "Designs by time travel: RCT rolls dice forward; cohort follows the exposed forward; case-control starts at the end and looks back; cross-sectional freezes the frame. Hierarchy top to bottom: reviews, RCTs, cohorts, case-control, cross-sectional, case reports.",
      },
      {
        type: "summary",
        body: "- RCT: random allocation balances known and unknown confounders — gold standard for causation, constrained by ethics and resources.\n- Cohort: follows exposure forward, measures incidence and relative risk; slow, loss to follow-up.\n- Case-control: starts with outcome and looks back; fast, suited to rare outcomes; recall and selection bias threaten it.\n- Cross-sectional: a snapshot that measures prevalence and association, never causation.\n- Systematic reviews and meta-analyses pool evidence and sit at the top of the hierarchy.",
      },
    ],
    questions: [
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which feature defines a randomised controlled trial?",
        options: [
          "Participants are interviewed in depth about their experiences",
          "Participants are allocated to groups by chance",
          "Participants are chosen because they already have the outcome",
          "Participants are measured once at a single point in time",
        ],
        correctIndex: 1,
        explanation:
          "Random allocation — chance decides the group — is the defining feature of the RCT, balancing both known and unknown confounders between arms. The other options describe qualitative, case-control and cross-sectional designs.",
        courseSlug: "research-methods",
      },
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You want to study risk factors for a rare outcome — maternal near-miss in your region. Which design is most practical?",
        options: [
          "Randomised controlled trial",
          "Prospective cohort",
          "Case-control study",
          "Cross-sectional survey",
        ],
        correctIndex: 2,
        explanation:
          "Rare outcomes make cohorts enormous and slow — you would follow thousands to catch a handful of cases. Case-control starts with the cases already identified and compares their exposures with controls, delivering the answer quickly. A trial cannot be done for past exposures, and a snapshot cannot collect rare events efficiently.",
        courseSlug: "research-methods",
      },
      {
        topic: "Study Design",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What can a cross-sectional survey measure, and what can it never establish?",
        options: [
          "It measures prevalence and can establish causation",
          "It measures incidence and can establish causation",
          "It measures prevalence but cannot establish causation or time order",
          "It measures neither prevalence nor association",
        ],
        correctIndex: 2,
        explanation:
          "A snapshot counts who has the condition now — prevalence — and can show associations. But exposure and outcome are measured together, so the study cannot show which came first; causation needs the passage of time: cohort or trial.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Study Design",
        front: "Why does an RCT defeat confounding?",
        back: "Random allocation distributes both known and unknown confounders evenly between groups by chance — the only design that balances what you never measured.",
      },
      {
        topic: "Study Design",
        front: "Case-control studies: what do they start with, and what are their two classic biases?",
        back: "They start with the outcome (cases) and look backward at exposure. Watch for recall bias in reporting past exposure and selection bias in choosing controls.",
      },
      {
        topic: "Study Design",
        front: "Prevalence or incidence — which design delivers which?",
        back: "Cross-sectional surveys measure prevalence (cases at one moment). Cohort studies follow people forward and measure incidence (new cases over time).",
      },
    ],
    sources: [
      {
        organization: "Cochrane Training",
        title: "Cochrane Handbook for Systematic Reviews of Interventions (version 6)",
        year: "2019",
        url: "https://training.cochrane.org/handbook",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "EQUATOR Network",
        title: "STROBE Statement: Reporting of Observational Studies",
        url: "https://www.equator-network.org",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Collecting Data Well",
    description:
      "A study is only as good as its data — and data go wrong quietly. Good tools, honest sampling, trained hands and locked doors: the housekeeping of trustworthy research.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe data collection tools and the qualities of validity and reliability.",
      "Explain question-writing traps and the role of piloting and translation.",
      "Apply field discipline for consent, anonymisation and data security.",
    ],
    tags: ["data collection", "questionnaires", "sampling", "pilot", "data security"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A study is only as good as its data, and data go wrong quietly — a leading question here, an un-translated word there, a sheet lost in the rain — until the whole edifice answers a question nobody asked. Collecting data well is mostly housekeeping: good tools, honest sampling, trained hands and locked doors.\n\nThis lesson covers the tools, the classic question-writing traps, and the field discipline that keeps your data clean and your participants safe.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Choose the tool for the data: a **structured questionnaire** for numbers and categories; a **semi-structured interview guide** for depth one-to-one; a **focus group discussion guide** for shared norms and debate; an **observation checklist** for what people do rather than what they say; and a **record extraction form** for what already exists. Two qualities govern them all: **validity** — the tool measures what it claims — and **reliability** — it measures the same way every time. The cheapest way to buy both is a **pilot**: test on five or ten similar respondents, watch the frowns, fix the items.\n\nQuestion traps are standard exam fare: **leading** ('You do attend ANC, don't you?'), **double-barrelled** ('Do you eat well and take your iron?'), **jargon**, and questions asked where anyone can hear. For local languages, translate and independently back-translate to catch drift. Sample size needs a power calculation — too small misses a true effect; too large wastes scarce cedis; a free calculator with your supervisor's help does the arithmetic. In the field: train assistants with role-play, supervise with spot-checks, seek consent before every interview, anonymise with study codes kept separate from names, lock paper in a cabinet, password-protect files — and report missing data honestly, never inventing an entry.",
      },
      {
        type: "clinical_pearl",
        body: "Pilot the tool on five mothers before the study day. Five real pilots will find more faults than fifty proof-reads, because respondents read with their own vocabulary, not yours.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student pre-tests a translated questionnaire. Item 4 reads 'Do you practise good hygiene and deliver in the facility?' Two mothers answer yes to hygiene and no to facility but must tick one box; a third asks what 'hygiene' means.\n\nWhat are the faults, and how are they fixed?\n\nAnswer: The item is double-barrelled — two questions in one — and its value-laden wording ('good') invites the socially desirable yes. Split it into separate neutral items ('Where did your last birth take place?'), translate and back-translate, then re-pilot until nobody stumbles. A pre-test exists precisely to catch this before three hundred women answer a broken question.",
      },
      {
        type: "memory_trick",
        body: "Bad questions wear three hats — Leading, Jargon, Double-barrelled: the L-J-D gang. A good tool is V-R-P: Valid, Reliable, Piloted. Data safety in three moves: Code the names, lock the room, separate the key.",
      },
      {
        type: "summary",
        body: "- Match the tool to the data: questionnaire, interview guide, FGD guide, observation checklist, extraction form.\n- Validity and reliability are bought cheaply by piloting on real respondents.\n- Avoid leading, double-barrelled and jargon questions; translate and back-translate for local languages.\n- Sample size is a power calculation, not a guess — too small misses, too big wastes.\n- Field discipline: consent, anonymisation with separate master list, locked and password-protected data, honest missing data.",
      },
    ],
    questions: [
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which item is double-barrelled?",
        options: [
          "How many antenatal visits did you make?",
          "Do you eat a balanced diet and take your iron tablets daily?",
          "Where did your most recent birth take place?",
          "At what age did you first become pregnant?",
        ],
        correctIndex: 1,
        explanation:
          "The item asks two questions at once — diet and tablets — so a mother who does one but not the other has no truthful single answer. The other items each measure exactly one thing.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the main purpose of piloting a data collection tool?",
        options: [
          "To show the ethics committee a finished instrument",
          "To increase the sample size",
          "To train statisticians in data entry",
          "To detect confusing, leading or double-barrelled items and test validity and timing before the real study",
        ],
        correctIndex: 3,
        explanation:
          "A pilot is a dress rehearsal with real respondents of the target population: it exposes items that confuse or mislead, checks the flow and timing, and measures whether the tool behaves as intended. The ethics committee sees the tool before approval regardless; a pilot changes nothing about sample size or entry.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "How should participants' identities be protected in a student survey?",
        options: [
          "Replace names with study codes and keep the master list separate, locked and accessible only to the researcher",
          "Write initials instead of full names on all forms",
          "Keep all names on one shared sheet for easy follow-up",
          "Photograph participants for the records",
        ],
        correctIndex: 0,
        explanation:
          "Anonymisation means the data carry codes, not identities, and the key linking codes to names is stored separately, locked, with access limited. Initials identify people almost as well as names; shared sheets and photographs do the opposite of protecting anyone.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Data Collection",
        front: "What are the three classic question-writing traps?",
        back: "Leading questions that push an answer; double-barrelled questions that ask two things at once; and jargon the respondent does not use.",
      },
      {
        topic: "Data Collection",
        front: "Define validity and reliability of a data tool.",
        back: "Validity — the tool measures what it claims to measure. Reliability — it measures the same way on repeated use, with different interviewers or occasions.",
      },
      {
        topic: "Data Collection",
        front: "How is participant anonymity protected in field practice?",
        back: "Study codes replace names on all forms; the code-name master list is stored separately, locked; electronic files are password-protected; access is limited to the research team.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "Putting Women First: Ethical and Safety Recommendations for Research on Domestic Violence against Women",
        year: "2001",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Doing Research",
    lessonTitle: "Data Analysis Basics",
    description:
      "Numbers confess — but only under skilful interrogation. A small toolkit for describing, testing and presenting honestly, and for knowing when a number is being made to lie.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe data types and their descriptive statistics and charts.",
      "Explain the logic of chi-square and t-tests, p-values and confidence intervals.",
      "Apply result-reading to ward evidence without over-claiming causation.",
    ],
    tags: ["statistics", "analysis", "p-value", "chi-square", "correlation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Numbers confess, but only under skilful interrogation. Most of what a student midwife needs is not advanced mathematics — it is a small toolkit for describing, testing and presenting honestly, plus the wisdom to know when a number is being made to lie.\n\nThis lesson walks you from describing your data, through choosing the right simple test, to reading p-values, intervals and correlations like a clinician rather than a gambler.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Describe first, always.** Categorical data — place of birth, yes-or-no answers — become frequencies and percentages, shown as tables or bar charts. Numerical data — birth weights, waiting times — get a centre and a spread: **mean and standard deviation** when the distribution is symmetrical; **median and interquartile range** when it is skewed — and waiting times, costs and many biological values are skewed, so the median is the honest centre.\n\nWhen you compare groups you move from description to **inference**: could this difference be chance? The null hypothesis says 'no real difference'; the **p-value** is the probability of a difference at least this big if that null were true — convention draws the line at 0.05. The **95% confidence interval** is more honest: it shows the range of plausible values for the true effect. Two tests cover most student projects: **chi-square** for two categorical variables — ANC visits against place of birth; the **t-test** for two means — mean birth weight by number of IPTp doses. **Correlation** (r, from -1 to +1) measures how two numerical measures travel together — and never proves that one causes the other. Free software — Epi Info from CDC, or Excel — computes all of it; your job is to choose the test the data type demands and to report exact numbers, not adjectives.",
      },
      {
        type: "clinical_pearl",
        body: "For skewed data — waiting times, costs — the median stands firm while the mean is dragged along by the giants. And correlation never testifies to causation: two crocodiles rising with the tide did not cause the tide.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "In your audit, women with four or more ANC visits delivered in a facility 62% of the time versus 41% for those with fewer; chi-square p = 0.03. A colleague announces that 'ANC causes facility delivery' and proposes mandatory ANC.\n\nWhat does p = 0.03 actually license you to say?\n\nAnswer: That if there were truly no association, a difference this large would arise by chance about three times in a hundred — so chance alone is an unlikely explanation. It does not prove causation: this is observational data, and confounding — distance, wealth, education — could produce or inflate the link. Report the association, name the possible confounders, and keep the word 'cause' out of your conclusion.",
      },
      {
        type: "memory_trick",
        body: "Choose the test by the data: Names go to chi-square, Means go to t, Medians to Mann-Whitney. Read the interval, not just the stars — and correlation is company, never causation.",
      },
      {
        type: "summary",
        body: "- Describe first: frequencies and percentages for categorical data; mean and SD, or median and IQR when skewed.\n- Match the chart to the data type: bars for categories, histogram for spread, line for time.\n- p-value: how easily chance could fake this result; 95% CI: the plausible range of the true effect.\n- Chi-square compares two categorical variables; t-test compares two means; Mann-Whitney for skewed or ordinal data.\n- Correlation measures company, never causation — and report exact numbers, not adjectives.",
      },
    ],
    questions: [
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Waiting times in your clinic are highly skewed by a few very long waits. Which summary is most honest?",
        options: [
          "The mean, because it uses all the data",
          "The median, because it is not dragged by extreme values",
          "The mode, because it is the most common value",
          "The range, because it is the simplest",
        ],
        correctIndex: 1,
        explanation:
          "A handful of marathon waits can pull the mean far above the experience of typical women. The median — the middle value — barely moves, so it reports the honest centre of skewed data, with the interquartile range for spread.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You compare place of birth (facility or home — a categorical variable) against having at least four ANC visits (yes or no). Which test fits?",
        options: [
          "Chi-square test",
          "Paired t-test",
          "Pearson correlation",
          "Analysis of variance",
        ],
        correctIndex: 0,
        explanation:
          "Two categorical variables compared for association is exactly the chi-square job — it asks whether the observed counts depart from what independence would predict. t-tests need means, correlation needs two numerical measures, ANOVA compares several means.",
        courseSlug: "research-methods",
      },
      {
        topic: "Data Analysis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A study finds r = 0.7 between a mother's age and her number of living children. What can you conclude?",
        options: [
          "Age causes higher parity",
          "Parity causes ageing",
          "The correlation is too weak to report",
          "Age and number of living children rise together strongly — but causation is not established",
        ],
        correctIndex: 3,
        explanation:
          "r = 0.7 is a strong positive linear association — the two measures travel together. Correlation is silent about direction and mechanism: both variables are driven by shared histories, and only a designed study could untangle cause. The association is far from too weak to report.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Data Analysis",
        front: "When do you report a median instead of a mean?",
        back: "When the data are skewed — waiting times, costs, some biological measures. The median resists extreme values that drag the mean.",
      },
      {
        topic: "Data Analysis",
        front: "Which test compares two categorical variables, and which compares two means?",
        back: "Chi-square compares two categorical variables (counts across groups); the t-test compares the means of two groups — with Mann-Whitney for skewed or ordinal data.",
      },
      {
        topic: "Data Analysis",
        front: "What does a p-value of 0.03 mean — and what does it NOT mean?",
        back: "It means a result this extreme would occur by chance about 3% of the time if no true effect existed. It does not mean the effect is large, important, or causal.",
      },
    ],
    sources: [
      {
        organization: "US Centers for Disease Control and Prevention",
        title: "Epi Info: Free Statistics Software for Public Health",
        url: "https://www.cdc.gov/epiinfo",
      },
      {
        organization: "OpenStax (Rice University)",
        title: "Introductory Statistics 2e",
        url: "https://openstax.org/books/introductory-statistics-2e",
      },
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Integrity and Planning",
    lessonTitle: "Research Ethics: Protecting Participants",
    description:
      "Research has its own dark history — which is why it has the strictest ethics in all of health. Every rule was paid for by someone who was harmed.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the landmark codes and their lessons.",
      "Explain the informed consent process and the rights of research participants.",
      "Apply the Ghanaian approval pathway and protections for vulnerable groups.",
    ],
    tags: ["research ethics", "consent", "irb", "helsinki", "vulnerable groups"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Research has its own dark history — which is why it has the strictest ethics in all of health. Every rule you will meet, from thumbprint witnesses to ethics committees, was paid for by someone who was harmed. As a final-year student planning your project, you now stand on the protective side of that history.\n\nThis lesson covers the codes, the consent process, the treatment of vulnerable groups, and the Ghanaian approvals you must secure before the first question is asked.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The landmarks: the **Nuremberg Code** (1947) — born from the trials of war crimes — made voluntary consent essential; the **Declaration of Helsinki** (World Medical Association, 1964, revised many times) placed the participant's welfare above science and society; the **Belmont Report** framed three principles — respect for persons, beneficence and justice.\n\nResearch **informed consent** is stricter than clinical consent: a written participant information sheet in her own language; understanding verified, not presumed; genuine voluntariness — no care, favour or payment conditional on taking part; and the explicit right to refuse or **withdraw at any time, without penalty**. A participant who cannot read signs with a **thumbprint before an impartial witness** — and must still be able to tell you, in her own words, what she agreed to. Approval comes before data, not after: in Ghana, protocols go to a research ethics committee — the Ghana Health Service Ethics Review Committee, Noguchi Memorial Institute or a university IRB — plus administrative permission from the district and facility. **Pregnant women and adolescents** are vulnerable groups: studied precisely because they matter, but with stricter risk-benefit scrutiny; for children, a parent consents while the child gives age-appropriate assent. Protect data with codes and locked storage, return results to the community, and credit honestly — fabrication, falsification and plagiarism are misconduct, not shortcuts.",
      },
      {
        type: "clinical_pearl",
        body: "The thumbprint has a witness and the sheet has her language, but the test is the same: tomorrow, she should still be able to tell you what she agreed to — and that she may say no at any time.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student wants to interview women who survived eclampsia about their experiences. A helpful ward sister offers to 'pick the cooperative ones and have them sign while they are still on the ward — it saves time'.\n\nWhat is wrong with this offer?\n\nAnswer: Three things. Selection by a gatekeeper skews the sample to 'cooperative' voices; women fresh from critical illness, on a ward where staff hold power over them, cannot consent freely — voluntariness is compromised; and there is no information sheet, understanding check or stated right to withdraw. Recruit after discharge, in private, with committee-approved information and consent — and let the sister advertise the study, never select its participants.",
      },
      {
        type: "memory_trick",
        body: "Three codes, three lessons: Nuremberg taught consent, Helsinki taught that the participant comes before the finding, Belmont taught justice. And the golden sequence: Review first, Recruit freely, Refusal free of penalty.",
      },
      {
        type: "summary",
        body: "- Nuremberg (1947): voluntary consent essential. Helsinki (1964): participant welfare above science. Belmont: respect, beneficence, justice.\n- Research consent: information sheet in her language, verified understanding, voluntariness, withdrawal at any time without penalty.\n- Non-literate participants: thumbprint before an impartial witness, understanding still verified.\n- Ethics committee approval and facility permission come before any data collection.\n- Vulnerable groups — pregnant women, adolescents, children — need stricter scrutiny; data are coded and locked; fabrication and plagiarism are misconduct.",
      },
    ],
    questions: [
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A research participant who cannot read is invited to join a study. What is required for her consent?",
        options: [
          "A family member may sign on her behalf without her involvement",
          "She is excluded from all research",
          "Only a verbal agreement is needed",
          "The information is explained in her own language, and she consents by thumbprint before an impartial witness",
        ],
        correctIndex: 3,
        explanation:
          "Illiteracy does not remove the right to take part or to choose. The process is explained in her language, an impartial witness observes, and she thumbprints. Family signatures and bare verbal agreements bypass her own consent.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman agrees to join your study today. Next week she changes her mind. What is her right?",
        options: [
          "She must complete the interviews she started",
          "She must pay back the transport refund she received",
          "She may withdraw at any time without penalty, and her care is unaffected",
          "She may withdraw only with her husband's permission",
        ],
        correctIndex: 2,
        explanation:
          "Withdrawal at any time, without penalty and without any effect on her care, is a bedrock right of research participation. Reimbursement was never payment for data, and nobody else authorises her decisions about herself.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Ethics",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "When must ethical approval for your student project be obtained?",
        options: [
          "After data collection, if the results look publishable",
          "Only if the study includes blood sampling",
          "Only when the supervisor is unavailable",
          "Before any participant is recruited or data collected",
        ],
        correctIndex: 3,
        explanation:
          "Ethics review exists to protect participants — so it must precede contact with any participant. Retroactive approval, and thresholds based on invasiveness or supervisor availability, all leave people unprotected while the harm would already have been done.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Ethics",
        front: "How is valid consent obtained from a participant who cannot read?",
        back: "Explain the study in her own language, confirm understanding, and take her thumbprint before an impartial witness who signs the form.",
      },
      {
        topic: "Research Ethics",
        front: "What are a research participant's withdrawal rights?",
        back: "She may refuse to join, or withdraw at any time, for any reason, without penalty — with no effect on her care or entitlements.",
      },
      {
        topic: "Research Ethics",
        front: "Name Ghana's routes of ethics approval for health research.",
        back: "A research ethics committee — Ghana Health Service Ethics Review Committee, Noguchi Memorial Institute or a university IRB — plus administrative permission from the district and facility where data will be collected.",
      },
    ],
    sources: [
      {
        organization: "World Medical Association",
        title: "Declaration of Helsinki: Ethical Principles for Medical Research Involving Human Subjects",
        url: "https://www.wma.net/policies-post/wma-declaration-of-helsinki/",
      },
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Ghana Health Service",
        title: "Ghana Health Service Ethics Review Committee: Protocol Submission Requirements",
        note: "Verify current requirements with GHS-ERC.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    courseSlug: "research-methods",
    moduleTitle: "Integrity and Planning",
    lessonTitle: "From Idea to Proposal",
    description:
      "Every study is born twice — once as a question, and again as a proposal. The proposal is the contract behind your project; learn to write one that passes the first time.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of a research proposal.",
      "Explain SMART objectives and the objectives-methods mirror rule.",
      "Apply feasibility checks of timeline, budget and scope to a student project.",
    ],
    tags: ["proposal", "planning", "objectives", "gantt", "budget"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every study is born twice: once as a question in your head, and again as a proposal on paper. The proposal is the contract between you and everyone whose trust you need — supervisors, the ethics committee, the district, and your future self on the day the data look messy. A weak question can still become a strong study; a weak proposal almost never does.\n\nThis lesson assembles the proposal, part by part, and teaches the two disciplines examiners look for: objectives that are SMART, and methods that mirror them.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A proposal answers **five questions in order**. **Why** — background and problem statement: what is known, what gap your study fills, why it matters here; local numbers persuade examiners best. **What** — one general objective plus specific objectives that are **SMART**: specific, measurable, achievable, relevant, time-bound. **How** — methodology: design, setting, population with inclusion and exclusion criteria, sampling method and size (the calculation shown, not asserted), data collection tools, procedure, an analysis plan matched item by item to the objectives, and ethical considerations with the consent process. **With whose permission** — approvals: supervisor, ethics committee, district and facility authorities. **With what** — a **work plan**, best drawn as a Gantt chart mapping activities against months, and a realistic budget: transport, printing, assistant allowances, airtime, contingency.\n\nThe discipline that separates passed proposals from returned ones: **objectives and methods must mirror each other** — if an objective has no method to answer it, cut the objective; if a method serves no objective, cut the method. Keep the study small enough to finish: a modest cross-sectional study completed in three months beats an ambitious cohort abandoned in month five. Write the title last, once the study has found its shape — variables, population, place and design in one honest line.",
      },
      {
        type: "clinical_pearl",
        body: "Examiners read the objectives first and the methods second. If those two sections do not mirror each other line by line, no beautiful background will save the proposal. A small study finished beats a grand study abandoned.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student submits a proposal titled 'Improving maternal health in Ghana' with six sweeping objectives and a twelve-month budget covering three regions. Her supervisor returns it the next day.\n\nWhat does the rewrite look like?\n\nAnswer: Narrow and honest: 'Uptake of three or more doses of IPTp and its barriers among antenatal clients in Yendi district: a cross-sectional study.' One general objective, three specific SMART objectives — estimate uptake, identify barriers, examine the association with ANC factors — a cross-sectional design with a calculated sample, a three-month Gantt chart, a modest budget, ethics approval built into the timeline. Methods mirror objectives line for line, and the study can actually be finished.",
      },
      {
        type: "memory_trick",
        body: "A proposal answers five questions: Why (background), What (objectives), How (methods), Whose permission (ethics and authorities), With what (Gantt and budget). And the mirror rule: objectives and methods, one for one, line for line.",
      },
      {
        type: "summary",
        body: "- Structure: title, background and problem statement, literature review, objectives, methodology, ethics, work plan, budget, references, appendices.\n- Write one general objective and specific objectives that are SMART.\n- Methods must mirror objectives: design, population, sampling, tools, analysis — one for one.\n- Approvals — supervisor, ethics committee, district, facility — are part of the timeline, not an afterthought.\n- Gantt chart the months, budget the cedis, and keep the scope small enough to finish.",
      },
    ],
    questions: [
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does the A in SMART objectives stand for?",
        options: [
          "Ambitious",
          "Academic",
          "Approved",
          "Achievable",
        ],
        correctIndex: 3,
        explanation:
          "SMART objectives are specific, measurable, achievable, relevant and time-bound. Achievable is the discipline students most often skip — an objective you cannot deliver with your sample, time and budget is a wish, not an objective.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which title is best for a student project?",
        options: [
          "Improving maternal health in Ghana",
          "A study of pregnant women",
          "Uptake of IPTp and its barriers among antenatal clients in Yendi district: a cross-sectional study",
          "Why mothers die: a global analysis",
        ],
        correctIndex: 2,
        explanation:
          "A good title carries the variables, the population, the place and the design in one line — the reader knows the study before page two. The alternatives are vague about everything: no population, no place, no design, and scopes no student could deliver.",
        courseSlug: "research-methods",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your specific objective is to 'estimate the proportion of facility births in the district'. Which methods element must mirror it?",
        options: [
          "Twenty in-depth interviews with mothers",
          "A cross-sectional survey with a representative sample and a defined denominator for proportions",
          "A laboratory analysis of cord blood",
          "A systematic review of global literature",
        ],
        correctIndex: 1,
        explanation:
          "Estimating a proportion demands a representative cross-sectional sample and an explicit denominator — that is the method that mirrors the objective. Interviews explore meanings; they cannot estimate a proportion for a district.",
        courseSlug: "research-methods",
      },
    ],
    flashcards: [
      {
        topic: "Research Proposal",
        front: "What five questions must a proposal answer in order?",
        back: "Why (background and gap), What (objectives), How (methodology), Whose permission (ethics and authorities), With what (work plan and budget).",
      },
      {
        topic: "Research Proposal",
        front: "Spell out SMART.",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — the test every specific objective must pass.",
      },
      {
        topic: "Research Proposal",
        front: "What is the objectives-methods mirror rule?",
        back: "Every objective needs a method that answers it, and every method must serve an objective — one for one. Orphans on either side get cut.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice",
        note: "Verify current edition.",
      },
      {
        organization: "SAGE Publications",
        title: "Creswell JW, Creswell JD. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches",
        year: "2018 (5th edition)",
      },
      {
        organization: "Ghana Health Service",
        title: "Ghana Health Service Ethics Review Committee: Protocol Submission Requirements",
        note: "Verify current requirements with GHS-ERC.",
      },
    ],
  },
];
