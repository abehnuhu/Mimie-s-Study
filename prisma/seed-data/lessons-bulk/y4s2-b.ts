// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch B (Community & Public Health
// Leadership, Advanced Maternal & Newborn Practice)
// 16 lessons anchored to prisma/seed-data/curriculum.ts
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Leading Community Care",
    lessonTitle: "The Community Health Leader",
    description:
      "From tasks to territory — the community health nurse as clinician, leader and health-system node. This lesson maps the leadership you are stepping into in your final semester.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the community health leader's five working roles: clinician, public health leader, mentor, data-user and advocate.",
      "Explain why leadership in the community runs on influence and relationships rather than formal authority — and how to build both.",
      "Apply a plan for leading improvement in a defined CHPS catchment, including the boundaries that keep practice safe.",
    ],
    tags: ["community health", "leadership", "chps", "advocacy", "health system"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In Year One, community nursing looked like a list of tasks: weigh the baby, give the vaccine, record the visit. By final year it should look like a map of a community. You are the nurse families consult first, the leader community health nurses and volunteers follow, the voice the chief hears at the durbar, and the node through which the health system touches — or misses — every household in your zone.\n\nThis matters because Ghana's maternal and child outcomes are decided as much outside facilities as inside them. When coverage of antenatal care, skilled birth and postnatal contacts rises, deaths fall — and the person who moves those numbers in a real community is usually a nurse who understood that she was never just a task-doer. This lesson maps that wider role before the rest of the course fills it in.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your leadership runs on five roles at once. As **clinician** you deliver child welfare clinics, support antenatal and postnatal contacts, treat minor ailments and screen — with the discipline of recognising what belongs above your level. As **public health leader** you carry health beyond the clinic door: talks at churches, mosques and schools, durbars, market-day outreach, local radio in the community's own language, campaigns for immunisation, nutrition and bed nets. As **mentor** you orient students, supervise community health nurses and volunteers, and orient traditional birth attendants into referral. As **data-user** you read your registers like a dashboard — coverage, defaulters and deaths reviewed monthly and turned into outreach plans. As **advocate** you speak for transport solutions, maternity waiting homes, girls' education and respectful care to those who hold the purse and the power.\n\nLeadership in this setting is mostly **influence, not authority**. Nobody promotes you into the chief's trust — you earn it by visiting, listening and delivering. Build relationships with the chief and elders, the queen mother, assembly members, teachers, market women and faith leaders, because these are the hands that move the barriers families face. Boundaries matter as much as ambition: extend your reach through others rather than practising beyond your scope, know the escalation line for clinical, ethical and supply problems, and keep your own learning alive — a nurse who stops learning stops leading.",
      },
      {
        type: "table",
        title: "The five rooms of your practice",
        body: "| Room | What happens there | Your monthly rhythm |\n|---|---|---|\n| The clinic | Clinical care: CWC, ANC and PNC support, screening, minor ailments | Review the registers and the month's coverage |\n| The community | Outreach: markets, durbars, churches, mosques, radio, house-to-house | At least one contact beyond the clinic gate |\n| The mentors | Orienting students, CHNs, volunteers and TBAs | One structured teaching or review session |\n| The managers | Data and the district: registers, monthly returns, feedback | Submit, verify, and act on what the numbers show |\n| The palace | Leadership and advocacy: chief, elders, assembly member | One courtesy visit or joint engagement |",
      },
      {
        type: "clinical_pearl",
        body: "In the community, your clinic is one room of your practice. The market, the chapel, the FM station and the chief's palace are the other rooms — a leader who only opens the first door reaches only the patients who were coming anyway.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are posted to a CHPS zone whose register shows good antenatal attendance but only 40 per cent of expected births happening at a facility. The district supervisory visit is in three weeks.\n\nWhat will you do before the visit?\n\nAnswer: Turn data into a map. Review the registers with the community health nurses first: which settlements, which women and which months account for the missing births, generating a defaulter list by name. Then move through the community's other rooms: meet the chief and elders with the numbers, ask market women and TBAs where the home births happen and why, and listen for the barriers — transport, cost, a scolding nurse, tradition. Launch the fixes within your power: market-day outreach, a transport plan with the assembly member, evening clinic hours, respectful-care commitments from every staff member, and radio announcements in the local language. By the supervisory visit you present not a problem but a plan with numbers attached.",
      },
      {
        type: "memory_trick",
        body: "Your leadership is a five-room house: the CLINIC, the COMMUNITY, the MENTORS, the MANAGERS (data and district), and the PALACE (leaders and advocacy). Work all five rooms every month, and the house stands.",
      },
      {
        type: "summary",
        body: "- The community health leader holds five roles at once: clinician, public health leader, mentor, data-user, advocate.\n- Coverage moves when ANC, skilled birth and PNC reach real communities — and the nurse is the mover.\n- Influence beats authority: elders, faith leaders, teachers, market women and TBAs move the barriers families face.\n- Registers are your dashboard: review coverage and defaulters monthly and turn gaps into outreach plans.\n- Extend reach through others, never beyond your scope — and keep learning to keep leading.",
      },
    ],
    questions: [
      {
        topic: "The Community Health Leader",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does it mean to call the community health nurse a 'health system node'?",
        options: [
          "She links families to facilities, community data to district action, and informal helpers to the formal system",
          "She must refer every client to the regional hospital",
          "She works only inside the CHPS compound and its compound garden",
          "She replaces the district health management team in planning",
        ],
        correctIndex: 0,
        explanation:
          "A node is a connecting point: the community nurse connects families to skilled care, community data to district decisions, and volunteers and TBAs to the formal system. The system touches the community largely through her.",
        courseSlug: "community-leadership",
      },
      {
        topic: "The Community Health Leader",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your registers show good antenatal coverage but falling postnatal attendance. Which response fits the community health leader's role best?",
        options: [
          "Wait for the district supervisory visit to raise the problem",
          "Conclude that mothers in this community are simply not interested",
          "Trace defaulters by name, ask women and TBAs why attendance fell, then redesign postnatal contacts — market-day or home visits at the right hours",
          "Increase the number of health talks given inside the clinic only",
        ],
        correctIndex: 2,
        explanation:
          "The leader turns data into inquiry and inquiry into redesign: trace the defaulters, listen for the barriers, then move the service to where mothers actually are. Waiting, blaming or more of the same changes nothing.",
        courseSlug: "community-leadership",
      },
      {
        topic: "The Community Health Leader",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is influence, rather than formal authority, the working currency of community health leadership?",
        options: [
          "Because chiefs outrank nurses in the civil service order of precedence",
          "Because the barriers families face — transport, permission, tradition, cost — are moved by people the nurse cannot command, only persuade and partner with",
          "Because formal authority is illegal for nurses at CHPS level",
          "Because influence removes the need for supervision and protocols",
        ],
        correctIndex: 1,
        explanation:
          "You cannot order an assembly member to fund transport or a chief to bless a durbar. Community outcomes move when trusted relationships move — which is why the leader invests in the palace, the market and the mosque as much as the clinic.",
        courseSlug: "community-leadership",
      },
      {
        topic: "The Community Health Leader",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which activity sits outside the community nurse's appropriate scope, however experienced she is at CHPS level?",
        options: [
          "Inserting contraceptive implants after training per national family planning guidelines",
          "Performing caesarean sections at the CHPS compound when transport fails",
          "Providing syndromic management of vaginal discharge per national protocol",
          "Providing first-line emergency care and referral for severe pre-eclampsia",
        ],
        correctIndex: 1,
        explanation:
          "Surgery belongs to facilities with theatre, anaesthesia and blood. Implants, syndromic STI care and first-response pre-eclampsia care all sit within trained nursing scope under national guidance — the boundary is clinical, not personal.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Community Leadership",
        front: "The five rooms of the community health leader?",
        back: "Clinic (clinical care), community (outreach and education), mentors (students, CHNs, volunteers, TBAs), managers (data and district), and the palace (leaders and advocacy). Open all five doors monthly.",
      },
      {
        topic: "Community Leadership",
        front: "What makes the community nurse a 'system node'?",
        back: "She links families to facilities, community data to district action, and informal helpers — volunteers and TBAs — to the formal system.",
      },
      {
        topic: "Community Leadership",
        front: "How should a coverage gap in your registers be answered?",
        back: "Name it, map it, ask the community why, and redesign the service — market days, evening hours, transport plans. Data is the beginning of outreach, not its end.",
      },
      {
        topic: "Community Leadership",
        front: "Why does influence beat authority in the community?",
        back: "The barriers to health — transport, cost, permission, tradition — are controlled by people the nurse cannot command: chiefs, elders, assembly members, families. Partnership moves what orders cannot.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
      },
      {
        organization: "Ghana Health Service",
        title: "Community-based Health Planning and Services (CHPS): Policy and Implementation Guidelines",
        note: "National CHPS policy documents — verify current edition with the Ghana Health Service.",
      },
      {
        organization: "World Health Organization",
        title: "Nurses and midwives: key facts",
        url: "https://www.who.int/news-room/fact-sheets/detail/nurses",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Leading Community Care",
    lessonTitle: "Managing an Outbreak as a Leader",
    description:
      "When an outbreak moves through your community, the nurse at the CHPS compound becomes the eye of the whole health system. Learn the detection-to-declaration arc — and how to lead it.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe the stages of outbreak management — detect, report, verify, respond, evaluate — using Ghana's Integrated Disease Surveillance and Response (IDSR) framework.",
      "Explain the nurse's leadership role at each stage: case definitions, line lists, coordination with the district, community engagement and staff protection.",
      "Apply outbreak leadership to a realistic scenario, such as cholera after flooding, prioritising what is done in the first hours and days.",
    ],
    tags: ["outbreak", "surveillance", "idsr", "cholera", "emergency response"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You have drilled emergencies one patient at a time — the eclamptic fit, the collapsed newborn. An outbreak is an emergency with a denominator. When strange diarrhoea appears in three settlements in one week, or a rash-and-fever sweeps a school, the health system's first eye is usually you: the nurse at the CHPS compound who notices that today's third unusual case is not coincidence.\n\nGhana runs outbreak response through the **Integrated Disease Surveillance and Response (IDSR)** framework — priority diseases reported immediately, routine surveillance reported weekly, and district rapid response teams that investigate and confirm. Every stage of that machinery starts at your desk, and this lesson walks you through it as the leader on the ground, not a bystander waiting for instructions.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Detect.** Know your case definitions — for example, cholera is suspected in a patient with acute watery diarrhoea, with or without vomiting, in an area at risk or during an outbreak. Single cases you manage; **clusters** you count. Three unusual cases in a week is a signal, not bad luck, and comparing today's numbers with what is normal for your zone is the heart of surveillance.\n\n**Report.** Diseases on the immediately reportable list — cholera, measles, bacterial meningitis, yellow fever, viral haemorrhagic fevers, acute flaccid paralysis and others — go up the same day, on suspicion, by phone to the district disease control focal person. Never wait for laboratory confirmation or the weekly summary: the report that travels today is the response that starts tomorrow. **Verify.** The district rapid response team investigates, takes specimens and confirms — your job is to keep your line list complete and your cases safe while they come. **Respond.** Your leadership at compound level: treat and refer (an ORS corner and rapid rehydration for cholera; urgent referral of the severely dehydrated), isolate and protect (a defined care corner, hand hygiene, gloves, safe disposal, disinfection), protect your staff (supplies, buddy checks, no heroics without protection), and activate the community — safe water messages, household water treatment, handwashing, one clear message through the chief, the assembly member, the radio and the faith structures. **Evaluate.** Your line list becomes the district's map — time, place and person — and the outbreak is controlled when the response, guided by that map, brings cases down and new transmission stops.",
      },
      {
        type: "table",
        title: "The arc of an outbreak — and your move at each stage",
        body: "| Stage | What is happening | Your leadership move |\n|---|---|---|\n| Detect | Unusual cases begin to cluster | Apply case definitions, count honestly, compare with the expected |\n| Report | A notifiable disease is suspected | Phone the district the same day — on suspicion, not confirmation |\n| Verify | District team investigates | Keep the line list complete, cases safe and staff protected |\n| Respond | Control measures launch | Treatment corner, referral, IPC, water and hygiene campaign, community engagement |\n| Evaluate | Cases are tracked to the end | Feed the line list, map cases with the team, keep surveillance running |",
      },
      {
        type: "clinical_pearl",
        body: "Report on suspicion, not confirmation — the laboratory confirms, but the system moves on your report. And a cluster is a message: three unusual cases in a week is the sound of an outbreak clearing its throat.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is the week after heavy flooding. On Monday a young man from the fishing settlement presents with profuse painless watery diarrhoea and vomiting. On Wednesday two more adults from the same settlement arrive, one severely dehydrated. This morning a volunteer tells you a grandmother died at home yesterday 'of running stomach'.\n\nWhat is your first move, and what do you do in the next 24 hours?\n\nAnswer: First the patients — begin rapid rehydration with ORS immediately for those who can drink and IV fluids per protocol for the severely dehydrated, arranging urgent referral while treatment continues, because cholera kills through dehydration and treatment must not wait for the road. Simultaneously make the notification: this cluster of acute watery diarrhoea with a death in a flood-affected settlement is suspected cholera — phone the district disease control focal person today. Start a line list with age, sex, settlement, date of onset and outcome, including the grandmother who died at home. Open your response with what you control: a designated treatment corner with strict hand hygiene and gloves, safe water and household chlorination messages through the settlement's chief and volunteers, an ORS demonstration at the water points, and active case-finding house to house. Prepare for the rapid response team, brief your staff on protection, and keep counting. You are the eye of the system — today you proved it.",
      },
      {
        type: "memory_trick",
        body: "Outbreaks move in D-RIVE: Detect the cluster, Report immediately, Investigate with the district team, Vaccinate or apply the control measures directed, Evaluate with the line list. Miss the R and the whole engine stalls — the report is the accelerator.",
      },
      {
        type: "summary",
        body: "- An outbreak is an emergency with a denominator — surveillance means comparing today's cases with the expected.\n- IDSR: immediately reportable diseases go up the same day, on suspicion; weekly reports carry the routine.\n- The line list (time, place, person) turns scattered cases into the district's response map.\n- At compound level you lead treatment and referral, isolation and IPC, staff protection, and one clear community message through trusted structures.\n- Case management saves the patient; safe water, hygiene and community engagement stop the transmission.",
      },
    ],
    questions: [
      {
        topic: "Managing an Outbreak",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Three adults from the same settlement present with acute watery diarrhoea in one week after flooding. When should you notify the district?",
        options: [
          "After the laboratory confirms cholera",
          "At the weekly surveillance meeting, in the routine summary",
          "The same day, on suspicion, by phone to the district disease control focal person",
          "Only if a fourth case appears",
        ],
        correctIndex: 2,
        explanation:
          "Cholera is an immediately reportable disease under IDSR: suspected clusters are phoned in the same day. Waiting for confirmation, the weekly report or a fourth case delays the response — and the response runs on your report.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Managing an Outbreak",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the purpose of the line list you start during an outbreak?",
        options: [
          "To keep the nurses busy between clinic sessions",
          "To record every case with time, place and person, turning scattered patients into the data the district uses to target the response",
          "To replace the routine clinic registers during the outbreak",
          "To list only the patients who are admitted to hospital",
        ],
        correctIndex: 1,
        explanation:
          "A line list is a living surveillance register: each case with onset date, settlement, age and outcome. From it the team maps where and when transmission is happening, spots the peak, and aims control measures — it is the outbreak's map, not paperwork.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Managing an Outbreak",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "During a suspected cholera outbreak, which community-level measure most directly interrupts transmission?",
        options: [
          "Giving every patient an antibiotic to shorten the illness",
          "Safe water, household water treatment and handwashing promotion across the affected settlements",
          "Closing the CHPS compound to visitors",
          "Waiting for the vaccination team before acting",
        ],
        correctIndex: 1,
        explanation:
          "Cholera travels through water and hands. Case management and antibiotics treat the patient, but transmission is interrupted where it happens — at water points, in households, on hands. Safe water and hygiene promotion is the response the community itself can start today, with you.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Managing an Outbreak",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A severely dehydrated adult from the affected settlement reaches your CHPS compound, and the district hospital is 40 minutes away. What is your first action?",
        options: [
          "Load him into the nearest vehicle immediately for the hospital",
          "Begin rapid rehydration now — ORS for those who can drink, IV fluids per protocol — while arranging urgent referral and calling ahead",
          "Give oral paracetamol and observe while awaiting the rapid response team",
          "Record him on the line list and tell the family to find their own transport",
        ],
        correctIndex: 1,
        explanation:
          "Cholera kills through dehydration, and treatment travels badly: rehydration must begin where the patient is, with referral and a call ahead arranged in parallel. Sending him dry risks a death on the road; the line list can be completed after the drip is running.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Outbreak Response",
        front: "Which diseases are immediately reportable in Ghana's IDSR system — give examples.",
        back: "Cholera, measles, bacterial meningitis, yellow fever, viral haemorrhagic fevers, acute flaccid paralysis and others on the national list — phoned to the district the same day, on suspicion.",
      },
      {
        topic: "Outbreak Response",
        front: "What goes on a line list?",
        back: "Every case with time (date of onset), place (settlement) and person (age, sex, outcome) — the running register that turns patients into the response map.",
      },
      {
        topic: "Outbreak Response",
        front: "What stops cholera transmission at community level?",
        back: "Safe water, household water treatment, handwashing and sanitation — delivered through trusted structures: chief, volunteers, radio, faith gatherings. Treatment saves the patient; water and hygiene stop the next case.",
      },
      {
        topic: "Outbreak Response",
        front: "Outline the D-RIVE arc of outbreak management.",
        back: "Detect the cluster, Report immediately, Investigate with the district team, Vaccinate or apply directed control measures, Evaluate with the line list until cases end.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization Regional Office for Africa",
        title: "Technical Guidelines for Integrated Disease Surveillance and Response in the African Region (3rd edition)",
        year: "2019",
        note: "The IDSR framework Ghana adapts nationally — verify the current edition with WHO AFRO.",
      },
      {
        organization: "Ghana Health Service",
        title: "National Guidelines for Integrated Disease Surveillance and Response",
        note: "Ghana's national adaptation, including the immediately reportable disease list — verify current edition with the GHS.",
      },
      {
        organization: "CDC",
        title: "Principles of Epidemiology in Public Health Practice (3rd edition)",
        year: "2012",
        note: "Self-study course on outbreak investigation, line lists and descriptive epidemiology.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Leading Community Care",
    lessonTitle: "Working With Community Structures",
    description:
      "Chiefs, queen mothers, faith leaders, market women, volunteers and birth attendants — the people who actually move a community. Learn to build partnerships that outlast your posting.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the community structures a nurse works with — traditional leadership, faith and civic structures, volunteers and traditional birth attendants — and what each can move.",
      "Explain the principles of partnership: respect, agreed roles, red lines and shared review without blame.",
      "Apply a partnership plan, including with traditional birth attendants, to a real community problem.",
    ],
    tags: ["community structures", "partnership", "tba", "volunteers", "traditional leadership"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "No nurse changes a community alone. The structures that decide whether a mother delivers at a facility, a child completes immunisation or a fever gets tested often predate your clinic by generations: the chief and elders, the queen mother, the assembly member, the pastors and imams, the teachers, the market women's leaders, the community health volunteers — and the traditional birth attendant who has caught the last three generations of babies.\n\nA nurse who fights these structures exhausts herself. A nurse who works through them multiplies. This lesson is about mapping the structures, engaging them with respect, and building partnerships strong enough to carry programmes — including the most delicate partnership of all, the one with TBAs.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Map the structure before you act: who holds influence over health decisions in this household — the husband, the mother-in-law, the TBA, the pastor? The midnight decision-maker is rarely the woman alone. Engage leadership with respect: visit the chief and elders before launching anything; a durbar blessed by the chief and queen mother carries a legitimacy no poster can buy. Work the faith structures — church and mosque announcements, prayer gatherings — and the civic ones: assembly members for transport and funds, teachers for school health, market women as the fastest information network in town. **Community health volunteers** are your extended hands: defaulter tracing, household visits, pregnancy registration, outbreak case-finding.\n\nThe TBA partnership deserves its own care. Policy shifted decisively away from training TBAs to conduct deliveries — the evidence showed that does not reduce maternal deaths — and toward **integration into skilled care and referral**. Her power is trust: she identifies pregnancies early, walks women to antenatal care, accompanies them to the facility as respected birth companions, carries danger-sign knowledge into homes and calls you at the first warning. Against these agreed roles, set the red lines, agreed together: no oxytocin or labour-speeding herbs at home — rupture and death follow; no attempted delivery of obstruction or breech at home — the call comes at the first suspicion; clean hands and clean cord care. Sustain the partnership with structure: monthly joint reviews without scolding, referral slips she can carry, a phone number that answers, airtime, and public appreciation at durbars. When she calls late, ask why — usually transport, money or fear — and fix the barrier rather than the blame. A scolded TBA stops calling, and the next mother pays the price.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot be at every birth in your zone — but the TBA who trusts you can be. Her 2 a.m. phone call is worth more than a hundred posters on the wall.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 2 a.m. your phone rings: Mama Adjoa, the TBA from a farming village, has been with a labouring P3 since evening. The contractions are strong, she says, but the baby is not coming, and now the mother is too tired to push well. She has given no herbs, and the woman's sister has a motorbike.\n\nWhat do you say and do — tonight, and next month?\n\nAnswer: Praise the call — you have done the right thing, bring her now. Ask the essentials quickly: hours since labour began, fetal movement, bleeding, liquor; and tell her what to bring — the woman, her notes if any, warm clothes and the family's money. Meet them at the health centre and assess: strong contractions with no descent in a tired P3 suggests obstruction, so IV access, catheterisation and a call-ahead referral to the district. Next month, at the joint review, discuss the case with thanks and without blame, agree the earlier warning signs that should trigger her call, and ask what made the evening pass before the phone rang. Whatever she answers — transport fear, the family's hope, her own pride — becomes the system's next fix. Every call she makes after this one will come earlier, because tonight ended with respect.",
      },
      {
        type: "memory_trick",
        body: "Partnership is a ROPE: Roles agreed, Outreach together, Protection red lines (no oxytocin, no obstructed deliveries at home), Escalation by phone at the first warning. Hold the ROPE together and mothers climb to safety.",
      },
      {
        type: "summary",
        body: "- Map who really decides health in each household — the midnight decision-maker is rarely the woman alone.\n- Engage traditional, faith and civic leadership before launching anything; a blessed durbar beats a printed poster.\n- Community health volunteers are your extended hands: tracing, registering, case-finding.\n- TBAs: integrated into skilled care and referral, never trained to deliver alone — her trust, your skills.\n- Red lines agreed together, reviews without blame, a phone that answers, public appreciation — that is what sustains a partnership.",
      },
    ],
    questions: [
      {
        topic: "Community Structures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why did Ghanaian and global policy move away from training TBAs to conduct deliveries, toward integrating them into referral networks?",
        options: [
          "Because TBAs refused all training offered",
          "Because evidence showed TBA delivery training alone did not reduce maternal deaths, while skilled attendance did — and TBAs add most value linked to the system",
          "Because skilled birth attendants are cheaper to train",
          "Because traditional birth attendance was made illegal in Ghana",
        ],
        correctIndex: 1,
        explanation:
          "The shift was outcome-based: mortality fell with skilled attendance, not with delivery training for TBAs — while TBAs proved genuinely valuable for antenatal uptake, companionship, referral and postnatal support when integrated.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Community Structures",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A TBA calls you at 2 a.m. about a labouring woman she has supported since evening. Which response strengthens the partnership?",
        options: [
          "Ask why she waited so long, when she knows the danger",
          "Tell her the mother should push harder and call in the morning",
          "Tell her she has done the right thing calling — bring her now — with immediate assessment and referral arranged",
          "Ignore the call; it is not your facility's problem",
        ],
        correctIndex: 2,
        explanation:
          "The first job of every TBA interaction is to make the next call come earlier: praise the call, arrange the care, and fix the reason for any delay without blame. Scolding, dismissal and delay all cost the next mother her life.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Community Structures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice is an absolute red line in TBA partnership, whatever the tradition?",
        options: [
          "Giving oxytocin or labour-speeding herbs at home to hasten birth",
          "Accompanying a woman to the facility as a birth companion",
          "Promoting early antenatal registration among her clients",
          "Reporting home births to the nurse for the register",
        ],
        correctIndex: 0,
        explanation:
          "Uterotonics at home against a possibly obstructed labour cause rupture and death — a bright line no tradition crosses. Companionship, ANC promotion and reporting are exactly the roles the partnership is built on.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Community Structures",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are posted to a community you have never worked in and plan an immunisation catch-up drive. What is your best first move?",
        options: [
          "Print the posters and fix the dates first",
          "Pay a courtesy visit to the chief, elders and queen mother, explain the plan, and ask for their blessing and a durbar",
          "Announce the dates on the radio in English",
          "Begin house-to-house vaccination immediately to show seriousness",
        ],
        correctIndex: 1,
        explanation:
          "Traditional leadership holds the community's legitimacy: the courtesy visit secures the blessing, the durbar and the volunteers. Posters, English radio and unannounced visits reach only the already-convinced — and skipping the palace can read as disrespect that quietly undermines the whole drive.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Community Structures",
        front: "Name the red lines of TBA partnership.",
        back: "No oxytocin or labour-speeding herbs at home; no attempted delivery of obstruction or breech at home — call at first suspicion; clean hands and clean cord care with chlorhexidine per national policy.",
      },
      {
        topic: "Community Structures",
        front: "What sustains a TBA partnership over years?",
        back: "Respect and structure: joint blame-free reviews, referral slips, a phone that answers, airtime, and public appreciation at durbars — plus fixing the barrier behind every late call.",
      },
      {
        topic: "Community Structures",
        front: "Before launching any community programme, whose door do you open first?",
        back: "The chief, elders and queen mother — traditional blessing buys legitimacy, the durbar crowd and the volunteers. Then faith and civic structures, then the households.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization, ICM, FIGO",
        title: "Making pregnancy safer: the critical role of the skilled attendant (joint statement)",
        year: "2004",
      },
      {
        organization: "Cochrane Library (Wiley)",
        title: "Traditional birth attendant training for improving health behaviours and pregnancy outcomes (Cochrane Review CD005460)",
        year: "2012",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Population-Level Maternal & Child Health",
    lessonTitle: "Maternal Health as a Population Challenge",
    description:
      "One mother's death is a tragedy; a nation's maternal mortality is a pattern. This lesson lifts your eyes from the bedside to the population — the causes, the numbers and the levers that actually move them.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the scale and main causes of maternal mortality globally and in Ghana, including the three delays that shape each death.",
      "Explain the population levers — skilled birth attendance, emergency obstetric and newborn care, family planning, and antenatal and postnatal coverage.",
      "Apply levels of prevention thinking to a maternal health problem in a defined catchment area.",
    ],
    tags: ["maternal health", "maternal mortality", "three delays", "population health", "prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A death from haemorrhage at the bedside is an emergency; the same death counted across a district is information. When you aggregate the deaths, patterns appear: who dies (women in the prime of life, disproportionately the poorest and most remote), when (pregnancy, birth and the first days after), and why (haemorrhage, hypertensive disorders, infection, unsafe abortion and obstructed labour — most of them preventable with care that already exists).\n\nRecent United Nations estimates still place Ghana's maternal mortality ratio in the hundreds per 100,000 live births — a mother dying for every few thousand births, against single figures in high-income countries. Behind each number is a household that loses its organiser, and children who are far more likely to die in the years that follow. This lesson teaches you to see those deaths not as fate but as a pattern — and patterns can be broken.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The classic lens is the **three delays**. Delay 1 — deciding to seek care: danger signs not recognised, the woman not the decision-maker, cost and fear of scolding. Delay 2 — reaching care: distance, roads, rivers, transport and money. Delay 3 — receiving adequate care once arrived: staff, skills, supplies, blood, theatre. Review almost any maternal death and you will find one or more of the three hiding in the story.\n\nThen the levers. **Skilled birth attendance** with **emergency obstetric and newborn care** at the right levels (basic functions at the health centre, comprehensive care with surgery and blood at the district) attacks delays 1 and 3 at once. **Family planning** is the quiet giant: spacing and limiting pregnancies directly reduces deaths — fewer high-risk grand multipara pregnancies, fewer unsafe abortions — and satisfying unmet need is among the most cost-effective maternal health interventions known. **Antenatal care** that screens (blood pressure, anaemia, urine), prepares (birth plan, danger signs) and connects (referral pathway) is secondary prevention at its best, and **postnatal contacts** in the first 48 hours and first week catch the period when most maternal and newborn deaths cluster. Around it all run the **levels of prevention**: primary (family planning, nutrition, iron and malaria prevention in pregnancy, education), secondary (screening, early recognition, referral) and tertiary (quality emergency care and rehabilitation) — and the population lens that asks which sub-groups carry the risk: adolescents, grand multiparas, remote settlements, the previously bereaved.",
      },
      {
        type: "table",
        title: "The three delays and what moves them",
        body: "| Delay | What it looks like | What moves it |\n|---|---|---|\n| 1 — Deciding to seek care | Danger signs unrecognised at home; the woman is not the decision-maker; fear of cost or scolding | Health education, danger-sign knowledge, birth preparedness, community structures |\n| 2 — Reaching care | Distance, poor roads, no transport, no money at night | Transport plans, community emergency funds, maternity waiting homes, CHPS outreach |\n| 3 — Receiving care | Missing staff, skills, supplies, blood or theatre at the facility | Functional BEmONC/CEmONC, staffing, supplies, referral with communication, audit |",
      },
      {
        type: "clinical_pearl",
        body: "Every maternal death audit finds a delay hiding in it. Find yours before the audit does — the same delays walk through your community every day in miniature.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 37-year-old G8 mother from a remote village delivered at home with a TBA. Bleeding began an hour after birth and did not stop. The TBA could not help; the family had no transport until dawn; the woman reached the district hospital in irreversible shock, and there was no blood ready. She died the same morning.\n\nMap the delays — and name the population levers that could have intercepted her.\n\nAnswer: All three delays are present. Delay 1: heavy bleeding after birth was not treated at home as an emergency — nobody had taught the family and TBA the danger sign. Delay 2: no transport plan and no money at night kept her in the village for hours. Delay 3: blood was not ready on arrival — no crossmatch, no communication ahead. The levers fit the delays: community danger-sign education through TBAs and volunteers; a birth-preparedness package for grand multiparas (transport agreement, savings scheme, chosen facility); a maternity waiting home for her final weeks; early referral with a call ahead so blood is grouped and ready. Any one lever might have saved her; the population approach installs them all — before the next woman exists.",
      },
      {
        type: "memory_trick",
        body: "Mothers die in threes: DELAYED in deciding, DELAYED on the road, DELAYED at the door. Every lever you hold — education, transport plans, waiting homes, a stocked and communicating unit — attacks one of the three.",
      },
      {
        type: "summary",
        body: "- Maternal deaths cluster by who, when and why — and the causes are mostly preventable with existing care.\n- The three delays: deciding to seek care, reaching care, receiving adequate care — find them in every death story.\n- Levers: skilled attendance with BEmONC/CEmONC, family planning, screening antenatal care, early postnatal contacts.\n- Family planning is the quiet giant — spacing and limiting pregnancies prevents high-risk births and unsafe abortion.\n- Levels of prevention turn the population lens into action: primary, secondary, tertiary — aimed at the sub-groups carrying the risk.",
      },
    ],
    questions: [
      {
        topic: "Maternal Health as Population",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with severe postpartum bleeding dies because the family did not recognise the bleeding as an emergency and no transport was available until morning. Which delays shaped this death?",
        options: [
          "Delays 1 and 2 — deciding to seek care, and reaching care",
          "Delays 2 and 3 only",
          "Delay 3 only",
          "None — the death was unavoidable",
        ],
        correctIndex: 0,
        explanation:
          "Unrecognised danger signs at home are the first delay; the transport gap that kept her in the village overnight is the second. The third delay — what happened after arrival — never got the chance to matter, which is exactly why the first two levers matter so much.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Maternal Health as Population",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is family planning described as one of the most powerful maternal health interventions?",
        options: [
          "It replaces the need for emergency obstetric care",
          "Spacing and limiting pregnancies reduces exposure to high-risk pregnancies and prevents unsafe abortions — directly lowering maternal deaths",
          "It guarantees that every pregnancy reaches a facility birth",
          "It only improves child health, not maternal health",
        ],
        correctIndex: 1,
        explanation:
          "Fewer and better-spaced pregnancies mean fewer births to grand multiparas, adolescents and women with exhausted reserves — and far fewer unsafe abortions, a leading killer. It complements, never replaces, emergency obstetric care.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Maternal Health as Population",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which intervention most directly attacks the second delay for women from remote villages?",
        options: [
          "A maternity waiting home near the district hospital for the final weeks of pregnancy",
          "More posters about danger signs at the market",
          "Weekly radio discussions in English",
          "Increasing the number of antenatal contacts at the health centre",
        ],
        correctIndex: 0,
        explanation:
          "The waiting home moves the woman herself closer to care before labour begins — the distance is bridged in advance rather than fought in the emergency. Education and contacts matter, but they act on other delays.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Maternal Health as Population",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Screening every antenatal woman for pre-eclampsia with blood pressure and urine testing is an example of which level of prevention?",
        options: [
          "Primary prevention",
          "Secondary prevention",
          "Tertiary prevention",
          "Not prevention at all",
        ],
        correctIndex: 1,
        explanation:
          "Screening to detect disease early, before it kills, is secondary prevention. Primary prevention would stop the disease arising (nutrition, family planning); tertiary is limiting damage after severe illness.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Maternal Health as Population",
        front: "Name the three delays of maternal mortality.",
        back: "Delay 1 — deciding to seek care; Delay 2 — reaching care (distance, transport, money); Delay 3 — receiving adequate care once arrived (staff, skills, supplies, blood, theatre).",
      },
      {
        topic: "Maternal Health as Population",
        front: "The main direct causes of maternal death?",
        back: "Haemorrhage, hypertensive disorders (pre-eclampsia and eclampsia), infection, unsafe abortion and obstructed labour — most preventable with timely, skilled care.",
      },
      {
        topic: "Maternal Health as Population",
        front: "Why is family planning a maternal health lever?",
        back: "Spacing and limiting pregnancies reduces the number of high-risk pregnancies and prevents unsafe abortions — a direct, measurable cut in maternal deaths.",
      },
      {
        topic: "Maternal Health as Population",
        front: "Which sub-groups carry the highest maternal risk?",
        back: "Adolescents, grand multiparas, women from remote settlements, women with previous complications or bereavement — the population lens always asks who carries the risk.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Maternal mortality fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality",
      },
      {
        organization: "WHO, UNICEF, UNFPA, World Bank Group and UN Population Division",
        title: "Trends in Maternal Mortality 2000 to 2020",
        year: "2023",
      },
      {
        organization: "World Health Organization",
        title: "Beyond the numbers: reviewing maternal deaths and complications to make pregnancy safer",
        year: "2004",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Population-Level Maternal & Child Health",
    lessonTitle: "Child Survival Interventions",
    description:
      "The interventions that keep children alive are known, cheap and mostly nurse-delivered — vaccines, breast milk, bed nets, ORS and zinc. This lesson assembles the toolkit you will deliver at the welfare clinic.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the major causes of under-five and newborn death and the evidence-based interventions that address them.",
      "Explain how Ghana's delivery platforms — EPI, child welfare clinics, IMCI and growth monitoring — carry the package to every community.",
      "Apply the child survival package to a family's first thousand days, including danger-sign teaching and defaulter follow-up.",
    ],
    tags: ["child survival", "immunization", "nutrition", "imci", "newborn"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A child born in Ghana today is far likelier to see her fifth birthday than a child born a generation ago — but newborns still die at rates above the global targets, and the killers of the older child have not retired: pneumonia, diarrhoea, malaria, and malnutrition quietly underlying too many of them.\n\nThe interventions that changed the curve are not glamorous. Vaccines, breast milk, a treated bed net, a sachet of ORS, zinc, vitamin A, a weighing scale, clean water and a pair of trained hands. Almost every one of them is delivered by a nurse — which makes the child welfare clinic the single most powerful child-survival platform Ghana runs, and you its operator. This lesson assembles the package and shows how each piece reaches a real child.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Causes first, by age. The **newborn period** — preterm complications, birth asphyxia and sepsis — is where the remaining deaths concentrate, targeted by the Every Newborn Action Plan: clean and skilled birth, warmth, early and exclusive breastfeeding, resuscitation, cord care with chlorhexidine per national policy, and danger-sign recognition in the first week. From six weeks to five years: **pneumonia, diarrhoeal disease and malaria**, riding on **undernutrition**, which underlies a large share of under-five deaths by global estimates. Then the package: **immunisation** on the national EPI schedule (BCG, oral polio, pentavalent, pneumococcal, rotavirus, measles-rubella and other antigens — the schedule and its defaulters are your monthly obsession); **exclusive breastfeeding for six months** and continued breastfeeding to two years with adequate complementary feeding; **growth monitoring and promotion** at the welfare clinic, with the weight-for-age chart as your early-warning system; **long-lasting insecticide nets** for every under-five and pregnant woman; **malaria testing of every fever** and treatment per national guideline; **ORS plus zinc and continued feeding** for diarrhoea; **IMCI** at every sick-child contact — ask the danger signs, look and count, classify, treat, then teach the mother before she leaves; **vitamin A** supplementation from six months and deworming per schedule; and **WASH** — handwashing, safe water, sanitation — as the quiet foundation under all of it.\n\nYour leadership makes the platform deliver: trace defaulters by name with volunteers, guard the cold chain and its temperature log, mobilise the community through durbars and radio, and keep the registers honest enough to reveal the children the system is missing.",
      },
      {
        type: "table",
        title: "The child survival package by age",
        body: "| Age | The threats | The package |\n|---|---|---|\n| Newborn (0–28 days) | Preterm complications, asphyxia, sepsis | Skilled clean birth, warmth, early breastfeeding, resuscitation, cord care, danger-sign teaching |\n| 0–6 months | Newborn illness, feeding failure | Exclusive breastfeeding, postnatal contacts, danger-sign knowledge |\n| 6–59 months | Pneumonia, diarrhoea, malaria, malnutrition | Immunisation on schedule, nets, IMCI, ORS + zinc, growth monitoring, vitamin A, complementary feeding |",
      },
      {
        type: "clinical_pearl",
        body: "The welfare clinic is not a weighing ritual — it is a screening system. Every weighing is a triage: the child whose weight flat-lines has an illness, a feeding problem or a household crisis, and finding out which is your job.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At the child welfare clinic an eighteen-month-old's weight has flat-lined for two months. Her mother delivered a new baby three months ago; the toddler now eats watery porridge twice a day and a cup of cow's milk, and the mother admits she 'has no time to feed her small small'.\n\nWhat is your assessment and plan?\n\nAnswer: First rule out illness: any danger sign, fever, cough or pallor needs IMCI assessment, malaria testing and anaemia check before anything else. Then treat the feeding: counsel the mother (and ideally the grandmother, who often holds the kitchen) on energy-dense complementary foods given more often, continued breastfeeding, and feeding the toddler first at family meals before she fills up on porridge. Set a follow-up weight in two weeks — faltering that persists despite good feeding needs referral for severe acute malnutrition assessment and treatment per protocol. Involve the father or an aunt as the designated feeder when the mother is occupied with the newborn. The flat line is a signal, not a stain on the mother: the plan you build together is the intervention.",
      },
      {
        type: "memory_trick",
        body: "The child survives on B-I-T-E-S: Breastfeeding exclusive for six months, Immunisation on schedule, Treated bed nets, Extra fluids — ORS and zinc — for diarrhoea, Screening for danger signs and growth every contact.",
      },
      {
        type: "summary",
        body: "- Newborn deaths concentrate in the first week: warmth, feeding, clean care and danger-sign recognition are the newborn package.\n- After the newborn period: pneumonia, diarrhoea, malaria on a base of undernutrition — IMCI is the working framework at every sick child.\n- The nurse-delivered package: EPI vaccines, exclusive breastfeeding, growth monitoring, LLINs, tested-and-treated malaria, ORS + zinc, vitamin A, WASH.\n- The welfare clinic is a screening system: a flat-lining weight is a triage, not a ritual.\n- Leadership completes delivery: defaulter tracing by name, cold-chain discipline, community mobilisation, honest registers.",
      },
    ],
    questions: [
      {
        topic: "Child Survival",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which of the following is an IMCI general danger sign meaning the child must not be sent home?",
        options: [
          "A temperature of 37.4 °C",
          "The child is unable to drink or breastfeed",
          "A single loose stool yesterday",
          "Mild cough without fast breathing",
        ],
        correctIndex: 1,
        explanation:
          "Unable to drink or breastfeed is a general danger sign — like vomiting everything, convulsions, lethargy or unconsciousness — signalling severe illness and urgent assessment. The other findings alone would place the child in less severe classifications.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Child Survival",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "An eighteen-month-old has acute watery diarrhoea with no danger signs and is drinking eagerly. What is the correct management?",
        options: [
          "ORS, zinc for the stated course, continued feeding — and teach the mother the danger signs before discharge",
          "An antibiotic course to shorten the illness",
          "Stop feeds and milk for 24 hours to rest the gut",
          "An antidiarrhoeal mixture so the stools stop quickly",
        ],
        correctIndex: 0,
        explanation:
          "Plan A of diarrhoea management: more fluids, continued feeding, zinc — plus teaching. Antibiotics are not for uncomplicated watery diarrhoea, stopping feeds worsens nutrition, and antidiarrhoeals are unsafe in children.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Child Survival",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What does a flat weight line on a growth chart over two visits mean?",
        options: [
          "The child is simply petite, like the mother",
          "The weighing was done after a meal, so the chart is wrong",
          "Growth faltering — illness, a feeding problem or a household crisis — needing assessment and a feeding plan now",
          "Normal until the line actually falls below the chart",
        ],
        correctIndex: 2,
        explanation:
          "A flat line means zero weight gain over time — growth faltering. Waiting for the line to fall before acting is waiting for malnutrition to declare itself; the chart exists precisely so you act at the plateau.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Child Survival",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The vaccine refrigerator at your clinic lost power overnight. What is the correct response before this morning's session?",
        options: [
          "Use the vaccines first and watch for reactions",
          "Check the temperature record and vaccine status with the cold chain focal person before using any dose — vaccines of uncertain potency are not given",
          "Shake the boxes and discard only the ones that look discoloured",
          "Move the vaccines to the staff room fridge and continue as normal",
        ],
        correctIndex: 1,
        explanation:
          "Potency is invisible: a heat-stressed vaccine looks identical to a good one. The discipline is to record the event, keep the vaccines in the affected fridge with the door shut, and let the cold chain officer assess before any dose is used — an under-powered vaccine is a silent programme failure.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Child Survival",
        front: "Name the IMCI general danger signs.",
        back: "Unable to drink or breastfeed, vomits everything, convulsions, and lethargy or unconsciousness — any one means severe illness and urgent action, never 'go home and observe'.",
      },
      {
        topic: "Child Survival",
        front: "What is Plan A for a child with diarrhoea and no dehydration?",
        back: "More fluids (ORS after every loose stool), continued feeding and breastfeeding, zinc for the stated course — and danger-sign teaching for the mother before discharge.",
      },
      {
        topic: "Child Survival",
        front: "Why does exclusive breastfeeding for six months save lives?",
        back: "It protects against diarrhoea and pneumonia — two top killers — through immunity and clean feeding, and it supports growth when complementary foods would be contaminated and nutritionally weak.",
      },
      {
        topic: "Child Survival",
        front: "What does growth monitoring actually monitor?",
        back: "The trend, not the single weight: a flat or falling line against the child's own curve is the early warning of illness, feeding failure or household crisis — caught while it is still fixable.",
      },
    ],
    sources: [
      {
        organization: "WHO, UNICEF",
        title: "Every Newborn: An Action Plan to End Preventable Deaths",
        year: "2014",
      },
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "Ghana Health Service",
        title: "Expanded Programme on Immunisation: National Immunisation Schedule",
        note: "Verify the current national schedule with the Ghana Health Service.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Population-Level Maternal & Child Health",
    lessonTitle: "Linking Hospital & Home",
    description:
      "Care breaks at the seams — between ward and compound, hospital and CHPS, facility and family. Learn the continuity tools that keep the story connected: booklets that travel, warm handovers, feedback loops.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe what continuity of care means across home, health centre and hospital settings — and where it usually breaks.",
      "Explain the working tools: woman-held records, referral with a warm handover, discharge feedback to the community nurse and scheduled follow-up.",
      "Apply a continuity plan for a family discharged from a district hospital back to a village.",
    ],
    tags: ["continuity", "referral", "discharge", "postnatal", "chps"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A pregnancy is a nine-month story, and illness is a journey across settings: the village, the CHPS compound, the district hospital, sometimes the regional centre — and back home again. The system's most dangerous moments are its handover points. The referral that arrives without notes. The discharge nobody tells the community nurse about. The mother lost between two facilities, each assuming the other is following her.\n\nThe community nurse is the seam-sewer of the whole fabric: the professional who knows the family before the admission and after the discharge. This lesson gives you the tools — most of them stunningly cheap — that keep care connected from her village to the theatre and back.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The record that travels.** The woman-held maternity booklet is the cheapest continuity device in Ghana. Read it before you ask questions — her scars, her rhesus status, her past haemorrhage are written in it — and never send a woman anywhere without it. A referral arriving booklet-less is a decision made blind.\n\n**The warm handover.** A referral is a relay, not a launch. Phone the receiving unit and tell the story — situation, background, assessment, recommendation — then send the written note with times, findings and treatments. A call ahead means the receiving team prepares instead of discovering. **The feedback loop.** The relay runs both ways: after discharge, the hospital sends a summary back to the CHPS compound — ideally a call to the named community nurse — so the professional who knows the family picks up the thread, visiting at home within the first days for the postnatal and newborn checks. **The named nurse.** Every family should be able to say who to call; a named nurse beats a hotline number. **Follow-through on follow-up.** Schedule the next contact before the family leaves your hands, review the defaulters by name monthly with your volunteers, and let the community structures help find the ones who moved. Continuity is not a document — it is a chain of professionals, each holding a link and never letting the previous one go cold.",
      },
      {
        type: "table",
        title: "Where continuity breaks — and the tool that mends it",
        body: "| Break point | What goes wrong | The mending tool |\n|---|---|---|\n| Home to clinic | Danger signs unrecognised, delay in seeking | Danger-sign teaching, birth-preparedness plan |\n| Clinic to hospital | Referral arrives with no story | Warm phone handover + written referral note + booklet |\n| Hospital to home | Discharge vanishes into thin air | Discharge summary + call to the named community nurse |\n| Home after discharge | No follow-up, defaulters silent | Scheduled contacts, home visits, defaulter tracing by name |",
      },
      {
        type: "clinical_pearl",
        body: "Never send a woman anywhere without her booklet, and never receive one without reading it. The record that travels is the nurse who stays.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A grand multipara books at her CHPS compound with Ama, the community nurse, who flags her previous postpartum haemorrhage in the booklet. At 38 weeks she moves into the district hospital's maternity waiting home; Ama phones the ward sister with her history and the booklet travels with her. After a hard but well-managed birth, the hospital discharges her on day two with a written summary and a call to Ama, who visits at home on day 3 and again on day 6 — checking for bleeding, breastfeeding, blood pressure and the newborn's danger signs.\n\nWhich practice in this story most protects the mother after discharge, and why?\n\nAnswer: The feedback loop — the discharge summary plus the call back to Ama. The nurse who flagged the haemorrhage risk in the first place resumes postnatal care knowing exactly what happened, which drugs were given and which danger signs to watch, so nothing is repeated and nothing is missed. Without it, the waiting home and the warm handover would still have protected the birth — and the mother would have gone home to a system that forgot her. The woman is received, not handed over and forgotten.",
      },
      {
        type: "memory_trick",
        body: "Continuity is a THREAD: The same nurse, Her record travels, Referral with a call, Every handover warm, And the story returns after discharge — Don't disappear at birth.",
      },
      {
        type: "summary",
        body: "- Continuity means a known nurse or small team across pregnancy, birth and the postnatal period, across settings — relational, not architectural.\n- The booklet that travels with the woman is the cheapest continuity device in Ghana; read it before you ask, send it before she goes.\n- Referrals are relays: phone the story ahead, send the written note, and close the loop with the discharge summary and call back.\n- The named community nurse is the safest receiver of every discharge; the first home visit happens in days, not 'soon'.\n- Follow-up only works if defaulters are traced by name — with volunteers and community structures helping.",
      },
    ],
    questions: [
      {
        topic: "Linking Hospital & Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman arrives at your district hospital from a far CHPS compound without her maternity booklet. What is the greatest danger?",
        options: [
          "She will be angry with the referring nurse",
          "Her history — previous caesarean, rhesus status, past haemorrhage — is invisible, so decisions are made blind",
          "The ward will need to charge her for a new booklet",
          "The hospital cannot admit her without a booklet by law",
        ],
        correctIndex: 1,
        explanation:
          "Without the travelling record, the receiving team cannot know her scars, her rhesus status, her past haemorrhage or her treatments. No law blocks admission — but clinical blindness is the real and dangerous cost.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Linking Hospital & Home",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What makes a referral handover 'warm'?",
        options: [
          "A kind word written at the bottom of the referral slip",
          "Sending the patient in an air-conditioned vehicle",
          "Phoning the receiving unit with the full story before she leaves, and sending the written note and booklet with her",
          "Asking the family to explain the history on arrival",
        ],
        correctIndex: 2,
        explanation:
          "A warm handover transfers the story, not just the patient: the phone call lets the receiving team prepare, the note and booklet carry the facts, and nothing depends on a frightened family's memory.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Linking Hospital & Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother is discharged on day three after a caesarean at the district hospital. What should happen at community level?",
        options: [
          "Nothing — the hospital has completed the care",
          "The CHPS nurse receives the discharge summary (ideally with a call), and conducts the scheduled postnatal and newborn checks, with the first home visit within days",
          "The mother is expected to walk to the regional hospital for follow-up",
          "A volunteer collects her booklet for filing",
        ],
        correctIndex: 1,
        explanation:
          "Discharge is a transfer, not an ending: the community nurse — who knows the family — resumes care with the summary in hand, visiting early for wound, bleeding, breastfeeding and newborn checks. The loop closed is the system working.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Linking Hospital & Home",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which statement best defines continuity of care?",
        options: [
          "Booking every visit in the same hospital building",
          "A known nurse or small team caring for the woman across pregnancy, birth and the postnatal period, wherever the care happens",
          "Referring every woman to the regional centre at booking",
          "Seeing a different specialist at each contact for fresh eyes",
        ],
        correctIndex: 1,
        explanation:
          "Continuity is relational, not architectural: the same known team over time and across settings. Buildings and referral policies cannot supply the trust and accumulated knowledge a known nurse carries.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Linking Hospital & Home",
        front: "Spell the continuity THREAD.",
        back: "The same nurse, Her record travels, Referral with a call, Every handover warm, And the story returns after discharge — Don't disappear at birth.",
      },
      {
        topic: "Linking Hospital & Home",
        front: "What is the feedback loop?",
        back: "After discharge, the hospital returns the story to the community: a written summary plus a call to the named community nurse, who then conducts the early postnatal and newborn home visits.",
      },
      {
        topic: "Linking Hospital & Home",
        front: "Why is a booklet-less referral dangerous?",
        back: "The receiving team decides blind: scars, rhesus status, past haemorrhage and treatments are all invisible. The booklet carries the story that protects her.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Health Service",
        title: "National Reproductive Health Service Policy and Standards",
        note: "National policy document — verify current edition with the Ghana Health Service.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Improving Community Care",
    lessonTitle: "Health Information & Reporting",
    description:
      "Registers, tally sheets and monthly returns are not bureaucracy — they are the mirror in which your community's health appears. Learn to keep the mirror honest and read what it shows.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe community data sources — registers, tally sheets, monthly returns — and the indicators they feed, including DHIMS II reporting.",
      "Explain data quality: completeness, timeliness, consistency with the registers, and the discipline of the denominator.",
      "Apply audit thinking — including death and near-miss review — to turn numbers into action for your catchment.",
    ],
    tags: ["health information", "dhims", "registers", "indicators", "audit"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every line in your antenatal register is a woman who walked to you; every missing line is a woman who did not. Data in community nursing is not distant statistics — it is the community's story told in numbers, and you are one of its authors and its only honest reader at village level.\n\nThis lesson builds your data literacy: where the numbers come from, which ones matter for mothers and children, how counts become rates, and how audit converts yesterday's tragedy into tomorrow's protocol.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The sources you already know: antenatal, delivery, postnatal, family planning and child welfare registers, referral slips and death records; from them, tally sheets and monthly returns feed the district system — in Ghana, the **District Health Information Management System (DHIMS II)**, through which the district sees every facility and the region sees every district. The indicators that matter include antenatal contact coverage, the proportion of births happening at facilities, immunisation coverage, stillbirth and early neonatal death rates, referral completion and defaulter rates.\n\nAlways the discipline of the **denominator**: 30 births in your register means little until divided by the expected births in your catchment — 30 out of an expected 200 is a crisis; 30 out of 32 is a triumph. Good data is complete, timely, consistent with the registers and verified before submission; one careful hour a month buys your community a truthful mirror, and a truthful mirror is what the system allocates by — supplies, supervision and staffing follow the facilities the data can see. The second half of counting is **audit**. A maternal or perinatal death review asks, confidentially and without blame: what happened, why, and what will we change? A near-miss review asks the same of a woman who survived — often the richer lesson, because she can tell the story the register cannot. Then act: a settlement missing from the register triggers outreach, a rising adolescent pregnancy number triggers a school programme, a stock-out pattern triggers a supply escalation. Share the numbers back with the community and the team — data displayed openly becomes the community's own project rather than the nurse's private guilt.",
      },
      {
        type: "table",
        title: "From register to action",
        body: "| Indicator you can count | What it reveals | The action it triggers |\n|---|---|---|\n| Facility births ÷ expected births | True coverage of skilled birth | Map the missing settlements; outreach and transport fixes |\n| Defaulters on CWC/ANC lists | Children and women drifting out of care | Trace by name with volunteers |\n| Referrals completed vs sent | Whether the referral chain actually works | Fix transport, communication or receiving-end gaps |\n| Stillbirths and early neonatal deaths | The quality of intrapartum and newborn care | Confidential audit; feed the district review |",
      },
      {
        type: "clinical_pearl",
        body: "Read the gaps, not just the lines. Your register tells two stories at once — who came, and who never did — and the second story is where your outreach lives.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your monthly review shows 30 facility births, one fresh stillbirth, four referrals, and 40 per cent coverage when you divide by the expected births from your catchment estimate. The district meeting asks for your interpretation and plan.\n\nWhat do you tell them?\n\nAnswer: Start with the denominator: 40 per cent coverage means roughly three in five expected births happened outside the facility — that is the headline, and it defines the outreach plan: map the missing settlements, engage the TBAs and chiefs, and fix transport. Next, audit the stillbirth: review the record honestly — the partograph, the referral timing, the resuscitation — identify what the system can improve, and feed it to the district review without blame. Then follow the four referrals to their outcomes, because a referral that ends in silence is the system failing quietly. Close with numbers as a plan: monthly coverage tracking, defaulter tracing by name, and the specific communities targeted next. Data presented as action attracts resources; data presented as a confession attracts only sympathy.",
      },
      {
        type: "memory_trick",
        body: "Counting that matters is C-A-P: Complete the registers, Audit the outcomes (deaths and near-misses), Plan the response. Numbers without the third letter are just noise.",
      },
      {
        type: "summary",
        body: "- Sources: ANC, delivery, PNC, FP and CWC registers, referral slips and death records, feeding tally sheets and monthly returns into DHIMS II.\n- Key indicators: coverage of ANC and facility birth, immunisation coverage, stillbirth and early neonatal death rates, referral completion, defaulters.\n- Denominators turn counts into truth: 30 births out of 200 expected is failure; out of 32 is near-complete coverage.\n- Data quality — complete, timely, consistent, verified — is what makes the facility visible to the system that resources it.\n- Audit converts tragedy into protocol: confidential, blame-free, action-focused; near-misses teach what deaths cannot say.",
      },
    ],
    questions: [
      {
        topic: "Health Information",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your register shows 30 facility births. What is needed before this number can be interpreted?",
        options: [
          "The estimated number of expected births in the catchment — the denominator",
          "The number of staff on duty that month",
          "The gestational ages of the newborns",
          "The quantity of drugs used in the same period",
        ],
        correctIndex: 0,
        explanation:
          "Counts become meaning only as rates: dividing births attended by expected births gives coverage. Without the denominator, 30 could be triumph or tragedy.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Health Information",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core purpose of a confidential maternal or perinatal death review at community and district level?",
        options: [
          "To identify and discipline the staff member responsible for the death",
          "To compile statistics for the national annual report alone",
          "To learn what happened and why, and change what the system does next time — without blame",
          "To decide whether the family should be compensated",
        ],
        correctIndex: 2,
        explanation:
          "Audit is a learning instrument: confidential, blame-free inquiry ending in a change of practice. Fear of punishment is exactly what reviews are designed to remove — because fear hides the truth that saves the next mother.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Health Information",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your coverage rose for three months, then falls this month. What is the soundest response?",
        options: [
          "Announce a staff reprimand for the falling number",
          "Check data quality first — completeness and timeliness — then look for real causes before acting",
          "Conclude the outreach programme failed and cancel it",
          "Assume the denominator changed and resubmit a higher figure",
        ],
        correctIndex: 1,
        explanation:
          "A single month's dip may be incomplete records, a delayed tally, or a real fall. Verify data quality, then investigate true causes — a season of travel, a transport break — before choosing action. Never adjust figures to fit hope.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Health Information",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is your monthly data submission a patient-safety activity rather than paperwork?",
        options: [
          "Complete, timely data determines the facility's visibility for supplies, supervision and planning — resources that save lives",
          "It replaces the need for clinical supervision",
          "It guarantees promotion for the reporting nurse",
          "It exists to punish facilities with poor results",
        ],
        correctIndex: 0,
        explanation:
          "The system allocates by what it can see: registers and returns drive drug supply, staffing, supervision and outreach planning. A unit that reports well is a unit the district can see — and resourcing follows sight.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Health Information",
        front: "Why does the denominator matter so much in community data?",
        back: "Counts say what happened; rates say how much of the story it covers. 30 births against 200 expected is failure; against 32 is near-complete coverage.",
      },
      {
        topic: "Health Information",
        front: "What makes a monthly data submission good quality?",
        back: "Complete, timely, consistent with the registers, and verified before submission — a truthful mirror, not a flattering one.",
      },
      {
        topic: "Health Information",
        front: "What does a near-miss review offer that a death review cannot?",
        back: "The survivor's own account of the delays, decisions and barriers — living testimony of where the system nearly failed, and how to fix it.",
      },
      {
        topic: "Health Information",
        front: "What is C-A-P counting?",
        back: "Complete the registers, Audit the outcomes (deaths and near-misses), Plan the response — numbers without the plan are just noise.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Beyond the numbers: reviewing maternal deaths and complications to make pregnancy safer",
        year: "2004",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS II) — reporting guidelines",
        note: "National health information reporting platform — verify current guidance with the GHS.",
      },
      {
        organization: "World Health Organization",
        title: "Making Every Baby Count: Audit and Review of Stillbirths and Neonatal Deaths",
        year: "2016",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "community-leadership",
    moduleTitle: "Improving Community Care",
    lessonTitle: "Programme Planning & Evaluation",
    description:
      "From 'this village has a problem' to 'this programme worked' — the planning cycle, the PDSA test and the evaluation that measures behaviour, not applause.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe the programme planning cycle: assess needs, set objectives, plan, implement, evaluate, then replan.",
      "Explain the message and channel rules for community programmes, and PDSA for testing change small before spreading it.",
      "Apply a small programme plan — with indicators counted before and after — to a real community problem.",
    ],
    tags: ["programme planning", "evaluation", "pdsa", "health promotion", "community"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Teaching one mother changes one life; a programme changes a community. Somewhere in your career you will be asked to plan one — an immunisation catch-up, an early-booking drive for antenatal care, a nutrition demonstration, an exclusive-breastfeeding campaign. The skills are different from bedside teaching, and they have bones.\n\nA programme is planned action with a measurement at the end. Without the measurement it is just activity — busy, well-meant, and impossible to defend at the district meeting when the budget question comes. This lesson gives you the cycle, the message rules and the small-test habit that separate programmes that move behaviour from programmes that move chairs.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Assess first.** What does the community believe? Who decides? Which day is market day, and which language does the radio speak? A programme built on wrong assumptions is just noise. **Set objectives you can count.** Not 'improve ANC uptake' but 'raise first-trimester bookings in Zone 3 from 12 to 25 per month within six months' — specific, measurable, agreed with the team. **Carry one message at a time**, short and actionable, in the local language, pre-tested on a handful of mothers: 'Book your antenatal care before the pregnancy shows' beats a lecture covering fifteen topics. **Choose channels people trust**: durbars blessed by the chief and queen mother, local FM radio, market-day talks, mothers' clubs at weighing points, announcements at church and mosque, house-to-house visits by volunteers — and TBAs and elders as allies, never rivals.\n\n**Implement with structure** — who does what, when, with what supplies and which transport. **Evaluate behaviour, not applause**: count bookings, facility deliveries and net use before and after; attendance at a durbar is reach, not change. When the change itself needs testing, run **PDSA**: plan a small trial, do it on one station or one settlement, study the numbers, act on what worked before spreading it — small tests survive politics; grand launches die in them. Then **replan**: the cycle turns again with what you learned, and the results — good or bad — go back to the community and the district, so the programme belongs to them, not to your monthly report.",
      },
      {
        type: "table",
        title: "The programme wheel — six stations",
        body: "| Station | The question it answers | What it looks like done well |\n|---|---|---|\n| Assess | What is really happening, and why? | Talks with women, leaders, TBAs; register review; barrier list |\n| Objectives | What will change, by how much, by when? | One countable target agreed with the team |\n| Plan | Who does what, through which channels? | Named roles, dates, supplies, transport, one pre-tested message |\n| Implement | Is it happening as planned? | Structured delivery; problems logged, not hidden |\n| Evaluate | Did behaviour actually move? | Indicators counted before and after — bookings, deliveries, net use |\n| Replan | What does the next turn of the wheel carry? | Lessons fed to the community and the district; the cycle turns |",
      },
      {
        type: "clinical_pearl",
        body: "If the market woman cannot repeat your message to her neighbour at dusk, the message is not finished. Simplify it until she can.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The nurse in charge of a CHPS compound notes that most women in her zone deliver at home with a traditional birth attendant. She plans a programme: a durbar introduced by the chief, two radio spots in the local language, a market-day demonstration, and a meeting where the TBAs are given gloves, a phone and the referral number. Before launching she counts: 34 per cent of expected births happen at the facility. Three months later the figure is 55 per cent, and the TBAs have brought two referred mothers in early labour.\n\nWhy were the TBAs made allies instead of being warned against home birth — and what should the evaluation measure next?\n\nAnswer: The TBAs attend most of the deliveries and hold the community's trust. As partners they carry the message into homes the nurse will never reach, refer early, and call when trouble starts; warned against, they become rivals who hide women — and they are the ones present at midnight when the haemorrhage begins. Next, the evaluation should follow behaviour, not applause: track facility-birth and early-booking counts settlement by settlement, trace any defaulters, and interview the women who still delivered at home — their reasons, not the committee's assumptions, write the next turn of the wheel. The durbar crowd was reach; the coverage line was change.",
      },
      {
        type: "memory_trick",
        body: "Campaigns climb the five Ls: Listen first, one Lesson, Local language, Leaders before the crowd, Look at the numbers at the end. Miss the last L and you will never know whether the first four worked.",
      },
      {
        type: "summary",
        body: "- Assess before you plan: beliefs, barriers, decision-makers and trusted channels.\n- Objectives must be countable — a target with a number and a deadline the team owns.\n- One short, pre-tested, local-language message per programme; trusted channels beat printed ones.\n- Evaluate behaviour change — bookings, deliveries, net use — counted before and after; attendance is only reach.\n- Test changes small with PDSA before spreading; feed results back to community and district and turn the wheel again.",
      },
    ],
    questions: [
      {
        topic: "Programme Planning",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A community health programme should begin with which step?",
        options: [
          "Ordering banners and T-shirts carrying the health message",
          "Assessing the community's beliefs, barriers and trusted channels",
          "Inviting the district chief executive to launch the programme",
          "Scheduling a series of radio spots in English",
        ],
        correctIndex: 1,
        explanation:
          "Listening comes first. Until you know what the community believes, who decides, and which channels carry trust, any message is a guess aimed at the wrong target. Materials, dignitaries and broadcasts come later, built on that assessment.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Programme Planning",
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
        courseSlug: "community-leadership",
      },
      {
        topic: "Programme Planning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Three months after a programme, the team reports huge durbar attendance. What is the better measure of success?",
        options: [
          "Number of T-shirts and leaflets distributed",
          "Attendance and applause at community durbars",
          "Changes in behaviour — such as antenatal bookings and facility deliveries — counted before and after",
          "The number of speeches given by dignitaries",
        ],
        correctIndex: 2,
        explanation:
          "Attendance, leaflets and speeches measure reach — whether the message arrived. The programme exists to move behaviour, so the indicators that matter are bookings, deliveries, net use and similar counts taken before and after.",
        courseSlug: "community-leadership",
      },
      {
        topic: "Programme Planning",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You want to improve completion of child welfare clinic cards at your facility. What is the PDSA way to test your idea of a pre-stocked 'CWC pack' (card, pen, tally sheet)?",
        options: [
          "Announce a new facility-wide policy at the morning meeting, effective today",
          "Trial the pack at one weighing station for two weeks, study the completion numbers, then act on what worked before spreading",
          "Write a proposal to the region and wait for approval",
          "Discipline the staff whose stations have poor completion",
        ],
        correctIndex: 1,
        explanation:
          "PDSA is the small test: plan the change, do it on a small scale, study the numbers, act on what worked — then spread. Grand launches and proposals delay learning; discipline turns a system problem into a blame problem.",
        courseSlug: "community-leadership",
      },
    ],
    flashcards: [
      {
        topic: "Programme Planning",
        front: "What are the five Ls of planning a community programme?",
        back: "Listen, one Lesson, Local language, Leaders first, Look at the numbers — assess, carry one message, speak her language, involve leaders, then evaluate behaviour.",
      },
      {
        topic: "Programme Planning",
        front: "What does a good programme objective look like?",
        back: "Countable and time-bound: 'Raise first-trimester bookings in Zone 3 from 12 to 25 per month within six months' — a target the team owns and the evaluation can test.",
      },
      {
        topic: "Programme Planning",
        front: "Reach versus behaviour — what is the difference?",
        back: "Reach means the message arrived (durbar attendance, leaflets); behaviour means practice changed (bookings, facility deliveries, net use). Programmes are judged on behaviour.",
      },
      {
        topic: "Programme Planning",
        front: "What does PDSA stand for and what scale does it work at?",
        back: "Plan, Do, Study, Act — a small test of change (one station, one settlement, two weeks) whose numbers decide whether you spread it.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Health Education: Theoretical Concepts, Effective Strategies and Core Competencies",
        year: "2012",
      },
      {
        organization: "Institute for Healthcare Improvement",
        title: "Science of Improvement: How to Improve",
        url: "https://www.ihi.org/resources/Pages/HowtoImprove/default.aspx",
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
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "Advanced Maternal Assessment",
    description:
      "The senior nurse's sharpest instrument is a systematic assessment that spots deterioration before it announces itself. Learn advanced maternal assessment — history, focused examination, warning scores and the escalation they trigger.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe a structured advanced maternal assessment across pregnancy, birth and the postnatal period.",
      "Explain early warning scores (MEOWS-style), the parameters they watch and the triggers that demand urgent review.",
      "Apply assessment findings to escalation decisions alongside the midwife and medical team, with documentation that defends the care.",
    ],
    tags: ["maternal assessment", "meows", "deterioration", "escalation", "postnatal"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "In maternal care you work alongside midwives and doctors — but you are often the professional closest to the woman for the longest hours. The one who notices the pulse creeping from 88 to 104, the urine output quietly falling, the lochia that is 'still heavy' on day two, the patient who 'just doesn't look right' to you and nobody else yet.\n\nThat noticing is not intuition — it is the output of a systematic assessment performed repeatedly and honestly. The senior nurse's assessment is the surveillance system of the whole unit: the midwife manages the birth, the doctor directs treatment, but the picture they act on is largely the one you assemble. This lesson sharpens that instrument.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Structure every assessment the same way, so nothing is forgotten when the ward is loud. **History first**: the risk factors that reframe everything — previous postpartum haemorrhage or caesarean, pre-eclampsia, co-morbidities (sickle cell disease, diabetes, heart disease, epilepsy), medications (never stopped or swapped on nursing authority), anaemia, and this pregnancy's course so far. **Baseline then focused examination**: temperature, pulse, respiratory rate, blood pressure, oxygen saturation, urine output and pain — then the targeted survey: bleeding (weigh the pads, never eyeball), fundus, lochia and perineum postnatally; legs for warmth and tenderness; breasts; wound; fetal movement and wellbeing in pregnancy; mood and the quiet voice asking no questions.\n\nThen make the numbers speak. **Early warning scores** (MEOWS-style charts) assign each observation a colour; one red or two amber parameters — respiratory rate 30 or more, systolic 160 or above or 90 or below, pulse 120 or more, temperature 38 or above or under 36, saturations below 95 per cent, urine output under 100 mL in four hours, or severe pain — trigger urgent senior review. Always use your facility's chart and thresholds. **Trend reading** is the senior skill: snapshots lie, trends testify — a pulse of 104 that was 88 an hour ago is louder than any single number on the page. **Then act**: escalate with SBAR — situation, background, assessment, recommendation — call the midwife or medical team early, document times and findings, and reassess after every intervention to confirm it worked. And remember where the danger lives: most maternal deaths cluster around birth and the first days after, so postnatal observations are not a courtesy visit — they are the surveillance.",
      },
      {
        type: "table",
        title: "MEOWS-style triggers for urgent senior review",
        body: "| Parameter | Typical trigger zone (use your facility's chart) |\n|---|---|\n| Respiratory rate | 30 or more per minute (or a sustained rise from her baseline) |\n| Blood pressure | Systolic 160 or above, or 90 or below; diastolic 110 or above |\n| Pulse | 120 or more, or a rising trend |\n| Temperature | 38 °C or above, or below 36 °C |\n| Oxygen saturation | Below 95 per cent |\n| Urine output | Under 100 mL in 4 hours (or none after 4 hours catheterised) |\n| The rule | One red — or any two amber — parameters: call for urgent review now |",
      },
      {
        type: "clinical_pearl",
        body: "On the maternity unit, trends matter more than snapshots — a pulse of 104 that was 88 an hour ago is louder than any single number on the chart. And 'she doesn't look right to me' is a clinical sign: write it down and escalate it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Day two after an emergency caesarean. At 8 a.m. the observations were pulse 96, temperature 37.4, sats 97. On your 4 p.m. round she says she is 'fine, just tired' — but the pulse is 112, temperature 37.9, sats 96, urine output 90 mL over the last four hours, the lochia is moderate with an odour, and she has not wanted to feed the baby.\n\nWhat is happening, and what do you do?\n\nAnswer: Read the trend, not the reassurance. A rising pulse and temperature with falling urine output and offensive lochia in a post-caesarean mother is postnatal sepsis until proven otherwise — and the parameters already meet early-warning triggers for urgent review. Escalate now with SBAR: situation (day-two post-caesarean with rising obs), background (emergency caesarean, any risk factors), assessment (possible sepsis), recommendation (urgent review, sepsis pathway per protocol). While waiting: hourly observations, fluid balance chart, encourage fluids if she can drink, weigh the pads, and keep the baby with her if she is stable enough. Document every value with times — your chart is the evidence the team acts on and the record that defends the care.",
      },
      {
        type: "memory_trick",
        body: "Assess like a senior: HEAD to toe, EYES on the trend, WARNING scores honoured, ESCALATE with SBAR, REASSESS after every act. And weigh the pads — eyeballs are terrible at measuring blood.",
      },
      {
        type: "summary",
        body: "- The senior nurse's assessment is the unit's surveillance system — the team acts on the picture you assemble.\n- Structure: history and risk factors, baseline plus focused examination, then scoring and trend reading.\n- MEOWS-style rules: one red or two amber parameters means urgent senior review — use your facility's chart and act on it.\n- Trends outrank snapshots: compare every observation with the last one before you reassure anyone.\n- Escalate with SBAR, document times and findings, and reassess after each intervention — postnatal observations are surveillance, not courtesy.",
      },
    ],
    questions: [
      {
        topic: "Advanced Maternal Assessment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On a MEOWS-style early warning chart, escalation to urgent senior review is typically triggered by…",
        options: [
          "Any single amber parameter alone",
          "Three green parameters in a row",
          "One red parameter, or any combination of two amber parameters",
          "A complaint from the patient about noise",
        ],
        correctIndex: 2,
        explanation:
          "The standard rule: a single red observation, or any combination of two ambers, prompts urgent senior review. Waiting for more evidence is how deterioration hides in plain sight on the chart.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Advanced Maternal Assessment",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "Day two after caesarean, a mother's pulse has risen from 96 to 112, temperature from 37.4 to 37.9 °C, and urine output is 90 mL in four hours, with offensive lochia. She says she feels 'fine, just tired'. What is the correct reading and action?",
        options: [
          "Normal post-caesarean fatigue — continue routine four-hourly observations",
          "Mild anaemia only — request a haemoglobin check in the morning",
          "Possible postnatal sepsis with early-warning triggers met — urgent senior review with SBAR now, hourly observations and fluid balance while waiting",
          "Pain-related changes — give analgesia and reassess in two hours",
        ],
        correctIndex: 2,
        explanation:
          "Rising pulse and temperature with falling urine output and offensive lochia is sepsis until proven otherwise — the trends together cross review thresholds, and 'feeling fine' is common in early deterioration. Fatigue, anaemia and pain do not explain the full picture, and waiting is how postnatal sepsis wins.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Advanced Maternal Assessment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why should postnatal blood loss be measured by weighing pads rather than estimating by eye?",
        options: [
          "Because families complain less when pads are weighed",
          "Because visual estimation systematically underestimates loss, and the woman with the least reserve bleeds the most dangerously",
          "Because the DHIMS form requires weights",
          "Because it shortens the stay",
        ],
        correctIndex: 1,
        explanation:
          "Eyeballing blood loss famously underestimates it — a soaked pad holds far more than it looks. Quantified loss catches the slow haemorrhage while it is still slow, which matters most in the anaemic woman with no reserve.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Advanced Maternal Assessment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "Two mothers have the same pulse of 104. Mother A has been 100–104 since the morning; Mother B was 88 at 8 a.m. and is 104 now. Whose finding is more concerning, and why?",
        options: [
          "Mother A — a pulse above 100 is always abnormal",
          "Mother B — the rising trend signals a changing physiology while the stable value may be her baseline",
          "They are identical findings requiring identical action",
          "Neither — pulse alone never triggers review",
        ],
        correctIndex: 1,
        explanation:
          "Trends outrank snapshots: a stable 104 may be that woman's normal under fever or pain, but a climb from 88 to 104 means something is changing — and the change is what you investigate, alongside the other observations.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Advanced Maternal Assessment",
        front: "What are the four letters of SBAR?",
        back: "Situation, Background, Assessment, Recommendation — the escalation structure that makes your call fast and complete.",
      },
      {
        topic: "Advanced Maternal Assessment",
        front: "The MEOWS-style escalation rule?",
        back: "One red or any two amber parameters triggers urgent senior review — typical triggers include RR 30+, systolic 160+ or 90 or below, pulse 120+, temp 38+ or under 36, sats under 95 per cent, urine under 100 mL in 4 hours.",
      },
      {
        topic: "Advanced Maternal Assessment",
        front: "Why do trends matter more than snapshots in maternal observations?",
        back: "A single value may be her baseline; the direction of travel tells you physiology is changing. The pulse climbing from 88 to 104 is the finding that demands attention.",
      },
      {
        topic: "Advanced Maternal Assessment",
        front: "How do you quantify postnatal blood loss?",
        back: "Weigh the pads and record the weight — visual estimation underestimates loss, and the slow haemorrhage you can measure is the one you can catch.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
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
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "Complex Pregnancies: Case Studies",
    description:
      "The real final-semester cases stack problems: anaemia plus grand multiparity plus rising blood pressure. Work three complex cases the senior way — map the interactions, rank by speed of harm, prepare, escalate.",
    difficulty: "Clinical Reasoning",
    durationMin: 12,
    objectives: [
      "Describe how combined risk factors multiply rather than add, and why two moderate risks can equal one emergency.",
      "Explain the prioritisation-by-speed-of-harm approach and the preparation it demands before the emergency exists.",
      "Apply senior-nurse reasoning to three complex case studies spanning pregnancy, birth and the postnatal period, alongside the midwife and medical team.",
    ],
    tags: ["complex cases", "prioritisation", "risk", "clinical reasoning", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Textbooks teach one disease at a time; the ward combines them freely. The final-semester cases that test everything are not single problems — they are the mother who is a grand multipara with anaemia, a previous haemorrhage and a blood pressure creeping upward, all at once. Each problem changes what the others mean.\n\nThe core insight of this lesson is one sentence: **risks multiply, they do not add.** A 500 mL bleed in a woman with a haemoglobin of 7 is not a 500 mL event. Your role as the senior nurse is to see the compound picture, keep the observations honest, prepare what the emergency will need before it needs it, and escalate early — the midwife and medical team can only manage what the surveillance reveals.",
      },
      {
        type: "quiz_prompt",
        title: "Check yourself",
        body: "Cover the answer: a mother at term with a haemoglobin of 7 g/dL begins bleeding heavily after birth. Why is the same 500 mL loss far more dangerous for her than for a woman with Hb 12?\n\nAnswer: She has no physiological reserve left to absorb it — a loss the well-blooded woman tolerates tips her into shock. That is multiplication, not addition.",
      },
      {
        type: "text",
        title: "Case One — the stacking mother",
        body: "A G7P6 mother at term presents in early labour. She has delivered six babies; her haemoglobin today is 7.5 g/dL; her blood pressure is 150/100 with trace protein; her last baby was followed by a severe postpartum haemorrhage. She waited at home through two days of contractions because 'the last births were easy'.\n\nMap the interactions: grand multiparity plus previous haemorrhage predicts another haemorrhage; her anaemia leaves almost no tolerance for one; a pressure of 150/100 with protein at term is pre-eclampsia needing urgent assessment. Rank by speed of harm — haemorrhage kills in minutes, eclampsia threatens in minutes to hours — and prepare accordingly: two wide-bore IV lines, blood grouped and crossmatched, uterotonics and theatre readiness, magnesium sulphate per protocol with seizure precautions, the obstetric team called early, and a written contingency plan the whole team can read. Counsel the woman and her family before the emergency about what may be needed — panic at 3 a.m. is mostly unshared plans. This is not a birth to await at a facility without blood.",
      },
      {
        type: "text",
        title: "Cases Two and Three — the co-morbid mother",
        body: "**Case Two: the teenager with sickle cell disease.** A 19-year-old books at your unit at 14 weeks, taking folic acid, asking whether she should stop 'all these medicines' now that she is pregnant. Her haemoglobin is 8.6. The trap is 'protecting the baby': stopping chronic medication unilaterally is never the answer — an uncontrolled disease harms mother and fetus far more than well-chosen treatment. The plan is the 3 Cs: **Continue** specialist-agreed medicines, **Co-manage** with haematology and obstetrics (more frequent blood pressure and urine checks, serial growth monitoring — growth restriction is a signature risk), and **Coordinate** the birth at a hospital with blood and specialist cover. Teach her the danger signs that must bring her in at once: fever, severe pain, breathlessness, reduced fetal movement.\n\n**Case Three: the mother with rheumatic heart disease.** She delivered an hour ago and now lies flat, breathless, with a rising pulse. Pregnancy and birth are a cardiac marathon — the fluid shifts of the first hours and days after delivery return blood to the circulation and can tip a failing heart into failure. Your nursing moves: sit her upright, oxygen per prescription, strict fluid balance chart, hourly observations with early-warning triggers honoured, and urgent medical review — she should have birthed where cardiology and critical care exist, and the postnatal hours are exactly when the compensation runs out. For every co-morbid mother, your vigilance plus coordination decides the outcome more than any single drug.",
      },
      {
        type: "clinical_pearl",
        body: "When problems stack, risk multiplies, not adds — two moderate risks can quietly make one emergency. Rank by speed of killing: bleeding first (minutes), then the brain — eclampsia (minutes to hours) — then the slower killers such as sepsis (hours to days).",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the senior nurse when the G7P6 mother of Case One arrives at your health centre in early labour — 45 minutes from the district hospital, with magnesium, theatre and blood there. What are your first moves, and in what order?\n\nAnswer: Prepare in parallel, not in sequence. Assess quickly — observations, abdominal and fetal check, urine protein — while someone secures two wide-bore IV lines and sends blood for grouping and crossmatch, since her stacked risks predict a haemorrhage she cannot tolerate. Alert the district labour ward with an SBAR call ahead; arrange transport and an escort who can manage the road; position the seizure precautions (side-lying, protected, magnesium per your protocol if her assessment demands it — a basic-level function that must not wait for the road); and counsel the woman and her husband about what may be needed, in plain language, now. Write the contingency plan where the whole team can read it. The birth itself belongs to the midwife and obstetric team — your job is to make sure she arrives at it alive and prepared, with the picture you assembled in their hands.",
      },
      {
        type: "memory_trick",
        body: "Complex cases run on the 3 Ps and the 3 Cs: map the PILE (how risks interact), rank by SPEED (minutes first, hours second, days third), PREPARE in peacetime — and for the co-morbid mother: Continue medicines, Co-manage, Coordinate the birth place.",
      },
      {
        type: "summary",
        body: "- Combined risks multiply: stacked moderate risks can equal one emergency — map the interactions before the emergency exists.\n- Rank by speed of harm: haemorrhage first, eclampsia alongside, sepsis next.\n- Preparation: two wide-bore lines, crossmatched blood, uterotonics and theatre readiness, seniors informed, a written shared plan the family understands.\n- Never stop or swap chronic medication on nursing authority — the 3 Cs: continue, co-manage, coordinate.\n- The postnatal hours are the danger zone for cardiac mothers: sit her up, chart the fluids, watch the trend, escalate early.",
      },
    ],
    questions: [
      {
        topic: "Complex Pregnancies",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with a haemoglobin of 7 g/dL bleeds 500 mL after birth. Why is this more dangerous than the same loss in a woman with a haemoglobin of 12 g/dL?",
        options: [
          "Anaemic blood clots less efficiently",
          "She has no physiological reserve left to absorb the loss",
          "Anaemic women contract the uterus poorly",
          "Anaemia causes pain that masks the bleeding",
        ],
        correctIndex: 1,
        explanation:
          "The woman with severe anaemia is already running near her limit; a loss she would have tolerated at Hb 12 tips her into shock at Hb 7. This is risk multiplying, not adding.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Complex Pregnancies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You face simultaneous problems: heavy bleeding, a rising blood pressure with proteinuria, and fever. Which do you treat first?",
        options: [
          "The fever, because sepsis spreads quickly",
          "The blood pressure, to prevent eclampsia",
          "Documenting all findings before acting",
          "The bleeding — haemorrhage kills in minutes and outranks the others",
        ],
        correctIndex: 3,
        explanation:
          "Ranking by speed of harm puts uncontrolled haemorrhage first: death from bleeding is measured in minutes. The others are treated alongside, not instead — and documentation follows resuscitation.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Complex Pregnancies",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "For a grand multipara with previous postpartum haemorrhage and a haemoglobin of 7.5 g/dL at term, preparation before delivery should include…",
        options: [
          "Grouping and crossmatching blood before delivery",
          "Waiting to see how the third stage goes",
          "Planning delivery at home with a skilled attendant",
          "Oral iron as the only anaemia measure until delivery",
        ],
        correctIndex: 0,
        explanation:
          "Her stacked risks predict a haemorrhage she cannot tolerate; blood grouped and crossmatched in advance, two IV lines and uterotonics ready are what turn that emergency into a survivable one.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Complex Pregnancies",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A 19-year-old with sickle cell disease at 14 weeks asks whether to stop her folic acid 'because it might harm the baby'. Her haemoglobin is 8.6. What is the correct senior-nurse response?",
        options: [
          "Stop all medicines immediately — nothing is safe in pregnancy",
          "Continue the specialist-agreed treatment, arrange joint haematology–obstetric co-management, and plan tighter surveillance and the birth place with the team",
          "Halve the dose and review at 28 weeks",
          "Tell her sickle cell disease is not a pregnancy risk",
        ],
        correctIndex: 1,
        explanation:
          "The untreated disease is the greater danger — the rule is never to stop or adjust chronic medication on your own authority. Continue, co-manage and coordinate: the 3 Cs, with growth monitoring and danger-sign teaching built in.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Complex Pregnancies",
        front: "Why do stacked risks multiply rather than add?",
        back: "Each factor shrinks the buffer the others rely on — anaemia leaves no tolerance for the haemorrhage that grand multiparity predicts. Two moderate risks can quietly make one emergency.",
      },
      {
        topic: "Complex Pregnancies",
        front: "How do you rank simultaneous emergencies?",
        back: "By speed of harm: haemorrhage first (minutes), eclampsia next (minutes to hours), then sepsis (hours to days) — treat in parallel, but the fastest killer gets the first hands.",
      },
      {
        topic: "Complex Pregnancies",
        front: "What are the 3 Cs for the co-morbid mother?",
        back: "Continue specialist-agreed medicines, Co-manage her care with the specialists, Coordinate the birth at the right level of facility.",
      },
      {
        topic: "Complex Pregnancies",
        front: "Why are the first postnatal hours the danger zone for the mother with heart disease?",
        back: "The fluid shifts after birth return blood to the circulation and can push a failing heart into acute failure — sit her up, chart fluids strictly, watch the trend, escalate early.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors (2nd edition)",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National guideline — verify current edition with the Ministry of Health, Ghana.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "Supporting Bereaved Families",
    description:
      "When the worst happens — bereavement care done with honesty and tenderness. How to walk with a family through the darkest ward, and come out whole yourself.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe respectful immediate care after stillbirth or neonatal death — honest language, memory making and physical care of the mother.",
      "Explain the follow-up bereaved families need, including grief patterns that signal depression and the thresholds for referral.",
      "Apply self-care and team debriefing so that loss does not quietly hollow out the nurse.",
    ],
    tags: ["bereavement", "stillbirth", "grief", "memory making", "debriefing"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The baby dies. However experienced you become, you will never be ready — and you do not need to be. The family does not need eloquence; it needs honesty, unhurried kindness, and the courage to let them be parents to a baby who has died. The care you give in that room will be remembered, word for word, for decades.\n\nThis lesson covers the immediate care, the weeks that follow, and the quiet part nobody teaches: looking after yourself, because grief lands on nurses too.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Begin with plain, honest words: 'I am so sorry — your baby has died.' Euphemisms ('passed away', 'we lost him') blur what has happened and stall grief. Then give time, unhurried. Offer the parents the chance to see, hold, wash and dress their baby, take photographs, keep a lock of hair, give a name — a memory box, if your unit has one. **Offer, never force**: those who choose to hold their baby usually come to treasure it; those who decline must not be judged. Involve their faith — pastor, imam, elder — and ask about naming and burial customs rather than assuming. Care for the mother's body too: her milk will come in and cause pain — a firm bra, cold packs, and expressing only small amounts for comfort, with a doctor's review if engorgement is severe.\n\nIn the following weeks, grief comes in **waves, not stages** — good days that crash without warning, anniversaries and due dates that ambush. Review her at six weeks with space to talk, and refer if insomnia, guilt or numbness persist or deepen, because bereaved mothers carry a high risk of depression. Discuss the next pregnancy kindly: early booking, folic acid, and a plan for a supported pregnancy. Every death feeds the unit's no-blame review so the next mother is safer. And after the room is cleared, gather the team for a debrief. You are not weak for crying; you are human — and the nurse who metabolises her own grief is the one still standing for the next family.",
      },
      {
        type: "clinical_pearl",
        body: "Offer, don't force — 'Would you like to hold her?' honours both answers. And when the family asks why, never invent a cause: 'we will look carefully' beats a false explanation, and the review may protect the next baby.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A mother delivers a stillborn baby girl at 38 weeks — no warning signs during pregnancy. The father is silent and angry; the mother keeps asking what she did wrong. An aunt wants the baby taken away immediately so the mother 'forgets'.\n\nWhat do your next hours look like, and what will you say?\n\nAnswer: Give the news in plain words and stay. Allow time, then offer — not push — to see, hold and dress the baby, with a photograph kept in the notes for her if she declines now. Reassure her gently that this was not her fault, and that the death will be reviewed to learn what can be learned. Support the father's grief as grief, not anger to be managed — his silence is a form of the same storm. Care for her milk and her body, arrange the registration and a follow-up at six weeks, and hold a team debrief. The aunt means kindness — acknowledge it, and let the parents decide. When the mother asks 'what did I do wrong?', the answer is the most clinical sentence you will say all shift: 'Nothing. This was not your fault.'",
      },
      {
        type: "memory_trick",
        body: "Grief is a wave, not a staircase — it returns on due dates and anniversaries. Your care is the sandbag wall: honest words, offered memories, a six-week door left open, and a debrief for the staff who stood in the water too.",
      },
      {
        type: "summary",
        body: "- Use honest words: 'I am so sorry — your baby has died.' Unhurried time, no euphemisms, no 'at least'.\n- Offer memory making: seeing, holding, washing, dressing, photographs, a name. Offer, never force.\n- Care for her body: firm bra, cold packs, express only small amounts for comfort; doctor's review if severe.\n- Follow up at six weeks; refer if grief deepens into depression; plan the next pregnancy kindly — early booking, folic acid, supported care.\n- Every death feeds a no-blame review — and the team needs its own debrief, because nurses grieve too.",
      },
    ],
    questions: [
      {
        topic: "Supporting Bereaved Families",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which words are best when telling a mother her baby has died?",
        options: [
          "'I'm sorry — your baby passed away.'",
          "'We lost the baby, but God knows best.'",
          "'I am so sorry — your baby has died.'",
          "'The baby didn't make it, but you can have another.'",
        ],
        correctIndex: 2,
        explanation:
          "Plain, honest language lets grief begin. Euphemisms and borrowed faith comfort the teller more than the told, and promising a replacement baby dismisses the child who has died.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Supporting Bereaved Families",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "After a fresh stillbirth, which approach to the parents seeing and holding their baby is best practice?",
        options: [
          "Offer it warmly and respect their decision either way, without pressure",
          "Avoid offering, because seeing the baby always worsens grief",
          "Insist she holds the baby, because closure requires it",
          "Take the baby away first and ask again after a month",
        ],
        correctIndex: 0,
        explanation:
          "Offering the chance to see and hold supports most parents' long-term memories and grief; forcing or withholding both override the parents' own judgement of what they can bear.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Supporting Bereaved Families",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother's milk is coming in three days after a stillbirth and her breasts are painfully engorged. What is the best nursing response?",
        options: [
          "Encourage full, regular expression and storage of the milk",
          "Apply warm compresses and stimulate the nipples frequently to drain the breasts",
          "Tell her the milk will stop on its own if she ignores the pain",
          "Support with a firm bra and cold packs, express only small amounts for comfort, and ask a doctor to review if severe",
        ],
        correctIndex: 3,
        explanation:
          "Suppression works by reducing stimulation: firm support, cold packs and expressing only enough for comfort. Frequent stimulation signals the breasts to keep producing, and ignoring pain is not care.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Supporting Bereaved Families",
        type: "MCQ",
        difficulty: "Hard",
        stem: "At the six-week review after a neonatal death, the mother reports she is not sleeping, feels numb, and says her surviving toddler 'would be better off without her'. What is the correct action?",
        options: [
          "Reassure her that all bereaved mothers feel this way and review in three months",
          "Advise her to keep busy and avoid thinking about the baby",
          "Refer her urgently for mental health assessment and support — these are red flags for depression, not normal grief alone",
          "Tell her the feelings will resolve when she becomes pregnant again",
        ],
        correctIndex: 2,
        explanation:
          "Persistent insomnia, numbness and thoughts that her child would be better off without her are depression red flags demanding urgent referral. Bereaved mothers carry high risk, and waiting or distracting is how treatable illness becomes tragedy.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Supporting Bereaved Families",
        front: "What words do you use when a baby has died?",
        back: "'I am so sorry — your baby has died.' Plain and honest; no euphemisms, no 'at least', no promises about future babies.",
      },
      {
        topic: "Supporting Bereaved Families",
        front: "What is memory making, and what is the golden rule?",
        back: "Offering parents the chance to see, hold, wash, dress and photograph their baby, and to keep a lock of hair or a name — always offered, never forced.",
      },
      {
        topic: "Supporting Bereaved Families",
        front: "How do you care for a bereaved mother's incoming milk?",
        back: "Firm bra, cold packs, express only small amounts for comfort, avoid stimulation — and ask a doctor to review if engorgement is severe.",
      },
      {
        topic: "Supporting Bereaved Families",
        front: "What grief signs at follow-up demand referral rather than reassurance?",
        back: "Persisting or deepening insomnia, guilt, numbness, hopelessness or thoughts of self-harm — depression red flags in a group at high risk.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Making Every Baby Count: Audit and Review of Stillbirths and Neonatal Deaths",
        year: "2016",
      },
      {
        organization: "World Health Organization",
        title: "mhGAP Intervention Guide for Mental, Neurological and Substance Use Disorders (2nd edition)",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241549790",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition with the Nursing and Midwifery Council of Ghana.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Newborn Care",
    lessonTitle: "Neonatal Sepsis & Jaundice Deep-Dive",
    description:
      "The two great quiet killers of the first month — infection and bilirubin — return for a deep-dive. Recognition refined, reasoning sharpened, stewardship and phototherapy nursing made senior.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe early- versus late-onset neonatal sepsis with their subtle whispers, alongside the alarm pattern of pathological jaundice.",
      "Explain the diagnostic reasoning — cultures, lumbar puncture, bilirubin measurement — and when treatment must outrank investigation.",
      "Apply nursing management: antibiotic stewardship, phototherapy care, G6PD counselling and urgent referral decisions.",
    ],
    tags: ["neonatal sepsis", "jaundice", "phototherapy", "bilirubin", "stewardship"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You met both earlier in your training; they return older, subtler and harder. Newborns fall ill quietly — a feed refused here, a temperature drifting there — and yellow arrives just as softly, one zone of skin at a time. Sepsis and jaundice are the two great quiet killers of the first month, and in both, the hours you save with early recognition decide whether the baby leaves healthy or leaves damaged.\n\nThis deep-dive sharpens the recognition patterns, adds the diagnostic reasoning a senior nurse needs, and finishes with the two disciplines that make you senior: antibiotic stewardship and phototherapy nursing.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Sepsis runs by the clock.** Early-onset disease (first 72 hours) reflects maternal and birth-canal origin — group B streptococcus, E. coli — presenting as non-specific collapse in the first hours. Late-onset disease (after 72 hours) leans toward hospital or community acquisition, with staphylococci and gram-negatives focusing in the cord, skin, lungs, urine or meninges. Either way it whispers before it screams: **feeds fall, temperature wanders, breathing quickens, movement fades** — fever is the latecomer, and any baby who feeds badly is septic until proven otherwise. Investigate where the service exists — blood culture before antibiotics, lumbar puncture when meningitis is suspected (bulging fontanelle, seizures, high-pitched cry, unusual irritability) — but never let investigation delay the first dose in a sick baby. Empiric cover follows national guidance, typically a penicillin plus gentamicin; the senior discipline is **stewardship**: review every baby at 48 hours against cultures and course, stop deliberately or complete deliberately, and record the reasoning — because antibiotics are a shared community resource, and how you use them decides how well they work for the next decade of babies.\n\n**Jaundice runs by the calendar and the head-to-toe rule.** Physiological jaundice appears after 24 hours, peaks around day three to five, stays in the face-and-chest zone and clears within one to two weeks in a term baby who feeds and behaves normally. Pathological jaundice raises four alarms: onset **within the first 24 hours** (haemolysis — Rhesus or ABO incompatibility, G6PD deficiency), a **rapid climb**, duration **beyond two weeks** in a term baby, or **pale stools with dark urine** — obstruction needing surgical review. Bilirubin deposits spread downward as levels rise, so yellow **palms and soles** always means severe — measure and refer now. Watch for **kernicterus** — the sleepy, poor-feeding baby with a high-pitched cry, irritability or arching back — because it is lifelong disability. Phototherapy nursing: eyes shielded, feeds increased, temperature and bilirubin monitored. And the Ghanaian lesson that saves brains: keep **naphthalene (camphor) balls out of baby clothes** — in a G6PD-deficient baby they trigger sudden haemolysis.",
      },
      {
        type: "table",
        title: "Physiological versus pathological jaundice",
        body: "| Feature | Physiological | Pathological (any one = act) |\n|---|---|---|\n| Onset | After 24 hours | Within the first 24 hours — haemolysis until proven otherwise |\n| Pace | Gentle, peaks day 3–5 | Rapid climb, crosses zones quickly |\n| Duration | Clears by 1–2 weeks (term) | Beyond 2 weeks term — or pale stools with dark urine |\n| Baby | Feeds and behaves normally | Sleepy, poor feeding, irritable, high-pitched cry |",
      },
      {
        type: "clinical_pearl",
        body: "Day one is the deadline: yellow within the first 24 hours is haemolysis until proven otherwise — it can double in hours, and that baby needs urgent assessment, not a review appointment. And in sepsis, fever is the latecomer: the baby who feeds badly is the baby you treat.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A six-day-old baby is brought to your health centre: feeding less than half of yesterday, axillary temperature 35.2 °C, umbilicus red and moist, and she has not cried once during your examination. Now you notice the face and chest also look distinctly yellow. The mother waited because she thought it was harmattan cold.\n\nWhat is your assessment and plan?\n\nAnswer: This is late-onset neonatal sepsis until proven otherwise — poor feeding, hypothermia, an inflamed cord and lethargy are danger signs enough to act on now, and the jaundice appearing alongside illness is pathological until measured. Warm her immediately with skin-to-skin and a hat, check and treat her glucose, secure IV access, give the first dose of antibiotics per national guidance, and arrange urgent referral for full evaluation — phototherapy decisions and bilirubin measurement belong where they exist. Tell the mother plainly that her baby has an infection that needs hospital care, that it was not her fault or the harmattan's, and document vitals, times and treatment for the receiving team. 'Come back tomorrow' is not a plan this baby survives.",
      },
      {
        type: "memory_trick",
        body: "Two rhymes carry the month. Sepsis whispers: FEEDS fall, TEMPERATURE wanders, BREATHING quickens, MOVEMENT fades. Jaundice marches: FACE, CHEST, BELLY, LEGS, HANDS — the further down the yellow, the higher the bilirubin stands.",
      },
      {
        type: "summary",
        body: "- Early-onset sepsis (first 72 hours): maternal organisms, collapse in the first hours. Late-onset: hospital or community, focused in cord, skin, urine or meninges.\n- Fever is the latecomer — poor feeding, temperature instability and lethargy come first; culture where you can, but never delay the first antibiotic dose.\n- Stewardship: 48-hour review against cultures, deliberate stop or completion, reasoning recorded.\n- Jaundice alarms: within 24 hours, rapid climb, beyond two weeks, pale stools with dark urine; yellow palms and soles = severe now.\n- Phototherapy: eyes shielded, feeds increased, temperature and bilirubin monitored; keep naphthalene out of G6PD baby clothes.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Sepsis & Jaundice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which pattern is most typical of early-onset neonatal sepsis rather than a late problem?",
        options: [
          "Poor feeding and temperature instability within the first 72 hours of life",
          "Fever and a swollen scrotum on day ten",
          "Peeling skin of the hands on day three",
          "Moulding of the skull bones after birth",
        ],
        correctIndex: 0,
        explanation:
          "Early-onset sepsis shows itself in the first 72 hours as non-specific collapse — poor feeding, temperature instability, breathing difficulty — reflecting organisms acquired around birth.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 12-day-old baby has a bulging fontanelle, a high-pitched cry and two brief seizures. What does this combination demand?",
        options: [
          "Oral antibiotics and review in clinic tomorrow",
          "A blanket diagnosis of colic and reassurance",
          "Warming only, since seizures in newborns are always benign",
          "Urgent treatment as meningitis — lumbar puncture where safe, and prolonged IV antibiotics",
        ],
        correctIndex: 3,
        explanation:
          "Bulging fontanelle, irritability with a high-pitched cry and seizures point to meningitis: treat promptly, LP where it can be done safely, and weeks of therapy. Oral treatment and reassurance are not options here.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A five-day-old baby has yellow palms and soles but is still breastfeeding. How do you interpret this finding?",
        options: [
          "Reassuring — jaundice on the hands of a feeding baby is always physiological",
          "Severe hyperbilirubinaemia until measured and treated — this baby needs urgent assessment",
          "Normal, because jaundice always reaches the hands by day five",
          "A sign of intestinal obstruction",
        ],
        correctIndex: 1,
        explanation:
          "Bilirubin spreads head to toe as levels rise; reaching the palms and soles marks the end of the journey and a severe level — even in a baby who is still feeding. A calm surface can hide a deep tide: measure and treat urgently.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A baby is under phototherapy for rising bilirubin. Which set of nursing actions is correct?",
        options: [
          "Shield the eyes, increase feeds or fluids, and monitor temperature, weight and bilirubin — while treating the underlying cause",
          "Keep the eyes open to light, restrict feeds to rest the gut, and cover with a warm blanket",
          "Turn the lights off at night so the baby sleeps, and resume at dawn",
          "Apply oils to the skin to enhance light penetration",
        ],
        correctIndex: 0,
        explanation:
          "Phototherapy nursing is protection plus support: covered eyes, more fluids for the extra losses, temperature and bilirubin monitoring — and the cause (haemolysis, infection, feeding) still treated. Oils burn and block light; interruption risks the climb continuing.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Sepsis & Jaundice",
        front: "Early versus late-onset sepsis — the clock and the bugs?",
        back: "Early (within 72 hours): maternal origin — GBS, E. coli, collapse in the first hours. Late (after 72 hours): hospital or community — staphylococci and gram-negatives; cord, skin, urine, meninges.",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        front: "Which four whispers signal sepsis in a young infant?",
        back: "Feeds falling, temperature wandering, breathing quickening, movement fading — act before fever ever arrives.",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        front: "Which four features mark pathological jaundice?",
        back: "Onset within 24 hours (haemolysis), a rapid rise, duration beyond two weeks in a term baby, and pale stools with dark urine (obstructive pattern).",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        front: "Why must naphthalene (camphor) balls be kept out of baby clothes in Ghana?",
        back: "In G6PD-deficient babies they trigger sudden red cell destruction — a bilirubin surge that can push jaundice into kernicterus range within hours.",
      },
      {
        topic: "Neonatal Sepsis & Jaundice",
        front: "What is the core of antibiotic stewardship in a newborn unit?",
        back: "Culture before the first dose where possible, a deliberate review at 48 hours against results — then stop or complete on evidence, with the reasoning recorded.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, childbirth, postpartum and newborn care: a guide for essential practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Ghana Ministry of Health",
        title: "Standard Treatment Guidelines",
        note: "National guideline — verify current edition with the Ministry of Health, Ghana.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Newborn Care",
    lessonTitle: "The Neonatal Intensive Care Environment",
    description:
      "Between the postnatal ward and the regional NICU sits a world of warmers, monitors and quiet alarms — and the nurse is its central nervous system. Learn the environment, the levels of care and the disciplines that protect the smallest patients.",
    difficulty: "Hard",
    durationMin: 12,
    objectives: [
      "Describe the levels of newborn care — from routine care to the special care baby unit (SCBU) to the intensive care unit (NICU) — and what each level can honestly do in the Ghanaian setting.",
      "Explain the nursing disciplines of the newborn unit: the warm chain, feeding the immature gut, minimal handling, infection prevention and developmental care.",
      "Apply family-centred practice in a high-technology environment, keeping parents part of the care team and preparing honest referrals between levels.",
    ],
    tags: ["nicu", "scbu", "preterm", "developmental care", "infection prevention"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Prematurity is the leading cause of newborn death worldwide, and the newborn unit is where that statistic is fought. The unit at your district hospital may be two cots and a radiant warmer; the regional hospital's is incubators, CPAP machines and monitors; the teaching hospital's adds ventilation and surgery. The levels differ — but the discipline that saves babies does not, because most of what keeps the smallest patients alive is not the technology. It is nursing: warmth, gentle handling, the mother's milk, protection from infection, and eyes that notice early.\n\nThat is the honest frame of this lesson: you are walking into an environment of machines, and you are its most important monitor.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Know the levels. **Basic newborn care** — warmth, early breastfeeding, hygiene, resuscitation — belongs to every facility that delivers babies. **Special care (SCBU)**, usually at the district, cares for stable preterm and low-birth-weight babies: gavage feeding, phototherapy, weight and temperature monitoring, oxygen where prescribed — but no ventilation. **Intensive care (NICU)**, at regional and teaching hospitals, adds CPAP, ventilation, and the skills and supplies those demand. Matching baby to level is a referral decision — a grunting 29-weeker in a district without CPAP needs the regional conversation today.\n\nThen the disciplines, which are the same everywhere. The **warm chain**: hat, plastic wrap for the smallest, pre-warmed towels, skin-to-skin, and frequent temperature checks — cold stress quietly kills. **Feeding the immature gut**: the mother's expressed milk as first choice, trophic feeds advanced slowly, gavage or cup before coordination matures at about 34 weeks, weight trend as the judge. **Infection prevention is the invisible therapy**: hand hygiene at every contact, aseptic tube and line care, clustered handling, honest limits on visitors — a unit's infection rate is a nursing outcome. **Minimal handling and developmental care**: quiet, dim, pain-sparing, nested positioning — every unnecessary touch costs the baby oxygen, calories and stress. **Observation rhythm**: breathing (grunting, recession, apnoea), colour, temperature, glucose, feeding tolerance, weight — charted with times, because the chart is how the team sees. And keep the **technology humble**: monitors alarm late; your noticing arrives early. Oxygen is titrated to the prescribed target, not to the loudest number, and CPAP interfaces need skin care. Finally, **parents in the unit**: not visitors but partners — expressing milk, mouth care, temperature taking, kangaroo hours. A mother pumping colostrum for her 30-weeker is not watching; she is writing her baby's prescription.",
      },
      {
        type: "table",
        title: "Levels of newborn care",
        body: "| Level | What it offers | Where you meet it |\n|---|---|---|\n| Basic | Warmth, early breastfeeding, hygiene, resuscitation, danger-sign recognition | Every delivery facility and CHPS with newborn care |\n| Special care (SCBU) | Stable preterm/LBW care: gavage feeding, phototherapy, monitoring, prescribed oxygen | District hospitals |\n| Intensive care (NICU) | CPAP, ventilation, parenteral nutrition, specialist cover | Regional and teaching hospitals |",
      },
      {
        type: "clinical_pearl",
        body: "In the newborn unit the machines watch numbers, but the nurse watches the baby. A monitor alarms late; your noticing arrives early — a grunt, a refused feed, a drifting temperature are your alarms, and the chart with times is how the whole team hears them.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 29-week baby, 1.3 kg, is born at your district hospital, which has no CPAP unit. She is grunting by two hours of age. The mother is frightened and has not yet touched her.\n\nWhat are your priorities for the first 24 hours, and how do you involve her mother?\n\nAnswer: First the foundations: warmth with a hat, wrap and pre-warmed cot or supervised skin-to-skin once stable; oxygen carefully titrated to the prescribed target; glucose monitored with trophic expressed colostrum begun as soon as it can be collected; observations charted with times; antibiotics considered per local guidance. Call the regional unit early about CPAP — the referral conversation happens while she is being stabilised, not after she deteriorates. Involve the mother from hour one: teach hand expression with dignity, give her colostrum to her baby, and bring her hands to the cot — as the baby stabilises, skin-to-skin begins, because her chest is both incubator and medicine. Record everything, and hand over the story, the feeds and the plan at every shift. The machines at the regional centre may continue the care; the discipline that got her there was yours.",
      },
      {
        type: "memory_trick",
        body: "The unit runs on W-A-R-M-S: Warmth always, Airway and breathing watched, Milk from the mother, Sterile everything, Silence and dim light for the brain. Add K — Kangaroo — when stable, and the parents carry the therapy home.",
      },
      {
        type: "summary",
        body: "- Levels of newborn care: basic everywhere, SCBU at district, NICU at regional and teaching — match baby to level as a referral decision made early.\n- The warm chain, the mother's milk, hand hygiene at every contact and minimal handling do more for survival than any single machine.\n- Clustered care protects the baby from stress and infection; quiet, dim, nested positioning protects the developing brain.\n- Monitors alarm late — the nurse's noticing arrives early; chart observations with times, titrate oxygen to prescription.\n- Parents are partners: expressing milk, mouth care, temperature taking, kangaroo hours — real roles, not visiting rights.",
      },
    ],
    questions: [
      {
        topic: "Neonatal Intensive Care Environment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A district hospital without CPAP receives a grunting 29-week baby. What is the correct level-of-care reasoning?",
        options: [
          "Keep her at the district because transport is too risky to ever attempt",
          "Stabilise her with warmth, titrated oxygen and trophic feeds while opening the regional referral conversation for intensive-level support",
          "Discharge her home with kangaroo instructions since the district cannot help",
          "Transfer immediately without any preparation, because speed is everything",
        ],
        correctIndex: 1,
        explanation:
          "Her breathing problem likely needs CPAP — an intensive-level function — so the regional conversation happens today. But transfers run on preparation: a cold, unstable baby sent unprepared arrives worse. Stabilise first, refer in parallel, and involve the mother throughout.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why are clustered, minimal handling and a quiet, dim environment part of therapy rather than comfort?",
        options: [
          "They mainly reduce noise complaints from other mothers",
          "They reduce stress responses, oxygen cost and infection exposure — protecting weight gain and the developing brain",
          "They allow fewer nurses to supervise more babies safely",
          "They are required only for babies on ventilation",
        ],
        correctIndex: 1,
        explanation:
          "Every touch, sound and light costs a small baby energy and oxygen she cannot spare; clustered care also limits the contact count that spreads infection. Developmental care is clinical care with the lights turned down.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the single most important infection-prevention practice in a newborn unit?",
        options: [
          "Restricting all mothers from entering the unit",
          "Hand hygiene at every contact, with aseptic tube and line care",
          "Antibiotics for every admitted baby",
          "Daily fumigation of the ward",
        ],
        correctIndex: 1,
        explanation:
          "Hands carry the hospital's organisms to the babies who can least resist them. Clean hands at every contact, with sterile technique for every tube and line, is the invisible therapy the whole unit runs on — the infection rate is a nursing outcome.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        type: "MCQ",
        difficulty: "Hard",
        stem: "The mother of a 30-week baby stays at the unit's door and has not entered for two days. Which intervention best reflects family-centred neonatal care?",
        options: [
          "Ask her to wait until visiting hours to protect the unit's routine",
          "Give her a real role now — hand expression for her baby's feeds, then mouth care and kangaroo hours as the baby stabilises",
          "Tell her the baby is fine and discourage questions to reduce her anxiety",
          "Ask a relative to relay updates to her at home",
        ],
        correctIndex: 1,
        explanation:
          "Family-centred care makes the mother part of the therapy: her milk is medicine, her hands deliver care, her chest is the incubator. Real roles treat fear better than reassurance — and distance protects nobody.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Neonatal Intensive Care Environment",
        front: "Name the three levels of newborn care and where each lives.",
        back: "Basic (every delivery facility), special care — SCBU (district: stable preterm, gavage feeding, phototherapy), intensive — NICU (regional and teaching: CPAP, ventilation, specialist cover).",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        front: "What is the W-A-R-M-S discipline of the newborn unit?",
        back: "Warmth always, Airway and breathing watched, Milk from the mother, Sterile everything, Silence and dim light — plus Kangaroo when stable.",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        front: "Why does the nurse out-rank the monitor?",
        back: "Monitors alarm late — after the change has already happened. The nurse's noticing (a grunt, a refused feed, a drifting temperature) arrives early, and the timed chart turns noticing into team action.",
      },
      {
        topic: "Neonatal Intensive Care Environment",
        front: "Why is hand hygiene called the invisible therapy?",
        back: "Hospital organisms travel on hands to the babies least able to resist them; the unit's infection rate is largely a nursing outcome — clean hands at every contact are treatment.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Pocket Book of Hospital Care for Children (2nd edition)",
        year: "2013",
        url: "https://www.who.int/publications/i/item/978-92-4-154837-4",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Care of the Preterm or Low-Birth-Weight Infant",
        year: "2022",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
        note: "National strategy for newborn care, including district-level services — verify current edition with the GHS.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Advanced Newborn Care",
    lessonTitle: "Kangaroo Mother Care: Evidence & Practice",
    description:
      "The mother's chest is the most evidence-rich incubator in the world. What KMC is, what the evidence shows, how it is practised and how Ghana is scaling it — the whole skin-to-skin story.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe kangaroo mother care — the position, the feeding, the duration and the babies it serves (stable preterm and low-birth-weight infants).",
      "Explain the evidence: improved survival, temperature, feeding and bonding for stable babies weighing 2000 g or less.",
      "Apply KMC practice and discharge criteria, including supporting the mother through long hours, transfers and follow-up.",
    ],
    tags: ["kangaroo care", "kmc", "preterm", "low birth weight", "skin-to-skin"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Where incubators are scarce and electricity is unreliable, Ghana has an incubator that never breaks down, needs no generator and comes with its own food supply: the mother's chest. Kangaroo mother care — continuous skin-to-skin contact, early, for stable preterm and low-birth-weight babies — is one of the most warmly evidence-backed interventions in all of newborn care, and it is nursing-shaped: taught, supervised and sustained by nurses.\n\nThis lesson covers the method, the evidence, the practice arc from first session to discharge home in kangaroo, and the support that keeps a mother going through weeks of it.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**The method.** The baby wears only a nappy, hat and socks, and lies upright between the mother's breasts, head turned to one side, secured firmly in a wrap — chest to chest, skin to skin. Feeding is exclusive or near-exclusive breastfeeding, on demand, including through the night. **Who it serves:** stable babies born early or small — WHO recommends starting kangaroo care as soon as possible once a stable baby weighing 2000 g or less is stabilised, with as many hours a day as can be managed, ideally eight or more including at night. **Stability is the gate**: a baby needing respiratory support or treatment for acute illness receives that first; kangaroo begins when she is stable — and then becomes the treatment itself, continuing at home.\n\n**The evidence.** Trials and WHO guidance consistently show KMC improves survival for stable low-birth-weight babies, keeps them warmer, raises exclusive breastfeeding, reduces infection, supports weight gain, settles their breathing, and strengthens maternal confidence and bonding — at almost no equipment cost. **The practice arc.** Begin with short, supervised sessions while the baby stabilises; build the hours like a dose; swap in the father or a grandmother for rest shifts — a wrap does not check whose chest it is. Monitor temperature, feeding and the daily weight trend. **Discharge in KMC** when the baby is gaining steadily, feeding well at breast or cup, staying warm in kangaroo outside the unit, and the mother is confident — then follow with regular weighing until the baby reaches a good weight for age. **Support the mother** through the marathon: privacy and screens, a chair or bed for long sessions, food and rest, peer mothers in a KMC ward where one exists, and protection from guilt — a mother who feels she is failing stops coming, and the therapy stops with her.",
      },
      {
        type: "table",
        title: "The KMC checklist",
        body: "| Element | What good looks like |\n|---|---|\n| Position | Upright between the breasts, head to one side, skin-to-skin, firmly wrapped |\n| Warmth | Hat and socks on; wrap covers baby and mother; temperature stable and checked |\n| Feeding | Exclusive breastfeeding, on demand, at least eight times in 24 hours including night |\n| Duration | Hours built up like a dose — eight or more a day where possible; father or grandmother for breaks |\n| Monitoring | Temperature, feeding tolerance and daily weight trend charted |\n| Discharge | Steady weight gain, feeding well, warm in KMC, mother confident, follow-up arranged |",
      },
      {
        type: "clinical_pearl",
        body: "Stability, not size alone, opens the kangaroo door — start when the baby is stable and build the hours like a dose: early, often, increasing. And remember that fathers and grandmothers have chests too; the wrap does not check ID.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 1.8 kg baby, four hours old, stable but small, needs to move 60 km from your health centre to the district newborn unit. The ambulance is unavailable; a family car can leave within the hour, and the mother is well. Kangaroo mother care is your transport plan.\n\nHow do you prepare this transfer?\n\nAnswer: Stabilise and verify first — temperature in the normal range, breathing comfortable, glucose checked, a first feed of expressed colostrum given, and any prescribed treatment started. Then arrange the warmth: a hat, and kangaroo skin-to-skin inside the mother's wrap, with extra covers for the journey. Write the referral note with times, weights and treatments; phone the newborn unit ahead; send a trained escort with a bag-mask and suction if available; agree stopping points for re-checking; and hand over to a named person on arrival. The family car is acceptable transport precisely because kangaroo makes the mother the incubator — monitored, warm and feeding on the move. This is KMC as referral science: the same method that stabilises a baby in the unit carries her safely across the district.",
      },
      {
        type: "memory_trick",
        body: "KMC is a C-H-E-S-T: Contact continuous, Hats on, Exclusive breastfeeding, Support the mother, Transfer possible — and Time builds the hours.",
      },
      {
        type: "summary",
        body: "- KMC: upright skin-to-skin, secured in a wrap, hat and socks, exclusive breastfeeding — for stable preterm and low-birth-weight babies.\n- WHO advises starting as soon as possible once a stable baby of 2000 g or less is stabilised, with eight or more hours a day where possible — including at night.\n- Evidence: better survival, temperature, breastfeeding, infection protection, weight gain and maternal confidence, at almost no equipment cost.\n- Discharge in KMC on steady gain, good feeding, warmth in kangaroo and a confident mother — with regular weighing until good weight for age.\n- The therapy lives or dies on the mother's support: privacy, rest, food, peers, and freedom from guilt.",
      },
    ],
    questions: [
      {
        topic: "Kangaroo Mother Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which baby is ready to start kangaroo mother care?",
        options: [
          "A stable 10-day-old weighing 1.7 kg, feeding by cup, temperature normal",
          "A 2-hour-old 1.5 kg baby on oxygen, grunting and hypothermic",
          "A term 3.4 kg baby breastfeeding well with no problems",
          "A septic 5-day-old in shock awaiting IV antibiotics",
        ],
        correctIndex: 0,
        explanation:
          "KMC's gate is stability plus need: this baby is small but stable — feeding, warm, breathing comfortably — exactly who kangaroo serves. The baby on oxygen or in shock needs treatment and stabilisation first; the term well baby needs nothing more than routine skin-to-skin and breastfeeding.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Kangaroo Mother Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which outcome is consistently demonstrated for kangaroo mother care in stable low-birth-weight babies?",
        options: [
          "Faster weight gain and earlier discharge without any feeding effect",
          "Improved survival, temperature stability, exclusive breastfeeding and reduced infection",
          "Shorter hospital stay with more readmissions",
          "Reduced maternal bonding as machines take over monitoring",
        ],
        correctIndex: 1,
        explanation:
          "The evidence base is unusually warm: survival, thermoregulation, breastfeeding, infection protection, growth and maternal confidence all improve. KMC is not a compromise substitute for incubators — for stable babies it outperforms them on most of what matters.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Kangaroo Mother Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A 1.8 kg stable baby must travel 60 km and no ambulance is available within hours. Which transfer arrangement is safest?",
        options: [
          "Wrap the baby in thick blankets, alone on the seat, and drive fast",
          "Kangaroo transfer: hat on, skin-to-skin in the mother's wrap, extra covers, referral note, escort with bag-mask, call ahead to the receiving unit",
          "Wait three days for the ambulance, whatever the baby's condition",
          "Send the baby with the father holding him loosely in arms",
        ],
        correctIndex: 1,
        explanation:
          "For a stable small baby, kangaroo transfer is the evidence-based method: the mother's chest is the transport incubator — warm, monitored and feeding on the move — completed by preparation, documentation, an escort and a call ahead. Loose wrapping cools fast, and delay has its own price.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Kangaroo Mother Care",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "A mother in week three of KMC is exhausted, tearful, and says she 'has no milk and is failing the baby'. The baby is gaining weight appropriately. What is the best nursing response?",
        options: [
          "Suggest switching to formula so she can rest completely from the baby",
          "Reassure her superficially and encourage her to keep trying alone",
          "Acknowledge her fatigue, arrange practical support — father or grandmother taking kangaroo shifts, rest, food, peer mothers — and review feeding technique and her own wellbeing",
          "Discharge the baby immediately to end the stress",
        ],
        correctIndex: 2,
        explanation:
          "The therapy lives on the mother, so the mother is the patient too: shared kangaroo shifts, rest, nutrition and peer support are prescriptions, not kindnesses. Formula would add infection risk without solving exhaustion, false cheer dismisses her, and discharge without criteria ends the treatment prematurely.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Kangaroo Mother Care",
        front: "Who is KMC for, and when does it start?",
        back: "Stable preterm and low-birth-weight babies (2000 g or less is the classic start weight) — begun as soon as possible after stabilisation, with hours built up like a dose.",
      },
      {
        topic: "Kangaroo Mother Care",
        front: "Describe the KMC position.",
        back: "Baby upright between the mother's breasts, wearing only a nappy, hat and socks, head turned to one side, skin-to-skin, secured firmly in a wrap.",
      },
      {
        topic: "Kangaroo Mother Care",
        front: "What are the discharge criteria for a baby going home in KMC?",
        back: "Steady weight gain, feeding well at breast or cup, maintaining temperature in kangaroo outside the unit, a confident mother — and follow-up weighing arranged until good weight for age.",
      },
      {
        topic: "Kangaroo Mother Care",
        front: "How does KMC serve as a transfer method?",
        back: "The mother's chest is the transport incubator: hat, skin-to-skin in the wrap, extra covers, referral note, escort with bag-mask, call ahead — the stable small baby travels warm, monitored and feeding.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Care of the Preterm or Low-Birth-Weight Infant",
        year: "2022",
      },
      {
        organization: "World Health Organization",
        title: "Kangaroo Mother Care: A Practical Guide",
        year: "2003",
      },
      {
        organization: "WHO, UNICEF",
        title: "Every Newborn: An Action Plan to End Preventable Deaths",
        year: "2014",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Families Through Complexity",
    lessonTitle: "The Family in the Neonatal Crisis",
    description:
      "Behind every incubator stands a family holding its breath. The communication habits, the partnership roles and the cultural humility that keep parents standing while their baby fights.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe communication that works in crisis: honesty, plain language, one consistent voice and understanding checked by teach-back.",
      "Explain family-centred care: parents as partners — touch, care tasks, expressing milk, kangaroo hours.",
      "Apply culturally humble support in a Ghanaian neonatal unit, including when the news is the worst (SPIKES).",
    ],
    tags: ["family-centred care", "communication", "spikes", "counselling", "crisis"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A sick newborn breaks a family's picture of the future. The parents standing at your unit's door carry fear, guilt and questions they are afraid to ask — and the difference between a family that copes and one that collapses is often the nurse who knew how to stand with them.\n\nYou do not need perfect words; you need honest ones, offered with warmth and repeated as often as it takes. This lesson builds the communication habits of the neonatal crisis — and the partnership that turns parents from anxious visitors into members of the care team, culture held with humility rather than worked around.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Communicate so it lands.** Sit down, use the parents' own language where you can, replace jargon with pictures-in-words, and check understanding with a gentle 'tell me what you have understood so far'. Small, regular updates through **one consistent staff member** beat crowds of strangers; a frightened parent hears one sentence in ten, so make every tenth sentence count. **Invite them in** — fear grows at the door and shrinks at the cot side — and give real roles: mouth care, temperature taking, changing the baby, expressing milk, kangaroo hours. A mother pumping colostrum for her 30-weeker is not a visitor; she is writing her baby's prescription. **Acknowledge guilt early** — 'nothing you did caused this' — because the question underneath every question is usually 'is it my fault?'.\n\n**Work with the family's culture, not around it.** Grandmothers and fathers may hold the decision voice; prayer often anchors hope; naming customs may matter deeply — ask, invite, include. Watch the parents' wellbeing as you watch the baby's vitals: sleeplessness, avoidance and panic that will not settle deserve real support, not dismissal. And when the news is the worst, let **SPIKES** carry you: Setting (private, seated, unhurried, her chosen support person), Perception (what does she already understand?), Invitation (how much does she want to know now?), Knowledge (a warning shot — 'I am afraid I have difficult news' — then plain words in her own language, in small chunks, with pauses), Empathy (silence — count five breaths before filling it; name the emotion; resist 'I know how you feel' and 'at least…'), and Strategy and summary (concrete next steps, a way back with questions, documentation). The news belongs to the mother herself unless she cannot receive it — family members support her; they do not replace her.",
      },
      {
        type: "clinical_pearl",
        body: "A frightened parent hears one sentence in ten — so make every tenth sentence count: simple, honest, kind. Then say it again tomorrow.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "The mother of a 27-week baby has barely crossed the threshold of the unit in two days. Today she whispers: is it my fault — I carried water to the house until the evening before? She has not yet touched her baby.\n\nWhat will you say and do in the next half hour?\n\nAnswer: Sit with her at eye level and answer the hidden question first: carrying water did not bring her baby early, and it was not her fault. Explain in her own language, in one or two plain sentences, what is happening and what the plan is — and check what she understood. Then invite her in as a participant: help her wash her hands, bring her to the cot, and start with the smallest real task — a hand resting on her baby, or the first expression of colostrum — while preparing her for kangaroo care as the baby stabilises. Ask who else at home needs to understand, and arrange a consistent time for updates with one named nurse. Guilt that is spoken to tends to loosen; guilt left alone hardens into the memory that she was turned away.",
      },
      {
        type: "memory_trick",
        body: "When words are hard, hold to OPEN: Own the message yourself (no third-hand news), Plain language, Explain with the hands (teach a task), Never alone (bring the family in).",
      },
      {
        type: "summary",
        body: "- Communication: sit, speak the parents' language, plain words, understanding checked, one consistent voice for updates.\n- Parents are partners: touch, care tasks, expressing milk, kangaroo hours — real roles treat fear better than reassurance.\n- Address guilt directly and early; answer the question underneath the question.\n- Work with culture: identify the real decision-makers, honour faith and customs, invite the wider family in.\n- When the news is the worst: SPIKES — private setting, plain words with a warning shot, silence honoured, memories made, follow-up arranged; the news is hers first.",
      },
    ],
    questions: [
      {
        topic: "The Family in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother at the neonatal unit door repeatedly says it is her fault. What is the best first response?",
        options: [
          "Tell her not to think about that now and focus on the positives",
          "Let us talk: nothing you did in your daily life caused this, and this is not your fault",
          "Explain that the cause will be investigated later and ask her to wait outside",
          "Say guilt is a normal stage that everyone passes through",
        ],
        correctIndex: 1,
        explanation:
          "Guilt needs to be met, not deflected. Naming it and gently removing blame in the parent's own language opens the door to partnership; deflection leaves the guilt to grow in the corridor.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "The Family in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best describes family-centred care in a newborn unit?",
        options: [
          "Restricting visiting hours to protect staff time",
          "Giving daily medical lectures to groups of parents",
          "Giving parents real care roles — mouth care, temperature taking, expressing milk, kangaroo hours",
          "Waiting until discharge for parents to meet the care team",
        ],
        correctIndex: 2,
        explanation:
          "Family-centred care makes parents part of the therapy: tasks, touch and kangaroo time improve the baby's outcomes and the parents' coping. Distance protects nobody — not the baby, not the family, not the staff.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "The Family in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You must tell parents that their baby has died. Which approach is correct?",
        options: [
          "Warn them you are worried, then use clear words — your baby has died — and allow silence and contact",
          "Say the baby has gone to rest, to soften the blow",
          "Ask the doctor to tell them later, once you are off shift",
          "Give the news quickly in the corridor while work continues",
        ],
        correctIndex: 0,
        explanation:
          "Euphemisms create false hope and confusion; vague timing and corridors compound trauma. Warn, speak plainly, allow silence, and let the parents be with their baby — with follow-up arranged.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "The Family in Neonatal Crisis",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You are about to tell a couple difficult news about their baby's scan. What is the first step of the SPIKES protocol?",
        options: [
          "Deliver the finding immediately where you met them",
          "Inform the extended family first so they can soften the news",
          "Prepare the setting — a private space, both seated, her chosen support person, time protected",
          "Begin with the management plan, then work backwards to the diagnosis",
        ],
        correctIndex: 2,
        explanation:
          "Setting comes first: privacy, seating, support and protected time. Corridor news, family-first telling and plan-first delivery all rob the parents of the chance to receive their own news at their own pace.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "The Family in Neonatal Crisis",
        front: "What are the six steps of SPIKES?",
        back: "Setting, Perception, Invitation, Knowledge, Empathy, Strategy and summary — private space, check what she knows, ask how much she wants, plain words with a warning shot, silence and named emotion, then concrete next steps.",
      },
      {
        topic: "The Family in Neonatal Crisis",
        front: "Why teach a frightened mother to express colostrum for her preterm baby?",
        back: "It converts helpless fear into effective therapy: her milk is medicine, and a real role treats her anxiety better than any reassurance.",
      },
      {
        topic: "The Family in Neonatal Crisis",
        front: "One principle for updates in neonatal crisis?",
        back: "One consistent voice, small regular doses, understanding checked — a frightened parent hears one sentence in ten.",
      },
      {
        topic: "The Family in Neonatal Crisis",
        front: "Name three phrases to avoid when breaking bad news.",
        back: "'I know how you feel', 'at least…' and any borrowed faith cliché used to fill your own discomfort — silence, presence and named emotion serve her better.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
      },
      {
        organization: "The Oncologist (Baile WF, Buckman R et al.)",
        title: "SPIKES: A Six-Step Protocol for Delivering Bad News",
        year: "2000",
        note: "The original description of the SPIKES protocol — educational source, verify availability through your library.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Verify current edition with the Nursing and Midwifery Council of Ghana.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn",
    moduleTitle: "Families Through Complexity",
    lessonTitle: "Discharging the Vulnerable Newborn",
    description:
      "The safest discharge is a bridge, not a goodbye — readiness criteria, teaching that survives the journey home, and the follow-up net that catches what you could not predict.",
    difficulty: "Moderate",
    durationMin: 11,
    objectives: [
      "Describe discharge readiness criteria for the preterm or low-birth-weight newborn: medical stability, feeding, warmth, weight trend and maternal confidence.",
      "Explain the discharge teaching that prevents readmission and death: danger signs, feeding support, warmth, hygiene and immunisation follow-up.",
      "Apply the linking plan: hospital to CHPS compound to home, with scheduled follow-up, defaulter tracing and family engagement.",
    ],
    tags: ["discharge", "preterm", "follow-up", "lbw", "teaching"],
    sourceStatus: "PROPOSED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The temptation with a small baby who has finally 'picked up' is to celebrate and wave her home. But the vulnerable newborn leaving hospital is exchanging monitors for a mother, a compound and a motorbike road — and the outcome of that exchange is decided by the quality of the discharge. A discharge is a transfer of care from your hands to hers.\n\nTreat it with the seriousness of a referral. This lesson gives you the readiness criteria, the teaching that survives the journey home, and the follow-up net that catches what no one could predict.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Readiness is five doors, and all must open.** Medical stability: the baby is off respiratory support and IV treatment, with observations settled. Feeding: feeding effectively at breast or cup, with a documented steady weight trend — the chart, not the calendar, decides. Warmth: maintaining temperature in an open cot or kangaroo position, not only in the incubator. Maternal competence: the mother demonstrates the feeding, the kangaroo position and the danger-sign knowledge — checked by **teach-back**, not by nodding. Support: someone at home, a plan for emergencies, a phone and transport thinking.\n\n**Teaching that survives the road.** Teach-back everything that matters: 'tell me how you will know he is sick'. The danger-sign list for the young infant — not feeding, fast breathing, fever or coldness, yellow palms or soles, convulsions, umbilical redness spreading. The feeding plan: exclusive breastfeeding at least eight times in 24 hours including at night, with expressing technique if the baby is still learning at the breast. Warmth and hygiene: hat and wrap, kangaroo for sleep, handwashing before handling, cord care with chlorhexidine per national policy and nothing else on the stump. Immunisation status checked and the child welfare clinic registered before she leaves. **The link.** The discharge summary is written and — ideally with a phone call — sent to the CHPS compound of her zone, so the community nurse who knows the family picks up the thread: first follow-up within days of arriving home, then regular weighing until the baby reaches a good weight for age, with defaulters traced by name. The grandmother and father are taught alongside the mother, because the household's other voices decide what happens at 2 a.m.",
      },
      {
        type: "table",
        title: "Discharge readiness checklist",
        body: "| Domain | The question to ask | The evidence you need |\n|---|---|---|\n| Medical stability | Is treatment complete and are observations settled? | Off respiratory support and IVs; stable temperature and breathing |\n| Feeding | Is the baby feeding effectively and gaining? | Breast or cup feeds demonstrated; steady weight trend charted |\n| Warmth | Does she hold her temperature outside the incubator? | Stable temperature in an open cot or kangaroo position |\n| Mother's competence | Can she feed, position and recognise trouble? | Teach-back of feeding, KMC and danger signs — in her own words |\n| The net | Who follows her, where, and when? | Summary to the CHPS nurse, first visit within days, weighing schedule, emergency plan |",
      },
      {
        type: "clinical_pearl",
        body: "Discharge teaching is only real when she teaches it back. A nodding mother has told you nothing; a mother who lists the danger signs in her own words has signed her safety contract.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A baby born at 32 weeks is 34 days old and weighs 1.85 kg. She has been out of the incubator for three days, holding her temperature in kangaroo, feeding at the breast with a top-up by cup, and the weight chart shows steady gain. The mother — 19 years old, first baby, home two hours away — is anxious to leave: 'My mother says the hospital is making the baby weak.'\n\nWhat does a safe discharge look like today?\n\nAnswer: Walk the five doors: stability (settled), feeding (effective with gain), warmth (holding in kangaroo), competence — and here the grandmother's voice matters, so teach both women together and let the grandmother ask her questions; her blessing is the household's medicine adherence. Complete the teach-back: feeding at least eight times in 24 hours including night, kangaroo for warmth and sleep, danger signs in her own words, handwashing, cord care already healed but hygiene taught. Check immunisation status and register the welfare clinic. Write the discharge summary and phone the CHPS nurse of her zone with the plan: first visit within days of arriving home, then weekly weighing until the baby reaches a good weight for age, defaulters traced. Give the mother the unit's number and a transport plan for emergencies. Then discharge with confidence — the bridge is built, and the net is under it.",
      },
      {
        type: "memory_trick",
        body: "A vulnerable discharge needs F-E-E-D-S: Fully stable, Eating well, Empty of monitors — warm in cot or KMC, Demonstrates the mother's skills, Support net of follow-up and transport. All five, or the baby stays.",
      },
      {
        type: "summary",
        body: "- A discharge is a transfer of care: readiness has five doors — stability, feeding, warmth, maternal competence, support — and all must open.\n- Teaching is real only by teach-back: danger signs, feeding at least eight times in 24 hours, warmth, hygiene, immunisation.\n- The link completes the discharge: written summary plus a call to the CHPS nurse, first visit within days, regular weighing until good weight for age.\n- Grandmothers and fathers are taught alongside mothers — the household's other voices decide the 2 a.m. decisions.\n- Defaulters are traced by name; the follow-up net catches what no one could predict.",
      },
    ],
    questions: [
      {
        topic: "Discharging the Vulnerable Newborn",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the best evidence that a mother is ready for her vulnerable newborn's discharge?",
        options: [
          "She nods agreement to all your instructions",
          "She has stayed in the unit the whole admission",
          "She teaches back the danger signs, feeding plan and kangaroo position in her own words",
          "The baby's weight has reached 2 kg",
        ],
        correctIndex: 2,
        explanation:
          "Nods prove nothing; teach-back proves competence — the mother who can list the danger signs and demonstrate feeding and warmth is the mother who keeps the baby safe at home. A round weight number is not a readiness criterion.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A preterm baby holds her temperature in the incubator but drops it whenever she is moved to an open cot or kangaroo position. What does this mean for discharge?",
        options: [
          "She can be discharged — the incubator result is what counts",
          "She is not yet ready: discharge warmth must be demonstrated in an open cot or kangaroo, the environment she is actually going home to",
          "She needs a home incubator before discharge",
          "She should be discharged in the cool hours of the day",
        ],
        correctIndex: 1,
        explanation:
          "The incubator is not travelling with her. Readiness means holding temperature in the cot or kangaroo position — the real world she is going to — because a baby who cools outside the unit will cool at home.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A discharged kangaroo baby lives 25 minutes from the district hospital. What should the follow-up plan include?",
        options: [
          "One review at six weeks, like any term baby",
          "The CHPS nurse receives the summary, conducts the first visit within days, and the baby is weighed regularly at the welfare clinic until good weight for age — defaulters traced by name",
          "Weekly visits by the hospital paediatrician to the house",
          "No follow-up unless the mother calls with a concern",
        ],
        correctIndex: 1,
        explanation:
          "The net under the bridge: the community nurse who knows the family resumes care immediately (first visit within days), weighing continues until the baby is thriving, and defaulters are found rather than forgotten. Waiting for the mother to call is how small problems become emergencies.",
        courseSlug: "advanced-maternal-newborn",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        type: "MCQ",
        difficulty: "Clinical Reasoning",
        stem: "The mother of a stable 34-day-old preterm baby asks to go home today, before all readiness criteria are demonstrated. Her mother-in-law is pressing and transport is arranged. What is the best nursing response?",
        options: [
          "Refuse flatly — the criteria are the criteria — and walk away",
          "Let her go to avoid conflict, and phone the CHPS nurse afterwards",
          "Explore the reasons behind the request respectfully, complete the remaining checks fast — teach-back and warmth demonstration today with the family present — and discharge the moment they are met, with the follow-up net in place",
          "Persuade her to stay two more weeks to be safe",
        ],
        correctIndex: 2,
        explanation:
          "The pressure behind an early request is usually real (family, transport, cost) and deserves respect. The senior move is to accelerate the readiness work rather than abandon it: same-day teach-back and warmth demonstration with the family included, then discharge on criteria with the net — summary, first visit, weighing schedule — properly laid. Blanket refusals and unchecked releases both fail the baby.",
        courseSlug: "advanced-maternal-newborn",
      },
    ],
    flashcards: [
      {
        topic: "Discharging the Vulnerable Newborn",
        front: "The five readiness doors for a vulnerable newborn's discharge?",
        back: "Medical stability, effective feeding with steady gain, warmth in open cot or KMC (not just incubator), maternal competence by teach-back, and a support net at home.",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        front: "Why teach-back rather than instruction alone?",
        back: "A nodding mother has told you nothing; a mother who lists the danger signs and demonstrates feeding in her own words has proved she carries the care home.",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        front: "What does the follow-up net look like?",
        back: "Discharge summary plus a call to the CHPS nurse; first home visit within days; regular weighing at the welfare clinic until good weight for age; defaulters traced by name.",
      },
      {
        topic: "Discharging the Vulnerable Newborn",
        front: "Which household members are taught before discharge, and why?",
        back: "The grandmother and father alongside the mother — the household's other voices decide the 2 a.m. decisions, and a blessing from them protects the feeding and warmth plan.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience",
        year: "2022",
        url: "https://www.who.int/publications/i/item/9789241506504",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations for Care of the Preterm or Low-Birth-Weight Infant",
        year: "2022",
      },
      {
        organization: "Ghana Health Service",
        title: "National Newborn Health Strategy and Action Plan",
        note: "National strategy including follow-up of low-birth-weight babies — verify current edition with the GHS.",
      },
    ],
  },
];
