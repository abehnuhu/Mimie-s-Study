// ─────────────────────────────────────────────────────────────
// MIMIE'S STUDY — BULK LESSON CONTENT
// Year 4, Semester 1 — Batch D (Leadership & Management)
// 8 lessons — carried from the original leadership content,
// re-themed for general ward leadership.
// Match key: courseSlug::moduleTitle::lessonTitle
// ─────────────────────────────────────────────────────────────
import type { SeedFullLesson } from "../types";

export const lessons: SeedFullLesson[] = [
  // ── 6 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Leadership Styles on the Ward",
    description:
      "Commanding, coaching, transforming — the styles and when each saves the day. Leadership is a toolkit you switch between, not a fixed personality.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the main leadership styles and their characteristic behaviours on a general ward.",
      "Explain why emergencies justify commanding leadership while learning requires coaching, and why laissez-faire endangers patients.",
      "Apply the principle of matching your style to the moment and to the experience of your team.",
    ],
    tags: ["leadership", "styles", "emergencies", "situational leadership"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "You have met them all: the sister who commands a resuscitation like a drumbeat, the tutor who grows students with questions, the officer-in-charge whose absence makes the ward drift. What looks like personality is actually a set of styles — and the mark of a mature nurse is switching between them deliberately.\n\nThis lesson names the styles you already recognise, shows which one each moment of ward nursing demands, and warns about the two extremes — command everywhere, and command nowhere — that both cost lives.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Commanding (directive) leadership** gives brief, clear instructions with named roles. In an emergency — a sepsis crash, a cardiac arrest, a deteriorating post-operative patient — it is the safest style on earth, because discussion is a luxury a dying patient cannot afford. Closed-loop communication completes it: give the order, hear it repeated back. **Democratic leadership** invites the team into decisions — rosters, ward routines — and buys ownership. **Transactional leadership** trades clear expectations for consistent follow-through: standards, checklists, honest monitoring. **Transformational leadership** paints a picture of better care and pulls people towards it — the engine of quality improvement. **Coaching** grows individuals through questions and feedback.\n\nSituational leadership ties them together: match the style to the person and the moment. A first-week student needs direction, not delegation; a senior colleague needs delegation, not hovering. **Laissez-faire** — abdication dressed up as trust — is the one style ward nursing cannot carry, because ward emergencies punish absent leadership within minutes. And remember: commanding is a tone, never a licence. The same calm respect runs through every style; only the directness changes. After the emergency, step deliberately back into coaching — the team that was commanded deserves the debrief that teaches.",
      },
      {
        type: "clinical_pearl",
        body: "The loudest style for the loudest moment, the quietest for growing people. Emergencies justify commands — they never license contempt. And when the crisis ends, your first question should change from 'do this now' to 'how did that feel?'",
      },
      {
        type: "case",
        title: "On the ward",
        body: "You are the senior nurse on a night shift on the surgical ward. A student is with a patient whose wound dressing suddenly soaks through with fresh blood while the pulse races. Seconds later you are in the bay.\n\nWhat does your leadership look like in the next sixty seconds — and in the hour that follows?\n\nAnswer: Command now: say the emergency aloud, call for help, assign the student to apply firm direct pressure with one clear instruction, and take the observations yourself. Afterwards, the style changes — sit with the shaken student, walk back through the minute together, and teach what her pressure achieved. Commanding carried the emergency; coaching, afterwards, turns it into learning. Both were leadership.",
      },
      {
        type: "memory_trick",
        body: "MATCH the style to the minute: Crisis — Command, Ward — Discuss, Growth — Coach, Standards — Trade. And never choose the missing style: Absent (laissez-faire) is how quiet wards become dangerous ones.",
      },
      {
        type: "summary",
        body: "- Commanding style belongs in emergencies: brief orders, named roles, closed-loop communication.\n- Democratic, transactional and transformational styles run the everyday unit and its improvement.\n- Coaching grows people; match your directness to each person's experience — situational leadership.\n- Laissez-faire is abdication, and ward emergencies punish it within minutes.\n- Commanding is a tone, not a licence — the same respect runs through every style; debrief after every commanded crisis.",
      },
    ],
    questions: [
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your ward has just called a cardiac arrest and you are the senior nurse. Which leadership approach fits the moment?",
        options: [
          "Step back and let the team decide their own roles by discussion",
          "Take command: assign roles aloud, give brief instructions and use closed-loop communication",
          "Leave the room to fetch the manager so the hierarchy is respected",
          "Observe quietly and give feedback about roles afterwards",
        ],
        correctIndex: 1,
        explanation:
          "Emergencies demand directive leadership — brief orders, named roles and repeat-back communication — because discussion and delay cost lives. Feedback and reflection come afterwards.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Why is laissez-faire leadership particularly dangerous on a hospital ward?",
        options: [
          "It motivates staff too strongly and causes burnout",
          "It works well in emergencies but fails on routine ward rounds",
          "The team receives no direction exactly where delay costs lives — emergencies and deteriorating patients need clear coordination",
          "It only fails with senior staff who dislike autonomy",
        ],
        correctIndex: 2,
        explanation:
          "Laissez-faire leaves the team rudderless precisely where minutes matter — ward emergencies and deteriorating patients punish absent leadership quickly. Autonomy is valuable, but within a structured, supervised service.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leadership Styles",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A newly qualified nurse, competent but new to your unit, works alongside a final-year student on your shift. What does situational leadership suggest?",
        options: [
          "Match your style to each person and the task — direct the student closely, coach the new nurse, and command only if emergency strikes",
          "Use one identical style with both so nobody feels treated differently",
          "Delegate fully to the student so she learns independence early",
          "Supervise neither, to build their confidence through trust",
        ],
        correctIndex: 0,
        explanation:
          "Situational leadership adapts directness to experience and risk: the student needs close direction, the new nurse needs coaching with space, and emergencies pull everyone briefly into command mode.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Leadership Styles",
        front: "Which leadership style belongs in a cardiac arrest call, and what does it look like?",
        back: "Commanding — the emergency named aloud, roles assigned, brief instructions, closed-loop repeat-back, one leader. Debrief into coaching afterwards.",
      },
      {
        topic: "Leadership Styles",
        front: "What is situational leadership?",
        back: "Matching your style to the person and the moment — direct beginners, coach the competent, delegate the expert, and command only when the situation demands it.",
      },
      {
        topic: "Leadership Styles",
        front: "Why can't ward nursing carry laissez-faire leadership?",
        back: "Because ward emergencies punish absent leadership within minutes — the team drifts exactly when coordination saves lives.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Curriculum for the Registered General Nursing (RGN) Programme",
        year: "2015",
        note: "Leadership and management module — professional roles and teamwork. Obtain the current version from NMC Ghana.",
      },
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        year: "2023",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
        note: "Command authority and closed-loop communication tools. Check for the latest version.",
      },
      {
        organization: "Elsevier",
        title: "Leading and Managing in Nursing",
        year: "2021",
        note: "Leadership styles and team leadership chapters. Educational source — verify current edition.",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Leading the Ward Team",
    description:
      "Motivating, resolving and directing — the everyday leadership of a busy unit. Huddles, handovers, honest feedback and a ward where anyone can speak up.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the daily rituals of a safe team — briefing, structured handover and debriefing.",
      "Explain how early, private conflict resolution and psychological safety protect patients from error.",
      "Apply SBAR and closed-loop communication in your own shift leadership.",
    ],
    tags: ["team", "leadership", "sbar", "huddle", "conflict", "psychological safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Between the emergencies, ward nursing is a relay: one shift hands the ward to the next, and any dropped baton lands on a patient's chart. Leading the team day to day is about the small rituals that keep hands connected — the morning huddle, the structured handover, the honest word after a hard night.\n\nThis lesson covers the working tools of team leadership: allocating tasks, handing over with SBAR, resolving conflict before it fester, motivating people who are tired, and building a ward where the most junior person present can still say 'I am worried about that patient'.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Open the day with a **huddle** — five minutes standing: who is on, which beds hold which risks, what is expected today, who leads emergencies. It converts eight individuals into one team. Hand over with **SBAR** — Situation, Background, Assessment, Recommendation — so the next nurse receives a story with a spine, and use closed-loop communication for verbal instructions: she repeats the drug and dose back before it is given. Allocate tasks to skill and acuity: the weakest pair should not hold the high-acuity bays alone. Guard breaks and fairness like clinical tools, because fatigue is a clinical risk.\n\nWhen conflict brews — and on any busy ward it will — act early and privately: describe the behaviour and its effect on patients rather than the person's character, listen more than you speak, and agree how the next shift will work. Unresolved conflict does not stay in the staff room; it leaks into missed information and near misses. Feed motivation with specificity: 'Ama, your calm on that drip last night saved the transfer' outlives a generic 'well done'. And build **psychological safety** deliberately: thank anyone who raises an alarm, however junior, and hold a hot debrief after every emergency — five minutes on what went well, what to change, and who needs support. Teams that can speak up catch mistakes before they reach patients.",
      },
      {
        type: "clinical_pearl",
        body: "Praise in public with the name and the deed; correct in private with the behaviour and its risk. And after every emergency, spend five minutes on the hot debrief — the cheapest quality improvement tool you own.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Two colleagues have not spoken since a disagreement over a handover three days ago. On your morning huddle, a student quietly says she thinks the patient in bed 4 is breathing faster than the chart shows — and one of the feuding pair rolls her eyes. The other heads to check alone, without telling anyone.\n\nAs shift leader, what do you do in the next ten minutes?\n\nAnswer: First the patient: attend bed 4 with the student and the colleague — two assessors, openly, validating the student for speaking. Once the patient is safe, close the loop with both colleagues privately, separate or together: name what silence and solo checks do to safety, and agree today's communication rules. If the feud persists, escalate to the unit head. The huddle tomorrow can revisit 'we check together, we say thank you'.",
      },
      {
        type: "memory_trick",
        body: "Run every shift as a relay: HUDDLE at the start, SBAR at every baton pass, DEBRIEF at the storm. And keep the lane rule sacred — concern travels upward instantly, correction travels sideways privately.",
      },
      {
        type: "summary",
        body: "- Huddle to open the day: people, risks, roles — eight individuals become one team.\n- Hand over with SBAR and repeat back verbal orders before acting on them.\n- Resolve conflict early and privately, about behaviour and its risks, never character.\n- Motivate with specifics and fairness; fatigue and favouritism are clinical risks.\n- Build psychological safety: any voice can raise the alarm, and every emergency gets its hot debrief.",
      },
    ],
    questions: [
      {
        topic: "Leading the Ward Team",
        type: "MCQ",
        difficulty: "Easy",
        stem: "In a structured handover, what does SBAR stand for?",
        options: [
          "Symptoms, Bloods, Assessment, Response",
          "Situation, Background, Action, Review",
          "Situation, Background, Assessment, Recommendation",
          "Story, Background, Assessment, Referral",
        ],
        correctIndex: 2,
        explanation:
          "SBAR hands over a story with a spine — what is happening, the background, your assessment, and what you recommend next. The others are inventions.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leading the Ward Team",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Two colleagues have stopped speaking to each other, and you notice information being missed between them on the ward. As shift leader, what should you do?",
        options: [
          "Ignore it — personal matters are private and will resolve themselves",
          "Discuss it openly at the morning huddle so everyone learns from it",
          "Report them both to the district director immediately",
          "Address it early and privately with both, focusing on the behaviour, its risk to patients and how communication will work this shift",
        ],
        correctIndex: 3,
        explanation:
          "Conflict on a busy ward is a safety issue: silence between carers becomes missed information. Early, private, behaviour-focused resolution — with escalation if it persists — protects the patients.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Leading the Ward Team",
        type: "MCQ",
        difficulty: "Easy",
        stem: "During a busy shift, a student says she is worried that a post-operative patient is deteriorating. What does a psychologically safe team do?",
        options: [
          "Tells her to wait until the ward round",
          "Asks her to prove it first with a full assessment alone",
          "Reminds her that seniors decide what matters",
          "Takes the concern seriously, checks the patient together and thanks the student for speaking up",
        ],
        correctIndex: 3,
        explanation:
          "Psychological safety means any voice can raise the alarm and be heard. Teams that thank juniors for speaking up catch deterioration earlier — teams that silence them meet it later.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Leading the Ward Team",
        front: "What does SBAR stand for, and when do you use it?",
        back: "Situation, Background, Assessment, Recommendation — the structure for every handover and every call-ahead referral.",
      },
      {
        topic: "Leading the Ward Team",
        front: "What is a hot debrief?",
        back: "A five-minute team review immediately after an emergency: what went well, what we would change, and who needs support — the cheapest quality improvement tool you own.",
      },
      {
        topic: "Leading the Ward Team",
        front: "How do you resolve conflict between colleagues safely?",
        back: "Early and privately; describe the behaviour and its effect on patients, not the person's character; listen; agree how the next shift will run; escalate if it persists.",
      },
    ],
    sources: [
      {
        organization: "Agency for Healthcare Research and Quality",
        title: "TeamSTEPPS: Team Strategies and Tools to Enhance Performance and Patient Safety",
        year: "2023",
        url: "https://www.ahrq.gov/teamstepps-program/index.html",
        note: "SBAR, huddles, closed-loop communication and mutual support. Check for the latest version.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
        note: "Teamwork, communication and what-if reflection exercises. Verify current edition.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Leadership and communication chapters. Educational source — verify current edition.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Leading Teams",
    lessonTitle: "Supervising and Mentoring Others",
    description:
      "Passing on what you've learned — supervision that grows safe practitioners. How to watch without hovering, feedback that lands, and a signature you protect.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe direct and indirect supervision and the accountability that travels with your signature.",
      "Explain the brief-observe-debrief cycle and the SBI pattern for feedback.",
      "Apply the correct course when a student is struggling or unsafe — honesty, documentation and escalation.",
    ],
    tags: ["supervision", "mentorship", "feedback", "students", "accountability"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Final semester: soon, students will arrive on your ward looking at you the way you once looked at your seniors. Supervision is where the profession renews itself — and it is also a legal and clinical duty, because a student's hands work under your licence and your judgement.\n\nThis lesson is about doing it well: deciding how closely to watch, giving feedback that changes practice rather than bruises it, and knowing what to do when a student is simply not safe — including the hardest rule of all, protecting your signature.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "**Direct supervision** means you watch the act itself; **indirect supervision** means you are reachable and check afterwards. The choice follows risk and readiness: a first catheterisation is watched; a competence already assessed is checked, not hovered over. Either way, accountability stays with you. Structure every supervised act as **brief — observe — debrief**: agree the goal, watch without rescuing at your comfort line (intervene at the safety line), then debrief. Feedback follows **SBI** — Situation, Behaviour, Impact: 'At the 8 am check (situation), you charted a pulse you had not counted (behaviour), so we nearly missed the sepsis that pulse was announcing (impact)' — then ask her view and agree the change. Good feedback is soon, private, specific and two-way; praise belongs in public, correction never does.\n\nWhen a student struggles, honesty is the kindness: early clear feedback, a written learning plan with dates, and a call to her college tutor — not a quiet hope that the next placement will fix it. And the rule that keeps patients safe: **never sign competence you have not seen** — your signature is a professional promise to the next team that this nurse can do this act alone. Mentoring reaches beyond a shift — questions instead of answers, challenge with warmth, sponsorship across years. Be the supervisor you needed at 2 am.",
      },
      {
        type: "clinical_pearl",
        body: "Intervene at the safety line, not at your comfort line — a student who is never allowed to struggle never learns judgement, and one allowed to drown learns only fear. And a signature given as a gift is theft: it steals safety from the next patient.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student in her final placement charted a pulse of 76 for a post-operative patient — but a colleague saw her take the patient's wrist for barely five seconds. The patient is well, but the pattern has happened twice now, and the student avoids you since the last correction.\n\nWhat do you say to her, and in what pattern?\n\nAnswer: Somewhere private, use SBI: at the 8 am check the pulse was charted without a full minute counted — twice now — so a rising pulse could hide behind the number, exactly what this ward watches for after major surgery. Then listen: is she rushed, afraid of looking slow, overloaded? Agree the plan — count a full minute, every time, and show you one chart daily — and tell her plainly that competence cannot be signed on numbers she has not truly taken. Involve her tutor early. Honest feedback, offered with respect, is the kindest thing she can receive this term.",
      },
      {
        type: "memory_trick",
        body: "BOD: Brief, Observe, Debrief — every supervised act is a lesson planned backwards. And feedback goes SBI: Say what you SAW (situation, behaviour), name what it DID (impact) — then ask, then agree.",
      },
      {
        type: "summary",
        body: "- Direct supervision for new or high-risk acts, indirect for assessed competence — accountability stays with you either way.\n- Structure supervision as brief, observe, debrief; intervene at the safety line, not your comfort line.\n- Feedback with SBI — situation, behaviour, impact — soon, privately, specifically, two-way.\n- A struggling student needs honest early feedback, a written learning plan and her tutor involved.\n- Never sign competence you have not seen; mentoring extends beyond the shift into years.",
      },
    ],
    questions: [
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A student nurse performs a wound dressing under your supervision. Who is accountable for the procedure and its documentation?",
        options: [
          "The student alone, since she performed the dressing",
          "You, the supervising nurse — accountability follows supervision",
          "Whoever reads the note at the next shift",
          "The college, because it placed the student with you",
        ],
        correctIndex: 1,
        explanation:
          "A student's clinical acts travel under her supervisor's licence and judgement. Accountability sits with you — which is why how closely you supervise is itself a clinical decision.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which piece of feedback follows the SBI pattern?",
        options: [
          "'You are careless with observation charts.'",
          "'You are doing well overall — keep it up.'",
          "'At the 8 am check you charted a pulse without counting it, so we nearly missed the patient's deterioration — how did that happen, and what will you change?'",
          "'I have told your tutor about your performance.'",
        ],
        correctIndex: 2,
        explanation:
          "SBI names the situation, the observable behaviour and its impact, then opens a two-way conversation. Labels, vague praise and escalation behind her back change nothing and teach nothing.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Supervising and Mentoring Others",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student remains unsafe in practice despite repeated feedback. What is the correct course of action?",
        options: [
          "Be honest early, set a documented learning plan, involve her college tutor — and never sign competence you have not seen",
          "Sign her final assessment to protect her morale and her career",
          "Let her pass and hope the first employer fixes the problem",
          "Stop supervising her so the responsibility passes elsewhere",
        ],
        correctIndex: 0,
        explanation:
          "Honest, documented, escalated support is the kind response — and the safe one. A gift signature is theft of safety from the next patient, and abandoning supervision merely relocates the risk.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Supervising and Mentoring Others",
        front: "Direct versus indirect supervision — when do you use each?",
        back: "Direct (you watch the act) for new or high-risk skills; indirect (reachable, check after) for already-assessed competence. Accountability stays with you in both.",
      },
      {
        topic: "Supervising and Mentoring Others",
        front: "What does SBI feedback stand for?",
        back: "Situation, Behaviour, Impact — name when, what was done, and what it risked; then ask her view and agree the change. Soon, private, specific, two-way.",
      },
      {
        topic: "Supervising and Mentoring Others",
        front: "Why must you never sign competence you have not seen?",
        back: "Your signature is a professional promise to the next team and the next patient that this nurse can do the act alone — given as a favour, it becomes a safety risk.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Delegation, supervision and scope of practice. Obtain the current version from NMC Ghana.",
      },
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
        note: "Supervision, feedback and learning from error. Verify current edition.",
      },
      {
        organization: "Elsevier",
        title: "Leading and Managing in Nursing",
        year: "2021",
        note: "Coaching, mentoring and delegation chapters. Educational source — verify current edition.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Running the Unit: A Manager's View",
    description:
      "Rosters, beds and throughput — the management reality behind good care. The daily rhythm that keeps a busy ward safe and moving.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the daily management rhythm of a busy ward — floor walk, huddle, flow, stock and data.",
      "Explain triage, bed flow and rostering principles that protect quality under pressure.",
      "Apply the escalation and stock-discipline habits that prevent midnight failures.",
    ],
    tags: ["management", "operations", "triage", "stock management", "rostering"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Good clinical care happens inside a machine — beds, rosters, drug stocks, theatre lists, data forms — and when the machine stutters, patients feel it before anyone says a word. This lesson takes you to the manager's chair: the view from behind the desk that is really taken on your feet, walking the ward.\n\nYou will follow the shape of a managed day, learn the flow and triage principles that keep a busy unit moving, and meet the quiet disciplines — stock cards, first-expire-first-out, escalation notes — that separate a unit that runs from one that survives by luck.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Open the day with the **night report and a floor walk** — bed by bed, patient by patient — then a huddle to set roles and risks. Manage flow deliberately: triage every arrival by urgency, not arrival order; plan discharges early to free beds; coordinate with theatre and the referral hospital instead of competing with them. Build rosters around 24/7 senior cover, skill mix, fatigue limits and predictable surges — market days, festivals, rainy-season roads — a plan that ignores market Monday is a fantasy. Stocks follow discipline: cards with minimum and maximum levels, monthly counts, **first-expire-first-out** so no ampoule dies on the shelf, and weekly counts of consumables — the empty shelf is always discovered at midnight.\n\nData closes the loop: daily numbers feed the registers, the registers feed DHIMS, and DHIMS feeds the district's decisions — a unit that does not count itself cannot be defended or resourced. Track your monthly indicators (admissions, referrals, healthcare-associated infections, medication errors, pressure injuries) and let them argue for you. Above all, be visible and be honest: the manager who only manages from the office manages yesterday's ward. When the day outruns you, escalate early to the district with the risk written down — a documented shortage becomes a decision; an undocumented one becomes a secret that waits to become an emergency.",
      },
      {
        type: "clinical_pearl",
        body: "Walk the floor every morning, and count the boxes every Monday — the empty shelf and the brewing crisis are both found first by feet, not paperwork. And whatever outruns you, write the risk down: a documented shortage becomes the district's decision; a silent one becomes tonight's emergency.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "At 7 pm the night nurse reports: two staff on sick leave, a full ward of twenty patients — one post-operative patient with a rising fever, one drowsy diabetic whose last glucose reading was low — and only four bags of IV fluid in the cupboard, with one more patient expected back from theatre tonight.\n\nAs the manager, what are your first moves?\n\nAnswer: People and supplies, in that order of thinking but together in action — redeploy staff to guarantee one senior and one junior on the ward, borrowed from the outpatient department with a documented handover; alert the doctor on call and the regional hospital about the deteriorating patients, with the drowsy diabetic's glucose checked and treated first; and confirm your fluids, antibiotics and oxygen supply with the pharmacy and a neighbouring facility before midnight, not after. Inform the district on-call manager and record the gap in the risk book; then set the night's priorities aloud at handover.",
      },
      {
        type: "memory_trick",
        body: "A unit runs on SSS: Staff on the floor, Supplies on the shelf, Systems on the wall — check all three before the day checks you. Triage the door, count the boxes, walk the floor, write the risk.",
      },
      {
        type: "summary",
        body: "- Start each day with the night report, a floor walk and a huddle that names roles and risks.\n- Triage by urgency rather than arrival order; plan discharges and theatre time to keep flow moving.\n- Roster for 24/7 senior cover, true skill mix and known surges like market days.\n- Stock discipline: cards, minimum-maximum levels, monthly counts and first-expire-first-out.\n- Count the unit in data (DHIMS, monthly indicators), and escalate shortages in writing, early.",
      },
    ],
    questions: [
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Your stock room holds three batches of IV fluids with different expiry dates. Which principle guides which stock is used first?",
        options: [
          "First-arrived, first-used, regardless of expiry",
          "Use the newest stock first and keep the older batches as spare",
          "Use stock in whatever order the shelf happens to be stacked",
          "First-expire, first-out — the batch expiring soonest leaves the shelf first",
        ],
        correctIndex: 3,
        explanation:
          "First-expire-first-out ensures no bag dies unused on the shelf — the batch that expires tomorrow is the one that should be opened first, if it is still sealed and properly stored.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Three patients arrive together: one with fresh bleeding from a wound drain, one with sudden confusion and a high fever, one for a routine dressing change. What does triage mean here?",
        options: [
          "First-come, first-served, in strict order of arrival",
          "Send all three to the general outpatient queue",
          "Rank by urgency — the bleeding patient is seen first, the confused patient with fever next, the routine dressing waits briefly",
          "Ask the three patients to agree among themselves who is seen first",
        ],
        correctIndex: 2,
        explanation:
          "Triage means rapid ranking by clinical urgency: bleeding outranks infection, which outranks routine review. Arrival order is a queue, not a clinical judgement — and queues miss bleeding.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Running the Unit",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The night shift reports two staff on sick leave with a full ward and two deteriorating patients. As manager, what is the safest first action?",
        options: [
          "Keep it quiet and hope the night survives",
          "Escalate at once, redeploy staff to cover the acute bays, and document the risk",
          "Cancel all routine observations for 24 hours without informing anyone",
          "Leave the remaining staff to decide individually whether to work",
        ],
        correctIndex: 1,
        explanation:
          "A staffing gap is a clinical risk that is escalated immediately and documented, with coverage prioritised to the acute and high-dependency patients. Silence and self-selection are how wards drift into emergencies.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Running the Unit",
        front: "What is the FEFO rule for drug stock?",
        back: "First-expire, first-out — the batch with the soonest expiry date is used first, so nothing dies on the shelf while fresher stock goes out.",
      },
      {
        topic: "Running the Unit",
        front: "What does the daily management rhythm of a busy ward look like?",
        back: "Night report and floor walk, huddle for roles and risks, triage and flow management through the day, stock and theatre coordination, and data into the registers and DHIMS.",
      },
      {
        topic: "Running the Unit",
        front: "Why must shortages be escalated in writing?",
        back: "A documented shortage becomes the district's decision and can be resourced; an undocumented one stays a secret until it becomes a midnight emergency.",
      },
    ],
    sources: [
      {
        organization: "Ghana Health Service",
        title: "Ghana Health Service and Teaching Hospitals Act (Act 526)",
        year: "1996",
        note: "Mandate and standards for service organisation, referral and record keeping. Educational reference — verify the current edition with your facility.",
      },
      {
        organization: "Ghana Health Service",
        title: "District Health Information Management System (DHIMS) reporting requirements",
        note: "Routine data reporting for health facilities. Verify current version with your district health directorate.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "National Health Policy",
        year: "2020",
        note: "Service delivery priorities and health system management. Educational reference — verify current edition.",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Quality Improvement on the Ward",
    description:
      "Audit cycles and change projects — making care measurably better. Quality improvement without blame, from observation charts to PDSA cycles.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the audit cycle and the PDSA approach to testing change.",
      "Explain how morbidity and mortality reviews turn tragedy into system learning without blame.",
      "Apply indicator selection and a small improvement project to your own unit.",
    ],
    tags: ["quality improvement", "audit", "pdsa", "patient safety", "indicators"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Quality improvement sounds like something done to wards by people with laptops. In truth it is what nurses have always done informally — 'we keep missing deteriorating patients on the night shift, why?' — made disciplined. Instead of a story, you get a cycle; instead of a blame, a system.\n\nThis lesson covers the audit cycle, PDSA testing, and the morbidity and mortality reviews Ghana's hospitals run — the machinery by which a ward learns from its worst days and proves its better ones with numbers.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "The **audit cycle** is a circle with five stations: set the standard (from WHO or national guidance — 'every patient on hourly monitoring has a completed observation chart'), measure current practice, compare practice with the standard, act on the gaps, then **re-audit** to close the loop. The re-audit is what separates improvement from a photograph of failure. When the change itself needs testing, use **PDSA**: plan a small trial, do it on one shift or one station, study the numbers, and act on what worked before spreading it. Small tests survive politics; grand launches die in them.\n\n**Morbidity and mortality (M&M) reviews** — with the incident reporting system behind them — examine every death and serious harm event, seeking avoidable factors across the whole journey: the patient's presentation, the ward, the facility, the referral chain. Its soul is **no blame**: the moment review becomes punishment, the reports become fiction, and the next serious event goes unwritten. Choose indicators you can count honestly from existing registers — observation-chart completion, antibiotics given on time, pressure-injury risk assessments done, referrals arriving with notes — and study them monthly. Two rules make QI live: involve the people who do the work, and feed the numbers back to them. A chart on the wall that the team itself fills in moves practice more than any circular from the region.",
      },
      {
        type: "clinical_pearl",
        body: "Measure only what you can explain in one sentence — 'we count observation charts so no deterioration goes unwatched'. And every indicator you own, share with the team monthly: numbers posted on the ward wall change behaviour faster than numbers filed in the office.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your monthly data shows observation charts are fully completed for only 40 percent of patients on hourly monitoring. The senior nurses blame workload; the juniors blame the observation charts running out mid-shift. You volunteer to lead the improvement.\n\nWalk through your first six weeks: what do you do first, and how will you know it worked?\n\nAnswer: First make the problem visible and honest: count again yourself, by shift and by station, and share the breakdown with the team — audit with them, not at them. Diagnose the gaps (forms genuinely unavailable at night; no clock at the bedside; midnight entries back-filled). Then PDSA the fixes small: pre-stocked chart packs with a pen and the times pre-ruled, trialled on one station for two weeks. Study the numbers, keep what worked, and spread station by station. At six weeks, re-audit: the cycle closes only when the new figure is measured — and shared.",
      },
      {
        type: "memory_trick",
        body: "PDSA: Plan a small test, Do it, Study the numbers, Act on what worked — then spread it. And remember the circle's rule: audit without re-audit is just a photograph of failure.",
      },
      {
        type: "summary",
        body: "- Audit cycle: set the standard, measure, compare, act, re-audit — the last step closes the loop.\n- PDSA tests change small and early: one station, two weeks, then spread what the numbers bless.\n- M&M reviews examine every death and serious event for avoidable factors without blame — blame makes reports fiction.\n- Choose countable indicators from existing registers and study them monthly.\n- Involve the front line and post results where the team works — numbers on the wall change practice.",
      },
    ],
    questions: [
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Put the audit cycle in its correct order.",
        options: [
          "Change practice, set a standard, measure, compare",
          "Measure, change, set a standard, re-measure",
          "Compare, set a standard, change, measure",
          "Set the standard, measure current practice, compare with the standard, act on gaps, re-audit",
        ],
        correctIndex: 3,
        explanation:
          "The cycle begins with an explicit standard, then measures real practice against it, acts on the gaps, and re-audits to prove the change held. Skipping the re-audit leaves the loop open.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What is the core purpose of morbidity and mortality (M&M) reviews?",
        options: [
          "To identify the staff member responsible for each death",
          "To learn without blame — find the avoidable factors, act on them and monitor the response",
          "To complete national statistics forms for the ministry",
          "To protect the facility from media attention",
        ],
        correctIndex: 1,
        explanation:
          "M&M review is a learning system: it traces avoidable factors across the patient, the ward, the facility and the referral chain, then drives and tracks the response. The moment it seeks culprits, honest reporting dies.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Quality Improvement",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Your observation-chart completion is 40 percent. You decide to test pre-packed chart packs on one station for two weeks before rolling out ward-wide. What method is this?",
        options: [
          "A randomised controlled trial",
          "A full policy change with immediate effect",
          "A PDSA cycle — plan, do, study, act on a small scale before spreading",
          "A disciplinary measure for the night staff",
        ],
        correctIndex: 2,
        explanation:
          "Testing one change, in one place, for a short time, then studying the result before spreading is exactly PDSA. It is deliberately smaller than a trial and safer than a grand launch.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Quality Improvement",
        front: "Name the five stations of the audit cycle.",
        back: "Set the standard, measure current practice, compare with the standard, act on the gaps, re-audit to close the loop.",
      },
      {
        topic: "Quality Improvement",
        front: "What does PDSA stand for, and what scale does it work at?",
        back: "Plan, Do, Study, Act — a small test of change (one station, one fortnight) whose numbers decide whether you spread it.",
      },
      {
        topic: "Quality Improvement",
        front: "Why do M&M reviews insist on no blame?",
        back: "Blame makes reviews punitive and reports fictional — serious events go unreported and the avoidable factors stay hidden. No blame keeps the system honest enough to learn.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "Global Patient Safety Action Plan 2021–2030",
        year: "2021",
        note: "Learning systems, incident reporting and no-blame review culture. Educational reference — verify current WHO guidance.",
      },
      {
        organization: "Institute for Healthcare Improvement",
        title: "Science of Improvement: How to Improve",
        url: "https://www.ihi.org/resources/Pages/HowtoImprove/default.aspx",
        note: "The PDSA cycle and model for improvement. Educational source — verify current version.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "National Healthcare Quality Strategy 2017–2021",
        year: "2017",
        note: "National quality improvement priorities and measurable indicators. Educational reference — verify current edition.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Managing Services",
    lessonTitle: "Staffing and Resource Decisions",
    description:
      "Nurses, drugs and equipment on limited budgets — the hard arithmetic of management. Who covers the night, what you buy first, and how to argue upward with data.",
    difficulty: "Moderate",
    durationMin: 12,
    objectives: [
      "Describe the principles of safe staffing — skill mix, 24/7 senior cover, workload and acuity.",
      "Explain how to prioritise resources on a limited budget, and why consumables outrank gadgets.",
      "Apply the escalation ladder when staffing or supplies fall below safe levels.",
    ],
    tags: ["resources", "staffing", "skill mix", "budgeting", "escalation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Some of the hardest decisions in ward management are not clinical at all: with six nurses, one budget line and a forty-bed medical ward, who works the night of the festival, and which missing item goes on the requisition? WHO's State of the World's Nursing 2020 counts Ghana among the countries short of the nurses it needs — so scarcity is not an occasional crisis; it is the working environment.\n\nThis lesson is about the arithmetic you will actually face: staffing principles that protect safety with the people you have, resource choices that save the most lives per cedi, and the discipline of escalating upward with evidence instead of enduring in silence.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Safe staffing rests on **skill mix**: every shift blends senior and junior, so supervision and experience never leave the building, and 24/7 senior cover is protected before anything else is planned. Workload counts acuity, not just beds — a patient in septic shock on hourly observations is two patients of work in one bed. Task sharing has boundaries: a community health officer can support observations and dressings under supervision; medication administration and clinical decisions stay with the licensed nurse. When the roster falls short, the ladder is fixed: never leave the acute bays uncovered, redeploy from lower-risk areas, call the on-call manager and district, postpone non-urgent services, and document the shortfall and its risk.\n\nOn resources, buy what treats the emergency before anything that beeps: IV fluids and giving sets, antibiotics, oxygen, catheters, gloves and glucometer strips are the equipment of survival, and their stock-outs kill quietly. Discipline the pipeline with stock cards, minimum-maximum levels, monthly counts and first-expire-first-out; budget for maintenance of the suction and generator, not only purchases. And when the budget is simply too small, argue with data: your monthly indicators and the district's referral numbers are a language the directorate understands. A manager who says 'we had three near-misses when the IV fluids ran out' is heard; one who says 'we need more things' is not.",
      },
      {
        type: "clinical_pearl",
        body: "When you must choose, buy what treats the emergency and fits in a fist before anything with a screen. And never spend the senior cover: the night shift's experienced nurse is the single most expensive item you will be tempted to save on.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "Your quarterly allocation arrives. It can cover either a new desktop computer for the office or a six-month buffer of IV fluids, giving sets, antibiotics and catheter packs — plus one refresher for two nurses. The records clerk lobbies hard for the computer, and the DHIMS reporting genuinely needs one.\n\nWhat do you choose, and how do you justify it?\n\nAnswer: The consumables and the training come first: fluids and first-line antibiotics treat the sepsis no computer can, and the observation chart is the single cheapest life-saving tool in the building. Justify it in writing with your own data — last year's sepsis transfers and any stock-out days — so the district sees the risk, not a preference. For the computer, escalate a documented request: a unit that can show its numbers is harder to refuse, and sometimes gets both.",
      },
      {
        type: "memory_trick",
        body: "Cover the floor before you polish the ceiling: a warm, skilled body at the ward door beats a new machine in the office. Staff on the floor, supplies on the shelf — then screens.",
      },
      {
        type: "summary",
        body: "- Safe staffing = skill mix: senior and junior on every shift, 24/7 senior cover protected first.\n- Count workload by acuity, not just beds; medication and clinical decisions stay with the licensed nurse.\n- When short, follow the ladder: cover the acute bays first, redeploy, escalate to district, document the risk.\n- Buy consumables that save lives — fluids, antibiotics, catheters, oxygen — before gadgets.\n- Argue for resources with your own data: near-misses and stock-out days speak louder than wishes.",
      },
    ],
    questions: [
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What does 'skill mix' mean when planning a ward duty roster?",
        options: [
          "Employing only the most senior nurses the facility can afford",
          "Rotating every staff member through every unit each month",
          "Combining senior and junior staff on every shift so experience and supervision are always present",
          "Matching nurses to patients of similar age and background",
        ],
        correctIndex: 2,
        explanation:
          "Skill mix guarantees that every shift carries both competence and supervision — a ward of only juniors or only seniors wastes one and endangers the other. One style of staff cannot cover the night safely.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "You can fund only one item this quarter. Which purchase aligns best with patient safety on a limited budget?",
        options: [
          "Restocking IV fluids, antibiotics, catheters and dressing packs — the consumables that treat sepsis and keep wounds safe",
          "A decorative renovation of the waiting area",
          "A new office computer for personal records",
          "A plaque listing the facility's achievements",
        ],
        correctIndex: 0,
        explanation:
          "Consumables carry the highest lives-saved per cedi: fluids and antibiotics treat sepsis and shock, and sterile dressings prevent infection. Renovations and office equipment never resuscitate anyone.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Staffing and Resources",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "The night shift is dangerously short of nurses. Which response is correct?",
        options: [
          "Stop all new admissions silently and redirect patients to the regional hospital without notice",
          "Ask one nurse to manage everything alone to demonstrate commitment",
          "Wait for the morning meeting to raise the problem",
          "Escalate immediately to the on-call manager and district, prioritise essential services and document the decision and its risks",
        ],
        correctIndex: 3,
        explanation:
          "Dangerous short-staffing is escalated at once and in writing, with cover prioritised to the acute and high-dependency patients. Quiet closure, heroic solo cover and delayed reporting all leave patients exposed overnight.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Staffing and Resources",
        front: "What two staffing features must be protected first in any roster?",
        back: "Skill mix — senior and junior together on every shift — and guaranteed 24/7 senior cover.",
      },
      {
        topic: "Staffing and Resources",
        front: "What is the first rule of staffing escalation when the night is short?",
        back: "The ward and its acute patients are never left uncovered: redeploy from lower-risk areas, call the on-call manager and district, postpone non-urgent services, and document the shortfall and its risk.",
      },
      {
        topic: "Staffing and Resources",
        front: "Why do consumables outrank equipment purchases on a tight budget?",
        back: "Fluids, antibiotics, catheters and dressings directly fight the killers — sepsis, shock and infected wounds; no screen or sign has ever resuscitated a patient.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "State of the World's Nursing 2020",
        year: "2020",
        note: "Global and national nursing workforce estimates including Ghana. Educational reference — verify current data.",
      },
      {
        organization: "World Health Organization",
        title: "Global Strategy on Human Resources for Health: Workforce 2030",
        year: "2016",
        note: "Staffing, retention and skill-mix policy framework. Educational reference — verify current guidance.",
      },
      {
        organization: "Ministry of Health, Ghana",
        title: "Essential Medicines List and Standard Treatment Guidelines",
        note: "Priority medicines and consumables for procurement planning. Educational reference — verify current edition.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Your Professional Journey",
    lessonTitle: "Planning Your Professional Development",
    description:
      "Specialisation, further study and career paths — designing your future deliberately. CPD, portfolios and the five-year plan you write before life writes it for you.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the CPD obligations attached to practising as a nurse in Ghana and the portfolio that evidences them.",
      "Explain the career paths open to a nurse — specialist clinical practice, public health, education, management and research.",
      "Apply SMART goal setting to build a five-year professional development plan.",
    ],
    tags: ["career", "cpd", "portfolio", "smart goals", "specialisation"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "This is your last semester, and the question under every lecture is the same: what next? Left unplanned, a career drifts — years pass in the same ward, the same skills, while the licence quietly waits for a renewal you are unprepared for. Planned, it compounds: each year adds a skill, a certificate, a contact, a door.\n\nThis lesson gives you the machinery of deliberate growth: the CPD and portfolio that keep you legal and employable, the paths nurses actually take in Ghana, and the five-year plan that turns wishes into diary entries.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "Your licence is not a lifetime gift: the **Nursing and Midwifery Council of Ghana** expects documented continuing professional development for renewal — attend and record your courses, in-services and case reviews now, because reconstructing them three years later is misery. Build a **portfolio** as you go: certificates, reflective accounts written in the Gibbs cycle, case logs, appraisals and feedback. A reflection written the morning after a hard night is portfolio gold; one written the week before an interview is costume jewellery.\n\nThe paths themselves branch. Clinical depth runs through the **Ghana College of Nurses and Midwives** membership and fellowship — the specialist nurse of critical care, perioperative or community health practice. Public health calls through the MPH and district-level leadership; education through teaching qualifications and tutor posts; management through health administration; research through further degrees and the projects you already know how to design. Short courses stack fast: life support, emergency triage, wound and stoma care, infection prevention and control. Join your professional association — the Ghana Registered Nurses Association — because networks carry news of openings before any notice board. Then write the plan in **SMART** ink: specific, measurable, achievable, relevant, time-bound. 'Complete a life-support course and lead this unit's emergency drills by December' is a plan; 'become a very good nurse' is a mood.",
      },
      {
        type: "clinical_pearl",
        body: "Write the reflection while the ink is fresh: yesterday's night shift is next month's portfolio entry and next year's promotion evidence. And review your five-year plan every year — careers are steered in small corrections, not one grand turning.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A diploma-holding nurse, three years qualified, tells you she feels stuck: the same ward, the same shifts, and no idea what she is working towards. She loves emergency drills but dreads teaching students. Her unit has promised study leave 'next year' for the past two years.\n\nHow will you help her draft the first version of her plan?\n\nAnswer: Start with the evidence she already has — three years of records, a knack for emergencies, a BSc top-up application due in six months — and set SMART steps around them: apply for the top-up this quarter, complete a life-support course within the year, ask her officer-in-charge to co-lead one drill monthly, and join the nurses' association now for the network. She logs everything in a portfolio from today, reviews the plan quarterly, and chases the study leave in writing with her unit's support rather than waiting for the promise.",
      },
      {
        type: "memory_trick",
        body: "PD goes SMART: Specific, Measurable, Achievable, Relevant, Time-bound — a goal you cannot diary is a daydream. And the portfolio rule: file the story the morning after, not the interview before.",
      },
      {
        type: "summary",
        body: "- Licence renewal requires documented CPD — record courses and reflections as they happen, not retroactively.\n- Keep a living portfolio: certificates, Gibbs reflections, case logs, appraisals, feedback.\n- Paths branch: Ghana College specialist training, public health, education, management, research — plus short courses and your association's network.\n- Write SMART goals: specific, measurable, achievable, relevant, time-bound.\n- Review the five-year plan yearly; careers are steered by small corrections, not one grand turn.",
      },
    ],
    questions: [
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Why does the Nursing and Midwifery Council of Ghana require documented continuing professional development?",
        options: [
          "To generate income for the Council through course fees",
          "To rank nurses nationally for promotion",
          "To limit how many nurses can practise in each district",
          "To keep knowledge and skills current so the licence to practise is renewed responsibly",
        ],
        correctIndex: 3,
        explanation:
          "CPD exists so that the nurse who renews her licence can prove her practice is current — guidelines change and skills fade. Check the current requirements directly with NMC Ghana.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "Which of these is a SMART professional development goal?",
        options: [
          "To become a very good nurse someday",
          "To study more and work harder in future",
          "To help the unit however I can this year",
          "To complete a life-support course and lead the unit's monthly emergency drills by December",
        ],
        correctIndex: 3,
        explanation:
          "SMART goals are specific, measurable, achievable, relevant and time-bound — the December course-and-drills goal names the what, the when and the evidence. The others are moods, not plans.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Professional Development",
        type: "MCQ",
        difficulty: "Easy",
        stem: "What belongs in a professional portfolio?",
        options: [
          "Certificates, reflective accounts, case logs, appraisals and feedback — evidence of your growth",
          "Only your original training certificate",
          "Personal letters unconnected to practice",
          "Photocopies of colleagues' appraisal forms",
        ],
        correctIndex: 0,
        explanation:
          "A portfolio is the documented trail of your development — the records you can show an employer, a Council or a promotion board. One certificate alone freezes you at graduation.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Professional Development",
        front: "What does SMART stand for in goal setting?",
        back: "Specific, Measurable, Achievable, Relevant, Time-bound — a goal you cannot put in a diary is a daydream.",
      },
      {
        topic: "Professional Development",
        front: "What goes into a nurse's portfolio?",
        back: "Certificates, reflective accounts (Gibbs cycle), case logs, appraisals and feedback — written as they happen, not reconstructed before interviews.",
      },
      {
        topic: "Professional Development",
        front: "Name the main career paths open to a nurse in Ghana.",
        back: "Clinical specialisation through the Ghana College of Nurses and Midwives, public health, education, management and research — with short courses and the nurses' association as accelerators.",
      },
    ],
    sources: [
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Continuing Professional Development requirements for licence renewal",
        note: "Mandatory CPD and documentation for practising nurses. Obtain the current requirements directly from NMC Ghana.",
      },
      {
        organization: "Ghana College of Nurses and Midwives",
        title: "Membership and fellowship training programmes",
        note: "Specialist clinical training pathways for nurses. Obtain current programme details from the College.",
      },
      {
        organization: "World Health Organization",
        title: "State of the World's Nursing 2020",
        year: "2020",
        note: "Nursing education, career pathways and workforce development. Educational reference — verify current data with WHO.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    courseSlug: "leadership-management",
    moduleTitle: "Your Professional Journey",
    lessonTitle: "Becoming a Mentor and Role Model",
    description:
      "The nurse others learn from — the final transformation of your education. Students copy your hands before they copy your notes.",
    difficulty: "Easy",
    durationMin: 12,
    objectives: [
      "Describe the behaviours that make a nurse worth copying — clinical habits, tone and honesty.",
      "Explain the difference between preceptorship, mentorship and role modelling, and what each owes the learner.",
      "Apply a safe, fair approach when a supervised student makes an error.",
    ],
    tags: ["mentorship", "role model", "teaching", "feedback", "patient safety"],
    sourceStatus: "GCU_ALIGNED",
    sections: [
      {
        type: "text",
        title: "What this lesson is about",
        body: "Somewhere ahead of you is a first-year student who will decide what a nurse is by watching you — at 3 am, short-staffed, with a frightened patient in the bed. She will copy your hand hygiene before your handover technique, and your tone with the poorest patient in the ward before any lecture you ever give.\n\nThis lesson is about that final transformation: from one who is taught to one who teaches — and about surviving it, because the nurse others learn from must stay whole herself.",
      },
      {
        type: "text",
        title: "The core ideas",
        body: "A **role model** teaches by existing: gloves, punctuality, how you speak about patients who are absent, how you admit a mistake, how you treat the cleaner and the consultant the same. A **preceptor** supervises a learner's daily practice — the brief-observe-debrief cycle you know. A **mentor** walks with someone for years — questions instead of answers, gentle challenge, opened doors. The three roles overlap in one person: you.\n\nTwo disciplines hold it together. First, psychological safety for learners: praise in public, correct in private, normalise the words 'I don't know — let's find out', and let them see you look things up; a student who is afraid hides mistakes, and hidden mistakes reach patients. Second, the error path: when a student errs, the patient comes first, the error is reported honestly, your supervision takes its share of responsibility, and the debrief happens privately — calm, specific, with a learning plan. The student is also wounded by what she did; treat her as a second victim without ever hiding the report. Protect your own flame: rest, boundaries, a mentor of your own. A hollow nurse lights no one — the torch is passed by hand, and your hand must be steady.",
      },
      {
        type: "clinical_pearl",
        body: "The student remembers your hands longer than your lectures — wash them well, use them gently, and let them be seen doing both. And after every shift you shared, hand over one deliberate lesson: one skill, one story, one honest 'I got that wrong'.",
      },
      {
        type: "case",
        title: "On the ward",
        body: "A student, anxious to impress, gives a wrong dose of a drug under your supervision. You catch it within a minute; the patient is unharmed. The student stands frozen, then whispers, 'Please don't report it — I will lose my place.'\n\nWhat do you do, for the patient, the student and the profession?\n\nAnswer: For the patient: reassess completely and document. For the profession: report honestly — an unreported error teaches concealment, and the next patient may meet the same habit. For the student: own your supervisory share aloud, then debrief her privately — what happened, what the system allowed, what she will change — and set a learning plan with her tutor. Hold her tears with respect; a student who sees you report your own share learns integrity, not fear. She whispered to the wrong person for silence, and the right person for help — be both.",
      },
      {
        type: "memory_trick",
        body: "The torch passes hand to hand: teach one skill, admit one limit, praise one deed — every shift. And keep your own flame lit: rest, boundaries, and a mentor of your own.",
      },
      {
        type: "summary",
        body: "- Role models teach by existing: habits, tone, punctuality and how you treat everyone from cleaner to consultant.\n- Preceptorship supervises daily practice; mentorship walks years — questions, challenge, doors opened.\n- Build psychological safety: praise publicly, correct privately, normalise 'I don't know — let's find out'.\n- When a student errs: patient first, honest report, own your supervisory share, private debrief, learning plan.\n- Protect your own flame — rest, boundaries and your own mentor — because hollow nurses light no one.",
      },
    ],
    questions: [
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Research on clinical learning says students on a ward are influenced most by what?",
        options: [
          "The handbook they were issued at orientation",
          "Lectures from their first year",
          "What they watch you actually do — habits, tone and honesty at 3 am included",
          "The end-of-rotation examination",
        ],
        correctIndex: 2,
        explanation:
          "Clinical culture transmits by observation: hand hygiene, respect, punctuality and honesty are copied long before they are taught. You are the curriculum the student reads every shift.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "A student gives a wrong drug dose under your supervision; you catch it before harm. She begs you not to report it. What is the correct course?",
        options: [
          "Ensure the patient is safe, report the event honestly, own your supervisory share, and debrief the student privately with a learning plan",
          "Let it pass to protect her career and her morale",
          "Report the student and step back from any responsibility yourself",
          "Ask a colleague to document the event under her name instead",
        ],
        correctIndex: 0,
        explanation:
          "The patient comes first, the report follows honestly, and the supervising nurse shares accountability. Concealment teaches concealment — the next error may reach a patient, and the student learns integrity from how you own your part.",
        courseSlug: "leadership-management",
      },
      {
        topic: "Mentor and Role Model",
        type: "MCQ",
        difficulty: "Moderate",
        stem: "What best describes the difference between a preceptor and a mentor?",
        options: [
          "There is no difference — the words are interchangeable",
          "A preceptor supervises daily practice and skills for a placement; a mentor walks with the learner over years, challenging and opening doors",
          "A mentor is only for senior managers; preceptors are for students",
          "A preceptor signs attendance registers; a mentor signs prescriptions",
        ],
        correctIndex: 1,
        explanation:
          "Preceptorship is the structured, placement-bound supervision of daily practice; mentorship is the longer arc — questions, challenge, sponsorship and reachability across a career. One nurse can be both.",
        courseSlug: "leadership-management",
      },
    ],
    flashcards: [
      {
        topic: "Mentor and Role Model",
        front: "What do students learn from a role model before anything else?",
        back: "What you do: hand hygiene, tone with the poorest patient, punctuality, how you speak about absent colleagues, and how you admit mistakes.",
      },
      {
        topic: "Mentor and Role Model",
        front: "A supervised student makes an error — what is the order of duties?",
        back: "Patient first (reassess and document), then honest reporting, then own your supervisory share, then a private debrief and learning plan with her tutor.",
      },
      {
        topic: "Mentor and Role Model",
        front: "Preceptor versus mentor?",
        back: "A preceptor supervises daily practice for a placement; a mentor walks years — asking questions, challenging gently, opening doors, staying reachable.",
      },
    ],
    sources: [
      {
        organization: "World Health Organization",
        title: "WHO Patient Safety Curriculum Guide: Multi-Professional Edition",
        year: "2011",
        url: "https://www.who.int/publications/i/item/9789241501950",
        note: "Learning from error, supervision and speaking-up culture. Verify current edition.",
      },
      {
        organization: "Nursing and Midwifery Council of Ghana",
        title: "Code of Professional Conduct for Nurses and Midwives",
        note: "Conduct, accountability and honesty in supervision and reporting. Obtain the current version from NMC Ghana.",
      },
      {
        organization: "Pearson",
        title: "Kozier & Erb's Fundamentals of Nursing",
        year: "2021",
        note: "Professional socialisation, teaching and mentorship chapters. Educational source — verify current edition.",
      },
    ],
  },
];
