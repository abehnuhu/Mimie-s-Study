// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 2 — Batch A (final semester)
// 19 lessons anchored to prisma/seed-data/anchors/y4s2-a.json
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Autonomous Practice",
    lessonTitle: "Autonomy and Its Limits",
    description:
      "You are months from being the registered midwife whose signature carries the decision. This lesson draws the line between the calls you own and the calls you share.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what professional autonomy means for a registered midwife in Ghana.",
      "Explain the difference between consultation, referral and practising outside your scope.",
      "Apply the normal-competent-documented test to real ward decisions.",
    ],
    tags: ["autonomy", "scope", "referral", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "For four years you have practised under someone else's licence. Soon the licence — and the decisions — are yours. Autonomy is the part of midwifery you dreamed about in year one: no more waiting for permission. It is also the part that keeps senior midwives awake, because every independent decision now lands on your name.\n\nThe good news is that the line is not a matter of feeling brave or timid. It is written into your scope of practice, your protocols and your competence — three fixed points you can check in seconds.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Autonomy means making decisions within your **scope of practice** and your level of training, then owning the outcomes. In Ghana, the registered midwife is an autonomous practitioner for normal pregnancy, labour, birth and the puerperium — you book healthy women, monitor them, conduct normal births, act according to standing protocols and refer when needed. The authority and the accountability arrive together; you cannot have one without the other.\n\nYour autonomy ends where the abnormal begins. When a woman's condition departs from normal — severe pre-eclampsia, obstructed labour, significant haemorrhage — the case belongs to a higher level of care. So do situations beyond your training or your facility's equipment. Distinguish **consultation** (you phone a senior, take advice, and usually keep the woman) from **referral** (care and responsibility transfer, in writing, with a call ahead). Whichever you choose, document what you saw, what you did and why.",
      },
      {
        type: "clinical_pearl",
        body: "Autonomy is not doing everything alone. It is knowing precisely which decisions are safely yours — and picking up the phone early for the ones that are not.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "It is 2am at a rural health centre. A first-time mother at term has been labouring well for six hours. Then you find her blood pressure is 160/110, she reports a severe headache, and her urine shows 2+ protein. The nearest doctor is forty minutes away, your standing protocol is in the folder beside you, and there is a vehicle with fuel outside.\n\nWhat is yours to decide here, and what is not?\n\nAnswer: Managing normal labour was your autonomous decision, and you made it well. A blood pressure of 160/110 with proteinuria and headache is severe pre-eclampsia — beyond a midwife's independent scope at any facility. Your decisions now are the ones your protocol gives you: position her on her left side, give the magnesium sulphate loading dose if your protocol includes it, alert the senior, and arrange urgent referral with a call ahead. Document the times and findings. The clinical decisions have moved up the chain — but recognising that, and acting fast, is exactly what your autonomy is for.",
      },
      {
        type: "memory_trick",
        body: "Three keys open the door of autonomy: the case is NORMAL, I am COMPETENT, the decision is DOCUMENTED. If any key is missing, the door stays shut — and your phone comes out.",
      },
      {
        type: "summary",
        body: "- Autonomy means deciding within your scope of practice and competence, then owning the outcome.\n- Consultation takes advice and usually keeps the woman; referral transfers care, in writing, with a call ahead.\n- The abnormal, the untrained and the unequipped all live above your line — escalate them.\n- A decision you cannot explain in your notes was never truly yours to make.",
      },
    ],
    questions: [
      {
        topic: "Professional Autonomy",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which statement best describes professional autonomy for a registered midwife?",
        options: [
          "Doing whatever the woman requests, because her wishes always come first",
          "Making and owning clinical decisions within your scope of practice and competence",
          "Working without ever seeking advice from senior colleagues",
          "Carrying out instructions from doctors without question",
        ],
        correctIndex: 1,
        explanation:
          "Autonomy joins authority to accountability: you decide within scope and competence, and you answer for the outcome. It never removes the woman's involvement, senior advice or your duty to refer.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Autonomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "At 34 weeks you find a blood pressure of 160/110 with 2+ proteinuria and headache. What does autonomy require of you?",
        options: [
          "Manage her alone to term, since she is your booked client",
          "Recheck at the next routine visit and note the reading",
          "Stabilise her per protocol and arrange urgent referral to a higher level of care",
          "Let the woman decide whether she wants referral",
        ],
        correctIndex: 2,
        explanation:
          "These findings define severe pre-eclampsia, which is outside independent midwifery scope: stabilise per protocol (left lateral, protocol drugs), alert the senior and refer urgently, documenting everything.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Autonomy",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You phone the regional hospital about a woman in early labour with mild anaemia, take their advice, and continue managing her yourself. What is this?",
        options: [
          "A consultation — advice taken, care retained",
          "A referral — responsibility now rests with the regional hospital",
          "A breach of scope requiring immediate transfer",
          "A second opinion, which must always end in transfer",
        ],
        correctIndex: 0,
        explanation:
          "Consultation seeks advice while you usually keep the woman and the responsibility. Referral formally transfers care and responsibility, in writing, with a call ahead.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Autonomous Practice",
        front: "What does professional autonomy mean for a registered midwife?",
        back: "Making and owning decisions within your scope of practice and competence — normal pregnancy, labour, birth and puerperium — and referring what falls outside them.",
      },
      {
        topic: "Autonomous Practice",
        front: "Consultation or referral — which is which?",
        back: "Consultation: you seek advice and usually keep the woman. Referral: care and responsibility transfer to a higher level, in writing, with a call ahead.",
      },
      {
        topic: "Autonomous Practice",
        front: "When does a midwife's autonomy end?",
        back: "When the case departs from normal, exceeds your training, or your facility cannot manage it — recognise, stabilise, refer, document.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "National regulatory source — verify current edition on the Council's publications.",
      },
      {
        organization: "International Confederation of Midwives",
        title: "Essential Competencies for Midwifery Practice",
        year: "2019",
        note: "Global scope-of-practice standard, updated 2021 — verify current version.",
      },
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Autonomous Practice",
    lessonTitle: "Managing a Caseload",
    description:
      "One midwife, dozens of mothers, one small diary. The quiet organisation that keeps gentle care safe.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe what caseload midwifery is and what the evidence says about it.",
      "Explain how to prioritise and follow up women across a whole caseload.",
      "Apply a triage approach to decide who must be seen today.",
    ],
    tags: ["caseload", "organisation", "continuity", "prioritisation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A caseload is a group of mothers who are yours — not the facility's, yours. You follow the same women from booking to the last postnatal visit. Wherever midwives work like this, the research is remarkably consistent: women feel known and safe, and fewer of them need interventions. The catch is simple. Continuity lives or dies on organisation, and organisation lives or dies on you.\n\nNobody can hold forty pregnancies in their head safely. The midwives who make caseloads look effortless are the ones with systems: a diary, a register, a defaulter list and a rule for deciding who is seen today and who can wait.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start with the spine of the system. A **diary** maps every planned contact to a date. A **register** holds each woman's key facts — gestation, risk flags, next appointment — so any colleague could step in tomorrow. A **defaulter list** names every woman who missed a visit and has not yet been traced. In many Ghanaian settings this is paper and pencil; the medium matters far less than the discipline.\n\nNow the daily judgement. Each morning, sort your caseload by urgency, not by appointment order: the woman with a lagging fundal height, the haemoglobin trending downwards, the grand multipara, the mother near her estimated date with no transport plan — these move to the top. High-risk women get tighter intervals; healthy mothers hold the routine schedule. Finish every day by asking: who did I not see who should have been seen, and who is chasing them?",
      },
      {
        type: "clinical_pearl",
        body: "A missed visit is not a failure — it is a signal. It only becomes a failure on the day nobody traces it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the midwife at a health centre with 42 women in your caseload. On Monday you review the register before clinic: one woman at 34 weeks has missed two visits, her last haemoglobin was 8.4 g/dL, and her fundal height was lagging by 4 cm; another woman at 38 weeks has attended perfectly but has no transport plan for the night the baby decides to come.\n\nWith limited hours this week, who comes first, and what do you arrange for the other?\n\nAnswer: The 34-week woman with a lagging fundus, falling haemoglobin and two missed visits is the priority — trace her today, because growth faltering plus anaemia at 34 weeks is a baby at risk and there is still time to act. Send word through the community health nurse or a phone call and see her wherever she can be found. The 38-week woman is healthy but needs her birth plan finished: agree the transport and the midnight decision-maker today, by phone if necessary. Both are caseload care — one is clinical risk, the other is logistics risk.",
      },
      {
        type: "memory_trick",
        body: "Run your caseload on a DREAM: Diary of contacts, Register of risk flags, Escalate the high-risk, Appointments tracked daily, Missed visits chased until found.",
      },
      {
        type: "summary",
        body: "- Caseload midwifery means following the same women from booking to postnatal care — evidence links it to safer, kinder births.\n- A diary, a register and a defaulter list hold the system together.\n- Triage each day by risk, not by appointment order — faltering growth and falling haemoglobin jump the queue.\n- The caseload is only as safe as its follow-up: every missed visit gets traced.",
      },
    ],
    questions: [
      {
        topic: "Caseload Management",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What defines caseload midwifery?",
        options: [
          "The midwife covers whichever women happen to attend her shift",
          "A known group of women is followed by the same midwife or small team from booking to postnatal care",
          "The facility's entire ANC register is shared equally among all staff",
          "Only high-risk women are allocated to named midwives",
        ],
        correctIndex: 1,
        explanation:
          "Caseload care means a defined group of women known to and followed by one midwife (or a small team) across pregnancy, birth and the postnatal period — the essence of continuity.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Caseload Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which woman should head today's caseload triage list?",
        options: [
          "A healthy woman at 12 weeks booked for her routine first visit",
          "A woman at 28 weeks whose fundal height has tracked her dates all along",
          "A woman at 30 weeks who missed one visit but has no risk flags",
          "A woman at 34 weeks with fundal height lagging 4 cm and haemoglobin falling from 9.6 to 8.4 g/dL",
        ],
        correctIndex: 3,
        explanation:
          "Combined growth faltering and a falling haemoglobin at 34 weeks is the most time-sensitive problem — it threatens the fetus now and there is still a window to intervene. The healthy routine visits are important but can safely hold their dates.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Caseload Management",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Cochrane reviews, midwife-led continuity models of care, compared with other models, show which pattern of results?",
        options: [
          "More interventions with equal satisfaction",
          "No measurable difference in outcomes",
          "More spontaneous vaginal births and fewer interventions",
          "Worse perinatal outcomes but cheaper care",
        ],
        correctIndex: 2,
        explanation:
          "The landmark Cochrane review (Sandall et al.) found women in midwife-led continuity models were more likely to have a spontaneous vaginal birth, less likely to experience interventions, and more satisfied with their care.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Caseload Management",
        front: "What is a caseload in midwifery?",
        back: "A defined group of women followed by the same midwife (or small team) from booking through birth to the final postnatal visit.",
      },
      {
        topic: "Caseload Management",
        front: "What does the Cochrane evidence say about midwife-led continuity of care?",
        back: "Compared with other models: more spontaneous vaginal births, fewer interventions, and women report better experiences.",
      },
      {
        topic: "Caseload Management",
        front: "What three tools hold a caseload together?",
        back: "A diary of planned contacts, a register of risk flags, and a defaulter list that is chased until every missed visit is traced.",
      },
    ],
    sources: [
      {
        organization: "Cochrane Library",
        title: "Midwife-led continuity models versus other models of care for childbearing women (Sandall et al.)",
        year: "2016",
        url: "https://doi.org/10.1002/14651858.CD004667.pub5",
      },
      {
        organization: "UNFPA, ICM and WHO",
        title: "State of the World's Midwifery 2021",
        year: "2021",
        url: "https://www.unfpa.org/publications/state-worlds-midwifery-2021",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Autonomous Practice",
    lessonTitle: "Solo Decisions and Safe Referral",
    description:
      "3am, alone, the senior far away — a calm framework for the loneliest moments of practice, and the referral thinking that backs you.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe a structured approach for making clinical decisions alone.",
      "Explain the three delays and how good referral practice attacks each one.",
      "Apply SBAR to a call-ahead referral that keeps a mother safe.",
    ],
    tags: ["decision-making", "referral", "sbar", "three delays"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every midwife has a moment like this: night duty, a compound an hour from the district hospital, and something about the woman in front of you is not right. The senior midwife is reachable but not present. The decision is yours, and it is the kind no lecture can fully prepare you for — but a framework can carry most of the weight.\n\nSolo decisions run on three habits: gather your observations completely, compare them honestly with the normal, and let the size of the gap decide. Referral thinking is the second half of the same skill — because deciding is only useful if the mother actually reaches help in time.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Structure replaces panic. Look at the whole picture: observations, labour progress, the fetal heart, how she looks — and just as importantly, her trend. A pulse of 96 that was 78 two hours ago is not a pulse of 96. Compare with your norms and classify her into one of three boxes: normal, abnormal, or deteriorating. If she sits in either of the last two — or you are genuinely unsure — act, and act usually means phone a senior and prepare referral. When you find yourself debating whether to refer, treat the debate itself as information.\n\nReferral thinking is really a fight against the **three delays**: delay in deciding to seek care, delay in reaching care, and delay in receiving it. You attack the first by deciding early and by teaching families the danger signs in advance; the second by settling transport and money before labour; the third by calling ahead with **SBAR** — Situation, Background, Assessment, Recommendation — so the receiving team is ready the moment she arrives. Stabilise before she travels: fluids running, positioned safely, uterotonics given, and never send an unstable mother alone.",
      },
      {
        type: "clinical_pearl",
        body: "Never put a shocked woman in a bouncing truck. Stabilise first, then transfer — and telephone the receiving facility before the wheels move.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 3am in a CHPS compound, a second-time mother has been fully dilated and pushing for nearly two hours. Contractions have grown weaker, the head has stopped descending, you can feel marked caput and moulding, and the fetal heart has climbed to 168 beats per minute. The referral hospital is forty-five minutes away and there is a district vehicle available.\n\nWhat is your sequence of actions?\n\nAnswer: This is obstructed labour with fetal compromise — waiting is not the treatment, and nothing should be given to strengthen contractions. Explain to the woman and her family what is happening so they move with you, then begin the referral immediately and make the call-ahead handover in SBAR form: a second-stage arrest with moulding and a tachycardic fetal heart, so the receiving team can prepare theatre. Position her on her side, keep monitoring the fetal heart until transfer, and send her with a written note and an escort. Stopping pushing and starting referral is a solo decision — and exactly the right one.",
      },
      {
        type: "memory_trick",
        body: "SBAR in sixty seconds: Situation — who she is and what is wrong now; Background — the story so far; Assessment — your findings and your worry; Recommendation — what you need and when.",
      },
      {
        type: "summary",
        body: "- Gather the full picture, watch the trend, and let the gap from normal decide.\n- Classify every woman as normal, abnormal or deteriorating — and let genuine doubt push you to the phone.\n- Fight the three delays: teach danger signs, settle transport early, call ahead with SBAR.\n- Stabilise before transfer, and never send an unstable mother alone.",
      },
    ],
    questions: [
      {
        topic: "Solo Decisions and Referral",
        type: "MCQ",
        difficulty: "Easy",
        stem: "You are alone and unsure whether a woman needs referral. What is the safest response?",
        options: [
          "Phone a senior and discuss the case now",
          "Wait one hour and reassess, to avoid over-referring",
          "Ask the family to decide, since they know her best",
          "Document your uncertainty and continue observations quietly",
        ],
        correctIndex: 0,
        explanation:
          "Uncertainty is itself a warning sign. A phone consultation costs minutes and nothing else; delay in deciding is the first of the three delays and the one you control most easily.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Solo Decisions and Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the three delays model, what are the three delays?",
        options: [
          "Delay in diagnosis, delay in treatment, delay in discharge",
          "Delay in booking, delay in ANC attendance, delay in delivery",
          "Delay in deciding to seek care, delay in reaching care, delay in receiving care",
          "Delay in referral, delay in transport, delay in surgery",
        ],
        correctIndex: 2,
        explanation:
          "The classic Thaddeus and Maine model names delays in deciding to seek care, in reaching a facility, and in receiving adequate care once there — and your practice can attack all three.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Solo Decisions and Referral",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which practice best attacks the third delay?",
        options: [
          "Sending the woman with a family member who knows her history",
          "Copying all notes into the referral letter after she departs",
          "Giving a dose of antibiotics before she leaves",
          "Calling the receiving facility ahead with an SBAR handover so the team is ready",
        ],
        correctIndex: 3,
        explanation:
          "Delay in receiving care shrinks when the receiving team knows she is coming, what is wrong, and what has been done — a call-ahead SBAR handover means treatment starts at the door, not after reassessment from zero.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Solo Decisions and Referral",
        front: "Name the three boxes every woman is sorted into on a solo assessment.",
        back: "Normal, abnormal, or deteriorating — and genuine uncertainty is treated as abnormal until proven otherwise.",
      },
      {
        topic: "Solo Decisions and Referral",
        front: "What does SBAR stand for?",
        back: "Situation, Background, Assessment, Recommendation — the spine of a call-ahead referral handover.",
      },
      {
        topic: "Solo Decisions and Referral",
        front: "What is the iron rule of transfer?",
        back: "Stabilise before the journey — never send a shocked or unstable mother in a vehicle, unescorted and unannounced.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "Pregnancy, Childbirth, Postpartum and Newborn Care: A Guide for Essential Practice",
        year: "2015",
        url: "https://www.who.int/publications/i/item/9789241549356",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Professional Communication",
    lessonTitle: "Communication as a Registered Midwife",
    description:
      "Now your words carry professional weight — with mothers, colleagues and the whole community watching.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the core habits of professional communication with women, colleagues and the public.",
      "Explain closed-loop communication and the SPIKES approach to difficult news.",
      "Apply speaking-up and teach-back skills in ward scenarios.",
    ],
    tags: ["communication", "professional", "sbar", "spikes", "teach-back"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "As a registered midwife, your voice changes register. With mothers, plain language and genuine listening turn frightened women into informed partners. With colleagues, precise words carry drug doses and clinical decisions from shift to shift, ward to ward, phone to phone. With the public — including everything you post online — you are now the face of the profession itself.\n\nCommunication failures sit near the root of a large share of clinical errors. The habits in this lesson are not soft skills bolted onto real midwifery; they are clinical skills with the same standing as palpation.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "With women, choose plain words and check understanding with **teach-back** — ask her to tell you the plan in her own words, and listen for the gaps. Use a proper interpreter for languages you do not share; a child should never translate medical news. When news is hard, **SPIKES** steadies you: set the Setting, ask what she already Perceives, seek an Invitation, give Knowledge in small pieces, respond with Empathy, then agree a Strategy.\n\nWith colleagues, close the loop: repeat back any verbal order in your own words — 'so that is 10 units of oxytocin in one litre, running over four hours' — and wait for confirmation before acting. If an instruction seems wrong for the woman in front of you, speaking up is a professional duty, done respectfully: state the concern, then the fact, then your suggestion. With the public and on social media, one rule covers it all: no detail that could identify a mother or baby, no matter how kind the intention.",
      },
      {
        type: "clinical_pearl",
        body: "Errors die in the echo. Repeat back every verbal instruction before acting on it — the thirty seconds it costs is the cheapest safety equipment you own.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A doctor phones the ward at night and asks you to 'give the ergometrine now' for a woman who is bleeding. As you reach for the ampoule you remember her blood pressure on the last round was 170/110 — and ergometrine is contraindicated in severe hypertension.\n\nWhat do you say, and why?\n\nAnswer: Repeat back the order first — 'ergometrine for the woman in bed four?' — then bring your observation into the conversation: her last recorded pressure was 170/110, and your protocol lists ergometrine as contraindicated at this level. Ask whether he would prefer oxytocin, and document the conversation, the times and the final order. Speaking up is not insubordination; it is the safety net that protects the woman, the doctor and you. The closed loop catches drug errors before they reach the vein.",
      },
      {
        type: "memory_trick",
        body: "For hard news, walk the SPIKES: Setting private, Perception checked, Invitation given, Knowledge in pieces, Empathy shown, Strategy agreed.",
      },
      {
        type: "summary",
        body: "- Plain language plus teach-back turns instructions into shared understanding.\n- SPIKES gives difficult news a structure; never let a child interpret.\n- Repeat back every verbal order, and speak up when an order does not fit the woman in front of you.\n- Public and online communication must never identify a mother or baby.",
      },
    ],
    questions: [
      {
        topic: "Professional Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A mother is to continue iron tablets at home. Which response demonstrates teach-back?",
        options: [
          "You understood, didn't you?",
          "I've explained everything clearly, yes?",
          "Remember what I said about the tablets.",
          "Tell me in your own words how you will take the tablets.",
        ],
        correctIndex: 3,
        explanation:
          "Teach-back asks the woman to restate the plan in her own words; the closed questions in the other options measure politeness, not understanding.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Communication",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the SPIKES approach to breaking bad news, what does the E represent?",
        options: [
          "Explain the full medical record in detail",
          "Empathy — acknowledging the emotion in the room",
          "Escalate to a senior clinician",
          "Examine the patient before continuing",
        ],
        correctIndex: 1,
        explanation:
          "Empathy means responding to what the woman is feeling before pressing on with information — the step most often skipped and most needed when news is hard.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Communication",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A doctor phones a verbal drug order to the ward. Your first response is to…",
        options: [
          "Write it down quietly and follow it exactly",
          "Ask a colleague to overhear the call",
          "Read it back in your own words and wait for confirmation",
          "Check the prescription later on the chart",
        ],
        correctIndex: 2,
        explanation:
          "Closed-loop communication means reading the order back in your own words and waiting for confirmation — most verbal-order errors are caught precisely here.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Professional Communication",
        front: "What is closed-loop communication?",
        back: "Repeating back an instruction in your own words and waiting for confirmation before acting — errors are caught in the echo.",
      },
      {
        topic: "Professional Communication",
        front: "What are the six steps of SPIKES?",
        back: "Setting, Perception, Invitation, Knowledge, Empathy, Strategy — a structure for breaking bad news.",
      },
      {
        topic: "Professional Communication",
        front: "Give one rule for midwifery and social media.",
        back: "No detail that could identify a mother or baby — no photos, no stories, however kind the intention.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "National regulatory source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Professional Communication",
    lessonTitle: "Documentation That Defends Care",
    description:
      "Final-level record keeping — the notes that prove the standard of your care long after your memory has faded.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe what makes a record contemporaneous, factual and defensible.",
      "Explain how to correct errors and how to document advice and refusals.",
      "Apply a charting standard to an ordinary ward shift.",
    ],
    tags: ["documentation", "standards", "record keeping", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Your notes outlive your shift. Tomorrow's midwife reads them, the receiving facility reads them, an audit team may read them, and — though it is rare — a courtroom may read them years after your memory has faded to nothing. A record is not an administrative chore after the care; in law, it is part of the care.\n\nThe standard is simpler than students fear. Write at the time or as near it as possible; write what you observed, not what you concluded; write what you told the woman and what she decided. If it is not written down, the world's version of events is that it was not done.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Contemporaneous means written at the bedside or immediately after — if a delay is unavoidable, record the actual time of events and label the entry late. Objective means measurable: 'fundus 2 cm above the umbilicus, well contracted, lochia moderate' says everything; 'seems fine' says nothing. Chart the negative space too — the advice you gave, the refusal you respected, the senior you called at 02:10 and what was advised. Those entries are how a record defends you.\n\nCorrections have one legal shape: a single line through the error, leaving it readable, with your initials, the date and — if the reason is not obvious — a brief note. Never overwrite, never erase, never remove a page. Sign with your name and designation, and countersign student entries within your accountability. When something goes wrong, write the incident factually — times, observations, actions, people — without speculation about blame.",
      },
      {
        type: "clinical_pearl",
        body: "Write every note for three readers at once: the next midwife, the regulator, and you in five years' time — because all three may open it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A stillbirth occurred at a district hospital two years ago. The grieving family claims the midwife ignored warning signs. Her notes for that night read: '22:40 fetal heart 142. 23:15 called Dr Mensah re reduced movements, FH 132, advised CTG. 23:40 CTG performed, Dr Mensah informed, decision for emergency delivery. 00:05 theatre. 00:22 baby delivered, no signs of life.'\n\nWhy do these notes protect the midwife?\n\nAnswer: They show a contemporaneous chain — timed observations, a rising concern, an escalation with the advice received, and the times of decisions and actions. Nothing is claimed beyond what was seen and done, and every step follows a recognisable standard. Two years on, her memory would be worth little, but the record speaks for her. This is the sense in which documentation is defensive: it defends good care by showing it.",
      },
      {
        type: "memory_trick",
        body: "Chart to FACT: First-hand (what you saw yourself), Accurate (numbers, not adjectives), Current (at the bedside, or labelled late), Timed (every entry has a clock).",
      },
      {
        type: "summary",
        body: "- Records are part of the care, not paperwork after it: contemporaneous, objective, signed.\n- Chart observations, actions, advice given and refusals respected — the negative space defends you.\n- Correct with a single dated line and initials; never overwrite or remove.\n- If it is not written down, it was not done.",
      },
    ],
    questions: [
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Easy",
        stem: "'Fundus well contracted, lochia moderate, pad one-quarter soaked this hour.' This entry is strong because it is…",
        options: [
          "Objective and measurable",
          "Detailed about the midwife's feelings",
          "Written in the passive voice",
          "A summary of the whole shift",
        ],
        correctIndex: 0,
        explanation:
          "Good entries record what was observed in measurable terms. Adjectives like 'fine' or 'stable' carry no information the next reader can act on or a court can rely on.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You realise at 20:00 that you forgot to chart the 14:00 observation, which you remember clearly. The correct action is to…",
        options: [
          "Backdate the entry to 14:00 so the record looks continuous",
          "Leave it out — one missing entry rarely matters",
          "Ask a colleague who was present to write it in as hers",
          "Write the 14:00 values now, label the entry as late, and record the time of writing",
        ],
        correctIndex: 3,
        explanation:
          "Honesty preserves the record's value: enter the true values, mark the entry as written late, and give both times. Backdating destroys the credibility of everything else in the notes.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Documentation",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A woman declines the recommended uterotonic after birth. What belongs in the record?",
        options: [
          "Nothing — refusals are her private business",
          "The refusal, the advice you gave about the risks, and the observations that followed",
          "A note that she was 'difficult and non-compliant'",
          "Only the senior midwife's opinion of her decision",
        ],
        correctIndex: 1,
        explanation:
          "Charting the refusal, your advice and subsequent observations shows that good care was offered and respected — and that you watched over her afterwards. Judgemental language has no place in records.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Documentation",
        front: "What does contemporaneous mean in record keeping?",
        back: "Written at the time of the event or as soon as possible after; if delayed, record the true event times and label the entry as late.",
      },
      {
        topic: "Documentation",
        front: "How is a charting error legally corrected?",
        back: "A single line through the error leaving it readable, dated and initialled — never overwritten, erased or removed.",
      },
      {
        topic: "Documentation",
        front: "Why record advice given and refusals?",
        back: "They show the standard of care offered and respected — the negative space that defends you when memory cannot.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "National regulatory source — verify current edition.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Professional Communication",
    lessonTitle: "Teamwork and Interprofessional Practice",
    description:
      "Doctors, laboratory staff, pharmacists, porters, cleaners — one team around every mother, and your equal place in it.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the features that make a clinical team function.",
      "Explain closed-loop handover, role clarity and graded assertiveness.",
      "Apply escalation and conflict-handling skills across professions.",
    ],
    tags: ["teamwork", "collaboration", "speaking up", "interprofessional"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "No mother is delivered by one professional. Behind every birth stand midwives, doctors, anaesthetists, laboratory staff, pharmacists, porters, records staff and cleaners — and each of them can catch something the rest miss. Year four is when you stop being a visitor in this team and start being a permanent, equal member of it.\n\nWHO has promoted interprofessional collaboration for decades because the evidence is stubborn: where teams communicate well, mothers die less. Where hierarchy silences the junior voice at the wrong moment, mothers die more.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Functional teams share three things. **Role clarity**: everyone knows who leads this emergency and who does what, decided in advance where possible. **Closed loops**: handovers and verbal orders are repeated back and confirmed, in a structure like SBAR. **Psychological safety**: the lowest-ranking member can say 'I am worried' without fear — which is why graded assertiveness is taught: state concern, state the fact, state the safety issue, then your suggestion. If the first words do not land, the language climbs step by step.\n\nRespect runs in every direction. The laboratory scientist who phones a critical haemoglobin, the porter who reports a wet bed under a sleeping mother, the cleaner who notices she has not stirred — all are part of the early warning system. Conflict is inevitable; handle the problem, not the person, take it away from the bedside, and escalate through proper channels when it will not resolve. The mother is never a spectator to your disagreements.",
      },
      {
        type: "clinical_pearl",
        body: "The porter who says 'the bed is wet again' may be the first to detect a postpartum haemorrhage. Good teams listen at every level — great ones say thank you.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "During a busy night, a doctor is writing notes at the desk while you, the midwife, notice that the woman who delivered twenty minutes ago has soaked a second pad and looks pale. The doctor has not turned around.\n\nWhat do you say — and how?\n\nAnswer: You speak directly and immediately, with facts rather than criticism: 'Doctor, I am concerned about bed three — she has soaked two pads in twenty minutes and her pulse is 110.' This is graded assertiveness at the concern level, delivered loudly enough to interrupt the documentation, because postpartum haemorrhage is a disease of minutes and role clarity now passes to whoever leads the resuscitation. Rub the uterus, call for help, get the second line running. The note-writing can wait; the bleeding cannot. A team that resents being interrupted for this is not yet a team — and a doctor who is interrupted for it once does not resent it the second time.",
      },
      {
        type: "memory_trick",
        body: "Escalate in steps: 'I'm CONCERNED… I'm UNCOMFORTABLE… this is a SAFETY issue' — your words climb until someone acts.",
      },
      {
        type: "summary",
        body: "- Teams run on role clarity, closed-loop communication and psychological safety.\n- Graded assertiveness lets the most junior member stop an error — concern, fact, safety, suggestion.\n- Every profession, porters and cleaners included, is part of the early warning system.\n- Handle conflict with the problem, not the person — and never in front of the mother.",
      },
    ],
    questions: [
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is the key feature of psychological safety in a clinical team?",
        options: [
          "Everyone agrees with the most senior person",
          "Junior staff are protected from difficult cases",
          "Any member can raise a concern without fear of ridicule",
          "Conflict is forbidden and suppressed",
        ],
        correctIndex: 2,
        explanation:
          "Psychological safety means the team hears its warnings regardless of who speaks them. Silence from the person who noticed something is how errors become tragedies.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which sequence describes graded assertiveness?",
        options: [
          "State concern, state the fact, state the safety issue, state your suggestion",
          "Ask permission, wait, report to matron, file a complaint",
          "Whisper to a colleague, document quietly, raise it at the next meeting",
          "Repeat the order, follow it, report the outcome, request review",
        ],
        correctIndex: 0,
        explanation:
          "Graded assertiveness starts gently and rises in urgency — concern, fact, safety, suggestion — so you can be heard without being rude, and be insistent without being aggressive.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Teamwork",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A porter tells you a postnatal mother's bed is wet again. The best response is to…",
        options: [
          "Ask housekeeping to change the linen quietly",
          "Go and assess the woman now — wet beds can mean bleeding",
          "Note it for review on the next round",
          "Ask her to use the call bell when it happens again",
        ],
        correctIndex: 1,
        explanation:
          "A repeatedly soaked bed after birth may be the first sign of postpartum haemorrhage or of the woman being too weak to call. Every member of the team is part of the early warning system — act on their report.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Teamwork",
        front: "What three features make a clinical team function?",
        back: "Role clarity (who leads, who does what), closed-loop communication, and psychological safety — anyone can speak up.",
      },
      {
        topic: "Teamwork",
        front: "What is graded assertiveness?",
        back: "A stepwise escalation of language — concern, fact, safety issue, suggestion — used until someone acts.",
      },
      {
        topic: "Teamwork",
        front: "Why does WHO promote interprofessional collaboration?",
        back: "Evidence links better team communication to fewer maternal deaths; hierarchy and silence cost lives.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Framework for Action on Interprofessional Education and Collaborative Practice",
        year: "2010",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-professional Edition",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Your Professional Growth",
    lessonTitle: "Professional Development: The Lifelong Path",
    description:
      "Your licence needs feeding — courses, reflection and the CPD habit that keeps your practice alive long after graduation.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the CPD cycle and the forms continuing education takes.",
      "Explain the regulatory side of CPD for Ghanaian midwives.",
      "Apply a learning-needs analysis to your own practice.",
    ],
    tags: ["cpd", "development", "lifelong learning", "portfolio"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Graduation is not the finish line of learning — it is the transfer from someone else's curriculum to your own. Guidelines change, evidence moves, and the midwife who stopped studying the day she registered starts practising history rather than midwifery. Continuing professional development (CPD) is how you stay current on purpose instead of by accident.\n\nIn Ghana, CPD is also a regulatory matter: the Nursing and Midwifery Council expects evidence of continuing education for licence renewal. The details of credit requirements evolve, so always check the current requirements rather than relying on hearsay. The habit, though, is yours to build now, while you are still a student.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "CPD is a cycle, not a certificate collection. Reflect on practice and spot the gap; plan how to close it; do the learning; then evaluate — did it actually change what you do? Any activity can count if it follows that arc: in-service training, workshops, conferences, online modules, journal clubs, guideline reading, even structured reflection on a difficult case. Keep a portfolio: certificates, reflections, and a short note after each activity saying what you will do differently.\n\nChoose learning where your own women feel it. A district midwife who notices newborns struggling at birth and takes a resuscitation update such as Helping Babies Breathe has done more for her community than one who collects random certificates. Add mentorship — a senior you can call, and later a student you can guide — and a modest reading habit: WHO guidelines and one good journal, skimmed regularly, beat panic-reading before an interview.",
      },
      {
        type: "clinical_pearl",
        body: "Keep a 'questions I couldn't answer' list at work. Every entry is your next CPD topic, chosen by the women you serve rather than by chance.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "After two years at a district hospital, a midwife notices that resuscitations at births are hesitant and disorganised — she herself freezes when a baby does not cry. She enrols in a two-day newborn resuscitation course, practises with the mannequin until the sequence is reflex, then runs a lunchtime drill for her colleagues. Six months later her unit's resuscitations are calm, and two babies who once might have died go home breastfeeding.\n\nWhat makes this a CPD cycle rather than simply attending a course?\n\nAnswer: She identified the learning need from real practice, planned a targeted activity, and — the step most people skip — evaluated the outcome as a change in her unit's actual performance. The certificate marked the middle of the process, not the end. Her portfolio records the need, the course, the drills and the outcome: exactly the evidence of continuing development her regulator and any future employer want to see.",
      },
      {
        type: "memory_trick",
        body: "The CPD wheel: Reflect, Plan, Learn, Apply, Evaluate — then roll it again. A certificate is only the spokes; the wheel turns on what changed.",
      },
      {
        type: "summary",
        body: "- CPD is a cycle: reflect on gaps, plan, learn, apply, evaluate — not a certificate collection.\n- Ghana's Nursing and Midwifery Council expects documented CPD for licence renewal — check current requirements.\n- Any structured activity can count; target your own caseload's real needs.\n- Keep a portfolio with reflections and the change each activity produced.",
      },
    ],
    questions: [
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What distinguishes CPD from simply collecting certificates?",
        options: [
          "The number of courses attended each year",
          "A cycle of reflection, planned learning, application and evaluation of change",
          "Attendance at international conferences only",
          "Courses approved by your employer",
        ],
        correctIndex: 1,
        explanation:
          "The unit of CPD is the changed practice, not the attended course: need identified, learning done, and a real difference evaluated in your work.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A Ghanaian midwife wants to know how many CPD credits she needs for licence renewal. The correct advice is to…",
        options: [
          "Ask the most senior colleague on the ward",
          "Assume the rules from her training year still apply",
          "Copy whatever requirement another health worker mentions online",
          "Check the current requirement directly with the Nursing and Midwifery Council of Ghana",
        ],
        correctIndex: 3,
        explanation:
          "CPD requirements are set by the regulator and are revised over time. The Council itself is the only reliable source for the current credit requirement and documentation rules.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The 'evaluate' step of the CPD cycle asks…",
        options: [
          "Was the certificate filed correctly?",
          "Did the course have good materials and catering?",
          "Did my practice actually change, and did it serve women better?",
          "How many contact hours were completed?",
        ],
        correctIndex: 2,
        explanation:
          "Evaluation measures the difference the learning made — to your practice and to the women in your care. Contact hours and certificates say nothing about that.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Professional Development",
        front: "Name the steps of the CPD cycle.",
        back: "Reflect on practice gaps, plan the learning, do it, apply it, evaluate the change — then repeat.",
      },
      {
        topic: "Professional Development",
        front: "Why does a Ghanaian midwife need a CPD portfolio?",
        back: "The Nursing and Midwifery Council expects evidence of continuing education for licence renewal; records must show what changed, not just what was attended.",
      },
      {
        topic: "Professional Development",
        front: "What is the best source of CPD topics?",
        back: "Your own caseload — the questions you couldn't answer and the outcomes you wish were better.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Continuing Professional Development and Licence Renewal Requirements",
        note: "Regulatory requirement — always verify the current credit requirements with the Council.",
      },
      {
        organization: "UNFPA, ICM and WHO",
        title: "State of the World's Midwifery 2021",
        year: "2021",
        url: "https://www.unfpa.org/publications/state-worlds-midwifery-2021",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-practice",
    moduleTitle: "Your Professional Growth",
    lessonTitle: "Becoming the Midwife You Set Out to Be",
    description:
      "The last stretch of the journey — reflecting on who you were in year one, and choosing who you will be on registration day.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the transition from student to registered midwife and its emotional demands.",
      "Explain the habits that protect resilience and identity in the first years.",
      "Apply a personal values review to plan your growth.",
    ],
    tags: ["reflection", "identity", "resilience", "transition to practice"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Look back for a moment. Year one: the nervous first day, the first time you felt a baby kick under your hand, the first night shift you survived. Year four: you have caught babies, held mothers through loss, and earned the right to say 'I am almost a midwife'. The person registering at the end of this semester is not the person who started — but the values that brought you here are still in there.\n\nThis lesson is deliberately quieter than the others. It is about finishing well: understanding the transition ahead, protecting the midwife you are becoming, and writing the next chapter on purpose.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Becoming registered is a role transition, and every role transition has weather. New midwives commonly feel like impostors for the first months — deciding alone what they once decided under supervision. Almost everyone feels it, and it fades with supported experience, not with severity. What protects the transition is structure: use debriefings after hard cases, take supervision seriously, build a peer circle you can phone at 2am, and grieve the losses properly rather than stacking them.\n\nYour identity needs maintenance like anything else you value. Guard sleep and time off as fiercely as you guard clinical standards — a rested midwife is a safer one, and burnout is an occupational hazard, not a personal weakness. Revisit your values each year: what kind of midwife do the women of your district deserve? Keep the answer to three words — say, competent, kind, courageous — and let it steer your choices among career paths, whether clinical, educational, managerial or research.",
      },
      {
        type: "clinical_pearl",
        body: "You cannot pour from an empty calabash. Rest, debrief and friendship are professional equipment, not indulgences.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two months into her first posting, a new midwife has a traumatic night — a stillbirth followed by a haemorrhage. The next day she finds herself crying in the store room between rounds, wondering whether she was ever cut out for this. A senior finds her there and says quietly, 'My second year nearly ended me too. Come and sit with the others.'\n\nWhat is happening, and what does a healthy response look like?\n\nAnswer: This is normal transition shock, arriving in the months when responsibility is new and the coping muscles are still building — not proof of being unsuitable. The healthy path is exactly what the senior offered: debrief the cases formally, talk with peers and supervisors instead of isolating, and keep rest and boundaries deliberate while the identity settles. Unhealthy would be hiding it and soldiering on until the armour cracks months later. The profession keeps its midwives through community and honest reflection — and one day soon she will be the senior saying those words in a store room doorway.",
      },
      {
        type: "memory_trick",
        body: "Be a midwife with HEAD, HEART and HANDS: the knowledge, the compassion, the skill — and check all three are still growing every year.",
      },
      {
        type: "summary",
        body: "- Imposter feelings in the first months of practice are normal and fade with supported experience.\n- Structure protects you: debriefs, supervision, a 2am peer circle, real rest.\n- Burnout is an occupational hazard, not weakness — guard sleep like a clinical standard.\n- Revisit your three-word values yearly and let them steer your career choices.",
      },
    ],
    questions: [
      {
        topic: "Professional Identity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A newly registered midwife feels she is 'pretending' and will soon be exposed. In the first months of practice this feeling is…",
        options: [
          "A sign she should leave the profession",
          "Best handled by hiding it from colleagues",
          "Caused only by genuinely inadequate training",
          "A common part of role transition that fades with supported experience",
        ],
        correctIndex: 3,
        explanation:
          "Imposter feelings are a well-recognised feature of the student-to-practitioner transition; they settle with debriefing, supervision and supported experience — not with silence.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Identity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which combination best protects a new midwife's resilience?",
        options: [
          "Structured debriefs, supervision, peer support and protected rest",
          "Longer hours to build confidence quickly",
          "Avoiding difficult cases until she feels ready",
          "Keeping feelings private to appear professional",
        ],
        correctIndex: 0,
        explanation:
          "Resilience is built by processing hard experiences with support and recovering properly between them. Avoidance and overwork both delay the transition and deepen distress.",
        courseSlug: "midwifery-practice",
      },
      {
        topic: "Professional Identity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The healthiest response to a traumatic shift is to…",
        options: [
          "Take several weeks off immediately, every time",
          "Compare yourself with colleagues who coped better",
          "Debrief the case, seek peer and supervisor support, and monitor your recovery",
          "Move to a different ward before attachments form",
        ],
        correctIndex: 2,
        explanation:
          "Debriefing, support and self-monitoring process the event and keep you growing through it. Isolation and comparison breed shame; repeated flight never lets the coping muscles build.",
        courseSlug: "midwifery-practice",
      },
    ],
    flashcards: [
      {
        topic: "Professional Identity",
        front: "What is role transition shock in new midwives?",
        back: "The normal early months of feeling like an impostor when decisions become yours alone; it fades with supervision, debriefing and peer support.",
      },
      {
        topic: "Professional Identity",
        front: "Give four protections for midwifery wellbeing.",
        back: "Formal debriefs after hard cases, real supervision, a peer you can call at 2am, and protected sleep and time off.",
      },
      {
        topic: "Professional Identity",
        front: "Why frame your professional values in three words?",
        back: "A short, memorable compass for yearly reflection and career choices — the kind of midwife your district deserves.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Midwives' Voices, Midwives' Realities: Findings from a Global Consultation on Providing Quality of Care by Midwives",
        year: "2016",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "National regulatory source — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Your Research Project",
    lessonTitle: "Choosing a Research Question That Matters",
    description:
      "The single decision that shapes your whole project — finding the question worth a semester of your life.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe how clinical puzzles become research questions.",
      "Explain the FINER criteria and PICO/PICo framing.",
      "Apply narrowing techniques to a broad topic.",
    ],
    tags: ["research question", "project", "finer", "pico"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Every good project begins with a question that itches. You noticed something on the ward — mothers stopping exclusive breastfeeding by week two, women declining HIV testing, grandmothers advising against something you taught — and the guidelines do not explain it. That itch, refined, is where research starts.\n\nThe commonest student mistake is the giant question: 'What affects maternal health in Ghana?' A question that size cannot be answered in a semester by one student with a notebook. The craft is narrowing until the question is small enough to finish and important enough to matter.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Test every candidate question with **FINER**: is it Feasible with your time, money and access; Interesting enough to keep you working; Novel — does the literature show a gap; Ethical to ask and to answer; Relevant to the women and services around you. Then frame it. Quantitative questions use **PICO** — Population, Intervention, Comparison, Outcome. Qualitative questions use PICo — Population, phenomenon of Interest, Context.\n\nWatch the narrowing work. 'What affects breastfeeding?' becomes: 'Among mothers delivering at a district hospital (Population), does phone contact in the first two weeks (Intervention), compared with routine postnatal visits alone (Comparison), increase exclusive breastfeeding at six weeks (Outcome)?' Same itch, now answerable. For a qualitative study: 'What influences grandmothers' feeding advice (Interest) to new mothers (Population) in a rural district (Context)?' Scope down until you can picture the exact women, the exact tool, and the exact deadline.",
      },
      {
        type: "clinical_pearl",
        body: "The best question sits where three circles overlap: what matters to mothers, what the literature has not answered, and what you can honestly finish. Two out of three is not enough.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A final-year student notices that postnatal mothers at her facility rarely raise family planning at the six-week check, though several had said during pregnancy that they wanted to. She drafts her question as 'Why are family planning needs unmet?' and her supervisor points out that she cannot interview the whole region in a semester.\n\nHow should she narrow it?\n\nAnswer: She scopes the question to PICo: exploring with postnatal mothers attending one facility (Population), within six weeks of birth (Context), what shapes their family planning decisions and barriers (Interest). The population becomes the women she can genuinely reach and consent, the context is bounded to one facility and period, and the open phrasing keeps it qualitative without assuming non-attendance is the whole story. It now passes FINER — feasible in one semester, novel for her district, ethically straightforward with consent and privacy, and relevant to a real service gap she has witnessed herself.",
      },
      {
        type: "memory_trick",
        body: "FINER — the five fingers of one hand: Feasible, Interesting, Novel, Ethical, Relevant. If a finger is missing, you cannot grasp the project.",
      },
      {
        type: "summary",
        body: "- Good questions grow from real clinical puzzles, not from textbooks.\n- Run candidates through FINER before committing a semester to them.\n- Frame with PICO for quantitative questions, PICo for qualitative ones.\n- Narrow until you can picture the exact women, the tool and the deadline.",
      },
    ],
    questions: [
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In the FINER criteria, the F stands for…",
        options: [
          "Focused",
          "Formal",
          "Feasible",
          "Funded",
        ],
        correctIndex: 2,
        explanation:
          "Feasible asks whether one student, in the time available, with your access and resources, can actually complete the study — the commonest fatal flaw in student questions.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "'Do postnatal mothers at a district hospital who receive phone follow-up in the first two weeks breastfeed exclusively more at six weeks than mothers receiving routine visits alone?' What is the C in this PICO question?",
        options: [
          "Exclusive breastfeeding at six weeks",
          "Mothers at the district hospital",
          "Phone follow-up in the first two weeks",
          "Routine postnatal visits alone",
        ],
        correctIndex: 3,
        explanation:
          "The Comparison is the alternative to the intervention — here, routine postnatal visits alone. Exclusive breastfeeding is the Outcome; the mothers are the Population; phone follow-up is the Intervention.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Research Questions",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student proposes to study 'maternal health in Ghana'. The main problem with this question is that it…",
        options: [
          "Is too broad to be feasible or answerable in one project",
          "Lacks any ethical dimension",
          "Cannot be framed in PICO terms",
          "Is not interesting to any researcher",
        ],
        correctIndex: 0,
        explanation:
          "The population, the outcome and the setting are all unbounded. No design, sample or timeline could satisfy it — it fails the F of FINER before any other test.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Research Questions",
        front: "What do the letters of FINER stand for?",
        back: "Feasible, Interesting, Novel, Ethical, Relevant — the five-point test a research question must pass.",
      },
      {
        topic: "Research Questions",
        front: "What does PICO stand for, and what serves qualitative questions instead?",
        back: "PICO: Population, Intervention, Comparison, Outcome. Qualitative questions use PICo — Population, phenomenon of Interest, Context.",
      },
      {
        topic: "Research Questions",
        front: "How do you narrow a broad question?",
        back: "Bound the population, the place and the time, and name the single phenomenon you will measure or explore.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "6th edition — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Your Research Project",
    lessonTitle: "The Research Proposal",
    description:
      "The blueprint that gets your project approved — aims, methods, ethics and timeline, promised in writing.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the components of a complete research proposal.",
      "Explain the ethics approval process and why it precedes all data collection.",
      "Apply SMART criteria to research objectives.",
    ],
    tags: ["proposal", "planning", "ethics approval", "objectives"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A proposal is your project written in the future tense. It tells your supervisor, your institution and the ethics review committee exactly what you plan to do, to whom, how, and why the benefits outweigh the risks. Write it well and data collection becomes a matter of following your own instructions.\n\nIt is also a promise. Once approved — especially by an ethics committee — the proposal is the standard you are held to. Deviate without discussion and you have a problem no amount of good data can fix.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Every proposal walks the same skeleton. A title that says what the study is. Background and literature review that funnel from the global picture down to your district and end at the gap — the question your study fills. An aim with objectives, each SMART: specific, measurable, achievable, relevant, time-bound. Then methodology: the design, the population, how you will sample and how many, the instruments, and the procedure step by step.\n\nThe ethics section is not decoration. It names how you will inform participants, obtain written or thumb-printed consent, protect privacy and confidentiality, and store data securely; it addresses vulnerable groups and withdrawal without penalty. In Ghana this goes to an institutional review board or ethics committee, and approval letters go out before the first questionnaire touches the first hand. Finish with a timeline (a simple Gantt chart), a modest budget, a dissemination plan and references.",
      },
      {
        type: "clinical_pearl",
        body: "Ethics approval is a gate, not a rubber stamp. No approval letter, no data collection — not even a pilot interview at your own workplace.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student's first proposal draft states its aim as 'to study breastfeeding among mothers'. The committee sends it back. Her revision reads: 'To explore factors influencing exclusive breastfeeding practice among postnatal mothers attending a district hospital in the first six weeks after delivery', with three SMART objectives, a qualitative interview design, a consent procedure and a twelve-week timeline.\n\nWhy did the revision succeed where the first draft failed?\n\nAnswer: The first aim could not be measured or bounded — it failed the same test as a giant research question, and gave the committee nothing concrete to assess. The revised aim names a specific population, place and window; each objective can be shown to be met or not met; the methods say exactly how she will sample, interview and protect participants. The committee can now see that the risk to women is minimal and the plan feasible — so it can approve, and she can collect data under a promise she actually understands.",
      },
      {
        type: "memory_trick",
        body: "A proposal answers five questions in order: WHY (background and the gap), WHAT (aim and objectives), HOW (methods), WHO PROTECTS (ethics), WHEN and WHAT COST (timeline and budget).",
      },
      {
        type: "summary",
        body: "- The proposal is the project in future tense — and a promise to supervisors and ethics committees.\n- Build it from background-gap-aim-SMART objectives to methods, ethics, timeline and budget.\n- The ethics section details consent, privacy, confidentiality and data security.\n- No data collection, not even a pilot, before approval letters are in hand.",
      },
    ],
    questions: [
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which section of the research proposal should come at the end of the literature review?",
        options: [
          "The gap that the study will address",
          "The data analysis plan",
          "The reference list",
          "The budget",
        ],
        correctIndex: 0,
        explanation:
          "The literature review funnels from the broad picture down to what remains unknown — and the gap it ends on is precisely what your study proposes to fill.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A draft objective reads: 'To understand family planning use among postnatal mothers.' Which SMART element is most obviously missing?",
        options: [
          "Specific",
          "Relevant",
          "Time-bound",
          "Measurable",
        ],
        correctIndex: 3,
        explanation:
          "'Understand' cannot be measured. 'To describe the proportion of postnatal mothers adopting a family planning method by six weeks' is measurable — you can show whether the objective was met.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Research Proposal",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student wants to 'just pilot' two interviews at her workplace before her ethics approval arrives. The correct position is that this is…",
        options: [
          "Fine, since it is only a pilot at her own facility",
          "Acceptable if the participants sign consent forms she drafted herself",
          "Not acceptable — no data collection of any kind before ethics approval",
          "Acceptable if her supervisor agrees verbally",
        ],
        correctIndex: 2,
        explanation:
          "Pilot participants are research participants: the same protections apply. Ethics approval exists precisely so that someone other than the enthusiastic researcher has checked the risks — before any woman is approached, anywhere.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Research Proposal",
        front: "Name the core sections of a research proposal.",
        back: "Title, background and literature review ending in the gap, aim and SMART objectives, methodology, ethics, timeline, budget, dissemination plan, references.",
      },
      {
        topic: "Research Proposal",
        front: "What does SMART stand for?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — the test each objective must pass.",
      },
      {
        topic: "Research Proposal",
        front: "When can data collection begin?",
        back: "Only after ethics approval — including pilots. The approved proposal is the standard you are held to.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Ghana Health Service Ethics Review Committee",
        title: "Standard Operating Procedures and Guidelines for Submission and Review of Protocols",
        note: "National research ethics source — verify the current version and submission requirements with the committee.",
      },
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Your Research Project",
    lessonTitle: "Planning Your Data Collection",
    description:
      "Instruments, permissions and logistics — the unglamorous planning that decides whether a project survives contact with the field.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how to choose and prepare data collection instruments.",
      "Explain pilot testing and the permissions needed before fieldwork.",
      "Apply contingency planning to a data collection window.",
    ],
    tags: ["data collection", "planning", "pilot testing", "fieldwork"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Research projects rarely die from bad analysis. They die in the field: the questionnaire nobody understood, the clinic that only runs on market day, the tablet that lost power, the supervisor who was never informed. Data collection planning is the least glamorous chapter of research — and the one that saves projects.\n\nTreat fieldwork like a ward rota: everything that can be scheduled is scheduled, everything that can fail has a plan B, and nothing depends on hoping.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Instruments first. Do not invent from scratch when validated tools exist — search for what previous researchers used, and if you adapt or translate one, translate and back-translate to check the meaning survived. Then **pilot** it on five to ten people similar to your participants: watch where they hesitate, which question gets asked twice, which option gets skipped. A confusing question discovered on a classmate costs ten minutes; discovered mid-fieldwork, it costs your dataset.\n\nThen permissions and logistics. Ethics approval plus introduction letters — facility head, unit in-charge, and anyone whose space you will use. Match fieldwork to the rhythms of the site: clinic days, market days, shift patterns, farming season. Practicalities: paper backup for every electronic tool, charged batteries, a locked drawer or password for data, and privacy — a corner where an interview cannot be overheard. Write the whole plan as numbered steps, then walk it through in your mind the night before.",
      },
      {
        type: "clinical_pearl",
        body: "Pilot on your classmates before strangers. Ten minutes finding one confusing question saves ten ruined interviews.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student plans to interview postnatal mothers at a health centre 'every weekday for four weeks'. On arrival she learns the postnatal clinic only runs on Tuesdays — the day the market also brings the biggest crowd — and there is no private room, only a bench in the corridor. She has twenty-six interviews to complete.\n\nWhat should her revised plan look like?\n\nAnswer: First, timing: she concentrates fieldwork on Tuesdays and adds the two nearest facilities on their clinic days, with permission letters for each. Second, privacy: she negotiates the counselling room on clinic days and books interviews in advance rather than catching women mid-queue, seating them facing away from the corridor. Third, contingency: she builds extra weeks into her timeline for missed days, carries paper questionnaires as backup, and plans follow-up for mothers who start but cannot finish. She learned the clinic's rhythm before the first interview, not after a wasted fortnight.",
      },
      {
        type: "memory_trick",
        body: "The four Ps of fieldwork: Permissions in writing, Pilot the tool, Privacy for participants, Plan B for everything.",
      },
      {
        type: "summary",
        body: "- Adapt validated instruments where possible; translate and back-translate.\n- Pilot on five to ten similar people before any real interview.\n- Secure ethics approval and introduction letters; fit fieldwork to the site's rhythm.\n- Plan backups: paper copies, power, privacy and extra weeks in the timeline.",
      },
    ],
    questions: [
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why pilot a questionnaire before fieldwork?",
        options: [
          "To increase the sample size",
          "To find confusing questions while they are still cheap to fix",
          "Because the ethics committee always requires one hundred pilot responses",
          "To prove the hypothesis early",
        ],
        correctIndex: 1,
        explanation:
          "Piloting exposes confusing wording, bad question order and skipped items — on five to ten people rather than on the participants whose data you need.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A questionnaire translated into Twi should also be back-translated in order to…",
        options: [
          "Lengthen the methods section of the proposal",
          "Satisfy the facility's in-charge",
          "Check that the meaning survived the translation",
          "Create a second version to use as a backup",
        ],
        correctIndex: 2,
        explanation:
          "Back-translation — a second translator rendering the Twi version back into English — reveals where meaning drifted, which matters when questions carry clinical or sensitive content.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Data Collection",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which single step most protects participants in a busy clinic?",
        options: [
          "Scheduling interviews in a private room rather than catching women in the queue",
          "Interviewing two mothers at once to save time",
          "Reading questions loudly so all can hear",
          "Using a shared password for the data file",
        ],
        correctIndex: 0,
        explanation:
          "Privacy is a core protection: consent given in a corridor is barely consent, and answers overheard are answers no longer confidential.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Data Collection",
        front: "What does piloting an instrument mean?",
        back: "Testing it on five to ten people similar to your participants, watching for confusing items before real data collection begins.",
      },
      {
        topic: "Data Collection",
        front: "Why back-translate a translated tool?",
        back: "To check that meaning survived the translation — a second translator renders it back to the original language for comparison.",
      },
      {
        topic: "Data Collection",
        front: "Name the four Ps of data collection planning.",
        back: "Permissions in writing, Pilot the tool, Privacy for participants, Plan B for everything.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "Open University Press",
        title: "Research Methods in Health: Investigating Health and Social Services (Bowling)",
        year: "2014",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Analysis and Writing",
    lessonTitle: "Analysing Your Findings",
    description:
      "Turning questionnaires and interview recordings into answers — with analysis that matches your design and respects your data.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the steps of thematic analysis for qualitative data.",
      "Explain the role of descriptive statistics in quantitative analysis.",
      "Apply the principle that analysis must match the design.",
    ],
    tags: ["analysis", "findings", "thematic analysis", "statistics"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The day arrives: the interviews are recorded, the questionnaires are stacked, and the project must now become findings. Analysis looks intimidating from the outside, but at heart it is two honest operations — organising what people said, and counting what people did — done in a way your design can support.\n\nOne rule governs everything: the analysis must match the design. A qualitative study is analysed for themes, not percentages; a cross-sectional survey describes and associates, it does not prove cause.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Qualitative data goes through **thematic analysis**, in six phases: read everything until you know it (familiarisation), code the transcripts line by line, group codes into candidate themes, test the themes against the whole dataset, define and name each theme, then report it with supporting quotes. The discipline is letting codes grow from the data — not marching through interviews hunting for the three findings you hoped for. A surprising theme is a finding, not an inconvenience.\n\nQuantitative analysis starts small and stays honest. Frequencies and percentages for categorical answers; means — or medians when the data is skewed — for measurements. Cross-tabulations and simple tests such as chi-square explore associations. A p-value below 0.05 means 'unlikely to be this extreme by chance alone', never 'important' or 'proven'. And a cross-sectional design can show that two things travel together, not that one causes the other — write conclusions with that humility.",
      },
      {
        type: "clinical_pearl",
        body: "Analysis is listening to your data, not interrogating it until it confesses what you hoped to hear.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student interviews sixteen postnatal mothers about exclusive breastfeeding. She expects three themes: knowledge, work and milk supply. As she codes, a fourth pattern keeps appearing — grandmothers advising water and porridge in the first weeks — mentioned in twelve of the sixteen interviews. A classmate urges her to drop it: 'it wasn't in your objectives.'\n\nWhat is the correct analytic decision?\n\nAnswer: She keeps the theme and reports it, with quotes showing how consistently it arose, because themes must be driven by the data, not by the proposal's expectations. She can note honestly in her discussion that this theme emerged beyond the original objectives — and it may be her most useful finding for the facility's counselling. Silencing the pattern to fit the plan would be the real research flaw: it would turn her analysis into confirmation of what she already believed.",
      },
      {
        type: "memory_trick",
        body: "Thematic analysis in six beats: Read, Code, Cluster, Check, Name, Narrate — and never code backwards from what you hoped to find.",
      },
      {
        type: "summary",
        body: "- Match analysis to design: themes for qualitative, description for quantitative.\n- Thematic analysis: familiarise, code, cluster, review, define, report — with quotes.\n- Start quantitative analysis with frequencies and medians; treat p-values with respect.\n- Cross-sectional findings show association, never causation.",
      },
    ],
    questions: [
      {
        topic: "Analysing Findings",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In Braun and Clarke's thematic analysis, what immediately follows coding?",
        options: [
          "Writing the discussion",
          "Calculating percentages",
          "Generating candidate themes from the codes",
          "Deleting quotes that disagree",
        ],
        correctIndex: 2,
        explanation:
          "Codes are sorted and clustered into candidate themes, which are then tested against the whole dataset before being defined, named and reported.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Analysing Findings",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A cross-sectional survey finds mothers who attend more ANC visits are more likely to deliver with a skilled attendant. The correct conclusion is that…",
        options: [
          "There is an association between ANC attendance and skilled birth attendance",
          "ANC attendance causes skilled birth attendance",
          "Skilled birth attendance causes ANC attendance",
          "The finding proves the need for more ANC clinics",
        ],
        correctIndex: 0,
        explanation:
          "Cross-sectional data captures one moment: it can show that two things travel together, but cannot establish direction or exclude confounding. Association, not causation.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Analysing Findings",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your count data is strongly skewed — a few mothers report very many visits, most report few. Which summary statistic is most appropriate?",
        options: [
          "Mean",
          "Range only",
          "Percentage",
          "Median",
        ],
        correctIndex: 3,
        explanation:
          "Skewed data drags the mean towards the extreme values; the median describes the typical woman more honestly. Report the median (with its range) for skewed distributions.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Analysing Findings",
        front: "Name the six phases of thematic analysis.",
        back: "Familiarisation, coding, generating themes, reviewing themes against the dataset, defining and naming themes, reporting with quotes.",
      },
      {
        topic: "Analysing Findings",
        front: "What does a p-value below 0.05 actually mean?",
        back: "A result this extreme would be unlikely by chance alone — not that it is important, large or proven.",
      },
      {
        topic: "Analysing Findings",
        front: "Why can't a cross-sectional study claim causation?",
        back: "It measures everything at one time point; it can show association but cannot establish which came first or rule out confounding.",
      },
    ],
    sources: [
      {
        organization: "Taylor & Francis (Qualitative Research in Psychology)",
        title: "Using thematic analysis in psychology (Braun & Clarke)",
        year: "2006",
        url: "https://doi.org/10.1191/1478088706qp063oa",
      },
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "6th edition — verify current edition.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Analysis and Writing",
    lessonTitle: "Writing Up with Integrity",
    description:
      "The structure of a research report — written honestly, cited properly, and strong enough to be trusted.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the IMRaD structure of a research report.",
      "Explain integrity in reporting: honest findings, limitations and attribution.",
      "Apply referencing and paraphrasing conventions correctly.",
    ],
    tags: ["write-up", "integrity", "imrad", "plagiarism"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Writing up is where integrity becomes visible. Your report is read by people who were not there: they cannot see the twenty-two women who agreed to talk, only what you write about them. Everything — the structure, the citations, the limitations — either tells them they can trust you or tells them they cannot.\n\nThe good news is that the structure is standard, the ethics are common sense, and honesty is the easier path: you never have to remember a lie.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Reports follow **IMRaD**: Introduction (why the question matters and where the gap is), Methods (exactly what you did, so precisely that a stranger could repeat it), Results (what you found — findings only, no interpretation), and Discussion (what it means, how it compares with the literature, its limitations, and what should happen next). Results and discussion must never blur into each other: numbers and quotes in one, meaning in the other.\n\nIntegrity has three faces in the write-up. Honest reporting: what you found is what you write — including the inconvenient, the small and the absent; 'we found no difference' is a result. Limitations: naming your study's weaknesses is a strength that earns trust, not a confession that undoes you. Attribution: another person's idea or sentence is cited every single time — paraphrased in your own words with the source, or quoted with quotation marks and the source. Fabricated data and invented quotes are the cardinal sins: career-ending, and an insult to the real women who gave you their time.",
      },
      {
        type: "clinical_pearl",
        body: "If you didn't find it, don't write it. A truthful 'no difference' earns more respect than a beautiful invention — and only one of them is research.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student analysing her questionnaires realises only twenty-two of the twenty-five she distributed were returned, and one interview was cut short when the mother's baby woke. A friend suggests writing 'twenty-five questionnaires, twenty-five interviews' because 'that's what you planned'. Instead she reports twenty-two returned (an 88 percent response rate), describes the incomplete interview honestly, and discusses in her limitations how the missing three might have differed.\n\nWhy is her version the stronger research?\n\nAnswer: Her numbers describe what actually happened, so anyone repeating her study knows what to expect, and readers can judge the effect of the missing questionnaires for themselves. The limitations section converts a weakness into evidence of rigour — she thought about who might be missing and why. The invented version would make her report unreproducible and, if discovered, would end the project in a misconduct process. Integrity is not only ethics; it is the difference between research and storytelling.",
      },
      {
        type: "memory_trick",
        body: "IMRaD = Introduction (why), Methods (how), Results (what), and Discussion (so what) — findings on one floor, meaning on the other, never mixed.",
      },
      {
        type: "summary",
        body: "- IMRaD structures the report: why, how, what, so what — results and discussion stay separate.\n- Report what you found, including null results and small numbers.\n- Limitations sections are evidence of rigour, not weakness.\n- Cite every borrowed idea; fabricated data and quotes end careers.",
      },
    ],
    questions: [
      {
        topic: "Writing with Integrity",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In IMRaD, where do the study's findings appear without interpretation?",
        options: [
          "Introduction",
          "Results",
          "Discussion",
          "Methods",
        ],
        correctIndex: 1,
        explanation:
          "Results reports the findings — numbers, tables and quotes — and nothing else. Interpretation, comparison with the literature and implications belong to the Discussion.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Writing with Integrity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You paraphrase three sentences from a WHO guideline into your background section. What is required?",
        options: [
          "Nothing, because paraphrasing is your own work",
          "A mention in the acknowledgements",
          "Quotation marks around the three sentences",
          "A citation to the source, since the ideas are borrowed even though the words are yours",
        ],
        correctIndex: 3,
        explanation:
          "Plagiarism is about stolen ideas, not only stolen words. A paraphrase in your own words still carries someone else's thinking, so the source is cited either way.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Writing with Integrity",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your intervention showed no difference from the control. In the write-up you should…",
        options: [
          "Report the null result honestly and discuss possible reasons",
          "Omit that outcome and report the others",
          "Reframe the finding until it looks positive",
          "Increase the sample size after analysis until significance appears",
        ],
        correctIndex: 0,
        explanation:
          "Null results are results. Selective reporting, reframing and post-hoc sample inflation are all research misconduct — and they rob the profession of useful evidence.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Writing with Integrity",
        front: "What does IMRaD stand for?",
        back: "Introduction, Methods, Results, and Discussion — why, how, what, so what.",
      },
      {
        topic: "Writing with Integrity",
        front: "What belongs in the limitations section?",
        back: "An honest description of your study's weaknesses — sampling, response rate, design — and their possible effect; it earns trust rather than losing it.",
      },
      {
        topic: "Writing with Integrity",
        front: "What is the rule on citing sources?",
        back: "Every borrowed idea is cited — paraphrased in your own words with the source, or quoted with quotation marks and the source.",
      },
    ],
    sources: [
      {
        organization: "Committee on Publication Ethics (COPE)",
        title: "Core Practices",
        url: "https://publicationethics.org",
        note: "Publication ethics guidance for researchers — see current core practices.",
      },
      {
        organization: "World Health Organization",
        title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
        year: "2011",
      },
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Analysis and Writing",
    lessonTitle: "Managing Your Project Timeline",
    description:
      "Milestones, buffers and motivation — finishing a research project while still being a full-time final-year student.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe how to break a project into milestones with backward planning.",
      "Explain the purpose of buffer time and scheduled supervision.",
      "Apply motivation strategies to a long project running alongside practice.",
    ],
    tags: ["time management", "project", "milestones", "motivation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A research project is the only assignment that spans months, runs alongside clinical practice, and has no teacher checking your progress each week. That freedom is exactly why projects fail — not from difficulty, but from drift. A month of 'thinking about the analysis' turns out to be a month of nothing.\n\nTimeline management is how final-year students finish. It has three parts: milestones, buffers, and a way of keeping yourself moving when enthusiasm dips.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start at the deadline and plan backwards. If submission is week sixteen, the final draft needs week thirteen (leaving time for supervisor feedback), analysis needs weeks nine to twelve, data collection needs weeks five to eight, ethics approval weeks two to four, and the proposal week one. Put every milestone on one page — a simple Gantt chart with bars for each phase — so you can see collisions with examinations and clinical postings before they happen. Add **buffer time** to every phase, because something always runs late: approvals, participants, illness, the rota.\n\nProtect the plan with structure. Book supervisor meetings as standing appointments, not as courage-permitting requests — five scheduled meetings beat twenty intentions. Write on a fixed schedule (two protected evenings a week) rather than waiting for inspiration, and draft ugly: a rough first version you will edit beats a perfect one you never write. For motivation, pair up with a project-mate for weekly check-ins, break tasks small enough to finish in one sitting, and keep progress visible — a chart you colour in sounds childish until you notice how much it makes you want to finish the next bar.",
      },
      {
        type: "clinical_pearl",
        body: "Projects don't fail at the deadline — they fail quietly six weeks before it. Buffer time is where you discover the failure while there is still time to fix it.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student plans sixteen weeks: two for ethics approval, six for data collection, and the rest for analysis and writing. Ethics takes five weeks because of a committee meeting cycle. Under her original plan she would now be three weeks behind before the first interview.\n\nWhat in her planning saves the project?\n\nAnswer: The buffer. Because she had built spare weeks into every phase — and had planned data collection across two nearby facilities rather than one — she absorbs the delay without moving her submission date. Her Gantt chart showed the collision immediately, so she re-planned in week five rather than week fourteen: trading some analysis buffer, booking an extra supervisor meeting, and trimming an optional objective. A plan without buffers would have turned a three-week delay into a failed project or a rushed, weak analysis; hers turned it into an inconvenience.",
      },
      {
        type: "memory_trick",
        body: "A project passes six gates in order — Question, Proposal, Ethics, Data, Analysis, Writing — and only one gate at a time. Colour each gate in when it closes.",
      },
      {
        type: "summary",
        body: "- Plan backwards from the submission date onto a one-page Gantt chart.\n- Build buffer time into every phase; something always runs late.\n- Make supervisor meetings standing appointments and write on a fixed schedule.\n- Draft ugly, break tasks small, and keep progress visible to stay moving.",
      },
    ],
    questions: [
      {
        topic: "Project Timeline",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What is backward planning in a research project?",
        options: [
          "Starting with the easiest task first",
          "Doing the analysis before collecting the data",
          "Working from the submission date back to today, placing milestones in reverse",
          "Leaving the write-up until all the data is in",
        ],
        correctIndex: 2,
        explanation:
          "Backward planning fixes the deadline first and lets necessity place the milestones — exposing impossible schedules while they can still be fixed.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Project Timeline",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is buffer time built into every project phase?",
        options: [
          "To fill the report's timeline section impressively",
          "Because supervisors expect longer timelines",
          "To allow time to repeat the study if results are negative",
          "Because some phase always runs late, and buffers absorb delay without moving the deadline",
        ],
        correctIndex: 3,
        explanation:
          "Approvals, participant flow, illness and rota changes all eat weeks. Buffers absorb the inevitable so a late phase becomes an inconvenience rather than a failed project.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Project Timeline",
        type: "MCQ",
        difficulty: "Easy",
        stem: "'Draft ugly' means…",
        options: [
          "Writing a rough first version to be edited, rather than waiting to write perfectly",
          "Submitting a poorly formatted report",
          "Writing the report before the data collection",
          "Drafting only when you feel inspired",
        ],
        correctIndex: 0,
        explanation:
          "Perfectionism is procrastination in a clean uniform. A rough complete draft can be improved; a perfect unwritten one cannot.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Project Timeline",
        front: "Name the six gates of a student research project.",
        back: "Question, Proposal, Ethics approval, Data collection, Analysis, Writing — passed in order, one at a time.",
      },
      {
        topic: "Project Timeline",
        front: "Why plan backwards from the submission date?",
        back: "It places milestones by necessity rather than hope, and exposes collisions with exams and postings while there is still time to re-plan.",
      },
      {
        topic: "Project Timeline",
        front: "What is buffer time for?",
        back: "Absorbing the inevitable delays — approvals, participants, illness — without moving the final deadline.",
      },
    ],
    sources: [
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
      {
        organization: "SAGE",
        title: "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (Creswell & Creswell)",
        year: "2018",
        note: "6th edition — verify current edition.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Sharing and Using Research",
    lessonTitle: "Disseminating Your Findings",
    description:
      "Research only matters when it travels — posters, presentations and the local audiences who can act on them first.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe formats for sharing findings and their audiences.",
      "Explain how to structure an abstract and a presentation.",
      "Apply local-first dissemination to a district setting.",
    ],
    tags: ["dissemination", "presentation", "posters", "abstracts"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "A completed project sitting in a drawer has helped no one. Dissemination is the last mile of research — putting your findings in front of the people who can act on them, in a form they can use. For a student project, that audience is usually not a journal editor first. It is the ward, the facility and the district that opened their doors to you.\n\nSharing locally is not the small version of dissemination. It is the version where your findings can change what happens at next Tuesday's clinic.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Formats follow audiences. At facility level, a ten-minute in-service presentation at handover or a one-page summary for the noticeboard; at district level, a short report or an agenda item for the district health management team; beyond that, conferences (poster or oral) and, for exceptional projects, journals. Every format starts the same way — an **abstract**: the why, the how, the what and the so-what, usually in 250-300 words. Write it early: it doubles as the spine of your talk.\n\nA good presentation tells the study as a story: why the question mattered, what you did, what you found, and what should change — one message per slide, big fonts, findings shown as pictures where possible. A good poster is a conversation starter, not a paper on a wall: one clear message, readable from two metres. Remember the feedback duty: return plain-language findings to the participants and community where you can — the mothers who gave you interviews are owed the answer they helped produce. On social media, share your own general findings and never any data that could identify a participant.",
      },
      {
        type: "clinical_pearl",
        body: "Present at the facility where you collected the data before anyone else hears it. The staff who opened their doors deserve it first — and their questions will sharpen your conference talk.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student's project finds that most postnatal mothers at her facility want family planning but believe contraception harms future fertility. Her first dissemination is a ten-minute presentation at the unit's morning handover, with three quotes and a one-page summary pinned in the staff room. The matron adds a standing five-minute counselling slot to the postnatal checklist; three months later the unit's family planning uptake has visibly changed.\n\nWhy was the local presentation the right first step?\n\nAnswer: The people who can act on a facility-level finding are the people working in that facility — and they were in that room. The presentation cost nothing, took ten minutes, and translated directly into a change in practice, which she can now report as a service improvement at district level and, with her supervisor, as a conference abstract. A journal paper might have reached strangers in two years; the handover talk reached the decision-makers in one morning. Dissemination works best when the audience with the power to change the finding's world hears it first.",
      },
      {
        type: "memory_trick",
        body: "Every dissemination tells the same story in four beats: WHY the question mattered, HOW you studied it, WHAT you found, SO WHAT should change.",
      },
      {
        type: "summary",
        body: "- Disseminate locally first: handover talks, one-page summaries, district meetings.\n- Abstracts are the spine: why, how, what, so-what in 250-300 words — write them early.\n- Slides carry one message each; posters are conversation starters readable at two metres.\n- Participants and communities are owed plain-language findings; never share identifying data.",
      },
    ],
    questions: [
      {
        topic: "Dissemination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "For a student project with facility-level findings, the first dissemination audience should usually be…",
        options: [
          "An international journal",
          "The university's press office",
          "Social media followers",
          "The facility and district staff who can act on the findings",
        ],
        correctIndex: 3,
        explanation:
          "The audience that can change practice at the facility is the facility itself. Local sharing is fast, free, and turns findings into action — the very definition of dissemination done well.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Dissemination",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A conference abstract is best written…",
        options: [
          "Early, since it forms the spine of the later presentation",
          "Only after the full paper is accepted",
          "As a mystery, withholding the findings to attract an audience",
          "By copying the literature review verbatim",
        ],
        correctIndex: 0,
        explanation:
          "The abstract forces you to state your why, how, what and so-what in a few sentences — and that same skeleton becomes the talk, the poster and the report.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Dissemination",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Which use of social media is appropriate after your study?",
        options: [
          "Posting photographs of your interviewees with their permission",
          "Posting a screenshot of the raw data sheet with names hidden",
          "Sharing your general findings with no identifying details",
          "Naming the facility and staff who 'caused' the problem",
        ],
        correctIndex: 2,
        explanation:
          "Your general findings are yours to share; participants' identities and identifiable details are never yours to post — and blame posted publicly helps no one and exposes you.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Dissemination",
        front: "Name three dissemination formats and their audiences.",
        back: "In-service presentation at the facility; a report or agenda item for the district health management team; conference poster or talk — journals for exceptional projects.",
      },
      {
        topic: "Dissemination",
        front: "What are the four beats of any research presentation?",
        back: "Why the question mattered, how you studied it, what you found, and so what should change.",
      },
      {
        topic: "Dissemination",
        front: "What does dissemination owe the participants?",
        back: "Plain-language findings returned to them — the mothers who gave the data are owed the answer they helped produce.",
      },
    ],
    sources: [
      {
        organization: "UNFPA, ICM and WHO",
        title: "State of the World's Midwifery 2021",
        year: "2021",
        url: "https://www.unfpa.org/publications/state-worlds-midwifery-2021",
      },
      {
        organization: "Elsevier",
        title: "Nursing Research: Generating and Assessing Evidence for Nursing Practice (Polit & Beck)",
        year: "2020",
        note: "Educational source — verify current edition.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    courseSlug: "midwifery-research",
    moduleTitle: "Sharing and Using Research",
    lessonTitle: "From Findings to Better Care",
    description:
      "The loop that turns evidence into everyday practice — audits, small tests of change, and the patience that real change requires.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the evidence-based practice triad and the audit cycle.",
      "Explain common barriers to practice change and how PDSA tests overcome them.",
      "Apply a small-scale improvement approach to a ward problem.",
    ],
    tags: ["implementation", "ebp", "audit", "pdsa"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You will spend your career noticing gaps between what the guidelines say and what happens on the ward — the routine practices WHO abandoned years ago, the women separated from their companions, the episiotomies done 'the way it has always been done'. Noticing is step one. This lesson is about the steps after: how findings actually change practice, and why they change so slowly.\n\nEvidence-based practice is a triad: the best available evidence, your clinical expertise, and the woman's own values and circumstances. Change that ignores any corner of the triangle tends to fail — usually in month three.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **audit cycle** is the profession's standard tool for closing gaps: agree the standard (from WHO or Ghana Health Service guidance), measure current practice against it, show the gap, change something, then measure again. Measurement before and after is what separates an improvement from a feeling. Where the change is uncertain, run it small first — a **PDSA** cycle: Plan the change and what success looks like, Do it on a tiny scale, Study the results, then Act — adopt, adapt or abandon — before spreading it.\n\nRespect the barriers, because they are real: habit, workload, missing supplies, hierarchy, and the quiet sentence that kills more improvements than any budget — 'we've always done it this way'. Work with them rather than against them: involve the people who do the work before changing their work, start where enthusiasm exists, attach the change to something already routine, and take your evidence to the unit in-charge and the district health management team as a proposal, not an accusation. Change one practice at a time — ten simultaneous 'improvements' are zero improvements, because nobody can tell what worked.",
      },
      {
        type: "clinical_pearl",
        body: "Change one thing at a time and measure it. Improvement without measurement is just a new habit — possibly a worse one.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "On placement, a final-year student notices that women in established labour are routinely separated from their companions and confined to bed, although WHO's intrapartum care recommendations support companionship and freedom of movement. With her senior's blessing, she audits current practice for two weeks — how many labouring women had a companion present — then proposes a four-week test on selected shifts: companions welcomed, movement encouraged.\n\nWhat must she do to know whether the change worked?\n\nAnswer: She needs before-and-after measurement on the same yardstick — the proportion of labouring women with a companion present, recorded for two weeks before and during the test — plus the outcomes WHO cares about, such as women's reported satisfaction. She studies the results with the ward team, collecting their objections and suggestions honestly, then decides with them whether to adapt (solving the privacy concern staff raise) or spread it to all shifts. Taking the numbers to the district health management team as an audit rather than a complaint is what makes this an improvement project instead of an argument.",
      },
      {
        type: "memory_trick",
        body: "PDSA: Plan the change, Do it small, Study what happened, Act — adopt, adapt or abandon. Roll the cycle until the ward, not just the guideline, has changed.",
      },
      {
        type: "summary",
        body: "- Evidence-based practice = best evidence + clinical expertise + the woman's values.\n- The audit cycle: agree the standard, measure, show the gap, change, re-measure.\n- PDSA tests changes small before spreading them.\n- Involve the people who do the work, change one practice at a time, and measure everything.",
      },
    ],
    questions: [
      {
        topic: "Evidence into Practice",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What are the three corners of evidence-based practice?",
        options: [
          "Tradition, hierarchy and protocol",
          "Best available evidence, clinical expertise and the woman's values",
          "Cost, availability and seniority",
          "Research, statistics and publication",
        ],
        correctIndex: 1,
        explanation:
          "Evidence alone does not decide care: it meets the clinician's judgement and the woman's own values and circumstances — the classic three-part definition of EBP.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Evidence into Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "In the audit cycle, what distinguishes a genuine improvement from a feeling that care is better?",
        options: [
          "The staff report feeling more motivated",
          "The change was taught in a workshop",
          "A new policy was circulated by email",
          "Practice was measured against the standard before and after the change",
        ],
        correctIndex: 3,
        explanation:
          "Audit closes the loop with measurement: the same standard, measured before and after, shows whether the gap actually closed. Feelings, workshops and circulars cannot.",
        courseSlug: "midwifery-research",
      },
      {
        topic: "Evidence into Practice",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why test a practice change on a small scale first (PDSA)?",
        options: [
          "Small failures are cheaper and teach before the change is spread",
          "Small scale avoids the need to measure anything",
          "Committees only ever approve small changes",
          "To prove the old way was dangerous",
        ],
        correctIndex: 0,
        explanation:
          "A small test reveals unexpected problems — privacy objections, staffing realities — at low cost, letting you adapt before spreading the change across a whole unit.",
        courseSlug: "midwifery-research",
      },
    ],
    flashcards: [
      {
        topic: "Evidence into Practice",
        front: "Name the three corners of evidence-based practice.",
        back: "Best available evidence, the clinician's expertise, and the woman's values and circumstances.",
      },
      {
        topic: "Evidence into Practice",
        front: "What are the steps of the audit cycle?",
        back: "Agree the standard, measure current practice, show the gap, make a change, re-measure against the same standard.",
      },
      {
        topic: "Evidence into Practice",
        front: "What does PDSA stand for?",
        back: "Plan, Do, Study, Act — test a change small, study the results, then adopt, adapt or abandon before spreading.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Standards for Improving Quality of Maternal and Newborn Care in Health Facilities",
        year: "2016",
        url: "https://www.who.int/publications/i/item/9789241511719",
      },
      {
        organization: "World Health Organization",
        title: "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
        year: "2018",
        url: "https://www.who.int/publications/i/item/9789241550215",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "Mothers with Medical Co-Morbidities",
    description:
      "Pregnancy on top of existing illness — sickle cell, heart disease, epilepsy and beyond — and the coordination that keeps both patients safe.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how common medical co-morbidities behave in pregnancy.",
      "Explain the principles of co-managed care and medication continuity.",
      "Apply a booking plan for a woman with sickle cell disease.",
    ],
    tags: ["comorbidity", "medicine", "sickle cell", "multidisciplinary care"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some mothers arrive at booking carrying a second diagnosis: sickle cell disease, a heart condition dating from childhood rheumatic fever, epilepsy, diabetes, HIV, chronic hypertension. Pregnancy does not pause these illnesses — it stresses them — and the illness in turn reshapes the pregnancy's risks. In your final semester you learn to see both patients at once: the condition and the pregnancy.\n\nThe midwife's role here is rarely solo treatment. It is vigilance plus coordination: knowing what each condition adds to the risk, what must never be stopped, and where this woman should deliver.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Each condition has its signature. **Sickle cell disease** brings vaso-occlusive crises, infection, pre-eclampsia and fetal growth restriction — women need high-dose folic acid, prompt treatment of infection, and joint haematology-obstetric care. **Heart disease** — often rheumatic in Ghanaian women — is graded by WHO risk classes: the lower classes deliver normally with good support; the highest classes make pregnancy itself dangerous, requiring a specialist centre. **Epilepsy** is the classic trap: stopping medication to 'protect the baby' causes seizures, which harm the baby far more than well-chosen drugs — sodium valproate in particular requires specialist review before pregnancy.\n\nThe principles that bind them all: never stop or swap a chronic medication on your own authority — involve the specialist. Screen harder, not softer: more frequent blood pressure, growth and infection checks than the low-risk schedule. Plan the birth at the right level of care — a well-controlled condition may deliver at the district hospital; a failing one belongs where blood, cardiology and critical care exist. And when in doubt about risk, the co-morbid mother is the one you refer early, not late.",
      },
      {
        type: "clinical_pearl",
        body: "In pregnancy, an untreated chronic disease is almost always more dangerous than the treated one. Your job is coordination — not withdrawal of treatment.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A 24-year-old with sickle cell disease books at your health centre at 14 weeks. She is taking folic acid and asks whether she should stop 'all these medicines' now that she is pregnant, since they 'might harm the baby'. She has been reasonably well, but her haemoglobin is 8.6 g/dL.\n\nWhat does your booking plan look like?\n\nAnswer: Folic acid continues — in sickle cell disease it is usually prescribed at a higher dose, and stopping it helps nothing. Confirm her genotype from records, arrange referral for joint haematology-obstetric care, and plan closer surveillance: more frequent blood pressure and urine checks for pre-eclampsia, serial growth monitoring (restricted growth is common), and prompt treatment of any infection or pain crisis. Agree the birth place at a hospital with blood transfusion and specialist cover, and teach her the danger signs that must bring her in at once — fever, severe pain, breathlessness, reduced fetal movement. Document the plan and share it with the referral team.",
      },
      {
        type: "memory_trick",
        body: "The co-morbid mother needs the 3 Cs: CONTINUE her specialist-agreed medicines, CO-MANAGE with the specialists, COORDINATE the birth at the right level of care.",
      },
      {
        type: "summary",
        body: "- Pregnancy stresses chronic disease and vice versa — see both patients at once.\n- Sickle cell: crises, pre-eclampsia, growth restriction. Heart disease: WHO risk classes. Epilepsy: never stop drugs unilaterally.\n- Never stop chronic medication without the specialist — the untreated disease usually harms mother and baby more.\n- Book tighter surveillance and match the birth place to the risk.",
      },
    ],
    questions: [
      {
        topic: "Medical Co-Morbidities",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A woman with epilepsy tells you she stopped her medication when she discovered the pregnancy. The main danger is…",
        options: [
          "The baby developing a rash",
          "Weight gain in pregnancy",
          "Uncontrolled seizures, which harm both mother and baby",
          "The medication becoming ineffective later",
        ],
        correctIndex: 2,
        explanation:
          "Uncontrolled seizures deprive the baby of oxygen and risk injury to the mother. Specialist review optimises safer medication in pregnancy; stopping abruptly does the opposite of protecting the baby.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Medical Co-Morbidities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which pregnancy risk is specifically increased in sickle cell disease?",
        options: [
          "Post-term pregnancy",
          "Placenta praevia",
          "Multiple pregnancy",
          "Fetal growth restriction",
        ],
        correctIndex: 3,
        explanation:
          "Placental function suffers under sickle cell disease, so fetal growth restriction — alongside crises, infection and pre-eclampsia — is a signature risk requiring serial growth monitoring.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Medical Co-Morbidities",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A mother with moderate rheumatic heart disease asks where she should deliver. The guiding principle is to…",
        options: [
          "Deliver at home to avoid the stress of travel",
          "Match the birth place to the level of risk — a specialist centre for significant cardiac disease",
          "Deliver wherever is closest, regardless of facilities",
          "Treat delivery place as irrelevant to cardiac outcomes",
        ],
        correctIndex: 1,
        explanation:
          "Significant cardiac disease needs delivery where monitoring, blood, anaesthetic skill and cardiology support exist — the level of care is matched to the WHO risk class, decided with the specialists.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Medical Co-Morbidities",
        front: "Which pregnancy risks rise in sickle cell disease?",
        back: "Vaso-occlusive crises, infection, pre-eclampsia, preterm birth and fetal growth restriction — hence tighter surveillance and joint haematology-obstetric care.",
      },
      {
        topic: "Medical Co-Morbidities",
        front: "What is the rule on chronic medication in pregnancy?",
        back: "Never stop or swap it on your own authority — involve the specialist; an untreated disease is usually the greater danger.",
      },
      {
        topic: "Medical Co-Morbidities",
        front: "What do the 3 Cs remind you to do for a co-morbid mother?",
        back: "Continue specialist-agreed medicines, Co-manage her care, Coordinate birth at the right level of facility.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Obstetrics: Normal and Problem Pregnancies (Gabbe's)",
        year: "2021",
        note: "8th edition — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "When Complications Collide",
    description:
      "The mother with two, three, four problems at once — how risks multiply, and how to decide what to treat first.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe how combined risk factors multiply rather than add.",
      "Explain a prioritisation approach for multiple simultaneous problems.",
      "Apply preparation and escalation planning to a complex case.",
    ],
    tags: ["complex cases", "integration", "prioritisation", "emergency planning"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "The final-semester cases that test everything are not single problems. They are the mother who is a grand multipara with anaemia, a previous postpartum haemorrhage, and a blood pressure creeping upward — all at once. Textbooks teach one disease at a time; the ward combines them freely, and each one changes what the others mean.\n\nThe core insight of this lesson is one sentence: risks multiply, they do not add. A 500 mL bleed in a woman with a haemoglobin of 7 is not a 500 mL event. Handle complexity by refusing to treat it as a list — you treat it as a system.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Start by mapping what each factor does to the others. Anaemia shrinks the buffer against any blood loss. Grand multiparity plus a previous haemorrhage makes the next haemorrhage both likelier and less tolerable. Pre-eclampsia narrows the vessels perfusing a growth-restricted baby and can push the sickle-cell mother into crisis. Two 'moderate' risks stacked can equal one emergency — which is why a reading that reassured you yesterday, a pulse of 102 or a fundus a little high, means something new today.\n\nWhen everything demands attention, rank by speed of harm. Bleeding kills in minutes — first. Eclampsia threatens the airway in minutes to hours — alongside. Sepsis kills in hours to days — next. Then ask three preparation questions early: what will this woman need if the worst happens (blood, theatre, critical care)? Where is the nearest place that has it? Who must know now, so the wheels turn before the emergency rather than during it? Involve seniors early, write a contingency plan the whole team can read, and tell the woman and her family what is being watched and why — panic at 3am is mostly unshared plans.",
      },
      {
        type: "clinical_pearl",
        body: "When problems stack, risk multiplies, not adds. Two moderate risks can quietly make one emergency.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A G7P6 mother at term presents in early labour. She has delivered six babies; her haemoglobin today is 7.5 g/dL, her blood pressure is 150/100 with trace protein, and her last baby was followed by a severe postpartum haemorrhage. She has waited at home through two days of contractions because 'the last births were easy'.\n\nWhat are the first moves?\n\nAnswer: Recognise the compounding: grand multiparity plus previous haemorrhage predicts another PPH, her anaemia leaves almost no tolerance for one, and a pressure of 150/100 with protein at term is pre-eclampsia needing urgent assessment. Rank by speed: haemorrhage is a disease of minutes — so two wide-bore IV lines, blood grouped and crossmatched, uterotonics and theatre ready; eclampsia threatens in minutes to hours — so magnesium sulphate per protocol and seizure precautions; both while the obstetric team is called and referral prepared. This is not a birth to await at a facility without blood. Escalate early, brief the whole team on the written contingency plan, and counsel the woman and her family now — before the emergency — about what may be needed.",
      },
      {
        type: "memory_trick",
        body: "Rank by speed of killing: BLEEDING first (minutes), then BRAIN — eclampsia (minutes to hours) — then the slower killers such as sepsis (hours to days).",
      },
      {
        type: "summary",
        body: "- Combined risks multiply: stacked moderate risks can equal one emergency.\n- Map the interactions — anaemia, grand multiparity, pre-eclampsia and previous PPH feed each other.\n- Prioritise by speed of harm: haemorrhage, then eclampsia, then sepsis.\n- Prepare in advance: IV access, crossmatched blood, seniors informed early, a written shared plan.",
      },
    ],
    questions: [
      {
        topic: "Complex Case Management",
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
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Complex Case Management",
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
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "Complex Case Management",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "For a grand multipara with previous PPH and a haemoglobin of 7.5 g/dL at term, preparation before delivery should include…",
        options: [
          "Grouping and crossmatching blood before delivery",
          "Waiting to see how the third stage goes",
          "Planning delivery at home with a skilled attendant",
          "Oral iron as the only anaemia measure until delivery",
        ],
        correctIndex: 0,
        explanation:
          "Her stacked risks predict a haemorrhage she cannot tolerate; blood grouped and crossmatched in advance, two IV lines and uterotonics ready are what turn that emergency into a survivable one.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "Complex Case Management",
        front: "Why do stacked risks multiply rather than add?",
        back: "Each factor shrinks the buffer the others rely on — anaemia leaves no tolerance for the haemorrhage that grand multiparity predicts.",
      },
      {
        topic: "Complex Case Management",
        front: "How do you rank simultaneous emergencies?",
        back: "By speed of harm: haemorrhage first (minutes), eclampsia next (minutes to hours), then sepsis (hours to days).",
      },
      {
        topic: "Complex Case Management",
        front: "What does 'preparation' mean for a complex case?",
        back: "IV access, crossmatched blood, theatre readiness, seniors informed early, and a written contingency plan the whole team — and family — understand.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "Elsevier",
        title: "Obstetrics: Normal and Problem Pregnancies (Gabbe's)",
        year: "2021",
        note: "8th edition — verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Myles Textbook for Midwives",
        year: "2024",
        note: "17th edition — verify current edition.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    courseSlug: "advanced-maternal-newborn-care",
    moduleTitle: "Advanced Maternal Care",
    lessonTitle: "High-Dependency Maternal Care",
    description:
      "Between the ward and the ICU — the mothers who need more than routine observations, and the midwifery that keeps them alive.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe which mothers need high-dependency care and what it offers.",
      "Explain early warning scores and magnesium sulphate monitoring.",
      "Apply escalation and step-down criteria in HDU care.",
    ],
    tags: ["high dependency", "critical care", "meows", "magnesium sulphate"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between the ordinary ward and the intensive care unit sits a level of care that saves maternal lives every day: high-dependency care. These are the mothers too sick for routine observations but not yet needing a ventilator — severe pre-eclampsia on magnesium sulphate, sepsis on treatment, the stabilised hours after a massive haemorrhage, the failing heart. At district level, HDU is often a designated corner of the labour ward staffed by midwives.\n\nThe midwife is the monitoring system. HDU outcomes ride on the quality and honesty of your observations — and on how loudly you act when a number moves.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Admission starts with early warning scores. Tools such as the modified early obstetric warning score (MEOWS) assign each observation a colour: one red parameter, or two amber ones, triggers urgent senior review — a respiratory rate of 30, a systolic pressure of 160 or above, a pulse over 120, a temperature of 38 degrees, saturations below 95 percent, or urine output under 100 mL in four hours. On HDU, observations run hourly or more often, alongside a fluid balance chart, oxygen and prescribed infusions.\n\nThe flagship drug of maternal HDU is magnesium sulphate. Its toxicity follows a predictable order, so monitoring follows the same order: respiratory rate, tendon reflexes and urine output — respirations below 16, absent reflexes or falling urine output mean stop the drug, assess, and call for help with calcium gluconate ready per protocol. Sepsis on HDU runs on the Sepsis Six within the first hour: oxygen, cultures, antibiotics, fluids, lactate and urine output. Know your step-up limits — ventilation or inotropes mean ICU — and your step-down criteria: stable observations for a defined period, drugs weaned, the woman sitting up and asking for food. Then hand over as carefully as you admitted her.",
      },
      {
        type: "clinical_pearl",
        body: "On HDU, trends matter more than snapshots. A pulse of 104 that was 88 an hour ago is louder than any single number on the chart.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A woman with severe pre-eclampsia has been on a magnesium sulphate infusion for six hours. On your hourly round you notice she is drowsy, her respiratory rate is 10, and the knee reflexes present an hour ago cannot now be elicited. Her urine output over the last four hours totals 60 mL.\n\nWhat is happening, and what do you do?\n\nAnswer: This is magnesium toxicity in its classic order — the falling urine output let the drug accumulate, the reflexes have gone, and respiration is now being depressed. Stop the infusion, open and support the airway, give oxygen, and call for senior help with 10 percent calcium gluconate available per protocol while monitoring closely. Then ask why it happened: the oliguria that let the drug build. This is exactly why magnesium monitoring is respiratory rate, reflexes and urine output every hour — the trend predicted the event before the respiratory rate became dangerous. Document the times and responses, and once she is stable and reviewed, plan step-down observations carefully.",
      },
      {
        type: "memory_trick",
        body: "Watch magnesium with R-R-U: Respirations (16 or more), Reflexes (present), Urine flowing. If any one fails — stop, support, call, with calcium ready.",
      },
      {
        type: "summary",
        body: "- HDU sits between ward and ICU: severe pre-eclampsia, sepsis, post-haemorrhage stabilisation, cardiac compromise.\n- Early warning scores trigger escalation: one red or two amber parameters means urgent review.\n- Monitor magnesium sulphate by respiratory rate, reflexes and urine output; calcium gluconate is the antidote.\n- Step up early for ventilation-level care; step down only on sustained stability, with a full handover.",
      },
    ],
    questions: [
      {
        topic: "High-Dependency Care",
        type: "MCQ",
        difficulty: "Easy",
        stem: "On an early obstetric warning score chart, escalation to urgent review is typically triggered by…",
        options: [
          "Any single amber parameter",
          "Three green parameters in a row",
          "A complaint from the patient",
          "One red parameter, or two amber parameters",
        ],
        correctIndex: 3,
        explanation:
          "The standard MEOWS rule: a single red observation, or any combination of two ambers, prompts urgent senior review — waiting for more evidence is how deterioration hides.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "High-Dependency Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which triad is monitored during magnesium sulphate therapy?",
        options: [
          "Respiratory rate, tendon reflexes and urine output",
          "Pulse, temperature and blood glucose",
          "Blood pressure, fetal heart and lochia",
          "Oxygen saturation, pupil size and calf circumference",
        ],
        correctIndex: 0,
        explanation:
          "Magnesium toxicity appears in a predictable order — reflexes lost, then respiration depressed — and oliguria drives accumulation. Respiratory rate, reflexes and urine output are the monitoring that catches it.",
        courseSlug: "advanced-maternal-newborn-care",
      },
      {
        topic: "High-Dependency Care",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A HDU woman's observations have been stable for 24 hours, her infusions are weaned, and she is sitting up eating. The appropriate next step is…",
        options: [
          "Immediate discharge home",
          "Transfer to ICU as a precaution",
          "Continuing HDU admission indefinitely",
          "Planned step-down to the ward with a full handover of the recent history",
        ],
        correctIndex: 3,
        explanation:
          "Sustained stability, weaned treatment and a woman eating and mobilising are classic step-down criteria — but the move is only safe with a complete handover of the course, drugs and remaining risks.",
        courseSlug: "advanced-maternal-newborn-care",
      },
    ],
    flashcards: [
      {
        topic: "High-Dependency Care",
        front: "What does MEOWS-style escalation look like?",
        back: "Observations are colour-coded; one red or two amber parameters — such as RR 30, systolic 160+, pulse 120+, temp 38, sats below 95 percent, urine under 100 mL in 4 hours — means urgent senior review.",
      },
      {
        topic: "High-Dependency Care",
        front: "How is magnesium sulphate toxicity monitored, and what is the antidote?",
        back: "Respiratory rate, tendon reflexes and urine output; if respirations fall below 16, reflexes disappear or urine output drops — stop the drug, support breathing, give calcium gluconate per protocol.",
      },
      {
        topic: "High-Dependency Care",
        front: "Name the Sepsis Six.",
        back: "Oxygen, blood cultures, broad-spectrum antibiotics, IV fluids, lactate measurement and urine output — all within the first hour.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors",
        year: "2017",
        url: "https://www.who.int/publications/i/item/9789241565493",
      },
      {
        organization: "World Health Organization",
        title: "Global Report on the Epidemiology and Burden of Sepsis",
        year: "2020",
        note: "WHO source — check for the latest maternal sepsis guidance update.",
      },
      {
        organization: "Elsevier",
        title: "Obstetrics: Normal and Problem Pregnancies (Gabbe's)",
        year: "2021",
        note: "8th edition — verify current edition.",
      },
    ],
  },
];
